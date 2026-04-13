import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest heatmapa strony internetowej?",
    answer:
      "Heatmapa (mapa ciepła) to wizualizacja danych o zachowaniach użytkowników na stronie internetowej. Kolory wskazują intensywność aktywności: czerwony/pomarańczowy = wysokie zaangażowanie, niebieski/zimny = niska aktywność. Heatmapy pokazują gdzie użytkownicy klikają, jak daleko scrollują, gdzie poruszają kursorem i gdzie 'wpatrują się' — bez potrzeby obserwowania ich bezpośrednio. To narzędzie odkrycia insightów UX i CRO.",
  },
  {
    question: "Jakie są rodzaje heatmap?",
    answer:
      "4 główne typy heatmap: Click heatmap — pokazuje gdzie i jak często użytkownicy klikają (w przyciski, linki, obrazy, ale też w elementy niekliklalne). Scroll heatmap — pokazuje jak głęboko użytkownicy scrollują stronę i gdzie 'wypadają' (fold). Move heatmap (cursor tracking) — śledzenie ruchu myszki — koreluje z patrzeniem (eye tracking) choć jest mniej precyzyjne. Rage clicks — specjalny typ click heatmapy pokazujący frustracyjne kliknięcia (szybkie wielokrotne kliknięcia w jedno miejsce).",
  },
  {
    question: "Jakie narzędzia do tworzenia heatmap?",
    answer:
      "Najpopularniejsze: Hotjar — najpopularniejsze, heatmapy + nagrania sesji + ankiety, plan free do 35 dziennych sesji. Microsoft Clarity — darmowe bez limitów, integracja z GA4, heatmapy + nagrania. Lucky Orange — heatmapy + live view + chat, dobry dla e-commerce. FullStory — enterprise, zaawansowana analityka behawioralna. Mouseflow — heatmapy + funnel analytics + nagrania. ContentSquare — enterprise, płatny. Smartlook — dobre dla mobile i SaaS. Do mobile: UXCam.",
  },
  {
    question: "Jak interpretować scroll heatmapę?",
    answer:
      "Scroll heatmapa pokazuje % użytkowników którzy dotarli do danego punktu strony. Kluczowe metryki: 'Fold line' (pierwsza widoczna treść bez scrollowania) — zwykle widzi 80-90% użytkowników. Poniżej folda drastyczny drop. Jeśli kluczowe informacje (CTA, USP) są poniżej punktu gdzie 50% użytkowników odpada — to problem. Dobra strona landingowa: primary CTA powyżej folda, zawartość poniżej folda dla tych którzy chcą więcej informacji.",
  },
  {
    question: "Co można odkryć dzięki heatmapom?",
    answer:
      "Typowe insighty z heatmap: Rage clicks — użytkownicy klikają w elementy które nie są kliklalne (np. obraz produktu, logo) — sugestia dodania linku/akcji. Distraction clicks — klikanie w elementy odciągające od głównego CTA. Scroll depth — kluczowe treści ukryte zbyt głęboko. Banner blindness — elementy które użytkownicy ignorują (podobne wizualnie do reklam). False floors — użytkownicy nie scrollują dalej bo myślą że strona się skończyła. Click patterns — czy nawigacja działa intuicyjnie.",
  },
];

const heatmapTypes = [
  {
    typ: "Click Heatmap",
    opis: "Wizualizacja kliknięć — gdzie i jak często użytkownicy klikają",
    insight: "Czy CTA jest widoczne? Czy klikają w niekliklalne elementy? Jakie sekcje przyciągają uwagę?",
    zastosowanie: "Optymalizacja CTA, nawigacji, layoutu sekcji konwersji",
    tool_przykład: "Hotjar, Microsoft Clarity",
  },
  {
    typ: "Scroll Heatmap",
    opis: "Pokazuje jak głęboko użytkownicy scrollują i gdzie opuszczają stronę",
    insight: "Ile % użytkowników widzi dany content? Czy CTA jest powyżej fold? Gdzie jest 'śmierć' scrollowania?",
    zastosowanie: "Optymalizacja długości strony, pozycjonowania CTA, struktury treści",
    tool_przykład: "Hotjar, Mouseflow",
  },
  {
    typ: "Move Heatmap (Cursor)",
    opis: "Śledzenie ruchu kursora myszy — koreluje z eyetracking (ale mniej precyzyjne)",
    insight: "Gdzie skupia się uwaga wizualna? Czy nagłówki są czytane? Jakie sekcje są ignorowane?",
    zastosowanie: "Analiza uwagi i hierarchii informacji, F-pattern i Z-pattern reading",
    tool_przykład: "Hotjar, Lucky Orange",
  },
  {
    typ: "Rage Clicks",
    opis: "Szybkie wielokrotne kliknięcia w jedno miejsce — sygnał frustracji użytkownika",
    insight: "Gdzie użytkownicy są sfrustrowani? Niedziałające przyciski, błędy JS, brak feedbacku?",
    zastosowanie: "Bug detection, poprawa feedbacku interakcji, eliminacja pain points",
    tool_przykład: "Hotjar, FullStory, Microsoft Clarity",
  },
];

