import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest GitOps i czym różni się od DevOps?",
    answer: "GitOps to podejście operacyjne gdzie Git jest jedynym source of truth dla infrastruktury i deploymentów aplikacji. Wszystkie zmiany w systemie są deklarowane jako kod w repozytorium Git. Operator GitOps (np. Argo CD, Flux) automatycznie synchronizuje stan klastra Kubernetes ze stanem zdefiniowanym w Git. Kluczowe zasady GitOps (Weaveworks definition): Deklaratywność — cały system opisany deklaratywnie (YAML, Helm charts). Wersjonowanie — Git jako single source of truth. Automatyczna synchronizacja — desired state w Git = actual state w klastrze. Ciągła rekoncyliacja — operator wykrywa i naprawia dryft. Różnice vs. DevOps: DevOps to kultura i praktyki. GitOps to konkretna implementacja CD (Continuous Delivery) dla cloud-native. DevOps: developer pushuje do CI/CD pipeline który deployuje. GitOps: developer commituje do Git, operator pull-uje i deployuje. Kluczowa różnica: push-based vs. pull-based deployment model. GitOps eliminuje potrzebę bezpośredniego dostępu deploy pipeline do produkcji.",
  },
  {
    question: "Jak działa GitOps w praktyce — Argo CD vs Flux?",
    answer: "GitOps w praktyce: Workflow: Developer tworzy PR z nową wersją aplikacji lub zmianą infrastruktury. Po merge do main — zmiana w repo Git. Argo CD lub Flux (operator w klastrze) wykrywa różnicę między desired state (Git) a actual state (klaster). Operator aplikuje zmiany — deployment, scaling, konfiguracja. Argo CD (CNCF graduated): UI dashboard dla wizualizacji stanu. App-of-apps pattern dla organizacji wielu aplikacji. Multi-cluster support. RBAC per aplikacja. Sync hooks: pre-sync, post-sync, sync-fail. Rollback = git revert + sync. Flux (CNCF graduated): Modularny design — Flux controllers: Kustomize, Helm, Source, Notification. OCI artifacts support (deploy z registry). Tenant isolation przez namespace-per-team. Multi-tenancy first design. Image Automation: automatyczny PR gdy nowy tag image pojawia się w registry. Wybór Argo CD vs Flux: Argo CD — bardziej UI-centric, łatwiejszy start. Flux — bardziej cloud-native, lepszy multi-tenant. Beide mają podobne możliwości. CNCF survey: Argo CD dominuje adopcją (64% GitOps users).",
  },
  {
    question: "Jakie są zalety GitOps?",
    answer: "Zalety GitOps: Security: klaster nie musi być dostępny z zewnątrz. Operator pull-uje, nie pipeline push-uje. Mniejsza attack surface — brak długożyciowych credentials do produkcji. Audytowalność: każda zmiana ma autora, datę, PR review, commit hash. Git blame = pełna historia kto co zmienił. Szybszy recovery: rollback = git revert + auto-sync. Czas recovery dramatycznie krótszy niż manualne rollbacki. Spójność środowisk: Dev, staging, prod różnią się tylko parametrami, ale ten sam kod infra. Eliminacja 'drift' między środowiskami. Self-healing: operator automatycznie naprawia manualnie zmieniony stan klastra. Ktoś kubectl-delete'ował pod w prod? Operator przywróci go z definicji w Git. Collaboration: PR-based workflow dla zmian infrastruktury. Code review dla infra = mniej błędów w prod. Bezpieczny dostęp dla junior devs — nie mogą deployować bez PR review. Compliance: każda zmiana w audyt logu. Spełnienie wymagań regulacyjnych.",
  },
  {
    question: "GitOps a Infrastructure as Code — związki i różnice?",
    answer: "GitOps a Infrastructure as Code (IaC): IaC (Terraform, Pulumi, CloudFormation) definiuje infrastrukturę jako kod — serwery, bazy danych, networking, cloud resources. GitOps stosuje te same zasady (git = source of truth, deklaratywność) do Kubernetes workloads i aplikacji. Typowy stack: Terraform do provisioning infrastruktury (EKS cluster, VPC, RDS). Helm charts / Kustomize do definiowania Kubernetes workloads. GitOps (Argo CD / Flux) do synchronizacji workloads ze stanem w Git. Różnica: Terraform działa push-based (terraform apply). GitOps działa pull-based (operator synchronizuje). Terraform zarządza cloud resources. GitOps zarządza Kubernetes objects. Kombinacja: Terraform dla infra, GitOps dla app deployment = kompletny Cloud Native stack. GitOps nie zastępuje IaC — uzupełniają się. Terraform stores state w S3/Terraform Cloud. GitOps state jest w Git. Platform Engineering trend: Internal Developer Platform (IDP) łączy IaC + GitOps + Developer Self-service w jeden workflow.",
  },
  {
    question: "Jak wdrożyć GitOps — kroki i pułapki?",
    answer: "Wdrożenie GitOps: Krok 1 — Wybierz narzędzie: Argo CD (prostszy start, lepsza UI) lub Flux (bardziej modularny). Krok 2 — Struktura repozytoriów: Mono-repo (wszystko w jednym) vs. multi-repo (per aplikacja + infra osobno). Zalecane: environment branches lub env-specific directories (manifests/dev/, manifests/staging/, manifests/prod/). Krok 3 — Zainstaluj operator: helm install argo-cd lub flux bootstrap. Krok 4 — Zdefiniuj AppProjects i Applications (Argo) lub GitRepositories i Kustomizations (Flux). Krok 5 — Migruj obecne workloady do GitOps zarządzania. Pułapki: Secrets management — nigdy nie commituj secretów do Git. Używaj Sealed Secrets, External Secrets Operator, Vault Agent Injector. Drift detection — jeśli ktoś zmienia stan klastra poza GitOps, operator to wykryje i nadpisze. Komunikuj to zespołowi. Image tagging strategy — unikaj :latest. Używaj immutable tags (commit SHA lub SemVer). Multi-cluster gotcha — każdy klaster potrzebuje własnego operatora lub hub-spoke model. Onboarding — GitOps wymaga zmiany workflow. Szkolenie deweloperów i ops jest konieczne.",
  },
];

