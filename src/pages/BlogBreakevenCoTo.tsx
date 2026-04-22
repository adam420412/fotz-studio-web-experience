import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest analiza break-even?",
    answer:
      "Analiza break-even (analiza progu rentowności) to metoda finansowa określająca punkt, w którym przychody ze sprzedaży dokładnie pokrywają wszystkie koszty — firma nie generuje zysku ani straty. Próg rentowności (break-even point, BEP) to minimalna ilość sprzedaży lub przychód potrzebny do pokrycia kosztów stałych i zmiennych. Powyżej BEP — firma zaczyna generować zysk, poniżej — ponosi straty. Analiza break-even jest fundamentem planowania finansowego, wyceny produktów i decyzji inwestycyjnych.",
  },
  {
    question: "Jak obliczyć próg rentowności (break-even point)?",
    answer:
      "Formuła BEP w jednostkach: BEP = Koszty Stałe / (Cena - Koszt Zmienny na Jednostkę) = Koszty Stałe / Marża Pokrycia. Formuła BEP w przychodach: BEP (PLN) = Koszty Stałe / Wskaźnik Marży Pokrycia, gdzie Wskaźnik Marży Pokrycia = (Cena - KZ)/Cena. Przykład: Koszty stałe = 100 000 PLN/miesiąc, Cena = 500 PLN, KZ = 300 PLN. BEP = 100 000 / (500-300) = 500 szt./miesiąc lub 100 000 / 0.4 = 250 000 PLN/miesiąc.",
  },
  {
    question: "Co to jest marża pokrycia (contribution margin)?",
    answer:
      "Marża pokrycia (Contribution Margin) = Przychód - Koszty Zmienne. Pokazuje ile z każdej sprzedanej jednostki pozostaje na pokrycie kosztów stałych i wygenerowanie zysku. Wskaźnik marży pokrycia (CM ratio) = Marża Pokrycia / Przychód * 100% — np. CM ratio 40% oznacza, że z każdej złotówki przychodu 40 groszy idzie na pokrycie stałych i zysk. Wyższa marża pokrycia = szybciej osiągamy BEP i więcej zysku po jego przekroczeniu.",
  },
  {
    question: "Czym różnią się koszty stałe od zmiennych?",
    answer:
      "Koszty stałe (Fixed Costs) nie zmieniają się wraz z wolumenem sprzedaży: czynsz, pensje pracowników stałych, amortyzacja, ubezpieczenie, licencje oprogramowania. Koszty zmienne (Variable Costs) rosną proporcjonalnie do wolumenu: surowce, materiały bezpośrednie, prowizje od sprzedaży, koszty pakowania. Koszty półstałe (Semi-variable): mają komponent stały + zmienny — np. wynagrodzenie + premia od sprzedaży, lub energia elektryczna (stały abonament + zużycie). Właściwa klasyfikacja kosztów jest kluczowa dla poprawnej analizy break-even.",
  },
  {
    question: "Jak zastosować break-even do decyzji biznesowych?",
    answer:
      "Analiza break-even wspiera kluczowe decyzje: Wycena — podniesienie ceny obniża BEP (szybszy zysk), obniżenie go podnosi. Make or buy — czy produkować samemu (wyższe stałe, niższe zmienne) czy outsourcować (niższe stałe, wyższe zmienne). Inwestycje — czy dodatkowe CapEx jest uzasadnione przez wzrost sprzedaży powyżej nowego BEP. Scenariusze — co się stanie z BEP gdy koszty materiałów wzrosną o 20%? Nowe produkty — czy nowy produkt osiągnie BEP przy realistycznym popycie.",
  },
];

const breakevenFormulas = [
  {
    nazwa: "BEP w jednostkach",
    formuła: "BEP (szt.) = Koszty Stałe / (Cena - Koszt Zmienny na szt.)",
    alternatywna: "BEP (szt.) = Koszty Stałe / Marża Pokrycia na szt.",
    zastosowanie: "Gdy sprzedajesz produkty fizyczne lub usługi w jednolitych jednostkach",
  },
  {
    nazwa: "BEP w przychodach",
    formuła: "BEP (PLN) = Koszty Stałe / CM Ratio",
    alternatywna: "gdzie CM Ratio = (Cena - KZ) / Cena",
    zastosowanie: "Gdy sprzedajesz mix produktów lub usług o różnych cenach",
  },
  {
    nazwa: "BEP z oczekiwanym zyskiem",
    formuła: "BEP (szt.) = (Koszty Stałe + Zysk docelowy) / Marża Pokrycia",
    alternatywna: "Ile sprzedać, żeby osiągnąć target zysku (np. 50 000 PLN netto)",
    zastosowanie: "Planowanie sprzedaży i budżetowanie z celem zysku",
  },
  {
    nazwa: "Margin of Safety",
    formuła: "MoS = (Aktualna sprzedaż - BEP) / Aktualna sprzedaż × 100%",
    alternatywna: "Informuje o ile % sprzedaż musi spaść, by wejść w stratę",
    zastosowanie: "Ocena ryzyka operacyjnego i odporności firmy na spadki sprzedaży",
  },
];

