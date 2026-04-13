import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest demo sprzedażowe?",
    answer: "Demo sprzedażowe (sales demo) to prezentacja produktu lub usługi skierowana do konkretnego potencjalnego klienta, której celem jest pokazanie wartości i dopasowania rozwiązania do jego potrzeb. W odróżnieniu od ogólnej prezentacji marketingowej, dobra demo jest spersonalizowana na podstawie Discovery — pokazuje konkretne use case'y, bóle i cele rozmówcy. Demo to jeden z kluczowych etapów procesu sprzedaży B2B, który często decyduje o przejściu do kolejnych etapów (proposal, POC, kontrakt).",
  },
  {
    question: "Jak przygotować skuteczną demo sprzedażową?",
    answer: "Przygotowanie demo: Zrób research przed demo — przynajmniej 30 min na stronę, LinkedIn, ostatnie wiadomości firmowe. Przejrzyj notatki z Discovery — jakie bóle, cele, KPI i stakeholderzy zostali zidentyfikowani? Dostosuj flow demo do konkretnych use case'ów klienta — nie rób generycznej prezentacji. Przygotuj 'oh wow moment' — feature lub wynik, który natychmiast pokazuje wartość. Zaplanuj pytania i checkpoints w trakcie — demo to rozmowa, nie monolog. Przygotuj odpowiedzi na typowe obiekcje. Ustal z klientem agenda i czas demo przed spotkaniem.",
  },
  {
    question: "Jak zacząć demo, żeby zaangażować klienta?",
    answer: "Otwarcie skutecznej demo: Nie zaczynaj od historii firmy ani feature list. Zacznij od potwierdzenia kontekstu: 'Z naszej rozmowy Discovery rozumiem, że Wasz największy problem to X, a celem jest Y — czy dobrze to rozumiem?' Następnie zapowiedz strukturę: 'Pokażę Wam dziś jak [nazwa produktu] rozwiązuje dokładnie ten problem, skupiając się na [2-3 kluczowe obszary].' Ustaw oczekiwania: 'Chętnie zatrzymam się na pytania w trakcie.' Taka personalizacja od pierwszych sekund buduje wiarygodność i utrzymuje uwagę.",
  },
  {
    question: "Jakie są najczęstsze błędy podczas demo?",
    answer: "Błędy demo: Feature dump — pokazywanie wszystkiego bez kontekstu biznesowego ('a teraz pokażę Wam kolejny feature...'). Brak personalizacji — generyczna demo bez odniesień do sytuacji klienta. Monolog bez checkpointów — klient się nudzi i traci uwagę. Pomijanie stakeholderów — demo tylko dla jednej osoby, bez uwzględnienia innych decydentów. Słaby closing — demo kończy się bez konkretnego następnego kroku. Zbyt długa demo — idealna długość to 30-45 minut, nie 90.",
  },
  {
    question: "Co powinno nastąpić po demo?",
    answer: "Działania po demo: Wyślij follow-up email w ciągu 24h z podsumowaniem: co pokazałeś, jak odpowiadało to ich potrzebom i konkretny następny krok. Zaktualizuj CRM — notatki z reakcji, pytania, sygnały kupna. Jeśli demo poszło dobrze — zainicjuj rozmowę o POC lub propozycji. Wyślij materiały dodatkowe (case study podobnej firmy, ROI calculator). Jeśli były stakeholderzy nieobecni — zaproponuj krótką 'executive briefing' dla nich. Ustal konkretną datę kolejnego spotkania przed zakończeniem demo.",
  },
];

const demoTypes = [
  {
    typ: "Discovery Demo",
    kiedy: "Wcześnie w procesie sprzedaży",
    cel: "Wstępna walidacja dopasowania — czy rozwiązanie adresuje problem klienta",
    długość: "20-30 min",
    kolor: "blue",
  },
  {
    typ: "Full Demo",
    kiedy: "Po Discovery, z zakwalifikowanym prospectem",
    cel: "Kompleksowe pokazanie wartości i use case'ów dopasowanych do potrzeb klienta",
    długość: "45-60 min",
    kolor: "green",
  },
  {
    typ: "Executive Demo",
    kiedy: "Dla C-Level / Economic Buyer",
    cel: "Skupiona na ROI, wynikach biznesowych, ryzyku — nie na funkcjonalnościach",
    długość: "20-30 min",
    kolor: "purple",
  },
  {
    typ: "Technical Demo",
    kiedy: "Dla IT / Architects / Developers",
    cel: "Integracje, bezpieczeństwo, architektura, API — szczegóły techniczne",
    długość: "45-60 min",
    kolor: "orange",
  },
];

const demoFlow = [
  {
    etap: "Otwarcie — agenda i personalizacja (5 min)",
    opis: "Potwierdź kontekst z Discovery, ustaw agendę, zbadaj uczestników",
    tip: "Nigdy nie zacznij od historii firmy. Zacznij od 'Z naszej rozmowy rozumiem, że...'",
  },
  {
    etap: "Ból i kontekst biznesowy (5 min)",
    opis: "Krótko nawiąż do problemów, które klient opisał — pokaż, że słuchałeś",
    tip: "Jeden slajd z podsumowaniem ich sytuacji zamiast slajdu o Twojej firmie",
  },
  {
    etap: "Core Demo — use case #1 (10 min)",
    opis: "Pokaż rozwiązanie najważniejszego bólu klienta — 'oh wow moment'",
    tip: "Checkpoint po każdym use case: 'Jak to wygląda z Waszej perspektywy?'",
  },
  {
    etap: "Core Demo — use case #2 i #3 (10 min)",
    opis: "Drugi i trzeci kluczowy obszar — zawsze w kontekście konkretnych KPI klienta",
    tip: "Skróć lub rozwiń zależnie od reakcji klienta. Czytaj sygnały zainteresowania.",
  },
  {
    etap: "Wyniki i ROI (5 min)",
    opis: "Pokaż case study podobnej firmy lub szacunkowy ROI dla klienta",
    tip: "Liczby > słowa. 'Klienci podobni do Was osiągają X w Y miesięcy.'",
  },
  {
    etap: "Q&A i następne kroki (10 min)",
    opis: "Odpowiedz na pytania, potwierdź fit, zaproponuj konkretny kolejny krok",
    tip: "Nie kończ demo bez daty i uczestników kolejnego spotkania.",
  },
];

