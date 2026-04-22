import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest React Aria (Adobe) i jak pomaga z dostępnością?",
    answer: "React Aria (Adobe): biblioteka hooks dla dostępności. Nie komponenty — hooki. Pełna ARIA 1.2 conformance. Keyboard navigation. Screen reader support. Focus management. Touch/pointer. Instalacja: npm install react-aria @react-aria/button @react-aria/dialog. Lub: npm install react-aria-components — nowe komponenty (stabilne od v1). react-aria-components: Wbudowane komponenty. Headless — pełna kontrola stylów. Button, Input, Select, ComboBox, Dialog, Modal, DatePicker, ColorPicker, Toast. Przykład Button: import {Button} from 'react-aria-components'. Button className='btn' onPress={handleClick}. Hooki API: useButton(props, ref) — button accessibility. {buttonProps} = useButton({onPress}, ref). Spread buttonProps na element. Dlaczego React Aria: ARIA patterns są skomplikowane. Każdy komponent ma unikalne wymagania. Screen readers (NVDA, VoiceOver) — różne zachowanie. Focus trapping w modals. Keyboard shortcuts. React Aria testowany na prawdziwych screen readerach. Live regions: status announcements. ARIA live. React Aria's toasts. Focus ring: useVisuallyHidden, useFocusRing. Widoczny fokus tylko dla keyboard. Nie dla mouse. :focus-visible CSS. Internationalization (react-intl): @react-aria/i18n. Lokalny format dat. RTL support (arabski, hebrajski). Bidirectional text. Adobe Spectrum (React Spectrum): pełny design system nad React Aria. Gotowe komponenty ze stylem. Spectrum design guidelines.",
  },
  {
    question: "AriaKit — alternatywa React Aria dla dostępnych komponentów?",
    answer: "AriaKit (Reakit rebrand): headless accessible components. Composable — łącz prymitywy. CSR i SSR. TypeScript. Instalacja: npm install @ariakit/react. Komponenty: Button, Checkbox, Combobox, Dialog, Disclosure, Form, Hovercard, Menu, Popover, Radio, Select, Tab, Tooltip. Menu przykład: import {MenuButton, Menu, MenuItem} from '@ariakit/react'. MenuButton render='button'. Menu. MenuItem render={Link href='/profile'}. Menu zamyka się po wybore. Komposycja: render prop — swap wewnętrzny element. Integracja z react-router Link. Integracja z Next.js Link. Tooltip: Tooltip — wraps children. TooltipAnchor. TooltipProvider. Keyboard trigger. Brak na mobilnych (hover nie istnieje). Własne opóźnienie. Dialog i Drawers: Dialog — modal i non-modal. Backdrop. FocusTrap. Escape to close. AriaKit vs React Aria: AriaKit — prymitywy composable. React Aria — hooks-based. React Aria — bogatszy (ColorPicker, DatePicker). AriaKit — prostszy API. Oba: headless, testowane z screen readers. Radix UI (Primitives): headless accessible components. @radix-ui/react-dialog, @radix-ui/react-dropdown-menu. shadcn/ui — nad Radix UI. asChild pattern: Slot component. Przekazuje props do dziecka. Brak wrapping div. Base UI (MUI): nowa, headless. Zbliżone do Radix. Less mature. Park UI: nad Ark UI (Chakra). Headless + styled. Zagnieżdżone ARIA: aria-labelledby zamiast aria-label dla grup.",
  },
  {
    question: "WAI-ARIA patterns — dostępność komponentów React?",
    answer: "WAI-ARIA Authoring Practices Guide (APG): oficjalny przewodnik ARIA. Każdy komponent ma pattern. Keyboard interactions spec. ARIA roles, states, properties. Button pattern: role='button'. Enter i Space = click. aria-pressed dla toggle. aria-disabled (nie disabled — focus zachowany). Dialog pattern: role='dialog'. aria-modal='true'. aria-labelledby heading. FocusTrap — Tab i Shift+Tab w modalu. Escape zamyka. Nie aria-hidden=true na aktywnym modalu. Combobox pattern: input + listbox. aria-haspopup='listbox'. aria-expanded. aria-activedescendant — wskazuje na opcję. Home/End navigacja. Tab tree: role='tree'. aria-expanded na gałęziach. Strzałki nawigacja. aria-selected. Tabs: role='tablist'. role='tab'. aria-selected='true'. role='tabpanel'. Keyboard: strzałki między tabami. Data tables: scope='col', scope='row'. caption. headers attr dla złożonych tabel. summary (deprecated). Focus management: useRef na pierwszy interaktywny element. focus() po otwarciu modala. Zwróć focus do triggera po zamknięciu. Live regions: role='status' — uprzejme ogłoszenia. role='alert' — pilne. aria-live='polite'. aria-live='assertive'. Brak nadużywania — denerwuje. Color contrast: WCAG AA: 4.5:1 (tekst normalny). 3:1 (tekst duży, UI). WCAG AAA: 7:1. Narzędzia: axe-core, Lighthouse, WAVE. Prefers-color-scheme: dark mode. Prefers-reduced-motion: brak animacji.",
  },
  {
    question: "Testowanie dostępności — axe-core, jest-axe i screen reader testing?",
    answer: "axe-core: automatyczne testy dostępności. Deque Systems. Najpopularniejszy engine. jest-axe: jest + axe-core. import {axe, toHaveNoViolations} from 'jest-axe'. expect.extend(toHaveNoViolations). const results = await axe(container). expect(results).toHaveNoViolations(). Co wykrywa: brakujące alt text. Brak label na form. Kontrast kolorów. Brak lang na html. Aria roles. Puste linki. Storybook a11y addon: @storybook/addon-a11y. Automatyczne axe per story. A11y panel. Violations, warnings. CI: storybook test-runner + a11y. Playwright a11y: import {checkA11y} from 'axe-playwright'. await checkA11y(page). Dla E2E testów. Lighthouse CI: automatyczny Lighthouse. Accessibility score. lighthouse-ci w GitHub Actions. Manualne testowanie screen readerów: VoiceOver (macOS/iOS) — CMD+F5. NVDA (Windows) — darmowy, Chrome/Firefox. JAWS (Windows) — komercyjny, najpopularniejszy. TalkBack (Android). Orca (Linux). Jak testować: uruchom screen reader. Zamknij oczy. Nawiguj przez Tab. Sprawdź logiczną kolejność. Słuchaj announcementów. Sprawdź formularze. Sprawdź modal focus. Keyboard-only testing: odłącz mysz. Nawiguj tylko Tab, Strzałki, Enter, Escape. Sprawdź focus visibility. Sprawdź focus order. Brak focus traps (poza modalami). Kontrast: Color Contrast Analyzer (narzędzie). Chrome DevTools - accessibility panel. WCAG Color Contrast Checker - online. Polecane narzędzia: axe Browser Extension. WAVE Extension. Accessibility Insights (Microsoft). IBM Equal Access Checker.",
  },
  {
    question: "Implementacja dostępności w React — praktyczny przewodnik?",
    answer: "Skip link: a href='#main' className='skip-link'. Omijaj nawigację dla keyboard. Widoczny przy focus. Przenosi fokus do main. Semantyczny HTML: header, nav, main, article, footer, aside, section. h1-h6 hierarchia. ul, ol, li. button zamiast div onClick. Nie div role='button' bez potrzeby. img alt='': opisowy alt text. Dekoracyjne: alt=''. Kompleksowe: aria-describedby. Formularze: label htmlFor='input-id'. lub label wrapping input. aria-required='true'. aria-invalid={!!error}. aria-describedby='error-id'. error-id span z komunikatem. Fokus: useFocusRing (React Aria). :focus-visible CSS. outline: 2px solid blue. Nie outline: none!. Animacje: useReducedMotion (Framer Motion). @media (prefers-reduced-motion). prefers-reduced-motion: reduce -> brak animacji. Kolory: nie kolor jedynym znacznikiem. Ikona + tekst + kolor. error: czerwony + ikona + tekst. Custom select: Radix Select lub React Aria Select. Nie native select z custom styling. Native select w CSS — trudny. Skip to content pattern. Landmark regions: header, nav, main, footer — automatyczne landmarks. role='search' dla formy wyszukiwania. role='banner' (header). role='contentinfo' (footer). Aria labels: aria-label='Close dialog'. aria-labelledby='heading-id'. aria-describedby='description-id'. Brak aria-label na elementy z visible text — powielenie. Loading state: aria-busy='true'. aria-live='polite'. Spinner — aria-label='Loading...'. Toast notifications: role='status'. Lub react-hot-toast (dostępny). Pozycja poza viewport nie przeszkadza. aria-atomic='true'.",
  },
];

