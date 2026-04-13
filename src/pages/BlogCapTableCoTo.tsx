import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest cap table?",
    answer: "Cap table (capitalization table, tabela kapitalizacji) to arkusz pokazujący strukturę własnościową firmy: kto posiada jakie udziały, w jakiej formie (zwykłe udziały, udziały uprzywilejowane, opcje, warrants) i jaki % całości stanowią. Cap table jest aktualizowany po każdej transakcji: rundy inwestycyjne, emisja opcji (ESOP), konwersja SAFE/obligacji, sprzedaż udziałów. Cap table odpowiada na pytania: Jaki % firmy posiadają założyciele? Ile % należy do inwestorów i po jakiej wycenie? Ile opcji zostało wydanych a ile jest w puli? Jaka będzie dystrybucja wpływów w exit scenariuszu? Dla inwestorów i founders cap table to jeden z najważniejszych dokumentów w due diligence.",
  },
  {
    question: "Jak wygląda typowa struktura cap table na wczesnym etapie?",
    answer: "Typowa struktura cap table: Pre-seed (zaraz po założeniu): Founder A 45%, Founder B 45%, Option Pool 10%. Po seed (np. 2M USD przy 8M pre-money): Founder A 36%, Founder B 36%, Seed Investor 20%, Option Pool 8%. Po Series A (np. 8M USD przy 32M pre-money): Founder A 27%, Founder B 27%, Seed Investor 15%, Series A Lead 20%, Option Pool 11%. Kluczowa zasada: option pool shuffle — inwestorzy zazwyczaj wymagają powiększenia puli opcji przed rundą, co dilutuje founders, nie inwestorów. Zrozumienie tej mechaniki przed negocjacjami jest kluczowe.",
  },
  {
    question: "Czym jest dilucja i jak jej unikać?",
    answer: "Dilucja (rozcieńczenie) to zmniejszenie % udziału właściciela wskutek emisji nowych udziałów. Każda runda inwestycyjna i emisja opcji dilutuje istniejących udziałowców. Jak minimalizować dilucję: Negocjuj wyższą wycenę (pre-money) — wyższa wycena = mniejszy % dla inwestora za tę samą kwotę. Ogranicz rozmiar option pool — mniejsza pula opcji = mniejsza dilucja założycieli. Anti-dilution protection — mechanizmy chroniące inwestorów (pełna lub częściowa ochrona against down rounds). Pro-rata rights — prawo istniejących inwestorów do utrzymania swojego % w kolejnych rundach. Founders mogą negocjować pro-rata dla siebie. Kluczowe: dilucja sama w sobie nie jest zła — ważne czy wartość bezwzględna udziałów rośnie.",
  },
  {
    question: "Jakie narzędzia do zarządzania cap table?",
    answer: "Narzędzia do cap table management: Carta — standard w USA, automatyzuje emisję udziałów, opcji, 409A valuations, obsługuje due diligence. Koszt od 2500 USD/rok. Popularne wśród VC-backed startupów. Capdesk — europejska alternatywa dla Carta, popularna w UK, Niemczech, Skandynawii. Pulley — nowszy konkurent Carta, bardziej przyjazny cenowo dla early-stage. Google Sheets / Excel — akceptowalne na pre-seed i seed, ale ryzykowne przy wielu udziałowcach i instrumentach. AngelList Stack — zintegrowane z platformą AngelList dla syndikatów. Rekomendacja: przejdź na Carta lub Capdesk przed Series A. Inwestorzy oczekują profesjonalnego cap table managementu od tego etapu.",
  },
  {
    question: "Co to jest liquidation preference i jak wpływa na założycieli?",
    answer: "Liquidation preference (preferencja likwidacyjna) to klauzula chroniąca inwestorów — w exit (sprzedaż firmy, IPO, likwidacja) inwestorzy otrzymują swoje pieniądze przed zwykłymi udziałowcami (founders, pracownicy). Typy: Non-participating preferred — inwestor dostaje 1x swoje pieniądze LUB konwertuje na zwykłe udziały (nie może brać obu). Najbardziej founder-friendly. Participating preferred (full ratchet) — inwestor dostaje 1x pieniądze PLUS udział w pozostałej dystrybucji. Drogi dla founders przy mniejszych exitach. 2x lub 3x liquidation preference — inwestor dostaje 2x lub 3x swoje pieniądze przed founders. Agresywne, popularne w down rounds. Przykład: inwestor włożył 5M USD z 1x non-participating preference. Exit za 20M. Inwestor może wziąć 5M lub 25% z 20M = 5M. To samo. Gdyby exit był za 8M — inwestor bierze 5M, founders i pracownicy dzielą 3M.",
  },
];

