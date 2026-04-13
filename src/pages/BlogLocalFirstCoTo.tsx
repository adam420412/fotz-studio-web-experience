import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Local-First Software — co to jest i dlaczego ważne?",
    answer: "Local-First Software: Martin Kleppmann, Ink & Switch. Dane primarly na urządzeniu. Synchronizacja peer-to-peer lub z serwerem. Offline-first (nie tylko PWA offline). Aplikacja działa bez internetu. Sync gdy połączenie dostępne. Zalety: szybkość (brak network latency). Offline niezawodność. Privacy (dane lokalnie). Współpraca w czasie rzeczywistym. Brak vendor lock-in (dane twoje). Wady: sync jest trudny (konflikty). Migracje schematu skomplikowane. Security (dane na urządzeniu). Nie dla każdej aplikacji. CRDT (Conflict-free Replicated Data Types): matematycznie poprawne merge. Bez konfliktów przy edycji jednoczesnej. Typy: LWW (Last-Write-Wins Register). G-Counter, PN-Counter. OR-Set. RGA (Replicated Growable Array). G-Tree. Yjs: CRDT biblioteka. Collaborative editing. WebSocket lub WebRTC sync. SyncedStore — Yjs + MobX/Zustand. Automerge: CRDT z Jason Kester, Martin Kleppmann. JSON-like structure. History tracking. Merge od razu. Przykłady local-first apps: Figma — real-time collaborative. Linear — ultra-fast, offline-capable. Notion — local-first w web. Obsidian — pliki markdown lokalne. Loom — wideo lokalne. Ink & Switch Demos: Pixel pusher, Kanban, peritext.",
  },
  {
    question: "Jazz.tools — Local-First framework dla TypeScript?",
    answer: "Jazz: Anselm Eickhoff. Local-first TypeScript framework. Co-values (collaborative values). WebSocket sync. Crypto auth. Instalacja: npm install jazz-tools @jazz-tools/react. Podstawy: import {co, coStream, CoList, CoMap} from 'jazz-tools'. import {useAccount, useCoState} from '@jazz-tools/react'. Schema: const TodoItem = co.map({title: co.string, done: co.boolean}). const TodoList = co.map({items: co.list(TodoItem)}). Account creation: const account = await createJazzBrowserContext({peer: 'wss://cloud.jazz.tools/?key=...'}). useAccount: const {me} = useAccount(TodoSchema, {resolve: {root: {todos: [{items: true}]}}}). useCoState: const todo = useCoState(TodoItem, id). Edit: todo.done = true — reaktywne! Sync automatyczny. Permissions: Account, Group, Everyone. Group: shareable. invite link. Jazz Cloud: bezpłatny sync server. Własny: jazz.tools/docs/jazz-self-hosting. Offline: działa bez internetu. Queue sync. Reactive: zmiany propagują do wszystkich subskrybentów. CoList: reaktywna lista. me.root.todos.push(newItem). Optymistyczne update. Kiedy Jazz: collaborative app. Real-time sync. Offline-first. TypeScript codebase. Nie dla: dużych zbiorów danych. Relacyjne zapytania. Public read-only content.",
  },
  {
    question: "PowerSync i ElectricSQL — Postgres sync dla local-first apps?",
    answer: "PowerSync: JourneyApps. Postgres -> SQLite sync. Offline-first. React Native i Flutter. Instalacja: npm install @powersync/react. Konfiguracja: const db = new PowerSyncDatabase({schema, database: new WASQLiteOpenFactory('powersync.db')}). await db.connect(new MyConnector()). Connector: uploadData — sync do Postgres. fetchCredentials — JWT auth. Schema: const todoTable = new Table({list_id: column.text, description: column.text, completed: column.integer}). export const AppSchema = new Schema({todos: todoTable}). Zapytania: const {data: todos} = useQuery(db.watch('SELECT * FROM todos WHERE list_id = ?', [listId])). Real-time watch — jak reactive Supabase. Write: await db.execute('INSERT INTO todos (id, description) VALUES (?, ?)', [uuid(), description]). Upload queue: automatyczny. Sync rules: Postgres -> PowerSync. Filtry per user. ElectricSQL: James Arthur. Postgres sync. TypeScript client. CRDT-based. Instalacja: npm install electric-sql. Sync: await electric.connect(token). const db = electrify(rawDb, schema, config). Shapes: await electric.db.todos.sync({where: {user_id: userId}}). Zapytania: reaktywne. Podejście: ElectricSQL bardziej eksperymentalne. PowerSync bardziej produkcyjne. RxDB: Offline-first database. CouchDB sync. Rxjs reactive queries. Dexie.js: IndexedDB wrapper. Nie sync ale offline storage. Triplit: nowy, full-stack. TypeScript schema. Kiedy PowerSync: React + React Native. Postgres backend. Offline critical. Kiedy ElectricSQL: nowy projekt, Postgres, edge sync.",
  },
  {
    question: "IndexedDB, Dexie.js i PGlite — lokalne bazy danych w przeglądarce?",
    answer: "IndexedDB: wbudowana baza przeglądarki. Transakcyjny. Asynchroniczny. Duże dane. Skomplikowane API. Dexie.js: wrapper nad IndexedDB. Prosty. Promise-based. Reactive. TypeScript. Instalacja: npm install dexie dexie-react-hooks. Schema: const db = new Dexie('MyDatabase'). db.version(1).stores({todos: '++id, title, done'}). CRUD: await db.todos.add({title, done: false}). const todos = await db.todos.where({done: false}).toArray(). useLiveQuery: import {useLiveQuery} from 'dexie-react-hooks'. const todos = useLiveQuery(() => db.todos.toArray()). Reaktywne! Aktualizuje gdy zmiany. Dexie Cloud: sync do chmury. Multi-device. Collaboration. Podobny do Jazz/PowerSync. PGlite (Electric SQL team): PostgreSQL w WebAssembly. Pełny Postgres w przeglądarce! Extensions: vector, pg_dump. Instalacja: npm install @electric-sql/pglite. import {PGlite} from '@electric-sql/pglite'. const db = new PGlite(). await db.exec('CREATE TABLE todos (id SERIAL, title TEXT, done BOOL DEFAULT false)'). const todos = await db.query('SELECT * FROM todos'). Użycie z ORM: drizzle-orm/pglite. Pełny SQL syntax. JOIN, transactions, etc. Sync z ElectricSQL: PGlite + electric sync. sql.js alternatywa: SQLite w WebAssembly. Starszy. Mniej feature-rich. wa-sqlite: SQLite WASM. Virtual File System. Persystencja przez OPFS (Origin Private File System). Origin Private File System: nowe API. Persystencja IndexedDB-like ale szybsza. Dostęp plikowy. Bun SQLite: tylko w Bun runtime.",
  },
  {
    question: "Offline-First architecture — wzorce i narzędzia 2024?",
    answer: "Offline-First patterns: Offline as default: zakładaj brak internetu. UI działa zawsze. Sync gdy możliwe. Nie pokazuj 'brak połączenia' = błąd. Optimistic UI: aplikuj lokalnie natychmiast. Sync w tle. Rollback gdy sync fail. Zamiast czekać na server. Conflict resolution: Last-Write-Wins (prosto). CRDT (bez konfliktów). Operational Transform (Google Docs style). Custom merge logic (complex). Cache strategies: Cache-first: lokalny cache, potem sync. Network-first: próba sieci, fallback na cache. Stale-while-revalidate: cache natychmiast, background refresh. Service Worker + Cache API: const cache = await caches.open('v1'). await cache.put(request, response). const cached = await cache.match(request). Background Sync API: SyncManager.register('sync-tag'). Event: sync. Wykonaj gdy online. BullMQ lub własna queue: operacje do synchronizacji. Gdy offline -> queue. Gdy online -> execute. IndexedDB jako offline store. Conflict-free data structures: Immutable. Append-only log (event sourcing). CRDT types per use case. React Query offline: networkMode: 'offlineFirst'. Pauzuje queries gdy offline. Resume gdy online. TanStack Query + ServiceWorker. Zustand persist: persists: state -> localStorage/IndexedDB. Powraca przy reload. Bez serwera. Realtime sync po reconnect: WebSocket reconnection. EventSource (SSE) reconnection. Socket.io built-in. Supabase Realtime reconnect.",
  },
];

