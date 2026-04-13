import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest BaaS (Backend as a Service) i dlaczego Firebase i Supabase dominują?",
    answer: "BaaS (Backend as a Service): gotowy backend dla frontendu. Auth, database, storage, realtime — bez własnego serwera. Cel: szybki prototyp, startup MVP, małe/średnie projekty. Firebase (Google, 2011 -> Google 2014): pierwszy masowy BaaS. NoSQL (Firestore), Realtime Database, Auth, Storage, Functions, Hosting, Analytics. Billion-dollar ecosystem. Supabase (2020): 'open-source Firebase alternative'. PostgreSQL jako baza. Row Level Security (RLS). REST i Realtime. Auth (GoTrue). Edge Functions (Deno). Storage (S3-compatible). Dlaczego te dwa dominują: Firebase — największa adopcja, Google Trust, Firebase Studio (2024). Supabase — PostgreSQL (SQL devs home), open-source, lepszy DX dla relacyjnych danych, pricing. Inne BaaS: Appwrite — open-source self-host. PocketBase — SQLite-based, self-host, single binary. Nhost — Hasura + Next.js. Convex — reactive queries, TypeScript-native. Pocketbase — minimal BaaS w Go. AWS Amplify — AWS ecosystem. Kiedy BaaS vs własny backend: BaaS: MVP, solo dev, startup speed. Własny: complex business logic, custom infra, cost at scale. Hybrid: BaaS + edge functions dla custom logic.",
  },
  {
    question: "Firebase Firestore — model danych, zapytania i reguły bezpieczeństwa?",
    answer: "Firestore: document-oriented NoSQL baza. Kolekcje zawierają dokumenty. Dokumenty zawierają pola. Subcollections — zagnieżdżone kolekcje. Struktura: users/{userId}/orders/{orderId}. CRUD: addDoc(collection(db, 'users'), data). setDoc(doc(db, 'users', id), data). updateDoc. deleteDoc. getDoc, getDocs. Queries: query(collection(db, 'orders'), where('status', '==', 'active'), orderBy('createdAt', 'desc'), limit(10)). Composite indexes — automatyczne dla prostych. Złożone: firebase deploy --only firestore:indexes. Realtime listeners: onSnapshot(docRef, (doc) => {...}) — live updates. onSnapshot(query, (snapshot) => {...}). Real-time sync między klientami. Limits: 1 write per second per document. Max document size: 1MB. No full-text search (użyj Algolia/Typesense). Offline persistence: enableIndexedDbPersistence(db). Optimistic UI. Security Rules: match /users/{userId} {allow read, write: if request.auth.uid == userId}. match /posts/{postId} {allow read: if resource.data.published == true. allow write: if request.auth != null}. request.auth.token.email_verified. request.resource.data vs resource.data. Validation: allow create: if request.resource.data.title is string. Firebase SDK v9 (modular): tree-shakeable. import {doc, getDoc} from 'firebase/firestore'. React: react-firebase-hooks library. useDocumentData, useCollectionData. onAuthStateChanged.",
  },
  {
    question: "Supabase — PostgreSQL, Row Level Security i Edge Functions?",
    answer: "Supabase database: managed PostgreSQL. Pełny SQL. Relacje, JOINy, indeksy, transakcje. supabase-js: const {data, error} = await supabase.from('users').select('*'). .eq('id', userId).single(). INSERT: supabase.from('posts').insert({title, content}). UPDATE: supabase.from('posts').update({title}).eq('id', id). DELETE: supabase.from('posts').delete().eq('id', id). Realtime: supabase.channel('posts').on('postgres_changes', {event: 'INSERT', schema: 'public', table: 'posts'}, payload => {...}).subscribe(). Row Level Security (RLS): PostgreSQL-native security. CREATE POLICY 'Users can view own profile' ON users USING (auth.uid() = id). auth.uid() — Supabase auth function. RLS per table, per operation (SELECT/INSERT/UPDATE/DELETE). Bez RLS wszystko publiczne (enable via supabase). Auth: supabase.auth.signUp({email, password}). signInWithPassword, signInWithOAuth, signOut. Session auto-refresh. SSR: createServerClient (supabase-ssr). Edge Functions: Deno runtime. supabase functions new my-function. serve(async (req) => new Response(JSON.stringify(data))). Integracja z database. Secrets: supabase secrets set MY_KEY=value. Storage: supabase.storage.from('avatars').upload(path, file). getPublicUrl(path). Transform images on-the-fly. Vector: pgvector extension — AI embeddings. supabase.rpc('match_documents', {query_embedding, match_count}). Supabase + Next.js: @supabase/ssr package. SSR-compatible auth. Server Components support.",
  },
  {
    question: "Firebase Auth vs Supabase Auth vs Clerk — wybór systemu autentykacji?",
    answer: "Firebase Auth: email/password, Google, Apple, Facebook, GitHub, phone (SMS). Custom tokens. Anonymous auth. Multi-factor (TOTP w Firebase v9). createUserWithEmailAndPassword, signInWithEmailAndPassword. onAuthStateChanged — user state. ID tokens (JWT). Supabase Auth (GoTrue): email/password, magic link, OTP, OAuth providers. Phone auth (Twilio). supabase.auth.signUp, signIn, signInWithOAuth. getSession(), getUser(). JWT customization. Hooks: send_email hook. RLS integracja przez auth.uid(). Clerk: hosted auth UI components. Pre-built: SignIn, SignUp, UserButton, UserProfile. Organizations + multi-tenant. Webhooks, metadata. RBAC wbudowane. Integracja Next.js: ClerkProvider, useUser(), useAuth(). clerkMiddleware. Bez wbudowanego database — używaj z własnym backendem. Auth0/Okta: enterprise. SSO, SAML, compliance. Drogi. Better-Auth: nowa (2024), open-source, framework-agnostic. Plugins: 2FA, organization, passkey. Kiedy co: Firebase Auth — Firebase ecosystem. Supabase Auth — Supabase database z RLS. Clerk — szybkie UI, organizacje, Next.js DX. Auth.js (NextAuth) — własna kontrola, custom adapters. Shared considerations: email deliverability (własny SMTP). Social providers (app credentials). Token expiry, refresh strategy.",
  },
  {
    question: "Convex i PocketBase — nowe podejście do BaaS w 2024?",
    answer: "Convex: reactive backend TypeScript-native (2022). Funkcje zamiast REST API. const messages = useQuery(api.messages.list). useMutation(api.messages.send). Reactive: auto-update gdy data się zmienia. Bez WebSocket management. Schema: defineTable({text: v.string(), author: v.id('users')}). Validator (v.string, v.number, v.id, v.array). Type-safe end-to-end (TypeScript przez wszystko). Scheduled jobs: internalMutation + scheduler.runAfter. Search: ctx.db.query('messages').withSearchIndex('by_text', q => q.search('text', query)). Convex vs Firebase vs Supabase: Convex — reactive, TypeScript-first, funkcje. Firebase — dojrzały ekosystem, NoSQL. Supabase — PostgreSQL, SQL devs. PocketBase: open-source, single binary (Go). SQLite database. Embedded admin UI. REST API automatyczny. Realtime via SSE. Auth built-in. Self-host: ./pocketbase serve. Idealny dla: hobbist projects, small teams, self-hosted. PocketBase + React: pocketbase npm package. pb.collection('posts').getFullList(). pb.authStore. Appwrite: open-source (PHP, 2019). Multi-platform SDK. Team/permissions system. Functions (různé runtimes). Self-host lub Cloud. Nhost: Hasura (GraphQL) + PostgreSQL + Auth + Storage. GraphQL jako API layer. GitHub Actions deployment. Kiedy self-host BaaS: data residency wymagania. Cost control at scale. Full customization. Privacy regulations (GDPR).",
  },
];

