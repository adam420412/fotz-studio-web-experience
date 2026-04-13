import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest FinOps i dlaczego firmy go wdrażają?",
    answer: "FinOps (Financial Operations) to framework i kultura organizacyjna łącząca Finance, Engineering i Business w celu zarządzania kosztami cloud i maksymalizacji wartości z wydatków na cloud. FinOps Foundation (CNCF project) definiuje FinOps jako dyscyplinę operacyjną i kulturę która pozwala organizacjom na uzyskanie maksymalnej wartości biznesowej przez zarządzanie wydatkami na cloud. Dlaczego firmy wdrażają FinOps: Cloud sprawia że każdy developer może wydać pieniądze na infrastrukturę w minutach. Bez oversight — budżety cloud eksplodują. Typowy scenariusz: startup uruchomił nową feature, zapomniano o cleanup tymczasowych zasobów → $50,000 niespodziewanego rachunku. Statystyki: Gartner — 70% firm przekracza swój cloud budget. Flexera 2023: średnio 28% wydatków cloud to waste (nieużywane lub oversized). FinOps lifecycle (3 fazy): Inform — widoczność i alokacja kosztów (kto, co, ile wydaje). Optimize — identyfikacja i realizacja oszczędności (rightsizing, reserved instances, spot). Operate — kultura i procesy (budżetowanie, forecasting, accountability). Kluczowa różnica od zarządzania IT kosztami: w FinOps Developer teams mają bezpośrednią widoczność i odpowiedzialność za koszty — 'engineer financial accountability'.",
  },
  {
    question: "Jak tagować i alokować koszty cloud w FinOps?",
    answer: "Tagging i alokacja kosztów cloud: Dlaczego tagowanie jest fundamentem FinOps: bez tagów — widzisz $1M rachunku AWS ale nie wiesz które team, product lub environment jest odpowiedzialne. Cost Allocation Tags — zestaw tagów które przypisujesz do zasobów cloud. Strategia tagowania: Minimum viable tagging: Team (np. platform, data, frontend), Environment (prod, staging, dev), Product/Service (billing-service, auth-service), CostCenter (finance, engineering, marketing). Egzekwowanie tagowania: AWS Tag Policies, Azure Policy, GCP Organization Policy — wymuszaj tagowanie przy tworzeniu zasobów. Terraform/IaC — tagi jako kod, automatycznie na każdym zasobie. Alokacja kosztów: Shared costs challenge — load balancer, VPN, Kubernetes control plane — jak rozdzielić między teamy? Metody: Even split, weighted split (per CPU/request), direct allocation. Showback vs. Chargeback: Showback — pokazujesz teamom ile wydają (informacyjnie). Chargeback — faktycznie obciążasz teamy kosztami przez internal billing. Narzędzia: AWS Cost Explorer + Cost Allocation Tags, Azure Cost Management, GCP Billing Reports, Cloudability, Apptio Cloudability, Spot.io, CloudHealth.",
  },
  {
    question: "Jak optymalizować koszty cloud — Reserved Instances, Spot, rightsizing?",
    answer: "Optymalizacja kosztów cloud: Reserved Instances (RI) / Savings Plans: zobowiązujesz się na 1 lub 3 lata w zamian za 30-72% discount vs. on-demand. AWS Savings Plans: compute savings plan (elastyczny, działa dla EC2, Fargate, Lambda), EC2 Instance Savings Plan (konkretna instance family + region). Kiedy używać: tylko dla predictable, stable workloadów (bazy danych, core services). Nigdy dla dev/staging lub spike'owych workloadów. Spot Instances / Preemptible VMs: nieużywana pojemność AWS/GCP/Azure sprzedawana z 70-90% dyskontem. Wada: mogą być przerwane z 2-minutowym notice. Use case: batch jobs, ML training, CI/CD runners, stateless workloads. Rightsizing: porównaj actual CPU/memory utilization vs. alokowane zasoby. Typowo 30-50% instancji jest oversized (developer zaokrąglił w górę). AWS Compute Optimizer, Azure Advisor — sugestie rightsizing. Kubernetes: Vertical Pod Autoscaler (VPA) — automatyczny rightsizing. Horizontal Pod Autoscaler (HPA) — skalowanie do popytu. KEDA — event-driven autoscaling. Garbage collection: nieużywane Elastic IPs ($0.005/h), snapshots, old AMIs, orphaned volumes. AWS Trusted Advisor + cloud custodian do automatycznego cleanup. Savings target: dobrze zoptymalizowana firma — 20-30% annual savings vs. baseline.",
  },
  {
    question: "Unit Economics w Cloud — koszt per request, per customer?",
    answer: "Unit Economics w Cloud — cloud cost per unit: Dlaczego ważne: jednostkowe koszty cloud pozwalają ocenić czy technologia skaluje się ekonomicznie i kiedy stanie się rentowna. Kluczowe metryki: Cost per Request — całkowity koszt infrastruktury / liczba obsłużonych requestów. Powinien spadać przy wzroście skali (economics of scale). Cost per Customer (COGS per Customer) — ile kosztuje obsługę jednego klienta miesięcznie. Bezpośrednio wpływa na gross margin SaaS. Cost per Transaction — dla platform transakcyjnych (fintech, e-commerce). COGS (Cost of Goods Sold) w SaaS: Infrastructure costs, engineering salaries (proportional), third-party API costs. Gross Margin = Revenue - COGS / Revenue × 100%. Benchmark: SaaS gross margin powinna być 60-80%. Poniżej 50% = problem z unit economics lub oversized infra. Jak poprawić Cloud Unit Economics: Caching — Redis/Memcached redukuje load na DB → niższe koszty. CDN — Cloudflare/CloudFront redukuje origin server load. Database optimization — query optimization, read replicas, connection pooling. Serverless dla niskiego ruchu — Lambda/Cloud Functions kosztują zero kiedy nie używasz. Multi-region cost optimization — tańsze regiony AWS/GCP dla non-latency-sensitive workloads. Szybkie wygrane: spot instances dla CI/CD może zaoszczędzić 60-80% kosztów pipeline.",
  },
  {
    question: "Jak zbudować kulturę FinOps w organizacji?",
    answer: "Budowanie kultury FinOps: FinOps Team structure: FinOps Practitioner — dedykowana rola (lub część Platform/SRE team w mniejszych firmach). FinOps team spotyka się z Engineering, Finance i Product regularnie. Engineering Financial Accountability: każdy team widzi swoje cloud costs w real-time (billing dashboard). Teams mają budżety i są odpowiedzialne za przekroczenia. Cost awareness w sprint planning — 'ta feature będzie kosztować $X/miesiąc'. FinOps Maturity Model (FinOps Foundation): Crawl — podstawowa widoczność, tagowanie, alert przy przekroczeniu budżetu. Walk — regularne cost reviews, rightsizing program, RI purchasing. Run — kultura kosztowa, unit economics, automatyczna optymalizacja. Procesy: Miesięczne Cloud Cost Review — każdy team przedstawia swoje koszty, anomalie, savings. Anomaly Detection — alert gdy spend wzrośnie o X% vs. baseline. Budget Alerts — notification na 80%, 90%, 100% budżetu. Annual commitment planning — negocjacje RI/Savings Plans. Narzędzia dla kultury: Grafana dashboard z cost per team/service, Cost webhook w Slack (daily spend alert), AWS Budgets + SNS notifications. Benchmark: firmy z dojrzałą kulturą FinOps osiągają 20-30% niższe koszty cloud vs. branżowa średnia.",
  },
];