const localFirstTools = [
  { narzedzie: "Jazz.tools", podejscie: "Co-values (CRDT)", sync: "WebSocket + P2P", kiedy: "Collaborative TypeScript apps, real-time" },
  { narzedzie: "PowerSync", podejscie: "Postgres -> SQLite", sync: "Postgres connector", kiedy: "React + Postgres, offline-critical mobile" },
  { narzedzie: "ElectricSQL", podejscie: "Postgres CRDT sync", sync: "Electric protocol", kiedy: "Nowe projekty Postgres, edge sync" },
  { narzedzie: "Dexie.js", podejscie: "IndexedDB wrapper", sync: "Dexie Cloud (opcja)", kiedy: "Offline storage, reactive queries w przeglądarce" },
  { narzedzie: "PGlite", podejscie: "Postgres WASM", sync: "ElectricSQL opcja", kiedy: "Full Postgres w przeglądarce, SQL-first" },
  { narzedzie: "Automerge / Yjs", podejscie: "CRDT library", sync: "Własny transport", kiedy: "Collaborative editing, custom sync layer" },
];

export default function BlogLocalFirstCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Local-First Software | Fotz Studio"
        description="Local-First Software 2024: Jazz.tools (Co-values CRDT), PowerSync (Postgres-SQLite sync), ElectricSQL, Dexie.js (IndexedDB), PGlite (Postgres WASM) i…"
        canonicalUrl="https://fotz.pl/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024"

        keywords="Local-First Software co to jest, Local-First Software jak działa, Local-First Software tutorial, Local-First Software przykład, czym jest Local-First Software, Local-First Software dokumentacja, Local-First Software przewodnik"

        canonical="https://fotz.pl/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024"
      />
      <ArticleSchema
        title="Local-First Software — Jazz.tools, PowerSync, ElectricSQL, Dexie i PGlite 2024?"
        description="6 narzędzi local-first (Jazz/PowerSync/ElectricSQL/Dexie/PGlite/Automerge) — CRDT, Postgres sync, IndexedDB i offline-first architecture patterns."
        url="https://fotz.pl/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Local-First Software 2024", url: "https://fotz.pl/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Local-First Software 2024", href: "/blog/local-first-jazz-tools-powersync-electricsql-dexie-pglite-offline-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Local-First / Offline / CRDT / Sync
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Local-First Software 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jazz.tools (CRDT), PowerSync (Postgres sync),
              ElectricSQL, Dexie.js, PGlite i offline-first patterns.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "CRDT", value: "Jazz.tools" },
                { label: "Postgres sync", value: "PowerSync" },
                { label: "IndexedDB", value: "Dexie.js" },
                { label: "Postgres WASM", value: "PGlite" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi Local-First — podejście i kiedy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jazz, PowerSync, ElectricSQL, Dexie, PGlite i Automerge/Yjs —
              podejście do sync i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Sync</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {localFirstTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.sync}</td>
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
