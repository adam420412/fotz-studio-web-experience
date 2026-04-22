import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "CSS Container Queries — responsywność oparta na kontenerze nie viewport?",
    answer: "Container Queries: media queries ale dla kontenera rodzica. Nie viewport. Komponent sam decyduje o wyglądzie. Baseline 2023 — wszystkie przeglądarki. Syntax: .card-wrapper { container-type: inline-size. container-name: card }. @container card (min-width: 400px) { .card { flex-direction: row } }. container-type: inline-size — sprawdza szerokość. size — szerokość i wysokość. normal — tylko style queries. Bez nazwy: @container (min-width: 600px) — sprawdza najbliższy kontener. Shorthand: container: card / inline-size. Units kontenerowe: cqw — 1% szerokości kontenera. cqh — 1% wysokości kontenera. cqi — inline direction. cqb — block direction. cqmin/cqmax. Przykład: font-size: clamp(1rem, 3cqw, 2rem). Style Queries (2024): @container style(--type: featured) { .card { background: gold } }. Sprawdza CSS Custom Properties. Conditional classes bez JS. Container Queries vs Media Queries: MQ — layout strony, viewport. CQ — komponent, reużywalność. Design system benefits: Card niezależny od kontekstu. Sidebar automatycznie responsywny. Grid item dostosowuje się. Polyfill: container-query-polyfill (Google Chrome Labs). Baseline support: Chrome 105+, Firefox 110+, Safari 16+.",
  },
  {
    question: "CSS @layer — Cascade Layers dla organizacji CSS?",
    answer: "CSS Cascade Layers (@layer): kontrola kaskady. Zapobieganie specificity wars. Baseline 2022 — wszystkie przeglądarki. Definicja warstw: @layer base, components, utilities. Kolejność ma znaczenie! Wyższy w liście = niższy priorytet. Warstwy: @layer base { * { box-sizing: border-box } h1 { font-size: 2rem } }. @layer components { .btn { padding: .5rem 1rem } }. @layer utilities { .mt-4 { margin-top: 1rem } }. Specificity: warstwy wyżej w hierarchii zawsze wygrywają. Niezależnie od selektora! .very-specific-selector w base przegrywa z p w utilities. Nie-warstwowe style: wygrywają zawsze. Ważność warstwowa: wyżej dodana = niższy priorytet. Odwrotnie niż !important. Import z warstwą: @import url('./reset.css') layer(base). Zagnieżdżone: @layer components { @layer forms { input { ... } } }. Dostęp: @layer components.forms. Framework integracja: Tailwind CSS @layer base, components, utilities wbudowane. Odpowiada koncepcji warstw. Custom layers: @layer my-overrides { Tailwind styles z mniejszym priorytetem }. Reordering: @layer third-party, my-styles — moje wygrywają. Kiedy @layer: duże projekty CSS. Framework + custom styles. Design system. Reset CSS izolacja.",
  },
  {
    question: "CSS Nesting — natywne zagnieżdżanie bez preprocesora?",
    answer: "CSS Nesting (native): bez Sass/Less/PostCSS. Baseline 2023. Wszystkie nowoczesne przeglądarki. Podstawy: .card { color: black. .title { font-size: 1.5rem }. &:hover { background: gray }. &.active { border: 2px solid blue } }. & selector: odnosi się do rodzica. Wymagany dla elementów. .parent { div { ... } } — ok od Chrome 120+ (bez &). &:hover — hover na rodzicu. & + .sibling — selektor po. .other & — gdy inside .other. Pseudo-elementy: .btn { &::before { content: '' } }. Media queries: .card { width: 100%. @media (min-width: 768px) { width: 50% } }. Container queries: .card { @container (min-width: 400px) { flex-direction: row } }. Zagnieżdżanie Sass vs Native: Sass: & bez spacji = bezpośrednio. Native: & = parent exactly. Sass &-modifier = .parent-modifier — w native to nie działa. &.modifier — ok (z spacją różnica). PostCSS plugin: postcss-nesting — transpilacja dla starszych. @at-rule nesting: poprawne zagnieżdżanie reguł. Przykład kompleksowy: .nav { display: flex. & ul { list-style: none. & li { padding: .5rem. & a { color: inherit. &:hover { text-decoration: underline } } } } }. Kiedy CSS Nesting: nowoczesne projekty. Nie potrzebujesz Sass. Chcesz mniejszy toolchain.",
  },
  {
    question: "@scope CSS — scoped styles bez Shadow DOM?",
    answer: "@scope: style ograniczone do zakresu. Bez Shadow DOM. Bez CSS Modules. Baseline 2024 (Chrome 118+, wkrótce Firefox). Składnia: @scope (.card) { p { color: blue } h2 { font-weight: bold } }. Tylko p i h2 wewnątrz .card. Wykluczanie: @scope (.card) to (.nested-card) { styles } — nie dotykaj .nested-card dzieci. Lower boundary. Donut scope: @scope (.card) to (.footer) { h3 { ... } } — h3 w .card ale nie w .footer. Proximity specificity: @scope działa na bliskość, nie specificity. Bliższy kontener wygrywa. vs CSS Modules: Modules — build time class renaming. @scope — runtime, bez build. @scope — natywny CSS. Modules — Webpack/Vite required. vs Shadow DOM: Shadow DOM — pełna enkapsulacja, slot. @scope — lżejsze, bez custom elements. :scope pseudo-class: selectuje korzeń @scope. @scope (.card) { :scope { border: 1px solid } }. Przykład komponent: @scope (.product-card) to (.product-card .inner-card) { h2 { color: var(--brand) }. img { border-radius: 8px }. .price { font-weight: bold } }. Framework integracja: Tailwind — nadal lepszy dla utility classes. @scope — dla component-specific overrides. Polyfill: nie ma dobrego — poczekaj na Firefox. Obsługa: Chrome 118+, Safari 17.4+, Firefox 2024.",
  },
  {
    question: "CSS View Transitions, Scroll-Driven Animations i nowe funkcje 2024?",
    answer: "View Transitions API: płynne animacje między stanami. SPA routing. Document transitions. startViewTransition(() => { updateDOM() }). CSS: ::view-transition-old(root) — stary stan. ::view-transition-new(root) — nowy stan. Named: view-transition-name: hero-image. Animacje z named: ::view-transition-old(hero-image). ::view-transition-new(hero-image). Astro wbudowane. React Router 7 eksperymentalne. Scroll-Driven Animations: animacje bazowane na scroll. Bez JS scrollowania. animation-timeline: scroll(). animation-timeline: view(). scroll() — viewport scroll. view() — gdy element w widoku. @keyframes fade { from { opacity: 0 } to { opacity: 1 } }. .element { animation: fade linear both. animation-timeline: view() }. Scroll progress bar: .progress { width: 100%. animation: grow-bar linear both. animation-timeline: scroll(root) }. @keyframes grow-bar { from { transform: scaleX(0) } }. Prefers-reduced-motion: zawsze uwzględnij. @media (prefers-reduced-motion) { animation: none }. CSS anchor positioning: popover relatywny do anchora. anchor() function. position-anchor: --my-anchor. Inne nowości 2024: color-mix() — mieszanie kolorów. color-mix(in oklch, red 50%, blue). light-dark() — automatyczny dark mode. :has() — parent selector. :is(), :where() — grupowanie. @starting-style — animacje przy wstawieniu do DOM. popover attribute — wbudowane popovery. interpolate-size: allow-keywords — animuj height: auto.",
  },
];

