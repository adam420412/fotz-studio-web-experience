import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Storybook 8 i co nowego wprowadza?",
    answer: "Storybook 8 (2024): major release z nowymi funkcjami. Component Driven Development (CDD) — buduj UI izolowanie. Nowe w v8: Vitest addon — testy w Storybook. First-class Vite support. Improved RSC support. Visual tests integracja. Snappy dev server. Instalacja: npx storybook@latest init. Automatyczna detekcja frameworka. Konfiguracja Vite + React: .storybook/main.ts. framework: '@storybook/react-vite'. addons: ['@storybook/addon-essentials']. Vite config — używa vite.config.ts. CSF 3 (Component Story Format 3): import type {Meta, StoryObj} from '@storybook/react'. const meta = {component: Button, title: 'UI/Button'} satisfies Meta(typeof Button). export default meta. type Story = StoryObj(typeof meta). export const Primary: Story = {args: {label: 'Click me', variant: 'primary'}}. args — reusable, composable. Brak template — args wystarczy. Dekoartory: decorators: [(Story) => div style={{padding: '1rem'}} Story() /div]. Global decorators w preview.tsx. Parameters: parameters: {backgrounds: {default: 'dark'}}. layout: 'centered'. viewport. a11y: wyłącz/włącz. Play functions (interaction testing): play: async ({canvasElement}) => { const canvas = within(canvasElement). await userEvent.click(canvas.getByRole('button')). await expect(canvas.getByText('Clicked!')).toBeInTheDocument() }. Automatyczne testy w Storybook UI. Run tests w CI bez browser.",
  },
  {
    question: "Storybook addons — essentials, a11y, interactions i visual tests?",
    answer: "@storybook/addon-essentials: paczka głównych addonów. Controls — args editing w UI. Actions — event logging. Viewport — device sizes. Backgrounds — background colors. Docs — auto-generated docs. Outline — layout debugging. Toolbars & Globals. @storybook/addon-a11y: accessibility testing. axe-core pod spodem. A11y panel w Storybook. Violations, incomplete, passes. Automatycznie dla każdej stories. Integracja z play functions. @storybook/addon-interactions: visual debugger dla play functions. Step przez step. Pause, rewind. Timeline UI. Krok debugowania jak DevTools. @storybook/test (Vitest integration): run stories jako Vitest tests. Portable stories — stories w Vitest. import {composeStories} from '@storybook/react'. const {Primary} = composeStories(stories). renderStory(Primary) — w Vitest. Visual regression z Chromatic: npm install chromatic. npx chromatic --project-token=xxx. Upload Storybook. Pixel-by-pixel comparison. PR checks. Automatyczna detekcja zmian UI. Storybook Test Runner: npm install @storybook/test-runner. npx test-storybook. Uruchamia play functions w Playwright. Headless CI. Snapshot testing: @storybook/addon-storyshots (legacy). Teraz: Vitest snapshot + portable stories. @storybook/addon-themes: dark/light mode toggle. Theme switching w UI. Integration z ThemeProvider. MSW addon: msw-storybook-addon. Mockowanie API w Storybook. initialize(worker) w preview.ts. handlers per story.",
  },
  {
    question: "Storybook — autodocs i dokumentacja komponentów?",
    answer: "Autodocs: automatyczna dokumentacja z TypeScript. tags: ['autodocs'] w meta. Generuje Docs page ze stories. Props table z TypeScript inference. JSDoc komentarze = opisy props. Argstypes: argTypes: {variant: {control: 'select', options: ['primary', 'secondary']}. description: 'Visual style'. table: {defaultValue: {summary: 'primary'}}}. Kontrolki UI dla props. Dokumentacja składni: JSDoc: /** @param variant - Visual style of button */. TypeScript interface — auto-parse. Storybook rozumie PropTypes (legacy). MDX docs: Button.mdx: import {Canvas, Story, Controls} from '@storybook/blocks'. Mieszaj prose z stories. # Button. Canvas story='Primary'. Controls. Stories hierarchy: title: 'Components/Forms/Button' — grupy. Brak title = auto-naming (CSF 3). Folder structure = hierarchy. Docs tylko mode: npm run storybook -- --docs. Tylko docs mode, nie dev. Deploy: npm run build-storybook. Statyczny HTML. Chromatic hosting. GitHub Pages. Storybook native dark mode: @storybook/addon-themes. ThemeProvider wrapper. useGlobals hook. Iframe isolation: każda story w iframe. Brak global CSS leak. CSS modules automatyczne. Storybook + TypeScript strict: tsconfig storybook. Extends główny tsconfig. JSX: 'react-jsx'. Strict: true. Storybook 8 performance: Lazy story loading. Vite HMR — szybkie przeładowanie. Leniwy bundle. Dev server szybki start.",
  },
  {
    question: "Component-Driven Development (CDD) — metodologia?",
    answer: "Component-Driven Development: buduj od dołu do góry. Atoms -> Molecules -> Organisms -> Pages. Brad Frost Atomic Design. Izolacja komponentów: brak kontekstu aplikacji. Tylko props i state. Mocking external dependencies. Story-first approach: zanim feature — story. Edge cases jako stories. Loading states. Error states. Empty states. Success states. Design tokens: Figma tokens + Storybook. @storybook/addon-design — Figma embed w Storybook. Token z design system. CSS custom properties. Design System workflow: Figma -> Tokens -> Storybook. Chromatic dla visual review. Projektant + developer workflow. Storybook jako living documentation: zawsze aktualne (z kodem). Single source of truth. Onboarding nowych devów. Nie PowerPoint — kod. Wspólny language z designem. Testing pyramid w CDD: Component unit tests (Vitest). Component integration (play functions). E2E (Playwright) — rzadko per component. Visual regression (Chromatic). CI workflow: build Storybook -> test-storybook (play functions) -> Chromatic (visual). Storybook z Next.js App Router: @storybook/nextjs framework. next/image, next/font, next/navigation mocked. RSC support (preview). Experimental RSC mode. Storybook + Tailwind: postcss configuration. Full Tailwind support. cn() utility. Dark mode class. viewport breakpoints. Composite stories: spread args z innych stories. const Disabled: Story = {args: {...Primary.args, disabled: true}}. Reuse bez powtarzania.",
  },
  {
    question: "Storybook w Next.js, monorepo i design system?",
    answer: "Storybook w Next.js: @storybook/nextjs. Automatyczna konfiguracja. next/image — lokalny provider. next/link — in-memory router. useRouter mock. next/font — self-hosted. next/navigation — mock. Importy @/ — aliasy jak w aplikacji. Monorepo (Turborepo/Nx): packages/ui — component library. apps/web — main app. apps/storybook — lub w packages/ui. .storybook/main.ts stories: ['../packages/ui/src/**/*.stories.tsx']. Shared design tokens. Storybook Composition: combineConfigs — merge multiple Storybook instances. Micro-frontend Storybooks. Jeden root Storybook. Design System package: packages/design-system. Button, Input, Card, Modal. TypeScript + Storybook. Publish do npm lub GitHub Packages. Chromatic Design System mode. Accessibility workflow: Run @storybook/addon-a11y na każdej PR. Fix violations. WCAG 2.1 AA baseline. Color contrast checks. Focus management stories. Screen reader stories. Keyboard navigation stories. Storybook Figma integration: @storybook/addon-designs. Figma embed w addon panel. Link Figma frame per story. Design-to-code comparison. Token pipeline: Figma Tokens plugin -> tokens.json -> CSS vars -> Storybook. Versioning design system: Chromatic snapshot history. Storybook changelog. Storybook jako E2E target: Playwright navigate do Storybook URL. Test rendered stories. Dobra izolacja. Szybsze niż full app. Continuous deployment Storybook: GitHub Actions -> Chromatic. PR status check. Design review step.",
  },
];

