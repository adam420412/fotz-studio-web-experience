import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

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

export function HeroV3() {
  return (
    <section
      className="relative grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] isolate pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40"
      style={{
        minHeight: "100vh",
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
          <span>Fotz Studio · Poznań · cała Polska</span>
          <span>WWW / Social / Wideo</span>
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
            Strony internetowe, treści i kampanie dla firm. Współpracujemy online,
            a nagrania realizujemy u Ciebie lub w uzgodnionej lokalizacji.
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
              <span style={{ color: "rgb(230,130,170)" }}>↗</span>
              Porozmawiajmy o Twojej firmie
            </span>
            <span className="hidden md:inline-block w-px h-3.5 bg-[color:var(--dv-hair)]" />
            <a href="tel:+48790814814" className="hover:text-foreground transition-colors">
              +48 790 814 814
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 dv-mono uppercase tracking-[0.14em] text-[11px] text-[color:var(--dv-fg-muted)]">
          <span>(↓) Scroll</span>
          <span>Współpraca online</span>
          <span>FOTZ STUDIO</span>
        </div>
      </div>

      {/* RIGHT — live stats panel */}
      <div className="relative flex flex-col">
        <LiveStat label="Strony internetowe" value="WWW" sub="Oferta, realizacje i wygodny kontakt" />
        <LiveStat label="Prowadzenie profili" value="Social" sub="Pomysł, produkcja i publikacja" accent />
        <LiveStat label="Produkcja treści" value="Wideo" sub="Nagrania w Twojej firmie" />

      </div>
    </section>
  );
}
