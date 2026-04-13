import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest usability testing?",
    answer:
      "Usability testing (testy użyteczności) to metoda badań UX, w której prawdziwi użytkownicy wykonują realne zadania w produkcie podczas gdy badacz obserwuje, gdzie napotykają trudności. Celem jest wykrycie problemów z użytecznością — gdzie produkt jest mylący, frustrujący lub nieefektywny — zanim zostanie wdrożony lub rozesłany do szerszej grupy. Usability testing to najskuteczniejsza metoda weryfikacji hipotez projektowych.",
  },
  {
    question: "Ile osób potrzeba do usability testów?",
    answer:
      "Jakob Nielsen ustalił, że 5 użytkowników ujawnia 85% problemów z użytecznością. Po 5 osobach krzywa wzrostu nowych znalezisk staje się płaska — kolejni użytkownicy powtarzają te same problemy. Reguła: przeprowadź 5 testów, napraw znalezione problemy, przetestuj ponownie z 5 nowymi użytkownikami. Dla większej pewności lub wielu segmentów: 5 osób na każdy segment (np. 5 power users + 5 new users).",
  },
  {
    question: "Czym różni się moderowany od niemoderowanego testu użyteczności?",
    answer:
      "Moderowany (moderated) test: badacz jest obecny podczas sesji, może zadawać pytania, prosić o głośne myślenie (think-aloud). Lepszy do eksploracji głębszych powodów zachowań. Niemoderowany (unmoderated) test: użytkownicy wykonują zadania samodzielnie przez narzędzie (Maze, UserTesting.com). Szybszy, tańszy, skalowalny — ale bez możliwości zadawania pytań follow-up. Oba podejścia są komplementarne.",
  },
  {
    question: "Co to jest metoda 'think aloud' w usability testing?",
    answer:
      "Think-aloud protocol (głośne myślenie) to technika polegająca na proszeniu uczestnika o werbalizowanie każdej myśli podczas wykonywania zadania: 'Co teraz myślę... szukam przycisku... wydaje mi się, że powinienem kliknąć tutaj...'. Metoda ujawnia model mentalny użytkownika, jego oczekiwania i punkty konfuzji, których nie widać w samych kliknięciach. Jest to fundamentalna technika badań UX.",
  },
  {
    question: "Jak mierzyć wyniki usability testów?",
    answer:
      "Kluczowe metryki usability: Task Completion Rate (% uczestników którzy ukończyli zadanie), Time on Task (jak długo trwało wykonanie), Error Rate (liczba błędów na zadanie), SUS Score (System Usability Scale — kwestionariusz 10 pytań, wynik 0–100), oraz dane jakościowe: co mówili uczestnicy, gdzie się mylili. Benchmark SUS: poniżej 51 = słaba użyteczność, 68+ = dobra, 80+ = znakomita.",
  },
];

const testingMethods = [
  {
    metoda: "Moderowane (Moderated)",
    opis: "Badacz prowadzi sesję na żywo — zdalnie lub twarzą w twarz. Może zadawać pytania i eksplorować nieoczekiwane zachowania.",
    kiedy: "Nowe koncepty, złożone przepływy, potrzeba głębokiego rozumienia 'dlaczego'",
    narzędzia: "Zoom, Lookback.io, UserZoom",
    próba: "5–8 uczestników na segment",
    koszt: "Wysoki (czas moderatora)",
  },
  {
    metoda: "Niemoderowane (Unmoderated)",
    opis: "Uczestnicy wykonują zadania samodzielnie przez platformę. Nagrania, kliknięcia i metryki zbierane automatycznie.",
    kiedy: "Walidacja konkretnych przepływów, duże próby, ograniczony budżet i czas",
    narzędzia: "UserTesting.com, Maze, Useberry, Lookback",
    próba: "20–50 uczestników",
    koszt: "Średni (narzędzie + panel)",
  },
  {
    metoda: "Guerrilla Testing",
    opis: "Szybkie, nieformalne testy z przypadkowymi osobami w kawiarniach, biurach, korytarzach. 15–20 minut per sesja.",
    kiedy: "Wczesne prototypy, szybka walidacja, ograniczony budżet",
    narzędzia: "Papierowe prototypy, telefon/laptop",
    próba: "5–10 osób",
    koszt: "Niski (czas badacza + kawa)",
  },
  {
    metoda: "Remote (zdalne)",
    opis: "Moderowane lub niemoderowane sesje prowadzone przez internet. Uczestnik korzysta z własnego urządzenia w naturalnym środowisku.",
    kiedy: "Globalne produkty, hard-to-reach użytkownicy, post-COVID standard",
    narzędzia: "Lookback.io, UserTesting.com, dscout",
    próba: "5+ na metodę",
    koszt: "Średni",
  },
];

