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
    { icon: Sparkles, title: "Lokalna znajomość rynku", desc: "Śląska metropolia to miliony potencjalnych klientów w zasięgu. Tworzymy strony dla firm chcących dotrzeć do całego Górnośląskiego Obszaru Metropolitalnego." },
  ];

  const pricing = [
    { title: "Landing Page", desc: "Strona wizytówkowa prezentująca firmę", price: "od 2 000 zł", features: ["Do 5 podstron", "Responsywny design", "Podstawowe SEO", "Formularz kontaktowy", "Certyfikat SSL"] },
    { title: "Strona Firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjami", price: "od 5 000 zł", popular: true, features: ["Do 15 podstron", "Zaawansowane SEO", "Blog firmowy", "Integracja social media", "System CMS", "Wsparcie techniczne"] },
    { title: "Sklep E-commerce", desc: "Platforma sprzedażowa z integracjami", price: "od 8 000 zł", features: ["Nieograniczona liczba produktów", "Panel administracyjny", "Integracje płatności", "Optymalizacja konwersji", "Narzędzia marketingowe"] },
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
      <SEOHead
        title="Strony Internetowe Katowice | Tworzenie i Projektowanie Stron WWW | Fotz Studio"
        description="Strony internetowe Katowice — profesjonalne tworzenie stron www, projektowanie stron internetowych, sklepy e-commerce i SEO dla firm z Katowic. Fotz Studio."
        canonical="https://fotz.pl/uslugi/strony-internetowe/katowice"
        keywords="strony internetowe katowice, tworzenie stron www katowice, projektowanie stron katowice, sklepy internetowe katowice, strona www katowice, www katowice"
      />
      
      <ServiceSchema 
        name="Strony Internetowe Katowice - Tworzenie Stron WWW"
        description="Profesjonalne tworzenie stron internetowych dla firm z Katowic i Śląska. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Katowice"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/uslugi/strony-internetowe" },
          { name: "Katowice", url: "https://fotz.pl/uslugi/strony-internetowe/katowice" },
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
                Strony WWW Katowice
              </span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 sm:mb-6">
                Strony Internetowe <span className="text-gradient">Katowice</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
                W dzisiejszych czasach <strong>strona internetowa to podstawa dla każdej firmy</strong>. 
                Szczególnie w dynamicznie rozwijających się miastach, takich jak Katowice, obecność online jest kluczowa dla sukcesu. 
                <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline"> Tworzenie stron www</Link> to inwestycja, 
                która przynosi wymierne korzyści.
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

        {/* Katowice Stats Section */}
        <section className="py-12 bg-card/40 border-y border-border/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-8">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">Śląsk w liczbach</span>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-2">Katowice i Górnośląski Obszar Metropolitalny</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  Metropolia katowicka skupia ponad 2 mln mieszkańców — jeden z największych rynków konsumenckich w Polsce Central-Wschodniej.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Users, value: "2 mln+", label: "mieszkańców metropolii" },
                  { icon: Building2, value: "120 tys.", label: "firm na Śląsku" },
                  { icon: BarChart3, value: "Top 3", label: "rynek e-commerce w PL" },
                  { icon: Globe, value: "79%", label: "zakupów zaczyna online" },
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

        {/* Katowice local context section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
                  <h2>Strony internetowe dla firm ze Śląska — branże, w których działamy</h2>
                  <p>
                    Katowice to centrum gospodarcze województwa śląskiego, skupiające firmy z branży przemysłowej,
                    hutniczej, IT oraz sektora usługowego. <strong>Tworzymy strony internetowe dla firm z Katowic</strong>,
                    które chcą zwiększyć swoją widoczność online i zbudować silną pozycję w Internecie.
                    Nasze doświadczenie obejmuje sektory:
                  </p>
                  <ul>
                    <li><strong>Przemysł i produkcja</strong> — strony B2B dla firm produkcyjnych i dostawców komponentów</li>
                    <li><strong>Usługi dla biznesu</strong> — kancelarie prawne, doradztwo finansowe, firmy konsultingowe</li>
                    <li><strong>Handel i e-commerce</strong> — sklepy internetowe obsługujące rynek śląski i ogólnopolski</li>
                    <li><strong>Gastronomia i hotelarstwo</strong> — restauracje, hotele i obiekty eventowe w metropolii</li>
                  </ul>
                  <p>
                    Znamy specyfikę rynku śląskiego — rozumiemy potrzeby firm działających w <strong>Górnośląskim Obszarze Metropolitalnym (GOM)</strong>,
                    który łączy 41 miast, w tym Gliwice, Bytom, Sosnowiec, Zabrze i Chorzów. Tworzymy strony,
                    które docierają do klientów z całego regionu.
                  </p>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Dlaczego warto Section */}
        <section className="py-12 md:py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-4 sm:mb-6">
                  Dlaczego warto tworzyć strony internetowe w Katowicach?
                </h2>
                <div className="prose prose-invert max-w-none prose-sm sm:prose-base">
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
        <section className="py-16 md:py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 md:mb-16">
                <span className="text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 md:mb-4 block">Usługi</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
                  Usługi tworzenia stron internetowych w Katowicach
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla firm z Katowic - od projektu graficznego po <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie stron</Link>.
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
                    edytowanie strony internetowej. Nasze usługi obejmują <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">projektowanie stron www</Link> i ich wdrażanie.
                  </p>
                  
                  <h2>Kompleksowe usługi <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">SEO</Link></h2>
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

        {/* Ekspert Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Strony internetowe Katowice — centrum biznesu Górnośląskiego Obszaru Metropolitalnego</h2>
                  <p>
                    Katowice to centrum GOM-u (Górnośląski Obszar Metropolitalny) — konurbacji 2,2 mln mieszkańców, jednej z największych aglomeracji w Polsce. Dla firm z Katowic, Gliwic, Bytomia, Zabrza, Chorzowa czy Rudy Śląskiej, dobrze zaprojektowana <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">strona internetowa</Link> to kluczowe narzędzie dotarcia do klientów z całego Śląska.
                  </p>
                  <p>
                    Katowicka gospodarka przechodzi transformację: od przemysłu ciężkiego (węgiel, stal) do usług, technologii (GovTech, FinTech) i kultury (Muzeum Śląskie, NOSPR, Spodek jako symbol nowoczesności). Firmy z regionu potrzebują stron, które komunikują nowoczesność i wiarygodność — zarówno dla klientów B2C, jak i wymagających partnerów B2B.
                  </p>

                  <h2>Branże w Katowicach, dla których tworzymy strony www</h2>
                  <p>
                    Specjalizujemy się w tworzeniu stron internetowych dla firm z kluczowych sektorów katowickiego rynku: <strong>górnictwa i energetyki</strong> (dostawcy i podwykonawcy JSW, Tauron), <strong>budownictwa i nieruchomości</strong> (dynamiczny rynek deweloperski GOM), <strong>usług medycznych i rehabilitacyjnych</strong>, <strong>branży motoryzacyjnej</strong> (liczne salony i serwisy w aglomeracji), <strong>HoReCa</strong> (restauracje w centrum Katowic, hotele przy Spodku) oraz startupów technologicznych z Katowickiej Strefy Ekonomicznej.
                  </p>

                  <h2>Dlaczego Fotz Studio dla firm ze Śląska?</h2>
                  <p>
                    Tworzymy strony w 100% zdalnie dla firm z całej Polski — w tym z Katowic i całego Śląska. Nasz proces jest przejrzysty: bezpłatna konsultacja → projekt UX/UI w Figma → wdrożenie → testy → launch. Wszystkie strony są optymalizowane pod lokalne słowa kluczowe (np. &quot;strony internetowe Katowice&quot;, &quot;agencja marketingowa Śląsk&quot;) i mają pełne SEO techniczne w cenie.
                  </p>
                  <p>
                    Potrzebujesz strony dla firmy z Katowic lub z całego Śląska? <Link to="/kontakt" className="text-primary hover:underline">Umów bezpłatną konsultację</Link> — odpowiemy w ciągu 24 godzin.
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

        <CityLinksSection currentCity="Katowice" />

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
              Strony internetowe Katowice — rynek lokalny i specyfika regionu
            </h2>
            <p className="text-muted-foreground mb-4">
              Katowice to serce Górnośląskiego Obszaru Metropolitalnego — największej aglomeracji w Polsce z ponad 2 milionami mieszkańców. Transformacja z miasta przemysłowego w centrum kultury, technologii i eventów (NOSPR, Spodek) przyciąga firmy z branż kreatywnych, IT, logistyki i nowych technologii. Strony internetowe dla firm z Katowic muszą wyróżniać się na tle silnej regionalnej konkurencji.
            </p>
            <p className="text-muted-foreground mb-6">
              Fotz Studio tworzy strony internetowe dla firm z Katowic w modelu w pełni zdalnym — bez kompromisów w jakości. Każdy projekt realizuje nasz własny zespół: projektant UX/UI, developer i specjalista SEO. Żadnych podwykonawców, żadnych szablonów kupowanych hurtowo. Efekt? Strony, które wyróżniają się na lokalnym rynku i konwertują odwiedzających w klientów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Projektowanie stron internetowych Katowice — nasz proces od A do Z
            </h2>
            <p className="text-muted-foreground mb-4">
              Tworzenie strony internetowej dla firmy z Katowic zaczynamy od bezpłatnej konsultacji — omawiamy cel strony, grupę docelową, budżet i harmonogram. Następnie przygotowujemy brief kreatywny i analizę konkurencji. Projekt graficzny powstaje w Figma i jest akceptowany przez Ciebie przed startem kodowania. Po uruchomieniu strony masz pełne dostępy i możesz samodzielnie edytować treści.
            </p>
            <p className="text-muted-foreground mb-6">
              Czas realizacji strony wizytówkowej to 2–3 tygodnie, strony firmowej 4–8 tygodni. Nasze strony są objęte 30-dniową gwarancją po wdrożeniu — wszelkie błędy po uruchomieniu poprawiamy bezpłatnie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              SEO dla stron internetowych w Katowice — lokalna widoczność w Google
            </h2>
            <p className="text-muted-foreground mb-4">
              Każda strona internetowa, którą tworzymy dla katowickich firm, zawiera podstawowe SEO w cenie: meta tagi title i description, schema LocalBusiness z danymi adresowymi Katowic i całej Aglomeracji Górnośląskiej, szybkość Core Web Vitals i poprawna architektura nagłówków H1–H3. Dzięki temu strona startuje z solidnym fundamentem i szybciej osiąga widoczność w Google.
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

        <ContactSection city="Katowicach" />
      </Layout>
    </>
  );
};

export default StronyInternetoweKatowice;
