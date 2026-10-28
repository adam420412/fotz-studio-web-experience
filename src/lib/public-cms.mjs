// Read only public, published fields. Never use a service-role key here.
export const publicArticleFields = 'slug,title,excerpt,meta_description,hero_image_url,published_at,created_at,updated_at,content_html,keywords,json_ld,faq_json_ld,is_published';
export const validBlogSlug = slug => typeof slug === 'string' && slug.length <= 200 && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);

async function requestRows(config, params, fetcher) {
  const url = new URL('/rest/v1/blog_articles', config.url);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, String(value));
  const response = await fetcher(url, {
    headers: { apikey: config.key, Authorization: `Bearer ${config.key}` },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`Public CMS returned ${response.status}`);
  const rows = await response.json();
  if (!Array.isArray(rows)) throw new Error('Invalid public CMS response');
  return rows;
}

export async function getPublishedArticle(config, slug, fetcher = fetch) {
  if (!validBlogSlug(slug)) return null;
  const rows = await requestRows(config, { select: publicArticleFields, slug: `eq.${slug}`, is_published: 'eq.true', limit: 1 }, fetcher);
  if (!rows.length) return null;
  const article = rows[0];
  if (article.slug !== slug || article.is_published !== true || !article.title?.trim() || typeof article.content_html !== 'string' || !article.content_html.trim()) {
    throw new Error('Published article is incomplete');
  }
  return article;
}

export async function listPublishedArticles(config, fetcher = fetch) {
  const articles = [];
  for (let offset = 0; offset < 50000; offset += 500) {
    const rows = await requestRows(config, {
      select: 'slug,title,meta_description,excerpt,published_at,updated_at,is_published',
      is_published: 'eq.true', order: 'slug.asc', offset, limit: 500,
    }, fetcher);
    if (rows.some(row => !validBlogSlug(row.slug) || !row.title?.trim() || row.is_published !== true)) throw new Error('Invalid published article metadata');
    articles.push(...rows);
    if (rows.length < 500) return articles;
  }
  throw new Error('Public CMS pagination limit reached');
}
