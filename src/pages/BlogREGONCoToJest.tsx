import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Hash, Building2, CheckCircle2, AlertCircle } from "lucide-react";
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

export default function BlogREGONCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "REGON — co to jest? Numer identyfikacyjny firmy" },
  ];

  const regonFacts = [
    { label: "Pelna nazwa", value: "Rejestr Gospodarki Narodowej" },
    { label: "Organ prowadzacy", value: "Glowny Urzad Statystyczny (GUS)" },
    { label: "Dlugosc numeru", value: "9 cyfr (JDG) lub 14 cyfr (spolki)" },
    { label: "Kto musi miec", value: "Kazdy podmiot prowadzacy dzialalnosc gospodarcza" },
    { label: "Kiedy nadawany", value: "Automatycznie przy rejestracji w CEIDG lub KRS" },
    { label: "Weryfikacja online", value: "baza.regon.stat.gov.pl (publiczna, bezplatna)" },
  ];

  const faqItems = [
    {
      question: "Co to jest REGON?",
      answer:
        "REGON (Rejestr Gospodarki Narodowej) to 9- lub 14-cyfrowy numer identyfikacyjny nadawany przez Glowny Urzad Statystyczny (GUS) kazdemu podmiotowi prowadzacemu dzialalnosc gospodarcza w Polsce. REGON sluzy do identyfikacji podmiotu w statystykach publicznych, ale jest tez wymagany na fakturach, w umowach i w kontaktach z urzedami. Kazda JDG (jednoosobowa dzialalnosc gospodarcza) otrzymuje 9-cyfrowy REGON. Spolki i wieksze podmioty otrzymuja 14-cyfrowy REGON. Nadawany automatycznie przy rejestracji firmy — nie trzeba osobno wnioskac.",
    },
    {
      question: "Jak sprawdzic REGON firmy?",
      answer:
        "Weryfikacja numeru REGON jest bezplatna i publiczna: Baza REGON GUS: baza.regon.stat.gov.pl — oficjalna baza prowadzona przez GUS, zawiera dane wszystkich podmiotow. CEIDG: biznes.gov.pl — rejestr JDG, mozna szukac po NIP, REGON lub nazwie firmy. KRS: krs.ms.gov.pl — rejestr spolek i organizacji. Co mozna sprawdzic: nazwe firmy, adres, forme prawna, date rejestracji, PKD (kody dzialalnosci), status aktywnosci. Weryfikacja przydatna przy sprawdzaniu kontrahentow przed podpisaniem umowy.",
    },
    {
      question: "Jaka jest roznica miedzy REGON a NIP?",
      answer:
        "REGON i NIP to dwa rozne numery identyfikacyjne: REGON — numer statystyczny nadawany przez GUS. Identyfikuje podmiot w statystykach. 9 cyfr (JDG) lub 14 cyfr (spolki). Nie ma sumy kontrolnej weryfikujacej poprawnosc. NIP (Numer Identyfikacji Podatkowej) — numer podatkowy nadawany przez urzad skarbowy. Identyfikuje podatnika. 10 cyfr. Wymagany na fakturach VAT. Kazda firma ma oba numery. Osoba fizyczna (pracownik bez JDG) ma tylko NIP, bez REGON-u. Na fakturze VAT wymagany jest NIP. REGON pojawia sie w umowach i dokumentach urzedowych.",
    },
    {
      question: "Kiedy podaje sie REGON?",
      answer:
        "REGON jest wymagany w wielu sytuacjach: Faktury i umowy handlowe — czesto podawany obok NIP. Wnioski do urzedow i instytucji publicznych. Formularze ZUS (np. ZUS ZUA przy zgloszenieu pracownika). Dokumenty GUS — sprawozdania statystyczne. Wnioski o dotacje i dofinansowania (np. z UE). Otwarcie rachunku bankowego dla firmy. Rejestracja VAT (formularz VAT-R). Wazne: na fakturach VAT obowiazkowo podaje sie NIP, REGON nie jest wymagany prawem na fakturze, ale czesto podawany zwyczajowo.",
    },
    {
      question: "Jak uzyskac REGON?",
      answer:
        "Nadanie REGON odbywa sie automatycznie: Jednoosobowa dzialalnosc (JDG): rejestrujesz firme przez CEIDG (biznes.gov.pl) — GUS automatycznie nadaje REGON w ciagu 1-3 dni roboczych. Spolka z o.o., S.A. itp.: rejestrujesz spolke przez KRS (Portal Rejestrow Sadowych) — REGON nadawany automatycznie. Stowarzyszenia, fundacje: rejestracja przez KRS lub starostwo, REGON nadawany przez GUS. Nie skladasz osobnego wniosku o REGON — system jest zintegrowany. REGON mozesz sprawdzic w bazie GUS lub w swoim wpisie w CEIDG/KRS.",
    },
    {
      question: "Czy REGON mozna zmienic lub utracie?",
      answer:
        "REGON a zmiany w firmie: REGON nie zmienia sie przy zwyklych zmianach (adres, nazwa, PKD) — numer pozostaje ten sam przez caly czas istnienia podmiotu. REGON wygasa gdy firma zostanie wykreslona z rejestru (zakonczenie dzialalnosci, rozwiazanie spolki). Przy zawieszeniu dzialalnosci — REGON pozostaje aktywny. Zmiana formy prawnej (np. JDG na spolke) — nowy podmiot otrzymuje nowy REGON. Ponowna rejestracja po wykresleniu — mozliwe nadanie nowego REGON-u. Archiwum REGON w bazie GUS przechowuje dane historyczne podmiotow.",
    },
  ];

  return (
    <>
      <SEOHead
        title="REGON — co to jest? Numer identyfikacyjny firmy | fotz.pl"
        description="REGON co to jest — wyjasnamy czym jest numer REGON, jak sprawdzic REGON firmy, roznica REGON vs NIP i kiedy podawac REGON w dokumentach."
        canonical="https://fotz.pl/blog/regon-co-to-jest"

        keywords="REGON co to jest, REGON definicja, czym jest REGON, REGON przykłady, jak działa REGON, REGON znaczenie, REGON przewodnik"
      />
      <ArticleSchema
        title="REGON — co to jest? Numer identyfikacyjny firmy"
        description="Czym jest REGON, jak sprawdzic numer REGON firmy, roznica REGON vs NIP, kiedy podawac REGON i jak uzyskac numer REGON."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/regon-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 4 min czytania</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Prawo i rejestracja firmy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                REGON — co to jest i jak sprawdzic numer firmy?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                REGON to numer identyfikacyjny nadawany przez GUS kazdej firmie w Polsce.
                Jak sprawdzic REGON, kiedy go podawac i czym rozni sie od NIP.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">REGON — kluczowe fakty</h2>
              <div className="space-y-2 mb-6">
                {regonFacts.map((f, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <p className="text-slate-600 text-sm">{f.label}</p>
                    <p className="text-slate-900 font-semibold text-sm text-right">{f.value}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">REGON vs NIP — kluczowe roznice</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">REGON</th>
                      <th className="text-left p-3 border border-slate-700">NIP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cecha: "Organ nadajacy", regon: "GUS (Glowny Urzad Statystyczny)", nip: "Urzad Skarbowy" },
                      { cecha: "Cel", regon: "Identyfikacja statystyczna", nip: "Identyfikacja podatkowa" },
                      { cecha: "Dlugosc", regon: "9 lub 14 cyfr", nip: "10 cyfr" },
                      { cecha: "Wymagany na fakturze", regon: "Nie (zwyczajowo)", nip: "Tak (obowiazkowy)" },
                      { cecha: "Kto otrzymuje", regon: "Tylko podmioty gospodarcze", nip: "Kazdy podatnik (tez osoby fizyczne)" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.cecha}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.regon}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.nip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Hash className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Rejestrujesz firme i potrzebujesz strony internetowej?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona firmowa z NIP i REGON buduje zaufanie klientow i pomaga w pozyskiwaniu zlecen.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — REGON co to jest</h2>
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
