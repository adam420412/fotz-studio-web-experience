import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest bezpieczeństwo kontenerów i jakie są główne zagrożenia?",
    answer: "Container Security obejmuje zabezpieczenie całego lifecycle kontenera — od budowania image przez uruchamianie do runtime w produkcji. Główne wektory ataków: Vulnerable base images: outdated pakiety z CVE w base image. Złośliwy kod w zależnościach (supply chain). Misconfigured containers: kontener działający jako root (default Docker). Privileged mode — pełny dostęp do hosta. Mounted host directories. Exposed secrets: hardcoded credentials w Dockerfile lub ENV. Secrets w image layers (widoczne przez docker history). Writable writable host mounts. Runtime attacks: container escape — exploit pozwalający wydostać się z kontenera. Lateral movement między kontenerami. Privilege escalation. Insecure registries: brak skanowania obrazów. Public images bez weryfikacji. Podatności w orchestratorze: niezabezpieczone Kubernetes API. Misconfigured RBAC. Etcd bez szyfrowania. Container Security 4C framework: Cloud (infrastruktura), Cluster (K8s), Container (runtime), Code (aplikacja). Każda warstwa wymaga osobnego zabezpieczenia. Kto atakuje: zewnętrzni atakujący przez podatności w aplikacji. Insiders (złośliwi pracownicy). Supply chain attacks (złośliwe npm packages, compromised CI).",
  },
  {
    question: "Bezpieczne Docker images — jak minimalizować surface attack?",
    answer: "Minimalne base images: użyj minimalnych base images zamiast ubuntu:latest. Distroless (Google): brak shell, menedżera pakietów, tylko runtime. Python distroless, Java distroless. Alpine Linux: minimalistyczny (~5MB). Scratch: absolutnie pusty, tylko binary. Chainguard images: hardened, distroless, daily updates CVE. Wolfe images: minimalne z Wolfe Scanner. Multi-stage build: build stage — kompilacja z narzędziami. Runtime stage — tylko wynik budowania, bez tools. Dockerfile: FROM golang:1.22 AS builder → RUN go build → FROM scratch → COPY --from=builder /app. Wynik: 10MB binary zamiast 1GB builder image. Nie uruchamiaj jako root: Dockerfile: USER app (dodaj nonroot user). Kubernetes: securityContext.runAsNonRoot: true. securityContext.runAsUser: 1000. Read-only filesystem: Kubernetes: securityContext.readOnlyRootFilesystem: true. Mountuj tylko potrzebne volumes (tmpdir, logs). Immutable containers: nie modyfikuj running container — replace z nowym image. No-new-privileges: securityContext.allowPrivilegeEscalation: false. Drop capabilities: securityContext.capabilities.drop: [ALL]. Dodaj tylko potrzebne: NET_BIND_SERVICE, CHOWN. Image signing: Cosign — podpisuj każdy image po build. Verify before deploy (Kubernetes admission webhook). Distroless + podpisany + skanowany = solid baseline.",
  },
  {
    question: "Skanowanie obrazów kontenerów — Trivy, Grype, Snyk?",
    answer: "Image scanning wykrywa znane CVE (Common Vulnerabilities and Exposures) w pakietach wewnątrz Docker image. Trivy (Aqua Security): open-source, wszechstronny scanner. Skanuje: Docker images, filesystem, Git repo, Kubernetes cluster, IaC (Terraform, K8s). Typy: CVE w OS packages i bibliotekach. SBOM generowanie. Misconfig detection. Secret detection. Formatty output: JSON, SARIF (GitHub Advanced Security), table. Integracja: GitHub Actions, GitLab CI, Docker build. Grype (Anchore): open-source image scanner + SBOM. Syft generuje SBOM, Grype skanuje SBOM. Snyk Container: komercyjny (free tier). CVE scan + base image recommendations. PR remediation — Snyk sugeruje update base image z mniejszą liczbą CVE. IDE integracja. ECR + Inspector: AWS Inspector automatycznie skanuje obrazy w ECR. Google Artifact Registry: automatyczne skanowanie z Container Analysis. Docker Scout: wbudowany w Docker. Rekomendacje bezpiecznych base images. CI/CD integration: scan w CI po build PRZED push do registry. Fail build jeśli CVE severity: CRITICAL lub HIGH. Przykład GitHub Action: actions/trivy-action. Severity thresholds: CRITICAL — blokuj deploy. HIGH — blokuj lub warn. MEDIUM/LOW — informuj. Zero-day i nieznane: skanery wykrywają tylko znane CVE. Runtime security (Falco) wykrywa anomalie w zachowaniu.",
  },
  {
    question: "Kubernetes Security — RBAC, Network Policies, Admission Controllers?",
    answer: "RBAC (Role-Based Access Control): Kubernetes domyślnie RBAC off (starsze) lub on (nowsze). Role — uprawnienia wewnątrz namespace. ClusterRole — uprawnienia cluster-wide. RoleBinding / ClusterRoleBinding — przypisuje role do ServiceAccount/User. Zasady: least privilege — każdy ServiceAccount tylko potrzebne uprawnienia. Nie używaj cluster-admin dla aplikacji. Audit RBAC: rbac-audit, kubectl auth can-i --list. Pod Security Standards: Baseline — minimalne restrykcje (no privileged, no hostNetwork). Restricted — silne restrykcje (no root, seccomp, drop ALL caps). Namespace level: kubectl label namespace production pod-security.kubernetes.io/enforce=restricted. Admission Controllers: OPA Gatekeeper — polityki jako kod (Rego). Blokuj deploymenty które nie spełniają polityk. Kyverno — polityki w YAML. Łatwiejszy niż OPA dla K8s use cases. Przykład: wymagaj labels, wymagaj resource limits, wymagaj image signing. ValidatingWebhookConfiguration — custom logika walidacji. Network Policies: domyślnie wszystkie Pody mogą się ze sobą komunikować. NetworkPolicy — allow-list dla ingress/egress. Deny-all domyślnie + explicit allows. Cilium Network Policy: L7 aware (HTTP method, path, gRPC service). DNS-based policy. Secrets Management: nie trzymaj secretów w etcd (plaintext lub base64 — nie encrypted). External Secrets Operator — pobieraj sekrety z Vault, AWS SSM, GCP Secret Manager. Vault Agent Injector — inject secrets jako pliki do Pod. etcd encryption at rest. Falco: runtime security — wykrywaj anomalie (shell w kontenerze, nieoczekiwany network call). eBPF-based.",
  },
  {
    question: "Runtime security i compliance — Falco, AppArmor, Seccomp?",
    answer: "Runtime Security: image scanning jest statyczne (przed runtime). Runtime security wykrywa zagrożenia gdy kontener działa. Falco (CNCF): eBPF-based runtime security. Reguły które triggerują alert gdy anomalia. Wykrywaj: shell spawn w kontenerze produkcyjnym. Nieoczekiwane połączenia sieciowe. Zapis do /etc, /bin, /usr. Privilege escalation. Container escape attempt. Falco rules: condition: spawned_process AND container AND proc.name = sh. Alert do Slack, PagerDuty, Elasticsearch. Kernel-level security: AppArmor: Linux Security Module. Profile dla każdego kontenera — co może robić. Kubernetes: securityContext.appArmorProfile.type = RuntimeDefault. Seccomp (Secure Computing Mode): filtruj syscalls dostępne dla kontenera. RuntimeDefault — bezpieczny profil. Localhost — własny profil. Kubernetes: securityContext.seccompProfile.type = RuntimeDefault. gVisor (Google): sandbox dla kontenerów — kernel warstwy między kontenerem a hostem. Silna izolacja. Kata Containers: kontenery w VM — hardware-level isolation. Wolniejsze ale najlepsza izolacja. Compliance i audyt: CIS Docker Benchmark — standard dla konfiguracji Docker. CIS Kubernetes Benchmark — standard dla K8s. Docker Bench for Security — narzędzie skanujące konfigurację Docker. kube-bench — skanuje K8s pod kątem CIS benchmark. kubescape — CNCF narzędzie do security posture management. Continuous compliance: Starboard / Trivy Operator — continuous scanning w K8s. Policy Reporter — raporty z Kyverno/OPA. RBAC audit — automatyczne sprawdzanie over-permissioned accounts.",
  },
];

