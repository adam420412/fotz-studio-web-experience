import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest sprint retrospective?",
    answer:
      "Sprint retrospective (retrospektywa sprintu) to jeden z czterech ceremonii Scrum — regularne spotkanie zespołu Agile na koniec każdego sprintu, podczas którego analizuje się co poszło dobrze, co wymaga poprawy i jakie konkretne działania podjąć w kolejnym sprincie. Retro skupia się na procesie i współpracy zespołu — nie na produkcie (od tego jest Sprint Review). Dobrze prowadzona retrospektywa to fundament ciągłego doskonalenia (kaizen) w Agile.",
  },
  {
    question: "Ile powinna trwać retrospektywa?",
    answer:
      "Zgodnie ze Scrum Guide: maksymalnie 3 godziny dla miesięcznego sprintu. Dla 2-tygodniowych sprintów (najpopularniejszy format) — 1-1.5 godziny. Dla 1-tygodniowych — 45-60 minut. W praktyce: trzymaj retro krótkie i energetyczne. Lepsze jest 60-minutowe skoncentrowane retro niż 3-godzinne spotkanie które traci energię po pierwszej godzinie. Stosuj timeboxing dla każdej sekcji agendy.",
  },
  {
    question: "Czym różni się sprint retrospective od sprint review?",
    answer:
      "Sprint Review (Przegląd Sprintu) skupia się na produkcie — zespół prezentuje stakeholderom co zostało zbudowane w sprincie, zbiera feedback i aktualizuje Product Backlog. Sprint Retrospective skupia się na procesie — jak zespół pracuje razem, co utrudnia lub ułatwia pracę, jak się poprawić. Review jest zewnętrzne (ze stakeholderami), retro jest wewnętrzne (tylko Scrum Team). Obie ceremonie są niezbędne — jedna bez drugiej to niekompletny Scrum.",
  },
  {
    question: "Jakie są popularne formaty retrospektywy?",
    answer:
      "Start/Stop/Continue — najprostszy: co zacząć robić, co przestać, co kontynuować. Mad/Sad/Glad — emocjonalne podejście skupiające się na odczuciach zespołu. 4Ls (Liked, Learned, Lacked, Longed For) — bardziej strukturyzowany format. Sailboat/Speedboat — metafora łodzi: wiatr (co nas napędza), kotwice (co nas hamuje), wyspy (cel), skały (ryzyka). WWW (What Went Well, What Didn't, What We'll Do) — klasyczny format 3 pytań. Team Health Check (Spotify) — ocena wielu wymiarów zdrowia zespołu.",
  },
  {
    question: "Jak sprawić, by retrospectywa generowała realne zmiany?",
    answer:
      "Kluczowe czynniki skuteczności: focus na 1-3 action items maksymalnie (nie 10 punktów które nikt nie wykona), każdy action item ma właściciela i deadline, action items z poprzedniego retro są przeglądane na początku kolejnego, psychologiczne bezpieczeństwo (bez fear of blame — Prime Directive Norm Keerthy: 'Zakładamy, że wszyscy zrobili co mogli, biorąc pod uwagę co wiedzieli'), rotacja facylitatora, różnorodność formatów by uniknąć rutyny.",
  },
];

const retroFormats = [
  {
    format: "Start / Stop / Continue",
    opis: "Klasyczny, prosty format skupiony na działaniach",
    pytania: ["Co powinniśmy ZACZĄĆ robić?", "Co powinniśmy PRZESTAĆ robić?", "Co powinniśmy KONTYNUOWAĆ?"],
    kiedy: "Dobry jako domyślny format, szczególnie dla nowych teamów",
    czas: "60 min",
  },
  {
    format: "Sailboat (Łódź żaglowa)",
    opis: "Metafora nawigacyjna — wizualna i angażująca",
    pytania: ["Wiatr (co nas napędza?)", "Kotwice (co nas hamuje?)", "Wyspy (nasz cel?)", "Skały (ryzyka?)"],
    kiedy: "Świetny do głębszej analizy kontekstu i blokad, dla teamów z doświadczeniem",
    czas: "75-90 min",
  },
  {
    format: "4Ls (Liked, Learned, Lacked, Longed For)",
    opis: "Cztery perspektywy — bardziej kompletna analiza sprintu",
    pytania: ["Co LUBIŁEM?", "Czego SIĘ NAUCZYŁEM?", "Czego BRAKOWAŁO?", "Za czym TĘSKNIŁEM?"],
    kiedy: "Dobry do bardziej refleksyjnych retrospektyw, po trudnych sprintach",
    czas: "60-75 min",
  },
  {
    format: "Team Health Check (Spotify)",
    opis: "Ocena zdrowia zespołu w wielu wymiarach — czerwony/żółty/zielony",
    pytania: ["Delivery value", "Fun", "Pawns or Players", "Speed", "Mission", "Easy to Release", "Learning"],
    kiedy: "Kwartalnie dla oceny kondycji zespołu i długoterminowych trendów",
    czas: "90-120 min",
  },
];

