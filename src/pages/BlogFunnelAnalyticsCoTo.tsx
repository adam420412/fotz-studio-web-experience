import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest funnel analytics?",
    answer:
      "Funnel analytics (analityka lejka) to technika pomiaru przepływu użytkowników przez sekwencję kroków prowadzących do celu — rejestracji, zakupu, onboardingu. Pozwala zobaczyć na którym etapie użytkownicy rezygnują (drop-off) i jak duży procent przechodzi przez każdy krok (conversion rate). Lejek konwersji to fundamentalne narzędzie product analytics i CRO — bez niego optymalizacja konwersji jest strzelaniem na ślepo.",
  },
  {
    question: "Jakie są rodzaje funneli?",
    answer:
      "Główne typy: Acquisition funnel (lejek pozyskania — od wizyty do rejestracji), Onboarding funnel (lejek wdrożenia — od rejestracji do aha moment), Conversion funnel (lejek zakupu — od trial do płatnego planu), Checkout funnel (lejek zakupowy — koszyk → dane → płatność → potwierdzenie), Feature adoption funnel (lejek adopcji funkcji — discovery → first use → habitual use). Różne produkty potrzebują różnych funneli — zacznij od najważniejszej konwersji biznesowej.",
  },
  {
    question: "Co to jest conversion rate i jak go poprawić?",
    answer:
      "Conversion rate to procent użytkowników którzy przechodzą z jednego kroku lejka do następnego. CR = (Użytkownicy na kroku N+1 / Użytkownicy na kroku N) × 100%. Poprawa: 1) Zidentyfikuj największy drop-off (krok z najniższym CR), 2) Zbadaj przyczyny (session replay, user interviews, heatmapy), 3) Sformułuj hipotezę, 4) Przeprowadź A/B test, 5) Wdrożnij zwycięskie rozwiązanie, 6) Mierz efekt na cały lejek. Optymalizuj krok z najwyższym drop-off — największy impact na całość.",
  },
  {
    question: "Czym różni się lejek liniowy od nieliniowego?",
    answer:
      "Lejek liniowy zakłada że użytkownicy przechodzą przez kroki po kolei (A → B → C). To tradycyjny model — prosty w analizie, ale rzadko oddaje rzeczywistość. Nieliniowy lejek odzwierciedla prawdziwe zachowania: użytkownicy mogą pomijać kroki, wracać, wchodzić w różnych punktach. Narzędzia jak Mixpanel i Amplitude oferują 'unordered' funnels które mierzą konwersję niezależnie od kolejności kroków. Dla złożonych produktów lejki nieliniowe dają dokładniejszy obraz.",
  },
  {
    question: "Jak długo powinien trwać lejek konwersji?",
    answer:
      "Zależy od produktu i segmentu: B2C SaaS: onboarding lejek powinien konwertować w ciągu pierwszej sesji (do 30 minut), zakup w ciągu 1-7 dni. B2B SMB: 14-30 dni od rejestracji do pierwszej płatności. B2B Enterprise: 90-180 dni lub dłużej. E-commerce: checkout powinien trwać poniżej 3 minut. Zasada: każdy dodatkowy krok lub dzień w lejku zwiększa drop-off. Mierz time-to-convert dla każdego kroku i optymalizuj opóźnienia.",
  },
];

const funnelTypes = [
  { typ: "Acquisition Funnel", kroki: ["Visit", "Sign Up Click", "Registration Started", "Email Verified", "Account Created"], benchmark: "Conversion Visit→Account: 2-10%", cel: "Pozyskanie nowych użytkowników" },
  { typ: "Onboarding Funnel", kroki: ["Account Created", "First Login", "Profile Completed", "Core Action (Aha!)", "Onboarding Done"], benchmark: "Completion rate: 40-70% w 7 dni", cel: "Dotarcie do wartości produktu" },
  { typ: "Checkout Funnel", kroki: ["Add to Cart", "View Cart", "Checkout Started", "Payment Info", "Order Confirmed"], benchmark: "Cart abandonment: 70-80%, checkout: 60-80%", cel: "Maksymalizacja przychodów z e-commerce" },
  { typ: "Trial to Paid", kroki: ["Trial Start", "Core Feature Used", "Upgrade Prompted", "Plan Selected", "Payment Completed"], benchmark: "Trial-to-paid: 10-30% dla SaaS", cel: "Konwersja trial na płatną subskrypcję" },
];

