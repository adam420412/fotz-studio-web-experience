import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { companyWebsiteOffer } from '@/data/acquisition-offers';

export default function StronyInternetoweDlaFirm() {
  return <>
    <SEOHead title="Strony internetowe dla firm — projekt i wycena | FOTZ Studio" description="Tworzymy strony internetowe dla firm usługowych i produkcyjnych. Zobacz realizacje, zakres projektu, zasady wyceny i opisz stronę swojej firmy." canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe-dla-firm" />
    <SalesOffer {...companyWebsiteOffer} />
  </>;
}
