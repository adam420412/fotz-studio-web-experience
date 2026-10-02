import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';
const require = createRequire(import.meta.url);
function load(file, mocks = {}) {
  const code = ts.transpileModule(fs.readFileSync(new URL(file, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  const context = { exports: {}, require: name => mocks[name] ?? require(name) };
  vm.runInNewContext(code, context);
  return context.exports;
}
const clusters = load('../src/data/socialMediaClusters.ts');
const guides = load('../src/data/socialMediaGuides.ts');
function text(node) {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node !== 'object') return String(node);
  return [node.props?.children].flat(Infinity).map(text).join(' ');
}
function find(node, predicate) {
  if (!node || typeof node !== 'object') return undefined;
  if (predicate(node)) return node;
  return [node.props?.children].flat(Infinity).map(child => find(child, predicate)).find(Boolean);
}
function harness(initial = {}) {
  let slug = 'poznan', query = initial, retried = 0;
  const calls = [];
  const component = load('../src/pages/SocialMediaClusterHub.tsx', {
    'react-router-dom': { Link: 'a', Navigate: 'redirect', useParams: () => ({ clusterSlug: slug }) },
    '@/components/layout/Layout': { Layout: 'main' },
    '@/components/seo/SEOHead': { SEOHead: 'head' },
    '@/components/seo/StructuredData': { BreadcrumbSchema: 'schema' },
    '@/data/socialMediaClusters': clusters,
    '@/data/socialMediaGuides': guides,
    '@/hooks/useClusterArticles': { useClusterArticles: (value, enabled) => {
      calls.push({ value, enabled }); return { data: [], isLoading: false, isError: false, refetch: () => { retried++; }, ...query };
    } },
  }).default;
  return { render: () => component(), setSlug: value => { slug = value; }, setQuery: value => { query = value; }, calls, retries: () => retried };
}

test('failed article request keeps the guide available and offers a working retry', () => {
  const h = harness({ isError: true });
  const tree = h.render();
  assert.match(text(tree), /Social media i produkcja treści w Poznaniu/);
  const alert = find(tree, node => node.props?.role === 'alert');
  assert.match(text(alert), /Nie udało się wczytać/);
  find(alert, node => node.type === 'button').props.onClick();
  assert.equal(h.retries(), 1);
  h.setQuery({ data: [{ id: '1', slug: 'przyklad', title: 'Przykładowy poradnik' }] });
  const recovered = h.render();
  assert.equal(find(recovered, node => node.props?.role === 'alert'), undefined);
  assert.equal(find(recovered, node => node.props?.to === '/blog/przyklad').props.children[0].props.children, 'Przykładowy poradnik');
});

test('unknown-to-valid route changes keep the article hook unconditional and disable unknown queries', () => {
  const h = harness(); h.setSlug('unknown');
  assert.equal(h.render().type, 'redirect');
  h.setSlug('poznan'); h.render();
  assert.deepEqual(h.calls, [{ value: 'unknown', enabled: false }, { value: 'poznan', enabled: true }]);
});

test('every supported topic has useful content while articles are loading or absent', () => {
  const h = harness({ isLoading: true });
  for (const cluster of clusters.SOCIAL_MEDIA_CLUSTERS) {
    h.setSlug(cluster.slug);
    const tree = h.render();
    assert.ok(find(tree, node => node.type === 'h2' && text(node) === guides.getSocialMediaGuide(cluster)[0]?.title), cluster.slug);
    assert.ok(find(tree, node => node.props?.role === 'status'));
    assert.doesNotMatch(text(tree), /pojawią się wkrótce/);
  }
  h.setQuery({}); assert.equal(find(h.render(), node => node.props?.role === 'status'), undefined);
});

test('disabled article queries do not invoke the database', () => {
  let requests = 0;
  const { useClusterArticles } = load('../src/hooks/useClusterArticles.ts', {
    '@tanstack/react-query': { useQuery: options => options },
    '@/integrations/supabase/client': { supabase: { from: () => { requests++; throw Error('unexpected database call'); } } },
  });
  assert.equal(useClusterArticles('unknown', false).enabled, false);
  assert.equal(useClusterArticles('').enabled, false);
  assert.equal(useClusterArticles('poznan').enabled, true);
  assert.equal(requests, 0);
});
