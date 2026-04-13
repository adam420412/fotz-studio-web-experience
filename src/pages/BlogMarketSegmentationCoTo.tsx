import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest segmentacja rynku?",
    answer:
      "Segmentacja rynku to proces podziału heterogenicznego rynku na jednorodne grupy klientów (segmenty) o podobnych potrzebach, cechach lub zachowaniach zakupowych. Celem jest identyfikacja segmentów, do których firma może dotrzeć efektywniej i skuteczniej niż konkurencja. Segmentacja pozwala na personalizację oferty, komunikacji i strategii cenowej — zamiast jednej oferty dla wszystkich tworzy się dopasowane propozycje dla konkretnych grup.",
  },
  {
    question: "Jakie są rodzaje segmentacji rynku?",
    answer:
      "Cztery główne typy segmentacji: Demograficzna (wiek, płeć, dochód, wykształcenie, status rodzinny), Geograficzna (kraj, region, miasto vs. wieś, klimat, gęstość zaludnienia), Psychograficzna (styl życia, wartości, osobowość, postawy — np. VALS framework), Behawioralna (zachowanie zakupowe: okazja, korzyści poszukiwane, status użytkownika, lojalność, rate of use). Dla B2B dodajemy: Firmograficzną (branża, wielkość firmy, przychody) i Technograficzną (stack technologiczny).",
  },
  {
    question: "Czym różni się segmentacja od targetowania?",
    answer:
      "Segmentacja (Segmentation) — identyfikacja i opis różnych grup w rynku. Targetowanie (Targeting) — wybór konkretnych segmentów które firma chce obsługiwać. Pozycjonowanie (Positioning) — jak firma chce być postrzegana w umysłach wybranego segmentu. Razem tworzą model STP (Segmentation-Targeting-Positioning) — fundament strategii marketingowej. Segmentacja to mapa rynku, targetowanie to wybór celu, pozycjonowanie to jak do niego dotrzeć.",
  },
  {
    question: "Jakie kryteria decydują o wyborze segmentu docelowego?",
    answer:
      "Pięć kryteriów atrakcyjności segmentu: Measurable (mierzalny — czy możemy zmierzyć rozmiar i nabywczą siłę?), Substantial (znaczący — czy jest wystarczająco duży i rentowny?), Accessible (dostępny — czy możemy do niego dotrzeć i obsłużyć?), Differentiable (różniący się — czy reaguje inaczej na marketing mix?), Actionable (wykonalny — czy możemy stworzyć skuteczne programy?). Segmenty niespełniające tych kryteriów nie powinny być targetowane.",
  },
  {
    question: "Co to jest persona a czym jest segment rynku?",
    answer:
      "Segment rynku to statystyczna, agregowana kategoria klientów o podobnych cechach — np. 'kobiety 25-35, dochód 5-10k, aktywne zawodowo w dużym mieście'. Persona (buyer persona) to fikcyjny, szczegółowy reprezentant segmentu — np. 'Marta, 31 lat, marketingowiec w Warszawie, mama 2-latka, ceni work-life balance'. Persony humanizują segmenty, ułatwiają empatię zespołu i komunikację strategii. Segment = dane, persona = człowiek.",
  },
];

const segmentationTypes = [
  {
    typ: "Demograficzna",
    zmienne: "Wiek, płeć, dochód, wykształcenie, zawód, status rodzinny, narodowość",
    zastosowanie: "B2C — FMCG, media, ubezpieczenia, edukacja",
    przykład: "Netflix segmentuje po wieku (Young Adults vs. Families) i dochodzie (Basic vs. Premium)",
    zalety: "Łatwo mierzalna, dużo danych dostępnych, intuitywna",
    wady: "Zbyt upraszcza — 25-latek i 60-latek mogą mieć te same preferencje",
  },
  {
    typ: "Geograficzna",
    zmienne: "Kraj, region, miasto/wieś, klimat, kultura, język, gęstość zaludnienia",
    zastosowanie: "Sieci restauracji, retail, usługi lokalne, e-commerce z dostawą",
    przykład: "McDonald's: różne menu w Polsce vs. Indiach vs. USA — lokalna adaptacja",
    zalety: "Oczywiste dla lokalnych biznesów, łatwa do zaimplementowania",
    wady: "Ignoruje różnorodność wewnątrz geografii — nie wszyscy w Warszawie są tacy sami",
  },
  {
    typ: "Psychograficzna",
    zmienne: "Styl życia, wartości, osobowość, postawy, opinie, zainteresowania (AIO)",
    zastosowanie: "Lifestyle brands, healthy food, sustainable fashion, luxury",
    przykład: "Patagonia targetuje ekologicznych aktywistów gotowych płacić premium za sustainability",
    zalety: "Głębsze zrozumienie motivacji zakupowych niż demografia",
    wady: "Trudna do zmierzenia, subiektywna, wymaga badań jakościowych",
  },
  {
    typ: "Behawioralna",
    zmienne: "Okazja zakupu, poszukiwane korzyści, status użytkownika, lojalność, usage rate",
    zastosowanie: "E-commerce, SaaS, loyalty programs, retargeting",
    przykład: "Amazon segmentuje Prime users (lojalność i frequency) vs. occasional buyers",
    zalety: "Bezpośrednio powiązana z zachowaniem zakupowym — najlepszy predictor",
    wady: "Wymaga danych historycznych — trudna dla nowych firm",
  },
  {
    typ: "Firmograficzna (B2B)",
    zmienne: "Branża (SIC/NAICS), rozmiar firmy (SMB/Mid/Enterprise), przychody, lokalizacja, dojrzałość",
    zastosowanie: "SaaS B2B, usługi profesjonalne, dostawcy enterprise",
    przykład: "Salesforce: SMB (Essentials), Mid-market (Professional), Enterprise — 3 odrębne produkty",
    zalety: "Łatwa do implementacji w CRM, silna korelacja z ACV i cyklem sprzedaży",
    wady: "Nie uwzględnia różnic wewnątrz firm (różne działy mają różne potrzeby)",
  },
];

