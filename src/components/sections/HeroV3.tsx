import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";
import { business } from "@/data/business.mjs";

export function HeroV3() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="pt-28 pb-12 md:pt-36 md:pb-20 relative overflow-hidden" style={{ background: "hsl(var(--background))" }}>
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 20%, rgba(120,20,60,.18), transparent 60%)" }} />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
        <div className="min-w-0">
          <p className="dv-eyebrow mb-6">FOTZ Studio · Agencja marketingowa · Poznań</p>
          <h1 className="font-geist text-[clamp(44px,6.5vw,96px)] leading-[1.02] tracking-[-.05em]">Twoja marka.<br /><span className="dv-text-grad italic">Od pomysłu<br className="hidden lg:block" /> do publikacji.</span></h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">Tworzymy strony internetowe, filmy i komunikację w social media. Łączymy je z reklamą i SEO, żeby odbiorca mógł poznać Twoją ofertę i łatwo się skontaktować.</p>
          <div className="flex flex-wrap gap-3 mt-7">
            <Link to={business.consultationPath} className="dv-btn dv-btn-primary">Konsultacja 15 min <ArrowUpRight className="w-4 h-4" /></Link>
            <Link to="/realizacje" className="dv-btn dv-btn-secondary">Zobacz realizacje</Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{business.address} · <a className="underline underline-offset-4" href={business.phoneHref}>{business.phone}</a></p>
        </div>
        <figure className="min-w-0 rounded-2xl overflow-hidden border border-border bg-card">
          <div className="aspect-video relative bg-black">
            {playing ? <video className="w-full h-full object-contain" src="/videos/fotz-reel-web.mp4" controls autoPlay playsInline aria-label="Showreel FOTZ Studio" /> :
              <button type="button" onClick={() => setPlaying(true)} className="relative w-full h-full group focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary" aria-label="Odtwórz showreel FOTZ Studio">
                <img src="/videos/fotz-reel-poster.jpg" alt="Kadr z showreela FOTZ Studio" className="w-full h-full object-cover" width="960" height="540" />
                <span className="absolute inset-0 bg-black/20 flex items-center justify-center"><span style={{background:'#fff',color:'#111'}} className="flex items-center justify-center rounded-full w-16 h-16 group-hover:scale-105 transition-transform"><Play className="w-6 h-6" fill="currentColor" /></span></span>
              </button>}
          </div>
          <figcaption className="px-5 py-4 flex flex-wrap justify-between gap-2 text-sm"><span>FOTZ Reel · nasze produkcje</span><Link to="/uslugi/produkcja-video" className="underline underline-offset-4">Poznaj ofertę video</Link></figcaption>
        </figure>
      </div>
    </section>
  );
}
