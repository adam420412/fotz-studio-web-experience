import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Kubernetes Operator i jak działa?",
    answer: "Kubernetes Operator to wzorzec rozszerzający Kubernetes API o obsługę złożonych, stateful aplikacji. Operator 'wie' jak zainstalować, konfigurować, skalować, aktualizować i naprawić konkretną aplikację — enkapsuluje wiedzę eksperta operacyjnego (operatora) w kodzie. Problem który rozwiązuje: Kubernetes świetnie zarządza bezstanowymi aplikacjami (Deployment, ReplicaSet). Ale bazy danych, kolejki, systemy klaster-aware (Elasticsearch, Kafka, PostgreSQL) mają złożoną logikę operacyjną — backupy, failover, rolling upgrades, reshard. Bez Operatora: te operacje wymagają manualnej interwencji lub skomplikowanych skryptów. Architektura Operatora: CRD (Custom Resource Definition) — rozszerza Kubernetes API. Definiujesz nowy typ zasobu (np. PostgresCluster, KafkaCluster). Controller (Operator logic) — watch loop który obserwuje zasoby CRD. Gdy stan desired != actual → reconcile (doprowadź do stanu pożądanego). Reconcile loop: List/Watch CRD resources → compare desired vs current → take action → update status. Operator Capability Levels (OperatorHub): Level 1: Basic Install — automatyczna instalacja/konfiguracja. Level 2: Seamless Upgrades — bezpieczne aktualizacje i rollbacks. Level 3: Full Lifecycle — backup, restore, failover. Level 4: Deep Insights — metryki, alerty, logi. Level 5: Auto Pilot — automatyczna skalowanie, self-healing, tuning.",
  },
  {
    question: "Operator SDK i Kubebuilder — jak napisać własny Operator?",
    answer: "Frameworki do budowania Operatorów: Kubebuilder: oficjalny framework (Kubernetes SIG). Go jako język. Generuje scaffolding (CRD, Controller, RBAC, Webhooks). Używany przez większość oficjalnych Operatorów. Operator SDK (Red Hat): nakładka na Kubebuilder + wsparcie dla Ansible i Helm Operators. Ansible Operator — wyzwalaj Ansible playbooks jako kontroler. Helm Operator — wyzwalaj Helm chart install/upgrade jako kontroler. Kopf (Python): framework do Operatorów w Pythonie. Prostszy niż Go, ale mniejszy ekosystem. Cykle życia CRD i Controller w Go (Kubebuilder): kubebuilder init → kubebuilder create api (scaffold CRD). Definiujesz Spec (desired state) i Status (current state) w Go structs. Implement Reconcile() — core logika kontrolera. Reconcile dostaje name/namespace, zwraca Result (requeue? after how long?). Best practices: idempotentność — Reconcile może być wywołany wielokrotnie. Owner references — powiąż zasoby (Pod, Service) z parent CRD. Status conditions — raportuj stan przez .status.conditions. Webhooks: Defaulting Webhook — ustaw defaults na CRD. Validating Webhook — waliduj CRD przed zapisem. Conversion Webhook — konwertuj między wersjami CRD (v1alpha1 → v1). RBAC: Operator potrzebuje uprawnień do tworzenia/edycji zasobów. Zasada least privilege — tylko to co niezbędne. Testowanie: envtest — uruchom fake Kubernetes API dla unit testów. controller-runtime/fake — mockowanie klienta. Integration tests z Kind lub k3s.",
  },
  {
    question: "OperatorHub i gotowe Operatory — co jest dostępne?",
    answer: "OperatorHub.io: centralny katalog Operatorów (500+). Podzielone na kategorie: bazy danych, monitoring, networking, security. Certified Operators — certyfikowane przez Red Hat dla OpenShift. Community Operators — community-maintained. Popularne Operatory produkcyjne: Bazy danych: CloudNativePG — PostgreSQL Operator (najlepszy do PostgreSQL na K8s). Zalando Postgres Operator — alternative. CrunchyData PGO — enterprise PostgreSQL. MySQL Operator (Oracle). Redis Operator (OT-Container-Kit). MongoDB Community Operator. Kolejki i streaming: Strimzi Kafka Operator — Kafka na Kubernetes. RabbitMQ Cluster Operator. Monitoring: Prometheus Operator (kube-prometheus-stack) — Prometheus + Grafana + Alertmanager. Wprowadza CRDs: ServiceMonitor, PrometheusRule, Grafana. Victoria Metrics Operator. Security: Cert-Manager — automatyczne SSL certyfikaty (Let's Encrypt). Vault Secrets Operator (HashiCorp). External Secrets Operator. Networking: Istio Operator. Cilium Operator. Storage: Rook — Ceph distributed storage na Kubernetes. Velero — backup i restore. Installs Operatorów: Operator Lifecycle Manager (OLM) — zarządza instalacją i aktualizacją Operatorów. Helm chart — alternatywny install (np. kube-prometheus-stack jako Helm). kubectl apply — dla prostszych Operatorów.",
  },
  {
    question: "CloudNativePG i PostgreSQL na Kubernetes — jak zarządzać bazą przez Operator?",
    answer: "CloudNativePG (CNPG): najlepszy production-grade PostgreSQL Operator. Zarządza pełnym cyklem życia klastra PostgreSQL. Deklaratywna konfiguracja przez CRD 'Cluster'. Funkcje CNPG: Automated failover — primary fail → replica awansuje automatycznie. Streaming replication — synchronous/asynchronous replicas. Continuous backup — WAL archiving do S3/GCS/Azure Blob. Point-in-time Recovery (PITR) — odtwarzanie bazy do dowolnego momentu. Connection pooling — PgBouncer zintegrowany. TLS — automatyczne certyfikaty (cert-manager integration). Rolling upgrades — aktualizacja PostgreSQL bez downtime. Prometheus metrics — automatyczny eksport przez ServiceMonitor. Przykład CRD: apiVersion: postgresql.cnpg.io/v1, kind: Cluster, spec.instances: 3 (primary + 2 replicas). Backup do S3: spec.backup.barmanObjectStore.destinationPath. ScheduledBackup CRD — automatyczne backupy na cron schedule. Strimzi (Kafka Operator): podobny poziom dojrzałości dla Kafka. KafkaCluster, KafkaTopic, KafkaUser — wszystko jako CRD. Rolling upgrades Kafka, ZooKeeper lub KRaft mode. Schema Registry Operator. Kafka Connect Operator. Prometheus monitoring out-of-the-box. Redis Enterprise Operator: Redis Inc. oferuje enterprise Operator. Automatyczny sharding, geo-replication, persistent memory support.",
  },
  {
    question: "Operator Lifecycle Manager (OLM) — jak zarządzać Operatorami w produkcji?",
    answer: "OLM (Operator Lifecycle Manager): framework do instalacji, aktualizacji i zarządzania Operatorami w Kubernetes. Rozwiązuje: dependency management (Operator A wymaga Operator B). Automatic upgrades Operatorów. RBAC dla Operatorów. CatalogSources: źródła katalogu dostępnych Operatorów. OperatorHub.io community catalog. Red Hat certified catalog (dla OpenShift). Custom internal catalogs (własne Operatory organizacji). SubscriptionStatus: subskrybuj Operator z kanału (stable, alpha, beta). OLM automatycznie aktualizuje gdy nowa wersja dostępna. Approval: Manual (musisz zatwierdzić) lub Automatic. Namespace vs. Cluster scope: Operator może zarządzać zasobami w jednym namespace lub cały klaster. Cluster-wide Operators muszą mieć ClusterRole. InstallPlan: OLM tworzy InstallPlan gdy instaluje/aktualizuje Operator. Zawiera wszystkie zasoby do stworzenia (CRD, RBAC, Deployment). Najlepsze praktyki dla Operatorów w produkcji: Oddzielny namespace dla Operatorów (np. operators). Monitoring Operatora samego w sobie — czy Controller jest healthy. Resource limits dla Operator Deployment. RBAC audit — Operator nie powinien mieć ClusterAdmin. Versioning CRD — zachowaj backward compatibility. GitOps + Operatory: Argo CD / Flux zarządza instalacją Operatorów i ich CRD resources. ApplicationSet dla instancji per namespace.",
  },
];

