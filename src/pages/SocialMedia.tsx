import { Helmet } from "react-helmet";
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
  Palette
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

import fabrykaViraliImg from "@/assets/portfolio/fabryka-virali.png";
import lauvjahImg from "@/assets/portfolio/lauvjah.png";
import sookarImg from "@/assets/portfolio/sookar.jpg";

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
      desc: "Inne firmy z branży mają silniejszą obecność w social mediach i przyciągają Twoich potencjalnych klientów." 
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
    { value: "+340%", label: "Średni wzrost zaangażowania", desc: "w ciągu 6 miesięcy współpracy" },
    { value: "2.5M+", label: "Wygenerowanych zasięgów", desc: "dla naszych klientów miesięcznie" },
    { value: "+180%", label: "Wzrost liczby obserwujących", desc: "średnio w pierwszym roku" },
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
      answer: "Tak – reklama w social media to jeden z najefektywniejszych kanałów dotarcia do potencjalnych klientów. Dzięki zaawansowanemu targetowaniu Meta możesz precyzyjnie docierać do swojej grupy docelowej, mierzyć konwersje i optymalizować kampanie, co przekłada się na lepszy zwrot z inwestycji."
    },
    {
      question: "Co obejmuje usługa prowadzenia social mediów?",
      answer: "Usługa obejmuje: opracowanie strategii, tworzenie treści (grafiki, video, copy), planowanie i publikację postów, moderację komentarzy i wiadomości, prowadzenie kampanii reklamowych oraz regularne raportowanie wyników. Zakres dostosowujemy do potrzeb i budżetu klienta."
    },
    {
      question: "Jak agencja prowadzi Facebooka dla firm?",
      answer: "Prowadzenie Facebooka obejmuje: tworzenie strategii treści, harmonogramu publikacji, kreacji graficznych, prowadzenie kampanii reklamowych, moderację komentarzy i wiadomości oraz analizę wyników. Dbamy o spójny wizerunek i budujemy zaangażowaną społeczność wokół Twojej marki."
    },
    {
      question: "Jakie raporty przygotowuje agencja social media?",
      answer: "Przygotowujemy szczegółowe raporty miesięczne zawierające: zasięgi, zaangażowanie (polubienia, komentarze, udostępnienia), wzrost obserwujących, wyniki kampanii reklamowych (CPC, CTR, konwersje) oraz rekomendacje na kolejny okres. Raporty opieramy na danych, nie domysłach."
    },
    {
      question: "Jak wygląda wycena usług agencji social media?",
      answer: "Wycena zależy od zakresu usług: liczby platform, częstotliwości publikacji, czy prowadzonych kampanii reklamowych. Dla małych i średnich firm proponujemy pakiety od 2000 zł/mies. Ostateczna cena uwzględnia cele marketingowe i specyfikę branży."
    },
    {
      question: "Kreatywny content czy sprzedażowy – co wybrać?",
      answer: "Najskuteczniejsze strategie łączą oba podejścia. Kreatywny content buduje świadomość i wizerunek marki, angażuje społeczność. Content sprzedażowy z kampaniami konwersyjnymi generuje leady i sprzedaż. Proporcje dobieramy do Twoich celów biznesowych."
    },
  ];

  const caseStudies = [
    {
      title: "Fabryka Virali",
      category: "Strategia social media",
      result: "3.2M zasięgów/mies.",
      link: "/realizacje/fabryka-virali",
      image: fabrykaViraliImg
    },
    {
      title: "Lauvjah",
      category: "Instagram & TikTok",
      result: "+450% obserwujących",
      link: "/realizacje/lauvjah",
      image: lauvjahImg
    },
    {
      title: "Sookar",
      category: "Facebook Ads",
      result: "ROAS 8.5x",
      link: "/realizacje/sookar",
      image: sookarImg
    },
  ];

  const cityLinks = [
    { name: "Poznań", href: "/social-media-poznan" },
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
    { name: "Facebook", desc: "Budowanie społeczności, kampanie reklamowe, grupy" },
    { name: "Instagram", desc: "Content wizualny, Reels, Stories, influencerzy" },
    { name: "LinkedIn", desc: "Marketing B2B, employer branding, networking" },
    { name: "TikTok", desc: "Viralowy content, młodsza grupa docelowa" },
    { name: "YouTube", desc: "Długi format video, tutoriale, vlogi" },
    { name: "Twitter/X", desc: "Real-time marketing, obsługa klienta, news" },
  ];

  return (
    <>
      <Helmet>
        <title>Agencja Social Media | Marketing w Mediach Społecznościowych | Fotz</title>
        <meta 
          name="description" 
          content="Agencja social media - prowadzenie Facebooka, Instagrama, LinkedIna. Strategia, content, kampanie reklamowe. Budujemy silne marki w social mediach." 
        />
        <link rel="canonical" href="https://fotz.pl/social-media" />
      </Helmet>
      
      <ServiceSchema 
        name="Agencja Social Media - Marketing w Mediach Społecznościowych"
        description="Profesjonalne prowadzenie social mediów: strategia, tworzenie contentu, kampanie reklamowe Facebook Ads i Instagram Ads. Budujemy zaangażowane społeczności wokół marek."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Social Media", url: "https://fotz.pl/social-media" },
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
                Agencja Social Media
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <TextReveal>
                  Marketing w <span className="text-gradient">Social Mediach</span> z Agencją
                </TextReveal>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Budujemy silne marki w mediach społecznościowych. Strategia, kreatywny content, 
                kampanie reklamowe. Docieramy do Twoich klientów tam, gdzie spędzają czas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="group">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja
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

        {/* Intro Section */}
        <section className="py-16 border-b border-border/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  W dzisiejszym cyfrowym świecie, <strong className="text-foreground">obecność w social mediach jest kluczowa dla sukcesu każdej firmy</strong>. 
                  Zastanawiasz się, jak skutecznie wykorzystać potencjał Facebooka, Instagrama, LinkedIna czy TikToka? 
                  Agencja social media to partner, który pomoże Ci zbudować silną markę w social mediach i dotrzeć do serc Twojej grupy docelowej.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Section: Co to jest agencja social media */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <FadeInView>
                <div>
                  <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">O nas</span>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                    Co to jest agencja social media?
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    <strong className="text-foreground">Agencja social media to zespół specjalistów, którzy kompleksowo zajmują się marketingiem w social mediach dla firm.</strong> 
                    Oferujemy usługi od opracowania strategii, przez prowadzenie profili w social mediach, tworzenie angażujących treści, 
                    aż po reklamę w social media i analizę wyników.
                  </p>
                  <p className="text-muted-foreground">
                    Robimy social media z pasją, dostosowując działania do specyfiki Twojej marki i branży. 
                    Profesjonalizm i kreatywność to nasze atuty, dzięki którym Twoja komunikacja w mediach społecznościowych będzie efektywna.
                  </p>
                </div>
              </FadeInView>
              
              <FadeInView delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {platforms.slice(0, 4).map((platform, index) => (
                    <div key={index} className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
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
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Problem</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Twoja marka nie przebija się w social mediach?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Polacy spędzają średnio 2 godziny dziennie w social mediach. Jeśli Cię tam nie ma, tracisz kontakt z klientami.
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

        {/* Section: Co robimy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Rozwiązanie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak prowadzimy social media dla firm?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Skuteczny social media marketing to strategia, kreatywność i analiza danych. Działamy kompleksowo.
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

        {/* Section: Dlaczego warto */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Korzyści</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego warto współpracować z agencją social media?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zamiast zatrudniać zespół in-house, zyskujesz dostęp do pełnego zestawu kompetencji.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {whyUs.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all h-full">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Efekty */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Efekty</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wyniki naszych kampanii
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Efekty mierzymy w zasięgach, zaangażowaniu i – najważniejsze – w konwersjach i sprzedaży.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {results.map((result, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="text-center p-8 rounded-xl bg-card border border-border/50">
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

        {/* Section: Case Studies */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Realizacje</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Przykłady skutecznych kampanii
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Zobacz, jak pomagamy firmom budować silną obecność w social mediach.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <Link 
                    to={study.link}
                    className="group block rounded-xl overflow-hidden bg-background border border-border/50 hover:border-primary/30 transition-all"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={study.image} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-primary text-sm font-medium">{study.category}</span>
                      <h3 className="text-xl font-semibold mt-1 mb-2 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-muted-foreground">{study.result}</p>
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <div className="text-center mt-12">
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">
                    Zobacz wszystkie realizacje
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section: Co zawiera */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">W pakiecie</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Co obejmuje usługa „robimy social media"?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Kompleksowa obsługa social mediów to wiele elementów. Oto, co dostajesz w ramach współpracy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {includedFeatures.map((feature, index) => (
                <FadeInView key={index} delay={index * 0.05}>
                  <div className="p-6 rounded-xl bg-card border border-border/50 text-center hover:border-primary/30 transition-all h-full">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Proces */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Proces</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Jak wygląda współpraca z agencją social media?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Przejrzysty proces od briefu do mierzalnych wyników.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="relative p-8 rounded-xl bg-background border border-border/50">
                    <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold mb-2 mt-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Platformy */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Platformy</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Social media marketing na różnych platformach
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Każda platforma ma swoją specyfikę. Dostosowujemy strategię do charakteru kanału.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {platforms.map((platform, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all">
                    <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                    <p className="text-muted-foreground">{platform.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Cennik */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">Cennik</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Wycena usług agencji social media
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparentne ceny dopasowane do zakresu usług i potrzeb Twojej firmy.
                </p>
              </div>
            </FadeInView>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricing.map((plan, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className={`p-8 rounded-xl border h-full flex flex-col ${index === 1 ? 'bg-primary/5 border-primary/30' : 'bg-background border-border/50'}`}>
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.desc}</p>
                    <div className="text-2xl font-bold text-primary mb-6">{plan.price}</div>
                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full mt-6" variant={index === 1 ? "default" : "outline"}>
                      <Link to="/kontakt">Zapytaj o ofertę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
                * Ceny orientacyjne. Ostateczna wycena zależy od zakresu usług, branży i specyfiki projektu. 
                Budżet reklamowy doliczany osobno.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Section: Miasta */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">Lokalizacje</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Obsługujemy firmy w całej Polsce
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Jako agencja social media działamy zdalnie, ale znamy specyfikę lokalnych rynków. 
                  Sprawdź naszą ofertę w Twoim mieście.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {cityLinks.map((city, index) => (
                  city.href === "/social-media-poznan" ? (
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

        {/* Section: FAQ */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-16">
                <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Najczęściej zadawane pytania
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania, które najczęściej słyszymy od klientów.
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.2}>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:border-primary/30"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-6">
                        <span className="font-semibold pr-4">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Section: SEO Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-invert">
              <FadeInView>
                <h2>Budowanie marki w social mediach</h2>
                
                <h3>Jak obserwować i analizować trendy?</h3>
                <p>
                  <strong>Agencja social media wie, jak ważne jest monitorowanie trendów</strong>, aby Twoja marka była zawsze na czasie. 
                  Śledzimy, co dzieje się w social mediach, analizujemy dane i dostosowujemy strategie marketingowe do zmieniających się 
                  potrzeb Twojej grupy docelowej. Wykorzystujemy narzędzia do monitoringu mediów społecznościowych, aby być na bieżąco 
                  z najnowszymi trendami i rekomendacjami. Dzięki temu Twoja komunikacja w kanałach social będzie zawsze aktualna i angażująca.
                </p>

                <h3>Tworzenie spójnej strategii dla marki</h3>
                <p>
                  <strong>Tworzenie spójnej strategii to podstawa efektywnego marketingu w social mediach.</strong> 
                  Agencja social media opracowuje kompleksową strategię, która uwzględnia specyfikę Twojej marki, branży i grupy docelowej. 
                  Definiujemy cele biznesowe, dobieramy odpowiednie kanały social media i tworzymy harmonogram publikacji. 
                  Dbamy o to, aby Twoja komunikacja w social mediach była spójna z wizerunkiem marki i przekazywała jasne i klarowne przesłanie.
                </p>

                <h3>Rola zespołu specjalistów w obsłudze social</h3>
                <p>
                  <strong>Profesjonalna obsługa social to zasługa zespołu specjalistów.</strong> 
                  Agencja social media zatrudnia doświadczonych specjalistów od marketingu, copywritingu, grafiki i reklamy w social mediach. 
                  To zespół ludzi, którzy z pasją podchodzą do każdego projektu i dbają o to, aby Twoje profile w social mediach były 
                  prowadzone na najwyższym poziomie. Dzięki temu możesz skupić się na prowadzeniu swojego biznesu, mając pewność, 
                  że Twoja obecność w social mediach jest w dobrych rękach.
                </p>

                <h2>Przyszłość marketingu w social mediach</h2>
                
                <h3>Jakie są przyszłe trendy w marketingu social media?</h3>
                <p>
                  <strong>Przyszłość marketingu w social mediach to przede wszystkim personalizacja i automatyzacja.</strong> 
                  Agencja social media śledzi najnowsze trendy i wdraża innowacyjne rozwiązania, aby Twoja marka była zawsze krok przed konkurencją. 
                  Wykorzystujemy sztuczną inteligencję i machine learning do personalizacji przekazu marketingowego i automatyzacji procesów. 
                  Warto obserwować platformy takie jak TikTok, które zyskują na znaczeniu, oraz rozwijające się formaty jak Reels czy krótkie video.
                </p>

                <h3>Dlaczego warto inwestować w agencję social media?</h3>
                <p>
                  <strong>Inwestycja w agencję social media to strategiczny krok, który przynosi wymierne korzyści.</strong> 
                  Agencja social media dysponuje wiedzą, doświadczeniem i narzędziami, które pozwalają na efektywne prowadzenie social mediów. 
                  Zamiast tracić czas i pieniądze na samodzielne próby, możesz skorzystać z usług agencji, która zapewni obsługę social 
                  na najwyższym poziomie. Agencja pomoże Ci zaoszczędzić czas, zwiększyć rozpoznawalność marki i pozyskać nowych klientów 
                  dzięki reklamie w mediach społecznościowych.
                </p>

                <h3>Wnioski i rekomendacje dla firm</h3>
                <p>
                  <strong>Obecność w social mediach to konieczność dla każdej firmy, która chce odnieść sukces w dzisiejszym cyfrowym świecie.</strong> 
                  Współpraca z agencją social media to gwarancja profesjonalizmu, kreatywności i skuteczności. 
                  Pamiętaj o regularnym monitoringu wyników i dostosowywaniu strategii do zmieniających się potrzeb Twojej grupy docelowej. 
                  Agencja social media pomoże Ci zbudować silną markę w social mediach i dotrzeć do serc Twoich potencjalnych klientów. 
                  Prowadzenie Facebooka czy Instagrama to nasza specjalność.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-card/30 to-background">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                  Gotowy na profesjonalne social media?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Porozmawiajmy o Twojej marce. Bezpłatna konsultacja, podczas której przeanalizujemy 
                  Twoje kanały i zaproponujemy konkretne działania.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="group">
                    <Link to="/kontakt">
                      Bezpłatna konsultacja
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
              </div>
            </FadeInView>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default SocialMedia;
