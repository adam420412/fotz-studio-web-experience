import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Prisma 6 — breaking changes i nowe funkcje?",
    answer: "Prisma 6 (2024): Nikolas Burk i team. Breaking changes vs v5. Instalacja: npm install prisma@6 @prisma/client@6. npx prisma generate. Kluczowe zmiany: Omit fields API stable (było preview). const user = await prisma.user.findUnique({where: {id}, omit: {password: true}}). Odfiltrowuje pola. Never expose passwords. Nullable scalar list support. PostgreSQL arrays nullable. Bun runtime stable support. driver adapters stable. TypedSQL stable. Neon, Turso, D1 adapters produkcyjne. TypedSQL (Prisma 6): import {sql} from '@prisma/client'. Typowane raw SQL. npx prisma generate. Plik .sql -> TypeScript functions. import {selectUserById} from '@prisma/client/sql'. const user = await prisma.$queryRawTyped(selectUserById(userId)). Pełna type-safety dla raw SQL. Sprawdzone w CI. Prisma Extensions (stable v6): model extensions. result extensions. client extensions. query middleware extensions. Soft delete: filtry. Timestamps auto. find-by-email helpers. Tenant isolation middleware. Migracja v5 -> v6: sprawdź breaking changes. Nullable arrays jeśli używane. Omit API jeśli używałeś workaroundów. Generator update: generator client { provider = 'prisma-client-js'. previewFeatures = [...] }. Uwaga na usunięte preview features.",
  },
  {
    question: "Prisma Accelerate — global connection pooling i edge?",
    answer: "Prisma Accelerate: connection pooling as a service. Edge-compatible. Cache wbudowane. Bez cold starts. Jak działa: Twoja app -> Prisma Accelerate (HTTPS) -> Twoja baza danych. HTTP zamiast TCP. Serverless i edge kompatybilne. Setup: Dashboard: console.prisma.io. Utwórz projekt. Skopiuj API key. DATABASE_URL w env: prisma://accelerate.prisma-data.net/?api_key=KEY. npm install @prisma/extension-accelerate. import {withAccelerate} from '@prisma/extension-accelerate'. const prisma = new PrismaClient({datasourceUrl: process.env.DATABASE_URL}).$extends(withAccelerate()). Caching queries: const users = await prisma.user.findMany({cacheStrategy: {ttl: 60}}). ttl: czas w sekundach. srsttl: stale-revalidate seconds. Cache invalidation: await prisma.$accelerate.invalidate({tags: ['users']}). Tag-based invalidation. Query-level cache. Cache invalidation po mutation. Connection pooling: automatyczny. Cold start problem rozwiązany. Miniomal latency. Metrics: dashboard shows. Pool stats. Query performance. Cache hit rate. Deployment: Vercel Edge Functions. Cloudflare Workers. AWS Lambda. Railway. Fly.io. Limits: free tier. rate limits. Pricing: pay per query. Alternatywy: PgBouncer (self-host). Supabase connection pooler. Neon serverless driver. Ale Accelerate = managed + cache.",
  },
  {
    question: "Prisma Pulse — real-time database events i subscriptions?",
    answer: "Prisma Pulse: real-time database change events. PostgreSQL logical replication. Server-sent events. Bez polling. Setup: Pulse w console.prisma.io. API key. npm install @prisma/extension-pulse. import {withPulse} from '@prisma/extension-pulse'. const client = new PrismaClient().$extends(withPulse({apiKey: process.env.PULSE_API_KEY}). Subscription: const subscription = await client.user.subscribe(). for await (const event of subscription) { if (event.action === 'create') { console.log('New user:', event.after) } if (event.action === 'update') { console.log('Updated:', event.before, '->', event.after) } if (event.action === 'delete') { console.log('Deleted:', event.before) } }. Filtrowanie: const sub = await client.user.subscribe({create: {after: {role: 'ADMIN'}}}). Tylko nowi adminowie. Stop subscription: subscription.stop(). Cleanup w useEffect. Next.js Route Handler z SSE: const stream = new ReadableStream({async start(controller) { const sub = await client.user.subscribe(). for await (const event of sub) { controller.enqueue(encoder.encode('data: ' + JSON.stringify(event) + '\\n\\n')) } }}). return new Response(stream, {headers: {'Content-Type': 'text/event-stream'}}). Client-side: const eventSource = new EventSource('/api/users/stream'). eventSource.onmessage = (e) => updateUI(JSON.parse(e.data)). Use cases: live dashboards. Real-time notifications. Collaborative editing trigger. Invalidate cache on change. Audit logging.",
  },
  {
    question: "Prisma driver adapters — Neon, Turso i Cloudflare D1?",
    answer: "Driver Adapters: Prisma bez node_modules TCP. Bezpośrednie zapytania przez HTTP lub WebSocket. Neon adapter: npm install @prisma/adapter-neon @neondatabase/serverless. import {neon} from '@neondatabase/serverless'. import {PrismaNeon} from '@prisma/adapter-neon'. const sql = neon(DATABASE_URL). const adapter = new PrismaNeon(sql). const prisma = new PrismaClient({adapter}). Neon HTTP: edge-compatible. bez TCP. Serverless functions. Turso / libSQL adapter: npm install @prisma/adapter-libsql @libsql/client. import {createClient} from '@libsql/client'. import {PrismaLibSQL} from '@prisma/adapter-libsql'. const libsql = createClient({url: TURSO_URL, authToken: TURSO_TOKEN}). const adapter = new PrismaLibSQL(libsql). const prisma = new PrismaClient({adapter}). SQLite na edge. Globalny replica. Cloudflare D1 adapter: npm install @prisma/adapter-d1. import {PrismaD1} from '@prisma/adapter-d1'. export default {async fetch(request, env) { const adapter = new PrismaD1(env.DB). const prisma = new PrismaClient({adapter}). const users = await prisma.user.findMany(). }}. Wbudowane w CF Workers. Postgres.js adapter: npm install @prisma/adapter-pg. Tradycyjny node-postgres. Przyspieszone połączenie. schema.prisma: generator client { provider = 'prisma-client-js'. previewFeatures = ['driverAdapters'] }. datasource db { provider = 'postgresql'. url = env('DATABASE_URL') }. Wszystkie adaptery w stable w Prisma 6.",
  },
  {
    question: "Prisma vs Drizzle vs Kysely — wybór ORM w 2024?",
    answer: "Prisma: schema.prisma. Codegen. Prisma Client. Migracje. Studio. Zalety: doskonały DX. Studio wizualny. Relacje intuicyjne. Ogromna społeczność. TypeScript dobre. Wady: bundle size (5MB+). Wolniejszy niż Drizzle. Query API ograniczone. Nie zawsze optymalne SQL. Drizzle: SQL-first. Schema w TypeScript. Lightweight (1MB). Szybszy. Drizzle Kit, Studio. Zalety: lekki. Szybki. SQL bliski. TypeScript pierwszoklasowy. Edge-native. Wady: mniej dojrzały ekosystem. Mniej dokumentacji. Relacje API inne niż SQL JOIN. Kysely: query builder. Czyste SQL z typami. Minimalistyczny. Zalety: pełna kontrola SQL. TypeScript perfekcyjne. Brak magii. Wady: verbose. Sam piszesz wszystko. Brak migracji. Brak generatora schematu. Rekomendacje 2024: new project z Next.js: Prisma lub Drizzle. Performance-critical: Drizzle. Full SQL control: Kysely. Szybki prototyp: Prisma. Edge/serverless: Drizzle lub Prisma z Accelerate. Rozmiar projektu: mały: dowolny. średni: Prisma lub Drizzle. duży: Drizzle (wydajność) lub Prisma (DX). Migracja Prisma -> Drizzle: npx drizzle-kit introspect. Generuj Drizzle schema. Stopniowe przejście. Raw SQL backup: oba mają raw SQL. Prisma TypedSQL. Drizzle sql``. Kombinacja: Drizzle dla wydajnych queries. Prisma Accelerate dla edge. Realna organizacja: jedna baza kodu, jeden ORM.",
  },
];

