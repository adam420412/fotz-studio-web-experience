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
  Zap,
  Users
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

const StronyInternetoweGdansk = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www dla firm z Gdańska i Gdyni." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarkach." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z integracjami płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Marketing online", desc: "Kampanie reklamowe zwiększające widoczność Twojej strony." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Strony zoptymalizowane pod kątem wyszukiwarek od pierwszego dnia." },
    { icon: Handshake, title: "Lokalna wiedza", desc: "Rozumiemy specyfikę rynku Trójmiasta i potrzeby lokalnych firm." },
    { icon: Smartphone, title: "Responsywny design", desc: "Strony działające perfekcyjnie na każdym urządzeniu." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "SSL, regularne aktualizacje i zabezpieczenia przed atakami." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Pełna opieka po uruchomieniu strony internetowej." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa", desc: "Profesjonalna strona www prezentująca Twoją firmę.", price: "od 2 000 zł netto" },
    { title: "Strona firmowa", desc: "Rozbudowana strona internetowa z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy", desc: "Platforma e-commerce z integracjami płatności i dostawy.", price: "od 8 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Analiza potrzeb", desc: "Zrozumienie potrzeb klienta i celów biznesowych strony www." },
    { step: "02", title: "Projekt graficzny", desc: "Tworzenie projektu graficznego dostosowanego do Twojej marki." },
    { step: "03", title: "Kodowanie", desc: "Profesjonalne tworzenie stron internetowych od podstaw." },
    { step: "04", title: "Uruchomienie", desc: "Testy, optymalizacja SEO i uruchomienie strony." },
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
    { name: "Łódź", href: "/strony-internetowe-lodz", active: false },
    { name: "Katowice", href: "/strony-internetowe-katowice", active: false },
    { name: "Szczecin", href: "/strony-internetowe-szczecin", active: false },
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz", active: false },
    { name: "Lublin", href: "/strony-internetowe-lublin", active: false },
  ];

  const faqItems = [
    {
      question: "Czym wyróżniają się strony internetowe Gdańsk tworzone przez Waszą firmę?",
      answer: "Oferujemy kompleksowy proces zaprojektowania strony i budujemy strony zoptymalizowane pod kątem wyszukiwarek internetowych, co zwiększa widoczność Twojej strony i przyciąga klientów. Nasze nowoczesne strony internetowe Gdańsk łączą responsywny design z profesjonalnym podejściem do projektu strony internetowej."
    },
    {
      question: "Jak wygląda proces tworzenia nowej strony www dla firmy w Gdańsku?",
      answer: "Najpierw ustalamy zakres projektowania stron internetowych i strukturę strony, następnie przygotowujemy projekt graficzny i funkcjonalny. Po akceptacji przystępujemy do tworzenia stron internetowych od podstaw, integracji z systemem zarządzania treścią oraz testów przed uruchomieniem strony."
    },
    {
      question: "Czy oferujecie responsywny design i optymalizację SEO?",
      answer: "Tak — nasze responsywne strony www są projektowane pod kątem szybkiego ładowania strony i najlepszych praktyk SEO. Tworzymy strony zoptymalizowane pod kątem wyszukiwarek internetowych, aby poprawić pozycje w wynikach i zwiększyć ruch organiczny."
    },
    {
      question: "Jakie korzyści daje kompleksowy pakiet usług?",
      answer: "Kompleksowy pakiet gwarantuje spójność projektu, bezproblemowe wdrożenie oraz szybką reakcję przy aktualizacjach. Dzięki temu masz pewność, że Twoja strona działa stabilnie, a marka zyskuje profesjonalne podejście w zakresie obsługi i rozwoju."
    },
    {
      question: "Czy pomagacie w stworzeniu sklepu internetowego?",
      answer: "Tak, tworzymy sklepy internetowe oparte na sprawdzonych rozwiązaniach e-commerce. W ramach projektu wykonujemy konfigurację produktów, płatności, integracje z systemami wysyłkowymi i optymalizację pod kątem konwersji."
    },
    {
      question: "Ile czasu trwa przygotowanie i uruchomienie strony?",
      answer: "Czas realizacji zależy od zakresu — proste strony można uruchomić w kilka tygodni, bardziej rozbudowane projekty wymagają kilku miesięcy. Kluczowe etapy to: analiza potrzeb, projekt graficzny, wdrożenie techniczne, testy i uruchomienie strony."
    },
    {
      question: "Czy możecie odświeżyć istniejącą stronę i poprawić jej pozycję w wyszukiwarkach?",
      answer: "Oferujemy audyt SEO i konwersji, rekomendacje dotyczące struktury strony oraz wdrożenia zoptymalizowane pod kątem wyszukiwarek. Przeprowadzamy aktualizacje treści, optymalizujemy ładowanie strony i wersje mobilne."
    },
    {
      question: "Dlaczego warto wybrać lokalną agencję w Gdańsku?",
      answer: "Lokalna agencja lepiej rozumie specyfikę rynku Trójmiasta i potrzeby klientów. Dzięki temu otrzymujesz bardziej dopasowane rozwiązania, profesjonalne podejście i szybsze reakcje przy wdrożeniach czy aktualizacjach."
    },
  ];

  const benefits = [
    "Responsywne strony działające na każdym urządzeniu",
    "Optymalizacja SEO zwiększająca widoczność w Google",
    "Integracja z systemami płatności i dostawy",
    "Szybkie ładowanie strony i wysoka wydajność",
    "Bezpieczeństwo - certyfikat SSL w standardzie",
    "Wsparcie techniczne po uruchomieniu strony"
  ];

  return (
    <>
      <Helmet>
        <title>Tworzenie Stron Internetowych Gdańsk Gdynia | Strony WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Tworzenie stron internetowych Gdańsk i Gdynia. Profesjonalne strony www, sklepy e-commerce, pozycjonowanie SEO. Responsywne strony dla firm z Trójmiasta." 
        />
        <meta name="keywords" content="tworzenie stron internetowych gdańsk, strony www gdańsk, strony internetowe gdynia, sklepy internetowe gdańsk, projektowanie stron trójmiasto" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-gdansk" />
      </Helmet>
      
      <ServiceSchema 
        name="Tworzenie Stron Internetowych Gdańsk Gdynia"
        description="Profesjonalne tworzenie stron internetowych dla firm z Gdańska i Gdyni. Responsywne strony www, sklepy e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Gdańsk, Gdynia, Trójmiasto"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Gdańsk", url: "https://fotz.pl/strony-internetowe-gdansk" },
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
                Strony WWW Gdańsk & Gdynia
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Tworzenie Stron Internetowych <span className="text-gradient">Gdańsk Gdynia</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dzisiejszych czasach <strong>posiadanie profesjonalnej strony internetowej to podstawa sukcesu w biznesie</strong>. 
                Nasza agencja specjalizuje się w tworzeniu stron WWW, które nie tylko wyglądają estetycznie, ale przede wszystkim 
                generują realne korzyści dla Twojej marki w Trójmieście.
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
                  Wprowadzenie do tworzenia stron internetowych
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3>Dlaczego warto projektować strony internetowe w Gdańsku i Gdyni?</h3>
                  <p>
                    Projektowanie stron internetowych w Gdańsku i Gdyni to <strong>inwestycja w widoczność Twojej firmy online</strong>. 
                    Lokalny rynek jest konkurencyjny, dlatego warto zainwestować w profesjonalną stronę internetową, która wyróżni 
                    Cię na tle innych. Tworzenie stron WWW z nami to gwarancja, że Twoja strona będzie responsywna, funkcjonalna 
                    i zoptymalizowana pod kątem <Link to="/pozycjonowanie" className="text-primary hover:underline">SEO</Link>.
                  </p>
                  
                  <h3>Korzyści z posiadania profesjonalnej strony www</h3>
                  <p>
                    <strong>Profesjonalna strona WWW to wizytówka Twojej firmy w internecie</strong>. Dzięki niej możesz dotrzeć 
                    do szerszego grona klientów, budować wizerunek Twojej marki i zwiększać sprzedaż. Stworzenie strony internetowej, 
                    która jest intuicyjna i funkcjonalna, przekłada się na pozytywne doświadczenia użytkowników i wyższą konwersję.
                  </p>
                  
                  <h3>Przegląd usług tworzenia stron</h3>
                  <p>
                    Nasza agencja oferuje <strong>kompleksowy zakres usług związanych z tworzeniem stron internetowych</strong>. 
                    Od projektu graficznego, przez wdrożenie, po optymalizację i <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link>. 
                    Specjalizujemy się w tworzeniu sklepów internetowych, responsywnych stron internetowych i stron www Gdańsk. 
                    Sprawdź też nasze usługi <Link to="/social-media" className="text-primary hover:underline">social media</Link>.
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
                  Korzyści z posiadania profesjonalnej strony www
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Profesjonalna strona internetowa to inwestycja, która zwraca się wielokrotnie.
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
                  Tworzenie stron www Gdańsk
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron internetowych dla firm z Trójmiasta.
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
                  <h3>Znaczenie responsywności w nowoczesnych projektach</h3>
                  <p>
                    <strong>Responsywność to kluczowa cecha każdej nowoczesnej strony internetowej</strong>. Oznacza to, 
                    że strona www automatycznie dostosowuje się do rozmiaru ekranu urządzenia, na którym jest wyświetlana. 
                    Dzięki temu użytkownicy mogą komfortowo przeglądać Twoją stronę zarówno na komputerze, tablecie, jak i smartfonie.
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
                  Przykłady zrealizowanych projektów stron www
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz projekty, które stworzyliśmy. Responsywne strony internetowe i sklepy e-commerce.
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

        {/* SEO Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Optymalizacja i SEO w tworzeniu stron internetowych</h2>
                  
                  <h3>Jak poprawić widoczność w wyszukiwarkach?</h3>
                  <p>
                    <strong>Optymalizacja SEO jest kluczowa dla widoczności strony internetowej w wynikach wyszukiwania</strong>. 
                    Działania SEO pozwalają poprawić widoczność Twojej strony, co przekłada się na większy ruch i potencjalnych 
                    klientów. Sprawdź naszą ofertę <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowania stron</Link>.
                  </p>
                  
                  <h3>Rola SEO w projektowaniu stron www</h3>
                  <p>
                    <strong>SEO odgrywa kluczową rolę w projektowaniu stron internetowych</strong>. Już na etapie projektowania 
                    strony należy uwzględnić elementy, które wpływają na jej pozycjonowanie w wynikach wyszukiwania. 
                    Każda strona, którą tworzymy, jest od podstaw zoptymalizowana pod kątem wyszukiwarek.
                  </p>
                  
                  <h3>Najlepsze praktyki optymalizacji stron internetowych</h3>
                  <p>
                    Optymalizacja stron internetowych to proces, który wymaga ciągłego monitorowania i aktualizacji. 
                    Do najlepszych praktyk należy: regularne aktualizowanie treści, dbanie o responsywność strony, 
                    optymalizacja prędkości ładowania, tworzenie wartościowych linków zwrotnych i monitorowanie statystyk strony.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* E-commerce Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Tworzenie sklepów internetowych Gdańsk</h2>
                  
                  <h3>Jak stworzyć skuteczny sklep internetowy?</h3>
                  <p>
                    Specjalizujemy się w tworzeniu sklepów internetowych e-commerce, oferując kompleksowe rozwiązania 
                    dla biznesów, które chcą rozwijać swoją sprzedaż online. <strong>Skuteczny sklep internetowy musi być 
                    intuicyjny, responsywny i zoptymalizowany pod kątem SEO</strong>, aby zapewnić wysoką widoczność 
                    w wynikach wyszukiwania.
                  </p>
                  
                  <h3>Integracja płatności i zarządzanie zamówieniami</h3>
                  <p>
                    <strong>Kluczowym elementem tworzenia sklepów internetowych jest integracja z systemami płatności</strong>, 
                    takimi jak PayPal czy Przelewy24, oraz systemami dostawy, np. InPost i DPD. Dzięki temu klienci mogą 
                    łatwo i bezpiecznie dokonywać zakupów online. Ważne jest, aby proces zamówienia był prosty i intuicyjny.
                  </p>
                  
                  <h3>Marketing online dla sklepów www</h3>
                  <p>
                    <strong>Skuteczny marketing online jest niezbędny, aby przyciągnąć klientów do Twojego sklepu</strong>. 
                    Oferujemy kompleksowe strategie pozycjonowania stron, optymalizację SEO i kampanie reklamowe. 
                    Sprawdź też nasze usługi <Link to="/social-media" className="text-primary hover:underline">social media marketing</Link>.
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
                  Dlaczego warto wybrać naszą agencję w Gdańsku i Gdyni?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zyskujesz partnera, który rozumie specyfikę lokalnego rynku Trójmiasta.
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
                  Cennik tworzenia stron www Gdańsk
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu. 
                  Sprawdź też nasz <Link to="/blog/ile-kosztuje-strona-internetowa" className="text-primary hover:underline">artykuł o kosztach stron</Link>.
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
                        city.href === "/strony-internetowe-gdansk" 
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
                  Odpowiedzi na pytania dotyczące tworzenia stron w Gdańsku i Gdyni.
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
                  Gotowy na profesjonalną stronę internetową w Gdańsku?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Trójmiasta i całej Polski.
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

export default StronyInternetoweGdansk;
