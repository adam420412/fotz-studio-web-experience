import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest thought leadership?",
    answer:
      "Thought leadership (przywództwo myślowe) to strategia pozycjonowania osoby lub organizacji jako uznanego eksperta i autorytetu w danej dziedzinie. Lider myśli nie tylko posiada wiedzę — aktywnie dzieli się unikalnymi perspektywami, kształtuje dyskusje branżowe i wyznacza kierunki rozwoju swojej branży.",
  },
  {
    question: "Czym różni się thought leadership od content marketingu?",
    answer:
      "Content marketing tworzy wartościowe treści w celu przyciągania i konwertowania klientów. Thought leadership idzie dalej — jego celem jest zmiana sposobu myślenia odbiorców, wpływ na debatę branżową i zbudowanie autorytetu przekraczającego produkty czy usługi firmy. Thought leadership to content marketing na najwyższym poziomie abstrakcji.",
  },
  {
    question: "Jak budować thought leadership?",
    answer:
      "Budowanie thought leadership wymaga: definiowania unikalnego punktu widzenia (POV), systematycznego publikowania oryginalnych analiz i badań, aktywności na konferencjach i w mediach branżowych, współpracy z innymi autorytetami, oraz konsekwentnego skupienia się na jednej niszy — lepiej być ekspertem w wąskim temacie niż generalistą wszędzie.",
  },
  {
    question: "Jakie formaty sprawdzają się w thought leadership?",
    answer:
      "Najskuteczniejsze formaty to: długie analizy i raporty badawcze, artykuły na LinkedIn (szczególnie CEO i C-suite), keynote na konferencjach, podcasty jako gość lub host, wywiady w mediach branżowych, white papers, studium przypadku z unikalnymi danymi oraz regularne kolumny opinii w prestiżowych mediach.",
  },
  {
    question: "Jak mierzyć efektywność thought leadership?",
    answer:
      "Kluczowe metryki thought leadership to: wzrost liczby zapytań mediów i zaproszenia na konferencje, Share of Voice w branżowych dyskusjach, liczba cytowań i odwołań przez inne firmy/media, wzrost inbound leads i skrócenie cyklu sprzedaży, liczba followersów i zaangażowanie na LinkedIn, oraz Net Promoter Score wśród klientów.",
  },
];

const thoughtLeadershipTypes = [
  {
    typ: "Corporate Thought Leadership",
    opis: "Organizacja jako całość pozycjonuje się jako lider branżowy",
    przykład: "McKinsey Global Institute, Gartner Research, HBR",
    format: "Raporty badawcze, analizy trendów, white papers",
  },
  {
    typ: "Executive / CEO Thought Leadership",
    opis: "Lider firmy buduje osobisty autorytet wzmacniający markę organizacji",
    przykład: "Elon Musk (Tesla), Satya Nadella (Microsoft), Arianna Huffington",
    format: "LinkedIn posty, keynotes, książki, wywiady",
  },
  {
    typ: "Expert / SME Thought Leadership",
    opis: "Eksperci dziedzinowi (Subject Matter Experts) budują autorytet w wąskiej niszy",
    przykład: "Praktycy SEO, specjaliści od bezpieczeństwa, eksperci finansowi",
    format: "Blogi branżowe, webinary, podcasty, kursy online",
  },
  {
    typ: "Product Thought Leadership",
    opis: "Produkt lub technologia firmy staje się punktem odniesienia dla całej branży",
    przykład: "HubSpot (inbound marketing), Salesforce (CRM), Slack (komunikacja async)",
    format: "State of the Industry reports, nowe kategorie produktowe",
  },
];

const thoughtLeadershipPillars = [
  {
    filar: "Unikalny Punkt Widzenia (POV)",
    opis: "Twoja perspektywa musi być oryginalna i kontrowersyjna — nie powtarzaj tego, co wszyscy mówią. Najlepsze thought leadership kwestionuje status quo.",
    akcja: "Zdefiniuj 3–5 przekonań, z którymi część branży się nie zgodzi",
  },
  {
    filar: "Własne Dane i Badania",
    opis: "Oryginalne badania, ankiety, analizy danych wewnętrznych — to odróżnia lidera od komentatora. Dane własne są fundamentem cytowania przez media.",
    akcja: "Przeprowadź coroczne badanie branżowe i opublikuj raport",
  },
  {
    filar: "Konsekwentna Nisza",
    opis: "Thought leadership działa gdy jesteś związany z jedną specjalizacją. Rozproszenie uwagi niszczy autorytet. Im węższa nisza, tym silniejsze przywództwo.",
    akcja: "Wybierz 1 temat, o którym możesz mówić z najgłębszą wiedzą",
  },
  {
    filar: "Dystrybucja i Amplifikacja",
    opis: "Najlepsza treść bez dystrybucji nie istnieje. LinkedIn, media branżowe, konferencje i współprace z innymi autorytetami to kluczowe kanały.",
    akcja: "Zbuduj sieć mediów (owned, earned, paid) dla dystrybucji treści",
  },
  {
    filar: "Długoterminowa Konsekwencja",
    opis: "Thought leadership buduje się latami, nie miesiącami. Regularność i cierpliwość są kluczowe — algorytmy i ludzie nagradzają konsekwencję.",
    akcja: "Planuj content calendar z minimum 2 publikacjami tygodniowo",
  },
];

