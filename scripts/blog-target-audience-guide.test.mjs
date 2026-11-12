import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogTargetAudienceCoTo.tsx', import.meta.url));
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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/target-audience-co-to' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('target audience guide has final metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Target audience — co to jest? How to find it | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.match(description, /research and segmentation\. Poradnik 2026\./);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/target-audience-co-to');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.ogType, 'article');
  assert.equal(metadata?.ogImage, readConstant('heroImageUrl'));
  assert.equal(metadata?.noIndex, false);
});

test('guide has one H1, one Layout main and unique section IDs', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.doesNotMatch(source, /<main\b|\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);

  const ids = [...`${source}\n${layoutSource}`.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'Static IDs must be unique across the guide and Layout');
  assert.equal(ids.filter(id => id === 'main-content').length, 1);
  for (const id of ['article-content', 'spis-tresci', 'spis-tresci-heading', 'definicja', 'definicja-heading', 'pojecia', 'korzysci', 'segmentacja', 'badania', 'proces', 'szablon', 'przyklady', 'bledy', 'wdrozenie', 'faq', 'faq-heading', 'powiazane-heading']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  for (const [, fragment] of source.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(decodeURIComponent(fragment)), `Missing fragment: ${fragment}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ IDs must be unique');
  assert.match(source, /id=\{`target-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.image.url, readConstant('heroImageUrl'));
  assert.equal(schema.datePublished, '2024-01-13');
  assert.equal(schema.dateModified, '2026-11-12');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 13 stycznia 2024/);
  assert.match(source, /Aktualizacja: 12 listopada 2026/);
});

test('visible FAQ and FAQPage schema share the same complete answers', () => {
  assert.equal(faqItems.length, 8);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 180);
  }
  const schema = faqSchema({ items: faqItems });
  assert.equal(schema['@type'], 'FAQPage');
  assert.deepEqual(schema.mainEntity.map(item => item.name), faqItems.map(item => item.question));
  assert.deepEqual(schema.mainEntity.map(item => item.acceptedAnswer.text), faqItems.map(item => item.answer));
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(item => \(\s*<details/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('guide covers definition, segmentation, research, validation and practical use', () => {
  for (const text of [
    'Co to jest target audience? Definicja grupy docelowej',
    'Target audience and target market — różnice z buyer personą',
    'Segmentacja grupy docelowej: cztery główne podejścia',
    'Finding your target audience — jak zbadać grupę docelową?',
    'How to find your target audience — jak określić grupę docelową?',
    'Szablon profilu grupy docelowej do uzupełnienia',
    'Najczęstsze błędy w określaniu grupy docelowej',
    'Angielskie zwroty w briefie — słownik roboczy',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  assert.equal(literal(context.scope.get('segmentation'), context).length, 4);
  assert.equal(literal(context.scope.get('researchMethods'), context).length, 6);
  assert.equal(literal(context.scope.get('processSteps'), context).length, 6);
  assert.equal(literal(context.scope.get('examples'), context).length, 3);
  assert.equal(literal(context.scope.get('englishBriefTerms'), context).length, 21);
  assert.match(source, /przykładami warsztatowymi, a nie klientami ani wynikami FOTZ/);
});

test('guide links only to reviewed routes and keeps SelectedWork outside evaluated main', () => {
  const routes = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8')).staticRoutes;
  for (const path of ['/', '/blog', '/blog/segmentacja-rynku-co-to', '/blog/persona-marketingowa', '/blog/strategia-komunikacji-co-to', '/blog/content-marketing-dla-firm', '/uslugi/marketing-internetowy', '/kontakt']) {
    assert.ok(routes.includes(path), `Unknown route: ${path}`);
    assert.ok(source.includes(`to="${path}"`), `Missing link: ${path}`);
  }
  assert.match(source, /<Layout workPlacement="after-main">/);
});

test('unsupported prices, guarantees, statistics and fabricated claims are absent', () => {
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*%/);
  assert.doesNotMatch(source, /wyższe ROI|niższy koszt pozyskania|nasi klienci|Seth Godin|Facebook Audience Insights|10–20 wywiadów|5–10 rozmów|gwarancj[ęa] wzrostu|gwarantowany wynik/i);
  assert.doesNotMatch(source, /Fotz Studio\s*\|\s*FOTZ|\| Fotz Studio/);
});
