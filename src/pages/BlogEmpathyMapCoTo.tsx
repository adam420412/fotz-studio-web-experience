import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest mapa empatii?",
    answer:
      "Mapa empatii (empathy map) to wizualne narzędzie UX i design thinking służące do głębokiego zrozumienia użytkownika lub klienta. Dzieli obserwacje o osobie na 4-6 kategorii: co mówi, myśli, robi i czuje — oraz opcjonalnie: co słyszy i widzi. Pomaga zespołom wyjść poza dane demograficzne i zrozumieć wewnętrzny świat użytkownika: jego motywacje, lęki i kontekst decyzji.",
  },
  {
    question: "Czym różni się mapa empatii od persony?",
    answer:
      "Persona to syntetyczny profil typowego użytkownika — fikcyjna postać z imieniem, historią i celami. Mapa empatii to narzędzie do budowania persony — pomaga zebrać i zorganizować surowe obserwacje z badań. Persona odpowiada 'kim jest?' — mapa empatii odpowiada 'jak doświadcza świata?'. Mapa empatii jest bardziej granularna i blisko obserwacji; persona jest bardziej narracyjna i gotowa do komunikacji w zespole.",
  },
  {
    question: "Kiedy używać mapy empatii?",
    answer:
      "Mapa empatii sprawdza się: przed projektowaniem nowego produktu lub funkcji (budowanie zrozumienia użytkownika), po badaniach jakościowych (synteza wywiadów i obserwacji), w warsztatach z cross-funkcyjnymi zespołami (budowanie shared understanding), przy redesignie (gdy chcemy wrócić do fundamentów), oraz gdy produkt nie rezonuje z użytkownikami i szukamy przyczyn.",
  },
  {
    question: "Jak przeprowadzić warsztat mapy empatii?",
    answer:
      "Typowy warsztat: 1) Przygotuj szablon mapy (flipchart, Miro, FigJam) z 4-6 kwadrantami. 2) Wybierz konkretnego użytkownika/segment. 3) Rozdaj karteczki post-it. 4) Każdy uczestnik samodzielnie wypełnia karteczki (5-10 min) — co mówi/myśli/robi/czuje. 5) Grupowanie i omówienie karteczek na mapie (15-20 min). 6) Identyfikacja wzorców, napięć i niespójności. 7) Ekstrakcja pain points i gain points do dalszego designu.",
  },
  {
    question: "Jakie są ograniczenia mapy empatii?",
    answer:
      "Ograniczenia: mapa empatii jest tak dobra jak dane, na których ją budujesz — bez prawdziwych badań z użytkownikami staje się projekcją założeń zespołu. Nie zastępuje głębokich badań jakościowych. Może prowadzić do oversimplifikacji złożonych zachowań. Najlepiej używać jej jako narzędzia do organizacji danych z wywiadów, obserwacji i testów użytkowników — nie jako samodzielnego ćwiczenia kreatywnego.",
  },
];

const empathyMapQuadrants = [
  {
    quadrant: "MÓWI",
    icon: "💬",
    color: "blue",
    opis: "Co użytkownik mówi głośno — cytaty z wywiadów, feedback, komentarze",
    pytania: ["Co mówi o produkcie podczas wywiadu?", "Jakich słów używa opisując problem?", "Co mówi innym o swoich potrzebach?"],
    przykład: '"Zawsze tracę czas na szukanie faktury z poprzedniego miesiąca" | "Wolę mieć wszystko w jednym miejscu"',
  },
  {
    quadrant: "MYŚLI",
    icon: "💭",
    color: "purple",
    opis: "Co użytkownik myśli — przekonania, obawy, niespowiedziane założenia",
    pytania: ["Co go martwi, ale nie mówi wprost?", "Jakie ma przekonania o produkcie/branży?", "Co uważa za ważne?"],
    przykład: '"Czy ta platforma jest bezpieczna dla moich danych?" | "Na pewno da się to zrobić prościej" | "Nie chcę wyglądać niekompetentnie"',
  },
  {
    quadrant: "ROBI",
    icon: "🤝",
    color: "green",
    opis: "Obserwowalne zachowania — co faktycznie robi, nie co mówi że robi",
    pytania: ["Jak korzysta z produktu w praktyce?", "Jakie ma obejścia problemów (workarounds)?", "Co robi przed i po interakcji?"],
    przykład: "Eksportuje dane do Excela zamiast używać raportów | Otwiera aplikację mobilną, ale wraca do desktopa | Tworzy własne kategorie przez zmianę nazw",
  },
  {
    quadrant: "CZUJE",
    icon: "❤️",
    color: "red",
    opis: "Emocje towarzyszące doświadczeniu — frustracja, podekscytowanie, strach",
    pytania: ["Co go frustruje w obecnym rozwiązaniu?", "Kiedy czuje się pewnie / niepewnie?", "Jakie emocje towarzyszą decyzji zakupowej?"],
    przykład: "Frustracja przy onboardingu | Duma po udanym raporcie | Lęk przed błędem przy zmianie ustawień | Ulga gdy coś 'po prostu działa'",
  },
  {
    quadrant: "SŁYSZY",
    icon: "👂",
    color: "orange",
    opis: "Zewnętrzne wpływy — co mówi środowisko, znajomi, media, szef",
    pytania: ["Jakie opinie słyszy od współpracowników?", "Co mówią influencerzy w jego branży?", "Jakie rekomendacje otrzymuje?"],
    przykład: '"Kolega polecił mi to narzędzie" | "Szef powiedział żebyśmy zredukowali koszty" | "W branży wszyscy przechodzą na cloud"',
  },
  {
    quadrant: "WIDZI",
    icon: "👁️",
    color: "teal",
    opis: "Środowisko wizualne — co obserwuje w otoczeniu, u konkurencji, na rynku",
    pytania: ["Jakie alternatywy widzi na rynku?", "Co widzą jego klienci / współpracownicy?", "Jak wygląda jego otoczenie pracy?"],
    przykład: "Widzi że konkurencja używa nowszych narzędzi | Widzi reklamę rozwiązania na LinkedIn | Obserwuje że branża przechodzi transformację cyfrową",
  },
];

