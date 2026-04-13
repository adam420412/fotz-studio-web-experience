import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Zap, Globe, Calendar, FileText } from "lucide-react";
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

export default function StronaInternetowaDlaTrenera() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona internetowa dla trenera personalnego" },
  ];

  const features = [
    { icon: Zap, title: "Prezentacja oferty treningowej", desc: "Pakiety treningowe, specjalizacje (redukcja, masa, rehabilitacja, sport), zasady współpracy. Klient od razu wie co oferujesz i ile kosztuje." },
    { icon: MapPin, title: "SEO lokalne", desc: "Widoczność na 'trener personalny [miasto]', 'personal trainer [miasto]'. Klienci szukają trenera przez Google przed decyzją." },
    { icon: Calendar, title: "System rezerwacji", desc: "Formularz zapisu na trening lub konsultację. Automatyczne potwierdzenia — oszczędzasz czas na WhatsApp i telefony." },
    { icon: Globe, title: "Transformacje i efekty", desc: "Zdjęcia before/after (za zgodą klientów), wyniki i osiągnięcia. Transformacje sprzedają treningi lepiej niż jakikolwiek tekst." },
    { icon: Star, title: "Opinie klientów", desc: "Testimoniale z efektami treningowymi. 'Schudłem 15 kg w 4 miesiące' > generyczne 'Świetny trener'." },
    { icon: FileText, title: "Blog treningowy / Vlog", desc: "Ćwiczenia, dieta, porady — budują SEO i pozycjonują Cię jako eksperta. Klienci szukają najpierw wiedzy, potem trenera." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla trenera personalnego?",
      answer:
        "Strona dla trenera personalnego kosztuje od 1500 do 4000 zł w zależności od zakresu. Prosta strona prezentacyjna z formularzem: 1500-2500 zł. Strona z blogiem, galeriami transformacji i systemem rezerwacji: 2500-4000 zł. Hosting 40-80 zł/mies., domena ok. 80 zł/rok. Czas realizacji: 1-2 tygodnie.",
    },
    {
      question: "Co powinna zawierać strona trenera personalnego?",
      answer:
        "Obowiązkowe elementy: oferta treningowa z pakietami i cenami, biogram z certyfikatami i doświadczeniem, opinie klientów z wynikami, formularz kontaktowy lub rezerwacji, zdjęcia trenera i treningów. Opcjonalnie: blog z poradami, kalkulator BMI/makro, jadłospisy, system wideokonferencji do treningów online, galerią transformacji.",
    },
    {
      question: "Czy trener personalny potrzebuje strony czy wystarczy Instagram?",
      answer:
        "Instagram jest świetny do budowania społeczności i pokazywania efektów — ale nie zastępuje strony www. Problemy z samym Instagramem: brak SEO (nikt nie znajdzie Cię przez Google), ograniczone możliwości opisu usług i cennika, algorytm może obciąć zasięgi. Strona www to Twoja cyfrowa wizytówka która pracuje 24/7, jest widoczna w Google i buduje profesjonalny wizerunek.",
    },
    {
      question: "Jak znaleźć klientów na treningi personalne przez internet?",
      answer:
        "Strategie pozyskiwania klientów online: 1) SEO lokalne — 'trener personalny Poznań' w Google i Google Maps. 2) Google Ads — płatne reklamy na frazy lokalne (szybki efekt). 3) Facebook/Instagram Ads — targetowanie po zainteresowaniach fitness i lokalizacji. 4) Blog z poradami treningowymi — buduje organiczny ruch przez lata. 5) Współpraca z dietetykami, fizjoterapeutami — wzajemne polecanie klientów.",
    },
    {
      question: "Jak prowadzić treningi online i czy strona może w tym pomóc?",
      answer:
        "Treningi online to rosnący segment — klienci z całej Polski, niższe koszty (brak siłowni). Strona może zawierać: stronę zapisu na treningi online z Zoom/Google Meet, panel klienta z planami treningowymi, wideo z ćwiczeniami (YouTube embed), integrację z systemem płatności (Przelewy24, PayU). Warto wyraźnie rozróżnić ofertę stacjonarną i online — różne grupy docelowe, różny pricing.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla trenera personalnego — SEO, rezerwacje"
        description="Strona internetowa dla trenera personalnego — oferta treningowa, SEO lokalne, system rezerwacji i prezentacja transformacji klientów. Od 1500 zł…"
        canonical="https://fotz.pl/uslugi/strona-internetowa-dla-trenera-personalnego"
        keywords="strona internetowa dla trenera, strona www trenera personalnego, strona trenera fitness, portfolio trenera online"
      />
      <ServiceSchema
        name="Strona internetowa dla trenera personalnego"
        description="Tworzenie stron internetowych dla trenerów personalnych — oferta i cennik, SEO lokalne, galeria transformacji, system rezerwacji treningów"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-sm mb-4">
                <Zap className="w-4 h-4" />
                Fitness i trening personalny
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa dla trenera personalnego — więcej klientów z Google
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy profesjonalne strony dla trenerów personalnych. SEO lokalne, system rezerwacji
                i prezentacja transformacji — tak klienci znajdą Cię i zapiszą się na trening.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "od 1500 zł", label: "Cena strony" },
                  { value: "1-2 tyg.", label: "Realizacja" },
                  { value: "Rezerwacje", label: "System online" },
                  { value: "SEO", label: "Widoczność lokalna" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Bezpłatna wycena strony <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera strona trenera?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Strona zaprojektowana do pozyskiwania klientów — nie tylko do prezentacji.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-slate-700 mb-3" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego trener potrzebuje strony?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "70% klientów szuka trenera przez Google — bez strony jesteś niewidoczny",
                  "Strona z transformacjami konwertuje lepiej niż rozmowy telefoniczne",
                  "System rezerwacji online eliminuje chaotyczną wymianę wiadomości",
                  "Blog treningowy buduje autorytet i przyciąga klientów przez lata",
                  "Strona działa 24/7 — klient zapisuje się o 23:00 gdy ma motywację",
                  "Profesjonalna strona odróżnia Cię od trenerów bez obecności w internecie",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 flex-shrink-0 mt-0.5" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona dla trenera</h2>
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
          heading="Stwórzmy stronę która przyciąga klientów na treningi"
          subheading="Bezpłatna wycena — powiedz nam o swojej specjalizacji i grupie docelowej."
        />
      </Layout>
    </>
  );
}
