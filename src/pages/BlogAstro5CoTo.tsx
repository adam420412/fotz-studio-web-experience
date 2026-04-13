import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Astro 5 — Content Layer API i co nowego?",
    answer: "Astro 5 (2024): major release. Content Layer API — nowe podejście do treści. Server Islands. Astro Actions. Vite 6. Performance improvements. Content Layer API: dowolne źródło danych. Nie tylko pliki MD. CMS, API, baza danych. defineCollection z loader. Stare: defineCollection({type: 'content', schema}). Nowe Astro 5: defineCollection({loader: glob({pattern: '**/*.md', base: './src/content/blog'}), schema}). Lub custom loader: defineCollection({loader: async () => { const posts = await fetchFromCMS(). return posts.map(p => ({id: p.slug, ...p})) }, schema: z.object({title: z.string(), ...})}). Built-in loaders: glob — lokalne pliki. file — pojedynczy plik JSON/CSV. Własne z Loader API. getCollection, getEntry — te same API. Content Collections: src/content/config.ts. Definiuj kolekcje. TypeScript types generowane. Frontmatter validated. Zod schema. Astro 5 benefits: external CMS bez wtyczek. Headless WordPress, Contentful, Sanity. Incremental build z cache. Tylko zmienione treści rebuild. Starlight 0.28+: dokumentacja. Używa Content Layer. Collections adapter. Kompatybilność wsteczna: stary type: 'content' nadal działa. Migracja stopniowa.",
  },
  {
    question: "Astro Server Islands — hybrydowe wyspy serwerowe?",
    answer: "Server Islands (Astro 5): komponenty renderowane NA SERWERZE dla każdego requestu. Nie statycznie. Nie client-side. Server-side per-request. Koncepcja: strona statyczna (szybka). Wycięte miejsca = server islands. Serwer wypełnia wyspy dynamicznie. Bez pełnego SSR strony. Użycie: import UserGreeting from '../components/UserGreeting.astro'. UserGreeting server:defer /. server:defer = Server Island. Fallback: UserGreeting server:defer. div slot='fallback' Ładowanie... /div. Wyświetlany podczas ładowania wyspy. Kiedy Server Islands: personalizowane treści (imię użytkownika). Koszyk zakupowy (dynamiczny). A/B testing. Geo-specific content. Vs Client Islands: Client Islands: JavaScript w przeglądarce. Server Islands: HTML z serwera, bez JS. Server Islands szybsze, mniej JS. Vs full SSR: full SSR — cała strona per-request (wolniejsza). Server Islands — tylko fragment dynamiczny. Reszta statyczna (szybka). Vs React Server Components: RSC — React specyficzne. Server Islands — dowolny framework (React, Vue, Svelte). Astro agnostyczny. Deferred rendering: strona wraca natychmiast (static). Wyspy dociągane. CDN może cache'ować statykę. Wyspy: origin server. Optymalna wydajność.",
  },
  {
    question: "Astro Actions — type-safe server actions?",
    answer: "Astro Actions (Astro 4.15+, stable 5): type-safe server mutations. Jak Server Actions Next.js. Bez API routes. Zod validation. Definicja: src/actions/index.ts. import {defineAction} from 'astro:actions'. import {z} from 'astro:schema'. export const server = {subscribe: defineAction({input: z.object({email: z.string().email()}), handler: async ({email}) => { await addToMailingList(email). return {success: true} }})}. Wywołanie z komponentu: import {actions} from 'astro:actions'. Form submit: form method='POST' onSubmit={async (e) => {e.preventDefault(). const formData = new FormData(e.target). const {data, error} = await actions.subscribe(formData). if (error) showError(error)}. Lub: actions.subscribe({email}). Bez formData. Accept: actions akceptują FormData lub JSON. Automatyczne. Zod validates both. Error handling: SafeInput — nie rzuca. const {data, error} = await actions.subscribe(...). error.code — 'BAD_REQUEST' | 'NOT_FOUND' | 'UNAUTHORIZED' | etc. ActionError: throw new ActionError({code: 'UNAUTHORIZED', message: 'Login required'}). isActionError(error) — type guard. Middleware: context.callAction(actions.subscribe, input). HTML forms: pełna kompatybilność. No JS fallback. Progressive enhancement. React integration: useActionState z Astro Actions. TypeScript: automatyczne typy z Zod schema.",
  },
  {
    question: "Astro i integracje — React, Vue, Svelte, Tailwind, MDX?",
    answer: "Astro Integrations: oficjalne i community. npx astro add react — dodaje React. npx astro add vue. npx astro add svelte. npx astro add solid-js. npx astro add preact. Mieszanie frameworków: jedna strona, różne komponenty. React Card + Vue Header. Astro renderuje SSR każdy osobno. Tylko JS gdy client:* directive. Client directives: client:load — natychmiast. client:idle — gdy browser idle. client:visible — gdy w viewport. client:media='(max-width: 768px)'. client:only='react' — tylko client. Tailwind CSS: npx astro add tailwind. astro.config: integrations: [tailwind()]. Zero config. MDX: npx astro add mdx. .mdx pliki = Markdown + JSX. Importuj komponenty do MDX. import {Card} from '../components/Card.astro'. Keystatic CMS: Thijs de Vries. Content jako pliki. Local lub GitHub. Astro integracja. Sanity: @sanity/astro. Contentful: contentful package. Storyblok: @storyblok/astro. Astro DB: libSQL (Turso) wbudowane. defineTable, db.insert, db.select. Platform adapters: @astrojs/netlify. @astrojs/vercel. @astrojs/cloudflare. @astrojs/node. View Transitions wbudowane: import {ViewTransitions} from 'astro:transitions'. head ViewTransitions /. MPA z SPA-like animations. Prefetch: prefetch wbudowany Astro 3+. Hover prefetch. Tap prefetch.",
  },
  {
    question: "Astro vs Next.js vs SvelteKit — kiedy wybrać Astro?",
    answer: "Astro doskonały dla: blogów i portali contentowych. Dokumentacji (Starlight). Marketing sites. Portfolio. E-commerce katalogi (z hybrydowymi wyspami). Strony z dużą ilością statycznego kontentu. Astro zalety: MPA — mniej JS domyślnie. Islands Architecture — JS tylko gdy potrzebny. Multi-framework — React+Vue+Svelte razem. Doskonałe SEO out-of-the-box. Content Collections — strukturyzowane treści. Astro ograniczenia: nie dla apps z dużo state. Dashboard z real-time. Ciężkie interaktywne UX. Astro 5 zmniejsza te ograniczenia (Server Islands). Next.js lepszy gdy: React-only projekt. Duża interaktywność. Auth-heavy app. Dashboard. E-commerce z heavy cart. SvelteKit lepszy gdy: Svelte preferowany. Performance critical. SvelteKit 2 bardzo dobry. Mniejszy bundle. Porównanie Lighthouse: Content site z Astro: 100/100/100/100. Typowy Next.js blog: 85-95/90/90/95. Powód: Astro zero JS domyślnie. Image optymalizacja: Astro Image (@astrojs/image). Automatyczna optymalizacja. getImage(), Image komponent. Picture, srcset. WebP/AVIF automatycznie. Font optymalizacja: Astro Fonts (Astro 5). Zero layout shift. Google Fonts + local. CLS fix automatyczny. Decyzja: content site -> Astro. App z state -> Next.js lub SvelteKit. Blog + dokumentacja -> Astro (Starlight). Wciąż chcesz React komponentów -> Astro + React islands.",
  },
];

