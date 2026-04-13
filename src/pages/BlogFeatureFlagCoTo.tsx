import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są Feature Flags?",
    answer: "Feature Flags (znane też jako Feature Toggles lub Feature Switches) to technika programistyczna pozwalająca włączać i wyłączać funkcje produktu bez deployowania nowego kodu. Flaga to prosta warunki w kodzie: 'jeśli flaga X jest włączona — pokaż nową funkcję; jeśli wyłączona — pokaż starą'. Feature Flags umożliwiają: deploy kodu bez releasu feature (Continuous Delivery), stopniowe udostępnianie funkcji (rollout 1% → 10% → 100% userów), A/B testowanie nowych funkcji na segmencie użytkowników, szybkie wycofanie feature gdy coś pójdzie źle (kill switch), beta dostęp dla wybranych klientów (early access programs).",
  },
  {
    question: "Jakie są rodzaje Feature Flags?",
    answer: "Typy Feature Flags: Release Flags — ukrywają niedokończoną funkcję podczas developmentu. Mergowany do main bez impaktu na użytkowników. Usuwane gdy feature jest gotowy. Experiment Flags — A/B test nowej funkcji na % userów. Mierzysz metryki i decydujesz który wariant wygrał. Ops Flags — sterowanie zachowaniem systemu w produkcji bez deploymentu. Np. wyłączenie nieesencjonalnego serwisu podczas incydentu. Permission Flags — dostęp do funkcji dla konkretnych planów, klientów lub ról. Np. Enterprise-only features. Kill Switches — szybkie wyłączenie problematycznej funkcji bez hotfixu i deploymentu.",
  },
  {
    question: "Jakie są korzyści z Feature Flags?",
    answer: "Korzyści Feature Flags: Continuous Delivery bez ryzyka — deploy code continuously, release kiedy chcesz. Szybsze feedback loops — testuj z prawdziwymi użytkownikami zanim releaseując do wszystkich. Bezpieczniejszy rollout — stopniowe udostępnianie na 1%, 10%, 50%, 100% userów. Szybka reakcja na problemy — kill switch zamiast rollback deploymentu. Personalizacja — różne doświadczenia dla różnych segmentów (plan, rola, region). Feature Flags są kluczowym elementem kultury Continuous Delivery w firmach jak Facebook, LinkedIn, GitHub — gdzie deploy kodu i release feature są osobnymi decyzjami. Ryzyko: tech debt gdy flagi nie są czyszczone — 'flag graveyard' to prawdziwy problem.",
  },
  {
    question: "Jak wdrożyć Feature Flags?",
    answer: "Wdrożenie Feature Flags: Prosty start — hardcoded boolean w kodzie. Szybki, ale nie dynamiczny i wymaga deploymentu do zmiany. Config file — flagi w pliku konfiguracyjnym lub environment variable. Dynamiczna zmiana bez deploymentu. Feature Flag Service — dedykowana platforma (LaunchDarkly, Flagsmith, Split.io, Unleash) z UI do zarządzania flagami, targeting rules, analytics. Best practices: Nazywaj flagi opisowo (enable_new_checkout_v2 nie flag_123). Dokumentuj cel i planowaną datę usunięcia każdej flagi. Regularnie czyść stare flagi (flag lifecycle management). Testuj oba stany flagi (on i off) w testach automatycznych. Nie używaj flag jako długoterminowej konfiguracji — mają być tymczasowe.",
  },
  {
    question: "Czym Feature Flags różnią się od A/B Testów?",
    answer: "Feature Flags vs. A/B Testy: A/B Test to eksperyment — randomizujesz użytkowników do wariantu A lub B, mierzysz który wygrywa statystycznie i implementujesz zwycięzcę. Feature Flags to mechanizm — infrastruktura która umożliwia m.in. A/B testowanie, ale ma znacznie szersze zastosowania (rollout, kill switches, beta access). A/B Test zawsze ma jasny cel (konwersja, engagement) i statystyczne kryterium sukcesu. Feature Flag może być używany bez żadnego A/B testu — np. jako rollout mechanism dla nowej funkcji której nie testujesz, tylko stopniowo udostępniasz. Najlepsze praktyki łączą oba: Feature Flags jako infrastruktura, A/B Testing jako metodologia decyzyjna.",
  },
];

const flagTypes = [
  {
    typ: "Release Flag",
    cel: "Ukrycie niedokończonego kodu w produkcji podczas developmentu",
    kiedy: "Gdy chcesz mergować do main bez releaseowania feature",
    lifecycle: "Usuwana gdy feature jest gotowy i stabliany (dni-tygodnie)",
    ryzyko: "Jeśli nie usunięta — zaśmieca kod i konfunduje innych developerów",
    kolor: "blue",
  },
  {
    typ: "Experiment Flag",
    cel: "A/B test nowej funkcji lub wariantu na % użytkowników",
    kiedy: "Gdy chcesz zmierzyć czy zmiana poprawia metrykę (konwersja, engagement)",
    lifecycle: "Usuwana po zakończeniu eksperymentu i decyzji (tygodnie)",
    ryzyko: "Długo trwające eksperymenty komplikują codebase",
    kolor: "green",
  },
  {
    typ: "Ops Flag",
    cel: "Sterowanie zachowaniem systemu w runtime bez deploymentu",
    kiedy: "Kill switch dla problematycznej funkcji, circuit breaker, rate limiting",
    lifecycle: "Może być stała — to de facto konfiguracja systemu (tygodnie-miesiące)",
    ryzyko: "Jeśli używana jako długoterminowa konfiguracja — lepiej użyć config service",
    kolor: "purple",
  },
  {
    typ: "Permission Flag",
    cel: "Dostęp do funkcji per plan, klient lub rola użytkownika",
    kiedy: "Enterprise-only features, beta programs, admin-only tools",
    lifecycle: "Może być długoterminowa — ale powinna być w entitlement system, nie flagach",
    ryzyko: "Mieszanie flagów z entitlements komplikuje billing i authorization",
    kolor: "orange",
  },
];

