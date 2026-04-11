import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest neuromarketing?",
    answer:
      "Neuromarketing to dziedzina łącząca neurobiologię, psychologię i marketing. Bada jak mózg konsumenta reaguje na bodźce marketingowe — reklamy, ceny, opakowania, layout sklepu — używając narzędzi takich jak fMRI, EEG, eye-tracking i galwanizacja skóry. Celem jest poznanie nieświadomych procesów decyzyjnych konsumenta.",
  },
  {
    question: "Jakie techniki neuromarketingowe są najczęściej stosowane?",
    answer:
      "Popularne techniki to: eye-tracking (śledzenie gdzie wędruje wzrok na stronie/reklamie), EEG (fale mózgowe podczas oglądania reklam), implicit association tests (nieświadome skojarzenia), galwanizacja skóry (reakcje emocjonalne), analiza mimiki twarzy (emotional AI) oraz A/B testy z mierzeniem biometrycznym.",
  },
  {
    question: "Jakie odkrycia neuromarketingu mają praktyczne zastosowanie?",
    answer:
      "Kluczowe odkrycia to: decyzje zakupowe są w 95% podejmowane nieświadomie; ludzki mózg przetwarza obrazy 60 000× szybciej niż tekst; twarz człowieka na opakowaniu zwiększa sprzedaż; czerwony kolor przyspiesza decyzje; ceny kończące się na 9 aktywują centra nagrody; storytelling aktywuje te same obszary mózgu co rzeczywiste doświadczenie.",
  },
  {
    question: "Czy neuromarketing jest etyczny?",
    answer:
      "Etyczność neuromarketingu jest dyskutowana. Krytycy wskazują na manipulację podświadomymi procesami decyzyjnymi. Zwolennicy argumentują, że neuromarketing pozwala tworzyć bardziej wartościowe i trafne doświadczenia dla konsumentów. Etyczne stosowanie neuromarketingu skupia się na lepszym dopasowaniu produktu do potrzeb, nie na manipulacji.",
  },
  {
    question: "Jak małe firmy mogą stosować zasady neuromarketingu?",
    answer:
      "Bez drogiego sprzętu można stosować: optymalizację kolorów i kontrastu na stronie, używanie twarzy w reklamach, storytelling zamiast suchych faktów, zasadę kotwiczenia cenowego, efekt wyróżnienia (Von Restorff), umieszczanie CTA w odpowiednich miejscach (hot spots uwagi) i zasadę wzajemności w budowaniu relacji.",
  },
];

const neuroInsights = [
  {
    odkrycie: "Efekt anchoring (kotwiczenia)",
    opis: "Pierwsza cena jaką widzi klient staje się 'kotwicą' porównania. Pokazanie wysokiej ceny pierwotnej przed ceną po rabacie sprawia, że oferta wydaje się atrakcyjniejsza.",
    zastosowanie: "Przekreślona cena oryginalna, pakiety premium pokazywane jako pierwsze",
    źródło: "Kahneman & Tversky",
  },
  {
    odkrycie: "Paradoks wyboru",
    opis: "Zbyt wiele opcji paraliżuje decyzję i prowadzi do porzucenia koszyka. Ograniczenie liczby wariantów do 3–5 zwiększa konwersję.",
    zastosowanie: "Ograniczenie SKU, polecany plan w środku (highlighted choice)",
    źródło: "Barry Schwartz",
  },
  {
    odkrycie: "Efekt straty (Loss Aversion)",
    opis: "Utrata boli 2× mocniej niż zysk sprawia radość. Komunikat 'nie trać X' jest skuteczniejszy niż 'zyskaj X'.",
    zastosowanie: "Framing: 'Nie przegap', 'Ostatnia szansa', 'Tracisz X dziennie bez nas'",
    źródło: "Kahneman",
  },
  {
    odkrycie: "Efekt społeczny (Social Proof)",
    opis: "Mózg szuka wskazówek w zachowaniach innych — szczególnie w sytuacji niepewności. Recenzje, liczba klientów i certyfikaty zmniejszają ryzyko decyzyjne.",
    zastosowanie: "Liczba klientów, opinie, 'Bestseller', 'Polecany przez ekspertów'",
    źródło: "Cialdini",
  },
  {
    odkrycie: "Zasada wzajemności",
    opis: "Gdy otrzymujemy coś bezpłatnie, czujemy się zobowiązani do odwzajemnienia. Free trial, darmowy e-book lub próbka uruchamia ten mechanizm.",
    zastosowanie: "Free trials, lead magnety, darmowe próbki, wartościowy content",
    źródło: "Cialdini",
  },
  {
    odkrycie: "Efekt Von Restorffa (wyróżnienia)",
    opis: "Element wyróżniający się w grupie jest lepiej zapamiętany. Wyróżniony przycisk CTA, oznaczony plan 'Polecany' — przyciągają uwagę i konwersję.",
    zastosowanie: "Kolorowe CTA, highlighted pricing plan, bold typografia",
    źródło: "Hedwig von Restorff",
  },
];

