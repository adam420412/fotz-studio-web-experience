#!/usr/bin/env node
/**
 * Sitemap Indexability & Duplicate Validator
 *
 * Verifies that public/sitemap-main.xml:
 *  1) Contains only indexable URLs (no known noindex / canonicalized-away routes)
 *  2) Contains no duplicate <loc> entries
 *  3) Uses canonical URL policy: https, non-www, no trailing slash, no query/fragment
 *  4) Stays on the production host (fotz.pl)
 *
 * Exit code: 0 on success, 1 on any failure. Designed to run in CI after build.
 *
 * Usage: node scripts/validate-sitemap-indexable.mjs
 */

import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITEMAP_PATH = join(__dirname, '../public/sitemap-main.xml');
const BASE_URL = 'https://fotz.pl';

// Routes that MUST NOT appear in sitemap (noindex, canonicalized away, redirects, internal)
const NON_INDEXABLE_PATHS = new Set([
  '/podziekowanie',     // noindex (thank-you page)
  '/akademia',          // canonical -> /zasoby
  '/404',
  '/admin',
  '/admin/dashboard',
  '/login',
  '/auth',
  '/zaloguj',
  '/rejestracja',
]);

const NON_INDEXABLE_PATTERNS = [
  /^\/admin(\/|$)/,
  /^\/auth(\/|$)/,
  /^\/api(\/|$)/,
  /\/preview(\/|$)/,
  /\?/,                 // query params
  /#/,                  // fragments
  /\/page\/\d+/,        // pagination
];

function extractUrls(xml) {
  const urls = [];
  const re = /<loc>\s*([^<]+?)\s*<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    urls.push(m[1].replace(/\s+/g, '').trim());
  }
  return urls;
}

function pathOf(url) {
  try {
    return new URL(url).pathname.replace(/\/+$/, '') || '/';
  } catch {
    return url;
  }
}

function validate(url) {
  const errs = [];
  if (!url.startsWith('https://')) errs.push('not HTTPS');
  if (!url.startsWith(BASE_URL)) errs.push(`wrong host (expected ${BASE_URL})`);
  if (url !== BASE_URL && url.endsWith('/')) errs.push('trailing slash');
  if (url.includes('?')) errs.push('contains query string');
  if (url.includes('#')) errs.push('contains fragment');

  const p = pathOf(url);
  if (NON_INDEXABLE_PATHS.has(p)) errs.push(`non-indexable route (${p})`);
  for (const re of NON_INDEXABLE_PATTERNS) {
    if (re.test(p)) errs.push(`matches non-indexable pattern: ${re}`);
  }
  return errs;
}

function main() {
  console.log('🔍 Sitemap indexability & duplicate validation');
  console.log(`   File: ${SITEMAP_PATH}\n`);

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`❌ Sitemap not found at ${SITEMAP_PATH}`);
    process.exit(1);
  }

  const xml = readFileSync(SITEMAP_PATH, 'utf-8');
  const urls = extractUrls(xml);

  if (urls.length === 0) {
    console.error('❌ No <loc> entries found in sitemap');
    process.exit(1);
  }

  console.log(`📊 Found ${urls.length} URLs\n`);

  // Duplicates
  const counts = new Map();
  for (const u of urls) counts.set(u, (counts.get(u) || 0) + 1);
  const duplicates = [...counts.entries()].filter(([, c]) => c > 1);

  // Per-URL validation
  const invalid = [];
  for (const u of urls) {
    const errs = validate(u);
    if (errs.length) invalid.push({ url: u, errs });
  }

  let failed = false;

  if (duplicates.length) {
    failed = true;
    console.log(`❌ Duplicate URLs: ${duplicates.length}`);
    for (const [u, c] of duplicates) console.log(`   ${u} (${c}x)`);
    console.log();
  } else {
    console.log('✅ No duplicate URLs');
  }

  if (invalid.length) {
    failed = true;
    console.log(`\n❌ Non-indexable / invalid URLs: ${invalid.length}`);
    for (const { url, errs } of invalid) {
      console.log(`   ${url}`);
      for (const e of errs) console.log(`     └─ ${e}`);
    }
  } else {
    console.log('✅ All URLs pass indexability & canonical policy');
  }

  console.log('\n' + '='.repeat(60));
  if (failed) {
    console.error('❌ Sitemap validation FAILED');
    process.exit(1);
  }
  console.log(`✅ Sitemap OK — ${urls.length} unique indexable URLs`);
}

main();