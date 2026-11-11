import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  getBlogArticleSchema,
  getBlogFaqSchema,
  getBlogHeadline,
  getBlogMetadata,
  prepareBlogHtml,
} from '../src/lib/blog-seo.mjs';

const slug = 'strategia-content-marketingu-skuteczny-przewodnik-dla-firm';
const canonical = `https://www.fotz-studio.pl/blog/${slug}`;
const { articles } = JSON.parse(fs.readFileSync(new URL('../src/data/blog-content.json', import.meta.url), 'utf8'));
const article = articles.find(item => item.slug === slug);

test('2026 content strategy guide has final metadata and one unique anchor set', () => {
  const metadata = getBlogMetadata(article);
  assert.equal(metadata.title, 'Strategia content marketingowa — poradnik 2026 | FOTZ');
  assert.ok(metadata.title.length <= 60);
  assert.equal(metadata.description, 'Strategia content marketingowa krok po kroku: cele, odbiorcy, treści, SEO, dystrybucja i pomiar. Zobacz, jak stworzyć plan dla firmy w 2026 roku.');
  assert.ok(metadata.description.length <= 160);
  assert.equal(metadata.canonical, canonical);
  assert.match(getBlogHeadline(article), /^Strategia content marketingowa/);
  assert.match(getBlogHeadline(article), /2026/);

  const html = prepareBlogHtml(article.content_html, slug);
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.doesNotMatch(html, /<h1\b/);
  for (const [, fragment] of html.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(decodeURIComponent(fragment)), `Missing fragment: ${fragment}`);
  }
});

test('Article and FAQ schema use canonical, real dates and the visible FAQ', () => {
  const schema = getBlogArticleSchema(article);
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.url, canonical);
  assert.equal(schema['@id'], canonical);
  assert.equal(schema.mainEntityOfPage['@id'], canonical);
  assert.equal(schema.headline, getBlogHeadline(article));
  assert.equal(schema.description, getBlogMetadata(article).description);
  assert.equal(schema.datePublished, article.published_at);
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(Date.parse(schema.dateModified) >= Date.parse(schema.datePublished));

  const html = prepareBlogHtml(article.content_html, slug);
  const faq = getBlogFaqSchema(article);
  assert.equal(faq['@type'], 'FAQPage');
  assert.equal(faq.mainEntity.length, 5);
  for (const item of faq.mainEntity) {
    assert.ok(html.includes(`>${item.name}</h3>`), `FAQ not visible: ${item.name}`);
    assert.ok(html.includes(`>${item.acceptedAnswer.text}</p>`), `Answer differs: ${item.name}`);
  }
});
