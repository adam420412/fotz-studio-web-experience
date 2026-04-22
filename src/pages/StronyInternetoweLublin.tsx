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
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { CityLinksSection } from "@/components/sections/CityLinksSection";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweLublin = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www i witryny online dla firm z Lublina." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Kompleksowa optymalizacja SEO zwiększająca widoczność w Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony internetowe z indywidualnym projektem graficznym." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: Server, title: "Hosting i domeny", desc: "Kompleksowy hosting i pomoc w rejestracji domeny." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Jesteśmy partnerem, nie tylko wykonawcą - rozumiemy Twoje cele biznesowe." },
    { icon: Smartphone, title: "Responsywność", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "Certyfikat SSL, kopie zapasowe i regularne aktualizacje." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Kompleksowa obsługa stron internetowych po uruchomieniu." },
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Lublin to akademickie miasto na wschodzie Polski z prężnie rozwijającym się sektorem MŚP. Tworzymy strony skrojone pod potrzeby lokalnych firm i start-upów." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
  ];

  const processSteps = [
    { step: "01", title: "Rozmowa i research", desc: "Poznajemy cele biznesowe i potrzeby Twojej firmy z Lublina." },
    { step: "02", title: "Wycena projektu", desc: "Przygotowujemy indywidualną wycenę dopasowaną do Twoich potrzeb." },
    { step: "03", title: "Projektowanie i kod", desc: "Tworzymy responsywny projekt strony i piszemy kod." },
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
      question: "Kiedy warto zamówić stronę internetową dla firmy z Lublina?",
      answer: "Warto zamówić stronę internetową, gdy chcesz zwiększyć widoczność firmowej strony, pozyskać klientów lokalnych i zaprezentować ofertę usług. Proces obejmuje projekt strony, projektowanie i tworzenie stron internetowych oraz wdrożenie responsywnej witryny dopasowanej do marki."
    },
    {
      question: "Co obejmuje projektowanie stron internetowych w Lublinie?",
      answer: "Projektowanie obejmuje analizę potrzeb, przygotowanie projektu graficznego i UX, pisanie kodu strony oraz testy responsywności. W ofercie projektowania i tworzenia stron internetowych uwzględniamy strony wizytówki, strony firmowe oraz sklepy internetowe w zależności od celu projektu."
    },
    {
      question: "Jak wygląda proces tworzenia strony w Lublinie?",
      answer: "Proces tworzenia strony zaczyna się od briefu i analizy wymagań, następnie przygotowujemy projekt graficzny, realizację strony obejmującą kod, integracje i testy. Po fazie testów wdrażamy stronę w oparciu o najlepsze praktyki SEO oraz zapewniamy utrzymanie i wsparcie po realizacji."
    },
    {
      question: "Ile kosztuje profesjonalna strona www w Lublinie?",
      answer: "Ceny stron zależą od zakresu: prosta strona wizytówka kosztuje od 2 000 zł, rozbudowana strona firmowa od 5 000 zł, a sklep internetowy od 8 000 zł netto. Wycena uwzględnia projektowanie, tworzenie funkcjonalności oraz utrzymanie strony internetowej."
    },
    {
      question: "Czy tworzycie nowoczesne i responsywne strony internetowe?",
      answer: "Tak — tworzymy nowoczesne strony internetowe z responsywnym designem, które są responsywne na urządzeniach mobilnych i zoptymalizowane pod kątem użyteczności. Strony są szybkie, zoptymalizowane pod SEO i projektowane z myślą o użytkowniku."
    },
    {
      question: "Dlaczego warto wybrać lokalne tworzenie stron w Lublinie?",
      answer: "Lokalny zespół rozumie potrzeby rynku — projekty stron www i realizacje mogą być lepiej dopasowane do klientów z Lublina. Zrealizowane projekty i portfolio pokazują doświadczenie, a lokalna współpraca ułatwia komunikację przy realizacji i późniejszym utrzymaniu strony."
    },
    {
      question: "Jakie rodzaje stron tworzycie?",
      answer: "Tworzymy strony wizytówki, firmowe strony, strony projektowane pod sprzedaż oraz sklepy internetowe. Strony tworzone są w oparciu o analizę celów klienta, optymalizację konwersji i integracje z systemami sprzedażowymi."
    },
    {
      question: "Jak długo trwa realizacja strony od briefu do uruchomienia?",
      answer: "Czas realizacji zależy od skomplikowania: prosta strona może być gotowa w kilka tygodni, bardziej rozbudowane projekty wymagają kilku miesięcy. Etapy obejmują projektowanie, testy, poprawki oraz finalną realizację i wdrożenie kodu na serwerze."
    },
    {
      question: "Jakie są pierwsze kroki przy tworzeniu strony po raz pierwszy?",
      answer: "Jeśli potrzebujesz strony internetowej, zacznij od określenia celów i budżetu, przygotuj materiały (treści, logo) i skontaktuj się z nami. Pomagamy w przygotowaniu projektu, tłumaczeniu strony jeśli wymagana wersja wielojęzyczna, oraz prowadzimy zgłoszenie strony do wyszukiwarek."
    },
  ];

  return (
    <>
      <SEOHead
        title="Strony Internetowe Lublin | Tworzenie i Projektowanie Stron WWW"
        description="Strony internetowe Lublin — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Lublina. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/lublin"
        keywords="strony internetowe lublin, tworzenie stron www lublin, projektowanie stron lublin, sklepy internetowe lublin, strona www lublin, www lublin, wykonanie strony internetowej lublin, responsywna strona www lublin, wordpress lublin, nowoczesne strony www lublin"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Lublin - Tworzenie Stron WWW i Sklepów"
        description="Profesjonalne tworzenie stron internetowych dla firm z Lublina. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Lublin"
      />
      
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Lublin", url: "https://fotz.pl/uslugi/strony-internetowe/lublin" },
        ]}/>
      
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
                Strony WWW Lublin
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                Strona WWW <span className="text-gradient">Lublin</span>: Tworzenie Stron i Sklep Internetowy
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                <strong>Posiadanie profesjonalnej strony www to podstawa sukcesu każdego biznesu.</strong> Niezależnie od tego,
                czy prowadzisz małą firmę w Lublinie, czy dużą korporację, Twoja strona internetowa jest wizytówką Twojej działalności w sieci.
                Zajmujemy się <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzeniem stron www Lublin</Link> — responsywne strony internetowe, nowoczesne strony www i wykonanie strony w WordPress lub React, które są funkcjonalne i skuteczne w pozyskiwaniu klientów.
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

        {/* Lublin Stats Section */}
        <section className="py-12 bg-card/40 border-y border-border/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">Lublin w liczbach</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Dlaczego warto inwestować w stronę www w Lublinie?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  Lublin to 5. pod względem liczby studentów miasto w Polsce — dynamiczny rynek z rosnącym popytem na usługi online.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, value: "340 tys.", label: "mieszkańców Lublina" },
                  { icon: Building2, value: "45 tys.", label: "aktywnych firm w regionie" },
                  { icon: BarChart3, value: "Top 5", label: "miasto akademickie PL" },
                  { icon: Globe, value: "82%", label: "firm szuka klientów online" },
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
                  Projektowanie stron internetowych w Lublinie
                </h2>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
                  <p>
                    Specjalizujemy się w projektowaniu stron internetowych w Lublinie, oferując kompleksowe usługi. 
                    Nasze działania obejmują:
                  </p>
                  <ul>
                    <li><strong>Analizę potrzeb klienta</strong>, aby dokładnie zrozumieć jego oczekiwania.</li>
                    <li><strong>Stworzenie projektu graficznego strony</strong>, który będzie wizualnie atrakcyjny i spójny z identyfikacją marki.</li>
                    <li><strong>Wdrożenie i optymalizację</strong>, aby strona działała sprawnie i efektywnie.</li>
                  </ul>
                  <p>
                    Rozumiemy, że każda firma jest inna, dlatego do każdego projektu podchodzimy indywidualnie. 
                    Nasz zespół doświadczonych projektantów i programistów dba o to, aby każda strona internetowa była 
                    nie tylko estetyczna, ale także <strong>responsywna i dostosowana do wyświetlania na różnych urządzeniach</strong>.
                  </p>
                  
                  <h3>Nowoczesne strony internetowe</h3>
                  <p>
                    Stawiamy na nowoczesne strony internetowe, które łączą w sobie estetykę i funkcjonalność. 
                    Indywidualne podejście do klienta pozwala nam tworzyć unikalne projekty graficzne stron www, 
                    które odzwierciedlają charakter Twojej firmy i wyróżniają ją na tle konkurencji. 
                    <strong>Nowoczesna strona internetowa to inwestycja w rozwój Twojego biznesu</strong>, 
                    która przynosi wymierne korzyści w postaci zwiększonej liczby klientów i wyższej pozycji 
                    w wynikach wyszukiwania Google.
                  </p>
                  
                  <h3>Responsywne strony www</h3>
                  <p>
                    W dzisiejszych czasach <strong>responsywne strony www to absolutny standard</strong>. 
                    Coraz więcej osób korzysta z urządzeń mobilnych do przeglądania internetu, dlatego ważne jest, 
                    aby Twoja strona internetowa wyświetlała się poprawnie na smartfonach i tabletach. 
                    Projektujemy responsywne strony, które automatycznie dostosowują się do rozmiaru ekranu urządzenia.
                  </p>
                  
                  <h3>Profesjonalne podejście do klienta</h3>
                  <p>
                    Nasze profesjonalne tworzenie stron internetowych to gwarancja indywidualnego podejścia do klienta. 
                    Zapewniamy stały kontakt i wsparcie na każdym etapie projektu, od koncepcji po wdrożenie i późniejszą optymalizację. 
                    Rozumiemy, że <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link> jest 
                    kluczowe dla sukcesu w internecie, dlatego oferujemy kompleksowe usługi SEO.
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
                  Kompleksowe usługi tworzenia stron w Lublinie
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Od projektu graficznego przez wdrożenie po <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link> - 
                  wszystko w jednym miejscu.
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
                  <h2>Tworzenie sklepów internetowych</h2>
                  <p>
                    Specjalizujemy się w <strong>tworzeniu sklepów internetowych</strong>, które są efektywne i dostosowane do potrzeb Twojej firmy. 
                    Rozumiemy, jak ważny jest sklep internetowy dla rozwoju Twojego biznesu, dlatego oferujemy kompleksowe usługi, od projektu po wdrożenie. 
                    Nasze sklepy internetowe są responsywne, co oznacza, że działają bez zarzutu na wszystkich urządzeniach.
                  </p>
                  
                  <h3>Jak założyć sklep internetowy?</h3>
                  <p>
                    Założenie sklepu internetowego to proces, który wymaga starannego planowania i profesjonalnego wykonania. 
                    Na początku określamy potrzeby Twojej firmy i specyfikę branży. Następnie projektujemy indywidualny projekt graficzny strony www. 
                    Kolejnym krokiem jest wdrożenie sklepu ze wszystkimi niezbędnymi funkcjonalnościami. 
                    <strong>Profesjonalna strona internetowa to inwestycja, która przynosi wymierne korzyści.</strong>
                  </p>
                  
                  <h3>Optymalizacja dla e-commerce</h3>
                  <p>
                    <strong>Optymalizacja dla e-commerce to kluczowy element sukcesu sklepu internetowego.</strong> Obejmuje ona działania związane z SEO, 
                    takie jak optymalizacja treści, słów kluczowych oraz linkowanie wewnętrzne i zewnętrzne. 
                    Dbamy o to, aby Twoja strona internetowa była widoczna w wynikach wyszukiwania Google dla potencjalnych klientów 
                    szukających Twoich produktów lub usług w Lublinie.
                  </p>
                  
                  <h3>Ceny sklepów internetowych w Lublinie</h3>
                  <p>
                    Ceny sklepów internetowych w Lublinie mogą się różnić w zależności od zakresu prac i funkcjonalności. 
                    Koszt stworzenia strony internetowej e-commerce waha się od 8 000 zł do 120 000 zł netto. 
                    Oferujemy transparentne ceny i indywidualne podejście do każdego klienta.
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
                  Proces realizacji projektu strony www
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

        {/* Pozycjonowanie Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Pozycjonowanie stron internetowych</h2>
                  <p>
                    Oferujemy usługi <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">optymalizacji SEO</Link>, 
                    aby poprawić widoczność strony w wyszukiwarkach internetowych, co jest kluczowe dla sukcesu Twojego biznesu online. 
                    <strong>Pozycjonowanie stron internetowych to proces, który ma na celu poprawę widoczności Twojej strony w wynikach wyszukiwania Google.</strong> 
                    Skuteczne pozycjonowanie stron www przekłada się na zwiększenie ruchu na stronie, co z kolei prowadzi do wzrostu liczby klientów i sprzedaży.
                  </p>
                  
                  <h3>Audyt SEO Twojej strony</h3>
                  <p>
                    <strong>Audyt SEO Twojej strony internetowej to pierwszy krok do poprawy jej widoczności w wynikach wyszukiwania Google.</strong> 
                    Podczas audytu analizujemy strukturę strony, zawartość, słowa kluczowe, linki wewnętrzne i zewnętrzne oraz inne czynniki, 
                    które wpływają na pozycjonowanie stron internetowych. Na podstawie audytu opracowujemy strategię optymalizacji.
                  </p>
                  
                  <h3>Strategie pozycjonowania w Google</h3>
                  <p>
                    Skuteczne strategie pozycjonowania w Google są niezbędne, aby Twoja strona internetowa osiągnęła wysokie pozycje w wynikach wyszukiwania. 
                    Obejmują one zarówno optymalizację techniczną strony, jak i tworzenie wartościowych treści, które odpowiadają na zapytania użytkowników. 
                    <strong>Pozycjonowanie stron www to proces długotrwały, który wymaga cierpliwości i systematyczności, ale przynosi wymierne korzyści dla Twojego biznesu w Lublinie.</strong>
                  </p>
                  
                  <h3>Znaczenie SEO dla lokalnych firm</h3>
                  <p>
                    <strong>SEO ma szczególne znaczenie dla lokalnych firm, które chcą dotrzeć do klientów w Lublinie i okolicach.</strong> 
                    Optymalizacja Twojej strony www pod kątem lokalnych słów kluczowych, takich jak "strony internetowe Lublin" czy "sklep internetowy Lublin", 
                    pozwala na dotarcie do osób, które szukają Twoich produktów lub usług w Twojej okolicy.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Nasze realizacje
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz przykłady naszych <Link to="/realizacje" className="text-primary hover:underline">realizacji stron www</Link> dla różnych branż.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={study.link} className="group block">
                    <div className="rounded-xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all">
                      <div className="aspect-video overflow-hidden">
                        <img loading="lazy" 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="text-primary text-sm">{study.category}</span>
                        <h3 className="text-lg font-semibold mt-1 mb-2">{study.title}</h3>
                        <p className="text-sm text-muted-foreground">{study.result}</p>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
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
                  Witryny internetowe dla biznesu
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  FOTZ to <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline">firma tworząca strony internetowe</Link>, 
                  oferująca kompleksowe usługi w zakresie projektowania, wdrażania i optymalizacji witryn.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all h-full">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wycena projektu strony internetowej
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie stosujemy sztywnego cennika – każda wycena jest dopasowana do indywidualnych celów biznesowych klienta. 
                  Sprawdź ile kosztuje <Link to="/blog/ile-kosztuje-strona-internetowa" className="text-primary hover:underline">profesjonalna strona internetowa</Link>.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <p className="text-2xl font-bold text-primary mt-auto">{plan.price}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            
            <FadeInView delay={0.4}>
              <div className="text-center mt-12">
                <Button asChild size="lg">
                  <Link to="/kontakt">Poproś o indywidualną wycenę</Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Często zadawane pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na najczęściej zadawane pytania dotyczące tworzenia stron www w Lublinie.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <CityLinksSection currentCity="Lublin" />

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
              Strony internetowe Lublin — rynek lokalny i specyfika regionu
            </h2>
            <p className="text-muted-foreground mb-4">
              Lublin to największe miasto Polski Wschodniej i ważny ośrodek akademicki (UMCS, KUL, PL, UM) z ponad 90 000 studentów. Rosnący sektor technologiczny, BPO, medyczny i turystyczny (Stare Miasto, zamek) tworzą dynamiczny rynek online. Dla firm z Lublina profesjonalna strona internetowa to kluczowy element budowania wizerunku wśród wymagającej, wykształconej grupy docelowej.
            </p>
            <p className="text-muted-foreground mb-6">
              Fotz Studio tworzy strony internetowe dla firm z Lublina w modelu w pełni zdalnym — bez kompromisów w jakości. Każdy projekt realizuje nasz własny zespół: projektant UX/UI, developer i specjalista SEO. Żadnych podwykonawców, żadnych szablonów kupowanych hurtowo. Efekt? Strony, które wyróżniają się na lokalnym rynku i konwertują odwiedzających w klientów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Lublin — nasz proces od A do Z
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie strony internetowej dla firmy z Lublina zaczynamy od bezpłatnej konsultacji — omawiamy cel strony, grupę docelową, budżet i harmonogram. Następnie przygotowujemy brief kreatywny i analizę konkurencji. Projekt graficzny powstaje w Figma i jest akceptowany przez Ciebie przed startem kodowania. Po uruchomieniu strony masz pełne dostępy i możesz samodzielnie edytować treści.
            </p>
            <p className="text-muted-foreground mb-6">
              Czas realizacji strony wizytówkowej to 2–3 tygodnie, strony firmowej 4–8 tygodni. Nasze strony są objęte 30-dniową gwarancją po wdrożeniu — wszelkie błędy po uruchomieniu poprawiamy bezpłatnie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO dla stron internetowych w Lublin — lokalna widoczność w Google
            </h2>
            <p className="text-muted-foreground mb-4">
              Każda strona internetowa, którą tworzymy dla lubelskich firm, zawiera podstawowe SEO w cenie: meta tagi title i description, schema LocalBusiness z danymi adresowymi Lublina i Lubelszczyzny, szybkość Core Web Vitals i poprawna architektura nagłówków H1–H3. Dzięki temu strona startuje z solidnym fundamentem i szybciej osiąga widoczność w Google.
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
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">&rarr; Kampanie reklamowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

        <ContactSection city="Lublinie" />
      </Layout>
    </>
  );
};

export default StronyInternetoweLublin;
