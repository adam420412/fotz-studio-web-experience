import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Search,
  BarChart3,
  MapPin,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  FileSearch,
  Link2,
  Zap,
  Sparkles,
  PenLine,
  XCircle,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Search,
    title: "Audyt SEO",
    description:
      "Diagnoza strony przed startem pozycjonowania: indeksacja, błędy techniczne, struktura treści, linkowanie wewnętrzne i profil linków. Dostajesz listę zadań ułożoną według priorytetu, a nie sam raport z błędami.",
    href: "/seo/audyt",
    features: ["Analiza techniczna i on-site", "Przegląd konkurencji w wyszukiwarce", "Plan zadań z priorytetami"],
  },
  {
    icon: TrendingUp,
    title: "Pozycjonowanie stron",
    description:
      "Stała opieka SEO nad serwisem firmy: dobór fraz, optymalizacja podstron, nowe treści i budowa autorytetu domeny. Szczegóły usługi opisujemy na osobnej stronie.",
    href: "/seo/pozycjonowanie",
    features: ["Strategia SEO i dobór fraz", "Optymalizacja podstron", "Raporty i rekomendacje"],
  },
  {
    icon: MapPin,
    title: "Pozycjonowanie lokalne",
    description:
      "Local SEO dla firm, które obsługują klientów w konkretnym mieście lub regionie: profil firmy w Google, podstrony lokalne, spójne dane kontaktowe i opinie.",
    href: "/uslugi/pozycjonowanie-lokalne",
    features: ["Profil firmy w Google", "Podstrony pod miasta", "Spójne dane NAP"],
  },
  {
    icon: MapPin,
    title: "Pozycjonowanie w Mapach Google",
    description:
      "Praca nad widocznością wizytówki w Mapach Google: kategorie, opisy, zdjęcia, wpisy, odpowiedzi na opinie i powiązanie wizytówki ze stroną.",
    href: "/seo/google-maps",
    features: ["Optymalizacja wizytówki", "Obsługa opinii", "Wyniki mapowe"],
  },
  {
    icon: ShoppingCart,
    title: "SEO dla e-commerce",
    description:
      "Sklep internetowy ma inne problemy niż strona firmowa: filtry, warianty, duplikaty opisów, paginacja. Porządkujemy kategorie i karty produktów pod kątem SEO.",
    href: "/seo/ecommerce",
    features: ["Struktura kategorii", "Karty produktów", "Kontrola indeksacji filtrów"],
  },
  {
    icon: BarChart3,
    title: "Pozycjonowanie Poznań",
    description:
      "Oferta dla firm z Poznania i okolic, które chcą spotkać się z zespołem na miejscu i budować widoczność na lokalne zapytania.",
    href: "/seo/pozycjonowanie-poznan",
    features: ["Spotkania w Poznaniu", "Frazy lokalne", "Strona i wizytówka razem"],
  },
  {
    icon: FileSearch,
    title: "SEO on-site",
    description:
      "Tytuły, opisy, nagłówki, treści, dane strukturalne i linkowanie wewnętrzne, czyli wszystko, co wyszukiwarka czyta bezpośrednio na Twojej stronie.",
    href: "/seo/on-page",
    features: ["Meta tagi i nagłówki", "Dane strukturalne", "Linkowanie wewnętrzne"],
  },
  {
    icon: Zap,
    title: "Technical SEO",
    description:
      "Szybkość, indeksacja, przekierowania, mapa strony, robots.txt i wersja mobilna. Bez tego fundamentu pozostałe działania SEO tracą sens.",
    href: "/seo/techniczne",
    features: ["Indeksacja i crawl", "Core Web Vitals", "Przekierowania i błędy 404"],
  },
  {
    icon: Link2,
    title: "Link building i off-page",
    description:
      "Pozyskiwanie wartościowych linków i wzmianek o marce: publikacje branżowe, portale lokalne, partnerzy. Bez farm linków i systemów wymiany.",
    href: "/seo/off-page",
    features: ["Analiza profilu linków", "Publikacje tematyczne", "Wzmianki o marce"],
  },
  {
    icon: PenLine,
    title: "SEO copywriting",
    description:
      "Teksty na podstrony usług, kategorie i blog pisane pod intencję użytkownika: najpierw odpowiedź na pytanie klienta, potem frazy.",
    href: "/seo/copywriting-seo",
    features: ["Analiza intencji", "Teksty usługowe i blogowe", "Optymalizacja istniejących treści"],
  },
  {
    icon: Sparkles,
    title: "SEO a AI",
    description:
      "Przygotowanie treści i danych strony tak, by marka była zrozumiała dla Google AI Overviews i asystentów AI, które coraz częściej odpowiadają na pytania klientów.",
    href: "/ai-seo",
    features: ["Treści odpowiadające na pytania", "Dane o firmie i ofercie", "Spójny wizerunek marki w sieci"],
  },
];

