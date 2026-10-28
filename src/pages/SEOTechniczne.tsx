import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const content = {
  "title": "SEO techniczne — audyt i optymalizacja strony",
  "eyebrow": "FOTZ Studio · diagnoza, wdrożenie i kontrola",
  "path": "/seo/techniczne",
  "enquiryVariant": "audit",
  "workAfterScope": true,
  "contactLabel": "Omów problemy swojej strony",
  "lead": "Google nie pokazuje ważnej oferty, strona działa wolno albo po przebudowie ubyło wejść? Sprawdzamy przyczynę, ustalamy priorytety i wdrażamy uzgodnione poprawki. SEO techniczne obejmuje dostępność treści dla wyszukiwarki, indeksowanie, szybkość i działanie strony na telefonie. Otrzymasz konkretną listę zmian, wycenę oraz potwierdzenie wykonanych testów.",
  "summary": [
    "Prześlij adres witryny i opisz problem lub planowaną migrację.",
    "Ustalimy zakres audytu technicznego, potrzebne dostępy i odpowiedzialność za wdrożenie.",
    "Po poprawkach sprawdzimy stronę oraz dane; oddzielimy naprawę od wpływu na ruch i zapytania."
  ],
  "scopeTitle": "Co obejmuje techniczna optymalizacja strony?",
  "scope": [
    {
      "title": "Indeksowanie i dostępność",
      "text": "Sprawdzamy odpowiedzi serwera, blokady robotów, noindex, adresy kanoniczne i mapę witryny. Łączymy odczyt strony z raportami Google Search Console, aby wskazać konkretne problemy z indeksowaniem."
    },
    {
      "title": "Szybkość i Core Web Vitals",
      "text": "Analizujemy ładowanie kluczowych podstron, obrazy, skrypty oraz stabilność układu. Rozróżniamy test laboratoryjny i dane użytkowników. Najpierw naprawiamy przeszkody odczuwalne przy korzystaniu z oferty."
    },
    {
      "title": "Struktura i linkowanie",
      "text": "Porządkujemy adresy URL, przekierowania, linki wewnętrzne i nawigację. Wybieramy właściwy adres dla powtarzających się treści, zachowując dojście do usług, produktów i kontaktu."
    },
    {
      "title": "Renderowanie i urządzenia mobilne",
      "text": "Kontrolujemy, czy tekst, nagłówki i odnośniki są dostępne w HTML oraz po uruchomieniu JavaScript. Na telefonie sprawdzamy menu, przyciski, formularz i elementy zasłaniające treść."
    },
    {
      "title": "Dane strukturalne i metadane",
      "text": "Weryfikujemy znaczniki title, meta description i schema.org. Dane muszą zgadzać się z widoczną ofertą. Poprawny zapis nie jest obietnicą rozszerzonego wyniku w Google."
    },
    {
      "title": "Wdrożenie i odbiór",
      "text": "Przygotowujemy zadania dla programisty albo wykonujemy uzgodnione zmiany. Po publikacji sprawdzamy adresy, kontakt i działanie najważniejszych szablonów. Raport zawiera dowody, datę i ograniczenia kontroli."
    }
  ],
  "sections": [
    {
      "title": "Czym jest SEO techniczne i kiedy go potrzebujesz?",
      "text": "SEO techniczne to praca nad sposobem, w jaki strona udostępnia treść wyszukiwarce i użytkownikowi. Dotyczy między innymi serwera, kodu, struktury serwisu oraz ustawień indeksowania. Przydaje się po zmianie domeny, uruchomieniu sklepu, przebudowie nawigacji albo wtedy, gdy ważne strony znikają z wyników wyszukiwania. Może też ujawnić proste przeszkody: błędny link z menu, nieczytelny przycisk czy przypadkową blokadę oferty. Zaczynamy od określenia problemu biznesowego i adresów, które powinny pomagać w pozyskiwaniu klientów. Dzięki temu audyt nie kończy się listą ostrzeżeń bez wskazania, co zrobić jako pierwsze."
    },
    {
      "title": "Audyt techniczny SEO: co otrzymasz?",
      "text": "Audyt techniczny SEO opisuje stan witryny i plan napraw. Każde istotne zalecenie wiążemy z adresem lub szablonem, sposobem odtworzenia problemu i przewidywanym zakresem pracy. Oddzielamy usterki blokujące dostęp do oferty od drobnych usprawnień. Otrzymasz priorytety, zależności, wskazanie osoby odpowiedzialnej oraz kryteria odbioru. Jeśli potrzebna jest zmiana hostingu, motywu lub systemu CMS, przedstawiamy powód i koszty przed decyzją. Sam raport nie oznacza wdrożenia. W zamówieniu jasno określamy, czy FOTZ przygotowuje diagnozę, realizuje poprawki, czy sprawdza pracę Twojego zespołu.",
      "href": "/seo/audyt",
      "link": "Poznaj pełny zakres audytu SEO"
    },
    {
      "title": "Google Search Console: od komunikatu do przyczyny",
      "text": "Google Search Console pomaga ustalić, które adresy Google zna i jak przedstawia witrynę w wyszukiwarce. Raport indeksowania czytamy razem z inspekcją konkretnego URL, mapą witryny i aktualną odpowiedzią serwera. Status „Strona zeskanowana, ale jeszcze nie zindeksowana” nie wskazuje jednej uniwersalnej usterki. Sprawdzamy jakość oraz odrębność treści, powiązania między podstronami i deklarowany adres kanoniczny. Nie każda wykluczona strona wymaga naprawy: poprawnie przekierowany stary adres powinien ustąpić miejsca nowemu. Najpierw ustalamy, co ma być widoczne, dopiero potem dobieramy działanie. Zgłoszenie URL do sprawdzenia nie potwierdza jego dodania do indeksu."
    },
    {
      "title": "Crawling i indeksowanie — dwa różne etapy",
      "text": "Crawlowanie to pobieranie zasobów przez roboty wyszukiwarek. Indeksowanie polega na analizie informacji i ewentualnym uwzględnieniu strony w indeksie. Dostępny adres z odpowiedzią HTTP 200 nadal może nie pojawić się w wynikach Google. Sprawdzamy więc zarówno możliwość pobrania, jak i treść, jej przydatność oraz sygnały wskazujące wersję docelową. Przy dużych sklepach analizujemy filtry, parametry, duplikaty i wydajność serwera, które wpływają na wykorzystanie zasobów crawlowania. Dla niewielkiej strony firmowej ważniejsze może być po prostu poprawne podlinkowanie kilku ofert. Nie traktujemy „crawl budget” jako domyślnej diagnozy każdego problemu."
    },
    {
      "title": "Plik robots.txt, noindex i mapa strony XML",
      "text": "Robots.txt steruje dostępem robotów do zasobów; nie jest pewnym sposobem usunięcia adresu z wyników wyszukiwania. Gdy strona ma być wyłączona z indeksu, dobieramy odpowiednie rozwiązanie, na przykład dyrektywę noindex na stronie dostępnej dla robota. Treści prywatne wymagają kontroli dostępu. Mapa strony XML powinna wskazywać ważne, docelowe adresy, a nie błędy, przekierowania i warianty wykluczone z indeksowania. Kontrolujemy zgodność tych ustawień ze sobą, żeby sitemap nie proponowała strony, którą jednocześnie blokuje konfiguracja. Przed publikacją sprawdzamy również, czy po testach nie została blokada całego serwisu.",
      "href": "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
      "link": "Zobacz zasady robots.txt w dokumentacji Google"
    },
    {
      "title": "Adresy URL, canonical i duplikacja treści",
      "text": "Jedna oferta może być dostępna pod kilkoma adresami: z parametrami, różnymi końcówkami lub dawną strukturą katalogów. Ustalamy, które wersje są potrzebne odbiorcom, a które powinny prowadzić do wspólnego celu. Tag canonical wskazuje preferowany adres dla podobnych treści, lecz nie zastępuje przekierowania, gdy strona została trwale przeniesiona. Duplikacja treści wymaga oceny kontekstu; nie usuwamy automatycznie każdej podobnej podstrony. Oferta lokalna może mieć osobny sens, jeśli opisuje rzeczywisty zakres obsługi. Gdy różnica sprowadza się do nazwy miasta, analizujemy dane i możliwość połączenia informacji. Docelowe adresy muszą być spójne w nawigacji, sitemap i metadanych."
    },
    {
      "title": "Przekierowania, błędy 404 i migracja serwisu",
      "text": "Przy zmianie adresów przygotowujemy mapę: stary URL i odpowiadająca mu treść docelowa. Sprawdzamy status przekierowania, liczbę przejść oraz zachowanie potrzebnych parametrów kampanii. Nie wysyłamy wszystkich usuniętych podstron na stronę główną, jeśli nie odpowiada ona na ich temat. Poprawiamy również linki wewnętrzne, aby od razu prowadziły do właściwego miejsca. Brakujący materiał powinien mieć prawidłową odpowiedź 404 lub 410, kiedy nie ma użytecznego zamiennika. Migrację dzielimy na przygotowanie, publikację i kontrolę po zmianie. Lista obejmuje też obrazy, formularze oraz adresy ważne w reklamach i wiadomościach wysyłanych klientom."
    },
    {
      "title": "Core Web Vitals i szybkość ładowania strony",
      "text": "Core Web Vitals opisują ładowanie głównej treści (LCP), reakcję na interakcję (INP) i stabilność układu (CLS). Analizujemy zarówno dane rzeczywistych użytkowników, jeśli są dostępne, jak i powtarzalne testy laboratoryjne. Google PageSpeed Insights pomaga znaleźć przyczyny opóźnień, ale pojedynczy wynik punktowy nie opisuje całego doświadczenia klienta. Zbyt duże zdjęcia, ciężki film w pierwszym ekranie lub dodatkowe skrypty mogą utrudnić otwarcie oferty. Dobieramy rozmiary obrazów, sposób ich ładowania, zasady cache i kolejność zasobów do konkretnej strony. Optymalizacja szybkości powinna zachować czytelność, funkcje oraz jakość materiałów. Nie obiecujemy każdej witrynie wyniku 100/100.",
      "href": "https://developers.google.com/search/docs/appearance/core-web-vitals",
      "link": "Sprawdź opis wskaźników Core Web Vitals"
    },
    {
      "title": "JavaScript, HTML i dostępność treści dla Google",
      "text": "W aplikacjach opartych na JavaScript sprawdzamy, co serwer zwraca przed uruchomieniem skryptów oraz co pojawia się po ich wykonaniu. Tytuł, główny opis, linki i dane strukturalne powinny przedstawiać tę samą ofertę. W zależności od technologii rozważamy renderowanie po stronie serwera lub generowanie statycznych podstron. Kontrolujemy też błędy ładowania zasobów i różnice między pierwszym widokiem a działającą aplikacją. Techniczna optymalizacja SEO nie polega na pokazywaniu robotom innej obietnicy niż klientowi. Celem jest rzetelna, dostępna treść i możliwość przejścia do dalszych informacji. Rozwiązanie wybieramy po sprawdzeniu istniejącego systemu."
    },
    {
      "title": "Struktura strony i linkowanie wewnętrzne",
      "text": "Architektura informacji powinna prowadzić od ogólnego problemu do właściwej usługi, realizacji i kontaktu. Analizujemy menu, ścieżki nawigacji, powiązania między treściami i podstrony pozbawione odnośników. Opisowy tekst linku pomaga użytkownikowi przewidzieć, dokąd przejdzie. W sklepie ważne są kategorie, produkty, paginacja oraz użyteczność filtrów. Na stronie usługowej istotny jest zrozumiały zakres i dostępna wycena. Linkowanie wewnętrzne poprawiamy w kontekście potrzeb odwiedzającego, bez mechanicznego dodawania tej samej listy fraz do każdej stopki. Po zmianach kontrolujemy, czy wszystkie potrzebne informacje pozostają osiągalne i czy stara nawigacja nie kieruje do przekierowań."
    },
    {
      "title": "Wersja mobilna, UX i droga do zapytania",
      "text": "Techniczne SEO obejmuje również sprawdzenie, czy da się wygodnie skorzystać z oferty. Kontrolujemy szerokość tekstu, stabilność zdjęć, menu, warstwy zasłaniające stronę oraz formularz na telefonie. Czytelne nagłówki, etykiety pól i obsługa klawiatury pomagają większej liczbie osób dotrzeć do informacji. Test obejmuje komunikaty błędów i potwierdzenie przyjęcia zgłoszenia. Otwarcie formularza nie jest wysłanym zapytaniem, a kliknięcie telefonu nie potwierdza rozmowy. Uzgadniamy sposób weryfikacji przekazania wiadomości do osoby obsługującej klientów. Lepsza widoczność w wyszukiwarce ma sens wtedy, gdy odbiorca może wykonać następny krok."
    },
    {
      "title": "Meta tagi, nagłówki i dane strukturalne",
      "text": "Tytuł strony, meta description oraz nagłówki powinny opisywać jej rzeczywisty temat. Usuwamy puste lub powtarzające się oznaczenia, ale nie zastępujemy nimi brakującej treści oferty. Dane strukturalne schema.org dobieramy do informacji widocznych na stronie. Sprawdzamy poprawność zapisu i aktualność danych firmy; nie dopisujemy ocen, cen ani certyfikatów bez potwierdzenia. Poprawna walidacja nie daje gwarancji rich results ani zwiększenia liczby kliknięć. Techniczne uporządkowanie ułatwia interpretację treści, natomiast to zakres usługi i dowody wykonanej pracy pomagają klientowi ocenić dopasowanie. W razie braków treść planujemy jako osobny element współpracy.",
      "href": "/content-marketing/strategia",
      "link": "Zobacz, jak planujemy treści dla firmy"
    },
    {
      "title": "HTTPS, serwer i bezpieczne wdrożenie",
      "text": "Kontrolujemy działanie certyfikatu HTTPS, odwołania do niezabezpieczonych zasobów oraz odpowiedzi serwera. Sprawdzamy, czy zmiany domeny i protokołu prowadzą do jednej właściwej wersji witryny. Problemy z hostingiem, przeciążenie lub błędy aplikacji mogą utrudniać korzystanie z podstron i ich pobieranie. Przed większą zmianą ustalamy kopię, środowisko testowe oraz sposób przywrócenia poprzedniej wersji. Zakres audytu SEO nie zastępuje pełnego testu bezpieczeństwa. Jeśli problem dotyczy danych klientów lub uprawnień, określamy osobną odpowiedzialność i potrzebny zakres specjalistycznej kontroli. Nie prosimy o przesyłanie haseł w formularzu."
    },
    {
      "title": "Ile kosztuje SEO techniczne i co wpływa na termin?",
      "text": "Wycenę przygotowujemy po poznaniu technologii, liczby szablonów, skali problemów i dostępów do serwisu. Kilka błędnych linków wymaga innego nakładu pracy niż migracja dużego sklepu internetowego. Rozdzielamy koszt diagnozy, wdrożeń oraz kontroli po publikacji. W ofercie wskazujemy zależności od administratora, płatnych narzędzi lub zmian hostingu. Ustalamy również, kto akceptuje zakres i kiedy można bezpiecznie opublikować poprawki. Nie podajemy sztywnego terminu poprawy pozycji — Google potrzebuje czasu na ponowne przetworzenie stron. Możemy natomiast uzgodnić konkretne zadania, terminy realizacji oraz warunki ich odbioru."
    },
    {
      "title": "Jak sprawdzamy efekty optymalizacji technicznej?",
      "text": "Najpierw potwierdzamy usunięcie usterki: poprawną odpowiedź URL, odczyt treści, działające przekierowanie albo formularz. Następnie obserwujemy dostępne dane o indeksowaniu, ruchu organicznym i kontaktach. Porównujemy sensowne okresy, zaznaczając sezonowość, inne publikacje oraz kampanie reklamowe. Wzrost liczby zaindeksowanych adresów sam w sobie nie oznacza większej sprzedaży; po scaleniu duplikatów liczba ta może się zmniejszyć zgodnie z planem. Raport ma pokazać wykonane zmiany, to, co udało się zmierzyć, i kwestie wymagające dalszej obserwacji. Realizacje FOTZ widoczne na stronie pokazują nasze materiały i projekty, nie stanowią automatycznie dowodu wyniku SEO.",
      "href": "/realizacje",
      "link": "Poznaj realizacje FOTZ Studio"
    }
  ],
  "faqTitle": "Pytania przed rozpoczęciem prac technicznych",
  "faqs": [
    {
      "question": "Czy SEO techniczne wystarczy do pozycjonowania strony?",
      "answer": "Nie zawsze. Usunięcie blokady może umożliwić wyszukiwarce dostęp do oferty, ale widoczność zależy także od treści, dopasowania do zapytania i konkurencji. Techniczna optymalizacja strony jest częścią szerszej pracy. Jeśli problem dotyczy oferty lub jej opisu, wskażemy go w diagnozie."
    },
    {
      "question": "Czy wykonujecie poprawki, czy tylko audyt?",
      "answer": "Możemy przygotować raport dla Twojego programisty albo wycenić wdrożenie uzgodnionych zmian. Przed rozpoczęciem określamy technologię, dostępy, odpowiedzialność i sposób odbioru. Nie każda rekomendacja wymaga przebudowy całej witryny."
    },
    {
      "question": "Czy zajmujecie się WordPressem i sklepami internetowymi?",
      "answer": "Zakres ustalamy po sprawdzeniu konkretnego systemu, motywu oraz integracji. Ocenimy, które problemy da się naprawić konfiguracją, a które wymagają zmiany kodu lub udziału dostawcy. Sklep wymaga dodatkowo kontroli kategorii, filtrów, wariantów produktów i procesu zamówienia."
    },
    {
      "question": "Czy gwarantujecie indeksację lub konkretną pozycję w Google?",
      "answer": "Nie. Potwierdzamy wykonanie uzgodnionych prac i stan strony w chwili testu. O włączeniu adresu do indeksu oraz jego pozycji decyduje wyszukiwarka. Wynik audytu, punktacja narzędzia lub zgłoszenie strony nie są gwarancją ruchu ani zapytań."
    },
    {
      "question": "Czy każdą stronę niezindeksowaną trzeba naprawić?",
      "answer": "Nie. Konto klienta, wyniki wewnętrznej wyszukiwarki czy celowo wycofany adres mogą pozostawać poza indeksem. Sprawdzamy przede wszystkim ważne oferty i materiały, które powinny być publicznie dostępne. Decyzja wynika z przeznaczenia konkretnej podstrony."
    },
    {
      "question": "Jakich dostępów potrzebujecie?",
      "answer": "Na początek wystarczy publiczny adres i opis objawów. Do dokładniejszej diagnozy przydaje się dostęp do Google Search Console oraz uzgodnionych danych analitycznych. Dostęp do kodu, CMS lub hostingu ustalamy zależnie od zakresu. Uprawnienia nadajesz przez zaproszenie, bez podawania hasła w zgłoszeniu."
    },
    {
      "question": "Czy optymalizacja pomaga w obecności w odpowiedziach AI?",
      "answer": "Czytelny HTML, spójne dane oraz dostępne treści ułatwiają systemom odczyt strony. Nie dają jednak gwarancji cytowania przez konkretną usługę AI. W ofercie oddzielamy wykonane zmiany od potwierdzonych wzmianek, wejść i zapytań klientów."
    },
    {
      "question": "Co wysłać, żeby otrzymać wycenę?",
      "answer": "Adres strony, krótki opis problemu, używany system i informację o ostatnich zmianach. Jeśli planujesz migrację, podaj jej zakres i termin. Na tej podstawie ustalimy następny krok: diagnozę, audyt techniczny lub konkretny pakiet poprawek."
    }
  ],
  "contactDescription": "Prześlij adres strony, opisz objawy i ostatnie zmiany. Ustalimy, co sprawdzić najpierw, kto wdroży poprawki i jak potwierdzimy ich działanie."
};

export default function SEOTechniczne() {
  return <>
    <SEOHead title="SEO techniczne — audyt i optymalizacja | FOTZ Studio" description="SEO techniczne: sprawdzimy indeksowanie, szybkość, przekierowania i działanie strony. Poznaj zakres audytu, wdrożeń oraz wyceń poprawki z FOTZ Studio." canonical="https://www.fotz-studio.pl/seo/techniczne" />
    <ServiceEditorial {...content} />
  </>;
}
