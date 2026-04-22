import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Vitest i dlaczego zastępuje Jest w projektach Vite?",
    answer: "Vitest: test runner stworzony przez Evan You (twórca Vite, 2022). Zaprojektowany jako drop-in replacement dla Jest w projektach Vite/esbuild. Dlaczego Vitest zamiast Jest: Jest używa Babel do transformacji — wolny. Vitest używa esbuild — 10-100x szybszy cold start. Vite config sharing — nie potrzebujesz osobnej konfiguracji dla testów. Natywny ESM support (Jest ma problemy z ESM). TypeScript out-of-the-box bez konfiguracji. Vitest API: kompatybilny z Jest (describe, test, it, expect, vi. beforeEach, afterEach, beforeAll, afterAll). vi.fn() — mock functions (jak jest.fn()). vi.mock() — module mocking. vi.spyOn() — spy na metodach. vi.useFakeTimers() — fake timers. Vitest features: Concurrent tests domyślnie. Watch mode HMR (instant test updates). UI mode (vitest --ui) — przeglądarka z wynikami. Coverage (v8 lub istanbul): vitest run --coverage. In-source testing — testy w tym samym pliku co kod. Snapshot testing. Vitest config (vitest.config.ts): environment: 'jsdom' lub 'happy-dom' (szybszy) dla DOM testów. setupFiles, globals, alias. React Testing Library: @testing-library/react — renderowanie komponentów. @testing-library/user-event — symulacja interakcji użytkownika. Queries: getByRole, findByText, queryByLabelText. Vitest + React: screen.getByText, fireEvent, userEvent.click, waitFor.",
  },
  {
    question: "Playwright — end-to-end testing, co to jest i jak działa?",
    answer: "Playwright: end-to-end testing framework (Microsoft, 2020). Chromium, Firefox i WebKit (Safari) — jeden API. Zaprojektowany do zastąpienia Selenium i Puppeteer. Zalety Playwright: Auto-wait: czeka na elementy automatycznie (bez sleep()). Multiple browsers w jednym teście. Network interception (mockowanie API). Mobile emulation. Screenshot i video recording. Playwright API: const {chromium} = require('playwright'). browser = await chromium.launch(). page = await browser.newPage(). await page.goto('https://example.com'). await page.click('text=Login'). await page.fill('#email', 'user@test.pl'). await expect(page).toHaveURL('/dashboard'). Playwright Test (wbudowany test runner): test('should login', async ({page}) => {...}). Fixtures: {page, browser, context, request}. expect(page).toHaveTitle(). expect(page.locator('h1')).toBeVisible(). Locators: page.getByRole('button', {name: 'Submit'}). page.getByText('Witaj'). page.getByLabel('Email'). page.getByPlaceholder('Wpisz email'). page.getByTestId('submit-btn'). Test Isolation: każdy test dostaje nową przeglądarke (context). Czysty state. Playwright Config: playwright.config.ts. projects: chromium, firefox, webkit. baseURL. retries: 2. workers: 4.",
  },
  {
    question: "Playwright vs Cypress — kiedy co wybrać do E2E testów?",
    answer: "Cypress: najpopularniejszy E2E framework (2014). JavaScript/TypeScript. Chrome-family browser (nie Firefox, nie Safari natywnie w open source). Zalety Cypress: Time-travel debugging (snapshots per step). Automatic waiting. Network stubbing (cy.intercept). Excellent DX, świetna dokumentacja. Cypress Dashboard (paid). Wady Cypress: Brak multi-tab support. Brak Firefox/WebKit w open source. Iframe support ograniczony. Nie działa z WebKit (Safari) bez Cypress Cloud. Playwright: Multi-browser (Chrome, Firefox, WebKit). Multi-tab/Multi-window. Testy równoległe out-of-the-box. Szybszy dla dużych suites (parallel). API request testing (APIRequestContext). Network mocking. Accessibility testing (axe). Playwright vs Cypress: Playwright — multi-browser, parallel, MS support, open source (Apache 2). Cypress — lepszy DX dla małych projektów, time-travel, Dashboard. Playwright dla: duże aplikacje z multi-browser wymaganiem. Safari testing krytyczne. Parallel execution ważne. Cypress dla: szybki start, mały zespół, Chrome-only ok. Playwright Codegen: npx playwright codegen https://example.com. Nagrywanie akcji -> generowanie kodu. Playwright Inspector: debugging tool. Playwright Trace Viewer: timeline z screenshots.",
  },
  {
    question: "Testing pyramid — unit, integration i E2E testy, jak zbalansować?",
    answer: "Testing Pyramid (Mike Cohn): Unit tests (dół) — szybkie, wiele, tanie. Integration tests (środek) — wolniejsze, mniej. E2E tests (góra) — wolne, nieliczne, drogie. Unit tests: pojedyncze funkcje/komponenty. Vitest + React Testing Library. Szybkie (milisekundy). Brak zewnętrznych zależności. Mockowanie dependencji. Integration tests: kilka modułów razem. API routes z bazą danych. MSW (Mock Service Worker) dla HTTP. Supertest dla Express/Fastify. E2E tests: pełna aplikacja w przeglądarce. Playwright lub Cypress. Prawdziwe serwery lub staging. Wolne (sekundy/minuty). Modern Testing Trophy (Kent C. Dodds): Static analysis (ESLint, TypeScript) — najtańsze. Unit tests. Integration tests (więcej niż unit). E2E tests (mniej niż integration). Rekomendacja: 70% integration, 20% unit, 10% E2E. MSW (Mock Service Worker): mockowanie HTTP na poziomie Service Worker. Działa w przeglądarce i Node.js. Realistyczne mocks — nie mockujesz modułu ale HTTP layer. setupServer dla Node.js. setupWorker dla przeglądarki. Vitest UI: localhost:51204 (domyślny). Graficzny view testów. Re-run per test. Coverage visualization. Test ID attributes: data-testid='...' — dobra praktyka dla E2E. getByTestId — Playwright i Testing Library.",
  },
  {
    question: "Storybook — co to jest i jak wspiera testowanie komponentów?",
    answer: "Storybook: narzędzie do izolowanego developmentu komponentów UI. Component Driven Development (CDD). Każdy komponent w izolacji — bez kontekstu aplikacji. Stories: warianty komponentu (różne props, states). Storybook 7/8: CSF 3 (Component Story Format). const meta = {component: Button, args: {label: 'Kliknij'}}. export const Primary = {args: {variant: 'primary'}}. export const Disabled = {args: {disabled: true}}. Storybook addons: @storybook/addon-interactions — interaktywne testy w stories. @storybook/addon-a11y — accessibility testing. @storybook/addon-docs — dokumentacja z stories. @storybook/test — vitest/jest w stories. Chromatic: visual regression testing (od twórców Storybook). Screenshot porównanie per komponent. Review UI changes w PR. Automatyczne detekcja zmian wizualnych. Alternatywa: Percy, Applitools Eyes. Storybook Play functions: play: async ({canvasElement}) => {await userEvent.click(canvas.getByRole('button')). await expect(canvas.getByText('Kliknięty')).toBeInTheDocument()}. Portable Stories: import story do Vitest testu. Spójność Storybook i unit tests. Storybook + Next.js: @storybook/nextjs. Automatic mock dla next/image, next/link, next/router. Nowe projekty: Vite + Vitest + Playwright + Storybook to solidny testing stack 2024.",
  },
];

