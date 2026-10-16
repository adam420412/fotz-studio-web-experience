import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, ShoppingCart, CreditCard, Truck, BarChart3, Settings,
  CheckCircle2, MapPin, Smartphone, Shield, Video, Store, Laptop
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const audiences = [
  {
    icon: Store,
    title: "Sklepy stacjonarne, które chcą sprzedawać także w sieci",
    desc: "Butiki, księgarnie, delikatesy czy pracownie rzemieślnicze ze Starego Miasta, Kazimierza albo Podgórza często mają wierną grupę klientów na miejscu. Sklep internetowy pozwala dotrzeć do nich także wtedy, gdy nie mogą przyjść osobiście — i do osób spoza miasta."
  },
  {
    icon: Laptop,
    title: "Marki D2C i producenci z Małopolski",
    desc: "Kosmetyki, odzież, ceramika, żywność regionalna, produkty dla turystów. Dla takich firm sklep online jest głównym kanałem sprzedaży, więc liczy się czytelny układ strony, dobre zdjęcia produktów i prosta ścieżka zakupowa."
  },
  {
    icon: Settings,
    title: "Firmy B2B i hurtownie",
    desc: "Kraków ma silne zaplecze firm usługowych i technologicznych, a w regionie działa wielu dystrybutorów i producentów. Dla nich projektujemy sklepy z cennikami dla stałych odbiorców, zamówieniami powtarzalnymi i integracją z systemem magazynowym."
  }
];

const features = [
  {
    icon: Smartphone,
    title: "Responsywność i urządzenia mobilne",
    desc: "Duża część zakupów zaczyna się na telefonie, dlatego widok mobilny projektujemy równolegle z wersją desktopową. Przyciski, filtry i koszyk muszą działać wygodnie na ekranie telefonu, a nie tylko „mieścić się” na ekranie."
  },
  {
    icon: CreditCard,
    title: "Płatności i składanie zamówień",
    desc: "Podłączamy bramki płatności popularne w Polsce, takie jak PayU, Przelewy24 czy Stripe, z BLIK-iem i szybkimi płatnościami. Dobór operatora zależy od platformy i od tego, z kim masz już podpisaną umowę."
  },
  {
    icon: Truck,
    title: "Wysyłka i zwroty",
    desc: "Integracja z firmami kurierskimi i paczkomatami (InPost, DPD, DHL lub agregatory przesyłek) ustawiana jest tak, by etykiety i statusy przesyłek generowały się z panelu sklepu, bez ręcznego przepisywania danych."
  },
  {
    icon: BarChart3,
    title: "Analityka i pomiar sprzedaży",
    desc: "Konfigurujemy GA4, piksel Meta i zdarzenia e-commerce, żebyś widział, skąd przychodzą klienci i na którym etapie porzucają koszyk. To podstawa do późniejszych decyzji o reklamie i zmianach w sklepie."
  },
  {
    icon: Settings,
    title: "Zarządzanie produktami i integracje",
    desc: "Funkcjonalny panel, w którym samodzielnie dodasz produkt, zmienisz cenę czy uruchomisz promocję. Połączenie z ERP, programem magazynowym, CRM albo Allegro sprawdzamy przed wyceną — zakres zależy od tego, jakie API udostępnia dany system."
  },
  {
    icon: Shield,
    title: "Bezpieczeństwo i ochrona danych osobowych",
    desc: "Certyfikat SSL, kopie zapasowe, aktualizacje i zgody zgodne z RODO. Przygotowujemy miejsce na regulamin i politykę prywatności oraz mechanizmy przetwarzania danych osobowych, a treść dokumentów prawnych warto skonsultować z prawnikiem."
  }
];

const platforms = [
  {
    name: "WooCommerce",
    desc: "Sklep oparty na WordPress — elastyczny, z pełnym dostępem do kodu i dobrym zapleczem do treści blogowych. Wygodny, gdy firma ma już stronę na tym systemie lub chce rozwijać sklep krok po kroku."
  },
  {
    name: "Shopify",
    desc: "Platforma w abonamencie, w której hosting i aktualizacje są po stronie dostawcy. Dobra, gdy chcesz szybko uruchomić sprzedaż online, i dla marek, które planują sprzedaż za granicę."
  },
  {
    name: "PrestaShop",
    desc: "Rozwiązanie open source dla większego asortymentu, wielu wariantów produktów i rozbudowanych zasad cenowych. Wymaga nieco więcej pracy przy utrzymaniu."
  },
  {
    name: "Sklep dedykowany",
    desc: "Innowacyjny sklep pisany pod konkretny model sprzedaży, na przykład konfigurator produktu albo portal B2B. Sensowny wtedy, gdy gotowe platformy wyraźnie ograniczają Twój biznes."
  }
];

