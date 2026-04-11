import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, DollarSign, CheckCircle2, Users } from "lucide-react";
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

export default function BlogZUSCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "ZUS — co to jest? Skladki spoleczne — poradnik" },
  ];

  const zusRates = [
    { skladka: "Emerytalna", stawka: "19,52%", podzial: "9,76% pracownik + 9,76% pracodawca" },
    { skladka: "Rentowa", stawka: "8,00%", podzial: "1,5% pracownik + 6,5% pracodawca" },
    { skladka: "Chorobowa", stawka: "2,45%", podzial: "2,45% pracownik (dobrowolna dla JDG)" },
    { skladka: "Wypadkowa", stawka: "1,67%", podzial: "1,67% pracodawca (srednia stawka)" },
    { skladka: "Zdrowotna", stawka: "9%", podzial: "9% pracownik (od podstawy)" },
    { skladka: "Fundusz Pracy", stawka: "2,45%", podzial: "pracodawca (powyzej minimalnego wynagrodzenia)" },
  ];

  const jdgOptions = [
    { opcja: "Ulga na start", czas: "Pierwsze 6 miesiecy", kwota: "Brak skladek spolecznych (tylko zdrowotna)" },
    { opcja: "Maly ZUS (preferencyjne)", czas: "24 miesiace", kwota: "ok. 400 zl/mies. (2024)" },
    { opcja: "Maly ZUS Plus", czas: "36 miesiecy", kwota: "Proporcjonalnie do dochodu" },
    { opcja: "Pelne skladki ZUS", czas: "Bezterminowo", kwota: "ok. 1600 zl/mies. (2024)" },
  ];

  const faqItems = [
    {
      question: "Co to jest ZUS?",
      answer:
        "ZUS (Zaklad Ubezpieczen Spolecznych) to polska instytucja panstwowa zarzadzajaca systemem ubezpieczen spolecznych. ZUS pobiera i ewidencjonuje skladki na: ubezpieczenie emerytalne (przyszla emerytura), ubezpieczenie rentowe (renty inwalidzkie i rodzinne), ubezpieczenie chorobowe (zasilki chorobowe, macierzynski), ubezpieczenie wypadkowe (wypadki przy pracy). ZUS wyplaca swiadczenia: emerytury, renty, zasilki chorobowe, zasilki macierzynskie. Obok ZUS dziala NFZ (Narodowy Fundusz Zdrowia) — odrebna instytucja pobierajaca skladke zdrowotna.",
    },
    {
      question: "Ile wynosi ZUS dla przedsiebiorcy w 2024 roku?",
      answer:
        "Pelne skladki ZUS dla JDG w 2024 roku (przyblizenie): Emerytalna: ok. 812 zl/mies. Rentowa: ok. 332 zl/mies. Chorobowa (dobrowolna): ok. 102 zl/mies. Wypadkowa: ok. 70 zl/mies. Fundusz Pracy: ok. 102 zl/mies. Skladki spoleczne razem: ok. 1418 zl/mies. Skladka zdrowotna: zalezy od formy opodatkowania i dochodu — min. ok. 381 zl/mies. (9% od 4242 zl podstawy). Razem pelny ZUS: ok. 1600-2000 zl/mies. Uwaga: skladka zdrowotna nie jest odliczana od podatku dochodowego (zmiana od 2022 roku w Nowym Ladzie).",
    },
    {
      question: "Czym jest ulga na start i maly ZUS?",
      answer:
        "Ulga dla nowych przedsiebiorcow (JDG): Ulga na start — pierwsze 6 miesiecy dzialalnosci. Brak skladek spolecznych (emerytalna, rentowa, chorobowa, wypadkowa). Placi sie tylko skladke zdrowotna. Warunek: nie prowadziles JDG przez ostatnie 60 miesiecy. Maly ZUS (preferencyjne skladki) — 24 kolejne miesiace po uldze na start. Podstawa obliczen: 30% minimalnego wynagrodzenia zamiast 60% przecietnego wynagrodzenia. Oszczednosc: ok. 1000 zl/mies. wzgledem pelnych skladek. Maly ZUS Plus — do 36 miesiecy, dla firm z niskim dochodem. Podstawa proporcjonalna do rocznego dochodu (min. 30% minimalnego wynagrodzenia).",
    },
    {
      question: "Jak zglasic sie do ZUS?",
      answer:
        "Rejestracja w ZUS: Pracownik: pracodawca zglasza pracownika do ZUS w ciagu 7 dni od zatrudnienia (formularz ZUS ZUA). Przedsiebiorca JDG: przy rejestracji w CEIDG mozna jednoczesnie zglosic sie do ZUS. Mozna tez przez PUE ZUS (portal ubezpieczen elektronicznych) lub osobistu wizyte w oddziale ZUS. Zgloszenia i zmiany przez PUE ZUS: platnik.zus.pl — mozna zarzadzac wszystkimi dokumentami ZUS elektronicznie. Dokumenty ZUS: ZUS ZUA (zglosenie do ubezpieczen), ZUS ZWUA (wyrejestrowanie), ZUS DRA (deklaracja rozliczeniowa), ZUS RCA (raport imienny).",
    },
    {
      question: "Co to jest skladka zdrowotna i jak sie ja oblicza?",
      answer:
        "Skladka zdrowotna po Nowym Ladzie (od 2022): Skala podatkowa (PIT 12%/32%): 9% od dochodu, min. 9% z 4242 zl (ok. 381 zl/mies.). Podatek liniowy (19%): 4,9% od dochodu, min. 9% z 4242 zl. Ryczalt: stawka uzalezniona od wysokosci przychodow: przychody do 60 000 zl rocznie — ok. 381 zl/mies., przychody 60 000-300 000 zl — ok. 635 zl/mies., powyzej 300 000 zl — ok. 1143 zl/mies. Wazna zmiana: skladka zdrowotna nie jest juz odliczana od podatku (jak do 2021) — to zwiekszylo koszty przedsiebiorcow o ok. 400-1000 zl/mies. Na skali: mozna odliczyc 50% skladki zdrowotnej od dochodu (od 2023).",
    },
    {
      question: "Jak ZUS wplywa na emeryture?",
      answer:
        "ZUS a emerytura w Polsce: System emerytalny: ZUS (I filar) + OFE (II filar, opcjonalnie) + IKE/IKZE/PPK (III filar dobrowolny). Emerytura z ZUS: wyliczana na podstawie zgromadzonego kapitalu emerytalnego (suma wplaconych skladek waloryzowanych). Wiek emerytalny: 60 lat dla kobiet, 65 lat dla mezczyZn. Problem niskich emerytur JDG: przedsiebiorcy z malym ZUS placa niskie skladki → male swiadczenie emerytalne. Wielu ksiegowych i ekspertow zaleca uzupelnienie o IKE/IKZE. IKZE 2024: limit wplat 8322 zl/rok z ulgom podatkowym. Warto: symulator emerytury na zus.pl — sprawdz swoje szacunkowe swiadczenie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="ZUS — co to jest? Skladki spoleczne dla przedsiebiorcy | fotz.pl"
        description="ZUS co to jest — wyjasnamy czym jest ZUS, ile wynosi ZUS dla JDG w 2024, ulga na start, maly ZUS i jak skladki wplywaja na emeryture."
        canonical="https://fotz.pl/blog/zus-co-to-jest"
      />
      <ArticleSchema
        title="ZUS — co to jest? Skladki spoleczne dla przedsiebiorcy"
        description="Czym jest ZUS, wysokosc skladek ZUS dla JDG w 2024, ulga na start, maly ZUS Plus, skladka zdrowotna i wplyw ZUS na emeryture."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/zus-co-to-jest"
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
                <span className="flex items-center gap-1"><Shield className="w-4 h-4" /> Ubezpieczenia spoleczne</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                ZUS — co to jest i ile placi przedsiebiorca?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                ZUS to system ubezpieczen spolecznych w Polsce. Ile wynosi ZUS dla JDG w 2024,
                ulga na start, maly ZUS i jak dziala skladka zdrowotna.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Skladki ZUS — stawki dla pracownikow</h2>
              <div className="space-y-2 mb-6">
                {zusRates.map((r, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-slate-900 text-sm">{r.skladka}</p>
                      <span className="font-bold text-blue-600 text-sm">{r.stawka}</span>
                    </div>
                    <p className="text-slate-500 text-xs">{r.podzial}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">ZUS dla JDG — etapy i ulgi</h2>
              <div className="space-y-3 mb-6">
                {jdgOptions.map((o, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${idx === 0 ? 'bg-green-100 text-green-700' : idx === 1 ? 'bg-yellow-100 text-yellow-700' : idx === 2 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{o.opcja}</p>
                      <p className="text-slate-500 text-xs">{o.czas}</p>
                      <p className="text-slate-700 text-xs mt-1">{o.kwota}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <DollarSign className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Obniz koszty dzialalnosci przez lepszy marketing</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strona internetowa to inwestycja — pozyskuje klientow i zwraca sie wielokrotnie, nawet przy pelnym ZUS-ie.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — ZUS co to jest</h2>
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
          heading="Rozwijaj firme z profesjonalna strona internetowa"
          subheading="Wiecej klientow online = wyzsze przychody = ZUS sie splaca. Zaprojektujemy Twoja strone."
        />
      </Layout>
    </>
  );
}
