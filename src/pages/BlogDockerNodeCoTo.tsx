import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Jak zbudować optymalny Dockerfile dla Node.js i Next.js?",
    answer: "Podstawowy Dockerfile Node.js: FROM node:20-alpine. WORKDIR /app. COPY package*.json ./. RUN npm ci --only=production. COPY . .. EXPOSE 3000. CMD ['node', 'server.js']. Alpine base: mniejszy obraz (~180MB vs ~900MB). Brak wielu narzędzi — lżejszy. Bezpieczniejszy. Multi-stage build (best practice): Stage 1 — deps: FROM node:20-alpine AS deps. WORKDIR /app. COPY package*.json ./. RUN npm ci. Stage 2 — builder: FROM node:20-alpine AS builder. WORKDIR /app. COPY --from=deps /app/node_modules ./node_modules. COPY . .. RUN npm run build. Stage 3 — runner: FROM node:20-alpine AS runner. WORKDIR /app. ENV NODE_ENV=production. COPY --from=builder /app/.next/standalone ./. COPY --from=builder /app/.next/static ./.next/static. COPY --from=builder /app/public ./public. EXPOSE 3000. CMD ['node', 'server.js']. Next.js standalone output: next.config.js: output: 'standalone'. Minimalny bundle. Serwer w .next/standalone. Nie wymaga pełnego node_modules. Layer caching: COPY package*.json najpierw. RUN npm ci. Potem COPY . .. Jeśli tylko kod się zmienia — layer deps z cache. Szybszy build. .dockerignore: node_modules, .next, .env, .git, *.log. Nie kopiuj do kontenera.",
  },
  {
    question: "Docker Compose dla Node.js, Postgres i Redis?",
    answer: "Docker Compose: wielokontenerowe aplikacje. docker-compose.yml: services: app: build: .. ports: ['3000:3000']. environment: - DATABASE_URL=postgres://user:pass@db:5432/mydb - REDIS_URL=redis://redis:6379. depends_on: db: condition: service_healthy. redis:. networks: [app-network]. db: image: postgres:16-alpine. volumes: [pgdata:/var/lib/postgresql/data]. environment: POSTGRES_DB: mydb. POSTGRES_USER: user. POSTGRES_PASSWORD: password. healthcheck: test: ['CMD-SHELL', 'pg_isready -U user']. interval: 5s. timeout: 5s. retries: 5. redis: image: redis:7-alpine. volumes: [redisdata:/data]. networks: [app-network]. volumes: pgdata:. redisdata:. networks: app-network: driver: bridge. Komendy: docker compose up -d — start. docker compose down — stop. docker compose logs -f app — logi. docker compose exec app sh — shell w kontenerze. docker compose build --no-cache. Health checks: healthcheck na db i redis. depends_on z condition: service_healthy. Unikaj race condition. Sekretne zmienne: .env file. docker compose --env-file .env. Nie commituj .env z secretami. Development vs Production Compose: docker-compose.yml — base. docker-compose.override.yml — dev (volumes, hot reload). docker-compose.prod.yml — prod (no volumes). docker compose -f docker-compose.yml -f docker-compose.prod.yml up.",
  },
  {
    question: "GitHub Actions — CI/CD dla Node.js i Docker?",
    answer: "GitHub Actions Dockerfile build i push do registry: name: Build and Push. on: push: branches: [main]. jobs: build: runs-on: ubuntu-latest. steps: - uses: actions/checkout@v4. - uses: docker/setup-buildx-action@v3. - uses: docker/login-action@v3. with: registry: ghcr.io. username: ${{ github.actor }}. password: ${{ secrets.GITHUB_TOKEN }}. - uses: docker/build-push-action@v5. with: push: true. tags: ghcr.io/${{ github.repository }}:latest. cache-from: type=gha. cache-to: type=gha,mode=max. Build cache — szybsze buildy. Test before build: steps: - uses: actions/setup-node@v4. with: node-version: '20'. cache: 'npm'. - run: npm ci. - run: npm test. - run: npm run lint. - run: npm run build. Node.js cache: actions/setup-node z cache: 'npm'. Automatyczny cache node_modules. Docker layer cache w GitHub Actions: cache-from/cache-to type=gha. Zaoszczędź minuty build. Deploy na VPS (SSH): - name: Deploy. uses: appleboy/ssh-action@v1. with: host: ${{ secrets.HOST }}. username: ${{ secrets.USERNAME }}. key: ${{ secrets.SSH_KEY }}. script: docker pull image:latest && docker compose up -d. Deploy na Railway/Render/Fly.io: automatyczne z GitHub. Bez pisania CI. Dobre dla start. Kubernetes deploy: kubectl set image deployment/app app=image:tag. lub Helm upgrade. Secrets management: GitHub Secrets. Nie secrets w code. Environment variables w Compose.",
  },
  {
    question: "Optymalizacja Node.js w Docker — performance i security?",
    answer: "Non-root user: RUN addgroup -S appgroup && adduser -S appuser -G appgroup. USER appuser. Nie uruchamiaj jako root! Security best practice. Read-only filesystem: docker run --read-only. Mounts dla writable dirs: --tmpfs /tmp. Nie pisz do kontenera poza volumes. Secrets w runtime: nie w ENV w Dockerfile. docker secret (Swarm). Kubernetes Secrets. W runtime przez env (z Compose lub K8s). Node.js process manager: Nie potrzebujesz PM2 w Docker (Docker restartuje). NODE_ENV=production — wyłącz dev dependencies. --restart unless-stopped w Docker run. tini jako PID 1: FROM node:20-alpine. RUN apk add tini. ENTRYPOINT ['/sbin/tini', '--']. CMD ['node', 'server.js']. Signal handling. Graceful shutdown. Memory limits: docker run --memory=512m. Node.js heap size: NODE_OPTIONS='--max-old-space-size=512'. Unikaj OOM kills. Image scanning: docker scout cves image:tag. Trivy — open source scanner. Snyk Container. GitHub Actions: trivy-action. Log management: stdout/stderr do Docker. docker logs. Fluentd/Loki aggregation. Brak pliku log w kontenerze. Healthcheck w Dockerfile: HEALTHCHECK --interval=30s --timeout=3s CMD wget -O- http://localhost:3000/health || exit 1. /health endpoint w Express. Kubernetes readiness i liveness probes. Resource requests i limits w K8s: resources: requests: memory: 256Mi, cpu: 250m. limits: memory: 512Mi, cpu: 500m. Distroless images: gcr.io/distroless/nodejs20. Minimalny image. Brak shell. Bardzo bezpieczny. Brak apk/apt.",
  },
  {
    question: "Kubernetes basics dla Node.js/Next.js aplikacji?",
    answer: "Kubernetes (K8s): orkestracja kontenerów. Deployment, scaling, healing. Self-healing — restart crashed pods. Rolling updates — zero downtime. Secrets i ConfigMaps. Podstawowe obiekty: Pod — najmniejsza jednostka. Deployment — zarządza Pods. Service — load balancer. Ingress — HTTP routing. ConfigMap — konfiguracja. Secret — wrażliwe dane. PersistentVolume — storage. Deployment YAML: apiVersion: apps/v1. kind: Deployment. metadata: name: app. spec: replicas: 3. selector: matchLabels: app: myapp. template: metadata: labels: app: myapp. spec: containers: - name: app. image: ghcr.io/user/app:latest. ports: [{containerPort: 3000}]. env: [{name: DATABASE_URL, valueFrom: {secretKeyRef: {name: app-secrets, key: DATABASE_URL}}}]. resources: requests: {memory: 256Mi}. limits: {memory: 512Mi}. Service YAML: kind: Service. spec: selector: app: myapp. ports: [{port: 80, targetPort: 3000}]. type: ClusterIP. Ingress z Nginx: kind: Ingress. annotations: nginx.ingress.kubernetes.io/ssl-redirect: 'true'. spec: rules: [{host: myapp.com, http: {paths: [{path: /, backend: {service: {name: app, port: {number: 80}}}}]}}]. Horizontal Pod Autoscaler: kubectl autoscale deployment app --min=2 --max=10 --cpu-percent=70. Skalowanie po obciążeniu. Managed K8s: GKE, EKS, AKS — bez zarządzania control plane. Alternatywy: Railway, Render, Fly.io — simpler than K8s. Dobry wybór dla małych apps. K8s — enterprise scale.",
  },
];

