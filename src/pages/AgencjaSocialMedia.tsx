import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { SOCIAL_MEDIA_CLUSTERS, SM_PILLAR_PATH } from "@/data/socialMediaClusters";

const FAQ = [
  {
    q: "Ile kosztuje agencja social media?",
    a: "W Fotz Studio pracujemy w trzech pakietach abonamentowych: Start, Business i Premium. Konkretne stawki zależą od liczby platform, ilości reels/postów i intensywności kampanii Ads. Najszybsza droga to bezpłatna wycena pod konkretne cele.",
  },
  {
    q: "Co dokładnie robi agencja social media?",
    a: "Strategia komunikacji, plan publikacji, produkcja treści (foto, video, grafika), copywriting, prowadzenie kampanii Meta i TikTok Ads, community management, raporty miesięczne. W Fotz dochodzi produkcja premium video z cinema-grade sprzętem.",
  },
  {
    q: "Czy obsługujecie firmy spoza Poznania?",
    a: "Tak. Pracujemy zdalnie z firmami z całej Polski, regularnie spotykamy się z klientami w Warszawie, Krakowie i Wrocławiu. Produkcje video robimy w studio w Poznaniu lub na lokacji.",
  },
  {
    q: "Jak długo trwa umowa?",
    a: "Minimum 3 miesiące — w krótszym oknie nie da się sensownie zmierzyć efektów social media. Po pierwszym kwartale przechodzimy na umowę bezterminową z miesięcznym wypowiedzeniem.",
  },
  {
    q: "Czy dostarczacie raporty i dane?",
    a: "Każdego miesiąca dostajesz raport z KPI (zasięg, zaangażowanie, koszty, konwersje), komentarzem stratega i planem działań na kolejny miesiąc. Pełna transparentność.",
  },
];

const KIND_LABEL: Record<string, string> = {
  info: "Wiedza",
  city: "Miasto",
  pricing: "Cennik",
};

