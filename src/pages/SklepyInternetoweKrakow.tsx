import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/uslugi/sklepy-internetowe/krakow";
const pageTitle = "Sklep internetowy Kraków — projektowanie i wdrożenie";
const seoTitle = "Sklep internetowy Kraków — tworzenie | FOTZ";
const seoDescription = "Sklep internetowy Kraków: projekt, wdrożenie, płatności, integracje, SEO techniczne i analityka. Sprawdź zakres prac i warunki bezpłatnej wyceny FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/uslugi/sklepy-internetowe/krakow";

const summary = [
  "Platformę i funkcje dobieramy do asortymentu, obsługi zamówień oraz zasobów Twojego zespołu. Nie zakładamy z góry, że każdy sklep internetowy i każdy model Twojego biznesu wymagają tych samych integracji.",
  "Kompleksowe rozwiązania obejmują uzgodniony zakres: architekturę katalogu, widoki kategorii, UX/UI, płatności, dostawy, testy oraz przygotowanie zespołu do pracy z panelem.",
  "Po ustaleniu zakresu i odpowiedzialności przygotowujemy bezpłatną wycenę. Oddzielamy prace wdrożeniowe od kosztów zewnętrznych oraz późniejszego pozycjonowania i rozwoju sklepu.",
];

const scope = [
  {
    title: "Platforma e-commerce i zakres wdrożenia",
    text: "Porównujemy WooCommerce, PrestaShop, Shopify i rozwiązania dedykowane pod kątem indywidualnych potrzeb. Uwzględniamy liczbę produktów, warianty, model B2C lub B2B, sposób aktualizacji oferty i wymagane integracje. Funkcjonalny sklep internetowy ma umożliwiać zarządzanie bez zbędnej złożoności, a funkcjonalność powinna odpowiadać procesom firmy. Technologia nie może ograniczać uzgodnionych zadań. Nie chcemy oferować modułów bez uzasadnienia. Przed wyborem omawiamy koszty utrzymania i ograniczenia platformy.",
  },
  {
    title: "Katalog i obsługa produktów",
    text: "Projektujemy kategorie, filtry, wyszukiwarkę, kartę produktu i warianty tak, aby odpowiadały na potrzeby klientów i umożliwiały porównanie oferty. Ustalamy strukturę danych, zdjęcia, opisy, dostępność oraz zasady importu. Kompletne informacje o dostawie i produkcie wspierają zaufanie klientów, a dopasowania katalogu dokonujemy na podstawie rzeczywistego asortymentu. Zakres może obejmować szablon i uzgodniony import; jakość danych źródłowych omawiamy przed wyceną.",
  },
  {
    title: "UX/UI, identyfikacja i responsywność",
    text: "Zanim zaczniemy projektować widoki, ustalamy ścieżki zakupu i priorytety odbiorców. Projekt graficzny nawiązuje do identyfikacji wizualnej Twojej marki. Czytelny układ strony i wygoda na urządzeniach mobilnych kształtują nawigację, listy produktów, koszyk i checkout. Projekt uwzględnia urządzenia mobilne, a kluczowe widoki akceptujesz przed wdrożeniem. Sprawdzamy pola, walidację i komunikaty o błędach. Design porządkuje informacje oraz ułatwia działanie klienta.",
  },
  {
    title: "Płatności, dostawy i integracje",
    text: "Zakres ustalamy na podstawie przyjętych metod płatności, sposobu dostawy i systemów używanych w Twojej firmie. Sklep online może wymagać połączenia z operatorem przesyłek, ERP, CRM, hurtownią lub marketplace, jeśli interfejsy i warunki dostawców to umożliwiają. Nie zgadujemy wymagań integracji: sprawdzamy dokumentację, specyfiki procesów, przepływ danych, odpowiedzialność stron oraz scenariusze testowe przed implementacją.",
  },
  {
    title: "SEO techniczne sklepu",
    text: "Przygotowujemy strukturę adresów, nagłówki, metadane, kanoniczne adresy, mapę witryny, przekierowania i dane strukturalne zgodne z widoczną treścią. Sprawdzamy indeksowanie kategorii i produktów, parametry filtrów, szybkość oraz wersję mobilną. Przy migracji planujemy mapowanie dotychczasowych adresów. Techniczna optymalizacja tworzy podstawę pod pozycjonowanie, ale nie gwarantuje pozycji ani sprzedaży.",
  },
  {
    title: "Pomiar sprzedaży i zapytań",
    text: "Definiujemy zdarzenia dla ścieżki zakupu, transakcji i uzgodnionych form kontaktu. Formularz kontaktowy wymaga osobnego zdarzenia, a przetwarzanie danych osobowych i konfiguracja analityki zależą od platformy, dostępów oraz mechanizmu zgód. Raportowanie może łączyć źródła ruchu, przychód, koszyki i zapytania. Zespół sprzedaży powinien porównywać dane narzędzi z rzeczywistymi zamówieniami, zamiast traktować pozycję frazy jako wynik biznesowy.",
  },
];

