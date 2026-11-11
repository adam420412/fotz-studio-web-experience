import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/BlogSEOTechniczne.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');

const readConstant = (name) => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('technical SEO guide has concise 2026 metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');

  assert.ok(title.includes('Techniczne SEO'));
  assert.ok(title.includes('2026'));
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/seo-techniczne-poradnik');
  assert.match(source, /title=\{seoTitle\}/);
  assert.match(source, /description=\{seoDescription\}/);
  assert.match(source, /canonical=\{canonicalUrl\}/);
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
});

test('technical SEO guide keeps one main landmark and unique static anchors', () => {
  assert.equal((source.match(/<article id="article-content"/g) || []).length, 1);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);

  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique');
  for (const match of source.matchAll(/href: "(#[^"]+)"/g)) {
    assert.ok(ids.includes(match[1].slice(1)), `Missing contents target: ${match[1]}`);
  }
});

test('ArticleSchema preserves publication history and uses the final canonical', () => {
  assert.match(source, /headline: "Techniczne SEO: audyt i optymalizacja strony krok po kroku"/);
  assert.match(source, /datePublished: "2025-04-12"/);
  assert.match(source, /dateModified: "2026-11-11"/);
  assert.match(source, /url: canonicalUrl/);
  assert.match(source, /<ArticleSchema data=\{articleData\} \/>/);
  assert.match(source, /Publikacja: 12 kwietnia 2025 · Aktualizacja: 11 listopada 2026/);
});

test('visible FAQ and FAQPage schema use exactly the same source items', () => {
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item\) =>/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
  assert.doesNotMatch(source, /Accordion/);
  assert.match(source, /Jakie są progi Core Web Vitals\?/);
  assert.match(source, /FID został zastąpiony przez INP/);
});

test('guide remains informational and links only to existing related routes', () => {
  assert.match(source, /informacyjny plan pracy, a nie opis zakresu usługi/);
  assert.doesNotMatch(source, /2025: Core|\$199|129\$|99\$|gwarantujemy (?:pozycje|kliknięcia|klientów|wzrost)/i);
  assert.doesNotMatch(source, /Zwiększ ruch organiczny już dzisiaj|strony z złymi Core Web Vitals tracą miejsca/i);

  const internalLinks = [...source.matchAll(/<Link[\s\S]*?to="([^"]+)"/g)].map((match) => match[1]);
  assert.ok(internalLinks.length >= 4);
  for (const path of internalLinks) {
    assert.ok(appSource.includes(`<Route path="${path}"`), `Route does not exist: ${path}`);
  }
  assert.ok(internalLinks.includes('/seo/techniczne'));
  assert.ok(!internalLinks.includes('/seo/audyt'), 'Guide must not duplicate the separate audit offer CTA');
});
