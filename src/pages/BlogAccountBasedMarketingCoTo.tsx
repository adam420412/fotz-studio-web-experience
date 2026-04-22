import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Account-Based Marketing (ABM)?",
    answer:
      "Account-Based Marketing (ABM) to strategia B2B marketingu, w której firma koncentruje zasoby na ściśle wyselekcjonowanym zestawie firm (kont) o najwyższym potencjale biznesowym, zamiast prowadzić masowy marketing. ABM odwraca tradycyjny lejek — najpierw identyfikujesz idealne firmy, potem budujesz dla każdej spersonalizowane kampanie. ABM wymaga ścisłej współpracy marketing + sprzedaż.",
  },
  {
    question: "Czym ABM różni się od tradycyjnego lead generation?",
    answer:
      "Tradycyjny lead gen: szeroki zasięg, kwalifikacja leadów, sprzedaż. ABM: identyfikacja docelowych kont, targetowane kampanie, zaangażowanie buying committee, sprzedaż. Lead gen celuje w jak największą liczbę leadów i filtruje. ABM celuje w właściwe firmy od razu i angażuje pełne buying committee (średnio 6–10 osób w B2B enterprise). ABM daje wyższy ROI, ale wymaga wyższych nakładów na konto.",
  },
  {
    question: "Jakie są typy ABM?",
    answer:
      "Trzy główne typy: ABM Strategic (1:1) — hyper-personalizowane kampanie dla 5–20 strategicznych kont, najwyższy nakład, najwyższy potencjał; ABM Lite (1:Few) — semi-personalizowane kampanie dla klastrów 20–100 podobnych kont (np. firmy fintech serii B); Programmatic ABM (1:Many) — zautomatyzowane kampanie dla setek lub tysięcy kont z minimalną personalizacją, zazwyczaj dla SMB.",
  },
  {
    question: "Jak zbudować listę kont docelowych w ABM?",
    answer:
      "Budowanie target account list: zacznij od ICP (Ideal Customer Profile) — firmografia (branża, wielkość, przychody, lokalizacja), technografia (stack technologiczny), sygnały zakupowe (funding, hiring, expansion, technologia). Następnie przeanalizuj closed-won deals, użyj narzędzi intent data (6sense, Bombora), skonsultuj z sales (ich top 50 kont), użyj LinkedIn Sales Navigator do budowania list. Wynik: priorytetowa lista kont Tier 1/2/3.",
  },
  {
    question: "Jakie metryki mierzyć w ABM?",
    answer:
      "Metryki ABM: Account Engagement Score (jak bardzo firma wchodzi w interakcję z treściami), Pipeline Influence Rate (% pipeline wygenerowany przez ABM), Account Coverage (% buying committee który dotknięto marketingiem), Deal Velocity (czy ABM przyspiesza zamykanie?), Contract Value uplift (czy ABM prowadzi do większych kontraktów?), oraz Account Penetration (ile osób z konta jest zaangażowanych).",
  },
];

const abmTiers = [
  {
    tier: "ABM Strategic (1:1)",
    konta: "5–20 kont",
    personalizacja: "Hyper-personalizowana — dedykowany content, custom landing pages, spersonalizowane gifty",
    zasoby: "Bardzo wysokie — dedykowany team na konto",
    kiedy: "Enterprise accounts z potencjałem 500k+ USD ARR",
    przykład: "Dedykowany microsite dla KPMG, custom research report dla Santander, spersonalizowane wideo od CEO",
  },
  {
    tier: "ABM Lite (1:Few)",
    konta: "20–100 kont",
    personalizacja: "Semi-personalizowana — segmentacja po branży/roli, dostosowane messaging",
    zasoby: "Średnie — shared resources z personalizacją przez segmenty",
    kiedy: "Mid-market accounts z potencjałem 50–500k USD ARR",
    przykład: "Kampania dla fintech scale-upów z insightami branżowymi, landing page per segment",
  },
  {
    tier: "Programmatic ABM (1:Many)",
    konta: "100–10,000 kont",
    personalizacja: "Minimalna — targetowanie wg firmografii i intent data",
    zasoby: "Niskie — zautomatyzowane kampanie display, LinkedIn, email",
    kiedy: "SMB accounts, top-of-funnel awareness, rynki nowe",
    przykład: "LinkedIn kampania do HR Managerów w firmach 50–200 pracowników z branży retail",
  },
];

const abmProcess = [
  { krok: "Zdefiniuj ICP i zbuduj target account list", opis: "Stwórz Ideal Customer Profile wg firmografii, technografii i sygnałów zakupowych. Użyj narzędzi intent data i CRM data do zbudowania priorytetowej listy kont Tier 1/2/3.", kto: "Marketing + Sales wspólnie" },
  { krok: "Mapuj buying committee", opis: "Zidentyfikuj wszystkich decision makerów i influencerów w docelowych firmach (Economic Buyer, Technical Buyer, User Buyer, Coach). Dla każdej roli zrozum ich pain points i motywacje.", kto: "Sales AE + Marketing researcher" },
  { krok: "Stwórz spersonalizowany content i kampanie", opis: "Twórz treści dopasowane do konkretnego konta lub segmentu. Content powinien adresować specyficzne wyzwania branżowe lub firmowe — nie generic value proposition.", kto: "Content marketing + Design + Sales" },
  { krok: "Aktywuj przez kanały (Orchestration)", opis: "Uruchom skoordynowane kampanie przez wiele kanałów jednocześnie: LinkedIn Ads, programmatic display, personalizacja strony www, spersonalizowane emaile, outreach SDR, events i webinary.", kto: "Demand Generation + Sales Development" },
  { krok: "Mierz Account Engagement", opis: "Śledź Account Engagement Score — sumaryczną aktywność wszystkich osób z danego konta. Nie mierz leadów, mierz zaangażowanie konta. Pipeline influence, deal velocity, coverage.", kto: "Marketing Ops + RevOps" },
  { krok: "Iteruj i skaluj", opis: "Analizuj które konta progresują szybciej i dlaczego. Optymalizuj messaging, kanały, timing. Przenoś learnings między tierami. Aktualizuj target account list kwartalnie.", kto: "Marketing + Sales leadership" },
];