const stpModel = [
  {
    faza: "S — Segmentation",
    pytanie: "Jak podzielić rynek na grupy?",
    działania: "Zbierz dane o klientach, przeprowadź badania, zidentyfikuj zmienne segmentacji, analiza cluster/k-means",
    output: "Mapa segmentów rynku z opisem każdego",
  },
  {
    faza: "T — Targeting",
    pytanie: "Który segment obsługiwać?",
    działania: "Oceń segmenty według 5 kryteriów (Measurable, Substantial, Accessible, Differentiable, Actionable)",
    output: "Wybrane segmenty docelowe z uzasadnieniem",
  },
  {
    faza: "P — Positioning",
    pytanie: "Jak być postrzeganym w tym segmencie?",
    działania: "Positioning statement, value proposition dla segmentu, differentiation vs. competitors",
    output: "Positioning statement, messaging framework, brand positioning map",
  },
];

export default function BlogMarketSegmentationCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Segmentacja Rynku — co to jest? Rodzaje segmentacji i model STP"
        description="Segmentacja rynku — definicja, 5 rodzajów (demograficzna, geograficzna, psychograficzna, behawioralna, firmograficzna), model STP i kryteria wyboru…"
        canonicalUrl="https://fotz.pl/blog/segmentacja-rynku-co-to"

        keywords="Segmentacja Rynku co to jest, Segmentacja Rynku definicja, czym jest Segmentacja Rynku, Segmentacja Rynku przykłady, jak działa Segmentacja Rynku, Segmentacja Rynku znaczenie, Segmentacja Rynku przewodnik"

        canonical="https://fotz.pl/blog/segmentacja-rynku-co-to"
      />
      <ArticleSchema
        title="Segmentacja Rynku — co to jest i jak stosować model STP?"
        description="Kompletny przewodnik po segmentacji rynku: 5 typów segmentacji, model STP (Segmentation-Targeting-Positioning) i kryteria oceny atrakcyjności segmentu."
        url="https://fotz.pl/blog/segmentacja-rynku-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Segmentacja Rynku", url: "https://fotz.pl/blog/segmentacja-rynku-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Segmentacja Rynku" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Segmentacja Rynku — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Segmentacja rynku dzieli heterogenicznych klientów na jednorodne grupy.
            Poznaj 5 typów segmentacji, model STP i jak wybrać właściwy segment docelowy.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest segmentacja rynku?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Segmentacja rynku</strong> to podział niejednorodnej populacji klientów na
              grupy (segmenty) o podobnych potrzebach, cechach i zachowaniach.
              Fundamentalna zasada: nie możesz być wszystkim dla wszystkich — lepiej być
              perfekcyjnym dla wybranej grupy.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy które nie segmentują rynku ryzykują "rozmyty" marketing — komunikaty
              zbyt ogólne by rezonować z kimkolwiek konkretnym. Segmentacja pozwala
              mówić językiem konkretnego klienta o jego konkretnych problemach.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5 typów", opis: "segmentacji — demograficzna, geograficzna, psychograficzna, behawioralna i firmograficzna (B2B)" },
                { stat: "STP", opis: "model Segmentation-Targeting-Positioning — fundament każdej strategii marketingowej" },
                { stat: "5 kryteriów", opis: "oceny atrakcyjności segmentu: Measurable, Substantial, Accessible, Differentiable, Actionable" },
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 rodzajów segmentacji rynku</h2>
            <div className="space-y-5">
              {segmentationTypes.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{s.typ}</h3>
                  <p className="text-slate-600 text-sm mb-3">Zmienne: {s.zmienne}</p>
                  <p className="text-xs text-blue-600 mb-3 italic">Przykład: {s.przykład}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Zastosowanie:</p>
                      <p className="text-slate-700">{s.zastosowanie}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{s.zalety}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Ograniczenia:</p>
                      <p className="text-orange-800">{s.wady}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Model STP — Segmentation, Targeting, Positioning</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {stpModel.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 text-lg mb-2">{p.faza}</h3>
                  <p className="text-slate-600 text-sm mb-2 italic">{p.pytanie}</p>
                  <p className="text-slate-600 text-sm mb-3">{p.działania}</p>
                  <div className="bg-blue-50 rounded p-2">
                    <p className="text-xs font-semibold text-blue-600 mb-1">Output:</p>
                    <p className="text-blue-800 text-xs">{p.output}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — segmentacja rynku</h2>
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

      <RelatedArticles currentArticleId="segmentacja-rynku-co-to" />
      <ContactSection />
    </Layout>
  );
}
