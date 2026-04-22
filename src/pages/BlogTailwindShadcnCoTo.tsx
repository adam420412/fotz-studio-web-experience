import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Tailwind CSS i dlaczego jest popularny?",
    answer: "Tailwind CSS: utility-first CSS framework (Adam Wathan, 2017). Zamiast pisać CSS klasy semantyczne (.card, .btn-primary), używasz utility klas bezpośrednio w HTML. Filozofia: utility-first (nie component-based jak Bootstrap). Atomic CSS — jedna klasa, jeden styl. Tailwind przykład: div className='flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow'. Zalety Tailwind: brak context switching (HTML+CSS razem). Brak konfliktu klas (globalne CSS problemy). PurgeCSS built-in (tylko użyte klasy w bundlu). Spójny design system (spacing scale, colors, etc). Responsive: md:flex lg:hidden. Dark mode: dark:bg-gray-800. Wady: długie klasy (ugly HTML). Krzywa uczenia się (zapamiętywanie klas). Tailwind v4 (2025): CSS-first config (@theme block w CSS zamiast tailwind.config.js). Oxide engine (Lightning CSS, Rust). Zero-config. Automatyczne content detection. @theme {--color-primary: #3b82f6;}. @layer utilities i components. Plugin API nowe. Instalacja: npm install tailwindcss @tailwindcss/vite. Tailwind plugins: @tailwindcss/forms, @tailwindcss/typography (prose class), @tailwindcss/aspect-ratio, @tailwindcss/container-queries. Tailwind merge (twMerge/clsx/cn): cn('base classes', conditional && 'extra') — merge bez konfliktu. Headless UI: animacje bez stylów (Tailwind Labs). Radix UI: prymitywy dostępności + Tailwind.",
  },
  {
    question: "shadcn/ui — co to jest i jak różni się od tradycyjnych UI libraries?",
    answer: "shadcn/ui (Shadcn, 2023): NIE jest biblioteka (npm package). Kolekcja re-używalnych komponentów kopiowanych do projektu. Bazuje na Radix UI (primitives) + Tailwind CSS. Filozofia: posiadasz kod komponentów. Customizacja bez override hacków. Nie update biblioteki — modyfikujesz lokalnie. Instalacja komponentu: npx shadcn-ui@latest add button. Kopiuje Button.tsx do projektu. Jak działa: Radix UI — behavior (accessibility, keyboard nav, ARIA). Tailwind — styl. cn() — merge klas wariantów. class-variance-authority (cva) — warianty komponentów. Dostępne komponenty: Button, Input, Form, Select, Dialog, Dropdown, Toast, Table, Card, Badge, Avatar, Command (command palette), Calendar, Date Picker, Combobox, DataTable (TanStack Table). Warianty z cva: buttonVariants({variant: 'outline', size: 'sm'}). Kustomizacja: edytuj lokalny plik. Dodaj własne warianty. Zmień kolory (CSS variables w globals.css). Theming: CSS variables dla dark/light mode. --background, --foreground, --primary, --secondary. Automatyczne dark mode. Popularne alternatywy: Radix Themes — styled Radix UI. Mantine — React components z hookes. Chakra UI — accessible component library. Ant Design — enterprise UI. MUI (Material UI) — Google Material Design.",
  },
  {
    question: "CSS Modules vs CSS-in-JS vs Utility-first — kiedy co wybrać?",
    answer: "CSS Modules: lokalne scopy CSS per plik. styles.module.css + className={styles.container}. Zero runtime overhead. TypeScript support (typed-css-modules). Zalety: familiar CSS, zero JS overhead. Wady: brak dynamic styling (wartości z JS trudne). Verbose import. CSS-in-JS (styled-components, Emotion): CSS w JavaScript. Dynamiczne style (props). Template literals. Runtime overhead (styled-components wstrzykuje style). Zero-runtime CSS-in-JS: Linaria, Vanilla Extract, PandaCSS, StyleX (Facebook). Kompilowane do statycznego CSS. Brak runtime overhead. TypeScript first. Vanilla Extract: CSS typowane w TypeScript. style() — static styles. styleVariants() — warianty. recipe() — cva-like API. Kompilowany do CSS. Zero runtime. StyleX (Facebook): scoped styles jak CSS Modules. Zero-runtime. Collision-free. Statically extracted. Używane przez Meta wewnętrznie. UnoCSS: atomic CSS engine (Vite ecosystem). Preset Tailwind/Wind, Windi, Icons. Szybszy niż Tailwind (on-demand). Tailwind vs Bootstrap 5: Tailwind — utility classes, własny design. Bootstrap — komponenty gotowe, opinionated. Tailwind dla custom design. Bootstrap dla szybkiego prototypu z domyślnym wyglądem. Rekomendacja 2024: SPA/Next.js + Tailwind + shadcn/ui. Lub Tailwind + Radix UI + Headless UI. CSS Modules dla legacy i narzut zero. Vanilla Extract dla type-safe, zero-runtime. CSS-in-JS runtime unikaj w SSR/RSC.",
  },
  {
    question: "Radix UI i Headless UI — komponenty bez stylów i dostępność?",
    answer: "Headless UI components: behavior i accessibility bez stylów. Keyboard navigation wbudowana. ARIA attributes. Focus management. Ty dodajesz style (Tailwind lub inne). Radix UI (WorkOS): prymitywy dla React. @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-select. W pełni dostępny (WAI-ARIA). Unstyled — dodajesz Tailwind. shadcn/ui bazuje na Radix UI. Headless UI (Tailwind Labs): Dialog, Disclosure, Menu, Listbox, Switch, Tabs, Combobox, Transition. Tailwind companion. Komp: Combobox — custom select z wyszukiwaniem. Mantine: React components z wbudowanymi hookami (useMantine*). Własny theme system. form handling. Notification system. Rich text editor. Kalendarz. Motyw light/dark. Bundle size większy niż shadcn/ui. Chakra UI: accessible, theme-able React components. Design tokens. Hooks: useDisclosure, useBreakpointValue. Emotion pod spodem (CSS-in-JS runtime). Wersja v3 2024 — mniejszy bundle. Accessible components best practices: focus-visible: outline. aria-label dla ikon bez tekstu. role='button' tylko gdy nie ma button elementu. Dialog: focus trap. Live regions (aria-live) dla dynamic content. Keyboard: Escape zamyka modal. Tab cycle w dialogu. Enter aktywuje button.",
  },
  {
    question: "Tailwind CSS v4 i ekosystem 2024 — co nowego?",
    answer: "Tailwind CSS v4 nowości: Oxide engine: Rust-based (Lightning CSS). 5-10x szybszy build. CSS-first configuration (tailwind.config.ts zastąpiony przez CSS). @import 'tailwindcss' w CSS startuje całość. @theme directive w CSS zamiast JSON config. Automatic content detection (nie trzeba content: paths). Nowe utility klasses: text-shadow-*, mask-*, mix-blend-*, in-* variant (CSS @starting-style). Container queries: @container + @lg:grid-cols-2. Starting style animations: @starting-style — animacje przy pojawieniu elementu. Composable variants: group-has-*, peer-not-*, in-data-*. Gradient: bg-linear-* (multi-stop). P3 wide gamut colors. Tailwind v4 alpha -> beta -> stable 2025. Ekosystem narzędzi 2024: Prettier plugin dla Tailwind (sortuje klasy automatycznie). eslint-plugin-tailwindcss (lint klasy). Tailwind CSS IntelliSense (VSCode extension). Heroicons (ikony od Tailwind Labs). Catalyst (paid component kit od Tailwind Labs). tw-merge / tailwind-merge: bezpieczne mergowanie klas Tailwind. Eliminacja konfliktu (np. bg-red-500 + bg-blue-500 -> ostatni wygrywa). Używane w shadcn/ui (cn() function). clsx + twMerge = cn(). Figma do Tailwind: Figma plugin kopiujący Tailwind classes. Supernova.io dla design tokens.",
  },
];

