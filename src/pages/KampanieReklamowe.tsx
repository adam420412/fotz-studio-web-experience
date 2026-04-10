import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, Layers, CheckCircle2, 
  ArrowRight, Search, PieChart, RefreshCw, Megaphone,
  Monitor, ShoppingCart, Video, Globe, Settings, LineChart,
  Facebook, Youtube, Instagram, Sparkles, Rocket, Award, Music2, Briefcase, Youtube as YoutubeIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const KampanieReklamowe = () => {
  const platforms = [
    { 
      icon: Search, 
      title: "Google Ads", 
      description: "Docieraj do klientów aktywnie szukających Twoich usług w wyszukiwarce Google",
      href: "/performance-marketing/google-ads",
      features: ["Sieć wyszukiwania", "Google Shopping", "Performance Max"],
      color: "from-green-500/20 to-yellow-500/10",
      accent: "bg-green-500/20 text-green-400"
    },
    { 
      icon: Facebook, 
      title: "Facebook Ads", 
      description: "Buduj świadomość marki i docieraj do idealnych klientów na podstawie zainteresowań",
      href: "/performance-marketing/facebook-ads",
      features: ["Feed & Stories", "Lead Ads", "Remarketing"],
      color: "from-blue-500/20 to-purple-500/10",
      accent: "bg-blue-500/20 text-blue-400"
    },
    { 
      icon: Instagram, 
      title: "Instagram Ads", 
      description: "Angażuj odbiorców wizualnymi reklamami w Stories, Reels i feedzie",
      href: "/performance-marketing/instagram-ads",
      features: ["Stories Ads", "Reels Ads", "Shopping Ads"],
      color: "from-pink-500/20 to-purple-500/10",
      accent: "bg-pink-500/20 text-pink-400"
    },
    { 
      icon: Layers, 
      title: "Meta Ads (FB + IG)", 
      description: "Wykorzystaj pełną synergię ekosystemu Meta - Facebook i Instagram w jednej strategii",
      href: "/performance-marketing/meta-ads",
      features: ["Cross-platform", "Unified Audiences", "Full Funnel"],
      color: "from-indigo-500/20 to-pink-500/10",
      accent: "bg-indigo-500/20 text-indigo-400"
    },
    { 
      icon: Music2, 
      title: "TikTok Ads", 
      description: "Docieraj do młodej grupy docelowej dzięki kreatywnym reklamom wideo",
      href: "/performance-marketing/tiktok-ads",
      features: ["In-Feed Ads", "Spark Ads", "Branded Hashtag"],
      color: "from-cyan-500/20 to-pink-500/10",
      accent: "bg-cyan-500/20 text-cyan-400"
    },
    { 
      icon: Briefcase, 
      title: "LinkedIn Ads", 
      description: "Docieraj do decydentów B2B i generuj wartościowe leady biznesowe",
      href: "/performance-marketing/linkedin-ads",
      features: ["Sponsored Content", "Message Ads", "Lead Gen Forms"],
      color: "from-sky-500/20 to-blue-500/10",
      accent: "bg-sky-500/20 text-sky-400"
    },
    { 
      icon: Youtube, 
      title: "YouTube Ads", 
      description: "Buduj świadomość marki dzięki profesjonalnym reklamom wideo",
      href: "/performance-marketing/youtube-ads",
      features: ["TrueView In-Stream", "Bumper Ads", "YouTube Shorts"],
      color: "from-red-500/20 to-orange-500/10",
      accent: "bg-red-500/20 text-red-400"
    },
  ];

  const benefits = [
    { icon: Target, title: "Precyzyjne targetowanie", description: "Docieramy do osób najbardziej zainteresowanych Twoją ofertą" },
    { icon: BarChart3, title: "Mierzalne wyniki", description: "Śledzimy każdą konwersję i optymalizujemy pod ROI" },
    { icon: DollarSign, title: "Kontrola budżetu", description: "Płacisz tylko za wyniki - kliknięcia lub wyświetlenia" },
    { icon: Zap, title: "Szybkie efekty", description: "Pierwsze wyniki widoczne już po kilku dniach" },
    { icon: RefreshCw, title: "Ciągła optymalizacja", description: "Testujemy i ulepszamy kampanie codziennie" },
    { icon: Eye, title: "Pełna transparentność", description: "Dostęp do statystyk i regularne raporty" },
  ];

  const processSteps = [
    { step: "01", title: "Strategia i cele", description: "Określamy grupę docelową, budżet i KPI dla kampanii" },
    { step: "02", title: "Kreacja reklamowa", description: "Projektujemy grafiki, wideo i teksty reklamowe" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy targetowanie, śledzenie konwersji i remarketing" },
    { step: "04", title: "Optymalizacja i skalowanie", description: "Analizujemy wyniki i skalujemy najlepsze reklamy" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "1 500",
      period: "/mies.",
      description: "Jedna platforma reklamowa",
      features: [
        "Google Ads LUB Facebook Ads",
        "Budżet reklamowy do 3 000 zł",
        "Podstawowe targetowanie",
        "Kreacje statyczne",
        "Raport miesięczny",
        "Śledzenie konwersji",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "3 500",
      period: "/mies.",
      description: "Multi-platformowe kampanie",
      features: [
        "Google Ads + Facebook/Instagram Ads",
        "Budżet reklamowy do 15 000 zł",
        "Zaawansowane targetowanie",
        "Kreacje statyczne + wideo",
        "Testy A/B reklam",
        "Remarketing cross-platform",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "6 000",
      period: "/mies.",
      description: "Pełna obsługa performance",
      features: [
        "Wszystkie platformy reklamowe",
        "Budżet reklamowy bez limitu",
        "YouTube + TikTok + LinkedIn Ads",
        "Produkcja materiałów wideo",
        "Dedykowany opiekun kampanii",
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
    { value: "45+", label: "Stałych klientów" },
  ];

  const faqItems = [
    {
      question: "Jaką platformę reklamową wybrać - Google Ads, Facebook Ads, TikTok czy LinkedIn?",
      answer: "Wybór zależy od Twojego celu i grupy docelowej. Google Ads - dla osób aktywnie szukających produktów (e-commerce, B2B). Facebook/Instagram Ads - budowanie świadomości marki (B2C, lifestyle). TikTok Ads - młodzi odbiorcy 16-35 lat (moda, beauty, FMCG). LinkedIn Ads - decydenci B2B (usługi profesjonalne, rekrutacja). Najlepsze wyniki daje połączenie kilku platform."
    },
    {
      question: "Jaki budżet reklamowy potrzebuję na start?",
      answer: "Minimalny budżet to około 2000-3000 zł miesięcznie na jedną platformę. TikTok często ma niższy CPM niż Meta. LinkedIn jest najdroższy, ale generuje najbardziej wartościowe leady B2B. W konkurencyjnych branżach warto zacząć od 5000-10000 zł. Pomagamy dobrać optymalny budżet do Twoich celów."
    },
    {
      question: "Po jakim czasie widać efekty kampanii reklamowych?",
      answer: "Pierwsze wyniki (kliknięcia, ruch na stronie) widać już po 1-2 dniach. Stabilne konwersje i optymalizacja wymagają 2-4 tygodni zbierania danych. Pełna optymalizacja kampanii to proces ciągły - najlepsze wyniki osiągamy po 2-3 miesiącach systematycznej pracy."
    },
    {
      question: "Czy mogę sam śledzić wyniki kampanii?",
      answer: "Tak, zapewniamy pełny dostęp do kont reklamowych Google Ads, Meta Business Suite, TikTok Ads Manager i LinkedIn Campaign Manager. Dodatkowo wysyłamy regularne raporty z najważniejszymi wskaźnikami: wydatki, kliknięcia, konwersje, koszt na klienta, ROAS."
    },
    {
      question: "Dla kogo sprawdzi się TikTok Ads?",
      answer: "TikTok najlepiej sprawdza się dla marek B2C, e-commerce, fashion, beauty, FMCG, rozrywki i edukacji. Jeśli Twoja grupa docelowa to osoby 16-40 lat i jesteś gotowy na kreatywne, autentyczne treści wideo - TikTok będzie świetnym wyborem. Dla B2B lepiej LinkedIn lub Google Ads."
    },
    {
      question: "Kiedy warto wybrać LinkedIn Ads?",
      answer: "LinkedIn Ads to idealne rozwiązanie dla firm B2B, usług profesjonalnych, rekrutacji i branży technologicznej. Możesz targetować po stanowisku, branży, wielkości firmy czy umiejętnościach. Choć koszt za kliknięcie jest wyższy, leady są znacznie bardziej wartościowe niż na innych platformach."
    },
    {
      question: "Jakie są zalety łączenia Facebook i Instagram Ads w jednej kampanii?",
      answer: "Łączenie Facebook i Instagram Ads (Meta Ads) daje dostęp do wspólnej puli odbiorców i optymalizacji cross-platform. Reklamy automatycznie wyświetlają się tam, gdzie osiągają lepsze wyniki. Jeden Pixel śledzi konwersje z obu platform, a remarketing działa między nimi płynnie. To oszczędność czasu i wyższy ROAS dzięki szerszemu zasięgowi i lepszej optymalizacji.",
      hasLink: true
    },
    {
      question: "Czym różnicie się od innych agencji reklamowych?",
      answer: "Łączymy kampanie reklamowe z całościową strategią marketingową - tworzymy landing page'e, materiały wideo, grafiki reklamowe. Nie tylko uruchamiamy reklamy, ale dbamy o całą ścieżkę klienta. Mamy własne studio produkcyjne, więc wszystko powstaje in-house."
    },
    {
      question: "Czy potrzebuję landing page do kampanii reklamowych?",
      answer: "Landing page znacząco zwiększa konwersję reklam (nawet 3-5x). Strona zoptymalizowana pod konkretną kampanię konwertuje lepiej niż zwykła strona firmowa. W pakietach Business i Premium możemy przygotować dedykowane strony docelowe."
    },
    {
      question: "Jak działa remarketing cross-platform?",
      answer: "Remarketing to wyświetlanie reklam osobom, które już odwiedziły Twoją stronę. Działamy cross-platform - osoba, która była na stronie, zobaczy Twoje reklamy zarówno w Google, jak i na Facebooku, TikToku czy LinkedIn. To najskuteczniejsza forma reklamy z najwyższym ROI."
    },
    {
      question: "Czy tworzycie materiały reklamowe dla wszystkich platform?",
      answer: "Tak, w ramach obsługi przygotowujemy grafiki, teksty reklamowe i wideo dostosowane do każdej platformy. Treści na TikToka wymagają innego podejścia niż na LinkedIn. Mamy własne studio produkcyjne, więc możemy tworzyć profesjonalne spoty i materiały foto."
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Kampanie Reklamowe Google Ads i Meta Ads — Reklama Online dla Firm | Fotz Studio"
        description="Kampanie reklamowe Google Ads, Facebook Ads, Instagram Ads i TikTok Ads. Skuteczna reklama online dla firm — planowanie, prowadzenie i optymalizacja…"
        canonical="https://fotz.pl/kampanie-reklamowe"
      />
      <ServiceSchema 
        name="Kampanie Reklamowe Google Ads i Facebook Ads"
        description="Profesjonalne kampanie reklamowe Google Ads, Facebook Ads, Instagram, TikTok i LinkedIn. Precyzyjne targetowanie i optymalizacja ROI."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Kampanie Reklamowe", url: "https://fotz.pl/kampanie-reklamowe" },
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
              <Megaphone className="inline-block w-4 h-4 mr-2" />
              Performance Marketing
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Kampanie reklamowe,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-500">
                które sprzedają
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Google Ads, Facebook Ads, Instagram - docieramy do Twoich klientów tam, gdzie spędzają czas online. 
              Mierzalne wyniki i pełna kontrola nad budżetem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/realizacje">Zobacz efekty</Link>
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

      {/* Platforms Section */}
      <section className="py-20 bg-background">
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
              Prowadzimy kampanie na najpopularniejszych platformach reklamowych
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
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
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Dlaczego kampanie reklamowe?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Płatne reklamy to najszybszy sposób na dotarcie do nowych klientów
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
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Jak pracujemy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sprawdzony proces, który gwarantuje wyniki
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Cennik kampanii reklamowych
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Przejrzyste ceny bez ukrytych kosztów
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-8 rounded-2xl border ${
                  pkg.popular 
                    ? 'bg-primary/5 border-primary' 
                    : 'bg-card border-border/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    Najpopularniejszy
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground">zł{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego, który trafia bezpośrednio do Google/Meta
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-muted-foreground">
              Odpowiedzi na pytania o kampanie reklamowe
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-foreground font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                    {item.hasLink && (
                      <> Więcej o synergii platform znajdziesz na naszej <Link to="/performance-marketing/meta-ads" className="text-primary hover:underline">stronie Meta Ads</Link>.</>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Usługi, które wzmocnią Twoje kampanie reklamowe
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Google Ads", href: "/performance-marketing/google-ads", icon: Search },
              { title: "Facebook Ads", href: "/performance-marketing/facebook-ads", icon: Facebook },
              { title: "TikTok Ads", href: "/performance-marketing/tiktok-ads", icon: Music2 },
              { title: "Spoty reklamowe", href: "/uslugi/produkcja-video", icon: Video },
              { title: "Landing Page", href: "/uslugi/strony-internetowe", icon: Monitor },
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{service.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
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
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na więcej klientów?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację. Przeanalizujemy Twój biznes i zaproponujemy strategię kampanii reklamowych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+48123456789">
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Kampanie reklamowe Google Ads i Meta Ads — reklamy online dla firm</h2>
            <p className="text-muted-foreground mb-4">Kampanie reklamowe w Google Ads i Meta Ads (Facebook, Instagram) to najszybszy sposób na dotarcie do nowych klientów. Zarządzanie kampaniami PPC wymaga wiedzy, czasu i ciągłej optymalizacji — dlatego warto powierzyć je specjalistom. Reklamy online pozwalają precyzyjnie targetować odbiorców według demografii, zainteresowań, lokalizacji i zachowań zakupowych.</p>
            <p className="text-muted-foreground mb-6">Planowanie kampanii reklamowych zaczyna się od analizy celów biznesowych i grupy docelowej. Definiujemy KPI, dobieramy kanały, tworzymy kreacje reklamowe i ustawiamy śledzenie konwersji. Raporty efektywności kampanii dostarczamy regularnie, by zawsze wiedzieć, jak Twoje budżety reklamowe pracują.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Kampanie PPC — Google Shopping, remarketing i reklama display</h2>
            <p className="text-muted-foreground mb-4">Zarządzanie kampaniami PPC (Pay-Per-Click) obejmuje różne formaty reklamowe: kampanie w wyszukiwarce (search), Google Shopping dla sklepów e-commerce, kampanie display w sieci reklamowej Google oraz remarketing — reklamy kierowane do osób, które już odwiedziły Twoją stronę. Każdy format ma swoje zastosowanie w lejku sprzedażowym.</p>
            <p className="text-muted-foreground mb-6">Efektywne kampanie reklamowe to nie tylko kliknięcia, ale przede wszystkim konwersje. Optymalizujemy kampanie pod CPA (koszt za pozyskanie), ROAS (zwrot z wydatków na reklamę) i inne kluczowe wskaźniki. Analiza konkurencji w internecie pozwala nam ustalać stawki i targetowanie, by Twoje kampanie były opłacalne.</p>

            <h3 className="text-2xl font-heading font-bold mb-4">Prowadzenie kampanii reklamowych — co wchodzi w skład obsługi?</h3>
            <p className="text-muted-foreground">Prowadzenie kampanii reklamowych przez agencję obejmuje: konfigurację konta, tworzenie struktury kampanii, kreację reklam tekstowych i graficznych, ustawienie grup odbiorców, monitorowanie wyników i miesięczną optymalizację. Monitorowanie ruchu na stronie i analiza konwersji są integralną częścią każdej prowadzonej kampanii. Sprawdź, jak nasze kampanie reklamowe mogą zwiększyć Twoje przychody.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
};

export default KampanieReklamowe;