const taskDesignRules = [
  {
    zasada: "Realne scenariusze, nie instrukcje",
    źle: "'Kliknij przycisk Ustawienia i zmień język na angielski'",
    dobrze: "'Wyobraź sobie, że chcesz przełączyć aplikację na język angielski — jak byś to zrobił?'",
    dlaczego: "Instrukcja zdradza gdzie jest rozwiązanie. Scenariusz testuje czy użytkownik sam je znajdzie.",
  },
  {
    zasada: "Jeden cel na zadanie",
    źle: "'Zarejestruj się, skonfiguruj profil i dodaj pierwszego klienta'",
    dobrze: "'Zarejestruj nowe konto w aplikacji'",
    dlaczego: "Wielozadaniowość zaciemnia gdzie dokładnie wystąpił problem.",
  },
  {
    zasada: "Bez wskazówek w treści zadania",
    źle: "'Użyj menu nawigacyjnego w lewym górnym rogu aby znaleźć raporty'",
    dobrze: "'Chcesz zobaczyć raport sprzedażowy za ostatni miesiąc — jak byś to zrobił?'",
    dlaczego: "Wskazówki unieważniają test — mierzysz zdolność czytania, nie znajdowania.",
  },
];

const susQuestions = [
  "Myślę, że chciałbym często używać tego systemu",
  "System jest niepotrzebnie skomplikowany",
  "System jest łatwy w użyciu",
  "Myślę, że potrzebowałbym wsparcia technika, aby korzystać z systemu",
  "Funkcje w systemie są dobrze zintegrowane",
  "Myślę, że jest zbyt wiele niespójności w tym systemie",
  "Wyobrażam sobie, że większość ludzi nauczyłaby się szybko korzystać z tego systemu",
  "System jest bardzo uciążliwy w obsłudze",
  "Czułem się bardzo pewnie, korzystając z systemu",
  "Musiałem nauczyć się wielu rzeczy, zanim mogłem zacząć korzystać z systemu",
];

