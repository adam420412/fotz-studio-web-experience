import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest WACC?",
    answer:
      "WACC (Weighted Average Cost of Capital — Średni Ważony Koszt Kapitału) to minimalna stopa zwrotu jakiej oczekują dostawcy kapitału (akcjonariusze + wierzyciele) za finansowanie firmy. WACC oblicza się jako ważoną średnią kosztu kapitału własnego (Ke) i kosztu długu (Kd), z wagami równymi udziałom w strukturze kapitałowej: WACC = (E/V)*Ke + (D/V)*Kd*(1-T). WACC jest używany jako stopa dyskontowa w DCF, jako hurdle rate dla projektów inwestycyjnych i jako benchmark EVA (Economic Value Added).",
  },
  {
    question: "Jak obliczyć WACC?",
    answer:
      "Formuła WACC: WACC = (E/(E+D)) * Ke + (D/(E+D)) * Kd * (1-T). Gdzie: E = wartość rynkowa kapitału własnego, D = wartość rynkowa długu, Ke = koszt kapitału własnego (CAPM), Kd = koszt długu (oprocentowanie), T = stawka podatku dochodowego. Przykład: E=600M, D=400M, Ke=12%, Kd=6%, T=19%. WACC = (600/1000)*12% + (400/1000)*6%*(1-0.19) = 7.2% + 1.944% = 9.14%.",
  },
  {
    question: "Co to jest CAPM i jak obliczyć koszt kapitału własnego?",
    answer:
      "CAPM (Capital Asset Pricing Model) oblicza koszt kapitału własnego: Ke = Rf + β*(Rm-Rf). Rf = stopa wolna od ryzyka (rentowność obligacji 10-letnich, np. 5.5% dla Polski 2024). β (beta) = miara ryzyka systematycznego spółki względem rynku (β=1 = ruch jak rynek, β>1 = bardziej ryzykowna). (Rm-Rf) = premia za ryzyko rynkowe (equity risk premium) — historycznie 5-6% dla dojrzałych rynków. Przykład: Ke = 5.5% + 1.2 * 5.5% = 5.5% + 6.6% = 12.1%.",
  },
  {
    question: "Jaki wpływ ma WACC na wycenę DCF?",
    answer:
      "WACC jest wykładniczo wrażliwy — mała zmiana drastycznie zmienia wycenę. Wzrost WACC z 8% do 10% może obniżyć wycenę o 20-30%. Wyższy WACC = niższa wartość bieżąca przyszłych cash flows = niższa wycena. Firmy o wyższym ryzyku (startupy, cykliczne) mają wyższy WACC (15-40%+). Firmy stabilne (utilities, FMCG) mają niższy WACC (6-9%). Dlatego analiza sensytywności WACC jest kluczowym elementem każdego modelu DCF.",
  },
  {
    question: "Czym jest hurdle rate i jak różni się od WACC?",
    answer:
      "WACC to minimalna wymagana stopa zwrotu z perspektywy wszystkich dostawców kapitału. Hurdle rate (minimalna stopa zwrotu) to wewnętrzna bariera opłacalności projektów inwestycyjnych — często WACC + premia za ryzyko projektu. Projekt akceptowany gdy IRR > Hurdle Rate lub NPV(WACC) > 0. Firmy często używają hurdle rate wyższego niż WACC: dla projektów ekspansji +2%, dla nowych rynków +5%, dla akwizycji +3%. WACC na poziomie firmy, hurdle rate na poziomie projektu.",
  },
];

