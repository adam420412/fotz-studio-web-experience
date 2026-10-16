import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema, FAQSchema, OrganizationSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Users, BarChart3, Megaphone, Globe, PenTool, CheckCircle, LineChart, Smartphone, Search, Video, Palette, Layers } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { TextReveal } from "@/components/TextReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Target,
    title: "Strategia marketingowa",
    description: "Audyt, analiza konkurencji i grup docelowych, wybór kanałów marketingowych oraz plan działań powiązany z celami biznesowymi firmy.",
    link: "/content-marketing/strategia",
  },
  {
    icon: Smartphone,
    title: "Prowadzenie social media",
    description: "Facebook, Instagram, LinkedIn i TikTok: plan publikacji, grafiki, rolki, moderacja i komunikacja z klientami w mediach społecznościowych.",
    link: "/social-media/obsluga",
  },
  {
    icon: Megaphone,
    title: "Kampanie reklamowe",
    description: "Reklamy Facebook Ads i Instagram oraz kampanie w Google Ads — od konfiguracji konta i pomiaru po optymalizację budżetu reklamowego.",
    link: "/kampanie-reklamowe",
  },
  {
    icon: Search,
    title: "SEO i content marketing",
    description: "Optymalizacja techniczna strony, treści pod frazy z wyszukiwarki i działania, które budują widoczność w wynikach wyszukiwania Google.",
    link: "/seo/pozycjonowanie",
  },
  {
    icon: Globe,
    title: "Strony WWW i landing page",
    description: "Strona firmowa, sklep lub landing page pod konkretną kampanię — projektowane tak, żeby ruch na stronie zamieniał się w zapytania.",
    link: "/uslugi/strony-internetowe",
  },
  {
    icon: Video,
    title: "Produkcja wideo i zdjęcia",
    description: "Spoty reklamowe, rolki, filmy wizerunkowe i sesje zdjęciowe realizowane przez nasz zespół — materiał gotowy do reklam i publikacji.",
    link: "/uslugi/produkcja-video",
  },
  {
    icon: Palette,
    title: "Identyfikacja wizualna",
    description: "Logo, kolorystyka i szablony graficzne, dzięki którym komunikacja marki jest spójna we wszystkich kanałach — online i offline.",
    link: "/uslugi/logo-i-branding",
  },
  {
    icon: BarChart3,
    title: "Analityka i raportowanie",
    description: "Konfiguracja Google Analytics 4 i pikseli, miesięczny raport z działań oraz wnioski, co zmieniamy w kolejnym miesiącu.",
    link: "/blog/google-analytics-4-poradnik",
  },
];

const benefits = [
  {
    icon: Layers,
    title: "Jeden plan dla wszystkich kanałów",
    description: "Reklama, social media, SEO i strona pracują na te same cele, zamiast konkurować o budżet.",
  },
  {
    icon: Users,
    title: "Jeden opiekun projektu",
    description: "Kontaktujesz się z jedną osobą, która koordynuje grafików, filmowców, copywritera i specjalistę od reklam.",
  },
  {
    icon: PenTool,
    title: "Produkcja treści w zespole",
    description: "Zdjęcia, wideo i grafiki tworzymy sami, więc materiały do reklam nie czekają na zewnętrznego dostawcę.",
  },
  {
    icon: LineChart,
    title: "Przejrzyste raporty",
    description: "Co miesiąc widzisz, co zrobiliśmy, ile wydano na reklamę i jakie wnioski wyciągamy na kolejny okres.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Rozmowa i audyt",
    description: "Poznajemy firmę, ofertę i klientów. Sprawdzamy stronę, profile w mediach społecznościowych, konta reklamowe i analitykę.",
  },
  {
    step: "02",
    title: "Strategia i zakres",
    description: "Proponujemy strategię marketingową: cele, grupy docelowe, kanały, harmonogram i miesięczny zakres prac do akceptacji.",
  },
  {
    step: "03",
    title: "Wdrożenie",
    description: "Przygotowujemy materiały, uruchamiamy kampanie, publikujemy treści i porządkujemy pomiar konwersji na stronie.",
  },
  {
    step: "04",
    title: "Raport i optymalizacja",
    description: "Co miesiąc analizujemy dane, omawiamy wyniki i przesuwamy budżet tam, gdzie działania przynoszą najlepszy zwrot.",
  },
];

