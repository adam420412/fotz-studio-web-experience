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

const StronyInternetoweRadom = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Radomia i okolic." },
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
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Radomiu." },
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
    { question: "Ile kosztuje strona internetowa w Radomiu?", answer: "Koszt strony zależy od zakresu projektu. Prosta wizytówka od 2000 zł, strona firmowa od 5000 zł, sklep e-commerce od 8000 zł. Oferujemy bezpłatną wycenę." },
    { question: "Jak długo trwa tworzenie strony www?", answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówkowa to 2-3 tygodnie, rozbudowana strona firmowa 4-6 tygodni, sklep internetowy 6-10 tygodni." },
    { question: "Czy oferujecie wsparcie po uruchomieniu strony?", answer: "Tak, zapewniamy wsparcie techniczne po uruchomieniu. Oferujemy pakiety serwisowe obejmujące aktualizacje, kopie zapasowe i pomoc techniczną." },
    { question: "Czy strona będzie responsywna?", answer: "Wszystkie nasze strony są w pełni responsywne i dostosowane do urządzeń mobilnych. Projektujemy w podejściu mobile-first." },
    { question: "Czy pomagacie w pozycjonowaniu strony?", answer: "Tak, każda strona jest zoptymalizowana pod SEO. Oferujemy również kompleksowe usługi pozycjonowania dla firm z Radomia." },
    { question: "Jakie systemy CMS wykorzystujecie?", answer: "Pracujemy z WordPress, Webflow, Shopify oraz tworzymy dedykowane rozwiązania. Dobieramy system do potrzeb klienta." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "5 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Znajomość radomskiego rynku",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Radomia",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej dla Twojej firmy w Radomiu? Nasza agencja specjalizuje się w projektowaniu i wdrażaniu nowoczesnych stron www.",
      "Twoja strona internetowa będzie nie tylko estetyczna, ale również efektywna w pozyskiwaniu klientów.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek internetowych.",
      "Radom to jedno z większych miast Mazowsza z silnym sektorem przemysłowym i handlowym. Profesjonalna strona internetowa to dla radomskich firm klucz do nowych rynków i klientów."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Radom | Tworzenie i Projektowanie Stron WWW"
        description="Strony internetowe Radom — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Radomia. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/radom"
        keywords="strony internetowe radom, tworzenie stron radom, strony www radom, projektowanie stron radom"
      />
      
      <ServiceSchema name="Strony Internetowe Radom" description="Profesjonalne tworzenie stron internetowych dla firm z Radomia." provider="FOTZ Studio" areaServed="Radom" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Radom", url: "https://fotz.pl/uslugi/strony-internetowe/radom" }]} />
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
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Radom<Sparkles className="w-4 h-4" /></span>
              </motion.div>
              
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Strony Internetowe{" "}<span className="text-gradient relative">Radom<motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, delay: 0.8 }} className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full origin-left" /></span>
              </motion.h1>
              
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}Tworzymy strony www, które wyglądają świetnie i skutecznie pozyskują klientów dla radomskich firm.
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

        <CityIntroSection content={introContent} cityName="Radom" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Radom" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www dla radomskich firm" cityName="Radom" />

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

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny bez ukrytych kosztów" cityName="Radom" />

        <CityLinksSection currentCity="Radom" />

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
              Strony internetowe Radom — tworzenie stron www dla firm z Mazowsza
            </h2>
            <p className="text-muted-foreground mb-4">
              Radom to drugie największe miasto Mazowsza po Warszawie — centrum przemysłowe z tradycjami zbrojeniowymi (PGZ, Łucznik), skórzanymi i lotniczymi (lotnisko Radom). Miasto dynamicznie przyciąga nowych inwestorów i rozbudowuje infrastrukturę — co oznacza rosnące zapotrzebowanie na profesjonalne strony www dla firm produkcyjnych, logistycznych i usługowych szukających klientów B2B i B2C.
            </p>
            <p className="text-muted-foreground mb-6">
              Firmy z Radomia obsługujemy zdalnie — projekt w Figmie, wdrożenie w React lub WordPress, pełna optymalizacja SEO. Bliskość Warszawy (100 km) sprawia, że część klientów radomskich firm pochodzi ze stolicy — strony optymalizujemy pod oba rynki jednocześnie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Tworzenie stron dla radomskich firm — B2B i B2C
            </h2>
            <p className="text-muted-foreground mb-4">
              Sektor zbrojeniowy i obronny to specyfika Radomia — firmy z tej branży potrzebują stron z sekcją certyfikatów, przetargów publicznych i kontaktów dla partnerów instytucjonalnych. Tworzymy profesjonalne strony korporacyjne zgodne z wymogami zamówień publicznych i standardami branży obronnej.
            </p>
            <p className="text-muted-foreground mb-6">
              Dla mniejszych firm usługowych — gabinetów, salonów, restauracji, firm budowlanych — projektujemy przystępne strony wizytówkowe z lokalną optymalizacją SEO. Czas realizacji: 3–5 tygodni. Cena: od 2000 zł. Pełna dokumentacja i transfer dostępów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO dla firm z Radomia — lokalna widoczność w Google
            </h2>
            <p className="text-muted-foreground mb-4">
              Frazy lokalne — „usługa + Radom", „usługa + Mazowsze" — to najtańszy sposób na pozyskanie klientów. Konfigurujemy Google Moja Firma, optymalizujemy stronę pod frazy lokalne i budujemy widoczność w mapach Google. Efekt: klienci z Radomia i okolic trafiają do Ciebie, a nie do konkurencji.
            </p>
            <p className="text-muted-foreground">
              Bezpłatna wycena w 24 godziny. Skontaktuj się z nami i porozmawiajmy o stronie internetowej dla Twojej firmy z Radomia.
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

export default StronyInternetoweRadom;