const process = [
  {
    number: "01",
    title: "Rozmowa i analiza potrzeb",
    desc: "Na spotkaniu online poznajemy asortyment, klientów i sposób obsługi zamówień. Bez zrozumienia specyfiki Twojej branży, obecnych narzędzi i planów trudno dobrać rozwiązanie. Na tej podstawie proponujemy platformę i zakres prac."
  },
  {
    number: "02",
    title: "Wycena i harmonogram",
    desc: "Przygotowujemy wycenę z listą funkcji i integracji oraz harmonogram etapów. Czas realizacji ustalamy po doprecyzowaniu zakresu — zależy od liczby produktów, integracji i tempa dostarczania treści."
  },
  {
    number: "03",
    title: "Projekt graficzny i UX",
    desc: "Projektujemy strony kategorii, kartę produktu, koszyk i checkout. Design opieramy na Twoim logo, kolorach i stylu komunikacji, a makiety zatwierdzasz przed programowaniem."
  },
  {
    number: "04",
    title: "Wdrożenie, testy i start",
    desc: "Programista wdraża sklep, podłącza płatności, wysyłkę i analitykę. Testujemy zamówienia na różnych urządzeniach, a po starcie pokazujemy, jak obsługiwać panel."
  }
];

const faqItems = [
  {
    question: "Czy FOTZ Studio ma biuro w Krakowie?",
    answer: "Nie. Nasz zespół pracuje w Poznaniu, a firmy z Krakowa obsługujemy zdalnie: spotkania prowadzimy online, makiety i wersje testowe udostępniamy przez link, a materiały wymieniamy cyfrowo. Jeśli projekt wymaga sesji zdjęciowej produktów na miejscu, możliwość wyjazdu ustalamy osobno — nie jest częścią standardowej oferty."
  },
  {
    question: "Ile kosztuje sklep internetowy w Krakowie?",
    answer: "Nie mamy jednego cennika, bo koszt zależy od platformy, liczby produktów, zakresu integracji i tego, czy projekt graficzny powstaje od zera. Wycena nie zależy od miasta. Po krótkiej rozmowie przygotowujemy bezpłatną wycenę z rozpisanym zakresem, żebyś mógł porównać ją z innymi ofertami."
  },
  {
    question: "Ile trwa stworzenie sklepu internetowego?",
    answer: "To zależy od zakresu: prosty sklep na gotowej platformie powstaje szybciej niż sklep z integracją ERP czy projektem B2B. Termin wpisujemy do harmonogramu po ustaleniu funkcji. Najczęstszą przyczyną opóźnień są brakujące opisy i zdjęcia produktów, więc planujemy je od początku."
  },
  {
    question: "Którą platformę wybrać?",
    answer: "Jeśli masz już stronę na WordPress, naturalnym wyborem bywa WooCommerce. Shopify sprawdzi się przy szybkim starcie i sprzedaży zagranicznej, PrestaShop przy dużym katalogu, a sklep dedykowany przy nietypowym modelu sprzedaży. Rekomendację uzasadniamy podczas rozmowy, bez forsowania jednej technologii."
  },
  {
    question: "Czy przenosicie istniejący sklep na nową platformę?",
    answer: "Tak. Jeśli masz już swój sklep internetowy na innej platformie, możemy przygotować migrację produktów, kategorii i klientów oraz przekierowania adresów, żeby nie stracić ruchu z wyszukiwarki. Najpierw sprawdzamy, jakie dane da się wyeksportować ze starego systemu."
  },
  {
    question: "Czy pomagacie w promocji sklepu po uruchomieniu?",
    answer: "Tak. Możemy prowadzić pozycjonowanie, kampanie Google Ads i Meta Ads oraz przygotować zdjęcia i wideo produktowe. Nie obiecujemy konkretnych pozycji w Google ani poziomu sprzedaży — ustalamy cele i raportujemy, co działa."
  }
];

