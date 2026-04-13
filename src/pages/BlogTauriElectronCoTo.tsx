import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Tauri i dlaczego jest lepsza od Electron?",
    answer: "Tauri: framework do desktop apps z web technologiami (2021, CrabNebula). Rust backend + frontend (dowolny framework). System WebView (nie bundled Chromium). Mniejszy rozmiar: 1-10MB vs 50-150MB (Electron). Mniejszy memory footprint. Bezpieczniejszy (Rust). Electron: web technologies = desktop (GitHub, 2013). Chromium + Node.js bundled. V8 engine. Największy ekosystem. VS Code, Slack, Discord, WhatsApp, Figma. Porównanie rozmiar: Electron: ~150MB (Chromium + Node.js). Tauri v1: ~2-10MB (system WebView). Tauri v2: multi-platform, mobile. Porównanie RAM: Electron: ~150MB+ minimum. Tauri: ~30-50MB. Tauri architektura: Frontend: HTML/CSS/JS (React, Vue, Svelte, etc). Rust backend: system tray, file system, notifications, custom commands. IPC: invoke() z frontendu -> Rust command. Tauri API (JavaScript): @tauri-apps/api. dialog.open() — file picker. fs.readTextFile() — file system. shell.open() — open URL. notification.sendNotification(). path.appDataDir() — app data. Security model: allowlist w tauri.conf.json. Tylko zezwolone Tauri APIs dostępne. Capability-based. Mobilne (Tauri v2): iOS i Android support. Shared Rust core. Tauri v2 stabilny (2024). create-tauri-app: npx create-tauri-app. Wybierz framework (React, Vue, Svelte, Angular, Vanilla). bun tauri dev. bun tauri build.",
  },
  {
    question: "Electron — jak działa i jakie są jego wady?",
    answer: "Electron architektura: Main process (Node.js): app lifecycle, native menus, IPC. Renderer process (Chromium): HTML/CSS/JS UI. Preload script: bridge między main a renderer. IPC: ipcRenderer.invoke('getData') / ipcMain.handle('getData'). Zalety Electron: największy ekosystem. Node.js pełna moc. Znane narzędzia (Chrome DevTools). Crossplatform: Windows, macOS, Linux. Wady: Rozmiar: 50-150MB minimum. Pamięć: Chrome process = heavy. Powolny startup (Chromium). Każda aktualizacja = Chromium bundle. Bezpieczeństwo: contextisolation: true (wymagane). nodeIntegration: false. preload scripts zamiast bezpośredniego Node.js. electron-builder: packaging i dystrybucja. Windows: NSIS installer, AppX. macOS: DMG, pkg, MAS. Linux: deb, rpm, AppImage. Auto-update: electron-updater. GitHub Releases. Code signing (wymagane dla Mac notarization). Electron Forge: alternatywne tooling. Webpack + React + Electron. electron-vite: Vite + Electron. Szybszy HMR. Popularne aplikacje na Electron: VS Code (Microsoft). Slack, Discord. WhatsApp Desktop. Figma Desktop. 1Password. Notion (częściowo). Electron dla Next.js: trudne (SSR incompatible). nextron package. Lepiej: Vite + React + Electron. Electron Fiddle: eksperymentowanie z Electron. Quick prototype.",
  },
  {
    question: "Tauri praktycznie — jak zbudować desktop app z React?",
    answer: "Setup: npx create-tauri-app. Wybierz: project name, identifier (com.example.app), frontend (React + Vite). Struktura: src/ (frontend). src-tauri/ (Rust backend). src-tauri/tauri.conf.json (konfiguracja). src-tauri/src/main.rs (Rust entry). src-tauri/Cargo.toml (Rust deps). Tauri commands (Rust): #[tauri::command]. fn greet(name: &str) -> String {format!('Hello, {}!', name)}. Zarejestruj: .invoke_handler(tauri::generate_handler![greet]). Frontend: import {invoke} from '@tauri-apps/api/core'. const result = await invoke('greet', {name: 'Adam'}). File system: import {readTextFile, writeTextFile} from '@tauri-apps/plugin-fs'. const content = await readTextFile('/path/to/file'). Permissions: capabilities JSON files. grant permissions per window. Dialogs: import {open, save} from '@tauri-apps/plugin-dialog'. const selected = await open({filters: [{name: 'JSON', extensions: ['json']}]}). System tray: tray icon z menu. Notifications: import {sendNotification} from '@tauri-apps/plugin-notification'. Window management: appWindow.setTitle('My App'). appWindow.minimize(). Auto-update (Tauri v2): @tauri-apps/plugin-updater. check() -> DownloadAndInstall(). GitHub Releases integration. App signing: macOS: Xcode + Apple Developer Account. Windows: code signing certificate. GitHub Actions CI: tauri-action. Builds dla wszystkich platform. bun tauri build -- --target aarch64-apple-darwin.",
  },
  {
    question: "Wails, Neutralino i inne alternatywy dla Electron i Tauri?",
    answer: "Wails: Electron-alternative oparte na Go (2019). Go backend + WebView. Mniejszy od Electron (jak Tauri). Go jako backend zamiast Rust. wails init -n myapp -t react-ts. Go functions eksponowane do frontendu: //go:generate. backend/app.go. frontend/: HTML/CSS/JS. Wails runtime: wails.EventsOn(), EventsEmit(). Binding Go structs do frontendu. Pliki binarne: ~8-15MB. Szybszy startup od Electron. Wails vs Tauri: Wails — Go (łatwiejszy niż Rust). Tauri — Rust (bezpieczniejszy, mniejszy). Neutralino.js: ultra-lightweight desktop framework. Bez bundled runtime (system browser). ~5MB binary. Neutralino.os, Neutralino.filesystem API. Mniejszy ekosystem. NW.js (Node-WebKit): starszy od Electron. Chromium + Node.js podobnie. Mniej popularny. Używany przez niektóre starsze apps. Flutter Desktop: Dart + Flutter. Native rendering (nie WebView). Dobry dla cross-platform (mobile + desktop). Nie web technologie. .NET MAUI: Microsoft. Blazor Hybrid. C# + HTML. Windows-first. Qt WebEngine: C++ + WebView. Commercial license. Cross-platform native. CEF (Chromium Embedded Framework): nisko-poziomowy. Używany do budowania custom embeddings. Python + Eel: Python backend + Electron-like. Prosty setup. Mniejsza wydajność. Kiedy Tauri: team zna Rust. Mały rozmiar krytyczny. Security-focused. Kiedy Electron: max ekosystem. Node.js backend. Znane narzędzia. Legacy compatibility.",
  },
  {
    question: "Desktop apps a WebAssembly — kiedy Tauri/Electron vs PWA vs natywne?",
    answer: "Spektrum opcji dla desktop: Native apps (Swift, Kotlin, C++): najlepsza wydajność. Dostęp do wszystkich API. Brak web. Drogie w utrzymaniu (osobne kodebase). Tauri/Electron/Wails (web-based desktop): web UI + native bridge. Crossplatform. Jeden team. Mniejszy dostęp do API niż native. Electron memory. PWA (Progressive Web App): brak instalacji (web). Installation via browser. Web Share Target, File Handling, Push Notifications, Background Sync. Ograniczenia: brak pełnego file system, brak native menus, sandbox. Dobry dla: simple tools, offline web apps. WebAssembly (WASM): heavy computation w przeglądarce. Rust -> WASM. Figma używa WASM do rendering. Nie substitute dla desktop app — nadal w browser sandbox. Figma model: web app + WebAssembly dla rendering. Nie Electron. Decision framework: Potrzebujesz native API (USB, Bluetooth)? -> Tauri lub Electron. Rozmiar krytyczny? -> Tauri. Team zna Node.js? -> Electron. Team zna Go? -> Wails. Simple tool + web? -> PWA. Mobile + desktop + web? -> Flutter lub React Native + web. Dostępność offline bez install? -> PWA. Electron-like ale lżejszy? -> Tauri. Desktop + full Rust? -> Tauri. Przykłady Tauri apps 2024: Spacedrive (file manager). Heynote (scratchpad). Dokumenty, notatniki, dev tools. VS Code alternative market: Zed (native Rust, nie Tauri). Cursor (Electron). Code sharing: Tauri + Leptos (Rust WASM frontend) — pure Rust stack.",
  },
];