const colorPsychology = [
  { kolor: "Czerwony", skojarzenia: "Pilność, energia, podniecenie, apetyt", użycie: "Wyprzedaże, fast food, CTA 'Kup teraz'", marki: "Coca-Cola, Netflix, YouTube" },
  { kolor: "Niebieski", skojarzenia: "Zaufanie, bezpieczeństwo, spokój, profesjonalizm", użycie: "Banki, technologia, B2B, healthcare", marki: "Facebook, LinkedIn, Samsung" },
  { kolor: "Zielony", skojarzenia: "Zdrowie, natura, wzrost, sukces, spokój", użycie: "Organic, fintech (wzrost), ekologia", marki: "Whole Foods, Starbucks, Spotify" },
  { kolor: "Żółty/Pomarańczowy", skojarzenia: "Optymizm, energia, ciepło, kreatywność", użycie: "CTA, FOMO, retail, food delivery", marki: "Amazon, McDonald's, IKEA" },
  { kolor: "Czarny", skojarzenia: "Luksus, ekskluzywność, elegancja, moc", użycie: "Premium marki, moda, automotive", marki: "Chanel, Apple, Nike" },
];

export default function BlogNeuromarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Neuromarketing — co to jest i jak stosować w praktyce?"
        description="Neuromarketing — definicja, kluczowe odkrycia (anchoring, paradoks wyboru, loss aversion), psychologia kolorów i praktyczne zastosowania. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/neuromarketing-co-to"
      />
      <ArticleSchema
        title="Neuromarketing — co to jest i jak stosować?"
        description="Kompletny przewodnik po neuromarketingu: odkrycia naukowe, techniki i praktyczne zastosowania."
        url="https://fotz.pl/blog/neuromarketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Neuromarketing", url: "https://fotz.pl/blog/neuromarketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Neuromarketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Neuromarketing — co to jest i jak stosować?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Neuromarketing łączy neurologię z marketingiem, odkrywając jak mózg podejmuje decyzje zakupowe.
            Poznaj 6 kluczowych odkryć, psychologię kolorów i jak stosować te zasady w praktyce.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest neuromarketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Neuromarketing</strong> to interdyscyplinarna dziedzina, która wykorzystuje metody neuronauk
              do badania procesów decyzyjnych konsumenta. Bada nieświadome reakcje mózgu na bodźce marketingowe —
              reklamy, ceny, opakowania, kolory i layout produktów.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Przełomowe odkrycie Antoniego Damásio pokazuje, że 95% decyzji zakupowych podejmowanych jest
              nieświadomie, zanim uświadomimy sobie samą decyzję. Tradycyjne badania focus group opierają się
              na zracjonalizowanych odpowiedziach — neuromarketing mierzy rzeczywiste, niefiltrowane reakcje.
            </p>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
              <p className="font-semibold text-purple-900">Kluczowy insight neuromarketingu:</p>
              <p className="text-purple-800 mt-2">
                95% decyzji zakupowych jest podejmowanych nieświadomie. Racjonalne argumenty
                są post-hoc uzasadnieniem emocjonalnej decyzji, a nie jej przyczyną.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 odkryć */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kluczowych odkryć neuromarketingu i ich zastosowanie</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {neuroInsights.map((insight, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{insight.odkrycie}</h3>
                  <p className="text-slate-600 text-sm mb-3">{insight.opis}</p>
                  <div className="bg-purple-50 rounded-lg p-3 mb-2">
                    <p className="text-xs font-semibold text-purple-700 mb-1">Zastosowanie:</p>
                    <p className="text-purple-800 text-sm">{insight.zastosowanie}</p>
                  </div>
                  <p className="text-xs text-slate-400">Źródło: {insight.źródło}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Psychologia kolorów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Psychologia kolorów w marketingu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kolor</th>
                    <th className="p-3 text-left">Skojarzenia</th>
                    <th className="p-3 text-left">Użycie w marketingu</th>
                    <th className="p-3 text-left">Przykładowe marki</th>
                  </tr>
                </thead>
                <tbody>
                  {colorPsychology.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.kolor}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.skojarzenia}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.użycie}</td>
                      <td className="p-3 text-slate-500 text-sm">{row.marki}</td>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — neuromarketing</h2>
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