export default function SklepyInternetoweKrakow() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Tworzenie sklepów internetowych Kraków | Sklep internetowy"
        description="Sklep internetowy Kraków: projekt i wdrożenie e-commerce na WooCommerce, Shopify lub PrestaShop. Obsługujemy firmy z Krakowa zdalnie z Poznania. Bezpłatna wycena."
        canonical="https://www.fotz-studio.pl/uslugi/sklepy-internetowe/krakow"
        keywords="sklep internetowy Kraków, tworzenie sklepów internetowych Kraków, sklep internetowy w Krakowie, e-commerce Kraków, WooCommerce Kraków, Shopify Kraków, PrestaShop Kraków"
      />

      <ServiceSchema
        name="Tworzenie sklepów internetowych Kraków"
        description="Projektowanie i wdrażanie sklepów internetowych dla firm z Krakowa i Małopolski, realizowane zdalnie przez zespół FOTZ Studio z Poznania. WooCommerce, Shopify, PrestaShop i sklepy dedykowane."
        provider="Fotz Studio"
        areaServed="Kraków"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Sklepy internetowe", url: "https://www.fotz-studio.pl/uslugi/sklepy-internetowe" },
          { name: "Kraków", url: "https://www.fotz-studio.pl/uslugi/sklepy-internetowe/krakow" }
        ]}/>
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background via-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full bg-[#0F3053]/8 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-foreground/80">
                <MapPin className="w-4 h-4 text-primary" /> Kraków i Małopolska — współpraca zdalna z Poznania
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Tworzenie sklepów internetowych Kraków —{" "}
              <span className="text-gradient">sklep internetowy dla Twojej firmy</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Projektujemy i wdrażamy sklepy dla firm z Krakowa: od pierwszej rozmowy o asortymencie, przez projekt graficzny, po start sprzedaży i wsparcie techniczne. Pracujemy na WooCommerce, Shopify i PrestaShop, a gdy trzeba — budujemy rozwiązanie dedykowane.
            </motion.p>

            <motion.p variants={fadeIn} className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto">
              FOTZ Studio to agencja reklamowa i produkcyjna z Poznania. Nie mamy biura w Krakowie — współpraca odbywa się online, a dzięki temu klient z Małopolski ma ten sam dostęp do zespołu co firma z Wielkopolski.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/kontakt">
                  Poproś o wycenę <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz nasze realizacje</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Sklep internetowy w Krakowie —{" "}
                <span className="text-gradient">dla kogo projektujemy sklepy online</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Krakowski rynek jest różnorodny: obok handlu nastawionego na turystów i mieszkańców działają tu marki rzemieślnicze, firmy technologiczne i hurtownie obsługujące cały region. Każda z tych grup potrzebuje innego sklepu, dlatego zaczynamy od Twojego biznesu, a nie od szablonu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {audiences.map((a, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-card/20">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <a.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted-foreground">{a.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Profesjonalny sklep internetowy —{" "}
                <span className="text-gradient">funkcjonalność, design i integracja</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dobry sklep to nie tylko ładna witryna. To zestaw narzędzi, które pozwalają przyjąć zamówienie, pobrać płatność, wysłać paczkę i zmierzyć wyniki — przy jak najmniejszej ręcznej pracy po Twojej stronie.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Technologia dopasowana do{" "}
                <span className="text-gradient">Twojego sklepu</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tworzenie sklepów internetowych z wykorzystaniem gotowych platform jest zwykle szybsze i tańsze w utrzymaniu. Rozwiązanie dedykowane proponujemy dopiero wtedy, gdy wymagania tego naprawdę potrzebują.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((p, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-card/20 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-lg">{p.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak przebiega proces tworzenia sklepu internetowego?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Cztery etapy, po których wiesz, co zostało zrobione i co jest następne. Z klientem z Krakowa pracujemy dokładnie tak samo jak z firmą z Poznania — przez wideorozmowy, wspólne dokumenty i wersję testową sklepu dostępną pod linkiem.
              </p>
            </motion.div>

            <div className="space-y-6">
              {process.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-6 p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <div className="text-4xl font-heading font-bold text-primary/20 shrink-0 leading-none">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing + remote work */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Wycena — od czego zależy koszt sklepu?
              </h2>
              <p className="text-muted-foreground mb-4">
                Nie publikujemy jednego cennika, bo dwa sklepy o podobnym wyglądzie mogą wymagać zupełnie innej pracy. Na wycenę wpływają:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                {[
                  "wybrana platforma i sposób hostingu,",
                  "liczba produktów, wariantów i kategorii,",
                  "integracje z płatnościami, kurierami, ERP lub Allegro,",
                  "projekt od zera albo na bazie gotowego motywu,",
                  "migracja danych z obecnego sklepu,",
                  "przygotowanie treści, zdjęć i wideo produktów."
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-4">
                Po rozmowie dostajesz ofertę z rozpisanym zakresem. Dzięki temu łatwo porównasz ją z innymi propozycjami i wybierzesz wariant, który mieści się w budżecie — zostawiamy też pole do dopasowania zakresu.
              </p>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Współpraca zdalna z firmami z Krakowa
              </h2>
              <p className="text-muted-foreground mb-4">
                Zespół FOTZ pracuje w Poznaniu i nie ma biura w Krakowie. W praktyce nie jest to przeszkodą: brief omawiamy na spotkaniu online, makiety komentujesz bezpośrednio w projekcie, a postęp prac widzisz na wersji testowej sklepu.
              </p>
              <p className="text-muted-foreground mb-4">
                Masz jedną osobę do kontaktu, która prowadzi projekt i odpowiada na pytania. Kontakt z klientem utrzymujemy mailowo, telefonicznie i na krótkich wideorozmowach po każdym etapie.
              </p>
              <p className="text-muted-foreground">
                Zdjęcia i wideo produktów możemy zrealizować u nas w Poznaniu po przesłaniu towaru albo wykorzystać Twoje materiały. Ewentualny wyjazd na zdjęcia do Krakowa ustalamy osobno, w zależności od projektu.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* After launch */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-secondary/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                SEO, marketing i treści —{" "}
                <span className="text-gradient">co po uruchomieniu sklepu</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Sklep bez ruchu nie sprzedaje, dlatego oferujemy kompleksowe rozwiązania. Ponieważ FOTZ Studio zajmuje się też produkcją wideo, fotografią i kampaniami, możemy przejąć promocję po starcie albo przekazać sklep Twojemu zespołowi z instrukcją.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: "Pozycjonowanie sklepu",
                  desc: "Struktura kategorii, opisy produktów, optymalizacja szybkości ładowania i dane strukturalne. Techniczne podstawy wdrażamy już przy budowie, by potencjalni klienci mogli trafić do Ciebie z wyszukiwarki."
                },
                {
                  icon: ArrowRight,
                  title: "Kampanie reklamowe",
                  desc: "Google Ads z kampaniami produktowymi oraz Meta Ads z remarketingiem. Budżet i cele ustalamy razem, a w raportach pokazujemy, które działania przynoszą sprzedaż."
                },
                {
                  icon: Video,
                  title: "Zdjęcia i wideo produktów",
                  desc: "Packshoty, zdjęcia lifestyle i krótkie filmy do kart produktu i mediów społecznościowych. Spójne materiały pomagają wyróżnić się na tle konkurencji i budują zaufanie klientów."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-2xl border border-border/40 bg-background">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold mb-4">
                FAQ — sklep internetowy Kraków
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl border border-border/40 bg-card/20"
                >
                  <h3 className="font-heading font-semibold mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-sm text-muted-foreground pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary/90 to-[#0F3053]/90">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Bezpłatna wycena — napisz przez formularz kontaktowy
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Opisz krótko, co sprzedajesz i jakie masz obecnie narzędzia. Umówimy rozmowę online, a potem przygotujemy propozycję zakresu i wycenę — tak, by sklep realnie pomagał Twojej firmie.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Przejdź do kontaktu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/uslugi/sklepy-internetowe">Oferta sklepów internetowych</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internal linking */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi i poradniki</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Strony www Kraków", to: "/uslugi/strony-internetowe/krakow" },
              { label: "Sklepy internetowe Warszawa", to: "/uslugi/sklepy-internetowe/warszawa" },
              { label: "Jak założyć sklep internetowy", to: "/blog/jak-zalozyc-sklep-internetowy" },
              { label: "Ile kosztuje sklep internetowy", to: "/blog/sklep-internetowy-cena" },
              { label: "Pozycjonowanie stron", to: "/seo/pozycjonowanie" },
              { label: "Google Ads", to: "/performance-marketing/google-ads" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Kraków i Małopolska — na co zwrócić uwagę przed startem sklepu
            </h2>
            <p className="text-muted-foreground mb-4">
              Przy zlecaniu tworzenia sklepów internetowych w Krakowie łatwo skupić się na wyglądzie i cenie, a pominąć sposób sprzedaży. Zanim zlecisz stworzenie sklepu, zastanów się, kto będzie z niego kupował. Klient krakowskiej kawiarni z palarnią szuka czegoś innego niż zakupowiec firmy budowlanej. Pierwszy chce szybko wybrać kawę i zapłacić BLIK-iem, drugi potrzebuje faktury, cennika dla stałych odbiorców i historii zamówień. Dobry projekt odpowiada na potrzeby klientów, a nie na listę modnych funkcji.
            </p>
            <p className="text-muted-foreground mb-6">
              Drugie pytanie dotyczy zespołu. Kto będzie dodawał produkty, odpowiadał na wiadomości i pakował paczki? Od tego zależy, jak rozbudowany panel ma sens i jakie automatyzacje warto wdrożyć od razu. Indywidualnych potrzeb nie da się ocenić bez rozmowy, dlatego każdy projekt zaczynamy od krótkiego wywiadu.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Sklep a strona internetowa — kiedy wystarczy wizytówka
            </h2>
            <p className="text-muted-foreground mb-4">
              Nie każda firma potrzebuje od razu sklepu. Jeśli sprzedajesz usługi, a zamówienia ustalasz indywidualnie, lepiej może sprawdzić się strona internetowa z ofertą i formularzem zapytania. Oferujemy zarówno projektowanie i tworzenie stron www, jak i wdrożenia e-commerce, więc doradzimy, który wariant ma sens na start.
            </p>
            <p className="text-muted-foreground mb-6">
              Różnica jest duża: w przypadku tworzenia strony internetowej najważniejsze są treść i formularz, a w sklepie dochodzą koszyk, płatności, stany magazynowe i obsługa zwrotów. Jeśli planujesz sprzedaż w przyszłości, możemy przygotować projekty stron tak, by później łatwo dodać sklep do Twojej strony internetowej bez budowy wszystkiego od nowa.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Dlaczego warto rozważyć agencję spoza Krakowa
            </h2>
            <p className="text-muted-foreground mb-4">
              Sklepy internetowe dla firm z wielu miast realizujemy zdalnie, a projekty dla małych i średnich firm prowadzimy w tym samym rytmie niezależnie od lokalizacji. Pracujemy dla firm w całej Polsce, a w portfolio FOTZ są m.in. strony i treści dla Enea Stadionu, FPS Cegielski i Dawid EDU — szczegóły pokazujemy na stronie realizacji.
            </p>
            <p className="text-muted-foreground mb-4">
              Tworzeniem sklepów internetowych zajmujemy się jako część szerszej obsługi: sklep, zdjęcia produktów, kampanie i treści mogą powstać w jednym miejscu. To ułatwia zachowanie spójnej identyfikacji wizualnej Twojej marki i oszczędza czas na koordynacji kilku wykonawców.
            </p>
            <p className="text-muted-foreground">
              Wykonawca sklepu powinien być jak firma godna zaufania: mówi jasno, co zrobi, ile to potrwa i czego nie obiecuje. Umów rozmowę — pokażemy przykłady prac i opowiemy, jak pracujemy. Jeśli uznamy, że rozwój Twojego biznesu i obecność firmy w internecie lepiej wesprze inne rozwiązanie, powiemy to wprost.
            </p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/blog/seo-dla-sklepu-internetowego" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie sklepu — poradnik</Link>
              <Link to="/blog/ux-ui-ecommerce" className="text-primary hover:underline font-medium text-sm">→ UX i UI w e-commerce</Link>
              <Link to="/blog/shopify-polska" className="text-primary hover:underline font-medium text-sm">→ Shopify w Polsce</Link>
              <Link to="/performance-marketing/meta-ads" className="text-primary hover:underline font-medium text-sm">→ Meta Ads</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
