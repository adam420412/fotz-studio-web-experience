import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Value Stream Mapping (VSM)?",
    answer:
      "Value Stream Mapping (mapowanie strumienia wartości) to narzędzie Lean Management służące do wizualizacji, analizy i optymalizacji przepływu materiałów i informacji przez cały proces — od zamówienia klienta do dostarczenia produktu lub usługi. VSM pokazuje zarówno czynności tworzące wartość (value-added), jak i straty (waste/muda). Celem jest identyfikacja wąskich gardeł, nadmiernych zapasów i zbędnych kroków w procesie.",
  },
  {
    question: "Skąd pochodzi Value Stream Mapping?",
    answer:
      "VSM wywodzi się z Toyota Production System (TPS) i metodologii Lean. Spopularyzowane przez Mike'a Rothera i Johna Shooka w książce 'Learning to See' (1998). Pierwotnie dla produkcji, dziś powszechnie stosowane w software development (Lean Software Development), usługach, healthcare i logistyce. W software development VSM pomaga zidentyfikować bottlenecks w pipeline od pomysłu do wdrożenia.",
  },
  {
    question: "Jakie są główne typy strat w VSM?",
    answer:
      "8 strat Lean (TIMWOODS): Transportation (niepotrzebny transport), Inventory (nadmierne zapasy/WIP), Motion (niepotrzebne ruchy ludzi), Waiting (czekanie na następny krok), Overproduction (produkcja ponad potrzeby), Overprocessing (nadmiernie złożone procesy), Defects (błędy wymagające poprawy), Skills (niewykorzystane umiejętności). W software: czekanie na review, WIP limitless, context switching, rework — wszystko to muda.",
  },
  {
    question: "Co to jest Lead Time i Cycle Time?",
    answer:
      "Lead Time (czas realizacji) to całkowity czas od momentu złożenia zamówienia/zgłoszenia do dostarczenia — wliczając wszelkie oczekiwania. Cycle Time (czas cyklu) to czas aktywnej pracy nad zadaniem bez oczekiwania. Różnica to najczęściej strata (waiting, queue). Przykład: ticket stworzony w poniedziałek, dostarczony w piątek = Lead Time 5 dni. Aktywna praca to 4 godziny = Cycle Time 4h. Pozostałe 36h to waste.",
  },
  {
    question: "Jak stworzyć Value Stream Map?",
    answer:
      "Kroki: 1) Wybierz rodzinę produktów/usług do mapowania, 2) Narysuj current state map — spacer przez cały proces z ołówkiem w ręku, 3) Zbierz dane dla każdego kroku (cycle time, lead time, WIP, defect rate), 4) Zidentyfikuj straty i wąskie gardła, 5) Zaprojektuj future state map — jak powinien wyglądać zoptymalizowany proces, 6) Stwórz plan działania i metryki sukcesu, 7) Wdróż i mierz. Cały team powinien uczestniczyć — nie tylko management.",
  },
];

const vsmMetrics = [
  { metryka: "Lead Time", definicja: "Całkowity czas od żądania do dostarczenia (wliczając oczekiwania)", benchmark: "Celem minimalizacja — zbyt długi = customer dissatisfaction" },
  { metryka: "Cycle Time", definicja: "Czas aktywnej pracy nad jednym elementem", benchmark: "Musi być mniejszy niż Lead Time — różnica = waste" },
  { metryka: "Process Efficiency", definicja: "Cycle Time / Lead Time × 100%", benchmark: "Typowo 5-30%. Cel: powyżej 50% = znaczna optymalizacja" },
  { metryka: "WIP (Work in Progress)", definicja: "Liczba zadań równocześnie w toku", benchmark: "Wysoki WIP = długie Lead Time. Little's Law: LT = WIP / Throughput" },
  { metryka: "Throughput", definicja: "Liczba zadań dostarczanych w jednostce czasu", benchmark: "Kluczowa dla planowania capacity i prognozowania" },
  { metryka: "Defect Rate", definicja: "% zadań wymagających poprawki lub rework", benchmark: "Im wyższy — tym więcej muda i dłuższy Lead Time" },
];

