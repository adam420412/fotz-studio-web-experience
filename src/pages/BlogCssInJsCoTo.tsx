import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest CSS-in-JS i jaka jest jego historia w React?",
    answer: "CSS-in-JS: pisanie CSS wewnątrz JavaScript. Rozwiązuje: global scope CSS. Dead code elimination. Colocated styles z komponentem. Dynamiczne style oparte na props. História: 2014 — Christopher Chedeau (Facebook) popularyzuje koncepcję. JSS — pierwsza biblioteka. 2016 — styled-components (Glen Maddern, Max Stoiber). 2017 — Emotion. 2018-2021 — dominacja styled-components i Emotion. 2022-2024 — zwrot ku zero-runtime. Styled-components: tagged template literals. const Button = styled.button styled.button - background: ${props => props.primary ? 'blue' : 'white'}; color: ${props => props.primary ? 'white' : 'blue'}; - (backtick notation). Button primary -> niebieski. ThemeProvider: motyw w kontekście. Dynmic styles przez props. Automatyczne CSS vendor prefixes. Emotion: podobne do styled-components, ale bardziej elastyczne. @emotion/styled — styled API. @emotion/css — klasowy API. css prop: div css={css-background: red-}. Wbudowany w wielu komponentach UI (Chakra, MUI). Performance: runtime CSS generation. Przy każdym renderze parses styles. Wstrzykuje style tags. Problem: Server-Side Rendering może być skomplikowany. Hydration mismatch. Bundle size: styled-components ~22KB, Emotion ~11KB. React 18 Concurrent Mode: styled-components i Emotion mają problemy. Dlaczego odchodzą od runtime CSS-in-JS: performance concerns. Server Components incompatibility. Zero-runtime era nastała.",
  },
  {
    question: "vanilla-extract — zero-runtime CSS-in-JS dla TypeScript?",
    answer: "vanilla-extract: CSS-in-JS bez runtime overhead (Mark Dalgleish, Seek, 2021). Generuje statyczne CSS w czasie buildu. TypeScript-first. Zero runtime. Scoped styles. Theming. Instalacja: npm install @vanilla-extract/css. Vite plugin: @vanilla-extract/vite-plugin. Next.js: @vanilla-extract/next-plugin. Podstawy: style.css.ts (specjalny plik). import {style, createTheme, createVar} from '@vanilla-extract/css'. const button = style({backgroundColor: 'blue', padding: '8px 16px', borderRadius: '4px', ':hover': {backgroundColor: 'darkblue'}, '@media': {'(min-width: 768px)': {padding: '12px 24px'}}}). Eksportuj klasę, użyj w JSX: button className={button}. Theming: createThemeContract({color: {brand: null, text: null}}). createTheme(contract, {color: {brand: '#0070f3', text: '#333'}}). CSS Variables: createVar(). assignVars(). Recipes (warianty): import {recipe} from '@vanilla-extract/recipes'. const buttonRecipe = recipe({base: {...}, variants: {color: {primary: {...}, secondary: {...}}, size: {small: {...}, large: {...}}}}). buttonRecipe({color: 'primary', size: 'large'}). Sprinkles (@vanilla-extract/sprinkles): utility-first API na vanilla-extract. Definiuj atomic CSS. const sprinkles = createSprinkles(defineProperties({...})). Jak Tailwind ale type-safe. Dessert Stack: vanilla-extract + sprinkles — pełny design system. Wady: tylko build-time styles (nie dynamic props bezpośrednio). Obejście: CSS variables.",
  },
  {
    question: "StyleX — Meta CSS-in-JS dla React i React Native?",
    answer: "StyleX: CSS-in-JS od Meta (Facebook, 2023). Używany w Facebook, Instagram, WhatsApp. Zero-runtime. TypeScript-first. Atomic CSS generation. Instalacja: @stylexjs/stylex + Babel plugin lub webpack plugin. import * as stylex from '@stylexjs/stylex'. Podstawy: const styles = stylex.create({root: {color: 'blue', padding: '8px'}, primary: {backgroundColor: vars.brandColor}}). stylex.props(styles.root, condition && styles.primary) -> {className, style}. Spread do JSX: div {...stylex.props(styles.root)}. Zmienne: const vars = stylex.defineVars({brandColor: {default: '#0070f3', '@media (prefers-color-scheme: dark)': '#60a5fa'}}). Theme tokens: const theme = stylex.createTheme(vars, {brandColor: '#ff0000'}). Wrap komponent z ThemeProvider (ale przez className). Atomic: każda property -> osobna klasa. background-color: blue -> dedykowana klasa. Deduplication — jedna klasa per property. Klasy mogą być mergowane bez konfliktów. Overrides: ostatnia property wins (bez specificity wars). StyleX vs Tailwind: StyleX — TypeScript, type-safe, colocation ze stylem. Tailwind — utility-first, shorter learning, HTML-based. StyleX vs vanilla-extract: StyleX — lepszy dla komponentów React Native (unified). vanilla-extract — lepsze theming, sprinkles. Dla React Native: StyleSheet.create() native. React Native StyleSheet jest bardzo podobny do StyleX. Unified API potencjalnie.",
  },
  {
    question: "Linaria i Panda CSS — inne podejścia zero-runtime?",
    answer: "Linaria: zero-runtime CSS-in-JS (2017, Callstack). styled API jak styled-components. Babel plugin: ekstraktuje CSS w czasie buildu. const Button = styled.button styled.button - color: ${({primary}) => primary ? 'white' : 'black'}; - (backtick). Statyczne wartości -> CSS. Dynamiczne -> CSS variables. Linaria vs vanilla-extract: Linaria — styled-components migration łatwiejsza. vanilla-extract — TypeScript strict. Kaliber: @callstack/linaria, @linaria/react. Panda CSS: utility-first, type-safe, build-time (Segun Adebayo, 2023). Twórca Chakra UI. Jak Tailwind ale type-safe i theme-aware. css({display: 'flex', color: 'blue.500'}). Panda generuje utility classes. Design tokens: tokens.config.ts. Recipes: cva() (Class Variance Authority-inspired). Patterns: stack(), grid(), center(). Instalacja: npm install @pandacss/dev. panda init -> panda.config.ts. PostCSS plugin albo Vite plugin. Output: wygenerowane CSS utility classes. Stitches: type-safe, zero-runtime (podobne do styled-system). Zamrożony development (brak aktywnego maintenance). Mówi się o migracji do vanilla-extract. Linaria vs Emotion migration: API kompatybilny. Zmień import. Zbudowane zostaną statyczne klasy. Performance improvement. Która biblioteka w 2024: Tailwind — dominuje. vanilla-extract — utility (sprinkles) + componenty. StyleX — Facebook apps. Panda — Chakra ecosystem. Emotion/styled-components — legacy, nie nowe projekty.",
  },
  {
    question: "CSS Modules i Tailwind CSS — czy potrzebujesz CSS-in-JS?",
    answer: "CSS Modules: lokalne scope CSS per component. Button.module.css: .button {background: blue}. import styles from './Button.module.css'. button className={styles.button}. Automatyczna unikalna nazwa klasy (hash). Obsługiwane natively w Next.js, Vite, CRA. TypeScript: typescript-plugin-css-modules. Zalety: zero runtime. Full CSS power. Łatwa migracja. Colocated z komponentem. Wady: brak type-safe props. CSS Variables dla dynamiki. Tailwind CSS v4 (2024): Oxide engine (Rust). CSS-first config (@theme directive). Input CSS: @import 'tailwindcss'. @theme {--color-brand: #0070f3}. Brak tailwind.config.js (opcjonalny). Szybszy build. CSS Modules + Tailwind: styles.button + className='mr-4 text-sm' — można łączyć. Jak wybrać w 2024: Tylko Tailwind — szybkie projekty, utility-first devs. CSS Modules — pełna kontrola CSS, zero runtime, prosty. Tailwind + CSS Modules — kombinacja dla złożonych projektów. vanilla-extract — TypeScript strict, design system. StyleX — React Native unification, FB-scale. Emotion/styled-components — legacy, maintenance mode. Tematyzacja: CSS Custom Properties (variables) — uniwersalne. Tailwind: var(--color-brand) w klasie lub @theme. CSS Modules: :root --color. vanilla-extract: createThemeContract(). Design System tips: tokens -> CSS variables. semantic naming (color-primary vs blue-500). dark mode: prefers-color-scheme + CSS variables. ThemeProvider (minimal Context) dla runtime switching.",
  },
];

