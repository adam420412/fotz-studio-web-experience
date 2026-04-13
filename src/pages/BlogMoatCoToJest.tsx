import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest moat (przewaga konkurencyjna) w biznesie?",
    answer: "Moat (rów obronny, economic moat) to trwała przewaga konkurencyjna, która chroni firmę przed konkurencją i pozwala utrzymać wysoką rentowność przez długi czas. Termin spopularyzowany przez Warrena Buffetta nawiązuje do rowu wodnego otaczającego zamek — im szerszy rów, tym trudniej konkurentom zaatakować. Firmy z silnym moatem mogą utrzymywać wysokie marże, wyceny i udziały rynkowe nawet gdy rynek przyciąga nowych graczy. Moat jest jednym z kluczowych kryteriów przy ocenie spółek przez inwestorów długoterminowych.",
  },
  {
    question: "Jakie są rodzaje moatów biznesowych?",
    answer: "5 głównych typów moatów: Network Effects (efekty sieciowe) — wartość produktu rośnie z liczbą użytkowników (Facebook, Uber, Airbnb, marketplace'y). Cost Advantages (przewaga kosztowa) — firma może produkować taniej niż konkurencja dzięki skali, lokalizacji lub procesowi (Walmart, TSMC). Switching Costs (koszty zmiany) — zmiana dostawcy jest droga lub trudna dla klienta (Salesforce, SAP, Adobe Creative Cloud). Intangible Assets (aktywa niematerialne) — patenty, marka, licencje regulacyjne, proprietary data (Coca-Cola, Pfizer). Efficient Scale — rynek jest za mały dla drugiego gracza opłacalnie (lokalne monopole naturalne, niszowe B2B).",
  },
  {
    question: "Jak zidentyfikować czy firma ma moat?",
    answer: "Sygnały silnego moatu: ROIC (Return on Invested Capital) konsekwentnie powyżej WACC przez 5-10 lat. Wysoka marża operacyjna utrzymywana mimo wzrostu konkurencji. Pricing power — firma może podnosić ceny bez utraty klientów. Niski churn rate (dla SaaS) lub wysoka customer retention (dla każdego biznesu). Klienci sami polecają produkt bez marketingu (wysokie NPS). Trudność w replikacji — co konkretnie utrudnia kopiowanie modelu przez konkurenta? Jeśli nie możesz odpowiedzieć jasno na to pytanie, moat jest słaby.",
  },
  {
    question: "Jak SaaS firmy budują moat?",
    answer: "Moat w SaaS: Network Effects — platformy gdzie użytkownicy tworzą wartość dla siebie (Slack, Figma). Switching Costs przez integracje — im głębiej SaaS wchodzi w procesy klienta, tym trudniej odejść (Salesforce CRM, HubSpot). Data moat — proprietary data z milionów transakcji, które trenuje lepszy AI/ML model niż konkurencja może zbudować (Gong, Clari). Product-led virality — użytkownik zaprasza kolega do współpracy w produkcie (Notion, Calendly). Ecosystem lock-in — marketplace aplikacji, partnerzy, certyfikacje wokół platformy (Salesforce AppExchange).",
  },
  {
    question: "Jak moat wpływa na wycenę firmy?",
    answer: "Moat i wycena: Firmy z silnym moatem są wyceniane wyżej, bo inwestorzy zakładają że przewaga jest trwała. Przykład: SaaS firma z 80% NRR (strong switching costs + expansion) jest wyceniana przy wyższym multiple niż firma z 100% revenue retention i 0% expansion. Firmy z network effects jak Airbnb, Uber dostały premię za potential monopoly power. Buffett szacuje moat oceniając pricing power — czy firma może podnosić ceny o inflację plus X% bez utraty klientów? Ocena moatu to jeden z pierwszych kroków w fundamentalnej analizie akcji lub private equity due diligence.",
  },
];

const moatTypes = [
  {
    typ: "Network Effects",
    opis: "Wartość produktu rośnie dla każdego użytkownika gdy przybywa nowych użytkowników",
    przykłady: ["Facebook / Instagram", "Uber / Airbnb (marketplace)", "LinkedIn", "Figma (multiplayer design)"],
    siła: "Bardzo wysoka",
    ryzyko: "Może się szybko rozpaść jeśli competitor osiągnie critical mass",
    kolor: "blue",
  },
  {
    typ: "Switching Costs",
    opis: "Zmiana dostawcy wiąże się z wysokim kosztem finansowym, operacyjnym lub czasowym",
    przykłady: ["Salesforce CRM", "SAP ERP", "Adobe Creative Cloud", "Workday HR"],
    siła: "Wysoka",
    ryzyko: "Utrudnia ekspansję na nowe segmenty — klienci są 'zamknięci'",
    kolor: "green",
  },
  {
    typ: "Cost Advantages",
    opis: "Firma produkuje taniej niż konkurencja dzięki skali, lokalizacji lub lepszemu procesowi",
    przykłady: ["Amazon logistics", "TSMC fabs", "Walmart supply chain", "Costco membership model"],
    siła: "Wysoka",
    ryzyko: "Może być podważona przez technologiczną zmianę lub nowego gracza z lepszym procesem",
    kolor: "purple",
  },
  {
    typ: "Intangible Assets",
    opis: "Patenty, marka, licencje regulacyjne, proprietary data dają unikalną pozycję",
    przykłady: ["Coca-Cola brand", "Pfizer patents", "Google Search data", "Visa/Mastercard network"],
    siła: "Zmienna (marka vs. patent vs. data)",
    ryzyko: "Patenty wygasają, marki blakną bez inwestycji",
    kolor: "orange",
  },
  {
    typ: "Efficient Scale",
    opis: "Rynek jest za mały, by pomieścić więcej niż jednego opłacalnego gracza",
    przykłady: ["Lokalne utilities", "Mosty i autostrady", "Niszowe B2B software", "Regionalne media"],
    siła: "Wysoka w niszy",
    ryzyko: "Niski growth ceiling — rynek nie rośnie wystarczająco",
    kolor: "teal",
  },
];

