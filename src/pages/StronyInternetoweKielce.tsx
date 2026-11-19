import { ServiceEditorial } from "@/components/ServiceEditorial";
import { SEOHead } from "@/components/seo/SEOHead";

const scope = [
  {
    title: "Strona firmowa z ofertą i kontaktem",
    text: "Dla firmy usługowej z Kielc projektujemy stronę, na której klient znajdzie zakres pracy, realizacje i sposób zamówienia. Ustalamy, jakie informacje są potrzebne do wyceny. Krótki formularz może pytać o rodzaj usługi, termin i miejsce realizacji. Na telefonie łatwo przejdziesz do kontaktu z osobą przyjmującą zlecenia.",
    href: "/kontakt?usluga=web&wariant=website#formularz",
    link: "Zapytaj o nową stronę firmową",
  },
  {
    title: "Przebudowa istniejącej strony WWW",
    text: "Masz stronę internetową, lecz odwiedzający nie wysyłają zapytań? Sprawdzamy ofertę, nawigację, wersję mobilną i formularz. Porównujemy podstrony z zapytaniami w Google Search Console. Po przeglądzie ustalamy, czy potrzebna jest zmiana treści, projekt graficzny czy przebudowa serwisu. Przy zmianie adresów planujemy przekierowania.",
    href: "/kontakt?usluga=web&wariant=redesign#formularz",
    link: "Omów poprawę obecnej strony",
  },
  {
    title: "Sklepy internetowe i katalogi produktów",
    text: "Jeśli chcesz sprzedawać online, zaczynamy od produktów, wariantów, płatności i dostawy. Sklep internetowy powinien ułatwiać wybór i złożenie zamówienia. Gdy cena zależy od indywidualnych ustaleń, odpowiedni może być katalog z zapytaniem do handlowca. Integracje z magazynem i księgowością wyceniamy po sprawdzeniu dostępnych systemów.",
    href: "/kontakt?usluga=web&wariant=shop#formularz",
    link: "Zapytaj o sklep internetowy",
  },
];

