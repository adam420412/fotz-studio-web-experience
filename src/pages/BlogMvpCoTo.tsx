import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest MVP (Minimum Viable Product)?",
    answer:
      "MVP (Minimum Viable Product — Minimalna Wersja Produktu) to wersja produktu z minimalnym zestawem funkcji wystarczającym do zwalidowania kluczowych hipotez biznesowych z prawdziwymi użytkownikami. Celem MVP nie jest dostarczenie 'minimalnego produktu', lecz zdobycie maksymalnej wiedzy o rynku przy minimalnym nakładzie zasobów. Pojęcie spopularyzowane przez Erica Riesa w metodologii Lean Startup.",
  },
  {
    question: "Czym MVP różni się od prototypu?",
    answer:
      "Prototyp to narzędzie do testowania UX i design — zazwyczaj niefunkcjonalny (makieta, clickable wireframe) służący do weryfikacji ścieżek użytkownika. MVP to działający produkt który dostarcza realną wartość pierwszym użytkownikom i generuje realne dane o zachowaniach. Prototyp testuje 'czy interfejs jest intuicyjny?', MVP testuje 'czy ktoś zapłaci za to rozwiązanie i korzysta z niego?'. MVP może być poprzedzony prototypem.",
  },
  {
    question: "Jakie są rodzaje MVP?",
    answer:
      "Popularne typy MVP: Concierge MVP (usługa ręcznie przez człowieka — przed automatyzacją), Wizard of Oz MVP (użytkownik myśli że to automat — za kulisami człowiek), Landing Page MVP (strona zbierająca zainteresowanie przed zbudowaniem produktu), Email/Newsletter MVP (walidacja tematu przez zainteresowanie subskrypcją), Explainer Video MVP (Dropbox — wideo opisujące produkt, zbierające listę oczekujących), Piecemeal MVP (łączenie istniejących narzędzi bez własnego kodu).",
  },
  {
    question: "Jak określić co wchodzi do MVP?",
    answer:
      "Kluczowe pytanie: jakie są kluczowe hipotezy które muszę zwalidować? Zidentyfikuj: core problem (jeden konkretny problem użytkownika), core value (jedno rozwiązanie które tworzy wartość), riskiest assumption (najważniejsza hipoteza do obalenia). Metoda: wylistuj wszystkie funkcje → dla każdej zadaj 'czy bez tego funkcja core value nie działa?' → zostaw tylko te niezbędne. Jeśli MVP to zbyt dużo pracy — rozważ pre-MVP (landing page test).",
  },
  {
    question: "Kiedy MVP jest gotowe?",
    answer:
      "MVP jest gotowe gdy: 1) rozwiązuje jeden konkretny problem dla konkretnego segmentu, 2) jest wystarczające żeby zebrać realne dane o zachowaniach użytkowników, 3) można je pokazać prawdziwym użytkownikom i zmierzyć czy wracają. MVP nie jest gotowe gdy: jest 'prawie skończone' (feature creep), zespół chce je ulepszyć przed pokazaniem, lub ma zbyt wiele funkcji. Zasada: 'If you're not embarrassed by the first version, you've launched too late' (Reid Hoffman).",
  },
];

