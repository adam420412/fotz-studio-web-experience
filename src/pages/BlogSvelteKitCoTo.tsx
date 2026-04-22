import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest SvelteKit i jak działa routing oparty na plikach?",
    answer: "SvelteKit: fullstack framework oparty na Svelte. Oficjalny meta-framework jak Next.js dla React. Vite pod spodem. Routing oparty na plikach w src/routes/. +page.svelte — strona. +layout.svelte — layout. +page.server.ts — server-side load. +page.ts — universal load (SSR + CSR). +server.ts — API endpoint (GET, POST, etc.). +error.svelte — strona błędu. Struktura: src/routes/+page.svelte — strona główna (/). src/routes/blog/+page.svelte — /blog. src/routes/blog/[slug]/+page.svelte — /blog/:slug. src/routes/api/users/+server.ts — /api/users. Zagnieżdżone layouty: każdy folder może mieć +layout.svelte. Layouty dziedziczą i owijają potomków. (route) — group bez URL. [[optional]] — parametr opcjonalny. [...rest] — catch-all. Adaptery: adapter-auto (Vercel, Netlify, Cloudflare). adapter-node — Node.js server. adapter-static — SPA lub SSG. adapter-cloudflare — Cloudflare Pages + Workers. Svelte komponenty: .svelte rozszerzenie. script + style + template w jednym pliku. Reactywność przez $: i rune-based (Svelte 5). Brak virtual DOM — kompilowany do vanilla JS. Mniejszy bundle niż React. SvelteKit vs Next.js: SvelteKit — mniej boilerplate. Next.js — większy ekosystem.",
  },
  {
    question: "Load functions — SSR i CSR data fetching w SvelteKit?",
    answer: "Load functions: funkcje zwracające dane do komponentu. +page.server.ts (server-only): export async function load({params, fetch, cookies, locals, platform}) { const post = await db.getPost(params.slug). return {post} }. Dane dostępne w page.data. Tylko na serwerze — dostęp do DB, secrets. +page.ts (universal): export async function load({params, fetch}) { const res = await fetch('/api/posts/' + params.slug). return await res.json() }. Działa i na serwerze i kliencie. fetch() — rozszerzony, respektuje cookies. +layout.server.ts load: dane dziedziczone przez wszystkie dzieci. parent(): await parent() — czekaj na layout load. Promise.all dla równoległych requestów. Parametry URL: params.slug — parametr dynamiczny. url.searchParams.get('q') — query string. Data w szablonie: script in +page.svelte: export let data. data.post.title. Type safety: export const load = async () => ({post}). PageData type generowany automatycznie. Error handling: throw error(404, 'Not found') — z @sveltejs/kit. throw redirect(302, '/login') — przekierowanie. throw error(500, message) — błąd serwera. Streaming: return {streamed: {comments: fetchComments()}}. Komponent czeka na resolved. SvelteKit 2.x: runes ($props, $state, $derived). Nowy model reaktywności Svelte 5.",
  },
  {
    question: "Form Actions — server-side formularze bez JavaScript?",
    answer: "Form Actions: progressively enhanced formularze. Działają bez JavaScript (native HTML form). Enhanced z JS — brak full reload. +page.server.ts actions: export const actions = { default: async ({request, cookies}) => { const formData = await request.formData(). const email = formData.get('email'). const password = formData.get('password'). try { await signIn(email, password). throw redirect(302, '/dashboard') } catch(e) { return fail(400, {error: 'Invalid credentials', email}) } }, register: async ({request}) => { ... } }. Multiple actions: form action='?/register'. form action='?/login'. Named actions. Template: form method='POST'. Walidacja: Zod + superforms. svelte-superforms: use:enhance z TypeScript. formSchema: z.object({...}). superValidate(request, zod(schema)). message() helper. Optimistic UI: use:enhance callback. update({reset: false}). Modify local state przed response. applyAction(result). Pliki: formData.get('file') jako File. Streaming i progress upload. File type validation. CSRF protection: SvelteKit wbudowane CSRF (SameSite cookies). Turnstile / hCaptcha integracja. FormData manipulation w action. Return types: fail(statusCode, data) — błąd z danymi. redirect(code, url) — przekierowanie. error(code, message) — błąd serwera. {success: true, data} — sukces.",
  },
  {
    question: "Hooks, stores i zaawansowane wzorce SvelteKit?",
    answer: "Hooks: src/hooks.server.ts. handle: middleware-like. export const handle = async ({event, resolve}) => { event.locals.user = await getUser(event.cookies). return resolve(event) }. handleFetch: modyfikuj fetch requests. handleError: globalny error handler. sequence(): chainowanie handle hooks. src/hooks.client.ts: handleError — client-side errors. Svelte Stores (Svelte 4): writable(initialValue). readable(). derived(). store.subscribe(). $store — auto-subscription. Page store: import {page} from '$app/stores'. $page.url.pathname. $page.params. $page.data. $page.status. Svelte 5 Runes: $state() zamiast let. $derived() zamiast $: derived. $effect() zamiast onMount + $:. $props() zamiast export let. Nawigacja: import {goto, invalidate, invalidateAll} from '$app/navigation'. goto('/path') — programmatic navigation. invalidate('resource') — refresh konkretnych danych. afterNavigate hook. beforeNavigate — potwierdzenie opuszczenia. Lifecycle: onMount, onDestroy, beforeUpdate, afterUpdate (Svelte 4). $effect (Svelte 5). Context: setContext, getContext — bez prop drilling. Service: tylko w +layout.svelte dostępny wszędzie. SSR state isolation — każdy request ma fresh state. Unikaj module-level mutable state. env variables: $env/static/private — build time. $env/dynamic/private — runtime. $env/static/public — po stronie klienta.",
  },
  {
    question: "Deployment SvelteKit — Vercel, Cloudflare i własny serwer?",
    answer: "Vercel deployment: npm install @sveltejs/adapter-vercel. svelte.config.js: import adapter from '@sveltejs/adapter-vercel'. config: {kit: {adapter: adapter()}}. Automatyczne wykrycie przez Vercel. Edge Functions: adapter({runtime: 'edge'}). Streaming SSR na edge. ISR: config = {isr: {expiration: 60}}. Cloudflare Pages + Workers: adapter-cloudflare. platform.env.DB — D1 bindings. platform.env.KV — KV store. platform.context.waitUntil(). Cloudflare-specific APIs dostępne. Node.js server: adapter-node. node build/. PORT env variable. Reverse proxy (Nginx, Caddy). PM2 lub Systemd dla production. Static deployment: adapter-static. prerenderAll lub per-route prerender. SPA mode: fallback: '404.html'. GitHub Pages, Netlify static. Prerendering: export const prerender = true w +page.ts. config.kit.prerender: entries dla dynamic routes. Crawl: true — automatyczne wykrywanie. Partial prerendering: mix SSR i static. Caching: Cache-Control headers w +server.ts. setHeaders({...}). Stale-while-revalidate pattern. Vite config w SvelteKit: vite.config.ts. Plugins, aliases, proxy. Test setup: Playwright (E2E), Vitest (unit). @testing-library/svelte. SvelteKit Inspector: SVELTE_INSPECT=true. Overlay component boundaries.",
  },
];

