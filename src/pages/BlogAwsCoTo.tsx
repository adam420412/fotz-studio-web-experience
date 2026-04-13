import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest AWS (Amazon Web Services)?",
    answer:
      "AWS (Amazon Web Services) to największa platforma chmurowa na świecie — zestaw ponad 200 usług infrastrukturalnych oferowanych przez Amazon. Uruchomiona w 2006 roku, AWS oferuje computing (EC2), storage (S3), bazy danych (RDS, DynamoDB), sieci (VPC), AI/ML (SageMaker), serverless (Lambda) i setki innych usług. AWS odpowiada za ok. 32% globalnego rynku cloud computing (2024), z przychodem ponad 90 miliardów dolarów rocznie.",
  },
  {
    question: "Czym różni się AWS od Azure i Google Cloud?",
    answer:
      "AWS: największy rynek (32%), najdojrzalszy ekosystem, lider w enterprise i startupy. Ponad 200 usług, największy wybór, skomplikowany pricing. Google Cloud (GCP): najlepszy w data analytics (BigQuery), AI/ML (Vertex AI, TPU), Kubernetes (GKE). Azure: najlepszy dla firm Microsoft-centric (Active Directory, Windows Server, Office 365), silny w enterprise i hybrid cloud. Wszystkie trzy oferują podobne core services — wybór zależy od istniejącego stacku i use case.",
  },
  {
    question: "Co to jest EC2 w AWS?",
    answer:
      "Amazon EC2 (Elastic Compute Cloud) to usługa wirtualnych serwerów (instancji) w chmurze AWS. Oferuje setki typów instancji zoptymalizowanych pod różne workloady: General Purpose (t3, m6i), Compute Optimized (c6i — CPU-intensywne), Memory Optimized (r6i — bazy danych), Storage Optimized (i3 — wysokie IOPS), GPU (p4, g5 — ML training). Modele rozliczenia: On-Demand (per godzina/sekunda), Reserved Instances (1-3 lata, 30-60% taniej), Spot Instances (do 90% taniej, mogą być przerwane).",
  },
  {
    question: "Czym jest AWS Lambda (serverless)?",
    answer:
      "AWS Lambda to usługa serverless computing — uruchamiasz funkcje bez zarządzania serwerami. Płacisz tylko za czas wykonania (100ms granularity) i liczbę wywołań — przy małym ruchu praktycznie bezpłatne (1 milion wywołań/miesiąc gratis). Lambda automatycznie skaluje od 0 do tysięcy równoległych wykonań. Obsługuje: Node.js, Python, Java, Go, Ruby, .NET. Idealna dla: API backends (z API Gateway), event processing (S3 trigger, DynamoDB Streams), scheduled tasks (CloudWatch Events).",
  },
  {
    question: "Jak zarządzać kosztami AWS?",
    answer:
      "Strategie optymalizacji kosztów AWS: Reserved Instances / Savings Plans (do 60% oszczędności vs On-Demand), Spot Instances dla workloadów tolerujących przerwy (do 90% taniej), Auto Scaling (skaluj w dół gdy niskie zapotrzebowanie), S3 Intelligent-Tiering (automatyczne przenoszenie danych do tańszych tierów), Right-Sizing (mniejsze instancje EC2 gdy zasoby nieużywane), AWS Cost Explorer + budżety z alertami, Trusted Advisor (identyfikuje zasoby do optymalizacji).",
  },
];

