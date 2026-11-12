import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogQbrCoTo.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);
const articleData = literal(context.scope.get('articleData'), context);
const faqItems = literal(context.scope.get('faqItems'), context);
const preparationSteps = literal(context.scope.get('preparationSteps'), context);
const qbrAgenda = literal(context.scope.get('qbrAgenda'), context);

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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/qbr-co-to' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('QBR guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'QBR — co to jest? Quarterly Business Review 2026 | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/qbr-co-to');
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
  assert.match(source, /<Layout workPlacement="after-main">/);

  const ids = [...`${source}\n${layoutSource}`.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique across the guide and Layout');
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  for (const id of ['article-content', 'definicja', 'porownanie', 'przygotowanie', 'agenda', 'metryki', 'po-spotkaniu', 'bledy', 'channel-qbr', 'faq', 'powiazane-materialy']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(preparationSteps.map(step => step.id)).size, preparationSteps.length, 'Preparation anchor IDs must be unique');
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`qbr-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2024-01-17');
  assert.equal(schema.dateModified, '2026-11-12');
  assert.ok(Date.parse(schema.dateModified) >= Date.parse(schema.datePublished));
  assert.match(source, /Opublikowano: 17 stycznia 2024/);
  assert.match(source, /Aktualizacja: 12 listopada 2026/);
  assert.equal((source.match(/<ArticleSchema\b/g) || []).length, 1);
  assert.doesNotMatch(source, /schemaJson=/);
});

test('visible FAQ and FAQPage schema share the same eight complete answers', () => {
  assert.equal(faqItems.length, 8);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 150);
  }
  const schema = faqSchema({ items: faqItems });
  assert.equal(schema['@type'], 'FAQPage');
  assert.deepEqual(schema.mainEntity.map(item => item.name), faqItems.map(item => item.question));
  assert.deepEqual(schema.mainEntity.map(item => item.acceptedAnswer.text), faqItems.map(item => item.answer));
  assert.equal((source.match(/<FAQSchema\b/g) || []).length, 1);
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item\) => \(\s*<details/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('guide covers definition, participants, preparation, one agenda, KPI, follow-up and mistakes', () => {
  assert.equal(preparationSteps.length, 5);
  assert.equal(qbrAgenda.length, 7);
  assert.equal(qbrAgenda.reduce((sum, item) => sum + Number.parseInt(item.time, 10), 0), 75);
  for (const text of [
    'QBR — co to jest? Definicja i cel',
    'QBR a status call, EBR i przegląd OKR',
    'Jak przygotować QBR krok po kroku?',
    'Agenda QBR — przykład na 75 minut',
    'Jakie metryki i KPI wybrać do QBR?',
    'Po QBR: notatka, odpowiedzialność i follow-up',
    'Najczęstsze błędy w QBR i jak je ograniczyć',
    'QBR z partnerem kanałowym: zakres i angielski szablon',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
});

test('service and related article links are real routes', () => {
  for (const path of [
    '/kontakt',
    '/blog/customer-success-co-to',
    '/blog/account-management-co-to',
    '/blog/customer-health-score-co-to',
    '/blog/nrr-grr-net-revenue-retention-co-to-jest',
  ]) {
    assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
    assert.ok(appSource.includes(`path="${path}"`), `Route does not exist: ${path}`);
  }
});

test('guide removes unsupported mandates, fixed prices and fabricated outcomes', () => {
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /top 20%|40\/60|QBR bez Economic Buyera|gwarancja wyniku|gwarantowany wzrost|gwarantowana retencja/i);
  assert.match(source, /nie gwarantuje odnowienia umowy, wzrostu przychodu ani poprawy retencji/);
  assert.match(source, /nie przypisuj ich automatycznie jednemu spotkaniu/);
  assert.match(source, /nie cytatem ani raportem z realizacji/);
});
