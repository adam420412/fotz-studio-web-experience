import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest i18n (internationalization) i jak wdrożyć w Next.js?",
    answer: "i18n (internationalization): przygotowanie aplikacji na wiele języków i regionów. i18n = 18 liter między 'i' a 'n'. L10n (localization): tłumaczenie dla konkretnego języka/regionu. g11n (globalization): połączenie obu. Next.js App Router i18n: brak wbudowanego i18n (w przeciwieństwie do Pages Router). Rekomendowane: next-intl, next-i18next (tylko Pages Router), Paraglide. next-intl (rekomendowany 2024): middleware do routing. app/[locale]/page.tsx — locale w URL. getTranslations('HomePage') w Server Components. useTranslations('HomePage') w Client Components. Plik wiadomości: messages/pl.json i messages/en.json. Struktura: {HomePage: {title: 'Witaj', description: 'Opis'}}. t('title') w komponentach. Pages Router next-i18next: i18n config w next.config.js. useTranslation('common'). serverSideTranslations(locale, ['common']). getStaticPaths z locale. Locale detection: middleware — Accept-Language header. Cookie (user preference). URL prefix /pl, /en. Subdomain pl.example.com. ICU message format: t('greeting', {name: 'Adam'}) + 'Witaj {name}'. Pluralization: {count, plural, one {# produkt} other {# produktów}}. Date/number formatting: Intl.DateTimeFormat, Intl.NumberFormat — native JS. t.rich() — formatowanie z JSX (linki, bold).",
  },
  {
    question: "next-intl — jak skonfigurować i używać w Next.js App Router?",
    answer: "next-intl instalacja: npm install next-intl. Struktura plików: messages/ (pl.json, en.json). i18n.ts (routing config). middleware.ts (locale detection). app/[locale]/layout.tsx (locale provider). app/[locale]/page.tsx. i18n.ts konfiguracja: import {defineRouting} from 'next-intl/routing'. export const routing = defineRouting({locales: ['pl', 'en'], defaultLocale: 'pl'}). middleware.ts: import {createMiddleware} from 'next-intl/middleware'. export default createMiddleware(routing). export const config = {matcher: ['/', '/(pl|en)/:path*']}. layout.tsx: import {NextIntlClientProvider} from 'next-intl'. import {getMessages} from 'next-intl/server'. const messages = await getMessages(). NextIntlClientProvider locale={locale} messages={messages}. Server Component: import {getTranslations} from 'next-intl/server'. const t = await getTranslations('HomePage'). t('title'). Client Component: 'use client'. import {useTranslations} from 'next-intl'. const t = useTranslations('HomePage'). t('title'). Link i navigation: import {Link} from '@/i18n/navigation'. href='/about' — automatycznie dodaje locale prefix. import {usePathname, useRouter} from '@/i18n/navigation'. Locale switcher: router.replace(pathname, {locale: 'en'}). Statyczne generowanie: generateStaticParams: routing.locales.map(locale => ({locale})). SEO: alternates.languages w generateMetadata.",
  },
  {
    question: "Formatowanie liczb, dat, walut i plural rules — Intl API?",
    answer: "Intl API (native JS): pełne wsparcie formatowania bez zewnętrznych bibliotek. Intl.NumberFormat: new Intl.NumberFormat('pl-PL', {style: 'currency', currency: 'PLN'}).format(1234.56) = '1 234,56 zł'. style: 'decimal', 'percent', 'currency', 'unit'. unit: 'kilometer', 'liter', 'kilogram'. Intl.DateTimeFormat: new Intl.DateTimeFormat('pl-PL', {dateStyle: 'full', timeStyle: 'short'}).format(new Date()) = 'sobota, 13 kwietnia 2024, 12:00'. Options: year, month, day, weekday, hour, minute. timeZone: 'Europe/Warsaw'. Intl.RelativeTimeFormat: new Intl.RelativeTimeFormat('pl', {numeric: 'auto'}).format(-1, 'day') = 'wczoraj'. format(-3, 'month') = '3 miesiące temu'. Intl.PluralRules: new Intl.PluralRules('pl').select(1) = 'one'. select(2) = 'few'. select(5) = 'many'. Języki mają złożone reguły (PL: one/few/many). next-intl integracja: t.number(1234, {style: 'currency', currency: 'PLN'}). t.dateTime(new Date(), {dateStyle: 'medium'}). t.relativeTime(-1, 'day'). Pluralizacja next-intl: messages: {products: '{count, plural, =0 {Brak} one {# produkt} few {# produkty} many {# produktów} other {# produktu}}'} t('products', {count: 5}). Waluty i regiony: różne formaty liczb (. vs , separator). Kierunek tekstu: LTR/RTL (arabski, hebrajski). dir='rtl' na html. Tailwind RTL: rtl: prefix. date-fns/locale: locale-aware date parsing.",
  },
  {
    question: "SEO dla wielojęzycznych stron — hreflang, canonical i sitemap?",
    answer: "hreflang: informuje Google o alternatywnych wersjach językowych. link rel='alternate' hreflang='pl' href='https://example.pl/pl/strona'. hreflang='en' href='https://example.pl/en/page'. hreflang='x-default' href='https://example.pl'. Musi być w każdej wersji językowej (wzajemne oznaczenia). Next.js generateMetadata: alternates: {canonical: '/pl/strona', languages: {'pl': '/pl/strona', 'en': '/en/page', 'x-default': '/'}}. Canonical URL: każda strona ma swój canonical w swoim języku. Nie wskazuj EN jako canonical dla PL strony. Sitemap: osobne sitemapy per język lub jedno z hreflang. next-sitemap: sitemapSize, robotsTxt, alternateRefs. app/sitemap.ts: return routing.locales.flatMap(locale => pages.map(page => ({url: ..., alternates: {languages: {...}}})). URL struktura: /pl/o-nas vs /en/about — przełożone URL (lepszy UX i SEO). /pl/o-nas vs /en/o-nas — łatwiejsze technicznie. Subdomain: pl.example.com (osobne crawl budget). Domain: example.pl vs example.com/pl. Google Search Console: osobne właściwości per język/kraj. Target country w GSC dla każdej wersji. Performance tracking: per locale metrics. Tłumaczenie meta: title i description w każdym języku. Unikaj auto-translate dla SEO — manualnie lub profesjonalnie. Open Graph per locale.",
  },
  {
    question: "CMS i zarządzanie tłumaczeniami — Lokalise, Crowdin i workflow?",
    answer: "Wyzwania i18n: kto tłumaczy? jak synchronizować zmiany? jak unikać missing keys? Translation Management System (TMS): Lokalise: popularny TMS dla deweloperów. CLI, GitHub integration, AI translation. Crowdin: open-source friendly. podobny do Lokalise. Phrase (Memsource): enterprise. Weblate: open-source TMS. Tolgee: open-source, in-context editing, React SDK. Workflow: Developer dodaje nowy klucz w messages/en.json (primary language). CI/CD push do TMS (Lokalise CLI push). Tłumacz tłumaczy w TMS. CI/CD pull przetłumaczone (Lokalise CLI pull). PR z tłumaczeniami. Missing translations: next-intl: fallback na defaultLocale dla brakujących. Kompilacja: Paraglide-JS generuje type-safe funkcje (nie strings). Błąd przy missing kluczu w TS. Pluralization edge cases: polski ma 4 formy plural (zero/one/few/many). Arabski — 6 form. ICU message format obsługuje wszystko. i18n dla React Native: react-i18next działa też w RN. expo-localization — device locale. React i18next: useTranslation hook. Trans component dla JSX. i18nInstance.changeLanguage('pl'). Astro i18n: Astro 4+ wbudowane i18n routing. getRelativeLocaleUrl(). astro:i18n virtual module. Vue: vue-i18n (Options API, Composition API). Nuxt: @nuxtjs/i18n.",
  },
];

