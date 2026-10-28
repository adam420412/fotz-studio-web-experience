import fs from 'node:fs';
import assert from 'node:assert/strict';
import { GET as serve } from '../api/blog-article.js';
import { GET as sitemap } from '../api/blog-sitemap.js';
const article = {
  slug: 'kontrola-publikacji-bez-wdrozenia', title: 'Jak przygotować materiały do projektu strony',
  meta_description: 'Przygotuj opisy usług, zdjęcia realizacji i aktualne dane kontaktowe przed rozpoczęciem projektu strony firmowej.',
  content_html: '<h1>Nagłówek z CMS</h1><p>To wyłącznie lokalny test renderowania nowego wpisu.</p><script>alert(1)</script><p onclick="evil()">Bezpieczna treść</p>',
  hero_image_url: 'https://example.com/unreviewed.jpg', is_published: true,
  published_at: '2026-10-28T10:00:00Z', created_at: '2026-10-28T10:00:00Z',
  json_ld: { '@context': 'https://schema.org', '@type': 'Article', headline: '</script><script>alert(1)</script>' },
};
const manifest = JSON.parse(fs.readFileSync('known-routes.json', 'utf8'));
assert.ok(!manifest.staticRoutes.includes(`/blog/${article.slug}`));
const originalFetch = globalThis.fetch;
let response;
try {
  globalThis.fetch = async () => Response.json([article]);
  response = await serve(new Request(`https://www.fotz-studio.pl/api/blog-article?slug=${article.slug}`));
  const mapResponse = await sitemap(new Request('https://www.fotz-studio.pl/sitemap-blog.xml'));
  assert.equal(mapResponse.status, 200);
  assert.ok((await mapResponse.text()).includes(`<loc>https://www.fotz-studio.pl/blog/${article.slug}</loc>`));
} finally {
  globalThis.fetch = originalFetch;
}
assert.equal(response.status,200);
const html=await response.text();
assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
assert.match(html,/<h2>Nagłówek z CMS<\/h2>/);
assert.match(html,/data-hydrate-path="\/blog\/kontrola-publikacji-bez-wdrozenia"/);
assert.match(html,/rel="canonical" href="https:\/\/www.fotz-studio.pl\/blog\/kontrola-publikacji-bez-wdrozenia"/);
assert.match(html,/name="robots" content="index, follow"/);
assert.match(html,/src="\/work\//);
assert.match(html,/fotz-blog-data/);
assert.doesNotMatch(html,/<script>alert|onclick="evil|public-test-key|src="https:\/\/example.com/);
for (const [,raw] of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(raw);
console.log('Live CMS article outside the static manifest: full HTML, one H1, canonical, hydration, own photo and safe content OK. No external requests or database writes.');
