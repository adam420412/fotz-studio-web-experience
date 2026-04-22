import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Incident Management i jak definiować severity poziomy?",
    answer: "Incident Management: zestaw procesów i procedur do wykrywania, reagowania i rozwiązywania awarii systemów IT. Cel: minimalizacja czasu przestoju i wpływu na użytkowników. Cykl życia incydentu: 1. Detection — system automatycznie wykrywa anomalię (alert, monitoring). 2. Triage — ocena severity i wpływu. 3. Response — zebranie właściwego team, komunikacja. 4. Mitigation — pierwsza mitygacja (hotfix, rollback). 5. Resolution — pełne rozwiązanie przyczyny. 6. Post-Incident Review (PIR) — blameless postmortem. Severity Levels: SEV-1 (Critical) — całkowita niedostępność usługi dla wszystkich użytkowników. Wpływ finansowy natychmiastowy. Response time: 15 minut. All-hands. SEV-2 (High) — poważna degradacja dla znacznej liczby użytkowników. Response time: 30 minut. On-call engineer + TL. SEV-3 (Medium) — znaczna degradacja dla części użytkowników lub jeden kluczowy feature niedostępny. Response time: 2h. On-call engineer. SEV-4 (Low) — minor issue, obejście dostępne. Response time: next business day. Normal backlog. SEV-5 (Informational) — potencjalny problem, wymaga monitorowania. MTTD (Mean Time To Detect) — jak szybko wykrywamy. MTTR (Mean Time To Resolve) — jak szybko rozwiązujemy. MTBF (Mean Time Between Failures) — jak często awarie.",
  },
  {
    question: "PagerDuty vs Opsgenie vs Incident.io — narzędzia do zarządzania incydentami?",
    answer: "PagerDuty: lider rynku. Alerting + On-call scheduling + Incident Response. Integracje: Prometheus, Datadog, CloudWatch, Sentry, New Relic (setki integracji). Escalation Policies: alert -> engineer -> team lead -> manager. On-call rotations: weekly, follow-the-sun. Event Intelligence: AI deduplication i korelacja alertów. Response Plays: automatyczne akcje przy incydencie (bridge call, Slack channel, Jira ticket). Ceny: od $21/user/mo (Professional). Opsgenie (Atlassian): podobne do PagerDuty ale tańsze. Dobre jeśli używasz Jira. Escalation policies, rotations, integrations. Ceny: free tier (5 users), od $9/user/mo. Incident.io: nowoczesne narzędzie. Slack-first (zarządzanie incydentem przez Slack commands). Automated workflows. Timeline i post-mortem wbudowane. Ceny: od $17/user/mo. VictorOps (Splunk On-Call): dobre dla Splunk users. Status Page: statuspage.io (Atlassian) — publiczna strona statusu. Automatyczne aktualizacje przy incydencie. Komunikacja z klientami. Instatus — tańsza alternatywa. Komunikacja podczas incydentu: Slack bridge channel (np. #incident-2024-04-13-sev1). Zoom war room. Status page update. Regularne (15-30 min) aktualizacje dla stakeholders.",
  },
  {
    question: "Runbook i Playbook — jak pisać procedury obsługi incydentów?",
    answer: "Runbook: szczegółowe instrukcje krok-po-kroku dla konkretnego problemu technicznego. 'Jak zrestartować serwis X' albo 'Co zrobić gdy alarm Y'. Playbook: szerszy — proces reagowania na typ incydentu (SEV-1, Database Outage, Security Breach). Dobry Runbook zawiera: tytuł i opis problemu (kiedy używać tego runbooka). Wymagania wstępne (dostępy, narzędzia). Kroki diagnostyczne (co sprawdzić, jakie komendy). Kroki naprawcze (co zrobić krok po kroku). Rollback plan. Eskalacja (kiedy i do kogo eskalować). Powiązane zasoby (dashboard link, Slack channel, dokumentacja). Runbook jako code (docs-as-code): runbook w Markdown w repozytorium Git. Review przez PR. Versioned. Backstage TechDocs — centralizacja runbooków. Confluence — popularny ale mniej przyjazny dla developers. Automation: AWS Systems Manager Automation — uruchamia runbook automatycznie przy alercie. PagerDuty Event Orchestration — automatyczne akcje. Rundeck — planowanie i automatyzacja runbooków. Integracja z alertami: alert z linkiem do runbooka. Jedno kliknięcie do właściwych instrukcji. Redukuje MTTD i MTTR. Metryki runbooka: jak często używany. Czas od alertu do wykonania runbooka. Success rate. Runbook rotting — regularny przegląd i aktualizacja runbooków (quarterly).",
  },
  {
    question: "Blameless Postmortem — jak przeprowadzać retrospekcję po incydencie?",
    answer: "Blameless Postmortem (PIR — Post-Incident Review): analiza przyczyn incydentu bez wskazywania winnych. Cel: wyciągnąć wnioski i zapobiec powtórzeniu. Kultura blameless: ludzie popełniają błędy w złożonych systemach. Systemy muszą być zaprojektowane tak żeby błędy ludzkie nie powodowały katastrof. Fokus na systemowe przyczyny, nie na jednostki. Google SRE pionierem blameless culture. Struktura Postmortem dokumentu: Summary — co, kiedy, jak długo, wpływ na użytkowników. Timeline — chronologia eventów (UTC). Root Cause Analysis — dlaczego naprawdę się stało. Impact — liczba użytkowników, SLA breach, przychód. Contributing Factors — wszystkie czynniki które przyczyniły się. What went well — co działało dobrze podczas response. Action Items — konkretne kroki zapobiegawcze z ownerami i deadline. 5 Whys — technika znajdowania root cause. Pytaj 'dlaczego?' 5 razy. Przykład: DB crash -> czemu? Brak miejsca na dysku -> czemu? Log rotation nie działało -> czemu? Zmienna konfiguracyjna -> czemu? Brak code review -> czemu? Brak procesu review. Root cause: brak procesu review dla konfiguracji. Fishbone diagram (Ishikawa): wizualizacja przyczyn. Kategorie: People, Process, Technology, Environment. Meeting Postmortem: 60-90 minut, 1-3 dni po incydencie. Facilitator (nie osoba która popełniła błąd). Wyniki -> Action Items z ownerami i datami.",
  },
  {
    question: "On-call rotations i SLA — jak organizować dyżury i definiować umowy?",
    answer: "On-call rotation: kto jest dostępny 24/7 do odpowiedzi na alerty. Primary on-call — pierwsza odpowiedź. Secondary on-call — eskalacja gdy primary nie odpowiada. Tertiary — dalsza eskalacja (manager). Rotacja: co tydzień, co dwa tygodnie. Follow-the-sun: różne regiony przejmują dyżur w swoich godzinach pracy. Shadow on-call: juniorzy uczą się przez obserwację. Kompensata on-call: wynagrodzenie za gotowość. Overtime za poza-godzinowe incydenty. Fair rotation — każdy ma równo. PagerDuty/Opsgenie zarządzają schedule'em. On-call health: nie więcej niż jeden SEV-1/2 per tydzień. Max 2-3 alerty per noc. Quiet hours protection (SEV-4/5 nie budzą). SLA (Service Level Agreement): umowa z klientem. SLO (Service Level Objective): wewnętrzny cel. SLI (Service Level Indicator): miara. Przykład SLA: 99.9% uptime per miesiąc (8.7h downtime). 99.99% uptime (52 min downtime). Error Budget: 100% - SLO = Error Budget. 99.9% SLO = 0.1% error budget = 43.8 min/miesiąc. Burn rate: jak szybko zużywamy error budget. Alert przy burn rate > 1x (zużywamy budżet zbyt szybko). Google SRE Error Budget policy: przy burn rate > 1 -> zatrzymaj releases. Recovery: przy SEV-1 -> incident report. SLA breach -> penalty dla vendor lub informacja dla klientów. Status page update. Communication template: wewnętrzna (IT team) i zewnętrzna (klienci).",
  },
];

