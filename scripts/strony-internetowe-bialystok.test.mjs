import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/StronyInternetoweBialystok.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Białystok website offer has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Strony internetowe Białystok/);
  assert.match(description, /projektowanie i tworzenie stron WWW/);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/strony-internetowe/bialystok');
  assert.match(source, /<SEOHead title=\{seoTitle\} description=\{seoDescription\} canonical=\{canonicalUrl\} \/>/);
});

test('Białystok website offer has one H1 and one main-content anchor', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'Strony internetowe Białystok');
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="manual">/);
});

test('visible offer, native FAQ and structured data use the same authored content', () => {
  for (const text of [
    'Tworzenie stron internetowych Białystok dopasowane do celu firmy',
    'Tworzenie stron WWW Białystok: CMS, treści i materiały',
    'Techniczne SEO i wydajność od wdrożenia',
    'Jak mierzymy widoczność i działania strony?',
    'Od czego zależy wycena strony WWW?',
    'Najczęstsze pytania o strony internetowe w Białymstoku',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.match(source, /<ServiceSchema name=\{pageTitle\} description=\{serviceLead\}/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /<details key=\{item\.question\} id=\{`bialystok-faq-\$\{index \+ 1\}`\}/);
  assert.match(source, /<summary[^>]*>\{item\.question\}<\/summary>/);
  assert.match(source, /\{item\.answer\}/);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=web#formularz');
  assert.match(source, /<Link to=\{contactHref\}>/);
});

test('literal IDs are unique and unsupported claims or fixed promises are removed', () => {
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.doesNotMatch(source, /\+180%|\+250%|2-3 tygodnie|4-6 tygodni|6-10 tygodni|bezpłatna wycena w 24|konkurencyjne ceny|skutecznie pozyskują klientów|Nieograniczona liczba produktów/i);
  assert.doesNotMatch(source, /CityServicesGrid|CityPricingCards|caseStudies|apartamentyImg|victoryCarsImg|cuteDumplingImg/);
  assert.match(source, /nie deklarujemy lokalnego biura w Białymstoku/i);
  assert.match(source, /nie gwarantujemy pozycji ani liczby zapytań/);
});
