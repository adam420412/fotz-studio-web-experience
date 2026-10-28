import test from 'node:test';
import assert from 'node:assert/strict';
import { getPublishedArticle, listPublishedArticles } from '../src/lib/public-cms.mjs';
import { serveBlogArticle, serveBlogSitemap, mergeBlogSitemap } from '../src/lib/live-blog.mjs';
import { prepareBlogHtml } from '../src/lib/blog-seo.mjs';
const config = { url: 'https://cms.example.com', key: 'public-test-key' };
const article = {slug:'nowy-opublikowany-wpis',title:'Jak przygotować materiały do strony firmowej',content_html:'<h2>Materiały do projektu</h2><p>Przygotuj zdjęcia i opis oferty.</p>',meta_description:'Jak przygotować zdjęcia, opisy usług i informacje kontaktowe przed rozpoczęciem projektu strony firmowej.',is_published:true,updated_at:'2026-10-28T10:00:00Z'};
const request = (method='GET',slug=article.slug) => new Request(`https://www.fotz-studio.pl/api/blog-article?slug=${slug}`,{method});
const template = '<!doctype html><html><head><meta name="author" content="Fotz Studio" /></head><body><div id="root"></div></body></html>';
const renderPage = async (_file,path,articles) => ({body:`<main><h1>${articles[0].title}</h1><p>Pełny artykuł</p></main>`,scripts:'',bootstrap:JSON.stringify({version:1,path,article:articles[0]})});
const baseXml = '<urlset><url><loc>https://www.fotz-studio.pl/blog/starszy-poradnik</loc><lastmod>2026-10-01</lastmod></url></urlset>';

test('one deployment supports missing → published → withdrawn CMS article without changing a route manifest', async () => {
  let published=false, calls=0;
  const fetcher=async (url,options) => {
    calls++;
    assert.equal(url.searchParams.get('is_published'),'eq.true');
    assert.equal(url.searchParams.get('slug'),`eq.${article.slug}`);
    assert.equal(options.headers.apikey,config.key);
    assert.equal(url.searchParams.get('select').includes('*'),false);
    return Response.json(published ? [article] : []);
  };
  const deps={config,template,renderPage,fetcher};
  let result=await serveBlogArticle(request(),deps);
  assert.equal(result.status,404);assert.match(await result.text(),/Strona nie istnieje/);
  published=true;
  result=await serveBlogArticle(request(),deps);
  assert.equal(result.status,200);assert.equal(result.headers.get('x-fotz-content'),'live-cms');
  const body=await result.text();
  assert.match(body,/<h1>Jak przygotować/);
  assert.match(body,/rel="canonical" href="https:\/\/www.fotz-studio.pl\/blog\/nowy-opublikowany-wpis"/);
  assert.match(body,/name="robots" content="index, follow"/);
  assert.match(body,/fotz-blog-data/);assert.doesNotMatch(body,/public-test-key/);
  const head=await serveBlogArticle(request('HEAD'),deps);
  assert.equal(head.status,200);assert.equal(await head.text(),'');
  published=false;
  result=await serveBlogArticle(request(),deps);
  assert.equal(result.status,404);assert.match(result.headers.get('x-robots-tag'),/noindex/);
  assert.equal(calls,4);
});

test('CMS failures and incomplete content produce temporary 503, never a cacheable false 404',async()=>{
  for(const fetcher of [async()=>new Response('',{status:500}),async()=>{throw new Error('offline');},async()=>Response.json([{...article,content_html:''}])]){
    const response=await serveBlogArticle(request(),{config,template,renderPage,fetcher,logError:()=>{}});
    assert.equal(response.status,503);assert.equal(response.headers.get('cache-control'),'no-store');assert.equal(response.headers.get('retry-after'),'60');
  }
});

test('invalid slugs and unsupported methods cannot query the CMS',async()=>{
  const fetcher=()=>{throw new Error('Should not query');};
  for(const slug of ['../other','slug%2Fother','__proto__','a'.repeat(201)]){
    assert.equal(await getPublishedArticle(config,slug,fetcher),null);
  }
  const response=await serveBlogArticle(request('POST'),{config,template,renderPage,fetcher});
  assert.equal(response.status,405);
});

test('live sitemap retains reviewed paths and dates, appends new publications once, and omits noindex tests',async()=>{
  const articles=[article,article,{...article,slug:'starszy-poradnik'},{...article,slug:'test',title:'Test',meta_description:'',excerpt:''}];
  const body=mergeBlogSitemap(baseXml,articles);
  assert.equal((body.match(/nowy-opublikowany-wpis/g)||[]).length,1);
  assert.equal((body.match(/starszy-poradnik/g)||[]).length,1);
  assert.match(body,/<lastmod>2026-10-01<\/lastmod>/);
  assert.match(body,/<lastmod>2026-10-28T10:00:00.000Z<\/lastmod>/);
  assert.doesNotMatch(body,/\/blog\/test</);
  const response=await serveBlogSitemap(new Request('https://www.fotz-studio.pl/sitemap-blog.xml'),{config,baseXml,fetcher:async()=>Response.json(articles)});
  assert.equal(response.status,200);assert.match(response.headers.get('content-type'),/application\/xml/);
  const failed=await serveBlogSitemap(new Request('https://www.fotz-studio.pl/sitemap-blog.xml'),{config,baseXml,fetcher:async()=>new Response('',{status:503}),logError:()=>{}});
  assert.equal(failed.status,503);assert.equal(failed.headers.get('cache-control'),'no-store');
});

test('public sitemap fetch paginates instead of silently dropping entries past the API row limit',async()=>{
  const offsets=[];
  const all=Array.from({length:1001},(_,i)=>({...article,slug:`artykul-${i}`}));
  const rows=await listPublishedArticles(config,async url=>{const offset=Number(url.searchParams.get('offset'));offsets.push(offset);return Response.json(all.slice(offset,offset+500));});
  assert.deepEqual(offsets,[0,500,1000]);assert.equal(rows.length,1001);
});

test('CMS content retains article structure while removing executable HTML',()=>{
  const body=prepareBlogHtml('<h1 id="start">Tytuł</h1><script>alert(1)</script><p onclick="evil()">Treść <a href="javascript:evil()">link</a></p><iframe src="https://example.com"></iframe><table><tr><th scope="col">Nazwa</th></tr></table>');
  assert.match(body,/<h2 id="start">Tytuł<\/h2>/);assert.match(body,/scope="col"/);
  assert.doesNotMatch(body,/script|onclick|javascript:|iframe|evil\(/);
});
