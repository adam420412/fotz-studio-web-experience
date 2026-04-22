import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Pirate Metrics (AARRR)?",
    answer: "Pirate Metrics (AARRR) to framework analizy wzrostu stworzony przez Dave'a McClure'a, opisujący pięć kluczowych etapów cyklu życia użytkownika: Acquisition (pozyskanie), Activation (aktywacja), Retention (retencja), Revenue (przychód), Referral (polecenie). Nazwa pochodzi od dźwięku AARRR! (piracki okrzyk). Framework pomaga zidentyfikować bottlenecki w growth funnel — gdzie tracimy użytkowników i gdzie jest największa szansa na optymalizację. Szczególnie popularny w SaaS, consumer apps i startupach.",
  },
  {
    question: "Co to jest Acquisition w AARRR?",
    answer: "Acquisition to etap pozyskiwania nowych użytkowników lub leadów. Metryki Acquisition: liczba nowych visitors/signups/leads per kanał, CAC per kanał, conversion rate z visitor do signup, blended CAC. Kanały Acquisition: SEO/content, paid ads (Google/Meta), social media, referral, partnerships, outbound sales. Kluczowe pytania: Skąd pochodzi nasz traffic? Który kanał jest najbardziej efektywny kosztowo? Jaki jest CAC per kanał? Optimization: testuj landing pages, CTA, messaging; optymalizuj pod najniższy CAC przy zachowaniu jakości leadów.",
  },
  {
    question: "Co to jest Activation w AARRR?",
    answer: "Activation to moment gdy użytkownik doświadcza pierwszej 'AHA moment' — pojmuje wartość produktu. Metryki Activation: % użytkowników którzy ukończyli onboarding, czas do AHA moment, % aktywowanych kont. AHA moment jest różny dla każdego produktu: Slack = zaproszenie 2+ kolegów, Airbnb = pierwsza rezerwacja, Twitter = obserwowanie 30+ kont. Najważniejszy etap do optymalizacji — słaba Activation oznacza, że płacisz za Acquisition użytkowników, którzy nie widzą wartości produktu. Optimization: uprość onboarding, skróć czas do AHA moment, proactive email/in-app guidance.",
  },
  {
    question: "Co to jest Retention i dlaczego jest najważniejszy?",
    answer: "Retention to % użytkowników wracających do produktu po pierwszym użyciu. Retention to fundament wzrostu — bez retencji całe Acquisition i Activation to lejek do kosza. Metryki Retention: Day 1/7/30 Retention, Monthly Active Users (MAU), Stickiness (DAU/MAU), Churn Rate. Leaky bucket: jeśli churn jest wysoki, każdy wzrost w Acquisition tylko uzupełnia odpływ. Dobra Retention SaaS: miesięczny churn poniżej 2% (tj. roczny poniżej 22%). Optimization: regular cadence komunikacji, feature discovery, customer success, in-app nudges, win-back campaigns.",
  },
  {
    question: "Co to jest Revenue i Referral w AARRR?",
    answer: "Revenue — monetyzacja z aktywowanych i zatrzymanych użytkowników. Metryki: MRR, ARPU, LTV, LTV/CAC ratio, conversion free-to-paid. Optymalizacja Revenue: pricing experiments, upsell/cross-sell, annual plans (zmniejszają churn), expansion revenue. Referral — użytkownicy polecają produkt innym, tworząc organiczny wzrost. Metryki: Viral Coefficient (K-factor), referral conversion rate, % nowych userów z referralu. K-factor powyżej 1 = produkt rośnie organicznie (każdy user przynosi więcej niż 1 nowego usera). Optimization: referral programs, sharing features w produkcie, invite mechanics.",
  },
];

const aarrrStages = [
  {
    litera: "A",
    etap: "Acquisition",
    pytanie: "Jak użytkownicy nas znajdują?",
    metryki: ["Nowi visitors / signups", "CAC per kanał", "Conversion rate landing page", "Traffic per source"],
    optimization: "Testuj CTA, landing pages, kanały pozyskania; skaluj najniższy CAC",
    kolor: "blue",
  },
  {
    litera: "A",
    etap: "Activation",
    pytanie: "Czy użytkownicy doświadczają wartości?",
    metryki: ["% ukończony onboarding", "Czas do AHA moment", "% aktywowanych kont", "Feature adoption rate"],
    optimization: "Skróć czas do AHA moment, uprość onboarding, dodaj in-app guidance",
    kolor: "green",
  },
  {
    litera: "R",
    etap: "Retention",
    pytanie: "Czy użytkownicy wracają?",
    metryki: ["Day 1/7/30 Retention", "Monthly churn rate", "DAU/MAU ratio", "Cohort retention curves"],
    optimization: "Engagement campaigns, customer success, habit-forming features",
    kolor: "purple",
  },
  {
    litera: "R",
    etap: "Revenue",
    pytanie: "Jak generujemy przychody?",
    metryki: ["MRR / ARR", "ARPU", "LTV/CAC", "Free-to-paid conversion"],
    optimization: "Pricing tests, upsell flows, annual plan incentives, expansion revenue",
    kolor: "orange",
  },
  {
    litera: "R",
    etap: "Referral",
    pytanie: "Czy użytkownicy nas polecają?",
    metryki: ["Viral Coefficient (K-factor)", "NPS", "% nowych userów z referralu", "Referral conversion rate"],
    optimization: "Referral program, sharing mechanics w produkcie, community building",
    kolor: "red",
  },
];

