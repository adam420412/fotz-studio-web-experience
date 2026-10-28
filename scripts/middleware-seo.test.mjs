import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = fs.readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8'));
const retiredPodcast = JSON.parse(fs.readFileSync(new URL('../src/data/retired-podcast.json', import.meta.url), 'utf8'));
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const exports = {};
let requests = [];
vm.runInNewContext(output, { exports, require: name => {
  if (name === './known-routes.json') return manifest;
  if (name === './src/data/retired-podcast.json') return retiredPodcast;
  throw new Error(`Unexpected middleware dependency: ${name}`);
}, URL, Request, Response, Set, fetch: async url => { requests.push(url.toString()); return new Response('<html><meta name="robots" content="noindex"><h1>404</h1></html>'); } });
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

test('existing public files, normal CMS slugs and application resources pass through', async () => {
  assert.ok(manifest.staticFiles.includes('/logo-fotz.jpg'), 'Run build to regenerate the asset manifest');
  requests = [];
  for (const path of ['/logo-fotz.jpg', '/kampanie/strony.html', '/blog/published-cms-slug', '/assets/app.js', '/api/send-contact', '/kontakt']) {
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.headers.get('x-middleware-next'), '1', path);
  }
  assert.equal(requests.length, 0);
});
