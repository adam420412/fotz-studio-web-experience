import { getPublishedArticle, listPublishedArticles } from './public-cms.mjs';
import { getBlogMetadata, SITE_ORIGIN } from './blog-seo.mjs';
import { injectMeta } from './seo-document.mjs';
import { notFoundHtml } from './not-found-html.mjs';

const xml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const headers = { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=0, s-maxage=60, must-revalidate' };
const unavailableHtml = '<!doctype html><html lang="pl"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Chwilowa przerwa | FOTZ Studio</title><main><h1>Nie udało się wczytać treści</h1><p>Spróbuj ponownie za chwilę lub <a href="/kontakt">skontaktuj się z nami</a>.</p></main></html>';

export function renderBlogDocument(template, rendered, article) {
  const meta = getBlogMetadata(article);
  let html = injectMeta(template, meta).replace(/<noscript id="seo-fallback">[\s\S]*?<\/noscript>\s*/g, '');
  // The renderer's schema uses the same article and reviewed photo policy.
  html = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');
  html = html.replace('</head>', () => `${rendered.scripts}</head>`);
  html = html.replace('<div id="root"></div>', () => `<div id="root" data-hydrate-path="/blog/${article.slug}"><!-- fotz-body:start -->${rendered.body}<!-- fotz-body:end --></div>`);
  return html.replace('</body>', () => `<script id="fotz-blog-data" type="application/json">${rendered.bootstrap}</script></body>`);
}

export async function serveBlogArticle(request, { config, template, renderPage, fetcher = fetch, logError = console.error }) {
  if (!['GET', 'HEAD'].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD', 'cache-control': 'no-store' } });
  const slug = new URL(request.url).searchParams.get('slug');
  try {
    const article = await getPublishedArticle(config, slug, fetcher);
    if (!article) return new Response(request.method === 'HEAD' ? null : notFoundHtml, {
      status: 404, headers: { ...headers, 'cache-control': 'public, max-age=0, s-maxage=15, must-revalidate', 'x-robots-tag': 'noindex, nofollow' },
    });
    const meta = getBlogMetadata(article);
    const responseHeaders = { ...headers, 'x-fotz-content': 'live-cms', ...(meta.noIndex ? { 'x-robots-tag': 'noindex, nofollow' } : {}) };
    if (request.method === 'HEAD') return new Response(null, { headers: responseHeaders });
    const rendered = await renderPage('BlogArticleDynamic.tsx', `/blog/${article.slug}`, [article]);
    return new Response(renderBlogDocument(template, rendered, article), { headers: responseHeaders });
  } catch (error) {
    logError('Live blog unavailable:', error instanceof Error ? error.message : 'unknown failure');
    return new Response(request.method === 'HEAD' ? null : unavailableHtml, {
      status: 503, headers: { ...headers, 'cache-control': 'no-store', 'retry-after': '60', 'x-robots-tag': 'noindex' },
    });
  }
}

export function mergeBlogSitemap(baseXml, articles) {
  // Retain reviewed static URLs and their real lastmod dates; append new CMS
  // pages once, excluding the deliberately non-indexable test article.
  const known = new Set([...baseXml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/g)].map(match => match[1].trim()));
  const additions = [];
  for (const article of articles) {
    const meta = getBlogMetadata(article);
    if (meta.noIndex || known.has(meta.canonical)) continue;
    known.add(meta.canonical);
    const date = article.updated_at || article.published_at;
    const lastmod = date && Number.isFinite(Date.parse(date)) ? `<lastmod>${new Date(date).toISOString()}</lastmod>` : '';
    additions.push(`<url><loc>${xml(`${SITE_ORIGIN}/blog/${article.slug}`)}</loc>${lastmod}</url>`);
  }
  if (!baseXml.includes('</urlset>')) throw new Error('Invalid base blog sitemap');
  return baseXml.replace('</urlset>', () => `${additions.join('\n')}\n</urlset>`);
}

export async function serveBlogSitemap(request, { config, baseXml, fetcher = fetch, logError = console.error }) {
  if (!['GET', 'HEAD'].includes(request.method)) return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
  try {
    const articles = await listPublishedArticles(config, fetcher);
    const body = mergeBlogSitemap(baseXml, articles);
    return new Response(request.method === 'HEAD' ? null : body, { headers: { ...headers, 'content-type': 'application/xml; charset=utf-8', 'x-fotz-content': 'live-cms-sitemap' } });
  } catch (error) {
    logError('Live blog sitemap unavailable:', error instanceof Error ? error.message : 'unknown failure');
    // Do not cache an incomplete map as a successful response.
    return new Response(null, { status: 503, headers: { 'cache-control': 'no-store', 'retry-after': '60' } });
  }
}
