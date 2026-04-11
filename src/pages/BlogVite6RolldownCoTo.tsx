import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Vite 6 — co nowego i jak działa Environment API?",
    answer: "Vite 6: Evan You, VoidZero. Stabilna Environment API. Rolldown integracja (eksperymentalna). Instalacja: npm install vite@6. Co nowego: Environment API — wiele środowisk (client, SSR, edge). Plugin API stabilizacja. module runner — nowa abstrakcja. Rolldown jako opcjonalny bundler. Environment API: każde środowisko ma własną konfigurację. const clientEnv = server.environments.client. const ssrEnv = server.environments.ssr. Definiowanie: export default defineConfig({environments: {client: {consumer: 'client', build: {outDir: 'dist/client'}}, ssr: {consumer: 'server', noExternal: true, build: {outDir: 'dist/server'}}, edge: {consumer: 'server', resolve: {conditions: ['worker']}}}}). Module Runner: viteDevServer.moduleGraph podzielony per environment. Każde środowisko ma własny moduleGraph. HMR per environment. Frameworki: Nuxt 4, SvelteKit, Remix, Astro — wspierają Vite 6. Vite Plugin API: transformIndexHtml — środowisko-aware. resolveId — per environment. load — per environment. Migracja z Vite 5: vite-node -> module runner. server.moduleGraph -> server.environments.client.moduleGraph. Konfiguracja optymalizacji: optimizeDeps.include, exclude — bez zmian. preview mode — bez zmian. @vitejs/plugin-react v4: stabilna, Vite 6 ready. TypeScript: vite/client types. ImportMeta updates. rollupOptions — Rollup 4 API. Nowe defaults: esbuild target update. Zmiany breaking: Node 18+ wymagany. CJS build output zmiany.",
  },
  {
    question: "Rolldown — Rust bundler jako następca Rollup w Vite?",
    answer: "Rolldown: VoidZero (dawniej: Boshen Chen). Rust-based. Rollup-compatible API. Blazing fast. Instalacja eksperymentalna: npm install rolldown. Vite + Rolldown: npm install vite-plugin-rolldown. vite.config.ts: import {rolldown} from 'vite-plugin-rolldown'. plugins: [rolldown()]. Kilkukrotnie szybszy niż Rollup. Rollup API compatibility: input, output, plugins. format: 'es' | 'cjs' | 'umd'. external, globals. treeshake. Rolldown-native features: parallel transforms. Native TypeScript (swc). Native JSX transform. Wbudowane treeshaking. watch mode native. Porównanie prędkości: Rollup: baseline. Rolldown: 10-80x szybszy. esbuild: szybki ale mniej plugin compat. Rolldown + Vite integration timeline: Vite 6: eksperymentalne. Vite 7 (planowane): domyślny bundler. Pełna kompatybilność z Rollup plugins (cel). Current status (2024): alpha/beta. Nie dla produkcji. VoidZero Inc: seed funding. OXC ecosystem (oxc-parser, oxc-resolver, oxc-minifier). Oxlint: Rust linter. Ozc: transformer. Łańcuch narzędzi w Rust. Ograniczenia: nie wszystkie Rollup plugins działają. Część API brakuje. Community ecosystem rośnie. Workflow z Rolldown: dev -> Vite native esbuild/oxc. build -> Rolldown zamiast Rollup. Znacząco szybsze buildy. CI/CD korzyści.",
  },
  {
    question: "Vite — plugin API i tworzenie własnych pluginów?",
    answer: "Plugin API: Rollup-compatible. Hooks lifecycle. Vite-specific hooks. Tworzenie pluginu: function myPlugin(): Plugin { return { name: 'my-plugin', transform(code, id) { if (!id.endsWith('.vue')) return. return transformVue(code) }, resolveId(source) { if (source === 'virtual:my-module') return source }, load(id) { if (id === 'virtual:my-module') return 'export const msg = \"hello\"' } } }. Virtual modules: prefiks 'virtual:'. resolveId + load. Wspólny pattern dla metadanych. Hooks kolejność: config. configResolved. configureServer. buildStart. transform. generateBundle. writeBundle. closeBundle. Enforce: pre/post — przed/po innych pluginach. apply: 'serve' | 'build' — tylko dla dev/build. Vite-specific hooks: handleHotUpdate — custom HMR. configurePreviewServer — preview server. transformIndexHtml — inject do HTML. Popularnych pluginów: @vitejs/plugin-react. @vitejs/plugin-vue. vite-plugin-pwa. vite-tsconfig-paths. unplugin-icons. vite-plugin-svgr. unplugin-auto-import. unplugin-vue-components. Debugging: vite --debug. vite --filter plugin-name. Plugin testing: vitest. unplugin ecosystem: unplugin-macros. Unified plugin API (Webpack/Rollup/Vite/esbuild). Jedna implementacja dla wielu bundlerów. Vite 6 Environment API w pluginach: plugin.applyToEnvironment(env). Per-environment transform.",
  },
  {
    question: "Vite Dev Server — HMR, middleware i zaawansowana konfiguracja?",
    answer: "Dev Server: express-like. Middleware stack. HMR WebSocket. Native ESM. Konfiguracja: export default defineConfig({server: {port: 3000, open: true, https: true, host: '0.0.0.0', strictPort: false, proxy: {'/api': {target: 'http://localhost:5000', changeOrigin: true, rewrite: (path) => path.replace(/^\\/api/, '')}}, hmr: {overlay: true, port: 24678}}}). Custom middleware: configureServer: (server) => { server.middlewares.use('/custom', (req, res, next) => { res.writeHead(200). res.end('custom') }) }. Force full reload: server.ws.send({type: 'full-reload'}). Custom HMR: import.meta.hot.accept('./module.js', (newModule) => { updateApp(newModule) }). import.meta.hot.dispose((data) => { cleanup() }). import.meta.hot.invalidate(). Vite Preview Server: npm run preview. serve dist. configurePreviewServer hook. HTTPS in dev: @vitejs/plugin-basic-ssl. localhost cert automatyczny. vite-plugin-mkcert. SSR dev server: createServer({appType: 'custom'}). server.ssrFixStacktrace(e). ssrLoadModule('/src/entry-server.js'). Dependency pre-bundling: optimizeDeps.include. optimizeDeps.exclude. force: true — wyczyść cache. vite --force. node_modules/.vite/ — cache. Env variables: import.meta.env.VITE_API_URL. .env, .env.local, .env.production. defineConfig({envPrefix: 'APP_'}). loadEnv(mode, process.cwd()).",
  },
  {
    question: "Vite Build — optymalizacja, code splitting i library mode?",
    answer: "Build konfiguracja: export default defineConfig({build: {target: 'es2020', outDir: 'dist', assetsDir: 'assets', sourcemap: true, minify: 'esbuild', cssMinify: true, rollupOptions: {output: {manualChunks: {vendor: ['react', 'react-dom'], utils: ['lodash', 'date-fns']}}}, lib: {entry: 'src/index.ts', name: 'MyLib', formats: ['es', 'cjs', 'umd']}}}). Code Splitting: import('./heavy-component') — automatyczny chunk. manualChunks — kontrola. chunkFileNames: '[name]-[hash].js'. Vendor chunking: vendor chunk dla node_modules. Osobny chunk dla frameworka. Bundle analysis: rollup-plugin-visualizer. vite-bundle-visualizer. npx vite-bundle-visualizer. Piękny treemap. Library Mode: lib.entry — punkt wejścia. formats: ['es', 'cjs'] — dla bibliotek. rollupOptions.external — nie bundluj React. preserveEntrySignatures. package.json: exports field. main, module, types. Dedykowany dist dla każdego formatu. CSS extraction: cssCodeSplit: true (default). Osobny CSS per chunk. assetsInlineLimit: 4096 — inline małych zasobów. Worker bundles: import Worker from './worker?worker'. import SharedWorker from './worker?sharedworker'. WASM: import init from './module.wasm?init'. Raw imports: import src from './file?raw'. URL imports: import imgUrl from './img.png?url'. Assets handling: public/ — nie processowane. assetsInclude pattern. Treeshaking: Rollup treeshaking. sideEffects w package.json. Pure annotations.",
  },
];

