import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest content audit?",
    answer:
      "Content audit (audyt treści) to systematyczny przegląd i ocena całego contentu opublikowanego przez organizację — blogów, stron lądowania, case studies, filmów, podcastów. Celem jest ustalenie co działa, co wymaga aktualizacji, co należy usunąć i jakie luki contentowe istnieją. Content audit jest fundamentem każdej efektywnej strategii treści.",
  },
  {
    question: "Jak często należy robić content audit?",
    answer:
      "Duży, kompleksowy content audit warto przeprowadzać raz do roku lub przy znaczącej zmianie strategii biznesowej. Mniejsze, fokusowane audyty (np. tylko blogi SEO, tylko strony produktowe) można robić co kwartał. Monitorowanie wydajności contentu powinno być procesem ciągłym przez narzędzia analityczne.",
  },
  {
    question: "Jakie decyzje można podjąć po content audicie?",
    answer:
      "Po content audicie możesz: zaktualizować i odświeżyć wartościowe, ale nieaktualne treści (content refresh), połączyć podobne artykuły w jeden silniejszy (content consolidation/canonicalization), usunąć treści niskiej jakości bez ruchu (content pruning), zidentyfikować luki w tematach (content gaps) oraz zaplanować nowe treści na podstawie danych a nie intuicji.",
  },
  {
    question: "Czym jest content pruning?",
    answer:
      "Content pruning (przycinanie treści) to świadome usuwanie lub redirectowanie stron o niskiej jakości, zduplikowanych lub niepozyskujących ruchu. Badania pokazują, że usunięcie słabych treści może zwiększyć rankingi i ruch pozostałych stron, bo Google ocenia jakość całej domeny, nie tylko pojedynczych stron.",
  },
  {
    question: "Jakie narzędzia do content auditu?",
    answer:
      "Popularne narzędzia content audit to: Screaming Frog (crawl URL), Ahrefs/Semrush (dane SEO: ruch, backlinki, rankingi), Google Search Console (rzeczywiste kliknięcia i impressions), Google Analytics (zaangażowanie, konwersje), Semrush Content Audit tool, oraz proste arkusze kalkulacyjne do tworzenia content inventory.",
  },
];

const contentAuditFramework = [
  {
    faza: "Content Inventory",
    opis: "Zebranie pełnej listy wszystkich opublikowanych treści — URL, tytuł, typ treści, data publikacji. Użyj crawlera (Screaming Frog) lub eksportu z CMS.",
    narzędzia: "Screaming Frog, Semrush Site Audit, ręczny eksport z WordPress/CMS",
  },
  {
    faza: "Zbieranie danych",
    opis: "Dla każdego URL zbierz: ruch organiczny (GSC, GA), rankingi słów kluczowych, backlinki, engagement (czas na stronie, bounce rate), konwersje i last updated date.",
    narzędzia: "Google Search Console, Ahrefs, Semrush, Google Analytics",
  },
  {
    faza: "Kategoryzacja i ocena",
    opis: "Każdy URL oceniaj wg matrycy: Ruch × Jakość. Wysoki ruch + wysoka jakość = Keep. Niski ruch + wysoka jakość = Improve/Promote. Niski ruch + niska jakość = Remove/Consolidate.",
    narzędzia: "Arkusz kalkulacyjny z scoringiem, własna matryca oceny",
  },
  {
    faza: "Action Plan",
    opis: "Każdemu URL przypisz akcję: Keep (utrzymaj), Update (odśwież), Consolidate (połącz z innym), Redirect (przekieruj), Remove (usuń). Priorytetyzuj po potencjalnym wpływie na ruch.",
    narzędzia: "Projekt w Notion/Asana, GitHub Issues, arkusz Google Sheets",
  },
  {
    faza: "Implementacja i monitoring",
    opis: "Wdrażaj zmiany — zacznij od treści o najwyższym potencjale. Monitoruj wyniki po 4–8 tygodniach. Ustaw datę następnego audytu.",
    narzędzia: "GSC, GA4, Ahrefs Rank Tracker, automatyczne alerty",
  },
];

