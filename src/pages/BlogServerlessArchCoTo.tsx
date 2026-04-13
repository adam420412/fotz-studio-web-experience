import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest architektura serverless i jak różni się od tradycyjnych serwerów?",
    answer: "Serverless to model gdzie developer nie zarządza serwerami — platforma automatycznie alokuje, skaluje i zwalnia zasoby obliczeniowe. Nie chodzi o brak serwerów — serwery istnieją, ale są niewidoczne dla dewelopera. Tradycyjny serwer vs. Serverless: Tradycyjny: płacisz za czas działania serwera (24/7), skalujesz manualnie, zarządzasz OS/patches, odpowiadasz za dostępność. Serverless: płacisz per invocation + czas wykonania (milliseconds), auto-skalowanie do zera i milionów, platforma zarządza infrastrukturą. Modele serverless: FaaS (Function as a Service): AWS Lambda, Google Cloud Functions, Azure Functions. Piszesz funkcję, platforma uruchamia ją na event. BaaS (Backend as a Service): gotowe serwisy backendowe (auth, DB, storage) — Firebase, Supabase, Auth0. Serverless containers: AWS Fargate, Google Cloud Run — kontener bez zarządzania klastrem. Zalety serverless: Zero infrastruktura do zarządzania. Automatyczne skalowanie (0 do nieskończoności). Płacisz tylko za użycie. Built-in availability. Szybszy time-to-market. Wyzwania: Cold starts — pierwsze żądanie po bezczynności wolniejsze (Lambda 100ms-5s). Vendor lock-in — głęboka integracja z platformą. Stateless — brak persist memory między invocations. Limity: max execution time (Lambda 15 min), max memory (Lambda 10GB). Debugowanie trudniejsze. Idempotentność — funkcja musi być bezpieczna przy retry.",
  },
  {
    question: "AWS Lambda — jak budować funkcje i integrować z innymi serwisami AWS?",
    answer: "AWS Lambda: wiodąca FaaS platforma. Zdarzenia (triggers): API Gateway — HTTP requests do Lambda. S3 — nowy obiekt, modyfikacja. DynamoDB Streams — zmiana w tabeli. SQS/SNS — wiadomości w kolejce. EventBridge — events z innych serwisów AWS. CloudWatch Events — scheduled (cron). Cognito, ALB, Kinesis. Runtimes: Node.js, Python, Java, Go, .NET, Ruby, Custom Runtime (binarny Linux). Konfiguracja: Memory: 128MB-10GB (więcej pamięci = więcej vCPU). Timeout: 1s-15 min. Concurrency: Reserved, Provisioned (pre-warm, eliminuje cold start). Environment variables, Layers (shared code/deps). Lambda Layers: współdzielone zależności między funkcjami. Np. layer z bibliotekami Python — nie musisz packować do każdej funkcji. Destinations: po wykonaniu sukces/fail → wyślij do SQS, SNS, Lambda, EventBridge. Dead Letter Queue (DLQ) — nieudane invocations. IAM Role: Lambda potrzebuje roli z uprawnieniami do innych serwisów. Zasada least privilege. Lambda@Edge: uruchamiaj Lambda na węzłach CloudFront CDN. Ultra-niskie latency, personalizacja content, A/B testing na edge. SnapStart (Java): pre-initialize Lambda snapshot — eliminuje cold start dla Java. Pricing: $0.20 per 1M requests + $0.0000166667 per GB-second. Free tier: 1M requests + 400K GB-second miesięcznie.",
  },
  {
    question: "Google Cloud Run i Knative — serverless containers?",
    answer: "Cloud Run: serverless container platform od Google. Uruchamiasz dowolny kontener Docker — nie musisz pisać funkcji w konkretnym języku. Skalowanie: od 0 do N instancji automatycznie (min/max instancje konfigurowalne). Płacisz za faktyczny CPU/RAM/request (brak idle cost gdy min instances = 0). Cold start — nowa instancja kontenerowa (wolniej niż Lambda ale bardziej elastyczne). Przypadki użycia: web apps, APIs, microservices w kontenerach. Stateless HTTP request-response. Background jobs przez Pub/Sub trigger. HTTP/2 i WebSocket wsparcie. Współbieżność per instance: Cloud Run może obsługiwać 1000 concurrent requests per instancja (vs Lambda 1 per). Tańsze przy API z niską latency i wysokim concurrency. Cloud Run Jobs: batch tasks bez HTTP — uruchom kontener do completion. Knative: open-source serverless platform na Kubernetes. Składa się z Serving (autoscaling workloads, scale to zero) i Eventing (event-driven workflows). Używany przez Cloud Run internaly. Możesz self-hostować na własnym K8s. AWS Fargate: serverless containers w ECS lub EKS. Nie zarządzasz EC2 — platforma alokuje capacity. Płacisz za vCPU i RAM per task. Brak cold start (działa jak EC2 ale bez zarządzania). Droższe niż Lambda dla request-driven workloads ale lepsze dla long-running tasks. Azure Container Apps: managed Kubernetes + Dapr + KEDA (auto-scaling). KEDA: Kubernetes Event-Driven Autoscaling — scale na podstawie Kafka lag, SQS depth, itp.",
  },
  {
    question: "Event-driven serverless — jak projektować workflows i orkiestrację?",
    answer: "Event-driven serverless: Lambda/Cloud Functions najlepiej sprawdza się w architekturze event-driven. Asynchroniczna komunikacja przez events — nie synchroniczne HTTP. AWS Step Functions: orkiestracja wielu Lambda funkcji jako workflow. Stany: Task (wywołaj Lambda), Choice (warunek), Wait (opóźnienie), Parallel (równolegle), Map (dla każdego elementu listy). Wizualna definicja w Amazon States Language (ASL lub JSON). Express Workflows — krótkie (<5 min) i tanie. Standard Workflows — długie (do roku) z dokładnym śledzeniem. Use cases: wieloetapowy checkout (validate → charge → fulfill → notify). Document processing pipeline. Human-in-the-loop (czekaj na potwierdzenie człowieka). Kompensacja transakcji (Saga). AWS EventBridge: event bus dla event-driven architecture. Events z 200+ AWS serwisów. Custom events z własnych aplikacji. Event rules + routing do Lambda, SQS, Step Functions. Schema Registry — definicje event schemas. EventBridge Pipes: point-to-point connector między event source i target. Filtrowanie, enrichment, transformacja. SQS + Lambda: SQS trigger dla Lambda — batch processing. Lambda przetwarza N wiadomości per invocation (batch size). DLQ dla nieudanych wiadomości. Visibility timeout musi być dłuższy niż Lambda timeout. Fan-out pattern: SNS → wiele SQS → wiele Lambda (parallel processing). Choreography vs Orchestration: Choreography — serwisy reagują na eventy (EventBridge). Orchestration — centralny koordynator (Step Functions).",
  },
  {
    question: "Cold starts, observability i koszty w serverless — jak optymalizować?",
    answer: "Cold Start optymalizacja: Cold start to opóźnienie gdy nowa instancja Lambda musi być zainicjalizowana. Rozmiar deployment package: mniejszy package = szybszy cold start. Lambda Layer zamiast bundlowania deps. Provision Concurrency: pre-warm N instancji (płacisz za idle time). Eliminuje cold starty dla krytycznych paths. SnapStart (Java): snapshot po initialization — restore zamiast init (10x szybszy start). Wybór runtime: Node.js i Python mają krótsze cold starty niż Java, .NET. Dostosuj RAM: więcej RAM = więcej vCPU = szybsze inicjalizowanie. Observability w serverless: CloudWatch Logs — automatyczne logowanie Lambda output. X-Ray — distributed tracing dla Lambda (instrumentation SDK). Lambda Insights — metryki (duration, error, throttle, concurrent executions). Cold start rate — monitoruj procent cold starts. Third-party: Datadog Serverless, Lumigo, Epsagon (Cisco). Optymalizacja kosztów: Right-sizing memory — profil przez AWS Lambda Power Tuning. Reduce function duration — optimize kodu, use connection pooling (reuse między invocations). S3 Intelligent-Tiering zamiast Lambda dla storage-heavy. Batch processing — jeden event = wiele rekordów (SQS batching). Reserved Concurrency — ogranicz max concurrency per function (cost control). Compute Savings Plans — committed usage = 17% off Lambda. Cache computation — ElastiCache dla często używanych danych. Serverless Framework i SAM: Serverless Framework — IaC dla serverless (Lambda, API GW, DynamoDB). AWS SAM (Serverless Application Model) — AWS-native IaC dla serverless. CDK L2 constructs dla Lambda.",
  },
];

