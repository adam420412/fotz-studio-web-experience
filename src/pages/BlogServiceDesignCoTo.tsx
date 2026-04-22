import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest service design?",
    answer:
      "Service design (projektowanie usług) to metodologia projektowania i optymalizacji całościowego doświadczenia usługi — zarówno tego co widzi klient (frontstage), jak i procesów za kulisami (backstage), które umożliwiają dostarczenie tej usługi. Service design łączy perspektywę użytkownika (UX) z perspektywą operacyjną (procesy, ludzie, technologie) w celu tworzenia usług użytecznych, efektywnych i możliwych do dostarczenia.",
  },
  {
    question: "Czym różni się service design od UX design?",
    answer:
      "UX design skupia się na cyfrowych produktach i interfejsach — jak użytkownik doświadcza aplikacji, strony, narzędzia. Service design patrzy na całościową usługę — obejmuje touchpointy cyfrowe i fizyczne, interakcje ludzkie, procesy back-office i ekosystem organizacyjny. Service design projektuje 'cały system' — UX projektuje 'interfejs systemu'. Często service design obejmuje UX jako jeden z elementów.",
  },
  {
    question: "Co to jest service blueprint?",
    answer:
      "Service blueprint to diagram wizualizujący całą usługę — wszystkie touchpointy klienta, działania pracowników (widoczne dla klienta i niewidoczne), procesy wspierające i systemy. Blueprint dzieli się na warstwy: Physical Evidence (co widzi klient), Customer Actions, Onstage Employee Actions (widoczne dla klienta), Backstage Employee Actions (niewidoczne), Support Processes. Service blueprint to 'architektoniczny rysunek' usługi.",
  },
  {
    question: "Jakie są główne narzędzia service design?",
    answer:
      "Kluczowe narzędzia: Customer Journey Map (mapa podróży klienta przez touchpointy), Service Blueprint (szczegółowy diagram frontstage + backstage), Stakeholder Map (mapowanie aktorów i ich relacji), Service Prototyping (testowanie usługi przed wdrożeniem — role-play, bodystorming), Desk Research, User Interviews, Cultural Probes, oraz Experience Prototyping.",
  },
  {
    question: "Kiedy stosować service design?",
    answer:
      "Service design jest niezbędny gdy: klienci skarżą się na spójność usługi między kanałami (omnichannel gaps), firma przechodzi transformację cyfrową, wdrażasz nową usługę złożoną z wielu touchpointów, istnieją problemy między departamentami wpływające na customer experience, oraz gdy chcesz zredukować koszty operacyjne przy zachowaniu lub poprawie jakości CX.",
  },
];

const sdPrinciples = [
  {
    zasada: "Human-centered",
    opis: "Wszystkie decyzje projektowe oparte na głębokim rozumieniu potrzeb, kontekstu i zachowań użytkowników i pracowników",
    praktyka: "Etnograficzne badania terenowe, wywiady jakościowe, obserwacja w naturalnym środowisku",
  },
  {
    zasada: "Collaborative",
    opis: "Service design angażuje wszystkich interesariuszy: klientów, pracowników frontline, management, IT, operacje",
    praktyka: "Co-design warsztaty, service safari, cross-functional design sprints",
  },
  {
    zasada: "Iterative",
    opis: "Projektowanie usług to spiralny proces: discover → define → develop → deliver, z pętlami feedbacku",
    praktyka: "Prototypowanie niskiej wierności (role-play), piloty z ograniczoną grupą, testowanie A/B usług",
  },
  {
    zasada: "Sequential",
    opis: "Usługa to sekwencja momentów w czasie — projektowanie każdego kroku i przejścia między nimi",
    praktyka: "Customer Journey Mapping z emocjami, identyfikacja 'moments of truth' i 'peak-end' moments",
  },
  {
    zasada: "Holistic",
    opis: "Całościowe spojrzenie na system — frontstage, backstage, procesy, technologie, kultura organizacji",
    praktyka: "Service blueprint, stakeholder map, ekosystemowa mapa usługi",
  },
];

const sdProcess = [
  {
    faza: "Discover (Odkryj)",
    cel: "Zrozumienie obecnego stanu usługi i potrzeb użytkowników",
    metody: ["Wywiady z klientami i pracownikami", "Obserwacja kontekstowa (etnografia)", "Analiza skarg i feedbacku", "Service safari (przeżycie usługi jako klient)", "Analiza danych: CX metrics, NPS, support tickets"],
    output: "Research report, insight cards, user personas",
  },
  {
    faza: "Define (Zdefiniuj)",
    cel: "Synteza insightów i zdefiniowanie wyzwań projektowych",
    metody: ["Affinity mapping — grupowanie insightów", "Customer Journey Map (obecny stan)", "Point of View (POV) statements", "How Might We (HMW) pytania", "Priorytetyzacja obszarów problemowych"],
    output: "Current-state journey map, design challenges, opportunity areas",
  },
  {
    faza: "Develop (Twórz)",
    cel: "Generowanie i prototypowanie rozwiązań",
    metody: ["Ideation workshops (brainstorming, SCAMPER)", "Concepting — szkice konceptów usługi", "Service prototyping — role-play, bodystorming", "Service blueprint (docelowy stan)", "Feedback od interesariuszy"],
    output: "Service concepts, future-state blueprint, testable prototype",
  },
  {
    faza: "Deliver (Wdrażaj)",
    cel: "Pilotowanie, iterowanie i skalowanie rozwiązania",
    metody: ["Pilotowanie z ograniczoną grupą klientów", "Mierzenie KPIs i iterowanie", "Szkolenia pracowników", "Stopniowe skalowanie (rollout)", "Ciągłe monitorowanie i doskonalenie"],
    output: "Piloted service, training materials, measurement framework",
  },
];

