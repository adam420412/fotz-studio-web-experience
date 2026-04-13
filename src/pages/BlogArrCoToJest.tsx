import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest ARR?",
    answer: "ARR (Annual Recurring Revenue) to roczny powtarzający się przychód — suma wszystkich aktywnych subskrypcji klientów przeliczona na rok. Dla firmy SaaS z 100 klientami płacącymi 1000 PLN/mies. każdy, ARR = 100 × 1000 × 12 = 1 200 000 PLN. ARR jest fundamentalną metryką dla firm subskrypcyjnych — pokazuje, ile stałych przychodów firma generuje rocznie, niezależnie od jednorazowych transakcji.",
  },
  {
    question: "Jaka jest różnica między ARR a MRR?",
    answer: "MRR (Monthly Recurring Revenue) to miesięczny powtarzający się przychód. ARR = MRR × 12. MRR jest bardziej granularny i używany do codziennego monitorowania (nowe kontrakty, churny, expansions w danym miesiącu). ARR jest używany do raportowania inwestorskiego, wycen spółek, benchmarkingu z innymi firmami. Obie metryki mierzą to samo, ale w różnej skali czasowej.",
  },
  {
    question: "Co wlicza się do ARR, a co nie?",
    answer: "Do ARR wlicza się: stałe opłaty za subskrypcję (roczne i miesięczne przeliczone na rok), opłaty za aktywne licencje/seats, opłaty za wsparcie/support jeśli są stałe. NIE wlicza się do ARR: jednorazowych opłat wdrożeniowych (professional services), transakcyjnych przychodów (per-usage ponad subscription), przedpłat bez odnawialności, przychodów z hardware. Czyste ARR = tylko powtarzające się, contractualne przychody.",
  },
  {
    question: "Jak interpretować wzrost ARR?",
    answer: "Wzrost ARR ocenia się przez pryzmat T2D3 (triple-triple-double-double-double): early-stage SaaS powinien 3x ARR przez 2 lata, potem 2x przez kolejne 3. Wzrost powyżej 100% ARR r/r to excellent dla firm poniżej 10M ARR. Powyżej 50M ARR wzrost 50%+ jest uznawany za bardzo dobry. Inwestorzy VC oceniają też efektywność wzrostu przez Rule of 40: wzrost ARR% + marża EBITDA% powinny sumować się do 40+.",
  },
  {
    question: "Czym jest Net New ARR?",
    answer: "Net New ARR to zmiana ARR w danym okresie: Net New ARR = New ARR (nowi klienci) + Expansion ARR (upsell/cross-sell istniejących) - Churned ARR (odeszli klienci) - Contraction ARR (downgrade). Jeśli Net New ARR jest dodatnie — baza rośnie. Jeśli ujemne — baza się kurczy. Dla zdrowej firmy SaaS Expansion ARR powinien stanowić 20-40% całego Net New ARR.",
  },
];

const arrComponents = [
  {
    komponent: "New ARR",
    opis: "Przychód z nowych klientów pozyskanych w danym okresie",
    formuła: "Liczba nowych klientów × ACV (Annual Contract Value)",
    kolor: "green",
    wpływ: "pozytywny",
  },
  {
    komponent: "Expansion ARR",
    opis: "Wzrost przychodu od istniejących klientów (upsell, cross-sell, więcej seats)",
    formuła: "ARR przed expansją vs ARR po — różnica",
    kolor: "blue",
    wpływ: "pozytywny",
  },
  {
    komponent: "Churned ARR",
    opis: "Utracony przychód od klientów, którzy zrezygnowali z subskrypcji",
    formuła: "ARR klientów anulujących w danym miesiącu × 12",
    kolor: "red",
    wpływ: "negatywny",
  },
  {
    komponent: "Contraction ARR",
    opis: "Obniżony przychód od klientów, którzy przeszli na niższy plan (downgrade)",
    formuła: "Różnica ARR przed i po downgrade dla każdego klienta",
    kolor: "orange",
    wpływ: "negatywny",
  },
];

const arrBenchmarks = [
  { skala: "Seed (0–1M ARR)", wzrostRR: "200%+", wycena: "10–20x ARR", kontekst: "Proof of concept, pierwsze klientele" },
  { skala: "Series A (1–5M ARR)", wzrostRR: "150–200%", wycena: "8–15x ARR", kontekst: "PMF osiągnięty, skalowanie GTM" },
  { skala: "Series B (5–20M ARR)", wzrostRR: "100–150%", wycena: "6–12x ARR", kontekst: "Skalowanie sprzedaży i marketingu" },
  { skala: "Series C (20–50M ARR)", wzrostRR: "60–100%", wycena: "5–10x ARR", kontekst: "Ekspansja na nowe rynki/segmenty" },
  { skala: "Growth (50M+ ARR)", wzrostRR: "40–60%", wycena: "4–8x ARR", kontekst: "Efektywność i dojrzałość modelu" },
  { skala: "Pre-IPO (100M+ ARR)", wzrostRR: "30–50%", wycena: "6–15x ARR", kontekst: "Rule of 40, profitability" },
];

const arrFormula = {
  kroki: [
    { nr: 1, krok: "Policz aktywne subskrypcje", opis: "Zsumuj wszystkich klientów z aktywną umową subskrypcyjną" },
    { nr: 2, krok: "Oblicz MRR dla każdego klienta", opis: "Miesięczna opłata za plan — dla umów rocznych podziel przez 12" },
    { nr: 3, krok: "Zsumuj MRR", opis: "Suma MRR wszystkich aktywnych klientów = Total MRR" },
    { nr: 4, krok: "Przemnóż przez 12", opis: "ARR = Total MRR × 12" },
    { nr: 5, krok: "Wyodrębnij komponenty", opis: "Podziel ARR na New, Expansion, Churned, Contraction dla analizy" },
  ],
};

