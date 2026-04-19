import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Key Account Management (KAM)?",
    answer: "Key Account Management (KAM) to strategiczne zarządzanie najważniejszymi klientami organizacji — zazwyczaj tymi którzy generują nieproporcjonalnie dużą część przychodu lub mają strategiczny potencjał wzrostu. KAM to nie tylko obsługa klienta — to partnerstwo strategiczne gdzie firma dedykuje zasoby (dedykowany KAM, exec sponsor, priorytetowy support) w zamian za głębszą, długoterminową relację. Zasada Pareto: zazwyczaj 20% klientów generuje 80% przychodu — to są Twoi Key Accounts. KAM program formalnie identyfikuje i zarządza tymi klientami jako strategiczne aktywa biznesowe.",
  },
  {
    question: "Jak wybrać Key Accounts?",
    answer: "Kryteria selekcji Key Accounts: Przychód — klient generuje powyżej X% całkowitego ARR lub przekracza Y PLN ARR. Potencjał wzrostu — obecna wartość jest niższa od potencjalnej (whitespace analysis). Referencyjność — klient jest liderem w swojej branży i jego logo otwiera drzwi do innych. Złożoność relacji — klient ma wiele BU, krajów lub systemów wymagających koordynacji. Strategiczne dopasowanie — klient jest w docelowym ICP lub segmencie który chcesz rozwijać. Benchmark: większość firm SaaS ma 10-50 Key Accounts stanowiących 30-60% ARR. Przy wyborze unikaj 'customer inflation' — zbyt wiele 'key accounts' rozmywa zasoby i sens programu.",
  },
  {
    question: "Czym Key Account Manager różni się od Account Executive?",
    answer: "AE vs KAM: Account Executive (AE) jest hunters — jego celem jest zamknięcie nowych dealów. Sukces mierzy się win rate i nowym ARR z nowych logo. Key Account Manager (KAM) jest farmers — jego celem jest rozwijanie istniejących klientów strategicznych. Sukces mierzy się NRR, Expansion ARR i głębokością relacji (stakeholder coverage). AE pracuje nad jednym dealem naraz, z timeboxed sales cycle. KAM zarządza 5-15 key accounts przez lata, z ciągłą relacją i długoterminowym planem (Account Plan). KAM ma zazwyczaj wyższy OTE i niższy zestaw klientów niż AE. Najlepsi KAM budują poziom zaufania który sprawia że klient traktuje ich jak wewnętrznego partnera.",
  },
  {
    question: "Co to jest Account Plan w KAM?",
    answer: "Account Plan to strategiczny dokument definiujący cele, relacje, możliwości i plan działania dla konkretnego Key Account. Sekcje Account Plan: Account Overview — rozmiar firmy, struktura, kluczowe inicjatywy strategiczne. Stakeholder Map — mapa relacji: kto jest Champion, kto jest Blocker, kto jest Exec Sponsor. Current State — aktualny ARR, produkty, use cases, health score. Whitespace Analysis — jakie produkty/moduły klient jeszcze nie używa. Growth Plan — targetowany ARR, expansion roadmap, timeline. Action Plan — konkretne działania w kwartale: QBR, executive dinner, case study. Risks — co może zagrozić relacji: churn risk, competitive threat, zmiana sponsora. Account Plan jest żywym dokumentem — aktualizowany kwartalnie przy QBR.",
  },
  {
    question: "Jak mierzyć sukces programu KAM?",
    answer: "Metryki KAM: NRR (Net Revenue Retention) na portfelu Key Accounts — cel: 120%+. Expansion ARR — ile nowego ARR wygenerował KAM z istniejących klientów. Stakeholder Coverage — ile osób w koncie ma aktywną relację z Twoją firmą (więcej = bezpieczniej). Executive Coverage — czy KAM ma relację z C-level/VP w koncie? Customer Health Score — agregowany health score portfela. QBR Completion Rate — % key accounts z regularnym QBR. Reference Willingness — % Key Accounts gotowych być referencją lub case study. At-Risk ARR — wartość ARR z klientów z niskim Health Score lub churn risk. Dobrze prowadzony KAM program powinien mieć NRR 130%+ na Key Account portfelu.",
  },
];

const kamVsAe = [
  { aspekt: "Główna rola", kam: "Farmer — rozwijanie istniejących relacji", ae: "Hunter — pozyskiwanie nowych klientów" },
  { aspekt: "Liczba klientów", kam: "5-15 Key Accounts", ae: "20-50+ active opportunities" },
  { aspekt: "Horyzont", kam: "Lata — długoterminowe partnerstwo", ae: "Miesiące — jeden sales cycle" },
  { aspekt: "Cel", kam: "NRR, Expansion ARR, relacja", ae: "New ARR, Win Rate" },
  { aspekt: "Główne aktywności", kam: "QBR, Executive Relationships, Account Plan", ae: "Cold outreach, Demo, Closing" },
  { aspekt: "Interakcja z klientem", kam: "Ciągła, proaktywna, strategic", ae: "Intensywna podczas deal, ograniczona post-close" },
];

