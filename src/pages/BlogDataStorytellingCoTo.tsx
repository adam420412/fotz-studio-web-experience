import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest data storytelling?",
    answer:
      "Data storytelling (narracja danych) to sztuka łączenia danych, wizualizacji i opowieści w komunikat, który jest jednocześnie rzetelny analitycznie i angażujący emocjonalnie. Data storytelling nie polega na samym pokazywaniu wykresów — chodzi o budowanie narracji, która pomaga odbiorcy zrozumieć co oznaczają liczby i jakie decyzje powinny za nimi podążać.",
  },
  {
    question: "Dlaczego data storytelling jest ważny?",
    answer:
      "Ludzki mózg przetwarza informacje wizualne 60 000× szybciej niż tekst. Jednocześnie decyzje biznesowe podejmowane są głównie przez emocje, a dopiero potem racjonalizowane przez dane. Data storytelling łączy moc danych (wiarygodność) z mocą opowieści (emocja i zapamiętanie) — co czyni go najskuteczniejszym narzędziem komunikacji w organizacjach opartych na danych.",
  },
  {
    question: "Jakie są 3 elementy data storytelling?",
    answer:
      "Trzy filary data storytelling to: Dane (Data) — rzetelne, dokładne, odpowiednie do kontekstu analizy; Wizualizacja (Visualization) — graficzne przedstawienie danych wzmacniające przekaz, nie zaciemniające go; Narracja (Narrative) — opowieść, która kontekstualizuje dane, wyjaśnia 'dlaczego' i prowadzi do wniosków. Usunięcie któregokolwiek elementu osłabia cały przekaz.",
  },
  {
    question: "Jakie narzędzia do data storytelling?",
    answer:
      "Popularne narzędzia: Tableau i Power BI (interaktywne dashboardy), Google Data Studio / Looker Studio (darmowe, Google-native), Datawrapper i Flourish (proste wykresy do publikacji), Canva i Adobe Illustrator (infografiki), Flourish i RAWgraphs (zaawansowane wizualizacje), R i Python (matplotlib, seaborn, ggplot2) dla programistów, oraz prezentacje PowerPoint i Keynote z zintegrowanymi danymi.",
  },
  {
    question: "Jak uniknąć misleadingu w data storytelling?",
    answer:
      "Najczęstsze błędy data storytelling to: truncated Y-axis (oś Y niezaczynająca od zera, wyolbrzymiająca różnice), cherry-picking danych, mylenie korelacji z przyczynowością, brak kontekstu dla wartości bezwzględnych, nieodpowiedni typ wykresu do danych, oraz zbyt skomplikowane wizualizacje. Zasada: prezentuj dane uczciwie — Twoja wiarygodność jest ważniejsza niż jeden efektowny slajd.",
  },
];

const dsTrifecta = [
  {
    element: "Dane (Data)",
    ikona: "📊",
    opis: "Fundament każdej opowieści o danych. Muszą być rzetelne, aktualne i odpowiednie do pytania, które chcesz odpowiedzieć.",
    zasady: ["Sprawdź źródło i metodologię", "Użyj odpowiedniego zakresu czasowego", "Uwzględnij kontekst (benchmark, trend)", "Nie cherry-pick wyników"],
  },
  {
    element: "Wizualizacja (Visualization)",
    ikona: "📈",
    opis: "Graficzne przedstawienie danych wzmacniające rozumienie — nie dekoracja, lecz narzędzie poznawcze.",
    zasady: ["Wybierz typ wykresu odpowiedni do danych", "Ogranicz kolory do 3–4 maksymalnie", "Eliminuj chart junk (zbędne elementy)", "Podkreśl najważniejszy punkt kolorem/rozmiarem"],
  },
  {
    element: "Narracja (Narrative)",
    ikona: "📝",
    opis: "Opowieść nadająca danym sens. Wyjaśnia 'dlaczego' i 'co z tym zrobić' — bez niej dane to tylko liczby.",
    zasady: ["Zacznij od wniosku (nie od danych)", "Prowadź odbiorcę przez logikę", "Podkreśl implikacje dla decyzji", "Używaj konkretnych porównań i analogii"],
  },
];

const chartTypes = [
  { wykres: "Bar Chart (słupkowy)", kiedy: "Porównanie wartości między kategoriami", przykład: "Sprzedaż w poszczególnych miastach", unikaj: "Zbyt wielu kategorii (powyżej 10)" },
  { wykres: "Line Chart (liniowy)", kiedy: "Trend w czasie", przykład: "Wzrost MRR przez 12 miesięcy", unikaj: "Danych bez wyraźnego trendu" },
  { wykres: "Pie Chart (kołowy)", kiedy: "Proporcje składowych całości (maks. 5 segmentów)", przykład: "Udział kanałów w ruchu", unikaj: "Więcej niż 5 segmentów, podobnych wartości" },
  { wykres: "Scatter Plot (punktowy)", kiedy: "Korelacja między dwiema zmiennymi", przykład: "Zależność budżetu od konwersji", unikaj: "Gdy odbiorca nie rozumie korelacji" },
  { wykres: "Heat Map (mapa cieplna)", kiedy: "Intensywność zjawiska w macierzy czasu/kategorii", przykład: "Aktywność użytkowników wg godziny i dnia", unikaj: "Kiedy trzeba dokładnych wartości" },
  { wykres: "Funnel Chart (lejkowy)", kiedy: "Kolejne etapy procesu ze spadkiem", przykład: "Wizyta → rejestracja → zakup", unikaj: "Procesów bez naturalnego lejka" },
];

