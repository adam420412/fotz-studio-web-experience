import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/BlogCMSCoToJest.tsx', import.meta.url));
const source = readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('CMS guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /CMS/);
  assert.match(description, /system zarządzania treścią/);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/co-to-jest-cms');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.ogType, 'article');
  assert.equal(metadata?.noIndex, false);
});

test('CMS guide has one H1 and ArticleSchema with canonical and real update dates', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'CMS — co to jest? Jak wybrać system zarządzania treścią?');
  assert.match(source, /<ArticleSchema[\s\S]*?title=\{pageTitle\}[\s\S]*?description=\{seoDescription\}[\s\S]*?url=\{canonicalUrl\}/);
  assert.match(source, /datePublished="2025-04-10"/);
  assert.match(source, /dateModified="2026-11-12"/);
  const layout = readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
  assert.equal((layout.match(/<main id="main-content"/g) || []).length, 1);
  assert.doesNotMatch(source, /<main\b/);
});

test('visible guide covers definition, platform comparison, selection, costs, SEO and maintenance', () => {
  for (const text of [
    'Co to jest CMS? System zarządzania treścią — definicja',
    'Jak działa system CMS?',
    'Rodzaje CMS i typy systemów zarządzania treścią',
    'Najpopularniejsze systemy CMS — porównanie platform',
    'CMS tradycyjny czy headless — co wybrać?',
    'Jaki CMS wybrać dla strony internetowej lub sklepu?',
    'Ile kosztuje CMS, wdrożenie i utrzymanie?',
    'CMS a SEO, pozycjonowanie i bezpieczeństwo',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  const platforms = literal(context.scope.get('platforms'), context);
  const steps = literal(context.scope.get('selectionSteps'), context);
  assert.equal(platforms.length, 8);
  assert.equal(steps.length, 6);
  assert.ok(platforms.some(item => item.name === 'WordPress'));
  assert.ok(platforms.some(item => item.name === 'Joomla'));
  assert.ok(platforms.some(item => item.name === 'Drupal'));
  assert.ok(platforms.some(item => item.name === 'Shopify'));
});

test('native FAQ and FAQPage schema use the same eight complete answers', () => {
  const faqItems = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faqItems));
  assert.equal(faqItems.length, 8);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 150);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item\) => \(/);
  assert.match(source, /<details key=\{item\.question\}/);
  assert.match(source, /<summary[^>]*>/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /<p[^>]*>\{item\.answer\}<\/p>/);
  assert.doesNotMatch(source, /<Accordion/);
});

test('links and anchors resolve statically, IDs are unique and old unsupported claims are absent', () => {
  for (const link of [
    '/blog/co-to-jest-hosting',
    '/blog/co-to-jest-seo',
    '/blog/ile-kosztuje-strona-internetowa',
    '/uslugi/tworzenie-stron-internetowych',
    '/kontakt#formularz',
  ]) assert.ok(source.includes(`to="${link}"`), `Missing real link: ${link}`);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'Duplicate static IDs');
  for (const [, fragment] of source.matchAll(/href="#([^"]+)"/g)) {
    assert.ok(ids.includes(fragment), `Missing fragment: ${fragment}`);
  }
  assert.doesNotMatch(source, /~43%|~4%|60 000\+|2000-8000|20 000-100 000|USD\/mies|zł\/mies/);
});
