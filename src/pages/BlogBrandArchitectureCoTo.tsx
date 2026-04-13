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
      "Architektura marki (brand architecture) to system organizowania i strukturyzowania portfolio marek firmy — jak marki są ze sobą powiązane, jak się hierarchicznie układają i jak są prezentowane klientom. Odpowiada na pytania: Jak nazywamy nasze produkty? Czy budujemy jedną silną markę czy wiele? Jak parent brand wspiera sub-brands? Dobra architektura marki upraszcza portfolio, zwiększa brand equity i ułatwia rozszerzenia marki.",
  },
  {
    question: "Jakie są modele architektury marki?",
    answer:
      "Trzy główne modele: Branded House (Monolithic) — jedna dominująca marka parasolowa, wszystkie produkty pod jej szyldem. Przykłady: Apple (iPhone, MacBook, iPad — wszystko jest Apple), FedEx (FedEx Express, FedEx Ground). House of Brands (Pluralistic) — portfolio niezależnych marek, parent brand niewidoczny. Przykład: Procter & Gamble (Ariel, Pampers, Gilette — różne marki). Endorsed Brand (Hybrid) — sub-brands z widocznym wsparciem parent brand. Przykład: Marriott Hotels (Courtyard by Marriott, Ritz-Carlton by Marriott).",
  },
  {
    question: "Kiedy warto stosować Branded House a kiedy House of Brands?",
    answer:
      "Branded House sprawdza się gdy: marka główna ma silny equity, produkty skierowane do podobnych segmentów, chcesz efektu halo (sukces jednego produktu wzmacnia resztę), ograniczone zasoby marketingowe. House of Brands sprawdza się gdy: produkty skierowane do bardzo różnych segmentów, chcesz uniknąć kanibalizacji, przejąłeś markę z silnym equity (nie chcesz jej gasić), ryzyko reputacyjne — problem z jedną marką nie infekuje pozostałych.",
  },
  {
    question: "Co to jest brand extension i brand stretching?",
    answer:
      "Brand extension — rozszerzenie marki na nowy produkt w powiązanej kategorii. Przykład: Apple iPhone → Apple Watch → Apple TV. Brand stretching — rozszerzenie na kategorię odległą od core. Przykład: Virgin (muzyka → lotnictwo → telekomunikacja → fitness). Brand extension jest stosunkowo bezpieczny gdy kategorie są powiązane. Brand stretching niesie ryzyko rozmycia marki (brand dilution) — marka traci wyrazistość gdy pojawia się w zbyt wielu kontekstach.",
  },
  {
    question: "Jak zmienić architekturę marki po przejęciu firmy?",
    answer:
      "Po przejęciu masz 4 opcje: Absorb (wchłonięcie) — marka przejętej firmy znika, wszystko przechodzi pod brand acquirora. Endorsed — przejęta marka żyje, ale z widocznym wsparciem acquirora ('Slack by Salesforce'). Co-brand — obie marki równorzędne ('eBay PayPal'). Independent — przejęta marka żyje całkowicie niezależnie (Google zachowuje YouTube jako odrębną markę). Decyzja zależy od equity obu marek, segmentów i celów strategicznych.",
  },
];

const brandArchModels = [
  {
    model: "Branded House (Monolithic)",
    opis: "Jedna dominująca marka parasolowa — wszystkie produkty i usługi pod jej szyldem",
    przykłady: "Apple (iPhone, Mac, iPad, Watch), FedEx, Virgin (historycznie), Google",
    kiedy: "Silna marka główna, podobne segmenty, ograniczone zasoby, chęć compound equity",
    zalety: "Efektywność marketingowa, halo effect między produktami, silny brand equity",
    wady: "Jeden kryzys infekuje całe portfolio, trudno targetować różne segmenty",
    hierarchia: "Parent Brand → Product Lines → Features",
  },
  {
    model: "House of Brands (Pluralistic)",
    opis: "Portfolio niezależnych marek — parent brand niewidoczny lub w tle",
    przykłady: "Procter & Gamble (Ariel, Pampers, Gillette, Head & Shoulders), Unilever, LVMH",
    kiedy: "Różne segmenty/rynki, ryzyko kanibalizacji, przejęte marki z silnym equity",
    zalety: "Izolacja ryzyka, targetowanie różnych segmentów, elastyczność portfolio",
    wady: "Bardzo drogie (każda marka wymaga osobnego budżetu), rozproszony equity",
    hierarchia: "Corporate Brand (niewidoczny) → Brand 1, Brand 2, Brand 3 (niezależne)",
  },
  {
    model: "Endorsed Brand (Hybrid)",
    opis: "Sub-brands z widocznym endorsementem parent brand",
    przykłady: "Marriott (Courtyard by Marriott, Ritz-Carlton), Nestlé (KitKat by Nestlé), Kellogg's",
    kiedy: "Sub-brands mają własne equity, ale parent brand dodaje wiarygodność",
    zalety: "Balans między niezależnością a wsparciem, flexibility przy ekspansji",
    wady: "Skomplikowana komunikacja, ryzyko sprzecznych pozycjonowań",
    hierarchia: "Parent Brand (endorser) → Sub-Brand 1 by Parent, Sub-Brand 2 by Parent",
  },
  {
    model: "Sub-brand",
    opis: "Odrębna identyfikacja w ramach parent brand — współistnienie dwóch poziomów",
    przykłady: "Amazon Prime (Amazon), PlayStation (Sony), iPad Pro (Apple), Galaxy S (Samsung)",
    kiedy: "Wyróżnienie specyficznego segmentu lub funkcji w ramach głównej marki",
    zalety: "Parent brand wspiera launch, sub-brand może targetować inny segment",
    wady: "Ryzyko fragmentacji, wymaga zarządzania hierarchią nazw",
    hierarchia: "Parent Brand → Sub-Brand (wyróżniony) → Features",
  },
];

