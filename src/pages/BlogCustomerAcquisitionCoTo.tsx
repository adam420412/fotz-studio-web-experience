import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest customer acquisition?",
    answer:
      "Customer acquisition (pozyskiwanie klientów) to cały proces przyciągania i przekształcania nowych użytkowników lub firm w płacących klientów. Obejmuje wszystkie działania marketingowe i sprzedażowe — od pierwszego kontaktu z marką aż do dokonania pierwszego zakupu.",
  },
  {
    question: "Co to jest CAC (Customer Acquisition Cost)?",
    answer:
      "CAC (Customer Acquisition Cost, koszt pozyskania klienta) to całkowite wydatki na marketing i sprzedaż podzielone przez liczbę nowych klientów pozyskanych w danym okresie. Wzór: CAC = (Wydatki na marketing + Wydatki na sprzedaż) / Liczba nowych klientów. CAC jest kluczową metryką zdrowia biznesu.",
  },
  {
    question: "Jaki jest dobry CAC?",
    answer:
      "Dobry CAC jest względny — zależy od LTV (Customer Lifetime Value). Ogólna zasada: stosunek LTV do CAC powinien wynosić co najmniej 3:1. Jeśli klient przez całe życie przynosi Ci 3000 PLN, CAC poniżej 1000 PLN jest zdrowy. Niski CAC przy niskim LTV nie jest sukcesem.",
  },
  {
    question: "Jakie są kanały pozyskiwania klientów?",
    answer:
      "Główne kanały to: SEO organiczne, płatne reklamy (Google Ads, Meta Ads, LinkedIn Ads), content marketing, social media, email marketing, program referencyjny, partnerstwa, influencer marketing, cold outreach (email, LinkedIn), eventy i webinary.",
  },
  {
    question: "Jak zmniejszyć koszt pozyskania klienta?",
    answer:
      "Strategie redukcji CAC to: poprawa konwersji na każdym etapie lejka (CRO), inwestycja w SEO organiczne (niski długoterminowy CAC), program referencyjny (klienci pozyskują klientów), lepsze targetowanie kampanii płatnych, skrócenie cyklu sprzedaży oraz optymalizacja onboardingu zmniejszająca churna wczesnych klientów.",
  },
];

const acquisitionChannels = [
  { kanał: "SEO organiczne", model: "Inbound", cac: "Niski (długoterminowo)", skala: "Wysoka", czas_do_efektu: "6–12 miesięcy" },
  { kanał: "Google Ads (PPC)", model: "Outbound", cac: "Średni–Wysoki", skala: "Wysoka", czas_do_efektu: "Natychmiastowy" },
  { kanał: "Meta Ads (FB/IG)", model: "Outbound", cac: "Średni", skala: "Bardzo wysoka", czas_do_efektu: "1–2 tygodnie" },
  { kanał: "Content Marketing", model: "Inbound", cac: "Niski (długoterminowo)", skala: "Średnia", czas_do_efektu: "3–9 miesięcy" },
  { kanał: "Program referencyjny", model: "WOM", cac: "Bardzo niski", skala: "Ograniczona", czas_do_efektu: "1–3 miesiące" },
  { kanał: "Cold Email / Outreach", model: "Outbound", cac: "Niski", skala: "Średnia (B2B)", czas_do_efektu: "2–6 tygodni" },
  { kanał: "Influencer Marketing", model: "Social Proof", cac: "Zmienny", skala: "Wysoka", czas_do_efektu: "1–4 tygodnie" },
  { kanał: "Partnerstwa / Afiliacja", model: "Partnership", cac: "Niski-Średni", skala: "Średnia", czas_do_efektu: "1–3 miesiące" },
];

const acquisitionFunnel = [
  {
    etap: "Awareness (Świadomość)",
    cel: "Dotrzeć do osób z grupy docelowej, które jeszcze Cię nie znają",
    metryki: ["Impressions", "Reach", "Brand searches"],
    kanały: "SEO, reklamy display, social media, influencerzy",
  },
  {
    etap: "Consideration (Rozważanie)",
    cel: "Zainteresować odwiedzających i zbudować ich zaangażowanie",
    metryki: ["Czas na stronie", "Strony na sesję", "Email subscriptions"],
    kanały: "Blog, landing pages, webinary, case studies",
  },
  {
    etap: "Conversion (Konwersja)",
    cel: "Przekształcić zaangażowanych użytkowników w płacących klientów",
    metryki: ["Współczynnik konwersji", "CAC", "Przychód na lead"],
    kanały: "Demo, trial, promocja, sales outreach",
  },
  {
    etap: "Onboarding (Aktywacja)",
    cel: "Zapewnić, że nowy klient osiągnie wartość z produktu/usługi",
    metryki: ["Aha moment time", "Feature adoption", "D1/D7/D30 retention"],
    kanały: "Email sequence, in-app guides, CS onboarding call",
  },
];

export default function BlogCustomerAcquisitionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Acquisition | Fotz Studio"
        description="Customer acquisition — definicja, jak obliczyć CAC, 8 kanałów pozyskiwania klientów i lejek akwizycji. Kompletny przewodnik po kosztach i strategiach…"
        canonical="https://fotz.pl/blog/customer-acquisition-co-to"

        keywords="Customer Acquisition co to jest, Customer Acquisition definicja, czym jest Customer Acquisition, Customer Acquisition startup, Customer Acquisition jak liczyć, Customer Acquisition wzór, Customer Acquisition przykłady"

        canonical="https://fotz.pl/blog/customer-acquisition-co-to"
      />
      <ArticleSchema
        title="Customer Acquisition — co to jest i jak działa?"
        description="Kompletny przewodnik po customer acquisition: definicja CAC, kanały pozyskiwania klientów i lejek akwizycji."
        url="https://fotz.pl/blog/customer-acquisition-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Acquisition", url: "https://fotz.pl/blog/customer-acquisition-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Customer Acquisition", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Customer Acquisition — co to jest i jak liczyć CAC?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Customer acquisition to systematyczny proces pozyskiwania nowych klientów.
            Poznaj jak obliczać CAC, 8 kanałów akwizycji i jak budować efektywny lejek pozyskiwania klientów.
          </p>
        </div>
      </section>

      {/* CAC */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest CAC i jak go obliczyć?</h2>
            <p className="text-lg text-slate-700 mb-6">
              <strong>CAC (Customer Acquisition Cost)</strong> to jeden z najważniejszych wskaźników zdrowia biznesu.
              Informuje ile kosztuje pozyskanie jednego nowego klienta, uwzględniając wszystkie wydatki
              na marketing i sprzedaż.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
              <p className="font-semibold text-blue-900 mb-3 text-lg">Wzór na CAC:</p>
              <p className="font-mono text-xl bg-white p-4 rounded-lg border border-blue-200">
                CAC = (Wydatki marketing + Wydatki sprzedaż) ÷ Liczba nowych klientów
              </p>
              <p className="text-blue-700 text-sm mt-3">
                Przykład: 50 000 PLN na marketing + 30 000 PLN na sprzedaż = 80 000 PLN, 200 nowych klientów → CAC = 400 PLN
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { wskaźnik: "LTV:CAC = 3:1", opis: "Zdrowy biznes — klient przynosi 3× więcej niż kosztuje pozyskanie" },
                { wskaźnik: "LTV:CAC poniżej 1:1", opis: "Czerwona flaga — tracisz pieniądze na każdym kliencie" },
                { wskaźnik: "Payback period", opis: "Ile miesięcy zajmuje odrobienie CAC? Zdrowe: poniżej 12 miesięcy" },
              ].map((k, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="font-bold text-slate-900 mb-1">{k.wskaźnik}</p>
                  <p className="text-slate-600 text-sm">{k.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kanały */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 głównych kanałów pozyskiwania klientów</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kanał</th>
                    <th className="p-3 text-left">Model</th>
                    <th className="p-3 text-left">CAC</th>
                    <th className="p-3 text-left">Skala</th>
                    <th className="p-3 text-left">Czas do efektu</th>
                  </tr>
                </thead>
                <tbody>
                  {acquisitionChannels.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kanał}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.model}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cac}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.skala}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.czas_do_efektu}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Lejek */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Lejek akwizycji klientów — 4 etapy</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {acquisitionFunnel.map((stage, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900">{stage.etap}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{stage.cel}</p>
                  <div className="space-y-1 mb-3">
                    {stage.metryki.map((m, j) => (
                      <span key={j} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded mr-1">{m}</span>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500">Kanały: {stage.kanały}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — customer acquisition</h2>
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

      <RelatedArticles currentArticleId="customer-acquisition-co-to" />
      <ContactSection />
    </Layout>
  );
}
