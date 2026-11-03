import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';
import { enquiryHref, serviceForPath } from '../src/lib/enquiry.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/AgencjaMarketinguInternetowego.tsx', import.meta.url));
const source = readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);
const content = literal(context.scope.get('content'), context);
const editorialSource = readFileSync(new URL('../src/components/ServiceEditorial.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('metadata is concise, branded, indexable and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.equal(metadata?.title, readConstant('seoTitle'));
  assert.equal(metadata?.description, readConstant('seoDescription'));
  assert.equal(metadata?.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata?.canonical, 'https://www.fotz-studio.pl/agencja-marketingu-internetowego');
  assert.ok(metadata.title.length <= 60, `Title has ${metadata.title.length} characters`);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.match(metadata.title, /Agencja marketingu internetowego/);
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.noIndex, false);
});

test('one H1 and one main-content owner surround a complete authored offer', () => {
  assert.doesNotMatch(source, /<h1\b/);
  assert.equal((editorialSource.match(/<h1\b/g) || []).length, 1);
  assert.match(editorialSource, /<h1 className="offer-heading mb-6">\{title\}<\/h1>/);
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal(content.title, 'Agencja marketingu internetowego');
  assert.equal(content.scope.length, 6);
  assert.equal(content.sections.length, 10);
  for (const heading of [
    'Czym zajmuje się agencja marketingu internetowego?',
    'Strategia marketingowa i dobór kanałów dla Twojego biznesu',
    'SEO, audyt SEO i treści do wyników wyszukiwania',
    'Kampanie Google Ads, SEM i reklama w social media',
    'Content marketing i produkcja materiałów dla marki',
    'Jak wygląda współpraca z agencją marketingu internetowego?',
    'Pomiar leadów, konwersji i jakości zapytań',
    'Budżet marketingowy i warunki współpracy bez sztywnych cen',
    'Wybór agencji marketingu internetowego — na co zwrócić uwagę?',
  ]) assert.ok(source.includes(heading), `Missing visible heading: ${heading}`);
});

test('fixed prices, fabricated proof and outcome guarantees are absent', () => {
  assert.doesNotMatch(source, /\b\d+(?:[ .]\d+)*\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /\b\d+(?:[,.]\d+)?%|gwarantujemy (?:pozycje|sprzedaż|klientów|leadów)|najlepsz[ae] agencj[ae]|pierwsze miejsce|TOP\s*\d/i);
  assert.doesNotMatch(source, /priceNote|enquiryVariant/);
  assert.match(source, /Nie stosujemy na tej stronie sztywnych cen/);
  assert.match(source, /Nie tworzymy fikcyjnych opinii, realizacji ani obietnic wizerunkowych/);
  assert.match(source, /Nie gwarantujemy pozycji, określonej liczby leadów ani sprzedaży/);
});

test('visible FAQ and structured data reuse the same complete, unique content', () => {
  assert.equal(content.faqs.length, 9);
  for (const item of content.faqs) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 150);
  }
  assert.equal(new Set(content.faqs.map(item => item.question)).size, content.faqs.length);
  assert.equal(new Set(content.sections.map(item => item.title)).size, content.sections.length);
  assert.equal(new Set(content.scope.map(item => item.title)).size, content.scope.length);
  assert.match(editorialSource, /<ServiceSchema name=\{title\} description=\{lead\} areaServed=\{area\} \/>/);
  assert.match(editorialSource, /<FAQSchema items=\{faqs\} \/>/);
  assert.match(editorialSource, /faqs\.map\(item => <details/);
  assert.match(editorialSource, /\{item\.question\}/);
  assert.match(editorialSource, /\{item\.answer\}/);
});

test('CTA selects a general marketing enquiry without a priced package', () => {
  assert.equal(content.path, '/agencja-marketingu-internetowego');
  assert.equal(enquiryHref(serviceForPath(content.path)), '/kontakt?usluga=marketing#formularz');
  assert.equal(content.contactLabel, 'Omów zakres marketingu');
  assert.doesNotMatch(source, /limited_care|retainer/);
  for (const href of [
    '/uslugi/marketing-internetowy',
    '/seo',
    '/performance-marketing/google-ads',
    '/content-marketing/strategia',
    '/blog/jak-napisac-brief-marketingowy',
    '/blog/jak-wybrac-agencje-marketingowa',
  ]) assert.ok(content.sections.some(item => item.href === href), `Missing service link: ${href}`);
});
