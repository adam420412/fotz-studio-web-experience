import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest DevOps?",
    answer:
      "DevOps to kultura, filozofia i zestaw praktyk łączący zespoły developerskie (Dev) i operacyjne (Ops) w celu szybszego, niezawodniejszego dostarczania oprogramowania. DevOps nie jest narzędziem ani rolą — to zmiana sposobu pracy: współdzielona odpowiedzialność za cały cykl życia produktu, automatyzacja, ciągłe doskonalenie i kultura eksperymentowania. Cel: skrócenie czasu od idei do produkcji przy zachowaniu wysokiej jakości i stabilności.",
  },
  {
    question: "Czym DevOps różni się od tradycyjnego modelu Dev + Ops?",
    answer:
      "W tradycyjnym modelu: Dev pisze kod → 'przerzuca przez płot' → Ops wdraża i zarządza. Efekt: silosy, blame game ('to nie mój problem'), rzadkie i stresujące releasy. W DevOps: Dev i Ops współdzielą odpowiedzialność przez cały cykl, automatyzacja eliminuje ręczne przekazania, częste małe wdrożenia zamiast rzadkich dużych, monitoring i feedback loops są wspólne. Zmiana kulturowa jest trudniejsza niż techniczna — narzędzia DevOps są łatwe, kultura zmiany zajmuje lata.",
  },
  {
    question: "Jakie są filary DevOps?",
    answer:
      "CALMS framework (Nicole Forsgren): Culture (kultura współpracy, blameless, eksperymentowania), Automation (automatyzacja powtarzalnych zadań — CI/CD, Infrastructure as Code, testing), Lean (eliminacja marnotrawstwa, małe batch size, continuous flow), Measurement (mierzenie wszystkiego — DORA Metrics, SLOs, monitoring), Sharing (dzielenie wiedzy, postmortems, blameless culture, dokumentacja). Sama kultura bez automatyzacji to chaotyczny agile. Sama automatyzacja bez kultury to drogi projekt toolingowy.",
  },
  {
    question: "Co to jest Infrastructure as Code (IaC)?",
    answer:
      "Infrastructure as Code (IaC) to praktyka zarządzania infrastrukturą (serwery, sieci, bazy danych) za pomocą kodu (pliki konfiguracyjne), zamiast ręcznych konfiguracji. IaC pozwala na: wersjonowanie infrastruktury (Git), powtarzalność (identyczne środowiska dev/staging/prod), peer review zmian infrastruktury, disaster recovery (odtworzenie całego środowiska z kodu). Popularne narzędzia: Terraform (multi-cloud), AWS CloudFormation, Pulumi, Ansible (configuration management).",
  },
  {
    question: "Czym jest Platform Engineering i jak łączy się z DevOps?",
    answer:
      "Platform Engineering to ewolucja DevOps na dużą skalę — budowanie wewnętrznej platformy deweloperskiej (Internal Developer Platform, IDP), która abstrakcjonalizuje złożoność infrastruktury i CI/CD dla application teams. Zamiast każdy team musi znać Kubernetes i Terraform, platformowy team dostarcza 'golden paths' — łatwe ścieżki dla typowych przypadków użycia. Narzędzia: Backstage (Spotify), Port, Humanitec. Platform Engineering pojawia się gdy DevOps skaluje się do 100+ deweloperów.",
  },
];

const devopsLifecycle = [
  { etap: "Plan", opis: "Definiowanie wymagań, planowanie sprintu, tworzenie user stories i roadmapy", narzędzia: "Jira, Linear, Notion, GitHub Issues" },
  { etap: "Code", opis: "Pisanie kodu, code review, pair programming, trunk-based development", narzędzia: "Git, GitHub/GitLab, VS Code, JetBrains" },
  { etap: "Build", opis: "Kompilacja, bundlowanie, tworzenie Docker images, dependency management", narzędzia: "Docker, Maven, npm, Gradle, Bazel" },
  { etap: "Test", opis: "Automatyczne testy jednostkowe, integracyjne, e2e, performance, security", narzędzia: "Jest, Pytest, Cypress, k6, Snyk" },
  { etap: "Release", opis: "Versioning, changelog, release notes, artifact publishing, feature flags", narzędzia: "Semantic versioning, Conventional Commits, LaunchDarkly" },
  { etap: "Deploy", opis: "Wdrożenie na staging i produkcję — automatycznie lub z approval", narzędzia: "Kubernetes, ArgoCD, Helm, Terraform, GitHub Actions" },
  { etap: "Operate", opis: "Zarządzanie infrastrukturą, capacity planning, incident response, on-call", narzędzia: "PagerDuty, OpsGenie, Kubernetes, Ansible" },
  { etap: "Monitor", opis: "Logging, metryki, tracing, alerting, SLO monitoring, feedback loops", narzędzia: "Datadog, Grafana, Prometheus, Sentry, ELK Stack" },
];

