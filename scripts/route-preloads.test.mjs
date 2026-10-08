import test from 'node:test';
import assert from 'node:assert/strict';
import { routeAssets, addRoutePreloads, addHeroPreload } from './lib/route-preloads.mjs';

const manifest = {
  'src/pages/Offer.tsx': { file: 'assets/offer.js', imports: ['_shared.js'], dynamicImports: ['src/pages/Other.tsx'] },
  '_shared.js': { file: 'assets/shared.js', css: ['assets/shared.css'], imports: ['src/pages/Offer.tsx'] },
  'src/pages/Other.tsx': { file: 'assets/other.js' },
};
test('preloads one route and shared static dependencies despite cycles, without unrelated dynamic routes', () => {
  assert.deepEqual(routeAssets(manifest, 'src/pages/Offer.tsx'), [
    { file: 'assets/offer.js', rel: 'modulepreload' },
    { file: 'assets/shared.css', rel: 'stylesheet' },
    { file: 'assets/shared.js', rel: 'modulepreload' },
  ]);
  assert.deepEqual(routeAssets(manifest, 'src/pages/Index.tsx'), []);
  assert.throws(() => routeAssets({ page: { file: 'assets/p.js', imports: ['missing'] } }, 'page'), /Missing manifest/);
});
test('existing entry scripts and preloads are not duplicated and repeated injection is idempotent', () => {
  const html = '<head><script type="module" src="/assets/offer.js"></script><link rel="modulepreload" crossorigin href="/assets/shared.js"></head><body>Offer</body>';
  const result = addRoutePreloads(html, manifest, 'src/pages/Offer.tsx');
  assert.equal((result.match(/assets\/offer.js/g) || []).length, 1);
  assert.equal((result.match(/assets\/shared.js/g) || []).length, 1);
  assert.ok(result.includes('rel="stylesheet" crossorigin href="/assets/shared.css"'));
  assert.equal(addRoutePreloads(result, manifest, 'src/pages/Offer.tsx').replace(/\n/g, ''), result.replace(/\n/g, ''));
});
test('image preload uses the actual high-priority image and preserves responsive candidates and escaped URLs', () => {
  const html = '<head></head><body></body>';
  const body = '<img src="lazy.webp" loading="lazy"/><img src="hero.webp?a=1&amp;b=2" srcSet="small.webp 480w, hero.webp 800w" sizes="90vw" fetchpriority="high"/>';
  const result = addHeroPreload(html, body);
  assert.match(result, /imagesrcset="small.webp 480w, hero.webp 800w" imagesizes="90vw"/);
  assert.match(result, /href="hero.webp\?a=1&amp;b=2"/);
  assert.doesNotMatch(result, /lazy.webp|amp;amp/);
  assert.equal(addHeroPreload(html, '<img src="lazy.webp"/>'), html);
});
