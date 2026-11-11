import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogPozycjonowanieLokalnePoradnik.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);
const articleData = literal(context.scope.get('articleData'), context);
const faqItems = literal(context.scope.get('faqItems'), context);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

const structuredDataSource = fs.readFileSync(new URL('../src/components/seo/StructuredData.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(structuredDataSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 },
}).outputText;
const structuredDataExports = {};
vm.runInNewContext(compiled, {
  exports: structuredDataExports,
  URL,
  require: name => {
    if (name === 'react-helmet-async') return { Helmet: 'helmet' };
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/pozycjonowanie-lokalne-dla-firm' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('local SEO guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Pozycjonowanie lokalne 2026: poradnik dla firm | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/pozycjonowanie-lokalne-dla-firm');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.ogType, 'article');
  assert.equal(metadata?.noIndex, false);
});

test('one H1, one Layout main-content owner and unique guide IDs', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(source, /<main\b|\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);

  const ids = [...`${source}\n${layoutSource}`.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique across the guide and Layout');
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  for (const id of ['article-content', 'podstawy', 'czynniki', 'profil', 'strona', 'opinie', 'linki', 'lokalizacje', 'wdrozenie', 'pomiar', 'koszty', 'bledy', 'ai-2026', 'faq', 'podsumowanie', 'related-guides']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`local-seo-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, 'Pozycjonowanie lokalne dla firm: praktyczny poradnik 2026');
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2025-02-20');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 20 lutego 2025/);
  assert.match(source, /Aktualizacja: 11 listopada 2026/);
});

test('visible FAQ and FAQPage schema use the same ten complete answers', () => {
  assert.equal(faqItems.length, 10);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 250);
  }
  const schema = faqSchema({ items: faqItems });
  assert.equal(schema['@type'], 'FAQPage');
  assert.deepEqual(schema.mainEntity.map(item => item.name), faqItems.map(item => item.question));
  assert.deepEqual(schema.mainEntity.map(item => item.acceptedAnswer.text), faqItems.map(item => item.answer));
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item\) => \(\s*<details/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('guide covers the full informational workflow and real related destinations', () => {
  for (const text of [
    'Czym jest pozycjonowanie lokalne i na czym polega?',
    'Jak Google ustala lokalne wyniki wyszukiwania?',
    'Profil Firmy w Google, czyli dawna wizytówka Google Moja Firma',
    'Lokalne słowa kluczowe i optymalizacja strony internetowej',
    'Opinie w Google: jak prosić i odpowiadać?',
    'NAP, lokalne katalogi i linki zwrotne',
    'Pozycjonowanie lokalne krok po kroku: plan wdrożenia',
    'Jak mierzyć efekty pozycjonowania lokalnego?',
    'Ile kosztuje i jak długo trwa pozycjonowanie lokalne?',
    'Najczęstsze błędy w pozycjonowaniu lokalnym',
    'Lokalne SEO w 2026 roku: AI i przydatność informacji',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of [
    '/uslugi/pozycjonowanie-lokalne',
    '/blog/pozycjonowanie-google-maps',
    '/blog/marketing-lokalny-dla-firm',
    '/blog/audyt-seo-krok-po-kroku',
    '/blog/seo-techniczne-poradnik',
    '/blog/koszt-seo',
    '/kontakt',
  ]) assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);

  for (const url of [
    'https://support.google.com/business/answer/7091?hl=pl',
    'https://support.google.com/business/answer/3038177?hl=pl',
    'https://support.google.com/contributionpolicy/answer/7400114?hl=pl',
    'https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=pl',
    'https://support.google.com/webmasters/answer/7042828?hl=pl',
  ]) assert.ok(source.includes(`href="${url}"`), `Missing official source: ${url}`);
});

test('guide removes fixed prices, performance promises and obsolete claims', () => {
  assert.match(source, /Nie ma jednej sztywnej ceny/);
  assert.match(source, /Żadna lista działań nie gwarantuje miejsca w Local Pack, ruchu, telefonów ani sprzedaży/);
  assert.match(source, /Przykłady są redakcyjnymi ilustracjami pracy, a nie opisami realizacji ani wyników klientów/);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /Kompletny poradnik 2025|999|2000|200-400%|4\.5\+|3-4 tygodniach|2-3 miesiącach|Pudelek|Goldenline|najpotężniejszych/i);
});
