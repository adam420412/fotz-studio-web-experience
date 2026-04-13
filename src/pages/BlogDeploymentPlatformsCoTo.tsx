import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Vercel i dlaczego jest domyślnym hostingiem dla Next.js?",
    answer: "Vercel: platforma deploymentu stworzona przez twórców Next.js. Git-based deployments (GitHub, GitLab, Bitbucket). Push to branch -> preview deploy automatycznie. Merge to main -> production deploy. Edge Network: 100+ PoP globalnie. Serverless Functions: Node.js, Python, Go, Ruby. Edge Functions: V8 Isolates, < 1ms cold start, Cloudflare Workers-based. ISR (Incremental Static Regeneration) native support. Analytics: Core Web Vitals per page. Real User Monitoring. Speed Insights. Firewall (Enterprise). Plany: Hobby (darmowy, personal projects). Pro ($20/mies, commercial). Enterprise (custom). Limity Hobby: 100GB bandwidth, 100GB-hrs compute, 6000 min builds. Vercel + Next.js features: Image Optimization wbudowane. Edge Middleware. Streaming RSC. OG Image generation (@vercel/og). KV (Redis), Blob (file storage), Postgres (Neon). Environment variables UI. Preview comments. Zero-config deployment: push code -> Vercel wykrywa framework -> buduje -> deployuje. vercel CLI: vercel dev (local simulation). vercel deploy --prod. Environment pull: vercel env pull .env.local. Vercel Analytics: vitals tracking. Custom events. Web Analytics (privacy-friendly). Konkurencyjna zaleta: Next.js features często dostępne najpierw na Vercel (PPR, RSC streaming). Wada: vendor lock-in. Koszt przy scale. Self-hosting Next.js (standalone mode) to alternatywa.",
  },
  {
    question: "Netlify, Cloudflare Pages i Railway — alternatywy dla Vercel?",
    answer: "Netlify: OG platform dla Jamstack (2014). Edge Functions (Deno). Serverless Functions. Forms (wbudowane). Identity (auth). CMS: Decap CMS (dawny Netlify CMS). netlify.toml konfiguracja. Build plugins. Split Testing (A/B). Netlify vs Vercel: Netlify — bardziej dojrzały, więcej plugins, Identity. Vercel — Next.js natywny, lepszy dla RSC. Cloudflare Pages: static + Functions (Workers). Edge-first. Unlimited bandwidth na free. Pages Functions = Workers. D1 (SQLite), R2 (storage), KV, AI. wrangler.toml konfiguracja. Full-stack z Workers: Pages + API Workers. Świetny dla Remix, Astro, Hono, SvelteKit. Tani przy scale (egress free). Railway: PaaS (Platform as a Service). Deploy any Docker/Nixpack project. Postgres, MySQL, Redis, MongoDB add-ons. Persistent storage. Cron jobs. Private networking. Dobrze do: Node.js APIs, NestJS, Fastify. Deploy z GitHub. railway.toml lub Dockerfile. $5/mies hobby plan. Render: podobne do Railway. Static sites (darmowe), Web Services, Databases. render.yaml multi-service config. Background workers, Cron jobs. Fly.io: Global deployment, Edge. flyctl deploy. Machines (VM-based). Postgres Fly cluster. Volumes (persistent disk). WebSockets native. Dobry dla long-running processes. DigitalOcean App Platform: simple PaaS. GitHub connect. PostgreSQL managed. $5/mies basic. Dobry dla non-Next.js Node.js apps.",
  },
  {
    question: "VPS vs PaaS vs Serverless — jak wybrać infrastrukturę?",
    answer: "VPS (Virtual Private Server): pełna kontrola. DigitalOcean Droplet, Linode, Hetzner. Od $5/mies. Sam konfigurujesz: Nginx, SSL, PM2, backup. Dobry dla: doświadczeni devs, stały traffic, custom requirements. Hetzner Cloud: najtańszy EU VPS. CX11 (2CPU, 2GB RAM) = 3.49 EUR/mies. Świetny value. PaaS (Platform as a Service): zarządzana infrastruktura. Railway, Render, Fly.io. Zero-config dla standardowych stacków. Droższy niż VPS, tańszy od Vercel. Serverless: płatność za użycie. Lambda (AWS), Cloud Functions (GCP). Cold starts. Idealne dla: variable traffic, event-driven. Serverless = Vercel, Netlify dla frontend. Porównanie kosztów: Small app (10K users/mies): Hobby Vercel + Neon DB -> $0-5/mies. Railway -> $5-20/mies. DigitalOcean droplet + managed DB -> $25-50/mies. AWS EC2 + RDS -> $50-100/mies. VPS stack dla Node.js: Hetzner VPS. Nginx (reverse proxy, SSL). PM2 (process manager). Let's Encrypt (SSL). Caprover lub Coolify (self-hosted PaaS UI). Coolify: open-source PaaS. Deploy na własnym VPS. Dokku-like. Graficzny interface. Automatyczne SSL. GitHub Actions CD. Docker Swarm lub K8s opcjonalnie. Wybór kryteriów: Team size: Solo -> Vercel/Railway. Team -> własny VPS lub managed. Traffic pattern: Variable -> Serverless. Steady -> VPS. Budget: Low -> Vercel Hobby. Scale -> Hetzner + Coolify. Compliance: EU data -> Hetzner DE. Vendor lock-in: Avoid -> open-source stack.",
  },
  {
    question: "Docker w deploymencie — Dockerfile, Docker Compose i container hosting?",
    answer: "Next.js Dockerfile (standalone mode): next.config.js output: 'standalone'. Dockerfile: FROM node:20-alpine AS base. FROM base AS deps -> npm ci. FROM base AS builder -> COPY + npm run build. FROM base AS runner -> COPY --from=builder .next/standalone. CMD node server.js. Multi-stage builds: mniejszy final image. Only runtime deps. Docker Compose dla full-stack: services: app (Next.js), db (postgres), redis. networks. volumes. environment. docker compose up -d. Container registries: Docker Hub, GitHub Container Registry (ghcr.io), AWS ECR. GitHub Actions CI/CD: docker/build-push-action. Build + push do GHCR. Deploy: SSH do serwera -> docker pull + run. Coolify deployment: Connect repo. Dockerfile detection. Auto build na push. Env variables UI. SSL automatyczne. Render + Docker: Dockerfile detect automatycznie. Web Service z Dockerem. Skalowanie. Fly.io + Docker: fly launch -> generuje fly.toml. fly deploy. Machines API. Health checks. Volumes dla persistent data. Railway + Docker: Dockerfile.railway lub auto-detect. Secrets management. Restart policies. Kubernetes: dla dużych projektów. Wiele serwisów. Auto-scaling. Self-managed (trudny) lub EKS/GKE/AKS. Helm charts. Docker best practices: non-root user. .dockerignore (node_modules, .next/cache). Health check HEALTHCHECK. Environment security (nie build-in secrets). Production: NODE_ENV=production. Minimalistyczny base image (alpine).",
  },
  {
    question: "CI/CD w deploymencie — GitHub Actions, Preview Deployments i rollbacks?",
    answer: "GitHub Actions workflow (Next.js): on: push: branches: [main, develop]. jobs: build: runs-on: ubuntu-latest. steps: checkout, setup-node, cache npm, npm ci, npm run build, npm test. deploy: needs: build. Vercel deployment: vercel/action lub push automatycznie. Preview deployments: każdy PR -> unikalny URL. Share z designerem, klientem. Approve merge tylko po akceptacji preview. Vercel: automatycznie. Netlify: automatycznie. Railway: branch deployments. Test w preview: Playwright E2E vs staging URL. environment variables per branch. Branch: preview vs production envs. Rollbacks: Vercel: instant rollback do poprzedniego deployment. 1 click w dashboardzie. Railway: redeploy poprzedniej wersji. Manual lub webhook. Release strategies: Blue-Green: dwa środowiska (blue=produkcja, green=staging). Switch traffic po weryfikacji. Zero downtime. Canary: stopniowe przełączanie % ruchu. Feature flags. Vercel: 10%/25%/100%. Rolling updates: Kubernetes rolling update. Stare pody usuwane stopniowo. Semantic versioning: major.minor.patch. Conventional commits -> auto changelog. semantic-release lub changesets. Environment management: .env.local (dev). .env.staging, .env.production. Nigdy nie commituj. Vault lub platform secrets storage. Preview environment databases: osobna test DB per PR. Database branching: Neon branching, PlanetScale branches. Test na copy prod data. Database migrations w CI: prisma migrate deploy przed deployem. Rollback migration: migracje reversible. Zero-downtime migration patterns (add column, backfill, remove old).",
  },
];

