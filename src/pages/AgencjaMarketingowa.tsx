import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clapperboard,
  FileText,
  Globe2,
  Lightbulb,
  LineChart,
  Mail,
  MapPin,
  PenTool,
  Search,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import {
  BreadcrumbSchema,
  FAQSchema,
  LocalBusinessSchema,
  OrganizationSchema,
  ServiceSchema,
} from "@/components/seo/StructuredData";

const seoTitle = "Agencja marketingu internetowego — marketing online | FOTZ";
const seoDescription = "Agencja marketingu internetowego FOTZ: strategia, SEO, Google Ads, Facebook i social media. Marketing internetowy, treści i kampanie dla Twojego biznesu.";
const canonicalUrl = "https://www.fotz-studio.pl/agencja-marketingowa";
const contactHref = "/kontakt?usluga=marketing#formularz";

const serviceItems = [
  {
    icon: Search,
    title: "SEO i widoczność w wyszukiwarce",
    description:
      "Audyt SEO jest punktem wyjścia do działań: porządkuje indeksowanie, technikę, strukturę i treści. Specjalista SEO dobiera słowa kluczowe do intencji, planuje podstrony oraz linkowanie wewnętrzne, a następnie wskazuje wdrożenia. Usługi SEO obejmują także optymalizację istniejących treści. Strategie SEO dla sklepu internetowego uwzględniają kategorie, produkty i filtry; SEO dla e-commerce nie polega wyłącznie na dodawaniu opisów. W zakresie SEO oceniamy widoczność w wynikach wyszukiwania, ruch i zapytania osobno. SEO AI traktujemy jako rozszerzenie pracy nad zrozumiałymi, wiarygodnymi treściami, a nie obietnicę obecności w każdej odpowiedzi AI.",
    href: "/seo/pozycjonowanie",
    link: "Poznaj zakres pozycjonowania",
  },
  {
    icon: FileText,
    title: "Content marketing i treści na stronę",
    description:
      "Content marketing odpowiada na pytania odbiorców i wyjaśnia ofertę, zanim nastąpi kontakt. Przygotowujemy artykuły, opisy usług, teksty na stronę internetową, posty oraz scenariusze na podstawie informacji zweryfikowanych z firmą. SEO i content marketing planujemy według potrzeb grupy docelowej, a nie wyłącznie liczby publikacji. Łączymy SEO i content z jasnym przekazem, właściwym nagłówkiem oraz następnym krokiem dla czytelnika. Tekst może wspierać pozyskiwanie nowych klientów, relacje z klientami lub pracę zespołu sprzedaży. Każdy materiał ma wskazane przeznaczenie, właściciela merytorycznego i zasady akceptacji.",
    href: "/content-marketing/strategia",
    link: "Zobacz podejście do treści",
  },
  {
    icon: Target,
    title: "Google Ads, kampanie PPC i reklama social",
    description:
      "Kampanie Google Ads odpowiadają na aktywne wyszukiwania, natomiast Facebook Ads i inne płatne formaty w mediach społecznościowych pomagają dotrzeć do wybranej grupy odbiorców. Prowadzenie kampanii obejmuje strukturę konta, kreacje, stronę docelową, budżet oraz kontrolę zdarzeń. Kampanie PPC wymagają innego miernika niż publikacje organiczne, dlatego SEO i SEM oraz SEO i PPC analizujemy jako uzupełniające się kanały, nie jeden wynik. Reklama na Facebooku i Instagramie może testować komunikaty, a kampania w wyszukiwarce Google — sprawdzać popyt. Nie uznajemy kliknięcia za klienta i nie gwarantujemy kosztu sprzedaży przed zebraniem danych.",
    href: "/performance-marketing/google-ads",
    link: "Sprawdź obsługę Google Ads",
  },
  {
    icon: Users,
    title: "Social media i komunikacja z odbiorcami",
    description:
      "Obsługa social media obejmuje plan tematów, przygotowanie uzgodnionych materiałów, publikacje i podsumowanie. Media społecznościowe mogą budować rozpoznawalność Twojej marki, odpowiadać na wątpliwości i wspierać relacje z klientami, ale nie zastępują strony ani obsługi zapytań. Organiczne posty rozdzielamy od płatnej emisji: mają inny cel, sposób pracy i raport. Zakres email marketingu rozważamy wtedy, gdy firma ma legalnie pozyskaną bazę i realny powód do regularnego kontaktu. Działania promocyjne w social media dobieramy do zasobów, które pozwalają zachować jakość, zamiast automatycznie otwierać profile na każdej platformie.",
    href: "/uslugi/social-media-marketing",
    link: "Zobacz obsługę social media",
  },
  {
    icon: Clapperboard,
    title: "Produkcja foto, wideo i grafik",
    description:
      "Produkcja materiałów wynika z kanału i komunikatu, nie odwrotnie. Przygotowujemy zdjęcia, filmy, rolki, grafiki reklamowe i projekty do identyfikacji, ustalając wcześniej formaty, miejsca publikacji oraz liczbę wersji. Przed nagraniami powstaje scenariusz lub lista ujęć, a przed projektem graficznym — informacja o materiałach źródłowych i akceptacji. Te same zasoby mogą zasilić stronę, treści SEO i kampanię reklamową, lecz każda adaptacja wymaga osobnego zaplanowania. Logistykę, dojazd, prawa do uzgodnionych plików i sposób przekazania materiałów zapisujemy w ofercie. Nie zakładamy, że jedna nagrana rozmowa automatycznie wystarczy do każdej kampanii.",
    href: "/uslugi/produkcja-video",
    link: "Poznaj produkcję materiałów",
  },
  {
    icon: Globe2,
    title: "Strony internetowe i optymalizacja konwersji",
    description:
      "Strona internetowa powinna porządkować ofertę i prowadzić do uzgodnionego działania: formularza, telefonu, rezerwacji albo zakupu. Projektujemy strukturę, treści, wersję mobilną i techniczne podstawy SEO, a landing page dopasowujemy do konkretnej kampanii. Optymalizacja konwersji zaczyna się od sprawdzenia komunikatu, działania formularza, ścieżki kontaktu i jakości ruchu. Dla sklepu internetowego analizujemy również kategorie, koszyk i przeszkody zakupowe. Zmiany techniczne, copywriting i analityka są osobnymi zadaniami w planie, dzięki czemu wiadomo, co powstaje i kto wdraża poprawki. Nie obiecujemy wzrostu konwersji bez danych i możliwości przeprowadzenia testu.",
    href: "/uslugi/strony-internetowe",
    link: "Sprawdź tworzenie stron",
  },
];