const securityLayers = [
  { warstwa: "Code", opis: "Bezpieczne kodowanie, dependency scanning, SAST, secret detection przed commitem", narzedzia: "Semgrep, CodeQL, TruffleHog, Dependabot" },
  { warstwa: "Container Image", opis: "Minimalne base image, multi-stage build, non-root user, CVE scanning", narzedzia: "Trivy, Grype, Snyk, Chainguard Images" },
  { warstwa: "Image Registry", opis: "Image signing (Cosign), automated scanning, access control do registry", narzedzia: "Cosign/Sigstore, ECR Inspector, GHCR" },
  { warstwa: "Kubernetes Cluster", opis: "RBAC least privilege, Pod Security Standards, Network Policies, etcd encryption", narzedzia: "OPA Gatekeeper, Kyverno, Falco, kubescape" },
  { warstwa: "Runtime", opis: "Syscall filtering (Seccomp), AppArmor profiles, anomaly detection, container isolation", narzedzia: "Falco, gVisor, Kata Containers, Cilium" },
  { warstwa: "Infrastructure", opis: "Node security patches, cloud IAM, network segmentation, audit logging", narzedzia: "CIS Benchmark, kube-bench, Cloud Security Posture" },
];

const scannerComparison = [
  { scanner: "Trivy", focus: "CVE + IaC + Secrets + SBOM", integracja: "CI/CD, GitHub, Docker, K8s", model: "Open-source (Aqua)", strong: "Wszechstronny, szybki, dobry do CI" },
  { scanner: "Grype", focus: "CVE (SBOM-based)", integracja: "CI/CD, Syft pipeline", model: "Open-source (Anchore)", strong: "SBOM-first, precyzyjny" },
  { scanner: "Snyk Container", focus: "CVE + base image rekomendacje", integracja: "IDE, CI, Registry, PR remediation", model: "Komercyjny (free tier)", strong: "Developer UX, auto-fix suggestions" },
  { scanner: "Docker Scout", focus: "CVE + base image upgrade path", integracja: "Docker Hub, Docker Desktop, CI", model: "Free (część Docker)", strong: "Wbudowany w Docker ekosystem" },
];