const brandExtensionExamples = [
  { firma: "Apple", core: "Komputery osobiste", rozszerzenie: "iPhone → iPad → Watch → TV → Vision Pro", ocena: "Skuteczne — spójna kategoria 'personal technology'" },
  { firma: "Nike", core: "Obuwie sportowe", rozszerzenie: "Odzież → Sprzęt → Nike+/App → NRC/NTC", ocena: "Skuteczne — sports performance jako unifying theme" },
  { firma: "Amazon", core: "E-commerce", rozszerzenie: "AWS → Kindle → Alexa → Prime Video → Pharmacy", ocena: "Skuteczne — leverage of scale, ale czy to jedna marka?" },
  { firma: "Virgin", core: "Muzyka (Virgin Records)", rozszerzenie: "Lotnictwo → Telekomunikacja → Finance → Fitness → Galaktyka", ocena: "Mixed — Virgin brand utracił wyrazistość przez zbyt szeroki stretching" },
];

export default function BlogBrandArchitectureCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Architektura Marki — co to jest? Brand architecture modele i przykłady"
        description="Architektura marki — definicja, 4 modele (Branded House, House of Brands, Endorsed Brand, Sub-brand), brand extension i jak zarządzać portfolio marek. Przewodnik."
        canonicalUrl="https://fotz.pl/blog/architektura-marki-co-to"

        keywords="Architektura Marki co to jest, Architektura Marki definicja, czym jest Architektura Marki, Architektura Marki w marketingu, Architektura Marki przykłady, jak działa Architektura Marki, Architektura Marki strategia"
      />
      <ArticleSchema
        title="Architektura Marki — co to jest i jak zarządzać portfolio marek?"
        description="Kompletny przewodnik po architekturze marki: 4 modele (Branded House vs House of Brands vs Endorsed vs Sub-brand), brand extension i przykłady firm."
        url="https://fotz.pl/blog/architektura-marki-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Architektura Marki", url: "https://fotz.pl/blog/architektura-marki-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Architektura Marki" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Architektura Marki — co to jest i jak zarządzać portfolio marek?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Architektura marki strukturyzuje portfolio produktów i marek firmy.
            Poznaj 4 modele: Branded House, House of Brands, Endorsed i Sub-brand — z przykładami globalnych firm.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest architektura marki?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Architektura marki</strong> definiuje jak firma organizuje i prezentuje
              swoje portfolio marek i produktów. Czy buduje jedną silną markę parasolową
              (jak Apple), czy wiele niezależnych marek (jak Procter &amp; Gamble)?
              Ta strategiczna decyzja determinuje budżety marketingowe, strategie ekspansji
              i odporność na kryzysy.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Nie ma jednego "właściwego" modelu — każdy ma wady i zalety.
              Wybór zależy od: istniejącego portfolio, segmentów docelowych, zasobów,
              planów akwizycji i tolerancji ryzyka.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "4 modele", opis: "architektury marki — Branded House, House of Brands, Endorsed Brand i Sub-brand" },
                { stat: "Brand equity", opis: "to wartość którą marka dodaje do produktu — dobra architektura maksymalizuje compound equity" },
                { stat: "Halo effect", opis: "silna marka parasolowa przenosi swoje equity na nowe produkty — wielka zaleta Branded House" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 modele architektury marki</h2>
            <div className="space-y-5">
              {brandArchModels.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{m.model}</h3>
                  <p className="text-slate-600 mb-2">{m.opis}</p>
                  <p className="text-xs text-blue-600 mb-3 font-mono">Hierarchia: {m.hierarchia}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{m.zalety}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Wady:</p>
                      <p className="text-red-800">{m.wady}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 text-xs text-slate-500">
                    <span><strong>Przykłady:</strong> {m.przykłady}</span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Brand Extension — przykłady firm</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Firma</th>
                    <th className="p-3 text-left">Core brand</th>
                    <th className="p-3 text-left">Rozszerzenia</th>
                    <th className="p-3 text-left">Ocena</th>
                  </tr>
                </thead>
                <tbody>
                  {brandExtensionExamples.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-blue-700">{row.firma}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.core}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.rozszerzenie}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.ocena}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — architektura marki</h2>
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

      <ContactSection />
    </Layout>
  );
}