const mvpTypes = [
  {
    typ: "Landing Page MVP",
    opis: "Strona lądowania opisująca produkt z formularzem zapisu/zakupu — zanim produkt istnieje",
    kiedy: "Testowanie demand i messaging przed budowaniem czegokolwiek",
    przykład: "Buffer — zanim zbudowali app, zrobili stronę z opisem i przyciskiem 'Tweet'. Zebrali 120 emaili.",
    koszt: "Bardzo niski (1-3 dni)",
    ryzyko: "Niska fidelity — zapis ≠ płatność ≠ użycie",
  },
  {
    typ: "Concierge MVP",
    opis: "Usługa dostarczana ręcznie przez człowieka — bez automatyzacji, jakby był system",
    kiedy: "Walidacja czy klienci chcą produktu i czy możesz dostarczyć wartość przed zbudowaniem systemu",
    przykład: "Food on the Table (meal planning) — CEO sam tworzył plany posiłków dla pierwszych klientów",
    koszt: "Niski do średniego (czas ludzki)",
    ryzyko: "Nie skalowalne — ale to właśnie cel: nauczyć się przed skalowaniem",
  },
  {
    typ: "Wizard of Oz MVP",
    opis: "Użytkownik myśli że korzysta z automatycznego systemu — za kulisami człowiek wykonuje pracę",
    kiedy: "Testowanie doświadczenia z 'automatycznym' produktem zanim zbudujesz automatyzację",
    przykład: "Zappos — założyciel kupował buty w sklepach i odsprzedawał online, żeby przetestować demand",
    koszt: "Średni (czas operacyjny)",
    ryzyko: "Kosztowne przy skali — zaplanuj exit z ręcznej pracy",
  },
  {
    typ: "Piecemeal MVP",
    opis: "Łączenie istniejących narzędzi (Airtable, Typeform, Slack, Zapier) bez pisania kodu",
    kiedy: "Szybka walidacja przepływu pracy bez inwestycji w development",
    przykład: "Airbnb — zaczął od CraigsList + ręczna obsługa. GroupMe — z istniejących platform SMS",
    koszt: "Niski (subskrypcje narzędzi)",
    ryzyko: "Ograniczenia narzędzi mogą wpływać na UX i wnioski",
  },
];

const mvpVsOther = [
  { termin: "MVP", definicja: "Minimum Viable Product — działający produkt do walidacji hipotez z prawdziwymi użytkownikami", cel: "Nauka i walidacja" },
  { termin: "MMP", definicja: "Minimum Marketable Product — gotowy do komercyjnego launch, ma wystarczające funkcje żeby sprzedać", cel: "Komercyjny launch" },
  { termin: "MLP", definicja: "Minimum Lovable Product — skupia się na delight, nie tylko na viable. Użytkownicy mają go 'kochać'", cel: "Zachwyt i word-of-mouth" },
  { termin: "Prototyp", definicja: "Niefunkcjonalna lub partialna wersja do testowania UX i designu — zazwyczaj nie trafia do realnych użytkowników", cel: "Test UX i design" },
  { termin: "PoC", definicja: "Proof of Concept — weryfikacja wykonalności technicznej, nie wartości dla użytkownika", cel: "Walidacja techniczna" },
];

const mvpProcess = [
  { krok: "1", tytul: "Zdefiniuj problem", opis: "Precyzyjnie określ: dla kogo jest problem, jaki to problem, dlaczego istniejące rozwiązania nie wystarczają" },
  { krok: "2", tytul: "Sformułuj hipotezy", opis: "Lista założeń: 'Wierzymy że [target] ma problem [X] i zapłaci [Y] za rozwiązanie [Z]'" },
  { krok: "3", tytul: "Priorytetyzuj hipotezy", opis: "Zacznij od riskiest assumption — jeśli ta hipoteza jest fałszywa, cały biznes odpada" },
  { krok: "4", tytul: "Zaprojektuj minimalny eksperyment", opis: "Wybierz typ MVP który najszybciej zwaliduje najważniejszą hipotezę przy minimalnych kosztach" },
  { krok: "5", tytul: "Zbuduj i uruchom", opis: "Dostarcz MVP do realnych użytkowników — nie tylko znajomych i rodziny. Wyznacz sukces z góry (metryki)." },
  { krok: "6", tytul: "Mierz i ucz się", opis: "Zbieraj dane ilościowe i jakościowe. Prowadź rozmowy z użytkownikami. Nie optymalizuj — ucz się." },
  { krok: "7", tytul: "Pivot lub persevere", opis: "Na podstawie danych: kontynuuj kierunek (persevere) lub zmień fundamentalne założenie (pivot)" },
];

