import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, Search, ShoppingCart, Palette, MessageSquare, Settings, TrendingUp, Handshake, Phone, Smartphone, Shield, Headphones, ArrowRight, Sparkles, Target, Code2, Layers, Rocket, Star, Clock
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityServicesGrid } from "@/components/sections/CityServicesGrid";
import { CityPricingCards } from "@/components/sections/CityPricingCards";
import { CityIntroSection } from "@/components/sections/CityIntroSection";
import { CityBenefitsSection } from "@/components/sections/CityBenefitsSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweSzczecin = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz sklepy internetowe dla firm ze Szczecina." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają odwiedzających w klientów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy ze Szczecina." },
    { icon: Palette, step: "02", title: "Projekt UX/UI", desc: "Zaprojektowanie strony z naciskiem na użyteczność i estetykę." },
    { icon: Code2, step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www z dbałością o kod." },
    { icon: Rocket, step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy Twoją stronę internetową." },
  ];

  const caseStudies = [
    { title: "Apartamenty Chorwacja", category: "Strona rezerwacyjna", result: "+180% rezerwacji online", link: "/realizacje/apartamenty-chorwacja", image: apartamentyImg },
    { title: "Victory Cars", category: "Strona motoryzacyjna", result: "Nowoczesny design premium", link: "/realizacje/victory-cars", image: victoryCarsImg },
    { title: "Cute Dumpling", category: "Strona gastronomiczna", result: "+250% ruchu organicznego", link: "/realizacje/cute-dumpling", image: cuteDumplingImg },
  ];

  const faqItems = [
    { question: "Czym wyróżniają się strony internetowe tworzone przez Waszą firmę?", answer: "Oferujemy kompleksowy proces zaprojektowania strony i budujemy strony zoptymalizowane pod kątem wyszukiwarek internetowych, co zwiększa widoczność Twojej strony i przyciąga klientów." },
    { question: "Jak wygląda proces tworzenia strony www dla firm ze Szczecina?", answer: "Najpierw ustalamy zakres projektowania i strukturę strony, następnie przygotowujemy projekt graficzny i funkcjonalny. Po akceptacji przystępujemy do tworzenia, integracji z CMS oraz testów przed uruchomieniem." },
    { question: "Czy oferujecie responsywny design zoptymalizowany pod kątem wyszukiwarek?", answer: "Tak — nasze responsywne strony www są projektowane pod kątem szybkiego ładowania i najlepszych praktyk SEO." },
    { question: "Czy pomagacie w tworzeniu sklepów internetowych?", answer: "Tak, tworzymy sklepy internetowe oparte na sprawdzonych rozwiązaniach e-commerce z konfiguracją produktów, płatności i integracjami wysyłkowymi." },
    { question: "Ile czasu trwa przygotowanie i uruchomienie strony?", answer: "Czas realizacji zależy od zakresu — proste strony można uruchomić w kilku tygodniach, bardziej rozbudowane projekty wymagają kilku miesięcy." },
    { question: "Jakie wsparcie otrzymam po zrealizowanej stronie?", answer: "Po oddaniu projektu zapewniamy wsparcie techniczne, opcje hostingu i kopii zapasowych oraz szkolenie z zarządzania treścią." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Doświadczenie na szczecińskim rynku",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm ze Szczecina",
    paragraphs: [
      "W dzisiejszym cyfrowym świecie, posiadanie profesjonalnej strony internetowej to podstawa sukcesu każdej firmy.",
      "Specjalizujemy się w projektowaniu i tworzeniu stron www w Szczecinie, oferując kompleksowe rozwiązania dostosowane do indywidualnych potrzeb naszych klientów.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek internetowych.",
      "Szczecin to brama na rynek niemiecki – doskonała lokalizacja dla firm obsługujących klientów po obu stronach granicy. Profesjonalna strona internetowa to podstawa ekspansji na zachodnioeuropejskie rynki."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Szczecin | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Szczecin — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Szczecina. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/szczecin"
        keywords="strony internetowe szczecin, tworzenie stron www szczecin, projektowanie stron szczecin, sklepy internetowe szczecin, wykonanie strony internetowej szczecin, responsywna strona www szczecin, wordpress szczecin, nowoczesne strony www szczecin, agencja stron internetowych szczecin"
      />
      
      <ServiceSchema name="Strony Internetowe Szczecin" description="Profesjonalne tworzenie stron internetowych dla firm ze Szczecina." provider="FOTZ Studio" areaServed="Szczecin" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Szczecin", url: "https://fotz.pl/uslugi/strony-internetowe/szczecin" }]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
            <motion.div animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <motion.div animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-32 right-[15%] hidden lg:block">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center"><Globe className="w-10 h-10 text-primary" /></div>
          </motion.div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Szczecin<Sparkles className="w-4 h-4" /></span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Strony Internetowe{" "}<span className="text-gradient relative">Szczecin<motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full origin-left" /></span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}Tworzymy responsywne strony www i nowoczesne strony internetowe — wykonanie strony internetowej Szczecin w React, Next.js i WordPress. Projektowanie stron Szczecin dla firm gotowych na sukces w Google.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/20"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 border-2"><a href="tel:+48790814814"><Phone className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }} className="group p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all">
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2 transition-transform group-hover:scale-110" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        <CityIntroSection content={introContent} cityName="Szczecin" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Szczecin" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www dla szczecińskich firm" cityName="Szczecin" />

        {/* Process */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Proces</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Jak tworzymy strony?</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative">
                  <div className="p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">{item.step}</div>
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"><item.icon className="w-7 h-7 text-primary" /></div>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">Realizacje</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Nasze projekty</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                  <Link to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
                    <div className="aspect-video overflow-hidden"><img loading="lazy" src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{study.category}</span>
                      <h3 className="text-xl font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny bez ukrytych kosztów" cityName="Szczecin" />

        <CityLinksSection currentCity="Szczecin" />

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">FAQ</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">Najczęstsze pytania</h2>
            </motion.div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
                    <AccordionItem value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/50">
                      <AccordionTrigger className="text-left hover:no-underline py-6"><span className="font-medium">{item.question}</span></AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Strony internetowe Szczecin — tworzenie stron www dla firm z regionu
            </h2>
            <p className="text-muted-foreground mb-4">
              Szczecin leży 150 km od Berlina i 130 km od Hamburga — to jedna z najlepszych
              lokalizacji dla firm nastawionych na rynek niemiecki i skandynawski.
              Wiele szczecińskich przedsiębiorstw obsługuje klientów z Niemiec, co oznacza
              potrzebę dwujęzycznych stron www (PL + DE) z myślą o ekspansji zagranicznej.
              Tworzenie stron internetowych w Szczecinie to dla nas temat, który rozumiemy
              w tym specyficznym, transgranicznym kontekście.
            </p>
            <p className="text-muted-foreground mb-6">
              Port morski, przemysł stoczniowy i logistyka to trzon szczecińskiej gospodarki —
              ale miasto dynamicznie się dywersyfikuje. Sektor IT rośnie, startupowy ekosystem
              dojrzewa (Technopark Pomerania, Startup Hub Szczecin), a handel i usługi
              błyskawicznie digitalizują. Firmy, które jeszcze kilka lat temu nie potrzebowały
              strony, dziś tracą klientów bez profesjonalnej obecności online.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www dla firm z Pomorza Zachodniego i rynku transgranicznego
            </h2>
            <p className="text-muted-foreground mb-4">
              Firmy ze Szczecina działające na rynek Europy Zachodniej mają specyficzne
              wymagania: strony muszą wyglądać profesjonalnie według standardów zachodnich
              (minimalizm, szybkość, dostępność), obsługiwać płatności w euro i być zgodne
              z wymogami RODO w interpretacji obu krajów. Projektujemy strony internetowe,
              które spełniają te wymagania bez kompromisów.
            </p>
            <p className="text-muted-foreground mb-6">
              Dla firm logistycznych, spedycyjnych i morskich tworzymy rozbudowane strony
              korporacyjne z sekcjami fleet, usług, certyfikatów i formularzy ofertowych.
              Dla mniejszych przedsiębiorstw — od restauracji z Polic po salony kosmetyczne
              ze Śródmieścia — projektujemy lekkie, szybkie strony z opcją rezerwacji online
              i widocznością w lokalnym Google.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Jak wygląda współpraca przy tworzeniu strony internetowej?
            </h2>
            <p className="text-muted-foreground mb-4">
              Pracujemy wyłącznie zdalnie — konsultacje przez Google Meet lub telefon,
              projekt graficzny w Figmie z możliwością komentowania na bieżąco,
              wdrożenie z dostępem do staging server. Dla klientów ze Szczecina
              oznacza to brak konieczności dojazdów i pełną elastyczność terminową.
              Typowy projekt strony internetowej realizujemy w 3–5 tygodni.
            </p>
            <p className="text-muted-foreground mb-6">
              Nasz stack technologiczny: React/Next.js dla stron wymagających wysokiej
              wydajności, WordPress dla klientów zarządzających treścią samodzielnie,
              a dla sklepów e-commerce — WooCommerce lub Shopify, w zależności od skali
              i rynku docelowego. W przypadku stron dwujęzycznych stosujemy i18n
              z oddzielnymi meta tagami i hreflang — kluczowe dla SEO w dwóch krajach.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO lokalne i widoczność w Szczecinie — zdobądź klientów z okolicy
            </h2>
            <p className="text-muted-foreground mb-4">
              Lokalna widoczność w Google to jeden z najpewniejszych sposobów na pozyskanie
              klientów bez kosztów reklamy. Dla firm ze Szczecina optymalizujemy strony
              pod frazy z geolokalizacją, konfigurujemy profil Google Moja Firma
              i dbamy o spójność NAP (nazwa, adres, telefon) na wszystkich platformach.
              Efektem jest widoczność zarówno w organicznych wynikach wyszukiwania,
              jak i w Google Maps — dla klientów szukających usług w Szczecinie.
            </p>
            <p className="text-muted-foreground">
              Jeśli prowadzisz firmę w Szczecinie lub Pomorzu Zachodnim i szukasz
              agencji do stworzenia profesjonalnej strony internetowej — jesteś we właściwym
              miejscu. Bezpłatna wycena w 24 godziny, projekt graficzny w Figmie,
              wdrożenie z optymalizacją SEO. Napisz do nas i sprawdź, jak możemy pomóc
              Twojemu biznesowi rosnąć online.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe — oferta</Link>
              <Link to="/uslugi/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
              <Link to="/uslugi/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/uslugi/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweSzczecin;
