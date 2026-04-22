import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest lejek konwersji (Conversion Funnel)?",
    answer: "Conversion Funnel (lejek konwersji) to model przedstawiający kolejne etapy przez które przechodzi potencjalny klient — od pierwszego kontaktu z firmą do dokonania zakupu. Nazywany lejkiem bo na każdym etapie część potencjalnych klientów odpada, zawężając grupę do zakupu. Etapy lejka (TOFU/MOFU/BOFU): Top of Funnel (TOFU) — Awareness. Potencjalny klient dowiaduje się o Twojej firmie. Blog, social media, reklamy, SEO. Middle of Funnel (MOFU) — Consideration. Klient rozważa Twoje rozwiązanie. Webinary, case studies, demo request, email nurturing. Bottom of Funnel (BOFU) — Decision. Klient jest gotowy kupić. Sales call, trial, proposal, negocjacje. Metryki na każdym etapie: TOFU: traffic, impressions, brand awareness. MOFU: leads, MQL (Marketing Qualified Lead), demo requests. BOFU: SQL (Sales Qualified Lead), opportunities, closed won. Różne firmy mają różne lejki — e-commerce lejek jest prostszy (awareness → zakup). SaaS B2B ma typowo 5-7 etapów z dłuższym procesem decyzyjnym.",
  },
  {
    question: "Jak mierzyć konwersję na każdym etapie lejka?",
    answer: "Mierniki konwersji w lejku: Visitor to Lead: (Leady / Unikalnych odwiedzających) × 100%. Benchmark: 1-5% dla stron B2B SaaS. Lead to MQL: % leadów spełniających kryteria MQL (firma rozmiaru X, branży Y, z konkretną aktywnością). Zależy od definicji MQL — typowo 20-40% leadów. MQL to SQL: % MQL które Sales zaakceptuje jako qualified. Benchmark: 30-50%. Low = Marketing generuje słabej jakości leady. SQL to Opportunity: % SQL które przechodzą do aktywnej okazji sprzedażowej. Opportunity to Close: Win Rate — 20-30% dla SaaS B2B. Analiza lejka: Które etapy mają najniższą konwersję? Tam jest bottleneck — focus optymalizacji. Volume × conversion = wynik na kolejnym etapie. Zmiana w jednym etapie procentowo zmienia wszystkie późniejsze. Narzędzia: HubSpot Funnel Report, Salesforce Reports, Mixpanel Funnels, Google Analytics, Amplitude, Metabase. Attribution: który kanał marketingowy generuje leady z najwyższą konwersją do close? Wartościowsze niż cost per lead.",
  },
  {
    question: "Jak optymalizować TOFU (top of funnel)?",
    answer: "Optymalizacja TOFU: SEO i Content Marketing — długoterminowy, tani per lead, wolny efekt. Blog posts, pillar pages, case studies. Focus na słowa kluczowe z intencją transakcyjną i edukacyjną. Paid Advertising — Google Ads (high intent, kosztowne), LinkedIn Ads (precyzyjne targeting B2B, drogie ~$8-15 CPC), Meta Ads (tańsze, mniej precyzyjne B2B). Outbound (SDR/BDR) — cold email i LinkedIn outreach. Persunalizacja > masowa wysyłka. Social Selling — LinkedIn content budujący personal brand. Generuje inbound leads długoterminowo. Events i Webinary — konferencje, własne webinary. Wysoka jakość leadów, droższe per lead. Partner Channels — referrals od istniejących klientów lub partnerów. Najwyższa konwersja, najtrudniejszy do skalowania. Optymalizacja landing pages: clear value proposition (co robisz, dla kogo, jaką wartość), CTA powyżej fold, social proof (customer logos, reviews, liczby), form optymalizacja (mniej pól = więcej konwersji), A/B testing. Benchmark: dobry B2B landing page konwertuje 5-10%. Słaby: poniżej 1%.",
  },
  {
    question: "Jak optymalizować MOFU (middle of funnel)?",
    answer: "Optymalizacja MOFU — lead nurturing i kwalifikacja: Lead Scoring — automatyczna punktacja leadów na podstawie demografii (firma, stanowisko) i zachowania (odwiedzone strony, pobrane materiały, email open). Threshold = MQL. Narzędzia: HubSpot, Marketo, Pardot. Email Nurturing — sekwencje emaili dopasowane do etapu buyer journey. Nie sprzedawaj zbyt wcześnie — edukuj, buduj zaufanie. 7-12 emaili w 30-60 dniach. Demo Request Optymalizacja — demo to kluczowy moment konwersji. Formularz: minimum pól. Follow-up: kontakt w ciągu 5 minut zwiększa konwersję 9x. Case Studies i Social Proof — treści które pomagają klientowi 'zobaczyć siebie' w Twoim produkcie. Szczególnie skuteczne dla sceptycznych mid-funnel leadów. Sales Handoff — kiedy i jak przekazujesz lead do Sales? Zbyt wcześnie = AE traci czas. Zbyt późno = klient kupił u konkurencji. Define SLA: Marketing dostarcza MQL, Sales odpowiada w ciągu X godzin. Retargeting — reklamy dla osób które odwiedziły stronę ale nie skonwertowały. Niski koszt, wysoka relevancy.",
  },
  {
    question: "Jak optymalizować BOFU (bottom of funnel)?",
    answer: "Optymalizacja BOFU — zamykanie dealów: Trial/POC Optymalizacja — ustrukturyzowany trial z clear success metrics, onboarding wsparcie, check-in calls. Klient który osiągnie value podczas trialu ma 80%+ konwersję do zakupu. Proposal Quality — personalizowane propozycje z ROI calculation. Nie generic PDF. Zawiera: pain statement, proposed solution, ROI model, pricing, case studies, timeline. Pricing Transparency — ukryte ceny zwiększają friction. Rozważ transparentne pricing page. Reduces unqualified leads, zwiększa close rate kwalifikowanych. Objection Handling — udokumentowane objections i responses dla najczęstszych obiekcji: cena, bezpieczeństwo, integracja, 'poczekamy'. Trenuj AE. Decision Timeline — zapytaj o timeline decyzji. Stwórz mutual action plan (MAP) z konkretnym planem kroków po obu stronach do zamknięcia dealu. Champion Enablement — daj champions materiały które mogą użyć wewnętrznie do selling do komitetu zakupowego. Executive Alignment — dla Enterprise: executive-to-executive rozmowa eliminuje polityczne ryzyko.",
  },
];

