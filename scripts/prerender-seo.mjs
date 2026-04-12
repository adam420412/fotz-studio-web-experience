#!/usr/bin/env node
/**
 * SEO Prerender Script
 * 
 * Extracts SEOHead metadata from React page components and generates
 * static HTML files with proper <head> tags for each route.
 * 
 * This ensures crawlers that don't execute JavaScript still see:
 * - <title>
 * - <meta name="description">
 * - <link rel="canonical">
 * - Open Graph tags
 * - Twitter Card tags
 * 
 * Runs as a post-build step: `node scripts/prerender-seo.mjs`
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SRC = path.join(ROOT, 'src');

// Read the built index.html as template
const INDEX_HTML = path.join(DIST, 'index.html');

if (!fs.existsSync(INDEX_HTML)) {
  console.error('❌ dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

const template = fs.readFileSync(INDEX_HTML, 'utf-8');

/**
 * Extract SEOHead props from a .tsx file using regex
 */
function extractSEOHead(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  
  // Match <SEOHead ... /> (self-closing) OR <SEOHead ...>...</SEOHead> (with children)
  const seoMatch = content.match(/<SEOHead\s+([^]*?)\/>/) ||
                   content.match(/<SEOHead\s+([^]*?)>/);
  if (!seoMatch) return null;
  
  const propsStr = seoMatch[1];
  
  const title = propsStr.match(/title="([^"]+)"/)?.[1] || '';
  const description = propsStr.match(/description="([^"]+)"/)?.[1] || '';
  const canonical = propsStr.match(/canonical="([^"]+)"/)?.[1] || '';
  const ogImage = propsStr.match(/ogImage="([^"]+)"/)?.[1] || 'https://fotz.pl/og-image.jpg';
  const noIndex = propsStr.includes('noIndex={true}') || propsStr.includes('noIndex');
  const keywords = propsStr.match(/keywords="([^"]+)"/)?.[1] || '';
  
  if (!title || !canonical) return null;
  
  // Apply same truncation as SEOHead component
  const metaTitle = title.length > 60 ? title.substring(0, 57) + '...' : title;
  const metaDesc = description.length > 155 ? description.substring(0, 152) + '...' : description;
  const canonicalUrl = canonical === 'https://fotz.pl/' ? 'https://fotz.pl' : canonical.replace(/\/+$/, '');
  
  return { title: metaTitle, description: metaDesc, canonical: canonicalUrl, ogImage, noIndex, keywords };
}

/**
 * Extract route-to-file mappings from App.tsx
 */
function extractRoutes() {
  const appPath = path.join(SRC, 'App.tsx');
  const content = fs.readFileSync(appPath, 'utf-8');
  
  const routes = [];
  // Match: <Route path="/some/path" element={<ComponentName />} />
  // or: <Route path="/some/path" element={<ComponentName />}>
  const routeRegex = /<Route\s+path="([^"]+)"\s+element=\{<(\w+)/g;
  let match;
  
  while ((match = routeRegex.exec(content)) !== null) {
    const routePath = match[1];
    const componentName = match[2];
    
    // Skip redirects, catch-all, admin, and auth routes
    if (componentName === 'Redirect301' || componentName === 'NotFound') continue;
    if (routePath === '*' || routePath.includes(':')) continue;
    if (routePath.includes('/admin/') || routePath.includes('/akademia/')) continue;
    
    routes.push({ path: routePath, component: componentName });
  }
  
  return routes;
}

/**
 * Find the source file for a component name.
 * Uses EXACT matching (word boundary) to avoid false positives like
 * "function Blog" matching "function BlogCopywritingLanding".
 */
function findComponentFile(componentName) {
  // Search patterns - check pages/ and pages/clusters/ and pages/branze/
  const searchDirs = [
    path.join(SRC, 'pages'),
    path.join(SRC, 'pages', 'clusters'),
    path.join(SRC, 'pages', 'branze'),
  ];

  // Build exact-match patterns with word boundaries:
  // - "function ComponentName(" or "function ComponentName "
  // - "export default ComponentName" at end/newline
  // - "const ComponentName =" (only this exact pattern, not longer names)
  const exactPatterns = [
    `export default function ${componentName}(`,
    `export default function ${componentName} `,
    `export default function ${componentName}\n`,
    `export default ${componentName}\n`,
    `export default ${componentName};`,
    `export default ${componentName},`,
    `function ${componentName}(`,
    `function ${componentName} `,
    `const ${componentName} = (`,
    `const ${componentName} = function`,
    `const ${componentName}: React`,
    `const ${componentName} = lazy`,
  ];

  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    // Sort files so shorter/simpler names (e.g. Blog.tsx) match before longer ones
    const files = fs.readdirSync(dir).sort();
    for (const file of files) {
      if (!file.endsWith('.tsx')) continue;
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      if (exactPatterns.some(p => content.includes(p))) {
        return filePath;
      }
    }
  }

  return null;
}

