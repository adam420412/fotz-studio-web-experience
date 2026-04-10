import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { ContactSection } from "@/components/sections/ContactSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  TrendingUp, 
  Users, 
  Zap, 
  BarChart3, 
  Megaphone,
  Instagram,
  Facebook,
  Eye,
  ShoppingCart,
  Heart,
  Video,
  Image,
  Layers,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const stats = [
  { value: 3800, suffix: "M+", label: "Aktywnych użytkowników Meta" },
  { value: 98, suffix: "%", label: "Zasięg w Polsce" },
  { value: 8, suffix: "x", label: "Wyższy ROAS z synergii" },
  { value: 40, suffix: "%", label: "Niższy CPM cross-platform" },
];

const platforms = [
  {
    name: "Facebook Ads",
    icon: Facebook,
    color: "from-blue-600 to-blue-800",
    description: "Największa platforma społecznościowa z precyzyjnym targetowaniem demograficznym i behawioralnym.",
    formats: ["Feed Ads", "Stories", "Reels", "Messenger", "Marketplace"],
    link: "/performance-marketing/facebook-ads"
  },
  {
    name: "Instagram Ads",
    icon: Instagram,
    color: "from-pink-500 via-purple-500 to-orange-400",
    description: "Platforma wizualna idealna dla marek lifestyle, beauty, fashion i e-commerce.",
    formats: ["Feed", "Stories", "Reels", "Explore", "Shopping"],
    link: "/performance-marketing/instagram-ads"
  }
];

const synergies = [
  {
    icon: Layers,
    title: "Unified Audience",
    description: "Jedna grupa docelowa, dwie platformy - dotrzesz do użytkowników tam, gdzie są najbardziej aktywni."
  },
  {
    icon: TrendingUp,
    title: "Cross-Platform Retargeting",
    description: "Użytkownik zobaczył reklamę na FB? Przypomnij mu o sobie na Instagramie i odwrotnie."
  },
  {
    icon: BarChart3,
    title: "Wspólna Optymalizacja",
    description: "Advantage+ automatycznie alokuje budżet tam, gdzie osiągasz najlepsze wyniki."
  },
  {
    icon: Target,
    title: "Spójny Przekaz",
    description: "Jednolita komunikacja marki na obu platformach wzmacnia rozpoznawalność."
  }
];

const formats = [
  {
    icon: Image,
    name: "Image Ads",
    description: "Statyczne grafiki - idealne do budowania świadomości marki"
  },
  {
    icon: Video,
    name: "Video Ads",
    description: "Wideo 15-60s - najwyższy engagement i konwersje"
  },
  {
    icon: Layers,
    name: "Carousel Ads",
    description: "Do 10 kart - świetne dla e-commerce i storytellingu"
  },
  {
    icon: Eye,
    name: "Stories & Reels",
    description: "Formaty pełnoekranowe - najwyższe zaangażowanie młodych odbiorców"
  },
  {
    icon: ShoppingCart,
    name: "Collection & Shopping",
    description: "Katalog produktów - bezpośrednia sprzedaż z reklamy"
  },
  {
    icon: Megaphone,
    name: "Lead Ads",
    description: "Formularze w aplikacji - zbieranie leadów bez opuszczania platformy"
  }
];

