import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface IntroContent {
  title: string;
  paragraphs: ReactNode[];
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
}
interface CityIntroSectionProps { content: IntroContent; cityName: string }

export const CityIntroSection = ({ content, cityName }: CityIntroSectionProps) => (
  <section className="py-14 md:py-20 border-y border-border">
    <div className="container-wide px-6 md:px-12">
      <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <p className="dv-eyebrow mb-5">Dla firm — {cityName}</p>
          <h2 className="text-3xl md:text-4xl font-heading leading-tight mb-6">{content.title}</h2>
          <div className="space-y-5">
            {content.paragraphs.map((paragraph, index) => <p key={index} className="text-muted-foreground leading-relaxed max-w-[65ch]">{paragraph}</p>)}
          </div>
          <p className="text-sm text-muted-foreground mt-6">Współpraca zdalna. Spotkania i produkcja na miejscu po uzgodnieniu.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/realizacje" className="dv-btn dv-btn-primary">Zobacz realizacje <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
            <Link to="/o-nas" className="dv-btn dv-btn-secondary">Poznaj FOTZ</Link>
          </div>
        </div>
        {(content.videoSrc || content.imageSrc) && <figure className="min-w-0 lg:sticky lg:top-28">
          <div className="rounded-xl overflow-hidden border border-border bg-muted">
            {content.videoSrc ? <video src={content.videoSrc} poster={content.imageSrc ?? "/fotz-reel-poster.jpg"} className="w-full aspect-video object-cover" controls playsInline preload="none" aria-label="Materiał z realizacji FOTZ Studio" /> : <img loading="lazy" decoding="async" src={content.imageSrc} alt={content.imageAlt ?? "Podgląd realizacji FOTZ Studio"} className="w-full aspect-video object-cover" />}
          </div>
          <figcaption className="text-sm text-muted-foreground mt-4">Materiały z portfolio FOTZ Studio. <Link to="/realizacje" className="underline underline-offset-4">Zobacz zakres wykonanych prac</Link>.</figcaption>
        </figure>}
      </div>
    </div>
  </section>
);
