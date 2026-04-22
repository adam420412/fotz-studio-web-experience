import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest objection handling?",
    answer:
      "Objection handling (obsługa obiekcji) to proces identyfikowania, rozumienia i odpowiadania na zastrzeżenia potencjalnych klientów podczas procesu sprzedaży. Obiekcja to nie odmowa — to prośba o więcej informacji, sygnał wątpliwości lub obawa przed zmianą. Handlowiec który umie skutecznie odpowiadać na obiekcje, zamyka więcej dealów. Badania pokazują, że 80% zamkniętych sprzedaży następuje po 5+ kontaktach i odpowiedzi na co najmniej 2-3 obiekcje.",
  },
  {
    question: "Jakie są najczęstsze obiekcje klientów B2B?",
    answer:
      "5 najczęstszych obiekcji B2B: 1) Cena/Budżet — 'To za drogie', 'Nie mamy budżetu'; 2) Czas — 'Teraz nie jest dobry moment', 'Wróćmy do tego za kwartał'; 3) Konkurencja — 'Rozmawiamy też z X', 'X ma tańszą opcję'; 4) Status quo — 'Jesteśmy zadowoleni z obecnego rozwiązania'; 5) Autorytet — 'Muszę skonsultować z przełożonym/zarządem'. Każda z nich wymaga innej odpowiedzi i ma inne przyczyny.",
  },
  {
    question: "Jak odpowiedzieć na obiekcję cenową?",
    answer:
      "Obiekcja cenowa najczęściej oznacza niezrozumienie wartości, nie brak pieniędzy. Techniki: 1) Skup się na ROI, nie cenie: 'Rozumiem, że cena jest ważna. Jak liczyliście ROI z obecnego rozwiązania?' 2) Rozbij na mniejsze kwoty: 'To 5 000 PLN/miesiąc — mniej niż 1 etat. A oszczędza 3 etaty.' 3) TCO porównanie: 'Porównajmy całkowity koszt — z nami vs status quo.' 4) Zapytaj o budżet: 'Jaki jest Wasz budżet na ten projekt?' — zmień ramę dyskusji.",
  },
  {
    question: "Co to jest technika LAER w obsłudze obiekcji?",
    answer:
      "LAER (Listen, Acknowledge, Explore, Respond) to 4-krokowa technika obsługi obiekcji: Listen — posłuchaj całej obiekcji bez przerywania (aktywne słuchanie). Acknowledge — potwierdź że słyszysz i rozumiesz: 'Rozumiem Twoje obawy dotyczące X'. Explore — zadaj pytania by zrozumieć głębszą przyczynę: 'Co konkretnie sprawia, że X jest dla Was ważne?'. Respond — odpowiedz na faktyczną przyczynę, nie na powierzchowną obiekcję. LAER zapobiega natychmiastowemu odpieraniu obiekcji które często eskaluje opór.",
  },
  {
    question: "Jak odróżnić prawdziwą obiekcję od wymówki?",
    answer:
      "Obiekcja vs Wymówka: Prawdziwa obiekcja — konkretna, uzasadniona, klient wraca do niej, jest spójna z kontekstem ('Mamy kontrakt z X do marca', 'Zarząd zatwierdza tylko Q4'). Wymówka (stall/brush-off) — niekonkretna, zmienia się, klient unika pogłębienia ('Musimy to przemyśleć', 'Jesteśmy zajęci'). Test: zapytaj 'Gdybyśmy rozwiązali X, czy bylibyście gotowi do rozmowy o partnerstwie?' Jeśli klient znajdzie nową wymówkę — to nie był prawdziwy powód. Jeśli przytaknie — skupcie się na X.",
  },
];

