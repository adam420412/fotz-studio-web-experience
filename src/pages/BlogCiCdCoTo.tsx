import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest CI/CD?",
    answer:
      "CI/CD (Continuous Integration / Continuous Delivery lub Continuous Deployment) to zestaw praktyk automatyzacji procesu wytwarzania oprogramowania. CI (Continuous Integration) — każda zmiana kodu jest automatycznie budowana i testowana zaraz po commitcie do repozytorium. CD/Delivery — kod po przejściu testów jest automatycznie przygotowany do wdrożenia (release candidate). CD/Deployment — kod jest automatycznie wdrażany na produkcję bez manualnej interwencji. CI/CD eliminuje 'integration hell' i przyspiesza dostarczanie wartości.",
  },
  {
    question: "Jaka jest różnica między Continuous Delivery a Continuous Deployment?",
    answer:
      "Continuous Delivery — pipeline automatycznie buduje i testuje kod, ale wdrożenie na produkcję wymaga manualnego zatwierdzenia (jeden klik lub approval). To podejście daje kontrolę nad momentem wdrożenia. Continuous Deployment — każda zmiana która przechodzi wszystkie testy jest automatycznie wdrażana na produkcję bez żadnej manualnej interwencji. Wymaga bardzo wysokiej jakości testów i confidence. Większość firm stosuje Continuous Delivery z manualnym gate'em, nie pełne Continuous Deployment.",
  },
  {
    question: "Jakie narzędzia do CI/CD?",
    answer:
      "Najpopularniejsze: GitHub Actions — zintegrowany z GitHub, prosta konfiguracja YAML, bezpłatny dla publicznych repo; GitLab CI/CD — wbudowany w GitLab, pełny DevOps platform; Jenkins — open-source, bardzo konfigurowalny, wymaga więcej setup; CircleCI — szybki, dobry DX, popularny w US startupach; Bitbucket Pipelines — jeśli używasz Bitbucket; ArgoCD/Flux — GitOps dla Kubernetes. Dla nowych projektów GitHub Actions lub GitLab CI/CD są zazwyczaj najlepszym wyborem.",
  },
  {
    question: "Co to jest pipeline CI/CD?",
    answer:
      "Pipeline CI/CD to sekwencja zautomatyzowanych kroków które kod przechodzi od commitu do produkcji. Typowe etapy: 1. Source (commit trigger), 2. Build (kompilacja, bundlowanie), 3. Test (unit, integration, e2e), 4. Security Scan (SAST, dependency check), 5. Artifact (build image/package), 6. Deploy to staging, 7. Smoke/acceptance tests, 8. Deploy to production (z approval lub automatycznie), 9. Post-deploy monitoring. Każdy etap jest bramką — jeśli nie przejdzie, pipeline zatrzymuje się.",
  },
  {
    question: "Jakie metryki mierzyć w CI/CD?",
    answer:
      "DORA Metrics (DevOps Research and Assessment): Deployment Frequency (jak często wdrażamy na produkcję), Lead Time for Changes (czas od commitu do produkcji), Change Failure Rate (% wdrożeń powodujących problemy), Mean Time to Recovery (średni czas przywrócenia serwisu po awarii). Elite performers: deploy wiele razy dziennie, lead time poniżej godziny, change failure rate poniżej 5%, MTTR poniżej godziny.",
  },
];

const cicdStages = [
  { etap: "Source / Trigger", opis: "Commit lub PR do repozytorium uruchamia pipeline", narzędzia: "GitHub, GitLab, Bitbucket", przykład: "git push → webhook → pipeline start" },
  { etap: "Build", opis: "Kompilacja kodu, instalacja zależności, bundlowanie aplikacji", narzędzia: "Docker, npm/yarn, Maven, Gradle", przykład: "docker build, npm run build, mvn package" },
  { etap: "Unit & Integration Tests", opis: "Automatyczne testy jednostkowe i integracyjne — fail = pipeline stop", narzędzia: "Jest, JUnit, Pytest, RSpec", przykład: "npm test, pytest, mvn test" },
  { etap: "Code Quality & Security", opis: "Static analysis, lint, dependency vulnerabilities, SAST", narzędzia: "SonarQube, Snyk, Dependabot, ESLint", przykład: "sonar-scanner, snyk test" },
  { etap: "Artifact / Image", opis: "Tworzenie deployable artifacts — Docker image, npm package, JAR", narzędzia: "Docker Hub, ECR, Artifactory, npm registry", przykład: "docker push, npm publish" },
  { etap: "Deploy Staging", opis: "Automatyczne wdrożenie na środowisko staging/pre-production", narzędzia: "Kubernetes, Helm, Terraform, ArgoCD", przykład: "helm upgrade --install, kubectl apply" },
  { etap: "E2E / Smoke Tests", opis: "Testy end-to-end na środowisku staging — weryfikacja działania jako całość", narzędzia: "Cypress, Playwright, Selenium, k6", przykład: "npx cypress run, npx playwright test" },
  { etap: "Deploy Production", opis: "Wdrożenie na produkcję — z manualnym zatwierdzeniem (CD) lub automatycznie (CD Deployment)", narzędzia: "ArgoCD, Flux, Spinnaker, manual approval", przykład: "argo sync, kubectl rollout" },
];

