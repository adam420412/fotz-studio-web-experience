import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, Layers, CheckCircle2, 
  ArrowRight, Search, PieChart, RefreshCw, Megaphone,
  Phone, Mail, MapPin, Facebook, Youtube, Instagram, 
  Music2, Briefcase, Award, Rocket, Clock, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, LocalBusinessSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const KampanieReklamowePoznan = () => {
  const platforms = [
    { 
      icon: Search, 
      title: "Google Ads Poznań", 
      description: "Docieraj do klientów z Poznania szukających Twoich usług w Google",
      href: "/performance-marketing/google-ads",
      features: ["Kampanie lokalne", "Google Maps Ads", "Performance Max"],
      color: "from-green-500/20 to-yellow-500/10",
      accent: "bg-green-500/20 text-green-400"
    },
    { 
      icon: Facebook, 
      title: "Facebook Ads Poznań", 
      description: "Buduj świadomość marki wśród mieszkańców Poznania i okolic",
      href: "/performance-marketing/facebook-ads",
      features: ["Targetowanie lokalne", "Lead Ads", "Remarketing"],
      color: "from-blue-500/20 to-purple-500/10",
      accent: "bg-blue-500/20 text-blue-400"
    },
    { 
      icon: Instagram, 
      title: "Instagram Ads", 
      description: "Angażuj poznańskich odbiorców w Stories, Reels i feedzie",
      href: "/performance-marketing/instagram-ads",
      features: ["Stories Ads", "Reels Ads", "Shopping Ads"],
      color: "from-pink-500/20 to-purple-500/10",
      accent: "bg-pink-500/20 text-pink-400"
    },
    { 
      icon: Layers, 
      title: "Meta Ads (FB + IG)", 
      description: "Wykorzystaj synergię Facebooka i Instagrama w jednej strategii",
      href: "/performance-marketing/meta-ads",
      features: ["Cross-platform", "Unified Audiences", "Full Funnel"],
      color: "from-indigo-500/20 to-pink-500/10",
      accent: "bg-indigo-500/20 text-indigo-400"
    },
    { 
      icon: Music2, 
      title: "TikTok Ads", 
      description: "Docieraj do młodych poznaniaków kreatywnymi reklamami wideo",
      href: "/performance-marketing/tiktok-ads",
      features: ["In-Feed Ads", "Spark Ads", "Branded Hashtag"],
      color: "from-cyan-500/20 to-pink-500/10",
      accent: "bg-cyan-500/20 text-cyan-400"
    },
    { 
      icon: Briefcase, 
      title: "LinkedIn Ads", 
      description: "Docieraj do decydentów B2B z firm poznańskich",
      href: "/performance-marketing/linkedin-ads",
      features: ["Sponsored Content", "Message Ads", "Lead Gen Forms"],
      color: "from-sky-500/20 to-blue-500/10",
      accent: "bg-sky-500/20 text-sky-400"
    },
  ];

  const benefits = [
    { icon: MapPin, title: "Znajomość lokalnego rynku", description: "Znamy specyfikę Poznania i Wielkopolski - targetujemy precyzyjnie" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Docieramy do osób najbardziej zainteresowanych w Twoim regionie" },
    { icon: BarChart3, title: "Mierzalne wyniki", description: "Śledzimy każdą konwersję i optymalizujemy pod ROI" },
    { icon: Zap, title: "Szybkie efekty", description: "Pierwsze wyniki widoczne już po kilku dniach" },
    { icon: RefreshCw, title: "Ciągła optymalizacja", description: "Testujemy i ulepszamy kampanie codziennie" },
    { icon: Eye, title: "Pełna transparentność", description: "Dostęp do statystyk i regularne raporty" },
  ];

  const processSteps = [
    { step: "01", title: "Analiza rynku lokalnego", description: "Badamy konkurencję w Poznaniu i określamy grupę docelową" },
    { step: "02", title: "Strategia i kreacja", description: "Projektujemy kampanię dopasowaną do poznańskiego rynku" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy geo-targetowanie, śledzenie konwersji i remarketing" },
    { step: "04", title: "Optymalizacja i skalowanie", description: "Analizujemy wyniki i skalujemy najlepsze reklamy" },
  ];

  const pricingPackages = [
    {
      name: "Start Poznań",
      price: "1 500",
      period: "/mies.",
      description: "Jedna platforma reklamowa",
      features: [
        "Google Ads LUB Facebook Ads",
        "Budżet reklamowy do 3 000 zł",
        "Targetowanie Poznań i okolice",
        "Kreacje statyczne",
        "Raport miesięczny",
        "Śledzenie konwersji",
      ],
      popular: false,
    },
    {
      name: "Business Poznań",
      price: "3 500",
      period: "/mies.",
      description: "Multi-platformowe kampanie",
      features: [
        "Google Ads + Facebook/Instagram Ads",
        "Budżet reklamowy do 15 000 zł",
        "Zaawansowane targetowanie lokalne",
        "Kreacje statyczne + wideo",
        "Testy A/B reklam",
        "Remarketing cross-platform",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Premium Poznań",
      price: "6 000",
      period: "/mies.",
      description: "Pełna obsługa performance",
      features: [
        "Wszystkie platformy reklamowe",
        "Budżet reklamowy bez limitu",
        "Produkcja materiałów wideo",
        "Dedykowany opiekun w Poznaniu",
        "Spotkania w biurze",
        "Automatyzacja i AI",
        "Raporty na żądanie",
        "Strategia wielokanałowa",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "500+", label: "Przeprowadzonych kampanii" },
    { value: "12M+", label: "Wydanego budżetu reklamowego" },
    { value: "350%", label: "Średni ROAS klientów" },
    { value: "8 lat", label: "Doświadczenia w Poznaniu" },
  ];

  const localAdvantages = [
    { icon: Building2, title: "Biuro w centrum Poznania", description: "Plac Wolności 16 - spotkania twarzą w twarz" },
    { icon: Clock, title: "Szybka reakcja", description: "Lokalna obecność = natychmiastowe działanie" },
    { icon: Users, title: "Znajomość lokalnych firm", description: "Współpracujemy z poznańskimi przedsiębiorcami od lat" },
    { icon: Award, title: "Certyfikowani specjaliści", description: "Google Ads Partner i Meta Business Partner" },
  ];

  const faqItems = [
    {
      question: "Dlaczego warto wybrać lokalną agencję reklamową z Poznania?",
      answer: "Lokalna agencja zna specyfikę poznańskiego rynku, konkurencję i zachowania konsumentów w Wielkopolsce. Oferujemy spotkania w biurze na Placu Wolności 16, szybką reakcję na zmiany i lepsze zrozumienie Twojego biznesu. Nasze kampanie dla poznańskich firm osiągają wyższy ROAS dzięki precyzyjnemu geo-targetowaniu."
    },
    {
      question: "Jaką platformę reklamową wybrać dla firmy z Poznania?",
      answer: "Wybór zależy od Twojego celu i grupy docelowej. Google Ads - dla firm usługowych i e-commerce szukających klientów aktywnie. Facebook/Instagram Ads - budowanie świadomości marki wśród poznaniaków. LinkedIn Ads - dla firm B2B targetujących decydentów z poznańskich przedsiębiorstw. Najlepsze wyniki daje połączenie kilku platform z precyzyjnym geo-targetowaniem na Poznań i Wielkopolskę."
    },
    {
      question: "Jaki budżet reklamowy potrzebuję na kampanie w Poznaniu?",
      answer: "Minimalny budżet to około 2000-3000 zł miesięcznie na jedną platformę. Poznań jest rynkiem mniej konkurencyjnym niż Warszawa, więc koszty kliknięć są niższe. Dla lokalnych usług często wystarczy 3000-5000 zł miesięcznie, aby generować stabilny przepływ leadów."
    },
    {
      question: "Po jakim czasie widać efekty kampanii reklamowych?",
      answer: "Pierwsze wyniki (kliknięcia, ruch na stronie) widać już po 1-2 dniach. Stabilne konwersje i optymalizacja wymagają 2-4 tygodni zbierania danych. Pełna optymalizacja kampanii to proces ciągły - najlepsze wyniki osiągamy po 2-3 miesiącach systematycznej pracy."
    },
    {
      question: "Czy mogę spotkać się z Wami osobiście w Poznaniu?",
      answer: "Tak! Nasze biuro znajduje się na Placu Wolności 16 w centrum Poznania. Oferujemy bezpłatne konsultacje, spotkania strategiczne i regularne przeglądy kampanii. Preferujesz spotkania online? Działamy również hybrydowo przez Google Meet lub Zoom."
    },
    {
      question: "Jakie branże obsługujecie w Poznaniu?",
      answer: "Mamy doświadczenie z poznańskimi firmami z różnych sektorów: gastronomia, usługi lokalne, e-commerce, nieruchomości, medycyna, edukacja, B2B i przemysł. Współpracujemy m.in. z Eneą Stadion, lokalnymi restauracjami i sklepami internetowymi z Wielkopolski."
    },
    {
      question: "Czym różnicie się od innych agencji reklamowych w Poznaniu?",
      answer: "Łączymy kampanie reklamowe z całościową strategią marketingową - tworzymy landing page'e, materiały wideo, grafiki reklamowe. Mamy własne studio produkcyjne w Poznaniu, więc wszystko powstaje in-house. Nie outsourcujemy - pełna kontrola jakości."
    },
    {
      question: "Czy tworzycie materiały reklamowe dla poznańskich firm?",
      answer: "Tak, w ramach obsługi przygotowujemy grafiki, teksty reklamowe i wideo dostosowane do każdej platformy. Mamy własne studio foto i wideo w Poznaniu - możemy tworzyć profesjonalne spoty z lokalnymi akcentami i rozpoznawalnymi miejscami."
    },
  ];

  return (
    <Layout>
      <SEOHead
        title="Kampanie Reklamowe Poznań | Google & Meta Ads"
        description="Kampanie Google Ads i Facebook Ads w Poznaniu. Lokalna agencja, spotkania w biurze. Średni ROAS 350%."
        canonical="https://fotz.pl/kampanie-reklamowe-poznan"
      />
      <ServiceSchema 
        name="Kampanie Reklamowe Poznań - Google Ads i Facebook Ads"
        description="Profesjonalne kampanie reklamowe Google Ads, Facebook Ads, Instagram dla firm z Poznania i Wielkopolski. Lokalna agencja z biurem na Placu Wolności."
        provider="Fotz Studio"
        areaServed="Poznań, Wielkopolska"
      />
      <LocalBusinessSchema
        name="Fotz Studio - Kampanie Reklamowe Poznań"
        description="Agencja reklamowa specjalizująca się w kampaniach Google Ads i Facebook Ads dla firm z Poznania"
        telephone="+48790814814"
        priceRange="$$"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Kampanie Reklamowe", url: "https://fotz.pl/kampanie-reklamowe" },
          { name: "Kampanie Reklamowe Poznań", url: "https://fotz.pl/kampanie-reklamowe-poznan" },
        ]}
      />
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-orange-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium mb-6">
              <MapPin className="inline-block w-4 h-4 mr-2" />
              Lokalna agencja reklamowa
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Kampanie reklamowe
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-500">
                Poznań
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Google Ads, Facebook Ads, Instagram - docieramy do Twoich klientów w Poznaniu i Wielkopolsce. 
              Spotkania w biurze na Placu Wolności. Średni ROAS naszych klientów: 350%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 h-5 w-5" />
                  790 814 814
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Advantages Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Dlaczego lokalna agencja?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Znamy Poznań i Wielkopolskę - to nasza przewaga nad agencjami z innych miast
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {localAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                  <advantage.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Platformy reklamowe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prowadzimy kampanie na wszystkich głównych platformach z targetowaniem na Poznań
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${platform.color} border border-border/50 hover:border-primary/50 transition-all duration-300 group`}
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${platform.accent} mb-6`}>
                  <platform.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{platform.title}</h3>
                <p className="text-muted-foreground mb-6">{platform.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {platform.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Link to={platform.href}>
                    Dowiedz się więcej
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Dlaczego kampanie reklamowe w Poznaniu?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Płatne reklamy to najszybszy sposób na dotarcie do poznańskich klientów
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Jak pracujemy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sprawdzony proces, który przynosi wyniki poznańskim firmom
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Pakiety dla poznańskich firm
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparentne ceny bez ukrytych kosztów
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular 
                    ? "border-primary bg-primary/5" 
                    : "border-border/50 bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Najpopularniejszy
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  <span className="text-muted-foreground">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full" variant={pkg.popular ? "default" : "outline"}>
                  <Link to="/kontakt">Zamów wycenę</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Często zadawane pytania
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Odpowiedzi na pytania o kampanie reklamowe w Poznaniu
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Powiązane usługi w Poznaniu
            </h2>
            <p className="text-lg text-muted-foreground">
              Kompleksowa obsługa marketingowa dla poznańskich firm
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Social Media Poznań", href: "/social-media/poznan", icon: Users },
              { title: "Strony internetowe Poznań", href: "/uslugi/strony-internetowe/poznan", icon: Layers },
              { title: "Pozycjonowanie Poznań", href: "/seo/pozycjonowanie-poznan", icon: Search },
              { title: "Produkcja filmów", href: "/uslugi/produkcja-filmow", icon: Youtube },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="block p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <service.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-orange-600/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na więcej klientów z Poznania?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację w naszym biurze na Placu Wolności 16 
              lub online. Pokażemy, jak zwiększyć sprzedaż dzięki reklamom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+48790814814">
                  <Phone className="mr-2 h-5 w-5" />
                  790 814 814
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
              <a href="mailto:adam@fotz.pl" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
                adam@fotz.pl
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Plac Wolności 16, Poznań
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default KampanieReklamowePoznan;
