import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest psychologia cen?",
    answer:
      "Psychologia cen to badanie i stosowanie zasad psychologicznych przy ustalaniu i prezentowaniu cen. Opiera się na odkryciu, że konsumenci nie oceniają cen obiektywnie — ich percepcja wartości jest kształtowana przez kontekst, kotwice cenowe, efekty końcówki i prezentację. Odpowiedni sposób pokazania ceny może zwiększyć konwersję bez zmiany faktycznej kwoty.",
  },
  {
    question: "Dlaczego ceny 9,99 są tak popularne?",
    answer:
      "Ceny kończące się na 9 (charm pricing) działają, bo mózg czyta liczby od lewej do prawej i zapamiętuje pierwszą cyfrę. 9,99 PLN jest percepcyjnie bliższe 9 niż 10. Badania MIT i University of Chicago pokazują, że ceny kończące na 9 generują wyższe sprzedaże niż okrągłe odpowiedniki. Efekt jest jednak osłabiony w segmencie premium.",
  },
  {
    question: "Co to jest anchoring cenowy i jak go stosować?",
    answer:
      "Anchoring (kotwiczenie) cenowe polega na pokazaniu wyższej ceny referencyjnej (przekreślonej lub pierwszego planu premium) zanim klient zobaczy właściwą ofertę. Mózg używa kotwicy do oceny 'drogi/tani'. Skuteczne użycie: show the most expensive plan first; przekreślona cena przy promocji; porównanie 'kawa dziennie vs. nasz produkt'.",
  },
  {
    question: "Czy ceny premium mogą zwiększać sprzedaż?",
    answer:
      "Tak — paradoksalnie wyższa cena może zwiększać sprzedaż przez efekt Veblen (luksusowe dobra są bardziej pożądane gdy droższe) oraz efekt jakości (mózg kojarzy wysoką cenę z wysoką jakością). W segmencie premium okrągłe ceny (500 PLN zamiast 499 PLN) są skuteczniejsze, bo sygnalizują ekskluzywność.",
  },
  {
    question: "Jak zaprezentować pakiety cenowe, żeby zwiększyć konwersję?",
    answer:
      "Najskuteczniejsza strategia to 3 pakiety z wyróżnionym środkowym (middle option effect). Ludzie unikają ekstremalnych wyborów — najdroższego i najtańszego. Wyróżniony plan 'Polecany' lub 'Najpopularniejszy' skupia uwagę i zwiększa konwersję na nim o 20–50%.",
  },
];

const pricingTechniques = [
  {
    technika: "Charm Pricing (końcówka 9)",
    opis: "Ceny kończące się na .99, .97 lub .95 są percepcyjnie tańsze o cały rząd wielkości",
    kiedy: "Retail, e-commerce, FMCG, budżetowe segmenty",
    kiedy_nie: "Luksus, premium, B2B enterprise",
    efektywność: "Udowodniona naukowo",
  },
  {
    technika: "Anchoring (kotwiczenie)",
    opis: "Pierwsza pokazana cena staje się punktem odniesienia dla wszystkich kolejnych decyzji cenowych",
    kiedy: "Zawsze — w cennikach, promocjach, e-commerce",
    kiedy_nie: "Nigdy nie pokazuj najtańszego wariantu jako pierwszego",
    efektywność: "Bardzo wysoka",
  },
  {
    technika: "Price Framing (ramowanie)",
    opis: "Przedstawienie ceny w kontekście umożliwiającym porównanie: dziennie zamiast rocznie, na użytkownika zamiast całość",
    kiedy: "SaaS, subskrypcje, usługi abonamentowe",
    kiedy_nie: "Gdy dzienna kwota jest wciąż wysoka",
    efektywność: "Wysoka",
  },
  {
    technika: "Decoy Effect",
    opis: "Trzecia, asymetrycznie wyceniona opcja sprawia, że inna opcja wydaje się znacznie bardziej atrakcyjna",
    kiedy: "Pakiety cenowe, menu restauracji",
    kiedy_nie: "Gdy różnice są zbyt duże lub zbyt oczywiste",
    efektywność: "Bardzo wysoka",
  },
  {
    technika: "Bundle Pricing",
    opis: "Pakietowanie produktów razem — klient postrzega pakiet jako wartościowszy i tańszy niż suma składowych",
    kiedy: "SaaS, e-commerce, usługi, upsell",
    kiedy_nie: "Gdy klient chce tylko jednego elementu",
    efektywność: "Wysoka",
  },
  {
    technika: "Pain Reduction (usuwanie bólu płacenia)",
    opis: "Abonament zamiast jednorazowej płatności, 'inwestycja' zamiast 'koszt', ukrycie ceny za wartością",
    kiedy: "SaaS, premium usługi, edukacja",
    kiedy_nie: "Gdy klient aktywnie porównuje koszty",
    efektywność: "Wysoka",
  },
];

