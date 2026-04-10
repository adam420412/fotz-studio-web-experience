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
  Server,
  FileCode,
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
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweGorzow = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www i witryny online dla firm z Gorzowa Wielkopolskiego i Lubuskiego." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Kompleksowa optymalizacja SEO zwiększająca widoczność w Google dla lokalnych firm." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony internetowe z indywidualnym projektem graficznym." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami płatności online." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania dopasowane do skali." },
    { icon: Server, title: "Hosting i domeny", desc: "Kompleksowy hosting i pomoc w rejestracji domeny dla Twojego biznesu." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow — dobieramy technologię do projektu." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Jesteśmy partnerem, nie tylko wykonawcą — rozumiemy Twoje cele biznesowe." },
    { icon: Smartphone, title: "Responsywność", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "Certyfikat SSL, kopie zapasowe i regularne aktualizacje bezpieczeństwa." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Kompleksowa obsługa stron internetowych po uruchomieniu — zawsze pod ręką." },
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Gorzów Wielkopolski to dynamiczne miasto portowe w sercu Lubuskiego — prężne centrum handlowe, turystyczne i technologiczne. Tworzymy strony skrojone pod potrzeby lokalnych firm, start-upów i marek premium." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { step: "01", title: "Rozmowa i research", desc: "Poznajemy cele biznesowe i potrzeby Twojej firmy z Gorzowa Wielkopolskiego." },
    { step: "02", title: "Wycena projektu", desc: "Przygotowujemy indywidualną wycenę dopasowaną do Twoich potrzeb." },
    { step: "03", title: "Projektowanie i kod", desc: "Tworzymy responsywny projekt strony i piszemy czysty kod." },
    { step: "04", title: "Prezentacja i wdrożenie", desc: "Prezentujemy projekt, wprowadzamy poprawki i uruchamiamy stronę." },
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
      question: "Kiedy warto zamówić stronę internetową dla firmy z Gorzowa Wielkopolskiego?",
      answer: "Warto zamówić stronę internetową, gdy chcesz zwiększyć widoczność firmy w Lubuskim, pozyskać klientów online i zaprezentować ofertę usług. Proces obejmuje projekt strony, projektowanie i tworzenie stron internetowych oraz wdrożenie responsywnej witryny dopasowanej do marki."
    },
    {
      question: "Co obejmuje projektowanie stron internetowych w Gorzowie Wielkopolskim?",
      answer: "Projektowanie obejmuje analizę potrzeb, przygotowanie projektu graficznego i UX, pisanie kodu strony oraz testy responsywności. W ofercie projektowania i tworzenia stron internetowych uwzględniamy strony wizytówki, strony firmowe oraz sklepy internetowe w zależności od celu projektu."
    },
    {
      question: "Jak wygląda proces tworzenia strony w Gorzowie Wielkopolskim?",
      answer: "Proces tworzenia strony zaczyna się od briefu i analizy wymagań, następnie przygotowujemy projekt graficzny, realizację strony obejmującą kod, integracje i testy. Po fazie testów wdrażamy stronę w oparciu o najlepsze praktyki SEO oraz zapewniamy utrzymanie i wsparcie po realizacji."
    },
    {
      question: "Ile kosztuje profesjonalna strona www w Gorzowie Wielkopolskim?",
      answer: "Ceny stron zależą od zakresu: prosta strona wizytówka kosztuje od 2 000 zł, rozbudowana strona firmowa od 5 000 zł, a sklep internetowy od 8 000 zł netto. Wycena uwzględnia projektowanie, tworzenie funkcjonalności oraz utrzymanie strony internetowej."
    },
    {
      question: "Czy tworzycie nowoczesne i responsywne strony internetowe?",
      answer: "Tak — tworzymy nowoczesne strony internetowe z responsywnym designem, które działają na urządzeniach mobilnych i są zoptymalizowane pod kątem użyteczności. Strony są szybkie, zoptymalizowane pod SEO i projektowane z myślą o użytkowniku."
    },
    {
      question: "Dlaczego warto wybrać tworzenie stron w Gorzowie Wielkopolskim z FOTZ Studio?",
      answer: "Gorzów Wielkopolski to dynamiczny rynek nadmorski — turystyka, e-commerce, usługi premium. Znamy specyfikę lokalnego biznesu i tworzymy strony, które przyciągają właściwych klientów. Nasze portfolio obejmuje projekty z Lubuskiego i całej Polski."
    },
    {
      question: "Jakie rodzaje stron tworzycie dla firm z Lubuskiego?",
      answer: "Tworzymy strony wizytówki, firmowe strony, strony projektowane pod sprzedaż oraz sklepy internetowe. Strony tworzone są w oparciu o analizę celów klienta, optymalizację konwersji i integracje z systemami sprzedażowymi."
    },
    {
      question: "Jak długo trwa realizacja strony od briefu do uruchomienia?",
      answer: "Czas realizacji zależy od skomplikowania: prosta strona może być gotowa w kilka tygodni, bardziej rozbudowane projekty wymagają kilku miesięcy. Etapy obejmują projektowanie, testy, poprawki oraz finalną realizację i wdrożenie kodu na serwerze."
    },
    {
      question: "Czy zajmujecie się pozycjonowaniem stron w Gorzowie Wielkopolskim i Trójmieście?",
      answer: "Tak — każda strona wychodzi z naszej pracowni z podstawową optymalizacją SEO. Oferujemy też pełne usługi pozycjonowania lokalnego dla firm z Gorzowa Wielkopolskiego, Zielonej Góry i Szczecina, zwiększając widoczność w lokalnych wynikach Google."
    },
  ];

  return (
    <>
      <SEOHead
        title="Strony Internetowe Gorzów Wielkopolski | Tworzenie Stron WWW | FOTZ"
        description="Strony internetowe Gorzów Wielkopolski. Projektowanie i tworzenie profesjonalnych stron www, sklepów e-commerce i pozycjonowanie SEO dla firm z Gorzowa Wielkopolskiego i Lubuskiego."
        canonical="https://fotz.pl/uslugi/strony-internetowe/gorzow"
        keywords="strony internetowe gorzów wielkopolski, tworzenie stron www gorzów, projektowanie stron gorzów, sklepy internetowe gorzów wielkopolski, strona www gorzów, agencja marketingowa gorzów, strony lubuskie"
      />

      <ServiceSchema
        name="Strony Internetowe Gorzów Wielkopolski - Tworzenie Stron WWW i Sklepów"
        description="Profesjonalne tworzenie stron internetowych dla firm z Gorzowa Wielkopolskiego i Lubuskiego. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Gorzów Wielkopolski"
      />

      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Gorzów Wielkopolski", url: "https://fotz.pl/uslugi/strony-internetowe/gorzow" },
        ]}
      />

      <FAQSchema
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

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
                Strony WWW Gorzów Wielkopolski
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                Strona WWW <span className="text-gradient">Gorzów Wielkopolski</span>: Tworzenie Stron i Sklep Internetowy
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                <strong>Profesjonalna strona internetowa to kluczowy element sukcesu każdego biznesu w Lubuskim.</strong> Niezależnie od tego,
                czy prowadzisz małą firmę w Gorzowie Wielkopolskim, sklep online czy agencję, Twoja strona www jest wizytówką w sieci.
                Zajmujemy się <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzeniem stron internetowych</Link>, które
                nie tylko wyglądają estetycznie, ale przede wszystkim są funkcjonalne i skuteczne w pozyskiwaniu klientów.
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

        {/* Gorzów Wielkopolski Stats Section */}
        <section className="py-12 bg-card/40 border-y border-border/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">Gorzów Wielkopolski w liczbach</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Dlaczego warto inwestować w stronę www w Gorzowie Wielkopolskim?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  Gorzów Wielkopolski to jedno z najbardziej dynamicznych miast w Polsce — centrum Lubuskiego z silnym rynkiem turystycznym, usługowym i e-commerce.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, value: "250 tys.", label: "mieszkańców Gorzowie Wielkopolskim" },
                  { icon: Building2, value: "35 tys.", label: "aktywnych firm w Gorzowie Wielkopolskim" },
                  { icon: BarChart3, value: "Top 3", label: "miasto Lubuskiego" },
                  { icon: Globe, value: "79%", label: "firm szuka klientów online" },
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

        {/* Projektowanie stron Section */}
        <section className="py-12 md:py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
                  Projektowanie stron internetowych w Gorzowie Wielkopolskim
                </h2>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
                  <p>
                    Specjalizujemy się w projektowaniu stron internetowych dla firm z Gorzowa Wielkopolskiego i całego Lubuskiego.
                    Nasze działania obejmują:
                  </p>
                  <ul>
                    <li><strong>Analizę potrzeb klienta</strong>, aby dokładnie zrozumieć jego oczekiwania i cel biznesowy.</li>
                    <li><strong>Stworzenie projektu graficznego strony</strong>, który będzie wizualnie atrakcyjny i spójny z identyfikacją marki.</li>
                    <li><strong>Wdrożenie i optymalizację SEO</strong>, aby strona działała sprawnie i pojawiała się wysoko w Google.</li>
                  </ul>
                  <p>
                    Rozumiemy, że każda firma jest inna, dlatego do każdego projektu podchodzimy indywidualnie.
                    Nasz zespół doświadczonych projektantów i programistów dba o to, aby każda strona internetowa była
                    nie tylko estetyczna, ale także <strong>responsywna i dostosowana do wyświetlania na różnych urządzeniach</strong>.
                  </p>

                  <h3>Nowoczesne strony internetowe dla Lubuskiego</h3>
                  <p>
                    Stawiamy na nowoczesne strony internetowe, które łączą w sobie estetykę i funkcjonalność.
                    Indywidualne podejście do klienta pozwala nam tworzyć unikalne projekty graficzne stron www,
                    które odzwierciedlają charakter Twojej firmy i wyróżniają ją na tle konkurencji w Gorzowie Wielkopolskim, Zielonej Górze i Szczecinie.
                    <strong>Nowoczesna strona internetowa to inwestycja w rozwój Twojego biznesu</strong>,
                    która przynosi wymierne korzyści w postaci zwiększonej liczby klientów.
                  </p>

                  <h3>Responsywne strony www</h3>
                  <p>
                    W dzisiejszych czasach <strong>responsywne strony www to absolutny standard</strong>.
                    Coraz więcej osób korzysta z urządzeń mobilnych do przeglądania internetu, dlatego ważne jest,
                    aby Twoja strona internetowa wyświetlała się poprawnie na smartfonach i tabletach.
                    Projektujemy responsywne strony, które automatycznie dostosowują się do rozmiaru ekranu.
                  </p>

                  <h3>SEO dla firm z Gorzowa Wielkopolskiego</h3>
                  <p>
                    Nasze profesjonalne tworzenie stron internetowych to gwarancja indywidualnego podejścia do klienta.
                    Zapewniamy stały kontakt i wsparcie na każdym etapie projektu, od koncepcji po wdrożenie.
                    Rozumiemy, że <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron w Gorzowie Wielkopolskim i Lubuskim</Link> jest
                    kluczowe dla lokalnego biznesu, dlatego każda strona wychodzi z wbudowaną optymalizacją SEO.
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
                  Kompleksowe usługi tworzenia stron w Gorzowie Wielkopolskim
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Od projektu graficznego przez wdrożenie po <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link> —
                  wszystko w jednym miejscu dla firm z Gorzowa Wielkopolskiego i Lubuskiego.
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

        {/* Sklepy internetowe Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Tworzenie sklepów internetowych w Gorzowie Wielkopolskim</h2>
                  <p>
                    Specjalizujemy się w <strong>tworzeniu sklepów internetowych</strong> dla firm z Gorzowa Wielkopolskiego i Lubuskiego,
                    które są efektywne i dostosowane do potrzeb Twojego biznesu.
                    Nasze sklepy internetowe są responsywne i zoptymalizowane pod Google Shopping.
                  </p>

                  <h3>Jak założyć sklep internetowy w Gorzowie Wielkopolskim?</h3>
                  <p>
                    Założenie sklepu internetowego to proces wymagający starannego planowania.
                    Zaczynamy od określenia potrzeb firmy i specyfiki branży — czy to turystyka,
                    moda, elektronika, czy produkty lokalne. Następnie projektujemy indywidualny projekt
                    i wdrażamy sklep ze wszystkimi integracjami płatności (PayU, Przelewy24, Stripe, BLIK).
                    <strong>Profesjonalna strona internetowa to inwestycja, która przynosi wymierne korzyści.</strong>
                  </p>

                  <h3>Optymalizacja e-commerce dla rynku Lubuskiego</h3>
                  <p>
                    <strong>Optymalizacja dla e-commerce to kluczowy element sukcesu sklepu internetowego.</strong> Obejmuje
                    działania SEO, optymalizację treści i słów kluczowych dla lokalnych fraz z Gorzowa Wielkopolskiego,
                    a także linkowanie wewnętrzne i zewnętrzne. Dbamy o to, aby Twoja strona była widoczna w Google
                    dla potencjalnych klientów z Lubuskiego szukających Twoich produktów.
                  </p>

                  <h3>Ceny sklepów internetowych w Gorzowie Wielkopolskim</h3>
                  <p>
                    Ceny sklepów internetowych mogą się różnić w zależności od zakresu prac i funkcjonalności.
                    Koszt stworzenia sklepu e-commerce waha się od 8 000 zł do 120 000 zł netto.
                    Oferujemy transparentne ceny i indywidualne podejście do każdego klienta z Lubuskiego.
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
                  Jak tworzymy strony internetowe w Gorzowie Wielkopolskim?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od briefu do wdrożenia nowej strony internetowej.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-primary font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
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
                  Ile kosztuje strona internetowa w Gorzowie Wielkopolskim?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny bez ukrytych kosztów. Wycena jest zawsze bezpłatna.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-6 rounded-xl border transition-all h-full flex flex-col ${plan.popular ? "border-primary bg-primary/5" : "border-border/50 bg-background"}`}>
                    {plan.popular && (
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider mb-3 block">Najpopularniejszy</span>
                    )}
                    <h3 className="text-xl font-bold mb-1">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{plan.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-4">{plan.price}</div>
                    <ul className="space-y-2 flex-grow">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-0.5">✓</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="mt-6 w-full" variant={plan.popular ? "default" : "outline"}>
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Dlaczego FOTZ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto zlecić stronę internetową w Gorzowie Wielkopolskim nam?
                </h2>
              </div>
            </FadeInView>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.08}>
                  <div className="p-5 rounded-xl bg-background border border-border/40 h-full">
                    <item.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wybrane realizacje stron www
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Projekty, które przynosiły realne rezultaty naszym klientom.
                </p>
              </div>
            </FadeInView>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((cs, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={cs.link} className="group block rounded-xl overflow-hidden border border-border/40 bg-background hover:border-primary/30 transition-all">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">{cs.category}</span>
                      <h3 className="text-base font-semibold mt-1 mb-1">{cs.title}</h3>
                      <p className="text-sm text-muted-foreground">{cs.result}</p>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-12">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Pytania o strony internetowe w Gorzowie Wielkopolskim
                </h2>
              </div>
            </FadeInView>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/40 rounded-xl px-6 bg-background">
                    <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#75143F] to-[#0F3053]">
          <div className="container mx-auto px-4 text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Chcesz stronę internetową dla firmy z Gorzowa Wielkopolskiego?
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej firmie w Lubuskim.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Internal linking — related pages */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane strony</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Strony internetowe Gdańsk", to: "/uslugi/strony-internetowe/gdansk" },
                { label: "Strony internetowe Poznań", to: "/uslugi/strony-internetowe/poznan" },
                { label: "Strony internetowe Warszawa", to: "/uslugi/strony-internetowe/warszawa" },
                { label: "Agencja SEO Poznań", to: "/agencja-seo-poznan" },
                { label: "Sklepy internetowe Poznań", to: "/uslugi/sklepy-internetowe/poznan" },
                { label: "Pozycjonowanie stron", to: "/seo/pozycjonowanie" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CityLinksSection />
        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweGorzow;
