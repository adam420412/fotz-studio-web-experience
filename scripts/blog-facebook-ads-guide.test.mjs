import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogFacebookAdsPoradnik.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/facebook-ads-poradnik' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('Facebook Ads guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Facebook Ads 2026: reklama na Facebooku | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/facebook-ads-poradnik');
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
  for (const id of ['article-content', 'podstawy', 'strategia', 'przygotowanie', 'struktura', 'konfiguracja', 'targetowanie', 'formaty', 'budzet', 'kreacje', 'pomiar', 'diagnostyka', 'checklist', 'faq']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`facebook-ads-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2025-04-12');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 12 kwietnia 2025/);
  assert.match(source, /Aktualizacja: 11 listopada 2026/);
});

test('visible FAQ and FAQPage schema use the same eleven complete answers', () => {
  assert.equal(faqItems.length, 11);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 150);
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

test('guide covers campaign configuration and naturally addresses the GSC query', () => {
  for (const text of [
    'Strategia Facebook Ads',
    'Czym jest i jak działa reklama na Facebooku?',
    'Menedżer reklam Facebook: struktura i cel kampanii',
    'Jak ustawić reklamę na Facebooku krok po kroku?',
    'Jak targetować reklamy na Facebooku i wybrać grupę docelową?',
    'Formaty reklamowe na Facebooku i miejsca wyświetlania reklam',
    'Koszt reklamy na Facebooku: jak zaplanować budżet?',
    'Jak mierzyć skuteczność reklamy i optymalizować kampanię?',
    'Dlaczego reklama na Facebooku nie działa? Diagnostyka',
    'Checklista przed publikacją kampanii',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
});

test('related links point to real routes and separate the guide from the service', () => {
  for (const path of [
    '/blog/jak-stworzyc-landing-page',
    '/blog/reklama-facebook-vs-google',
    '/blog/cennik-facebook-ads',
    '/blog/social-media-marketing-poradnik',
    '/blog/optymalizacja-google-ads',
    '/uslugi/reklama-facebook',
    '/kontakt',
  ]) {
    assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
    assert.ok(appSource.includes(`path="${path}"`), `Route does not exist: ${path}`);
  }
  assert.match(source, /Osobna oferta dla osób, które po poradniku szukają zakresu wsparcia/);
  assert.match(source, /oficjalnym Centrum pomocy Meta for Business/);
});

test('guide removes fabricated results, fixed prices and obsolete promises', () => {
  assert.match(source, /redakcyjne przykłady planu testu, a nie opisy realizacji ani gwarantowane recepty/);
  assert.match(source, /nie gwarantują leadów ani sprzedaży/);
  assert.match(source, /nie ma jednej sztywnej stawki za kliknięcie, kontakt lub zakup/);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /ROI\s*\d|ROAS\s*\d|CTR\s*\d+(?:[.,]\d+)?%|konwersja\s*\d+(?:[.,]\d+)?\s*[x×]|20% obrazu|Facebook Ads 2025/i);
  assert.doesNotMatch(source, /najskuteczniejsza audiencja|maksymalny engagement|gwarancja sprzedaży|gwarancja leadów/i);
});
