/** Shared by the CMS article view and the static SEO build. */
import { migratedBlogPaths, repairedSourceLinks } from './reviewed-blog-links.mjs';
import { reviewedBlogCopy } from './reviewed-blog-copy.mjs';

export const SITE_ORIGIN = 'https://www.fotz-studio.pl';

const canonicalPaths = {
  '/social-media': '/social-media/obsluga',
  '/content-marketing': '/content-marketing/strategia',
  '/blog/automatyzacja-marketingu': '/blog/marketing-automation',
  '/social-media/poznan': '/agencja-social-media/poznan',
  '/blog/nps-co-to-jest': '/blog/nps-net-promoter-score-co-to-jest',
  '/blog/reklama-programatyczna-co-to': '/blog/programmatic-advertising-co-to',
  '/blog/zero-trust-security-co-to-jest-jak-wdrozyz': '/blog/zero-trust-security-co-to-jest-jak-wdrozyz-ztna-mfa',
  '/blog/api-gateway-co-to-jest-jak-wybrac-kong-aws-apigee': '/blog/api-gateway-co-to-jest-kong-aws-traefik-kubernetes-ingress',
  '/blog/okr-co-to': '/blog/okr-co-to-jest',
  '/uslugi/audyt-seo': '/seo/audyt',
  '/uslugi/strony-internetowe/kielce': '/strony-internetowe/kielce',
};

function canonicalLink(href) {
  if (repairedSourceLinks[href]) return repairedSourceLinks[href];
  if (/^https?:\/\/blog\.fotz\.pl\//.test(href)) {
    const old = new URL(href);
    if (migratedBlogPaths.has(old.pathname.replace(/\/$/, ''))) return `${SITE_ORIGIN}${old.pathname.replace(/\/$/, '')}${old.search}${old.hash}`;
  }
  const relative = href.startsWith('/') && !href.startsWith('//');
  if (!relative && !href.startsWith(`${SITE_ORIGIN}/`)) return href;
  const url = new URL(href, SITE_ORIGIN);
  const target = canonicalPaths[url.pathname];
  return target ? `${relative ? '' : SITE_ORIGIN}${target}${url.search}${url.hash}` : href;
}

// Match website authorities only: keep mailboxes, social profiles and subdomains.
export function normalizeSiteUrls(value) {
  return value.replace(/https?:\/\/(?:www\.)?(?:fotz\.pl|fotz-studio\.pl)(?=[/\s"'`<>?#]|$)/g, SITE_ORIGIN);
}

export function normalizeSchemaUrls(value) {
  if (typeof value === 'string') return normalizeSiteUrls(value);
  if (Array.isArray(value)) return value.map(normalizeSchemaUrls);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, normalizeSchemaUrls(item)]));
  }
  return value;
}

export function getBlogMetadata(article) {
  const raw = article.meta_description?.trim() || article.excerpt?.trim() || article.title;
  return {
    title: `${article.title} | Blog FOTZ`,
    description: raw,
    canonical: `${SITE_ORIGIN}/blog/${article.slug}`,
    ogImage: normalizeSiteUrls(article.hero_image_url || `${SITE_ORIGIN}/og-image.jpg`),
    ogType: 'article',
    noIndex: raw.length < 80 && article.title.toLowerCase().includes('test'),
  };
}

/** The article view already emits one H1 and promotes CMS schema into Helmet. */
export function prepareBlogHtml(html, slug = '') {
  for (const [before, after] of reviewedBlogCopy[slug] || []) html = html.replace(before, after);
  return normalizeSiteUrls(html)
    // An automatic linkifier mistook the Polish abbreviation "m.in." for a domain.
    .replace(/<a\b[^>]*href=["']https?:\/\/m\.in\/?["'][^>]*>(m\.in\.?)<\/a>/gi, '$1')
    .replace(/(\bhref=["'])([^"']+)(["'])/gi, (_, start, href, end) => `${start}${canonicalLink(href)}${end}`)
    .replace(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script\s*>/gi, '')
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
}
