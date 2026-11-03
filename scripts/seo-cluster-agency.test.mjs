import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';
import { enquiryHref } from '../src/lib/enquiry.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/clusters/SEOCluster.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
const appSource = fs.readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('SEO agency hub metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, 'Agencja SEO — pozycjonowanie stron | FOTZ');
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/seo');
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.noIndex, false);
});

test('SEO agency hub has one H1, one main-content owner and a complete offer', () => {
  assert.equal((source.match(/<h1[\s>]/g) || []).length, 1);
  assert.match(source, /\{pageTitle\}/);
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  for (const heading of [
    'Czym jest agencja SEO i kiedy warto z nią współpracować?',
    'Zakres usług agencji SEO: od audytu do wdrożenia',
    'Audyt SEO i strategia oparta na intencji wyszukiwania',
    'Techniczne SEO: indeksowanie, wydajność i kontrola zmian',
    'Treści i content marketing: odpowiedzi zamiast listy fraz',
    'Pozycjonowanie lokalne i Profil Firmy w Google',
    'Wybór agencji SEO: jak rozpoznać dobrą współpracę?',
    'Współpraca z agencją SEO krok po kroku',
    'Jak mierzymy widoczność, ruch i zapytania?',
    'Warunki współpracy i wycena bez sztywnego cennika',
    'Agencja SEO — pytania i odpowiedzi',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('unsupported results, fixed prices and fabricated local proof are removed', () => {
  assert.doesNotMatch(source, /150\+|Top 3|\+340%|98%|520%|200-500%|70% użytkowników|95% wyszukiwań|75% użytkowników/i);
  assert.doesNotMatch(source, /\b\d+(?:[ .]\d+)?\s*(?:PLN|zł)\b/i);
  assert.doesNotMatch(source, /pozycje nr 1 w określonym czasie|najlepsza agencja SEO w Polsce|zostają z nami średnio/i);
  assert.match(source, /Nie podajemy sztywnego cennika przed analizą/);
  assert.match(source, /Nie gwarantujemy pozycji, terminu efektu ani liczby klientów/);
  assert.match(source, /Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji/);
});

test('visible FAQ and schema use the same complete data with unique IDs', () => {
  const faqs = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faqs));
  assert.equal(faqs.length, 7);
  for (const item of faqs) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 80);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /<ServiceSchema name=\{pageTitle\} description=\{heroLead\}/);
  assert.match(source, /faqItems\.map\(\(item, index\)/);
  assert.match(source, /<details/);
  assert.match(source, /<summary/);
  assert.match(source, /id=\{`agencja-seo-faq-\$\{index\}`\}/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('hub uses a focused set of real service and guide links', () => {
  const serviceBlock = source.match(/const serviceItems = \[([\s\S]*?)\n\];/);
  const guideBlock = source.match(/const guideItems = \[([\s\S]*?)\n\];/);
  assert.ok(serviceBlock && guideBlock);
  const serviceHrefs = [...serviceBlock[1].matchAll(/href: "([^"]+)"/g)].map(match => match[1]);
  const guideHrefs = [...guideBlock[1].matchAll(/href: "([^"]+)"/g)].map(match => match[1]);
  assert.equal(serviceHrefs.length, 7);
  assert.equal(guideHrefs.length, 4);
  assert.equal(new Set([...serviceHrefs, ...guideHrefs]).size, serviceHrefs.length + guideHrefs.length);
  for (const href of [...serviceHrefs, ...guideHrefs]) {
    assert.ok(appSource.includes(`<Route path="${href}"`), `Missing declared route: ${href}`);
  }
});

test('section IDs are unique and CTAs lead to the SEO audit enquiry', () => {
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of [
    'agencja-seo-oferta',
    'agencja-seo-strategia',
    'agencja-seo-technika',
    'agencja-seo-tresci',
    'agencja-seo-lokalne',
    'agencja-seo-wybor',
    'agencja-seo-proces',
    'agencja-seo-pomiar',
    'agencja-seo-wycena',
    'agencja-seo-faq',
  ]) assert.ok(ids.includes(id), `Missing section ID: ${id}`);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=seo&wariant=audit#formularz');
  assert.equal(readConstant('contactHref'), enquiryHref('seo', 'audit'));
  assert.equal((source.match(/to=\{contactHref\}/g) || []).length, 2);
});
