import { Helmet } from "react-helmet";
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
  CheckCircle2,
  Users,
  Code,
  Zap
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweLodz = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Łodzi i okolic." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarkach." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony z naciskiem na estetykę i użyteczność." },
    { icon: ShoppingCart, title: "Sklepy internetowe", desc: "Tworzenie sklepów e-commerce z integracjami płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Marketing online", desc: "Strategie marketingowe wspierające rozwój Twojej firmy." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress - dobieramy technologię do projektu." },
    { icon: Search, title: "SEO w standardzie", desc: "Strony zoptymalizowane pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Indywidualne podejście", desc: "Każdy projekt dopasowujemy do potrzeb Twojej firmy." },
    { icon: Smartphone, title: "Responsywny design", desc: "Strony działające perfekcyjnie na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "SSL, regularne aktualizacje i zabezpieczenia." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Pełna opieka po uruchomieniu strony internetowej." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa", desc: "Prosta strona www prezentująca Twoją firmę w Łodzi.", price: "od 2 000 zł netto" },
    { title: "Strona firmowa", desc: "Rozbudowana strona internetowa z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy", desc: "Platforma e-commerce z integracjami płatności i dostawy.", price: "od 8 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Rozmowa i research", desc: "Poznajemy potrzeby klienta i specyfikę Twojej firmy." },
    { step: "02", title: "Projekt graficzny", desc: "Tworzenie wizualnej oprawy dopasowanej do marki." },
    { step: "03", title: "Wdrożenie", desc: "Kodowanie strony i integracja z CMS." },
    { step: "04", title: "Uruchomienie", desc: "Testy, optymalizacja SEO i publikacja strony." },
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

  const cityLinks = [
    { name: "Poznań", href: "/strony-internetowe-poznan", active: true },
    { name: "Warszawa", href: "/strony-internetowe-warszawa", active: true },
    { name: "Wrocław", href: "/strony-internetowe-wroclaw", active: true },
    { name: "Kraków", href: "/strony-internetowe-krakow", active: true },
    { name: "Gdańsk", href: "/strony-internetowe-gdansk", active: true },
    { name: "Łódź", href: "/strony-internetowe-lodz", active: true },
    { name: "Katowice", href: "/strony-internetowe-katowice", active: false },
    { name: "Szczecin", href: "/strony-internetowe-szczecin", active: false },
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz", active: false },
    { name: "Lublin", href: "/strony-internetowe-lublin", active: false },
  ];

  const faqItems = [
    {
      question: "Czym się różni tworzenie stron w Łodzi od innych miast?",
      answer: "Tworzenie stron w Łodzi uwzględnia lokalne potrzeby firm z regionu: optymalizację pod klientów z okolicy, integrację z mapami i kontaktami oraz projekt graficzny dopasowany do branży. Przy tworzeniu strony dbamy o domenę, hosting, SEO i responsywność."
    },
    {
      question: "Jak stworzyć responsywną stronę internetową dla firmy?",
      answer: "Stworzyć stronę z responsywnym projektem graficznym oznacza zaprojektować wygląd, który działa na urządzeniach mobilnych i desktopach. Nowoczesne strony internetowe wymagają testów na różnych urządzeniach, optymalizacji prędkości i wdrożenia zasad SEO."
    },
    {
      question: "Co powinien zawierać funkcjonalny formularz kontaktowy?",
      answer: "Funkcjonalny formularz kontaktowy powinien zawierać minimalne pola potrzebne do kontaktu z klientem, zabezpieczenia przed spamem i integrację z systemem CRM lub e-mailem. Dbamy o przejrzystość układu formularza oraz jego responsywność."
    },
    {
      question: "Co warto przetestować przed uruchomieniem strony?",
      answer: "Przed uruchomieniem strony trzeba sprawdzić: działanie formularzy, szybkość ładowania, poprawność linków, wyświetlanie na różnych przeglądarkach i urządzeniach oraz poprawność konfiguracji domeny i hostingu."
    },
    {
      question: "Ile kosztuje wykonanie strony internetowej w Łodzi?",
      answer: "Koszt wykonania strony internetowej zależy od funkcjonalności, ilości podstron, integracji oraz złożoności projektu. Prosta wizytówka będzie tańsza niż rozbudowany sklep internetowy. Skontaktuj się z nami, aby otrzymać bezpłatną wycenę."
    },
    {
      question: "Dlaczego warto wybrać lokalną firmę z Łodzi?",
      answer: "Współpraca z firmą z Łodzi daje korzyści: szybki kontakt, znajomość rynku lokalnego i łatwiejsze spotkania projektowe. Oferujemy kompleksowe usługi: wykonanie strony, domenę, hosting, wdrożenie i późniejsze wsparcie."
    },
    {
      question: "Czym różni się strona wizytówka od nowoczesnej strony internetowej?",
      answer: "Wizytówka to podstawowa strona z informacjami o firmie, godzinach i kontakcie. Nowoczesne strony internetowe to rozbudowane witryny z integracjami, SEO, responsywnym designem i elementami interaktywnymi."
    },
    {
      question: "Jak tworzenie stron wpływa na zdobywanie klientów z Łodzi?",
      answer: "Profesjonalne tworzenie stron wpływa na widoczność w wyszukiwarkach, zaufanie klientów i konwersję. Dobre SEO, szybkie ładowanie, czytelny projekt graficzny i skuteczne formularze pomagają przyciągnąć klientów z Łodzi i okolic."
    },
  ];

  const benefits = [
    "Responsywne strony na wszystkich urządzeniach",
    "Optymalizacja SEO dla lepszej widoczności",
    "Intuicyjny system zarządzania treścią CMS",
    "Szybkie ładowanie strony i wysoka wydajność",
    "Certyfikat SSL i bezpieczeństwo danych",
    "Wsparcie techniczne po uruchomieniu"
  ];

  return (
    <>
      <Helmet>
        <title>Strony Internetowe Łódź | Projektowanie Stron WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Strony internetowe Łódź. Profesjonalne projektowanie i tworzenie stron www, sklepy e-commerce, pozycjonowanie SEO. Responsywne strony dla firm z Łodzi." 
        />
        <meta name="keywords" content="strony internetowe łódź, tworzenie stron www łódź, projektowanie stron łódź, sklepy internetowe łódź, strona www łódź" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-lodz" />
      </Helmet>
      
      <ServiceSchema 
        name="Strony Internetowe Łódź - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Łodzi. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Łódź"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Łódź", url: "https://fotz.pl/strony-internetowe-lodz" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Strony WWW Łódź
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Strony Internetowe <span className="text-gradient">Łódź</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Szukasz profesjonalnego partnera do stworzenia strony internetowej dla Twojej firmy w Łodzi? 
                Nasza agencja specjalizuje się w projektowaniu i wdrażaniu nowoczesnych stron www, które pomagają 
                firmom rozwijać swój biznes online. <strong>Twoja strona internetowa będzie nie tylko estetyczna, 
                ale również efektywna</strong>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Strony internetowe w Łodzi
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Potrzebujesz strony internetowej w Łodzi, która przyciągnie nowych klientów i zwiększy 
                    rozpoznawalność Twojej firmy? Nasza agencja interaktywna oferuje profesjonalne tworzenie 
                    stron www, dopasowanych do Twoich potrzeb. Projektujemy strony internetowe dla firm, dbając 
                    o to, aby były responsywne, funkcjonalne i intuicyjne w obsłudze. <strong>Współpraca z nami 
                    to gwarancja, że Twoja strona www będzie skutecznym narzędziem marketingowym</strong>.
                  </p>
                  
                  <h3>Dlaczego warto wybrać Łódź?</h3>
                  <p>
                    Wybierając Łódź jako miejsce stworzenia Twojej strony internetowej, zyskujesz dostęp do 
                    kreatywnych i doświadczonych specjalistów. Łódzki rynek oferuje konkurencyjne ceny przy 
                    zachowaniu wysokiej jakości usług. Specjalizujemy się w projektowaniu stron www, sklepów 
                    internetowych oraz <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowaniu</Link>. 
                    <strong>Wybierając lokalną agencję, zyskujesz możliwość bliskiej współpracy i szybkiego 
                    reagowania na Twoje potrzeby</strong>.
                  </p>
                  
                  <h3>Typowe usługi agencji w Łodzi</h3>
                  <p>
                    Oferujemy kompleksowe usługi związane z tworzeniem stron internetowych: projekt graficzny, 
                    wdrożenie strony na system zarządzania treścią (CMS), pozycjonowanie strony (SEO), aktualizację 
                    treści, a także tworzenie sklepów internetowych. Sprawdź nasze <Link to="/realizacje" className="text-primary hover:underline">portfolio</Link>, 
                    aby ocenić nasze doświadczenie. Oferujemy również wsparcie techniczne oraz doradztwo w zakresie 
                    <Link to="/social-media" className="text-primary hover:underline"> marketingu online</Link>.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Korzyści</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Przykłady udanych projektów i korzyści
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Responsywny design, intuicyjny interfejs i skuteczne formularze kontaktowe.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border/50">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Usługi</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Projektowanie stron i sklepów internetowych
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla firm z Łodzi i okolic.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <service.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Proces tworzenia stron www
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Jak tworzymy strony dostosowane do potrzeb klienta?
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

            <FadeInView delay={0.4}>
              <div className="max-w-4xl mx-auto mt-16">
                <div className="prose prose-invert max-w-none">
                  <h3>Wybór odpowiedniego CMS</h3>
                  <p>
                    <strong>Wybór odpowiedniego CMS (System Zarządzania Treścią) jest kluczowy dla sukcesu strony 
                    internetowej</strong>. Używamy różnych platform: WordPress, Joomla, Drupal, Webflow i Shopify. 
                    Dzięki temu możemy dopasować CMS do Twoich indywidualnych potrzeb i umożliwić samodzielną 
                    aktualizację strony.
                  </p>
                  
                  <h3>Design i responsywność w projektach</h3>
                  <p>
                    Dbamy o to, aby każda strona www była estetyczna, funkcjonalna i intuicyjna w obsłudze. 
                    Strony internetowe dla firm powinny być wizytówką Twojej firmy online. Specjalizujemy się 
                    w <strong>projektowaniu responsywnych stron internetowych</strong>, które poprawnie wyświetlają 
                    się na wszystkich urządzeniach, w tym na smartfonach i tabletach.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Realizacje</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Przykłady zrealizowanych projektów
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz projekty, które stworzyliśmy. Responsywne strony i sklepy e-commerce.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link 
                    to={study.link}
                    className="group block rounded-xl overflow-hidden bg-card border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
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

        {/* Collaboration Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Współpraca z agencją interaktywną</h2>
                  
                  <h3>Korzyści z profesjonalnej współpracy</h3>
                  <p>
                    Współpraca z profesjonalną agencją interaktywną to inwestycja w skuteczną wizytówkę Twojej 
                    firmy w świecie online. Oferujemy kompleksowe usługi, poczynając od projektu graficznego 
                    strony, przez tworzenie stron www, wdrożenie, aż po skuteczne <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie</Link>. 
                    <strong>Celem jest stworzenie profesjonalnej strony internetowej, która generuje leady 
                    i wspiera rozwój Twojej firmy</strong>.
                  </p>
                  
                  <h3>Jak wygląda proces współpracy?</h3>
                  <p>
                    Proces współpracy rozpoczyna się od gruntownego zrozumienia Twoich potrzeb. Następnym 
                    krokiem jest prezentacja propozycji wizualnej i omówienie funkcjonalności, a następnie 
                    stworzenie strony idealnie dopasowanej do potrzeb Twojej firmy. Ważnym aspektem jest 
                    stały kontakt z klientem. <strong>Dzięki temu masz pełną kontrolę nad projektem i możesz 
                    na bieżąco śledzić postępy</strong>.
                  </p>
                  
                  <h3>Wycena usług projektowania stron</h3>
                  <p>
                    Wycena usług projektowania stron internetowych opiera się na indywidualnym podejściu do 
                    każdego projektu. Nie stosujemy sztywnego cennika, ponieważ każda strona www jest inna. 
                    Bierzemy pod uwagę zakres prac, projekt graficzny, funkcjonalność strony, integracje 
                    z systemami zewnętrznymi oraz złożoność projektu. Sprawdź nasz <Link to="/blog/ile-kosztuje-strona-internetowa" className="text-primary hover:underline">artykuł o kosztach stron</Link>.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* SEO & Marketing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Marketing i pozycjonowanie stron internetowych</h2>
                  
                  <h3>Strategie marketingowe dla stron www</h3>
                  <p>
                    <strong>Skuteczny marketing internetowy to klucz do sukcesu Twojej firmy online</strong>. 
                    Opracowujemy strategie marketingowe, które wspierają pozycjonowanie strony w łódzkim 
                    internecie i poza nim. Nasze kampanie marketingowe pomagają dotrzeć do nowych klientów 
                    i zwiększyć rozpoznawalność Twojej firmy. Sprawdź też nasze usługi <Link to="/social-media" className="text-primary hover:underline">social media</Link>.
                  </p>
                  
                  <h3>Jak skutecznie pozycjonować stronę internetową?</h3>
                  <p>
                    <strong>Skuteczne pozycjonowanie strony wymaga kompleksowego podejścia</strong>. 
                    Optymalizujemy Twoją stronę pod kątem SEO, aby zwiększyć jej widoczność w wynikach 
                    wyszukiwania. Projektujemy strategie, które uwzględniają zarówno optymalizację techniczną, 
                    jak i tworzenie wartościowych treści.
                  </p>
                  
                  <h3>Rola SEO w tworzeniu stron</h3>
                  <p>
                    SEO odgrywa kluczową rolę w procesie tworzenia stron www. <strong>Strona, która jest 
                    dobrze zoptymalizowana pod kątem SEO, ma większe szanse na osiągnięcie wysokiej pozycji 
                    w wynikach wyszukiwania</strong>. Już na etapie projektowania dbamy o to, aby strona 
                    była przyjazna dla wyszukiwarek.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Dlaczego my</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto nam zlecić tworzenie strony?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm z Łodzi.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full">
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Cennik tworzenia stron www Łódź
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu.
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

        {/* Cities Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">Lokalizacje</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Tworzymy strony internetowe w całej Polsce
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Działamy zdalnie, ale znamy specyfikę lokalnych rynków. Sprawdź naszą ofertę w Twoim mieście.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {cityLinks.map((city, index) => (
                  city.active ? (
                    <Link
                      key={index}
                      to={city.href}
                      className={`px-6 py-3 rounded-full font-medium transition-colors ${
                        city.href === "/strony-internetowe-lodz" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-background border border-border/50 text-foreground hover:border-primary/30"
                      }`}
                    >
                      {city.name}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className="px-6 py-3 rounded-full bg-background border border-border/50 text-muted-foreground font-medium cursor-not-allowed"
                      title="Wkrótce"
                    >
                      {city.name}
                    </span>
                  )
                ))}
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
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania dotyczące tworzenia stron w Łodzi.
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
                      className="bg-card rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Gotowy na profesjonalną stronę internetową w Łodzi?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Łodzi i całej Polski.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/kontakt">
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-5 w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default StronyInternetoweLodz;
