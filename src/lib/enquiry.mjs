export const enquiryServices = {
  web: 'Strona internetowa lub sklep',
  video: 'Film, rolki lub zdjęcia',
  social: 'Obsługa social media',
  seo: 'SEO i widoczność w Google',
  marketing: 'Stała obsługa marketingowa',
  reel: 'Zapytanie o darmową rolkę',
  other: 'Chcę dobrać zakres',
};
export const enquiryVariants = {
  materials: 'Produkcja materiałów', management: 'Regularna obsługa profili',
  campaign: 'Obsługa profili z reklamami', website: 'Nowa strona',
  redesign: 'Przebudowa istniejącej strony', shop: 'Sklep internetowy',
  film: 'Film dla firmy', reels: 'Rolki do social media', spot: 'Spot reklamowy',
  ad_variants: 'Warianty filmu do testu reklam',
  audit: 'Audyt i plan wdrożeń', ongoing: 'Stałe działania SEO',
};
export const validService = value => Object.hasOwn(enquiryServices, value) ? value : 'other';
export function readEnquiryContext(search = '') {
  const params = new URLSearchParams(search);
  return { service: validService(params.get('usluga')), variant: Object.hasOwn(enquiryVariants, params.get('wariant')) ? params.get('wariant') : '' };
}
export function enquiryHref(service, variant) {
  const params = new URLSearchParams({ usluga: validService(service) });
  if (Object.hasOwn(enquiryVariants, variant)) params.set('wariant', variant);
  return `/kontakt?${params}#formularz`;
}
export function serviceForPath(path) {
  if (/^\/(seo(?:\/|$)|.*pozycjonowanie)/.test(path)) return 'seo';
  if (/social-media/.test(path)) return 'social';
  if (/produkcja-(filmow|video)|video-marketing/.test(path)) return 'video';
  if (/marketing-internetowy|agencja-marketing/.test(path)) return 'marketing';
  if (/strony-internetowe|sklepy-internetowe|cennik-tworzenia-stron/.test(path)) return 'web';
  return 'other';
}
