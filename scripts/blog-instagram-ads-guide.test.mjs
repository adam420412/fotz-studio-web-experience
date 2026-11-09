import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const require = createRequire(import.meta.url);
const pagePath = fileURLToPath(new URL('../src/pages/BlogSztukaPromocjiInstagram.tsx', import.meta.url));
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
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname: '/blog/reklama-na-instagramie' }) };
    return require(name);
  },
});
const articleSchema = props => JSON.parse(structuredDataExports.ArticleSchema(props).props.children.props.children);
const faqSchema = props => JSON.parse(structuredDataExports.FAQSchema(props).props.children.props.children);

test('Instagram Ads guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);

  assert.equal(title, 'Instagram Ads 2026: reklama na Instagramie | FOTZ');
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length > 0 && description.length <= 160, `Description has ${description.length} characters`);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/reklama-na-instagramie');
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
  for (const id of ['article-content', 'podstawy', 'przygotowanie', 'formaty', 'konfiguracja', 'targetowanie', 'budzet', 'kreacje', 'pomiar', 'diagnostyka', 'faq']) {
    assert.equal(ids.filter(value => value === id).length, 1, `Missing or duplicate section: ${id}`);
  }
  assert.equal(new Set(faqItems.map(item => item.id)).size, faqItems.length, 'FAQ anchor IDs must be unique');
  assert.match(source, /id=\{`instagram-ads-faq-\$\{item\.id\}`\}/);
});

test('ArticleSchema uses the current canonical and real publication/update dates', () => {
  const schema = articleSchema({ data: articleData });
  assert.equal(schema['@type'], 'Article');
  assert.equal(schema.headline, 'Instagram Ads 2026: jak działa reklama na Instagramie?');
  assert.equal(schema.description, readConstant('seoDescription'));
  assert.equal(schema.url, readConstant('canonicalUrl'));
  assert.equal(schema['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.mainEntityOfPage['@id'], readConstant('canonicalUrl'));
  assert.equal(schema.datePublished, '2025-02-20');
  assert.equal(schema.dateModified, '2026-11-09');
  assert.ok(schema.dateModified >= schema.datePublished);
  assert.match(source, /Opublikowano: 20 lutego 2025/);
  assert.match(source, /Aktualizacja: 9 listopada 2026/);
});

test('visible FAQ and FAQPage schema use the same ten complete answers', () => {
  assert.equal(faqItems.length, 10);
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

test('guide covers the full workflow and links only to real related destinations', () => {
  for (const text of [
    'Czym jest Instagram Ads?',
    'Promuj post czy kampania w Menedżerze reklam?',
    'Co przygotować przed pierwszą kampanią?',
    'Formaty reklam i umiejscowienia na Instagramie',
    'Jak ustawić kampanię Instagram Ads krok po kroku?',
    'Targetowanie odbiorców w Meta Ads',
    'Ile kosztuje reklama na Instagramie i jak zaplanować budżet?',
    'Jak mierzyć wyniki i optymalizować kampanię?',
    'Dlaczego reklama na Instagramie nie działa?',
    'Facebook Ads czy Instagram Ads?',
    'Checklista przed publikacją kampanii',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);

  for (const path of [
    '/performance-marketing/instagram-ads',
    '/performance-marketing/meta-ads',
    '/blog/instagram-dla-firmy',
    '/blog/facebook-ads-poradnik',
    '/blog/cennik-facebook-ads',
    '/blog/jak-stworzyc-landing-page',
    '/blog/social-media-marketing-poradnik',
    '/blog/paid-social-co-to',
    '/kontakt',
  ]) assert.ok(source.includes(`to="${path}"`), `Missing related link: ${path}`);
});

test('guide removes fabricated case studies, fixed prices and obsolete promises', () => {
  assert.match(source, /redakcyjnymi przykładami planu, a nie opisami realizacji klientów ani gwarantowanymi receptami/);
  assert.match(source, /Samo uruchomienie kampanii nie gwarantuje zasięgu, leadów ani sprzedaży/);
  assert.match(source, /Nie ma jednej sztywnej ceny za kliknięcie, wyświetlenie, kontakt ani zakup/);
  assert.doesNotMatch(source, /\b\d+(?:[.,]\d+)?\s*(?:zł|PLN)\b/i);
  assert.doesNotMatch(source, /ROAS\s*\d|CTR\s*\d+(?:[.,]\d+)?%|wzrost sprzedaży o\s*\d|20% obrazu|Instagram Ads 2025/i);
  assert.doesNotMatch(source, /najwyższy engagement|najskuteczniejsze formaty|maksymalny zwrot z inwestycji/i);
});
