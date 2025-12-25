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
  Server,
  FileCode
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

const StronyInternetoweKatowice = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Profesjonalne strony www oraz witryny online dla firm z Katowic." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Kompleksowa optymalizacja SEO zwiększająca widoczność w wyszukiwarkach." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Responsywne strony internetowe z profesjonalnym projektem graficznym." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych z pełnymi integracjami płatności." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: Server, title: "Hosting i domeny", desc: "Kompleksowy hosting i pomoc w rejestracji domeny." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Jesteśmy partnerem, nie tylko wykonawcą - rozumiemy Twoje cele biznesowe." },
    { icon: Smartphone, title: "Responsywność", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczeństwo", desc: "Certyfikat SSL, kopie zapasowe i regularne aktualizacje." },
    { icon: Headphones, title: "Wsparcie techniczne", desc: "Kompleksowa obsługa stron internetowych po uruchomieniu." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa / Landing page", desc: "Prosta strona www z podstawowym SEO.", price: "od 1 500 zł netto" },
    { title: "Strona firmowa", desc: "Profesjonalna strona internetowa z zaawansowanym SEO.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy e-commerce", desc: "Zaawansowana platforma e-commerce z kompleksową optymalizacją.", price: "od 7 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Rozmowa i research", desc: "Poznajemy cele biznesowe i potrzeby Twojej firmy z Katowic." },
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
      question: "Strony internetowe Katowice: Co to obejmuje i dlaczego warto?",
      answer: "Usługa stron internetowych Katowice obejmuje projekt graficzny, projektowanie stron internetowych, budowę strony oraz wdrożenie responsywnej witryny. Lokalna agencja ma doświadczenie w tworzeniu stron dla firm z Katowic, zna potrzeby klientów i może szybciej reagować przy obsłudze stron internetowych."
    },
    {
      question: "Tworzenie stron www Katowice: Jak wygląda proces?",
      answer: "Proces tworzenia stron www zaczyna się od analizy wymagań i zdefiniowania celu nowej strony internetowej, przez projekt graficzny, aż po budowę strony i testy na różnych urządzeniach. Oferujemy projektowanie stron internetowych w oparciu o najlepsze praktyki SEO i responsywny design."
    },
    {
      question: "Projektowanie stron internetowych Katowice: Ile kosztuje strona?",
      answer: "Koszt strony internetowej zależy od zakresu prac: prosty landing page, sklep internetowy czy rozbudowana witryna firmowa. Cena uwzględnia projekt graficzny, budowę strony, integracje, pozycjonowanie i późniejszą obsługę stron internetowych."
    },
    {
      question: "Profesjonalne strony internetowe: Jaka strona będzie najlepsza?",
      answer: "Jaka strona będzie najlepsza zależy od celów Twojej firmy — czy potrzebujesz strony firmowej, sklepu internetowego czy wizytówki online. Profesjonalne strony internetowe powinny być responsywne, zoptymalizowane pod wyszukiwarki i zaprojektowane z myślą o konwersji."
    },
    {
      question: "Projekt graficzny: Jak ważny jest w budowie strony?",
      answer: "Projekt graficzny ma kluczowe znaczenie — wpływa na pierwsze wrażenie, użyteczność i konwersję. Oferujemy projekt graficzny dostosowany do identyfikacji wizualnej firmy, co pomaga w budowaniu rozpoznawalności i zaufania."
    },
    {
      question: "Obsługa stron internetowych: Czy oferujecie wsparcie po uruchomieniu?",
      answer: "Tak — oferujemy kompleksową obsługę stron internetowych obejmującą aktualizacje, backupy, optymalizację wydajności i poprawki bezpieczeństwa. Zapewniamy, że witryna działa bez przerw i pomaga przyciągać więcej klientów."
    },
    {
      question: "Pozycjonowanie: Czy budowa strony wpływa na widoczność w wyszukiwarkach?",
      answer: "Tak — budowa strony ma wpływ na pozycjonowanie. Struktura witryny, responsywny design, szybkość ładowania i optymalizacja treści decydują o widoczności w wyszukiwarkach. Projektujemy strony w oparciu o zasady SEO, by zwiększyć ruch organiczny."
    },
    {
      question: "Stworzenie strony internetowej: Ile czasu zajmuje?",
      answer: "Czas stworzenia strony zależy od skomplikowania projektu — od kilku dni dla prostej strony do kilku tygodni dla rozbudowanych witryn i sklepów internetowych. Podajemy harmonogram po ustaleniu wymagań i zakresu prac."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Strony Internetowe Katowice | Tworzenie Stron WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Strony internetowe Katowice. Profesjonalne projektowanie i tworzenie stron www, sklepy e-commerce, pozycjonowanie SEO. Tworzenie stron dla firm z Katowic i Śląska." 
        />
        <meta name="keywords" content="strony internetowe katowice, tworzenie stron www katowice, projektowanie stron katowice, sklepy internetowe katowice, strona www katowice, www katowice" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-katowice" />
      </Helmet>
      
      <ServiceSchema 
        name="Strony Internetowe Katowice - Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Katowic i Śląska. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Katowice"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Katowice", url: "https://fotz.pl/strony-internetowe-katowice" },
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
                Strony WWW Katowice
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Strony Internetowe <span className="text-gradient">Katowice</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dzisiejszych czasach <strong>strona internetowa to podstawa dla każdej firmy</strong>. 
                Szczególnie w dynamicznie rozwijających się miastach, takich jak Katowice, obecność online jest kluczowa dla sukcesu. 
                <Link to="/strony-internetowe" className="text-primary hover:underline"> Tworzenie stron www</Link> to inwestycja, 
                która przynosi wymierne korzyści.
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

        {/* Dlaczego warto Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Dlaczego warto tworzyć strony internetowe w Katowicach?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Inwestycja w <strong>stronę internetową</strong> dla Twojej firmy w Katowicach to strategiczny krok w kierunku rozwoju. 
                    Dobrze zaprojektowana strona www staje się wizytówką firmy online, umożliwiając dotarcie do szerszego grona odbiorców. 
                    <strong>Posiadanie strony internetowej zwiększa wiarygodność Twojej firmy</strong> w oczach potencjalnych klientów.
                  </p>
                  
                  <h3>Korzyści z lokalnego podejścia</h3>
                  <p>
                    Wybierając <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline">agencję</Link> z 
                    doświadczeniem do tworzenia stron www, zyskujesz partnera, który doskonale rozumie specyfikę lokalnego rynku. 
                    Specjalista potrafi zaprojektować stronę dopasowaną do potrzeb lokalnych klientów z Katowic i całego Śląska.
                  </p>
                  
                  <h3>Wsparcie dla lokalnych firm</h3>
                  <p>
                    Strona internetowa jest nie tylko wizytówką, ale również skutecznym narzędziem marketingowym. 
                    <strong>Stworzenie strony internetowej, dostosowanej do Twoich potrzeb, to fundament budowania silnej pozycji na rynku.</strong>
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
                  Usługi tworzenia stron internetowych w Katowicach
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla firm z Katowic - od projektu graficznego po <Link to="/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link>.
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

        {/* Profesjonalne projektowanie Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Profesjonalne projektowanie stron www</h2>
                  <p>
                    Specjalizujemy się w <strong>projektowaniu responsywnych stron internetowych</strong>. Rozumiemy, że wygląd strony 
                    ma kluczowe znaczenie, dlatego do każdego klienta podchodzimy indywidualnie, oferując profesjonalny projekt strony 
                    oparty na naszym doświadczeniu. Dbamy o to, aby każda witryna była estetyczna, funkcjonalna i idealnie dopasowana 
                    do urządzeń mobilnych.
                  </p>
                  <p>
                    Wykorzystujemy różne systemy zarządzania treścią (CMS), takie jak WordPress, aby umożliwić klientom samodzielne 
                    edytowanie strony internetowej. Nasze usługi obejmują <Link to="/strony-internetowe" className="text-primary hover:underline">projektowanie stron www</Link> i ich wdrażanie.
                  </p>
                  
                  <h2>Kompleksowe usługi <Link to="/pozycjonowanie" className="text-primary hover:underline">SEO</Link></h2>
                  <p>
                    Naszą misją jest oferowanie stron internetowych, które efektywnie docierają do szerokiego grona odbiorców. 
                    <strong>Optymalizacja SEO jest kluczowa dla widoczności Twojej strony w wyszukiwarkach</strong>, dlatego oferujemy 
                    kompleksowe usługi SEO. Działania SEO to fundament skutecznego marketingu.
                  </p>
                  
                  <h2>Hosting i rejestracja domeny</h2>
                  <p>
                    Oprócz projektowania stron www i optymalizacji SEO, zapewniamy również kompleksowy hosting i pomoc w rejestracji domeny. 
                    Rozumiemy, że stabilny hosting jest niezbędny dla sprawnego działania Twojej strony internetowej.
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
                  Wycena projektu strony internetowej
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie stosujemy sztywnego cennika – każda wycena jest dopasowywana do indywidualnych celów biznesowych. 
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

        {/* Ekspert Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Porozmawiaj z ekspertem w Katowicach</h2>
                  
                  <h3>Jak wybrać odpowiednią agencję?</h3>
                  <p>
                    Wybór odpowiedniej <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline">agencji</Link> do 
                    tworzenia stron www w Katowicach to kluczowa decyzja. Wybierając agencję, upewnij się, że rozumie Twoje potrzeby i cele biznesowe. 
                    Właściciel firmy szuka partnera, nie tylko wykonawcy, i oczekuje jasnego procesu i efektów.
                  </p>
                  
                  <h3>Co powinno zawierać kompleksowe podejście?</h3>
                  <p>
                    Kompleksowe podejście do tworzenia stron internetowych powinno obejmować szeroki zakres usług. 
                    Oprócz projektowania i wdrażania stron internetowych, ważne jest również branding i identyfikacja wizualna, 
                    <Link to="/social-media" className="text-primary hover:underline"> obsługa social media</Link>, video marketing i produkcja treści. 
                    Agencja powinna również oferować kampanie reklamowe Meta Ads i Google Ads oraz systemy pozyskiwania leadów.
                  </p>
                  
                  <h3>Współpraca z klientem na każdym etapie</h3>
                  <p>
                    Współpraca z klientem na każdym etapie realizacji projektu to dla nas priorytet. 
                    Zapewniamy stały kontakt, oferując spotkania osobiste, kontakt telefoniczny i mailowy. 
                    <strong>Stworzenie strony internetowej to dla nas partnerska współpraca.</strong>
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
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm z Katowic i całego Śląska.
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
                        city.href === "/strony-internetowe-katowice" 
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
                  Często Zadawane Pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania dotyczące tworzenia stron w Katowicach.
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
                  Gotowy na profesjonalną stronę internetową w Katowicach?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Katowic i całego Śląska.
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

export default StronyInternetoweKatowice;
