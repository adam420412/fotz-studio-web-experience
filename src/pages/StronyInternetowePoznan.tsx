import { Helmet } from "react-helmet";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Globe, 
  Search, 
  Users, 
  ShoppingCart, 
  Camera, 
  Palette, 
  Video, 
  MessageSquare,
  Settings,
  TrendingUp,
  Handshake,
  ChevronRight,
  Phone,
  CheckCircle2
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StronyInternetowePoznan = () => {
  const services = [
    { icon: Camera, title: "Obsługa fotograficzna", desc: "Tworzymy koncepcje, scenariusze i całe realizacje kreatywne." },
    { icon: Search, title: "Kampanie SEM", desc: "Kampanie marketingowe w sieci wyszukiwania." },
    { icon: Globe, title: "Strony internetowe", desc: "Budujemy i projektujemy strony oraz sklepy internetowe." },
    { icon: TrendingUp, title: "Pozycjonowanie", desc: "Dbanie o pozycje w wyszukiwarce dla Twojej firmy." },
    { icon: Palette, title: "Obsługa graficzna", desc: "Studio graficzne, od druku przez digital." },
    { icon: MessageSquare, title: "Social media", desc: "Prowadzenie Twojej obecności w internecie." },
    { icon: ShoppingCart, title: "E-commerce", desc: "Rozwijamy sklepy internetowe." },
    { icon: Video, title: "Reklamy video", desc: "Realizujemy klipy, reklamy i stałą obsługę video." },
  ];

  const whyUs = [
    { icon: Settings, title: "System CMS", desc: "Implementujemy systemy zarządzania treścią (CMS), np. WordPress, Webflow, Shopify." },
    { icon: Search, title: "SEO", desc: "Pozycjonujemy strony internetowe SEO, oraz wykonujemy szereg usług komplementarnych." },
    { icon: Handshake, title: "Strategiczny partner", desc: "Układamy strategię rozwoju strony internetowej oraz kompleksowo rozwijamy marketing." },
  ];

  const pricing = [
    { title: "Strona wizytówkowa", desc: "Prosta strona internetowa prezentująca podstawowe informacje o firmie lub osobie.", price: "od 1 500 zł do 3 500 zł netto" },
    { title: "Strona firmowa", desc: "Rozbudowana strona z dodatkowymi funkcjonalnościami.", price: "od 5 000 zł do 20 000 zł netto" },
    { title: "Sklepy internetowe e-commerce", desc: "Zaawansowana platforma umożliwiająca sprzedaż produktów lub usług online.", price: "od 7 000 zł do 120 000 zł netto" },
  ];

  const features = [
    "Integracja z mediami społecznościowymi",
    "Możliwość rejestracji i logowania dla użytkowników",
    "Opłacanie usług online",
    "Interaktywne formularze",
    "Chat boty",
  ];

  const cmsSystems = ["WordPress", "Joomla", "Drupal", "Webflow", "Shopify"];

  const faqItems = [
    {
      question: "Jak stworzyć własną stronę internetową?",
      answer: "Proces tworzenia strony internetowej rozpoczynamy od rozmowy i researchu. Następnie wyceniamy projekt. Po stworzeniu kodu i oprawy graficznej prezentujemy projekt klientowi i wprowadzamy ewentualne poprawki. Każda witryna jest estetyczna, funkcjonalna i dostosowana do urządzeń mobilnych."
    },
    {
      question: "W jaki sposób pozycjonować witrynę?",
      answer: "Pozycjonowanie strony internetowej SEO obejmuje optymalizację techniczną, tworzenie wartościowych treści, link building oraz analizę konkurencji. Nasze działania zapewniają wysoką pozycję w Google i zwiększenie widoczności."
    },
    {
      question: "Jak zwiększyć sprzedaż sklepu internetowego?",
      answer: "Efektywna strategia SEO, oparta na analizach i dostosowywaniu działań, zapewni długotrwałe efekty w postaci większej liczby odwiedzin na stronie oraz lepszej konwersji. Pomagamy budować większą społeczność i poszerzać zasięgi."
    },
    {
      question: "Ile kosztuje strona internetowa w Poznaniu?",
      answer: "Cena uzależniona jest od zakresu prac, skomplikowania projektu oraz technologii. Strona wizytówkowa kosztuje od 1 500 zł, strona firmowa od 5 000 zł, a sklep internetowy od 7 000 zł netto. Strony z pakietem SEO mogą być droższe."
    },
    {
      question: "Jakie systemy CMS wykorzystujecie?",
      answer: "Korzystamy z WordPress, Joomla, Drupal, Webflow, Shopify i wielu innych systemów zarządzania treścią. Dobieramy technologię do potrzeb projektu i oczekiwań klienta."
    },
    {
      question: "Czy tworzycie strony responsywne?",
      answer: "Tak, wszystkie nasze strony są responsywne i dostosowane do urządzeń mobilnych. Projektowanie responsywnych stron internetowych zapewnia wysoką pozycję w Google i lepsze doświadczenie użytkowników."
    },
    {
      question: "Jak długo trwa realizacja strony internetowej?",
      answer: "Czas realizacji zależy od złożoności projektu. Prosta strona wizytówkowa może być gotowa w 2-3 tygodnie, strona firmowa w 4-8 tygodni, a sklep internetowy w 8-16 tygodni."
    },
    {
      question: "Czy oferujecie wsparcie po uruchomieniu strony?",
      answer: "Tak, oferujemy kompleksowe wsparcie techniczne, aktualizacje, optymalizację SEO oraz rozwój funkcjonalności po uruchomieniu strony. Jesteśmy strategicznym partnerem naszych klientów."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Tworzenie Stron Internetowych Poznań | Fotz Studio</title>
        <meta 
          name="description" 
          content="Tworzenie stron internetowych w Poznaniu. Profesjonalne projektowanie stron www, sklepów e-commerce i pozycjonowanie SEO. Fotz Studio - agencja z Wielkopolski." 
        />
        <link rel="canonical" href="https://fotz.pl/strony-internetowe-poznan" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#75143F]/20 via-background to-background" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Agencja interaktywna z Poznania
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Tworzenie stron internetowych Poznań
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Fotz to agencja z Wielkopolski. Projektujemy witryny internetowe dla poznańskich firm, 
                a także świadczymy nasze usługi zdalnie! Łączymy kompleksowe podejście z projektowaniem 
                responsywnych stron internetowych.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                  <Link to="/kontakt">
                    Bezpłatna rozmowa
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
            >
              Statystyki od naszych klientów
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: "100%", label: "Klientów poleciłoby nas swojej rodzinie i przyjaciołom" },
                { value: "600+", label: "Ukończonych projektów dla naszych klientów z całego świata" },
                { value: "160+", label: "Opinii, które postanowili wystawić nasi klienci na Google" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-6 rounded-xl bg-background border border-border/50"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Tworzenie stron www dla firm z Poznania i okolic
              </h2>
              <p className="text-lg text-muted-foreground">
                Nasza agencja interaktywna prowadzi działania z zakresu projektowania, wdrażania i optymalizacji. 
                Fotz łączy kompleksowe podejście z projektowaniem responsywnych stron internetowych. 
                Oferujemy również usługę tworzenia sklepów internetowych.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all group"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego warto nam zlecić stworzenie strony internetowej?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wybór najlepszej firmy projektującej strony internetowe wydaje się dość trudny. 
                Czym różnimy się od konkurencji? W Fotz:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {whyUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-background border border-border/50 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#75143F] to-[#0F3053] flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Tworzenie i projektowanie stron z FOTZ Studio
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Nasza agencja posiada szerokie, różnorodne portfolio stworzonych witryn. 
                Zrealizowaliśmy już wiele projektów dla firm z każdej branży. 
                Cechuje nas profesjonalizm, doświadczenie, a także indywidualne podejście do klienta.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "01", title: "Rozmowa i research", desc: "Poznajemy Twoje potrzeby i analizujemy rynek" },
                { step: "02", title: "Wycena projektu", desc: "Przygotowujemy szczegółową ofertę" },
                { step: "03", title: "Projektowanie", desc: "Tworzymy kod i oprawę graficzną" },
                { step: "04", title: "Wdrożenie", desc: "Prezentujemy projekt i wprowadzamy poprawki" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-xl bg-card border border-border/50"
                >
                  <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jaka jest cena strony internetowej?
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Na cenę wpływa wiele czynników. Cena uzależniona jest od zakresu prac, 
                skomplikowania projektu oraz technologii, jakie będą wykorzystane do jego realizacji.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.desc}</p>
                  <div className="text-lg font-bold text-primary">{item.price}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Funkcjonalności projektowanych stron
                </h2>
                <p className="text-muted-foreground mb-8">
                  Wybierając naszą agencję możesz być pewny najlepszych funkcjonalności dla stron internetowych. 
                  Tworząc twoją stronę uwzględniamy najnowsze trendy i wykorzystujemy innowacyjne technologie.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Systemy zarządzania treścią (CMS)
                </h2>
                <p className="text-muted-foreground mb-8">
                  W projektowaniu stron internetowych wykorzystujemy systemy zarządzania treścią. 
                  Fotz korzysta z najlepszych rozwiązań dostępnych na rynku:
                </p>
                <div className="flex flex-wrap gap-3">
                  {cmsSystems.map((cms, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium"
                    >
                      {cms}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Pozycjonowanie nowej strony internetowej
                </h2>
                <p className="text-muted-foreground">
                  Projektowanie responsywnych stron internetowych zapewnia wysoką pozycję w Google. 
                  Optymalizacja strony internetowej SEO umożliwi polepszenie widoczności i tym samym zwiększenie zysków.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Co decyduje o sukcesie strony?
                </h2>
                <p className="text-muted-foreground">
                  Każdy aspekt projektowania responsywnych stron internetowych sprowadza się do tworzenia witryn www pod SEO. 
                  Pomożemy ci zbudować większą społeczność i poszerzyć zasięgi. 
                  Efektywna strategia SEO zapewni długotrwałe efekty w postaci większej liczby odwiedzin i lepszej konwersji.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Portfolio CTA */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Zobacz nasze realizacje
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Sprawdź nasze portfolio i przekonaj się o jakości naszych projektów stron internetowych.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link to="/realizacje">
                  Przejdź do portfolio
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Najczęściej zadawane pytania
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="bg-background border border-border/50 rounded-lg px-6"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
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

        {/* Miasta Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Tworzenie stron internetowych w całej Polsce
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Realizujemy projekty dla klientów z całego kraju. Sprawdź nasze usługi w Twoim mieście.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {[
                { name: "Warszawa", path: "/strony-internetowe-warszawa", active: true },
                { name: "Kraków", path: "/strony-internetowe-krakow", active: true },
                { name: "Wrocław", path: "/strony-internetowe-wroclaw", active: true },
                { name: "Gdańsk", path: "/strony-internetowe-gdansk", active: false },
                { name: "Łódź", path: "/strony-internetowe-lodz", active: false },
                { name: "Katowice", path: "/strony-internetowe-katowice", active: false },
              ].map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {city.active ? (
                    <Link
                      to={city.path}
                      className="block p-4 bg-card border border-border/50 rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <span className="font-medium">{city.name}</span>
                    </Link>
                  ) : (
                    <div className="block p-4 bg-card/50 border border-border/30 rounded-lg text-center opacity-50 cursor-not-allowed">
                      <span className="font-medium text-muted-foreground">{city.name}</span>
                      <span className="block text-xs text-muted-foreground mt-1">Wkrótce</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-muted-foreground">
                Nie widzisz swojego miasta?{" "}
                <Link to="/kontakt" className="text-primary hover:underline">
                  Skontaktuj się z nami
                </Link>
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Porozmawiajmy o Twojej stronie
              </h2>
              <p className="text-muted-foreground mb-8">
                Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie w internecie.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń teraz
                  </a>
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                Plac Wolności 16, Poznań
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default StronyInternetowePoznan;
