import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Palette,
  Type,
  Image,
  FileText,
  Globe,
  Package,
  Star,
} from "lucide-react";
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

export default function IdentyfikacjaWizualnaFirmy() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Identyfikacja wizualna firmy" },
  ];

  const elements = [
    { icon: Image, title: "Logo i warianty", desc: "Główne logo, logo monochromatyczne, sygnet, favicon. Wersje poziome i pionowe do wszystkich zastosowań." },
    { icon: Palette, title: "Paleta kolorów", desc: "Kolory podstawowe i uzupełniające, wartości HEX/RGB/CMYK/Pantone. Zasady stosowania kolorów." },
    { icon: Type, title: "Typografia", desc: "Dobór fontów (nagłówkowy i tekstowy), hierarchia typograficzna, zasady stosowania." },
    { icon: FileText, title: "Szablony dokumentów", desc: "Wizytówki, papier firmowy, stopka email, prezentacje, oferty. Gotowe do druku i edycji." },
    { icon: Globe, title: "Materiały online", desc: "Szablony social media, bannery reklamowe, grafiki emailowe, avatary." },
    { icon: Package, title: "Brandbook / brand manual", desc: "Kompletna dokumentacja systemu — zasady stosowania każdego elementu identyfikacji." },
  ];

  const packages = [
    {
      title: "Logo Basic",
      price: "od 1 500 zł",
      desc: "Samo logo + podstawowe warianty",
      features: [
        "Logo (3 propozycje)",
        "Korekty do akceptacji",
        "Pliki PNG, SVG, PDF",
        "Wariant poziomy i pionowy",
        "Paleta kolorów (3 kolory)",
      ],
    },
    {
      title: "Identyfikacja Standard",
      price: "od 3 999 zł",
      desc: "Pełna identyfikacja wizualna",
      features: [
        "Logo + wszystkie warianty",
        "System kolorów i typografii",
        "Wizytówka + papier firmowy",
        "Szablony social media",
        "Stopka email",
        "Mini brandbook (PDF)",
      ],
      highlight: true,
    },
    {
      title: "Identyfikacja Premium",
      price: "od 7 999 zł",
      desc: "Pełny system + brandbook",
      features: [
        "Wszystko z Standard",
        "Pełny brand manual",
        "Szablony prezentacji",
        "Packaging / oznakowanie",
        "Bannery reklamowe",
        "Opieka wdrożeniowa",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Co to jest identyfikacja wizualna firmy?",
      answer:
        "Identyfikacja wizualna firmy to spójny system graficzny, który wyróżnia markę i buduje jej rozpoznawalność. Obejmuje logo, kolory firmowe, typografię, szablony dokumentów i zasady ich stosowania (brandbook). Dobra identyfikacja sprawia, że firma wygląda profesjonalnie i spójnie we wszystkich punktach kontaktu z klientem.",
    },
    {
      question: "Ile kosztuje identyfikacja wizualna?",
      answer:
        "Koszt zależy od zakresu: samo logo to od 1500 zł. Pełna identyfikacja wizualna (logo + kolory + typografia + szablony + brandbook) to od 3999 do 20 000 zł. Cena zależy od liczby wariantów, materiałów do zaprojektowania i doświadczenia studia/agencji.",
    },
    {
      question: "Co zawiera brandbook?",
      answer:
        "Brandbook (brand manual) to dokument opisujący zasady stosowania identyfikacji wizualnej. Zawiera: logo i jego warianty, strefy ochronne, zakazy stosowania, palety kolorów z wartościami, zasady typografii, przykłady materiałów. Brandbook jest niezbędny przy zlecaniu materiałów zewnętrznym wykonawcom.",
    },
    {
      question: "Jak długo trwa projekt identyfikacji wizualnej?",
      answer:
        "Logo i podstawowa identyfikacja: 2-4 tygodnie. Pełna identyfikacja z brandbook: 4-8 tygodni. Czas zależy od liczby rund poprawek, szybkości decyzji po stronie klienta i zakresu zamówienia.",
    },
    {
      question: "Czy mogę samodzielnie zaprojektować logo?",
      answer:
        "Możesz użyć Canva, Adobe Express czy generatorów AI. Jednak profesjonalne logo projektowane przez grafika to zupełnie inny poziom — przemyślana strategia, unikalność, skalowalność i dostarczenie w formatach gotowych do każdego zastosowania. Tanie logo często kosztuje więcej w dłuższej perspektywie.",
    },
    {
      question: "W jakich formatach dostanę pliki logo?",
      answer:
        "Standardowo dostarczamy: SVG (wektorowy, do edycji), PDF (wektorowy, do druku), PNG (transparentne tło, do web), JPG (białe tło). Na życzenie: AI/EPS dla Adobe Illustrator, pliki dla Canva, formaty print-ready z wartościami CMYK.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Identyfikacja wizualna firmy — logo, brandbook, system graficzny"
        description="Identyfikacja wizualna firmy — logo, system kolorów, typografia, szablony, brandbook. Kompleksowy projekt graficzny który wyróżni Twoją markę. Wycena!"
        canonical="https://fotz.pl/uslugi/identyfikacja-wizualna-firmy"
        keywords="identyfikacja wizualna firmy, identyfikacja wizualna, branding, logo i identyfikacja wizualna, tworzenie identyfikacji wizualnej, spójna identyfikacja wizualna, brandbook, brand identity, projekt identyfikacji, corporate identity, co to jest identyfikacja wizualna, identyfikacja wizualna firmy co zawiera"
      />
      <ServiceSchema
        name="Identyfikacja wizualna firmy"
        description="Kompleksowy projekt identyfikacji wizualnej — logo, paleta kolorów, typografia, szablony dokumentów i brandbook"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-violet-900 bg-opacity-50 text-violet-300 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                Studio brandingowe
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Identyfikacja wizualna firmy — wyróżnij się i buduj rozpoznawalną markę
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Identyfikacja wizualna firmy — logo, branding i brandbook, które budują spójny wizerunek marki. Tworzenie identyfikacji wizualnej: projekt logo, paleta kolorów, typografia, materiały firmowe. Spójna identyfikacja wizualna = rozpoznawalna marka.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "7 sek.", label: "Tyle trwa pierwsze wrażenie" },
                  { value: "3x", label: "Wyższe zaufanie" },
                  { value: "38%", label: "Lepszy recall marki" },
                  { value: "od 1500 zł", label: "Cena logo" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-violet-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-violet-600 hover:bg-violet-700 text-white">
                  Zamów wycenę identyfikacji <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Nasze usługi
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* What's included */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co wchodzi w skład identyfikacji wizualnej?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Identyfikacja wizualna to więcej niż logo — to spójny system który działa na każdym materiale.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {elements.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
                        <Icon className="w-8 h-8 text-violet-600 mb-3" />
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

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety identyfikacji wizualnej</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Dostosowane do potrzeb i etapu rozwoju firmy.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-violet-600 to-violet-700 text-white border-2 border-violet-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-2 ${pkg.highlight ? "text-white" : "text-violet-600"}`}>
                      {pkg.price}
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-violet-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-violet-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Identyfikacja wizualna</h2>
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
          heading="Stwórzmy Twoją identyfikację wizualną"
          subheading="Bezpłatna konsultacja i wycena projektu. Opowiedz nam o swojej marce!"
        />
      </Layout>
    </>
  );
}
