import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest A/B testing?",
    answer:
      "A/B testing (test A/B, split testing) to metoda eksperymentalna, w której dwie wersje elementu (A = kontrolna, B = wariant) są jednocześnie testowane na różnych segmentach użytkowników, by zmierzyć która wersja osiąga lepsze wyniki. Jedna zmienna na raz, losowy podział ruchu, statystyczna analiza wyników. A/B testing eliminuje zgadywanie z decyzji produktowych i marketingowych — dane mówią która wersja wygrywa.",
  },
  {
    question: "Co można testować w A/B testach?",
    answer:
      "Niemal wszystko co wpływa na zachowanie użytkownika: CTA (tekst przycisku, kolor, rozmiar, pozycja), nagłówki (copy, długość, styl), obrazy i wideo, layout strony, formularze (liczba pól, kolejność, etykiety), ceny (prezentacja, kolejność planów), onboarding flow, emaile (subject line, treść, czas wysyłki), powiadomienia push, personalizacja, nawigacja. Testuj elementy które mają duży wpływ na metrykę konwersji.",
  },
  {
    question: "Ile ruchu i jak długo prowadzić A/B test?",
    answer:
      "Minimalna próba: 100-1000 konwersji per wariant dla istotności statystycznej. Czas: minimum 1-2 tygodnie (by wyeliminować efekty dni tygodnia i godzin), najlepiej pełne cykle biznesowe. Zasady: nie przerywaj testu przedwcześnie (peek bias — podglądanie wyników i kończenie gdy zobaczysz dobry rezultat). Użyj kalkulatora próby (Evan Miller's A/B calculator) by obliczyć wymagany ruch przed uruchomieniem testu.",
  },
  {
    question: "Co to jest istotność statystyczna i poziom ufności?",
    answer:
      "Istotność statystyczna mierzy prawdopodobieństwo, że obserwowana różnica między A i B nie jest przypadkowa. Poziom ufności 95% oznacza: jeśli test się powtórzymy 100 razy, w 95 przypadkach wynik będzie taki sam. Standardowy próg: p-value poniżej 0.05 (5% szansy że wynik jest przypadkowy). Moc testu (statistical power) = 80% — minimalny próg. Uwaga: istotność statystyczna ≠ praktyczna istotność — 1% poprawa konwersji przy 10 000 daily users = 100 dodatkowych konwersji dziennie.",
  },
  {
    question: "Jakie narzędzia do A/B testowania stron internetowych?",
    answer:
      "Popularne narzędzia A/B testing: Google Optimize (darmowe, wycofane 2023 — alternatywa: VWO, Optimizely). VWO (Visual Website Optimizer) — wymagany kod snippet, wizualny edytor, segmentacja. Optimizely — enterprise, zaawansowane funkcje, integracje. AB Tasty — europejski, GDPR-friendly. Convert — zaawansowane, dla agencji. Unbounce / Leadpages — do testowania landing pages. Firebase Remote Config (mobile). Growthbook (open-source). Do email A/B: Mailchimp, HubSpot, Klaviyo.",
  },
];

const abTestProcess = [
  {
    krok: "1. Analiza i hipoteza",
    opis: "Zbierz dane (analytics, heatmapy, nagrania sesji, ankiety), zidentyfikuj problemy, sformułuj hipotezę",
    pytanie: "Dlaczego myślisz że B będzie lepsze od A? Co to rozwiązuje?",
    output: "Jasna hipoteza: 'Zmiana CTA z 'Kup teraz' na 'Wypróbuj za darmo' zwiększy CTR o 15%'",
  },
  {
    krok: "2. Priorytetyzacja (PIE/ICE)",
    opis: "PIE: Potential × Importance × Ease. ICE: Impact × Confidence × Ease. Testuj najbardziej wartościowe hipotezy",
    pytanie: "Który test ma największy potencjał impact przy dostępnych zasobach?",
    output: "Priorytetyzowana lista testów do realizacji",
  },
  {
    krok: "3. Kalkulacja próby",
    opis: "Oblicz minimalną liczbę konwersji/użytkowników potrzebnych dla istotności statystycznej",
    pytanie: "Ile ruchu potrzebujesz? Jak długo potrwa test?",
    output: "Sample size + szacowany czas trwania testu",
  },
  {
    krok: "4. Implementacja testu",
    opis: "Przygotuj wariant B, zaimplementuj w narzędziu, ustaw segmentację, zdefiniuj primary metric i guardrail metrics",
    pytanie: "Co jest primary metric? Jakie guardrails (metryki których nie chcesz pogorszyć)?",
    output: "Test uruchomiony, monitorowanie gwardrails",
  },
  {
    krok: "5. Analiza wyników",
    opis: "Po osiągnięciu próby: analiza statystyczna, segmentacja wyników per device/segment",
    pytanie: "Czy wynik jest statystycznie istotny? Czy guardrails nie zostały naruszone?",
    output: "Raport: zwycięzca, magnitude of change, next steps",
  },
  {
    krok: "6. Wdrożenie i learning",
    opis: "Wdróż zwycięzcę (jeśli jest), udokumentuj learnings, zaplanuj follow-up testy",
    pytanie: "Co się nauczyliśmy? Jakie follow-up pytania pojawiły się z wyników?",
    output: "Wdrożona zmiana + baza wiedzy o użytkownikach",
  },
];