const devopsTools = [
  { kategoria: "Version Control", narzędzia: "Git, GitHub, GitLab, Bitbucket", cel: "Współpraca nad kodem, code review, branching strategy" },
  { kategoria: "CI/CD Pipeline", narzędzia: "GitHub Actions, GitLab CI, Jenkins, CircleCI", cel: "Automatyzacja build, test i deployment" },
  { kategoria: "Containerization", narzędzia: "Docker, Podman, containerd", cel: "Spójna paczka aplikacji z zależnościami, portable" },
  { kategoria: "Orchestration", narzędzia: "Kubernetes, Docker Swarm, Nomad", cel: "Zarządzanie kontenerami w skali — autoscaling, health checks" },
  { kategoria: "Infrastructure as Code", narzędzia: "Terraform, Pulumi, AWS CDK, Ansible", cel: "Wersjonowana, powtarzalna infrastruktura" },
  { kategoria: "Monitoring & Observability", narzędzia: "Datadog, Grafana/Prometheus, New Relic, Sentry", cel: "Metryki, logi, traces — pełna observability" },
  { kategoria: "Incident Management", narzędzia: "PagerDuty, OpsGenie, StatusPage, Rootly", cel: "Zarządzanie incydentami, on-call, komunikacja" },
  { kategoria: "Security (DevSecOps)", narzędzia: "Snyk, Trivy, SonarQube, HashiCorp Vault", cel: "Security wbudowane w pipeline, nie bolt-on" },
];

export default function BlogDevOpsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="DevOps — co to jest? Kultura i praktyki DevOps w organizacji IT"
        description="DevOps — definicja, CALMS framework, 8 etapów lifecycle, toolchain (CI/CD, IaC, Kubernetes, monitoring) i Platform Engineering. Kompletny przewodnik."
        canonical="https://fotz.pl/blog/devops-co-to-jest"

        keywords="DevOps co to jest, DevOps definicja, czym jest DevOps, DevOps przykłady, jak działa DevOps, DevOps znaczenie, DevOps przewodnik"
      />
      <ArticleSchema
        title="DevOps — co to jest i jak wdrożyć kulturę DevOps?"
        description="Kompletny przewodnik po DevOps: CALMS framework, 8 etapów lifecycle, toolchain i Platform Engineering."
        url="https://fotz.pl/blog/devops-co-to-jest"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "DevOps", url: "https://fotz.pl/blog/devops-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "DevOps", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            DevOps — co to jest i jak wdrożyć tę kulturę?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            DevOps łączy Development i Operations w celu szybszego, niezawodniejszego dostarczania.
            Poznaj CALMS framework, 8 etapów lifecycle i kluczowe narzędzia.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest DevOps?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>DevOps</strong> to kultura i zestaw praktyk łączący zespoły developerskie i operacyjne
              w celu szybszego i niezawodniejszego dostarczania oprogramowania. DevOps nie jest
              stanowiskiem ani narzędziem — to zmiana sposobu myślenia i współpracy.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowe CALMS: Culture (kultura), Automation (automatyzacja), Lean (eliminacja marnotrawstwa),
              Measurement (mierzenie), Sharing (dzielenie wiedzy). Organizacje z silnym DevOps
              wdrażają 46x częściej i mają 440x krótszy czas wdrożenia niż low performers (DORA State of DevOps).
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 8 etapów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 etapów DevOps lifecycle (infinite loop)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {devopsLifecycle.map((e, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{e.etap}</h3>
                      <p className="text-slate-600 text-sm mb-2">{e.opis}</p>
                      <div className="bg-cyan-50 rounded p-1 text-xs text-cyan-700">{e.narzędzia}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Toolchain */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">DevOps toolchain — kluczowe narzędzia</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kategoria</th>
                    <th className="p-3 text-left">Narzędzia</th>
                    <th className="p-3 text-left">Cel</th>
                  </tr>
                </thead>
                <tbody>
                  {devopsTools.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-cyan-700">{t.kategoria}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.narzędzia}</td>
                      <td className="p-3 text-slate-500 text-sm">{t.cel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — DevOps</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="devops-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
