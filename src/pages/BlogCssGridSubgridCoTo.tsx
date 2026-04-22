import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "CSS Grid — podstawy, grid-template-areas i named grid lines?",
    answer: "CSS Grid: dwuwymiarowy układ. Wiersze i kolumny jednocześnie. display: grid. grid-template-columns: repeat(3, 1fr) — 3 równe kolumny. grid-template-rows: auto 1fr auto. grid-gap: 16px (lub gap). Grid areas (named): grid-template-areas: 'header header header' 'sidebar main main' 'footer footer footer'. Elementy: header { grid-area: header } sidebar { grid-area: sidebar } main { grid-area: main }. Named grid lines: grid-template-columns: [start] 1fr [content-start] 3fr [content-end] 1fr [end]. Linie z nazwami — lepsza czytelność. grid-column: content-start / content-end. auto-fill vs auto-fit: repeat(auto-fill, minmax(250px, 1fr)) — tworzy puste kolumny. repeat(auto-fit, minmax(250px, 1fr)) — rozciąga elementy. auto-fit dla responsywnych grid bez media queries. minmax: minmax(200px, 1fr) — min 200px, max 1 fr. fit-content(300px) — shrink-wrap do 300px. Placement: grid-column: 1 / 3 — od linii 1 do 3. grid-column: span 2 — rozpięty na 2 kolumny. grid-row: 1 / -1 — cała wysokość. -1 = ostatnia linia. auto placement: grid-auto-flow: dense — wypełnia luki. Przydatne dla masonry-like layout. grid-auto-rows: minmax(100px, auto) — automatyczne wiersze.",
  },
  {
    question: "CSS Subgrid — jak działa i kiedy go używać?",
    answer: "Subgrid: potomek dziedziczy linie grid od rodzica. Wsparcie: Chrome 117+, Safari 16+, Firefox 71+. Problem bez subgrid: Card grid — różne wysokości treści. Chcemy wyrównać nagłówki i footery kart. Każda karta ma własny grid — nie można wyrównać. Subgrid rozwiązanie: .cards-grid { display: grid. grid-template-columns: repeat(3, 1fr). grid-template-rows: auto. gap: 16px }. .card { display: grid. grid-row: span 3. grid-template-rows: subgrid }. .card-header { /* wyrównany z innymi kartami */ }. .card-body { /* wyrównany */ }. .card-footer { /* wyrównany */ }. Subgrid działa na: grid-template-columns: subgrid — dziedziczy kolumny rodzica. grid-template-rows: subgrid — dziedziczy wiersze rodzica. Można używać obu razem. Named lines w subgrid: Linie rodzica dostępne w potomku. Responsive subgrid: @container + subgrid. Card komponenty skalują się i wyrównują. Nested subgrid: dzieci subgrid też mogą być subgrid. Głęboka hierarchia wyrównana. Użycie z CSS Grid masonry: grid-template-rows: masonry (eksperymentalne). Subgrid + masonry w przyszłości. Footer wyrównanie: grid-template-rows: 1fr subgrid działa dla footer-at-bottom bez flexbox tricks. Tabele z subgrid: lepsza dostępność niż display: table. Zachowuje semantykę HTML.",
  },
  {
    question: "CSS Masonry Layout — natywne i alternatywy?",
    answer: "CSS Masonry: układ jak Pinterest, Unsplash. Kolumny o różnych wysokościach. Elementy wypełniają luki. Natywny CSS Masonry (eksperymentalny): display: grid. grid-template-columns: repeat(3, 1fr). grid-template-rows: masonry. Tylko Firefox (za flagą) i Safari TP. Chrome — planowane. Nie gotowe na produkcję. Alternatywy CSS-only: CSS columns: column-count: 3. column-gap: 16px. Problemy: kolejność top-to-bottom (nie left-to-right). Brak kontroli nad break. JavaScript Masonry: Masonry.js (David DeSandro). masonry-layout npm. colcade — nowoczesna alternatywa. React biblioteki: react-masonry-css — CSS-only, lightweight. react-masonry-component — Masonry.js wrapper. @egjs/react-infinitegrid — zaawansowany. Virtualized masonry: @tanstack/react-virtual. Wirtualizacja dla dużych list. Masonry + virtual = wydajne Pinterest. CSS Columns + order: flexbox z column direction. flex-wrap: wrap. Elementy nie idealnie równe. CSS Grid + dense: auto-flow: column dense. Nie true masonry ale podobny efekt. Intersection Observer dla lazy load: ładuj obrazy przy wejściu w viewport. Masonry + lazy = wydajne. ResizeObserver: przelicz masonry przy zmianie rozmiarów. Responsive kolumny.",
  },
  {
    question: "Zaawansowane wzorce Grid — Holy Grail, Card layouts i responsywność?",
    answer: "Holy Grail Layout (nowoczesny): body { display: grid. grid-template: 'header' auto 'main' 1fr 'footer' auto / 1fr }. main { display: grid. grid-template-columns: 200px 1fr 200px }. Bez hacków float/position. Flexbox + Grid: Grid dla page layout (2D). Flexbox dla component layout (1D). Wzorzec: Grid outer, Flex inner. Card Grid responsive: .cards { display: grid. grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)). gap: 1rem }. Bez media queries — fluid responsywność. min() dla small screens. Sidebar layout: grid-template-columns: min(30ch, 100%) 1fr. Sidebar max 30 znaków szerokości. Fluid type + Grid: clamp(1rem, 2.5vw, 2rem). Responsywne bez media queries. CSS Grid + custom properties: --cols: 3. grid-template-columns: repeat(var(--cols), 1fr). JavaScript: el.style.setProperty('--cols', 2). Container Queries + Grid: @container (min-width: 600px) { grid-template-columns: repeat(3, 1fr) }. Layout zmienia się na podstawie kontenera nie viewportu. Stack pattern: .stack { display: grid. gap: 1rem } — pionowy spacing. Lepszy niż margin-bottom. Cluster pattern: .cluster { display: flex. flex-wrap: wrap. gap: 1rem }. Center pattern: .center { display: grid. place-items: center }. Switcher pattern: .switcher { display: flex. flex-wrap: wrap. --threshold: 40rem }. > * { flex-basis: calc((var(--threshold) - 100%) * 999) }.",
  },
  {
    question: "CSS Grid a11y, animacje i pułapki?",
    answer: "Grid i dostępność: order property zmienia wizualną kolejność. NIE zmienia DOM kolejności. Screen reader czyta DOM kolejność. Unikaj order dla interaktywnych elementów. Używaj grid-auto-flow dla naturalnej kolejności. Tabindex przy reorderze. CSS Grid animacje: gap animacja: gap jest animowalna (Chrome 99+). grid-template-columns zmiana — animowalna. transition: grid-template-columns 0.3s ease. Sidebar collapse animacja. Masonry reveal: @keyframes fadeIn z grid. stagger przez nth-child delays. Grid Layout i print: @media print { grid-template-columns: 1fr }. Drukowanie bez sidebar. Grid i overflow: minmax(0, 1fr) zamiast 1fr — bez overflow. 1fr = minmax(auto, 1fr) = min jest auto (rozmiar contentu). minmax(0, 1fr) = faktycznie równe kolumny. Pułapki: grid-template-columns: 100px repeat(2, 1fr) — łatwo pomylić kolejność. grid-area shorthand: row-start/col-start/row-end/col-end — odwrotna kolejność niż CSS margin. Implicit vs explicit grid: grid-template definiuje explicit. Elementy poza explicit — implicit (grid-auto-rows). Negative line numbers tylko explicit. Narzędzia: Firefox Grid Inspector (najlepszy). Chrome Grid Inspector. Grid.Guide visualizer. CSS Grid Generator (cssgrid.io). Layout Land (Jen Simmons) — kanał YouTube. grid-template-areas ASCII art. Wizualne debugowanie.",
  },
];

