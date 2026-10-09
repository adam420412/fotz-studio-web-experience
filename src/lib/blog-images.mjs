import { normalizeSiteUrls } from './blog-seo.mjs';

export function getBlogImage(article, images) {
  const image = images[article.slug];
  // A later CMS cover change must never display the previous photograph.
  if (!image || image.source !== article.hero_image_url) return { src: normalizeSiteUrls(article.hero_image_url || '') };
  const variant = image.variants.find(item => item.width >= 800) || image.variants.at(-1);
  return {
    src: variant.src,
    srcSet: image.variants.map(item => `${item.src} ${item.width}w`).join(', '),
    sizes: '(min-width: 1088px) 896px, (min-width: 1024px) calc(100vw - 192px), (min-width: 768px) calc(100vw - 96px), calc(100vw - 48px)',
    width: variant.width,
    height: variant.height,
  };
}