const sections = [
  {
    title: "Sklep internetowy w Krakowie — oferta dla małych i średnich firm",
    text: "Tworzeniem sklepów internetowych zajmujemy się zdalnie dla firm z Krakowa i firm w całej Polsce. Projektowanie stron www i sprzedaż online wymagają znajomości oferty, a nie tylko nazwy lokalizacji. Sklep internetowy dla marki detalicznej, producenta lub sprzedaży B2B potrzebuje innego podejścia do katalogu, cen, zamówień i kontaktu z klientem. Kontakt z klientem po zamówieniu również wymaga ustalonych komunikatów. Profesjonalizm wymaga uzasadnienia zakresu, dlatego agencja e-commerce nie powinna przypisywać firmie funkcji wyłącznie na podstawie branży. Ustalamy, co sprzedajesz i które procesy chcesz uprościć, aby profesjonalny sklep internetowy wspierał obecność firmy w internecie. Analiza na tle konkurencji pomaga wybrać priorytety, ale nie zastępuje znajomości Twoich procesów.",
    points: [
      "Sprzedaż B2C: czytelna oferta, warianty, dostawa, płatność i obsługa zwrotów zgodna z ustalonym procesem.",
      "Sprzedaż B2B: uzgodnione reguły cen, kont, zamówień i wymiany danych z systemami firmy.",
      "Sklep stacjonarny i online: zaplanowana synchronizacja dostępności lub obsługa kanałów, jeśli systemy na to pozwalają.",
      "Kraków i okolice: zdalny brief, prezentacja projektu i akceptacje z jasno przypisaną odpowiedzialnością.",
    ],
  },
  {
    title: "Jak wybrać platformę dla Twojego sklepu?",
    text: "WooCommerce wykorzystuje WordPress i bywa rozważany tam, gdzie istotna jest elastyczność treści oraz dostęp do rozbudowy. PrestaShop oferuje rozbudowane funkcje katalogu, natomiast Shopify działa w modelu usługowym. Rozwiązanie dedykowane ma sens dopiero po uzasadnieniu nietypowych wymagań. Strona internetowa z samą ofertą nie zawsze potrzebuje koszyka, ale sklep internetowy wymaga spójnej obsługi produktu, płatności i zamówienia. Porównanie obejmuje aktualizacje, hosting lub abonament, pracę zespołu, integracje i koszty rozwoju. Rekomendacja wskazuje kompromisy oraz warunki, które trzeba zaakceptować przed stworzeniem sklepu internetowego.",
  },
  {
    title: "Projekty stron kategorii i katalog produktów",
    text: "Architektura katalogu powinna odpowiadać sposobowi wyszukiwania produktów, a nie wewnętrznej strukturze firmy. Projektowanie i tworzenie stron kategorii obejmuje atrybuty oraz filtry, które ograniczają wybór bez niekontrolowanej liczby adresów. Potencjalni klienci powinni znaleźć istotne cechy, cenę lub zasady wyceny, dostępność i dostawę. Inny jest proces tworzenia strony internetowej z samą prezentacją oferty, a inne jest stworzenie strony produktu z wariantami i koszykiem. Sprawdzamy zmianę wariantu, liczbę sztuk, koszty oraz komunikaty przed płatnością. Zakres redakcyjny i import ustalamy osobno, z przypisaną odpowiedzialnością za dane źródłowe i akceptację.",
    points: [
      "Struktura kategorii i atrybutów oparta na rzeczywistym asortymencie.",
      "Spójne szablony produktów, wariantów, promocji i informacji o realizacji zamówienia.",
      "Test ścieżki od wyszukania produktu przez koszyk do potwierdzenia zamówienia.",
    ],
  },
  {
    title: "Płatności i integracja z systemami",
    text: "Integracja nie kończy się na podłączeniu modułu. Ustalamy, kiedy zamówienie zmienia status, jak obsłużyć nieudaną płatność, zwrot, brak produktu lub problem z przesyłką. Dobór płatności online zależy od rynku, umowy z operatorem i oczekiwań klientów; nie narzucamy jednej bramki każdej firmie. Projekty sklepów internetowych z wykorzystaniem API wymagają określenia źródła danych, kierunku synchronizacji oraz częstotliwości aktualizacji. Dotyczy to ERP, CRM, hurtowni i marketplace. Warunkiem technicznym są dostępne interfejsy lub moduły i możliwość przetestowania połączenia. Koszty licencji, kont zewnętrznych oraz prac dostawców wskazujemy w wycenie, jeśli dotyczą projektu.",
  },
  {
    title: "SEO i marketing — widoczność sklepu online",
    text: "Przygotowanie techniczne w ramach prac to inny zakres niż stałe pozycjonowanie sklepu po starcie. W projekcie dbamy o dostępność treści dla wyszukiwarki, logiczną strukturę stron, przekierowania, wydajność i zgodność danych strukturalnych z ofertą. Planujemy też podstawowe linkowanie wewnętrzne między kategoriami, produktami i materiałami. Dalsze działania mogą obejmować treści, analizę zapytań i rozwój kategorii, ale wymagają osobnych priorytetów. Nie obiecujemy określonej pozycji w Google ani terminu efektu. Widoczność oceniamy na podstawie danych, w tym zapytań i stron docelowych w Google Search Console, a nie jednorazowego ręcznego sprawdzenia frazy.",
    href: "/seo/pozycjonowanie",
    link: "Poznaj zakres pozycjonowania",
  },
  {
    title: "Jak przebiega proces tworzenia sklepu internetowego?",
    text: "Etap tworzenia sklepów internetowych dzielimy na części z uzgodnionym rezultatem i odpowiedzialnością. Harmonogram zależy od zakresu, dostępów, gotowości materiałów i akceptacji. Przed publikacją sprawdzamy funkcje oraz scenariusze zakupowe w środowisku uzgodnionym dla projektu. Przekazanie obejmuje wskazane w ofercie dostępy, instrukcję lub szkolenie i informacje o dalszym utrzymaniu. Wsparcie techniczne oraz rozwój po starcie opisujemy jako odrębne warunki, zamiast zakładać nieograniczoną opiekę.",
    points: [
      "Analiza: model sprzedaży, katalog, funkcje, integracje, materiały i kryteria akceptacji.",
      "Projekt: architektura informacji, makiety, projekt graficzny i akceptowane widoki kluczowych stron.",
      "Wdrożenie: konfiguracja platformy, programowanie, integracje, treści w uzgodnionym zakresie i testy.",
      "Start: publikacja, kontrola działania, przekazanie uzgodnionych materiałów i plan dalszych prac.",
    ],
  },
  {
    title: "Analityka, formularz kontaktowy i pomiar sprzedaży",
    text: "Przed uruchomieniem ustalamy, które działania mają być mierzone i gdzie powstaje wiarygodny zapis transakcji. Sklep internetowy może przekazywać do analityki wyświetlenia produktów, dodania do koszyka, rozpoczęcie finalizacji i zakup, jeśli wdrożenie zawiera poprawne dane. Dla ofert wymagających rozmowy mierzymy też wysłanie zapytania przez stronę lub inne uzgodnione działanie. Analiza źródeł ruchu pomaga porównać kanały, ale wymaga uwzględnienia zgód, ograniczeń pomiaru i różnic między systemami. Raport powinien pokazywać założenia i rozbieżności, a nie przypisywać każdej sprzedaży jednej interakcji lub optymalizacji.",
  },
  {
    title: "Wycena sklepu i czas realizacji bez sztywnych pakietów",
    text: "Na wycenę wpływają platforma, UX/UI, liczba typów stron, wielkość i jakość katalogu, import danych, integracje, wersje językowe oraz zakres testów i szkolenia. Harmonogram zależy dodatkowo od akceptacji, dostępów i gotowości materiałów. Nie podajemy jednej ceny ani terminu dla każdego sklepu internetowego w Krakowie. Po briefie otrzymujesz propozycję z zakresem, wyłączeniami, odpowiedzialnością stron i warunkami zmian. Koszty domeny, hostingu, abonamentów, licencji, operatorów płatności i innych usług zewnętrznych przedstawiamy oddzielnie, jeżeli występują. Etapowy rozwój Twojego biznesu online jest możliwy, gdy pozwalają na to architektura i priorytety sprzedażowe.",
    points: [
      "Do rozmowy przygotuj opis asortymentu, przykładowe produkty i informację o obecnym sposobie sprzedaży.",
      "Wskaż wymagane systemy i dostawców, ale nie przesyłaj haseł w pierwszej wiadomości.",
      "Porównuj oferty według zakresu, odpowiedzialności i warunków utrzymania, nie samej nazwy platformy.",
    ],
  },
];

