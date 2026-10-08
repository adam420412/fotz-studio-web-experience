import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { SOCIAL_MEDIA_CLUSTERS, SM_PILLAR_PATH } from "@/data/socialMediaClusters";
import { FeaturedFilms } from "@/components/sections/FeaturedFilms";
import { SelectedWork } from "@/components/sections/SelectedWork";

const FAQ = [
  {
    q: "Ile kosztuje agencja social media?",
    a: "Koszt zależy od liczby kanałów, materiałów, produkcji video, moderacji i zakresu kampanii. Budżet emisji reklam warto oddzielić od obsługi. Prześlij brief, aby otrzymać wycenę dopasowaną do swoich celów.",
  },
  {
    q: "Co dokładnie robi agencja social media?",
    a: "Zakres może obejmować strategię, plan publikacji, zdjęcia, filmy, grafiki, teksty, moderację i reklamy. W ofercie ustalamy konkretne zadania, liczbę materiałów, sposób akceptacji i raportowania.",
  },
  {
    q: "Czy obsługujecie firmy spoza Poznania?",
    a: "Tak. Komunikację i akceptację materiałów możemy prowadzić zdalnie. Naszą bazą jest Poznań; miejsce, termin i koszty ewentualnych nagrań u klienta ustalamy w zakresie projektu.",
  },
  {
    q: "Jak długo trwa umowa?",
    a: "Okres współpracy, zasady wypowiedzenia i harmonogram prac określamy w ofercie oraz umowie. Warto dopasować czas oceny efektów do celu kampanii i cyklu zakupowego klientów.",
  },
  {
    q: "Czy dostarczacie raporty i dane?",
    a: "Zakres i częstotliwość raportowania ustalamy przed startem. W zależności od celu analizujemy zasięg, reakcje, ruch, koszty i konwersje. Przy pozyskiwaniu kontaktów potrzebna jest także informacja o ich jakości i dalszej sprzedaży.",
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
        description="Agencja social media z Poznania: strategia, prowadzenie profili, zdjęcia, rolki i kampanie reklamowe. Sprawdź zakres współpracy z FOTZ Studio."
        canonical={`https://www.fotz-studio.pl${SM_PILLAR_PATH}`}
        keywords="agencja social media, prowadzenie social media, agencja SM Poznań, Meta Ads, TikTok Ads"
        schema={faqJsonLd}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja social media", url: `https://www.fotz-studio.pl${SM_PILLAR_PATH}` },
        ]}
      />
      <ServiceSchema
        name="Agencja social media — Fotz Studio"
        description="Kompleksowa obsługa social media dla firm: strategia, content, video, reklamy Meta i TikTok, raporty."
        provider="Fotz Studio"
        areaServed="Polska"
      />

      <Layout workPlacement="manual">
        {/* HERO */}
        <section className="container-wide px-6 md:px-12 pt-40 pb-20 md:pb-28">
          <nav aria-label="Ścieżka nawigacji" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Agencja social media</span>
          </nav>

          <div className="max-w-4xl">
            <span className="dv-eyebrow-muted mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Strategia · treści · reklamy
            </span>
            <h1 className="font-geist text-5xl md:text-7xl tracking-[-0.03em] mb-6 leading-[1.05]">
              Agencja social media,<br />
              która łączy <em className="dv-text-grad not-italic">strategię i produkcję</em>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Od planu komunikacji po zdjęcia, rolki i kampanie reklamowe.
              Pomagamy firmom uporządkować obecność w social media i połączyć treści z celem biznesowym.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/kontakt" className="dv-btn dv-btn-primary group">
                Bezpłatna wycena
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="#filmy-i-rolki" className="dv-btn dv-btn-secondary">Zobacz nasze rolki</a>
            </div>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-14" aria-labelledby="social-uslugi">
          <h2 id="social-uslugi" className="font-geist text-2xl md:text-3xl mb-6">Przejdź do konkretnej usługi</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Prowadzenie profili", text: "Plan, publikacje, moderacja i raportowanie.", href: "/social-media/obsluga" },
              { title: "Zdjęcia, rolki i treści", text: "Produkcja materiałów na Twoje kanały.", href: "/social-media/content" },
              { title: "Kampanie Meta Ads", text: "Reklamy na Facebooku i Instagramie.", href: "/performance-marketing/meta-ads" },
            ].map(service => <Link key={service.href} to={service.href} className="group rounded-2xl border border-border p-6 transition-colors hover:border-primary"><h3 className="font-geist text-xl mb-2 flex items-center justify-between gap-3">{service.title}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></h3><p className="text-sm text-muted-foreground leading-relaxed">{service.text}</p></Link>)}
          </div>
        </section>

        <FeaturedFilms reelsOnly />
        <SelectedWork />

        {/* CLUSTER GRID */}
        <section className="container-wide px-6 md:px-12 py-20 md:py-28">
          <div className="mb-12">
            <span className="dv-eyebrow-muted">Zaplanuj współpracę</span>
            <h2 className="font-geist text-3xl md:text-5xl tracking-tight mt-2">
              Zakres usług, koszty i praktyczne poradniki
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
              { h: "Plan dopasowany do firmy", p: "Ustalamy odbiorców, rolę kanałów i tematy. Każdy materiał powinien mieć określony cel i następny krok dla odbiorcy." },
              { h: "Zdjęcia i produkcja video", p: "Przygotowujemy materiały do publikacji i reklam. Scenariusze, nagrania, montaż oraz formaty rozpisujemy w zakresie projektu." },
              { h: "Wnioski z danych", p: "Ocenę działań wiążemy z celem: zainteresowaniem, zapytaniami lub sprzedażą. Raport powinien prowadzić do konkretnej decyzji." },
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
              Umów 15 minut rozmowy. Opowiedz o swojej firmie, obecnych działaniach i celu, który chcesz osiągnąć.
            </p>
            <Link to="/konsultacja" className="dv-btn dv-btn-primary inline-flex">
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
