import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Zap, Eye, Users, Layers } from "lucide-react";
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

export default function BlogUXDesignCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "UX Design — co to jest i jak wpływa na konwersję?" },
  ];

  const uxPrinciples = [
    { icon: Users, principle: "Użytkownik na pierwszym miejscu", desc: "Projektuj dla realnych potrzeb użytkownika, nie dla estetyki designera czy wymagań zarządu." },
    { icon: Eye, principle: "Hierarchia wizualna", desc: "Najważniejsze elementy muszą być widoczne od razu. CTA, nagłówki, kluczowe informacje." },
    { icon: Zap, principle: "Szybkość i prostota", desc: "Każde zbędne kliknięcie, pole formularza czy krok to utracona konwersja. Less is more." },
    { icon: Layers, principle: "Spójność", desc: "Takie same elementy zachowują się tak samo w całym serwisie. Brak niespodzianek dla użytkownika." },
  ];

  const faqItems = [
    {
      question: "Co to jest UX Design?",
      answer:
        "UX Design (User Experience Design) to proces projektowania produktów cyfrowych (stron, aplikacji) skupiony na doświadczeniach i emocjach użytkownika. UX obejmuje badania użytkowników, architekturę informacji, wireframing, prototypowanie i testowanie. Cel UX: produkt musi być użyteczny (użytkownik może osiągnąć cel), dostępny (dla różnych użytkowników), intuicyjny (bez instrukcji), przyjemny w użyciu. Don Norman, twórca pojęcia UX: doświadczenie użytkownika obejmuje wszystkie aspekty interakcji człowieka z firmą, jej usługami i produktami.",
    },
    {
      question: "Czym różni się UX od UI?",
      answer:
        "UX (User Experience) dotyczy całości doświadczenia użytkownika — jak działa produkt, jak użytkownik przez niego nawiguje, jak łatwo osiąga cel. UI (User Interface) dotyczy wizualnej strony interfejsu — kolory, czcionki, ikony, układ elementów. Analogia: UX to szkielet i układ pomieszczeń w domu. UI to malowanie ścian i wybór mebli. Można mieć piękny UI (ładne kolory) ale zły UX (nie wiadomo gdzie kliknąć). Najlepsze produkty mają oba: dobry UX i piękny UI.",
    },
    {
      question: "Jak UX wpływa na konwersję?",
      answer:
        "UX bezpośrednio przekłada się na konwersję: Forrester Research: dobry UX może zwiększyć konwersję o 200-400%. Amazon: każda sekunda opóźnienia ładowania strony = 1% mniej konwersji. Baymard Institute: 69% koszyków jest porzucanych — głównie przez zły UX procesu zakupu. Kluczowe elementy UX wpływające na konwersję: szybkość strony, czytelność nawigacji, długość i prostota formularzy, widoczność CTA (Call to Action), zaufanie wizualne (SSL, recenzje, loga klientów), responsywność mobilna.",
    },
    {
      question: "Czym zajmuje się UX Designer?",
      answer:
        "Zakres pracy UX Designera: Research — wywiady z użytkownikami, testy użyteczności, analiza danych (heatmapy, nagrania sesji). Architektura informacji — jak zorganizować treści i nawigację. Wireframing — szkielety układu strony bez finalnego designu. Prototypowanie — interaktywne modele w Figma, Adobe XD. Testy A/B — porównanie wariantów pod kątem konwersji. Narzędzia UX Designer: Figma (projektowanie), Hotjar (heatmapy, nagrania), Maze/Lookback (testy użyteczności), Optimal Workshop (badanie architektury informacji).",
    },
    {
      question: "Jak poprawić UX strony internetowej?",
      answer:
        "Praktyczne metody poprawy UX: 1) Analiza nagrań sesji (Hotjar, Microsoft Clarity) — gdzie użytkownicy się gubią. 2) Heatmapy — co klikają i gdzie patrzą. 3) Testy A/B — testuj nagłówki, CTA, układ. 4) Optymalizacja prędkości — Core Web Vitals (LCP poniżej 2.5s, CLS poniżej 0.1). 5) Upraszczaj formularze — każde zbędne pole to mniej konwersji. 6) Mobile-first — ponad 60% ruchu to mobile. 7) Dostępność (accessibility) — kontrast, alt texty, nawigacja klawiaturą.",
    },
    {
      question: "Ile zarabia UX Designer w Polsce?",
      answer:
        "Wynagrodzenia UX Designerów w Polsce (2025): Junior UX Designer: 4000-7000 zł brutto. Mid UX Designer: 7000-12 000 zł brutto. Senior UX Designer: 12 000-20 000 zł brutto. UX Lead / Design Manager: 18 000-30 000 zł brutto. B2B (faktura): stawka 80-250 zł/h. Freelancer: 80-200 zł/h lub projekty od 5000 zł. UX jest jedną z najszybciej rozwijających się specjalizacji w branży tech — zapotrzebowanie rośnie, szczególnie w e-commerce i SaaS.",
    },
  ];

  return (
    <>
      <SEOHead
        title="UX Design — co to jest i jak wpływa na konwersję? | fotz.pl"
        description="UX Design co to jest — wyjaśniamy czym jest User Experience Design, różnica UX vs UI, jak UX wpływa na konwersję strony i jak poprawić UX witryny."
        canonical="https://fotz.pl/blog/ux-design-co-to"

        keywords="UX Design co to jest, UX Design definicja, czym jest UX Design, UX Design przykłady, jak działa UX Design, UX Design znaczenie, UX Design przewodnik"
      />
      <ArticleSchema
        title="UX Design — co to jest i jak wpływa na konwersję?"
        description="Czym jest UX Design (User Experience), różnica UX vs UI, jak UX wpływa na konwersję, co robi UX Designer i jak poprawić UX strony internetowej."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/ux-design-co-to"
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
                <span className="flex items-center gap-1"><Eye className="w-4 h-4" /> Projektowanie stron</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                UX Design — co to jest i jak wpływa na konwersję?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                UX Design (User Experience) to projektowanie produktów skupione na doświadczeniu użytkownika.
                Dobry UX może zwiększyć konwersję o 200-400%. Jak go wdrożyć?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Fundamenty dobrego UX</h2>
              <div className="space-y-4 mb-6">
                {uxPrinciples.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-slate-900 text-sm">{p.principle}</h3>
                      </div>
                      <p className="text-slate-600 text-sm">{p.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">UX vs UI — kluczowe różnice</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Aspekt</th>
                      <th className="text-left p-3 border border-slate-700">UX Design</th>
                      <th className="text-left p-3 border border-slate-700">UI Design</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { aspect: "Fokus", ux: "Doświadczenie i użyteczność", ui: "Wygląd i estetyka" },
                      { aspect: "Pytanie", ux: "Czy użytkownik osiąga cel?", ui: "Czy interfejs wygląda dobrze?" },
                      { aspect: "Narzędzia", ux: "Figma, Hotjar, testy użytkowników", ui: "Figma, Adobe XD, Illustrator" },
                      { aspect: "Deliverables", ux: "Wireframes, user flows, prototypy", ui: "Mockupy, design system, komponenty" },
                      { aspect: "Mierzone przez", ux: "Konwersja, task completion rate", ui: "Satysfakcja estetyczna, brand" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.ux}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.ui}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Eye className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz poprawić UX swojej strony?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strony z UX-first — każdy element służy konwersji i doświadczeniu użytkownika.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — UX Design co to jest</h2>
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
          heading="Zaprojektujemy stronę z dobrym UX i wysoką konwersją"
          subheading="Research, wireframes, design — wszystko skupione na celu użytkownika i Twoim wyniku biznesowym."
        />
      </Layout>
    </>
  );
}
