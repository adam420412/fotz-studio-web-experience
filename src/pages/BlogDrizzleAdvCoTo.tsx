import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Drizzle ORM — zaawansowane relacje i Relations API?",
    answer: "Drizzle Relations: deklaratywne relacje. Nie SQL JOIN (osobny API). Instalacja: npm install drizzle-orm drizzle-kit. Schema z relacjami: import {relations} from 'drizzle-orm'. export const users = pgTable('users', {id: serial('id').primaryKey(), name: text('name').notNull()}). export const posts = pgTable('posts', {id: serial('id').primaryKey(), authorId: integer('author_id').references(() => users.id), title: text('title').notNull()}). export const usersRelations = relations(users, ({many}) => ({posts: many(posts)})). export const postsRelations = relations(posts, ({one}) => ({author: one(users, {fields: [posts.authorId], references: [users.id]})})}). Queryowanie z relacjami: const result = await db.query.users.findMany({with: {posts: true}}). Nested: with: {posts: {with: {comments: true}}}. where w relacjach: with: {posts: {where: (posts, {eq}) => eq(posts.published, true)}}. orderBy w relacjach: with: {posts: {orderBy: [desc(posts.createdAt)]}}. limit w relacjach: with: {posts: {limit: 5}}. columns select: with: {posts: {columns: {title: true, id: true}}}. extras: with: {posts: {extras: {titleLength: sql'length(title)'}}}}. Many-to-many: usersToGroups junction table. Relacje przez junction. Drizzle typuje wszystko. Typy inferencja: typeof users.$inferSelect. typeof users.$inferInsert.",
  },
  {
    question: "Drizzle ORM — prepared statements, transactions i raw SQL?",
    answer: "Prepared Statements: kompiluj raz, wykonuj wiele razy. const prepared = db.select().from(users).where(eq(users.id, sql.placeholder('id'))).prepare('get_user_by_id'). const user = await prepared.execute({id: 1}). Lepszy performance. Bezpieczeństwo: parametryzacja. Transactions: await db.transaction(async (tx) => { const user = await tx.insert(users).values({name: 'Jan'}).returning(). await tx.insert(posts).values({authorId: user[0].id, title: 'Post 1'}). return user[0] }). Nested transactions: tx.transaction(async (nestedTx) => {...}). Rollback: throw error -> automatyczny rollback. tx.rollback() -> manual. Savepoints: automatyczne dla nested. Raw SQL: import {sql} from 'drizzle-orm'. db.execute(sql'SELECT * FROM users WHERE id = ${userId}'). Mieszanie: select({count: sql'count(*)'.mapWith(Number)}).from(users). sql.raw() — niebezpieczne bez sanityzacji. Aggregation: count(), sum(), avg(), max(), min(). groupBy: .groupBy(posts.authorId). having: .having(({count}) => count(posts.id, {gt: 5})). Window functions: sql'ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY created_at)'. Subqueries: db.select().from(users).where(inArray(users.id, db.select({id: posts.authorId}).from(posts))). CTE: const usersPosts = db.with(db.select().from(posts).as('usersPosts')). db.with(usersPosts).select().from(users).",
  },
  {
    question: "Drizzle Kit — migracje, push i drizzle-studio?",
    answer: "Drizzle Kit: CLI dla migracji. drizzle.config.ts: import {defineConfig} from 'drizzle-kit'. export default defineConfig({schema: './src/schema.ts', out: './drizzle', dialect: 'postgresql', dbCredentials: {url: process.env.DATABASE_URL!}}). Komendy: npx drizzle-kit generate — generuj migracje SQL. npx drizzle-kit migrate — aplikuj migracje. npx drizzle-kit push — push schema bezpośrednio (dev). npx drizzle-kit studio — uruchom Drizzle Studio. npx drizzle-kit check — sprawdź schema vs DB. npx drizzle-kit up — aktualizuj format migracji. Generate flow: zmień schema.ts. npx drizzle-kit generate. Plik SQL w ./drizzle/. Przeglądnij SQL. npx drizzle-kit migrate. Push mode (dev): szybszy development. Bez plików migracji. npx drizzle-kit push. Nie dla produkcji. Drizzle Studio: wizualny DB browser. npx drizzle-studio lub npx drizzle-kit studio. localhost:4983. Przeglądaj tabele. Edytuj dane. Filtruj, sortuj. Lokalne tylko (nie SaaS). Custom migrations: ręcznie edytuj SQL. npx drizzle-kit generate — bazowy. Dodaj custom logikę. Introspect: npx drizzle-kit introspect — generuj schema z istniejącej DB. Reverse engineering. Multi-schema: schema: ['./src/**/*.schema.ts']. glob pattern. Wiele plików schema. Dialekty: postgresql, mysql, sqlite. libsql (Turso). planetscale (MySQL serverless).",
  },
  {
    question: "Drizzle z Neon, Turso i PlanetScale — edge-ready bazy danych?",
    answer: "Neon Postgres: serverless Postgres. Branching. Connection pooling. npm install @neondatabase/serverless drizzle-orm. import {neon} from '@neondatabase/serverless'. import {drizzle} from 'drizzle-orm/neon-http'. const sql = neon(process.env.DATABASE_URL!). const db = drizzle(sql). Neon + Next.js: HTTP driver — edge-compatible. Nie wymaga TCP. Serverless functions. Neon WebSocket: dla długo żyjących połączeń. neonConfig.webSocketConstructor = ws. Branching: Branch per PR. Isolacja środowisk. Automatyczny cleanup. Turso (libSQL): SQLite na edge. Globalny repliki. npm install @libsql/client drizzle-orm. import {createClient} from '@libsql/client'. import {drizzle} from 'drizzle-orm/libsql'. const client = createClient({url: process.env.TURSO_URL!, authToken: process.env.TURSO_TOKEN!}). const db = drizzle(client). Embedded replicas: lokalny SQLite + sync z Turso. Zero latency reads. Eventual consistency. PlanetScale (MySQL): serverless MySQL. Branching. npm install mysql2 drizzle-orm. import {drizzle} from 'drizzle-orm/planetscale-serverless'. import {connect} from '@planetscale/database'. const connection = connect({url: DATABASE_URL}). const db = drizzle(connection). Bez foreign keys w PlanetScale: schema bez references. Relacje logiczne. Drizzle + Cloudflare D1: sqlite driver. Wbudowane w CF Workers. drizzle-orm/d1. Drizzle + Cloudflare Hyperdrive: connection pooling. Edge + Postgres.",
  },
  {
    question: "drizzle-seed, drizzle-zod i drizzle-valibot — ekosystem Drizzle?",
    answer: "drizzle-seed: generowanie danych testowych. npm install drizzle-seed. import {seed} from 'drizzle-seed'. await seed(db, {users: [{name: 'Jan', email: 'jan@ex.com'}], posts: [{title: 'Post 1'}]}). Refine: await seed(db, schema, {count: 1000}). Automatyczna generacja po typach. Deterministic z seed value. drizzle-zod: generuj Zod schema z Drizzle. npm install drizzle-zod. import {createInsertSchema, createSelectSchema} from 'drizzle-zod'. const insertUserSchema = createInsertSchema(users). const selectUserSchema = createSelectSchema(users). Walidacja formularzy. API request validation. Automatyczne typy. Refine: createInsertSchema(users, {email: (schema) => schema.email('Invalid email')}). drizzle-valibot: jak drizzle-zod ale dla Valibot. npm install drizzle-valibot. Lżejsza walidacja. drizzle-graphql: generuj GraphQL schema. Automatyczne queries i mutations. drizzle-typebox: TypeBox support. OpenAPI schema. Drizzle + tRPC: input: insertUserSchema. Pełny type-safety. Drizzle + next-safe-action: type-safe Server Actions. Schema walidacja po stronie serwera. Drizzle Studio Pro (planowany): chmurowa wersja Studio. Collaboration. Historia zmian. Drizzle ORM v1.0: stabilna API. Brak breaking changes. Long-term support. Drizzle + Prisma migration: npx drizzle-kit introspect z existującej Prisma DB. Generuj Drizzle schema. Stopniowa migracja.",
  },
];

