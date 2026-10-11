import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { facebookOffer } from '@/data/acquisition-offers';

export default function ReklamaFacebook() {
  return <>
    <SEOHead title="Reklama na Facebooku i Instagramie — kampanie | FOTZ Studio" description="Reklama na Facebooku i Instagramie: plan kampanii, kreacje, formularze i pomiar zapytań. Zobacz realizację Dawid EDU i ustal zakres Meta Ads z FOTZ." canonical="https://www.fotz-studio.pl/uslugi/reklama-facebook" />
    <SalesOffer {...facebookOffer} />
  </>;
}
