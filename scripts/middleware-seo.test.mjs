import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';
const source = fs.readFileSync(new URL('../middleware.ts', import.meta.url), 'utf8');
const manifest = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8'));
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
const exports = {};
let requests = [];
vm.runInNewContext(output, { exports, require: () => manifest, URL, Request, Response, Set, fetch: async url => { requests.push(url.toString()); return new Response('<html><meta name="robots" content="noindex"><h1>404</h1></html>'); } });
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