const breakEvenExample = {
  firma: "Firma produkcyjna — przykład obliczenia",
  dane: [
    { pozycja: "Cena sprzedaży / szt.", wartość: "500 PLN" },
    { pozycja: "Koszt materiałów / szt.", wartość: "180 PLN" },
    { pozycja: "Prowizja sprzedawcy / szt.", wartość: "20 PLN" },
    { pozycja: "Koszt zmienny RAZEM / szt.", wartość: "200 PLN" },
    { pozycja: "Marża pokrycia / szt.", wartość: "300 PLN" },
    { pozycja: "CM Ratio", wartość: "60%" },
  ],
  kosztyStałe: [
    { pozycja: "Wynajem hali", wartość: "25 000 PLN/mies." },
    { pozycja: "Pensje pracowników", wartość: "45 000 PLN/mies." },
    { pozycja: "Amortyzacja maszyn", wartość: "15 000 PLN/mies." },
    { pozycja: "Pozostałe stałe", wartość: "15 000 PLN/mies." },
    { pozycja: "RAZEM stałe", wartość: "100 000 PLN/mies." },
  ],
  wyniki: [
    { metryka: "BEP w jednostkach", wartość: "334 szt./mies." },
    { metryka: "BEP w przychodach", wartość: "167 000 PLN/mies." },
    { metryka: "Zysk przy 500 szt.", wartość: "50 000 PLN/mies." },
    { metryka: "Margin of Safety (800 szt.)", wartość: "58%" },
  ],
};

const leverageTypes = [
  {
    typ: "Operating Leverage (Dźwignia Operacyjna)",
    opis: "Miara wrażliwości zysku operacyjnego na zmiany sprzedaży. Wysoka dźwignia operacyjna = dużo kosztów stałych względem zmiennych.",
    formuła: "DOL = Marża Pokrycia / EBIT",
    interpretacja: "DOL=3: wzrost sprzedaży o 10% zwiększa EBIT o 30%. Ryzyko: przy spadku sprzedaży EBIT spada 3x szybciej.",
    kolor: "bg-blue-50",
  },
  {
    typ: "Financial Leverage (Dźwignia Finansowa)",
    opis: "Wpływ długu na zmienność zysku na akcję (EPS). Dług wzmacnia zarówno zyski jak i straty dla akcjonariuszy.",
    formuła: "DFL = EBIT / (EBIT - Odsetki)",
    interpretacja: "DFL=2: wzrost EBIT o 10% zwiększa EPS o 20%. Ryzyko: przy braku spłaty odsetek firma bankrutuje.",
    kolor: "bg-orange-50",
  },
  {
    typ: "Total (Combined) Leverage",
    opis: "Łączny efekt dźwigni operacyjnej i finansowej — wrażliwość EPS na zmiany sprzedaży.",
    formuła: "DTL = DOL × DFL",
    interpretacja: "DTL=6: wzrost sprzedaży o 10% zwiększa EPS o 60%. Wysokie ryzyko — firma z dużymi kosztami stałymi I zadłużona.",
    kolor: "bg-purple-50",
  },
];

