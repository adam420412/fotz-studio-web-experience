#!/usr/bin/env node
/**
 * SEO Smoke Test - Trailing Slash Redirect Verification
 * 
 * Sprawdza czy URL-e z trailing slashem są przekierowywane 301/308
 * na wersję bez slasha (zgodnie z polityką URL).
 * 
 * Uruchomienie: node scripts/seo-smoke-test.mjs
 * Wymaga: Node.js 18+ (native fetch)
 */

const BASE_URL = process.env.TEST_URL || 'https://fotz.pl';

// URL-e do testowania (z trailing slashem - powinny być 301)
const TRAILING_SLASH_URLS = [
  '/uslugi/',
  '/blog/',
  '/realizacje/',
  '/kontakt/',
  '/o-nas/',
  '/realizacje/enea-stadion/',
  '/blog/ile-kosztuje-strona-internetowa/',
  '/dla-kogo/branza-medyczna/',
  '/strony-internetowe-poznan/',
  '/agencja-marketingowa-poznan/'
];

// URL-e kanoniczne (bez slasha - powinny być 200)
const CANONICAL_URLS = [
  '/uslugi',
  '/blog',
  '/realizacje',
  '/kontakt',
  '/o-nas',
  '/realizacje/enea-stadion',
  '/blog/ile-kosztuje-strona-internetowa',
  '/dla-kogo/branza-medyczna',
  '/strony-internetowe-poznan',
  '/agencja-marketingowa-poznan'
];

async function testRedirect(url) {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await fetch(fullUrl, { 
      redirect: 'manual',
      headers: { 'User-Agent': 'FotzSEOTest/1.0' }
    });
    
    const location = response.headers.get('location');
    const status = response.status;
    
    return { url: fullUrl, status, location, ok: [301, 308].includes(status) };
  } catch (error) {
    return { url: `${BASE_URL}${url}`, status: 'ERROR', location: null, ok: false, error: error.message };
  }
}

async function testCanonical(url) {
  try {
    const fullUrl = `${BASE_URL}${url}`;
    const response = await fetch(fullUrl, {
      headers: { 'User-Agent': 'FotzSEOTest/1.0' }
    });
    
    const html = await response.text();
    const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
    const canonical = canonicalMatch?.[1] || null;
    
    // Canonical powinien być równy URL (bez trailing slasha)
    const expectedCanonical = `https://fotz.pl${url}`;
    const canonicalOk = canonical === expectedCanonical;
    
    return { 
      url: fullUrl, 
      status: response.status, 
      canonical, 
      expectedCanonical,
      ok: response.status === 200 && canonicalOk 
    };
  } catch (error) {
    return { url: `${BASE_URL}${url}`, status: 'ERROR', canonical: null, ok: false, error: error.message };
  }
}

async function runTests() {
  console.log('🔍 SEO Smoke Test - Fotz.pl');
  console.log('=' .repeat(60));
  console.log(`Base URL: ${BASE_URL}`);
  console.log('');
  
  let allPassed = true;
  
  // Test 1: Trailing slash redirects
  console.log('📌 TEST 1: Trailing Slash → 301 Redirect');
  console.log('-'.repeat(60));
  
  for (const url of TRAILING_SLASH_URLS) {
    const result = await testRedirect(url);
    const icon = result.ok ? '✅' : '❌';
    console.log(`${icon} ${result.url}`);
    console.log(`   Status: ${result.status} | Location: ${result.location || 'N/A'}`);
    
    if (!result.ok) {
      allPassed = false;
      if (result.status === 200) {
        console.log(`   ⚠️  PROBLEM: Serwer zwraca 200 zamiast 301. Trailing slash nie jest przekierowywany!`);
      }
    }
  }
  
  console.log('');
  
  // Test 2: Canonical URLs
  console.log('📌 TEST 2: Canonical URL Verification');
  console.log('-'.repeat(60));
  
  for (const url of CANONICAL_URLS) {
    const result = await testCanonical(url);
    const icon = result.ok ? '✅' : '❌';
    console.log(`${icon} ${result.url}`);
    console.log(`   Status: ${result.status} | Canonical: ${result.canonical || 'N/A'}`);
    
    if (!result.ok) {
      allPassed = false;
      if (result.canonical !== result.expectedCanonical) {
        console.log(`   ⚠️  MISMATCH: Expected canonical: ${result.expectedCanonical}`);
      }
    }
  }
  
  console.log('');
  console.log('='.repeat(60));
  
  if (allPassed) {
    console.log('✅ ALL TESTS PASSED - SEO configuration is correct!');
    process.exit(0);
  } else {
    console.log('❌ SOME TESTS FAILED - Review issues above');
    process.exit(1);
  }
}

// Sprawdź czy mamy dostęp do fetch (Node 18+)
if (typeof fetch === 'undefined') {
  console.error('❌ This script requires Node.js 18+ with native fetch support');
  console.error('   Or run: node --experimental-fetch scripts/seo-smoke-test.mjs');
  process.exit(1);
}

runTests().catch(error => {
  console.error('❌ Test execution failed:', error);
  process.exit(1);
});
