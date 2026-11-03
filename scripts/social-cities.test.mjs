import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const citySlugs = ['krakow', 'lublin', 'szczecin'];

function load(file) {
  const code = ts.transpileModule(fs.readFileSync(new URL(file, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
  }).outputText;
  const context = { exports: {}, require };
  vm.runInNewContext(code, context);
  return context.exports;
}

function words(value) {
  return value.match(/[\p{L}\p{N}]+(?:[-’'][\p{L}\p{N}]+)*/gu) ?? [];
}

const clusters = load('../src/data/socialMediaClusters.ts');
const guides = load('../src/data/socialMediaGuides.ts');
const cities = citySlugs.map(slug => clusters.SM_CLUSTERS_BY_SLUG[slug]);

test('Kraków, Lublin and Szczecin have concise branded local metadata', () => {
  for (const city of cities) {
    assert.ok(city, citySlugs.find(slug => !clusters.SM_CLUSTERS_BY_SLUG[slug]));
    assert.equal(city.path, `/agencja-social-media/${city.slug}`);
    assert.equal(city.kind, 'city');
    assert.equal(city.intent, 'local');
    assert.ok(city.metaTitle.length <= 60, `${city.slug}: title ${city.metaTitle.length}`);
    assert.ok(city.metaTitle.endsWith(' | FOTZ'), city.metaTitle);
    assert.ok(city.metaDescription.length <= 160, `${city.slug}: description ${city.metaDescription.length}`);
    assert.match(city.metaDescription, /FOTZ Studio/);
    assert.match(city.description, /strategia|Strategia/);
  }
});

test('each city has a complete, substantial offer instead of the generic fallback', () => {
  for (const city of cities) {
    const sections = guides.getSocialMediaGuide(city);
    const body = sections.map(section => `${section.title} ${section.text}`).join(' ');
    assert.ok(sections.length >= 10, `${city.slug}: ${sections.length} sections`);
    assert.ok(words(body).length >= 750, `${city.slug}: ${words(body).length} guide words`);
    assert.doesNotMatch(body, /Współpraca z zespołem z Poznania|Co przygotować do wyceny\?/);
    for (const required of [/strateg/i, /treś|content/i, /rolk/i, /zdję/i, /moderac/i, /reklam/i, /etap|proces/i, /zapyta/i, /wycen/i, /FAQ/]) {
      assert.match(body, required, `${city.slug}: missing ${required}`);
    }
    assert.doesNotMatch(body, /\b\d+(?:[ .]\d+)?\s*(?:zł|PLN)\b/i);
    assert.doesNotMatch(body, /nasze biuro|biuro FOTZ Studio/i);
  }
});

test('city offers do not reuse sentences or replace only the city name', () => {
  const offers = cities.map(city => guides.getSocialMediaGuide(city));
  const allSections = offers.flat();
  assert.equal(new Set(allSections.map(section => section.text)).size, allSections.length);
  const sentences = offers.map(sections => new Set(sections.flatMap(section =>
    section.text.split(/(?<=[.!?])\s+/u).map(sentence => sentence.trim())
      .filter(sentence => words(sentence).length >= 5))));
  for (let left = 0; left < sentences.length; left++) {
    for (let right = left + 1; right < sentences.length; right++) {
      const shared = [...sentences[left]].filter(sentence => sentences[right].has(sentence));
      assert.deepEqual(shared, [], `${citySlugs[left]} and ${citySlugs[right]} reuse sentences`);
    }
  }
});

test('the existing hub preserves one H1, self-canonical, breadcrumb schema and relevant CTAs', () => {
  const source = fs.readFileSync(new URL('../src/pages/SocialMediaClusterHub.tsx', import.meta.url), 'utf8');
  const layout = fs.readFileSync(new URL('../src/components/layout/Layout.tsx', import.meta.url), 'utf8');
  assert.equal((source.match(/<h1\b/g) ?? []).length, 1);
  assert.equal((layout.match(/<main id="main-content"/g) ?? []).length, 1);
  assert.equal((`${source}\n${layout}`.match(/\bid="main-content"/g) ?? []).length, 1);
  assert.match(source, /title=\{cluster\.metaTitle\}/);
  assert.match(source, /description=\{cluster\.metaDescription\}/);
  assert.match(source, /const canonical = `https:\/\/www\.fotz-studio\.pl\$\{cluster\.path\}`/);
  assert.match(source, /<BreadcrumbSchema/);
  assert.match(source, /name: cluster\.shortLabel, url: canonical/);
  assert.match(source, /to="\/kontakt"/);
  assert.match(source, /to="\/konsultacja"/);
});
