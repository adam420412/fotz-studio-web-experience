import { Helmet } from "react-helmet";
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
      answer: "Google Ads to system reklamowy oparty na modelu PPC (pay-per-click) - płacisz tylko za kliknięcia w reklamę. Reklamy wyświetlają się użytkownikom, którzy wpisują w Google określone frazy kluczowe lub odwiedzają strony w sieci reklamowej Google. Pozycja reklamy zależy od stawki i jakości reklamy. Warto połączyć Google Ads z pozycjonowaniem SEO dla maksymalnych efektów."
    },
    {
      question: "Ile kosztuje reklama w Google Ads?",
      answer: "Koszt zależy od konkurencyjności słów kluczowych, jakości reklamy i branży. Średni koszt kliknięcia w Polsce to 1-5 zł, ale w konkurencyjnych branżach może wynosić nawet 20-50 zł. Ty decydujesz o dziennym budżecie i maksymalnej stawce za kliknięcie. Sprawdź także naszą ofertę Facebook Ads dla kampanii uzupełniających."
    },
    {
      question: "Jakie typy kampanii Google Ads są dostępne?",
      answer: "Google Ads oferuje: kampanie w sieci wyszukiwania (tekstowe), kampanie displayowe (banery), Google Shopping (produkty dla e-commerce), kampanie wideo (YouTube), Performance Max (automatyczna optymalizacja) oraz kampanie remarketingowe. Wybór zależy od celów biznesowych i branży."
    },
    {
      question: "Jak wybrać odpowiednie słowa kluczowe?",
      answer: "Analizujemy frazy, które wpisują potencjalni klienci, ich konkurencyjność i intencję zakupową. Używamy narzędzi jak Google Keyword Planner. Dobieramy słowa o odpowiednim wolumenie wyszukiwań i koszcie, które prowadzą do konwersji. Ta wiedza przydaje się również w pozycjonowaniu stron."
    },
    {
      question: "Po jakim czasie widać efekty kampanii Google Ads?",
      answer: "Pierwsze wyniki widać już po kilku dniach od uruchomienia kampanii - reklamy zaczynają generować kliknięcia i ruch. Pełna optymalizacja i stabilne wyniki wymagają zwykle 2-4 tygodni zbierania danych i testowania różnych wariantów."
    },
    {
      question: "Czym różni się Google Ads od pozycjonowania SEO?",
      answer: "Google Ads daje natychmiastowe wyniki - reklamy pojawiają się od razu po uruchomieniu kampanii. SEO to proces długoterminowy (3-6 miesięcy). Najlepsze rezultaty daje połączenie obu strategii - płatne reklamy na szybkie efekty i pozycjonowanie na długoterminowy wzrost organiczny."
    },
    {
      question: "Jak mierzyć skuteczność kampanii Google Ads?",
      answer: "Kluczowe wskaźniki to: CTR (współczynnik klikalności), koszt na konwersję, ROAS (zwrot z wydatków na reklamę), jakość ruchu. Śledzimy konwersje przez Google Analytics i pixel konwersji. Regularnie raportujemy wyniki i optymalizujemy kampanię pod cel biznesowy."
    },
    {
      question: "Czy warto połączyć Google Ads z Facebook Ads?",
      answer: "Tak, obie platformy uzupełniają się. Google Ads dociera do osób aktywnie szukających produktów/usług (wysoka intencja zakupowa), Facebook Ads buduje świadomość i dociera do osób na podstawie zainteresowań. Remarketing cross-platformowy zwiększa efektywność. Oferujemy kompleksową obsługę marketingową łączącą oba kanały."
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Google Ads Poznań - Skuteczne kampanie reklamowe SEM | Fotz Studio</title>
        <meta name="description" content="Profesjonalne kampanie Google Ads. Zwiększ sprzedaż dzięki reklamom w wyszukiwarce Google, sieci reklamowej i YouTube. Agencja Google Ads Poznań." />
        <link rel="canonical" href="https://fotz.pl/google-ads" />
      </Helmet>

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
                <Link to="/pozycjonowanie" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Pozycjonowanie SEO
                </Link>
                <Link to="/facebook-ads" className="text-green-400 hover:text-green-300 text-sm flex items-center gap-1">
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
              <Link to="/strony-internetowe" className="text-green-400 hover:text-green-300 flex items-center gap-2">
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
              { title: "E-commerce & Sklepy", description: "Tworzymy skuteczne sklepy online zintegrowane z kampaniami", href: "/ecommerce-tworzenie-sklepu", icon: ShoppingCart },
              { title: "Pozycjonowanie SEO", description: "Organiczny wzrost widoczności w wyszukiwarce", href: "/pozycjonowanie", icon: TrendingUp },
              { title: "Strony internetowe", description: "Profesjonalne strony z wysoką konwersją", href: "/strony-internetowe", icon: Globe },
              { title: "Facebook Ads", description: "Kampanie w social media dla szerszego zasięgu", href: "/facebook-ads", icon: Users },
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

      {/* Related Services */}
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
            <p className="text-muted-foreground">
              Inne platformy reklamowe, które obsługujemy
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Meta Ads (FB + IG)", href: "/facebook-instagram-ads", description: "Synergia Facebook i Instagram" },
              { name: "TikTok Ads", href: "/tiktok-ads", description: "Viralowe kampanie wideo" },
              { name: "LinkedIn Ads", href: "/linkedin-ads", description: "Leady B2B" },
              { name: "YouTube Ads", href: "/youtube-ads", description: "Reklamy wideo" },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group p-6 rounded-xl border border-border bg-card hover:border-green-500/50 transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-green-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
  );
};

export default GoogleAds;
