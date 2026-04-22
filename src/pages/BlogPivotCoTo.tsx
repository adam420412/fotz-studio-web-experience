import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest pivot w startupie?",
    answer:
      "Pivot to fundamentalna zmiana strategii produktowej lub biznesowej przy zachowaniu zasobów, zespołu i zdobytej wiedzy. Termin spopularyzowany przez Erica Riesa w 'The Lean Startup' — pivot to nie porażka, ale strategiczna korekta kursu na podstawie danych i feedbacku rynku. Pivot różni się od zwykłej iteracji skalą zmiany: iteracja to drobna korekta w obrębie tej samej strategii, pivot to zmiana fundamentalnych założeń produktu, segmentu lub modelu biznesowego.",
  },
  {
    question: "Jakie są rodzaje pivotów w startupach?",
    answer:
      "Eric Ries wyróżnił kilka typów pivotów: Zoom-In (fragment produktu staje się całym produktem — Slack z gry Glitch), Zoom-Out (produkt staje się częścią większego — odwrotność), Customer Segment (ten sam produkt, inny klient), Customer Need (ten sam klient, inny problem), Platform (produkt → platforma lub odwrotnie), Business Architecture (high margin niche vs. high volume), Value Capture (zmiana modelu monetyzacji), Engine of Growth (viral → sticky → paid), Channel (sprzedaż → partnerzy → self-service), Technology (ten sam problem, inna technologia).",
  },
  {
    question: "Jak odróżnić pivot od porażki?",
    answer:
      "Pivot jest strategiczny: oparty na danych i feedbacku, zachowuje zasoby i wiedzę, ma jasny nowy kierunek. Porażka to zamknięcie działalności lub chaotyczne zmiany bez strategii. Sygnały, że czas na pivot: konsekwentnie niskie wskaźniki adoption pomimo iteracji, klienci używają produktu inaczej niż założono, brak product-market fit po 6-12 miesiącach, fundamentalne założenie rynkowe okazało się błędne. Pivot powinien być świadomą decyzją zarządu — nie reakcją paniczną.",
  },
  {
    question: "Kiedy NIE pivotować?",
    answer:
      "Nie powinieneś pivotować gdy: masz zbyt mało danych do podjęcia świadomej decyzji (zbyt wczesne), twoje wskaźniki rosną — potrzebujesz cierpliwości, a nie zmiany, zmieniasz strategię bo jesteś sfrustrowany powolnym wzrostem bez realnych sygnałów rynkowych ('serial pivot syndrome'), team nie jest zaalignowany na nowy kierunek — pivot bez buy-in to przepis na chaos. Pamiętaj: Airbnb, Slack, Twitter, YouTube i Instagram pivotowały — ale każdy z nich miał klarowny sygnał rynkowy zanim to zrobił.",
  },
  {
    question: "Jak zakomunikować pivot inwestorom?",
    answer:
      "Komunikacja pivotu do inwestorów: bądź szczery i proaktywny — nie czekaj na meeting kwartalny. Przedstaw: dane które wskazały na konieczność zmiany, co nauczyłeś się (learnings), jasny nowy kierunek z hypothesis i planem walidacji, jak pivot wpłynie na runway i KPIs. Dobry inwestor doceni decyzję opartą na danych — obawia się foundera który 'trzyma się' niedziałającego produktu zbyt długo. Framework: 'Odkryliśmy X, co oznacza Y, więc zmieniamy Z by osiągnąć W.'",
  },
];

const pivotTypes = [
  {
    typ: "Zoom-In Pivot",
    opis: "Fragment produktu staje się całym produktem — jedna funkcja okazuje się na tyle silna, że staje się centrum",
    przykład: "Slack — zaczął jako gra Glitch, system komunikacji wewnętrzny stał się produktem",
    kiedy: "Jedna funkcja ma nieproporjonalnie wysoki engagement względem reszty produktu",
  },
  {
    typ: "Customer Segment Pivot",
    opis: "Ten sam produkt lub podobny, ale dla innego klienta — wcześniejsze założenia o segmencie były błędne",
    przykład: "YouTube — pierwotnie serwis randkowy ('Tune In Hook Up'), pivotował do ogólnego video sharing",
    kiedy: "Produkt jest używany entuzjastycznie, ale przez inną grupę niż zakładano",
  },
  {
    typ: "Customer Need Pivot",
    opis: "Ten sam segment klientów, ale rozwiązanie innego problemu — problem który rozwiązujesz okazał się nieprioryttetowy",
    przykład: "Starbucks — zaczął jako sprzedawca ziaren kawy i espresso maszyn, pivotował do kawiarni",
    kiedy: "Klienci pozostają, ale kupują coś innego lub rozmawiają o innym problemie",
  },
  {
    typ: "Platform Pivot",
    opis: "Zmiana z aplikacji na platformę lub odwrotnie — discovery że ecosystem tworzy więcej wartości niż single app",
    przykład: "Amazon — z bookstore do marketplace i AWS (platforma dla sprzedawców i deweloperów)",
    kiedy: "Partnerzy lub deweloperzy chcą budować na twoim produkcie, lub produkt wymaga zbyt wielu integracji",
  },
  {
    typ: "Business Architecture Pivot",
    opis: "Zmiana między high-margin/low-volume (niche) a low-margin/high-volume (mass market)",
    przykład: "Google AdWords — pivotował z premium advertising do self-serve mass market aukcji",
    kiedy: "Model ekonomiczny nie skaluje się, lub odkrywasz okazję na masowy rynek przy innym modelu",
  },
  {
    typ: "Engine of Growth Pivot",
    opis: "Zmiana głównego silnika wzrostu: viral → sticky → paid lub odwrotnie",
    przykład: "Dropbox — pivotował z płatnego modelu do freemium viral (friend referral program)",
    kiedy: "Aktualny engine wzrostu nie generuje wystarczającego CAC/LTV lub jest zbyt drogi do skalowania",
  },
];

