import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "PostHog — product analytics i session replay dla deweloperów?",
    answer: "PostHog: Tim Gleeson. Open source. Self-hostable lub cloud. All-in-one product analytics. Instalacja Next.js: npm install posthog-js posthog-node. Provider: posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {api_host: 'https://eu.posthog.com', person_profiles: 'identified_only'}). Events: posthog.capture('user_signed_up', {plan: 'free', source: 'google'}). Page views: automatyczne (SPA routing dodaj manualnie). Identify: posthog.identify(userId, {email, name, plan}). Group: posthog.group('company', companyId, {name: companyName}). Feature Flags: const flag = await posthog.isFeatureEnabled('new-dashboard'). if (flag) { return NewDashboard }. Multivariate: posthog.getFeatureFlag('button-color') — 'red' | 'blue' | 'control'. Bootstrap flags: server-side evaluation. Bez client latency. Session Recording: automatyczne nagrywanie sesji. Replay w UI. Privacy: maskowanie PII. Heatmaps: click, scroll, rage click. Eksperymentalne. Experiments (A/B testing): Targetowanie. Rollout. Statistical significance. Funnel Analysis: definiuj kroki. Conversion rate. Gdzie odpada. Cohorts: grupy użytkowników. Behavioral cohorts. Retention: jak wracają. Correlation analysis. Self-hosting: docker compose. PostgreSQL + Kafka + ClickHouse. Zaawansowany. EU cloud: eu.posthog.com. GDPR compliant.",
  },
  {
    question: "Sentry — error monitoring i performance tracking 2024?",
    answer: "Sentry: zaawansowany error tracking. Performance monitoring. Session replays. Release tracking. Instalacja Next.js: npm install @sentry/nextjs. npx @sentry/wizard@latest -i nextjs. Automatyczna konfiguracja. Error tracking: Sentry.captureException(error). Automatyczne uncaught exceptions. Breadcrumbs: trail co się wydarzyło. Context: user, tags, extra. Sentry.setUser({id, email, username}). Sentry.setTag('environment', 'production'). Performance: Sentry.startTransaction({name: 'process-payment'}). Spans: transaction.startChild({op: 'db.query'}). Web Vitals automatyczne (CLS, LCP, FCP, TTFB). Tracing: distributed tracing. Frontend -> Backend -> DB. Sentry.init({dsn, tracesSampleRate: 0.1, profilesSampleRate: 0.1}). Profiles: CPU profiling. Co zajmuje czas. Source Maps: automatyczne z Sentry CLI. Human-readable stack traces. Minified code -> original. Release tracking: sentry-cli releases new. Error rates per release. Regressions. Rollback decision. Alerts: error rate threshold. New issues. Performance regressions. Integrations: GitHub (link do PR). Slack. PagerDuty. Linear. Session Replay: Sentry.init({replaysSessionSampleRate: 0.1}). Replay przy błędzie zawsze. Privacy: maskowanie haseł. Blocked selectors. Pricing: darmowy (5k errors/mies). Pro ($26/mies). Business dla team. Self-hosting: sentry.io/for/self-hosted. Docker. Zaawansowany setup.",
  },
  {
    question: "Inne narzędzia analytics — Mixpanel, Amplitude, Plausible i FullStory?",
    answer: "Mixpanel: event-based analytics. Funnels, cohorts, retention. Droższy. Świetny UX. Instalacja: npm install mixpanel-browser. mixpanel.init(token). mixpanel.track('Signup', {plan}). Amplitude: enterprise analytics. Behavioral cohorts. Powerful segmentation. Amplitude SDK. Developer-friendly. Analytics.js (Segment): routing warstwy. Jedna linia kodu. Routing do wielu destinacji. Drogi ($120+/mies). Pryvatność-przyjazne: Plausible: prywatne. Open source. Bez cookies. GDPR domyślnie. Skrypt 1KB. Fathom: podobny do Plausible. Simple. Privacy-first. Pirsch: self-hostable. GDPR. Session Replay tools: FullStory: session replay + events. Frustration signals. DX Data. Hotjar: heatmaps + replay + surveys. Bardzo popularne. LogRocket: dev-focused. State replay (Redux). Network requests replay. Errors w kontekście. Microsoft Clarity: darmowy! Session replays. Heatmaps. Konwersacja: No PII per default. Dobry darmowy starter. Porównanie: startup -> PostHog (all-in-one, free). Privacy-focused -> Plausible. Debugging frontend -> LogRocket. Error tracking -> Sentry. Session replay gratis -> Clarity. Enterprise analytics -> Amplitude/Mixpanel. Real User Monitoring (RUM): SpeedCurve, Datadog RUM. Core Web Vitals in real users. Performance po deploymencie. DataDog APM: backend performance. Traces. Logs. Metrics. Kosztowny ale potężny.",
  },
  {
    question: "Feature Flags — LaunchDarkly, Unleash i OpenFeature?",
    answer: "Feature Flags: kontroluj co widzą użytkownicy. A/B testing. Canary releases. Kill switches. Stopniowy rollout. LaunchDarkly: lider rynku. SDKs: React, Node, iOS, Android. Drogi ($10+/mies per user). Enterprise features. Reguły targetowania: user ID, country, plan, random %. const variation = await ldClient.variation('new-feature', user, false). React SDK: const flags = useFlags(). flags['new-feature'] — boolean. Unleash: open source. Self-hostable. REST API. SDKs. Darmowy self-host. SaaS plan. npm install @unleash/proxy-client-react. Growthbook: open source. A/B testing focused. Statistical analysis. Self-hostable lub cloud. Flagsmith: open source. Remote config. JavaScript SDK. Docker self-host. PostHog Flags: wbudowane w PostHog. NEXT_PUBLIC_POSTHOG_KEY. Bez osobnego narzędzia. OpenFeature: CNCF projekt. Standard SDK dla feature flags. Provider pattern. Nie zmieniaj providera bez zmiany kodu. Multiple backends. @openfeature/react-sdk. const {value} = useFlag('new-feature', false). Provider: LaunchDarkly, Flagsmith, Unleash. Rollout patterns: Percentage rollout: 5% -> 25% -> 50% -> 100%. Ring deployment: internal -> beta -> prod. Geographic: kraj po kraju. User-based: opt-in beta. Plan-based: premium first. Kill switches: produkcja problem -> wyłącz feature. Bez deployu. Szybsze niż rollback. Serverside flags: nie eksponuj warunków. Zmniejsz bundle. SSR + bootstrap.",
  },
  {
    question: "Web Vitals i Real User Monitoring — mierzenie performance?",
    answer: "Core Web Vitals 2024: LCP (Largest Contentful Paint): czas do renderowania największego elementu. Dobry: 2.5s. Wymaga poprawy: 4s. CLS (Cumulative Layout Shift): nieoczekiwane przesunięcia. Dobry: 0.1. Wymaga: 0.25. INP (Interaction to Next Paint): zastąpił FID w 2024. Czas reakcji na interakcję. Dobry: 200ms. Wymaga: 500ms. TTFB (Time to First Byte): serwer response. Dobry: 800ms. FCP (First Contentful Paint): pierwsze malowanie. web-vitals biblioteka: import {getLCP, getCLS, getINP, onFCP, onTTFB} from 'web-vitals'. onLCP(({value, rating}) => { sendToAnalytics({metric: 'LCP', value, rating}) }). Next.js Web Vitals: export function reportWebVitals(metric: NextWebVitalsMetric) { if (metric.label === 'web-vital') { console.log(metric) } }. RUM (Real User Monitoring): dane od prawdziwych użytkowników. Google PageSpeed Insights. Chrome User Experience Report (CrUX). Google Search Console. DataDog RUM. New Relic Browser. Różni się od Lighthouse (syntetyczny). INP optymalizacja: Long Tasks poniżej 50ms. scheduler.postTask() — prioritize tasks. startTransition dla React updates. Requestanimationframe dla animacje. Debounce event handlers. LCP optymalizacja: fetchpriority='high' na LCP image. Preload LCP resource. Nie lazy-load LCP. Server-side rendering. Szybki TTFB. CLS optymalizacja: wymiary obrazów zawsze. Skeleton loaders z stałymi wymiarami. Nie wstawiaj powyżej treści. Font display: swap. Reserved space dla ads.",
  },
];