const demoScoring = [
  { sygnał: "Pytają o integracje z ich systemami", interpretacja: "Silny sygnał — wyobrażają siebie z produktem", akcja: "Zapytaj jakie systemy mają — to otwiera tech discovery" },
  { sygnał: "Proszą o demo dla innych osób/teamów", interpretacja: "Rozszerzają krąg decyzyjny — dobry znak", akcja: "Ustal kto to będzie i dostosuj demo" },
  { sygnał: "Pytają o cenę podczas demo", interpretacja: "Zainteresowanie finansowe — sprawdź budget readiness", akcja: "Odpowiedz ogólnie, wróć po demo z propozycją" },
  { sygnał: "Milczą i nie zadają pytań", interpretacja: "Brak zaangażowania lub niezrozumienie", akcja: "Zatrzymaj się i zapytaj wprost: 'Jak to wygląda z Waszej strony?'" },
];

export default function BlogDemoSalesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Demo sprzedażowe — jak prowadzić i przygotować? | Fotz.pl"
        description="Demo sprzedażowe B2B — jak przygotować i prowadzić skuteczną demo, typy demo, flow prezentacji i sygnały zakupu. Kompletny przewodnik dla handlowców."
        canonicalUrl="https://fotz.pl/blog/demo-sprzedazowe-jak-prowadzic"

        keywords="Demo sprzedażowe co to jest, Demo sprzedażowe definicja, czym jest Demo sprzedażowe, Demo sprzedażowe w sprzedaży, Demo sprzedażowe strategia, Demo sprzedażowe przykłady, jak używać Demo sprzedażowe"
      />
      <ArticleSchema
        title="Demo sprzedażowe — jak prowadzić i przygotować?"
        description="Kompletny przewodnik po demo sprzedażowym B2B: typy demo, flow prezentacji, błędy i sygnały zakupu."
        url="https://fotz.pl/blog/demo-sprzedazowe-jak-prowadzic"
        datePublished="2024-02-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Demo sprzedażowe", url: "https://fotz.pl/blog/demo-sprzedazowe-jak-prowadzic" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Demo sprzedażowe", href: "/blog/demo-sprzedazowe-jak-prowadzic" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Proces Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Demo sprzedażowe
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Demo to jeden z decydujących momentów w procesie sprzedaży B2B. Generyczna prezentacja zabija deal —
              spersonalizowana demo buduje zaufanie i tworzy momentum zakupu. Poznaj framework skutecznej demo.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy demo", value: "4" },
                { label: "Etapów flow", value: "6" },
                { label: "Idealna długość", value: "45 min" },
                { label: "Kluczowy moment", value: "Oh wow!" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy demo */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy demo sprzedażowego</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Różne etapy procesu sprzedaży i różni stakeholderzy wymagają różnych typów demo.
              Dobór właściwego formatu to klucz do efektywności.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {demoTypes.map((d) => (
              <FadeInView key={d.typ}>
                <div className={`rounded-xl p-6 border-2 ${
                  d.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  d.kolor === "green" ? "border-green-200 bg-green-50" :
                  d.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    d.kolor === "blue" ? "text-blue-800" :
                    d.kolor === "green" ? "text-green-800" :
                    d.kolor === "purple" ? "text-purple-800" :
                    "text-orange-800"
                  }`}>
                    {d.typ}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Kiedy:</span>
                      <span className="text-gray-700">{d.kiedy}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Cel:</span>
                      <span className="text-gray-700">{d.cel}</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-gray-500 font-semibold w-20 flex-shrink-0">Długość:</span>
                      <span className="text-gray-700">{d.długość}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Flow demo */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Flow skutecznej demo — 6 etapów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustrukturyzowane demo prowadzi klienta przez ścieżkę od problemu do rozwiązania —
              każdy etap buduje na poprzednim i prowadzi do konkretnego następnego kroku.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {demoFlow.map((etap, i) => (
              <FadeInView key={etap.etap}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-violet-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{etap.etap}</h3>
                      <p className="text-gray-600 text-sm mb-2">{etap.opis}</p>
                      <div className="bg-violet-50 rounded-lg px-3 py-2 border border-violet-100">
                        <span className="text-xs font-bold text-violet-700 uppercase">Pro tip: </span>
                        <span className="text-xs text-gray-700">{etap.tip}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sygnały zakupu */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sygnały zakupu podczas demo</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Umiejętność czytania sygnałów podczas demo pozwala reagować w czasie rzeczywistym i
              kierować rozmową ku zamknięciu lub odkryciu blockerów.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {demoScoring.map((s) => (
              <FadeInView key={s.sygnał}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Sygnał</div>
                      <p className="text-sm font-semibold text-gray-800">{s.sygnał}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Interpretacja</div>
                      <p className="text-sm text-gray-700">{s.interpretacja}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-violet-700 uppercase mb-1">Twoja reakcja</div>
                      <p className="text-sm text-gray-700">{s.akcja}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
