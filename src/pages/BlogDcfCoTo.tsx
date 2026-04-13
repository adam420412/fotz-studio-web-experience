import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest DCF (Discounted Cash Flow)?",
    answer:
      "DCF (Discounted Cash Flow — zdyskontowane przepływy pieniężne) to metoda wyceny aktywów, firm lub projektów inwestycyjnych oparta na wartości bieżącej przyszłych przepływów gotówki. Fundamentalna zasada DCF: złotówka dziś jest warta więcej niż złotówka jutro (time value of money). DCF oblicza wartość bieżącą (PV) przyszłych cash flows przy użyciu stopy dyskontowej (discount rate), która odzwierciedla ryzyko i koszt kapitału. DCF jest podstawową metodą wyceny w bankowości inwestycyjnej, private equity i M&A.",
  },
  {
    question: "Jak obliczyć DCF?",
    answer:
      "Formuła DCF: Wartość = Σ(CF_t / (1+r)^t) + Terminal Value / (1+r)^n, gdzie CF_t = przepływ pieniężny w roku t, r = stopa dyskontowa (WACC), n = liczba lat projekcji. Kroki: 1) Prognozuj Free Cash Flow na 5-10 lat, 2) Oblicz Terminal Value (Gordon Growth: FCF*(1+g)/(r-g) lub Exit Multiple: EBITDA*EV/EBITDA), 3) Zdyskontuj FCF i TV stopą WACC, 4) Dodaj Cash i odejmij Debt, 5) Podziel przez liczbę akcji = wartość na akcję.",
  },
  {
    question: "Czym jest NPV (Net Present Value)?",
    answer:
      "NPV (Net Present Value — Wartość Bieżąca Netto) to suma zdyskontowanych przyszłych przepływów pieniężnych minus wartość inwestycji: NPV = Σ(CF_t/(1+r)^t) - Inwestycja_0. NPV = 0: projekt zwraca tyle ile kosztuje kapitał. NPV > 0: projekt tworzy wartość — realizuj. NPV < 0: projekt niszczy wartość — odrzuć. NPV jest lepsze niż prosty payback (uwzględnia time value) i lepsze niż IRR (bezwzględna miara, nie względna). W praktyce NPV jest preferowaną miarą inwestycyjną.",
  },
  {
    question: "Jaka jest różnica między DCF a innymi metodami wyceny?",
    answer:
      "Metody wyceny: DCF (Discounted Cash Flow) — intrinsic value oparta na fundamentach, nie wymaga danych rynkowych, ale wrażliwa na założenia (WACC, Terminal Value). Comparable Company Analysis (CCA) — wycena przez mnożniki rynkowe (EV/EBITDA, P/E) podobnych spółek — szybka, ale zależna od rynku. Precedent Transactions — mnożniki z poprzednich transakcji M&A — uwzględnia premię przejęcia. Asset-Based — wartość aktywów netto — stosowane dla holdingów, nieruchomości, likwidacja. Inwestorzy stosują zwykle 2-3 metody i triangulują wynik.",
  },
  {
    question: "Co to jest stopa dyskontowa w DCF?",
    answer:
      "Stopa dyskontowa (discount rate) w DCF dla firm to WACC (Weighted Average Cost of Capital — Średni Ważony Koszt Kapitału): WACC = E/(E+D) * Ke + D/(E+D) * Kd * (1-T), gdzie E = wartość kapitału własnego, D = wartość długu, Ke = koszt kapitału własnego (CAPM: Rf + β * (Rm-Rf)), Kd = koszt długu, T = stawka podatkowa. Wyższa stopa dyskontowa = niższa wycena. Startup: WACC 20-40%+. Duża stabilna firma: 8-12%. Różnica w WACC o 2% może zmienić wycenę o 20-30%.",
  },
];

