import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/TworzenieStronPoznan.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Poznań website offer has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Tworzenie stron internetowych Poznań/);
  assert.match(title, /strona WWW/);
  assert.match(description, /Profesjonalne strony internetowe dla firm z Poznania/);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/tworzenie-stron-internetowych/poznan');
  assert.match(source, /<SEOHead title=\{seoTitle\} description=\{seoDescription\} canonical=\{canonicalUrl\} \/>/);
});

test('Poznań website offer has one H1 and one main-content anchor', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'Tworzenie stron internetowych Poznań');
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="manual">/);
});

test('visible offer covers the complete service, measurement and scoped pricing', () => {
  for (const text of [
    'Strony internetowe dla firm z Poznania: tworzenie stron WWW, strona firmowa i sklep internetowy',
    'Projektowanie stron WWW Poznań: projekt strony internetowej i design',
    'Tworzenie stron internetowych Poznań: strony WWW WordPress, CMS i materiały',
    'Strona WWW połączona z narzędziami firmy',
    'Profesjonalne strony internetowe: responsywność i techniczne SEO',
    'Proces tworzenia stron internetowych w Poznaniu i budowania strony WWW',
    'Jak mierzyć widoczność swojej strony i zapytania?',
    'Od czego zależy cena strony internetowej?',
    'Strony WWW Poznań: budowa stron internetowych i odbiór',
    'Podejście do tworzenia stron WWW w Poznaniu: pomiar efektów',
    'Wybór wykonawcy: jakie informacje podać o Twojej stronie?',
    'Najczęstsze pytania — strona internetowa w Poznaniu',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.match(source, /Responsywne strony internetowe testujemy na uzgodnionych widokach/);
  assert.match(source, /Google Search Console/);
  assert.match(source, /wysłanie formularza, kliknięcie telefonu/);
  assert.match(source, /nie stosujemy jednej sztywnej ceny/i);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=web#formularz');
  assert.equal((source.match(/<Link to=\{contactHref\}>/g) || []).length, 3);
});

test('native FAQ and structured data use the same authored content', () => {
  assert.match(source, /<ServiceSchema name=\{pageTitle\} description=\{serviceLead\}/);
  assert.match(source, /provider="FOTZ Studio" areaServed="Poznań"/);
  assert.match(source, /<BreadcrumbSchema items=\{breadcrumbs\} \/>/);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /<details key=\{item\.question\} id=\{`poznan-faq-\$\{index \+ 1\}`\}/);
  assert.match(source, /<summary[^>]*>\{item\.question\}<\/summary>/);
  assert.match(source, /\{item\.answer\}/);
  assert.equal((source.match(/question: "/g) || []).length, 9);
});

test('literal IDs are unique and unsupported claims or fixed promises are removed', () => {
  const ids = [...source.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  assert.doesNotMatch(source, /530k\+|MTP \(targi\)|1-2 tygodnie|3-4 tygodnie|4-8 tygodni|Nieograniczona liczba produktów|pochodzi z Poznania|znamy rynek|gwarantujemy pozycj|gwarantujemy \d+ zapytań|\b\d+\s*zł\b/i);
  assert.doesNotMatch(source, /CityServicesGrid|CityPricingCards|CityIntroSection|CityBenefitsSection|caseStudies|apartamentyImg|victoryCarsImg|cuteDumplingImg/);
  assert.match(source, /Nie deklarujemy lokalnego biura w Poznaniu/);
  assert.match(source, /nie obiecujemy pozycji ani liczby zapytań/);
});