export default function BlogBreakevenCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Break-even | Fotz Studio"
        description="Analiza break-even — definicja, formuły (BEP w szt. i PLN), marża pokrycia (CM), margin of safety i dźwignia operacyjna. Kompletny przewodnik z przykładami."
        canonical="https://fotz.pl/blog/break-even-prog-rentownosci-co-to"

        keywords="Break-even co to jest, Break-even definicja, czym jest Break-even, Break-even przykłady, jak działa Break-even, Break-even znaczenie, Break-even przewodnik"

        canonical="https://fotz.pl/blog/break-even-prog-rentownosci-co-to"
      />
      <ArticleSchema
        title="Break-even — co to jest i jak obliczyć próg rentowności?"
        description="Kompletny przewodnik po break-even: formuły BEP, marża pokrycia, margin of safety i dźwignia operacyjna."
        url="https://fotz.pl/blog/break-even-prog-rentownosci-co-to"
        datePublished="2024-01-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Break-even — Próg rentowności", url: "https://fotz.pl/blog/break-even-prog-rentownosci-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "Break-even — Próg rentowności", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Break-even — co to jest i jak obliczyć próg rentowności?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Analiza break-even pokazuje ile musisz sprzedać, żeby wyjść na zero.
            Poznaj formuły BEP, marżę pokrycia, margin of safety i dźwignię operacyjną.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest break-even (próg rentowności)?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Break-even point (BEP)</strong> to punkt, w którym przychody ze sprzedaży dokładnie
              pokrywają wszystkie koszty — ani zysku, ani straty. Poniżej BEP — firma traci pieniądze.
              Powyżej BEP — każda sprzedana jednostka generuje zysk.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Analiza break-even jest jedną z najważniejszych technik w zarządzaniu finansami:
              pomaga ustalić cenę minimalną, ocenić opłacalność inwestycji, zaplanować zatrudnienie
              i zrozumieć ryzyko operacyjne firmy.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "BEP", opis: "Break-Even Point — punkt w którym Przychody = Koszty. Ani zysk ani strata." },
                { stat: "CM", opis: "Contribution Margin (marża pokrycia) = Cena - Koszt Zmienny. Kwota na pokrycie stałych i zysk." },
                { stat: "MoS", opis: "Margin of Safety — o ile % sprzedaż może spaść zanim firma wejdzie w stratę." },
              ].map((s, i) => (
                <div key={i} className="bg-teal-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-teal-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Formuły */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Formuły break-even</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {breakevenFormulas.map((f, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-3">{f.nazwa}</h3>
                  <div className="bg-slate-900 rounded p-3 mb-3">
                    <p className="text-green-400 font-mono text-sm">{f.formuła}</p>
                  </div>
                  <p className="text-slate-500 text-xs italic mb-3">{f.alternatywna}</p>
                  <div className="bg-teal-50 rounded p-3">
                    <p className="text-xs font-semibold text-teal-600 mb-1">Kiedy używać:</p>
                    <p className="text-teal-800 text-sm">{f.zastosowanie}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Przykład */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Przykład obliczenia break-even</h2>
            <p className="text-lg text-slate-600 mb-6">{breakEvenExample.firma}</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h3 className="font-bold text-blue-700 mb-3">Dane cenowe</h3>
                {breakEvenExample.dane.map((d, i) => (
                  <div key={i} className={`flex justify-between text-sm py-1 ${i === breakEvenExample.dane.length - 1 ? "font-bold border-t border-blue-300 pt-2 mt-1" : ""}`}>
                    <span className="text-slate-600">{d.pozycja}</span>
                    <span className="font-mono text-blue-700">{d.wartość}</span>
                  </div>
                ))}
              </div>
              <div className="bg-orange-50 rounded-xl p-5 border border-orange-200">
                <h3 className="font-bold text-orange-700 mb-3">Koszty stałe</h3>
                {breakEvenExample.kosztyStałe.map((k, i) => (
                  <div key={i} className={`flex justify-between text-sm py-1 ${i === breakEvenExample.kosztyStałe.length - 1 ? "font-bold border-t border-orange-300 pt-2 mt-1" : ""}`}>
                    <span className="text-slate-600">{k.pozycja}</span>
                    <span className="font-mono text-orange-700">{k.wartość}</span>
                  </div>
                ))}
              </div>
              <div className="bg-teal-50 rounded-xl p-5 border border-teal-200">
                <h3 className="font-bold text-teal-700 mb-3">Wyniki BEP</h3>
                {breakEvenExample.wyniki.map((w, i) => (
                  <div key={i} className="flex justify-between text-sm py-2 border-b border-teal-100">
                    <span className="text-slate-600">{w.metryka}</span>
                    <span className="font-bold font-mono text-teal-700">{w.wartość}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Dźwignia */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Dźwignia operacyjna i finansowa</h2>
            <div className="space-y-4">
              {leverageTypes.map((l, i) => (
                <div key={i} className={`rounded-xl p-6 border border-slate-200 ${l.kolor}`}>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{l.typ}</h3>
                  <p className="text-slate-600 mb-3">{l.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-slate-900 rounded p-3">
                      <p className="text-xs text-slate-400 mb-1">Formuła:</p>
                      <p className="text-green-400 font-mono text-sm">{l.formuła}</p>
                    </div>
                    <div className="bg-white rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Interpretacja:</p>
                      <p className="text-slate-700 text-sm">{l.interpretacja}</p>
                    </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Break-even i próg rentowności</h2>
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

      <RelatedArticles currentArticleId="break-even-prog-rentownosci-co-to" />
      <ContactSection />
    </Layout>
  );
}
