import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  FileSearch,
  FileText,
  Link2,
  MapPin,
  Search,
  ShoppingCart,
} from "lucide-react";

const seoTitle = "Agencja SEO — pozycjonowanie stron | FOTZ";
const seoDescription = "Agencja SEO FOTZ: audyt, technika, treści i lokalna widoczność. Pozycjonowanie stron i sklepów, pomiar zapytań oraz jasne zasady wyceny.";
const canonicalUrl = "https://www.fotz-studio.pl/seo";
const pageTitle = "Agencja SEO i pozycjonowanie stron internetowych";
const heroLead = "Porządkujemy technikę, treści i lokalną widoczność, aby strona odpowiadała na realne wyszukiwania klientów. Przed startem znasz zakres prac, odpowiedzialności, sposób pomiaru zapytań i zasady wyceny.";
const contactHref = "/kontakt?usluga=seo&wariant=audit#formularz";

const serviceItems = [
  {
    icon: FileSearch,
    title: "Audyt SEO i plan wdrożeń",
    description: "Sprawdzamy indeksowanie, technikę, strukturę, treści i sposób pomiaru. Otrzymujesz opis problemów, rekomendacje oraz priorytety z podziałem na prace agencji i zespołu wdrożeniowego. Taka diagnoza może być samodzielną usługą albo punktem wyjścia do stałej współpracy.",
    href: "/seo/audyt",
    linkLabel: "Zobacz zakres audytu SEO",
  },
  {
    icon: Search,
    title: "Pozycjonowanie stron",
    description: "Łączymy badanie intencji, optymalizację oferty, treści, linkowanie i prace techniczne. Strategia SEO określa, które strony mają odpowiadać na zapytania informacyjne, lokalne i transakcyjne. Nie powielamy tekstów pod odmiany tej samej frazy ani nie obiecujemy konkretnej pozycji.",
    href: "/seo/pozycjonowanie",
    linkLabel: "Poznaj pozycjonowanie stron",
  },
  {
    icon: Code2,
    title: "Techniczne SEO",
    description: "Analizujemy dostępność dla robotów, canonical, przekierowania, mapę witryny, dane strukturalne i wydajność. Wskazujemy, co ogranicza przetwarzanie strony i jak przygotować poprawkę. Zakres technical seo uzgadniamy z osobą odpowiedzialną za kod, CMS i publikację zmian.",
    href: "/seo/techniczne",
    linkLabel: "Sprawdź techniczne SEO",
  },
  {
    icon: FileText,
    title: "Content marketing i treści SEO",
    description: "Planujemy treści na podstawie potrzeb odbiorców, oferty i wiedzy dostępnej w firmie. Content marketing obejmuje strony usługowe, poradniki i rozbudowę istotnych kategorii, a seo copywriting porządkuje przekaz oraz linkowanie. Tekst powstaje po weryfikacji faktów, nie z samej listy fraz.",
    href: "/seo/copywriting-seo",
    linkLabel: "Zobacz copywriting SEO",
  },
  {
    icon: MapPin,
    title: "Lokalna widoczność",
    description: "Local seo łączy stronę, Profil Firmy w Google i spójne informacje o działalności. Pomagamy uporządkować kategorie, usługi, obszar obsługi, materiały i proces odpowiadania na opinie. Nie tworzymy fikcyjnych lokalizacji, wpisów ani recenzji i nie sugerujemy adresu, którego firma nie ma.",
    href: "/uslugi/pozycjonowanie-lokalne",
    linkLabel: "Przeczytaj o SEO lokalnym",
  },
  {
    icon: ShoppingCart,
    title: "SEO dla e-commerce",
    description: "Dla sklepu internetowego analizujemy kategorie, produkty, filtry, paginację, warianty i treści generowane przez platformę. Ten obszar wymaga rozróżnienia stron wartych indeksowania od adresów technicznych. Uwzględniamy także ścieżkę zakupu, dostępność oferty i jakość informacji produktowych.",
    href: "/seo/ecommerce",
    linkLabel: "Zobacz SEO dla sklepów",
  },
  {
    icon: Link2,
    title: "Link building i wzmianki",
    description: "Oceniamy istniejący profil linków, tematykę źródeł i sposób ich pozyskiwania. Rekomendacje mogą obejmować materiały eksperckie, digital PR i uporządkowanie wzmianek o firmie. Nie kupujemy masowych pakietów linków i nie przedstawiamy liczby odsyłaczy jako samodzielnego dowodu skuteczności.",
    href: "/seo/off-page",
    linkLabel: "Poznaj SEO off-page",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief i dostęp do informacji",
    description: "Poznajemy ofertę, odbiorców, obszar sprzedaży, sezonowość i sposób obsługi zapytań. Do diagnozy przydają się adres strony, dostęp do Search Console i analityki oraz informacje o wcześniejszych wdrożeniach. Zakres dostępu ograniczamy do potrzeb pracy.",
  },
  {
    step: "02",
    title: "Diagnoza i priorytety",
    description: "Badamy indeksowanie, technikę, treści, widoczność i konkurencyjne strony. Oddzielamy błędy od decyzji wymagających dodatkowych danych. Wskazujemy rezultat audytu, kolejność prac, zależności i czynności po stronie firmy, zanim rozpoczniemy kampanię SEO.",
  },
  {
    step: "03",
    title: "Plan treści i wdrożeń",
    description: "Przypisujemy zapytania do właściwych stron i ustalamy, co poprawić, utworzyć lub połączyć. Harmonogram obejmuje przygotowanie, weryfikację merytoryczną, akceptację i publikację. Nie zastępujemy briefu automatycznym tekstem ani nie publikujemy bez potwierdzenia informacji o ofercie.",
  },
  {
    step: "04",
    title: "Realizacja i kontrola jakości",
    description: "Wdrażamy uzgodniony zakres lub przekazujemy precyzyjne zadania zespołowi technicznemu. Po publikacji sprawdzamy nagłówki, linki, kanonikalne adresy, dostępność treści i konfigurację pomiaru. Zmiany w ofercie oraz priorytetach biznesowych odnotowujemy w planie pracy.",
  },
  {
    step: "05",
    title: "Analiza zapytań i kolejne decyzje",
    description: "Porównujemy wykonane prace z danymi o widoczności, ruchu i kontaktach. Na tej podstawie dostosowujemy strategię SEO, ale nie wyciągamy wniosków z pojedynczego dnia ani pozycji jednej frazy. Raport opisuje także ograniczenia pomiaru i zadania na kolejny etap.",
  },
];