const incidentTools = [
  { narzedzie: "PagerDuty", typ: "Alerting + On-call + Incident Response", integracje: "500+", cena: "Od $21/user/mo", najlepsze: "Enterprise, event intelligence, pełny lifecycle" },
  { narzedzie: "Opsgenie (Atlassian)", typ: "Alerting + On-call scheduling", integracje: "200+", cena: "Free 5 users, od $9/user/mo", najlepsze: "Jira users, cost-conscious teams" },
  { narzedzie: "Incident.io", typ: "Slack-first Incident Management", integracje: "40+", cena: "Od $17/user/mo", najlepsze: "Modern teams, Slack-native workflow" },
  { narzedzie: "VictorOps (Splunk)", typ: "On-call + alerting", integracje: "200+", cena: "Od $29/user/mo", najlepsze: "Splunk ecosystem users" },
  { narzedzie: "Statuspage.io", typ: "Public status page", integracje: "30+", cena: "Od $29/mo", najlepsze: "Komunikacja z klientami podczas incydentu" },
  { narzedzie: "Rootly", typ: "Incident management + postmortem", integracje: "40+", cena: "Od $24/user/mo", najlepsze: "Automated workflows, postmortem automation" },
];

export default function BlogIncidentManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Incident Management | Fotz Studio"
        description="Incident Management: severity levels, PagerDuty vs Opsgenie vs Incident.io, Runbook, Blameless Postmortem, on-call rotations, SLO/SLA/Error Budget."
        canonical="https://fotz.pl/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla"

        keywords="Incident Management co to jest, Incident Management definicja, czym jest Incident Management, Incident Management przykłady, jak działa Incident Management, Incident Management znaczenie, Incident Management przewodnik"

        canonical="https://fotz.pl/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla"
      />
      <ArticleSchema
        title="Incident Management — co to jest, severity, PagerDuty, postmortem, on-call SLA?"
        description="Incident Management: 6 narzędzi (PagerDuty/Opsgenie/Incident.io/VictorOps/Statuspage/Rootly), severity levels, blameless postmortem, on-call, SLO/SLA."
        url="https://fotz.pl/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Incident Management", url: "https://fotz.pl/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Incident Management", url: "/blog/incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SRE / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Incident Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Severity levels, PagerDuty on-call rotations, blameless postmortem,
              Runbook i Error Budget — jak zarządzać awariami w produkcji.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "On-call alerting", value: "PagerDuty" },
                { label: "Najcięższy alarm", value: "SEV-1" },
                { label: "Bez obwiniania", value: "Blameless PIR" },
                { label: "Budżet błędów", value: "Error Budget" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi Incident Management</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od klasycznego PagerDuty przez Slack-native Incident.io po
              automatyzację postmortemów przez Rootly.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Integracje</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cena</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Najlepsze na</th>
                </tr>
              </thead>
              <tbody>
                {incidentTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{t.integracje}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.cena}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.najlepsze}</td>
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

      <RelatedArticles currentArticleId="incident-management-co-to-jest-severity-pagerduty-postmortem-on-call-sla" />
      <ContactSection />
    </Layout>
  );
}
