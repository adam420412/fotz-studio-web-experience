import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Kysely — type-safe SQL query builder dla TypeScript?",
    answer: "Kysely: Sami Koskimäki. SQL query builder. Nie ORM. TypeScript-first. Pełna typizacja zapytań. Instalacja: npm install kysely pg. Dialekty: PostgreSQL, MySQL, SQLite, MSSQL. Konfiguracja: import {Kysely, PostgresDialect} from 'kysely'. const db = new Kysely({dialect: new PostgresDialect({pool})}).withTables(). Interface DB: interface Database { users: UsersTable. posts: PostsTable }. type UsersTable = {id: Generated number. name: string. email: string. created_at: Generated Date}. Użycie: const users = await db.selectFrom('users').select(['id', 'name', 'email']).where('id', '=', userId).execute(). Type-safe: VS Code autocomplete dla nazw kolumn i tabel. Błąd kompilacji przy pomyłce. Join: await db.selectFrom('users').leftJoin('posts', 'posts.user_id', 'users.id').select(['users.name', 'posts.title']).execute(). Insert: await db.insertInto('users').values({name, email}).returning('id').executeTakeFirst(). Update: await db.updateTable('users').set({name}).where('id', '=', id).execute(). Transaction: await db.transaction().execute(async (trx) => { await trx.insertInto(...). await trx.updateTable(...) }). Migration: Kysely nie ma własnych migracji. Użyj: umzug, db-migrate lub manualne. sql template: sql`SELECT ${sql.raw(colName)} FROM users`. Escape automatyczny. Kiedy Kysely: chcesz SQL kontrolę. Bez ORM magic. Type safety krytyczna. Złożone JOIN-y.",
  },
  {
    question: "MikroORM — TypeScript-first ORM z Data Mapper pattern?",
    answer: "MikroORM: Martin Adámek. Data Mapper pattern. Unit of Work. TypeScript-first. Alternatywa dla TypeORM. Instalacja: npm install @mikro-orm/core @mikro-orm/postgresql. Konfiguracja: await MikroORM.init({entities: ['./src/entities/*.ts'], dbName: 'mydb', type: 'postgresql'}). Entity: import {Entity, Property, PrimaryKey} from '@mikro-orm/core'. @Entity() export class User { @PrimaryKey() id!: number. @Property() name!: string. @Property({unique: true}) email!: string. @Property({onCreate: () => new Date()}) createdAt!: Date }. EntityManager: const em = orm.em.fork(). const user = em.create(User, {name, email}). await em.persistAndFlush(user). Znajdowanie: const users = await em.find(User, {name: {$like: '%Jan%'}}). const user = await em.findOne(User, {email}). Relacje: @ManyToOne(() => User, user => user.posts) author!: User. @OneToMany(() => Post, post => post.author) posts = new Collection this. Populate: await em.find(User, {}, {populate: ['posts']}). Lazy by default. Unit of Work: śledzi zmiany. user.name = 'Nowe'. await em.flush() — auto UPDATE. Nie musisz wywołać update(). QueryBuilder: em.createQueryBuilder(User).where({name}).orderBy({id: 'DESC'}).getResultList(). Migrations: npx mikro-orm migration:create. npx mikro-orm migration:up. Schema sync: npx mikro-orm schema:update --run. MikroORM vs TypeORM: TypeORM starszy, Active Record. MikroORM nowszy, Data Mapper, lepszy TypeScript. Kiedy MikroORM: TypeORM migration. Złożony domain model. Unit of Work potrzebny.",
  },
  {
    question: "TypeORM vs Prisma vs Drizzle — który ORM wybrać w 2024?",
    answer: "Prisma (lider 2024): generuje klienta z schema.prisma. DX najlepszy. Type safety przez generowanie. Instrukcja: schema.prisma definiuje modele. npx prisma generate. PrismaClient automatycznie typed. Ograniczenia: N+1 łatwy. Duże migracje skomplikowane. Bundle size. Drizzle (rosnący): SQL-like syntax w TypeScript. Lekki. Szybki. bun add drizzle-orm pg. Schema: const users = pgTable('users', {id: serial('id').primaryKey(), name: varchar('name', {length: 255})}). const result = await db.select().from(users).where(eq(users.id, userId)). Drizzle-kit: migracje. Drizzle advantages: bliżej SQL. Serverless friendly. Edge-compatible. TypeORM (legacy): Active Record lub Data Mapper. Dekorator-based. Starszy. TypeScript support gorszy. Wiele problemów z migracjami. Używaj Prisma lub Drizzle dla nowych projektów. Sequelize: JavaScript-first. TypeScript możliwy. Starszy. Mniej polecany 2024. Porównanie DX: Prisma: schema.prisma --generate -> TypeScript. Drizzle: TypeScript schema -> SQL. Kysely: interfaces -> SQL. TypeORM: decorators -> SQL. MikroORM: decorators + Data Mapper -> SQL. Wybór 2024: standardowy projekt -> Prisma. Performance + edge -> Drizzle. SQL control -> Kysely. Complex domain -> MikroORM. Legacy -> TypeORM (rozważ migrację).",
  },
  {
    question: "Drizzle ORM advanced — migrations, relations i Drizzle Studio?",
    answer: "Drizzle Schema: import {pgTable, serial, varchar, integer, timestamp, boolean} from 'drizzle-orm/pg-core'. const users = pgTable('users', {id: serial('id').primaryKey(), name: varchar('name', {length: 255}).notNull(), email: varchar('email', {length: 255}).notNull().unique(), role: varchar('role').$type().default('user'), createdAt: timestamp('created_at').defaultNow()}). Relations: const posts = pgTable('posts', {userId: integer('user_id').references(() => users.id)}). export const usersRelations = relations(users, ({many}) => ({posts: many(posts)})). Queries z relations: const usersWithPosts = await db.query.users.findMany({with: {posts: true}}). Filtry: where(and(eq(users.role, 'admin'), gt(users.id, 10))). Transakcje: await db.transaction(async (tx) => { const user = await tx.insert(users).values({name}).returning(). await tx.insert(posts).values({userId: user[0].id, title}) }). Drizzle-kit migracje: npx drizzle-kit generate -- generuje SQL. npx drizzle-kit migrate -- wykonaj. npx drizzle-kit push -- dev sync bez migracji. npx drizzle-kit studio -- GUI. Drizzle Studio: web UI dla bazy. Przeglądaj, edytuj dane. localhost:4983. CRUD w UI. Config: drizzle.config.ts: import {defineConfig} from 'drizzle-kit'. export default defineConfig({schema: './src/db/schema.ts', out: './drizzle', dialect: 'postgresql', dbCredentials: {url: process.env.DATABASE_URL!}}). Edge: Drizzle + Neon HTTP: import {neon} from '@neondatabase/serverless'. import {drizzle} from 'drizzle-orm/neon-http'. const db = drizzle(neon(DATABASE_URL)). Cloudflare Workers ready.",
  },
  {
    question: "Bazy danych TypeScript — connection pooling, migrations i best practices?",
    answer: "Connection Pooling: pg Pool: import {Pool} from 'pg'. const pool = new Pool({connectionString: DATABASE_URL, max: 20, idleTimeoutMillis: 30000}). Prisma: DATABASE_URL z ?connection_limit=10. PgBouncer: proxy pooler. Serverless: problem — nowe połączenie per request. Neon: HTTP mode (bezpołączeniowy). Supabase: pooler wbudowany. PlanetScale: serverless MySQL. Migrations best practices: nie modyfikuj starych migracji. Additive first (add nullable column). Backfill data. Make NOT NULL. Remove old column. Zero-downtime: Blue-green deployment. Feature flags dla schema changes. Expand-Contract pattern. Indexes: CREATE INDEX CONCURRENTLY — bez lock. Partial indexes: WHERE deleted_at IS NULL. Composite: kolejność kolumn ważna. EXPLAIN ANALYZE przed deployem. TypeScript schema validation: zod + db schema. Zod schema == db schema. parse przed insert. Nie ufaj typom ORM na wejściu. Connection per request (Serverless): Prisma + Accelerate. Drizzle + Neon HTTP. PrismaClient singleton: const prismaClientSingleton = () => new PrismaClient(). declare global {var prisma: undefined | ReturnType typeof prismaClientSingleton}. export const db = globalThis.prisma ?? prismaClientSingleton(). if (process.env.NODE_ENV !== 'production') globalThis.prisma = db. Soft delete: deletedAt timestamp. Paranoid mode (Sequelize). Drizzle: where(isNull(users.deletedAt)). Audit logging: createdAt, updatedAt, createdBy, updatedBy. Triggers lub aplikacja. Row-level Security: Supabase RLS. PostgreSQL policies.",
  },
];

