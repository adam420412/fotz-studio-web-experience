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

export default function BlogAccountManagementCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Account Management — co to jest? Zarządzanie klientami B2B" },
  ];

  const amResponsibilities = [
    { resp: "Onboarding i implementacja", desc: "Wprowadzenie nowego klienta — konfiguracja produktu, szkolenia, pierwsze tygodnie użytkowania. Cel: szybki time-to-value." },
    { resp: "Retencja i odnowienia", desc: "Proaktywne zarządzanie ryzykiem churnu — regularne check-iny, monitoring health score, adresowanie problemów zanim staną się powodem do odejścia." },
    { resp: "Ekspansja (upsell/cross-sell)", desc: "Identyfikacja możliwości rozszerzenia — wyższy pakiet, dodatkowe moduły, więcej użytkowników. Ekspansja = główne źródło wzrostu MRR." },
    { resp: "Advocacy i referrals", desc: "Przekształcenie zadowolonych klientów w ambasadorów marki — case studies, referencje, referrals. G2/Trustpilot reviews." },
    { resp: "QBR (Quarterly Business Review)", desc: "Kwartalne spotkania z klientem — przegląd wyników, ROI z produktu, cele na kolejny kwartał, roadmap." },
    { resp: "Eskalacje i problem solving", desc: "Zarządzanie kryzysami — gdy coś idzie nie tak, AM jest pierwszą linią kontaktu i właścicielem rozwiązania problemu." },
  ];

  const amVsCSVsSales = [
    { role: "Account Manager (AM)", focus: "Retencja, ekspansja, relacja długoterminowa", kpi: "NRR (Net Revenue Retention), upsell revenue, churn rate", timing: "Post-sale, ongoing" },
    { role: "Customer Success (CS)", focus: "Adopcja produktu, osiągnięcie wartości, health score", kpi: "DAU/MAU, feature adoption, NPS, health score", timing: "Post-sale, szczególnie onboarding" },
    { role: "Sales (AE)", focus: "Zamknięcie nowego biznesu lub expansion deali", kpi: "New ARR, quota attainment, win rate", timing: "Pre-sale do close" },
  ];

  const faqItems = [
    {
      question: "Co to jest account management?",
      answer: "Account management (zarządzanie klientami) to funkcja biznesowa odpowiedzialna za budowanie i utrzymanie długoterminowych relacji z klientami B2B po sprzedaży. Account Manager (AM) to punkt kontaktowy klienta w firmie — odpowiedzialny za satysfakcję, sukces i długoterminową wartość relacji. Główne zadania AM: retencja klientów (zapobieganie churn), ekspansja (upsell i cross-sell), regularny kontakt i QBR, rozwiązywanie problemów, budowanie relacji z decision-makers. Account Management różni się od Customer Success (CS): AM skupia się bardziej na biznesowej stronie relacji (umowy, ekspansja, KPI), CS na technicznej adopcji produktu. W praktyce granica między AM i CS bywa płynna i zależy od struktury firmy.",
    },
    {
      question: "Jakie KPI mierzy account manager?",
      answer: "KPI account managera w B2B SaaS i enterprise: Net Revenue Retention (NRR) — % przychodów utrzymanych (z uwzględnieniem ekspansji i churnu) vs rok temu. NRR >100% = wzrost bez nowych klientów. Benchmark top SaaS: NRR 120-140%. Gross Revenue Retention (GRR) — % przychodów utrzymanych bez ekspansji. Tylko churn. Benchmark: >90%. Churn Rate — % klientów lub MRR które odeszły. Upsell/Expansion Revenue — ile nowego MRR wygenerował AM przez upsell/cross-sell. Quota Attainment (Expansion) — AM mają quota na ekspansję, podobnie jak AE na nową sprzedaż. Number of QBR completed — regularność kontaktu. Customer Health Score — zagregowana metryka ryzyka churnu. NPS — Net Promoter Score per account.",
    },
    {
      question: "Jaka jest różnica między account managementem a customer success?",
      answer: "Account Management vs Customer Success — coraz więcej firm ma oba działy: Account Manager (AM): często background sprzedażowy. Skupiony na relacji biznesowej, kontrakcie, odnowieniu, ekspansji. Prowadzi QBR, negocjuje umowy. 'Biznesowy partner' klienta. KPI: NRR, expansion revenue, churn. Customer Success Manager (CSM): często background produktowy lub techniczny. Skupiony na adopcji produktu, osiągnięciu wartości (time-to-value), health score. 'Ekspert w produkcie' dla klienta. KPI: health score, DAU/MAU, feature adoption, NPS. W małych firmach: jedna osoba pełni obie role. W dużych: AM = relacja i biznes, CSM = produkt i wartość. W niektórych firmach te role są odwrócone lub traktowane jako synonimy — zależy od modelu biznesowego.",
    },
    {
      question: "Czym jest Net Revenue Retention (NRR) i jak go obliczać?",
      answer: "Net Revenue Retention (NRR) to kluczowy wskaźnik zdrowia SaaS biznesu — mierzy zdolność firmy do utrzymania i rozwijania istniejących przychodów. Formuła NRR: NRR = (MRR_start + Expansion MRR - Churned MRR - Contraction MRR) / MRR_start × 100%. Przykład: MRR na początku miesiąca: 100k PLN. Expansion (upsell): +20k PLN. Churn: -10k PLN. Contraction (downgrade): -5k PLN. NRR = (100k + 20k - 10k - 5k) / 100k = 105%. Interpretacja: NRR >100% = rosną przychody od istniejących klientów nawet bez nowej sprzedaży. NRR 100% = tracisz tyle co zyskujesz z ekspansji. NRR <100% = firma 'wycieka'. Benchmark: startups: 100-110%. Dobrze: 110-120%. Exceptional: >130% (Slack, Datadog, Snowflake mają 130-150% NRR). NRR >100% to silny sygnał product-market fit i efektywności account management.",
    },
    {
      question: "Jak wygląda dobry QBR (Quarterly Business Review)?",
      answer: "QBR (Quarterly Business Review) to kwartalne spotkanie AM z klientem — przegląd wyników, ROI i planowanie kolejnego kwartału. Struktura dobrego QBR: 1) Przegląd ubiegłego kwartału — co zrobiliśmy razem, wyniki vs cele. 2) Metryki i ROI — ile wartości dostarcza produkt? Twarde liczby (czas zaoszczędzony, revenue wygenerowane, etc.). 3) Wyzwania i feedback — co nie działa, jakie problemy miał klient. 4) Plany na następny kwartał — cele klienta, jak produkt pomaga je osiągnąć. 5) Roadmap update — co budujemy, co planujemy. 6) Ekspansja (opcjonalnie) — jeśli klient gotowy — prezentacja dodatkowych możliwości. Jak zorganizować: nie bój się trudnych rozmów. QBR powinien być szczerou review, nie prezentacją sukcesu. Angażuj sponsora (C-suite) po stronie klienta, nie tylko operacyjnego użytkownika. Czas: 60-90 min. Format: online lub in-person (dla kluczowych klientów).",
    },
    {
      question: "Jak mierzyć customer health score?",
      answer: "Customer health score to zagregowana metryka oceniająca ryzyko churnu i potencjał ekspansji danego klienta. Składniki health score (przykład SaaS): Adoption (40%): aktywni użytkownicy / licencje (DAU/MAU ratio), liczba zalogowań w ostatnim miesiącu, użycie kluczowych featurów. Engagement (30%): uczestnictwo w szkoleniach/webinarach, otwieranie emaili CS, odpowiedzi na check-iny. Outcomes (20%): osiągnięcie zdefiniowanego sukcesu (ROI goal), wyniki które klient zdefiniował na początku. Support (10%): liczba i charakter ticketów (dużo poważnych ticketów = amber). Klasyfikacja: Zielony (70-100 pkt): klient zdrowy, szansa na ekspansję. Żółty (40-70): ryzyko, AM powinien proaktywnie działać. Czerwony (<40): wysoki churn risk — eskalacja, CEO involvement, oferta specjalna. Narzędzia: ChurnZero, Gainsight, Totango, lub własna implementacja w CRM.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Account Management — co to jest? Zarządzanie klientami B2B | fotz.pl"
        description="Account management co to jest — wyjaśniamy czym jest zarządzanie klientami B2B, zadania AM, KPI (NRR, churn), różnica vs Customer Success i jak mierzyć health score."
        canonical="https://fotz.pl/blog/account-management-co-to"

        keywords="Account Management co to jest, Account Management definicja, czym jest Account Management, Account Management przykłady, jak działa Account Management, Account Management znaczenie, Account Management przewodnik"
      />
      <ArticleSchema
        title="Account Management — co to jest? Zarządzanie klientami B2B"
        description="Czym jest account management, zadania AM, KPI (NRR, GRR, churn), różnica vs Customer Success, jak wygląda QBR i customer health score."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/account-management-co-to"
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
                <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> B2B / SaaS</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Account Management — co to jest i jak zarządzać klientami B2B?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Account Manager buduje długoterminowe relacje z klientami B2B — retencja, ekspansja i QBR.
                NRR powyżej 100% to cel każdego dobrego account management teamu.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Zadania account managera</h2>
              <div className="space-y-3 mb-6">
                {amResponsibilities.map((r, idx) => (
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
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">AM vs Customer Success vs Sales</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Rola</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">Fokus</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">KPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {amVsCSVsSales.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.role}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.focus}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.kpi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz procesy sprzedaży i retencji B2B?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony B2B, case studies i materiały dla account managerów — content który wspiera relacje z klientami.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony i content B2B — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Account Management co to jest</h2>
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
          heading="Zbuduj procesy retencji i ekspansji klientów B2B"
          subheading="Materiały sprzedażowe, case studies i strony B2B — content który wspiera account managerów w budowaniu relacji."
        />
      </Layout>
    </>
  );
}
