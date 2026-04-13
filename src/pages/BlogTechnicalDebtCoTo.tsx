import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest dług techniczny i jakie są jego rodzaje?",
    answer: "Dług techniczny (Technical Debt) to metafora wprowadzona przez Ward Cunninghama — każde ominięcie dobrej praktyki tworzenia oprogramowania jest jak zaciągnięcie pożyczki. Możesz 'pożyczyć' szybkość teraz kosztem przyszłej pracy (odsetek). Różnica od zwykłego długu: dług finansowy rośnie zgodnie z umową — techniczny rośnie logarytmicznie i trudno go wycenić. Quadrant of Technical Debt (Martin Fowler): Prudent + Deliberate: 'Musimy teraz skończyć, poradzimy się z konsekwencjami później.' Świadoma decyzja biznesowa. Reckless + Deliberate: 'Nie mamy czasu na właściwą architekturę.' Brak wiedzy lub dyscypliny. Prudent + Inadvertent: 'Teraz rozumiemy co powinniśmy były zrobić.' Uczenie się w trakcie pracy. Reckless + Inadvertent: 'Czym jest separacja warstw?' Brak wiedzy. Rodzaje długu: Architektoniczny: monolityczna aplikacja którą trudno rozszerzać. Brak separacji concerns. Spaghetti code bez warstw. Kod: duplikacja, magic numbers, długie funkcje, brak testów. Dependency debt: stare zależności z CVE, przestarzałe biblioteki. Testowy: brak testów = każda zmiana jest ryzykowna. Konfiguracyjny: hardcoded values, brak feature flags. Dokumentacyjny: brak dokumentacji API, brak ADR (Architecture Decision Records). Jak dług techniczny spowalnia: 10-15% czasu developmentu tracone na workaround istniejącego długu (szacunki McKinsey).",
  },
  {
    question: "Jak mierzyć i kwantyfikować dług techniczny?",
    answer: "Pomiar długu technicznego jest trudny ale możliwy. Narzędzia automatyczne: SonarQube: statyczna analiza kodu. Technical Debt Ratio — czas naprawy podzielony przez czas budowania. Code smells, complexity, duplications. Squale, NDepend, Codescene. Metryki kodu: Cyklomatyczna złożoność (Cyclomatic Complexity) — liczba niezależnych ścieżek przez funkcję. Wysoka CC = trudna do testowania i zrozumienia. Cognitive Complexity — jak trudno zrozumieć kod dla człowieka. Code churn: pliki które często się zmieniają często mają dług (hotspots). Dependency freshness: jak stare są zależności. Liczba CVE w zależnościach. Technical Debt Assessment: sesje z architektami — przegląd systemu. Dokumentuj obszary wysokiego długu. Tech Debt Backlog: skategoryzuj i priorytetyzuj dług. Kodescene: analizuje git history + code complexity. Identyfikuje hotspots (kod wysokiej złożoności + wysoka zmiana). Social dependencies (kto wie o tym kodzie). Biznesowe metryki: Lead Time dla zmian w systemach z dużym długiem. Częstotliwość incydentów powodowanych przez stary kod. Czas onboardingu nowych developerów (im więcej długu tym trudniej). ROI obliczenie: (Czas oszczędzony po naprawie - Czas naprawy) = ROI. Trudno wycenić ale warto próbować.",
  },
  {
    question: "Strategie redukcji długu technicznego — jak priorytetyzować?",
    answer: "Boy Scout Rule: zawsze zostaw kod w lepszym stanie niż zastałeś. Małe refaktoringi przy każdym commit — nie muszą być osobne tickety. Strangler Fig Pattern: stopniowe zastępowanie starego systemu nowym. Nowe funkcje buduj w nowym systemie. Stary system 'uduszony' przez nowy — bez full rewrite. Anti-corruption Layer: wstaw warstwę abstrakcji między stary i nowy system. Nowy kod nie 'widzi' starych konceptów. Refaktoring vs Przepisanie (Rewrite): Refaktoring: bezpieczniejszy, inkrementalny, zachowujesz działający system. Przepisanie: ryzykowne (second system syndrome), ale czasem konieczne. Zasada: nie przepisuj jeśli możesz refaktoryzować. Techniki redukcji: Extract Method/Function — rozbij długą funkcję. Extract Class/Module — wyciągnij odpowiedzialność do osobnej klasy. Introduce Parameter Object — zastąp długą listę parametrów obiektem. Replace Conditional with Polymorphism. Priorytetyzacja Tech Debt: Impact x Effort matrix: wysokie impact, niskie effort — robić pierwszej. Hotspot analysis: dług w plikach często modyfikowanych = najwyższy priorytet. Debt per sprint: zarezerwuj 20% czasu sprintu na dług techniczny. Nie 100% feature work. Tech Debt jako backlog: zgłaszaj dług techniczny jako ticket z oceną impact i kosztu. Wizualizuj przed stakeholderami. Regularne Debt Sprints: raz na kwartał sprint dedykowany redukcji długu.",
  },
  {
    question: "Jak rozmawiać o długu technicznym z biznesem i stakeholderami?",
    answer: "Największy błąd: mówienie technicznym żargonem do biznesu ('musimy refaktoryzować kod'). Zamiast tego — biznesowy język i ROI. Metafory dla biznesu: Dom z fundamentami: nienaprawiana nieszczelność fundamentów → dom się zapada. Naprawa fundament za 100k teraz vs. 1M za rok. Samochód bez serwisu: jazda bez oleju silnikowego jest możliwa — przez chwilę. ROI Framework: Czas naprawy (investycja): ile developer-days do naprawy. Czas oszczędzany (return): ile czasu tracimy teraz na workaround miesięcznie. Koszt incydentów: jak często stary kod powoduje outage. Czas onboardingu: jak długo nowi developerzy się uczą. Speed of delivery: ile function points wydajemy miesięcznie (mierzalne). Konkretne przykłady: 'Każda nowa feature w module X zajmuje 2x dłużej bo kod jest złożony. Naprawienie tego zajmie 4 tygodnie ale zaoszczędzi 2 tygodnie per feature od tej pory — ROI w ciągu 2 feature.' Narzędzia do komunikacji: Mapa długu technicznego — wizualizacja gdzie jest dług. Tech Debt Backlog z priorytetami — widoczne dla stakeholders. Metryki przed/po naprawie — pokaż efekty. Regularne Tech Health Reviews — kwartalny przegląd zdrowia systemu. 'Maintenance window' jako koncept — planowany czas na naprawę długu. Innowacje wymagają zdrowego fundamentu.",
  },
  {
    question: "Jak zapobiegać długowi technicznemu — procesy i kultura?",
    answer: "Zapobieganie jest tańsze niż naprawianie. Procesy: Code Review: pull requesty z requirementem review przed merge. Sprawdzaj nie tylko correctness ale też maintainability. Architecture Decision Records (ADR): dokumentuj ważne decyzje architektoniczne i kontekst. Dlaczego wybraliśmy X zamiast Y. Przyszłe teamy rozumieją decyzje. Definition of Done: gotowe = code + testy + docs + brak nowego długu technicznego. Debt Budget w sprint: explicite zarezerwowany % czasu na utrzymanie. Pair Programming / Mob Programming: dwa umysły widzą więcej — mniej długu na wejściu. Test-Driven Development (TDD): testy najpierw wymuszają testowalny design. Testowalny kod = mniej długu. Automated Quality Gates: SonarQube Quality Gate — nie merge jeśli CC za wysoka lub coverage za niska. Pr-commit hooks — lint, format, basic checks przed commit. Dependency Updates: Renovate Bot lub Dependabot — automatyczne PR z aktualizacjami. Testuj aktualizacje w CI — nie zostawiaj starych deps. Kultura: Blameless culture: postmortems po incydentach — focus na systemie nie ludziach. Psych safety — możesz zgłosić dług bez negatywnych konsekwencji. Tech Excellence Champions: liderzy techniczny promujący dobre praktyki. Guilds / Communities of Practice — dzielenie wiedzy o clean code. Hackathony na spłatę długu — angażujące i produktywne. Metryki zdrowia: śledzenie Coverage, Complexity, Duplications w czasie. Trend jest ważniejszy niż wartość absolutna.",
  },
];