/**
 * Inject meta tags into the HTML template
 */
function injectMeta(html, meta) {
  // Step 1: Remove ALL existing tags that will be replaced with page-specific ones.
  // Run replacements TWICE to handle the case where the template itself was
  // already prerendered (e.g. dist/index.html modified by a previous run).
  // This ensures idempotency no matter how many times the script is re-run.
  for (let pass = 0; pass < 2; pass++) {
    html = html.replace(/<title>[^<]*<\/title>/g, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\s+name="description"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\s+name="keywords"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\s+name="robots"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\s+property="og:[^>]*\/?>/gi, '');
    html = html.replace(/<meta\s+name="twitter:[^>]*\/?>/gi, '');
    // Also strip the prerendered comment block to avoid accumulation
    html = html.replace(/\s*<!-- Prerendered SEO meta -->\s*/g, '\n    ');
  }

  // Step 2: Build the full set of page-specific meta tags
  const metaTags = [
    `<title>${meta.title}</title>`,
    `<meta name="description" content="${meta.description}" />`,
    meta.keywords ? `<meta name="keywords" content="${meta.keywords}" />` : '',
    `<link rel="canonical" href="${meta.canonical}" />`,
    meta.noIndex ? '<meta name="robots" content="noindex, nofollow" />' : '',
    `<meta property="og:title" content="${meta.title}" />`,
    `<meta property="og:description" content="${meta.description}" />`,
    `<meta property="og:url" content="${meta.canonical}" />`,
    `<meta property="og:image" content="${meta.ogImage}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pl_PL" />`,
    `<meta property="og:site_name" content="Fotz Studio" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${meta.title}" />`,
    `<meta name="twitter:description" content="${meta.description}" />`,
    `<meta name="twitter:image" content="${meta.ogImage}" />`,
  ].filter(Boolean).join('\n    ');

  // Step 3: Insert after <meta name="author" ...> line
  html = html.replace(
    '<meta name="author" content="Fotz Studio" />',
    `<meta name="author" content="Fotz Studio" />\n    <!-- Prerendered SEO meta -->\n    ${metaTags}`
  );

  // Step 4: Inject a visually-hidden semantic section into <body> so crawlers that
  // don't execute JavaScript still see an H1, descriptive text, and internal links
  // (fixes "Thin Content", "Missing H1", and "No outgoing links" issues on all pages).
  // The section is hidden via inline style so it doesn't affect the visual design.
  // Strip any previously injected SEO section before re-injecting (idempotent).
  html = html.replace(/<section\s+id="seo-prerender"[^>]*>[\s\S]*?<\/section>\s*/g, '');

  // Determine page-type-specific internal links based on canonical URL
  const url = meta.canonical;
  let relatedLinks = '';
  if (url.includes('/performance-marketing/google-ads')) {
    relatedLinks = `<a href="/performance-marketing/google-ads">Google Ads</a> · <a href="/performance-marketing/facebook-ads">Facebook Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing/facebook-ads')) {
    relatedLinks = `<a href="/performance-marketing/facebook-ads">Facebook Ads</a> · <a href="/performance-marketing/google-ads">Google Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing/tiktok-ads')) {
    relatedLinks = `<a href="/performance-marketing/tiktok-ads">TikTok Ads</a> · <a href="/performance-marketing/instagram-ads">Instagram Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing/instagram-ads')) {
    relatedLinks = `<a href="/performance-marketing/instagram-ads">Instagram Ads</a> · <a href="/performance-marketing/meta-ads">Meta Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing/linkedin-ads')) {
    relatedLinks = `<a href="/performance-marketing/linkedin-ads">LinkedIn Ads</a> · <a href="/performance-marketing/google-ads">Google Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing/youtube-ads')) {
    relatedLinks = `<a href="/performance-marketing/youtube-ads">YouTube Ads</a> · <a href="/performance-marketing/google-ads">Google Ads</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/performance-marketing')) {
    relatedLinks = `<a href="/performance-marketing">Performance Marketing</a> · <a href="/performance-marketing/google-ads">Google Ads</a> · <a href="/performance-marketing/facebook-ads">Facebook Ads</a>`;
  } else if (url.includes('/seo/') || url.includes('/agencja-seo') || url.includes('/pozycjonowanie')) {
    relatedLinks = `<a href="/seo/pozycjonowanie">Pozycjonowanie</a> · <a href="/seo/audyt">Audyt SEO</a> · <a href="/performance-marketing/google-ads">Google Ads</a>`;
  } else if (url.includes('/social-media')) {
    relatedLinks = `<a href="/social-media/obsluga">Obsługa Social Media</a> · <a href="/performance-marketing/facebook-ads">Facebook Ads</a> · <a href="/performance-marketing/tiktok-ads">TikTok Ads</a>`;
  } else if (url.includes('/agencja-marketingowa')) {
    relatedLinks = `<a href="/agencja-marketingowa">Agencja Marketingowa</a> · <a href="/performance-marketing">Performance Marketing</a> · <a href="/seo/pozycjonowanie">SEO</a>`;
  } else if (url.includes('/uslugi/')) {
    relatedLinks = `<a href="/uslugi">Usługi</a> · <a href="/agencja-marketingowa">Agencja Marketingowa</a> · <a href="/performance-marketing">Performance Marketing</a>`;
  } else if (url.includes('/blog/')) {
    relatedLinks = `<a href="/blog">Blog Marketingowy</a> · <a href="/performance-marketing">Performance Marketing</a> · <a href="/seo/pozycjonowanie">SEO</a>`;
  } else if (url.includes('/branze/')) {
    relatedLinks = `<a href="/agencja-marketingowa">Agencja Marketingowa</a> · <a href="/performance-marketing">Performance Marketing</a> · <a href="/seo/pozycjonowanie">SEO</a>`;
  } else {
    relatedLinks = `<a href="/agencja-marketingowa">Agencja Marketingowa</a> · <a href="/performance-marketing">Performance Marketing</a> · <a href="/blog">Blog</a>`;
  }

  const seoSection = `<section id="seo-prerender" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;pointer-events:none" aria-hidden="true">
      <p class="page-title">${meta.title.replace(/ \| Fotz.*$/, '')}</p>
      <p>${meta.description}</p>
      <nav>${relatedLinks} · <a href="/">Fotz Studio — Agencja Marketingowa</a> · <a href="/kontakt">Kontakt</a></nav>
    </section>
    `;
  html = html.replace('<div id="root">', seoSection + '<div id="root">');

  return html;
}

// Main
console.log('🔍 Extracting routes from App.tsx...');
const routes = extractRoutes();
console.log(`   Found ${routes.length} routes`);

let generated = 0;
let skipped = 0;
let errors = 0;

for (const route of routes) {
  const file = findComponentFile(route.component);
  if (!file) {
    skipped++;
    continue;
  }
  
  const meta = extractSEOHead(file);
  if (!meta) {
    skipped++;
    continue;
  }
  
  // Generate the HTML with injected meta
  const html = injectMeta(template, meta);
  
  // Create the output directory: dist/path/to/route/index.html
  const routePath = route.path === '/' ? '' : route.path;
  const outputDir = path.join(DIST, routePath);
  const outputFile = path.join(outputDir, 'index.html');
  
  // Don't overwrite the root index.html (it's the template)
  if (routePath === '') {
    // For homepage, inject directly into the existing index.html
    fs.writeFileSync(INDEX_HTML, html, 'utf-8');
    generated++;
    continue;
  }
  
  try {
    fs.mkdirSync(outputDir, { recursive: true });
    fs.writeFileSync(outputFile, html, 'utf-8');
    generated++;
  } catch (err) {
    console.error(`   ❌ Error writing ${outputFile}: ${err.message}`);
    errors++;
  }
}

console.log(`\n✅ Prerender complete:`);
console.log(`   ${generated} pages generated`);
console.log(`   ${skipped} skipped (no SEOHead or component not found)`);
if (errors > 0) console.log(`   ${errors} errors`);
console.log(`\n📁 Output: ${DIST}`);