const sections = [
  {
    title: "Projektowanie stron internetowych zaczynamy od zapytania klienta",
    text: "Co powinien wiedzieć odbiorca, zanim napisze do Twojej firmy? To pierwsze pytanie przy tworzeniu strony. Dla wykonawcy z Kielc ważne mogą być obszar dojazdu, zdjęcia zakończonych prac i dostępne terminy. Dla producenta sprzedającego w całej Polsce będą to parametry produktu, warianty oraz warunki współpracy. Dobieramy strukturę strony internetowej do sposobu podejmowania decyzji przez klienta.",
    points: [
      "Strona główna przedstawia ofertę i prowadzi do konkretnej usługi. Użytkownik widzi, dla kogo pracujesz i jaki problem rozwiązujesz.",
      "Podstrona usługi opisuje zakres, przebieg realizacji i sposób wyceny. Zdjęcia własnych prac pomagają ocenić, czy oferta pasuje do potrzeb odbiorcy.",
      "Formularz zbiera informacje potrzebne do odpowiedzi. Ustalamy odbiorcę zgłoszeń i sposób zapisania zapytania, aby można było wrócić do rozmowy.",
    ],
  },
  {
    title: "Strony internetowe Kielce – wycena i oferta dla firmy",
    text: "WWW START kosztuje 1 490 zł netto. To One Page do 5 sekcji na szablonie FOTZ, z tekstami, logo i zdjęciami dostarczonymi przez klienta oraz jedną rundą poprawek. Domena i hosting są rozliczane osobno. Ten wariant sprawdzi się przy niewielkiej ofercie, którą można przedstawić na jednej stronie. Jeśli potrzebujesz indywidualnego projektu graficznego albo kilku podstron usług, przygotujemy osobną wycenę.",
    points: [
      "Cena rozbudowanej strony zależy od liczby widoków, funkcjonalności, treści i integracji. Najpierw ustalamy listę elementów do wykonania.",
      "Pisanie tekstów, sesja zdjęciowa, film oraz rozbudowane funkcje wymagają osobnej kalkulacji. W ofercie wskazujemy, kto dostarcza każdy materiał.",
      "Koszty utrzymania, płatne licencje i opieka techniczna są wyszczególnione przed rozpoczęciem współpracy. Harmonogram i zasady poprawek potwierdzamy w ofercie.",
    ],
    href: "/cennik-stron-internetowych",
    link: "Sprawdź cennik tworzenia stron WWW",
  },
  {
    title: "Responsywne strony internetowe – wygodny kontakt na telefonie",
    text: "Projektowanie stron WWW obejmuje widoki na urządzeniach mobilnych i komputerze. Sprawdzamy wielkość przycisków, menu, czytelność tekstu i sposób prezentacji zdjęć. Responsywna strona internetowa pozwala obejrzeć realizację i wysłać pytanie bez powiększania ekranu. Responsywność uwzględniamy już na etapie makiet. Testujemy również szybkość ładowania, ograniczamy ciężkie obrazy i dobieramy animacje tak, aby nie utrudniały korzystania z oferty.",
  },
  {
    title: "WordPress – funkcjonalna strona WWW i zarządzanie treścią",
    text: "System zarządzania treścią CMS pozwala aktualizować ofertę, zdjęcia i wpisy bez edycji kodu. System WordPress jest jednym z możliwych rozwiązań. Przed wyborem technologii pytamy, kto będzie obsługiwać stronę i jakie zmiany wykonuje najczęściej. Przy nietypowych funkcjach rozważamy rozwiązanie dedykowane. W zakresie projektu ustalamy role użytkowników, instrukcję obsługi i sposób przekazania dostępów.",
  },
  {
    title: "Strona producenta – realizacja FPS Poznań",
    text: "Dla FPS Poznań przygotowaliśmy stronę internetową i identyfikację wizualną producenta pojazdów szynowych. To przykład prezentacji oferty przemysłowej, w której ważne są czytelna struktura i spójny wizerunek firmy. Jeśli prowadzisz działalność produkcyjną w województwie świętokrzyskim, możemy omówić podobny sposób uporządkowania Twoich produktów, dokumentacji i kontaktu handlowego.",
    href: "/realizacje/fps-cegielski",
    link: "Zobacz projekt strony FPS Poznań",
  },
  {
    title: "Konfigurator 3D i strona internetowa KLAGEM",
    text: "W projekcie KLAGEM połączyliśmy stronę z konfiguratorem mebli 3D. Użytkownik dobiera moduły, wymiary i kolory oraz otrzymuje orientacyjną wycenę. Taka funkcja może pomóc przygotować bardziej konkretne zapytanie o produkt na zamówienie. Zanim zaproponujemy konfigurator Twojej firmie, ustalimy zasady łączenia wariantów i obliczania ceny. Jest to osobny zakres programowania, wyceniany po analizie produktu.",
    href: "/realizacje/klagem",
    link: "Obejrzyj stronę i konfigurator KLAGEM",
  },
  {
    title: "Projekt graficzny i materiały dla RPPG Group",
    text: "Dla Rady Polskich Przedsiębiorców Globalnych stworzyliśmy serwis z interaktywnym globusem 3D oraz materiały foto i wideo. Zobacz, jak element wizualny łączy się z informacją o organizacji. Przy Twojej stronie dobieramy formę do odbiorców. Czasem wystarczy dobra fotografia i jasny opis usługi, a dodatkową animację warto zaplanować dopiero wtedy, gdy pomaga zrozumieć ofertę.",
    href: "/realizacje/rppg",
    link: "Poznaj realizację RPPG Group",
  },
  {
    title: "Tworzenie stron WWW a pozycjonowanie w Google",
    text: "Podczas projektowania strony planujemy tytuły podstron, nagłówki, opisy i linkowanie wewnętrzne. Optymalizacja SEO obejmuje też czytelne adresy, dostępność treści dla wyszukiwarek i kontrolę indeksowania. W Search Console można sprawdzić, na jakie zapytania witryna się wyświetla. Dla firmy obsługującej Kielce opisujemy rzeczywisty obszar działania, zasady dojazdu i usługi dostępne na miejscu.",
    points: [
      "Przed publikacją sprawdzamy linki, mapę strony i adresy kanoniczne. Przy przebudowie zachowujemy ważne adresy albo ustalamy ich przekierowania.",
      "Dalsze pozycjonowanie stron internetowych wymaga pracy nad treścią, techniką i wiarygodnością. Zakres SEO po uruchomieniu jest ustalany oddzielnie.",
      "Widoczność w wyszukiwarce, wejście na stronę i nowe zapytanie to różne wyniki. Samo wdrożenie nie gwarantuje pozycji ani liczby klientów.",
    ],
    href: "/uslugi/pozycjonowanie/kielce",
    link: "Poznaj zakres pozycjonowania dla firm z Kielc",
  },
  {
    title: "Projektowanie i tworzenie stron internetowych – etapy realizacji",
    text: "Współpracę prowadzimy online. Możesz przesłać materiały i zaakceptować projekt bez wizyty w biurze. Każdy etap ma ustalony zakres i osobę odpowiedzialną za akceptację. Termin wykonania zależy od funkcji, przygotowania treści i czasu potrzebnego na uwagi. Ustalamy go po briefie, aby plan publikacji odpowiadał Twoim możliwościom.",
    points: [
      "Brief i wycena. Omawiamy klientów, usługi, funkcje, budżet i termin. Wskazujemy materiały potrzebne do rozpoczęcia pracy.",
      "Projektowanie graficzne. Układamy treść i nawigację, a następnie przedstawiamy widoki do akceptacji, zgodnie z wybranym wariantem oferty.",
      "Programowanie i testy. Wdrażamy zaakceptowany projekt, sprawdzamy formularze, linki i działanie na różnych szerokościach ekranu.",
      "Publikacja i przekazanie. Po akceptacji uruchamiamy witrynę i przekazujemy uzgodnione dostępy. Ustalamy, kto odpowiada za aktualizacje i kopie zapasowe.",
    ],
  },
  {
    title: "Jak sprawdzić, czy strona przynosi zapytania?",
    text: "Już przy wycenie ustalamy, co jest celem strony internetowej. Może to być formularz zapytania, telefon, rezerwacja lub zakup. W uzgodnionym zakresie konfigurujemy analitykę i integrację z CRM. Test wysłania wiadomości powinien potwierdzić jej zapis i dotarcie do właściwego odbiorcy. Po publikacji warto porównać źródło zgłoszenia z jego jakością. Rozmowa o właściwej usłudze i zaakceptowana oferta mówią więcej o pozyskiwaniu klientów niż same kliknięcia.",
  },
  {
    title: "Profesjonalne strony dla firm – jak wybrać agencję?",
    text: "Jeżeli szukasz partnera w zakresie tworzenia stron internetowych, porównaj nie tylko wygląd portfolio. Zapytaj, co obejmuje wykonanie strony, kto zatwierdza projekt i co otrzymasz po publikacji. Profesjonalizm można ocenić po przejrzystym zakresie, zasadach rozliczeń i sposobie sprawdzania funkcji. Dobra oferta jest dopasowana do potrzeb klientów danej branży. Agencja powinna wyjaśnić, czy prosta wizytówka wystarczy, czy potrzebujesz kilku podstron i rozbudowanego formularza.",
    points: [
      "Oceń projekt graficzny strony na telefonie. Nowoczesne strony internetowe mają czytelną hierarchię, a ważne informacje są dostępne także bez uruchamiania animacji.",
      "Zapytaj o dostosowanie formularza do Twojej usługi. Dla firmy remontowej przydatny będzie zakres prac, dla producenta liczba sztuk i wariant produktu.",
      "Przy kompleksowym zleceniu ustal, co obejmują teksty, materiały wizualne, programowanie i wdrożenie. Możesz też powierzyć nam pojedynczy etap projektu strony WWW.",
    ],
  },
  {
    title: "Obsługa stron internetowych po publikacji",
    text: "Realizacja strony internetowej kończy etap budowy, ale zawartość strony powinna odpowiadać bieżącej ofercie. Zmiana telefonu, sezonowy cennik czy nowe usługi wymagają aktualizacji. W ramach osobno uzgodnionej obsługi ustalamy, kto wprowadza treści, aktualizuje oprogramowanie i kontroluje kopie zapasowe. Dla Twojej strony internetowej określamy zakres wsparcia oraz sposób zgłaszania zmian. Utrzymanie witryny warto zaplanować przed odbiorem projektu.",
  },
  {
    title: "Budowa strony czy sklep internetowy – od czego zacząć?",
    text: "Gdy klient kupuje po rozmowie, strona dla firmy może prezentować realizacje i zbierać zapytania o termin. Jeśli zamawia powtarzalny produkt, sklep pozwoli pokazać cenę i przyjąć płatność online. Przed rozpoczęciem projektowania i tworzenia strony ustalamy te różnice. Profesjonalne tworzenie stron wymaga także decyzji, które funkcje uruchomić najpierw. Dzięki temu pierwsza wersja może odpowiadać na najważniejsze potrzeby, a dalszy rozwój ma osobny plan i koszt.",
  },
];

