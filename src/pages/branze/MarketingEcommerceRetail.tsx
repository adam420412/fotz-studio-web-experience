import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ShoppingCart, ArrowRight, CheckCircle, Package, Camera, TrendingUp, CreditCard, BarChart, Truck, Percent, Plus, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { useCountUp } from "@/hooks/useCountUp";
import { OtherIndustries } from "@/components/sections/OtherIndustries";

import friendlyGasImg from "@/assets/portfolio/friendly-gas-new.png";

const ModelViewer3D = lazy(() => import("@/components/ModelViewer3D").then(module => ({ default: module.ModelViewer3D })));

const services = [
  {
    icon: ShoppingCart,
    title: "Sklepy internetowe",
    description: "Profesjonalne sklepy e-commerce na Shopify, WooCommerce i dedykowanych platformach.",
  },
  {
    icon: Camera,
    title: "Fotografia produktowa",
    description: "Packshoty, zdjęcia lifestyle i 360° dla katalogów i marketplace'ów.",
  },
  {
    icon: TrendingUp,
    title: "Performance marketing",
    description: "Kampanie Google Shopping, Facebook Dynamic Ads i remarketing dla e-commerce.",
  },
  {
    icon: CreditCard,
    title: "Optymalizacja konwersji",
    description: "UX/UI, A/B testy i optymalizacja ścieżki zakupowej dla wyższej sprzedaży.",
  },
];

const customSolutions = [
  {
    icon: Package,
    title: "Konfigurator 3D produktów",
    description: "Interaktywny konfigurator pozwalający klientom personalizować produkty i oglądać je w 3D przed zakupem.",
  },
  {
    icon: BarChart,
    title: "Dashboard analityczny",
    description: "Dedykowany panel z KPI sprzedażowymi, analizą koszyków i śledzeniem customer journey.",
  },
  {
    icon: Truck,
    title: "Automatyzacja zamówień",
    description: "Integracje z kurierami, hurtowniami i systemami ERP dla automatycznego processingu zamówień.",
  },
];

const benefits = [
  "Wzrost sprzedaży online o 150%",
  "Konfigurator 3D produktów do personalizacji",
  "Integracja z marketplace'ami (Allegro, Amazon)",
  "Automatyzacja marketingu i remarketingu",
  "Profesjonalna fotografia produktowa",
  "Optymalizacja pod urządzenia mobilne",
];

const faqItems = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego?",
    answer: "Prosty sklep na WooCommerce zaczyna się od 8000 zł. Zaawansowany sklep z integracjami i konfiguratorem to 20000-80000 zł. Sklepy enterprise na dedykowanych platformach od 50000 zł.",
  },
  {
    question: "Czy tworzycie konfiguratory 3D dla produktów?",
    answer: "Tak, tworzymy interaktywne konfiguratory 3D pozwalające klientom personalizować produkty - wybierać warianty, kolory, materiały i oglądać efekt w czasie rzeczywistym przed zakupem.",
  },
  {
    question: "Jak zwiększyć konwersję w sklepie online?",
    answer: "Kluczowe są: szybkość ładowania, intuicyjna nawigacja, profesjonalne zdjęcia produktów, prosty checkout, social proof (opinie), urgency elements i remarketing do porzuconych koszyków.",
  },
  {
    question: "Czy integrujecie sklepy z Allegro i Amazon?",
    answer: "Tak, oferujemy integracje z popularnymi marketplace'ami. Synchronizujemy stany magazynowe, ceny i zamówienia między sklepem własnym a platformami zewnętrznymi.",
  },
  {
    question: "Jak działa fotografia produktowa 360°?",
    answer: "Fotografujemy produkt na obrotowym stoliku, tworząc sekwencję zdjęć z każdego kąta. Efekt to interaktywna wizualizacja, którą klient może obracać myszką lub palcem.",
  },
];

const relatedServices = [
  { title: "E-commerce", href: "/ecommerce-tworzenie-sklepu", description: "Tworzenie sklepów online" },
  { title: "Wizualizacje 3D", href: "/wizualizacje-3d", description: "Konfiguratory produktów" },
  { title: "Google Ads", href: "/google-ads", description: "Kampanie Shopping" },
  { title: "Facebook Ads", href: "/facebook-ads", description: "Dynamic Ads" },
];

