import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Auth.js v5 (NextAuth v5) — konfiguracja i nowe API?",
    answer: "Auth.js v5: Balázs Orbán, Thang Huu Vu. NextAuth v5 / Auth.js v5. Beta stabilna 2024. Next.js 14/15 App Router native. Instalacja: npm install next-auth@beta. auth.ts: import NextAuth from 'next-auth'. import GitHub from 'next-auth/providers/github'. import Google from 'next-auth/providers/google'. export const {handlers, auth, signIn, signOut} = NextAuth({providers: [GitHub({clientId: process.env.AUTH_GITHUB_ID, clientSecret: process.env.AUTH_GITHUB_SECRET}), Google({clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET})], callbacks: {session({session, token}) { session.user.id = token.sub!. return session }, jwt({token, user}) { if (user) token.id = user.id. return token }}}). app/api/auth/[...nextauth]/route.ts: import {handlers} from '@/auth'. export const {GET, POST} = handlers. Automatyczna obsługa OAuth. Callbacks. Session. JWT. Edge runtime: auth() działa w middleware edge. Nie każdy adapter obsługuje edge. PrismaAdapter wymaga Node.js runtime.",
  },
  {
    question: "Auth.js v5 — Credentials provider i adapter Drizzle/Prisma?",
    answer: "Credentials Provider v5: auth.ts: import Credentials from 'next-auth/providers/credentials'. import {z} from 'zod'. providers: [Credentials({credentials: {email: {label: 'Email', type: 'email'}, password: {label: 'Password', type: 'password'}}, async authorize(credentials) { const parsed = z.object({email: z.string().email(), password: z.string()}).safeParse(credentials). if (!parsed.success) return null. const user = await db.user.findUnique({where: {email: parsed.data.email}}). if (!user) return null. const isValid = await bcrypt.compare(parsed.data.password, user.hashedPassword). if (!isValid) return null. return {id: user.id, email: user.email, name: user.name} }})]. Drizzle Adapter: npm install @auth/drizzle-adapter. import {DrizzleAdapter} from '@auth/drizzle-adapter'. auth.ts: adapter: DrizzleAdapter(db, {usersTable: users, accountsTable: accounts, sessionsTable: sessions, verificationTokensTable: verificationTokens}). Schema Drizzle: accounts, sessions, users, verification_tokens tabele. Auth.js schema. Prisma Adapter: npm install @auth/prisma-adapter. import {PrismaAdapter} from '@auth/prisma-adapter'. adapter: PrismaAdapter(prisma). Database sessions: strategy: 'database' (zamiast JWT). sesje w bazie danych. Refresh token rotation. JWT strategy: strategy: 'jwt'. Szybszy. Edge-compatible. Stateless. Wybór: small app — JWT. Enterprise — database sessions.",
  },
  {
    question: "Auth.js v5 — Server Components, middleware i ochrona tras?",
    answer: "auth() w Server Components: import {auth} from '@/auth'. export default async function Page() { const session = await auth(). if (!session) redirect('/login'). return div('Hello, ' + session.user?.name) }. Middleware ochrona: middleware.ts: import {auth} from '@/auth'. export default auth((req) => { if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) { return Response.redirect(new URL('/login', req.nextUrl)) } }). export const config = {matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'] }. Authorized callback w config: callbacks: {authorized({auth, request: {nextUrl}}) { const isLoggedIn = !!auth?.user. const isOnDashboard = nextUrl.pathname.startsWith('/dashboard'). if (isOnDashboard) return isLoggedIn. return true }}. Client: use 'use client'. import {useSession} from 'next-auth/react'. const {data: session, status} = useSession(). SessionProvider: app/layout.tsx: import {SessionProvider} from 'next-auth/react'. export default function Layout({children}) { return SessionProvider()(children) }. signIn/signOut Server Actions: import {signIn, signOut} from '@/auth'. form action={async () => { 'use server'. await signIn('github', {redirectTo: '/dashboard'}) }}. signOut — form action też. Custom pages: pages: {signIn: '/login', error: '/error', signOut: '/'}. Own login form. Google One Tap: eksperymentalne. Auth.js v5 + Resend: email provider. magic link. wysyłka przez Resend API.",
  },
  {
    question: "Auth.js v5 vs Clerk vs better-auth — porównanie bibliotek auth?",
    answer: "Auth.js v5 (NextAuth v5): open source. Self-hosted. Dojrzały. OAuth + Credentials + Email. Zalety: ogromna społeczność. 70+ providerów. Darmowy. Wady: konfiguracja boilerplate. Dokumentacja w trakcie aktualizacji. Typowanie nie idealne. Clerk: managed auth SaaS. UI gotowe. Zalety: zero konfiguracji. Piękne UI components. Organizations. MFA. WebAuthn. Audit logs. Wady: vendor lock-in. Kosztowny przy skali (cena per MAU). Zależny od zewnętrznego serwisu. better-auth: nowe (2024). TypeScript-first. Pluginy. Self-hosted. Zalety: TypeScript-native API. Plugin system. drizzle adapter. Nowoczesny design. Wady: mały ekosystem. Brak battle-tested. Lucia Auth: deprecated (2025). Nie polecane dla nowych projektów. Supabase Auth: wbudowany w Supabase. RLS integracja. Zalety: Full-stack Supabase. Polityki RLS. Wady: vendor lock Supabase. Firebase Auth: Google ecosystem. Bardzo dojrzały. Mobile focus. Kinde: managed. Developer-friendly. Dobry DX. WorkOS: enterprise. SSO. SCIM provisioning. SOC2. Rekomendacje: Startup szybki: Clerk (DX najlepszy). Open source projekt: Auth.js v5. TypeScript-first nowy projekt: better-auth. Enterprise SSO: WorkOS lub Auth0. Supabase projekt: Supabase Auth. Wybór zależy od: team size, budget, compliance, vendor lock tolerance.",
  },
  {
    question: "NextAuth v5 — zaawansowane opcje: role, tenant i custom fields?",
    answer: "Role-based access: session callback: callbacks: {session({session, token}) { session.user.role = token.role. return session }, jwt({token, user}) { if (user) token.role = user.role. return token }}. TypeScript: declare module 'next-auth' { interface User {role: 'admin' | 'user'} interface Session {user: {role: 'admin' | 'user'}} }. Middleware z rolą: if (req.auth?.user?.role !== 'admin') return redirect('/unauthorized'). Custom user fields: interface User {department: string}. Dodaj w callbacks. extend Session type. Multi-tenant: token.orgId = user.organization. Filtrovanie danych per organizacja. Row-level security. Email verification: events: {createUser: async ({user}) => await sendVerificationEmail(user.email)}. Custom verification flow. Account linking: linkAccount event. allowDangerousEmailAccountLinking. OAuth account połączenie. Remember me: session: {maxAge: 30 * 24 * 60 * 60} (30 dni). Lub per-session custom. Refresh token: rotate refresh tokens. Database sessions + refresh. Token expiry. Rate limiting: middleware — check IP. Upstash Rate Limit. Edge compatible. CSRF protection: wbudowane w Auth.js. SameSite cookie. Origin check. Custom login page: pages: {signIn: '/auth/login'}. app/auth/login/page.tsx. Form — signIn('credentials', {email, password, redirectTo: '/dashboard'}). Error handling: error param w URL. Wyświetl error message.",
  },
];

