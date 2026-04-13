import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Astro i Island Architecture?",
    answer: "Astro: web framework skupiony na wydajności (2021, obecna wersja 4.x). Kluczowa filozofia: Ship Less JavaScript. Domyślnie zero JavaScript na kliencie — statyczny HTML. Island Architecture: koncepcja zaproponowana przez Jason Miller (2019). Strona to ocean statycznego HTML. Interaktywne komponenty = wyspy (islands) w tym oceanie. Każda wyspa to niezależny komponent który hydratuje niezależnie. Zalety Island Architecture: zero JS dla statycznych części. Hydratacja tylko interaktywnych komponentów. Lepszy Core Web Vitals (szczególnie TBT, FID/INP). Jak Astro implementuje islands: .astro komponenty — HTML + CSS + trochę JS (server-rendered). Framework components (React, Vue, Svelte, Solid) — client:directive. client:load — hydratacja natychmiastowo. client:idle — hydratacja gdy idle (requestIdleCallback). client:visible — hydratacja gdy komponent wchodzi do viewport. client:media — hydratacja przy media query. client:only — tylko client-side (brak SSR). Astro przykład: React komponent jako wyspa. Statyczny content w .astro. React użyty tylko dla interaktywnych elementów. Wynik: minimalne JS, maksymalna wydajność.",
  },
  {
    question: "Astro — content collections, SSR, view transitions?",
    answer: "Content Collections (Astro 2.0+): type-safe API dla lokalnych plików (Markdown, MDX, JSON, YAML). defineCollection z Zod schema. getCollection('posts') — pobierz wszystkie posty. getEntry('posts', 'my-post') — pobierz konkretny. Astro generuje typy automatycznie. MDX support: Markdown + JSX components. Idealne dla content-heavy sites. Frontmatter z walidacją Zod. SSR Mode: output: 'server' lub output: 'hybrid'. Adaptery: @astrojs/node, @astrojs/vercel, @astrojs/cloudflare, @astrojs/netlify. SSR endpoints: src/pages/api/users.ts. export async function GET({request}) {...}. View Transitions (Astro 3.0+): CSS View Transitions API. Płynne animacje między stronami bez full page reload. persist: zachowaj element między stronami (np. audio player). animate:none dla elementów bez animacji. Astro DB (Astro 4.0+): edge-ready SQLite. libsql (Turso). Typowane zapytania. Działa lokalnie i na produkcji. Image optimization: wbudowane. Image component. Automatic format (AVIF, WebP). Lazy loading. Size optimization. Integracje: React, Vue, Svelte, Solid, Preact, Lit. Tailwind, MDX, Partytown. Starlight: dokumentacja template (Astro-based). Astro is best for: content-heavy sites, documentation, landing pages, blogs.",
  },
  {
    question: "SvelteKit — co to jest i jak działa Svelte?",
    answer: "Svelte: kompilowany framework UI. Brak virtual DOM. Kompilator konwertuje komponenty na vanilla JavaScript. Mniejszy bundle, szybszy runtime. Reactive declarations: $: doubleCount = count * 2 — reaktywna zmienna. Stores: writable, readable, derived — globalny state. {#if}, {#each}, {#await} — templating. SvelteKit: full-stack framework dla Svelte (jak Next.js dla React). Routing: file-system based. src/routes/about/+page.svelte. Zaawansowane: +page.ts (load function). +page.server.ts (server-only load). +layout.svelte (shared layout). +layout.server.ts (layout data). +server.ts (API endpoint). Load Functions: export async function load({fetch, params, url, locals}) {...}. Uruchamiana server-side (initial load) lub client-side (navigation). Dane z load -> props strony. Form Actions: export const actions = {default: async ({request}) => {...}}. Progressive enhancement — działa bez JS. Brak fetch/axios — natywne HTML forms. SvelteKit SSR/SSG/SPA: SSR (domyślnie). SSG: prerender = true per strona lub globalnie. SPA: CSR per strona. Adapters: @sveltejs/adapter-vercel, adapter-node, adapter-static, adapter-cloudflare. Zalety Svelte/SvelteKit: mniejszy bundle niż React/Vue. Prostszy kod (mniej boilerplate). Wbudowany state management (stores). Animacje wbudowane (svelte/animate, svelte/transition). Wady: mniejszy ekosystem niż React.",
  },
  {
    question: "Remix — nested routing, loaders, actions i progressive enhancement?",
    answer: "Remix: full-stack framework React (2021, teraz Shopify). Kluczowe idee: web standards first. Nested routing: każda trasa może mieć layout, loader i action. Loader: export async function loader({params, request}) {return json(await db.post.findById(params.id))}. Uruchamiany na serwerze. Dane z loader -> useLoaderData(). Action: export async function action({request}) {const formData = await request.formData(). return redirect('/success')}. Obsługa Form submit. Progressive Enhancement: działa bez JS. Formularz -> action -> redirect. Gdy JS dostępne -> fetch zamiast full page reload. useActionData() — dane z action. useFetcher() — ajax-like bez nawigacji. Nested Layouts: layout na /dashboard. Layout na /dashboard/analytics. Nested routes share layouts. Error handling: ErrorBoundary per route. Obsługa błędów blisko miejsca ich wystąpienia. Remix vs Next.js App Router: Remix — web standards, form-based, server. Next.js App Router — React Server Components, streaming, Vercel-optimized. Oba dobre. Remix: data loading i mutations. Next.js: streaming, React ecosystem. Remix Vite plugin (Remix 2.0): Vite zamiast własnego bundlera. Szybsze HMR. Turbo Mode. Remix Deploy: Vercel, Fly.io, Cloudflare Workers, AWS Lambda, Netlify, własny Node.js.",
  },
  {
    question: "Astro vs SvelteKit vs Remix vs Next.js — kiedy co wybrać?",
    answer: "Astro: content-heavy sites. Blogi, dokumentacja, landing pages, marketing sites. Brak JS gdzie nie potrzeba. Świetne Core Web Vitals. Multi-framework (React + Vue + Svelte razem). Idealne dla: SEO-first, content-driven, high-performance. SvelteKit: pełne aplikacje webowe. Prostszy stack niż React. Szybki, mały bundle. Wbudowany state, animacje. Idealne dla: małe-średnie aplikacje, nowe projekty bez React legacy, interaktywne dashboardy. Remix: form-heavy aplikacje. CRUD. Progressive enhancement (offline, slow connections). Web standards lover. Idealne dla: e-commerce, formularze, aplikacje wymagające progressive enhancement. Next.js: React ekosystem. Największy ekosystem. Server Components. App Router. Vercel. Idealne dla: duże projekty, enterprise, React teams, SaaS. Qwik: resumability (brak hydratacji). Bardzo małe initial JS. Idealne dla: ultra-high performance, e-commerce z kluczowymi Core Web Vitals. Decyzja: content site (blog/docs) -> Astro. Nowy projekt z Svelte -> SvelteKit. Forms heavy, progressive enhancement -> Remix. React team, ekosystem ważny -> Next.js. Ultra-performance ecommerce -> Qwik lub Astro + islands. Nie istnieje jedno 'najlepsze' — zależy od kontekstu, team skills i wymagań.",
  },
];

