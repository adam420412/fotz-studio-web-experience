import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = fs.readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8'));
const retired = JSON.parse(fs.readFileSync(new URL('../src/data/retired-blog.json', import.meta.url), 'utf8'));
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const exports = {};
let requests = [];
vm.runInNewContext(output, { exports, require: name => name.includes('retired-blog') ? retired : manifest, URL, Request, Response, Set, fetch: async url => { requests.push(url.toString()); return new Response('<html><meta name="robots" content="noindex"><h1>404</h1></html>'); } });
const middleware = exports.default;

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

test('retired blog posts answer 410 Gone and are no longer routes or sitemap entries', async () => {
  const app = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
  const sitemaps = fs.readdirSync(new URL('../public/', import.meta.url)).filter(name => /^sitemap.*\.xml$/.test(name))
    .map(name => fs.readFileSync(new URL(`../public/${name}`, import.meta.url), 'utf8')).join('\n');
  assert.ok(retired.gone.length > 300);
  for (const path of [...retired.gone.slice(0, 25), encodeURI(retired.gone.find(item => /[^\x00-\x7f]/.test(item)) ?? retired.gone[0])]) {
    requests = [];
    const result = await middleware(new Request(`https://www.fotz-studio.pl${path}`));
    assert.equal(result.status, 410, path);
    assert.match(await result.text(), /noindex/);
  }
  for (const path of retired.gone) {
    assert.ok(!app.includes(`path="${path}"`), `route still declared: ${path}`);
    assert.ok(!sitemaps.includes(`https://www.fotz-studio.pl${path}<`), `still in sitemap: ${path}`);
  }
});

test('merged blog posts redirect permanently to a kept page', () => {
  const { redirects } = JSON.parse(fs.readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'));
  const gone = new Set(retired.gone);
  for (const { source, destination } of retired.redirects) {
    const rule = redirects.find(item => item.source === source);
    assert.ok(rule?.permanent === true && rule.destination === destination, source);
    assert.ok(!gone.has(destination) && !retired.redirects.some(item => item.source === destination), `${source} → ${destination} must end on a kept page`);
  }
});
