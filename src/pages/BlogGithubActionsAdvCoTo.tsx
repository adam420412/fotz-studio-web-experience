import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "GitHub Actions zaawansowane — reusable workflows i composite actions?",
    answer: "Reusable Workflows: wywołaj workflow z innego. DRY dla CI. Definicja: .github/workflows/deploy.yml. on: workflow_call: inputs: environment: required: true, type: string. secrets: API_KEY: required: true. Wywołanie: jobs: deploy: uses: ./.github/workflows/deploy.yml@main. with: environment: production. secrets: API_KEY: ${{ secrets.API_KEY }}. Cross-repo: uses: myorg/shared-workflows/.github/workflows/test.yml@v1. Composite Actions: .github/actions/setup-node/action.yml. name: Setup Node. inputs: node-version: required: false, default: '20'. runs: using: composite. steps: - uses: actions/setup-node@v4, with: {node-version: ${{ inputs.node-version }}}. - run: npm ci, shell: bash. Wywołanie: uses: ./.github/actions/setup-node. with: {node-version: '20'}. Job matrix: strategy: matrix: os: [ubuntu-latest, windows-latest]. node: [18, 20, 22]. Testuj wszystkie kombinacje. matrix.os, matrix.node dostępne. Artifacts: actions/upload-artifact@v4. actions/download-artifact@v4. Między jobs. Cache: actions/cache@v4. Klucz cache. Restore keys fallback. npm cache: key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}. Concurrency: concurrency: group: ${{ github.workflow }}-${{ github.ref }}. cancel-in-progress: true. Anuluj stare runy.",
  },
  {
    question: "Changesets — wersjonowanie pakietów w monorepo?",
    answer: "Changesets: Atlassian. Wersjonowanie pakietów. Monorepo management. Changelog generation. Instalacja: npm install -D @changesets/cli. npx changeset init. Tworzy .changeset/. Dodaj changeset: npx changeset. Wybierz pakiety. Wybierz typ: patch|minor|major. Dodaj opis. Plik w .changeset/nazwa-hash.md. Aktualizuj wersje: npx changeset version. Czyta changesets. Aktualizuje package.json. Generuje CHANGELOG.md. Publikuj: npx changeset publish. Publishes do npm. GitHub Actions z Changesets: .github/workflows/release.yml. changeset-bot na PR: komentuje czy PR ma changeset. Changesets Release Action: - uses: changesets/action@v1. secrets: GITHUB_TOKEN, NPM_TOKEN. Tworzy PR z wersjami. Merge PR = publikacja. Snapshot releases: npx changeset version --snapshot. Testowe wersje. 1.0.0-snapshot-20240101. Pre-release: npx changeset pre enter alpha. npx changeset. npx changeset version. Wychodzi z: npx changeset pre exit. Linked packages: powiązane wersje razem. fixed: [[pkg-a, pkg-b]] — zawsze ta sama wersja. Ignore packages: ignoredPatterns w changeset config. Wewnętrzne pakiety. Monorepository tip: workspace protokół w package.json. Changesets + pnpm workspaces idealnie. Alternatives: release-please (Google). semantic-release. np (dla single packages).",
  },
  {
    question: "semantic-release i release-please — automatyczne wersjonowanie?",
    answer: "semantic-release: Stephan Bönnemann. Conventional Commits -> wersja automatycznie. Instalacja: npm install -D semantic-release. Pluginy: @semantic-release/git. @semantic-release/github. @semantic-release/npm. @semantic-release/changelog. .releaserc.json: {branches: ['main'], plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/changelog', '@semantic-release/npm', '@semantic-release/git', '@semantic-release/github']}. Conventional Commits: feat: -> minor version. fix: -> patch version. feat!: lub BREAKING CHANGE: -> major version. build:, chore:, ci:, docs:, style:, refactor:, perf:, test: -> brak release. GitHub Actions: name: Release. on: push: branches: [main]. jobs: release: runs-on: ubuntu-latest. steps: checkout, setup-node, npm ci. - name: Release, env: GITHUB_TOKEN, NPM_TOKEN. run: npx semantic-release. Release Please: Google. PR-based release. Działanie: PR z wersjami po każdym merge. Merge PR = release. release-please-action: - uses: googleapis/release-please-action@v4. with: release-type: node. token: ${{ secrets.GITHUB_TOKEN }}. Conventional Commits requirement. CHANGELOG automatyczny. Porównanie: semantic-release — push-based (automatyczny release). release-please — PR-based (review przed release). Changesets — manual (developer wybiera wersję). Wybór: single package npm -> semantic-release. monorepo npm -> changesets. Google cloud -> release-please.",
  },
  {
    question: "GitHub Actions security — secrets, OIDC i permissions?",
    answer: "Secrets: Settings -> Secrets. GITHUB_TOKEN — automatyczny. Dostęp: ${{ secrets.MY_SECRET }}. Organization secrets: współdzielone. Environment secrets: per-environment. OIDC (OpenID Connect): bez przechowywania AWS/GCP credentials. GitHub jako identity provider. AWS assume-role z OIDC. permissions: id-token: write. contents: read. AWS: - uses: aws-actions/configure-aws-credentials@v4. with: role-to-assume: arn:aws:iam::...:role/github-actions. aws-region: eu-central-1. GCP: - uses: google-github-actions/auth@v2. with: workload_identity_provider: projects/.../workloadIdentityPools/.../providers/github. service_account: sa@project.iam.gserviceaccount.com. Permissions granularne: permissions: contents: read. pull-requests: write. issues: write. id-token: write. Default: write dla repo owner, read dla fork PRs. Least privilege: specify explicite. Pin actions: uses: actions/checkout@v4 (dobrze). uses: actions/checkout@sha256hash (najlepiej). Zapobiega supply chain attacks. Dependabot dla actions: .github/dependabot.yml. package-ecosystem: github-actions. schedule: weekly. Auto-update actions. Allow list: actions list dozwolonych. Allow specific orgs. Code scanning: CodeQL. Dependabot security. Secret scanning. Branch protection: require status checks. Require PR reviews. Dismiss stale reviews. Prevent force push.",
  },
  {
    question: "GitHub Actions optymalizacja — cache, parallel jobs i speed tips?",
    answer: "Cache npm/pnpm: key: node-${{ hashFiles('**/package-lock.json') }}. restore-keys: node-. path: ~/.npm. pnpm: path: ~/.pnpm-store. key: pnpm-${{ hashFiles('**/pnpm-lock.yaml') }}. Turbo cache: npx turbo build --cache-dir=.turbo. Remote cache: Vercel Remote Cache. TURBO_TOKEN, TURBO_TEAM. Nx cache: nx affected --target=build. Nx Cloud dla remote cache. Parallel jobs: potrzebuje: poprzedni job. needs: [test, lint]. Fan-out: wiele jobs jednocześnie. Fan-in: czekaj na wszystkie. Conditional steps: if: github.ref == 'refs/heads/main'. if: github.event_name == 'pull_request'. if: contains(github.event.pull_request.labels.*.name, 'deploy'). if: failure() — gdy poprzedni failed. continue-on-error: true — ignoruj błąd. Job outputs: outputs: version: ${{ steps.version.outputs.version }}. steps: id: version, run: echo 'version=1.0.0' >> $GITHUB_OUTPUT. Job timeout: timeout-minutes: 30. Domyślnie 360 min. Avoid waiting. Faster containers: ubuntu-latest = ubuntu-22.04. Szybki. Caching Docker layers: buildx cache. Cache from: type=gha. GitHub-hosted runners: ubuntu, windows, macos. macos najdroższy. Self-hosted runners: własna maszyna. Szybsze. Bez limitu minut. Tańsze. Runner grupy: organizacja. Concurrency limit. Labels niestandardowe. Debugging: ACTIONS_STEP_DEBUG: true (secret). RUNNER_DEBUG logs. tmate action — SSH do runnera.",
  },
];

