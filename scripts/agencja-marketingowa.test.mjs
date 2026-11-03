import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { extractMetadata, readSource, literal } from './lib/seo-metadata.mjs';

const pagePath = fileURLToPath(new URL('../src/pages/AgencjaMarketingowa.tsx', import.meta.url));
const source = fs.readFileSync(pagePath, 'utf8');
const context = readSource(pagePath);

const readConstant = name => {
  const match = source.match(new RegExp(`const ${name} = "([^"]+)";`));
  assert.ok(match, `Missing string constant: ${name}`);
  return match[1];
};

test('metadata is concise, branded and self-canonical', () => {
  const metadata = extractMetadata(pagePath);
  assert.ok(metadata);
  assert.equal(metadata.title, readConstant('seoTitle'));
  assert.equal(metadata.title, 'Agencja marketingu internetowego — marketing online | FOTZ');
  assert.ok(metadata.title.length <= 60);
  assert.ok(metadata.title.endsWith(' | FOTZ'));
  assert.equal(metadata.description, readConstant('seoDescription'));
  assert.ok(metadata.description.length > 0 && metadata.description.length <= 160);
  assert.match(metadata.description, /Agencja marketingu internetowego/);
  assert.equal(metadata.canonical, readConstant('canonicalUrl'));
  assert.equal(metadata.canonical, 'https://www.fotz-studio.pl/agencja-marketingowa');
  assert.equal(metadata.noIndex, false);
});

test('page has one H1, one main-content owner and a complete offer', () => {
  const layoutSource = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
  assert.equal((source.match(/<h1[\s>]/g) || []).length, 1);
  assert.doesNotMatch(source, /<main[\s>]/);
  assert.doesNotMatch(source, /\bid="main-content"/);
  assert.equal((layoutSource.match(/<main id="main-content"/g) || []).length, 1);
  assert.equal((`${source}\n${layoutSource}`.match(/\bid="main-content"/g) || []).length, 1);
  assert.match(source, /<Layout workPlacement="manual">/);
  for (const heading of [
    'Czym jest agencja marketingu internetowego i kiedy warto z nią współpracować?',
    'SEO i widoczność w wyszukiwarce',
    'Content marketing i treści na stronę',
    'Google Ads, kampanie PPC i reklama social',
    'Produkcja foto, wideo i grafik',
    'Strategia marketingowa i digital marketing: wybór kanałów dla Twojego biznesu',
    'Pomiar leadów i optymalizacja skutecznego marketingu',
    'Współpraca z agencją marketingu internetowego krok po kroku',
    'Budżet marketingowy: kompleksowy zakres bez sztywnych cen',
    'Warunki współpracy, dostępy i odpowiedzialność',
    'Agencja marketingowa — najczęstsze pytania o współpracę',
  ]) assert.ok(source.includes(heading), `Missing section: ${heading}`);
});

test('fixed prices, guarantees and unsupported proof are removed', () => {
  assert.doesNotMatch(source, /\b\d+(?:[ .]\d+)?\s*(?:PLN|zł)\b/i);
  assert.doesNotMatch(source, /500\+|200\+|97%|TOP 3|Google Premier Partner|najlepsza agencja|zadowolonych klientów|gwarancja pozycji/i);
  assert.match(source, /Nie podajemy\s+sztywnych cen przed poznaniem potrzeb/);
  assert.match(source, /Nie gwarantujemy konkretnej pozycji, liczby leadów ani sprzedaży/);
  assert.match(source, /nie dostarczono do analizy/);
  assert.doesNotMatch(source, /Enea Stadion|FPS Cegielski|RPPG|Fabryka Virali/);
});

test('visible FAQ and schema use the same complete data with unique anchors', () => {
  const faq = literal(context.scope.get('faqItems'), context);
  assert.ok(Array.isArray(faq));
  assert.equal(faq.length, 8);
  for (const item of faq) {
    assert.ok(item.question.length > 10);
    assert.ok(item.answer.length > 80);
  }
  assert.match(source, /<FAQSchema items=\{faqItems\} \/>/);
  assert.match(source, /faqItems\.map\(\(item, index\)/);
  assert.match(source, /<details/);
  assert.match(source, /<summary/);
  assert.match(source, /id=\{`agencja-faq-\$\{index\}`\}/);
  assert.match(source, /\{item\.question\}/);
  assert.match(source, /\{item\.answer\}/);
});

test('service schema, breadcrumbs and CTAs match the page', () => {
  assert.match(source, /<ServiceSchema[\s\S]*?name="Agencja marketingu internetowego"/);
  assert.match(source, /<BreadcrumbSchema[\s\S]*?url: canonicalUrl/);
  assert.equal(readConstant('contactHref'), '/kontakt?usluga=marketing#formularz');
  assert.ok((source.match(/to=\{contactHref\}/g) || []).length >= 2);
  assert.ok(source.includes('href="#oferta"'));
  for (const href of [
    '/uslugi/marketing-internetowy',
    '/performance-marketing/google-ads',
    '/seo/pozycjonowanie',
    '/content-marketing/strategia',
    '/uslugi/strony-internetowe',
    '/realizacje',
  ]) assert.ok(source.includes(`to="${href}"`) || source.includes(`href: "${href}"`), `Missing link: ${href}`);
});

test('static IDs are unique and dynamic FAQ IDs have a page-specific prefix', () => {
  const ids = [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ['oferta', 'strategia', 'pomiar', 'proces', 'budzet', 'wspolpraca', 'wybor', 'realizacje', 'faq']) {
    assert.ok(ids.includes(id), `Missing section ID: ${id}`);
  }
  assert.match(source, /id=\{`agencja-faq-\$\{index\}`\}/);
});
