import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/StronyInternetoweWroclaw.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Wrocław website offer has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Strony internetowe Wrocław/);
  assert.match(description, /profesjonalne strony internetowe Wrocław/i);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/strony-internetowe/wroclaw');
  assert.match(source, /<SEOHead title=\{seoTitle\} description=\{seoDescription\} canonical=\{canonicalUrl\} \/>/);
});

test('Wrocław website offer has one H1 and one main-content anchor', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'Projektowanie i tworzenie stron internetowych we Wrocławiu');
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="manual">/);
});

test('visible offer covers the complete service, measurement and scoped pricing', () => {
  for (const text of [
    'Tworzenie stron WWW dla firm z Wrocławia — zakres dopasowany do celu',
    'Projektowanie stron WWW Wrocław: od architektury do designu',
    'Zakres tworzenia stron internetowych Wrocław: CMS i materiały',
    'Strona WWW połączona z narzędziami firmy',
    'Responsywne strony internetowe i techniczne SEO',
    'Jak wygląda proces tworzenia stron internetowych?',
    'Jak mierzyć widoczność i zapytania ze strony?',
    'Od czego zależy wycena strony WWW?',
    'Najczęstsze pytania o strony internetowe we Wrocławiu',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.match(source, /Google Search Console/);
  assert.match(source, /wysłanie formularza, kliknięcie telefonu/);
  assert.match(source, /Nie stosujemy jednej sztywnej ceny/);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=web#formularz');
  assert.equal((source.match(/<Link to=\{contactHref\}>/g) || []).length, 3);
});

test('native FAQ and structured data use the same authored content', () => {
  assert.match(source, /<ServiceSchema name=\{pageTitle\} description=\{serviceLead\}/);
  assert.match(source, /provider="FOTZ Studio" areaServed="Wrocław"/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /<details key=\{item\.question\} id=\{`wroclaw-faq-\$\{index \+ 1\}`\}/);
  assert.match(source, /<summary[^>]*>\{item\.question\}<\/summary>/);
  assert.match(source, /\{item\.answer\}/);
  assert.equal((source.match(/question: "/g) || []).length, 9);
});

test('literal IDs are unique and unsupported claims or fixed promises are removed', () => {
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.doesNotMatch(source, /\+180%|\+250%|30-dniow|2–3 tygodnie|4–8 tygodni|Nieograniczona liczba produktów|Konkurencyjne ceny|gwarantujemy pozycj|gwarantujemy \d+ zapytań|\b\d+\s*zł\b/i);
  assert.doesNotMatch(source, /CityServicesGrid|CityPricingCards|CityIntroSection|CityBenefitsSection|caseStudies|apartamentyImg|victoryCarsImg|cuteDumplingImg/);
  assert.match(source, /Nie deklarujemy lokalnego biura we Wrocławiu/);
  assert.match(source, /nie gwarantujemy liczby zapytań ani sprzedaży/);
});