const a11yLibraries = [
  { biblioteka: "react-aria-components", vendor: "Adobe", podejscie: "Headless components", kiedy: "DatePicker, ColorPicker, kompleksowe componenty" },
  { biblioteka: "@ariakit/react", vendor: "Ariakit", podejscie: "Composable primitives", kiedy: "Menu, Dialog, Tabs — kompozycja" },
  { biblioteka: "@radix-ui/react-*", vendor: "WorkOS", podejscie: "Headless primitives", kiedy: "shadcn/ui, custom design systems" },
  { biblioteka: "jest-axe", vendor: "jest + axe-core", podejscie: "Auto testing", kiedy: "Unit testy a11y w Jest/Vitest" },
  { biblioteka: "@storybook/addon-a11y", vendor: "Storybook", podejscie: "Component a11y testing", kiedy: "Testy a11y per story w Storybook" },
  { biblioteka: "Base UI (@mui)", vendor: "MUI", podejscie: "Headless primitives", kiedy: "Alternatywa Radix, MUI ecosystem" },
];

export default function BlogReactAriaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="React Aria, AriaKit i WCAG | Fotz Studio"
        description="React Aria (Adobe headless hooks), AriaKit (composable primitives), WAI-ARIA patterns, jest-axe (testowanie a11y), screen reader testing i WCAG 2.1…"
        canonicalUrl="https://fotz.pl/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024"

        keywords="React Aria, AriaKit i WCAG co to jest, React Aria, AriaKit i WCAG jak działa, React Aria, AriaKit i WCAG tutorial, React Aria, AriaKit i WCAG przykład, czym jest React Aria, AriaKit i WCAG, React Aria, AriaKit i WCAG dokumentacja, React Aria, AriaKit i WCAG przewodnik"

        canonical="https://fotz.pl/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024"
      />
      <ArticleSchema
        title="React Aria, AriaKit i WCAG — dostępność komponentów React a11y 2024?"
        description="6 bibliotek a11y (react-aria/AriaKit/Radix UI/jest-axe/Storybook a11y/Base UI) — WAI-ARIA patterns, screen reader testing i praktyczna implementacja dostępności w React."
        url="https://fotz.pl/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "React Aria i dostępność a11y", url: "https://fotz.pl/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "React Aria i dostępność a11y", url: "/blog/react-aria-ariakit-wcag-dostepnosc-a11y-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Accessibility / WCAG
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              React Aria i dostępność (a11y)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              React Aria (Adobe headless hooks), AriaKit (composable primitives), WAI-ARIA patterns,
              jest-axe i testowanie screen reader — WCAG 2.1 w React.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Adobe hooks", value: "React Aria" },
                { label: "Composable", value: "AriaKit" },
                { label: "Auto testing", value: "jest-axe" },
                { label: "ARIA spec", value: "WAI-ARIA" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek dostępności React — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              react-aria, AriaKit, Radix UI, jest-axe, Storybook a11y i Base UI —
              vendor, podejście i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Vendor</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {a11yLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.vendor}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.podejscie}</td>
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

      <RelatedArticles currentArticleId="react-aria-ariakit-wcag-dostepnosc-a11y-react-2024" />
      <ContactSection />
    </Layout>
  );
}