const heatmapInsights = [
  { problem: "Brak kliknięć w CTA", diagnoza: "CTA jest niewidoczne, zlewa się z tłem lub ma słaby kontrast", rozwiązanie: "Zmień kolor, rozmiar, pozycję CTA — A/B testuj" },
  { problem: "Rage clicks na element", diagnoza: "Element wygląda jak klikalny (niebieskie, podkreślone) ale nie jest linkiem", rozwiązanie: "Dodaj link/akcję lub zmień styl elementu" },
  { problem: "Niska głębokość scroll", diagnoza: "Strona zbyt długa, treść nieangażująca, false floor effect", rozwiązanie: "Skróć stronę, dodaj anchor links, redesign sekcji" },
  { problem: "Kliknięcia w logo/header", diagnoza: "Użytkownicy nawigują przez logo (back to home) — szukają innej treści", rozwiązanie: "Analiza search queries — czy potrzebna lepsza nawigacja?" },
  { problem: "Niskie zaangażowanie poniżej fold", diagnoza: "Treść powyżej fold nie zachęca do scrollowania — brak curiosity gap", rozwiązanie: "Dodaj teaser poniżej hero, strzałkę w dół, preview sekcji" },
  { problem: "Banner blindness", diagnoza: "Użytkownicy ignorują sekcję bo wygląda jak reklama", rozwiązanie: "Zmień styl sekcji — mniej reklamowo, bardziej content" },
];

const popularTools = [
  { narzędzie: "Hotjar", cena: "Free (35 sesji/dzień) / od 39 USD/mies.", funkcje: "Heatmapy, nagrania, ankiety, funnel analysis", najlepsze: "SMB, agencje, ogólny UX research" },
  { narzędzie: "Microsoft Clarity", cena: "Darmowe (bez limitów)", funkcje: "Heatmapy, nagrania sesji, integracja GA4, rage clicks", najlepsze: "Start bez budżetu, integracja z Microsoft eco" },
  { narzędzie: "Lucky Orange", cena: "od 18 USD/mies.", funkcje: "Heatmapy, live view, chat, polls, surveys", najlepsze: "E-commerce, live monitoring" },
  { narzędzie: "FullStory", cena: "Enterprise (custom pricing)", funkcje: "Advanced analytics, session replay, data integrations", najlepsze: "Enterprise, product analytics" },
];

export default function BlogHeatmapCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Heatmapa Strony — co to jest? Click scroll i move heatmaps w UX"
        description="Heatmapa (mapa ciepła) strony internetowej — definicja, 4 typy (click, scroll, move, rage clicks), narzędzia (Hotjar, Clarity) i jak interpretować wyniki…"
        canonicalUrl="https://fotz.pl/blog/heatmapa-co-to"

        keywords="Heatmapa Strony co to jest, Heatmapa Strony definicja, czym jest Heatmapa Strony, Heatmapa Strony przykłady, jak działa Heatmapa Strony, Heatmapa Strony znaczenie, Heatmapa Strony przewodnik"

        canonical="https://fotz.pl/blog/heatmapa-co-to"
      />
      <ArticleSchema
        title="Heatmapa Strony Internetowej — co to jest i jak używać?"
        description="Kompletny przewodnik po heatmapach: 4 typy (click, scroll, move, rage clicks), narzędzia, interpretacja wyników i typowe insighty UX."
        url="https://fotz.pl/blog/heatmapa-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Heatmapa", url: "https://fotz.pl/blog/heatmapa-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Heatmapa" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Heatmapa Strony — co to jest i jak używać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Heatmapy wizualizują zachowania użytkowników — gdzie klikają, jak scrollują, co ignorują.
            Poznaj 4 typy, narzędzia (Hotjar, Clarity) i jak odkrywać insighty UX.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest heatmapa strony?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Heatmapa</strong> to wizualizacja danych o zachowaniach użytkowników
              na stronie internetowej. Zamiast czytać suche liczby z analytics,
              widzisz "mapę ciepła" — zimne kolory (niebieski) gdzie aktywności było mało,
              ciepłe (czerwony, pomarańczowy) gdzie było jej dużo.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Heatmapy są bezcennym narzędziem UX i CRO — pokazują "gdzie problem jest"
              zanim zadasz pytanie "dlaczego". Google Analytics mówi Ci co — heatmapy mówią gdzie.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "4 typy", opis: "heatmap — click, scroll, move (cursor) i rage clicks — każdy odkrywa inne insighty" },
                { stat: "Darmowe", opis: "narzędzia jak Microsoft Clarity i Hotjar (plan free) pozwalają zacząć bez budżetu" },
                { stat: "Triangulacja", opis: "heatmapy + nagrania sesji + analytics = kompletny obraz zachowań użytkownika" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy heatmap</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {heatmapTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 text-sm mb-2">{t.opis}</p>
                  <div className="bg-blue-50 rounded p-3 mb-2">
                    <p className="text-xs font-semibold text-blue-600 mb-1">Kluczowy insight:</p>
                    <p className="text-blue-800 text-xs">{t.insight}</p>
                  </div>
                  <p className="text-xs text-slate-500">Zastosowanie: {t.zastosowanie}</p>
                  <p className="text-xs text-slate-400 mt-1">Narzędzia: {t.tool_przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Najczęstsze insighty z heatmap</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Obserwacja</th>
                    <th className="p-3 text-left">Diagnoza</th>
                    <th className="p-3 text-left">Rozwiązanie</th>
                  </tr>
                </thead>
                <tbody>
                  {heatmapInsights.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-blue-700 text-sm">{row.problem}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.diagnoza}</td>
                      <td className="p-3 text-slate-500 text-xs">{row.rozwiązanie}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia do heatmap — porównanie</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {popularTools.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 text-lg mb-1">{t.narzędzie}</h3>
                  <p className="text-xs font-semibold text-green-600 mb-2">{t.cena}</p>
                  <p className="text-slate-600 text-sm mb-2">{t.funkcje}</p>
                  <p className="text-xs text-slate-400">Najlepsze dla: {t.najlepsze}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — heatmapa strony</h2>
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

      <RelatedArticles currentArticleId="heatmapa-co-to" />
      <ContactSection />
    </Layout>
  );
}