const testingPitfalls = [
  { błąd: "Peek bias (peeking)", opis: "Kończenie testu gdy wynik 'wygląda dobrze' zanim osiągnięto wymaganą próbę — prowadzi do fałszywych wniosków" },
  { błąd: "Testowanie zbyt wielu zmiennych", opis: "Zmiana kilku elementów jednocześnie — nie wiesz co spowodowało zmianę. Zawsze testuj 1 zmienną na raz (lub użyj MVT)" },
  { błąd: "Novely effect", opis: "Użytkownicy reagują na nowość — wyniki mogą być zawyżone w pierwszych dniach. Testuj przez pełny tydzień" },
  { błąd: "Sample pollution", opis: "Zanieczyszczenie próby przez boty, pracowników, testy QA — wyłącz wewnętrzne IP" },
  { błąd: "Seasonal effects", opis: "Black Friday, święta, promocje mogą zniekształcić wyniki — unikaj testowania w atypicznych okresach" },
  { błąd: "Brak guardrail metrics", opis: "Optymalizujesz konwersję ale ignorujesz LTV, NPS czy revenue per user — może wygrać krótkookresowo, stracić długoterminowo" },
];

const abVsMvt = [
  { test: "A/B Test", zmienne: "1", warianty: "2 (A i B)", kiedy: "Jasna hipoteza, ograniczony ruch, szybki decision cycle", przykład: "Test subject line emaila" },
  { test: "A/B/n Test", zmienne: "1", warianty: "3+ (A, B, C...)", kiedy: "Chcesz porównać wiele wariantów jednej zmiennej", przykład: "Test 3 wersji CTA" },
  { test: "MVT (Multivariate Test)", zmienne: "Wiele", warianty: "Wiele kombinacji", kiedy: "Duży ruch, chcesz zrozumieć interakcje między elementami", przykład: "Kombinacje nagłówek × obraz × CTA" },
  { test: "Split URL Test", zmienne: "1", warianty: "2 (różne URL)", kiedy: "Testowanie kompletnie nowych wersji stron", przykład: "Stary vs. nowy layout strony głównej" },
];

export default function BlogAbTestingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="A/B Testing — co to jest? Testy A/B w marketingu i CRO"
        description="A/B testing — definicja, 6-krokowy proces, istotność statystyczna, błędy do unikania i narzędzia. Jak prowadzić testy A/B dla stron i emaili. Kompletny…"
        canonicalUrl="https://fotz.pl/blog/ab-testing-co-to"

        keywords="A/B Testing co to jest, A/B Testing definicja, czym jest A/B Testing, A/B Testing w marketingu, A/B Testing przykłady, jak działa A/B Testing, A/B Testing strategia"

        canonical="https://fotz.pl/blog/ab-testing-co-to"
      />
      <ArticleSchema
        title="A/B Testing — co to jest i jak prowadzić testy A/B?"
        description="Kompletny przewodnik po A/B testach: 6-krokowy proces, istotność statystyczna, MVP sample size, błędy i narzędzia do testowania."
        url="https://fotz.pl/blog/ab-testing-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "A/B Testing", url: "https://fotz.pl/blog/ab-testing-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "A/B Testing" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            A/B Testing — co to jest i jak prowadzić testy A/B?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A/B testing eliminuje zgadywanie z decyzji produktowych.
            Poznaj 6-krokowy proces, istotność statystyczną, błędy i narzędzia do testowania.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest A/B testing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>A/B testing</strong> to kontrolowany eksperyment where dwie wersje
              elementu są testowane jednocześnie na różnych segmentach użytkowników.
              Zamiast debatować "czy zmienić kolor przycisku?" — testujesz i dane
              odpowiadają. Eliminuje subiektywne opinie i HiPPO (Highest Paid Person's Opinion).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy takie jak Amazon, Booking.com czy Netflix prowadzą tysiące testów A/B
              równocześnie — to fundament kultury data-driven. Booking.com testuje
              ponad 1000 eksperymentów dziennie na swojej platformie.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1000+", opis: "testów A/B dziennie prowadzi Booking.com — A/B testing to serce kultury data-driven" },
                { stat: "95%", opis: "poziom ufności (confidence level) — standardowy próg istotności statystycznej" },
                { stat: "1 var.", opis: "na raz — złota zasada A/B testowania. Więcej zmiennych = nie wiesz co działa" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-krokowy proces A/B testowania</h2>
            <div className="space-y-4">
              {abTestProcess.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{step.krok}</h3>
                      <p className="text-slate-600 text-sm mb-2">{step.opis}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-xs">
                        <div className="bg-blue-50 rounded p-2">
                          <p className="font-semibold text-blue-600 mb-1">Kluczowe pytanie:</p>
                          <p className="text-blue-800 italic">{step.pytanie}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="font-semibold text-slate-500 mb-1">Output:</p>
                          <p className="text-slate-700">{step.output}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typy testów</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ</th>
                    <th className="p-3 text-left">Zmienne</th>
                    <th className="p-3 text-left">Kiedy stosować</th>
                    <th className="p-3 text-left">Przykład</th>
                  </tr>
                </thead>
                <tbody>
                  {abVsMvt.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.test}</td>
                      <td className="p-3 text-center text-slate-600">{row.zmienne}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Najczęstsze błędy w A/B testach</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {testingPitfalls.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-red-100">
                  <h3 className="font-bold text-red-700 mb-1">{p.błąd}</h3>
                  <p className="text-slate-600 text-sm">{p.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — A/B testing</h2>
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

      <RelatedArticles currentArticleId="ab-testing-co-to" />
      <ContactSection />
    </Layout>
  );
}