const authFeatures = [
  { biblioteka: "Auth.js v5 (NextAuth)", typ: "Open Source", opis: "OAuth, Credentials, Email — 70+ providerów, Edge middleware, adapters" },
  { biblioteka: "Credentials Provider v5", typ: "Auth.js built-in", opis: "Email+password — Zod walidacja, bcrypt, custom authorize()" },
  { biblioteka: "DrizzleAdapter", typ: "@auth/drizzle-adapter", opis: "Drizzle ORM sessions — accounts, sessions, users tables" },
  { biblioteka: "auth() Server", typ: "Auth.js v5 API", opis: "Server Component session — redirect jeśli niezalogowany" },
  { biblioteka: "Clerk", typ: "Managed SaaS", opis: "Gotowe UI, Organizations, MFA, WebAuthn — zero konfiguracji" },
  { biblioteka: "better-auth", typ: "Open Source", opis: "TypeScript-first, plugin system, drizzle — nowe 2024" },
];

export default function BlogAuthJsV5CoTo() {
  return (
    <Layout>
      <SEOHead
        title="Auth.js v5 (NextAuth v5), Credentials, Drizzle Adapter i Clerk — autentykacja 2024 | Fotz.pl"
        description="Auth.js v5: OAuth providers, Credentials, DrizzleAdapter, middleware, Server Components auth(). Porównanie: Clerk, better-auth, Supabase Auth. Role-based access. Multi-tenant."
        canonicalUrl="https://fotz.pl/blog/authjs-v5-nextauth-credentials-drizzle-adapter-clerk-autentykacja-2024"
      />
      <ArticleSchema
        title="Auth.js v5 (NextAuth v5), Credentials, Drizzle Adapter i Clerk — autentykacja 2024?"
        description="Auth.js v5: handlers, auth(), signIn/signOut, Credentials provider, DrizzleAdapter, middleware ochrona. Clerk: managed. better-auth: TypeScript-first. Role RBAC. Multi-tenant."
        url="https://fotz.pl/blog/authjs-v5-nextauth-credentials-drizzle-adapter-clerk-autentykacja-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Auth.js v5 i Clerk 2024", url: "https://fotz.pl/blog/authjs-v5-nextauth-credentials-drizzle-adapter-clerk-autentykacja-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Auth.js v5 i Clerk 2024", href: "/blog/authjs-v5-nextauth-credentials-drizzle-adapter-clerk-autentykacja-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Auth.js v5 / NextAuth / Clerk / Drizzle Adapter
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auth.js v5 i Clerk 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              NextAuth v5 (handlers, auth()), Credentials, DrizzleAdapter,
              middleware i Clerk porównanie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "OAuth + Email", value: "Auth.js v5" },
                { label: "Self-hosted", value: "Credentials" },
                { label: "Drizzle ORM", value: "DrizzleAdapter" },
                { label: "Managed", value: "Clerk" },
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Auth.js v5 i alternatywy — biblioteki auth 2024</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Auth.js v5, Credentials, DrizzleAdapter, auth(), Clerk i better-auth —
              typ i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {authFeatures.map((f, i) => (
                  <tr key={f.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.biblioteka}</td>
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
