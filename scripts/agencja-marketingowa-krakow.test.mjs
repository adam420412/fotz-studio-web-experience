import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/AgencjaMarketingowaKrakow.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Kraków metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Agencja marketingowa Kraków — marketing reklamowy | FOTZ');
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/agencja-marketingowa/krakow');
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.noIndex, false);
});

test('Kraków page has one H1, one main-content owner and a complete offer', () => {
  const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
  assert.equal((source.match(/<h1[\s>]/g) || []).length, 1);
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  for (const heading of [
    'Agencja marketingowa czy agencja reklamowa: jak poznać potrzeby Twojego biznesu?',
    'Usługi agencji marketingowej: zakres usług dla Twojej firmy',
    'Strategiczny marketing i cele biznesowe',
    'Content marketing, treści i prowadzenie social mediów',
    'Kampanie Google Ads i Meta Ads',
    'SEO i strony WWW: kiedy projektować landing page?',
    'Produkcja foto i wideo oraz projektowanie graficzne',
    'Kreatywna agencja: identyfikacja i komunikacja marki',
    'Strategie marketingowe dla Twojej marki i rozwoju biznesu w Krakowie',
    'Jak mierzymy leady, wyniki sprzedaży i przychód?',
    'Proces współpracy z agencją krok po kroku',
    'Warunki współpracy i wycena bez sztywnych pakietów',
    'Pytania o marketing i reklamę dla firm z Krakowa',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('unsupported local claims, fixed prices and fabricated proof are removed', () => {
  assert.doesNotMatch(source, /500\+|200\+|8 lat|97%|TOP 3|Google Premier Partner|Facebook Marketing Partner|ISO 27001|FindBestSEO|Najlepsza Agencja|pierwsze rezultaty|zadowolonych klientów/i);
  assert.doesNotMatch(source, /\b\d+(?:[ .]\d+)?\s*(?:PLN|zł)\b/i);
  assert.match(source, /Nie podajemy sztywnego cennika przed ustaleniem zakresu/);
  assert.match(source, /Nie gwarantujemy terminu sprzedaży ani określonej liczby leadów/);
  assert.match(source, /Nie tworzymy lokalnych obietnic ani stron bez praktycznego znaczenia/);
  assert.match(source, /Firmy z Krakowa obsługujemy zdalnie/);
});

test('visible FAQ and schema use the same complete data with unique anchors', () => {
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
  assert.match(source, /id=\{`krakow-faq-\$\{index\}`\}/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('Kraków CTAs lead to the marketing form and relevant service information', () => {
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=marketing#formularz');
  assert.ok((source.match(/to=\{contactHref\}/g) || []).length >= 2);
  assert.ok(source.includes('href="#oferta"'));
  assert.ok(source.includes('id="oferta"'));
  for (const href of [
    '/uslugi/marketing-internetowy',
    '/performance-marketing/google-ads',
    '/social-media/obsluga',
    '/uslugi/strony-internetowe',
  ]) assert.ok(source.includes(`to="${href}"`), `Missing service link: ${href}`);
});

test('static section IDs are unique and FAQ IDs use a page-specific prefix', () => {
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ['oferta', 'strategia', 'pomiar', 'proces', 'wspolpraca']) {
    assert.ok(ids.includes(id), `Missing section ID: ${id}`);
  }
  assert.match(source, /id=\{`krakow-faq-\$\{index\}`\}/);
});