const commonObjections = [
  {
    obiekcja: "Za drogie / Nie mamy budżetu",
    kategoria: "Cena",
    kolor: "bg-red-50 border-red-200",
    zleOdpowiedzi: ["Możemy dać rabat", "To naprawdę dobra cena za taką jakość", "Wszystko kosztuje"],
    dobreOdpowiedzi: [
      "Rozumiem. A jaki byłby akceptowalny budżet na projekt tej wielkości?",
      "Pomóżcie mi zrozumieć — czy to chodzi o absolutną kwotę, czy o ROI?",
      "Jaki ROI musicie pokazać, żeby projekt był zatwierdzony?",
      "Policzmy razem ile kosztuje Was status quo przez rok.",
    ],
  },
  {
    obiekcja: "Teraz nie jest dobry czas / Odezwijcie się za kwartał",
    kategoria: "Czas",
    kolor: "bg-yellow-50 border-yellow-200",
    zleOdpowiedzi: ["Oczywiście, odezwiemy się w Q3", "Rozumiem, wrócimy do kontaktu"],
    dobreOdpowiedzi: [
      "Co musiałoby się zmienić, żeby projekt był priorytetem teraz?",
      "Rozumiem. Jaki problem musicie najpierw rozwiązać przed tym projektem?",
      "Jeśli poczekamy do Q3, jaki jest koszt opóźnienia — w PLN lub efektywności?",
      "Czy mógłbym porozmawiać z Wami o małym pilotażu który nie koliduje z priorytetami?",
    ],
  },
  {
    obiekcja: "Rozmawiamy też z Konkurencją X",
    kategoria: "Konkurencja",
    kolor: "bg-blue-50 border-blue-200",
    zleOdpowiedzi: ["Jesteśmy dużo lepsi od X", "X ma słabe wsparcie", "Wiesz, X niedługo zbankrutuje"],
    dobreOdpowiedzi: [
      "Świetnie — to znaczy że projekt jest poważny. Co X ma czego my nie mamy?",
      "Jak wyglądają Wasze kryteria wyboru między nami a X?",
      "Co jest dla Was najważniejsze przy wyborze między tymi opcjami?",
      "Czy mogę pokazać Wam jak porównujemy się w obszarach które są dla Was kluczowe?",
    ],
  },
  {
    obiekcja: "Jesteśmy zadowoleni z obecnego rozwiązania",
    kategoria: "Status Quo",
    kolor: "bg-green-50 border-green-200",
    zleOdpowiedzi: ["Nasze rozwiązanie jest dużo lepsze", "Na pewno macie problemy"],
    dobreOdpowiedzi: [
      "Cieszę się to słyszeć. Co konkretnie cenicie w obecnym rozwiązaniu?",
      "A gdyby mogli coś zmienić w obecnym rozwiązaniu — co byłoby pierwsze?",
      "Jakie są Wasze plany na skalowanie? Czy obecne rozwiązanie je obsługuje?",
      "Co by musiało się zmienić w Waszej sytuacji, żebyście rozważyli alternatywę?",
    ],
  },
  {
    obiekcja: "Muszę skonsultować z zarządem / Nie jestem decydentem",
    kategoria: "Autorytet",
    kolor: "bg-purple-50 border-purple-200",
    zleOdpowiedzi: ["OK, dajcie znać jak porozmawiacie", "Rozumiem, czekam na feedback"],
    dobreOdpowiedzi: [
      "Oczywiście. Co byłoby pomocne w tej prezentacji dla zarządu?",
      "Czy mogę pomóc Wam przygotować business case dla zarządu?",
      "Kiedy planujecie tę rozmowę? Czy mógłbym być obecny lub zdalnie odpowiedzieć na pytania?",
      "Co zarząd pyta zwykle przy takich decyzjach? Przygotujmy razem odpowiedzi.",
    ],
  },
];

const objectionHandlingFrameworks = [
  {
    framework: "LAER",
    rozwinięcie: "Listen → Acknowledge → Explore → Respond",
    opis: "Czterokrokowy proces obsługi obiekcji. Zapobiega natychmiastowemu odpieraniu i buduje zrozumienie.",
    kiedy: "Każda obiekcja — szczególnie gdy nie jesteś pewien jej prawdziwej przyczyny",
  },
  {
    framework: "Feel-Felt-Found",
    rozwinięcie: "I understand how you FEEL → Others FELT the same → They FOUND that...",
    opis: "Normalizacja obiekcji przez odniesienie do innych klientów którzy mieli podobną wątpliwość.",
    kiedy: "Obiekcje cenowe, opory przed zmianą, obawy o implementację",
  },
  {
    framework: "Boomerang",
    rozwinięcie: "Zamień obiekcję w powód do kupna",
    opis: "'Właśnie dlatego że jesteście zajęci — nasze rozwiązanie zaoszczędzi Wam 10h/tydzień'",
    kiedy: "Obiekcje dotyczące czasu, zasobów, priorytetu projektu",
  },
  {
    framework: "Conditional Close",
    rozwinięcie: "Jeśli rozwiążemy X, to kupicie?",
    opis: "Test czy obiekcja jest prawdziwa. Jeśli klient potwierdza — skupiasz się na rozwiązaniu X. Jeśli szuka nowych powodów — to wymówka.",
    kiedy: "Gdy chcesz sprawdzić czy obiekcja jest prawdziwa czy to tylko stalling",
  },
];