const cityOffers = [
  { label: "Poznań", href: "/seo/pozycjonowanie-poznan" },
  { label: "Warszawa", href: "/seo/pozycjonowanie-warszawa" },
  { label: "Kraków", href: "/seo/pozycjonowanie-krakow" },
  { label: "Wrocław", href: "/seo/pozycjonowanie-wroclaw" },
  { label: "Gdańsk", href: "/seo/pozycjonowanie-gdansk" },
  { label: "Łódź", href: "/seo/pozycjonowanie-lodz" },
  { label: "Katowice", href: "/seo/pozycjonowanie-katowice" },
  { label: "Lublin", href: "/seo/pozycjonowanie-lublin" },
];

const choosingCriteria = [
  {
    title: "Zaczyna od pytań o biznes, nie od listy fraz",
    text: "Dobra agencja SEO najpierw pyta, które usługi lub produkty są dla Ciebie najważniejsze, kto jest klientem i gdzie kończy się Twój obszar działania. Dopiero potem dobiera frazy. Ruch, który nie zamienia się w zapytania, nie jest celem.",
  },
  {
    title: "Pokazuje, co dokładnie zrobi",
    text: "Profesjonalna agencja potrafi opisać zakres prac na najbliższe miesiące: które podstrony poprawi, jakie treści napisze, co zmieni w kodzie, jak będzie zdobywać linki. Hasło „kompleksowe działania SEO” bez konkretów to sygnał ostrzegawczy.",
  },
  {
    title: "Daje dostęp do danych",
    text: "Google Search Console, Google Analytics 4 i wizytówka firmy powinny należeć do Ciebie. Agencja dostaje uprawnienia, a nie przejmuje kont. Dzięki temu w każdej chwili widzisz te same dane co specjalista SEO.",
  },
  {
    title: "Mówi o ryzyku i czasie",
    text: "Proces pozycjonowania rozkłada się na miesiące, a wyniki zależą też od konkurencji i zmian w algorytmach. Rzetelna agencja SEO mówi o tym przed podpisaniem umowy i nie obiecuje konkretnych pozycji w określonym terminie.",
  },
  {
    title: "Ma kompetencje w treściach i technice",
    text: "Skuteczne pozycjonowanie wymaga zarówno pracy z kodem strony, jak i dobrego contentu. Sprawdź, czy agencja ma w zespole osoby, które wdrażają zmiany techniczne, a nie tylko je zalecają, i czy pisze teksty, które da się czytać.",
  },
  {
    title: "Stosuje bezpieczne metody",
    text: "Masowe linki z przypadkowych katalogów, ukryty tekst czy kopiowane treści mogą przynieść krótkotrwały wzrost, a potem spadek widoczności. Zapytaj wprost, skąd agencja pozyskuje linki i jak pisze teksty.",
  },
];

const redFlags = [
  "Obietnica konkretnej pozycji w Google w określonym terminie",
  "Brak dostępu do danych i raportów źródłowych",
  "Setki linków „w pakiecie” bez informacji, skąd pochodzą",
  "Teksty generowane hurtem, bez redakcji i bez sprawdzenia faktów",
  "Umowa, w której nie wiadomo, co agencja robi co miesiąc",
];

