import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Expansion Revenue?",
    answer: "Expansion Revenue to przychód generowany z istniejących klientów przez upsell (sprzedaż droższego planu lub więcej licencji) lub cross-sell (sprzedaż dodatkowych produktów/modułów). Expansion Revenue jest motorem wzrostu NRR (Net Revenue Retention) powyżej 100% — czyli sytuacji gdy firma rośnie przychodowo nawet bez nowych klientów. Firmy SaaS z NRR 120%+ podwajają przychód z istniejącej bazy co 4-5 lat bez nowych klientów. Expansion Revenue ma zazwyczaj wyższy margin i niższy CAC niż pozyskiwanie nowych klientów (bo klient już Cię zna i ufa).",
  },
  {
    question: "Czym różni się Upsell od Cross-sell?",
    answer: "Upsell vs. Cross-sell: Upsell — sprzedaż droższego planu, więcej licencji/seats, wyższego tiers, większego wolumenu. Przykład: klient przechodzi z planu Professional do Enterprise, dodaje 50 userów do istniejącej licencji. Cross-sell — sprzedaż dodatkowych produktów lub modułów. Przykład: klient kupuje Salesforce CRM, doajerujesz Salesforce Marketing Cloud lub Service Cloud. W SaaS upsell jest łatwiejszy bo jest naturalną kontynuacją wzrostu klienta. Cross-sell wymaga więcej edukacji i nowych stakeholderów. NRR liczony łącznie jako: (Starting ARR + Expansion ARR - Churned ARR) / Starting ARR.",
  },
  {
    question: "Kiedy najlepiej proponować Upsell?",
    answer: "Moment upsell ma kluczowe znaczenie dla success rate. Dobre momenty na upsell: Klient osiągnął lub zbliża się do limitu planu (seats, volume, features). Klient odnosi widoczne sukcesy — wysokie usage, pozytywny ROI, pozytywny NPS. QBR — kwartalny business review to naturalne miejsce na rozmowę o wzroście. Klient próbuje obejść ograniczenia planu — to sygnał readiness do upgradu. Milestone klienta — nowe biuro, nowy market, nowy produkt (potrzebuje więcej). Złe momenty na upsell: Klient ma nierozwiązane problemy supportowe. Pierwsze 30-60 dni onboardingu — klient jeszcze nie widzi pełnej wartości. Moment gdy klient właśnie powiedział że ma cięcia budżetu.",
  },
  {
    question: "Jak Customer Success może generować Expansion Revenue?",
    answer: "CSM jako revenue generator: Tradycyjna rola CSM to reaktywne utrzymanie klientów. Nowoczesna rola CSM to proaktywne generowanie expansion. Jak CSM generuje Expansion: Usage reviews — regularnie pokazuj klientowi jak rośnie ich usage i gdzie zbliżają się do limitów. Executive Business Reviews — prezentuj ROI i natural opportunities do skalowania. Health Score — klienci z wysokim Health Score to najlepsi kandydaci na upsell. Playbooks — ustrukturyzowane scenariusze expansion dla każdego segmentu. Współpraca z AE — CSM kwalifikuje, AE closuje (lub CSM ma small deal authority). Wiele firm SaaS wprowadza quota na expansion dla CSM — zazwyczaj 20-40% ich wynagrodzenia variable zależy od expansion ARR z portfela.",
  },
  {
    question: "Jak mierzyć skuteczność Expansion Revenue?",
    answer: "Kluczowe metryki Expansion Revenue: NRR (Net Revenue Retention) — (Starting ARR + Expansion - Churn) / Starting ARR. Best in class: 130%+. Expansion ARR — bezwzględna kwota expansion w danym okresie. Expansion Rate — Expansion ARR / Starting ARR portfela. Upsell Win Rate — % szans upsell które zakończyły się sukcesem. Time to Upsell — średni czas od podpisania kontraktu do pierwszego upsell. Expansion per CSM — ile expansion ARR generuje każdy CSM (benchmarks: 1-2M PLN rocznie dla B2B SaaS). Logo Expansion Rate — % klientów którzy zexpandowali w danym roku (ideał: 40-60% bazy).",
  },
];

const expansionMotions = [
  {
    typ: "Upsell — więcej Seats",
    trigger: "Użycie powyżej 80% licencji lub nowi pracownicy w teamie",
    approach: "Pokaż klientowi adoption data i zaproponuj rozszerzenie przed tym zanim sami poproszą",
    arrincrease: "20-50% wzrost ACV",
    kolor: "blue",
  },
  {
    typ: "Upsell — wyższy Plan",
    trigger: "Klient regularnie potrzebuje features dostępnych tylko w wyższym planie",
    approach: "Demo features z wyższego planu podczas QBR. Pokaż ROI kalkulację upgrade'u",
    arrincrease: "30-100% wzrost ACV",
    kolor: "green",
  },
  {
    typ: "Cross-sell — dodatkowy Moduł",
    trigger: "Klient rozwiązuje problem który Twój dodatkowy moduł adresuje",
    approach: "Zidentyfikuj nowego stakeholdera (buyer dla modułu), zrób dedykowane demo",
    arrincrease: "50-200% wzrost ACV",
    kolor: "purple",
  },
  {
    typ: "Cross-sell — nowy Produkt",
    trigger: "Klient wchodzi na nowe rynki lub ma nową inicjatywę strategiczną",
    approach: "Executive QBR z VP/C-level. Pokaż vision całej platformy, nie tylko modułu",
    arrincrease: "100-300% wzrost ACV",
    kolor: "orange",
  },
];

