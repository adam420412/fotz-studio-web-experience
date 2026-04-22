import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, FileText, DollarSign, Calculator, Shield } from "lucide-react";
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

export default function BlogVATCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "VAT - co to jest i jak dziala?" },
  ];

  const vatRates = [
    { rate: "23%", name: "Stawka podstawowa", examples: "Wiekszoc towarow i uslug, elektronika, meble, uslug budowlane" },
    { rate: "8%", name: "Stawka obnizona", examples: "Budownictwo mieszkaniowe, uslugi gastronomiczne, transport pasazerski" },
    { rate: "5%", name: "Stawka obnizona", examples: "Produkty spozywcze, ksiazki, czasopisma, leki" },
    { rate: "0%", name: "Stawka zerowa", examples: "Eksport towarow, transport miedzynarodowy, niektore uslugi finansowe" },
    { rate: "ZW", name: "Zwolnienie", examples: "Uslugu medyczne, edukacyjne, finansowe - nie sa opodatkowane VAT" },
  ];

  const faqItems = [
    {
      question: "Co to jest VAT?",
      answer:
        "VAT (Value Added Tax, podatek od wartosci dodanej, w Polsce: podatek od towarow i uslug - PTU) to posredni podatek konsumpcyjny pobierany na kazdym etapie produkcji i sprzedazy. W Polsce VAT wynosi standardowo 23%. Kupujac produkt w sklepie placisz cene brutto (z VAT). Firma odprowadza VAT nalezny do urzedu skarbowego, ale moze odliczyc VAT naliczony (zaplacony przy zakupach dla firmy). Konsument koncowykoniecznie placi caly VAT - firmy sa jedynie posrednikami.",
    },
    {
      question: "Kiedy rejestruje sie do VAT?",
      answer:
        "Obowiazek rejestracji VAT (zostanie czynnym podatnikiem VAT): przekroczenie 200 000 zl obrotu rocznie, swiadczenie uslug dla podmiotow z UE (VAT UE od pierwszej transakcji), import uslug, sprzedaz towarow objeta obowiazkiem VAT bez wzgledu na obrot. Mozna rejestrowac sie dobrowolnie nawet od pierwszej zlotowki - co jest korzystne gdy masz duze koszty z VAT (np. sprzet, uslugi IT) i chcesz je odliczyc. Rejestracja: formularz VAT-R w urzedzie skarbowym lub online przez e-Urzad Skarbowy.",
    },
    {
      question: "Jak obliczac VAT?",
      answer:
        "Obliczanie VAT: Cena netto (bez VAT) + VAT = Cena brutto (z VAT). Przy stawce 23%: Cena brutto = Cena netto x 1,23. Cena netto = Cena brutto / 1,23. Kwota VAT = Cena netto x 0,23 lub Cena brutto - Cena netto. Przyklad: towar netto 1000 zl + 23% VAT (230 zl) = cena brutto 1230 zl. VAT nalezny (sprzedaz) - VAT naliczony (zakupy dla firmy) = VAT do zaplaty do US. Jesli VAT naliczony jest wyzszy - dostaniesz zwrot z urzedu skarbowego.",
    },
    {
      question: "Co to jest faktura VAT?",
      answer:
        "Faktura VAT to dokument ksiegowy wystawiany przez czynnego podatnika VAT potwierdzajacy transakcje. Musi zawierac: date wystawienia, numer kolejny, dane sprzedawcy i nabywcy (NIP), opis towarow/uslug, ilosc i cene jednostkowa, stawke i kwote VAT, wartosc netto, brutto. Faktura VAT uprawnia nabywce do odliczenia VAT naliczonego. Przechowuje sie faktury 5 lat (termin przedawnienia podatkowego). Faktury elektroniczne (e-faktura) sa rownie wazne jak papierowe od 2012.",
    },
    {
      question: "Kto jest zwolniony z VAT?",
      answer:
        "Zwolnienia z VAT: Podmiotowe (limit obrotu): firmy z obrotem do 200 000 zl rocznie moga nie rejestrowac sie jako czynni podatnicy VAT. Przedmiotowe (rodzaj dzialalnosci): uslugi medyczne, stomatologiczne, edukacyjne, finansowe, ubezpieczeniowe, wynajmem mieszkan na cele mieszkaniowe. Firma zwolniona z VAT nie wystawia faktur VAT (tylko rachunki), nie odlicza VAT od zakupow, ale tez nie pobiera VAT od klientow - czesto korzystna opcja dla uslugodawcow z malymi kosztami.",
    },
    {
      question: "Jaka jest roznica miedzy VAT a PIT?",
      answer:
        "VAT (podatek od towarow i uslug) to podatek posredni obciazajacy konsumpcje - placi go ostateczny nabywca, a firmy sa posrednikami. Rozliczany miesiecznie lub kwartalnie. PIT (podatek dochodowy od osob fizycznych) to podatek bezposredni nalezny od dochodu (przychod - koszty). Placi go osoba fizyczna (przedsiebiorca, pracownik). Rozliczany rocznie (deklaracja PIT). Przedsiebiorca placi oba: VAT od sprzedazy (posrednictwo) i PIT/CIT od zysku (wlasny podatek dochodowy).",
    },
  ];

  return (
    <>
      <SEOHead
        title="VAT - co to jest i jak dziala? Podatek od towarow i uslug"
        description="VAT co to jest - wyjasniamy czym jest podatek VAT, stawki VAT w Polsce (23%, 8%, 5%), kiedy rejestrowac sie do VAT, jak obliczac i kto jest zwolniony."
        canonical="https://fotz.pl/blog/vat-co-to-jest"

        keywords="VAT - co to jest, VAT - definicja, czym jest VAT -, VAT - przykłady, jak działa VAT -, VAT - znaczenie, VAT - przewodnik"
      />
      <ArticleSchema
        title="VAT - co to jest i jak dziala?"
        description="Czym jest VAT (podatek od towarow i uslug), stawki VAT w Polsce, kiedy rejestracja VAT, obliczanie VAT, faktura VAT i kto jest zwolniony."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/vat-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Calculator className="w-4 h-4" /> Podatki i ksiegowosc</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                VAT - co to jest i jak dziala podatek od towarow i uslug?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                VAT to podatek pobierany na kazdym etapie sprzedazy. Stawki VAT w Polsce, kiedy zarejestrowac sie do VAT i jak obliczac naleznosci.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Stawki VAT w Polsce</h2>
              <div className="space-y-3 mb-6">
                {vatRates.map((vat, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-12 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {vat.rate}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{vat.name}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{vat.examples}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak dziala VAT - schemat</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Przyklad: sprzedaz produktu za 1000 zl netto</p>
                <div className="space-y-1 text-slate-300">
                  <p>Producent sprzedaje hurtownikowi: <span className="text-white">1000 + 230 VAT = 1230 zl</span></p>
                  <p>Producent oddaje do US VAT: <span className="text-yellow-400">230 zl</span></p>
                  <p className="mt-2">Hurtownik sprzedaje sklepowi: <span className="text-white">1500 + 345 VAT = 1845 zl</span></p>
                  <p>Hurtownik oddaje do US VAT: <span className="text-yellow-400">345 - 230 = 115 zl</span></p>
                  <p className="mt-2">Sklep sprzedaje klientowi: <span className="text-white">2000 + 460 VAT = 2460 zl</span></p>
                  <p>Sklep oddaje do US VAT: <span className="text-yellow-400">460 - 345 = 115 zl</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p className="text-blue-400">Lacznie US zebralo: 230 + 115 + 115 = <span className="text-white font-bold">460 zl</span></p>
                    <p className="text-slate-400 text-xs">= 23% x 2000 zl (cena netto klienta koncowego)</p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <FileText className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Prowadzisz firme i potrzebujesz strony internetowej?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona internetowa to koszt firmowy - mozesz odliczyc VAT i zaliczyc do kosztow uzyskania przychodu.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron - oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ - VAT co to jest</h2>
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