const waccComponents = [
  {
    komponent: "Ke — Koszt Kapitału Własnego",
    formuła: "Ke = Rf + β × (Rm - Rf)",
    opis: "Stopa zwrotu wymagana przez akcjonariuszy. Obliczana przez CAPM.",
    składniki: [
      { nazwa: "Rf (Risk-Free Rate)", opis: "Stopa wolna od ryzyka — rentowność 10-letnich obligacji skarbowych. PL: ~5.5% (2024)" },
      { nazwa: "β (Beta)", opis: "Ryzyko systematyczne: β=1 (ruch z rynkiem), β>1 (bardziej zmienne), β<1 (stabilniejsze niż rynek)" },
      { nazwa: "ERP (Equity Risk Premium)", opis: "Premia za ryzyko inwestycji w akcje vs obligacje. Rm-Rf = historycznie 5-6% dla rynków rozwiniętych" },
    ],
    kolor: "bg-blue-50 border-blue-200",
  },
  {
    komponent: "Kd — Koszt Długu",
    formuła: "Kd (after-tax) = Kd × (1 - T)",
    opis: "Efektywny koszt długu po tarczy podatkowej. Odsetki są kosztem uzyskania przychodu.",
    składniki: [
      { nazwa: "Kd (Koszt brutto)", opis: "Oprocentowanie kredytów, obligacji korporacyjnych. Benchmark: WIBOR + marża kredytowa" },
      { nazwa: "T (Stawka podatkowa)", opis: "Podatek CIT (19% w Polsce). Tarcza podatkowa: dług jest tańszy bo odsetki obniżają podatek" },
      { nazwa: "Credit Rating", opis: "Rating kredytowy determinuje marżę ponad stopę referencyjną — im lepszy rating, tym tańszy dług" },
    ],
    kolor: "bg-green-50 border-green-200",
  },
];

const betaByIndustry = [
  { branża: "Utilities (energia, woda)", beta: "0.3 – 0.6", ryzyko: "Bardzo niskie", waccPrzykład: "6-8%" },
  { branża: "FMCG / Consumer Staples", beta: "0.5 – 0.8", ryzyko: "Niskie", waccPrzykład: "7-9%" },
  { branża: "Healthcare / Farmacja", beta: "0.7 – 1.0", ryzyko: "Niskie-Średnie", waccPrzykład: "8-11%" },
  { branża: "Industrials / Produkcja", beta: "0.9 – 1.2", ryzyko: "Średnie", waccPrzykład: "9-12%" },
  { branża: "Technologia (duże spółki)", beta: "1.0 – 1.4", ryzyko: "Średnie-Wysokie", waccPrzykład: "10-14%" },
  { branża: "E-commerce / SaaS", beta: "1.2 – 1.8", ryzyko: "Wysokie", waccPrzykład: "12-18%" },
  { branża: "Biotechnology", beta: "1.5 – 2.5", ryzyko: "Bardzo Wysokie", waccPrzykład: "15-25%" },
  { branża: "Early-stage Startup", beta: "N/A", ryzyko: "Ekstremalne", waccPrzykład: "20-40%+" },
];

const capitalStructure = [
  { struktura: "Brak długu (100% equity)", ke: "12%", kd: "N/A", wacc: "12.0%", uwaga: "Drogie finansowanie. Brak tarczy podatkowej." },
  { struktura: "20% długu / 80% equity", ke: "12%", kd: "6%", wacc: "10.6%", uwaga: "Konserwatywna struktura. Niska dźwignia." },
  { struktura: "40% długu / 60% equity", ke: "12%", kd: "6%", wacc: "9.1%", uwaga: "Optymalna dla wielu branż. Balans ryzyka." },
  { struktura: "60% długu / 40% equity", ke: "14%", kd: "8%", wacc: "9.5%", uwaga: "Wyższe ryzyko podnosi Ke. Dług drożeje." },
  { struktura: "80% długu / 20% equity", ke: "18%", kd: "12%", wacc: "11.4%", uwaga: "Zbyt wysoka dźwignia. Ryzyko bankructwa." },
];

