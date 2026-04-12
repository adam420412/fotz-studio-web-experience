import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, CheckCircle2, 
  ArrowRight, Video, Sparkles, Music2, Heart,
  Smartphone, Play, Megaphone, RefreshCw, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const TikTokAds = () => {
  const benefits = [
    { icon: Users, title: "Młoda grupa docelowa", description: "Docieraj do Gen Z i Millenialsów aktywnych na TikToku" },
    { icon: TrendingUp, title: "Viralowy potencjał", description: "Organiczny zasięg i możliwość viral contentu" },
    { icon: Sparkles, title: "Autentyczność", description: "Naturalne reklamy dopasowane do stylu platformy" },
    { icon: DollarSign, title: "Niższy CPM", description: "Konkurencyjne stawki w porównaniu do Meta i Google" },
  ];

  const adFormats = [
    { icon: Video, title: "In-Feed Ads", description: "Reklamy wideo w feedzie użytkownika, 9-60 sekund" },
    { icon: Sparkles, title: "Spark Ads", description: "Promowanie organicznych treści jako reklamy" },
    { icon: Megaphone, title: "TopView", description: "Pełnoekranowa reklama przy otwarciu aplikacji" },
    { icon: Music2, title: "Branded Hashtag Challenge", description: "Viralowe wyzwania z Twoim hashtagiem" },
    { icon: Play, title: "Branded Effects", description: "Interaktywne filtry i efekty AR" },
    { icon: Heart, title: "Influencer Marketing", description: "Współpraca z TikTokerami" },
  ];

  const processSteps = [
    { step: "01", title: "Strategia i kreacja", description: "Tworzymy koncepcję dopasowaną do TikToka" },
    { step: "02", title: "Produkcja wideo", description: "Nagrywamy lub adaptujemy materiały wideo" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy targetowanie i pixel konwersji" },
    { step: "04", title: "Optymalizacja i skalowanie", description: "Testujemy kreacje i skalujemy zwycięzców" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "2 000",
      period: "/mies.",
      description: "Testowanie TikToka",
      features: [
        "Budżet reklamowy do 3 000 zł",
        "1-2 kreacje wideo miesięcznie",
        "In-Feed Ads",
        "Podstawowe targetowanie",
        "Raport miesięczny",
        "Pixel konwersji",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "3 500",
      period: "/mies.",
      description: "Pełna obsługa TikTok",
      features: [
        "Budżet reklamowy do 10 000 zł",
        "4-6 kreacji wideo miesięcznie",
        "In-Feed + Spark Ads",
        "Zaawansowane targetowanie",
        "Testy A/B kreacji",
        "Remarketing",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "6 000",
      period: "/mies.",
      description: "TikTok + Influencerzy",
      features: [
        "Budżet reklamowy bez limitu",
        "Nielimitowane kreacje",
        "Wszystkie formaty reklamowe",
        "Branded Hashtag Challenge",
        "Współpraca z influencerami",
        "Produkcja wideo w studio",
        "Dedykowany opiekun",
        "Strategia wielokanałowa",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "1.5B+", label: "Aktywnych użytkowników TikToka" },
    { value: "52 min", label: "Średni czas spędzony dziennie" },
    { value: "67%", label: "Użytkowników to 18-34 lata" },
    { value: "2x", label: "Wyższe zaangażowanie niż inne platformy" },
  ];

  const faqItems = [
    {
      question: "Czy TikTok Ads sprawdzi się dla mojej firmy?",
      answer: "TikTok najlepiej sprawdza się dla marek B2C, e-commerce, fashion, beauty, FMCG, rozrywki i edukacji. Jeśli Twoja grupa docelowa to osoby 16-40 lat i jesteś gotowy na kreatywne, autentyczne treści - TikTok będzie świetnym wyborem. Dla B2B i starszych grup demograficznych lepiej sprawdzi się LinkedIn Ads lub Google Ads.",
      links: [
        { text: "LinkedIn Ads", href: "/performance-marketing/linkedin-ads" },
        { text: "Google Ads", href: "/performance-marketing/google-ads" }
      ]
    },
    {
      question: "Jaki budżet potrzebuję na TikTok Ads?",
      answer: "Minimalny budżet dzienny to około 50 zł, ale rekomendujemy start od 100-200 zł dziennie (3000-6000 zł miesięcznie) dla zebrania wystarczających danych. TikTok często ma niższy CPM niż Facebook/Instagram, więc za ten sam budżet możesz dotrzeć do większej liczby osób.",
      links: [
        { text: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
        { text: "Instagram Ads", href: "/performance-marketing/instagram-ads" }
      ]
    },
    {
      question: "Jak powinny wyglądać reklamy na TikToku?",
      answer: "Reklamy na TikToku muszą wyglądać natywnie - jak zwykłe treści użytkowników. Unikamy przesadnie wypolerowanych spotów reklamowych. Najlepiej działają: pionowe wideo 9:16, pierwsze 3 sekundy przyciągające uwagę, autentyczny ton, trending sounds, i jasne CTA. Pomagamy tworzyć kreacje dopasowane do platformy.",
      links: [
        { text: "Spoty reklamowe", href: "/uslugi/produkcja-video" }
      ]
    },
    {
      question: "Czy potrzebuję własnego konta TikTok?",
      answer: "Tak, do prowadzenia reklam potrzebne jest konto biznesowe TikTok i konto TikTok Ads Manager. Pomagamy w założeniu i konfiguracji obu. Możemy też wykorzystać Spark Ads do promowania treści organicznych z Twojego profilu."
    },
    {
      question: "Jak mierzyć skuteczność reklam na TikToku?",
      answer: "Instalujemy TikTok Pixel na Twojej stronie, który śledzi konwersje. Monitorujemy: wyświetlenia, zasięg, CTR, koszt za kliknięcie, koszt za konwersję, ROAS. TikTok oferuje też View-Through Attribution - śledzenie konwersji nawet bez kliknięcia w reklamę."
    },
    {
      question: "Jak długo trwa produkcja reklamy TikTok?",
      answer: "Prosta kreacja In-Feed może być gotowa w 2-3 dni. Bardziej złożone produkcje z nagraniem w studio zajmują 1-2 tygodnie. Dla Branded Hashtag Challenge potrzeba 3-4 tygodnie przygotowań. Rekomendujemy tworzenie wielu wariantów do testów A/B.",
      links: [
        { text: "Produkcja wideo", href: "/uslugi/produkcja-video" }
      ]
    },
    {
      question: "Czy warto łączyć TikTok Ads z innymi platformami?",
      answer: "Zdecydowanie tak! TikTok świetnie buduje świadomość i generuje ruch. W połączeniu z remarketingiem na Facebook/Instagram i Google Ads tworzy kompletną ścieżkę konwersji. Oferujemy kompleksową obsługę kampanii reklamowych na wszystkich platformach.",
      links: [
        { text: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
        { text: "Google Ads", href: "/performance-marketing/google-ads" },
        { text: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa" }
      ]
    },
    {
      question: "Co to są Spark Ads i dlaczego są skuteczne?",
      answer: "Spark Ads to format pozwalający promować organiczne treści (Twoje lub influencerów) jako reklamy płatne. Zachowują wszystkie interakcje (lajki, komentarze) i wyglądają bardziej autentycznie. Często mają wyższy CTR i niższy koszt niż tradycyjne reklamy.",
      links: [
        { text: "Social Media", href: "/social-media/poznan" }
      ]
    },
  ];

  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja TikTok Ads — Reklamy na TikToku dla Firm | Fotz Studio"
        description="Agencja TikTok Ads ✓ Tworzenie i prowadzenie kampanii na TikToku. In-Feed Ads, Spark Ads, TopView, TikTok for Business. Skuteczne reklamy TikTok. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads"
        keywords="agencja tiktok ads, tiktok ads, reklamy tiktok, kampanie tiktok, tiktok ads manager, tiktok for business, tiktok pixel, in-feed ads"
      />
      <ServiceSchema
        name="TikTok Ads - Kampanie reklamowe"
        description="Profesjonalne kampanie TikTok Ads. Docieraj do młodej grupy docelowej dzięki kreatywnym reklamom wideo."
        provider="Fotz Studio"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Kampanie reklamowe", url: "https://fotz.pl/kampanie-reklamowe" },
          { name: "TikTok Ads", url: "https://fotz.pl/performance-marketing/tiktok-ads" },
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/15 via-background to-cyan-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-6">
              <Music2 className="inline-block w-4 h-4 mr-2" />
              TikTok Ads
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Agencja TikTok Ads —
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">
                reklamy, które zatrzymują scroll
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Prowadzimy kampanie TikTok Ads dla firm przez TikTok for Business i TikTok Ads Manager.
              Tworzymy viralowe kreacje wideo, In-Feed Ads i Spark Ads, które docierają do Twojej grupy docelowej i generują realne konwersje.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/uslugi/produkcja-video">Zobacz nasze wideo</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 mb-2">{stat.value}</div>
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
              Dlaczego TikTok Ads?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platforma z najwyższym zaangażowaniem użytkowników
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
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-pink-500/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-pink-500/10 text-pink-500 mb-4">
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
              Formaty reklamowe TikTok
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wykorzystujemy pełen potencjał platformy
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
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-pink-500/30 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-cyan-500/20 text-pink-500 mb-4 group-hover:scale-110 transition-transform">
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
              Od strategii do viralowego contentu
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
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500/30 to-cyan-500/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500/30 to-transparent" />
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
              Cennik TikTok Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obsługa kampanii + produkcja kreacji wideo
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
                    ? 'bg-gradient-to-br from-pink-500/10 to-cyan-500/10 border-pink-500' 
                    : 'bg-card border-border/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-500 to-cyan-500 text-white text-sm font-medium rounded-full">
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
                      <CheckCircle2 className="w-5 h-5 text-pink-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego, który trafia bezpośrednio do TikToka
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Najczęściej zadawane pytania
            </h2>
            <p className="text-muted-foreground">
              Odpowiedzi na pytania o reklamy na TikToku
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 bg-card/50"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-foreground font-medium">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    <p className="mb-3">{item.answer}</p>
                    {item.links && item.links.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-border/30">
                        <span className="text-sm text-muted-foreground/70">Powiązane:</span>
                        {item.links.map((link, i) => (
                          <Link 
                            key={i} 
                            to={link.href} 
                            className="text-sm text-pink-400 hover:text-pink-300 font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            {link.text}
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>


      {/* Related Services */}

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja TikTok Ads — reklama na TikToku i kampanie marketingowe</h2>
            <p className="text-muted-foreground mb-4">Agencja TikTok Ads Fotz Studio to specjaliści od kampanii na TikTok for Business dla firm B2C i e-commerce w Polsce. TikTok to jedna z najszybciej rosnących platform społecznościowych na świecie — reklamy TikTok docierają do zaangażowanych odbiorców (głównie Gen Z i Millennialsi). Formaty TikTok Ads: In-Feed Ads (w feedzie "Dla Ciebie"), Spark Ads (promocja treści organicznych), TopView (pierwsza reklama przy otwarciu aplikacji), Brand Takeover i Branded Hashtag Challenge. TikTok Pixel umożliwia śledzenie konwersji i budowanie custom audiences.</p>
            <p className="text-muted-foreground mb-6">TikTok preferuje treści autentyczne i natywne — reklamy wyglądające jak organiczne wideo osiągają znacznie lepsze wyniki. Tworzenie kreacji pod TikToka wymaga rozumienia kultury platformy: trendy, dźwięki, filtry i challenge. Dobra reklama TikTok to taka, którą użytkownicy chcą oglądać. Zarządzamy kampaniami przez TikTok Ads Manager, monitorując CPM, CTR, CPC i ROAS każdej kampanii.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Kampanie TikTok — jak reklamować firmę na TikToku?</h2>
            <p className="text-muted-foreground">TikTok for Business oferuje targetowanie podobne do Meta — zainteresowania, demografika, lookalike audiences i retargeting przez TikTok Pixel. Reklama na TikTok biznes staje się coraz ważniejszym elementem mediamixu firm B2C, szczególnie w e-commerce, beauty, fashion i gastronomii. Jako agencja TikTok Ads oferujemy pełną obsługę: od strategii kreatywnej i produkcji wideo, przez konfigurację kampanii w TikTok Ads Manager, po optymalizację i raportowanie wyników.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <RelatedServices 
        currentService="tiktok-ads"
        subtitle="Inne platformy reklamowe i usługi wspierające kampanie wideo"
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600/10 via-background to-cyan-600/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Rocket className="w-16 h-16 text-pink-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na TikToka?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację. Sprawdzimy, czy TikTok Ads to odpowiedni kanał dla Twojego biznesu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-pink-500 to-cyan-500 hover:from-pink-600 hover:to-cyan-600">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <a href="tel:+48790814814">
                  Zadzwoń teraz
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default TikTokAds;
