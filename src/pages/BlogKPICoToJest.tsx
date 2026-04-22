import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Target, TrendingUp, BarChart2, Zap } from "lucide-react";
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

export default function BlogKPICoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "KPI — co to jest i jak mierzyć wyniki?" },
  ];

  const kpiCategories = [
    {
      icon: TrendingUp,
      title: "KPI marketingowe",
      examples: ["Koszt pozyskania klienta (CAC)", "Zwrot z wydatków na reklamy (ROAS)", "CTR (Click-Through Rate)", "Liczba leads / konwersji", "Zasięg i wyświetlenia kampanii"],
    },
    {
      icon: BarChart2,
      title: "KPI sprzedażowe",
      examples: ["Przychód / obrót miesięczny", "Liczba nowych klientów", "Średnia wartość zamówienia (AOV)", "Współczynnik konwersji", "Czas zamknięcia sprzedaży"],
    },
    {
      icon: Target,
      title: "KPI e-commerce",
      examples: ["Współczynnik porzuceń koszyka", "Koszt pozyskania zamówienia", "LTV (Lifetime Value klienta)", "Stopa zwrotów", "Sesje i użytkownicy na stronie"],
    },
    {
      icon: Zap,
      title: "KPI SEO i contentu",
      examples: ["Pozycje w Google (rankingi)", "Organiczny ruch na stronie", "Liczba indeksowanych stron", "Bounce rate", "Czas spędzony na stronie"],
    },
  ];

  const faqItems = [
    {
      question: "Co to jest KPI?",
      answer:
        "KPI (Key Performance Indicator) to kluczowy wskaźnik efektywności — mierzalna wartość pokazująca jak dobrze firma lub kampania osiąga swoje cele. KPI służą do monitorowania postępów i podejmowania decyzji opartych na danych. Przykłady KPI: współczynnik konwersji, koszt pozyskania klienta (CAC), miesięczny przychód (MRR), ROI z kampanii reklamowej.",
    },
    {
      question: "Czym różni się KPI od metryki?",
      answer:
        "Metryka to dowolna mierzalna wartość (np. liczba kliknięć, wyświetleń, sesji). KPI to metryka POWIĄZANA z konkretnym celem biznesowym — tylko wybrane metryki stają się KPI. Przykład: liczba wyświetleń strony to metryka, ale współczynnik konwersji (ile odwiedzin = sprzedaż) to KPI, bo bezpośrednio mierzy skuteczność biznesową.",
    },
    {
      question: "Jak wyznaczać KPI dla firmy?",
      answer:
        "Dobry KPI powinien spełniać kryteria SMART: Specific (konkretny), Measurable (mierzalny), Achievable (osiągalny), Relevant (istotny), Time-bound (ograniczony czasowo). Proces: 1) Określ cel biznesowy (np. wzrost sprzedaży o 20%). 2) Wybierz metrykę która mierzy ten cel. 3) Ustal punkt bazowy (teraz: 100 klientów/mies.). 4) Wyznacz cel (cel: 120 klientów/mies. w Q1). 5) Monitoruj co tydzień/miesiąc.",
    },
    {
      question: "Ile KPI powinno mieć firma?",
      answer:
        "Eksperci zalecają 3-7 KPI dla każdego działu lub obszaru. Zbyt duża liczba wskaźników prowadzi do rozproszenia uwagi — trudno jednocześnie optymalizować 30 KPI. Zasada: wyróżnij 3-5 kluczowych wskaźników które najlepiej odzwierciedlają sukces biznesowy, a pozostałe metryki traktuj jako dane pomocnicze.",
    },
    {
      question: "Jakich narzędzi używać do śledzenia KPI?",
      answer:
        "Popularne narzędzia do monitorowania KPI: Google Analytics 4 (ruch, konwersje, e-commerce), Google Search Console (SEO, pozycje, CTR), Google Ads / Meta Ads (kampanie reklamowe), HubSpot / CRM (sprzedaż, leady), Tableau / Power BI (dashboardy), Google Data Studio / Looker Studio (wizualizacje). Dla małych firm sprawdza się prosty arkusz Google Sheets z danymi z GA4.",
    },
    {
      question: "Co to jest KPI w marketingu internetowym?",
      answer:
        "W marketingu internetowym kluczowe KPI to: ROAS (zwrot z wydatków na reklamy — idealnie 3-10x), CPC (koszt kliknięcia), CPL (koszt za lead), CPA (koszt za akcję/zakup), CTR (% kliknięć do wyświetleń), współczynnik konwersji (% odwiedzin = zakup), CAC (koszt pozyskania klienta). Dobry marketer mierzy nie tylko ruch, ale przede wszystkim konwersje i rentowność.",
    },
  ];

  return (
    <>
      <SEOHead
        title="KPI — co to jest i jak mierzyć wyniki? Wskaźniki efektywności"
        description="KPI co to jest — wyjaśniamy czym są kluczowe wskaźniki efektywności, jak wyznaczać KPI dla firmy, marketingu i e-commerce. Przykłady KPI i narzędzia do…"
        canonical="https://fotz.pl/blog/kpi-co-to-jest"

        keywords="KPI co to jest, KPI definicja, czym jest KPI, KPI przykłady, jak działa KPI, KPI znaczenie, KPI przewodnik"
      />
      <ArticleSchema
        title="KPI — co to jest i jak mierzyć wyniki?"
        description="Czym są KPI (Key Performance Indicators), jak je wyznaczać, przykłady KPI marketingowych i sprzedażowych oraz narzędzia do monitorowania."
        datePublished="2025-03-10"
        dateModified="2025-04-05"
        url="https://fotz.pl/blog/kpi-co-to-jest"
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
                <span className="flex items-center gap-1"><Target className="w-4 h-4" /> Analityka i mierzenie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                KPI — co to jest i jak mierzyć wyniki firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                KPI (Key Performance Indicators) to kluczowe wskaźniki efektywności — bez nich prowadzisz biznes
                po omacku. Dowiedz się jak wyznaczać KPI i które mierzyć w marketingu i sprzedaży.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego KPI są ważne?</h2>
              <p className="text-slate-700 mb-4">
                Bez wskaźników KPI nie wiesz czy Twoje działania marketingowe i sprzedażowe przynoszą efekty.
                KPI zamieniają intuicję w dane — pozwalają mierzyć postęp, identyfikować problemy i alokować
                budżet tam gdzie przynosi największy zwrot.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Przejrzystość", desc: "Każdy w firmie wie co mierzyć i dlaczego" },
                  { label: "Decyzje", desc: "Działania oparte na danych, nie przeczuciach" },
                  { label: "Optymalizacja", desc: "Wiesz co poprawić i gdzie inwestować budżet" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                    <p className="text-slate-600 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykłady KPI według obszaru</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {kpiCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-2 mb-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{cat.title}</h3>
                      </div>
                      <ul className="space-y-1">
                        {cat.examples.map((ex, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak budować dashboard KPI?</h2>
              <div className="space-y-3 mb-6">
                {[
                  { step: "1", title: "Zdefiniuj cele biznesowe", desc: "Zanim wybierzesz KPI, odpowiedz: Co chcesz osiągnąć w tym kwartale? (wzrost sprzedaży, więcej leadów, lepsza retencja)" },
                  { step: "2", title: "Wybierz 3-5 kluczowych wskaźników", desc: "Dla każdego celu wybierz maksymalnie 2-3 KPI. Mniej = lepiej. Skupienie na tym co naprawdę ważne." },
                  { step: "3", title: "Ustal punkt bazowy i cel", desc: "Wiesz że teraz masz 2% konwersji? Cel: 3% w Q2. Bez punktu startowego nie mierzysz postępu." },
                  { step: "4", title: "Zbuduj dashboard", desc: "Google Looker Studio + GA4 + Search Console = bezpłatny dashboard. Odświeżaj dane co tydzień." },
                  { step: "5", title: "Przeglądaj regularnie i działaj", desc: "KPI mają wartość tylko jeśli na nie reagujesz. Co miesiąc: review, wnioski, korekta działań." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="w-7 h-7 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">{item.step}</span>
                    <div>
                      <p className="font-bold text-slate-900 text-sm mb-1">{item.title}</p>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz audytu analityki i KPI?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Skonfigurujemy GA4, Search Console i dashboard KPI dla Twojej firmy — mierz to co ważne.
                </p>
                <Link to="/uslugi/audyt-seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Audyt SEO i analityki <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — KPI co to jest</h2>
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
