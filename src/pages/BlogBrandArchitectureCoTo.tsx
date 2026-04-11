import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest architektura marki?",
    answer:
      "Architektura marki (brand architecture) to sposób organizacji i hierarchii marek w portfelu firmy — jak relacje między marką korporacyjną, markami produktowymi i submarkami są zdefiniowane i komunikowane. Określa kiedy używać jednej spójnej marki głównej, kiedy tworzyć odrębne marki produktowe i jak poszczególne marki wzajemnie się wspierają.",
  },
  {
    question: "Jakie są główne modele architektury marki?",
    answer:
      "Trzy główne modele to: Branded House (jeden dom, jedna marka) — jedna silna marka korporacyjna dla wszystkich produktów, jak Apple czy Virgin; House of Brands (dom marek) — portfolio niezależnych marek bez widocznego związku z korporacją, jak Procter & Gamble (Ariel, Pampers, Gillette); oraz Endorsed Brands — hybryda, gdzie submarki mają własne tożsamości ale są powiązane z marką matką.",
  },
  {
    question: "Kiedy stosować model Branded House?",
    answer:
      "Branded House jest optymalny gdy: marka korporacyjna jest już silna i rozpoznawalna, produkty mają podobną grupę docelową i wartości, firma chce efektu halo (sukces jednego produktu wzmacnia całe portfolio), budżet marketingowy jest ograniczony (jedna marka do budowania). Ryzyko: porażka jednego produktu może zaszkodzić całemu portfolio.",
  },
  {
    question: "Kiedy stosować model House of Brands?",
    answer:
      "House of Brands jest optymalny gdy: firma działa w różnych segmentach cenowych jednocześnie (nie chcesz, by tania marka osłabiała premium), produkty targetują zupełnie różne grupy docelowe i wartości, firma weszła na rynek przez akwizycję silnych lokalnych marek, lub gdy istnieje ryzyko kanibalizacji między markami.",
  },
  {
    question: "Co to jest submarka i co to jest brand extension?",
    answer:
      "Submarka to marka zależna od marki głównej, zachowująca połączenie z nią (np. Apple Watch, Apple Music — 'Apple' jako qualifier). Brand extension to rozszerzenie istniejącej marki na nową kategorię produktową (np. Virgin Airlines → Virgin Money → Virgin Galactic). Oba podejścia korzystają z kapitału istniejącej marki ale wiążą się z ryzykiem rozmycia jej znaczenia.",
  },
];

const architectureModels = [
  {
    model: "Branded House",
    opis: "Jedna dominująca marka korporacyjna dla wszystkich produktów i usług. Produkty mogą mieć deskryptory (Apple MacBook, Apple iPhone) ale marka główna dominuje.",
    przykłady: "Apple, Virgin, Google / Alphabet, FedEx, Amazon",
    zalety: "Efekt halo, jeden budżet marketingowy, łatwa wprowadzanie nowych produktów, silna pozycja korporacyjna",
    wady: "Ryzyko zakażenia (brand contamination), trudność targetowania różnych segmentów",
    kiedy: "Silna marka korporacyjna, podobne produkty, ograniczony budżet",
  },
  {
    model: "House of Brands",
    opis: "Portfolio niezależnych marek bez widocznego powiązania z marką korporacyjną. Konsumenci często nie wiedzą, że produkty należą do tej samej firmy.",
    przykłady: "P&G (Pampers, Ariel, Gillette), Unilever (Dove, Axe, Hellmann's), LVMH (Louis Vuitton, Moët, Dior)",
    zalety: "Niezależne pozycjonowanie, różne segmenty cenowe, brak ryzyka zakażenia między markami",
    wady: "Bardzo wysokie koszty marketingowe, trudność budowania synergii, duplikacja zasobów",
    kiedy: "FMCG, różne segmenty i grupy docelowe, portfolio po akwizycjach",
  },
  {
    model: "Endorsed Brands",
    opis: "Hybryda: submarki mają własne tożsamości ale są poparte przez markę główną ('by [Marka Główna]' lub logo endorsera).",
    przykłady: "Marriott International (Westin by Marriott, Ritz-Carlton by Marriott), Nestlé (KitKat by Nestlé)",
    zalety: "Balans: niezależność submarek z wiarygodnością marki matki, łatwiejsze wejście na nowe rynki",
    wady: "Złożoność zarządzania, ryzyko rozmycia tożsamości",
    kiedy: "Ekspansja na nowe segmenty, akwizycje silnych lokalnych marek",
  },
  {
    model: "Hybrid Architecture",
    opis: "Połączenie elementów różnych modeli w zależności od kategorii. Większość dużych korporacji stosuje hybrydę.",
    przykłady: "Microsoft (Azure, Xbox mają własne identyfikacje; Surface silnie 'by Microsoft')",
    zalety: "Elastyczność, dopasowanie do specyfiki poszczególnych kategorii",
    wady: "Ryzyko niespójności, wymaga jasnych zasad i zarządzania",
    kiedy: "Duże, zdywersyfikowane korporacje z historycznie różnymi markami",
  },
];