const awsCoreServices = [
  {
    kategoria: "Compute",
    kolor: "bg-orange-100 text-orange-700",
    usługi: [
      { nazwa: "EC2", opis: "Wirtualne serwery (instancje). Setki typów, płatność per sekunda. Podstawa każdej infrastruktury AWS." },
      { nazwa: "Lambda", opis: "Serverless computing. Funkcje uruchamiane na zdarzenia. Brak zarządzania serwerami, płatność za wykonanie." },
      { nazwa: "ECS / EKS", opis: "Orkiestracja kontenerów Docker. ECS (własny orchestrator), EKS (Kubernetes managed)." },
      { nazwa: "Elastic Beanstalk", opis: "PaaS — deploy aplikacji web (Node, Python, Java, PHP) bez konfigurowania infrastruktury." },
    ],
  },
  {
    kategoria: "Storage",
    kolor: "bg-green-100 text-green-700",
    usługi: [
      { nazwa: "S3", opis: "Object storage — pliki, zdjęcia, backupy, static website hosting. 99.999999999% durability (11 dziewiątek)." },
      { nazwa: "EBS", opis: "Block storage dla EC2 — dyski wirtualne. SSD (gp3, io2) i HDD. Snapshot do S3." },
      { nazwa: "EFS", opis: "Network File System (NFS) — współdzielony filesystem dla wielu EC2. Skaluje automatycznie." },
      { nazwa: "Glacier", opis: "Archiwalne cold storage. Bardzo tanie (0.004 USD/GB/miesiąc), wolne pobieranie (minuty-godziny)." },
    ],
  },
  {
    kategoria: "Databases",
    kolor: "bg-blue-100 text-blue-700",
    usługi: [
      { nazwa: "RDS", opis: "Managed relational databases: MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. Automatic backups, Multi-AZ." },
      { nazwa: "Aurora", opis: "AWS-native MySQL/PostgreSQL compatible DB. 5x szybsza niż MySQL, auto-scaling, Serverless v2." },
      { nazwa: "DynamoDB", opis: "Serverless NoSQL key-value DB. Single-digit millisecond latency. Auto-scaling, Global Tables." },
      { nazwa: "ElastiCache", opis: "Managed Redis i Memcached. In-memory cache dla aplikacji. Replikacja, Multi-AZ." },
    ],
  },
  {
    kategoria: "Networking",
    kolor: "bg-purple-100 text-purple-700",
    usługi: [
      { nazwa: "VPC", opis: "Virtual Private Cloud — izolowana sieć w AWS. Subnety, routing tables, Security Groups, NACL." },
      { nazwa: "CloudFront", opis: "CDN — Content Delivery Network. 400+ PoP globalnie. Cache statycznych i dynamicznych treści." },
      { nazwa: "Route 53", opis: "Managed DNS service. Routing policies: Simple, Weighted, Latency, Failover, Geolocation." },
      { nazwa: "API Gateway", opis: "Managed API endpoint dla REST, HTTP i WebSocket APIs. Integracja z Lambda, EC2, dowolny backend." },
    ],
  },
];

const awsCertifications = [
  { nazwa: "AWS Cloud Practitioner", poziom: "Foundational", trudność: "Łatwy", opis: "Podstawy cloud i AWS dla osób niekoniecznie technicznych. Dobry punkt startowy.", czas: "1-2 miesiące nauki" },
  { nazwa: "AWS Solutions Architect Associate", poziom: "Associate", trudność: "Średni", opis: "Projektowanie resilient, cost-effective architektury AWS. Najpopularniejsza certyfikacja AWS.", czas: "2-4 miesiące nauki" },
  { nazwa: "AWS Developer Associate", poziom: "Associate", trudność: "Średni", opis: "Tworzenie aplikacji na AWS: Lambda, DynamoDB, SAM, CI/CD, SDK.", czas: "2-3 miesiące nauki" },
  { nazwa: "AWS SysOps Associate", poziom: "Associate", trudność: "Średni-trudny", opis: "Zarządzanie, monitoring i operacje na AWS. CloudWatch, Systems Manager, Cost Optimization.", czas: "2-4 miesiące nauki" },
  { nazwa: "AWS Solutions Architect Professional", poziom: "Professional", trudność: "Trudny", opis: "Zaawansowane architektury multi-account, compliance, hybrid cloud. Wymaga doświadczenia.", czas: "6-12 miesięcy doświadczenia" },
];

const awsPricingModels = [
  { model: "On-Demand", opis: "Płatność za rzeczywiste użycie — per godzina lub sekunda. Brak zobowiązań.", dla: "Zmienny ruch, dev/test, aplikacje z nieprzewidywalnym użyciem", oszczędność: "Bazowa cena" },
  { model: "Reserved Instances (RI)", opis: "Rezerwacja na 1 lub 3 lata. Standard RI lub Convertible RI.", dla: "Steady-state workloady, produkcja z przewidywalnym użyciem", oszczędność: "Do 60-72% vs On-Demand" },
  { model: "Savings Plans", opis: "Zobowiązanie do wydatku ($/godzina) na 1 lub 3 lata. Elastyczność między usługami.", dla: "Elastyczniejsza alternatywa dla RI — dotyczy Lambda, Fargate, EC2", oszczędność: "Do 66% vs On-Demand" },
  { model: "Spot Instances", opis: "Nieużywana pojemność EC2 w bardzo niskiej cenie. Mogą być przerwane z 2-min ostrzeżeniem.", dla: "Batch processing, ML training, rendering — tolerujące przerwy", oszczędność: "Do 90% vs On-Demand" },
];

