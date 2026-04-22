import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest sales velocity?",
    answer:
      "Sales velocity (prędkość sprzedaży) to metryka mierząca jak szybko firma generuje przychody z pipeline'u sprzedaży. Formuła: Sales Velocity = (Liczba szans × Średnia wartość kontraktu × Win Rate) / Długość cyklu sprzedaży. Wynik to przychód generowany dziennie lub miesięcznie z aktywnego pipeline'u. Sales velocity jest kluczowym KPI dla dyrektorów sprzedaży i CFO.",
  },
  {
    question: "Jak obliczyć sales velocity?",
    answer:
      "Formuła: Sales Velocity = (N × V × W) / L, gdzie: N = liczba aktywnych szans sprzedażowych w pipeline, V = średnia wartość kontraktu (ACV/ACV), W = win rate (% szans które zostają zamknięte pozytywnie), L = długość cyklu sprzedaży (w dniach). Przykład: 100 szans × 50 000 zł × 20% win rate / 90 dni cyklu = 100 × 50 000 × 0.2 / 90 = 11 111 zł/dzień revenue velocity.",
  },
  {
    question: "Jak zwiększyć sales velocity?",
    answer:
      "Cztery dźwignie sales velocity: 1) Zwiększ N (liczba szans) — więcej leadów, lepsza kwalifikacja, SDR/BDR expansion. 2) Zwiększ V (wartość kontraktu) — upsell, enterprise focus, value-based selling. 3) Zwiększ W (win rate) — lepsze discovery, case studies, competitive positioning, sales training. 4) Zmniejsz L (cykl sprzedaży) — champion enabling, multi-threading, urgency triggers, simplified procurement. Każda z czterech dźwigni bezpośrednio wpływa na wynik.",
  },
  {
    question: "Jaka jest różnica między sales velocity a pipeline velocity?",
    answer:
      "Sales velocity i pipeline velocity są często używane zamiennie, ale istnieje niuans: pipeline velocity mierzy szybkość przechodzenia szans przez etapy pipeline'u (jak szybko deal moves od Stage 1 do Close). Sales velocity mierzy ostateczne tempo generowania przychodu z całego pipeline'u. Pipeline velocity jest bardziej operacyjną metryką (gdzie są wąskie gardła w procesie sprzedaży?), sales velocity jest metryką strategiczną (ile zarabiamy dziennie?).",
  },
  {
    question: "Jakie jest dobry benchmark sales velocity dla SaaS?",
    answer:
      "Benchmarki są bardzo zróżnicowane w zależności od ACV i segmentu: SMB SaaS (ACV poniżej 10K) — cykl sprzedaży 14-30 dni, win rate 20-30%. Mid-market (ACV 10-100K) — cykl 30-90 dni, win rate 15-25%. Enterprise (ACV powyżej 100K) — cykl 90-180+ dni, win rate 10-20%. Zamiast absolutnych benchmarków, śledź trend własnej sales velocity — wzrost month-over-month to kluczowy sygnał.",
  },
];

const salesVelocityDrivers = [
  {
    driver: "N — Liczba szans (Opportunities)",
    wpływ: "Proporcjonalny",
    jak_zwiększyć: "Lepsze SDR/BDR prospecting, inbound lead gen, ICP refinement, partner referrals, outbound sequencing",
    ryzyko: "Więcej słabych szans pogarsza win rate — jakość ważniejsza niż ilość",
    metryki: "Pipeline coverage ratio, Meetings booked, SQL generation rate",
  },
  {
    driver: "V — Średnia wartość kontraktu (ACV)",
    wpływ: "Proporcjonalny",
    jak_zwiększyć: "Multi-year contracts, enterprise upsell, platform vs. point solution, value-based pricing",
    ryzyko: "Większy ACV = dłuższy cykl i więcej decydentów — kompromis z L",
    metryki: "Average Contract Value, ACV by segment, Expansion ARR",
  },
  {
    driver: "W — Win Rate",
    wpływ: "Proporcjonalny",
    jak_zwiększyć: "Better qualification (MEDDIC/BANT), competitive intel, case studies, champion development, proof of concept",
    ryzyko: "Zbyt wysoki win rate = za mała ambitność w targetowaniu — stretch goals",
    metryki: "Win rate by segment, Loss reasons analysis, Competitive win rate",
  },
  {
    driver: "L — Długość cyklu sprzedaży",
    wpływ: "Odwrotnie proporcjonalny (mniejszy L = wyższy velocity)",
    jak_zwiększyć: "Multi-threading (więcej kontaktów), procurement simplification, urgency (promo, event deadlines), champion enabling",
    ryzyko: "Zbyt agresywne skracanie cyklu = niższe win rate lub złe doświadczenia klienta",
    metryki: "Average Sales Cycle, Stage duration analysis, Days in stage",
  },
];

