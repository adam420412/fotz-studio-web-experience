import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Git Flow i kiedy stosować trunk-based development?",
    answer: "Git Flow (Vincent Driessen, 2010): ustrukturyzowany model branchowania. Gałęzie: main (produkcja), develop (integracja), feature/* (nowe funkcje), release/* (przygotowanie do releasa), hotfix/* (pilne poprawki). Flow: feature/* -> develop -> release/* -> main + tag. Wady Git Flow: skomplikowany dla small teams. Long-lived branches = merge hell. Ciągła integracja trudniejsza. Dobre dla: scheduled releases (software z numerowanymi wersjami). GitHub Flow (GitHub, 2011): prostszy. main + feature branches. Pull Request -> code review -> merge to main. Deploy po każdym merge. Continuous deployment friendly. Trunk-Based Development (TBD): jeden główny branch (trunk/main). Krótkotrwałe feature branches (max 1-2 dni). Feature flags zamiast długich gałęzi. Ci każdy commit -> build + test. CD każdy zielony build -> deploy. Zalety TBD: minimalna integracja konfliktów. Continuous delivery native. Szybki feedback. Wady: wymaga dyscypliny, feature flags, strong CI. Kiedy co: Git Flow — release-based desktop/mobile apps. GitHub Flow — web apps z CD. TBD — dojrzałe zespoły, microservices. Forking workflow: dla open-source. Fork repo. PR do upstream. Contributor nie ma write access do main repo. GitLab Flow: środek między Git Flow a TBD. Environment branches (staging, production). Feature flags integracja. Release branches opcjonalne.",
  },
  {
    question: "Conventional Commits, Semantic Release i automatyczny changelog?",
    answer: "Conventional Commits (1.0.0): specyfikacja dla wiadomości commitów. Format: type(scope): description. Typy: feat (nowa funkcja), fix (bugfix), docs (dokumentacja), style (formatowanie), refactor, test, chore (buildy, deps). BREAKING CHANGE: footer lub ! po type. Przykłady: feat(auth): add OAuth2 login. fix(api): handle null response from payment. refactor!: remove deprecated UserContext API. BREAKING CHANGE: UserContext removed. Korzyści: automatyczny changelog. semantic versioning automatyczny. Czytelna historia. Angular commit conventions: inspiracja dla Conventional Commits. Używane w Angular monorepo. Commitlint: npm install @commitlint/cli @commitlint/config-conventional. commitlint.config.js: {extends: ['@commitlint/config-conventional']}. Husky hook: commit-msg -> npx --no commitlint --edit. Commitizen (cz-cli): interaktywne commitowanie. npx cz zamiast git commit. Guided prompts: select type, scope, description. Semantic Release: automatyczne versioning i publishing. Analizuje commits od ostatniego release. feat -> minor bump. fix -> patch bump. BREAKING CHANGE -> major bump. Generuje CHANGELOG.md. Tworzy GitHub Release. Publikuje na npm. .releaserc.json konfiguracja. Changesets (alternatywa): ręczne opisy zmian per PR. popularny w monorepo (pnpm workspaces). pnpm changeset add -> select packages -> describe. pnpm changeset version -> bumps versions. GitHub Release notes: automatyczne z PR labels. release-please (Google): PR-based releases. Conventional commits analysis.",
  },
  {
    question: "Code Review — pull request best practices i GitHub workflow?",
    answer: "Pull Request (PR) best practices: małe PR (max 400 linii diff). Jeden PR = jedna zmiana. Opis: co zmieniono i dlaczego. Screenshots dla UI changes. Reviewer checklist. Draft PR: work-in-progress. Oznacz jako 'ready for review' po ukończeniu. CI/CD na PR: testy muszą przejść przed review. Lint, type check, unit tests, E2E. Test coverage check. Security scan (CodeQL, Snyk). PR templates: .github/PULL_REQUEST_TEMPLATE.md. Checkboxes: testy dodane, docs zaktualizowane, screenshot. Code review guidelines: Approve szybko (< 24h). Konstruktywna feedback. Pytaj o uzasadnienie zamiast krytykować. Nitpick label dla minor issues. LGTM (Looks Good To Me). Required reviewers: CODEOWNERS file. .github/CODEOWNERS: *.tsx @frontend-team. /api/* @backend-team. Branch protection rules: require PR. require status checks (CI). require code review (min 1-2). dismiss stale reviews. restrict force push. Squash and merge: jeden commit per PR w main. Czystsza historia. Bisect łatwiejszy. Merge commit: zachowuje historię. PR traceability. Rebase and merge: liniowa historia bez merge commits. Git bisect: git bisect start. git bisect bad HEAD. git bisect good v1.0. Automatycznie finuje regresję. GitHub Copilot Review: AI code review. Sugestie security. Automatyczna dokumentacja. Nie zastępuje human review.",
  },
  {
    question: "Git rebasing, squashing i zaawansowane operacje?",
    answer: "git rebase: przenosi commity na nową bazę. git rebase main — rebazuj feature branch na aktualny main. Rozwiązuj konflikty commit po commit. git rebase --continue po resolving. Vs merge: rebase = liniowa historia. merge = merge commit, zachowuje context. Interactive rebase: git rebase -i HEAD~5. pick = zachowaj. squash = połącz z poprzednim. fixup = squash + odrzuć message. reword = zmień message. drop = usuń commit. edit = zatrzymaj dla amend. Squash commits: git rebase -i HEAD~3 -> squash -> nowy message. Czystsza historia przed merge do main. git commit --amend: zmień ostatni commit (message lub staged files). Nie używaj po push (historia rozbieżna). git cherry-pick: wybierz konkretny commit. git cherry-pick abc123. Przydatny do: port hotfix z main do release branch. git stash: tymczasowe schowanie zmian. git stash push -m 'WIP feature'. git stash pop — przywróć. git stash list, apply, drop. git reflog: historia wszystkich HEAD movements. Przywróć utracone commity. git reflog show -> git checkout lub reset. git bisect: bisekcja do znalezienia regresji. git bisect start. bad HEAD, good v1.0. Automatyczne lub manualne. git worktree: wiele working trees z jednego repo. git worktree add ../hotfix hotfix/critical-bug. Równoległa praca na wielu branchach. git hooks: pre-commit, commit-msg, pre-push. Husky zarządza hookami. Lefthook: Go-based, szybszy niż Husky.",
  },
  {
    question: "Git w zespole — strategie merge, konflikty i monorepo git?",
    answer: "Merge strategies: --ff (fast-forward): prosta linia, brak merge commit. --no-ff (no fast-forward): zawsze merge commit. --squash: jeden commit per feature branch. GitHub: squash and merge (zalecane dla feature). merge commit (dla release). rebase and merge (dla patch/fix). Konflikt resolution: git mergetool — GUI merger. VSCode: three-way merge editor. Accept current / incoming / both. Manual edit. Uwaga na: auto-resolved conflicts mogą być logicznie błędne. Zawsze review po merge. GitLens (VSCode extension): git blame w edytorze. History per line. PR integration. Graph view. Git Large File Storage (LFS): dla binarnych plików (design assets, videos). git lfs track '*.psd'. .gitattributes. Przechowuje pointer zamiast binarki. Monorepo git strategie: jedna historia dla wszystkich pakietów. Atomic commits (API + client razem). git blame traverse packages. Sparse checkout: git sparse-checkout set packages/frontend. Praca tylko na podzbiorze repozytorium. Przydatny w dużych monorepo. GitHub Actions dla monorepo: paths filter: on push paths: ['packages/api/**']. Triggeruj tylko dotknięte pakiety. Nx affected: nx affected:build, nx affected:test. Tylko zmienione + zależne. Turborepo: cache per package. Incremental builds. git hooks best practices: pre-commit: lint + format (fast). pre-push: full test suite (slow). commit-msg: commitlint. Husky + lint-staged: lint tylko staged files. lint-staged: {'*.{ts,tsx}': ['eslint --fix', 'prettier --write']}.",
  },
];

