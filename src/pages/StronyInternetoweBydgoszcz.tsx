import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Search,
  ShoppingCart,
  Palette,
  MessageSquare,
  Settings,
  TrendingUp,
  Handshake,
  Phone,
  Smartphone,
  Shield,
  Headphones,
  MapPin,
  ArrowRight,
  Sparkles,
  BarChart3,
  Users,
  Building2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweBydgoszcz = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz witryny online dla firm z Bydgoszczy." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony internetowe z naciskiem na projekt graficzny." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracją WooCommerce i płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify, Joomla i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Marketing internetowy", desc: "Kampanie Ads i strategie, które przyciągają nowych klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Specjalizujemy się w tworzeniu stron skrojonych na miarę Twojej firmy." },
    { icon: Smartphone, title: "Responsywność", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "Certyfikat SSL, kopie zapasowe i regularne aktualizacje." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Nie zostawiamy Cię po uruchomieniu nowej strony internetowej." },
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Bydgoszcz to centrum przemysłowe i logistyczne kujawsko-pomorskiej. Tworzymy strony dla firm produkcyjnych, logistycznych i usługowych z tego regionu." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy z Bydgoszczy." },
    { step: "02", title: "Projekt UX/UI", desc: "Zaprojektowanie strony z naciskiem na użyteczność i estetykę." },
    { step: "03", title: "Programowanie", desc: "Profesjonalne tworzenie stron www z dbałością o kod." },
    { step: "04", title: "Testy i wdrożenie", desc: "Testujemy i uruchamiamy Twoją stronę internetową." },
  ];

  const caseStudies = [
    {
      title: "Apartamenty Chorwacja",
      category: "Strona rezerwacyjna",
      result: "+180% rezerwacji online",
      link: "/realizacje/apartamenty-chorwacja",
      image: apartamentyImg
    },
    {
      title: "Victory Cars",
      category: "Strona motoryzacyjna",
      result: "Nowoczesny design premium",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg
    },
    {
      title: "Cute Dumpling",
      category: "Strona gastronomiczna",
      result: "+250% ruchu organicznego",
      link: "/realizacje/cute-dumpling",
      image: cuteDumplingImg
    },
  ];

  const faqItems = [
    {
      question: "Jakie są najważniejsze aspekty tworzenia własnej strony?",
      answer: "Tworzenie stron internetowych to proces, który wymaga uwzględnienia wielu aspektów. Kluczowe jest zrozumienie potrzeb klienta i celów biznesowych. Należy zaprojektować responsywny design, zapewniający dostosowanie strony do różnych urządzeń. Ważna jest także funkcjonalność strony, intuicyjna nawigacja oraz optymalizacja SEO."
    },
    {
      question: "Co powinno znaleźć się na stronie internetowej firmy?",
      answer: "Strona internetowa firmy powinna zawierać kilka kluczowych podstron: stronę główną jako wizytówkę firmy, podstronę 'O nas' budującą zaufanie, 'Usługi/Produkty' prezentującą ofertę, 'Kontakt' z danymi i formularzem, oraz blog/aktualności dla poprawy SEO."
    },
    {
      question: "Ile kosztuje stworzenie strony dla małej firmy w Bydgoszczy?",
      answer: "Koszt strony zależy od zakresu funkcji — prosty landing page będzie tańszy niż sklep internetowy z integracjami WooCommerce. Wycena uwzględnia domenę, hosting, projekt graficzny, optymalizację SEO oraz późniejsze wsparcie techniczne. Ceny zaczynają się od 2 000 zł netto."
    },
    {
      question: "Jak strony internetowe mogą przyciągnąć klientów?",
      answer: "Strony internetowe przyciągają klientów przez przejrzysty przekaz, szybkie ładowanie, SEO i treści dopasowane do odbiorcy. Witryny zoptymalizowane oraz zintegrowane z narzędziami analitycznymi pomagają mierzyć efektywność i ulepszać konwersje."
    },
    {
      question: "Czy oferujecie gotowe pakiety i wsparcie techniczne?",
      answer: "Tak, oferujemy gotowe pakiety obejmujące projekt, wybór domeny, SEO podstawowe i miesięczne wsparcie techniczne. Dzięki temu nawet w przypadku złożonych stron można liczyć na szybką pomoc i regularne aktualizacje bezpieczeństwa."
    },
    {
      question: "Jak wygląda proces pozycjonowania dla firm z Bydgoszczy?",
      answer: "Proces pozycjonowania zaczyna się od audytu strony i analizy słów kluczowych, następnie optymalizacji treści i technicznych elementów witryny oraz budowy linków. Dla firm z Bydgoszczy kluczowe jest lokalne SEO i optymalizacja Google Moja Firma."
    },
    {
      question: "Czy można zintegrować sklep WooCommerce z projektem strony?",
      answer: "Tak, integracja z systemami e-commerce takimi jak WooCommerce jest standardem. Pozwala to na łatwe zarządzanie produktami, płatnościami i wysyłką, a także daje możliwości optymalizacji SEO dla kart produktów."
    },
    {
      question: "Jakie są opcje hostingu dla stron internetowych?",
      answer: "Dostępne są różne opcje hostingu: hosting współdzielony (najtańszy), hosting VPS oferujący większą kontrolę, oraz hosting dedykowany dla wymagających projektów. Ważne jest, aby wybrać hosting spełniający potrzeby strony i zapewniający stabilne działanie."
    },
  ];

  return (
    <>
      <SEOHead
        title="Strony Internetowe Bydgoszcz | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Bydgoszcz — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Bydgoszczy. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/bydgoszcz"
        keywords="strony internetowe bydgoszcz, tworzenie stron www bydgoszcz, projektowanie stron bydgoszcz, sklepy internetowe bydgoszcz, strona www bydgoszcz, www bydgoszcz"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Bydgoszcz - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Bydgoszczy i okolic. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Bydgoszcz"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Bydgoszcz", url: "https://fotz.pl/uslugi/strony-internetowe/bydgoszcz" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <OrganizationSchema />


      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-3 sm:px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                Strony WWW Bydgoszcz
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                Strony Internetowe <span className="text-gradient">Bydgoszcz</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                W dzisiejszym cyfrowym świecie <strong>profesjonalna strona internetowa to podstawa sukcesu każdej firmy</strong>. 
                Oferujemy kompleksowe usługi <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzenia stron www</Link> w Bydgoszczy, 
                dostosowane do indywidualnych potrzeb klienta.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button asChild size="lg" className="group w-full sm:w-auto">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Bydgoszcz Stats Section */}
        <section className="py-12 bg-card/40 border-y border-border/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">Bydgoszcz w liczbach</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Bydgoszcz — serce kujawsko-pomorskiego</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  8. miasto w Polsce z silnym sektorem przemysłowym, logistycznym i MŚP — rosnący rynek dla e-commerce i usług online.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, value: "350 tys.", label: "mieszkańców Bydgoszczy" },
                  { icon: Building2, value: "40 tys.", label: "zarejestrowanych firm" },
                  { icon: BarChart3, value: "Top 8", label: "miasto w Polsce" },
                  { icon: Globe, value: "76%", label: "MŚP poszukuje klientów online" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 rounded-xl bg-background border border-border/40">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Bydgoszcz local context */}
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
                  <h2>Strony www dla firm z Bydgoszczy — rozumiemy lokalny rynek</h2>
                  <p>
                    Bydgoszcz to centrum logistyczne i przemysłowe kujawsko-pomorskiego. Miasto znane jest z
                    <strong> przemysłu chemicznego, elektrotechnicznego i telekomunikacyjnego</strong>, a rosnący
                    sektor MŚP i startupów sprawia, że konkurencja online jest coraz silniejsza.
                    Tworzymy strony internetowe, które wyróżniają firmy z Bydgoszczy w wyszukiwarce Google
                    i konwertują odwiedzających w klientów.
                  </p>
                  <ul>
                    <li><strong>Produkcja i przemysł</strong> — profesjonalne witryny B2B dla firm produkcyjnych</li>
                    <li><strong>Logistyka i transport</strong> — strony dla operatorów logistycznych i spedytorów</li>
                    <li><strong>Handel lokalny i e-commerce</strong> — sklepy online dla detalistów z Bydgoszczy</li>
                    <li><strong>Usługi medyczne i wellness</strong> — strony dla klinik, gabinetów i centrów zdrowia</li>
                  </ul>
                  <p>
                    Znamy Bydgoszcz i wiemy, jak dotrzeć do jej mieszkańców. Lokalne SEO, optymalizacja
                    Google Moja Firma i treści pisane z myślą o bydgoskim rynku to nasza specjalność.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Projektowanie Section */}
        <section className="py-12 md:py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
                  Projektowanie Stron Internetowych w Bydgoszczy
                </h2>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
                  <p>
                    <strong>Projektowanie stron internetowych to kluczowy element w procesie tworzenia efektywnej wizytówki Twojej firmy w sieci</strong>. 
                    W Bydgoszczy nasza <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline">agencja</Link> specjalizuje się 
                    w projektowaniu stron www, które są nie tylko estetyczne, ale przede wszystkim funkcjonalne i responsywne.
                  </p>
                  
                  <h3>Dlaczego warto projektować profesjonalne strony internetowe?</h3>
                  <p>
                    <strong>Profesjonalne projektowanie stron internetowych to inwestycja w przyszłość Twojej firmy</strong>. 
                    Funkcjonalna strona www to nie tylko wizytówka, ale również skuteczne narzędzie marketingowe. 
                    Dobrze zaprojektowana witryna przyciąga uwagę potencjalnych klientów, buduje zaufanie i zwiększa konwersję.
                  </p>
                  
                  <h3>Usługi projektowania stron www w Bydgoszczy</h3>
                  <p>
                    Specjalizujemy się w projektowaniu responsywnych stron internetowych, dostosowanych do potrzeb klienta. 
                    <strong>Tworzymy strony internetowe dla firm, które są wizualnie atrakcyjne, funkcjonalne i zoptymalizowane pod kątem 
                    <Link to="/seo/pozycjonowanie" className="text-primary hover:underline"> SEO</Link></strong>.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 md:mb-16">
                <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 block">Usługi</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
                  Tworzenie Stron WWW w Bydgoszczy
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla firm z Bydgoszczy - od projektu graficznego po <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link>.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Proces Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Proces tworzenia stron internetowych Bydgoszcz</h2>
                  <p>
                    Proces tworzenia stron internetowych w Bydgoszczy rozpoczyna się od szczegółowej rozmowy, mającej na celu 
                    poznanie potrzeb klienta. Następnie przeprowadzamy dogłębny research, który pozwala nam opracować optymalną strategię. 
                    Po akceptacji wyceny nasi specjaliści przechodzą do tworzenia kodu i oprawy graficznej.
                  </p>
                  <p>
                    Dbamy o to, aby każda strona www była estetyczna, funkcjonalna i responsywna, z idealnym dostosowaniem strony 
                    do urządzeń mobilnych. Nasza agencja wykorzystuje różne systemy zarządzania treścią (CMS), takie jak WordPress, 
                    Joomla, Drupal, Webflow i Shopify. Dzięki temu <strong>zarządzanie Twoją witryną jest proste i intuicyjne</strong>.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak wygląda proces tworzenia strony internetowej?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od briefu do wdrożenia nowej strony internetowej.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-xl bg-background border border-border/50">
                    <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-semibold mb-2 mt-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wycena i koszty tworzenia stron www
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu. 
                  Sprawdź też <Link to="/blog/ile-kosztuje-strona-internetowa" className="text-primary hover:underline">ile kosztuje strona internetowa</Link>.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-xl border h-full flex flex-col ${index === 1 ? "bg-primary/5 border-primary/30" : "bg-card border-border/50"}`}>
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-6">{plan.price}</div>
                    <Button asChild className="w-full mt-auto" variant={index === 1 ? "default" : "outline"}>
                      <Link to="/kontakt">Zapytaj o ofertę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto text-sm">
                * Ceny orientacyjne. Ostateczna wycena zależy od zakresu funkcjonalności i złożoności projektu.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Realizacje</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Przykłady naszych stron internetowych
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz projekty, które zrealizowaliśmy. Tworzymy profesjonalne strony i sklepy internetowe.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link 
                    to={study.link}
                    className="group block rounded-xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img loading="lazy" 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{study.category}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">
                    Zobacz wszystkie realizacje
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Optymalizacja SEO dla Stron Internetowych</h2>
                  
                  <h3>Znaczenie SEO w tworzeniu stron www</h3>
                  <p>
                    <strong>Optymalizacja <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">SEO</Link> jest kluczowa 
                    w procesie tworzenia stron www, ponieważ wpływa na widoczność Twojej witryny w wyszukiwarkach internetowych</strong>. 
                    Naszą misją jest dostarczanie klientom stron internetowych, które pozwalają dotrzeć do szerszego grona odbiorców.
                  </p>
                  
                  <h3>Strategie SEO dla firm w Bydgoszczy</h3>
                  <p>
                    Skuteczne strategie SEO dla firm w Bydgoszczy powinny uwzględniać <strong>lokalne słowa kluczowe</strong>, 
                    które pomogą dotrzeć do klientów szukających usług w Bydgoszczy, oraz <strong>optymalizację wizytówki Google Moja Firma</strong>. 
                    Ważne jest również monitorowanie konkurencji i budowanie lokalnych linków.
                  </p>
                  
                  <h3>Jak sprawdzić pozycjonowanie strony?</h3>
                  <p>
                    <strong>Pozycjonowanie Twojej strony internetowej można sprawdzić za pomocą różnych narzędzi analitycznych</strong>, 
                    takich jak Google Analytics, Google Search Console czy Semrush. Pozwalają one monitorować ruch na stronie, 
                    analizować słowa kluczowe i sprawdzać pozycje w wynikach wyszukiwania.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Marketing Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Marketing i Reklama Internetowa</h2>
                  
                  <h3>Jak przyciągnąć nowych klientów online w Bydgoszczy?</h3>
                  <p>
                    Chcesz dotrzeć do nowych klientów w Bydgoszczy i okolicach? Skuteczny marketing internetowy to <strong>klucz do sukcesu</strong>! 
                    Wykorzystaj potencjał swojej strony internetowej, aby tworzyć trwałe relacje z odbiorcami. 
                    Twojej firmie potrzebny jest profesjonalny plan marketingowy.
                  </p>
                  
                  <h3>Reklama internetowa dla lokalnych firm</h3>
                  <p>
                    Reklama internetowa to <strong>niezbędny element strategii marketingowej każdej lokalnej firmy</strong>. 
                    Dzięki niej możesz dotrzeć do potencjalnych klientów w Bydgoszczy i okolicach, promując swoje usługi i produkty. 
                    Nasza oferta obejmuje kampanie reklamowe Meta Ads i Google Ads.
                  </p>
                  
                  <h3>Wykorzystanie <Link to="/social-media/obsluga" className="text-primary hover:underline">Social Media</Link></h3>
                  <p>
                    Kampanie Ads pozwalają na precyzyjne targetowanie odbiorców, wyświetlanie reklam osobom zainteresowanym 
                    Twoją ofertą oraz mierzenie efektów reklamowych. Dzięki temu możesz zoptymalizować swoje działania marketingowe.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Dlaczego my</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto nam zlecić tworzenie strony?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm z Bydgoszczy i całej Polski.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Additional SEO Content */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Strony internetowe Bydgoszcz — miasto dwóch rzek i dwóch rynków</h2>
                  <p>
                    Bydgoszcz to wyjątkowe miasto z perspektywy biznesu online. Jako część Bydgosko-Toruńskiego Obszaru Metropolitalnego (ok. 700 000 mieszkańców), bydgoskie firmy mają dostęp do szerokiego rynku konsumentów — zarówno lokalnych, jak i z aglomeracji. <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">Profesjonalna strona internetowa</Link> to dla bydgoskich przedsiębiorców kluczowy element dotarcia do klientów w całym regionie Kujawsko-Pomorskim.
                  </p>
                  <p>
                    Bydgoszcz łączy silną tradycję przemysłową (PESA, Bombardier, Nitroerg) z rosnącym sektorem usługowym i technologicznym. Firmy z branży logistycznej korzystają z węzła komunikacyjnego — skrzyżowania tras między Warszawą, Gdańskiem i Berlinem. Strona www musi komunikować zarówno lokalną obecność, jak i gotowość do obsługi klientów B2B z całej Polski.
                  </p>

                  <h2>Branże, dla których tworzymy strony internetowe w Bydgoszczy</h2>
                  <p>
                    Bydgoski rynek ma swoje specyficzne sektory. Szczególnie aktywnie tworzymy strony dla firm z branży:
                    <strong> produkcyjnej i przemysłowej</strong> (PESA, lokalni podwykonawcy automotive),
                    <strong> medycznej i rehabilitacyjnej</strong> (prywatne kliniki, gabinety fizjoterapii),
                    <strong> edukacyjnej</strong> (UTP, WSG, prywatne szkoły),
                    <strong> gastronomicznej</strong> (restauracje przy Wyspie Młyńskiej, barki na Brdzie),
                    <strong> nieruchomości</strong> (rosnący rynek deweloperski),
                    oraz dla freelancerów i lokalnych sklepów online.
                  </p>

                  <h2>Strony www Bydgoszcz — co wyróżnia naszą ofertę?</h2>
                  <p>
                    Fotz Studio tworzy strony internetowe dla firm z Bydgoszczy w 100% zdalnie — bez pośredników i bez szablonów kupowanych hurtowo. Każdy projekt to indywidualny design w Figma, własna implementacja i pełna optymalizacja SEO pod frazy bydgoskie (np. &quot;strony internetowe Bydgoszcz&quot;, usługi branżowe + miasto). Dostarczamy kompletny pakiet: projekt, wdrożenie, szkolenie z CMS i 30-dniowe wsparcie po starcie.
                  </p>
                  <p>
                    Chcesz zobaczyć nasze realizacje lub uzyskać bezpłatną wycenę? <Link to="/kontakt" className="text-primary hover:underline">Skontaktuj się z nami</Link> — odpowiemy w ciągu 24 godzin.
                  </p>
                </div>
              </FadeInView>
              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">&rarr; Strony internetowe — oferta</Link>
                <Link to="/uslugi/landing-page" className="text-primary hover:underline font-medium text-sm">&rarr; Landing page</Link>
                <Link to="/uslugi/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">&rarr; Kampanie reklamowe</Link>
                <Link to="/uslugi/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">&rarr; Pozycjonowanie SEO</Link>
              </div>
            </div>
          </div>
        </section>

        <CityLinksSection currentCity="Bydgoszcz" />

        {/* FAQ Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Często Zadawane Pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania dotyczące tworzenia stron w Bydgoszczy.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold pr-4">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Contact Section */}

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Strony internetowe Bydgoszcz — rynek lokalny i specyfika regionu
            </h2>
            <p className="text-muted-foreground mb-4">
              Bydgoszcz to piąte co do wielkości miasto w Polsce i ważny węzeł komunikacyjny. Dynamicznie rozwijający się sektor MŚP, przemysł chemiczny, branża medialna i edukacja wyższa (UKW, UTP) sprawiają, że lokalny rynek online jest coraz bardziej konkurencyjny. Profesjonalna strona internetowa dla firmy z Bydgoszczy to inwestycja, która zwraca się szybko — szczególnie w usługach lokalnych, gdzie klienci szukają dostawców w Google Maps.
            </p>
            <p className="text-muted-foreground mb-6">
              Fotz Studio tworzy strony internetowe dla firm z Bydgoszczy w modelu w pełni zdalnym — bez kompromisów w jakości. Każdy projekt realizuje nasz własny zespół: projektant UX/UI, developer i specjalista SEO. Żadnych podwykonawców, żadnych szablonów kupowanych hurtowo. Efekt? Strony, które wyróżniają się na lokalnym rynku i konwertują odwiedzających w klientów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Bydgoszcz — nasz proces od A do Z
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie strony internetowej dla firmy z Bydgoszczy zaczynamy od bezpłatnej konsultacji — omawiamy cel strony, grupę docelową, budżet i harmonogram. Następnie przygotowujemy brief kreatywny i analizę konkurencji. Projekt graficzny powstaje w Figma i jest akceptowany przez Ciebie przed startem kodowania. Po uruchomieniu strony masz pełne dostępy i możesz samodzielnie edytować treści.
            </p>
            <p className="text-muted-foreground mb-6">
              Czas realizacji strony wizytówkowej to 2–3 tygodnie, strony firmowej 4–8 tygodni. Nasze strony są objęte 30-dniową gwarancją po wdrożeniu — wszelkie błędy po uruchomieniu poprawiamy bezpłatnie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO dla stron internetowych w Bydgoszcz — lokalna widoczność w Google
            </h2>
            <p className="text-muted-foreground mb-4">
              Każda strona internetowa, którą tworzymy dla bydgoskich firm, zawiera podstawowe SEO w cenie: meta tagi title i description, schema LocalBusiness z danymi adresowymi Bydgoszczy i Kujawsko-Pomorskiego, szybkość Core Web Vitals i poprawna architektura nagłówków H1–H3. Dzięki temu strona startuje z solidnym fundamentem i szybciej osiąga widoczność w Google.
            </p>
            <p className="text-muted-foreground mb-6">
              Kompleksowa oferta 
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzenia stron internetowych</Link> dostępna jest na naszej stronie głównej usługi. Jeśli potrzebujesz strony do kampanii reklamowej, sprawdź naszą ofertę 
              <Link to="/uslugi/landing-page" className="text-primary hover:underline">landing page dla Google Ads i Meta Ads</Link>.
            </p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">&rarr; Strony internetowe — oferta</Link>
              <Link to="/uslugi/landing-page" className="text-primary hover:underline font-medium text-sm">&rarr; Landing page</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">&rarr; Pozycjonowanie SEO</Link>
              <Link to="/uslugi/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">&rarr; Kampanie reklamowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

        <ContactSection city="Bydgoszczy" />
      </Layout>
    </>
  );
};

export default StronyInternetoweBydgoszcz;
