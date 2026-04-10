import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Search, BarChart3, MapPin, ShoppingCart, ArrowRight, CheckCircle, TrendingUp, Eye, Target, Zap, FileSearch, Link2, Code2, Globe } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "Audyt SEO",
    description: "Kompleksowa analiza techniczna Twojej strony, identyfikacja błędów i rekomendacje. Audytujemy Core Web Vitals, strukturę URL, indeksację i content.",
    href: "/seo/audyt",
    features: ["Analiza techniczna", "Core Web Vitals", "Raport z rekomendacjami"],
  },
  {
    icon: TrendingUp,
    title: "Pozycjonowanie stron",
    description: "Długoterminowa strategia SEO budująca organiczną widoczność. Optymalizacja on-page, link building i monitoring pozycji na kluczowe frazy.",
    href: "/seo/pozycjonowanie",
    features: ["Strategia słów kluczowych", "Link building", "Monitoring pozycji"],
  },
  {
    icon: MapPin,
    title: "SEO Lokalne Poznań",
    description: "Dominuj w lokalnych wynikach wyszukiwania. Optymalizacja Google Business Profile, cytaty NAP i strategie dla firm działających lokalnie.",
    href: "/seo/lokalne-poznan",
    features: ["Google Business Profile", "Cytaty NAP", "Mapy Google"],
  },
  {
    icon: MapPin,
    title: "Pozycjonowanie Google Maps",
    description: "Zwiększ widoczność w Mapach Google. Optymalizacja profilu, zbieranie opinii, lokalne słowa kluczowe i zarządzanie obecnością w mapach.",
    href: "/seo/google-maps",
    features: ["Optymalizacja profilu", "Zarządzanie opiniami", "Local Pack"],
  },
  {
    icon: ShoppingCart,
    title: "SEO dla e-commerce",
    description: "Specjalistyczne pozycjonowanie sklepów internetowych. Optymalizacja kart produktów, kategorii, filtrów i struktury danych produktowych.",
    href: "/seo/ecommerce",
    features: ["Schema produktowe", "Optymalizacja kategorii", "Filtry faceted"],
  },
  {
    icon: BarChart3,
    title: "Pozycjonowanie Poznań",
    description: "Dedykowane usługi SEO dla firm z Poznania i okolic. Lokalna ekspertyza, znajomość rynku i bezpośredni kontakt z zespołem.",
    href: "/seo/pozycjonowanie-poznan",
    features: ["Lokalna ekspertyza", "Bezpośredni kontakt", "Raporty miesięczne"],
  },
  {
    icon: FileSearch,
    title: "Optymalizacja On-Page",
    description: "Meta tagi, nagłówki, treści, schema markup, Core Web Vitals. Wszystko, co Google analizuje bezpośrednio na Twojej stronie.",
    href: "/seo/on-page",
    features: ["Meta tagi i H1-H6", "Core Web Vitals", "Schema markup JSON-LD"],
  },
  {
    icon: Link2,
    title: "SEO Off-Page i Link Building",
    description: "Budowanie autorytetu domeny przez wartościowe linki, digital PR i wzmianki. Naturalnie i bezpiecznie.",
    href: "/seo/off-page",
    features: ["Link building white hat", "Digital PR", "Analiza profilu linków"],
  },
  {
    icon: Zap,
    title: "Techniczne SEO",
    description: "Szybkość, indeksacja, crawl budget, robots.txt, sitemap, HTTPS. Fundament bez którego inne działania SEO nie dają efektów.",
    href: "/seo/techniczne",
    features: ["Core Web Vitals", "Optymalizacja crawl budget", "Audyt techniczny"],
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Budujemy profil backlinków wysokiej jakości: linki z mediów, portali branżowych i prasy lokalnej. Bezpiecznie i skutecznie.",
    href: "/seo/link-building",
    features: ["Linki z mediów i prasy", "Guest posting", "Broken link building"],
  },
  {
    icon: FileSearch,
    title: "Copywriting SEO",
    description: "Piszemy teksty, które rankują wysoko i konwertują. Analiza intencji wyszukiwania, optymalizacja fraz, treści, które sprzedają.",
    href: "/seo/copywriting-seo",
    features: ["Analiza intencji wyszukiwania", "Optymalizacja fraz", "Teksty konwertujące"],
  },
];