const prismaFeatures = [
  { funkcja: "Prisma 6 Omit API", wersja: "v6 (stable)", opis: "Odfiltrowuj pola w zapytaniu — omit: {password: true}" },
  { funkcja: "TypedSQL", wersja: "v6 (stable)", opis: "Type-safe raw SQL — .sql pliki generują TS functions" },
  { funkcja: "Prisma Accelerate", wersja: "Cloud service", opis: "Connection pooling, cache, edge-compatible przez HTTP" },
  { funkcja: "Prisma Pulse", wersja: "Cloud service", opis: "Real-time events — PostgreSQL logical replication" },
  { funkcja: "Neon driver adapter", wersja: "v6 (stable)", opis: "HTTP driver — edge, serverless bez TCP" },
  { funkcja: "Turso/libSQL adapter", wersja: "v6 (stable)", opis: "SQLite na edge z globalnym replica" },
];

export default function BlogPrisma6AccelerateCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Prisma 6, Prisma Accelerate i Pulse — ORM, connection pooling i real-time 2024 | Fotz.pl"
        description="Prisma 6: Omit API, TypedSQL, driver adapters (Neon/Turso/D1). Prisma Accelerate: connection pooling + cache na edge. Prisma Pulse: real-time events. Prisma vs Drizzle 2024."
        canonicalUrl="https://fotz.pl/blog/prisma-6-accelerate-pulse-driver-adapters-neon-turso-2024"
      />
      <ArticleSchema
        title="Prisma 6, Prisma Accelerate i Pulse — ORM, connection pooling i real-time 2024?"
        description="Prisma 6: Omit, TypedSQL, adapters. Prisma Accelerate: edge pooling + cache. Prisma Pulse: real-time PG events. Driver adapters Neon/Turso/D1. Prisma vs Drizzle porównanie."
        url="https://fotz.pl/blog/prisma-6-accelerate-pulse-driver-adapters-neon-turso-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Prisma 6 i Accelerate 2024", url: "https://fotz.pl/blog/prisma-6-accelerate-pulse-driver-adapters-neon-turso-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Prisma 6 i Accelerate 2024", href: "/blog/prisma-6-accelerate-pulse-driver-adapters-neon-turso-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Prisma / ORM / Edge / Real-time
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prisma 6 i Accelerate
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Omit API, TypedSQL, Prisma Accelerate (pooling+cache),
              Pulse (real-time) i driver adapters.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Omit fields", value: "Prisma 6" },
                { label: "Edge pooling", value: "Accelerate" },
                { label: "Real-time", value: "Pulse" },
                { label: "Edge DB", value: "Neon/Turso" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prisma 6 — kluczowe funkcje i usługi</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Omit, TypedSQL, Accelerate, Pulse i driver adapters —
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
                {prismaFeatures.map((f, i) => (
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
