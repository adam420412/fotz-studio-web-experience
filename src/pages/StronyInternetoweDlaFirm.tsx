import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { companyWebsiteOffer } from '@/data/acquisition-offers';

export default function StronyInternetoweDlaFirm() {
  return <>
    <SEOHead title="Strony internetowe dla firm — tworzenie i oferta | FOTZ" description="Tworzymy i projektujemy strony WWW dla firm. Poznaj realizacje, zakres, CMS i wycenę profesjonalnej strony dla Twojej firmy. Zaplanuj projekt z FOTZ." canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe-dla-firm" />
    <SalesOffer {...companyWebsiteOffer} />
  </>;
}