const contentDecisions = [
  {
    akcja: "Keep & Monitor",
    kiedy: "Wysoki ruch, dobra jakość, aktualna treść",
    przykład: "Artykuł generujący 2000+ wizyt/mies. z aktualną datą",
    priorytet: "Niski",
  },
  {
    akcja: "Update & Refresh",
    kiedy: "Dobra jakość, ale treść nieaktualna lub traci ruch",
    przykład: "Poradnik z 2021 r. z przestarzałymi danymi i spadkiem o 30% ruchu",
    priorytet: "Wysoki",
  },
  {
    akcja: "Consolidate",
    kiedy: "Kilka artykułów o tym samym temacie, każdy słaby",
    przykład: "3 artykuły o email marketingu — scal w jeden kompleksowy",
    priorytet: "Średni",
  },
  {
    akcja: "Redirect (301)",
    kiedy: "Treść usunięta ale ma backlinki lub rankingi",
    przykład: "Stara strona produktu, który już nie istnieje — redirect do kategorii",
    priorytet: "Średni",
  },
  {
    akcja: "Remove (Delete)",
    kiedy: "Zero ruchu, zero backlinków, niska jakość, nienaprawialna",
    przykład: "Thin content 200-słowowy bez żadnych wizyt od roku",
    priorytet: "Średni",
  },
];

export default function BlogContentAuditCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Content Audit — co to jest? Audyt treści krok po kroku"
        description="Content audit — definicja, 5-etapowy proces (inventory, dane, ocena, action plan), decyzje Keep/Update/Remove i narzędzia. Kompletny przewodnik po audycie…"
        canonical="https://fotz.pl/blog/content-audit-co-to"

        keywords="Content Audit co to jest, Content Audit definicja, czym jest Content Audit, Content Audit przykłady, jak działa Content Audit, Content Audit znaczenie, Content Audit przewodnik"
      />
      <ArticleSchema
        title="Content Audit — co to jest i jak go przeprowadzić?"
        description="Kompletny przewodnik po content audit: 5-etapowy proces, matryca decyzji Keep/Update/Consolidate/Remove i narzędzia."
        url="https://fotz.pl/blog/content-audit-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Content Audit", url: "https://fotz.pl/blog/content-audit-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Content Audit", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Content Audit — co to jest i jak go przeprowadzić?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Audyt treści to fundament efektywnej strategii SEO i content marketingu.
            Poznaj 5-etapowy proces, matrycę decyzji i narzędzia do przeprowadzenia skutecznego content audit.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest content audit?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Content audit</strong> to systematyczna inwentaryzacja i ocena wszystkich treści
              opublikowanych przez organizację. To jak audyt finansowy — zamiast pieniędzy audytujesz
              treści pod kątem wydajności SEO, wartości dla użytkownika i zgodności ze strategią.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Większość firm z historią blogowania odkrywa, że mniej niż 20% treści generuje 80% całego ruchu organicznego.
              Content audit pozwala zidentyfikować tę grupę i skupić zasoby na mnożeniu sukcesów
              zamiast produkowaniu kolejnych słabych artykułów.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "80/20", opis: "zasada Pareto w contencie — 20% treści generuje 80% ruchu organicznego" },
                { stat: "+65%", opis: "wzrost ruchu organicznego możliwy po odświeżeniu top 10% treści" },
                { stat: "30–40%", opis: "treści można usunąć bez straty ruchu — zwiększają jakość domeny" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 faz */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 faz content auditu</h2>
            <div className="space-y-5">
              {contentAuditFramework.map((item, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.faza}</h3>
                    <p className="text-slate-600 mb-2">{item.opis}</p>
                    <div className="bg-emerald-50 rounded p-2">
                      <p className="text-xs font-semibold text-emerald-700 mb-1">Narzędzia:</p>
                      <p className="text-emerald-800 text-xs">{item.narzędzia}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Matryca decyzji */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Matryca decyzji content audit</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Akcja</th>
                    <th className="p-3 text-left">Kiedy stosować</th>
                    <th className="p-3 text-left">Przykład</th>
                    <th className="p-3 text-left">Priorytet</th>
                  </tr>
                </thead>
                <tbody>
                  {contentDecisions.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-emerald-700">{row.akcja}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.przykład}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.priorytet}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — content audit</h2>
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

      <RelatedArticles currentArticleId="content-audit-co-to" />
      <ContactSection />
    </Layout>
  );
}