const channelDecisions = [
  {
    title: "Aktywny popyt i wyszukiwarka",
    text: "Jeżeli potencjalny klient już szuka rozwiązania, rozważamy SEO i Google Ads. Płatna kampania może dostarczyć informacji o zapytaniach, a treści organiczne rozwijać odpowiedzi na potrzeby odbiorców. Oba kanały wymagają strony, która jasno przedstawia ofertę i umożliwia kontakt.",
  },
  {
    title: "Popyt wymagający wyjaśnienia",
    text: "Przy złożonej usłudze B2B lub dłuższej decyzji priorytetem mogą być eksperckie treści, materiały dla handlowców, LinkedIn i precyzyjne kampanie. Marketing internetowy ma wtedy wspierać rozmowę oraz kwalifikację, a nie generować jak najwięcej przypadkowych formularzy.",
  },
  {
    title: "Marka, społeczność i dostępne zasoby",
    text: "Gdy celem jest rozpoznawalność albo regularny kontakt, sprawdzamy social media, wideo i email. Wybór zależy od obecności odbiorców, dostępnych materiałów i czasu na publikacje. Marketingu bezpośredniego nie mieszamy z budowaniem marki; w opisie celu marketingu bezpośredniego zapisujemy konkretne działanie odbiorcy.",
  },
];