const gitWorkflows = [
  { workflow: "Trunk-Based Development", branches: "main + short-lived features", release: "Continuous (każdy commit)", team: "Zaawansowany zespół", kiedy: "Microservices, CD pipeline, feature flags" },
  { workflow: "GitHub Flow", branches: "main + feature branches", release: "Po każdym PR merge", team: "Małe-średnie zespoły", kiedy: "Web apps, SaaS, startups" },
  { workflow: "Git Flow", branches: "main, develop, feature, release, hotfix", release: "Planowane (wersjonowane)", team: "Duże zespoły, scheduled releases", kiedy: "Desktop software, mobile apps" },
  { workflow: "GitLab Flow", branches: "main + environment branches", release: "Per environment (staging/prod)", team: "Średnie-duże zespoły", kiedy: "Staging environment required" },
  { workflow: "Forking Workflow", branches: "Fork + feature, PR do upstream", release: "Maintainer decision", team: "Open-source contributors", kiedy: "Open-source, zewnętrzni kontrybutorzy" },
  { workflow: "Release Flow (Microsoft)", branches: "main + release branches", release: "Per sprint (3-weekly)", team: "Enterprise, large orgs", kiedy: "Azure DevOps, Microsoft ecosystem" },
];

export default function BlogGitWorkflowCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Git Flow, Trunk-Based, Conventional Commits | Fotz Studio"
        description="Git Flow vs GitHub Flow vs Trunk-Based Development, Conventional Commits, Semantic Release, code review PR best practices, rebase, squash i monorepo git."
        canonicalUrl="https://fotz.pl/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024"

        keywords="Git Flow, Trunk-Based, Conventional Commits co to jest, Git Flow, Trunk-Based, Conventional Commits definicja, czym jest Git Flow, Trunk-Based, Conventional Commits, Git Flow, Trunk-Based, Conventional Commits przykłady, jak działa Git Flow, Trunk-Based, Conventional Commits, Git Flow, Trunk-Based, Conventional Commits znaczenie, Git Flow, Trunk-Based, Conventional Commits przewodnik"

        canonical="https://fotz.pl/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024"
      />
      <ArticleSchema
        title="Git Flow, Trunk-Based, Conventional Commits — strategie Git 2024?"
        description="6 workflow Git (TBD/GitHub Flow/Git Flow/GitLab Flow/Forking/Release Flow) — Conventional Commits, Semantic Release, PR best practices, rebase i monorepo."
        url="https://fotz.pl/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Git Workflow", url: "https://fotz.pl/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-zinc-900 to-stone-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Git Workflow", href: "/blog/git-flow-trunk-based-conventional-commits-strategie-git-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-zinc-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Git / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategie Git i Workflow
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Git Flow, Trunk-Based Development, Conventional Commits,
              Semantic Release i code review best practices w 2024.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "CI/CD friendly", value: "Trunk-Based" },
                { label: "Auto versioning", value: "Semantic" },
                { label: "Commit standard", value: "Conventional" },
                { label: "PR workflow", value: "GitHub Flow" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-zinc-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii Git Workflow</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Trunk-Based, GitHub Flow, Git Flow, GitLab Flow, Forking i Release Flow —
              branchowanie, release cadence i najlepszy case użycia.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Workflow</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Gałęzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Release</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {gitWorkflows.map((w, i) => (
                  <tr key={w.workflow} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{w.workflow}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{w.branches}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{w.release}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{w.kiedy}</td>
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