const finopsPhases = [
  { faza: "Inform", cel: "Widoczność i alokacja kosztów", akcje: "Tagowanie zasobów, cost allocation, dashboardy per team, anomaly detection", narzędzia: "AWS Cost Explorer, Azure Cost Mgmt, Cloudability" },
  { faza: "Optimize", cel: "Identyfikacja i realizacja oszczędności", akcje: "Rightsizing, Reserved Instances, Spot instances, cleanup orphaned resources", narzędzia: "AWS Compute Optimizer, Spot.io, infracost" },
  { faza: "Operate", cel: "Kultura i procesy kosztowe", akcje: "Budżetowanie per team, forecasting, accountability, unit economics", narzędzia: "Custom dashboards, Budget alerts, FinOps reviews" },
];

const cloudWasteCategories = [
  { kategoria: "Idle Resources", odsetek: "~22%", przykłady: "EC2 stopped, RDS idle, Elastic IPs bez instancji", fix: "Auto-shutdown schedules, orphan resource cleanup" },
  { kategoria: "Oversized Resources", odsetek: "~24%", przykłady: "m5.4xlarge dla 5% CPU usage, oversized RDS", fix: "Rightsizing, VPA w Kubernetes" },
  { kategoria: "On-Demand zamiast Reserved", odsetek: "~20%", przykłady: "Stable workload płacący pełną cenę on-demand", fix: "Savings Plans, Reserved Instances dla baseline" },
  { kategoria: "Nieoptymalne Architektura", odsetek: "~18%", przykłady: "Brak caching, brak CDN, zbędne NAT Gateway transfery", fix: "Architecture review, CDN, Redis caching" },
  { kategoria: "Brak Auto-scaling", odsetek: "~16%", przykłady: "Stałe provisioning na peak traffic zamiast autoscaling", fix: "HPA, KEDA, serverless dla variable workloads" },
];

