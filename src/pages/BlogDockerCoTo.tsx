import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Docker?",
    answer:
      "Docker to platforma do budowania, uruchamiania i dystrybucji aplikacji w kontenerach. Kontener to lekka, izolowana jednostka uruchomieniowa zawierająca aplikację i wszystkie jej zależności (biblioteki, środowisko uruchomieniowe, konfigurację) — gwarantując identyczne działanie niezależnie od środowiska. 'Works on my machine' to problem przeszłości — Docker kontener działa tak samo na laptopie dewelopera, CI/CD i produkcji.",
  },
  {
    question: "Czym różni się kontener Docker od maszyny wirtualnej (VM)?",
    answer:
      "Maszyna wirtualna (VM) wirtualizuje cały hardware i uruchamia osobny system operacyjny — ciężka, wolna (minuty startowania), zajmuje gigabajty. Kontener Docker dzieli kernel hosta, wirtualizuje tylko przestrzeń procesów i systemu plików — lekki (sekundy startowania), megabajty. Kontenery uruchamiają się 10-100x szybciej i zużywają znacznie mniej zasobów. Jednak VM zapewnia silniejszą izolację (osobny kernel) — używana tam gdzie security isolation jest krytyczna.",
  },
  {
    question: "Co to jest Dockerfile?",
    answer:
      "Dockerfile to plik tekstowy z instrukcjami do budowania Docker image — przepis na kontener. Kluczowe instrukcje: FROM (base image), WORKDIR (katalog roboczy), COPY/ADD (kopiowanie plików), RUN (wykonanie komend podczas buildu), EXPOSE (deklaracja portów), ENV (zmienne środowiskowe), CMD/ENTRYPOINT (komenda uruchamiana przy starcie kontenera). Dockerfile jest wersjonowany razem z kodem — każda zmiana w konfiguracji jest śledzalna.",
  },
  {
    question: "Co to jest Docker Compose?",
    answer:
      "Docker Compose to narzędzie do definiowania i uruchamiania aplikacji złożonych z wielu kontenerów — za pomocą pliku YAML (docker-compose.yml). Pozwala na jedną komendę uruchomić całe środowisko: aplikacja + baza danych + cache (Redis) + reverse proxy (Nginx). Używany głównie w development (lokalne środowisko) i testing. Na produkcji zazwyczaj zastępuje go Kubernetes dla skalowalności i zarządzania clusterem.",
  },
  {
    question: "Jaka jest różnica między Docker image a Docker container?",
    answer:
      "Docker image to niezmenny szablon/blueprint — zawiera kod aplikacji, biblioteki, konfigurację. Jest jak przepis. Docker container to uruchomiona instancja image — działający proces. Z jednego image możesz uruchomić wiele kontenerów równolegle. Image jest read-only, container dodaje na wierzch read-write layer dla zmian podczas działania. Image budujesz (docker build), uruchamiasz jako container (docker run), dystrybuujesz przez registry (Docker Hub, ECR, GCR).",
  },
];

const dockerConcepts = [
  { pojęcie: "Image", opis: "Niezmenny szablon zawierający aplikację i zależności — blueprint dla kontenerów", komenda: "docker build -t myapp:1.0 .", przykład: "ubuntu:22.04, nginx:alpine, node:18-slim" },
  { pojęcie: "Container", opis: "Uruchomiona instancja image — izolowany process z własnym filesystemem i siecią", komenda: "docker run -p 3000:3000 myapp:1.0", przykład: "Działająca instancja aplikacji Node.js" },
  { pojęcie: "Dockerfile", opis: "Przepis na zbudowanie image — lista instrukcji wykonywanych podczas docker build", komenda: "docker build -f Dockerfile .", przykład: "FROM node:18 → COPY → RUN npm install → CMD" },
  { pojęcie: "Registry", opis: "Repozytorium przechowujące i dystrybuujące Docker images", komenda: "docker push myregistry/myapp:1.0", przykład: "Docker Hub, AWS ECR, Google GCR, GitHub GHCR" },
  { pojęcie: "Docker Compose", opis: "Narzędzie do definiowania multi-container aplikacji w pliku YAML", komenda: "docker compose up -d", przykład: "app + postgres + redis + nginx w jednej komendzie" },
  { pojęcie: "Volume", opis: "Mechanizm persystencji danych poza cyklem życia kontenera", komenda: "docker run -v myvolume:/data myapp", przykład: "Baza danych która przeżywa restart kontenera" },
  { pojęcie: "Network", opis: "Izolowana sieć łącząca kontenery — komunikacja przez nazwy kontenerów", komenda: "docker network create mynet", przykład: "app container komunikuje się z db container przez 'db:5432'" },
];

