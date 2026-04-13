import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Target, TrendingUp, CheckCircle2 } from "lucide-react";
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

export default function BlogOKRCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "OKR — co to jest? Objectives and Key Results w praktyce" },
  ];

  const okrExamples = [
    {
      dept: "Marketing",
      objective: "Zbudować markę jako lider myśli w B2B SaaS w Polsce",
      keyResults: [
        "Osiągnąć 50,000 unikalnych odwiedzin bloga miesięcznie (z 30,000)",
        "Wygenerować 500 MQL z content marketingu w Q1",
        "Opublikować 1 badanie branżowe z co najmniej 100 cytowaniami/udostępnieniami",
      ],
    },
    {
      dept: "Sales",
      objective: "Przekroczyć $1M ARR z nowych klientów w Q2",
      keyResults: [
        "Zamknąć 25 nowych kontraktów enterprise (ACV powyzej 40k PLN)",
        "Skrócić average sales cycle z 90 do 60 dni",
        "Osiągnąć win rate powyżej 30% dla SQLów",
      ],
    },
    {
      dept: "Product",
      objective: "Znacząco poprawić retencję klientów w pierwszym miesiącu",
      keyResults: [
        "Zwiększyć Day 30 retention z 45% do 65%",
        "Skrócić Time to First Value z 3 dni do 1 dnia",
        "Osiągnąć feature adoption rate kluczowych funkcji powyżej 60%",
      ],
    },
  ];

  const okrVsKpi = [
    { dimension: "Cel", okr: "Ambicja i kierunek — co chcemy osiągnąć i jak zmierzymy sukces?", kpi: "Monitoring bieżącej wydajności — czy jesteśmy na właściwym torze?" },
    { dimension: "Charakter", okr: "Aspiracyjne, stretch goals. 70% completion = dobry wynik.", kpi: "Operacyjne benchmarki. 100% = standard, poniżej = problem." },
    { dimension: "Częstotliwość", okr: "Kwartalnie lub rocznie — strategiczne.", kpi: "Tygodniowo/miesięcznie — operacyjne." },
    { dimension: "Odpowiedzialność", okr: "Team / squady. Crossfunctional.", kpi: "Indywidualnie lub per dział." },
    { dimension: "Relacja", okr: "OKR definiuje co osiągnąć. KPI mierzą jak idzie.", kpi: "KPI mogą być Key Results w OKR." },
  ];

  const faqItems = [
    {
      question: "Co to jest OKR?",
      answer: "OKR (Objectives and Key Results) to framework zarządzania celami i mierzenia wyników, stworzony przez Andy Grove'a w Intel w latach 70. Google spopularyzował go globalnie od 1999. Składa się z dwóch elementów: Objective (cel): ambitne, jakościowe określenie co chcemy osiągnąć. Inspirujące, nie mierzalne samo w sobie. Key Results (kluczowe wyniki): 2-5 mierzalnych wskaźników które potwierdzają osiągnięcie celu. Konkretne, z terminami. Przykład: O: 'Stać się najszybciej rosnącym dostawcą CRM w Polsce.' KR1: Wzrost MRR z 200k do 400k PLN do końca Q3. KR2: Pozyskać 50 nowych klientów enterprise. KR3: Osiągnąć NPS powyżej 50. OKR używają: Google, Intel, LinkedIn, Twitter, Zalando, wiele polskich scaleupów. Zaleta: transparentność — wszyscy wiedzą na czym firma i każdy team się skupia. Alignment — lokalne cele (team/indywidualny) są zsynchronizowane z celami firmy.",
    },
    {
      question: "Jak napisać dobry OKR?",
      answer: "Zasady pisania dobrych OKR: Dla Objective: Ambitne ale osiągalne ('moonshot' nie 'rooftop shoot'). Inspirujące — ludzie powinni chcieć pracować na ten cel. Jakościowe, nie liczbowe — liczby trafiają do Key Results. Ograniczone do 1-5 celów per poziom (firma/team/indywidualny). Dla Key Results: Konkretne i mierzalne — zawsze z liczbą i terminem. Outcome, nie output — 'zwiększyć NRR do 110%' nie 'wysłać 100 emaili do klientów'. 2-5 KR per Objective — więcej rozmywa focus. Ambitious but achievable — dobrze skalibrowane OKR osiągane w 70%. 100% = cel był za łatwy. Typowe błędy: KR które są todo-listą ('zrobić X, napisać Y') zamiast measurable outcomes. Zbyt dużo OKR — więcej niż 3-5 Objectives na poziomie firmy = brak focus. Brak check-inów — OKR pisane raz w roku i zapomniane. Powiązanie OKR z bonusami — niszczy stretch goals (ludzie piszą łatwiejsze cele).",
    },
    {
      question: "Jak wdrożyć OKR w firmie?",
      answer: "Wdrożenie OKR krok po kroku: 1) Edukacja (1-2 tygodnie): zanim zaczniesz, przeszkolz leadership i managerów. Przeczytaj 'Measure What Matters' (John Doerr) lub 'Radical Focus' (Christina Wodtke). 2) Pilot (1 kwartał): zacznij od 2-3 teamów zamiast całej firmy. Ucz się zanim skalujesz. 3) Definiowanie company-level OKR: CEO i leadership team definiuje 3-5 Objectives dla firmy. Konsultacje z teamami. 4) Kaskadowanie (nested OKR): Teamy definiują swoje OKR supportując company OKR. Nie 'nakazuj' OKR z góry na dół — angażuj teamy w definiowanie. 5) Transparentność: Wszystkie OKR w jednym miejscu (Notion, Lattice, Gtmhub). Każdy widzi OKR każdego. 6) Check-ins (tygodniowe): Regularne update postępów (confidence %, co osiągnięto, co blokuje). 7) Retrospektywa (koniec kwartału): Co osiągnęliśmy? Co nie zadziałało? Jak kalibrować następny kwartał? Narzędzia: Lattice, Gtmhub/Quantive, Leapsome, Weekdone, lub Notion/Google Sheets.",
    },
    {
      question: "Jaka jest różnica między OKR a KPI?",
      answer: "OKR vs KPI — kompplementarne, nie zamienne: KPI (Key Performance Indicators) to wskaźniki monitorujące bieżącą wydajność operacyjną. Odpowiadają na pytanie 'jak idzie?'. Przykłady: monthly churn rate, website uptime, CAC. Stałe — te same KPI monitorujesz przez lata. OKR to framework ustalania celów i inicjatyw strategicznych. Odpowiadają na pytanie 'co chcemy osiągnąć i jak to zmierzymy?'. Tymczasowe — nowe OKR co kwartał. Relacja: KPI mogą być Key Results w OKR, gdy osiągnięcie konkretnego poziomu KPI jest celem strategicznym. Przykład: firma regularnie monitoruje NPS jako KPI. W jednym kwartale postanawia poprawić NPS — wtedy NPS powyżej 50 staje się Key Result w OKR. Kiedy używać co: KPI: ciągłe monitorowanie zdrowia biznesu. OKR: kierowanie energii na konkretne inicjatywy i zmiany. Odpowiedź na pytanie 'dlaczego KPI się nie poprawia'.",
    },
    {
      question: "Jak często robić check-in na OKR?",
      answer: "Rytm OKR — cadence spotkań: Weekly check-ins (15-30 min): Krótkie update per Key Result — jaki jest progress (confidence %, zmiana tygodniowa)? Co blokuje? Czy potrzebujesz pomocy? Format: każdy team member update jednym zdaniem per KR. Celem: early warning system gdy KR zaczyna 'czerwienieć'. Mid-quarter review (1h, połowa kwartału): głębszy przegląd — co idzie dobrze? Co jest zagrożone? Czy OKR są nadal relevantne (czy coś się zmieniło w otoczeniu)? Możliwość pivot lub de-prioritize jeśli OKR stało się nieaktualnym. End-quarter retrospective (2-3h): osiągnięcia (ile % KR zostało osiągniętych?). Czego się nauczyliśmy? Jak kalibrować następny kwartał? Annual planning: company-level OKR na rok + Q1 szczegółowo. Typowy cadence: Annual OKR planning (grudzień/styczeń) → Quarterly cycle (Q-review → OKR writing → check-ins) → Weekly standups. Najczęstszy błąd: pisanie OKR raz i nigdy do nich nie wracanie. Check-ins są kluczowe — bez nich OKR są martwymi dokumentami.",
    },
    {
      question: "Jak OKR różnią się od tradycyjnego zarządzania przez cele (MBO)?",
      answer: "OKR vs MBO (Management by Objectives) — ewolucja: MBO (Peter Drucker, 1954): roczny cykl. Cele ustalane top-down. Powiązane z wynagrodzeniem (bonusy). Oceniane zero/jeden (osiągnięto lub nie). Często poufne — tylko manager i pracownik widzą. Statyczne przez cały rok. OKR (Andy Grove/Google): kwartalny cykl (szybsza adaptacja). Cele ustalane bottom-up + top-down (alignment, nie dyktatura). NIE powiązane z wynagrodzeniem (stretch goals wymagają psychologicznego bezpieczeństwa). Stretch goals — 70% completion = dobry wynik. Radykalnie transparentne — wszyscy widzą wszystkich OKR. Dynamiczne — check-ins co tydzień. Dlaczego OKR zwyciężają nad MBO: roczny cykl MBO jest za wolny dla dynamicznych firm. Powiązanie z bonusem niszczy ambicję (wszyscy piszą łatwe cele by dostać bonus). Transparentność OKR buduje alignment i kulturę. Kluczowa zasada OKR od Grove'a: 'Bad companies are destroyed by crisis. Good companies survive them. Great companies are improved by them.' — OKR pomaga firmom się poprawiać, nie tylko przeżywać.",
    },
  ];

  return (
    <>
      <SEOHead
        title="OKR — co to jest? Objectives and Key Results w praktyce | fotz.pl"
        description="OKR co to jest — wyjaśniamy czym są Objectives and Key Results, jak pisać dobre OKR, wdrożenie w firmie, różnica vs KPI i MBO, przykłady dla marketingu i sprzedaży."
        canonical="https://fotz.pl/blog/okr-co-to"

        keywords="OKR co to jest, OKR definicja, czym jest OKR, OKR przykłady, jak działa OKR, OKR znaczenie, OKR przewodnik"
      />
      <ArticleSchema
        title="OKR — co to jest? Objectives and Key Results w praktyce"
        description="Czym są OKR, jak pisać dobre Objectives i Key Results, przykłady dla marketingu/sprzedaży/produktu, wdrożenie i różnica vs KPI."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/okr-co-to"
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
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Strategia / Management</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                OKR — co to jest i jak wdrożyć Objectives and Key Results?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                OKR to framework zarządzania celami używany przez Google, Intel i tysiące firm globalnie.
                Objective = co chcemy osiągnąć. Key Results = jak zmierzymy sukces. Kwartalnie, transparentnie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Przykłady OKR per dział</h2>
              <div className="space-y-4 mb-6">
                {okrExamples.map((e, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="font-bold text-blue-600 text-xs mb-1 uppercase tracking-wide">{e.dept}</p>
                    <p className="font-bold text-slate-900 text-sm mb-2">O: {e.objective}</p>
                    <div className="space-y-1">
                      {e.keyResults.map((kr, kIdx) => (
                        <div key={kIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600 flex-shrink-0 mt-1" />
                          <p className="text-slate-600 text-xs">KR{kIdx + 1}: {kr}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">OKR vs KPI — porównanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Wymiar</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">OKR</th>
                      <th className="text-left p-3 border border-slate-700 text-xs">KPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {okrVsKpi.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.dimension}</td>
                        <td className="p-3 border border-slate-200 text-slate-700 text-xs">{row.okr}</td>
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
                <p className="text-blue-800 font-semibold mb-2">Budujesz strategię wzrostu dla swojej firmy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony internetowe i content marketing — pomagamy firmom rosnąć przez skuteczną komunikację i marketing.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strony i marketing wzrostu — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — OKR co to jest</h2>
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
          heading="Wspieramy firmy w budowie strategii wzrostu i komunikacji"
          subheading="Strony, content marketing i kampanie — tworzymy narzędzia które napędzają Twoje OKR i kluczowe metryki wzrostu."
        />
      </Layout>
    </>
  );
}