const drizzleFeatures = [
  { funkcja: "Relations API", typ: "Query Builder", opis: "Deklaratywne relacje, nested with, typy automatyczne" },
  { funkcja: "Prepared Statements", typ: "Performance", opis: "Kompiluj raz, placeholder, bezpieczeństwo SQL" },
  { funkcja: "Drizzle Kit generate", typ: "Migrations", opis: "SQL migracje z schema TypeScript, introspect" },
  { funkcja: "Drizzle Studio", typ: "Dev Tools", opis: "Wizualny browser DB, localhost:4983, edycja danych" },
  { funkcja: "drizzle-seed", typ: "Testing", opis: "Generowanie danych testowych z typów schema" },
  { funkcja: "drizzle-zod", typ: "Validation", opis: "Generuj Zod schema z tabel — walidacja automatyczna" },
];

export default function BlogDrizzleAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Drizzle ORM advanced — Relations, Drizzle Kit, Studio, Neon, Turso i drizzle-seed 2024 | Fotz.pl"
        description="Drizzle ORM zaawansowany: Relations API (with nested), prepared statements, transactions, Drizzle Kit migracje, Drizzle Studio, drizzle-seed, drizzle-zod, Neon i Turso."
        canonicalUrl="https://fotz.pl/blog/drizzle-orm-relations-kit-studio-neon-turso-drizzle-seed-2024"
      />
      <ArticleSchema
        title="Drizzle ORM advanced — Relations, Drizzle Kit, Studio, Neon, Turso i drizzle-seed 2024?"
        description="Drizzle ORM: Relations API, prepared statements, transakcje, Drizzle Kit migracje, Drizzle Studio, Neon/Turso/PlanetScale, drizzle-seed i drizzle-zod ekosystem."
        url="https://fotz.pl/blog/drizzle-orm-relations-kit-studio-neon-turso-drizzle-seed-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Drizzle ORM Advanced 2024", url: "https://fotz.pl/blog/drizzle-orm-relations-kit-studio-neon-turso-drizzle-seed-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-emerald-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Drizzle ORM Advanced 2024", href: "/blog/drizzle-orm-relations-kit-studio-neon-turso-drizzle-seed-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Drizzle ORM / Relations / Neon / Turso
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Drizzle ORM Advanced
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Relations API, Drizzle Kit migracje, Drizzle Studio,
              Neon/Turso i drizzle-seed ekosystem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Relacje", value: "Relations API" },
                { label: "Migracje", value: "Drizzle Kit" },
                { label: "GUI", value: "Studio" },
                { label: "Edge DB", value: "Neon/Turso" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Drizzle ORM — kluczowe funkcje i ekosystem</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Relations API, Prepared Statements, Kit, Studio, drizzle-seed i drizzle-zod —
              typ i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {drizzleFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.typ}</td>
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