export default function BlogUsabilityTestingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Usability Testing — co to jest? Testy użyteczności i badania UX"
        description="Usability testing — definicja, 4 metody (moderowane, niemoderowane, guerrilla, zdalne), reguła 5 użytkowników, SUS Score i projektowanie zadań testowych…"
        canonicalUrl="https://fotz.pl/blog/usability-testing-co-to"

        keywords="Usability Testing co to jest, Usability Testing definicja, czym jest Usability Testing, Usability Testing przykłady, jak działa Usability Testing, Usability Testing znaczenie, Usability Testing przewodnik"

        canonical="https://fotz.pl/blog/usability-testing-co-to"
      />
      <ArticleSchema
        title="Usability Testing — co to jest i jak przeprowadzać testy użyteczności?"
        description="Kompletny przewodnik po usability testing: 4 metody, reguła 5 użytkowników Nielsena, SUS Score, think-aloud i jak projektować dobre zadania testowe."
        url="https://fotz.pl/blog/usability-testing-co-to"
        datePublished="2024-01-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Usability Testing", url: "https://fotz.pl/blog/usability-testing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Usability Testing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Usability Testing — co to jest i jak testować użyteczność?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Testy użyteczności ujawniają gdzie użytkownicy napotykają problemy z produktem.
            Poznaj 4 metody testowania, regułę 5 użytkowników Nielsena i SUS Score.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest usability testing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Usability testing</strong> to metoda badawcza, w której reprezentatywni
              użytkownicy wykonują realne zadania w produkcie, podczas gdy badacz obserwuje
              i dokumentuje trudności. Zamiast pytać "czy Ci się podoba?" — obserwujesz
              <em> co rzeczywiście robią</em> i gdzie się gubią.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Jakob Nielsen wykazał, że 5 użytkowników ujawnia 85% problemów z użytecznością.
              To sprawia, że usability testing jest jedną z najbardziej efektywnych kosztowo
              metod poprawy produktu cyfrowego.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "85%", opis: "problemów użyteczności ujawnia zaledwie 5 użytkowników (Nielsen Norman Group)" },
                { stat: "100×", opis: "tańsze naprawienie problemu UX w fazie projektowania niż po wdrożeniu" },
                { stat: "200%", opis: "wzrost konwersji możliwy przez eliminację kluczowych barier użyteczności" },
              ].map((s, i) => (
                <div key={i} className="bg-teal-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-teal-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 metody */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 metody usability testing</h2>
            <div className="space-y-5">
              {testingMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{m.metoda}</h3>
                  <p className="text-slate-600 mb-4">{m.opis}</p>
                  <div className="grid md:grid-cols-4 gap-3 text-sm">
                    <div className="bg-teal-50 rounded p-2">
                      <p className="text-xs font-semibold text-teal-600 mb-1">Kiedy używać:</p>
                      <p className="text-teal-800">{m.kiedy}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Narzędzia:</p>
                      <p className="text-slate-700">{m.narzędzia}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-2">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Próba:</p>
                      <p className="text-blue-800">{m.próba}</p>
                    </div>
                    <div className="bg-orange-50 rounded p-2">
                      <p className="text-xs font-semibold text-orange-600 mb-1">Koszt:</p>
                      <p className="text-orange-800">{m.koszt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Projektowanie zadań */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 zasady projektowania dobrych zadań testowych</h2>
            <div className="space-y-5">
              {taskDesignRules.map((r, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-3">{i + 1}. {r.zasada}</h3>
                  <div className="grid md:grid-cols-2 gap-3 mb-3">
                    <div className="bg-red-50 rounded p-3 border border-red-100">
                      <p className="text-xs font-semibold text-red-600 mb-1">Źle:</p>
                      <p className="text-red-800 text-sm italic">"{r.źle}"</p>
                    </div>
                    <div className="bg-green-50 rounded p-3 border border-green-100">
                      <p className="text-xs font-semibold text-green-600 mb-1">Dobrze:</p>
                      <p className="text-green-800 text-sm italic">"{r.dobrze}"</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">Dlaczego: {r.dlaczego}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* SUS */}
      <FadeInView>
        <section className="py-16 px-4 bg-teal-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">SUS Score — System Usability Scale</h2>
            <p className="text-slate-600 mb-6">
              SUS to standaryzowany kwestionariusz 10 pytań (skala 1–5) do pomiaru postrzeganej
              użyteczności. Wynik oblicza się wg formuły: dla pytań nieparzystych odejmij 1,
              dla parzystych odejmij od 5, zsumuj i pomnóż przez 2,5. Wynik: 0–100.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">10 pytań SUS:</h3>
                <ol className="space-y-2">
                  {susQuestions.map((q, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-700">
                      <span className="font-bold text-teal-600 flex-shrink-0">{i + 1}.</span>
                      {q}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Interpretacja wyników:</h3>
                <div className="space-y-2">
                  {[
                    { zakres: "90–100", ocena: "A+", opis: "Znakomita użyteczność", kolor: "bg-green-100 text-green-800" },
                    { zakres: "80–89", ocena: "A", opis: "Dobra — powyżej średniej", kolor: "bg-green-50 text-green-700" },
                    { zakres: "68–79", ocena: "B+", opis: "Akceptowalna (branżowy benchmark)", kolor: "bg-yellow-50 text-yellow-700" },
                    { zakres: "51–67", ocena: "C", opis: "Marginalna — wymaga poprawy", kolor: "bg-orange-50 text-orange-700" },
                    { zakres: "poniżej 51", ocena: "F", opis: "Słaba — poważne problemy UX", kolor: "bg-red-50 text-red-700" },
                  ].map((s, i) => (
                    <div key={i} className={`rounded p-3 flex justify-between items-center ${s.kolor}`}>
                      <span className="font-bold">{s.zakres}</span>
                      <span className="font-semibold">{s.ocena}</span>
                      <span className="text-sm">{s.opis}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — usability testing</h2>
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

      <RelatedArticles currentArticleId="usability-testing-co-to" />
      <ContactSection />
    </Layout>
  );
}
