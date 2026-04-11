import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest architektura mikroserwisów?",
    answer:
      "Architektura mikroserwisów (microservices) to wzorzec projektowania aplikacji jako zbioru małych, niezależnych serwisów — każdy odpowiada za konkretną funkcję biznesową, działa w osobnym procesie i komunikuje się przez sieć (API, message queue). Każdy mikroserwis może być rozwijany, wdrażany i skalowany niezależnie, przez osobny team, w osobnej technologii. Alternatywa dla monolitu — gdzie cały kod jest jedną dużą aplikacją.",
  },
  {
    question: "Kiedy używać mikroserwisów zamiast monolitu?",
    answer:
      "Martin Fowler radzi: zacznij od monolitu (Monolith First). Mikroserwisy mają sens gdy: organizacja ma wiele niezależnych teamów (Conway's Law), różne części systemu wymagają różnego skalowania, chcesz deployować różne części niezależnie, różne domeny mają różne wymagania technologiczne. Problemy mikroserwisów: distributed systems complexity, networking, eventual consistency, observability overhead. Dla startupów i małych zespołów (<50 developerów) monolit jest zazwyczaj lepszym wyborem.",
  },
  {
    question: "Czym jest API Gateway w mikroserwisach?",
    answer:
      "API Gateway to punkt wejścia dla wszystkich klientów do ekosystemu mikroserwisów — działa jak reverse proxy/facade. Zapewnia: single entry point (zamiast klientów znających adresy wszystkich serwisów), routing requestów do właściwych serwisów, authentication/authorization, rate limiting, load balancing, SSL termination, request aggregation (Backend for Frontend pattern). Popularne rozwiązania: Kong, AWS API Gateway, Nginx, Traefik, Ambassador.",
  },
  {
    question: "Jak mikroserwisy komunikują się ze sobą?",
    answer:
      "Dwa główne wzorce: Synchroniczna (REST/gRPC) — jeden serwis bezpośrednio wywołuje drugi przez HTTP/REST lub gRPC. Prosta do debugowania, ale tworzy coupling i kaskadowe awarie. Asynchroniczna (Message Queue) — serwisy komunikują się przez kolejki wiadomości (Kafka, RabbitMQ, AWS SQS). Decoupled, resilient, ale trudniejsze w debugowaniu. Best practice: preferuj asynchroniczną komunikację dla event-driven workflows, synchroniczną tylko gdy potrzebujesz natychmiastowej odpowiedzi.",
  },
  {
    question: "Co to jest Service Mesh?",
    answer:
      "Service Mesh to dedykowana warstwa infrastruktury zarządzająca komunikacją między mikroserwisami — bez modyfikowania kodu aplikacji. Rozwiązuje typowe problemy distributed systems: service discovery, load balancing, circuit breaking, retry logic, mutual TLS, observability (tracing). Sidecar proxy (np. Envoy) jest wstrzykiwany obok każdego serwisu i transparentnie obsługuje komunikację. Popularne service mesh: Istio (pełnofunkcyjny, złożony), Linkerd (lżejszy, szybszy), Consul Connect.",
  },
];

const microservicesVsMonolith = [
  { aspekt: "Wdrożenie", monolit: "Jeden deployment całej aplikacji — wszystko albo nic", mikroserwisy: "Każdy serwis deployowany niezależnie — partial rollouts" },
  { aspekt: "Skalowanie", monolit: "Skalowanie całej aplikacji nawet gdy tylko jedna część jest przeciążona", mikroserwisy: "Skalowanie indywidualnych serwisów według potrzeb" },
  { aspekt: "Technologia", monolit: "Jeden stack technologiczny dla całej aplikacji", mikroserwisy: "Każdy serwis może używać innego języka, bazy danych, frameworka" },
  { aspekt: "Złożoność operacyjna", monolit: "Prosta — jeden proces, jeden deployment, jedno logowanie", mikroserwisy: "Wysoka — sieć, service discovery, distributed tracing, consistency" },
  { aspekt: "Team", monolit: "Jeden shared codebase — merge conflicts, coordination overhead przy skali", mikroserwisy: "Autonomiczne teamy — każdy owns swój serwis end-to-end" },
  { aspekt: "Debug / Testing", monolit: "Łatwy lokalny development — jeden proces do uruchomienia", mikroserwisy: "Trudny — potrzebujesz wielu serwisów, service virtualization, distributed tracing" },
  { aspekt: "Kiedy wybrać", monolit: "Startup, mały team, niepewne wymagania, early product", mikroserwisy: "Duży team, skalowanie, niezależne domain teams, proven architecture" },
];

