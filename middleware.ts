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
 *   - does NOT match an intentional redirect wildcard (e.g. /akademia/*)
 * we serve a self-contained error document with HTTP 404.
 * Public blog and social-media slugs are enumerated at build time.
 *
 * Static prerendered routes (dist/<route>/index.html) are served directly by
 * Vercel's static layer with HTTP 200 — middleware does not touch them.
 */
import manifest from './known-routes.json';
import retiredPodcast from './src/data/retired-podcast.json';
import { notFoundHtml } from './src/lib/not-found-html.mjs';

// A withdrawn offer has no equivalent replacement. Return a genuine 410
// before the SPA fallback, including the former short URL and query variants.
// This response is self-contained: no stale app bundle or extra fetch is needed.
const retiredPodcastHtml = `<!doctype html>
<html lang="pl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${retiredPodcast.title}</title>
<meta name="description" content="${retiredPodcast.description}">
<style>
  :root{color-scheme:dark;font-family:system-ui,sans-serif;background:#141414;color:#fafafa}
  body{margin:0;min-height:100svh;display:grid;place-items:center}
  main{box-sizing:border-box;width:min(100%,48rem);padding:clamp(1.5rem,6vw,4rem)}
  .brand{font-weight:700;letter-spacing:.12em;color:#facc15}
  h1{font-size:clamp(2rem,6vw,3.5rem);line-height:1.12;text-wrap:balance}
  p{line-height:1.7;color:#d4d4d4}
  nav{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}
  a{display:inline-block;color:#facc15;padding:.75rem 1rem;border:1px solid #737373;border-radius:.5rem;text-underline-offset:.2em}
  a:focus-visible{outline:3px solid #facc15;outline-offset:4px}
</style></head><body><main>
<p class="brand">FOTZ STUDIO</p><h1>${retiredPodcast.heading}</h1>
<p>${retiredPodcast.description}</p>
<nav aria-label="Dalsza nawigacja"><a href="/">Strona główna</a><a href="/kontakt">Kontakt</a></nav>
</main></body></html>`;

const STATIC_ROUTES: Set<string> = new Set(manifest.staticRoutes);
const STATIC_FILES: Set<string> = new Set(manifest.staticFiles ?? []);
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

  // URL.pathname percent-encodes Polish letters. Decode characters, while
  // preserving encoded separators such as %2F so they cannot create a route.
  let decodedPath: string | null = null;
  try { decodedPath = decodeURI(pathname); } catch { /* Malformed encoding is unknown. */ }
  const normalizedPath = decodedPath?.replace(/\/+$/, '') || '/';
  if (retiredPodcast.paths.includes(normalizedPath)) {
    return new Response(request.method === 'HEAD' ? null : retiredPodcastHtml, {
      status: 410,
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate',
        'x-robots-tag': 'noindex, nofollow',
      },
    });
  }

  // 1) Allow assets, API, sitemaps, well-known files — never 404 these.
  for (const prefix of ALLOW_PREFIXES) {
    if (pathname.startsWith(prefix)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  }
  if (ALLOW_FILES.has(pathname)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  if (STATIC_FILES.has(pathname)) return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });

  // 2) Known route → continue to SPA rewrite (returns 200 + index.html).
  // A file-like URL copied from an article is not a public content route.
  if (decodedPath !== null && !ASSET_EXT_RE.test(decodedPath) && isKnownRoute(decodedPath)) {
    return new Response(null, { status: 200, headers: { 'x-middleware-next': '1' } });
  }

  // 3) Unknown route → real 404, without a second request or a SPA redirect.
  return new Response(request.method === 'HEAD' ? null : notFoundHtml, {
    status: 404,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate',
      'x-soft-404-fix': 'middleware',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}

export const config = {
  // Run on every path EXCEPT obvious static assets — keeps middleware cheap.
  // Vercel edge config matcher syntax (negative lookahead).
  matcher: ['/((?!_next/|_vercel/|assets/|api/).*)'],
};
