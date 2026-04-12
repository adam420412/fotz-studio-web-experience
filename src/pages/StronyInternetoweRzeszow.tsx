import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Monitor,
  Code,
  Smartphone,
  ShoppingCart,
  Zap,
  Globe,
  Clock,
  TrendingUp,
  Palette,
  Search,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

export default function StronyInternetoweRzeszow() {
  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Strony internetowe", url: "/strony-internetowe" },
    { name: "Rzeszów", url: "/strony-internetowe/rzeszow" },
  ];

  const serviceTypes = [
    {
      icon: Monitor,
      title: "Strony wizytówka",
      desc: "Prezentacja Twojej firmy w internecie. Podstawowe informacje, galeria, formularz kontaktowy. Idealne dla małych firm i usług. Budują zaufanie klientów.",
      price: "2 500 - 4 500 zł",
    },
    {
      icon: ShoppingCart,
      title: "Sklepy internetowe",
      desc: "Pełnofunkcyjne platformy e-commerce z integracją płatności, zarządzaniem magazynem, logistyką. Sprzedawaj 24/7 bez granic geograficznych.",
      price: "8 000 - 25 000 zł",
    },
    {
      icon: Globe,
      title: "Portale i serwisy",
      desc: "Duże projekty z zaawansowaną funkcjonalnością. Systemy zarządzania treścią, profile użytkowników, forum, blog, multimedia. Dla ambitnych projektów.",
      price: "25 000 - 100 000 zł+",
    },
    {
      icon: Code,
      title: "Aplikacje webowe",
      desc: "Zaawansowane narzędzia online. Systemy CRM, ERP, platformy SaaS. Przepisujemy procesy biznesowe do kodu dla maksymalnej efektywności.",
      price: "50 000 - 300 000 zł+",
    },
  ];

  const whyChooseUs = [
    {
      icon: TrendingUp,
      title: "SEO od początku",
      desc: "Każdą stronę budujemy myśląc o wyszukiwarkach. Czytelna struktura, szybkość, responsywność, meta tagi, schemat danych. Wynik: widoczność w Google.",
    },
    {
      icon: Smartphone,
      title: "Mobile-first design",
      desc: "70% użytkowników na mobilach. Budziemy strony które działają idealnie na telefonach, tabletach i komputerach. Testujemy na 10+ urządzeniach.",
    },
    {
      icon: Zap,
      title: "Szybkość błyskawiczna",
      desc: "Strona wolna = klienci zaraz odchodzą. Optymalizujemy kod, obrazy, cache. Celujemy w ładowanie poniżej 2 sekund na mobilach.",
    },
    {
      icon: Clock,
      title: "CMS WordPress",
      desc: "Łatwe zarządzanie bez kodowania. Dodawaj artykuły, zdjęcia, zmień treści sam. WordPress — najpopularniejszy system. Ty jesteś szefem.",
    },
    {
      icon: Search,
      title: "Wsparcie po wdrożeniu",
      desc: "Nie znikamy po oddaniu strony. Pomagamy z drobnymiFixami, aktualizacjami, copywritingiem. Dostępni mailowo i telefonicznie.",
    },
    {
      icon: Palette,
      title: "Design na miarę",
      desc: "Każda strona jest unikalna. Projektujemy biorąc pod uwagę branżę, konkurencję, grupy docelowe. Profesjonalny wygląd = zaufanie klientów.",
    },
  ];

  const pricingTable = [
    {
      title: "Wizytówka",
      basePrice: "2 500",
      maxPrice: "4 500",
      pages: "3-5 stron",
      features: [
        "Responsywny design",
        "Formularz kontaktowy",
        "Integracja map",
        "SEO podstawowe",
        "SSL certyfikat",
        "Hosting 1 rok",
        "Czas realizacji: 2-3 tygodnie",
      ],
    },
    {
      title: "Standard",
      basePrice: "5 000",
      maxPrice: "9 000",
      pages: "5-15 stron",
      features: [
        "Wszystko z wizytówki",
        "WordPress CMS",
        "Blog integrowany",
        "Galeria zdjęć",
        "SEO rozszerzone",
        "Google Analytics 4",
        "Czas realizacji: 3-4 tygodnie",
      ],
      highlight: true,
    },
    {
      title: "E-commerce",
      basePrice: "8 000",
      maxPrice: "25 000",
      pages: "Nieograniczone",
      features: [
        "Sklep internetowy",
        "Zarządzanie produktami",
        "Integracja płatności",
        "Zarządzanie zamówieniami",
        "SEO dla e-commerce",
        "Bezpieczeństwo PCI-DSS",
        "Czas realizacji: 4-8 tygodni",
      ],
    },
  ];


  const faqItems = [
    {
      question: "Ile czasu trwa stworzenie strony internetowej w Rzeszowie?",
      answer:
        "Czas zależy od złożoności. Strona wizytówka: 2-3 tygodnie. Strona standard z blogiem: 3-4 tygodnie. Sklep internetowy: 4-8 tygodni. Aplikacja zaawansowana: 2-6 miesięcy. Zawsze ustalamy terminy przed rozpoczęciem prac.",
    },
    {
      question: "Ile kosztuje strona internetowa?",
      answer:
        "Wizytówka: 2500-4500 zł. Standard z WordPressem: 5000-9000 zł. E-commerce: 8000-25000 zł. Cena zależy od liczby podstron, funkcjonalności, zakresu SEO. Dajemy wycenę po rozmowie i analizie Twoich potrzeb. Nie ma ukrytych kosztów.",
    },
    {
      question: "Czy wybiercze WordPress czy gotowy builder?",
      answer:
        "WordPress jest standardem przemysłu. Masz dostęp do kodu, możesz zainstalować wtyczki, zmienić cokolwiek. Builderów (Wix, Webflow) polecamy tylko dla stron bardzo prostych bez planów rozwoju. WordPress: skalowalne, bezpieczne, SEO-friendly. To inwestycja na lata.",
    },
    {
      question: "Czy strona będzie responsywna na telefonach?",
      answer:
        "Oczywiście. Wszystkie nasze strony są mobile-first. Testujemy na iPhone, Androidzie, różnych rozdzielczościach ekranu. Google ranguje mobile-first — jeśli strona nie działa na telefonie, SEO będzie słabe. Responsywność to obowiązkowe minimum.",
    },
    {
      question: "Czy dostaję dostęp do edycji strony?",
      answer:
        "Tak. W każdej umowie dostarczamy dostęp do panelu WordPress. Możesz dodawać artykuły, zmieniaćtreści, publikować posty sam. Jeśli coś pójdzie nie tak, jesteśmy dostępni telefonicznie lub mailowo. Jesteś właścicielem strony — my tylko Ci pomagamy.",
    },
    {
      question: "Czy moja strona będzie widoczna w Google?",
      answer:
        "Budujemy każdą stronę z SEO na uwadze. Czytelna struktura, szybkie ładowanie, mobilna responsywność, meta tagi, schemat danych, wewnętrzne linki. Po wdrożeniu strona jest zarejestrowana w Google Search Console. Widoczność to proces — wymagane też wsparcie linkowe, content marketing, ale dajemy solidne fundamenty.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Strony Internetowe Rzeszów | Tworzenie Stron WWW"
        description="Strony internetowe Rzeszów — profesjonalne tworzenie stron www, projektowanie stron, sklepy e-commerce i SEO dla firm. Fotz Studio."
        canonical="https://fotz.pl/strony-internetowe/rzeszow"
        keywords="strony internetowe rzeszów, tworzenie stron internetowych rzeszów, strony www rzeszów, projektowanie stron rzeszów, agencja webdesign rzeszów, sklep internetowy rzeszów"
      />

      <ServiceSchema
        name="Strony Internetowe Rzeszów"
        description="Profesjonalne tworzenie stron internetowych dla firm z Rzeszowa."
        provider="Fotz Studio"
        areaServed="Rzeszów"
      />
      <BreadcrumbSchema items={breadcrumbs.map(item => ({ ...item, url: `https://fotz.pl${item.url}` }))} />
      <FAQSchema items={faqItems} />

      <Layout>
        {/* Hero */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />
          </div>

          <div className="absolute top-32 right-[15%] hidden lg:block">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
              <Globe className="w-10 h-10 text-primary" />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <FadeInView className="text-center max-w-5xl mx-auto">
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                  <Globe className="w-4 h-4" />
                  Strony WWW Rzeszów
                  <Globe className="w-4 h-4" />
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-8 leading-tight">
                Strony Internetowe <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">Rzeszów</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                <strong className="text-foreground">Profesjonalna strona internetowa to podstawa sukcesu każdej firmy.</strong> Tworzymy strony www, które wyglądają świetnie i skutecznie pozyskują klientów dla rzeszowskich firm. SEO od początku, responsywny design, szybkość i wsparcie po wdrożeniu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="group text-base px-8 py-6 shadow-lg shadow-primary/20">
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="group text-base px-8 py-6 border-2">
                  <a href="tel:+48790814814">
                    Zadzwoń: +48 790 814 814
                  </a>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>
        {/* Typy stron i usługi */}
        <FadeInView className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Nasze usługi
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Typy stron internetowych
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Każdy projekt jest dostosowany do Twoich potrzeb i budżetu. Od prostej wizytówki po zaawansowane systemy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {serviceTypes.map((service, index) => {
                const Icon = service.icon;
                return (
                  <FadeInView key={index} delay={index * 0.1} className="group p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.desc}</p>
                        <div className="text-sm font-medium text-primary">{service.price}</div>
                      </div>
                    </div>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </FadeInView>

        {/* Dlaczego my */}
        <FadeInView className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Nasze przewagi
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Dlaczego warto nam zaufać?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                6 najważniejszych cech naszej pracy tworzenia stron internetowych w Rzeszowie.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <FadeInView key={index} delay={index * 0.05} className="group p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </FadeInView>
                );
              })}
            </div>
          </div>
        </FadeInView>

        {/* Mobile-first design */}
        <FadeInView className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                  Responsywny design
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  Zawsze dostępna na każdym urządzeniu
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  70% użytkowników internetu korzysta ze smartfonów. Każda strona którą budujemy jest testowana na iPhone, Androidzie, tabletach i komputerach. Responsywność to nie opcja — to obowiązek.
                </p>
                <ul className="space-y-3">
                  {[
                    "Testowanie na 10+ urządzeniach",
                    "Szybkość ładowania poniżej 2 sekund",
                    "Czytelne menu na telefonach",
                    "Dotyk-friendly przyciski",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center min-h-[400px]">
                  <Smartphone className="w-32 h-32 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* WordPress CMS */}
        <FadeInView className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative order-2 lg:order-1">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center min-h-[400px]">
                  <Code className="w-32 h-32 text-primary/40" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                  Zarządzanie treścią
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  WordPress — standardowy system
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  WordPress zasila ponad 40% wszystkich stron w internecie. Dlaczego? Ponieważ jest uniwersalny, bezpieczny i łatwy w obsłudze. Po wdrożeniu Ty zarządzasz swoją stroną bez kodowania.
                </p>
                <ul className="space-y-3">
                  {[
                    "Dodawaj artykuły i zdjęcia sam",
                    "Zmień tekst i grafiki w minutę",
                    "Instaluj wtyczki i rozszerzenia",
                    "Pełny dostęp do kodu i bazy danych",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </FadeInView>

        {/* Cennik */}
        <FadeInView className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Transparent pricing
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Cennik stron internetowych
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Przejrzyste ceny bez ukrytych kosztów. Każdy pakiet dostosowany do Twoich potrzeb.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTable.map((tier, index) => (
                <FadeInView key={index} delay={index * 0.1} className={`rounded-2xl border transition-all ${tier.highlight ? "border-primary/50 bg-card shadow-lg shadow-primary/10 relative" : "border-border/50 bg-background"} overflow-hidden`}>
                  {tier.highlight && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50" />
                  )}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{tier.basePrice}</span>
                      <span className="text-muted-foreground"> - {tier.maxPrice} zł</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{tier.pages}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full" variant={tier.highlight ? "default" : "outline"}>
                      <Link to="/kontakt">Zamów teraz</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>

            <div className="mt-16 p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground">
                Ceny są orientacyjne i mogą się różnić w zależności od złożoności projektu. <strong>Zarezerwuj bezpłatną konsultację</strong> i otrzymaj wycenę dostosowaną do Twoich potrzeb.
              </p>
            </div>
          </div>
        </FadeInView>

        {/* FAQ */}
        <FadeInView className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                Najczęstsze pytania
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Odpowiadamy na najczęstsze pytania o tworzenie stron internetowych w Rzeszowie.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-xl px-6 bg-background">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </FadeInView>

        {/* SEO Article Section */}
        <FadeInView className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Strony internetowe Rzeszów — rynek i specyfika Podkarpacia
              </h2>
              <p className="text-lg text-muted-foreground">
                Rzeszów to najszybciej rozwijające się miasto w Polsce i stolica województwa podkarpackiego. Słynna "Dolina Lotnicza" — klaster ponad 200 firm lotniczych i kosmicznych (Pratt &amp; Whitney, MTU Aero Engines, Safran, Airbus) — sprawia, że Rzeszów przyciąga inwestorów i specjalistów z całego świata. Do tego prężna scena startupów, rosnący sektor IT, silna branża medyczna i akademicka (UR, PRz, UM) tworzą wymagający, dynamiczny rynek online.
              </p>
              <p className="text-lg text-muted-foreground">
                Fotz Studio tworzy strony internetowe dla firm z Rzeszowa i całego Podkarpacia w modelu zdalnym — bez kompromisów w jakości. Obsługujemy zarówno lokalne firmy usługowe, jak i rzeszowskie firmy technologiczne potrzebujące stron w kilku językach. Każdy projekt realizuje nasz własny zespół z Poznania: projektant, developer i SEO specialist — żadnych podwykonawców.
              </p>

              <h2 className="text-3xl font-heading font-bold pt-6">
                Tworzenie stron internetowych Rzeszów — jak działamy?
              </h2>
              <p className="text-lg text-muted-foreground">
                Każdą stronę internetową dla rzeszowskiej firmy zaczynamy od bezpłatnej konsultacji przez Teams lub telefon. Omawiamy cel strony, konkurencję, grupę docelową i budżet. Następnie tworzymy brief kreatywny i analizę konkurencji — sprawdzamy, które strony rankują w Google dla Twoich słów kluczowych i jak wyróżnić Twój serwis. Projekt graficzny w Figma jest akceptowany przez Ciebie przed startem kodowania — wiesz, jak będzie wyglądać strona, zanim zostanie zbudowana.
              </p>
              <p className="text-lg text-muted-foreground">
                Strony firmowe realizujemy w 4–8 tygodni, strony wizytówkowe w 2–3 tygodnie. Po wdrożeniu dostajesz pełne dostępy (hosting, FTP, CMS) i 30 dni bezpłatnej opieki technicznej. Firmy z Rzeszowa, które potrzebują kampanii reklamowej, mogą też skorzystać z naszych landing page dla Google Ads.
              </p>

              <h2 className="text-3xl font-heading font-bold pt-6">
                SEO dla firm z Rzeszowa — lokalna widoczność w Google
              </h2>
              <p className="text-lg text-muted-foreground">
                Każda strona, którą tworzymy dla rzeszowskich firm, ma wbudowane podstawowe SEO: meta tagi, schema LocalBusiness z danymi adresowymi Rzeszowa i Podkarpacia, szybkość Core Web Vitals i poprawna architektura URL. To przekłada się na szybszą indeksację i lepszą widoczność w Google Maps oraz organicznych wynikach wyszukiwania dla lokalnych zapytań.
              </p>
              <p className="text-lg text-muted-foreground">
                Jeśli chcesz kompleksowego pozycjonowania lub kampanii Google Ads dla firmy z Rzeszowa, skontaktuj się z nami — oferujemy pełen pakiet marketingu online.
              </p>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-4">
                <Link to="/kontakt" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                  <ArrowRight className="w-4 h-4" />
                  Zarezerwuj konsultację
                </Link>
              </div>
            </div>
          </div>
        </FadeInView>

        <ContactSection />
      </Layout>
    </>
  );
}