const skPatterns = [
  { wzorzec: "+page.svelte", typ: "Komponent strony", kiedy: "Widok dla danej trasy URL" },
  { wzorzec: "+layout.svelte", typ: "Layout", kiedy: "Wspólny wrapper dla zagnieżdżonych tras" },
  { wzorzec: "+page.server.ts", typ: "Server load", kiedy: "Dane z DB, secrets — tylko serwer" },
  { wzorzec: "+page.ts", typ: "Universal load", kiedy: "Dane z API — SSR i CSR" },
  { wzorzec: "+server.ts", typ: "API endpoint", kiedy: "GET/POST/PUT/DELETE REST endpoint" },
  { wzorzec: "actions (Form Actions)", typ: "Server action", kiedy: "Formularze, mutacje — progressive enhancement" },
];

export default function BlogSvelteKitCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SvelteKit | Fotz Studio"
        description="SvelteKit routing (plikowy), load functions (SSR/CSR), Form Actions (bez JS), hooks, Svelte stores, runes (Svelte 5) i deployment (Vercel, Cloudflare, Node.js)."
        canonical="https://fotz.pl/blog/sveltekit-routing-load-functions-form-actions-adaptery-2024"

        keywords="SvelteKit co to jest, SvelteKit definicja, czym jest SvelteKit, SvelteKit przykłady, jak działa SvelteKit, SvelteKit znaczenie, SvelteKit przewodnik"
      />
      <ArticleSchema
        title="SvelteKit — routing, load functions, form actions i adaptery 2024?"
        description="6 wzorców SvelteKit (+page.svelte/+layout/+server.ts/load/actions/hooks) — SSR, CSR, Svelte 5 runes, Form Actions (superforms), hooks i deployment na Vercel i Cloudflare."
        url="https://fotz.pl/blog/sveltekit-routing-load-functions-form-actions-adaptery-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SvelteKit", url: "https://fotz.pl/blog/sveltekit-routing-load-functions-form-actions-adaptery-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "SvelteKit", url: "/blog/sveltekit-routing-load-functions-form-actions-adaptery-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SvelteKit / Svelte / Fullstack
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SvelteKit
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Routing plikowy, load functions (SSR/CSR), Form Actions (progressive enhancement),
              Svelte 5 runes, hooks i deployment (Vercel, Cloudflare, Node.js).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "File routing", value: "+page.svelte" },
                { label: "Data loading", value: "load()" },
                { label: "Forms", value: "Actions" },
                { label: "Reactivity", value: "Runes" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców SvelteKit — routing i data fetching</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              +page.svelte, +layout, +page.server.ts, +page.ts, +server.ts i Form Actions —
              typ, zastosowanie i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {skPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 font-mono text-xs">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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

      <RelatedArticles currentArticleId="sveltekit-routing-load-functions-form-actions-adaptery-2024" />
      <ContactSection />
    </Layout>
  );
}
