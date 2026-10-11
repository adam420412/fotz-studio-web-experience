import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { videoMarketingOffer } from '@/data/acquisition-offers';

export default function VideoMarketing() {
  return <>
    <SEOHead title="Video marketing dla firm — strategia i materiały | FOTZ Studio" description="Video marketing dla firm: plan treści, filmy, rolki i wersje do reklam. Zobacz realizacje FOTZ, sposób wyceny oraz pomiar działań i zaplanuj nagrania." canonical="https://www.fotz-studio.pl/uslugi/video-marketing" />
    <SalesOffer {...videoMarketingOffer} />
  </>;
}
