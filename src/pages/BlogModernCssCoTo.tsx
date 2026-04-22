import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są Container Queries i jak je używać w CSS?",
    answer: "Container Queries (@container): media queries na poziomie komponentu. Nie okno przeglądarki — rodzic decyduje. Definiowanie kontenera: .card-wrapper { container-type: inline-size; container-name: card; }. Reguła: @container card (min-width: 400px) { .card { display: flex; } }. container-type wartości: inline-size (szerokość), size (szer+wys), normal (tylko style queries). container-name: nazwa opcjonalna, do wielu kontenerów. Przykład: sidebar ma 300px — komponent wyświetla stacked. Main ma 800px — komponent wyświetla grid. Ten sam CSS, inne zachowanie. Style Queries (@container style()): warunki na podstawie custom properties. @container style(--theme: dark) { .text { color: white; } }. Przekazywanie danych przez custom props. Nie wymaga JavaScript. Wsparcie: Chrome 105+, Firefox 110+, Safari 16+. Polyfill: container-query-polyfill (Google Chrome Labs). cqw, cqh, cqi, cqb: jednostki relative do kontenera. 1cqw = 1% szerokości kontenera. cqi = inline size. Porównanie z media queries: Media — globalny viewport. Container — lokalny kontener. Container = true component-driven CSS. Dobre dla: design system komponentów. Card layouts. Sidebar + main. Reusable components różnej wielkości. ResizeObserver under the hood. CSS Grid + Container Queries: potężna kombinacja. Grid decyduje o szerokości. Container decyduje o wyglądzie.",
  },
  {
    question: "CSS :has() pseudo-klasa — parent selector i zaawansowane selektory?",
    answer: ":has() pseudo-klasa (parent selector): pierwszy prawdziwy parent selector w CSS. a:has(img) — link zawierający img. form:has(input:invalid) — form z nieprawidłowym inputem. .card:has(.badge) — card mający badge. div:has(+ .error) — div poprzedzający error. Możliwości: .parent:has(.child:hover) { background: blue; } — hover dziecka zmienia rodzica. Wcześniej niemożliwe bez JavaScript. Zaawansowane selektory: :is() — lista selektorów: :is(h1, h2, h3) { margin: 0; }. Specyficzność = najwyższy selektor w liście. :where() — jak :is() ale specyficzność 0. Nadpisywanie bez !important. :not() z listą: div:not(.active, .hidden). :has() + :not(): article:not(:has(img)) { background: gray; }. CSS Nesting (native, bez Sass): .parent { color: blue; .child { color: red; } &:hover { opacity: 0.8; } @media (min-width: 768px) { display: grid; } }. Nesting marker & — explicit reference. Bez & — implicit (jak Sass). Wsparcie: Chrome 120+, Firefox 117+, Safari 17.2+. Kaskada logiczna z :has(): nav:has(a.active) — nawigacja z aktywnym linkiem. table:has(th:empty) — tabela z pustym nagłówkiem. Formularze: form:has(input[type=checkbox]:checked) .conditional-field { display: block; }. Pokaż pole gdy checkbox zaznaczony — zero JS.",
  },
  {
    question: "CSS @layer — kaskada layers i porządkowanie stylów?",
    answer: "CSS Cascade Layers (@layer): deklaratywna kontrola kaskady. Nie specyficzność — layers decydują. Deklaracja kolejności: @layer reset, base, components, utilities. Niższy layer = niższy priorytet. utilities wygrywa z components bez !important. Dodawanie do layer: @layer base { h1 { font-size: 2rem; } }. @layer components { .btn { padding: 0.5rem 1rem; } }. Import z layer: @import url('reset.css') layer(reset). Zagnieżdżanie: @layer components { @layer buttons { ... } }. Dostęp: components.buttons. Unlayered styles: najwyższy priorytet (bez @layer). Trzeba pamiętać. Praktyczne zastosowania: Design system: @layer tokens, base, components, overrides. Tailwind v4 z @layer: utilities mają niski priorytet — nadpisuj bez !important. Third-party CSS: @import 'bootstrap' layer(bootstrap). Bootstrap nie wygrywa z własnym CSS. Porównanie: Bez @layer: !important walki. Hack ze specyficznością. Z @layer: czytelna hierarchia. Przewidywalne nadpisywanie. Browser support: Chrome 99+, Firefox 97+, Safari 15.4+. Revert-layer: animation-name: revert-layer — cofa do poprzedniego layera. Debugging layers: Chrome DevTools — warstwy w Styles panel. Kolejność layerów widoczna. Layer ordering best practices: 1. reset. 2. defaults/base. 3. themes. 4. layout. 5. components. 6. utilities. 7. overrides.",
  },
  {
    question: "View Transitions API — płynne przejścia stron w CSS i JavaScript?",
    answer: "View Transitions API: płynne animacje między stanami UI. Wcześniej: JavaScript + CSS = dużo kodu. Teraz: CSS + jeden JS call. Same-document transition: document.startViewTransition(() => { updateDOM(); }). Automatyczny cross-fade. Przechwytuje stary i nowy stan. Animuje z domyślnym fade. Personalizacja: ::view-transition — root overlay. ::view-transition-old(root) — stary stan. ::view-transition-new(root) — nowy stan. @keyframes slide-from-right { from { transform: translateX(100%); } }. ::view-transition-new(root) { animation: slide-from-right 0.3s; }. Named transitions: element { view-transition-name: hero-image; }. Osobna animacja dla tego elementu. Shared element transition (MPA): hero z listy do detalu. Obraz 'leci' między stronami. SPA routing: React Router: router.navigate(path) wewnątrz startViewTransition. Next.js App Router: eksperymentalny support. @next/experimental-view-transitions. useTransitionRouter hook. MPA (Multi Page App): Chrome 126+ nawigacja przez linki. @view-transition { navigation: auto; } w CSS. Automatyczne cross-page transitions. CSS reduce-motion: @media (prefers-reduced-motion: reduce) { ::view-transition-group(*) { animation-duration: 0.01ms; } }. JavaScript API: const transition = document.startViewTransition(callback). transition.ready — promise, animacja gotowa. transition.finished — promise, animacja zakończona. transition.skipTransition() — pomiń. Browser support: Chrome 111+, Safari 18+, Firefox (w trakcie).",
  },
  {
    question: "Scroll-driven Animations i CSS Anchor Positioning — co to i jak działają?",
    answer: "Scroll-driven Animations: animacje sterowane przez scroll — zero JavaScript. animation-timeline: scroll() — postęp animacji = postęp scroll. animation-timeline: view() — postęp = widoczność w viewport. Przykład: @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }. .element { animation: fade-in linear; animation-timeline: view(); animation-range: entry 0% entry 100%; }. animation-range: określa kiedy animacja startuje/kończy. entry — wejście w viewport. exit — wyjście. cover — od góry do dołu viewportu. contain — gdy w pełni widoczny. scroll() parametry: scroll() — domyślny block axis, root scroller. scroll(x) — horizontal. scroll(nearest) — najbliższy overflow container. Zastępuje: IntersectionObserver + JS animation. GSAP ScrollTrigger (dla prostych przypadków). Lepsza wydajność — GPU-accelerated. Browser support: Chrome 115+, Safari 18+ (częściowy). Polyfill: scroll-driven-animations polyfill (Google). CSS Anchor Positioning: pozycjonowanie względem innego elementu. Wcześniej: JavaScript getBoundingClientRect(). Teraz: czyste CSS. .anchor { anchor-name: --my-anchor; }. .tooltip { position: absolute; position-anchor: --my-anchor; top: anchor(bottom); left: anchor(center); }. Zastępuje: Floating UI / Popper.js dla prostych tooltips, dropdowns, popovers. @position-try: fallback pozycje gdy poza viewport. @position-try --flip-up { top: auto; bottom: anchor(top); }. position-try-fallbacks: --flip-up, --flip-left. Popover API + Anchor: natywny HTML popover attr + CSS anchor. Zero JavaScript. Browser support: Chrome 125+. Subgrid: grid-template-columns: subgrid — dzieci dziedziczą grid rodzica.",
  },
];

