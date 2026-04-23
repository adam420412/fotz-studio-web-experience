import { Link } from "react-router-dom";
import { ArrowUpRight, Play } from "lucide-react";

type LiveStatProps = {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
};

function LiveStat({ label, value, sub, accent }: LiveStatProps) {
  return (
    <div
      className="flex-1 flex flex-col justify-between relative overflow-hidden px-8 py-12 md:px-12 md:py-14 border-b border-[color:var(--dv-hair)]"
      style={{
        background: accent ? "var(--dv-brand-grad)" : "transparent",
        color: accent ? "#fff" : "hsl(var(--foreground))",
      }}
    >
      <span className="dv-mono uppercase tracking-[0.14em] text-[11px] opacity-60">
        {label}
      </span>
      <div className="mt-8">
        <div
          className="font-geist leading-none mb-3"
          style={{
            fontSize: "clamp(56px, 6vw, 96px)",
            letterSpacing: "-0.05em",
          }}
        >
          {value}
        </div>
        <div className="dv-mono uppercase tracking-[0.1em] text-xs opacity-60">
          {sub}
        </div>
      </div>
    </div>
  );
}

type VideoStatProps = {
  label: string;
  caption: string;
  sub: string;
  src: string;
  poster?: string;
};

function VideoStat({ label, caption, sub, src, poster }: VideoStatProps) {
  return (
    <div
      className="flex-1 relative overflow-hidden border-b border-[color:var(--dv-hair)] min-h-[260px] md:min-h-[300px]"
      style={{ color: "#fff" }}
    >
      {/* Autoplay video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />

      {/* Readability gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* Copy */}
      <div className="relative h-full flex flex-col justify-between px-8 py-12 md:px-12 md:py-14">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15 backdrop-blur-sm">
            <Play className="w-3 h-3" strokeWidth={2} fill="currentColor" />
          </span>
          <span className="dv-mono uppercase tracking-[0.14em] text-[11px] opacity-85">
            {label}
          </span>
        </div>
        <div className="mt-8">
          <div
            className="font-geist leading-[0.95] mb-3"
            style={{
              fontSize: "clamp(32px, 3.2vw, 52px)",
              letterSpacing: "-0.03em",
            }}
          >
            {caption}
          </div>
          <div className="dv-mono uppercase tracking-[0.1em] text-xs opacity-75">
            {sub}
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroV3() {
  return (
    <section
      className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] isolate"
      style={{
        minHeight: "calc(100vh - 80px)",
        background: "hsl(var(--background))",
      }}
    >
      {/* Brand-gradient ambient glow — own clipping container so it doesn't
          force the section to clip and cut off text/tiles */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 10% 90%, rgba(120,20,60,0.22) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 90% 10%, rgba(20,40,80,0.28) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* LEFT — editorial copy */}
      <div className="relative flex flex-col justify-between px-6 py-14 md:px-12 md:py-16 lg:border-r border-[color:var(--dv-hair)]">
        <div className="flex flex-wrap items-center justify-between gap-3 dv-mono uppercase tracking-[0.14em] text-[11px] md:text-xs text-[color:var(--dv-fg-muted)]">
          <span>Fotz Studio · Plac Wolności 16 · Poznań</span>
          <span>52.4082° N · 16.9335° E</span>
        </div>

        <div className="py-20 md:py-24">
          <h1
            className="font-geist"
            style={{
              fontSize: "clamp(60px, 10vw, 180px)",
              letterSpacing: "-0.06em",
              lineHeight: 0.95,
              fontWeight: 400,
              paddingBottom: "0.08em",
            }}
          >
            Marketing{" "}
            <span
              className="dv-text-grad italic"
              style={{ display: "inline-block", paddingRight: "0.08em" }}
            >
              z&nbsp;dowodami.
            </span>
          </h1>

          <p
            className="mt-10 md:mt-12 text-[color:var(--dv-fg-muted)]"
            style={{
              fontSize: "clamp(18px, 1.6vw, 22px)",
              lineHeight: 1.4,
              maxWidth: 560,
            }}
          >
            Od strategii do zasięgu — własne studio, zespół na miejscu, zero
            outsourcingu. Ostatnie 12 miesięcy:
          </p>

          <div className="flex flex-wrap gap-3 mt-8 md:mt-10">
            <Link to="/kontakt" className="dv-btn dv-btn-primary">
              Bezpłatna konsultacja
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link to="/realizacje" className="dv-btn dv-btn-secondary">
              Zobacz realizacje
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-10 dv-mono uppercase tracking-[0.14em] text-[11px] text-[color:var(--dv-fg-muted)]">
            <span className="inline-flex items-center gap-2">
              <span style={{ color: "rgb(230,130,170)" }}>★★★★★</span>
              5.0 · 160+ Google
            </span>
            <span className="hidden md:inline-block w-px h-3.5 bg-[color:var(--dv-hair)]" />
            <a href="tel:+48790814814" className="hover:text-foreground transition-colors">
              +48 790 814 814
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 dv-mono uppercase tracking-[0.14em] text-[11px] text-[color:var(--dv-fg-muted)]">
          <span>(↓) Scroll</span>
          <span>Plac Wolności 16</span>
          <span>EST. 2012</span>
        </div>
      </div>

      {/* RIGHT — live stats panel */}
      <div className="relative flex flex-col">
        <LiveStat
          label="Wyświetlenia treści / mies."
          value="1M+"
          sub="Zasięg portfolio klientów"
        />
        <LiveStat
          label="Opinii Google"
          value="5.0 / 160+"
          sub="Od 2014 · stale aktualizowane"
          accent
        />
        <LiveStat
          label="Lat doświadczenia"
          value="12+"
          sub="Studio marketingu wzrostu"
        />
        <VideoStat
          label="Showreel · auto"
          caption="Fotz Reel"
          sub="Kulisy produkcji · 2024"
          src="/videos/fotz-reel.mp4"
          poster="/videos/fotz-reel-poster.jpg"
        />
      </div>
    </section>
  );
}
