export const enquiryIndustries = {
  'branza-medyczna': 'Branża medyczna',
  gastronomia: 'Gastronomia',
  'beauty-wellness': 'Beauty i wellness',
  nieruchomosci: 'Nieruchomości',
  automotive: 'Motoryzacja',
  edukacja: 'Edukacja',
  'prawo-finanse': 'Prawo i finanse',
  'ecommerce-retail': 'E-commerce i handel',
  'it-saas': 'IT i SaaS',
  produkcja: 'Produkcja i przemysł',
  ngo: 'NGO i fundacje',
  turystyka: 'Turystyka',
  'firmy-lokalne': 'Firmy lokalne',
  ecommerce: 'E-commerce',
  'marki-premium': 'Marki premium',
  instytucje: 'Instytucje i eventy',
};

function getIndustry(id) {
  return Object.hasOwn(enquiryIndustries, id)
    ? { id, name: enquiryIndustries[id], path: `/dla-kogo/${id}` }
    : null;
}

export function readIndustryContext(search = '') {
  return getIndustry(new URLSearchParams(search).get('branza'));
}

export function industryEnquiryHref(id, baseHref = '/kontakt#formularz') {
  const origin = 'https://www.fotz-studio.pl';
  let url;
  try { url = new URL(baseHref, origin); } catch { return '/kontakt#formularz'; }
  if (url.origin !== origin || !['/kontakt', '/konsultacja'].includes(url.pathname)) return '/kontakt#formularz';
  const industry = getIndustry(id);
  if (industry) url.searchParams.set('branza', industry.id);
  else url.searchParams.delete('branza');
  return `${url.pathname}${url.search}#formularz`;
}

// Only a known sector label and canonical page can enter the outgoing message.
export function appendIndustryContext(message, id) {
  const industry = getIndustry(id);
  return industry ? `${message}\n\nBranża: ${industry.name}\nStrona branżowa: https://www.fotz-studio.pl${industry.path}` : message;
}
