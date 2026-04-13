import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Sentry i jak różni się od logowania?",
    answer: "Sentry: platforma error tracking i application monitoring (open-source + SaaS). Przechwytuje wyjątki i błędy automatycznie ze stacktrace, breadcrumbs i kontekstem. Różnica Sentry vs logging: Logging — rejestruje zdarzenia (tekstowo). Musisz sam przeszukiwać logi. Sentry — automatycznie grupuje podobne błędy. Dodaje context (user, request, environment). Alert przy nowym błędzie. Śledzi regresje. Grupowanie (fingerprinting): Sentry łączy podobne błędy w jeden Issue. Fingerprint na podstawie stacktrace. Jeden Issue = wiele Occurrences. Możesz śledzić: ile użytkowników dotknęło błąd. Kiedy pierwszy raz pojawił się. Czy błąd jest regresją (pojawił się po deploymencie). Kluczowe funkcje: Error Tracking — wyjątki z kontekstem. Performance Monitoring — transakcje, slow operations. Session Replay — nagrania sesji użytkownika przy błędzie. Profiling — CPU profiling w produkcji. Crons Monitoring — śledzenie zadań cron. Alerts — konfigurowalnie po warunkach. Release tracking — błędy per wersja/deployment. Platformy: JavaScript (React, Vue, Angular, Node). Python, Ruby, Java, Go, PHP, Rust, .NET. Mobile (iOS, Android, React Native, Flutter). Sentry Self-hosted: docker-compose lub Kubernetes (helm chart). Darmowy. Wymaga ~4GB RAM, 20GB disk.",
  },
  {
    question: "Sentry SDK — integracja z React, Node.js, Python?",
    answer: "Sentry React: Sentry.init({dsn: 'https://...@sentry.io/...', integrations: [Sentry.browserTracingIntegration()], tracesSampleRate: 0.1, replaysSessionSampleRate: 0.01, replaysOnErrorSampleRate: 1.0}). ErrorBoundary: <Sentry.ErrorBoundary fallback={ErrorFallback}>. Automatyczne przechwytywanie: nieobsłużone Promise rejections. Nieobsłużone wyjątki. Console.error. Manualnie: Sentry.captureException(error). Sentry.captureMessage('Something went wrong'). User context: Sentry.setUser({id: userId, email: userEmail}). Tags: Sentry.setTag('feature', 'checkout'). Extra context: Sentry.setExtra('order_id', orderId). Sentry Node.js: Sentry.init w pierwszej linii (przed innymi imports). Express integration — automatyczne request tracking. Uncaught exceptions i unhandled rejections. Sentry Python: sentry-sdk. Django integration — automatyczne request tracking. Flask, FastAPI, Celery integrations. Breadcrumbs: automatyczna historia działań przed błędem. console.log, fetch, navigation events. Własne breadcrumbs: Sentry.addBreadcrumb({message: 'Checkout started', category: 'commerce'}). Source Maps: wgraj source maps dla czytelnych stacktrace. Sentry CLI lub Webpack plugin. Automatycznie przy CI/CD deploy.",
  },
  {
    question: "Sentry Performance Monitoring — jak śledzić wolne operacje?",
    answer: "Performance Monitoring: Sentry śledzi transakcje (web requests, API calls, tasks). Transaction = root span + child spans. Spans: DB queries, HTTP calls, cache reads. Metryki: Apdex score. p50/p75/p95/p99 latencja. Throughput (req/s). Error rate. Slow transactions (outliers). Web Vitals: LCP (Largest Contentful Paint) — core web vital. FID/INP (Interaction to Next Paint) — core web vital. CLS (Cumulative Layout Shift). TTFB (Time to First Byte). Sentry integruje z browser performance API. Performance dashboard: Transaction list z p95 latencją. Summary per transaction. Span breakdown — co zajmuje czas. DB Query Analysis: slow queries z stacktrace. N+1 query detection. Query plan hints. Profiles: CPU profiling. Flame graph view. Identyfikacja hotspots. Konfiguracja sample rate: tracesSampleRate: 0.1 — 10% transakcji. tracesSampler — custom sampling function. Wysyłaj 100% dla błędów, 1% dla sukcesu. Sentry Relay: lokalny proxy. Redukuje latencję (lokalne SDK -> Relay -> Sentry cloud). Filtrowanie i transformacja eventów. PII scrubbing przed wysłaniem. Sentry Quotas: limit eventów per miesiąc. Dynamic sampling (auto-reduce przy przekroczeniu limitu). Priority processing dla errors vs transactions.",
  },
  {
    question: "Jak skonfigurować alerty i powiadomienia w Sentry?",
    answer: "Sentry Alert Rules: Issue Alerts — alert gdy nowy błąd lub regresja. Metric Alerts — alert gdy metryka przekroczy threshold. Warunki (Issues): First time an issue is seen. Regression (issue resolved, potem wraca). High frequency (> 100 occurrences/min). Assigned to user. Filters: issue level (error/warning/info). Environment (production, staging). Tags (feature, component). Akcje: Send email (team lub specific users). Send Slack notification. Send PagerDuty alert. Create Jira ticket. Send Discord notification. Webhook. Metric Alerts: e.g. Transaction Duration p95 > 2000ms przez 5 minut. Error Rate > 5% przez 10 minut. Apdex < 0.8. On-call integration: PagerDuty — automatyczny incident przy alert. OpsGenie — rotacja on-call. Alert routing per projekt/team. Noise reduction: Issue grouping — jeden alert per Issue (nie per occurrence). Muted issues — wycisz znane problemy. Ignored issues — permanent ignore. Uptime monitoring (Sentry Crons): monitoruje że cron job się uruchomił. Alert jeśli job nie wykonał się w czasie. Integracje: GitHub — link commit do błędu (suspect commits). Jira — auto-create ticket. Slack — thread per issue. Linear — create issue. Unresolved issue workflow: Assign -> Working on it -> Resolve -> Close.",
  },
  {
    question: "Sentry vs inne narzędzia — Datadog, New Relic, Rollbar, Bugsnag?",
    answer: "Sentry: specjalizacja w error tracking. Najlepszy DX (Developer Experience). Open-source (self-host). Dobry performance monitoring. Session Replay. Ceny: darmowy tier (5K errors/miesiąc). $26/miesiąc team. Datadog: pełna platforma APM (Application Performance Monitoring). Logi + metryki + traces + error tracking. Drozszy ale wszystko w jednym. Bez open-source opcji. New Relic: podobne do Datadog. Full observability platform. Free tier (100GB/miesiąc). Rollbar: error tracking, mniej funkcji niż Sentry. Dobry dla mniejszych teamów. Bugsnag: mobile-first error tracking. Dobry dla iOS/Android. Raygun: error tracking + APM. Crash reporting. Highlight.io: open-source Sentry alternative z Session Replay. GlitchTip: open-source, Sentry-compatible API. Tańszy self-host. Choosing: start-up, open-source fan -> Sentry. Full APM + logs -> Datadog lub New Relic. Mobile-first -> Bugsnag lub Raygun. Cost-sensitive -> Sentry free tier lub GlitchTip self-hosted. Error tracking only -> Sentry lub Rollbar. Best practices: filtruj zszumowane błędy (browser extensions errors). Ustaw sample rate dla performance. Ustaw proper release tracking. Skonfiguruj source maps. Przypisz błędy do właściwych teams.",
  },
];

