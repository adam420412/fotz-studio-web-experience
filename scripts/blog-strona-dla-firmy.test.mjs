import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogStronaDlaFirmy.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);
const articleData = literal(context.scope.get('articleData'), context);
const faqItems = literal(context.scope.get('faqItems'), context);
const processSteps = literal(context.scope.get('processSteps'), context);

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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/strona-internetowa-dla-firmy' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('company website guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Strony internetowe dla firm: tworzenie i wybór oferty | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/strona-internetowa-dla-firmy');
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
  for (const id of ['article-content', 'cel-strony', 'typy-stron', 'elementy-strony', 'proces-tworzenia', 'technologia', 'koszty', 'wykonawca', 'seo-i-pomiar', 'opieka', 'faq', 'powiazane-materialy']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(processSteps.map(step => step.id)).size, processSteps.length, 'Step anchor IDs must be unique');
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`strona-firmy-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, 'Strona internetowa dla firmy: jak zaprojektować i stworzyć witrynę');
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2026-04-10');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 10 kwietnia 2026/);
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

test('guide covers the whole decision process and only real internal routes', () => {
  assert.equal(processSteps.length, 6);
  for (const step of processSteps) {
    assert.ok(step.text.length > 250, `Step needs a complete explanation: ${step.id}`);
    assert.equal(step.checks.length, 3, `Step needs three practical checks: ${step.id}`);
  }
  for (const text of [
    'Czy Twoja firma potrzebuje własnej strony internetowej?',
    'Rodzaje stron dla firm: wizytówka, strona firmowa czy sklep?',
    'Profesjonalna strona www dla firmy: funkcjonalność i design',
    'Jak wygląda proces tworzenia strony internetowej?',
    'Kreator, CMS czy projektowanie stron www na zamówienie?',
    'Ile kosztuje strona internetowa dla firmy i co obejmuje oferta?',
    'Jak wybrać wykonawcę dla Twojej firmy?',
    'SEO Twojej strony: pozycjonowanie, optymalizacja i pomiar',
    'Domena, hosting, bezpieczeństwo i opieka nad stroną firmową',
    'Odrębna strona',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of [
    '/uslugi/strony-internetowe-dla-firm',
    '/uslugi/sklepy-internetowe',
    '/seo/pozycjonowanie',
    '/realizacje',
    '/kontakt',
    '/blog/ile-kosztuje-strona-internetowa',
    '/blog/seo-techniczne-poradnik',
    '/blog/strategia-content-marketingu',
  ]) {
    assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
    assert.ok(appSource.includes(`path="${path}"`), `Route does not exist: ${path}`);
  }
});

test('guide removes fixed prices, fabricated statistics and unsupported promises', () => {
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  for (const obsolete of [
    '97% Polaków',
    'Ponad 60%',
    '43% całego',
    'Większość firm robi to',
    'minimum 99,5%',
    '2 000 - 5 000',
    'generują rzeczywiste wyniki',
    'zwraca się wielokrotnie',
    'Google karze',
  ]) assert.ok(!source.includes(obsolete), `Obsolete or unsupported claim: ${obsolete}`);
  assert.match(source, /Nie ma jednej uczciwej ceny bez poznania zakresu/);
  assert.match(source, /strona nie gwarantuje zwrotu ani pozyskania nowych klientów/);
  assert.match(source, /nie przenoś zapytań z innych stron/);
  assert.match(source, /nie jest jej cennikiem ani obietnicą rezultatu/);
});
