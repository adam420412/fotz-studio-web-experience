import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Next.js Middleware i jak działa na edge?",
    answer: "Next.js Middleware: kod uruchamiany przed request. Edge Runtime — nie Node.js. Cloudflare Workers-like. Globalny (każdy request). Plik: middleware.ts w root projektu. export function middleware(request: NextRequest) { return NextResponse.next() }. export const config = {matcher: ['/api/:path*', '/dashboard/:path*']}. NextRequest: rozszerzony Request. URL, headers, cookies. geo — kraj, region. ip — IP klienta. NextResponse: next() — kontynuuj. redirect(url) — przekieruj. rewrite(url) — zmień URL wewnętrznie (nie widoczny dla klienta). json(data) — zwróć JSON. Headers manipulation: const response = NextResponse.next(). response.headers.set('X-Custom-Header', 'value'). Cookies manipulation: request.cookies.get('token'). response.cookies.set('session', value, {httpOnly: true}). Edge Runtime ograniczenia: brak Node.js APIs (fs, crypto full, etc.). Brak npm pakietów używających Node.js. Limit czasu wykonania (50ms). Limit wielkości (1MB). Dostępne: Fetch API, Web Crypto, TextEncoder. Config matcher: ['/dashboard/:path*'] — tylko /dashboard. ['/((?!_next/static|favicon.ico).*)'] — wszystko poza static. Matcher z has: {type: 'header', key: 'x-custom'}. Middleware stack: jedna funkcja. Brak composable middleware jak Express.",
  },
  {
    question: "Auth middleware — ochrona routów w Next.js z Clerk, NextAuth i middleware?",
    answer: "Clerk middleware: import {clerkMiddleware, createRouteMatcher} from '@clerk/nextjs/server'. const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)']). export default clerkMiddleware((auth, request) => { if (!isPublicRoute(request)) auth().protect() }). Automatyczne przekierowanie do sign-in. Brak boilerplate. NextAuth v5 (Auth.js) middleware: import NextAuth from 'next-auth'. import {authConfig} from './auth.config'. export const {auth: middleware} = NextAuth(authConfig). export const config = {matcher: ['/((?!_next|_vercel|.*\\..*).*)'] }. callbacks: {authorized: ({auth}) => !!auth?.user}. Custom JWT middleware: const token = request.cookies.get('auth_token')?.value. const decoded = await jose.jwtVerify(token, secret). if (!decoded) return NextResponse.redirect('/login'). jose — lightweight JWT dla Edge (bez crypto). Conditional routing: const isAuth = !!token. const isProtected = request.nextUrl.pathname.startsWith('/dashboard'). if (isProtected && !isAuth) { return NextResponse.redirect(new URL('/login', request.url)) }. Role-based access: decoded payload zawiera role. if (decoded.role !== 'admin') return NextResponse.redirect('/unauthorized'). URL rewriting z auth: rewrite do /login?redirect=URL. Po logowaniu redirect back. searchParams.get('redirect') || '/dashboard'. Middleware chaining pattern: export async function middleware(request) { const authResult = await checkAuth(request). if (!authResult.ok) return authResult.response. const rateLimitResult = await checkRateLimit(request). if (!rateLimitResult.ok) return rateLimitResult.response. return NextResponse.next() }.",
  },
  {
    question: "Internationalization (i18n) middleware — lokalizacja w Next.js?",
    answer: "i18n routing w Next.js App Router: middleware wykrywa język. Rewrite do /en, /pl, /de. Brak wbudowanego i18n w App Router (inaczej niż Pages Router). Popularne podejście z next-intl: npm install next-intl. middleware.ts: import createMiddleware from 'next-intl/middleware'. export default createMiddleware({locales: ['en', 'pl', 'de'], defaultLocale: 'en'}). export const config = {matcher: ['/((?!_next|_vercel|.*\\..*).*)'] }. Folder structure: app/[locale]/page.tsx. app/[locale]/layout.tsx. Messages: messages/en.json, messages/pl.json. Provider: NextIntlClientProvider messages={messages}. Hooks: useTranslations('Home'). t('title'). Locale detection: Accept-Language header. Stored cookie. Geolocation (Cloudflare geo). Custom precedence. next-i18next (Pages Router): getStaticProps z serverSideTranslations. useTranslation hook. Namespace support. Paraglide (Inlang): type-safe i18n. No bundle size overhead. Edge compatible. Lyra/Lunr multilingual search. URL structure: /en/products vs products?lang=en. SEO: hreflang tags. Sitemap per locale. canonical URL. RTL support: dir='rtl' na html. Tailwind rtl: plugin. Logical CSS properties (margin-inline-start). Arabic, Hebrew, Persian. Date/Number formatting: Intl.DateTimeFormat, Intl.NumberFormat. Per locale. Bez biblioteki.",
  },
  {
    question: "Rate limiting i security middleware w Next.js?",
    answer: "Rate limiting na Edge: @upstash/ratelimit + Upstash Redis. import {Ratelimit} from '@upstash/ratelimit'. import {Redis} from '@upstash/redis'. const ratelimit = new Ratelimit({redis: Redis.fromEnv(), limiter: Ratelimit.slidingWindow(10, '10 s')}). W middleware: const ip = request.ip || '127.0.0.1'. const {success, limit, remaining} = await ratelimit.limit(ip). if (!success) return NextResponse.json({error: 'Rate limited'}, {status: 429}). Upstash gratisowy tier: 10k req/dzień. Vercel KV (oparty na Upstash). Security headers: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. middleware.ts lub next.config.js headers(). CSP: script-src 'self' 'nonce-xxx'. Nonce generation w middleware. Bot protection: User-Agent check. IP blocklisting. CAPTCHA redirect. Arcjet: security layer dla Next.js. Rate limit + bot protection + shield. npm install @arcjet/next. aj.withRule(arcjet.detectBot({mode: 'LIVE', allow: ['CATEGORY:SEARCH_ENGINE']})). Geoblocking: request.geo?.country. if (country === 'XX') return NextResponse.redirect('/blocked'). Cloudflare WAF zamiast (lepszy). A/B testing middleware: split cookie. const variant = request.cookies.get('variant') || randomVariant(). response.cookies.set('variant', variant). Rewrite do /app/variant-a lub /variant-b. Posthog feature flags też na edge. CORS w middleware: jeśli request.method === 'OPTIONS'. return new Response(null, {headers: {Access-Control-Allow-Origin: '*'}}). Dla API routes z zewnętrznych domen.",
  },
  {
    question: "Middleware patterns — geolocation, A/B testing i dark mode?",
    answer: "Geolocation routing: request.geo.country — kod kraju (Vercel + Cloudflare). Redirect do lokalnej wersji: /pl dla PL, /de dla DE. Content personalizacja. Legal compliance — różna treść per kraj. IP geolocation (poza Vercel): MaxMind GeoIP. Edge-compatible. mmdb reader dla Edge. Cachowanie IP results. A/B testing: variant cookie w middleware. Rewrite do różnych stron. /pricing -> /pricing-variant-a lub /pricing-variant-b. Posthog Edge SDK dla flags. LaunchDarkly edge. Nie blokuj request — szybki wybór. Dark mode cookie: system preference w middleware. Cookie dla persystencji. Nie flash FOUC. request.headers.get('sec-ch-prefers-color-scheme'). Cookie: dark lub light. Header do RSC. Maintenance mode: const MAINTENANCE = process.env.MAINTENANCE_MODE === 'true'. if (MAINTENANCE && !isAdmin) return NextResponse.rewrite('/maintenance'). Admin bypass przez cookie/header. URL cleaning: lowercase URLs. Trailing slash remove/add. Canonical redirects. Starsze URL -> nowe. 301 vs 302: 301 permanentny (cachowany). 302 tymczasowy. Middleware = 302 default. NextResponse.redirect default. Dla permanentnych: {status: 301}. Preview mode: Sanity preview, Contentful preview. Draft mode (Next.js 13+). cookies().set('__prerender_bypass', '...'). Access do draft content. Passcode protection: /preview?token=SECRET. Middleware sprawdza token. Set cookie. Rewrite do draft API. Performance optimization: Middleware musi być szybkie. Brak zewnętrznych DB calls (cold start). Edge-cached data. Local lookup tables zamiast API.",
  },
];