const salesProcessStages = [
  { etap: "Prospecting / Lead Gen", cel: "Identyfikacja potencjalnych klientów pasujących do ICP", metryki: "Leads generated, MQL count, Outreach response rate" },
  { etap: "Qualification (MEDDIC)", cel: "Weryfikacja czy szansa jest warta czasu — Metrics, Economic Buyer, Decision Process, Decision Criteria, Identify Pain, Champion", metryki: "SQL rate, Disqualification rate, Time to qualify" },
  { etap: "Discovery", cel: "Zrozumienie problemu klienta, stakeholderów i procesu decyzyjnego", metryki: "Discovery call completion, Multi-threading score" },
  { etap: "Demo / POC", cel: "Prezentacja rozwiązania, Proof of Concept jeśli wymagany", metryki: "Demo to POC rate, POC to proposal rate" },
  { etap: "Proposal / Negotiation", cel: "Przygotowanie i negocjacja warunków kontraktu", metryki: "Proposal acceptance rate, Discount rate, Contract value vs. listed price" },
  { etap: "Closing", cel: "Finalizacja kontraktu, podpisanie, onboarding handoff", metryki: "Close rate, Time from proposal to signature, Churned at signing" },
];

export default function BlogSalesVelocityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Velocity | Fotz Studio"
        description="Sales velocity — definicja, formuła (N × V × W / L), 4 dźwignie wzrostu, benchmarki dla SaaS i etapy procesu sprzedaży. Jak mierzyć i zwiększać prędkość…"
        canonical="https://fotz.pl/blog/sales-velocity-co-to"

        keywords="Sales Velocity co to jest, Sales Velocity definicja, czym jest Sales Velocity, Sales Velocity w sprzedaży, Sales Velocity strategia, Sales Velocity przykłady, jak używać Sales Velocity"
      />
      <ArticleSchema
        title="Sales Velocity — co to jest i jak zwiększyć prędkość sprzedaży?"
        description="Kompletny przewodnik po sales velocity: formuła N×V×W/L, 4 dźwignie wzrostu (opportunities, ACV, win rate, cykl sprzedaży) i benchmarki SaaS."
        url="https://fotz.pl/blog/sales-velocity-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Velocity", url: "https://fotz.pl/blog/sales-velocity-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Sales Velocity", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Sales Velocity — co to jest i jak ją zwiększyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sales velocity mierzy jak szybko generujesz przychód z pipeline'u.
            Poznaj formułę N×V×W/L, 4 dźwignie wzrostu i jak optymalizować każdą z nich.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest sales velocity?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Sales velocity</strong> to ilość przychodu generowanego z pipeline'u sprzedaży
              w jednostce czasu. Łączy cztery kluczowe zmienne w jedną liczbę: ile masz szans,
              jak duże są, jak często wygrywasz i jak szybko zamykasz.
            </p>
            <div className="bg-blue-50 rounded-xl p-6 mb-6">
              <p className="font-bold text-blue-900 mb-3 text-lg">Formuła Sales Velocity:</p>
              <div className="bg-white rounded-lg p-4 font-mono text-center text-blue-800 text-lg border border-blue-200">
                SV = (N × V × W) / L
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-sm">
                {[
                  { var: "N", name: "Liczba szans", opis: "Aktywne opportunities w pipeline" },
                  { var: "V", name: "Wartość kontraktu", opis: "Średni ACV deal value" },
                  { var: "W", name: "Win Rate", opis: "% szans zamkniętych pozytywnie" },
                  { var: "L", name: "Długość cyklu", opis: "Dni od SQL do podpisania" },
                ].map((v, i) => (
                  <div key={i} className="bg-blue-100 rounded p-3 text-center">
                    <p className="text-2xl font-bold text-blue-700">{v.var}</p>
                    <p className="font-semibold text-blue-900 text-xs">{v.name}</p>
                    <p className="text-blue-700 text-xs">{v.opis}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "4 dźwignie", opis: "Sales velocity ma 4 zmienne — każda bezpośrednio i proporcjonalnie wpływa na wynik" },
                { stat: "N×V×W/L", opis: "Formuła łączy pipeline size, deal size, win rate i cycle time w jedną miarę revenue generation" },
                { stat: "Dziennie", opis: "Sales velocity wyrażona jako przychód per dzień — przydatna do prognozowania kwartalnego" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 dźwignie sales velocity</h2>
            <div className="space-y-4">
              {salesVelocityDrivers.map((d, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{d.driver}</h3>
                  <p className="text-xs font-semibold text-blue-600 mb-2">Wpływ: {d.wpływ}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Jak zwiększyć:</p>
                      <p className="text-green-800">{d.jak_zwiększyć}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Ryzyko:</p>
                      <p className="text-orange-800">{d.ryzyko}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Metryki:</p>
                      <p className="text-slate-700">{d.metryki}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Etapy procesu sprzedaży i metryki</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Etap</th>
                    <th className="p-3 text-left">Cel</th>
                    <th className="p-3 text-left">Kluczowe metryki</th>
                  </tr>
                </thead>
                <tbody>
                  {salesProcessStages.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700">{row.etap}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.metryki}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — sales velocity</h2>
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

      <RelatedArticles currentArticleId="sales-velocity-co-to" />
      <ContactSection />
    </Layout>
  );
}