const stats = [
  { value: "150+", label: "Zoptymalizowanych stron", icon: Eye },
  { value: "Top 3", label: "Pozycje dla klientów", icon: Target },
  { value: "+340%", label: "Średni wzrost ruchu organicznego", icon: TrendingUp },
  { value: "98%", label: "Klientów z widocznym wzrostem", icon: Zap },
];

const faqs = [
  {
    question: "Ile trwa pozycjonowanie strony?",
    answer: "Pierwsze efekty widoczne są po 3-6 miesiącach. Pełne rezultaty SEO budują się w ciągu 6-12 miesięcy. To inwestycja długoterminowa – raz zbudowana widoczność utrzymuje się latami."
  },
  {
    question: "Czy SEO się opłaca dla małej firmy?",
    answer: "Zdecydowanie tak. SEO lokalne pozwala małym firmom konkurować z dużymi graczami w swoim regionie. Koszt pozyskania klienta przez SEO jest wielokrotnie niższy niż przez płatne reklamy."
  },
  {
    question: "Co obejmuje audyt SEO?",
    answer: "Audyt SEO obejmuje analizę techniczną (szybkość, indeksacja, Core Web Vitals), analizę on-page (treści, meta tagi, nagłówki), analizę off-page (profil linków) oraz rekomendacje z priorytetyzacją działań."
  },
  {
    question: "Jaka jest różnica między SEO a Google Ads?",
    answer: "SEO buduje długotrwałą, organiczną widoczność – efekty utrzymują się po zakończeniu działań. Google Ads daje natychmiastowy ruch, ale wymaga stałego budżetu. Najlepsza strategia łączy oba kanały."
  },
  {
    question: "Czy pozycjonujecie strony na WordPressie?",
    answer: "Tak, pozycjonujemy strony na każdej platformie – WordPress, Shopify, custom CMS i inne. Każda platforma wymaga specyficznego podejścia technicznego, które znamy i stosujemy."
  },
  {
    question: "Jak mierzycie efekty pozycjonowania?",
    answer: "Monitorujemy pozycje na wybrane frazy kluczowe, ruch organiczny z Google Analytics 4, widoczność w Google Search Console, Domain Rating w Ahrefs oraz konwersje i leady. Klient otrzymuje miesięczny raport z danymi i rekomendacjami."
  },
  {
    question: "Czy oferujecie pozycjonowanie lokalne w Poznaniu?",
    answer: "Tak, SEO lokalne w Poznaniu to nasza specjalizacja. Optymalizujemy Google Business Profile, budujemy cytaty NAP na lokalnych portalach i pozycjonujemy strony na frazy z nazwą miasta. Nasze case study pokazuje wzrost ruchu o 520% dla klienta lokalnego."
  },
  {
    question: "Ile kosztuje pozycjonowanie strony?",
    answer: "Koszt pozycjonowania zależy od konkurencyjności branży, obecnego stanu strony i zakresu działań. Typowe budżety SEO zaczynają się od 1500 zł miesięcznie dla firm lokalnych do 5000+ zł dla e-commerce i branż ogólnopolskich. Oferujemy bezpłatną wycenę po audycie."
  },
];

