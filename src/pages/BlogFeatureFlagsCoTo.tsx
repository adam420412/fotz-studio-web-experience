import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są Feature Flags i jak działają?",
    answer: "Feature Flags (zwane też Feature Toggles lub Feature Switches) to technika pozwalająca włączać i wyłączać funkcje w aplikacji bez wdrażania nowego kodu. Zamiast kondycji czy funkcja jest dostępna zależy od kodu — zależy od konfiguracji zewnętrznej systemu. Podstawowy mechanizm: if (featureFlags.isEnabled('new-checkout', user)) { showNewCheckout(); } else { showOldCheckout(); }. Wartość flag pobierana z centralnego systemu (nie z kodu). Kluczowe use cases: Trunk-based development — deweloperzy commitują do main za flagą (bez long-lived branches). Canary releases — włącz funkcję dla 5% użytkowników, monitoruj, stopniowo zwiększaj. A/B testing — 50% widzi wariant A, 50% wariant B — mierz konwersję. Kill switch — natychmiastowe wyłączenie funkcji bez deploymentu jeśli coś pójdzie nie tak. Rollout per user segment — najpierw internal users, potem beta, potem wszyscy. Ops toggles — wyłącz kosztowne funkcje przy dużym obciążeniu (circuit breaker). Typy flag wg Fowler: Release toggle — ukryj niegotową funkcję. Experiment toggle — A/B test. Ops toggle — wydajność / operacyjne. Permission toggle — per user/segment feature. Korzyści: oddzielenie deployment od release. Szybsze iteracje. Zmniejszone ryzyko dużych release'ów. Możliwość personalizacji.",
  },
  {
    question: "LaunchDarkly, Unleash i OpenFeature — jak wybrać system feature flags?",
    answer: "LaunchDarkly: lider rynku komercyjnych feature flags. Targeting rules — włącz dla user.email contains '@company.com', lub user.country = 'PL'. Percentage rollouts — 10% → 25% → 50% → 100%. Multivariate flags — nie tylko true/false, ale string/number/JSON (np. różne UI warianty). A/B experiments wbudowane. Code References — skanuje kod żeby znaleźć gdzie flagi są używane. SDK dla 20+ języków. Cennik: $10+/user/miesiąc — drogie przy skali. Flagsmith: open-source + cloud (tańsza alternatywa dla LaunchDarkly). Segment-based targeting. Remote config (flaga z wartością JSON zamiast bool). Self-hosted lub SaaS. Unleash: open-source, self-hosted. Enterprise version dostępna. Gitlab feature flags używa Unleash. Strategie: gradual rollout, user ID, IP, custom. SDK dla wielu języków. PostHog: product analytics + feature flags w jednym. Dobry dla startupów chcących łączyć analytics z flags. GrowthBook: open-source, feature flags + A/B testing. Bayesian stats engine. Self-hosted lub cloud. OpenFeature (CNCF): vendor-neutral standard API dla feature flags. Jak OpenTelemetry ale dla feature flags. Zmieniasz providera (LaunchDarkly → Unleash) bez zmiany kodu aplikacji. SDK + provider pattern. Flipt: open-source, gRPC/REST API, Kubernetes native. Configcat: prosty, dobry pricing, multi-platform. AWS AppConfig: managed feature flags jako część AWS.",
  },
  {
    question: "Targeting i segmentacja — jak kontrolować komu pokazujesz funkcję?",
    answer: "Targeting rules: reguły które decydują czy flag jest włączona dla konkretnego użytkownika/żądania. Kontekst (evaluation context): user ID, email, plan, country, device, request IP, custom attributes. Typy targetowania: Individual targeting — konkretny user ID zawsze widzi funkcję (wewnętrzni testerzy). Segment targeting — 'beta users' segment (lista user IDs lub reguła email domain). Percentage rollout — losowy % populacji (seeded na user ID — ten sam user zawsze w tej samej grupie). Attribute-based rules — kraj = 'PL' AND plan = 'pro'. Sticky sessions: ważne żeby user przy każdej wizycie widział ten sam wariant (nie losowe flip). Implementacja: seed hash na user ID lub session ID. LaunchDarkly, Unleash — gwarantują stickiness. Multivariate flags: zamiast bool — string, number lub JSON. Przykład: 'checkout-ui' flag = 'old' | 'redesign-v1' | 'redesign-v2'. 33% widzi każdy wariant. Pozwala testować wiele wariantów jednocześnie. Flag dependencies: flag B włączona tylko gdy flag A włączona. Prerequisite flags. Targeting w kontekście B2B: per tenant (company) — każda firma może mieć własny zestaw flag. Tenant isolation — company.id jako targeting key. Self-serve flag management: daj PM lub biznesowi możliwość włączania/wyłączania flag bez angażowania devów. Audit log: kto zmienił flagę, kiedy, jaką wartość.",
  },
  {
    question: "Feature Flags w architekturze — najlepsze praktyki i anty-patterny?",
    answer: "Najlepsze praktyki: Krótkie życie flag (short-lived): Release toggles powinny być usuwane gdy feature jest stabilna. Flag debt — zbyt wiele starych flag = kod trudny do rozumienia. Usuwaj flagi po launch (ticket w backlogu). Naming convention: service-name.feature-name lub feature.experiment. Jasne, opisowe nazwy. Dokumentacja flagi: cel, właściciel, data stworzenia, planowana data usunięcia. Testowanie z flags: testuj obydwa stany (on i off). Contract tests dla flag. Test że aplikacja działa przy flag service niedostępnym (fallback). Default values: zawsze definiuj sensowną wartość domyślną. Na wypadek gdy flag service jest niedostępny. SDK cache: lokalne cache flagi (nie każdy request to sieciowe wywołanie). Streaming updates: real-time aktualizacja flag bez restartu aplikacji. SSE lub WebSocket do flag service. Anty-patterny: Flag jako long-lived configuration: jeśli flaga nigdy nie jest usuwana — to jest feature toggle zamiast konfiguracja. Użyj proper config management (env vars, config maps). Too many flags: 100+ flag = trudne do zarządzania. Priorytetyzuj i czyść regularnie. Flag w SQL/bazie: nie trzymaj flag decyzji logiki biznesowej w bazie — trudne do zmiany per-request. Hardcoded user IDs w flags: zamiast user IDs hardcode → użyj segmentów. Brak monitoring: monitoruj które wariant widzi ile % ruchu. Alerty gdy flaga nie ma efektu.",
  },
  {
    question: "Feature Flags a A/B testing i eksperymenty — jak mierzyć efekty?",
    answer: "Feature Flags to infrastruktura — A/B testing to metoda naukowa przeprowadzana na tej infrastrukturze. A/B testing: podziel ruch na warianty. Mierz metryki (conversion rate, revenue, engagement). Określ statystyczną istotność przed decyzją. Metryki do A/B testów: Primary metric (guardrail): konwersja, revenue per user, activation rate. Secondary metrics: engagement, session length, error rate. Guardrail metrics: nie pogarszaj krytycznych metryk (np. checkout errors). Statystyczna istotność: p-value (standardowo 0.05 — 95% confidence). Power analysis — oblicz jaka próba jest potrzebna dla wykrycia efektu X%. Beware underpowered tests — zbyt mała próba = fałszywe wnioski. Typy testów: A/B (two variants), A/B/n (multiple variants), Multivariate (kombinacje). Peeking problem: sprawdzanie wyników zanim zebrana wystarczająca próba = false positives. Rozwiązanie: sequential testing lub always-valid inference. Narzędzia: GrowthBook — bayesian stats, open-source. Optimizely — enterprise A/B testing. LaunchDarkly Experiments — wbudowany A/B. PostHog — product analytics + flags + experiments. Statsig — feature flags + experiments + metrics. Integracja z analytics: event tracking (user widzi wariant A → konwertuje lub nie). Segment, Mixpanel, Amplitude — enrichuj eventy z wariantem flagi. Attribution: który wariant był aktywny gdy event nastąpił.",
  },
];