const moatAssessment = [
  { pytanie: "Czy firma może podnosić ceny bez utraty klientów?", tak: "Pricing power — silny moat", nie: "Brak pricing power — słaby moat" },
  { pytanie: "Czy koszt przejścia do konkurenta jest wysoki?", tak: "Switching costs — moat przez customer lock-in", nie: "Łatwa substitution — brak moatu" },
  { pytanie: "Czy dodanie kolejnego użytkownika zwiększa wartość dla innych?", tak: "Network effects — potencjalnie winner-takes-all", nie: "Brak network effects" },
  { pytanie: "Czy ROIC jest konsekwentnie powyżej 15% przez 5+ lat?", tak: "Dowód ekonomicznego moatu w danych historycznych", nie: "Moat jest słaby lub firma nieefektywna" },
  { pytanie: "Czy baza klientów rośnie organicznie przez referrals?", tak: "Virality / word-of-mouth = silny produkt-led moat", nie: "Wzrost wymaga ciągłych nakładów marketingowych" },
];

export default function BlogMoatCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="Moat (przewaga konkurencyjna) — co to jest w biznesie? | Fotz.pl"
        description="Economic moat — rodzaje przewagi konkurencyjnej (network effects, switching costs, cost advantage), jak zidentyfikować moat i wpływ na wycenę firmy."
        canonicalUrl="https://fotz.pl/blog/moat-przewaga-konkurencyjna-co-to-jest"

        keywords="Moat (przewaga konkurencyjna) co to jest, Moat (przewaga konkurencyjna) definicja, czym jest Moat (przewaga konkurencyjna), Moat (przewaga konkurencyjna) przykłady, jak działa Moat (przewaga konkurencyjna), Moat (przewaga konkurencyjna) znaczenie, Moat (przewaga konkurencyjna) przewodnik"

        canonical="https://fotz.pl/blog/moat-przewaga-konkurencyjna-co-to-jest"
      />
      <ArticleSchema
        title="Moat (przewaga konkurencyjna) — co to jest w biznesie?"
        description="Kompletny przewodnik po economic moat: typy moatów, jak ocenić i jak moat wpływa na wycenę firmy."
        url="https://fotz.pl/blog/moat-przewaga-konkurencyjna-co-to-jest"
        datePublished="2024-02-21"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Moat — przewaga konkurencyjna", url: "https://fotz.pl/blog/moat-przewaga-konkurencyjna-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-stone-900 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Moat", href: "/blog/moat-przewaga-konkurencyjna-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-stone-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Strategia Biznesowa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Moat — przewaga konkurencyjna
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Warren Buffett powiedział: 'W biznesie szukam zamków z rowem wodnym.'
              Firma z silnym moatem może utrzymywać wysokie marże i wyceny nawet przez
              dekady. Bez moatu każdy sukces jest tymczasowy.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typów moatu", value: "5" },
                { label: "Sygnałów moatu", value: "5" },
                { label: "Najsilniejszy moat", value: "Network Effects" },
                { label: "Kluczowy wskaźnik", value: "ROIC 15%+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-stone-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy moatów */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 typów economic moat</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ moatu ma inne mechanizmy działania, siłę ochronną i ryzyka.
              Najsilniejsze firmy często łączą kilka typów moatu jednocześnie.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {moatTypes.map((m, i) => (
              <FadeInView key={m.typ}>
                <div className={`rounded-xl border-2 p-6 ${
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  m.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      m.kolor === "blue" ? "bg-blue-600" :
                      m.kolor === "green" ? "bg-green-600" :
                      m.kolor === "purple" ? "bg-purple-600" :
                      m.kolor === "orange" ? "bg-orange-600" :
                      "bg-teal-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">{m.typ}</h3>
                      <p className="text-gray-600 text-sm mb-3">{m.opis}</p>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykłady</div>
                          <ul className="space-y-1">
                            {m.przykłady.map((p) => (
                              <li key={p} className="text-xs text-gray-700">{p}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Siła</div>
                          <p className="text-sm font-semibold text-gray-800">{m.siła}</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">Ryzyko</div>
                          <p className="text-sm text-gray-700">{m.ryzyko}</p>
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

      {/* Ocena moatu */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 pytań do oceny moatu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Te pytania pomagają szybko ocenić czy firma ma trwałą przewagę konkurencyjną —
              przydatne zarówno w analizie inwestycyjnej jak i własnej ocenie strategicznej.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {moatAssessment.map((q, i) => (
              <FadeInView key={q.pytanie}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-3">{q.pytanie}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-100">
                      <div className="text-xs font-bold text-green-700 uppercase mb-1">Jeśli TAK</div>
                      <p className="text-sm text-gray-700">{q.tak}</p>
                    </div>
                    <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                      <div className="text-xs font-bold text-red-700 uppercase mb-1">Jeśli NIE</div>
                      <p className="text-sm text-gray-700">{q.nie}</p>
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

      <RelatedArticles currentArticleId="moat-przewaga-konkurencyjna-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
