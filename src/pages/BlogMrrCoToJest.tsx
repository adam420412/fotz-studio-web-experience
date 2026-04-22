import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest MRR?",
    answer: "MRR (Monthly Recurring Revenue) to miesięczny powtarzający się przychód — suma wszystkich aktywnych subskrypcji klientów w danym miesiącu. Dla firmy z 50 klientami płacącymi 200 PLN/mies. i 20 klientami płacącymi 1000 PLN/mies.: MRR = (50 × 200) + (20 × 1000) = 10 000 + 20 000 = 30 000 PLN. MRR jest najważniejszą metryką operacyjną dla firm SaaS — monitorowaną codziennie lub tygodniowo.",
  },
  {
    question: "Jaka jest różnica między MRR a ARR?",
    answer: "MRR (Monthly Recurring Revenue) to miesięczna wersja metryki, ARR (Annual Recurring Revenue) to roczna: ARR = MRR × 12. MRR jest używany do bieżącego zarządzania biznesem i monitorowania trendów (co tydzień, co miesiąc). ARR jest używany do raportowania inwestorskiego, wycen firm, porównywania z rynkiem. Firmy na wczesnym etapie zwykle raportują MRR, dojrzałe SaaS raportują ARR. Oba mierzą to samo zjawisko w różnej skali czasowej.",
  },
  {
    question: "Co wlicza się do MRR?",
    answer: "Do MRR wlicza się: miesięczne opłaty subskrypcyjne, roczne opłaty podzielone przez 12 (np. kontrakt 12 000 PLN/rok = 1000 PLN MRR), opłaty za dodatkowe moduły jeśli są stałe i powtarzające się. NIE wlicza się: jednorazowych opłat wdrożeniowych (professional services), zmiennych opłat usage-based, kredytów i rabatów jednorazowych. Kluczowa zasada: MRR obejmuje tylko przychody, które można spodziewać się co miesiąc.",
  },
  {
    question: "Jakie są składowe MRR?",
    answer: "MRR rozkłada się na: New MRR (od nowych klientów), Expansion MRR (upsell/cross-sell istniejących), Reactivation MRR (klienci którzy wrócili). Minus: Churned MRR (klienci którzy odeszli) i Contraction MRR (klienci którzy downgrade'owali). Net New MRR = New + Expansion + Reactivation - Churned - Contraction. Zdrowy biznes ma Net New MRR dodatnie każdy miesiąc.",
  },
  {
    question: "Jak szybko powinien rosnąć MRR?",
    answer: "Benchmarki wzrostu MRR miesięcznego: poniżej 1M PLN ARR — 15–25% miesięcznie (T2D3 tempo). 1–10M PLN ARR — 8–15% miesięcznie. Powyżej 10M PLN ARR — 5–10% miesięcznie. Wzrost MRR poniżej 5% miesięcznie przy małej skali jest sygnałem ostrzegawczym. Najważniejszy trend — czy wzrost przyspiesza czy zwalnia, i z jakich komponentów pochodzi (new vs expansion vs churn recovery).",
  },
];

const mrrComponents = [
  { komponent: "New MRR", opis: "Przychód od zupełnie nowych klientów, którzy zarejestrowali się w tym miesiącu", kolor: "green", wpływ: "+", przykład: "5 nowych klientów × 400 PLN = 2 000 PLN" },
  { komponent: "Expansion MRR", opis: "Wzrost przychodu od istniejących klientów (upsell, więcej seats, wyższy plan)", kolor: "blue", wpływ: "+", przykład: "3 klientów upgradeowało, łączny wzrost +1 500 PLN" },
  { komponent: "Reactivation MRR", opis: "Przychód od klientów, którzy wrócili po uprzednim churnie", kolor: "teal", wpływ: "+", przykład: "2 klientów reaktywowało konta × 300 PLN = 600 PLN" },
  { komponent: "Churned MRR", opis: "Utracony przychód od klientów, którzy anulowali subskrypcję", kolor: "red", wpływ: "−", przykład: "4 klientów churned × 250 PLN = 1 000 PLN" },
  { komponent: "Contraction MRR", opis: "Zmniejszony przychód od klientów, którzy przeszli na niższy plan", kolor: "orange", wpływ: "−", przykład: "2 klientów downgrade × 200 PLN różnicy = 400 PLN" },
];