const ormComparison = [
  { orm: "Prisma", podejscie: "Schema-first, generowany klient", bundle: "Duży", kiedy: "Standard — najlepszy DX, typesafety" },
  { orm: "Drizzle ORM", podejscie: "TypeScript schema, SQL-like", bundle: "Mały", kiedy: "Edge, serverless, SQL control, performance" },
  { orm: "Kysely", podejscie: "Query Builder (nie ORM)", bundle: "Bardzo mały", kiedy: "Złożone SQL, pełna kontrola, bez abstrakcji" },
  { orm: "MikroORM", podejscie: "Data Mapper, Unit of Work", bundle: "Średni", kiedy: "Złożony domain, migracja z TypeORM" },
  { orm: "TypeORM", podejscie: "Active Record / Data Mapper", bundle: "Duży", kiedy: "Legacy — preferuj Prisma/Drizzle dla nowych" },
  { orm: "Sequelize", podejscie: "Active Record (JS-first)", bundle: "Duży", kiedy: "Stary JS projekt — rozważ migrację" },
];

export default function BlogKyselyMikroOrmCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Kysely, MikroORM, Drizzle, Prisma i TypeORM | Fotz Studio"
        description="ORM i query buildery TypeScript 2024: Kysely (type-safe SQL), MikroORM (Data Mapper), Drizzle (SQL-like schema), Prisma (schema-first), TypeORM …"
        canonicalUrl="https://fotz.pl/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024"

        keywords="Kysely, MikroORM, Drizzle, Prisma i TypeORM co to jest, Kysely, MikroORM, Drizzle, Prisma i TypeORM jak działa, Kysely, MikroORM, Drizzle, Prisma i TypeORM tutorial, Kysely, MikroORM, Drizzle, Prisma i TypeORM przykład, czym jest Kysely, MikroORM, Drizzle, Prisma i TypeORM, Kysely, MikroORM, Drizzle, Prisma i TypeORM dokumentacja, Kysely, MikroORM, Drizzle, Prisma i TypeORM przewodnik"

        canonical="https://fotz.pl/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024"
      />
      <ArticleSchema
        title="Kysely, MikroORM, Drizzle, Prisma i TypeORM — ORM TypeScript 2024?"
        description="6 bibliotek ORM i query builderów TypeScript (Prisma/Drizzle/Kysely/MikroORM/TypeORM/Sequelize) — podejście, bundle size, edge-compatibility i kiedy wybrać."
        url="https://fotz.pl/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ORM TypeScript 2024", url: "https://fotz.pl/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ORM TypeScript 2024", href: "/blog/kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / ORM / Database
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ORM TypeScript 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kysely (query builder), MikroORM (Data Mapper),
              Drizzle (SQL-like), Prisma i TypeORM — porównanie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "SQL Builder", value: "Kysely" },
                { label: "Data Mapper", value: "MikroORM" },
                { label: "SQL-like", value: "Drizzle" },
                { label: "Schema-first", value: "Prisma" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek ORM — podejście i kiedy wybrać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Prisma, Drizzle, Kysely, MikroORM, TypeORM i Sequelize —
              podejście, bundle i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">ORM</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {ormComparison.map((o, i) => (
                  <tr key={o.orm} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{o.orm}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{o.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{o.bundle}</td>
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

      <RelatedArticles currentArticleId="kysely-mikro-orm-drizzle-prisma-typeorm-porownanie-orm-typescript-2024" />
      <ContactSection />
    </Layout>
  );
}
