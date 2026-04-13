import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest competitive intelligence?",
    answer:
      "Competitive intelligence (CI, wywiad konkurencyjny) to systematyczny proces zbierania, analizowania i interpretowania informacji o konkurentach, rynku i środowisku biznesowym w celu podejmowania lepszych decyzji strategicznych. CI transformuje publicznie dostępne dane w actionable insights o strategii, cenach, produktach i planach konkurentów.",
  },
  {
    question: "Czym competitive intelligence różni się od szpiegostwa przemysłowego?",
    answer:
      "Competitive intelligence opiera się wyłącznie na legalnych, publicznie dostępnych lub etycznie pozyskanych danych: raporty finansowe, strony internetowe, publikacje branżowe, konferencje, social media, patenty, opinie pracowników. Szpiegostwo przemysłowe to nielegalne pozyskiwanie tajemnic handlowych. CI jest standardową praktyką biznesową, szpiegostwo jest przestępstwem.",
  },
  {
    question: "Jakie są źródła competitive intelligence?",
    answer:
      "Główne źródła CI to: strony internetowe i blogi konkurentów, raporty roczne i finansowe, oferty pracy (wskazują priorytety strategiczne), opinie pracowników (Glassdoor), recenzje produktów (App Store, G2, Capterra), patenty i zgłoszenia patentowe, prezentacje na konferencjach, media społecznościowe, analizy SEO (Ahrefs, Semrush), Crunchbase (finansowanie), oraz wywiady z klientami i byłymi pracownikami.",
  },
  {
    question: "Czym jest analiza SWOT?",
    answer:
      "SWOT to framework analizy strategicznej: Strengths (mocne strony), Weaknesses (słabe strony), Opportunities (szanse zewnętrzne), Threats (zagrożenia zewnętrzne). W competitive intelligence SWOT robi się dla konkurenta: jakie ma przewagi, słabości, jakie szanse może wykorzystać przed nami, jakie zagrożenia dla naszej pozycji. Punkt wyjścia każdej analizy konkurencji.",
  },
  {
    question: "Jak zbudować system stałego monitorowania konkurencji?",
    answer:
      "System CI powinien zawierać: Google Alerts na nazwy konkurentów i kluczowe terminy branżowe, narzędzia monitoringu mediów (Brand24, Mention), automatyczne raporty SEO z Ahrefs/Semrush (nowe słowa kluczowe, backlinki), śledzenie ofert pracy konkurentów (LinkedIn Jobs Alert), subskrypcję komunikatów prasowych i newsletterów, oraz cykliczne (miesięczne/kwartalne) pełne raporty CI.",
  },
];

const ciFrameworks = [
  {
    framework: "SWOT Analysis",
    opis: "Systematyczna ocena konkurenta: Strengths, Weaknesses, Opportunities, Threats. Punkt wyjścia każdej analizy konkurencji.",
    zastosowanie: "Strategia ogólna, pitch decks, planning strategiczny",
    trudność: "Łatwa",
  },
  {
    framework: "Porter's Five Forces",
    opis: "Analiza sił rynkowych: siła dostawców, siła nabywców, threat of substitutes, bariery wejścia, rywalizacja branżowa.",
    zastosowanie: "Ocena atrakcyjności rynku, pozycja konkurencyjna całego sektora",
    trudność: "Średnia",
  },
  {
    framework: "Competitive Battlecard",
    opis: "Karta porównawcza produktów: cechy, cena, mocne strony, słabe strony, jak wygrywamy, jak przegrywamy — dla każdego głównego konkurenta.",
    zastosowanie: "Sales enablement, obsługa objekcji sprzedażowych",
    trudność: "Łatwa-Średnia",
  },
  {
    framework: "Win/Loss Analysis",
    opis: "Analiza wygranych i przegranych szans sprzedażowych — dlaczego klient wybrał nas lub konkurenta. Bezpośrednie dane od klientów.",
    zastosowanie: "Optymalizacja sprzedaży, product development, positioning",
    trudność: "Średnia",
  },
  {
    framework: "Feature Comparison Matrix",
    opis: "Tabelaryczne porównanie funkcji produktu z konkurentami. Identyfikuje luki i unikalne zalety.",
    zastosowanie: "Product roadmap, marketing messaging, strony porównawcze",
    trudność: "Łatwa",
  },
];