const mrrAnalysisFramework = [
  {
    pytanie: "Czy Net New MRR jest dodatnie?",
    jeśliTak: "Baza rośnie — zdrowy stan",
    jeśliNie: "Churn/contraction przewyższa akwizycję — krytyczny sygnał",
    action: "Śledź trend miesięczny przez 3+ miesięcy",
  },
  {
    pytanie: "Jaki % MRR pochodzi z ekspansji?",
    jeśliTak: "Powyżej 20% = silny land-and-expand, wzrost bez nowych klientów",
    jeśliNie: "Poniżej 10% = słaba retencja i ekspansja, zależność od nowej akwizycji",
    action: "Buduj expansion playbook i mierz NRR",
  },
  {
    pytanie: "Jaki jest Churn MRR jako % Total MRR?",
    jeśliTak: "Poniżej 1% miesięcznie = excellent retention",
    jeśliNie: "Powyżej 3% miesięcznie = krytyczny problem do natychmiastowej diagnozy",
    action: "Segmentuj churn po kohortach, planach, ICP fit",
  },
  {
    pytanie: "Czy wzrost New MRR przyspiesza?",
    jeśliTak: "Momentum rośnie — kanały nabierają skali",
    jeśliNie: "Plateau lub spowolnienie — czas na nowe kanały lub segmenty",
    action: "Analizuj CAC payback per kanał i allocate accordingly",
  },
];

const mrrBenchmarks = [
  { stage: "Pre-seed / Idea stage", mrrRange: "0–10 tys. PLN", miesięcznyWzrost: "— (pre-revenue)", fokus: "PMF, pierwsi klienci" },
  { stage: "Seed (0–500K ARR)", mrrRange: "0–42 tys. PLN", miesięcznyWzrost: "20–30%+", fokus: "Udowodnić repeatable sales" },
  { stage: "Early (0.5–2M ARR)", mrrRange: "42–167 tys. PLN", miesięcznyWzrost: "15–25%", fokus: "Skalowanie GTM, hiring" },
  { stage: "Growth (2–10M ARR)", mrrRange: "167–833 tys. PLN", miesięcznyWzrost: "8–15%", fokus: "CAC payback, efficiency" },
  { stage: "Scale (10M+ ARR)", mrrRange: "833K+ PLN", miesięcznyWzrost: "5–10%", fokus: "Rule of 40, IPO readiness" },
];