const deploymentPlatforms = [
  { platforma: "Vercel", model: "Serverless/Edge", free_tier: "Hobby (100GB BW)", silne: "Next.js native, ISR, Edge, Analytics", kiedy: "Next.js, solo/small teams" },
  { platforma: "Netlify", model: "Serverless/Edge", free_tier: "100GB BW, 300 min builds", silne: "Edge Functions, Forms, Identity, plugins", kiedy: "Jamstack, static + edge functions" },
  { platforma: "Cloudflare Pages", model: "Edge-first (Workers)", free_tier: "Unlimited BW", silne: "Zero egress, Workers, D1, R2", kiedy: "Edge-first, Remix/Astro, cost-aware" },
  { platforma: "Railway", model: "PaaS", free_tier: "$5 credit/mies", silne: "Any language, add-ons (DB, Redis)", kiedy: "Node.js API, NestJS, full-stack" },
  { platforma: "Fly.io", model: "VM-edge", free_tier: "3 shared VMs free", silne: "Global, long-running, WebSockets", kiedy: "Elixir/Phoenix, WebSockets, low latency" },
  { platforma: "Hetzner + Coolify", model: "Self-hosted VPS", free_tier: "3.49 EUR/mies VPS", silne: "Cheapest, full control, EU", kiedy: "Cost-sensitive, experienced devs" },
];

export default function BlogDeploymentPlatformsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vercel, Netlify, Cloudflare Pages, Railway — deployment Next.js 2024 | Fotz.pl"
        description="Vercel vs Netlify vs Cloudflare Pages vs Railway vs Fly.io vs VPS (Hetzner+Coolify) — hosting Next.js, CI/CD, preview deployments, Docker i infrastruktura 2024."
        canonicalUrl="https://fotz.pl/blog/vercel-netlify-cloudflare-pages-railway-deployment-nextjs-2024"

        keywords="Vercel, Netlify, Cloudflare Pages, Railway co to jest, Vercel, Netlify, Cloudflare Pages, Railway jak działa, Vercel, Netlify, Cloudflare Pages, Railway tutorial, Vercel, Netlify, Cloudflare Pages, Railway przykład, czym jest Vercel, Netlify, Cloudflare Pages, Railway, Vercel, Netlify, Cloudflare Pages, Railway dokumentacja, Vercel, Netlify, Cloudflare Pages, Railway przewodnik"
      />
      <ArticleSchema
        title="Vercel, Netlify, Cloudflare Pages, Railway — deployment Next.js 2024?"
        description="6 platform deploymentu (Vercel/Netlify/Cloudflare/Railway/Fly.io/VPS) — serverless, edge, PaaS, Docker, CI/CD GitHub Actions i preview deployments."
        url="https://fotz.pl/blog/vercel-netlify-cloudflare-pages-railway-deployment-nextjs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Deployment Platforms", url: "https://fotz.pl/blog/vercel-netlify-cloudflare-pages-railway-deployment-nextjs-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-gray-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Deployment Platforms", href: "/blog/vercel-netlify-cloudflare-pages-railway-deployment-nextjs-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              DevOps / Deployment
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Platformy Deploymentu w 2024
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Vercel, Netlify, Cloudflare Pages, Railway, Fly.io i VPS —
              serverless, edge, PaaS i self-hosted dla Next.js i Node.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Next.js native", value: "Vercel" },
                { label: "Edge unlimited", value: "Cloudflare" },
                { label: "Any language", value: "Railway" },
                { label: "Cheapest EU", value: "Hetzner" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-slate-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platformy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 platform deploymentu — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Vercel, Netlify, Cloudflare, Railway, Fly.io i Hetzner+Coolify —
              model hostingu, free tier, mocne strony i optymalny use case.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Platforma</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Free tier</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Mocne strony</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {deploymentPlatforms.map((p, i) => (
                  <tr key={p.platforma} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.platforma}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.model}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.free_tier}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.silne}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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
