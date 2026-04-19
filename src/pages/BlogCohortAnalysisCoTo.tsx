import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest cohort analysis?",
    answer:
      "Cohort analysis (analiza kohort) to metoda analityczna polegająca na grupowaniu użytkowników/klientów według wspólnej cechy (najczęściej daty pierwszego użycia lub zakupu) i śledzeniu ich zachowań w czasie. Kohorta to grupa ludzi, którzy doświadczyli tego samego zdarzenia w tym samym okresie. Analiza kohort odpowiada na pytanie: czy nowi użytkownicy pozyskani w tym miesiącu zachowują się lepiej niż pozyskani w poprzednim?",
  },
  {
    question: "Jakie są typy kohort?",
    answer:
      "Główne typy kohort: Acquisition Cohorts — grupowanie wg daty rejestracji/pierwszego zakupu (najczęstszy typ), Behavioral Cohorts — grupowanie wg wykonanego działania (np. użytkownicy którzy użyli Feature X), Predictive Cohorts — AI przewiduje do której kohorty należy użytkownik na podstawie wczesnych sygnałów. Acquisition cohorts są punktem wyjścia, behavioral cohorts dają głębszy insight.",
  },
  {
    question: "Jak czytać tablicę retencji kohort?",
    answer:
      "Tablica retencji (retention table) ma wiersze = kohorty (np. miesiące rejestracji) i kolumny = okresy po rejestracji (Day 1, Day 7, Day 30). Każda komórka pokazuje % użytkowników z danej kohorty aktywnych w danym okresie. Czytanie: 'Kohorta styczeń — 100% w Day 0, 45% w Day 1, 25% w Day 7, 15% w Day 30.' Cel: im wolniejszy spadek i wyższe wartości w późniejszych kolumnach, tym lepsza retencja.",
  },
  {
    question: "Co oznacza krzywa retencji w cohort analysis?",
    answer:
      "Krzywa retencji pokazuje jak szybko kohorta 'traci' użytkowników po czasie. Trzy wzorce: krzywa płaska (retention flattens) — użytkownicy osiągają 'habitual use', poziom stabilizuje się — to zdrowy produkt; krzywa dotykająca 0 — brak powracających użytkowników, produkt nie ma wartości długoterminowej; krzywa ze 'schodkami' — retencja spada po kluczowych momentach (np. koniec trialu).",
  },
  {
    question: "Jak używać cohort analysis do poprawy produktu?",
    answer:
      "Praktyczne zastosowania: porównaj kohorty przed/po wdrożeniu nowej funkcji — czy retencja wzrosła? Identyfikuj 'złote kohorty' (miesiące z najwyższą retencją) i analizuj co bylo inne w akwizycji. Segmentuj kohorty wg kanału pozyskania — użytkownicy z organica vs. paid — która kohorta ma wyższe LTV? Śledź jak zmieniało się Day 30 retention historycznie i koreluj ze zmianami produktu.",
  },
];

const cohortTypes = [
  {
    typ: "Acquisition Cohort",
    definicja: "Grupowanie użytkowników według daty pierwszego kontaktu z produktem (rejestracja, zakup, instalacja)",
    przykład: "Wszyscy użytkownicy którzy zarejestrowali się w styczniu 2024 tworzą jedną kohortę",
    zastosowanie: "Mierzenie retencji, LTV, churn rate wg miesiąca pozyskania",
    kiedy: "Domyślny typ — punktem wyjścia każdej analizy retencji",
  },
  {
    typ: "Behavioral Cohort",
    definicja: "Grupowanie użytkowników według wykonanego działania lub feature w produktcie",
    przykład: "Użytkownicy którzy użyli 'Collaboration Feature' w ciągu pierwszych 7 dni",
    zastosowanie: "Identyfikacja 'power features' — co różni użytkowników retained od churned",
    kiedy: "Gdy chcesz znaleźć korelacje między zachowaniami a retencją",
  },
  {
    typ: "Size/Segment Cohort",
    definicja: "Grupowanie według atrybutów demograficznych lub firmograficznych",
    przykład: "Firmy 1–10 pracowników vs. 11–50 vs. 50+ pracowników",
    zastosowanie: "ICP refinement — który segment klientów ma najlepszy LTV/churn",
    kiedy: "B2B SaaS — segmentacja firm wg wielkości, branży, lokalizacji",
  },
];

const retentionPatterns = [
  {
    wzorzec: "Stabilna retencja (Flattening Curve)",
    opis: "Retencja spada początkowo, potem stabilizuje się na stałym poziomie (np. 20–30%)",
    interpretacja: "Produkt ma core value — subset użytkowników staje się habitual users",
    działanie: "Zwiększ % użytkowników docierających do stabilnego poziomu przez lepszy onboarding",
    przykład: "Slack, Spotify, Gmail — produkty daily habits",
  },
  {
    wzorzec: "Retencja do zera (Death Curve)",
    opis: "Retencja spada do 0% w ciągu 30–60 dni dla wszystkich kohort",
    interpretacja: "Brak product-market fit — produkt nie dostarcza wartości długoterminowej",
    działanie: "Przed skalowaniem marketingu — znajdź i napraw core value proposition",
    przykład: "Produkty bez PMF — próba skalowania przyspieszy tylko odpływ",
  },
  {
    wzorzec: "Smiling Curve (U-shape)",
    opis: "Retencja spada, a potem nieoczekiwanie rośnie w późniejszych okresach",
    interpretacja: "Lojalni użytkownicy wracają po przerwie — produkt sezonowy lub cykliczny",
    działanie: "Zidentyfikuj co powoduje powrót i wzmocnij te triggery",
    przykład: "Produkty do deklaracji podatkowych, planowania urlopów",
  },
  {
    wzorzec: "Rosnące kohorty (Improving Retention)",
    opis: "Nowsze kohorty mają wyraźnie lepszą retencję niż starsze",
    interpretacja: "Firma poprawia produkt lub targetuje lepszy ICP — pozytywny trend",
    działanie: "Kontynuuj kierunek zmian, przeanalizuj co dokładnie poprawiło retencję",
    przykład: "Firmy w fazie product-market fit discovery",
  },
];

