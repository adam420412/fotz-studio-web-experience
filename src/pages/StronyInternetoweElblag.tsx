import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Search, ShoppingCart, Palette, MessageSquare, TrendingUp, Phone, Headphones, ArrowRight, Sparkles, Target, Code2, Layers, Rocket, Star, Clock } from "lucide-react";
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

const StronyInternetoweElblag = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Elbląga i okolic." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i rozwiązania dedykowane." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony zamieniające odwiedzających w klientów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona firmowa", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Social media", "System CMS", "Wsparcie"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Płatności online", "Optymalizacja", "Marketing"] },
  ];

  const processSteps = [
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele Twojej firmy w Elblągu." },
    { icon: Palette, step: "02", title: "Projekt UX/UI", desc: "Projektowanie z naciskiem na estetykę." },
    { icon: Code2, step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www." },
    { icon: Rocket, step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy stronę." },
  ];

  const caseStudies = [
    { title: "Apartamenty Chorwacja", category: "Strona rezerwacyjna", result: "+180% rezerwacji", link: "/realizacje/apartamenty-chorwacja", image: apartamentyImg },
    { title: "Victory Cars", category: "Strona motoryzacyjna", result: "Design premium", link: "/realizacje/victory-cars", image: victoryCarsImg },
    { title: "Cute Dumpling", category: "Strona gastronomiczna", result: "+250% ruchu", link: "/realizacje/cute-dumpling", image: cuteDumplingImg },
  ];

  const faqItems = [
    { question: "Ile kosztuje strona internetowa w Elblągu?", answer: "Koszt zależy od zakresu. Wizytówka od 2000 zł, strona firmowa od 5000 zł, sklep od 8000 zł." },
    { question: "Jak długo trwa tworzenie strony?", answer: "Wizytówka 2-3 tygodnie, strona firmowa 4-6 tygodni, sklep 6-10 tygodni." },
    { question: "Czy oferujecie wsparcie po uruchomieniu?", answer: "Tak, zapewniamy wsparcie techniczne i pakiety serwisowe." },
    { question: "Czy strona będzie responsywna?", answer: "Wszystkie strony są w pełni responsywne, projektujemy mobile-first." },
    { question: "Czy pomagacie w pozycjonowaniu?", answer: "Każda strona jest zoptymalizowana pod SEO. Oferujemy też kompleksowe pozycjonowanie." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "12 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = ["Znajomość rynku Warmii i Mazur", "Kompleksowa obsługa", "SEO w standardzie", "Design mobile-first", "Wsparcie po uruchomieniu", "Konkurencyjne ceny"];

  const introContent = {
    title: "Tworzenie stron www dla firm z Elbląga",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej? Nasza agencja specjalizuje się w projektowaniu nowoczesnych stron www.",
      "Elbląg to ważne centrum biznesowe regionu. Twoja strona będzie efektywna w pozyskiwaniu klientów.",
      "Każda strona jest tworzona z myślą o użytkowniku i zoptymalizowana pod SEO.",
      "Elbląg – historyczne miasto portowe na Żuławach – to centrum usług i handlu dla całego regionu. Lokalne firmy mogą skutecznie poszerzyć zasięg działania dzięki profesjonalnej stronie internetowej."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Elbląg | Tworzenie i Projektowanie Stron WWW"
        description="Strony internetowe Elbląg — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Elbląga. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/elblag"
        keywords="strony internetowe elbląg, tworzenie stron elbląg, strony www elbląg, projektowanie stron elbląg"
      />
      
      <ServiceSchema name="Strony Internetowe Elbląg" description="Tworzenie stron internetowych dla firm z Elbląga." provider="FOTZ Studio" areaServed="Elbląg" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Elbląg", url: "https://fotz.pl/uslugi/strony-internetowe/elblag" }]}/>
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0"><div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" /><motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" /></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Elbląg<Sparkles className="w-4 h-4" /></span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8">Strony Internetowe{" "}<span className="text-gradient">Elbląg</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"><strong className="text-foreground">Strony internetowe Elbląg — tworzenie stron www i sklepy internetowe.</strong>{" "}Projektowanie i tworzenie stron internetowych Elbląg dla firm z regionu warmińsko-mazurskiego. Strony www Elbląg od 499 zł — responsywne, szybkie i zoptymalizowane SEO.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="px-8 py-6"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6"><a href="tel:+48790814814"><Phone className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">{stats.map((stat, i) => (<div key={i} className="p-4 rounded-2xl bg-card/50 border border-border/50"><stat.icon className="w-6 h-6 text-primary mx-auto mb-2" /><div className="text-2xl font-bold">{stat.value}</div><div className="text-xs text-muted-foreground">{stat.label}</div></div>))}</div>
            </motion.div>
          </div>
        </section>

        <CityIntroSection content={introContent} cityName="Elbląg" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Korzyści współpracy" cityName="Elbląg" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron" cityName="Elbląg" />

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Jak tworzymy strony?</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">{processSteps.map((item, i) => (<div key={i} className="p-8 rounded-2xl bg-background border border-border/50 relative"><div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">{item.step}</div><div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6"><item.icon className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-semibold mb-3">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>))}</div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Nasze projekty</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{caseStudies.map((study, i) => (<Link key={i} to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30"><div className="aspect-video overflow-hidden"><img loading="lazy" src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div><div className="p-6"><span className="text-primary text-sm font-medium">{study.category}</span><h3 className="text-xl font-semibold mt-2 mb-2">{study.title}</h3><p className="text-muted-foreground">{study.result}</p></div></Link>))}</div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny" cityName="Elbląg" />
        <CityLinksSection currentCity="Elbląg" />

        <section className="py-24">
          <div className="container mx-auto px-4"><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Najczęstsze pytania</h2></div>
            <div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-4">{faqItems.map((item, i) => (<AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-xl px-6 bg-card/50"><AccordionTrigger className="text-left py-6">{item.question}</AccordionTrigger><AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent></AccordionItem>))}</Accordion></div>
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
              Strony internetowe Elbląg — tworzenie stron www dla firm z Warmii i Powiśla
            </h2>
            <p className="text-muted-foreground mb-4">
              Elbląg to miasto z dwoma twarzami — historyczne centrum kultury (muzeum, stare miasto) i nowoczesny port morski na Zalewie Wiślanym z przełomowym kanałem żeglugowym przez Mierzeję Wiślaną. Kanał Elbląski otwiera nowe możliwości dla turystyki i lokalnego biznesu morskiego — firmy turystyczne, wypożyczalnie łodzi i obiekty noclegowe dynamicznie rosną.
            </p>
            <p className="text-muted-foreground mb-6">
              Obsługujemy firmy z Elbląga i całego regionu Warmii i Powiśla — Iława, Ostróda, Pasłęk. Projekt w Figmie, wdrożenie online, optymalizacja SEO. Termin: 3–5 tygodni. Bezpłatna wycena w 24 godziny.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www dla turystyki morskiej i lokalnych firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Kanał Elbląski i turystyka morska to wyjątkowy angle dla firm z Elbląga. Tworzymy strony dla firm turystycznych z integracją systemu rezerwacji, galerią zdjęć z trasy i wielojęzycznością dla gości zagranicznych. Każda strona jest zoptymalizowana pod frazy turystyczne.
            </p>
            <p className="text-muted-foreground mb-6">
              Dla lokalnych firm usługowych, handlowych i produkcyjnych z Elbląga projektujemy przystępne strony wizytówkowe i katalogowe. Optymalizacja pod frazy lokalne zapewnia stały napływ klientów z regionu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO lokalne dla firm z Elbląga i Warmii — Google Moja Firma
            </h2>
            <p className="text-muted-foreground mb-4">
              Lokalna optymalizacja SEO — frazy z geolokalizacją, Google Moja Firma, spójność NAP i budowanie recenzji. Dla firm turystycznych dodajemy sezonowe strategie contentowe, które generują ruch przez cały rok — nie tylko w szczycie sezonu.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami — bezpłatna wycena w 24 godziny. Tworzymy strony dla firm z Elbląga i całego regionu Warmii.
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

export default StronyInternetoweElblag;
