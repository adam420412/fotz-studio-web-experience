import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, Layers, CheckCircle2, 
  ArrowRight, Search, PieChart, RefreshCw, Megaphone,
  Monitor, ShoppingCart, Video, Globe, Settings, LineChart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const GoogleAds = () => {
  const benefits = [
    { icon: Search, title: "Wyniki wyszukiwania", description: "Reklamy w momencie, gdy klient szuka Twoich usług" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Słowa kluczowe, lokalizacja, demografia" },
    { icon: BarChart3, title: "Mierzalne wyniki", description: "Śledzenie konwersji i ROI w czasie rzeczywistym" },
    { icon: DollarSign, title: "Model PPC", description: "Płacisz tylko za kliknięcia w reklamę" },
  ];

  const campaignTypes = [
    { icon: Search, title: "Sieć wyszukiwania", description: "Reklamy tekstowe w wynikach Google" },
    { icon: Globe, title: "Sieć reklamowa", description: "Banery na milionach stron internetowych" },
    { icon: ShoppingCart, title: "Google Shopping", description: "Produkty z cenami bezpośrednio w wynikach" },
    { icon: Video, title: "Reklamy YouTube", description: "Wideo przed i w trakcie filmów" },
    { icon: Monitor, title: "Performance Max", description: "Automatyczna optymalizacja we wszystkich kanałach" },
    { icon: Megaphone, title: "Remarketing", description: "Docieranie do osób, które odwiedziły stronę" },
  ];

  const processSteps = [
    { step: "01", title: "Analiza i słowa kluczowe", description: "Badamy branżę, konkurencję i dobieramy frazy" },
    { step: "02", title: "Struktura kampanii", description: "Tworzymy grupy reklam i teksty reklamowe" },
    { step: "03", title: "Konfiguracja śledzenia", description: "Google Analytics, konwersje, remarketing" },
    { step: "04", title: "Optymalizacja i skalowanie", description: "Ciągłe testowanie i poprawa wyników" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "1 500",
      period: "/mies.",
      description: "Idealne na początek",
      features: [
        "Budżet reklamowy do 3 000 zł",
        "Kampania w sieci wyszukiwania",
        "Do 50 słów kluczowych",
        "Raport miesięczny",
        "Podstawowe śledzenie konwersji",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "2 500",
      period: "/mies.",
      description: "Dla rozwijających się firm",
      features: [
        "Budżet reklamowy do 15 000 zł",
        "Sieć wyszukiwania + reklamowa",
        "Do 200 słów kluczowych",
        "Remarketing",
        "Testy A/B reklam",
        "Raporty tygodniowe",
        "Integracja z Google Analytics",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "4 500",
      period: "/mies.",
      description: "Pełna obsługa SEM",
      features: [
        "Budżet reklamowy bez limitu",
        "Wszystkie typy kampanii",
        "Google Shopping / Performance Max",
        "Zaawansowany remarketing",
        "Dedykowany opiekun",
        "Raporty na żądanie",
        "Strategia wielokanałowa",
        "Integracja z CRM",
      ],
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: "Jak działa Google Ads?",
      answer: <>Google Ads to system reklamowy oparty na modelu PPC (pay-per-click) - płacisz tylko za kliknięcia w reklamę. Reklamy wyświetlają się użytkownikom, którzy wpisują w Google określone frazy kluczowe lub odwiedzają strony w sieci reklamowej Google. Pozycja reklamy zależy od stawki i jakości reklamy. Warto połączyć Google Ads z <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowaniem SEO</Link> dla maksymalnych efektów.</>
    },
    {
      question: "Ile kosztuje reklama w Google Ads?",
      answer: <>Koszt zależy od konkurencyjności słów kluczowych, jakości reklamy i branży. Średni koszt kliknięcia w Polsce to 1-5 zł, ale w konkurencyjnych branżach może wynosić nawet 20-50 zł. Ty decydujesz o dziennym budżecie i maksymalnej stawce za kliknięcie. Sprawdź także naszą ofertę <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">Facebook Ads</Link> dla kampanii uzupełniających.</>
    },
    {
      question: "Jakie typy kampanii Google Ads są dostępne?",
      answer: <>Google Ads oferuje: kampanie w sieci wyszukiwania (tekstowe), kampanie displayowe (banery), Google Shopping (produkty dla <Link to="/uslugi/strony-internetowe/ecommerce" className="text-primary hover:underline">e-commerce</Link>), kampanie wideo (<Link to="/performance-marketing/youtube-ads" className="text-primary hover:underline">YouTube</Link>), Performance Max (automatyczna optymalizacja) oraz kampanie remarketingowe. Wybór zależy od celów biznesowych i branży.</>
    },
    {
      question: "Jak wybrać odpowiednie słowa kluczowe?",
      answer: <>Analizujemy frazy, które wpisują potencjalni klienci, ich konkurencyjność i intencję zakupową. Używamy narzędzi jak Google Keyword Planner. Dobieramy słowa o odpowiednim wolumenie wyszukiwań i koszcie, które prowadzą do konwersji. Ta wiedza przydaje się również w <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowaniu stron</Link>.</>
    },
    {
      question: "Po jakim czasie widać efekty kampanii Google Ads?",
      answer: "Pierwsze wyniki widać już po kilku dniach od uruchomienia kampanii - reklamy zaczynają generować kliknięcia i ruch. Pełna optymalizacja i stabilne wyniki wymagają zwykle 2-4 tygodni zbierania danych i testowania różnych wariantów."
    },
    {
      question: "Czym różni się Google Ads od pozycjonowania SEO?",
      answer: <>Google Ads daje natychmiastowe wyniki - reklamy pojawiają się od razu po uruchomieniu kampanii. <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">SEO</Link> to proces długoterminowy (3-6 miesięcy). Najlepsze rezultaty daje połączenie obu strategii - płatne reklamy na szybkie efekty i <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowanie</Link> na długoterminowy wzrost organiczny.</>
    },
    {
      question: "Jak mierzyć skuteczność kampanii Google Ads?",
      answer: <>Kluczowe wskaźniki to: CTR (współczynnik klikalności), koszt na konwersję, ROAS (zwrot z wydatków na reklamę), jakość ruchu. Śledzimy konwersje przez Google Analytics i pixel konwersji. Regularnie raportujemy wyniki i optymalizujemy kampanię pod cel biznesowy. Oferujemy także <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">kompleksową obsługę marketingową</Link>.</>
    },
    {
      question: "Czy warto połączyć Google Ads z Facebook Ads?",
      answer: <>Tak, obie platformy uzupełniają się. Google Ads dociera do osób aktywnie szukających produktów/usług (wysoka intencja zakupowa), <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline">Facebook Ads</Link> buduje świadomość i dociera do osób na podstawie zainteresowań. Remarketing cross-platformowy zwiększa efektywność. Oferujemy <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">kompleksową obsługę marketingową</Link> łączącą oba kanały.</>
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Kampanie Google Ads - Skuteczna Reklama w Google dla Firm | Fotz Studio"
        description="Kampanie Google Ads dla firm — reklamy w wyszukiwarce Google, YouTube, Shopping. Prowadzenie i optymalizacja kampanii Google Ads. Agencja Google Partners…"
        canonical="https://fotz.pl/performance-marketing/google-ads"
        keywords="kampanie google ads, reklamy w google ads, prowadzenie kampanii google ads, agencja google ads, google adwords, reklama w google, google partners, google ads dla firm, google ads cennik, optymalizacja google ads, sem google ads"
      />

      <ServiceSchema 
        name="Google Ads - Kampanie SEM"
        description="Profesjonalne kampanie Google Ads. Reklamy w wyszukiwarce Google, sieci reklamowej, YouTube i Performance Max."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Google Ads", url: "https://fotz.pl/performance-marketing/google-ads" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: typeof item.answer === 'string' ? item.answer : 'Szczegółowa odpowiedź dostępna na stronie.' }))} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 via-background to-yellow-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mb-6">
              <Search className="inline-block w-4 h-4 mr-2" />
              Google Ads & SEM
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skuteczne kampanie{" "}
              <span className="bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                Google Ads
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Docieraj do klientów w momencie, gdy szukają Twoich produktów. Tworzymy kampanie, które generują sprzedaż i maksymalizują zwrot z inwestycji.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#cennik">Zobacz cennik</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Dlaczego Google Ads?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reklama w wyszukiwarce Google to najszybszy sposób na dotarcie do klientów z intencją zakupową
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-green-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Google Ads Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Czym jest Google Ads?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>Google Ads</strong> (dawniej Google AdWords) to system reklamowy Google, który umożliwia wyświetlanie reklam w wynikach wyszukiwania, na stronach partnerskich oraz na YouTube. Działa w modelu <strong>PPC (pay-per-click)</strong> - płacisz tylko wtedy, gdy ktoś kliknie w Twoją reklamę.
                </p>
                <p>
                  Kampanie Google Ads pozwalają dotrzeć do użytkowników w momencie, gdy aktywnie szukają produktów lub usług - to oznacza <strong>wysoką intencję zakupową</strong> i lepszą konwersję niż w przypadku tradycyjnej reklamy.
                </p>
                <p>
                  System oferuje różne typy kampanii: w sieci wyszukiwania, sieci reklamowej (Display), Google Shopping, YouTube oraz Performance Max. Każdy typ jest dostosowany do innych celów reklamowych - od budowania świadomości marki po bezpośrednią sprzedaż.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/seo/pozycjonowanie" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Pozycjonowanie SEO
                </Link>
                <Link to="/performance-marketing/facebook-ads" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Facebook Ads
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "90%", label: "Udziału w rynku wyszukiwarek" },
                { value: "5:1", label: "Średni ROAS kampanii" },
                { value: "65%", label: "Kliknięć trafia do reklam" },
                { value: "24/7", label: "Monitoring i optymalizacja" },
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campaign Types Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Typy kampanii Google Ads
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dobieramy typ kampanii do Twoich celów biznesowych i specyfiki branży
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaignTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-green-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <type.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-muted-foreground text-sm">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Search className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Analiza fraz kluczowych</h3>
                      <p className="text-muted-foreground text-sm">Badamy, jakie frazy wpisują Twoi potencjalni klienci</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dopasowanie słów</h3>
                      <p className="text-muted-foreground text-sm">Precyzyjne, frazowe i przybliżone dopasowania</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Settings className="w-5 h-5 text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Wykluczające słowa</h3>
                      <p className="text-muted-foreground text-sm">Eliminujemy nieistotny ruch i marnowanie budżetu</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LineChart className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Optymalizacja stawek</h3>
                      <p className="text-muted-foreground text-sm">Automatyczne i manualne strategie licytacji</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Słowa kluczowe - fundament kampanii
              </h2>
              <p className="text-muted-foreground mb-6">
                Kluczowym elementem każdej <strong>kampanii reklamowej</strong> jest wybór odpowiednich słów kluczowych. Analiza fraz w Twojej branży pozwala zrozumieć, jakie terminy są najczęściej wpisywane do wyszukiwarki przez potencjalnych klientów.
              </p>
              <p className="text-muted-foreground mb-6">
                Wykorzystujemy narzędzia takie jak <strong>Google Keyword Planner</strong> do identyfikacji najbardziej efektywnych fraz. Optymalizujemy grupy reklam wokół jednej tematyki, co zwiększa ich relewancję dla wyników wyszukiwania.
              </p>
              <Link to="/uslugi/strony-internetowe" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                Zobacz jak optymalizujemy strony docelowe <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jak prowadzimy kampanie?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sprawdzony proces, który gwarantuje skuteczne kampanie Google Ads
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full">
                  <span className="text-5xl font-bold text-green-500/20">{step.step}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-green-500/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cennik Google Ads
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Przejrzyste pakiety dopasowane do różnych potrzeb i budżetów
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-card border rounded-2xl p-6 ${
                  pkg.popular ? "border-green-500 shadow-lg shadow-green-500/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Najpopularniejszy
                  </span>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground">zł{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${pkg.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego. Budżet opłacany jest bezpośrednio w Google Ads.
          </p>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Mierzenie skuteczności i optymalizacja
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Połączenie konta Google Ads z <strong>Google Analytics</strong> jest niezbędne dla monitorowania efektywności kampanii. Dane z Analytics dostarczają cennych informacji o zachowaniu użytkowników na stronie, co umożliwia optymalizację pod kątem zwiększenia konwersji.
                </p>
                <p>
                  <strong>Testowanie A/B</strong> reklam i stron docelowych pozwala na ciągłe doskonalenie kampanii. Analizujemy, które warianty tekstów reklamowych i kreacji przynoszą najlepsze wyniki.
                </p>
                <p>
                  Regularne dostosowywanie kampanii na podstawie analizy danych - zmiany w słowach kluczowych, segmentacji czy stawkach - znacząco wpływa na poprawę wyników i ROI.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                { icon: PieChart, title: "Konwersje", description: "Śledzenie zakupów, formularzy, połączeń" },
                { icon: Eye, title: "Wyświetlenia", description: "Zasięg i udział w wynikach wyszukiwania" },
                { icon: MousePointer, title: "CTR", description: "Współczynnik klikalności reklam" },
                { icon: TrendingUp, title: "ROAS", description: "Zwrot z wydatków na reklamę" },
              ].map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{metric.title}</h3>
                    <p className="text-muted-foreground text-sm">{metric.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Odpowiedzi na pytania dotyczące kampanii Google Ads
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powiązane usługi
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kompleksowe wsparcie marketingowe dla Twojego biznesu
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "E-commerce & Sklepy", description: "Tworzymy skuteczne sklepy online zintegrowane z kampaniami", href: "/uslugi/strony-internetowe/ecommerce", icon: ShoppingCart },
              { title: "Pozycjonowanie SEO", description: "Organiczny wzrost widoczności w wyszukiwarce", href: "/seo/pozycjonowanie", icon: TrendingUp },
              { title: "Strony internetowe", description: "Profesjonalne strony z wysoką konwersją", href: "/uslugi/strony-internetowe", icon: Globe },
              { title: "Facebook Ads", description: "Kampanie w social media dla szerszego zasięgu", href: "/performance-marketing/facebook-ads", icon: Users },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block bg-card border border-border rounded-2xl p-6 hover:border-green-500/50 transition-all group h-full"
                >
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Dla kogo section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Sprawdź rozwiązania dla Twojej branży:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/dla-kogo/firmy-lokalne" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-green-500/50 transition-colors">
                Firmy lokalne
              </Link>
              <Link to="/dla-kogo/ecommerce" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-green-500/50 transition-colors">
                E-commerce
              </Link>
              <Link to="/dla-kogo/marki-premium" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-green-500/50 transition-colors">
                Marki premium
              </Link>
              <Link to="/dla-kogo/instytucje" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-green-500/50 transition-colors">
                Instytucje i eventy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Kampanie Google Ads — jak zacząć i osiągnąć sukces reklamowy online?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kampanie Google Ads to najskuteczniejszy sposób na natychmiastowe dotarcie do klientów szukających Twoich produktów i usług w Google. Reklamy w Google Ads wyświetlają się dokładnie wtedy, gdy potencjalny klient wpisuje frazę powiązaną z Twoją ofertą — w sieci wyszukiwania, sieci reklamowej, YouTube czy Google Zakupy. Prowadzenie kampanii Google Ads przez doświadczoną agencję pozwala maksymalizować zwrot z budżetu reklamowego i eliminować marnotrawstwo środków. Fotz Studio to certyfikowana agencja Google Partners z doświadczeniem w kampaniach dla firm z całej Polski.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Reklamy w Google Ads — typy kampanii i wybór słów kluczowych
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reklamy w Google Ads dzielą się na: kampanie w sieci wyszukiwania (tekstowe), kampanie Display (banerowe), kampanie YouTube (wideo), kampanie Shopping (produktowe) i Performance Max. Wybór typu kampanii zależy od celu — budowanie świadomości marki, generowanie ruchu na stronę, leady czy sprzedaż. Kampanie Google Ads w sieci wyszukiwania Google dają najwyższy intent zakupowy — użytkownik aktywnie szuka Twojej usługi. Dobór słów kluczowych to fundament — analiza fraz, dopasowania i wykluczenia decydują o efektywności i kosztach reklam. Google Adwords (dawna nazwa Google Ads) to platforma o największym zasięgu reklamowym na świecie — miliardy wyszukiwań dziennie.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">
              Prowadzenie kampanii Google Ads — zarządzanie budżetem i optymalizacja
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prowadzenie kampanii Google Ads to nie tylko konfiguracja — to ciągła optymalizacja: stawki, grupy reklam, rozszerzenia, wykluczenia i testy A/B tekstów reklam. Budżet kampanii Google Ads ustalamy dziennie lub łącznie — strategie licytacji (docelowy CPA, ROAS, Maximize Clicks) dostosowujemy do celów. Monitoring wydatków i dostosowywanie budżetu w oparciu o dane to klucz do rentowności. Pomocą kampanii Google Ads mierzalnych efektów dostarcza nam Google Analytics 4 zintegrowany z kontem reklamowym. Połączenie z Google Analytics umożliwia śledzenie konwersji i optymalizację kampanii pod realne wyniki, nie tylko kliknięcia.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">
              Agencja Google Partners — Google Ads to narzędzie wymagające ekspertyzy
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Agencja Google Partners to certyfikowany partner Google, który spełnił wymagania dotyczące wyników kampanii, wiedzy i budżetów obsługiwanych klientów. Google Ads to narzędzie potężne, ale kosztowne bez odpowiedniej wiedzy — źle skonfigurowane kampanie przepalają budżet bez efektów. Użytkownikiem Google jest każda osoba szukająca czegokolwiek w Google — dotarcie do właściwego użytkownika Google we właściwym momencie to sedno skutecznych reklam. Zakresie Google Ads specjalizujemy się w kampaniach dla branży e-commerce, usługowej, B2B i lokalnej.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">
              Strony internetowej w Google — landing page i konwersja z reklam
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nawet najlepsza kampania Google Ads nie przyniesie efektów bez dobrego landing page. Strony internetowej jakość po kliknięciu w reklamę decyduje o współczynniku konwersji i koszcie leadu. Quality Score w Google Ads ocenia trafność reklamy, słów kluczowych i strony docelowej — im wyższy, tym niższy koszt kliknięcia. Prowadzenie i optymalizacja kampanii Google Ads wymaga więc holistycznego podejścia: reklama + landing page + analityka. Fotz Studio dba o wszystkie trzy elementy w ramach kompleksowej obsługi kampanii.
            </p>
          
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Google Ads vs SEO — kiedy wybrać reklamę, a kiedy pozycjonowanie?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Google Ads i SEO to dwa komplementarne kanały pozyskiwania ruchu z Google. Reklamy Google Ads dają natychmiastowe efekty — kampania może generować leady już pierwszego dnia. SEO wymaga 3-6 miesięcy, ale buduje trwałą widoczność organiczną bez stałych kosztów kliknięć. Najlepsza strategia łączy oba kanały: Google Ads zapewnia natychmiastowy ruch i dane o konwertujących frazach, a SEO buduje długoterminową bazę organiczną. Dane z kampanii Google Ads (konwertujące słowa kluczowe, CTR, bounce rate) są bezcenne dla strategii SEO — pozwalają priorytetyzować optymalizację pod frazy o najwyższym potencjale konwersji.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Remarketing i kampanie Performance Max — zaawansowane strategie Google Ads
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Remarketing w Google Ads pozwala dotrzeć do użytkowników, którzy odwiedzili Twoją stronę, ale nie dokonali konwersji. Wyświetlamy im spersonalizowane reklamy w sieci reklamowej Google, YouTube i Gmailu, przypominając o ofercie. Kampanie Performance Max to najnowszy typ kampanii Google Ads, który automatycznie optymalizuje wyświetlanie reklam we wszystkich kanałach Google (wyszukiwarka, display, YouTube, Discovery, Maps, Gmail) przy użyciu machine learningu. Performance Max wymaga dobrego feedu produktowego i jasnych celów konwersji — to narzędzie dla zaawansowanych reklamodawców, które w rękach doświadczonej agencji daje znakomite wyniki.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Google Ads dla e-commerce — kampanie Shopping i produktowe
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Kampanie Google Shopping (Zakupy Google) to must-have dla sklepów internetowych. Reklamy produktowe wyświetlają zdjęcie, cenę i nazwę produktu bezpośrednio w wynikach wyszukiwania — mają wyższy CTR i konwersję niż reklamy tekstowe. Konfiguracja wymaga Google Merchant Center z poprawnym feedem produktowym (tytuły, opisy, ceny, zdjęcia, kategorie). Optymalizacja kampanii Shopping obejmuje: segmentację produktów, wykluczanie nierentownych pozycji, dostosowywanie stawek per kategoria i testy różnych strategii licytacji. Dla klientów e-commerce łączymy kampanie Shopping z Performance Max i remarketingiem, tworząc pełny lejek sprzedażowy.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Analityka i raportowanie kampanii Google Ads — mierzalność każdego grosza
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Jedną z największych zalet Google Ads jest pełna mierzalność wyników. Każde kliknięcie, wyświetlenie i konwersja są śledzone w czasie rzeczywistym. Google Analytics 4 w połączeniu z Google Ads pozwala analizować pełną ścieżkę użytkownika — od kliknięcia w reklamę, przez przeglądanie strony, aż po zakup lub wysłanie formularza. W Fotz Studio tworzymy dedykowane dashboardy w Looker Studio (dawniej Google Data Studio), które prezentują kluczowe metryki: CTR, CPC, CPA, ROAS, wartość konwersji i quality score. Klient ma dostęp do danych 24/7 i otrzymuje comiesięczny raport z analizą trendów i rekomendacjami optymalizacyjnymi.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Ile kosztuje reklama w Google Ads — budżet i cennik kampanii
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Koszt reklamy w Google Ads zależy od konkurencyjności branży, wybranych słów kluczowych i lokalizacji. Średni koszt kliknięcia (CPC) w Polsce wynosi 1-5 zł dla fraz ogólnych i 5-25 zł dla branż konkurencyjnych (prawo, finanse, medycyna). Minimalny rekomendowany budżet miesięczny to 2000-3000 zł na sam budżet reklamowy plus koszty zarządzania kampanią. W Fotz Studio prowadzenie kampanii Google Ads zaczyna się od 1500 zł miesięcznie za zarządzanie plus budżet reklamowy. Każdy złoty zainwestowany w Google Ads jest mierzalny — wiemy dokładnie, ile kosztował każdy lead i jaki jest ROAS (Return on Ad Spend).
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Google Ads dla firm lokalnych — reklamy geotargetowane
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dla firm działających lokalnie Google Ads oferuje precyzyjne geotargetowanie — reklamy wyświetlają się tylko użytkownikom w określonym promieniu od lokalizacji firmy. Kampanie lokalne w Google Ads obejmują reklamy w wyszukiwarce, mapach Google i sieci reklamowej. Rozszerzenia lokalizacji pokazują adres i numer telefonu bezpośrednio w reklamie, co zwiększa CTR o 10-20%. Dla firm usługowych w Poznaniu i Wielkopolsce konfigurujemy kampanie z geotargetowaniem na konkretne dzielnice, miasta i powiaty. Połączenie Google Ads z optymalizacją Google Business Profile daje maksymalną widoczność w lokalnych wynikach wyszukiwania.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Współpraca z Fotz Studio — jak rozpocząć kampanię Google Ads?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Proces rozpoczynamy od bezpłatnej konsultacji i analizy potencjału reklamowego — badamy konkurencję, wolumeny wyszukiwań i szacujemy budżet. Następnie konfigurujemy konto Google Ads, implementujemy śledzenie konwersji (Google Tag Manager, GA4) i uruchamiamy kampanię testową. Po zebraniu pierwszych danych (zwykle 2-4 tygodnie) optymalizujemy kampanię pod realne wyniki — eliminujemy nieefektywne frazy, testujemy nowe teksty reklam i dostosowujemy stawki. Klient otrzymuje pełny dostęp do konta Google Ads i comiesięczny raport z analizą wyników. Naszym celem jest nie tylko generowanie kliknięć, ale przede wszystkim dostarczanie konwersji — leadów, sprzedaży i zapytań ofertowych, które bezpośrednio przekładają się na przychód firmy. Każda kampania jest prowadzona z myślą o maksymalizacji zwrotu z inwestycji reklamowej przy jednoczesnym utrzymaniu optymalnego kosztu pozyskania klienta. Stale testujemy nowe formaty reklam, strategie licytacji i grupy odbiorców, aby zapewnić najlepsze możliwe wyniki. Nasza przewaga to połączenie wiedzy technicznej o platformie Google Ads z głębokim zrozumieniem biznesowych celów klienta — nie prowadzimy kampanii "na ślepo", lecz strategicznie, z jasno zdefiniowanymi KPI i regularnymi przeglądami wyników. Dla nowych klientów oferujemy bezpłatny audyt istniejących kampanii Google Ads z konkretnymi rekomendacjami optymalizacyjnymi i szacunkowym potencjałem wzrostu przy optymalnej konfiguracji kampanii reklamowych w Google. Niezależnie od tego, czy dopiero zaczynasz przygodę z reklamą online, czy szukasz agencji, która zoptymalizuje istniejące kampanie Google Ads i zwiększy ich rentowność — skontaktuj się z naszym zespołem specjalistów SEM.
            </p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/case-studies/optymalizacja-konwersji-ecommerce" className="text-primary hover:underline font-medium text-sm">→ Case Study: Optymalizacja konwersji</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <RelatedServices
        currentService="google-ads"
        subtitle="Inne platformy reklamowe i usługi wspierające kampanie SEM"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-yellow-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotowy na skuteczne kampanie Google Ads?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy zwiększyć Twoją sprzedaż dzięki reklamie w Google.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default GoogleAds;
