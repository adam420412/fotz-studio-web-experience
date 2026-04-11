import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Starlight — dokumentacja oparta na Astro?",
    answer: "Starlight: Chris Swithinbank, Astro team. Dokumentacja techniczna na Astro. Instalacja: npm create astro@latest -- --template starlight. Lub do istniejącego: npx astro add starlight. astro.config.mjs: import {defineConfig} from 'astro/config'. import starlight from '@astrojs/starlight'. export default defineConfig({integrations: [starlight({title: 'Moje Docs', social: {github: 'https://github.com/...'}, sidebar: [{label: 'Guides', items: [{label: 'Pierwszy Krok', link: '/guides/intro/'}]}, {label: 'Reference', autogenerate: {directory: 'reference'}}]})]}). Treść: Markdown lub MDX w src/content/docs/. Frontmatter: title, description, sidebar: {order, label, badge}. Komponenty: Astro, React, Vue, Svelte (Astro islands). Starlight features: sidebar automatyczny. Search (Pagefind domyślnie). i18n wielojęzyczny. Dark mode. Versioning. Breadcrumbs. Previous/Next nawigacja. Ogłoszenia. Hero. Card i CardGrid. Tabs. Code (Expressive Code). Aside (warning, note, tip). Steps. Pagefind: offline search. Bez serwera. index po buildzie. Szybki. Opcjonalnie: Algolia DocSearch. Astro Content Collections: src/content/docs/**/*.mdx. Typed frontmatter. Zod schema. Expressive Code: składnia highlight. Frame. Diff. Line numbers. Mark. Starlight themes: themes/. Custom CSS. Tailwind plugin. Strona: @astrojs/starlight/components. Override components. Własny Header, Footer, Hero.",
  },
  {
    question: "Nextra — dokumentacja na Next.js z MDX?",
    answer: "Nextra: Shu Ding, Vercel. Dokumentacja Next.js + MDX. Dwa motywy: Docs i Blog. Instalacja: npx create-next-app -e https://github.com/shuding/nextra-docs-template. Lub manual: npm install next react react-dom nextra nextra-theme-docs. next.config.mjs: import nextra from 'nextra'. export default nextra({theme: 'nextra-theme-docs', themeConfig: './theme.config.tsx'})({...nextConfig}). theme.config.tsx: import {DocsThemeConfig} from 'nextra-theme-docs'. export default {logo: Logo /, project: {link: 'https://github.com/...'}, docsRepositoryBase: 'https://github.com/...', footer: {text: 'Moje Docs'}} satisfies DocsThemeConfig. Struktura: pages/. _meta.json — kolejność sidebaru. index.mdx — strona główna. MDX: import komponentów. Callout. Steps. FileTree. Tabs. Cards. Nextra v3 (App Router): app/ directory. Partial support. Migracja trwa. Flexsearch: search wbudowany. Szybki. Offline. Bez konfiguracji. Callout: import {Callout} from 'nextra/components'. Callout type='warning'. Ważna informacja /Callout. Typy: info, warning, error, default. Tabs: import {Tabs} from 'nextra/components'. Tabs items={['npm', 'yarn', 'pnpm']}. Tab npm install /Tab. /Tabs. Steps: import {Steps} from 'nextra/components'. Steps. h3 Krok pierwszy /h3. /Steps. Nextra Blog: theme nextra-theme-blog. Tagi. Autor. Data. RSS.",
  },
  {
    question: "Fumadocs — dokumentacja Next.js App Router natywna?",
    answer: "Fumadocs: Fuma Liang. Next.js App Router native. TypeScript. Najnowsze podejście. Instalacja: npx create-fumadocs-app. Lub manual: npm install fumadocs-core fumadocs-ui fumadocs-mdx. Dwa pakiety: fumadocs-core (headless). fumadocs-ui (komponenty). source.config.ts: import {defineDocs, defineConfig} from 'fumadocs-mdx/config'. export const {docs, meta} = defineDocs({dir: 'content/docs'}). export default defineConfig({}). app/docs/[[...slug]]/page.tsx: import {source} from '@/lib/source'. import {DocsPage, DocsBody, DocsTitle, DocsDescription} from 'fumadocs-ui/page'. export default async function Page({params}) { const page = source.getPage(params.slug). if (!page) notFound(). return DocsPage({toc: page.data.toc})(DocsTitle()(page.data.title), DocsBody()(page.data.body)) }. fumadocs-ui komponenty: DocsLayout, DocsPage, DocsBody. RollupPanel, Accordion. Tabs, Tab. Step, Steps. Callout. TypeTable. Banner. Search: wbudowany Orama. Full-text. Offline. Opcjonalnie Algolia. MDX: podejście MDX + Velite lub fumadocs-mdx. Remark/Rehype plugins. Kod: Shiki highlight. Fumadocs vs Nextra: fumadocs — App Router native, najnowszy. Nextra — Pages Router, dojrzalszy ekosystem. Fumadocs vs Starlight: fumadocs — Next.js. Starlight — Astro.",
  },
  {
    question: "Docusaurus 3 — React-based dokumentacja Meta?",
    answer: "Docusaurus 3: Meta. React. MDX 3. Stabilny, dojrzały. Instalacja: npx create-docusaurus@latest my-website classic. Struktura: docs/ — dokumentacja. blog/ — blog. src/pages/ — strony. static/ — zasoby. docusaurus.config.ts: import {Config} from '@docusaurus/types'. export default {title: 'Moje Docs', url: 'https://docs.example.com', baseUrl: '/', organizationName: 'myorg', projectName: 'mydocs', presets: [['classic', {docs: {sidebarPath: './sidebars.ts', editUrl: 'https://github.com/...'}, blog: {showReadingTime: true}, theme: {customCss: './src/css/custom.css'}}]]} satisfies Config. MDX 3 support. React komponenty w MDX. Mermaid diagramy: @docusaurus/theme-mermaid. mermaid wbudowany. Versioning: docusaurus docs:version 1.0. Multiple wersji. Selectable. i18n: docusaurus write-translations. src/i18n/ katalog. Algolia Search: @docusaurus/plugin-search-algolia. Najlepsze search. Requires Algolia account. Lokalnie: @docusaurus/plugin-search-local. Swizzling: npx docusaurus swizzle @docusaurus/theme-classic Navbar. Customizacja komponentów. TypeScript native: docusaurus.config.ts. Docusaurus 3 vs starsze: React 18. MDX 3. Szybszy. Lepszy TypeScript. Porównanie: Docusaurus — duży ekosystem, blog wbudowany. Starlight — lżejszy, Astro, szybszy build. Nextra — Next.js, minimalny. Fumadocs — App Router native, nowoczesny.",
  },
  {
    question: "Porównanie narzędzi dokumentacji — Starlight vs Nextra vs Fumadocs vs Docusaurus?",
    answer: "Starlight: Framework Astro. Build: static (MPA). Performance: bardzo szybki (Astro zero JS). Search: Pagefind offline. i18n: wbudowane. Versioning: plugin. Zalety: szybki, lekki, Astro ekosystem, zero runtime JS. Wady: wymaga znajomości Astro. Nextra: Framework Next.js (Pages Router). Build: SSG. Search: Flexsearch offline. Konfiguracja: minimalna. Zalety: Next.js znajomy, prosty setup, Vercel deploy trivial. Wady: Pages Router (stary), App Router wsparcie niepełne. Fumadocs: Framework Next.js (App Router). Build: SSG/SSR. Search: Orama offline. Typesafe: TypeScript-first. Zalety: najnowszy, App Router native, headless-friendly. Wady: młody, mniejszy ekosystem. Docusaurus: Framework React. Build: SSG. Search: Algolia/Local. Versioning: built-in. Blog: wbudowany. Zalety: dojrzały, wiele funkcji, Meta maintainer. Wady: cięższy, wolniejszy build. Kiedy Starlight: techniczna dokumentacja, Astro projekt, performance priorytet. Kiedy Nextra: Next.js projekt, szybki start, Vercel. Kiedy Fumadocs: nowy Next.js App Router projekt, TypeScript-first. Kiedy Docusaurus: duży projekt, potrzebujesz versioning+blog+i18n od razu. VitePress: alternatywa Vue-based. Szybki. Evan You. Dobry dla Vue/Vite projektów. MkDocs: Python based. Material theme. Dobry dla Python projektów. GitBook: SaaS. Płatny. WYSIWYG. Prosty.",
  },
];

