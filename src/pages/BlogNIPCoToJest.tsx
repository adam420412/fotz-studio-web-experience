import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, FileText, Shield, Building, Search } from "lucide-react";
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

export default function BlogNIPCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "NIP - co to jest? Numer Identyfikacji Podatkowej" },
  ];

  const businessNumbers = [
    { symbol: "NIP", full: "Numer Identyfikacji Podatkowej", digits: "10 cyfr", for: "Identyfikacja podatkowa firm i osob fizycznych prowadzacych DG" },
    { symbol: "REGON", full: "Rejestr Gospodarki Narodowej", digits: "9 lub 14 cyfr", for: "Identyfikacja w statystyce publicznej (GUS)" },
    { symbol: "KRS", full: "Krajowy Rejestr Sadowy", digits: "10 cyfr", for: "Spolki z o.o., SA, fundacje, stowarzyszenia" },
    { symbol: "PESEL", full: "Powszechny Elektroniczny System Ewidencji Ludnosci", digits: "11 cyfr", for: "Identyfikacja osob fizycznych (osoby prywatne)" },
    { symbol: "VAT-EU", full: "Numer VAT UE (EU)", digits: "PL + 10 cyfr NIP", for: "Transakcje wewnatrzwspolnotowe (import/eksport UE)" },
  ];

  const faqItems = [
    {
      question: "Co to jest NIP?",
      answer:
        "NIP (Numer Identyfikacji Podatkowej) to 10-cyfrowy numer nadawany przez urzad skarbowy osobom fizycznym i prawnym do celow podatkowych. Przedsiebiorcy uzywaja NIP do: wystawiania faktur VAT, rozliczen z urzedem skarbowym (PIT, CIT, VAT), rejestracji w ZUS, umow B2B. Od 2012 roku osoby fizyczne uzywaja PESEL zamiast NIP w wiekszosci spraw - NIP jest obowiazkowy glownie przy prowadzeniu dzialalnosci gospodarczej lub byciu podatnikiem VAT.",
    },
    {
      question: "Jak otrzymac NIP?",
      answer:
        "NIP jest nadawany automatycznie przy rejestracji dzialalnosci: Jednoosobowa Dzialalnosc Gospodarcza (JDG): rejestracja przez CEIDG (ceidg.gov.pl) - NIP nadawany automatycznie lub przenoszony jesli miales wczesniej. Spolka z o.o. / SA: rejestracja w KRS, NIP nadawany przez urzad skarbowy po rejestracji. Osoba fizyczna nieprowadzaca DG: NIP mozna uzyskac skladajac formularz NIP-7 w urzedzie skarbowym (potrzebny np. przy umowie zlecenie bez JDG). Czas oczekiwania: 3-14 dni roboczych.",
    },
    {
      question: "Jak sprawdzic NIP firmy?",
      answer:
        "Sposoby weryfikacji NIP: 1) CEIDG (ceidg.gov.pl) - baza JDG (jednoosobowych dzialalnosci). 2) KRS (rejestr.io lub ekrs.ms.gov.pl) - baza spolek i organizacji. 3) VIES (ec.europa.eu/taxation_customs/vies/) - weryfikacja numerow VAT UE. 4) Biala lista VAT (podatki.gov.pl/wykaz-podatnikow-vat/) - sprawdzenie czy firma jest czynnym podatnikiem VAT, numery kont bankowych. Biala lista jest szczegolnie wazna - platnosc na konto nieujete w bialej liscie VAT moze powodowac odpowiedzialnosc solidarna.",
    },
    {
      question: "Czym rozni sie NIP od REGON?",
      answer:
        "NIP (Numer Identyfikacji Podatkowej): sluzy do celow podatkowych - faktury, deklaracje VAT, PIT, CIT. Nadawany przez urzad skarbowy. REGON (Rejestr Gospodarki Narodowej): sluzy do identyfikacji statystycznej - GUS, ZUS, banki. Nadawany przez GUS. Kazda firma ma oba numery - NIP jest na fakturach i umowach podatkowych, REGON pojawia sie w formularzach ZUS i statystycznych. Osoby fizyczne: PESEL zastepuje NIP w zyciu codziennym; NIP potrzebny tylko przy prowadzeniu DG lub byciu podatnikiem VAT.",
    },
    {
      question: "Czy kazda firma musi miec NIP?",
      answer:
        "Tak - kazdy przedsiebiorca prowadzacy dzialalnosc gospodarcza jest zobowiazany posiadac NIP. Obowiazek rejestracji VAT (i uzyskania NIP-VAT): powstaje przy przekroczeniu 200 000 zl obrotu rocznie lub przy wyborze dobrowolnej rejestracji VAT. Dzialalnosc nierejestrowana (przychod do okolo 2100 zl/mies.): mozna prowadzic bez NIP i bez rejestracji - wystarczy PESEL. Kiedy NIP jest wymagany: umowy B2B, faktury VAT, zatrudnianie pracownikow, import/eksport.",
    },
    {
      question: "Co to jest numer NIP-EU (VAT UE)?",
      answer:
        "NIP-EU (numer VAT UE) to numer NIP poprzedzony kodem kraju 'PL' - uzywany w transakcjach wewnatrzwspolnotowych w UE. Format: PL1234567890. Wymagany gdy: kupujesz uslugi lub towary od firm z innych krajow UE (B2B), sprzedajesz do firm z innych krajow UE. Jak uzyskac: skladajac formularz VAT-R lub VAT-R-UE w urzedzie skarbowym i zaznaczajac rejestracje na potrzeby transakcji wewnatrzwspolnotowych. Mozna weryfikowac w systemie VIES czy kontrahent jest zarejestrowany jako podatnik VAT UE.",
    },
  ];

  return (
    <>
      <SEOHead
        title="NIP - co to jest? Numer Identyfikacji Podatkowej - poradnik | fotz.pl"
        description="NIP co to jest - wyjasniamy czym jest Numer Identyfikacji Podatkowej, jak go uzyskac, jak sprawdzic NIP firmy i czym rozni sie od REGON i PESEL."
        canonical="https://fotz.pl/blog/nip-co-to-jest"
      />
      <ArticleSchema
        title="NIP - co to jest? Numer Identyfikacji Podatkowej"
        description="Czym jest NIP (Numer Identyfikacji Podatkowej), jak uzyskac NIP, sprawdzic NIP firmy, roznica NIP vs REGON i co to jest NIP-EU (VAT UE)."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/nip-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Prawo i podatki</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                NIP - co to jest i jak go uzyskac?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                NIP (Numer Identyfikacji Podatkowej) to 10-cyfrowy numer niezbedny kazdemu przedsiebiorcy.
                Jak go uzyskac, jak sprawdzic NIP firmy i czym rozni sie od REGON?
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Numery identyfikacyjne firmy - porownanie</h2>
              <div className="space-y-3 mb-6">
                {businessNumbers.map((num, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-bold text-blue-600 text-lg">{num.symbol}</span>
                      <span className="text-slate-500 text-xs">{num.full}</span>
                      <span className="bg-slate-200 text-slate-700 text-xs px-2 py-0.5 rounded ml-auto">{num.digits}</span>
                    </div>
                    <p className="text-slate-600 text-xs">{num.for}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak sprawdzic NIP firmy?</h2>
              <div className="space-y-2 mb-6">
                {[
                  { source: "Biala Lista VAT", url: "podatki.gov.pl", desc: "Najwazniejsza - sprawdz status VAT i numery kont bankowych przed platnoscia." },
                  { source: "CEIDG", url: "ceidg.gov.pl", desc: "Baza JDG - jednoosobowych dzialalnosci gospodarczych." },
                  { source: "KRS / rejestr.io", url: "rejestr.io", desc: "Baza spolek, fundacji i stowarzyszen zarejestrowanych w KRS." },
                  { source: "VIES", url: "ec.europa.eu/vies", desc: "Weryfikacja numerow VAT-UE kontrahentow z innych krajow EU." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Search className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-bold text-slate-900 text-sm">{item.source}</p>
                        <span className="text-blue-500 text-xs">{item.url}</span>
                      </div>
                      <p className="text-slate-600 text-xs mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Building className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Zakladasz firme i potrzebujesz strony internetowej?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Profesjonalna strona to pierwsza inwestycja kazdego przedsiebiorcy - pomagamy od MVP do pelnego serwisu.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ - NIP co to jest</h2>
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
          heading="Zakladasz firme? Zbuduj z nami strone internetowa"
          subheading="Profesjonalna strona to Twoja wizytowka online - od 2 tygodni."
        />
      </Layout>
    </>
  );
}
