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
import { notFoundHtml } from '../src/lib/not-found-html.mjs';
import { injectMeta } from '../src/lib/seo-document.mjs';
import { loadEnv } from 'vite';

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
// Runtime publishing uses the same built assets and renderer as static pages.
fs.writeFileSync(path.join(ROOT, '.ssr/blog-template.html'), template);
const publicEnv = loadEnv('production', ROOT, 'VITE_');
const publicCms = { url: publicEnv.VITE_SUPABASE_URL, key: publicEnv.VITE_SUPABASE_PUBLISHABLE_KEY };
if (!publicCms.url || !publicCms.key) throw new Error('Missing public CMS configuration');
if (!publicCms.key.startsWith('sb_publishable_') && JSON.parse(Buffer.from(publicCms.key.split('.')[1] || '', 'base64url')).role !== 'anon') throw new Error('CMS runtime must use only a public anonymous key');
fs.writeFileSync(path.join(ROOT, '.ssr/public-cms.json'), JSON.stringify(publicCms));
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
      const rendered = await renderPage(path.relative(path.join(SRC, 'pages'), file).split(path.sep).join('/'), route.path, publicArticles);
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
      if (rendered.bootstrap) html = html.replace('</body>', () => `<script id="fotz-blog-data" type="application/json">${rendered.bootstrap}</script></body>`);
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

// Include actual CMS articles and cluster hubs, not their arbitrary route shapes.
// These are the same reviewed URLs rendered above; newly published CMS entries
// join this list when the snapshots, maps and deployment are refreshed.
const knownStaticRoutes = [...new Set([...uniqueRoutes, ...routes.map(route => route.path)])]
  .filter((p) => !p.includes(':') && !p.includes('*') && !LEGACY_REDIRECT_ROUTES.has(p));

// Preserve the academy redirect wildcard, but never treat every public slug
// as a real article/hub. The catch-all "*" would also defeat genuine 404s.
const enumeratedContentRoutes = new Set(['/blog/:slug', '/agencja-social-media/:clusterSlug']);
const dynamicPatterns = uniqueRoutes
  .filter((p) => (p.includes(':') || p.includes('*')) && p !== '*' && !enumeratedContentRoutes.has(p))
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
