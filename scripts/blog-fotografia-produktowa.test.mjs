import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';
import { getOwnPhoto, isApprovedPhoto, ownPhotos } from '../src/lib/own-photos.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogFotografiaProduktowa.tsx', import.meta.url));
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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/fotografia-produktowa-poradnik' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('product photography guide has concise metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Fotografia produktowa — poradnik 2026 | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/fotografia-produktowa-poradnik');
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
  for (const id of ['article-content', 'czym-jest', 'zasady', 'plan-zdjec', 'przygotowanie', 'sprzet', 'swiatlo-i-kompozycja', 'ustawienia', 'obrobka', 'publikacja', 'bledy', 'samodzielnie-czy-fotograf', 'faq', 'faq-heading', 'nastepny-krok-heading']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ IDs must be unique');
  assert.match(source, /id=\{`product-photo-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the guide canonical, approved image and real dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.image.url, readConstant('heroImageUrl'));
  assert.equal(schema.datePublished, '2026-04-12');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 12 kwietnia 2026/);
  assert.match(source, /Aktualizacja: 11 listopada 2026/);
});

test('visible FAQ and FAQPage schema share the same nine complete answers', () => {
  assert.equal(faqItems.length, 9);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 180);
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

test('hero and Article image come from the reviewed product photo catalogue', () => {
  const photo = getOwnPhoto('produktowy');
  assert.equal(photo.src, '/work/product-1200.webp');
  assert.equal(photo.alt, ownPhotos.product.alt);
  assert.equal(isApprovedPhoto(photo.src), true);
  assert.equal(isApprovedPhoto(articleData.image), true);
  assert.ok(fs.statSync(new URL(`../public${photo.src}`, import.meta.url)).size > 0);
  assert.ok(photo.srcSet.includes('/work/product-480.webp 480w'));
  assert.ok(photo.srcSet.includes('/work/product-800.webp 800w'));
  assert.match(source, /src=\{heroPhoto\.src\}/);
  assert.match(source, /srcSet=\{heroPhoto\.srcSet\}/);
  assert.match(source, /width=\{heroPhoto\.width\}/);
  assert.match(source, /height=\{heroPhoto\.height\}/);
  assert.match(source, /alt=\{heroPhoto\.alt\}/);
});

test('guide remains informational, links to real pages and drops unsupported claims', () => {
  for (const text of [
    'Czym jest fotografia produktowa?',
    '10 zasad dobrej fotografii produktowej',
    'Sprzęt do fotografii produktowej: co jest naprawdę potrzebne?',
    'Jak sfotografować produkt? Aparat, statyw i ustawienia',
    'Obróbka i retusz zdjęć produktowych',
    'Jak przygotować zdjęcia produktowe dla e-commerce?',
    'Samodzielna sesja czy profesjonalna fotografia produktowa?',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  const routes = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8')).staticRoutes;
  for (const path of ['/', '/blog', '/uslugi/fotografia-produktowa', '/realizacje', '/kontakt']) {
    assert.ok(routes.includes(path), `Unknown route: ${path}`);
    assert.ok(source.includes(`to="${path}"`), `Missing link: ${path}`);
  }
  assert.match(source, /<Layout workExcludeImageId="product">/);
  assert.doesNotMatch(source, /ContactSection|SelectedWork|stadium-1200|Enea Stadion/);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /400-800|40-70%|1500-3000|2025|gwarantujemy|gwarantowany wzrost|zwiększa sprzedaż o/i);
});
