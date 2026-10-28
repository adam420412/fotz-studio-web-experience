import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { getOwnPhoto, isApprovedPhoto, ownPhotoHtml, ownPhotoSchema } from '../src/lib/own-photos.mjs';
import { getBlogMetadata, prepareBlogHtml } from '../src/lib/blog-seo.mjs';

test('CMS photos cannot bypass the reviewed catalogue with a local-looking or new remote URL', () => {
  for (const source of ['https://images.unsplash.com/a.jpg', '/blog-images/old-stock.webp', 'https://evil.test/work/fotz-work-1200.webp', 'https://www.fotz-studio.pl.evil.test/work/fotz-work-1200.webp']) {
    assert.equal(isApprovedPhoto(source), false);
    const article = { slug: 'kampania', title: 'Kampania', hero_image_url: source };
    assert.match(getBlogMetadata(article).ogImage, /\/work\/fotz-/);
    assert.doesNotMatch(prepareBlogHtml(`<picture><source srcset="${source}"><img src="${source}"></picture>`), /<img|<source/);
  }
  assert.equal(isApprovedPhoto('/work/fotz-work-1200.webp'), true);
});

test('unreviewed illustrations lose misleading captions but preserve useful text links', () => {
  const input = '<p>Poradnik</p><figure><img src="https://example.com/stock.jpg"><figcaption>Obcy gabinet. <a href="/kontakt">Kontakt</a></figcaption></figure><h2 id="dalej">Dalszy tekst</h2>';
  const html = ownPhotoHtml(input);
  assert.doesNotMatch(html, /stock|Obcy gabinet|<img/);
  assert.match(html, /<a href="\/kontakt">Kontakt<\/a>/);
  assert.match(html, /<h2 id="dalej">Dalszy tekst<\/h2>/);
});

test('cover variants exist and article schema uses our photo without mutating source', () => {
  for (const topic of ['podcast', 'instagram', 'architektura', 'sklep', 'wydarzenia', 'marketing']) {
    const photo = getOwnPhoto(topic);
    assert.ok(fs.statSync(new URL(`../public${photo.src}`, import.meta.url)).size > 0);
    assert.ok(photo.alt.length > 20);
  }
  const schema = { '@type': 'Article', image: { url: 'https://example.com/stock.jpg' }, author: { name: 'FOTZ' } };
  const result = ownPhotoSchema(schema, 'podcast');
  assert.match(result.image, /\/work\//);
  assert.equal(result.author.name, 'FOTZ');
  assert.equal(schema.image.url, 'https://example.com/stock.jpg');
});