const measurementItems = [
  {
    icon: Search,
    title: "Widoczność i źródła ruchu",
    text: "W Search Console analizujemy dostępne zapytania, wyświetlenia, kliknięcia i strony widoczne w wyszukiwarce Google. Dla płatnych kampanii sprawdzamy koszt emisji, wejścia i źródło ruchu. Dane organiczne oraz reklamowe oceniamy oddzielnie, z uwzględnieniem zmian na stronie i sezonowości. Nie przypisujemy tej stronie aktualnych wyników GSC, których nie dostarczono do analizy.",
  },
  {
    icon: LineChart,
    title: "Leady i zdefiniowane zdarzenia",
    text: "Przed pomiarem ustalamy, co oznacza lead: poprawnie wysłany formularz, odbyta rozmowa, rezerwacja czy inne działanie. Kliknięcie numeru telefonu nie dowodzi rozmowy, a formularz nie oznacza nowego klienta. Konfigurujemy lub weryfikujemy dostępne zdarzenia, opisujemy ich ograniczenia i oddzielamy konwersję kontaktową od sprzedaży. Raport pokazuje źródło zapytań tylko wtedy, gdy dane rzeczywiście na to pozwalają.",
  },
  {
    icon: BarChart3,
    title: "Jakość zapytań i obsługa sprzedaży",
    text: "Do oceny jakości potrzebujemy informacji z firmy: zgodności z ofertą, obszaru działania, wartościowej rozmowy, wysłanej oferty i realizacji. Te dane pozwalają odróżnić pozornie tani lead od biznesowej szansy. Koszt obsługi, produkcji i emisji rozliczamy osobno, aby analiza opłacalności była czytelna. Jeśli informacji o sprzedaży brakuje, oznaczamy lukę zamiast przypisywać kampanii niepotwierdzony przychód lub klientów.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Rozmowa, brief i dostępne dane",
    description:
      "Poznajemy ofertę, grupę docelową, cele biznesowe, obszar sprzedaży i sposób odbierania zapytań. Sprawdzamy stronę, profile oraz materiały, które można wykorzystać. Brief określa również budżet, oczekiwany termin i osobę decyzyjną. Jeśli danych nie ma, zapisujemy, co trzeba sprawdzić przed rekomendacją.",
  },
  {
    step: "02",
    title: "Diagnoza i priorytety",
    description:
      "Wskazujemy przeszkody w komunikacji, technice, treściach, kampaniach lub pomiarze. Porównujemy dotychczasowe działania marketingowe z celem i możliwościami zespołu. Na tym etapie może się okazać, że potrzebny jest audyt, poprawka strony albo uporządkowanie obsługi leadów przed zwiększeniem emisji reklam.",
  },
  {
    step: "03",
    title: "Strategia, zakres i odpowiedzialności",
    description:
      "Przygotowujemy plan prac z rezultatem każdego etapu, harmonogramem, kryteriami odbioru i wyceną. Zapisujemy, co realizuje FOTZ Studio, co dostarcza firma i które decyzje wymagają akceptacji. Oferta oddziela strategię, produkcję, wdrożenie, prowadzenie kampanii oraz budżet reklamowy płacony dostawcy platformy.",
  },
  {
    step: "04",
    title: "Produkcja, akceptacja i wdrożenie",
    description:
      "Tworzymy uzgodnione teksty, grafiki, nagrania, strony lub konfiguracje. Firma otrzymuje materiały do uwag przed publikacją, a my przekazujemy informacje potrzebne do sprawdzenia zgodności z ofertą. Dostępy do kont organizujemy bez przekazywania prywatnych haseł pracowników. Publikacja i emisja rozpoczynają się po potwierdzeniu zakresu.",
  },
  {
    step: "05",
    title: "Raport, wnioski i kolejny etap",
    description:
      "Podsumowujemy wykonaną pracę, dostępne dane, jakość kontaktów i ograniczenia pomiaru. Wskazujemy, co utrzymać, poprawić, przetestować albo zatrzymać. Optymalizacja nie oznacza automatycznego dokładania kanałów czy budżetu. Zmiany zakresu i dodatkowe koszty uzgadniamy przed realizacją, a po zakończeniu przekazujemy materiały określone w umowie.",
  },
];

const budgetFactors = [
  {
    title: "Strategia i doradztwo",
    text: "Zakres zależy od liczby ofert, rynków, dostępnych danych, potrzebnych badań oraz decyzji, które plan ma wspierać. Jednorazowy audyt rozliczamy inaczej niż cykliczne planowanie i konsultacje.",
  },
  {
    title: "Treści i produkcja",
    text: "Wycena uwzględnia rodzaj materiałów, ich liczbę, przygotowanie merytoryczne, zdjęcia, montaż, projekt graficzny, wersje do kanałów oraz uzgodnione poprawki. Nie każdy materiał wymaga nowej produkcji.",
  },
  {
    title: "Wdrożenia i stała obsługa",
    text: "Znaczenie ma skala strony, technologia, liczba kanałów, częstotliwość publikacji, zakres prac specjalistów i sposób raportowania. Projekt jednorazowy różni się od regularnej obsługi marketingowej.",
  },
  {
    title: "Budżet emisji reklam",
    text: "Środki przekazywane Google, Meta lub innemu dostawcy są osobną pozycją od wynagrodzenia agencji i kosztu kreacji. Wielkość emisji zależy od celu, konkurencji, obszaru i danych; jej zmiana wymaga osobnej decyzji.",
  },
];

