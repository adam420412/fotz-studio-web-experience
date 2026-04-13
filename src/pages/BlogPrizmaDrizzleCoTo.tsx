import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Prisma ORM i jak działa schema-first approach?",
    answer: "Prisma: nowoczesny ORM dla TypeScript i Node.js (Prisma Data, 2019). Schema-first approach: definiujesz model w schema.prisma (Prisma Schema Language). Prisma generuje TypeScript typy automatycznie. Trzy komponenty Prisma: Prisma Client — auto-generated, type-safe query builder. Prisma Migrate — migracje bazy danych z schema. Prisma Studio — GUI do przeglądania danych. Przykład schema: model User {id Int @id @default(autoincrement()). name String. email String @unique. posts Post[]}. Prisma Client query: const user = await prisma.user.findUnique({where: {email: 'test@test.pl'}, include: {posts: true}}). TypeScript zna typ user: User & {posts: Post[]}. Relacje Prisma: one-to-one, one-to-many, many-to-many. @relation dekorator. Implicit many-to-many (join table automatyczna). Filtry: where: {AND, OR, NOT, contains, startsWith, gt, gte, lt, lte, in, notIn}. Zagnieżdżone queries: include (eager loading), select (projekcja). Raw queries: prisma.$queryRaw, prisma.$executeRaw. Transakcje: prisma.$transaction([...]). Interactive transactions. Bazy danych: PostgreSQL, MySQL, SQLite, SQL Server, MongoDB, CockroachDB. Prisma Accelerate: connection pooling + global edge cache. Prisma Pulse: real-time database events.",
  },
  {
    question: "Drizzle ORM — co to jest i dlaczego jest alternatywą dla Prisma?",
    answer: "Drizzle ORM: TypeScript ORM z SQL-first approach (2022). Filozofia: 'If you know SQL, you know Drizzle'. Minimalistyczny, bez magic. SQL-like API zamiast abstrakcji. Drizzle Schema (TypeScript): const users = pgTable('users', {id: serial('id').primaryKey(), name: text('name').notNull(), email: varchar('email', {length: 255}).notNull().unique()}). Queries: db.select().from(users).where(eq(users.email, 'test@test.pl')). db.insert(users).values({name: 'Jan', email: 'jan@example.pl'}). db.update(users).set({name: 'Nowe'}).where(eq(users.id, 1)). Joins: db.select().from(users).innerJoin(posts, eq(posts.userId, users.id)). SQL-like, czytelny. Drizzle Kit: CLI do migracji. drizzle-kit generate — generuj SQL migration. drizzle-kit push — push schema do DB bez migracji (dev). drizzle-kit migrate — uruchom migracje. Zalety Drizzle vs Prisma: Bundle size: Drizzle 7KB (treeshakeable), Prisma 5MB+. Edge ready (Cloudflare Workers, Vercel Edge). Brak osobnego CLI binarnego (Prisma wymaga). SQL transparent (zero magic). Szybszy (mniej overhead). Wady Drizzle vs Prisma: Mniej dojrzały ekosystem. Mniej integracji. Pisanie w SQL-style mniej intuicyjne dla beginnerów. Bazy danych: PostgreSQL (postgres-js, node-postgres). MySQL (mysql2). SQLite (better-sqlite3, libsql, Bun). Turso (libSQL — SQLite na edge). Neon, PlanetScale, CockroachDB.",
  },
  {
    question: "Prisma Migrate vs Drizzle Kit — zarządzanie migracjami bazy danych?",
    answer: "Prisma Migrate: workflow declaratywny. Edytujesz schema.prisma. npx prisma migrate dev -- name add_user_role. Prisma generuje SQL migration. Git tracking migracji. prisma migrate deploy — produkcja (bez interaktywności). Zalety Prisma Migrate: automatyczne generowanie SQL. Bezpieczne (shadow database do porównania). Historia migracji. Baseline dla istniejących baz (prisma migrate resolve). Problemy Prisma Migrate: shadow database wymagana (nie zawsze możliwa). Niektóre operacje nieobsługiwane (custom SQL w migracji). Drizzle Kit migracje: drizzle-kit generate — generuj SQL based on schema changes. Ręczna kontrola nad SQL. drizzle-kit push — dev only (push bez migracji). Wspólne zasady bezpiecznych migracji: addytywne zmiany (dodawaj kolumny nullable). Nigdy nie usuwaj kolumn bez najpierw deploymentu. expand-contract pattern. Prisma Studio: GUI do przeglądania i edycji danych. npx prisma studio. Port 5555. Zarządzanie rekordami. Drizzle Studio: drizzle-kit studio. Podobna funkcjonalność. TypeScript integracja: Prisma — generowane typy w @prisma/client. Drizzle — typy z InferSelectModel, InferInsertModel. Oba dostarczają pełen type safety dla queries.",
  },
  {
    question: "Prisma vs Drizzle vs TypeORM vs Sequelize — kiedy co wybrać?",
    answer: "TypeORM: dojrzały ORM (2016), Active Record i Data Mapper pattern. Dekoratory TypeScript (@Entity, @Column, @PrimaryGeneratedColumn). Duży ekosystem. Problemy: wolny development, bugi, brak maintainera. 2024: TypeORM nadal używany w legacy. MikroORM: alternatywa TypeORM. Unit of Work pattern. Identity Map. Lepiej maintainowany. Sequelize: ORM dla JavaScript (2010). Promise-based. Nie-TypeScript-first (typy przez sequelize-typescript). Legacy choice. 2024 kiedy co wybrać: Prisma: nowe projekty TypeScript gdzie developer experience priorytetem. Fullstack (Next.js, Remix, SvelteKit). Chcesz Prisma Studio i Prisma Accelerate. Dobre dokumentacja ważna. Drizzle: edge computing (Cloudflare Workers, Vercel Edge Functions). Bundle size krytyczny. Chcesz SQL kontrolę i transparentność. Performance-critical. TypeORM/MikroORM: istniejące projekty. Decorator-based approach preferowany. Enterprise Java-like patterns. Sequelize: legacy JavaScript projekty. Nie TypeScript. Prisma + T3 Stack: Prisma integracja z tRPC + Next.js + Prisma + NextAuth. create-t3-app. Drizzle + Hono: lightweight API. Edge deployment. Bun + SQLite: Drizzle z libSQL/Bun sqlite.",
  },
  {
    question: "Connection pooling i wydajność ORM — PgBouncer, Prisma Accelerate i Neon?",
    answer: "Problem connection pooling z ORM: każda serverless function tworzy nowe połączenie z DB. PostgreSQL limit connections (domyślnie 100). Bez pooling: connection exhaustion. PgBouncer: zewnętrzny connection pooler. Transaction mode (serverless friendly). Session mode (stateful). Statement mode (ograniczenia). Prisma Accelerate: Prisma managed connection pooler + edge cache. Globalnie dystrybuowany. Stale-while-revalidate cache per query. Prisma.$extends(withAccelerate()). cache({ttl: 60, swr: 10}) per query. Neon serverless driver: @neondatabase/serverless. WebSocket-based connection (edge compatible). Łaczy się przez HTTP dla single queries (zero connection overhead). Serverless-native PostgreSQL. Supabase: PostgreSQL + PostgREST + Realtime + Auth + Storage. Wbudowany connection pooler (Supavisor). SDK dla Next.js. Drizzle + Neon: import {neon} from '@neondatabase/serverless'. drizzle(neon(DATABASE_URL)). Edge-ready. Turso (libSQL): SQLite na edge. Distributed SQLite. Drizzle integration. Embedded replicas. Rekomendacje 2024: Serverless/Edge + Prisma -> Prisma Accelerate. Serverless/Edge + Drizzle -> Neon serverless driver lub Turso. Traditional server -> PgBouncer transaction mode. Supabase -> własny pooler (Supavisor).",
  },
];

