import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Platform Engineering i czym różni się od DevOps?",
    answer: "Platform Engineering to dyscyplina budowania i utrzymywania Internal Developer Platform (IDP) — zestawu narzędzi, procesów i workflow które umożliwiają deweloperom samodzielne wdrażanie i zarządzanie aplikacjami bez potrzeby angażowania specjalistów od infrastruktury przy każdym zadaniu. DevOps vs. Platform Engineering: DevOps to kultura i mindset — 'you build it, you run it'. Developerzy są odpowiedzialni za cały lifecycle. Problem DevOps w skali: każdy developer musi znać Kubernetes, Terraform, CI/CD, observability. Cognitive load rośnie z liczbą serwisów. Platform Engineering rozwiązuje to przez: tworzenie 'złotej ścieżki' (golden path). Developer może deployować bez znajomości Kubernetes. Platform team abstrahuje złożoność. Dlaczego teraz: w 2022 Gartner ogłosiło Platform Engineering jako top trend. Do 2026, 80% dużych organizacji software będzie miało dedykowany Platform Engineering team. Kluczowe metryki Platform Engineering: Developer Experience (DevEx), Cognitive Load reduction, Time-to-Production (jak szybko nowy developer może deployować), DORA metrics dla platform users. Platform as a Product: IDP traktowany jak produkt wewnętrzny. Platform team = product team z własnym roadmapem, backlogiem i miarami adopcji.",
  },
  {
    question: "Co to jest Internal Developer Platform (IDP) i jak ją zbudować?",
    answer: "Internal Developer Platform (IDP) to zestaw narzędzi, workflow i szablonów który deweloperzy używają do budowania, deployowania i zarządzania swoimi serwisami. Abstrakcja nad złożonością infrastruktury (Kubernetes, Terraform, CI/CD). Składniki IDP: Self-service infrastructure — developer tworzy nowy serwis przez UI/CLI, nie musi pisać Terraform. Standardowe szablony aplikacji (service templates). CI/CD pipelines pre-configured. Observability stack już podłączony. Secrets management. Backstage jako podstawa IDP: Spotify open-source'ował Backstage w 2020 (CNCF Incubating). Software Catalog — centralny rejestr wszystkich serwisów, API, teamów. Techdocs — dokumentacja jako kod w repozytorium, renderowana przez Backstage. Software Templates (Scaffolder) — developer wypełnia formularz, Backstage tworzy repo z template, CI/CD pipeline i wszystkimi integracjami. Plugins — bogaty ekosystem pluginów (GitHub, ArgoCD, Kubernetes, PagerDuty, Datadog). Search — znajdź cokolwiek w katalogu. Jak zbudować IDP: zacznij od Software Catalog (gdzie są nasze serwisy?). Dodaj Techdocs. Dodaj pierwsze Software Templates. Stopniowo automatyzuj więcej przez pluginy.",
  },
  {
    question: "Backstage — jak wdrożyć i skonfigurować?",
    answer: "Backstage — wdrożenie: Prerequisites: Node.js 18+, Yarn. Baza danych (PostgreSQL dla produkcji). GitHub/GitLab jako SCM (do Software Catalog i Templates). Inicjalizacja: npx @backstage/create-app@latest. Tworzy monorepo z packages/app (frontend) i packages/backend. Konfiguracja app-config.yaml: definiujesz integracje (GitHub, GitLab, JIRA, PagerDuty, itp.). Software Catalog: importuj komponenty przez catalog-info.yaml w każdym repo. Hierarchia: System → Component → API → Resource. Backstage automatycznie odkrywa catalog-info.yaml przez GitHub App lub manual import. Software Templates: piszesz template.yaml z parametrami (forma w UI) i krokami (generowanie kodu, tworzenie repo, CI/CD setup). Przykład template: 'Create Node.js Microservice' → developer wypełnia nazwę, team, SLA → Backstage tworzy repo z boilerplate, Dockerfile, GitHub Actions CI, ArgoCD app. Deploying Backstage: Docker image + Kubernetes Deployment + PostgreSQL. Helm chart dostępny. Authentication: GitHub OAuth, GitLab OAuth, Google SSO, SAML. Backstage w produkcji u Spotify: ponad 1000 serwisów w katalogu. 200+ software templates. Dramatic reduction w time-to-production dla nowych serwisów.",
  },
  {
    question: "Golden Path — co to jest i dlaczego ważny?",
    answer: "Golden Path to zestaw zdefiniowanych, zalecanch ścieżek którymi developer podąża aby zbudować, deployować i zarządzać serwisem w organizacji. Nie jest obowiązkowy, ale jest domyślnym wyborem który działa bez friction. Zasada: 'uczyń dobry wybór łatwym, zły wybór możliwym'. Dlaczego ważny: bez Golden Path — każdy team wybiera własne technologie, podejście do CI/CD, observability, security. Efekt: N różnych podejść, niemożliwość rotacji developerów między teamami, duplikacja wysiłku. Z Golden Path — nowy projekt startuje z working CI/CD, observability, security, containerization w dniu 0. Elementy Golden Path: Language/Framework template (np. Go microservice, Python FastAPI, Node.js). Dockerfile i Docker best practices. CI/CD pipeline (GitHub Actions + ArgoCD). Observability (OpenTelemetry auto-instrumentation, dashboardy Grafana pre-configured). Secret management (External Secrets Operator). Kubernetes manifests (Helm chart lub Kustomize). Service mesh injection. SLO templates. Pułapki: Golden Path musi ewoluować. Jeśli stanie się zbyt sztywny — deweloperzy go omijają. Regularnie zbieraj feedback od developer community. Przykład: Netflix Paved Road, Spotify Golden Path, Airbnb ServiceFramework.",
  },
  {
    question: "Jak mierzyć sukces Platform Engineering?",
    answer: "Mierzenie sukcesu Platform Engineering: Developer Experience (DevEx): SPACE framework — Satisfaction, Performance, Activity, Communication, Efficiency. Developer surveys co kwartał — Net Promoter Score dla platformy. Cognitive Load — subiektywna ocena złożoności systemu przez developerów. Adoption metryki: odsetek teamów używających Golden Path vs. custom rozwiązania. Odsetek deploymentów przez IDP vs. manualnych. Liczba aktywnych użytkowników Backstage miesięcznie. DORA Metrics dla platform users: Deployment Frequency dla teamów na platformie vs. poza platformą. Change Lead Time: jak szybko nowy projekt dochodzi do produkcji (Time-to-Production). MTTR dla serwisów na platformie. Operational metryki: liczba incydentów spowodowanych przez platformę. Dostępność platformy (Platform SLO). Security compliance rate (odsetek serwisów spełniających security policy). ROI Platform Engineering: redukcja duplicated effort, szybszy onboarding (nowy developer do pierwszego deploy w X dni zamiast Y), redukcja toil dla dev teams. Badania DORA 2022: organizacje z High platform maturity mają 2x wyższe job satisfaction i lepsze DORA metrics.",
  },
];

