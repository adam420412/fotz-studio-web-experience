import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/PozycjonowanieWalbrzych.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

test('Walbrzych metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Pozycjonowanie Wałbrzych — SEO w Google | FOTZ');
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/pozycjonowanie/walbrzych');
  assert.equal(metadata.noIndex, false);
});

test('Walbrzych page has one H1, useful sections and no unsupported result cards', () => {
  assert.equal((source.match(/<h1[\s>]/g) || []).length, 1);
  for (const heading of [
    'Pozycjonowanie lokalne w Wałbrzychu',
    'Techniczne minimum strony',
    'Profil firmy w Google',
    'Raport SEO dla Twojej firmy: widoczność, ruch organiczny i zapytania',
    'Proces i wdrożenia SEO dla firm z Wałbrzycha',
    'Agencja SEO Wałbrzych — ile kosztuje pozycjonowanie?',
  ]) assert.ok(source.includes(heading), `missing section: ${heading}`);
  assert.doesNotMatch(source, /\+220%|TOP 5|4,9\/5|800-1500|1500-3000|3000-6000|110k|Kopalna Venus/);
  assert.doesNotMatch(source, /\bid="main-content"/);
});

test('Walbrzych visible FAQ and schema use the same complete data', () => {
  const faq = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faq));
  assert.ok(faq.length >= 6);
  for (const item of faq) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 80);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item, index\)/);
  assert.match(source, /<details/);
  assert.match(source, /<summary/);
  assert.match(source, /id=\{`walbrzych-faq-\$\{index\}`\}/);
  assert.match(source, /<p className="text-gray-300 pb-5">\{item\.answer\}<\/p>/);
});

test('Walbrzych CTAs lead to contact and the relevant SEO service', () => {
  assert.ok((source.match(/\/kontakt\?usluga=seo&amp;wariant=audit#formularz|\/kontakt\?usluga=seo&wariant=audit#formularz/g) || []).length >= 2);
  assert.ok(source.includes('to="/uslugi/pozycjonowanie"'));
  assert.ok(source.includes('href="#zakres-prac"'));
  assert.ok(source.includes('id="zakres-prac"'));
});
