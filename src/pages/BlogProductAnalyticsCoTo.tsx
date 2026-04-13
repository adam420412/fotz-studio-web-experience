import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest product analytics?",
    answer:
      "Product analytics (analityka produktowa) to dziedzina analizy danych skupiona na zrozumieniu jak użytkownicy wchodzą w interakcję z produktem cyfrowym — co klikają, jak nawigują, gdzie rezygnują, które funkcje używają najczęściej. Celem jest podejmowanie decyzji opartych na danych, które poprawiają produkt, zwiększają zaangażowanie i retencję użytkowników.",
  },
  {
    question: "Czym product analytics różni się od web analytics?",
    answer:
      "Web analytics (Google Analytics) mierzy ruch na stronie — skąd przychodzą użytkownicy, ile czasu spędzają, które strony odwiedzają. Product analytics (Mixpanel, Amplitude) mierzy zachowania w produkcie — jak użytkownicy przechodzą przez funnel, które featury adopcją, kiedy wracają, co poprzedza churning. Web analytics = zewnętrzne metryki. Product analytics = wewnętrzne zachowania.",
  },
  {
    question: "Jakie są kluczowe metryki product analytics?",
    answer:
      "Kluczowe metryki: DAU/MAU (Daily/Monthly Active Users), Retention Rate (procent użytkowników wracających po N dniach), Feature Adoption Rate, Time to First Value (jak szybko nowy użytkownik osiąga pierwszą wartość), Activation Rate (procent nowych użytkowników wykonujących kluczowe akcje), Session Length, Churn Rate oraz NPS (Net Promoter Score).",
  },
  {
    question: "Co to jest funnel analysis w product analytics?",
    answer:
      "Funnel analysis to analiza ścieżki konwersji użytkowników przez kluczowe etapy w produkcie (np. rejestracja → aktywacja → płatność → retencja). Pokazuje na którym etapie użytkownicy rezygnują i jaki procent przechodzi przez każdy krok. Funnel analysis pozwala identyfikować największe punkty frykcji i priorytetyzować gdzie optymalizować doświadczenie.",
  },
  {
    question: "Jakie narzędzia do product analytics są najpopularniejsze?",
    answer:
      "Najpopularniejsze narzędzia: Mixpanel (event tracking, funnel, retention), Amplitude (behavioral analytics, cohorts), Heap (autocapture wszystkich eventów), FullStory (session recordings + analytics), PostHog (open-source, self-hosted), Pendo (in-app guidance + analytics) oraz Segment (Customer Data Platform do agregacji danych z wielu źródeł).",
  },
];

const paMetrics = [
  {
    kategoria: "Acquisition",
    metryki: ["New Users", "Sign-up Rate", "Source/Channel Attribution", "CAC (Customer Acquisition Cost)"],
    pytanie: "Skąd przychodzą użytkownicy i ile kosztuje ich pozyskanie?",
    narzędzia: "Google Analytics, Mixpanel, Amplitude",
  },
  {
    kategoria: "Activation",
    metryki: ["Activation Rate", "Time to First Value", "Onboarding Completion Rate", "Key Action Completion"],
    pytanie: "Czy nowi użytkownicy osiągają pierwszą wartość z produktu?",
    narzędzia: "Amplitude, Heap, Pendo",
  },
  {
    kategoria: "Engagement",
    metryki: ["DAU/MAU Ratio", "Session Frequency", "Session Length", "Feature Adoption Rate"],
    pytanie: "Jak aktywnie użytkownicy korzystają z produktu?",
    narzędzia: "Mixpanel, Amplitude, FullStory",
  },
  {
    kategoria: "Retention",
    metryki: ["Day 1/7/30 Retention", "Churn Rate", "Cohort Retention Curves", "Returning User Rate"],
    pytanie: "Czy użytkownicy wracają do produktu i jak długo pozostają?",
    narzędzia: "Amplitude, Mixpanel, Baremetrics",
  },
  {
    kategoria: "Revenue",
    metryki: ["MRR/ARR", "ARPU (Average Revenue Per User)", "LTV (Lifetime Value)", "Expansion Revenue"],
    pytanie: "Jak zachowania użytkowników przekładają się na przychody?",
    narzędzia: "Stripe, Baremetrics, ChartMogul, Amplitude",
  },
  {
    kategoria: "Referral",
    metryki: ["NPS (Net Promoter Score)", "Virality Coefficient (K-factor)", "Referral Rate", "Reviews/Ratings"],
    pytanie: "Czy użytkownicy polecają produkt innym?",
    narzędzia: "Delighted, Typeform, Appcues",
  },
];

