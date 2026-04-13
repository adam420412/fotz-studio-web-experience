import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Panda CSS — zero-runtime CSS-in-JS z TypeScript?",
    answer: "Panda CSS: next-gen CSS-in-JS. Zero runtime w przeglądarce. Statyczna ekstrakcja CSS. TypeScript-first. Chakra UI team (ChakraUI v3 oparty na Pandzie). Instalacja: npm install -D @pandacss/dev. npx panda init. panda.config.ts: import {defineConfig} from '@pandacss/dev'. export default defineConfig({preflight: true, include: ['./src/**/*.tsx'], exclude: [], theme: {extend: {}}, outdir: 'styled-system'}). Użycie css(): import {css} from '../styled-system/css'. const styles = css({display: 'flex', gap: '4', padding: '6', background: 'blue.500', _hover: {background: 'blue.600'}}). className={styles}. Patterns: import {flex, grid, stack, container} from '../styled-system/patterns'. flex({align: 'center', gap: '4'}). grid({columns: 3, gap: '6'}). Recipes (komponenty): const buttonRecipe = cva({base: {display: 'flex', alignItems: 'center'}, variants: {size: {sm: {padding: '2 4'}, lg: {padding: '4 8'}}, variant: {solid: {bg: 'blue.500'}, outline: {border: '1px solid'}}}}). Design tokens: theme.tokens.colors, spacing, fonts. Globalne theme. Multi-theme: theme variants per @condition. CSSGEN: generuje tylko używane CSS. Build step konieczny. Konfiguracja: conditions (responsive, dark), utilities (custom). JSX: styled.div({...}) — jak styled-components. Ale zero runtime. Wsparcie React, Vue, Solid, Svelte.",
  },
  {
    question: "UnoCSS — atomic CSS engine i porównanie z Tailwind?",
    answer: "UnoCSS: atomic CSS engine (nie framework). Anthony Fu (Vite). Ekstremalnie szybki (on-demand). Konfigurowalny. Presets = frameworki CSS. Instalacja Vite: npm install -D unocss. vite.config.ts: import UnoCSS from 'unocss/vite'. plugins: [UnoCSS()]. main.ts: import 'virtual:uno.css'. Presets: @unocss/preset-uno — Tailwind/Windi kompatybilny. @unocss/preset-attributify — px-4 jako atrybut. @unocss/preset-icons — ikony przez Iconify. @unocss/preset-typography — prose klasy. @unocss/preset-wind — Tailwind v3 kompatybilny. @unocss/preset-mini — minimalne. Attributify mode: div text-center p-4 m-2 — atrybuty zamiast class. Brak class= za każdym razem. Tagify mode: text-xl + div — tagi jako style. Custom rules: rules: [['m-1', {margin: '0.25rem'}], [/^m-(\d+)$/, ([, d]) => ({margin: d + 'px'})]]. Custom shortcuts: shortcuts: {'btn': 'px-4 py-2 rounded cursor-pointer', 'btn-primary': 'btn bg-blue-500 text-white'}. Icons: i-mdi-home. i-logos-vue. Iconify — 100k+ ikon. Zero JS runtime dla ikon (CSS). Pure CSS ikony. Transformer: @unocss/transformer-directives — @apply działa. @unocss/transformer-variant-group — group:hover:(text-red bg-blue). CDN usage: script src='https://cdn.jsdelivr.net/npm/@unocss/runtime'. Zero build. Rychly prototyp. VS Tailwind: UnoCSS jest szybszy (Vite plugin). Bardziej konfigurowalny. Tailwind — większy ekosystem, IntelliSense lepszy.",
  },
  {
    question: "Open Props — CSS Variables design system gotowy do użycia?",
    answer: "Open Props: gotowy design token system. CSS Custom Properties. Adam Argyle (Google Chrome). Zero JS runtime. Framework agnostic. Instalacja: npm install open-props. Lub CDN: import 'https://unpkg.com/open-props'. Import selektywny: @import 'open-props/props.colors.css'. @import 'open-props/props.sizes.css'. Colory: --blue-1 do --blue-12. --red-1 do --red-12. 22 kolory. Każdy w 12 odcieniach. Adaptive colors. Spacing: --size-1 (0.25rem) do --size-15 (7rem). --size-fluid-1 do --fluid-10 (clamp()). Responsywne! Typography: --font-size-0 do --font-size-fluid-3. --font-weight-1 do --font-weight-9. --font-lineheight-1 do --font-lineheight-5. --font-letterspacing-0 do --font-letterspacing-7. Shadows: --shadow-1 do --shadow-6. --inner-shadow-0 do --inner-shadow-4. Borders: --border-size-1 do --border-size-5. --radius-1 do --radius-round. --radius-blob-1 do --radius-blob-5. Animations: --animation-fade-in. --ease-1 do --ease-5. --ease-elastic-1 do --ease-spring-5. Gradient: --gradient-1 do --gradient-30. Piękne gradienty. Dark mode: @media (prefers-color-scheme: dark) { auto adjust }. Lub manual z [data-theme='dark']. Normalize: PostCSS Open Props. Tree-shake — tylko używane. Zachowaj tylko to co używasz. Kombinacja: Panda CSS + Open Props. UnoCSS + Open Props tokens. Tailwind z Open Props vars.",
  },
  {
    question: "Vanilla Extract i StyleX — zero-runtime type-safe CSS?",
    answer: "Vanilla Extract: CSS Modules ale TypeScript. Markboulton Design (seeks). Zero runtime. Statyczna ekstrakcja. Pliki *.css.ts (nie w DOM). Podstawy: import {style, globalStyle} from '@vanilla-extract/css'. export const button = style({backgroundColor: 'blue', padding: '12px 24px', ':hover': {backgroundColor: 'darkblue'}, selectors: {'&:focus-visible': {outline: '2px solid orange'}}, '@media': {'(prefers-color-scheme: dark)': {backgroundColor: 'navy'}}}). Użycie: import {button} from './button.css.ts'. div className={button}. Recipes: import {recipe} from '@vanilla-extract/recipes'. const btn = recipe({base: {...}, variants: {color: {blue: {...}, red: {...}}, size: {sm: {...}, lg: {...}}}}). btn({color: 'blue', size: 'sm'}). Sprinkles: atomic CSS na VE. defineProperties({properties: {padding: [0,4,8,16], color: ['blue','red']}}). Statyczna ekstrakcja. StyleX (Meta): CSS-in-JS z Facebook. React Native web style. Deterministic class names. stylex.create({button: {backgroundColor: 'blue'}}). stylex.props(styles.button). @stylexjs/babel-plugin. Atomic CSS output. Deterministic merge. Merge: ostatnia wartość wygrywa. Bezpieczniejsze niż clsx. Dostępny publicznie (GitHub). Porównanie: Vanilla Extract — więcej CSS features. StyleX — strictniejszy, merge semantics. Panda CSS — lepszy DX, patterns. Wszystkie: zero runtime, TypeScript, statyczna ekstrakcja.",
  },
  {
    question: "Atomic CSS — kiedy wybrać który system w 2024?",
    answer: "Przegląd ekosystemu CSS (2024): Tailwind CSS: utility-first. Największy ekosystem. IntelliSense. shadcn/ui. Znany przez wszystkich. UnoCSS: szybszy Vite build. Bardziej konfigurowalny. Kompatybilny z Tailwind. Panda CSS: CSS-in-JS zero-runtime. TypeScript DX. Design tokens. Vanilla Extract: CSS Modules + TypeScript. Najbardziej type-safe. StyleX: Meta CSS-in-JS. Deterministic merge. Open Props: gotowe tokens. Uzupełnienie do każdego. CSS Modules: stary standard. Lokalny scope. Brak DX jak VE. Sass/SCSS: preprocessing. Stary ale stabilny. Dobry dla złożonych projektów. Kiedy co: Nowy projekt React: Tailwind + shadcn/ui — najszybszy start. Design System firmowy: Panda CSS + tokens. Granularna type-safety: Vanilla Extract. Vite + Vue/Svelte: UnoCSS preset-wind. Meta/duże korporacje: StyleX. Tokensy bez frameworka: Open Props. Legacy migracja: Tailwind (jeśli Bootstrap/custom). Wydajność: Build time: UnoCSS (najszybszy) ~ Panda CSS ~ Tailwind 4. Runtime size: wszystkie zero-runtime. Vanilla Extract: najpiękniejszy TypeScript. Bundle size: atomic CSS mały. Tylko używane klasy. Tailwind v4 Oxide: 5-10x szybszy build. Trend 2024: zero-runtime CSS-in-JS rośnie. Tailwind dominuje ekosystem. shadcn/ui napędza Tailwind adopcję. CSS native coraz silniejsze (custom props, container queries).",
  },
];

