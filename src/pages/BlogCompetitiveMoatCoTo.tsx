import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest economic moat (fosa ekonomiczna)?",
    answer:
      "Economic moat (fosa ekonomiczna) to trwała przewaga konkurencyjna chroniąca firmę przed utratą rynku i rentowności przez długi czas — analogia do średniowiecznej fosy chroniącej zamek przed napastnikami. Pojęcie spopularyzowane przez Warrena Buffetta: 'The most important thing [in investing] is figuring out how big a moat there is around the business.' Firmy z szerokim moatem mogą chronić swoje zyski przez dekady. Wąski lub brak moatu = firma traci na rywalizacji cenowej.",
  },
  {
    question: "Jakie są główne typy competitive moat?",
    answer:
      "Morningstar identyfikuje 5 głównych źródeł moatu: 1) Network Effects — wartość rośnie z liczbą użytkowników (Facebook, Visa), 2) Switching Costs — koszt zmiany dostawcy jest wysoki (Salesforce, SAP), 3) Cost Advantage — tańsze wytwarzanie niż konkurencja (Costco, Amazon fulfillment), 4) Intangible Assets — marki, patenty, licencje, regulacyjne bariery wejścia (Coca-Cola marka, pharma patenty), 5) Efficient Scale — rynek obsługiwany przez jedną lub kilka firm nie zachęca do wejścia nowych (lokalne narzędzia, pipelines).",
  },
  {
    question: "Jak ocenić szerokość moatu?",
    answer:
      "Morningstar klasyfikuje moaty jako: Wide (szeroki) — firma może chronić ROI powyżej kosztu kapitału przez 20+ lat; Narrow (wąski) — może bronić przez 10 lat; No moat — nie może utrzymać nadmiernych zysków. Testem szerokości moatu są: stabilność lub wzrost marży operacyjnej w czasie, ROIC (Return on Invested Capital) konsekwentnie powyżej WACC (kosztu kapitału), zdolność do podnoszenia cen bez utraty klientów, historia odpierania ataków konkurencji.",
  },
  {
    question: "Czym moat różni się od przewagi pierwszego gracza (first-mover advantage)?",
    answer:
      "First-mover advantage to tymczasowa przewaga wynikająca z bycia pierwszym na rynku — często nie jest trwała. Wiele first-movers przegrało z later-movers którzy lepiej wykonali (MySpace vs Facebook, AltaVista vs Google). Moat to trwała, strukturalna przewaga która jest trudna do skopiowania przez konkurencję niezależnie od czasu wejścia. First-mover może pomagać w budowaniu moatu (efekty sieciowe budowane przez wczesnych adopters) ale sam w sobie nie jest moatem.",
  },
  {
    question: "Jak technologia wpływa na moat?",
    answer:
      "Technologia jest jednocześnie źródłem moatu i zagrożeniem dla niego. AI i cloud computing obniżają bariery wejścia do wielu branż — redukcja cost advantage i intangibles. Ale technologia też tworzy nowe moaty: data network effects (algorytmy poprawiane przez dane użytkowników), platform moats (API ekosystemy, marketplace integrations), switching costs przez nowe kategorie uzależnienia (AI asystenci z historią, CRM z ML predictions). Firmy muszą stale inwestować w moat bo technologia go eroduje.",
  },
];

const moatTypes = [
  {
    typ: "Network Effects",
    opis: "Wartość produktu rośnie z liczbą użytkowników — każdy nowy uczestnik zwiększa wartość dla wszystkich",
    przykłady: ["Facebook (social graph)", "Visa/Mastercard (payment rails)", "LinkedIn (professional network)", "Marketplace'y (Airbnb, Uber)"],
    siła: "Bardzo silna — szczególnie winner-takes-all w social",
    zagrożenie: "Nowe sieci mogą rosnąć szybciej przy zmianie zachowań (TikTok vs Facebook wśród młodych)",
  },
  {
    typ: "Switching Costs",
    opis: "Koszt zmiany dostawcy jest tak wysoki że klienci pozostają nawet niezadowoleni",
    przykłady: ["Salesforce (CRM enterprise)", "SAP (ERP)", "Adobe Creative Cloud", "Oracle Database"],
    siła: "Silna w enterprise — słabsza w consumer (łatwiej zmienić aplikację muzyczną)",
    zagrożenie: "Regulacje (right to data portability), open source alternatywy, nowi gracze płacący za migrację",
  },
  {
    typ: "Cost Advantage",
    opis: "Tańsze wytwarzanie lub dostarczanie produktu/usługi niż konkurencja — strukturalnie, nie tylko efektywność",
    przykłady: ["Amazon (fulfilment sieć)", "Costco (buying power, no-frills)", "GEICO (direct insurance, no agents)", "Ryanair (secondary airports)"],
    siła: "Silna jeśli wynika ze skali lub proprietary process, nie tylko management",
    zagrożenie: "Innowacja technologiczna może zbliżyć koszty (automation), nowe modele dystrybucji",
  },
  {
    typ: "Intangible Assets",
    opis: "Marki, patenty, licencje, regulacyjne bariery, know-how które trudno skopiować",
    przykłady: ["Coca-Cola (marka premium)", "Pharma patenty (Pfizer, Novartis)", "Rating agencies (Moody's, S&P)", "Airport slots (Heathrow)"],
    siła: "Bardzo silna gdy chroniona przez prawo lub regulacje",
    zagrożenie: "Wygasanie patentów, zmiana preferencji konsumentów, regulacyjne zmiany",
  },
  {
    typ: "Efficient Scale",
    opis: "Rynek wielkości obsługiwanej przez jedną lub kilka firm — nowy gracz nie może osiągnąć rentowności",
    przykłady: ["Lokalne sieci infrastruktury", "Gazociągi i pipelines", "Lokalne media monopole", "Niszowe marketplace'y"],
    siła: "Silna w regulowanych infrastrukturach i niszach",
    zagrożenie: "Zmiana regulacji, disruption technologiczny (streaming vs kino, OTT vs cable TV)",
  },
];

