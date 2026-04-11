import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Payload CMS v3 — headless CMS natywny dla Next.js?",
    answer: "Payload CMS 3.0: James Mikrut. Next.js native. TypeScript-first. Self-hostable. Instalacja: npx create-payload-app. Lub do istniejącego Next.js: npm install payload @payloadcms/next @payloadcms/richtext-lexical. payload.config.ts: import {buildConfig} from 'payload'. export default buildConfig({secret: process.env.PAYLOAD_SECRET, db: postgresAdapter({pool: {connectionString: DATABASE_URL}}), editor: lexicalEditor({}), collections: [{slug: 'posts', fields: [{name: 'title', type: 'text', required: true}, {name: 'content', type: 'richText'}, {name: 'author', type: 'relationship', relationTo: 'users'}]}], globals: [{slug: 'settings', fields: [{name: 'siteName', type: 'text'}]}]}). Next.js integracja: app/(payload)/admin/[[...segments]]/page.tsx. Automatyczny admin panel. Brak osobnego serwera. Admin UI na /admin. Collections: każda = tabela DB. Versioning: wbudowane. Draft i publikacja. Lokalizacja: wielojęzyczne pola. Hooks: beforeOperation, afterRead, afterChange. Access control: pola, kolekcje. isLoggedIn, isAdmin. Rich text: Lexical editor. Bloki, headings, embed. Custom blocks. REST API: /api/posts. /api/posts/:id. Local API: payload.find({collection: 'posts'}). GraphQL: opcjonalne. Schema auto. DB adapters: PostgreSQL, MongoDB, SQLite.",
  },
  {
    question: "Sanity v3 i Keystatic — alternatywne CMS-y headless?",
    answer: "Sanity v3: Espen Hovlandsdal i team. Cloud-hosted lub self-hosted (GROQ Cloud). Studio v3 w React. Instalacja: npm create sanity@latest. Konfiguracja: defineConfig({name: 'my-project', title: 'My Project', projectId: '...', dataset: 'production', plugins: [structureTool()], schema: {types: [defineType({name: 'post', type: 'document', fields: [defineField({name: 'title', type: 'string'}), defineField({name: 'body', type: 'array', of: [{type: 'block'}]})]})]}}}). GROQ query: import {createClient} from '@sanity/client'. const client = createClient({projectId, dataset, useCdn: true}). const posts = await client.fetch('*[_type == \"post\"]{title, body}}'). Sanity Image: @sanity/image-url. imageUrlBuilder. sanity.io hosting. Image CDN. On-demand resize. Sanity Vision: GROQ playground. Keystatic: Thinkmill, Simon Vrachliotis. Git-based CMS. Markdown + YAML. No database. GitHub storage. Instalacja: npm install @keystatic/core @keystatic/next. keystatic.config.tsx: import {config, collection, fields} from '@keystatic/core'. export default config({storage: {kind: 'github', repo: 'owner/repo'}, collections: {posts: collection({label: 'Posts', slugField: 'title', path: 'src/content/posts/*', format: {contentField: 'content'}, schema: {title: fields.slug({name: {label: 'Title'}}), content: fields.markdoc({label: 'Content'})}})}}). Git commit na save. No backend. Velite: markdown, MDX processing. Content Collections alternative.",
  },
  {
    question: "Tina CMS i ContentLayer — CMS oparty o Git i pliki?",
    answer: "TinaCMS: Git-backed CMS. Visual editing. Instalacja: npx @tinacms/cli init. tina/config.ts: import {defineConfig} from 'tinacms'. export default defineConfig({branch: 'main', clientId: CLIENT_ID, token: TOKEN, build: {outputFolder: 'tina', publicFolder: 'public'}, media: {tina: {mediaRoot: 'public', publicFolder: 'public'}}, schema: {collections: [{name: 'post', label: 'Posts', path: 'content/posts', fields: [{type: 'string', name: 'title', isTitle: true, required: true}, {type: 'rich-text', name: 'body', isBody: true}]}]}}). Tina Cloud: sync. Edycja in-context. Visual sidebar. Open Visual Editing. ContentLayer: deprecated 2024. Warui 2024. Velite jako zamiennik. Velite: npm install velite. velite.config.ts: import {defineConfig} from 'velite'. export default defineConfig({collections: {posts: {name: 'Post', pattern: 'content/posts/**/*.mdx', schema: z.object({title: z.string(), date: z.string(), body: z.string()})}}}). npx velite. Generuje .velite/ z typed data. import {posts} from '.velite'. Fumadocs: dokumentacja. MDX + Velite. Next.js native. Astro Content Layer (v5): alternatywa dla Astro. vfile processing. Content Collections typing. next-mdx-remote: render remote MDX. serialize + MDXRemote. Dobry dla CMS z MDX. Sanity Portable Text: @portabletext/react. Renderuj rich text. Custom components per type.",
  },
  {
    question: "Porównanie headless CMS — Payload vs Sanity vs Contentful vs Strapi?",
    answer: "Payload CMS v3: open source. Self-host lub cloud. Next.js native. TypeScript-first. DB własna (Postgres/Mongo). Zalety: własna infrastruktura. Programistyczny API. Brak vendor lock. Wady: wymaga utrzymania serwera. Bardziej techniczna konfiguracja. Sanity: cloud + open source Studio. GROQ query language. Dobry DX. CDN image. Zalety: świetne Studio. Real-time collaboration. Scalable. Wady: koszty przy dużym ruchu. Vendor lock (data w cloud). Contentful: enterprise SaaS. Dojrzały. REST + GraphQL. Zalety: stabilny. Integracje. Enterprise support. Wady: drogi. Przestarzałe UI. Vendor lock. Strapi v5: open source. Self-host. REST + GraphQL. Zalety: pluginy. Marketplace. Duża społeczność. Wady: wolniejszy niż Payload. TypeScript mniej dojrzały. Keystatic: Git-based. Prosty. Wady: brak real-time. GitHub only (lub local). Decap CMS (Netlify CMS): Git-based. Przestarzały UI. Mała społeczność. Wybór: blog / portfolio: Keystatic (git) lub Velite. Startup SaaS: Payload v3 (kontrola) lub Sanity (DX). Enterprise: Contentful lub Sanity. Dokumentacja techniczna: Fumadocs, Nextra, Starlight. Marketing site: Sanity lub Tina (visual editing). E-commerce CMS: Medusa (headless commerce). Payload z Medusa plugin.",
  },
  {
    question: "Payload CMS v3 — collections, access control i hooks?",
    answer: "Collections definicja: slug — identyfikator. labels — singular, plural. admin — panel config. hooks — eventy. access — kontrola. fields — pola. Field types: text, textarea, number, email, date, richText, array, blocks, relationship, upload, checkbox, select, radio, json, code, point. Array field: name: 'gallery', type: 'array', fields: [{name: 'image', type: 'upload', relationTo: 'media'}]. Blocks field: type: 'blocks', blocks: [heroBlock, ctaBlock, textBlock]. Polymorphic content. Relationship: type: 'relationship', relationTo: 'categories', hasMany: true. Access Control: collection level: {create: isLoggedIn, read: () => true, update: isAdmin, delete: isAdmin}. Field level: {name: 'privateNotes', access: {read: isAdmin}}. Row-level: read: ({req}) => ({owner: {equals: req.user.id}}). Hooks: beforeOperation, afterOperation. beforeRead, afterRead. beforeChange, afterChange. afterDelete. const afterCreateHook = async ({doc, req}) => { await sendWelcomeEmail(doc.email) }. Global hooks: afterChange na settings -> invalidate cache. Versions: versions: {maxPerDoc: 10, drafts: {autosave: {interval: 2000}}}. publish/draft status. version history. Endpoints: custom endpoints. endpoints: [{path: '/my-endpoint', method: 'get', handler: async (req, res) => {...}}]. REST API extension. Email: payload.sendEmail. Resend lub Nodemailer. Local API: bez HTTP overhead. Server components. payload.find, payload.create, payload.update.",
  },
];

