import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { facebookOffer } from '@/data/acquisition-offers';

export default function ReklamaFacebook() {
  return <>
    <SEOHead title="Reklama na Facebooku — kampanie Meta Ads | FOTZ Studio" description="Reklama na Facebooku: kampanie Facebook Ads, kreacje, budżet i pomiar. Zobacz realizacje FOTZ, ustal zakres Meta Ads i zaplanuj pozyskiwanie zapytań." canonical="https://www.fotz-studio.pl/uslugi/reklama-facebook" />
    <SalesOffer {...facebookOffer} />
  </>;
}
