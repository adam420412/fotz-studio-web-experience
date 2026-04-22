import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest burn rate?",
    answer:
      "Burn rate to tempo w którym firma wydaje posiadane środki pieniężne (cash) miesięcznie. Gross burn rate to wszystkie wydatki w miesiącu. Net burn rate to wydatki minus przychody — ile gotówki faktycznie 'spalamy' miesięcznie. Burn rate jest kluczową metryką dla startupów i firm niepriofitowych — określa jak długo firma może działać bez nowego finansowania. Termin pochodzi z czasów dot-com boomu lat 90.",
  },
  {
    question: "Jak obliczyć runway?",
    answer:
      "Runway = Gotówka / Net Burn Rate. Przykład: masz 1 200 000 PLN, net burn rate 100 000 PLN/mies. = 12 miesięcy runway. To czas który masz na osiągnięcie break-even lub pozyskanie kolejnej rundy finansowania. Rekomendacja: zawsze miej min. 12-18 miesięcy runway. Zaczynaj fundraising mając 9-12 miesięcy — wcześniej jesteś w mocniejszej pozycji negocjacyjnej.",
  },
  {
    question: "Jaki burn rate jest dobry?",
    answer:
      "Nie ma jednej dobrej wartości — zależy od etapu i rynku. Ważniejszy jest burn multiple: ile wydajesz żeby wygenerować 1 PLN nowego ARR. Burn multiple poniżej 1× to efficient growth, 1-1.5× to good, 1.5-2× to fair, powyżej 2× to poor (Bessemer Venture Partners benchmark). Burn rate jest do zaakceptowania gdy: rośniesz szybko, masz clear path to profitability i runway ponad 12 miesięcy.",
  },
  {
    question: "Czym różni się gross burn od net burn?",
    answer:
      "Gross burn rate to wszystkie wydatki operacyjne miesięcznie (salaries, rent, software, marketing) bez uwzględnienia przychodów. Net burn rate = Gross burn − Revenue. Dla inwestorów i zarządzania cash ważniejszy jest net burn — pokazuje ile faktycznie ubywa z konta. Startup z gross burn 500k PLN/mies. i revenue 300k PLN/mies. ma net burn 200k PLN/mies.",
  },
  {
    question: "Jak zmniejszyć burn rate bez zabijania wzrostu?",
    answer:
      "Podejście chirurgiczne: 1) Audyt wszystkich wydatków — które bezpośrednio wspierają wzrost? 2) Renegocjuj kontrakty — software subscriptions, biuro, dostawcy, 3) Priorytetyzuj najefektywniejsze kanały growth, 4) Rozważ hiring freeze dla ról nie-core, 5) Szukaj efektywności operacyjnej zanim tniesz. Błąd: cięcie R&D i sprzedaży — to zabija wzrost. Zwolnienia są narzędziem ostatecznym — kosztują kulturę i momentum.",
  },
];

const burnRateFormulas = [
  {
    nazwa: "Gross Burn Rate",
    wzor: "Suma wszystkich wydatków operacyjnych w miesiącu",
    przykład: "Salaries 300k + Marketing 100k + SaaS tools 50k + Biuro 30k + Inne 20k = 500k PLN/mies.",
    kiedy: "Do oceny całkowitego poziomu kosztów operacyjnych",
  },
  {
    nazwa: "Net Burn Rate",
    wzor: "Gross Burn Rate − Monthly Revenue",
    przykład: "Gross burn 500k − Revenue 200k = Net burn 300k PLN/mies.",
    kiedy: "Kluczowy dla obliczeń runway — pokazuje faktyczny ubytek gotówki",
  },
  {
    nazwa: "Runway",
    wzor: "Cash on Hand ÷ Net Burn Rate",
    przykład: "2 400 000 PLN / 200 000 PLN/mies. = 12 miesięcy",
    kiedy: "Do planowania kiedy potrzebne jest kolejne finansowanie lub break-even",
  },
  {
    nazwa: "Burn Multiple",
    wzor: "Net Burn / Net New ARR",
    przykład: "Net burn 300k / New ARR 200k = 1.5× burn multiple",
    kiedy: "Do oceny efektywności wzrostu — ile wydajesz na każdą PLN nowego ARR",
  },
];

