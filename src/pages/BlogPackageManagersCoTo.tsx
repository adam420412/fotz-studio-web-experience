import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest pnpm i dlaczego jest szybszy od npm i yarn?",
    answer: "pnpm (performant npm, Zoltan Kochan, 2017): content-addressable store. Hard links zamiast kopii. Strict node_modules (non-flat). Dlaczego szybszy: npm/yarn: każdy project kopiuje paczkę do node_modules. 1000 projektów z React = 1000 kopii React. pnpm: jeden store (~/.pnpm-store). Hard links w node_modules. Mniej disk I/O. Content-addressable: hash(package@version) = ścieżka w store. Raz pobrane = zawsze dostępne. Strict node_modules: flat node_modules (npm) pozwala na phantom dependencies. pnpm: tylko zdeklarowane deps dostępne. Lepsze dla bezpieczeństwa. Phantom dependency problem: import 'moment' w A, ale A nie deklaruje moment w package.json — działa w npm (bo flat), nie działa w pnpm. pnpm workspaces: monorepo support. pnpm-workspace.yaml. packages: ['packages/*', 'apps/*']. Catalog feature (pnpm 9+): catalog: {react: '18.3.1'}. Shared version w wszystkich packages. workspace: protokół: pnpm add @myorg/shared@workspace:*. Filter: pnpm --filter @myorg/web build. --filter ... (wszystkie + zależności). Benchmarks: pnpm ~2x szybszy niż npm dla cold install. ~30% szybszy niż yarn. Warm install: pnpm wygrywa dzięki store. Migracja: npm install -g pnpm. pnpm import (z package-lock.json). .npmrc: shamefully-hoist=true (jeśli potrzebujesz flat). pnpm store: pnpm store path. pnpm store prune.",
  },
  {
    question: "npm vs yarn — historia i różnice w 2024?",
    answer: "npm (Node Package Manager, 2010): wbudowany w Node.js. Domyślny. npm install, npm run, npm publish. package-lock.json (npm 5+). npm workspaces (npm 7+). npm scripts. Wersje: npm 9/10 (2024). npx — run bez instalacji. npm ci — clean install z lockfile. npm audit — security scan. npm pack — build tarball. npm registry: publiczny rejestr. Private: GitHub Packages, Verdaccio. yarn (Facebook, 2016): stworzony gdy npm był powolny i niestabilny. yarn.lock. Offline cache. Parallel installs. yarn v1 (classic): najpopularniejsza. Frozen lockfile: --frozen-lockfile. yarn v2/v3/v4 (Berry, 2020+): Plug'n'Play (PnP) zamiast node_modules. Zero-installs: lockfile + zip cache w repo. Nowatorski ale breaking. Kontrowersyjny w community. Wiele projektów pozostaje na v1. yarn Berry vs pnpm: Berry — PnP (no node_modules). pnpm — strict node_modules z hard links. Benchmark 2024: pnpm > yarn v1 > npm (cold install). npm vs pnpm dla solo dev: npm — zero config. pnpm — disk savings, strictness. Dla monorepo: pnpm workspaces (najlepsze DX). Dla enterprise: pnpm lub yarn berry. package.json engines field: 'engines': {'node': '>=20', 'pnpm': '>=9'}. volta: tool version manager. node, npm, yarn per project (.voltarc). fnm: szybka alternatywa dla nvm (Rust-based). nvm: node version manager. .nvmrc w projekcie. Automatyczne przełączanie.",
  },
  {
    question: "Bun package manager — najszybszy w 2024?",
    answer: "Bun: JavaScript runtime + package manager (Jarred Sumner, 2021). bun install — najszybszy package manager. Zig + JavaScriptCore. bun install: 10-100x szybszy od npm. No node_modules copying (podobnie pnpm ale inaczej). Binary lockfile (bun.lockb) — szybszy parse. Kompatybilny z npm registry. Backward compatible z package.json. Bun workspace: podobne do pnpm workspaces. workspace:* protocol. bunfig.toml konfiguracja. bun add / bun remove / bun update. bun link / bun pm. Bun jako runtime: bun run script.ts — bez transpilacji. bun dev server. Bun test: wbudowany test runner (jak Jest). Bun build: bundler. Bun vs pnpm vs npm: install speed: Bun >> pnpm > yarn > npm. Kompatybilność: npm/pnpm lepsza dla Node.js ecosystem. Bun runtime: nie zawsze Node.js compatible. Disk usage: Bun i pnpm podobne (store-based). Bun dla Next.js: Next.js oficjalnie wspiera Bun (install only). bun install zamiast npm install. bun run dev — używa Node.js pod spodem. package manager adoption 2024: npm — 60% (domyślny). pnpm — 20% (monorepo, strict). yarn — 15% (legacy). Bun — 5% (rosnący). lock-only mode: npm ci (CI). pnpm install --frozen-lockfile. yarn install --frozen-lockfile. bun install --frozen-lockfile. Zawsze frozen lockfile w CI.",
  },
  {
    question: "package.json — zaawansowane opcje, scripts i workspaces?",
    answer: "package.json kluczowe pola: name, version, description, main, module, exports, types. exports field (conditional exports): './': {import: './dist/index.mjs', require: './dist/index.cjs', types: './dist/index.d.ts'}. Dla package authors — dual ESM/CJS. scripts: pre/post hooks: pretest, postbuild. npm run build -> prebuild + build + postbuild. Lifecycle hooks: prepare (po install), prepublishOnly, prepack. cross-env: cross-platform env vars w scripts. 'build': 'cross-env NODE_ENV=production webpack'. concurrently: run multiple scripts. 'dev': 'concurrently npm:dev:*'. npm-run-all: run-p (parallel), run-s (sequential). Workspaces configuration: 'workspaces': ['packages/*', 'apps/*']. root install: npm install -> installs all workspaces. root scripts -> hoisted node_modules. Versioning: semantic versioning. ~1.2.3 (patch only). ^1.2.3 (minor + patch). 1.2.3 (exact). * (latest — niebezpieczne). Resolutions / overrides: npm overrides: {'lodash': '4.17.21'}. yarn resolutions: starsze. Wymuszaj bezpieczną wersję dependency. peerDependencies: dla plugin authors. Nie instalowane automatycznie. engines field: wymagania Node.js version. packageManager field: 'pnpm@9.0.0'. Corepack: automatyczne zarządzanie package managerem. node --experimental-corepack. private: true — zapobiegaj przypadkowemu publish. files field: które pliki trafiają do npm. bundleDependencies / optionalDependencies. sideEffects: false — tree-shaking hint.",
  },
  {
    question: "Zarządzanie wersjami Node.js — nvm, fnm, Volta i .nvmrc?",
    answer: "Problem: różne projekty wymagają różnych wersji Node.js. Node.js LTS: Long Term Support. Current + Maintenance. 2024: Node.js 20 LTS (Iron), Node.js 22 LTS (Jod). nvm (Node Version Manager): najpopularniejszy. nvm install 20. nvm use 20. nvm alias default 20. .nvmrc: plik w projekcie. Zawiera: 20.11.1 lub lts/iron. nvm use (bez argumentu) -> czyta .nvmrc. auto-switching: .bashrc/.zshrc + eval nvm use. Wolny startup (~200ms). fnm (Fast Node Manager, Rust): drop-in replacement. fnm install 20. fnm use 20. Automatyczne: eval $(fnm env --use-on-cd). Znacznie szybszy niż nvm. .node-version lub .nvmrc. Volta: tool manager dla Node + npm + yarn. pin: volta pin node@20. Projekt-specific. Automatyczne switching bez eval. package.json 'volta': {'node': '20.11.1', 'pnpm': '9.0.0'}. volta install node@20. Asdf: universal version manager. Obsługuje Node, Python, Ruby, Go, Rust. .tool-versions plik. Plugin-based. nvs (Windows-friendly): cross-platform nvm. Dobry dla Windows devs. Docker: node:20-alpine. Izolacja per container. CI/CD: .nvmrc -> actions/setup-node@v4. 'node-version-file: .nvmrc'. Node.js 22 (2024): require(esm) — importuj ESM z CJS. --experimental-require-module. WebSocket (native, bez ws npm). test runner ulepszony. Permission Model stabilny. fetch stable. WHATWG URLPattern. Single Executable Applications (SEA): package Node.js app to binary.",
  },
];