const analysisTypes = [
  {
    typ: "Funnel Analysis",
    opis: "Analiza ścieżki konwersji przez kluczowe kroki — identyfikacja gdzie użytkownicy rezygnują",
    przykład: "Rejestracja (100%) → Aktywacja (45%) → Płatność (12%) → Odnowienie (8%)",
    zastosowanie: "Optymalizacja onboardingu, redukcja churn na etapach konwersji",
  },
  {
    typ: "Cohort Analysis",
    opis: "Grupowanie użytkowników według daty pierwszego użycia i śledzenie ich zachowań w czasie",
    przykład: "Kohorta styczeń vs. kohorta marzec — która ma wyższą retencję po 30 dniach?",
    zastosowanie: "Mierzenie wpływu zmian produktowych na retencję, identyfikacja najlepszych akwizycji",
  },
  {
    typ: "Path Analysis",
    opis: "Śledzenie rzeczywistych ścieżek nawigacji użytkowników w produkcie",
    przykład: "Co użytkownicy robią PO aktywacji? 60% idzie do Feature A, 30% do Feature B",
    zastosowanie: "Odkrywanie nioczekiwanych ścieżek, optymalizacja nawigacji i IA",
  },
  {
    typ: "Segmentation Analysis",
    opis: "Podział użytkowników na grupy według cech lub zachowań i analiza różnic",
    przykład: "Użytkownicy mobile vs. desktop — które mają lepszą retencję i dlaczego?",
    zastosowanie: "Personalizacja doświadczenia, priorytetyzacja segmentów do obsługi",
  },
  {
    typ: "Feature Adoption Analysis",
    opis: "Mierzenie jakie % użytkowników odkrywa i regularnie używa poszczególnych funkcji",
    przykład: "Feature X — 45% exposure, 20% adoption, 10% regular use",
    zastosowanie: "Priorytetyzacja roadmapy, decyzje o deprecacji lub inwestycji w featurę",
  },
];

const paTools = [
  { narzędzie: "Mixpanel", typ: "Event-based analytics", cena: "Freemium (do 20M events/mies.)", mocne: "Funnel, retention, A/B testing — dojrzałe i elastyczne" },
  { narzędzie: "Amplitude", typ: "Behavioral analytics", cena: "Freemium (do 10M events/mies.)", mocne: "Cohort analysis, Journeys, AI-powered insights" },
  { narzędzie: "Heap", typ: "Autocapture analytics", cena: "Freemium", mocne: "Autocapture wszystkich akcji bez tagowania — retroaktywna analiza" },
  { narzędzie: "FullStory", typ: "Digital experience", cena: "Płatne (od ~$299/mies.)", mocne: "Session recordings, rage clicks, frustration signals" },
  { narzędzie: "PostHog", typ: "Open-source analytics", cena: "Freemium / self-hosted", mocne: "All-in-one: analytics + heatmaps + feature flags + A/B — własny hosting" },
  { narzędzie: "Pendo", typ: "Product analytics + guidance", cena: "Płatne (enterprise)", mocne: "In-app guides, NPS, roadmap feedback — idealne dla SaaS B2B" },
];

