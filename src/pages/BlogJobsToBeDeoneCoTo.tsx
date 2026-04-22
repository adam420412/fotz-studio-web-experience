import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Jobs-to-be-Done (JTBD)?",
    answer:
      "Jobs-to-be-Done (JTBD) to teoria innowacji i framework badań użytkowników opracowany przez Claytona Christensena. Zakłada, że klienci nie kupują produktów dla nich samych — 'zatrudniają' je by wykonać określone 'zadanie' (job) w swoim życiu. Job to postęp który osoba chce osiągnąć w konkretnej sytuacji. JTBD pomaga odkryć prawdziwe motywacje zakupu, które często są zupełnie inne niż właściwości produktu czy demografia klienta.",
  },
  {
    question: "Jaka jest różnica między Job Statement a User Story?",
    answer:
      "User Story skupia się na funkcjonalności produktu i jest napisana z perspektywy systemu: 'Jako [użytkownik], chcę [funkcja], żeby [korzyść].' JTBD Job Statement skupia się na postępie klienta, niezależnie od rozwiązania: 'Kiedy [sytuacja], chcę [motywacja], żeby [oczekiwany wynik].' JTBD jest agnostyczne wobec rozwiązania — definiuje problem, nie implementację. User Story definiuje już jak system ma zachować się. JTBD poprzedza user stories — odkrywa co budować, zanim zdecydujesz jak.",
  },
  {
    question: "Czym są 3 typy jobów w JTBD?",
    answer:
      "Clayton Christensen wyróżnił trzy wymiary każdego 'joba': Functional Job (zadanie funkcjonalne) — konkretna, praktyczna czynność którą chcesz wykonać (np. 'dotrzeć do centrum za 30 minut'); Emotional Job (zadanie emocjonalne) — jak chcesz się czuć w trakcie lub po (np. 'czuć się pewnie, nie być spóźnionym'); Social Job (zadanie społeczne) — jak chcesz być postrzegany przez innych (np. 'wyglądać profesjonalnie i punktualnie'). Najsilniejsze propozycje wartości adresują wszystkie trzy.",
  },
  {
    question: "Jak przeprowadzać badania JTBD?",
    answer:
      "Metoda switch interviews (wywiad przełączania) od Bob Moesty: rozmawiaj z klientami którzy niedawno kupili lub zrezygnowali z produktu. Pytania: 'Co się wydarzyło co sprawiło, że zacząłeś szukać? Jak wcześniej rozwiązywałeś ten problem? Co zaważyło na wyborze? Co sprawiło, że się wahałeś?' Szukaj timeline events — konkretnych momentów i kontekstów. Kluczowe: nie pytaj co chcą w produkcie, pytaj o ich życie i kontekst. Minimum 8-10 wywiadów by zobaczyć wzorce.",
  },
  {
    question: "Jak JTBD łączy się z innowacją produktową?",
    answer:
      "JTBD zmienia perspektywę innowacji z 'co możemy dodać do produktu?' na 'co klient próbuje osiągnąć i czy możemy pomóc to osiągnąć lepiej, szybciej lub taniej?'. Innowacja disrupcyjna często przychodzi od rozwiązania tego samego 'joba' przez zupełnie nowy mechanizm — Uber nie zastąpił taksówek przez bycie lepszą taksówką, ale przez inny mechanizm dla tego samego joba 'dotrzeć z A do B bezpiecznie'. JTBD pozwala też odkryć 'niemający nazwy konkurentów' — np. spreadsheet Excel jest często prawdziwym konkurentem oprogramowania CRM.",
  },
];

const jobTypes = [
  {
    typ: "Functional Job",
    opis: "Praktyczne, konkretne zadanie — czynność którą użytkownik chce wykonać",
    przykład: "Dotrzeć na lotnisko na 2 godziny przed odlotem nie martwiąc się parkingiem",
    jak_adresować: "Niezawodność, szybkość, efektywność — metryki funkcjonalne",
  },
  {
    typ: "Emotional Job",
    opis: "Jak użytkownik chce się czuć — wewnętrzna motywacja emocjonalna",
    przykład: "Czuć się spokojnym i przygotowanym w podróży biznesowej",
    jak_adresować: "UX, komunikacja statusu, potwierdzenia, obsługa klienta, tone of voice",
  },
  {
    typ: "Social Job",
    opis: "Jak użytkownik chce być postrzegany przez innych — motywacja tożsamościowa",
    przykład: "Wyglądać profesjonalnie i sprawnie przed współpracownikami przy wyjeździe",
    jak_adresować: "Branding, testimoniale, aspekty prestiżu, design, social proof",
  },
];

const jtbdExamples = [
  {
    produkt: "Milkshake McDonald's (klasyczny przykład Christensena)",
    jtbd: "Kiedy rano jadę do pracy, chcę czegoś co zajmie mi ręce i usta przez długi czas, żeby monotonna podróż była przyjemniejsza i byłem najedzony do południa.",
    insight: "Konkurencją nie jest inny milkshake — to banan, bagel, kawa. Grubszy, wolniej wciągany milkshake był lepszym rozwiązaniem.",
  },
  {
    produkt: "Slack",
    jtbd: "Kiedy pracuję zdalnie z rozproszonym teamem, chcę wiedzieć co się dzieje bez zalewu emailami, żeby być na bieżąco bez utraty kontekstu.",
    insight: "Nie zastąpił emaila — zastąpił chaotyczną komunikację emailową wewnątrz firmy. Prawdziwy konkurent to email + Skype + share folder.",
  },
  {
    produkt: "Notion",
    opis: "Kiedy zarządzam wiedzą zespołu, chcę mieć jedno miejsce na wszystko zamiast rozsyłać linki do 5 różnych narzędzi, żeby team był zawsze zsynchronizowany.",
    insight: "Konkuruje z Google Docs + Confluence + Trello + Airtable jednocześnie — job 'centralizacja wiedzy i procesów'.",
  },
];