export default function BlogArrCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="ARR co to jest — Annual Recurring Revenue w SaaS | Fotz.pl"
        description="ARR (Annual Recurring Revenue) — co to jest, jak obliczyć, komponenty ARR, benchmarki wzrostu i różnica między ARR a MRR. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/arr-annual-recurring-revenue-co-to"

        keywords="ARR co to jest, ARR definicja, czym jest ARR, ARR startup, ARR jak liczyć, ARR wzór, ARR przykłady"

        canonical="https://fotz.pl/blog/arr-annual-recurring-revenue-co-to"
      />
      <ArticleSchema
        title="ARR co to jest — Annual Recurring Revenue w SaaS"
        description="Kompletny przewodnik po ARR: definicja, formuła, komponenty i benchmarki wzrostu."
        url="https://fotz.pl/blog/arr-annual-recurring-revenue-co-to"
        datePublished="2024-01-26"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ARR co to jest", url: "https://fotz.pl/blog/arr-annual-recurring-revenue-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ARR co to jest", href: "/blog/arr-annual-recurring-revenue-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Metryki SaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ARR — Annual Recurring Revenue
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Roczny powtarzający się przychód — najważniejsza metryka dla każdej firmy subskrypcyjnej.
              Dowiedz się, jak obliczać ARR, interpretować jego składowe i porównywać z benchmarkami branżowymi.
            </p>
            <div className="bg-blue-900/50 rounded-xl p-6 border border-blue-700">
              <div className="text-sm text-blue-300 font-semibold mb-2">Formuła ARR</div>
              <div className="text-2xl font-mono font-bold text-white">ARR = MRR × 12</div>
              <div className="text-sm text-gray-400 mt-2">lub: ARR = Σ (wartość roczna każdego aktywnego kontraktu)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty ARR */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 komponenty ARR</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Samo ARR nie wystarczy — kluczowe jest rozumienie, z czego się składa.
              Net New ARR = New + Expansion - Churned - Contraction.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {arrComponents.map((komp) => (
              <FadeInView key={komp.komponent}>
                <div className={`rounded-xl p-6 border-2 ${
                  komp.kolor === "green" ? "border-green-300 bg-green-50" :
                  komp.kolor === "blue" ? "border-blue-300 bg-blue-50" :
                  komp.kolor === "red" ? "border-red-300 bg-red-50" :
                  "border-orange-300 bg-orange-50"
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-3 h-3 rounded-full ${
                      komp.wpływ === "pozytywny" ? "bg-green-500" : "bg-red-500"
                    }`} />
                    <h3 className={`font-bold text-lg ${
                      komp.kolor === "green" ? "text-green-800" :
                      komp.kolor === "blue" ? "text-blue-800" :
                      komp.kolor === "red" ? "text-red-800" :
                      "text-orange-800"
                    }`}>
                      {komp.komponent}
                    </h3>
                    <span className={`ml-auto text-xs px-2 py-1 rounded-full font-medium ${
                      komp.wpływ === "pozytywny" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                    }`}>
                      {komp.wpływ === "pozytywny" ? "+ ARR" : "- ARR"}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">{komp.opis}</p>
                  <div className="bg-white/70 rounded-lg p-3">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Formuła</div>
                    <div className="text-sm font-mono text-gray-800">{komp.formuła}</div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Jak obliczyć */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak obliczyć ARR — 5 kroków</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Obliczenie ARR jest proste — ważniejsze jest spójne trzymanie się definicji
              i nieuwzględnianie przychodów jednorazowych.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {arrFormula.kroki.map((krok) => (
              <FadeInView key={krok.nr}>
                <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="bg-blue-600 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                    {krok.nr}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{krok.krok}</h3>
                    <p className="text-gray-600 text-sm">{krok.opis}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-3">Przykład obliczenia ARR</h3>
              <div className="text-sm text-gray-700 space-y-2">
                <div className="grid grid-cols-3 gap-4 font-semibold text-gray-600 border-b border-blue-200 pb-2">
                  <span>Segment klientów</span>
                  <span>Liczba klientów</span>
                  <span>MRR/klient</span>
                </div>
                {[
                  { seg: "Starter (99 PLN/mies.)", n: "200", mrr: "99 PLN" },
                  { seg: "Pro (499 PLN/mies.)", n: "80", mrr: "499 PLN" },
                  { seg: "Enterprise (2999 PLN/mies.)", n: "15", mrr: "2999 PLN" },
                ].map((row) => (
                  <div key={row.seg} className="grid grid-cols-3 gap-4 text-gray-700">
                    <span>{row.seg}</span>
                    <span>{row.n}</span>
                    <span>{row.mrr}</span>
                  </div>
                ))}
                <div className="border-t border-blue-200 pt-2 font-bold text-blue-800">
                  Total MRR = (200 × 99) + (80 × 499) + (15 × 2999) = 19 800 + 39 920 + 44 985 = 104 705 PLN
                </div>
                <div className="font-bold text-blue-800 text-lg">
                  ARR = 104 705 × 12 = 1 256 460 PLN
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki wzrostu ARR wg etapu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Oczekiwania dotyczące tempa wzrostu ARR różnią się radykalnie w zależności od etapu firmy.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Etap / Skala ARR</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Wzrost r/r</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Typowa wycena</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Kontekst</th>
                </tr>
              </thead>
              <tbody>
                {arrBenchmarks.map((b, i) => (
                  <tr key={b.skala} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{b.skala}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        {b.wzrostRR}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{b.wycena}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{b.kontekst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
