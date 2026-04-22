import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest quota sprzedażowa?",
    answer: "Quota sprzedażowa (plan sprzedaży) to cel ilościowy wyznaczony handlowcowi lub zespołowi sprzedaży na określony okres (miesiąc, kwartał, rok). Quota określa, ile handlowiec powinien sprzedać — w wyrażeniu pieniężnym (PLN), ilościowym (liczba kontraktów), aktywności (liczba dials, demos) lub kombinacji. Quota jest podstawą systemu wynagrodzenia zmiennego (komisja/premia) — osiągnięcie quota powoduje wypłatę OTE (On-Target Earnings). Quota jest jednym z głównych dźwigni zarządzania wydajnością zespołu sprzedaży.",
  },
  {
    question: "Jakie są rodzaje quota sprzedażowych?",
    answer: "Typy quota: Revenue Quota — najbardziej powszechna, oparty na wartości przychodu (MRR, ARR, one-time revenue). Volume Quota — liczba podpisanych kontraktów lub pozyskanych klientów. Activity Quota — liczba dials, emaili, demo, spotkań (dla SDR/BDR). Profit Quota — oparta na marży brutto, nie przychodzie. Product Quota — fokus na konkretny produkt lub linię. Geographic Quota — podział na terytorium. Compound Quota — kombinacja kilku metryk. Dla AE najczęściej używa się Revenue Quota opartej na nowym ARR lub bookings.",
  },
  {
    question: "Jak ustalić quota dla handlowca?",
    answer: "Metody ustalania quota: Top-down — management ustala target firmy, dzieli na regiony, teamy, AE. Bottom-up — oparte na capacity każdego handlowca (ile jest w stanie zamknąć). Market-based — benchmark vs. podobne firmy (typowo 4-8x OTE dla SaaS AE). Historyczny — bazuje na wynikach z poprzednich okresów + oczekiwany wzrost. Najlepsze praktyki: quota powinna być ambitna, ale osiągalna dla 60-70% zespołu. Jeśli tylko 20% osiąga quota — za wysoka. Jeśli 90% osiąga — za niska. Odpowiedni współczynnik OTE do quota dla SaaS AE to 4-8x.",
  },
  {
    question: "Co to jest OTE i jak łączy się z quota?",
    answer: "OTE (On-Target Earnings) to całkowite wynagrodzenie przy 100% wykonaniu quota — suma salary i komisji/premii. Przykład: Salary 8 000 PLN + komisja 8 000 PLN = OTE 16 000 PLN przy 100% quota. Przy quota 1M PLN ARR, OTE 16 000 PLN miesięcznie = 192 000 PLN rocznie, commission rate = 19,2%. Typowe podziały: 50/50 (agresywny, dla hunter-type), 70/30 (umiarkowany), 80/20 (zachowawczy). Acceleratory (bonus za przekroczenie quota): przy 120% quota komisja może rosnąć do 150-200% stawki bazowej.",
  },
  {
    question: "Jak radzić sobie z niewykonaniem quota?",
    answer: "Gdy handlowiec nie wykonuje quota: Diagnoza pierwiastku problemu — czy to pipeline (za mało), win rate (za niski), ASP (za niska), czy cykl sprzedaży (za długi)? Pipeline coverage — dobry AE powinien mieć 3-4x quota w pipeline. Coaching — analiza nagranych rozmów, shadow selling, praca na konkretnych dealach. Plan naprawczy — jasne cele na 30/60/90 dni z regularnymi check-inami. Jeśli handlowiec nie osiąga quota przez 2 kwartały po wsparciu — ewaluacja fitu do roli lub terytorium. Systemowe problemy (produkt, cena, terytorium) wymagają korekty quota, nie tylko coachingu.",
  },
];

const quotaTypes = [
  {
    typ: "Revenue Quota",
    metryka: "Nowy ARR / Bookings",
    dla: "Account Executive (AE)",
    przykład: "1 200 000 PLN nowego ARR na kwartał",
    kolor: "blue",
  },
  {
    typ: "Activity Quota",
    metryka: "Calls, Emails, Demos",
    dla: "SDR / BDR",
    przykład: "60 qualified meetings / kwartał",
    kolor: "green",
  },
  {
    typ: "Volume Quota",
    metryka: "Liczba nowych klientów",
    dla: "SMB AE",
    przykład: "25 nowych klientów na kwartał",
    kolor: "purple",
  },
  {
    typ: "Expansion Quota",
    metryka: "Upsell / Cross-sell ARR",
    dla: "Account Manager (AM)",
    przykład: "300 000 PLN expansion ARR / kwartał",
    kolor: "orange",
  },
];

const quotaBenchmarks = [
  { segment: "SMB AE (SaaS)", quotaRocznie: "600K–1.2M PLN ARR", oteRatio: "5–7x OTE", ramping: "3–4 miesiące", attainment: "60–70% AE osiąga" },
  { segment: "Mid-Market AE (SaaS)", quotaRocznie: "1.2M–3M PLN ARR", oteRatio: "5–8x OTE", ramping: "4–6 miesięcy", attainment: "60–70% AE osiąga" },
  { segment: "Enterprise AE (SaaS)", quotaRocznie: "3M–10M+ PLN ARR", oteRatio: "6–10x OTE", ramping: "6–9 miesięcy", attainment: "50–60% AE osiąga" },
  { segment: "SDR (Outbound)", quotaRocznie: "N/A (monthly SAL/SQL)", oteRatio: "3–4x OTE", ramping: "2–3 miesiące", attainment: "65–75% SDR osiąga" },
];