const testingTools = [
  { narzedzie: "Vitest", typ: "Unit / Integration", jezyk: "TypeScript", integracja: "Vite native", szybkosc: "Bardzo szybki (esbuild)", kiedy: "Projekty Vite/Nuxt, zamiennik Jest" },
  { narzedzie: "Jest", typ: "Unit / Integration", jezyk: "JS / TS", integracja: "Babel/SWC", szybkosc: "Wolniejszy (Babel)", kiedy: "Istniejące projekty, React CRA" },
  { narzedzie: "Playwright", typ: "E2E", jezyk: "TypeScript", integracja: "Multi-browser", szybkosc: "Szybki (parallel)", kiedy: "Multi-browser, enterprise, MS" },
  { narzedzie: "Cypress", typ: "E2E", jezyk: "TypeScript", integracja: "Chrome-family", szybkosc: "Wolniejszy (serial)", kiedy: "Mały projekt, świetny DX" },
  { narzedzie: "MSW", typ: "HTTP Mocking", jezyk: "TypeScript", integracja: "Service Worker", szybkosc: "Szybki", kiedy: "Realistyczne HTTP mocks, integration" },
  { narzedzie: "Storybook", typ: "Component / Visual", jezyk: "TypeScript", integracja: "CDD", szybkosc: "Dobry", kiedy: "Komponent dev, dokumentacja, visual regression" },
];

export default function BlogVitestPlaywrightCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vitest, Playwright, Cypress, Storybook | Fotz Studio"
        description="Vitest vs Jest, Playwright vs Cypress, MSW, Storybook, testing pyramid — jak testować React aplikacje w 2024, unit, integration i E2E testy."
        canonical="https://fotz.pl/blog/vitest-playwright-cypress-storybook-testowanie-react-2024"

        keywords="Vitest, Playwright, Cypress, Storybook co to jest, Vitest, Playwright, Cypress, Storybook jak działa, Vitest, Playwright, Cypress, Storybook tutorial, Vitest, Playwright, Cypress, Storybook przykład, czym jest Vitest, Playwright, Cypress, Storybook, Vitest, Playwright, Cypress, Storybook dokumentacja, Vitest, Playwright, Cypress, Storybook przewodnik"
      />
      <ArticleSchema
        title="Vitest, Playwright, Cypress, Storybook — testowanie aplikacji React 2024?"
        description="6 narzędzi testowych (Vitest/Jest/Playwright/Cypress/MSW/Storybook) — testing pyramid, unit/integration/E2E, React Testing Library, kiedy co wybrać."
        url="https://fotz.pl/blog/vitest-playwright-cypress-storybook-testowanie-react-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vitest i Playwright", url: "https://fotz.pl/blog/vitest-playwright-cypress-storybook-testowanie-react-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Vitest i Playwright", url: "/blog/vitest-playwright-cypress-storybook-testowanie-react-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Frontend / Testing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Testowanie aplikacji React 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Vitest zamiast Jest, Playwright zamiast Selenium, MSW do HTTP mocks
              i Storybook do component-driven development.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Unit tests (esbuild)", value: "Vitest" },
                { label: "E2E multi-browser", value: "Playwright" },
                { label: "HTTP mocking", value: "MSW" },
                { label: "Component dev", value: "Storybook" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi testowych dla React</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Unit, integration i E2E testing — każde narzędzie pokrywa inną warstwę
              testing pyramid z różną szybkością i zakresem testów.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ testów</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Integracja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Szybkość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {testingTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.integracja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.szybkosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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

      <RelatedArticles currentArticleId="vitest-playwright-cypress-storybook-testowanie-react-2024" />
      <ContactSection />
    </Layout>
  );
}