const capTableComponents = [
  {
    komponent: "Common Shares (Udziały zwykłe)",
    posiadacze: "Założyciele, pracownicy (przez ESOP), early advisors",
    charakterystyka: "Brak preferencji likwidacyjnej. Ostatni w kolejce przy exit. Pełne prawo głosu.",
    kolor: "blue",
  },
  {
    komponent: "Preferred Shares (Udziały uprzywilejowane)",
    posiadacze: "Inwestorzy VC/PE w każdej rundzie (Seed Preferred, Series A Preferred...)",
    charakterystyka: "Liquidation preference, anti-dilution, często pro-rata rights i board seats.",
    kolor: "purple",
  },
  {
    komponent: "Option Pool (ESOP)",
    posiadacze: "Pracownicy i kluczowi doradcy (opcje na zakup udziałów)",
    charakterystyka: "Opcje mają strike price = wycena na dzień emisji. Vesting schedule. Nie posiadają udziałów dopóki nie wykonają opcji.",
    kolor: "green",
  },
  {
    komponent: "SAFE / Convertible Notes",
    posiadacze: "Wczesni inwestorzy na pre-seed/seed zanim ustalono wycenę",
    charakterystyka: "Konwertują na udziały uprzywilejowane w następnej priced round. Zazwyczaj z dyskontem (20%) lub cap.",
    kolor: "orange",
  },
  {
    komponent: "Warrants",
    posiadacze: "Dostawcy, banki, prawnicy wynagradzani częściowo equity",
    charakterystyka: "Prawo do zakupu udziałów po ustalonej cenie w przyszłości. Podobne do opcji ale dla nie-pracowników.",
    kolor: "teal",
  },
];

const exitScenarios = [
  { scenariusz: "Skromny exit (8M USD)", invested: "5M @ 1x non-part. pref.", founders: "67%", investors: "33% lub 1x = 5M", employees: "Z tego co zostanie po inwestorach" },
  { scenariusz: "Dobry exit (40M USD)", invested: "5M @ 1x non-part. pref.", founders: "~45% = 18M", investors: "~25% = 10M lub 1x = 5M", employees: "~20% = 8M (z ESOP)" },
  { scenariusz: "Duży exit (200M USD)", invested: "5M @ 1x non-part. pref.", founders: "~40% = 80M", investors: "~25% = 50M", employees: "~15% = 30M" },
];

export default function BlogCapTableCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Cap Table — co to jest i jak zarządzać strukturą udziałów? | Fotz.pl"
        description="Cap table (tabela kapitalizacji): struktura udziałów, typy instrumentów, dilucja, liquidation preference, narzędzia (Carta, Capdesk) i przykłady exit scenarios."
        canonicalUrl="https://fotz.pl/blog/cap-table-tabela-kapitalizacji-co-to-jest"

        keywords="Cap Table co to jest, Cap Table definicja, czym jest Cap Table, Cap Table przykłady, jak działa Cap Table, Cap Table znaczenie, Cap Table przewodnik"
      />
      <ArticleSchema
        title="Cap Table — co to jest i jak zarządzać strukturą udziałów?"
        description="Cap table: typy udziałów, dilucja, liquidation preference, option pool, SAFE i narzędzia do zarządzania. Przewodnik dla założycieli startupów."
        url="https://fotz.pl/blog/cap-table-tabela-kapitalizacji-co-to-jest"
        datePublished="2024-02-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cap Table", url: "https://fotz.pl/blog/cap-table-tabela-kapitalizacji-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Cap Table", href: "/blog/cap-table-tabela-kapitalizacji-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Equity &amp; Fundraising
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cap Table
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kto ile posiada, po jakiej wycenie i z jakimi prawami?
              Cap table to DNA firmy od strony własnościowej.
              Złe decyzje na early stage mogą kosztować millions przy exit.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy instrumentów", value: "5" },
                { label: "Typowy ESOP", value: "10-15%" },
                { label: "Narzędzie", value: "Carta" },
                { label: "Kluczowy moment", value: "Series A" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Składowe */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Składowe cap table</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Cap table nie zawiera tylko "udziałów" — jest w nim kilka rodzajów instrumentów
              z różnymi prawami i zachowaniem przy exit.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {capTableComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "purple" ? "text-purple-800" :
                    c.kolor === "green" ? "text-green-800" :
                    c.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{c.komponent}</h3>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">Posiadacze: </span>
                      <span className="text-gray-600">{c.posiadacze}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">Charakterystyka: </span>
                      <span className="text-gray-600">{c.charakterystyka}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Exit scenarios */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exit scenarios — kto ile dostaje?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Przykład firmy z 20M pre-money Series A, 5M inwestycji (25% stakes),
              founders 50%, ESOP 25%. Inwestor z 1x non-participating liquidation preference.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-blue-800 text-white">
                  <th className="text-left px-4 py-3">Scenariusz</th>
                  <th className="text-left px-4 py-3">Inwestycja</th>
                  <th className="text-left px-4 py-3">Founders</th>
                  <th className="text-left px-4 py-3">Inwestorzy</th>
                  <th className="text-left px-4 py-3">Pracownicy (ESOP)</th>
                </tr>
              </thead>
              <tbody>
                {exitScenarios.map((r, i) => (
                  <tr key={r.scenariusz} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{r.scenariusz}</td>
                    <td className="px-4 py-3 text-gray-600">{r.invested}</td>
                    <td className="px-4 py-3 text-gray-700">{r.founders}</td>
                    <td className="px-4 py-3 text-gray-700">{r.investors}</td>
                    <td className="px-4 py-3 text-gray-700">{r.employees}</td>
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

      <ContactSection />
    </Layout>
  );
}
