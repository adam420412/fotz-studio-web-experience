import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest sprint planning?",
    answer: "Sprint planning (planowanie sprintu) to ceremonia Scrum która otwiera każdy sprint — typowo 2-tygodniowy cykl pracy zespołu developerskiego. Podczas sprint planning zespół odpowiada na dwa pytania: Co możemy dostarczyć w tym sprincie? (Cel sprintu, wybór elementów z backlogu) oraz Jak to zrobimy? (Rozbicie user stories na zadania techniczne, estymacja). Uczestniczą: Product Owner (odpowiedzialny za backlog i priorytety), Scrum Master (facylitator procesu), Development Team (estymacja i planowanie pracy). Czas trwania: maksymalnie 2 godziny na tydzień sprintu (2-tygodniowy sprint = max 4h sprint planning). Sprint planning kończy się zaakceptowanym Sprint Backlogiem i celem sprintu (Sprint Goal).",
  },
  {
    question: "Jak wygląda przebieg sprint planning?",
    answer: "Przebieg sprint planning: Część 1 — Co robimy? Product Owner prezentuje priorytety z Product Backlogu. Zespół dyskutuje i wybiera user stories które jest w stanie dostarczyć w sprincie. Kluczowe: zespół sam podejmuje decyzję o pojemności (capacity) — ile story points może dostarczyć bazując na velocity i dostępności. Część 2 — Jak to robimy? Wybrane user stories są rozbijane na konkretne zadania techniczne (tasks). Każde zadanie jest estymowane w godzinach lub story points. Powstaje Sprint Backlog — szczegółowy plan pracy na sprint. Definition of Ready (DoR): user stories do sprint planowania muszą spełniać kryteria gotowości — muszą być zrozumiałe, estymowalne i testowalne. Stories które nie spełniają DoR są odrzucane z planowania.",
  },
  {
    question: "Jak estymować pracę w sprint planning?",
    answer: "Techniki estymacji: Story Points — względna miara złożoności (nie czasu). Często używa się ciągu Fibonacci: 1, 2, 3, 5, 8, 13, 21. Story 13 to zadanie 13x bardziej złożone niż story 1. Planning Poker — każdy członek zespołu niezależnie wybiera kartę z szacunkiem, następnie wszyscy pokazują jednocześnie. Różnice są dyskutowane do konsensusu. T-shirt sizes (XS, S, M, L, XL) — prostsze podejście dla mniej dojrzałych zespołów. Hours — estymacja w godzinach. Dokładniejsza ale podatna na Parkinson's Law. Velocity — bazowanie na historycznych danych: ile story points zespół dostarczał w ostatnich 3 sprintach? To podstawa do planowania ile wziąć do nowego sprintu. Kluczowa zasada: estymacje są nieprecyzyjne — to narzędzie planowania, nie zobowiązanie.",
  },
  {
    question: "Jakie są częste problemy w sprint planning?",
    answer: "Problemy w sprint planning: Over-commitment — zespół bierze za dużo do sprintu. Wynik: niedostarczenie sprintu, pressure, tech debt. Fix: bazuj na rzeczywistej velocity, nie aspiracyjnej. Pod-commitment — zespół bierze za mało z ostrożności. Wynik: nieefektywne wykorzystanie pojemności. Fix: stopniowo zwiększaj load gdy jest komfort. Brak Sprint Goal — sprint to tylko lista tasków bez spójnego celu. Wynik: brak priorytetu gdy coś idzie nie tak. Fix: zawsze definiuj jeden zdanie Sprint Goal. Niejakość backlogu — user stories nie spełniają Definition of Ready: brak AC (acceptance criteria), niejasne wymagania. Fix: Product Owner robi 'backlog grooming' przed sprintem. Zmiany w trakcie sprintu — Product Owner dodaje nowe priorytety w trakcie sprintu. Fix: zmiany wchodzą do następnego sprintu, nie bieżącego.",
  },
  {
    question: "Czym różni się sprint planning od backlog grooming?",
    answer: "Sprint planning vs. backlog grooming (refinement): Backlog Grooming (Refinement) odbywa się w trakcie sprintu — zazwyczaj raz lub dwa razy w tygodniu. Cel: przygotowanie przyszłych user stories na sprint planning. Zespół analizuje, szacuje i rozbija wielkie stories (epiki) na mniejsze. Sprint planning odbywa się na początku sprintu. Cel: wybór które z gotowych stories wchodzą do sprintu i szczegółowe planowanie. Dobra analogia: grooming to gotowanie składników (mise en place), sprint planning to układanie menu na dany dzień. Jeśli grooming nie jest robiony regularnie, sprint planning trwa długo i jest chaotyczny bo zespół musi estymować stories które widzi po raz pierwszy.",
  },
];