const retroAgenda = [
  { etap: "Check-in / Energizer (5-10 min)", cel: "Wprowadzenie zespołu w tryb retrospektywny — icebreaker, temperatura nastroju, kontrakt społeczny", facylitator: "Scrum Master" },
  { etap: "Prime Directive (2-3 min)", cel: "Przypomnienie zasady 'zakładamy, że wszyscy zrobili co mogli' — budowanie psychologicznego bezpieczeństwa", facylitator: "Scrum Master" },
  { etap: "Przegląd action items (5-10 min)", cel: "Co stało się z punktami działania z poprzedniej retro? Które wykonano, które nie i dlaczego?", facylitator: "Cały team" },
  { etap: "Zbieranie danych (15-20 min)", cel: "Indywidualne notowanie obserwacji (karteczki/digital board) bez dyskusji — każdy ma głos", facylitator: "Scrum Master (timeboxer)" },
  { etap: "Grupowanie i dyskusja (15-20 min)", cel: "Grupowanie podobnych tematów, dot voting na priorytety, dyskusja nad kluczowymi wątkami", facylitator: "Cały team" },
  { etap: "Action Items (10-15 min)", cel: "Maksymalnie 3 konkretne działania z właścicielem i terminem. SMART — Specific, Measurable, Achievable, Relevant, Time-bound", facylitator: "Cały team" },
  { etap: "Retro of retro / Close (5 min)", cel: "Ocena samej retrospektywy — co było dobre w tym retro, co możemy poprawić następnym razem?", facylitator: "Scrum Master" },
];

const retroMistakes = [
  { błąd: "Brak action items lub za dużo", problem: "0 action items = nic się nie zmieni. 10+ = żadnego nie wykonamy", rozwiązanie: "Max 3 action items z właścicielem i deadline" },
  { błąd: "Nikt nie sprawdza poprzednich action items", problem: "Retro staje się rytuałem bez konsekwencji — zespół przestaje wierzyć w zmianę", rozwiązanie: "Zawsze zacznij od przeglądu poprzednich action items" },
  { błąd: "Blame game zamiast systemu", problem: "Retro staje się festiwalem narzekań i wskazywania palcem", rozwiązanie: "Prime Directive na początku + focus na procesie, nie ludziach" },
  { błąd: "Ten sam format co sprint", problem: "Rutyna zabija szczerość — zespół przestaje się angażować", rozwiązanie: "Rotuj formaty retro co 2-4 sprinty" },
  { błąd: "Anulowanie retro gdy sprint był dobry", problem: "Retro jest tylko wtedy gdy coś poszło źle — to błąd", rozwiązanie: "Retro zawsze — nawet doskonały sprint ma lekcje" },
];

export default function BlogSprintRetrospectiveCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sprint Retrospective — co to jest? Retrospektywa w Scrum i Agile"
        description="Sprint retrospective — definicja, 4 formaty (Start/Stop/Continue, Sailboat, 4Ls, Spotify Health Check), agenda 7 kroków i 5 błędów. Przewodnik po retrospektywie sprintu."
        canonicalUrl="https://fotz.pl/blog/sprint-retrospective-co-to"
      />
      <ArticleSchema
        title="Sprint Retrospective — co to jest i jak prowadzić retrospektywę?"
        description="Kompletny przewodnik po sprint retrospective: 4 popularne formaty, agenda 7 kroków, błędy i różnica vs. sprint review."
        url="https://fotz.pl/blog/sprint-retrospective-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sprint Retrospective", url: "https://fotz.pl/blog/sprint-retrospective-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Sprint Retrospective" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Sprint Retrospective — co to jest i jak prowadzić retro?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Retrospektywa to serce ciągłego doskonalenia w Agile. Poznaj 4 formaty retro,
            agendę 7 kroków i 5 błędów które sprawiają, że retro nie generuje żadnej zmiany.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest sprint retrospective?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Sprint retrospective</strong> to regularne spotkanie zespołu Agile/Scrum
              na koniec każdego sprintu, podczas którego analizuje się jak pracowała cała drużyna —
              co szło dobrze, co wymaga poprawy i jakie konkretne kroki podjąć w kolejnym sprincie.
              To nie narzekanie i nie ocena wyników — to wspólna praca nad doskonaleniem procesu.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              "Inspect and adapt" — to zasada Agile. Retro jest momentem, w którym zespół
              zatrzymuje się, by spojrzeć wstecz i świadomie poprawić swój sposób pracy.
              Bez retrospektywy Agile to tylko szybsze waterfall.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* Formaty */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 popularne formaty retrospektywy</h2>
            <div className="space-y-4">
              {retroFormats.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-slate-900 text-lg">{f.format}</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold rounded-full px-3 py-1 flex-shrink-0">{f.czas}</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{f.opis}</p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-purple-50 rounded p-3">
                      <p className="text-xs font-semibold text-purple-600 mb-1">Pytania / Kategorie:</p>
                      <ul className="text-purple-800 space-y-1">
                        {f.pytania.map((p, j) => <li key={j}>{p}</li>)}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Kiedy używać:</p>
                      <p className="text-slate-700">{f.kiedy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Agenda */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Agenda retrospektywy — 7 etapów</h2>
            <div className="space-y-3">
              {retroAgenda.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{a.etap}</h3>
                      <p className="text-slate-600 text-sm">{a.cel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Błędy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 błędów które zabijają retrospektywę</h2>
            <div className="space-y-4">
              {retroMistakes.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-600 mb-1">Błąd #{i + 1}:</p>
                      <p className="text-red-800 font-medium">{m.błąd}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-3">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Problem:</p>
                      <p className="text-orange-800">{m.problem}</p>
                    </div>
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-600 mb-1">Rozwiązanie:</p>
                      <p className="text-green-800">{m.rozwiązanie}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — sprint retrospective</h2>
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

      <ContactSection />
    </Layout>
  );
}
