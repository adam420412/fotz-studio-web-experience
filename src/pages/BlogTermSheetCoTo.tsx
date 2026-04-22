import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest term sheet?",
    answer: "Term sheet (list intencyjny / term sheet) to niewiążący lub częściowo wiążący dokument podsumowujący kluczowe warunki proponowanej transakcji inwestycyjnej lub przejęcia. Jest używany w kontekście venture capital (VC funding rounds), private equity (PE buyouts) i M&A (mergers and acquisitions). Term sheet nie jest jeszcze finalną umową — jest wstępnym porozumieniem między inwestorem a spółką, określającym ramowe warunki transakcji zanim zostaną one formalizowane przez prawników w szczegółowych dokumentach (SPA, SHA, Investment Agreement). Podpisanie term sheetu sygnalizuje serious intent obu stron.",
  },
  {
    question: "Co zawiera term sheet VC?",
    answer: "Kluczowe elementy term sheetu VC: Valuation — pre-money valuation (wycena przed inwestycją) i wynikająca z niej post-money valuation. Investment amount — kwota inwestycji. Equity stake — % udziałów dla inwestora. Type of securities — preferred stock (preferowane) vs common stock (zwykłe), convertible note, SAFE. Liquidation preference — warunki zwrotu kapitału przy wyjściu (1x, 2x non-participating lub participating). Anti-dilution — ochrona przed rozmyciem (broad-based vs narrow-based weighted average). Board composition — ilość miejsc w zarządzie dla inwestora. Pro-rata rights — prawo do udziału w kolejnych rundach.",
  },
  {
    question: "Co to jest liquidation preference i dlaczego jest ważne?",
    answer: "Liquidation preference określa w jakiej kolejności i w jakiej kwocie inwestorzy otrzymują zwrot kapitału przy zdarzeniu likwidacyjnym (exit: sprzedaż, IPO). Przykład 1x non-participating: inwestor dostaje z powrotem kwotę inwestycji przed wspólnikami, ale bez dodatkowego udziału w pozostałym zysku — dobra dla założycieli. Przykład 1x participating: inwestor dostaje z powrotem kwotę inwestycji PLUS udział pro-rata w pozostałym zysku — gorsza dla założycieli. Przykład 2x liquidation preference: inwestor dostaje 2x kwotę inwestycji przed innymi — bardzo niekorzystna dla założycieli. W bull market liquidation preference jest często 1x non-participating.",
  },
  {
    question: "Co to są anti-dilution rights?",
    answer: "Anti-dilution rights chronią inwestorów przed spadkiem wartości ich udziałów gdy spółka przeprowadza rundy inwestycyjne po niższej wycenie (down round). Typy anti-dilution: Full ratchet — inwestor dostaje wystarczająco dużo nowych akcji, żeby jego cena za akcję spadła do nowej (najniższej) ceny. Bardzo niekorzystna dla założycieli. Weighted average (broad-based) — łagodniejsza, uwzględnia wszystkie akcje w formule korekty. Narrow-based — pośrednia, bardziej przyjazna dla inwestorów niż broad-based. Broad-based weighted average to standard w rynkowych transakcjach.",
  },
  {
    question: "Jak negocjować term sheet z VC?",
    answer: "Negocjacja term sheetu: Negocjuj z pozycji alternatyw — im więcej masz term sheetów od różnych inwestorów, tym lepsza Twoja pozycja negocjacyjna. Skup się na kluczowych punktach — valuation, liquidation preference, board control, pro-rata rights. Mniej ważne klauzule (drag-along, co-sale) zostaw bez walki. Nie negocjuj każdej linii — wybierz bitwy. Zatrudnij doświadczonego prawnika specjalizującego się w VC — koszty prawne to kilka tysiącu PLN vs. potencjalnie miliony PLN w przyszłości. Sprawdź track record inwestora — referencje od innych founderów są ważniejsze niż warunki na papierze.",
  },
];

const termSheetComponents = [
  {
    kategoria: "Warunki finansowe",
    elementy: [
      { term: "Pre-money Valuation", definicja: "Wycena spółki przed inwestycją", przykład: "10M PLN pre-money valuation" },
      { term: "Investment Amount", definicja: "Kwota inwestycji od VC", przykład: "2M PLN inwestycji" },
      { term: "Post-money Valuation", definicja: "Pre-money + investment = post-money", przykład: "12M PLN post-money" },
      { term: "Equity %", definicja: "Procent udziałów inwestora", przykład: "2M / 12M = 16.7%" },
    ],
    kolor: "blue",
  },
  {
    kategoria: "Struktura inwestycji",
    elementy: [
      { term: "Preferred Stock", definicja: "Uprzywilejowane akcje z liquidation preference i innymi prawami", przykład: "Series A Preferred Stock" },
      { term: "Convertible Note", definicja: "Pożyczka zamienialna na akcje przy kolejnej rundzie", przykład: "1M PLN convertible note, discount 20%" },
      { term: "SAFE", definicja: "Simple Agreement for Future Equity — prostszy instrument", przykład: "SAFE z 8M PLN cap, 20% discount" },
    ],
    kolor: "green",
  },
  {
    kategoria: "Ochrona inwestora",
    elementy: [
      { term: "Liquidation Preference", definicja: "Pierwszeństwo zwrotu kapitału przy exit", przykład: "1x non-participating preferred" },
      { term: "Anti-dilution", definicja: "Ochrona przed spadkiem wartości przy down round", przykład: "Broad-based weighted average" },
      { term: "Pro-rata Rights", definicja: "Prawo do inwestycji w kolejnych rundach proporcjonalnie", przykład: "Pro-rata w rundach do Series C" },
    ],
    kolor: "purple",
  },
  {
    kategoria: "Zarządzanie",
    elementy: [
      { term: "Board Composition", definicja: "Skład rady dyrektorów po inwestycji", przykład: "2 founderów, 1 VC, 1 niezależny" },
      { term: "Information Rights", definicja: "Prawa do raportowania finansowego i danych", przykład: "Miesięczne raporty finansowe, roczny audyt" },
      { term: "Vesting Schedule", definicja: "Harmonogram nabywania uprawnień do akcji przez founderów", przykład: "4-letni vesting, 1-letni cliff" },
    ],
    kolor: "orange",
  },
];