const MarketingEcommerceRetail = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <Helmet>
        <title>Marketing dla E-commerce i Retail | Sklepy Online | Fotz Studio</title>
        <meta name="description" content="Marketing dla e-commerce - sklepy internetowe, fotografia produktowa, konfiguratory 3D, kampanie performance. Zwiększ sprzedaż online." />
        <link rel="canonical" href="https://fotz.pl/dla-kogo/ecommerce-retail" />
      </Helmet>

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla e-commerce i retail"
        description="Kompleksowy marketing dla sklepów internetowych i sieci handlowych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Dla kogo", url: "https://fotz.pl/dla-kogo" },
          { name: "E-commerce & Retail", url: "https://fotz.pl/dla-kogo/ecommerce-retail" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(280, 71%, 27%, 0.1)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing e-commerce</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">e-commerce i retail</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy sklepom internetowym i sieciom handlowym zwiększać sprzedaż. 
              Konfiguratory 3D, fotografia produktowa i kampanie performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
              { value: 150, suffix: "%", label: "wzrost sprzedaży online" },
              { value: 80, suffix: "+", label: "stworzonych sklepów" },
              { value: 10000, suffix: "+", label: "sfotografowanych produktów" },
              { value: 4, suffix: "x", label: "wyższy ROAS" },
            ].map((stat, index) => {
              const { ref, displayValue } = useCountUp({ end: stat.value, suffix: stat.suffix });
              return (
                <div key={index} ref={ref} className="text-center p-6 rounded-2xl bg-card border border-border/30">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium">
                    {displayValue}
                  </div>
                  <p className="text-foreground/60 text-sm mt-2">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* 3D Configurator Demo */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Konfigurator <span className="text-gradient-premium">3D produktów</span>
              </h2>
              <p className="text-foreground/70 mb-6">
                Pozwól klientom personalizować produkty i oglądać je w 3D przed zakupem. 
                Zwiększ konwersję i zmniejsz liczbę zwrotów.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Interaktywne obracanie produktu</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Wybór wariantów, kolorów i materiałów</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">Automatyczna wycena konfiguracji</span>
                </div>
              </div>
              <Button asChild>
                <a href="https://klagem.pl/" target="_blank" rel="noopener noreferrer">
                  Zobacz konfigurator na żywo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-muted to-muted/50 border border-border/30">
                <Suspense fallback={<div className="w-full h-full bg-muted animate-pulse flex items-center justify-center"><span className="text-muted-foreground">Ładowanie...</span></div>}>
                  <ModelViewer3D 
                    modelUrl="/models/regulator-3d.glb"
                  />
                </Suspense>
              </div>
              <p className="text-center text-foreground/60 text-sm mt-4">
                Obracaj model 3D myszką lub palcem
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Usługi dla <span className="text-gradient-premium">e-commerce</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla sklepów internetowych
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-foreground/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dedykowane <span className="text-gradient-premium">rozwiązania</span>
            </h2>
            <p className="text-foreground/70">
              Systemy i narzędzia stworzone specjalnie dla e-commerce
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego warto <span className="text-gradient-premium">współpracować?</span>
              </h2>
              <p className="text-foreground/70 mb-8">
                Rozumiemy specyfikę e-commerce - konwersję, customer journey, 
                performance marketing i automatyzację procesów sprzedażowych.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Link to="/case-study-friendly-gas" className="block group">
                <div className="aspect-square rounded-3xl overflow-hidden relative">
                  <img 
                    src={friendlyGasImg} 
                    alt="Friendly Gas - case study e-commerce"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-sm opacity-80 mb-1 block">Case Study</span>
                    <p className="text-xl font-heading font-bold mb-1">Friendly Gas</p>
                    <p className="text-sm opacity-80">Branding i sklep e-commerce</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powiązane <span className="text-gradient-premium">usługi</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={service.href}
                  className="block p-6 rounded-2xl bg-background border border-border/30 hover:border-primary/50 transition-all duration-300 h-full group"
                >
                  <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{service.description}</p>
                  <ArrowRight className="w-4 h-4 text-primary mt-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Najczęściej zadawane <span className="text-gradient-premium">pytania</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border/30 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-foreground/70">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <OtherIndustries currentSlug="ecommerce-retail" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Gotowy na <span className="text-gradient-premium">więcej sprzedaży?</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy zwiększyć obroty Twojego sklepu.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingEcommerceRetail;
