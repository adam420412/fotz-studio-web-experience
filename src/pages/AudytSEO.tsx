import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const content = {
  "title": "Audyt SEO strony internetowej z planem napraw",
  "eyebrow": "Dane, przyczyny, kolejność działań",
  "path": "/seo/audyt",
  "lead": "Audyt SEO to analiza strony internetowej, która wskazuje przeszkody w indeksowaniu, widoczności i pozyskiwaniu zapytań z Google. Sprawdzamy technologię, treści oraz linki, łączymy wyniki z Google Search Console i przekazujemy plan optymalizacji z kolejnością prac.",
  "summary": [
    "Ustalamy ważne podstrony, cele biznesowe i zakres analizy.",
    "Weryfikujemy przykłady problemów na działającej stronie.",
    "Przekazujemy priorytety, dowody i warunki odbioru poprawek."
  ],
  "scopeTitle": "Sprawdzamy więcej niż pojedynczy wynik narzędzia.",
  "scope": [
    {
      "title": "Indeksowanie w Google",
      "text": "Raporty Search Console, mapy witryny, inspekcja wybranych adresów i daty skanowania. Sprawdzamy, które wykluczenia są zamierzone, a które dotyczą ważnej oferty."
    },
    {
      "title": "Dostępność techniczna",
      "text": "Kody HTTP, przekierowania, canonical, robots.txt i noindex. Weryfikujemy, czy treść oraz linki są dostępne w HTML i po uruchomieniu JavaScript."
    },
    {
      "title": "Treść i intencja",
      "text": "Temat podstrony, konkretna odpowiedź na pytanie klienta, nagłówki, tytuł i opis. Szukamy niespójności, braków oraz stron konkurujących o ten sam cel."
    },
    {
      "title": "Linkowanie i struktura",
      "text": "Przejścia między ofertą, poradnikami i realizacjami. Wychwytujemy uszkodzone linki oraz adresy, do których trudno dotrzeć z nawigacji."
    },
    {
      "title": "Telefon i wydajność",
      "text": "Czytelność, menu, multimedia i droga do kontaktu. Wyniki testów laboratoryjnych oddzielamy od danych użytkowników w Core Web Vitals."
    },
    {
      "title": "Dane strukturalne",
      "text": "Zgodność oznaczeń z widoczną treścią i kontrola raportów rozszerzeń. Poprawny format danych nie gwarantuje dodatkowego wyglądu wyniku wyszukiwania."
    }
  ],
  "sections": [
    {
      "title": "Darmowy audyt online czy indywidualna analiza SEO?",
      "text": "Automatyczny audyt SEO online może szybko wykryć brak tytułu, uszkodzony link albo ciężki obraz. To przydatny punkt wyjścia. Narzędzie nie zna jednak marży firmy, jakości zapytań ani przyczyn wcześniejszych zmian na stronie. Indywidualny audyt łączy pomiary z oceną specjalisty: czy dana podstrona jest potrzebna, na jakie pytanie odpowiada i czy klient może przejść z niej do właściwej usługi. W FOTZ Studio wyceniamy uzgodniony zakres analizy. Rozmowa o potrzebach i wycena nie są równoznaczne z wykonaniem pełnego audytu."
    },
    {
      "title": "Co dostajesz po audycie",
      "text": "Raport opisuje sprawdzony zakres, problematyczne adresy, dowody i zalecane zmiany. Zadania mają priorytet oraz warunek odbioru, aby wykonawca wiedział, co poprawić i jak to sprawdzić. Zaznaczamy też ograniczenia: brak dostępu do danych, niepełny pomiar lub elementy wymagające decyzji biznesowej. Lista ostrzeżeń z narzędzia jest materiałem do analizy, a nie gotową diagnozą."
    },
    {
      "title": "Jak sprawdzamy treści, słowa kluczowe i konkurencję",
      "text": "Analizujemy frazy, na które witryna ma wyświetlenia, oraz strony docelowe tych wyszukiwań. Dużo wyświetleń bez kliknięć może wskazywać na niską pozycję, niedopasowany temat albo mało przekonujący wynik wyszukiwania. Porównujemy rodzaj wyników Google z celem podstrony: poradnik, oferta i kategoria sklepu odpowiadają na różne potrzeby. Zlecenie audytu może obejmować analizę uzgodnionych konkurentów, ale nie kopiowanie ich tekstów.",
      "points": [
        "Tytuł i meta description powinny precyzyjnie opisywać ofertę i zawartość strony. Google może wyświetlić inny opis, zależnie od zapytania.",
        "Nagłówki porządkują odpowiedzi. Sprawdzamy, czy opis zawiera zakres usługi, warunki wyceny, własne przykłady i czytelny następny krok.",
        "Podobne podstrony porównujemy pod względem intencji. Połączenie treści lub przekierowanie proponujemy dopiero po sprawdzeniu ruchu, linków i roli adresu.",
        "Linki wewnętrzne powinny pomagać dotrzeć z poradnika do odpowiedniej oferty oraz z oferty do dowodów realizacji."
      ]
    },
    {
      "title": "Jak pracujemy z Search Console",
      "text": "Weryfikujemy właściwą domenę, zakres raportu i daty. Strona z przekierowaniem albo celowym noindex nie musi być błędem. Przy adresie zeskanowanym, lecz niezindeksowanym, analizujemy treść, duplikaty i linkowanie. Po naprawie sprawdzamy produkcję; zgłoszenie URL-a lub rozpoczęcie weryfikacji nie oznacza jeszcze, że Google ponownie go odwiedził."
    },
    {
      "title": "Audyt techniczny: od serwera do wersji mobilnej",
      "text": "Kontrola techniczna pokazuje, czy wyszukiwarka i użytkownik otrzymują właściwą stronę. Przy aplikacjach JavaScript porównujemy treść pobraną z serwera z tym, co pojawia się w przeglądarce. W sklepie sprawdzamy także uzgodnione szablony kategorii, produktów i filtrów. Przy migracji porównujemy listę starych i nowych adresów.",
      "points": [
        "Sprawdzamy odpowiedzi serwera i łańcuchy przekierowań, aby ważne linki nie kończyły się błędem 404.",
        "Porównujemy adresy kanoniczne, dyrektywy robots i mapę witryny z zamierzoną strukturą serwisu.",
        "Oceniamy szybkość ładowania, rozmiary zdjęć oraz stabilność układu na telefonie. Wynik pojedynczego testu nie opisuje doświadczeń wszystkich użytkowników.",
        "Testujemy drogę do formularza i jego walidację. Weryfikację zapisu zgłoszeń w CRM lub dostarczenia wiadomości ustalamy w zakresie i wykonujemy z uprawnionym dostępem."
      ]
    },
    {
      "title": "Audyt, wdrożenie i odbiór",
      "text": "Sam audyt kończy się diagnozą i planem. Wdrożenie poprawek ustalamy jako osobny zakres: może zająć się nim Twój zespół albo FOTZ Studio. Odbiór obejmuje działającą stronę, a nie wyłącznie lokalny test. Późniejsza obserwacja Google i ruchu pozwala ocenić, czy techniczna poprawka przełożyła się na zmianę widoczności.",
      "href": "/seo/pozycjonowanie",
      "link": "Dalsze działania SEO"
    },
    {
      "title": "Od czego zależy wycena",
      "text": "Znaczenie mają liczba i typy podstron, technologia, liczba wersji językowych, zakres danych oraz potrzeba analizy migracji lub sklepu. Ustalamy, czy badamy cały serwis, wybrane szablony czy konkretny spadek. Termin i cenę podajemy po poznaniu zakresu; nie obiecujemy pełnego audytu dużego sklepu w terminie właściwym dla małej witryny.",
      "href": "/kontakt",
      "link": "Prześlij stronę do wyceny"
    },
    {
      "title": "Jak przygotować stronę do audytu SEO",
      "text": "Prześlij adres witryny i opisz problem: spadek ruchu, brak zapytań, nową wersję strony albo brak ważnych podstron w Google. Dodaj daty istotnych zmian i wskaż usługi lub produkty, które mają pierwszeństwo. Ustalimy dostęp do Search Console oraz, jeśli jest potrzebny, do analityki. Nie przesyłaj haseł — dostęp nadaje się wskazanemu kontu w danym narzędziu. Im lepiej znamy cel biznesowy, tym łatwiej oddzielić pilne naprawy od prac, które można odłożyć.",
      "href": "/kontakt?usluga=seo&wariant=audit#formularz",
      "link": "Zapytaj o audyt swojej strony"
    }
  ],
  "faqs": [
    {
      "question": "Czy dostęp do Search Console jest konieczny?",
      "answer": "Bez niego można sprawdzić publiczną stronę, ale nie odczytamy pełnych raportów indeksowania i skuteczności. W raporcie zaznaczamy ograniczenie. Sposób udostępnienia danych ustalamy bez przekazywania hasła."
    },
    {
      "question": "Czy audyt obejmuje wdrożenie zmian?",
      "answer": "Wdrożenie nie wynika automatycznie z zamówienia analizy. W ofercie wskazujemy, czy obejmuje raport, omówienie, poprawki oraz kontrolę po publikacji."
    },
    {
      "question": "Czy wszystkie strony muszą być w indeksie?",
      "answer": "Nie. Zaplecze administracyjne, strony testowe i prawidłowo przekierowane adresy zwykle nie powinny być osobnymi wynikami. Ważne, żeby dostępne i wartościowe podstrony oferty nie były przypadkowo blokowane."
    },
    {
      "question": "Czy audyt zagwarantuje lepsze pozycje?",
      "answer": "Nie. Audyt identyfikuje problemy i możliwości poprawy. Indeksowanie, pozycje i ruch zależą również od jakości treści, konkurencji i decyzji wyszukiwarki."
    },
    {
      "question": "Kiedy warto przeprowadzić audyt?",
      "answer": "Przy spadku widoczności, zmianie domeny lub technologii, przebudowie oferty i przed większą kampanią. Zakres powinien odpowiadać konkretnemu problemowi oraz zmianom na stronie."
    },
    {
      "question": "Ile kosztuje audyt SEO strony internetowej?",
      "answer": "Cena zależy od wielkości serwisu, liczby szablonów, technologii i zakresu analizy. Inaczej wyceniamy kontrolę kilku ofert, a inaczej sklep z filtrami lub migrację domeny. Po krótkim briefie otrzymasz zakres i wycenę; osobno wskazujemy wdrożenie rekomendacji."
    },
    {
      "question": "Ile trwa audyt i kiedy zobaczę wyniki?",
      "answer": "Termin raportu ustalamy po poznaniu serwisu i potwierdzeniu dostępu do danych. Raport otrzymujesz na końcu analizy, natomiast zmiany widoczności można oceniać dopiero po wdrożeniu i ponownym przetworzeniu stron przez Google. Nie jest to ten sam termin."
    },
    {
      "question": "Czy audyt pomoże w widoczności w odpowiedziach AI?",
      "answer": "Sprawdzamy dostępność treści, indeksowanie, jednoznaczność informacji o firmie i odpowiedzi na pytania klientów. To wspólne podstawy przydatne dla wyszukiwarek oraz systemów korzystających ze źródeł internetowych. Sam audyt ani specjalny znacznik nie gwarantują cytowania firmy w odpowiedzi AI."
    }
  ]
};

export default function AudytSEO() {
  return <>
    <SEOHead
      title="Audyt SEO i Search Console — analiza i plan | FOTZ Studio"
      description="Audyt SEO z analizą Search Console, indeksowania, treści i linków. Otrzymasz listę problemów z dowodami, priorytety wdrożenia oraz sposób sprawdzenia poprawek."
      canonical="https://www.fotz-studio.pl/seo/audyt"
    />
    <ServiceEditorial {...content} enquiryVariant="audit" />
  </>;
}
