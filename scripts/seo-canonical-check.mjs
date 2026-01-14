#!/usr/bin/env node
/**
 * SEO Canonical Consistency Check
 * 
 * Weryfikuje że każdy URL z sitemap.xml:
 * 1. Zwraca status 200
 * 2. Ma canonical równy samemu sobie
 * 3. Nie ma trailing slasha
 * 
 * Uruchomienie: node scripts/seo-canonical-check.mjs
 * Wymaga: Node.js 18+ (native fetch)
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

const SITEMAP_PATH = resolve(process.cwd(), 'public/sitemap.xml');

function extractUrlsFromSitemap(xmlContent) {
  const urls = [];
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let match;
  
  while ((match = locRegex.exec(xmlContent)) !== null) {
    // Usuń whitespace z URL-a (na wszelki wypadek)
    const url = match[1].trim().replace(/\s+/g, '');
    urls.push(url);
  }
  
  return urls;
}

async function checkUrl(url) {
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'FotzSEOValidator/1.0' }
    });
    
    const html = await response.text();
    
    // Extract canonical
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const canonical = canonicalMatch?.[1]?.trim() || null;
    
    // Sprawdź trailing slash
    const hasTrailingSlash = url.endsWith('/') && url !== 'https://fotz.pl/';
    
    // Canonical powinien być równy URL
    const canonicalMatches = canonical === url;
    
    const issues = [];
    
    if (response.status !== 200) {
      issues.push(`Status ${response.status} (expected 200)`);
    }
    
    if (hasTrailingSlash) {
      issues.push('URL has trailing slash (policy: no trailing slash)');
    }
    
    if (!canonical) {
      issues.push('Missing canonical tag');
    } else if (!canonicalMatches) {
      issues.push(`Canonical mismatch: "${canonical}" !== "${url}"`);
    }
    
    return {
      url,
      status: response.status,
      canonical,
      issues,
      ok: issues.length === 0
    };
  } catch (error) {
    return {
      url,
      status: 'ERROR',
      canonical: null,
      issues: [`Fetch error: ${error.message}`],
      ok: false
    };
  }
}

async function runCheck() {
  console.log('🔍 SEO Canonical Consistency Check');
  console.log('=' .repeat(70));
  
  // Wczytaj sitemap
  let sitemapContent;
  try {
    sitemapContent = readFileSync(SITEMAP_PATH, 'utf-8');
    console.log(`✅ Loaded sitemap from: ${SITEMAP_PATH}`);
  } catch (error) {
    console.error(`❌ Cannot read sitemap: ${error.message}`);
    process.exit(1);
  }
  
  const urls = extractUrlsFromSitemap(sitemapContent);
  console.log(`📊 Found ${urls.length} URLs in sitemap`);
  console.log('');
  
  // Sprawdź whitespace w sitemap
  const whitespaceIssues = [];
  const locMatches = sitemapContent.matchAll(/<loc>([^<]+)<\/loc>/g);
  for (const match of locMatches) {
    const rawUrl = match[1];
    if (rawUrl !== rawUrl.trim() || /\s/.test(rawUrl)) {
      whitespaceIssues.push(rawUrl);
    }
  }
  
  if (whitespaceIssues.length > 0) {
    console.log('⚠️  SITEMAP WHITESPACE ISSUES:');
    whitespaceIssues.forEach(u => console.log(`   - "${u}"`));
    console.log('');
  }
  
  // Sprawdź trailing slash w sitemap
  const trailingSlashUrls = urls.filter(u => u.endsWith('/') && u !== 'https://fotz.pl/');
  if (trailingSlashUrls.length > 0) {
    console.log('⚠️  SITEMAP TRAILING SLASH ISSUES:');
    trailingSlashUrls.slice(0, 10).forEach(u => console.log(`   - ${u}`));
    if (trailingSlashUrls.length > 10) {
      console.log(`   ... and ${trailingSlashUrls.length - 10} more`);
    }
    console.log('');
  }
  
  // Live check (opcjonalnie - tylko jeśli podano --live)
  const isLiveCheck = process.argv.includes('--live');
  
  if (!isLiveCheck) {
    console.log('💡 Sitemap static analysis complete.');
    console.log('   Run with --live flag to check live URLs: node scripts/seo-canonical-check.mjs --live');
    console.log('');
    
    const hasIssues = whitespaceIssues.length > 0 || trailingSlashUrls.length > 0;
    
    if (hasIssues) {
      console.log('❌ SITEMAP HAS ISSUES - Fix before deployment');
      process.exit(1);
    } else {
      console.log('✅ SITEMAP STATIC CHECK PASSED');
      process.exit(0);
    }
  }
  
  // Live check
  console.log('🌐 Running live URL checks...');
  console.log('-'.repeat(70));
  
  const results = [];
  const batchSize = 5; // Concurrent requests
  
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(checkUrl));
    results.push(...batchResults);
    
    // Progress
    process.stdout.write(`\r   Checked ${Math.min(i + batchSize, urls.length)}/${urls.length} URLs`);
  }
  
  console.log('\n');
  
  // Podsumowanie
  const passed = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  
  if (failed.length > 0) {
    console.log('❌ FAILED URLs:');
    console.log('-'.repeat(70));
    
    failed.forEach(r => {
      console.log(`\n❌ ${r.url}`);
      r.issues.forEach(issue => console.log(`   - ${issue}`));
    });
    
    console.log('');
  }
  
  console.log('='.repeat(70));
  console.log(`📊 Results: ${passed.length}/${urls.length} passed (${failed.length} failed)`);
  
  if (failed.length === 0) {
    console.log('✅ ALL CANONICAL CHECKS PASSED');
    process.exit(0);
  } else {
    console.log('❌ CANONICAL ISSUES DETECTED - Fix before submitting to GSC');
    process.exit(1);
  }
}

// Check Node version
if (typeof fetch === 'undefined') {
  console.error('❌ This script requires Node.js 18+ with native fetch support');
  process.exit(1);
}

runCheck().catch(error => {
  console.error('❌ Check execution failed:', error);
  process.exit(1);
});