const baasComparison = [
  { platforma: "Firebase", baza: "Firestore (NoSQL)", opensource: "Nie", selfhost: "Nie", realtime: "Tak (Native)", auth: "Tak (Pełny)", kiedy: "Google ecosystem, NoSQL, mobile" },
  { platforma: "Supabase", baza: "PostgreSQL", opensource: "Tak", selfhost: "Tak", realtime: "Tak (Postgres)", auth: "Tak (GoTrue)", kiedy: "SQL devs, RLS, open-source" },
  { platforma: "Convex", baza: "Własna (reaktywna)", opensource: "Nie", selfhost: "Nie", realtime: "Tak (reactive)", auth: "Zewnętrzny", kiedy: "TypeScript-native, reactive queries" },
  { platforma: "PocketBase", baza: "SQLite", opensource: "Tak", selfhost: "Tak", realtime: "SSE", auth: "Tak", kiedy: "Self-host, single binary, small teams" },
  { platforma: "Appwrite", baza: "MariaDB", opensource: "Tak", selfhost: "Tak", realtime: "Tak", auth: "Tak", kiedy: "Self-host, multi-platform, team permissions" },
  { platforma: "Nhost", baza: "PostgreSQL (Hasura)", opensource: "Tak", selfhost: "Tak", realtime: "GraphQL subscriptions", auth: "Tak", kiedy: "GraphQL fans, Hasura ecosystem" },
];

export default function BlogFirebaseSupabaseCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Firebase vs Supabase vs Convex | Fotz Studio"
        description="Firebase (Firestore), Supabase (PostgreSQL + RLS), Convex (reactive), PocketBase (self-host), Appwrite, Nhost — porównanie BaaS dla startupów i projektów 2024."
        canonicalUrl="https://fotz.pl/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024"

        keywords="Firebase vs Supabase vs Convex co to jest, Firebase vs Supabase vs Convex definicja, czym jest Firebase vs Supabase vs Convex, Firebase vs Supabase vs Convex przykłady, jak działa Firebase vs Supabase vs Convex, Firebase vs Supabase vs Convex znaczenie, Firebase vs Supabase vs Convex przewodnik"

        canonical="https://fotz.pl/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024"
      />
      <ArticleSchema
        title="Firebase vs Supabase vs Convex — BaaS porównanie 2024, co wybrać?"
        description="6 platform BaaS (Firebase/Supabase/Convex/PocketBase/Appwrite/Nhost) — Firestore, PostgreSQL RLS, Row-Level Security, Auth, Realtime i self-hosting."
        url="https://fotz.pl/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Firebase vs Supabase", url: "https://fotz.pl/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-yellow-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Firebase vs Supabase", href: "/blog/firebase-supabase-convex-baas-porownanie-co-wybrac-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              BaaS / Backend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Firebase vs Supabase vs Convex
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Firestore (NoSQL), PostgreSQL z RLS, reaktywny Convex,
              self-host PocketBase — jak wybrać BaaS dla projektu w 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "NoSQL + Google", value: "Firebase" },
                { label: "PostgreSQL + RLS", value: "Supabase" },
                { label: "Reactive TS", value: "Convex" },
                { label: "Self-host binary", value: "PocketBase" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-amber-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 platform BaaS — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Firebase, Supabase, Convex, PocketBase, Appwrite i Nhost —
              baza danych, open-source, self-hosting, realtime i auth.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Platforma</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Baza danych</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Open-source</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Self-host</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Realtime</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {baasComparison.map((p, i) => (
                  <tr key={p.platforma} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.platforma}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.baza}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.opensource}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.selfhost}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.realtime}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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
