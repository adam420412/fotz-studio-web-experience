/**
 * SEO Canonical vs Sitemap Audit Script
 * 
 * Ten skrypt porównuje URL-e w sitemap.xml z canonical URL-ami generowanymi przez SEOHead.
 * Identyfikuje problemy "Non-canonical page in sitemap".
 * 
 * Uruchomienie: node scripts/seo-canonical-sitemap-audit.mjs
 */

import fs from 'fs';
import path from 'path';

const SITEMAP_PATH = 'public/sitemap.xml';
const DOMAIN = 'https://fotz.pl';

// Funkcja do ekstrakcji URL-i z sitemap.xml
function extractSitemapUrls() {
  const content = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }
  
  return urls;
}

// Funkcja do normalizacji URL (jak w SEOHead.tsx)
function normalizeUrl(url) {
  // Usuń trailing slash (oprócz strony głównej)
  let normalized = url.replace(/\/$/, '');
  
  // Usuń parametry query
  normalized = normalized.split('?')[0];
  
  // Usuń fragment hash
  normalized = normalized.split('#')[0];
  
  return normalized;
}

// Funkcja do walidacji URL-a
function validateUrl(url) {
  const issues = [];
  
  // Sprawdź trailing slash
  if (url !== DOMAIN && url.endsWith('/')) {
    issues.push('trailing-slash');
  }
  
  // Sprawdź parametry query
  if (url.includes('?')) {
    issues.push('query-params');
  }
  
  // Sprawdź fragment hash
  if (url.includes('#')) {
    issues.push('fragment-hash');
  }
  
  // Sprawdź /page/ pattern
  if (url.includes('/page/')) {
    issues.push('pagination');
  }
  
  // Sprawdź /index.php
  if (url.includes('/index.php')) {
    issues.push('index-php');
  }
  
  // Sprawdź /amp/
  if (url.includes('/amp/') || url.includes('/amp')) {
    issues.push('amp-variant');
  }
  
  return issues;
}

// Główna funkcja audytu
function runAudit() {
  console.log('='.repeat(70));
  console.log('🔍 SEO CANONICAL vs SITEMAP AUDIT');
  console.log('='.repeat(70));
  console.log();
  
  const sitemapUrls = extractSitemapUrls();
  console.log(`📋 Znaleziono ${sitemapUrls.length} URL-i w sitemap.xml`);
  console.log();
  
  const issues = {
    trailingSlash: [],
    queryParams: [],
    fragmentHash: [],
    pagination: [],
    indexPhp: [],
    ampVariant: [],
    nonCanonical: []
  };
  
  let validCount = 0;
  
  for (const url of sitemapUrls) {
    const urlIssues = validateUrl(url);
    const normalizedUrl = normalizeUrl(url);
    
    if (urlIssues.length > 0) {
      if (urlIssues.includes('trailing-slash')) {
        issues.trailingSlash.push({ url, canonical: normalizedUrl });
      }
      if (urlIssues.includes('query-params')) {
        issues.queryParams.push({ url, canonical: normalizedUrl });
      }
      if (urlIssues.includes('fragment-hash')) {
        issues.fragmentHash.push({ url, canonical: normalizedUrl });
      }
      if (urlIssues.includes('pagination')) {
        issues.pagination.push({ url, canonical: normalizedUrl });
      }
      if (urlIssues.includes('index-php')) {
        issues.indexPhp.push({ url, canonical: normalizedUrl });
      }
      if (urlIssues.includes('amp-variant')) {
        issues.ampVariant.push({ url, canonical: normalizedUrl });
      }
      
      // Jeśli URL w sitemap różni się od canonical
      if (url !== normalizedUrl) {
        issues.nonCanonical.push({ sitemap: url, canonical: normalizedUrl });
      }
    } else {
      validCount++;
    }
  }
  
  // Raport
  console.log('📊 WYNIKI AUDYTU:');
  console.log('-'.repeat(70));
  console.log();
  
  console.log(`✅ Prawidłowe URL-e: ${validCount}/${sitemapUrls.length}`);
  console.log();
  
  if (issues.nonCanonical.length > 0) {
    console.log(`❌ NON-CANONICAL W SITEMAP: ${issues.nonCanonical.length}`);
    issues.nonCanonical.forEach(item => {
      console.log(`   Sitemap:   ${item.sitemap}`);
      console.log(`   Canonical: ${item.canonical}`);
      console.log();
    });
  }
  
  if (issues.trailingSlash.length > 0) {
    console.log(`⚠️  Trailing slash: ${issues.trailingSlash.length}`);
    issues.trailingSlash.slice(0, 5).forEach(item => {
      console.log(`   ${item.url}`);
    });
    if (issues.trailingSlash.length > 5) {
      console.log(`   ... i ${issues.trailingSlash.length - 5} więcej`);
    }
    console.log();
  }
  
  if (issues.queryParams.length > 0) {
    console.log(`⚠️  Query params: ${issues.queryParams.length}`);
    issues.queryParams.forEach(item => {
      console.log(`   ${item.url}`);
    });
    console.log();
  }
  
  // Podsumowanie
  console.log('='.repeat(70));
  console.log('📈 PODSUMOWANIE:');
  console.log('-'.repeat(70));
  
  const totalIssues = issues.nonCanonical.length;
  
  if (totalIssues === 0) {
    console.log('✅ Sitemap jest w pełni zsynchronizowana z canonical URL-ami!');
    console.log('   Google powinien poprawnie indeksować wszystkie strony.');
  } else {
    console.log(`❌ Znaleziono ${totalIssues} URL-i niekanonicznych w sitemap.`);
    console.log('   Te URL-e mogą być ignorowane przez Google.');
    console.log();
    console.log('🔧 ZALECANE AKCJE:');
    console.log('   1. Usuń trailing slash z URL-i w sitemap.xml');
    console.log('   2. Usuń URL-e z parametrami query');
    console.log('   3. Upewnij się, że canonical wskazuje na URL z sitemap');
  }
  
  console.log('='.repeat(70));
  
  // Zapisz raport do pliku
  const report = {
    timestamp: new Date().toISOString(),
    totalUrls: sitemapUrls.length,
    validUrls: validCount,
    issues: {
      nonCanonical: issues.nonCanonical.length,
      trailingSlash: issues.trailingSlash.length,
      queryParams: issues.queryParams.length,
      pagination: issues.pagination.length
    },
    details: issues
  };
  
  fs.writeFileSync(
    'scripts/canonical-sitemap-report.json',
    JSON.stringify(report, null, 2)
  );
  
  console.log();
  console.log('📁 Szczegółowy raport zapisano do: scripts/canonical-sitemap-report.json');
}

// Uruchom audyt
runAudit();