export default function SEOCluster() {
  return (
    <Layout>
      <SEOHead
        title="SEO i Pozycjonowanie Stron | Fotz Studio Poznań"
        description="Kompleksowe usługi SEO: audyt, pozycjonowanie, SEO lokalne, Google Maps. Zwiększ widoczność w Google i pozyskuj klientów organicznie."
        canonical="https://fotz.pl/seo"
        keywords="SEO, pozycjonowanie stron, audyt SEO, SEO lokalne, pozycjonowanie Poznań, Google Maps, optymalizacja"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "SEO i Pozycjonowanie", url: "https://fotz.pl/seo" },
        ]}
      />
      <ServiceSchema
        name="SEO i Pozycjonowanie - Fotz Studio"
        description="Kompleksowe usługi SEO: audyt techniczny, pozycjonowanie stron, SEO lokalne i optymalizacja e-commerce"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]"
            animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Organiczny wzrost
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              SEO i{" "}
              <span className="text-gradient">Pozycjonowanie</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Zwiększ widoczność Twojej strony w Google i przyciągnij klientów, którzy aktywnie szukają Twoich usług. Budujemy długoterminową strategię SEO opartą na danych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Bezpłatna konsultacja SEO
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/seo/audyt">Zamów audyt SEO</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Nasze usługi SEO</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od audytu technicznego po kompleksowe pozycjonowanie – dobieramy strategię do Twoich celów biznesowych.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SEO Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego SEO to <span className="text-gradient">najlepsza inwestycja?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                SEO to jedyny kanał marketingowy, który z czasem staje się tańszy. W przeciwieństwie do reklam płatnych, ruch organiczny nie wymaga stałego budżetu reklamowego – raz zbudowana widoczność generuje ruch przez lata.
              </p>
              <div className="space-y-4">
                {[
                  "Niższy koszt pozyskania klienta (CAC) niż w reklamach",
                  "Ruch organiczny rośnie nawet po zakończeniu współpracy",
                  "Użytkownicy z Google mają wyższy współczynnik konwersji",
                  "SEO buduje zaufanie – 70% użytkowników omija reklamy",
                  "Efekt kuli śnieżnej – każdy miesiąc wzmacnia pozycje",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border/50 p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Jak działamy?</h3>
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Audyt i analiza", desc: "Diagnozujemy stan Twojej strony i konkurencji" },
                    { step: "02", title: "Strategia SEO", desc: "Dobieramy słowa kluczowe i plan działań" },
                    { step: "03", title: "Optymalizacja", desc: "Wdrażamy zmiany techniczne i contentowe" },
                    { step: "04", title: "Link building", desc: "Budujemy autorytet domeny naturalnie" },
                    { step: "05", title: "Monitoring i raport", desc: "Śledzimy pozycje i raportujemy postępy" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold text-sm">{item.step}</span>
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.title}</div>
                        <div className="text-sm text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Article Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Pozycjonowanie stron internetowych — jak działa SEO i dlaczego warto inwestować?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pozycjonowanie stron internetowych (SEO — Search Engine Optimization) to proces optymalizacji strony www tak, aby zajmowała jak najwyższe pozycje w organicznych wynikach wyszukiwania Google. W Polsce ponad 95% wyszukiwań odbywa się przez Google, a 75% użytkowników nigdy nie przechodzi na drugą stronę wyników. Dlatego pozycjonowanie strony w Google to jedna z najskuteczniejszych form marketingu online — docierasz do osób, które aktywnie szukają Twoich produktów lub usług. Koszt pozyskania klienta (CAC) przez SEO jest średnio 5-7 razy niższy niż przez reklamy płatne, a efekty utrzymują się długoterminowo.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Optymalizacja on-page — fundament skutecznego SEO
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Optymalizacja on-page obejmuje wszystkie działania wykonywane bezpośrednio na stronie internetowej: od meta tagów (title, description), przez strukturę nagłówków H1-H6, aż po treści i linkowanie wewnętrzne. Poprawna optymalizacja on-page zapewnia, że Googlebot rozumie tematykę strony i przypisuje ją do odpowiednich zapytań. Schema markup (dane strukturalne JSON-LD) pomaga Google wyświetlać rich snippets — gwiazdki, FAQ, breadcrumby — co zwiększa CTR nawet o 30%. Core Web Vitals (LCP, FID, CLS) to od 2021 roku oficjalny czynnik rankingowy — szybkość ładowania strony bezpośrednio wpływa na pozycje w Google. Optymalizujemy każdy element strony zgodnie z wytycznymi Google Search Central.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Link building i SEO off-page — budowanie autorytetu domeny
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SEO off-page koncentruje się na działaniach poza stroną, przede wszystkim na pozyskiwaniu wartościowych linków zwrotnych (backlinków). Autorytet domeny (Domain Rating w Ahrefs) rośnie proporcjonalnie do jakości i liczby linków wskazujących na stronę. W Fotz Studio stosujemy wyłącznie white-hat link building: digital PR, guest posting na portalach branżowych, broken link building i lokalne cytaty NAP. Budowanie profilu linków to proces długoterminowy — unikamy sztucznych linków, które mogą skutkować karą algorytmiczną od Google. Naturalny profil linków w połączeniu z wartościowym contentem to recepta na trwałe, wysokie pozycje w wynikach wyszukiwania.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              SEO lokalne — pozycjonowanie dla firm działających lokalnie
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SEO lokalne to specjalizacja Fotz Studio — pomagamy firmom z Poznania i innych miast Polski dominować w lokalnych wynikach wyszukiwania. Optymalizacja Google Business Profile (dawniej Google Moja Firma) to pierwszy krok: uzupełniamy kategorie, opisy, godziny otwarcia, zdjęcia i zarządzamy opiniami. Lokalne SEO obejmuje też optymalizację strony pod frazy z nazwą miasta, budowanie cytatów NAP (Name, Address, Phone) na portalach branżowych i lokalnych oraz zbieranie opinii Google. Algorytm Google Maps bierze pod uwagę trzy czynniki: trafność, odległość i rozpoznawalność (prominence). Pozycjonowanie w Google Maps pozwala firmom lokalnym pojawić się w tzw. Local Pack — trzech wynikach mapowych wyświetlanych nad wynikami organicznymi. Dla firm usługowych i gastronomii Local Pack generuje nawet 50% całego ruchu z Google.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Skuteczne SEO lokalne wymaga systematycznego podejścia: regularne publikowanie Google Posts, odpowiadanie na opinie klientów, aktualizowanie informacji o firmie i budowanie relacji z lokalnymi portalami informacyjnymi. Monitorujemy pozycje w lokalnych wynikach za pomocą narzędzi BrightLocal i Whitespark, śledząc widoczność na mapach i w organicznych wynikach dla fraz z nazwą miasta. Firmy lokalne, które systematycznie inwestują w SEO lokalne, osiągają pozycje w top 3 Google Maps w ciągu 3-6 miesięcy.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Audyt SEO — diagnoza i plan naprawczy dla Twojej strony
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Każdą współpracę rozpoczynamy od szczegółowego audytu SEO. Nasz audyt obejmuje: analizę techniczną (crawlability, indeksacja, szybkość, bezpieczeństwo HTTPS), analizę on-page (treści, meta tagi, nagłówki, schema markup), analizę off-page (profil linków, cytaty NAP, domain rating) oraz analizę konkurencji (porównanie z top 10 wynikami dla głównych fraz). Audyt SEO to nie lista błędów, lecz priorytetyzowany plan naprawczy z jasnym harmonogramem wdrożeń. Identyfikujemy szybkie wygrane (quick wins) — zmiany, które dają natychmiastowe efekty, oraz działania strategiczne budujące widoczność długoterminowo.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              SEO dla e-commerce — pozycjonowanie sklepów internetowych
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sklepy internetowe mają specyficzne wyzwania SEO: tysiące podstron produktowych, duplikacja treści, filtry faceted, paginacja i canonical tags. Optymalizacja e-commerce SEO wymaga innego podejścia niż strony firmowe — pracujemy nad strukturą kategorii, schema produktowe (Product, Offer, AggregateRating), optymalizacją kart produktów i zarządzaniem indeksacją filtrów. Dobrze zoptymalizowany sklep internetowy generuje ruch na frazy long-tail o wysokim intencje zakupowym. Nasze case studies pokazują wzrosty ruchu organicznego o 200-500% w ciągu 6-12 miesięcy dla sklepów e-commerce.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              SEO techniczne — wydajność, indeksacja i Core Web Vitals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              SEO techniczne to fundament, bez którego inne działania SEO tracą na efektywności. Obejmuje: optymalizację szybkości ładowania (Core Web Vitals — LCP pod 2.5s, FID pod 100ms, CLS pod 0.1), poprawną konfigurację robots.txt i sitemap.xml, zarządzanie crawl budgetem, wdrożenie protokołu HTTPS, eliminację błędów 404 i redirect chains, oraz optymalizację mobile-first (Google indeksuje mobilną wersję strony). Stosujemy narzędzia takie jak Google Search Console, Ahrefs, Screaming Frog i PageSpeed Insights do ciągłego monitorowania zdrowia technicznego strony. Regularne audyty techniczne zapewniają, że Googlebot może efektywnie crawlować i indeksować wszystkie ważne podstrony.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Narzędzia SEO — czym się posługujemy w codziennej pracy?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Profesjonalne pozycjonowanie wymaga zaawansowanych narzędzi analitycznych. W Fotz Studio korzystamy z: Ahrefs (analiza backlinków, pozycji i konkurencji), Google Search Console (monitoring indeksacji i wydajności), Google Analytics 4 (analiza ruchu i konwersji), Screaming Frog (audyty techniczne i crawl), NeuronWriter (optymalizacja treści pod SEO semantyczne), PageSpeed Insights (Core Web Vitals) i BrightLocal (SEO lokalne i monitoring map). Każde narzędzie dostarcza unikalnych danych — ich połączenie daje pełny obraz widoczności strony i pozwala podejmować decyzje oparte na faktach, nie na intuicji.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Content marketing i SEO — jak treści wspierają pozycjonowanie?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Content marketing to integralna część strategii SEO. Regularne publikowanie wartościowych treści na blogu firmowym buduje topical authority — Google postrzega stronę jako eksperta w danej dziedzinie i nagradza wyższymi pozycjami. Każdy artykuł blogowy to nowa podstrona, która może rankować na dodatkowe frazy long-tail i przyciągać nowy ruch organiczny. Strategia content marketingowa obejmuje: badanie słów kluczowych (keyword research), analizę intencji wyszukiwania (search intent), tworzenie treści odpowiadających na pytania użytkowników i optymalizację pod kątem featured snippets. W Fotz Studio łączymy tworzenie treści z SEO copywritingiem — każdy tekst jest optymalizowany pod NeuronWriter, co gwarantuje pokrycie wszystkich semantycznie powiązanych fraz.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Pozycjonowanie stron Poznań — lokalna agencja SEO z doświadczeniem
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fotz Studio to agencja SEO z siedzibą w Poznaniu, specjalizująca się w pozycjonowaniu stron internetowych dla firm z Wielkopolski i całej Polski. Nasza lokalna ekspertyza oznacza znajomość rynku poznańskiego, bezpośredni kontakt z klientem i zrozumienie specyfiki lokalnych branż. Pozycjonowanie stron w Poznaniu prowadziliśmy dla firm z branży gastronomicznej, usługowej, produkcyjnej, medycznej i e-commerce. Oferujemy przejrzyste raporty miesięczne, regularne spotkania strategiczne i dedykowanego specjalistę SEO dla każdego klienta. Nasze podejście łączy dane z Ahrefs, Google Search Console i Google Analytics z kreatywnym content marketingiem.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              SEO a AI — jak sztuczna inteligencja zmienia pozycjonowanie w 2026?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wyszukiwanie zmienia się dynamicznie — AI Overviews w Google, odpowiedzi ChatGPT i Gemini zmieniają sposób, w jaki użytkownicy konsumują informacje. Strony, które są cytowane przez modele AI, zyskują nowy kanał widoczności i ruchu. Strategia SEO w 2026 roku musi uwzględniać nie tylko tradycyjne pozycjonowanie w Google, ale też optymalizację pod cytowania w AI — publikowanie oryginalnych badań, case studies z konkretnymi danymi i unikalnych insightów branżowych. Fotz Studio monitoruje AI visibility swoich klientów i wdraża strategie zwiększające szanse na cytowanie przez modele językowe.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Jak wybrać agencję SEO — na co zwrócić uwagę?
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wybierając agencję SEO, zwróć uwagę na: doświadczenie potwierdzone case studies z konkretnymi wynikami, transparentność w raportowaniu (dostęp do Google Search Console i Analytics), stosowanie wyłącznie metod white-hat SEO, brak długoterminowych umów wiążących bez możliwości rezygnacji oraz dedykowany zespół specjalistów. Unikaj agencji gwarantujących pozycję nr 1 w określonym czasie — Google nie pozwala na takie gwarancje. Dobra agencja SEO jasno komunikuje strategię, ryzyka i realistyczne oczekiwania co do terminów i wyników. W Fotz Studio oferujemy elastyczne warunki współpracy, miesięczne rozliczenia i pełną transparentność w każdym etapie.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Proces współpracy SEO z Fotz Studio — od audytu do wzrostu
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Współpraca z Fotz Studio rozpoczyna się od bezpłatnej konsultacji, podczas której omawiamy cele biznesowe, obecny stan strony i budżet. Następnie przeprowadzamy szczegółowy audyt SEO i przygotowujemy strategię z priorytetyzacją działań. W pierwszym miesiącu wdrażamy quick wins — zmiany techniczne i on-page dające najszybsze efekty. W kolejnych miesiącach budujemy content, profil linków i monitorujemy postępy. Klient otrzymuje dostęp do dashboardu z aktualnymi danymi o pozycjach, ruchu i konwersjach. Regularnie spotykamy się na calls strategicznych, aby omawiać wyniki i dostosowywać strategię do zmieniających się warunków rynkowych.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nasze podejście do SEO opiera się na trzech filarach: dane (wszystkie decyzje są poparte analityką), jakość (tworzymy wartościowe treści i pozyskujemy naturalne linki) oraz transparentność (klient wie dokładnie, co robimy i jakie efekty to przynosi). To podejście sprawia, że nasi klienci zostają z nami średnio ponad 18 miesięcy — bo widzą realne rezultaty i stały wzrost widoczności w Google.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-3">
              Mobile-first indexing i Core Web Vitals — wymogi Google w 2026
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Od 2021 roku Google stosuje mobile-first indexing — indeksuje mobilną wersję strony jako główną. Strona, która nie jest responsywna lub ładuje się wolno na smartfonie, traci pozycje niezależnie od jakości treści i linków. Core Web Vitals — Largest Contentful Paint (LCP), First Input Delay (FID) i Cumulative Layout Shift (CLS) — to mierzalne metryki wydajności, które bezpośrednio wpływają na ranking. Optymalizacja obejmuje kompresję obrazów (WebP, lazy loading), minimalizację JavaScript i CSS, wdrożenie CDN (Content Delivery Network) i optymalizację czcionek. W Fotz Studio regularnie monitorujemy Core Web Vitals wszystkich stron klientów i natychmiast reagujemy na pogorszenie wyników. Strony zoptymalizowane pod Core Web Vitals osiągają średnio 15-25% wyższy CTR w wynikach wyszukiwania Google. Każdy projekt SEO w Fotz Studio rozpoczyna się od audytu wydajności — mierzymy aktualne wyniki Core Web Vitals, identyfikujemy wąskie gardła i wdrażamy poprawki. Dla stron na WordPressie optymalizujemy wtyczki i konfigurację serwera, dla stron custom (React, Next.js, Vite) pracujemy bezpośrednio z kodem źródłowym, wdrażając lazy loading, code splitting i server-side rendering. Inwestycja w wydajność techniczną strony to nie tylko lepsze SEO — szybsza strona oznacza wyższy współczynnik konwersji, niższy bounce rate i lepsze doświadczenie użytkownika na każdym urządzeniu, zarówno desktop jak i mobilnym.
            </p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline font-medium text-sm">→ Google Ads</Link>
              <Link to="/social-media" className="text-primary hover:underline font-medium text-sm">→ Social Media</Link>
              <Link to="/content-marketing" className="text-primary hover:underline font-medium text-sm">→ Content Marketing</Link>
              <Link to="/case-studies/seo-lokalne-poznan-wzrost-ruchu" className="text-primary hover:underline font-medium text-sm">→ Case Study: SEO Lokalne Poznań</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Najczęstsze pytania o SEO</h2>
          </motion.div>
          <FAQSchema items={faqs} />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Gotowy na wzrost widoczności?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o Twoich celach. Bezpłatna konsultacja SEO pomoże nam zaproponować strategię dopasowaną do Twojego budżetu i branży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+48790814814">Zadzwoń: 790 814 814</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-heading font-bold text-lg mb-6">Powiązane usługi</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Google Ads", href: "/performance-marketing/google-ads" },
              { label: "Content Marketing", href: "/content-marketing" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Social Media", href: "/social-media" },
              { label: "E-commerce", href: "/uslugi/strony-internetowe/ecommerce" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