const cohortMetrics = [
  { metryka: "Day 1 Retention", definicja: "% użytkowników wracających następnego dnia", benchmark: "Mobile apps: 25–40%. SaaS: 60–80%" },
  { metryka: "Day 7 Retention", definicja: "% użytkowników aktywnych tydzień po rejestracji", benchmark: "Mobile apps: 10–20%. SaaS: 40–60%" },
  { metryka: "Day 30 Retention", definicja: "% użytkowników aktywnych miesiąc po rejestracji", benchmark: "Mobile apps: 5–15%. SaaS: 25–45%" },
  { metryka: "Retention Rate by Cohort", definicja: "Porównanie Day N retention różnych kohort", benchmark: "Trend rosnący = poprawa produktu" },
  { metryka: "Average LTV by Cohort", definicja: "Średnia wartość życiowa klienta wg kohorty", benchmark: "Powinien rosnąć lub być stabilny" },
  { metryka: "Time to Churn", definicja: "Średni czas od aktywacji do rezygnacji wg kohorty", benchmark: "Dłuższy czas = wyższe LTV" },
];

export default function BlogCohortAnalysisCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Cohort Analysis | Fotz Studio"
        description="Cohort analysis — definicja, 3 typy kohort, wzorce krzywej retencji, kluczowe metryki i jak czytać tablicę retencji. Kompletny przewodnik po analizie kohort."
        canonicalUrl="https://fotz.pl/blog/cohort-analysis-co-to"

        keywords="Cohort Analysis co to jest, Cohort Analysis definicja, czym jest Cohort Analysis, Cohort Analysis przykłady, jak działa Cohort Analysis, Cohort Analysis znaczenie, Cohort Analysis przewodnik"

        canonical="https://fotz.pl/blog/cohort-analysis-co-to"
      />
      <ArticleSchema
        title="Cohort Analysis — co to jest i jak analizować retencję użytkowników?"
        description="Kompletny przewodnik po cohort analysis: 3 typy kohort, 4 wzorce krzywej retencji, metryki i praktyczne zastosowania."
        url="https://fotz.pl/blog/cohort-analysis-co-to"
        datePublished="2024-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cohort Analysis", url: "https://fotz.pl/blog/cohort-analysis-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Cohort Analysis" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Cohort Analysis — co to jest i jak analizować retencję?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Analiza kohort ujawnia jak rzeczywiście zachowują się Twoi użytkownicy w czasie.
            Poznaj 3 typy kohort, jak czytać tablicę retencji i 4 wzorce krzywej retencji.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest cohort analysis?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Cohort analysis</strong> to technika analityczna, która grupuje użytkowników
              według wspólnej cechy — najczęściej daty pierwszego użycia produktu — i śledzi
              ich zachowania przez kolejne okresy. Zamiast patrzeć na zagregowane liczby
              (łączna retencja = 30%), kohorty pokazują <em>jak różne grupy zachowują się inaczej</em>
              i jak poprawiasz (lub nie) produkt w czasie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Agregowane metryki mogą ukrywać prawdę: gdy tracisz starych użytkowników
              w tym samym tempie co pozyskujesz nowych, całkowita liczba użytkowników
              pozostaje stała — ale produkt umiera. Kohorty to ujawniają.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="font-semibold text-amber-900 mb-2">Kluczowa zasada cohort analysis:</p>
              <p className="text-amber-800 text-sm">
                Porównuj kohorty w tym samym "wieku" — Day 30 retention kohorty z marca
                porównuj z Day 30 retention kohorty z kwietnia, nie z February Day 45.
                Inaczej porównujesz jabłka z gruszkami.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 typy kohort */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 typy kohort</h2>
            <div className="space-y-5">
              {cohortTypes.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{c.typ}</h3>
                      <p className="text-slate-600 mb-3">{c.definicja}</p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-amber-50 rounded p-3">
                          <p className="text-xs font-semibold text-amber-600 mb-1">Przykład:</p>
                          <p className="text-amber-800 italic">{c.przykład}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Zastosowanie:</p>
                          <p className="text-slate-700">{c.zastosowanie}</p>
                        </div>
                        <div className="bg-blue-50 rounded p-3">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy używać:</p>
                          <p className="text-blue-800">{c.kiedy}</p>
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

      {/* 4 wzorce krzywej retencji */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 wzorce krzywej retencji — co oznaczają?</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {retentionPatterns.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{p.wzorzec}</h3>
                  <p className="text-slate-600 text-sm mb-3">{p.opis}</p>
                  <div className="space-y-2">
                    <div className="bg-white rounded p-2 border border-slate-200">
                      <p className="text-xs font-semibold text-slate-500">Interpretacja:</p>
                      <p className="text-slate-700 text-sm">{p.interpretacja}</p>
                    </div>
                    <div className="bg-amber-50 rounded p-2">
                      <p className="text-xs font-semibold text-amber-600">Działanie:</p>
                      <p className="text-amber-800 text-sm">{p.działanie}</p>
                    </div>
                    <p className="text-xs text-slate-400 italic">Przykład: {p.przykład}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki cohort analysis</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Definicja</th>
                    <th className="p-3 text-left">Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {cohortMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-amber-700">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.definicja}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.benchmark}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — cohort analysis</h2>
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

      <RelatedArticles currentArticleId="cohort-analysis-co-to" />
      <ContactSection />
    </Layout>
  );
}
