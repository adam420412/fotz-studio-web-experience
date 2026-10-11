import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { ecommerceOffer as offer } from '@/data/ecommerce-offer';
export default function EcommerceTworzenie() {
  return <><SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} /><SalesOffer {...offer} /></>;
}
