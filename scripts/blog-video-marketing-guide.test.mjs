import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogVideoMarketingDlaFirm.tsx', import.meta.url));
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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/video-marketing-dla-firm' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('video marketing guide has final metadata and a self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Video marketing dla firm — poradnik 2026 | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/video-marketing-dla-firm');
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
  for (const id of ['article-content', 'spis-tresci', 'definicja', 'korzysci', 'formaty', 'strategia', 'produkcja', 'kanaly', 'seo', 'koszty', 'pomiar', 'bledy', 'faq', 'faq-heading', 'nastepny-krok-heading']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  for (const [, fragment] of source.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(decodeURIComponent(fragment)), `Missing fragment: ${fragment}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ IDs must be unique');
  assert.match(source, /id=\{`video-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses current canonical, approved image and real dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, readConstant('pageTitle'));
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.image.url, readConstant('heroImageUrl'));
  assert.equal(schema.datePublished, '2026-03-10');
  assert.equal(schema.dateModified, '2026-11-11');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 10 marca 2026/);
  assert.match(source, /Aktualizacja: 11 listopada 2026/);
});

test('visible FAQ and FAQPage schema share the same eight complete answers', () => {
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
  assert.match(source, /faqItems\.map\(\(item\) => \(\s*<details/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('guide remains informational and links only to reviewed routes', () => {
  for (const text of [
    'Czym jest video marketing i jak działa?',
    'Jak stworzyć skuteczną strategię video marketingową?',
    'Gdzie publikować materiały wideo? YouTube i social media',
    'Video marketing a SEO i pozycjonowanie',
    'Jak mierzyć skuteczność video marketingu?',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  const routes = JSON.parse(fs.readFileSync(new URL('../known-routes.json', import.meta.url), 'utf8')).staticRoutes;
  for (const path of ['/', '/blog', '/uslugi/video-marketing', '/kontakt', '/blog/strategia-content-marketingu-skuteczny-przewodnik-dla-firm', '/blog/youtube-dla-firmy', '/blog/video-marketing-roi']) {
    assert.ok(routes.includes(path), `Unknown route: ${path}`);
    assert.ok(source.includes(`to="${path}"`), `Missing link: ${path}`);
  }
  assert.equal(source.includes('href="https://developers.google.com/search/docs/appearance/video"'), true);
  assert.match(source, /<Layout workPlacement="after-main">/);
});

test('unsupported prices, guarantees, statistics and fabricated campaign claims are removed', () => {
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*%/);
  assert.doesNotMatch(source, /850K|385%|280 sprzedaży|62%|90 PLN|250 PLN|1000-5000|5000-20000/i);
  assert.doesNotMatch(source, /gwarantujemy|gwarantowany wzrost|zwiększa sprzedaż o|nasi klienci osiągnęli|Stworzyliśmy 3 wideo|nasze studio|nasz sprzęt/i);
  assert.doesNotMatch(source, /Fotz Studio\s*\|\s*FOTZ|\| Fotz Studio/);
});
