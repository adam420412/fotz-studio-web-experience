import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest DevSecOps i czym różni się od DevOps?",
    answer: "DevSecOps to rozszerzenie filozofii DevOps które integruje Security (Sec) na każdym etapie cyklu życia oprogramowania — od design przez development, testing, deployment aż po production monitoring. Hasło: 'Shift Left Security' — przesuń security na lewo (wcześniej w SDLC), zamiast sprawdzać na końcu przed release. DevOps vs. DevSecOps: DevOps focus: szybkość dostarczania, automation, collaboration Dev+Ops. DevSecOps dodaje: Security jako wspólna odpowiedzialność całego zespołu (nie tylko dedykowany security team). Security tools wbudowane w CI/CD pipeline. Developer self-service security checks. Dlaczego DevSecOps jest ważny: koszt naprawy błędu bezpieczeństwa rośnie wykładniczo — w fazie design: $100, w fazie dev: $1000, w fazie test: $10,000, w produkcji: $100,000+. Tradycyjny model: dev team buduje feature → security audit na końcu → security team odrzuca → dev team naprawia → opóźnienie release o tygodnie. DevSecOps model: security checks zautomatyzowane w CI/CD → problemy wykrywane w ciągu minut od push. Kluczowe narzędzia: SAST (Static Application Security Testing), DAST (Dynamic AST), SCA (Software Composition Analysis), Container scanning, Secrets detection.",
  },
  {
    question: "SAST, DAST i SCA — jak działają i jakie narzędzia wybrać?",
    answer: "Typy Security Testing: SAST (Static Application Security Testing): analizuje kod źródłowy bez uruchamiania aplikacji. Wykrywa: SQL injection patterns, XSS, insecure deserialization, hardcoded secrets, insecure crypto. Narzędzia: Semgrep (open-source, szybki, konfigurowalne reguły), CodeQL (GitHub, powerful), SonarQube, Checkmarx, Veracode. Integracja: w CI pipeline na każdy PR. DAST (Dynamic Application Security Testing): testuje działającą aplikację z zewnątrz (jak atakujący). Wykrywa: injection vulnerabilities, authentication issues, exposed endpoints, CORS misconfigurations. Narzędzia: OWASP ZAP (open-source), Burp Suite (komercyjne, industry standard), Nikto. Integracja: w CI/CD po deploy na staging environment. SCA (Software Composition Analysis): analizuje dependencies/biblioteki pod kątem znanych CVE. Wykrywa: vulnerable dependencies (log4j typ). Narzędzia: Snyk (komercyjne, developer-friendly), Trivy (open-source, Aqua Security), OWASP Dependency-Check, Grype. Integracja: w CI pipeline przy każdym update dependencies. Container Security Scanning: skanuje Docker images pod kątem vulnerabilities w OS packages i aplikacjach. Narzędzia: Trivy, Grype, Snyk Container, Twistlock/Prisma Cloud. Integracja: w CI/CD przed push do registry i w registry (continuous scanning).",
  },
  {
    question: "Jak wbudować security w CI/CD pipeline?",
    answer: "Security w CI/CD — DevSecOps Pipeline: Faza 1 — Pre-commit: pre-commit hooks uruchamiają lokalnie. Secrets detection (detect-secrets, git-secrets). Basic linting security. Narzędzia: pre-commit framework, gitleaks. Faza 2 — Build / PR Check: SAST scan (Semgrep, CodeQL) — wykryje bugs na poziomie kodu. SCA scan — sprawdź dependencies. Secrets scan w kodzie (TruffleHog, Gitleaks w CI). Lint Dockerfile (Hadolint). Faza 3 — Container Build: Container image scan (Trivy, Grype). SBOM generowanie (Syft). Sign image (cosign, Sigstore). Faza 4 — Deploy to Staging: DAST scan (OWASP ZAP API scan lub full scan). Penetration testing automation. Faza 5 — Production: Runtime security (Falco — eBPF-based). Continuous vulnerability monitoring. CSPM (Cloud Security Posture Management): sprawdzaj misconfiguracje cloud (open S3 buckets, public security groups). Infrastructure as Code scanning: Terrascan, Checkov, tfsec — skanuj Terraform/CloudFormation przed apply. Policy as Code: OPA (Open Policy Agent) — definiuj security policies jako kod. Gatekeeper — wymuszaj policies w Kubernetes. Admission Controllers — blokuj deploymenty które naruszają security policies.",
  },
  {
    question: "Secrets Management w DevSecOps — jak unikać hardcoded secrets?",
    answer: "Secrets Management: Problem: developer hardcoduje API key w kodzie → push do GitHub → skanery lub atakujący wykrywają → kompromitacja. Skala problemu: GitGuardian raportuje setki tysięcy secretów eksponowanych na GitHub miesięcznie. Najczęstsze błędy: secrets w .env commitowanych, secrets w Docker images, secrets w CI/CD logs, secrets w Kubernetes ConfigMaps (zamiast Secrets). Rozwiązania: Secrets Detection (prewencja): pre-commit hooks: detect-secrets, gitleaks. CI/CD: TruffleHog (historyczne skanowanie git history), Gitleaks. GitHub Secret Scanning — automatyczne wykrywanie secrets w repo GitHub. Secrets Management (właściwe przechowywanie): HashiCorp Vault — enterprise grade, dynamic secrets, lease/revoke. AWS Secrets Manager — managed, native AWS, rotation. GCP Secret Manager / Azure Key Vault — odpowiedniki cloud-native. Kubernetes: External Secrets Operator — sync z Vault/AWS/GCP. NEVER store secrets in: Git repo (nawet private), Docker images (nawet layers), Environment variables w Kubernetes (używaj Secrets object). Best practices: Rotate secrets regularly. Use dynamic secrets (Vault generates per-request). Principle of least privilege — app dostaje tylko to czego potrzebuje. Secret zero problem: jak aplikacja dostanie dostęp do Vault? IRSA (AWS), Workload Identity (GCP), Kubernetes Service Account Token.",
  },
  {
    question: "Security Champion program — jak budować kulturę bezpieczeństwa?",
    answer: "Security Champion Program: Dlaczego konieczne: jeden security engineer nie może sprawdzić wszystkich PR w szybko rosnącej firmie. Security Champions to deweloperzy w każdym teamie którzy mają zainteresowanie i podstawową wiedzę z security. Security Champions model: Jeden Security Champion per team (5-10% czasu na security). Regular meetups Security Champions (co 2 tygodnie). Security Champions są mostem między security team a dev teams. Szkolenie i certyfikacja: OWASP Top 10 — fundamentalne dla każdego developera. SANS SEC522 / GWAPT — dla Security Champions. Bug Bounty — wewnętrzne lub zewnętrzne (HackerOne, Bugcrowd). Security Gamification: CTF (Capture The Flag) wewnętrzne competitions. Secure coding challenges. Security KPIs: Mean Time to Remediate (MTTR) per severity (P0: 24h, P1: 7 dni, P2: 30 dni). Vulnerability backlog trend. % pipeline runs z security scans. False positive rate (zbyt wiele false positives = developerzy ignorują alerty). Blameless Security Culture: gdy zostanie znaleziony vuln — focus na fix i process improvement, nie blame. Threat Modeling: regularne threat modeling dla nowych features (STRIDE framework, Attack Trees). Zaangażowanie security wcześnie w design phase.",
  },
];