const storybookAddons = [
  { addon: "@storybook/addon-essentials", funkcja: "Controls, Actions, Viewport, Backgrounds, Docs", kategoria: "Core", wymagany: "Tak" },
  { addon: "@storybook/addon-a11y", funkcja: "Accessibility testing (axe-core)", kategoria: "Testing", wymagany: "Zalecany" },
  { addon: "@storybook/addon-interactions", funkcja: "Play function debugger, timeline", kategoria: "Testing", wymagany: "Play functions" },
  { addon: "@storybook/test-runner", funkcja: "CI runner dla play functions (Playwright)", kategoria: "CI/CD", wymagany: "CI testing" },
  { addon: "chromatic", funkcja: "Visual regression testing, hosting", kategoria: "Visual Testing", wymagany: "Design systems" },
  { addon: "@storybook/addon-themes", funkcja: "Dark/light mode, ThemeProvider toggle", kategoria: "Theming", wymagany: "Multi-theme apps" },
];

export default function BlogStorybook8CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Storybook 8 — CSF 3, Vitest addon, autodocs i Component-Driven Development 2024 | Fotz.pl"
        description="Storybook 8 (CSF 3, Vitest integration, Vite), addon-a11y, addon-interactions (play functions), Chromatic (visual regression), autodocs i Component-Driven Development metodologia."
        canonicalUrl="https://fotz.pl/blog/storybook-8-csf-vitest-autodocs-chromatic-component-driven-2024"
      />
      <ArticleSchema
        title="Storybook 8 — CSF 3, Vitest addon, autodocs i Component-Driven Development 2024?"
        description="6 addonów Storybook (essentials/a11y/interactions/test-runner/Chromatic/themes) — CSF 3, play functions, visual regression testing i Component-Driven Development workflow."
        url="https://fotz.pl/blog/storybook-8-csf-vitest-autodocs-chromatic-component-driven-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Storybook 8 i CDD", url: "https://fotz.pl/blog/storybook-8-csf-vitest-autodocs-chromatic-component-driven-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Storybook 8 i CDD", href: "/blog/storybook-8-csf-vitest-autodocs-chromatic-component-driven-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / Storybook / Design Systems
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Storybook 8 i Component-Driven Development
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              CSF 3, Vitest integration, play functions, autodocs, Chromatic visual regression
              i CDD metodologia — nowoczesny development komponentów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Story format", value: "CSF 3" },
                { label: "Interaction tests", value: "Play fns" },
                { label: "Visual tests", value: "Chromatic" },
                { label: "Auto docs", value: "Autodocs" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 addonów Storybook — funkcje i zastosowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              essentials, a11y, interactions, test-runner, Chromatic i themes —
              funkcja, kategoria i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Addon</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kategoria</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wymagany</th>
                </tr>
              </thead>
              <tbody>
                {storybookAddons.map((a, i) => (
                  <tr key={a.addon} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{a.addon}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.kategoria}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.wymagany}</td>
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
