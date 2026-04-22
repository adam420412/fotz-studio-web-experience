import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "CSS Anchor Positioning — co to jest i jak działa?",
    answer: "CSS Anchor Positioning: natywne pozycjonowanie elementów względem innych. Bez JavaScript! Bez Floating UI / Popper.js. Nowe w Chrome 125+ (2024). Podstawy: anchor-name: --my-anchor (na elemencie referencyjnym). position-anchor: --my-anchor (na elemencie pozycjonowanym). position: absolute lub fixed. Pozycja: top: anchor(bottom) — pod elementem. left: anchor(left) — wyrównaj w lewo. bottom: anchor(top) — nad elementem. right: anchor(right) — wyrównaj w prawo. center: anchor(center). Przykład tooltip: button { anchor-name: --btn }. div.tooltip { position: absolute. position-anchor: --btn. top: calc(anchor(bottom) + 8px). left: anchor(left) }. Fallback pozycja: position-try-fallbacks: flip-block, flip-inline. Automatyczne przełączenie. Gdy tooltip wychodzi poza viewport. position-try: custom fallback. @position-try --above { top: auto. bottom: anchor(top) }. Wielokrotne anchory: top: anchor(--anchor-a bottom). left: anchor(--anchor-b right). Rozmiar: width: anchor-size(width). height: anchor-size(height). Dopasuj do anchor. Inline anchoring: bez position:absolute. anchor() w margin, padding (eksperymentalnie). Wsparcie: Chrome 125+. Safari 18 (częściowy). Firefox — w trakcie. Polyfill: @oddbird/css-anchor-positioning. Produkcja: z polyfill ok. Zastępuje: Popper.js. Floating UI (częściowo). Custom JavaScript positioning.",
  },
  {
    question: "Popover API — natywne popupy bez JavaScript?",
    answer: "Popover API: natywne popupy. Baseline 2024. Dostępność wbudowana. Keyboard navigation. popover atrybut: button popovertarget='my-pop' — trigger. div id='my-pop' popover — zawartość. Działanie: click na button -> toggle popover. ESC zamyka. Outside click zamyka (light dismiss). Focus trap opcjonalny. Typy popover: popover (domyślny = 'auto'): light dismiss. Jeden aktywny naraz. Skupia się automatycznie. popover='manual': programmatic control. Brak light dismiss. Wiele naraz. Metody JS: el.showPopover(). el.hidePopover(). el.togglePopover(). ToggleEvent: el.addEventListener('toggle', (e) => { if (e.newState === 'open') {} }). Styling: [popover] { display: none } — domyślnie. :popover-open — gdy widoczny. Animacje: @starting-style. transition: display. Pojawianie się z animacją. overlay: top-layer — ponad resztą. backdrop: ::backdrop (jak dialog). Anchor + Popover: Idealne połączenie! Tooltip/dropdown z anchor positioning. button { anchor-name: --trigger. popovertarget: menu }. div[popover] { position: absolute. position-anchor: --trigger. top: anchor(bottom) }. Dostępność: role='tooltip' lub 'menu'. aria-expanded. Focus management wbudowany. Zastępuje: custom dropdown. tooltip komponenty. React Portals (częściowo). Wsparcie: Chrome 114+, Safari 17+, Firefox 125+. Powszechny (2024). Nie zastępuje: dialog — modal z focus trap. Złożone menu ARIA.",
  },
  {
    question: "CSS :has() — parent selector i zaawansowane wzorce?",
    answer: ":has(): parent selector. Baseline 2023. Powszechny support. Zmienia możliwości CSS. Podstawy: form:has(input:invalid) — formularz z błędnym polem. article:has(img) — artykuł z obrazem. li:has(+ li) — li przed następnym li. Negacja: :not(:has(img)) — bez obrazka. Złożone selektory: section:has(h2 + p) — sekcja z h2 za którym jest p. nav:has(a[aria-current='page']) — nawigacja z aktywnym linkiem. :has(:focus-visible) — kontener z sfocusowanym elementem. React alternatywy: CSS :has vs JavaScript className. :has zmniejsza liczbę event listenerów. Formularze: label:has(input:required) — wymagane pole. input:has(+ .error) — nie działa (sibling nie parent). :has(.error) — kontener z błędem. Karty: .card:has(img:hover) { transform: scale(1.02) } — hover na obrazku zmienia kartę. Warunki mediów: nie można używać :has z media queries bezpośrednio. Ale :has w selektorach absolutnie ok. Zagnieżdżenie: .parent:has(.child:hover) .sibling — zmień sibling gdy child hover. Ukrywanie: .section:has(.empty-state) .controls { display: none }. Dostępność: .form-group:has([aria-invalid='true']) — styluj grupę. Dark mode: html:has([data-theme='dark']) — alternatywa dla html.dark. Performance: :has jest droższy niż proste selektory. Unikaj :has z deepnymi selectorami. Wsparcie: Chrome 105+, Safari 15.4+, Firefox 121+. Polyfill niedostępny (zbyt złożony).",
  },
  {
    question: "CSS View Transitions API — animacje między stronami i stanami?",
    answer: "View Transitions API: animacje przy zmianach DOM i nawigacji. Dwie wersje: Same-Document (Level 1) i Cross-Document (Level 2, MPA). Same-Document: document.startViewTransition(() => { updateDOM() }). Domyślna animacja: fade 400ms. Natywna — przeglądarka robi screenshot. Animuje opacity. Nazwane transakcje: view-transition-name: hero. Pasujące elementy animują się jako morph. Shrink/grow + fade. Wiele elementów: każdy z unikalną nazwą. Kontener bez animacji: view-transition-name: none. Własna animacja: ::view-transition-old(hero) { animation: slide-out 300ms }. ::view-transition-new(hero) { animation: slide-in 300ms }. Pseudo-elementy: ::view-transition-image-pair(root). ::view-transition-old(name). ::view-transition-new(name). React + View Transitions: flushSync + startViewTransition. startViewTransition(() => { flushSync(() => setState(newState)) }). Lub @astrojs/transitions (Astro). Cross-Document (Level 2): bez JavaScript! @view-transition { navigation: auto }. Animuje między pełnymi stronami. transition:name w HTML. Wsparcie: Same-Document — Chrome 111+, Firefox (partial). Cross-Document — Chrome 126+. Safari nie (2024). Dostępność: prefers-reduced-motion: @media (prefers-reduced-motion) { ::view-transition-group(*) { animation: none } }. Przypadki użycia: filtrowanie listy. Zmiana widoku (list/grid). SPA nawigacja. Karuzele. Tabs. Mastercard layout transitions.",
  },
  {
    question: "CSS Scroll-Driven Animations — animacje napędzane scrollem?",
    answer: "Scroll-Driven Animations: animacje CSS napędzane scrollem lub widocznością elementu. Bez JavaScript! Bez IntersectionObserver. Bez GSAP ScrollTrigger (dla prostych przypadków). Baseline 2024. Scroll Timeline: animation-timeline: scroll(). scroll(root) — globalny scroll. scroll(nearest) — najbliższy scrollable container. Oś: scroll(block) — wertykalny. scroll(inline) — horyzontalny. Przykład progress bar: @keyframes grow { from { transform: scaleX(0) } to { transform: scaleX(1) } }. .progress { animation: grow auto linear. animation-timeline: scroll(root) }. View Timeline: animation-timeline: view(). Element wchodzi/wychodzi z viewportu. view(block 200px 400px) — marginy. Inset: animation-range: entry 0% entry 100%. exit 0% exit 100%. cover, contain, entry, exit. Sticky reveal: :root { --scale: 0 }. @keyframes reveal { to { --scale: 1 } }. .card { animation: reveal linear both. animation-timeline: view() }. JavaScript: ScrollTimeline API. new ScrollTimeline({scrollSource: el, axis: 'block'}). el.animate(keyframes, {timeline: scrollTimeline}). Przypadki użycia: parallax effects. Sticky header opacity. Section reveal. Image lazy motion. Reading progress. Horizontal scroll gallery. Ograniczenia: CSS animacje tylko — nie JavaScript callbacks. Złożona logika: JavaScript + ScrollTimeline. Wsparcie: Chrome 115+. Firefox, Safari — nie (2024). Polyfill: scroll-driven-animations polyfill (Google). Fallback: IntersectionObserver dla starszych.",
  },
];

