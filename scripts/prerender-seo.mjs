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
  
  // Match <SEOHead ... /> or <SEOHead ...> (multiline)
  const seoMatch = content.match(/<SEOHead\s+([^]*?)\/>/);
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
 * Find the source file for a component name
 */
function findComponentFile(componentName) {
  // Search patterns - check pages/ and pages/clusters/ and pages/branze/
  const searchDirs = [
    path.join(SRC, 'pages'),
    path.join(SRC, 'pages', 'clusters'),
    path.join(SRC, 'pages', 'branze'),
  ];
  
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (!file.endsWith('.tsx')) continue;
      const filePath = path.join(dir, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Check if this file exports the component (default or named)
      if (
        content.includes(`export default function ${componentName}`) ||
        content.includes(`export default ${componentName}`) ||
        content.includes(`const ${componentName} =`) ||
        content.includes(`function ${componentName}`)
      ) {
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
  // Step 1: Remove existing default tags that will be replaced with page-specific ones.
  // This prevents duplicate canonical/title/description tags in the prerendered output.
  html = html.replace(/<title>[^<]*<\/title>/g, '');
  html = html.replace(/<link\s+rel="canonical"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="description"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="keywords"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="robots"[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+property="og:[^>]*\/?>/gi, '');
  html = html.replace(/<meta\s+name="twitter:[^>]*\/?>/gi, '');

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
  return html.replace(
    '<meta name="author" content="Fotz Studio" />',
    `<meta name="author" content="Fotz Studio" />\n    <!-- Prerendered SEO meta -->\n    ${metaTags}`
  );
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
