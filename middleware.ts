/**
 * Vercel Edge Middleware — Soft-404 fix
 *
 * Problem: vercel.json has a SPA catch-all rewrite (`/(.*) → /index.html`)
 * that returns HTTP 200 for every unknown URL. Crawlers (Ahrefs, Bing, etc.)
 * read this as a successful page → soft-404 errors → tanks the health score.
 *
 * Solution: middleware runs AFTER vercel.json `redirects` (308 still work)
 * and BEFORE `rewrites`. For any request that:
 *   - is NOT an asset (/_next/, /assets/, existing public files)
 *   - is NOT in the known-routes manifest (built from <Route path> entries)
 *   - does NOT match a dynamic pattern (e.g. /blog/:slug)
 * we serve the prerendered /404.html with HTTP 404.
 *
 * Static prerendered routes (dist/<route>/index.html) are served directly by
 * Vercel's static layer with HTTP 200 — middleware does not touch them.
 */
import manifest from './known-routes.json';
import retired from './src/data/retired-blog.json';

const STATIC_ROUTES: Set<string> = new Set(manifest.staticRoutes);
const STATIC_FILES: Set<string> = new Set(manifest.staticFiles ?? []);
// Blog posts retired on purpose (docs/seo/BLOG-PRUNING-2026-10-16.md): 410 Gone
// tells crawlers the removal is permanent; /blog/:slug would otherwise serve 200.
const GONE_ROUTES: Set<string> = new Set(retired.gone);
const DYNAMIC_PATTERNS: RegExp[] = manifest.dynamicPatterns.map(
  (p: string) => new RegExp(`^${p}$`)
);

// Paths that must always pass through (never 404 by middleware).
// Assets, API, sitemaps, robots, well-known files, prerendered static .html.
const ALLOW_PREFIXES = [
  '/assets/',
  '/api/',
  '/_next/',
  '/_vercel/',
  '/.well-known/',
];

const ALLOW_FILES = new Set([
  '/robots.txt',
  '/sitemap.xml',
  '/sitemap-index.xml',
  '/sitemap-main.xml',
  '/sitemap-services.xml',
  '/sitemap-blog.xml',
  '/sitemap-cities.xml',
  '/sitemap-industries.xml',
  '/sitemap-blog-cluster.xml',
  '/favicon.ico',
  '/manifest.json',
  '/llms.txt',
  '/og-image.jpg',
  '/404.html',
  '/mapa-strony',
  '/mapa-strony-v2.html',
  '/mapa-strony-v3.html',
]);

// File-extension heuristic: anything ending with .ext is an asset request.
const ASSET_EXT_RE = /\.[a-zA-Z0-9]{1,6}$/;

function isKnownRoute(pathname: string): boolean {
  // Normalize trailing slash (vercel.json trailingSlash:false already strips,
  // but be defensive).
  const p = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;

  if (STATIC_ROUTES.has(p)) return true;
  for (const re of DYNAMIC_PATTERNS) {
    if (re.test(p)) return true;
  }
  return false;
}

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const { pathname } = url;

  // 1) Allow assets, API, sitemaps, well-known files — never 404 these.
  for (const prefix of ALLOW_PREFIXES) {
    if (pathname.startsWith(prefix)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  }
  if (ALLOW_FILES.has(pathname)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  if (STATIC_FILES.has(pathname)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });

  // 2) Retired content → 410 with the prerendered not-found body.
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  let decoded = normalized;
  try { decoded = decodeURIComponent(normalized); } catch { /* keep raw path */ }
  if (GONE_ROUTES.has(decoded)) return notFound(request, 410);

  // 3) Known route → continue to SPA rewrite (returns 200 + index.html).
  // A file-like URL copied from an article must not match /blog/:slug.
  if (!ASSET_EXT_RE.test(pathname) && isKnownRoute(pathname)) {
    return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  }

  // 4) Unknown route → serve /404.html with HTTP 404.
  return notFound(request, 404);
}

// Serve the prerendered 404 body (H1, header, footer) without changing the URL.
async function notFound(request: Request, status: 404 | 410): Promise<Response> {
  const notFoundUrl = new URL('/404.html', request.url);
  const res = await fetch(notFoundUrl, {
    headers: { 'x-middleware-bypass': '1' },
  });
  const body = await res.text();
  return new Response(body, {
    status,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate',
      'x-soft-404-fix': 'middleware',
    },
  });
}

export const config = {
  // Run on every path EXCEPT obvious static assets — keeps middleware cheap.
  // Vercel edge config matcher syntax (negative lookahead).
  matcher: ['/((?!_next/|_vercel/|assets/|api/).*)'],
};