const gitopsTools = [
  { narzędzie: "Argo CD", kategoria: "GitOps Operator", opis: "CNCF graduated. UI dashboard, multi-cluster, RBAC.", useCase: "Najszersza adopcja, dobry start" },
  { narzędzie: "Flux", kategoria: "GitOps Operator", opis: "CNCF graduated. Modularny, multi-tenant first, OCI support.", useCase: "Enterprise multi-tenant, Helm-heavy" },
  { narzędzie: "Sealed Secrets", kategoria: "Secrets Management", opis: "Szyfruje secrety i pozwala commitować zaszyfrowane do Git.", useCase: "Prosta obsługa secretów w GitOps" },
  { narzędzie: "External Secrets", kategoria: "Secrets Management", opis: "Sync secretów z Vault, AWS Secrets Manager, GCP Secret Manager.", useCase: "Enterprise, istniejący secrets manager" },
  { narzędzie: "Kustomize", kategoria: "Manifest Management", opis: "Overlay-based zarządzanie manifestami per environment bez templating.", useCase: "Native Kubernetes, środowiska dev/staging/prod" },
  { narzędzie: "Helm", kategoria: "Package Manager", opis: "Templateowanie Kubernetes manifestów, versioned releases, values per env.", useCase: "Złożone aplikacje, dużo parametrów" },
];

const gitopsVsTraditional = [
  { aspekt: "Deployment trigger", tradycyjny: "CI pipeline push do klastra", gitops: "Operator pull z Git repo" },
  { aspekt: "Credentials w pipeline", tradycyjny: "Długożyciowe kubeconfig w CI/CD", gitops: "Brak — operator ma dostęp wewnętrznie" },
  { aspekt: "Rollback", tradycyjny: "Manualne lub re-run pipeline", gitops: "git revert + auto-sync (minuty)" },
  { aspekt: "Audit log", tradycyjny: "CI/CD logs (ograniczone)", gitops: "Pełna historia Git + PR reviews" },
  { aspekt: "Dryft", tradycyjny: "Możliwy — nikt nie wykryje", gitops: "Operator automatycznie naprawia" },
  { aspekt: "Self-healing", tradycyjny: "Brak", gitops: "Tak — reconciliation loop" },
];

export default function BlogGitOpsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GitOps — co to jest i jak wdrożyć Argo CD i Flux? | Fotz.pl"
        description="GitOps: definicja, zasady (deklaratywność, reconciliation), Argo CD vs Flux, GitOps vs DevOps, secrets management, wdrożenie krok po kroku i pułapki."
        canonicalUrl="https://fotz.pl/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux"

        keywords="GitOps co to jest, GitOps definicja, czym jest GitOps, GitOps przykłady, jak działa GitOps, GitOps znaczenie, GitOps przewodnik"

        canonical="https://fotz.pl/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux"
      />
      <ArticleSchema
        title="GitOps — co to jest i jak wdrożyć Argo CD i Flux?"
        description="GitOps: zasady, Argo CD vs Flux, GitOps vs DevOps i IaC, secrets management, wdrożenie krok po kroku, 6 kluczowych narzędzi i pułapki."
        url="https://fotz.pl/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux"
        datePublished="2024-03-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GitOps", url: "https://fotz.pl/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "GitOps", href: "/blog/gitops-co-to-jest-jak-wdrozyz-argo-cd-flux" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DevOps / Cloud Native
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GitOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Git jako jedyne źródło prawdy dla infrastruktury i deploymentów.
              GitOps to pull-based CD który eliminuje ręczne deploye,
              dryft konfiguracji i długożyciowe credentials w pipeline.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Popularne narzędzia", value: "Argo CD / Flux" },
                { label: "Model", value: "Pull-based CD" },
                { label: "Adoptacja (CNCF)", value: "64% Argo CD" },
                { label: "Standard", value: "CNCF Graduated" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitOps vs Traditional */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GitOps vs. tradycyjny CI/CD</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Kluczowa różnica: push-based pipeline vs. pull-based operator.
              GitOps eliminuje potrzebę credentials do produkcji w pipeline.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Aspekt</th>
                  <th className="text-left p-3 font-bold text-gray-700">Tradycyjny CI/CD</th>
                  <th className="text-left p-3 font-bold text-orange-700">GitOps</th>
                </tr>
              </thead>
              <tbody>
                {gitopsVsTraditional.map((row, i) => (
                  <tr key={row.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-900">{row.aspekt}</td>
                    <td className="p-3 text-gray-600">{row.tradycyjny}</td>
                    <td className="p-3 text-orange-800 font-medium">{row.gitops}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe narzędzia GitOps</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              GitOps ecosystem składa się z operatorów, narzędzi do zarządzania
              manifestami i secrets management.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {gitopsTools.map((t) => (
              <FadeInView key={t.narzędzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-gray-900">{t.narzędzie}</h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 font-semibold">{t.kategoria}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{t.opis}</p>
                  <p className="text-xs text-orange-700 font-medium">{t.useCase}</p>
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

      <ContactSection />
    </Layout>
  );
}
