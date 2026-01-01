import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, Users, TrendingUp, BarChart3, Zap, Eye, 
  DollarSign, CheckCircle2, ArrowRight, Video, 
  Youtube, Play, Megaphone, RefreshCw, Rocket,
  Monitor, Tv, SkipForward, Film
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Layout } from "@/components/layout/Layout";

const YouTubeAds = () => {
  const benefits = [
    { icon: Users, title: "2 mld użytkowników", description: "Druga największa wyszukiwarka na świecie" },
    { icon: TrendingUp, title: "Długi czas oglądania", description: "Średnio 40 minut sesji na urządzeniu mobilnym" },
    { icon: Video, title: "Siła wideo", description: "Najskuteczniejszy format reklamowy online" },
    { icon: Target, title: "Precyzyjne targetowanie", description: "Dane Google o intencjach i zainteresowaniach" },
  ];

  const adFormats = [
    { icon: SkipForward, title: "TrueView In-Stream", description: "Reklamy pomijalne przed, w trakcie lub po filmie" },
    { icon: Film, title: "TrueView Discovery", description: "Reklamy w wynikach wyszukiwania YouTube" },
    { icon: Tv, title: "Bumper Ads", description: "6-sekundowe niepomijalne reklamy" },
    { icon: Video, title: "Non-skippable Ads", description: "15-20 sekundowe reklamy bez opcji pominięcia" },
    { icon: Monitor, title: "Masthead", description: "Reklama na stronie głównej YouTube" },
    { icon: Play, title: "YouTube Shorts Ads", description: "Reklamy w krótkich pionowych filmach" },
  ];

  const processSteps = [
    { step: "01", title: "Strategia i cel", description: "Określamy grupę docelową i KPI kampanii" },
    { step: "02", title: "Produkcja wideo", description: "Tworzymy profesjonalne spoty reklamowe" },
    { step: "03", title: "Konfiguracja kampanii", description: "Ustawiamy targetowanie i śledzenie konwersji" },
    { step: "04", title: "Optymalizacja", description: "Analizujemy wyniki i optymalizujemy kampanię" },
  ];

  const pricingPackages = [
    {
      name: "Start",
      price: "2 000",
      period: "/mies.",
      description: "Testowanie YouTube Ads",
      features: [
        "Budżet reklamowy do 5 000 zł",
        "TrueView In-Stream",
        "Podstawowe targetowanie",
        "1 kreacja wideo",
        "Raport miesięczny",
        "Śledzenie konwersji",
      ],
      popular: false,
    },
    {
      name: "Business",
      price: "4 000",
      period: "/mies.",
      description: "Pełna obsługa YouTube",
      features: [
        "Budżet reklamowy do 15 000 zł",
        "Wszystkie formaty reklamowe",
        "Zaawansowane targetowanie",
        "2-3 kreacje wideo",
        "Testy A/B",
        "Remarketing",
        "Raporty tygodniowe",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "7 000",
      period: "/mies.",
      description: "YouTube + Google Ads",
      features: [
        "Budżet reklamowy bez limitu",
        "Integracja z Google Ads",
        "Nielimitowane kreacje",
        "YouTube Shorts Ads",
        "Produkcja wideo w studio",
        "Dedykowany opiekun",
        "Strategia wielokanałowa",
        "Raporty na żądanie",
      ],
      popular: false,
    },
  ];

  const stats = [
    { value: "2B+", label: "Aktywnych użytkowników YouTube" },
    { value: "500h", label: "Wideo uploadowane co minutę" },
    { value: "70%", label: "Użytkowników ogląda na mobile" },
    { value: "95%", label: "Zapamiętanie reklam wideo" },
  ];

  const faqItems = [
    {
      question: "Czy YouTube Ads sprawdzi się dla mojej firmy?",
      answer: "YouTube Ads sprawdza się dla niemal każdej branży - od e-commerce, przez B2B, po usługi lokalne. Kluczowe jest posiadanie materiału wideo lub budżetu na jego produkcję. YouTube pozwala docierać do osób na różnych etapach ścieżki zakupowej - od budowania świadomości po remarketing."
    },
    {
      question: "Jaki budżet potrzebuję na YouTube Ads?",
      answer: "Minimalny budżet dzienny to około 30 zł, ale rekomendujemy start od 150-300 zł dziennie (4500-9000 zł miesięcznie) dla zebrania wystarczających danych. YouTube oferuje model CPV (cost per view) - płacisz tylko gdy użytkownik obejrzy reklamę lub wejdzie w interakcję."
    },
    {
      question: "Jak powinna wyglądać reklama na YouTube?",
      answer: "Reklamy na YouTube powinny przyciągnąć uwagę w pierwszych 5 sekundach (przed opcją pominięcia). Rekomendujemy: jasny przekaz, emocjonalne otwarcie, profesjonalną jakość produkcji, CTA w pierwszych 15 sekundach, branding od początku. Optymalna długość to 15-30 sekund dla TrueView."
    },
    {
      question: "Jak targetować reklamy na YouTube?",
      answer: "YouTube oferuje targetowanie: demograficzne (wiek, płeć, lokalizacja), zainteresowania, intencje zakupowe (in-market audiences), custom intent (słowa kluczowe), remarketing, podobne grupy, konkretne kanały/filmy. Dzięki integracji z Google masz dostęp do potężnych danych o użytkownikach."
    },
    {
      question: "Czym różnią się formaty reklamowe YouTube?",
      answer: "TrueView In-Stream (pomijalne po 5s) - płacisz za 30s oglądania lub interakcję. Bumper Ads (6s, niepomijalne) - świetne do budowania świadomości. Non-skippable (15-20s) - gwarantowana ekspozycja. Discovery - reklamy w wynikach wyszukiwania. Shorts Ads - pionowe wideo dla młodszych odbiorców."
    },
    {
      question: "Jak mierzyć skuteczność reklam YouTube?",
      answer: "Mierzymy: wyświetlenia, współczynnik obejrzeń (VTR), koszt za obejrzenie (CPV), kliknięcia, konwersje, zasięg i częstotliwość, brand lift. YouTube oferuje też zaawansowane metryki jak earned actions (udostępnienia, subskrypcje) i view-through conversions."
    },
    {
      question: "Czy warto łączyć YouTube z innymi kampaniami Google?",
      answer: "Zdecydowanie tak! YouTube jest częścią ekosystemu Google Ads. Możesz używać remarketingu między platformami, łączyć z kampaniami w sieci wyszukiwania i Display, a Performance Max automatycznie optymalizuje między YouTube, Search i Display."
    },
    {
      question: "Czy tworzycie materiały wideo do reklam YouTube?",
      answer: "Tak, mamy własne studio produkcyjne i tworzymy profesjonalne spoty reklamowe zoptymalizowane pod YouTube. Produkujemy różne wersje (6s, 15s, 30s) do testów A/B. Zobacz nasze realizacje wideo i spoty reklamowe."
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>YouTube Ads - Reklamy wideo na YouTube | Fotz Studio Poznań</title>
        <meta name="description" content="Profesjonalne kampanie YouTube Ads. Docieraj do 2 miliardów użytkowników dzięki reklamom wideo. Produkcja spotów i obsługa kampanii. Agencja YouTube Ads Poznań." />
        <link rel="canonical" href="https://fotz.pl/youtube-ads" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-background overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/15 via-background to-orange-600/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-red-500/20 text-red-400 rounded-full text-sm font-medium mb-6">
              <Youtube className="inline-block w-4 h-4 mr-2" />
              YouTube Ads
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Reklamy wideo,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500">
                które budują markę
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Docieraj do miliardów użytkowników YouTube dzięki profesjonalnym kampaniom wideo. 
              Od strategii, przez produkcję, po optymalizację.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/spoty-reklamowe">Zobacz nasze spoty</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 mb-2">{stat.value}</div>
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
              Dlaczego YouTube Ads?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Największa platforma wideo na świecie
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
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-red-500/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-red-500/10 text-red-500 mb-4">
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
              Formaty reklamowe YouTube
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
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-red-500/30 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-500 mb-4 group-hover:scale-110 transition-transform">
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
              Od strategii do mierzalnych wyników
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
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500/30 to-orange-500/30 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-500/30 to-transparent" />
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
              Cennik YouTube Ads
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Obsługa kampanii + produkcja wideo
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
                    ? 'bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500' 
                    : 'bg-card border-border/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-medium rounded-full">
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
                      <CheckCircle2 className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild 
                  className={`w-full ${pkg.popular ? 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Ceny netto. Budżet reklamowy doliczany osobno. Produkcja wideo wyceniana indywidualnie.
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
              Najczęstsze pytania
            </h2>
            <p className="text-muted-foreground">
              Odpowiedzi na pytania o reklamy YouTube
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
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
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
              Usługi, które wzmocnią Twoje kampanie wideo
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Kampanie reklamowe", href: "/kampanie-reklamowe", icon: Megaphone },
              { title: "Google Ads", href: "/google-ads", icon: Target },
              { title: "Spoty reklamowe", href: "/spoty-reklamowe", icon: Video },
              { title: "Produkcja filmów", href: "/produkcja-filmow-poznan", icon: Film },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-red-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <service.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="font-medium text-foreground">{service.title}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-red-500 transition-colors" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600/10 via-background to-orange-600/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Rocket className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Gotowy na reklamę wideo?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Umów się na bezpłatną konsultację. Przeanalizujemy Twój biznes i zaproponujemy strategię kampanii YouTube Ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
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
  );
};

export default YouTubeAds;