const astroFeatures = [
  { funkcja: "Content Layer API", wersja: "Astro 5", opis: "Dowolne źródło treści — pliki, CMS, API, baza danych" },
  { funkcja: "Server Islands", wersja: "Astro 5", opis: "Dynamiczne fragmenty na tle statycznej strony" },
  { funkcja: "Astro Actions", wersja: "Astro 4.15+ / 5", opis: "Type-safe server mutations z Zod validation" },
  { funkcja: "View Transitions", wersja: "Astro 3+", opis: "MPA z SPA-like animacjami między stronami" },
  { funkcja: "Astro DB", wersja: "Astro 4+", opis: "LibSQL (Turso) wbudowana baza danych" },
  { funkcja: "Starlight", wersja: "Aktywnie rozwijany", opis: "Dokumentacja na Astro — pełne features out-of-box" },
];

export default function BlogAstro5CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Astro 5 — Content Layer, Server Islands, Actions i porównanie z Next.js 2024 | Fotz.pl"
        description="Astro 5: Content Layer API (dowolne źródło treści), Server Islands (dynamiczne wyspy), Astro Actions (type-safe mutations), View Transitions, Astro DB i porównanie z Next.js."
        canonicalUrl="https://fotz.pl/blog/astro-5-content-layer-server-islands-actions-vs-nextjs-2024"

        keywords="Astro 5 co to jest, Astro 5 jak działa, Astro 5 tutorial, Astro 5 przykład, czym jest Astro 5, Astro 5 dokumentacja, Astro 5 przewodnik"
      />
      <ArticleSchema
        title="Astro 5 — Content Layer, Server Islands, Actions i porównanie z Next.js 2024?"
        description="Astro 5 nowości: Content Layer API, Server Islands, Astro Actions, Astro DB, View Transitions — kiedy Astro zamiast Next.js i jak działają wyspy serwerowe."
        url="https://fotz.pl/blog/astro-5-content-layer-server-islands-actions-vs-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Astro 5", url: "https://fotz.pl/blog/astro-5-content-layer-server-islands-actions-vs-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Astro 5", href: "/blog/astro-5-content-layer-server-islands-actions-vs-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Astro / SSG / Islands Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Astro 5
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Content Layer API (dowolne źródło), Server Islands,
              Astro Actions (type-safe) i porównanie z Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Treści", value: "Content Layer" },
                { label: "Dynamika", value: "Server Islands" },
                { label: "Mutacje", value: "Actions" },
                { label: "Animacje", value: "View Trans." },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Astro 5 — kluczowe funkcje i wersja</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Content Layer, Server Islands, Actions, View Transitions, Astro DB i Starlight —
              wersja i opis każdej funkcji.
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
                {astroFeatures.map((f, i) => (
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