const cssFeatures = [
  { funkcja: "Container Queries", wsparcie: "Baseline 2023 (Chrome 105+)", zastosowanie: "Responsywne komponenty bez viewport" },
  { funkcja: "CSS @layer", wsparcie: "Baseline 2022 (wszystkie)", zastosowanie: "Organizacja kaskady, no !important" },
  { funkcja: "CSS Nesting", wsparcie: "Baseline 2023 (bez &: Chrome 120+)", zastosowanie: "Zagnieżdżanie bez Sass/preprocessor" },
  { funkcja: "@scope", wsparcie: "Chrome 118+, Safari 17.4+", zastosowanie: "Scoped styles bez Shadow DOM/Modules" },
  { funkcja: "View Transitions", wsparcie: "Chrome 111+, Safari 18+", zastosowanie: "Animacje nawigacji, SPA transitions" },
  { funkcja: "Scroll-Driven Animations", wsparcie: "Chrome 115+, Firefox 110+", zastosowanie: "Parallax, progress bar bez JS" },
];

export default function BlogCssContainerLayerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSS Container Queries, @layer, Nesting, @scope i View…"
        description="Nowoczesny CSS 2024: Container Queries (responsywne komponenty), @layer (cascade layers), CSS Nesting (bez Sass), @scope (scoped styles), View Transitions…"
        canonicalUrl="https://fotz.pl/blog/css-container-queries-layer-nesting-scope-view-transitions-2024"

        keywords="CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024 co to jest, CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024 definicja, czym jest CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024, CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024 przykłady, jak działa CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024, CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024 znaczenie, CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024 przewodnik"

        canonical="https://fotz.pl/blog/css-container-queries-layer-nesting-scope-view-transitions-2024"
      />
      <ArticleSchema
        title="CSS Container Queries, @layer, Nesting, @scope i View Transitions 2024?"
        description="6 nowoczesnych funkcji CSS (Container Queries/@layer/Nesting/@scope/View Transitions/Scroll-Driven) — wsparcie przeglądarek, przykłady i kiedy używać."
        url="https://fotz.pl/blog/css-container-queries-layer-nesting-scope-view-transitions-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Nowoczesny CSS 2024", url: "https://fotz.pl/blog/css-container-queries-layer-nesting-scope-view-transitions-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Nowoczesny CSS 2024", url: "/blog/css-container-queries-layer-nesting-scope-view-transitions-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Modern / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nowoczesny CSS 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Container Queries, @layer (cascade), CSS Nesting,
              @scope, View Transitions i Scroll-Driven Animations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Responsywność", value: "Container Q." },
                { label: "Kaskada", value: "@layer" },
                { label: "Zagnieżdżanie", value: "CSS Nesting" },
                { label: "Animacje", value: "View Trans." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 nowoczesnych funkcji CSS 2024</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Container Queries, @layer, Nesting, @scope, View Transitions i Scroll-Driven —
              wsparcie przeglądarek i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wsparcie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {cssFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wsparcie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.zastosowanie}</td>
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

      <RelatedArticles currentArticleId="css-container-queries-layer-nesting-scope-view-transitions-2024" />
      <ContactSection />
    </Layout>
  );
}
