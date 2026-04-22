import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, BarChart2, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogRevenueOperationsCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Revenue Operations (RevOps) — co to jest?" },
  ];

  const revopsVsOps = [
    {
      role: "Sales Ops",
      focus: "Efektywność zespołu sprzedaży — quotas, territories, forecasting, CRM hygiene.",
      tools: "Salesforce, Gong, Clari, CPQ.",
      scope: "Post-MQL do Closed Won.",
    },
    {
      role: "Marketing Ops",
      focus: "Infrastruktura marketingowa — automation, tracking, attribution, tech stack.",
      tools: "HubSpot, Marketo, Segment, GA4.",
      scope: "Pre-MQL, lead generation, nurturing.",
    },
    {
      role: "Customer Success Ops",
      focus: "Retencja i ekspansja — health score, churn prediction, renewal management.",
      tools: "Gainsight, ChurnZero, Totango.",
      scope: "Post-Closed Won, renewal, expansion.",
    },
    {
      role: "Revenue Operations (RevOps)",
      focus: "Unifikacja wszystkich trzech — jeden team, jedna data, jeden revenue funnel od leadu do ekspansji.",
      tools: "Cały stack — CRM (Salesforce/HubSpot), BI (Looker), CDP (Segment), + wszystkie powyższe.",
      scope: "Cały customer lifecycle — od awareness do advocacy.",
    },
  ];

  const revopsFunctions = [
    { function: "Revenue Tech Stack", desc: "Zarządzanie narzędziami: CRM, marketing automation, sales engagement, CS platforms. Integracje, data flows, governance." },
    { function: "Revenue Analytics & Reporting", desc: "Jeden source of truth dla metryk — pipeline, forecast, CAC, LTV, NRR. BI dashboards dla leadership." },
    { function: "Process Design & Optimization", desc: "Projektowanie i optymalizacja procesów od leadu do odnowienia. Eliminacja friction w handoff między marketing-sales-CS." },
    { function: "Forecasting & Planning", desc: "Prognozowanie przychodów, planowanie headcount, quota setting. Aktualizacja co tydzień (rolling forecast)." },
    { function: "Data Governance", desc: "Czystość danych w CRM i systemach. Standardy namingu, deduplication, enrichment. Bez czystych danych RevOps nie działa." },
    { function: "GTM Enablement", desc: "Wsparcie sales, marketing i CS w egzekucji — playbooks, szkolenia, content, battlecards, onboarding nowych pracowników." },
  ];

  const faqItems = [
    {
      question: "Co to jest Revenue Operations (RevOps)?",
      answer: "Revenue Operations (RevOps) to funkcja biznesowa która łączy operacje sprzedaży (Sales Ops), marketingu (Marketing Ops) i obsługi klienta (Customer Success Ops) w jedną, zintegrowaną strukturę — z celem maksymalizacji przychodów przez cały cykl życia klienta. Zamiast 3 oddzielnych 'silosów operacyjnych' które często działają z różnymi danymi i priorytetami, RevOps tworzy jeden team z jednym source of truth. Dlaczego RevOps powstał: tradycyjne podejście (oddzielne ops) powoduje: różne definicje metryk w każdym teamie (co to 'lead'?), friction w handoff między marketing, sales i CS, zduplikowane systemy (3 CRM, 3 automation tools), brak pełnego widoku na customer lifecycle. RevOps rozwiązuje to przez unified data, unified processes, unified reporting. Firmy z RevOps rosną 19% szybciej wg Forrester.",
    },
    {
      question: "Jaka jest różnica między RevOps a Sales Ops?",
      answer: "Sales Ops vs RevOps — ewolucja: Sales Operations: skupia się wyłącznie na efektywności zespołu sprzedaży. Zakres: od MQL do Closed Won. Narzędzia sprzedażowe (Salesforce, Gong). Nie dotyka marketingu ani CS. Revenue Operations: rozszerza Sales Ops o Marketing Ops i CS Ops. Zakres: cały customer lifecycle (od awareness do renewal/expansion). Jeden revenue funnel zamiast 3 oddzielnych. Unified reporting i data. Kiedy Sales Ops wystarczy: mała firma (poniżej 50 pracowników), sprzedaż jest jedynym 'gtm muscle', prosty product line. Kiedy potrzebujesz RevOps: masz oddzielne marketing, sales i CS teams, widzisz friction w handoff między tymi teamami, metryki są różne w różnych systemach, skalujesz agresywnie i potrzebujesz predictable revenue growth. Praktyczny opis: RevOps to Sales Ops który wziął odpowiedzialność za cały revenue engine, nie tylko sprzedaż.",
    },
    {
      question: "Jak zbudować RevOps w firmie?",
      answer: "Budowanie RevOps — etapy: Etap 1: Audit stanu obecnego (4-8 tygodni). Jakie systemy mamy? Jak przepływają dane? Gdzie są 'dziury'? Jak definiujemy metryki w każdym teamie? Jakie są handoff problemy? Etap 2: Unified data i CRM (2-4 miesiące). Jeden CRM jako source of truth. Jednolite definicje: co to lead, MQL, SQL, opportunity, customer? Integracje między systemami. Data governance policies. Etap 3: Unified reporting (1-2 miesiące). Jeden dashboard dla leadership — pipeline, forecast, CAC, LTV, NRR. RevOps owns the numbers, nie poszczególne teams. Etap 4: Process optimization (ongoing). Map the revenue process end-to-end. Identyfikuj friction points. Optymalizuj handoffs. Etap 5: Predictive analytics (zaawansowane). Churn prediction, deal scoring, forecast accuracy. Wymagania: executive sponsorship (RevOps musi raportować do CRO lub CEO), dedykowany team lub osoba, budget na tech stack konsolidację.",
    },
    {
      question: "Jakie narzędzia używa RevOps?",
      answer: "Tech stack RevOps: CRM (core): Salesforce (enterprise), HubSpot (SMB/mid-market), Pipedrive (SMB). CRM to centrum wszystkiego — wszystkie inne narzędzia powinny integrować się z CRM. Marketing Automation: HubSpot Marketing, Marketo, Pardot (Salesforce). Sales Engagement: Outreach, Salesloft — sekwencje emailowe, dialer, tracking. Revenue Intelligence: Gong, Chorus — nagrywanie rozmów, deal scoring, forecast AI. Forecasting: Clari, Aviso — AI-powered revenue forecasting. CS Platforms: Gainsight, ChurnZero, Totango — health scoring, renewal management. BI / Analytics: Looker, Tableau, Power BI — unified dashboards. CDP: Segment, RudderStack — unified customer data. Stack dla startupu (minimum): HubSpot (CRM + marketing) + Gong (conversation intelligence) + Looker/Metabase (BI). Stack dla scale-up: Salesforce + Outreach + Gong + Gainsight + Clari + Segment + Looker. Koszt enterprise stack: 200-500k PLN/rok.",
    },
    {
      question: "Jakie KPI mierzy RevOps?",
      answer: "Metryki RevOps — pełny zestaw: Pipeline metrics: pipeline coverage (pipeline / quota, benchmark: 3x), pipeline velocity (jak szybko przechodzą deale przez stages), stage conversion rates. Revenue metrics: ARR/MRR, NRR (Net Revenue Retention), GRR (Gross Revenue Retention), expansion revenue %. Sales efficiency: win rate, average deal size, sales cycle length, quota attainment. Marketing efficiency: CAC (Customer Acquisition Cost), MQL volume i MQL-SQL rate, marketing-sourced pipeline %. CS efficiency: churn rate, health score distribution, time to onboard. Forecasting accuracy: jak dokładna jest prognoza przychodów vs aktuale? Benchmark: top RevOps teams: plus/minus 5% accuracy. Unified metric — North Star RevOps to najczęściej NRR (Net Revenue Retention) lub Revenue Growth Rate, bo obejmuje zarówno nową sprzedaż jak i retencję/ekspansję. RevOps raportuje te metryki w jednym dashboard dla CEO/CRO/Board.",
    },
    {
      question: "Kiedy firma powinna zatrudnić RevOps Manager?",
      answer: "Sygnały że potrzebujesz RevOps: Marketing i sales mają konflikt o jakość leadów — brak alignment. Masz wiele systemów CRM/marketing i dane się nie zgadzają między nimi. Forecasting jest nierzetelny — CEO nie ufa liczbie pipeline. Handoff od marketingu do sprzedaży do CS jest chaotyczny. Firma skaluje sales team i traci efektywność. Seryjne zatrudnienia handlowców nie przynoszą proporcjonalnego wzrostu. Typowe timing: 20-50 pracowników: pierwsza osoba RevOps/Sales Ops. 50-150: dedykowany RevOps Manager. 150-500: RevOps Director + 2-4 specjalistów (po jednym na sales/marketing/CS ops). 500+: VP RevOps + team. Co szukać w RevOps Manager: doświadczenie z CRM (Salesforce/HubSpot), myślenie analityczne i znajomość SQL/BI, rozumienie całego revenue funnel (nie tylko sprzedaży), umiejętności project management, komunikacja z C-suite. Pensje w Polsce: RevOps Manager: 12-18k PLN/mies. RevOps Director: 18-30k PLN/mies.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Revenue Operations (RevOps) — co to jest? | fotz.pl"
        description="Revenue Operations RevOps co to jest — wyjaśniamy czym jest RevOps, różnica vs Sales Ops, jak zbudować RevOps w firmie, KPI i kiedy zatrudnić RevOps Manager."
        canonical="https://fotz.pl/blog/revenue-operations-revops-co-to"

        keywords="Revenue Operations (RevOps) co to jest, Revenue Operations (RevOps) definicja, czym jest Revenue Operations (RevOps), Revenue Operations (RevOps) przykłady, jak działa Revenue Operations (RevOps), Revenue Operations (RevOps) znaczenie, Revenue Operations (RevOps) przewodnik"
      />
      <ArticleSchema
        title="Revenue Operations (RevOps) — co to jest?"
        description="Czym jest RevOps, różnica vs Sales Ops, budowanie RevOps w firmie, narzędzia, KPI i kiedy zatrudnić Revenue Operations Manager."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/revenue-operations-revops-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><BarChart2 className="w-4 h-4" /> B2B / SaaS Ops</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Revenue Operations (RevOps) — co to jest?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                RevOps łączy Sales Ops, Marketing Ops i Customer Success Ops w jeden team.
                Jeden revenue funnel, jedna data, jeden forecast — firmy z RevOps rosną 19% szybciej.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">RevOps vs Sales Ops vs Marketing Ops vs CS Ops</h2>
              <div className="space-y-3 mb-6">
                {revopsVsOps.map((r, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border ${idx === 3 ? "bg-blue-50 border-blue-200" : "bg-slate-50 border-slate-200"}`}>
                    <p className={`font-bold text-sm mb-1 ${idx === 3 ? "text-blue-900" : "text-slate-900"}`}>{r.role}</p>
                    <p className="text-slate-600 text-xs mb-1">{r.focus}</p>
                    <p className="text-slate-500 text-xs mb-1"><span className="font-medium">Narzędzia:</span> {r.tools}</p>
                    <p className="text-slate-500 text-xs"><span className="font-medium">Zakres:</span> {r.scope}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Funkcje Revenue Operations</h2>
              <div className="space-y-3 mb-6">
                {revopsFunctions.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{f.function}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Skalujesz procesy sprzedaży i marketingu B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony B2B, case studies i materiały sprzedażowe — content który wspiera cały revenue funnel.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Content i strony B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Revenue Operations co to jest</h2>
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
        />
      </Layout>
    </>
  );
}