const cooperationItems = [
  "Zakres i rezultat prac, harmonogram, osoby odpowiedzialne oraz sposób komunikacji.",
  "Liczba i organizacja akceptacji, zasady zbiorczych uwag oraz wycena zmian poza zakresem.",
  "Własność i dostęp do kont reklamowych, analityki, strony oraz profili firmowych.",
  "Zasady przekazania uzgodnionych plików, materiałów źródłowych i dokumentacji po zakończeniu etapu.",
  "Okres współpracy, warunki zakończenia, obowiązki stron i zakres wsparcia po publikacji.",
  "Zgodność działań z polityką prywatności, zgodami i prawami do wykorzystywanych materiałów.",
];

const selectionCriteria = [
  "Jaki problem ma rozwiązać współpraca i jakie zadania wykonawca proponuje w pierwszej kolejności?",
  "Kto pracuje przy projekcie, co powstaje we własnym zespole i kiedy potrzebny jest podwykonawca?",
  "Co dokładnie oferuje agencja w cenie, a co wymaga osobnej wyceny albo dodatkowego budżetu?",
  "Jak definiowany jest lead, kto ocenia jego jakość i jak raport rozróżnia ruch, zapytania oraz sprzedaż?",
  "Kto jest właścicielem kont i danych oraz jak wygląda przekazanie materiałów po zakończeniu współpracy?",
  "Czy przedstawione realizacje opisują rzeczywistą rolę zespołu bez przenoszenia wyników jednej marki na inną?",
];

const faqItems = [
  {
    question: "Czym zajmuje się agencja marketingu internetowego?",
    answer:
      "Agencja marketingu internetowego zajmuje się planowaniem i wykonywaniem uzgodnionych działań w kanałach cyfrowych. Może przygotować strategię, treści, stronę, produkcję foto lub wideo, publikacje, kampanie reklamowe i pomiar. Zakres zależy od celu, budżetu oraz zasobów firmy. Kompleksowa obsługa nie oznacza uruchamiania SEO, reklam i wszystkich profili jednocześnie.",
  },
  {
    question: "Czy jedna agencja może prowadzić SEO i reklamy?",
    answer:
      "Tak, ale warto zachować osobny zakres i mierniki dla każdego kanału. Kampanie Google Ads mogą dostarczyć danych o płatnym ruchu i zapytaniach, a SEO rozwija widoczność organiczną. Wspólna strategia pomaga wykorzystać wnioski z obu obszarów. Nie oznacza to, że każda oferta automatycznie obejmuje pozycjonowanie, prowadzenie kampanii i produkcję kreacji.",
  },
  {
    question: "Ile kosztuje współpraca z agencją marketingową?",
    answer:
      "Koszt zależy od wybranych usług, skali strony, liczby kanałów, potrzebnych treści, produkcji, wdrożeń i sposobu raportowania. Po briefie przedstawiamy zakres oraz warunki dopasowane do projektu; nie stosujemy na tej stronie sztywnego cennika. Wynagrodzenie agencji, produkcja materiałów i budżet emisji reklam są rozdzielone, aby można było ocenić każdy koszt.",
  },
  {
    question: "Jak rozpocząć współpracę i co przygotować?",
    answer:
      "Do rozmowy przygotuj opis oferty, odbiorców, obszaru sprzedaży i najważniejszego problemu. Pomocny będzie adres strony, linki do profili, dostępne materiały oraz informacje o dotychczasowych działaniach. Wskaż także orientacyjny budżet, termin i osobę odpowiedzialną za akceptacje. Gotowa strategia nie jest wymagana — najpierw ustalimy, jakiej diagnozy potrzebujesz.",
  },
  {
    question: "Jak mierzycie jakość leadów, a nie tylko ruch?",
    answer:
      "Najpierw definiujemy zdarzenie prowadzące do kontaktu i jego ograniczenia. Następnie, w uzgodnionym zakresie, porównujemy źródło zapytania z informacją od firmy o zgodności z ofertą, rozmowie, ofercie handlowej lub realizacji. Kliknięcie telefonu i wysłany formularz nie są automatycznie sprzedażą. Braki danych oznaczamy, zamiast przedstawiać niepotwierdzone wyniki.",
  },
  {
    question: "Czy agencja gwarantuje pozycje w Google lub liczbę klientów?",
    answer:
      "Nie gwarantujemy konkretnej pozycji, liczby leadów ani sprzedaży. Na wyniki wpływają między innymi konkurencja, oferta, budżet, technologia, sezonowość i sposób obsługi zapytań. Możemy natomiast opisać zakres prac, odpowiedzialności i sposób pomiaru oraz rekomendować kolejne decyzje na podstawie dostępnych danych.",
  },
  {
    question: "Jak długa jest umowa i co dzieje się po jej zakończeniu?",
    answer:
      "Model i okres współpracy ustalamy według projektu: inaczej dla jednorazowego audytu lub produkcji, a inaczej dla stałej obsługi. Umowa określa terminy, wypowiedzenie, zaległe prace, przekazanie materiałów i dostępy. Firma powinna zachować kontrolę nad kontami oraz danymi, a warunki odbioru plików i dokumentacji muszą być jasne przed startem.",
  },
  {
    question: "Czy pracujecie tylko z firmami z Poznania?",
    answer:
      "Nie. FOTZ Studio działa w okolicy Poznania i prowadzi współpracę zdalnie z firmami z całej Polski. Rozmowy, akceptacje i raporty możemy realizować online. Nagrania, spotkania na miejscu i dojazd planujemy osobno po ustaleniu lokalizacji oraz zakresu. Nie deklarujemy obecności lokalnego biura w miastach, w których go nie mamy.",
  },
];