const processSteps = [
  {
    step: "01",
    title: "Rozmowa i brief",
    desc: "Poznajemy firmę, ofertę, klientów i dotychczasowe działania marketingowe. Ustalamy, które usługi mają przynosić zapytania i jaki obszar obsługujesz.",
  },
  {
    step: "02",
    title: "Audyt SEO i analiza konkurencji",
    desc: "Sprawdzamy stronę technicznie i treściowo, przeglądamy wyniki wyszukiwania dla ważnych zapytań i porównujemy się z firmami, które dziś są wyżej.",
  },
  {
    step: "03",
    title: "Strategia SEO",
    desc: "Przygotowujemy mapę fraz i podstron, plan treści, listę zmian technicznych i propozycję działań off-page. Każde zadanie ma priorytet.",
  },
  {
    step: "04",
    title: "Wdrożenie",
    desc: "Poprawiamy stronę, piszemy i optymalizujemy treści, porządkujemy wizytówkę firmy. Jeśli strona wymaga przebudowy, możemy zrobić ją w naszym zespole WWW.",
  },
  {
    step: "05",
    title: "Content i linki",
    desc: "Rozbudowujemy serwis o nowe podstrony i artykuły, które odpowiadają na pytania klientów, oraz pozyskujemy linki z tematycznych miejsc.",
  },
  {
    step: "06",
    title: "Pomiar i korekty",
    desc: "Śledzimy widoczność, ruch z wyszukiwarki i zapytania. Dane z kolejnych miesięcy kampanii SEO pozwalają dostosować strategię SEO, zamiast trzymać się planu, który przestał działać.",
  },
];

const audiences = [
  {
    title: "Firmy usługowe i lokalne",
    text: "Gabinety, warsztaty, kancelarie, firmy budowlane czy szkoły, które pozyskują klientów z jednego miasta lub regionu. Klienci, którzy chcą wyszukiwać usługi w okolicy, widzą najpierw mapę i kilka wizytówek. Tu najważniejsze są local SEO, wizytówka w Mapach Google i podstrony usług z nazwą miejscowości.",
  },
  {
    title: "Sklepy internetowe",
    text: "Sklep internetowy potrzebuje uporządkowanej struktury kategorii, opisów produktów i kontroli nad indeksacją filtrów. SEO dla e-commerce łączymy z analizą, które kategorie sprzedają najlepiej.",
  },
  {
    title: "Firmy B2B i produkcyjne",
    text: "Długi proces decyzyjny, mało zapytań, ale o dużej wartości. Budujemy treści, które tłumaczą ofertę inżynierom, zakupowcom i zarządom, oraz podstrony pod konkretne zastosowania produktów.",
  },
  {
    title: "Firmy spoza Poznania",
    text: "Zespół FOTZ pracuje w Poznaniu, a firmy z innych miast obsługujemy zdalnie: spotkania online, wspólne dokumenty, dostęp do raportów. W SEO lokalizacja agencji ma mniejsze znaczenie niż znajomość rynku klienta, dlatego zaczynamy od poznania Twojej okolicy i konkurencji.",
  },
];

const pricingFactors = [
  "Konkurencja w branży i liczba firm walczących o te same zapytania w wyszukiwarce Google",
  "Stan techniczny strony: czy wystarczą poprawki, czy potrzebna jest przebudowa",
  "Liczba usług, produktów i lokalizacji, które mają być widoczne",
  "Ilość treści do napisania lub przepisania co miesiąc",
  "Zakres działań off-page i link buildingu",
  "Czy SEO ma iść w parze z kampaniami Google Ads, social media lub nową stroną",
];

