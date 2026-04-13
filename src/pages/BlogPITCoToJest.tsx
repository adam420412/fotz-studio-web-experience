import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Calculator, TrendingUp, AlertCircle } from "lucide-react";
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

export default function BlogPITCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "PIT — co to jest? Podatek dochodowy — poradnik" },
  ];

  const pitForms = [
    { form: "PIT-37", desc: "Dla pracownikow etatowych i zleceniobiorcow — przychody od pracodawcy lub zamawiajacego.", deadline: "30 kwietnia" },
    { form: "PIT-36", desc: "Dla przedsiebiorcow na zasadach ogolnych, osob z przychodami zagranicznymi lub wieloma zrodlami.", deadline: "30 kwietnia" },
    { form: "PIT-36L", desc: "Dla przedsiebiorcow rozliczajacych sie podatkiem liniowym 19%.", deadline: "30 kwietnia" },
    { form: "PIT-28", desc: "Dla osob na ryczalcie od przychodow ewidencjonowanych.", deadline: "30 kwietnia" },
    { form: "PIT-38", desc: "Dla osob z przychodami kapitalowymi — gielda, dywidendy, kryptowaluty.", deadline: "30 kwietnia" },
    { form: "PIT-39", desc: "Dla osob ze sprzedaza nieruchomosci.", deadline: "30 kwietnia" },
  ];

  const taxRates = [
    { threshold: "Do 30 000 zl (kwota wolna)", rate: "0%", note: "Brak podatku dochodowego" },
    { threshold: "30 001 – 120 000 zl", rate: "12%", note: "Pierwsza skala podatkowa" },
    { threshold: "Powyzej 120 000 zl", rate: "32%", note: "Druga skala podatkowa" },
    { threshold: "Podatek liniowy (B2B)", rate: "19%", note: "Stala stawka bez kwoty wolnej" },
    { threshold: "Ryczalt — IT/programisci", rate: "12%", note: "Stawka ryczaltu dla niektorych uslug IT" },
    { threshold: "Ryczalt — wolne zawody", rate: "17%", note: "Np. lekarze, architekci" },
  ];

  const faqItems = [
    {
      question: "Co to jest PIT?",
      answer:
        "PIT (Personal Income Tax) to podatek dochodowy od osob fizycznych — podstawowy podatek placony przez osoby fizyczne w Polsce od uzyskanych dochodow. PIT placa: pracownicy etatowi, przedsiebiorcy (JDG), zleceniobiorcy, osoby z umowa o dzielo, inwestorzy (gielda, krypto), wynajmujacy nieruchomosci. Stawki PIT w Polsce: 12% (do 120 000 zl dochodu) i 32% (powyzej). Kwota wolna od podatku: 30 000 zl rocznie. PIT rozlicza sie raz w roku — zeznanie roczne do 30 kwietnia.",
    },
    {
      question: "Jak obliczyc PIT?",
      answer:
        "Obliczanie PIT krok po kroku: 1) Ustal przychod brutto (suma wszystkich dochodow w roku). 2) Odejmij koszty uzyskania przychodu (dla etatowcow zryczaltowane, dla JDG rzeczywiste). 3) Dochod = Przychod - Koszty. 4) Odejmij odliczenia (ulga na dzieci, ulga B+R, skladzki ZUS). 5) Podstawa opodatkowania = Dochod - Odliczenia. 6) Oblicz podatek: 12% od 30 001-120 000 zl + 32% od nadwyzki. 7) Odejmij ulgi podatkowe (ulga prorodzinna). 8) Odejmij zaliczki wplacone w ciagu roku. 9) Wynik to doplata lub zwrot. Przyklad: dochod 80 000 zl → podatek = (80 000 - 30 000) x 12% = 6 000 zl.",
    },
    {
      question: "Do kiedy trzeba zlozyc PIT?",
      answer:
        "Termin zlozenia PIT: 30 kwietnia roku nastepnego po roku podatkowym. Zeznanie za 2024 rok nalezy zlozyc do 30 kwietnia 2025. Jak zlozyc: online przez e-Urzad Skarbowy (e-pity) — najprostrze i najszybsze. Przez Twoj e-PIT (automatyczne wypelnienie przez US). Papierowo w urzedzie skarbowym (odchodza w niepamiec). Uwaga: jesli nie zlozysz zeznania, urzad skarbowy zatwierdzi Twoj e-PIT 30 kwietnia automatycznie (dotyczy PIT-37 i PIT-38). Kara za niezlozenie: do 720 stawek dziennych grzywny.",
    },
    {
      question: "Jakie sa ulgi podatkowe w PIT?",
      answer:
        "Najpopularniejsze ulgi w PIT: Ulga na dzieci (prorodzinna): 92,67 zl/mies. na pierwsze dziecko, wiecej na kolejne. Ulga B+R: odliczenie kosztow dzialalnosci badawczo-rozwojowej do 200%. IP Box: 5% podatek od dochodu z kwalifikowanych praw wlasnosci intelektualnej (np. programisci). Ulga dla mlodych: brak PIT do 26 roku zycia do 85 528 zl rocznie. Ulga dla powracajacych: 4-letnie zwolnienie dla Polakow wracajacych z zagranicy. IKZE: odliczenie wplat na IKZE (do 8322 zl w 2024). Darowizny: odliczenie do 6% dochodu na cel charytatywny.",
    },
    {
      question: "Czym rozni sie PIT od VAT i ZUS?",
      answer:
        "Roznice miedzy PIT, VAT i ZUS: PIT (podatek dochodowy) — placi sie od DOCHODU (przychod minus koszty). Trafi do budzetu panstwa. Rozliczenie roczne. VAT (podatek od towarow i uslug) — placi sie od SPRZEDAZY, ale mozna odliczyc VAT od zakupow. Nie jest kosztem (jest neutralny dla VAT-owcow). Rozliczenie miesieczne lub kwartalne. ZUS (skladki spoleczne) — nie jest podatkiem, ale obowizkowym ubezpieczeniem. Finansuje emeryture, ubezpieczenie zdrowotne i chorobowe. Dla przedsiebiorcow w 2024 minimalne skladki to ok. 1600 zl/mies. Wszystkie trzy sa obowiazkowe dla przedsiebiorcow prowadzacych JDG.",
    },
    {
      question: "Jaki PIT dla freelancera i przedsiebiorcy?",
      answer:
        "Formy opodatkowania dla JDG i freelancerow: Zasady ogolne (skala): 12% i 32% — najkorzystniejsze przy niskich dochodach i duzych kosztach lub ulgach (np. ulga na dzieci). Formularz PIT-36. Podatek liniowy: 19% stala stawka — korzystny powyzej ok. 120 000 zl dochodu lub gdy nie korzystasz z ulg. Brak kwoty wolnej. Formularz PIT-36L. Ryczalt od przychodow: stawki 2-17% od PRZYCHODU (bez odliczania kosztow) — dobry gdy masz niskie koszty. Popularne stawki: 12% dla programistow, 8,5% dla e-commerce. Karta podatkowa: stala kwota niezalezna od przychodu — rzadko stosowana, likwidowana.",
    },
  ];

  return (
    <>
      <SEOHead
        title="PIT — co to jest? Podatek dochodowy — stawki i rozliczenie | fotz.pl"
        description="PIT co to jest — wyjasnamy czym jest podatek dochodowy od osob fizycznych, stawki PIT, formularze, ulgi podatkowe i jak rozliczyc PIT krok po kroku."
        canonical="https://fotz.pl/blog/pit-co-to-jest"

        keywords="PIT co to jest, PIT definicja, czym jest PIT, PIT przykłady, jak działa PIT, PIT znaczenie, PIT przewodnik"
      />
      <ArticleSchema
        title="PIT — co to jest? Podatek dochodowy — stawki i rozliczenie"
        description="Czym jest PIT (podatek dochodowy), stawki 12% i 32%, formularze PIT-37/36/28, ulgi podatkowe i jak rozliczyc PIT dla pracownika i przedsiebiorcy."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/pit-co-to-jest"
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
                <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Podatki i ksiegowosc</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                PIT — co to jest i jak rozliczyc podatek dochodowy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                PIT (Personal Income Tax) to podatek dochodowy od osob fizycznych. Stawki, formularze,
                ulgi i jak rozliczyc PIT dla pracownika, freelancera i przedsiebiorcy.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Stawki PIT i progi podatkowe (2024/2025)</h2>
              <div className="space-y-2 mb-6">
                {taxRates.map((r, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{r.threshold}</p>
                      <p className="text-slate-500 text-xs">{r.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{r.rate}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Formularze PIT — który wybrać?</h2>
              <div className="space-y-3 mb-6">
                {pitForms.map((f, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-bold text-slate-900 text-sm">{f.form}</p>
                        <span className="text-xs text-slate-500">Termin: {f.deadline}</span>
                      </div>
                      <p className="text-slate-600 text-xs">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykladowe obliczenie PIT</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Przyklad: pracownik, zarobki 90 000 zl/rok</p>
                <div className="space-y-1 text-slate-300">
                  <p>Przychod brutto:          <span className="text-white">90 000 zl</span></p>
                  <p>Koszty uzysk. przychodu:  <span className="text-white">- 3 000 zl</span></p>
                  <p>Dochod:                   <span className="text-white">87 000 zl</span></p>
                  <p>Kwota wolna:              <span className="text-white">- 30 000 zl</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p>Podstawa op.:  <span className="text-blue-400">57 000 zl</span></p>
                    <p>Podatek 12%:   <span className="text-yellow-400">57 000 x 12% = 6 840 zl</span></p>
                  </div>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-green-400">PIT do zaplaty: ~6 840 zl (minus zaliczki)</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Calculator className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Prowadzisz firme lub jestes freelancerem?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Dobra strona internetowa to koszt uzyskania przychodu — obniza PIT i buduje pipeline klientow.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — PIT co to jest</h2>
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
          heading="Zbuduj strone ktora pracuje na Twoje przychody"
          subheading="Strona internetowa to inwestycja — koszt uzyskania przychodu, ktory przynosi klientow przez lata."
        />
      </Layout>
    </>
  );
}
