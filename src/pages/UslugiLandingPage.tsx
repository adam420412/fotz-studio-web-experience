import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FAQSchema,
  ServiceSchema,
  BreadcrumbSchema,
  OrganizationSchema,
} from "@/components/seo/StructuredData";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  Target,
  Zap,
  TrendingUp,
  ShoppingCart,
  BarChart,
  Search,
  Palette,
  Smartphone,
  Shield,
  ArrowRight,
  Phone,
  CheckCircle2,
  Clock,
  Star,
  Users,
  Layers,
  Code2,
  Rocket,
  MousePointerClick,
  Eye,
  MessageSquare,
} from "lucide-react";

const faqItems = [
  {
    question: "Co to jest landing page?",
    answer:
      "Landing page (strona lądowania) to pojedyncza strona internetowa zaprojektowana pod jeden konkretny cel — sprzedaż produktu lub usługi, zbieranie leadów, zapis na webinar lub pobranie e-booka. W odróżnieniu od typowej strony firmowej landing page nie ma rozbudowanej nawigacji — cały układ skupia uwagę odwiedzającego na jednym wezwaniu do działania (CTA). Dzięki temu konwersja landing page jest zazwyczaj znacznie wyższa niż standardowych stron www.",
  },
  {
    question: "Ile kosztuje landing page?",
    answer:
      "Cena landing page w Fotz Studio zaczyna się od 2 000 zł za prostą stronę lądowania do kampanii reklamowej. Landing page z zaawansowanymi animacjami, integracją CRM i A/B testami kosztuje od 5 000 do 10 000 zł. Każdą wycenę przygotowujemy bezpłatnie i indywidualnie — skontaktuj się z nami, podaj cel kampanii i budżet, a otrzymasz ofertę w ciągu 24 godzin.",
  },
  {
    question: "Jak długo trwa tworzenie landing page?",
    answer:
      "Prosty landing page realizujemy w 5–10 dni roboczych. Landing page z rozbudowaną grafiką, animacjami i integracjami (HubSpot, Mailchimp, Zapier) — w 2–4 tygodnie. Czas zależy głównie od szybkości dostarczenia materiałów (teksty, zdjęcia) i liczby rund poprawek. Przy pilnych projektach reklamowych możemy skrócić czas realizacji do 3–5 dni.",
  },
  {
    question: "Jaka powinna być dobra strona landing page?",
    answer:
      "Dobry landing page ma: jeden jasny cel (nie rozpraszaj uwagi linkami do innych stron), mocny headline trafiający w problem klienta, wyraźne CTA (przycisk lub formularz) widoczne bez scrollowania, social proof (opinie, liczby, logotypy klientów), szybki czas ładowania poniżej 3 sekund i pełną responsywność mobile. Fotz Studio projektuje landing page według sprawdzonego frameworku konwersji.",
  },
  {
    question: "Czy landing page pomaga w reklamach Google i Meta?",
    answer:
      "Tak — landing page to kluczowy element skutecznych kampanii Google Ads i Meta Ads. Google nagradza trafność strony lądowania (Landing Page Experience) obniżonym CPC i wyższym Quality Score. Meta Ads z dobrze zoptymalizowanym landing page generują niższy koszt leada i wyższy ROAS. Nasze landing page są projektowane z myślą o kampaniach płatnych — szybkość, dopasowanie treści do reklamy i śledzenie konwersji w standardzie.",
  },
  {
    question: "Czy mogę samodzielnie edytować landing page?",
    answer:
      "Tak. Tworzymy landing page na platformach umożliwiających edycję bez znajomości kodu — WordPress + Elementor, Webflow lub dedykowany panel. Możesz samodzielnie zmieniać teksty, zdjęcia, kolory i treści formularzy. Jeśli wolisz, oferujemy też model abonamentowy, gdzie my zajmujemy się aktualizacjami i optymalizacją konwersji.",
  },
  {
    question: "Czym różni się landing page od strony www?",
    answer:
      "Strona www to kompleksowa witryna firmy z wieloma podstronami, nawigacją i różnymi celami. Landing page to pojedyncza strona z jednym celem i jednym wezwaniem do działania — zaprojektowana specjalnie do kampanii reklamowych lub konkretnych akcji marketingowych. Landing page konwertuje lepiej w kampaniach płatnych, bo nie rozprasza uwagi odwiedzającego.",
  },
  {
    question: "Czy tworzycie landing page do kampanii Google Ads?",
    answer:
      "Tak — to jedna z naszych specjalności. Projektujemy landing page z uwzględnieniem Quality Score Google Ads: dopasowanie treści do słów kluczowych kampanii, szybkość ładowania (Core Web Vitals), jasne CTA i tracking konwersji przez Google Tag Manager. Wielu naszych klientów obniżyło CPC o 20–40% po przejściu z ogólnej strony firmowej na dedykowany landing page.",
  },
];

