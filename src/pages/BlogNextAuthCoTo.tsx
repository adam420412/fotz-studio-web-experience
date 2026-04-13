import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest NextAuth.js (Auth.js) i jak działa?",
    answer: "NextAuth.js (teraz Auth.js v5): biblioteka autentykacji dla Next.js (i innych frameworków). Obsługuje OAuth providers, Email/magic link, Credentials (username/password). Wersja 5 (Auth.js): framework agnostic (Next.js, SvelteKit, Express). Edge runtime compatible. Nowe Session API. Instalacja: npm install next-auth@beta. Konfiguracja (auth.ts): import NextAuth from 'next-auth'. import GitHub from 'next-auth/providers/github'. export const {handlers, auth, signIn, signOut} = NextAuth({providers: [GitHub({clientId, clientSecret})]}). Route handler (app/api/auth/[...nextauth]/route.ts): export {GET, POST} from '@/auth'. Middleware (ochrona tras): export {auth as middleware} from '@/auth'. config: {matcher: ['/dashboard/:path*']}. Server Component: const session = await auth(). Providers wbudowane: Google, GitHub, Facebook, Twitter/X, Discord, Slack, Apple, Microsoft, Spotify. Custom Credentials: authorize(credentials) => user | null. Email provider: magic link. Callbacks: jwt() — dodaj pola do token. session() — mapuj token do session. signIn() — blokuj login. redirect() — custom redirect. Adaptery bazy danych: @auth/prisma-adapter, @auth/drizzle-adapter, @auth/mongodb-adapter. Przechowywanie sesji/kont w DB.",
  },
  {
    question: "Lucia Auth — co to jest i jak różni się od NextAuth?",
    answer: "Lucia Auth: minimalistyczna biblioteka autentykacji dla TypeScript (Pilcrow, 2022). Framework agnostic. Bazuje na session-based auth (nie JWT). Filozofia: daj devowi kontrolę. Brak magic — wiesz co robisz. Lucia v3 (2024): uproszczone API. Nie jest 'biblioteka auth' ale 'session management library'. Zarządza sesjami i user-session binding. Ty implementujesz logikę logowania. Lucia + Prisma: User model + Session model. lucia.createSession(userId, {}) — stwórz sesję. lucia.validateSession(sessionId) — zweryfikuj. lucia.invalidateSession(sessionId) — logout. lucia.createSessionCookie(sessionId) — cookie. Cookie management: lucia.sessionCookieName. Ustawianie + czyszczenie. HttpOnly, Secure, SameSite. OAuth z Arctic: @oslojs/oauth2 (od twórcy Lucia). Arctic — OAuth providers library. GitHub, Google, Discord, Apple. Lucia + Hono: import {Lucia} from 'lucia'. const lucia = new Lucia(adapter, {sessionCookie: {secure: env.NODE_ENV === 'production'}}). Kiedy Lucia zamiast NextAuth: chcesz pełną kontrolę nad logiką auth. Session-based (nie JWT). Nie Next.js (SvelteKit, Hono, Express). Custom provider logic. Kiedy NextAuth: szybki start. Wiele OAuth providers out-of-the-box. Next.js ecosystem. Mniej konfiguracji.",
  },
  {
    question: "Clerk, Supabase Auth i Auth0 — hosted authentication services?",
    answer: "Clerk: kompletna platforma autentykacji dla Next.js / React. Drop-in UI components (SignIn, SignUp, UserButton). Wbudowany user management dashboard. Organizations / multi-tenancy. Session management. MFA, Passkeys, Social OAuth. Instalacja: npm install @clerk/nextjs. ClerkProvider wrapper. middleware: clerkMiddleware. auth() w Server Components. currentUser() — pełny user object. Zalety Clerk: najlepsza DX (UI komponenty out-of-the-box). Webhook eventy (user.created, user.updated). Łatwe multi-tenancy. Wady: koszt (free do 10k MAU, potem $25/mies). Vendor lock-in. Supabase Auth: wbudowana autentykacja Supabase (PostgreSQL). Email/password, Magic Link, OAuth, Phone OTP. Row Level Security (RLS) — auth.uid() w PostgreSQL policies. supabase.auth.signInWithPassword, signInWithOAuth. useSession() hook (@supabase/auth-ui-react). Integracja z Prisma/Drizzle przez JWT verification. Auth0: enterprise auth platform. OIDC/OAuth2 compliant. Actions (custom code przy auth events). Management API. Machine-to-machine tokens. Drogi (free tier ograniczony). Better-Auth (2024): nowy, open-source, self-hosted. Plugin system. Obsługuje Prisma, Drizzle, Mongo. Dobra alternatywa dla Lucia dla kompletnych rozwiązań. Kiedy hosted auth: Clerk — szybki dev, Next.js, start-up. Supabase Auth — masz już Supabase. Auth0 — enterprise compliance (SOC2, HIPAA).",
  },
  {
    question: "Implementacja RBAC i ABAC — kontrola dostępu w aplikacjach?",
    answer: "RBAC (Role-Based Access Control): uprawnienia przypisane do ról. User -> Role -> Permissions. Implementacja w JWT: {sub: 'user123', role: 'admin'}. Sprawdzanie: if (session.user.role !== 'admin') return 403. Prisma RBAC: enum Role {USER ADMIN MODERATOR}. model User {role Role @default(USER)}. Middleware RBAC Next.js: export function withRole(role) {return async (req) => {const session = await auth(). if (session?.user?.role !== role) redirect('/403')}}. ABAC (Attribute-Based Access Control): decyzja na podstawie atrybutów (user + resource + environment). Bardziej granularne niż RBAC. Przykład: user może edytować tylko swoje posty. CASL: popularny ABAC library dla JavaScript. defineAbility((can, cannot) => {can('read', 'Article'). can('update', 'Article', {authorId: user.id})}). ability.can('update', article) — sprawdź uprawnienie. Nest.js + CASL: @UseGuards(PoliciesGuard). @CheckPolicies(can manage Article). Next.js middleware przykład: matcher dla chronionych route. Auth check + role check. Redirect do /login lub /forbidden. Permissions bitfield: uprawnienia jako bity (szybkie sprawdzanie). 0b00000001 = read. 0b00000010 = write. 0b00000100 = delete. user.permissions & PERMISSIONS.WRITE !== 0 — ma prawo zapisu. Prisma + Postgres RLS: Row Level Security na poziomie DB. auth.uid() = user_id — izolacja danych per user. Supabase używa tego intensywnie.",
  },
  {
    question: "Implementacja autentykacji w Next.js App Router — kompletny przewodnik?",
    answer: "Next.js App Router + Auth.js (NextAuth v5): Route Handler: app/api/auth/[...nextauth]/route.ts. handlers GET, POST z NextAuth. Middleware: middleware.ts (root). auth check, redirect do /login. Cookies automatyczne. Server Components: const session = await auth(). await auth() blokuje render do sesji. Szybki access do user. Client Components: import {useSession} from 'next-auth/react'. const {data: session, status} = useSession(). SessionProvider wrapper w layout. Protected pages: redirect('/login') jeśli brak sesji. Przekierowanie zachowania URL (?callbackUrl=/dashboard). signIn(provider, {redirectTo: callbackUrl}). Database adapter: @auth/prisma-adapter z User + Account + Session + VerificationToken models. Custom session fields: JWT callback (dodaj userId, role do token). Session callback (mapuj token do session). TypeScript session types: declare module 'next-auth' {interface User {role: string}}. LoginPage: signIn('github') — OAuth. signIn('credentials', formData) — credentials. signOut() — logout. Server Actions + signIn: use server. await signIn('credentials', {email, password, redirectTo: '/dashboard'}). Pełny stack 2024: Next.js App Router + Auth.js v5 + Prisma + NextAuth Prisma Adapter + PostgreSQL.",
  },
];

