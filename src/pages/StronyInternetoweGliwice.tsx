import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, Search, ShoppingCart, Palette, MessageSquare, TrendingUp, Phone, Headphones, ArrowRight, Sparkles, Target, Code2, Layers, Rocket, Star, Clock
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

const StronyInternetoweGliwice = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Gliwic i Śląska." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony zamieniające odwiedzających w klientów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Gliwicach." },
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
    { question: "Ile kosztuje strona internetowa w Gliwicach?", answer: "Ceny stron zaczynają się od 2000 zł za wizytówkę. Strony firmowe od 5000 zł, sklepy od 8000 zł. Dokładna wycena zależy od zakresu projektu." },
    { question: "Jak długo trwa realizacja strony?", answer: "Prosta strona wizytówka to 1-2 tygodnie. Strona firmowa wymaga 3-4 tygodni, a sklep 4-8 tygodni w zależności od złożoności." },
    { question: "Czy oferujecie hosting i domenę?", answer: "Tak, pomagamy w wyborze i konfiguracji hostingu oraz domeny. Możemy przejąć pełną obsługę techniczną." },
    { question: "Czy strona będzie zoptymalizowana pod SEO?", answer: "Każda strona tworzona jest z myślą o pozycjonowaniu. Stosujemy najlepsze praktyki SEO dla widoczności w Google." },
    { question: "Czy mogę samodzielnie edytować treści?", answer: "Tak, wszystkie strony wyposażone są w intuicyjny panel CMS do łatwej edycji treści." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Znajomość rynku śląskiego",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Gliwic",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej dla Twojej firmy w Gliwicach? Nasza agencja specjalizuje się w projektowaniu i wdrażaniu nowoczesnych stron www.",
      "Gliwice to jedno z najważniejszych miast aglomeracji śląskiej, będące centrum nauki i technologii. Profesjonalna strona internetowa jest niezbędna dla sukcesu na tym rynku.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek.",
      "Gliwice to centrum innowacji na Śląsku – siedziba Politechniki Śląskiej i licznych firm technologicznych. Dynamicznie rozwijający się sektor IT i automotive tworzy zapotrzebowanie na nowoczesne strony internetowe."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Gliwice | Tworzenie i Projektowanie Stron WWW"
        description="Strony internetowe Gliwice — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Gliwic. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/gliwice"
        keywords="strony internetowe gliwice, tworzenie stron gliwice, strony www gliwice, projektowanie stron gliwice"
      />
      
      <ServiceSchema name="Strony Internetowe Gliwice" description="Profesjonalne tworzenie stron internetowych dla firm z Gliwic." provider="FOTZ Studio" areaServed="Gliwice" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Gliwice", url: "https://fotz.pl/uslugi/strony-internetowe/gliwice" }]}/>
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-5xl mx-auto">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Gliwice<Sparkles className="w-4 h-4" /></span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Strony Internetowe{" "}<span className="text-gradient relative">Gliwice</span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}Tworzymy strony www, które wyglądają świetnie i skutecznie pozyskują klientów dla firm z Gliwic i aglomeracji śląskiej.
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

        <CityIntroSection content={introContent} cityName="Gliwice" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Gliwice" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www dla gliwickich firm" cityName="Gliwice" />

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

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny bez ukrytych kosztów" cityName="Gliwice" />
        <CityLinksSection currentCity="Gliwice" />

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
              Strony internetowe Gliwice — tworzenie stron www dla firm z aglomeracji śląskiej
            </h2>
            <p className="text-muted-foreground mb-4">
              Gliwice to miasto-laboratorium przemysłu 4.0 na Śląsku. Politechnika Śląska, GM Manufacturing Poland (produkcja Opla), Centrum Edukacji i Biznesu "Nowe Gliwice" i rosnący klaster IT tworzą środowisko, w którym nowoczesność jest standardem. Firmy z Gliwic — zarówno technologiczne startupy jak i tradycyjne zakłady produkcyjne — potrzebują stron www na poziomie odpowiadającym ich ambicjom.
            </p>
            <p className="text-muted-foreground mb-6">
              Gliwice są częścią GOP (Górnośląski Okręg Przemysłowy) — aglomeracji 2 milionów mieszkańców. Strony tworzone dla firm z Gliwic optymalizujemy pod frazy lokalne i aglomeracyjne, by docierać do klientów z całego Śląska: Katowic, Bytomia, Zabrza.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www dla technologii i automotive — Śląski Kontekst
            </h2>
            <p className="text-muted-foreground mb-4">
              Sektor automotive jest mocno obecny w Gliwicach — dostawcy GM, firmy logistyczne i serwisowe potrzebują stron B2B z sekcją partnerstwa, certyfikatów i katalogu usług. Projektujemy strony korporacyjne z wysokimi standardami wizualnymi i technicznymi — Core Web Vitals na poziomie top 10% w Polsce.
            </p>
            <p className="text-muted-foreground mb-6">
              Dla środowiska akademickiego i startupowego Gliwic tworzymy strony dla spin-offów Politechniki, firm doradczych i agencji technologicznych. Strony, które muszą jednocześnie rekrutować pracowników, pozyskiwać klientów i budować markę eksperta.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO dla firm z Gliwic i aglomeracji górnośląskiej
            </h2>
            <p className="text-muted-foreground mb-4">
              Optymalizujemy strony pod słowa kluczowe z Gliwic i całego GOP. Dla firm z zasięgiem ogólnopolskim budujemy strukturę treści, które rankują na frazy ogólne i lokalne jednocześnie. Google Moja Firma, lokalne linki, cytaty — pełen pakiet lokalnego SEO.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami — bezpłatna wycena w 24 godziny, projekt w 3–5 tygodni. Tworzymy strony dla firm z Gliwic, które wyróżniają się na tle śląskiej konkurencji.
            </p>
          
                        <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe — oferta</Link>
              <Link to="/uslugi/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media/obsluga" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
            </div>
          </motion.div>
        </div>
      </section>


        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweGliwice;
