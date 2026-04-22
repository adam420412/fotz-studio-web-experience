import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to są serverless bazy danych i czym się różnią od tradycyjnych?",
    answer: "Serverless bazy danych: brak zarządzania serwerem. Skalowanie automatyczne do zera. Płać za użycie (requests/storage). Nie zawsze zero-cold-start. Kategorie: Serverless Postgres (Neon, Supabase, CockroachDB Serverless, Xata). Serverless MySQL (PlanetScale). Serverless SQLite (Turso/libSQL, Cloudflare D1). HTTP API databases (Turso, PlanetScale, Neon HTTP). Traditional vs Serverless: Traditional — zawsze running. Płacisz za czas. Szybkie queries. Serverless — scale to zero. Płacisz za użycie. Cold start (sekunda lub mniej). Serverless dla: serverless functions (Vercel, Cloudflare). Low traffic apps. Startups. Per-request billing. Nie dla: high-frequency real-time. Gaming leaderboards. Constant low-latency. Prisma + serverless: connection pooling wymagany. PgBouncer, Supabase Pooler, Neon pooling. Prisma Data Proxy (deprecated, teraz Prisma Accelerate). Neon: branching (jak Git dla bazy). Instant preview environments. Serverless Postgres kompatybilny. Drizzle + Neon: npx drizzle-kit push. Neon HTTP driver — brak stałego połączenia. @neondatabase/serverless. Cold start: Neon — instant (suspend/resume WAL). PlanetScale — fast startup. Turso — SQLite embedded, ultra-fast.",
  },
  {
    question: "Neon i PlanetScale — serverless Postgres i MySQL?",
    answer: "Neon Serverless Postgres: branching jak Git. Każdy branch = osobna baza. Preview deployments z osobną bazą. Instant resume po uśpieniu. HTTP driver dla Edge: @neondatabase/serverless. import {neon} from '@neondatabase/serverless'. const sql = neon(process.env.DATABASE_URL). const rows = await sql('SELECT * FROM users WHERE id = $1', [id]). Suspend policy: auto-suspend po 5 min braku aktywności. Instant wake na request. Niskie koszty przy low traffic. Neon branching: neon branches create --name feature/login. Każdy PR = własna baza. Zero kopiowanie danych (Copy-on-Write). Merge branch po PR merge. Neon + Vercel integration: automatyczne branch per preview. Environment variables auto. Drizzle + Neon: drizzle(neon(connectionString)). PlanetScale: MySQL-kompatybilny. Vitess (YouTube scale). Branching for schema changes. Schema branching — nie data. Deploy requests (schema changes). Bezpieczne migracje bez downtime. Sharding — Vitess automatyczny. Prisma + PlanetScale: relationMode: 'prisma' (brak FK w Vitess). db push zamiast migrate. No schema migration history. PlanetScale Boost: query caching. In-memory cache per workspace. 100x szybsze powtarzające się queries. PlanetScale Scaler Pro: dla produkcji. Nie serverless — dedicated instances. CockroachDB Serverless: distributed SQL. Multi-region. Horizontal scale. PostgreSQL compatible. Dobry dla global apps.",
  },
  {
    question: "Turso i Cloudflare D1 — SQLite na edge?",
    answer: "Turso (libSQL): SQLite na edge. libSQL — fork SQLite z HTTP support. Multi-tenancy — wiele baz. Embedded replicas — lokalna kopia w edge function. Ultra-low latency queries. @libsql/client: import {createClient} from '@libsql/client'. const client = createClient({url: process.env.TURSO_URL, authToken: process.env.TURSO_TOKEN}). await client.execute('SELECT * FROM users'). await client.batch(['INSERT...', 'UPDATE...']). Drizzle + Turso: drizzle(client). Embedded replicas: lokalna SQLite replika. Sync z Turso cloud. Zapytania z lokalnej kopii — zero network latency. Świetne dla read-heavy apps. Dla każdego użytkownika osobna baza (multi-tenant). Cloudflare D1: SQLite na Cloudflare Workers. env.DB.prepare('SELECT * FROM users').all(). Wazuma: baza w Worker — brak zewnętrznego połączenia. Alpha (2024): produktuje lepiej. Darmowy tier. Wink: D1 z Drizzle. WASM SQLite. Hrana: SQLite HTTP API. Ceny Turso: bezpłatny tier (3 DBs, 500MB). Starter: $6/mies. Scaler: $29/mies. Porównanie: Turso — standalone apps, multi-tenant, global. D1 — Cloudflare Workers integracja. Neon — serverless Postgres (PostgreSQL features). PlanetScale — MySQL-kompatybilny, Vitess scale. libSQL vs SQLite: libSQL = SQLite + replikacja + HTTP. Wstecznie kompatybilny. SQLite wasm: sql.js, wa-sqlite. SQLite w przeglądarce przez WASM. OPFS dla persistence.",
  },
  {
    question: "ElectricSQL i local-first databases — offline-first architektura?",
    answer: "Local-first: dane przechowywane lokalnie. Sync gdy połączenie dostępne. Brak 'offline mode' jako afterthought — offline jest domyślny. Zawsze działa — nie zależy od sieci. ElectricSQL: local-first SQLite sync. SQLite w przeglądarce (OPFS) + PostgreSQL na serwerze. Automatyczna synchronizacja przez Electric. Shapes: reactive queries. const {results} = useShape({url: 'http://api/v1/shape/items'}). Real-time updates gdy dane się zmieniają. CRDT-free (electric robi merge). Instalacja: npm install electric-sql @electric-sql/react. Zasilane przez Postgres logical replication. Sync engine: Postgres -> Electric Sync Engine -> klienci. Instant local reads. Background sync. Konflikt resolution: Electric obsługuje przez server-wins lub CRDTs. PowerSync: alternatywa. SQLite + Supabase/Postgres. JavaScript SDK. React Native support. WatermelonDB: React Native offline-first. SQLite. Synchronizacja przez Sync Adapter. Dobry dla mobile. rxdb: reaktywna baza offline. CouchDB sync (PouchDB). IndexedDB storage. GraphQL offline: Apollo Client offline (InMemoryCache). Apollo persistence (AsyncStorage/IndexedDB). TanStack Query offline: networkMode: 'offlineFirst'. Queries run offline, sync on reconnect. Kiedy local-first: mobile apps. Field work (bez internetu). Real-time collaborative. High-performance reads. Nie dla: sensitive data (encryption required). Complex permissions (hard offline). Regulatory compliance (audit trails).",
  },
  {
    question: "Connection pooling i database performance dla serverless?",
    answer: "Problem: serverless functions = wiele połączeń. Każda funkcja = nowe połączenie. Postgres max connections (zwykle 100). Cold start + connection = latency. PgBouncer: connection pooler. Transaction mode: share connections. Nie dla prepared statements. Supabase: wbudowany Supabase Pooler (port 6543). Transaction mode domyślny. IPv4 dla Vercel. Prisma Accelerate: Prisma Data Platform. Global connection pooling. Edge cache dla queries. npm install @prisma/extension-accelerate. prisma.$extends(withAccelerate()). findMany({cacheStrategy: {ttl: 60}}). Neon pooling: wbudowany w Neon. Serverless driver — HTTP zamiast TCP. @neondatabase/serverless — nie wymaga pooling. Drizzle ORM + serverless: import {drizzle} from 'drizzle-orm/neon-http'. Automatycznie HTTP requests. Brak persistent connection. Singletons w serverless: global._prisma — reuse connection. if (!global._prisma) { global._prisma = new PrismaClient() }. module.exports = global._prisma. Ale: nie pomaga przy cold start. Query optimization: EXPLAIN ANALYZE — plan zapytania. Indexes na WHERE, JOIN, ORDER BY. N+1 problem: include w Prisma. DataLoader — batch queries. Eager loading vs lazy loading. Connection timeout: pool_timeout w Prisma. connectTimeout w libpq. Retry logic przy connection error. Read replicas: Prisma readReplica extension. Neon read replicas. Skaluj read traffic osobno. Monitoring: Prisma Studio. pg_stat_statements — slow queries. Database dashboards (Neon, Turso, PlanetScale).",
  },
];

