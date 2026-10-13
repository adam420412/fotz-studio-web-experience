import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer } from '@/components/SalesOffer';
import { videoMarketingOffer } from '@/data/acquisition-offers';

export default function VideoMarketing() {
  return <>
    <SEOHead title="Video marketing dla firm — strategia i produkcja | FOTZ" description="Video marketing: materiały wideo do oferty, YouTube i social media. Plan, nagrania, montaż oraz pomiar. Zobacz realizacje FOTZ i zaplanuj treści video." canonical="https://www.fotz-studio.pl/uslugi/video-marketing" />
    <SalesOffer {...videoMarketingOffer} />
  </>;
}