const packages = [
  {
    title: "Landing Page Basic",
    desc: "Szybki landing page do kampanii reklamowej",
    price: "od 2 000 zł",
    features: [
      "1 strona + Thank You Page",
      "Projekt graficzny w Figma",
      "Responsywność mobile",
      "Formularz kontaktowy / CTA",
      "Google Analytics + Meta Pixel",
      "Czas realizacji: 7–10 dni",
    ],
  },
  {
    title: "Landing Page Pro",
    desc: "Rozbudowany landing z animacjami i integracjami",
    price: "od 4 500 zł",
    popular: true,
    features: [
      "Landing + Thank You + Upsell Page",
      "Animacje i micro-interactions",
      "Integracja CRM / Mailchimp / HubSpot",
      "A/B testing setup",
      "Google Tag Manager + pełne śledzenie konwersji",
      "Heatmapy i sesje nagrywane (Hotjar)",
      "Czas realizacji: 2–3 tygodnie",
    ],
  },
  {
    title: "Landing Page Enterprise",
    desc: "Kampania z wieloma wariantami i optymalizacją CRO",
    price: "od 9 000 zł",
    features: [
      "Wielowariantowy funnel sprzedażowy",
      "Personalizacja treści wg źródła ruchu",
      "Zaawansowane A/B testy (Google Optimize / VWO)",
      "Integracja z systemem płatności",
      "Raportowanie i optymalizacja miesięczna",
      "Opieka CRO przez 3 miesiące",
      "Czas realizacji: 4–6 tygodni",
    ],
  },
];

const useCases = [
  {
    icon: ShoppingCart,
    title: "Sprzedaż produktu lub usługi",
    desc: "Landing page skupiony na jednym produkcie lub usłudze. Idealny do kampanii Google Shopping, Meta Ads i e-mail marketingu.",
  },
  {
    icon: Users,
    title: "Generowanie leadów (B2B)",
    desc: "Strona z formularzem kontaktowym lub kalkulatorem wyceny. Zbiera kwalifikowane leady dla Twojego działu sprzedaży.",
  },
  {
    icon: MessageSquare,
    title: "Zapis na webinar / event",
    desc: "Landing page budujący listę zapisów z integracją z platformami webinarowymi (Zoom, ClickMeeting, Webinarjam).",
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Meta Ads",
    desc: "Strona lądowania zoptymalizowana pod Quality Score i Landing Page Experience — niższy CPC, wyższy ROAS.",
  },
  {
    icon: Eye,
    title: "Promocje sezonowe",
    desc: "Szybko tworzone strony do akcji promocyjnych: Black Friday, wyprzedaże, oferty ograniczone czasowo.",
  },
  {
    icon: MousePointerClick,
    title: "Testy nowych produktów / pivot",
    desc: "Szybki landing page do walidacji nowego pomysłu lub produktu — sprawdź zainteresowanie rynku przed pełnym wdrożeniem.",
  },
];

const processSteps = [
  {
    icon: Target,
    step: "01",
    title: "Cel i brief",
    desc: "Ustalamy jeden cel konwersji, grupę docelową, ofertę i USP. Definiujemy metryki sukcesu (CR%, koszt leada, ROAS).",
  },
  {
    icon: Palette,
    step: "02",
    title: "Projekt UX/UI",
    desc: "Wireframe i projekt graficzny w Figma. Projektujemy ścieżkę konwersji: attention → interest → desire → action.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Kodowanie i integracje",
    desc: "Implementacja z myślą o Core Web Vitals, tracking konwersji GTM, integracja CRM i narzędzi analitycznych.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Testy i wdrożenie",
    desc: "Testy na urządzeniach, speed test (PageSpeed Insights), testy formularzy i ścieżek konwersji. Wdrożenie w 24h.",
  },
];

const stats = [
  { value: "200+", label: "Landing page zrealizowanych", icon: Layers },
  { value: "+35%", label: "Średni wzrost CR po rebrandingu", icon: TrendingUp },
  { value: "3s", label: "Docelowy czas ładowania", icon: Zap },
  { value: "24/7", label: "Monitoring i wsparcie", icon: Shield },
];

