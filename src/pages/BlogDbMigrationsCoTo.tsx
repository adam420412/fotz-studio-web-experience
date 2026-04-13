import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są database migrations i jakie narzędzia wybrać?",
    answer: "Database migrations: skrypty zmieniające schemat bazy danych w kontrolowany, wersjonowany sposób. Bez migracji: każdy developer ma inną wersję schematu. Środowisko staging różni się od produkcji. Nie ma historii zmian. Problem rollback. Z migracjami: każda zmiana schematu = osobny plik migracji. Numerowane lub timestampowane (20240413_001_add_user_table.sql). Narzędzie wykonuje pending migracje w kolejności. Śledzi które zostały wykonane (tabela schema_migrations lub flyway_schema_history). Narzędzia migracji: Flyway (Java/JVM, ale działa dla każdej DB): wersjonowane SQL lub Java migracje. V1__init.sql, V2__add_index.sql. Repeatable migracje (R__) dla views/functions. Baseline dla istniejących baz. Liquibase: XML/YAML/JSON/SQL changesets. Changeset tracking per author i id. Rollback support (wbudowany). Alembic (Python, SQLAlchemy): autogenerate migracji z modeli. Revision system. Goose (Go): SQL lub Go migracje. Wbudowany w wiele Go frameworków. Flyway vs Liquibase: Flyway — prostszy, SQL-first. Liquibase — bardziej zaawansowany, rollback, wieloplatformowy. Rails ActiveRecord Migrations: Ruby DSL. up/down methods. Zero-downtime migrations gems.",
  },
  {
    question: "Zero-downtime database migrations — jak nie blokować produkcji?",
    answer: "Wyzwanie: ALTER TABLE na dużej tabeli (miliony wierszy) blokuje tabelę na minuty lub godziny. Użytkownicy nie mogą czytać ani pisać. Problem: dodanie NOT NULL kolumny, zmiana typu, dodanie constraint. Strategie zero-downtime: 1. Dodaj kolumnę jako nullable: ALTER TABLE orders ADD COLUMN new_field VARCHAR(255). Nie blokuje, bo domyślnie nullable. 2. Backfill danych: UPDATE orders SET new_field = compute(old_field) WHERE new_field IS NULL LIMIT 1000. Batch update (nie blokuj cały UPDATE). 3. Dodaj NOT NULL constraint z DEFAULT: ALTER TABLE orders ALTER COLUMN new_field SET NOT NULL. 4. Usuń starą kolumnę (po migracji kodu). Expand-Contract pattern: Expand — dodaj nowe pole/tabelę. Contract — usuń stare po migracji kodu. Rolling rename: kolumna renamed -> dodaj nową, kopiuj dane, stara pozostaje jako alias, usuń starą. pg_repack / online DDL: pg_repack — przebudowuje tabelę bez blokowania. CREATE TABLE AS SELECT, swap. Percona pt-online-schema-change dla MySQL. MySQL 8+ / PostgreSQL 12+ mają wbudowane online DDL. gh-ost (GitHub): ghost table approach. Online schema migration dla MySQL. Używany przez GitHub. Liquibase Pro: wbudowane runAlways migrations. Flyway Dry Runs: weryfikacja przed produkcją.",
  },
  {
    question: "Flyway — jak skonfigurować i używać w CI/CD?",
    answer: "Flyway konfiguracja: flyway.url = jdbc:postgresql://localhost:5432/mydb. flyway.user = dbuser. flyway.password = secret. flyway.locations = classpath:db/migration. Konwencja nazw: V{version}__{description}.sql. V1__Create_users_table.sql. V2__Add_email_index.sql. V2.1__Add_role_column.sql. Repeatable: R__{description}.sql — wykonywane gdy checksum zmieni się. Dobre dla views, functions, stored procedures. Baseline: flyway baseline — oznacz istniejącą DB jako wyjściowy punkt. Flyway Maven/Gradle plugin: mvn flyway:migrate — wykonaj pending migracje. mvn flyway:info — pokaż status migracji. mvn flyway:validate — sprawdź checksum. mvn flyway:repair — napraw failed migracje. CI/CD integration: Spring Boot auto-migrate przy starcie (spring.flyway.enabled=true). Kubernetes init container: wywołaj flyway:migrate przed startem aplikacji. GitHub Actions: krok 'Run DB migrations' przed 'Deploy application'. Multiple environments: osobna konfiguracja flyway per environment. flyway.out-of-order=false — nie pozwól na migracje poza kolejnością. Checksum validation: Flyway oblicza checksum dla każdego pliku. Zmodyfikowanie wykonanej migracji = błąd. Nigdy nie modyfikuj wykonanych migracji — twórz nowe. Flyway Teams: undo support (V1__create.sql -> U1__undo_create.sql). Dry run. Cherry-pick.",
  },
  {
    question: "Rollback database migrations — jak cofnąć zmiany?",
    answer: "Rollback schematu bazy: trudniejszy niż rollback kodu (nie możesz po prostu wrócić do poprzedniej wersji). Podejścia: Up/Down migrations: każda migracja ma up() i down(). up() = wykonaj zmianę. down() = cofnij zmianę. Problem: przy dużej ilości danych down() może nie odtworzyć usuniętych danych. Liquibase rollback: OOTB support. rollback przez tag lub date. Odwraca changesets w odwrotnej kolejności. Flyway Undo (Teams): U{version}__{description}.sql. flyway:undo — cofnij ostatnią migrację. Expand-Contract rollback: Contract krok (usunięcie starego) = osobny deploy. Rollback = nie wykonaj Contract kroku. Stare i nowe istnieją razem. Feature Flags: aplikacja ma feature flag per migration. Rollback = wyłącz flag (nie cofaj schematu). Backup przed migracją: snapshot DB przed dużą migracją. Rollback = restore snapshot (downtime ale bezpieczne). Incremental backup (WAL-G dla PostgreSQL). Blue-Green Deployment: dwa środowiska (Blue = stare, Green = nowe). Migration na Green. Switch traffic na Green. Rollback = switch z powrotem na Blue. Wymaga synchronizacji danych między Blue i Green. Migration testing: sprawdź migrację na staging przed produkcją. Test down() przed produkcją. Automated rollback tests w CI.",
  },
  {
    question: "Database schema evolution w mikrousługach — jak zarządzać?",
    answer: "Wyzwanie mikrousług: każda mikrousługa ma własną bazę danych. Każda może być deployowana niezależnie. Musimy zapewnić backward compatibility podczas rolling deployment. Zasady schema evolution: Additive changes only (dodaj, nie modyfikuj/usuwaj): dodanie nowej kolumny (nullable). dodanie nowej tabeli. dodanie nowego indeksu (CONCURRENTLY). Never remove columns that code uses: deprecate -> aplikacja przestaje używać -> usuń kolumnę. Two-phase deployment: faza 1 — deploy nowego kodu który obsługuje zarówno stary jak i nowy schemat. Wykonaj migrację. faza 2 — deploy kodu który wymaga nowego schematu (usuwa obsługę starego). Shared Database Anti-Pattern: wiele mikrousług na jednej bazie. Trudne migracje bo wiele serwisów zależy od jednego schematu. Rozwiązanie: oddzielna baza per mikrousługa. Consumer-Driven Contract Testing: definiuje kontrakt między serwisem a jego bazą. Schemaspy: automatyczna dokumentacja schematu. Diagram ER z istniejącej bazy. Liquibase Checks: automated compliance checks. Blokuj kolumny bez default przy NOT NULL. Enforced naming conventions. Database Schema Registry: centralne repozytorium schematów. Event Schema Registry (Confluent) dla event-driven. Avro/Protobuf schema evolution (backward/forward compatible). Migration in large teams: każdy developer tworzy własną gałąź migracji. Sequentialna numeracja przez CI (timestamp). Merge konflikty na numerach = CI blokuje.",
  },
];