export default function AgencjaMarketingowa() {
  return (
    <Layout workPlacement="manual">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords="agencja marketingu internetowego, agencja marketingowa, marketing internetowy, SEO, content marketing, Google Ads, social media, FOTZ Studio"
      />
      <OrganizationSchema />
      <LocalBusinessSchema />
      <ServiceSchema
        name="Agencja marketingu internetowego"
        description="Strategia marketingowa, wybór kanałów, SEO, content marketing, kampanie reklamowe, social media, strony internetowe, produkcja materiałów i pomiar leadów dla firm."
        provider="FOTZ Studio"
        areaServed={["Poznań", "Polska"]}
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Agencja marketingu internetowego", url: canonicalUrl },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative overflow-hidden border-b border-border pt-40 pb-20">
        <div className="container-wide px-6 md:px-12">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <Link to="/" className="transition-colors hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Agencja marketingu internetowego</span>
          </nav>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                <Lightbulb className="h-4 w-4 text-primary" /> Strategia, produkcja i pomiar w jednym planie
              </p>
              <h1 className="font-geist text-5xl font-semibold tracking-tight md:text-7xl">
                Agencja marketingu internetowego
              </h1>
              <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
                FOTZ Studio to agencja marketingowa, która łączy strategię, SEO, treści, reklamy, social media,
                strony internetowe i produkcję materiałów. Dobieramy zakres do celu oraz zasobów firmy.
                Przed startem wiesz, co powstanie, kto odpowiada za wdrożenie i jak ocenimy leady.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to={contactHref}>Opisz cel i poproś o zakres <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="#oferta">Zobacz usługi marketingowe</a>
                </Button>
              </div>
            </div>
            <aside className="rounded-lg border border-border bg-card p-6">
              <h2 className="font-geist text-2xl font-semibold">Marketing bez automatycznego pakietu</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Nie każda firma potrzebuje wszystkich kanałów naraz. Sprawdzamy ofertę, grupę docelową,
                drogę zakupu i dane, a następnie wskazujemy priorytet. Możesz zlecić pojedynczy projekt
                albo stałą obsługę z jasno opisanymi obowiązkami obu stron.
              </p>
              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary" /> Poznań i współpraca zdalna w Polsce</div>
                <a href="mailto:adam@fotz.pl" className="flex items-center gap-3 transition-colors hover:text-primary"><Mail className="h-4 w-4 text-primary" /> adam@fotz.pl</a>
                <div className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-primary" /> Jasny zakres, akceptacje i dostęp do kont</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide max-w-5xl px-6 md:px-12">
          <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Czym jest agencja marketingu internetowego i kiedy warto z nią współpracować?</h2>
          <div className="mt-8 grid gap-8 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
            <div className="space-y-5">
              <p>
                Agencja marketingu internetowego to zespół specjalistów, który planuje i realizuje działania
                promocyjne w internecie. W praktyce łączy strategię marketingową, content marketing, technologię,
                reklamy i analitykę. Agencja interaktywna może koncentrować się na serwisach WWW, agencja SEO —
                na widoczności organicznej, a agencja digital — na szerszym marketingu cyfrowym. Określenie
                „agencja digital marketingu” nie zastępuje odpowiedzi na pytanie, jaki rezultat otrzyma firma
                i kto wykona poszczególne prace.
              </p>
              <p>
                Marketing online i marketing internetowy nie kończą się na publikacji lub uruchomieniu kampanii reklamowej.
                Potrzebna jest spójna droga: komunikat trafia do właściwej grupy docelowej, strona internetowa
                wyjaśnia ofertę, a zespół sprzedaży wie, jak przyjąć zapytanie. Dlatego nasza agencja pyta o cel,
                marżę, możliwości obsługi nowych klientów i dotychczasowe decyzje. Dopiero potem rekomendujemy
                narzędzia, które można realnie wdrożyć i ocenić.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Współpraca z agencją jest przydatna, gdy firma nie ma czasu lub kompetencji do regularnego
                wykonywania prac, potrzebuje uporządkować kilka kanałów albo chce sprawdzić, co blokuje zapytania.
                Może dotyczyć właściciela usługi, sklepu internetowego, zespołu B2B albo działu marketingu,
                który ma strategię, lecz potrzebuje produkcji. Współpraca z agencją marketingu internetowego
                nie zwalnia firmy z dostarczania prawdziwych informacji i terminowych akceptacji.
              </p>
              <p>
                Kompleksowy marketing nie oznacza wykonywania wszystkiego jednocześnie. Kompleksowa agencja łączy
                etapy, z których każdy ma swoją rolę: audyt pokazuje przeszkody, strategia wyznacza kolejność,
                produkcja dostarcza materiały, kampania zapewnia dystrybucję, a pomiar wspiera decyzję.
                Kompleksowe podejście pozwala również wskazać, czego nie warto robić w danym momencie.
                Tak ograniczamy przypadkowe działania i oddzielamy potrzeby Twojego biznesu od listy modnych usług.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Czym zajmuje się agencja marketingu internetowego? SEO, content marketing i kampania reklamowa</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Opis zakresu marketingu internetowego rozdzielamy na zrozumiałe usługi, których nie należy utożsamiać.
              SEO rozwija widoczność, treści wyjaśniają ofertę, płatne reklamy zapewniają emisję, a produkcja
              dostarcza materiały. Poniżej opisujemy osobne rezultaty pracy, dzięki którym łatwiej wybrać
              właściwy zakres prac w Twojej firmie.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceItems.map((item) => (
              <article key={item.title} className="flex h-full flex-col rounded-lg border border-border bg-card p-6">
                <item.icon className="mb-5 h-8 w-8 text-primary" />
                <h3 className="font-geist text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{item.description}</p>
                <Link to={item.href} className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  {item.link} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strategia" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Strategia marketingowa i digital marketing: wybór kanałów dla Twojego biznesu</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Strategia określa, co marketing ma zmienić i jak rozpoznamy postęp. Analizujemy ofertę,
                  konkurencję, potrzeby i obawy potencjalnego klienta oraz drogę od pierwszego kontaktu do zakupu.
                  Uwzględniamy cele biznesowe, dostępny budżet i czas zespołu. Dopiero z tej diagnozy wynika plan
                  marketingowy, kanały, rodzaj treści, wymagane materiały i sposób pomiaru. Obszar marketingu
                  cyfrowego nie jest listą platform do odhaczenia, lecz zbiorem decyzji, które muszą współpracować.
                </p>
                <p>
                  Dane z kampanii mogą pomóc w planowaniu treści, a SEO i content mogą poprawić stronę docelową
                  reklamy. Nie oznacza to, że każdy kanał pasuje do każdej firmy. W obszarach marketingu poza
                  wyszukiwarką sprawdzamy, czy odbiorcy używają danej platformy i czy firma ma materiały do stałej
                  komunikacji. Plan dla Twojej marki uwzględnia także sprzedaż: bez reguł kwalifikacji nawet duża
                  liczba formularzy może nie mieć wartości.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {channelDecisions.map((item) => (
                <article key={item.title} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-geist text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pomiar" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Pomiar leadów i optymalizacja skutecznego marketingu</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Skutecznego marketingu nie oceniamy wyłącznie po zasięgu, kliknięciach lub liczbie publikacji.
              Uzgadniamy, które zdarzenia można zmierzyć, jak firma kwalifikuje kontakty i jakie koszty należy
              uwzględnić. Konwersja kontaktowa nie jest jeszcze sprzedażą. Raport łączy wykonane prace z danymi,
              ale nie ukrywa luk w konfiguracji ani nie przedstawia założeń jako wyników sprzedaży.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {measurementItems.map((item) => (
              <article key={item.title} className="rounded-lg border border-border bg-card p-6">
                <item.icon className="mb-5 h-7 w-7 text-primary" />
                <h3 className="font-geist text-xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="max-w-4xl">
            <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Współpraca z agencją marketingu internetowego krok po kroku</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Proces współpracy z agencją marketingu internetowego dzielimy na etapy z konkretnym rezultatem.
              Wiesz, jakie informacje przygotować, co podlega akceptacji i kiedy rozpoczyna się publikacja.
              Odpowiedzialność nie przenosi się wyłącznie na agencję: firma zna swoją ofertę, zatwierdza fakty
              i obsługuje zapytania, a nasz zespół odpowiada za uzgodniony zakres realizacji.
            </p>
          </div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((item) => (
              <li key={item.step} className="rounded-lg border border-border bg-card p-5">
                <span className="text-sm font-semibold text-primary">{item.step}</span>
                <h3 className="mt-4 font-geist text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="budzet" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Budżet marketingowy: kompleksowy zakres bez sztywnych cen</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Koszt współpracy z agencją zależy od problemu i zakresu, nie od nazwy pakietu. Inny budżet
                  wymaga audyt lub strategia, inny regularna produkcja i prowadzenie kilku kanałów. Przed wyceną
                  ustalamy rezultat, terminy, odpowiedzialności, liczbę wersji oraz poprawki. Dzięki temu plan
                  marketingowy i oferta wskazują, co firma zyska w danym etapie, bez ukrywania prac potrzebnych
                  do uruchomienia.
                </p>
                <p>
                  Budżet reklamowy jest osobną decyzją od kosztu przygotowania i obsługi kampanii. Podobnie
                  produkcja zdjęć, filmów czy nowej strony nie musi być częścią stałej obsługi. Nie podajemy
                  sztywnych cen przed poznaniem potrzeb. Po briefie przedstawiamy wycenę z wyodrębnionymi
                  pozycjami, a dodatkowe prace i emisję akceptujesz przed ich rozpoczęciem.
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {budgetFactors.map((item) => (
                <article key={item.title} className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-geist text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="wspolpraca" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Warunki współpracy, dostępy i odpowiedzialność</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Na etapie współpracy z agencją marketingu internetowego liczą się nie tylko zadania, ale również
                  zasady decyzji. Umowa powinna określać czas trwania, wypowiedzenie, odbiór, prawa do materiałów
                  i zakres wsparcia po publikacji. Konto reklamowe, analityka, strona i profile powinny pozostawać
                  pod kontrolą firmy. Nadajemy uprawnienia wymagane do pracy, zamiast prosić o prywatne hasła.
                </p>
                <p>
                  Przed zakończeniem projektu ustalamy przekazanie plików i dokumentacji. Jeżeli dana agencja
                  nie opisuje tych warunków, trudno porównać jej ofertę z innymi. Nie zakładaj też, że agencja
                  posiada prawa do dowolnych zdjęć, muzyki lub danych — źródło i licencje trzeba zweryfikować.
                  Takie zasady ograniczają ryzyko i ułatwiają kontynuację prac niezależnie od wykonawcy.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <h3 className="font-geist text-2xl font-semibold">Co zapisujemy przed startem?</h3>
              <ul className="mt-6 space-y-4">
                {cooperationItems.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="wybor" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Wybór agencji: profesjonalna agencja SEO czy agencja digital?</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Jeśli chcesz wybrać agencję, porównaj odpowiedzi na ten sam brief, a nie same hasła reklamowe.
                  Agencje mogą oferować różny zakres, dlatego dobra agencja marketingowa wyjaśnia, co zrobi najpierw,
                  jakie informacje są potrzebne i jak oceni wynik. Doświadczona agencja marketingowa powinna opisać
                  własną rolę w realizacjach oraz granice rekomendacji. Skuteczna agencja nie obiecuje pierwszego
                  miejsca w Google, bo nie kontroluje algorytmu ani decyzji konkurencji.
                </p>
                <p>
                  Gdy zależy Ci wyłącznie na widoczności organicznej, sprawdź, czy agencja SEO będzie dobrym
                  partnerem przy Twoim modelu sprzedaży. Jeśli chcesz wybrać agencję SEO, zapytaj, jak specjaliści
                  od SEO wpływają na treści i technikę. W naszej agencji SEO rekomendacje wymagają dostępu do danych
                  i jasnych zasad wdrożenia. Sprawdź też, które prace agencja oferuje we własnym zespole i jak
                  zarządza kampaniami reklamowymi. Odpowiednią agencję marketingu internetowego poznasz po jakości
                  pytań o odbiorców, ofertę i sprzedaż. Profesjonalna agencja digital lub profesjonalna agencja SEO
                  powinna pokazać proces i zasady, nie tylko logotypy.
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-border bg-card p-6 md:p-8">
              <h3 className="font-geist text-2xl font-semibold">Pytania do briefu i rozmowy</h3>
              <ul className="mt-6 space-y-4">
                {selectionCriteria.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                    <PenTool className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="realizacje" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide max-w-5xl px-6 md:px-12">
          <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Realizacje naszej agencji i sposób pracy do sprawdzenia</h2>
          <div className="mt-8 grid gap-8 text-lg leading-relaxed text-muted-foreground md:grid-cols-2">
            <p>
              Portfolio pomaga sprawdzić rodzaj materiałów i zakres kompetencji, ale nie jest gwarancją wyniku
              dla innej firmy. Prezentujemy wykonane projekty stron, fotografie, filmy i materiały komunikacji.
              Przy rozmowie możemy wskazać przykłady najbliższe Twojemu zadaniu i wyjaśnić, jaka była nasza rola.
              Nie przypisujemy sobie niepotwierdzonych rezultatów ani nie przenosimy osiągnięć jednej marki na drugą.
            </p>
            <p>
              Wybierając agencję specjalizującą się w marketingu, zapytaj także o prace, których nie widać
              w galerii: przygotowanie briefu, organizację produkcji, konfigurację pomiaru i przekazanie
              plików. To one decydują, czy materiał da się wykorzystać na stronie, w reklamie i social media.
              Dobrym uzupełnieniem portfolio jest plan pierwszego etapu, który możemy oferować po briefie,
              z zakresem i odpowiedzialnościami.
            </p>
          </div>
          <Button asChild className="mt-8" variant="outline">
            <Link to="/realizacje">Zobacz realizacje FOTZ Studio <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 border-b border-border py-20">
        <div className="container-wide max-w-4xl px-6 md:px-12">
          <h2 className="font-geist text-4xl font-semibold tracking-tight md:text-5xl">Agencja marketingowa — najczęstsze pytania o współpracę</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Zebraliśmy pytania o zakres usług, koszty, pomiar i zasady współpracy. Odpowiedzi nie zastępują
            indywidualnej oferty, ale pomagają przygotować brief i porównać wykonawców.
          </p>
          <div className="mt-10 space-y-3">
            {faqItems.map((item, index) => (
              <details key={item.question} id={`agencja-faq-${index}`} className="rounded-lg border border-border bg-card px-6">
                <summary className="cursor-pointer py-5 text-left font-geist text-lg font-semibold hover:text-primary">
                  {item.question}
                </summary>
                <p className="pb-5 leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20">
        <div className="container-wide px-6 md:px-12">
          <div className="rounded-lg border border-border bg-card p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="font-geist text-4xl font-semibold tracking-tight">Porozmawiajmy o marketingu Twojej firmy</h2>
                <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                  Opisz ofertę, odbiorców, problem i orientacyjny budżet. Wskażemy informacje potrzebne do diagnozy
                  oraz przygotujemy zakres strategii, treści, produkcji, reklam i pomiaru. Bez automatycznego pakietu
                  wszystkich kanałów i bez gwarancji wyników — za to z jasnymi zasadami realizacji.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild size="lg">
                  <Link to={contactHref}>Poproś o zakres i wycenę <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/konsultacja">Umów konsultację</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-wide max-w-5xl px-6 md:px-12">
          <h2 className="text-sm font-semibold uppercase tracking-wide">Powiązane usługi i poradniki</h2>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/uslugi/marketing-internetowy" className="text-primary hover:underline">Marketing internetowy</Link>
            <Link to="/performance-marketing/google-ads" className="text-primary hover:underline">Kampanie Google Ads</Link>
            <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">Pozycjonowanie SEO</Link>
            <Link to="/content-marketing/strategia" className="text-primary hover:underline">Content marketing</Link>
            <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">Strony internetowe</Link>
            <Link to="/blog/jak-wybrac-agencje-marketingowa" className="text-primary hover:underline">Jak wybrać agencję marketingową</Link>
            <Link to="/blog/budzet-marketingowy-planowanie" className="text-primary hover:underline">Planowanie budżetu marketingowego</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