const funnelStages = [
  { etap: "Awareness (TOFU)", metryki: "Visitors, Impressions, Brand searches", konwersja: "1-5% do następnego etapu", kanały: "SEO, Paid Ads, Social, Events, PR", kolor: "blue" },
  { etap: "Interest (TOFU-MOFU)", metryki: "Time on site, Pages/session, Content downloads", konwersja: "20-40% odwiedzający → lead", kanały: "Blog content, Webinary, Gated content", kolor: "green" },
  { etap: "Consideration (MOFU)", metryki: "MQL, Demo requests, Email engagement", konwersja: "30-50% MQL → SQL", kanały: "Email nurturing, Retargeting, Case studies", kolor: "purple" },
  { etap: "Intent (MOFU-BOFU)", metryki: "SQL, Opportunities, Trial activations", konwersja: "50-70% SQL → Opportunity", kanały: "Sales calls, Demo, Free trial, POC", kolor: "orange" },
  { etap: "Decision (BOFU)", metryki: "Proposals sent, Negotiation, Close rate", konwersja: "20-30% Opportunity → Closed Won", kanały: "Proposals, Pricing, Legal, Executive calls", kolor: "teal" },
];

const conversionBenchmarks = [
  { etap: "Visitor → Lead", b2bBenchmark: "1-5%", dobre: "Powyżej 3%", akcja: "Landing page optimization, CTA testing" },
  { etap: "Lead → MQL", b2bBenchmark: "20-40%", dobre: "Powyżej 30%", akcja: "Lead scoring kalibracja, ICP alignment" },
  { etap: "MQL → SQL", b2bBenchmark: "30-50%", dobre: "Powyżej 40%", akcja: "MQL definition, Sales & Marketing alignment" },
  { etap: "SQL → Closed Won", b2bBenchmark: "20-30%", dobre: "Powyżej 25%", akcja: "Sales process, qualification, objection handling" },
];