const faqs = [
  {
    question: "Co to jest agencja SEO i czym się zajmuje?",
    answer:
      "Agencja SEO to firma, która zwiększa widoczność stron internetowych w wynikach wyszukiwania Google. Czym zajmuje się agencja SEO na co dzień? Audytem strony, doborem fraz, optymalizacją treści i kodu, pisaniem nowych tekstów, pozyskiwaniem linków, lokalnym SEO i raportowaniem. Coraz częściej także przygotowaniem marki na odpowiedzi AI.",
  },
  {
    question: "Ile kosztuje SEO miesięcznie?",
    answer:
      "Nie podajemy stałego cennika, bo koszt pozycjonowania zależy od konkurencji w branży, stanu strony, liczby usług i lokalizacji oraz ilości treści do przygotowania. Po rozmowie i wstępnej analizie przygotowujemy wycenę z opisem zadań na pierwsze miesiące, żeby było jasne, za co płacisz.",
  },
  {
    question: "Jak rozpoznać dobrą agencję SEO?",
    answer:
      "Dobra agencja SEO zadaje pytania o Twój biznes, pokazuje konkretny plan prac, daje Ci dostęp do Search Console i Analytics, uczciwie mówi o czasie potrzebnym na efekty i nie obiecuje konkretnego miejsca w Google. Cechą rzetelnej agencji SEO jest też to, że mówi, kto realnie wdraża zmiany na stronie i pisze treści.",
  },
  {
    question: "Czy możecie zagwarantować pierwsze miejsce w Google?",
    answer:
      "Nie. Żadna agencja nie kontroluje algorytmu Google, więc nie dajemy gwarancji pozycji. Możemy za to opisać, co zrobimy, pokazać postęp na danych i reagować, gdy coś nie działa.",
  },
  {
    question: "Po jakim czasie widać efekty pozycjonowania?",
    answer:
      "Zależy to od wieku domeny, stanu strony i konkurencji. Poprawki techniczne i optymalizacja istniejących podstron mogą dać pierwsze zmiany szybciej, a budowa widoczności na trudne frazy to zwykle praca na wiele miesięcy. Realne oczekiwania omawiamy po audycie.",
  },
  {
    question: "Czy macie biura w innych miastach?",
    answer:
      "Nie. Zespół FOTZ Studio pracuje w Poznaniu. Firmy z innych miast obsługujemy zdalnie, a strony z ofertą dla poszczególnych miast opisują, jak wygląda taka współpraca.",
  },
  {
    question: "Czym różni się agencja SEO od agencji marketingowej?",
    answer:
      "Agencja SEO skupia się na widoczności w wyszukiwarce: strona, treści, linki, wizytówka. Agencja marketingowa obejmuje szerzej komunikację marki, reklamy i social media. Na rynku marketingu w Polsce wiele firm łączy oba obszary, podobnie jak agencje SEO i SEM. My robimy marketing SEO razem z kampaniami reklamowymi, stronami i produkcją treści, więc możesz zlecić jeden obszar albo kilka naraz.",
  },
  {
    question: "Czy przejmujecie SEO po innej agencji?",
    answer:
      "Tak. Zaczynamy wtedy od audytu, przeglądu dotychczasowych działań i profilu linków. Jeśli w przeszłości stosowano ryzykowne metody, najpierw je porządkujemy.",
  },
  {
    question: "Czy łączycie SEO z Google Ads i innymi działaniami?",
    answer:
      "Tak, jeśli ma to sens dla Twojego celu. SEO i SEM, czyli pozycjonowanie i kampanie Google Ads, dobrze się uzupełniają: reklamy dają ruch od razu, a SEO buduje widoczność, która nie znika po wyłączeniu budżetu. Możemy też przygotować stronę, treści wideo i zdjęcia.",
  },
  {
    question: "Na jakich platformach pracujecie?",
    answer:
      "Na stronach w WordPressie, sklepach na popularnych platformach e-commerce i serwisach pisanych na zamówienie. Zakres zmian, które możemy wdrożyć sami, ustalamy po sprawdzeniu dostępu do strony.",
  },
];