export default function BlogMrrCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="MRR co to jest — Monthly Recurring Revenue w SaaS | Fotz.pl"
        description="MRR (Monthly Recurring Revenue) — co to jest, jak obliczyć, składowe MRR, różnica z ARR, benchmarki wzrostu. Kompletny przewodnik po kluczowej metryce SaaS."
        canonical="https://fotz.pl/blog/mrr-monthly-recurring-revenue-co-to"

        keywords="MRR co to jest, MRR definicja, czym jest MRR, MRR startup, MRR jak liczyć, MRR wzór, MRR przykłady"

        canonical="https://fotz.pl/blog/mrr-monthly-recurring-revenue-co-to"
      />
      <ArticleSchema
        title="MRR co to jest — Monthly Recurring Revenue w SaaS"
        description="Kompletny przewodnik po MRR: definicja, składowe, różnica z ARR i benchmarki wzrostu."
        url="https://fotz.pl/blog/mrr-monthly-recurring-revenue-co-to"
        datePublished="2024-01-29"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MRR co to jest", url: "https://fotz.pl/blog/mrr-monthly-recurring-revenue-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "MRR co to jest", url: "/blog/mrr-monthly-recurring-revenue-co-to" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Metryki SaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MRR — Monthly Recurring Revenue
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Miesięczny powtarzający się przychód — metryka, którą każdy founder SaaS monitoruje codziennie.
              Poznaj składowe MRR, jak je analizować i jakie benchmarki są normą na Twoim etapie.
            </p>
            <div className="bg-cyan-900/50 rounded-xl p-6 border border-cyan-700">
              <div className="text-sm text-cyan-300 font-semibold mb-2">Formuła MRR</div>
              <div className="text-2xl font-mono font-bold text-white">MRR = Σ (miesięczna opłata każdego aktywnego klienta)</div>
              <div className="text-sm text-gray-400 mt-2">Roczne kontrakty: podziel przez 12 (np. 12 000 PLN/rok = 1 000 PLN MRR)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty MRR */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 składowych MRR</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              MRR rozkłada się na 5 komponentów — 3 pozytywne i 2 negatywne.
              Net New MRR = suma wszystkich pięciu. Analiza składowych ujawnia zdrowie biznesu.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {mrrComponents.map((komp) => (
              <FadeInView key={komp.komponent}>
                <div className={`rounded-xl p-5 border-2 flex gap-4 items-start ${
                  komp.kolor === "green" ? "border-green-300 bg-green-50" :
                  komp.kolor === "blue" ? "border-blue-300 bg-blue-50" :
                  komp.kolor === "teal" ? "border-teal-300 bg-teal-50" :
                  komp.kolor === "red" ? "border-red-300 bg-red-50" :
                  "border-orange-300 bg-orange-50"
                }`}>
                  <div className={`text-2xl font-bold w-10 text-center flex-shrink-0 ${
                    komp.wpływ === "+" ? "text-green-600" : "text-red-600"
                  }`}>
                    {komp.wpływ}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-1 ${
                      komp.kolor === "green" ? "text-green-800" :
                      komp.kolor === "blue" ? "text-blue-800" :
                      komp.kolor === "teal" ? "text-teal-800" :
                      komp.kolor === "red" ? "text-red-800" :
                      "text-orange-800"
                    }`}>
                      {komp.komponent}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">{komp.opis}</p>
                    <p className="text-xs text-gray-500 italic">{komp.przykład}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-6 bg-cyan-50 rounded-xl p-5 border border-cyan-200">
              <h3 className="font-bold text-cyan-800 mb-2">Net New MRR = ?</h3>
              <p className="text-sm text-gray-700 font-mono">
                Net New MRR = New MRR (2 000) + Expansion MRR (1 500) + Reactivation MRR (600) − Churned MRR (1 000) − Contraction MRR (400) = <strong>+2 700 PLN</strong>
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Framework analityczny */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Framework analizy MRR — 4 kluczowe pytania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Samo liczenie MRR nie wystarczy. Oto 4 pytania, które należy zadawać co miesiąc przy przeglądzie MRR.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {mrrAnalysisFramework.map((item, i) => (
              <FadeInView key={item.pytanie}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-3">{item.pytanie}</h3>
                      <div className="grid md:grid-cols-2 gap-3 mb-3">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Jeśli tak</div>
                          <p className="text-sm text-gray-700">{item.jeśliTak}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">Jeśli nie</div>
                          <p className="text-sm text-gray-700">{item.jeśliNie}</p>
                        </div>
                      </div>
                      <div className="bg-cyan-50 rounded-lg p-3">
                        <div className="text-xs font-bold text-cyan-700 uppercase mb-1">Działanie</div>
                        <p className="text-sm text-gray-700">{item.action}</p>
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki MRR wg etapu firmy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Oczekiwany zakres MRR i miesięczne tempo wzrostu różnią się radykalnie w zależności od etapu.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-cyan-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Etap</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Zakres MRR</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Wzrost mies.</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Główny fokus</th>
                </tr>
              </thead>
              <tbody>
                {mrrBenchmarks.map((b, i) => (
                  <tr key={b.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{b.stage}</td>
                    <td className="px-4 py-3 text-gray-700 text-sm">{b.mrrRange}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded-full text-xs font-bold">
                        {b.miesięcznyWzrost}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{b.fokus}</td>
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

      <RelatedArticles currentArticleId="mrr-monthly-recurring-revenue-co-to" />
      <ContactSection />
    </Layout>
  );
}
