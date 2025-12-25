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

const StronyInternetoweWroclaw = () => {
  const services = [
    { icon: Globe, title: "Strony internetowe", desc: "Budujemy profesjonalne strony www oraz sklepy internetowe." },
    { icon: Search, title: "Pozycjonowanie SEO", desc: "Zwiększamy widoczność Twojej firmy w wyszukiwarkach." },
    { icon: Palette, title: "Projektowanie UI/UX", desc: "Tworzymy nowoczesne strony internetowe z myślą o użytkowniku." },
    { icon: ShoppingCart, title: "Sklepy e-commerce", desc: "Tworzenie sklepów internetowych Wrocław z integracjami." },
    { icon: MessageSquare, title: "Systemy CMS", desc: "WordPress, Webflow, Shopify i dedykowane rozwiązania." },
    { icon: TrendingUp, title: "Optymalizacja konwersji", desc: "Strony, które zamieniają odwiedzających w klientów." },
  ];

  const whyUs = [
    { icon: Settings, title: "Nowoczesne technologie", desc: "React, Next.js, WordPress, Webflow - dobieramy technologię do projektu strony internetowej." },
    { icon: Search, title: "SEO w standardzie", desc: "Każda strona www jest zoptymalizowana pod wyszukiwarki od pierwszego dnia." },
    { icon: Handshake, title: "Partnerskie podejście", desc: "Specjalizujemy się w tworzeniu stron skrojonych na miarę Twojej firmy." },
    { icon: Smartphone, title: "Mobile-first", desc: "Tworzymy responsywne strony internetowe działające na wszystkich urządzeniach." },
    { icon: Shield, title: "Bezpieczne strony", desc: "SSL, regularne aktualizacje, zabezpieczenia przed atakami." },
    { icon: Headphones, title: "Wsparcie po wdrożeniu", desc: "Nie zostawiamy Cię po uruchomieniu nowej strony internetowej." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa", desc: "Prosta strona www prezentująca podstawowe informacje o firmie.", price: "od 2 000 zł netto" },
    { title: "Strona firmowa", desc: "Rozbudowana strona internetowa z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł netto" },
    { title: "Sklep internetowy", desc: "Zaawansowana platforma e-commerce z integracjami płatności.", price: "od 8 000 zł netto" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy cele biznesowe i specyfikę Twojej firmy." },
    { step: "02", title: "Projekt UX/UI", desc: "Zaprojektowanie strony z naciskiem na użyteczność." },
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
    { name: "Bydgoszcz", href: "/strony-internetowe-bydgoszcz", active: false },
    { name: "Lublin", href: "/strony-internetowe-lublin", active: false },
  ];

  const faqItems = [
    {
      question: "Jakie są korzyści z posiadania strony internetowej dla firm we Wrocławiu?",
      answer: "Posiadanie strony internetowej dla firm przynosi wiele korzyści: zwiększenie widoczności online, budowanie wiarygodności, możliwość prezentacji oferty 24/7, łatwiejszy kontakt z klientami oraz potencjalne zwiększenie sprzedaży. Dobra strona www może znacząco wpłynąć na rozwój biznesu w mieście Wrocław."
    },
    {
      question: "Dlaczego warto skorzystać z usług profesjonalnej agencji do projektowania stron www?",
      answer: "Profesjonalna agencja interaktywna zapewnia kompleksowe podejście do projektowania i tworzenia stron internetowych. Eksperci zadbają o estetykę, funkcjonalność i optymalizację strony, co przekłada się na lepsze wyniki w wyszukiwarkach internetowych i pozytywne wrażenia użytkowników."
    },
    {
      question: "Czy oferujecie tworzenie sklepów internetowych we Wrocławiu?",
      answer: "Tak, specjalizujemy się w tworzeniu sklepów internetowych we Wrocławiu. Nasze usługi obejmują projektowanie i implementację funkcjonalnych, atrakcyjnych wizualnie i łatwych w obsłudze platform e-commerce, dostosowanych do indywidualnych potrzeb klienta."
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
      question: "Czy oferujecie tworzenie stron internetowych dla małych firm?",
      answer: "Oczywiście, specjalizujemy się w tworzeniu stron internetowych we Wrocławiu dla firm różnej wielkości, w tym małych przedsiębiorstw. Nasze rozwiązania są dostosowane do budżetu i potrzeb każdego klienta, zapewniając profesjonalną obecność online."
    },
    {
      question: "Jakie elementy składają się na najlepsze strony internetowe?",
      answer: "Najlepsze strony internetowe łączą w sobie atrakcyjny design, intuicyjną nawigację, szybkość ładowania, responsywność, wysokiej jakości treści oraz optymalizację SEO. Tworzymy nowoczesne strony internetowe zawierające te kluczowe elementy."
    },
    {
      question: "Czy oferujecie wsparcie po zakończeniu projektu strony www?",
      answer: "Tak, zapewniamy wsparcie techniczne i konsultacje po zakończeniu projektu. Oferujemy również usługi utrzymania i aktualizacji stron www we Wrocławiu, aby zapewnić ciągłość działania i aktualność Twojej witryny."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tworzenie Stron Internetowych Wrocław | Projektowanie WWW | FOTZ</title>
        <meta 
          name="description" 
          content="Tworzenie stron internetowych Wrocław. Projektowanie stron www, sklepy e-commerce, pozycjonowanie SEO. Profesjonalna budowa stron dla firm z Wrocławia." 
        />
        <meta name="keywords" content="tworzenie stron internetowych wrocław, strony www wrocław, projektowanie stron wrocław, sklepy internetowe wrocław, strona internetowa wrocław" />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-wroclaw" />
      </Helmet>
      
      <ServiceSchema 
        name="Tworzenie Stron Internetowych Wrocław"
        description="Profesjonalne tworzenie stron internetowych dla firm z Wrocławia. Projektowanie responsywnych stron www, sklepów e-commerce i pozycjonowanie SEO."
        provider="FOTZ Studio"
        areaServed="Wrocław"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Strony Internetowe", url: "https://fotz.pl/strony-internetowe" },
          { name: "Wrocław", url: "https://fotz.pl/strony-internetowe-wroclaw" },
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
                Strony WWW Wrocław
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                Tworzenie stron www <span className="text-gradient">Wrocław</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                W dobie intensywnej rywalizacji na rynku cyfrowym, <strong>projektowanie i tworzenie stron</strong> odgrywa 
                kluczową rolę w budowaniu wizerunku każdej firmy. Profesjonalna <strong>strona internetowa</strong> to nie 
                tylko wizytówka przedsiębiorstwa, ale i efektywne narzędzie do pozyskiwania klientów we Wrocławiu.
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
                  Czym jest profesjonalne projektowanie stron internetowych Wrocław?
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p>
                    Tworzenie <strong>profesjonalnych stron</strong> jest kluczem do zwiększenia rozpoznawalności firmy 
                    w internecie. <strong>Projektowanie stron internetowych Wrocław</strong> oznacza nie tylko estetyczny 
                    wygląd, ale również funkcjonalność, szybkość działania oraz zgodność z zasadami UX.
                  </p>
                  
                  <h3>Inwestycja w projektowanie stron internetowych</h3>
                  <p>
                    Inwestycja w <strong>projektowania stron internetowych</strong> przekłada się na lepsze wyniki biznesowe. 
                    <strong>Stworzenie strony internetowej</strong> dostosowanej do specyfiki branży, lokalnych potrzeb i 
                    wymagań algorytmów wyszukiwarek sprawia, że witryna jest łatwo dostępna oraz atrakcyjna dla klientów.
                  </p>
                  
                  <h3>Dla kogo jest projektowanie stron we Wrocławiu?</h3>
                  <p>
                    <strong>Projektowania i tworzenia stron internetowych</strong> we Wrocławiu to oferta skierowana zarówno 
                    do małych, jak i większych przedsiębiorstw. Dzięki niej zyskujesz nie tylko wygląd i funkcjonalność, 
                    ale i możliwość szybkiego wprowadzania zmian oraz optymalizowania <strong>zawartości strony</strong>.
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
                  Projektowanie stron internetowych Wrocław
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe usługi tworzenia stron www dla wrocławskich firm - od projektu graficznego po pozycjonowanie stron.
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

        {/* Wizytówka Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Strona internetowa to wizytówka każdej firmy - czy warto postawić na pozycjonowanie stron?</h2>
                  
                  <p>
                    <strong>Strona internetowa to wizytówka każdej</strong> marki w sieci. Jeśli jest starannie zaprojektowana, 
                    staje się pierwszym punktem kontaktu z klientem, budując zaufanie oraz pozytywny wizerunek. 
                    <strong>Strona internetowa</strong> umożliwia prezentację oferty, publikację informacji o produktach 
                    i usługach, a także zachęca do interakcji.
                  </p>
                  
                  <h3>Pozycjonowanie stron internetowych</h3>
                  <p>
                    Aby Twoja <strong>strona lub sklep</strong> były widoczne w internecie, warto zainwestować w 
                    <strong>pozycjonowanie stron</strong>. Dzięki odpowiedniej optymalizacji treści, kodu i linków, 
                    Twój serwis będzie pojawiał się wyżej w <strong>wyszukiwarkach internetowych</strong>, co przełoży 
                    się na większy ruch i konwersje.
                  </p>
                  
                  <h3>Profesjonalne audyty SEO</h3>
                  <p>
                    Warto pamiętać, że <strong>pozycjonowaniu stron internetowych</strong> służy nie tylko zdobywaniu 
                    lepszych pozycji, ale także długofalowemu utrzymaniu widoczności. Regularne audyty, w tym 
                    <strong>profesjonalne audyty SEO już istniejących</strong> witryn, pozwalają na bieżąco dostosowywać 
                    strategię i reagować na zmiany algorytmów.
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

        {/* Agencja Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Dlaczego agencja interaktywna z Wrocławia to dobry wybór dla Twojej strony?</h2>
                  
                  <p>
                    Wybierając <strong>agencję interaktywną</strong> z Wrocławia, zyskujesz dostęp do specjalistów, 
                    którzy <strong>specjalizują się w tworzeniu stron</strong> skrojonych na miarę. Lokalny rynek jest 
                    dynamiczny, dlatego eksperci doskonale rozumieją specyfikę <strong>miasta Wrocław</strong>.
                  </p>
                  
                  <h3>Kompleksowe rozwiązania</h3>
                  <p>
                    Taka <strong>agencja</strong> zapewni Ci nie tylko <strong>profesjonalne tworzenie stron www</strong>, 
                    ale także integracje z mediami społecznościowymi, systemami płatności czy narzędziami analitycznymi. 
                    Możesz liczyć na kompleksowe rozwiązania, w tym <strong>internetowe dla firm</strong>, a także na 
                    wsparcie w zakresie optymalizacji, która poprawia <strong>funkcjonowanie strony</strong>.
                  </p>
                  
                  <h3>Tworzenie stron internetowych Wrocław wspiera lokalny biznes</h3>
                  <p>
                    <strong>Tworzenie stron internetowych Wrocław</strong> to szansa na dotarcie do klientów z okolicy 
                    i wykorzystanie lokalnych możliwości rynkowych. Wiele osób szuka usług, wpisując w Google frazy 
                    typu "<strong>www Wrocław</strong>" czy "<strong>stron internetowych Wrocław</strong>".
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
                  <h2>Sklepy internetowe Wrocław - zwiększ zyski Twojej firmy</h2>
                  
                  <p>
                    <strong>Tworzymy profesjonalne</strong> rozwiązania, a profesjonalne <strong>strony i sklepy</strong> 
                    e-commerce znacząco zwiększają potencjał sprzedażowy. Wdrożenie funkcjonalnego <strong>sklepu 
                    internetowego</strong> z intuicyjną nawigacją, bezpiecznymi płatnościami oraz szybką realizacją 
                    zamówień przekształca odwiedzających w klientów.
                  </p>
                  
                  <h3>Tworzenie sklepów internetowych</h3>
                  <p>
                    <strong>Tworzenie sklepów internetowych</strong> i rozbudowanych platform zakupowych daje szansę 
                    na dotarcie do odbiorców nie tylko z Wrocławia, ale także spoza regionu. Łatwy dostęp do produktów, 
                    przemyślana struktura kategorii oraz integracje z mediami społecznościowymi przyczyniają się do 
                    wzrostu zainteresowania Twoimi produktami.
                  </p>
                  
                  <h3>Koszt budowy strony internetowej</h3>
                  <p>
                    <strong>Projektowanie stron i sklepów internetowych</strong> ma bezpośredni wpływ na <strong>koszt 
                    budowy strony internetowej</strong>. Cena zależy od złożoności funkcjonalności, designu, integracji 
                    oraz prac programistycznych. Jednak inwestycja w <strong>profesjonalne tworzenie stron</strong> 
                    szybko się zwraca.
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
                  Jesteśmy zespołem specjalistów z pasją do tworzenia stron internetowych dla firm.
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
                  Cennik tworzenia stron www Wrocław
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

        {/* SEO Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <div className="prose prose-invert max-w-none">
                  <h2>Strony www Wrocław i ich widoczność w internecie</h2>
                  
                  <p>
                    Wysoka jakość <strong>strony www Wrocław</strong> i <strong>stron internetowych we Wrocławiu</strong> 
                    to klucz do uzyskania lepszej widoczności w sieci. Dobrze zaprojektowane witryny, wyposażone w 
                    nowoczesne funkcje i zoptymalizowane pod kątem SEO, pomagają Twojej marce dotrzeć do szerszego 
                    grona klientów.
                  </p>
                  
                  <h3>Responsywne strony internetowe</h3>
                  <p>
                    Stawiając na <strong>responsywne strony internetowe</strong>, zadbasz o to, aby Twoja witryna działała 
                    sprawnie na wszystkich urządzeniach – od komputerów stacjonarnych, przez tablety, po smartfony. 
                    W ten sposób <strong>tworzymy responsywne strony internetowe</strong>, które są przyjazne zarówno 
                    dla klientów, jak i algorytmów Google.
                  </p>
                  
                  <h3>Wrocław i cała Polska</h3>
                  <p>
                    Działając w ramach <strong>Wrocław i cała Polska</strong>, możesz liczyć na to, że opracowane w 
                    stolicy Dolnego Śląska <strong>strony www Wrocław</strong> będą atrakcyjne nie tylko lokalnie, 
                    ale i na terenie całego kraju. <strong>Tworzymy strony internetowe dla firm</strong> o różnej 
                    skali działalności.
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
                        city.href === "/strony-internetowe-wroclaw" 
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
                  Odpowiedzi na pytania dotyczące tworzenia stron we Wrocławiu.
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
                  Gotowy na profesjonalną stronę internetową we Wrocławiu?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twoim projekcie. Bezpłatna wycena i konsultacja dla firm z Wrocławia i całej Polski.
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

export default StronyInternetoweWroclaw;