const devSecOpsPipeline = [
  { etap: "Pre-commit", narzędzia: "detect-secrets, gitleaks, hadolint", co: "Secrets detection, Dockerfile lint" },
  { etap: "PR / Build", narzędzia: "Semgrep, CodeQL, Trivy, Snyk", co: "SAST, Container scan, SCA" },
  { etap: "Staging Deploy", narzędzia: "OWASP ZAP, Nuclei", co: "DAST, API security testing" },
  { etap: "Production", narzędzia: "Falco, Tetragon, CSPM", co: "Runtime security, Cloud posture" },
  { etap: "IaC Scanning", narzędzia: "Checkov, Terrascan, tfsec", co: "Terraform/K8s misconfiguration" },
  { etap: "Secrets Mgmt", narzędzia: "HashiCorp Vault, External Secrets", co: "Dynamic secrets, rotation" },
];

const owaspTop10 = [
  { nr: "A01", nazwa: "Broken Access Control", opis: "Brak właściwego sprawdzania uprawnień. Najczęstszy problem 2021-2023." },
  { nr: "A02", nazwa: "Cryptographic Failures", opis: "Słaba kryptografia, przesyłanie danych w plaintext, weak keys." },
  { nr: "A03", nazwa: "Injection", opis: "SQL Injection, LDAP Injection, Command Injection przez untrusted input." },
  { nr: "A04", nazwa: "Insecure Design", opis: "Brak threat modeling i security requirements w fazie design." },
  { nr: "A05", nazwa: "Security Misconfiguration", opis: "Default credentials, open S3 buckets, verbose error messages." },
  { nr: "A06", nazwa: "Vulnerable Components", opis: "Outdated libraries z CVE. Log4Shell jako przykład katastrofalny." },
];

