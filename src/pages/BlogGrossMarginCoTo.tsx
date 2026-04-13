import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Gross Margin (marża brutto)?",
    answer: "Gross Margin (marża brutto) to procent przychodów, który pozostaje po odjęciu bezpośrednich kosztów dostarczenia produktu lub usługi (COGS — Cost of Goods Sold). Formuła: Gross Margin% = (Przychody - COGS) / Przychody × 100%. Przykład: firma SaaS ma przychody 1M PLN, COGS 200K PLN → Gross Margin = (1M - 200K) / 1M × 100% = 80%. Gross Margin pokazuje, ile pieniędzy pozostaje na pokrycie kosztów operacyjnych i generowanie zysku.",
  },
  {
    question: "Co wchodzi w skład COGS w SaaS?",
    answer: "W SaaS COGS (bezpośrednie koszty) obejmuje: hosting i infrastruktura cloud (AWS, GCP, Azure), koszty pracowników Customer Success i Support (bezpośrednio obsługujących klientów), licencje na third-party software wbudowane w produkt, koszty onboardingu (jeśli są stałe per klient), opłaty za API/data providers (np. Stripe fees, Twilio, OpenAI). NIE wlicza się do COGS: wynagrodzenia inżynierów produktu, koszty sprzedaży i marketingu, G&A (general and administrative).",
  },
  {
    question: "Jaka jest dobra Gross Margin dla SaaS?",
    answer: "Benchmarki Gross Margin dla SaaS: poniżej 60% = słaby (typowy dla hardware lub wysokich kosztów customizacji). 60–70% = przeciętny (dużo Professional Services lub wysokie hosting costs). 70–80% = dobry (typowy dojrzały SaaS). Powyżej 80% = bardzo dobry. Powyżej 85% = best-in-class (czysty software, minimal CS costs). Benchmark mediany publicznych SaaS to ok. 71-76%. Snowflake, HubSpot, Salesforce mają 65–77% gross margin.",
  },
  {
    question: "Czym różni się Gross Margin od Net Margin?",
    answer: "Gross Margin to marża po odjęciu tylko kosztów bezpośrednich (COGS). Net Margin to marża po odjęciu WSZYSTKICH kosztów: COGS + R&D + S&M + G&A + podatki + amortyzacja. Większość wzrostowych SaaS ma bardzo wysoką Gross Margin (70-80%) ale ujemną Net Margin (inwestują w growth). Dojrzały SaaS ma zarówno wysoką Gross Margin jak i pozytywną Net Margin. Gross Margin jest ważniejszy do analizy unit economics i skalowalności modelu.",
  },
  {
    question: "Jak poprawić Gross Margin w SaaS?",
    answer: "Strategie poprawy Gross Margin: optymalizacja infrastruktury cloud (rightsizing, reserved instances, spot instances — może zaoszczędzić 30-50% kosztów), redukcja COGS per klient przez automatyzację onboardingu i supportu (self-service, AI chatbots), negocjowanie lepszych warunków z dostawcami API, przejście klientów z high-touch na low-touch CS model, ograniczenie Professional Services lub podniesienie ich ceny. Wzrost skali też naturalnie poprawia GM przez economies of scale.",
  },
];

const grossMarginBySector = [
  { sektor: "Pure SaaS (software only)", gmRange: "75–90%", przykłady: "Zoom, Slack, Figma (pre-acquisition)", komentarz: "Minimal support, zero physical delivery" },
  { sektor: "SaaS + Support (managed)", gmRange: "65–80%", przykłady: "HubSpot, Salesforce, ServiceNow", komentarz: "CS i support w COGS" },
  { sektor: "SaaS + Infrastructure", gmRange: "55–75%", przykłady: "Snowflake, Databricks, AWS services", komentarz: "Wysokie koszty cloud i data transfer" },
  { sektor: "SaaS + Hardware", gmRange: "40–65%", przykłady: "Square, Toast, IoT SaaS", komentarz: "Hardware COGS obniża gross margin" },
  { sektor: "Marketplace / Fintech", gmRange: "30–60%", przykłady: "Shopify, Stripe, Adyen", komentarz: "Payment processing i fraud costs" },
  { sektor: "Professional Services (pure)", gmRange: "20–40%", przykłady: "Consulting, implementation firms", komentarz: "Labor intensive, mało scalable" },
];

const cogsComponents = [
  { koszt: "Hosting i infrastruktura", typowo: "5–15% przychodów", opis: "AWS/GCP/Azure compute, storage, database, CDN, networking", redukcja: "Reserved instances, spot, rightsizing" },
  { koszt: "Customer Success i Support", typowo: "3–12% przychodów", opis: "Wynagrodzenia CSM i support agentów bezpośrednio obsługujących klientów", redukcja: "Self-service, AI, wyższy tier do support" },
  { koszt: "Third-party APIs i licencje", typowo: "2–8% przychodów", opis: "Twilio, SendGrid, Stripe fees, OpenAI, data providers", redukcja: "Volume deals, alternatywni dostawcy" },
  { koszt: "Professional Services", typowo: "0–15% przychodów", opis: "Implementacje, integracje, customizacje billowane jako COGS", redukcja: "Productize, partners do wdrożeń" },
];