export default function BlogMvpCoTo() {
  return (
    <Layout>
      <SEOHead
        title="MVP — co to jest? Minimum Viable Product w Lean Startup"
        description="MVP (Minimum Viable Product) — definicja, 4 typy (Landing Page, Concierge, Wizard of Oz, Piecemeal), proces 7 kroków i różnica vs prototyp. Przewodnik po MVP."
        canonicalUrl="https://fotz.pl/blog/mvp-co-to-jest"

        keywords="MVP co to jest, MVP definicja, czym jest MVP, MVP startup, MVP jak liczyć, MVP wzór, MVP przykłady"

        canonical="https://fotz.pl/blog/mvp-co-to-jest"
      />
      <ArticleSchema
        title="MVP (Minimum Viable Product) — co to jest i jak budować?"
        description="Kompletny przewodnik po MVP: 4 typy MVP, 7-krokowy proces, porównanie z MMP/MLP/prototypem i przykłady (Dropbox, Airbnb, Buffer)."
        url="https://fotz.pl/blog/mvp-co-to-jest"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MVP — Minimum Viable Product", url: "https://fotz.pl/blog/mvp-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "MVP", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            MVP (Minimum Viable Product) — co to jest i jak budować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            MVP to sposób na walidację pomysłu biznesowego przy minimalnych kosztach.
            Poznaj 4 typy MVP, 7-krokowy proces i przykłady jak Dropbox i Airbnb startowały.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest MVP?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>MVP (Minimum Viable Product)</strong> to wersja produktu z minimalnym zestawem
              funkcji wystarczającym do zwalidowania kluczowych hipotez biznesowych z prawdziwymi
              użytkownikami. Kluczowe słowo to <em>viable</em> — MVP musi dostarczać realną wartość,
              nie być tylko szkieletem.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Celem MVP nie jest stworzenie "minimalnego produktu" — lecz zdobycie maksymalnej wiedzy
              przy minimalnym nakładzie. Dropbox zwalidował MVP przez 3-minutowe wideo (bez działającego
              produktu). Airbnb startował z prostą stroną i ręczną obsługą. Amazon zaczął od jednej
              kategorii — książek.
            </p>
            <div className="bg-slate-900 text-white rounded-xl p-6 mb-6">
              <p className="text-center font-mono text-lg">"If you're not embarrassed by your first version,</p>
              <p className="text-center font-mono text-lg mb-2">you've launched too late."</p>
              <p className="text-center text-slate-400 text-sm">— Reid Hoffman, co-founder LinkedIn</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "Build-Measure-Learn", opis: "pętla Lean Startup napędzana przez MVP — iteracyjna nauka zamiast wieloletniego planowania" },
                { stat: "Riskiest assumption", opis: "MVP testuje najważniejszą hipotezę — tę która niszczy biznes jeśli jest fałszywa" },
                { stat: "Real users", opis: "walidacja z prawdziwymi (obcymi) użytkownikami — nie znajomymi ani rodziną" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-lg font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 typy MVP */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 popularne typy MVP</h2>
            <div className="space-y-5">
              {mvpTypes.map((mvp, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-1">{mvp.typ}</h3>
                      <p className="text-slate-600 mb-3">{mvp.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
                        <div className="bg-blue-50 rounded p-2">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Kiedy stosować:</p>
                          <p className="text-blue-800">{mvp.kiedy}</p>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs font-semibold text-green-600 mb-1">Przykład:</p>
                          <p className="text-green-800 italic">{mvp.przykład}</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Koszt:</p>
                          <p className="text-slate-700">{mvp.koszt}</p>
                        </div>
                        <div className="bg-orange-50 rounded p-2">
                          <p className="text-xs font-semibold text-orange-500 mb-1">Ryzyko:</p>
                          <p className="text-orange-700">{mvp.ryzyko}</p>
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

      {/* MVP vs reszta */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">MVP vs MMP vs MLP vs Prototyp — różnice</h2>
            <div className="space-y-3">
              {mvpVsOther.map((item, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-14 text-center">
                    <span className="font-bold text-emerald-700 text-sm">{item.termin}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-700 text-sm mb-1">{item.definicja}</p>
                    <p className="text-xs text-slate-400">Cel: {item.cel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Proces 7 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Proces MVP — 7 kroków</h2>
            <div className="space-y-4">
              {mvpProcess.map((s, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 flex gap-4">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {s.krok}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{s.tytul}</h3>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — MVP</h2>
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

      <RelatedArticles currentArticleId="mvp-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
