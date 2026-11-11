import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogAudytSEOKrok.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);
const articleData = literal(context.scope.get('articleData'), context);
const faqItems = literal(context.scope.get('faqItems'), context);
const auditSteps = literal(context.scope.get('auditSteps'), context);

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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/audyt-seo-krok-po-kroku' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('SEO audit guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Audyt SEO strony krok po kroku: checklista 2026 | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/audyt-seo-krok-po-kroku');
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
  assert.match(layoutSource, /<\/main>\s*\{workPlacement === "after-main" && <SelectedWork/);

  const ids = [...`${source}\n${layoutSource}`.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique across the guide and Layout');
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  for (const id of ['article-content', 'definicja', 'audyt-krok-po-kroku', 'narzedzia', 'raport', 'koszt-i-czas', 'faq', 'powiazane-materialy']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(auditSteps.map(step => step.id)).size, auditSteps.length, 'Step anchor IDs must be unique');
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`audyt-seo-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, 'Audyt SEO strony krok po kroku: praktyczna checklista 2026');
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2026-04-12');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 12 kwietnia 2026/);
  assert.match(source, /Aktualizacja: 11 listopada 2026/);
  assert.equal((source.match(/<ArticleSchema\b/g) || []).length, 1);
  assert.doesNotMatch(source, /schemaJson=/);
});

test('visible FAQ and FAQPage schema use the same eight complete answers', () => {
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

test('guide contains ten evidence-based steps and only real related routes', () => {
  assert.equal(auditSteps.length, 10);
  for (const step of auditSteps) {
    assert.ok(step.text.length > 300, `Step needs a complete explanation: ${step.id}`);
    assert.equal(step.checks.length, 3, `Step needs three practical checks: ${step.id}`);
    assert.match(step.result, /^Rezultat: /);
  }
  for (const text of [
    'Czym jest audyt SEO i co sprawdzić?',
    'Jak przeprowadzić audyt SEO strony internetowej krok po kroku?',
    'LCP, INP i CLS',
    'Darmowy audyt SEO online: narzędzia i ograniczenia',
    'Wyniki audytu SEO: analiza i macierz priorytetów',
    'Ile kosztuje audyt SEO i jak długo trwa?',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of [
    '/seo/audyt',
    '/kontakt',
    '/blog/seo-techniczne-poradnik',
    '/blog/pozycjonowanie-lokalne-dla-firm',
    '/blog/strategia-content-marketingu',
    '/blog/copywriting-co-to',
  ]) {
    assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
    assert.ok(appSource.includes(`path="${path}"`), `Route does not exist: ${path}`);
  }
});

test('guide removes fixed prices, guarantees and obsolete audit advice', () => {
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /Mobile-Friendly Test|2-3 dni|500-1500|gwarancję wyniku|zarabiaj więcej/i);
  assert.match(source, /Nie zastępuj INP przestarzałym FID/);
  assert.match(source, /Nie ma jednej stałej ceny profesjonalnego audytu SEO/);
  assert.match(source, /Sam audyt niczego nie wdraża, dlatego nie gwarantuje pozycji, ruchu ani sprzedaży/);
  assert.match(source, /Nie przenoś zapytań z innych adresów/);
  assert.match(source, /nie przypisujemy|Nie przypisuj/i);
});