const pricingFactors = [
  "liczba kanałów, które prowadzimy (np. sam Facebook i Instagram albo także LinkedIn, Google Ads i SEO),",
  "częstotliwość publikacji i liczba materiałów graficznych miesięcznie,",
  "zakres produkcji wideo i zdjęć — dni zdjęciowe, montaż, formaty pionowe,",
  "budżet reklamowy w Meta Ads i Google Ads (płacisz go bezpośrednio platformom, osobno od naszego wynagrodzenia),",
  "stan strony internetowej — czy wystarczy optymalizacja, czy potrzebny jest nowy landing page,",
  "wymagany poziom raportowania i liczba spotkań w miesiącu.",
];

const cases = [
  { name: "Enea Stadion Poznań", scope: "strona internetowa i bieżąca obsługa treści", link: "/realizacje/enea-stadion" },
  { name: "Dawid EDU", scope: "kampania rekrutacyjna Meta Ads", link: "/realizacje/dawid-edu" },
  { name: "WSB Merito", scope: "spot reklamowy", link: "/realizacje/wsb-merito" },
  { name: "FPS H. Cegielski", scope: "strona i materiały dla marki przemysłowej", link: "/realizacje/fps-cegielski" },
  { name: "RPPG", scope: "realizacja dla klienta biznesowego", link: "/realizacje/rppg" },
  { name: "Klagem", scope: "realizacja dla klienta biznesowego", link: "/realizacje/klagem" },
];

const faqItems = [
  {
    question: "Czym jest kompleksowa obsługa marketingowa?",
    answer: "To model współpracy, w którym jedna agencja marketingowa odpowiada za całość działań firmy w internecie: strategię, social media, kampanie reklamowe, SEO, stronę WWW oraz produkcję zdjęć i wideo. Zamiast kilku dostawców masz jeden zespół, jeden plan i jeden raport.",
  },
  {
    question: "Ile kosztuje usługa marketingowa?",
    answer: "Nie publikujemy stałego cennika, bo koszt zależy od liczby kanałów, ilości treści, produkcji wideo i wielkości budżetu reklamowego. Po krótkiej rozmowie i audycie przygotowujemy wycenę z miesięcznym zakresem prac. Budżet na reklamy w Meta Ads i Google Ads jest rozliczany osobno, bezpośrednio z platformami.",
  },
  {
    question: "Czym zajmuje się agencja reklamowa, a czym agencja marketingowa full service?",
    answer: "Agencja reklamowa zwykle tworzy kampanie i kreacje. Agencja full service, taka jak FOTZ Studio, prowadzi także strategię, komunikację w social media, SEO, stronę internetową i analitykę — czyli cały marketing firmy, a nie pojedynczą kampanię.",
  },
  {
    question: "Jakie są narzędzia marketingu, z których korzystacie?",
    answer: "Na co dzień pracujemy z Meta Business Suite i menedżerem reklam Meta, Google Ads, Google Analytics 4, Google Search Console, narzędziami do analizy słów kluczowych oraz programami do grafiki i montażu wideo. Dobór narzędzi zależy od kanałów, które prowadzimy dla danej firmy.",
  },
  {
    question: "Jak stworzyć strategię marketingową?",
    answer: "Zaczynamy od celów biznesowych i opisu klientów, potem analizujemy konkurencję i obecne kanały. Na tej podstawie wybieramy, gdzie warto być, jaki komunikat kierować do poszczególnych grup docelowych i jak mierzyć efekty. Strategię zamieniamy w miesięczny plan działań, który można ocenić po wynikach.",
  },
  {
    question: "Czy gwarantujecie wzrost sprzedaży?",
    answer: "Nie gwarantujemy konkretnych wyników sprzedażowych ani pozycji w Google, bo zależą one także od oferty, cen, konkurencji i obsługi klienta. Możemy natomiast obiecać rzetelnie wykonaną pracę, przejrzysty raport i rekomendacje oparte na danych.",
  },
  {
    question: "Czy obsługujecie firmy spoza Poznania?",
    answer: "Tak. Zespół FOTZ Studio pracuje w Poznaniu, a firmy z innych miast obsługujemy zdalnie — spotkania odbywają się online, materiały przekazujemy cyfrowo. Ewentualny wyjazd na zdjęcia lub nagrania ustalamy osobno przy wycenie.",
  },
  {
    question: "Jak długo trwa współpraca z agencją i czy jest okres wypowiedzenia?",
    answer: "Kompleksowa obsługa to zwykle współpraca miesięczna, bo marketing wymaga czasu na testy i optymalizację. Warunki umowy, w tym okres wypowiedzenia, ustalamy indywidualnie przed startem i zapisujemy je w umowie.",
  },
  {
    question: "Czy mogę zlecić tylko część działań?",
    answer: "Tak. Jeśli masz własnego specjalistę od social media, możemy przejąć tylko reklamy, SEO albo produkcję wideo. Kompleksowa obsługa marketingowa ma największy sens wtedy, gdy kanałów jest kilka i trzeba je ze sobą połączyć.",
  },
];

