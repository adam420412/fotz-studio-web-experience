import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Kubernetes?",
    answer:
      "Kubernetes (K8s) to open-source'owy system do automatyzacji wdrażania, skalowania i zarządzania konteneryzowanymi aplikacjami. Stworzony przez Google na podstawie wewnętrznego systemu Borg, open-sourcowany w 2014 roku, teraz rozwijany przez CNCF (Cloud Native Computing Foundation). Kubernetes zarządza klastrami węzłów (nodes), na których uruchamiane są kontenery Docker (lub inne runtime zgodne z OCI). Nazwa pochodzi z greki i oznacza 'sternik'.",
  },
  {
    question: "Czym różni się Kubernetes od Docker?",
    answer:
      "Docker to technologia konteneryzacji — pakuje aplikację z jej zależnościami w przenośny kontener. Kubernetes to orkiestrator kontenerów — zarządza wieloma kontenerami na wielu maszynach. Docker Compose to narzędzie do uruchamiania wielu kontenerów na jednej maszynie (dev/staging). Kubernetes to produkcyjna platforma: automatyczne skalowanie, self-healing (restartuje padające pody), load balancing, rolling updates, secrets management.",
  },
  {
    question: "Co to jest Pod w Kubernetes?",
    answer:
      "Pod to najmniejsza jednostka wdrożeniowa w Kubernetes — grupa jednego lub kilku kontenerów współdzielących sieć (localhost między sobą) i storage (volumes). Kontenery w jednym Podzie zawsze uruchamiane są razem na tym samym węźle. Większość Podów zawiera jeden kontener (main container) + opcjonalne init containers i sidecar containers (np. do zbierania logów). Pody są ephemeral — Kubernetes je niszczy i tworzy nowe (nigdy nie naprawia istniejącego Poda).",
  },
  {
    question: "Jak Kubernetes realizuje automatyczne skalowanie?",
    answer:
      "Kubernetes oferuje 3 typy autoskalowania: HPA (Horizontal Pod Autoscaler) — zwiększa/zmniejsza liczbę Podów na podstawie CPU/memory lub custom metrics (np. requests per second); VPA (Vertical Pod Autoscaler) — dostosowuje limity CPU/memory poszczególnych Podów; Cluster Autoscaler — dodaje lub usuwa węzły (nodes) klastra w zależności od zapotrzebowania. HPA jest najczęściej używany: kubectl autoscale deployment my-app --cpu-percent=50 --min=2 --max=20.",
  },
  {
    question: "Jakie są zarządzane usługi Kubernetes?",
    answer:
      "Główne managed Kubernetes services: GKE (Google Kubernetes Engine) — najpojrzejszy, pełna integracja z Google Cloud; EKS (Amazon Elastic Kubernetes Service) — AWS, popularne w enterprise; AKS (Azure Kubernetes Service) — Microsoft Azure, dobre z Active Directory; DigitalOcean Kubernetes — prosty, tani, dla mniejszych projektów; Rancher — zarządzanie multi-cluster on-premise i cloud. Managed K8s eliminuje zarządzanie control plane (API server, etcd, scheduler).",
  },
];

const k8sArchitecture = [
  {
    komponent: "Control Plane",
    elementy: [
      { nazwa: "API Server", opis: "Punkt wejścia do klastra — wszystkie operacje przechodzą przez API Server. kubectl komunikuje się przez REST API." },
      { nazwa: "etcd", opis: "Rozproszony key-value store — przechowuje stan całego klastra. Single source of truth dla K8s." },
      { nazwa: "Scheduler", opis: "Decyduje na którym węźle uruchomić nowy Pod na podstawie zasobów, affinity rules, taints/tolerations." },
      { nazwa: "Controller Manager", opis: "Uruchamia kontrolery (Deployment, ReplicaSet, Node, Job) które zapewniają desired state klastra." },
    ],
    kolor: "bg-blue-50 border-blue-200",
  },
  {
    komponent: "Worker Node",
    elementy: [
      { nazwa: "kubelet", opis: "Agent K8s na każdym węźle. Zarządza Podami, komunikuje się z container runtime, raportuje stan do API Server." },
      { nazwa: "kube-proxy", opis: "Zarządza regułami sieciowymi (iptables/IPVS) dla komunikacji między serwisami." },
      { nazwa: "Container Runtime", opis: "Uruchamia kontenery — containerd (default), CRI-O. Docker deprecated jako runtime od K8s 1.24." },
    ],
    kolor: "bg-green-50 border-green-200",
  },
];

