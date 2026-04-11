import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Burn Multiple?",
    answer: "Burn Multiple to metryka efektywności kapitałowej startupów, pokazująca ile gotówki firma spala na wygenerowanie każdego dodatkowego dolara (lub PLN) nowego ARR. Formuła: Burn Multiple = Net Cash Burn / Net New ARR. Przykład: jeśli firma spala 500K PLN miesięcznie i generuje 200K PLN nowego ARR miesięcznie, to Burn Multiple = 500K / 200K = 2.5x. Im niższe Burn Multiple, tym bardziej kapitalnie efektywny wzrost. Termin spopularyzowany przez David Sacks (Craft Ventures) jako odpowiedź na kryzys 2022 gdy inwestorzy zaczęli pytać o efektywność, nie tylko wzrost.",
  },
  {
    question: "Jaki Burn Multiple jest dobry?",
    answer: "Benchmarki Burn Multiple: Poniżej 1x — wyjątkowy. Firma generuje więcej nowego ARR niż spala gotówki — bardzo rzadkie na wczesnym etapie. 1x–1.5x — świetny. Firma efektywnie zamienia gotówkę w przychód. 1.5x–2x — dobry. Akceptowalny dla większości VCs, szczególnie na wczesnym etapie. 2x–3x — ok. Obszar do poprawy, szczególnie gdy firma wychodzi z seed/Series A. Powyżej 3x — wysoki. Sygnał do rewizji kosztów lub modelu go-to-market. Powyżej 5x — alarmujący. Firma pali dużo gotówki przy małym wzroście ARR. Burn Multiple deterioruje się w kryzysach — co działało przy niskim koszcie kapitału, może być nie do obrony przy 20% stopach procentowych.",
  },
  {
    question: "Jak obliczać Burn Multiple?",
    answer: "Formuła Burn Multiple: Net Cash Burn / Net New ARR. Gdzie Net Cash Burn = gotówka na początku okresu - gotówka na końcu okresu (cash outflow minus cash inflow bez nowych rund). Net New ARR = nowy ARR z nowych klientów + Expansion ARR - Churned ARR. Przykład: firma zaczyna kwartał z 2M PLN cash, kończy z 1M PLN. W tym samym kwartale zdobywa 600K PLN nowego ARR i churns 100K PLN = Net New ARR 500K PLN. Burn Multiple = 1M PLN / 500K PLN = 2x. Obliczaj na bazie kwartalnej, nie miesięcznej — eliminuje sezonowość.",
  },
  {
    question: "Czym Burn Multiple różni się od Runway?",
    answer: "Runway (pas startowy) to czas do wyczerpania gotówki przy obecnym tempie spalania, bez nowej rundy. Formuła: Cash / Monthly Burn. Runway mówi ile czasu zostało — ile miesięcy lub kwartałów. Burn Multiple mówi jak efektywnie wydajesz na wzrost — czy gotówka zamieniana jest w trwały przychód. Dobre Runway (np. 18 miesięcy) ale złe Burn Multiple (np. 5x) oznacza, że firma ma czas, ale wydaje go nieefektywnie. Złe Runway (6 miesięcy) ale dobre Burn Multiple (1.5x) oznacza presję czasową przy efektywnym modelu. Inwestorzy i CFOs patrzą na oba wskaźniki jednocześnie.",
  },
  {
    question: "Jak poprawić Burn Multiple?",
    answer: "Strategie poprawy Burn Multiple: Zwiększ Net New ARR — lepsza kwalifikacja leadów, wyższy win rate, ekspansja istniejących klientów. Zmniejsz churn — wyższy NRR bezpośrednio poprawia Net New ARR. Zmniejsz net burn — redukcja zbędnych kosztów, renegocjacja kontraktów, opóźnienie hiringu. Poprawa produktywności sprzedaży — lepszy AE, wyższa quota attainment, szybszy ramp. Przejście na model self-serve / PLG — niższy CAC zmniejsza burn. Zwiększ ACV — mniej deali, więcej ARR per deal. Nie optymalizuj Burn Multiple kosztem wzrostu — firma z 0.5x Burn Multiple ale 10% wzrostem ARR jest gorzej oceniana niż 2x Burn Multiple z 100% wzrostem ARR.",
  },
];

const burnMultipleBenchmarks = [
  { poziom: "Poniżej 1x", ocena: "Wyjątkowy", kolor: "green", opis: "Firma generuje więcej ARR niż spala — niemal self-funding growth. Rzadkie na wczesnym etapie." },
  { poziom: "1x – 1.5x", ocena: "Świetny", kolor: "green", opis: "Bardzo efektywne zamienanie gotówki w przychód. VCs bardzo dobrze to oceniają przy skalowaniu." },
  { poziom: "1.5x – 2x", ocena: "Dobry", kolor: "blue", opis: "Akceptowalny dla większości inwestorów. OK dla firm na wczesnym etapie budujących GTM." },
  { poziom: "2x – 3x", ocena: "Ok — do poprawy", kolor: "yellow", opis: "Obszar do optymalizacji. VCs będą pytać o plan poprawy, szczególnie od Series B." },
  { poziom: "3x – 5x", ocena: "Wysoki", kolor: "orange", opis: "Sygnał problemów z efektywnością. Firma spala dużo gotówki przy umiarkowanym wzroście ARR." },
  { poziom: "Powyżej 5x", ocena: "Alarmujący", kolor: "red", opis: "Czerwony flag dla inwestorów. Firma może nie przeżyć bez natychmiastowej restrukturyzacji kosztów." },
];

