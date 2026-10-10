import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { websiteOffer as offer } from '@/data/sales-offers';
export default function StronyInternetowe() {
  return <><SEOHead title="Tworzenie stron internetowych dla firm — zakres i wycena | FOTZ" description="Strony firmowe, sklepy i przebudowa istniejących witryn. Zobacz projekty FPS, RPPG i Klagem, zakres prac oraz zasady wyceny strony w FOTZ Studio." canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe" /><SalesOffer {...offer} /></>;
}
