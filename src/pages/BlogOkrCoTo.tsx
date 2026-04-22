import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest OKR?",
    answer:
      "OKR (Objectives and Key Results) to framework zarządzania celami, w którym Objective (cel) definiuje ambitny kierunek, a Key Results (kluczowe wyniki) mierzą postęp. Objective odpowiada na pytanie 'dokąd idziemy?', Key Results na 'skąd wiemy że tam dotarliśmy?'. Stworzony przez Andrewa Grove'a w Intelu, spopularyzowany przez Google — gdzie John Doerr wprowadził go w 1999 roku. Dziś stosowany przez tysiące firm od startupów po korporacje.",
  },
  {
    question: "Czym OKR różni się od KPI?",
    answer:
      "KPI (Key Performance Indicators) mierzą bieżącą wydajność i stan operacyjny — co się dzieje teraz. OKR definiują transformacyjne cele na konkretny okres i mierzą zmianę — dokąd chcemy dojść. KPI są zazwyczaj stałe (np. NPS, uptime, przychód). OKR są kwartalne lub roczne, resetują się i są ambitne — dobry OKR zakłada 60-70% realizację jako sukces. Firmy używają obu: KPI do monitorowania operacji, OKR do wyznaczania kierunku zmian.",
  },
  {
    question: "Jak wyznaczyć dobre Key Results?",
    answer:
      "Dobre Key Results są: mierzalne (konkretna liczba lub procent), weryfikowalne (wiadomo czy osiągnięte), outcome-based (nie tasks — nie 'zrobimy X', ale 'osiągniemy X'), ambitne ale realistyczne (stretch goal: 60-70% realizacji = sukces), i niezależne od siebie (każdy KR mierzy inny aspekt celu). Test: jeśli KR można wstawić do checklisty zadań — to nie jest KR, to task.",
  },
  {
    question: "Jak często prowadzić OKR?",
    answer:
      "Typowy cykl OKR: roczne OKR na poziomie firmy (North Star), kwartalne OKR na poziomie zespołów (większość firm), tygodniowe check-iny (15-30 min: postęp, blokers, confidence level). Miesięczne grading (ocena postępu 0.0–1.0). Retrospektywa po każdym kwartale. Pierwsze dwa kwartały z OKR to zazwyczaj nauka procesu — nie oceniaj zbyt surowo.",
  },
  {
    question: "Czy OKR powinny być powiązane z wynagrodzeniami?",
    answer:
      "Zdecydowanie nie — to jeden z najczęstszych błędów. Gdy OKR są powiązane z bonusami, ludzie ustawiają łatwe do osiągnięcia cele (sandbagging) zamiast ambitnych. Google, Intel i większość firm z sukcesem OKR wyraźnie rozdziela OKR od ocen pracowniczych i wynagrodzeń. OKR to narzędzie do nauki i wyrównania kierunku — nie system oceny. Ocenę wydajności prowadź przez osobne narzędzie (performance reviews).",
  },
];

const okrStructure = [
  {
    element: "Objective",
    pytanie: "Dokąd idziemy? Co chcemy osiągnąć?",
    cechy: ["Inspirujący i motywujący", "Jakościowy (bez liczb)", "Osiągalny w kwartale/roku", "Jasny dla całego zespołu"],
    przykład: "Stać się pierwszym wyborem klientów w segmencie SMB w Polsce",
    antyprzykład: "Zwiększyć przychód o 30%",
    dlaczego: "Przychód to KR lub KPI — Objective ma inspirować kierunek, nie definiować liczbę",
  },
  {
    element: "Key Result 1",
    pytanie: "Jak zmierzymy realizację celu — wymiar 1?",
    cechy: ["Mierzalny i weryfikowalny", "Outcome, nie output", "Ambitny (stretch)"],
    przykład: "Osiągnąć NPS 60+ wśród klientów SMB (obecnie: 42)",
    antyprzykład: "Przeprowadzić 50 rozmów z klientami SMB",
    dlaczego: "Rozmowy to task. NPS 60+ to mierzalny wynik — skutek tych rozmów",
  },
  {
    element: "Key Result 2",
    pytanie: "Jak zmierzymy realizację celu — wymiar 2?",
    cechy: ["Inny aspekt niż KR1", "Konkretna wartość docelowa", "Uniezależniony od KR1"],
    przykład: "Zredukować churn SMB z 5% do 2.5% miesięcznie",
    antyprzykład: "Poprawić satysfakcję klientów SMB",
    dlaczego: "'Poprawić' nie jest mierzalne. Konkretna liczba — jest",
  },
  {
    element: "Key Result 3",
    pytanie: "Jak zmierzymy realizację celu — wymiar 3?",
    cechy: ["2-5 KR na Objective max", "Może być leading lub lagging indicator"],
    przykład: "Zwiększyć udział klientów SMB wśród nowych zakupów do 40% (obecnie: 27%)",
    antyprzykład: "Mieć więcej klientów SMB",
    dlaczego: "Bez punktu bazowego i celu — niemierzalne",
  },
];

const okrLevels = [
  { poziom: "Firmowy (Company OKR)", horyzont: "Roczny + kwartalny", tworzą: "CEO + leadership team", liczba: "3-5 Objectives, 3 KR each", przykład: "Zdominować rynek SMB SaaS w CEE" },
  { poziom: "Departamentowy (Team OKR)", horyzont: "Kwartalny", tworzą: "VP / Director + team leads", liczba: "2-4 Objectives, 3 KR each", przykład: "Sprzedaż: Zbudować engine nowych zakupów SMB" },
  { poziom: "Indywidualny (Personal OKR)", horyzont: "Kwartalny", tworzą: "Pracownik + manager", liczba: "1-3 Objectives, 2-3 KR each", przykład: "Stać się ekspertem od SMB onboardingu" },
];

