import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest risk management?",
    answer:
      "Risk management (zarządzanie ryzykiem) to systematyczny proces identyfikacji, oceny, priorytetyzacji i ograniczania ryzyk — czyli zdarzeń niepewnych, które mogą negatywnie wpłynąć na realizację celów projektu lub organizacji. Obejmuje: identyfikację ryzyk (co może pójść źle?), ocenę prawdopodobieństwa i wpływu, planowanie odpowiedzi (mitigate, accept, transfer, avoid), monitoring i raportowanie. Zarządzanie ryzykiem nie eliminuje ryzyk — redukuje ich prawdopodobieństwo lub skutki.",
  },
  {
    question: "Czym różni się ryzyko od issue?",
    answer:
      "Ryzyko (risk) to zdarzenie niepewne, które MOŻE się wydarzyć w przyszłości — zarządza się nim proaktywnie przez plany mitygacji i contingency. Issue to problem który JUŻ się wydarzył i wymaga natychmiastowej reakcji. W zarządzaniu projektami kluczowe jest oddzielenie rejestru ryzyk (risk log) od rejestru issues (issue log). Dobrze zarządzane ryzyko staje się issue rzadziej — bo team jest przygotowany.",
  },
  {
    question: "Jakie są strategie odpowiedzi na ryzyko?",
    answer:
      "Cztery strategie dla ryzyk negatywnych: Avoid (unikaj) — zmień plan by ryzyko nie mogło wystąpić; Transfer (przenieś) — przesuń konsekwencje na inną stronę (ubezpieczenie, umowy SLA, outsourcing); Mitigate (łagodź) — zmniejsz prawdopodobieństwo lub wpływ; Accept (zaakceptuj) — świadoma decyzja o braku działania (passive acceptance lub active acceptance z contingency plan). Dla ryzyk pozytywnych (opportunities): Exploit, Share, Enhance, Accept.",
  },
  {
    question: "Co to jest rejestr ryzyk (risk register)?",
    answer:
      "Rejestr ryzyk to dokument śledzący wszystkie zidentyfikowane ryzyka projektu lub organizacji. Zawiera dla każdego ryzyka: ID, opis, kategorię, prawdopodobieństwo (1-5 lub %), wpływ (1-5), poziom ryzyka (P × W), strategię odpowiedzi, właściciela, status i datę przeglądu. Risk register jest żywym dokumentem — aktualizowany regularnie (tygodniowo lub co sprint), nie jednorazowym ćwiczeniem. Standard PMI/PMBOK wymaga rejestru ryzyk dla każdego projektu.",
  },
  {
    question: "Jak oceniać ryzyko — prawdopodobieństwo i wpływ?",
    answer:
      "Standardowa metoda: macierz prawdopodobieństwo × wpływ (Probability × Impact Matrix). Skale: 1-5 lub Low/Medium/High/Critical. Wynik: P × W daje poziom ryzyka. Czerwone (High P × High I) — priorytet 1, natychmiastowa mitygacja; Pomarańczowe (Wysokie P lub I) — zarządzaj aktywnie; Żółte (Medium) — monitoruj regularnie; Zielone (Low P × Low I) — zaakceptuj lub monitoruj rzadko. Ważna zasada: ocena ryzyka powinna być robiona przez zespół — eliminuje blindspoty.",
  },
];

const riskCategories = [
  { kategoria: "Strategiczne", opis: "Ryzyko zmiany strategii, utraty rynku, nowych konkurentów", przykłady: "Nowy silny gracz na rynku, zmiana regulacji branżowych, pivot klienta kluczowego" },
  { kategoria: "Operacyjne", opis: "Ryzyko w procesach wewnętrznych, ludziach i systemach", przykłady: "Kluczowy pracownik odchodzi, awaria infrastruktury, błędy w procesie" },
  { kategoria: "Finansowe", opis: "Ryzyko przepływów pieniężnych, kursów walut, kredytów", przykłady: "Opóźnienie płatności od klienta, wzrost kosztów, utrata grantu" },
  { kategoria: "Technologiczne", opis: "Ryzyko związane z systemami IT, cyberbezpieczeństwem, innowacjami", przykłady: "Atak ransomware, awaria systemu, obsolescence technologii" },
  { kategoria: "Prawne / Compliance", opis: "Ryzyko regulacyjne, umowne, Intellectual Property", przykłady: "Zmiana RODO, spór umowny, naruszenie patentu" },
  { kategoria: "Reputacyjne", opis: "Ryzyko utraty zaufania klientów, mediów lub rynku", przykłady: "Kryzys medialny, wyciek danych klientów, negatywne opinie" },
];

