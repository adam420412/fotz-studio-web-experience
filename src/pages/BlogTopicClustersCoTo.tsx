import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są topic clusters?",
    answer:
      "Topic clusters (klastry tematyczne) to strategia organizacji treści SEO opracowana przez HubSpot, polegająca na stworzeniu jednej obszernej strony filarowej (pillar page) pokrywającej szeroki temat, z którą powiązane są liczne krótsze artykuły klastrowe (cluster content) dotyczące szczegółowych podtematów. Wewnętrzne linkowanie między nimi sygnalizuje Google głęboką ekspertyzę tematyczną.",
  },
  {
    question: "Czym jest pillar page?",
    answer:
      "Pillar page (strona filarowa) to kompleksowa, długa strona (3000–10000 słów) pokrywająca szeroki temat na wysokim poziomie. Nie wchodzi głęboko w każdy podtemat — zamiast tego linkuje do artykułów klastrowych, które szczegółowo omawiają poszczególne aspekty. Pillar page jest zoptymalizowana pod krótkie, szerokie słowo kluczowe (np. 'email marketing').",
  },
  {
    question: "Jak topic clusters wpływają na SEO?",
    answer:
      "Topic clusters poprawiają SEO przez: budowanie topical authority (autorytet tematyczny — Google widzi Cię jako eksperta w danej dziedzinie), poprawę Internal PageRank przez gęste wewnętrzne linkowanie, lepszy crawling przez spójną architekturę informacji, oraz semantic relevance — powiązane semantycznie treści wzmacniają się wzajemnie w rankingach.",
  },
  {
    question: "Ile artykułów powinien mieć klaster tematyczny?",
    answer:
      "Optymalna liczba artykułów w klastrze to 5–15 tekstów klastrowych plus jedna pillar page. Mniej niż 5 to za mało, by zademonstrować głębię tematyczną. Powyżej 20 artykułów klaster staje się trudny w zarządzaniu. Zacznij od 3–5 klastrów o najwyższym priorytecie biznesowym zamiast tworzyć wiele płytkich klastrów.",
  },
  {
    question: "Czym topic clusters różnią się od zwykłego blogowania?",
    answer:
      "Zwykłe blogowanie tworzy oddzielne, niepowiązane artykuły — Google nie widzi między nimi kontekstu. Topic clusters tworzą sieć wzajemnie powiązanych treści z jasną hierarchią (pillar + cluster). Efekt jest wykładniczy: 10 powiązanych artykułów rankuje lepiej niż 10 niezależnych artykułów o tym samym temacie.",
  },
];

const clusterStructure = [
  {
    element: "Pillar Page",
    opis: "Szeroka, kompleksowa strona na temat główny. Dotyka każdego podtematu powierzchownie i linkuje do cluster pages.",
    przykład: "'/email-marketing' — kompletny przewodnik po email marketingu",
    słowaKluczowe: "Szerokie, krótkie (1–2 słowa), wysokie volume",
    długość: "3000–10000 słów",
  },
  {
    element: "Cluster Content",
    opis: "Szczegółowe artykuły o konkretnych aspektach tematu filarowego. Linkują do pillar page i do siebie nawzajem.",
    przykład: "'/email-marketing/segmentacja-listy' — szczegółowy artykuł o segmentacji",
    słowaKluczowe: "Long-tail, specificzne (3–5 słów), niższe volume",
    długość: "1000–2500 słów",
  },
  {
    element: "Internal Links",
    opis: "Gęsta sieć linków wewnętrznych łącząca klaster: pillar linkuje do wszystkich cluster pages, cluster pages linkują do pillar i do pokrewnych cluster pages.",
    przykład: "Każdy artykuł klastrowy zawiera 3–7 linków do powiązanych stron klastra",
    słowaKluczowe: "Anchor text = target keyword linkowanej strony",
    długość: "N/A",
  },
];