const uiLibraries = [
  { biblioteka: "Tailwind CSS", styl: "Utility-first", runtime: "Zero (PurgeCSS)", customizacja: "Pełna", dostepnosc: "Manualna", kiedy: "Custom design, Vite/Next.js projekty" },
  { biblioteka: "shadcn/ui", styl: "Radix UI + Tailwind", runtime: "Zero", customizacja: "Pełna (kod w projekcie)", dostepnosc: "Radix UI (ARIA)", kiedy: "Next.js, owny kod komponentów" },
  { biblioteka: "Mantine", styl: "CSS variables + Tailwind", runtime: "Mały", customizacja: "Theme system", dostepnosc: "Wbudowana", kiedy: "Rich components, form handling" },
  { biblioteka: "MUI (Material)", styl: "Emotion CSS-in-JS", runtime: "Duży (Emotion)", customizacja: "sx prop / theme", dostepnosc: "Dobra", kiedy: "Google Material Design, enterprise" },
  { biblioteka: "Chakra UI v3", styl: "CSS variables", runtime: "Mały (v3)", customizacja: "Design tokens", dostepnosc: "Wbudowana", kiedy: "Accessible SPA, design system" },
  { biblioteka: "Ant Design", styl: "CSS-in-JS (v5)", runtime: "Duży", customizacja: "Token system", dostepnosc: "Dobra", kiedy: "Enterprise, adminy, China ecosystem" },
];

