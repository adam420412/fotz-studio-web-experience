import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Building2, Globe, Target, MapPin, TrendingUp, Users, Award, Zap } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";

const services = [
  {
    icon: Globe,
    title: "Strony i sklepy internetowe",
    description: "Projektujemy responsywne strony www i sklepy e-commerce dla firm z Gliwic. Szybkie, zoptymalizowane pod SEO i konwersję. Shopify, WooCommerce, Next.js — dobieramy technologię do skali i potrzeb firmy."
  },
  {
    icon: Target,
    title: "Pozycjonowanie SEO",
    description: "Pozycjonowanie dla firm z Gliwic — pracujemy nad widocznością w Google. Audyt techniczny, optymalizacja treści, link building. Nie gwarantujemy konkretnej pozycji — raportujemy realne zmiany widoczności i ruchu."
  },
  {
    icon: Zap,
    title: "Kampanie Google Ads",
    description: "Zaawansowane kampanie Google Ads: search, shopping, display. Konfiguracja, optymalizacja i skalowanie. Raportowanie ROAS i CPL. Budżet reklamowy płacisz Google osobno — pomagamy dobrać go do celu i konkurencji w branży."
  },
  {
    icon: Star,
    title: "Kampanie Meta Ads",
    description: "Kampanie na Facebooku i Instagramie z precyzyjnym targetowaniem. Dla B2B, e-commerce i firm produkcyjnych. Targetowanie na odbiorców z Gliwic i regionu śląskiego."
  },
  {
    icon: Users,
    title: "Social media marketing",
    description: "Obsługa social media dla firm z Gliwic — Instagram, Facebook, LinkedIn, TikTok. Kreacje treści, kampanie, community management. LinkedIn dla firm B2B i inżynieryjnych."
  },
  {
    icon: Building2,
    title: "Identyfikacja wizualna",
    description: "Branding i identyfikacja wizualna: logo, brandbook, system identyfikacji. Dla startupów tech, firm produkcji i firm usług dla biznesu. Spójna identyfikacja pomaga budować wiarygodność marki."
  }
];

const faqItems = [
  {
    question: "Jakie wyzwania marketingowe stoi przed firmami z Gliwic?",
    answer: "Gliwice to ważny ośrodek technologiczny i przemysłowy Śląska, z Politechniką Śląską i wieloma firmami B2B. Dla takich firm liczą się zwykle: SEO pod specjalistyczne frazy, LinkedIn dla B2B i komunikacja, która tłumaczy złożoną ofertę prostym językiem. Konkretne priorytety ustalamy po analizie Twojej firmy i konkurencji."
  },
  {
    question: "Czy agencja z innego miasta obsługuje klientów z Gliwic?",
    answer: "Tak — pracujemy z Poznania, a firmy z Gliwic obsługujemy zdalnie. Współpraca przebiega online (Google Meet, Teams), a materiały i raporty udostępniamy w chmurze. Nie mamy biura w Gliwicach."
  },
  {
    question: "Ile kosztuje agencja marketingowa w Gliwicach?",
    answer: "Cena zależy od zakresu: liczby kanałów (SEO, Google Ads, Meta Ads, LinkedIn, social media), ilości treści i kreacji, potrzeby strony WWW oraz częstotliwości raportowania. Wycenę przygotowujemy po bezpłatnej rozmowie o zakresie. Budżet reklamowy płacony platformom jest zawsze osobną pozycją."
  },
  {
    question: "Jakie kampanie reklamowe są najskuteczniejsze dla Gliwic?",
    answer: "To zależy od branży i grupy docelowej. Dla firm IT i inżynieryjnych warto rozważyć LinkedIn Ads (targetowanie na stanowiska decyzyjne) i Google Ads na specjalistyczne frazy B2B, dla firm produkcyjnych — SEO pod frazy produktowe, dla e-commerce — kampanie z retargetingiem. Właściwy miks kanałów dobieramy po analizie, a skuteczność sprawdzamy na danych z kampanii."
  },
  {
    question: "Czym wyróżnia się Gliwice na rynku marketingowym Śląska?",
    answer: "Gliwice to ośrodek akademicki i technologiczny — z Politechniką Śląską, strefą ekonomiczną i firmami przemysłowymi. W takim otoczeniu marki B2B zwykle muszą wyróżniać się kompetencją i jasnym wyjaśnieniem oferty, nie tylko kreacją."
  },
  {
    question: "Czy oferujecie marketing dla firm technologicznych z Gliwic?",
    answer: "Tak. Dla firm technologicznych przygotowujemy m.in. SEO treści eksperckich, kampanie LinkedIn kierowane do kadry zarządzającej, Google Ads na frazy B2B o wysokiej intencji oraz content marketing (artykuły techniczne, opisy wdrożeń). Zakres dobieramy po rozmowie o Twojej ofercie i klientach."
  }
];