const operatorExamples = [
  { kategoria: "PostgreSQL", operator: "CloudNativePG (CNPG)", funkcje: "Automated failover, WAL backup do S3, PITR, PgBouncer pooling", dojrzalosc: "Produkcyjna" },
  { kategoria: "Kafka", operator: "Strimzi Kafka Operator", funkcje: "KafkaCluster, KafkaTopic, KafkaUser CRDs, rolling upgrades, monitoring", dojrzalosc: "Produkcyjna" },
  { kategoria: "Redis", operator: "Redis Enterprise Operator", funkcje: "Auto-sharding, geo-replication, persistent memory, TLS", dojrzalosc: "Produkcyjna (Enterprise)" },
  { kategoria: "Monitoring", operator: "Prometheus Operator", funkcje: "ServiceMonitor, PrometheusRule CRDs, Grafana, Alertmanager — cały stack", dojrzalosc: "Standard branżowy" },
  { kategoria: "SSL/TLS", operator: "cert-manager", funkcje: "Automatyczne certyfikaty Let's Encrypt, wewnętrzna CA, renewal", dojrzalosc: "Standard branżowy" },
  { kategoria: "Backup", operator: "Velero", funkcje: "Backup cluster resources + persistent volumes do S3/GCS/Azure", dojrzalosc: "Produkcyjna" },
];