export default function BlogAwsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="AWS — co to jest? Amazon Web Services, usługi i certyfikacje"
        description="AWS (Amazon Web Services) — definicja, kluczowe usługi (EC2, S3, Lambda, RDS, VPC), modele cenowe i certyfikacje. Kompletny przewodnik po Amazon Web Services."
        canonicalUrl="https://fotz.pl/blog/aws-co-to-jest"

        keywords="AWS co to jest, AWS jak działa, AWS tutorial, AWS przykład, czym jest AWS, AWS dokumentacja, AWS przewodnik"

        canonical="https://fotz.pl/blog/aws-co-to-jest"
      />
      <ArticleSchema
        title="AWS — co to jest i jak działa? Kompletny przewodnik po Amazon Web Services"
        description="Kompletny przewodnik po AWS: kluczowe usługi, modele cenowe, certyfikacje i porównanie z Azure i GCP."
        url="https://fotz.pl/blog/aws-co-to-jest"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "AWS", url: "https://fotz.pl/blog/aws-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "AWS" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            AWS — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Amazon Web Services to największa platforma chmurowa na świecie.
            Poznaj kluczowe usługi (EC2, S3, Lambda, RDS), modele cenowe i jak zacząć z AWS.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest AWS?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>AWS (Amazon Web Services)</strong> to platforma chmurowa Amazon oferująca
              ponad 200 usług infrastrukturalnych: serwery, storage, bazy danych, sieci, AI/ML, IoT i wiele innych.
              Uruchomiona w 2006 roku, AWS jest dziś największym dostawcą cloud computing z 32% udziałem w rynku.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Model chmury zamienia CAPEX (zakup serwerów) na OPEX (płatność za użycie).
              Zamiast kupować i utrzymywać serwery, płacisz tylko za zasoby których faktycznie używasz —
              per sekunda, godzina lub miesiąc, w zależności od usługi.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "32%", opis: "Udział w globalnym rynku cloud computing (2024). AWS jest liderem przed Azure (22%) i GCP (11%)" },
                { stat: "200+", opis: "Usług i narzędzi dostępnych na platformie AWS w 2024 roku" },
                { stat: "33 regiony", opis: "Geograficzne regiony AWS globalnie z ponad 105 Availability Zones" },
              ].map((s, i) => (
                <div key={i} className="bg-orange-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-orange-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kluczowe usługi */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe usługi AWS</h2>
            <div className="space-y-6">
              {awsCoreServices.map((cat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${cat.kolor}`}>{cat.kategoria}</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {cat.usługi.map((svc, j) => (
                      <div key={j} className="bg-slate-50 rounded-lg p-4">
                        <h4 className="font-bold text-slate-800 mb-1 font-mono text-sm">{svc.nazwa}</h4>
                        <p className="text-slate-600 text-sm">{svc.opis}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Modele cenowe */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Modele cenowe AWS</h2>
            <div className="space-y-4">
              {awsPricingModels.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-lg">{m.model}</h3>
                    <span className="text-sm bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">{m.oszczędność}</span>
                  </div>
                  <p className="text-slate-600 mb-2">{m.opis}</p>
                  <p className="text-sm text-slate-500"><strong>Idealny dla:</strong> {m.dla}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Certyfikacje */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Certyfikacje AWS</h2>
            <div className="space-y-3">
              {awsCertifications.map((cert, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex items-start gap-4">
                  <div className={`px-2 py-1 rounded text-xs font-bold flex-shrink-0 ${cert.poziom === "Foundational" ? "bg-green-100 text-green-700" : cert.poziom === "Associate" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                    {cert.poziom}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{cert.nazwa}</h3>
                      <span className="text-xs text-slate-400">{cert.trudność}</span>
                    </div>
                    <p className="text-slate-600 text-sm mb-1">{cert.opis}</p>
                    <p className="text-xs text-slate-400">Sugerowany czas przygotowania: {cert.czas}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — AWS</h2>
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

      <RelatedArticles currentArticleId="aws-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