const flagTypes = [
  { typ: "Release Toggle", opis: "Ukrywa niegotową funkcję w kodzie. Developerzy commitują do main za flagą zamiast long-lived branchy.", zycie: "Tymczasowy (usuń po launch)" },
  { typ: "Experiment Toggle", opis: "A/B testing — różne warianty dla różnych grup. Mierz metryki, wybierz zwycięzcę.", zycie: "Tymczasowy (usuń po decyzji)" },
  { typ: "Ops Toggle", opis: "Wyłącz kosztowne lub ryzykowne funkcje pod obciążeniem. Kill switch dla awarii.", zycie: "Długoterminowy (operational)" },
  { typ: "Permission Toggle", opis: "Włącz funkcję per plan, rola lub segment. Premium features dla paid users.", zycie: "Długoterminowy (business rule)" },
];

const featureFlagTools = [
  { narzedzie: "LaunchDarkly", model: "SaaS (komercyjny)", cena: "$$$ ($10+/user/mies.)", strong: "Targeting, multivariate, code refs, duży ekosystem", dla: "Enterprise, duże teamy" },
  { narzedzie: "Unleash", model: "Open-source + Enterprise", cena: "Free (self-hosted) / $$$", strong: "Gradual rollout, strategie, Kubernetes native", dla: "Tech-forward teamy, cost-conscious" },
  { narzedzie: "Flagsmith", model: "Open-source + SaaS", cena: "Free → $45/mies.", strong: "Remote config (JSON flags), segment targeting", dla: "Startups, mid-size" },
  { narzedzie: "GrowthBook", model: "Open-source + Cloud", cena: "Free self-hosted / $200+", strong: "A/B testing + feature flags, Bayesian stats", dla: "Product-led growth teams" },
  { narzedzie: "PostHog", model: "Open-source + Cloud", cena: "Free → usage-based", strong: "Analytics + flags + experiments w jednym", dla: "Startupy, product analytics focus" },
];

