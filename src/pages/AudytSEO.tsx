import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const content = {
  "title": "Audyt SEO z planem napraw",
  "eyebrow": "Dane, przyczyny, kolejność działań",
  "path": "/seo/audyt",
  "lead": "Sprawdzamy, co utrudnia znalezienie i zrozumienie Twojej strony. Łączymy dane Search Console z kontrolą serwisu, żeby odróżnić błąd techniczny od problemu treści i wskazać konkretne prace.",
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
      "title": "Co dostajesz po audycie",
      "text": "Raport opisuje sprawdzony zakres, problematyczne adresy, dowody i zalecane zmiany. Zadania mają priorytet oraz warunek odbioru, aby wykonawca wiedział, co poprawić i jak to sprawdzić. Zaznaczamy też ograniczenia: brak dostępu do danych, niepełny pomiar lub elementy wymagające decyzji biznesowej. Lista ostrzeżeń z narzędzia jest materiałem do analizy, a nie gotową diagnozą."
    },
    {
      "title": "Jak pracujemy z Search Console",
      "text": "Weryfikujemy właściwą domenę, zakres raportu i daty. Strona z przekierowaniem albo celowym noindex nie musi być błędem. Przy adresie zeskanowanym, lecz niezindeksowanym, analizujemy treść, duplikaty i linkowanie. Po naprawie sprawdzamy produkcję; zgłoszenie URL-a lub rozpoczęcie weryfikacji nie oznacza jeszcze, że Google ponownie go odwiedził."
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
    <ServiceEditorial {...content} />
  </>;
}
