import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/BlogKosztStrony.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = (name) => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('website cost article has concise final metadata, one H1 and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');

  assert.ok(title.includes('Ile kosztuje strona internetowa'));
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/ile-kosztuje-strona-internetowa');
  assert.match(source, /canonical=\{canonicalUrl\}/);
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
});

test('website cost article owns Article, Breadcrumb and visible FAQ structured data', () => {
  assert.match(source, /<ArticleSchema data=\{articleData\} \/>/);
  assert.match(source, /<BreadcrumbSchema items=\{breadcrumbs\} \/>/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /url: canonicalUrl/);
  assert.match(source, /datePublished: "2024-12-20"/);
  assert.match(source, /dateModified: "2026-11-02"/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('article and layout do not duplicate the main content anchor', () => {
  assert.equal((source.match(/<article id="article-content"/g) || []).length, 1);
  assert.doesNotMatch(source, /id="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static JSX IDs must be unique');
});

test('guide covers price factors, work scope, recurring costs, examples, offer questions and ROI', () => {
  for (const text of [
    'Od czego zależy cena strony internetowej?',
    'Strony internetowe: cennik według typu i funkcji',
    'Kreator, WordPress czy rozwiązanie dedykowane?',
    'Co obejmuje koszt wykonania strony internetowej?',
    'Ile kosztuje utrzymanie strony internetowej?',
    'SEO, wydajność i analityka w budżecie',
    'Hipotetyczne scenariusze — przykładowe rachunki',
    'Pytania do oferty — jak porównać wykonawców?',
    'Jak mierzyć zwrot z inwestycji w stronę?',
    'Najczęściej zadawane pytania o koszt strony',
  ]) assert.ok(source.includes(text), `Missing section: ${text}`);

  assert.equal((source.match(/Scenariusz hipotetyczny [ABC]:/g) || []).length, 3);
  assert.match(source, /To nie jest cennik FOTZ, oferta, średnia rynkowa ani rekomendowany budżet/);
  assert.match(source, /Nie ma gwarantowanego ROI z samej strony/);
});

test('article links only to existing service, work and contact destinations', () => {
  for (const path of [
    '/uslugi/strony-internetowe',
    '/uslugi/landing-page',
    '/uslugi/sklepy-internetowe',
    '/seo/pozycjonowanie',
    '/realizacje',
    '/kontakt',
  ]) assert.ok(source.includes(`to="${path}"`), `Missing link: ${path}`);
});

test('obsolete fixed market prices and unsupported sales promises stay removed', () => {
  for (const obsolete of ['od 2 000 zł do 5 000 zł', '50 - 200 zł', 'Średni koszt wykonania', 'bezpłatną wycenę', 'gwarantowany zwrot']) {
    assert.ok(!source.includes(obsolete), `Obsolete or unsupported claim: ${obsolete}`);
  }
});