const cssFrameworks = [
  { framework: "Tailwind CSS v4", podejscie: "Utility-first (CSS-first config)", kiedy: "Każdy projekt — największy ekosystem, shadcn/ui" },
  { framework: "UnoCSS", podejscie: "Atomic CSS engine (presety)", kiedy: "Vite + Vue/Svelte, Tailwind-kompatybilny, szybszy build" },
  { framework: "Panda CSS", podejscie: "CSS-in-JS zero-runtime, type-safe", kiedy: "Design system, Chakra/React, TypeScript-first" },
  { framework: "Vanilla Extract", podejscie: "CSS Modules + TypeScript (*.css.ts)", kiedy: "Maksymalna type-safety, recipes pattern" },
  { framework: "StyleX (Meta)", podejscie: "Atomic CSS-in-JS, deterministic merge", kiedy: "Duże korporacje, React, pewny merge semantics" },
  { framework: "Open Props", podejscie: "CSS Variables token library (gotowe)", kiedy: "Uzupełnienie dowolnego systemu — darmowe tokeny" },
];

export default function BlogPandaCssUnoCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX"
        description="Atomic CSS 2024: Panda CSS (zero-runtime TypeScript), UnoCSS (engine + presety), Open Props (gotowe tokeny), Vanilla Extract (CSS Modules TS) i StyleX…"
        canonicalUrl="https://fotz.pl/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024"

        keywords="Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX co to jest, Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX definicja, czym jest Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX, Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX przykłady, jak działa Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX, Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX znaczenie, Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX przewodnik"

        canonical="https://fotz.pl/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024"
      />
      <ArticleSchema
        title="Panda CSS, UnoCSS, Open Props, Vanilla Extract i StyleX — atomic CSS 2024?"
        description="6 CSS frameworków (Tailwind/UnoCSS/Panda CSS/Vanilla Extract/StyleX/Open Props) — zero-runtime, atomic CSS, TypeScript DX, design tokens i kiedy wybrać w 2024."
        url="https://fotz.pl/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024"
        datePublished="2024-07-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Atomic CSS 2024", url: "https://fotz.pl/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Atomic CSS 2024", href: "/blog/panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Atomic / Zero-Runtime
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Atomic CSS 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Panda CSS (TypeScript, zero-runtime), UnoCSS (engine + presety),
              Open Props (gotowe tokeny), Vanilla Extract i StyleX (Meta).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Type-safe", value: "Panda CSS" },
                { label: "Engine", value: "UnoCSS" },
                { label: "Tokeny", value: "Open Props" },
                { label: "Meta", value: "StyleX" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-pink-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 CSS frameworków — atomic CSS porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tailwind, UnoCSS, Panda CSS, Vanilla Extract, StyleX i Open Props —
              podejście i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {cssFrameworks.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.podejscie}</td>
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

      <RelatedArticles currentArticleId="panda-css-unocss-open-props-vanilla-extract-stylex-atomic-css-2024" />
      <ContactSection />
    </Layout>
  );
}
