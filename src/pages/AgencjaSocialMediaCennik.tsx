import { Link } from "react-router-dom";
import { ArrowRight, Check, Calculator, Sparkles } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import {
  BreadcrumbSchema,
  ServiceSchema,
} from "@/components/seo/StructuredData";
import { getSocialMediaGuide } from "@/data/socialMediaGuides";
import { SM_PILLAR_PATH, SM_CLUSTERS_BY_SLUG } from "@/data/socialMediaClusters";
import { useClusterArticles } from "@/hooks/useClusterArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CANONICAL = "https://www.fotz-studio.pl/agencja-social-media/cennik";

interface Tier {
  name: string;
  tagline: string;
  pricePln: number;
  highlight?: boolean;
  badge?: string;
  includes: string[];
  bestFor: string;
}

const TIERS: Tier[] = [
  {
    name: "Start",
    tagline: "Start profesjonalnej komunikacji",
    pricePln: 2900,
    bestFor: "Firmy lokalne, MŚP wchodzące w SM",
    includes: [
      "1 kanał (Instagram lub Facebook)",
      "8 postów / miesiąc",
      "4 Reels / Stories miesięcznie",
      "Strategia treści na 30 dni",
      "Moderacja komentarzy w godz. 9–17",
      "Raport miesięczny + statystyki",
      "Konsultacje 1×/mies. (30 min)",
    ],
  },
  {
    name: "Business",
    tagline: "Pełna obecność na 2–3 platformach",
    pricePln: 5900,
    highlight: true,
    badge: "Najczęściej wybierany",
    bestFor: "Marki rosnące, e-commerce, B2B",
    includes: [
      "Do 3 kanałów (IG + FB + TikTok / LinkedIn)",
      "16 postów + 12 Reels / miesiąc",
      "Sesja foto/video raz na kwartał",
      "Strategia + content plan kwartalny",
      "Moderacja 7 dni w tygodniu",
      "Dedykowany Account Manager",
      "Raport + spotkanie strategiczne 1×/mies.",
      "Wsparcie reklamowe Meta Ads (budżet po stronie klienta)",
    ],
  },
  {
    name: "Premium",
    tagline: "Pełna obsługa marki premium",
    pricePln: 12900,
    bestFor: "Marki premium, sieci, projekty wizerunkowe",
    includes: [
      "Wszystkie kluczowe platformy",
      "Nielimitowana liczba postów + Reels",
      "Comiesięczna sesja video w studio Fotz",
      "Strategia komunikacji + tone of voice",
      "Moderacja 24/7 + crisis management",
      "Kampanie Meta / TikTok / YouTube Ads",
      "Współpraca z influencerami (max 2/mies.)",
      "Dedykowany zespół (AM + strateg + grafik + filmowiec)",
      "Kwartalny strategiczny offsite z klientem",
    ],
  },
];