const pricingDisplay = [
  { zasada: "Rozmiar czcionki ceny", opis: "Niższa cena powinna być napisana mniejszą czcionką (paradoks: mniejszy font = percepcja niższej ceny). Wyższa cena przekreślona — dużo większa.", wpływ: "Do 20% wyższe konwersje" },
  { zasada: "Usunięcie symbolu waluty", opis: "Brak PLN lub zł przy cenie zmniejsza 'ból płacenia'. Szczególnie skuteczne w restauracjach premium i na stronach checkout.", wpływ: "+10–15% wyższe wydatki" },
  { zasada: "Pozycja ceny na stronie", opis: "CTA i cena powinny być razem. Oddzielenie ich wydłuża czas decyzji. W e-commerce cena nad przyciskiem 'Dodaj do koszyka' konwertuje lepiej.", wpływ: "+8–15% CTR" },
  { zasada: "Kolor ceny po promocji", opis: "Czerwona cena po rabacie aktywuje centra nagrody w mózgu silniej niż neutralna czarna. Kontrast kolorów wzmacnia percepcję rabatu.", wpływ: "+20% wyższe konwersje" },
];

export default function BlogPricingPsychologyCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Psychologia cen | Fotz Studio"
        description="Psychologia cen — charm pricing, anchoring, efekt decoy i ramowanie cen. Kompletny przewodnik po technikach pricing psychology zwiększających konwersję."
        canonicalUrl="https://fotz.pl/blog/psychologia-cen-co-to"

        keywords="Psychologia cen co to jest, Psychologia cen definicja, czym jest Psychologia cen, Psychologia cen w marketingu, Psychologia cen przykłady, jak działa Psychologia cen, Psychologia cen strategia"

        canonical="https://fotz.pl/blog/psychologia-cen-co-to"
      />
      <ArticleSchema
        title="Psychologia cen — co to jest i jak stosować?"
        description="Kompletny przewodnik po psychologii cen: 6 technik pricing, jak prezentować ceny i jakie błędy unikać."
        url="https://fotz.pl/blog/psychologia-cen-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Psychologia cen", url: "https://fotz.pl/blog/psychologia-cen-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Psychologia cen", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Psychologia cen — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Sposób prezentacji ceny może zwiększyć konwersję bez zmiany kwoty.
            Poznaj 6 technik pricing psychology, efekt anchoring, charm pricing i jak wyświetlać ceny na stronie.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest psychologia cen?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Psychologia cen</strong> (pricing psychology) to stosowanie zasad psychologicznych
              przy projektowaniu i prezentowaniu cen. Konsumenci nie oceniają cen obiektywnie —
              ich percepcja jest kształtowana przez kontekst, porównania, sposób wyświetlenia i skojarzenia.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania pokazują, że zmiana sposobu prezentacji ceny — bez zmiany samej kwoty —
              może zwiększyć konwersję od kilku do nawet kilkudziesięciu procent.
              To jeden z najtańszych sposobów poprawy wyników sprzedażowych.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
              <p className="font-semibold text-amber-900">Kluczowa zasada:</p>
              <p className="text-amber-800 mt-1">
                Konsumenci nie kupują produktów za ich cenę absolutną — kupują za cenę
                w stosunku do percepcji wartości i kontekstu porównania.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Techniki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 technik psychologii cen</h2>
            <div className="space-y-5">
              {pricingTechniques.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{t.technika}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        t.efektywność === "Bardzo wysoka" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                      }`}>{t.efektywność}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-3">{t.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-3">
                      <p className="text-xs font-semibold text-green-700 mb-1">Kiedy stosować:</p>
                      <p className="text-green-800">{t.kiedy}</p>
                    </div>
                    <div className="bg-red-50 rounded p-3">
                      <p className="text-xs font-semibold text-red-700 mb-1">Kiedy NIE stosować:</p>
                      <p className="text-red-800">{t.kiedy_nie}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Prezentacja cen */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak wyświetlać ceny, żeby zwiększyć konwersję?</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {pricingDisplay.map((p, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{p.zasada}</h3>
                  <p className="text-slate-600 text-sm mb-3">{p.opis}</p>
                  <div className="bg-amber-50 rounded p-2">
                    <p className="text-amber-700 text-sm font-medium">{p.wpływ}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — psychologia cen</h2>
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

      <RelatedArticles currentArticleId="psychologia-cen-co-to" />
      <ContactSection />
    </Layout>
  );
}
