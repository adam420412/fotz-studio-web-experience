import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest CAC?",
    answer: "CAC (Customer Acquisition Cost) to koszt pozyskania jednego nowego klienta. Oblicza się go jako: CAC = Całkowite wydatki na Sales i Marketing / Liczba nowych klientów pozyskanych w danym okresie. Przykład: firma wydała 100 000 PLN na marketing i sprzedaż w Q1 i pozyskała 50 nowych klientów — CAC = 100 000 / 50 = 2 000 PLN. CAC jest kluczowy do oceny efektywności działań go-to-market.",
  },
  {
    question: "Co wlicza się do kosztów CAC?",
    answer: "Do pełnego CAC (fully loaded CAC) wlicza się: wynagrodzenia zespołu sprzedaży i marketingu (wraz z bonusami i benefitami), wydatki na reklamy (Google Ads, LinkedIn, Meta), koszty narzędzi (CRM, marketing automation, enrichment), koszty wydarzeń i konferencji, koszty agencji i freelancerów, koszty content marketingu i SEO. Blended CAC uwzględnia wszystkie kanały łącznie, a CAC per kanał pozwala ocenić efektywność każdego z osobna.",
  },
  {
    question: "Czym jest CAC Payback Period?",
    answer: "CAC Payback Period to liczba miesięcy potrzebnych do odzyskania kosztu pozyskania klienta z przychodów przez niego generowanych. Formuła: Payback Period = CAC / (MRR × Gross Margin%). Przykład: CAC = 6000 PLN, MRR = 500 PLN, Gross Margin = 80% → Payback = 6000 / (500 × 0.8) = 15 miesięcy. Benchmark: poniżej 12 miesięcy = świetny, 12-18 = dobry, powyżej 24 = ostrzeżenie.",
  },
  {
    question: "Jaki jest dobry wskaźnik LTV/CAC?",
    answer: "LTV/CAC (stosunek wartości życiowej klienta do kosztu jego pozyskania) powinien wynosić co najmniej 3:1 dla zdrowego biznesu SaaS. LTV/CAC poniżej 1 = model biznesowy nie działa. 1–2 = model едва viable. 3–5 = zdrowy, skalowalny biznes. Powyżej 5 = prawdopodobnie za mało inwestujesz w growth — możesz agresywniej wydawać na pozyskiwanie. Wiele VC wymaga LTV/CAC powyżej 3x przed Series A.",
  },
  {
    question: "Jak obniżyć CAC?",
    answer: "Strategie redukcji CAC: Product-led growth (PLG) — produkt sam generuje użytkowników (freemium, trial), co dramatycznie obniża CAC. SEO i content marketing — organiczne leady mają 3–5x niższy CAC niż płatne. Partner channel — partnerzy i integracje jako kanał akwizycji. Referral program — istniejący klienci polecają nowych. Poprawa konwersji — lepsza konwersja trial-to-paid oznacza niższy CAC bez cięcia wydatków. Segmentacja — skupienie na ICP z wyższą konwersją.",
  },
];

const cacFormula = [
  {
    wariant: "Blended CAC",
    formuła: "Całkowite koszty S&M / Liczba nowych klientów",
    użycie: "Ogólna ocena efektywności modelu, raportowanie inwestorskie",
    zalety: "Prosty, porównywalny z benchmarkami",
    wady: "Ukrywa różnice między kanałami",
  },
  {
    wariant: "CAC per kanał",
    formuła: "Koszty kanału X / Klienci z kanału X",
    użycie: "Optymalizacja mix marketingowego, alokacja budżetu",
    zalety: "Identyfikuje najtańsze kanały pozyskania",
    wady: "Trudna atrybucja multi-touch",
  },
  {
    wariant: "Fully-loaded CAC",
    formuła: "S&M koszty + CS onboarding + overhead / Nowi klienci",
    użycie: "Pełna analiza unit economics, due diligence VC",
    zalety: "Najbardziej dokładny obraz kosztów",
    wady: "Trudniejszy do obliczenia, wyższe wartości",
  },
];

const cacByChannel = [
  { kanał: "Outbound Sales (cold email/phone)", typowyCac: "Wysoki", payback: "18–30 mies.", skalowalność: "Niska–Średnia", najlepszy: "Enterprise, duże ACV" },
  { kanał: "Inbound Marketing (SEO/content)", typowyCac: "Niski", payback: "6–12 mies.", skalowalność: "Wysoka", najlepszy: "SMB/Mid-Market, długoterminowy" },
  { kanał: "Paid Advertising (SEM/social)", typowyCac: "Średni", payback: "10–20 mies.", skalowalność: "Średnia", najlepszy: "Szybkie skalowanie, testowanie" },
  { kanał: "Product-led growth (freemium)", typowyCac: "Bardzo niski", payback: "3–8 mies.", skalowalność: "Bardzo wysoka", najlepszy: "Developer tools, prosty produkt" },
  { kanał: "Partner/Reseller channel", typowyCac: "Niski–Średni", payback: "8–18 mies.", skalowalność: "Wysoka", najlepszy: "Rynki niszowe, globalna ekspansja" },
  { kanał: "Referral/Word-of-mouth", typowyCac: "Bardzo niski", payback: "2–6 mies.", skalowalność: "Trudna do kontroli", najlepszy: "Silny produkt, wysokie NPS" },
];

