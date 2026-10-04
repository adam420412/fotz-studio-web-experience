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
            {playing ? <video className="w-full h-full object-contain" src="/videos/fotz-reel-web.mp4" poster="/videos/enea-stadion-cover.webp" controls autoPlay playsInline aria-label="Enea Stadion — film FOTZ Studio" /> :
              <button type="button" onClick={() => setPlaying(true)} className="relative block w-full h-full overflow-hidden text-left group focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white" aria-label="Odtwórz film Enea Stadion — produkcja FOTZ Studio, 30 sekund">
                <img src="/videos/enea-stadion-cover.webp" alt="" className="w-full h-full object-cover" width="1276" height="720" fetchPriority="high" />
                <span aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(5,10,18,.3) 0%, rgba(5,10,18,0) 35%, rgba(5,10,18,.92) 100%)" }} />
                <span aria-hidden="true" className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7" style={{ color: "#fff" }}>
                  <span className="flex items-center justify-between gap-3 dv-mono text-[10px] sm:text-xs uppercase tracking-[.14em]">
                    <span>Wybrana realizacja</span>
                    <span className="rounded-full border border-white/25 bg-black/30 px-2.5 py-1 tabular-nums">00:30</span>
                  </span>
                  <span className="flex items-end justify-between gap-4">
                    <span>
                      <span className="block text-[clamp(26px,3.5vw,40px)] leading-none tracking-[-.04em]">Enea Stadion</span>
                      <span className="block mt-2 text-xs sm:text-sm text-white/80">Zobacz emocje z bliska</span>
                    </span>
                    <span className="flex shrink-0 items-center justify-center rounded-full w-12 h-12 sm:w-14 sm:h-14 border border-white/40 bg-white/10 backdrop-blur-sm motion-safe:transition-colors group-hover:bg-white/25 group-focus-visible:bg-white/25">
                      <Play aria-hidden="true" className="w-5 h-5 ml-0.5" fill="currentColor" />
                    </span>
                  </span>
                </span>
              </button>}
          </div>
          <figcaption className="px-5 py-4 flex flex-wrap justify-between gap-2 text-sm"><span>Produkcja FOTZ Studio</span><Link to="/uslugi/produkcja-video" className="underline underline-offset-4">Poznaj ofertę video</Link></figcaption>
        </figure>
      </div>
    </section>
  );
}
