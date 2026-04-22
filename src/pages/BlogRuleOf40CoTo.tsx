import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Rule of 40?",
    answer: "Rule of 40 to zasada oceny zdrowia finansowego firmy SaaS, która mówi, że suma wzrostu przychodów (%) i marży zysku (%) powinna wynosić co najmniej 40. Formuła: Rule of 40 = Wzrost ARR (%) + Marża FCF lub EBITDA (%). Przykład: firma rośnie 60% r/r przy marży EBITDA -15% → Rule of 40 = 60 + (-15) = 45 — wynik powyżej 40, więc firma jest uznawana za zdrową. Zasada pozwala ocenić balans między wzrostem a rentownością.",
  },
  {
    question: "Jaką marżę używać w Rule of 40 — EBITDA czy FCF?",
    answer: "Najczęściej używane warianty: FCF margin (Free Cash Flow / Revenue) — preferowany przez inwestorów VC i growth equity, bo odzwierciedla rzeczywiste przepływy gotówkowe. EBITDA margin — często używany przez analityków i w benchmarkach publicznych firm. Operating margin (EBIT) — starszy wariant. Rule of 40 z FCF daje wyniki różne od Rule of 40 z EBITDA — ważne jest porównywanie jabłek do jabłek. Większość publicznych raportów używa EBITDA lub FCF margin.",
  },
  {
    question: "Jaki wynik Rule of 40 jest dobry?",
    answer: "Interpretacja Rule of 40: poniżej 20 — słabe, firma ani szybko nie rośnie ani nie jest rentowna. 20–40 — przeciętne, akceptowalne dla firm w fazie skalowania. 40–60 — dobry, oznacza zdrowy balans wzrostu i efektywności. Powyżej 60 — doskonały, firma osiąga zarówno wysoki wzrost jak i solidną rentowność. Best-in-class SaaS (Veeva, Zoom w szczytowym momencie) osiągały Rule of 40 powyżej 60-70. Mediana publicznych SaaS to ok. 30-40.",
  },
  {
    question: "Czy Rule of 40 ma sens dla małych firm SaaS?",
    answer: "Rule of 40 jest najbardziej użyteczny dla firm z ARR 5M+ PLN. Dla wczesnych startupów (pre-1M ARR) wzrost może być 300%+ co kompensuje dowolną stratę — Rule of 40 wynosi wtedy 250+, co jest bez znaczenia. Zasada jest szczególnie wartościowa podczas: oceny przez inwestorów przed Series B/C, due diligence przejęcia/akwizycji, porównywania z publicznymi komparabilnymi firmami. Dla seed/early stage ważniejszy jest PMF, NPS i NRR.",
  },
  {
    question: "Jak poprawić Rule of 40?",
    answer: "Dwa wektory poprawy: wzrost (licznik) — szybszy wzrost ARR przez nowe kanały, expansion, nowe segmenty; efektywność (mianownik) — lepsza Gross Margin przez optymalizację COGS, niższy CAC przez efektywniejsze kanały, obniżenie OPEX przez automatyzację i AI. Nie ma jednej właściwej ścieżki — firmy przechodzą przez różne punkty (wysoki wzrost/niska rentowność) do (niższy wzrost/wysoka rentowność) w miarę dojrzewania. Kluczowe jest kierowanie się w stronę 40+ wraz z wchodzeniem w późniejsze etapy.",
  },
];