export default function BlogObjectionHandlingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Objection Handling — co to jest? Obsługa obiekcji w sprzedaży B2B"
        description="Objection Handling — definicja, 5 najczęstszych obiekcji (cena, czas, konkurencja, status quo, autorytet), techniki LAER, Feel-Felt-Found i jak je stosować."
        canonical="https://fotz.pl/blog/objection-handling-obsluga-obiekcji-sprzedaz"

        keywords="Objection Handling co to jest, Objection Handling definicja, czym jest Objection Handling, Objection Handling w sprzedaży, Objection Handling strategia, Objection Handling przykłady, jak używać Objection Handling"

        canonical="https://fotz.pl/blog/objection-handling-obsluga-obiekcji-sprzedaz"
      />
      <ArticleSchema
        title="Objection Handling — co to jest i jak obsługiwać obiekcje w sprzedaży?"
        description="Kompletny przewodnik po objection handling: 5 najczęstszych obiekcji, techniki LAER i praktyczne odpowiedzi."
        url="https://fotz.pl/blog/objection-handling-obsluga-obiekcji-sprzedaz"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Objection Handling", url: "https://fotz.pl/blog/objection-handling-obsluga-obiekcji-sprzedaz" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Objection Handling", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Objection Handling — obsługa obiekcji w sprzedaży B2B
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Obiekcja to nie odmowa — to prośba o więcej informacji.
            Poznaj 5 najczęstszych obiekcji, technikę LAER i konkretne odpowiedzi które zamykają deale.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Objection Handling?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Objection Handling</strong> to proces identyfikowania, rozumienia i skutecznego
              odpowiadania na zastrzeżenia klientów. Obiekcja to sygnał, że klient jest zainteresowany
              ale ma wątpliwość lub potrzebuje więcej informacji — nie, że chce zakończyć rozmowę.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowa zasada: nigdy nie odpieraj obiekcji bezpośrednio. Zamiast tego — słuchaj,
              uznaj obiekcję, zbadaj jej prawdziwą przyczynę i odpowiedz na faktyczny problem.
              Handlowcy którzy traktują obiekcje jako atak — przegrywają. Ci którzy je traktują
              jako szansę do pogłębienia rozmowy — wygrywają.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "80%", opis: "Zamkniętych sprzedaży następuje po 5+ kontaktach i odpowiedzi na kilka obiekcji (HubSpot)" },
                { stat: "44%", opis: "Handlowców rezygnuje po pierwszej próbie follow-up. Wytrwałość + objection handling = przewaga" },
                { stat: "Obiekcja ≠ NIE", opis: "Obiekcja to sygnał zainteresowania i prośba o więcej informacji — nie odmowa" },
              ].map((s, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-amber-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Frameworki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Frameworki obsługi obiekcji</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {objectionHandlingFrameworks.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-amber-600 text-lg mb-1">{f.framework}</h3>
                  <p className="font-mono text-xs text-slate-500 mb-3">{f.rozwinięcie}</p>
                  <p className="text-slate-600 text-sm mb-3">{f.opis}</p>
                  <div className="bg-amber-50 rounded p-3">
                    <p className="text-xs font-semibold text-amber-600 mb-1">Kiedy używać:</p>
                    <p className="text-amber-800 text-sm">{f.kiedy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 obiekcji */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 najczęstszych obiekcji — jak odpowiadać</h2>
            <div className="space-y-5">
              {commonObjections.map((obj, i) => (
                <div key={i} className={`rounded-xl p-6 border ${obj.kolor}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-slate-800 text-white text-xs px-2 py-1 rounded font-semibold">{obj.kategoria}</span>
                    <h3 className="font-bold text-slate-900 text-lg">"{obj.obiekcja}"</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-red-600 mb-2">NIE mów (złe odpowiedzi):</p>
                      <ul className="space-y-1">
                        {obj.zleOdpowiedzi.map((bad, j) => (
                          <li key={j} className="text-sm text-red-700">✗ "{bad}"</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-xs font-semibold text-green-600 mb-2">TAK mów (dobre pytania):</p>
                      <ul className="space-y-1">
                        {obj.dobreOdpowiedzi.map((good, j) => (
                          <li key={j} className="text-sm text-green-700">✓ "{good}"</li>
                        ))}
                      </ul>
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Objection Handling</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="objection-handling-obsluga-obiekcji-sprzedaz" />
      <ContactSection />
    </Layout>
  );
}
