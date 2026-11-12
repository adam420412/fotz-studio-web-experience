import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogTamSamSomCoTo.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);
const articleData = literal(context.scope.get('articleData'), context);
const faqItems = literal(context.scope.get('faqItems'), context);
const marketExample = literal(context.scope.get('marketExample'), context);

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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/tam-sam-som-co-to' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('TAM SAM SOM metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'TAM, SAM, SOM 2026: co to i jak obliczyć? | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /TAM, SAM, SOM/);
  assert.match(description, /TAM, SAM i SOM/);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/tam-sam-som-co-to');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.ogType, 'article');
  assert.equal(metadata?.noIndex, false);
});

test('one H1, one Layout main-content owner and unique guide IDs', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.doesNotMatch(source, /<main\b|\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="after-main">/);

  const ids = [...`${source}\n${layoutSource}`.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique across the guide and Layout');
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  for (const id of ['article-content', 'definicja', 'roznice', 'znaczenie', 'metody', 'obliczanie-krok-po-kroku', 'przyklad', 'konkurencja', 'strategia', 'bledy', 'aktualizacja', 'faq', 'powiazane-materialy']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`tam-sam-som-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2024-01-19');
  assert.equal(schema.dateModified, '2026-11-12');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 19 stycznia 2024/);
  assert.match(source, /Aktualizacja: 12 listopada 2026/);
  assert.equal((source.match(/<ArticleSchema\b/g) || []).length, 1);
  assert.doesNotMatch(source, /schemaJson=/);
});

test('market example arithmetic is internally correct and explicitly illustrative', () => {
  const values = Object.fromEntries(Object.entries(marketExample).map(([key, value]) => [key, Number(value)]));
  assert.equal(values.serviceableClients, values.totalClients * values.serviceableRate);
  assert.equal(values.tam, values.totalClients * values.annualRevenuePerClient);
  assert.equal(values.sam, values.serviceableClients * values.annualRevenuePerClient);
  assert.equal(values.som, values.obtainableClients * values.annualRevenuePerClient);
  assert.equal(values.somShareOfSam, values.obtainableClients / values.serviceableClients);
  assert.equal(values.tam, 120000000);
  assert.equal(values.sam, 30000000);
  assert.equal(values.som, 480000);
  assert.equal(values.somShareOfSam, 0.016);
  assert.match(source, /40 ÷ 2 500 × 100% = <strong>1,6%<\/strong>/);
  assert.match(source, /całkowicie fikcyjny przykład arytmetyczny, a nie badanie rynku, cennik ani prognoza wyników/);
  assert.match(source, /Nie jest to rekomendowany ani typowy poziom dla innej firmy/);
});

test('visible FAQ and FAQPage schema share the same seven complete answers', () => {
  assert.equal(faqItems.length, 7);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 250, `FAQ answer is too short: ${item.id}`);
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

test('guide covers definitions, methods, competition and strategy with real links', () => {
  for (const text of [
    'Total Addressable Market',
    'Serviceable Available Market',
    'Serviceable Addressable Market',
    'Serviceable Obtainable Market',
    'Jak obliczyć TAM, SAM i SOM? Metody i źródła danych',
    'TAM, SAM i SOM krok po kroku: wzory i kontrola założeń',
    'Przykład obliczania TAM, SAM i SOM — ilustracja metody',
    'Jak uwzględnić konkurencję przy szacowaniu SAM i SOM?',
    'Jak wykorzystać TAM, SAM i SOM w strategii i rozwoju firmy?',
    'Jak aktualizować analizę TAM, SAM i SOM w 2026 roku?',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of ['/blog/target-audience-co-to', '/blog/wacc-sredni-wazony-koszt-kapitalu', '/blog/strategia-content-marketingu', '/seo/pozycjonowanie', '/kontakt']) {
    assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
    assert.ok(appSource.includes(`path="${path}"`), `Route does not exist: ${path}`);
  }
  assert.match(source, /href="https:\/\/stat.gov.pl\/"/);
  assert.match(source, /href="https:\/\/bdl.stat.gov.pl\/"/);
  assert.match(source, /Jak czytać francuskie, angielskie i hiszpańskie określenia rynku\?/);
  assert.match(source, /lang="fr"/);
  assert.match(source, /lang="es"/);
  assert.match(source, /nie przenosi żadnych danych liczbowych do Twojej analizy/);
});

test('legacy fabricated market figures, rigid investor thresholds and promises are removed', () => {
  for (const obsolete of [
    '~80 mld USD',
    '~2 mld USD',
    '~150 mln USD',
    'poniżej 1 mld USD dla VC',
    'Typowy oczekiwany SOM to 1-5% SAM',
    'Rynek edukacji to 7 bilionów dolarów',
    '1,8 mln małych firm w Polsce',
    'liczby są wiarygodniejsze',
  ]) assert.ok(!source.includes(obsolete), `Unsupported legacy claim: ${obsolete}`);
  assert.match(source, /Nie istnieje jeden uniwersalny próg „dobrego” TAM ani SOM/);
  assert.match(source, /nie gwarantuje finansowania ani decyzji inwestycyjnej/);
  assert.doesNotMatch(source, /gwarantowany(?:m|ch)? (?:wynik|rezultat|zysk|wzrost)/i);
});
