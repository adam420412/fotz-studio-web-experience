import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Palette, Eye, Layers, FileText, PenTool, 
  Monitor, Printer, Target, CheckCircle2, ArrowRight,
  Sparkles, BookOpen, Zap, Award, RefreshCw, Users, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";

// Import Klagem branding images
import klageHomepage from "@/assets/branding/klagem-homepage.jpg";
import klagemAbout from "@/assets/branding/klagem-about.jpg";
import klagemProduct from "@/assets/branding/klagem-product.jpg";
import klagemProducts from "@/assets/branding/klagem-products.jpg";
import klagemHero from "@/assets/branding/klagem-hero.jpg";
import klagemContact from "@/assets/branding/klagem-contact.jpg";
import klagemMenu from "@/assets/branding/klagem-menu.jpg";

const IdentyfikacjaWizualna = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const benefits = [
    { icon: Eye, title: "Rozpoznawalność", description: "Wyróżnij się na tle konkurencji spójnym wizerunkiem" },
    { icon: Target, title: "Zaufanie klientów", description: "Profesjonalny wygląd buduje wiarygodność marki" },
    { icon: Sparkles, title: "Spójność komunikacji", description: "Jednolity przekaz we wszystkich kanałach" },
    { icon: Award, title: "Wartość marki", description: "Silna identyfikacja zwiększa wartość firmy" },
  ];

  const elements = [
    { icon: PenTool, title: "Logo i logotyp", description: "Unikatowy znak graficzny reprezentujący Twoją markę" },
    { icon: Palette, title: "Kolorystyka", description: "Dobór barw oddających charakter i wartości firmy" },
    { icon: FileText, title: "Typografia", description: "Kroje pisma budujące ton i osobowość marki" },
    { icon: Layers, title: "Elementy graficzne", description: "Wzory, ikony i motywy wizualne" },
    { icon: Printer, title: "Materiały drukowane", description: "Wizytówki, papier firmowy, ulotki, katalogi" },
    { icon: Monitor, title: "Wersja cyfrowa", description: "Strona www, social media, prezentacje" },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", description: "Poznajemy Twoją firmę, wartości, cele i grupę docelową" },
    { step: "02", title: "Koncepcja kreatywna", description: "Tworzymy wstępne propozycje logo i kierunku wizualnego" },
    { step: "03", title: "Projektowanie", description: "Rozwijamy wybrany koncept w pełny system identyfikacji" },
    { step: "04", title: "Księga znaku", description: "Dokumentujemy zasady stosowania wszystkich elementów" },
  ];

  const pricingPackages = [
    {
      name: "Starter",
      price: "2 500",
      period: "jednorazowo",
      description: "Podstawowa identyfikacja",
      features: [
        "Logo w 3 wariantach",
        "Paleta kolorów",
        "Dobór typografii",
        "Pliki w formatach web i print",
        "Mini księga znaku (PDF)",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "5 500",
      period: "jednorazowo",
      description: "Kompletna identyfikacja",
      features: [
        "Logo + sygnet + wersje",
        "Rozbudowana paleta kolorów",
        "Typografia główna i pomocnicza",
        "Elementy graficzne i wzory",
        "Projekt wizytówki",
        "Papier firmowy i koperta",
        "Pełna księga znaku",
        "Pliki źródłowe (AI, EPS)",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "12 000",
      period: "jednorazowo",
      description: "Kompleksowy branding",
      features: [
        "Pełna identyfikacja Business",
        "Strategia marki",
        "Projekt strony www",
        "Materiały social media",
        "Szablony prezentacji",
        "Materiały reklamowe",
        "Oznakowanie biura/sklepu",
        "3 miesiące wsparcia",
      ],
      popular: false,
    },
  ];

  const faqItems = [
    {
      question: "Dlaczego warto zainwestować w profesjonalną identyfikację wizualną?",
      answer: "Tworzenie identyfikacji wizualnej jest kluczowe dla każdej firmy, ponieważ przyczynia się do budowania jej unikatowego wizerunku. To inwestycja, która zapewnia pewność co do jakości w percepcji klientów i pomaga wyróżnić się wśród konkurencji. Odpowiednio zaprojektowana identyfikacja wizualna wspiera proces budowania marki, zwiększając jej rozpoznawalność."
    },
    {
      question: "Jakie elementy graficzne są niezbędne w identyfikacji wizualnej?",
      answer: "W tworzeniu identyfikacji wizualnej kluczowe są takie elementy jak logo, typografia, kolorystyka, wzory oraz wszystkie inne materiały graficzne, które zapewniają rozpoznawalność marki. Ważna jest także księga znaku, która dokładnie określa zasady stosowania poszczególnych elementów graficznych."
    },
    {
      question: "Jaki jest cel tworzenia spójnej identyfikacji wizualnej?",
      answer: "Cel tworzenia spójnej identyfikacji wizualnej leży w uzyskaniu czytelnej i łatwo rozpoznawalnej obecności marki na rynku, co bezpośrednio wpływa na postrzeganie marki przez konsumentów. Spójność w identyfikacji buduje zaufanie i profesjonalizm firmy."
    },
    {
      question: "Jak wygląda proces tworzenia identyfikacji wizualnej?",
      answer: "Proces tworzenia identyfikacji wizualnej rozpoczyna się od zrozumienia misji, wizji oraz wartości, które ma reprezentować marka. Następnie, krok po kroku tworzone są wszystkie kluczowe elementy identyfikacji, zaczynając od logo, poprzez wybór kolorystyki, a kończąc na materiałach marketingowych."
    },
    {
      question: "Czy mała firma również potrzebuje profesjonalnej identyfikacji wizualnej?",
      answer: "Absolutnie tak. Niezależnie od wielkości, każda firma potrzebuje profesjonalnie zaprojektowanej identyfikacji wizualnej, aby skutecznie komunikować się ze swoimi odbiorcami i budować rozpoznawalną markę. Dla małych firm może to być nawet ważniejsze, aby móc wyróżnić się na rynku."
    },
    {
      question: "Jak księga znaku wpływa na spójność identyfikacji wizualnej?",
      answer: "Księga znaku jest fundamentalnym dokumentem, który określa jak należy stosować elementy identyfikacji wizualnej marki, w tym logo, kolorystykę, typografię itd. Dzięki niej każdy materiał wyprodukowany przez firmę prezentuje się jednolicie, co wspiera budowanie silnej marki."
    },
    {
      question: "Jak często należy odświeżać identyfikację wizualną?",
      answer: "Identyfikacja wizualna firmy powinna być odświeżana w miarę potrzeb, aby zachować jej aktualność. Nie ma jednoznacznej odpowiedzi - wszystko zależy od dynamiki rozwoju marki, zmian w otoczeniu oraz oczekiwań klientów. Ważne, aby proces był przeprowadzony z rozsądkiem i zachowaniem kluczowych elementów, które odbiorcy już kojarzą z marką."
    },
    {
      question: "Jak ocenić skuteczność identyfikacji wizualnej?",
      answer: "Ocena skuteczności opiera się na analizie wpływu na rozpoznawalność marki i reakcje odbiorców. Badania rynkowe, ankiety wśród klientów i monitoring mediów społecznościowych to metody, które mogą pomóc w ocenieniu, czy wizerunek firmy przyciąga uwagę i budzi zaufanie."
    },
  ];

  return (
    <>
    <Layout>
      <Helmet>
        <title>Identyfikacja Wizualna Firmy - Projektowanie logo i branding | Fotz Studio Poznań</title>
        <meta name="description" content="Profesjonalna identyfikacja wizualna firmy. Projektowanie logo, księgi znaku, materiałów firmowych. Spójna i efektywna komunikacja marki. Agencja brandingowa Poznań." />
        <link rel="canonical" href="https://fotz.pl/identyfikacja-wizualna" />
      </Helmet>

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
              Branding & Design
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Identyfikacja wizualna firmy –{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                klucz do spójnego wizerunku
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tworzymy unikatowe systemy identyfikacji wizualnej, które wyróżniają marki i budują trwałe relacje z klientami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="hero">
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
              Dlaczego identyfikacja wizualna jest tak ważna?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Spójny wizerunek to fundament skutecznej komunikacji marki z rynkiem
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

      {/* Role of Visual Identity Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Jaką rolę pełni identyfikacja wizualna w budowaniu wizerunku marki?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Identyfikacja wizualna firmy ma bezpośredni wpływ na sposób, w jaki klienci postrzegają markę. To właśnie przez pryzmat identyfikacji wizualnej konsumenci oceniają <strong>wiarygodność</strong>, jakość oferowanych produktów czy usług, a nawet wartości, które marka reprezentuje.
                </p>
                <p>
                  Profesjonalna identyfikacja wizualna jest świadectwem staranności i dbałości marki o swój wizerunek. Pokazuje, że firma nie pozostawia szczegółów przypadkowi, co przekłada się na <strong>zaufanie klientów</strong> i postrzeganie marki jako wiarygodnego partnera.
                </p>
                <p>
                  Właściwie zaprojektowana identyfikacja wspiera komunikację wszystkich kluczowych przekazów i wartości marki, ułatwia <strong>pozycjonowanie</strong> i poprawia widoczność firmy wśród konkurencji.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/strony-internetowe" className="text-[#75143F] hover:text-[#75143F]/80 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Strony internetowe
                </Link>
                <Link to="/social-media" className="text-[#75143F] hover:text-[#75143F]/80 text-sm flex items-center gap-1">
                  <ArrowRight className="w-4 h-4" /> Social media
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
                { value: "100%", label: "Spójność marki" },
                { value: "3x", label: "Lepsza rozpoznawalność" },
                { value: "70%", label: "Większe zaufanie" },
                { value: "∞", label: "Wartość dla firmy" },
              ].map((stat, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elements Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Elementy składające się na dobrą identyfikację wizualną
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Każdy element systemu wizualnego pracuje razem, tworząc spójny obraz marki
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-[#75143F]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <element.icon className="w-6 h-6 text-[#75143F]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{element.title}</h3>
                <p className="text-muted-foreground text-sm">{element.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Section */}
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
                      <PenTool className="w-5 h-5 text-[#75143F]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Logo jako fundament</h3>
                      <p className="text-muted-foreground text-sm">Pierwsze i najważniejsze, z czym klienci kojarzą firmę</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#0F3053]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Palette className="w-5 h-5 text-[#0F3053]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Rola kolorystyki</h3>
                      <p className="text-muted-foreground text-sm">Kolory wpływają na emocje i decyzje zakupowe klientów</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#422249]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-[#422249]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Typografia</h3>
                      <p className="text-muted-foreground text-sm">Odzwierciedla ton i osobowość marki</p>
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
                Logo – serce każdej identyfikacji
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Logo to serce i dusza każdej identyfikacji wizualnej marki. To pierwszy i najważniejszy element, z którym klienci kojarzą firmę. <strong>Dobre logo</strong> powinno być unikatowe, zapadające w pamięć i odzwierciedlać charakter oraz misję przedsiębiorstwa.
                </p>
                <p>
                  Wybór odpowiedniej typografii i kolorów ma ogromne znaczenie dla spójności i rozpoznawalności wizerunku marki. Dlatego ważne jest, aby były <strong>starannie dobrane</strong> i konsekwentnie stosowane we wszystkich materiałach firmowych.
                </p>
              </div>
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
              Tworzenie identyfikacji wizualnej – krok po kroku
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nasz sprawdzony proces zapewnia skuteczny rezultat
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Case Study Section - Klagem */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium mb-4">
              Case Study
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Realizacja: Klagem – System Mebli Modułowych
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kompleksowy branding dla producenta nowoczesnych mebli modułowych – od logo po pełną stronę internetową
            </p>
          </motion.div>

          {/* Main Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div 
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(klagemHero)}
            >
              <img 
                src={klagemHero} 
                alt="Klagem - identyfikacja wizualna strona główna" 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">Strona główna</h3>
                <p className="text-white/80 text-sm">Minimalistyczny design z wyrazistym akcentem kolorystycznym</p>
              </div>
            </div>
          </motion.div>

          {/* Grid of other images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { src: klageHomepage, title: "Homepage", desc: "Pełna strona główna" },
              { src: klagemAbout, title: "O nas", desc: "Sekcja prezentacji firmy" },
              { src: klagemProduct, title: "Produkt", desc: "Strona produktowa" },
              { src: klagemProducts, title: "Produkty", desc: "Katalog produktów" },
              { src: klagemMenu, title: "Menu", desc: "Nawigacja strony" },
              { src: klagemContact, title: "Kontakt", desc: "Formularz kontaktowy" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/4]"
                onClick={() => setSelectedImage(item.src)}
              >
                <img 
                  src={item.src} 
                  alt={`Klagem - ${item.title}`} 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Palette className="w-5 h-5 text-orange-500" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Identyfikacja wizualna</h4>
              <p className="text-muted-foreground text-sm">Logo, kolorystyka (pomarańcz + biel), typografia, elementy graficzne i spójny system wizualny</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-5 h-5 text-orange-500" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strona internetowa</h4>
              <p className="text-muted-foreground text-sm">Responsywna strona www z konfiguratorem produktów, katalogiem i formularzem kontaktowym</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-orange-500" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Materiały drukowane</h4>
              <p className="text-muted-foreground text-sm">Katalogi produktowe, wizytówki, papier firmowy i materiały prezentacyjne</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Button asChild variant="outline" size="lg">
              <Link to="/realizacje/klagem">
                Zobacz pełne case study
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Brand Book Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Księga identyfikacji wizualnej
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Księga identyfikacji wizualnej jest dokumentem, który określa zasady stosowania elementów wizerunkowych marki, zapewniając ich <strong>spójne i odpowiednie użycie</strong>.
                </p>
                <p>
                  Pełni funkcję przewodnika dla wszystkich działań marketingowych i reklamowych, gwarantując <strong>jednolity obraz marki</strong> we wszystkich punktach kontaktu z klientem.
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  "Zasady stosowania logo",
                  "Specyfikacja kolorów (CMYK, RGB, Pantone)",
                  "Hierarchia typografii",
                  "Przykłady poprawnego i niepoprawnego użycia",
                  "Szablony materiałów firmowych",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-[#75143F]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#75143F]/10 to-[#0F3053]/10 rounded-2xl p-8"
            >
              <div className="bg-card border border-border rounded-xl p-6 mb-4">
                <BookOpen className="w-12 h-12 text-[#75143F] mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">Brand Book</h3>
                <p className="text-muted-foreground text-sm">
                  Kompletny przewodnik po Twojej marce, który zapewnia spójność we wszystkich działaniach.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#75143F]">PDF</div>
                  <div className="text-xs text-muted-foreground">Format cyfrowy</div>
                </div>
                <div className="bg-card/50 border border-border rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-[#0F3053]">AI/EPS</div>
                  <div className="text-xs text-muted-foreground">Pliki źródłowe</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cennik" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cennik identyfikacji wizualnej
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wybierz pakiet dopasowany do potrzeb Twojej marki
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
              Odpowiedzi na pytania dotyczące identyfikacji wizualnej
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
              Gotowy na profesjonalną identyfikację wizualną?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy pomóc Twojej marce wyróżnić się na rynku.
            </p>
            <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90">
              <Link to="/kontakt">
                Umów bezpłatną konsultację
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>

    {/* Lightbox for enlarged images */}
    {selectedImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        onClick={() => setSelectedImage(null)}
      >
        <button 
          className="absolute top-6 right-6 text-white hover:text-white/80 transition-colors"
          onClick={() => setSelectedImage(null)}
        >
          <X className="w-8 h-8" />
        </button>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={selectedImage}
          alt="Powiększone zdjęcie"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    )}
    </>
  );
};

export default IdentyfikacjaWizualna;
