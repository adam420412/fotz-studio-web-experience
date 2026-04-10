import { SEOHead } from "@/components/seo/SEOHead";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Palette, Layers, FileText, PenTool, Image, 
  Monitor, Printer, Target, CheckCircle2, ArrowRight,
  Sparkles, BookOpen, Zap, Award, Users, Briefcase,
  MessageSquare, Clock, Shield, Star, X, ChevronLeft, ChevronRight
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

// Import visualization images for portfolio section
import viz17 from "@/assets/wizualizacje/viz-17.png";
import viz18 from "@/assets/wizualizacje/viz-18.png";
import viz19 from "@/assets/wizualizacje/viz-19.png";
import viz20 from "@/assets/wizualizacje/viz-20.png";
import viz21 from "@/assets/wizualizacje/viz-21.png";
import viz22 from "@/assets/wizualizacje/viz-22.png";

const portfolioImages = [
  { src: viz17, title: "Wizualizacja sypialni", category: "Wnętrza" },
  { src: viz18, title: "Salon ze schodami", category: "Wnętrza" },
  { src: viz19, title: "Salon nowoczesny", category: "Wnętrza" },
  { src: viz20, title: "Loft industrialny", category: "Wnętrza" },
  { src: viz21, title: "Przestrzeń dzienna", category: "Wnętrza" },
  { src: viz22, title: "Biurko modułowe", category: "Produkty" },
];

