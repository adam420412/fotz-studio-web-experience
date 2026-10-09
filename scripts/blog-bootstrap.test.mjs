import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { QueryClient, QueryObserver } from '@tanstack/react-query';
import { blogBootstrap, serializeBlogBootstrap, readBlogBootstrap, formatBlogDate } from '../src/lib/blog-bootstrap.mjs';
import { getBlogMetadata, prepareBlogHtml } from '../src/lib/blog-seo.mjs';
import { getBlogImage } from '../src/lib/blog-images.mjs';

const articles = JSON.parse(fs.readFileSync(new URL('../src/data/blog-content.json', import.meta.url))).articles;
const sample = articles[0];
const path = `/blog/${sample.slug}`;
const images = JSON.parse(fs.readFileSync(new URL('../src/data/blog-images.json', import.meta.url)));

test('every public CMS cover has real responsive files and later CMS changes fall back to the new source', () => {
  for (const article of articles.filter(article => !getBlogMetadata(article).noIndex)) {
    const image = images[article.slug];
    assert.equal(image.source, article.hero_image_url);
    assert.equal(image.variants.length, 3);
    for (const variant of image.variants) {
      assert.equal(fs.statSync(new URL(`../public${variant.src}`, import.meta.url)).size, variant.bytes);
      assert.ok(variant.width > 0 && variant.height > 0);
    }
    assert.match(getBlogImage(article, images).srcSet, /480w/);
    assert.deepEqual(getBlogImage({...article, hero_image_url:'https://example.com/new.jpg'}, images), {src:'https://example.com/new.jpg'});
  }
  assert.deepEqual(getBlogImage({slug:'new',hero_image_url:'https://example.com/new.jpg'},images), {src:'https://example.com/new.jpg'});
});

test('every public CMS snapshot preserves rendered content and metadata, exposing only page fields', () => {
  for (const article of articles) {
    const url = `/blog/${article.slug}`;
    const decoded = readBlogBootstrap(serializeBlogBootstrap(blogBootstrap({ ...article, private_token: 'secret' }, url)), url);
    assert.ok(decoded, url);
    assert.deepEqual(getBlogMetadata(decoded), getBlogMetadata(article));
    assert.equal(prepareBlogHtml(decoded.content_html, decoded.slug), prepareBlogHtml(article.content_html, article.slug));
    assert.equal(decoded.published_at, article.published_at);
    assert.equal(decoded.private_token, undefined);
    assert.equal(decoded.content_markdown, undefined);
  }
});

test('bootstrap JSON cannot break out of its script and rejects mismatched routes or invalid data', () => {
  const article = { ...sample, content_html: '</script><script>alert(1)</script><!-- & > \u2028\u2029' };
  const json = serializeBlogBootstrap(blogBootstrap(article, path));
  assert.doesNotMatch(json, /[<>&\u2028\u2029]/);
  assert.equal(readBlogBootstrap(json, path).content_html, article.content_html);
  for (const value of [undefined, '', '{}', 'null', '{bad', JSON.stringify({version:2,path,article}), JSON.stringify({version:1,path,article:{...article,slug:'../escape'}})]) {
    assert.equal(readBlogBootstrap(value, path), null);
  }
  assert.equal(readBlogBootstrap(json, '/blog/other'), null);
  assert.equal(blogBootstrap({...sample,is_published:false}, path), null);
});

test('publication date uses Warsaw regardless of server/browser timezone and tolerates missing dates', () => {
  assert.equal(formatBlogDate('2026-10-08T23:30:00Z'), '9 października 2026');
  for (const value of [null, undefined, '', 'invalid']) assert.equal(formatBlogDate(value), '');
});

test('stale bootstrap renders immediately, refreshes in the background and keeps data after a network failure', async () => {
  const client = new QueryClient({defaultOptions:{queries:{retry:false}}});
  const key = ['blog-article', sample.slug];
  client.setQueryData(key, sample, {updatedAt:1});
  let rejectRequest;
  const observer = new QueryObserver(client, {queryKey:key, staleTime:300000,
    queryFn:()=>new Promise((_, reject)=>{rejectRequest=reject;})});
  const done = new Promise(resolve => {
    const stop = observer.subscribe(result => {if(result.isError){stop();resolve(result);}});
  });
  assert.equal(observer.getCurrentResult().data.title, sample.title);
  assert.equal(observer.getCurrentResult().isLoading, false);
  assert.equal(observer.getCurrentResult().isFetching, true);
  rejectRequest(new Error('offline'));
  const failed = await done;
  assert.equal(failed.data.title, sample.title);
  assert.equal(client.getQueryData(['blog-article','different-slug']), undefined);
  client.clear();
});

test('article UI retains cached content on refresh failure and offers retry on a cold failure', () => {
  const require = createRequire(import.meta.url);
  let state = {data:sample,isLoading:false,error:new Error('offline')}, retries=0;
  const mocks = {
    'react-router-dom': {useParams:()=>({slug:sample.slug}), Navigate:'redirect', Link:'a'},
    'react-helmet-async': {Helmet:'head'},
    '@/components/layout/Layout':{Layout:'layout'},
    '@/components/seo/SEOHead':{SEOHead:'seo'},
    '@/components/seo/StructuredData':{BreadcrumbSchema:'schema',ArticleSchema:'schema'},
    '@/components/ui/skeleton':{Skeleton:'skeleton'},
    '@/components/ui/button':{Button:'button'},
    '@/hooks/useBlogArticles':{useBlogArticle:()=>({...state,refetch:()=>{retries++;}})},
    '@/lib/blog-bootstrap.mjs':{formatBlogDate},
    '@/lib/blog-images.mjs':{getBlogImage},
    '@/data/blog-images.json':{default:images},
    '@/lib/blog-seo.mjs':{getBlogMetadata,prepareBlogHtml,normalizeSchemaUrls:v=>v},
  };
  const code=ts.transpileModule(fs.readFileSync(new URL('../src/pages/BlogArticleDynamic.tsx',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,jsx:ts.JsxEmit.ReactJSX}}).outputText;
  const context={exports:{},require:name=>mocks[name]??require(name)};
  vm.runInNewContext(code,context);
  const render=context.exports.default;
  const find=(node,predicate)=>!node||typeof node!=='object'?undefined:predicate(node)?node:[node.props?.children].flat(Infinity).map(n=>find(n,predicate)).find(Boolean);
  assert.equal(find(render(),n=>n.type==='h1').props.children,sample.title);
  state={...state,data:undefined};
  const alert=find(render(),n=>n.props?.role==='alert');
  assert.ok(alert);
  find(alert,n=>n.type==='button').props.onClick();
  assert.equal(retries,1);
  state={data:null,isLoading:false,error:null};
  assert.equal(render().type,'redirect');
});