const expansionPlaybook = [
  { krok: "Identyfikuj kandydatów do expansion", opis: "Co miesiąc przeglądaj portfel pod kątem: usage powyżej 80% limitu, rosnący headcount klienta, wysokie Health Score + NPS. To Twoja lista expansion candidates.", kolor: "blue" },
  { krok: "Zdefiniuj business case", opis: "Nie sprzedawaj features — sprzedawaj ROI. 'Upgrade pozwoli Ci zrealizować X co przełoży się na Y wartości' zamiast 'wyższy plan ma feature Z'.", kolor: "green" },
  { krok: "Zidentyfikuj właściwego buyer'a", opis: "Upsell seats? Twój CSM contact może wystarczyć. Cross-sell nowy moduł? Potrzebujesz nowego stakeholdera — budget owner dla nowego obszaru. Popros Championa o intro.", kolor: "purple" },
  { krok: "Zaproponuj w odpowiednim momencie", opis: "Najlepszy moment: po osiągnięciu milestone przez klienta, podczas QBR, przy zbliżaniu się do limitu planu. Zły moment: w trakcie problemu technicznego lub przy złych wynikach klienta.", kolor: "orange" },
  { krok: "Zamknij lub przekaż do AE", opis: "Mały upsell (seats, volume)? CSM może zamknąć samodzielnie. Duży upsell lub cross-sell nowego produktu? Przekaż do AE który closuje z pełnym sales procesem.", kolor: "red" },
];

export default function BlogExpansionRevenueCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Expansion Revenue — upsell i cross-sell w SaaS | Fotz.pl"
        description="Expansion Revenue w SaaS — upsell, cross-sell, NRR, rola Customer Success w generowaniu expansion i playbook. Kompletny przewodnik dla CS i sprzedaży."
        canonical="https://fotz.pl/blog/expansion-revenue-upsell-cross-sell-saas"

        keywords="Expansion Revenue co to jest, Expansion Revenue definicja, czym jest Expansion Revenue, Expansion Revenue startup, Expansion Revenue jak liczyć, Expansion Revenue wzór, Expansion Revenue przykłady"
      />
      <ArticleSchema
        title="Expansion Revenue — upsell i cross-sell w SaaS"
        description="Kompletny przewodnik po Expansion Revenue: upsell, cross-sell, NRR, timing i playbook dla Customer Success."
        url="https://fotz.pl/blog/expansion-revenue-upsell-cross-sell-saas"
        datePublished="2024-02-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Expansion Revenue", url: "https://fotz.pl/blog/expansion-revenue-upsell-cross-sell-saas" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Expansion Revenue", url: "/blog/expansion-revenue-upsell-cross-sell-saas" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SaaS Growth
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Expansion Revenue
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Firma z NRR 120% podwaja przychód z istniejącej bazy klientów bez pozyskania
              ani jednego nowego klienta. Expansion Revenue przez upsell i cross-sell to
              najbardziej efektywna dźwignia wzrostu w SaaS B2B.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "NRR best-in-class", value: "130%+" },
                { label: "Typy expansion", value: "4" },
                { label: "CAC vs nowi klienci", value: "3-5x niższy" },
                { label: "Etapów playbook", value: "5" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy expansion */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy Expansion Revenue</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Różne typy expansion wymagają różnych triggerów, podejścia i angażują różnych stakeholderów.
              Najlepsze firmy SaaS mają playbook dla każdego z nich.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {expansionMotions.map((e) => (
              <FadeInView key={e.typ}>
                <div className={`rounded-xl border-2 p-6 ${
                  e.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  e.kolor === "green" ? "border-green-200 bg-green-50" :
                  e.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className={`font-bold text-lg ${
                          e.kolor === "blue" ? "text-blue-800" :
                          e.kolor === "green" ? "text-green-800" :
                          e.kolor === "purple" ? "text-purple-800" :
                          "text-orange-800"
                        }`}>{e.typ}</h3>
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          e.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                          e.kolor === "green" ? "bg-green-200 text-green-800" :
                          e.kolor === "purple" ? "bg-purple-200 text-purple-800" :
                          "bg-orange-200 text-orange-800"
                        }`}>{e.arrincrease}</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Trigger</div>
                          <p className="text-sm text-gray-700">{e.trigger}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Podejście</div>
                          <p className="text-sm text-gray-700">{e.approach}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expansion Revenue Playbook — 5 kroków</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Expansion nie dzieje się przypadkowo — wymaga systematycznego procesu.
              CSM z ustrukturyzowanym playbook expansion generują 2-3x więcej expansion ARR
              niż ci działający reaktywnie.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {expansionPlaybook.map((k, i) => (
              <FadeInView key={k.krok}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      k.kolor === "blue" ? "bg-blue-600" :
                      k.kolor === "green" ? "bg-green-600" :
                      k.kolor === "purple" ? "bg-purple-600" :
                      k.kolor === "orange" ? "bg-orange-600" :
                      "bg-red-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{k.krok}</h3>
                      <p className="text-sm text-gray-700">{k.opis}</p>
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

      <RelatedArticles currentArticleId="expansion-revenue-upsell-cross-sell-saas" />
      <ContactSection />
    </Layout>
  );
}
