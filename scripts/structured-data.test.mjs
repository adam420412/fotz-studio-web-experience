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
vm.runInNewContext(compiled, { exports, URL, require: name => name === 'react-helmet-async' ? { Helmet: 'helmet' } : require(name) });
const breadcrumb = props => JSON.parse(exports.BreadcrumbSchema(props).props.children.props.children);

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