const grossMarginTrends = [
  { etap: "0–1M ARR", typowyCm: "60–75%", dlaczego: "Wysokie koszty CS per klient, infrastruktura nieoptymalna, ręczne procesy" },
  { etap: "1–10M ARR", typowyCm: "70–80%", dlaczego: "Economies of scale w infrastrukturze, pierwsze automatyzacje" },
  { etap: "10–50M ARR", typowyCm: "75–83%", dlaczego: "Dojrzały support model, zoptymalizowany cloud spend, self-service" },
  { etap: "50M+ ARR", typowyCm: "78–87%", dlaczego: "Fully scaled, dedicated infra team, niskie variable koszty" },
];

export default function BlogGrossMarginCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Gross Margin — marża brutto co to jest w SaaS? | Fotz.pl"
        description="Gross Margin (marża brutto) w SaaS — definicja, formuła, co wchodzi do COGS, benchmarki branżowe i jak poprawić marżę brutto. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/gross-margin-marza-brutto-co-to"

        keywords="Gross Margin co to jest, Gross Margin definicja, czym jest Gross Margin, Gross Margin startup, Gross Margin jak liczyć, Gross Margin wzór, Gross Margin przykłady"
      />
      <ArticleSchema
        title="Gross Margin — marża brutto co to jest w SaaS?"
        description="Kompletny przewodnik po Gross Margin: definicja, COGS, benchmarki i strategie poprawy marży brutto."
        url="https://fotz.pl/blog/gross-margin-marza-brutto-co-to"
        datePublished="2024-01-30"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Gross Margin co to jest", url: "https://fotz.pl/blog/gross-margin-marza-brutto-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Gross Margin co to jest", href: "/blog/gross-margin-marza-brutto-co-to" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Finanse SaaS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gross Margin — marża brutto w SaaS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ile z każdego złotego przychodu zostaje po pokryciu kosztów dostarczenia usługi?
              Gross Margin to fundament oceny skalowalności modelu SaaS i kluczowy wskaźnik dla inwestorów.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-emerald-900/50 rounded-xl p-5 border border-emerald-700">
                <div className="text-sm text-emerald-300 font-semibold mb-2">Formuła</div>
                <div className="text-lg font-mono font-bold text-white">GM% = (Rev - COGS) / Rev × 100</div>
              </div>
              <div className="bg-emerald-900/50 rounded-xl p-5 border border-emerald-700">
                <div className="text-sm text-emerald-300 font-semibold mb-2">Benchmark SaaS</div>
                <div className="text-3xl font-bold text-emerald-400">70–80%</div>
                <div className="text-sm text-gray-400">typowa marża dojrzałego SaaS</div>
              </div>
              <div className="bg-emerald-900/50 rounded-xl p-5 border border-emerald-700">
                <div className="text-sm text-emerald-300 font-semibold mb-2">Best-in-class</div>
                <div className="text-3xl font-bold text-emerald-400">85%+</div>
                <div className="text-sm text-gray-400">czysty software, minimal CS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COGS components */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co wchodzi w COGS w SaaS?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              COGS (Cost of Goods Sold) to bezpośrednie koszty dostarczenia usługi. W SaaS różni się
              od modeli tradycyjnych — brak fizycznych towarów, ale są koszty infrastruktury i obsługi.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {cogsComponents.map((komp) => (
              <FadeInView key={komp.koszt}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-1">{komp.koszt}</h3>
                  <div className="text-emerald-600 font-semibold text-sm mb-3">{komp.typowo}</div>
                  <p className="text-gray-600 text-sm mb-3">{komp.opis}</p>
                  <div className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Jak redukować</div>
                    <div className="text-sm text-gray-700">{komp.redukcja}</div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-8 bg-yellow-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-2">Co NIE jest COGS w SaaS</h3>
              <p className="text-sm text-gray-700">
                Wynagrodzenia inżynierów produktu (R&D), koszty sprzedaży i marketingu (S&M),
                wynagrodzenia CEO/CFO/HR (G&A), koszty biura i administracji, amortyzacja oprogramowania
                i patentów. Błędne zaliczanie tych kosztów do COGS zawyża rzeczywistą Gross Margin.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* GM per sektor */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Gross Margin w różnych typach firm</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Gross Margin różni się znacznie w zależności od modelu biznesowego —
              od czystego software po modele łączące hardware i profesjonalne usługi.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="text-left px-4 py-3 text-sm font-semibold">Typ firmy</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Gross Margin</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Przykłady</th>
                  <th className="text-left px-4 py-3 text-sm font-semibold">Komentarz</th>
                </tr>
              </thead>
              <tbody>
                {grossMarginBySector.map((row, i) => (
                  <tr key={row.sektor} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.sektor}</td>
                    <td className="px-4 py-3 text-sm">
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-bold">
                        {row.gmRange}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm italic">{row.przykłady}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm">{row.komentarz}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trendy GM wg skali */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak Gross Margin zmienia się ze skalą?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Gross Margin typowo poprawia się wraz ze wzrostem ARR — economies of scale w infrastrukturze
              i malejące koszty CS per klient obniżają COGS jako % przychodu.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {grossMarginTrends.map((trend) => (
              <FadeInView key={trend.etap}>
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 flex gap-4 items-center">
                  <div className="w-32 flex-shrink-0">
                    <div className="text-sm font-bold text-gray-700">{trend.etap}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl font-bold text-emerald-600">{trend.typowyCm}</span>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-emerald-500 h-3 rounded-full"
                          style={{
                            width: trend.etap === "0–1M ARR" ? "65%" :
                              trend.etap === "1–10M ARR" ? "74%" :
                              trend.etap === "10–50M ARR" ? "79%" : "83%"
                          }}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{trend.dlaczego}</p>
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