const capabilityLevels = [
  { poziom: "Level 1 — Basic Install", opis: "Automatyczna instalacja i konfiguracja aplikacji przez CRD", przyklad: "Zainstaluj Kafka z N brokerami przez kubectl apply" },
  { poziom: "Level 2 — Seamless Upgrades", opis: "Bezpieczne rolling upgrades i rollbacks bez downtime", przyklad: "kubectl patch KafkaCluster version → Operator robi rolling upgrade" },
  { poziom: "Level 3 — Full Lifecycle", opis: "Backup, restore, failover, scale-out — kompletny lifecycle management", przyklad: "Automatic failover PostgreSQL, scheduled backup do S3, PITR restore" },
  { poziom: "Level 4 — Deep Insights", opis: "Metryki, alerty, dashboardy, status conditions — pełna obserwabilność", przyklad: "ServiceMonitor, Grafana dashboards, custom alerts per CRD" },
  { poziom: "Level 5 — Auto Pilot", opis: "Automatyczne skalowanie, self-healing, tuning na podstawie metryki", przyklad: "Auto-tune PostgreSQL shared_buffers, auto-scale Kafka partitions" },
];

export default function BlogK8sOperatorsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Kubernetes Operators | Fotz Studio"
        description="Kubernetes Operators: Operator SDK, Kubebuilder, CloudNativePG PostgreSQL, Strimzi Kafka, Prometheus Operator, OLM — jak budować i używać Operatorów w K8s."
        canonicalUrl="https://fotz.pl/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi"

        keywords="Kubernetes Operators co to jest, Kubernetes Operators jak działa, Kubernetes Operators tutorial, Kubernetes Operators przykład, czym jest Kubernetes Operators, Kubernetes Operators dokumentacja, Kubernetes Operators przewodnik"

        canonical="https://fotz.pl/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi"
      />
      <ArticleSchema
        title="Kubernetes Operators — co to jest, Kubebuilder, CloudNativePG, Strimzi?"
        description="K8s Operators: 5 capability levels, 6 produkcyjnych Operatorów, Kubebuilder/Operator SDK, CloudNativePG, Strimzi Kafka i OLM lifecycle management."
        url="https://fotz.pl/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi"
        datePublished="2024-04-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Kubernetes Operators", url: "https://fotz.pl/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Kubernetes Operators", url: "/blog/kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-sky-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Kubernetes / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kubernetes Operators
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Bazy danych i Kafka na Kubernetes bez manualnej operacji. Operator
              enkapsuluje wiedzę eksperta w kodzie — automatyczny failover, backup,
              rolling upgrades i monitoring.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Framework (Go)", value: "Kubebuilder" },
                { label: "PostgreSQL", value: "CloudNativePG" },
                { label: "Kafka", value: "Strimzi" },
                { label: "Operator katalog", value: "OperatorHub.io" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capability Levels */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 poziomów dojrzałości Operatora</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              OperatorHub definiuje 5 poziomów — od prostej instalacji po
              w pełni autonomiczny auto-pilot.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {capabilityLevels.map((l, i) => (
              <FadeInView key={l.poziom}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4 items-start">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-sky-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      <h3 className="font-bold text-gray-900 text-sm">{l.poziom}</h3>
                    </div>
                    <p className="text-gray-700 text-sm">{l.opis}</p>
                    <p className="text-xs text-sky-700 italic">{l.przyklad}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Przykładowe Operatory */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 produkcyjnych Operatorów — co warto znać?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekosystem Operatorów obejmuje wszystko od baz danych przez
              monitoring po backup — większość dostępna przez OperatorHub.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {operatorExamples.map((o) => (
              <FadeInView key={o.operator}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{o.operator}</h3>
                    <span className="text-xs bg-sky-100 text-sky-800 font-semibold px-2 py-1 rounded-full ml-2 whitespace-nowrap">{o.dojrzalosc}</span>
                  </div>
                  <p className="text-xs text-sky-700 font-medium mb-2">{o.kategoria}</p>
                  <p className="text-gray-600 text-sm">{o.funkcje}</p>
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

      <RelatedArticles currentArticleId="kubernetes-operators-co-to-jest-kubebuilder-cloudnativepg-strimzi" />
      <ContactSection />
    </Layout>
  );
}
