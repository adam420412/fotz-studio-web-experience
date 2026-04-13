import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Eye, MousePointer, BarChart2, Zap } from "lucide-react";
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

export default function BlogHeatmapyCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Heatmapy — co to jest i jak poprawić UX strony?" },
  ];

  const heatmapTypes = [
    { type: "Click heatmap", icon: MousePointer, desc: "Pokazuje gdzie użytkownicy klikają. Identyfikuje błędnie klikane elementy i pomija prawdziwe przyciski CTA.", color: "text-red-600" },
    { type: "Scroll heatmap", icon: BarChart2, desc: "Pokazuje jak głęboko użytkownicy scrollują stronę. Określa gdzie stawiać kluczowe informacje i CTA.", color: "text-orange-600" },
    { type: "Move heatmap", icon: MousePointer, desc: "Śledzi ruch kursora — koreluje z ruchem oczu. Pokazuje co przyciąga uwagę bez klikania.", color: "text-blue-600" },
    { type: "Nagrania sesji", icon: Eye, desc: "Pełne nagranie wideo sesji użytkownika. Pozwala zobaczyć dokładnie jak ktoś porusza się po stronie.", color: "text-purple-600" },
  ];

  const faqItems = [
    {
      question: "Co to jest heatmapa?",
      answer:
        "Heatmapa (mapa ciepła) to wizualizacja zachowania użytkowników na stronie internetowej — używa kolorów (od zimnych do ciepłych) aby pokazać gdzie użytkownicy klikają, scrollują lub skupiają uwagę. Czerwone/pomarańczowe obszary = wysoka aktywność, niebieskie = niska aktywność. Heatmapy są kluczowym narzędziem UX i CRO — pozwalają zrozumieć zachowanie użytkownika bez przeprowadzania kosztownych badań użyteczności. Najpopularniejsze narzędzia: Hotjar, Microsoft Clarity (darmowy), FullStory.",
    },
    {
      question: "Jakie narzędzia do heatmap są najlepsze?",
      answer:
        "Najlepsze narzędzia do heatmap: Hotjar — najpopularniejszy, heatmapy + nagrania + ankiety. Plany od 0 zł (32 sesje/dzień). Microsoft Clarity — całkowicie darmowy, nieograniczone nagrania, heatmapy, integracja z GA4. Polecany dla małych firm. FullStory — enterprise, zaawansowana analityka, kosztowny. Smartlook — dobra alternatywa dla małych firm. Lucky Orange — przystępny cenowo, live view. Wybór: zacznij od Microsoft Clarity (darmowy) lub Hotjar Basic (darmowy do 35 sesji/dzień) — dla większości MŚP wystarczy.",
    },
    {
      question: "Jak czytać heatmapę?",
      answer:
        "Interpretacja heatmapy: Click map — czerwone obszary to popularne miejsca kliknięć. Sprawdź: czy klikają w CTA? Czy klikają w nieklikalnych elementach (problem)? Czy ignorują ważne przyciski? Scroll map — gdzie 'urywa się' kolor? Tam większość użytkowników przestaje scrollować. Powyżej tej linii musi być najważniejsza treść i CTA. Move map — śledź ruch kursora: zatrzymania = zainteresowanie lub dezorientacja, ruch bez kliknięcia = elementy wyglądające na klikalne ale nie są.",
    },
    {
      question: "Jak heatmapy pomagają w optymalizacji strony?",
      answer:
        "Praktyczne zastosowania heatmap: 1) Identyfikacja 'dead clicks' — użytkownicy klikają w miejscach które nie są klikalne (np. klikają obrazek myśląc że to link). 2) Pozycja CTA — jeśli scroll map pokazuje że 80% nie dotrze do Twojego CTA, przesuń je wyżej. 3) Ukryta treść — jeśli ważna informacja jest poniżej 'fold' a użytkownicy nie scrollują, zreorganizuj stronę. 4) Nawigacja — które elementy menu są najczęściej klikane? Usprawnij dostęp do popularnych sekcji. 5) Formularze — gdzie porzucają formularz? To pole do optymalizacji.",
    },
    {
      question: "Ile kosztuje Hotjar?",
      answer:
        "Ceny Hotjar (2025): Basic (darmowy): 35 sesji/dzień, heatmapy, podstawowe nagrania. Plus: od 32 USD/mies. — 100 sesji/dzień, pełne funkcje. Business: od 80 USD/mies. — 500 sesji/dzień, zaawansowane filtry. Scale/Enterprise: od 171 USD/mies. Alternatywa: Microsoft Clarity — całkowicie darmowy, nieograniczone sesje, heatmapy i nagrania. Nie ma żadnych limitów ani opłat. Dla większości MŚP Microsoft Clarity jest wystarczający i darmowy.",
    },
    {
      question: "Jak połączyć heatmapy z Google Analytics?",
      answer:
        "Integracja heatmap z GA: Microsoft Clarity + GA4 — wbudowana integracja. W GA4 możesz filtrować segmenty (np. użytkownicy z wysokim bounce rate) i oglądać ich nagrania w Clarity. Hotjar + GA4 — przez integrację możesz segmentować nagrania na podstawie zdarzeń GA4. Praktyczne zastosowanie: znajdź w GA4 stronę z wysokim bounce rate → otwórz jej heatmapę i nagrania w Hotjar/Clarity → zrozum dlaczego użytkownicy odchodzą → napraw problem → mierz efekt ponownie w GA4.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Heatmapy — co to jest i jak poprawić UX strony? | fotz.pl"
        description="Heatmapy co to jest — wyjaśniamy czym są mapy ciepła, typy heatmap, najlepsze narzędzia (Hotjar, Clarity) i jak używać heatmap do optymalizacji strony."
        canonical="https://fotz.pl/blog/heatmapy-co-to-jest"

        keywords="Heatmapy co to jest, Heatmapy definicja, czym jest Heatmapy, Heatmapy przykłady, jak działa Heatmapy, Heatmapy znaczenie, Heatmapy przewodnik"
      />
      <ArticleSchema
        title="Heatmapy — co to jest i jak poprawić UX strony?"
        description="Czym są heatmapy (mapy ciepła), typy heatmap (click, scroll, move), narzędzia Hotjar i Microsoft Clarity, jak czytać heatmapę i optymalizować stronę."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/heatmapy-co-to-jest"
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
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> UX i analityka</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Heatmapy — co to jest i jak analizować zachowanie użytkowników?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Heatmapy (mapy ciepła) to wizualizacje zachowania użytkowników na stronie.
                Typy heatmap, narzędzia i jak używać ich do poprawy UX i konwersji.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy heatmap</h2>
              <div className="space-y-3 mb-6">
                {heatmapTypes.map((h, idx) => {
                  const Icon = h.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${h.color}`} />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{h.type}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{h.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Porównanie narzędzi do heatmap</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Narzędzie</th>
                      <th className="text-left p-3 border border-slate-700">Cena</th>
                      <th className="text-left p-3 border border-slate-700">Najlepsza dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "Microsoft Clarity", price: "Darmowy", best: "MŚP — darmowy, nieograniczony" },
                      { tool: "Hotjar Basic", price: "Darmowy (35 sesji/dzień)", best: "Start, mały ruch" },
                      { tool: "Hotjar Plus", price: "Od 32 USD/mies.", best: "Średnie strony, więcej danych" },
                      { tool: "Smartlook", price: "Od 55 USD/mies.", best: "Aplikacje mobilne, SaaS" },
                      { tool: "FullStory", price: "Enterprise (od ~1000 USD/mies.)", best: "Duże firmy, zaawansowana analityka" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.tool}</td>
                        <td className="p-3 border border-slate-200 text-green-700 text-xs">{row.price}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić UX i konwersję strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Analizujemy zachowanie użytkowników i projektujemy strony które konwertują.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Heatmapy co to jest</h2>
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
          heading="Zoptymalizuj UX swojej strony z pomocą heatmap"
          subheading="Analizujemy dane użytkowników i projektujemy zmiany które zwiększają konwersję."
        />
      </Layout>
    </>
  );
}