export default function AgencjaSocialMedia() {
  const cities = SOCIAL_MEDIA_CLUSTERS.filter((c) => c.kind === "city");
  const info = SOCIAL_MEDIA_CLUSTERS.filter((c) => c.kind === "info");
  const pricing = SOCIAL_MEDIA_CLUSTERS.filter((c) => c.kind === "pricing");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <SEOHead
        title="Agencja social media — strategia, content, reklamy | Fotz"
        description="Premium agencja social media z Poznania. Strategia, produkcja reels, kampanie Meta i TikTok Ads, raporty miesięczne. Pakiety Start, Business, Premium."
        canonical={`https://fotz.pl${SM_PILLAR_PATH}`}
        keywords="agencja social media, prowadzenie social media, agencja SM Poznań, Meta Ads, TikTok Ads"
        schema={faqJsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja social media", url: `https://fotz.pl${SM_PILLAR_PATH}` },
        ]}
      />
      <ServiceSchema
        name="Agencja social media — Fotz Studio"
        description="Kompleksowa obsługa social media dla firm: strategia, content, video, reklamy Meta i TikTok, raporty."
        provider="Fotz Studio"
        areaServed="Polska"
      />

      <Layout>
        {/* HERO */}
        <section className="container-wide px-6 md:px-12 pt-40 pb-20 md:pb-28">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Agencja social media</span>
          </nav>

          <div className="max-w-4xl">
            <span className="dv-eyebrow-muted mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Premium social media partner
            </span>
            <h1 className="font-geist text-5xl md:text-7xl tracking-[-0.03em] mb-6 leading-[1.05]">
              Agencja social media,<br />
              która robi <em className="not-italic" style={{ background: "linear-gradient(135deg,#75143F,#0F3053)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>content premium</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Strategia, reels nakręcone na kinowym sprzęcie, kampanie Meta i TikTok Ads, raporty co miesiąc.
              Pracujemy z markami premium z Poznania, Warszawy i całej Polski.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/kontakt" className="dv-btn dv-btn-primary group">
                Bezpłatna wycena
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link to="/realizacje" className="dv-btn dv-btn-secondary">
                Zobacz realizacje
              </Link>
            </div>
          </div>
        </section>

        {/* CLUSTER GRID */}
        <section className="container-wide px-6 md:px-12 pb-20 md:pb-28">
          <div className="mb-12">
            <span className="dv-eyebrow-muted">Mapa tematu</span>
            <h2 className="font-geist text-3xl md:text-5xl tracking-tight mt-2">
              20 klastrów wiedzy o agencji social media
            </h2>
          </div>

          <ClusterGroup title="Cennik i modele współpracy" items={pricing} />
          <ClusterGroup title="Miasta" items={cities} />
          <ClusterGroup title="Wiedza i porównania" items={info} />
        </section>

        {/* WHY */}
        <section className="container-wide px-6 md:px-12 pb-20 md:pb-28">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { h: "Strategia, nie ścianka contentu", p: "Każdy post wynika z planu, nie z kalendarza. Mierzymy zasięg, ale rozliczamy się z konwersji." },
              { h: "Cinema-grade produkcja video", p: "Reels nagrywane w naszym studio w Poznaniu na profesjonalnym sprzęcie filmowym, nie z telefonu." },
              { h: "Transparentny reporting", p: "Co miesiąc raport z KPI, komentarzem stratega i planem na kolejny okres. Bez ściemy." },
            ].map((x) => (
              <div key={x.h} className="p-8 rounded-2xl border border-[color:var(--dv-hair)]">
                <CheckCircle2 className="w-6 h-6 mb-4" style={{ color: "var(--dv-accent-pink)" }} strokeWidth={1.5} />
                <h3 className="font-geist text-xl tracking-tight mb-3">{x.h}</h3>
                <p className="text-muted-foreground leading-relaxed">{x.p}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="container-wide px-6 md:px-12 pb-20 md:pb-28">
          <div className="max-w-3xl">
            <span className="dv-eyebrow-muted">FAQ</span>
            <h2 className="font-geist text-3xl md:text-5xl tracking-tight mt-2 mb-10">
              Najczęstsze pytania
            </h2>
            <div className="space-y-4">
              {FAQ.map((f) => (
                <details key={f.q} className="group p-6 rounded-xl border border-[color:var(--dv-hair)]">
                  <summary className="cursor-pointer font-geist text-lg tracking-tight list-none flex items-center justify-between">
                    <span>{f.q}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-open:rotate-90" strokeWidth={1.5} />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container-wide px-6 md:px-12 pb-24 md:pb-32">
          <div className="rounded-3xl p-10 md:p-16 text-center" style={{ background: "linear-gradient(135deg,#75143F,#0F3053)" }}>
            <h2 className="font-geist text-3xl md:text-5xl tracking-tight mb-4 text-white">
              Porozmawiajmy o Twoich social mediach
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Bezpłatna konsultacja 30 minut — dostajesz analizę profilu i pomysły na 3 reels, niezależnie od decyzji.
            </p>
            <Link to="/kontakt" className="dv-btn dv-btn-primary inline-flex">
              Umów konsultację
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

function ClusterGroup({
  title,
  items,
}: {
  title: string;
  items: typeof SOCIAL_MEDIA_CLUSTERS;
}) {
  if (!items.length) return null;
  return (
    <div className="mb-12">
      <h3 className="font-geist-mono text-xs uppercase tracking-[0.18em] text-muted-foreground mb-5">
        {title}
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((c) => (
          <Link
            key={c.slug}
            to={c.path}
            className="group p-6 rounded-2xl border border-[color:var(--dv-hair)] hover:border-[color:var(--dv-accent-pink)] transition-colors"
          >
            <span className="font-geist-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {KIND_LABEL[c.kind]}
            </span>
            <h4 className="font-geist text-lg tracking-tight mt-2 mb-2 group-hover:text-[color:var(--dv-accent-pink)] transition-colors">
              {c.title}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {c.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}