export default function BlogDevSecOpsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="DevSecOps — co to jest i jak wbudować security w CI/CD? | Fotz.pl"
        description="DevSecOps: Shift Left Security, SAST/DAST/SCA narzędzia, secrets management, security w CI/CD pipeline, OWASP Top 10 i Security Champion program."
        canonicalUrl="https://fotz.pl/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd"

        keywords="DevSecOps co to jest, DevSecOps definicja, czym jest DevSecOps, DevSecOps przykłady, jak działa DevSecOps, DevSecOps znaczenie, DevSecOps przewodnik"

        canonical="https://fotz.pl/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd"
      />
      <ArticleSchema
        title="DevSecOps — co to jest i jak wbudować security w CI/CD?"
        description="DevSecOps: SAST/DAST/SCA, pipeline security (6 etapów), secrets management, OWASP Top 10, Security Champions i jak budować kulturę bezpieczeństwa."
        url="https://fotz.pl/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd"
        datePublished="2024-04-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "DevSecOps", url: "https://fotz.pl/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "DevSecOps", href: "/blog/devsecops-co-to-jest-jak-wbudowac-security-w-cicd" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DevSecOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Security nie jest bramką na końcu release — jest wbudowane
              w każdy commit, każdy PR i każdy deploy.
              Shift Left Security to jedyna skuteczna obrona w świecie gdzie
              ataki są ciągłe a luki kosztują miliony.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Filozofia", value: "Shift Left Security" },
                { label: "Typy testów", value: "SAST/DAST/SCA" },
                { label: "Etapy pipeline", value: "6 warstw" },
                { label: "OWASP Top 10", value: "A01 Broken Access" },
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

      {/* Pipeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">DevSecOps Pipeline — 6 warstw security</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Security jest zintegrowane na każdym etapie — od przed-commit
              przez CI/CD aż po monitoring produkcji.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {devSecOpsPipeline.map((e, i) => (
              <FadeInView key={e.etap}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-rose-700 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <h3 className="font-bold text-gray-900">{e.etap}</h3>
                    </div>
                    <p className="text-rose-700 font-mono text-xs">{e.narzędzia}</p>
                    <p className="text-gray-700 text-sm">{e.co}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* OWASP Top 10 */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">OWASP Top 10 — najważniejsze zagrożenia</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              OWASP Top 10 to lista najkrytyczniejszych podatności webowych.
              Każdy developer powinien je znać i rozumieć jak zapobiegać.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {owaspTop10.map((v) => (
              <FadeInView key={v.nr}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start gap-3">
                    <span className="text-rose-600 font-bold text-sm px-2 py-1 bg-rose-50 rounded flex-shrink-0">{v.nr}</span>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{v.nazwa}</h3>
                      <p className="text-gray-600 text-sm">{v.opis}</p>
                    </div>
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

      <RelatedArticles currentArticleId="devsecops-co-to-jest-jak-wbudowac-security-w-cicd" />
      <ContactSection />
    </Layout>
  );
}
