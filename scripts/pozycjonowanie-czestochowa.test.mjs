import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const source = readFileSync(new URL('../src/pages/PozycjonowanieCzestochowa.tsx', import.meta.url), 'utf8');
const editorialSource = readFileSync(new URL('../src/components/ServiceEditorial.tsx', import.meta.url), 'utf8');
const layoutSource = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('Częstochowa SEO page has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Pozycjonowanie stron Częstochowa/);
  assert.match(description, /audyt SEO/);
  assert.equal(readConstant('canonicalUrl'), 'https://www.fotz-studio.pl/uslugi/pozycjonowanie/czestochowa');
  assert.match(source, /<SEOHead title=\{seoTitle\} description=\{seoDescription\} canonical=\{canonicalUrl\} \/>/);
});

test('Częstochowa SEO page has one H1 and one main-content anchor', () => {
  assert.doesNotMatch(source, /<h1\b/);
  assert.equal((editorialSource.match(/<h1\b/g) || []).length, 1);
  assert.match(editorialSource, /<h1 className="offer-heading mb-6">\{title\}<\/h1>/);
  assert.match(source, /title=\{pageTitle\}/);
  assert.equal(readConstant('pageTitle'), 'Pozycjonowanie stron internetowych Częstochowa');
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${editorialSource}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
});

test('visible offer, service context and structured data use the same authored content', () => {
  for (const text of [
    'Audyt SEO i priorytety wdrożenia',
    'Optymalizacja techniczna strony',
    'Treści i optymalizacja stron',
    'Lokalna widoczność i profil firmy',
    'Wyszukiwarka Google: jak mierzymy widoczność i zapytania?',
    'Od czego zależy wycena usług SEO?',
    'Pozycjonowanie Częstochowa — pytania i odpowiedzi',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.match(source, /enquiryVariant="audit"/);
  assert.match(source, /area="Częstochowa"/);
  assert.match(editorialSource, /<ServiceSchema name=\{title\} description=\{lead\} areaServed=\{area\} \/>/);
  assert.match(editorialSource, /<FAQSchema items=\{faqs\} \/>/);
  assert.match(editorialSource, /\{item\.question\}/);
  assert.match(editorialSource, /\{item\.answer\}/);
});

test('unsupported local claims, invented results and fixed promises are removed', () => {
  assert.doesNotMatch(source, /899 zł|1 200–2 500|4[–-]5M|4,7\/5|\+220%|TOP 5|3[–-]4 tygodniach|6[–-]8 tygodniach|70[–-]80%|najtańszych miast|pierwszą stronę Google/i);
  assert.match(source, /nie gwarantujemy pozycji, terminu efektu ani liczby klientów z Częstochowy/);
  assert.match(source, /Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji/);
  assert.match(source, /Nie deklarujemy lokalnego biura/);
});
