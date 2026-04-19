import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Volta — Node.js version manager nowej generacji?",
    answer: "Volta: szybki, cross-platform Node.js manager. Rust. Shims — przezroczysty. Instalacja: curl https://get.volta.sh | bash (macOS/Linux). Winget na Windows. Podstawowe komendy: volta install node@20. volta install node@lts. volta list all. volta pin node@20 — przypnij w projekcie. Pinning: volta pin node@20 dodaje do package.json: {volta: {node: '20.11.0', npm: '10.2.0'}}. Automatyczne przełączanie wersji per projekt. Brak .nvmrc. package.json jako source of truth. Zalety Volta: szybki (Rust). Cross-platform Windows (nvm słabo na Windows). Automatyczny pin. Shared tools: volta install yarn@4. volta install pnpm. volta install typescript. Narzędzia per projekt. CI/CD: Volta w GitHub Actions. Czytaj package.json. Automatyczna wersja. actions/setup-node alternatywa. Porównanie z nvm: Volta — Rust, szybki, Windows, package.json pin. nvm — bash, wolniejszy, Linux/macOS głównie. fnm — szybszy niż nvm, ale brak narzędzi globalnych jak Volta. Corepack: npm install -g corepack (lub wbudowany Node.js 16.9+). corepack enable. yarn/pnpm version z packageManager w package.json. {packageManager: 'pnpm@8.15.0'}. Razem: Volta dla Node.js + Corepack dla package manager.",
  },
  {
    question: "fnm i mise — szybkie alternatywy dla nvm?",
    answer: "fnm (Fast Node Manager): szybki nvm replacement. Rust. Prosty. Instalacja: curl -fsSL https://fnm.vercel.app/install | bash. Winget: winget install Schniz.fnm. Komendy: fnm install 20. fnm install --lts. fnm use 20. fnm default 20. fnm list. .nvmrc: automatyczne wczytanie. fnm use — sprawdza .nvmrc lub .node-version. Lub fnm env --use-on-cd (shell hook). Shell integration: fnm env — konfiguracja PATH. Dodaj do .bashrc/.zshrc. eval $(fnm env --use-on-cd). Szybkość: znacznie szybszy niż nvm. nvm dodaje ~100ms do shell startu. fnm — znikomy overhead. mise (dawniej rtx): polyglot version manager. Rust. Nie tylko Node.js. Instalacja: curl https://mise.run | sh. Konfiguracja: .mise.toml lub .tool-versions. [tools]. node = '20'. python = '3.12'. ruby = '3.3'. Jeden plik dla całego projektu. Zintegrowany z asdf (kompatybilny). mise install — wszystkie tools z konfiguracji. Automatyczne switching: wejście do katalogu. asdf compatibility: .tool-versions plik. asdf wtyczki kompatybilne. Zastępuje asdf (szybszy). Proto: Moonrepo (Turborepo team). Nowoczesny. WASM plugins. Protokół wtyczek. proto install node 20. proto use. Porównanie: fnm — prosty Node.js manager. mise — polyglot (Node + Python + Ruby + Go). Volta — package-level pinning. nvm — stary standard, wolny.",
  },
  {
    question: "nvm — najstarszy i nadal popularny Node.js manager?",
    answer: "nvm (Node Version Manager): bash script. macOS/Linux. Najdłużej istnieje. Ogromna dokumentacja. Instalacja: curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash. Dodaj do .bashrc/.zshrc: export NVM_DIR=$HOME/.nvm. [ -s $NVM_DIR/nvm.sh ] && source $NVM_DIR/nvm.sh. Komendy: nvm install 20. nvm install --lts. nvm use 20. nvm alias default 20. nvm list. nvm ls-remote — dostępne wersje. .nvmrc: echo '20' > .nvmrc. nvm use — automatycznie wczyta. nvm install — jeśli brak. Auto-use: add-nvm-use function do .bashrc. cdnvm() { cd $@. if [ -f .nvmrc ]; then nvm use. fi }. Windows: nvm-windows (oddzielny projekt). Nie jest tym samym co nvm. nvm-windows install 20.0.0. nvm-windows use 20.0.0. Problemy nvm: wolny shell start (source skryptu). Nie działa dobrze w Docker. Wymaga ponownej instalacji globalnych pakietów po zmianie wersji. Nie cross-platform. Node.js LTS: Long Term Support. node.js.org/en/about/releases. Current — najnowsza funkcje. LTS — stabilna dla produkcji. Maintenance — tylko security fixes. Active LTS: Node 20, Node 22 (2024). package.json engines: {engines: {node: '>=18.17.0', npm: '>=9.6.7'}}. Sprawdź zgodność. .npmrc: engine-strict=true. Brak zainstalowania bez poprawnej wersji. GitHub Actions: actions/setup-node@v4. node-version: '20'. node-version-file: '.nvmrc'. Cache: pnpm, npm, yarn.",
  },
  {
    question: "Corepack — package manager versioning w Node.js?",
    answer: "Corepack: wbudowany w Node.js 16.9+. Zarządza wersjami npm, yarn, pnpm. Brak globalnej instalacji yarn/pnpm konieczna. Włączenie: corepack enable. Lub node --experimental-corepack (Node.js 22). packageManager field: package.json: {packageManager: 'pnpm@9.4.0'}. lub {packageManager: 'yarn@4.3.1'}. Corepack instaluje automatycznie. Prawidłowa wersja per projekt. Shims: yarn, pnpm jako shims. Przekierowanie do prawidłowej wersji. Brak kolizji między projektami. corepack prepare: corepack prepare pnpm@9.4.0 --activate. Pobierz i aktywuj. Offline: corepack pack — paczka offline. Deploy bez internetu. CI: corepack enable w setup. actions/setup-node ma opcję. node-version + enable-corepack: true. Yarn Berry (v4): Zero-Installs. PnP (Plug'n'Play). .yarnrc.yml konfiguracja. yarnPath: .yarn/releases/yarn-4.x.x.cjs. Corepack: yarn dlx zamiast npx. Migracja yarn classic -> yarn berry: yarn set version stable. Plug'n'Play: brak node_modules! .pnp.cjs. VSCode: yarn dlx @yarnpkg/sdks vscode. Inline installs: pnpm dlx create-vite. npm create vite@latest. yarn create vite. npx create-next-app@latest. Porównanie managers 2024: npm — default, wolniejszy, phantom deps. pnpm — szybki, disk-efficient, strict. yarn berry — PnP, zero-installs, enterprise. bun install — najszybszy, niekompatybilności.",
  },
  {
    question: "Docker i Node.js — best practices wersjonowania?",
    answer: "Docker + Node.js wersja: Dockerfile: FROM node:20-alpine. Konkretna wersja — stabilność. Nie FROM node:latest. Multi-stage build: FROM node:20-alpine AS builder. WORKDIR /app. COPY package*.json ./. RUN npm ci. COPY . .. RUN npm run build. FROM node:20-alpine AS runner. COPY --from=builder /app/dist ./dist. COPY --from=builder /app/node_modules ./node_modules. Nie-root user: USER node. RUN chown -R node:node /app. Bezpieczeństwo. .dockerignore: node_modules. .git. dist. .env. npm ci vs npm install: npm ci — deterministyczny. package-lock.json musi istnieć. Szybszy w CI. ARG NODE_VERSION=20: ARG NODE_VERSION=20. FROM node:${NODE_VERSION}-alpine. Build-arg przy budowaniu. npm shrinkwrap: package-lock.json alternatywa (stary). npm ci zamiast tego. Lock files: package-lock.json (npm). pnpm-lock.yaml (pnpm). yarn.lock (yarn). Commit lock file do repo. bun.lockb (bun). GitHub Actions: matrix builds: strategy.matrix.node-version: [18, 20, 22]. Testuj na wielu wersjach. node-version-file: package.json lub .nvmrc. .nvmrc best practices: echo 'lts/iron' > .nvmrc (LTS alias). lub echo '20.11.0' > .nvmrc (pinowana). Shared w teamie. CI czyta. nvm use bez argumentu. Renovate/Dependabot: automatyczne PR dla Node.js updates. Sprawdź package.json engines. Bezpieczne aktualizacje.",
  },
];