const cssInJsLibraries = [
  { biblioteka: "Tailwind CSS v4", typ: "Utility-first", runtime: "Zero (build)", typescript: "Dobry", rsc: "Tak", kiedy: "Default 2024, utility classes, fast dev" },
  { biblioteka: "vanilla-extract", typ: "Zero-runtime CSS-in-JS", runtime: "Zero (build)", typescript: "Natywny (strict)", rsc: "Tak", kiedy: "Type-safe design system, TypeScript" },
  { biblioteka: "StyleX", typ: "Zero-runtime CSS-in-JS", runtime: "Zero (build)", typescript: "Natywny", rsc: "Tak", kiedy: "React+RN unified, Meta scale" },
  { biblioteka: "CSS Modules", typ: "Scoped CSS", runtime: "Zero", typescript: "Plugin", rsc: "Tak", kiedy: "Prostota, full CSS, zero deps" },
  { biblioteka: "Linaria", typ: "Zero-runtime styled", runtime: "Zero (babel extract)", typescript: "Dobry", rsc: "Tak", kiedy: "Migracja z styled-components" },
  { biblioteka: "Emotion / styled-components", typ: "Runtime CSS-in-JS", runtime: "Runtime (JS parse)", typescript: "Dobry", rsc: "Ograniczone", kiedy: "Legacy, nie nowe projekty" },
];