const leanWastes = [
  { muda: "T — Transport", software: "Przełączanie kontekstu między projektami, niepotrzebne przekazywanie zadań między teamami" },
  { muda: "I — Inventory", software: "Backlog z setkami nieprzetworzonymi user stories, niemerge'owane gałęzie, niesprawdzone code reviews" },
  { muda: "M — Motion", software: "Zbędne spotkania, poszukiwanie dokumentacji, przełączanie między narzędziami" },
  { muda: "W — Waiting", software: "Czekanie na: review, deployment, odpowiedź klienta, access, decyzję managementu" },
  { muda: "O — Overproduction", software: "Budowanie funkcji których nikt nie użyje, over-engineering, zbyt szczegółowe dokumenty" },
  { muda: "O — Overprocessing", software: "Zbyt rozbudowany proces review, nadmierne testy manualne, zbędne approval gates" },
  { muda: "D — Defects", software: "Bugi, rework, poprawki po złych wymaganiach, technicall debt który powoduje regresje" },
  { muda: "S — Skills", software: "Nieużywane umiejętności zespołu, senior developer na prostych zadaniach, brak cross-training" },
];

export default function BlogValueStreamMappingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Value Stream Mapping — co to jest? Mapowanie strumienia wartości"
        description="Value Stream Mapping (VSM) — definicja, 8 strat Lean (TIMWOODS), metryki (Lead Time, Cycle Time, WIP) i jak tworzyć mapę. Przewodnik po narzędziu Lean Management."
        canonicalUrl="https://fotz.pl/blog/value-stream-mapping-co-to"

        keywords="Value Stream Mapping co to jest, Value Stream Mapping definicja, czym jest Value Stream Mapping, Value Stream Mapping przykłady, jak działa Value Stream Mapping, Value Stream Mapping znaczenie, Value Stream Mapping przewodnik"
      />
      <ArticleSchema
        title="Value Stream Mapping — co to jest i jak mapować strumień wartości?"
        description="Kompletny przewodnik po VSM: 8 strat Lean w software, kluczowe metryki (Lead Time, Cycle Time, Process Efficiency) i jak tworzyć current i future state map."
        url="https://fotz.pl/blog/value-stream-mapping-co-to"
        datePublished="2024-01-26"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Value Stream Mapping", url: "https://fotz.pl/blog/value-stream-mapping-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Value Stream Mapping" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Value Stream Mapping — co to jest i jak mapować strumień wartości?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            VSM to narzędzie Lean które wizualizuje cały przepływ pracy — od pomysłu do dostarczenia.
            Poznaj 8 strat, metryki Lead Time i Cycle Time i jak stworzyć mapę procesu.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest Value Stream Mapping?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Value Stream Mapping (VSM)</strong> to narzędzie Lean służące do wizualizacji i analizy
              przepływu wartości przez cały proces — od żądania klienta do dostarczenia.
              Pokazuje zarówno czynności tworzące wartość, jak i straty (muda) w procesie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              VSM pochodzi z Toyota Production System, ale stosowane jest dziś w software development,
              usługach i healthcare. Kluczowe pytanie VSM: ile czasu tworzysz wartość, a ile tracisz na oczekiwanie?
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5–30%", opis: "typowa efektywność procesu — reszta to waiting i waste" },
                { stat: "1998", opis: "rok publikacji 'Learning to See' — biblia VSM Rothera i Shooka" },
                { stat: "Current → Future", opis: "VSM zawsze tworzy dwie mapy: stan obecny i stan docelowy" },
              ].map((s, i) => (
                <div key={i} className="bg-cyan-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-cyan-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki VSM</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {vsmMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-cyan-700 mb-1">{m.metryka}</h3>
                  <p className="text-slate-600 text-sm mb-2">{m.definicja}</p>
                  <p className="text-xs text-slate-400">{m.benchmark}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">8 strat Lean (TIMWOODS) w software</h2>
            <p className="text-slate-600 mb-8">VSM identyfikuje te straty — pierwszym krokiem jest ich nazwanie i zmierzenie.</p>
            <div className="space-y-3">
              {leanWastes.map((w, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex gap-4">
                  <div className="w-36 text-sm font-bold text-cyan-700 flex-shrink-0">{w.muda}</div>
                  <p className="text-slate-600 text-sm">{w.software}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Value Stream Mapping</h2>
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
