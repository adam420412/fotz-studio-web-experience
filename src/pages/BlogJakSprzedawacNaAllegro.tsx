import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, ShoppingBag, TrendingUp, Star, DollarSign } from "lucide-react";
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

export default function BlogJakSprzedawacNaAllegro() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Jak sprzedawać na Allegro — poradnik dla sprzedawców" },
  ];

  const allegSteps = [
    { step: "1", title: "Rejestracja konta firmowego", desc: "Załóż konto sprzedawcy na Allegro (wymagana firma). Wypełnij dane firmowe, numer konta bankowego, weryfikacja tożsamości." },
    { step: "2", title: "Konfiguracja konta", desc: "Ustaw logo, opis sklepu, politykę zwrotów, czas realizacji i sposoby dostawy. Dobra konfiguracja = wyższe konwersje." },
    { step: "3", title: "Dodawanie ofert", desc: "Tytuł z kluczowymi słowami, zdjęcia wysokiej jakości, szczegółowy opis, kategoria i atrybuty. Jakość oferty decyduje o widoczności." },
    { step: "4", title: "Cennik i promocje", desc: "Monitoruj konkurencję, ustaw konkurencyjne ceny. Allegro Smart! (darmowa dostawa) znacząco zwiększa konwersje." },
    { step: "5", title: "Obsługa klientów", desc: "Szybkie odpowiedzi na pytania (idealnie <2h), sprawna realizacja, reagowanie na komentarze — oceny wpływają na widoczność." },
  ];

  const faqItems = [
    {
      question: "Jak sprzedawać na Allegro jako firma?",
      answer:
        "Aby sprzedawać na Allegro jako firma: 1) Zarejestruj konto firmowe na allegro.pl. 2) Podaj NIP firmy i dane rejestrowe. 3) Przejdź weryfikację tożsamości. 4) Podaj konto bankowe do wypłat. 5) Wybierz plan abonamentowy (Allegro ma różne pakiety dla sprzedawców). Allegro pobiera prowizję od sprzedaży (4-12% w zależności od kategorii) oraz opłaty za wyróżnienia.",
    },
    {
      question: "Ile Allegro pobiera prowizji?",
      answer:
        "Prowizja Allegro zależy od kategorii: Elektronika: 4-7%, Odzież i obuwie: 8-10%, Dom i ogród: 6-8%, Zabawki: 8%, Motoryzacja: 3-5%. Do prowizji dochodzą: opłata za wystawienie oferty (0 lub kilka złotych), Allegro Coins (system premiowy), pakiet abonamentowy (Mój Allegro od ok. 40 zł/mies.). Warto sprawdzić aktualny cennik na allegro.pl — stawki się zmieniają.",
    },
    {
      question: "Jak zwiększyć sprzedaż na Allegro?",
      answer:
        "Sposoby na więcej sprzedaży: 1) Allegro Smart! — oferty z darmową dostawą mają wyższe konwersje. 2) Promocje i przeceny — Allegro eksponuje wyprzedaże. 3) Allegro Ads — płatne promowanie ofert w wynikach wyszukiwania. 4) Opinie — zbieraj aktywnie, odpowiadaj na negatywne. 5) Jakość oferty — zdjęcia, tytuły z frazami kluczowymi, opisy z atrybutami. 6) Fulfilment Allegro One — Allegro magazynuje i wysyła za Ciebie.",
    },
    {
      question: "Allegro czy własny sklep internetowy — co wybrać?",
      answer:
        "Allegro: gotowy ruch, szybki start, duże zasięgi. Wady: prowizje, zależność od platformy, trudne budowanie marki. Własny sklep: budowanie marki, brak prowizji, pełna kontrola, dane klientów. Wada: musisz samodzielnie generować ruch (SEO, reklamy). Najlepsza strategia to oba: Allegro do szybkiej sprzedaży + własny sklep do budowania marki i lojalności. Nie uzależniaj się od jednego kanału.",
    },
    {
      question: "Co to jest Allegro Smart! i czy warto?",
      answer:
        "Allegro Smart! to program darmowej dostawy dla kupujących (przy zamówieniach powyżej 40 zł). Dla sprzedawcy: musisz oferować bezpłatną dostawę co oznacza jej koszt wliczony w cenę. Korzyści: oferty Smart! mają wyższy ranking w wyszukiwarce Allegro, kupujący chętniej wybierają Smart!, konwersje rosną. Dane Allegro: produkty Smart! sprzedają się o 30-50% lepiej. Dla większości sprzedawców — zdecydowanie warto.",
    },
    {
      question: "Jak pisać tytuły ofert na Allegro żeby były widoczne?",
      answer:
        "Tytuł oferty na Allegro to kluczowy element widoczności — Allegro indeksuje frazy z tytułu. Zasady: zacznij od nazwy produktu + producent/marka, dodaj kluczowe cechy (kolor, rozmiar, model), unikaj caps lock i spamu słowami kluczowymi, użyj 70-100 znaków. Przykład zamiast 'SUPER TELEWIZOR OKAZJA 4K' → 'Telewizor Samsung 55 cali 4K QLED Smart TV 55Q80C'. Sprawdź jakie frazy wpisują kupujący w Allegro Analytics.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Jak sprzedawać na Allegro — poradnik dla sprzedawców 2025"
        description="Jak sprzedawać na Allegro — krok po kroku od rejestracji konta, przez wystawianie ofert, po zwiększanie sprzedaży. Prowizje Allegro i Allegro Smart! wyjaśnione."
        canonical="https://fotz.pl/blog/jak-sprzedawac-na-allegro"

        keywords="Jak sprzedawać na Allegro, Jak sprzedawać na Allegro co to jest, Jak sprzedawać na Allegro jak działa, Jak sprzedawać na Allegro definicja, Jak sprzedawać na Allegro przykłady, Jak sprzedawać na Allegro poradnik, Jak sprzedawać na Allegro przewodnik"
      />
      <ArticleSchema
        title="Jak sprzedawać na Allegro — poradnik dla sprzedawców"
        description="Jak założyć konto sprzedawcy na Allegro, wystawiać oferty, ile wynosi prowizja i jak zwiększyć sprzedaż przez Allegro Smart! i Allegro Ads."
        datePublished="2025-04-06"
        dateModified="2025-04-09"
        url="https://fotz.pl/blog/jak-sprzedawac-na-allegro"
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
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> E-commerce i marketplace</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Jak sprzedawać na Allegro — kompletny poradnik
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Allegro to największa platforma e-commerce w Polsce z 20+ milionami kupujących.
                Jak zacząć sprzedaż, ustawić konto i zwiększyć widoczność swoich ofert?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak zacząć sprzedawać na Allegro — 5 kroków</h2>
              <div className="space-y-3 mb-6">
                {allegSteps.map((item, idx) => (
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
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Co decyduje o widoczności oferty na Allegro?</h2>
              <div className="space-y-2 mb-6">
                {[
                  { factor: "Współczynnik konwersji", desc: "Ile osób klikających kupuje — Allegro nagradza oferty z wysoką konwersją" },
                  { factor: "Oceny i komentarze", desc: "Sklepy z dobrymi ocenami mają wyższy ranking i większe zaufanie kupujących" },
                  { factor: "Udział w Smart!", desc: "Oferty z darmową dostawą Smart! mają preferencje w algorytmie Allegro" },
                  { factor: "Jakość oferty", desc: "Zdjęcia, pełny opis, atrybuty produktu — Allegro ocenia kompletność" },
                  { factor: "Cena i konkurencyjność", desc: "Allegro monitoruje ceny — bardzo drogie oferty tracą widoczność" },
                  { factor: "Allegro Ads (płatne)", desc: "Promocja ofert w wynikach — bezpośredni wpływ na widoczność za budżet" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900 text-sm">{item.factor}: </span>
                      <span className="text-slate-600 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Allegro to nie wszystko — masz własny sklep?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Własny sklep + Allegro = dywersyfikacja kanałów. Nie uzależniaj się tylko od marketplace.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Sklep internetowy — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Jak sprzedawać na Allegro</h2>
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
