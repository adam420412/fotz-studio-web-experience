import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-lodz",
  city: "Łódź",
  headingPrefix: "Pozycjonowanie stron internetowych",
  headingSuffix: " — agencja SEO",
  cityGenitive: "Łodzi",
  title: "Pozycjonowanie stron internetowych Łódź — agencja SEO FOTZ",
  description: "Skuteczne pozycjonowanie stron dla firm z Łodzi: agencja SEO FOTZ Studio pracuje zdalnie. Sprawdź zakres pozycjonowania, ofertę dla klienta i sposób wyceny.",
  lead: "Chcesz, aby klient z Łodzi szukający Twojej usługi lub produktu trafił na właściwą stronę i wiedział, jak zapytać o ofertę? Łączymy audyt, optymalizację, treści i pomiar zapytań. Plan SEO opieramy na istniejącej witrynie, sposobie sprzedaży i danych o wyszukiwaniu, a nie na gotowym pakiecie fraz.",
  hero: { image: "product", caption: "Fotografia produktowa z portfolio FOTZ — modułowe regały na tle studyjnym. Wyraźny kadr pomaga pokazać konstrukcję i warianty produktu." },
  scopeTitle: "Pozycjonowanie stron internetowych w Łodzi — usługi pozycjonowania",
  planningTitle: "Pozycjonowanie stron w Łodzi: jak zaczynamy współpracę?",
  scope: [
    { title: "Audyt ważnych adresów", text: "Sprawdzamy, które oferty są dostępne dla wyszukiwarki, jak działają przekierowania i czy podobne adresy nie powielają treści. Uwzględniamy usługi, kategorie i produkty, jeśli są częścią strony.", href: "/seo/audyt", link: "Poznaj audyt strony" },
    { title: "Struktura oferty", text: "Układamy usługi lub asortyment według potrzeb klienta. Dobieramy nazwy kategorii, połączenia między stronami i miejsce na pytania o zastosowanie, warianty oraz warunki zamówienia.", href: "/seo/pozycjonowanie", link: "Sprawdź zakres pozycjonowania" },
    { title: "Opisy i własne materiały", text: "Rozwijamy treści na podstawie informacji firmy: parametrów, przebiegu usługi, zdjęć i realizacji. Przy produktach wyjaśniamy różnice, które pomagają w wyborze, zamiast powielać ten sam opis.", href: "/content-marketing/strategia", link: "Zaplanuj treści i materiały" },
    { title: "Technika serwisu lub sklepu", text: "Porządkujemy nagłówki, linkowanie i wskazane problemy z ładowaniem. W katalogu lub sklepie sprawdzamy też warianty adresów, filtrowanie i dotarcie do najważniejszych kategorii.", href: "/seo/techniczne", link: "Zobacz techniczne SEO" },
    { title: "Lokalna obsługa klienta", text: "Jeśli firma ma punkt w Łodzi lub działa z dojazdem, opisujemy dostępność usługi i kontakt. Zakres Profilu Firmy w Google ustalamy po sprawdzeniu kwalifikowalności i faktycznych danych działalności.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj lokalne pozycjonowanie" },
    { title: "Pomiar odpowiedni do sprzedaży", text: "Dla usług oceniamy zapytania, dla katalogu — kontakty o produkt, a dla sklepu dostępne dane o zamówieniach. Wyświetlenia i kliknięcia w Search Console traktujemy jako osobne wskaźniki.", href: "/kontakt", link: "Omów sposób sprzedaży" },
  ],
  examplesTitle: "Usługi SEO dla firm z Łodzi: usługa, katalog czy sklep?",
  examplesIntro: "Poniższe przykłady pokazują różne potrzeby firm z Łodzi. Zakres wybieramy według modelu działalności; scenariusze nie są raportem wyników klientów.",
  examples: [
    { title: "Firma usługowa", text: "Rozwijamy opis problemu klienta, zakres prac, przebieg realizacji i dane do wyceny. Łączymy ofertę z realizacjami i pytaniami, które pojawiają się przed kontaktem.", measure: "zapytania o właściwe usługi oraz ich przydatność w dalszej rozmowie." },
    { title: "Producent z katalogiem", text: "Porządkujemy grupy produktów, parametry, zastosowania i materiały do pobrania. Formularz powinien pozwalać wskazać produkt lub wariant, aby zespół mógł przygotować konkretną odpowiedź.", measure: "zapytania o produkty i kompletność informacji potrzebnych do oferty." },
    { title: "Sklep z wieloma wariantami", text: "Sprawdzamy kategorie, podobne produkty, filtry i strony wariantów. Priorytety ustalamy według asortymentu, dostępności i możliwości przygotowania treści, a nie samej liczby adresów.", measure: "wejścia na ważne kategorie i zamówienia, jeśli analityka poprawnie je rejestruje." },
  ],
  content: [
    { title: "Na czym polega pozycjonowanie stron w Łodzi?", text: "Pozycjonowanie stron internetowych to praca nad treścią, strukturą i techniczną dostępnością witryny, aby wyszukiwarka mogła powiązać ofertę z pytaniem klienta. SEO to proces, a nie jednorazowa zmiana. Ustalamy, czego szukają potencjalni klienci, która podstrona ma im odpowiadać i co utrudnia kontakt. Dla firmy z Łodzi zaczynamy od istniejącej strony, danych z Search Console i celu sprzedażowego." },
    { title: "SEO w Łodzi: agencja SEO na miejscu czy współpraca zdalna?", text: "FOTZ Studio ma zespół w Poznaniu, a usługi SEO dla klientów z Łodzi prowadzi zdalnie. Nie przedstawiamy tej oferty jako biura w Łodzi. Agencja z innego miasta może sprawnie pracować nad stroną, jeśli ma dostęp do danych, kontakt z osobą znającą ofertę i jasny obieg akceptacji. Rozmowy online, wspólne dokumenty i raport po każdym etapie zastępują wizyty w biurze." },
    { title: "Jak wybrać agencję SEO w Łodzi?", text: "Dobra agencja SEO pokaże zakres prac, kolejność wdrożeń i sposób oceny efektów, zamiast obiecywać pozycje. Porównując oferty agencji SEO z Łodzi i innych agencji SEO w Polsce, sprawdź, kto odpowiada za zmiany na stronie, jakie dane trafią do raportu i czy działania SEO dotyczą usług, które chcesz sprzedawać. Zapytaj też, do kogo należą treści i dostępy po zakończeniu współpracy." },
    { title: "Łódzki rynek: usługi, produkcja i sklepy internetowe", text: "Miasto Łódź łączy tradycję przemysłu włókienniczego z firmami usługowymi, logistyką, branżą modową, centrami usług biznesowych i markami sprzedającymi online. Każdy z tych modeli wymaga innej strategii SEO. Lokalny gabinet czy warsztat potrzebuje widoczności w okolicy, producent — dobrze opisanego katalogu, a sklep — porządku w kategoriach i wariantach. Plan zaczynamy od modelu sprzedaży, nie od listy fraz." },
    { title: "Pozycjonowanie lokalne i wizytówki Google Moja Firma", text: "Lokalne SEO ma sens, gdy klient przychodzi do punktu lub oczekuje dojazdu, na przykład na Bałutach, Widzewie czy Polesiu. Dla kwalifikującej się firmy porządkujemy Profil Firmy w Google, znany wcześniej jako wizytówki Google Moja Firma: kategorię, godziny, zdjęcia i link do właściwej podstrony. Skuteczne pozycjonowanie lokalne nie polega na tworzeniu osobnej strony dla każdego osiedla. Wyniki w Mapach zależą też od odległości szukającego." },
    { title: "Słowa kluczowe i fraza dla oferty firmy", text: "Słowa kluczowe wybieramy na podstawie oferty, danych Search Console i analizy wyników wyszukiwania Google. Sprawdzamy, czy pod frazą dominują usługi, sklepy czy poradniki, i każdej z fraz kluczowych przypisujemy jedną stronę. Konkurencja jest punktem odniesienia, nie źródłem tekstów. Nazwę miasta dodajemy tam, gdzie oferta rzeczywiście dotyczy klientów z Łodzi, a nie do każdego zdania." },
    { title: "Audyt i optymalizacja strony — kluczowy pierwszy etap", text: "Audyt SEO pokazuje, które adresy są indeksowane, gdzie występują duplikaty, błędne przekierowania lub wolne ładowanie. Optymalizacja strony obejmuje nagłówki, metadane, linkowanie wewnętrzne i wersję mobilną. Ważny jest też formularz: jeśli nie działa na telefonie, ruch na stronie nie zamieni się w zapytanie. Raport dzieli poprawki na pilne, ważne i możliwe do zaplanowania później." },
    { title: "Pozycjonowanie stron i sklepów internetowych w Łodzi", text: "Pozycjonowanie sklepów internetowych wymaga pracy nad kategoriami, filtrami, wariantami i opisami produktów. W przypadku marki odzieżowej czy producenta tekstyliów liczą się materiały, rozmiary i zastosowania, a nie powielony opis dostawcy. Dla sklepu internetowego ustalamy, które kategorie są ważne dla sprzedaży i czy analityka poprawnie rejestruje zamówienia. Pozycjonowanie stron i sklepów internetowych planujemy razem, gdy firma sprzedaje w obu kanałach." },
    { title: "Strona internetowa, tworzenie stron i SEO", text: "Jeśli planujesz tworzenie stron internetowych lub zmianę szablonu, SEO warto uwzględnić przed publikacją. Zapisujemy ważne adresy, przygotowujemy mapę przekierowań i sprawdzamy witrynę po uruchomieniu. Przy tworzeniu stron możemy przygotować również zdjęcia lub film, bo produkcja to nasza codzienna praca. Strona internetowa powinna prowadzić do kontaktu równie sprawnie, jak dobrze wygląda." },
    { title: "SEO, Google Ads i marketing w mediach społecznościowych", text: "SEO rozwija obecność w bezpłatnych wynikach, a kampanie reklamowe w Google mają osobny budżet reklamowy. Kampania może szybciej sprawdzić, które usługi interesują odbiorców, ale nie kupuje pozycji organicznej. Marketing w mediach społecznościowych wspiera rozpoznawalność marki, jednak nie zastąpi czytelnej oferty na stronie. W raporcie rozdzielamy kanały, aby ocenić, skąd przychodzą wartościowe kontakty." },
    { title: "Cena pozycjonowania stron w Łodzi — od czego zależy?", text: "Cena pozycjonowania zależy od wielkości serwisu, stanu technicznego, liczby usług lub kategorii, potrzebnych treści i sposobu pomiaru. Nie podajemy stałego pakietu bez sprawdzenia strony. Wycena rozdziela audyt, wdrożenia, teksty i raportowanie oraz wskazuje, kto wprowadza zmiany w CMS. Taki podział pozwala porównać cenę pozycjonowania stron z zakresem prac innych wykonawców." },
    { title: "Skuteczne pozycjonowanie: konwersja, nie sam ruch", text: "Skuteczne pozycjonowanie oceniamy po tym, czy widoczność przekłada się na kontakty, a nie tylko po pozycjach w wynikach wyszukiwania. Konwersja może oznaczać telefon, formularz, zapytanie o produkt lub zamówienie. Mierzymy ją osobno od wyświetleń i kliknięć. Gdy wejść przybywa bez zapytań, sprawdzamy dopasowanie treści i drogę do kontaktu, zanim zaproponujemy kolejne teksty." },
    { title: "Pozycjonowanie w Google dla firmy, która świadczy usługi w całej Polsce", text: "Część firm z Łodzi świadczy usługi w całym kraju, korzystając z centralnego położenia miasta. Wtedy pozycjonowanie w Google nie powinno ograniczać się do lokalnych zapytań. Rozwijamy strony specjalizacji, branż i zastosowań, a lokalne pozycjonowanie zostawiamy tam, gdzie klient faktycznie przychodzi na miejsce. Taki podział porządkuje widoczność firmy w internecie i ogranicza dublowanie treści." },
    { title: "Pozycjonowanie Twojej strony: jakie dane przygotować?", text: "Do pierwszej rozmowy wystarczy adres witryny, lista priorytetowych usług, obszar obsługi i cel biznesowy. Dostęp do Search Console lub analityki ustalamy później — nie przesyłaj haseł w formularzu. Przyda się lista pytań, które klienci zadają przed zakupem. Dzięki temu pozycjonowanie swojej strony zaczniemy od zmian, które realnie pomagają Twojej firmie pozyskiwać zapytania." },
  ],
  planning: [
    { title: "Wybór części oferty", text: "Zbieramy adres strony, listę usług lub grup produktów, obszar sprzedaży i dostępne materiały. Wspólnie wybieramy zakres, który można opracować i utrzymywać. Przy rozbudowanym katalogu ustalamy kolejność kategorii i źródło danych produktowych." },
    { title: "Wycena analizy i wdrożenia", text: "Koszt zależy od wielkości serwisu, stanu technicznego, liczby opracowywanych ofert i jakości materiałów. Audyt, poprawki, teksty i zdjęcia opisujemy jako konkretne zadania. Uzgadniamy koszty dodatkowe i osobę odpowiedzialną za zmiany w systemie." },
    { title: "Odbiór i aktualność danych", text: "Po wdrożeniu sprawdzamy treści, linki i ścieżkę do kontaktu lub zakupu. Raportujemy wykonane prace i dostępne wyniki. Firma wskazuje zmiany asortymentu, parametrów i oferty, aby informacje na stronie pozostawały aktualne." },
  ],
  related: {
    title: "Działasz także poza Łodzią?",
    text: "Jeśli obsługujesz klientów w stolicy, zobacz zakres pracy dla Warszawy. Dla Dolnego Śląska przygotowaliśmy ofertę wrocławską, a w Poznaniu pracuje nasz zespół. Przy kilku obszarach sprzedaży ustalamy wspólny plan, zamiast powielać te same treści.",
    links: [
      { href: "/seo/pozycjonowanie-warszawa", label: "Pozycjonowanie Warszawa" },
      { href: "/seo/pozycjonowanie-wroclaw", label: "Pozycjonowanie Wrocław" },
      { href: "/seo/pozycjonowanie-poznan", label: "Pozycjonowanie Poznań" },
    ],
  },
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Łodzi?", answer: "Koszt ustalamy po poznaniu witryny i zakresu oferty. Znaczenie mają potrzebne poprawki, liczba usług lub kategorii, materiały oraz sposób pomiaru. Wycenę rozpisujemy na zadania, terminy i odpowiedzialność za wdrożenie, z informacją o kosztach dodatkowych." },
    { question: "Czy FOTZ ma siedzibę w Łodzi?", answer: "FOTZ Studio działa z Poznania. Firmy z Łodzi obsługujemy zdalnie, ustalając osobę kontaktową, sposób przekazania materiałów i akceptację zmian. Dostęp do systemu oraz harmonogram prac uzgadniamy po określeniu zakresu." },
    { question: "Ile trwa pozycjonowanie i kiedy widać efekty?", answer: "To zależy od stanu strony, konkurencji, zakresu zmian i czasu, jakiego Google potrzebuje na ich przetworzenie. Ustalamy harmonogram wdrożeń oraz termin pierwszego przeglądu danych. Pozycje, kliknięcia i zapytania obserwujemy osobno, z uwzględnieniem sezonowości." },
    { question: "Czy można samemu zrobić SEO?", answer: "Część prac, np. aktualizację opisów czy Profilu Firmy w Google, firma może wykonać sama. Bezpłatna Google Search Console pokazuje wyświetlenia, kliknięcia i błędy indeksowania. Żaden program nie zastąpi jednak decyzji, którą stronę rozwijać i jak połączyć ofertę z pytaniem klienta. Możemy przygotować plan, który wdrożysz samodzielnie." },
    { question: "Czy SEO dla sklepu różni się od pozycjonowania usług?", answer: "Tak. W sklepie trzeba uwzględnić m.in. kategorie, produkty, warianty, filtrowanie i pomiar zamówień. Dla usług kluczowe są opisy zakresu, realizacje, pytania klientów i droga do zapytania. Plan dopasowujemy do rzeczywistego serwisu." },
    { question: "Czy każda odmiana produktu potrzebuje osobnej strony?", answer: "To zależy od różnic między produktami, pytań klientów i możliwości systemu. Nie każdy filtr lub wariant musi być osobnym adresem do indeksowania. Decyzję poprzedzamy analizą treści i struktury, aby nie powielać stron bez potrzebnych informacji." },
    { question: "Jak oceniacie efekty i czy gwarantujecie wzrost sprzedaży?", answer: "Porównujemy widoczność i kliknięcia z dostępnymi danymi o kontaktach lub zamówieniach. Sposób pomiaru i termin przeglądu ustalamy na początku. Nie gwarantujemy pozycji ani wzrostu sprzedaży; na wynik wpływają także oferta, dostępność, obsługa klienta i konkurencja." },
  ],
};

export default function SEOPozycjonowanieLodz() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
