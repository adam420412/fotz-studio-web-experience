import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { spotOffer as offer } from '@/data/sales-offers';
export default function SpotyReklamowe() {
  return <><SEOHead title="Spoty reklamowe — CUPRA i produkcje FOTZ Studio" description="Zobacz spot CUPRA × Enea Stadion i zapytaj o produkcję reklamy wideo. Pomysł, scenariusz, nagrania i montaż do Meta Ads, YouTube oraz publikacji marki." canonical="https://www.fotz-studio.pl/uslugi/produkcja-video" /><SalesOffer {...offer} /></>;
}
