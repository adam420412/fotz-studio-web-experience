import { getOwnPhoto } from './own-photos.mjs';

export function getBlogImage(article, _images) {
  return getOwnPhoto(`${article.slug} ${article.title || ''}`);
}
