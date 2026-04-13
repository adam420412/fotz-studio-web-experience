import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "CSS Custom Properties — zmienne CSS i kaskada?",
    answer: "CSS Custom Properties (CSS Variables): --nazwa: wartość. Deklaracja: :root { --color-primary: #3b82f6. --spacing-base: 1rem. --font-heading: 'Inter', sans-serif }. Użycie: color: var(--color-primary). padding: var(--spacing-base). Fallback: var(--color-primary, blue) — jeśli nie zdefiniowana. Kaskada: zmienne dziedziczone. Dzieci dziedziczą od rodziców. Lokalny override: .button { --color-primary: red } — nadpisuje lokalnie. Scoped variables: .card { --card-bg: white. --card-shadow: 0 1px 3px rgba(0,0,0,0.1) }. Tylko w scopie .card i potomkach. Dynamiczna zmiana: element.style.setProperty('--color-primary', '#ff0000'). JavaScript pełna kontrola. Bez reflow dla layout properties. Reaktywność: nie trzeba klas — zmieniaj wartość zmiennej. Cały motyw z jednej zmiany. Animacja wartości: @property --rotation { syntax: 'angle'. inherits: false. initial-value: 0deg }. Animuj --rotation. Nie działa bez @property dla liczb. Calc z variables: calc(var(--spacing-base) * 2). calc(100% - var(--sidebar-width)). Matematyka CSS. Pseudo-elementy: --wartość propaguje się do ::before, ::after. Media queries: @media (prefers-color-scheme: dark) { :root { --bg: #111. --text: #eee } }. Nie można używać w media query warunku (tylko wartości). Container queries: @container (min-width: 600px) { .card { --cols: 3 } }.",
  },
  {
    question: "Design Tokens — system projektowania z CSS Variables?",
    answer: "Design Tokens: atomowe wartości systemu projektowania. Kolory, typography, spacing, shadows, radii. Struktura tokenów: Primitive tokens: --blue-500: #3b82f6 (surowe wartości). Semantic tokens: --color-action: var(--blue-500) (znaczenie). Component tokens: --button-bg: var(--color-action) (komponent). Przykład systemu: :root { --color-brand: oklch(0.6 0.24 255). --color-surface: oklch(0.98 0 0). --color-text: oklch(0.15 0 0). --space-1: 0.25rem. --space-2: 0.5rem. --space-4: 1rem. --space-8: 2rem. --radius-sm: 0.25rem. --radius-md: 0.5rem. --radius-lg: 1rem. --shadow-sm: 0 1px 2px rgba(0,0,0,0.05). --font-size-sm: 0.875rem. --font-size-base: 1rem. --font-size-lg: 1.125rem }. Style Dictionary: npm tool. JSON tokens -> CSS/JS/iOS/Android. transforms: kolory do hex/rgb. formats: :root {} CSS output. Multi-platform z jednego źródła. Figma integration: Tokens Studio plugin. Sync Figma vars -> code. Single source of truth. Naming conventions: kebab-case. Kategoria-podkategoria-modyfikator. --color-text-secondary. --space-component-gap. Fluid tokens: --font-size-fluid: clamp(1rem, 2.5vw, 1.5rem). --space-fluid: clamp(1rem, 5vw, 3rem). Responsive bez media queries. Dark mode tokens: [data-theme='dark'] { --color-surface: oklch(0.1 0 0). --color-text: oklch(0.95 0 0) }.",
  },
  {
    question: "Theming z CSS Custom Properties — dark mode i multi-theme?",
    answer: "Dark mode z CSS Variables: prefers-color-scheme media query. lub class .dark na html/body. Przykład: :root { --bg: #ffffff. --text: #111111. --border: #e5e7eb }. @media (prefers-color-scheme: dark) { :root { --bg: #0f172a. --text: #f1f5f9. --border: #334155 } }. .dark klasa: html.dark { --bg: #0f172a. --text: #f1f5f9 }. JavaScript toggle: document.documentElement.classList.toggle('dark'). localStorage persist. System preference check. Multi-theme system: [data-theme='ocean'] { --primary: #0ea5e9. --accent: #06b6d4 }. [data-theme='forest'] { --primary: #16a34a. --accent: #15803d }. [data-theme='sunset'] { --primary: #f97316. --accent: #ea580c }. Zmiana: document.documentElement.setAttribute('data-theme', 'ocean'). Bez CSS-in-JS. Bez rebuild. React Context + CSS vars: ThemeContext z aktualnym motywem. useEffect -> setAttribute na document.documentElement. Komponenty nie wiedzą o temacie (CSS to obsłuży). Wysokowydajny: bez re-renderu komponentów. CSS robi całą robotę. Gradient themes: --gradient: linear-gradient(var(--gradient-from), var(--gradient-to)). Zmieniaj --gradient-from i --gradient-to. Brand themes per tenant: SaaS multi-tenant. Każdy tenant ma własny --primary. Wczytaj z API. inject do :root. Brak rebuild. Animowany przełącznik motywu: transition: background-color 0.3s, color 0.3s na body. Płynna zmiana. view-transition API (nowe). @starting-style dla animacji.",
  },
  {
    question: "@property — rejestrowanie właściwości CSS i animacje?",
    answer: "@property: CSS Houdini. Rejestracja custom property. Typy i animacje. Składnia: @property --rotation { syntax: 'angle'. inherits: false. initial-value: 0deg }. @property --progress { syntax: 'percentage'. inherits: false. initial-value: 0% }. @property --color { syntax: 'color'. inherits: true. initial-value: #000 }. Typy: angle, color, custom-ident, image, integer, length, length-percentage, number, percentage, resolution, time, transform-list, transform-function, url. Animacja liczb: bez @property: --value: 0 - nie animuje. z @property --value {syntax: 'number'} - animuje! Przykład animacji gradientu: @property --hue { syntax: 'number'. inherits: false. initial-value: 0 }. background: hsl(var(--hue) 70% 60%). @keyframes spin-hue { to { --hue: 360 } }. animation: spin-hue 3s linear infinite. Animacja border-radius: @property --radius { syntax: 'length'. inherits: false. initial-value: 0px }. Animuj --radius zamiast border-radius. Smooth. Counter progress: @property --p { syntax: 'integer'. inherits: false. initial-value: 0 }. counter-reset: progress var(--p). content: counter(progress) '%'. Animowany licznik CSS only! CSS.registerProperty (JavaScript): CSS.registerProperty({name: '--highlight', syntax: 'color', inherits: false, initialValue: 'transparent'}). Programmatic registration. Wsparcie przeglądarek: Chrome 85+, Firefox 128+, Safari 16.4+. Prawie powszechne (2024). Polyfill: css-paint-polyfill (częściowy).",
  },
  {
    question: "CSS Custom Properties — zaawansowane wzorce i TypeScript?",
    answer: "CSS Variables w TypeScript: getComputedStyle(el).getPropertyValue('--color-primary').trim(). el.style.setProperty('--color', value). el.style.removeProperty('--color'). Typed CSS Variables: type CSSVarName = '--color-primary' | '--spacing-base' | '--font-size'. function setCSSVar(name: CSSVarName, value: string) { document.documentElement.style.setProperty(name, value) }. CSS Modules + Variables: .button { background: var(--button-bg, var(--color-primary)). color: var(--button-text, white) }. Lokalne overrides w module. Responsive design patterns: Fluid spacing: --space: clamp(1rem, 2vw + 0.5rem, 2rem). Fluid typography: --font-size: clamp(1rem, 2.5vw, 1.25rem). Font size scale: --scale: 1.25. --fs-sm: calc(1rem / var(--scale)). --fs-md: 1rem. --fs-lg: calc(1rem * var(--scale)). --fs-xl: calc(1rem * var(--scale) * var(--scale)). Math w CSS: Złożone: calc(var(--cols, 3) * var(--col-width) + var(--gap) * (var(--cols, 3) - 1)). min(), max(), clamp() z variables. Staggered animations: .item { animation-delay: calc(var(--i) * 100ms) }. style='--i: 1' w HTML. Lub JavaScript: items.forEach((el, i) => el.style.setProperty('--i', i)). Scroll-driven: @scroll-timeline z variables. animation-timeline: scroll(). --scroll-progress: animowany. CSS Custom Properties vs preprocessor vars: Sass $var: compile-time, nie dynamiczne. CSS var: runtime, dziedziczone, animowalne. Użyj obu: Sass dla static, CSS vars dla dynamic. Debugging: Chrome DevTools Styles panel. Computed wartości widoczne. Overrides widoczne.",
  },
];

