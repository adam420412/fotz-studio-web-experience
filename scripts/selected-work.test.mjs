import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { getWorkCollection } from '../src/lib/selected-work.mjs';
import { workImages, workCollections } from '../src/data/selected-work.mjs';

test('portfolio selection follows page intent without claiming local project locations', () => {
  for (const [route, expected] of [
    ['/', 'studio'], ['/social-media/obsluga', 'social'], ['/agencja-social-media/warszawa', 'social'],
    ['/uslugi/strony-internetowe/poznan', 'web'], ['/seo/audyt', 'web'],
    ['/dla-kogo/gastronomia', 'spaces'], ['/dla-kogo/instytucje', 'events'],
    ['/uslugi/branding', 'product'], ['/fotograf-poznan', 'photo'],
    ['/uslugi/produkcja-video/', 'production'], ['/blog/instagram-dla-firmy', 'social'],
  ]) assert.equal(getWorkCollection(route), expected, route);
  for (const route of ['/konsultacja', '/podziekowanie', '/polityka-prywatnosci', '/akademia/auth', '/realizacje/enea-stadion', '/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress', '/nie-istnieje']) assert.equal(getWorkCollection(route), null, route);
});

test('curated photos have real source files, valid destinations and bounded responsive files', async () => {
  const manifest = JSON.parse(await readFile(new URL('../src/data/selected-work-images.json', import.meta.url)));
  const routes = JSON.parse(await readFile(new URL('../known-routes.json', import.meta.url))).staticRoutes;
  for (const [id, item] of Object.entries(workImages)) {
    assert.ok((await stat(new URL(`../src/assets/${item.source}`, import.meta.url))).size > 0);
    assert.ok(routes.includes(item.href), `${id}: unknown case page`);
    assert.ok(item.alt.length > 20, `${id}: missing image description`);
    const variants = manifest[id];
    assert.ok(variants.length >= 2, `${id}: missing responsive sizes`);
    for (const variant of variants) {
      const size = (await stat(new URL(`../public${variant.src}`, import.meta.url))).size;
      assert.equal(size, variant.bytes);
      assert.ok(size <= 160_000, `${id}: image exceeds 160 kB`);
      assert.ok(variant.width > 0 && variant.height > 0);
    }
  }
  for (const group of Object.values(workCollections)) {
    assert.equal(new Set(group.images).size, 3);
    assert.ok(group.images.every(id => workImages[id]));
  }
});
