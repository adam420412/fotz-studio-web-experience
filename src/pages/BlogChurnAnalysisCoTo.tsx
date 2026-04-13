import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest churn i jak go liczyć?",
    answer:
      "Churn (odpływ klientów) to wskaźnik mierzący jaki procent klientów rezygnuje z produktu lub usługi w danym okresie. Wzór: Churn Rate = (Liczba utraconych klientów w okresie / Liczba klientów na początku okresu) × 100. Przykład: 1000 klientów na początku miesiąca, 50 zrezygnowało = 5% monthly churn. Roczny churn = 1 − (1 − monthly churn)^12. 5% monthly churn = ~46% annual churn — skala, która niszczy biznes.",
  },
  {
    question: "Jaki poziom churn rate jest akceptowalny?",
    answer:
      "Benchmarki różnią się branżowo: SaaS B2B: dobry poniżej 5% rocznie (poniżej 0.5% miesięcznie), akceptowalny poniżej 10% rocznie; SaaS B2C / consumer apps: dobry poniżej 5% miesięcznie; E-commerce: roczny churn 20–40% jest normą; Telco/media: 1–2% miesięcznie. Najważniejszy benchmark: porównaj swój churn z LTV/CAC ratio — jeśli klienci odchodzą zanim zwrócą koszt pozyskania, biznes traci.",
  },
  {
    question: "Czym jest revenue churn vs. customer churn?",
    answer:
      "Customer churn mierzy liczbę klientów którzy odeszli. Revenue churn (MRR Churn) mierzy procent przychodów utraconych przez churning i downgrade. Net Revenue Retention (NRR) uwzględnia zarówno churn jak i expansion revenue (upsell/cross-sell) — jeśli NRR powyżej 100%, firma rośnie nawet bez nowych klientów. SaaS firmy klasy światowej mają NRR 120–150%.",
  },
  {
    question: "Jak przewidzieć churn zanim nastąpi?",
    answer:
      "Predyktory churnu (leading indicators): spadek aktywności (DAU/MAU), zmniejszenie liczby active users z konta (B2B), brak użycia kluczowych funkcji po onboardingu, zmiana osoby kontaktowej/deali w CRM, negatywne odpowiedzi w NPS (Detractors), wydłużenie Time to Resolution w support, brak odpowiedzi na emaile nurturowe. Modele ML można trenować na danych historycznych churnu.",
  },
  {
    question: "Jakie strategie redukują churn?",
    answer:
      "Kluczowe strategie anty-churn: poprawa onboardingu (Time to First Value), proaktywna interwencja przy early warning signals (Customer Success automation), regular business reviews z klientami B2B, win-back kampanie dla niedawno churned, analizy exit interviews, program lojalnościowy, feature education dla nieaktywnych użytkowników, oraz model predykcyjny do priorytetyzacji interwencji.",
  },
];

const churnTypes = [
  {
    typ: "Voluntary Churn (aktywny)",
    opis: "Klient świadomie rezygnuje — cancelluje subskrypcję, nie odnawia umowy, przechodzi do konkurencji",
    przyczyny: "Brak wartości, lepsza oferta konkurencji, zmiana potrzeb, problemy z produktem, zbyt wysoka cena",
    walka: "Exit interview, win-back campaigns, product improvements, pricing adjustments",
  },
  {
    typ: "Involuntary Churn (pasywny)",
    opis: "Klient odchodzi mimo braku intencji — expired card, failed payment, techniczny błąd",
    przyczyny: "Karta kredytowa wygasła, zmiana karty, bank odrzucił transakcję, zapomnienie o odnowieniu",
    walka: "Dunning management, card updater, payment retry logic, email reminders",
  },
  {
    typ: "Revenue Churn (downgrade)",
    opis: "Klient pozostaje ale zmniejsza wartość — przechodzi na niższy plan lub redukuje licencje",
    przyczyny: "Redukcja kosztów w firmie, korzystanie tylko z podstawowych funkcji, reorganizacja zespołu",
    walka: "Value demonstration, success milestones, upsell conversations, feature adoption",
  },
  {
    typ: "Early Churn (no activation)",
    opis: "Klient rezygnuje w pierwszym tygodniu lub miesiącu — brak aktywacji lub 'aha moment'",
    przyczyny: "Słaby onboarding, zbyt skomplikowany produkt, niezrozumienie wartości, brak integration",
    walka: "Onboarding optimization, in-app guidance, human touch przy onboardingu B2B",
  },
];

const churnMetrics = [
  { metryka: "Monthly Churn Rate", wzór: "(Utraceni klienci / Klienci na początku) × 100", przykład: "50/1000 = 5% MoM churn", cel: "Poniżej 2% MoM dla consumer, poniżej 0.5% dla B2B SaaS" },
  { metryka: "Annual Churn Rate", wzór: "1 − (1 − monthly churn)^12", przykład: "5% MoM = ~46% roczny churn", cel: "Poniżej 10% rocznie dla SaaS B2B" },
  { metryka: "Net Revenue Retention (NRR)", wzór: "(MRR końcowy / MRR początkowy) × 100 — bez nowych klientów", przykład: "Startowe $100k MRR → $110k = 110% NRR", cel: "Powyżej 100% (expansion wyprzedza churn)" },
  { metryka: "Gross Revenue Retention (GRR)", wzór: "Procent MRR zachowany bez uwzględnienia expansion", przykład: "Zachowano $90k ze $100k = 90% GRR", cel: "Powyżej 85% dla SaaS B2B" },
  { metryka: "Customer LTV", wzór: "ARPU / Churn Rate miesięczny", przykład: "$100 ARPU / 5% churn = $2000 LTV", cel: "LTV/CAC ratio powyżej 3:1" },
  { metryka: "Churn Cohort Analysis", wzór: "Churn rate wg kohorty pozyskania", przykład: "Kohorta styczeń vs. kohorta czerwiec — która ma niższy churn?", cel: "Identyfikacja 'złotych' kanałów i kohort" },
];

