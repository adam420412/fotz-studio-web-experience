import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/PozycjonowanieZabrze.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Zabrze metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Pozycjonowanie stron Zabrze — agencja SEO | FOTZ');
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/pozycjonowanie/zabrze');
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.noIndex, false);
});

test('Zabrze page has one H1, one main-content anchor and useful offer sections', () => {
  const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
  assert.equal((source.match(/<h1[\s>]/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  for (const heading of [
    'Pozycjonowanie Zabrze — od wyszukiwania do kontaktu',
    'Co obejmuje pozycjonowanie stron w Zabrzu?',
    'Techniczna optymalizacja strony',
    'Treści ofertowe i content marketing',
    'Lokalna widoczność i profil firmy',
    'Jak mierzymy widoczność w Google i zapytania?',
    'Proces pozycjonowania dla firm z Zabrza',
    'Jak agencja SEO wycenia pozycjonowanie w Zabrzu?',
    'Pozycjonowanie Zabrze — pytania i odpowiedzi',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('unsupported results, fixed prices and local claims are removed', () => {
  assert.doesNotMatch(source, /150\+|500%|95%|800-1500|1500-3000|3000-6000|od ponad 8 lat|średnio 10-30|zwraca się wielokrotnie|pierwszej pozycji|najskuteczniejszy sposób|biur[ao]/i);
  assert.match(source, /bez obiecywania konkretnych pozycji/);
  assert.match(source, /Nie tworzymy fikcyjnych lokalizacji ani recenzji/);
  assert.match(source, /Nie podajemy sztywnego cennika przed analizą/);
});

test('visible FAQ and schema use the same complete data', () => {
  const faq = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faq));
  assert.equal(faq.length, 6);
  for (const item of faq) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 80);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item, index\)/);
  assert.match(source, /<details/);
  assert.match(source, /<summary/);
  assert.match(source, /id=\{`zabrze-faq-\$\{index\}`\}/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('Zabrze CTAs lead to the relevant contact form and service information', () => {
  assert.ok((source.match(/\/kontakt\?usluga=seo&wariant=audit#formularz/g) || []).length >= 2);
  assert.ok(source.includes('href="#zakres-prac"'));
  assert.ok(source.includes('id="zakres-prac"'));
  assert.ok(source.includes('to="/uslugi/pozycjonowanie"'));
});
