/** Shared by the CMS article view and the static SEO build. */
export const SITE_ORIGIN = 'https://www.fotz-studio.pl';

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
export function prepareBlogHtml(html) {
  return normalizeSiteUrls(html)
    .replace(/<script\b(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script\s*>/gi, '')
    .replace(/<h1(\s[^>]*)?>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');
}