const retentionPlaybook = [
  {
    etap: "Onboarding (0–30 dni)",
    ryzyko: "Najwyższe — 40–60% early churn w pierwszym miesiącu",
    działania: "Time to First Value, in-app guidance, onboarding emails, human check-in dla B2B",
    metryki: "Activation rate, Day 7/14/30 retention, onboarding completion rate",
  },
  {
    etap: "Adoption (30–90 dni)",
    ryzyko: "Klient używa produktu ale nie odkrył pełnej wartości",
    działania: "Feature adoption campaigns, webinary, success milestones, usage nudges",
    metryki: "Feature adoption rate, breadth of use, engagement score",
  },
  {
    etap: "Renewal Risk (60–90 dni przed odnowieniem)",
    ryzyko: "Klient rozważa rezygnację lub renegocjację",
    działania: "Business review meeting, ROI report, competitive positioning, early renewal incentive",
    metryki: "NPS trend, usage trend, support ticket volume, red account flags",
  },
  {
    etap: "Win-back (po churnie)",
    ryzyko: "Klient opuścił — szansa na odzyskanie 20–30% w ciągu 3 miesięcy",
    działania: "Exit interview, improvement communication, win-back offer po 3 miesiącach",
    metryki: "Win-back rate, reason for churn analysis, time-to-win-back",
  },
];

export default function BlogChurnAnalysisCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Churn Analysis — co to jest? Analiza odpływu klientów i redukcja churnu"
        description="Churn analysis — definicja, 4 typy churnu, kluczowe metryki (NRR, GRR, LTV), przewidywanie churnu i playbook retencji. Jak redukować churn rate. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/churn-analysis-co-to"

        keywords="Churn Analysis co to jest, Churn Analysis definicja, czym jest Churn Analysis, Churn Analysis startup, Churn Analysis jak liczyć, Churn Analysis wzór, Churn Analysis przykłady"
      />
      <ArticleSchema
        title="Churn Analysis — co to jest i jak redukować odpływ klientów?"
        description="Kompletny przewodnik po churn analysis: 4 typy churnu, metryki (NRR, GRR, churn rate), predykcja churnu i 4-etapowy retention playbook."
        url="https://fotz.pl/blog/churn-analysis-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Churn Analysis", url: "https://fotz.pl/blog/churn-analysis-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Churn Analysis" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Churn Analysis — co to jest i jak redukować odpływ klientów?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Churn analysis ujawnia dlaczego klienci odchodzą i jak temu zapobiec.
            Poznaj 4 typy churnu, NRR, GRR i 4-etapowy retention playbook.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest churn analysis?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Churn analysis</strong> to systematyczna analiza dlaczego klienci rezygnują
              z produktu lub usługi, kiedy to robią i jakie sygnały poprzedzają odejście.
              Celem jest identyfikacja wzorców churnu, jego przyczyn i wdrożenie interwencji
              które zatrzymają klientów zanim zdecydują się odejść.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Koszt pozyskania nowego klienta jest 5–7× wyższy niż utrzymanie obecnego.
              A firma tracąca 5% klientów miesięcznie traci 46% rocznie — wzrost staje się
              niemożliwy gdy "wiadro przecieka" szybciej niż go napełniasz.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5–7×", opis: "droższe pozyskanie nowego klienta niż utrzymanie obecnego" },
                { stat: "46%", opis: "roczny churn przy 5% miesięcznym churn rate — biznes kręci się w miejscu" },
                { stat: "67%", opis: "churned klientów można było zatrzymać przy wcześniejszej interwencji (Bain)" },
              ].map((s, i) => (
                <div key={i} className="bg-rose-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-rose-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 typy churnu */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy churnu</h2>
            <div className="space-y-4">
              {churnTypes.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{c.typ}</h3>
                  <p className="text-slate-600 mb-3">{c.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Główne przyczyny:</p>
                      <p className="text-red-800">{c.przyczyny}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Jak walczyć:</p>
                      <p className="text-green-800">{c.walka}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe metryki churn analysis</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Wzór</th>
                    <th className="p-3 text-left">Przykład</th>
                    <th className="p-3 text-left">Benchmark</th>
                  </tr>
                </thead>
                <tbody>
                  {churnMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-rose-700">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm font-mono">{row.wzór}</td>
                      <td className="p-3 text-slate-600 text-sm italic">{row.przykład}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Retention Playbook */}
      <FadeInView>
        <section className="py-16 px-4 bg-rose-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4-etapowy retention playbook</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {retentionPlaybook.map((etap, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-rose-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{etap.etap}</h3>
                  <p className="text-rose-600 text-sm font-semibold mb-3">Ryzyko: {etap.ryzyko}</p>
                  <div className="bg-slate-50 rounded p-3 mb-2">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Działania:</p>
                    <p className="text-slate-700 text-sm">{etap.działania}</p>
                  </div>
                  <div className="bg-rose-50 rounded p-2">
                    <p className="text-xs font-semibold text-rose-600 mb-1">Metryki:</p>
                    <p className="text-rose-800 text-xs">{etap.metryki}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — churn analysis</h2>
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
