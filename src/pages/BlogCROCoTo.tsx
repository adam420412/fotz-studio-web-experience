import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, TrendingUp, Target, BarChart2, CheckCircle2 } from "lucide-react";
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

export default function BlogCROCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CRO — co to jest? Conversion Rate Optimization" },
  ];

  const croTechniques = [
    { technique: "Testy A/B", desc: "Porównywanie dwóch wariantów strony lub elementu (nagłówek, CTA, kolor przycisku) aby wybrać lepiej konwertujący." },
    { technique: "Heatmapy i nagrania sesji", desc: "Narzędzia jak Hotjar pokazują gdzie użytkownicy klikają, scrollują i gdzie rezygnują — bezcenne dane do optymalizacji." },
    { technique: "Optymalizacja formularzy", desc: "Każde zbędne pole formularza obniża konwersję. Testuj liczbę pól, kolejność, etykiety i przyciski submit." },
    { technique: "Social proof", desc: "Opinie klientów, liczba użytkowników, loga znanych marek — budują zaufanie i zwiększają skłonność do zakupu." },
    { technique: "Optymalizacja CTA", desc: "Tekst, kolor, rozmiar i pozycja przycisku Call to Action mają ogromny wpływ na CTR i konwersję." },
    { technique: "Prędkość strony", desc: "Core Web Vitals — każda sekunda wolniejszego ładowania = -7% konwersji (badania Akamai)." },
  ];

  const faqItems = [
    {
      question: "Co to jest CRO?",
      answer:
        "CRO (Conversion Rate Optimization) to proces systematycznej optymalizacji strony internetowej lub aplikacji w celu zwiększenia odsetka odwiedzających, którzy wykonują pożądaną akcję (zakup, rejestracja, wypełnienie formularza). CRO opiera się na danych — analizie zachowania użytkowników, testach A/B i iteracyjnym ulepszaniu. Wzór: Conversion Rate = (Liczba konwersji / Liczba odwiedzin) × 100%. Przykład: 1000 odwiedzin, 30 zakupów → CR = 3%. CRO ma na celu zwiększenie tego wskaźnika.",
    },
    {
      question: "Jak obliczyć współczynnik konwersji?",
      answer:
        "Wzór na Conversion Rate (CR): CR = (Konwersje / Sesje) × 100%. Przykłady: E-commerce: zakupy / odwiedziny. Lead gen: wypełnione formularze / odwiedziny. SaaS: rejestracje trial / odwiedziny landing page. Średnie benchmarki CR: E-commerce: 1-3% (powyżej 3% to dobry wynik). Lead gen B2B: 2-5%. SaaS trial/freemium: 3-7%. Landing page po reklamie: 5-15%. Uwaga: CR należy zawsze mierzyć w kontekście — ruch z SEO ma inny CR niż ruch z Google Ads.",
    },
    {
      question: "Jak przeprowadzić test A/B?",
      answer:
        "Kroki testu A/B: 1) Zdefiniuj hipotezę — co chcesz zmienić i dlaczego (np. zmiana koloru CTA z szarego na pomarańczowy zwiększy CTR). 2) Wyznacz metrykę sukcesu — CR, CTR, czas na stronie. 3) Oblicz wymaganą próbę — minimum 100-200 konwersji na wariant dla statystycznej istotności. 4) Uruchom test — trzymaj tylko jedną zmienną naraz. 5) Czekaj do istotności statystycznej (95%+). 6) Wdróż wygrywający wariant. Narzędzia: Google Optimize (darmowy), VWO, Optimizely, AB Tasty.",
    },
    {
      question: "Jakie narzędzia CRO warto używać?",
      answer:
        "Kluczowe narzędzia CRO: Heatmapy i nagrania: Hotjar (najpopularniejszy), Microsoft Clarity (darmowy), FullStory. Testy A/B: Google Optimize (darmowy), VWO, Optimizely, AB Tasty. Ankiety i feedback: Hotjar, Typeform, Survicate. Analityka: Google Analytics 4, Mixpanel (do funnel analysis). Prędkość: PageSpeed Insights, GTmetrix, WebPageTest. Personalizacja: Mutiny (B2B SaaS), Dynamic Yield. Rekomendowany stack startowy: GA4 + Hotjar + Google Optimize = 0 zł/mies.",
    },
    {
      question: "Od czego zacząć optymalizację konwersji?",
      answer:
        "Priorytety w CRO: 1) Analiza lejka — gdzie tracisz użytkowników? (GA4 Funnel Exploration). 2) Heatmapy i nagrania — zrozum zachowanie użytkownika przed optymalizacją. 3) Ankiety exit intent — zapytaj wychodzących użytkowników dlaczego odchodzą. 4) Optymalizacja strony produktu/oferty — tu jest największy ROI. 5) Optymalizacja checkout/formularza — każde zbędne pole = mniej konwersji. 6) Prędkość strony — jeśli ładuje się wolno, wszystkie inne optymalizacje tracą sens. Zasada: naprawiaj największe przecieki w lejku, nie dekoruj.",
    },
    {
      question: "Jaki jest dobry współczynnik konwersji?",
      answer:
        "Benchmarki konwersji wg branży: E-commerce fashion: 1-2%. E-commerce electronics: 0.5-1.5%. E-commerce beauty: 2-4%. B2B lead gen: 2-5%. SaaS free trial: 3-8%. Finanse/ubezpieczenia: 5-10% (dla kalkulatorów). Uwaga: 'dobry CR' to relatywne pojęcie — ważniejszy jest trend (czy rośnie?) niż absolutna wartość. Amazon ma CR 13% bo klienci przychodzą z silną intencją zakupu. Fokus: poprawiaj CR na kluczowych etapach lejka, a nie ogólny CR witryny.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CRO — co to jest? Conversion Rate Optimization — poradnik | fotz.pl"
        description="CRO co to jest — wyjaśniamy czym jest Conversion Rate Optimization, jak obliczyć współczynnik konwersji, techniki CRO i jak poprawić konwersję strony."
        canonical="https://fotz.pl/blog/cro-co-to-jest"

        keywords="CRO co to jest, CRO definicja, czym jest CRO, CRO przykłady, jak działa CRO, CRO znaczenie, CRO przewodnik"
      />
      <ArticleSchema
        title="CRO — co to jest? Conversion Rate Optimization — poradnik"
        description="Czym jest CRO (Conversion Rate Optimization), jak obliczyć CR, techniki optymalizacji konwersji, testy A/B, narzędzia CRO i benchmarki branżowe."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/cro-co-to-jest"
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
                <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> Optymalizacja konwersji</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CRO — co to jest i jak optymalizować konwersję?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CRO (Conversion Rate Optimization) to proces zwiększania odsetka odwiedzających,
                którzy podejmują pożądaną akcję. Techniki, narzędzia i benchmarki.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kluczowe techniki CRO</h2>
              <div className="space-y-3 mb-6">
                {croTechniques.map((t, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{t.technique}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Lejek konwersji — gdzie tracisz klientów?</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Przykładowy lejek e-commerce</p>
                <div className="space-y-2 text-slate-300">
                  <div className="flex justify-between"><span>Odwiedziny strony</span><span className="text-white">10 000</span></div>
                  <div className="flex justify-between"><span>Strony produktów</span><span className="text-yellow-400">4 000 (40%)</span></div>
                  <div className="flex justify-between"><span>Dodanie do koszyka</span><span className="text-yellow-400">800 (20%)</span></div>
                  <div className="flex justify-between"><span>Rozpoczęcie checkout</span><span className="text-orange-400">400 (50%)</span></div>
                  <div className="flex justify-between"><span className="text-green-400">Zakup (konwersja)</span><span className="text-green-400">200 (50%) = CR 2%</span></div>
                  <div className="border-t border-slate-700 pt-2 mt-2 text-xs text-slate-500">
                    CRO: popraw każdy etap o 10% → całkowita konwersja +46%
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Target className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zwiększyć konwersję swojej strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony z myślą o konwersji — UX, szybkość, CTA i testy A/B.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CRO co to jest</h2>
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
          heading="Zwiększ konwersję swojej strony z CRO"
          subheading="Audyt UX, testy A/B i optymalizacja — pomagamy zamienić ruch w klientów."
        />
      </Layout>
    </>
  );
}