export default function BlogProductAnalyticsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Product Analytics | Fotz Studio"
        description="Product analytics — definicja, 6 kategorii metryk (acquisition, activation, engagement, retention, revenue, referral), typy analiz i narzędzia. Kompletny…"
        canonicalUrl="https://fotz.pl/blog/product-analytics-co-to"

        keywords="Product Analytics co to jest, Product Analytics definicja, czym jest Product Analytics, Product Analytics przykłady, jak działa Product Analytics, Product Analytics znaczenie, Product Analytics przewodnik"

        canonical="https://fotz.pl/blog/product-analytics-co-to"
      />
      <ArticleSchema
        title="Product Analytics — co to jest i jak mierzyć zachowania użytkowników?"
        description="Kompletny przewodnik po product analytics: 6 kategorii metryk, 5 typów analiz (funnel, cohort, path, segmentation, feature adoption) i narzędzia."
        url="https://fotz.pl/blog/product-analytics-co-to"
        datePublished="2024-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Product Analytics", url: "https://fotz.pl/blog/product-analytics-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Product Analytics" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Product Analytics — co to jest i jak mierzyć zachowania użytkowników?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Product analytics przekształca dane o zachowaniach użytkowników w decyzje produktowe.
            Poznaj 6 kategorii metryk, 5 typów analiz i narzędzia takie jak Mixpanel, Amplitude i PostHog.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest product analytics?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Product analytics</strong> to systematyczne zbieranie, analiza i interpretacja
              danych o tym, jak użytkownicy wchodzą w interakcję z produktem cyfrowym.
              W odróżnieniu od tradycyjnej analityki webowej, product analytics skupia się
              na <em>zachowaniach wewnątrz produktu</em> — ścieżkach nawigacji, używanych funkcjach,
              momentach rezygnacji i wzorcach powracania.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy z dojrzałą kulturą product analytics podejmują decyzje 5× szybciej
              niż konkurenci opierający się na intuicji. Produkty zoptymalizowane przez
              data-driven decisions mają o 30% wyższe wskaźniki retencji.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5×", opis: "szybsze podejmowanie decyzji produktowych w firmach z dojrzałą analityką" },
                { stat: "30%", opis: "wyższe wskaźniki retencji przy data-driven product development" },
                { stat: "40%", opis: "redukcja kosztów pozyskania przez optymalizację funnel activation" },
              ].map((s, i) => (
                <div key={i} className="bg-violet-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-violet-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kategorii metryk */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">6 kategorii metryk product analytics</h2>
            <p className="text-slate-600 mb-8">
              Framework AARRR (Acquisition, Activation, Retention, Revenue, Referral) + Engagement
              — kompletny zestaw metryk dla każdego etapu cyklu życia użytkownika.
            </p>
            <div className="space-y-4">
              {paMetrics.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{cat.kategoria}</h3>
                      <p className="text-slate-500 text-sm italic">{cat.pytanie}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-violet-50 rounded p-3">
                      <p className="text-xs font-semibold text-violet-600 mb-2">Kluczowe metryki:</p>
                      <ul className="space-y-1">
                        {cat.metryki.map((m, j) => (
                          <li key={j} className="text-violet-800 text-sm flex gap-2">
                            <span className="flex-shrink-0">•</span>{m}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Narzędzia:</p>
                      <p className="text-slate-700 text-sm">{cat.narzędzia}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Typy analiz */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych typów analiz produktowych</h2>
            <div className="space-y-5">
              {analysisTypes.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{a.typ}</h3>
                  <p className="text-slate-600 mb-3">{a.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-violet-50 rounded p-3">
                      <p className="text-xs font-semibold text-violet-600 mb-1">Przykład:</p>
                      <p className="text-violet-800 italic">{a.przykład}</p>
                    </div>
                    <div className="bg-white rounded p-3 border border-slate-200">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Zastosowanie:</p>
                      <p className="text-slate-700">{a.zastosowanie}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Narzędzia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia product analytics</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Typ</th>
                    <th className="p-3 text-left">Cena</th>
                    <th className="p-3 text-left">Mocne strony</th>
                  </tr>
                </thead>
                <tbody>
                  {paTools.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-violet-700">{row.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cena}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.mocne}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — product analytics</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