const burnMultipleBenchmarks = [
  { poziom: "Poniżej 1×", ocena: "Outstanding", kolor: "green", opis: "Bardzo efektywny wzrost — każda wydana PLN generuje ponad PLN ARR" },
  { poziom: "1× – 1.5×", ocena: "Good", kolor: "blue", opis: "Zdrowy wzrost — akceptowalny przez większość inwestorów" },
  { poziom: "1.5× – 2×", ocena: "Fair", kolor: "yellow", opis: "Umiarkowany — wymaga poprawy efektywności lub przyspieszenia wzrostu" },
  { poziom: "Powyżej 2×", ocena: "Poor", kolor: "red", opis: "Nieefektywny wzrost — zbyt wiele paliwa na jednostkę ARR" },
];

const colorMap: Record<string, string> = {
  green: "border-green-300 bg-green-50 text-green-800",
  blue: "border-blue-300 bg-blue-50 text-blue-800",
  yellow: "border-yellow-300 bg-yellow-50 text-yellow-800",
  red: "border-red-300 bg-red-50 text-red-800",
};

export default function BlogBurnRateCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Burn Rate i Runway | Fotz Studio"
        description="Burn rate i runway — definicja, wzory (gross burn, net burn, runway, burn multiple), benchmarki i jak zmniejszyć burn rate. Kompletny przewodnik dla startupów."
        canonicalUrl="https://fotz.pl/blog/burn-rate-runway-co-to"

        keywords="Burn Rate i Runway co to jest, Burn Rate i Runway definicja, czym jest Burn Rate i Runway, Burn Rate i Runway startup, Burn Rate i Runway jak liczyć, Burn Rate i Runway wzór, Burn Rate i Runway przykłady"

        canonical="https://fotz.pl/blog/burn-rate-runway-co-to"
      />
      <ArticleSchema
        title="Burn Rate i Runway — co to jest i jak obliczać?"
        description="Kompletny przewodnik po burn rate i runway: 4 wzory, burn multiple benchmarki (Bessemer), jak zmniejszyć burn bez zabijania wzrostu."
        url="https://fotz.pl/blog/burn-rate-runway-co-to"
        datePublished="2024-01-27"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Burn Rate i Runway", url: "https://fotz.pl/blog/burn-rate-runway-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Burn Rate i Runway", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Burn Rate i Runway — co to jest i jak obliczać?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Burn rate to tempo spalania gotówki. Runway to czas życia firmy.
            Poznaj wzory gross/net burn, burn multiple i jak zarządzać cash w startupie.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to jest burn rate i runway?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Burn rate</strong> to tempo w którym firma wydaje gotówkę miesięcznie.
              <strong> Runway</strong> to czas (w miesiącach) jaki firma ma zanim skończy się gotówka —
              przy założeniu obecnego burn rate i bez nowego finansowania.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Dla startupów i firm w fazie wzrostu burn rate i runway to fundamentalne metryki.
              Fundraising powinien zaczynać się gdy runway wynosi 9-12 miesięcy — nie gdy zasoby się kończą.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "12-18 mies.", opis: "rekomendowany runway jako minimum bezpieczeństwa dla startupów" },
                { stat: "9 mies.", opis: "moment kiedy należy zacząć fundraising — nie czekaj na ostatnią chwilę" },
                { stat: "Burn multiple", opis: "kluczowa metryka inwestorów: net burn ÷ new ARR — poniżej 1.5× to dobry wynik" },
              ].map((s, i) => (
                <div key={i} className="bg-amber-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-amber-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 kluczowe wzory: burn rate i runway</h2>
            <div className="space-y-4">
              {burnRateFormulas.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200">
                  <h3 className="font-bold text-amber-700 text-lg mb-2">{f.nazwa}</h3>
                  <div className="bg-slate-900 text-white rounded p-3 font-mono text-sm mb-3">
                    {f.wzor}
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-amber-50 rounded p-3">
                      <p className="text-xs font-semibold text-amber-600 mb-1">Przykład:</p>
                      <p className="text-amber-800">{f.przykład}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Kiedy używać:</p>
                      <p className="text-slate-700">{f.kiedy}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Burn Multiple — benchmarki Bessemer VP</h2>
            <p className="text-slate-600 mb-6">Burn multiple (net burn ÷ net new ARR) mierzy efektywność wzrostu — ile wydajesz na każdą PLN nowego ARR.</p>
            <div className="space-y-3">
              {burnMultipleBenchmarks.map((b, i) => (
                <div key={i} className={`rounded-xl p-4 border-2 ${colorMap[b.kolor]}`}>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold text-lg">{b.poziom}</span>
                    <span className="font-bold">{b.ocena}</span>
                  </div>
                  <p className="text-sm">{b.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — burn rate i runway</h2>
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

      <RelatedArticles currentArticleId="burn-rate-runway-co-to" />
      <ContactSection />
    </Layout>
  );
}
