import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Quota Planning?",
    answer: "Quota Planning (planowanie targetów sprzedażowych) to proces ustalania indywidualnych celów sprzedażowych dla handlowców (AE, SDR, CSM) na dany okres — najczęściej kwartał lub rok. Quota to target który handlowiec musi osiągnąć aby uzyskać pełne OTE (On-Target Earnings). Rodzaje quotów: Revenue Quota — cel przychodu (np. 500 000 zł MRR). Najczęstszy. Volume Quota — liczba zamkniętych dealów lub klientów. Activity Quota — liczba outbound emaili, call'i, demos (dla SDR). Profit Quota — cel marży, nie przychodu. MBO (Management by Objectives) — combo KPI wykraczające poza revenue. Dlaczego quota planning jest krytyczne: Zbyt niskie quoty = za duże koszty sprzedaży, wszyscy zarabiają za dużo. Zbyt wysokie quoty = demotywacja, odejścia, blame game. Właściwe quoty: 60-70% handlowców osiąga target (benchmark SaaS). Poniżej 50% = quoty za wysokie lub słaby hiring/coaching. Powyżej 80% = quoty za niskie, zostawiasz pieniądze na stole.",
  },
  {
    question: "Jak ustalić wysokość quota?",
    answer: "Metodologie ustalania quotów: Top-down — CFO/CEO ustala target przychodu firmy, RevOps rozkłada na regiony i AE. Szybkie, ale może być oderwane od realiów rynku. Bottom-up — handlowcy estymują swój pipeline i możliwy przychód. Bardziej realistyczne, ryzyko zaniżenia. Historyczne — quota = X% wzrost ponad poprzedni rok. Prosta, ale nie uwzględnia zmian rynku lub produktu. Market-based — quota = TAM/liczba AE × win rate × ACV. Bardziej zaawansowane. Ramp-adjusted — nowy handlowiec ma niższą quotę przez pierwsze 3-6 miesięcy. Standardowe komponenty: Quota Coverage Ratio — firma powinna mieć 150-200% sumy quotów AE w pipeline (bo nie wszyscy trafią). Quota-to-OTE Ratio — quota zazwyczaj = 4-6x OTE handlowca. AE z OTE 300 000 zł ma quotę ~1.5M zł. Reguła: quota powinna być ambitna ale osiągalna. Benchmark: mediana attainment dla zdrowej organizacji = 100-110% targetu (handlowcy trochę overbookują).",
  },
  {
    question: "Jak wygląda Quota Planning Calendar?",
    answer: "Typowy Quota Planning Calendar (roczny): Sierpień-Wrzesień: Strategic planning — CEO/CFO definiuje roczny target przychodu. Market analysis, competitive landscape, product roadmap. Wrzesień-Październik: Capacity planning — ile AE potrzeba? Jaki headcount? Jakie rampy? Kiedy zatrudnić aby mieć 100% capacity w Q1? Październik-Listopad: Quota modeling — RevOps buduje modele różnych scenariuszy quotów. Simulacje attainment przy różnych założeniach. Analizy historyczne (poprzedni rok). Listopad: Stakeholder alignment — prezentacja modeli dla VP Sales, CRO, CFO. Iteracje i zatwierdzenie. Grudzień: Komunikacja quotów — handlowcy otrzymują quoty na nowy rok. Negocjacje indywidualne. Styczeń: Q1 kickoff — nowe quoty aktywne. Wyzwania: pipeline z poprzedniego roku vs. nowe quoty. Mid-year adjustments — gdy produkt zmienia ACV lub wchodzisz w nowy rynek, quoty mogą wymagać korekty. Udokumentuj politykę mid-year quota changes.",
  },
  {
    question: "Jak zarządzać ramping dla nowych handlowców?",
    answer: "Quota Ramp (rampowanie) to stopniowe zwiększanie quotów dla nowych handlowców przez pierwsze miesiące. Dlaczego ramping: nowy handlowiec potrzebuje czasu na onboarding, naukę produktu, budowanie pipeline'u. Pełna quota od dnia 1 = demotywacja, odejście. Typowe ramping schedule: Miesiąc 1: 0% quoty — onboarding, szkolenia. Miesiąc 2: 25% — pierwsze discovery calls. Miesiąc 3: 50% — własne demo i negocjacje. Miesiąc 4: 75% — closing deals. Miesiąc 5+: 100% — pełna quota. SMB AE: ramp 3-4 miesiące. Enterprise AE: ramp 6-9 miesięcy (dłuższy cykl sprzedaży). Compensacja podczas rampu: Gwarancja podstawy (draw against commission) — wypłata miesięczna niezależna od wyników. Gdy handlowiec osiągnie target, draw jest odliczana od prowizji. Accelerator podczas rampu: niektóre firmy dają wyższy % prowizji w trakcie rampu aby zmotywować. Liczenie capacity: nowy AE dodaje się do capacity po rampie, nie od dnia zatrudnienia. VP Sales musi planować zatrudnienie z wyprzedzeniem 6-9 miesięcy.",
  },
  {
    question: "Jakie metryki monitorować w Quota Management?",
    answer: "Metryki Quota Management: Quota Attainment — % handlowców osiągających 100% quoty. Benchmark: 60-70% = zdrowo. Poniżej 50% = quota problem lub hiring problem. Average Attainment — średni % realizacji targetu przez wszystkich AE. Dobrze = 90-110%. Quota Coverage — stosunek pipeline do quotów. Benchmark: 3-4x quota w pipeline. Poniżej 2x = ryzyko nie osiągnięcia targetu. OTE Achievement — % handlowców zarabiający pełne OTE. Koreluje z attainment i motywacją. Ramp-to-Productivity — czas od zatrudnienia do pełnej produktywności. Benchmark: 6-9 miesięcy dla SMB, 9-12 dla Enterprise. Quota Churn — % handlowców którzy odeszli bo nie mogli osiągnąć quotów. Wysoki = sygnał złej konstrukcji quota planu. Annual Contract Value (ACV) Trend — czy ACV rośnie? Jeśli tak, quoty powinny rosnąć proporcjonalnie. Narzędzia: Salesforce (tracking attainment), Quota Management Software (Vareto, QuotaPath, Spiff), dbt + BI dla custom analytics.",
  },
];