const middlewareUses = [
  { zastosowanie: "Autentykacja", biblioteka: "Clerk / Auth.js v5", edge: "Tak (JWT verify)", kiedy: "Ochrona /dashboard, /admin routów" },
  { zastosowanie: "i18n routing", biblioteka: "next-intl / Paraglide", edge: "Tak", kiedy: "Wielojęzyczne app, /en /pl /de URL" },
  { zastosowanie: "Rate limiting", biblioteka: "@upstash/ratelimit", edge: "Tak (Redis edge)", kiedy: "API protection, 429 responses" },
  { zastosowanie: "A/B testing", biblioteka: "Custom cookie / Posthog", edge: "Tak", kiedy: "Feature experiments, UI variants" },
  { zastosowanie: "Geolocation", biblioteka: "request.geo (Vercel)", edge: "Tak", kiedy: "Country-specific content, legal compliance" },
  { zastosowanie: "Security headers", biblioteka: "Custom headers / Arcjet", edge: "Tak", kiedy: "CSP, XSS protection, bot blocking" },
];

export default function BlogNextMiddlewareCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Next.js Middleware | Fotz Studio"
        description="Next.js Middleware (edge runtime), auth (Clerk/Auth.js v5), i18n (next-intl), rate limiting (Upstash), A/B testing, geolocation i security headers na edge."
        canonical="https://fotz.pl/blog/nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024"

        keywords="Next.js Middleware co to jest, Next.js Middleware jak działa, Next.js Middleware tutorial, Next.js Middleware przykład, czym jest Next.js Middleware, Next.js Middleware dokumentacja, Next.js Middleware przewodnik"
      />
      <ArticleSchema
        title="Next.js Middleware — auth, i18n, rate limiting, A/B testing i Edge security 2024?"
        description="6 zastosowań Middleware (autentykacja/i18n/rate limiting/A/B testing/geolocation/security headers) — Edge Runtime, Clerk, next-intl, Upstash i Arcjet."
        url="https://fotz.pl/blog/nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Next.js Middleware", url: "https://fotz.pl/blog/nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Next.js Middleware", url: "/blog/nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Next.js / Edge / Middleware
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Next.js Middleware
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Edge Middleware — auth (Clerk, Auth.js), i18n (next-intl), rate limiting (Upstash),
              A/B testing, geolocation i security headers.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Edge auth", value: "Clerk/Auth.js" },
                { label: "i18n routing", value: "next-intl" },
                { label: "Rate limit", value: "Upstash" },
                { label: "Security", value: "Arcjet" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 zastosowań Next.js Middleware — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Autentykacja, i18n, rate limiting, A/B testing, geolocation i security headers —
              biblioteki, edge support i zastosowanie.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Edge</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {middlewareUses.map((m, i) => (
                  <tr key={m.zastosowanie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.zastosowanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.edge}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.kiedy}</td>
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

      <RelatedArticles currentArticleId="nextjs-middleware-edge-auth-i18n-rate-limiting-ab-testing-2024" />
      <ContactSection />
    </Layout>
  );
}
