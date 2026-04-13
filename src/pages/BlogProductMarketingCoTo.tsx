import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Package, TrendingUp, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogProductMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Product Marketing — co to jest? Marketing produktu B2B SaaS" },
  ];

  const pmrResponsibilities = [
    { resp: "Positioning i Messaging", desc: "Jak produkt jest pozycjonowany vs konkurencja. Jakie key messages rezonują z ICP. Copywriting na stronie, w reklamach, w pitch decks." },
    { resp: "Go-to-Market Strategy", desc: "Planowanie i egzekucja launchu nowych produktów lub feature. Określenie target audience, kanałów, pricing i timeline launchu." },
    { resp: "Competitive Intelligence", desc: "Ciągłe monitorowanie konkurencji — pricing, positioning, feature updates. Battlecards dla handlowców. Win/loss analysis." },
    { resp: "Sales Enablement", desc: "Tworzenie materiałów dla sprzedaży — decks, one-pagerów, case studies, ROI calculators. Szkolenia handlowców z messaging." },
    { resp: "Customer & Market Research", desc: "Wywiady z klientami, analiza rynku, win/loss. Insights które informują roadmapę produktu i strategię komunikacji." },
    { resp: "Demand Generation Collaboration", desc: "Praca z marketing growth teamem — content strategy, campaign messaging, landing pages. PMM dostarcza 'what', growth dostarcza 'how'." },
  ];

  const pmmVspm = [
    { role: "Product Manager (PM)", focus: "Co budować i dlaczego. Roadmapa, user stories, priorytety, backlog.", metric: "Adoption, retention, NPS, time-to-value.", background: "Engineering, UX, strategy." },
    { role: "Product Marketing Manager (PMM)", focus: "Jak komunikować co zbudowaliśmy. Positioning, messaging, launche.", metric: "Win rate, deal velocity, feature adoption, CAC.", background: "Marketing, writing, strategy, competitive." },
  ];

  const faqItems = [
    {
      question: "Co to jest product marketing?",
      answer: "Product marketing (marketing produktu) to funkcja łącząca produkt i rynek — odpowiedzialna za pozycjonowanie, messaging i go-to-market produktu. Product Marketing Manager (PMM) jest mostem między Product, Sales i Marketing. Kluczowe pytania PMM: Kto jest naszym ICP i jakie problemy rozwiązujemy? Jak powinniśmy komunikować wartość produktu? Jak pozycjonować się vs konkurencja? Jak launchować nowe produkty i features? Jak przygotować handlowców do rozmów z klientami? Product marketing nie jest to samo co marketing produktu w tradycyjnym sensie (reklamy, kampanie) — to strategiczna rola która definiuje co i jak komunikować. PMM jest często nazywany 'the voice of the customer' w firmie — reprezentuje perspektywę rynku w dyskusjach o produkcie.",
    },
    {
      question: "Czym Product Marketing Manager różni się od Product Managera?",
      answer: "PM vs PMM — dwie różne role: Product Manager (PM): buduje produkt. Właściciel roadmapy. Pracuje z engineering i UX. Skupiony na user experience i wymaganiach technicznych. Mierzy: feature adoption, NPS, retention, engagement. Codzienność: sprint planning, backlog grooming, user stories, standupy z devami. Product Marketing Manager (PMM): komunikuje produkt rynkowi. Właściciel positioning i messaging. Pracuje z sales, marketing i CS. Skupiony na buyer i rynku, nie na użytkowniku. Mierzy: win rate, pipeline influenced, feature unawareness rate, CAC. Codzienność: customer interviews, competitive research, launch planning, sales enablement. Współpraca: PM decyduje CO budujemy (roadmapa). PMM decyduje JAK komunikujemy to rynkowi (messaging). Razem: launch strategy. Błędne przekonanie: 'PMM to osoba która pisze press releases'. Dobre PMM jest strategicznym partnerem dla CEO i CPO, nie tylko copywriterem.",
    },
    {
      question: "Jak wygląda typowy launch produktu w podejściu product marketingowym?",
      answer: "Framework launchu produktu — LAUNCH: Learn (pozna rynek): research z klientami i potencjalnymi klientami — czy rozwiązujemy właściwy problem? Align (synchronizacja): kick-off z wszystkimi stakeholders — PM, Sales, CS, Marketing. Alignment na messaging, timing, success metrics. Understand buyers (zrozum kupującego): dodefiniuj ICP dla nowego feature. Jakie nowe persony osiągamy? Narrative (narracja): zbuduj core positioning i messaging. FAQ z perspektywy klienta. Name i tagline. Content (content): strona www, landing page, blog post, sales deck, email kampania, in-app announcement. Help sales (enablement): battlecard, one-pager, demo script, FAQs dla handlowców. Post-launch: measure, iterate. Typy launchy: L1 (major launch): pełna kampania, PR, events, ads. L2 (mid launch): blog, email, social, in-app. L3 (minor): in-app, release notes, email do aktywnych userów. Czas przygotowania: L1: 2-3 miesiące. L2: 3-6 tygodni. L3: 1-2 tygodnie.",
    },
    {
      question: "Jak stworzyć skuteczny positioning produktu?",
      answer: "Framework positioning produktu (Geoffrey Moore, Crossing the Chasm): Klasyczny template: 'Dla [target customer] którzy [have need or problem], [product name] jest [product category] który [key benefit, reason to buy]. W odróżnieniu od [competitive alternative], nasz produkt [primary differentiation].' Przykład: 'Dla content marketerów B2B którzy tracą czas na manualnym planowaniu treści, Contentful jest platformą CMS która automatyzuje workflow wydawniczy. W odróżnieniu od WordPress, Contentful oferuje headless architecture która integruje się z dowolnym frontendem.' Jak budować positioning: 1) Zrozum ICP głęboko — wywiady, win/loss. 2) Zbadaj konkurencję — jak się pozycjonują? Gdzie są białe plamy? 3) Zidentyfikuj unique value — co robimy inaczej? Co jest udowadnialne? 4) Przetestuj z klientami i sprzedawcami — czy to rezonuje? Czy handlowcy mogą używać tego messaging? Uwaga: positioning żyje w głowach klientów — nie kontrolujesz go. Tworzysz messaging który próbuje go ukształtować.",
    },
    {
      question: "Jak mierzyć efektywność product marketingu?",
      answer: "Metryki Product Marketing Managera: Pipeline influence: ile $ pipeline pochodzi z treści PMM (case studies, landing pages, campaigns). Win rate: czy messaging i battlecards poprawiają win rate handlowców? Mierz przed i po launch nowych materiałów. Feature adoption: % klientów korzystających z nowych features po launchu. Niska adoption = zły launch lub brak awareness. Deal velocity: jak szybko zamykają się deale? Dobre sales enablement = krótszy cykl sprzedaży. Competitive win rate: jak wygrywamy vs konkretni konkurenci? Unaided awareness: czy ICP kojarzy Twoją markę bez podpowiedzi? (Brand surveys). Message resonance: % handlowców używających nowego messaging (zamiast starego lub własnego). Launch success metrics: per launch definiuj 30/60/90 KPIs. Np.: 'feature X osiągnie 30% adoption w 60 dni po launchu'. PMM często boryka się z attribution — trudno przypisać bezpośrednio revenue do messaging. Rozwiązanie: mixed metrics (quantitative + qualitative z sales i CS feedback).",
    },
    {
      question: "Kiedy firma powinna zatrudnić Product Marketing Managera?",
      answer: "Sygnały że potrzebujesz PMM: Handlowcy używają różnego messagingu bo nie ma spójnego source of truth. Launchujesz produkty bez spójnej strategii komunikacji — każdy robi po swojemu. Tracisz deale a nie wiesz dlaczego (brak competitive intelligence i battlecards). Product buduje features ale rynek ich nie zna lub nie rozumie wartości. Marketing tworzy content bez głębokiego rozumienia produktu i ICP. Kiedy zatrudnić (timing): Zazwyczaj pierwsza dedykowana PMM rola pojawia się przy: 50-100+ pracownikach, lub 20+ handlowcach, lub przy launch 2. produktu lub nowego segmentu. Wcześniej: PM lub marketing manager pełni dual role. Co szukać w PMM: Silny research i writing skills. Rozumienie SaaS go-to-market. Doświadczenie z sprzedażą B2B (lub gotowość do nauki). Ability to synthesize insights z wielu źródeł. Pensje w Polsce: Junior PMM: 8-12k PLN/mies. Mid PMM: 12-18k PLN/mies. Senior PMM / Director PMM: 18-30k PLN/mies.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Product Marketing — co to jest? Marketing produktu B2B SaaS"
        description="Product marketing co to jest — wyjaśniamy czym jest marketing produktu, rola PMM vs PM, jak launchować produkt, positioning, messaging i metryki product…"
        canonical="https://fotz.pl/blog/product-marketing-co-to"

        keywords="Product Marketing co to jest, Product Marketing definicja, czym jest Product Marketing, Product Marketing w marketingu, Product Marketing przykłady, jak działa Product Marketing, Product Marketing strategia"
      />
      <ArticleSchema
        title="Product Marketing — co to jest? Marketing produktu B2B SaaS"
        description="Czym jest product marketing, rola Product Marketing Manager (PMM) vs Product Manager, launching produktu, positioning, messaging i metryki."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/product-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Package className="w-4 h-4" /> B2B / SaaS</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Product Marketing — co to jest i za co odpowiada PMM?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Product Marketing Manager to most między produktem a rynkiem — odpowiada za positioning, messaging i launche.
                PMM nie buduje produktu. PMM sprawia że rynek rozumie jego wartość.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Zakres odpowiedzialności Product Marketing Managera</h2>
              <div className="space-y-3 mb-6">
                {pmrResponsibilities.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{r.resp}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">PM vs PMM — kluczowe różnice</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Rola</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Fokus</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Metryki</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pmmVspm.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.role}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.focus}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.metric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Launchujesz nowy produkt lub feature?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Landing pages, case studies i content marketingowy — budujemy materiały które komunikują wartość Twojego produktu.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony produktowe — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Product Marketing co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Pomożemy zakomunikować wartość Twojego produktu rynkowi"
          subheading="Strony produktowe, case studies i content — tworzymy materiały które wspierają positioning i sprzedaż."
        />
      </Layout>
    </>
  );
}