export default function BlogFeatureFlagsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Feature Flags | Fotz Studio"
        description="Feature Flags: typy flag, targeting, LaunchDarkly vs Unleash vs Flagsmith, OpenFeature standard, A/B testing i najlepsze praktyki zarządzania flagami."
        canonicalUrl="https://fotz.pl/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing"

        keywords="Feature Flags co to jest, Feature Flags definicja, czym jest Feature Flags, Feature Flags przykłady, jak działa Feature Flags, Feature Flags znaczenie, Feature Flags przewodnik"

        canonical="https://fotz.pl/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing"
      />
      <ArticleSchema
        title="Feature Flags — co to jest, LaunchDarkly, Unleash, OpenFeature i A/B testing?"
        description="Feature Flags: 4 typy flag, 5 narzędzi (LaunchDarkly/Unleash/Flagsmith/GrowthBook/PostHog), targeting, A/B testing statystyki i anty-patterny."
        url="https://fotz.pl/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing"
        datePublished="2024-04-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Feature Flags", url: "https://fotz.pl/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-fuchsia-950 to-purple-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Feature Flags", href: "/blog/feature-flags-co-to-jest-launchdarkly-unleash-ab-testing" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-fuchsia-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Product / Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Feature Flags
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Oddziel deployment od release. Deploy każdego dnia — release gdy gotowy.
              Feature Flags dają kontrolę nad tym co widzą użytkownicy
              bez konieczności rollbacku kodu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Lider rynku", value: "LaunchDarkly" },
                { label: "Open-source", value: "Unleash / Flagsmith" },
                { label: "Vendor-neutral API", value: "OpenFeature (CNCF)" },
                { label: "A/B testing", value: "GrowthBook / PostHog" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-fuchsia-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy Feature Flags — jak je stosować?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Martin Fowler wyróżnia 4 typy flag — każdy z innym cyklem życia
              i przeznaczeniem.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {flagTypes.map((f) => (
              <FadeInView key={f.typ}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{f.typ}</h3>
                  <p className="text-gray-700 text-sm mb-3">{f.opis}</p>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${f.zycie.includes("Tymczasowy") ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}`}>
                    {f.zycie}
                  </span>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Porównanie narzędzi Feature Flags</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od drogiego enterprise LaunchDarkly po open-source Unleash —
              wybór zależy od budżetu, potrzeb A/B i skali.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {featureFlagTools.map((t) => (
              <FadeInView key={t.narzedzie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{t.narzedzie}</h3>
                      <span className="text-xs text-fuchsia-700 font-medium">{t.model}</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{t.cena}</p>
                    <p className="text-gray-600 text-xs">{t.strong}</p>
                    <p className="text-gray-500 text-xs italic">{t.dla}</p>
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
