import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, Layers, CheckCircle2, 
  ArrowRight, Play, PieChart, RefreshCw, Megaphone,
  Monitor, Smartphone, MessageSquare, ShoppingCart
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

const FacebookAds = () => {
  const benefits = [
    { icon: Users, title: "2+ mld użytkowników", description: "Dostęp do największej platformy społecznościowej" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Docieraj do dokładnie określonej grupy odbiorców" },
    { icon: BarChart3, title: "Mierzalne wyniki", description: "Śledzenie konwersji i ROI w czasie rzeczywistym" },
    { icon: DollarSign, title: "Elastyczny budżet", description: "Kontrola wydatków i optymalizacja kosztów" },
  ];

  const adFormats = [
    { icon: Monitor, title: "Reklamy graficzne", description: "Przyciągające uwagę obrazy i kreacje statyczne" },
    { icon: Play, title: "Reklamy wideo", description: "Dynamiczne treści wideo zwiększające zaangażowanie" },
    { icon: Layers, title: "Karuzele", description: "Prezentacja wielu produktów w jednej reklamie" },
    { icon: MessageSquare, title: "Messenger Ads", description: "Bezpośrednia komunikacja z potencjalnymi klientami" },
    { icon: Smartphone, title: "Stories Ads", description: "Pełnoekranowe reklamy w formacie pionowym" },
    { icon: ShoppingCart, title: "Reklamy dynamiczne", description: "Automatycznie personalizowane pod użytkownika" },
  ];

  const processSteps = [
    { step: "01", title: "Analiza i strategia", description: "Określamy cele, grupę docelową i budżet kampanii" },
    { step: "02", title: "Kreacja reklamowa", description: "Tworzymy angażujące grafiki i teksty reklamowe" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy targetowanie, formaty i harmonogram" },
    { step: "04", title: "Optymalizacja", description: "Monitorujemy wyniki i optymalizujemy kampanię" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "1 500",
      period: "/mies.",
      description: "Idealne na początek",
      features: [
        "Budżet reklamowy do 3 000 zł",
        "1-2 kampanie reklamowe",
        "Podstawowe targetowanie",
        "Raport miesięczny",
        "Kreacje graficzne (2 szt.)",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "2 500",
      period: "/mies.",
      description: "Dla rozwijających się firm",
      features: [
        "Budżet reklamowy do 10 000 zł",
        "3-5 kampanii reklamowych",
        "Zaawansowane targetowanie",
        "Retargeting i Lookalike",
        "Testy A/B",
        "Raporty tygodniowe",
        "Kreacje graficzne (5 szt.)",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "4 500",
      period: "/mies.",
      description: "Pełna obsługa marketingowa",
      features: [
        "Budżet reklamowy bez limitu",
        "Nieograniczona liczba kampanii",
        "Kompleksowa strategia",
        "Pixel Facebook + API konwersji",
        "Dedykowany opiekun",
        "Raporty na żądanie",
        "Kreacje graficzne i wideo",
        "Integracja z Google Ads",
      ],
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: "Jakie są pierwsze kroki do stworzenia skutecznej kampanii na Facebooku?",
      answer: <>Pierwszym krokiem jest zdefiniowanie celu kampanii reklamowej, wybór grupy docelowej oraz ustalenie budżetu. Następnie należy wybrać format reklamy, który najlepiej odpowiada celom twojej kampanii. Istotne jest także skonfigurowanie kampanii w Menadżerze Reklam Facebook i połączenie z profesjonalną <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">stroną internetową</Link>.</>
    },
    {
      question: "Jak wybrać odbiorców swojej reklamy na Facebooku?",
      answer: <>Aby wybrać swoich odbiorców, należy określić demograficzne, geograficzne i behawioralne kryteria wyboru. Facebook umożliwia również targetowanie na podstawie zainteresowań potencjalnych klientów, ich zachowań online oraz danych z fanpage'a twojego biznesu. Podobne możliwości oferują reklamy <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">Google Ads</Link>.</>
    },
    {
      question: "Jaki format reklamy na Facebooku będzie najskuteczniejszy?",
      answer: <>Wybór formatu zależy od celów twojej kampanii. Facebook oferuje różnorodne formy reklamy, w tym posty sponsorowane, historie, materiały błyskawiczne, filmy, karuzele czy reklamy w Messengerze. Profesjonalne materiały wideo znacząco zwiększają skuteczność kampanii - sprawdź naszą <Link to="/uslugi/produkcja-filmow" className="text-primary hover:underline">produkcję wideo</Link>.</>
    },
    {
      question: "Ile kosztuje reklama na Facebook Ads?",
      answer: "Cennik reklamy na Facebooku jest zmienny i zależy od wielu czynników, takich jak rodzaj i format reklamy, czas trwania kampanii, wybrana grupa docelowa oraz konkurencja w danej kategorii. Konkretne koszty ustalane są w procesie licytacji w Menadżerze Reklam."
    },
    {
      question: "Jak określić cel reklamowy kampanii na Facebooku?",
      answer: <>Podczas tworzenia kampanii możesz wybrać jedną z dostępnych opcji celów, takich jak zwiększenie świadomości marki, generowanie leadów, konwersje na stronie internetowej, ruch na stronie czy promocja aplikacji mobilnej. Wybór celu powinien być dopasowany do strategii <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">marketingowej</Link>.</>
    },
    {
      question: "Jak mierzyć efektywność kampanii reklamowej na Facebooku?",
      answer: <>Efektywność kampanii można mierzyć za pomocą narzędzi analitycznych oferowanych przez Facebooka, takich jak Menadżer Reklam oraz Insights. Te narzędzia udostępniają dane na temat zasięgu, interakcji, konwersji oraz ROI. Warto połączyć te dane z analityką <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">strony internetowej</Link>.</>
    },
    {
      question: "Czy warto powierzyć prowadzenie kampanii agencji reklamowej?",
      answer: <>Decyzja o współpracy z agencją powinna zależeć od budżetu, dostępnych zasobów oraz wiedzy specjalistycznej. <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">Agencje marketingowe</Link> oferują profesjonalne usługi, które mogą znacząco zwiększyć efektywność kampanii dzięki doświadczeniu i dostępowi do zaawansowanych narzędzi.</>
    },
    {
      question: "Jakie są najczęstsze błędy przy tworzeniu reklam na Facebooku?",
      answer: <>Najczęstsze błędy to nieprecyzyjne określenie grupy docelowej, nieodpowiedni wybór formatu reklamy, brak jasnego wezwania do działania, a także niedostosowanie treści i grafiki reklamy do preferencji odbiorców. Profesjonalna <Link to="/social-media/poznan" className="text-primary hover:underline">obsługa social media</Link> pomaga uniknąć tych błędów.</>
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Facebook Ads — Reklama na Facebooku dla Firm | Kampanie Meta Ads | Fotz Studio"
        description="Facebook Ads — tworzenie i prowadzenie kampanii reklamowych na Facebooku. Targetowanie, kreacje, retargeting i optymalizacja ROAS. Fotz Studio."
        canonical="https://fotz.pl/performance-marketing/facebook-ads"
        keywords="facebook ads polska, agencja facebook ads, kampanie facebook ads, reklamy facebook, meta ads polska, instagram ads polska, facebook ads dla firm, reklama na facebooku, facebook ads cennik, prowadzenie facebook ads, facebook ads agencja"
      />

      <ServiceSchema 
        name="Facebook Ads - Kampanie reklamowe"
        description="Profesjonalne kampanie reklamowe na Facebook Ads. Precyzyjne targetowanie, retargeting i Lookalike Audiences."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Facebook Ads", url: "https://fotz.pl/performance-marketing/facebook-ads" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: typeof item.answer === 'string' ? item.answer : 'Szczegółowa odpowiedź dostępna na stronie.' }))} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-background to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Megaphone className="inline-block w-4 h-4 mr-2" />
              Facebook & Instagram Ads
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Skuteczne kampanie reklamowe na{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Facebook Ads
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Docieraj do ponad 2 miliardów użytkowników. Tworzymy kampanie, które generują leady, zwiększają sprzedaż i budują rozpoznawalność marki.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
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
              Dlaczego Facebook Ads?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Platforma reklamowa Facebooka oferuje niezrównane możliwości dotarcia do Twoich potencjalnych klientów
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
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-blue-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Facebook Ads Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Czym jest Facebook Ads?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Facebook Ads to platforma reklamowa, która umożliwia firmom i marketerom promowanie swoich produktów i usług na Facebooku oraz Instagramie. Jedną z głównych zalet jest możliwość dotarcia do szerokiego spektrum odbiorców dzięki dużej liczbie użytkowników aktywnych na platformie.
                </p>
                <p>
                  Warto inwestować w reklamę na Facebooku ze względu na <strong>precyzyjne targetowanie odbiorców</strong>. Reklama pozwala dotrzeć do konkretnych grup na podstawie ich zainteresowań, zachowań online oraz preferencji.
                </p>
                <p>
                  Różnice między reklamą tradycyjną a reklamą na Facebooku są zauważalne przede wszystkim w obszarze <strong>pomiaru skuteczności</strong>. Dzięki narzędziom dostępnym na platformie, marketerzy mają możliwość śledzenia konwersji i efektywności działań w czasie rzeczywistym.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/social-media/poznan" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Social Media Marketing
                </Link>
                <Link to="/kompleksowa-obsluga-marketingowa" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Kompleksowa obsługa
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
                { value: "2mld+", label: "Aktywnych użytkowników" },
                { value: "98%", label: "Precyzja targetowania" },
                { value: "5x", label: "Wyższy ROI vs tradycja" },
                { value: "24/7", label: "Monitoring kampanii" },
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Formats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Formaty reklam na Facebooku
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dobieramy format reklamy do Twoich celów biznesowych i preferencji grupy docelowej
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adFormats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <format.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{format.title}</h3>
                <p className="text-muted-foreground text-sm">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Targeting Section */}
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
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Targetowanie demograficzne</h3>
                      <p className="text-muted-foreground text-sm">Wiek, płeć, lokalizacja, wykształcenie, stan cywilny</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Zainteresowania i zachowania</h3>
                      <p className="text-muted-foreground text-sm">Hobby, aktywności, zakupy online, interakcje</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Lookalike Audience</h3>
                      <p className="text-muted-foreground text-sm">Grupy podobne do Twoich najlepszych klientów</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <RefreshCw className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Retargeting</h3>
                      <p className="text-muted-foreground text-sm">Ponowne dotarcie do osób, które odwiedziły Twoją stronę</p>
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
                Precyzyjne targetowanie odbiorców
              </h2>
              <p className="text-muted-foreground mb-6">
                Facebook Ads oferuje zaawansowane możliwości targetowania, które pozwalają dotrzeć z reklamą do bardzo precyzyjnie określonej grupy odbiorców. Możesz skoncentrować się na użytkownikach o określonym wieku, płci, lokalizacji, a także na tych, którzy wykazali zainteresowanie konkretnymi kategoriami produktów.
              </p>
              <p className="text-muted-foreground mb-6">
                Wykorzystanie <strong>Lookalike Audience</strong> i <strong>retargetingu</strong> to zaawansowane opcje, które pozwalają na zwiększenie efektywności kampanii. Lookalike umożliwia tworzenie grup podobnych do aktualnych klientów, natomiast retargeting pozwala na ponowne dotarcie do osób, które już wcześniej zetknęły się z marką.
              </p>
              <Link to="/seo/pozycjonowanie" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                Zobacz jak łączymy Facebook Ads z SEO <ArrowRight className="w-4 h-4" />
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
              Jak tworzymy kampanie?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sprawdzony proces, który gwarantuje skuteczne kampanie reklamowe
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
                  <span className="text-5xl font-bold text-blue-500/20">{step.step}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-500/40" />
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
              Cennik Facebook Ads
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
                  pkg.popular ? "border-blue-500 shadow-lg shadow-blue-500/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
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
                  className={`w-full ${pkg.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego. Budżet opłacany jest bezpośrednio w Menedżerze Reklam.
          </p>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Maksymalizacja zwrotu z inwestycji (ROI)
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Analiza danych to podstawa w procesie optymalizacji kampanii reklamowych na Facebooku. Facebook dostarcza szczegółowe raporty, które pozwalają na głębokie zrozumienie wyników kampanii, w tym dane dotyczące zasięgu, zaangażowania, kosztu za kliknięcie (CPC), stopy konwersji i wielu innych.
                </p>
                <p>
                  <strong>Testowanie A/B</strong> jest fundamentalne w procesie optymalizacji. Pozwala na porównywanie różnych wersji reklam pod kątem ich wydajności, co ułatwia identyfikację najlepiej działających elementów kampanii.
                </p>
                <p>
                  Regularne dostosowywanie budżetu i oferty na podstawie analizy wyników pozwala maksymalizować ROI. Elastyczność w zarządzaniu budżetem reklamowym jest kluczowa, zwłaszcza w kontekście zmieniających się warunków rynkowych.
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
                { icon: PieChart, title: "Konwersja", description: "Śledzenie działań użytkowników po kliknięciu w reklamę" },
                { icon: Eye, title: "Zasięg", description: "Liczba unikalnych osób, które widziały reklamę" },
                { icon: MousePointer, title: "CTR", description: "Współczynnik klikalności - stosunek kliknięć do wyświetleń" },
                { icon: TrendingUp, title: "ROAS", description: "Zwrot z wydatków na reklamę - przychód vs koszt" },
              ].map((metric, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-4 flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-5 h-5 text-blue-400" />
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
              Odpowiedzi na pytania dotyczące kampanii Facebook Ads
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
              { title: "Google Ads", description: "Reklamy w wyszukiwarce dla klientów z intencją zakupową", href: "/performance-marketing/google-ads", icon: Target },
              { title: "E-commerce & Sklepy", description: "Tworzymy skuteczne sklepy online", href: "/uslugi/strony-internetowe/ecommerce", icon: ShoppingCart },
              { title: "Social Media", description: "Kompleksowa obsługa mediów społecznościowych", href: "/social-media/poznan", icon: Users },
              { title: "Strony internetowe", description: "Profesjonalne strony z wysoką konwersją", href: "/uslugi/strony-internetowe", icon: Monitor },
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
                  className="block bg-card border border-border rounded-2xl p-6 hover:border-blue-500/50 transition-all group h-full"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-blue-400 transition-colors">
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
              <Link to="/dla-kogo/firmy-lokalne" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-blue-500/50 transition-colors">
                Firmy lokalne
              </Link>
              <Link to="/dla-kogo/ecommerce" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-blue-500/50 transition-colors">
                E-commerce
              </Link>
              <Link to="/dla-kogo/marki-premium" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-blue-500/50 transition-colors">
                Marki premium
              </Link>
              <Link to="/dla-kogo/instytucje" className="px-4 py-2 bg-card border border-border rounded-full text-sm hover:border-blue-500/50 transition-colors">
                Instytucje i eventy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Services */}

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Facebook Ads — reklama na Facebooku i kampanie Meta Ads</h2>
            <p className="text-muted-foreground mb-4">Facebook Ads to jeden z najpotężniejszych systemów reklamowych na świecie — umożliwia dotarcie do precyzyjnie określonych grup odbiorców według demografii, zainteresowań, zachowań i własnych list klientów (Custom Audiences). Kampanie Facebook Ads działają zarówno na Facebooku, jak i Instagramie, Messengerze i Audience Network.</p>
            <p className="text-muted-foreground mb-6">Prowadzenie kampanii Facebook Ads wymaga wiedzy o strukturze kampanii (kampania → zestaw reklam → reklamy), testowaniu kreacji A/B, optymalizacji budżetu, remarketingu i analizie danych w Meta Business Suite. Reklama na Facebooku i możliwości targetowania są ogromne — kluczem jest właściwa strategia i ciągła optymalizacja.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Kampanie Facebook Ads — formaty reklam i cele kampanii</h2>
            <p className="text-muted-foreground mb-4">Formy reklamy na Facebooku: reklamy graficzne (single image), karuzele, reklamy wideo, kolekcje, reklamy lead (Lead Ads do zbierania kontaktów), reklamy dynamiczne dla e-commerce (DPA), Stories Ads i Reels Ads. Każdy format ma inne zastosowanie zależnie od celu kampanii.</p>
            <p className="text-muted-foreground">Reklama na Facebooku dla firm lokalnych pozwala targetować odbiorców po lokalizacji — w promieniu kilometrów od Twojej siedziby. Formy reklamy na Facebooku można dostosować do każdego etapu lejka sprzedażowego: od budowania świadomości marki, przez generowanie leadów, po retargeting i zwiększenie sprzedaży. Sprawdź, jak kampanie Facebook Ads mogą rozwinąć Twój biznes.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServices 
        currentService="facebook-ads"
        subtitle="Inne platformy reklamowe i usługi wspierające marketing w social media"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotowy na skuteczne kampanie?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy zwiększyć Twoją sprzedaż dzięki Facebook Ads.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
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

export default FacebookAds;