const AgencjaGraficzna = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const benefits = [
    { icon: Palette, title: "Kreatywny zespół", description: "Doświadczeni graficy z pasją do designu" },
    { icon: Sparkles, title: "Spójność wizualna", description: "Wszystkie projekty w jednym stylu Twojej marki" },
    { icon: Clock, title: "Terminowość", description: "Realizujemy projekty zgodnie z harmonogramem" },
    { icon: Shield, title: "Pełne prawa", description: "Otrzymujesz wszystkie prawa autorskie" },
  ];

  const services = [
    { icon: PenTool, title: "Identyfikacja wizualna", description: "Logo, księga znaku, system identyfikacji" },
    { icon: FileText, title: "Materiały firmowe", description: "Wizytówki, papier firmowy, koperty, pieczątki" },
    { icon: Image, title: "Materiały reklamowe", description: "Ulotki, plakaty, banery, roll-upy" },
    { icon: BookOpen, title: "Katalogi i broszury", description: "Foldery produktowe, katalogi, raporty roczne" },
    { icon: Monitor, title: "Grafika cyfrowa", description: "Grafiki social media, bannery, infografiki" },
    { icon: Layers, title: "Opakowania", description: "Projekty opakowań, etykiet, naklejek" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i konsultacja", description: "Poznajemy Twoje potrzeby, cele i oczekiwania" },
    { step: "02", title: "Koncepcje kreatywne", description: "Przygotowujemy wstępne propozycje projektów" },
    { step: "03", title: "Dopracowanie", description: "Wprowadzamy poprawki aż do pełnej akceptacji" },
    { step: "04", title: "Finalizacja", description: "Dostarczamy pliki gotowe do użycia i druku" },
  ];

  const pricingPackages = [
    {
      name: "Pojedynczy projekt",
      price: "od 500",
      period: "jednorazowo",
      description: "Dla pojedynczych zleceń",
      features: [
        "Jeden projekt graficzny",
        "Do 3 rund poprawek",
        "Pliki w formatach web i print",
        "Realizacja 3-5 dni roboczych",
        "Pełne prawa autorskie",
      ],
      popular: false,
    },
    {
      name: "Pakiet Start",
      price: "1 500",
      period: "/mies.",
      description: "Dla małych firm",
      features: [
        "Do 5 projektów miesięcznie",
        "Grafiki social media",
        "Materiały firmowe",
        "Nielimitowane poprawki",
        "Dedykowany grafik",
        "Realizacja 24-48h",
      ],
      popular: true,
    },
    {
      name: "Pakiet Business",
      price: "3 500",
      period: "/mies.",
      description: "Dla rozwijających się firm",
      features: [
        "Do 15 projektów miesięcznie",
        "Pełna obsługa graficzna",
        "Materiały reklamowe",
        "Katalogi i broszury",
        "Priorytetowa realizacja",
        "Konsultacje strategiczne",
        "Przygotowanie do druku",
      ],
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: "Jakie usługi oferuje Agencja graficzna Fotz?",
      answer: "Nasza agencja oferuje pełną obsługę graficzną dla firm, w tym projektowanie materiałów promocyjnych, tworzenie infografik, projektowanie graficzne stron internetowych, a także opracowywanie grafik na potrzeby kampanii reklamowych. Dbamy o spójność wizualną Twojej marki na każdym kroku współpracy."
    },
    {
      question: "Jak mogę zamówić wsparcie graficzne dla mojej firmy?",
      answer: "Aby zamówić wsparcie graficzne, wystarczy wypełnić formularz kontaktowy na naszej stronie. Następnie skontaktujemy się z Tobą mailowo, aby omówić szczegóły współpracy i zaproponować odpowiedni pakiet usług dopasowany do Twoich potrzeb."
    },
    {
      question: "Jakie są koszty obsługi graficznej?",
      answer: "Koszty obsługi graficznej zależą od zakresu i skomplikowania projektów. Po wstępnych konsultacjach i ustaleniu zakresu potrzeb, przygotowujemy indywidualną wycenę. Dla stałych klientów przewidujemy atrakcyjne rabaty i elastyczne pakiety abonamentowe."
    },
    {
      question: "Czy mogę liczyć na indywidualne podejście?",
      answer: "Tak, każdy projekt traktujemy indywidualnie, dbając o to, aby graficzna obsługa była w pełni dopasowana do potrzeb i oczekiwań naszych klientów. Stawiamy na szeroką komunikację i wspólną analizę potrzeb, aby zapewnić maksymalne zadowolenie z realizowanych projektów."
    },
    {
      question: "Jak mogę monitorować postępy prac nad projektem?",
      answer: "W trakcie całego procesu projektowego jesteśmy w stałym kontakcie z klientem, informując o etapach prac. Regularnie prezentujemy postępy i konsultujemy każdy etap, dzięki czemu masz pełną kontrolę nad realizacją projektu."
    },
    {
      question: "Jakie pliki otrzymam po zakończeniu projektu?",
      answer: "Po zakończeniu projektu graficznego otrzymasz wszystkie niezbędne pliki w wybranym formacie (PDF, JPG, PNG, AI, EPS), zarówno do użytku cyfrowego, jak i do druku. Pliki są przygotowane zgodnie z wymaganiami technicznymi drukarni."
    },
    {
      question: "Czy otrzymam prawa autorskie do projektów?",
      answer: "Tak, oferujemy możliwość przekazania pełnych praw autorskich do wykonanych projektów graficznych. Szczegóły dotyczące praw autorskich są zawsze dokładnie omawiane i ustalane na etapie podpisywania umowy."
    },
    {
      question: "Jakie korzyści przynosi stała współpraca?",
      answer: "Stała współpraca przynosi wiele korzyści: priorytetowe traktowanie projektów, lepsze dopasowanie do potrzeb firmy, korzystniejsze warunki finansowe. Długoterminowa relacja pozwala nam na głębsze zrozumienie marki, co przekłada się na lepszą jakość i spójność wszystkich realizacji."
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja Graficzna Poznań — Projektowanie Graficzne i Identyfikacja Wizualna | Fotz Studio"
        description="Agencja graficzna Poznań — projektowanie graficzne, identyfikacja wizualna firmy, logo, materiały reklamowe, grafika na social media. Fotz Studio."
        canonical="https://fotz.pl/agencja-graficzna"
      />
      <ServiceSchema 
        name="Agencja Graficzna - Obsługa graficzna firm"
        description="Profesjonalna agencja graficzna Poznań. Projektowanie logo, materiałów reklamowych, katalogów, ulotek."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Agencja Graficzna", url: "https://fotz.pl/agencja-graficzna" },
        ]}
      />
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#75143F]/10 via-background to-[#0F3053]/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#75143F]/20 text-[#75143F] rounded-full text-sm font-medium mb-6">
              <Palette className="inline-block w-4 h-4 mr-2" />
              Studio Graficzne
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Agencja graficzna Fotz –{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                kompleksowa obsługa graficzna firm
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tworzymy projekty graficzne, które wyróżniają marki i przyciągają klientów. Od logo po pełną identyfikację wizualną.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero">
                <Link to="/kontakt">
                  Zamów wsparcie graficzne
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
              Dlaczego warto wybrać naszą agencję graficzną?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Doświadczony zespół, terminowa realizacja i pełne prawa autorskie
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
                className="bg-card border border-border rounded-2xl p-6 text-center hover:border-[#75143F]/50 transition-colors"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-[#75143F]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Jakie projekty graficzne oferujemy?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pełen zakres usług graficznych dla Twojej firmy
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-[#75143F]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-[#75143F]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Jak przebiega proces tworzenia projektu graficznego?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Proces tworzenia projektu graficznego w naszym studiu rozpoczyna się od szczegółowego <strong>briefu</strong>, w którym ustalane są kierunki działania oraz główne oczekiwania klienta.
                </p>
                <p>
                  Następnie, nasi kreatywni graficy przystępują do pracy, tworząc wstępne koncepcje, które są konsultowane z klientem. W oparciu o te informacje projekt jest dopracowywany do momentu <strong>ostatecznej akceptacji</strong>.
                </p>
                <p>
                  Dbałość o każdy, nawet najmniejszy detal, to coś, co wyróżnia naszą agencję na rynku.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/uslugi/branding" className="text-[#75143F] hover:text-[#75143F]/80 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Identyfikacja wizualna
                </Link>
                <Link to="/realizacje" className="text-[#75143F] hover:text-[#75143F]/80 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Zobacz portfolio
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 flex items-start gap-4"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What you get Section */}
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
                    <div className="w-10 h-10 bg-[#75143F]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-[#75143F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Pełne wsparcie graficzne</h3>
                      <p className="text-muted-foreground text-sm">Od koncepcji po gotowe pliki do druku i publikacji</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0F3053]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-[#0F3053]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Dedykowany zespół</h3>
                      <p className="text-muted-foreground text-sm">Grafik przypisany do Twojego projektu</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#422249]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-[#422249]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Stały kontakt</h3>
                      <p className="text-muted-foreground text-sm">Konsultacje na każdym etapie projektu</p>
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
                Na co możesz liczyć decydując się na współpracę?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Decydując się na współpracę z naszą agencją, otrzymujesz <strong>pełne wsparcie graficzne</strong>, które obejmuje szeroki wachlarz usług, od projektowania logo, przez tworzenie materiałów reklamowych, aż po kompleksową obsługę identyfikacji wizualnej Twojej firmy.
                </p>
                <p>
                  Oprócz standardowych usług projektowych, oferujemy również pomoc w zakresie <strong>druku oraz publikacji</strong> materiałów w mediach społecznościowych. Naszym celem jest zapewnienie Ci pełnego wsparcia, aby Twoja marka mogła skuteczniej komunikować się ze swoją grupą docelową.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Pliki w formatach do druku (PDF, CMYK)",
                  "Pliki źródłowe (AI, EPS, PSD)",
                  "Wersje do użytku cyfrowego (JPG, PNG, WebP)",
                  "Prawa autorskie majątkowe",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-[#75143F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              W jakich branżach się specjalizujemy?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mamy doświadczenie w pracy z klientami z różnorodnych sektorów
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Technologia", "E-commerce", "Gastronomia", "Nieruchomości", 
              "Finanse", "Moda", "Sport", "Medycyna", "Edukacja", 
              "Produkcja", "Usługi B2B", "Turystyka"
            ].map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-card border border-border rounded-xl p-4 text-center hover:border-[#75143F]/50 transition-colors"
              >
                <span className="text-sm font-medium text-foreground">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - 3D Visualizations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#75143F]/20 text-[#75143F] rounded-full text-sm font-medium mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Przykłady naszych realizacji
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wizualizacje 3D i projekty graficzne dla naszych klientów
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video"
                onClick={() => setSelectedImage(index)}
              >
                <img loading="lazy" 
                  src={image.src} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-white/70 uppercase tracking-wider">{image.category}</span>
                  <h4 className="text-white font-semibold">{image.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/wizualizacje-3d">
                Zobacz więcej wizualizacji
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => prev !== null ? (prev - 1 + portfolioImages.length) % portfolioImages.length : null);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage((prev) => prev !== null ? (prev + 1) % portfolioImages.length : null);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors z-50"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            src={portfolioImages[selectedImage].src}
            alt={portfolioImages[selectedImage].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-white font-semibold text-lg">{portfolioImages[selectedImage].title}</h3>
            <p className="text-white/60 text-sm">{portfolioImages[selectedImage].category}</p>
          </div>
        </motion.div>
      )}

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
              Cennik usług graficznych
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elastyczne pakiety dopasowane do potrzeb Twojej firmy
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
                  pkg.popular ? "border-[#75143F] ring-2 ring-[#75143F]/20" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] text-white text-xs font-medium px-4 py-1 rounded-full">
                      Najpopularniejszy
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                    <span className="text-muted-foreground"> zł</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{pkg.period}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-[#75143F] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    pkg.popular
                      ? "bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:from-[#75143F]/90 hover:to-[#0F3053]/90"
                      : ""
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Zamów wycenę</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Wszystkie ceny netto. Dla stałych klientów przewidujemy atrakcyjne rabaty.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
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
              Odpowiedzi na pytania dotyczące obsługi graficznej
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
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#75143F] to-[#0F3053]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Gotowy na profesjonalne projekty graficzne?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej marce wyróżnić się na rynku.
            </p>
            <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90">
              <Link to="/kontakt">
                Zamów bezpłatną konsultację
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
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
              Agencja graficzna Poznań — projektowanie graficzne dla firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Agencja graficzna Poznań Fotz Studio oferuje kompleksowe projektowanie graficzne dla firm z całej
              Wielkopolski. Tworzymy identyfikację wizualną, logotypy, materiały reklamowe i grafikę
              na media społecznościowe. Nasze projekty graficzne łączą estetykę z funkcjonalnością
              — każdy element wizualny wspiera Twoją markę i buduje jej rozpoznawalność.
            </p>
            <p className="text-muted-foreground mb-6">
              Projektowanie graficzne to nie tylko estetyka — to komunikacja wartości marki. Jako
              agencja graficzna zapewniamy spójną identyfikację wizualną firmy: od logo i materiałów
              drukowanych po grafiki na social media i strony internetowe.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Identyfikacja wizualna firmy — logo, branding i materiały reklamowe
            </h2>
            <p className="text-muted-foreground mb-4">
              Identyfikacja wizualna firmy to fundament marki. Tworzymy kompleksowy branding:
              projektowanie logo, księgi znaku, systemy typograficzne i kolorystyczne. Materiały
              reklamowe — ulotki, banery, roll-upy, katalogi — projektujemy z dbałością o detal
              i zgodność z identyfikacją wizualną.
            </p>
            <p className="text-muted-foreground mb-6">
              Profesjonalne projektowanie graficzne przekłada się bezpośrednio na postrzeganie marki
              przez klientów. Agencja kreatywna Fotz Studio łączy doświadczenie designerów z wiedzą
              o marketingu, by grafiki były nie tylko piękne, ale i skuteczne sprzedażowo.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Grafika na social media i projekty graficzne do reklam online
            </h2>
            <p className="text-muted-foreground mb-4">
              Grafika na social media wymaga specyficznego podejścia — musi przyciągać uwagę
              w ciągu 1-2 sekund. Tworzymy grafiki do postów, stories, okładek i reklam
              na Facebooku, Instagramie i LinkedIn. Projekty graficzne do reklam Google Display
              i Meta Ads w odpowiednich formatach i proporcjach.
            </p>
            <p className="text-muted-foreground mb-6">
              Nasze studio graficzne oferuje szybkie terminy realizacji, nieograniczone poprawki
              i pełne prawa autorskie do projektów. Stała współpraca z agencją graficzną pozwala
              utrzymać spójność komunikacji wizualnej na wszystkich kanałach.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Dlaczego warto wybrać naszą agencję graficzną w Poznaniu?
            </h2>
            <p className="text-muted-foreground mb-4">
              Fotz Studio to agencja graficzna z wieloletnim doświadczeniem w projektowaniu dla
              firm z różnych branż. Nasz zespół designerów tworzy projekty graficzne, które
              wyróżniają się na tle konkurencji i skutecznie wspierają sprzedaż. Oferujemy
              kompleksową obsługę graficzną — od konceptu po finalny projekt gotowy do druku lub publikacji online.
            </p>
            <p className="text-muted-foreground">
              Skontaktuj się z nami, by omówić projekt graficzny dla Twojej firmy. Ofertę
              przygotowujemy bezpłatnie na podstawie briefu. Projektowanie graficzne w Fotz Studio
              to gwarancja jakości, terminowości i pełnego zaangażowania w Twój sukces.
            </p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
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

export default AgencjaGraficzna;
