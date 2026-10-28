export const industries = [
  { name: 'Branża medyczna', slug: 'branza-medyczna' },
  { name: 'Gastronomia', slug: 'gastronomia' },
  { name: 'Beauty & wellness', slug: 'beauty-wellness' },
  { name: 'Nieruchomości', slug: 'nieruchomosci' },
  { name: 'Motoryzacja', slug: 'automotive' },
  { name: 'Edukacja', slug: 'edukacja' },
  { name: 'Prawo i finanse', slug: 'prawo-finanse' },
  { name: 'E-commerce i handel', slug: 'ecommerce-retail' },
  { name: 'IT & SaaS', slug: 'it-saas' },
  { name: 'Produkcja i przemysł', slug: 'produkcja' },
  { name: 'NGO i fundacje', slug: 'ngo' },
  { name: 'Turystyka', slug: 'turystyka' },
].map(industry => ({ ...industry, href: `/dla-kogo/${industry.slug}` }));

export function getIndustry(pathname) {
  const path = pathname.replace(/\/+$/, '');
  return industries.find(industry => industry.href === path);
}