const dockerfileExample = `# Multi-stage build — optymalizacja rozmiaru image
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Production image — tylko to co potrzebne
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
USER node
CMD ["node", "dist/server.js"]`;

const dockerBestPractices = [
  { praktyka: "Multi-stage builds", opis: "Używaj wielu etapów build — osobny builder (z dev tools) i production image (tylko runtime). Redukcja rozmiaru image o 50-90%." },
  { praktyka: "Alpine base images", opis: "Używaj lightweight base images (node:18-alpine zamiast node:18). Alpine Linux to ~5MB vs ~100MB+ dla full OS." },
  { praktyka: ".dockerignore", opis: "Zawsze twórz .dockerignore wykluczający node_modules, .git, .env, logi. Przyspiesza build i zmniejsza image." },
  { praktyka: "Non-root user", opis: "Uruchamiaj aplikację jako non-root user (USER node) — security best practice, ogranicza blast radius kompromitacji." },
  { praktyka: "Layer caching", opis: "Kopiuj package.json przed kodem źródłowym (COPY package*.json ./ → RUN npm install → COPY . .) — zmiany kodu nie invalidują cache npm." },
  { praktyka: "Read-only filesystems", opis: "Gdzie możliwe, uruchamiaj z --read-only flag — kontener nie może modyfikować własnego filesystemu." },
];

export default function BlogDockerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Docker — co to jest? Kontenery, Dockerfile i Docker Compose"
        description="Docker — definicja, kontener vs VM, 7 kluczowych pojęć (Image, Container, Registry, Volume), przykład Dockerfile i best practices. Kompletny przewodnik po…"
        canonical="https://fotz.pl/blog/docker-co-to-jest"

        keywords="Docker co to jest, Docker jak działa, Docker tutorial, Docker przykład, czym jest Docker, Docker dokumentacja, Docker przewodnik"
      />
      <ArticleSchema
        title="Docker — co to jest i jak działa konteneryzacja?"
        description="Kompletny przewodnik po Docker: definicja, kontener vs VM, kluczowe pojęcia, przykład Dockerfile i best practices."
        url="https://fotz.pl/blog/docker-co-to-jest"
        datePublished="2024-01-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Docker", url: "https://fotz.pl/blog/docker-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Docker", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Docker — co to jest i jak działa konteneryzacja?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Docker eliminuje problem "works on my machine" — aplikacja z zależnościami działa
            identycznie wszędzie. Poznaj kontenery, Dockerfile i Docker Compose.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Docker?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Docker</strong> to platforma do budowania i uruchamiania aplikacji w kontenerach.
              Kontener to izolowana jednostka uruchomieniowa zawierająca aplikację i wszystkie
              jej zależności — działa tak samo na każdym systemie z Dockerem.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kontenery są znacznie lżejsze niż maszyny wirtualne — startują w sekundy,
              zajmują megabajty (nie gigabajty). Docker stał się standardem branżowym
              dla local development, CI/CD i produkcji (Kubernetes).
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 7 pojęć */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">7 kluczowych pojęć Docker</h2>
            <div className="space-y-3">
              {dockerConcepts.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-24 bg-blue-600 text-white text-xs font-bold rounded-lg px-2 py-2 text-center flex-shrink-0">{c.pojęcie}</div>
                    <div className="flex-1">
                      <p className="text-slate-700 mb-2">{c.opis}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-slate-100 text-slate-600 rounded px-2 py-1 font-mono">{c.komenda}</span>
                        <span className="bg-blue-50 text-blue-700 rounded px-2 py-1">{c.przykład}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Dockerfile example */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Przykład Dockerfile — multi-stage build</h2>
            <p className="text-slate-600 mb-6">Multi-stage build minimalizuje rozmiar production image — osobny etap dla buildowania i uruchomienia.</p>
            <div className="bg-slate-900 text-green-400 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre">{dockerfileExample}</pre>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Best practices */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 best practices Docker</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {dockerBestPractices.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 mb-2">{p.praktyka}</h3>
                  <p className="text-slate-600 text-sm">{p.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Docker i konteneryzacja</h2>
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

      <RelatedArticles currentArticleId="docker-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