const packages = [
  {
    name: "Start",
    price: "od 1 500",
    description: "Dla firm rozpoczynających przygodę z Meta Ads",
    features: [
      "Kampanie na 1 platformie (FB lub IG)",
      "Do 3 grup odbiorców",
      "Podstawowe formaty reklamowe",
      "Raport miesięczny",
      "Budżet reklamowy: od 1 500 zł/mies."
    ],
    popular: false
  },
  {
    name: "Business",
    price: "od 3 000",
    description: "Pełna synergia Facebook + Instagram",
    features: [
      "Kampanie cross-platform FB + IG",
      "Advantage+ automatyczna optymalizacja",
      "Wszystkie formaty reklamowe",
      "Retargeting dynamiczny",
      "A/B testing kreacji",
      "Raport tygodniowy",
      "Budżet reklamowy: od 3 000 zł/mies."
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "od 6 000",
    description: "Kompleksowa strategia Meta + wsparcie kreatywne",
    features: [
      "Wszystko z pakietu Business",
      "Produkcja kreacji wideo i grafik",
      "Strategia lejka sprzedażowego",
      "Integracja z CRM",
      "Lookalike audiences zaawansowane",
      "Dedykowany opiekun",
      "Budżet reklamowy: od 8 000 zł/mies."
    ],
    popular: false
  }
];

const faqItems = [
  {
    question: "Czy lepiej reklamować się na Facebooku czy Instagramie?",
    answer: "To zależy od grupy docelowej i branży. Facebook sprawdza się lepiej dla odbiorców 35+, B2B i usług lokalnych. Instagram dominuje w grupie 18-34, fashion, beauty i lifestyle. Najlepsze wyniki osiąga się łącząc obie platformy - algorytm Advantage+ automatycznie optymalizuje budżet."
  },
  {
    question: "Jak działa cross-platform retargeting?",
    answer: "Pixel Meta śledzi użytkowników na obu platformach. Jeśli ktoś odwiedził Twoją stronę, zobaczył produkt lub dodał do koszyka - możesz pokazać mu spersonalizowaną reklamę zarówno na Facebooku, jak i Instagramie, zwiększając szanse na konwersję."
  },
  {
    question: "Jaki budżet potrzebuję na kampanie Meta Ads?",
    answer: "Rekomendujemy minimum 1 500 zł/miesiąc na jedną platformę lub 3 000 zł na kampanie cross-platform. Mniejsze budżety nie pozwalają algorytmowi na skuteczną optymalizację. Dla e-commerce z katalogiem produktów zalecamy 5 000 zł+."
  },
  {
    question: "Czy produkujecie materiały reklamowe?",
    answer: "Tak! W pakiecie Premium zapewniamy pełną produkcję kreacji - od strategii wizualnej, przez sesje zdjęciowe, po montaż wideo w formatach Reels i Stories. W pakietach niższych możemy zrealizować produkcję jako osobną usługę."
  },
  {
    question: "Jak mierzycie skuteczność kampanii?",
    answer: "Konfigurujemy Pixel Meta i Conversions API dla precyzyjnego śledzenia. Mierzymy KPI dopasowane do celów: ROAS, CPA, CPL, CTR, częstotliwość i zasięg. Raporty zawierają analizę grup odbiorców i rekomendacje optymalizacyjne."
  },
  {
    question: "Czy obsługujecie katalogi produktów i Dynamic Ads?",
    answer: "Oczywiście. Integrujemy katalogi z Shopify, WooCommerce, PrestaShop i innych platform. Dynamic Product Ads automatycznie pokazują użytkownikom produkty, które przeglądali - to must-have dla każdego e-commerce."
  }
];

function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, displayValue } = useCountUp({ end: value, duration: 2000 });
  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#75143F] via-[#422249] to-[#0F3053] bg-clip-text text-transparent">
        {displayValue}{suffix}
      </div>
      <p className="text-muted-foreground mt-2 text-sm md:text-base">{label}</p>
    </div>
  );
}

