import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, CheckCircle2, 
  ArrowRight, Briefcase, Building2, Award,
  UserCheck, MessageSquare, Mail, FileText, Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";

const LinkedInAds = () => {
  const benefits = [
    { icon: Briefcase, title: "Decydenci B2B", description: "Docieraj do CEO, dyrektorów i managerów" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Branża, stanowisko, wielkość firmy, umiejętności" },
    { icon: Award, title: "Profesjonalny kontekst", description: "Reklamy wyświetlane w środowisku biznesowym" },
    { icon: TrendingUp, title: "Wysokiej jakości leady", description: "Leady o wyższej wartości i konwersji" },
  ];

  const adFormats = [
    { icon: FileText, title: "Sponsored Content", description: "Promowane posty w feedzie użytkowników" },
    { icon: Mail, title: "Message Ads", description: "Spersonalizowane wiadomości do skrzynki odbiorczej" },
    { icon: Users, title: "Dynamic Ads", description: "Dynamicznie personalizowane reklamy" },
    { icon: Globe, title: "Text Ads", description: "Klasyczne reklamy tekstowe w sidebarze" },
    { icon: UserCheck, title: "Lead Gen Forms", description: "Formularze lead generation bez opuszczania LinkedIn" },
    { icon: MessageSquare, title: "Conversation Ads", description: "Interaktywne reklamy z wieloma CTA" },
  ];

  const processSteps = [
    { step: "01", title: "Analiza i strategia", description: "Definiujemy ICP i mapujemy ścieżkę decyzyjną" },
    { step: "02", title: "Konfiguracja kampanii", description: "Ustawiamy precyzyjne targetowanie B2B" },
    { step: "03", title: "Kreacje profesjonalne", description: "Tworzymy content dopasowany do LinkedIn" },
    { step: "04", title: "Optymalizacja i lead nurturing", description: "Kwalifikujemy leady i optymalizujemy CPL" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "2 500",
      period: "/mies.",
      description: "Testowanie LinkedIn Ads",
      features: [
        "Budżet reklamowy do 5 000 zł",
        "Sponsored Content",
        "Targetowanie podstawowe",
        "1 kampania aktywna",
        "Raport miesięczny",
        "Insight Tag setup",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "4 500",
      period: "/mies.",
      description: "Pełna obsługa B2B",
      features: [
        "Budżet reklamowy do 15 000 zł",
        "Sponsored Content + Message Ads",
        "Lead Gen Forms",
        "Zaawansowane targetowanie",
        "ABM - Account Based Marketing",
        "Testy A/B kreacji",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "8 000",
      period: "/mies.",
      description: "Kompleksowy ABM",
      features: [
        "Budżet reklamowy bez limitu",
        "Wszystkie formaty reklamowe",
        "Conversation Ads",
        "Integracja z CRM",
        "LinkedIn Sales Navigator",
        "Dedykowany opiekun",
        "Strategia content marketing",
        "Lead scoring i nurturing",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "900M+", label: "Profesjonalistów na LinkedIn" },
    { value: "80%", label: "Lead'ów B2B z LinkedIn" },
    { value: "4x", label: "Wyższy intent zakupowy" },
    { value: "33%", label: "Niższy CPL vs inne platformy B2B" },
  ];

  const faqItems = [
    {
      question: "Czy LinkedIn Ads sprawdzi się dla mojej firmy?",
      answer: "LinkedIn Ads jest idealny dla B2B: firm IT, SaaS, konsultingu, rekrutacji, edukacji biznesowej, usług profesjonalnych. Jeśli Twoi klienci to firmy lub profesjonaliści podejmujący decyzje zakupowe - LinkedIn będzie najbardziej efektywną platformą. Dla B2C i produktów konsumenckich lepiej sprawdzą się Facebook czy Google Ads."
    },
    {
      question: "Jaki budżet potrzebuję na LinkedIn Ads?",
      answer: "LinkedIn ma wyższe stawki niż inne platformy (CPC od 15-50 zł), ale oferuje lepszą jakość leadów. Minimalny sensowny budżet to 3000-5000 zł miesięcznie. Dla skutecznych kampanii ABM rekomendujemy 10000-20000 zł. Wyższa inwestycja przekłada się na leady o wyższej wartości życiowej klienta."
    },
    {
      question: "Jak działa targetowanie na LinkedIn?",
      answer: "LinkedIn oferuje unikalne opcje targetowania B2B: stanowisko, dział, branża, wielkość firmy, staż pracy, umiejętności, grupy, a nawet konkretne firmy (ABM). Możemy targetować np. 'CFO w firmach IT 50-200 pracowników w Polsce'. Żadna inna platforma nie oferuje tak precyzyjnego targetowania B2B."
    },
    {
      question: "Co to są Lead Gen Forms?",
      answer: "Lead Gen Forms to formularze kontaktowe wbudowane w reklamę LinkedIn. Użytkownik może zostawić dane (imię, email, firma, stanowisko) jednym kliknięciem - formularz automatycznie wypełnia się danymi z profilu. Konwersja jest 2-3x wyższa niż przy kierowaniu na zewnętrzny landing page."
    },
    {
      question: "Jak wygląda Message Ads (InMail)?",
      answer: "Message Ads to spersonalizowane wiadomości wysyłane bezpośrednio do skrzynki LinkedIn odbiorcy. Wyglądają jak zwykłe wiadomości, ale są oznaczone jako sponsorowane. Świetnie działają do generowania demo, webinarów, personalizowanych ofert. Open rate wynosi 50-60%."
    },
    {
      question: "Czy mogę targetować konkretne firmy?",
      answer: "Tak, dzięki Account Based Marketing (ABM) możemy targetować listę konkretnych firm. Możesz przesłać listę 50-5000 firm, do których chcesz dotrzeć. LinkedIn dopasuje użytkowników pracujących w tych firmach. Idealne dla sprzedaży enterprise do wybranej listy kont."
    },
    {
      question: "Jak mierzyć ROI kampanii LinkedIn?",
      answer: "Instalujemy LinkedIn Insight Tag do śledzenia konwersji. Integrujemy się z Twoim CRM (HubSpot, Salesforce, Pipedrive) dla pełnego obrazu ścieżki od leada do klienta. Monitorujemy: CPL (koszt na lead), współczynnik konwersji, wartość pipeline'u, i ostateczne zamknięcia."
    },
    {
      question: "Czy tworzycie content na LinkedIn?",
      answer: "Tak, w ramach obsługi przygotowujemy kreacje dopasowane do profesjonalnego środowiska LinkedIn: case studies, whitepapers, infografiki, artykuły thought leadership. Tworzymy również treści dla profilu firmowego i osobistego branding liderów firmy."
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>LinkedIn Ads - Kampanie reklamowe B2B | Fotz Studio Poznań</title>
        <meta name="description" content="Profesjonalne kampanie LinkedIn Ads dla firm B2B. Docieraj do decydentów i generuj wartościowe leady. Agencja LinkedIn Ads Poznań." />
        <link rel="canonical" href="https://fotz.pl/linkedin-ads" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-background to-sky-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-6">
              <Briefcase className="inline-block w-4 h-4 mr-2" />
              LinkedIn Ads
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Docieraj do decydentów
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-500">
                w świecie B2B
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              LinkedIn to najpotężniejsza platforma reklamowa B2B. 
              Generujemy leady od osób, które podejmują decyzje zakupowe w firmach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/realizacje">Zobacz case studies</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
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
              Dlaczego LinkedIn Ads?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Najskuteczniejsza platforma dla marketingu B2B
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-blue-500/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 mb-4">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Formaty reklamowe LinkedIn
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Różnorodne formaty dopasowane do celów B2B
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {adFormats.map((format, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-blue-500/30 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-500 mb-4 group-hover:scale-110 transition-transform">
                  <format.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{format.title}</h3>
                <p className="text-muted-foreground text-sm">{format.description}</p>
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
              Strategia ABM i lead generation dla B2B
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
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500/30 to-cyan-500/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/30 to-transparent" />
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
              Cennik LinkedIn Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obsługa kampanii i strategia lead generation
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
                    ? 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500' 
                    : 'bg-card border-border/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-medium rounded-full">
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
                      <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego. VAT doliczany do każdej ceny.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
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
              Wszystko co musisz wiedzieć o LinkedIn Ads
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border/50 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-blue-500 hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              to="/google-ads" 
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Google Ads
              </h3>
              <p className="text-sm text-muted-foreground">
                Kampanie w wyszukiwarce Google
              </p>
            </Link>
            <Link 
              to="/content-marketing" 
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Content Marketing
              </h3>
              <p className="text-sm text-muted-foreground">
                Strategia treści dla B2B
              </p>
            </Link>
            <Link 
              to="/kompleksowa-obsluga-marketingowa" 
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Kompleksowa obsługa
              </h3>
              <p className="text-sm text-muted-foreground">
                Pełna strategia marketingowa
              </p>
            </Link>
          </div>
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
              { name: "Google Ads", href: "/google-ads", description: "Reklamy w wyszukiwarce" },
              { name: "TikTok Ads", href: "/tiktok-ads", description: "Viralowe kampanie wideo" },
              { name: "YouTube Ads", href: "/youtube-ads", description: "Reklamy wideo" },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group p-6 rounded-xl border border-border bg-card hover:border-blue-500/50 transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-blue-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600/20 via-background to-cyan-600/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na leady od decydentów B2B?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Porozmawiajmy o Twojej strategii LinkedIn Ads i sprawdźmy, 
              jak możemy dotrzeć do Twoich idealnych klientów biznesowych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/kampanie-reklamowe">Wszystkie platformy</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LinkedInAds;
