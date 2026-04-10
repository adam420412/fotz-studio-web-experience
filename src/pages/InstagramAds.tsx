import { motion } from "framer-motion";
import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  MousePointer, DollarSign, CheckCircle2, 
  ArrowRight, Video, Sparkles, Heart, Image,
  Smartphone, Play, Camera, RefreshCw, ShoppingBag, Instagram
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

const InstagramAds = () => {
  const benefits = [
    { icon: Image, title: "Wizualny storytelling", description: "Angażuj odbiorców estetycznymi kreacjami foto i wideo" },
    { icon: ShoppingBag, title: "Instagram Shopping", description: "Sprzedawaj produkty bezpośrednio przez aplikację" },
    { icon: Heart, title: "Wysoka interakcja", description: "2x wyższe zaangażowanie niż na innych platformach" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Docieraj do idealnych klientów dzięki Meta Ads" },
  ];

  const adFormats = [
    { icon: Image, title: "Feed Ads", description: "Klasyczne reklamy zdjęciowe i wideo w feedzie" },
    { icon: Play, title: "Stories Ads", description: "Pełnoekranowe reklamy w relacjach 9:16" },
    { icon: Video, title: "Reels Ads", description: "Dynamiczne wideo dopasowane do trendu Reels" },
    { icon: ShoppingBag, title: "Shopping Ads", description: "Reklamy produktowe z bezpośrednim zakupem" },
    { icon: Camera, title: "Carousel Ads", description: "Wieloslajdowe kreacje z produktami" },
    { icon: Sparkles, title: "Explore Ads", description: "Reklamy w sekcji Odkrywaj" },
  ];

  const processSteps = [
    { step: "01", title: "Strategia wizualna", description: "Tworzymy spójną estetykę dopasowaną do marki" },
    { step: "02", title: "Produkcja kreacji", description: "Projektujemy zdjęcia, grafiki i wideo" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy targetowanie i pixel Meta" },
    { step: "04", title: "Optymalizacja i skalowanie", description: "Testujemy i skalujemy najlepsze kreacje" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "1 500",
      period: "/mies.",
      description: "Testowanie Instagrama",
      features: [
        "Budżet reklamowy do 3 000 zł",
        "4-6 kreacji miesięcznie",
        "Feed + Stories Ads",
        "Podstawowe targetowanie",
        "Raport miesięczny",
        "Pixel konwersji",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "3 000",
      period: "/mies.",
      description: "Pełna obsługa Instagram",
      features: [
        "Budżet reklamowy do 10 000 zł",
        "10-15 kreacji miesięcznie",
        "Wszystkie formaty reklamowe",
        "Zaawansowane targetowanie",
        "Testy A/B kreacji",
        "Remarketing",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "5 000",
      period: "/mies.",
      description: "Instagram + Influencerzy",
      features: [
        "Budżet reklamowy bez limitu",
        "Nielimitowane kreacje",
        "Instagram Shopping setup",
        "Współpraca z influencerami",
        "Produkcja foto/wideo w studio",
        "Dedykowany opiekun",
        "Strategia wielokanałowa",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "2B+", label: "Aktywnych użytkowników miesięcznie" },
    { value: "500M+", label: "Użytkowników Stories dziennie" },
    { value: "83%", label: "Użytkowników odkrywa nowe produkty" },
    { value: "130M", label: "Kliknięć w posty zakupowe miesięcznie" },
  ];

  const faqItems = [
    {
      question: "Czym Instagram Ads różni się od Facebook Ads?",
      answer: "Instagram Ads to część ekosystemu Meta Ads, ale format i odbiorcy różnią się znacząco. Instagram jest bardziej wizualny, młodszy demograficznie (25-44 lata to główna grupa) i wymaga wysokiej jakości kreacji. Stories i Reels mają inny format niż Facebook. Często łączymy obie platformy dla maksymalnego zasięgu."
    },
    {
      question: "Jaki budżet potrzebuję na Instagram Ads?",
      answer: "Minimalny sensowny budżet to około 2000-3000 zł miesięcznie. Dla e-commerce i kampanii produktowych rekomendujemy start od 5000 zł miesięcznie. Koszt za kliknięcie (CPC) na Instagramie wynosi zwykle 0,50-2,00 zł w zależności od branży i targetowania."
    },
    {
      question: "Jakie kreacje najlepiej działają na Instagramie?",
      answer: "Najskuteczniejsze są: wysokiej jakości zdjęcia produktowe, naturalne treści w stylu UGC, wideo Stories 15 sekund, Reels nawiązujące do trendów, karuzele pokazujące proces lub portfolio. Unikamy zbyt reklamowych kreacji - użytkownicy Instagrama cenią autentyczność."
    },
    {
      question: "Czy mogę sprzedawać bezpośrednio przez Instagram?",
      answer: "Tak! Instagram Shopping pozwala oznaczać produkty na zdjęciach i Stories. Użytkownicy mogą przeglądać katalog i przechodzić do zakupu jednym kliknięciem. Pomagamy w konfiguracji sklepu Instagram i integracji z Twoim e-commerce."
    },
    {
      question: "Jak mierzyć skuteczność reklam na Instagramie?",
      answer: "Instalujemy Meta Pixel na Twojej stronie do śledzenia konwersji. Monitorujemy: zasięg, zaangażowanie (lajki, komentarze, zapisy), CTR, koszt za kliknięcie, koszt za konwersję, ROAS. Dla e-commerce śledzimy też dodania do koszyka i zakupy."
    },
    {
      question: "Czy warto łączyć Instagram Ads z innymi platformami?",
      answer: "Zdecydowanie! Instagram świetnie buduje świadomość marki. W połączeniu z remarketingiem na Facebook i Google Ads tworzy kompletną ścieżkę zakupową. Dla młodszych odbiorców dodajemy TikTok Ads. Oferujemy kompleksową obsługę kampanii cross-platform."
    },
    {
      question: "Jak działa współpraca z influencerami na Instagramie?",
      answer: "W pakiecie Premium pomagamy w doborze influencerów, negocjacji stawek i koordynacji kampanii. Branded Content Ads pozwalają promować posty influencerów jako reklamy płatne, łącząc autentyczność z zasięgiem. To najskuteczniejsza forma reklamy na Instagramie."
    },
    {
      question: "Jak szybko zobaczę efekty kampanii Instagram?",
      answer: "Pierwsze wyniki (zasięg, zaangażowanie) widać po 24-48 godzinach. Stabilne konwersje wymagają 2-3 tygodni zbierania danych przez pixel. Pełna optymalizacja i najlepsze wyniki osiągamy po 2-3 miesiącach regularnej pracy nad kampanią."
    },
  ];

  return (
    <OrganizationSchema />

    <Layout>
      <SEOHead
        title="Instagram Ads — Reklama na Instagramie dla Firm | Fotz Studio"
        description="Instagram Ads — tworzenie i prowadzenie kampanii reklamowych na Instagramie. Reklamy wideo, stories, reels i karuzele. Fotz Studio."
        canonical="https://fotz.pl/performance-marketing/instagram-ads"
        keywords="Instagram Ads, reklamy Instagram, kampanie Instagram, Stories Ads, Reels Ads, agencja Instagram Poznań"
      />

      <ServiceSchema 
        name="Instagram Ads - Kampanie reklamowe"
        description="Profesjonalne kampanie Instagram Ads. Reklamy w Stories, Reels, Feed i Shopping. Wizualny storytelling dla Twojej marki."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Instagram Ads", url: "https://fotz.pl/performance-marketing/instagram-ads" }
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/15 via-background to-purple-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium mb-6">
              <Instagram className="inline-block w-4 h-4 mr-2" />
              Instagram Ads
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Reklamy na Instagramie,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500">
                które przyciągają wzrok
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Buduj markę i sprzedawaj produkty na platformie, gdzie liczy się estetyka. 
              Stories, Reels, Shopping - wykorzystujemy pełen potencjał Instagrama.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/realizacje">Zobacz realizacje</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-2">{stat.value}</div>
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
              Dlaczego Instagram Ads?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Platforma wizualna, gdzie marki budują relacje z klientami
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
              Formaty reklamowe Instagram
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wykorzystujemy wszystkie możliwości platformy
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
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-500 mb-4 group-hover:scale-110 transition-transform">
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
              Od koncepcji do konwersji
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
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500/30 to-purple-500/30 mb-4">{step.step}</div>
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
              Cennik Instagram Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obsługa kampanii + produkcja kreacji wizualnych
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
                    ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500' 
                    : 'bg-card border-border/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm font-medium rounded-full">
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
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            * Ceny nie zawierają budżetu reklamowego. Podane kwoty są cenami netto.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600/20 via-background to-purple-600/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na wzrost na Instagramie?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Umów bezpłatną konsultację i dowiedz się, jak Instagram Ads może rozwinąć Twój biznes
            </p>
            <Button asChild size="lg" className="text-lg px-8 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
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
              Najczęstsze pytania
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wszystko, co musisz wiedzieć o Instagram Ads
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium text-foreground">{item.question}</span>
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
              { name: "Meta Ads (FB + IG)", href: "/performance-marketing/meta-ads", description: "Synergia Facebook i Instagram" },
              { name: "Google Ads", href: "/performance-marketing/google-ads", description: "Reklamy w wyszukiwarce" },
              { name: "TikTok Ads", href: "/performance-marketing/tiktok-ads", description: "Viralowe kampanie wideo" },
              { name: "YouTube Ads", href: "/performance-marketing/youtube-ads", description: "Reklamy wideo" },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group p-6 rounded-xl border border-border bg-card hover:border-pink-500/50 transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-pink-400 text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Instagram Ads — skuteczna reklama na Instagramie dla firm</h2>
            <p className="text-muted-foreground mb-4">Instagram Ads to reklamy wyświetlane w aplikacji Instagram — w feedzie, Stories, Reels i Explore. Zarządzane przez Meta Ads Manager, kampanie Instagram Ads korzystają z tych samych potężnych możliwości targetowania co Facebook Ads: zainteresowania, demografika, zachowania, własne listy klientów i lookalike audiences.</p>
            <p className="text-muted-foreground mb-6">Reklama na Instagramie szczególnie efektywna jest dla branż wizualnych: moda, uroda, jedzenie, wnętrza, fitness, turystyka. Wysoka jakość kreacji graficznych i wideo jest kluczem do sukcesu na Instagramie — odbiorcy są wymagający i ignorują reklamy niespójne z estetycznym kontekstem platformy.</p>
            <h2 className="text-3xl font-heading font-bold mb-6">Formaty Instagram Ads — Stories, Reels i feed reklamy</h2>
            <p className="text-muted-foreground">Formaty reklam na Instagramie: Single image (feed), karuzele, wideo (feed i Reels), Stories Ads (pełnoekranowe, pionowe), reklamy Explore. Reels Ads wyróżniają się najwyższym zasięgiem organicznym i viralnym potencjałem. Instagram Shopping Ads pozwalają na oznaczanie produktów i bezpośredni zakup z aplikacji — idealne dla e-commerce. Tworzenie reklam wideo na Instagram Reels i Stories to nasza specjalność.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/performance-marketing/facebook-ads" className="text-primary hover:underline font-medium text-sm">→ Facebook Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/landing-page" className="text-primary hover:underline font-medium text-sm">→ Landing page</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default InstagramAds;