export default function BlogContainerSecCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Container Security — bezpieczeństwo kontenerów, Trivy, Falco, Kubernetes RBAC? | Fotz.pl"
        description="Container Security: bezpieczne Docker images, skanowanie CVE (Trivy, Grype, Snyk), Kubernetes RBAC, Network Policies, Falco runtime security i compliance."
        canonicalUrl="https://fotz.pl/blog/container-security-bezpieczenstwo-kontenerow-trivy-falco-kubernetes-rbac"

        keywords="Container Security co to jest, Container Security jak działa, Container Security tutorial, Container Security przykład, czym jest Container Security, Container Security dokumentacja, Container Security przewodnik"
      />
      <ArticleSchema
        title="Container Security — bezpieczeństwo kontenerów, Trivy, Falco, Kubernetes RBAC?"
        description="Container Security: 6 warstw, 4 skanery (Trivy/Grype/Snyk/Scout), Kubernetes RBAC, Network Policies, Falco runtime, Seccomp/AppArmor i CIS benchmark."
        url="https://fotz.pl/blog/container-security-bezpieczenstwo-kontenerow-trivy-falco-kubernetes-rbac"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Container Security", url: "https://fotz.pl/blog/container-security-bezpieczenstwo-kontenerow-trivy-falco-kubernetes-rbac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-red-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Container Security", href: "/blog/container-security-bezpieczenstwo-kontenerow-trivy-falco-kubernetes-rbac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / DevSecOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Container Security
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Od budowania image po runtime w produkcji. Trivy skanuje CVE,
              Falco wykrywa anomalie, Kyverno egzekwuje polityki — security
              wbudowane w każdą warstwę.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Image scanner", value: "Trivy / Grype" },
                { label: "Runtime security", value: "Falco" },
                { label: "K8s policies", value: "Kyverno / OPA" },
                { label: "Compliance", value: "CIS K8s Benchmark" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-rose-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Warstwy bezpieczeństwa */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 warstw Container Security</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Container security to defense in depth — każda warstwa
              od kodu po infrastrukturę wymaga osobnego zabezpieczenia.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {securityLayers.map((l) => (
              <FadeInView key={l.warstwa}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{l.warstwa}</h3>
                  <p className="text-gray-700 text-sm mb-2">{l.opis}</p>
                  <p className="text-xs text-rose-700 font-medium">{l.narzedzia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Skanery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie skanerów obrazów kontenerów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy skaner ma inne mocne strony — Trivy jest wszechstronny,
              Grype SBOM-first, Snyk developer-friendly.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {scannerComparison.map((s) => (
              <FadeInView key={s.scanner}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{s.scanner}</h3>
                      <span className="text-xs text-rose-700 font-medium">{s.model}</span>
                    </div>
                    <p className="text-gray-700 text-xs">{s.focus}</p>
                    <p className="text-gray-600 text-xs">{s.integracja}</p>
                    <p className="text-green-700 text-xs">{s.strong}</p>
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

      <ContactSection />
    </Layout>
  );
}
