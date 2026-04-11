import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Vitest v2 — co nowego i jak działa Browser Mode?",
    answer: "Vitest v2: Vladimir Sheremet, Anthony Fu. Szybszy. Vite-native. Instalacja: npm install -D vitest@2. Co nowego v2: Browser Mode stable. Pool workers: vmForks, vmThreads, forks. Sharding. Improved TypeScript. Workspace improvements. Test isolation. Browser Mode: uruchamia testy w prawdziwej przeglądarce. Nie jsdom/happy-dom. Prawdziwy DOM. Web APIs (WebSocket, Canvas, WebGL). Playwright lub WebdriverIO provider. Konfiguracja: vitest.config.ts: import {defineConfig} from 'vitest/config'. export default defineConfig({test: {browser: {enabled: true, provider: 'playwright', name: 'chromium'}}}). npm install -D @vitest/browser playwright. Testy Browser Mode: import {render} from '@testing-library/react'. import {screen} from '@testing-library/dom'. test('renders button', async () => { render(Button Click me /Button). const btn = screen.getByRole('button', {name: 'Click me'}). await userEvent.click(btn). expect(screen.getByText('Clicked')).toBeInTheDocument() }). Dlaczego Browser Mode: canvas API. WebGL. IntersectionObserver. ResizeObserver. MediaQuery. Clipboard API. Wszystkie Web APIs bez shimów. Providerzy: playwright (polecany). webdriverio. UI mode: --ui flag. Wizualny UI. Podgląd testów. Coverage. Rerun per test. Headless mode w CI.",
  },
  {
    question: "Vitest v2 — workspace, sharding i zaawansowana konfiguracja?",
    answer: "Workspace: wiele projektów w jednym. vitest.workspace.ts: import {defineWorkspace} from 'vitest/config'. export default defineWorkspace(['packages/*/vitest.config.ts', {test: {name: 'unit', include: ['**/*.unit.test.ts'], environment: 'node'}}, {test: {name: 'browser', include: ['**/*.browser.test.ts'], browser: {enabled: true, name: 'chromium', provider: 'playwright'}}}]). Osobne środowiska per projekt. Filtry: vitest --project unit. vitest --project browser. Sharding: równoległe CI runs. vitest --shard=1/3. vitest --shard=2/3. vitest --shard=3/3. Merge coverage: @vitest/coverage-v8. npx vitest --coverage. merge-coverage. Pool Workers: pool: 'vmForks' (default v2). pool: 'forks'. pool: 'threads'. vmForks: vm context isolation + forks. Szybszy start. Lepsze i zo. Test Timeouts: testTimeout: 10000. hookTimeout: 10000. teardownTimeout: 5000. Coverage: @vitest/coverage-v8 (fast, wbudowane). @vitest/coverage-istanbul (dokładniejsze). coverage: {provider: 'v8', reporter: ['text', 'lcov', 'html'], include: ['src/**'], exclude: ['**/*.test.ts']}. Thresholds: coverage: {thresholds: {lines: 80, functions: 80}}. Snapshot: toMatchSnapshot(). toMatchInlineSnapshot(). Snapshot files. Update: --update-snapshots. Mocking: vi.fn(), vi.mock(), vi.spyOn(). vi.useFakeTimers(). vi.stubGlobal(). vi.stubEnv(). importActual: import real module + mock parte.",
  },
  {
    question: "Vitest — testowanie React komponentów z @testing-library/react?",
    answer: "@testing-library/react: Kent C. Dodds. Query-based. User-centric. Instalacja: npm install -D @testing-library/react @testing-library/user-event @testing-library/jest-dom. vitest.config.ts: test: {environment: 'jsdom', setupFiles: ['./src/test/setup.ts']}. setup.ts: import '@testing-library/jest-dom'. extend(expect, matchers). Podstawowy test: import {render, screen} from '@testing-library/react'. import userEvent from '@testing-library/user-event'. test('submits form', async () => { const onSubmit = vi.fn(). render(Form onSubmit={onSubmit}). const input = screen.getByRole('textbox', {name: 'Name'}). await userEvent.type(input, 'Jan'). await userEvent.click(screen.getByRole('button', {name: 'Submit'})). expect(onSubmit).toHaveBeenCalledWith({name: 'Jan'}) }). Queries (priorytety): getByRole — domyślny. getByLabelText — formularze. getByPlaceholderText. getByText. getByDisplayValue. getByAltText. getByTestId — ostatnia opcja. Async queries: findByRole — czeka na element. waitFor: await waitFor(() => expect(el).toBeInDocument()). userEvent v14: await userEvent.setup(). const user = userEvent.setup(). user.click, user.type, user.keyboard. Async domyślnie. Mocki: vi.mock('./api', () => ({fetchUser: vi.fn().mockResolvedValue({name: 'Jan'})})). renderHook: import {renderHook, act} from '@testing-library/react'. const {result} = renderHook(() => useCounter()). act(() => result.current.increment()). Custom renderów: z Provider, Router.",
  },
  {
    question: "Medusa.js v2 — headless e-commerce dla Next.js?",
    answer: "Medusa v2: Sebastian Rindom. Complete rewrite. Modular commerce. Instalacja: npx create-medusa-app. Lub backend only: npx medusa new my-backend. Core: medusa@2. @medusajs/framework. Backend: Express-like. Node.js. PostgreSQL. Redis. Storefront: Next.js Starter. Oddzielny projekt. API HTTP. Medusa v2 architektura: modular. Każdy moduł niezależny. Product, Cart, Order, Customer, Inventory, Pricing, Auth. Workflow engine: Saga pattern. Step-based. Rollback per step. Własne workflows. defineWorkflow, createStep, createWorkflow. API Routes: app/api/store/products/route.ts. Next.js Route Handlers. medusa SDK: import Medusa from '@medusajs/js-sdk'. const medusa = new Medusa({baseUrl: 'http://localhost:9000'}). const {products} = await medusa.store.product.list(). Admin UI: /app route. Next.js extension. Custom fields. Plugins: widgets, routes, custom modules. Pricing: Price Lists. Customer Groups. Tax calculations. Inventory: Multiple locations. Reservations. Channels: multiple sales channels. B2B support. Fulfillment: providers (manual, custom, Shippo). Payment: Stripe plugin. PayPal. Klarna. Search: Algolia plugin. MeiliSearch plugin. Storefront patterns: product listing. PDP. Cart. Checkout. My Account. Next.js server components compatible.",
  },
  {
    question: "Porównanie Medusa vs Shopify Hydrogen vs Commerce.js?",
    answer: "Medusa v2: open source. Self-hosted. TypeScript. PostgreSQL. Full control. Bez vendor lock. Koszt: hosting własny. Czas setup. Zalety: całkowita kontrola. TypeScript-first. Extensible. Darmowy. Wady: wymaga utrzymania. Mniejszy ekosystem. Shopify Hydrogen: React-based. Shopify jako backend. Vite + React. Zalety: Shopify ekosystem. Apps. Skalowalność. Wsparcie. Wady: Shopify lock-in. Koszty Shopify. Commerce.js: API-based. Multi-storefront. GraphQL. Zalety: prosty API. Multi-vendor. Wady: ograniczone. Strapi Commerce: Strapi + e-commerce plugin. Mniejszy ecosystem. Nacelle: DXP layer. Shopify + Nacelle. Saleor: open source. GraphQL-first. Python backend. Django. Kiedy Medusa: własny produkt SaaS. Custom B2B. Pełna kontrola checkout. Multi-tenant. Kiedy Shopify Hydrogen: głównie Shopify. Szybki start. Shopify apps. Kiedy Commerce.js: mały sklep. API-first. Kiedy WooCommerce: WordPress + WooCommerce. PHP. Duży ekosystem. Kiedy BigCommerce Next.js: mid-market. Headless + managed backend. Next.js storefront starter: create-next-app. Medusa SDK. Product listing pages. Cart Context. Checkout flow. Stripe integration. Middleware auth.",
  },
];

