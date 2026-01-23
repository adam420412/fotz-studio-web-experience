import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  BarChart, 
  Target,
  Zap,
  Phone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  FileSearch,
  Link2,
  Globe,
  LineChart,
  Users,
  Clock,
  Award,
  Shield,
  Headphones,
  Eye,
  MousePointer,
  Sparkles,
  Rocket,
  Star,
  FileCode,
  FileText,
  ExternalLink
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import { ContactSection } from "@/components/sections/ContactSection";
import { RelatedServices } from "@/components/sections/RelatedServices";

import rppgImg from "@/assets/portfolio/rppg.png";
import klagemlmg from "@/assets/portfolio/klagem.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";
import victoryCarsImg from "@/assets/portfolio/victory-cars.png";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new.png";
import friendlyGasImg from "@/assets/portfolio/friendly-gas-new.png";

const Pozycjonowanie = () => {
  const problems = [
    { 
      icon: Eye, 
      title: "Brak widoczności w Google", 
      desc: "Twoja strona jest na 10. stronie wyników. Klienci Cię nie znajdują, a konkurencja zbiera zamówienia." 
    },
    { 
      icon: TrendingUp, 
      title: "Spadające pozycje", 
      desc: "Byłeś wysoko, ale spadłeś. Algorytm Google się zmienił, a Twoja strona nie nadąża." 
    },
    { 
      icon: Target, 
      title: "Zły ruch na stronie", 
      desc: "Masz odwiedziny, ale nie masz klientów. Pozycjonujesz się na złe słowa kluczowe." 
    },
    { 
      icon: MousePointer, 
      title: "Niska konwersja z wyszukiwarki", 
      desc: "Użytkownicy klikają, ale wychodzą. Strona nie odpowiada na ich intencje wyszukiwania." 
    },
  ];

  const whatWeDo = [
    { 
      icon: FileSearch, 
      title: "Audyt SEO", 
      desc: "Kompleksowa analiza strony: techniczne problemy, treści, profil linków, konkurencja. Identyfikujemy co blokuje wzrost." 
    },
    { 
      icon: Search, 
      title: "Optymalizacja on-page", 
      desc: "Meta tagi, struktura nagłówków, szybkość ładowania, Core Web Vitals, schema markup. Wszystko, co Google analizuje." 
    },
    { 
      icon: Link2, 
      title: "Link building", 
      desc: "Budowanie autorytetu przez linki z wartościowych źródeł. Naturalne, bezpieczne, zgodne z wytycznymi Google." 
    },
    { 
      icon: LineChart, 
      title: "Monitoring i raportowanie", 
      desc: "Miesięczne raporty z postępów. Pozycje, ruch organiczny, konwersje. Transparentne wyniki, które możesz zmierzyć." 
    },
  ];

  const results = [
    { value: "+420%", label: "Wzrost ruchu organicznego", desc: "w ciągu 12 miesięcy współpracy" },
    { value: "TOP 10", label: "Pozycje dla głównych fraz", desc: "średnio w ciągu 6 miesięcy" },
    { value: "+85%", label: "Więcej zapytań ofertowych", desc: "z ruchu organicznego" },
    { value: "100+", label: "Wypozycjonowanych stron", desc: "dla firm z całej Polski" },
  ];

  const pricing = [
    { 
      title: "Audyt SEO", 
      desc: "Jednorazowa analiza strony z rekomendacjami działań.", 
      price: "1 500 - 3 000 zł", 
      features: ["Audyt techniczny", "Analiza treści", "Analiza konkurencji", "Raport z rekomendacjami"] 
    },
    { 
      title: "Pozycjonowanie lokalne", 
      desc: "Dla firm działających w konkretnym mieście lub regionie.", 
      price: "1 500 - 3 500 zł/mies.", 
      features: ["Google Maps", "Frazy lokalne", "Link building lokalny", "Optymalizacja wizytówki", "Miesięczne raporty"] 
    },
    { 
      title: "Pozycjonowanie ogólnopolskie", 
      desc: "Dla firm chcących zdobyć klientów z całej Polski.", 
      price: "3 000 - 8 000 zł/mies.", 
      features: ["Strategia SEO", "Content marketing", "Link building", "Optymalizacja techniczna", "Dedykowany opiekun"] 
    },
  ];

  // Plain text FAQ for schema.org
  const faqSchemaItems = [
    { question: "Czym jest pozycjonowanie stron w Google?", answer: "Pozycjonowanie stron (SEO) to proces optymalizacji strony internetowej w celu poprawy jej widoczności w wynikach wyszukiwania Google. Obejmuje działania on-page i off-page, których celem jest osiągnięcie jak najwyższych pozycji na wybrane słowa kluczowe. To podstawa skutecznego marketingu internetowego." },
    { question: "Ile trwa pozycjonowanie, zanim zobaczę efekty?", answer: "Pierwsze efekty pozycjonowania widoczne są zazwyczaj po 3-6 miesiącach. Czas zależy od konkurencyjności branży, stanu strony i intensywności działań. Pełne efekty osiągane są po 12-18 miesiącach systematycznej pracy. Na szybkie efekty warto połączyć SEO z kampaniami Google Ads." },
    { question: "Jak agencja SEO wpływa na pozycjonowanie stron?", answer: "Agencja SEO przeprowadza audyt, tworzy strategię, optymalizuje stronę technicznie i treściowo, buduje linki oraz monitoruje wyniki. Dzięki doświadczeniu można skuteczniej i szybciej osiągnąć wysokie pozycje w Google. Oferujemy również pozycjonowanie w Google Maps dla firm lokalnych." },
    { question: "Jakie działania SEO wpływają na pozycjonowanie strony?", answer: "Kluczowe działania to: optymalizacja techniczna (szybkość, mobile, struktura), optymalizacja treści (słowa kluczowe, nagłówki, meta tagi), budowanie linków zwrotnych oraz analiza i dostosowywanie strategii. Ważna jest również jakość strony internetowej." },
    { question: "Czy pozycjonowanie stron w Google jest kosztowne?", answer: "Koszt zależy od konkurencyjności branży, zakresu działań i celów. Pozycjonowanie lokalne zaczyna się od ok. 1500 zł/mies., ogólnopolskie od 3000 zł/mies. To inwestycja, która przy dobrze dobranej strategii zwraca się wielokrotnie w postaci nowych klientów." },
    { question: "Czym różni się SEO od Google Ads?", answer: "SEO to pozycjonowanie organiczne – efekty są długoterminowe, ale wymagają czasu. Google Ads to płatne reklamy – efekty natychmiastowe, ale kończą się gdy przestajesz płacić. Najskuteczniejsza strategia łączy oba podejścia w ramach kompleksowej obsługi marketingowej." },
    { question: "Jakie narzędzia Google pomagają w pozycjonowaniu?", answer: "Google Search Console pozwala monitorować widoczność i błędy indeksowania. Google Analytics dostarcza danych o ruchu. Google PageSpeed Insights mierzy szybkość strony. Te narzędzia są podstawą skutecznego SEO i optymalizacji strony internetowej." },
    { question: "Czy mogę pozycjonować stronę samodzielnie?", answer: "Podstawowe działania SEO można wykonać samodzielnie, ale skuteczne pozycjonowanie wymaga specjalistycznej wiedzy, narzędzi i czasu. Błędy mogą skutkować karą od Google. Dla większości firm bardziej opłacalna jest współpraca z agencją marketingową." },
  ];

  const faqItems = [
    {
      question: "Czym jest pozycjonowanie stron w Google?",
      answer: <>Pozycjonowanie stron (SEO) to proces optymalizacji strony internetowej w celu poprawy jej widoczności w wynikach wyszukiwania Google. Obejmuje działania on-page i off-page, których celem jest osiągnięcie jak najwyższych pozycji na wybrane słowa kluczowe. To podstawa skutecznego <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">marketingu internetowego</Link>.</>
    },
    {
      question: "Ile trwa pozycjonowanie, zanim zobaczę efekty?",
      answer: <>Pierwsze efekty pozycjonowania widoczne są zazwyczaj po 3-6 miesiącach. Czas zależy od konkurencyjności branży, stanu strony i intensywności działań. Pełne efekty osiągane są po 12-18 miesiącach systematycznej pracy. Na szybkie efekty warto połączyć SEO z kampaniami <Link to="/google-ads" className="text-primary hover:underline">Google Ads</Link>.</>
    },
    {
      question: "Jak agencja SEO wpływa na pozycjonowanie stron?",
      answer: <>Agencja SEO przeprowadza audyt, tworzy strategię, optymalizuje stronę technicznie i treściowo, buduje linki oraz monitoruje wyniki. Dzięki doświadczeniu można skuteczniej i szybciej osiągnąć wysokie pozycje w Google. Oferujemy również <Link to="/pozycjonowanie-google-maps" className="text-primary hover:underline">pozycjonowanie w Google Maps</Link> dla firm lokalnych.</>
    },
    {
      question: "Jakie działania SEO wpływają na pozycjonowanie strony?",
      answer: <>Kluczowe działania to: optymalizacja techniczna (szybkość, mobile, struktura), optymalizacja treści (słowa kluczowe, nagłówki, meta tagi), budowanie linków zwrotnych oraz analiza i dostosowywanie strategii. Ważna jest również jakość <Link to="/strony-internetowe" className="text-primary hover:underline">strony internetowej</Link>.</>
    },
    {
      question: "Czy pozycjonowanie stron w Google jest kosztowne?",
      answer: "Koszt zależy od konkurencyjności branży, zakresu działań i celów. Pozycjonowanie lokalne zaczyna się od ok. 1500 zł/mies., ogólnopolskie od 3000 zł/mies. To inwestycja, która przy dobrze dobranej strategii zwraca się wielokrotnie w postaci nowych klientów."
    },
    {
      question: "Czym różni się SEO od Google Ads?",
      answer: <>SEO to pozycjonowanie organiczne – efekty są długoterminowe, ale wymagają czasu. <Link to="/google-ads" className="text-primary hover:underline">Google Ads</Link> to płatne reklamy – efekty natychmiastowe, ale kończą się gdy przestajesz płacić. Najskuteczniejsza strategia łączy oba podejścia w ramach <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">kompleksowej obsługi marketingowej</Link>.</>
    },
    {
      question: "Jakie narzędzia Google pomagają w pozycjonowaniu?",
      answer: <>Google Search Console pozwala monitorować widoczność i błędy indeksowania. Google Analytics dostarcza danych o ruchu. Google PageSpeed Insights mierzy szybkość strony. Te narzędzia są podstawą skutecznego SEO i optymalizacji <Link to="/strony-internetowe" className="text-primary hover:underline">strony internetowej</Link>.</>
    },
    {
      question: "Czy mogę pozycjonować stronę samodzielnie?",
      answer: <>Podstawowe działania SEO można wykonać samodzielnie, ale skuteczne pozycjonowanie wymaga specjalistycznej wiedzy, narzędzi i czasu. Błędy mogą skutkować karą od Google. Dla większości firm bardziej opłacalna jest współpraca z <Link to="/kompleksowa-obsluga-marketingowa" className="text-primary hover:underline">agencją marketingową</Link>.</>
    },
  ];

  // Featured case studies
  const featuredCaseStudies = [
    {
      title: "RPPG - Kancelaria prawna",
      category: "Pozycjonowanie lokalne",
      result: "+380% ruchu organicznego",
      link: "/realizacje/rppg",
      image: rppgImg,
      desc: "Kompleksowe SEO lokalne dla kancelarii prawnej w Poznaniu."
    },
    {
      title: "Klagem - Odszkodowania",
      category: "Pozycjonowanie ogólnopolskie",
      result: "TOP 3 dla głównych fraz",
      link: "/realizacje/klagem",
      image: klagemlmg,
      desc: "Strategia SEO dla firmy odszkodowawczej działającej w całej Polsce."
    },
    {
      title: "FPS Cegielski",
      category: "SEO dla przemysłu",
      result: "+520% zapytań B2B",
      link: "/realizacje/fps-cegielski",
      image: fpsCegielskiImg,
      desc: "Pozycjonowanie strony korporacyjnej lidera branży przemysłowej."
    },
  ];

  // More case studies
  const moreCaseStudies = [
    {
      title: "Victory Cars",
      category: "SEO motoryzacja",
      result: "+420% ruchu",
      link: "/realizacje/victory-cars",
      image: victoryCarsImg
    },
    {
      title: "Cute Dumpling",
      category: "SEO gastronomia",
      result: "+190% rezerwacji",
      link: "/realizacje/cute-dumpling",
      image: cuteDumplingImg
    },
    {
      title: "Friendly Gas",
      category: "SEO usługi",
      result: "+260% konwersji",
      link: "/realizacje/friendly-gas",
      image: friendlyGasImg
    },
  ];

  const cityLinks = [
    { name: "Poznań", href: "/pozycjonowanie-stron-poznan" },
    { name: "Warszawa", href: "/pozycjonowanie-warszawa" },
    { name: "Kraków", href: "/pozycjonowanie-krakow" },
    { name: "Wrocław", href: "/pozycjonowanie-wroclaw" },
    { name: "Gdańsk", href: "/pozycjonowanie-gdansk" },
    { name: "Łódź", href: "/pozycjonowanie-lodz" },
    { name: "Katowice", href: "/pozycjonowanie-katowice" },
    { name: "Szczecin", href: "/pozycjonowanie-szczecin" },
    { name: "Bydgoszcz", href: "/pozycjonowanie-bydgoszcz" },
    { name: "Lublin", href: "/pozycjonowanie-lublin" },
  ];

  const includedFeatures = [
    { icon: FileSearch, title: "Audyt SEO", desc: "Kompleksowa analiza strony na start" },
    { icon: Search, title: "Optymalizacja on-page", desc: "Meta tagi, nagłówki, struktura" },
    { icon: Link2, title: "Link building", desc: "Budowanie autorytetu domeny" },
    { icon: LineChart, title: "Raportowanie", desc: "Miesięczne raporty z postępów" },
    { icon: BarChart, title: "Google Analytics", desc: "Konfiguracja i analiza danych" },
    { icon: Globe, title: "Search Console", desc: "Monitoring indeksowania" },
    { icon: Zap, title: "Core Web Vitals", desc: "Optymalizacja szybkości" },
    { icon: Target, title: "Strategia słów kluczowych", desc: "Dobór fraz z potencjałem" },
  ];

  const whyUs = [
    { icon: Award, title: "Udokumentowane efekty", desc: "Pokazujemy wyniki, nie obietnice. Case studies z realnymi wzrostami ruchu i pozycji." },
    { icon: Users, title: "Zespół specjalistów SEO", desc: "Dedykowani eksperci od pozycjonowania, content marketingu i link buildingu." },
    { icon: Clock, title: "Transparentne raportowanie", desc: "Miesięczne raporty z pozycjami, ruchem i wykonanymi działaniami." },
    { icon: Shield, title: "Bezpieczne metody", desc: "Tylko white-hat SEO zgodne z wytycznymi Google. Zero ryzyka kary." },
    { icon: Headphones, title: "Stały kontakt", desc: "Dedykowany opiekun, szybka komunikacja, regularne konsultacje." },
    { icon: TrendingUp, title: "Nastawienie na ROI", desc: "Nie tylko pozycje, ale realne wyniki biznesowe: leady i sprzedaż." },
  ];

  const processSteps = [
    { step: "01", title: "Audyt i analiza", desc: "Badamy stronę, konkurencję i potencjał słów kluczowych." },
    { step: "02", title: "Strategia SEO", desc: "Tworzymy plan działań dopasowany do celów biznesowych." },
    { step: "03", title: "Optymalizacja techniczna", desc: "Naprawiamy błędy i optymalizujemy stronę pod Google." },
    { step: "04", title: "Content i on-page", desc: "Optymalizujemy treści i strukturę strony." },
    { step: "05", title: "Link building", desc: "Budujemy profil linków zwiększający autorytet." },
    { step: "06", title: "Monitoring i rozwój", desc: "Analizujemy wyniki i dostosowujemy strategię." },
  ];

  const seoTypes = [
    { name: "SEO lokalne", desc: "Dla firm działających lokalnie", icon: MapPin },
    { name: "SEO ogólnopolskie", desc: "Dla firm z całej Polski", icon: Globe },
    { name: "SEO e-commerce", desc: "Dla sklepów internetowych", icon: Target },
    { name: "SEO B2B", desc: "Dla firm B2B", icon: Users },
  ];

  return (
    <>
      <Helmet>
        <title>Pozycjonowanie Stron WWW | SEO Google | Fotz</title>
        <meta 
          name="description" 
          content="Pozycjonowanie stron internetowych w Google. Skuteczne SEO, audyt strony, link building. Zwiększamy widoczność i ruch organiczny. Sprawdź cennik." 
        />
        <link rel="canonical" href="https://fotz.pl/pozycjonowanie" />
      </Helmet>
      
      <ServiceSchema 
        name="Pozycjonowanie Stron Internetowych"
        description="Profesjonalne pozycjonowanie stron WWW w Google. Audyt SEO, optymalizacja, link building. Zwiększamy widoczność i ruch organiczny na stronie."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://fotz.pl/pozycjonowanie" },
        ]}
      />
      
      <FAQSchema 
        items={faqSchemaItems}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8"
              >
                <Search className="w-4 h-4" />
                Pozycjonowanie SEO
              </motion.span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                <TextReveal>
                  Pozycjonowanie stron WWW w <span className="text-gradient">Google</span>
                </TextReveal>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Zwiększamy widoczność Twojej strony w wynikach wyszukiwania. <span className="text-foreground font-medium">Skuteczne SEO, które przekłada się na ruch, leady i sprzedaż.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Bezpłatny audyt SEO
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-3xl mx-auto">
                {results.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center p-2 sm:p-4"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Typy SEO */}
        <section className="py-12 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider w-full sm:w-auto text-center mb-2 sm:mb-0">Specjalizacje:</span>
              {seoTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <type.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="font-medium text-sm sm:text-base">{type.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Problem klienta */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Eye className="w-4 h-4" />
                  Problem
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego Twoja strona <span className="text-gradient">nie jest widoczna</span> w Google?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  93% doświadczeń online zaczyna się od wyszukiwarki. Jeśli Cię tam nie ma, tracisz klientów.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-destructive/30 transition-all h-full group">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Co robimy */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Sparkles className="w-4 h-4" />
                  Rozwiązanie
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Jak pozycjonujemy <span className="text-gradient">strony w Google?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Skuteczne SEO to połączenie techniki, treści i autorytetu. <strong className="text-foreground">Działamy kompleksowo.</strong>
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatWeDo.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Featured Case Studies */}
        <section className="py-24 bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Star className="w-4 h-4" />
                  Najlepsze realizacje
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Strony, które <span className="text-gradient">zdominowały Google</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Zobacz, jak nasze pozycjonowanie zwiększyło widoczność i przychody klientów.
                </p>
              </div>
            </FadeInView>

            {/* Featured - large cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredCaseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.15}>
                  <Link to={study.link} className="group block h-full">
                    <div className="rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h3 className="text-xl font-bold mt-2 mb-2 group-hover:text-primary transition-colors">{study.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{study.desc}</p>
                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/30">
                          <span className="text-lg font-bold text-gradient">{study.result}</span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            {/* More case studies */}
            <FadeInView>
              <h3 className="text-xl font-semibold text-center mb-8">Więcej realizacji SEO</h3>
            </FadeInView>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {moreCaseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={study.link} className="group block">
                    <div className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h4 className="font-semibold mt-1 group-hover:text-primary transition-colors">{study.title}</h4>
                        <span className="text-sm text-muted-foreground">{study.result}</span>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Section: Co zawiera usługa */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  W cenie
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Co zawiera usługa <span className="text-gradient">pozycjonowania?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe działania SEO – od audytu po systematyczny rozwój widoczności.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all h-full group">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Dlaczego warto */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Award className="w-4 h-4" />
                  Wyróżniki
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Dlaczego warto <span className="text-gradient">nam zlecić pozycjonowanie?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Skuteczne SEO wymaga wiedzy, doświadczenia i systematyczności. Mamy wszystkie trzy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Proces */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <Rocket className="w-4 h-4" />
                  Proces
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Jak wygląda <span className="text-gradient">proces pozycjonowania?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Od audytu do TOP 10 – przejrzysty proces z mierzalnymi efektami.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all group">
                    <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Cennik */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  💰 Cennik
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje <span className="text-gradient">pozycjonowanie stron?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Cena zależy od konkurencyjności branży i zakresu działań. Transparentne warunki.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary uppercase mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-3xl font-bold text-gradient mb-6">{item.price}</div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={index === 1 ? "default" : "outline"} className="w-full">
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  ❓ FAQ
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Często zadawane <span className="text-gradient">pytania o SEO</span>
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-lg sm:rounded-xl px-4 sm:px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4 sm:py-5">
                      <span className="font-medium text-sm sm:text-base pr-2">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 sm:pb-5 text-sm sm:text-base">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section: Miasta */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <MapPin className="w-4 h-4" />
                  Zasięg
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Pozycjonowanie stron <span className="text-gradient">w całej Polsce</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Pozycjonujemy strony dla firm z największych miast w Polsce. Działamy zdalnie, efekty widoczne wszędzie.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {cityLinks.map((city, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    {city.href === "/pozycjonowanie-stron-poznan" ? (
                      <Link 
                        to={city.href}
                        className="flex items-center justify-center gap-2 px-4 py-4 bg-primary/10 border border-primary/30 rounded-xl text-sm font-medium hover:bg-primary/20 transition-all group"
                      >
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{city.name}</span>
                      </Link>
                    ) : (
                      <div 
                        className="flex items-center justify-center gap-2 px-4 py-4 bg-background border border-border/50 rounded-xl text-sm text-muted-foreground cursor-default"
                        title="Strona w przygotowaniu"
                      >
                        <MapPin className="w-4 h-4" />
                        <span>{city.name}</span>
                      </div>
                    )}
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Baza wiedzy */}
        <section className="py-24 border-t border-border/30 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <FadeInView>
                <div className="text-center mb-16">
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                    📚 Baza wiedzy
                  </span>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                    Wszystko o <span className="text-gradient">SEO i pozycjonowaniu</span>
                  </h2>
                </div>
              </FadeInView>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
                <FadeInView delay={0.1}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileCode className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">SEO techniczne</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Fundament każdej skutecznej strategii SEO. <strong className="text-foreground">Core Web Vitals</strong>, 
                      indeksacja, struktura URL, schema markup – to wszystko wpływa na pozycje w Google.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Audyt techniczny strony</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Optymalizacja szybkości</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Dane strukturalne (JSON-LD)</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Content marketing</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      <strong className="text-foreground">Treść jest królem</strong> – ale tylko wartościowa. 
                      Tworzymy artykuły blogowe, opisy produktów i landing pages zoptymalizowane pod SEO.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Artykuły eksperckie (blog)</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Opisy kategorii i produktów</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Strategia słów kluczowych</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ExternalLink className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Link building</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Linki zwrotne to wciąż kluczowy czynnik rankingowy. Budujemy <strong className="text-foreground">naturalny profil linków</strong> 
                      z wartościowych źródeł – bez sztuczek, które mogą zaszkodzić.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Linki z portali branżowych</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Artykuły sponsorowane</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Analiza profilu linków</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BarChart className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Monitoring i raporty</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      SEO to proces. Monitorujemy <strong className="text-foreground">pozycje, ruch i konwersje</strong>. 
                      Comiesięczne raporty pokazują co działa i gdzie są szanse na wzrost.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Śledzenie pozycji fraz</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Analiza ruchu organicznego</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Raporty z rekomendacjami</li>
                    </ul>
                  </div>
                </FadeInView>
              </div>

              <FadeInView delay={0.5}>
                <div className="relative p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-8 text-4xl sm:text-5xl md:text-6xl text-primary/30 font-serif">"</div>
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-3xl mx-auto pt-4 sm:pt-6 pb-2 sm:pb-4 px-4">
                    <span className="text-foreground">Pozycjonowanie to inwestycja, która rośnie z czasem. Efekty SEO są trwałe – w przeciwieństwie do płatnych reklam.</span>
                  </blockquote>
                  <p className="text-center text-sm sm:text-base text-muted-foreground">
                    — Zespół Fotz Studio
                  </p>
                </div>
              </FadeInView>

              {/* Sekcja powiązanych usług */}
              <FadeInView delay={0.6}>
                <div className="mt-16 p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-center">Powiązane usługi</h3>
                  <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Pozycjonowanie działa najlepiej w połączeniu z innymi usługami. Sprawdź, co jeszcze możemy dla Ciebie zrobić.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    <Link 
                      to="/strony-internetowe" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <Globe className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        Strony Internetowe
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Profesjonalne strony WWW zoptymalizowane pod SEO od podstaw.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link 
                      to="/ecommerce-tworzenie-sklepu" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <Target className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        E-commerce & Sklepy
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Sklepy internetowe z SEO e-commerce wbudowanym od startu.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                    <Link 
                      to="/google-ads" 
                      className="group p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <TrendingUp className="w-10 h-10 text-primary mb-4" />
                      <h4 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                        Google Ads
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Uzupełnij SEO o płatne kampanie dla szybkich efektów.
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary text-sm mt-4 group-hover:gap-2 transition-all">
                        Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/30 rounded-full blur-[100px] sm:blur-[150px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Gotowy na więcej <span className="text-gradient">klientów z Google?</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                  Zamów bezpłatny audyt SEO i dowiedz się, jak możemy zwiększyć widoczność Twojej strony w wyszukiwarce.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                  <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Zamów bezpłatny audyt SEO
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        <RelatedServices 
          currentService="pozycjonowanie"
          subtitle="Usługi, które wspierają organiczny wzrost widoczności w Google"
        />

        <ContactSection />
      </Layout>
    </>
  );
};

export default Pozycjonowanie;