const commonMistakes = [
  { błąd: "Task-based Key Results", przykład: "'Zorganizować 5 webinarów'", poprawka: "'Pozyskać 200 leadów przez webinary'" },
  { błąd: "Zbyt wiele OKR", przykład: "8 Objectives w kwartale", poprawka: "Max 3-5 Objectives — focus jest zasadą OKR" },
  { błąd: "OKR = business as usual", przykład: "'Utrzymać poziom sprzedaży'", poprawka: "OKR definiują zmianę/poprawę — BAU idzie do KPI" },
  { błąd: "Powiązanie z wynagrodzeniem", przykład: "Bonus = 100% realizacji OKR", poprawka: "OKR są ambitne — 70% realizacja to sukces, nie kara" },
  { błąd: "Set it and forget it", przykład: "Ustalenie w januari, sprawdzenie w marcu", poprawka: "Tygodniowe check-iny + miesięczny grading" },
];

export default function BlogOkrCoTo() {
  return (
    <Layout>
      <SEOHead
        title="OKR | Fotz Studio"
        description="OKR (Objectives and Key Results) — definicja, struktura, przykłady, różnica vs KPI i 5 najczęstszych błędów. Kompletny przewodnik po OKR dla firm i zespołów."
        canonicalUrl="https://fotz.pl/blog/okr-co-to-jest"

        keywords="OKR co to jest, OKR definicja, czym jest OKR, OKR przykłady, jak działa OKR, OKR znaczenie, OKR przewodnik"

        canonical="https://fotz.pl/blog/okr-co-to-jest"
      />
      <ArticleSchema
        title="OKR — co to jest i jak pisać Objectives and Key Results?"
        description="Kompletny przewodnik po OKR: struktura Objective + Key Results, 3 poziomy OKR, przykłady i najczęstsze błędy przy wdrożeniu."
        url="https://fotz.pl/blog/okr-co-to-jest"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "OKR — Objectives and Key Results", url: "https://fotz.pl/blog/okr-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "OKR", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            OKR — co to jest i jak pisać Objectives and Key Results?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            OKR to framework celów używany przez Google, Intel i tysiące firm.
            Poznaj strukturę Objective + Key Results, 3 poziomy OKR i jak unikać najczęstszych błędów.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest OKR?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>OKR (Objectives and Key Results)</strong> to framework zarządzania celami łączący
              ambitny, inspirujący kierunek (Objective) z konkretnymi, mierzalnymi wskaźnikami sukcesu
              (Key Results). Odpowiada na dwa pytania: "Dokąd idziemy?" i "Skąd wiemy, że tam dotarliśmy?"
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Stworzony przez Andy'ego Grove'a w Intelu w latach 70., spopularyzowany gdy John Doerr
              przyniósł go do Google w 1999 roku. Od tamtej pory OKR stały się jednym z najszerzej
              stosowanych frameworków wyznaczania celów w technologii i poza nią.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1999", opis: "rok wprowadzenia OKR do Google przez Johna Doerraa" },
                { stat: "60–70%", opis: "realizacja OKR uważana za sukces — celowo ambitne" },
                { stat: "Kwartalnie", opis: "typowa kadencja OKR dla zespołów — reset i focus co 90 dni" },
              ].map((s, i) => (
                <div key={i} className="bg-indigo-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-indigo-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Struktura OKR */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Struktura OKR z przykładami</h2>
            <div className="space-y-5">
              {okrStructure.map((el, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-indigo-700 text-lg mb-1">{el.element}</h3>
                  <p className="text-slate-500 text-sm mb-3 italic">Pytanie: {el.pytanie}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm mb-3">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Dobry przykład:</p>
                      <p className="text-green-800 italic">{el.przykład}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Antyprzykład:</p>
                      <p className="text-red-800 italic">{el.antyprzykład}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Dlaczego:</p>
                      <p className="text-orange-800">{el.dlaczego}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {el.cechy.map((c, j) => (
                      <span key={j} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full">{c}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 poziomy OKR */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 poziomy OKR w organizacji</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Poziom</th>
                    <th className="p-3 text-left">Horyzont</th>
                    <th className="p-3 text-left">Kto tworzy</th>
                    <th className="p-3 text-left">Liczba OKR</th>
                    <th className="p-3 text-left">Przykład Objective</th>
                  </tr>
                </thead>
                <tbody>
                  {okrLevels.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-indigo-700">{row.poziom}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.horyzont}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.tworzą}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.liczba}</td>
                      <td className="p-3 text-slate-600 text-sm italic">{row.przykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 błędów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 najczęstszych błędów przy OKR</h2>
            <div className="space-y-4">
              {commonMistakes.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{m.błąd}</h3>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="bg-red-50 rounded p-2">
                        <p className="text-xs font-semibold text-red-500 mb-1">Przykład błędu:</p>
                        <p className="text-red-700 italic">{m.przykład}</p>
                      </div>
                      <div className="bg-green-50 rounded p-2">
                        <p className="text-xs font-semibold text-green-500 mb-1">Jak poprawić:</p>
                        <p className="text-green-700">{m.poprawka}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — OKR</h2>
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

      <RelatedArticles currentArticleId="okr-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