const clusterBuilding = [
  {
    krok: "Wybór Tematu Filarowego",
    opis: "Temat filarowy musi być: wystarczająco szeroki na pillar page, centralny dla Twojego biznesu, z wystarczającym popytem (volume) i realnym do rankowania. Narzędzia: Ahrefs, Semrush, Google Search Console.",
  },
  {
    krok: "Mapowanie Podtematów",
    opis: "Stwórz pełną mapę tematyczną klastra. Technika: brainstorm + Google autocomplete + Ahrefs 'Also rank for' + 'People Also Ask'. Grupuj słowa kluczowe w logiczne podtematy.",
  },
  {
    krok: "Analiza Istniejącego Contentu",
    opis: "Przejrzyj czy masz już artykuły, które można zakwalifikować jako cluster content lub pillar page. Istniejący content można zreorganizować w klaster zamiast tworzyć wszystko od nowa.",
  },
  {
    krok: "Tworzenie Pillar Page",
    opis: "Napisz kompleksową pillar page. Struktura: definicja tematu, wszystkie podtematy ze wstępem i linkiem do artykułu klastrowego, FAQ, podsumowanie. Nie musisz być wyczerpujący — linkuj do depth.",
  },
  {
    krok: "Budowanie Cluster Content",
    opis: "Twórz artykuły klastrowe jeden po drugim, każdy zoptymalizowany pod konkretne long-tail keyword. Każdy powinien linkować do pillar page (jako definitywnego przewodnika) i do 2–3 pokrewnych cluster articles.",
  },
  {
    krok: "Optymalizacja Linków Wewnętrznych",
    opis: "Przejrzyj cały klaster i upewnij się, że linkowanie jest kompletne. Pillar linkuje do wszystkich cluster pages. Każda cluster page linkuje do pillar. Cluster pages linkują do siebie nawzajem gdzie sensowne.",
  },
];

export default function BlogTopicClustersCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Topic Clusters | Fotz Studio"
        description="Topic clusters i pillar pages — definicja, struktura klastra (pillar + cluster content + linki wewnętrzne), 6-krokowy proces budowania i wpływ na SEO."
        canonicalUrl="https://fotz.pl/blog/topic-clusters-co-to"

        keywords="Topic Clusters co to jest, Topic Clusters definicja, czym jest Topic Clusters, Topic Clusters w marketingu, Topic Clusters przykłady, jak działa Topic Clusters, Topic Clusters strategia"

        canonical="https://fotz.pl/blog/topic-clusters-co-to"
      />
      <ArticleSchema
        title="Topic Clusters — co to jest i jak budować klastry tematyczne?"
        description="Kompletny przewodnik po topic clusters: struktura pillar page + cluster content, 6-krokowy proces budowania i jak wpływa na SEO."
        url="https://fotz.pl/blog/topic-clusters-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Topic Clusters", url: "https://fotz.pl/blog/topic-clusters-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Topic Clusters" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Topic Clusters — co to jest i jak budować klastry tematyczne?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Topic clusters to najskuteczniejsza strategia SEO dla budowania topical authority.
            Poznaj strukturę pillar page + cluster content, 6-krokowy proces i jak zwiększyć rankingi przez architekturę treści.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym są topic clusters?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Topic clusters</strong> to model organizacji contentu opracowany przez HubSpot,
              który zastąpił podejście "jeden artykuł = jedno słowo kluczowe". Zamiast tworzenia
              oddzielnych, niepowiązanych artykułów, budujesz spójną <em>sieć powiązanych treści</em>
              z centrum (pillar page) i promieniami (cluster content).
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Google coraz bardziej premiuje <em>topical authority</em> — głębię i szerokość pokrycia
              tematu, nie tylko liczbę backlinków. Topic clusters to bezpośrednia odpowiedź na ten trend:
              sygnalizujesz algorytmom, że jesteś ekspertem w danej dziedzinie, a nie autorem jednego
              słabego artykułu.
            </p>
            <div className="bg-indigo-50 border-l-4 border-indigo-600 p-6 rounded-r-lg">
              <p className="font-semibold text-indigo-900 mb-2">Struktura Topic Cluster:</p>
              <p className="text-indigo-800 font-mono text-sm">
                PILLAR PAGE (szeroki temat)<br />
                ├── Cluster Article 1 (podtemat A)<br />
                ├── Cluster Article 2 (podtemat B)<br />
                ├── Cluster Article 3 (podtemat C)<br />
                └── Cluster Article N (podtemat N)
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Struktura */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 elementy struktury topic cluster</h2>
            <div className="space-y-5">
              {clusterStructure.map((e, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-indigo-800 text-xl mb-3">{e.element}</h3>
                  <p className="text-slate-600 mb-4">{e.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykład:</p>
                      <p className="text-slate-700">{e.przykład}</p>
                    </div>
                    <div className="bg-indigo-50 rounded p-3">
                      <p className="text-xs font-semibold text-indigo-600 mb-1">Słowa kluczowe:</p>
                      <p className="text-indigo-800">{e.słowaKluczowe}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Długość:</p>
                      <p className="text-slate-700">{e.długość}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kroków budowania topic cluster</h2>
            <div className="space-y-5">
              {clusterBuilding.map((item, i) => (
                <div key={i} className="flex gap-5 bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.krok}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — topic clusters i pillar pages</h2>
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

      <RelatedArticles currentArticleId="topic-clusters-co-to" />
      <ContactSection />
    </Layout>
  );
}
