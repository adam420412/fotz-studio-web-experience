import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2, ChevronRight, Clock, MapPin, User } from "lucide-react";

const seoTitle = "Pozycjonowanie lokalne 2026: poradnik dla firm | FOTZ";
const seoDescription = "Pozycjonowanie lokalne 2026: profil firmy w Google, strona www, NAP, opinie, lokalne linki, koszty i pomiar. Poradnik krok po kroku dla firm.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/pozycjonowanie-lokalne-dla-firm";
const pageTitle = "Pozycjonowanie lokalne dla firm: praktyczny poradnik 2026";

const articleData = {
  headline: pageTitle,
  description: seoDescription,
  url: canonicalUrl,
  image: "https://www.fotz-studio.pl/work/fotz-work-1200.webp",
  datePublished: "2025-02-20",
  dateModified: "2026-11-11",
  author: "Fotz Studio",
};

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Pozycjonowanie lokalne dla firm", url: "/blog/pozycjonowanie-lokalne-dla-firm" },
];

const implementationSteps = [
  {
    title: "1. Zapisz punkt wyjścia i cel",
    text: "Zbierz adresy ważnych podstron, listę usług, rzeczywiste obszary obsługi i dostępne dane z Google Search Console, Google Analytics oraz Profilu Firmy w Google. Ustal, czy celem jest telefon, wypełnienie formularza, rezerwacja, wyznaczenie trasy czy wizyta w lokalu. Dzięki temu działania SEO będą odpowiadać procesowi sprzedaży, a nie tylko pozycji w Google.",
  },
  {
    title: "2. Przeprowadź audyt SEO i uprawnień",
    text: "Sprawdź właścicieli profilu, status weryfikacji, nazwę, kategorię, adres lub obszar działalności, telefon i godziny. Na stronie zweryfikuj indeksowanie, canonical, treść kontaktu, działanie formularzy i wersję mobilną. Audyt SEO powinien zakończyć się listą usterek i właścicieli poprawek, a nie ogólnym stwierdzeniem, że trzeba „robić więcej”.",
  },
  {
    title: "3. Uporządkuj profil i dane NAP",
    text: "Uzupełnij prawdziwe informacje, wybierz najtrafniejszą kategorię główną i tylko potrzebne kategorie dodatkowe. Zaktualizuj witrynę, telefon, godziny oraz opis oferty. Następnie porównaj dane w Profilu Firmy, na stronie i w wybranych katalogach. Popraw przestarzałe wpisy, ale nie twórz masowo nowych wizytówek tylko dla liczby linków.",
  },
  {
    title: "4. Dopasuj stronę do lokalnych zapytań",
    text: "Wybierz jedną podstronę odpowiedzialną za główną usługę i obszar. Uzupełnij title, H1, opis usług, lokalizację, sposób kontaktu, odpowiedzi na pytania oraz linki wewnętrzne. Nie powielaj tej samej strony pod kolejne miasta. Rozbudowuj lokalne treści tylko tam, gdzie możesz dodać rzeczywiste, odrębne informacje dla użytkownika.",
  },
  {
    title: "5. Wdróż proces obsługi opinii",
    text: "Po zakończonej usłudze poproś klienta o opisanie autentycznego doświadczenia i udostępnij właściwy link do opinii. Nie narzucaj treści, oceny ani nagrody. Wyznacz osobę odpowiedzialną za odpowiedzi, zasady reakcji na krytykę i eskalację zgłoszeń naruszających zasady. Zapisuj tematy opinii, które pomagają poprawić usługę i informacje na stronie.",
  },
  {
    title: "6. Rozwijaj lokalne powiązania",
    text: "Przygotuj listę organizacji, partnerów, wydarzeń, dostawców i mediów, z którymi firma ma realny związek. Wartościowa wzmianka powinna wynikać ze współpracy, materiału eksperckiego lub wydarzenia, a nie z automatycznej wymiany linków. Dodawaj także przydatne treści lokalne, do których inne strony mogą naturalnie odsyłać.",
  },
  {
    title: "7. Mierz, porównuj i poprawiaj",
    text: "Po wdrożeniu sprawdź indeksowanie i poprawność danych strukturalnych. W kolejnych raportach porównuj te same adresy, zapytania i definicje konwersji. Łącz dane z wyszukiwarki z jakością kontaktów raportowaną przez zespół. Wprowadzaj jedną zrozumiałą zmianę naraz i zapisuj datę, aby nie przypisywać efektu przypadkowym czynnikom.",
  },
];

const measurementRows = [
  {
    area: "Widoczność organiczna",
    source: "Google Search Console",
    description: "Filtruj dokładny adres strony i analizuj zapytania, wyświetlenia, kliknięcia, CTR oraz średnią pozycję. Oddziel frazy z nazwą miasta od zapytań ogólnych i brandowych. Nie przenoś zapytań innych podstron do ocenianej strony.",
  },
  {
    area: "Wejścia i działania na stronie",
    source: "Google Analytics i własna analityka",
    description: "Sprawdzaj wejścia z organicznych wyników wyszukiwania na właściwe strony docelowe oraz zdarzenia odpowiadające kontaktowi. Przed pomiarem przetestuj formularz, telefon i zgody. Sama sesja nie jest jeszcze zapytaniem ofertowym ani sprzedażą.",
  },
  {
    area: "Aktywność z profilu",
    source: "Statystyki Profilu Firmy w Google",
    description: "Obserwuj dostępne w panelu interakcje, np. przejścia do witryny, połączenia lub żądania wskazówek dojazdu. Zakres danych zależy od profilu i okresu. Nie utożsamiaj każdej interakcji z nowym klientem i porównuj zgodne przedziały czasu.",
  },
  {
    area: "Wyniki w mapach",
    source: "Kontrolowane sprawdzenia i narzędzia monitoringu",
    description: "Oceniaj widoczność w Mapach Google z uwzględnieniem lokalizacji pomiaru. Pojedyncze wyszukanie z jednego urządzenia nie przedstawia całego miasta. Zapisuj miejsce, datę i zapytanie, a wnioski wyciągaj z serii porównywalnych obserwacji.",
  },
  {
    area: "Jakość kontaktów",
    source: "CRM, rejestr telefonów i zespół obsługi",
    description: "Oznaczaj źródło zapytania i sprawdzaj, czy dotyczy właściwej usługi oraz obszaru. Liczba formularzy bez informacji o jakości może prowadzić do złych decyzji. Wspólna, ograniczona do potrzeb nomenklatura źródeł ułatwia analizę bez zbierania zbędnych danych.",
  },
  {
    area: "Opinie i tematy klientów",
    source: "Profil Firmy i proces obsługi",
    description: "Śledź nowe opinie klientów, odpowiedzi i powtarzające się uwagi. Nie sprowadzaj raportu wyłącznie do średniej oceny. Treść recenzji może wskazać niejasne etapy usługi, problem z dojazdem albo pytania, które warto wyjaśnić na stronie internetowej.",
  },
];