const debtTypes = [
  { typ: "Dług architektoniczny", opis: "Zła separacja concerns, brak warstw, monolith który nie może rosnąć. Najdroższy w naprawie.", naprawa: "Strangler Fig Pattern, DDD, mikroserwisy" },
  { typ: "Dług kodu", opis: "Duplikacja, magic numbers, długie funkcje, niska czytelność. Codzienne spowalnianie.", naprawa: "Extract Method/Class, Boy Scout Rule" },
  { typ: "Dług testowy", opis: "Brak testów = każda zmiana ryzykowna. Developer boi się refaktoringu.", naprawa: "TDD, test-after, coverage ratchet" },
  { typ: "Dług zależności", opis: "Stare biblioteki z CVE, brak aktualizacji, deprecated APIs.", naprawa: "Renovate Bot / Dependabot, upgrade sprints" },
  { typ: "Dług dokumentacyjny", opis: "Brak ADR, brak README, brak API docs. Wolny onboarding, utracona wiedza.", naprawa: "ADR, docs-as-code, Living Documentation" },
  { typ: "Dług konfiguracyjny", opis: "Hardcoded values, env differences, brak feature flags — kruche wdrożenia.", naprawa: "Config management, feature flags, GitOps" },
];

const debtStrategies = [
  { strategia: "Boy Scout Rule", kiedy: "Codziennie", opis: "Zostaw kod lepszym niż zastałeś — małe refaktoringi przy każdej zmianie, bez osobnych ticketów" },
  { strategia: "20% Sprint Budget", kiedy: "Każdy sprint", opis: "Zarezerwuj explicite 20% czasu sprintu na dług techniczny i refaktoring" },
  { strategia: "Strangler Fig", kiedy: "Duży dług architektoniczny", opis: "Stopniowo zastępuj stary system — nowe funkcje w nowym, stary 'uduszony' przez nowy" },
  { strategia: "Debt Sprint", kiedy: "Raz na kwartał", opis: "Cały sprint poświęcony redukcji długu — widoczne postępy, zaangażowanie teamu" },
  { strategia: "Quality Gates", kiedy: "Każdy PR", opis: "SonarQube / Codacy blokuje merge jeśli CC rośnie lub coverage spada poniżej progu" },
  { strategia: "Hotspot Analysis", kiedy: "Miesięcznie", opis: "Codescene identyfikuje pliki z wysoką zmianą i złożonością — skup refaktoring tam" },
];

