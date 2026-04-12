import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, TrendingUp, BarChart3, Megaphone, Globe, PenTool, Mail, CheckCircle, Zap, Crown, Briefcase, LineChart, Smartphone, Search } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe",
    description: "Profesjonalne strony www zoptymalizowane pod SEO",
    link: "/uslugi/strony-internetowe"
  },
  {
    icon: Smartphone,
    title: "Social Media",
    description: "Kompleksowe prowadzenie profili w mediach społecznościowych",
    link: "/social-media/obsluga"
  },
  {
    icon: Search,
    title: "Pozycjonowanie SEO",
    description: "Optymalizacja i pozycjonowanie w Google",
    link: "/seo/pozycjonowanie"
  },
  {
    icon: Megaphone,
    title: "Kampanie reklamowe",
    description: "Google Ads, Meta Ads i kampanie display",
    link: "/uslugi/produkcja-video"
  },
  {
    icon: PenTool,
    title: "Content marketing",
    description: "Tworzenie angażujących treści dla Twojej marki",
    link: "/uslugi"
  },
  {
    icon: BarChart3,
    title: "Analityka i raportowanie",
    description: "Monitoring wyników i optymalizacja działań",
    link: "/uslugi"
  }
];

const benefits = [
  {
    icon: Target,
    title: "Spójność działań",
    description: "Wszystkie kanały marketingowe działają zgodnie z jedną strategią"
  },
  {
    icon: TrendingUp,
    title: "Wzrost sprzedaży",
    description: "Skuteczne pozyskiwanie leadów i konwersja na klientów"
  },
  {
    icon: Users,
    title: "Dedykowany zespół",
    description: "Osobisty opiekun i zespół specjalistów do Twojej dyspozycji"
  },
  {
    icon: LineChart,
    title: "Mierzalne rezultaty",
    description: "Regularne raporty i transparentne wyniki działań"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Audyt i analiza",
    description: "Dokładna analiza potrzeb Twojego biznesu i dotychczasowych działań marketingowych"
  },
  {
    step: "02",
    title: "Strategia",
    description: "Opracowanie kompleksowej strategii marketingowej dopasowanej do celów"
  },
  {
    step: "03",
    title: "Realizacja",
    description: "Wdrożenie działań marketingowych we wszystkich wybranych kanałach"
  },
  {
    step: "04",
    title: "Optymalizacja",
    description: "Ciągły monitoring, analiza wyników i optymalizacja strategii"
  }
];