const msPatterns = [
  { wzorzec: "Database per Service", opis: "Każdy serwis ma własną bazę danych — loose coupling, ale eventual consistency i brak transakcji cross-service", kiedy: "Gdy serwisy muszą być naprawdę niezależne i mogą tolerować eventual consistency" },
  { wzorzec: "Saga Pattern", opis: "Zarządzanie transakcjami rozłożonymi na wiele serwisów przez sekwencję lokalnych transakcji i compensating events", kiedy: "Gdy potrzebujesz ACID-like properties w distributed system" },
  { wzorzec: "CQRS (Command Query Responsibility Segregation)", opis: "Oddzielenie modeli zapisu (Command) i odczytu (Query) — optymalizacja każdego osobno", kiedy: "Gdy wymagania na read i write mocno się różnią, high read/write ratio" },
  { wzorzec: "Circuit Breaker", opis: "Automatyczne zatrzymanie requestów do niedostępnego serwisu — zapobiega kaskadowym awariom", kiedy: "Zawsze w synchronicznej komunikacji między serwisami" },
  { wzorzec: "Backend for Frontend (BFF)", opis: "Osobne API Gateway dla każdego frontend (mobile, web, third-party) — optymalizuje payload i UX", kiedy: "Gdy masz wiele typów klientów z różnymi potrzebami" },
];

export default function BlogMicroservicesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Mikroserwisy — co to jest? Architektura microservices vs monolit"
        description="Mikroserwisy — definicja, porównanie z monolitem, 5 wzorców (Saga, CQRS, Circuit Breaker, BFF), API Gateway i Service Mesh. Kompletny przewodnik po microservices."
        canonicalUrl="https://fotz.pl/blog/mikroserwisy-co-to-jest"
      />
      <ArticleSchema
        title="Mikroserwisy — co to jest i kiedy używać architektury microservices?"
        description="Kompletny przewodnik po mikroserwisach: porównanie z monolitem, 5 wzorców architektonicznych, API Gateway i Service Mesh."
        url="https://fotz.pl/blog/mikroserwisy-co-to-jest"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Mikroserwisy", url: "https://fotz.pl/blog/mikroserwisy-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Mikroserwisy" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Mikroserwisy — co to jest i kiedy wybrać zamiast monolitu?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Architektura mikroserwisów umożliwia niezależny rozwój i skalowanie — ale za cenę złożoności.
            Poznaj porównanie z monolitem, wzorce i kiedy naprawdę warto.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym są mikroserwisy?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Architektura mikroserwisów</strong> to wzorzec projektowania aplikacji jako zbioru
              małych, niezależnych serwisów — każdy odpowiada za konkretną funkcję biznesową
              (zamówienia, płatności, użytkownicy, powiadomienia) i komunikuje się z pozostałymi
              przez sieć. Każdy serwis można rozwijać, testować, wdrażać i skalować niezależnie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Złota zasada Martina Fowlera: "Don't start with microservices." Zacznij od monolitu,
              zrozum domain boundaries, a mikroserwisy wyodrębnij gdy naprawdę bolą problemy
              skalowania i autonomii teamów — nie wcześniej.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* Monolit vs mikroserwisy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Monolit vs. Mikroserwisy — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">Monolit</th>
                    <th className="p-3 text-left">Mikroserwisy</th>
                  </tr>
                </thead>
                <tbody>
                  {microservicesVsMonolith.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.monolit}</td>
                      <td className="p-3 text-indigo-700 text-sm">{row.mikroserwisy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 wzorców */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych wzorców architektury mikroserwisów</h2>
            <div className="space-y-4">
              {msPatterns.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-indigo-700 mb-2">{p.wzorzec}</h3>
                  <p className="text-slate-600 text-sm mb-2">{p.opis}</p>
                  <div className="bg-indigo-50 rounded p-2 text-xs text-indigo-700">
                    <span className="font-semibold">Kiedy stosować: </span>{p.kiedy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — mikroserwisy</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
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
