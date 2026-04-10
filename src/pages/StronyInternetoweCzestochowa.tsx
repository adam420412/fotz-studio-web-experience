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

const StronyInternetoweCzestochowa = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Częstochowy i okolic." },
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
    { icon: Target, step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Częstochowie." },
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
    { question: "Ile kosztuje strona internetowa w Częstochowie?", answer: "Koszt strony zależy od zakresu projektu. Prosta wizytówka od 2000 zł, strona firmowa od 5000 zł, sklep e-commerce od 8000 zł. Oferujemy bezpłatną wycenę." },
    { question: "Jak długo trwa tworzenie strony www?", answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówkowa to 2-3 tygodnie, rozbudowana strona firmowa 4-6 tygodni, sklep internetowy 6-10 tygodni." },
    { question: "Czy oferujecie wsparcie po uruchomieniu strony?", answer: "Tak, zapewniamy wsparcie techniczne po uruchomieniu. Oferujemy pakiety serwisowe obejmujące aktualizacje, kopie zapasowe i pomoc techniczną." },
    { question: "Czy strona będzie responsywna?", answer: "Wszystkie nasze strony są w pełni responsywne i dostosowane do urządzeń mobilnych. Projektujemy w podejściu mobile-first." },
    { question: "Czy pomagacie w pozycjonowaniu strony?", answer: "Tak, każda strona jest zoptymalizowana pod SEO. Oferujemy również kompleksowe usługi pozycjonowania dla firm z Częstochowy." },
  ];

  const stats = [
    { value: "200+", label: "Zrealizowanych projektów", icon: Layers },
    { value: "98%", label: "Zadowolonych klientów", icon: Star },
    { value: "12 lat", label: "Doświadczenia", icon: Clock },
    { value: "24/7", label: "Wsparcie techniczne", icon: Headphones },
  ];

  const benefits = [
    "Znajomość rynku regionu śląskiego",
    "Kompleksowa obsługa od projektu po wdrożenie",
    "SEO w standardzie każdej strony",
    "Responsywny design mobile-first",
    "Wsparcie techniczne po uruchomieniu",
    "Konkurencyjne ceny bez ukrytych kosztów"
  ];

  const introContent = {
    title: "Tworzenie stron www dla firm z Częstochowy",
    paragraphs: [
      "Szukasz profesjonalnego partnera do stworzenia strony internetowej dla Twojej firmy w Częstochowie? Nasza agencja specjalizuje się w projektowaniu i wdrażaniu nowoczesnych stron www.",
      "Częstochowa to ważne centrum biznesowe i turystyczne. Twoja strona internetowa będzie nie tylko estetyczna, ale również efektywna w pozyskiwaniu klientów.",
      "Każda strona www jest tworzona z myślą o użytkowniku końcowym i zoptymalizowana pod kątem wyszukiwarek internetowych.",
      "Częstochowa przyciąga miliony pielgrzymów rocznie z całego świata. Lokalne firmy – hotele, restauracje, sklepy z pamiątkami i usługi – mają wyjątkową szansę na dotarcie do tej ogromnej grupy klientów przez internet."
    ],
    videoSrc: "/videos/fotz-reel.mp4"
  };

  return (
    <>
      <SEOHead
        title="Strony Internetowe Częstochowa | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Częstochowa — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Częstochowy…"
        canonical="https://fotz.pl/uslugi/strony-internetowe/czestochowa"
        keywords="strony internetowe częstochowa, tworzenie stron www częstochowa, projektowanie stron częstochowa, sklepy internetowe częstochowa"
      />
      
      <ServiceSchema name="Strony Internetowe Częstochowa" description="Profesjonalne tworzenie stron internetowych dla firm z Częstochowy." provider="FOTZ Studio" areaServed="Częstochowa" />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://fotz.pl" }, { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" }, { name: "Częstochowa", url: "https://fotz.pl/uslugi/strony-internetowe/czestochowa" }]} />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />


      <Layout>
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-5xl mx-auto">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"><Sparkles className="w-4 h-4" />Strony WWW Częstochowa<Sparkles className="w-4 h-4" /></span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8">Strony Internetowe{" "}<span className="text-gradient">Częstochowa</span></h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"><strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong>{" "}Tworzymy strony www dla częstochowskich firm.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="px-8 py-6"><Link to="/kontakt">Bezpłatna wycena<ArrowRight className="ml-2 h-5 w-5" /></Link></Button>
                <Button asChild variant="outline" size="lg" className="px-8 py-6"><a href="tel:+48790814814"><Phone className="mr-2 h-5 w-5" />+48 790 814 814</a></Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (<div key={index} className="p-4 rounded-2xl bg-card/50 border border-border/50"><stat.icon className="w-6 h-6 text-primary mx-auto mb-2" /><div className="text-2xl font-bold">{stat.value}</div><div className="text-xs text-muted-foreground">{stat.label}</div></div>))}
              </div>
            </motion.div>
          </div>
        </section>

        <CityIntroSection content={introContent} cityName="Częstochowa" />
        <CityBenefitsSection benefits={benefits} title="Dlaczego warto nam zaufać?" subtitle="Poznaj korzyści współpracy" cityName="Częstochowa" />
        <CityServicesGrid services={services} title="Nasze usługi" subtitle="Kompleksowe usługi tworzenia stron www" cityName="Częstochowa" />

        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Jak tworzymy strony?</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (<div key={index} className="p-8 rounded-2xl bg-background border border-border/50 relative"><div className="absolute top-0 right-0 text-8xl font-bold text-primary/5">{item.step}</div><div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6"><item.icon className="w-7 h-7 text-primary" /></div><h3 className="text-xl font-semibold mb-3">{item.title}</h3><p className="text-muted-foreground">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Nasze projekty</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {caseStudies.map((study, index) => (<Link key={index} to={study.link} className="group block rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/30"><div className="aspect-video overflow-hidden"><img loading="lazy" src={study.image} alt={study.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div><div className="p-6"><span className="text-primary text-sm font-medium">{study.category}</span><h3 className="text-xl font-semibold mt-2 mb-2">{study.title}</h3><p className="text-muted-foreground">{study.result}</p></div></Link>))}
            </div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} title="Cennik stron internetowych" subtitle="Transparentne ceny" cityName="Częstochowa" />
        <CityLinksSection currentCity="Częstochowa" />

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-heading font-bold">Najczęstsze pytania</h2></div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (<AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-card/50"><AccordionTrigger className="text-left py-6">{item.question}</AccordionTrigger><AccordionContent className="text-muted-foreground pb-6">{item.answer}</AccordionContent></AccordionItem>))}
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
              Strony internetowe Częstochowa — tworzenie stron www dla firm z regionu
            </h2>
            <p className="text-muted-foreground mb-4">
              Częstochowa to miasto, które kojarzy się przede wszystkim z Jasną Górą i pielgrzymkami — ale to też prężny ośrodek przemysłowy i usługowy. Sektor stalowy (ISD Częstochowa), metalurgiczny i rosnąca branża turystyczna tworzą różnorodny popyt na profesjonalne strony internetowe. Firmy związane z obsługą pielgrzymów, hotelarstwo i handel pamiątkami intensywnie digitalizują się — i potrzebują stron www na miarę swoich ambicji.
            </p>
            <p className="text-muted-foreground mb-6">
              Tworzymy strony internetowe dla firm z Częstochowy i okolic — Zawiercie, Myszków, Blachownia. Zdalny model współpracy sprawia, że lokalizacja nie jest barierą. Projekt w Figmie, wdrożenie w React lub WordPress, optymalizacja SEO i 30-dniowy support po wdrożeniu. Termin: 3–5 tygodni.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strony www dla turystyki i pielgrzymkowego biznesu
            </h2>
            <p className="text-muted-foreground mb-4">
              Specyfika Częstochowy to sezonowy ruch pielgrzymkowy — setki tysięcy odwiedzających rocznie, z Polski i zagranicy. Hotele, pensjonaty, restauracje i sklepy z pamiątkami muszą być widoczne online, szczególnie w języku angielskim, włoskim i słowackim. Tworzymy wielojęzyczne strony turystyczne z systemem rezerwacji i integracją z mapami.
            </p>
            <p className="text-muted-foreground mb-6">
              Dla firm produkcyjnych i B2B z Częstochowy projektujemy solidne strony korporacyjne z portfolio, danymi technicznymi i formularzami zapytań ofertowych. Eksport to kluczowy obszar dla lokalnego przemysłu — angielska wersja strony to konieczność dla firm nastawionych na rynki zachodnie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO lokalne i regionalne — bądź widoczny w Częstochowie i na Śląsku
            </h2>
            <p className="text-muted-foreground mb-4">
              Optymalizacja lokalna dla firm z Częstochowy obejmuje frazy z geolokalizacją, konfigurację Google Moja Firma i budowanie linków z lokalnych katalogów. Dla firm działających na Śląsku rozszerzamy zasięg na Katowice, Sosnowiec i Gliwice — bez powielania treści, z właściwą strukturą URL.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami — bezpłatna wycena w 24 godziny, projekt w 3–5 tygodni. Firmy z Częstochowy i regionu mogą liczyć na strony, które naprawdę sprzedają.
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

export default StronyInternetoweCzestochowa;
