import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest monorepo i jakie są zalety i wady w porównaniu do polyrepo?",
    answer: "Monorepo to podejście gdzie cały kod organizacji (lub dużego projektu) trzymany jest w jednym repozytorium Git. Polyrepo: każdy projekt/serwis w osobnym repo. Monorepo: wszystko w jednym. Zalety monorepo: Atomic commits: zmiana API + update wszystkich klientów w jednym commit. Brak broken changes między repo. Łatwe code sharing: wspólne biblioteki, utilities, konfiguracje bez npm publish. Code reuse bez versioning overhead. Unified tooling: jeden CI/CD, jedna konfiguracja linterów, jedna wersja TypeScript. Spójne standardy. Refactoring cross-project: możesz rename symbol i zaktualizować wszystkie użycia. Ułatwione code review — wszystkie zmiany widoczne razem. Lepsze discoverability: łatwo znaleźć jak coś jest zaimplementowane w innych projektach. Wady monorepo: Wielkość repo: Google monorepo ma miliardy linii kodu — standard Git nie skaluje się. Potrzeba specjalnych narzędzi (Nx, Turborepo, Bazel). CI/CD bez optymalizacji: bez affected analysis → każda zmiana buduje wszystko. Uprawnienia: trudniej kontrolować kto ma dostęp do czego (GitHub CODEOWNERS). Onboarding: nowi developerzy muszą zrozumieć duży codebase. Kto używa monorepo: Google (jeden giant monorepo), Facebook (Sapling SCM), Microsoft, Twitter, Airbnb, Shopify. W JS/TS ekosystemie: Monorepo + workspace managery (npm workspaces, pnpm workspaces, Yarn workspaces) + Nx lub Turborepo.",
  },
  {
    question: "Nx — jak używać do zarządzania monorepo?",
    answer: "Nx: najpotężniejsze narzędzie do monorepo (open-source, rozwijane przez Nrwl). Kluczowe funkcje Nx: Project Graph: Nx analizuje zależności między projektami. Wizualizacja nx graph. Affected analysis: nx affected:build — buduj tylko projekty dotknięte zmianami. Porównuje z main branch. Lokalny cache: wyniki taskow cachowane. Ten sam input = nie buduj ponownie — zwróć cache. Nx Cloud: zdalny cache współdzielony między CI i developerami. Distributed Task Execution (DTE) — rozdziel zadania między wiele agentów CI. Plugins i generators: @nx/react, @nx/node, @nx/next, @nx/nest — scaffolding i tooling. nx generate @nx/react:library my-lib — generuj nową bibliotekę z konfiguracją. Executors: predefiniowane zadania (build, test, lint, serve). Customize per projekt. Konfiguracja: nx.json — konfiguracja projektu. project.json lub package.json targets — per projekt. Structure: apps/ — aplikacje (React, Node, NestJS). libs/ — biblioteki (feature, data-access, ui, utils). Typy bibliotek: Feature libs — smart components z business logic. UI libs — dumb/presentational components. Data-access libs — API calls, state management. Utility libs — pure functions, helpers. Storybook integration: nx generate @nx/storybook:configuration. Shared Storybook dla wszystkich komponentów. Module Federation: @nx/react:host i @nx/react:remote — Module Federation z Nx. Mikro-frontendy w monorepo.",
  },
  {
    question: "Turborepo — jak przyspieszyć build w JavaScript monorepo?",
    answer: "Turborepo: high-performance build system dla JavaScript/TypeScript monorepo (Vercel). Prostszy niż Nx, skupiony na szybkości. Kluczowe cechy: Incremental builds: cachuje wyniki zadań (build, test, lint). Ten sam hash inputu = nie uruchamiaj ponownie. Remote Cache: Vercel Remote Cache lub self-hosted (S3, Redis). Współdzielony między developerami i CI. Parallel execution: uruchamia zadania równolegle uwzględniając zależności. Konfiguracja: turbo.json — definicja pipeline. Pipeline dependencies: ^build — zależność od build projektów w upstream. Przykład turbo.json: pipeline.build — dependsOn ['^build'], outputs ['dist/**']. Porównanie Nx vs Turborepo: Nx — pełny framework z generators, executors, plugins, affected analysis, project graph. Lepszy dla dużych, złożonych monorepo. Turborepo — lżejszy, prostszy, skupiony na task runner + caching. Łatwiej zacząć. Można używać razem: Turborepo jako task runner + Nx project graph. pnpm workspaces: pnpm monorepo + workspace protocol (workspace:*). Efficientne node_modules (hard links, nie duplikaty). pnpm workspace catalog (pnpm 9) — centralne wersje deps. Changesets: zarządzanie wersjami i changelogami w monorepo. Dla monorepo z publikowanymi pakietami npm. Automatyczne bumping wersji + changelog generation. GitHub Actions z monorepo: path filters — uruchom CI tylko dla dotkniętych projektów. nx affected:build na CI. Turborepo --filter na CI.",
  },
  {
    question: "Monorepo w dużych organizacjach — jak skalować?",
    answer: "Przy setkach projektów i dziesiątkach teamów monorepo ma specyficzne wyzwania. Git skalowanie: standard Git clone monorepo 100GB jest powolny. Sparse checkout — checkout tylko potrzebne foldery. Partial clone — nie pobieraj historii ani binariów. Shallow clone — tylko ostatnie N commitów (na CI). Git LFS — duże pliki (obrazy, modele) poza głównym repo. VFS for Git (Microsoft) — virtualizacja Git filesystem. Jj (Jujutsu) — nowy VCS, lepszy dla monorepo niż Git. Sapling (Facebook) — Git-compatible VCS dla dużego monorepo. Code Ownership: CODEOWNERS — przypisuj ownerów per folder. Automatic review requests od ownerów. Wymuszaj review od team lead przed merge do critical paths. Code review at scale: auto-approve dla małych, bezpiecznych zmian. Required reviewers per folder. Branch protection per project. Monorepo governance: style guides i linting spójne dla całego monorepo. Shared ESLint/TSConfig base configs. Nx workspace generators — standardowe szablony nowych projektów. Tech Radar wewnętrzny — które biblioteki są allowed/hold/assess. Backstage (IDP): software catalog dla monorepo. TechDocs — dokumentacja wbudowana w monorepo (docs-as-code). Visibility kto jest właścicielem czego. Migrating to monorepo: git subtree lub git subrepo — przenieś repo jako folder. Zachowanie historii commitów. Import po jednym serwisie, stopniowo.",
  },
  {
    question: "Nx Cloud i Remote Cache — jak optymalizować CI/CD w monorepo?",
    answer: "Problem bez cache: 100 projektów w monorepo → jeden developer zmienia jedną utility library → CI buduje i testuje wszystkie 100. Czas: 2 godziny. Z Nx affected + cache: CI buduje tylko projekty dotknięte zmianą + cache dla już zbudowanych. Czas: 5 minut. Nx Cloud: Remote Cache: wyniki taskow (build, test, lint) uploadowane do cloud. Inny developer lub CI runner pobiera cache zamiast budować. Artefakty (dist, coverage) współdzielone. Distributed Task Execution: zamiast jeden CI runner buduje sekwencyjnie → Nx Cloud rozdziela tasks między N agentów. Dramatyczne skrócenie czasu CI. Effortless DTE: jeden workflow config → Nx Cloud zarządza agentami. Nx Cloud free tier: 500 computation hours za darmo. Paid plany dla więcej. Alternativa: Turborepo Remote Cache: self-hosted (S3, Redis, custom). Vercel Remote Cache (darmowy z Vercel). Remote Cache setup (Nx): nx-cloud.json z accessToken + nxCloudUrl. CI: NX_CLOUD_AUTH_TOKEN env variable. Metryke do monitorowania: Pipeline duration trend. Cache hit rate (cel: 80%+). Affected percentage — ile projektów dotknięte per PR. Tasks per contributor. Granularity zadań: Rozbij duże zadania na mniejsze — lepsze cache hit. Nx — możesz cache per plik nie per projekt (nx atomizer). Turborepo — cache per task output. Selective test execution: tylko testy dla dotkniętych plików (Jest --testPathPattern, pytest -k). Nx automatycznie robi to przez affected analysis.",
  },
];