const cicdTools = [
  { narzedzie: "semantic-release", typ: "Auto versioning", opis: "Conventional Commits -> wersja, changelog, npm publish" },
  { narzedzie: "Changesets", typ: "Manual versioning", opis: "Developer wybiera bump, idealny dla monorepo" },
  { narzedzie: "release-please", typ: "PR-based release", opis: "Google, PR z wersjami, merge = release" },
  { narzedzie: "Reusable Workflows", typ: "DRY CI", opis: "Wywołuj workflows z innych repos/workflows" },
  { narzedzie: "Composite Actions", typ: "DRY Steps", opis: "Groupuj kroki jako custom action" },
  { narzedzie: "OIDC + AWS/GCP", typ: "Keyless auth", opis: "Bez przechowywania credentials, identity federacja" },
];

export default function BlogGithubActionsAdvCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GitHub Actions zaawansowane — Changesets, semantic-release, OIDC i optymalizacja 2024 | Fotz.pl"
        description="GitHub Actions zaawansowane 2024: reusable workflows, composite actions, Changesets (monorepo versioning), semantic-release, release-please, OIDC (keyless auth) i cache optymalizacja."
        canonicalUrl="https://fotz.pl/blog/github-actions-changesets-semantic-release-oidc-optymalizacja-2024"
      />
      <ArticleSchema
        title="GitHub Actions zaawansowane — Changesets, semantic-release, OIDC i optymalizacja 2024?"
        description="6 zaawansowanych technik CI/CD (reusable workflows/composite actions/Changesets/semantic-release/OIDC/optymalizacja) — automatyczne wersjonowanie i security best practices."
        url="https://fotz.pl/blog/github-actions-changesets-semantic-release-oidc-optymalizacja-2024"
        datePublished="2024-12-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GitHub Actions zaawansowane 2024", url: "https://fotz.pl/blog/github-actions-changesets-semantic-release-oidc-optymalizacja-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-zinc-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "GitHub Actions zaawansowane", href: "/blog/github-actions-changesets-semantic-release-oidc-optymalizacja-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              CI/CD / GitHub Actions / DevOps
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GitHub Actions zaawansowane
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Reusable workflows, Changesets, semantic-release,
              OIDC (keyless auth) i optymalizacja CI/CD.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Monorepo", value: "Changesets" },
                { label: "Auto release", value: "semantic-rel." },
                { label: "Keyless", value: "OIDC" },
                { label: "DRY CI", value: "Reusable WF" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-gray-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 narzędzi i technik CI/CD — typ i opis</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              semantic-release, Changesets, release-please, reusable workflows, composite actions i OIDC —
              zastosowanie i kiedy.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzie</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                </tr>
              </thead>
              <tbody>
                {cicdTools.map((t, i) => (
                  <tr key={t.narzedzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{t.narzedzie}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.typ}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
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
