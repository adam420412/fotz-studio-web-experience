#!/usr/bin/env node
/**
 * Canonical vs Sitemap Validation Script
 * 
 * This script validates that:
 * 1. All sitemap URLs are in correct format (no trailing slash, no whitespace)
 * 2. All URLs would have matching canonical tags
 * 3. No duplicate URLs exist
 * 4. No parameter URLs are included
 * 
 * Usage: node scripts/validate-canonical-sitemap.mjs
 */

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SITEMAP_PATH = join(__dirname, '../public/sitemap.xml');
const BASE_URL = 'https://fotz.pl';

// URL Policy
const URL_POLICY = {
  protocol: 'https',
  host: 'fotz.pl',
  trailingSlash: false, // NO trailing slash
  allowedPatterns: [
    /^https:\/\/fotz\.pl$/,
    /^https:\/\/fotz\.pl\/[a-z0-9\-\/]+$/
  ],
  forbiddenPatterns: [
    /\?/, // No query params
    /\/$/, // No trailing slash (except homepage)
    /\/page\//, // No pagination
    /\/tag\//, // No tags
    /\/author\//, // No author pages
    /\/filter\//, // No filters
    /\/search\//, // No search results
    /\/amp\//, // No AMP pages
    /index\.php/, // No index.php
    /index\.html/, // No index.html
  ]
};

function extractUrls(sitemapContent) {
  const urls = [];
  const locRegex = /<loc>\s*(.*?)\s*<\/loc>/gs;
  let match;
  
  while ((match = locRegex.exec(sitemapContent)) !== null) {
    // Clean up any whitespace/newlines in the URL
    const cleanUrl = match[1].replace(/\s+/g, '').trim();
    urls.push({
      original: match[1].trim(),
      cleaned: cleanUrl,
      hasWhitespace: match[1] !== cleanUrl
    });
  }
  
  return urls;
}

function validateUrl(urlObj) {
  const errors = [];
  const url = urlObj.cleaned;
  
  // Check for whitespace in original
  if (urlObj.hasWhitespace) {
    errors.push(`Contains whitespace/newlines in sitemap`);
  }
  
  // Check protocol
  if (!url.startsWith('https://')) {
    errors.push(`Not HTTPS`);
  }
  
  // Check host
  if (!url.startsWith(BASE_URL)) {
    errors.push(`Wrong host (should be ${BASE_URL})`);
  }
  
  // Check trailing slash (except homepage)
  if (url !== BASE_URL && url.endsWith('/')) {
    errors.push(`Has trailing slash (violates policy)`);
  }
  
  // Check forbidden patterns
  for (const pattern of URL_POLICY.forbiddenPatterns) {
    if (url !== BASE_URL && pattern.test(url)) {
      errors.push(`Matches forbidden pattern: ${pattern}`);
    }
  }
  
  // Generate expected canonical
  const expectedCanonical = url.replace(/\/+$/, '');
  
  return {
    url,
    original: urlObj.original,
    expectedCanonical,
    isCanonical: url === expectedCanonical,
    errors
  };
}