const brandPortfolioDecisions = [
  { decyzja: "Brand Extension", opis: "Użycie istniejącej marki w nowej kategorii", przykład: "Google Search → Google Maps → Google Cloud", ryzyko: "Rozmycie tożsamości marki" },
  { decyzja: "Line Extension", opis: "Rozszerzenie linii w tej samej kategorii", przykład: "Coca-Cola → Coca-Cola Zero → Coca-Cola Light", ryzyko: "Kanibalizacja" },
  { decyzja: "New Brand", opis: "Stworzenie nowej, niezależnej marki", przykład: "Toyota → Lexus (premium segment)", ryzyko: "Wysoki koszt budowania od zera" },
  { decyzja: "Co-Branding", opis: "Połączenie dwóch marek na jednym produkcie", przykład: "Nike + Apple = Nike+", ryzyko: "Zależność od partnera" },
  { decyzja: "Acquisition & Integration", opis: "Przejęcie i integracja lub utrzymanie odrębności marki", przykład: "Facebook → Instagram (zachowany), WhatsApp (zachowany)", ryzyko: "Utrata wartości przejętej marki" },
];

export default function BlogBrandArchitectureCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Architektura marki — co to jest? Brand architecture i modele (Branded House vs. House of Brands)"
        description="Architektura marki — definicja, 4 modele (Branded House, House of Brands, Endorsed, Hybrid), decyzje portfelowe i przykłady Apple, P&G, LVMH. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/architektura-marki-co-to"
      />
      <ArticleSchema
        title="Architektura marki — co to jest i jak wybrać model?"
        description="Kompletny przewodnik po architekturze marki: 4 modele (Branded House, House of Brands, Endorsed, Hybrid), decyzje portfelowe i przykłady."
        url="https://fotz.pl/blog/architektura-marki-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Architektura Marki", url: "https://fotz.pl/blog/architektura-marki-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Architektura Marki" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Architektura marki — co to jest i jak wybrać model?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Architektura marki decyduje jak Twoje marki wzajemnie się wspierają lub izolują.
            Poznaj 4 modele (Branded House, House of Brands, Endorsed, Hybrid) i jak wybrać właściwy.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest architektura marki?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Architektura marki</strong> to strategiczny framework definiujący jak firma organizuje
              swoje marki — jaka jest hierarchia między marką korporacyjną, markami produktowymi
              i submarkami, jak się do siebie odnoszą i jak są komunikowane klientom.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Właściwa architektura marki pomaga: redukować koszty marketingowe przez synergię,
              unikać kanibalizacji między produktami, jasno komunikować pozycjonowanie każdej
              marki i zarządzać ryzykiem reputacyjnym między częściami portfolio.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 4 modele */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 główne modele architektury marki</h2>
            <div className="space-y-6">
              {architectureModels.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-xl mb-2">{m.model}</h3>
                  <p className="text-slate-600 mb-3">{m.opis}</p>
                  <div className="bg-slate-50 rounded p-3 mb-3">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Przykłady:</p>
                    <p className="text-slate-700 text-sm">{m.przykłady}</p>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{m.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Wady:</p>
                      <p className="text-red-800">{m.wady}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy stosować:</p>
                      <p className="text-blue-800">{m.kiedy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Decyzje portfelowe */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 decyzji zarządzania portfelem marek</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Decyzja</th>
                    <th className="p-3 text-left">Opis</th>
                    <th className="p-3 text-left">Przykład</th>
                    <th className="p-3 text-left">Ryzyko</th>
                  </tr>
                </thead>
                <tbody>
                  {brandPortfolioDecisions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.decyzja}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.przykład}</td>
                      <td className="p-3 text-red-600 text-sm">{row.ryzyko}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — architektura marki</h2>
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
