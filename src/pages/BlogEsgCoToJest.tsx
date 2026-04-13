import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest ESG?",
    answer: "ESG (Environmental, Social, Governance) to zestaw kryteriów niefinansowych używanych do oceny praktyk i ryzyk firmy w trzech obszarach: Environmental (środowiskowych), Social (społecznych) i Governance (zarządczych). ESG jest stosowane przez inwestorów, regulatorów, klientów i partnerów biznesowych do oceny zrównoważoności i etyczności działania firmy. ESG stało się kluczowe po 2015 roku (Porozumienie Paryskie, SDGs ONZ) i gwałtownie zyskało na znaczeniu po 2020 roku — szczególnie dla firm publicznych i ubiegających się o finansowanie instytucjonalne.",
  },
  {
    question: "Co zawiera każdy z trzech filarów ESG?",
    answer: "Environmental (E): emisje CO2 i ślad węglowy, zużycie energii i wody, gospodarka odpadami, różnorodność biologiczna, polityka klimatyczna. Social (S): warunki pracy i prawa pracownicze, bezpieczeństwo i higiena pracy, różnorodność i inkluzywność (D&I), zaangażowanie społeczności lokalnej, prawa człowieka w łańcuchu dostaw, prywatność danych klientów. Governance (G): struktura zarządu i niezależność, wynagrodzenia kadry zarządzającej, transparentność i raportowanie, zarządzanie ryzykiem, walka z korupcją, prawa akcjonariuszy.",
  },
  {
    question: "Dlaczego ESG jest ważne dla biznesu?",
    answer: "Znaczenie ESG dla firm: Dostęp do kapitału — fundusze ESG zarządzają bilionami dolarów. Firmy z dobrym ESG mają niższy koszt długu (kredyty ESG-linked). Regulacje — CSRD (Corporate Sustainability Reporting Directive) od 2024 wymaga raportowania ESG od dużych firm UE. Klienci — 75% konsumentów bierze pod uwagę praktyki środowiskowe przy zakupie. Pracownicy — pokolenie Z wybiera pracodawców z silnymi wartościami ESG. Reputacja i risk management — skandale ESG (Wirecard, Volkswagen dieselgate) kosztują miliardy. Partnerzy B2B — korporacje wymagają ESG compliance od swoich dostawców (supply chain due diligence).",
  },
  {
    question: "Jak firma raportuje ESG?",
    answer: "Raportowanie ESG: Standardy raportowania: GRI (Global Reporting Initiative) — najbardziej powszechny, szczególnie dla E i S. SASB (Sustainability Accounting Standards Board) — focusuje na finansowym impact ESG per branża. TCFD (Task Force on Climate-related Financial Disclosures) — specjalizuje się w ryzykach klimatycznych. CSRD (UE) — dyrektywa wymagająca raportowania przez duże firmy UE od 2024. Raport ESG / Raport Zrównoważonego Rozwoju — roczny dokument z danymi ilościowymi (KPI) i jakościowymi (polityki, zobowiązania). Coraz częściej firmy poddają raporty zewnętrznemu audytowi (assurance) dla zwiększenia wiarygodności.",
  },
  {
    question: "Jak małe i średnie firmy podchodzą do ESG?",
    answer: "ESG dla MŚP: MŚP nie muszą formalnie raportować ESG (choć CSRD może objąć i je od 2026-2028), ale coraz częściej są pytane o ESG przez dużych klientów i banki. Praktyczne kroki: Zmierz ślad węglowy organizacji (scope 1 i 2 emissions jako minimum). Stwórz politykę różnorodności i kodeks postępowania. Wprowadź raportowanie o workplace safety i well-being. Przygotuj podstawowe dane o zużyciu energii, odpadów i wody. Rozważ certyfikaty: B Corp, ISO 14001, SA8000. ESG dla MŚP to competitive advantage, nie tylko compliance — szczególnie przy przetargach publicznych i partnerstwach z korporacjami.",
  },
];

const esgPillars = [
  {
    litera: "E",
    filar: "Environmental",
    kolor: "green",
    obszary: [
      "Emisje gazów cieplarnianych (scope 1, 2, 3)",
      "Efektywność energetyczna i OZE",
      "Zużycie i ochrona zasobów wodnych",
      "Gospodarka odpadami i circular economy",
      "Różnorodność biologiczna i land use",
      "Adaptacja i resilience klimatyczna",
    ],
    metryki: ["tCO2e emisji", "% energii z OZE", "Zużycie wody (m3)", "% recycled waste"],
  },
  {
    litera: "S",
    filar: "Social",
    kolor: "blue",
    obszary: [
      "Bezpieczeństwo i higiena pracy (BHP)",
      "Różnorodność, równość, inkluzywność (D&I)",
      "Prawa pracownicze i warunki pracy",
      "Zaangażowanie społeczności lokalnej",
      "Prawa człowieka w łańcuchu dostaw",
      "Prywatność i bezpieczeństwo danych",
    ],
    metryki: ["Wskaźnik wypadkowości", "% kobiet na stanowiskach kierowniczych", "Rotacja pracowników", "Employee NPS"],
  },
  {
    litera: "G",
    filar: "Governance",
    kolor: "purple",
    obszary: [
      "Niezależność i skład rady nadzorczej",
      "Wynagrodzenia powiązane z ESG KPIs",
      "Transparentność i raportowanie",
      "Zarządzanie ryzykiem i compliance",
      "Walka z korupcją i anty-bribery",
      "Prawa akcjonariuszy mniejszościowych",
    ],
    metryki: ["% niezależnych members rady", "% kobiet w radzie", "Skala audytów antykorupcyjnych", "Executive pay ratio"],
  },
];

