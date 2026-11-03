import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';
import { enquiryHref } from '../src/lib/enquiry.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/Pozycjonowanie.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const editorialSource = fs.readFileSync(new URL('../src/components/ServiceEditorial.tsx', import.meta.url), 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

const ids = text => [...text.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);

test('pozycjonowanie metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Pozycjonowanie stron internetowych — SEO | FOTZ');
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/seo/pozycjonowanie');
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.noIndex, false);
});

test('one H1 and one main-content owner cover the complete guide and offer', () => {
  assert.doesNotMatch(source, /<h1[\s>]/);
  assert.equal((editorialSource.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(source, /title=\{pageTitle\}/);
  assert.equal(readConstant('pageTitle'), 'Pozycjonowanie stron internetowych — oferta i poradnik SEO');
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${editorialSource}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  for (const heading of [
    'Czym jest pozycjonowanie stron?',
    'Techniczne SEO: indeksacja, canonical i przekierowania',
    'Strategia pozycjonowania oparta na intencji',
    'Treści SEO: przydatna odpowiedź zamiast gęstości fraz',
    'Link building i SEO off-site bez pakietów obietnic',
    'Pozycjonowanie lokalne i Profil Firmy w Google',
    'Proces pozycjonowania stron krok po kroku',
    'Jak mierzyć widoczność strony i zapytania?',
    'Ile kosztuje pozycjonowanie stron?',
    'Pozycjonowanie stron — najczęstsze pytania i odpowiedzi',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('source and shared layout IDs are unique', () => {
  const allIds = ids(`${source}\n${editorialSource}\n${layoutSource}`);
  assert.equal(new Set(allIds).size, allIds.length);
  for (const required of ['main-content', 'zakres', 'szczegoly', 'faq', 'kontakt-oferta']) {
    assert.equal(allIds.filter(id => id === required).length, 1, `Expected one #${required}`);
  }
});

test('unsupported performance claims and fixed prices are absent', () => {
  assert.doesNotMatch(source, /\d+\s*(?:zł|PLN)|pierwsze efekty po \d|inwestycja[^\n"]*zwraca się|najszybszy kanał|gwarantujemy (?:TOP\s*\d+|pozycję\s*1|pierwsze\s*miejsce)/i);
  assert.match(source, /Nie gwarantujemy pozycji, terminu efektu ani liczby klientów/);
  assert.match(source, /Nie podajemy sztywnej ceny przed poznaniem zadań/);
  assert.match(source, /Nie tworzymy fikcyjnych oddziałów, wpisów ani recenzji/);
  assert.match(source, /Brak aktualnych przypisanych metryk/);
});

test('visible FAQ and schema use the same complete data', () => {
  const faqs = literal(context.scope.get('faqs'), context);
  assert.ok(Array.isArray(faqs));
  assert.equal(faqs.length, 12);
  for (const item of faqs) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 100);
  }
  assert.match(editorialSource, /<ServiceSchema name=\{title\} description=\{lead\} areaServed=\{area\} \/>/);
  assert.match(editorialSource, /<FAQSchema items=\{faqs\} \/>/);
  assert.match(editorialSource, /\{item\.question\}/);
  assert.match(editorialSource, /\{item\.answer\}/);
});

test('CTAs lead to an SEO audit and relevant supporting services', () => {
  assert.match(source, /enquiryVariant="audit"/);
  assert.match(source, /contactLabel="Zapytaj o audyt SEO swojej strony"/);
  assert.equal(enquiryHref('seo', 'audit'), '/kontakt?usluga=seo&wariant=audit#formularz');
  for (const href of ['/seo/audyt', '/seo/techniczne', '/content-marketing/strategia', '/uslugi/pozycjonowanie-lokalne', '/cennik-pozycjonowania']) {
    assert.ok(source.includes(`href: "${href}"`), `Missing supporting link: ${href}`);
  }
});