export default function AgencjaMarketingowaGliwice() {
  return (
    <>
      <Layout>
        <SEOHead
          title="Agencja marketingowa Gliwice - fotz studio | Marketing dla firm"
          description="Agencja marketingowa Gliwice. Fotz Studio — strony WWW, SEO, kampanie Google/Meta, social media dla firm z Gliwic. Bezpłatna konsultacja!"
          canonical="https://www.fotz-studio.pl/agencja-marketingowa/gliwice"
          keywords="agencja marketingowa gliwice, marketing internetowy gliwice, agencja reklamowa gliwice, seo gliwice, google ads gliwice, agencja marketingowa śląsk"
        />

        <ServiceSchema
          name="Agencja Marketingowa Gliwice"
          description="Kompleksowe usługi marketingu internetowego dla firm z Gliwic — SEO, Google Ads, Meta Ads, social media, strony internetowe — obsługa zdalna z Poznania."
          provider="Fotz Studio"
          areaServed="Gliwice"
        />
        <BreadcrumbSchema items={[
            { name: "Strona główna", url: "https://www.fotz-studio.pl" },
            { name: "Agencja Marketingowa Gliwice", url: "https://www.fotz-studio.pl/agencja-marketingowa/gliwice" }
          ]}/>
        <FAQSchema items={faqItems} />

        {/* Hero */}
        <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-gray-800/20 blur-3xl pointer-events-none" />

          <div className="container px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-sm text-foreground/80">
                  <MapPin className="w-4 h-4 text-yellow-400" /> Gliwice i cała Polska — współpraca online
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                Agencja Marketingowa{" "}
                <span className="text-yellow-400">Gliwice</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
                Kompleksowy marketing internetowy dla firm z Gliwic. SEO, Google Ads, Meta Ads, social media, strony internetowe — wszystko w jednej agencji. Pracujemy z Poznania, firmy z Gliwic obsługujemy zdalnie.
              </p>

              <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
                Gliwice to ośrodek technologiczny i przemysłowy Śląska. Firmy z takiego rynku potrzebują marketingu opartego na danych, mierzalnych celach i regularnej optymalizacji.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-400/90 text-gray-900 font-semibold">
                  <Link to="/kontakt">
                    Bezpłatna konsultacja <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/realizacje">Zobacz nasze realizacje</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Usługi marketingowe dla firm z{" "}
                  <span className="text-yellow-400">Gliwic</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Usługi dobierane do potrzeb firmy — od startupów technologicznych po firmy produkcyjne.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-yellow-400/30 transition-colors"
                  >
                    <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28 bg-card/30">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Dlaczego Fotz Studio dla firm z{" "}
                  <span className="text-yellow-400">Gliwic?</span>
                </h2>
                <p className="text-muted-foreground">
                  Strategia, kreacja i kampanie w jednym zespole — zdalnie, z Poznania.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Analiza przed działaniem",
                    desc: "Zanim zaproponujemy kanały, analizujemy Twoją ofertę, klientów i konkurencję w regionie. Rekomendacje opieramy na tej analizie, a nie na gotowym pakiecie."
                  },
                  {
                    icon: TrendingUp,
                    title: "Data-driven marketing",
                    desc: "Każda decyzja oparta na danych z GA4, Google Ads, Meta. Raportujemy ROAS, CPL, konwersje. Mierzymy to, co się liczy."
                  },
                  {
                    icon: Users,
                    title: "Stała osoba kontaktowa",
                    desc: "Masz jedną osobę odpowiedzialną za projekt i komunikację — spotkania prowadzimy online."
                  },
                  {
                    icon: Globe,
                    title: "Własna produkcja treści",
                    desc: "Video, zdjęcia, grafiki i strony WWW tworzymy we własnym zespole, więc kampanie i treści są spójne."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-6 rounded-2xl border border-border/40 bg-background"
                  >
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Od czego zależy wycena?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Nie mamy sztywnych pakietów. Wycenę przygotowujemy po rozmowie o zakresie, biorąc pod uwagę:
                </p>
              </div>

              <ul className="space-y-3 mb-10">
                {[
                  "liczbę kanałów — SEO, Google Ads, Meta Ads, LinkedIn, social media",
                  "ilość treści i kreacji do przygotowania, w tym video i zdjęcia",
                  "potrzebę nowej strony WWW lub przebudowy obecnej",
                  "częstotliwość raportowania i spotkań",
                  "budżet reklamowy — płacony platformom osobno, poza wynagrodzeniem agencji"
                ].map((factor, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{factor}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <Button asChild>
                  <Link to="/kontakt">Zapytaj o wycenę</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-yellow-400/20 to-gray-900/50">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Wyróżnij się na rynku Gliwic
              </h2>
              <p className="text-white/80 mb-8">
                Bezpłatna konsultacja — 30 minut, zero zobowiązań. Omówimy konkurencję, Twoją sytuację i zaproponujemy efektywne działania marketingowe dla Twojego biznesu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-400/90 font-semibold">
                  <Link to="/kontakt">
                    Umów konsultację <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-white/50 text-xs mt-6">
                Bez sprzedaży pod presją
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-heading font-bold mb-4">
                  Najczęstsze pytania — agencja marketingowa Gliwice
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-border/40 rounded-xl px-6 data-[state=open]:bg-yellow-400/5"
                  >
                    <AccordionTrigger className="py-4 hover:no-underline text-left font-heading font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Internal Linking */}
        <section className="py-12 border-t border-border/30 bg-card/20">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">
              Pozostałe miasta
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { label: "Agencja marketingowa Warszawa", to: "/agencja-marketingowa/warszawa" },
                { label: "Agencja marketingowa Kraków", to: "/agencja-marketingowa/krakow" },
                { label: "Agencja marketingowa Gdańsk", to: "/agencja-marketingowa/gdansk" },
                { label: "Agencja marketingowa Łódź", to: "/agencja-marketingowa/lodz" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-yellow-400/40 hover:text-yellow-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