const errorTrackingTools = [
  { narzedzie: "Sentry", typ: "Error tracking + APM + Session Replay", openSource: "Tak (BUSL)", selfHost: "Tak", cena: "Free 5K/mo, od $26/mo", najlepszeNa: "DX, open-source, React/Python/Go" },
  { narzedzie: "Datadog APM", typ: "Full observability (APM + logs + metrics)", openSource: "Nie", selfHost: "Nie", cena: "Od $31/host/mo", najlepszeNa: "Enterprise, all-in-one platform" },
  { narzedzie: "New Relic", typ: "Full observability platform", openSource: "Nie", selfHost: "Nie", cena: "Free 100GB/mo, pay-per-GB", najlepszeNa: "Full APM, flexible pricing" },
  { narzedzie: "Rollbar", typ: "Error tracking", openSource: "Nie", selfHost: "Nie", cena: "Free 5K/mo, od $12/mo", najlepszeNa: "Proste error tracking" },
  { narzedzie: "Bugsnag", typ: "Error tracking + crash reporting", openSource: "Nie", selfHost: "Nie", cena: "Od $29/mo", najlepszeNa: "Mobile (iOS/Android)" },
  { narzedzie: "GlitchTip", typ: "Error tracking (Sentry-compatible)", openSource: "Tak (MIT)", selfHost: "Tak", cena: "Free self-hosted", najlepszeNa: "Cost-sensitive, Sentry API compat" },
];

export default function BlogSentryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sentry — co to jest, error tracking, Performance Monitoring, React, Python | Fotz.pl"
        description="Sentry: error tracking, SDK integracja React/Node/Python, Performance Monitoring, Session Replay, alerty, Sentry vs Datadog/Rollbar/Bugsnag i self-hosting."
        canonicalUrl="https://fotz.pl/blog/sentry-co-to-jest-error-tracking-performance-monitoring-react-python"

        keywords="Sentry co to jest, Sentry jak działa, Sentry tutorial, Sentry przykład, czym jest Sentry, Sentry dokumentacja, Sentry przewodnik"
      />
      <ArticleSchema
        title="Sentry — co to jest, error tracking, Performance Monitoring, React, Python?"
        description="Sentry: 6 narzędzi error tracking (Sentry/Datadog/New Relic/Rollbar/Bugsnag/GlitchTip), SDK integracja, alerty, self-hosting i Performance Monitoring."
        url="https://fotz.pl/blog/sentry-co-to-jest-error-tracking-performance-monitoring-react-python"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sentry", url: "https://fotz.pl/blog/sentry-co-to-jest-error-tracking-performance-monitoring-react-python" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sentry", href: "/blog/sentry-co-to-jest-error-tracking-performance-monitoring-react-python" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Observability / Error Tracking
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sentry
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Open-source error tracking, Performance Monitoring, Session Replay
              — integracja z React, Node.js i Python, alerty i self-hosting.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Automatyczne przechwytywanie", value: "Error Tracking" },
                { label: "Nagrania sesji", value: "Session Replay" },
                { label: "Transakcje i spany", value: "Performance APM" },
                { label: "Self-hosted możliwe", value: "Open-source (BUSL)" },
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

      {/* Porównanie narzędzi */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi error tracking</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od darmowego Sentry po enterprise Datadog — każde rozwiązanie
              optymalizuje inny aspekt: DX, koszt, możliwości i integracje.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Open-source</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Self-host</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cena</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Najlepsze na</th>
                </tr>
              </thead>
              <tbody>
                {errorTrackingTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.openSource}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.selfHost}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.cena}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.najlepszeNa}</td>
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
