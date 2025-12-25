import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  Users, 
  ShoppingCart, 
  Palette, 
  MessageSquare,
  Settings,
  TrendingUp,
  Handshake,
  ChevronRight,
  Phone,
  CheckCircle2,
  Smartphone,
  Shield,
  Headphones,
  FileCode,
  Clock,
  Award,
  MapPin,
  ArrowRight
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

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweSzczecin = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz witryny online dla firm ze Szczecina." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na projekt graficzny." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają odwiedzających w klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Specjalizujemy się w tworzeniu stron skrojonych na miarę Twojej firmy." },
    { icon: Smartphone, title: "Responsywność", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Certyfikat SSL", desc: "Bezpieczne strony z certyfikatem SSL i regularnymi aktualizacjami." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Nie zostawiamy Cię po uruchomieniu nowej strony internetowej." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa / Landing page", desc: "Prosta strona www prezentująca podstawowe informacje o firmie.", price: "od 1 500 zł netto" },
    { title: "Rozbudowana strona firmowa", desc: "Profesjonalna strona internetowa z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy e-commerce", desc: "Zaawansowana platforma e-commerce z integracjami płatności.", price: "od 7 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy ze Szczecina." },
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

  const cityLinks = [
    { name: "Poznań", href: "/strony-internetowe-poznan", active: true },
    { name: "Warszawa", href: "/strony-internetowe-warszawa", active: true },
    { name: "Wrocław", href: "/strony-internetowe-wroclaw", active: true },
    { name: "Kraków", href: "/strony-internetowe-krakow", active: true },
    { name: "Gdańsk", href: "/strony-internetowe-gdansk", active: true },
    { name: "Łódź", href: "/strony-internetowe-lodz", active: true },
    { name: "Katowice", href: "/strony-internetowe-katowice", active: true },
    { name: "Szczecin", href: "/strony-internetowe-szczecin", active: true },
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz", active: true },
    { name: "Lublin", href: "/strony-internetowe-lublin", active: true },
  ];

  const faqItems = [
    {
      question: "Czym wyróżniają się strony internetowe Szczecin tworzone przez Waszą firmę?",
      answer: "Oferujemy kompleksowy proces zaprojektowania strony i budujemy strony zoptymalizowane pod kątem wyszukiwarek internetowych, co zwiększa widoczność Twojej strony i przyciąga klientów. Nasze nowoczesne strony internetowe łączą responsywny design z profesjonalnym podejściem do projektu strony internetowej."
    },
    {
      question: "Jak wygląda proces tworzenia strony www dla firm ze Szczecina?",
      answer: "Najpierw ustalamy zakres projektowania stron internetowych i strukturę strony, następnie przygotowujemy projekt graficzny i funkcjonalny. Po akceptacji przystępujemy do tworzenia stron internetowych, integracji z systemem zarządzania treścią oraz testów przed uruchomieniem strony."
    },
    {
      question: "Czy oferujecie responsywny design zoptymalizowany pod kątem wyszukiwarek?",
      answer: "Tak — nasze responsywne strony www są projektowane pod kątem szybkiego ładowania strony i najlepszych praktyk SEO. Tworzymy strony zoptymalizowane pod kątem wyszukiwarek internetowych, aby poprawić pozycje w wynikach i zwiększyć ruch organiczny."
    },
    {
      question: "Co obejmuje kompleksowy pakiet usług tworzenia stron?",
      answer: "Kompleksowy pakiet gwarantuje spójność projektu, bezproblemowe wdrożenie oraz szybką reakcję przy aktualizacjach. Dzięki temu masz pewność, że każda strona działa stabilnie, a Twoja marka zyskuje profesjonalne podejście w zakresie obsługi i rozwoju."
    },
    {
      question: "Czy pomagacie w tworzeniu sklepów internetowych?",
      answer: "Tak, tworzymy sklepy internetowe oparte na sprawdzonych rozwiązaniach e-commerce. W ramach projektu strony internetowej wykonujemy konfigurację produktów, płatności, integracje z systemami wysyłkowymi i optymalizację pod kątem konwersji."
    },
    {
      question: "Ile czasu trwa przygotowanie i uruchomienie strony dla firmy ze Szczecina?",
      answer: "Czas realizacji zależy od zakresu — proste strony można uruchomić w kilku tygodniach, bardziej rozbudowane projekty wymagają kilku miesięcy. Kluczowe etapy to: analiza potrzeb, struktura strony, projekt graficzny, wdrożenie techniczne, testy i uruchomienie strony."
    },
    {
      question: "Czy możecie odświeżyć istniejącą stronę i poprawić jej pozycję w wyszukiwarkach?",
      answer: "Oferujemy audyt SEO i konwersji, rekomendacje dotyczące struktury strony oraz wdrożenia zoptymalizowane pod kątem wyszukiwarek internetowych. Przeprowadzamy aktualizacje treści, optymalizujemy ładowanie strony i wersję mobilną, aby poprawić widoczność i efektywność serwisu."
    },
    {
      question: "Jakie wsparcie otrzymam po zrealizowanej stronie?",
      answer: "Po oddaniu projektu zapewniamy wsparcie techniczne, opcje hostingu i kopii zapasowych oraz szkolenie z zarządzania treścią, byś mógł samodzielnie aktualizować stronę. Oferujemy również pakiety opieki i dalszego rozwoju."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Strony Internetowe Szczecin | Projektowanie i Tworzenie Stron WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Strony internetowe Szczecin. Profesjonalne projektowanie i tworzenie stron www, sklepy e-commerce, pozycjonowanie SEO. Tworzenie stron dla firm ze Szczecina i okolic." 
        />
        <meta name="keywords" content="strony internetowe szczecin, tworzenie stron www szczecin, projektowanie stron szczecin, sklepy internetowe szczecin, strona www szczecin, www szczecin" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-szczecin" />
      </Helmet>
      
      <ServiceSchema 
        name="Strony Internetowe Szczecin - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm ze Szczecina i okolic. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Szczecin"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Szczecin", url: "https://fotz.pl/strony-internetowe-szczecin" },
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
                Strony WWW Szczecin
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Strony Internetowe <span className="text-gradient">Szczecin</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dzisiejszym cyfrowym świecie, <strong>posiadanie profesjonalnej strony internetowej to podstawa sukcesu każdej firmy</strong>. 
                Specjalizujemy się w <Link to="/strony-internetowe" className="text-primary hover:underline">projektowaniu i tworzeniu stron www</Link> w Szczecinie, 
                oferując kompleksowe rozwiązania dostosowane do indywidualnych potrzeb naszych klientów.
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
                  Wprowadzenie do tworzenia stron www
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3>Co to jest strona www?</h3>
                  <p>
                    Strona www, inaczej witryna internetowa, to zbiór powiązanych ze sobą dokumentów, grafik i innych zasobów, 
                    dostępnych online pod jednym adresem internetowym (domeną). <strong>Profesjonalnie zaprojektowana strona www 
                    powinna być responsywna</strong>, czyli dostosowywać się do różnych urządzeń, takich jak komputery, tablety i smartfony.
                  </p>
                  
                  <h3>Dlaczego warto projektować profesjonalne <Link to="/strony-internetowe" className="text-primary hover:underline">strony internetowe</Link>?</h3>
                  <p>
                    <strong>Warto projektować profesjonalne strony internetowe, ponieważ stanowią one wizytówkę firmy w internecie.</strong> 
                    Profesjonalny projekt graficzny oraz intuicyjna funkcjonalność budują pozytywny wizerunek marki i zwiększają zaufanie klientów. 
                    Dobrze zaprojektowana strona www to także skuteczne narzędzie reklamowe.
                  </p>
                  
                  <h3>Znaczenie <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowania stron internetowych</Link> Szczecin</h3>
                  <p>
                    <strong>Pozycjonowanie stron internetowych w Szczecinie (SEO) jest kluczowe, aby Twoja strona pojawiała się 
                    wysoko w wynikach wyszukiwania.</strong> Dzięki optymalizacji treści i struktury strony pod kątem słów kluczowych, 
                    potencjalni klienci łatwiej znajdą Twoją ofertę w wyszukiwarce Google.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Usługi</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Tworzenie stron www Szczecin
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla firm ze Szczecina - od projektu graficznego po <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link>.
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

        {/* Agencje Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Agencje projektujące strony www w Szczecinie</h2>
                  
                  <h3>Wybór odpowiedniej <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline">agencji interaktywnej</Link></h3>
                  <p>
                    Wybierając agencję interaktywną w Szczecinie, warto zwrócić uwagę na jej doświadczenie, portfolio oraz zakres 
                    oferowanych usług. <strong>Profesjonalna agencja zadba o kompleksowy proces tworzenia stron www, od projektowania 
                    graficznego po wdrożenie i pozycjonowanie.</strong>
                  </p>
                  
                  <h3>Oferta agencji w Szczecinie</h3>
                  <p>
                    Agencje w Szczecinie, takie jak Fotz, oferują szeroki zakres usług związanych z tworzeniem stron internetowych. 
                    Kompleksowe podejście obejmuje nie tylko projektowanie i wdrażanie witryn, ale także branding i identyfikację wizualną, 
                    <Link to="/social-media" className="text-primary hover:underline"> obsługę social media</Link>, video marketing, 
                    kampanie reklamowe Meta Ads i Google Ads, oraz systemy pozyskiwania leadów.
                  </p>
                  
                  <h3>Przykłady realizacji stron internetowych</h3>
                  <p>
                    Przeglądając <Link to="/realizacje" className="text-primary hover:underline">portfolio agencji</Link>, możesz 
                    zobaczyć przykłady wcześniejszych realizacji stron internetowych. <strong>Przykłady udanych realizacji świadczą 
                    o profesjonalizmie i umiejętnościach agencji</strong>.
                  </p>
                </div>
              </FadeInView>
            </div>
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

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Proces projektowania i tworzenia stron www</h2>
                  
                  <h3>Etapy projektowania graficznego</h3>
                  <p>
                    Proces projektowania graficznego stron www rozpoczyna się od zrozumienia potrzeb i celów biznesowych klienta. 
                    Następnie tworzone są makiety i prototypy, które prezentują układ i wygląd strony. <strong>Ważne jest, aby 
                    projekt graficzny był spójny z identyfikacją wizualną firmy i atrakcyjny dla potencjalnych klientów.</strong>
                  </p>
                  
                  <h3>Tworzenie responsywnych witryn online</h3>
                  <p>
                    <strong>Tworzenie responsywnych witryn online jest kluczowe, aby Twoja strona była dostępna i czytelna na 
                    wszystkich urządzeniach.</strong> Responsywny design automatycznie dopasowuje się do rozmiaru ekranu, 
                    zapewniając optymalne wrażenia użytkownikom.
                  </p>
                  
                  <h3>Administracja i hosting stron internetowych</h3>
                  <p>
                    Profesjonalne agencje oferują usługi administracji i hosting stron internetowych. Korzystamy z różnych 
                    systemów zarządzania treścią (CMS), takich jak WordPress, Joomla, Drupal, Webflow i Shopify. <strong>Hosting 
                    zapewnia stabilne i szybkie działanie strony www</strong>.
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

        {/* SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Optymalizacja i pozycjonowanie stron www</h2>
                  
                  <h3>Jak zadbać o SEO na stronie internetowej?</h3>
                  <p>
                    Aby zadbać o SEO Twojej strony internetowej, należy skupić się na kilku kluczowych elementach. Przede wszystkim, 
                    optymalizacja treści pod kątem słów kluczowych, które wpisują użytkownicy w wyszukiwarce. Ważna jest również 
                    struktura strony, odpowiednie nagłówki i opisy meta. <strong>Profesjonalny audyt SEO pozwoli zidentyfikować 
                    obszary do poprawy</strong>.
                  </p>
                  
                  <h3>Optymalizacja dla sklepów internetowych</h3>
                  <p>
                    Optymalizacja dla sklepów internetowych wymaga uwzględnienia specyfiki e-commerce. Należy zadbać o optymalizację 
                    kart produktów, kategorii i opisów. <strong>Dobrze zoptymalizowany sklep internetowy to większa widoczność 
                    w wynikach wyszukiwania i większa szansa na konwersję.</strong>
                  </p>
                  
                  <h3>Rola domeny w pozycjonowaniu stron</h3>
                  <p>
                    <strong>Domena odgrywa istotną rolę w <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowaniu stron</Link>.</strong> 
                    Nazwa domeny powinna być krótka, łatwa do zapamiętania i zawierać słowa kluczowe związane z Twoją branżą.
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
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm ze Szczecina i całej Polski.
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
                  Cennik tworzenia stron www Szczecin
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu strony internetowej. 
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

        {/* Additional SEO Content */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>www Szczecin — jakie usługi oferować przy tworzeniu stron internetowych?</h2>
                  <p>
                    Oferujemy kompleksowy zakres usług: projekt graficzny, tworzenie nowej strony internetowej zgodnie z 
                    wytycznymi Google, wdrożenie podstron i formularzy kontaktowych, <Link to="/pozycjonowanie" className="text-primary hover:underline">optymalizację strony (SEO)</Link> 
                    oraz konfigurację certyfikatu SSL i serwerów. Działamy dla firm ze Szczecina i okolic.
                  </p>
                  
                  <h2>Administracja stron internetowych — co obejmuje?</h2>
                  <p>
                    Administracja stron internetowych obejmuje zarządzanie treścią CMS WordPress, aktualizacje wtyczek i motywu, 
                    kopie zapasowe, monitorowanie funkcjonowania strony i zapewnienie bezpieczeństwa (certyfikat SSL, zabezpieczenia serwerów).
                  </p>
                  
                  <h2>WordPress — dlaczego warto wybrać CMS WordPress?</h2>
                  <p>
                    WordPress to elastyczna technologia internetowa pozwalająca na szybkie tworzenie i edycję treści, łatwe dodawanie 
                    podstron i formularzy oraz zarządzanie grupą docelową. Oferujemy konfigurację, optymalizację strony i szkolenie 
                    z zarządzania treścią.
                  </p>
                  
                  <h2>Strona internetowa to wizytówka — jak wpływa na pozyskiwanie klientów?</h2>
                  <p>
                    Strona internetowa to wizytówka firmy — dobrze zaprojektowana i zoptymalizowana przyciąga klientów ze Szczecina 
                    i okolic, zwiększa wiarygodność oraz konwersje. Oferujemy kompleksowe podejście: <Link to="/strony-internetowe" className="text-primary hover:underline">tworzenie stron internetowych</Link>, 
                    optymalizację pod wyszukiwarki, konfigurację formularzy i szkolenie z zarządzania treścią.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-20">
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
                        city.href === "/strony-internetowe-szczecin" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-card border border-border/50 text-foreground hover:border-primary/30"
                      }`}
                    >
                      {city.name}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className="px-6 py-3 rounded-full bg-card border border-border/50 text-muted-foreground font-medium cursor-not-allowed"
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
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania dotyczące tworzenia stron w Szczecinie.
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
        <ContactSection city="Szczecinie" />
      </Layout>
    </>
  );
};

export default StronyInternetoweSzczecin;