const monorepoTools = [
  { narzedzie: "Nx", typ: "Full monorepo framework", sila: "Project graph, affected analysis, generators, plugins, DTE, cloud cache", ekosystem: "JS/TS, React, Node, Angular, Nest" },
  { narzedzie: "Turborepo", typ: "Task runner + cache", sila: "Prosty w setup, szybki, remote cache, parallel execution", ekosystem: "JS/TS (agnostyczny wobec frameworków)" },
  { narzedzie: "Bazel", typ: "Build system (Google)", sila: "Hermetic builds, massive scale (Google/Twitter), multi-language", ekosystem: "Multi-language (JS, Java, Go, Python)" },
  { narzedzie: "pnpm workspaces", typ: "Package manager", sila: "Efektywne node_modules, workspace protocol, szybki install", ekosystem: "JS/TS ekosystem" },
  { narzedzie: "Lerna", typ: "Monorepo management (legacy)", sila: "Klasyczny, dobry dla npm publishing, Changesets integracja", ekosystem: "JS/TS, publishing libraries" },
  { narzedzie: "Changesets", typ: "Versioning + changelog", sila: "Semantic versioning, changelog generation, automated npm publish", ekosystem: "JS/TS libraries w monorepo" },
];

export default function BlogMonorepoCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Monorepo — co to jest, Nx, Turborepo, pnpm workspaces i Nx Cloud? | Fotz.pl"
        description="Monorepo: zalety vs polyrepo, Nx vs Turborepo, pnpm workspaces, affected analysis, Remote Cache, DTE i jak skalować monorepo w dużej organizacji."
        canonicalUrl="https://fotz.pl/blog/monorepo-co-to-jest-nx-turborepo-pnpm-workspaces-nx-cloud"
      />
      <ArticleSchema
        title="Monorepo — co to jest, Nx, Turborepo, pnpm workspaces i Nx Cloud?"
        description="Monorepo: 6 narzędzi (Nx/Turborepo/Bazel/pnpm/Lerna/Changesets), affected analysis, remote cache, DTE — jak skalować CI/CD w monorepo."
        url="https://fotz.pl/blog/monorepo-co-to-jest-nx-turborepo-pnpm-workspaces-nx-cloud"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Monorepo", url: "https://fotz.pl/blog/monorepo-co-to-jest-nx-turborepo-pnpm-workspaces-nx-cloud" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-cyan-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Monorepo", href: "/blog/monorepo-co-to-jest-nx-turborepo-pnpm-workspaces-nx-cloud" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-cyan-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Tooling / Developer Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Monorepo
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden repo, dziesiątki projektów — bez chaosu. Nx i Turborepo
              sprawiają że CI buduje tylko to co się zmieniło, a remote cache
              sprawia że kolejni developerzy nie powtarzają tej pracy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pełny framework", value: "Nx" },
                { label: "Prostszy task runner", value: "Turborepo" },
                { label: "Affected analysis", value: "Tylko zmienione" },
                { label: "Remote Cache", value: "Nx Cloud / Vercel" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-cyan-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi do monorepo</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ekosystem monorepo obejmuje task runners, package managery,
              build systems i narzędzia do wersjonowania.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {monorepoTools.map((t) => (
              <FadeInView key={t.narzedzie}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-1">{t.narzedzie}</h3>
                  <p className="text-xs text-cyan-700 font-medium mb-2">{t.typ}</p>
                  <p className="text-gray-700 text-sm mb-2">{t.sila}</p>
                  <p className="text-xs text-gray-500">Ekosystem: {t.ekosystem}</p>
                </div>
              </FadeInView>
            ))}
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