const tlMetrics = [
  { metryka: "Share of Voice", opis: "% wzmianek branżowych przypisanych do Twojej marki/osoby", narzędzie: "Brand24, Mention, Prowly" },
  { metryka: "Media Citations", opis: "Liczba cytowań w mediach branżowych i mainstream", narzędzie: "Google Alerts, Semrush Brand Monitoring" },
  { metryka: "Speaking Invitations", opis: "Wzrost liczby zaproszeń na konferencje i webinary", narzędzie: "Tracking manualny" },
  { metryka: "LinkedIn SSI Score", opis: "Social Selling Index — LinkedIn mierzy autorytet 0–100", narzędzie: "LinkedIn Sales Navigator" },
  { metryka: "Inbound Qualified Leads", opis: "Leads przypisane do aktywności thought leadership", narzędzie: "CRM z attribution tracking" },
  { metryka: "Sales Cycle Length", opis: "Skrócenie cyklu sprzedaży u leadów z thought leadership", narzędzie: "CRM analytics" },
];

export default function BlogThoughtLeadershipCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Thought Leadership — co to jest? Przywództwo myślowe w marketingu B2B"
        description="Thought leadership — definicja, 4 typy, 5 filarów budowania autorytetu i jak mierzyć efektywność. Kompletny przewodnik po przywództwie myślowym."
        canonicalUrl="https://fotz.pl/blog/thought-leadership-co-to"
      />
      <ArticleSchema
        title="Thought Leadership — co to jest i jak budować autorytet?"
        description="Kompletny przewodnik po thought leadership: typy, filary budowania autorytetu eksperta i metryki efektywności."
        url="https://fotz.pl/blog/thought-leadership-co-to"
        datePublished="2024-01-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Thought Leadership", url: "https://fotz.pl/blog/thought-leadership-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Thought Leadership" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Thought Leadership — co to jest i jak budować autorytet?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Thought leadership to najskuteczniejsza strategia B2B — buduje zaufanie, skraca cykl sprzedaży
            i tworzy trwały autorytet marki. Poznaj 4 typy, 5 filarów i jak mierzyć efektywność.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest thought leadership?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Thought leadership</strong> (przywództwo myślowe) to strategia budowania autorytetu,
              w której osoba lub organizacja staje się uznanym głosem w branży — nie przez reklamę,
              ale przez wartościowe, oryginalne perspektywy i wiedzę ekspercką dzieloną publicznie.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie Edelman-LinkedIn "B2B Thought Leadership Impact Study" pokazuje, że 58% decydentów
              B2B twierdzi, że thought leadership znacząco wpłynął na ich decyzję zakupową.
              Jednocześnie 89% klientów B2B sprawdza content thought leadership potencjalnego dostawcy
              przed wejściem w rozmowę sprzedażową.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "58%", opis: "decydentów B2B przyznaje, że thought leadership wpływa na decyzje zakupowe (Edelman)" },
                { stat: "89%", opis: "klientów B2B sprawdza content thought leadership przed rozmową sprzedażową" },
                { stat: "2×", opis: "wyższe ceny i krótsze cykle sprzedaży dla firm z uznanym thought leadership" },
              ].map((s, i) => (
                <div key={i} className="bg-violet-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-violet-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 typy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy thought leadership</h2>
            <div className="space-y-5">
              {thoughtLeadershipTypes.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{t.typ}</h3>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Przykłady:</p>
                      <p className="text-slate-700">{t.przykład}</p>
                    </div>
                    <div className="bg-violet-50 rounded p-3">
                      <p className="text-xs font-semibold text-violet-600 mb-1">Formaty:</p>
                      <p className="text-violet-800">{t.format}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 5 filarów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 filarów skutecznego thought leadership</h2>
            <div className="space-y-5">
              {thoughtLeadershipPillars.map((p, i) => (
                <div key={i} className="flex gap-5 bg-violet-50 rounded-xl p-6 border border-violet-100">
                  <div className="w-12 h-12 bg-violet-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{p.filar}</h3>
                    <p className="text-slate-600 mb-2">{p.opis}</p>
                    <p className="text-violet-700 text-sm font-medium">Akcja: {p.akcja}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak mierzyć thought leadership? 6 kluczowych metryk</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Metryka</th>
                    <th className="p-3 text-left">Co mierzy</th>
                    <th className="p-3 text-left">Narzędzie</th>
                  </tr>
                </thead>
                <tbody>
                  {tlMetrics.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.metryka}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                      <td className="p-3 text-violet-700 text-sm font-medium">{row.narzędzie}</td>
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
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — thought leadership</h2>
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

      <ContactSection />
    </Layout>
  );
}
