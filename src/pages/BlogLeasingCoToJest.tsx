import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Car, DollarSign, CheckCircle2, TrendingUp } from "lucide-react";
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

export default function BlogLeasingCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Leasing — co to jest? Leasing operacyjny vs finansowy" },
  ];

  const leasingComparison = [
    { cecha: "Wlasciciel w trakcie umowy", operacyjny: "Leasingodawca (firma leasingowa)", finansowy: "Leasingobiorca (Ty)" },
    { cecha: "Koszty uzyskania przychodu", operacyjny: "Cala rata leasingowa", finansowy: "Tylko czesc odsetkowa raty" },
    { cecha: "VAT", operacyjny: "Rozkladany na raty", finansowy: "Caly VAT na poczatku" },
    { cecha: "Amortyzacja", operacyjny: "Po stronie leasingodawcy", finansowy: "Po stronie leasingobiorcy" },
    { cecha: "Wykup po umowie", operacyjny: "Opcja wykupu (np. 1% wartosci)", finansowy: "Wlasnosc automatycznie" },
    { cecha: "Popularnosc", operacyjny: "Zdecydowanie popularniejszy", finansowy: "Rzadziej stosowany" },
  ];

  const faqItems = [
    {
      question: "Co to jest leasing?",
      answer:
        "Leasing to forma finansowania, w ktorej firma leasingowa (leasingodawca) nabywa dla Ciebie (leasingobiorcy) okreslony przedmiot (samochod, maszyne, sprzet IT) i oddaje Ci go w uzytkowanie na czas oznaczony w zamian za miesieczne raty leasingowe. Leasing umozliwia korzystanie z drogich aktywow bez angazu wlasnego kapitalu. Na koniec umowy leasingobiorcy przysluguje prawo wykupu. W Polsce leasing jest bardzo popularny wsrod przedsiebiorcow — szczegolnie do finansowania samochodow i sprzetu. Leasingowac mozna: samochody osobowe i dostawcze, maszyny i urzadzenia, sprzet komputerowy i biurowy, nieruchomosci (rzadziej).",
    },
    {
      question: "Jaka jest roznica miedzy leasingiem operacyjnym a finansowym?",
      answer:
        "Leasing operacyjny: najczesciej wybierany przez firmy. Leasingodawca jest wlascicielem przez caly czas trwania umowy. Cala rata leasingowa jest kosztem uzyskania przychodu (obniza PIT/CIT). VAT rozkladany jest na raty miesiecznie. Na koncu umowy mozna wykupic przedmiot za czesc wartosci (np. 1%). Leasing finansowy: leasingobiorca jest wlascicielem ekonomicznym od poczatku. Amortyzuje przedmiot sam. Kosztem jest tylko czesc odsetkowa rat. VAT platny z gory przy pierwszej racie. Automatyczne przejscie wlasnosci po splacie. Wybor: dla wiekszosci firm (szczegolnie samochodow) leasing operacyjny jest korzystniejszy podatkowo.",
    },
    {
      question: "Jakie sa zalety leasingu dla firmy?",
      answer:
        "Zalety leasingu operacyjnego: Brak potrzeby duzego kapitalu wlasnego — maly lub zerowy wklad wlasny. Pelna rata jako koszt — efektywne obnizenie PIT/CIT. Odliczenie VAT od rat — dla platnikow VAT. Ochrona plynnosci finansowej — nie angazu oszczednosci. Latwosc wymiany na nowy model po zakonczeniu umowy. Wsparcie administracyjne — ubezpieczenie, serwis w pakiecie (full service leasing). Brak ujecia w bilansie (leasing operacyjny) — nie pogarsza wskaznikow dlugu. Szybsza procedura niz kredyt bankowy.",
    },
    {
      question: "Co mozna leasingowac?",
      answer:
        "Przedmioty leasingu w Polsce: Samochody osobowe — najpopularniejszy rodzaj leasingu. Limit kosztow: 150 000 zl dla auta spalinowego, 225 000 zl dla elektrycznego. Samochody dostawcze i ciezarowe — bez limitu kosztowego (pojazdy firmowe). Maszyny i urzadzenia produkcyjne. Sprzet IT — komputery, serwery, drukarki. Sprzet medyczny. Nieruchomosci komercyjne (leasing nieruchomosci). Wartosci niematerialne (leasing oprogramowania — rzadko). Wymagania: przedmiot musi miec wartosc poczatkowa co najmniej 10 000 zl netto, umowa min. 40% normatywnego okresu amortyzacji.",
    },
    {
      question: "Leasing czy kredyt — co sie bardziej oplaca?",
      answer:
        "Porownanie leasing vs kredyt bankowy: Leasing — szybsza procedura, mniejszy wklad wlasny, pelna rata jako koszt (operacyjny), mozliwy VAT na raty, bez zastawy/hipoteki. Kredyt — stajesz sie wlascicielem od razu, mozesz swobodnie rozporz. pojazdem (sprzedac, zmodyfikowac), brak limitu 150 000 zl dla aut osobowych, nizsze oprocentowanie przy dobrej zdolnosci kredytowej. Kiedy leasing wygrywa: chcesz regularnie wymieniac auto, zalezys Ci na kosztach podatkowych i VAT, nie masz zdolnosci kredytowej (leasing latwiej dostepny). Kiedy kredyt wygrywa: planujesz trzymac auto dlugo, auto ma wartosc >150 000 zl (limit leasingowy), chcesz byc wlascicielem od razu.",
    },
    {
      question: "Jak rozliczyc leasing samochodu w kosztach firmy?",
      answer:
        "Leasing samochodu osobowego — zasady podatkowe: Leasing operacyjny auta osobowego: cala rata leasingowa jest kosztem, ale tylko do limitu 150 000 zl wartosci auta. Jezeli auto kosztuje 200 000 zl netto, to w koszty mozna zaliczyc tylko 75% raty (150 000/200 000). Auto uzytkowane mieszanie (firmowo i prywatnie): tylko 75% raty w koszty (i 50% VAT od raty). Auto tylko firmowe (bez prawa jazdy prywatnego): 100% raty w koszty, 100% VAT. Leasing auta elektrycznego: limit 225 000 zl. Uwaga: paliwo przy uzyciu mieszanym — takze 75% w koszty i 50% VAT.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Leasing — co to jest? Leasing operacyjny vs finansowy | fotz.pl"
        description="Leasing co to jest — wyjasnamy czym jest leasing operacyjny i finansowy, zalety dla firmy, co mozna leasingowac i jak rozliczyc leasing samochodu w kosztach."
        canonical="https://fotz.pl/blog/leasing-co-to-jest"

        keywords="Leasing co to jest, Leasing definicja, czym jest Leasing, Leasing przykłady, jak działa Leasing, Leasing znaczenie, Leasing przewodnik"
      />
      <ArticleSchema
        title="Leasing — co to jest? Leasing operacyjny vs finansowy"
        description="Czym jest leasing, roznica leasing operacyjny vs finansowy, zalety dla firmy, co mozna leasingowac, leasing vs kredyt i rozliczenie leasingu samochodu."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/leasing-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Car className="w-4 h-4" /> Finansowanie dla firm</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Leasing — co to jest i jak dziala dla firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Leasing to forma finansowania aktywow bez angazu wlasnego kapitalu.
                Roznica leasing operacyjny vs finansowy, zalety i rozliczenie podatkowe.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Leasing operacyjny vs finansowy</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">Operacyjny</th>
                      <th className="text-left p-3 border border-slate-700">Finansowy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leasingComparison.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.cecha}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.operacyjny}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.finansowy}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak dziala leasing operacyjny — przyklad</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Przyklad: leasing auta osobowego 100 000 zl</p>
                <div className="space-y-1 text-slate-300">
                  <p>Wartosc auta:    <span className="text-white">100 000 zl netto</span></p>
                  <p>Wklad wlasny:    <span className="text-white">10 000 zl (10%)</span></p>
                  <p>Czas umowy:      <span className="text-white">36 miesiecy</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p>Rata miesieczna: <span className="text-blue-400">~2 500 zl netto</span></p>
                    <p>Rata w koszty:   <span className="text-green-400">100% (ponizej limitu 150 000 zl)</span></p>
                    <p>VAT od raty:     <span className="text-yellow-400">odliczenie 100% (uzytek firmowy)</span></p>
                  </div>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-green-400">Wykup po 36 mies.: 1% = 1 000 zl</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Finansujesz firme przez leasing? Zadbaj o widocznosc online</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona internetowa to rowniez inwestycja — leasinguj rowniez swoj marketing cyfrowy.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Leasing co to jest</h2>
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
          heading="Zainwestuj w strone, ktora przynosi klientow"
          subheading="Tak jak leasing finansuje Twoj sprzet, my budujemy strone ktora pracuje na Twoje przychody."
        />
      </Layout>
    </>
  );
}