const accountPlanSections = [
  { sekcja: "Account Overview", opis: "Struktura firmy, kluczowe BU, strategiczne inicjatywy, decyzyjne roczny budżet cycle", kolor: "blue" },
  { sekcja: "Stakeholder Map", opis: "Mapa relacji: Champion, Economic Buyer, Blockers, Exec Sponsor — z oceną siły relacji", kolor: "green" },
  { sekcja: "Current State", opis: "ARR, produkty w użyciu, adopcja, Health Score, ostatnie QBR insights", kolor: "purple" },
  { sekcja: "Whitespace Analysis", opis: "Które produkty lub moduły klient jeszcze nie kupił? Jaka jest szacowana wartość whitespace?", kolor: "orange" },
  { sekcja: "Growth Plan", opis: "Target ARR na 12 miesięcy, expansion roadmap, konkretne opportunity pipeline", kolor: "teal" },
  { sekcja: "Risks i Mitigations", opis: "Churn risk factors, competitive threats, key person dependency — z planem mitigation", kolor: "red" },
];

export default function BlogKeyAccountManagement() {
  return (
    <Layout>
      <SEOHead
        title="Key Account Management (KAM) — co to jest? | Fotz.pl"
        description="Key Account Management (KAM) — zarządzanie kluczowymi klientami, różnica AE vs KAM, Account Plan, metryki i jak wybrać Key Accounts. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/key-account-management-kam-co-to-jest"

        keywords="Key Account Management (KAM) co to jest, Key Account Management (KAM) definicja, czym jest Key Account Management (KAM), Key Account Management (KAM) przykłady, jak działa Key Account Management (KAM), Key Account Management (KAM) znaczenie, Key Account Management (KAM) przewodnik"

        canonical="https://fotz.pl/blog/key-account-management-kam-co-to-jest"
      />
      <ArticleSchema
        title="Key Account Management (KAM) — co to jest?"
        description="Kompletny przewodnik po KAM: selekcja Key Accounts, Account Plan, AE vs KAM i metryki sukcesu."
        url="https://fotz.pl/blog/key-account-management-kam-co-to-jest"
        datePublished="2024-02-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Key Account Management", url: "https://fotz.pl/blog/key-account-management-kam-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Key Account Management", href: "/blog/key-account-management-kam-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-amber-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Enterprise Sales
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Key Account Management
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              20% klientów generuje 80% przychodu. Key Account Management to systematyczne
              podejście do zarządzania tymi klientami jako strategicznymi aktywami —
              z dedykowanymi zasobami, Account Planami i mierzoną relacją.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Klientów w KAM programie", value: "10-50" },
                { label: "% ARR Key Accounts", value: "30-60%" },
                { label: "NRR cel portfela", value: "120%+" },
                { label: "Sekcji Account Plan", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KAM vs AE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">KAM vs Account Executive — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              KAM i AE to komplementarne role, nie konkurencyjne. Hunter-Farmer model
              pozwala optymalizować obie: AE pozyskuje, KAM rozwija i utrzymuje.
            </p>
          </FadeInView>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">Aspekt</div>
              <div className="p-4 text-sm font-bold text-amber-400">Key Account Manager</div>
              <div className="p-4 text-sm font-bold text-blue-400">Account Executive</div>
            </div>
            {kamVsAe.map((r, i) => (
              <div key={r.aspekt} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 text-sm font-bold text-gray-700">{r.aspekt}</div>
                <div className="p-4 text-sm text-gray-700">{r.kam}</div>
                <div className="p-4 text-sm text-gray-700">{r.ae}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Account Plan */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Account Plan — 6 kluczowych sekcji</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Account Plan to serce KAM — strategiczny dokument który definiuje cele, relacje
              i plan działania dla każdego Key Account. Aktualizowany kwartalnie.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {accountPlanSections.map((s, i) => (
              <FadeInView key={s.sekcja}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      s.kolor === "blue" ? "bg-blue-600" :
                      s.kolor === "green" ? "bg-green-600" :
                      s.kolor === "purple" ? "bg-purple-600" :
                      s.kolor === "orange" ? "bg-orange-600" :
                      s.kolor === "teal" ? "bg-teal-600" :
                      "bg-red-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{s.sekcja}</h3>
                      <p className="text-sm text-gray-700">{s.opis}</p>
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

      <RelatedArticles currentArticleId="key-account-management-kam-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