const frameworkComparison = [
  { framework: "Astro", rendering: "Static + Islands", jsShipping: "Zero (domyślnie)", ekosystem: "Multi-framework", bestFor: "Content sites, blogs, docs, landing pages" },
  { framework: "SvelteKit", rendering: "SSR/SSG/SPA", jsShipping: "Bardzo mały (kompilacja)", ekosystem: "Svelte", bestFor: "Aplikacje webowe, dashboardy, Svelte teams" },
  { framework: "Remix", rendering: "SSR (server-first)", jsShipping: "Średni", ekosystem: "React", bestFor: "Forms, CRUD, progressive enhancement" },
  { framework: "Next.js (App Router)", rendering: "RSC + SSR/SSG/ISR", jsShipping: "Średni-duży", ekosystem: "React (największy)", bestFor: "Enterprise, SaaS, React teams" },
  { framework: "Qwik City", rendering: "Resumable (zero hydration)", jsShipping: "Minimalny (lazy-loaded)", ekosystem: "Qwik", bestFor: "Ultra-performance, e-commerce" },
  { framework: "Nuxt 3", rendering: "SSR/SSG/SPA", jsShipping: "Średni", ekosystem: "Vue", bestFor: "Vue teams, aplikacje webowe" },
];

export default function BlogAstroCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Astro, SvelteKit, Remix | Fotz Studio"
        description="Astro Island Architecture, SvelteKit nested routing i actions, Remix progressive enhancement — porównanie z Next.js i Qwik, kiedy wybrać w 2024."
        canonicalUrl="https://fotz.pl/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac"

        keywords="Astro, SvelteKit, Remix co to jest, Astro, SvelteKit, Remix jak działa, Astro, SvelteKit, Remix tutorial, Astro, SvelteKit, Remix przykład, czym jest Astro, SvelteKit, Remix, Astro, SvelteKit, Remix dokumentacja, Astro, SvelteKit, Remix przewodnik"

        canonical="https://fotz.pl/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac"
      />
      <ArticleSchema
        title="Astro, SvelteKit, Remix — Island Architecture, co to jest, kiedy wybrać?"
        description="Astro Island Architecture, SvelteKit, Remix, Qwik, Nuxt — 6 frameworków porównane (rendering/JS/ekosystem/zastosowanie), content collections, loaders, actions."
        url="https://fotz.pl/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Astro, SvelteKit, Remix", url: "https://fotz.pl/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Astro, SvelteKit, Remix", href: "/blog/astro-sveltekit-remix-island-architecture-co-to-jest-kiedy-wybrac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Frontend / Web Frameworks
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Astro, SvelteKit i Remix
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Island Architecture w Astro, nested routing i Form Actions w SvelteKit,
              progressive enhancement w Remix — kiedy które alternatywy Next.js wybrać.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Zero JS default", value: "Astro Islands" },
                { label: "Kompilowany", value: "Svelte" },
                { label: "Web standards", value: "Remix" },
                { label: "Resumable", value: "Qwik" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 frameworków webowych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Astro, SvelteKit, Remix, Next.js, Qwik i Nuxt — każdy optymalizuje
              inny aspekt: shipping JS, rendering model i ekosystem.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rendering</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">JS Shipping</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Ekosystem</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Najlepsze dla</th>
                </tr>
              </thead>
              <tbody>
                {frameworkComparison.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.rendering}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.jsShipping}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.ekosystem}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.bestFor}</td>
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