const pricingPackages = [
  {
    name: "Start",
    icon: Zap,
    price: "2 499",
    period: "/mies.",
    description: "Dla małych firm rozpoczynających działania marketingowe",
    features: [
      "Prowadzenie 2 profili social media",
      "8 postów miesięcznie",
      "Podstawowe SEO strony",
      "Raport miesięczny",
      "Dedykowany opiekun",
    ],
    popular: false,
  },
  {
    name: "Business",
    icon: Briefcase,
    price: "4 999",
    period: "/mies.",
    description: "Kompleksowa obsługa dla rozwijających się firm",
    features: [
      "Prowadzenie 3 profili social media",
      "16 postów miesięcznie",
      "Kampanie Google Ads (budżet do 2000 zł)",
      "Kampanie Meta Ads (budżet do 2000 zł)",
      "Pozycjonowanie SEO",
      "Content marketing (2 artykuły/mies.)",
      "Raport tygodniowy",
      "Dedykowany opiekun",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Crown,
    price: "9 999",
    period: "/mies.",
    description: "Pełna obsługa marketingowa dla ambitnych firm",
    features: [
      "Prowadzenie wszystkich profili social media",
      "Nieograniczona liczba postów",
      "Kampanie Google Ads (budżet do 10 000 zł)",
      "Kampanie Meta Ads (budżet do 10 000 zł)",
      "Zaawansowane pozycjonowanie SEO",
      "Content marketing (8 artykułów/mies.)",
      "E-mail marketing",
      "Produkcja video (2 filmy/mies.)",
      "Raport tygodniowy + call strategiczny",
      "Dedykowany zespół projektowy",
    ],
    popular: false,
  },
];

const faqItems = [
  {
    question: "Jakie korzyści przynosi kompleksowa obsługa marketingowa?",
    answer: "Kompleksowa obsługa marketingowa pozwala na zwiększenie rozpoznawalności marki, pozyskiwanie nowych klientów i wzrost świadomości marki. Dzięki odpowiednim narzędziom i strategiom, takim jak pozycjonowanie w Google czy efektywne kampanie w mediach społecznościowych, firmy mogą skuteczniej konkurować na rynku."
  },
  {
    question: "Co wchodzi w zakres usług kompleksowej obsługi marketingowej?",
    answer: "W ramach obsługi marketingowej oferujemy: pozycjonowanie stron internetowych, prowadzenie kampanii reklamowych w mediach społecznościowych, copywriting, tworzenie i zarządzanie landing page, produkcję video oraz opracowywanie strategii marketingowej skrojonej na miarę potrzeb Twojej firmy."
  },
  {
    question: "Dlaczego social media jest ważne dla małych firm?",
    answer: "Social media marketing jest kluczowym elementem strategii, ponieważ pozwala na bezpośredni kontakt z klientami, budowanie relacji i zwiększanie zaangażowania. Platformy takie jak Facebook, Instagram czy LinkedIn umożliwiają dotarcie do dużej grupy potencjalnych klientów."
  },
  {
    question: "Jak mierzyć efektywność działań marketingowych?",
    answer: "Efektywność mierzymy przy pomocy narzędzi analitycznych, które dostarczają informacji o zachowaniach użytkowników, reakcjach na kampanie oraz konwersjach. Ustalamy konkretne KPIs takie jak wzrost odwiedzin, liczba leadów czy sprzedaż, a następnie regularnie monitorujemy wyniki."
  },
  {
    question: "Czy mała firma bez działu marketingu może skutecznie konkurować?",
    answer: "Tak! Mała firma bez własnego działu marketingu może efektywnie konkurować, korzystając z profesjonalnych usług agencji. Oferujemy kompleksowe usługi od analizy rynku, przez strategię, aż po realizację kampanii, co pozwala nawet małym firmom budować obecność online."
  },
  {
    question: "Co to jest lead w marketingu internetowym?",
    answer: "Lead to potencjalny klient, który wyraził zainteresowanie produktem lub usługą poprzez wykonanie akcji - zapisanie się na newsletter, wypełnienie formularza czy pobranie materiałów. Pozyskiwanie leadów jest kluczowym elementem strategii marketingowych."
  },
  {
    question: "Jak copywriting wspiera działania marketingowe?",
    answer: "Profesjonalne teksty wpływają na pozycjonowanie strony w Google, angażowanie odbiorców i przekonywanie ich do działania. Dobre treści budują wizerunek eksperta, wzmacniają branding i skutecznie komunikują zalety oferowanych produktów lub usług."
  },
  {
    question: "Jak długo trwa wdrożenie strategii marketingowej?",
    answer: "Pełne wdrożenie strategii marketingowej trwa zazwyczaj 4-8 tygodni, w zależności od zakresu działań. Pierwsze efekty w postaci zwiększonego ruchu na stronie i większego zasięgu w social media są widoczne już po 2-4 tygodniach."
  }
];

const KompleksowaObsluga = () => {
  return (
    <>
      <SEOHead
        title="Kompleksowa Obsługa Marketingowa Firm — Marketing 360° dla Biznesu | Fotz Studio"
        description="Kompleksowa obsługa marketingowa firm — marketing 360°: SEO, social media, content, reklamy Google i Meta, produkcja wideo. Jeden partner dla całego…"
        canonical="https://fotz.pl/kompleksowa-obsluga-marketingowa"
        keywords="kompleksowa obsługa marketingowa, pełna obsługa marketingu, agencja marketingowa kompleksowa, marketing 360, outsourcing marketingu"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Kompleksowa obsługa", url: "https://fotz.pl/kompleksowa-obsluga" }
        ]}
      />
      <ServiceSchema 
        name="Kompleksowa obsługa marketingowa"
        description="Pełna obsługa marketingowa dla małych firm - strategia, social media, SEO, kampanie, content marketing."
        provider="Fotz Studio"
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />
      
      <OrganizationSchema />

      
      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#75143F]/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#75143F]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75143F]/20 rounded-full blur-3xl" />
          </div>
          
          <div className="container-wide px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-[#75143F] mb-6"
              >
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Kompleksowa obsługa</span>
              </motion.div>
              
              <TextReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Kompleksowa Obsługa Marketingowa{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">
                    dla Małych Firm
                  </span>
                </h1>
              </TextReveal>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                W dynamicznie zmieniającym się świecie marketingu cyfrowego, małe firmy stoją przed wielkimi możliwościami. 
                Kompleksowa obsługa marketingowa może być kluczem do sukcesu w budowaniu marki i zwiększeniu sprzedaży.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt" className="group">
                    Bezpłatna konsultacja
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#cennik">
                    Zobacz pakiety
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInView>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Jak rozpocząć{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">kompleksową obsługę?</span>
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      Pierwszym krokiem jest dokładna <strong className="text-foreground">analiza potrzeb Twojego biznesu</strong> oraz 
                      określenie celów marketingowych. Zrozumienie kim są Twoi potencjalni klienci i jak najefektywniej do nich dotrzeć.
                    </p>
                    <p>
                      Kompleksowa obsługa powinna obejmować wszystkie aspekty <Link to="/uslugi" className="text-[#75143F] hover:underline">marketingu internetowego</Link> - 
                      od analizy rynku, przez planowanie strategii, realizację kampanii reklamowych, 
                      <Link to="/seo/pozycjonowanie" className="text-[#75143F] hover:underline"> optymalizację SEO</Link>, 
                      <Link to="/social-media/obsluga" className="text-[#75143F] hover:underline"> marketing w social media</Link>, 
                      aż po analizę i raportowanie wyników.
                    </p>
                    <p>
                      Szukaj agencji z doświadczeniem w pracy z małymi firmami, która rozumie ich specyfikę i ograniczenia budżetowe - 
                      takiej jak <strong className="text-foreground">Fotz Studio</strong>.
                    </p>
                  </div>
                </div>
              </FadeInView>
              
              <FadeInView delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-card border border-border rounded-xl p-5 hover:border-[#75143F]/50 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zakres usług marketingowych
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Szeroki zakres usług dostosowanych do potrzeb małych i średnich firm
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <FadeInView key={service.title} delay={index * 0.1}>
                  <Link to={service.link}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-card border border-border rounded-2xl p-6 h-full hover:border-[#75143F]/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#75143F] transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="mt-4 flex items-center text-[#75143F] text-sm font-medium">
                        Dowiedz się więcej
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Building Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Jak agencja marketingowa pomaga{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">w rozwoju Twojej marki?</span>
                </h2>
                
                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Kluczowe działania dla małych firm</h3>
                    <p className="text-muted-foreground mb-4">
                      Dla małych firm kluczowe są działania umożliwiające budowanie świadomości marki i pozyskiwanie nowych klientów. 
                      Obejmują one efektywny <strong className="text-foreground">content marketing</strong>, 
                      obecność w <Link to="/social-media/obsluga" className="text-[#75143F] hover:underline">social media</Link> (Facebook, Instagram), 
                      a także lokalne <Link to="/seo/pozycjonowanie" className="text-[#75143F] hover:underline">działania SEO</Link>.
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Budowanie rozpoznawalności w internecie</h3>
                    <p className="text-muted-foreground mb-4">
                      Budowanie rozpoznawalności wymaga strategicznego podejścia do content marketingu oraz efektywnego wykorzystania 
                      kanałów <Link to="/social-media/obsluga" className="text-[#75143F] hover:underline">social media</Link>. 
                      Tworzenie wartościowych treści odpowiadających na potrzeby klientów, wsparte 
                      <Link to="/uslugi/produkcja-video" className="text-[#75143F] hover:underline"> kampaniami reklamowymi</Link> w Google Ads czy Meta Ads.
                    </p>
                  </div>
                  
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Profesjonalna strona internetowa</h3>
                    <p className="text-muted-foreground">
                      <Link to="/uslugi/strony-internetowe" className="text-[#75143F] hover:underline">Tworzenie stron www</Link> jest kluczowym 
                      elementem strategii marketingowej. Profesjonalnie zaprojektowana strona buduje pozytywny wizerunek marki i stanowi 
                      platformę do komunikacji z klientami. <Link to="/seo/pozycjonowanie" className="text-[#75143F] hover:underline">Optymalizacja pod kątem SEO</Link> pozwala 
                      łatwiej dotrzeć do potencjalnych klientów przez wyszukiwarki.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak wygląda nasza współpraca?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od analizy do osiągania rezultatów
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <FadeInView key={step.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="cennik" className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pakiety{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">kompleksowej obsługi</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wybierz pakiet dopasowany do potrzeb i możliwości Twojej firmy
                </p>
              </div>
            </FadeInView>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingPackages.map((pkg, index) => (
                <FadeInView key={pkg.name} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    className={`relative bg-card border rounded-2xl p-8 h-full flex flex-col ${
                      pkg.popular 
                        ? "border-[#75143F] ring-2 ring-[#75143F]/20" 
                        : "border-border hover:border-[#75143F]/50"
                    } transition-all duration-300`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-brand rounded-full text-white text-xs font-medium">
                        Najpopularniejszy
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                        <pkg.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                      <p className="text-sm text-muted-foreground">{pkg.description}</p>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-muted-foreground"> zł{pkg.period}</span>
                    </div>
                    
                    <ul className="space-y-3 mb-8 flex-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-[#75143F] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={pkg.popular ? "hero" : "outline"} 
                      className="w-full" 
                      asChild
                    >
                      <Link to="/kontakt">
                        Wybierz pakiet
                      </Link>
                    </Button>
                  </motion.div>
                </FadeInView>
              ))}
            </div>
            
            <FadeInView delay={0.4}>
              <div className="mt-12 text-center">
                <p className="text-muted-foreground">
                  Potrzebujesz indywidualnej wyceny?{" "}
                  <Link to="/kontakt" className="text-[#75143F] hover:underline font-medium">
                    Skontaktuj się z nami
                  </Link>
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Często zadawane pytania</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na najczęstsze pytania o kompleksową obsługę marketingową
                </p>
              </div>
            </FadeInView>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </FadeInView>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-20 text-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
                </div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Gotowy na wzrost Twojej firmy?
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Umów się na bezpłatną konsultację i dowiedz się, jak kompleksowa obsługa marketingowa może pomóc w rozwoju Twojego biznesu.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/kontakt" className="group">
                      Umów bezpłatną konsultację
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Kompleksowa obsługa marketingowa — marketing 360° dla firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Kompleksowa obsługa marketingowa firm to model współpracy, w którym Fotz Studio
              staje się zewnętrznym działem marketingu Twojej firmy. Zarządzamy całością
              działań: SEO i pozycjonowanie, kampanie reklamowe Google Ads i Meta Ads,
              social media marketing, content marketing, produkcja wideo i grafika.
              Marketing 360° to synergia wszystkich kanałów — efekty wielokrotnie wyższe
              niż suma działań osobnych.
            </p>
            <p className="text-muted-foreground mb-6">
              Zamiast koordynować kilku dostawców — jedną agencję SEO, inną do social media,
              inne studio wideo — zlecasz wszystko jednemu partnerowi. Oszczędzasz czas,
              pieniądze i masz spójną komunikację marki we wszystkich kanałach.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Outsourcing marketingu — zewnętrzny dział marketingu dla Twojej firmy
            </h2>
            <p className="text-muted-foreground mb-4">
              Outsourcing marketingu to rozwiązanie idealne dla firm, które chcą
              profesjonalnych działań marketingowych bez kosztów zatrudniania
              in-house marketerów. Zewnętrzny dział marketingu Fotz Studio to doświadczony
              zespół specjalistów SEO, social media managerów, copywriterów i grafików —
              za ułamek kosztów budowania własnego działu.
            </p>
            <p className="text-muted-foreground mb-6">
              Stała kompleksowa obsługa marketingowa obejmuje: miesięczną strategię
              działań, cotygodniowe posty i treści, raportowanie wyników, optymalizację
              kampanii i reakcję na zmiany rynkowe. Reagujemy elastycznie na potrzeby
              Twojego biznesu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strategia marketingowa i realizacja — marketing dla małych i średnich firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Kompleksowy marketing dla małych i średnich firm to nasza specjalność.
              Wiemy, że budżety są ograniczone, dlatego priorytetyzujemy działania
              z najwyższym ROI. Zaczynamy od audytu obecnej sytuacji, opracowujemy
              realną strategię marketingową i wdrażamy ją krok po kroku.
            </p>
            <p className="text-muted-foreground">
              Fotz Studio obsługuje firmy z branży usługowej, e-commerce, deweloperskiej,
              medycznej i wielu innych. Skontaktuj się z nami po bezpłatną wycenę
              kompleksowej obsługi marketingowej i dowiedz się, jak możemy przyspieszyć
              wzrost Twojego biznesu.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
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

export default KompleksowaObsluga;