const deliverables = [
  {
    title: "Plan działań na start",
    text: "Po audycie dostajesz listę zadań z priorytetami: co poprawiamy od razu, co w kolejnych miesiącach i czego na razie nie warto ruszać. To podstawa strategii pozycjonowania, do której wracamy przy każdym podsumowaniu.",
  },
  {
    title: "Mapa fraz i podstron",
    text: "Przypisujemy zapytania klientów do konkretnych podstron, żeby kilka stron nie konkurowało o to samo. Widać od razu, których treści brakuje i które podstrony trzeba połączyć lub rozbudować.",
  },
  {
    title: "Wdrożone zmiany, nie tylko rekomendacje",
    text: "Jeśli mamy dostęp do strony, zmiany techniczne i treściowe wprowadzamy sami. Jeśli stroną opiekuje się inna firma, przygotowujemy dla niej precyzyjne wytyczne i sprawdzamy, czy zostały wdrożone.",
  },
  {
    title: "Raport z komentarzem",
    text: "W raporcie pokazujemy widoczność, ruch z wyszukiwarki i zapytania ze strony, ale przede wszystkim opisujemy, co z tego wynika i co robimy dalej. Liczby bez wniosków nie pomagają w decyzjach.",
  },
];

const guides = [
  { label: "Jak wybrać agencję SEO", href: "/blog/jak-wybrac-agencje-seo" },
  { label: "Ile kosztuje pozycjonowanie", href: "/blog/ile-kosztuje-pozycjonowanie" },
  { label: "Audyt SEO krok po kroku", href: "/blog/audyt-seo-krok-po-kroku" },
  { label: "SEO czy Google Ads", href: "/blog/seo-vs-google-ads" },
  { label: "Pozycjonowanie lokalne dla firm", href: "/blog/pozycjonowanie-lokalne-dla-firm" },
  { label: "SEO dla sklepu internetowego", href: "/blog/seo-dla-sklepu-internetowego" },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function SEOCluster() {
  return (
    <Layout>
      <SEOHead
        title="Agencja SEO — marketing w Google i AI | FOTZ Studio"
        description="Czym jest agencja SEO i jak pracujemy: audyt, strategia pozycjonowania, local SEO, content marketing i SEO pod AI. Wycena bez pakietów. FOTZ Poznań."
        canonical="https://www.fotz-studio.pl/seo"
        keywords="agencja SEO, agencja SEO Poznań, usługi SEO, audyt SEO, pozycjonowanie lokalne, SEO AI, marketing internetowy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Agencja SEO", url: "https://www.fotz-studio.pl/seo" },
        ]}
      />
      <ServiceSchema
        name="Agencja SEO - FOTZ Studio"
        description="Usługi agencji SEO: audyt, strategia SEO, pozycjonowanie stron, local SEO, SEO dla e-commerce, content marketing i widoczność w odpowiedziach AI"
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
              Agencja SEO · Poznań i cała Polska zdalnie
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Agencja SEO i marketing internetowy: <span className="text-gradient">widoczność w Google i AI</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Szukasz agencji SEO, która powie, co konkretnie zrobi z Twoją stroną? FOTZ Studio łączy audyt, strategię SEO,
              treści i zmiany techniczne w jeden plan. Pracujemy dla firm usługowych, sklepów internetowych i firm B2B, a w
              tym samym zespole robimy strony WWW, wideo i kampanie reklamowe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Porozmawiajmy o SEO
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

      {/* Czym zajmuje się agencja SEO */}
      <section className="py-16 md:py-20 border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Czym jest i czym zajmuje się agencja SEO?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Czym jest agencja SEO? W praktyce to zespół, który sprawia, że klienci znajdują Twoją firmę, kiedy chcą wyszukiwać produkty lub
              usługi w Google, a Twoja strona pojawia się w wynikach wyszukiwania tam, gdzie oni patrzą. Praca agencji obejmuje kilka obszarów naraz: technical SEO (czy wyszukiwarka
              może poprawnie odczytać stronę), SEO on-site (czy treści i nagłówki odpowiadają na zapytania), content (czy na
              stronie jest wszystko, czego szuka klient) i off-page (czy inne serwisy wskazują na Twoją markę). Do tego
              dochodzi local SEO dla firm działających w jednym mieście oraz analiza danych, która pokazuje, co przynosi
              efekty.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SEO to fundament widoczności firmy w internecie, bo wyszukiwarka jest miejscem, w którym klienci porównują
              oferty i sprawdzają, komu zaufać. Jednocześnie SEO to proces, a nie jednorazowa usługa. Wyniki wyszukiwania zmieniają się codziennie, konkurencja publikuje
              nowe treści, a Google rozwija algorytmy i odpowiedzi AI. Dlatego współpraca z agencją SEO zwykle trwa dłużej
              niż jeden projekt: najpierw porządkujemy fundamenty, potem systematycznie zwiększamy widoczność strony na
              kolejne zapytania. Celem pozycjonowania nie jest sam ruch, tylko zapytania i sprzedaż.
            </p>
            <h3 className="text-xl font-heading font-semibold mb-3 mt-8">Kim jesteśmy</h3>
            <p className="text-muted-foreground leading-relaxed">
              FOTZ Studio to agencja kreatywna z Poznania. Robimy wideo i zdjęcia, strony internetowe, prowadzimy social
              media, kampanie Meta Ads i działania SEO. Dla klienta oznacza to jedno miejsce, w którym
              strona, treści, materiały wizualne i pozycjonowanie są planowane razem. Nie jesteśmy wyłącznie agencją SEO
              i nie udajemy sieci oddziałów w całej Polsce: zespół pracuje w Poznaniu, a klientów z innych miast obsługuje
              zdalnie.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              W zakresie SEO nasza agencja zajmuje się wszystkim, co wpływa na widoczność strony: od technical SEO, przez
              treści, po wizytówkę w Mapach Google. Eksperci SEO pracują u nas obok projektantów stron, copywriterów i
              osób od reklam, więc zmiany na stronie nie czekają tygodniami na innego wykonawcę.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Usługi */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Usługi naszej agencji SEO</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Naszym zadaniem jest zwiększać widoczność Twojej firmy tam, gdzie szukają jej klienci. Każda usługa SEO ma osobną stronę z opisem zakresu. Wybierz to, czego potrzebujesz, albo zacznij od audytu, a
              zakres dobierzemy razem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
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
                    Zobacz zakres <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Miasta */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Agencja SEO w Poznaniu, SEO w Polsce zdalnie</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              W Poznaniu możemy spotkać się na miejscu, a z firmami z innych miast pracujemy zdalnie: spotkania online,
              wspólne dokumenty i dostęp do tych samych danych. Nie mamy biur poza Poznaniem. Dla wybranych miast
              przygotowaliśmy osobne strony, które opisują pozycjonowanie z uwzględnieniem lokalnego rynku.
            </p>
            <div className="flex flex-wrap gap-3">
              {cityOffers.map((city) => (
                <Link
                  key={city.href}
                  to={city.href}
                  className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-foreground/80 hover:text-primary hover:border-primary/30 transition-colors"
                >
                  Pozycjonowanie {city.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jak wybrać agencję SEO */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Wybór agencji SEO: po czym poznać, że to dobra agencja SEO?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Wybór agencji to decyzja na wiele miesięcy, więc warto zadać kilka pytań przed podpisaniem umowy. Poniżej
              kryteria, po których można ocenić, czy dana agencja SEO jest rzetelna, niezależnie od tego, czy wybierzesz
              nas, czy inną firmę z branży SEO. Skuteczna agencja nie musi być największa. Jeśli chcesz znaleźć skuteczną agencję SEO i porównać kilka ofert, potraktuj je jak
              listę kontrolną.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {choosingCriteria.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <h3 className="font-heading font-bold text-lg mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="p-8 rounded-2xl bg-muted/40 border border-border/50">
            <h2 className="font-heading font-bold text-xl mb-4">Jak wybrać dobrą agencję SEO: kiedy lepiej szukać dalej</h2>
            <ul className="space-y-3">
              {redFlags.map((flag) => (
                <li key={flag} className="flex items-start gap-3 text-foreground/80">
                  <XCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span>{flag}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm mt-6">
              Więcej o tym, jak rozpoznać dobrą agencję SEO, piszemy w poradniku{" "}
              <Link to="/blog/jak-wybrac-agencje-seo" className="text-primary hover:underline">
                jak wybrać agencję SEO
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Proces */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Współpraca z agencją SEO <span className="text-gradient">krok po kroku</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Każda współpraca zaczyna się od zrozumienia firmy, a nie od sprzedaży pakietu. Działania SEO planujemy tak,
                żeby po każdym etapie było jasne, co zostało zrobione, co przyniosło efekt i co robimy dalej.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Po naszej stronie masz osobę, która zna Twój projekt i odpowiada na pytania. Raporty dostajesz w ustalonym
                rytmie, zwykle co miesiąc, a dane źródłowe są dostępne cały czas na Twoich kontach Google. Warunki umowy,
                w tym okres współpracy i wypowiedzenie, omawiamy przed startem.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Do pracy używamy m.in. Google Search Console, Google Analytics 4, narzędzi do crawlowania strony i analizy
                treści. Zestaw narzędzi dobieramy do projektu, ale decyzje zawsze opieramy na danych z Twojej strony.
              </p>
            </motion.div>
            <motion.div {...fadeUp} className="bg-card rounded-2xl border border-border/50 p-8">
              <div className="space-y-6">
                {processSteps.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Co dostajesz */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Co dostajesz we współpracy z naszą agencją SEO</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Działania SEO są mniej widoczne niż nowa strona czy kampania wideo, dlatego dbamy o to, żeby zawsze było
              wiadomo, nad czym pracujemy. Oto, co konkretnie trafia do Ciebie w trakcie pozycjonowania.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item) => (
              <motion.div key={item.title} {...fadeUp} className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artykuł: SEO w marketingu */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Agencja SEO czy agencja marketingowa? Digital marketing w jednym zespole
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Agencja SEO, agencja marketingu internetowego i agencja interaktywna to często różne firmy. Jedna optymalizuje stronę, druga
              prowadzi reklamy, trzecia nagrywa wideo, a klient próbuje to wszystko połączyć. W FOTZ Studio digital
              marketing planujemy razem: ta sama osoba widzi, jakie frazy rosną w wyszukiwarce, jakie kampanie Google Ads
              działają i jakie treści publikujemy w social media.
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-12">
              Content marketing i marketing internetowy jako paliwo dla SEO
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Content marketing jest dla SEO paliwem. Artykuły poradnikowe, opisy usług, studia przypadków czy materiały
              wideo dają wyszukiwarce powód, by pokazywać Twoją stronę na kolejne zapytania. Treści przygotowujemy pod
              konkretne pytania klientów, a nie pod liczbę słów kluczowych. Marketing internetowy, w którym SEO, wideo,
              zdjęcia i social media korzystają z tych samych materiałów, jest po prostu tańszy w produkcji: jeden dzień
              zdjęciowy może dać grafiki do artykułów, film na podstronę usługi i posty do mediów społecznościowych. Jeśli potrzebujesz większej skali, sprawdź
              usługę{" "}
              <Link to="/content-marketing" className="text-primary hover:underline">
                content marketingu
              </Link>
              .
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-12">SEO i performance marketingu: wyszukiwarka i reklamy razem</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SEO i PPC odpowiadają na te same zapytania, ale działają inaczej. Kampanie{" "}
              <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">
                Google Ads
              </Link>{" "}
              dają ruch od pierwszego dnia i pozwalają szybko sprawdzić, które usługi interesują klientów. Pozycjonowanie
              stron internetowych działa wolniej, ale widoczność w wynikach wyszukiwania Google zostaje, kiedy budżet reklamowy się
              kończy. Połączenie SEO i performance marketingu pozwala wykorzystać dane z reklam do planowania treści i
              odwrotnie. Wiele firm szuka osobno agencji SEO i SEM, a u nas obie części kampanii prowadzi ten sam zespół.
            </p>

            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 mt-12">Skuteczne pozycjonowanie stron internetowych zaczyna się od strony</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nawet najlepsza strategia SEO nie pomoże, jeśli strona ładuje się wolno, ma chaotyczną strukturę albo nie
              mówi jasno, co firma oferuje. Nasz zespół robi też{" "}
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">
                strony internetowe
              </Link>
              , więc gdy audyt pokaże, że lepiej przebudować serwis niż go łatać, możemy zrobić to u siebie i od razu pod
              kątem SEO. Przykłady naszych projektów stron znajdziesz w{" "}
              <Link to="/realizacje" className="text-primary hover:underline">
                realizacjach
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO a AI */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              SEO AI: widoczność w Google AI Overviews i odpowiedziach AI
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Klienci coraz częściej zadają pytania asystentom AI zamiast przeglądać listę linków, a Google pokazuje nad
              wynikami podsumowania generowane przez AI. Pozycjonowanie w AI nie zastępuje klasycznego SEO dla stron, tylko na nim
              stoi: modele językowe korzystają z treści, które są dobrze zindeksowane, jasno napisane i spójne z tym, co o
              firmie mówią inne źródła.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              W praktyce oznacza to treści, które bezpośrednio odpowiadają na pytania klientów, uporządkowane dane o firmie
              i ofercie, dane strukturalne oraz spójne informacje o marce w katalogach, mediach i na profilach
              społecznościowych. Widoczność budujemy tymi samymi narzędziami, tylko z większym naciskiem na
              jasność odpowiedzi.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nie obiecujemy, że asystent zacytuje Twoją stronę. Możemy natomiast przygotować ją tak, żeby miała na to realną
              szansę. Szczegóły opisujemy na stronie{" "}
              <Link to="/ai-seo" className="text-primary hover:underline">
                SEO pod AI
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Profesjonalna agencja SEO dla firm lokalnych, sklepów i B2B</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Zakres działań SEO zależy od modelu biznesu. Inaczej pracujemy z warsztatem, inaczej ze sklepem, a jeszcze
              inaczej z producentem maszyn.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((item) => (
              <motion.div key={item.title} {...fadeUp} className="p-6 rounded-2xl bg-card border border-border/50">
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wycena */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ile kosztuje agencja SEO? Od czego zależy wycena</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nie publikujemy cennika pakietów, bo dwie firmy z tej samej branży mogą potrzebować zupełnie innego zakresu
              prac. Wycenę przygotowujemy po rozmowie i wstępnej analizie strony. Na koszt wpływają przede wszystkim:
            </p>
            <ul className="space-y-3 mb-6">
              {pricingFactors.map((factor) => (
                <li key={factor} className="flex items-start gap-3 text-foreground/80">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{factor}</span>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              W wycenie opisujemy zadania na pierwsze miesiące, a nie tylko kwotę. Możesz zacząć od samego audytu SEO i
              zdecydować o dalszej współpracy po zapoznaniu się z wynikami. Ogólne widełki rynkowe i to, z czego się
              składają, omawiamy w artykule{" "}
              <Link to="/blog/ile-kosztuje-pozycjonowanie" className="text-primary hover:underline">
                ile kosztuje pozycjonowanie
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Najczęstsze pytania o agencję SEO</h2>
          </motion.div>
          <FAQSchema items={faqs} />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Poradniki */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading font-bold text-2xl mb-6">Poradniki o SEO</h2>
          <div className="flex flex-wrap gap-3">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                to={guide.href}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                {guide.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Szukasz agencji SEO? Porozmawiajmy</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Opowiedz nam o firmie i stronie. Powiemy, od czego zaczęlibyśmy, jakie działania SEO mają sens w Twojej
              sytuacji i jak mogłaby wyglądać współpraca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Napisz do nas
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
          <h2 className="font-heading font-bold text-lg mb-6">Powiązane usługi</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Google Ads", href: "/performance-marketing/google-ads" },
              { label: "Content Marketing", href: "/content-marketing" },
              { label: "Strony internetowe", href: "/uslugi/strony-internetowe" },
              { label: "Social Media", href: "/social-media" },
              { label: "Sklepy internetowe", href: "/uslugi/strony-internetowe/ecommerce" },
              { label: "AI marketing", href: "/ai-marketing" },
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