const commonMistakes = [
  {
    title: "Dopisywanie miasta i usług do nazwy firmy",
    text: "Nazwa w profilu powinna odpowiadać rzeczywistemu oznaczeniu działalności. Dodatkowe frazy kluczowe, slogan czy lista miejscowości nie zastępują optymalizacji i mogą naruszać wytyczne Google.",
  },
  {
    title: "Profile dla fikcyjnych lokalizacji",
    text: "Wirtualny adres lub biuro bez wymaganej obsługi klienta nie tworzy wiarygodnej lokalnej obecności. Firma działająca u klientów powinna skonfigurować profil zgodnie z zasadami dla obszaru działalności i ukryć adres, jeśli klienci nie są pod nim obsługiwani.",
  },
  {
    title: "Kopiowanie stron miast",
    text: "Zmiana tylko nazwy miejscowości w title, H1 i kilku zdaniach daje powieloną treść. Zamiast mnożyć strony, rozwijaj jedną pomocną ofertę i twórz odrębne strony wyłącznie dla rzeczywiście różnych lokalizacji lub potrzeb użytkowników.",
  },
  {
    title: "Kupowanie lub selekcjonowanie opinii",
    text: "Opinie mają opisywać autentyczne doświadczenia. Nagroda za recenzję, prośba wyłącznie do „zadowolonych” klientów albo nakazanie konkretnej treści podważa wiarygodność procesu i może naruszać zasady Map Google.",
  },
  {
    title: "Masowe katalogi i wymiana linków",
    text: "Katalog bez redakcyjnej jakości i związku z branżą nie staje się wartościowy tylko dlatego, że przyjmuje wpis. Priorytetem są prawdziwe dane, tematyczne powiązania i lokalne linki wynikające ze współpracy lub przydatnego materiału.",
  },
  {
    title: "Ocena strategii po kilku dniach",
    text: "Weryfikacja profilu, indeksowanie i zebranie porównywalnych danych wymagają czasu. Codzienna zmiana kategorii, treści i tytułów utrudnia ustalenie przyczyny wyniku. Dokumentuj wdrożenia i oceniaj je w zaplanowanym cyklu.",
  },
];