const pivotSignals = [
  { sygnał: "Brak PMF po 6-12 miesiącach", opis: "Retention krzywa opada do zera, NPS jest niski, klienci rezygnują mimo iteracji", waga: "Krytyczny" },
  { sygnał: "Klienci używają produktu inaczej", opis: "Użytkownicy hackują twój produkt do innego celu — to gold", waga: "Wysoki" },
  { sygnał: "Konkurencja jest nie do wygrania", opis: "Gracz z 10x zasobami wchodzi na twój rynek — czas znaleźć niszę lub segment", waga: "Wysoki" },
  { sygnał: "Jeden klient generuje 80%+ przychodów", opis: "Zbyt wysokie ryzyko koncentracji — potrzeba dywersyfikacji segmentu lub produktu", waga: "Średni" },
  { sygnał: "Założenie fundacyjne okazało się błędne", opis: "Badania rynku potwierdziły, że problem który rozwiązujesz jest mniejszy niż sądzono", waga: "Krytyczny" },
];

export default function BlogPivotCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Pivot w startupie — co to jest? Rodzaje pivotów i kiedy pivotować"
        description="Pivot — definicja, 6 typów pivotów (Zoom-In, Customer Segment, Platform i in.), sygnały że czas na zmianę i jak zakomunikować inwestorom. Przewodnik dla…"
        canonicalUrl="https://fotz.pl/blog/pivot-startup-co-to"

        keywords="Pivot w startupie co to jest, Pivot w startupie definicja, czym jest Pivot w startupie, Pivot w startupie startup, Pivot w startupie jak liczyć, Pivot w startupie wzór, Pivot w startupie przykłady"

        canonical="https://fotz.pl/blog/pivot-startup-co-to"
      />
      <ArticleSchema
        title="Pivot — co to jest i kiedy pivotować w startupie?"
        description="Kompletny przewodnik po pivot: 6 typów pivotów, 5 sygnałów że czas na zmianę, przykłady (Slack, YouTube, Amazon) i jak odróżnić pivot od porażki."
        url="https://fotz.pl/blog/pivot-startup-co-to"
        datePublished="2024-01-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Pivot w startupie", url: "https://fotz.pl/blog/pivot-startup-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Pivot w startupie", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Pivot — co to jest i kiedy pivotować w startupie?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Slack, YouTube, Instagram, Twitter — wszystkie pivotowały. Pivot to nie porażka —
            to strategiczna korekta kursu. Poznaj 6 typów i sygnały że czas na zmianę.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest pivot?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Pivot</strong> to fundamentalna zmiana strategii produktowej lub biznesowej
              przy zachowaniu zasobów, zespołu i wiedzy zdobytej dotychczas. Termin pochodzi
              od Erica Riesa i jego metodologii Lean Startup — pivot to test nowej hipotezy
              o produkcie, segmencie lub modelu biznesowym, gdy aktualna strategia
              nie przynosi oczekiwanych rezultatów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Kluczowe rozróżnienie: pivot to nie iteracja (drobna korekta w tej samej strategii)
              i nie porażka (zamknięcie). To świadoma, strategiczna decyzja — często najtrudniejsza
              i najważniejsza, jaką podejmuje founder.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { firma: "Slack", od: "Gra online 'Glitch'", do: "Platforma komunikacji zespołowej" },
                { firma: "YouTube", od: "Serwis randkowy", do: "Platforma do video sharing" },
                { firma: "Instagram", od: "App Burbn (check-in)", do: "Aplikacja do udostępniania zdjęć" },
              ].map((p, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                  <p className="font-bold text-amber-800 mb-2">{p.firma}</p>
                  <p className="text-xs text-amber-600 mb-1">Od: <span className="italic">{p.od}</span></p>
                  <p className="text-xs text-amber-700">Do: <span className="font-semibold">{p.do}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 typów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 typów pivotów (wg Erica Riesa)</h2>
            <div className="space-y-4">
              {pivotTypes.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-amber-700 text-lg mb-1">{p.typ}</h3>
                  <p className="text-slate-600 mb-3">{p.opis}</p>
                  <div className="grid md:grid-cols-2 gap-2 text-sm">
                    <div className="bg-amber-50 rounded p-2">
                      <p className="text-xs font-semibold text-amber-600 mb-1">Przykład:</p>
                      <p className="text-amber-800 italic">{p.przykład}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Sygnał że to czas:</p>
                      <p className="text-slate-700">{p.kiedy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Sygnały */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 sygnałów że czas rozważyć pivot</h2>
            <div className="space-y-3">
              {pivotSignals.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{s.sygnał}</h3>
                      <p className="text-slate-600 text-sm">{s.opis}</p>
                    </div>
                    <span className={`text-xs font-bold rounded-full px-3 py-1 flex-shrink-0 ${s.waga === "Krytyczny" ? "bg-red-100 text-red-700" : s.waga === "Wysoki" ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>
                      {s.waga}
                    </span>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — pivot w startupie</h2>
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

      <RelatedArticles currentArticleId="pivot-startup-co-to" />
      <ContactSection />
    </Layout>
  );
}