const deploymentStrategies = [
  { strategia: "Blue-Green Deployment", opis: "Dwa identyczne środowiska: Blue (produkcja) i Green (nowa wersja). Switch przełącza ruch. Rollback = przełącz z powrotem.", zalety: "Zero downtime, szybki rollback", wady: "Podwójne koszty infrastruktury" },
  { strategia: "Canary Release", opis: "Nowa wersja dostaje stopniowo rosnący % ruchu (1% → 5% → 25% → 100%) z monitorowaniem metryk.", zalety: "Minimalne ryzyko, real-world testing, automatyczne rollback", wady: "Złożoność konfiguracji, potrzeba feature flags" },
  { strategia: "Rolling Update", opis: "Stopniowa zamiana starych instancji nowymi — Kubernetes domyślnie. Część nowych + część starych przez czas wdrożenia.", zalety: "Zero downtime, stopniowe, oszczędność zasobów", wady: "Backward compatibility wymagana, trudny rollback mid-way" },
  { strategia: "Feature Flags", opis: "Kod wdrożony na produkcję, ale funkcja wyłączona flagą. Włączana stopniowo lub dla wybranych użytkowników.", zalety: "Oddzielenie deploymentu od releasu, A/B testing, ring deployment", wady: "Techniczny dług jeśli flagi nie są sprzątane" },
];

const doraMetrics = [
  { metryka: "Deployment Frequency", opis: "Jak często wdrażasz na produkcję", elite: "Wiele razy dziennie", high: "Raz dziennie — raz w tygodniu", low: "Raz w miesiącu lub rzadziej" },
  { metryka: "Lead Time for Changes", opis: "Czas od commitu do działającego kodu na produkcji", elite: "Poniżej godziny", high: "1 dzień — 1 tydzień", low: "Powyżej 6 miesięcy" },
  { metryka: "Change Failure Rate", opis: "% wdrożeń powodujących degradację/rollback", elite: "0-5%", high: "5-15%", low: "Powyżej 30%" },
  { metryka: "MTTR (Mean Time to Recovery)", opis: "Średni czas przywrócenia serwisu po awarii", elite: "Poniżej godziny", high: "1 dzień", low: "Powyżej tygodnia" },
];

export default function BlogCiCdCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CI/CD — co to jest? Continuous Integration i Continuous Delivery"
        description="CI/CD — definicja, 8 etapów pipeline, 4 strategie wdrożenia (Blue-Green, Canary, Rolling, Feature Flags) i DORA Metrics. Kompletny przewodnik po CI/CD."
        canonicalUrl="https://fotz.pl/blog/ci-cd-co-to-jest"
      />
      <ArticleSchema
        title="CI/CD — co to jest i jak działa Continuous Integration i Delivery?"
        description="Kompletny przewodnik po CI/CD: definicja, 8 etapów pipeline, strategie wdrożenia i DORA Metrics do mierzenia efektywności."
        url="https://fotz.pl/blog/ci-cd-co-to-jest"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CI/CD", url: "https://fotz.pl/blog/ci-cd-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "CI/CD" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            CI/CD — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Continuous Integration i Continuous Delivery to fundament nowoczesnego wytwarzania oprogramowania.
            Poznaj 8 etapów pipeline, strategie wdrożenia i DORA Metrics.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest CI/CD?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>CI/CD</strong> to zestaw praktyk automatyzacji wytwarzania oprogramowania.
              <strong> CI (Continuous Integration)</strong> — każda zmiana kodu jest automatycznie
              budowana i testowana. <strong>CD (Continuous Delivery/Deployment)</strong> — kod po
              testach jest gotowy do lub automatycznie wdrażany na produkcję.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Przed CI/CD: merge odbywały się raz na tydzień, integration hell trwał dni,
              release był stresującym eventem. Z CI/CD: każdy commit jest automatycznie walidowany,
              deploy to rutynowa operacja. Elite performers wdrażają wiele razy dziennie.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Wiele x/dzień", opis: "częstotliwość wdrożeń u elite performers (DORA Metrics)" },
                { stat: "Poniżej 1h", opis: "Lead Time for Changes u najlepszych zespołów devops" },
                { stat: "0-5%", opis: "Change Failure Rate (% wdrożeń powodujących problemy) u elite" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Pipeline */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 etapów pipeline CI/CD</h2>
            <div className="space-y-3">
              {cicdStages.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{s.etap}</h3>
                      <p className="text-slate-600 text-sm mb-2">{s.opis}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-emerald-50 text-emerald-700 rounded px-2 py-1">{s.narzędzia}</span>
                        <span className="bg-slate-100 text-slate-600 rounded px-2 py-1 font-mono">{s.przykład}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Strategie wdrożenia */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 strategie wdrożenia</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {deploymentStrategies.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-emerald-700 mb-2">{s.strategia}</h3>
                  <p className="text-slate-600 text-sm mb-3">{s.opis}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-green-50 rounded p-2">
                      <p className="font-semibold text-green-600 mb-1">Zalety:</p>
                      <p className="text-green-800">{s.zalety}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="font-semibold text-orange-600 mb-1">Wady:</p>
                      <p className="text-orange-800">{s.wady}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* DORA Metrics */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">DORA Metrics — jak mierzyć efektywność CI/CD?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Co mierzy</th>
                    <th className="p-3 text-left text-green-400">Elite</th>
                    <th className="p-3 text-left text-yellow-400">High</th>
                    <th className="p-3 text-left text-red-400">Low</th>
                  </tr>
                </thead>
                <tbody>
                  {doraMetrics.map((m, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-emerald-700">{m.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm">{m.opis}</td>
                      <td className="p-3 text-green-700 text-sm">{m.elite}</td>
                      <td className="p-3 text-yellow-700 text-sm">{m.high}</td>
                      <td className="p-3 text-red-700 text-sm">{m.low}</td>
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — CI/CD</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
