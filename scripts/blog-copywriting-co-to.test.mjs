import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, literal, readSource } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/BlogCopywritingCoTo.tsx', import.meta.url));
const source = readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('copywriting guide metadata is concise, branded and self-canonical', () => {
  const title = readConstant('seoTitle');
  const description = readConstant('seoDescription');
  const canonical = readConstant('canonicalUrl');
  const metadata = extractMetadata(pagePath);
  assert.ok(title.endsWith(' | FOTZ'));
  assert.ok(title.length <= 60, `Title has ${title.length} characters`);
  assert.ok(description.length <= 160, `Description has ${description.length} characters`);
  assert.match(title, /Copywriting/);
  assert.match(description, /copywritera/);
  assert.equal(canonical, 'https://www.fotz-studio.pl/blog/copywriting-co-to');
  assert.equal(metadata?.title, title);
  assert.equal(metadata?.description, description);
  assert.equal(metadata?.canonical, canonical);
  assert.equal(metadata?.noIndex, false);
});

test('copywriting guide has one H1 and ArticleSchema with its own URL and final metadata', () => {
  assert.equal((source.match(/<h1\b/g) || []).length, 1);
  assert.match(source, /<h1[^>]*>\{pageTitle\}<\/h1>/);
  assert.equal(readConstant('pageTitle'), 'Copywriting — co to jest? Kim jest copywriter i jak pracuje?');
  assert.match(source, /<ArticleSchema[\s\S]*?title=\{pageTitle\}[\s\S]*?description=\{seoDescription\}[\s\S]*?url=\{canonicalUrl\}/);
  assert.match(source, /dateModified="2026-11-02"/);
});

test('visible guide covers intent, text types, offers, SEO, workflow, examples and measurement', () => {
  for (const text of [
    'Czym jest copywriting i czym zajmuje się copywriter? Definicja',
    'Rodzaje tekstów i ich zadania',
    'Intencja, odbiorca i moment decyzji',
    'Struktura oferty, nagłówki i CTA',
    'SEO copywriting bez upychania fraz',
    'Dobry copywriter: research, draft, redakcja i test',
    'Przykłady przed i po: redakcja, nie wynik testu',
    'Jak mierzyć tekst i zapytania?',
  ]) assert.ok(source.includes(text), `Missing visible content: ${text}`);
  const processSteps = literal(context.scope.get('processSteps'), context);
  assert.equal(processSteps.length, 4);
  assert.match(source, /Nie są case study i nie przypisujemy im wzrostu/);
});

test('prerendered native FAQ and FAQPage schema share the same complete data', () => {
  const faqItems = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faqItems));
  assert.equal(faqItems.length, 6);
  for (const item of faqItems) {
    assert.ok(item.question.length > 20);
    assert.ok(item.answer.length > 180);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item\) => \(/);
  assert.match(source, /<details key=\{item\.question\}/);
  assert.match(source, /<summary[^>]*>/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /<p[^>]*>\{item\.answer\}<\/p>/);
  assert.doesNotMatch(source, /<Accordion/);
});

test('service and contact links are real, static IDs are unique and unsupported claims are absent', () => {
  assert.match(source, /to="\/seo\/copywriting-seo"/);
  assert.match(source, /to="\/content-marketing\/copywriting-landing"/);
  assert.match(source, /to="\/kontakt\?usluga=seo#formularz"/);
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, 'Duplicate static IDs');
  assert.doesNotMatch(source, /100-300%|zwiększ konwersję|traci 70%|Junior copywriter:|8000-15 000|500-5000|najskuteczniejsze techniki|gwarancj/i);
});
