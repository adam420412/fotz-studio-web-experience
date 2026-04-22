import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Star, Users, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogCustomerSuccessCoTo() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Customer Success — co to jest i jak wdrozyc?" },
  ];

  const csMetrics = [
    { metric: "Net Revenue Retention (NRR)", desc: "Procent przychodu zachowanego + expansion MRR. Cel: powyzej 110%.", target: "> 110%" },
    { metric: "Customer Health Score", desc: "Wskaznik zdrowia klienta na podstawie aktywnosci, adopcji funkcji, NPS i ticketow.", target: "Zielony / Zolty / Czerwony" },
    { metric: "Time to Value (TTV)", desc: "Czas od zakupu do pierwszego sukcesu klienta. Krotszy TTV = nizszy churn.", target: "Krotszy = lepiej" },
    { metric: "Churn Rate", desc: "Procent klientow lub MRR traconych miesiecznie. CS ma za zadanie minimalizowac churn.", target: "< 2%/mies." },
    { metric: "Expansion MRR", desc: "Dodatkowy MRR z upsellingu i cross-sellingu przez CSM. Najlepsze CS teams maja negative churn.", target: "> Churned MRR" },
    { metric: "NPS (Net Promoter Score)", desc: "Skala lojalnosci klientow — podstawowe narzedzie pomiaru satysfakcji.", target: "> 50" },
  ];

  const faqItems = [
    {
      question: "Co to jest Customer Success?",
      answer:
        "Customer Success (CS) to strategia i funkcja biznesowa skupiona na zapewnieniu ze klienci osiagaja swoje cele biznesowe przez uzycie Twojego produktu lub uslugi — co prowadzi do ich lojalnosci, expansji i polecen. CS rozni sie od tradycyjnej obslugi klienta (Support): Support reaguje na problemy (reactive), CS proaktywnie dziala by problemy nie wystapily (proactive). CS rozni sie od Account Management: AM skupia sie na relacji i odnowie kontraktu, CS skupia sie na adopcji produktu i sukcesie klienta. CS jest krytyczny w SaaS — klienci placa subskrypcyjnie i moga odejsc w kazdej chwili.",
    },
    {
      question: "Czym rozni sie Customer Success od Customer Support?",
      answer:
        "Customer Support (Supportu): Reaktywny — czeka az klient zglosizproblem. Skupia sie na rozwiazaniu konkretnego problemu technicznego. Metryki: czas odpowiedzi, CSAT ticketow, liczba rozwiazan. Zazwyczaj przynoszacy koszty (cost center). Customer Success: Proaktywny — kontaktuje sie z klientem zanim pojawia sie problemy. Skupia sie na osiagnieciu przez klienta jego celow biznesowych. Metryki: NRR, churn rate, expansion MRR, NPS, health score. Powinien byc centrum zysku (profit center) — expanasja i odnawianie kontraktow. Najlepsze firmy maja oba — Support jako safety net, CS jako silnik wzrostu.",
    },
    {
      question: "Jakie sa zadania Customer Success Managera (CSM)?",
      answer:
        "Zadania CSM (Customer Success Manager): Onboarding — prowadzenie nowego klienta przez pierwsze 30-90 dni az do pierwszego sukcesu. Business Reviews — regularne spotkania (QBR — Quarterly Business Reviews) omowienie wynikow, planow i rozszerzenia. Health Monitoring — sledzi health score i proaktywnie reaguje na czerwone flagi. Upsell/Cross-sell — identyfikuje okazje do rozszerzenia wspolpracy i przekazuje je do sprzedazy (lub sam zamyka). Zbieranie feedbacku — przekazuje potrzeby klientow do produktu. Renewal Management — odnawianie kontraktow, negocjacje. Advocacy — zamiana zadowolonych klientow w case studies, referrale i promotorów marki.",
    },
    {
      question: "Jak zbudowac program Customer Success?",
      answer:
        "Kroki do wdrozenia Customer Success: 1) Zdefiniuj sukces klienta — co klient chce osiagnac uzywajac Twojego produktu? Jakie sa jego metryki sukcesu? 2) Podziel klientow na segmenty — np. Enterprise (high-touch, dedykowany CSM), Mid-market (tech-touch, scalowany), SMB (low-touch, self-serve + automation). 3) Stwórz playbooki — onboarding playbook, at-risk playbook, expansion playbook. 4) Zbuduj health score — automatyczne metryki zdrowia klienta w platformie CS (Gainsight, ChurnZero, Planhat). 5) Ustal QBR cadence — jak czesto spotykasz sie z kazdym segmentem. 6) Mierz NRR jako glowna metryka sukcesu teamu CS.",
    },
    {
      question: "Kiedy zatrudnic pierwszego Customer Success Managera?",
      answer:
        "Sygnaly do zatrudnienia pierwszego CSM: Zaczynacie miec klientow ktorzy churnnuja po 3-6 miesiacach bez wyraznego powodu. MRR powyzej 50 000 - 100 000 zl/mies. — jest co chronic. Sprzedaz jest mocna ale LTV jest niska — klienci kupuja ale odchodza. Wasz product nie jest self-serve — wymaga onboardingu i wsparcia. Macie 50+ klientow i nie macie jak wszystkich pilnowac. Model: dla pierwszych 100-200 klientow jeden CSM jest w stanie obsluzyc 50-100 klientow (high-touch enterprise) lub 200-500 (low-touch SMB). CSM to zwrot z inwestycji przez nizszy churn i wyzszy expansion MRR.",
    },
    {
      question: "Jakie narzedzia uzywac w Customer Success?",
      answer:
        "Platformy Customer Success: Enterprise: Gainsight — nejbardziej rozbudowana platforma CS, health scoring, playbooki, NPS. Churnzero — specjalizuje sie w SaaS CS, dobre integracje. Planhat — nowoczesna platforma dla sred-market. Totango — modularny, latwy start. Mid-market i startups: HubSpot Service Hub — dobre dla firm juz w HubSpot ekosystemie. Intercom — laczenie CS z supportem i in-app messaging. Salesforce Service Cloud — dla firm na Salesforce. Narzedzia dodatkowe: Typeform/Survicate — NPS surveys. Loom — video onboarding i komunikacja. Notion/Confluence — playbooki i baza wiedzy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Customer Success — co to jest i jak wdrozyc? | fotz.pl"
        description="Customer Success co to jest — wyjasnamy czym jest CS, roznica vs Customer Support, zadania CSM, jak zbudowac program CS i metryki sukcesu klienta."
        canonical="https://fotz.pl/blog/customer-success-co-to"

        keywords="Customer Success co to jest, Customer Success definicja, czym jest Customer Success, Customer Success przykłady, jak działa Customer Success, Customer Success znaczenie, Customer Success przewodnik"
      />
      <ArticleSchema
        title="Customer Success — co to jest i jak wdrozyc?"
        description="Czym jest Customer Success, roznica vs Support, zadania CSM, jak wdrozyc program CS w SaaS, metryki NRR, health score i narzedzia."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/customer-success-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> SaaS i subskrypcje</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Customer Success — co to jest i jak wdrozyc?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Customer Success to proaktywna strategia zapewniajaca ze klienci osiagaja swoje cele.
                CS vs Support, zadania CSM, metryki i narzedzia.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe metryki Customer Success</h2>
              <div className="space-y-2 mb-6">
                {csMetrics.map((m, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-slate-50 rounded-lg border border-slate-200 gap-3">
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-sm">{m.metric}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{m.desc}</p>
                    </div>
                    <span className="text-blue-600 text-xs font-medium whitespace-nowrap">{m.target}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Modele obslugi w CS — High-Touch vs Low-Touch</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Model</th>
                      <th className="text-left p-3 border border-slate-700">Klienci</th>
                      <th className="text-left p-3 border border-slate-700">Kontakt</th>
                      <th className="text-left p-3 border border-slate-700">Dla kogo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { model: "High-Touch", klienci: "20-100/CSM", kontakt: "Codziennie/tygodniowo", dlaKogo: "Enterprise, ACV > 50k PLN" },
                      { model: "Tech-Touch", klienci: "200-500/CSM", kontakt: "Miesiecznie + automation", dlaKogo: "Mid-market, ACV 10-50k PLN" },
                      { model: "Low-Touch / Self-Serve", klienci: "1000+/CSM", kontakt: "Email/in-app automation", dlaKogo: "SMB, ACV < 10k PLN" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.model}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.klienci}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.kontakt}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.dlaKogo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Star className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zmniejszyc churn przez lepszy onboarding i UX strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy doswiadczenia ktore prowadza klientow do sukcesu — szybszy TTV, nizszy churn, wyzszy NPS.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Customer Success co to jest</h2>
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
