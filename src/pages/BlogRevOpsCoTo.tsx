import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, BarChart2, Users, Zap } from "lucide-react";
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

export default function BlogRevOpsCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "RevOps — co to jest? Revenue Operations" },
  ];

  const revopsTeams = [
    { team: "Marketing Ops", desc: "Zarządzanie narzędziami marketingowymi (HubSpot, Marketo), atrybucja, automatyzacja kampanii, dane o leadach." },
    { team: "Sales Ops", desc: "CRM (Salesforce), procesy sprzedaży, forecasting, onboarding nowych sprzedawców, narzędzia sprzedażowe." },
    { team: "Customer Success Ops", desc: "Narzędzia do zarządzania klientami, metryki retencji, procesy onboardingu, raportowanie NPS i churn." },
    { team: "Finance Ops", desc: "Billing, revenue recognition, pricing ops — integracja z danymi sprzedażowymi dla dokładnego forecastu." },
  ];

  const faqItems = [
    {
      question: "Co to jest RevOps?",
      answer:
        "RevOps (Revenue Operations) to funkcja organizacyjna która łączy operacje marketingu, sprzedaży i customer success pod jednym dachem, aby zoptymalizować całą ścieżkę generowania przychodu. Zamiast trzech silosów (Marketing Ops, Sales Ops, CS Ops) działających niezależnie — RevOps unifikuje dane, procesy i narzędzia. Cel RevOps: eliminacja tarcia między działami które prowadzi do utraconego przychodu. RevOps jest coraz popularniejszy w firmach SaaS i B2B scale-up (powyżej 50-100 pracowników).",
    },
    {
      question: "Czym różni się RevOps od Sales Ops?",
      answer:
        "Sales Ops (Sales Operations) zarządza wyłącznie operacjami sprzedaży: CRM, procesy sprzedażowe, forecasting, onboarding handlowców, narzędzia sprzedażowe (Outreach, Gong). RevOps to szersze pojęcie — obejmuje Sales Ops PLUS Marketing Ops PLUS Customer Success Ops. RevOps zapewnia integralność danych przez cały lejek: od pierwszego kontaktu z marketingiem, przez sprzedaż, aż po onboarding i retencję klienta. Sales Ops odpowiada: 'Czy sprzedawcy mają właściwe narzędzia?'. RevOps odpowiada: 'Czy cały lejek przychodu działa optymalnie?'",
    },
    {
      question: "Jakie narzędzia używa RevOps?",
      answer:
        "Typowy stack RevOps: CRM: Salesforce (enterprise), HubSpot (SMB), Pipedrive. Marketing automation: HubSpot, Marketo, Pardot. Sales engagement: Outreach, Salesloft, Apollo. Revenue Intelligence: Gong, Chorus, Clari. Data/Analytics: Tableau, Looker, Metabase, dbt. Data enrichment: Clearbit, ZoomInfo, Apollo. Customer Success: Gainsight, ChurnZero, Totango. Revenue/Billing: Stripe, Chargebee, Maxio. Integracja danych: Fivetran, Segment, Zapier. Stack RevOps firmy SaaS serii B może kosztować 50-200 tys. USD rocznie.",
    },
    {
      question: "Kiedy firma potrzebuje RevOps?",
      answer:
        "Sygnały że czas na RevOps: 1) Marketing i sprzedaż kłócą się o jakość leadów — brak wspólnej definicji MQL i SQL. 2) Dane w CRM są niespójne — handlowcy nie aktualizują, raporty są niewiarygodne. 3) Forecast jest niedokładny — nie wiadomo czy cel kwartalny zostanie osiągnięty. 4) Onboarding klientów jest chaotyczny — CS nie wie co sprzedawcy obiecali klientowi. 5) Narzędzia nie są zintegrowane — dane trzeba łączyć ręcznie w Excelu. Typowo RevOps wdraża się gdy firma osiąga 50-100+ pracowników lub 2-5M ARR.",
    },
    {
      question: "Jak wygląda struktura RevOps?",
      answer:
        "Modele organizacji RevOps: Centralny RevOps: jeden zespół RevOps obsługuje marketing, sprzedaż i CS. Typowy w firmach 100-500 pracowników. VP/Head of RevOps raportuje do CRO lub CEO. Embedded + Central: specjaliści Ops osadzeni w każdym dziale PLUS centralna funkcja RevOps dla danych i strategii. Typowy w firmach 500+ pracowników. Typowe role: VP/Director of Revenue Operations, Revenue Operations Manager, Marketing Operations Specialist, Sales Operations Analyst, BI/Data Analyst (Revenue). Trend: w Polsce RevOps dopiero raczkuje — to szansa dla firm które wdrożą go jako pierwsze w swojej niszy.",
    },
    {
      question: "Jakie KPI mierzy RevOps?",
      answer:
        "KPI Revenue Operations: Pipeline Velocity: jak szybko deal przechodzi przez lejek. MQL to SQL Conversion Rate: jakie % marketingowych leadów kwalifikuje sprzedaż. Sales Cycle Length: średni czas zamknięcia deala. Win Rate: % szans sprzedażowych które zamykamy. Revenue Forecast Accuracy: jak dokładnie przewidujemy przychody (cel: ±5%). Customer Acquisition Cost (CAC) i LTV. Time to Revenue: od pierwszego kontaktu do zakupu. Net Revenue Retention (NRR): ile przychodu zachowujemy z istniejących klientów. Churn Rate. Wszystkie KPI RevOps są mierzone przez cały lejek — nie tylko dla jednego działu.",
    },
  ];

  return (
    <>
      <SEOHead
        title="RevOps — co to jest? Revenue Operations w firmie SaaS | fotz.pl"
        description="RevOps co to jest — wyjaśniamy czym jest Revenue Operations, różnica RevOps vs Sales Ops, narzędzia RevOps, kiedy wdrożyć i kluczowe KPI."
        canonical="https://fotz.pl/blog/revops-co-to-jest"
      />
      <ArticleSchema
        title="RevOps — co to jest? Revenue Operations w firmie SaaS"
        description="Czym jest RevOps (Revenue Operations), różnica RevOps vs Sales Ops, narzędzia, struktura organizacyjna, kiedy wdrożyć i kluczowe metryki Revenue Operations."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/revops-co-to-jest"
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
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> Operacje przychodowe</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                RevOps — co to jest i jak Revenue Operations optymalizuje przychody?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                RevOps (Revenue Operations) unifikuje marketing, sprzedaż i customer success
                aby wyeliminować silosy i zoptymalizować cały lejek przychodu. Narzędzia, KPI i wdrożenie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Co obejmuje RevOps?</h2>
              <div className="space-y-3 mb-6">
                {revopsTeams.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Users className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.team}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">RevOps vs. tradycyjne silosy</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-red-400 font-bold mb-2">❌ Bez RevOps</p>
                    <ul className="space-y-1 text-slate-400 text-xs">
                      <li>Marketing i sprzedaż kłócą się o leady</li>
                      <li>Dane w 3 różnych systemach</li>
                      <li>Forecast oparty na "feeling"</li>
                      <li>CS nie wie co obiecała sprzedaż</li>
                      <li>Raportowanie zajmuje dni</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-green-400 font-bold mb-2">✓ Z RevOps</p>
                    <ul className="space-y-1 text-slate-400 text-xs">
                      <li>Wspólna definicja MQL/SQL/PQL</li>
                      <li>Jeden source of truth (CRM/BI)</li>
                      <li>Forecast oparty na danych</li>
                      <li>Pełna historia klienta widoczna</li>
                      <li>Automatyczne dashboardy w real-time</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz dojrzałą organizację sprzedażową?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona i marketing to fundament lejka RevOps — pomagamy budować pipeline który zasila CRM danymi.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — RevOps co to jest</h2>
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
          heading="Zoptymalizuj lejek przychodowy swojej firmy"
          subheading="Marketing, strona i SEO jako fundament skutecznego RevOps — budujemy pipeline który konwertuje."
        />
      </Layout>
    </>
  );
}