const riskResponseStrategies = [
  { strategia: "Avoid (Unikaj)", kiedy: "Ryzyko jest krytyczne i nie do zaakceptowania", jak: "Zmień zakres projektu, porzuć technologię, zmień dostawcę, odłóż decyzję", przykład: "Unikaj wdrożenia nowego systemu w szczycie sezonu sprzedażowego" },
  { strategia: "Transfer (Przenieś)", kiedy: "Ryzyko można przenieść na inną stronę za akceptowalną cenę", jak: "Ubezpieczenie, umowy SLA z karami, outsourcing ryzycznej aktywności", przykład: "Ubezpieczenie odpowiedzialności cywilnej, klauzula SLA z dostawcą" },
  { strategia: "Mitigate (Łagodź)", kiedy: "Ryzyko można zmniejszyć przez działania proaktywne", jak: "Redundancja systemów, szkolenia, backup dostawców, early warning indicators", przykład: "Backup serwera + plan RTO, szkolenie zapasowego specjalisty" },
  { strategia: "Accept (Zaakceptuj)", kiedy: "Ryzyko jest niskie lub koszt mitygacji jest wyższy niż potencjalna strata", jak: "Passive: brak działania + monitoring. Active: contingency plan na wypadek realizacji", przykład: "Zaakceptowanie ryzyka opóźnienia delivery przy niskim P×I" },
];

const riskRegisterColumns = [
  "ID ryzyka",
  "Opis ryzyka",
  "Kategoria",
  "Prawdopodobieństwo (1-5)",
  "Wpływ (1-5)",
  "Poziom (P × W)",
  "Strategia",
  "Plan mitygacji",
  "Właściciel",
  "Status",
  "Data przeglądu",
];

export default function BlogRiskManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Risk Management — co to jest? Zarządzanie ryzykiem w projekcie i biznesie"
        description="Risk management — definicja, 6 kategorii ryzyk, 4 strategie odpowiedzi (Avoid, Transfer, Mitigate, Accept), rejestr ryzyk i macierz P×W. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/risk-management-co-to"

        keywords="Risk Management co to jest, Risk Management definicja, czym jest Risk Management, Risk Management przykłady, jak działa Risk Management, Risk Management znaczenie, Risk Management przewodnik"
      />
      <ArticleSchema
        title="Risk Management — co to jest i jak zarządzać ryzykiem?"
        description="Kompletny przewodnik po risk management: 6 kategorii ryzyk, 4 strategie odpowiedzi, rejestr ryzyk i macierz prawdopodobieństwo × wpływ."
        url="https://fotz.pl/blog/risk-management-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Risk Management", url: "https://fotz.pl/blog/risk-management-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Risk Management" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Risk Management — co to jest i jak zarządzać ryzykiem?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Zarządzanie ryzykiem nie eliminuje niepewności — sprawia, że jesteś na nią przygotowany.
            Poznaj 6 kategorii ryzyk, 4 strategie odpowiedzi i jak prowadzić rejestr ryzyk.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest risk management?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Risk management</strong> to systematyczny proces identyfikacji, oceny,
              priorytetyzacji i ograniczania ryzyk — zdarzeń niepewnych mogących negatywnie
              wpłynąć na realizację celów. Dotyczy zarówno poszczególnych projektów (project risk management)
              jak i całych organizacji (enterprise risk management).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowa zasada: ryzyko to niepewność, nie zagrożenie. Może być negatywne (threat)
              lub pozytywne (opportunity). Dobry risk management zarządza oboma —
              minimalizuje zagrożenia i maksymalizuje szanse.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <p className="text-lg font-semibold mb-2 text-amber-400">Ryzyko vs. Issue:</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-amber-300 font-semibold mb-1">Ryzyko (Risk):</p>
                  <p className="text-slate-300">Zdarzenie które MOŻE się wydarzyć — zarządzasz proaktywnie przez mitygację i plany contingency.</p>
                </div>
                <div className="bg-slate-800 rounded p-3">
                  <p className="text-red-300 font-semibold mb-1">Issue (Problem):</p>
                  <p className="text-slate-300">Zdarzenie które JUŻ się wydarzyło — wymaga natychmiastowej reakcji i eskalacji.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kategorii */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kategorii ryzyk biznesowych</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {riskCategories.map((r, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-red-700 mb-1">{r.kategoria}</h3>
                  <p className="text-slate-600 text-sm mb-2">{r.opis}</p>
                  <div className="bg-red-50 rounded p-2 text-xs text-red-700">
                    <span className="font-semibold">Przykłady: </span>{r.przykłady}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 strategie */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 strategie odpowiedzi na ryzyko</h2>
            <div className="space-y-4">
              {riskResponseStrategies.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.strategia}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy stosować:</p>
                      <p className="text-blue-800">{s.kiedy}</p>
                    </div>
                    <div className="bg-slate-100 rounded p-3">
                      <p className="text-xs font-semibold text-slate-600 mb-1">Jak:</p>
                      <p className="text-slate-700">{s.jak}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Przykład:</p>
                      <p className="text-green-800 italic">{s.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Rejestr ryzyk */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Rejestr ryzyk — co zawiera?</h2>
            <p className="text-slate-600 mb-6">Risk register to żywy dokument śledzący wszystkie zidentyfikowane ryzyka. Aktualizowany regularnie — nie jednorazowe ćwiczenie.</p>
            <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
              <div className="p-4 flex flex-wrap gap-2">
                {riskRegisterColumns.map((col, i) => (
                  <span key={i} className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-700 font-medium">
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — risk management</h2>
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

      <ContactSection />
    </Layout>
  );
}
