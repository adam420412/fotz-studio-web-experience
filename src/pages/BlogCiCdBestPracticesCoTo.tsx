import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Jakie są najlepsze praktyki CI/CD — od czego zacząć?",
    answer: "CI/CD (Continuous Integration / Continuous Delivery) to praktyki które automatyzują budowanie, testowanie i wdrażanie oprogramowania. Fundamenty dobrego CI: Trunk-Based Development: wszyscy developerzy commitują do jednego brancha (main/trunk). Krótko żyjące feature branches (max 1-2 dni) lub feature flags zamiast długich branchy. Eliminuje merge hell. Automatyczne testy przy każdym commit: unit tests (sekunde), integration tests (minuty). Fail fast — pipeline przerywa się natychmiast po błędzie. Build raz, deploy wszędzie: artefakt (Docker image) budowany raz w CI. Ten sam image promowany przez staging → produkcja. Nie buduj ponownie dla każdego środowiska. Deterministic builds: te same inputy zawsze dają te same outputy. Lock file (package-lock.json, Cargo.lock, go.sum). Hermetic builds (brak zewnętrznych deps w build time). Pipeline as Code: Jenkinsfile, .github/workflows, .gitlab-ci.yml. Wersjonowany razem z kodem. Peer review dla pipeline zmian. Dobre praktyki CD: Blue/Green Deployment — dwa identyczne środowiska, przełącz ruch. Canary Releases — stopniowe rollout (5% → 25% → 100%). Feature Flags — oddzielenie deploy od release. Automated Rollback — automatyczne cofnięcie przy alert. Database migrations — forward-only, backward compatible. Shift-left security — security checks w CI (SAST, dependency scan).",
  },
  {
    question: "GitHub Actions, GitLab CI, CircleCI — jak wybrać narzędzie CI/CD?",
    answer: "GitHub Actions: natywna integracja z GitHub. YAML workflows w .github/workflows/. Marketplace — 10,000+ actions (reusable steps). Self-hosted runners dla custom environments lub speed. Free dla public repos, płatne minuty dla private. Matrix builds — testuj na wielu OS/wersji jednocześnie. OIDC — połącz z AWS/GCP/Azure bez long-lived credentials. Reusable Workflows — DRY dla pipeline definicji. GitLab CI: potężna platforma all-in-one (kod + CI + registry + deploy). .gitlab-ci.yml — YAML config. Stages i Jobs. GitLab Runners — shared (SaaS) lub self-managed. Include i extends — reuse configuration. Auto DevOps — automatyczny CI/CD pipeline z konwencji. Environments i review apps — deploy per branch automatycznie. Protected environments — wymagaj approval dla produkcji. CircleCI: szybkie, konfigurowalne. Orbs — reusable packages. Resource classes — wybierz CPU/RAM per job. Test splitting — rozdziel testy między N maszyn dla szybkości. Pipeline insights — analytics dotyczące pipeline. Jenkins: open-source, very customizable (ale wymaga dużo pracy operacyjnej). Groovy Pipelines (Jenkinsfile). Ogromny ekosystem pluginów. Dobre dla complex on-prem setup. Harness: enterprise-grade CD. AI-assisted deployment. Cost management, governance. Tekton (Kubernetes native): open-source, cloud-native CI/CD na K8s. Pipeline definicje jako Kubernetes CRDs. Używany przez Tekton Chains (supply chain security).",
  },
  {
    question: "Testy w pipeline — jak strukturyzować i optymalizować czas?",
    answer: "Piramida testów w CI: Unit tests (baza): szybkie (ms), izolowane, dużo ich. Powinny kończyć się w sekundy. Integration tests (środek): testują integracje (DB, API, messaging). Minuty. E2E tests (szczyt): pełne flow użytkownika. Wolne (minuty-godziny), mało ich. Strategia optymalizacji pipeline: Fail fast ordering: unit tests najpierw (najszybsze), integration po, E2E na końcu. Parallel jobs: uruchom niezależne suity testów równolegle. Test splitting: rozdziel dużą suitę na N równoległych workerów (CircleCI, Nx). Caching: cache node_modules, Go modules, Maven dependencies między runami. Cache na podstawie lock file hash. Docker layer caching. Selective testing: uruchom tylko testy dotknięte zmianami (Nx affected, Bazel, TurboRepo). Test rezultaty i flaky tests: JUnit XML format — standard dla CI reporting. Flaky tests — losowo failing testy = erosja zaufania do CI. Wykrywaj i naprawiaj flaky tests priorytetowo. Test retry — retry N razy zanim fail (CircleCI, GitHub Actions). Quality Gates: code coverage minimum (np. 80%). Static analysis (SonarQube, CodeClimate). Linting i formatting (ESLint, Prettier, Black). Security scanning (Snyk, Trivy, Semgrep). Contract tests: Pact — consumer-driven contract tests. Testuj API kontrakt między producent a konsument bez full stack. Szczególnie ważne dla mikroserwisów i event-driven architecture.",
  },
  {
    question: "Deployment strategies — Blue/Green, Canary, Rolling — jak wybrać?",
    answer: "Recreate: zatrzymaj starą wersję, uruchom nową. Downtime. Używaj tylko dla non-production lub mało krytycznych serwisów. Rolling Update: stopniowe zastępowanie instancji (N at a time). Kubernetes domyślna strategia. Zero downtime jeśli aplikacja backward compatible. Wada: przez chwilę działają obie wersje. Blue/Green: dwa identyczne środowiska (Blue = prod, Green = staging). Deploy na Green, przełącz ruch (DNS lub load balancer). Instant rollback — przełącz z powrotem na Blue. Wada: 2x infrastruktura, DB migration złożona. Canary Release: routing małego % ruchu (5%) do nowej wersji. Monitoruj metryki (error rate, latency). Stopniowo zwiększaj (5% → 25% → 50% → 100%). Automatyczny rollback przy degradacji. Implementacja: Kubernetes native przez Argo Rollouts lub Flagger. Nginx/Istio weighted routing. Feature Flags — nie deployment-level ale feature-level canary. A/B testing: podtyp canary — mierzysz conversion/engagement. Argo Rollouts: Kubernetes controller do zaawansowanych deployment strategies. AnalysisRun — automatyczna analiza metryk przy deployment. Flagger: progressive delivery operator. Integruje z Istio, Nginx, Linkerd. Automatyczne canary analysis. Deployment Frequency: według DORA — elite performers deployują wiele razy dziennie. Lead Time — czas od commit do produkcji (elita: poniżej godziny). Change Failure Rate — % deploymentów powodujących incident (elita poniżej 5%). Time to Restore — czas naprawy po incydencie (elita poniżej godziny).",
  },
  {
    question: "Supply chain security w CI/CD — SBOM, podpisywanie artefaktów, Sigstore?",
    answer: "Software Supply Chain Security: ataki na pipeline CI/CD to rosnące zagrożenie (SolarWinds, Codecov, Xz backdoor 2024). SLSA Framework (Supply chain Levels for Software Artifacts): Level 1 — dokumentacja build process. Level 2 — signed provenance z CI. Level 3 — hardened build platform (isolated builds, ephemeral environments). Level 4 — hermetic, reproducible builds. Sigstore (CNCF): bezpłatna, open-source infrastruktura do podpisywania artefaktów. Cosign — podpisuj i weryfikuj Docker images. Rekor — transparency log (niemodyfikowalny audit trail podpisów). Fulcio — Certificate Authority (certyfikaty oparte na OIDC identity). Keyless signing — nie potrzebujesz long-lived keypairs — OIDC token z CI (GitHub Actions OIDC). Policy enforcement: Kyverno / OPA Gatekeeper w Kubernetes — sprawdź czy image jest podpisany zanim deploy. SBOM w CI: Syft — generuje SBOM z Docker images lub katalogów. Grype — skanuj SBOM pod kątem CVE. Trivy — container scanner + SBOM. Dependency scanning: GitHub Dependabot / Renovate Bot — automatyczne PR z aktualizacjami deps. Snyk — CVE scanning w CI. SAST (Static Application Security Testing): Semgrep, SonarQube, CodeQL (GitHub Advanced Security). Secret scanning: TruffleHog, GitGuardian, git-secrets — wykryj sekrety w kodzie przed push. GitHub secret scanning — automatyczne. Pre-commit hooks — ostatnia linia obrony przed push secretów.",
  },
];

