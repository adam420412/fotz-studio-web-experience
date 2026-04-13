import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Astro i jak działają pliki .astro?",
    answer: "Astro: framework dla content-driven websites. Zero JS domyślnie — czyste HTML. Islands architecture — JS tylko tam gdzie potrzeba. Multi-framework — React, Vue, Svelte, Solid, Lit. Vite pod spodem. Plik .astro: --- (frontmatter) --- template. Frontmatter: TypeScript między ---. Importy komponentów. Fetch danych (server-side). Nie dociera do klienta! Template: HTML + {wyrażenia}. Komponenty: Astro.Component, React, Vue. Props: const {title, date} = Astro.props. Slots: slot name='header'. Atrybuty: class:list dla warunkowych klas. set:html dla HTML string. Routing: src/pages/index.astro — /. src/pages/blog/[slug].astro — /blog/:slug. src/pages/[...path].astro — catch-all. getStaticPaths: export async function getStaticPaths() { const posts = await getPosts(). return posts.map(p => ({params: {slug: p.slug}, props: {post: p}})) }. SSR mode: output: 'server' w astro.config. Adapter: @astrojs/vercel, @astrojs/cloudflare, @astrojs/node. Hybrid: output: 'hybrid' — domyślnie static, opt-in SSR. export const prerender = false — per page SSR. Styles: scoped CSS domyślnie. is:global — globalne. Tailwind integracja. CSS modules. Sass.",
  },
  {
    question: "Content Collections — strukturyzowane treści z TypeScript?",
    answer: "Content Collections: type-safe kolekcje treści. Markdown, MDX, JSON, YAML. Definicja schematu: src/content/config.ts. import {defineCollection, z} from 'astro:content'. const blog = defineCollection({type: 'content', schema: z.object({title: z.string(), date: z.coerce.date(), author: z.string(), tags: z.array(z.string()).optional(), draft: z.boolean().default(false)})}). export const collections = {blog}. Pliki treści: src/content/blog/my-post.md. Frontmatter typowany przez Zod schema. Błąd przy złym typie. Querying: import {getCollection, getEntry} from 'astro:content'. const posts = await getCollection('blog', ({data}) => !data.draft). const post = await getEntry('blog', 'my-post'). Rendering: const {Content, headings} = await post.render(). Content /. Filtrowanie i sortowanie: getCollection z filter function. posts.sort((a, b) => b.data.date - a.data.date). MDX: @astrojs/mdx integration. Używaj komponentów w Markdown. import {components} from './components'. MDXContent {components}. Data collections (JSON): type: 'data'. Schema dla JSON/YAML. API responses, konfiguracja. Rss feed: @astrojs/rss. items z getCollection. XMLResponse. Sitemap: @astrojs/sitemap. Automatyczny sitemap.xml. Custom pages. Image integracja: astro:assets. getImage, Picture, Image. Automatyczne WebP, srcset. Local images optimized.",
  },
  {
    question: "View Transitions i Islands Architecture w Astro?",
    answer: "View Transitions: animacje między stronami bez SPA. Wbudowane w Astro 3+. Import: import {ViewTransitions} from 'astro:transitions'. head ViewTransitions/. Domyślna animacja: fade. Nazwy przejść: transition:name='hero-image'. Matching element in next page animuje się. Morphing transition. Typy animacji: slide, fade, none. Własne CSS animations. Astro a11y: prefers-reduced-motion respektowane. Persist między stronami: transition:persist — zachowaj element. Audio player nie restartuje. Islands Architecture: Client directives — kiedy hydrować. client:load — natychmiast. client:idle — gdy main thread wolny. client:visible — gdy element widoczny. client:media='(min-width: 768px)' — breakpoint. client:only='react' — tylko klient (brak SSR). Przykłady islands: Fragment jako button — bez JS. Interaktywny counter: Counter client:visible. Carousel: Swiper client:load. Search: SearchBar client:idle. Partial hydration: tylko interaktywne komponenty mają JS. Reszta — czysty HTML. Wynik: minimalne JS bundle. Szybki TTI. Svelte, React, Vue, Solid islands: integracje @astrojs/react, @astrojs/svelte, etc. Mieszane frameworks na jednej stronie. Współdzielone state przez nanostores. import {atom} from 'nanostores'. Shared state między React i Svelte islands. Astro Transitions API: navigate() — programmatic navigation. transition() — manual. Lifecycle events: astro:page-load, astro:after-swap.",
  },
  {
    question: "Astro DB i integracje?",
    answer: "Astro DB: SQLite + Drizzle ORM wbudowane. Hosted lub self-hosted. @astrojs/db integracja. db/config.ts: import {defineTable, column} from 'astro:db'. const Comment = defineTable({columns: {id: column.number({primaryKey: true}), author: column.text(), content: column.text(), createdAt: column.date()}}). export default defineDbConfig({tables: {Comment}}). Query: import {db, Comment} from 'astro:db'. const comments = await db.select().from(Comment).where(eq(Comment.postId, postId)). db.insert(Comment).values({...}). Astro Actions (nowe): Type-safe form actions. import {defineAction} from 'astro:actions'. export const server = {createComment: defineAction({input: z.object({content: z.string().min(1)}), handler: async ({content}, context) => { await db.insert(Comment).values({content, author: context.locals.user.name}). return {success: true} }})}. Form w .astro: form action={actions.createComment}. useActionResult() — wynik. Integracje popularne: @astrojs/tailwind — Tailwind CSS. @astrojs/mdx — MDX support. @astrojs/sitemap — sitemap.xml. @astrojs/image — image optimization. @astrojs/react — React islands. @astrojs/svelte — Svelte islands. @astrojs/solid-js — SolidJS. Partytown: third-party scripts w Web Worker. analytics.js w worker. Brak blokowania main thread. Middleware w Astro SSR: src/middleware.ts. defineMiddleware. Dostęp do request, cookies, locals. Auth guard pattern. Astro.locals — kontekst między middleware a stronami.",
  },
  {
    question: "Astro deployment, performance i kiedy wybrać?",
    answer: "Deployment opcje: Vercel: @astrojs/vercel adapter. Zero-config. SSR + ISR. Edge functions. Netlify: @astrojs/netlify adapter. Automatyczne. Cloudflare Pages: @astrojs/cloudflare. Workers + D1. GitHub Pages: output: 'static'. dist/ na gh-pages. Żaden adapter. Performance Astro: PageSpeed Insights — prawie zawsze 100. Zero JS domyślnie. LCP szybki — HTML dostępny od razu. CLS = 0 — brak re-hydration layout shifts. INP doskonały — islands tylko gdzie potrzeba. Astro vs Next.js: Astro — content sites, blogs, docs. Next.js — aplikacje, SaaS, e-commerce z interakcją. Astro — mniej JS = szybszy. Next.js — większy ekosystem. Astro vs Gatsby: Gatsby — brak aktywnego developmentu. Astro — aktywny, lepszy DX. Astro — mniej opinionated. Astro vs Hugo/Jekyll: Astro — nowoczesny stack (JS/TS, Vite). Hugo/Jekyll — prostszy, starszy. Astro — lepsze komponenty UI. Kiedy Astro: Marketing sites. Dokumentacja (docs.astro.build zbudowany w Astro). Blog, portfolio. E-commerce catalog (bez cart — Shopify). Kombinuj z Medusa.js. Landing pages. Nie Astro: Heavy SPA (dashboard, CRM). Real-time features bez Server Islands. App-like UI (todo app, chat). Ecosystem: Starlight — dokumentacja framework. Oparty na Astro. MDX, i18n, search. Deploy do dowolnego hostu.",
  },
];

