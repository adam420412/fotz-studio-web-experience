import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Design Sprint?",
    answer:
      "Design Sprint to 5-dniowy proces rozwiązywania problemów i testowania nowych pomysłów stworzony przez Jake'a Knappe w Google Ventures. W ciągu jednego tygodnia zespół definiuje problem, projektuje rozwiązanie, buduje prototyp i testuje go z prawdziwymi użytkownikami — zamiast spędzać miesiące na developmencie. Opisany w książce 'Sprint: How to Solve Big Problems and Test New Ideas in Just Five Days'.",
  },
  {
    question: "Kto powinien uczestniczyć w Design Sprint?",
    answer:
      "Optymalny zespół sprintowy: 5-7 osób (max 8). Powinien być cross-funkcyjny: Decider (CEO, VP — osoba z ostatnim słowem), Facilitator (prowadzi sprint — może być zewnętrzny), Designer, Product Manager, Engineer, Marketing/Sales, Customer Support (opcjonalnie ekspert domenowy). Kluczowe: Decider musi być dostępny przez wszystkie 5 dni. Brak Decidera = sprint bez autorytetu decyzyjnego.",
  },
  {
    question: "Kiedy warto robić Design Sprint?",
    answer:
      "Design Sprint sprawdza się gdy: stoisz przed dużą decyzją produktową lub biznesową, zaczynasz nowy projekt i chcesz szybko zwalidować kierunek, masz sprzeczne opinie w zespole o właściwym rozwiązaniu, chcesz przetestować hipotezę zanim zainwestujesz w development, wchodzisz na nowy rynek lub segment. Sprint nie nadaje się do: iteracyjnych ulepszeń (zbyt duże działo), problemów wymagających długich badań, sytuacji gdzie decyzja jest już podjęta.",
  },
  {
    question: "Czym Design Sprint różni się od hackathonu?",
    answer:
      "Hackathon skupia się na budowaniu — efektem jest działający kod lub produkt. Design Sprint skupia się na nauce — efektem jest prototyp (często niedziałający) i wyniki testów z użytkownikami. Hackathon trwa 24-48h, sprint 5 dni. Hackathon często kończy się bez walidacji rynkowej. Sprint zawsze kończy się testami z użytkownikami w piątek. Sprint jest bardziej strukturalny — każdy dzień ma jasny cel i format.",
  },
  {
    question: "Czy Design Sprint można skrócić do 4 dni?",
    answer:
      "Tak — Google Ventures opisuje 4-dniowy sprint (Monday Sprint) gdzie Maps i Define łączone są pierwszego dnia. Popularne są też sprinty 3-dniowe (compressed sprint) i nawet 1-dniowe warsztaty dla mniejszych decyzji. Kluczowe nie jest dokładna liczba dni, lecz sekwencja: zrozum problem → zdefiniuj cel → sketching → decyzja → prototyp → test. Skracanie jest możliwe gdy problem jest węższy i mniej ryzykowny.",
  },
];

const sprintDays = [
  {
    dzien: "Poniedziałek",
    cel: "MAP — Zrozumieć i zdefiniować",
    aktywności: ["Long term goal i sprint questions", "Map customer journey", "Expert interviews (How Might We notes)", "Target selection — gdzie skupić sprint"],
    efekt: "Wspólne rozumienie problemu + wybrany target na mapie",
    czas: "6–8 godzin",
  },
  {
    dzien: "Wtorek",
    cel: "SKETCH — Eksploracja rozwiązań",
    aktywności: ["Lightning demos (inspiracje z innych branż)", "4-Step sketch: Notes → Ideas → Crazy 8s → Solution sketch", "Praca indywidualna — nie burza mózgów"],
    efekt: "Każdy uczestnik ma pełny, konkretny szkic rozwiązania",
    czas: "6–8 godzin",
  },
  {
    dzien: "Środa",
    cel: "DECIDE — Podjąć decyzję",
    aktywności: ["Art museum (szkice na ścianie bez omówienia)", "Heat map voting (dot voting)", "Speed critique", "Storyboard (12-15 paneli prototypu)"],
    efekt: "Jeden storyboard gotowy do prototypowania",
    czas: "6–8 godzin",
  },
  {
    dzien: "Czwartek",
    cel: "PROTOTYPE — Zbudować fasadę",
    aktywności: ["Prototyping w Keynote/Figma/InVision", "Divide and conquer (podział ról)", "Trial run z memberami sprintu", "Interview script dla piątku"],
    efekt: "Klikalny prototyp wyglądający jak prawdziwy produkt",
    czas: "6–8 godzin",
  },
  {
    dzien: "Piątek",
    cel: "TEST — Uczyć się od użytkowników",
    aktywności: ["5 wywiadów (jeden na raz, ~1h każdy)", "Obserwacja + notatki w czasie rzeczywistym przez cały team", "Identyfikacja wzorców po wywiadach", "Wyciągnięcie wniosków i next steps"],
    efekt: "Dane z 5 wywiadów + wzorce + decyzja o dalszym kierunku",
    czas: "6–8 godzin",
  },
];