const rule40Examples = [
  {
    firma: "Hiperwzrostowy startup",
    wzrostARR: "120%",
    marzaFCF: "-35%",
    rule40: 85,
    ocena: "Excellent",
    komentarz: "Gigantyczny wzrost kompensuje straty — typowe dla Series A/B SaaS",
    kolor: "green",
  },
  {
    firma: "Zrównoważony scale-up",
    wzrostARR: "55%",
    marzaFCF: "-10%",
    rule40: 45,
    ocena: "Dobry",
    komentarz: "Zdrowy balans — firma zbliża się do break-even przy szybkim wzroście",
    kolor: "blue",
  },
  {
    firma: "Dojrzały SaaS leader",
    wzrostARR: "25%",
    marzaFCF: "20%",
    rule40: 45,
    ocena: "Dobry",
    komentarz: "Niższy wzrost, ale solidna rentowność — model dojrzały i efektywny",
    kolor: "blue",
  },
  {
    firma: "Przeciętna firma",
    wzrostARR: "30%",
    marzaFCF: "-5%",
    rule40: 25,
    ocena: "Przeciętny",
    komentarz: "Ani wystarczająco szybko rośnie, ani nie jest rentowna — wymaga strategicznego wyboru",
    kolor: "yellow",
  },
  {
    firma: "Firma z problemami",
    wzrostARR: "10%",
    marzaFCF: "-25%",
    rule40: -15,
    ocena: "Krytyczny",
    komentarz: "Wolny wzrost przy dużych stratach — nieefektywny model, wymaga restrukturyzacji",
    kolor: "red",
  },
];

const rule40ByStage = [
  { stage: "Seed (poniżej 1M ARR)", mediana: "50–80+", top25: "100+", kontekst: "Wzrost dominuje, straty akceptowalne" },
  { stage: "Series A (1–5M ARR)", mediana: "40–60", top25: "70+", kontekst: "Balans między wzrostem a efektywnością" },
  { stage: "Series B (5–25M ARR)", mediana: "35–50", top25: "60+", kontekst: "Skalowanie GTM, efektywność CAC" },
  { stage: "Series C+ (25M+ ARR)", mediana: "30–45", top25: "55+", kontekst: "Ścieżka do profitability" },
  { stage: "Pre-IPO / Public", mediana: "25–40", top25: "50+", kontekst: "Balans — inwestorzy oczekują Rule of 40+" },
];

const growthVsProfitability = [
  { wzrost: "Powyżej 60%", efektywność: "Powyżej 10% FCF", ocena: "Unicorn territory", opis: "Rzadkie, ale możliwe dla PLG lub viral produktów" },
  { wzrost: "Powyżej 60%", efektywność: "-20% do -40% FCF", ocena: "Classic VC-backed growth", opis: "Typowy hiperwzrostowy SaaS z VC funding" },
  { wzrost: "30–60%", efektywność: "0% do -15% FCF", ocena: "Efficient growth", opis: "Idealny balans dla Series B/C firm" },
  { wzrost: "20–40%", efektywność: "15–30% FCF", ocena: "Cash-generating growth", opis: "Typowy dojrzały SaaS skalujący profitability" },
  { wzrost: "Poniżej 15%", efektywność: "Powyżej 25% FCF", ocena: "Mature / cash cow", opis: "Slow growth, high margin — może być bootstrap lub PE" },
];

