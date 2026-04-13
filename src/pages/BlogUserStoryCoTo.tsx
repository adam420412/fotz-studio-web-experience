import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest user story?",
    answer:
      "User story (historyjka użytkownika) to krótki opis funkcji lub wymagania z perspektywy końcowego użytkownika, napisany w formacie: 'Jako [rola], chcę [cel/działanie], żeby [korzyść/wartość].' User stories są podstawowym elementem Product Backlogu w Agile i Scrum. Nie są specyfikacją techniczną — to zaproszenie do rozmowy o potrzebie użytkownika. Szczegóły są doprecyzowywane w kryteriach akceptacji i rozmowach w trakcie sprint refinement.",
  },
  {
    question: "Czym są kryteria akceptacji (acceptance criteria)?",
    answer:
      "Kryteria akceptacji to lista warunków, które muszą być spełnione, by user story mogła być uznana za ukończoną. Odpowiadają na pytanie: 'Skąd wiemy, że ta funkcjonalność działa poprawnie?' Format Given/When/Then (Gherkin): 'Given [kontekst], When [akcja użytkownika], Then [oczekiwany wynik]'. Dobre AC są testowalne, jednoznaczne i pisane językiem biznesowym — nie technicznym. Zbyt mało AC = niejasne wymagania; zbyt dużo = micro-management.",
  },
  {
    question: "Jaka jest różnica między user story a epicem?",
    answer:
      "Epic to duże wymaganie lub funkcjonalność — zbyt duża, by zmieścić się w jednym sprincie. Dzielona jest na mniejsze user stories. Hierarchia: Initiative (cel strategiczny) → Epic (duże wymaganie) → User Story (konkretna funkcjonalność w jednym sprincie) → Task (zadania techniczne do wykonania). Przykład: Epic 'System płatności' rozkłada się na stories: 'Jako klient chcę zapłacić kartą', 'Jako klient chcę zobaczyć potwierdzenie zamówienia', itd.",
  },
  {
    question: "Co to jest DoD (Definition of Done)?",
    answer:
      "Definition of Done (DoD) to lista kryteriów które muszą być spełnione przez KAŻDĄ user story, by mogła być uznana za 'Done'. Typowa DoD: kod napisany i code reviewed, testy jednostkowe napisane i przechodzą, testy integracyjne przechodzą, dokumentacja zaktualizowana, feature flagiem wyłączone lub wypuszczone na produkcję, acceptance criteria spełnione, PO zaakceptował. DoD jest wspólnym kontraktem całego Scrum Teamu — eliminiuje nieporozumienia co to znaczy 'zrobione'.",
  },
  {
    question: "Jak szacować user stories?",
    answer:
      "Najpopularniejsza metoda: Story Points (punkty storyowe) — relatywne, nie absolutne jednostki miary złożoności i ryzyka (nie czasu). Używaj Fibonacci sequence: 1, 2, 3, 5, 8, 13, 21 lub T-shirt sizes (XS, S, M, L, XL). Technika: Planning Poker — każdy szacuje indywidualnie, dyskusja gdy rozbieżności. Zasada: story powyżej 8-13 punktów to sygnał do podziału. Velocity (suma story points ukończonych w sprincie) pozwala prognozować tempo dostarczania.",
  },
];

const userStoryFormat = {
  format: "Jako [rola], chcę [cel/działanie], żeby [korzyść/wartość].",
  dobry_przykład: "Jako zarejestrowany użytkownik, chcę zobaczyć historię swoich zamówień, żeby sprawdzić status dostawy bez kontaktowania się z obsługą klienta.",
  zły_przykład1: "Jako system, chcę zmodyfikować tabelę Orders, żeby dodać kolumnę status.",
  zły_przykład2: "Jako użytkownik, chcę żeby aplikacja była szybka.",
  zasady: [
    "Perspektywa osoby, nie systemu — 'Jako użytkownik', nie 'Jako system'",
    "Konkretna rola — 'Jako Admin firmy', nie 'Jako użytkownik'",
    "Cel użytkownika, nie implementacja — 'zobaczyć historię', nie 'zmodyfikować bazę danych'",
    "Jasna korzyść biznesowa — 'żeby' musi być wartością, nie technicznym opisem",
  ],
};

const investCriteria = [
  { litera: "I", słowo: "Independent", opis: "Niezależna — history powinna być możliwa do realizacji niezależnie od innych" },
  { litera: "N", słowo: "Negotiable", opis: "Negocjowalna — szczegóły są do ustalenia, story to zaproszenie do rozmowy" },
  { litera: "V", słowo: "Valuable", opis: "Wartościowa — dostarcza wartość użytkownikowi lub biznesowi" },
  { litera: "E", słowo: "Estimable", opis: "Szacowalna — team jest w stanie oszacować nakład pracy" },
  { litera: "S", słowo: "Small", opis: "Mała — mieszcząca się w jednym sprincie, max 8-13 story points" },
  { litera: "T", słowo: "Testable", opis: "Testowalna — istnieje sposób na potwierdzenie że story jest ukończona" },
];