const faqs = [
  {
    question: "Co przesłać do wyceny strony internetowej w Kielcach?",
    answer: "Podaj adres obecnej strony, jeśli ją masz, opis usług, potrzebne funkcje i oczekiwany termin. Napisz, czy dysponujesz tekstami, logo i zdjęciami. Możesz dodać przykład strony, której układ Ci odpowiada. Na tej podstawie doprecyzujemy zakres i przygotujemy wycenę.",
  },
  {
    question: "Czy macie biuro w Kielcach?",
    answer: "Nie prowadzimy biura w Kielcach. Obsługujemy firmy z Kielc i województwa świętokrzyskiego zdalnie. Adres rejestrowy FOTZ Studio to Poznańska 117/11, 62-023 Kamionki. Jeśli projekt wymaga zdjęć lub spotkania na miejscu, termin i koszt dojazdu ustalamy osobno.",
  },
  {
    question: "Czy mogę zlecić poprawę strony zamiast budowy nowej?",
    answer: "Tak. Prześlij link i opisz, co nie działa lub co chcesz zmienić. Sprawdzimy możliwość poprawy obecnego serwisu oraz zakres potrzebnych dostępów. Rekomendację i koszt przedstawimy po rozpoznaniu problemu.",
  },
  {
    question: "Czy teksty, hosting i opieka są w cenie strony?",
    answer: "W pakiecie WWW START materiały dostarcza klient, a domena i hosting są płatne osobno. Przy większym projekcie rozpisujemy odpowiedzialność za teksty, zdjęcia, utrzymanie i licencje. Wsparcie techniczne, aktualizacje oraz dalszy rozwój wymagają uzgodnionego zakresu.",
  },
  {
    question: "Czy strona będzie gotowa do kampanii reklamowej?",
    answer: "Możemy przygotować stronę docelową, formularz i pomiar kontaktów pod planowaną kampanię. Potrzebujemy informacji o promowanej usłudze i odbiorcach. Obsługa reklam, produkcja materiałów i budżet emisji mają osobną wycenę. Konfigurację analityki uzgadniamy z uwzględnieniem zgód użytkowników.",
  },
];