const dsProcess = [
  {
    krok: "Zdefiniuj pytanie biznesowe",
    opis: "Zanim dotkniesz danych: co dokładnie chcesz zrozumieć? Jaką decyzję ma wspierać ta analiza? Niejasne pytanie = bezużyteczna analiza.",
  },
  {
    krok: "Zbierz i wyczyść dane",
    opis: "Zbierz dane z odpowiednich źródeł. Oczyść z duplikatów, błędów, outlierów. Sprawdź kompletność. Złe dane = błędne wnioski.",
  },
  {
    krok: "Analizuj i szukaj insightów",
    opis: "Eksploruj dane w poszukiwaniu wzorców, anomalii, trendów. Zadaj pytanie: 'co to oznacza dla biznesu?'. Insight to dane + interpretacja + implikacja.",
  },
  {
    krok: "Wybierz właściwe wizualizacje",
    opis: "Dobierz typ wykresu do danych i audytorium. Uproszczone wykresy dla managementu, szczegółowe dla analityków. Design musi służyć rozumieniu.",
  },
  {
    krok: "Zbuduj narrację",
    opis: "Ułóż dane w logiczną opowieść: kontekst → problem/pytanie → odkrycie → wniosek/rekomendacja. Zacznij od pointy, nie od procesu.",
  },
  {
    krok: "Dostosuj do odbiorcy",
    opis: "CEO chce jeden numer i rekomendację. Analyst chce metodologię i surowe dane. Product manager chce wzorce zachowań. Jedna analiza, wiele wersji prezentacji.",
  },
];

export default function BlogDataStorytellingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Data Storytelling — co to jest? Opowiadanie historii z danych"
        description="Data storytelling — definicja, 3 elementy (dane, wizualizacja, narracja), typy wykresów i 6-krokowy proces. Jak skutecznie komunikować dane i analizy w…"
        canonicalUrl="https://fotz.pl/blog/data-storytelling-co-to"

        keywords="Data Storytelling co to jest, Data Storytelling definicja, czym jest Data Storytelling, Data Storytelling przykłady, jak działa Data Storytelling, Data Storytelling znaczenie, Data Storytelling przewodnik"

        canonical="https://fotz.pl/blog/data-storytelling-co-to"
      />
      <ArticleSchema
        title="Data Storytelling — co to jest i jak stosować?"
        description="Kompletny przewodnik po data storytelling: trifecta danych-wizualizacji-narracji, dobór wykresów i 6-krokowy proces."
        url="https://fotz.pl/blog/data-storytelling-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Data Storytelling", url: "https://fotz.pl/blog/data-storytelling-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Data Storytelling" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Data Storytelling — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Data storytelling łączy rzetelność danych z mocą opowieści. Poznaj trifectę danych-wizualizacji-narracji,
            jak dobierać wykresy i 6-krokowy proces budowania przekonujących analiz.
          </p>
        </div>
      </section>

      {/* Trifecta */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">3 elementy data storytelling</h2>
            <p className="text-lg text-slate-600 mb-8">Skuteczna narracja danych wymaga wszystkich 3 elementów — usunięcie któregokolwiek osłabia cały przekaz.</p>
            <div className="grid md:grid-cols-3 gap-5">
              {dsTrifecta.map((e, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="text-4xl mb-3">{e.ikona}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{e.element}</h3>
                  <p className="text-slate-600 text-sm mb-4">{e.opis}</p>
                  <ul className="space-y-1">
                    {e.zasady.map((z, j) => (
                      <li key={j} className="text-xs text-slate-600 flex gap-2">
                        <span className="text-cyan-500 flex-shrink-0">✓</span>
                        {z}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Typy wykresów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kiedy używać jakiego wykresu?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ wykresu</th>
                    <th className="p-3 text-left">Kiedy używać</th>
                    <th className="p-3 text-left">Przykład</th>
                    <th className="p-3 text-left">Unikaj gdy...</th>
                  </tr>
                </thead>
                <tbody>
                  {chartTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.wykres}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.przykład}</td>
                      <td className="p-3 text-red-600 text-sm">{row.unikaj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-krokowy proces data storytelling</h2>
            <div className="space-y-5">
              {dsProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.krok}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — data storytelling</h2>
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

      <ContactSection />
    </Layout>
  );
}