const commissionStructure = [
  { próg: "0–50% quota", stawka: "0% komisji", opis: "Threshold — poniżej tego poziomu brak komisji zmiennej" },
  { próg: "50–75% quota", stawka: "75% stawki bazowej", opis: "Ramped rate — mniejsza komisja, by chronić firmę przy słabych kwartałach" },
  { próg: "75–100% quota", stawka: "100% stawki bazowej", opis: "Standard rate — pełna komisja od każdego PLN w tym zakresie" },
  { próg: "100–120% quota", stawka: "125–150% stawki", opis: "Accelerator 1 — nagroda za przekroczenie targetu" },
  { próg: "Powyżej 120% quota", stawka: "150–200% stawki", opis: "Accelerator 2 — super-bonus dla top performers" },
];

export default function BlogQuotaSprzedazowa() {
  return (
    <Layout>
      <SEOHead
        title="Quota sprzedażowa — co to jest i jak ustalić? | Fotz.pl"
        description="Quota sprzedażowa — rodzaje quota, jak ustalić OTE i plan sprzedaży, benchmarki dla AE i SDR oraz struktura komisji. Kompletny przewodnik dla Sales Managerów."
        canonicalUrl="https://fotz.pl/blog/quota-sprzedazowa-co-to-jest"

        keywords="Quota sprzedażowa co to jest, Quota sprzedażowa definicja, czym jest Quota sprzedażowa, Quota sprzedażowa w sprzedaży, Quota sprzedażowa strategia, Quota sprzedażowa przykłady, jak używać Quota sprzedażowa"

        canonical="https://fotz.pl/blog/quota-sprzedazowa-co-to-jest"
      />
      <ArticleSchema
        title="Quota sprzedażowa — co to jest i jak ustalić?"
        description="Kompletny przewodnik po quota sprzedażowej: typy, OTE, benchmarki, komisja i zarządzanie wykonaniem."
        url="https://fotz.pl/blog/quota-sprzedazowa-co-to-jest"
        datePublished="2024-02-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Quota sprzedażowa", url: "https://fotz.pl/blog/quota-sprzedazowa-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Quota sprzedażowa", url: "/blog/quota-sprzedazowa-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Quota sprzedażowa
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Quota to jeden z najważniejszych instrumentów zarządzania zespołem sprzedaży.
              Zbyt ambitna demotywuje, zbyt niska zostawia pieniądze na stole. Dowiedz się jak
              ustalić właściwy target i zbudować strukturę OTE, która napędza wyniki.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Rodzajów quota", value: "4" },
                { label: "Benchmark: AE SaaS", value: "5–8x OTE" },
                { label: "Attainment optimum", value: "60–70%" },
                { label: "Accelerator próg", value: "100%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy quota */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 główne rodzaje quota</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobór właściwego rodzaju quota zależy od roli handlowca, etapu lejka sprzedaży i
              tego, co firma chce napędzać.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {quotaTypes.map((q) => (
              <FadeInView key={q.typ}>
                <div className={`rounded-xl p-6 border-2 ${
                  q.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  q.kolor === "green" ? "border-green-200 bg-green-50" :
                  q.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    q.kolor === "blue" ? "text-blue-800" :
                    q.kolor === "green" ? "text-green-800" :
                    q.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>
                    {q.typ}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Metryka:</span>
                      <span className="text-gray-700">{q.metryka}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Dla:</span>
                      <span className="text-gray-700">{q.dla}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Przykład:</span>
                      <span className="text-gray-700 font-medium">{q.przykład}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki quota — SaaS B2B</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Benchmarki pomagają kalibrować quota do rynku. Zbyt duże odchylenie od benchmarku
              utrudnia rekrutację i retencję dobrych handlowców.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Segment</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Quota roczna</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">OTE Ratio</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Ramp</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Attainment</th>
                </tr>
              </thead>
              <tbody>
                {quotaBenchmarks.map((b, i) => (
                  <tr key={b.segment} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm font-semibold text-gray-800">{b.segment}</td>
                    <td className="p-4 text-sm text-gray-700">{b.quotaRocznie}</td>
                    <td className="p-4 text-sm text-gray-700">{b.oteRatio}</td>
                    <td className="p-4 text-sm text-gray-700">{b.ramping}</td>
                    <td className="p-4 text-sm text-emerald-700 font-medium">{b.attainment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Struktura komisji */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Struktura komisji — progi i acceleratory</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobrze zaprojektowana struktura komisji motywuje handlowców do przekraczania quota,
              jednocześnie chroniąc firmę przed nadmierną wypłatą przy niskim wykonaniu.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {commissionStructure.map((c, i) => (
              <FadeInView key={c.próg}>
                <div className={`rounded-xl border p-5 ${
                  i === 0 ? "border-red-200 bg-red-50" :
                  i === 1 ? "border-orange-200 bg-orange-50" :
                  i === 2 ? "border-blue-200 bg-blue-50" :
                  i === 3 ? "border-green-200 bg-green-50" :
                  "border-emerald-200 bg-emerald-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className={`font-bold text-sm px-3 py-1 rounded-full flex-shrink-0 ${
                      i === 0 ? "bg-red-200 text-red-800" :
                      i === 1 ? "bg-orange-200 text-orange-800" :
                      i === 2 ? "bg-blue-200 text-blue-800" :
                      i === 3 ? "bg-green-200 text-green-800" :
                      "bg-emerald-200 text-emerald-800"
                    }`}>
                      {c.próg}
                    </div>
                    <div>
                      <div className={`font-bold mb-1 ${
                        i === 0 ? "text-red-800" :
                        i === 1 ? "text-orange-800" :
                        i === 2 ? "text-blue-800" :
                        i === 3 ? "text-green-800" :
                        "text-emerald-800"
                      }`}>
                        {c.stawka}
                      </div>
                      <p className="text-sm text-gray-700">{c.opis}</p>
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

      <RelatedArticles currentArticleId="quota-sprzedazowa-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
