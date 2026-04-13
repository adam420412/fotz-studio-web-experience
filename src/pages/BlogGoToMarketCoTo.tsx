import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Rocket, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogGoToMarketCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Go-to-Market Strategy — co to jest? Strategia wejścia na rynek" },
  ];

  const gtmMotions = [
    {
      motion: "Sales-Led Growth (SLG)",
      desc: "Sprzedaż napędza wzrost — handlowcy (AE) aktywnie pozyskują klientów przez outbound, demos i negocjacje.",
      bestFor: "Enterprise B2B, złożone produkty wymagające customizacji, długi cykl sprzedaży.",
      examples: "Salesforce, Oracle, SAP.",
      metrics: "Quota attainment, win rate, average deal size, sales cycle length.",
    },
    {
      motion: "Marketing-Led Growth (MLG)",
      desc: "Marketing napędza wzrost przez content, SEO, reklamy i kampanie, generując inbound leady dla sprzedaży.",
      bestFor: "SMB i mid-market, powtarzalne produkty z jasnym ICP, sprawdzone messaging.",
      examples: "HubSpot (w fazie wzrostu), większość B2B SaaS.",
      metrics: "CAC, MQL volume, MQL-SQL rate, inbound pipeline.",
    },
    {
      motion: "Product-Led Growth (PLG)",
      desc: "Produkt sam napędza akwizycję, konwersję i ekspansję — przez free trial, freemium lub viral loops wbudowane w produkt.",
      bestFor: "SMB, deweloperzy, produkty z wyraźną wartością per user, niski ARPU ale duże wolumeny.",
      examples: "Slack, Notion, Figma, Dropbox, Calendly.",
      metrics: "Activation rate, time-to-value, PQL (Product Qualified Lead), expansion revenue.",
    },
    {
      motion: "Community-Led Growth (CLG)",
      desc: "Społeczność (community) napędza akwizycję przez word-of-mouth, referrals i content tworzony przez użytkowników.",
      bestFor: "Developer tools, creator platforms, niszowe produkty z dużym passion wśród użytkowników.",
      examples: "GitHub, HashiCorp, dbt Labs.",
      metrics: "Community MAU, referral revenue, UGC volume, community-sourced pipeline.",
    },
  ];

  const gtmComponents = [
    { component: "ICP (Ideal Customer Profile)", desc: "Kto jest Twoim idealnym klientem? Branża, wielkość firmy, stanowisko, problemy, budżet. Bez precyzyjnego ICP GTM jest nieefektywne." },
    { component: "Value Proposition", desc: "Dlaczego klient powinien wybrać Ciebie? Co robisz lepiej lub inaczej niż konkurencja? Jaki konkretny problem rozwiązujesz?" },
    { component: "Positioning i Messaging", desc: "Jak komunikujesz wartość? Jakie słowa rezonują z ICP? Tagline, key messages, tone of voice dostosowane do segmentu." },
    { component: "Pricing Strategy", desc: "Model cenowy (subscription, usage-based, per seat) i poziomy cenowe. Cena jest częścią pozycjonowania — nie tylko kalkulacją kosztów." },
    { component: "Distribution Channels", desc: "Jak docierasz do klientów? Direct sales, partners, marketplace, self-serve, content/SEO. GTM motion decyduje o kanalach." },
    { component: "Launch Plan", desc: "Kiedy i jak wprowadzasz produkt na rynek? Beta users, press, Product Hunt, launch sequence, KPIs na pierwsze 30/60/90 dni." },
  ];

  const faqItems = [
    {
      question: "Co to jest go-to-market strategy?",
      answer: "Go-to-market strategy (GTM strategy, strategia wejścia na rynek) to plan określający jak firma wprowadzi produkt lub usługę na rynek i dotrze do docelowych klientów. GTM strategy odpowiada na pytania: Kto jest naszym ICP (Ideal Customer Profile)? Jaką wartość dostarczamy i jak ją komunikujemy? Przez jakie kanały docieramy do klientów? Jak wygląda proces sprzedaży i onboardingu? Jaki jest model cenowy? Jak mierzymy sukces? GTM strategy jest tworzona przy: wprowadzeniu nowego produktu, wejściu na nowy rynek geograficzny, zmianie segmentu docelowego, rebrandingu lub repositioningu. Różnica GTM vs marketing strategy: GTM to szerszy plan obejmujący sprzedaż, marketing, pricing i dystrybucję. Marketing strategy to część GTM.",
    },
    {
      question: "Jakie są główne GTM motions i kiedy je stosować?",
      answer: "GTM motions — kiedy wybrać które podejście: Sales-Led Growth (SLG): wybierz gdy ACV (Annual Contract Value) jest wysokie (powyżej 10-20k USD), produkt wymaga customizacji i integracji, decyzja zakupowa angażuje wiele osób (komitet zakupowy). Marketing-Led Growth (MLG): wybierz gdy masz powtarzalny produkt dla jasno zdefiniowanego ICP, inbound jest bardziej efektywny niż outbound, CAC przez marketing jest akceptowalny przy danym LTV. Product-Led Growth (PLG): wybierz gdy produkt dostarcza wartość szybko (niski time-to-value), masz viral loop lub network effects, ACV jest niskie ale skala jest duża. Community-Led Growth (CLG): wybierz gdy Twoi klienci są aktywni online (developer communities, creator economy), produkt ma passion wśród użytkowników, content tworzony przez users ma dużą wartość. W praktyce: większość firm łączy motions — np. PLG + SLG (self-serve dla SMB, enterprise sales dla dużych kont).",
    },
    {
      question: "Jak napisać go-to-market plan?",
      answer: "Struktura GTM plan (szablon): 1) Executive Summary — jednoakapitowy opis produktu, rynku i głównych założeń GTM. 2) Market Analysis: TAM/SAM/SOM (wielkość rynku), konkurencja i pozycjonowanie, trendy rynkowe. 3) ICP Definition: firmographic (wielkość, branża, geografia), psychographic (pain points, priorities), buying process (kto decyduje, jak długo?). 4) Value Proposition: core message dla ICP, key differentiators vs konkurencja, proof points (case studies, data). 5) GTM Motion: wybór i uzasadnienie SLG/MLG/PLG/CLG. 6) Pricing Strategy: model, tiers, rationale. 7) Channel Strategy: kanały akwizycji (inbound, outbound, PLG, partnerships), channel mix i alokacja budżetu. 8) Sales Process: od leadu do zamknięcia dealu — stages, activities, tools. 9) Launch Plan: timeline, milestones, responsibilities. 10) KPIs i OKRs: jak mierzymy sukces w 30/60/90 dniach i po roku?",
    },
    {
      question: "Co to jest ICP i jak go zdefiniować?",
      answer: "ICP (Ideal Customer Profile) to szczegółowy opis firmy (B2B) lub osoby (B2C) która odnosi największą wartość z Twojego produktu i jest najbardziej wartościowa dla Ciebie. ICP dla B2B SaaS zawiera: Firmographic: branża, wielkość firmy (pracownicy), przychody, lokalizacja, stage (startup/scaleup/enterprise), technologie których używają. Psychographic: jakie problemy mają? Jakie są ich priorytety? Jakie metryki śledzą? Jak podejmują decyzje zakupowe? Behavioral: jak kupują (self-serve vs vendor evaluation), jak długo trwa decyzja, kto wpływa na zakup. Jak znaleźć ICP: 1) Przeanalizuj 20-30 swoich najlepszych klientów (wysokie ARPU, niski churn, polecają innych). Jakie mają wspólne cechy? 2) Przeprowadź wywiady z tymi klientami — dlaczego kupili, jakie problemy rozwiązałeś? 3) Przeanalizuj churned customers — czym różnili się od retaining? Błąd: zbyt szeroki ICP. 'Każda firma która potrzebuje X' nie jest ICP. ICP powinno wykluczać więcej firm niż włączać.",
    },
    {
      question: "Jak GTM strategy różni się od business strategy?",
      answer: "Business strategy vs GTM strategy: Business strategy: długoterminowy plan firmy — misja, wizja, konkurencyjne przewagi, alokacja zasobów, decyzje o wejściu lub wyjściu z rynków. Horyzont: 3-5+ lat. GTM strategy: plan taktyczny jak wprowadzić konkretny produkt na konkretny rynek. Operacyjna, egzekucyjna. Horyzont: 6-18 miesięcy. Analogia: Business strategy = 'chcemy być liderem w B2B HR tech w Europie'. GTM strategy = 'w Q1 2026 lanchujemy moduł onboardingowy w Niemczech, targetując firmy 200-500 pracowników, przez PLG + inside sales, z ceną 15 EUR/user/mies.'. Kto odpowiada: Business strategy = CEO + board. GTM strategy = CRO, CMO, VP Sales, VP Marketing, Product. Częstotliwość aktualizacji: Business strategy co rok lub przy dużych zmianach. GTM strategy co kwartał lub przy launch każdego produktu.",
    },
    {
      question: "Jakie błędy popełniają firmy w GTM strategy?",
      answer: "Najczęstsze błędy GTM: 1) Za szeroki ICP — 'targetujemy wszystkie firmy powyżej 10 pracowników' = nie targetujesz nikogo. Wąski ICP = lepsze messaging, wyższy win rate. 2) Brak alignment między marketingiem a sprzedażą — marketing generuje leady których sprzedaż nie chce. Rozwiązanie: wspólna definicja MQL/SQL i shared revenue targets. 3) Zbyt szybka ekspansja — firma skaluje GTM przed validated product-market fit. Result: burn rate bez odpowiednich przychodów. 4) Ignorowanie konkurencji — launching bez badania jak pozycjonuje się konkurencja. Win rate spada bo nie masz battlecards. 5) Jeden GTM motion dla wszystkich segmentów — enterprise i SMB potrzebują różnego podejścia. 6) Niedoszacowanie czasu launchu — GTM launches zawsze trwają dłużej niż planowane. Buforuj timeline. 7) Brak closing the loop — nie analizujesz win/loss danych do poprawy GTM. Lessons learned są kluczowe. 8) Pricing ustawiony przez koszty, nie wartość — price to value, nie cost-plus.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Go-to-Market Strategy — co to jest? Strategia wejścia na rynek"
        description="Go-to-Market strategy co to jest — wyjaśniamy czym jest GTM strategy, GTM motions (SLG, MLG, PLG, CLG), ICP, jak napisać GTM plan i najczęstsze błędy."
        canonical="https://fotz.pl/blog/go-to-market-strategy-co-to"

        keywords="Go-to-Market Strategy co to jest, Go-to-Market Strategy definicja, czym jest Go-to-Market Strategy, Go-to-Market Strategy przykłady, jak działa Go-to-Market Strategy, Go-to-Market Strategy znaczenie, Go-to-Market Strategy przewodnik"
      />
      <ArticleSchema
        title="Go-to-Market Strategy — co to jest? Strategia wejścia na rynek"
        description="Czym jest go-to-market strategy, GTM motions (Sales-Led, Marketing-Led, Product-Led, Community-Led), ICP, komponenty GTM i błędy przy planowaniu."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/go-to-market-strategy-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Rocket className="w-4 h-4" /> Strategia / Startup</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Go-to-Market Strategy — co to jest i jak ją zbudować?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                GTM strategy to plan jak firma dotrze do klientów i sprzeda produkt.
                Sales-Led, Marketing-Led, Product-Led czy Community-Led — który GTM motion wybrać?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">GTM Motions — 4 podejścia</h2>
              <div className="space-y-4 mb-6">
                {gtmMotions.map((m, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-1">{m.motion}</p>
                    <p className="text-slate-600 text-xs mb-2">{m.desc}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Kiedy stosować:</span> {m.bestFor}</p>
                    <p className="text-blue-600 text-xs mb-1"><span className="font-medium">Przykłady:</span> {m.examples}</p>
                    <p className="text-slate-500 text-xs"><span className="font-medium">Metryki:</span> {m.metrics}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe komponenty GTM Strategy</h2>
              <div className="space-y-3 mb-6">
                {gtmComponents.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{c.component}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Planujesz launch produktu lub wejście na nowy rynek?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony produktowe, landing pages i kampanie — budujemy GTM assets które wspierają Twoją strategię.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony i content GTM — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Go-to-Market Strategy co to jest</h2>
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
          heading="Pomożemy zbudować GTM strategy i materiały do launchu"
          subheading="Strony produktowe, landing pages i kampanie — wspieramy firmy w skutecznym wejściu na rynek."
        />
      </Layout>
    </>
  );
}