const viteFeatures = [
  { funkcja: "Environment API", wersja: "Vite 6", opis: "Wiele środowisk (client/SSR/edge), per-env moduleGraph" },
  { funkcja: "Rolldown bundler", wersja: "Eksperymentalne", opis: "Rust-based Rollup replacement — 10-80x szybszy build" },
  { funkcja: "Plugin API", wersja: "v4+", opis: "Rollup-compatible, virtual modules, HMR hooks" },
  { funkcja: "HMR WebSocket", wersja: "v2+", opis: "import.meta.hot.accept, dispose, invalidate" },
  { funkcja: "Library Mode", wersja: "v2+", opis: "Buduj biblioteki — ES/CJS/UMD, external React" },
  { funkcja: "OXC Toolchain", wersja: "VoidZero", opis: "Rust: oxc-parser, oxlint, ozc-transformer — szybki łańcuch" },
];

export default function BlogVite6RolldownCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Vite 6, Rolldown i Environment API — nowa era bundlowania JavaScript 2024 | Fotz.pl"
        description="Vite 6: Environment API (client/SSR/edge), Rolldown (Rust bundler 10-80x szybszy), Plugin API, HMR, Library Mode, code splitting i OXC toolchain od VoidZero."
        canonicalUrl="https://fotz.pl/blog/vite-6-rolldown-environment-api-rust-bundler-oxc-2024"
      />
      <ArticleSchema
        title="Vite 6, Rolldown i Environment API — nowa era bundlowania JavaScript 2024?"
        description="Vite 6 Environment API, Rolldown (Rust bundler), Plugin API tworzenie, HMR zaawansowany, Library Mode i OXC toolchain — przyszłość bundlowania w JavaScript."
        url="https://fotz.pl/blog/vite-6-rolldown-environment-api-rust-bundler-oxc-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Vite 6 i Rolldown 2024", url: "https://fotz.pl/blog/vite-6-rolldown-environment-api-rust-bundler-oxc-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-yellow-950 to-amber-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Vite 6 i Rolldown 2024", href: "/blog/vite-6-rolldown-environment-api-rust-bundler-oxc-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-yellow-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Vite / Rolldown / Rust / Bundler
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Vite 6 i Rolldown
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Environment API (client/SSR/edge), Rolldown Rust bundler,
              Plugin API i OXC toolchain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Multi-env", value: "Env API" },
                { label: "Rust bundler", value: "Rolldown" },
                { label: "Dev server", value: "HMR Native" },
                { label: "Linter", value: "OXC" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Vite 6 — kluczowe funkcje i wersje</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Environment API, Rolldown, Plugin API, HMR, Library Mode i OXC —
              wersja i opis.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Funkcja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wersja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {viteFeatures.map((f, i) => (
                  <tr key={f.funkcja} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.funkcja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{f.wersja}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.opis}</td>
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