const abmTools = [
  { kategoria: "ABM Platform", narzędzia: "6sense, Demandbase, Terminus, RollWorks", funkcja: "Intent data, account scoring, orchestration" },
  { kategoria: "Intent Data", narzędzia: "Bombora, TechTarget, G2 Buyer Intent", funkcja: "Sygnały zakupowe — kto researches Twoje kategorie" },
  { kategoria: "LinkedIn ABM", narzędzia: "LinkedIn Campaign Manager (Company Targeting), Sales Navigator", funkcja: "Targetowanie konkretnych firm i ról" },
  { kategoria: "Personalizacja Strony", narzędzia: "Mutiny, Intellimize, Clearbit Reveal", funkcja: "Dynamic content dla znanych kont odwiedzających www" },
  { kategoria: "CRM + Marketing Automation", narzędzia: "Salesforce, HubSpot, Marketo", funkcja: "Account tracking, engagement scoring, pipeline reporting" },
];

export default function BlogAccountBasedMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Account-Based Marketing (ABM) — co to jest? Strategia ABM w B2B"
        description="Account-Based Marketing — definicja, 3 typy ABM (strategic, lite, programmatic), 6-krokowy proces, ICP, buying committee i narzędzia. Kompletny przewodnik B2B."
        canonical="https://fotz.pl/blog/account-based-marketing-co-to"

        keywords="Account-Based Marketing (ABM) co to jest, Account-Based Marketing (ABM) definicja, czym jest Account-Based Marketing (ABM), Account-Based Marketing (ABM) w marketingu, Account-Based Marketing (ABM) przykłady, jak działa Account-Based Marketing (ABM), Account-Based Marketing (ABM) strategia"
      />
      <ArticleSchema
        title="Account-Based Marketing (ABM) — co to jest i jak wdrożyć?"
        description="Kompletny przewodnik po ABM: 3 tiery (1:1, 1:Few, 1:Many), 6-krokowy proces, ICP, buying committee i narzędzia: 6sense, Demandbase, LinkedIn."
        url="https://fotz.pl/blog/account-based-marketing-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Account-Based Marketing", url: "https://fotz.pl/blog/account-based-marketing-co-to" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", url: "/blog" }, { name: "Account-Based Marketing", url: "https://fotz.pl" }]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Account-Based Marketing (ABM) — co to jest i jak wdrożyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            ABM odwraca tradycyjny lejek — najpierw wybierasz firmy, potem budujesz kampanie.
            Poznaj 3 tiery ABM, 6-krokowy proces i narzędzia do wdrożenia strategii.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Account-Based Marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Account-Based Marketing (ABM)</strong> to strategia B2B, w której marketing
              i sprzedaż wspólnie koncentrują zasoby na wyselekcjonowanych firmach o najwyższym
              potencjale przychodowym. Zamiast targetować "marketing managerów" — targetujesz
              "marketing managerów w firmach X, Y, Z" ze spersonalizowanym przekazem.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania ITSMA: 87% marketerów B2B mierzących ROI wskazuje ABM jako najwyżej
              zwracającą strategię. Firmy z ABM osiągają 200% wyższy ROI kampanii i 60%
              wyższe wskaźniki zamykania dealów.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "87%", opis: "marketerów B2B wskazuje ABM jako najwyższy ROI ze wszystkich strategii (ITSMA)" },
                { stat: "200%", opis: "wyższy ROI kampanii przy wdrożeniu pełnego programu ABM vs. lead gen" },
                { stat: "6–10", opis: "osób w buying committee przeciętnego enterprise dealu B2B" },
              ].map((s, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">3 tiery ABM</h2>
            <div className="space-y-5">
              {abmTiers.map((t, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{t.tier}</h3>
                      <p className="text-purple-600 text-sm font-semibold">{t.konta}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3 text-sm">
                    <div className="bg-purple-50 rounded p-3">
                      <p className="text-xs font-semibold text-purple-600 mb-1">Personalizacja:</p>
                      <p className="text-purple-800">{t.personalizacja}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Zasoby / Kiedy:</p>
                      <p className="text-slate-700">{t.zasoby}</p>
                      <p className="text-slate-500 text-xs mt-1">Gdy: {t.kiedy}</p>
                    </div>
                    <div className="bg-blue-50 rounded p-3">
                      <p className="text-xs font-semibold text-blue-600 mb-1">Przykład:</p>
                      <p className="text-blue-800">{t.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6-krokowy proces wdrożenia ABM</h2>
            <div className="space-y-4">
              {abmProcess.map((krok, i) => (
                <div key={i} className="flex gap-4 bg-slate-50 rounded-xl p-5">
                  <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 mt-1">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{krok.krok}</h3>
                    <p className="text-slate-600 text-sm mb-1">{krok.opis}</p>
                    <p className="text-xs text-purple-600 font-semibold">Odpowiedzialny: {krok.kto}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Narzędzia ABM</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kategoria</th>
                    <th className="p-3 text-left">Narzędzia</th>
                    <th className="p-3 text-left">Funkcja</th>
                  </tr>
                </thead>
                <tbody>
                  {abmTools.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-purple-700">{row.kategoria}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.narzędzia}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.funkcja}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Account-Based Marketing</h2>
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

      <RelatedArticles currentArticleId="account-based-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