const acceptanceCriteriaExamples = [
  {
    story: "Jako zarejestrowany użytkownik chcę zobaczyć historię zamówień",
    ac: [
      "Given: Użytkownik jest zalogowany, When: Klika 'Moje zamówienia', Then: Widzi listę max 50 ostatnich zamówień posortowanych od najnowszego",
      "Given: Lista zamówień jest załadowana, When: Użytkownik kliknie na zamówienie, Then: Widzi szczegóły: produkty, kwotę, status, adres dostawy",
      "Given: Użytkownik nie ma żadnych zamówień, When: Wchodzi w 'Moje zamówienia', Then: Widzi komunikat 'Brak zamówień' z linkiem do sklepu",
    ],
  },
];

const storyPointsScale = [
  { punkty: "1", znaczenie: "Trywialnie prosta zmiana — zmiana tekstu, kolor przycisku" },
  { punkty: "2", znaczenie: "Prosta, dobrze znana zmiana — niewielkie ryzyko, jasne wymagania" },
  { punkty: "3", znaczenie: "Standardowe zadanie — kilka plików, znana technologia" },
  { punkty: "5", znaczenie: "Średniej złożoności — kilka komponentów, możliwe edge cases" },
  { punkty: "8", znaczenie: "Złożone — wiele komponentów, integracje, wyższe ryzyko" },
  { punkty: "13", znaczenie: "Bardzo złożone — rozważ podział na mniejsze stories" },
  { punkty: "21+", znaczenie: "Epic — zdecydowanie podziel, zbyt duże ryzyko w jednym sprincie" },
];

export default function BlogUserStoryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="User Story | Fotz Studio"
        description="User story — definicja, format 'Jako [rola]...', kryteria INVEST, acceptance criteria (Given/When/Then), story points i Definition of Done. Przewodnik…"
        canonicalUrl="https://fotz.pl/blog/user-story-co-to"

        keywords="User Story co to jest, User Story definicja, czym jest User Story, User Story przykłady, jak działa User Story, User Story znaczenie, User Story przewodnik"

        canonical="https://fotz.pl/blog/user-story-co-to"
      />
      <ArticleSchema
        title="User Story — co to jest i jak pisać historyjki użytkownika?"
        description="Kompletny przewodnik po user story: format, kryteria INVEST, acceptance criteria, story points i DoD w metodologii Agile/Scrum."
        url="https://fotz.pl/blog/user-story-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "User Story", url: "https://fotz.pl/blog/user-story-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "User Story" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            User Story — co to jest i jak pisać historyjki użytkownika?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            User stories są fundamentem Product Backlogu w Agile. Poznaj format, kryteria INVEST,
            jak pisać acceptance criteria i jak szacować story points.
          </p>
        </div>
      </section>

      {/* Format */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Format user story</h2>
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 text-center">
              <p className="text-2xl font-mono text-green-400">{userStoryFormat.format}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <p className="text-xs font-semibold text-green-600 mb-2">Dobry przykład:</p>
                <p className="text-green-800 text-sm italic">"{userStoryFormat.dobry_przykład}"</p>
              </div>
              <div className="space-y-2">
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-xs font-semibold text-red-600 mb-1">Zły — perspektywa systemu:</p>
                  <p className="text-red-700 text-xs italic">"{userStoryFormat.zły_przykład1}"</p>
                </div>
                <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                  <p className="text-xs font-semibold text-red-600 mb-1">Zły — brak konkretnej korzyści:</p>
                  <p className="text-red-700 text-xs italic">"{userStoryFormat.zły_przykład2}"</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {userStoryFormat.zasady.map((z, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <span>{z}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* INVEST */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kryteria INVEST — dobra user story</h2>
            <p className="text-slate-600 mb-6">Akronim INVEST to checklist jakości user story — każda dobra historyjka powinna spełniać wszystkie 6 kryteriów.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {investCriteria.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                  <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">{c.litera}</div>
                  <h3 className="font-bold text-violet-700 mb-2">{c.słowo}</h3>
                  <p className="text-slate-600 text-sm">{c.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Acceptance Criteria */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Acceptance Criteria — Given/When/Then</h2>
            <p className="text-slate-600 mb-6">Format Gherkin: Given (kontekst), When (akcja), Then (oczekiwany wynik) — czytelny zarówno dla biznesu jak i developerów.</p>
            {acceptanceCriteriaExamples.map((e, i) => (
              <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <p className="font-bold text-slate-900 mb-4 italic">"{e.story}"</p>
                <div className="space-y-2">
                  {e.ac.map((ac, j) => (
                    <div key={j} className="bg-white rounded-lg p-3 border border-slate-200 text-sm text-slate-700 font-mono">
                      <span className="text-violet-600 font-semibold">AC{j + 1}: </span>{ac}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Story Points */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Skala story points</h2>
            <div className="grid md:grid-cols-2 gap-3">
              {storyPointsScale.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 flex items-center gap-4">
                  <div className="w-12 h-12 bg-violet-600 text-white rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0">{s.punkty}</div>
                  <p className="text-slate-700 text-sm">{s.znaczenie}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — user story</h2>
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
