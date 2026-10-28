import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { notFoundHtml } from '../src/lib/not-found-html.mjs';
import { readSource, literal } from './lib/seo-metadata.mjs';
const source = fs.readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8'));
const retiredPodcast = JSON.parse(fs.readFileSync(new URL('../src/data/retired-podcast.json', import.meta.url), 'utf8'));
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const exports = {};
let requests = [];
vm.runInNewContext(output, { exports, require: name => {
  if (name === './known-routes.json') return manifest;
  if (name === './src/data/retired-podcast.json') return retiredPodcast;
  if (name === './src/lib/not-found-html.mjs') return { notFoundHtml };
  throw new Error(`Unexpected middleware dependency: ${name}`);
}, URL, Request, Response, Set, fetch: async url => { requests.push(url.toString()); throw Error('Error responses must not fetch another page'); } });
const middleware = exports.default;

test('withdrawn podcast URLs return 410 without the old offer, schema or SPA fallback', async () => {
  requests = [];
  for (const path of ['/uslugi/studio-podcastowe', '/studio-podcastowe', '/uslugi/studio-podcastowe/?utm_source=google', '/studio-podcastowe/?ref=old']) {
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.status, 410, path);
    assert.equal(result.headers.get('x-middleware-next'), null);
    assert.match(result.headers.get('x-robots-tag'), /noindex/);
    assert.match(result.headers.get('content-type'), /text\/html/);
    const body = await result.text();
    assert.ok(body.includes(retiredPodcast.heading));
    assert.ok(body.includes(retiredPodcast.description));
    assert.match(body, /<meta name="robots" content="noindex/);
    assert.equal((body.match(/<h1>/g) || []).length, 1);
    assert.doesNotMatch(body, /<script|canonical|application\/ld\+json|350|600|Shure|Rode/i);
    assert.match(body, /href="\/"/);
    assert.match(body, /href="\/kontakt"/);
  }
  assert.equal(requests.length, 0, 'Retirement response must not depend on a second fetch');
  const head = await middleware(new Request('https://www.fotz-studio.pl/uslugi/studio-podcastowe', { method: 'HEAD' }));
  assert.equal(head.status, 410);
  assert.equal(await head.text(), '');
});

test('code-example file URLs receive a real 404 rather than the SPA homepage', async () => {
  for (const path of ['/blog/dist/index.mjs', '/blog/dist/index.d.ts', '/blog/module.wasm?url', '/blog/dist/index.cjs', '/blog/pkg/mylib']) {
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.status, 404, path);
    assert.equal(result.headers.get('x-middleware-next'), null);
    assert.match(await result.text(), /noindex/);
  }
  assert.ok(requests.every(url => url === 'https://www.fotz-studio.pl/404.html'));
});

test('unknown blog and social media slugs return a useful, standalone 404 for GET and HEAD', async () => {
  requests = [];
  for (const path of ['/agencja-social-media/nie-istnieje-xyz', '/agencja-social-media/toString', '/agencja-social-media/__proto__', '/blog/%E0%A4%A', '/blog%2Fd%C5%82ug-techniczny-co-to']) {
    for (const method of ['GET', 'HEAD']) {
      const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`, { method }));
      assert.equal(result.status, 404, `${method} ${path}`);
      assert.equal(result.headers.get('x-middleware-next'), null);
      assert.match(result.headers.get('x-robots-tag'), /noindex/);
      const body = await result.text();
      if (method === 'HEAD') { assert.equal(body, ''); continue; }
      assert.match(body, /<h1>Strona nie istnieje<\/h1>/);
      assert.match(body, /<meta name="robots" content="noindex/);
      assert.match(body, /href="\/"/);
      assert.match(body, /href="\/kontakt"/);
      assert.doesNotMatch(body, /<script|canonical|application\/ld\+json/);
    }
  }
  assert.equal(requests.length, 0);
});

test('all published CMS articles and social media clusters are known, including encoded URLs', async () => {
  const articles = JSON.parse(fs.readFileSync(new URL('../src/data/blog-content.json', import.meta.url))).articles;
  const source = readSource(fileURLToPath(new URL('../src/data/socialMediaClusters.ts', import.meta.url)));
  const clusters = literal(source.scope.get('SOCIAL_MEDIA_CLUSTERS'), source);
  const paths = [...articles.map(article => `/blog/${article.slug}`), ...clusters.map(cluster => cluster.path), '/blog/dług-techniczny-co-to'];
  for (const path of paths) {
    assert.ok(manifest.staticRoutes.includes(path), `Run build to include ${path}`);
    for (const variant of [path, `${encodeURI(path)}/?utm_source=test`]) {
      const result = await middleware(new Request(`https://www.fotz-studio.pl${variant}`));
      assert.equal(result.headers.get('x-middleware-next'), '1', variant);
    }
  }
});

test('existing public files and application resources pass through', async () => {
  assert.ok(manifest.staticFiles.includes('/logo-fotz.jpg'), 'Run build to regenerate the asset manifest');
  requests = [];
  for (const path of ['/logo-fotz.jpg', '/kampanie/strony.html', '/assets/app.js', '/api/send-contact', '/kontakt', '/admin/rezerwacje', '/akademia/kurs']) {
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.headers.get('x-middleware-next'), '1', path);
  }
  assert.equal(requests.length, 0);
});


test('new CMS slugs are rewritten for published-content lookup, not passed to the SPA', async () => {
  for (const path of ['/blog/newly-published', '/blog/newly-published/?utm_source=google']) {
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.headers.get('x-middleware-next'), null);
    assert.equal(result.headers.get('x-middleware-rewrite'), 'https://www.fotz-studio.pl/api/blog-article?slug=newly-published');
  }
  const sitemap = await middleware(new Request('https://www.fotz-studio.pl/sitemap-blog.xml'));
  assert.equal(sitemap.headers.get('x-middleware-rewrite'), 'https://www.fotz-studio.pl/api/blog-sitemap');
});