const migrationTools = [
  { narzedzie: "Flyway", jezyk: "Java / SQL", rollback: "Tylko Teams (płatny)", autogen: "Nie", db: "PostgreSQL, MySQL, Oracle, SQL Server, inne", kiedy: "Simple SQL-first, Java ecosystem" },
  { narzedzie: "Liquibase", jezyk: "XML/YAML/SQL/JSON", rollback: "Wbudowany", autogen: "Nie", db: "Wszystkie (50+ baz)", kiedy: "Enterprise, multi-DB, rollback wymagany" },
  { narzedzie: "Alembic", jezyk: "Python", rollback: "downgrade()", autogen: "Tak (z SQLAlchemy)", db: "PostgreSQL, MySQL, SQLite, MS SQL", kiedy: "Python/FastAPI/Django projekty" },
  { narzedzie: "Django Migrations", jezyk: "Python", rollback: "migrate do poprzedniej wersji", autogen: "Tak (automatyczne)", db: "PostgreSQL, MySQL, SQLite, Oracle", kiedy: "Django aplikacje" },
  { narzedzie: "Prisma Migrate", jezyk: "TypeScript", rollback: "Manual SQL", autogen: "Tak (z Prisma schema)", db: "PostgreSQL, MySQL, SQLite, MongoDB", kiedy: "Node.js/TypeScript projekty" },
  { narzedzie: "Goose", jezyk: "Go / SQL", rollback: "down() function", autogen: "Nie", db: "PostgreSQL, MySQL, SQLite, MS SQL", kiedy: "Go microservices" },
];

export default function BlogDbMigrationsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Database Migrations | Fotz Studio"
        description="Database migrations: Flyway vs Liquibase vs Alembic vs Prisma, zero-downtime schema changes, expand-contract pattern, rollback i schema evolution w…"
        canonicalUrl="https://fotz.pl/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback"

        keywords="Database Migrations co to jest, Database Migrations jak działa, Database Migrations tutorial, Database Migrations przykład, czym jest Database Migrations, Database Migrations dokumentacja, Database Migrations przewodnik"

        canonical="https://fotz.pl/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback"
      />
      <ArticleSchema
        title="Database Migrations — co to jest, Flyway, Liquibase, Alembic, zero-downtime, rollback?"
        description="Database Migrations: 6 narzędzi (Flyway/Liquibase/Alembic/Django/Prisma/Goose), zero-downtime schema changes, expand-contract, rollback i mikrousługi."
        url="https://fotz.pl/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Database Migrations", url: "https://fotz.pl/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Database Migrations", href: "/blog/database-migrations-co-to-jest-flyway-liquibase-alembic-zero-downtime-rollback" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Database / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Database Migrations
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Flyway, Liquibase, Alembic — wersjonowanie schematu bazy, zero-downtime
              migrations, expand-contract pattern i rollback w mikrousługach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "SQL-first Java", value: "Flyway" },
                { label: "Enterprise rollback", value: "Liquibase" },
                { label: "Python autogenerate", value: "Alembic" },
                { label: "Bez blokady", value: "Zero-downtime" },
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

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do migracji baz danych</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każde narzędzie jest dopasowane do innego ekosystemu i poziomu
              zaawansowania wymagań dotyczących rollback i automatyzacji.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język/Format</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rollback</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Autogenerowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bazy</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {migrationTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.rollback}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.autogen}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.db}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.kiedy}</td>
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
