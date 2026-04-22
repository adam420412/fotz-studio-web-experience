import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, Users, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogICPCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "ICP — co to jest? Ideal Customer Profile" },
  ];

  const icpAttributes = [
    { category: "Firmograficzne", examples: "Branża, wielkość firmy (liczba pracowników, obrót), geolokalizacja, model biznesowy (B2B/B2C), etap rozwoju (startup/scaleup/enterprise)." },
    { category: "Technograficzne", examples: "Używane technologie (CRM, ERP, stack tech), narzędzia które zastępujesz, poziom dojrzałości cyfrowej." },
    { category: "Behawioralne", examples: "Budżet marketingowy/IT, tempo wzrostu (np. 20%+ YoY), wolumen zakupów, częstotliwość zmian dostawców." },
    { category: "Problemowe", examples: "Główne bóle i wyzwania, priorytetowe inicjatywy, presja konkurencyjna, regulatory pressure." },
    { category: "Sukcesu", examples: "Co definuje wartość dla klienta, jak mierzą ROI, oczekiwany czas do wartości (Time to Value)." },
  ];

  const faqItems = [
    {
      question: "Co to jest ICP (Ideal Customer Profile)?",
      answer:
        "ICP (Ideal Customer Profile) to szczegółowy opis fikcyjnego idealnego klienta firmy — organizacji (w B2B) lub osoby (w B2C) która odnosi największą korzyść z produktu, ma najniższy CAC, najwyższy LTV i najkrótszy cykl sprzedażowy. ICP ≠ Persona: ICP opisuje firmę/segment (firmografika, technografika, problemy), Persona opisuje konkretną osobę w tej firmie (stanowisko, motywacje, ścieżka decyzyjna). ICP jest fundamentem ABM, cold outreach, content marketingu i definicji MQL. Bez ICP marketujesz do wszystkich = marketujesz do nikogo.",
    },
    {
      question: "Jak stworzyć ICP?",
      answer:
        "Tworzenie ICP krok po kroku: 1) Przeanalizuj najlepszych klientów — 10-20 klientów z najwyższym LTV, najniższym churnem, największą wartością referencyjną. 2) Identyfikuj wzorce — co ich łączy? Branża, wielkość, problemy, technologie? 3) Przeprowadź wywiady — rozmowy z klientami: 'Dlaczego kupiliście? Co byś robił bez nas?' 4) Zidentyfikuj negatywne ICP — kto NIE powinien być Twoim klientem (za drogi do obsługi, zły fit, wysoki churn). 5) Skwantyfikuj — konkretne zakresy: '50-500 pracowników, 5-50M PLN obrotu, branża SaaS lub agencja, używa Salesforce'. 6) Waliduj z danymi sprzedażowymi — compare ICP vs. actual wins.",
    },
    {
      question: "Czym różni się ICP od Buyer Persona?",
      answer:
        "ICP vs. Buyer Persona: ICP (Ideal Customer Profile): poziom firmy/organizacji, opisuje kogo targetujesz (B2B: jakie firmy, B2C: jaki segment demograficzny). Używany przez marketing do definicji targetowania, przez sprzedaż do kwalifikacji. Buyer Persona: poziom osoby, opisuje konkretnych decydentów i influencerów w docelowej firmie. Np. przy ICPy 'firma SaaS 50-200 prac.' możesz mieć personas: 'CEO który decyduje o zakupie', 'CTO który ocenia technicznie', 'CMO który korzysta z produktu'. W praktyce potrzebujesz obu — ICP do targetowania firm, Persona do personalizacji komunikacji.",
    },
    {
      question: "Jak ICP wpływa na marketing i sprzedaż?",
      answer:
        "Wpływ ICP na marketing: Content marketing — tworzysz treści dla konkretnych bólów ICP, nie dla wszystkich. SEO — targetujesz słowa kluczowe które szuka ICP. LinkedIn Ads — targetujesz firmograficznie (branża, wielkość, stanowisko). ABM — lista targetowych firm zgodnych z ICP. Lookalike audiences — Meta/Google podobni do istniejących klientów ICP. Wpływ ICP na sprzedaż: Kwalifikacja leadów (BANT, MEDDIC) — tylko firmy pasujące do ICP. Cold outreach — personalizowany do konkretnych bólów ICP. Forecast — deale z ICP firmami zamykają się częściej i szybciej. Firm która nie zna swojego ICP traci 30-50% budżetu sprzedażowego na złe leady.",
    },
    {
      question: "Ile ICP powinna mieć firma?",
      answer:
        "Rekomendacje dotyczące liczby ICP: Start-up/early-stage: 1 ICP. Fokus jest kluczowy — nie rozpraszaj się. Growth stage: 2-3 ICP. Gdy sprawdziłeś PMF dla pierwszego segmentu, możesz ekspandować. Scale-up: 3-5 ICP (różne segmenty rynku, geografie, przypadki użycia). Enterprise: segment-based ICP per go-to-market motion (SMB, Mid-Market, Enterprise). Błąd który popełniają firmy: tworzą 10+ ICP 'żeby nikogo nie pominąć'. To niszczy fokus. Zasada: jeśli Twoje ICP jest 'wszystkie firmy które mogą kupić', to nie masz ICP.",
    },
    {
      question: "Jak zweryfikować czy dana firma pasuje do ICP?",
      answer:
        "Kwalifikacja firm pod ICP — metody: Lead scoring: automatyczne punktowanie firmograficzne (branża +15, wielkość +10, kraj +10) w CRM/Marketing Automation. Manual review: handlowiec sprawdza przed dealen czy firma spełnia kryteria ICP. Enrichment tools: Clearbit, ZoomInfo, Apollo — automatyczne wzbogacanie danych o firmografię i technografię bezpośrednio w CRM. Negative ICP signals: za mała firma (zbyt długi czas handlowca), za duża (zbyt długi cykl, za drogie wdrożenie), zła branża (regulacje, fit produktowy). ICP scoring pozwala sprzedawcom skupić czas na dealach z najwyższym prawdopodobieństwem zamknięcia.",
    },
  ];

  return (
    <>
      <SEOHead
        title="ICP — co to jest? Ideal Customer Profile — poradnik | fotz.pl"
        description="ICP co to jest — wyjaśniamy czym jest Ideal Customer Profile, jak stworzyć ICP, różnica ICP vs Buyer Persona i jak ICP wpływa na marketing i sprzedaż B2B."
        canonical="https://fotz.pl/blog/icp-co-to-jest"

        keywords="ICP co to jest, ICP definicja, czym jest ICP, ICP przykłady, jak działa ICP, ICP znaczenie, ICP przewodnik"
      />
      <ArticleSchema
        title="ICP — co to jest? Ideal Customer Profile — poradnik"
        description="Czym jest ICP (Ideal Customer Profile), jak stworzyć ICP krok po kroku, różnica ICP vs Buyer Persona, atrybuty idealnego klienta i wpływ na marketing B2B."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/icp-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Strategia B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ICP — co to jest? Ideal Customer Profile w B2B
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                ICP (Ideal Customer Profile) to fundament skutecznego marketingu i sprzedaży B2B.
                Jak stworzyć ICP, czym różni się od Buyer Persona i jak go używać w praktyce?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Atrybuty ICP — co opisuje profil idealnego klienta?</h2>
              <div className="space-y-3 mb-6">
                {icpAttributes.map((attr, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{attr.category}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{attr.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ICP vs. Buyer Persona — różnica</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">ICP</th>
                      <th className="text-left p-3 border border-slate-700">Buyer Persona</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Poziom", icp: "Firma/organizacja", persona: "Konkretna osoba" },
                      { aspect: "Opisuje", icp: "Jakie firmy targetować", persona: "Kto decyduje / wpływa" },
                      { aspect: "Używany przez", icp: "Marketing (targetowanie), Sprzedaż (kwalifikacja)", persona: "Content, messaging, sprzedaż" },
                      { aspect: "Atrybuty", icp: "Branża, wielkość, technologie, budżet", persona: "Stanowisko, motywacje, obawy, ścieżka decyzyjna" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.icp}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.persona}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz strategię B2B i potrzebujesz strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona skrojona pod ICP — messaging, UX i SEO targetowane pod Twój idealny segment klientów.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — ICP co to jest</h2>
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