const databases = [
  { baza: "Neon", typ: "Serverless Postgres", branching: "Tak (Git-like)", edge: "HTTP driver", kiedy: "Preview envs, serverless Postgres, branching" },
  { baza: "PlanetScale", typ: "Serverless MySQL (Vitess)", branching: "Schema branching", edge: "HTTP API", kiedy: "MySQL scale, schema changes bez downtime" },
  { baza: "Turso (libSQL)", typ: "Serverless SQLite", branching: "Nie", edge: "Embedded replicas", kiedy: "Multi-tenant, edge, ultra-low latency reads" },
  { baza: "Cloudflare D1", typ: "SQLite na Workers", branching: "Nie", edge: "Worker binding", kiedy: "Cloudflare Workers integracja, WASM SQLite" },
  { baza: "ElectricSQL", typ: "Local-first SQLite sync", branching: "Nie", edge: "OPFS klient", kiedy: "Offline-first, local reads, Postgres sync" },
  { baza: "CockroachDB", typ: "Distributed Postgres", branching: "Nie", edge: "Standard PG", kiedy: "Global apps, multi-region, horizontal scale" },
];

export default function BlogServerlessDbCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Serverless Bazy Danych | Fotz Studio"
        description="Neon (serverless Postgres, branching), PlanetScale (MySQL Vitess), Turso/libSQL (SQLite edge, embedded replicas), Cloudflare D1, ElectricSQL (local-first)…"
        canonical="https://fotz.pl/blog/serverless-database-neon-planetscale-turso-d1-electric-sql-2024"

        keywords="Serverless Bazy Danych co to jest, Serverless Bazy Danych jak działa, Serverless Bazy Danych tutorial, Serverless Bazy Danych przykład, czym jest Serverless Bazy Danych, Serverless Bazy Danych dokumentacja, Serverless Bazy Danych przewodnik"
      />
      <ArticleSchema
        title="Serverless Bazy Danych — Neon, PlanetScale, Turso, D1, ElectricSQL 2024?"
        description="6 serverless baz danych (Neon/PlanetScale/Turso/D1/ElectricSQL/CockroachDB) — branching, edge replicas, local-first i connection pooling dla serverless functions."
        url="https://fotz.pl/blog/serverless-database-neon-planetscale-turso-d1-electric-sql-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Serverless Databases 2024", url: "https://fotz.pl/blog/serverless-database-neon-planetscale-turso-d1-electric-sql-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Serverless Databases", url: "/blog/serverless-database-neon-planetscale-turso-d1-electric-sql-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Database / Serverless / Edge
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Serverless Bazy Danych 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Neon (branching), PlanetScale (Vitess), Turso/libSQL (SQLite edge),
              Cloudflare D1 i ElectricSQL (local-first) — bazy bez serwera.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "PG branching", value: "Neon" },
                { label: "MySQL Vitess", value: "PlanetScale" },
                { label: "SQLite edge", value: "Turso" },
                { label: "Local-first", value: "ElectricSQL" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 serverless baz danych — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Neon, PlanetScale, Turso, D1, ElectricSQL i CockroachDB —
              typ, branching, edge support i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Baza</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Branching</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Edge</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {databases.map((d, i) => (
                  <tr key={d.baza} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{d.baza}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{d.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{d.branching}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{d.edge}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{d.kiedy}</td>
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

      <RelatedArticles currentArticleId="serverless-database-neon-planetscale-turso-d1-electric-sql-2024" />
      <ContactSection />
    </Layout>
  );
}
