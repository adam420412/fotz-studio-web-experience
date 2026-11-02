import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/BlogSEODlaMalychFirm.tsx', import.meta.url), 'utf8');

const readConstant = (name) => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('small business SEO article has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');

  assert.ok(title.includes('SEO dla małych firm'));
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/seo-dla-malych-firm');
  assert.match(source, /canonical=\{canonicalUrl\}/);
  assert.match(source, /<article id="main-content"/);
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
});

test('small business SEO article preserves publication history and owns its structured data', () => {
  assert.match(source, /datePublished: "2026-03-15"/);
  assert.match(source, /dateModified: "2026-11-02"/);
  assert.match(source, /<ArticleSchema data=\{articleData\} \/>/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
  assert.doesNotMatch(source, /Accordion/);
});

test('small business SEO article covers the intended work and links to real destinations', () => {
  for (const text of [
    'Priorytety SEO dla małych firm',
    'Lokalne SEO i profil firmy w Google',
    'Frazy z intencją zakupową',
    'Techniczne minimum SEO',
    'Pomiar zapytań i widoczności w Google',
    'Dni 1–30',
    'Dni 31–60',
    'Dni 61–90',
  ]) assert.ok(source.includes(text), `Missing section: ${text}`);

  for (const path of ['/seo/pozycjonowanie', '/seo/audyt', '/kontakt']) {
    assert.ok(source.includes(`to="${path}"`), `Missing service or contact link: ${path}`);
  }
});

test('small business SEO article removes obsolete names, false directories and unsupported prescriptions', () => {
  assert.doesNotMatch(source, /Google My Business|StronaWiązkowa|PółnokPoland|zomato\.pl/i);
  assert.doesNotMatch(source, /46%|1500-2000|800\+|3-6 miesięcy|6-12 miesięcy|100 linków za 50 zł/);
  assert.match(source, /Nie ma uniwersalnej liczby słów gwarantującej widoczność/);
  assert.match(source, /nie jest obietnicą pozycji lub liczby klientów/);
});
