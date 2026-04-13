import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest service blueprint?",
    answer:
      "Service blueprint (mapa usługi) to narzędzie projektowania usług (service design) które wizualizuje wszystkie komponenty usługi — zarówno widoczne dla klienta, jak i procesy w tle. W odróżnieniu od customer journey map (perspektywa klienta), service blueprint pokazuje jednocześnie perspektywę klienta i perspektywę organizacji. Pozwala zidentyfikować punkty tarcia, luki w procesach i możliwości optymalizacji.",
  },
  {
    question: "Czym różni się service blueprint od customer journey map?",
    answer:
      "Customer journey map opisuje doświadczenie klienta — co widzi, robi i czuje w kontakcie z marką. Service blueprint idzie głębiej — pokazuje dodatkowo: frontstage (co widzą pracownicy/systemy), backstage (co dzieje się za kulisami) i support processes (infrastruktura). Journey map to 'what customers experience', blueprint to 'how the service actually works'. Blueprint jest operacyjny, journey map jest empathetic.",
  },
  {
    question: "Kiedy tworzyć service blueprint?",
    answer:
      "Service blueprint sprawdza się przy: projektowaniu nowej usługi (design phase), redesignie istniejącej usługi (identyfikacja tarć), onboardingu pracowników (rozumienie całości procesu), skalowaniu usługi (standaryzacja procesów), audycie jakości (znajdowanie luk między obietnicą a dostarczaniem) i integracji nowego kanału (online/offline/mobile). To narzędzie strategiczne dla service designerów, product managerów i operacji.",
  },
  {
    question: "Jakie są warstwy service blueprint?",
    answer:
      "Klasyczny service blueprint ma 5 warstw oddzielonych liniami: 1) Customer actions (działania klienta) — powyżej line of interaction, 2) Frontstage (onstage) employee actions — widoczne dla klienta, oddzielone line of visibility, 3) Backstage employee actions — niewidoczne dla klienta, oddzielone line of internal interaction, 4) Support processes — systemy i procesy wspierające, 5) Physical evidence — fizyczne dowody usługi (aplikacja, email, paragon).",
  },
  {
    question: "Jak zacząć tworzyć service blueprint?",
    answer:
      "Krok po kroku: 1) Wybierz konkretny scenariusz usługi (nie całą usługę — jeden konkretny przypadek), 2) Stwórz szkielet customer journey dla tego scenariusza, 3) Zidentyfikuj touchpointy i evidence, 4) Uzupełnij frontstage actions (co widzą), 5) Uzupełnij backstage actions (co dzieje się za kulisami), 6) Dodaj support processes i systemy, 7) Zaznacz fail points i pain points. Pracuj cross-funkcyjnie — sam dział UX nie zna backstage.",
  },
];

const blueprintLayers = [
  {
    warstwa: "Physical Evidence",
    pozycja: "Nad customer actions",
    kolor: "slate",
    opis: "Fizyczne i cyfrowe artefakty z którymi styka się klient — wszystko co może zobaczyć lub dotknąć",
    przykłady: "Strona www, email potwierdzający, aplikacja mobilna, paragon, opakowanie, lokal",
    rola: "Klient ocenia jakość usługi przez te artefakty — definiują postrzeganą jakość",
  },
  {
    warstwa: "Customer Actions",
    pozycja: "Główna oś — działania klienta",
    kolor: "blue",
    opis: "Co klient robi w każdym etapie journey — kroki, wybory, interakcje",
    przykłady: "Wchodzi na stronę → Rejestruje się → Wybiera plan → Płaci → Onboarduje → Korzysta → Odnawia",
    rola: "Punkt wyjścia blueprintu — cały blueprint buduje się wokół perspektywy klienta",
  },
  {
    warstwa: "Frontstage Actions",
    pozycja: "Poniżej line of interaction",
    kolor: "green",
    opis: "Działania pracowników lub systemów widoczne dla klienta — to co klient widzi po drugiej stronie",
    przykłady: "Chat support odpowiada na pytanie | System wysyła email | Pracownik obsługuje przy kasie",
    rola: "Bezpośrednio wpływa na doświadczenie klienta — to 'twarz' usługi",
  },
  {
    warstwa: "Backstage Actions",
    pozycja: "Poniżej line of visibility",
    kolor: "orange",
    opis: "Działania niewidoczne dla klienta — ale niezbędne do dostarczenia usługi",
    przykłady: "Team techniczny przetwarza płatność | Manager przygotowuje raport | System weryfikuje tożsamość",
    rola: "Klient nie widzi ale odczuwa efekty — luki tu powodują opóźnienia i błędy widoczne na frontstage",
  },
  {
    warstwa: "Support Processes",
    pozycja: "Poniżej line of internal interaction",
    kolor: "purple",
    opis: "Systemy, narzędzia i zewnętrzni partnerzy wspierający backstage — infrastruktura usługi",
    przykłady: "CRM, system płatności, API dostawcy, magazyn, narzędzie helpdesk, integracje",
    rola: "Fundament całej usługi — awarie tu wpływają na wszystkie warstwy powyżej",
  },
];

const colorBg: Record<string, string> = {
  slate: "bg-slate-50 border-slate-200",
  blue: "bg-blue-50 border-blue-200",
  green: "bg-green-50 border-green-200",
  orange: "bg-orange-50 border-orange-200",
  purple: "bg-purple-50 border-purple-200",
};