const faqItems = [
  {
    id: "definicja",
    question: "Co to jest pozycjonowanie lokalne i na czym polega?",
    answer: "Pozycjonowanie lokalne to uporządkowanie informacji o firmie, jej Profilu Firmy w Google i stronie internetowej tak, aby użytkownik mógł znaleźć trafną ofertę dla konkretnego obszaru. Obejmuje m.in. prawdziwe dane, właściwe kategorie, treści o usługach, spójny NAP, autentyczne opinie, linki i pomiar kontaktów. Nie jest jednorazowym dodaniem miasta do tytułu.",
  },
  {
    id: "koszt",
    question: "Ile kosztuje pozycjonowanie lokalne?",
    answer: "Nie ma jednej sztywnej ceny skutecznego pozycjonowania lokalnego. Budżet zależy od stanu strony i profilu, liczby rzeczywistych lokalizacji, zakresu treści, konkurencji, technicznych poprawek i potrzebnego pomiaru. Warto rozdzielić prace jednorazowe od stałej obsługi i przed zakupem otrzymać zakres, harmonogram oraz sposób raportowania, zamiast porównywać samą kwotę.",
  },
  {
    id: "czas",
    question: "Jak długo trwa pozycjonowanie lokalne?",
    answer: "Nie da się uczciwie wskazać jednego terminu wejścia do Local Pack lub osiągnięcia konkretnej pozycji. Na czas prac i obserwacji wpływają m.in. weryfikacja profilu, indeksowanie zmian, stan techniczny, konkurencja, lokalizacja i jakość sygnałów o firmie. Plan powinien rozdzielać wdrożenie poprawek od późniejszej analizy danych i nie może gwarantować wyniku w określonym tygodniu.",
  },
  {
    id: "bez-strony",
    question: "Czy można pozycjonować firmę lokalnie bez strony internetowej?",
    answer: "Profil Firmy może dostarczać podstawowych informacji i umożliwiać kontakt, ale własna strona daje kontrolę nad opisem oferty, odpowiedziami, strukturą treści i pomiarem zdarzeń. Samo posiadanie witryny nie gwarantuje widoczności, podobnie jak jej brak nie przesądza o każdym wyniku. Wybór zależy od modelu firmy, konkurencji i informacji potrzebnych klientowi przed kontaktem.",
  },
  {
    id: "adres",
    question: "Czy pozycjonowanie lokalne wymaga fizycznego adresu?",
    answer: "Nie każda firma musi publicznie pokazywać adres. Firma bez placówki obsługującej klientów, która świadczy usługi w ich lokalizacjach, może skonfigurować obszar działalności i ukryć adres zgodnie z zasadami Google. Nie należy używać fikcyjnego adresu ani wirtualnego biura do udawania placówki. Zasady różnią się dla firm stacjonarnych, hybrydowych i sieci.",
  },
  {
    id: "miasta",
    question: "Czy lokalne SEO działa dla firmy z kilkoma miastami?",
    answer: "Tak, ale każda lokalizacja potrzebuje prawdziwych i spójnych informacji, a struktura profili musi odpowiadać wytycznym Google. Na stronie warto jasno pokazać obsługiwane obszary i różnice w ofercie lub dojeździe. Nie trzeba tworzyć dziesiątek podobnych stron miast. Osobne treści są uzasadnione, gdy dostarczają konkretnych, unikalnych informacji dla danej lokalizacji.",
  },
  {
    id: "opinie",
    question: "Czy opinie klientów wpływają na lokalne wyniki?",
    answer: "Google wymienia liczbę i jakość opinii wśród informacji związanych z rozpoznawalnością firmy, ale nie istnieje publiczny próg oceny gwarantujący pozycję. Opinie pomagają także użytkownikowi ocenić doświadczenie z firmą. Proś o rzetelny opis rzeczywistej współpracy bez wynagradzania recenzji, narzucania treści i odpowiadaj rzeczowo zarówno na pochwały, jak i krytykę.",
  },
  {
    id: "negatywne",
    question: "Co zrobić z negatywną opinią w Google?",
    answer: "Najpierw sprawdź, czy możesz ustalić kontekst zdarzenia, a następnie odpowiedz spokojnie i bez ujawniania danych klienta. Przyznaj się do błędu, jeśli został potwierdzony, wyjaśnij sposób rozwiązania sprawy i zaproponuj bezpieczny kanał kontaktu. Zgłaszaj treść tylko wtedy, gdy narusza zasady, a nie dlatego, że jest krytyczna. Nie kupuj usuwania opinii.",
  },
  {
    id: "samodzielnie",
    question: "Czy lokalne SEO można prowadzić samodzielnie?",
    answer: "Właściciel firmy może sam uporządkować podstawowe dane, opis oferty, proces proszenia o opinie i regularny przegląd statystyk. Pomoc specjalistów SEO jest przydatna przy problemach technicznych, wielu lokalizacjach, kanibalizacji treści lub konfiguracji pomiaru. Niezależnie od wykonawcy firma powinna zachować dostęp właścicielski do profilu, Search Console i analityki.",
  },
  {
    id: "legalnosc",
    question: "Czy pozycjonowanie jest legalne?",
    answer: "Optymalizacja strony i prawdziwych informacji o firmie jest legalnym obszarem marketingu, ale działania muszą respektować zasady platform, prawo i wymogi branżowe. Fałszywe opinie, podszywanie się, manipulowanie lokalizacją i wprowadzające w błąd treści nie są uczciwą strategią. W branżach regulowanych komunikaty i sposób pozyskiwania danych warto dodatkowo ocenić pod kątem właściwych przepisów.",
  },
];

const sectionHeading = "text-2xl md:text-3xl font-heading font-bold mb-6";
const paragraph = "text-muted-foreground mb-5 leading-relaxed";