const dockerConcepts = [
  { koncept: "Multi-stage Dockerfile", zastosowanie: "Mniejszy obraz produkcyjny", przyklad: "deps -> builder -> runner", kiedy: "Zawsze dla Next.js/Node.js" },
  { koncept: "Docker Compose", zastosowanie: "Wielokontenerowe środowiska", przyklad: "app + postgres + redis", kiedy: "Lokalne dev, staging" },
  { koncept: "GitHub Actions CI/CD", zastosowanie: "Build, test, push, deploy", przyklad: "docker/build-push-action", kiedy: "Automatyzacja pipeline" },
  { koncept: "Non-root user", zastosowanie: "Bezpieczeństwo kontenera", przyklad: "adduser appuser; USER appuser", kiedy: "Zawsze w produkcji" },
  { koncept: "Health checks", zastosowanie: "Monitoring i restarts", przyklad: "HEALTHCHECK CMD wget /health", kiedy: "Produkcja, K8s readiness" },
  { koncept: "Kubernetes Deployment", zastosowanie: "Skalowanie, self-healing", przyklad: "replicas: 3, HPA", kiedy: "Skala produkcyjna, enterprise" },
];

export default function BlogDockerNodeCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Docker dla Node.js i Next.js | Fotz Studio"
        description="Multi-stage Dockerfile (Node.js, Next.js standalone), Docker Compose (Postgres, Redis), GitHub Actions (build/push/deploy), security best practices i…"
        canonicalUrl="https://fotz.pl/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024"

        keywords="Docker dla Node.js i Next.js co to jest, Docker dla Node.js i Next.js jak działa, Docker dla Node.js i Next.js tutorial, Docker dla Node.js i Next.js przykład, czym jest Docker dla Node.js i Next.js, Docker dla Node.js i Next.js dokumentacja, Docker dla Node.js i Next.js przewodnik"

        canonical="https://fotz.pl/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024"
      />
      <ArticleSchema
        title="Docker dla Node.js i Next.js — Dockerfile, Docker Compose, GitHub Actions CI/CD 2024?"
        description="6 konceptów Docker (multi-stage/Compose/GitHub Actions/non-root user/health checks/Kubernetes) — optymalny obraz Next.js, CI/CD pipeline i security best practices."
        url="https://fotz.pl/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024"
        datePublished="2024-04-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Docker Node.js i Next.js", url: "https://fotz.pl/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Docker Node.js i Next.js", href: "/blog/docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DevOps / Docker / Node.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Docker dla Node.js i Next.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Multi-stage Dockerfile, Docker Compose (Postgres, Redis), GitHub Actions CI/CD
              i Kubernetes basics — konteneryzacja aplikacji Node.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Mały obraz", value: "Multi-stage" },
                { label: "Dev środowisko", value: "Compose" },
                { label: "CI/CD", value: "GH Actions" },
                { label: "Skalowanie", value: "Kubernetes" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 konceptów Docker dla Node.js — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Multi-stage Dockerfile, Docker Compose, GitHub Actions, non-root user, health checks i Kubernetes —
              zastosowanie, przykład i kiedy używać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Koncept</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zastosowanie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Przykład</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {dockerConcepts.map((d, i) => (
                  <tr key={d.koncept} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{d.koncept}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{d.zastosowanie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{d.przyklad}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{d.kiedy}</td>
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

      <RelatedArticles currentArticleId="docker-nodejs-nextjs-dockerfile-compose-github-actions-kubernetes-2024" />
      <ContactSection />
    </Layout>
  );
}