const packageManagers = [
  { manager: "npm", autor: "npm Inc.", install_speed: "Baseline", store: "node_modules per project", workspaces: "npm 7+", kiedy: "Default, zero-config, solo" },
  { manager: "pnpm", autor: "Zoltan Kochan", install_speed: "2x szybszy", store: "Content-addressable store (~/.pnpm-store)", workspaces: "Tak (najlepsze)", kiedy: "Monorepo, disk efficiency, strictness" },
  { manager: "yarn v1", autor: "Facebook", install_speed: "Podobny do npm", store: "node_modules per project", workspaces: "Tak (v1)", kiedy: "Legacy projects, yarn classic" },
  { manager: "yarn Berry (v4)", autor: "Facebook", install_speed: "Fast (PnP)", store: "PnP cache (brak node_modules)", workspaces: "Tak (zero-installs)", kiedy: "Zero-install, strict monorepo" },
  { manager: "Bun", autor: "Oven (Jarred Sumner)", install_speed: "10-100x szybszy", store: "Global cache (Bun store)", workspaces: "Tak", kiedy: "Speed-critical, Bun runtime" },
  { manager: "Deno (npm compat)", autor: "Deno Land", install_speed: "Fast", store: "DENO_DIR cache", workspaces: "Ograniczone", kiedy: "Deno projekty, npm compat mode" },
];

