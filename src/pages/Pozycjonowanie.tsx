import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { seoOffer as offer } from '@/data/sales-offers';
export default function Pozycjonowanie() {
  return <><SEOHead title="Pozycjonowanie stron — audyt, wdrożenia i rozwój SEO | FOTZ" description="SEO dla firm: diagnoza w Search Console, poprawki techniczne, treści ofertowe i pomiar zapytań. Sprawdź zakres współpracy z FOTZ Studio i zapytaj o swoją stronę." canonical="https://www.fotz-studio.pl/seo/pozycjonowanie" /><SalesOffer {...offer} /></>;
}
