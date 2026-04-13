import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Customer Experience Management (CXM)?",
    answer:
      "Customer Experience Management (CXM lub CEM) to strategia zarządzania wszystkimi interakcjami klienta z marką — od pierwszego zetknięcia z reklamą, przez zakup, po obsługę posprzedażową i ewentualny churning. Cel CXM: tworzenie konsekwentnie pozytywnych doświadczeń we wszystkich touchpointach, które budują lojalność i advocacy.",
  },
  {
    question: "Czym CXM różni się od CRM?",
    answer:
      "CRM (Customer Relationship Management) to system zarządzania danymi i relacjami z klientami — narzędzie do przechowywania kontaktów, historii zakupów, pipeline sprzedażowego. CXM to szeroka filozofia i strategia — jak każde doświadczenie klienta z marką jest zaprojektowane i zarządzane. CRM jest narzędziem, CXM jest podejściem strategicznym.",
  },
  {
    question: "Jakie są kluczowe metryki Customer Experience?",
    answer:
      "Kluczowe metryki CX to: NPS (Net Promoter Score — lojalność i advocacy), CSAT (Customer Satisfaction — satysfakcja z konkretnej interakcji), CES (Customer Effort Score — łatwość interakcji), Customer Retention Rate, Time to Resolution, First Contact Resolution (FCR), Average Handle Time (AHT), Customer Lifetime Value (CLV) oraz Customer Churn Rate.",
  },
  {
    question: "Co to jest Customer Journey Map w kontekście CXM?",
    answer:
      "Customer Journey Map (mapa podróży klienta) to wizualizacja całej ścieżki klienta — wszystkich etapów, touchpointów, emocji i punktów bólowych od momentu gdy uświadamia sobie potrzebę, przez zakup i użytkowanie. CJM pomaga identyfikować luki i punkty frykcji w doświadczeniu oraz priorytetyzować gdzie inwestować w poprawę CX.",
  },
  {
    question: "Jak zbudować kulturę zorientowaną na Customer Experience?",
    answer:
      "Budowanie CX culture wymaga: zaangażowania leadership (CEO jako Chief Customer Officer), regularne spotkania słuchania głosu klienta, VoC program z close the loop, metryki CX w KPI każdego departamentu (nie tylko support), cross-functional CX ownership (product + marketing + support), szkolenia z empatii i CX dla wszystkich pracowników, oraz świętowanie 'customer wins'.",
  },
];

const cxPillars = [
  {
    filar: "Discover (Odkrycie)",
    opis: "Jak klient dowiaduje się o marce. Pierwsza reklama, post organic, polecenie znajomego, wyszukiwanie.",
    kluczowe: "Brand awareness, share of voice, first impression, łatwość znalezienia",
    metryki: "Impressions, reach, branded search volume, awareness survey",
  },
  {
    filar: "Consider (Rozważanie)",
    opis: "Klient porównuje opcje, szuka recenzji, odwiedza stronę, prosi o demo.",
    kluczowe: "Content jakość, social proof, przejrzystość cenowa, szybkość odpowiedzi na pytania",
    metryki: "Time on site, pages/session, demo requests, conversion rate strony",
  },
  {
    filar: "Purchase (Zakup)",
    opis: "Moment zakupu. Doświadczenie checkoutu, płatności, potwierdzenia.",
    kluczowe: "Friction minimization, bezpieczeństwo, jasność warunków, szybkość",
    metryki: "Cart abandonment rate, checkout completion, payment errors",
  },
  {
    filar: "Use (Użytkowanie)",
    opis: "Codzienne doświadczenie z produktem. Onboarding, feature discovery, wsparcie.",
    kluczowe: "Onboarding łatwość, product intuicyjność, support dostępność",
    metryki: "Product adoption, DAU/MAU, feature usage, time to first value",
  },
  {
    filar: "Retain (Zatrzymanie)",
    opis: "Utrzymanie klienta długoterminowo. Odnowienia, upsell, program lojalnościowy.",
    kluczowe: "Proaktywny engagement, NPS follow-up, retention campaigns",
    metryki: "Churn rate, renewal rate, expansion revenue, NPS",
  },
  {
    filar: "Advocate (Polecanie)",
    opis: "Klient poleca markę innym. Review, word of mouth, referral, UGC.",
    kluczowe: "Proste mechanizmy polecania, incentives, recognition, community",
    metryki: "NPS Promoters %, referral rate, reviews quantity/quality, UGC volume",
  },
];