const authLibraries = [
  { biblioteka: "Auth.js (NextAuth v5)", typ: "Self-hosted library", podejscie: "Session + JWT", frameworki: "Next.js, SvelteKit, Express", provider: "50+ OAuth providers", kiedy: "Next.js projekty, kontrola danych" },
  { biblioteka: "Lucia Auth v3", typ: "Session management lib", podejscie: "Session-based (DB)", frameworki: "Framework agnostic", provider: "Arctic (OAuth)", kiedy: "Pełna kontrola, custom auth logic" },
  { biblioteka: "Clerk", typ: "Hosted service", podejscie: "Session + JWT", frameworki: "Next.js, React, Vue", provider: "Wbudowane (UI components)", kiedy: "Szybki start, DX, multi-tenancy" },
  { biblioteka: "Supabase Auth", typ: "Hosted (BaaS)", podejscie: "JWT + RLS", frameworki: "Any (REST/SDK)", provider: "OAuth + Email + Phone", kiedy: "Projekty z Supabase, RLS ważne" },
  { biblioteka: "Auth0 / Okta", typ: "Enterprise hosted", podejscie: "OIDC / SAML", frameworki: "Any (SDK)", provider: "Enterprise IdP", kiedy: "Enterprise, compliance (SOC2, HIPAA)" },
  { biblioteka: "Better Auth", typ: "Self-hosted library", podejscie: "Session + JWT", frameworki: "Framework agnostic", provider: "Plugin system", kiedy: "Open-source Clerk alternative" },
];

