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
import { extractMetadata, escapeHtml, readSource, literal } from './lib/seo-metadata.mjs';
import { getBlogMetadata } from '../src/lib/blog-seo.mjs';
import { addRoutePreloads, addHeroPreload } from './lib/route-preloads.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.resolve(process.env.FOTZ_BUILD_DIR || path.join(ROOT, 'dist'));
const SRC = path.join(ROOT, 'src');

// Read the built index.html as template
const INDEX_HTML = path.join(DIST, 'index.html');

if (!fs.existsSync(INDEX_HTML)) {
  console.error('❌ dist/index.html not found. Run `npm run build` first.');
  process.exit(1);
}

const clientHtml = fs.readFileSync(INDEX_HTML, 'utf-8');
const assetManifest = JSON.parse(fs.readFileSync(path.join(DIST, '.vite/manifest.json'), 'utf8'));
const templatePath = path.join(DIST, 'prerender-template.json');
const template = clientHtml.includes('<!-- fotz-body:start -->')
  ? JSON.parse(fs.readFileSync(templatePath, 'utf8')) : clientHtml;
if (!template.includes('<div id="root"></div>')) throw new Error('Expected an empty client root or a marked prerendered body. Rebuild the client first.');
fs.writeFileSync(templatePath, JSON.stringify(template));
const jsonLdPattern = /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi;
const defaultSchemas = [...template.matchAll(jsonLdPattern)].map(match => JSON.parse(match[1]));
process.env.NODE_ENV ||= 'production';
const { renderPage } = await import('../.ssr/entry-server.js');
const publicArticles = JSON.parse(fs.readFileSync(path.join(SRC, 'data/blog-content.json'), 'utf8')).articles;
const bodyReport = { rendered: [], skipped: [], errors: [] };

/**
 * Routes that must NOT be prerendered, because they are served by static
 * files (public/*.html via vercel.json rewrites) rather than React routes.
 * Prerendering them would create stale snapshots in the Lovable render cache
 * (x-lovablehtml-render-cache) that override the real static content and
 * cause 404s on production.
 */
const EXCLUDE_ROUTES = new Set([
  '/mapa-strony',
]);

const LEGACY_REDIRECT_ROUTES = new Set([
  '/branding',
  '/produkcja-video',
  '/social-media-marketing',
]);

/**
 * Extract literal SEOHead props from the TypeScript syntax tree
 */
const extractSEOHead = extractMetadata;

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
const appImports = fs.readFileSync(path.join(SRC, 'App.tsx'), 'utf8');
const componentFiles = new Map([
  ...[...appImports.matchAll(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\("([^"]+)"\)/g)].map(m => [m[1], path.resolve(SRC, m[2] + '.tsx')]),
  ...[...appImports.matchAll(/import\s+(\w+)\s+from\s+"(\.\/pages\/[^"]+)"/g)].map(m => [m[1], path.resolve(SRC, m[2] + '.tsx')]),
]);
function findComponentFile(componentName) {
  const file = componentFiles.get(componentName);
  return file && fs.existsSync(file) ? file : null;
}

/**
 * Inject meta tags into the HTML template
 */
function injectMeta(html, metadata) {
  const meta = Object.fromEntries(Object.entries(metadata).map(([key, value]) => [key, typeof value === 'string' ? escapeHtml(value) : value]));
  // Step 1: Remove ALL existing tags that will be replaced with page-specific ones.
  // Run replacements TWICE to handle the case where the template itself was
  // already prerendered (e.g. dist/index.html modified by a previous run).
  // This ensures idempotency no matter how many times the script is re-run.
  for (let pass = 0; pass < 2; pass++) {
    html = html.replace(/<title\b[^>]*>[^<]*<\/title>/g, '');
    html = html.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="description"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="keywords"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="robots"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bproperty="og:[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="twitter:[^>]*\/?>/gi, '');
    // Also strip the prerendered comment block to avoid accumulation
    html = html.replace(/\s*<!-- Prerendered SEO meta -->\s*/g, '\n    ');
  }

  // Step 2: Build the full set of page-specific meta tags
  // Add data-rh="true" so react-helmet-async replaces these tags instead of duplicating
  const metaTags = [
    `<title data-rh="true">${meta.title}</title>`,
    `<meta data-rh="true" name="description" content="${meta.description}" />`,
    meta.keywords ? `<meta data-rh="true" name="keywords" content="${meta.keywords}" />` : '',
    meta.noIndex ? '' : `<link data-rh="true" rel="canonical" href="${meta.canonical}" />`,
    `<meta data-rh="true" name="robots" content="${meta.noIndex ? 'noindex, nofollow' : 'index, follow'}" />`,
    `<meta data-rh="true" property="og:title" content="${meta.ogTitle || meta.title}" />`,
    `<meta data-rh="true" property="og:description" content="${meta.ogDescription || meta.description}" />`,
    `<meta data-rh="true" property="og:url" content="${meta.canonical}" />`,
    `<meta data-rh="true" property="og:image" content="${meta.ogImage}" />`,
    `<meta data-rh="true" property="og:type" content="${meta.ogType || 'website'}" />`,
    `<meta data-rh="true" property="og:locale" content="pl_PL" />`,
    `<meta data-rh="true" property="og:site_name" content="Fotz Studio" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${meta.ogTitle || meta.title}" />`,
    `<meta data-rh="true" name="twitter:description" content="${meta.ogDescription || meta.description}" />`,
    `<meta data-rh="true" name="twitter:image" content="${meta.ogImage}" />`,
  ].filter(Boolean).join('\n    ');

  // Step 3: Insert after <meta name="author" ...> line
  html = html.replace(
    '<meta name="author" content="Fotz Studio" />',
    `<meta name="author" content="Fotz Studio" />\n    <!-- Prerendered SEO meta -->\n    ${metaTags}`
  );

  // Show a useful fallback only when JavaScript is disabled; do not add
  // hidden duplicate headings and links to the rendered page.
  html = html.replace(/<section\s+id="seo-prerender"[^>]*>[\s\S]*?<\/section>\s*/g, '');
  html = html.replace(/<noscript id="seo-fallback">[\s\S]*?<\/noscript>\s*/g, '');
  const fallback = `<noscript id="seo-fallback"><main style="max-width:70ch;margin:4rem auto;padding:1.5rem"><h1>${meta.title}</h1><p>${meta.description}</p><p>Pełna witryna wymaga JavaScript. Skontaktuj się z nami: <a href="tel:+48790814814">+48 790 814 814</a> · <a href="mailto:adam@fotz.pl">adam@fotz.pl</a>.</p><nav><a href="/">Strona główna</a> · <a href="/uslugi">Usługi</a> · <a href="/kontakt">Kontakt</a></nav></main></noscript>`;
  html = html.replace('<div id="root">', fallback + '<div id="root">');

  return html;
}