const serverlessServices = [
  { serwis: "AWS Lambda", typ: "FaaS", trigger: "HTTP, S3, SQS, EventBridge, Cron", limit: "15 min max, 10GB RAM, 250MB deploy", cold_start: "100ms-5s (runtime dep.)" },
  { serwis: "Google Cloud Run", typ: "Serverless Containers", trigger: "HTTP, Pub/Sub, Cloud Scheduler", limit: "60 min max, 32GB RAM, 1000 concurrent/instance", cold_start: "1-10s (container startup)" },
  { serwis: "Azure Functions", typ: "FaaS", trigger: "HTTP, Timer, Blob, Queue, CosmosDB", limit: "10 min (Consumption), 60 min (Premium)", cold_start: "100ms-5s" },
  { serwis: "Vercel Functions", typ: "Edge/Serverless", trigger: "HTTP (Next.js routes, API routes)", limit: "Edge: 30s, Serverless: 60s", cold_start: "Edge: ~0ms, Standard: 200-500ms" },
  { serwis: "Cloudflare Workers", typ: "Edge FaaS", trigger: "HTTP, Cron, Queue", limit: "10ms CPU/request, 128MB RAM", cold_start: "~0ms (V8 isolates)" },
];

const serverlessPatterns = [
  { wzorzec: "API Backend", opis: "API Gateway + Lambda — REST lub GraphQL API bez zarządzania serwerami. Skaluje automatycznie.", narzedzia: "API GW + Lambda, Cloud Run, Vercel Functions" },
  { wzorzec: "Event Processing", opis: "SQS/Pub/Sub trigger Lambda — asynchorniczne przetwarzanie eventów, ETL, notifications.", narzedzia: "SQS + Lambda, Pub/Sub + Cloud Functions" },
  { wzorzec: "Scheduled Jobs", opis: "EventBridge Cron / Cloud Scheduler — raporty, cleanup, synchronizacja danych co N godzin.", narzedzia: "EventBridge + Lambda, Cloud Scheduler + Cloud Run Jobs" },
  { wzorzec: "File Processing", opis: "S3/GCS upload triggeruje Lambda — resize obrazu, konwersja video, parsowanie CSV.", narzedzia: "S3 trigger + Lambda, GCS + Cloud Functions" },
  { wzorzec: "Orchestration", opis: "Step Functions — multi-step workflows z warunkami, równoległością i retry logic.", narzedzia: "AWS Step Functions, Google Workflows" },
  { wzorzec: "Static + Serverless", opis: "JAMstack — CDN dla statycznego frontendu + serverless API. Najlepszy stosunek wydajność/koszt.", narzedzia: "Vercel/Netlify + Functions, S3 + CloudFront + Lambda" },
];

