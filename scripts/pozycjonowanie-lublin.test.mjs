import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';
import { enquiryHref } from '../src/lib/enquiry.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/PozycjonowanieLublin.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const editorialSource = fs.readFileSync(new URL('../src/components/ServiceEditorial.tsx', import.meta.url), 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Lublin metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Pozycjonowanie stron Lublin — SEO | FOTZ');
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/uslugi/pozycjonowanie/lublin');
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.noIndex, false);
});

test('Lublin page has one H1, one main-content owner and a complete offer', () => {
  assert.doesNotMatch(source, /<h1[\s>]/);
  assert.equal((editorialSource.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(source, /title=\{pageTitle\}/);
  assert.equal(readConstant('pageTitle'), 'Pozycjonowanie stron internetowych Lublin — SEO');
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${editorialSource}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  for (const heading of [
    'Lokalne biznesy: czym jest pozycjonowanie w Lublinie?',
    'Audyt SEO strony i optymalizacja techniczna krok po kroku',
    'Lokalne SEO: pozycjonowanie lokalne w Lublinie i Profil Firmy w Google',
    'Jak mierzymy widoczność w Google i zapytania?',
    'Pozycjonowanie Twojej strony: usługa i zakres działań SEO',
    'Cennik pozycjonowania stron w Lublinie — zasady wyceny',
    'Pozycjonowanie Lublin — najczęściej zadawane pytania',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('unsupported results, fixed prices and local market claims are removed', () => {
  assert.doesNotMatch(source, /999 zł|2 500|5 000|\+260%|TOP 3|4,8\/5|100k\+|~340|50–70%|efekty przychodzą szybko|pierwszą stronę Google|gwarancja TOP|gwarancj[ęa] pozycji/);
  assert.match(source, /Nie gwarantujemy pozycji, terminu efektu ani liczby klientów/);
  assert.match(source, /Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji/);
  assert.match(source, /Nie podajemy sztywnego cennika przed analizą/);
  assert.match(source, /nie deklarujemy biura w Lublinie/);
});

test('visible FAQ and schema use the same complete data', () => {
  const faqs = literal(context.scope.get('faqs'), context);
  assert.ok(Array.isArray(faqs));
  assert.equal(faqs.length, 6);
  for (const item of faqs) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 80);
  }
  assert.match(editorialSource, /<ServiceSchema name=\{title\} description=\{lead\} areaServed=\{area\} \/>/);
  assert.match(editorialSource, /<FAQSchema items=\{faqs\} \/>/);
  assert.match(editorialSource, /\{item\.question\}/);
  assert.match(editorialSource, /\{item\.answer\}/);
});

test('Lublin CTAs lead to the relevant audit enquiry and service information', () => {
  assert.match(source, /enquiryVariant="audit"/);
  assert.match(source, /contactLabel="Zapytaj o audyt SEO dla swojej firmy"/);
  assert.equal(enquiryHref('seo', 'audit'), '/kontakt?usluga=seo&wariant=audit#formularz');
  assert.match(source, /href:\s*"\/seo\/audyt"/);
  assert.match(source, /href:\s*"\/uslugi\/pozycjonowanie-lokalne"/);
});