const sprintOutputs = [
  { output: "Zwalidowany prototyp", opis: "Wiesz co działa, co nie i dlaczego — bez wydania budżetu na development" },
  { output: "Wyrównanie zespołu", opis: "5 dni razem = wspólne rozumienie problemu i kontekst dla wszystkich decyzji" },
  { output: "User insights", opis: "5 wywiadów to 80% insightów które dałyby tysiące wywiadów — wg Nielsena" },
  { output: "Decyzja go/no-go", opis: "Dane do podjęcia decyzji o inwestycji w development lub zmianie kierunku" },
];

export default function BlogDesignSprintCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Design Sprint | Fotz Studio"
        description="Design Sprint — definicja, 5 dni sprintu (Map, Sketch, Decide, Prototype, Test), skład zespołu i kiedy używać. Przewodnik po metodzie Jake'a Knappe z…"
        canonicalUrl="https://fotz.pl/blog/design-sprint-co-to"

        keywords="Design Sprint co to jest, Design Sprint definicja, czym jest Design Sprint, Design Sprint startup, Design Sprint jak liczyć, Design Sprint wzór, Design Sprint przykłady"

        canonical="https://fotz.pl/blog/design-sprint-co-to"
      />
      <ArticleSchema
        title="Design Sprint — co to jest i jak wygląda 5-dniowy sprint?"
        description="Kompletny przewodnik po Design Sprint: 5 etapów (Map, Sketch, Decide, Prototype, Test), skład zespołu, kiedy stosować i różnica vs hackathon."
        url="https://fotz.pl/blog/design-sprint-co-to"
        datePublished="2024-01-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Design Sprint", url: "https://fotz.pl/blog/design-sprint-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Design Sprint", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Design Sprint — co to jest i jak wygląda 5-dniowy sprint?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Design Sprint to metoda Google Ventures: 5 dni od problemu do przetestowanego prototypu.
            Poznaj plan każdego dnia, skład zespołu i kiedy sprint naprawdę się opłaca.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Design Sprint?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Design Sprint</strong> to 5-dniowy ustrukturyzowany proces tworzony przez Jake'a Knappe w Google Ventures.
              W ciągu jednego tygodnia cross-funkcyjny zespół definiuje problem, tworzy rozwiązania,
              buduje prototyp i testuje go z prawdziwymi użytkownikami.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Design Sprint kompresuje miesiące pracy — planowania, dyskusji, developmentu — do 5 intensywnych dni.
              Zamiast budować i sprawdzać, sprint pozwala sprawdzić zanim zaczniesz budować.
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              {sprintOutputs.map((o, i) => (
                <div key={i} className="bg-violet-50 rounded-xl p-4 text-center">
                  <p className="font-bold text-violet-700 mb-2 text-sm">{o.output}</p>
                  <p className="text-slate-600 text-xs">{o.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 dni Design Sprint — plan</h2>
            <div className="space-y-5">
              {sprintDays.map((day, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-24 text-center flex-shrink-0">
                      <p className="font-bold text-violet-700">{day.dzien}</p>
                      <p className="text-xs text-slate-400">{day.czas}</p>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{day.cel}</h3>
                      <ul className="space-y-1 mb-3">
                        {day.aktywności.map((a, j) => (
                          <li key={j} className="text-sm text-slate-600">• {a}</li>
                        ))}
                      </ul>
                      <div className="bg-violet-50 rounded p-2 text-sm">
                        <span className="font-semibold text-violet-700">Efekt: </span>
                        <span className="text-violet-800">{day.efekt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Design Sprint</h2>
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

      <RelatedArticles currentArticleId="design-sprint-co-to" />
      <ContactSection />
    </Layout>
  );
}
