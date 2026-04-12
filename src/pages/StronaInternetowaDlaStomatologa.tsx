import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Calendar, Globe, Shield, Image } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function StronaInternetowaDlaStomatologa() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona internetowa dla stomatologa" },
  ];

  const features = [
    { icon: Calendar, title: "Rejestracja online", desc: "System rezerwacji wizyt online 24/7. Pacjent sam wybiera termin — mniej telefonów, więcej wizyt." },
    { icon: MapPin, title: "SEO lokalne", desc: "Widoczność na 'stomatolog [miasto]' i w Google Maps. Pojawisz się gdy pacjent szuka dentysty w okolicy." },
    { icon: Globe, title: "Usługi i cennik", desc: "Przejrzysta prezentacja usług z opisami i orientacyjnymi cenami. Zmniejsza barierę pierwszego kontaktu." },
    { icon: Star, title: "Opinie pacjentów", desc: "Integracja z opiniami Google i możliwość zbierania rekomendacji. Zaufanie = więcej nowych pacjentów." },
    { icon: Image, title: "Galeria gabinetu", desc: "Zdjęcia gabinetu, sprzętu i zespołu. Pacjent wie czego się spodziewać — mniejszy stres, wyższa konwersja." },
    { icon: Shield, title: "RODO i prywatność", desc: "Polityka prywatności, zgody RODO, bezpieczne formularze. Compliance z wymogami dla gabinetów medycznych." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla stomatologa?",
      answer:
        "Strona internetowa dla stomatologa kosztuje od 2000 do 8000 zł w zależności od zakresu. Prosta strona z usługami, galerią i formularzem kontaktowym: 2000-4000 zł. Strona z systemem rezerwacji online: 4000-8000 zł. Do tego hosting (50-150 zł/mies.) i domena (ok. 80 zł/rok). Czas realizacji: 2-4 tygodnie.",
    },
    {
      question: "Co powinna zawierać strona stomatologa?",
      answer:
        "Obowiązkowe elementy strony gabinetu stomatologicznego: lista usług z opisami (implantologia, ortodoncja, wybielanie, protetyka), cennik (orientacyjny lub na zapytanie), galeria gabinetu i sprzętu, biogram lekarzy z kwalifikacjami, system rezerwacji lub formularz kontaktowy, adres z mapą i godziny otwarcia, opinie pacjentów. Opcjonalnie: blog z poradami, FAQ, artykuły edukacyjne.",
    },
    {
      question: "Jak pozycjonować gabinet stomatologiczny w Google?",
      answer:
        "SEO dla stomatologa to przede wszystkim Local SEO: zoptymalizuj Google Business Profile (pełne dane, zdjęcia, godziny, kategoria), zbieraj opinie Google od zadowolonych pacjentów, twórz treści pod lokalne frazy ('stomatolog Kraków', 'implanty zębowe Wrocław'), zadbaj o spójność NAP (nazwa, adres, telefon) w katalogach. Strona internetowa z dobrym SEO to fundament widoczności.",
    },
    {
      question: "Czy rezerwacja online zwiększa liczbę wizyt?",
      answer:
        "Tak — badania pokazują, że gabinety z rezerwacją online mają od 20% do 40% więcej umówionych wizyt. Powody: pacjenci mogą rezerwować o każdej porze (wieczorem, w nocy), nie muszą czekać na linii telefonicznej, mniejsza bariera dla nieśmiałych pacjentów. System rezerwacji zwraca się w ciągu kilku miesięcy.",
    },
    {
      question: "Czy strona stomatologa wymaga szczególnych wymogów prawnych?",
      answer:
        "Tak — strona gabinetu medycznego musi spełniać wymogi: RODO (polityka prywatności, zgody na przetwarzanie danych), ustawa o działalności leczniczej (nie może reklamować usług medycznych w sposób zachęcający jak dla produktów komercyjnych — musi być rzetelna i rzeczowa), regulamin strony, cookies i zgody marketingowe. Warto skonsultować treść z prawnikiem.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla stomatologa — rezerwacje, SEO, RODO | fotz.pl"
        description="Strona internetowa dla stomatologa — rezerwacje wizyt online, SEO lokalne, galeria, cennik usług. Profesjonalne strony dla gabinetów stomatologicznych od 2000 zł. Wycena!"
        canonical="https://fotz.pl/uslugi/strona-internetowa-dla-stomatologa"
        keywords="strona internetowa dla stomatologa, strona www gabinetu dentystycznego, strona stomatologa, strona dentysty online"
      />
      <ServiceSchema
        name="Strona internetowa dla stomatologa"
        description="Tworzenie stron internetowych dla gabinetów stomatologicznych — rezerwacje online, SEO lokalne, galeria, cennik, RODO"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-sky-900 bg-opacity-50 text-sky-300 px-3 py-1 rounded-full text-sm mb-4">
                <Shield className="w-4 h-4" />
                Gabinety stomatologiczne
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa dla stomatologa — więcej pacjentów z Google
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy profesjonalne strony dla gabinetów stomatologicznych — z rezerwacją wizyt online,
                SEO lokalnym i pełną zgodnością z RODO. Twoi pacjenci znajdą Cię w Google.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "od 2000 zł", label: "Cena strony" },
                  { value: "2-4 tyg.", label: "Czas realizacji" },
                  { value: "24/7", label: "Rezerwacje online" },
                  { value: "SEO", label: "Lokalna widoczność" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-sky-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white">
                Bezpłatna wycena strony <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera strona dla gabinetu?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda strona dostosowana do specyfiki gabinetu — od implantologii po ortodoncję.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-sky-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Why */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego stomatolog potrzebuje strony?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "80% pacjentów szuka stomatologa online zanim zadzwoni",
                  "Pacjenci porównują gabinety — bez strony nie ma Cię w grze",
                  "Rezerwacja online redukuje obciążenie recepcji o 30-50%",
                  "Opinie Google decydują o wyborze między gabinetami",
                  "Brak strony = brak widoczności w Google Maps",
                  "Profesjonalna strona buduje zaufanie przed pierwszą wizytą",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona dla stomatologa</h2>
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
          heading="Stwórzmy stronę dla Twojego gabinetu"
          subheading="Bezpłatna wycena i konsultacja. Pokażemy co warto, a co zbędne."
        />
      </Layout>
    </>
  );
}