export default function BlogTailwindShadcnCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Tailwind CSS, shadcn/ui, Radix UI, Mantine | Fotz Studio"
        description="Tailwind CSS v4, shadcn/ui, Radix UI, Mantine, MUI — porównanie bibliotek UI React, utility-first vs CSS-in-JS, headless components i kiedy co wybrać."
        canonical="https://fotz.pl/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024"

        keywords="Tailwind CSS, shadcn/ui, Radix UI, Mantine co to jest, Tailwind CSS, shadcn/ui, Radix UI, Mantine jak działa, Tailwind CSS, shadcn/ui, Radix UI, Mantine tutorial, Tailwind CSS, shadcn/ui, Radix UI, Mantine przykład, czym jest Tailwind CSS, shadcn/ui, Radix UI, Mantine, Tailwind CSS, shadcn/ui, Radix UI, Mantine dokumentacja, Tailwind CSS, shadcn/ui, Radix UI, Mantine przewodnik"

        canonical="https://fotz.pl/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024"
      />
      <ArticleSchema
        title="Tailwind CSS, shadcn/ui, Radix UI, Mantine — biblioteki UI React 2024?"
        description="6 UI libraries (Tailwind/shadcn/Mantine/MUI/Chakra/Ant Design) — utility-first, headless components, ARIA dostępność, CSS-in-JS vs zero-runtime, kiedy co wybrać."
        url="https://fotz.pl/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Tailwind CSS i shadcn/ui", url: "https://fotz.pl/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Tailwind CSS i shadcn/ui", url: "/blog/tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Frontend / CSS
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tailwind CSS i biblioteki UI React
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Tailwind v4, shadcn/ui, Radix UI i Mantine — utility-first CSS,
              headless components, zero-runtime styling i dostępność ARIA.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Utility-first", value: "Tailwind v4" },
                { label: "Kopiowalny kod", value: "shadcn/ui" },
                { label: "Headless ARIA", value: "Radix UI" },
                { label: "Rich components", value: "Mantine" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek UI dla React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tailwind, shadcn/ui, Mantine, MUI, Chakra i Ant Design — każda biblioteka
              reprezentuje inny kompromis między customizacją, runtime a dostępnością.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Styl</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Runtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Customizacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Dostępność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {uiLibraries.map((u, i) => (
                  <tr key={u.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{u.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{u.styl}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{u.runtime}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{u.customizacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{u.dostepnosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{u.kiedy}</td>
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

      <RelatedArticles currentArticleId="tailwind-css-shadcn-ui-radix-mantine-biblioteki-ui-react-2024" />
      <ContactSection />
    </Layout>
  );
}