function main() {
  console.log('🔍 Validating Sitemap Canonical Consistency\n');
  console.log('URL Policy:');
  console.log('  - Protocol: HTTPS');
  console.log('  - Host: fotz.pl (no www)');
  console.log('  - Trailing slash: NO');
  console.log('  - Parameters: NOT ALLOWED\n');
  
  let sitemapContent;
  try {
    sitemapContent = readFileSync(SITEMAP_PATH, 'utf-8');
  } catch (error) {
    console.error(`❌ Cannot read sitemap: ${error.message}`);
    process.exit(1);
  }
  
  const urls = extractUrls(sitemapContent);
  console.log(`📊 Found ${urls.length} URLs in sitemap\n`);
  
  const results = urls.map(validateUrl);
  
  // Group results
  const valid = results.filter(r => r.errors.length === 0);
  const invalid = results.filter(r => r.errors.length > 0);
  const withWhitespace = urls.filter(u => u.hasWhitespace);
  const nonCanonical = results.filter(r => !r.isCanonical);
  
  // Check for duplicates
  const urlCounts = {};
  for (const result of results) {
    urlCounts[result.url] = (urlCounts[result.url] || 0) + 1;
  }
  const duplicates = Object.entries(urlCounts).filter(([_, count]) => count > 1);
  
  // Report
  console.log('📋 VALIDATION RESULTS\n');
  console.log('=' .repeat(60));
  
  console.log(`\n✅ Valid URLs: ${valid.length}`);
  console.log(`❌ Invalid URLs: ${invalid.length}`);
  console.log(`⚠️  URLs with whitespace in <loc>: ${withWhitespace.length}`);
  console.log(`🔗 Non-canonical URLs: ${nonCanonical.length}`);
  console.log(`📑 Duplicate URLs: ${duplicates.length}`);
  
  if (invalid.length > 0) {
    console.log('\n❌ INVALID URLs:');
    console.log('-'.repeat(60));
    for (const result of invalid) {
      console.log(`\n  URL: ${result.url}`);
      for (const error of result.errors) {
        console.log(`    ⚠️  ${error}`);
      }
    }
  }
  
  if (withWhitespace.length > 0) {
    console.log('\n⚠️  URLs WITH WHITESPACE IN <loc>:');
    console.log('-'.repeat(60));
    for (const url of withWhitespace.slice(0, 10)) {
      console.log(`  Original: "${url.original.substring(0, 50)}..."`);
      console.log(`  Cleaned:  "${url.cleaned}"`);
    }
    if (withWhitespace.length > 10) {
      console.log(`  ... and ${withWhitespace.length - 10} more`);
    }
  }
  
  if (duplicates.length > 0) {
    console.log('\n📑 DUPLICATE URLs:');
    console.log('-'.repeat(60));
    for (const [url, count] of duplicates) {
      console.log(`  ${url} (${count}x)`);
    }
  }
  
  // Sample validation (first 20)
  console.log('\n📝 SAMPLE VALIDATION (first 20 URLs):');
  console.log('-'.repeat(60));
  for (const result of results.slice(0, 20)) {
    const status = result.errors.length === 0 ? '✅' : '❌';
    console.log(`${status} ${result.url}`);
    if (result.errors.length > 0) {
      for (const error of result.errors) {
        console.log(`     └─ ${error}`);
      }
    }
  }
  
  // Final status
  console.log('\n' + '='.repeat(60));
  if (invalid.length === 0 && duplicates.length === 0) {
    console.log('✅ SITEMAP IS VALID - All URLs are canonical');
    console.log('\n🎯 Next steps:');
    console.log('   1. Deploy changes');
    console.log('   2. Resubmit sitemap in Google Search Console');
    console.log('   3. Request re-indexing of key pages');
    console.log('   4. Monitor "Coverage" report for improvements');
  } else {
    console.log('❌ SITEMAP HAS ISSUES - Fix before deploying');
    process.exit(1);
  }
  
  // Server configuration recommendations
  console.log('\n📦 SERVER CONFIGURATION:');
  console.log('-'.repeat(60));
  console.log(`
# NGINX
server {
    # Force HTTPS
    if ($scheme != "https") {
        return 301 https://$host$request_uri;
    }
    
    # Force non-www
    if ($host ~* ^www\\.(.*)$) {
        return 301 https://$1$request_uri;
    }
    
    # Remove trailing slash (except root)
    rewrite ^(.+)/$ $1 permanent;
}

# APACHE (.htaccess)
RewriteEngine On

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Force non-www
RewriteCond %{HTTP_HOST} ^www\\.(.*)$ [NC]
RewriteRule ^ https://%1%{REQUEST_URI} [L,R=301]

# Remove trailing slash
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} (.+)/$
RewriteRule ^ %1 [L,R=301]

# CLOUDFLARE Page Rules
# Rule 1: Redirect www to non-www
# URL: www.fotz.pl/*
# Setting: Forwarding URL (301) -> https://fotz.pl/$1

# Rule 2: Remove trailing slash  
# URL: fotz.pl/*/ 
# Setting: Forwarding URL (301) -> https://fotz.pl/$1
`);
}

main();
