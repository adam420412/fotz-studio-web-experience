import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Layers, Users, Zap, BarChart2 } from "lucide-react";
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

export default function BlogUIUXCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "UI/UX — co to jest? Projektowanie interfejsu i doświadczeń" },
  ];

  const uiElements = [
    "Układ strony (layout) — rozmieszczenie elementów na ekranie",
    "Kolorystyka i kontrast — czytelność i hierarchia wizualna",
    "Typografia — dobór i wielkość czcionek, odstępy między liniami",
    "Przyciski i CTA — wygląd, rozmiar, kolor, umiejscowienie",
    "Ikony i grafiki — spójność i intuicyjność",
    "Animacje i przejścia — mikro-animacje wzmacniające interakcję",
  ];

  const uxProcess = [
    { icon: Users, step: "1", title: "Badanie użytkowników (UX Research)", desc: "Wywiady, ankiety, analiza zachowań. Kim jest użytkownik, czego szuka, jakie ma problemy." },
    { icon: Layers, step: "2", title: "Architektura informacji", desc: "Jak zorganizować treść, nawigację i strukturę serwisu. Mapa strony, card sorting." },
    { icon: Zap, step: "3", title: "Wireframes i prototypy", desc: "Szkice interfejsu — od prostych wireframes po interaktywne prototypy w Figma." },
    { icon: BarChart2, step: "4", title: "Testy użyteczności", desc: "Testy z prawdziwymi użytkownikami — co działa, co jest mylące. A/B testy, heatmapy." },
  ];

  const faqItems = [
    {
      question: "Co to jest UI (User Interface)?",
      answer:
        "UI (User Interface) to interfejs użytkownika — wizualna warstwa aplikacji lub strony internetowej. Obejmuje wszystko co widzi i z czym wchodzi w interakcję użytkownik: przyciski, formularze, menu, kolory, typografię, ikony, animacje. Dobry UI jest estetyczny, spójny i intuicyjny — użytkownik nie musi się zastanawiać jak coś działa.",
    },
    {
      question: "Co to jest UX (User Experience)?",
      answer:
        "UX (User Experience) to doświadczenie użytkownika — jak czuje się korzystając z produktu. UX obejmuje cały 'flow' użytkownika: czy strona jest intuicyjna, czy szybko można znaleźć potrzebne informacje, czy zakup jest prosty, czy nie ma zbędnych kroków. Dobry UX = użytkownik osiąga swój cel bez frustracji i z przyjemnością.",
    },
    {
      question: "Jaka jest różnica między UI a UX?",
      answer:
        "UI = jak to wygląda. UX = jak to działa i jak się z tego korzysta. Analogia: UI to wygląd samochodu (design), UX to jak się prowadzi (ergonomia, obsługa). Można mieć piękny UI z kiepskim UX (ładna, ale niezrozumiała aplikacja) lub dobry UX z brzydkim UI (funkcjonalny ale brzydki serwis). Najlepsza strona ma i dobry UI i dobry UX.",
    },
    {
      question: "Dlaczego UI/UX jest ważne dla biznesu?",
      answer:
        "Inwestycja w UI/UX bezpośrednio wpływa na konwersje i przychody. Badania pokazują: 1 USD zainwestowany w UX daje 100 USD zwrotu (ROI 9900%), strony z dobrym UX mają o 200% wyższe współczynniki konwersji, 88% użytkowników nie wraca po złym doświadczeniu. Szczególnie ważne dla sklepów — każde uproszczenie procesu zakupu = więcej transakcji.",
    },
    {
      question: "Co to jest design system?",
      answer:
        "Design system to biblioteka komponentów UI z określonymi zasadami użycia — kolory, typografia, przyciski, formularze, karty, modale itp. Znane przykłady: Material Design (Google), Human Interface Guidelines (Apple), Ant Design. Własny design system dla firmy zapewnia spójność wizualną na wszystkich produktach i przyspiesza pracę designerów i deweloperów.",
    },
    {
      question: "Ile kosztuje projektowanie UI/UX?",
      answer:
        "Ceny projektowania UI/UX: strona firmowa (5-10 podstron) 2000-8000 zł, sklep internetowy 5000-20 000 zł, aplikacja mobilna 10 000-50 000+ zł, design system 15 000-100 000 zł. Stawki godzinowe designerów: junior 50-100 zł/h, mid 100-200 zł/h, senior 200-400 zł/h, agencja 300-800 zł/h.",
    },
  ];

  return (
    <>
      <SEOHead
        title="UI/UX — co to jest? Projektowanie interfejsu i doświadczeń"
        description="UI UX co to jest — wyjaśniamy czym jest UI (interfejs użytkownika) i UX (doświadczenie użytkownika), jaka jest różnica i dlaczego wpływają na konwersje…"
        canonical="https://fotz.pl/blog/ui-ux-co-to"

        keywords="UI/UX co to jest, UI/UX definicja, czym jest UI/UX, UI/UX przykłady, jak działa UI/UX, UI/UX znaczenie, UI/UX przewodnik"
      />
      <ArticleSchema
        title="UI/UX — co to jest? Projektowanie interfejsu i doświadczeń użytkownika"
        description="Czym jest UI (User Interface) i UX (User Experience), jaka jest różnica między nimi i dlaczego mają kluczowy wpływ na konwersje."
        datePublished="2025-02-12"
        dateModified="2025-03-30"
        url="https://fotz.pl/blog/ui-ux-co-to"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Layers className="w-4 h-4" /> Design i UX</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                UI/UX — co to jest? Interfejs użytkownika i doświadczenia
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                UI to jak strona wygląda. UX to jak się z niej korzysta. Razem decydują czy odwiedzający
                zostanie klientem — czy odejdzie do konkurencji po 3 sekundach.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">UI vs UX — prosta analogia</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    label: "UI (User Interface)",
                    color: "blue",
                    subtitle: "Jak to wygląda",
                    items: ["Kolory, typografia, układ strony", "Przyciski, formularze, menu", "Ikony, ilustracje, animacje", "Spójność wizualna na wszystkich ekranach", "Estetyka i styl"],
                  },
                  {
                    label: "UX (User Experience)",
                    color: "green",
                    subtitle: "Jak z tego się korzysta",
                    items: ["Intuicyjność nawigacji", "Szybkość osiągania celu", "Eliminacja zbędnych kroków", "Zrozumiałe komunikaty błędów", "Ogólne poczucie satysfakcji"],
                  },
                ].map((col, idx) => (
                  <div key={idx} className={`bg-${col.color}-50 p-5 rounded-lg border border-${col.color}-200`}>
                    <h3 className={`font-bold text-${col.color}-800 mb-1`}>{col.label}</h3>
                    <p className={`text-${col.color}-600 text-xs mb-3 italic`}>{col.subtitle}</p>
                    {col.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 mb-1">
                        <CheckCircle2 className={`w-3.5 h-3.5 text-${col.color}-600 flex-shrink-0 mt-0.5`} />
                        <span className="text-slate-700 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Elementy dobrego UI</h2>
              <div className="space-y-2 mb-6">
                {uiElements.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Proces UX Design</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {uxProcess.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{item.step}</div>
                        <Icon className="w-4 h-4 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">UX a konwersje — co mówią dane?</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "9900%", desc: "ROI z inwestycji w UX wg Forrester Research (1$ → 100$ zwrotu)" },
                  { stat: "200%", desc: "wyższe konwersje na stronach z lepszym UX" },
                  { stat: "88%", desc: "użytkowników nie wraca po złym doświadczeniu z serwisem" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Chcesz stronę z dobrym UI/UX?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony z myślą o konwersji — każdy element ma swoje miejsce i cel.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron internetowych <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — UI/UX co to jest</h2>
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