export default function BlogWaccCoTo() {
  return (
    <Layout>
      <SEOHead
        title="WACC — co to jest? Średni Ważony Koszt Kapitału i jak go obliczyć"
        description="WACC (Weighted Average Cost of Capital) — definicja, formuła, CAPM, koszt długu, beta branżowe i wpływ na wycenę DCF. Kompletny przewodnik po WACC."
        canonicalUrl="https://fotz.pl/blog/wacc-sredni-wazony-koszt-kapitalu"
      />
      <ArticleSchema
        title="WACC — co to jest i jak obliczyć Średni Ważony Koszt Kapitału?"
        description="Kompletny przewodnik po WACC: formuła, komponenty (Ke, Kd), CAPM, beta i wpływ struktury kapitałowej."
        url="https://fotz.pl/blog/wacc-sredni-wazony-koszt-kapitalu"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "WACC", url: "https://fotz.pl/blog/wacc-sredni-wazony-koszt-kapitalu" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "WACC" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            WACC — co to jest i jak obliczyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            WACC (Średni Ważony Koszt Kapitału) to kluczowa stopa dyskontowa w wycenie DCF.
            Poznaj formułę, CAPM, koszt długu, beta i jak struktura kapitału wpływa na WACC.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest WACC?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>WACC</strong> (Weighted Average Cost of Capital) to minimalna stopa zwrotu
              wymagana przez wszystkich dostawców kapitału — akcjonariuszy i wierzycieli — za finansowanie firmy.
              Odzwierciedla koszt alternatywny kapitału przy danym ryzyku.
            </p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-center mb-6">
              <p className="text-slate-400 text-sm mb-2">Formuła WACC</p>
              <p className="text-green-400 text-lg">WACC = (E/V) × Ke + (D/V) × Kd × (1 - T)</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 text-xs text-slate-300">
                <div><span className="text-yellow-400">E</span> — Equity (wartość rynkowa)</div>
                <div><span className="text-yellow-400">D</span> — Debt (wartość długu)</div>
                <div><span className="text-yellow-400">Ke</span> — Koszt kapitału własnego</div>
                <div><span className="text-yellow-400">Kd</span> — Koszt długu</div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Komponenty */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Komponenty WACC</h2>
            <div className="space-y-6">
              {waccComponents.map((comp, i) => (
                <div key={i} className={`rounded-xl p-6 border ${comp.kolor}`}>
                  <h3 className="font-bold text-slate-900 text-xl mb-2">{comp.komponent}</h3>
                  <p className="font-mono text-blue-700 text-sm mb-3 bg-white rounded p-2 inline-block">{comp.formuła}</p>
                  <p className="text-slate-600 mb-4">{comp.opis}</p>
                  <div className="grid md:grid-cols-3 gap-3">
                    {comp.składniki.map((s, j) => (
                      <div key={j} className="bg-white rounded-lg p-4">
                        <h4 className="font-bold text-slate-800 text-sm mb-1">{s.nazwa}</h4>
                        <p className="text-slate-600 text-sm">{s.opis}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Beta branżowe */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Beta i WACC wg branży</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Branża</th>
                    <th className="p-3 text-left">Beta (β)</th>
                    <th className="p-3 text-left">Ryzyko</th>
                    <th className="p-3 text-left">Typowy WACC</th>
                  </tr>
                </thead>
                <tbody>
                  {betaByIndustry.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 text-slate-700 font-semibold">{row.branża}</td>
                      <td className="p-3 font-mono text-blue-700">{row.beta}</td>
                      <td className="p-3 text-sm">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${row.ryzyko.includes("Niskie") ? "bg-green-100 text-green-700" : row.ryzyko.includes("Ekstrem") ? "bg-red-100 text-red-700" : row.ryzyko.includes("Bardzo") ? "bg-orange-100 text-orange-700" : "bg-yellow-100 text-yellow-700"}`}>{row.ryzyko}</span>
                      </td>
                      <td className="p-3 font-bold text-slate-700">{row.waccPrzykład}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Struktura kapitału */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Wpływ struktury kapitału na WACC</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Struktura</th>
                    <th className="p-3 text-left">Ke</th>
                    <th className="p-3 text-left">Kd</th>
                    <th className="p-3 text-left">WACC</th>
                    <th className="p-3 text-left">Uwaga</th>
                  </tr>
                </thead>
                <tbody>
                  {capitalStructure.map((row, i) => (
                    <tr key={i} className={i === 2 ? "bg-emerald-50" : i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 text-slate-700 font-semibold text-sm">{row.struktura}</td>
                      <td className="p-3 text-blue-700 font-mono">{row.ke}</td>
                      <td className="p-3 text-green-700 font-mono">{row.kd}</td>
                      <td className="p-3 font-bold text-slate-900">{row.wacc}</td>
                      <td className="p-3 text-slate-500 text-sm">{row.uwaga}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">Wiersz zielony = przykładowa struktura optymalna dla spółki z branży produkcyjnej. Dane przykładowe przy Rf=5.5%, ERP=5.5%.</p>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — WACC</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-6 italic">
              Artykuł ma charakter edukacyjny. Nie stanowi porady inwestycyjnej ani finansowej.
            </p>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
