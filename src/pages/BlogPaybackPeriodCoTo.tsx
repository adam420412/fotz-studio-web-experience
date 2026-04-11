import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest CAC Payback Period?",
    answer: "CAC Payback Period (okres zwrotu kosztu akwizycji klienta) to liczba miesięcy potrzebnych do odzyskania kosztu pozyskania klienta (CAC) z przychodów przez niego generowanych. Formuła: Payback = CAC / MRR per klient. Przykład: CAC = 6 000 PLN, klient płaci 600 PLN/mies. → Payback = 6 000 / 600 = 10 miesięcy. Dopiero po 10 miesiącach firma 'odzyska' koszt pozyskania tego klienta.",
  },
  {
    question: "Jaki CAC Payback Period jest dobry?",
    answer: "Benchmarki CAC Payback Period: poniżej 6 miesięcy = excellent (typowy dla PLG, viral, inbound). 6–12 miesięcy = bardzo dobry (efektywny model GTM). 12–18 miesięcy = dobry (akceptowalny dla mid-market SaaS). 18–24 miesiące = przeciętny (typowy dla enterprise z długimi cyklami). Powyżej 24 miesięcy = niepokojący (wymaga wysokiego LTV i niskiego churnu dla opłacalności). Inwestorzy Series B+ często oczekują payback poniżej 18 miesięcy.",
  },
  {
    question: "Jaka jest różnica między CAC Payback a LTV/CAC?",
    answer: "CAC Payback Period mierzy, KIEDY odzysasz pieniądze wydane na pozyskanie klienta — jest to metryka czasu i płynności finansowej. LTV/CAC mierzy, ILE razy więcej zarobisz na kliencie niż wydałeś na jego pozyskanie — jest to metryka zwrotu z inwestycji. Obie są potrzebne: wysoki LTV/CAC (5:1) ale długi payback (30 mies.) może oznaczać problemy z cash flow. Krótki payback (6 mies.) ale niski LTV/CAC (2:1) sugeruje wysoki churn. Optymalne: LTV/CAC 3:1+ i payback poniżej 18 mies.",
  },
  {
    question: "Jak uwzględnić Gross Margin w obliczeniu Payback Period?",
    answer: "Pełna formuła Payback z Gross Margin: Payback = CAC / (MRR × Gross Margin%). Przykład: CAC = 6 000 PLN, MRR = 600 PLN, GM = 75% → Payback = 6 000 / (600 × 0.75) = 6 000 / 450 = 13.3 miesiąca. Uwzględnienie Gross Margin daje rzetelniejszy obraz, bo mówi ile miesięcy do odzyskania kosztu z marży, nie z przychodu. Szczególnie ważne przy niskiej Gross Margin (marketplace, fintech, hardware SaaS).",
  },
  {
    question: "Jak skrócić CAC Payback Period?",
    answer: "Trzy strategie skrócenia payback: obniżenie CAC — efektywniejsze kanały (inbound vs outbound), lepszy PMF i ICP targeting, redukcja sales cycle; zwiększenie ARPU — wyższy ACV poprzez upsell podczas onboardingu, annual billing z discount (klient płaci z góry rok = payback skrócony o 12 mies.), add-ons; poprawa Gross Margin — optymalizacja COGS, automatyzacja CS, redukcja infrastructure costs.",
  },
];

const paybackFormulas = [
  {
    wariant: "Prosta formuła",
    formuła: "Payback = CAC / MRR per klient",
    przykład: "CAC 9000 / MRR 600 = 15 miesięcy",
    uwaga: "Nie uwzględnia marży — może być zbyt optymistyczna",
  },
  {
    wariant: "Z Gross Margin",
    formuła: "Payback = CAC / (MRR × Gross Margin%)",
    przykład: "9000 / (600 × 0.78) = 19.2 miesiąca",
    uwaga: "Realistyczna — mierzy odzysk kosztu z marży brutto",
  },
  {
    wariant: "Blended Payback (dla kohorty)",
    formuła: "Payback = Łączny CAC kohorty / Kumulatywny MRR kohorty",
    przykład: "Kiedy linia kumulatywnego MRR przebija linię CAC na wykresie kohortowym",
    uwaga: "Najdokładniejsza — uwzględnia churn i expansję kohorty",
  },
];

const paybackBySegment = [
  { segment: "PLG / Freemium", typowy: "3–8 mies.", model: "Produkt sam pozyskuje — zerowy/niski CAC", priorytet: "Konwersja trial-to-paid" },
  { segment: "SMB Inbound", typowy: "6–12 mies.", model: "Niski CAC dzięki content/SEO, krótki cykl", priorytet: "Onboarding, redukcja churn" },
  { segment: "SMB Outbound", typowy: "12–18 mies.", model: "Wyższy CAC z cold outreach, SDR/AE model", priorytet: "Efektywność SDR, shorter cycle" },
  { segment: "Mid-Market", typowy: "15–24 mies.", model: "AE + SE + CSM, enterprise demo", priorytet: "Expansion revenue, NRR" },
  { segment: "Enterprise", typowy: "24–36 mies.", model: "Długi cykl, duże teamy, complex POC", priorytet: "Wysoki ACV, multi-year contracts" },
];