const measurementItems = [
  {
    title: "Widoczność i strony docelowe",
    description: "W Google Search Console analizujemy zapytania, wyświetlenia, kliknięcia i adresy widoczne w wyszukiwarce Google. Grupujemy dane według tematu i intencji, aby ocenić, które obszary zyskują widoczność, a które wymagają poprawy treści lub techniki.",
  },
  {
    title: "Ruch i jakość odwiedzin",
    description: "W analityce sprawdzamy wejścia z wyników organicznych na konkretne oferty i poradniki. Ruch oceniamy wraz z zachowaniem użytkowników oraz zmianami w serwisie. Sama liczba sesji nie przesądza o wartości pozycjonowania dla firmy.",
  },
  {
    title: "Zapytania i ich definicja",
    description: "Uzgadniamy, co oznacza wysłany formularz, kliknięcie telefonu, rozpoczęcie rozmowy lub zamówienie. Kliknięcie telefonu nie jest potwierdzoną sprzedażą, więc opisujemy dokładnie mierzone zdarzenie. Braki w konfiguracji oznaczamy zamiast uzupełniać je szacunkami.",
  },
  {
    title: "Kwalifikacja i wynik biznesowy",
    description: "Ocena jakości leadów wymaga informacji od zespołu obsługi klienta. Warto porównać zgodność z ofertą, obszar działania, etap rozmowy i rezultat. Nie przypisujemy SEO niepotwierdzonego przychodu i nie przedstawiamy korelacji jako gwarancji sprzedaży.",
  },
];

const guideItems = [
  {
    title: "Co to jest SEO?",
    description: "Podstawy optymalizacji dla wyszukiwarek internetowych i roli techniki, treści oraz intencji wyszukiwania.",
    href: "/blog/co-to-jest-seo",
  },
  {
    title: "Audyt SEO krok po kroku",
    description: "Jak czytać diagnozę strony, porządkować problemy i przełożyć rekomendacje na konkretne zadania.",
    href: "/blog/audyt-seo-krok-po-kroku",
  },
  {
    title: "Jak wybrać agencję SEO?",
    description: "Pytania o zakres, odpowiedzialności, umowę, dostęp do danych i sposób oceny współpracy.",
    href: "/blog/jak-wybrac-agencje-seo",
  },
  {
    title: "Ile kosztuje pozycjonowanie?",
    description: "Elementy wyceny i powody, dla których koszt powinien wynikać z rzeczywistego zakresu projektu.",
    href: "/blog/ile-kosztuje-pozycjonowanie",
  },
];