export default function BlogPackageManagersCoTo() {
  return (
    <Layout>
      <SEOHead
        title="npm vs pnpm vs yarn vs Bun | Fotz Studio"
        description="npm vs pnpm (content-addressable) vs yarn Berry (PnP) vs Bun — szybkość, disk usage, workspaces, package.json exports, nvm/fnm/Volta i Node.js versioning."
        canonical="https://fotz.pl/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024"

        keywords="npm vs pnpm vs yarn vs Bun co to jest, npm vs pnpm vs yarn vs Bun jak działa, npm vs pnpm vs yarn vs Bun tutorial, npm vs pnpm vs yarn vs Bun przykład, czym jest npm vs pnpm vs yarn vs Bun, npm vs pnpm vs yarn vs Bun dokumentacja, npm vs pnpm vs yarn vs Bun przewodnik"

        canonical="https://fotz.pl/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024"
      />
      <ArticleSchema
        title="npm vs pnpm vs yarn vs Bun — package managers Node.js 2024?"
        description="6 package managers (npm/pnpm/yarn v1/yarn Berry/Bun/Deno) — install speed, store, workspaces, package.json exports, nvm, fnm, Volta i Node.js versioning."
        url="https://fotz.pl/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Package Managers Node.js", url: "https://fotz.pl/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Package Managers Node.js", url: "/blog/npm-pnpm-yarn-bun-package-managers-nodejs-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Node.js / DevTools
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Package Managers w Node.js
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              npm, pnpm (content-addressable), yarn Berry (PnP), Bun —
              szybkość instalacji, workspaces, package.json i Node.js versioning.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Strict + fast", value: "pnpm" },
                { label: "Ultra fast", value: "Bun" },
                { label: "Default", value: "npm" },
                { label: "PnP cache", value: "Yarn Berry" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 package managers — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              npm, pnpm, yarn v1, yarn Berry, Bun i Deno —
              szybkość instalacji, przechowywanie pakietów i obsługa workspaces.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Manager</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Szybkość</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Store</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Workspaces</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {packageManagers.map((m, i) => (
                  <tr key={m.manager} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{m.manager}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.install_speed}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.store}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{m.workspaces}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{m.kiedy}</td>
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

      <RelatedArticles currentArticleId="npm-pnpm-yarn-bun-package-managers-nodejs-2024" />
      <ContactSection />
    </Layout>
  );
}