const newCssApis = [
  { api: "CSS Anchor Positioning", wsparcie: "Chrome 125+ (2024)", zastosowanie: "Tooltip, dropdown, popover bez Popper.js" },
  { api: "Popover API", wsparcie: "Baseline 2024 — wszystkie", zastosowanie: "Natywne popupy, light dismiss, top-layer" },
  { api: ":has() selector", wsparcie: "Baseline 2023 — wszystkie", zastosowanie: "Parent selector, warunkowe style, formularze" },
  { api: "View Transitions", wsparcie: "Chrome 111+ (cross-doc 126+)", zastosowanie: "Animacje stanów i nawigacji bez JS" },
  { api: "Scroll-Driven Animations", wsparcie: "Chrome 115+ (polyfill)", zastosowanie: "Parallax, reveal, progress bar — scroll" },
  { api: "@starting-style", wsparcie: "Chrome 117+, Safari 17.5+", zastosowanie: "Enter animations dla display:none elementów" },
];

export default function BlogCssAnchorPopoverCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSS Anchor Positioning, Popover API, :has(), View Transitions…"
        description="Nowe CSS API 2024: Anchor Positioning (tooltips bez JS), Popover API (natywne popupy), :has() parent selector, View Transitions (animacje) i Scroll-Driven…"
        canonicalUrl="https://fotz.pl/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024"

        keywords="CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 co to jest, CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 jak działa, CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 tutorial, CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 przykład, czym jest CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024, CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 dokumentacja, CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024 przewodnik"

        canonical="https://fotz.pl/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024"
      />
      <ArticleSchema
        title="CSS Anchor Positioning, Popover API, :has(), View Transitions i Scroll-Driven 2024?"
        description="6 nowych CSS API (Anchor Positioning/Popover/:has()/View Transitions/Scroll-Driven/@starting-style) — natywne tooltips, popupy, animacje i scroll bez JavaScript."
        url="https://fotz.pl/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024"
        datePublished="2024-06-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Nowe CSS API 2024", url: "https://fotz.pl/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Nowe CSS API 2024", url: "/blog/css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Browser APIs / 2024
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nowe CSS API 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Anchor Positioning (tooltips bez JS), Popover API (natywne popupy),
              :has() parent selector, View Transitions i Scroll-Driven Animations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tooltips", value: "Anchor CSS" },
                { label: "Popupy", value: "Popover API" },
                { label: "Parent", value: ":has()" },
                { label: "Animacje", value: "View Trans." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 nowych CSS API 2024 — wsparcie i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Anchor Positioning, Popover API, :has(), View Transitions, Scroll-Driven i @starting-style —
              status wsparcia i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wsparcie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                {newCssApis.map((a, i) => (
                  <tr key={a.api} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.wsparcie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.zastosowanie}</td>
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

      <RelatedArticles currentArticleId="css-anchor-positioning-popover-api-has-view-transitions-scroll-driven-2024" />
      <ContactSection />
    </Layout>
  );
}