export default function BlogRuleOf40CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Rule of 40 — co to jest i jak liczyć? | Fotz.pl"
        description="Rule of 40 — zasada oceny zdrowia finansowego SaaS: formuła, przykłady, benchmarki wg etapu i jak interpretować wynik. Kompletny przewodnik dla founderów…"
        canonicalUrl="https://fotz.pl/blog/rule-of-40-co-to-jest"

        keywords="Rule of 40 co to jest, Rule of 40 definicja, czym jest Rule of 40, Rule of 40 przykłady, jak działa Rule of 40, Rule of 40 znaczenie, Rule of 40 przewodnik"

        canonical="https://fotz.pl/blog/rule-of-40-co-to-jest"
      />
      <ArticleSchema
        title="Rule of 40 — co to jest i jak liczyć?"
        description="Kompletny przewodnik po Rule of 40: formuła, przykłady, benchmarki i jak poprawić wynik."
        url="https://fotz.pl/blog/rule-of-40-co-to-jest"
        datePublished="2024-01-31"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Rule of 40", url: "https://fotz.pl/blog/rule-of-40-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Rule of 40", url: "/blog/rule-of-40-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finanse SaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rule of 40
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Złota zasada oceny zdrowia finansowego SaaS, która jednocześnie mierzy wzrost i rentowność.
              Wzrost ARR% + Marża FCF% ≥ 40 — cel dla każdego ambitnego SaaS na drodze do IPO.
            </p>
            <div className="bg-violet-900/50 rounded-xl p-6 border border-violet-700">
              <div className="text-sm text-violet-300 font-semibold mb-2">Formuła Rule of 40</div>
              <div className="text-2xl font-mono font-bold text-white">
                R40 = Wzrost ARR (%) + Marża FCF lub EBITDA (%)
              </div>
              <div className="text-sm text-gray-400 mt-2">Cel: wynik ≥ 40 dla zdrowego SaaS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Przykłady */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykłady obliczenia Rule of 40</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Rule of 40 można osiągnąć wieloma drogami — wysoki wzrost przy stratach, lub umiarkowany
              wzrost przy solidnej rentowności. Kluczowe jest osiągnięcie sumy ≥ 40.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {rule40Examples.map((ex) => (
              <FadeInView key={ex.firma}>
                <div className={`rounded-xl p-5 border-2 ${
                  ex.kolor === "green" ? "border-green-300 bg-green-50" :
                  ex.kolor === "blue" ? "border-blue-300 bg-blue-50" :
                  ex.kolor === "yellow" ? "border-yellow-300 bg-yellow-50" :
                  "border-red-300 bg-red-50"
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900">{ex.firma}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                          ex.kolor === "green" ? "bg-green-200 text-green-800" :
                          ex.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                          ex.kolor === "yellow" ? "bg-yellow-200 text-yellow-800" :
                          "bg-red-200 text-red-800"
                        }`}>
                          {ex.ocena}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{ex.komentarz}</p>
                    </div>
                    <div className="flex gap-3 items-center flex-shrink-0">
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Wzrost ARR</div>
                        <div className="font-bold text-green-700 text-lg">{ex.wzrostARR}</div>
                      </div>
                      <div className="text-2xl text-gray-400">+</div>
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">Marża FCF</div>
                        <div className={`font-bold text-lg ${ex.marzaFCF.startsWith("-") ? "text-red-600" : "text-green-700"}`}>
                          {ex.marzaFCF}
                        </div>
                      </div>
                      <div className="text-2xl text-gray-400">=</div>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${
                        ex.rule40 >= 40 ? "bg-green-500 text-white" :
                        ex.rule40 >= 20 ? "bg-yellow-500 text-white" :
                        "bg-red-500 text-white"
                      }`}>
                        {ex.rule40}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki per stage */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki Rule of 40 per etap</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Oczekiwania Rule of 40 różnią się w zależności od etapu firmy — wczesny SaaS
              powinien mieć wyższy wynik dzięki szybszemu wzrostowi.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-violet-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Etap / Runda</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Mediana Rule of 40</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Top 25%</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Kontekst</th>
                </tr>
              </thead>
              <tbody>
                {rule40ByStage.map((b, i) => (
                  <tr key={b.stage} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{b.stage}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-violet-100 text-violet-800 px-2 py-1 rounded-full text-xs font-bold">
                        {b.mediana}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">
                        {b.top25}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{b.kontekst}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Wzrost vs rentowność */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wzrost vs Rentowność — profile firm</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Rule of 40 można osiągnąć różnymi kombinacjami wzrostu i rentowności.
              Różne profile są typowe dla różnych etapów i modeli biznesowych.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {growthVsProfitability.map((profile) => (
              <FadeInView key={profile.ocena}>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-36">
                      <div className="text-xs text-gray-500 mb-1">Wzrost ARR</div>
                      <div className="font-bold text-gray-800 text-sm">{profile.wzrost}</div>
                    </div>
                    <div className="flex-shrink-0 w-36">
                      <div className="text-xs text-gray-500 mb-1">FCF Margin</div>
                      <div className="font-bold text-gray-800 text-sm">{profile.efektywność}</div>
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-violet-700 text-sm mb-1">{profile.ocena}</div>
                      <div className="text-gray-600 text-sm">{profile.opis}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="rule-of-40-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
