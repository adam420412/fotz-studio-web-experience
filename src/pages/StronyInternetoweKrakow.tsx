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

const StronyInternetoweKrakow = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz sklepy internetowe dla firm z Krakowa." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Optymalizacja SEO zwiększająca widoczność w wyszukiwarce Google." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Nowoczesne strony internetowe z naciskiem na użytkownika." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych Kraków z pełnymi integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają odwiedzających w klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Specjalizujemy się w tworzeniu stron skrojonych na miarę Twojej firmy." },
    { icon: Smartphone, title: "Mobile-first", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczne strony", desc: "SSL, regularne aktualizacje, zabezpieczenia przed atakami." },
    { icon: Headphones, title: "Wsparcie po wdrożeniu", desc: "Nie zostawiamy Cię po uruchomieniu nowej strony internetowej." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa / Landing page", desc: "Prosta strona www prezentująca podstawowe informacje o firmie.", price: "od 1 500 zł netto" },
    { title: "Rozbudowana strona firmowa", desc: "Profesjonalna strona internetowa z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy e-commerce", desc: "Zaawansowana platforma e-commerce z integracjami płatności.", price: "od 7 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy w Krakowie." },
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
    { name: "Katowice", href: "/strony-internetowe-katowice", active: false },
    { name: "Szczecin", href: "/strony-internetowe-szczecin", active: true },
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz", active: true },
    { name: "Lublin", href: "/strony-internetowe-lublin", active: false },
  ];

  const faqItems = [
    {
      question: "Jakie są korzyści z posiadania strony internetowej dla firm w Krakowie?",
      answer: "Posiadanie strony internetowej dla firm przynosi wiele korzyści: zwiększenie widoczności online, budowanie wiarygodności, możliwość prezentacji oferty 24/7, łatwiejszy kontakt z klientami oraz potencjalne zwiększenie sprzedaży. Dobra strona www może znacząco wpłynąć na rozwój biznesu w Krakowie."
    },
    {
      question: "Dlaczego warto skorzystać z usług profesjonalnego studia do projektowania stron www?",
      answer: "Profesjonalne studio zapewnia kompleksowe podejście do projektowania i tworzenia stron internetowych. Eksperci zadbają o estetykę, funkcjonalność i optymalizację strony, co przekłada się na lepsze wyniki w wyszukiwarkach i pozytywne wrażenia użytkowników."
    },
    {
      question: "Czy oferujecie tworzenie sklepów internetowych w Krakowie?",
      answer: "Tak, specjalizujemy się w tworzeniu sklepów internetowych w Krakowie. Nasze usługi obejmują projektowanie i implementację funkcjonalnych, atrakcyjnych wizualnie i łatwych w obsłudze platform e-commerce, dostosowanych do indywidualnych potrzeb klienta."
    },
    {
      question: "Co wyróżnia wyjątkowe strony internetowe?",
      answer: "Wyjątkowe strony internetowe charakteryzują się unikalnym designem, intuicyjną nawigacją, szybkością działania oraz responsywnością. Każda strona www powinna odzwierciedlać tożsamość marki, być łatwa w obsłudze dla użytkowników i zoptymalizowana pod kątem wyszukiwarek."
    },
    {
      question: "Jak przebiega proces projektowania i tworzenia stron?",
      answer: "Proces tworzenia strony internetowej obejmuje kilka etapów: konsultację z klientem, analizę potrzeb, tworzenie projektu graficznego strony, programowanie, testowanie oraz wdrożenie. Na każdym etapie dbamy o to, aby projekt Twojej strony internetowej spełniał najwyższe standardy."
    },
    {
      question: "Czy oferujecie tworzenie stron internetowych dla małych firm w Krakowie?",
      answer: "Oczywiście, specjalizujemy się w tworzeniu stron internetowych w Krakowie dla firm różnej wielkości, w tym małych przedsiębiorstw. Nasze rozwiązania są dostosowane do budżetu i potrzeb każdego klienta, zapewniając profesjonalną obecność online."
    },
    {
      question: "Jakie elementy składają się na najlepsze strony internetowe?",
      answer: "Najlepsze strony internetowe łączą w sobie atrakcyjny design, intuicyjną nawigację, szybkość ładowania, responsywność, wysokiej jakości treści oraz optymalizację SEO. Większość stron internetowych tworzonych przez nas zawiera te kluczowe elementy."
    },
    {
      question: "Czy oferujecie wsparcie po zakończeniu projektu strony www?",
      answer: "Tak, zapewniamy wsparcie techniczne i konsultacje po zakończeniu projektu. Oferujemy również usługi utrzymania i aktualizacji stron www w Krakowie, aby zapewnić ciągłość działania i aktualność Twojej witryny."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Strony Internetowe Kraków | Projektowanie i Tworzenie Stron WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Strony internetowe Kraków. Profesjonalne projektowanie i tworzenie stron www, sklepy e-commerce, pozycjonowanie SEO. Tworzenie stron dla firm z Krakowa." 
        />
        <meta name="keywords" content="strony internetowe kraków, tworzenie stron www kraków, projektowanie stron kraków, sklepy internetowe kraków, strona internetowa kraków, www kraków" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-krakow" />
      </Helmet>
      
      <ServiceSchema 
        name="Strony Internetowe Kraków - Projektowanie i Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Krakowa. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Kraków"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Kraków", url: "https://fotz.pl/strony-internetowe-krakow" },
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
                Strony WWW Kraków
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Strony Internetowe <span className="text-gradient">Kraków</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dzisiejszym cyfrowym świecie, <strong>profesjonalna strona internetowa to podstawa sukcesu każdej firmy</strong>. 
                Jeśli szukasz partnera do stworzenia strony internetowej w Krakowie, trafiłeś we właściwe miejsce. 
                Zajmujemy się projektowaniem i tworzeniem stron www, które pomagają firmom rosnąć i osiągać cele biznesowe.
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
                  Projektowanie i Tworzenie Stron Internetowych w Krakowie
                </h2>
                <div className="prose prose-invert max-w-none">
                  <h3>Dlaczego warto projektować strony www w Krakowie?</h3>
                  <p>
                    Wybierając firmy z Krakowa do projektowania stron www, zyskujesz dostęp do szerokiego grona specjalistów. 
                    <strong>Projektowanie stron internetowych w Krakowie to gwarancja zrozumienia lokalnego rynku i specyfiki Twojej firmy</strong>. 
                    Profesjonalny projekt strony, uwzględniający optymalizację SEO, przekłada się na lepszą widoczność w wyszukiwarce Google, 
                    co jest kluczowe dla pozyskiwania nowych klientów.
                  </p>
                  
                  <h3>Jakie usługi oferujemy dla firm z Krakowa?</h3>
                  <p>
                    Oferujemy kompleksowy zakres usług związanych z tworzeniem stron internetowych. Oprócz samego projektowania 
                    i tworzenia stron internetowych, możesz liczyć na branding i identyfikację wizualną, obsługę social media, 
                    video marketing i produkcję treści. Oferowane są także kampanie reklamowe Meta Ads i Google Ads, systemy 
                    pozyskiwania leadów i automatyzację marketingu. <strong>Celem jest stworzenie nowoczesnej strony, która będzie 
                    efektywnie wspierać cel biznesowy twojej firmy</strong>.
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
                  Tworzenie stron www Kraków
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla krakowskich firm - od projektu graficznego po pozycjonowanie stron.
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

        {/* Koszty Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Koszty Tworzenia Stron Internetowych w Krakowie</h2>
                  
                  <h3>Co wpływa na koszt stworzenia strony internetowej?</h3>
                  <p>
                    Koszt stworzenia strony internetowej w Krakowie jest zależny od wielu czynników. Przede wszystkim, 
                    rodzaj strony www ma kluczowe znaczenie. Strona wizytówkowa będzie znacznie tańsza niż rozbudowany 
                    sklep internetowy. Dodatkowe funkcjonalności również wpływają na cenę, takie jak optymalizacja SEO, 
                    integracje z systemami CRM czy systemami płatności.
                  </p>
                  
                  <h3>Indywidualny projekt strony</h3>
                  <p>
                    Indywidualny projekt strony, dopasowany do specyfiki Twojej firmy, wymaga więcej pracy niż szablonowe 
                    rozwiązania. Dlatego każda wycena tworzenia stron internetowych w Krakowie jest dopasowana do celów 
                    biznesowych klienta, a cena strony odzwierciedla kompleksowość projektu.
                  </p>
                  
                  <h3>Dodatkowe koszty związane ze stroną www</h3>
                  <p>
                    Poza kosztami samego projektowania i tworzenia stron internetowych, warto uwzględnić dodatkowe koszty 
                    związane z utrzymaniem i promocją nowej strony: obsługę fotograficzną, kampanie SEM, pozycjonowanie, 
                    prowadzenie social media oraz hosting i domenę.
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

        {/* SEO Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Optymalizacja SEO dla Stron WWW w Krakowie</h2>
                  
                  <h3>Co to jest SEO i dlaczego jest ważne?</h3>
                  <p>
                    SEO, czyli Search Engine Optimization, to proces optymalizacji stron internetowych pod kątem 
                    wyszukiwarek internetowych, takich jak Google. <strong>Profesjonalna optymalizacja SEO ma na celu 
                    poprawę widoczności Twojej strony w wynikach wyszukiwania</strong>, co przekłada się na większy 
                    ruch i potencjalnych klientów dla Twojej firmy w Krakowie.
                  </p>
                  
                  <h3>Najlepsze praktyki pozycjonowania stron w Krakowie</h3>
                  <p>
                    Najlepsze praktyki pozycjonowania stron w Krakowie obejmują kompleksowy audyt SEO, optymalizację 
                    treści pod kątem słów kluczowych związanych z lokalnym rynkiem, budowanie linków z lokalnych stron 
                    oraz dbanie o responsywność i szybkość strony.
                  </p>
                  
                  <h3>Współpraca z firmą SEO w Krakowie</h3>
                  <p>
                    Współpraca z firmą SEO w Krakowie powinna opierać się na jasno określonych celach i regularnej 
                    komunikacji. Dobra firma SEO oferuje optymalizację, która uwzględnia analizę słów kluczowych, 
                    optymalizację treści i budowanie linków.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* E-commerce Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Tworzenie Sklepów Internetowych w Krakowie</h2>
                  
                  <h3>Kluczowe elementy skutecznego sklepu internetowego</h3>
                  <p>
                    Kluczowe elementy skutecznego sklepu internetowego to integracja z systemami płatności i dostawy, 
                    zaawansowana optymalizacja SEO i certyfikat SSL, przejrzysta strona główna i intuicyjny katalog 
                    produktów, szczegółowa strona produktu, funkcjonalny koszyk i prosty proces zamówienia.
                  </p>
                  
                  <h3>Wybór platformy do stworzenia sklepu www</h3>
                  <p>
                    Wybór odpowiedniej platformy do stworzenia sklepu www w Krakowie jest kluczową decyzją. Popularne 
                    platformy e-commerce, takie jak WooCommerce, Shopify czy PrestaShop, oferują różne funkcje i 
                    możliwości dostosowania. <strong>Ważne jest, aby platforma umożliwiała optymalizację SEO, integrację 
                    z systemami płatności i była responsywna</strong>.
                  </p>
                  
                  <h3>Trendy w e-commerce w Krakowie</h3>
                  <p>
                    Trendy w e-commerce wskazują na rosnące znaczenie personalizacji, mobilnych zakupów i 
                    zrównoważonego rozwoju. Klienci oczekują spersonalizowanych ofert, łatwej nawigacji na urządzeniach 
                    mobilnych oraz transparentnych informacji o produktach.
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
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm z Krakowa.
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

        {/* Process Section */}
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
                  Cennik tworzenia stron www Kraków
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu projektu strony internetowej.
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
                  <h2>Strony internetowe Kraków — Czym są i dlaczego warto zainwestować?</h2>
                  <p>
                    Strony internetowe Kraków to wizytówka Twojej firmy w internecie. Profesjonalne strony internetowe 
                    łączą projekt graficzny strony, responsywne strony i SEO strony, dzięki czemu Twoja firma może się 
                    wyróżnić na tle konkurencji. Tworzenie i projektowanie stron internetowych obejmuje projekt strony www, 
                    układ strony oraz funkcjonalności strony.
                  </p>
                  
                  <h2>WWW Kraków — Jak wygląda proces tworzenia strony?</h2>
                  <p>
                    Proces tworzenia strony zwykle zaczyna się od briefu i identyfikacji wizualnej, następnie powstaje 
                    projekt graficzny strony w wersji desktop i mobilnej. Kolejne etapy to wykonanie strony internetowej, 
                    testy responsywnych stron www, uruchomienie strony i wdrożenie SEO oraz integracja z mediami społecznościowymi.
                  </p>
                  
                  <h2>Stron www Kraków — Ile kosztuje stworzenie strony internetowej?</h2>
                  <p>
                    Cena strony internetowej zależy od zakresu: prosty projekt strony www kosztuje mniej niż rozbudowany 
                    portal internetowy z dedykowanymi funkcjonalnościami. Przy wycenie bierzemy pod uwagę dopasowanie strony 
                    do potrzeb Twojej strony internetowej i obsługi strony po uruchomieniu.
                  </p>
                  
                  <h2>Google — Jak pozycjonowanie stron www wpływa na widoczność?</h2>
                  <p>
                    SEO strony i pozycjonowanie stron www to klucz do zwiększenia ruchu z Google. Skuteczne strony zawierają 
                    zoptymalizowane treści, techniczne SEO zgodne ze standardami oraz szybkość ładowania, co poprawia 
                    działanie strony i pozycję w wynikach wyszukiwania.
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
                        city.href === "/strony-internetowe-krakow" 
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
                  Odpowiedzi na pytania dotyczące tworzenia stron w Krakowie.
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Gotowy na profesjonalną stronę internetową w Krakowie?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Krakowa i całej Polski.
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

export default StronyInternetoweKrakow;