const cssFeatures = [
  { feature: "Container Queries", property: "@container, container-type", wsparcie: "Chrome 105+, FF 110+, Safari 16+", kiedy: "Component-responsive design, reusable UI" },
  { feature: ":has() selector", property: ":has(), :is(), :where()", wsparcie: "Chrome 105+, FF 121+, Safari 15.4+", kiedy: "Parent selector, conditional styling bez JS" },
  { feature: "CSS @layer", property: "@layer, layer()", wsparcie: "Chrome 99+, FF 97+, Safari 15.4+", kiedy: "Design systems, third-party CSS ordering" },
  { feature: "CSS Nesting", property: "& (nesting marker)", wsparcie: "Chrome 120+, FF 117+, Safari 17.2+", kiedy: "BEM bez preprocessora, czystszy CSS" },
  { feature: "View Transitions API", property: "startViewTransition(), ::view-transition", wsparcie: "Chrome 111+, Safari 18+", kiedy: "Page transitions, SPA routing animations" },
  { feature: "Scroll-driven Animations", property: "animation-timeline: scroll()/view()", wsparcie: "Chrome 115+, Safari 18+", kiedy: "Scroll effects, progress bars bez JS" },
];

export default function BlogModernCssCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Modern CSS | Fotz Studio"
        description="Container Queries (@container), :has() parent selector, CSS @layer kaskada, CSS Nesting, View Transitions API (startViewTransition), Scroll-driven…"
        canonical="https://fotz.pl/blog/modern-css-container-queries-has-view-transitions-scroll-driven-2024"

        keywords="Modern CSS co to jest, Modern CSS definicja, czym jest Modern CSS, Modern CSS przykłady, jak działa Modern CSS, Modern CSS znaczenie, Modern CSS przewodnik"
      />
      <ArticleSchema
        title="Modern CSS — Container Queries, :has(), @layer, View Transitions i Scroll Animations 2024?"
        description="6 funkcji nowoczesnego CSS (Container Queries/:has()/@layer/CSS Nesting/View Transitions/Scroll-driven Animations) — component queries, parent selectors, cascade layers i animacje bez JavaScript."
        url="https://fotz.pl/blog/modern-css-container-queries-has-view-transitions-scroll-driven-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Modern CSS 2024", url: "https://fotz.pl/blog/modern-css-container-queries-has-view-transitions-scroll-driven-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-sky-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Modern CSS 2024", url: "/blog/modern-css-container-queries-has-view-transitions-scroll-driven-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Modern Web
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modern CSS 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Container Queries, :has() parent selector, @layer cascade, CSS Nesting,
              View Transitions API i Scroll-driven Animations — mniej JavaScript, więcej CSS.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Component queries", value: "@container" },
                { label: "Parent selector", value: ":has()" },
                { label: "Cascade control", value: "@layer" },
                { label: "Page transitions", value: "View Trans." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 funkcji Modern CSS — wsparcie i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Container Queries, :has(), @layer, CSS Nesting, View Transitions i Scroll-driven Animations —
              właściwości, wsparcie przeglądarek i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Właściwość/Syntax</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wsparcie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {cssFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs font-mono">{f.property}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wsparcie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.kiedy}</td>
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

      <RelatedArticles currentArticleId="modern-css-container-queries-has-view-transitions-scroll-driven-2024" />
      <ContactSection />
    </Layout>
  );
}
