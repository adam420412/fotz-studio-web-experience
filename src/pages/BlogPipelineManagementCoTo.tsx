import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest pipeline management w sprzedaży?",
    answer: "Pipeline management (zarządzanie rurociągiem sprzedaży) to systematyczny proces śledzenia, analizowania i optymalizowania wszystkich potencjalnych transakcji (opportunity) na różnych etapach procesu sprzedaży. Celem pipeline management jest zapewnienie, że organizacja ma wystarczającą ilość kwalifikowanych szans sprzedażowych (pipeline coverage) na każdym etapie, że szanse progresują w odpowiednim tempie, a problemy (stagnujące deale, luki w pipeline) są wykrywane i adresowane z wyprzedzeniem. Dobrze zarządzany pipeline to fundament przewidywalnego wzrostu.",
  },
  {
    question: "Jaka powinna być pipeline coverage?",
    answer: "Pipeline coverage (pokrycie pipeline) to stosunek wartości pipeline do targetu (quota). Standardy: 3x quota — minimum dla zdrowego pipeline w typowej organizacji B2B. 4-5x quota — rekomendowane dla enterprise z długimi cyklami i niskim win rate. SMB z krótkim cyklem i wysokim win rate może działać przy 2-3x. Jak liczyć: jeśli Twoja quota na kwartał to 1M PLN, musisz mieć minimum 3-4M PLN w kwalifikowanym pipeline na początku kwartału. Poniżej 3x coverage to sygnał, że wyniki kwartału są zagrożone i trzeba natychmiast intensyfikować prospecting.",
  },
  {
    question: "Jak prowadzić skuteczny pipeline review?",
    answer: "Efektywny pipeline review (tygodniowy): Przejrzyj wszystkie aktywne oportunity — co zmieniło się od ostatniego tygodnia? Deep-dive na deale w Commit i Upside — jakie są blockers, co to jest next step? Identyfikuj stagnujące deale — oportunity bez aktywności przez 2+ tygodnie. Sprawdź coverage — czy masz 3-4x quota w pipeline? Identyfikuj nowe oportunity — co weszło do pipeline tego tygodnia? Priorytetyzuj działania na kolejny tydzień. Czas trwania: 30-60 min dla AE, 1-2h dla team review z managerem.",
  },
  {
    question: "Jak identyfikować i czyścić stagnujące deale w pipeline?",
    answer: "Czyszczenie stagnujących dealów: Stagnujący deal (stale opportunity) to oportunity bez aktywności przez okres dłuższy niż typowy cykl sprzedaży. Jak to adresować: Wyślij reactivation email z nową wartością lub insight. Zadzwoń bezpośrednio z konkretnym pytaniem lub propozycją. Jeśli brak odpowiedzi po 2-3 próbach — zamknij deal jako Lost z powodem. Utrzymywanie martwych dealów w pipeline zaburza forecast i ukrywa prawdziwy stan pipeline'u. Zasada: better a clean pipeline than an inflated one. Zamknięcie martwego dealu to też informacja — dlaczego straciliśmy? Co możemy poprawić?",
  },
  {
    question: "Jakie narzędzia wspierają pipeline management?",
    answer: "Narzędzia do pipeline management: CRM (Salesforce, HubSpot) — core systemu, stages, pipeline views, dashboardy. Revenue Intelligence (Gong, Clari, Boostup) — AI analizuje aktywność dealów, wykrywa ryzyka automatycznie. Sales Engagement (Outreach, Salesloft) — tracking aktywności emailowej i telefonicznej, automatyczne sekwencje follow-up. BI (Tableau, Looker) — zaawansowane dashboardy cohort analysis, conversion rates per stage. Deal Intelligence (Chorus.ai) — analiza nagranych rozmów pod kątem ryzyka i momentum. Najważniejsze: narzędzia pomagają, ale disipline oczyszczania i aktualizowania CRM jest kluczowa — tools nie zastąpią higieny danych.",
  },
];

const pipelineStages = [
  { etap: "Prospecting", definicja: "Kwalifikowany lead lub kontakt do follow-up", probability: "5–10%", typowy: "Nieskończony — ciągły prospecting" },
  { etap: "Discovery Scheduled", definicja: "Discovery call zaplanowany z kwalifikowanym prospectem", probability: "15–20%", typowy: "0–14 dni" },
  { etap: "Discovery Complete", definicja: "Discovery przeprowadzony, ICP fit potwierdzony", probability: "25–35%", typowy: "0–7 dni" },
  { etap: "Demo / Evaluation", definicja: "Demo lub ewaluacja produktu w toku", probability: "40–50%", typowy: "7–30 dni" },
  { etap: "Proposal Sent", definicja: "Propozycja cenowa wysłana, oczekiwanie na decyzję", probability: "55–65%", typowy: "7–14 dni" },
  { etap: "Negotiation", definicja: "Aktywne negocjacje warunków kontraktu", probability: "70–85%", typowy: "7–21 dni" },
  { etap: "Closed Won / Lost", definicja: "Deal zamknięty pozytywnie lub negatywnie", probability: "100% / 0%", typowy: "N/A" },
];