const burnMultipleDrivers = [
  { czynnik: "Wysoki CAC", wpływ: "Negatywny", wyjaśnienie: "Im więcej kosztuje pozyskanie klienta, tym więcej gotówki palone na każdy PLN nowego ARR" },
  { czynnik: "Długi ramp handlowców", wpływ: "Negatywny", wyjaśnienie: "AE który nie przynosi ARR przez 9 miesięcy pali gotówkę bez efektu" },
  { czynnik: "Wysoki churn", wpływ: "Negatywny", wyjaśnienie: "Churned ARR zmniejsza Net New ARR — trzeba pozyskiwać więcej by rosnąć" },
  { czynnik: "Niskie ACV", wpływ: "Negatywny", wyjaśnienie: "Niska wartość kontraktu wymaga wielu dealów — wysoki koszt sprzedaży względem ARR" },
  { czynnik: "Wysoki NRR", wpływ: "Pozytywny", wyjaśnienie: "Expansion revenue poprawia Net New ARR bez dodatkowych kosztów akwizycji" },
  { czynnik: "PLG / Self-serve", wpływ: "Pozytywny", wyjaśnienie: "Niższy CAC przez organiczny growth — użytkownicy konwertują bez angażowania AE" },
];

export default function BlogBurnMultipleCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Burn Multiple — co to jest i jak obliczać? | Fotz.pl"
        description="Burn Multiple w SaaS i startupach — formuła, benchmarki, różnica vs Runway i jak poprawić efektywność kapitałową. Kompletny przewodnik dla founderów i CFO."
        canonicalUrl="https://fotz.pl/blog/burn-multiple-efektywnosc-kapitalowa-saas"
      />
      <ArticleSchema
        title="Burn Multiple — co to jest i jak obliczać?"
        description="Kompletny przewodnik po Burn Multiple: formuła, benchmarki, czynniki wpływające i jak poprawić efektywność."
        url="https://fotz.pl/blog/burn-multiple-efektywnosc-kapitalowa-saas"
        datePublished="2024-02-24"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Burn Multiple", url: "https://fotz.pl/blog/burn-multiple-efektywnosc-kapitalowa-saas" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Burn Multiple", href: "/blog/burn-multiple-efektywnosc-kapitalowa-saas" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SaaS Metryki
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Burn Multiple
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Po erze "grow at all costs" inwestorzy zaczęli pytać: jak efektywnie firma zamienia
              gotówkę w przychód? Burn Multiple to odpowiedź — metryka, która oddziela
              efektywnych growers od kalorycznych spalaczy kapitału.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formuła", value: "Burn / New ARR" },
                { label: "Dobry wynik", value: "Poniżej 2x" },
                { label: "Wyjątkowy wynik", value: "Poniżej 1x" },
                { label: "Czynników wpływu", value: "6" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki Burn Multiple</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Burn Multiple jest relatywny do etapu firmy — wyjątkowy wynik dla Series B
              jest inny niż dla Seed. Ale trend jest zawsze ten sam: niższe jest lepsze.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {burnMultipleBenchmarks.map((b) => (
              <FadeInView key={b.poziom}>
                <div className={`rounded-xl border p-5 ${
                  b.kolor === "green" ? "border-green-200 bg-green-50" :
                  b.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  b.kolor === "yellow" ? "border-yellow-200 bg-yellow-50" :
                  b.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 text-center w-32">
                      <div className={`font-bold text-lg ${
                        b.kolor === "green" ? "text-green-700" :
                        b.kolor === "blue" ? "text-blue-700" :
                        b.kolor === "yellow" ? "text-yellow-700" :
                        b.kolor === "orange" ? "text-orange-700" :
                        "text-red-700"
                      }`}>{b.poziom}</div>
                      <div className={`text-sm font-medium ${
                        b.kolor === "green" ? "text-green-600" :
                        b.kolor === "blue" ? "text-blue-600" :
                        b.kolor === "yellow" ? "text-yellow-600" :
                        b.kolor === "orange" ? "text-orange-600" :
                        "text-red-600"
                      }`}>{b.ocena}</div>
                    </div>
                    <p className="text-sm text-gray-700">{b.opis}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Czynniki wpływające */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Co wpływa na Burn Multiple?</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Burn Multiple to wypadkowa wielu czynników operacyjnych. Zrozumienie dźwigni
              pozwala celowo poprawiać efektywność bez cięcia wzrostu.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {burnMultipleDrivers.map((d, i) => (
              <FadeInView key={d.czynnik}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4 items-center">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold flex-shrink-0 ${
                      d.wpływ === "Pozytywny" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}>
                      {d.wpływ}
                    </span>
                    <div>
                      <span className="font-bold text-gray-900 mr-2">{d.czynnik}:</span>
                      <span className="text-sm text-gray-700">{d.wyjaśnienie}</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
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
