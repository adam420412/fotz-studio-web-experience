import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Net Promoter Score (NPS)?",
    answer:
      "Net Promoter Score (NPS) to wskaźnik lojalności klientów mierzony jednym pytaniem: 'Jak prawdopodobne jest, że polecisz nas znajomemu lub współpracownikowi?' (skala 0–10). Respondenci dzielą się na Promotorów (9-10), Pasywnych (7-8) i Krytyków (0-6). NPS = % Promotorów - % Krytyków. Wynik waha się od -100 do +100. Stworzony przez Freda Reichhelda i Bain & Company, opublikowany w Harvard Business Review w 2003 roku.",
  },
  {
    question: "Jaki NPS jest dobry?",
    answer:
      "Interpretacja NPS zależy od branży: NPS powyżej 0 oznacza, że masz więcej promotorów niż krytyków. NPS 50+ jest uważane za bardzo dobre. NPS 70+ to klasa światowa (Apple, Tesla, Amazon). Typowe benchmarki branżowe: SaaS B2B: 30-50, e-commerce: 40-60, bankowość: 20-40, telekomy: 10-30, linie lotnicze: 20-50. Ważniejszy niż wartość bezwzględna jest trend — NPS rosnący w czasie to dobry sygnał.",
  },
  {
    question: "Czym różni się NPS od CSAT i CES?",
    answer:
      "NPS mierzy lojalność i chęć polecenia (długoterminowe). CSAT (Customer Satisfaction Score) mierzy satysfakcję z konkretnej interakcji (krótkoterminowe, transakcyjne). CES (Customer Effort Score) mierzy ile wysiłku klient musiał włożyć w rozwiązanie problemu — niski wysiłek = lepsze doświadczenie. Dobry program CX łączy wszystkie trzy: NPS do strategii, CSAT do oceny punktów kontaktu, CES do identyfikacji tarć.",
  },
  {
    question: "Jak często mierzyć NPS?",
    answer:
      "Dwa podejścia: Relacyjny NPS — mierzony okresowo (kwartalnie lub rocznie) dla całej bazy klientów, pokazuje trend ogólnej lojalności. Transakcyjny NPS — mierzony po konkretnym zdarzeniu (zakup, interakcja z supportem, onboarding), daje natychmiastowy feedback. Rekomendacja: mierz relacyjny NPS co kwartał + transakcyjny NPS po kluczowych momentach customer journey.",
  },
  {
    question: "Dlaczego sam wynik NPS nie wystarczy?",
    answer:
      "NPS jako liczba nie mówi 'dlaczego' — to właśnie pytanie follow-up (otwarte: 'Co jest głównym powodem Twojej oceny?') dostarcza wartości. Firmy które poprawiają NPS to te, które aktywnie zamykają pętlę (close the loop): kontaktują się z krytykami, dziękują promotorem i wyciągają insighty z odpowiedzi tekstowych. NPS bez działań follow-up to tylko ćwiczenie statystyczne.",
  },
];

const npsGroups = [
  {
    grupa: "Promotorzy",
    skala: "9–10",
    color: "green",
    procent: "% Promotorów",
    opis: "Lojalni entuzjaści którzy kupują ponownie i aktywnie polecają — napędzają wzrost organiczny",
    działanie: "Poproś o review / referencję. Włącz do programu ambasadorów. Zaproś do beta testów.",
    wartość: "Generują 3-5× więcej przychodów niż przeciętny klient",
  },
  {
    grupa: "Pasywni",
    skala: "7–8",
    color: "yellow",
    opis: "Zadowoleni ale niezaangażowani — nie polecają aktywnie i mogą łatwo przejść do konkurencji",
    procent: "(nie liczone w NPS)",
    działanie: "Zidentyfikuj co brakuje do 9+. Proaktywny outreach z value add. Monitoring pod kątem churnu.",
    wartość: "Największa szansa wzrostu NPS — konwersja 30% Pasywnych na Promotorów to duży skok",
  },
  {
    grupa: "Krytycy",
    skala: "0–6",
    color: "red",
    procent: "% Krytyków",
    opis: "Niezadowoleni klienci którzy mogą szkodzić marce przez negatywny word-of-mouth",
    działanie: "Natychmiastowy kontakt (close the loop). Zidentyfikuj root cause. Eskalacja do właściciela konta.",
    wartość: "1 krytyk może zniechęcić 2-3 potencjalnych klientów. Odwrócenie doświadczenia buduje lojalność.",
  },
];