const astroFeatures = [
  { feature: "Zero JS (domyślnie)", opis: "Tylko statyczny HTML — JS gdy potrzebny", korzysc: "PageSpeed 100, szybki LCP" },
  { feature: "Islands Architecture", opis: "client:visible, client:load, client:idle", korzysc: "Minimalne JS — tylko interaktywne komponenty" },
  { feature: "Content Collections", opis: "Type-safe MDX/MD z Zod schema", korzysc: "TypeScript dla treści, walidacja frontmatter" },
  { feature: "View Transitions", opis: "Animacje między stronami (transition:name)", korzysc: "SPA-like UX bez pełnego JS bundle" },
  { feature: "Multi-framework", opis: "React, Vue, Svelte, Solid islands", korzysc: "Używaj najlepszego UI per komponent" },
  { feature: "Astro DB", opis: "SQLite + Drizzle ORM + Astro Actions", korzysc: "Fullstack bez zewnętrznych serwisów" },
];

export default function BlogAstroDeepDiveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Astro 4 | Fotz Studio"
        description="Astro 4 deep dive: Content Collections (type-safe MDX), View Transitions (transition:name), Islands (client:visible), Astro DB (SQLite+Drizzle), Actions i…"
        canonicalUrl="https://fotz.pl/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024"

        keywords="Astro 4 co to jest, Astro 4 jak działa, Astro 4 tutorial, Astro 4 przykład, czym jest Astro 4, Astro 4 dokumentacja, Astro 4 przewodnik"

        canonical="https://fotz.pl/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024"
      />
      <ArticleSchema
        title="Astro 4 — Content Collections, View Transitions, Islands, Astro DB i Actions 2024?"
        description="6 funkcji Astro (Zero JS/Islands/Content Collections/View Transitions/Multi-framework/Astro DB) — type-safe treści, Islands architecture, Astro Actions i deployment na Vercel/Cloudflare."
        url="https://fotz.pl/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Astro 4", url: "https://fotz.pl/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-fuchsia-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Astro 4", href: "/blog/astro-4-content-collections-view-transitions-islands-astro-db-actions-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Astro / Static / Islands
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Astro 4 — zero JS
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Content Collections (type-safe MDX), View Transitions (transition:name),
              Islands (client:visible), Astro DB i multi-framework (React, Vue, Svelte).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "JS domyślnie", value: "0KB" },
                { label: "Animacje", value: "View Trans." },
                { label: "Treści", value: "Collections" },
                { label: "Islands", value: "client:visible" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych funkcji Astro 4</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Zero JS, Islands, Content Collections, View Transitions, Multi-framework i Astro DB —
              opis i korzyść.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Feature</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Korzyść</th>
                </tr>
              </thead>
              <tbody>
                {astroFeatures.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.feature}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.korzysc}</td>
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

      <RelatedArticles currentArticleId="astro-4-content-collections-view-transitions-islands-astro-db-actions-2024" />
      <ContactSection />
    </Layout>
  );
}