const faqItems = [
  {
    question: "Co to jest agencja SEO?",
    answer: "Agencja SEO to zespół, który planuje i realizuje prace związane z widocznością strony w organicznych wynikach wyszukiwania. W zależności od zakresu może analizować technikę, przygotowywać treści, wspierać pozycjonowanie lokalne i rozwijać linkowanie. Rzetelna oferta wyjaśnia rezultaty poszczególnych etapów, odpowiedzialności i sposób pomiaru, zamiast ograniczać się do deklaracji wysokich pozycji.",
  },
  {
    question: "Czym zajmuje się agencja SEO na co dzień?",
    answer: "Praca obejmuje analizę zapytań i stron konkurencji, kontrolę indeksowania, przygotowanie zadań technicznych, planowanie treści oraz ocenę danych po wdrożeniu. Specjalista SEO dokumentuje rekomendacje i współpracuje z osobami odpowiedzialnymi za ofertę, kod i sprzedaż. Nie każdy miesiąc wygląda tak samo, ponieważ priorytety wynikają z diagnozy i tempa akceptacji.",
  },
  {
    question: "Ile kosztuje SEO miesięcznie?",
    answer: "Koszt zależy od skali serwisu, konkurencyjności tematów, stanu technicznego, liczby potrzebnych treści, obszaru działania i zakresu wdrożeń. Inaczej wyceniamy jednorazowy audyt, a inaczej stałe działania SEO dla rozbudowanego sklepu internetowego. Nie podajemy sztywnego cennika przed analizą. Oferta rozdziela prace doradcze, treści, wdrożenia i dodatkowe usługi.",
  },
  {
    question: "Jak wybrać dobrą agencję SEO?",
    answer: "Zapytaj o proces diagnozy, przykładową strukturę rekomendacji, osoby odpowiedzialne za prace, zasady akceptacji i dostęp do danych. Dobra agencja SEO potrafi wyjaśnić, czego nie obejmuje zakres i jakie ryzyka widzi. Ranking nie wskaże automatycznie najlepszej agencji SEO w Polsce. Porównuj konkretne warunki, kompetencje i jakość komunikacji, nie same obietnice.",
  },
  {
    question: "Po jakim czasie widać efekty działań SEO?",
    answer: "Tempo zależy od punktu wyjścia, konkurencji, skali zmian, historii domeny i czasu wdrożenia. Poprawkę techniczną można zweryfikować po publikacji, ale reakcja wyszukiwarki i zachowanie użytkowników wymagają obserwacji danych. SEO to proces, nie jednorazowa zmiana. Nie gwarantujemy pozycji, terminu efektu ani liczby klientów.",
  },
  {
    question: "Agencja SEO, freelancer czy zespół in-house — co wybrać?",
    answer: "Freelancer może pasować do ograniczonego zakresu, zespół wewnętrzny do codziennej pracy blisko produktu, a agencja do połączenia kilku kompetencji i procesu. Decyzja o modelu obsługi powinna uwzględniać skalę zadań, dostęp do specjalistów technicznych i sposób przekazywania wiedzy. Outsourcing SEO nie zdejmuje z firmy odpowiedzialności za prawdziwość oferty i obsługę zapytań.",
  },
  {
    question: "Czy każda firma potrzebuje stałej obsługi SEO?",
    answer: "Nie. Czasem wystarczy audyt, uporządkowanie strony ofertowej albo konsultacja dla wewnętrznego zespołu. Taki model współpracy ma uzasadnienie, gdy zakres obejmuje regularne treści, rozwój serwisu, analizę wielu typów zapytań lub koordynację wdrożeń. Przed decyzją warto określić problem, dostępne zasoby i sposób oceny rezultatu.",
  },
];