const npsFormula = {
  krok1: "Zbierz odpowiedzi na pytanie NPS (min. 30 respondentów dla wiarygodności)",
  krok2: "Podziel respondentów: Promotorzy (9-10), Pasywni (7-8), Krytycy (0-6)",
  krok3: "Oblicz % każdej grupy względem wszystkich respondentów",
  krok4: "NPS = % Promotorów − % Krytyków",
  przykład: "80 respondentów: 40 Promotorów (50%), 25 Pasywnych (31%), 15 Krytyków (19%) → NPS = 50 − 19 = 31",
};

const npsVsCsatVsCes = [
  { metryka: "NPS", pytanie: "Czy polecisz nas znajomemu?", skala: "0–10", kiedy: "Badanie relacyjne (kwartalnie)", mierzy: "Lojalność długoterminowa" },
  { metryka: "CSAT", pytanie: "Jak oceniasz tę interakcję/produkt?", skala: "1–5 lub 1–10", kiedy: "Po transakcji / interakcji", mierzy: "Satysfakcja z konkretnego zdarzenia" },
  { metryka: "CES", pytanie: "Jak łatwo było rozwiązać Twój problem?", skala: "1–7 (łatwość)", kiedy: "Po kontakcie z supportem", mierzy: "Wysiłek potrzebny do obsługi" },
];

const npsProgram = [
  { faza: "Zbierz", opis: "Wyślij ankietę NPS do odpowiedniego segmentu. Email, in-app, SMS. Min. 30-50 odpowiedzi dla wiarygodności." },
  { faza: "Segmentuj", opis: "Podziel na Promotorów, Pasywnych, Krytyków. Analizuj wyniki per segment (plan, branża, kohortę)." },
  { faza: "Analizuj", opis: "Przeczytaj odpowiedzi tekstowe. Kategoryzuj tematy (onboarding, produkt, support, cena). Zidentyfikuj wzorce." },
  { faza: "Zamknij pętlę", opis: "Skontaktuj się z Krytykami (48h). Podziękuj Promotorem. Pasywnym zaproponuj wartość dodaną." },
  { faza: "Działaj", opis: "Przekaż insighty do produktu, supportu, sprzedaży. Priorytetyzuj zmiany. Śledź wpływ na NPS w kolejnym pomiarze." },
];

const colorMap: Record<string, string> = {
  green: "border-green-300 bg-green-50",
  yellow: "border-yellow-300 bg-yellow-50",
  red: "border-red-300 bg-red-50",
};

const badgeMap: Record<string, string> = {
  green: "bg-green-600 text-white",
  yellow: "bg-yellow-500 text-white",
  red: "bg-red-600 text-white",
};

export default function BlogNetPromoterScoreCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Net Promoter Score (NPS) | Fotz Studio"
        description="Net Promoter Score (NPS) — definicja, wzór obliczania, Promotorzy vs Krytycy, benchmarki branżowe i różnica vs CSAT i CES. Kompletny przewodnik po NPS."
        canonical="https://fotz.pl/blog/net-promoter-score-co-to"

        keywords="Net Promoter Score (NPS) co to jest, Net Promoter Score (NPS) definicja, czym jest Net Promoter Score (NPS), Net Promoter Score (NPS) przykłady, jak działa Net Promoter Score (NPS), Net Promoter Score (NPS) znaczenie, Net Promoter Score (NPS) przewodnik"
      />
      <ArticleSchema
        title="Net Promoter Score (NPS) — co to jest i jak mierzyć lojalność klientów?"
        description="Kompletny przewodnik po NPS: wzór, 3 grupy klientów, benchmarki, porównanie z CSAT i CES, program NPS krok po kroku."
        url="https://fotz.pl/blog/net-promoter-score-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Net Promoter Score", url: "https://fotz.pl/blog/net-promoter-score-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Net Promoter Score (NPS)", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Net Promoter Score (NPS) — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            NPS to jeden wskaźnik który mierzy lojalność klientów i potencjał wzrostu.
            Poznaj wzór, 3 grupy klientów, benchmarki i jak zbudować skuteczny program NPS.
          </p>
        </div>
      </section>

      {/* Definicja i wzór */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest Net Promoter Score?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Net Promoter Score (NPS)</strong> to wskaźnik lojalności klientów oparty na jednym pytaniu:
              "Jak prawdopodobne jest, że polecisz [firmę/produkt] znajomemu lub współpracownikowi?" (skala 0–10).
              Wynik NPS waha się od -100 do +100.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Stworzony przez Freda Reichhelda i opublikowany w Harvard Business Review w 2003 roku,
              NPS stał się jedną z najszerzej stosowanych metryk customer experience na świecie.
              Jego siła tkwi w prostocie — jeden wynik porównywalny między firmami i w czasie.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
              <p className="text-center text-xl font-mono mb-3">NPS = % Promotorów − % Krytyków</p>
              <div className="grid md:grid-cols-3 gap-3 text-center text-sm">
                <div className="bg-green-700 rounded p-2">Promotorzy (9–10)<br />+ w licznik</div>
                <div className="bg-slate-600 rounded p-2">Pasywni (7–8)<br />ignorowani</div>
                <div className="bg-red-700 rounded p-2">Krytycy (0–6)<br />− z licznika</div>
              </div>
              <p className="text-center text-slate-300 text-sm mt-3">Przykład: 50% Promotorów − 19% Krytyków = NPS 31</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "-100 do +100", opis: "zakres możliwych wyników NPS" },
                { stat: "50+", opis: "NPS uważane za bardzo dobre w większości branż" },
                { stat: "2003", opis: "rok publikacji metodologii przez Freda Reichhelda w HBR" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 3 grupy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 grupy klientów w NPS</h2>
            <div className="space-y-5">
              {npsGroups.map((g, i) => (
                <div key={i} className={`rounded-xl p-6 border-2 ${colorMap[g.color]}`}>
                  <div className="flex items-start gap-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${badgeMap[g.color]}`}>{g.grupa}</span>
                        <span className="font-mono text-slate-600 font-semibold">{g.skala}</span>
                        <span className="text-xs text-slate-500 bg-white rounded px-2 py-1">{g.procent}</span>
                      </div>
                      <p className="text-slate-700 mb-2">{g.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-white rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Rekomendowane działanie:</p>
                          <p className="text-slate-700">{g.działanie}</p>
                        </div>
                        <div className="bg-white rounded p-3">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Wartość biznesowa:</p>
                          <p className="text-slate-700">{g.wartość}</p>
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

      {/* NPS vs CSAT vs CES */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">NPS vs CSAT vs CES — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Pytanie</th>
                    <th className="p-3 text-left">Skala</th>
                    <th className="p-3 text-left">Kiedy używać</th>
                    <th className="p-3 text-left">Mierzy</th>
                  </tr>
                </thead>
                <tbody>
                  {npsVsCsatVsCes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-blue-700">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm italic">"{row.pytanie}"</td>
                      <td className="p-3 text-slate-600 text-sm">{row.skala}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.kiedy}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.mierzy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Program NPS */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Program NPS — 5 kroków</h2>
            <div className="space-y-4">
              {npsProgram.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-12 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {s.faza}
                  </div>
                  <div>
                    <p className="text-slate-700">{s.opis}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-lg">
              <p className="font-semibold text-orange-900 mb-1">Kluczowa zasada:</p>
              <p className="text-orange-800 text-sm">
                NPS bez zamknięcia pętli (close the loop) to stracona szansa. Firmy które kontaktują się
                z Krytykami w ciągu 48 godzin zamieniają do 30% z nich w Pasywnych lub Promotorów.
                To właśnie odpowiedzi otwarte — nie liczba — dostarczają wartości actionable.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Net Promoter Score</h2>
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

      <RelatedArticles currentArticleId="net-promoter-score-co-to" />
      <ContactSection />
    </Layout>
  );
}
