/** Read published, public CMS metadata. No database writes or admin credentials. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';
import { createClient } from '@supabase/supabase-js';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const env = { ...loadEnv('production', root, 'VITE_'), ...process.env };
if (!env.VITE_SUPABASE_URL || !env.VITE_SUPABASE_PUBLISHABLE_KEY) throw new Error('Missing public CMS configuration');
const client = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_PUBLISHABLE_KEY, { auth: { persistSession: false, autoRefreshToken: false } });
const articles = [];
for (let offset = 0; ; offset += 500) {
  const { data, error } = await client.from('blog_articles')
    .select('slug,title,excerpt,meta_description,hero_image_url,published_at,created_at,updated_at')
    .eq('is_published', true).order('slug').range(offset, offset + 499);
  if (error) throw new Error(error.message);
  articles.push(...data);
  if (data.length < 500) break;
}
if (!articles.length) throw new Error('Empty published article response; previous snapshot preserved');
const slugs = new Set();
for (const article of articles) {
  if (!article.title?.trim() || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || slugs.has(article.slug)) throw new Error(`Invalid or duplicate published slug: ${article.slug}`);
  slugs.add(article.slug);
}
fs.writeFileSync(path.join(root, 'src/data/blog-seo.json'), JSON.stringify({ syncedAt: new Date().toISOString(), articles }, null, 2) + '\n');
console.log(`Saved SEO metadata for ${articles.length} published CMS articles; no private fields or content bodies.`);
