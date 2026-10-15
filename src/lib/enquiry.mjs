export const enquiryServices = {
  web: 'Strona internetowa lub sklep',
  video: 'Film, rolki lub zdjęcia',
  social: 'Obsługa social media',
  seo: 'SEO i widoczność w Google',
  marketing: 'Marketing i kampanie reklamowe',
  reel: 'Zapytanie o darmową rolkę',
  other: 'Chcę dobrać zakres',
};
export const enquiryVariants = {
  materials: 'Produkcja materiałów', management: 'Regularna obsługa profili',
  campaign: 'Obsługa profili z reklamami', website: 'Nowa strona',
  redesign: 'Przebudowa istniejącej strony', shop: 'Sklep internetowy',
  configurator: 'Konfigurator produktów 3D',
  film: 'Film dla firmy', reels: 'Rolki do social media', spot: 'Spot reklamowy',
  ad_variants: 'Warianty filmu do testu reklam',
  meta_ads: 'Kampania Facebook i Instagram', lead_ads: 'Reklamy i obsługa zapytań',
  instagram_ads: 'Kampania Instagram Ads', content_plan: 'Strategia treści',
  campaign_audit: 'Przegląd kampanii reklamowej',
  video_plan: 'Strategia i regularne materiały video',
  product_photos: 'Fotografia produktowa',
  audit: 'Audyt i plan wdrożeń', ongoing: 'Stałe działania SEO',
};
export const validService = value => Object.hasOwn(enquiryServices, value) ? value : 'other';
export function readEnquiryContext(search = '') {
  const params = new URLSearchParams(search);
  return { service: validService(params.get('usluga')), variant: Object.hasOwn(enquiryVariants, params.get('wariant')) ? params.get('wariant') : '' };
}
export function resolveEnquiryContext(search = '', defaultService = 'other', defaultVariant = '') {
  const context = readEnquiryContext(search);
  const baseService = validService(defaultService);
  const service = context.service === 'other' ? baseService : context.service;
  const variant = context.variant || (service === baseService && Object.hasOwn(enquiryVariants, defaultVariant) ? defaultVariant : '');
  return { service, variant };
}
export function enquiryHref(service, variant) {
  const params = new URLSearchParams({ usluga: validService(service) });
  if (Object.hasOwn(enquiryVariants, variant)) params.set('wariant', variant);
  return `/kontakt?${params}#formularz`;
}
export function serviceForPath(path) {
  if (/^\/(seo(?:\/|$)|.*pozycjonowanie)/.test(path)) return 'seo';
  if (/social-media/.test(path)) return 'social';
  if (/produkcja-(filmow|video)|video-marketing/.test(path) || /^\/uslugi\/fotografia(?:[-/]|$)/.test(path)) return 'video';
  if (/marketing-internetowy|agencja-marketing|reklama-facebook/.test(path) || /^\/(content-marketing|performance-marketing)(\/|$)/.test(path)) return 'marketing';
  if (/strony-internetowe|sklepy-internetowe|cennik-tworzenia-stron/.test(path)) return 'web';
  return 'other';
}