const faqs = [
  {
    question: "Ile kosztuje stworzenie sklepu internetowego w Krakowie?",
    answer: "Cena zależy od platformy, projektu graficznego, katalogu, importu, integracji i zakresu testów, a nie od samej lokalizacji firmy. Nie stosujemy na tej stronie sztywnych cen. Po poznaniu wymagań przygotowujemy wycenę z zakresem, wyłączeniami, odpowiedzialnością stron oraz wskazaniem kosztów zewnętrznych, jeśli są potrzebne.",
  },
  {
    question: "Ile trwa wdrożenie sklepu internetowego?",
    answer: "Termin zależy od złożoności funkcji, liczby integracji, gotowości produktów i treści, dostępów oraz tempa akceptacji. Harmonogram ustalamy po briefie i przypisujemy go do konkretnych etapów. Nie deklarujemy jednego czasu realizacji dla każdego projektu ani gwarantowanej daty uzyskania określonych wyników sprzedaży.",
  },
  {
    question: "WooCommerce, PrestaShop, Shopify czy sklep dedykowany?",
    answer: "Wybór zależy od asortymentu, modelu sprzedaży, zespołu obsługującego sklep, integracji i kosztów utrzymania. Porównujemy zalety oraz ograniczenia rozwiązań zamiast wskazywać jedną platformę jako najlepszą dla każdego. Sklep dedykowany rozważamy wtedy, gdy uzasadnione, niestandardowe wymagania przeważają nad możliwościami gotowych systemów.",
  },
  {
    question: "Czy mogę samodzielnie zarządzać produktami i zamówieniami?",
    answer: "Tak, jeśli uzgodniony zakres obejmuje panel i przekazanie uprawnień administratora. Swój sklep internetowy możesz obsługiwać po przekazaniu dostępów i pokazaniu procesów związanych z produktami, zamówieniami oraz treściami. Sposób pracy zależy od platformy. Przed startem warto ustalić role zespołu, zasady aktualizacji oraz zakres późniejszego wsparcia technicznego.",
  },
  {
    question: "Jakie płatności i integracje można wdrożyć?",
    answer: "Zakres zależy od wybranej platformy, rynku, umów z dostawcami i dostępnych interfejsów. Twój sklep internetowy może wymagać płatności online, dostaw, ERP, CRM, hurtowni lub marketplace. Najpierw opisujemy przepływ danych i wyjątki, potem potwierdzamy wykonalność oraz testy. Nie zakładamy dostępności konkretnej integracji bez sprawdzenia wymagań projektu i dostawcy.",
  },
  {
    question: "Czy sklep internetowy będzie widoczny w Google?",
    answer: "Wdrożenie może przygotować techniczną podstawę: indeksowalne strony, poprawne adresy, metadane, przekierowania, strukturę treści i wydajność. Nie gwarantuje to pozycji ani ruchu. Pozycjonowanie wymaga analizy konkurencji, oferty i danych oraz często dalszych prac. Wyniki oceniamy przez zapytania, strony docelowe i zachowania użytkowników, bez obiecywania efektu w określonym czasie.",
  },
  {
    question: "Czy trzeba mieć biuro w Krakowie, aby rozpocząć współpracę?",
    answer: "Nie. Współpracę z firmami z Krakowa i całej Polski prowadzimy zdalnie: brief, prezentacje, akceptacje i przekazanie materiałów odbywają się online. Nie deklarujemy lokalnego biura w Krakowie. Przed projektem ustalamy osoby odpowiedzialne, kanały komunikacji, terminy decyzji i sposób dokumentowania zmian, aby lokalizacja nie zastępowała jasnych zasad pracy.",
  },
];

export default function SklepyInternetoweKrakow() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceEditorial
        path={path}
        title={pageTitle}
        eyebrow="Sklepy internetowe dla firm · Kraków i cała Polska · współpraca zdalna"
        area="Kraków"
        lead="Projektujemy i wdrażamy sklep internetowy dla firm z Krakowa: od wyboru platformy i katalogu po płatności, integracje, SEO techniczne oraz pomiar sprzedaży. Zakres ustalamy na podstawie realnych procesów, bez gotowego pakietu dla każdego biznesu."
        enquiryVariant="shop"
        contactLabel="Poproś o wycenę sklepu internetowego"
        contactDescription="Opisz asortyment, sposób sprzedaży i systemy, których używasz. Napisz, czy planujesz nowy sklep internetowy, przebudowę lub migrację. Na tej podstawie ustalimy potrzebny zakres, odpowiedzialności i warunki wyceny."
        summary={summary}
        scopeTitle="Tworzenie sklepów internetowych Kraków — zakres wdrożenia"
        scope={scope}
        sections={sections}
        faqs={faqs}
        faqTitle="Sklepy internetowe Kraków — FAQ przed wdrożeniem"
      />
    </>
  );
}