const dcfFormula = [
  { krok: "1. Prognoza FCF", opis: "Free Cash Flow = EBIT*(1-T) + D&A - CapEx - ΔNWC. Prognozuj na 5-10 lat bazując na wzroście przychodów, marżach i potrzebach inwestycyjnych.", przykład: "Rok 1: FCF = 5M PLN, Rok 2: 6M, Rok 3: 7.5M..." },
  { krok: "2. Stopa dyskontowa (WACC)", opis: "Oblicz WACC dla spółki. Uwzględnia koszt kapitału własnego (CAPM) i koszt długu (po tarczy podatkowej).", przykład: "WACC = 60%*12% + 40%*5%*(1-19%) = 8.8%" },
  { krok: "3. Zdyskontuj FCF", opis: "PV(FCF_t) = FCF_t / (1+WACC)^t. Każdy przyszły przepływ gotówki dyskontowany do wartości bieżącej.", przykład: "PV(FCF_3) = 7.5M / (1.088)^3 = 5.8M PLN" },
  { krok: "4. Terminal Value", opis: "Wartość rezydualna po okresie projekcji. Gordon Growth Model: TV = FCF_n*(1+g) / (WACC-g), gdzie g = long-term growth rate (2-3%).", przykład: "TV = 10M*(1.025) / (0.088-0.025) = 163M PLN" },
  { krok: "5. Enterprise Value", opis: "EV = Σ PV(FCF) + PV(Terminal Value). Suma zdyskontowanych FCF plus zdyskontowana wartość rezydualna.", przykład: "EV = 28M + PV(163M) = 28M + 124M = 152M PLN" },
  { krok: "6. Equity Value", opis: "Equity Value = EV + Cash - Debt - Minority Interest. Podziel przez liczbę akcji = wartość akcji.", przykład: "Equity = 152M + 10M - 30M = 132M PLN / 10M akcji = 13.2 PLN/akcję" },
];

const sensitivityAnalysis = [
  { wacc: "7%", g_2: "210M", g_25: "245M", g_3: "295M" },
  { wacc: "8%", g_2: "175M", g_25: "200M", g_3: "235M" },
  { wacc: "9%", g_2: "148M", g_25: "168M", g_3: "194M" },
  { wacc: "10%", g_2: "127M", g_25: "142M", g_3: "162M" },
  { wacc: "11%", g_2: "110M", g_25: "122M", g_3: "138M" },
];

const dcfPitfalls = [
  { błąd: "Zbyt optymistyczne prognozy", opis: "Prognozowanie 30%+ wzrostu przez 10 lat — nierealne. Anchoring bias. Sprawdź historyczne tempa wzrostu branży.", fix: "Scenariusz bazowy, optymistyczny i pesymistyczny (40%/40%/20%)" },
  { błąd: "Terminal Value dominuje", opis: "TV często stanowi 60-80%+ całej wyceny — małe zmiany w g lub WACC dramatycznie zmieniają wynik.", fix: "Analiza sensytywności WACC vs g. Crosscheck z exit multiple." },
  { błąd: "Circular reference w WACC", opis: "WACC wymaga wartości rynkowej E i D, które zależą od wyceny... którą obliczamy przez WACC.", fix: "Iteracyjne obliczenie lub użycie aktualnych wartości rynkowych jako punkt startowy." },
  { błąd: "Ignorowanie ryzyka", opis: "Jedna stopa dyskontowa dla wszystkich projektów. Startup powinien mieć WACC 20%+, nie 8%.", fix: "Dostosuj WACC do ryzyka projektu. Risk-adjusted scenarios." },
  { błąd: "Pomyłka FCF vs Net Income", opis: "Dyskontowanie net income zamiast Free Cash Flow — ignoruje CapEx, D&A i zmiany Working Capital.", fix: "FCF = EBITDA*(1-T) + T*D&A - CapEx - ΔNWC" },
];