const cssVarsPatterns = [
  { wzorzec: "Primitive Tokens", opis: "--blue-500: #3b82f6 (surowe wartości)", korzysc: "Single source of truth dla kolorów" },
  { wzorzec: "Semantic Tokens", opis: "--color-action: var(--blue-500)", korzysc: "Znaczenie zamiast wartości — łatwa zmiana" },
  { wzorzec: "Dark Mode", opis: "@media prefers-color-scheme + data-theme", korzysc: "Jeden CSS, wiele motywów bez rebuild" },
  { wzorzec: "@property", opis: "syntax: 'color' | 'angle' | 'number'", korzysc: "Animacje custom properties, counter CSS" },
  { wzorzec: "Fluid Tokens", opis: "clamp(min, preferred, max) z viewport", korzysc: "Responsive bez media queries" },
  { wzorzec: "Component Scoping", opis: ".card { --card-bg: white } lokalnie", korzysc: "Izolacja komponentów, override per instancja" },
];

export default function BlogCssCustomPropsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSS Custom Properties — Design Tokens, @property, Theming i Dark Mode 2024 | Fotz.pl"
        description="CSS Custom Properties: design tokens (primitive/semantic/component), @property animacje, dark mode theming, fluid tokens z clamp(), TypeScript i zaawansowane wzorce CSS Variables."
        canonicalUrl="https://fotz.pl/blog/css-custom-properties-variables-design-tokens-theming-2024"

        keywords="CSS Custom Properties co to jest, CSS Custom Properties definicja, czym jest CSS Custom Properties, CSS Custom Properties przykłady, jak działa CSS Custom Properties, CSS Custom Properties znaczenie, CSS Custom Properties przewodnik"
      />
      <ArticleSchema
        title="CSS Custom Properties — Design Tokens, @property, Theming i Dark Mode 2024?"
        description="6 wzorców CSS Variables (primitive tokens/semantic/dark mode/@property/fluid/scoping) — design tokens, animacje, multi-theme system, TypeScript i zaawansowane CSS patterns."
        url="https://fotz.pl/blog/css-custom-properties-variables-design-tokens-theming-2024"
        datePublished="2024-05-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CSS Custom Properties", url: "https://fotz.pl/blog/css-custom-properties-variables-design-tokens-theming-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CSS Custom Properties", href: "/blog/css-custom-properties-variables-design-tokens-theming-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Design Tokens / Theming
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSS Custom Properties
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Design tokens (primitive/semantic/component), @property animacje,
              dark mode theming, fluid tokens z clamp() i zaawansowane wzorce CSS Variables.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tokens", value: "Design System" },
                { label: "Animacje", value: "@property" },
                { label: "Theming", value: "Dark Mode" },
                { label: "Fluid", value: "clamp()" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców CSS Custom Properties</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Primitive tokens, semantic tokens, dark mode, @property, fluid tokens i component scoping —
              opis i korzyść.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Korzyść</th>
                </tr>
              </thead>
              <tbody>
                {cssVarsPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.korzysc}</td>
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

      <ContactSection />
    </Layout>
  );
}