export default function BlogConversionFunnelCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Lejek Konwersji | Fotz Studio"
        description="Conversion Funnel: etapy (TOFU/MOFU/BOFU), metryki konwersji, benchmarki B2B SaaS, optymalizacja każdego etapu i narzędzia (HubSpot, Salesforce, Mixpanel)."
        canonicalUrl="https://fotz.pl/blog/lejek-konwersji-conversion-funnel-co-to-jest"

        keywords="Lejek Konwersji co to jest, Lejek Konwersji definicja, czym jest Lejek Konwersji, Lejek Konwersji przykłady, jak działa Lejek Konwersji, Lejek Konwersji znaczenie, Lejek Konwersji przewodnik"

        canonical="https://fotz.pl/blog/lejek-konwersji-conversion-funnel-co-to-jest"
      />
      <ArticleSchema
        title="Lejek Konwersji — co to jest i jak optymalizować Conversion Funnel?"
        description="Conversion Funnel: TOFU/MOFU/BOFU etapy, metryki konwersji (lead, MQL, SQL), benchmarki B2B SaaS, optymalizacja i narzędzia dla Growth i Marketing teams."
        url="https://fotz.pl/blog/lejek-konwersji-conversion-funnel-co-to-jest"
        datePublished="2024-03-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Lejek Konwersji", url: "https://fotz.pl/blog/lejek-konwersji-conversion-funnel-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Lejek Konwersji", url: "/blog/lejek-konwersji-conversion-funnel-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-orange-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Growth / Marketing
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lejek Konwersji
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Na każdym etapie klienci odpada. Pytanie brzmi: gdzie odpada
              ich za dużo? Analiza lejka konwersji identyfikuje bottlenecki
              i wskazuje gdzie jest największy potencjał wzrostu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "TOFU konwersja", value: "1-5%" },
                { label: "MQL → SQL", value: "30-50%" },
                { label: "SQL → Close", value: "20-30%" },
                { label: "Klucz", value: "Bottleneck analysis" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-orange-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Etapy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 etapów lejka konwersji B2B SaaS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy etap ma inne metryki, kanały i typowe wskaźniki konwersji.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {funnelStages.map((s) => (
              <FadeInView key={s.etap}>
                <div className={`rounded-xl border-2 p-5 ${
                  s.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  s.kolor === "green" ? "border-green-200 bg-green-50" :
                  s.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  s.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-3 ${
                    s.kolor === "blue" ? "text-blue-800" :
                    s.kolor === "green" ? "text-green-800" :
                    s.kolor === "purple" ? "text-purple-800" :
                    s.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{s.etap}</h3>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div><span className="font-semibold text-gray-600">Metryki: </span><span className="text-gray-700">{s.metryki}</span></div>
                    <div><span className="font-semibold text-gray-600">Konwersja: </span><span className="text-gray-700">{s.konwersja}</span></div>
                    <div><span className="font-semibold text-gray-600">Kanały: </span><span className="text-gray-700">{s.kanały}</span></div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Benchmarki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benchmarki konwersji B2B SaaS</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Gdzie Twój lejek wypada vs. benchmarks rynkowe?
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-orange-600 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Etap</th>
                  <th className="p-3 text-left">Benchmark B2B</th>
                  <th className="p-3 text-left">Dobry wynik</th>
                  <th className="p-3 text-left rounded-tr-lg">Akcja gdy poniżej</th>
                </tr>
              </thead>
              <tbody>
                {conversionBenchmarks.map((b, i) => (
                  <tr key={b.etap} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-gray-700">{b.etap}</td>
                    <td className="p-3 text-gray-600">{b.b2bBenchmark}</td>
                    <td className="p-3 text-green-700 font-medium">{b.dobre}</td>
                    <td className="p-3 text-gray-600">{b.akcja}</td>
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

      <RelatedArticles currentArticleId="lejek-konwersji-conversion-funnel-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