const termSheetRedFlags = [
  { flag: "Full ratchet anti-dilution", co: "Przy down round founderzy mogą stracić większość udziałów — bardzo niekorzystne" },
  { flag: "Participating liquidation preference powyżej 1x", co: "Inwestor bierze dysproporcjonalnie duży kawałek z wyjścia" },
  { flag: "Majority board control dla VC", co: "VC może usunąć founderów lub blokować decyzje strategiczne" },
  { flag: "Super broad drag-along", co: "Mniejszość może być zmuszona do sprzedaży na warunkach, które nie są korzystne" },
  { flag: "Zbyt szerokie No-shop / exclusivity", co: "Zakaz rozmów z innymi inwestorami przez 60+ dni zamraża Twoje opcje" },
];

export default function BlogTermSheetCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Term sheet — co to jest i jak negocjować? | Fotz.pl"
        description="Term sheet w VC i M&A — kluczowe elementy, liquidation preference, anti-dilution, board composition i red flags. Kompletny przewodnik dla founderów."
        canonical="https://fotz.pl/blog/term-sheet-co-to-jest-vc-inwestycje"

        keywords="Term sheet co to jest, Term sheet definicja, czym jest Term sheet, Term sheet przykłady, jak działa Term sheet, Term sheet znaczenie, Term sheet przewodnik"

        canonical="https://fotz.pl/blog/term-sheet-co-to-jest-vc-inwestycje"
      />
      <ArticleSchema
        title="Term sheet — co to jest i jak negocjować?"
        description="Kompletny przewodnik po term sheet: kluczowe elementy, liquidation preference, anti-dilution i red flags."
        url="https://fotz.pl/blog/term-sheet-co-to-jest-vc-inwestycje"
        datePublished="2024-02-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Term Sheet", url: "https://fotz.pl/blog/term-sheet-co-to-jest-vc-inwestycje" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Term Sheet", url: "/blog/term-sheet-co-to-jest-vc-inwestycje" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finanse i Inwestycje
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Term Sheet
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Term sheet to moment, który definiuje warunki partnerstwa z inwestorem na lata.
              Niewiedzący founder może podpisać term sheet, który wygląda dobrze na papierze —
              a ukryte klauzule kosztują go miliony przy wyjściu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kategorii warunków", value: "4" },
                { label: "Red flags", value: "5" },
                { label: "Standard liquidation pref.", value: "1x non-part." },
                { label: "Standard vesting", value: "4 lata" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe elementy term sheetu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Term sheet dzieli się na kilka kategorii warunków — każda z nich wpływa na
              podział wartości między founderów a inwestorów przy różnych scenariuszach.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {termSheetComponents.map((cat) => (
              <FadeInView key={cat.kategoria}>
                <div className={`rounded-xl p-6 border-2 ${
                  cat.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  cat.kolor === "green" ? "border-green-200 bg-green-50" :
                  cat.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-4 ${
                    cat.kolor === "blue" ? "text-blue-800" :
                    cat.kolor === "green" ? "text-green-800" :
                    cat.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>
                    {cat.kategoria}
                  </h3>
                  <div className="space-y-3">
                    {cat.elementy.map((e) => (
                      <div key={e.term} className="bg-white/70 rounded-lg p-3">
                        <div className="font-bold text-sm text-gray-800 mb-1">{e.term}</div>
                        <div className="text-xs text-gray-600 mb-1">{e.definicja}</div>
                        <div className={`text-xs font-medium ${
                          cat.kolor === "blue" ? "text-blue-700" :
                          cat.kolor === "green" ? "text-green-700" :
                          cat.kolor === "purple" ? "text-purple-700" :
                          "text-orange-700"
                        }`}>
                          Przykład: {e.przykład}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 red flags w term sheecie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie każdy term sheet jest równy. Te klauzule powinny natychmiast skłonić do
              konsultacji z prawnikiem i renegocjacji.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {termSheetRedFlags.map((rf, i) => (
              <FadeInView key={rf.flag}>
                <div className="bg-white rounded-xl border-l-4 border-red-500 p-5">
                  <div className="flex gap-3">
                    <div className="text-red-500 font-bold text-lg flex-shrink-0">!</div>
                    <div>
                      <h3 className="font-bold text-red-700 mb-1">{rf.flag}</h3>
                      <p className="text-gray-700 text-sm">{rf.co}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-200">
              <h3 className="font-bold text-blue-800 mb-2">Ważna uwaga</h3>
              <p className="text-sm text-gray-700">
                Ten artykuł ma charakter edukacyjny. Term sheet to złożony dokument prawno-finansowy.
                Przed podpisaniem zawsze skonsultuj się z prawnikiem specjalizującym się w prawie
                korporacyjnym i transakcjach VC. Koszt prawnika (kilka-kilkanaście tysięcy PLN)
                jest wielokrotnie niższy niż potencjalna strata z niekorzystnych warunków.
              </p>
            </div>
          </FadeInView>
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

      <RelatedArticles currentArticleId="term-sheet-co-to-jest-vc-inwestycje" />
      <ContactSection />
    </Layout>
  );
}