const funnelMetrics = [
  { metryka: "Step Conversion Rate", definicja: "% użytkowników przechodzących z kroku N do N+1", zastosowanie: "Identyfikacja drop-off w konkretnych krokach" },
  { metryka: "Overall Funnel Conversion", definicja: "% użytkowników kończących cały lejek", zastosowanie: "Ogólna efektywność procesu" },
  { metryka: "Time to Convert", definicja: "Czas od pierwszego do ostatniego kroku", zastosowanie: "Identyfikacja opóźnień i friction points" },
  { metryka: "Drop-off Rate", definicja: "% użytkowników rezygnujących na danym kroku", zastosowanie: "Priorytetyzacja miejsca optymalizacji" },
  { metryka: "Funnel Velocity", definicja: "Szybkość przejścia przez lejek (czas średni)", zastosowanie: "Optymalizacja time-to-value" },
];

export default function BlogFunnelAnalyticsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Funnel Analytics | Fotz Studio"
        description="Funnel analytics — definicja, 4 rodzaje funneli (acquisition, onboarding, checkout, trial-to-paid), metryki (conversion rate, drop-off) i jak…"
        canonicalUrl="https://fotz.pl/blog/funnel-analytics-co-to"

        keywords="Funnel Analytics co to jest, Funnel Analytics definicja, czym jest Funnel Analytics, Funnel Analytics przykłady, jak działa Funnel Analytics, Funnel Analytics znaczenie, Funnel Analytics przewodnik"

        canonical="https://fotz.pl/blog/funnel-analytics-co-to"
      />
      <ArticleSchema
        title="Funnel Analytics — co to jest i jak analizować lejki konwersji?"
        description="Kompletny przewodnik po funnel analytics: 4 rodzaje funneli, 5 kluczowych metryk, benchmarki i jak identyfikować drop-off do optymalizacji."
        url="https://fotz.pl/blog/funnel-analytics-co-to"
        datePublished="2024-01-31"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Funnel Analytics", url: "https://fotz.pl/blog/funnel-analytics-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Funnel Analytics", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Funnel Analytics — co to jest i jak analizować lejki?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Funnel analytics pokazuje gdzie użytkownicy rezygnują w procesie konwersji.
            Poznaj 4 rodzaje lejków, kluczowe metryki i jak optymalizować drop-off.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest funnel analytics?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Funnel analytics</strong> to analiza sekwencji kroków które użytkownik musi podjąć
              żeby osiągnąć cel — rejestrację, zakup, onboarding. Visualizuje gdzie i ile użytkowników
              rezygnuje na każdym etapie i pozwala mierzyć conversion rate dla każdego przejścia.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Optymalizacja lejka to jeden z najwyżej ROI działań w product growth —
              poprawa conversion rate nawet o 5% na kluczowym kroku może znacznie zwiększyć przychody
              bez kosztów pozyskania nowych użytkowników.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Drop-off", opis: "krok z najwyższym drop-off to najważniejszy priorytet optymalizacji" },
                { stat: "CR = N+1/N", opis: "wzór na conversion rate dla każdego kroku lejka" },
                { stat: "Time to convert", opis: "czas od pierwszego do ostatniego kroku — skróć dla wyższych konwersji" },
              ].map((s, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-xl font-bold text-orange-600 mb-2 font-mono">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 rodzaje funneli konwersji</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {funnelTypes.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{f.typ}</h3>
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    {f.kroki.map((k, j) => (
                      <div key={j} className="flex items-center gap-1">
                        <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">{k}</span>
                        {j < f.kroki.length - 1 && <span className="text-slate-400 text-xs">→</span>}
                      </div>
                    ))}
                  </div>
                  <div className="bg-orange-50 rounded p-2 text-sm mb-2">
                    <p className="text-xs font-semibold text-orange-600 mb-1">Benchmark:</p>
                    <p className="text-orange-800">{f.benchmark}</p>
                  </div>
                  <p className="text-xs text-slate-400">Cel: {f.cel}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych metryk funnel analytics</h2>
            <div className="grid md:grid-cols-1 gap-3">
              {funnelMetrics.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex gap-4">
                  <div className="w-48 flex-shrink-0">
                    <p className="font-bold text-orange-700 text-sm">{m.metryka}</p>
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-3 text-sm">
                    <p className="text-slate-600">{m.definicja}</p>
                    <p className="text-slate-500 italic">{m.zastosowanie}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — funnel analytics</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="funnel-analytics-co-to" />
      <ContactSection />
    </Layout>
  );
}
