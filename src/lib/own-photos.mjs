import drivePhotos from '../data/own-drive-photos.json' with { type: 'json' };
import workVariants from '../data/selected-work-images.json' with { type: 'json' };
import { workImages } from '../data/selected-work.mjs';

// An explicit, reviewed catalogue. Being hosted on our domain is not proof of ownership.
export const ownPhotos = {
  ...Object.fromEntries(Object.entries(workImages).map(([key, photo]) => [key, { ...photo, variants: workVariants[key] }])),
  ...drivePhotos,
};
const approvedPaths = new Set(Object.values(ownPhotos).flatMap(photo => photo.variants.map(variant => variant.src)));
export function isApprovedPhoto(source) {
  try {
    const url = new URL(source, 'https://www.fotz-studio.pl');
    return ['www.fotz-studio.pl', 'fotz-studio.pl'].includes(url.hostname) && approvedPaths.has(url.pathname);
  } catch { return false; }
}

export function getOwnPhoto(topic = '') {
  const text = String(topic).toLowerCase();
  let keys = ['fotz-work', 'fotz-presentation'];
  if (/fotograf|zdjec|zdję|foto|video|wideo|film|podcast|produkc/.test(text)) keys = ['backstage', 'concert', 'stadium'];
  else if (/event|wydarzen|wydarzeń|koncert/.test(text)) keys = ['concert', 'conference', 'stadium'];
  else if (/wnetrz|wnętrz|architekt|nieruchomo|restaur|hotel/.test(text)) keys = ['bar', 'bowling', 'lounge'];
  else if (/produkt|ecommerce|e-commerce|sklep/.test(text)) keys = ['product', 'backstage'];
  else if (/social|instagram|facebook|tiktok|influencer/.test(text)) keys = ['concert', 'bar', 'stadium'];
  const hash = [...text].reduce((sum, char) => (sum * 31 + char.codePointAt(0)) >>> 0, 0);
  const key = keys[hash % keys.length];
  const photo = ownPhotos[key];
  const variant = photo.variants.at(-1);
  return { alt: photo.alt, src: variant.src, width: variant.width, height: variant.height,
    srcSet: photo.variants.map(item => `${item.src} ${item.width}w`).join(', '),
    sizes: '(min-width: 1024px) 896px, calc(100vw - 48px)' };
}

// Unreviewed CMS illustrations can return on refresh. Keep text and links;
// remove an illustration together with its caption instead of mislabelling a new photo.
export function ownPhotoHtml(html) {
  const allowedTag = tag => isApprovedPhoto(tag.match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1] || '');
  return html
    .replace(/<figure\b[^>]*>[\s\S]*?<\/figure>/gi, figure => {
      const images = [...figure.matchAll(/<img\b[^>]*>/gi)].map(match => match[0]);
      if (!images.length || images.every(allowedTag)) return figure;
      const links = [...figure.matchAll(/<a\b[^>]*>[\s\S]*?<\/a>/gi)]
        .map(match => match[0].replace(/<img\b[^>]*>/gi, ''))
        .filter(link => link.replace(/<[^>]*>/g, '').trim());
      return links.length ? `<p>${links.join(' · ')}</p>` : '';
    })
    .replace(/<picture\b[^>]*>[\s\S]*?<\/picture>/gi, picture => {
      const img = picture.match(/<img\b[^>]*>/i)?.[0];
      return img && allowedTag(img) ? img : '';
    })
    .replace(/<img\b[^>]*>/gi, tag => allowedTag(tag) ? tag.replace(/\s(?:srcset|data-src|data-srcset)\s*=\s*["'][^"']*["']/gi, '') : '')
    .replace(/\b(?:background-image|background)\s*:\s*url\([^)]*\)/gi, 'background-image:none');
}

export function ownPhotoSchema(value, topic = '') {
  if (Array.isArray(value)) return value.map(item => ownPhotoSchema(item, topic));
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).map(([key, item]) => [key,
    ['image', 'thumbnailUrl', 'primaryImageOfPage'].includes(key)
      ? `https://www.fotz-studio.pl${getOwnPhoto(topic).src}` : ownPhotoSchema(item, topic)]));
}