export default function BlogServerlessArchCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Architektura Serverless — co to jest, AWS Lambda, Cloud Run, Step Functions? | Fotz.pl"
        description="Serverless: AWS Lambda, Google Cloud Run, Azure Functions, Step Functions, cold starts, event-driven patterns i optymalizacja kosztów — kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/architektura-serverless-co-to-jest-aws-lambda-cloud-run-step-functions"

        keywords="Architektura Serverless co to jest, Architektura Serverless jak działa, Architektura Serverless tutorial, Architektura Serverless przykład, czym jest Architektura Serverless, Architektura Serverless dokumentacja, Architektura Serverless przewodnik"
      />
      <ArticleSchema
        title="Architektura Serverless — co to jest, AWS Lambda, Cloud Run, Step Functions?"
        description="Serverless: 5 platform, 6 wzorców, AWS Lambda triggers, Cloud Run containers, cold start optymalizacja i event-driven workflows ze Step Functions."
        url="https://fotz.pl/blog/architektura-serverless-co-to-jest-aws-lambda-cloud-run-step-functions"
        datePublished="2024-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Serverless", url: "https://fotz.pl/blog/architektura-serverless-co-to-jest-aws-lambda-cloud-run-step-functions" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-amber-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Serverless", href: "/blog/architektura-serverless-co-to-jest-aws-lambda-cloud-run-step-functions" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Cloud / Architektura
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Architektura Serverless
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Brak serwerów do zarządzania. Płacisz za milisekundy użycia.
              AWS Lambda, Cloud Run i Step Functions — buduj skalowalne API
              i pipelines bez Ops overhead.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "FaaS lider", value: "AWS Lambda" },
                { label: "Serverless containers", value: "Cloud Run" },
                { label: "Orkiestracja", value: "Step Functions" },
                { label: "Skalowanie", value: "0 do ∞ auto" },
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

      {/* Wzorce */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców architektury serverless</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Serverless nie jest tylko dla API — sprawdza się w przetwarzaniu
              eventów, schedulowanych jobsach, pipelinach i orkiestracji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {serverlessPatterns.map((p) => (
              <FadeInView key={p.wzorzec}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.wzorzec}</h3>
                  <p className="text-gray-700 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-orange-700 font-medium">{p.narzedzia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Platformy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie platform serverless</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda platforma ma inne limity, modele pricing i cold start
              charakterystykę.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Serwis</th>
                  <th className="text-left p-3 font-bold text-gray-900">Typ</th>
                  <th className="text-left p-3 font-bold text-gray-900">Cold Start</th>
                  <th className="text-left p-3 font-bold text-gray-900">Max limit</th>
                </tr>
              </thead>
              <tbody>
                {serverlessServices.map((s, i) => (
                  <tr key={s.serwis} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{s.serwis}</td>
                    <td className="p-3 text-gray-700 text-xs">{s.typ}</td>
                    <td className="p-3 text-gray-700 text-xs">{s.cold_start}</td>
                    <td className="p-3 text-gray-600 text-xs">{s.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
