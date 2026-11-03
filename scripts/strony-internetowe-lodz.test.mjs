import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/StronyInternetoweLodz.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Łódź website offer has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Strony internetowe Łódź/);
  assert.match(description, /Profesjonalne strony internetowe Łódź/);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/strony-internetowe/lodz');
  assert.match(source, /<SEOHead title=\{seoTitle\} description=\{seoDescription\} canonical=\{canonicalUrl\} \/>/);
});

test('Łódź website offer has one H1 and one main-content anchor', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'Strony internetowe Łódź');
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="manual">/);
});

test('visible offer covers the complete service, measurement and scoped pricing', () => {
  for (const text of [
    'Tworzenie stron internetowych Łódź — typy projektów i realizacja',
    'Jak projektować strony WWW Łódź: design i zakres realizacji',
    'Zakres tworzenia stron WWW: CMS i materiały',
    'Strona WWW jako interaktywny element firmy: integracje i AI',
    'Responsywne strony internetowe i techniczne SEO',
    'Proces tworzenia stron internetowych',
    'Jak mierzyć widoczność i zapytania ze strony?',
    'Od czego zależy wycena strony WWW?',
    'Najczęstsze pytania o stronę internetową w Łodzi',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.match(source, /Google Search Console/);
  assert.match(source, /wysłanie formularza, kliknięcie telefonu/);
  assert.match(source, /Nie stosujemy jednej sztywnej ceny/);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=web#formularz');
  assert.equal((source.match(/<Link to=\{contactHref\}>/g) || []).length, 3);
});

test('native FAQ and structured data use the same authored content', () => {
  assert.match(source, /<ServiceSchema name=\{pageTitle\} description=\{serviceLead\}/);
  assert.match(source, /provider="FOTZ Studio" areaServed="Łódź"/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /<details key=\{item\.question\} id=\{`lodz-faq-\$\{index \+ 1\}`\}/);
  assert.match(source, /<summary[^>]*>\{item\.question\}<\/summary>/);
  assert.match(source, /\{item\.answer\}/);
  assert.equal((source.match(/question: "/g) || []).length, 10);
});

test('literal IDs are unique and unsupported claims or fixed promises are removed', () => {
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.doesNotMatch(source, /\+180%|\+250%|30-dniow|3–5 tygodni|w ciągu 24 godzin|Nieograniczona liczba produktów|Konkurencyjne ceny bez|gwarantujemy pozycj|gwarantujemy \d+ zapytań|\b\d+\s*zł\b/i);
  assert.doesNotMatch(source, /CityServicesGrid|CityPricingCards|CityIntroSection|CityBenefitsSection|caseStudies|apartamentyImg|victoryCarsImg|cuteDumplingImg/);
  assert.match(source, /Nie deklarujemy lokalnego biura w Łodzi/);
  assert.match(source, /nie obiecujemy pozycji ani liczby zapytań/);
});
