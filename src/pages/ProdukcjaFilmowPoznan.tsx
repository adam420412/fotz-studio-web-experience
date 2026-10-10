import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { filmOffer as offer } from '@/data/sales-offers';
export default function ProdukcjaFilmowPoznan() {
  return <><SEOHead title="Produkcja filmów dla firm — realizacje, zakres i wycena | FOTZ" description="Filmy firmowe, relacje z wydarzeń i rolki. Zobacz produkcje CUPRA × Enea Stadion i materiały FOTZ Studio. Scenariusz, nagrania, montaż i wersje do publikacji." canonical="https://www.fotz-studio.pl/uslugi/produkcja-filmow" /><SalesOffer {...offer} /></>;
}
