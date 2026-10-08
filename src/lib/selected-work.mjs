/** Select by the page's topic, never by city or an invented client relationship. */
export function getWorkCollection(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const publicOffer = /^\/(?:uslugi(?:\/|$)|agencja[^/]*(?:\/|$)|social-media(?:\/|$)|content-marketing(?:\/|$)|performance-marketing(?:\/|$)|seo(?:\/|$)|strony-internetowe(?:\/|$)|dla-kogo(?:\/|$)|ai(?:\/|$)|fotograf[^/]*|kampanie[^/]*|wizualizacje-3d(?:\/|$))/.test(path);
  const editorial = path.startsWith('/blog/') && /(?:social-media|instagram|facebook|tiktok|reklam|marketing|fotograf|zdjeci|zdjec|video|wideo|film|rolk|branding|identyfikac|stron|landing-page|seo|ecommerce)/.test(path);
  if (!publicOffer && !editorial && !['/', '/o-nas', '/kontakt', '/blog', '/poradniki', '/cennik'].includes(path)) return null;
  if (/gastronom|nieruchom|turyst|wnetrz|hotel/.test(path)) return 'spaces';
  if (/instytuc|event|wydarzen/.test(path)) return 'events';
  if (/produktow|branding|graficzn|identyfikac|ecommerce|e-commerce/.test(path)) return 'product';
  if (/fotograf|zdjeci|zdjec/.test(path)) return 'photo';
  if (/produkcja|video|wideo|film|dron/.test(path)) return 'production';
  if (/social-media|instagram|facebook|tiktok|rolk|content-marketing/.test(path)) return 'social';
  if (/stron|landing-page|(?:^|[/-])seo(?:[/-]|$)/.test(path)) return 'web';
  return 'studio';
}