const esgRatings = [
  { agencja: "MSCI ESG Ratings", skala: "AAA do CCC (7 poziomów)", fokus: "Risk management i peer comparison", użytkownicy: "Inwestorzy instytucjonalni, asset managers" },
  { agencja: "Sustainalytics (Morningstar)", skala: "0-40+ (niższy = lepszy)", fokus: "Unmanaged ESG risk score", użytkownicy: "Fundusze inwestycyjne, banki" },
  { agencja: "S&P Global CSA", skala: "0-100", fokus: "Industry-specific criteria", użytkownicy: "Dow Jones Sustainability Index" },
  { agencja: "ISS ESG", skala: "Prime / Sub-prime", fokus: "Corporate governance i sustainability", użytkownicy: "Inwestorzy, regulatory reporting" },
];

export default function BlogEsgCoToJest() {
  return (
    <Layout>
      <SEOHead
        title="ESG — co to jest i jak wpływa na biznes? | Fotz.pl"
        description="ESG (Environmental, Social, Governance) — trzy filary, raportowanie, ratingi ESG i znaczenie dla firm. Kompletny przewodnik po strategii zrównoważonego rozwoju."
        canonicalUrl="https://fotz.pl/blog/esg-co-to-jest-environmental-social-governance"

        keywords="ESG co to jest, ESG definicja, czym jest ESG, ESG przykłady, jak działa ESG, ESG znaczenie, ESG przewodnik"

        canonical="https://fotz.pl/blog/esg-co-to-jest-environmental-social-governance"
      />
      <ArticleSchema
        title="ESG — co to jest i jak wpływa na biznes?"
        description="Kompletny przewodnik po ESG: trzy filary, raportowanie, ratingi i znaczenie dla firm i inwestorów."
        url="https://fotz.pl/blog/esg-co-to-jest-environmental-social-governance"
        datePublished="2024-02-26"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ESG", url: "https://fotz.pl/blog/esg-co-to-jest-environmental-social-governance" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "ESG", href: "/blog/esg-co-to-jest-environmental-social-governance" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Strategia Biznesowa
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ESG — Environmental, Social, Governance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              ESG przestało być tylko modą — stało się wymaganiem regulacyjnym, oczekiwaniem
              inwestorów i kryterium w B2B procurement. Firmy które nie rozumieją ESG tracą
              dostęp do kapitału, klientów i talentów.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { litera: "E", opis: "Environmental — środowisko i klimat" },
                { litera: "S", opis: "Social — ludzie i społeczeństwo" },
                { litera: "G", opis: "Governance — zarządzanie i transparentność" },
              ].map((p) => (
                <div key={p.litera} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl font-black text-emerald-400">{p.litera}</div>
                  <div className="text-xs text-gray-300 mt-1">{p.opis}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filary ESG */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trzy filary ESG — obszary i metryki</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy filar ESG obejmuje specyficzne obszary działania i metryki raportowania.
              Dojrzałe organizacje mają cele i KPIs dla każdego filaru.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {esgPillars.map((p) => (
              <FadeInView key={p.filar}>
                <div className={`rounded-xl p-6 border-2 ${
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className={`text-4xl font-black mb-2 ${
                    p.kolor === "green" ? "text-green-600" :
                    p.kolor === "blue" ? "text-blue-600" :
                    "text-purple-600"
                  }`}>
                    {p.litera}
                  </div>
                  <h3 className={`font-bold text-lg mb-4 ${
                    p.kolor === "green" ? "text-green-800" :
                    p.kolor === "blue" ? "text-blue-800" :
                    "text-purple-800"
                  }`}>
                    {p.filar}
                  </h3>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Obszary</div>
                    <ul className="space-y-1">
                      {p.obszary.map((o) => (
                        <li key={o} className="flex gap-1 text-xs text-gray-700">
                          <span className={`flex-shrink-0 ${
                            p.kolor === "green" ? "text-green-500" :
                            p.kolor === "blue" ? "text-blue-500" :
                            "text-purple-500"
                          }`}>•</span>
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Przykładowe KPI</div>
                    <div className="flex flex-wrap gap-1">
                      {p.metryki.map((m) => (
                        <span key={m} className={`text-xs px-2 py-1 rounded ${
                          p.kolor === "green" ? "bg-green-200 text-green-800" :
                          p.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                          "bg-purple-200 text-purple-800"
                        }`}>
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Agencje ratingowe */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Główne agencje ratingowe ESG</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Różne agencje używają różnych metodologii i skal — firma może mieć wysoki rating
              w jednej agencji i niższy w innej. Ważne jest rozumienie co mierzy każda.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {esgRatings.map((r, i) => (
              <FadeInView key={r.agencja}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-emerald-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{r.agencja}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Skala</div>
                          <p className="text-sm text-gray-700">{r.skala}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Fokus</div>
                          <p className="text-sm text-gray-700">{r.fokus}</p>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Używają</div>
                          <p className="text-sm text-gray-700">{r.użytkownicy}</p>
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
