import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, TrendingUp, Target, BarChart2 } from "lucide-react";
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

export default function BlogKonwersjaCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Konwersja — co to jest i jak zwiększyć współczynnik konwersji?" },
  ];

  const conversionTypes = [
    { title: "Zakup produktu", context: "Sklep internetowy", value: "Bezpośredni przychód" },
    { title: "Wypełnienie formularza", context: "Strona firmowa / B2B", value: "Lead do obsługi" },
    { title: "Rejestracja konta", context: "SaaS / aplikacje", value: "Nowy użytkownik" },
    { title: "Pobranie PDF / ebooka", context: "Content marketing", value: "Lead magnet" },
    { title: "Zapis na newsletter", context: "Email marketing", value: "Subskrybent" },
    { title: "Kliknięcie w numer telefonu", context: "Lokalne firmy", value: "Potencjalny klient" },
  ];

  const croTips = [
    { title: "Przyspiesz stronę", desc: "Każda sekunda ładowania kosztuje ~7% konwersji. PageSpeed Insights pokaże co poprawić." },
    { title: "Uprość formularz kontaktowy", desc: "Każde dodatkowe pole redukuje wypełnienia o 10-15%. Zbieraj tylko to co konieczne." },
    { title: "Dodaj social proof", desc: "Opinie, loga klientów, liczby (500+ klientów, 4.9/5 gwiazdek) budują zaufanie i zwiększają konwersje." },
    { title: "Wyraźny CTA (Call to Action)", desc: "Jeden wyraźny przycisk z konkretnym tekstem: 'Zamów bezpłatną wycenę' > 'Wyślij'." },
    { title: "Testuj A/B", desc: "Testuj różne warianty nagłówków, przycisków, kolorów. Google Optimize lub VWO." },
    { title: "Popraw UX na mobile", desc: "60%+ ruchu to mobile. Jeśli strona nie działa dobrze na telefonie, tracisz konwersje." },
  ];

  const faqItems = [
    {
      question: "Co to jest konwersja?",
      answer:
        "Konwersja w marketingu internetowym to pożądane działanie użytkownika na stronie — zakup, wypełnienie formularza, zapis na newsletter, kliknięcie w telefon. Współczynnik konwersji (conversion rate) to procent odwiedzających którzy wykonali to działanie. Przykład: 1000 odwiedzin, 30 zakupów = 3% współczynnik konwersji.",
    },
    {
      question: "Co to jest współczynnik konwersji i ile powinien wynosić?",
      answer:
        "Współczynnik konwersji = (liczba konwersji / liczba sesji) × 100%. Benchmarki: sklepy internetowe 1-3% (średnia 2,5%), landing page B2B 2-5%, strony z formularzem kontaktowym 1-3%, e-commerce modowy ~1%, elektronika ~2-3%. Najlepsze sklepy osiągają 5-10%. Jeśli masz poniżej 1% — jest dużo do poprawy.",
    },
    {
      question: "Jak mierzyć konwersje na stronie?",
      answer:
        "Narzędzia do mierzenia konwersji: Google Analytics 4 (zdarzenia i konwersje — bezpłatne), Google Tag Manager (zarządzanie skryptami śledzącymi), Hotjar / Microsoft Clarity (heatmapy i nagrania sesji — bezpłatne do podstawowego użytku), Google Ads / Meta Ads (konwersje reklamowe). W GA4 skonfiguruj zdarzenia: purchase, form_submit, phone_click — i zaznacz je jako konwersje.",
    },
    {
      question: "Co to jest CRO (optymalizacja konwersji)?",
      answer:
        "CRO (Conversion Rate Optimization) to systematyczny proces zwiększania odsetka odwiedzających którzy wykonują pożądane działanie. Obejmuje: analizę danych (GA4, heatmapy, nagrania sesji), identyfikację barier (co zatrzymuje użytkowników), formułowanie hipotez, testy A/B i wdrażanie ulepszeń. CRO to tańsza alternatywa dla zwiększania budżetu reklamowego — zamiast kupować więcej ruchu, lepiej konwertujesz ten który już masz.",
    },
    {
      question: "Jak zwiększyć współczynnik konwersji sklepu internetowego?",
      answer:
        "Sprawdzone metody: 1) Popraw szybkość strony (Core Web Vitals). 2) Uprość proces zakupu — mniej kroków = mniej porzuceń. 3) Dodaj opinie produktów i oceny gwiazdkowe. 4) Wyraźny przycisk 'Dodaj do koszyka'. 5) Darmowa dostawa od określonej kwoty (99 zł+ działa motywująco). 6) Opcje płatności: BLIK, PayU, rata. 7) Wyraźna polityka zwrotów. 8) Zdjęcia produktów wysokiej jakości z różnych kątów.",
    },
    {
      question: "Czym różni się konwersja mikro od makro?",
      answer:
        "Makrokonwersja to główny cel strony (zakup, wypełnienie formularza kontaktowego B2B). Mikrokonwersja to mniejsze kroki na drodze do makro: obejrzenie video produktowego, dodanie do koszyka, kliknięcie w cennik, zapis na newsletter. Śledzenie mikrokonwersji pomaga zrozumieć lejek i gdzie użytkownicy odpada. Poprawa mikrokonwersji prowadzi do wzrostu makrokonwersji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Konwersja — co to jest i jak zwiększyć współczynnik konwersji? | fotz.pl"
        description="Konwersja co to jest — wyjaśniamy czym jest współczynnik konwersji, jak go mierzyć w GA4 i jak zwiększyć konwersje na stronie i w sklepie internetowym. CRO poradnik."
        canonical="https://fotz.pl/blog/konwersja-co-to"

        keywords="Konwersja co to jest, Konwersja definicja, czym jest Konwersja, Konwersja przykłady, jak działa Konwersja, Konwersja znaczenie, Konwersja przewodnik"
      />
      <ArticleSchema
        title="Konwersja — co to jest i jak zwiększyć współczynnik konwersji?"
        description="Czym jest konwersja w marketingu, jak mierzyć współczynnik konwersji, benchmarki dla e-commerce i B2B oraz metody CRO (optymalizacji konwersji)."
        datePublished="2025-03-20"
        dateModified="2025-04-05"
        url="https://fotz.pl/blog/konwersja-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Optymalizacja i CRO</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Konwersja — co to jest i jak zwiększyć sprzedaż?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Współczynnik konwersji to najważniejszy wskaźnik efektywności strony internetowej.
                Jak mierzyć konwersje, ile powinny wynosić i jak je zwiększyć — poradnik CRO.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje konwersji na stronie</h2>
              <p className="text-slate-700 mb-4">
                Konwersja to nie tylko sprzedaż — każda strona może mieć inaczej zdefiniowany cel:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Typ konwersji</th>
                      <th className="text-left p-3 border border-slate-700">Kontekst</th>
                      <th className="text-left p-3 border border-slate-700">Wartość biznesowa</th>
                    </tr>
                  </thead>
                  <tbody>
                    {conversionTypes.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-600">{row.title}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.context}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6 metod zwiększenia konwersji (CRO)</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {croTips.map((tip, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm mb-1">{tip.title}</p>
                        <p className="text-slate-600 text-xs">{tip.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Benchmarki współczynnika konwersji</h2>
              <div className="space-y-2 mb-6">
                {[
                  { label: "E-commerce (moda, akcesoria)", cr: "0.5–1.5%" },
                  { label: "E-commerce (elektronika, RTV/AGD)", cr: "1.5–3%" },
                  { label: "E-commerce (FMCG, produkty codziennego użytku)", cr: "2–4%" },
                  { label: "Strona firmowa B2B (formularz kontaktowy)", cr: "1–3%" },
                  { label: "Landing page (lead generation)", cr: "3–8%" },
                  { label: "Zapis na newsletter", cr: "2–5%" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <span className="text-slate-700 text-sm">{item.label}</span>
                    <span className="font-bold text-blue-600 text-sm">{item.cr}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <BarChart2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zwiększyć konwersje na swojej stronie?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Przeprowadzimy audyt UX i analityki — znajdziemy co blokuje konwersje i jak to naprawić.
                </p>
                <Link to="/uslugi/audyt-strony-internetowej" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Audyt strony internetowej <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Konwersja co to jest</h2>
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
          heading="Zwiększ konwersje na swojej stronie"
          subheading="Audyt UX, CRO i optymalizacja — zamieniamy ruch w klientów."
        />
      </Layout>
    </>
  );
}