const versionManagers = [
  { tool: "Volta", jezyk: "Rust", kiedy: "Cross-platform, package.json pin, Windows support" },
  { tool: "fnm", jezyk: "Rust", kiedy: "Szybki nvm replacement, .nvmrc kompatybilny, prosty" },
  { tool: "mise (rtx)", kezyk: "Rust", kiedy: "Polyglot (Node+Python+Ruby+Go), .tool-versions" },
  { tool: "nvm", kezyk: "Bash", kiedy: "Linux/macOS, stary standard, ogromna dokumentacja" },
  { tool: "nvm-windows", kezyk: "Go", kiedy: "Windows alternative do nvm (oddzielny projekt)" },
  { tool: "Corepack", kezyk: "Node.js built-in", kiedy: "package manager versioning (yarn/pnpm) per projekt" },
];

export default function BlogNodeVersionMgrCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Volta, fnm, mise, nvm i Corepack | Fotz Studio"
        description="Node.js version managers 2024: Volta (Rust, package.json pin), fnm (szybki), mise (polyglot), nvm (klasyk), nvm-windows i Corepack (package manager…"
        canonicalUrl="https://fotz.pl/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024"

        keywords="Volta, fnm, mise, nvm i Corepack co to jest, Volta, fnm, mise, nvm i Corepack jak działa, Volta, fnm, mise, nvm i Corepack tutorial, Volta, fnm, mise, nvm i Corepack przykład, czym jest Volta, fnm, mise, nvm i Corepack, Volta, fnm, mise, nvm i Corepack dokumentacja, Volta, fnm, mise, nvm i Corepack przewodnik"

        canonical="https://fotz.pl/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024"
      />
      <ArticleSchema
        title="Volta, fnm, mise, nvm i Corepack — Node.js version managers 2024?"
        description="6 narzędzi zarządzania wersjami Node.js (Volta/fnm/mise/nvm/nvm-windows/Corepack) — szybkość, cross-platform, package.json pin, polyglot i Docker best practices."
        url="https://fotz.pl/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024"
        datePublished="2024-07-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Node.js Version Managers", url: "https://fotz.pl/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-lime-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Node.js Version Managers", href: "/blog/volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / Tooling / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Node.js Version Managers
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Volta (Rust, package.json pin), fnm (szybki), mise (polyglot),
              nvm (klasyk) i Corepack (package manager versioning).
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Rust fast", value: "Volta" },
                { label: "Szybki nvm", value: "fnm" },
                { label: "Polyglot", value: "mise" },
                { label: "pkg mgr", value: "Corepack" },
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

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 Node.js version managers — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Volta, fnm, mise, nvm, nvm-windows i Corepack —
              język implementacji i kiedy wybrać.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Język</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {versionManagers.map((v, i) => (
                  <tr key={v.tool} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{v.tool}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{v. jezyk}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{v.kiedy}</td>
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

      <RelatedArticles currentArticleId="volta-fnm-mise-nvm-corepack-nodejs-version-managers-2024" />
      <ContactSection />
    </Layout>
  );
}
