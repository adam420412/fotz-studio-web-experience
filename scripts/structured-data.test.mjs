import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const source = fs.readFileSync(new URL('../src/components/seo/StructuredData.tsx', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
const exports = {};
let pathname = '/blog/audyt-seo-krok-po-kroku';
vm.runInNewContext(compiled, {
  exports,
  URL,
  require: name => {
    if (name === 'react-helmet-async') return { Helmet: 'helmet' };
    if (name === 'react-router-dom') return { useLocation: () => ({ pathname }) };
    return require(name);
  },
});
const breadcrumb = props => JSON.parse(exports.BreadcrumbSchema(props).props.children.props.children);
const service = props => JSON.parse(exports.ServiceSchema({ description: 'Oferta', ...props }).props.children.props.children);
const article = props => JSON.parse(exports.ArticleSchema(props).props.children.props.children);

test('nationwide service uses Country while local areas keep their existing types', () => {
  assert.deepEqual(service({ areaServed: 'Polska' }).areaServed, { '@type': 'Country', name: 'Polska' });
  assert.deepEqual(service({}).areaServed, { '@type': 'City', name: 'Poznań' });
  assert.deepEqual(service({ areaServed: ['Polska', 'Mazowsze'] }).areaServed, [
    { '@type': 'Country', name: 'Polska' },
    { '@type': 'Place', name: 'Mazowsze' },
  ]);
});

test('breadcrumb schema accepts the same path/label format as visible navigation', () => {
  const result = breadcrumb({ items: [{ label: 'Start', path: '/' }, { label: 'Blog', path: '/blog' }, { label: 'Artykuł', path: '/blog/artykul' }] });
  assert.deepEqual(result.itemListElement.map(item => item.item), ['https://www.fotz-studio.pl', 'https://www.fotz-studio.pl/blog', 'https://www.fotz-studio.pl/blog/artykul']);
  assert.deepEqual(result.itemListElement.map(item => item.position), [1, 2, 3]);
});

test('breadcrumb schema keeps existing formats and allows the last item without URL', () => {
  const result = breadcrumb({ items: [{ name: 'Start', url: '/' }, { label: 'Usługi', href: '/uslugi' }, { name: 'Oferta' }] });
  assert.equal(result.itemListElement[1].item, 'https://www.fotz-studio.pl/uslugi');
  assert.equal(result.itemListElement[2].name, 'Oferta');
  assert.equal('item' in result.itemListElement[2], false);
  assert.equal(breadcrumb({ data: { itemListElement: [{ name: 'Blog', item: '/blog' }] } }).itemListElement[0].item, 'https://www.fotz-studio.pl/blog');
});

test('article schema without url derives every page reference from the current canonical route', () => {
  pathname = '/blog/audyt-seo-krok-po-kroku';
  const canonical = 'https://www.fotz-studio.pl/blog/audyt-seo-krok-po-kroku';
  const result = article({ headline: 'Audyt SEO', description: 'Opis', datePublished: '2026-04-12' });
  assert.equal(result.url, canonical);
  assert.equal(result['@id'], canonical);
  assert.deepEqual(result.mainEntityOfPage, { '@type': 'WebPage', '@id': canonical });
});

test('article data without url uses the current route and explicit URLs stay unchanged', () => {
  pathname = '/blog/marketing-b2b-poradnik';
  const canonical = 'https://www.fotz-studio.pl/blog/marketing-b2b-poradnik';
  const result = article({ data: { headline: 'Marketing B2B', description: 'Opis', datePublished: '2026-03-20' } });
  assert.equal(result.url, canonical);
  assert.equal(result['@id'], canonical);
  assert.equal(result.mainEntityOfPage['@id'], canonical);

  const propsUrl = 'https://www.fotz-studio.pl/blog/jawny-adres-props';
  const dataUrl = 'https://www.fotz-studio.pl/blog/jawny-adres-data';
  assert.equal(article({ url: propsUrl }).url, propsUrl);
  assert.equal(article({ url: propsUrl, data: { url: dataUrl } }).url, dataUrl);
});