const platformComponents = [
  { komponent: "Software Catalog (Backstage)", opis: "Centralny rejestr wszystkich serwisów, API, teamów i zasobów w organizacji.", wartość: "Discoverability, ownership, dependency tracking" },
  { komponent: "Software Templates", opis: "Formularze do tworzenia nowych serwisów z pre-configured CI/CD, observability, secrets.", wartość: "Day-0 produktywność, Golden Path adoption" },
  { komponent: "CI/CD Pipeline as a Service", opis: "Standardowe pipeline dla build, test, deploy. Developer nie konfiguruje — używa.", wartość: "Redukcja duplicated effort, best practices by default" },
  { komponent: "Self-Service Infrastruktura", opis: "Developer tworzy bazę danych, S3 bucket, kolejkę przez UI — bez Terraform.", wartość: "Szybkość, brak bottleneck przez Ops team" },
  { komponent: "Observability Stack", opis: "Pre-configured Prometheus, Grafana, Loki, Tempo. Auto-instrumentacja OTel.", wartość: "Monitoring from Day-0, bez konfiguracji per team" },
  { komponent: "Security & Compliance", opis: "Automated policy enforcement (OPA/Kyverno), SAST, secrets scanning, RBAC.", wartość: "Security by default bez friction dla developerów" },
];

const platformTools = [
  { kategoria: "Developer Portal", narzędzia: "Backstage (Spotify/CNCF), Port.io, Cortex" },
  { kategoria: "Infrastructure Provisioning", narzędzia: "Crossplane, Pulumi, Terraform Cloud" },
  { kategoria: "GitOps", narzędzia: "Argo CD, Flux" },
  { kategoria: "Service Catalog", narzędzia: "Backstage, OpsLevel, Cortex" },
  { kategoria: "Policy Enforcement", narzędzia: "OPA/Gatekeeper, Kyverno" },
  { kategoria: "Secrets Management", narzędzia: "External Secrets Operator, Vault" },
];

export default function BlogPlatformEngineeringCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Platform Engineering — co to jest, IDP i Backstage? | Fotz.pl"
        description="Platform Engineering: definicja, Internal Developer Platform (IDP), Backstage wdrożenie, Golden Path, składniki platformy i jak mierzyć sukces."
        canonicalUrl="https://fotz.pl/blog/platform-engineering-co-to-jest-internal-developer-platform"

        keywords="Platform Engineering co to jest, Platform Engineering definicja, czym jest Platform Engineering, Platform Engineering przykłady, jak działa Platform Engineering, Platform Engineering znaczenie, Platform Engineering przewodnik"
      />
      <ArticleSchema
        title="Platform Engineering — co to jest, IDP i Backstage?"
        description="Platform Engineering: IDP, Backstage, Golden Path, 6 komponentów platformy, narzędzia i metryki sukcesu (DevEx, DORA, adoption)."
        url="https://fotz.pl/blog/platform-engineering-co-to-jest-internal-developer-platform"
        datePublished="2024-03-30"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Platform Engineering", url: "https://fotz.pl/blog/platform-engineering-co-to-jest-internal-developer-platform" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Platform Engineering", href: "/blog/platform-engineering-co-to-jest-internal-developer-platform" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Platform Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Platform Engineering
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zamiast każdego developera uczyć Kubernetes i Terraform,
              Platform Engineering buduje Internal Developer Platform —
              'golden path' do produkcji bez friction i cognitive overload.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Trend", value: "Gartner Top 2022" },
                { label: "Portal", value: "Backstage (CNCF)" },
                { label: "Cel", value: "Reduce Cognitive Load" },
                { label: "Adop. do 2026", value: "80% dużych firm" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 komponentów Internal Developer Platform</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dojrzała IDP składa się z warstw które razem tworzą
              kompletne środowisko dla developera — od kodu do produkcji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {platformComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{c.komponent}</h3>
                  <p className="text-gray-700 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-purple-700 font-medium">{c.wartość}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Narzędzia Platform Engineering</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekosystem narzędzi Platform Engineering jest bogaty —
              możesz budować IDP z gotowych komponentów open-source i komercyjnych.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {platformTools.map((t) => (
              <FadeInView key={t.kategoria}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <h3 className="font-bold text-gray-900">{t.kategoria}</h3>
                    <p className="text-purple-700 font-medium text-sm">{t.narzędzia}</p>
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