export default function BlogDcfCoTo() {
  return (
    <Layout>
      <SEOHead
        title="DCF — co to jest? Discounted Cash Flow, NPV i wycena spółek"
        description="DCF (Discounted Cash Flow) — definicja, formuła krok po kroku, NPV, stopa dyskontowa (WACC), analiza sensytywności i typowe błędy. Kompletny przewodnik po wycenie DCF."
        canonicalUrl="https://fotz.pl/blog/dcf-discounted-cash-flow-co-to"

        keywords="DCF co to jest, DCF definicja, czym jest DCF, DCF przykłady, jak działa DCF, DCF znaczenie, DCF przewodnik"
      />
      <ArticleSchema
        title="DCF (Discounted Cash Flow) — co to jest i jak obliczyć wycenę?"
        description="Kompletny przewodnik po DCF: formuła, NPV, WACC, Terminal Value i analiza sensytywności."
        url="https://fotz.pl/blog/dcf-discounted-cash-flow-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "DCF — Discounted Cash Flow", url: "https://fotz.pl/blog/dcf-discounted-cash-flow-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "DCF — Discounted Cash Flow" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            DCF — co to jest i jak obliczyć wycenę?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discounted Cash Flow to fundamentalna metoda wyceny firm i projektów inwestycyjnych.
            Poznaj formułę krok po kroku, NPV, WACC i analizę sensytywności.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest DCF?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>DCF (Discounted Cash Flow)</strong> to metoda wyceny oparta na fundamentalnej zasadzie
              finansów: złotówka dziś jest warta więcej niż złotówka jutro. Przyszłe przepływy pieniężne
              są "dyskontowane" do wartości bieżącej przy użyciu stopy dyskontowej odzwierciedlającej ryzyko.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              DCF jest podstawową metodą wyceny w bankowości inwestycyjnej, private equity, M&A i analizie
              projektów inwestycyjnych. Warren Buffett opisał DCF jako obliczanie wartości biznesu przez
              sumę wszystkich gotówek które wyprodukuje, zdyskontowanych odpowiednią stopą.
            </p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-center">
              <p className="text-slate-400 text-sm mb-2">Formuła DCF</p>
              <p className="text-green-400 text-xl">Value = Σ(FCF_t / (1+WACC)^t) + TV / (1+WACC)^n</p>
              <div className="grid grid-cols-3 gap-2 mt-4 text-xs text-slate-300">
                <div><span className="text-yellow-400">FCF_t</span> — Free Cash Flow w roku t</div>
                <div><span className="text-yellow-400">WACC</span> — Stopa dyskontowa</div>
                <div><span className="text-yellow-400">TV</span> — Terminal Value</div>
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kroki DCF */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Wycena DCF — krok po kroku</h2>
            <div className="space-y-4">
              {dcfFormula.map((step, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm flex gap-4">
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-1">{step.krok}</h3>
                    <p className="text-slate-600 text-sm mb-2">{step.opis}</p>
                    <div className="bg-emerald-50 rounded p-3">
                      <p className="text-emerald-800 text-sm font-mono">{step.przykład}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Sensitivity Analysis */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Analiza sensytywności DCF</h2>
            <p className="text-lg text-slate-700 mb-6">
              Enterprise Value (PLN) w zależności od WACC i stopy wzrostu w nieskończoności (g).
              Tabela pokazuje jak drastycznie zmieniają się wyniki przy małych zmianach założeń.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">WACC \ g</th>
                    <th className="p-3 text-center">g = 2.0%</th>
                    <th className="p-3 text-center">g = 2.5%</th>
                    <th className="p-3 text-center">g = 3.0%</th>
                  </tr>
                </thead>
                <tbody>
                  {sensitivityAnalysis.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-slate-700">{row.wacc}</td>
                      <td className="p-3 text-center text-slate-600">{row.g_2}</td>
                      <td className="p-3 text-center font-semibold text-emerald-700 bg-emerald-50">{row.g_25}</td>
                      <td className="p-3 text-center text-slate-600">{row.g_3}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-2">Dane przykładowe. Kolumna środkowa (g=2.5%) = scenariusz bazowy.</p>
          </div>
        </section>
      </FadeInView>

      {/* Typowe błędy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typowe błędy w modelach DCF</h2>
            <div className="space-y-4">
              {dcfPitfalls.map((p, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-red-200">
                  <h3 className="font-bold text-red-700 mb-2">{p.błąd}</h3>
                  <p className="text-slate-600 text-sm mb-3">{p.opis}</p>
                  <div className="bg-green-50 rounded p-3">
                    <p className="text-xs font-semibold text-green-600 mb-1">Jak unikać:</p>
                    <p className="text-green-800 text-sm">{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — DCF i wycena</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-400 mt-6 italic">
              Uwaga: Ten artykuł ma charakter edukacyjny. Nie jest poradą inwestycyjną.
              Przed podjęciem decyzji inwestycyjnych skonsultuj się z licencjonowanym doradcą finansowym.
            </p>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
