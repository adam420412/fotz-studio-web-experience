import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Briefcase, TrendingUp, CheckCircle2, Users } from "lucide-react";
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

export default function BlogSalesEnablementCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Sales Enablement — co to jest? Wsparcie sprzedaży" },
  ];

  const enablementPillars = [
    {
      pillar: "Content i materiały sprzedażowe",
      examples: "Deck prezentacyjny, case studies, broszury produktowe, one-pagery, porównania z konkurencją (battle cards), FAQ dla handlowców.",
      why: "Handlowcy marnują 30% czasu na szukanie lub tworzenie materiałów. Sales enablement centralizuje gotowe do użycia zasoby.",
    },
    {
      pillar: "Szkolenia i onboarding",
      examples: "Sales playbook, skrypty rozmów, szkolenia produktowe, roleplaying scenariusze obiekcji, certyfikacja wiedzy.",
      why: "Nowi handlowcy osiągają pełną produktywność po 6-12 miesiącach. Dobry onboarding skraca ten czas o 30-50%.",
    },
    {
      pillar: "Technologia i narzędzia",
      examples: "CRM (Salesforce, HubSpot), sales intelligence (LinkedIn Sales Navigator), video prospecting (Loom), e-signature (DocuSign), conversation intelligence (Gong).",
      why: "Właściwe narzędzia eliminują manualną pracę i dają handlowcom więcej czasu na sprzedaż.",
    },
    {
      pillar: "Alignment marketing-sprzedaż",
      examples: "Wspólna definicja ICP (Ideal Customer Profile), SLA (Service Level Agreement) między marketingiem a sprzedażą, feedback loop o jakości leadów.",
      why: "Firmy z silnym alignmentem marketing-sprzedaż mają 67% wyższy win rate i 208% wyższy przychód z marketingu.",
    },
    {
      pillar: "Analityka i KPI",
      examples: "Win rate per segment, ramp time nowych handlowców, czas cyklu sprzedaży, content usage analytics, quota attainment.",
      why: "Bez danych nie wiesz co działa. Analityka pozwala optymalizować program sales enablement oparty na wynikach.",
    },
  ];

  const faqItems = [
    {
      question: "Co to jest sales enablement?",
      answer: "Sales enablement (wsparcie sprzedaży) to systematyczne podejście do wyposażenia zespołu sprzedaży w zasoby, narzędzia, wiedzę i treści potrzebne do efektywnego angażowania kupujących na każdym etapie procesu zakupowego. Sales enablement obejmuje: materiały sprzedażowe (decks, case studies, battle cards), szkolenia i coaching handlowców, technologie sprzedażowe (CRM, sales intelligence), alignment marketingu i sprzedaży wokół ICP i procesu zakupowego. Cel: skrócić ramp time nowych handlowców, zwiększyć win rate, przyspieszić cykl sprzedaży. Sales enablement to szczególnie ważne w B2B SaaS i enterprise sprzedaży, gdzie decyzja zakupowa jest skomplikowana i wieloetapowa.",
    },
    {
      question: "Jaka jest różnica między sales enablement a sales training?",
      answer: "Sales Training — jednorazowe lub cykliczne szkolenia handlowców: szkolenia produktowe, techniki negocjacji, metodologie sprzedaży (SPIN, MEDDIC, Challenger). Efekt zanika po 3-6 miesiącach bez reinforcement. Sales Enablement — ciągły, systemowy program: łączy szkolenia z materiałami, narzędziami i procesami. Reinforcement przez coaching, roleplaying i real-time support. Mierzy wpływ na wyniki sprzedaży (nie tylko 'co handlowcy się nauczyli'). Sales Enablement = Sales Training + Content + Technology + Coaching + Alignment. Analogia: Sales training uczy pływać, Sales enablement daje basen, trenera, właściwy strój i mierzy wyniki w zawodach.",
    },
    {
      question: "Jakie narzędzia są używane w sales enablement?",
      answer: "Kategorie narzędzi sales enablement: Platformy SE: Seismic, Highspot, Showpad — centralizacja contentu, analytics, training w jednym miejscu. CRM: Salesforce, HubSpot, Pipedrive — śledzenie lejka, aktywności, prognozowanie. Sales Intelligence: LinkedIn Sales Navigator, ZoomInfo, Apollo.io — enrichment danych o leadach i firmach. Conversation Intelligence: Gong, Chorus, Jiminny — nagrywanie i analiza rozmów sprzedażowych. Video Prospecting: Loom, Vidyard — personalizowane wideo dla prospectów. E-signature: DocuSign, PandaDoc — szybsze zamykanie umów. Sales Engagement: Salesloft, Outreach — automatyzacja sekwencji outreach. Dla startupów i SMB zacznij od: HubSpot CRM (free), LinkedIn Sales Navigator, Notion/Google Drive jako repozytorium contentu, Loom dla video.",
    },
    {
      question: "Jak mierzyć efektywność sales enablement?",
      answer: "KPI sales enablement podzielone na kategorie: Efektywność sprzedaży: Win rate (% wygranych szans), Average deal size, Sales cycle length, Quota attainment (% handlowców realizujących target). Onboarding i training: Ramp time (czas do pierwszej sprzedaży), Training completion rate, Knowledge assessment scores. Content: Content usage (które materiały są najczęściej używane), Content-to-close rate (jakie materiały korelują z wygraniem). Alignment marketing-sprzedaż: Lead velocity, MQL to SQL conversion rate, Marketing sourced pipeline %. Jak zbierać dane: Platforma SE (Seismic, Highspot) daje analytics contentu, CRM daje dane sprzedażowe, Conversation intelligence (Gong) daje insights z rozmów. Kluczowe: nie mierz inputów (ile szkoleń zorganizowałeś) — mierz outputy (czy wzrósł win rate i przychód).",
    },
    {
      question: "Jak zbudować sales playbook?",
      answer: "Sales playbook to ustrukturyzowany przewodnik dla handlowców zawierający wszystko potrzebne do skutecznej sprzedaży. Struktura sales playbook: 1) Profil Idealnego Klienta (ICP) — firmografia, stanowiska decydentów, triggery zakupowe. 2) Propozycja wartości — dlaczego my, differentiatory, elevator pitch dla różnych person. 3) Proces sprzedaży — etapy lejka, kryteria przejścia, działania na każdym etapie. 4) Discovery questions — pytania do kwalifikacji i identyfikacji pain pointów. 5) Obsługa obiekcji — typowe obiekcje (cena, konkurencja, timing) i odpowiedzi. 6) Battle cards — porównanie z konkurencją (jak wygrywamy vs X). 7) Materiały per etap lejka — co wysłać na każdym etapie procesu zakupowego. Format: Notion, Confluence, specjalizowane platformy SE. Kluczowe: playbook musi być żywym dokumentem — aktualizuj co kwartał z feedbackiem od handlowców.",
    },
    {
      question: "Kiedy firma powinna inwestować w sales enablement?",
      answer: "Sygnały że potrzebujesz formalnego sales enablement: 1) Skala — masz więcej niż 5-10 handlowców i wyniki są bardzo różne między nimi (top performer vs reszta). 2) Ramp time — nowi handlowcy potrzebują >6 miesięcy by być produktywni. 3) Content chaos — handlowcy sami tworzą materiały lub używają nieaktualnych. 4) Alignment problemy — marketing generuje leady, sprzedaż je odrzuca (lub odwrotnie). 5) Skalowalność — planujesz szybki growth hiring. Kiedy jeszcze nie potrzebujesz: bardzo mały zespół (<5 handlowców), founder-led sales, prosty produkt z krótkim cyklem sprzedaży. Kto buduje sales enablement: duże firmy mają dedykowany team lub Sales Enablement Managera. Mniejsze — marketing lub RevOps bierze tę odpowiedzialność. Budżet: dolicz 5-10% budżetu sprzedaży na enablement narzędzia i materiały.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sales Enablement — co to jest? Wsparcie sprzedaży w B2B | fotz.pl"
        description="Sales enablement co to jest — wyjaśniamy czym jest wsparcie sprzedaży, filary (content, szkolenia, narzędzia), jak mierzyć efektywność i jak zbudować sales playbook."
        canonical="https://fotz.pl/blog/sales-enablement-co-to"

        keywords="Sales Enablement co to jest, Sales Enablement definicja, czym jest Sales Enablement, Sales Enablement w sprzedaży, Sales Enablement strategia, Sales Enablement przykłady, jak używać Sales Enablement"
      />
      <ArticleSchema
        title="Sales Enablement — co to jest? Wsparcie sprzedaży w B2B"
        description="Czym jest sales enablement, filary programu, narzędzia, KPI, różnica vs sales training i jak zbudować sales playbook dla zespołu sprzedaży."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/sales-enablement-co-to"
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
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> Sales B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Sales Enablement — co to jest i jak wspierać sprzedaż?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Sales enablement wyposaża handlowców w treści, narzędzia i wiedzę do skutecznej sprzedaży.
                Firmy z SE mają 67% wyższy win rate.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Filary sales enablement</h2>
              <div className="space-y-4 mb-6">
                {enablementPillars.map((p, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-sm mb-2">{p.pillar}</p>
                    <p className="text-slate-600 text-xs mb-2"><span className="font-medium">Przykłady:</span> {p.examples}</p>
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-green-700 text-xs">{p.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zbudować efektywny proces sprzedaży?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzenie stron dla biznesów B2B — landing pages, case studies i materiały wspierające sprzedaż.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Sales Enablement co to jest</h2>
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
          heading="Zbudujemy materiały sprzedażowe dla Twojego zespołu"
          subheading="Case studies, landing pages i decks — content który wspiera handlowców na każdym etapie procesu zakupowego."
        />
      </Layout>
    </>
  );
}