export default function BlogNextAuthCoTo() {
  return (
    <Layout>
      <SEOHead
        title="NextAuth.js, Lucia Auth, Clerk — biblioteki autentykacji dla Next.js 2024 | Fotz.pl"
        description="Auth.js (NextAuth v5), Lucia Auth, Clerk, Supabase Auth — porównanie bibliotek autentykacji, RBAC, App Router integracja i kiedy co wybrać w 2024."
        canonicalUrl="https://fotz.pl/blog/nextauth-lucia-auth-clerk-supabase-biblioteki-autentykacji-nextjs-2024"

        keywords="NextAuth.js, Lucia Auth, Clerk co to jest, NextAuth.js, Lucia Auth, Clerk jak działa, NextAuth.js, Lucia Auth, Clerk tutorial, NextAuth.js, Lucia Auth, Clerk przykład, czym jest NextAuth.js, Lucia Auth, Clerk, NextAuth.js, Lucia Auth, Clerk dokumentacja, NextAuth.js, Lucia Auth, Clerk przewodnik"
      />
      <ArticleSchema
        title="NextAuth.js, Lucia Auth, Clerk — biblioteki autentykacji dla Next.js 2024?"
        description="6 bibliotek auth (Auth.js/Lucia/Clerk/Supabase/Auth0/Better-Auth) — session vs JWT, RBAC/ABAC, Next.js App Router integracja i kiedy co wybrać."
        url="https://fotz.pl/blog/nextauth-lucia-auth-clerk-supabase-biblioteki-autentykacji-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "NextAuth, Lucia, Clerk", url: "https://fotz.pl/blog/nextauth-lucia-auth-clerk-supabase-biblioteki-autentykacji-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "NextAuth, Lucia, Clerk", href: "/blog/nextauth-lucia-auth-clerk-supabase-biblioteki-autentykacji-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Next.js / Authentication
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Biblioteki autentykacji Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Auth.js v5, Lucia Auth, Clerk i Supabase Auth — od self-hosted session
              management po hosted UI components i enterprise OIDC.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Self-hosted", value: "Auth.js v5" },
                { label: "Session control", value: "Lucia Auth" },
                { label: "Hosted UI", value: "Clerk" },
                { label: "BaaS auth", value: "Supabase" },
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

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek autentykacji dla TypeScript</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Auth.js, Lucia, Clerk, Supabase Auth, Auth0 i Better-Auth — każda
              rozwiązuje inny kompromis między kontrolą, DX a kosztem.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Frameworki</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Providery</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {authLibraries.map((a, i) => (
                  <tr key={a.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.frameworki}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.provider}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.kiedy}</td>
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