const cacBenchmarks = [
  { segment: "SMB (ACV poniżej 5K PLN)", cacRange: "500–2 000 PLN", payback: "6–12 mies.", ltvCac: "3:1 – 5:1" },
  { segment: "Mid-Market (ACV 5–50K PLN)", cacRange: "5 000–25 000 PLN", payback: "12–18 mies.", ltvCac: "3:1 – 4:1" },
  { segment: "Enterprise (ACV powyżej 50K PLN)", cacRange: "50 000–200 000 PLN", payback: "18–36 mies.", ltvCac: "3:1 – 6:1" },
];

export default function BlogCacCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="CAC co to jest — Customer Acquisition Cost w SaaS | Fotz.pl"
        description="CAC (Customer Acquisition Cost) — co to jest, jak obliczyć, CAC Payback Period, LTV/CAC ratio i jak obniżyć koszt pozyskania klienta. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/cac-customer-acquisition-cost-co-to"

        keywords="CAC co to jest, CAC definicja, czym jest CAC, CAC startup, CAC jak liczyć, CAC wzór, CAC przykłady"
      />
      <ArticleSchema
        title="CAC co to jest — Customer Acquisition Cost w SaaS"
        description="Kompletny przewodnik po CAC: definicja, formuła, benchmarki i strategie redukcji kosztu pozyskania klienta."
        url="https://fotz.pl/blog/cac-customer-acquisition-cost-co-to"
        datePublished="2024-01-27"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CAC co to jest", url: "https://fotz.pl/blog/cac-customer-acquisition-cost-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CAC co to jest", href: "/blog/cac-customer-acquisition-cost-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Unit Economics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CAC — Customer Acquisition Cost
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ile kosztuje Cię pozyskanie jednego klienta? CAC to fundament analizy unit economics —
              bez niego nie możesz ocenić, czy Twój model biznesowy ma sens na dużą skalę.
            </p>
            <div className="bg-orange-900/50 rounded-xl p-6 border border-orange-700">
              <div className="text-sm text-orange-300 font-semibold mb-2">Formuła CAC</div>
              <div className="text-2xl font-mono font-bold text-white">CAC = Koszty S&amp;M / Liczba nowych klientów</div>
              <div className="text-sm text-gray-400 mt-2">S&amp;M = Sales and Marketing (pełne koszty działu)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Warianty CAC */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 warianty obliczania CAC</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Istnieje kilka podejść do obliczania CAC — każde daje inną perspektywę.
              Kluczowe jest spójne stosowanie jednej metodologii w czasie.
            </p>
          </FadeInView>
          <div className="space-y-6">
            {cacFormula.map((wariant, i) => (
              <FadeInView key={wariant.wariant}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 text-orange-700 font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{wariant.wariant}</h3>
                      <div className="bg-gray-100 rounded-lg px-4 py-2 font-mono text-sm text-gray-800 mb-3">
                        {wariant.formuła}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{wariant.użycie}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Zalety</div>
                          <p className="text-sm text-gray-700">{wariant.zalety}</p>
                        </div>
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">Wady</div>
                          <p className="text-sm text-gray-700">{wariant.wady}</p>
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

      {/* CAC per kanał */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">CAC per kanał pozyskania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Różne kanały mają dramatycznie różny CAC. Zrozumienie kosztów per kanał
              pozwala optymalnie alokować budżet go-to-market.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Kanał</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Typowy CAC</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Payback</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Skalowalność</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Najlepszy dla</th>
                </tr>
              </thead>
              <tbody>
                {cacByChannel.map((row, i) => (
                  <tr key={row.kanał} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.kanał}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                        row.typowyCac === "Bardzo niski" ? "bg-green-100 text-green-800" :
                        row.typowyCac === "Niski" ? "bg-blue-100 text-blue-800" :
                        row.typowyCac === "Niski–Średni" ? "bg-blue-100 text-blue-800" :
                        row.typowyCac === "Średni" ? "bg-yellow-100 text-yellow-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {row.typowyCac}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.payback}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.skalowalność}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.najlepszy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benchmarki per segment */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki CAC per segment klienta</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              CAC rośnie wraz z rozmiem konraktu (ACV). Enterprise wymaga długich cykli sprzedaży i droższe
              zasoby — ale wysoki ACV uzasadnia wyższy CAC przez lepsze LTV/CAC.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {cacBenchmarks.map((bench) => (
              <FadeInView key={bench.segment}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">{bench.segment}</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Typowy CAC</div>
                      <div className="text-lg font-bold text-orange-600">{bench.cacRange}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Payback Period</div>
                      <div className="font-semibold text-gray-800">{bench.payback}</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">LTV/CAC</div>
                      <div className="font-semibold text-gray-800">{bench.ltvCac}</div>
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