export default function BlogCssInJsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSS-in-JS, vanilla-extract, StyleX, Linaria | Fotz Studio"
        description="Ewolucja CSS-in-JS: styled-components, Emotion (runtime) vs vanilla-extract, StyleX, Linaria, Panda CSS (zero-runtime) — porównanie, RSC kompatybilność i…"
        canonicalUrl="https://fotz.pl/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024"

        keywords="CSS-in-JS, vanilla-extract, StyleX, Linaria co to jest, CSS-in-JS, vanilla-extract, StyleX, Linaria definicja, czym jest CSS-in-JS, vanilla-extract, StyleX, Linaria, CSS-in-JS, vanilla-extract, StyleX, Linaria przykłady, jak działa CSS-in-JS, vanilla-extract, StyleX, Linaria, CSS-in-JS, vanilla-extract, StyleX, Linaria znaczenie, CSS-in-JS, vanilla-extract, StyleX, Linaria przewodnik"

        canonical="https://fotz.pl/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024"
      />
      <ArticleSchema
        title="CSS-in-JS, vanilla-extract, StyleX, Linaria — zero-runtime styles 2024?"
        description="6 podejść CSS (Tailwind/vanilla-extract/StyleX/CSS Modules/Linaria/Emotion) — runtime vs zero-runtime, TypeScript, React Server Components i wybór 2024."
        url="https://fotz.pl/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CSS-in-JS Zero Runtime", url: "https://fotz.pl/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "CSS-in-JS Zero Runtime", href: "/blog/css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CSS / Styling
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CSS-in-JS i Zero-Runtime Styling
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Od styled-components i Emotion (runtime) do vanilla-extract, StyleX
              i Linaria (zero-runtime) — ewolucja CSS w React i Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Build-time CSS", value: "vanilla-extract" },
                { label: "Meta scale", value: "StyleX" },
                { label: "Easy migration", value: "Linaria" },
                { label: "Zero runtime", value: "CSS Modules" },
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

      {/* Biblioteki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 podejść do stylowania w React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tailwind, vanilla-extract, StyleX, CSS Modules, Linaria i Emotion —
              runtime overhead, TypeScript i React Server Components compatibility.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">TypeScript</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">RSC</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {cssInJsLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.runtime}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.typescript}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.rsc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <RelatedArticles currentArticleId="css-in-js-vanilla-extract-stylex-linaria-zero-runtime-2024" />
      <ContactSection />
    </Layout>
  );
}