const k8sObjects = [
  { obiekt: "Pod", opis: "Najmniejsza jednostka — jeden lub kilka kontenerów. Ephemeral, zawsze na jednym węźle.", przykład: "kubectl get pods -n production" },
  { obiekt: "Deployment", opis: "Zarządza ReplicaSet i Podami. Rolling updates, rollback, desired state.", przykład: "kubectl rollout status deployment/my-app" },
  { obiekt: "Service", opis: "Stały endpoint sieciowy dla grupy Podów. Typy: ClusterIP, NodePort, LoadBalancer.", przykład: "kubectl expose deployment my-app --port=80" },
  { obiekt: "Ingress", opis: "Zarządza zewnętrznym ruchem HTTP/HTTPS. Routing po hostach i ścieżkach, TLS termination.", przykład: "kubectl get ingress -A" },
  { obiekt: "ConfigMap", opis: "Przechowuje konfigurację (env vars, pliki) oddzielnie od kodu. Nie dla danych wrażliwych.", przykład: "kubectl create configmap app-config --from-file=config.yaml" },
  { obiekt: "Secret", opis: "Przechowuje dane wrażliwe (hasła, tokeny) base64-encoded. Integracja z Vault, AWS Secrets Manager.", przykład: "kubectl create secret generic db-creds --from-literal=password=secret" },
  { obiekt: "PersistentVolume", opis: "Zewnętrzne storage niezależne od cyklu życia Poda. PVC (Claim) requestuje zasób PV.", przykład: "kubectl get pv,pvc -n production" },
  { obiekt: "HorizontalPodAutoscaler", opis: "Automatycznie skaluje Pody na podstawie CPU, memory lub custom metrics.", przykład: "kubectl get hpa -n production" },
];

const k8sWorkflows = [
  { krok: "1. Build", opis: "Buduj obraz Docker i pushuj do registry (Docker Hub, ECR, GCR, Harbor)", komenda: "docker build -t myapp:v1.2.3 . && docker push registry/myapp:v1.2.3" },
  { krok: "2. Deploy", opis: "Aktualizuj Deployment z nowym tagiem obrazu", komenda: "kubectl set image deployment/myapp myapp=registry/myapp:v1.2.3" },
  { krok: "3. Monitor", opis: "Sprawdź status rolling update", komenda: "kubectl rollout status deployment/myapp" },
  { krok: "4. Rollback", opis: "Wróć do poprzedniej wersji jeśli coś poszło nie tak", komenda: "kubectl rollout undo deployment/myapp" },
  { krok: "5. Scale", opis: "Ręczne lub automatyczne skalowanie liczby replik", komenda: "kubectl scale deployment/myapp --replicas=5" },
];

export default function BlogKubernetesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Kubernetes — co to jest? K8s, Pod, Deployment i architektura klastra"
        description="Kubernetes (K8s) — definicja, architektura klastra (Control Plane, Worker Node), obiekty K8s (Pod, Deployment, Service, Ingress) i workflowy. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/kubernetes-co-to-jest"

        keywords="Kubernetes co to jest, Kubernetes jak działa, Kubernetes tutorial, Kubernetes przykład, czym jest Kubernetes, Kubernetes dokumentacja, Kubernetes przewodnik"
      />
      <ArticleSchema
        title="Kubernetes — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po Kubernetes: architektura klastra, kluczowe obiekty K8s i workflow wdrożeń."
        url="https://fotz.pl/blog/kubernetes-co-to-jest"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Kubernetes", url: "https://fotz.pl/blog/kubernetes-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Kubernetes" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Kubernetes — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Kubernetes (K8s) to system orkiestracji kontenerów od Google.
            Poznaj architekturę klastra, kluczowe obiekty (Pod, Deployment, Service) i workflowy wdrożeń.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Kubernetes?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Kubernetes (K8s)</strong> to open-source'owy system orkiestracji kontenerów —
              automatyzuje wdrażanie, skalowanie i zarządzanie konteneryzowanymi aplikacjami.
              Stworzony przez Google na bazie wewnętrznego systemu Borg, open-sourcowany w 2014 roku.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kubernetes zarządza klastrem maszyn (węzłów) i automatycznie rozmieszcza kontenery
              w oparciu o dostępne zasoby. Zapewnia self-healing (restart padających kontenerów),
              automatyczne skalowanie, rolling updates bez downtime i load balancing.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "2014", opis: "Rok open-sourcowania przez Google. Od 2016 r. projekt CNCF (Cloud Native Computing Foundation)" },
                { stat: "K8s", opis: "Skrót: K + 8 liter + s. Tak samo jak i18n (internationalization) i l10n (localization)" },
                { stat: "73%", opis: "Firm używa Kubernetes w produkcji wg CNCF Annual Survey 2023" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Architektura */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Architektura klastra Kubernetes</h2>
            <div className="space-y-6">
              {k8sArchitecture.map((part, i) => (
                <div key={i} className={`rounded-xl p-6 border ${part.kolor}`}>
                  <h3 className="font-bold text-slate-900 text-xl mb-4">{part.komponent}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {part.elementy.map((el, j) => (
                      <div key={j} className="bg-white rounded-lg p-4 border border-slate-100">
                        <h4 className="font-bold text-slate-800 mb-1 font-mono text-sm">{el.nazwa}</h4>
                        <p className="text-slate-600 text-sm">{el.opis}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Obiekty K8s */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe obiekty Kubernetes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {k8sObjects.map((obj, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-2 font-mono">{obj.obiekt}</h3>
                  <p className="text-slate-600 text-sm mb-3">{obj.opis}</p>
                  <p className="bg-slate-900 text-green-400 rounded p-2 text-xs font-mono">{obj.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Workflow */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Workflow wdrożenia w Kubernetes</h2>
            <div className="space-y-3">
              {k8sWorkflows.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4 items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{step.krok}</h3>
                    <p className="text-slate-600 text-sm mb-2">{step.opis}</p>
                    <p className="bg-slate-900 text-green-400 rounded p-2 text-xs font-mono">{step.komenda}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Kubernetes</h2>
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
