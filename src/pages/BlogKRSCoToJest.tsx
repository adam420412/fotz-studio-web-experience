import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Building2, FileText, Search, CheckCircle2 } from "lucide-react";
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

export default function BlogKRSCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "KRS — co to jest? Krajowy Rejestr Sadowy — poradnik" },
  ];

  const krsRegisters = [
    { rejestr: "Rejestr przedsiebiorcow", desc: "Spolki (sp. z o.o., S.A., komandytowe, jawne itp.), spoldzielnie, przedsiebiorstwa panstwowe, oddzialy zagraniczne." },
    { rejestr: "Rejestr stowarzyszen i org. spolek.", desc: "Stowarzyszenia, fundacje, NZOZ-y, organizacje pozytku publicznego (OPP) — np. organizacje z numerem KRS na 1%." },
    { rejestr: "Rejestr dluznikow niewyplacalnych", desc: "Osoby fizyczne, ktore nie splacily dlugu w terminie i zostaly wpisane przez wierzyciela." },
  ];

  const faqItems = [
    {
      question: "Co to jest KRS?",
      answer:
        "KRS (Krajowy Rejestr Sadowy) to publiczny rejestr prowadzony przez sady rejonowe, zawierajacy informacje o podmiotach prowadzacych dzialalnosc gospodarcza lub spoleczna w Polsce. KRS zawiera: rejestr przedsiebiorcow (spolki, spoldzielnie), rejestr stowarzyszen i organizacji spolecznych (fundacje, stowarzyszenia), rejestr dluznikow niewyplacalnych. Dane w KRS sa publiczne — kazdy moze je sprawdzic bezplatnie przez portal rejestrowy Ministerstwa Sprawiedliwosci. KRS zastapil dawny rejestr handlowy i dziala od 2001 roku.",
    },
    {
      question: "Jak sprawdzic firme w KRS?",
      answer:
        "Sprawdzenie KRS firmy jest bezplatne i publiczne: Portal KRS: rejestr.io lub krs.ms.gov.pl (oficjalny portal MS). Wyszukiwanie: po nazwie firmy, NIP, REGON lub numerze KRS. Co mozna sprawdzic: pelna nazwa i adres spolki, wspolnicy i udzial w spolce, czlonkowie zarzadu i rady nadzorczej, kapital zakladowy, historia wpisow i zmian, informacja o ogloszeniu upadlosci lub likwidacji, sprawozdania finansowe (obowiazek publikacji). Praktyczne zastosowanie: weryfikacja kontrahenta przed podpisaniem umowy — sprawdz czy firma istnieje, kto moze ja reprezentowac i czy nie jest w upadlosci.",
    },
    {
      question: "Kto musi byc wpisany do KRS?",
      answer:
        "Obowiazek wpisu do KRS maja: Spolki handlowe — sp. z o.o., S.A., spolka komandytowa, spolka jawna, spolka komandytowo-akcyjna, spolka partnerska. Spoldzielnie — mieszkaniowe, pracy, rolnicze. Przedsiebiorstwa panstwowe i jednostki badawczo-rozwojowe. Towarzystwa ubezpieczen wzajemnych. Europejskie zgrupowania interesow gospodarczych. Fundacje i stowarzyszenia (rejestr organizacji spolecznych). Europejskie spoldzielnie. JDG (jednoosobowa dzialalnosc gospodarcza) NIE jest wpisana do KRS — JDG rejestruje sie w CEIDG.",
    },
    {
      question: "Jak zalozyc spolke i zrejestrowac ja w KRS?",
      answer:
        "Rejestracja spolki z o.o. w KRS: Online przez Portal Rejestrow Sadowych (PRS) — szybciej i taniej. Wymagane dokumenty: akt zalozycielski (umowa spolki lub wzorzec umowy), oswiadczenie o wkladach, lista wspolnikow, zgoda na powolanie zarzadu (jezeli nie w akcie). Koszt rejestracji: oplata sadowa 250-500 zl + oplata za ogloszenie w MSiG ok. 100 zl. Czas rejestracji: 1-7 dni roboczych (online szybciej). Kapital zakladowy: min. 5 000 zl dla sp. z o.o. Po rejestracji: automatycznie nadawany NIP i REGON. Alternatywa: rejestracja przez notariusza (droz ej, ale obowiazkowa dla wiekszego kapitalu lub skomplikowanej struktury).",
    },
    {
      question: "Czym rozni sie KRS od CEIDG?",
      answer:
        "KRS vs CEIDG: KRS (Krajowy Rejestr Sadowy) — rejestruje spolki, stowarzyszenia i fundacje. Prowadzony przez sady rejonowe. Wpis wymaga dokumentow i czasu. CEIDG (Centralna Ewidencja i Informacja o Dzialalnosci Gospodarczej) — rejestruje jednoosobowe dzialalnosci gospodarcze (JDG, samozatrudnienie). Prowadzony przez Ministerstwo Rozwoju. Rejestracja jest natychmiastowa przez internet (biznes.gov.pl). Porownanie: JDG, freelancer, sole trader → CEIDG. Spolka z o.o., S.A., spolka jawna → KRS. Fundacja, stowarzyszenie, NGO → KRS.",
    },
    {
      question: "Czy dane w KRS sa publiczne i aktualne?",
      answer:
        "Jawnosc i aktualnosc danych KRS: Wszystkie dane w KRS sa jawne i dostepne bezplatnie dla kazdego. Domniemanie prawdziwosci wpisu — dane w KRS sa wiarygodne prawnie. Spolki maja obowiazek aktualizacji danych w ciagu 7 dni od zmiany (np. nowy czlonek zarzadu, zmiana adresu). Opoznienie wpisow — w praktyce bywa opoznienie 2-8 tygodni. Sprawozdania finansowe: spolki musza sk ladac do KRS — S.A. obowiazkowe, sp. z o.o. (niektore zwolnione). Archiwum KRS: dostepne historyczne wpisy i dokumenty. Dla bezpieczenstwa: przy waznych transakcjach sprawdz takze Biuro Informacji Kredytowej i wywiadownie gospodarcze.",
    },
  ];

  return (
    <>
      <SEOHead
        title="KRS — co to jest? Krajowy Rejestr Sadowy — jak sprawdzic | fotz.pl"
        description="KRS co to jest — wyjasnamy czym jest Krajowy Rejestr Sadowy, jak sprawdzic firme w KRS, kto musi byc wpisany i czym rozni sie KRS od CEIDG."
        canonical="https://fotz.pl/blog/krs-co-to-jest"

        keywords="KRS co to jest, KRS definicja, czym jest KRS, KRS przykłady, jak działa KRS, KRS znaczenie, KRS przewodnik"
      />
      <ArticleSchema
        title="KRS — co to jest? Krajowy Rejestr Sadowy — jak sprawdzic"
        description="Czym jest KRS (Krajowy Rejestr Sadowy), jak sprawdzic firme w KRS, kto musi byc wpisany, jak rejestrowac spolke i roznica KRS vs CEIDG."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/krs-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Prawo i rejestracja firmy</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                KRS — co to jest i jak sprawdzic firme w rejestrze?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                KRS (Krajowy Rejestr Sadowy) to publiczny rejestr spolek i organizacji w Polsce.
                Jak sprawdzic firme, kto musi byc wpisany i jak zalozyc spolke.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Trzy rejestry w ramach KRS</h2>
              <div className="space-y-3 mb-6">
                {krsRegisters.map((r, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{r.rejestr}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{r.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">KRS vs CEIDG — ktory rejestr dla kogo?</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">KRS</th>
                      <th className="text-left p-3 border border-slate-700">CEIDG</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cecha: "Kto rejestruje", krs: "Spolki, fundacje, stow.", ceidg: "JDG (samozatrudnienie)" },
                      { cecha: "Organ prowadzacy", krs: "Sad rejonowy", ceidg: "Ministerstwo Rozwoju" },
                      { cecha: "Czas rejestracji", krs: "Kilka dni", ceidg: "Natychmiastowo" },
                      { cecha: "Koszt rejestracji", krs: "250-600 zl", ceidg: "Bezplatnie" },
                      { cecha: "Kapital zakladowy", krs: "Min. 5 000 zl (sp. z o.o.)", ceidg: "Brak wymogu" },
                      { cecha: "Odpowiedzialnosc", krs: "Ograniczona (sp. z o.o.)", ceidg: "Nieograniczona (osobisty majtek)" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.cecha}</td>
                        <td className="p-3 border border-slate-200 text-blue-700 text-xs">{row.krs}</td>
                        <td className="p-3 border border-slate-200 text-slate-600 text-xs">{row.ceidg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Search className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Zakladasz spolke? Zainwestuj w strone od razu</p>
                <p className="text-blue-700 text-sm mb-3">
                  Nowa spolka z dobra strona internetowa buduje wiarygodnosc szybciej niz ktazdokolwiek wizytowka.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — KRS co to jest</h2>
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
          heading="Profesjonalna strona dla Twojej nowej spolki"
          subheading="Zarejestruj spolke i zbuduj silna obecnosc online — zajmujemy sie stronami dla firm z KRS."
        />
      </Layout>
    </>
  );
}
