import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Palette, 
  Rocket, 
  Shield,
  Phone,
  Code,
  Search,
  ShoppingCart,
  Smartphone,
  Zap
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import ContactSection from "@/components/sections/ContactSection";
import CityIntroSection from "@/components/sections/CityIntroSection";
import CityBenefitsSection from "@/components/sections/CityBenefitsSection";
import CityServicesGrid from "@/components/sections/CityServicesGrid";
import CityPricingCards from "@/components/sections/CityPricingCards";
import CityLinksSection from "@/components/sections/CityLinksSection";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

// Import portfolio images
import eneaStadion from "@/assets/portfolio/enea-stadion.png";
import fpsCegielski from "@/assets/portfolio/fps-cegielski.png";
import klagem from "@/assets/portfolio/klagem.png";

const StronyInternetoweGliwice = () => {
  const services = [
    {
      icon: Globe,
      title: "Strony firmowe",
      description: "Profesjonalne strony internetowe dla firm z Gliwic i Śląska"
    },
    {
      icon: ShoppingCart,
      title: "Sklepy internetowe",
      description: "E-commerce z płatnościami online i integracjami"
    },
    {
      icon: Smartphone,
      title: "Strony responsywne",
      description: "Idealne wyświetlanie na wszystkich urządzeniach"
    },
    {
      icon: Search,
      title: "Optymalizacja SEO",
      description: "Pozycjonowanie w wynikach Google dla Gliwic"
    },
    {
      icon: Zap,
      title: "Szybkie strony",
      description: "Optymalizacja wydajności i szybkości ładowania"
    },
    {
      icon: Code,
      title: "Rozwiązania dedykowane",
      description: "Aplikacje webowe dopasowane do potrzeb"
    }
  ];

  const pricing = [
    {
      name: "Strona wizytówka",
      price: "od 1 500 zł",
      description: "Idealna dla małych firm z Gliwic",
      features: [
        "Do 5 podstron",
        "Responsywny design",
        "Formularz kontaktowy",
        "Podstawowe SEO",
        "Certyfikat SSL"
      ]
    },
    {
      name: "Strona firmowa",
      price: "od 4 000 zł",
      description: "Dla rozwijających się przedsiębiorstw",
      features: [
        "Do 15 podstron",
        "System CMS",
        "Blog firmowy",
        "Zaawansowane SEO",
        "Integracje zewnętrzne",
        "Analityka Google"
      ],
      popular: true
    },
    {
      name: "Sklep internetowy",
      price: "od 8 000 zł",
      description: "Kompleksowy e-commerce",
      features: [
        "Nieograniczona liczba produktów",
        "Płatności online",
        "Integracja z kurierami",
        "Panel administracyjny",
        "Marketing automation",
        "Wsparcie techniczne"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analiza potrzeb",
      description: "Poznajemy Twoją firmę, cele biznesowe i oczekiwania wobec strony internetowej"
    },
    {
      step: "02",
      title: "Projektowanie",
      description: "Tworzymy projekt graficzny dopasowany do identyfikacji wizualnej firmy"
    },
    {
      step: "03",
      title: "Programowanie",
      description: "Kodujemy stronę z dbałością o wydajność i bezpieczeństwo"
    },
    {
      step: "04",
      title: "Wdrożenie i wsparcie",
      description: "Publikujemy stronę i zapewniamy dalsze wsparcie techniczne"
    }
  ];

  const caseStudies = [
    {
      title: "Enea Stadion",
      category: "Strona korporacyjna",
      image: eneaStadion,
      result: "+200% więcej zapytań",
      link: "/realizacje/enea-stadion"
    },
    {
      title: "FPS Cegielski",
      category: "Strona przemysłowa",
      image: fpsCegielski,
      result: "Nowa identyfikacja online",
      link: "/realizacje/fps-cegielski"
    },
    {
      title: "Klagem",
      category: "E-commerce",
      image: klagem,
      result: "+150% sprzedaży online",
      link: "/realizacje/klagem"
    }
  ];

  const faqItems = [
    {
      question: "Ile kosztuje strona internetowa w Gliwicach?",
      answer: "Ceny stron internetowych zaczynają się od 1 500 zł za prostą wizytówkę. Strony firmowe to koszt od 4 000 zł, a sklepy internetowe od 8 000 zł. Dokładna wycena zależy od zakresu projektu."
    },
    {
      question: "Jak długo trwa realizacja strony?",
      answer: "Prosta strona wizytówka to 1-2 tygodnie. Strona firmowa wymaga 3-4 tygodni, a sklep internetowy 4-8 tygodni w zależności od złożoności projektu."
    },
    {
      question: "Czy oferujecie hosting i domenę?",
      answer: "Tak, pomagamy w wyborze i konfiguracji hostingu oraz domeny. Możemy również przejąć pełną obsługę techniczną strony."
    },
    {
      question: "Czy strona będzie zoptymalizowana pod SEO?",
      answer: "Każda strona tworzona jest z myślą o pozycjonowaniu. Stosujemy najlepsze praktyki SEO, aby Twoja strona była widoczna w Google."
    },
    {
      question: "Czy mogę samodzielnie edytować treści?",
      answer: "Tak, wszystkie nasze strony wyposażone są w intuicyjny panel CMS, który pozwala na łatwą edycję treści bez znajomości programowania."
    }
  ];

  const stats = [
    { value: "600+", label: "Zrealizowanych projektów" },
    { value: "100+", label: "Zadowolonych klientów" },
    { value: "160+", label: "Opinii Google" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Bezpieczeństwo",
      description: "Certyfikat SSL i regularne aktualizacje zabezpieczeń"
    },
    {
      icon: Rocket,
      title: "Wydajność",
      description: "Szybkie ładowanie strony i optymalizacja Core Web Vitals"
    },
    {
      icon: Palette,
      title: "Unikalny design",
      description: "Projekty dopasowane do identyfikacji wizualnej firmy"
    }
  ];

  const introContent = {
    title: "Profesjonalne strony internetowe dla firm z Gliwic",
    paragraphs: [
      "Gliwice to jedno z najważniejszych miast aglomeracji śląskiej, będące centrum nauki, technologii i przemysłu. Profesjonalna strona internetowa jest niezbędna dla każdej firmy, która chce skutecznie konkurować na tym dynamicznym rynku.",
      "Tworzymy strony internetowe, które nie tylko świetnie wyglądają, ale przede wszystkim realizują cele biznesowe - generują zapytania, budują wiarygodność i wspierają sprzedaż."
    ]
  };

  return (
    <>
      <Helmet>
        <title>Strony Internetowe Gliwice - Tworzenie Stron WWW | Fotz Studio</title>
        <meta 
          name="description" 
          content="Profesjonalne tworzenie stron internetowych w Gliwicach. Responsywne strony WWW, sklepy internetowe i pozycjonowanie SEO. Sprawdź nasze realizacje!" 
        />
        <meta 
          name="keywords" 
          content="strony internetowe Gliwice, tworzenie stron Gliwice, strony WWW Gliwice, projektowanie stron Gliwice, sklepy internetowe Gliwice" 
        />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-gliwice" />
      </Helmet>

      <ServiceSchema 
        name="Tworzenie Stron Internetowych Gliwice"
        description="Profesjonalne projektowanie i tworzenie stron internetowych dla firm z Gliwic. Responsywne strony WWW, sklepy e-commerce i pozycjonowanie SEO."
        provider="Fotz Studio"
        areaServed="Gliwice"
        url="https://fotz.pl/strony-internetowe-gliwice"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Strony Internetowe Gliwice", url: "https://fotz.pl/strony-internetowe-gliwice" }
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({
          question: item.question,
          answer: item.answer
        }))}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-background">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          
          <div className="container mx-auto px-4 py-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Strony internetowe Gliwice
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Tworzenie Stron Internetowych{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Gliwice
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Projektujemy nowoczesne strony WWW dla firm z Gliwic i aglomeracji śląskiej. 
                Responsywne, szybkie i zoptymalizowane pod SEO.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/kontakt">
                    Bezpłatna wycena
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <CityIntroSection content={introContent} />
        <CityBenefitsSection benefits={benefits} city="Gliwice" />
        <CityServicesGrid services={services} city="Gliwice" />

        {/* Process Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Jak pracujemy?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sprawdzony proces tworzenia stron internetowych
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
                  className="relative p-6 rounded-xl bg-card border border-border"
                >
                  <span className="text-5xl font-bold text-primary/20">{step.step}</span>
                  <h3 className="text-xl font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nasze realizacje
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Zobacz przykłady naszych projektów stron internetowych
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={study.link} className="group block">
                    <div className="relative overflow-hidden rounded-xl aspect-video mb-4">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">
                          {study.result}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground">{study.category}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CityPricingCards pricing={pricing} city="Gliwice" />
        <CityLinksSection currentCity="Gliwice" currentService="strony-internetowe" />

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Często zadawane pytania
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Odpowiedzi na najczęstsze pytania o tworzenie stron w Gliwicach
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-card border border-border rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
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

        <ContactSection />
      </Layout>
    </>
  );
};

export default StronyInternetoweGliwice;
