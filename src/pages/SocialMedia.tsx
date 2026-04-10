import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  TrendingUp, 
  BarChart, 
  Target,
  Zap,
  Phone,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Users,
  Clock,
  Award,
  Shield,
  Headphones,
  Eye,
  Heart,
  Share2,
  Camera,
  Video,
  PenTool,
  Calendar,
  LineChart,
  ThumbsUp,
  Megaphone,
  Palette,
  Sparkles,
  Rocket,
  Star,
  Instagram,
  Play
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
import { YouTubeShowcase } from "@/components/sections/YouTubeShowcase";
import { InstagramShowcase } from "@/components/sections/InstagramShowcase";
import { RelatedServices } from "@/components/sections/RelatedServices";

import fabrykaViraliImg from "@/assets/portfolio/fabryka-virali.png";
import lauvjahImg from "@/assets/portfolio/lauvjah.png";
import sookarImg from "@/assets/portfolio/sookar.jpg";
import eneaStadionImg from "@/assets/portfolio/enea-stadion.png";
import gierkilmg from "@/assets/portfolio/gierki.png";
import stageplanImg from "@/assets/portfolio/stageplan.jpg";

const SocialMedia = () => {
  const problems = [
    { 
      icon: Eye, 
      title: "Brak zaangażowania", 
      desc: "Posty nie zbierają polubień i komentarzy. Twoja społeczność jest nieaktywna, a zasięgi spadają." 
    },
    { 
      icon: TrendingUp, 
      title: "Konkurencja Cię wyprzedza", 
      desc: "Inne firmy z branży mają silniejszą obecność w social mediach i przyciągają Twoich klientów." 
    },
    { 
      icon: Target, 
      title: "Brak strategii", 
      desc: "Publikujesz bez planu, losowo. Nie wiesz, co działa, a co jest stratą czasu i budżetu." 
    },
    { 
      icon: Calendar, 
      title: "Brak czasu na social media", 
      desc: "Prowadzisz firmę, nie masz czasu na codzienne publikacje, stories i odpowiadanie na komentarze." 
    },
  ];

  const whatWeDo = [
    { 
      icon: PenTool, 
      title: "Strategia i planowanie", 
      desc: "Tworzymy spersonalizowaną strategię dopasowaną do Twojej branży, celów i grupy docelowej. Definiujemy ton komunikacji i harmonogram." 
    },
    { 
      icon: Camera, 
      title: "Tworzenie contentu", 
      desc: "Projektujemy grafiki, nagrywamy video, piszemy angażujące copy. Profesjonalny content, który wyróżnia się w feedzie." 
    },
    { 
      icon: Megaphone, 
      title: "Kampanie reklamowe", 
      desc: "Facebook Ads, Instagram Ads, LinkedIn Ads. Precyzyjne targetowanie, optymalizacja budżetu, mierzalne wyniki." 
    },
    { 
      icon: LineChart, 
      title: "Raportowanie i analiza", 
      desc: "Miesięczne raporty z wynikami: zasięgi, zaangażowanie, konwersje. Dane, które pomagają podejmować decyzje." 
    },
  ];

  const results = [
    { value: "+340%", label: "Wzrost zaangażowania", desc: "w ciągu 6 miesięcy współpracy" },
    { value: "2.5M+", label: "Wygenerowanych zasięgów", desc: "dla naszych klientów miesięcznie" },
    { value: "+180%", label: "Więcej obserwujących", desc: "średnio w pierwszym roku" },
    { value: "50+", label: "Aktywnych klientów", desc: "w stałej obsłudze social media" },
  ];

  const pricing = [
    { 
      title: "Pakiet Start", 
      desc: "Dla firm rozpoczynających przygodę z social mediami.", 
      price: "2 000 - 3 500 zł/mies.", 
      features: ["1-2 platformy", "12 postów/mies.", "Grafiki i copy", "Moderacja komentarzy", "Raport miesięczny"] 
    },
    { 
      title: "Pakiet Biznes", 
      desc: "Kompleksowa obsługa dla rozwijających się firm.", 
      price: "3 500 - 6 000 zł/mies.", 
      features: ["2-3 platformy", "20 postów/mies.", "Stories i Reels", "Kampanie reklamowe", "Dedykowany opiekun"] 
    },
    { 
      title: "Pakiet Premium", 
      desc: "Pełna obsługa z produkcją video i strategią influencer.", 
      price: "6 000 - 15 000 zł/mies.", 
      features: ["Wszystkie platformy", "Nieograniczone posty", "Produkcja video", "Influencer marketing", "Strategia 360°"] 
    },
  ];

  const faqItems = [
    {
      question: "Czym zajmuje się agencja social media?",
      answer: "Agencja social media to profesjonalny zespół, który kompleksowo zarządza obecnością marki w mediach społecznościowych: tworzy strategie, produkuje content (grafiki, video, copy), prowadzi kampanie reklamowe, moderuje społeczność i raportuje wyniki. Działamy w oparciu o dane, by zwiększać widoczność i wspierać cele sprzedażowe."
    },
    {
      question: "Jak wygląda współpraca z agencją social media?",
      answer: "Współpraca zaczyna się od briefu i analizy Twojej marki. Następnie przygotowujemy strategię, harmonogram i wycenę. Po akceptacji rozpoczynamy produkcję contentu i publikację. Otrzymujesz regularne raporty i masz stały kontakt z dedykowanym opiekunem. Działania optymalizujemy na bieżąco."
    },
    {
      question: "Czy warto inwestować w reklamy na Facebooku i Instagramie?",
      answer: "Tak – reklama w social media to jeden z najefektywniejszych kanałów dotarcia do potencjalnych klientów. Dzięki zaawansowanemu targetowaniu Meta możesz precyzyjnie docierać do swojej grupy docelowej, mierzyć konwersje i optymalizować kampanie."
    },
    {
      question: "Co obejmuje usługa prowadzenia social mediów?",
      answer: "Usługa obejmuje: opracowanie strategii, tworzenie treści (grafiki, video, copy), planowanie i publikację postów, moderację komentarzy i wiadomości, prowadzenie kampanii reklamowych oraz regularne raportowanie wyników."
    },
    {
      question: "Jak agencja prowadzi Facebooka dla firm?",
      answer: "Prowadzenie Facebooka obejmuje: tworzenie strategii treści, harmonogramu publikacji, kreacji graficznych, prowadzenie kampanii reklamowych, moderację komentarzy i wiadomości oraz analizę wyników."
    },
    {
      question: "Jakie raporty przygotowuje agencja social media?",
      answer: "Przygotowujemy szczegółowe raporty miesięczne zawierające: zasięgi, zaangażowanie, wzrost obserwujących, wyniki kampanii reklamowych (CPC, CTR, konwersje) oraz rekomendacje na kolejny okres."
    },
    {
      question: "Jak wygląda wycena usług agencji social media?",
      answer: "Wycena zależy od zakresu usług: liczby platform, częstotliwości publikacji, czy prowadzonych kampanii reklamowych. Dla małych i średnich firm proponujemy pakiety od 2000 zł/mies."
    },
    {
      question: "Kreatywny content czy sprzedażowy – co wybrać?",
      answer: "Najskuteczniejsze strategie łączą oba podejścia. Kreatywny content buduje świadomość i wizerunek marki. Content sprzedażowy z kampaniami konwersyjnymi generuje leady i sprzedaż."
    },
  ];

  // Featured case studies
  const featuredCaseStudies = [
    {
      title: "Fabryka Virali",
      category: "Strategia social media",
      result: "3.2M zasięgów/mies.",
      link: "/realizacje/fabryka-virali",
      image: fabrykaViraliImg,
      desc: "Kompleksowa strategia contentowa dla marki viralowej."
    },
    {
      title: "Enea Stadion",
      category: "Instagram & Facebook",
      result: "+520% zaangażowania",
      link: "/realizacje/enea-stadion",
      image: eneaStadionImg,
      desc: "Obsługa social mediów dla największego stadionu w Poznaniu."
    },
    {
      title: "Lauvjah",
      category: "Instagram & TikTok",
      result: "+450% obserwujących",
      link: "/realizacje/lauvjah",
      image: lauvjahImg,
      desc: "Budowanie marki osobistej w social mediach."
    },
  ];

  // More case studies
  const moreCaseStudies = [
    {
      title: "Sookar",
      category: "Facebook Ads",
      result: "ROAS 8.5x",
      link: "/realizacje/sookar",
      image: sookarImg
    },
    {
      title: "Gierki",
      category: "Strategia TikTok",
      result: "+2M wyświetleń",
      link: "/realizacje/gierki",
      image: gierkilmg
    },
    {
      title: "Stageplan",
      category: "LinkedIn B2B",
      result: "+340% leadów",
      link: "/realizacje/stageplan",
      image: stageplanImg
    },
  ];

  const cityLinks = [
    { name: "Poznań", href: "/social-media/poznan" },
    { name: "Warszawa", href: "/social-media-warszawa" },
    { name: "Kraków", href: "/social-media-krakow" },
    { name: "Wrocław", href: "/social-media-wroclaw" },
    { name: "Gdańsk", href: "/social-media-gdansk" },
    { name: "Łódź", href: "/social-media-lodz" },
    { name: "Katowice", href: "/social-media-katowice" },
    { name: "Szczecin", href: "/social-media-szczecin" },
    { name: "Bydgoszcz", href: "/social-media-bydgoszcz" },
    { name: "Lublin", href: "/social-media-lublin" },
  ];

  const includedFeatures = [
    { icon: PenTool, title: "Strategia social media", desc: "Spersonalizowany plan działań" },
    { icon: Camera, title: "Grafiki i kreacje", desc: "Profesjonalne projekty graficzne" },
    { icon: Video, title: "Produkcja video", desc: "Reels, Stories, TikToki" },
    { icon: Calendar, title: "Harmonogram publikacji", desc: "Zaplanowany content calendar" },
    { icon: MessageSquare, title: "Moderacja", desc: "Odpowiedzi na komentarze i DM" },
    { icon: Megaphone, title: "Kampanie reklamowe", desc: "Facebook, Instagram, LinkedIn Ads" },
    { icon: LineChart, title: "Raportowanie", desc: "Miesięczne raporty z analityką" },
    { icon: Users, title: "Budowanie społeczności", desc: "Organiczny wzrost obserwujących" },
  ];

  const whyUs = [
    { icon: Award, title: "Udokumentowane efekty", desc: "Miliony zasięgów, setki tysięcy obserwujących. Pokazujemy realne wyniki naszych kampanii." },
    { icon: Palette, title: "Kreatywny zespół", desc: "Graficy, copywriterzy, videomakerzy, stratedzy. Pełen zespół specjalistów do Twojej dyspozycji." },
    { icon: Clock, title: "Szybka realizacja", desc: "Reaktywność i terminowość. Wiemy, że w social mediach liczy się czas." },
    { icon: Shield, title: "Sprawdzone procesy", desc: "Wypracowane workflow, które gwarantują jakość i powtarzalność wyników." },
    { icon: Headphones, title: "Dedykowany opiekun", desc: "Jedna osoba kontaktowa, która zna Twój biznes i jest dostępna, gdy jej potrzebujesz." },
    { icon: TrendingUp, title: "Nastawienie na ROI", desc: "Nie tylko lajki, ale realne wyniki biznesowe: leady, sprzedaż, rozpoznawalność." },
  ];

  const processSteps = [
    { step: "01", title: "Brief i analiza", desc: "Poznajemy Twój biznes, konkurencję i grupę docelową." },
    { step: "02", title: "Strategia", desc: "Tworzymy plan działań, ton komunikacji, harmonogram." },
    { step: "03", title: "Produkcja contentu", desc: "Projektujemy grafiki, nagrywamy video, piszemy copy." },
    { step: "04", title: "Publikacja i moderacja", desc: "Zarządzamy profilami i budujemy społeczność." },
    { step: "05", title: "Kampanie reklamowe", desc: "Prowadzimy płatne kampanie z optymalizacją." },
    { step: "06", title: "Raportowanie i optymalizacja", desc: "Analizujemy wyniki i doskonalimy działania." },
  ];

  const platforms = [
    { name: "Facebook", desc: "Budowanie społeczności, kampanie reklamowe, grupy", icon: ThumbsUp },
    { name: "Instagram", desc: "Content wizualny, Reels, Stories, influencerzy", icon: Camera },
    { name: "LinkedIn", desc: "Marketing B2B, employer branding, networking", icon: Users },
    { name: "TikTok", desc: "Viralowy content, młodsza grupa docelowa", icon: Play },
  ];

  return (
    <>
      <SEOHead
        title="Obsługa i Prowadzenie Social Media Facebook Instagram - Cennik | Fotz Studio"
        description="Obsługa social media dla firm — prowadzenie Facebooka, Instagrama, LinkedIn. Strategia, content, kampanie Facebook Ads. Cennik prowadzenia social media od 1200 zł/mies. Bezpłatny audyt."
        canonical="https://fotz.pl/social-media/obsluga"
        keywords="obsługa social media, prowadzenie social media, agencja social media, prowadzenie facebooka, prowadzenie instagrama, cennik social media, social media marketing"
      />
      
      <ServiceSchema 
        name="Agencja Social Media - Marketing w Mediach Społecznościowych"
        description="Profesjonalne prowadzenie social mediów: strategia, tworzenie contentu, kampanie reklamowe Facebook Ads i Instagram Ads."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Social Media", url: "https://fotz.pl/social-media/obsluga" },
        ]}
      />
      
      <FAQSchema 
        items={faqItems.map(item => ({ question: item.question, answer: item.answer }))}
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
                <Sparkles className="w-4 h-4" />
                Agencja Social Media
              </motion.span>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
                <TextReveal>
                  Marketing w <span className="text-gradient">Social Mediach</span> z Agencją
                </TextReveal>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                Budujemy silne marki w mediach społecznościowych. <span className="text-foreground font-medium">Strategia, kreatywny content, kampanie reklamowe.</span> Docieramy do Twoich klientów tam, gdzie spędzają czas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                  <Link to="/kontakt">
                    <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Bezpłatna konsultacja
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

        {/* Section: Platformy */}
        <section className="py-12 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-12">
              <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider w-full sm:w-auto text-center mb-2 sm:mb-0">Prowadzimy:</span>
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <platform.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  <span className="font-medium text-sm sm:text-base">{platform.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Showcase Section */}
        <YouTubeShowcase />

        {/* Instagram Showcase Section */}
        <InstagramShowcase />

        {/* Intro Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <FadeInView>
                <div>
                  <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                    <Heart className="w-4 h-4" />
                    O nas
                  </span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Co to jest <span className="text-gradient">agencja social media?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    <strong className="text-foreground">Agencja social media to zespół specjalistów, którzy kompleksowo zajmują się marketingiem w social mediach dla firm.</strong> 
                    Oferujemy usługi od opracowania strategii, przez prowadzenie profili, tworzenie angażujących treści, 
                    aż po reklamę i analizę wyników.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Robimy social media z pasją, dostosowując działania do specyfiki Twojej marki i branży. 
                    Profesjonalizm i kreatywność to nasze atuty.
                  </p>
                </div>
              </FadeInView>
              
              <FadeInView delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.map((platform, index) => (
                    <div key={index} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all group">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <platform.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-semibold mb-2">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeInView>
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
                  Dlaczego Twoja marka <span className="text-gradient">nie przebija się</span> w social mediach?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Polacy spędzają średnio 2 godziny dziennie w social mediach. Jeśli Cię tam nie ma, tracisz kontakt z klientami.
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
                  Jak prowadzimy <span className="text-gradient">social media dla firm?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Skuteczny social media marketing to strategia, kreatywność i analiza danych. <strong className="text-foreground">Działamy kompleksowo.</strong>
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
                  Kampanie, które <span className="text-gradient">zbudowały marki</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Zobacz, jak pomagamy firmom budować silną obecność w social mediach.
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
              <h3 className="text-xl font-semibold text-center mb-8">Więcej realizacji</h3>
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

        {/* Section: Co zawiera */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium uppercase tracking-wider mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  W pakiecie
                </span>
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Co obejmuje usługa <span className="text-gradient">"robimy social media"?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowa obsługa social mediów to wiele elementów. Oto, co dostajesz w ramach współpracy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all h-full text-center group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-7 h-7 text-primary" />
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
                  Dlaczego warto <span className="text-gradient">współpracować z agencją?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Zamiast zatrudniać zespół in-house, zyskujesz dostęp do pełnego zestawu kompetencji.
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
                  Jak wygląda <span className="text-gradient">współpraca?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od briefu do mierzalnych wyników.
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
                  Ile kosztuje <span className="text-gradient">prowadzenie social mediów?</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu usług i potrzeb Twojej firmy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
              {pricing.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border transition-all h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30 md:scale-105' : 'bg-background border-border/50 hover:border-primary/20'}`}>
                    {index === 1 && (
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-medium text-primary uppercase mb-3 sm:mb-4">
                        <Star className="w-3 h-3" /> Najpopularniejszy
                      </span>
                    )}
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">{item.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{item.desc}</p>
                    <div className="text-2xl sm:text-3xl font-bold text-gradient mb-4 sm:mb-6">{item.price}</div>
                    <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                          <span className="text-xs sm:text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant={index === 1 ? "default" : "outline"} className="w-full text-sm sm:text-base">
                      <Link to="/kontakt">Zapytaj o ofertę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <p className="text-center text-xs sm:text-sm text-muted-foreground mt-6 sm:mt-8 max-w-2xl mx-auto px-4">
                * Ceny orientacyjne. Ostateczna wycena zależy od zakresu usług. Budżet reklamowy doliczany osobno.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Section: FAQ */}
        <section className="py-16 sm:py-20 md:py-24 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-10 sm:mb-12 md:mb-16">
                <span className="inline-flex items-center gap-2 text-primary text-xs sm:text-sm font-medium uppercase tracking-wider mb-3 sm:mb-4">
                  ❓ FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
                  Często zadawane <span className="text-gradient">pytania</span>
                </h2>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-background rounded-lg sm:rounded-xl border border-border/50 px-4 sm:px-6 data-[state=open]:border-primary/30"
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
                  Obsługujemy firmy <span className="text-gradient">w całej Polsce</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Jako agencja social media działamy zdalnie, ale znamy specyfikę lokalnych rynków.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {cityLinks.map((city, index) => (
                  city.href === "/social-media/poznan" ? (
                    <Link
                      key={index}
                      to={city.href}
                      className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                      {city.name}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className="px-6 py-3 rounded-full bg-card border border-border/50 text-muted-foreground font-medium cursor-not-allowed"
                      title="Wkrótce"
                    >
                      {city.name}
                    </span>
                  )
                ))}
              </div>
            </FadeInView>
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
                    Wszystko o <span className="text-gradient">social media</span>
                  </h2>
                </div>
              </FadeInView>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-16">
                <FadeInView delay={0.1}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Target className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Strategia treści</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Skuteczne social media to nie random posting. To <strong className="text-foreground">spójna strategia</strong> – 
                      kalendarz publikacji, content pillars i dopasowanie do algorytmów każdej platformy.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Analiza grupy docelowej</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Content calendar na miesiąc</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Dopasowanie formatów do platform</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.2}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Reklamy Meta Ads</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Facebook i Instagram Ads to potężne narzędzia targetowania. 
                      <strong className="text-foreground"> Lookalike audiences</strong>, retargeting, testy A/B – maksymalizujemy ROAS.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Konfiguracja Pixel & Conversions API</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Kampanie na różne cele</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Optymalizacja budżetu</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.3}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Camera className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Content foto/video</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Reelsy, stories, karuzele – tworzymy <strong className="text-foreground">angażujący content</strong> 
                      dopasowany do trendów. Własne studio, profesjonalny sprzęt, szybka realizacja.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Produkcja Reels i TikToków</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Sesje produktowe i wizerunkowe</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Grafiki i animacje</li>
                    </ul>
                  </div>
                </FadeInView>

                <FadeInView delay={0.4}>
                  <div className="group p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-orange-500/5 via-card to-card border border-border/50 hover:border-primary/30 transition-all duration-500">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-10 h-10 sm:w-12 md:w-14 sm:h-12 md:h-14 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BarChart className="w-5 h-5 sm:w-6 md:w-7 sm:h-6 md:h-7 text-primary" />
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold">Analityka i raportowanie</h3>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                      Dane to podstawa decyzji. Śledzimy <strong className="text-foreground">KPI</strong>, 
                      analizujemy engagement rate, zasięgi i konwersje. Comiesięczne raporty z wnioskami.
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Miesięczne raporty wyników</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Analiza konkurencji</li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" /> Rekomendacje optymalizacji</li>
                    </ul>
                  </div>
                </FadeInView>
              </div>

              <FadeInView delay={0.5}>
                <div className="relative p-5 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl md:rounded-3xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-8 text-4xl sm:text-5xl md:text-6xl text-primary/30 font-serif">"</div>
                  <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-center max-w-3xl mx-auto pt-4 sm:pt-6 pb-2 sm:pb-4 px-4">
                    <span className="text-foreground">Social media to nie sprint, to maraton. Konsekwencja i strategia zawsze wygrywają z chaotycznym postingiem.</span>
                  </blockquote>
                  <p className="text-center text-sm sm:text-base text-muted-foreground">
                    — Zespół Fotz Studio
                  </p>
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
                  Gotowy na <span className="text-gradient">silną markę</span> w social mediach?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
                  Porozmawiajmy o Twojej strategii. Bezpłatna konsultacja, konkretna wycena, jasny plan działania.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                  <Button asChild size="lg" className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto">
                    <Link to="/kontakt">
                      <Rocket className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Bezpłatna konsultacja
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

        {/* SEO Article Section */}
        <section className="py-20 border-t border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Prowadzenie social media — co obejmuje profesjonalna obsługa social media?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Prowadzenie social media twojej firmy to znacznie więcej niż publikowanie postów. Profesjonalna obsługa social media obejmuje: strategię komunikacji, tworzenie contentu (grafiki, wideo, copywriting), zarządzanie społecznością, kampanie reklamowe (Facebook Ads, Instagram Ads) i raportowanie wyników. Social media manager prowadzący Twoje kanały dba o harmonogram publikacji, odpowiadanie na komentarze i monitoring konkurencji. Obsługa social media zapewnia spójność marki w mediach społecznościowych i regularne budowanie zasięgów organicznych.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Jak wygląda prowadzenie social media — Facebook, Instagram, LinkedIn
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prowadzenie facebooka obejmuje: zarządzanie profilem firmowym, tworzenie i publikowanie postów, obsługę wydarzeń, moderację komentarzy i kampanie Facebook Ads. Prowadzenie instagrama skupia się na estetyce siatki, stories, reels i hashtagach. LinkedIn to kluczowy kanał B2B — budujemy profil marki z myślą o pozyskiwaniu partnerów i klientów biznesowych. Facebooka czy instagrama — które medium wybrać? Zależy od branży i grupy docelowej — razem ustalamy priorytety podczas briefu. Marki w social media, które są aktywne na kilku platformach społecznościowych, budują silniejszą pozycję w świadomości potencjalnych klientów.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Agencja social media — prowadzenie mediów społecznościowych dla firm
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Audyt social media i strategia social media — punkt startowy współpracy z klientem
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Audyt social media to analiza obecnych profili firmy: zasięgów, zaangażowania, contentu, targetowania reklam i konkurencji. Współpraca z klientem rozpoczyna się od audytu — razem ustalamy cele biznesowe (sprzedaż produktów lub usług, budowanie marki, leady) i strategię social media na kolejne miesiące. Strategia social media określa: platformy, częstotliwość publikacji, typy contentu, budżet reklamowy i KPI. Profesjonalne prowadzenie social media to kompleksowe zarządzanie obecnością w social media twojej firmy.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Content i wideo w social media — tworzenie treści i budowanie zasięgów
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Content w social media to paliwo dla algorytmów. Wideo (reels, shorts, stories) to format z najwyższym organicznym zasięgiem. Content marketing w social media łączy posty edukacyjne, rozrywkowe i sprzedażowe. Social media manager i kreatywny team tworzą treści, które angażują odbiorców i budują społeczność wokół marki. Tworzenie treści na profil na facebooku i instagramie wymaga znajomości trendów — stale śledzimy zmiany algorytmów i testujemy nowe formaty. Zarządzanie profilem marki to budowania relacji z odbiorcami i tworzenie obecności w social media rozpoznawalnej w branży.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Social media marketing — kampanie i reklamy w social media
                </h2>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Facebook Ads i reklamy w social media — kampania dla Twojej firmy
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reklamy w social media pozwalają precyzyjnie targetować odbiorców — wiek, lokalizacja, zainteresowania, zachowania. Kampania Facebook Ads obejmuje: konfigurację piksela Meta, grupy odbiorców, kreacje reklamowe i optymalizację pod cel (leady, sprzedaż, zasięg). Marketing w mediach społecznościowych w połączeniu z działaniami organicznymi daje najlepsze efekty. Zakresie obsługi social media zawsze rekomendujemy synergię kampanii płatnych i organicznych.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Social media cennik i cennik prowadzenia social media — przejrzyste ceny
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cennik prowadzenia social media w Fotz Studio: pakiet podstawowy (1–2 platformy, 12 postów) od 1 200 zł/mies., pakiet growth (3 platformy, 20 postów, Facebook Ads) od 2 500 zł/mies., pakiet pro (pełna obsługa, wideo, kampanie) od 4 500 zł/mies. Prowadzenie i obsługa social media w każdym pakiecie obejmuje: strategię, content plan, moderację i raportowanie. Ramach obsługi social media możemy też współpracować projektowo — jednorazowy audyt, sesja zdjęciowa lub produkcja wideo.
                </p>
                <h3 className="text-xl font-heading font-semibold mb-3">
                  Prowadzenie social media twojej firmy — zacznij współpracę
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Gotowy współpracować i prowadzić social media z Fotz Studio? Specjalistów od social media z naszego zespołu cechuje kreatywne podejście i orientacja na wyniki. Razem ustalić możemy zakres obsługi social i dostosować ofertę do budżetu. Kompleksowe prowadzenie profili w social media dla firm, które chcą wyróżnić się w mediach społecznościowych — skontaktuj się i zamów bezpłatny audyt.
                </p>
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/performance-marketing" className="text-primary hover:underline font-medium text-sm">→ Performance marketing</Link>
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/uslugi/branding" className="text-primary hover:underline font-medium text-sm">→ Branding</Link>
            </div>
              </FadeInView>
            </div>
          </div>
        </section>

        <RelatedServices
          currentService="social-media"
          subtitle="Usługi wspierające obecność Twojej marki w social mediach"
        />

        <ContactSection />
      </Layout>
    </>
  );
};

export default SocialMedia;