// Main
console.log('🔍 Extracting routes from App.tsx...');
const routes = extractRoutes();
const clusterSource = readSource(path.join(SRC, 'data/socialMediaClusters.ts'));
const clusters = literal(clusterSource.scope.get('SOCIAL_MEDIA_CLUSTERS'), clusterSource);
for (const cluster of clusters) {
  if (!routes.some(route => route.path === cluster.path)) {
    routes.push({ path: cluster.path, component: 'SocialMediaClusterHub', meta: {
      title: cluster.metaTitle, description: cluster.metaDescription,
      canonical: `https://www.fotz-studio.pl${cluster.path}`, ogImage: 'https://www.fotz-studio.pl/og-image.jpg', noIndex: false,
    }});
  }
}
// A reviewed public metadata snapshot keeps builds reproducible and offline.
// Refresh with scripts/sync-blog-seo.mjs after CMS publication, then rebuild maps.
const blogSnapshot = JSON.parse(fs.readFileSync(path.join(SRC, 'data/blog-seo.json'), 'utf8'));
for (const article of blogSnapshot.articles) {
  const routePath = `/blog/${article.slug}`;
  if (!routes.some(route => route.path === routePath)) routes.push({ path: routePath, component: 'BlogArticleDynamic', meta: getBlogMetadata(article) });
}
console.log(`   Found ${routes.length} routes`);

let generated = 0;
let skipped = 0;
let errors = 0;

for (const route of routes) {
  if (EXCLUDE_ROUTES.has(route.path)) {
    console.log(`   ⏭️  Excluded from prerender (static file): ${route.path}`);
    skipped++;
    continue;
  }

  const file = findComponentFile(route.component);
  if (!file) {
    console.error(`   Missing component source: ${route.path} (${route.component})`);
    errors++;
    continue;
  }
  
  const meta = route.meta ?? extractSEOHead(file);
  if (!meta) {
    console.warn(`   Missing metadata: ${route.path}`);
    errors++;
    continue;
  }
  
  // Generate the HTML with injected meta
  // The homepage has complete HTML already: fetch its portfolio modules after
  // bootstrap, leaving the first connections for CSS and the hero image.
  let html = addRoutePreloads(injectMeta(template, meta), assetManifest, path.relative(ROOT, file).split(path.sep).join('/'), { preloadModules: route.path !== '/' });
  if (!meta.noIndex) {
    try {
      const rendered = await renderPage(path.relative(path.join(SRC, 'pages'), file), route.path, publicArticles);
      let body = rendered.body;
      html = addHeroPreload(html, body);
      if (!/<h1[\s>]/.test(body)) throw new Error('Missing page H1 in rendered content');
      // Hydration requires the original React markup. Only legacy templates
      // need animation normalization to keep their static document visible.
      if (!rendered.hydrate) {
        body = body.replace(/style="([^"]*)"/g, (tag, style) => /(?:^|;)opacity:0(?:;|$)/.test(style)
          ? `style="${style.replace(/(?:^|;)opacity:0(?=;|$)/, ';opacity:1').replace(/(?:^|;)(?:transform|filter):[^;]*/g, '')}"` : tag);
      }
      html = html.replace(/<noscript id="seo-fallback">[\s\S]*?<\/noscript>\s*/, '');
      const pageSchemas = [...rendered.scripts.matchAll(jsonLdPattern)].map(match => JSON.parse(match[1]));
      const pageTypes = new Set(pageSchemas.map(schema => schema['@type']));
      const schemas = [...defaultSchemas.filter(schema => !pageTypes.has(schema['@type'])), ...pageSchemas];
      const schemaTags = [...new Set(schemas.map(schema => JSON.stringify(schema)))].map(json => `<script data-rh="true" type="application/ld+json">${json.replace(/</g, '\\u003c')}</script>`).join('\n');
      html = html.replace(jsonLdPattern, '').replace('</head>', () => `<!-- fotz-schema:start -->${schemaTags}<!-- fotz-schema:end --></head>`);
      html = html.replace('<div id="root"></div>', () => `<div id="root"${rendered.hydrate ? ` data-hydrate-path="${route.path}"` : ''}><!-- fotz-body:start -->${body}<!-- fotz-body:end --></div>`);
      bodyReport.rendered.push(route.path);
    } catch (error) {
      bodyReport.errors.push({path:route.path, message:error.message});
      console.error(`   Body render failed: ${route.path}: ${error.message}`);
      errors++;
    }
  } else bodyReport.skipped.push(route.path);
  
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