const flagPlatforms = [
  { platforma: "LaunchDarkly", typ: "SaaS (commercial)", opis: "Najpopularniejsza komercyjna platforma. SDK dla wszystkich języków, real-time targeting, analityka.", dla: "Scale-upy i enterprise z budżetem na narzędzia" },
  { platforma: "Flagsmith", typ: "Open-source + SaaS", opis: "Open-source alternatywa dla LaunchDarkly. Self-hosted lub cloud. Dobre SDK.", dla: "Startupy chcące open-source z opcją hosted" },
  { platforma: "Unleash", typ: "Open-source", opis: "Popularna open-source platforma z bogatymi targeting options. Self-hosted.", dla: "Firmy z zasobami do self-hostingu" },
  { platforma: "Split.io", typ: "SaaS (commercial)", opis: "Silna w A/B testing + feature flags. Dobra analityka eksperymentów.", dla: "Firmy gdzie eksperymenty są priorytetem" },
  { platforma: "Custom (env vars / config)", typ: "DIY", opis: "Environment variables lub config file. Brak UI, brak targeting — ale zero kosztu.", dla: "Wczesne startupy lub proste use cases" },
];

export default function BlogFeatureFlagCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Feature Flags — co to jest i jak stosować? | Fotz.pl"
        description="Feature Flags (Feature Toggles) — typy flag, korzyści, platformy (LaunchDarkly, Flagsmith) i różnica vs A/B Testing. Kompletny przewodnik dla Product i…"
        canonicalUrl="https://fotz.pl/blog/feature-flags-co-to-jest-jak-stosowac"

        keywords="Feature Flags co to jest, Feature Flags definicja, czym jest Feature Flags, Feature Flags przykłady, jak działa Feature Flags, Feature Flags znaczenie, Feature Flags przewodnik"

        canonical="https://fotz.pl/blog/feature-flags-co-to-jest-jak-stosowac"
      />
      <ArticleSchema
        title="Feature Flags — co to jest i jak stosować?"
        description="Kompletny przewodnik po Feature Flags: typy, korzyści, platformy i best practices dla Continuous Delivery."
        url="https://fotz.pl/blog/feature-flags-co-to-jest-jak-stosowac"
        datePublished="2024-02-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Feature Flags", url: "https://fotz.pl/blog/feature-flags-co-to-jest-jak-stosowac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Feature Flags", href: "/blog/feature-flags-co-to-jest-jak-stosowac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Product Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Feature Flags
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Feature Flags oddzielają deployment kodu od releasu funkcji.
              Dzięki nim możesz mergować kod do głównej gałęzi codziennie
              — i decydować kiedy i dla kogo dana funkcja jest widoczna.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typów flag", value: "4" },
                { label: "Popularnych platform", value: "5+" },
                { label: "Kluczowa korzyść", value: "Kill Switch" },
                { label: "Ryzyko bez czyszczenia", value: "Flag Debt" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy flag */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy Feature Flags</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ flagi ma inny cel, lifecycle i ryzyko. Mieszanie typów bez świadomości
              prowadzi do flag graveyardów — starych flag których nikt nie usuwa.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {flagTypes.map((f) => (
              <FadeInView key={f.typ}>
                <div className={`rounded-xl border-2 p-6 ${
                  f.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  f.kolor === "green" ? "border-green-200 bg-green-50" :
                  f.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    f.kolor === "blue" ? "text-blue-800" :
                    f.kolor === "green" ? "text-green-800" :
                    f.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>{f.typ}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Cel</div>
                      <p className="text-sm text-gray-700 mb-2">{f.cel}</p>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Kiedy stosować</div>
                      <p className="text-sm text-gray-700">{f.kiedy}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase mb-1">Lifecycle</div>
                      <p className="text-sm text-gray-700 mb-2">{f.lifecycle}</p>
                      <div className="text-xs font-bold text-red-600 uppercase mb-1">Ryzyko</div>
                      <p className="text-sm text-gray-700">{f.ryzyko}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Platformy */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platformy Feature Flags</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór platformy zależy od skali, budżetu i potrzeb. Dla prostych use cases
              wystarczy config file. Dla zaawansowanego targeting i A/B testów — dedykowana platforma.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {flagPlatforms.map((p, i) => (
              <FadeInView key={p.platforma}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-violet-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-bold text-gray-900">{p.platforma}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{p.typ}</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-1">{p.opis}</p>
                      <p className="text-xs text-violet-600 font-medium">{p.dla}</p>
                    </div>
                  </div>
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