const ormComparison = [
  { orm: "Prisma", approach: "Schema-first (PSL)", typeSafety: "Generowane typy", bundleSize: "5MB+", edge: "Prisma Accelerate", kiedy: "Nowe projekty TS, DX priorytet, fullstack" },
  { orm: "Drizzle", approach: "SQL-first (TypeScript)", typeSafety: "InferSelectModel", bundleSize: "7KB (treeshakeable)", edge: "Natywny (CF Workers)", kiedy: "Edge computing, bundle size, SQL kontrola" },
  { orm: "TypeORM", approach: "Data Mapper / Active Record", typeSafety: "Dekoratory", bundleSize: "Duży", edge: "Nie", kiedy: "Legacy projekty, Java-like patterns" },
  { orm: "MikroORM", approach: "Unit of Work + Identity Map", typeSafety: "Dekoratory", bundleSize: "Duży", edge: "Nie", kiedy: "TypeORM alternative, enterprise" },
  { orm: "Sequelize", approach: "Active Record", typeSafety: "Przez plugin", bundleSize: "Duży", edge: "Nie", kiedy: "Legacy JavaScript, istniejące projekty" },
  { orm: "Kysely", approach: "Query builder (TS)", typeSafety: "Pełen (compile time)", bundleSize: "Mały", edge: "Tak", kiedy: "SQL kontrola + type safety, bez magic" },
];

export default function BlogPrizmaDrizzleCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Prisma vs Drizzle ORM — TypeScript ORM, schema-first, migracje, edge | Fotz.pl"
        description="Prisma ORM i Drizzle — schema-first vs SQL-first, Prisma Migrate vs Drizzle Kit, connection pooling, Prisma Accelerate, Neon i kiedy co wybrać w 2024."
        canonicalUrl="https://fotz.pl/blog/prisma-drizzle-orm-typescript-schema-first-migracje-edge-co-wybrac"

        keywords="Prisma vs Drizzle ORM co to jest, Prisma vs Drizzle ORM jak działa, Prisma vs Drizzle ORM tutorial, Prisma vs Drizzle ORM przykład, czym jest Prisma vs Drizzle ORM, Prisma vs Drizzle ORM dokumentacja, Prisma vs Drizzle ORM przewodnik"
      />
      <ArticleSchema
        title="Prisma vs Drizzle ORM — TypeScript ORM, schema-first, migracje, edge?"
        description="6 ORM (Prisma/Drizzle/TypeORM/MikroORM/Sequelize/Kysely) — schema-first vs SQL-first, bundle size, edge support, connection pooling i kiedy co wybrać."
        url="https://fotz.pl/blog/prisma-drizzle-orm-typescript-schema-first-migracje-edge-co-wybrac"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Prisma vs Drizzle ORM", url: "https://fotz.pl/blog/prisma-drizzle-orm-typescript-schema-first-migracje-edge-co-wybrac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Prisma vs Drizzle ORM", href: "/blog/prisma-drizzle-orm-typescript-schema-first-migracje-edge-co-wybrac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Database
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prisma i Drizzle ORM
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Schema-first Prisma vs SQL-first Drizzle — TypeScript ORMs,
              migracje, connection pooling i edge deployment w 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Schema-first TS", value: "Prisma" },
                { label: "SQL-first 7KB", value: "Drizzle" },
                { label: "Connection pooling", value: "PgBouncer" },
                { label: "Edge cache", value: "Accelerate" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-violet-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 ORM dla TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Prisma, Drizzle, TypeORM, MikroORM, Sequelize i Kysely — każdy ORM
              reprezentuje inny model mentalny i kompromis między DX a kontrolą.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">ORM</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Type Safety</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle Size</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Edge</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {ormComparison.map((o, i) => (
                  <tr key={o.orm} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{o.orm}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{o.approach}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{o.typeSafety}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{o.bundleSize}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{o.edge}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{o.kiedy}</td>
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
