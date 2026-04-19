import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Building2, CheckCircle2, FileText, Search } from "lucide-react";
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

export default function BlogCEIDGCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CEIDG — co to jest? Rejestr dzialalnosci gospodarczej" },
  ];

  const registrationSteps = [
    { krok: "1", tytul: "Wypelnij wniosek CEIDG-1", desc: "Przez biznes.gov.pl — podajesz dane firmy, adres, PKD (kody dzialalnosci), date rozpoczecia." },
    { krok: "2", tytul: "Potwierdzenie tozsamosci", desc: "Przez Profil Zaufany (ePUAP), e-dowod, lub osobiscie w urzedzie gminy." },
    { krok: "3", tytul: "Natychmiastowa rejestracja", desc: "Firma pojawia sie w CEIDG od razu po zlozeniu wniosku. NIP i REGON nadawane automatycznie." },
    { krok: "4", tytul: "Rejestracja VAT (opcjonalnie)", desc: "Jezeli przekroczysz 200 000 zl przychodu lub chcesz byc VAT-owcem od razu — zloz VAT-R do US." },
    { krok: "5", tytul: "Rejestracja w ZUS", desc: "Przez PUE ZUS lub CEIDG — zglos sie do ubezpieczen spolecznych (ZUS ZUA lub ZUS ZZA)." },
  ];

  const faqItems = [
    {
      question: "Co to jest CEIDG?",
      answer:
        "CEIDG (Centralna Ewidencja i Informacja o Dzialalnosci Gospodarczej) to publiczny, ogolnopolski rejestr prowadzony przez Ministerstwo Rozwoju, Pracy i Technologii, w ktorym ewidencjonowani sa przedsiebiorcy bedacy osobami fizycznymi — czyli osoby prowadzace jednoosobowa dzialalnosc gospodarcza (JDG) oraz wspolnicy spolek cywilnych. W CEIDG nie rejestruje sie spolek (sp. z o.o., S.A. itp.) — te maja swoj rejestr w KRS. Rejestracja w CEIDG jest bezplatna i moze byc zrobiona calkowicie online przez portal biznes.gov.pl. Dane w CEIDG sa publiczne — kazdy moze sprawdzic informacje o firmie.",
    },
    {
      question: "Jak zarejestrowac firme w CEIDG?",
      answer:
        "Rejestracja JDG w CEIDG — krok po kroku: 1) Wejdz na biznes.gov.pl i kliknij 'Zaloz firme'. 2) Zaloguj sie Profilem Zaufanym (ePUAP), e-dowodeem lub mojeID. 3) Wypelnij wniosek CEIDG-1: nazwa firmy, adres, PKD (kody dzialalnosci), data rozpoczecia, forma opodatkowania. 4) Zloz wniosek elektronicznie lub wyslij do urzedu gminy. 5) Firma jest zarejestrowana natychmiastowo (wpis widoczny w bazie). 6) Automatycznie nadawany NIP (jezeli go nie miales) i REGON. 7) Zarejestruj sie do ZUS przez PUE ZUS w ciagu 7 dni. Czas: online ok. 30-60 minut. Koszt: 0 zl.",
    },
    {
      question: "Co podac przy rejestracji w CEIDG?",
      answer:
        "Dane wymagane we wniosku CEIDG-1: Imie i nazwisko oraz PESEL. Numer NIP (jezeli posiadasz) — jezeli nie, zostanie nadany automatycznie. Adres zamieszkania i adres glownego miejsca prowadzenia dzialalnosci. Nazwa firmy — moze byc samo imie i nazwisko lub nazwa fantazyjne z imieniem i nazwiskiem (np. 'Smart Marketing Jan Kowalski'). Kody PKD — Polska Klasyfikacja Dzialalnosci (glowny i dodatkowe). Data rozpoczecia dzialalnosci — moze byc przyszla. Forma opodatkowania — skala, liniowy, ryczalt. Bank i numer konta (opcjonalnie). Kontakt (email, telefon) — opcjonalnie.",
    },
    {
      question: "Jak sprawdzic firme w CEIDG?",
      answer:
        "Wyszukiwanie firm w CEIDG jest bezplatne: Portal CEIDG: biznes.gov.pl/firma/szukaj-firmy. Wyszukiwanie po: imie i nazwisko wlasciciela, NIP, REGON, nazwie firmy. Co mozna sprawdzic: status firmy (aktywna/zawieszona/wykreslona), adres i dane kontaktowe, NIP i REGON, kody PKD (zakres dzialalnosci), data rejestracji i ew. zawieszenia. Praktyczne zastosowanie: weryfikacja kontrahenta przed wspolpraca, sprawdzenie czy firma istnieje i jest aktywna, potwierdzenie NIP przy wystawianiu faktury.",
    },
    {
      question: "Jak zawiesic lub zamknac firme w CEIDG?",
      answer:
        "Zawieszenie dzialalnosci w CEIDG: Warunki: brak zatrudnionych pracownikow. Przez biznes.gov.pl — wniosek o zawieszenie CEIDG-1. Czas zawieszenia: od 30 dni do 24 miesiecy. Skutki: brak obowiazkowych skladek ZUS spolecznych i Funduszu Pracy w czasie zawieszenia (tylko zdrowotna), brak obowiazku wystawiania faktur. Zamkniecie dzialalnosci: wniosek CEIDG-1 z zaznaczeniem 'wykreslenie'. Skutki wykreslenia: zakonczenie dzialalnosci, wyrejestrowanie z ZUS, zlozenie ostatniej deklaracji VAT. Warto: przed zamknieciem rozlicz wszystkie faktury i zobowiazania, zamknij konto firmowe.",
    },
    {
      question: "Czym CEIDG rozni sie od KRS?",
      answer:
        "CEIDG vs KRS — glowne roznice: CEIDG — rejestr dla osob fizycznych prowadzacych JDG i spolkow cywilnych. Prowadzony przez Ministerstwo Rozwoju. Rejestracja bezplatna i natychmiastowa przez internet. Brak wlasnej osobowosci prawnej (odpowiada wlasciciel caly swoj majatkiem). KRS (Krajowy Rejestr Sadowy) — rejestr dla spolek handlowych (sp. z o.o., S.A., komandytowe itp.), stowarzyszen i fundacji. Prowadzony przez sady rejonowe. Rejestracja kosztuje 250-600 zl, trwa kilka dni. Ograniczona odpowiedzialnosc wspolnikow. Wybor: mala firma, freelancer, JDG → CEIDG. Spolka z o.o., wiele wspolnikow, duza odpowiedzialnosc → KRS.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CEIDG — co to jest? Jak zarejestrowac firme online | fotz.pl"
        description="CEIDG co to jest — wyjasnamy czym jest Centralna Ewidencja Dzialalnosci Gospodarczej, jak zarejestrowac JDG, sprawdzic firme i roznica CEIDG vs KRS."
        canonical="https://fotz.pl/blog/ceidg-co-to-jest"

        keywords="CEIDG co to jest, CEIDG definicja, czym jest CEIDG, CEIDG przykłady, jak działa CEIDG, CEIDG znaczenie, CEIDG przewodnik"
      />
      <ArticleSchema
        title="CEIDG — co to jest? Jak zarejestrowac firme online"
        description="Czym jest CEIDG, jak zarejestrowac JDG krok po kroku, jak sprawdzic firme w CEIDG, zawieszenie i zamkniecie dzialalnosci oraz CEIDG vs KRS."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/ceidg-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Rejestracja firmy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CEIDG — co to jest i jak zarejestrowac firme?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CEIDG to rejestr jednoosobowych dzialalnosci gospodarczych. Bezplatna rejestracja JDG online
                w 30 minut — jak to zrobic krok po kroku.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak zarejestrowac JDG w CEIDG — 5 krokow</h2>
              <div className="space-y-3 mb-6">
                {registrationSteps.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {s.krok}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.tytul}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Zarejestrowales firme? Czas na strone internetowa</p>
                <p className="text-blue-700 text-sm mb-3">
                  Nowa firma bez strony www to firma, ktorej nie widac — zbudujemy Ci profesjonalna obecnosc online.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CEIDG co to jest</h2>
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
          heading="Zacznij nowa firme z profesjonalna strona internetowa"
          subheading="Rejestracja CEIDG zajmuje 30 minut — tworzenie strony zostan nam. Pierwsi klienci beda szybciej."
        />
      </Layout>
    </>
  );
}
