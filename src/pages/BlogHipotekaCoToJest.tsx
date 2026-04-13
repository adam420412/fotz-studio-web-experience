import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Home, Shield, AlertCircle, DollarSign } from "lucide-react";
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

export default function BlogHipotekaCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Hipoteka — co to jest? Kredyt hipoteczny — poradnik" },
  ];

  const hipotekaTypes = [
    { typ: "Hipoteka umowna", desc: "Ustanawiana dobrowolnie przez wlasciciela nieruchomosci jako zabezpieczenie kredytu. Najczestszy rodzaj — przy kredycie hipotecznym na mieszkanie." },
    { typ: "Hipoteka przymusowa", desc: "Ustanawiana przez wierzyciela bez zgody dluznika na podstawie tytulu wykonawczego (np. wyroku sadu). Zabezpieczenie dlugu." },
    { typ: "Hipoteka laczna", desc: "Obciaza kilka nieruchomosci jednoczesnie na zabezpieczenie jednej wierzytelnosci. Stosowana przy duzych inwestycjach deweloperskich." },
    { typ: "Hipoteka umowna na nieruchomosci komercyjnej", desc: "Zabezpieczenie kredytu dla firmy na zakup lokalu uzytkowego, biura lub hali produkcyjnej." },
  ];

  const faqItems = [
    {
      question: "Co to jest hipoteka?",
      answer:
        "Hipoteka to ograniczone prawo rzeczowe ustanawiane na nieruchomosci, ktore sluzy jako zabezpieczenie wierzytelnosci (najczesciej kredytu bankowego). Wlasciciel nieruchomosci (dluznik hipoteczny) zaciaga zobowiazanie wobec wierzyciela (banku), a nieruchomosci obciaza sie hipoteka wpisana do ksiegi wieczystej. Jezeli dluznik nie spaca kredytu, bank moze zaspokoic swoje roszczenie ze sprzedazy nieruchomosci. Hipoteka nie oznacza, ze bank jest wlascicielem — wlasciciel pozostaje dluznik, ale nieruchomosci jest obciazona. Hipoteka wygasa po splaceniu calego kredytu — nalezy wtedy wykreeslic hipoteke z ksiegi wieczystej.",
    },
    {
      question: "Co to jest kredyt hipoteczny?",
      answer:
        "Kredyt hipoteczny to dlugoterminowy kredyt bankowy zabezpieczony hipoteka na nieruchomosci. Charakterystyka: cel — zakup mieszkania, domu, dzialki budowlanej lub refinansowanie. Zabezpieczenie — hipoteka na zakupywanej lub innej nieruchomosci. Czas — zazwyczaj 15-35 lat. Oprocentowanie — zmienne (WIBOR + marza) lub stale (na okres 5-10 lat). Wymagania — wklad wlasny min. 10-20% wartosci nieruchomosci, zdolnosc kredytowa. Kwoty w Polsce (2024): przecietny kredyt hipoteczny to 400 000-600 000 zl. Rata kredytu 500 000 zl na 25 lat przy oprocentowaniu 7,5%: ok. 3 700 zl/mies.",
    },
    {
      question: "Jak wpisac hipoteke do ksiegi wieczystej?",
      answer:
        "Wpis hipoteki do ksiegi wieczystej: Podstawa wpisu — umowa kredytowa z bankiem lub orzeczenie sadu. Kto sklada wniosek — wierzyciel (bank) lub dluznik. Opiszlata sadowa — 200 zl od wpisu hipoteki. Gdzie — elektronicznie przez portal EKW (ekw.ms.gov.pl) lub osobiscie w wydziale wieczystoksiegowym sadu rejonowego. Czas oczekiwania — kilka tygodni do kilku miesiecy (duze zaleglosci). Wykreslenie hipoteki — po splacie kredytu: bank wydaje oswiadczenie o wygasnieciu hipoteki, dluznik sklada wniosek o wykreslenie (oplata 100 zl). Upowaznienie dla banku — zazwyczaj bank sam sklada wniosek o wpis.",
    },
    {
      question: "Ile wynosi wklad wlasny przy kredycie hipotecznym?",
      answer:
        "Wklad wlasny do kredytu hipotecznego: Minimum 10% wartosci nieruchomosci (Rekomendacja S KNF). Przy 10% wkladzie wlasnym — wymagane ubezpieczenie niskiego wkladu wlasnego (dodatkowy koszt). Przy 20% wkladzie — brak obowiazkowego ubezpieczenia, czesto lepsza marza. Przy powyzej 30% — najkorzystniejsze warunki kredytu. Przyklad: mieszkanie za 600 000 zl → min. wklad wlasny 60 000 zl (10%) lub 120 000 zl (20%). Programy pomocowe: BK2% (Bezpieczny Kredyt 2%) — zakonczony. Programy rynkowe — sprawdz aktualne oferty bankow. Bez zdolnosci kredytowej wklad wlasny nie wystarczy — bank ocenia takze dochody.",
    },
    {
      question: "Czym rozni sie hipoteka od zastawu?",
      answer:
        "Hipoteka vs zastaw: Hipoteka — ograniczone prawo rzeczowe na nieruchomosci (lub prawach). Nieruchomosci nie trzeba oddawac wierzycielowi. Wlasciciel nadal uzyytkuje nieruchomosci. Wpis do ksiegi wieczystej. Zastaw — ograniczone prawo rzeczowe na rzeczach ruchomych (auto, maszyna) lub prawach. Najczesciej wymaga wydania rzeczy wierzycielowi (zastaw zwykly) lub wpisu w rejestrze (zastaw rejestrowy). Zastaw rejestrowy nie wymaga przekazania rzeczy. Zastaw finansowy — na papierach wartosciowych. Podsumowanie: hipoteka = nieruchomosci; zastaw = rzeczy ruchome lub prawa.",
    },
    {
      question: "Jak obliczyc zdolnosc kredytowa do kredytu hipotecznego?",
      answer:
        "Zdolnosc kredytowa — co bierze pod uwage bank: Dochody netto — suma miesiecznych dochodow wszystkich kredytobiorcow. Zobowiazania — chwilowki, kredyty gotowkowe, karty kredytowe, alimenty. Bufor stopy procentowej — KNF wymaga badania zdolnosci przy stopie o 5 pp wyzszej (od 2022). Wydatki stale — utrzymanie, czynsz, dzieci. DTI (Debt-to-Income) — miesieczne raty/dochody — max ok. 40-50%. Przykladowa zdolnosc kredytowa: dochod netto 8 000 zl/mies. (para) — max rata ok. 3 200 zl → zdolnosc ok. 450 000 zl (przy 7,5%, 25 lat). Poprawa zdolnosci: dodaj wspolkredytobiorca, splacaj zobowiazania, zwieksz dochody.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Hipoteka — co to jest? Kredyt hipoteczny — poradnik | fotz.pl"
        description="Hipoteka co to jest — wyjasnamy czym jest hipoteka, jak dziala kredyt hipoteczny, wklad wlasny, zdolnosc kredytowa i wpis hipoteki do ksiegi wieczystej."
        canonical="https://fotz.pl/blog/hipoteka-co-to-jest"

        keywords="Hipoteka co to jest, Hipoteka definicja, czym jest Hipoteka, Hipoteka przykłady, jak działa Hipoteka, Hipoteka znaczenie, Hipoteka przewodnik"
      />
      <ArticleSchema
        title="Hipoteka — co to jest? Kredyt hipoteczny — poradnik"
        description="Czym jest hipoteka, rodzaje hipotek, kredyt hipoteczny, wklad wlasny, zdolnosc kredytowa, wpis hipoteki do ksiegi wieczystej i wykreslenie hipoteki."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/hipoteka-co-to-jest"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Home className="w-4 h-4" /> Nieruchomosci i finanse</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Hipoteka — co to jest i jak dziala kredyt hipoteczny?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Hipoteka to zabezpieczenie kredytu na nieruchomosci. Rodzaje hipotek,
                kredyt hipoteczny, wklad wlasny i zdolnosc kredytowa — wszystko co musisz wiedziec.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje hipoteki</h2>
              <div className="space-y-3 mb-6">
                {hipotekaTypes.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Home className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{h.typ}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Przykladowy kredyt hipoteczny</h2>
              <div className="bg-slate-900 rounded-lg p-5 mb-6 font-mono text-sm">
                <p className="text-green-400 mb-3">// Mieszkanie 600 000 zl, wklad wlasny 20%</p>
                <div className="space-y-1 text-slate-300">
                  <p>Wartosc mieszkania:   <span className="text-white">600 000 zl</span></p>
                  <p>Wklad wlasny (20%):  <span className="text-white">120 000 zl</span></p>
                  <p>Kwota kredytu:        <span className="text-blue-400">480 000 zl</span></p>
                  <p>Okres kredytu:        <span className="text-white">25 lat</span></p>
                  <p>Oprocentowanie:       <span className="text-white">~7,5%</span></p>
                  <div className="border-t border-slate-700 pt-2 mt-2">
                    <p>Rata miesieczna:  <span className="text-yellow-400">~3 554 zl</span></p>
                    <p>Laczny koszt odsetek: <span className="text-red-400">~586 000 zl</span></p>
                  </div>
                </div>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Shield className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Budujesz firme? Zadbaj o obecnosc online</p>
                <p className="text-blue-700 text-sm mb-3">
                  Profesjonalna strona internetowa to zabezpieczenie Twojego biznesu — buduje zaufanie i generuje leady.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Hipoteka co to jest</h2>
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
          heading="Zbuduj mocna obecnosc online dla swojej firmy"
          subheading="Tak jak hipoteka zabezpiecza nieruchomosci, dobra strona WWW zabezpiecza Twoj pipeline klientow."
        />
      </Layout>
    </>
  );
}