const cmsTools = [
  { cms: "Payload CMS v3", typ: "Self-hosted", opis: "Next.js native, TypeScript, Postgres/Mongo, REST+GraphQL" },
  { cms: "Sanity v3", typ: "Cloud + Open Source", opis: "GROQ, Studio, real-time, CDN image, collaboration" },
  { cms: "Keystatic", typ: "Git-based", opis: "GitHub storage, Markdown+YAML, no database, visual edit" },
  { cms: "TinaCMS", typ: "Git-backed", opis: "Visual editing, Tina Cloud sync, in-context sidebar" },
  { cms: "Velite", typ: "File-based", opis: "ContentLayer successor — MDX+YAML, typed, Next.js" },
  { cms: "Strapi v5", typ: "Self-hosted", opis: "Open source, pluginy, REST+GraphQL, marketplace" },
];

export default function BlogPayloadCmsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Payload CMS v3, Sanity, Keystatic i Tina — headless CMS Next.js 2024 | Fotz.pl"
        description="Headless CMS 2024: Payload CMS v3 (Next.js native, self-hosted), Sanity v3 (GROQ, Studio), Keystatic (Git-based), TinaCMS (visual), Velite (ContentLayer zamiennik)."
        canonicalUrl="https://fotz.pl/blog/payload-cms-v3-sanity-keystatic-tina-headless-cms-nextjs-2024"
      />
      <ArticleSchema
        title="Payload CMS v3, Sanity, Keystatic i Tina — headless CMS Next.js 2024?"
        description="Payload v3: Next.js native collections. Sanity v3: GROQ, Studio. Keystatic: Git-based. TinaCMS: visual editing. Velite: ContentLayer zamiennik. Porównanie CMS."
        url="https://fotz.pl/blog/payload-cms-v3-sanity-keystatic-tina-headless-cms-nextjs-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Headless CMS Next.js 2024", url: "https://fotz.pl/blog/payload-cms-v3-sanity-keystatic-tina-headless-cms-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-violet-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Headless CMS Next.js 2024", href: "/blog/payload-cms-v3-sanity-keystatic-tina-headless-cms-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CMS / Payload / Sanity / Keystatic
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Headless CMS Next.js 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Payload v3 (Next.js native), Sanity v3 (GROQ),
              Keystatic (Git) i Velite (MDX).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Self-hosted", value: "Payload v3" },
                { label: "Cloud DX", value: "Sanity v3" },
                { label: "Git-based", value: "Keystatic" },
                { label: "Visual", value: "TinaCMS" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 headless CMS — typ i opis</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Payload, Sanity, Keystatic, TinaCMS, Velite i Strapi —
              typ i charakterystyka.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">CMS</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {cmsTools.map((c, i) => (
                  <tr key={c.cms} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{c.cms}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{c.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{c.opis}</td>
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