// ===========================================================================
// Generate dist/404.html with proper NotFound markup (served by middleware
// with HTTP 404 status for unknown routes — fixes Ahrefs soft-404 errors).
// ===========================================================================
const notFoundMeta = {
  title: '404 — Strona nie istnieje | Fotz Studio',
  description: 'Przepraszamy, strona której szukasz nie została znaleziona. Wróć na stronę główną Fotz Studio lub skorzystaj z menu.',
  canonical: 'https://www.fotz-studio.pl/',
  ogImage: 'https://www.fotz-studio.pl/og-image.jpg',
  noIndex: true,
};
const notFoundHtml = injectMeta(template, notFoundMeta);
fs.writeFileSync(path.join(DIST, '404.html'), notFoundHtml, 'utf-8');
console.log(`   + dist/404.html generated (served with HTTP 404 by middleware)`);

// ===========================================================================
// Generate dist/known-routes.json — manifest of every static route + every
// prerendered directory. Edge middleware uses this to decide 200 vs 404 for
// unknown paths (catch-all rewrite previously caused soft-404 = 200 + SPA).
// ===========================================================================
// Re-parse App.tsx directly — extractRoutes() above filters out admin/akademia
// and dynamic patterns (it's optimized for prerendering, not route discovery).
// For middleware we need the COMPLETE set of legitimate route shapes.
const appSource = fs.readFileSync(path.join(SRC, 'App.tsx'), 'utf-8');
const allRouteMatches = [...appSource.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);
const uniqueRoutes = [...new Set(allRouteMatches)];

const knownStaticRoutes = uniqueRoutes.filter((p) => !p.includes(':') && !p.includes('*') && !LEGACY_REDIRECT_ROUTES.has(p));

// Dynamic patterns (e.g. /blog/:slug, /akademia/*). Exclude the React Router
// catch-all "*" alone — it would match every path and defeat soft-404.
const dynamicPatterns = uniqueRoutes
  .filter((p) => (p.includes(':') || p.includes('*')) && p !== '*')
  .map((p) => p.replace(/:([a-zA-Z_]+)/g, '[^/]+').replace(/\*/g, '.*'));

function publicFiles(dir, prefix = '') {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const relative = `${prefix}/${entry.name}`;
    return entry.isDirectory() ? publicFiles(path.join(dir, entry.name), relative) : [relative.split('/').map(encodeURIComponent).join('/')];
  });
}

const manifest = {
  staticFiles: publicFiles(path.join(ROOT, 'public')),
  generatedAt: new Date().toISOString(),
  staticRoutes: knownStaticRoutes,
  dynamicPatterns,
};
fs.writeFileSync(
  path.join(DIST, 'known-routes.json'),
  JSON.stringify(manifest),
  'utf-8'
);
console.log(`   + dist/known-routes.json generated (${knownStaticRoutes.length} static + ${dynamicPatterns.length} dynamic)`);

// Also write to repo root so Edge middleware (bundled at deploy time) can
// statically import it. Edge runtime cannot read the filesystem at request time.
fs.writeFileSync(
  path.join(ROOT, 'known-routes.json'),
  JSON.stringify(manifest),
  'utf-8'
);
fs.writeFileSync(path.join(DIST, 'prerender-report.json'), JSON.stringify(bodyReport, null, 2));
console.log(`   ${bodyReport.rendered.length} full page bodies; ${bodyReport.errors.length} body errors`);
if (errors) process.exitCode = 1;
