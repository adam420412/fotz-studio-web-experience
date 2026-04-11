import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, CheckCircle2, Users, AlertCircle } from "lucide-react";
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

export default function BlogUmowaBCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Umowa B2B — co to jest? Kontrakt B2B vs etat" },
  ];

  const b2bVsEtat = [
    { cecha: "Forma zatrudnienia", b2b: "Umowa cywilnoprawna (B2B)", etat: "Umowa o prace (Kodeks Pracy)" },
    { cecha: "ZUS", b2b: "Sam oplacasz (ok. 1 600 zl/mies.)", etat: "Dziela z pracodawca (~20% pensji)" },
    { cecha: "Urlop", b2b: "Brak gwarantowanego", etat: "26 dni platnego urlopu" },
    { cecha: "Podatek dochodowy", b2b: "Liniowy 19% lub skala (12/32%)", etat: "Skala 12% / 32%" },
    { cecha: "Chorobowe", b2b: "Dobrowolne ubezpieczenie chorobowe ZUS", etat: "80% wynagrodzenia od 4 dnia" },
    { cecha: "Ochrona", b2b: "Brak ochrony z KP (wypowiedzenie)", etat: "Ochrona przed zwolnieniem" },
    { cecha: "Stawki brutto", b2b: "Zazwyczaj wyzsze o 20-40%", etat: "Nizsze (pracodawca ponosi dodatkowe koszty)" },
  ];

  const faqItems = [
    {
      question: "Co to jest kontrakt B2B?",
      answer:
        "Kontrakt B2B (Business to Business) to umowa zawierana miedzy dwiema firmami — zamiast umowy o prace. Specjalista (np. programista, grafik, ksiegowy) rejestruje JDG (jednoosobowa dzialalnosc gospodarcza) i swiadczy usluge na podstawie faktury VAT. To legalna alternatywa dla etatu, popularna zwlaszcza w IT, marketingu i konsultingu. Glowna roznica: na B2B jestes przedsiebiorco (nie pracownikiem) — sam oplacasz ZUS i PIT, ale czesto zarabiasz netto wiecej. Stawki B2B w Polsce (2024): programisci 150-300 zl/h, specjalisci marketingu 80-200 zl/h, konsultanci 100-400 zl/h.",
    },
    {
      question: "Ile zarabia sie netto na B2B?",
      answer:
        "Przyklad obliczen B2B (podatek liniowy, pelne skladki ZUS): Stawka: 150 zl/h x 168 godz. = 25 200 zl przychodu. Koszty: ZUS spoleczny ok. 1 400 zl + ZUS zdrowotny ok. 510 zl = 1 910 zl. Koszt firmy (komputer, telefon, internet): ok. 500 zl. Dochod: 25 200 - 1 910 - 500 = 22 790 zl. Podatek liniowy 19%: 22 790 x 19% = 4 330 zl. Netto: ok. 18 460 zl. Dla porownania — etat 20 000 zl brutto: ok. 14 100 zl netto. B2B 150 zl/h daje wiec ok. 31% wiecej netto niz etat z tej samej stawki godzinowej.",
    },
    {
      question: "Czy B2B jest legalne? Czym jest tzw. samozatrudnienie?",
      answer:
        "B2B jest w pelni legalnym rozwiazaniem. Samozatrudnienie staje sie nielegalne (ukryte stosunki pracy) gdy: specjalista pracuje wylacznie dla jednego klienta w sposob bardzo podobny do pracownika etatowego (te same godziny, te same narzedzia, podleglosc sluzbowa). Kryteria sadu: czy specjalista ma swobode w wykonywaniu zlecen, czy moze swiadczyc uslugi dla innych, czy ponosi ryzyko ekonomiczne. Umowa B2B powinna wiec zapewniac: mozliwosc pracy dla innych klientow, swobode w sposobie wykonania zlecen, rozliczenie godzinowe lub projektowe (nie miesiecznie jak etat). ZUS moze przekwalifikowac umowe B2B na umowe o prace i zadac zaleg. skladek.",
    },
    {
      question: "Co powinna zawierac umowa B2B?",
      answer:
        "Kluczowe elementy umowy B2B: Strony umowy — dane obu firm (nazwy, NIP, adresy). Przedmiot umowy — dokladny opis swiadczonej uslugi. Wynagrodzenie — stawka godzinowa lub projekt owa, waluta, termin platnosci faktury. Czas trwania — na czas okreslony lub nieokreslony z okresem wypowiedzenia. Poufnosc (NDA) — ochrona tajemnic handlowych. Prawa autorskie (IP) — kto jest wlascicielem efektow pracy. Odpowiedzialnosc — ograniczenie odpowiedzialnosci do wartosci umowy. Zakaz konkurencji — opcjonalnie, z wynagrodzeniem za czas obowiazywania. Opis produktu/raportu — co konkretnie dostarcza wykonawca. Procedura akceptacji i reklamacji pracy.",
    },
    {
      question: "Umowa B2B vs umowa zlecenie — co wybrac?",
      answer:
        "B2B (JDG) vs umowa zlecenie: Umowa zlecenie — brak JDG, zleceniodawca odprowadza ZUS. Prosta, szybka, brak ksiegowosci po stronie wykonawcy. Podatek: 17% lub 32% (skala). Sprawdza sie dla drobnych, jednorazowych zlecen. B2B (JDG) — wlasna firma, sam oplacasz ZUS. Wyzsze stawki netto, mozliwos optymalizacji podatkowej (liniowy 19%, koszty firmy). Wymaga zalozenia JDG, prowadzenia ksiegowosci. Sprawdza sie przy stalej wspolpracy i wyzszych dochodach. Optymalny prog: jezeli zarabiasz powyze 7 000 zl/mies. — B2B zazwyczaj jest bardziej oplacalne.",
    },
    {
      question: "Jak wystawic fakture B2B?",
      answer:
        "Faktura B2B — co musi zawierac (zgodnie z ustawa VAT): Numer faktury (kolejny, unikatowy). Data wystawienia i data sprzedazy. Dane sprzedawcy: nazwa firmy, adres, NIP. Dane nabywcy: nazwa firmy, adres, NIP. Opis uslugi — dokladny, zgodny z umowa. Ilosc i jednostka miary (np. 40 godz.). Cena jednostkowa netto. Stawka VAT (23%, 8%, 0% lub zwolnienie). Wartosc netto, kwota VAT, wartosc brutto. Termin platnosci i numer konta. Narzedzia do wystawiania faktur: inFakt, wFirma, iFirma, Fakturownia — oferuja latwe generowanie i ksiegowosc. Faktura musi byc wystawiona do 15 dnia miesiaca nastepnego po wykonaniu uslugi.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Umowa B2B — co to jest? Kontrakt B2B vs etat | fotz.pl"
        description="Umowa B2B co to jest — wyjasnamy czym jest kontrakt B2B, ile zarabia sie netto, B2B vs etat vs zlecenie i co powinna zawierac umowa B2B."
        canonical="https://fotz.pl/blog/umowa-b2b-co-to-jest"
      />
      <ArticleSchema
        title="Umowa B2B — co to jest? Kontrakt B2B vs etat"
        description="Czym jest umowa B2B (kontrakt), zarobki netto, legalnosc samozatrudnienia, elementy umowy B2B, B2B vs zlecenie i jak wystawic fakture B2B."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/umowa-b2b-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><FileText className="w-4 h-4" /> Prawo pracy i B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Umowa B2B — co to jest i ile sie zarabia na kontrakcie?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Kontrakt B2B to umowa miedzy firmami — alternatywa dla etatu. Zarobki netto,
                legalnosc, co zawiera umowa B2B i jak porownac z umowa o prace.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">B2B vs etat — porownanie</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">B2B (JDG)</th>
                      <th className="text-left p-3 border border-slate-700">Etat (umowa o prace)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {b2bVsEtat.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.cecha}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.b2b}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.etat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Users className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Jestes na B2B? Zadbaj o swoja widocznosc online</p>
                <p className="text-blue-700 text-sm mb-3">
                  Freelancerzy i specjalisci B2B z dobra strona portfolio pozyskuja lepszych klientow i wyzsza stawke.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Umowa B2B co to jest</h2>
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
          heading="Strona portfolio dla specjalisty na B2B"
          subheading="Zbudujemy Ci profesjonalna strone, ktora przyciagnie lepszych klientow i pozwoli podbic stawke."
        />
      </Layout>
    </>
  );
}