const docFrameworks = [
  { framework: "Starlight", stack: "Astro + MDX", opis: "Zero JS runtime, Pagefind search, sidebar autogen, Expressive Code" },
  { framework: "Nextra", stack: "Next.js Pages + MDX", opis: "Flexsearch, Callout, Tabs, Steps, theme Docs lub Blog" },
  { framework: "Fumadocs", stack: "Next.js App Router", opis: "Orama search, headless core, fumadocs-ui, TypeScript-first" },
  { framework: "Docusaurus 3", stack: "React + MDX 3", opis: "Versioning, i18n, blog, Algolia, Meta maintainer" },
  { framework: "VitePress", stack: "Vue 3 + Vite", opis: "Szybki build, Vue components, Evan You, dobry dla Vue/Vite" },
  { framework: "MkDocs Material", stack: "Python + Markdown", opis: "Material Design, plugins, dobry dla Python projektów" },
];

export default function BlogStarlightNextraCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Starlight, Nextra, Fumadocs i Docusaurus — frameworki dokumentacji 2024 | Fotz.pl"
        description="Dokumentacja techniczna 2024: Starlight (Astro, Pagefind), Nextra (Next.js, Flexsearch), Fumadocs (App Router native), Docusaurus 3 (React, versioning). Porównanie i wybór."
        canonicalUrl="https://fotz.pl/blog/starlight-nextra-fumadocs-dokumentacja-astro-nextjs-2024"
      />
      <ArticleSchema
        title="Starlight, Nextra, Fumadocs i Docusaurus — frameworki dokumentacji 2024?"
        description="Starlight: Astro, Pagefind, Expressive Code. Nextra: Next.js, Flexsearch. Fumadocs: App Router native, Orama. Docusaurus 3: versioning, i18n, blog. VitePress: Vue 3."
        url="https://fotz.pl/blog/starlight-nextra-fumadocs-dokumentacja-astro-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Frameworki dokumentacji 2024", url: "https://fotz.pl/blog/starlight-nextra-fumadocs-dokumentacja-astro-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-cyan-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Frameworki dokumentacji 2024", href: "/blog/starlight-nextra-fumadocs-dokumentacja-astro-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Starlight / Nextra / Fumadocs / Docusaurus
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frameworki dokumentacji 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Starlight (Astro), Nextra (Next.js), Fumadocs (App Router)
              i Docusaurus 3 — porównanie i wybór.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Astro-based", value: "Starlight" },
                { label: "Next.js Pages", value: "Nextra" },
                { label: "App Router", value: "Fumadocs" },
                { label: "React + Meta", value: "Docusaurus" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 frameworków dokumentacji — stack i opis</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Starlight, Nextra, Fumadocs, Docusaurus, VitePress i MkDocs —
              stack i charakterystyka.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Stack</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {docFrameworks.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.stack}</td>
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