const FAQS = [
  {
    q: "Czy ceny są netto?",
    a: "Tak. Wszystkie pakiety podane są w cenach netto miesięcznie. Do faktury doliczamy 23% VAT.",
  },
  {
    q: "Na jaki okres podpisujemy umowę?",
    a: "Okres współpracy i zasady wypowiedzenia określamy w ofercie oraz umowie. Warto dopasować harmonogram do celu i cyklu zakupowego klientów.",
  },
  {
    q: "Czy budżet reklamowy wlicza się w pakiet?",
    a: "Nie. Pakiet obejmuje obsługę i kreację. Budżet reklamowy (Meta Ads, TikTok Ads, Google Ads) płacisz bezpośrednio do platform i jest osobno rozliczany.",
  },
  {
    q: "Czy mogę zmienić pakiet w trakcie współpracy?",
    a: "Zmianę zakresu i jej wpływ na cenę oraz terminy uzgadniamy indywidualnie. Warunki zmiany powinny być potwierdzone przed rozpoczęciem dodatkowych prac.",
  },
  {
    q: "Czy oferujecie indywidualną wycenę?",
    a: "Tak. Jeśli potrzebujesz nietypowego zakresu (np. tylko produkcja video lub konkretny rynek zagraniczny), przygotujemy ofertę uszytą na miarę.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function AgencjaSocialMediaCennik() {
  const { data: articles = [], isError, refetch } = useClusterArticles("cennik");
  const guide = getSocialMediaGuide(SM_CLUSTERS_BY_SLUG.cennik);

  return (
    <>
      <SEOHead
        title="Cennik agencji social media 2026 — pakiety od 2900 zł"
        description="Aktualne pakiety obsługi social media: Start 2900 zł, Business 5900 zł, Premium 12900 zł netto/mies. Sprawdź zakres i porównaj zakres dla swojej marki."
        canonical={CANONICAL}
        keywords="cennik agencja social media, pakiety social media, ceny obsługi social media"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja social media", url: `https://www.fotz-studio.pl${SM_PILLAR_PATH}` },
          { name: "Cennik", url: CANONICAL },
        ]}
      />
      <ServiceSchema
        name="Obsługa agencji social media — pakiety"
        description="Trzy pakiety abonamentowe obsługi social media: Start (2900 zł), Business (5900 zł), Premium (12900 zł) netto miesięcznie."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Layout>
        <section className="container-wide px-6 md:px-12 pt-40 pb-16">
          <nav aria-label="Ścieżka nawigacji" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <Link to={SM_PILLAR_PATH} className="hover:text-foreground">Agencja social media</Link>
            <span className="mx-2">/</span>
            <span aria-current="page" className="text-foreground">Cennik</span>
          </nav>

          <span className="dv-eyebrow-muted">Zakres i wycena</span>
          <h1 className="font-geist text-4xl md:text-6xl tracking-[-0.03em] mt-2 mb-6 max-w-3xl leading-[1.05]">
            Cennik agencji social media
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Porównaj zakres publikacji, produkcji i obsługi reklam. Ceny podano netto miesięcznie.
            Ostateczny zakres, harmonogram i warunki współpracy potwierdzamy w ofercie.
          </p>
        </section>

        {/* Tiers */}
        <section className="container-wide px-6 md:px-12 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <Card
                key={tier.name}
                className={
                  tier.highlight
                    ? "relative border-[color:var(--dv-accent-pink)] bg-gradient-to-b from-[color:var(--dv-accent-pink)]/[0.06] to-transparent"
                    : "relative bg-card"
                }
              >
                {tier.badge && (
                  <Badge className="absolute -top-3 left-6 bg-[color:var(--dv-accent-pink)] text-white border-0">
                    {tier.badge}
                  </Badge>
                )}
                <CardContent className="p-6 lg:p-8 flex flex-col h-full">
                  <div className="mb-6">
                    <h2 className="font-geist text-2xl tracking-[-0.02em]">{tier.name}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{tier.tagline}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex flex-col xl:flex-row xl:items-baseline gap-2">
                      <span className="text-4xl font-medium whitespace-nowrap">
                        {tier.pricePln.toLocaleString("pl-PL")} zł
                      </span>
                      <span className="text-sm text-muted-foreground">netto / mies.</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">Dla: {tier.bestFor}</p>
                  </div>
                  <ul className="space-y-2.5 mb-8 flex-1">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-2.5 text-sm">
                        <Check className="w-4 h-4 text-[color:var(--dv-accent-pink)] shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/kontakt"
                    className={
                      tier.highlight
                        ? "dv-btn dv-btn-primary w-full justify-center"
                        : "dv-btn dv-btn-secondary w-full justify-center"
                    }
                  >
                    Wybieram {tier.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {guide.map((section) => (
              <div key={section.title} className="dv-panel p-6 md:p-8">
                <h2 className="font-geist text-2xl mb-4">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.text}</p>
              </div>
            ))}
          </div>
          <Link to="/kontakt" className="dv-btn dv-btn-secondary mt-6">Prześlij brief do wyceny <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link>
        </section>

        {/* Calculator teaser */}
        <section className="container-wide px-6 md:px-12 pb-20">
          <div className="rounded-2xl border border-[color:var(--dv-hair)] bg-card/40 p-6 md:p-12 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="flex flex-col sm:flex-row items-start gap-4 max-w-2xl">
              <div className="w-12 h-12 rounded-xl bg-[color:var(--dv-accent-pink)]/15 flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5 text-[color:var(--dv-accent-pink)]" />
              </div>
              <div>
                <h2 className="font-geist text-2xl tracking-[-0.02em] mb-2">
                  Potrzebujesz precyzyjnej wyceny?
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sprawdź orientacyjny zakres w kalkulatorze. Szczegółową wycenę przygotujemy
                  po omówieniu celu, potrzebnych materiałów i sposobu współpracy.
                </p>
              </div>
            </div>
            <Link to="/kalkulator-cen" className="dv-btn dv-btn-primary shrink-0">
              Otwórz kalkulator
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="container-wide px-6 md:px-12 pb-20">
          <span className="dv-eyebrow-muted">FAQ</span>
          <h2 className="font-geist text-3xl md:text-4xl tracking-[-0.02em] mt-2 mb-10">
            Najczęściej zadawane pytania
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FAQS.map((f) => (
              <div key={f.q} className="rounded-xl border border-[color:var(--dv-hair)] bg-card/40 p-6">
                <h3 className="font-medium mb-2 text-foreground">{f.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {isError && (
          <section className="container-wide px-6 md:px-12 pb-12" aria-label="Dodatkowe artykuły">
            <div role="alert" className="dv-panel p-6">
              <p className="text-muted-foreground mb-4">Nie udało się wczytać dodatkowych artykułów o cenach.</p>
              <button type="button" onClick={() => void refetch()} className="dv-btn dv-btn-secondary">Spróbuj ponownie</button>
            </div>
          </section>
        )}
        {/* Related articles from cluster */}
        {articles.length > 0 && (
          <section className="container-wide px-6 md:px-12 pb-20">
            <span className="dv-eyebrow-muted">Pogłębione artykuły</span>
            <h2 className="font-geist text-3xl md:text-4xl tracking-[-0.02em] mt-2 mb-8">
              O cenach i rozliczeniach
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {articles.slice(0, 9).map((a) => (
                <Link
                  key={a.id}
                  to={`/blog/${a.slug}`}
                  className="group rounded-xl border border-[color:var(--dv-hair)] bg-card/40 p-5 hover:border-[color:var(--dv-accent-pink)] transition-colors"
                >
                  <h3 className="font-medium text-foreground group-hover:text-[color:var(--dv-accent-pink)] transition-colors line-clamp-2">
                    {a.title}
                  </h3>
                  {a.excerpt && (
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{a.excerpt}</p>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="container-wide px-6 md:px-12 pb-24">
          <div className="rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-10 md:p-14 text-center">
            <Sparkles className="w-8 h-8 text-white/80 mx-auto mb-4" />
            <h2 className="font-geist text-3xl md:text-4xl text-white tracking-[-0.02em] mb-4">
              Nie wiesz, jaki zakres wybrać?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Umów 15 minut rozmowy. Omówimy zakres dopasowany do Twoich celów,
              branży i etapu marki.
            </p>
            <Link
              to="/konsultacja"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-medium hover:bg-white/90 transition-colors"
            >
              Bezpłatna konsultacja
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}