export default function FacebookInstagramAds() {
  return (
    <Layout>
      <SEOHead
        title="Kampania Facebook Ads - Reklama na Facebooku dla Firm | Cennik | Fotz Studio"
        description="Kampanie Facebook Ads dla firm — reklama na Facebooku i Instagramie. Formy reklamy, targetowanie odbiorców, cennik. Agencja Facebook Ads — bezpłatna wycena 24h."
        canonical="https://fotz.pl/performance-marketing/meta-ads"
        keywords="kampania facebook ads, reklama facebook ads, kampanie facebook, reklama na facebooku, formy reklamy facebook, facebook ads cennik, instagram ads"
      />
      <ServiceSchema
        name="Meta Ads - Facebook & Instagram"
        description="Kompleksowa obsługa reklam Meta Ads - Facebook i Instagram w jednej strategii. Cross-platform retargeting i Advantage+."
        provider="Fotz Studio"
        areaServed="Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Kampanie reklamowe", url: "https://fotz.pl/kampanie-reklamowe" },
          { name: "Facebook & Instagram Ads", url: "https://fotz.pl/performance-marketing/meta-ads" }
        ]}
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-wide relative z-10 text-center py-20 md:py-32">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#1877F2] to-[#0D65D9]">
              <Facebook className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold text-muted-foreground">+</span>
            <div className="p-3 rounded-2xl bg-gradient-to-br from-[#E4405F] via-[#C13584] to-[#F77737]">
              <Instagram className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
              Meta Ads
            </span>
            <br />
            <span className="text-foreground">Facebook + Instagram</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Wykorzystaj potencjał ekosystemu Meta. Jeden budżet, dwie platformy, 
            synergia, która generuje wyższy ROAS niż kampanie na pojedynczej platformie.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90" asChild>
              <Link to="/kontakt">Zamów bezpłatną konsultację</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/realizacje">Zobacz efekty</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Overview */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Dwie platformy, jedna strategia</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Facebook i Instagram to dwa różne światy z jednym potężnym zapleczem reklamowym. 
              Poznaj specyfikę każdej platformy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="relative group rounded-2xl border border-border bg-card p-8 hover:border-primary/50 transition-all"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-5 rounded-2xl`} />
                <div className="relative">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.color} mb-4`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{platform.name}</h3>
                  <p className="text-muted-foreground mb-4">{platform.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {platform.formats.map((format) => (
                      <span 
                        key={format}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                  
                  <Button variant="outline" size="sm" asChild>
                    <Link to={platform.link} className="group/link">
                      Szczegóły platformy 
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synergy Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Siła synergii Meta Ads</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Kampanie cross-platform to więcej niż suma części. 
              Oto dlaczego łączenie FB + IG daje lepsze wyniki.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {synergies.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Formaty reklamowe Meta</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dobieramy formaty do celów kampanii i specyfiki Twojej branży.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <format.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{format.name}</h3>
                  <p className="text-muted-foreground text-sm">{format.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pakiety Meta Ads</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Wybierz poziom obsługi dopasowany do Twoich potrzeb i budżetu.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div 
                key={pkg.name}
                className={`relative rounded-2xl border bg-card p-8 ${
                  pkg.popular 
                    ? "border-primary shadow-lg shadow-primary/10" 
                    : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#75143F] to-[#0F3053] text-white text-sm font-medium">
                      Najpopularniejszy
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-muted-foreground"> zł/mies.</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${pkg.popular ? "bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90" : ""}`}
                  variant={pkg.popular ? "default" : "outline"}
                  asChild
                >
                  <Link to="/kontakt">Wybierz pakiet</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container-wide max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Często zadawane pytania</h2>
            <p className="text-muted-foreground">
              Odpowiedzi na najczęstsze pytania o kampanie Meta Ads.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powiązane usługi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Poznaj inne platformy reklamowe, które możemy dla Ciebie obsłużyć.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Google Ads", href: "/performance-marketing/google-ads", description: "Docieraj do klientów szukających Twoich usług" },
              { name: "TikTok Ads", href: "/performance-marketing/tiktok-ads", description: "Angażuj młodą grupę docelową" },
              { name: "LinkedIn Ads", href: "/performance-marketing/linkedin-ads", description: "Generuj leady B2B" },
              { name: "YouTube Ads", href: "/performance-marketing/youtube-ads", description: "Buduj świadomość marki wideo" },
            ].map((service) => (
              <Link
                key={service.name}
                to={service.href}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Dowiedz się więcej <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Kampania Facebook Ads i reklama Facebook Ads — jak działa reklama na Facebooku?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Kampania Facebook Ads to najskuteczniejszy sposób docierania do precyzyjnie zdefiniowanych odbiorców w mediach społecznościowych. Reklama Facebook Ads wyświetla się użytkownikom Facebooka i Instagrama na podstawie ich demografii, zainteresowań i zachowań zakupowych. Kampanie Facebook umożliwiają dotarcie do konkretnego użytkownika w idealnym momencie. Marketing w mediach społecznościowych oparty na Facebook Ads to jeden z najbardziej efektywnych kanałów reklamowych dla e-commerce i usług lokalnych. Pomocą Facebook Ads możesz też dotrzeć do nowych odbiorców podobnych do Twoich istniejących klientów — tzw. Lookalike Audience.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">
              Formy reklamy na Facebooku — typy kampanii reklamowej Facebook
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Formy reklamy na Facebooku: reklamy graficzne, karuzelowe, wideo, kolekcje produktów i formularze leadowe. Każdej kampanii Facebook Ads przyświeca jeden główny cel — zasięg, ruch na stronę www, leady lub zwiększenie sprzedaży. Kampanii reklamowej Facebook typy dobieramy do etapu lejka i grupy docelowej. Facebooku to obecnie jedna z największych platform reklamowych świata — Facebook zaleca testowanie minimum 3–5 kreacji jednocześnie. Reklam FB wybór formatów dostosowujemy do contentu i celu kampanii — Story, Feed, Reels lub Audience Network na urządzeniach mobilnych.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3">
              Reklama Facebook — lokalizacja, targetowanie i swoich odbiorców
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reklama Facebook pozwala targetować odbiorców na podstawie lokalizacji, demografii, zainteresowań i zachowań. Lokalizacja to kluczowy parametr dla firm lokalnych — docierasz do ludzi w Twoim mieście. Swoich odbiorców możesz zdefiniować jako Custom Audience (z Fanpage'a na Facebooku, piksela Meta lub listy klientów). Facebook na podstawie Twoich danych tworzy podobne grupy odbiorców (Lookalike). Instagram Ads prowadzone z tego samego menedżera reklam Meta uzupełniają kampanie facebookowe. Firmy na facebooku, które regularnie prowadzą kampanie, budują stały dopływ leadów i rozpoznawalność marki.
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-8">
              Kampanie Facebook — prowadzenie facebooku z agencją i cennik
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Prowadzenie facebooku z agencją Fotz Studio to gwarancja efektywnych kampanii. Kampanii reklamowej Facebook cennik: konfiguracja od 800 zł jednorazowo, miesięczna obsługa od 1 200 zł. Trzymamy rękę na pulsie — reagujemy na zmiany wyników kampanii i optymalizujemy twoich reklam efektywność na bieżąco. Twojej stronie internetowej i twojej firmie zapewniamy poprawną konfigurację piksela Meta i śledzenie konwersji. Google Ads i Facebook Ads to komplementarne kanały — razem tworzą kompletną strategię digital marketingu. Możesz utworzyć kampanię na Facebooku i równolegle prowadzić reklamy Google — to optymalna synergia. Ruch w firmie generowany z kampanii Facebook monitorujemy w Google Analytics 4. Facebooku z agencją współpraca zapewnia Ci spokój i mierzalne wyniki — raportujemy każdej kampanii wyniki co miesiąc.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