export default function BlogPozycjonowanieLokalnePoradnik() {
  return (
    <Layout workPlacement="manual">
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} ogType="article" />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema data={articleData} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="bg-background pb-20">
        <header className="pt-32 pb-10 border-b border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Ścieżka nawigacji" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <span className="text-foreground">Pozycjonowanie lokalne dla firm</span>
              </nav>
              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Wróć do bloga
              </Link>
              <span className="flex items-center gap-2 text-sm font-medium text-primary uppercase tracking-wider mb-4">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Poradnik Local SEO
              </span>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{pageTitle}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Jak uporządkować widoczność firmy w lokalnych wynikach wyszukiwania i Mapach Google — bez skrótów, sztywnych cenników i obietnic pozycji.
              </p>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><User className="w-4 h-4" aria-hidden="true" /> Zespół FOTZ</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" aria-hidden="true" /> Opublikowano: 20 lutego 2025</span>
                <span>Aktualizacja: 11 listopada 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" /> 20 min czytania</span>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden my-8">
              <img loading="lazy" src="/work/fotz-work-1200.webp" alt="Praca przy komputerze — zdjęcie z sesji FOTZ" className="w-full h-full object-cover" />
            </div>

            <p className="lead text-xl text-muted-foreground mb-6 leading-relaxed">
              <strong>Pozycjonowanie lokalne to strategia optymalizacji obecności online, dzięki której wyszukiwarka może lepiej powiązać firmę, jej usługi i lokalizację z zapytaniami użytkowników.</strong> Dotyczy zarówno wyników organicznych, jak i pakietu lokalnego z mapą. W praktyce łączy Profil Firmy w Google, stronę internetową, spójne dane NAP, opinie, lokalne linki oraz pomiar działań klientów.
            </p>
            <p className={paragraph}>
              Ten poradnik pokazuje, jak zacząć pozycjonowanie lokalne w 2026 roku i jak zbudować proces, który da się zweryfikować. Przykłady są redakcyjnymi ilustracjami pracy, a nie opisami realizacji ani wyników klientów. Żadna lista działań nie gwarantuje miejsca w Local Pack, ruchu, telefonów ani sprzedaży.
            </p>

            <nav aria-label="Spis treści" className="my-10 rounded-xl border border-border/50 bg-muted/20 p-6">
              <h2 className="text-xl font-heading font-bold mb-4">W tym poradniku</h2>
              <ol className="grid md:grid-cols-2 gap-3 text-muted-foreground list-decimal list-inside">
                <li><a href="#podstawy" className="hover:text-primary hover:underline">Czym jest pozycjonowanie lokalne?</a></li>
                <li><a href="#czynniki" className="hover:text-primary hover:underline">Trafność, odległość i rozpoznawalność</a></li>
                <li><a href="#profil" className="hover:text-primary hover:underline">Profil Firmy w Google</a></li>
                <li><a href="#strona" className="hover:text-primary hover:underline">Frazy i strona internetowa</a></li>
                <li><a href="#opinie" className="hover:text-primary hover:underline">Opinie klientów</a></li>
                <li><a href="#linki" className="hover:text-primary hover:underline">NAP, katalogi i lokalne linki</a></li>
                <li><a href="#lokalizacje" className="hover:text-primary hover:underline">Obszar działalności i wiele miast</a></li>
                <li><a href="#wdrozenie" className="hover:text-primary hover:underline">Wdrożenie krok po kroku</a></li>
                <li><a href="#pomiar" className="hover:text-primary hover:underline">Pomiar efektów</a></li>
                <li><a href="#koszty" className="hover:text-primary hover:underline">Koszty i czas pracy</a></li>
                <li><a href="#bledy" className="hover:text-primary hover:underline">Najczęstsze błędy</a></li>
                <li><a href="#faq" className="hover:text-primary hover:underline">FAQ</a></li>
              </ol>
            </nav>

            <section id="podstawy" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Czym jest pozycjonowanie lokalne i na czym polega?</h2>
              <p className={paragraph}>
                Local SEO, nazywane także lokalnym SEO lub SEO lokalnym, pomaga dopasować obecność firmy do zapytań z intencją lokalną. Użytkownik może wpisać „dentysta Poznań”, „fryzjer obok mnie” albo samą nazwę usługi na telefonie z włączoną lokalizacją. Wyszukiwarka Google uwzględnia kontekst zapytania i dostępne informacje o miejscu użytkownika, dlatego wyniki lokalne mogą różnić się między osobami.
              </p>
              <p className={paragraph}>
                Lokalne pozycjonowanie nie ogranicza się do pozycjonowania wizytówki. Potencjalni klienci mogą zobaczyć pakiet lokalny z mapą, profil w Mapach Google, klasyczny wynik wyszukiwania, stronę usługi albo poradnik. Firmy w wynikach wyszukiwania są oceniane na podstawie wielu sygnałów, a dostępne elementy SERP zależą od zapytania i urządzenia.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Pozycjonowanie lokalne a SEO ogólnokrajowe</h3>
              <p className={paragraph}>
                W obu przypadkach znaczenie mają przydatne treści, techniczna dostępność strony i zaufanie. Różnica dotyczy przede wszystkim intencji i kontekstu geograficznego. Pozycjonowanie stron dla całego kraju zwykle koncentruje się na temacie lub produkcie bez ograniczania do regionu, natomiast lokalna strategia SEO musi dodatkowo wyjaśnić, gdzie firma rzeczywiście działa i jak klient może skorzystać z oferty.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-muted-foreground">
                  <thead><tr className="border-b border-border"><th className="py-3 pr-4 text-foreground">Obszar</th><th className="py-3 pr-4 text-foreground">Lokalne SEO</th><th className="py-3 text-foreground">SEO ogólnokrajowe</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border/50"><td className="py-3 pr-4">Intencja</td><td className="py-3 pr-4">Usługa lub miejsce w okolicy</td><td className="py-3">Temat bez koniecznego związku z regionem</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 pr-4">Elementy wyniku</td><td className="py-3 pr-4">Local Pack, mapa, profil i strony organiczne</td><td className="py-3">Przede wszystkim wyniki organiczne i funkcje tematyczne</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 pr-4">Dane firmy</td><td className="py-3 pr-4">Adres lub obszar, telefon, godziny, kategoria</td><td className="py-3">Oferta i identyfikacja bez nacisku na obsługiwany obszar</td></tr>
                    <tr><td className="py-3 pr-4">Pomiar</td><td className="py-3 pr-4">Zapytania, strony, interakcje i jakość kontaktów z obszaru</td><td className="py-3">Widoczność tematu, ruch i konwersje bez podziału lokalnego</td></tr>
                  </tbody>
                </table>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4">Dla kogo jest lokalne pozycjonowanie stron?</h3>
              <p className={paragraph}>
                Ten model pasuje do firm stacjonarnych, usług z dojazdem, praktyk specjalistów i sieci z rzeczywistymi placówkami. Sklep internetowy z odbiorem osobistym także może potrzebować lokalnych informacji, ale nie każda sprzedaż online ma intencję lokalną. Warto zacząć od pytania, czy klient wybiera ofertę ze względu na odległość, dostępność w regionie, możliwość wizyty albo obsługę na miejscu.
              </p>
            </section>

            <section id="czynniki" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Jak Google ustala lokalne wyniki wyszukiwania?</h2>
              <p className={paragraph}>
                Oficjalna dokumentacja wskazuje trzy główne grupy czynników: trafność, odległość i rozpoznawalność. Algorytmy Google nie udostępniają prostego cennika pozycji ani formuły pozwalającej zagwarantować wynik. Można natomiast uporządkować informacje, które pomagają systemowi zrozumieć firmę i użytkownikowi podjąć decyzję.
              </p>
              <div className="space-y-5 mb-6">
                <div className="rounded-xl border border-border/50 p-5">
                  <h3 className="text-xl font-heading font-bold mb-2">Trafność: czy oferta odpowiada zapytaniu?</h3>
                  <p className="text-muted-foreground leading-relaxed">Dokładna kategoria, kompletny opis usług i zgodna treść strony pokazują, czym firma się zajmuje. Nie chodzi o powtarzanie jednej frazy, lecz o spójne wyjaśnienie oferty. „Hydraulika” i „hydraulik” mogą opisywać tę samą potrzebę, ale kategoria powinna określać rodzaj działalności, a nie listę wszystkich prac.</p>
                </div>
                <div className="rounded-xl border border-border/50 p-5">
                  <h3 className="text-xl font-heading font-bold mb-2">Odległość: gdzie jest użytkownik lub szukany obszar?</h3>
                  <p className="text-muted-foreground leading-relaxed">Google porównuje możliwą lokalizację firmy z lokalizacją osoby szukającej lub obszarem podanym w zapytaniu. Dlatego zwiększenie widoczności strony w innej części miasta nie jest wyłącznie kwestią częstszych słów kluczowych. Nie należy tworzyć fikcyjnych adresów, aby obejść ten kontekst.</p>
                </div>
                <div className="rounded-xl border border-border/50 p-5">
                  <h3 className="text-xl font-heading font-bold mb-2">Rozpoznawalność: co wiadomo o firmie?</h3>
                  <p className="text-muted-foreground leading-relaxed">Znaczenie mogą mieć informacje z witryn, linki, artykuły i opinie w Google. Rozpoznawalność nie jest równoznaczna z zakupem dużej liczby katalogów. Wartościowe są wiarygodne wzmianki i spójna obecność marki. Google wyraźnie zaznacza, że nie można zapłacić za podniesienie pozycji w lokalnych wynikach wyszukiwania.</p>
                </div>
              </div>
              <p className={paragraph}>
                Podstawą pracy jest <a href="https://support.google.com/business/answer/7091?hl=pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">oficjalny opis czynników lokalnego rankingu Google</a>. W praktyce nie wszystkie elementy da się kontrolować: odległości nie zmieni tekst, a konkurencja może mieć inną historię i rozpoznawalność. Dlatego pozycjonowanie lokalne w Google powinno koncentrować się na jakości dostępnych sygnałów i doświadczeniu klienta.
              </p>
            </section>

            <section id="profil" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Profil Firmy w Google, czyli dawna wizytówka Google Moja Firma</h2>
              <p className={paragraph}>
                Google Business Profile to obecna nazwa narzędzia znanego wcześniej jako Google Moja Firma. W języku polskim spotkasz też określenia „wizytówka Google”, „profil firmy” i „wizytówka w Mapach”. Profil Firmy w Google przedstawia działalność w wyszukiwarce i Mapach Google, ale nie jest prywatną stroną internetową właściciela ani kanałem Google Ads.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Jak przygotować wizytówkę Google?</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>Sprawdź, czy firma kwalifikuje się do profilu i czy istnieje już wpis dla tej samej lokalizacji. Zamiast tworzyć duplikat, uzyskaj właściwe uprawnienia.</li>
                <li>Podaj rzeczywistą nazwę używaną na szyldzie, stronie i dokumentach firmowych. Nie dopisuj do niej lokalnych fraz ani listy usług.</li>
                <li>Wybierz najbardziej szczegółową kategorię główną odpowiadającą podstawowej działalności. Dodatkowe kategorie stosuj tylko dla rzeczywistych obszarów firmy.</li>
                <li>Wprowadź prawidłowy adres albo obszar działalności. Jeśli klienci nie przychodzą pod adres firmy działającej na określonym obszarze, ukryj go zgodnie z instrukcją.</li>
                <li>Dodaj kontrolowany przez firmę telefon, właściwy adres strony i aktualne godziny obsługi. Uwzględnij wyjątki świąteczne i sezonowe tam, gdzie są dostępne.</li>
                <li>Przejdź wymagany proces weryfikacji. Dostępne metody zależą od konfiguracji i sytuacji profilu, więc nie należy obiecywać konkretnej formy ani terminu.</li>
              </ol>
              <h3 className="text-xl font-heading font-bold mb-4">Co uzupełniać po weryfikacji?</h3>
              <p className={paragraph}>
                Opisz najważniejsze usługi i cechy oferty prostym językiem. Dodaj prawdziwe zdjęcia lokalu, zespołu, produktów lub realizacji, do których firma ma prawa. Sprawdzaj dostępne dla kategorii pola, usługi i atrybuty — ich obecność zależy od typu działalności i regionu, dlatego nie każda firma zobaczy identyczne funkcje. Publikuj aktualne informacje tylko wtedy, gdy są pomocne dla klienta.
              </p>
              <p className={paragraph}>
                Regularność nie polega na codziennej edycji wszystkich pól. Ważniejsze jest szybkie poprawienie godzin, telefonu czy strony po rzeczywistej zmianie. Przeglądaj także sugestie aktualizacji i uprawnienia użytkowników. Firma powinna zachować dostęp właścicielski, a współpraca z zewnętrznym wykonawcą nie może oznaczać utraty kontroli nad profilem.
              </p>
              <div className="rounded-xl border-l-4 border-primary bg-muted/20 p-6 mb-6">
                <h3 className="text-lg font-heading font-bold mb-2">Adres i obsługa klientów są zgodne z faktami</h3>
                <p className="text-muted-foreground leading-relaxed">Aktualne <a href="https://support.google.com/business/answer/3038177?hl=pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">wytyczne dotyczące prezentowania firmy w Google</a> wyjaśniają m.in. zasady nazwy, adresu, kategorii i firm działających na obszarze. Warto czytać je przed zmianą konfiguracji, zwłaszcza przy biurze współdzielonym, kilku oddziałach lub pracy mobilnej.</p>
              </div>
            </section>

            <section id="strona" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Lokalne słowa kluczowe i optymalizacja strony internetowej</h2>
              <p className={paragraph}>
                Lokalne frazy zwykle łączą usługę z miastem, dzielnicą lub regionem, np. „serwis rowerowy Gdańsk”. Inne zapytania zawierają „obok mnie”, „w pobliżu” albo nie wskazują miejsca wprost, lecz użytkownik oczekuje wyniku z okolicy. Dobór słów kluczowych powinien wychodzić od oferty i sposobu mówienia klientów, a nie od przypadkowej listy odmian.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Jak zbadać lokalne frazy kluczowe?</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Zapisz rzeczywiste usługi, problemy klientów, marki produktów i obszary, które firma może obsłużyć.</li>
                <li>Sprawdź własne zapytania w Google Search Console dla konkretnych stron, bez przypisywania im danych całej domeny.</li>
                <li>Porównaj wynik wyszukiwania dla ważnej frazy: mapa i profile wymagają innej treści niż poradnik lub strona kategorii.</li>
                <li>Oceń intencję: kontakt, dojazd, porównanie, cena, termin realizacji czy wiedza. Jedna fraza nie musi odpowiadać wszystkim potrzebom.</li>
                <li>Uwzględnij sezonowość i dane z telefonów, formularzy oraz rozmów sprzedażowych. Popularność frazy nie zawsze oznacza wartościowy kontakt.</li>
              </ul>
              <p className={paragraph}>
                Wybrane frazy lokalne przypisz do istniejących stron. Główna strona usługi powinna naturalnie wyjaśniać zakres, lokalizację i proces kontaktu, a poradnik może odpowiadać na pytania poprzedzające wybór. Taki podział ogranicza kanibalizację, czyli konkurowanie wielu podobnych adresów o to samo zapytanie.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Co powinna zawierać strona usługi lokalnej?</h3>
              <p className={paragraph}>
                Podstawą optymalizacji strony internetowej jest zgodność title, H1 i treści z rzeczywistą ofertą. Dodaj opis usług, obsługiwany obszar, aktualny NAP, godziny, mapę lub instrukcję dojazdu tam, gdzie jest potrzebna, oraz działający kontakt. Warto też odpowiedzieć na pytania o przebieg zlecenia, dostępność, przygotowanie do wizyty i warunki usługi.
              </p>
              <p className={paragraph}>
                Pozycjonowanie strony internetowej obejmuje również techniczną dostępność: poprawny indeks, self-canonical, sensowne linkowanie wewnętrzne i działanie na urządzeniach mobilnych. Szybkie odczytanie telefonu i wykonanie połączenia jest ważniejsze niż dekoracyjny element blokujący ekran. Zdjęcia powinny mieć opisowe alternatywne teksty odpowiadające temu, co rzeczywiście przedstawiają.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Dane strukturalne LocalBusiness</h3>
              <p className={paragraph}>
                Znaczniki LocalBusiness mogą opisywać nazwę, adres, telefon, godziny i stronę konkretnej placówki. Powinny być zgodne z widoczną treścią i rzeczywistymi danymi, bez wymyślonych ocen lub oddziałów. Ich obecność nie gwarantuje wyniku z elementami rozszerzonymi ani miejsca w Local Pack. Sprawdź implementację zgodnie z <a href="https://developers.google.com/search/docs/appearance/structured-data/local-business?hl=pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dokumentacją LocalBusiness w Google Search Central</a>.
              </p>
              <p className={paragraph}>
                Jeśli szukasz szerszego opisu czynności technicznych, przejdź do <Link to="/blog/seo-techniczne-poradnik" className="text-primary hover:underline">poradnika SEO technicznego</Link>. Z kolei <Link to="/blog/audyt-seo-krok-po-kroku" className="text-primary hover:underline">audyt SEO krok po kroku</Link> pomoże uporządkować diagnostykę przed optymalizacją.
              </p>
            </section>

            <section id="opinie" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Opinie w Google: jak prosić i odpowiadać?</h2>
              <p className={paragraph}>
                Pozytywne opinie mogą wzmacniać zaufanie do firmy, ale liczba gwiazdek nie jest jedynym elementem oceny. Dla użytkownika znaczenie mają także treść doświadczenia, aktualność recenzji i sposób odpowiedzi. Proces nie powinien selekcjonować klientów według przewidywanej oceny ani obiecywać korzyści za publikację.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Prosty proces pozyskiwania opinii klientów</h3>
              <ol className="list-decimal list-inside space-y-3 text-muted-foreground mb-6">
                <li>Wybierz naturalny moment po zakończeniu usługi lub dostawie, gdy klient może już opisać doświadczenie.</li>
                <li>Udostępnij właściwy link lub kod QR do dodania opinii i poproś o szczere, samodzielne sformułowanie.</li>
                <li>Nie dyktuj nazw usług, miasta, oceny ani gotowego tekstu. Nie oferuj rabatu, pieniędzy lub produktu w zamian.</li>
                <li>Odpowiadaj zwięźle i merytorycznie. Podziękuj za konkretną uwagę zamiast wstawiać jeden szablon pod każdą recenzję.</li>
                <li>Przy krytyce zabezpiecz dane osobowe, ustal fakty i zaproponuj dalszy kontakt. Zgłoszenie do Google rezerwuj dla naruszeń zasad.</li>
              </ol>
              <p className={paragraph}>
                Google opisuje zakazane zachowania, w tym fałszywe zaangażowanie i korzyści za opinie, w <a href="https://support.google.com/contributionpolicy/answer/7400114?hl=pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">polityce treści użytkowników Map Google</a>. Dobrze zorganizowana prośba o recenzję jest częścią obsługi klienta, a nie kampanią manipulowania oceną.
              </p>
            </section>

            <section id="linki" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>NAP, lokalne katalogi i linki zwrotne</h2>
              <p className={paragraph}>
                NAP oznacza Name, Address i Phone, czyli nazwę, adres i telefon. Dla firmy działającej na obszarze ważny jest także prawidłowo skonfigurowany sposób obsługi zamiast sztucznego adresu. Spójność polega na aktualizowaniu tych samych prawdziwych informacji, nie na bezkrytycznym powielaniu każdego skrótu i formatu zapisu.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Jak uporządkować cytowania NAP?</h3>
              <p className={paragraph}>
                Zacznij od arkusza z profilem, stroną główną, kontaktem, najważniejszymi platformami branżowymi i wcześniejszymi wpisami. Oznacz nieaktualny telefon, starą nazwę, błędny adres i duplikaty. W każdym katalogu oceniaj możliwość edycji, jakość moderacji i przydatność dla klienta. Jeden poprawiony, istotny wpis jest cenniejszy niż seria stron bez ruchu i związku z firmą.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Skąd pochodzą lokalne linki?</h3>
              <p className={paragraph}>
                Lokalne linki to odnośniki ze stron powiązanych z regionem lub lokalną działalnością. Mogą pojawić się w wiarygodnych lokalnych portalach informacyjnych, na stronach organizacji gospodarczych, partnerów wydarzeń, szkół branżowych, stowarzyszeń lub dostawców. Decyduje realny związek i redakcyjny kontekst, nie sama nazwa miasta w domenie.
              </p>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Przygotuj ekspercki komentarz lub praktyczny materiał dla redakcji, z którą tematycznie wiąże się Twoja branża.</li>
                <li>Zadbaj o stronę wydarzenia lub współpracy, która wyjaśnia rolę firmy i prowadzi do właściwej podstrony.</li>
                <li>Uzupełnij profile w rzetelnych organizacjach i katalogach branżowych, których faktycznie używają klienci.</li>
                <li>Publikuj przydatne przewodniki po lokalnych procedurach, dojeździe lub przygotowaniu do usługi, bez przerabiania ich na strony reklamowe.</li>
              </ul>
              <p className={paragraph}>
                Unikaj automatycznych pakietów linków, stron zapleczowych i wymiany „link za link”. Celem pozycjonowania lokalnego jest zwiększenie widoczności strony i wiarygodności firmy w naturalnych miejscach, a nie dowolna liczba odsyłaczy. Przed publikacją sprawdź, czy link działa, prowadzi do właściwego adresu i ma zrozumiały tekst kotwicy.
              </p>
            </section>

            <section id="lokalizacje" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Firma bez lokalu, wiele lokalizacji i lokalne firmy online</h2>
              <p className={paragraph}>
                Firma mobilna może prowadzić pozycjonowanie lokalne bez publicznego adresu, jeśli rzeczywiście świadczy usługi u klientów i konfiguruje profil zgodnie z zasadami dla obszaru działalności. Lista miejscowości powinna odpowiadać obsłudze, którą firma jest w stanie zapewnić. Nie tworzy to jednak gwarancji jednakowej widoczności w całym wskazanym regionie.
              </p>
              <p className={paragraph}>
                Przy kilku prawdziwych placówkach uporządkuj właścicieli, nazwy, kategorie, telefony i strony docelowe. Każda strona lokalizacji powinna dostarczać praktycznych informacji: zespołu, dojazdu, godzin, dostępności i zakresu usług. Jeżeli firma jedynie dojeżdża do kilku miast, często lepsza jest jedna mocna strona z jasno opisanym obszarem niż wiele powielonych stron.
              </p>
              <p className={paragraph}>
                Dla marki prowadzącej wyłącznie sprzedaż online kluczowa może być strategia ogólnokrajowa, a nie lokalne pozycjonowanie. Lokalna obecność powinna wynikać z modelu działalności. Warto oddzielić plan dla sklepu internetowego, plan dla punktu odbioru i plan dla usługi z dojazdem, zamiast przenosić między nimi ten sam schemat.
              </p>
            </section>

            <section id="wdrozenie" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Pozycjonowanie lokalne krok po kroku: plan wdrożenia</h2>
              <p className={paragraph}>
                Poniższa kolejność porządkuje najważniejsze działania SEO. Możesz wykorzystać ją jako checklistę wspólną dla osoby odpowiedzialnej za stronę, profil i kontakt z klientami. Zakres techniczny i terminy ustal po diagnozie, a nie przed poznaniem dostępów i obecnego stanu.
              </p>
              <div className="space-y-5">
                {implementationSteps.map((step) => (
                  <div key={step.title} className="rounded-xl border border-border/50 p-5">
                    <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="pomiar" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Jak mierzyć efekty pozycjonowania lokalnego?</h2>
              <p className={paragraph}>
                Widoczność firmy w wynikach wyszukiwania jest tylko jednym etapem. Potrzebny jest również pomiar wejść na właściwe strony i rzeczywistych działań użytkowników. Nie istnieje jedna metryka opisująca całą skuteczność, dlatego raport powinien łączyć widoczność, interakcje i jakość zapytań.
              </p>
              <div className="space-y-5 mb-6">
                {measurementRows.map((row) => (
                  <div key={row.area} className="rounded-xl border border-border/50 p-5">
                    <h3 className="text-xl font-heading font-bold mb-1">{row.area}</h3>
                    <p className="text-sm text-primary mb-2">Źródło: {row.source}</p>
                    <p className="text-muted-foreground leading-relaxed">{row.description}</p>
                  </div>
                ))}
              </div>
              <p className={paragraph}>
                Średnia pozycja w Search Console jest wartością uśrednioną i nie odpowiada jednemu wynikowi widzianemu przez każdego użytkownika. Zasady liczenia wyświetleń, kliknięć i pozycji opisuje <a href="https://support.google.com/webmasters/answer/7042828?hl=pl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">oficjalna dokumentacja raportów skuteczności Search Console</a>. Przy lokalnych badaniach dodatkowo znaczenie ma miejsce pomiaru.
              </p>
              <p className={paragraph}>
                Raportuj pozycje w wynikach wyszukiwania razem z zapytaniami i adresami stron, nie jako osobną tabelę bez kontekstu. Nie prognozuj ruchu na podstawie kilku dni. Zwiększenie widoczności strony, zmiana liczby telefonów i sprzedaż to różne zdarzenia, które wymagają osobnej weryfikacji i odpowiedzialnej atrybucji.
              </p>
            </section>

            <section id="koszty" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Ile kosztuje i jak długo trwa pozycjonowanie lokalne?</h2>
              <p className={paragraph}>
                Inwestycja w pozycjonowanie lokalne może obejmować jednorazową diagnozę, poprawki techniczne, przygotowanie treści, konfigurację pomiaru i cykliczną obsługę. Nie ma jednej sztywnej ceny dla każdej firmy. Koszt zależy od liczby rzeczywistych lokalizacji, zakresu problemów, dostępności materiałów i tego, kto odpowiada za implementację oraz kontakt z klientami.
              </p>
              <h3 className="text-xl font-heading font-bold mb-4">Co powinno znaleźć się w wycenie?</h3>
              <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
                <li>Zakres audytu i konkretne elementy profilu oraz strony objęte pracami.</li>
                <li>Odpowiedzialność za teksty, zdjęcia, kod, dane strukturalne i konfigurację analityki.</li>
                <li>Liczba lokalizacji i sposób postępowania z usługami oraz obszarami działalności.</li>
                <li>Definicje mierzonych zdarzeń, częstotliwość raportowania i dostęp do danych źródłowych.</li>
                <li>Zasady współpracy, prawa do materiałów, własność kont i zakres prac po zakończeniu umowy.</li>
              </ul>
              <p className={paragraph}>
                Podobnie nie ma gwarantowanego terminu efektu. Inny czas zajmie poprawienie błędnego telefonu, inny zbudowanie przydatnej treści i rozpoznawalności w konkurencyjnym regionie. Nie ufaj obietnicom stałej pierwszej pozycji. Porównuj oferty po zakresie pracy, przejrzystości i jakości pomiaru, a nie po obietnicy najszybszego wyniku.
              </p>
              <p className={paragraph}>
                Jeśli analizujesz budżet szerzej, zobacz <Link to="/blog/koszt-seo" className="text-primary hover:underline">poradnik o koszcie SEO</Link>. Działania organiczne warto też odróżnić od Google Ads: reklama i pozycjonowanie stron mogą współistnieć, ale budżet reklamowy nie kupuje pozycji w organicznym ani lokalnym rankingu.
              </p>
            </section>

            <section id="bledy" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Najczęstsze błędy w pozycjonowaniu lokalnym</h2>
              <p className={paragraph}>
                Wiele problemów wynika nie z braku kolejnego narzędzia, ale z nieprawdziwych danych i przypadkowych działań. Poniższa checklista pomaga sprawdzić profil, stronę i proces przed kolejną optymalizacją.
              </p>
              <div className="space-y-5">
                {commonMistakes.map((mistake) => (
                  <div key={mistake.title} className="rounded-xl border border-border/50 p-5">
                    <h3 className="text-xl font-heading font-bold mb-2">{mistake.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{mistake.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="ai-2026" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>Lokalne SEO w 2026 roku: AI i przydatność informacji</h2>
              <p className={paragraph}>
                Wyniki wyszukiwania mogą zawierać różne formaty wspierane przez sztuczną inteligencję, w tym AI Overviews w dostępnych lokalizacjach i językach. Nie zmienia to potrzeby utrzymywania dokładnych danych i strony, do której można bezpiecznie odesłać użytkownika. Nie istnieje osobny, gwarantowany sposób na „pozycjonowanie pod AI”.
              </p>
              <p className={paragraph}>
                Przygotowując treści w 2026 roku, jasno opisuj usługi, obszar, ograniczenia i etapy kontaktu. Aktualizuj źródła oraz daty zmian, a informacje o firmie utrzymuj spójne w profilu i witrynie. Struktura nagłówków i odpowiedzi na pytania ułatwia czytanie ludziom i maszynom, ale nie zastępuje jakości, wiarygodności ani rzeczywistego doświadczenia.
              </p>
            </section>

            <section id="faq" className="mb-14 scroll-mt-24">
              <h2 className={sectionHeading}>FAQ: najczęstsze pytania o pozycjonowanie lokalne</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details id={`local-seo-faq-${item.id}`} key={item.id} className="group rounded-xl border border-border/50 bg-muted/10 px-5 py-4 scroll-mt-24">
                    <summary className="cursor-pointer list-none font-semibold text-left">{item.question}</summary>
                    <p className="text-muted-foreground leading-relaxed mt-4">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section id="podsumowanie" className="mb-14 scroll-mt-24 rounded-2xl border border-primary/20 bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 p-7 md:p-9">
              <h2 className={sectionHeading}>Od czego zacząć jutro?</h2>
              <p className={paragraph}>
                Zacznij od jednego arkusza: usługa, obszar, strona docelowa, profil, dane NAP, źródło pomiaru i zdefiniowany kontakt. Popraw najpierw błędy rzeczywistych informacji, a dopiero potem planuj rozbudowę treści. Dzięki temu pozycjonowanie lokalne będzie uporządkowanym procesem, którego kolejne etapy można sprawdzić.
              </p>
              <ul className="space-y-3 text-muted-foreground mb-7">
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>Sprawdź nazwę, kategorię, adres lub obszar, telefon, stronę i godziny.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>Przejdź ścieżkę od wyszukania usługi do kontaktu na telefonie.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" /><span>Ustal jeden sposób raportowania zapytań, interakcji i jakości kontaktów.</span></li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/uslugi/pozycjonowanie-lokalne" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                  Zakres usługi pozycjonowania lokalnego <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/kontakt" className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 font-medium hover:border-primary transition-colors">Kontakt z FOTZ</Link>
              </div>
            </section>

            <aside aria-labelledby="related-guides" className="rounded-2xl bg-muted/20 p-7">
              <h2 id="related-guides" className="text-2xl font-heading font-bold mb-5">Powiązane poradniki</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Link to="/blog/pozycjonowanie-google-maps" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2">Pozycjonowanie w Mapach Google</h3><p className="text-sm text-muted-foreground">Profil, mapa i lokalne sygnały.</p>
                </Link>
                <Link to="/blog/marketing-lokalny-dla-firm" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2">Marketing lokalny dla firm</h3><p className="text-sm text-muted-foreground">Szerszy kontekst dotarcia do klientów w regionie.</p>
                </Link>
                <Link to="/blog/audyt-seo-krok-po-kroku" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2">Audyt SEO krok po kroku</h3><p className="text-sm text-muted-foreground">Diagnoza przed planem zmian.</p>
                </Link>
                <Link to="/blog/seo-techniczne-poradnik" className="rounded-xl border border-border/50 bg-card p-5 hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold mb-2">SEO techniczne</h3><p className="text-sm text-muted-foreground">Indeksowanie, struktura i techniczne podstawy witryny.</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
}
