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

import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja.jpg";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";

const StronyInternetoweWarszawa = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Budujemy i projektujemy strony oraz sklepy internetowe." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Dbanie o pozycje w wyszukiwarce dla Twojej firmy." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Intuicyjne interfejsy, które konwertują." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Rozwijamy sklepy internetowe i platformy sprzedażowe." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i inne." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają ruch w klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow, Shopify - dobieramy technologię do projektu." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Nie tylko wykonujemy - doradzamy i wspieramy w rozwoju." },
    { icon: Smartphone, title: "Mobile-first", desc: "Projektujemy z myślą o urządzeniach mobilnych." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "SSL, regularne aktualizacje, zabezpieczenia przed atakami." },
    { icon: Headphones, title: "Wsparcie po wdrożeniu", desc: "Nie zostawiamy Cię po uruchomieniu strony." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa", desc: "Prosta strona internetowa prezentująca podstawowe informacje o firmie.", price: "od 2 000 zł netto" },
    { title: "Strona firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjonalnościami i podstronami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy", desc: "Zaawansowana platforma e-commerce z integracjami.", price: "od 8 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy Twoje cele biznesowe i analizujemy konkurencję." },
    { step: "02", title: "Projekt UX/UI", desc: "Tworzymy makiety i projekt graficzny strony." },
    { step: "03", title: "Programowanie", desc: "Kodujemy stronę z dbałością o wydajność i SEO." },
    { step: "04", title: "Testy i wdrożenie", desc: "Testujemy na różnych urządzeniach i uruchamiamy." },
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
    { name: "Lublin", href: "/strony-internetowe-lublin", active: false },
  ];

  const faqItems = [
    {
      question: "Dlaczego warto zainwestować w tworzenie stron internetowych Warszawa?",
      answer: "Inwestycja w tworzenie stron internetowych w Warszawie to kluczowy krok do prezentacji swojej firmy w internecie na najwyższym poziomie. Profesjonalne wykonanie strony zwiększa zaufanie potencjalnych klientów i umożliwia skuteczne pozycjonowanie, co jest niezbędne do osiągnięcia sukcesu na konkurencyjnym rynku warszawskim."
    },
    {
      question: "Jakie są kluczowe cechy responsywnych stron internetowych?",
      answer: "Responsywne strony internetowe automatycznie dostosowują swoją strukturę i wygląd do rozmiaru ekranu urządzenia. To kluczowe dla użytkowników mobilnych, gwarantuje komfort przeglądania i jest jednym z kryteriów oceny przez wyszukiwarki jak Google."
    },
    {
      question: "Na czym polega pozycjonowanie stron www Warszawa?",
      answer: "Pozycjonowanie stron www to działania mające na celu podniesienie pozycji strony w wynikach wyszukiwania Google dla wybranych fraz kluczowych. Strony znajdujące się na czołowych pozycjach są częściej odwiedzane, co zwiększa potencjalny ruch i liczbę leadów."
    },
    {
      question: "Ile kosztuje wykonanie strony internetowej w Warszawie?",
      answer: "Ceny stron internetowych różnią się w zależności od kompleksowości projektu, funkcjonalności, zastosowanych technologii i czasu realizacji. Strona wizytówkowa zaczyna się od ok. 2000 zł, strona firmowa od 5000 zł, a sklep internetowy od 8000 zł netto."
    },
    {
      question: "Czy oferujecie projektowanie stron www i sklepy internetowe?",
      answer: "Tak, oferujemy kompleksowe projektowanie stron www oraz tworzenie sklepów internetowych. To umożliwia klientom posiadanie spójnej wizualnie i funkcjonalnie obecności w internecie."
    },
    {
      question: "Jakie są zalety posiadania sklepu internetowego?",
      answer: "Sklep internetowy to dodatkowy kanał sprzedaży umożliwiający dotarcie do klientów z całej Polski i zagranicy. E-commerce pozwala na łatwe skalowanie biznesu, dostęp do dokładnych danych o klientach oraz działanie 24/7 bez potrzeby fizycznej przestrzeni."
    },
    {
      question: "Jak długo trwa proces tworzenia strony internetowej?",
      answer: "Czas realizacji zależy od specyfiki projektu. Standardowo prosta strona wizytówkowa to 2-3 tygodnie, strona firmowa 4-8 tygodni, a sklep internetowy 8-16 tygodni. Doświadczenie naszego zespołu często skraca te czasy przy zachowaniu wysokiej jakości."
    },
    {
      question: "Jak monitorować efektywność strony internetowej?",
      answer: "Efektywność strony można monitorować za pomocą Google Analytics i Search Console. Pozwalają na śledzenie kluczowych metryk: liczby odwiedzin, czasu na stronie, współczynnika odrzuceń oraz konwersji. Regularna analiza pomaga w optymalizacji."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tworzenie Stron Internetowych Warszawa | Projektowanie WWW | Fotz</title>
        <meta 
          name="description" 
          content="Tworzenie stron internetowych Warszawa. Projektowanie stron www, sklepy e-commerce, pozycjonowanie SEO. Profesjonalna budowa stron dla firm z Warszawy." 
        />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-warszawa" />
      </Helmet>
      
      <ServiceSchema 
        name="Tworzenie Stron Internetowych Warszawa"
        description="Profesjonalne tworzenie stron internetowych dla firm z Warszawy. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="Fotz Studio"
        areaServed="Warszawa"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Warszawa", url: "https://fotz.pl/strony-internetowe-warszawa" },
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
                Strony WWW Warszawa
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Tworzenie stron www <span className="text-gradient">Warszawa</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dynamicznie rozwijającym się świecie cyfrowym, strona internetowa stała się kluczowym elementem 
                każdej firmy. Dla biznesów z Warszawy, konkurencyjnego rynku pełnego innowacji, profesjonalna 
                strona www to nie opcja, ale konieczność.
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
                  Jak tworzyć efektywną stronę www dla firm z Warszawy?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3>Ustalanie celów strony internetowej</h3>
                  <p>
                    Tworzenie stron www w Warszawie zaczyna się od zrozumienia i jasnego określenia celów biznesowych. 
                    Czy ma to być strona wizytówka firmy, sklep internetowy, czy platforma do rezerwacji usług? 
                    Cele te definiują funkcjonalności strony, jej strukturę oraz content, który powinien spełniać 
                    oczekiwania docelowej grupy klientów.
                  </p>
                  
                  <h3>Wybór technologii projektowania stron</h3>
                  <p>
                    Wybór technologii jest krytycznym elementem w procesie tworzenia stron internetowych. 
                    W Warszawie firmom oferowane są rozmaite technologie, od prostych konstruktorów stron www 
                    po zaawansowane systemy zarządzania treścią (CMS) i frameworki webowe jak React czy Next.js.
                  </p>
                  
                  <h3>Znaczenie responsywności strony</h3>
                  <p>
                    W dobie wszechobecnych smartfonów, projektowanie stron internetowych musi uwzględniać responsywność. 
                    Strony, które poprawnie wyświetlają się na urządzeniach mobilnych, nie tylko zapewniają lepszą 
                    użyteczność, ale też są lepiej oceniane przez wyszukiwarki Google.
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
                  Projektowanie stron internetowych Warszawa
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla warszawskich firm - od projektu po pozycjonowanie.
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

        {/* UI/UX Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Projektowanie stron internetowych: od czego zacząć?</h2>
                  
                  <h3>Przegląd najlepszych praktyk w projektowaniu UI/UX</h3>
                  <p>
                    Projektowanie stron internetowych musi opierać się na solidnych fundamentach UI/UX. 
                    Dobre praktyki są kluczowe dla stworzenia intuicyjnych, atrakcyjnych i łatwych w obsłudze stron. 
                    Kładziemy duży nacisk na analizę potrzeb użytkowników oraz testowanie prototypów strony.
                  </p>
                  
                  <h3>Rola badania rynku w tworzeniu projektu strony www</h3>
                  <p>
                    Zrozumienie rynku i konkurencji jest niezbędne do stworzenia strony internetowej, która będzie 
                    wyróżniać się na tle innych. Badanie rynku umożliwia identyfikację trendów, preferencji odbiorców 
                    oraz praktyk, które najlepiej sprawdzają się w danej branży.
                  </p>
                  
                  <h3>Wybieranie kolorystyki i typografii adekwatnej do branży</h3>
                  <p>
                    Wybór kolorów i typografii ma ogromny wpływ na odbiór strony przez użytkowników. 
                    Barwy powinny być spójne z identyfikacją wizualną firmy, a typografia musi zapewniać 
                    czytelność na różnych urządzeniach oraz być adekwatna do charakteru branży.
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
                  Zobacz projekty, które zrealizowaliśmy dla naszych klientów.
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

        {/* E-commerce Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Sklepy internetowe Warszawa: jak zaprojektować stronę sprzedażową?</h2>
                  
                  <h3>Integracja z systemami płatności i zarządzania magazynem</h3>
                  <p>
                    Projektowanie sklepów internetowych wymaga szczególnej uwagi na integrację z systemami 
                    płatności i zarządzania magazynem. Automatyzacja procesów płatności, zarządzanie stanami 
                    magazynowymi i łatwość dokonywania transakcji to kluczowe elementy wpływające na efektywność sprzedaży.
                  </p>
                  
                  <h3>Optymalizacja procesu zakupowego</h3>
                  <p>
                    Optymalizacja procesu zakupowego jest niezbędna, aby zapewnić użytkownikom maksymalną wygodę 
                    i minimalizować liczbę porzuconych koszyków. To obejmuje zarówno techniczne aspekty jak szybkość 
                    ładowania, jak i intuicyjność interfejsu czy uproszczenie procesu checkout.
                  </p>
                  
                  <h3>Użyteczność i bezpieczeństwo sklepu internetowego</h3>
                  <p>
                    Bez względu na branżę, użyteczność i bezpieczeństwo są podstawą każdego sklepu internetowego. 
                    Zapewniamy, że wszystkie dane klientów są bezpiecznie przechowywane i chronione przed atakami.
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
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron, które działają.
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

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak wygląda współpraca?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od briefu do wdrożenia.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-xl bg-card border border-border/50">
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
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Cennik tworzenia stron www Warszawa
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-xl border h-full flex flex-col ${index === 1 ? "bg-primary/5 border-primary/30" : "bg-background border-border/50"}`}>
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

        {/* SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Pozycjonowanie i optymalizacja stron www dla firm z Warszawy</h2>
                  
                  <h3>Zasady skutecznego SEO dla lokalnych przedsiębiorstw</h3>
                  <p>
                    Skuteczne pozycjonowanie stron wymaga odpowiedniej strategii SEO, szczególnie dla firm 
                    lokalnych z Warszawy. Obejmuje to optymalizację treści pod kątem słów kluczowych, 
                    zwiększanie prędkości ładowania strony, budowanie linków zewnętrznych oraz optymalizację 
                    pod urządzenia mobilne. Lokalne SEO pozwala na dotarcie do klientów w najbliższym otoczeniu firmy.
                  </p>
                  
                  <h3>Optymalizacja pod kątem urządzeń mobilnych</h3>
                  <p>
                    Optymalizacja strony pod kątem urządzeń mobilnych jest niezbędna, aby uzyskać wysoką pozycję 
                    w wynikach wyszukiwania. Google oraz inne wyszukiwarki preferują strony przyjazne dla 
                    użytkowników mobilnych, co bezpośrednio przekłada się na większą widoczność i ruch.
                  </p>
                  
                  <h3>Monitoring efektów pozycjonowania</h3>
                  <p>
                    Monitoring efektów pozycjonowania jest kluczowy, aby ocenić skuteczność strategii SEO. 
                    Używanie narzędzi analitycznych pozwala na śledzenie postępów w zakresie pozycji słów kluczowych, 
                    ruchu na stronie i zachowań użytkowników.
                  </p>
                </div>
              </FadeInView>
            </div>
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
                        city.href === "/strony-internetowe-warszawa" 
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
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania dotyczące tworzenia stron w Warszawie.
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
                  Gotowy na profesjonalną stronę internetową?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Warszawy.
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

export default StronyInternetoweWarszawa;