const pipelineHealthMetrics = [
  { metryka: "Pipeline Coverage Ratio", definicja: "Wartość pipeline / Quarterly quota", zdrowy: "3–4x quota", alarmujący: "Poniżej 2.5x" },
  { metryka: "Average Deal Age", definicja: "Średni czas dealu w pipeline", zdrowy: "Zbliżony do typowego cycle", alarmujący: "2x typowego cyklu lub więcej" },
  { metryka: "Stage Conversion Rate", definicja: "% oportunity przechodzących z etapu do etapu", zdrowy: "Discovery-to-Demo 50%+, Demo-to-Proposal 40%+", alarmujący: "Spadek o 20%+ vs. historyczne" },
  { metryka: "Win Rate", definicja: "Closed Won / (Closed Won + Closed Lost)", zdrowy: "20–30% overall, 40–50% kwalifikowane", alarmujący: "Poniżej 15% przez 2 kwartały" },
  { metryka: "Average Sales Cycle", definicja: "Czas od stworzenia oportunity do Closed Won", zdrowy: "Stabilny lub skracający się", alarmujący: "Rosnący o 20%+ bez wyjaśnienia" },
];

const pipelineActions = [
  { problem: "Za mało pipeline (coverage poniżej 3x)", przyczyna: "Niewystarczający prospecting, zły ICP targeting", działanie: "Natychmiastowe intensywne prospecting, pipeline building sprint, dodatkowe SDR support" },
  { problem: "Stagnujące deale (brak aktywności 2+ tygodnie)", przyczyna: "Brak followup, klient stracił priorytet, deal jest martwy", działanie: "Reactivation campaign, clean-up stale opportunities, close-loss i analiza powodów" },
  { problem: "Niski win rate (poniżej 15%)", przyczyna: "Słaba kwalifikacja, słabe dopasowanie produktu, silna konkurencja", działanie: "Win/loss analysis, ICP review, coaching discovery i obiekcji, pricing review" },
  { problem: "Wydłużający się cykl sprzedaży", przyczyna: "Procurement delays, brak Economic Buyer, budget freeze", działanie: "Multithreading, executive engagement, mutual close plan, pipeline stage review" },
];

export default function BlogPipelineManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Pipeline Management | Fotz Studio"
        description="Pipeline management w sprzedaży B2B — etapy pipeline, coverage ratio, metryki zdrowia i jak adresować problemy. Kompletny przewodnik dla liderów sprzedaży."
        canonical="https://fotz.pl/blog/pipeline-management-zarzadzanie-sprzedaza-b2b"

        keywords="Pipeline Management co to jest, Pipeline Management definicja, czym jest Pipeline Management, Pipeline Management w sprzedaży, Pipeline Management strategia, Pipeline Management przykłady, jak używać Pipeline Management"
      />
      <ArticleSchema
        title="Pipeline Management — zarządzanie pipeline sprzedaży B2B"
        description="Kompletny przewodnik po pipeline management: etapy, coverage, metryki zdrowia i działania naprawcze."
        url="https://fotz.pl/blog/pipeline-management-zarzadzanie-sprzedaza-b2b"
        datePublished="2024-02-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Pipeline Management", url: "https://fotz.pl/blog/pipeline-management-zarzadzanie-sprzedaza-b2b" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Pipeline Management", url: "/blog/pipeline-management-zarzadzanie-sprzedaza-b2b" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pipeline Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zdrowy pipeline to podstawa przewidywalnego wzrostu. Bez systematycznego zarządzania
              pipeline'em nie wiadomo ile sprzedaż osiągnie w tym kwartale — i nie ma czasu
              na reakcję kiedy wyniki są zagrożone.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Etapów pipeline", value: "7" },
                { label: "Coverage minimum", value: "3x quota" },
                { label: "Metryk zdrowia", value: "5" },
                { label: "Problemów z planem", value: "4" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapy pipeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7 etapów pipeline sprzedaży B2B</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustandaryzowane etapy pipeline z jasną definicją co je odróżnia umożliwiają
              obiektywną ocenę statusu dealów i porównanie wyników między handlowcami.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-teal-50">
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Etap</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Definicja</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Probability</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Typowy czas</th>
                </tr>
              </thead>
              <tbody>
                {pipelineStages.map((s, i) => (
                  <tr key={s.etap} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm font-semibold text-teal-700">{s.etap}</td>
                    <td className="p-4 text-sm text-gray-700">{s.definicja}</td>
                    <td className="p-4 text-sm font-medium text-gray-800">{s.probability}</td>
                    <td className="p-4 text-sm text-gray-600">{s.typowy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Metryki zdrowia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 metryk zdrowia pipeline</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Regularne monitorowanie tych metryk pozwala wykrywać problemy zanim wpłyną na wyniki kwartału.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {pipelineHealthMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-teal-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{m.metryka}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Definicja</div>
                          <p className="text-sm text-gray-700">{m.definicja}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-green-600 uppercase mb-1">Zdrowy</div>
                          <p className="text-sm text-gray-700">{m.zdrowy}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">Alarmujący</div>
                          <p className="text-sm text-gray-700">{m.alarmujący}</p>
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

      {/* Problemy i działania */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 problemy pipeline i plan działania</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy problem z pipeline ma konkretne przyczyny i konkretne działania naprawcze.
              Kluczem jest wczesna diagnoza i szybka reakcja.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {pipelineActions.map((a, i) => (
              <FadeInView key={a.problem}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-orange-100 text-orange-700 font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">!</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{a.problem}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-orange-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-orange-700 uppercase mb-1">Typowa przyczyna</div>
                          <p className="text-sm text-gray-700">{a.przyczyna}</p>
                        </div>
                        <div className="bg-teal-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-teal-700 uppercase mb-1">Działanie naprawcze</div>
                          <p className="text-sm text-gray-700">{a.działanie}</p>
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

      <RelatedArticles currentArticleId="pipeline-management-zarzadzanie-sprzedaza-b2b" />
      <ContactSection />
    </Layout>
  );
}