export default function StronyInternetoweKielce() {
  return <>
    <SEOHead
      title="Strony internetowe Kielce – tworzenie stron WWW | FOTZ"
      description="Projektujemy strony internetowe dla firm z Kielc. Strona WWW, sklep internetowy i przebudowa. Poznaj ceny, realizacje i obsługę online. Zapytaj o wycenę."
      canonical="https://www.fotz-studio.pl/strony-internetowe/kielce"
    />
    <ServiceEditorial
      path="/strony-internetowe/kielce"
      area="Kielce"
      title="Strony internetowe Kielce – projektowanie stron WWW"
      eyebrow="FOTZ Studio · projektowanie stron WWW · współpraca online"
      lead="Pokaż klientowi swoją ofertę, realizacje i prostą drogę do kontaktu. Tworzymy strony internetowe dla firm z Kielc, przebudowujemy istniejące serwisy i wdrażamy sklepy. Opisz, jakie zapytania chcesz pozyskiwać, a dobierzemy zakres projektu do Twojego biznesu."
      priceNote="WWW START · 1 490 zł netto za One Page do 5 sekcji na szablonie FOTZ. Materiały klienta i jedna runda poprawek. Domena i hosting osobno."
      contactLabel="Zapytaj o wycenę strony"
      contactDescription="Napisz, co oferujesz, jakie funkcje są potrzebne i kiedy planujesz start. Jeśli masz już stronę, dołącz jej adres. Ustalimy zakres, cenę i następny krok."
      enquiryVariant="website"
      summary={[
        "Porównaj nową stronę, przebudowę i sklep internetowy.",
        "Sprawdź warunki WWW START i sposób wyceny większych projektów.",
        "Obejrzyj rzeczywiste realizacje FOTZ i wyślij opis swojego projektu.",
      ]}
      scopeTitle="Tworzenie stron internetowych w Kielcach – co chcesz zlecić?"
      scope={scope}
      sections={sections}
      faqs={faqs}
      faqTitle="Pytania o projektowanie stron WWW dla firm z Kielc"
      workAfterScope
      galleryExcludeHero
    />
  </>;
}