const cxTools = [
  { kategoria: "Feedback Collection", narzędzia: "Delighted, Medallia, Qualtrics, SurveyMonkey, Hotjar", cel: "Zbieranie NPS, CSAT, CES" },
  { kategoria: "Customer Journey Mapping", narzędzia: "Miro, Lucidchart, Smaply, UXPressia", cel: "Wizualizacja touchpointów i emocji" },
  { kategoria: "CRM", narzędzia: "Salesforce, HubSpot CRM, Pipedrive", cel: "Zarządzanie relacjami i historią klienta" },
  { kategoria: "Customer Support", narzędzia: "Intercom, Zendesk, Freshdesk, Front", cel: "Obsługa zgłoszeń, live chat" },
  { kategoria: "Product Analytics", narzędzia: "Mixpanel, Amplitude, FullStory, Heap", cel: "Analiza zachowań w produkcie" },
  { kategoria: "CX Analytics Platform", narzędzia: "Medallia, Qualtrics XM, Sprinklr", cel: "Agregacja wszystkich danych CX" },
];

export default function BlogCustomerExperienceManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Experience Management (CXM) — co to jest? Zarządzanie doświadczeniami"
        description="Customer Experience Management — definicja, 6 etapów CX (discover, consider, purchase, use, retain, advocate), metryki NPS/CSAT/CES i narzędzia. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/customer-experience-management-co-to"

        keywords="Customer Experience Management (CXM) co to jest, Customer Experience Management (CXM) definicja, czym jest Customer Experience Management (CXM), Customer Experience Management (CXM) przykłady, jak działa Customer Experience Management (CXM), Customer Experience Management (CXM) znaczenie, Customer Experience Management (CXM) przewodnik"
      />
      <ArticleSchema
        title="Customer Experience Management (CXM) — co to jest?"
        description="Kompletny przewodnik po CXM: 6 filarów CX journey, kluczowe metryki, narzędzia i jak budować kulturę CX."
        url="https://fotz.pl/blog/customer-experience-management-co-to"
        datePublished="2024-01-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Experience Management", url: "https://fotz.pl/blog/customer-experience-management-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Customer Experience Management" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Customer Experience Management (CXM) — co to jest?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            CXM to strategia zarządzania wszystkimi doświadczeniami klienta z marką. Poznaj 6 filarów
            customer journey, kluczowe metryki i jak budować organizację zorientowaną na CX.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Customer Experience Management?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Customer Experience Management (CXM)</strong> to holistyczne podejście do
              projektowania i zarządzania wszystkimi interakcjami klienta z marką — od pierwszego
              kontaktu po ambasadorstwo. CXM przekształca przypadkowe doświadczenia w celowo
              zaprojektowane podróże, które budują lojalność i business value.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Bain & Company: firmy liderujące w CX rosną 4–8% szybciej niż rynek.
              A Forrester: klienci z doskonałym CX wydają 2,4× więcej niż niezadowoleni.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "4–8%", opis: "szybszy wzrost firm liderujących w CX vs. rynek (Bain & Company)" },
                { stat: "2.4×", opis: "więcej wydają klienci z doskonałym doświadczeniem vs. niezadowoleni" },
                { stat: "89%", opis: "firm konkuruje głównie na poziomie Customer Experience (Gartner)" },
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

      {/* 6 filarów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 etapów Customer Experience Journey</h2>
            <div className="space-y-4">
              {cxPillars.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{p.filar}</h3>
                  </div>
                  <p className="text-slate-600 mb-3">{p.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-rose-50 rounded p-3">
                      <p className="text-xs font-semibold text-rose-600 mb-1">Kluczowe elementy CX:</p>
                      <p className="text-rose-800">{p.kluczowe}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Metryki:</p>
                      <p className="text-slate-700">{p.metryki}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Narzędzia */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia CXM</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kategoria</th>
                    <th className="p-3 text-left">Narzędzia</th>
                    <th className="p-3 text-left">Cel</th>
                  </tr>
                </thead>
                <tbody>
                  {cxTools.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kategoria}</td>
                      <td className="p-3 text-rose-700 text-sm">{row.narzędzia}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Customer Experience Management</h2>
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