const i18nLibraries = [
  { biblioteka: "next-intl", framework: "Next.js App Router", podejscie: "Server + Client components", format: "ICU messages", kiedy: "Next.js 13+ — domyślny wybór" },
  { biblioteka: "next-i18next", framework: "Next.js Pages Router", podejscie: "getServerSideProps + useTranslation", format: "JSON namespaces", kiedy: "Legacy Next.js Pages Router" },
  { biblioteka: "react-i18next", framework: "React (Vite, CRA)", podejscie: "Context + hooks", format: "JSON namespaces", kiedy: "Dowolna React app bez Next.js routing" },
  { biblioteka: "Paraglide JS", framework: "Framework-agnostic", podejscie: "Compile-time type-safe", format: "Message functions", kiedy: "Type safety critical, bundle size" },
  { biblioteka: "Tolgee", framework: "React / Vue / Angular", podejscie: "In-context editing + SDK", format: "JSON + TMS", kiedy: "Non-dev tłumacze, in-context workflow" },
  { biblioteka: "Intl API (native)", framework: "Wszystkie", podejscie: "Browser native", format: "CLDR data", kiedy: "Formatowanie liczb, dat, walut" },
];

export default function BlogI18nCoTo() {
  return (
    <Layout>
      <SEOHead
        title="i18n internacjonalizacja — next-intl, react-i18next, Paraglide Next.js 2024 | Fotz.pl"
        description="Internationalization (i18n) w Next.js: next-intl, App Router locale routing, Intl API, hreflang SEO, pluralizacja ICU, CMS tłumaczeń Lokalise i Tolgee."
        canonicalUrl="https://fotz.pl/blog/i18n-internationalization-next-intl-react-i18next-nextjs-2024"
      />
      <ArticleSchema
        title="i18n internacjonalizacja — next-intl, react-i18next, Paraglide Next.js 2024?"
        description="6 bibliotek i18n (next-intl/next-i18next/react-i18next/Paraglide/Tolgee/Intl) — locale routing, ICU pluralization, hreflang SEO, Intl.NumberFormat i TMS workflow."
        url="https://fotz.pl/blog/i18n-internationalization-next-intl-react-i18next-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "i18n Internationalization", url: "https://fotz.pl/blog/i18n-internationalization-next-intl-react-i18next-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "i18n Internationalization", href: "/blog/i18n-internationalization-next-intl-react-i18next-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              React / i18n
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Internationalization (i18n) w Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              next-intl dla App Router, locale routing, ICU message format,
              Intl API, hreflang SEO i workflow zarządzania tłumaczeniami.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "App Router i18n", value: "next-intl" },
                { label: "Plural forms", value: "ICU" },
                { label: "SEO hreflang", value: "alternates" },
                { label: "Native format", value: "Intl API" },
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

      {/* Biblioteki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek i18n dla React i Next.js</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              next-intl, next-i18next, react-i18next, Paraglide, Tolgee i Intl API —
              podejścia do internacjonalizacji od App Router po bundle-size-critical.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Podejście</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Format</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {i18nLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{l.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.podejscie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.format}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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