const ciSources = [
  {
    kategoria: "Produkty i Oferta",
    źródła: "Strona cenowa, demo produktu, App Store reviews, G2/Capterra reviews",
    co_szukasz: "Zmiany cenowe, nowe funkcje, feedback klientów",
  },
  {
    kategoria: "Strategia Marketingowa",
    źródła: "Analiza SEO (Ahrefs), advertising intelligence (SimilarWeb), social media",
    co_szukasz: "Target keywords, content strategy, ad spend, messaging",
  },
  {
    kategoria: "Talent i Hiring",
    źródła: "LinkedIn Jobs, Glassdoor, Indeed, pracownicy firmy",
    co_szukasz: "Priorytety strategiczne (które departamenty rosną), technologie używane",
  },
  {
    kategoria: "Finanse i Wzrost",
    źródła: "Crunchbase, AngelList, KRS (Polska), Pitchbook, raporty publiczne",
    co_szukasz: "Rundy finansowania, przychody, burn rate, expansja",
  },
  {
    kategoria: "Własność Intelektualna",
    źródła: "Google Patents, Espacenet, UPRP (Polska), USPTO",
    co_szukasz: "Plany technologiczne, innowacje w pipeline",
  },
  {
    kategoria: "Opinia Rynku i Klientów",
    źródła: "Wywiady z klientami, NPS surveys, win/loss interviews, fora branżowe",
    co_szukasz: "Jak klienci postrzegają konkurenta vs. Ciebie",
  },
];

export default function BlogCompetitiveIntelligenceCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Competitive Intelligence | Fotz Studio"
        description="Competitive intelligence — definicja, 5 frameworków (SWOT, Porter, battlecard, win/loss), 6 źródeł danych i jak zbudować system monitorowania konkurencji…"
        canonicalUrl="https://fotz.pl/blog/competitive-intelligence-co-to"

        keywords="Competitive Intelligence co to jest, Competitive Intelligence definicja, czym jest Competitive Intelligence, Competitive Intelligence przykłady, jak działa Competitive Intelligence, Competitive Intelligence znaczenie, Competitive Intelligence przewodnik"

        canonical="https://fotz.pl/blog/competitive-intelligence-co-to"
      />
      <ArticleSchema
        title="Competitive Intelligence — co to jest i jak stosować?"
        description="Kompletny przewodnik po competitive intelligence: frameworki analizy, źródła danych i system ciągłego monitorowania konkurencji."
        url="https://fotz.pl/blog/competitive-intelligence-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Competitive Intelligence", url: "https://fotz.pl/blog/competitive-intelligence-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Competitive Intelligence" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Competitive Intelligence — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Competitive intelligence to legalny wywiad konkurencyjny z publicznych danych.
            Poznaj 5 frameworków analizy, 6 źródeł informacji i jak zbudować system stałego monitorowania.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest competitive intelligence?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Competitive intelligence</strong> to systematyczne zbieranie i analiza
              publicznie dostępnych informacji o konkurentach i rynku w celu podejmowania
              lepszych decyzji strategicznych. Nie jest to szpiegostwo — to umiejętność
              czytania między wierszami tego, co firmy same ujawniają publicznie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firma zatrudniająca 50 inżynierów AI na LinkedIn sygnalizuje kierunek strategiczny.
              Konkurent, który nagle obniżył ceny, prawdopodobnie traci udziały rynkowe lub przygotowuje
              wielki push sprzedażowy. CI pozwala czytać te sygnały zanim staną się oczywiste.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* 5 frameworków */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 frameworków competitive intelligence</h2>
            <div className="space-y-4">
              {ciFrameworks.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-slate-900 text-lg">{f.framework}</h3>
                    <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded flex-shrink-0 ml-4">Trudność: {f.trudność}</span>
                  </div>
                  <p className="text-slate-600 mb-2">{f.opis}</p>
                  <p className="text-slate-500 text-sm">Zastosowanie: {f.zastosowanie}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Źródła */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kategorii źródeł competitive intelligence</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kategoria</th>
                    <th className="p-3 text-left">Źródła</th>
                    <th className="p-3 text-left">Czego szukasz?</th>
                  </tr>
                </thead>
                <tbody>
                  {ciSources.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kategoria}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.źródła}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.co_szukasz}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — competitive intelligence</h2>
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

      <ContactSection />
    </Layout>
  );
}