const vitestFeatures = [
  { funkcja: "Browser Mode", wersja: "Vitest v2 stable", opis: "Testy w prawdziwej przeglądarce — Playwright provider" },
  { funkcja: "Workspace", wersja: "v2", opis: "Wiele projektów — unit, browser, different environments" },
  { funkcja: "Sharding", wersja: "v2", opis: "Równoległe CI runs — --shard=1/3" },
  { funkcja: "@vitest/coverage-v8", wersja: "v2", opis: "Native V8 coverage — szybszy od Istanbul" },
  { funkcja: "Medusa v2", wersja: "2.0 stable", opis: "Headless e-commerce — modular, TypeScript, workflows" },
  { funkcja: "@medusajs/js-sdk", wersja: "v2", opis: "SDK storefront — product list, cart, checkout API" },
];

export default function BlogVitest2BrowserCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vitest v2 Browser Mode, Workspace i Medusa.js v2 — testowanie i e-commerce 2024 | Fotz.pl"
        description="Vitest v2: Browser Mode (Playwright, real DOM), Workspace, sharding, coverage v8. @testing-library/react v15. Medusa.js v2: headless e-commerce, workflows, Next.js storefront."
        canonicalUrl="https://fotz.pl/blog/vitest-v2-browser-mode-workspace-medusa-js-v2-ecommerce-2024"
      />
      <ArticleSchema
        title="Vitest v2 Browser Mode, Workspace i Medusa.js v2 — testowanie i e-commerce 2024?"
        description="Vitest v2 Browser Mode (real DOM testing), workspace, sharding, coverage v8, testing-library. Medusa v2 headless e-commerce: modular, workflows, SDK, Next.js storefront."
        url="https://fotz.pl/blog/vitest-v2-browser-mode-workspace-medusa-js-v2-ecommerce-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vitest v2 i Medusa v2 2024", url: "https://fotz.pl/blog/vitest-v2-browser-mode-workspace-medusa-js-v2-ecommerce-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Vitest v2 i Medusa v2 2024", href: "/blog/vitest-v2-browser-mode-workspace-medusa-js-v2-ecommerce-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Vitest / Browser Mode / Medusa / E-commerce
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vitest v2 i Medusa.js v2
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Browser Mode (real DOM), Workspace, Sharding
              i Medusa.js v2 headless e-commerce.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Real DOM", value: "Browser Mode" },
                { label: "Multi-env", value: "Workspace" },
                { label: "Parallel CI", value: "Sharding" },
                { label: "E-commerce", value: "Medusa v2" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vitest v2 i Medusa v2 — kluczowe funkcje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Browser Mode, Workspace, Sharding, coverage-v8, Medusa SDK —
              wersja i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {vitestFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wersja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.opis}</td>
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