const paybackAndCashFlow = [
  {
    payback: "6 miesięcy",
    oznacza: "Po 6 mies. od pozyskania klienta zaczniesz zarabiać netto",
    cash: "Firma potrzebuje 6 mies. zapasów gotówki na S&M przed zwrotem",
    kto: "PLG, inbound SMB, viral produkty",
  },
  {
    payback: "12 miesięcy",
    oznacza: "Po roku klient staje się profitowy — długo czekasz na zwrot",
    cash: "Wymaga 12 mies. rezerwy — typowe VC funding requirement",
    kto: "SMB outbound, early Mid-Market",
  },
  {
    payback: "24 miesiące",
    oznacza: "Przez 2 lata klient jest 'na minusie' — ryzyko przy churnie rok 1-2",
    cash: "Wymaga dużo kapitału — typowe Series B+ enterprise SaaS",
    kto: "Enterprise, professional services heavy",
  },
];

export default function BlogPaybackPeriodCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CAC Payback Period — co to jest i jak obliczyć? | Fotz.pl"
        description="CAC Payback Period — co to jest, formuła, benchmarki per segment i jak skrócić okres zwrotu kosztu pozyskania klienta. Kompletny przewodnik dla SaaS."
        canonicalUrl="https://fotz.pl/blog/cac-payback-period-co-to"
      />
      <ArticleSchema
        title="CAC Payback Period — co to jest i jak obliczyć?"
        description="Kompletny przewodnik po CAC Payback Period: formuła, benchmarki i strategie skrócenia okresu zwrotu."
        url="https://fotz.pl/blog/cac-payback-period-co-to"
        datePublished="2024-02-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CAC Payback Period", url: "https://fotz.pl/blog/cac-payback-period-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CAC Payback Period", href: "/blog/cac-payback-period-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Unit Economics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CAC Payback Period
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ile miesięcy musisz czekać, aż klient 'zwróci' Ci koszt jego pozyskania?
              Payback Period to metryka, która determinuje ile kapitału potrzebujesz do skalowania.
            </p>
            <div className="bg-rose-900/50 rounded-xl p-6 border border-rose-700">
              <div className="text-sm text-rose-300 font-semibold mb-2">Formuła Payback Period</div>
              <div className="text-2xl font-mono font-bold text-white">Payback = CAC / (MRR × Gross Margin%)</div>
              <div className="text-sm text-gray-400 mt-2">Cel: poniżej 18 miesięcy dla zdrowego SaaS B2B</div>
            </div>
          </div>
        </div>
      </section>

      {/* Formuły */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 warianty formuły Payback Period</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              W zależności od celu analizy i dostępnych danych, używa się różnych wariantów.
              Formuła z Gross Margin jest najbardziej realistyczna i preferowana przez inwestorów.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {paybackFormulas.map((f, i) => (
              <FadeInView key={f.wariant}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-rose-100 text-rose-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{f.wariant}</h3>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 font-mono text-sm text-gray-800 mb-3">
                        {f.formuła}
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-blue-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-blue-700 uppercase mb-1">Przykład</div>
                          <p className="text-sm text-gray-700">{f.przykład}</p>
                        </div>
                        <div className="bg-yellow-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Uwaga</div>
                          <p className="text-sm text-gray-700">{f.uwaga}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki per segment */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki Payback Period per segment</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Oczekiwany Payback Period różni się radykalnie między segmentami klientów.
              Enterprise naturalnie ma dłuższy payback ze względu na wyższy CAC i dłuższy cykl sprzedaży.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-rose-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Segment</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Typowy Payback</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Model GTM</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Kluczowy priorytet</th>
                </tr>
              </thead>
              <tbody>
                {paybackBySegment.map((row, i) => (
                  <tr key={row.segment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.segment}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        row.typowy.startsWith("3") ? "bg-green-100 text-green-800" :
                        row.typowy.startsWith("6") ? "bg-blue-100 text-blue-800" :
                        row.typowy.startsWith("12") || row.typowy.startsWith("15") ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {row.typowy}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.model}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.priorytet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payback a cash flow */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Payback Period a zarządzanie gotówką</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Payback Period bezpośrednio wpływa na zapotrzebowanie firmy na kapitał.
              Dłuższy payback = więcej gotówki potrzebnej do sfinansowania wzrostu.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {paybackAndCashFlow.map((item) => (
              <FadeInView key={item.payback}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex gap-4">
                    <div className="bg-rose-100 text-rose-700 font-bold rounded-lg px-4 py-2 flex-shrink-0 text-lg">
                      {item.payback}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{item.oznacza}</div>
                      <div className="text-sm text-gray-600 mb-1">{item.cash}</div>
                      <div className="text-xs text-gray-500 italic">{item.kto}</div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
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