const analyticsTools = [
  { narzedzie: "PostHog", kategoria: "All-in-one", opis: "Events, funnels, replay, flags, A/B — self-hostable" },
  { narzedzie: "Sentry", kategoria: "Error + Performance", opis: "Błędy, tracing, replays, Web Vitals, profiling" },
  { narzedzie: "Plausible", kategoria: "Privacy-first", opis: "GDPR, bez cookies, 1KB, open source" },
  { narzedzie: "LogRocket", kategoria: "Session Replay", opis: "Dev-focused, Redux state, network, errors w kontekście" },
  { narzedzie: "LaunchDarkly", kategoria: "Feature Flags", opis: "Lider feature flags — rollout, A/B, kill switch" },
  { narzedzie: "Amplitude", kategoria: "Product Analytics", opis: "Enterprise analytics, cohorts, behavioral analysis" },
];

export default function BlogPosthogSentryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="PostHog, Sentry, Plausible i Feature Flags | Fotz Studio"
        description="Analytics i monitoring 2024: PostHog (all-in-one analytics+flags+replay), Sentry (errors+performance), Plausible (privacy-first), LaunchDarkly (feature…"
        canonical="https://fotz.pl/blog/posthog-sentry-plausible-feature-flags-analytics-monitoring-2024"

        keywords="PostHog, Sentry, Plausible i Feature Flags co to jest, PostHog, Sentry, Plausible i Feature Flags definicja, czym jest PostHog, Sentry, Plausible i Feature Flags, PostHog, Sentry, Plausible i Feature Flags przykłady, jak działa PostHog, Sentry, Plausible i Feature Flags, PostHog, Sentry, Plausible i Feature Flags znaczenie, PostHog, Sentry, Plausible i Feature Flags przewodnik"
      />
      <ArticleSchema
        title="PostHog, Sentry, Plausible i Feature Flags — analytics i monitoring 2024?"
        description="6 narzędzi analytics i monitoring (PostHog/Sentry/Plausible/LogRocket/LaunchDarkly/Amplitude) — feature flags, session replay, Web Vitals INP i Real User Monitoring."
        url="https://fotz.pl/blog/posthog-sentry-plausible-feature-flags-analytics-monitoring-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Analytics i Monitoring 2024", url: "https://fotz.pl/blog/posthog-sentry-plausible-feature-flags-analytics-monitoring-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Analytics i Monitoring 2024", url: "/blog/posthog-sentry-plausible-feature-flags-analytics-monitoring-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Analytics / Monitoring / Feature Flags
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics i Monitoring 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              PostHog (all-in-one), Sentry (errors), Plausible (privacy),
              Feature Flags i Web Vitals RUM.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "All-in-one", value: "PostHog" },
                { label: "Error tracking", value: "Sentry" },
                { label: "Privacy", value: "Plausible" },
                { label: "Flags", value: "LaunchDarkly" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi analytics i monitoring — kategoria i opis</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              PostHog, Sentry, Plausible, LogRocket, LaunchDarkly i Amplitude —
              kategoria i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kategoria</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {analyticsTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.kategoria}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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

      <RelatedArticles currentArticleId="posthog-sentry-plausible-feature-flags-analytics-monitoring-2024" />
      <ContactSection />
    </Layout>
  );
}