const sprintPlanningAgenda = [
  { czas: "0-15 min", faza: "Sprint Review + Context", opis: "Scrum Master przedstawia velocity z ostatnich sprintów. PO omawia cele biznesowe i kontekst dla tego sprintu." },
  { czas: "15-45 min", faza: "Sprint Goal Definition", opis: "Wspólne wypracowanie Sprint Goal — jednego zdania opisującego cel biznesowy sprintu. Musi być mierzalny i wartościowy." },
  { czas: "45-90 min", faza: "Backlog Selection (Co?)", opis: "PO prezentuje priorytety. Zespół wybiera user stories do sprintu bazując na velocity i dostępności. Każda story musi spełniać Definition of Ready." },
  { czas: "90-120+ min", faza: "Task Breakdown (Jak?)", opis: "Wybrane stories są rozbijane na konkretne techniczne tasks. Każdy task estymowany w godzinach. Powstaje Sprint Backlog." },
  { czas: "Ostatnie 10 min", faza: "Commitment i zamknięcie", opis: "Zespół potwierdza commitment do Sprint Goal i Sprint Backlog. Scrum Master dokumentuje. Sprint oficjalnie startuje." },
];

const sprintMetrics = [
  { metryka: "Velocity", opis: "Story points dostarczone per sprint. Bazowa metryka do planowania pojemności.", target: "Stabilna lub rosnąca velocity w ostatnich 3-5 sprintach" },
  { metryka: "Sprint Completion Rate", opis: "% story points zacommitowanych które zostały dostarczone w sprincie.", target: "80-90%. Niższy = over-commitment. Wyższy 100% = under-commitment" },
  { metryka: "Carry-over Rate", opis: "% stories które nie zostały ukończone i przeniosły się do następnego sprintu.", target: "Poniżej 10-15%. Wysoki carry-over = problemy z estymacją lub scope creep" },
  { metryka: "Sprint Goal Achievement", opis: "Czy Sprint Goal został osiągnięty? Binary: tak/nie.", target: "90%+ sprintów z osiągniętym Sprint Goal" },
  { metryka: "Bug Rate per Sprint", opis: "Ile bugów odkrytych po sprincie (produkcja lub QA) pochodzi z danego sprintu.", target: "Malejący trend. Wysoki rate = problemy z jakością kodu lub testów" },
];

export default function BlogSprintPlanningCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sprint Planning — co to jest i jak przeprowadzić? | Fotz.pl"
        description="Sprint planning: przebieg ceremonii Scrum, estymacja (story points, planning poker), velocity, Sprint Goal i najczęstsze błędy w planowaniu sprintów."
        canonical="https://fotz.pl/blog/sprint-planning-co-to-jest-jak-przeprowadzic"

        keywords="Sprint Planning co to jest, Sprint Planning definicja, czym jest Sprint Planning, Sprint Planning przykłady, jak działa Sprint Planning, Sprint Planning znaczenie, Sprint Planning przewodnik"

        canonical="https://fotz.pl/blog/sprint-planning-co-to-jest-jak-przeprowadzic"
      />
      <ArticleSchema
        title="Sprint Planning — co to jest i jak przeprowadzić?"
        description="Sprint planning: agenda, estymacja, velocity, Sprint Goal, Definition of Ready i jak unikać najczęstszych problemów w planowaniu sprintów Scrum."
        url="https://fotz.pl/blog/sprint-planning-co-to-jest-jak-przeprowadzic"
        datePublished="2024-02-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sprint Planning", url: "https://fotz.pl/blog/sprint-planning-co-to-jest-jak-przeprowadzic" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Sprint Planning", url: "/blog/sprint-planning-co-to-jest-jak-przeprowadzic" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Agile / Scrum
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sprint Planning
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Ceremonia która uruchamia każdy sprint. Sprint planning odpowiada na dwa
              pytania: co dostarczymy i jak to zrobimy. Dobrze przeprowadzone
              = spokojny sprint. Źle = chaos i niedostarczanie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Max czas (2-tygodniowy)", value: "4h" },
                { label: "Cel completion rate", value: "80-90%" },
                { label: "Technika estymacji", value: "Planning Poker" },
                { label: "Uczestnicy", value: "PO + SM + Dev" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-purple-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agenda sprint planning</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Typowy przebieg sprint planning dla 2-tygodniowego sprintu z 6-8 osobowym teamem.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {sprintPlanningAgenda.map((a) => (
              <FadeInView key={a.faza}>
                <div className="bg-purple-50 border-l-4 border-purple-500 rounded-r-xl p-5">
                  <div className="flex gap-4 items-start">
                    <div className="bg-purple-600 text-white text-xs font-bold rounded px-2 py-1 flex-shrink-0">{a.czas}</div>
                    <div>
                      <h3 className="font-bold text-purple-900 mb-1">{a.faza}</h3>
                      <p className="text-gray-700 text-sm">{a.opis}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki sprintów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jak mierzyć zdrowie planowania i efektywność zespołu w sprintach.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {sprintMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-purple-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{m.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Target</div>
                          <p className="text-gray-700 font-medium">{m.target}</p>
                        </div>
                      </div>
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

      <RelatedArticles currentArticleId="sprint-planning-co-to-jest-jak-przeprowadzic" />
      <ContactSection />
    </Layout>
  );
}
