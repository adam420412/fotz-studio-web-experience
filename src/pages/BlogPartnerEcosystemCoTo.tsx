import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest partner ecosystem?",
    answer: "Partner ecosystem (ekosystem partnerski) to sieć zewnętrznych firm i osób które rozszerzają zasięg, możliwości lub wartość Twojego produktu. Partnerzy mogą generować leady, wdrażać Twój produkt u klientów, integrować ich rozwiązania z Twoim, albo świadczyć usługi komplementarne. Przykłady silnych ekosystemów partnerskich: Salesforce ma 10,000+ partnerów i AppExchange z ponad 7,000 aplikacjami. AWS Partner Network ma 100,000+ partnerów. HubSpot Solutions Partner Program generuje ponad 50% nowych klientów HubSpot. Ekosystem partnerski jest szczególnie ważny gdy firma osiąga skale i chce rosnąć bez proporcjonalnego wzrostu kosztów własnych (bezpośredniej sprzedaży i implementacji).",
  },
  {
    question: "Jakie są typy partnerów w ekosystemie?",
    answer: "Typy partnerów: Referral Partners (Afiliantki/Polecający) — polecają klientów w zamian za jednorazową prowizję lub recurring commission. Najmniej zaangażowani, łatwi do rekrutowania. Resellers/VARs (Value-Added Resellers) — kupują Twój produkt i odsprzedają go klientom, zazwyczaj z własną marżą i usługami. Mają bezpośrednią relację z klientem. System Integrators (SI) — wdrażają i integrują Twój produkt w złożonych środowiskach IT klientów enterprise. Wymagają głębokiej certyfikacji technicznej. Technology Partners / ISV (Independent Software Vendors) — integrują swój produkt z Twoim, tworząc dodatkową wartość dla wspólnych klientów. Marketplace Partners — sprzedają przez Twój marketplace (AppExchange, Azure Marketplace). Strategic Alliance Partners — partnerzy strategiczni na poziomie corporate, często z co-marketing i co-selling.",
  },
  {
    question: "Jak budować program partnerski?",
    answer: "Budowanie programu partnerskiego: Zacznij od IDP (Ideal Partner Profile) — nie wszyscy partnerzy są dobrzy. Kto ma dostęp do Twoich klientów? Kto ma komplementarne usługi? Kto ma motywację i zasoby? Stwórz tier system — Bronze/Silver/Gold/Platinum z rosnącymi benefitami i wymaganiami. Niższe tiery: easier access, mniejsza prowizja. Wyższe tiery: wyższe prowizje, wsparcie marketingowe, certyfikacje. Zainwestuj w enablement — partnerzy potrzebują szkoleń, dokumentacji, narzędzi sprzedażowych. Bez tego nie będą efektywnie sprzedawać. Partner Portal — centralne miejsce na zasoby, deal registration, comissions tracking, support. Narzędzia: Allbound, Impartner, PartnerStack. Rekrutacja — aktywna rekrutacja partnerów (nie czekaj aż przyjdą). Konferencje branżowe, cold outreach do SI i VARów.",
  },
  {
    question: "Jak mierzyć sukces ekosystemu partnerskiego?",
    answer: "Metryki partner ecosystem: Partner-Sourced Revenue — % całkowitego ARR który pochodzi od/przez partnerów. Cel: 20-40% całkowitego revenue dla dojrzałych ekosystemów. Partner-Influenced Revenue — revenue gdzie partner miał udział nawet jeśli nie był primary source. Partner Win Rate — czy deale z partnerem mają wyższy win rate niż direct? Zdrowy ekosystem = wyższy win rate dzięki local knowledge i trust. Partner ACV — czy partnerzy przynoszą większe czy mniejsze deale niż direct sales? Partner Retention — ile partnerów pozostaje aktywnych rok do roku? Niski retention = złe wsparcie lub słaby ROI. Active Partners % — ile z zarejestrowanych partnerów faktycznie sprzedaje? Często 20-30% partnerów generuje 80% partner revenue.",
  },
  {
    question: "Jakie są najczęstsze błędy w budowaniu ekosystemu?",
    answer: "Błędy w partner ecosystem: Brak partner success — firma skupia się na rekrutacji partnerów ale nie inwestuje w ich sukces. Partnerzy bez wsparcia nie sprzedają. Kanibalizacja direct — partnerzy i direct sales walczą o tych samych klientów bez jasnego podziału. Tworzy konflikty i demotywuje partnerów. Zbyt skomplikowany program — zbyt wiele tierów, niejasne kryteria, skomplikowane kalkulacje prowizji. Partnerzy muszą łatwo rozumieć co dostaną. Brak deal registration — bez systemu deal registration partnerzy boją się dzielić informacją o klientach bo mogą zostać 'pominięci'. Deal reg chroni ich wysiłek. Nieefektywny onboarding — partnerzy tracą motywację jeśli onboarding trwa miesiące. Cel: first deal w ciągu 60-90 dni od podpisania umowy partnerskiej.",
  },
];

