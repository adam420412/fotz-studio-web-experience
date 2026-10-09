// Only the public fields used by BlogArticleDynamic cross the HTML boundary.
const fields = ['slug', 'title', 'meta_description', 'excerpt', 'content_html',
  'hero_image_url', 'published_at', 'created_at', 'keywords', 'json_ld', 'faq_json_ld'];

export function blogBootstrap(article, path) {
  if (!article || article.is_published === false || typeof article.slug !== 'string'
    || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug)
    || path !== `/blog/${article.slug}` || typeof article.title !== 'string'
    || typeof article.content_html !== 'string') return null;
  return { version: 1, path, article: Object.fromEntries(fields.map(key => [key, article[key] ?? null])) };
}

export function serializeBlogBootstrap(payload) {
  return JSON.stringify(payload).replace(/[<>&\u2028\u2029]/g,
    character => `\\u${character.charCodeAt(0).toString(16).padStart(4, '0')}`);
}

export function readBlogBootstrap(json, path) {
  try {
    const payload = JSON.parse(json);
    return payload?.version === 1 && payload.path === path
      ? blogBootstrap(payload.article, path)?.article ?? null : null;
  } catch { return null; }
}

// A fixed editorial timezone keeps the server and browser date identical.
export function formatBlogDate(value) {
  const date = new Date(value);
  return value && !Number.isNaN(date.getTime())
    ? new Intl.DateTimeFormat('pl-PL', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Warsaw' }).format(date)
    : '';
}