const FadeInView = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function UslugiLandingPage() {
  return (
    <>
      <SEOHead
        title="Landing Page — Tworzenie Stron Lądowania dla Kampanii"
        description="Landing page dla firm — projektujemy skuteczne strony lądowania do kampanii Google Ads, Meta Ads i e-mail marketingu. Wysoka konwersja, szybkie wdrożenie…"
        canonical="https://fotz.pl/uslugi/landing-page"
        keywords="landing page, strona lądowania, landing page tworzenie, landing page dla firmy, landing page cena, konwersja landing page"
      />

      <ServiceSchema
        name="Landing Page — Tworzenie Stron Lądowania"
        description="Projektowanie i tworzenie landing page dla firm. Strony lądowania zoptymalizowane pod kampanie Google Ads, Meta Ads i generowanie leadów."
        provider="FOTZ Studio"
        areaServed="Polska"
      />

      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" },
          { name: "Landing Page", url: "https://fotz.pl/uslugi/landing-page" },
        ]}
      />

      <FAQSchema
        items={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      <OrganizationSchema />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px]"
            />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
                  <MousePointerClick className="w-4 h-4" />
                  Maksymalna konwersja, jeden cel
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight"
              >
                <span className="text-gradient">Landing Page</span>
                <br />
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  który zamienia odwiedzających w klientów
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Projektujemy landing page zoptymalizowane pod konwersję —
                idealne do kampanii Google Ads, Meta Ads i e-mail marketingu.
                Jeden cel, jedna strona, maksymalny efekt.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Button
                  asChild
                  size="lg"
                  className="group px-8 py-6 shadow-lg shadow-primary/20"
                >
                  <Link to="/kontakt">
                    Bezpłatna wycena landing page
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 border-2"
                >
                  <a href="tel:+48790814814">
                    <Phone className="mr-2 h-5 w-5" />
                    +48 790 814 814
                  </a>
                </Button>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl md:text-3xl font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* What is Landing Page */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 text-center">
                  Co to jest landing page i kiedy go potrzebujesz?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  <strong className="text-foreground">Landing page</strong> (strona lądowania) to
                  pojedyncza strona internetowa zaprojektowana pod jeden konkretny cel —
                  sprzedaż, generowanie leadów lub zapis do bazy mailingowej. W odróżnieniu
                  od klasycznej strony firmowej, landing page nie ma rozbudowanej nawigacji
                  ani linków prowadzących w bok — wszystko skupia uwagę na{" "}
                  <strong className="text-foreground">jednym wezwaniu do działania (CTA)</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Według badań HubSpot firmy z 10–15 landing page generują o 55% więcej
                  leadów niż te, które mają mniej niż 10. Dobrze zaprojektowany landing
                  page może osiągać współczynnik konwersji na poziomie 5–25%, podczas gdy
                  standardowe strony www rzadko przekraczają 1–2%.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Landing page sprawdza się wszędzie tam, gdzie kierujesz ruch z kampanii
                  reklamowej, e-maila lub mediów społecznościowych i chcesz, by odwiedzający
                  wykonał jedno konkretne działanie — zostawił kontakt, kupił produkt lub
                  zapisał się na newsletter.
                </p>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Kiedy warto stworzyć landing page?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Landing page sprawdza się w każdej sytuacji, gdy kierujesz ruch
                  z kampanii i zależy Ci na jednym konkretnym rezultacie.
                </p>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCases.map((item, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all h-full">
                    <item.icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-heading font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ile kosztuje landing page? Pakiety i cennik
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Każdy projekt wyceniamy indywidualnie, ale orientacyjne przedziały cenowe
                  pomogą Ci zaplanować budżet.
                </p>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div
                    className={`relative p-8 rounded-2xl border h-full flex flex-col ${
                      pkg.popular
                        ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
                        : "border-border/50 bg-card"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                          NAJPOPULARNIEJSZY
                        </span>
                      </div>
                    )}
                    <div className="mb-6">
                      <h3 className="text-xl font-heading font-bold mb-1">
                        {pkg.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {pkg.desc}
                      </p>
                      <div className="text-3xl font-bold text-primary">
                        {pkg.price}
                      </div>
                    </div>
                    <ul className="space-y-3 flex-1 mb-8">
                      {pkg.features.map((feature, fi) => (
                        <li
                          key={fi}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      variant={pkg.popular ? "default" : "outline"}
                      className="w-full"
                    >
                      <Link to="/kontakt">Zapytaj o wycenę</Link>
                    </Button>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Jak tworzymy landing page — nasz proces
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Od briefu do wdrożenia w 1–4 tygodnie. Każdy etap jest transparentny —
                  wiesz dokładnie, na jakim etapie jest Twój projekt.
                </p>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <FadeInView key={index} delay={index * 0.1}>
                  <div className="text-center p-6 rounded-2xl bg-card border border-border/50">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary/20 mb-2">
                      {step.step}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* What makes our landing pages convert */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-center">
                  Co sprawia, że nasze landing page konwertują?
                </h2>
              </FadeInView>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: Target,
                    title: "Jeden cel, jedno CTA",
                    desc: "Każdy landing page ma jeden jasny cel. Brak rozpraszającej nawigacji i linków wewnętrznych sprawia, że odwiedzający koncentruje się na działaniu.",
                  },
                  {
                    icon: Zap,
                    title: "Szybkość poniżej 3 sekund",
                    desc: "Każda sekunda opóźnienia ładowania zmniejsza konwersję o 7%. Nasze landing page osiągają wynik Core Web Vitals Passed w Google PageSpeed.",
                  },
                  {
                    icon: Smartphone,
                    title: "Mobile-first design",
                    desc: "Ponad 60% ruchu z kampanii Meta Ads trafia z urządzeń mobilnych. Projektujemy landing page od razu pod smartfona — nie jako afterthought.",
                  },
                  {
                    icon: BarChart,
                    title: "Pełne śledzenie konwersji",
                    desc: "Instalujemy Google Tag Manager, Meta Pixel, Google Analytics 4 i zdarzenia konwersji. Wiesz dokładnie, skąd pochodzą Twoi klienci.",
                  },
                  {
                    icon: Star,
                    title: "Social proof i dowód społeczny",
                    desc: "Opinie, liczby, logotypy klientów, zdjęcia zespołu — projektujemy elementy budujące zaufanie w kluczowych momentach ścieżki konwersji.",
                  },
                  {
                    icon: Search,
                    title: "Zoptymalizowany pod Quality Score",
                    desc: "Dopasowanie treści landing page do słów kluczowych kampanii Google Ads obniża CPC nawet o 30–40% i poprawia pozycję reklam.",
                  },
                ].map((item, index) => (
                  <FadeInView key={index} delay={index * 0.08}>
                    <div className="flex gap-4 p-6 rounded-2xl bg-background border border-border/50">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeInView>
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Często zadawane pytania o landing page
                </h2>
              </div>
            </FadeInView>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <AccordionItem
                      value={`item-${index}`}
                      className="border border-border/50 rounded-xl px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left font-medium hover:text-primary py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg dark:prose-invert max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-heading font-bold mb-6">
                Landing page a strona internetowa — kluczowe różnice
              </h2>
              <p className="text-muted-foreground mb-4">
                Wiele firm popełnia błąd, kierując ruch z kampanii Google Ads lub Meta Ads na
                główną stronę www zamiast na dedykowany landing page. To kosztowna pomyłka —
                strona główna firmy ma wiele celów naraz (informowanie, budowanie marki, nawigacja
                do podstron), podczas gdy reklama ma jeden konkretny cel. Ten rozdźwięk powoduje
                wysoki współczynnik odrzuceń i niską konwersję.
              </p>
              <p className="text-muted-foreground mb-6">
                Dedykowany landing page dopasowany do treści reklamy (message match) i prowadzący
                do jednego CTA może zwiększyć konwersję nawet 2–5 razy w porównaniu z kierowaniem
                na stronę główną. Fotz Studio tworzy landing page jako integralną część strategii
                kampanijnej — nie jako odizolowany element.
              </p>

              <h2 className="text-3xl font-heading font-bold mb-6">
                Jak mierzyć skuteczność landing page?
              </h2>
              <p className="text-muted-foreground mb-4">
                Kluczowe metryki landing page to: współczynnik konwersji (CR%), współczynnik
                odrzuceń, czas spędzony na stronie, czas do pierwszej interakcji (FID) i wynik
                Core Web Vitals. W Fotz Studio wdrażamy pełne śledzenie konwersji przez Google
                Analytics 4 i Google Tag Manager — możesz śledzić każde kliknięcie, przewinięcie
                i wypełnienie formularza.
              </p>
              <p className="text-muted-foreground mb-6">
                Dla klientów z budżetem reklamowym powyżej 5 000 zł miesięcznie zalecamy
                wdrożenie Hotjar lub Microsoft Clarity — narzędzi do nagrywania sesji i map ciepła,
                które pokazują, gdzie użytkownicy klikają, zatrzymują się i rezygnują. Te dane
                pozwalają na ciągłą optymalizację (CRO — Conversion Rate Optimization).
              </p>

              <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
                <Link
                  to="/uslugi/strony-internetowe"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  → Tworzenie stron internetowych
                </Link>
                <Link
                  to="/seo/pozycjonowanie"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  → Pozycjonowanie SEO
                </Link>
                <Link
                  to="/performance-marketing"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  → Kampanie Google Ads
                </Link>
                <Link
                  to="/social-media/obsluga"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  → Social media marketing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