export default function BlogTechnicalDebtCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dług techniczny | Fotz Studio"
        description="Dług techniczny: rodzaje, pomiar (SonarQube, Codescene), strategie redukcji (Strangler Fig, Boy Scout Rule), jak rozmawiać z biznesem i zapobiegać."
        canonicalUrl="https://fotz.pl/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac"

        keywords="Dług techniczny co to jest, Dług techniczny definicja, czym jest Dług techniczny, Dług techniczny przykłady, jak działa Dług techniczny, Dług techniczny znaczenie, Dług techniczny przewodnik"

        canonical="https://fotz.pl/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac"
      />
      <ArticleSchema
        title="Dług techniczny — co to jest, jak mierzyć, zarządzać i redukować?"
        description="Technical Debt: 6 rodzajów, 6 strategii redukcji, pomiar SonarQube/Codescene, komunikacja z biznesem (ROI), procesy zapobiegania i kultury jakości."
        url="https://fotz.pl/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac"
        datePublished="2024-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dług techniczny", url: "https://fotz.pl/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-stone-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Dług techniczny", href: "/blog/dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-stone-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Engineering Management
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dług techniczny
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              10-15% czasu developmentu traconego na workaround starego kodu.
              Dług techniczny spowalnia każdą organizację — jak go mierzyć,
              priorytetyzować i spłacać zanim przejmie kontrolę.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Pomiar", value: "SonarQube / Codescene" },
                { label: "Strategia", value: "Strangler Fig" },
                { label: "Codziennie", value: "Boy Scout Rule" },
                { label: "Budget per sprint", value: "20% na dług" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-stone-300">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rodzaje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 rodzajów długu technicznego</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dług techniczny to nie tylko zły kod — obejmuje architekturę,
              testy, zależności, dokumentację i konfigurację.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {debtTypes.map((d) => (
              <FadeInView key={d.typ}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{d.typ}</h3>
                  <p className="text-gray-700 text-sm mb-2">{d.opis}</p>
                  <p className="text-xs text-stone-700 font-medium">Naprawa: {d.naprawa}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Strategie */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 strategii redukcji długu technicznego</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie istnieje jeden sposób na redukcję długu — mix strategii
              dostosowany do skali i charakteru długu jest najefektywniejszy.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {debtStrategies.map((s) => (
              <FadeInView key={s.strategia}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-4 gap-4 items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{s.strategia}</h3>
                      <span className="text-xs text-stone-600 font-medium">{s.kiedy}</span>
                    </div>
                    <p className="text-gray-600 text-sm md:col-span-3">{s.opis}</p>
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

      <RelatedArticles currentArticleId="dlug-techniczny-co-to-jest-jak-mierzyc-zarzadzac-redukowac" />
      <ContactSection />
    </Layout>
  );
}