export default function BlogFinOpsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="FinOps — co to jest i jak optymalizować koszty cloud? | Fotz.pl"
        description="FinOps: definicja, 3 fazy (Inform/Optimize/Operate), tagowanie kosztów, Reserved Instances, rightsizing, unit economics cloud i jak budować kulturę FinOps."
        canonicalUrl="https://fotz.pl/blog/finops-co-to-jest-jak-optymalizowac-koszty-cloud"

        keywords="FinOps co to jest, FinOps definicja, czym jest FinOps, FinOps przykłady, jak działa FinOps, FinOps znaczenie, FinOps przewodnik"
      />
      <ArticleSchema
        title="FinOps — co to jest i jak optymalizować koszty cloud?"
        description="FinOps: 3 fazy lifecycle, alokacja kosztów, 5 kategorii cloud waste, optymalizacja (RI, Spot, rightsizing), unit economics i budowanie kultury FinOps."
        url="https://fotz.pl/blog/finops-co-to-jest-jak-optymalizowac-koszty-cloud"
        datePublished="2024-04-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "FinOps", url: "https://fotz.pl/blog/finops-co-to-jest-jak-optymalizowac-koszty-cloud" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "FinOps", href: "/blog/finops-co-to-jest-jak-optymalizowac-koszty-cloud" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Cloud / Finance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              FinOps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              28% wydatków cloud to waste. FinOps to framework który łączy
              Engineering, Finance i Business — dając każdemu teamowi widoczność
              i odpowiedzialność za ich cloud costs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Średni cloud waste", value: "28%" },
                { label: "Savings RI/Spot", value: "30-90%" },
                { label: "Fazy FinOps", value: "3 (I/O/O)" },
                { label: "SaaS Gross Margin", value: "60-80% cel" },
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

      {/* FinOps Phases */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3 fazy FinOps Lifecycle</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              FinOps Foundation definiuje ciągły cykl — Inform, Optimize, Operate.
              Każda faza buduje na poprzedniej i wraca do początku.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {finopsPhases.map((f, i) => (
              <FadeInView key={f.faza}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <h3 className="font-bold text-gray-900 text-lg">{f.faza}</h3>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Cel</span>
                      <span className="text-gray-800 font-semibold text-sm">{f.cel}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{f.akcje}</p>
                    <p className="text-xs text-green-700 font-medium">{f.narzędzia}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Waste */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 kategorii cloud waste</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Typowo 28% wydatków cloud to marnotrawstwo. Poznaj
              główne kategorie i jak je eliminować.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {cloudWasteCategories.map((c) => (
              <FadeInView key={c.kategoria}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4 items-start">
                    <div className="w-14 flex-shrink-0 text-center">
                      <span className="text-xl font-bold text-red-600">{c.odsetek}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{c.kategoria}</h3>
                      <p className="text-gray-600 text-sm mb-1">{c.przykłady}</p>
                      <p className="text-xs text-green-700 font-medium">Fix: {c.fix}</p>
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

      <ContactSection />
    </Layout>
  );
}