const quotaMethodologies = [
  {
    metodologia: "Top-Down",
    opis: "CEO/CFO ustala total revenue target, RevOps dekomponuje na regiony, segmenty i AE.",
    zalety: "Szybkie, spójne z celami firmy, single source of truth",
    wady: "Może być oderwane od realiów rynku, brak buy-in handlowców",
    kolor: "blue",
  },
  {
    metodologia: "Bottom-Up",
    opis: "Handlowcy i managerowie estymują swój potencjał. Agregacja tworzy firmowy forecast.",
    zalety: "Realistyczne, wyższy buy-in, uwzględnia lokalne rynki",
    wady: "Ryzyko zaniżenia, wolniejszy proces, wymaga calibracji",
    kolor: "green",
  },
  {
    metodologia: "Market-Based",
    opis: "Quota = (TAM w terytorium × win rate × ACV) × target market penetration.",
    zalety: "Obiektywne, oparte na danych rynkowych",
    wady: "Wymaga danych o TAM, trudne do obliczenia dla nowych rynków",
    kolor: "purple",
  },
  {
    metodologia: "Historyczne + Growth Rate",
    opis: "Quota poprzedniego roku × planowany % wzrostu (np. 120% poprzedniego roku).",
    zalety: "Prosta w obliczeniu, jasna dla handlowców",
    wady: "Nie uwzględnia zmian rynku, produktu ani mix AE",
    kolor: "orange",
  },
];

const rampSchedule = [
  { miesiąc: "Miesiąc 1", quota: "0%", aktywności: "Onboarding, szkolenia, shadow calls" },
  { miesiąc: "Miesiąc 2", quota: "25%", aktywności: "Pierwsze discovery calls, budowanie pipeline" },
  { miesiąc: "Miesiąc 3", quota: "50%", aktywności: "Demos, proposals, pierwsze closing attempts" },
  { miesiąc: "Miesiąc 4", quota: "75%", aktywności: "Negocjacje, closing, expansion w istniejących" },
  { miesiąc: "Miesiąc 5+", quota: "100%", aktywności: "Pełna quota, samodzielne zarządzanie pipeline" },
];

export default function BlogQuotaPlanningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Quota Planning — jak ustalać targety sprzedażowe w SaaS? | Fotz.pl"
        description="Quota Planning: metodologie (top-down, bottom-up, market-based), ramp schedule, quota attainment benchmarks, metryki i jak planować quoty na rok."
        canonicalUrl="https://fotz.pl/blog/quota-planning-targetowanie-sprzedazowe-saas"
      />
      <ArticleSchema
        title="Quota Planning — jak ustalać targety sprzedażowe w SaaS?"
        description="Quota Planning: metodologie ustalania quotów, quota-to-OTE ratio, ramp schedule, quota coverage, attainment benchmarks i Quota Planning Calendar dla zespołów SaaS."
        url="https://fotz.pl/blog/quota-planning-targetowanie-sprzedazowe-saas"
        datePublished="2024-03-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Quota Planning", url: "https://fotz.pl/blog/quota-planning-targetowanie-sprzedazowe-saas" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Quota Planning", href: "/blog/quota-planning-targetowanie-sprzedazowe-saas" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quota Planning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Quota za niska = za drogie zwycięstwa. Quota za wysoka = demotywacja
              i odejścia. Quota Planning to jedna z najważniejszych decyzji
              które VP Sales i RevOps podejmują każdego roku.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Attainment benchmark", value: "60-70%" },
                { label: "Quota/OTE ratio", value: "4-6x" },
                { label: "Pipeline coverage", value: "3-4x quota" },
                { label: "Ramp (SMB AE)", value: "3-4 miesiące" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metodologie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 metodologie Quota Planning</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda metodologia ma inne założenia — najlepsze podejście
              zazwyczaj łączy elementy kilku z nich.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {quotaMethodologies.map((m) => (
              <FadeInView key={m.metodologia}>
                <div className={`rounded-xl border-2 p-5 ${
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    m.kolor === "blue" ? "text-blue-800" :
                    m.kolor === "green" ? "text-green-800" :
                    m.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{m.metodologia}</h3>
                  <p className="text-gray-700 text-sm mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div><span className="font-semibold text-green-700">Zalety: </span><span className="text-gray-600">{m.zalety}</span></div>
                    <div><span className="font-semibold text-red-600">Wady: </span><span className="text-gray-600">{m.wady}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Ramp */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ramp Schedule dla nowych AE</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Stopniowe zwiększanie quotów przez pierwsze miesiące
              daje nowym handlowcom czas na onboarding bez presji niemożliwego celu.
            </p>
          </FadeInView>
          <div className="space-y-2">
            {rampSchedule.map((r) => (
              <FadeInView key={r.miesiąc}>
                <div className="bg-white rounded-xl border border-gray-200 p-4 flex gap-4 items-center">
                  <div className="w-28 flex-shrink-0">
                    <span className="font-semibold text-gray-700 text-sm">{r.miesiąc}</span>
                  </div>
                  <div className="w-20 flex-shrink-0">
                    <span className="text-2xl font-bold text-emerald-600">{r.quota}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{r.aktywności}</p>
                </div>
              </FadeInView>
            ))}
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