const colorBadge: Record<string, string> = {
  slate: "bg-slate-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
  orange: "bg-orange-600",
  purple: "bg-purple-600",
};

const blueprintVsJourney = [
  { aspekt: "Perspektywa", blueprint: "Klient + organizacja (dual view)", journey: "Wyłącznie klient" },
  { aspekt: "Głębokość", blueprint: "Operacyjna — procesy i systemy", journey: "Empatyczna — emocje i doświadczenie" },
  { aspekt: "Zastosowanie", blueprint: "Projektowanie/optymalizacja procesów", journey: "Identyfikacja pain points klienta" },
  { aspekt: "Odbiorcy", blueprint: "Operations, IT, Service Design", journey: "Marketing, UX, CX" },
  { aspekt: "Kiedy tworzyć", blueprint: "Po journey map — jako następny krok", journey: "Wcześniej — jako punkt wyjścia" },
];

export default function BlogServiceBlueprintCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Service Blueprint — co to jest? Mapa usługi w service design"
        description="Service blueprint (mapa usługi) — definicja, 5 warstw blueprintu, różnica vs customer journey map i jak tworzyć. Kompletny przewodnik po narzędziu service…"
        canonicalUrl="https://fotz.pl/blog/service-blueprint-co-to"

        keywords="Service Blueprint co to jest, Service Blueprint definicja, czym jest Service Blueprint, Service Blueprint przykłady, jak działa Service Blueprint, Service Blueprint znaczenie, Service Blueprint przewodnik"

        canonical="https://fotz.pl/blog/service-blueprint-co-to"
      />
      <ArticleSchema
        title="Service Blueprint — co to jest i jak tworzyć mapę usługi?"
        description="Kompletny przewodnik po service blueprint: 5 warstw (physical evidence, customer actions, frontstage, backstage, support), różnica vs journey map."
        url="https://fotz.pl/blog/service-blueprint-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Service Blueprint", url: "https://fotz.pl/blog/service-blueprint-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Service Blueprint" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Service Blueprint — co to jest i jak tworzyć mapę usługi?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Service blueprint wizualizuje całą usługę — od perspektywy klienta po backstage.
            Poznaj 5 warstw blueprintu, różnicę vs journey map i jak projektować lepsze usługi.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest service blueprint?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Service blueprint</strong> to narzędzie service design wizualizujące kompletną usługę
              — zarówno to co widzi klient (frontstage), jak i procesy i systemy działające za kulisami (backstage).
              Stworzona przez Lynn Shostack w 1984 roku, mapa usługi pokazuje jak wszystkie elementy organizacji
              łączą się, żeby dostarczyć doświadczenie klienta.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W odróżnieniu od customer journey map (perspektywa klienta), service blueprint to widok z lotu ptaka
              na całą maszynę organizacyjną. Pozwala zidentyfikować fail points, redundancje i szanse na optymalizację
              których nie widać patrząc tylko z perspektywy klienta.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "1984", opis: "rok stworzenia przez Lynn Shostack — opublikowany w Harvard Business Review" },
                { stat: "5 warstw", opis: "struktura blueprintu — od evidence przez customer po support processes" },
                { stat: "Dual view", opis: "jedyne narzędzie CX pokazujące jednocześnie perspektywę klienta i organizacji" },
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

      {/* 5 warstw */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">5 warstw service blueprint</h2>
            <p className="text-slate-600 mb-8">Każda warstwa jest oddzielona linią podziału — line of interaction, visibility i internal interaction.</p>
            <div className="space-y-4">
              {blueprintLayers.map((layer, i) => (
                <div key={i} className={`rounded-xl p-6 border ${colorBg[layer.kolor]}`}>
                  <div className="flex items-start gap-4">
                    <div className={`text-white text-xs font-bold px-2 py-1 rounded flex-shrink-0 ${colorBadge[layer.kolor]}`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-bold text-slate-900 text-lg">{layer.warstwa}</h3>
                        <span className="text-xs text-slate-500 italic">{layer.pozycja}</span>
                      </div>
                      <p className="text-slate-600 mb-3">{layer.opis}</p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-white rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykłady:</p>
                          <p className="text-slate-700">{layer.przykłady}</p>
                        </div>
                        <div className="bg-white rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Rola w blueprincie:</p>
                          <p className="text-slate-700">{layer.rola}</p>
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

      {/* Blueprint vs Journey Map */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Blueprint vs Customer Journey Map</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">Service Blueprint</th>
                    <th className="p-3 text-left">Customer Journey Map</th>
                  </tr>
                </thead>
                <tbody>
                  {blueprintVsJourney.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.blueprint}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.journey}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-teal-50 border-l-4 border-teal-500 p-5 rounded-r-lg">
              <p className="font-semibold text-teal-900 mb-1">Praktyczna zasada:</p>
              <p className="text-teal-800 text-sm">
                Zacznij od <strong>customer journey map</strong> — żeby zrozumieć perspektywę klienta.
                Następnie rozbuduj o warstwy organizacyjne tworząc <strong>service blueprint</strong>.
                Oba narzędzia są komplementarne — razem dają pełny obraz.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — service blueprint</h2>
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