const aarrrBenchmarks = [
  { etap: "Acquisition", metryka: "Landing page CVR", dobre: "3–8%", świetne: "10%+", branża: "SaaS signup page" },
  { etap: "Activation", metryka: "Onboarding completion", dobre: "40–60%", świetne: "70%+", branża: "SaaS" },
  { etap: "Retention", metryka: "Day 30 Retention", dobre: "15–25%", świetne: "30%+", branża: "Consumer apps" },
  { etap: "Retention", metryka: "Monthly churn (SaaS)", dobre: "1–2%", świetne: "Poniżej 1%", branża: "SaaS B2B" },
  { etap: "Revenue", metryka: "Free-to-paid CVR", dobre: "2–5%", świetne: "10%+", branża: "Freemium SaaS" },
  { etap: "Referral", metryka: "Viral Coefficient (K)", dobre: "0.3–0.7", świetne: "1.0+", branża: "Consumer apps" },
];

export default function BlogAarrrPirateMetrics() {
  return (
    <Layout>
      <SEOHead
        title="AARRR Pirate Metrics — framework wzrostu startupu | Fotz.pl"
        description="AARRR Pirate Metrics — Acquisition, Activation, Retention, Revenue, Referral. Jak używać frameworku do identyfikacji bottlenecków wzrostu. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/aarrr-pirate-metrics-framework-wzrostu"

        keywords="AARRR Pirate Metrics, AARRR Pirate Metrics co to jest, AARRR Pirate Metrics jak działa, AARRR Pirate Metrics definicja, AARRR Pirate Metrics przykłady, AARRR Pirate Metrics poradnik, AARRR Pirate Metrics przewodnik"

        canonical="https://fotz.pl/blog/aarrr-pirate-metrics-framework-wzrostu"
      />
      <ArticleSchema
        title="AARRR Pirate Metrics — framework wzrostu startupu"
        description="Kompletny przewodnik po Pirate Metrics AARRR: 5 etapów, metryki, benchmarki i optymalizacja funnel wzrostu."
        url="https://fotz.pl/blog/aarrr-pirate-metrics-framework-wzrostu"
        datePublished="2024-02-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "AARRR Pirate Metrics", url: "https://fotz.pl/blog/aarrr-pirate-metrics-framework-wzrostu" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "AARRR Pirate Metrics", url: "/blog/aarrr-pirate-metrics-framework-wzrostu" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Growth i Metryki
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AARRR — Pirate Metrics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Każdy startup i SaaS traci użytkowników na każdym etapie funnel wzrostu.
              Pirate Metrics pokazuje dokładnie gdzie jest największy wyciek — i gdzie
              optymalizacja przyniesie największy zwrot.
            </p>
            <div className="flex gap-3 mb-6">
              {["A — Acquisition", "A — Activation", "R — Retention", "R — Revenue", "R — Referral"].map((s, i) => (
                <div key={i} className="bg-white/10 rounded-lg px-3 py-2 text-center flex-1">
                  <div className="text-xs text-gray-300">{s}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapy AARRR */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 etapów Pirate Metrics</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy etap funnel ma swoje pytanie, metryki i dźwignie optymalizacji.
              Zacznij od etapu z największym wyciekiem — tam jest największa szansa.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {aarrrStages.map((s, i) => (
              <FadeInView key={s.etap}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  s.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-black text-3xl w-12 h-12 flex items-center justify-center flex-shrink-0 rounded-xl ${
                      s.kolor === "blue" ? "bg-blue-600 text-white" :
                      s.kolor === "green" ? "bg-green-600 text-white" :
                      s.kolor === "purple" ? "bg-purple-600 text-white" :
                      s.kolor === "orange" ? "bg-orange-600 text-white" :
                      "bg-red-700 text-white"
                    }`}>
                      {s.litera}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-xl mb-1">{s.etap}</h3>
                      <p className={`text-sm italic mb-3 ${
                        s.kolor === "blue" ? "text-blue-700" :
                        s.kolor === "green" ? "text-green-700" :
                        s.kolor === "purple" ? "text-purple-700" :
                        s.kolor === "orange" ? "text-orange-700" :
                        "text-red-700"
                      }`}>{s.pytanie}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-2">Kluczowe metryki</div>
                          <ul className="space-y-1">
                            {s.metryki.map((m) => (
                              <li key={m} className="text-xs text-gray-700 flex gap-1">
                                <span className="text-gray-400">•</span>{m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-2">Optymalizacja</div>
                          <p className="text-xs text-gray-700">{s.optimization}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki AARRR</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Benchmarki pomagają zidentyfikować gdzie jesteś poniżej standardu branżowego
              i gdzie powinieneś skupić wysiłek optymalizacyjny.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Etap</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Metryka</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Dobre</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Świetne</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Kontekst</th>
                </tr>
              </thead>
              <tbody>
                {aarrrBenchmarks.map((b, i) => (
                  <tr key={`${b.etap}-${b.metryka}`} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm font-semibold text-gray-700">{b.etap}</td>
                    <td className="p-4 text-sm text-gray-800">{b.metryka}</td>
                    <td className="p-4 text-sm text-blue-700 font-medium">{b.dobre}</td>
                    <td className="p-4 text-sm text-green-700 font-bold">{b.świetne}</td>
                    <td className="p-4 text-xs text-gray-500">{b.branża}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="aarrr-pirate-metrics-framework-wzrostu" />
      <ContactSection />
    </Layout>
  );
}
