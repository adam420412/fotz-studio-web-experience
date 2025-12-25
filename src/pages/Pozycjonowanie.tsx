import { Helmet } from "react-helmet";
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
  AlertTriangle,
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
  MousePointer
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

import rppgImg from "@/assets/portfolio/rppg.png";
import klagemlmg from "@/assets/portfolio/klagem.png";
import fpsCegielskiImg from "@/assets/portfolio/fps-cegielski.png";

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
    { value: "+420%", label: "Średni wzrost ruchu organicznego", desc: "w ciągu 12 miesięcy współpracy" },
    { value: "TOP 10", label: "Pozycje dla głównych fraz", desc: "średnio w ciągu 6 miesięcy" },
    { value: "+85%", label: "Wzrost zapytań ofertowych", desc: "z ruchu organicznego" },
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

  const faqItems = [
    {
      question: "Czym jest pozycjonowanie stron w Google?",
      answer: "Pozycjonowanie stron (SEO) to proces optymalizacji strony internetowej w celu poprawy jej widoczności w wynikach wyszukiwania Google. Obejmuje działania on-page (na stronie) i off-page (poza stroną), których celem jest osiągnięcie jak najwyższych pozycji na wybrane słowa kluczowe."
    },
    {
      question: "Ile trwa pozycjonowanie, zanim zobaczę efekty?",
      answer: "Pierwsze efekty pozycjonowania widoczne są zazwyczaj po 3-6 miesiącach. Czas zależy od konkurencyjności branży, stanu strony i intensywności działań. Pozycjonowanie to proces długoterminowy – pełne efekty osiągane są po 12-18 miesiącach systematycznej pracy."
    },
    {
      question: "Jak agencja SEO wpływa na pozycjonowanie stron?",
      answer: "Agencja SEO przeprowadza audyt, tworzy strategię, optymalizuje stronę technicznie i treściowo, buduje linki oraz monitoruje wyniki. Dzięki doświadczeniu i narzędziom profesjonalistów można skuteczniej i szybciej osiągnąć wysokie pozycje w Google."
    },
    {
      question: "Jakie działania SEO wpływają na pozycjonowanie strony?",
      answer: "Kluczowe działania to: optymalizacja techniczna (szybkość, mobile, struktura), optymalizacja treści (słowa kluczowe, nagłówki, meta tagi), budowanie linków zwrotnych oraz analiza i dostosowywanie strategii na podstawie danych z Google Analytics i Search Console."
    },
    {
      question: "Czy pozycjonowanie stron w Google jest kosztowne?",
      answer: "Koszt zależy od konkurencyjności branży, zakresu działań i celów. Pozycjonowanie lokalne zaczyna się od ok. 1500 zł/mies., ogólnopolskie od 3000 zł/mies. To inwestycja, która przy dobrze dobranej strategii zwraca się wielokrotnie poprzez stały napływ klientów."
    },
    {
      question: "Czym różni się SEO od Google Ads?",
      answer: "SEO to pozycjonowanie organiczne – efekty są długoterminowe, ale wymagają czasu. Google Ads to płatne reklamy – efekty natychmiastowe, ale kończą się gdy przestajesz płacić. Najskuteczniejsza strategia łączy oba podejścia."
    },
    {
      question: "Jakie narzędzia Google pomagają w pozycjonowaniu?",
      answer: "Google Search Console pozwala monitorować widoczność i błędy indeksowania. Google Analytics dostarcza danych o ruchu i zachowaniach użytkowników. Google PageSpeed Insights mierzy szybkość strony. Te narzędzia są podstawą skutecznego SEO."
    },
    {
      question: "Czy mogę pozycjonować stronę samodzielnie?",
      answer: "Podstawowe działania SEO można wykonać samodzielnie, ale skuteczne pozycjonowanie wymaga specjalistycznej wiedzy, narzędzi i czasu. Błędy mogą skutkować karą od Google. Dla większości firm bardziej opłacalna jest współpraca z agencją SEO."
    },
  ];

  const caseStudies = [
    {
      title: "RPPG - Kancelaria prawna",
      category: "Pozycjonowanie lokalne",
      result: "+380% ruchu organicznego",
      link: "/realizacje/rppg",
      image: rppgImg
    },
    {
      title: "Klagem - Odszkodowania",
      category: "Pozycjonowanie ogólnopolskie",
      result: "TOP 3 dla głównych fraz",
      link: "/realizacje/klagem",
      image: klagemlmg
    },
    {
      title: "FPS Cegielski",
      category: "SEO dla przemysłu",
      result: "+520% zapytań B2B",
      link: "/realizacje/fps-cegielski",
      image: fpsCegielskiImg
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
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
      />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-40 pb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
                Pozycjonowanie SEO
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <TextReveal>
                  Pozycjonowanie stron WWW w <span className="text-gradient">Google</span>
                </TextReveal>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Zwiększamy widoczność Twojej strony w wynikach wyszukiwania. Skuteczne SEO, 
                które przekłada się na ruch, leady i sprzedaż. Mierzalne efekty, transparentne działania.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatny audyt SEO
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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

        {/* Section 1: Problem klienta */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Problem</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Twoja strona nie jest widoczna w Google?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  93% doświadczeń online zaczyna się od wyszukiwarki. Jeśli Cię tam nie ma, tracisz klientów.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-destructive/30 transition-all h-full">
                    <problem.icon className="w-10 h-10 text-destructive mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Co robimy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Rozwiązanie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak pozycjonujemy strony w Google?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Skuteczne SEO to połączenie techniki, treści i autorytetu. Działamy kompleksowo.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {whatWeDo.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Efekty */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Efekty</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wyniki naszych klientów
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Efekty pozycjonowania mierzymy w ruchu, pozycjach i – najważniejsze – w przychodach.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {results.map((result, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-xl bg-background border border-border/50">
                    <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                      {result.value}
                    </div>
                    <div className="text-lg font-medium mb-1">{result.label}</div>
                    <p className="text-sm text-muted-foreground">{result.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Case Studies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Portfolio</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wybrane realizacje SEO
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz, jak nasze pozycjonowanie zwiększyło widoczność i przychody klientów.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link to={study.link} className="group block h-full">
                    <div className="rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all overflow-hidden h-full flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">{study.category}</span>
                        <h3 className="text-xl font-semibold mt-2 mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                        <div className="flex items-center justify-between mt-auto">
                          <span className="text-lg font-bold text-primary">{study.result}</span>
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <div className="text-center">
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
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">W cenie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Co zawiera usługa pozycjonowania?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowe działania SEO – od audytu po systematyczny rozwój widoczności.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/20 transition-all h-full">
                    <feature.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Dlaczego warto */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Wyróżniki</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto nam zlecić pozycjonowanie?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Skuteczne SEO wymaga wiedzy, doświadczenia i systematyczności. Mamy wszystkie trzy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Etapy realizacji */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak wygląda proces pozycjonowania?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Od audytu do TOP 10 – przejrzysty proces z mierzalnymi efektami.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {processSteps.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-6 rounded-xl bg-background border border-border/50">
                    <div className="text-5xl font-bold text-primary/20 mb-3">{item.step}</div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Cennik */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ile kosztuje pozycjonowanie stron?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Cena zależy od konkurencyjności branży i zakresu działań. Transparentne warunki.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-6">{item.price}</div>
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

        {/* Section 6: FAQ */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Często zadawane pytania o pozycjonowanie
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className="border border-border/50 rounded-xl px-6 bg-background"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-5">
                      <span className="font-medium">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Section: Miasta w Polsce */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Zasięg</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Pozycjonowanie stron w całej Polsce
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pozycjonujemy strony dla firm z największych miast w Polsce. 
                  Działamy zdalnie, efekty widoczne wszędzie.
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
              <FadeInView delay={0.5}>
                <p className="text-center text-sm text-muted-foreground mt-8">
                  Strona dla Poznania jest już dostępna. Pozostałe miasta wkrótce.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Gotowy na więcej klientów z Google?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Zamów bezpłatny audyt SEO i dowiedz się, jak możemy zwiększyć 
                  widoczność Twojej strony w wyszukiwarce.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button asChild size="lg" className="group">
                    <Link to="/kontakt">
                      Zamów bezpłatny audyt SEO
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:+48790814814">
                      <Phone className="mr-2 h-5 w-5" />
                      +48 790 814 814
                    </a>
                  </Button>
                </div>

                {/* City Links in CTA */}
                <div className="pt-8 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Działamy w całej Polsce. Sprawdź lokalne usługi:
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {cityLinks.filter(c => c.href === "/pozycjonowanie-stron-poznan").map((city, index) => (
                      <Link 
                        key={index} 
                        to={city.href}
                        className="px-4 py-2 bg-card border border-border/50 rounded-full text-sm hover:border-primary/30 hover:text-primary transition-all"
                      >
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Pozycjonowanie Stron WWW: Jak Wypozycjonować Stronę w Google?
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  <strong>Pozycjonowanie stron WWW w Google to kluczowy element sukcesu online dla każdej firmy.</strong> Zapewnienie 
                  wysokiej widoczności strony internetowej w wynikach wyszukiwania Google przekłada się bezpośrednio na zwiększony 
                  ruch na stronie, a co za tym idzie, na potencjalnych klientów i wzrost sprzedaży.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Czym jest pozycjonowanie stron?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Pozycjonowanie stron, znane również jako SEO (Search Engine Optimization), to proces optymalizacji 
                  strony internetowej w celu poprawy jej widoczności w wyszukiwarce Google.</strong> Skuteczne pozycjonowanie 
                  obejmuje zarówno optymalizację treści, jak i techniczne aspekty strony www, a także budowanie autorytetu 
                  w sieci poprzez link building.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Jak zacząć pozycjonowanie strony www?
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>Kluczowe jest przeprowadzenie wstępnego audytu SEO</strong> – kompleksowej analizy strony www, 
                  mającej na celu identyfikację mocnych i słabych stron w kontekście optymalizacji pod wyszukiwarkę Google. 
                  Audyt SEO powinien obejmować analizę treści, słów kluczowych, profilu linków oraz konkurencji.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Działania SEO on-page i off-page
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  <strong>SEO on-page</strong> to optymalizacja elementów bezpośrednio na stronie: treść, meta tagi, 
                  struktura, szybkość ładowania. <strong>SEO off-page</strong> to budowanie linków zwrotnych z innych 
                  stron, które zwiększają autorytet domeny w oczach Google. Oba rodzaje działań są niezbędne do 
                  skutecznego pozycjonowania.
                </p>
                
                <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">
                  Rola treści i linków w pozycjonowaniu
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wysokiej jakości, unikalna treść jest jednym z najważniejszych czynników rankingowych Google. 
                  Treść powinna być zoptymalizowana pod słowa kluczowe, ale przede wszystkim wartościowa dla 
                  użytkowników. Linki zwrotne z renomowanych stron budują autorytet – im więcej wartościowych 
                  linków, tym wyższa pozycja w wynikach wyszukiwania.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Pozycjonowanie;