const empathyVsPersona = [
  { aspekt: "Cel", empatia: "Zrozumieć doświadczenie i kontekst emocjonalny", persona: "Stworzyć profil typowego użytkownika do komunikacji" },
  { aspekt: "Format", empatia: "2×2 lub 2×3 siatka kwadrantów", persona: "Dokument/karta z imieniem, zdjęciem, cytatem, historią" },
  { aspekt: "Dane wejściowe", empatia: "Surowe obserwacje z badań (cytaty, zachowania)", persona: "Syntetyzowane wzorce z wielu źródeł danych" },
  { aspekt: "Granularność", empatia: "Wysoka — specyficzne detale i napięcia", persona: "Niższa — uogólniony archetyp" },
  { aspekt: "Kiedy używać", empatia: "W trakcie i po badaniach (synteza)", persona: "Do komunikacji i podejmowania decyzji designowych" },
  { aspekt: "Czas tworzenia", empatia: "1-2 godziny warsztatowe", persona: "Kilka dni z pełnymi badaniami" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-200",
  purple: "bg-purple-50 border-purple-200",
  green: "bg-green-50 border-green-200",
  red: "bg-red-50 border-red-200",
  orange: "bg-orange-50 border-orange-200",
  teal: "bg-teal-50 border-teal-200",
};

const iconBgMap: Record<string, string> = {
  blue: "bg-blue-100",
  purple: "bg-purple-100",
  green: "bg-green-100",
  red: "bg-red-100",
  orange: "bg-orange-100",
  teal: "bg-teal-100",
};

export default function BlogEmpathyMapCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Mapa Empatii — co to jest? Empathy Map w UX i Design Thinking"
        description="Mapa empatii (empathy map) — definicja, 6 kwadrantów (mówi, myśli, robi, czuje, słyszy, widzi), różnica vs persona i jak przeprowadzić warsztat…"
        canonical="https://fotz.pl/blog/mapa-empatii-co-to"

        keywords="Mapa Empatii co to jest, Mapa Empatii definicja, czym jest Mapa Empatii, Mapa Empatii przykłady, jak działa Mapa Empatii, Mapa Empatii znaczenie, Mapa Empatii przewodnik"
      />
      <ArticleSchema
        title="Mapa Empatii — co to jest i jak ją tworzyć?"
        description="Kompletny przewodnik po mapie empatii: 6 kwadrantów, różnica vs persona, warsztat krok po kroku i przykłady zastosowania."
        url="https://fotz.pl/blog/mapa-empatii-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Mapa Empatii", url: "https://fotz.pl/blog/mapa-empatii-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Mapa Empatii", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Mapa Empatii — co to jest i jak ją tworzyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Empathy map to narzędzie design thinking które pomaga naprawdę zrozumieć użytkownika —
            jego myśli, emocje i zachowania. Poznaj 6 kwadrantów i jak przeprowadzić warsztat.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest mapa empatii?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Mapa empatii</strong> (empathy map) to wizualne narzędzie z arsenału design thinking
              służące do głębokiego zrozumienia użytkownika lub klienta. Organizuje obserwacje z badań
              w strukturze czterech do sześciu kwadrantów — co użytkownik mówi, myśli, robi i czuje,
              a w rozbudowanej wersji także co słyszy i widzi.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Stworzona przez Dave'a Gray w Gamestorming, mapa empatii pomaga zespołom produktowym
              wyjść poza demografię i statystyki — i zrozumieć wewnętrzny świat użytkownika:
              jego motywacje, lęki, frustracje i codzienne zachowania.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "4–6", opis: "kwadrantów organizujących obserwacje o użytkowniku" },
                { stat: "1–2h", opis: "czas potrzebny na przeprowadzenie warsztatu z zespołem" },
                { stat: "Design Thinking", opis: "metoda z której pochodzi — popularyzowana przez IDEO i d.school" },
              ].map((s, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kwadrantów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">6 kwadrantów mapy empatii</h2>
            <p className="text-slate-600 mb-8">Rozbudowana wersja mapy (6 kwadrantów) daje pełniejszy obraz użytkownika niż klasyczna 4-częściowa.</p>
            <div className="grid md:grid-cols-2 gap-5">
              {empathyMapQuadrants.map((q, i) => (
                <div key={i} className={`rounded-xl p-6 border ${colorMap[q.color]}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full ${iconBgMap[q.color]} flex items-center justify-center text-xl`}>
                      {q.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{q.quadrant}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{q.opis}</p>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Pytania pomocnicze:</p>
                    <ul className="space-y-1">
                      {q.pytania.map((p, j) => (
                        <li key={j} className="text-xs text-slate-600">• {p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded p-2">
                    <p className="text-xs font-semibold text-slate-400 mb-1">Przykład:</p>
                    <p className="text-xs text-slate-600 italic">{q.przykład}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Mapa empatii vs persona */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Mapa empatii vs. Persona — różnice</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">Mapa empatii</th>
                    <th className="p-3 text-left">Persona</th>
                  </tr>
                </thead>
                <tbody>
                  {empathyVsPersona.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.empatia}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.persona}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-blue-50 rounded-xl p-6">
              <p className="font-semibold text-blue-900 mb-2">Praktyczna zasada:</p>
              <p className="text-blue-800 text-sm">
                Używaj mapy empatii <strong>podczas i po badaniach</strong> — do syntezy surowych danych.
                Persona to <strong>efekt końcowy</strong> — gotowa do użytku w planowaniu i komunikacji z interesariuszami.
                Dobry proces: Badania → Mapa empatii → Persona.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Jak przeprowadzić warsztat */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak przeprowadzić warsztat mapy empatii</h2>
            <div className="space-y-4">
              {[
                { krok: "1", tytul: "Przygotowanie szablonu", opis: "Narysuj lub otwórz cyfrowy szablon (Miro, FigJam, Mural) z 4-6 kwadrantami. Wyraźnie oznacz każdy kwadrant. Przygotuj karteczki post-it lub cyfrowe odpowiedniki.", czas: "10 min" },
                { krok: "2", tytul: "Wybór użytkownika", opis: "Zdecyduj, dla kogo tworzysz mapę — konkretny segment, proto-persona lub uczestnik badań. Im bardziej konkretna osoba, tym lepsza mapa.", czas: "5 min" },
                { krok: "3", tytul: "Indywidualne wypełnianie", opis: "Każdy uczestnik samodzielnie wypełnia karteczki dla każdego kwadrantu — 1 obserwacja = 1 karteczka. Bazuj na danych z wywiadów, nie na domysłach.", czas: "10–15 min" },
                { krok: "4", tytul: "Grupowanie i omówienie", opis: "Po kolei omawiajcie karteczki dla każdego kwadrantu, grupując podobne obserwacje. Dyskutujcie o napięciach (np. mówi X ale robi Y).", czas: "20–30 min" },
                { krok: "5", tytul: "Identyfikacja pain i gain", opis: "Po wypełnieniu mapy — zidentyfikujcie kluczowe bóle (pains) i korzyści (gains) użytkownika. To fundament pod propozycję wartości.", czas: "10–15 min" },
                { krok: "6", tytul: "Dokumentacja i follow-up", opis: "Zrób zdjęcie lub eksportuj cyfrową mapę. Wyodrębnij kluczowe insighty do dokumentu teamowego. Użyj do budowania person lub user stories.", czas: "10 min" },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {s.krok}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-bold text-slate-900">{s.tytul}</h3>
                      <span className="text-xs text-slate-400 bg-slate-100 px-2 py-1 rounded">{s.czas}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{s.opis}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — mapa empatii</h2>
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

      <RelatedArticles currentArticleId="mapa-empatii-co-to" />
      <ContactSection />
    </Layout>
  );
}
