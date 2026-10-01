import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { extractMetadata, escapeHtml } from './lib/seo-metadata.mjs';

test('preserves complete quoted metadata, resolves imported literals and noIndex=false', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fotz-seo-'));
  try {
    fs.writeFileSync(path.join(dir, 'constants.ts'), 'export const URL_PATH = "/agencja-social-media/audyt";');
    const title = 'Audyt "A & B" — kompletny tytuł z nazwą usługi oraz miasta na końcu: Poznań';
    fs.writeFileSync(path.join(dir, 'page.tsx'), `
      import { URL_PATH as route } from './constants';
      const seo = { title: ${JSON.stringify(title)}, description: 'Sprawdź zakres audytu i przygotowanie do konsultacji.' };
      export const Page = () => <SEOHead title={seo.title} description={seo.description}
        canonical={\`https://fotz.pl\${route}\`} noIndex={false} og={{ type: 'article' }} />;
    `);
    const result = extractMetadata(path.join(dir, 'page.tsx'));
    assert.equal(result.title, title);
    assert.equal(result.canonical, 'https://fotz.pl/agencja-social-media/audyt');
    assert.equal(result.noIndex, false);
    assert.equal(result.ogType, 'article');
    assert.equal(escapeHtml('"A & B" <C>'), '&quot;A &amp; B&quot; &lt;C&gt;');
  } finally { fs.rmSync(dir, { recursive: true }); }
});

test('supports literal JSX entities, relative canonicals and bare noIndex', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fotz-seo-'));
  try {
    const file = path.join(dir, 'page.tsx');
    fs.writeFileSync(file, '<SEOHead title="A &amp; B" description="Opis strony." canonical="/podziekowanie/" noIndex />');
    const result = extractMetadata(file);
    assert.equal(result.title, 'A & B');
    assert.equal(result.canonical, 'https://fotz.pl/podziekowanie');
    assert.equal(result.noIndex, true);
  } finally { fs.rmSync(dir, { recursive: true }); }
});

test('does not execute dynamic expressions while extracting metadata', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'fotz-seo-'));
  try {
    const file = path.join(dir, 'page.tsx');
    fs.writeFileSync(file, '<SEOHead title={process.exit(1)} description="Opis." canonical="/" />');
    assert.equal(extractMetadata(file), null);
  } finally { fs.rmSync(dir, { recursive: true }); }
});
