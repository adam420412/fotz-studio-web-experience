import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Category Creation?",
    answer: "Category Creation (tworzenie kategorii) to strategia marketingowa i biznesowa, w której firma nie wchodzi na istniejący rynek — lecz tworzy zupełnie nową kategorię produktową i pozycjonuje się jako jej lider. Zamiast walczyć o udział w istniejącej kategorii (CRM, ERP, marketing automation), firma definiuje problem w nowy sposób i tworzy nową 'szufladkę' w głowie kupującego. Przykłady: Salesforce nie sprzedał 'lepszego CRM' — stworzył kategorię 'CRM w chmurze'. Slack nie zbudował 'lepszego emaila' — stworzył kategorię 'team messaging'. Gainsight nie sprzedał 'obsługę klienta' — stworzył kategorię 'Customer Success'.",
  },
  {
    question: "Dlaczego firmy decydują się na Category Creation?",
    answer: "Korzyści Category Creation: Winner-takes-most dynamics — lider kategorii zgarnia nieproporcjonalnie duży udział (Salesforce w CRM, HubSpot w inbound marketing). Category leader premium — firmy definiujące kategorię wyceniane są z premium 2-5x vs followers. Dyktowanie narracji rynkowej — lider kategorii definiuje co jest 'dobre' a co 'stare'. Trudniejsza konkurencja — challengers muszą walczyć z kategorią którą ty stworzyłeś. Analyst relations leverage — analitycy (Gartner, Forrester) wpisują Cię do Magic Quadrant pierwszego. Ryzyka: wymaga ogromnych zasobów na edukację rynku, zajmuje 5-10 lat, możesz stworzyć kategorię którą zdominuje ktoś inny.",
  },
  {
    question: "Jak zbudować strategię Category Creation?",
    answer: "6 kroków Category Creation: 1. Zdefiniuj problem inaczej — nie 'lepsze rozwiązanie X' ale 'nowy sposób myślenia o Y'. 2. Stwórz nowe słownictwo — nowe terminy, koncepty, frameworks które definiują kategorię. 3. Edukuj rynek — treści, events, badania które budują świadomość problemu (nie produktu). 4. Zbuduj community — klientów, influencerów, analityków którzy stają się ambasadorami kategorii. 5. Dominuj analyst relations — uzyskaj pozycję lidera w Gartner Magic Quadrant lub Forrester Wave. 6. Skaluj narratyw — konferencje, certyfikacje, stowarzyszenia branżowe. Category Creation to marketing gra długoterminowa — wymaga cierpliwości i konsekwencji przez lata.",
  },
  {
    question: "Czym Category Creation różni się od pozycjonowania?",
    answer: "Pozycjonowanie vs Category Creation: Pozycjonowanie definiuje jak Twój produkt jest lepszy od konkurentów w istniejącej kategorii — 'jesteśmy szybszym, tańszym CRM dla SMB'. Category Creation definiuje nową kategorię gdzie Twój produkt jest jedynym, oczywistym rozwiązaniem — 'nie potrzebujesz 'sprzedaży przez email' — potrzebujesz Revenue Intelligence'. Pozycjonowanie walczy na features i price. Category Creation walczy na narratyw i edukację rynku. Pozycjonowanie jest tańsze i szybsze. Category Creation jest droższe i wolniejsze — ale zwrot jest nieporównywalnie większy gdy się uda. Większość firm powinna robić pozycjonowanie. Niewielu stać na Category Creation.",
  },
  {
    question: "Jakie firmy skutecznie stworzyły nowe kategorie?",
    answer: "Przykłady udanych Category Creation: Salesforce — 'No Software' i CRM w chmurze (wcześniej Siebel on-premise dominował). HubSpot — Inbound Marketing (wcześniej marketing = outbound, cold calling, reklamy). Gainsight — Customer Success jako dyscyplina biznesowa. Marketo — Marketing Automation jako oddzielna kategoria od CRM. Drift — Conversational Marketing (chatboty dla sprzedaży). Gong — Revenue Intelligence (analiza rozmów sprzedażowych AI). Każda z tych firm spędziła lata i setki milionów dolarów na edukację rynku — zanim rynek zaczął szukać ich kategorii. Dziś te kategorie generują miliardy ARR.",
  },
];

const categoryStages = [
  {
    etap: "Problem Evangelism",
    opis: "Edukuj rynek o problemie, który Twój produkt rozwiązuje — zanim pokażesz produkt",
    działania: ["Research i raporty branżowe o skali problemu", "Konferencje i eventy gdzie definiujesz problem", "Thought leadership — CEO jako expert od problemu", "Analyst briefings — edukuj Gartner, Forrester"],
    kolor: "blue",
  },
  {
    etap: "Language Creation",
    opis: "Stwórz nowe słownictwo które definiuje kategorię i Twój point of view",
    działania: ["Wymyśl termin dla kategorii (Inbound Marketing, Revenue Intelligence)", "Stwórz framework lub metodologię", "Publicznie odróżnij 'stare' od 'nowego' podejścia", "Zadbaj by inni używali Twojego języka (media, analitycy, klienci)"],
    kolor: "green",
  },
  {
    etap: "Community Building",
    opis: "Zbuduj community praktyków wokół problemu który rozwiązujesz",
    działania: ["Slack/Discord community dla Twojego ICP", "Certyfikacje i programy edukacyjne", "User conference (Dreamforce Salesforce, Pulse Gainsight)", "Ambassador programy dla early adopters"],
    kolor: "purple",
  },
  {
    etap: "Market Domination",
    opis: "Utrwal pozycję lidera kategorii przez skalowanie narratywu",
    działania: ["Lider w Gartner Magic Quadrant lub Forrester Wave", "Stowarzyszenie branżowe wokół kategorii", "Podręczniki akademickie i programy edukacyjne", "M&A by przejąć challengers i rozszerzyć kategorię"],
    kolor: "orange",
  },
];

