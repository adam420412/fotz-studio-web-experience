import test from 'node:test';
import assert from 'node:assert/strict';
import { getBlogMetadata, normalizeSchemaUrls, normalizeSiteUrls, prepareBlogHtml } from '../src/lib/blog-seo.mjs';

test('normalizes website URLs without touching contacts, profiles, subdomains or similar hosts', () => {
  const input = 'https://fotz.pl/kontakt?x=1 https://www.fotz.pl/blog/a http://fotz-studio.pl/a https://www.fotz-studio.pl/a adam@fotz.pl https://instagram.com/fotz.pl https://panel.fotz.pl https://fotz.pl.example.com';
  assert.equal(normalizeSiteUrls(input), 'https://www.fotz-studio.pl/kontakt?x=1 https://www.fotz-studio.pl/blog/a https://www.fotz-studio.pl/a https://www.fotz-studio.pl/a adam@fotz.pl https://instagram.com/fotz.pl https://panel.fotz.pl https://fotz.pl.example.com');
});

test('normalizes nested CMS schema without mutating the source or dropping non-URL values', () => {
  const schema = { '@id': 'https://fotz.pl/blog/a#article', publisher: { url: 'https://fotz.pl', email: 'adam@fotz.pl' }, sameAs: ['https://instagram.com/fotz.pl'], count: 2, optional: null };
  const result = normalizeSchemaUrls(schema);
  assert.equal(result['@id'], 'https://www.fotz-studio.pl/blog/a#article');
  assert.equal(result.publisher.url, 'https://www.fotz-studio.pl');
  assert.equal(result.publisher.email, schema.publisher.email);
  assert.deepEqual(result.sameAs, schema.sameAs);
  assert.equal(result.count, 2);
  assert.equal(result.optional, null);
  assert.equal(schema.publisher.url, 'https://fotz.pl');
});

test('uses identical CMS metadata for the client and prerender while excluding test articles', () => {
  const meta = getBlogMetadata({ slug: 'test-artykul', title: 'Test artykuł', excerpt: 'Krótki opis testowy.', hero_image_url: 'https://fotz.pl/test.jpg' });
  assert.equal(meta.noIndex, true);
  assert.equal(meta.canonical, 'https://www.fotz-studio.pl/blog/test-artykul');
  assert.equal(meta.ogImage, 'https://www.fotz-studio.pl/test.jpg');
  assert.equal(meta.ogType, 'article');
  const description = 'A'.repeat(180);
  assert.equal(getBlogMetadata({ slug: 'poradnik', title: 'Poradnik', excerpt: description }).description, description);
});

test('CMS body preserves content and links without duplicating H1 or promoted JSON-LD', () => {
  const html = '<script type="application/ld+json">{"url":"https://fotz.pl/blog/a"}</script><h1 class="lead">Tytuł</h1><p><a href="https://fotz.pl/kontakt">Kontakt</a></p>';
  assert.equal(prepareBlogHtml(html), '<h2 class="lead">Tytuł</h2><p><a href="https://www.fotz-studio.pl/kontakt">Kontakt</a></p>');
});

test('prefers the authored CMS description over image captions and raw markdown in excerpts', () => {
  const article = { slug: 'kampanie', title: 'Kampanie reklamowe', excerpt: 'Kampanie ! Kobieta przy stole > TL;DR:', meta_description: 'Jak zaplanować kampanię reklamową dla firmy.' };
  assert.equal(getBlogMetadata(article).description, article.meta_description);
});

test('CMS links use the consolidated Poznan service URL while keeping query strings and other destinations', () => {
  const html = '<a href="https://fotz.pl/social-media/poznan?from=blog#oferta">Oferta</a><a href="/social-media/poznan">Lokalnie</a><a href="https://example.com/social-media/poznan">Źródło</a><a href="/social-media/poznan-inny">Inna strona</a>';
  assert.equal(prepareBlogHtml(html), '<a href="https://www.fotz-studio.pl/agencja-social-media/poznan?from=blog#oferta">Oferta</a><a href="/agencja-social-media/poznan">Lokalnie</a><a href="https://example.com/social-media/poznan">Źródło</a><a href="/social-media/poznan-inny">Inna strona</a>');
});

test('CMS canonical aliases match hosting redirects and preserve parameters without touching other links', async () => {
  const { readFile } = await import('node:fs/promises');
  const config = JSON.parse(await readFile(new URL('../vercel.json', import.meta.url), 'utf8'));
  const aliases = ['/blog/okr-co-to', '/blog/nps-co-to-jest', '/blog/reklama-programatyczna-co-to', '/blog/zero-trust-security-co-to-jest-jak-wdrozyz', '/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee', '/uslugi/audyt-seo', '/uslugi/strony-internetowe/kielce'];
  for (const from of aliases) {
    const redirect = config.redirects.find(item => item.source === from);
    assert.equal(redirect.permanent, true);
    assert.equal(prepareBlogHtml(`<a href="${from}?source=guide#zakres">Czytaj</a>`), `<a href="${redirect.destination}?source=guide#zakres">Czytaj</a>`);
    assert.equal(prepareBlogHtml(`<a href="https://example.com${from}">Źródło</a>`), `<a href="https://example.com${from}">Źródło</a>`);
  }
});