const KompleksowaObsluga = () => {
  return (
    <>
      <SEOHead
        title="Kompleksowa obsługa marketingowa — agencja marketingowa FOTZ"
        description="Kompleksowa obsługa marketingowa to usługa, w której firma dostaje cały marketing: strategię, social media, SEO, stronę, wideo i kampanię Meta lub Google Ads."
        canonical="https://www.fotz-studio.pl/kompleksowa-obsluga-marketingowa"
        keywords="kompleksowa obsługa marketingowa, agencja marketingowa full service, pełna obsługa marketingu, outsourcing marketingu, usługi marketingowe"
      />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Kompleksowa obsługa", url: "https://www.fotz-studio.pl/kompleksowa-obsluga-marketingowa" }
        ]}/>
      <ServiceSchema
        name="Kompleksowa obsługa marketingowa"
        description="Kompleksowa obsługa marketingowa firm: strategia, social media, kampanie reklamowe, SEO, strony WWW, produkcja wideo i analityka."
        provider="Fotz Studio"
      />
      <FAQSchema items={faqItems.map(item => ({ question: item.question, answer: item.answer }))} />

      <OrganizationSchema />

      <Layout>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-[#75143F]/10" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#75143F]/30 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#75143F]/20 rounded-full blur-3xl" />
          </div>

          <div className="container-wide px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-[#75143F] mb-6"
              >
                <Target className="w-4 h-4" />
                <span className="text-sm font-medium">Agencja marketingowa full service</span>
              </motion.div>

              <TextReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Kompleksowa obsługa marketingowa{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">
                    — usługi marketingowe i reklamowe dla firm
                  </span>
                </h1>
              </TextReveal>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              >
                FOTZ Studio przejmuje marketing Twojej firmy w całości: strategię, prowadzenie social media,
                kampanie reklamowe w Meta Ads i Google Ads, SEO, stronę internetową oraz produkcję zdjęć i wideo.
                Jeden zespół, jeden plan i jeden miesięczny raport.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="hero" size="lg" asChild>
                  <Link to="/kontakt" className="group">
                    Umów rozmowę o wycenie
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#wycena">
                    Od czego zależy cena
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeInView>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Dla jakiej firmy jest{" "}
                    <span className="bg-gradient-brand bg-clip-text text-transparent">kompleksowa obsługa marketingowa?</span>
                  </h2>
                  <div className="space-y-6 text-muted-foreground">
                    <p>
                      Najczęściej zgłaszają się do nas firmy, które nie mają własnego działu marketingu, a właściciel
                      sam „dorzuca” posty i reklamy do codziennych obowiązków. Druga grupa to firmy, które współpracują
                      z kilkoma podwykonawcami — osobno grafik, osobno ktoś od reklam, osobno ktoś od strony — i tracą
                      czas na koordynację, a komunikacja marki przestaje być spójna.
                    </p>
                    <p>
                      Obsługujemy firmy usługowe, producentów, szkoły i uczelnie, marki lokalne oraz sklepy internetowe.
                      Każdej z nich potrzebny jest inny miks kanałów, dlatego zakres działań ustalamy po audycie, a nie
                      z gotowego pakietu. W jednej branży kluczowe będą treści eksperckie dla klienta biznesowego, w innej rolki
                      na Instagramie i płatne kampanie lokalne.
                    </p>
                    <p>
                      W naszym zespole są nie tylko specjalistów od reklamy i{" "}
                      <Link to="/seo/pozycjonowanie" className="text-[#75143F] hover:underline">pozycjonowania</Link>,
                      ale też operatorzy kamer, fotografowie i montażyści. Dzięki temu materiały do kampanii powstają
                      w tym samym zespole, który potem je publikuje i rozlicza.
                    </p>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                      className="bg-card border border-border rounded-xl p-5 hover:border-[#75143F]/50 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-brand flex items-center justify-center mb-3">
                        <benefit.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Zakres usług: kampania, SEO, social media i treści w jednym miejscu
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Pełen zakres usług, jaki oferują agencje full service — wybieramy te elementy, które realnie wspierają cele Twojej firmy.
                </p>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <FadeInView key={service.title} delay={index * 0.05}>
                  <Link to={service.link}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      className="bg-card border border-border rounded-2xl p-6 h-full hover:border-[#75143F]/50 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#75143F] transition-colors">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                      <div className="mt-4 flex items-center text-[#75143F] text-sm font-medium">
                        Dowiedz się więcej
                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </motion.div>
                  </Link>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Komunikacja online i offline{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">— jeden kompleksowy plan</span>
                </h2>

                <div className="space-y-8">
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Ruch organiczny i płatny</h3>
                    <p className="text-muted-foreground">
                      SEO i content marketing budują widoczność w wynikach wyszukiwania na dłuższą metę, a kampanie
                      płatne dają ruch od pierwszego dnia. W kompleksowej obsłudze planujemy oba źródła razem:
                      reklamy w Google Ads testują frazy, a te, które przynoszą zapytania, rozwijamy w treściach
                      na stronie. Dzięki temu budżet nie jest wydawany w oderwaniu od reszty działań.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Social media i reklama Meta Ads</h3>
                    <p className="text-muted-foreground">
                      Organiczne{" "}
                      <Link to="/social-media/obsluga" className="text-[#75143F] hover:underline">prowadzenie social media</Link>{" "}
                      buduje świadomość marki i zaufanie, a{" "}
                      <Link to="/kampanie-reklamowe" className="text-[#75143F] hover:underline">kampanie reklamowe</Link>{" "}
                      w Facebook Ads i na Instagramie pozwalają docierać do Twojej grupy docelowej z konkretną ofertą.
                      Najlepiej działające posty wykorzystujemy jako reklamy, a dane z kampanii podpowiadają, jakie
                      treści publikować dalej. Dla firm z sektora B2B prowadzimy też komunikację ekspercką w kanałach biznesowych.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Strona internetowa jako centrum działań</h3>
                    <p className="text-muted-foreground">
                      Wszystkie kanały kierują klienta w jedno miejsce — na stronę albo{" "}
                      <Link to="/uslugi/landing-page" className="text-[#75143F] hover:underline">landing page</Link>.
                      Jeśli strona nie zamienia ruchu na stronie w zapytania, nawet efektywny marketing online traci sens.
                      Dlatego w ramach obsługi dbamy o szybkość, poprawki optymalizacji technicznej, formularze i pomiar konwersji,
                      a w razie potrzeby projektujemy{" "}
                      <Link to="/uslugi/strony-internetowe" className="text-[#75143F] hover:underline">nową stronę internetową</Link>.
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="text-xl font-semibold mb-4">Treści wideo i zdjęcia od jednego zespołu</h3>
                    <p className="text-muted-foreground">
                      Reklamy i posty potrzebują stałego dopływu materiałów. W FOTZ Studio{" "}
                      <Link to="/uslugi/produkcja-video" className="text-[#75143F] hover:underline">produkcja wideo</Link>{" "}
                      i{" "}
                      <Link to="/uslugi/fotografia" className="text-[#75143F] hover:underline">fotografia</Link>{" "}
                      są częścią tej samej usługi — planujemy dzień zdjęciowy tak, żeby powstały z niego rolki do social
                      media, kreacje reklamowe i zdjęcia na stronę. Spójny styl graficzny wzmacnia rozpoznawalność marki także poza internetem: na banerach, ekranach czy materiałach drukowanych.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Jak wygląda współpraca z agencją marketingową FOTZ?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Od pierwszej rozmowy do comiesięcznej optymalizacji — każdy etap ma jasny zakres i odpowiedzialną osobę.
                </p>
              </div>
            </FadeInView>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <FadeInView key={step.step} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-5xl font-bold bg-gradient-brand bg-clip-text text-transparent mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.3}>
              <div className="max-w-3xl mx-auto mt-16 space-y-4 text-muted-foreground">
                <p>
                  Spotkania w Poznaniu umawiamy po uzgodnieniu terminu, a z firmami z innych miast pracujemy zdalnie:
                  rozmowy prowadzimy online, a pliki, akceptacje i raporty przekazujemy cyfrowo. Komunikacja odbywa się
                  przez jednego opiekuna, który zna Twój projekt i odpowiada za terminy całego zespołu.
                </p>
                <p>
                  Każdy miesiąc zaczyna się od planu: harmonogramu publikacji, listy materiałów do produkcji i podziału
                  budżetu między kampanie. Kończy się raportem, w którym pokazujemy liczby z narzędzi analitycznych,
                  opisujemy, co zadziałało, a co nie, i proponujemy zmiany na kolejny miesiąc. Zarządzanie kontami
                  reklamowymi odbywa się na Twoich kontach firmowych, więc dostęp do danych zostaje po Twojej stronie.
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Pricing factors Section */}
        <section id="wycena" className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
              <FadeInView>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  Cennik i budżet —{" "}
                  <span className="bg-gradient-brand bg-clip-text text-transparent">ile kosztuje agencja marketingowa?</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-center">
                  Nie mamy jednego cennika dla wszystkich, bo każda firma potrzebuje innego zakresu. Miesięczne
                  wynagrodzenie agencji wyceniamy po audycie, na podstawie konkretnego zakresu działań.
                </p>
              </FadeInView>

              <FadeInView delay={0.1}>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Od czego zależy wycena usługi marketingowej</h3>
                  <ul className="space-y-3">
                    {pricingFactors.map((factor) => (
                      <li key={factor} className="flex gap-3 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-[#75143F] flex-shrink-0 mt-0.5" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground mt-6">
                    W wycenie rozdzielamy trzy pozycje: jednorazowe przygotowanie (audyt, strategia, konfiguracja analityki,
                    ewentualnie landing page), stałą miesięczną obsługę oraz budżet reklamowy. Dzięki temu wiesz, ile
                    płacisz za pracę zespołu, a ile trafia bezpośrednio do platform reklamowych. Zwrot z inwestycji
                    oceniamy wspólnie na podstawie danych o zapytaniach i sprzedaży, które masz po swojej stronie.
                  </p>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="mt-10 text-center">
                  <Button variant="hero" size="lg" asChild>
                    <Link to="/kontakt" className="group">
                      Poproś o wycenę
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* How to choose */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                  Jak wybrać agencję marketingową lub agencję reklamową?
                </h2>
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    Dobra agencja zaczyna od pytań o Twój biznes, a nie od listy pakietów. Zanim podpiszesz umowę,
                    sprawdź, czy agencja pokazuje prawdziwe realizacje, czy potrafi wyjaśnić, jak mierzy efekty, i czy
                    konta reklamowe oraz analityka będą założone na Twoją firmę. To ostatnie jest ważne — po zakończeniu
                    współpracy dane i historia kampanii powinny zostać u Ciebie.
                  </p>
                  <p>
                    Zwróć uwagę na to, kto będzie wykonywał pracę. W wielu agencjach produkcja wideo, zdjęcia czy strona
                    są zlecane dalej. W FOTZ Studio większość tych elementów robimy sami, a przy usługach, których
                    nie wykonujemy w zespole, mówimy o tym wprost przed startem.
                  </p>
                  <p>
                    Nie ufaj obietnicom konkretnego wzrostu sprzedaży albo pierwszego miejsca w Google w krótkim czasie.
                    Uczciwy wykonawca może obiecać rzetelną pracę, systematyczne testy i jasne
                    raporty, ale nie wynik, na który wpływa też oferta, cena, konkurencja i obsługa klienta po Twojej stronie.
                  </p>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Cases Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Wybrane realizacje — klient, branża i zakres prac</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Projekty, przy których łączyliśmy produkcję treści, strony internetowe i kampanie. Szczegóły znajdziesz w opisach realizacji.
                </p>
              </div>
            </FadeInView>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {cases.map((item, index) => (
                <FadeInView key={item.name} delay={index * 0.05}>
                  <Link to={item.link} className="block bg-card border border-border rounded-2xl p-6 h-full hover:border-[#75143F]/50 transition-all group">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-[#75143F] transition-colors">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.scope}</p>
                    <div className="mt-4 flex items-center text-[#75143F] text-sm font-medium">
                      Zobacz realizację
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </FadeInView>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/realizacje" className="text-[#75143F] hover:underline font-medium">Wszystkie realizacje →</Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Często zadawane pytania o kompleksową obsługę marketingową</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Odpowiedzi na pytania, które klienci zadają nam przed rozpoczęciem współpracy.
                </p>
              </div>
            </FadeInView>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <FadeInView key={index} delay={index * 0.05}>
                    <AccordionItem value={`item-${index}`} className="bg-card border border-border rounded-xl px-6">
                      <AccordionTrigger className="text-left hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </FadeInView>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container-wide px-6 md:px-12">
            <FadeInView>
              <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-12 md:p-20 text-center">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                    Porozmawiajmy o marketingu Twojej firmy
                  </h2>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                    Opisz krótko firmę i cele. Odezwiemy się, żeby umówić rozmowę, a po audycie przygotujemy propozycję
                    zakresu kompleksowej obsługi marketingowej wraz z wyceną.
                  </p>
                  <Button variant="secondary" size="lg" asChild>
                    <Link to="/kontakt" className="group">
                      Przejdź do kontaktu
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Outsourcing marketingu — zewnętrzny dział marketingowy zamiast etatu
            </h2>
            <p className="text-muted-foreground mb-4">
              Zatrudnienie jednej osoby do marketingu rzadko wystarcza: trudno znaleźć kogoś, kto jednocześnie
              ustawi kampanie, napisze teksty, zaprojektuje grafiki, nagra wideo i zadba o SEO. Outsourcing marketingu
              do agencji daje dostęp do kilku specjalistów naraz, a firma płaci za ustalony zakres pracy, nie za etaty.
              Taki kompleksowy model jest szczególnie dobry dla firm, które chcą działać w kilku kanałach,
              ale nie planują budować własnego zespołu. Usługa obejmuje działania marketingowe od planu po raport.
            </p>
            <p className="text-muted-foreground mb-6">
              Nie oznacza to, że tracisz kontrolę. Akceptujesz strategię, harmonogram publikacji i kreacje reklamowe,
              a raz w miesiącu dostajesz podsumowanie działań. Jeśli masz w firmie osobę od marketingu, możemy z nią
              współpracować — przejmujemy wtedy produkcję treści i płatne kampanie, a ona zostaje głosem marki
              i pierwszym kontaktem dla klientów.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Strategie marketingowe powiązane z celami sprzedażowymi
            </h2>
            <p className="text-muted-foreground mb-4">
              Dobra strategia zaczyna się od pytania, co ma się wydarzyć w firmie: więcej zapytań o konkretną usługę,
              rekrutacja uczniów lub pracowników, sprzedaż w sklepie internetowym czy budowanie rozpoznawalności marki
              przed wejściem na nowy rynek. Od tego zależy wybór kanałów, komunikat i sposób pomiaru. Inaczej
              planujemy działania dla firmy, która sprzedaje produkty online, a inaczej dla marki, która pozyskuje
              klientów biznesowych przez LinkedIn i polecenia.
            </p>
            <p className="text-muted-foreground mb-4">
              W strategii opisujemy grupy docelowe, potrzeby klientów, przewagi oferty i ton komunikacji. Następnie
              rozpisujemy plan: jakie treści publikujemy, które kampanie uruchamiamy, jaki budżet przypada na każdy
              kanał i jakie wskaźniki będą sygnałem, że trzeba coś zmienić. Planowanie na kwartał z miesięcznymi
              korektami pozwala reagować na sezonowość i dane z kampanii.
            </p>
            <p className="text-muted-foreground mb-6">
              Tam, gdzie to ma sens, proponujemy proste automatyzacje — np. przekazywanie zapytań z formularzy
              i reklam leadowych do skrzynki lub CRM, tak aby żaden kontakt nie czekał na odpowiedź. Zakres takich
              wdrożeń ustalamy przy wycenie.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Co obejmuje miesięczny plan marketingowy dla klienta?
            </h2>
            <p className="text-muted-foreground mb-4">
              Każdy klient dostaje plan marketingowy dopasowany do tego, co sprzedaje i komu. Inaczej wygląda marketing
              firmy usługowej, która chce pozyskiwać potencjalnych klientów z okolicy, a inaczej producenta, który
              buduje rozpoznawalność marki wśród klientów biznesowych. Dlatego zanim zaproponujemy zakres, robimy
              analizę potrzeb klientów, oferty produktów i usług oraz tego, jak konkurencja komunikuje się w danej branży.
            </p>
            <p className="text-muted-foreground mb-4">
              Typowy miesiąc kompleksowej obsługi to: harmonogram publikacji i materiały graficzne, nagrania lub
              zdjęcia do treści, co najmniej jedna kampania reklamowa z jasno określonym celem, prace SEO na stronie
              i raport marketingowy z wnioskami. Kampania może mieć cel sprzedażowy (zapytania, zakupy, zapisy),
              wizerunkowy (budować świadomość marki w nowej grupie odbiorców) albo rekrutacyjny. W celach marketingowych
              zapisujemy wskaźniki, po których ocenimy efekt — na przykład liczbę zapytań z formularza czy rozmów
              telefonicznych, a nie wyłącznie zasięg.
            </p>
            <p className="text-muted-foreground mb-6">
              Wybór kanałów też ma znaczenie, bo nie każda firma musi być na wszystkich portalach, a każda platforma wymaga innych treści. Lepszy jest
              spójny przekaz w dwóch dobrze prowadzonych kanałach niż sporadyczna obecność w pięciu. Marketingu online
              nie traktujemy jako osobnego świata — jeśli promujesz wydarzenie, otwarcie lokalu albo nowy produkt lub
              usługę, materiały z sesji przygotujemy również do druku i na ekrany.
            </p>

            <h2 className="text-3xl font-heading font-bold mb-6">
              Marketing cyfrowy w Poznaniu i zdalnie — miesięczny plan dla firm
            </h2>
            <p className="text-muted-foreground mb-4">
              Zespół FOTZ Studio pracuje w Poznaniu, więc z lokalnymi firmami łatwo spotykamy się na żywo i realizujemy
              sesje zdjęciowe czy nagrania na miejscu. Firmy z innych miast obsługujemy zdalnie — strategia, kampanie
              Meta Ads i Google Ads, SEO czy prowadzenie profili nie wymagają naszej obecności w biurze klienta.
              Wyjazd na zdjęcia lub nagrania poza Poznań wyceniamy osobno.
            </p>
            <p className="text-muted-foreground">
              Jeśli chcesz sprawdzić, czy kompleksowa obsługa marketingowa ma sens w Twojej sytuacji, napisz do nas.
              Po rozmowie wskażemy, od których działań warto zacząć, a które mogą poczekać, i przygotujemy wycenę
              dopasowaną do budżetu firmy.
            </p>

            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/social-media/obsluga" className="text-primary hover:underline font-medium text-sm">→ Social media</Link>
              <Link to="/content-marketing/strategia" className="text-primary hover:underline font-medium text-sm">→ Content marketing</Link>
              <Link to="/agencja-marketingowa-poznan" className="text-primary hover:underline font-medium text-sm">→ Agencja marketingowa Poznań</Link>
            </div>
          </motion.div>
        </div>
      </section>

      </Layout>
    </>
  );
};

export default KompleksowaObsluga;
