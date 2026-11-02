import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';
import { enquiryHref, serviceForPath } from '../src/lib/enquiry.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/SklepyInternetoweKrakow.tsx', import.meta.url));
const source = readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);
const editorialSource = readFileSync(new URL('../src/components/ServiceEditorial.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Kraków shop metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const metadata = extractMetadata(pagePath);
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Sklep internetowy Kraków/);
  assert.match(description, /SEO techniczne/);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/sklepy-internetowe/krakow');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata?.noIndex, false);
});

test('Kraków shop prerender contract has one H1 and one main-content anchor', () => {
  assert.doesNotMatch(source, /<h1\b/);
  assert.equal((editorialSource.match(/<h1\b/g) || []).length, 1);
  assert.match(editorialSource, /<h1 className="offer-heading mb-6">\{title\}<\/h1>/);
  assert.match(source, /title=\{pageTitle\}/);
  assert.equal(readConstant('pageTitle'), 'Sklep internetowy Kraków — projektowanie i wdrożenie');
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
});

test('visible offer covers platform, catalogue, integrations, SEO, process, measurement and pricing', () => {
  for (const text of [
    'Platforma e-commerce i zakres wdrożenia',
    'Katalog i obsługa produktów',
    'Płatności, dostawy i integracje',
    'SEO techniczne sklepu',
    'Jak przebiega proces tworzenia sklepu internetowego?',
    'Analityka, formularz kontaktowy i pomiar sprzedaży',
    'Wycena sklepu i czas realizacji bez sztywnych pakietów',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  const sections = literal(context.scope.get('sections'), context);
  const scope = literal(context.scope.get('scope'), context);
  assert.equal(scope.length, 6);
  assert.ok(sections.length >= 8);
  assert.match(editorialSource, /<ServiceSchema name=\{title\} description=\{lead\} areaServed=\{area\} \/>/);
});

test('visible FAQ and FAQPage schema use the same complete data', () => {
  const faqs = literal(context.scope.get('faqs'), context);
  assert.ok(Array.isArray(faqs));
  assert.equal(faqs.length, 7);
  for (const item of faqs) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 150);
  }
  assert.match(editorialSource, /<FAQSchema items=\{faqs\} \/>/);
  assert.match(editorialSource, /faqs\.map\(item => <details/);
  assert.match(editorialSource, /\{item\.question\}/);
  assert.match(editorialSource, /\{item\.answer\}/);
});

test('CTA selects shop enquiry and unsupported claims and fixed prices are absent', () => {
  assert.match(source, /enquiryVariant="shop"/);
  assert.equal(enquiryHref(serviceForPath(readConstant('path')), 'shop'), '/kontakt?usluga=web&wariant=shop#formularz');
  assert.doesNotMatch(source, /80\+|40%|8 000|20 000|35 000|4[–-]8 tygodni|8[–-]16 tygodni|3[–-]6 miesięcy|24 godzin|drugie co do wielkości|najprężniej|bez ryzyka kar|gwarancję sukcesu/i);
  assert.match(source, /Nie deklarujemy lokalnego biura w Krakowie/);
  assert.match(source, /Nie stosujemy na tej stronie sztywnych cen/);
});