const cicdPipeline = [
  { etap: "1. Code Quality", opis: "Lint, format check, static analysis, type checking — szybki feedback w sekundy", narzedzia: "ESLint, Prettier, mypy, SonarQube, Semgrep" },
  { etap: "2. Unit Tests", opis: "Izolowane testy logiki biznesowej — setki/tysiące testów w sekundy", narzedzia: "Jest, pytest, JUnit, Go testing, vitest" },
  { etap: "3. Build + Image", opis: "Kompilacja, bundlowanie, Docker build — deterministyczny artefakt gotowy do deploy", narzedzia: "Docker, Buildpack, Bazel, Turbo, nx" },
  { etap: "4. Security Scan", opis: "CVE scan deps + image, SAST, secret detection — security shift-left", narzedzia: "Trivy, Snyk, Semgrep, TruffleHog, Grype" },
  { etap: "5. Integration Tests", opis: "Testy z prawdziwymi zależnościami (DB, cache, API) — Testcontainers lub staging", narzedzia: "Testcontainers, docker-compose, k3s" },
  { etap: "6. E2E Tests", opis: "Pełne flow użytkownika na staging — selektywnie, tylko krytyczne ścieżki", narzedzia: "Playwright, Cypress, Selenium, k6" },
  { etap: "7. Staging Deploy", opis: "Automatyczny deploy na staging po przejściu wszystkich testów — preview environment", narzedzia: "Argo CD, Flux, Helm, Vercel Preview" },
  { etap: "8. Production Release", opis: "Canary → stopniowy rollout → monitoring → 100% lub rollback", narzedzia: "Argo Rollouts, Flagger, Feature Flags" },
];

export default function BlogCiCdBestPracticesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CI/CD Best Practices | Fotz Studio"
        description="CI/CD: najlepsze praktyki, GitHub Actions vs GitLab CI, testy w pipeline, Blue/Green vs Canary, supply chain security (SLSA, Sigstore, SBOM) i DORA metrics."
        canonical="https://fotz.pl/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa"

        keywords="CI/CD Best Practices co to jest, CI/CD Best Practices definicja, czym jest CI/CD Best Practices, CI/CD Best Practices przykłady, jak działa CI/CD Best Practices, CI/CD Best Practices znaczenie, CI/CD Best Practices przewodnik"

        canonical="https://fotz.pl/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa"
      />
      <ArticleSchema
        title="CI/CD Best Practices — GitHub Actions, GitLab CI, Canary Deploy, SLSA, Sigstore?"
        description="CI/CD: 8-etapowy pipeline, GitHub Actions vs GitLab CI, Blue/Green vs Canary, supply chain security SLSA/Sigstore i DORA metrics dla elite performers."
        url="https://fotz.pl/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa"
        datePublished="2024-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CI/CD Best Practices", url: "https://fotz.pl/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-emerald-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "CI/CD Best Practices", url: "/blog/cicd-best-practices-github-actions-gitlab-canary-deploy-slsa" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DevOps / CI/CD
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CI/CD Best Practices
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Deploy wiele razy dziennie bez strachu. Trunk-based development,
              canary releases, supply chain security i DORA metrics —
              co robią elite software teams.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pipeline standard", value: "GitHub Actions" },
                { label: "Deploy strategy", value: "Canary / Blue-Green" },
                { label: "Supply chain sec.", value: "SLSA + Sigstore" },
                { label: "Elite deploy freq.", value: "Multiple per day" },
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

      {/* Pipeline etapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8-etapowy pipeline CI/CD</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobrze zaprojektowany pipeline balansuje szybkość feedbacku z
              kompletnym pokryciem — fail fast, ale nie pomijaj ważnych kontroli.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {cicdPipeline.map((e) => (
              <FadeInView key={e.etap}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-start">
                    <h3 className="font-bold text-gray-900">{e.etap}</h3>
                    <p className="text-gray-700 text-sm">{e.opis}</p>
                    <p className="text-xs text-green-700 font-medium">{e.narzedzia}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
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

      <RelatedArticles currentArticleId="cicd-best-practices-github-actions-gitlab-canary-deploy-slsa" />
      <ContactSection />
    </Layout>
  );
}
