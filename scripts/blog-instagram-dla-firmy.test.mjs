import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/BlogInstagramDlaFirmy.tsx', import.meta.url));
const source = readFileSync(pagePath, 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Instagram guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.ok(title.includes('Instagram dla firmy'));
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/instagram-dla-firmy');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.noIndex, false);
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
});

test('article and layout anchors are unique and main-content has one owner', () => {
  const combined = `${source}\n${layoutSource}`;
  const ids = [...combined.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);

  assert.deepEqual(duplicates, []);
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  assert.equal(ids.filter(id => id === 'article-content').length, 1);
  assert.doesNotMatch(source, /<article id="main-content"/);
  for (const id of ['cel', 'profil', 'strategia', 'formaty', 'harmonogram', 'produkcja', 'moderacja', 'pomiar', 'reklamy', 'start', 'pytania']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
});

test('Article and FAQ structured data belong to the guide and visible FAQ', () => {
  assert.match(source, /<ArticleSchema data=\{articleData\} \/>/);
  assert.match(source, /url: canonicalUrl/);
  assert.match(source, /datePublished: "2025-04-12"/);
  assert.match(source, /dateModified: "2026-11-02"/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(item => <details/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
  assert.equal((source.match(/question: "/g) || []).length, 7);
});

test('visible guide covers the full practical workflow and real destinations', () => {
  for (const text of [
    'Jak prowadzić firmowy Instagram',
    'Konto firmowe na Instagramie',
    'Strategia treści i plan marketingowy',
    'Co publikować',
    'Planowanie publikacji',
    'Przygotuj rolki oraz zdjęcia',
    'Moderacja i interakcja',
    'Analityka Instagrama',
    'Traktuj reklamy jako osobny obszar pracy',
    'Plan na pierwszy miesiąc działań',
    'Najczęściej zadawane pytania',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of ['/social-media/strategia', '/social-media/analityka', '/social-media/obsluga', '/performance-marketing/meta-ads', '/kontakt']) {
    assert.ok(source.includes(`to="${path}"`), `Missing real service or contact link: ${path}`);
  }
});

test('guide avoids fixed packages, fabricated results and performance promises', () => {
  assert.match(source, /nie jest obietnicą wzrostu zasięgu, liczby obserwujących lub sprzedaży/);
  assert.match(source, /propozycjami redakcyjnymi, a nie opisami realizacji klientów/);
  assert.match(source, /Nie ma jednego pakietu trafnego dla każdego biznesu/);
  assert.doesNotMatch(source, /\b\d+\s?%|milion\w* wyświetleń|gwarantowany zasięg|gwarantowana sprzedaż|pakiet (Start|Pro|Premium)/i);
});