const sdTools = [
  { narzędzie: "Customer Journey Map", kiedy: "Mapowanie doświadczeń touchpoint po touchpoint", forma: "Wizualny diagram — oś czasu z emocjami i pain points" },
  { narzędzie: "Service Blueprint", kiedy: "Projektowanie systemu usługi — frontstage + backstage", forma: "Tabela z liniami widoczności — customer, onstage, backstage, support" },
  { narzędzie: "Stakeholder Map", kiedy: "Identyfikacja aktorów i relacji w ekosystemie usługi", forma: "Mapa z centrycznym klientem i orbitalnie rozmieszczonymi interesariuszami" },
  { narzędzie: "Service Prototype", kiedy: "Testowanie konceptu usługi przed kosztownym wdrożeniem", forma: "Role-play, storyboard, bodystorming, wizard of oz" },
  { narzędzie: "Experience Principle", kiedy: "Definiowanie jakości doświadczenia którą chcemy dostarczyć", forma: "3–5 zasad jak 'Szybko, nie pośpiesznie' z przykładami" },
];

export default function BlogServiceDesignCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Service Design | Fotz Studio"
        description="Service design — definicja, 5 zasad, 4-fazowy proces (discover, define, develop, deliver), service blueprint i narzędzia. Czym różni się od UX design…"
        canonical="https://fotz.pl/blog/service-design-co-to"

        keywords="Service Design co to jest, Service Design definicja, czym jest Service Design, Service Design przykłady, jak działa Service Design, Service Design znaczenie, Service Design przewodnik"

        canonical="https://fotz.pl/blog/service-design-co-to"
      />
      <ArticleSchema
        title="Service Design — co to jest i jak projektować usługi?"
        description="Kompletny przewodnik po service design: 5 zasad, 4-fazowy Double Diamond process, service blueprint, customer journey map i narzędzia."
        url="https://fotz.pl/blog/service-design-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Service Design", url: "https://fotz.pl/blog/service-design-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Service Design", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Service Design — co to jest i jak projektować usługi?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Service design projektuje całościowe doświadczenie usługi — od frontstage po backstage.
            Poznaj 5 zasad, 4-fazowy proces i narzędzia: service blueprint, journey map i service prototype.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest service design?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Service design</strong> to multidyscyplinarne podejście do projektowania usług,
              które uwzględnia perspektywę klienta (co doświadcza), pracowników (co robią)
              i organizacji (jakie procesy i systemy to umożliwiają). Celem jest tworzenie usług
              spójnych, użytecznych i efektywnych we wszystkich touchpointach.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Termin "service design" został spopularyzowany przez Lynn Shostack w 1982 roku.
              Dziś jest podstawą transformacji cyfrowej w bankowości, zdrowiu, administracji i retail.
              Firmy inwestujące w service design redukują koszty operacyjne średnio o 20–30%
              przy jednoczesnej poprawie NPS.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-cyan-50 rounded-xl p-5">
                <p className="font-semibold text-cyan-900 mb-2">Frontstage (widoczne dla klienta):</p>
                <ul className="space-y-1 text-cyan-800 text-sm">
                  <li>• Strona internetowa / aplikacja</li>
                  <li>• Punkt sprzedaży / oddziały</li>
                  <li>• Pracownicy obsługi klienta</li>
                  <li>• Komunikaty i korespondencja</li>
                  <li>• Fizyczne materiały (packaging, faktury)</li>
                </ul>
              </div>
              <div className="bg-slate-100 rounded-xl p-5">
                <p className="font-semibold text-slate-900 mb-2">Backstage (niewidoczne):</p>
                <ul className="space-y-1 text-slate-700 text-sm">
                  <li>• Systemy IT i infrastruktura</li>
                  <li>• Procesy operacyjne i logistyka</li>
                  <li>• Szkolenia i HR</li>
                  <li>• Partnerzy i dostawcy</li>
                  <li>• Kultura organizacyjna</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 zasad */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 zasad service design</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sdPrinciples.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900">{p.zasada}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{p.opis}</p>
                  <div className="bg-cyan-50 rounded p-2">
                    <p className="text-xs text-cyan-700">{p.praktyka}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4-fazowy proces */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4-fazowy proces Double Diamond w service design</h2>
            <div className="space-y-5">
              {sdProcess.map((faza, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{faza.faza}</h3>
                      <p className="text-slate-500 text-sm mb-3 italic">{faza.cel}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold text-slate-500 mb-2">Metody:</p>
                          <ul className="space-y-1">
                            {faza.metody.map((m, j) => (
                              <li key={j} className="text-slate-600 text-sm flex gap-2">
                                <span className="text-cyan-500 flex-shrink-0">•</span>{m}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-cyan-50 rounded p-3">
                          <p className="text-xs font-semibold text-cyan-600 mb-1">Output fazy:</p>
                          <p className="text-cyan-800 text-sm">{faza.output}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Narzędzia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kluczowe narzędzia service design</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Narzędzie</th>
                    <th className="p-3 text-left">Kiedy używać</th>
                    <th className="p-3 text-left">Forma</th>
                  </tr>
                </thead>
                <tbody>
                  {sdTools.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-cyan-700">{row.narzędzie}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.forma}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — service design</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="service-design-co-to" />
      <ContactSection />
    </Layout>
  );
}