const desktopFrameworks = [
  { framework: "Tauri", backend: "Rust", bundleSize: "1-10MB", memory: "~30MB", webview: "System WebView", kiedy: "Rust team, bezpieczeństwo, rozmiar" },
  { framework: "Electron", backend: "Node.js", bundleSize: "50-150MB", memory: "~150MB+", webview: "Bundled Chromium", kiedy: "Max ekosystem, Node.js team" },
  { framework: "Wails", backend: "Go", bundleSize: "8-15MB", memory: "~40MB", webview: "System WebView", kiedy: "Go backend, łatwiejszy niż Rust" },
  { framework: "Neutralino.js", backend: "C++ (minimal)", bundleSize: "~5MB", memory: "~20MB", webview: "System browser", kiedy: "Ultra-light, simple apps" },
  { framework: "PWA", backend: "Brak (web)", bundleSize: "0 (web)", memory: "Tab memory", webview: "Browser", kiedy: "No install, web-first, offline" },
  { framework: "Flutter Desktop", backend: "Dart", bundleSize: "~15MB", memory: "~50MB", webview: "Custom (Skia/Impeller)", kiedy: "Mobile+desktop unified, native UI" },
];

export default function BlogTauriElectronCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Tauri vs Electron vs Wails | Fotz Studio"
        description="Tauri (Rust + WebView), Electron (Chromium + Node.js), Wails (Go), Neutralino, PWA i Flutter Desktop — porównanie desktop framework dla web developerów 2024."
        canonicalUrl="https://fotz.pl/blog/tauri-electron-wails-desktop-apps-react-typescript-2024"

        keywords="Tauri vs Electron vs Wails co to jest, Tauri vs Electron vs Wails jak działa, Tauri vs Electron vs Wails tutorial, Tauri vs Electron vs Wails przykład, czym jest Tauri vs Electron vs Wails, Tauri vs Electron vs Wails dokumentacja, Tauri vs Electron vs Wails przewodnik"

        canonical="https://fotz.pl/blog/tauri-electron-wails-desktop-apps-react-typescript-2024"
      />
      <ArticleSchema
        title="Tauri vs Electron vs Wails — desktop apps z React i TypeScript 2024?"
        description="6 frameworków desktop (Tauri/Electron/Wails/Neutralino/PWA/Flutter) — rozmiar, memory, WebView, IPC i kiedy wybrać web-based desktop framework."
        url="https://fotz.pl/blog/tauri-electron-wails-desktop-apps-react-typescript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Tauri i Electron", url: "https://fotz.pl/blog/tauri-electron-wails-desktop-apps-react-typescript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-yellow-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Tauri i Electron", href: "/blog/tauri-electron-wails-desktop-apps-react-typescript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Desktop / Tauri
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Tauri, Electron i Desktop Apps
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Tauri (Rust + 2MB), Electron (Chromium + Node.js), Wails (Go)
              i PWA — desktop apps z React i TypeScript w 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Rust + 2MB", value: "Tauri" },
                { label: "Node.js + Chromium", value: "Electron" },
                { label: "Go backend", value: "Wails" },
                { label: "No install", value: "PWA" },
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

      {/* Frameworki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 frameworków desktop — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tauri, Electron, Wails, Neutralino, PWA i Flutter —
              backend, rozmiar bundle, pamięć i WebView.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Framework</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Backend</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Bundle</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Memory</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {desktopFrameworks.map((f, i) => (
                  <tr key={f.framework} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{f.framework}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.backend}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.bundleSize}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{f.memory}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{f.kiedy}</td>
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