const moatAssessment = [
  { wskaźnik: "ROIC vs WACC", opis: "Return on Invested Capital powyżej kosztu kapitału przez 10+ lat = wide moat", jak: "ROIC ponad 15% konsekwentnie = sygnał moatu" },
  { wskaźnik: "Gross Margin Stability", opis: "Marża brutto utrzymująca się lub rosnąca mimo konkurencji = pricing power", jak: "Marża nie spada gdy rynek staje się konkurencyjny" },
  { wskaźnik: "Customer Retention / NRR", opis: "Wysoka retencja klientów i Net Revenue Retention ponad 100%", jak: "NRR ponad 120% = klienci rosną z firmą — silny moat" },
  { wskaźnik: "Price Increase Tolerance", opis: "Zdolność do podnoszenia cen bez proporcjonalnej utraty klientów", jak: "10% podwyżka = mniej niż 5% odejść = silny switching cost moat" },
  { wskaźnik: "Competitive Response History", opis: "Historia odparcia ataków konkurencji i przetrwania disruption", jak: "10-15 lat dominacji mimo licznych challengers = wide moat" },
];

export default function BlogCompetitiveMoatCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Competitive Moat | Fotz Studio"
        description="Economic moat (fosa ekonomiczna) — definicja, 5 typów (network effects, switching costs, cost advantage, intangibles, efficient scale), jak oceniać i…"
        canonicalUrl="https://fotz.pl/blog/competitive-moat-co-to"

        keywords="Competitive Moat co to jest, Competitive Moat definicja, czym jest Competitive Moat, Competitive Moat przykłady, jak działa Competitive Moat, Competitive Moat znaczenie, Competitive Moat przewodnik"

        canonical="https://fotz.pl/blog/competitive-moat-co-to"
      />
      <ArticleSchema
        title="Competitive Moat — co to jest i jak budować fosę ekonomiczną?"
        description="Kompletny przewodnik po economic moat: 5 typów moatu (Morningstar framework), wskaźniki oceny szerokości i przykłady (Coca-Cola, Salesforce, Amazon)."
        url="https://fotz.pl/blog/competitive-moat-co-to"
        datePublished="2024-02-07"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Competitive Moat", url: "https://fotz.pl/blog/competitive-moat-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Competitive Moat" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Competitive Moat — co to jest i jak budować fosę ekonomiczną?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Economic moat to trwała przewaga chroniąca firmę przed konkurencją.
            Poznaj 5 typów moatu (Buffett/Morningstar), jak je oceniać i budować.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest economic moat?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Economic moat</strong> (fosa ekonomiczna) to trwała przewaga konkurencyjna
              chroniąca firmę przed erozją zysków przez konkurencję — analogia do fosy chroniącej zamek.
              Warren Buffett spopularyzował ten termin: "The most important thing is figuring out
              how big a moat there is around the business."
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy z szerokim moatem (wide moat) mogą chronić nadmierną rentowność przez 20+ lat.
              Morningstar opracowało framework 5 źródeł moatu który stał się standardem w analizie inwestycyjnej
              i strategii biznesowej.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 text-center">
              <p className="text-xl font-mono italic mb-2">"The most important thing is figuring out how big a moat there is around the business."</p>
              <p className="text-slate-400 text-sm">— Warren Buffett</p>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 typów competitive moat (Morningstar framework)</h2>
            <div className="space-y-5">
              {moatTypes.map((moat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{moat.typ}</h3>
                      <p className="text-slate-600 mb-3">{moat.opis}</p>
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-slate-500 mb-1">Przykłady:</p>
                        <div className="flex flex-wrap gap-1">
                          {moat.przykłady.map((p, j) => (
                            <span key={j} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">{p}</span>
                          ))}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs font-semibold text-green-600 mb-1">Siła moatu:</p>
                          <p className="text-green-800">{moat.siła}</p>
                        </div>
                        <div className="bg-orange-50 rounded p-2">
                          <p className="text-xs font-semibold text-orange-600 mb-1">Zagrożenie:</p>
                          <p className="text-orange-800">{moat.zagrożenie}</p>
                        </div>
                      </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak ocenić szerokość competitive moat?</h2>
            <div className="space-y-3">
              {moatAssessment.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid md:grid-cols-3 gap-3">
                  <p className="font-bold text-slate-800 text-sm">{m.wskaźnik}</p>
                  <p className="text-slate-600 text-sm">{m.opis}</p>
                  <p className="text-slate-500 text-sm italic">{m.jak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — competitive moat</h2>
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

      <RelatedArticles currentArticleId="competitive-moat-co-to" />
      <ContactSection />
    </Layout>
  );
}