const categoryVsPositioning = [
  { aspekt: "Cel", pozycjonowanie: "Lepszy produkt w istniejącej kategorii", categoryCreation: "Nowa kategoria gdzie jesteś jedynym liderem" },
  { aspekt: "Czas do wyników", pozycjonowanie: "6-18 miesięcy", categoryCreation: "5-10 lat" },
  { aspekt: "Budżet marketingowy", pozycjonowanie: "Standardowy dla branży", categoryCreation: "2-5x wyższy od konkurentów" },
  { aspekt: "Główna aktywność", pozycjonowanie: "Feature differentiation, pricing", categoryCreation: "Thought leadership, edukacja rynku" },
  { aspekt: "Ryzyko", pozycjonowanie: "Niższe — walczysz na istniejącym rynku", categoryCreation: "Wysokie — możesz stworzyć kategorię którą zdominuje inny" },
  { aspekt: "Potencjalny zwrot", pozycjonowanie: "Market share w segmencie", categoryCreation: "Winner-takes-most w całej kategorii" },
];

export default function BlogCategoryCreationCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Category Creation — tworzenie kategorii rynkowej | Fotz.pl"
        description="Category Creation (tworzenie kategorii) — strategia budowania nowej kategorii produktowej, etapy, różnica vs pozycjonowanie i przykłady (Salesforce, HubSpot, Gainsight)."
        canonicalUrl="https://fotz.pl/blog/category-creation-tworzenie-kategorii-rynkowej"
      />
      <ArticleSchema
        title="Category Creation — tworzenie kategorii rynkowej"
        description="Kompletny przewodnik po Category Creation: etapy, język, community, różnica vs pozycjonowanie i przykłady."
        url="https://fotz.pl/blog/category-creation-tworzenie-kategorii-rynkowej"
        datePublished="2024-02-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Category Creation", url: "https://fotz.pl/blog/category-creation-tworzenie-kategorii-rynkowej" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Category Creation", href: "/blog/category-creation-tworzenie-kategorii-rynkowej" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-rose-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Strategia Marketingowa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Category Creation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Najbardziej ambitna strategia marketingowa — zamiast walczyć o udział w istniejącej
              kategorii, tworzysz nową. Salesforce, HubSpot, Gainsight — wszyscy tak zaczęli.
              Czy Twoja firma jest gotowa na Category Creation?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Etapów strategii", value: "4" },
                { label: "Czas do wyników", value: "5-10 lat" },
                { label: "Premium wyceny", value: "2-5x" },
                { label: "Kluczowy zasób", value: "Narracja" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-rose-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 etapy Category Creation</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Category Creation to maraton, nie sprint. Każdy etap buduje fundament pod następny.
              Firmy które próbują pominąć Problem Evangelism tracą lata walcząc z rynkiem który nie rozumie ich wartości.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {categoryStages.map((s, i) => (
              <FadeInView key={s.etap}>
                <div className={`rounded-xl border-2 p-6 ${
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      s.kolor === "blue" ? "bg-blue-600" :
                      s.kolor === "green" ? "bg-green-600" :
                      s.kolor === "purple" ? "bg-purple-600" :
                      "bg-orange-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-xl mb-2 ${
                        s.kolor === "blue" ? "text-blue-800" :
                        s.kolor === "green" ? "text-green-800" :
                        s.kolor === "purple" ? "text-purple-800" :
                        "text-orange-800"
                      }`}>{s.etap}</h3>
                      <p className="text-gray-600 text-sm mb-3">{s.opis}</p>
                      <ul className="space-y-1">
                        {s.działania.map((d) => (
                          <li key={d} className="flex gap-2 text-sm text-gray-700">
                            <span className={`flex-shrink-0 ${
                              s.kolor === "blue" ? "text-blue-500" :
                              s.kolor === "green" ? "text-green-500" :
                              s.kolor === "purple" ? "text-purple-500" :
                              "text-orange-500"
                            }`}>→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Category vs Positioning */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Category Creation vs. Pozycjonowanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Większość firm powinna robić skuteczne pozycjonowanie, nie Category Creation.
              Category Creation wymaga skali, cierpliwości i gotowości na wieloletnią grę.
            </p>
          </FadeInView>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-900 text-white">
              <div className="p-4 text-sm font-bold">Aspekt</div>
              <div className="p-4 text-sm font-bold text-blue-400">Pozycjonowanie</div>
              <div className="p-4 text-sm font-bold text-rose-400">Category Creation</div>
            </div>
            {categoryVsPositioning.map((r, i) => (
              <div key={r.aspekt} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="p-4 text-sm font-bold text-gray-700">{r.aspekt}</div>
                <div className="p-4 text-sm text-gray-700">{r.pozycjonowanie}</div>
                <div className="p-4 text-sm text-gray-700">{r.categoryCreation}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
