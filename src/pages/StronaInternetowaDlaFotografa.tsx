import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MapPin, Star, Camera, Globe, Image, FileText } from "lucide-react";
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

export default function StronaInternetowaDlaFotografa() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Strona internetowa dla fotografa" },
  ];

  const features = [
    { icon: Image, title: "Portfolio fotograficzne", desc: "Galerie z lazy loading i lightbox — Twoje zdjęcia ładują się szybko i wyglądają profesjonalnie na każdym urządzeniu." },
    { icon: MapPin, title: "SEO lokalne", desc: "Widoczność na 'fotograf ślubny [miasto]', 'sesja zdjęciowa [miasto]'. Klienci szukają fotografa przez Google." },
    { icon: Camera, title: "Specjalizacje fotograficzne", desc: "Wyraźne sekcje dla każdej specjalizacji — ślub, portret, komercja, produkty, architektura. Klient od razu wie co robisz." },
    { icon: Globe, title: "Formularz zapytań ofertowych", desc: "Formularz z pytaniami o termin, lokalizację i rodzaj sesji — kwalifikujesz klienta zanim odbierzesz telefon." },
    { icon: Star, title: "Opinie i realizacje", desc: "Opinie klientów przy zdjęciach z danej sesji. Testimoniale budują zaufanie bardziej niż jakikolwiek tekst." },
    { icon: FileText, title: "Blog fotograficzny", desc: "Realizacje z opisem, porady — budują SEO i pokazują styl pracy. 'Sesja ślubna w Krakowie' przyciąga organiczny ruch." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa dla fotografa?",
      answer:
        "Strona internetowa dla fotografa kosztuje od 1500 do 5000 zł w zależności od zakresu. Prosta strona portfolio z galerią i formularzem: 1500-3000 zł. Strona z blogiem, rezerwacją online i wieloma galeriami: 3000-5000 zł. Do tego hosting (50-100 zł/mies.) i domena (ok. 80 zł/rok). Czas realizacji: 1-3 tygodnie.",
    },
    {
      question: "Co powinna zawierać strona fotografa?",
      answer:
        "Obowiązkowe elementy strony fotografa: portfolio podzielone na kategorie (ślub, portret, komercja), biogram z historią i stylem pracy, cennik lub informacja o wycenie na zapytanie, formularz kontaktowy z pytaniami o sesję, lokalizacja i obszar działania, link do mediów społecznościowych (Instagram). Opcjonalnie: blog z realizacjami, kalkulator ceny, FAQ, rezerwacja online.",
    },
    {
      question: "Jak pozycjonować stronę fotografa w Google?",
      answer:
        "SEO dla fotografa opiera się na: frazach lokalnych ('fotograf ślubny Poznań', 'sesja zdjęciowa Wrocław'), blogowaniu z realizacjami (każda opisana sesja = nowa strona w Google), Google Business Profile z zdjęciami i opiniami, linkach z lokalnych portali ślubnych i fotograficznych. Fotografia ślubna to bardzo konkurencyjna niszy — Local SEO + blog to fundament.",
    },
    {
      question: "Czy fotograf potrzebuje strony www czy wystarczy Instagram?",
      answer:
        "Instagram to świetne narzędzie, ale nie zastępuje strony www. Problemy z Instagramem: nie ma SEO (klienci nie znajdą Cię przez Google), algorytm ogranicza zasięg, nie masz kontroli nad platformą. Strona www: jest widoczna w Google, budujesz własną markę, możesz mieć formularz kontaktowy i cennik, klienci mogą ocenić portfolio bez Instagrama. Ideał: Instagram + profesjonalna strona www.",
    },
    {
      question: "Jak szybko powinna ładować się galeria fotografa?",
      answer:
        "Galeria powinna ładować się poniżej 3 sekund. Techniki optymalizacji: lazy loading (zdjęcia ładują się gdy scrollujesz), format WebP (30-50% mniejszy niż JPEG przy tej samej jakości), miniatury w galerii + pełne zdjęcia w lightbox, CDN (Content Delivery Network) do serwowania zdjęć. Wolna galeria to najczęstsza przyczyna porzucenia strony fotografa. Każda sekunda ładowania kosztuje ~7% konwersji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strona internetowa dla fotografa — portfolio, SEO, galerie | fotz.pl"
        description="Strona internetowa dla fotografa — profesjonalne portfolio z galerią, SEO lokalne, blog fotograficzny i formularz zapytań. Strony dla fotografów od 1500 zł. Wycena!"
        canonical="https://fotz.pl/uslugi/strona-internetowa-dla-fotografa"
        keywords="strona internetowa dla fotografa, portfolio fotografa, strona www fotograf, strona fotografa cennik, strona fotografa online"
      />
      <ServiceSchema
        name="Strona internetowa dla fotografa"
        description="Tworzenie stron internetowych dla fotografów — portfolio z galerią, SEO lokalne, blog fotograficzny, formularz zapytań ofertowych"
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
                <Camera className="w-4 h-4" />
                Portfolio i fotografia
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Strona internetowa dla fotografa — portfolio które sprzedaje
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Tworzymy profesjonalne strony internetowe dla fotografów. Szybkie galerie,
                SEO lokalne i formularz zapytań — tak klienci znajdą Cię w Google i zamówią sesję.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "od 1500 zł", label: "Cena strony" },
                  { value: "1-3 tyg.", label: "Realizacja" },
                  { value: "Galeria", label: "Portfolio foto" },
                  { value: "SEO", label: "Widoczność w Google" },
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera strona fotografa?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda strona zaprojektowana z myślą o prezentacji Twojej pracy i pozyskiwaniu klientów.
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dlaczego fotograf potrzebuje strony?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "80% klientów szuka fotografa przez Google zanim zapyta znajomych",
                  "Portfolio na stronie www ładuje się szybciej i wygląda lepiej niż Instagram",
                  "Formularz zapytań kwalifikuje klientów — oszczędzasz czas na telefony",
                  "Blog z realizacjami ('sesja ślubna Kraków') przyciąga klientów latami",
                  "Google Business Profile + strona = dominacja w lokalnym SEO",
                  "Strona z cennikiem redukuje pytania o ceny i przyciąga klientów zdecydowanych",
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Strona dla fotografa</h2>
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
          heading="Stwórzmy portfolio które przyciąga klientów"
          subheading="Bezpłatna wycena strony dla fotografa — powiedz nam o swoich specjalizacjach."
        />
      </Layout>
    </>
  );
}