export default function SEOCluster() {
  return (
    <Layout workPlacement="manual">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords="agencja SEO, pozycjonowanie stron, audyt SEO, techniczne SEO, content marketing, SEO lokalne, SEO e-commerce"
      />
      <ServiceSchema name={pageTitle} description={heroLead} provider="FOTZ Studio" areaServed="Polska" />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Agencja SEO", url: canonicalUrl },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,hsl(var(--primary)/0.10),transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Technika, treści i pomiar zapytań
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              {pageTitle}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-10 leading-relaxed">
              {heroLead}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to={contactHref}>
                  Poproś o diagnozę i zakres SEO <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#agencja-seo-oferta">Zobacz usługi agencji</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-y border-border/50 bg-muted/20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Czym jest agencja SEO i kiedy warto z nią współpracować?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-5">
              <p>
                Agencja SEO pomaga firmie zwiększać widoczność strony w organicznych wynikach wyszukiwania i przekładać ją na uzgodnione działania użytkowników. W praktyce łączy analizę biznesu, optymalizację dla wyszukiwarek internetowych, technikę, content i pomiar. Profesjonalna agencja SEO nie zaczyna od pakietu fraz, tylko od pytania, jakie problemy klientów może rozwiązać oferta i które strony powinny na nie odpowiadać.
              </p>
              <p>
                Pozycjonowanie stron internetowych różni się od emisji reklam. SEO i SEM mogą uzupełniać się w marketingu internetowym, ale organiczna widoczność w Google wymaga pracy nad serwisem i nie jest kupowanym miejscem. Kampaniami Google Ads można sprawdzić przekaz lub uzupełnić zasięg, natomiast SEO i PPC należy rozliczać oraz oceniać jako osobne źródła ruchu.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Współpraca z agencją jest przydatna, gdy firma potrzebuje diagnozy, dostępu do kilku specjalizacji albo uporządkowanego procesu publikacji i wdrożeń. Może dotyczyć nowej strony internetowej, istniejącego serwisu usługowego lub sklepu. Jeśli potrzebna jest tylko niezależna opinia, jednorazowa usługa SEO będzie lepsza niż automatycznie proponowany abonament.
              </p>
              <p>
                SEO to fundament widoczności opartej na przydatności, ale nie zastępuje dobrej oferty, obsługi klienta ani sprzedaży. Marketing SEO powinien uwzględniać to, co dzieje się po wejściu na stronę. Dlatego na starcie ustalamy, kto odbiera zapytania, jakie informacje są potrzebne do oferty i jak firma rozpoznaje wartościowy kontakt.
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-8 border-l-2 border-primary/40 pl-5">
            Strona internetowa i sklep internetowy wymagają odmiennych priorytetów, ale użytkownicy mogą wyszukiwać informacji o problemie, porównywać oferty i wyszukiwać warunków współpracy przed kontaktem. W naszej agencji SEO planowanie pozycjonowania łączy technikę z treścią, a ocena kampanii SEO uwzględnia jakość zapytań. Sklep internetowy potrzebuje odrębnych reguł indeksowania, natomiast witryna usługowa powinna przede wszystkim wyjaśniać ofertę. W zakresie SEO analizujemy skuteczność pozycjonowania na podstawie dostępnych danych. Na tej podstawie można dostosować strategię SEO, również gdy zmienia się sposób prezentowania informacji w odpowiedziach AI. Takie rozumienie pozycjonowania w marketingu w Polsce pomaga oddzielić pracę nad widocznością od obietnic wyniku. Agencja powinna przedstawić ten podział przed wyceną, a etapy pozycjonowania uzgodnić z zespołem firmy.
          </p>
        </div>
      </section>

      <section id="agencja-seo-oferta" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
              Zakres usług agencji SEO: od audytu do wdrożenia
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Zakres dobieramy do problemu, skali serwisu i zasobów zespołu. Poniższe obszary mogą tworzyć jeden proces lub stanowić osobne zlecenie. Każda karta prowadzi do szczegółowej oferty, dzięki czemu ten hub pomaga wybrać właściwą ścieżkę zamiast powielać podstrony.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item) => (
              <article key={item.title} className="h-full rounded-2xl bg-card border border-border/50 p-6 flex flex-col">
                <item.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-xl font-heading font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5 flex-1">{item.description}</p>
                <Link to={item.href} className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:underline">
                  {item.linkLabel} <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agencja-seo-strategia" className="py-20 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Audyt SEO i strategia oparta na intencji wyszukiwania
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-5">
              <p>
                Diagnoza zaczyna się od rozróżnienia problemu technicznego, treściowego i biznesowego. Sprawdzamy, czy wyszukiwarka może dotrzeć do ważnych adresów, czy strona odpowiada intencji zapytania i czy użytkownik rozumie kolejny krok. Taki audyt opisuje dowody, wpływ problemu i rekomendowany sposób naprawy. Nie jest automatycznie generowaną listą ostrzeżeń bez kontekstu.
              </p>
              <p>
                Analiza zapytań obejmuje język klientów, etap decyzji, lokalizację usługi i rodzaj potrzebnej strony. Mapujemy wyszukiwania informacyjne na poradniki, transakcyjne na ofertę, a lokalne na strony potwierdzające rzeczywisty obszar działania. Jedna strona nie musi odpowiadać na wszystkie hasła. Czasem właściwą rekomendacją jest połączenie powtarzalnych treści.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Strategia SEO porządkuje prace w czasie: najpierw dostępność i kluczowe szablony, potem treści, linkowanie oraz rozwój nowych obszarów. Priorytet zależy od wpływu na użytkownika, nakładu i zależności technicznych. Dzięki temu zespół wie, dlaczego dana rekomendacja jest ważna i jak sprawdzić jej wdrożenie.
              </p>
              <p>
                Skuteczne pozycjonowanie nie polega na wpisywaniu frazy w każdy akapit. Eksperci SEO powinni rozumieć temat, rozpoznawać braki informacji i pracować z osobą, która zna rzeczywistą usługę. Dobra agencja zaznacza także, czego nie da się ustalić bez danych. Nie przypisujemy sobie wyników sprzedaży, których nie można potwierdzić w pomiarze.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="agencja-seo-technika" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Techniczne SEO: indeksowanie, wydajność i kontrola zmian
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Techniczny audyt obejmuje odpowiedzi serwera, robots.txt, mapę witryny, kanonikalne adresy, przekierowania, wersję mobilną i dostępność treści w renderowanym HTML. Analizujemy również parametry, duplikację, paginację i błędy powstające po publikacji. SEO on-site uwzględnia strukturę nagłówków, linkowanie wewnętrzne oraz dane strukturalne zgodne z widoczną treścią.
                </p>
                <p>
                  Przy wydajności patrzymy na rzeczywiste wąskie gardła: obrazy, skrypty, fonty, zasoby blokujące i stabilność układu. Core Web Vitals opisujemy na podstawie dostępnych danych laboratoryjnych i terenowych, nie obietnicy idealnego wyniku. Zalecenie zawiera miejsce zmiany, oczekiwany rezultat techniczny i sposób ponownego sprawdzenia.
                </p>
                <p>
                  Wdrożenie wymaga właściciela i akceptacji. Możemy przygotować zadanie dla programisty, współpracować z administratorem CMS albo realizować uzgodnione poprawki w kodzie. Przed publikacją ustalamy kopię zapasową, środowisko testowe i kontrolę regresji. Po wdrożeniu sprawdzamy, czy poprawka nie usunęła treści, linków albo ważnych ustawień indeksowania.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-7 h-fit">
              <h3 className="text-xl font-heading font-bold mb-5">Rezultat prac technicznych</h3>
              <ul className="space-y-4 text-muted-foreground">
                {[
                  "Opis problemu wraz z adresem lub szablonem, którego dotyczy.",
                  "Rekomendacja wdrożenia i wskazanie zależności technicznych.",
                  "Priorytet oparty na wpływie, nakładzie i ryzyku zmiany.",
                  "Kontrola po publikacji oraz lista kwestii wymagających dalszej decyzji.",
                  "Jasny podział odpowiedzialności między agencję i zespół firmy.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/seo/techniczne" className="inline-flex items-center gap-2 text-primary font-medium mt-7 hover:underline">
                Szczegóły technicznego SEO <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="agencja-seo-tresci" className="py-20 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Treści i content marketing: odpowiedzi zamiast listy fraz
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-5">
              <p>
                Plan treści wynika z pytań odbiorców i luki między ofertą a informacjami dostępnymi w serwisie. Strona usługowa ma wyjaśniać zakres, warunki i kolejny krok, poradnik odpowiada na konkretny problem, a kategoria sklepu pomaga wybrać produkt. Content marketing nie polega na publikowaniu artykułów dla samej liczby adresów. Każdy materiał powinien mieć odbiorcę, zadanie i właściciela merytorycznego.
              </p>
              <p>
                Przed napisaniem tekstu zbieramy informacje o procesie, wymaganiach, ograniczeniach i najczęstszych pytaniach klientów. Redakcja obejmuje strukturę, naturalny język, nagłówki i odnośniki do powiązanych treści. Optymalizacja pod kątem SEO pomaga uporządkować temat, ale nie zastępuje sprawdzenia faktów. Materiały o firmie, warunkach lub produktach wymagają potwierdzenia przez przedstawiciela marki.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Linkowanie wewnętrzne prowadzi między poradnikiem, właściwą usługą i kontaktem. Nie tworzymy masy identycznych anchorów ani list miast bez odrębnej wartości. Istniejące treści można zaktualizować, połączyć lub rozbudować, jeśli analiza wskaże powielenie intencji. Dzięki temu wyszukiwarka i użytkownik łatwiej rozpoznają najważniejszą stronę w danym temacie.
              </p>
              <p>
                Widoczność obejmuje dziś także odpowiedzi AI, dlatego SEO AI warto opierać na jasnych definicjach, źródłach i oryginalnej wiedzy. Pozycjonowanie w AI nie jest osobnym przyciskiem ani gwarantowanym cytowaniem. Google AI Overviews i inne systemy mogą zmieniać sposób prezentowania odpowiedzi, ale nadal potrzebują wiarygodnych informacji. Nie dodajemy twierdzeń o marce tylko po to, aby pojawiła się w Google i AI.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/seo/copywriting-seo" className="text-primary font-medium hover:underline">Copywriting SEO i optymalizacja treści</Link>
            <Link to="/content-marketing/strategia" className="text-primary font-medium hover:underline">Strategia content marketingu</Link>
          </div>
        </div>
      </section>

      <section id="agencja-seo-lokalne" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Pozycjonowanie lokalne i Profil Firmy w Google
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-5">
              <p>
                Pozycjonowanie lokalne pomaga osobom, które szukają usługi w określonym obszarze. Strona powinna jasno opisywać ofertę, rzeczywiste miejsce świadczenia usług, zasady dojazdu i dostępne kanały kontaktu. W Profilu Firmy w Google porządkujemy nazwę, kategorie, dane, opis, zdjęcia i usługi zgodnie z informacjami przekazanymi przez firmę. Nie dopisujemy atrakcyjniejszych warunków bez potwierdzenia.
              </p>
              <p>
                Obecność w wynikach map i wynikach organicznych zależy m.in. od trafności, odległości i rozpoznawalności, więc nie każdy element pozostaje pod kontrolą agencji. Rekomendacje mogą obejmować stronę lokalną, spójność danych, poradniki dla klientów z regionu i system pracy z opiniami. Opinie muszą pochodzić od prawdziwych klientów; nie organizujemy sztucznych recenzji.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Firmy działające mobilnie i wielooddziałowo wymagają różnego podejścia. Najpierw ustalamy prawdziwy model obsługi, a dopiero potem strukturę stron i profili. Agencja interaktywna nie powinna tworzyć wirtualnych biur ani kopiować tego samego tekstu z podmienioną nazwą miasta. Taka praktyka nie dostarcza użytkownikowi nowej informacji i utrudnia wiarygodną prezentację firmy.
              </p>
              <p>
                Pomiar lokalny rozdziela zapytania o markę, usługi i tematy informacyjne. W raporcie warto obserwować strony docelowe, interakcje z profilem oraz jakość kontaktów, jeśli firma udostępnia te dane. Wejście z profilu nie dowodzi realizacji sprzedaży. Dlatego rekomendujemy prosty sposób oznaczania źródła zapytań również w rozmowie telefonicznej i obsłudze formularza.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/uslugi/pozycjonowanie-lokalne" className="text-primary font-medium hover:underline">Usługa pozycjonowania lokalnego</Link>
            <Link to="/seo/google-maps" className="text-primary font-medium hover:underline">Widoczność w Mapach Google</Link>
            <Link to="/blog/pozycjonowanie-lokalne-dla-firm" className="text-primary font-medium hover:underline">Poradnik o SEO lokalnym</Link>
          </div>
        </div>
      </section>

      <section id="agencja-seo-specjalizacje" className="py-20 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">
            Sklep, linkowanie i marketing internetowy: różne zadania, wspólna strategia
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <article className="rounded-2xl border border-border/50 bg-card p-6">
              <ShoppingCart className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">SEO dla stron i sklepów internetowych</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  W sklepie internetowym najpierw ustalamy rolę kategorii, produktów, filtrów i wyszukiwarki wewnętrznej. Adresy z parametrami nie zawsze powinny trafiać do indeksu, a niedostępny produkt wymaga decyzji zgodnej z ofertą. Opisy muszą pomagać w wyborze, zawierać prawdziwe parametry i nie powielać dostawcy bez dodatkowej wartości.
                </p>
                <p>
                  SEO dla stron usługowych koncentruje się na zakresie, dowodach kompetencji i drodze do kontaktu. W obu przypadkach dane strukturalne muszą odpowiadać widocznej zawartości, a optymalizacja nie może pogarszać ścieżki zakupu ani kontaktu.
                </p>
              </div>
            </article>
            <article className="rounded-2xl border border-border/50 bg-card p-6">
              <Link2 className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">SEO off-page i wiarygodne źródła</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Praca poza stroną zaczyna się od oceny istniejących odsyłaczy i wzmianek. Analizujemy tematyczne dopasowanie, kontekst linku, historię domen i ryzyko schematycznych działań. Link building nie powinien opierać się na obietnicy określonej liczby publikacji bez wskazania źródeł i zasad ich wyboru.
                </p>
                <p>
                  Materiał ekspercki, badanie lub użyteczne narzędzie może dać powód do naturalnego polecenia. Współpraca z wydawcami wymaga przejrzystych warunków i zgodności z tematem. Nie gwarantujemy wzrostu metryki narzędzia ani nie utożsamiamy jej bezpośrednio z ruchem i zapytaniami.
                </p>
              </div>
            </article>
            <article className="rounded-2xl border border-border/50 bg-card p-6">
              <BarChart3 className="w-7 h-7 text-primary mb-4" />
              <h3 className="text-xl font-heading font-bold mb-3">SEO, SEM i AI w planie marketingu</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Agencje SEO i SEM mogą koordynować badanie zapytań, ale organiczne i płatne wyniki wymagają osobnych danych oraz budżetów. Digital marketing łączy wyszukiwarkę z treściami, analityką i stroną docelową. W obszarach SEO i performance marketingu wspólny brief pomaga uniknąć sprzecznych komunikatów.
                </p>
                <p>
                  SEM i AI nie zastępują technicznej diagnozy. Automatyzacja przyspiesza porządkowanie informacji, lecz rekomendacje wymagają kontroli. W branży SEO w Polsce łatwo spotkać obietnice błyskawicznych efektów; bezpieczniej porównywać konkretny proces, zakres odpowiedzialności i jakość raportowania.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="agencja-seo-wybor" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Wybór agencji SEO: jak rozpoznać dobrą współpracę?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-muted-foreground leading-relaxed">
            <div className="space-y-5">
              <p>
                Jeśli szukasz agencji SEO, zacznij od zapytania ofertowego zawierającego cel, adres serwisu, odbiorców i rzeczywisty obszar działania. Poproś o opis diagnozy, zakres prac, osoby zaangażowane i sposób raportowania. Aby świadomie wybrać wykonawcę, porównuj rezultaty poszczególnych etapów, a nie deklarowaną liczbę fraz. Dana agencja SEO powinna wyjaśnić również, czego potrzebuje od Twojego zespołu.
              </p>
              <p>
                Jak rozpoznać dobrą agencję SEO? Po konkretnych pytaniach o biznes, jasnych zastrzeżeniach i gotowości do omówienia ryzyka. Rzetelnej agencji SEO można zadać pytanie o sposób doboru treści, źródła linków, prawa do kont i zasady zakończenia współpracy. Odpowiedź „strategia jest tajna” nie zastępuje dokumentacji prac wykonywanych na Twojej stronie.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Przed podpisaniem umowy sprawdź: okres, wypowiedzenie, akceptacje, własność materiałów, dostęp do kont i przekazanie dokumentacji. Nie ma jednego modelu najlepszego dla każdej firmy. Skuteczną agencję SEO poznaje się po dopasowaniu zakresu i uczciwym opisie danych, nie po gwarancji pierwszej pozycji. Skuteczna agencja potrafi też powiedzieć, że danego działania nie warto realizować.
              </p>
              <p>
                Agencja marketingowa, agencja marketingu internetowego i specjalista SEO mogą oferować różne kompetencje. Freelancer bywa odpowiedni przy ograniczonym zadaniu, zespół in-house przy stałej pracy blisko produktu, a zespół zewnętrzny przy potrzebie kilku specjalizacji. Taki wybór modelu nie zwalnia firmy z weryfikacji informacji o ofercie, prawidłowej obsługi klienta i decyzji o budżecie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="agencja-seo-proces" className="py-20 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Współpraca z agencją SEO krok po kroku
          </h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Proces pokazuje, co powstaje i kto podejmuje decyzję. Harmonogram zależy od zakresu, dostępu do informacji oraz tempa wdrożeń, dlatego nie utożsamiamy rozpoczęcia prac z natychmiastowym wynikiem w wyszukiwarce.
          </p>
          <div className="space-y-7">
            {processSteps.map((item) => (
              <article key={item.step} className="flex gap-5 md:gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agencja-seo-pomiar" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
              Jak mierzymy widoczność, ruch i zapytania?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Pomiar rozdziela etapy: widoczność w wynikach wyszukiwania Google, wejście na stronę, wykonanie działania, kontakt i sprzedaż. Nie zgadujemy danych, których nie ma w podłączonych narzędziach, i opisujemy ograniczenia każdego źródła.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {measurementItems.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border/50 bg-card p-6">
                <BarChart3 className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mt-8 max-w-4xl">
            Raport powinien prowadzić do decyzji: kontynuować wdrożenie, zmienić treść, sprawdzić technikę albo poprawić pomiar. Sezonowość, zmiany oferty i aktualizacje wyszukiwarki zaznaczamy jako kontekst, a nie wygodne wyjaśnienie każdego spadku. Jeśli dane nie pozwalają przypisać wyniku konkretnej pracy, mówimy o tym wprost. Taki opis jest bardziej użyteczny niż tabela samych wzrostów bez źródła.
          </p>
        </div>
      </section>

      <section id="agencja-seo-wycena" className="py-20 md:py-24 bg-muted/30 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Warunki współpracy i wycena bez sztywnego cennika
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Na koszt wpływają wielkość serwisu, liczba szablonów, stan techniczny, konkurencyjność, zakres treści, lokalizacje rzeczywistej działalności i sposób wdrażania zmian. Jednorazowy audyt wyceniamy według głębokości analizy i rezultatów, a stałe pozycjonowanie według uzgodnionego procesu. Dodatkowy budżet reklamowy, zdjęcia, produkcja lub prace programistyczne nie powinny znikać w niejasnej pozycji „pozostałe”.
              </p>
              <p>
                Nie podajemy sztywnego cennika przed analizą i nie rozliczamy deklarowanej pozycji jako gwarantowanego produktu. Oferta opisuje prace, rezultaty, odpowiedzialności, harmonogram, akceptacje i warunki dodatkowych zadań. Przy ograniczonym budżecie lepiej zawęzić zakres lub etap niż obiecywać pełną obsługę bez zasobów na jej wykonanie.
              </p>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-7">
              <h3 className="text-xl font-heading font-bold mb-5">Co przygotować do wyceny?</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Adres strony i opis najważniejszej oferty.",
                  "Odbiorcy, rzeczywisty obszar sprzedaży i cel działań.",
                  "Informacje o wcześniejszych pracach i dostępnych danych.",
                  "Osoba odpowiedzialna za akceptacje i wdrożenia.",
                  "Orientacyjny budżet, termin i sposób oceny zapytań.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed mt-8">
            Warunki powinny określać własność przygotowanych materiałów, zasady korzystania z kont, przekazanie dokumentacji i zakończenie prac. Dostępy nadajemy uprawnieniom, nie przez prywatne hasła pracowników. Jeżeli stała obsługa ma obejmować publikacje lub kontakt z wydawcami, zakres akceptacji i odpowiedzialności zapisujemy przed rozpoczęciem działań.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">Poradniki dla osób planujących SEO</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {guideItems.map((item) => (
              <article key={item.href} className="border-l-2 border-primary/40 pl-5">
                <h3 className="font-heading font-semibold text-lg mb-2">
                  <Link to={item.href} className="hover:text-primary transition-colors">{item.title}</Link>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                <Link to={item.href} className="text-primary text-sm font-medium hover:underline">Przeczytaj poradnik</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="agencja-seo-faq" className="py-20 md:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">
            Agencja SEO — pytania i odpowiedzi
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                id={`agencja-seo-faq-${index}`}
                className="rounded-xl border border-border/50 bg-card px-6"
              >
                <summary className="cursor-pointer py-5 text-left font-medium hover:text-primary">
                  {item.question}
                </summary>
                <p className="pb-5 text-muted-foreground leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Zacznijmy od zakresu, nie od obietnicy pozycji
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Opisz stronę, ofertę i problem, który chcesz rozwiązać. Wskażemy informacje potrzebne do diagnozy oraz przygotujemy rekomendowany zakres prac i pomiaru. Decyzję o współpracy podejmiesz po poznaniu warunków, bez gwarancji wyniku, którego nie da się uczciwie zapewnić.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to={contactHref}>
              Poproś o zakres i wycenę SEO <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