const gridPatterns = [
  { wzorzec: "auto-fit + minmax()", typ: "Responsywny grid", kiedy: "Karty, galeria — bez media queries" },
  { wzorzec: "grid-template-areas", typ: "Named layout", kiedy: "Page layout — header, sidebar, main, footer" },
  { wzorzec: "subgrid", typ: "Dziedziczenie linii", kiedy: "Wyrównanie kart — nagłówki, footery na tej samej linii" },
  { wzorzec: "auto-flow: dense", typ: "Algorytm wypełniania", kiedy: "Galeria z różnymi rozmiarami — wypełnia luki" },
  { wzorzec: "masonry", typ: "Pinterest layout (exp.)", kiedy: "Niestabilne — użyj JS alternatywy (Masonry.js)" },
  { wzorzec: "minmax(0, 1fr)", typ: "Prawdziwe równe kolumny", kiedy: "Zapobiegaj overflow — minmax(0) zamiast 1fr" },
];

export default function BlogCssGridSubgridCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSS Grid zaawansowany | Fotz Studio"
        description="CSS Grid zaawansowany: Subgrid (wyrównanie kart), CSS Masonry (natywne i JS alternatywy), grid-template-areas, auto-fit/auto-fill, minmax i nowoczesne…"
        canonicalUrl="https://fotz.pl/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024"

        keywords="CSS Grid zaawansowany co to jest, CSS Grid zaawansowany definicja, czym jest CSS Grid zaawansowany, CSS Grid zaawansowany przykłady, jak działa CSS Grid zaawansowany, CSS Grid zaawansowany znaczenie, CSS Grid zaawansowany przewodnik"

        canonical="https://fotz.pl/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024"
      />
      <ArticleSchema
        title="CSS Grid zaawansowany — Subgrid, Masonry, named areas i responsive bez media queries 2024?"
        description="6 wzorców CSS Grid (auto-fit+minmax/grid-template-areas/subgrid/dense/masonry/minmax0) — card layouts, Holy Grail, Container Queries i a11y best practices."
        url="https://fotz.pl/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CSS Grid zaawansowany", url: "https://fotz.pl/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "CSS Grid zaawansowany", url: "/blog/css-grid-subgrid-masonry-named-areas-responsive-layout-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-lime-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Grid / Layout
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSS Grid — Subgrid i Masonry
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Subgrid (wyrównanie kart), CSS Masonry, grid-template-areas,
              auto-fit+minmax (bez media queries), container queries i layout patterns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Wyrównanie", value: "Subgrid" },
                { label: "Pinterest-like", value: "Masonry" },
                { label: "Responsywny", value: "auto-fit" },
                { label: "Named layout", value: "grid-areas" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-lime-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców CSS Grid — kiedy i jak używać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              auto-fit+minmax, grid-template-areas, subgrid, dense, masonry i minmax(0) —
              typ, zastosowanie i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {gridPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="css-grid-subgrid-masonry-named-areas-responsive-layout-2024" />
      <ContactSection />
    </Layout>
  );
}