const partnerTypes = [
  { typ: "Referral", model: "Poleca klientów, nie prowadzi sprzedaży", prowizja: "5-20% pierwszego roku ARR (jednorazowo)", zasoby: "Minimalne — link, materiały, portal", kolor: "blue" },
  { typ: "Reseller / VAR", model: "Kupuje i odsprzedaje z własną marżą i serwisem", prowizja: "20-40% ARR recurring (marża)", zasoby: "Szkolenia, certyfikacja, deal registration", kolor: "green" },
  { typ: "System Integrator", model: "Wdraża i integruje w złożonych środowiskach enterprise", prowizja: "15-25% ARR + services revenue", zasoby: "Deep technical certification, sandbox, dedicated SE", kolor: "purple" },
  { typ: "Technology / ISV", model: "Integruje swój produkt z Twoim — mutual value", prowizja: "Zwykle bez prowizji — cross-sell i co-marketing", zasoby: "API dokumentacja, dev sandbox, marketplace listing", kolor: "orange" },
  { typ: "Strategic Alliance", model: "Partnerstwo corporate-level z co-selling i joint GTM", prowizja: "Custom agreement — revenue share per deal", zasoby: "Executive sponsorship, dedicated alliance manager", kolor: "teal" },
];

const partnerProgramTiers = [
  { tier: "Registered", wymagania: "Podpisanie umowy, podstawowe szkolenie produktowe", benefity: "Dostęp do portalu, materiały, mała prowizja bazowa", prowizja: "5-10%" },
  { tier: "Silver", wymagania: "Min. 3 deale/rok, certyfikacja sales, 2+ certified staff", benefity: "Wyższe prowizje, wsparcie marketingowe, deal registration priority", prowizja: "15-20%" },
  { tier: "Gold", wymagania: "Min. 10 deali/rok, technical certification, dedykowany PAM", benefity: "Premium prowizje, co-marketing budżet, early access do features", prowizja: "25-30%" },
  { tier: "Platinum", wymagania: "Min. 25 deali/rok, 5+ certified, joint business plan", benefity: "Najwyższe prowizje, executive access, conference sponsorship", prowizja: "35-40%" },
];

export default function BlogPartnerEcosystemCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Partner Ecosystem — jak budować ekosystem partnerski? | Fotz.pl"
        description="Partner ecosystem: typy partnerów, jak budować program partnerski, tiers, metryki i najczęstsze błędy. Kompletny przewodnik dla firm SaaS i scaleupów."
        canonicalUrl="https://fotz.pl/blog/partner-ecosystem-ekosystem-partnerski-saas"
      />
      <ArticleSchema
        title="Partner Ecosystem — jak budować ekosystem partnerski?"
        description="Partner ecosystem: typy (referral, VAR, SI, ISV, strategic), program partnerski, tier system, metryki i jak unikać błędów przy budowaniu ekosystemu partnerskiego."
        url="https://fotz.pl/blog/partner-ecosystem-ekosystem-partnerski-saas"
        datePublished="2024-02-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Partner Ecosystem", url: "https://fotz.pl/blog/partner-ecosystem-ekosystem-partnerski-saas" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-lime-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Partner Ecosystem", href: "/blog/partner-ecosystem-ekosystem-partnerski-saas" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-lime-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Partnerships
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Partner Ecosystem
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Salesforce, HubSpot, AWS — najbardziej wartościowe firmy SaaS budują
              swój wzrost przez ekosystem partnerski. Partnerzy docierają tam
              gdzie Twoja direct sprzedaż nie dotrze.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy partnerów", value: "5 głównych" },
                { label: "HubSpot przez partnerów", value: "50%+ ARR" },
                { label: "Active partner rule", value: "20/80" },
                { label: "Target partner revenue", value: "20-40%" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-lime-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 typów partnerów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ partnera ma inny model zaangażowania, oczekiwania i potencjał revenue.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {partnerTypes.map((p) => (
              <FadeInView key={p.typ}>
                <div className={`rounded-xl border-2 p-5 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  p.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    p.kolor === "blue" ? "text-blue-800" :
                    p.kolor === "green" ? "text-green-800" :
                    p.kolor === "purple" ? "text-purple-800" :
                    p.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{p.typ}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Model</div><p className="text-gray-700">{p.model}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Prowizja</div><p className="text-gray-700">{p.prowizja}</p></div>
                    <div><div className="text-xs font-bold text-gray-500 uppercase mb-1">Zasoby</div><p className="text-gray-700">{p.zasoby}</p></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Tier program */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykładowy program tierów partnerskich</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tiered program motywuje partnerów do inwestowania w relację z Tobą
              przez rosnące benefity i prowizje.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-lime-700 text-white">
                  <th className="text-left px-4 py-3">Tier</th>
                  <th className="text-left px-4 py-3">Wymagania</th>
                  <th className="text-left px-4 py-3">Benefity</th>
                  <th className="text-left px-4 py-3">Prowizja</th>
                </tr>
              </thead>
              <tbody>
                {partnerProgramTiers.map((t, i) => (
                  <tr key={t.tier} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{t.tier}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{t.wymagania}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{t.benefity}</td>
                    <td className="px-4 py-3 font-bold text-lime-700">{t.prowizja}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