const switchInterviewQuestions = [
  { faza: "Timeline — Pierwsze myśli", pytania: "Kiedy pierwszy raz pomyślałeś, że potrzebujesz rozwiązania tego problemu? Co się wtedy wydarzyło?" },
  { faza: "Passive Looking", pytania: "Jak radziłeś sobie z tym problemem wcześniej? Co cię to kosztowało (czas/pieniądze/frustracja)?" },
  { faza: "Active Looking", pytania: "W którym momencie zacząłeś aktywnie szukać rozwiązania? Co sprawiło, że to był właśnie ten moment?" },
  { faza: "Decision", pytania: "Jak wyglądał twój research? Co zaważyło na wyborze? Co sprawiło, że wahałeś się przed zakupem?" },
  { faza: "First use", pytania: "Jak wyglądało pierwsze użycie? Kiedy poczułeś, że to był dobry wybór (lub nie)?" },
];

export default function BlogJobsToBeDeoneCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Jobs-to-be-Done — co to jest? Framework JTBD w product management"
        description="Jobs-to-be-Done (JTBD) — definicja, 3 typy jobów (functional, emotional, social), switch interviews, przykłady (Slack, Notion, McDonald's). Przewodnik po…"
        canonical="https://fotz.pl/blog/jobs-to-be-done-co-to"

        keywords="Jobs-to-be-Done co to jest, Jobs-to-be-Done definicja, czym jest Jobs-to-be-Done, Jobs-to-be-Done przykłady, jak działa Jobs-to-be-Done, Jobs-to-be-Done znaczenie, Jobs-to-be-Done przewodnik"

        canonical="https://fotz.pl/blog/jobs-to-be-done-co-to"
      />
      <ArticleSchema
        title="Jobs-to-be-Done — co to jest i jak stosować framework JTBD?"
        description="Kompletny przewodnik po JTBD: teoria Claytona Christensena, 3 typy jobów, switch interviews i przykłady zastosowania w product management."
        url="https://fotz.pl/blog/jobs-to-be-done-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Jobs-to-be-Done (JTBD)", url: "https://fotz.pl/blog/jobs-to-be-done-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Jobs-to-be-Done (JTBD)", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Jobs-to-be-Done — co to jest i jak stosować JTBD?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Klienci nie kupują produktów — 'zatrudniają' je, by wykonać zadanie.
            JTBD to framework który rewolucjonizuje badania użytkowników i innowację produktową.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Jobs-to-be-Done?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Jobs-to-be-Done (JTBD)</strong> to teoria innowacji opracowana przez Claytona Christensena.
              Zakłada, że klienci nie kupują produktów dla ich cech — "zatrudniają" je by osiągnąć
              postęp w konkretnym aspekcie swojego życia. "Job" to progres który osoba chce osiągnąć
              w konkretnej sytuacji — niezależnie od produktu lub rozwiązania.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Fundamentalna zmiana perspektywy: zamiast pytać "Kto jest naszym klientem?" (demografia)
              pytaj "W jakiej sytuacji klient 'zatrudnia' nasz produkt i jaki postęp próbuje osiągnąć?"
              To pozwala odkryć prawdziwą konkurencję i rzeczywiste motywacje zakupu.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6">
              <p className="text-sm text-slate-400 mb-2">Klasyczny cytat Clayton Christensen:</p>
              <p className="text-lg italic text-slate-200">
                "People don't simply buy products or services; they pull them into their lives to make progress."
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 typy jobów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 typy jobów — functional, emotional, social</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {jobTypes.map((j, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-teal-700 mb-2">{j.typ}</h3>
                  <p className="text-slate-600 text-sm mb-3">{j.opis}</p>
                  <div className="space-y-2 text-sm">
                    <div className="bg-teal-50 rounded p-2">
                      <p className="text-xs font-semibold text-teal-600 mb-1">Przykład:</p>
                      <p className="text-teal-800 italic">{j.przykład}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Jak adresować:</p>
                      <p className="text-slate-700">{j.jak_adresować}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Przykłady JTBD */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">JTBD w praktyce — przykłady</h2>
            <div className="space-y-4">
              {jtbdExamples.map((e, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-3">{e.produkt}</h3>
                  <div className="bg-teal-50 rounded-lg p-4 mb-3 font-mono text-sm text-teal-800">
                    "{e.jtbd || e.opis}"
                  </div>
                  <div className="bg-amber-50 rounded p-3 text-sm text-amber-800">
                    <span className="font-semibold">Kluczowy insight: </span>{e.insight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Switch Interviews */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Switch Interviews — jak badać JTBD?</h2>
            <p className="text-slate-600 mb-6">Wywiady przełączania (Bob Moesta) — rozmawiasz z klientami którzy niedawno kupili lub zrezygnowali z produktu, śledząc timeline decyzji zakupowej.</p>
            <div className="space-y-3">
              {switchInterviewQuestions.map((q, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <p className="font-semibold text-slate-900 mb-1">{q.faza}</p>
                      <p className="text-slate-600 text-sm italic">{q.pytania}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Jobs-to-be-Done</h2>
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

      <RelatedArticles currentArticleId="jobs-to-be-done-co-to" />
      <ContactSection />
    </Layout>
  );
}
