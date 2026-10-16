import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/pozycjonowanie/sosnowiec",
  city: "Sosnowiec",
  headingPrefix: "Pozycjonowanie stron",
  headingSuffix: " — lokalne SEO dla firm z Sosnowca",
  cityGenitive: "Sosnowca",
  title: "Pozycjonowanie stron Sosnowiec — agencja SEO | FOTZ Studio",
  description: "Pozycjonowanie Sosnowiec: agencja SEO FOTZ Studio pomaga w pozycjonowaniu stron firm z Zagłębia. Audyt, wizytówka i widoczność w wyszukiwarce Google, aby klient trafił do Ciebie.",
  lead: "Prowadzisz biznes w Sosnowcu i chcesz, żeby klient z miasta i okolic znalazł Twoją ofertę w Google? Porządkujemy stronę, treści i wizytówkę tak, aby osoba szukająca usługi szybko zrozumiała, co oferujesz, gdzie działasz i jak się skontaktować.",
  hero: { image: "fps", caption: "H. Cegielski – FPS — realizacja FOTZ dla firmy przemysłowej. Rzeczywiste zdjęcia zakładu i ludzi pomagają pokazać ofertę B2B bez stockowych obrazów." },
  scopeTitle: "Pozycjonowanie Sosnowiec — co obejmuje usługa?",
  planningTitle: "Pozycjonowanie w Sosnowcu: wycena i start współpracy",
  scope: [
    { title: "Audyt SEO witryny", text: "Sprawdzamy indeksowanie w Search Console, przekierowania, duplikaty i szybkość ważnych podstron, a także drogę od opisu usługi do formularza na telefonie.", href: "/seo/audyt", link: "Zobacz zakres audytu" },
    { title: "Frazy przypisane do ofert", text: "Każdej grupie zapytań przypisujemy jedną stronę: usługę, kategorię sklepu albo poradnik, aby podstrony nie konkurowały ze sobą.", href: "/seo/pozycjonowanie", link: "Poznaj usługę pozycjonowania" },
    { title: "Treści odpowiadające na pytania", text: "Opisujemy zakres prac, obszar dojazdu, terminy i dane potrzebne do wyceny. Wykorzystujemy Twoje zdjęcia i realizacje zamiast ogólników.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Profil Firmy i mapa", text: "Sprawdzamy kategorię, obszar obsługi, godziny i zdjęcia w Profilu Firmy w Google, a dane uzgadniamy ze stroną.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz pozycjonowanie lokalne" },
    { title: "Technika i struktura serwisu", text: "Porządkujemy menu, linkowanie wewnętrzne, metadane i mapę witryny. Przy przebudowie planujemy przekierowania ważnych adresów.", href: "/seo/techniczne", link: "Poznaj SEO techniczne" },
    { title: "Pomiar kontaktów", text: "Ustalamy, co liczymy jako zapytanie: telefon, formularz czy wiadomość, i odróżniamy kliknięcie od rozmowy o zleceniu.", href: "/kontakt", link: "Omów cele z nami" },
  ],
  examplesTitle: "Pozycjonowanie stron internetowych Sosnowiec: trzy sytuacje klienta",
  examplesIntro: "Inny plan przygotujemy dla warsztatu z Zagórza, inny dla hurtowni z całego Zagłębia, a jeszcze inny dla sklepu wysyłającego w Polsce. To przykłady do rozmowy o zakresie, nie wyniki naszych klientów.",
  examples: [
    { title: "Usługa z dojazdem", text: "Firma remontowa czy serwis klimatyzacji często pracuje w Sosnowcu, Będzinie i Dąbrowie Górniczej. Opisujemy realny obszar dojazdu zamiast kopiować stronę dla każdego miasta.", measure: "telefony i formularze z lokalizacją zlecenia." },
    { title: "Punkt stacjonarny", text: "Gabinet, salon lub sklep potrzebuje aktualnych godzin, dojazdu i zdjęć wnętrza. Łączymy stronę z wizytówką, aby informacje były spójne.", measure: "kliknięcia w trasę i telefon oraz zapytania ze strony." },
    { title: "Firma B2B z regionu", text: "Dostawca dla przemysłu lub logistyki sprzedaje w całym regionie. Rozwijamy opisy specjalizacji i procesu współpracy, a nazwę miasta zostawiamy tam, gdzie ma znaczenie.", measure: "jakość zapytań ofertowych dla wybranych usług." },
  ],
  content: [
    { title: "Pozycjonowanie stron Sosnowiec — od czego zależy widoczność?", text: "W pozycjonowaniu zaczynamy od pytania, kogo chcesz pozyskać. Mieszkaniec Pogoni szuka usługi blisko domu, kierownik zakupów z Katowic szuka dostawcy, a klient sklepu porównuje produkty z całego kraju. Każdy wpisuje inną frazę i oczekuje innej odpowiedzi. Dlatego najpierw ustalamy, która usługa jest najważniejsza dla Twojego biznesu i ile zleceń możesz przyjąć. Dopiero potem dobieramy słowa kluczowe i strony. Pozycjonowanie stron www ma sens wtedy, gdy fraza prowadzi do oferty, którą naprawdę sprzedajesz." },
    { title: "Sosnowiec to miasto Zagłębia — lokalne SEO dla Sosnowca i okolic", text: "Sosnowiec to miasto, które z Katowicami, Będzinem, Czeladzią i Dąbrową Górniczą tworzy jeden gęsty obszar. Klienci przejeżdżają między miastami do pracy i na zakupy, więc granica administracyjna nie zawsze wyznacza rynek. Lokalne SEO wymaga więc decyzji: Sosnowiec, kilka sąsiednich miast czy usługa bez nazwy miejscowości. Odpowiedź zależy od tego, gdzie naprawdę pracujesz. Jeśli obsługujesz klientów z Sosnowca i okolic, piszemy to wprost, zamiast dopisywać nazwy miast tylko dla wyszukiwarki." },
    { title: "Pozycjonowanie lokalne w Sosnowcu: wizytówka Google i mapa", text: "Lokalne pozycjonowanie stron w Sosnowcu obejmuje stronę oraz Profil Firmy w Google, znany wcześniej jako Google Moja Firma. Wizytówka Google pokazuje się na mapie i w lokalnych wynikach wyszukiwania, a jej pozycja zależy m.in. od trafności, odległości od użytkownika i rozpoznawalności firmy. Dbamy o kategorię, opis, godziny, zdjęcia i odpowiedzi na opinie. Profil powinien prowadzić do strony z konkretną ofertą. Wyniki na mapie oceniamy osobno, bo od Zagórza po Klimontów mogą wyglądać inaczej." },
    { title: "Audyt i optymalizacja: miejsce strony w wynikach wyszukiwania", text: "Audyt SEO pokazuje, co blokuje widoczność strony w wynikach wyszukiwania. Sprawdzamy, czy Google indeksuje ważne podstrony, czy adresy nie dublują treści i czy witryna szybko działa na telefonie. Analizujemy tytuły, nagłówki, linkowanie i dane z Search Console. Optymalizacja obejmuje też formularz i przyciski kontaktu: wolna strona albo ukryty numer telefonu tracą klienta niezależnie od pozycji. Raport dzieli zalecenia na pilne, ważne i do rozważenia, z informacją, kto je wdraża." },
    { title: "Fraza, konkurencja i frazy lokalne w wyszukiwarce Google", text: "Frazy lokalne, czyli usługa z nazwą miasta, to tylko część zapytań. Wiele osób wpisuje samą usługę, a wyszukiwarka uwzględnia ich lokalizację. Analizujemy oba typy wyników wyszukiwania Google i sprawdzamy, co pokazuje konkurencja: oferty, katalogi czy poradniki. Nie kopiujemy cudzych tekstów. Konkurencja pomaga ocenić, czego oczekuje klient, a my dodajemy to, co wyróżnia Twoją firmę. Każda fraza kluczowa dostaje jedną stronę docelową. Dobór fraz kluczowych opieramy na danych, nie na intuicji." },
    { title: "Skuteczne pozycjonowanie stron: potencjalni klienci i zapytania", text: "Skuteczne pozycjonowanie stron internetowych wymaga czytelnej oferty. Potencjalni klienci chcą wiedzieć, co robisz, gdzie, w jakim terminie i jak poprosić o wycenę. Pomagamy przygotować strony usług z etapami pracy i odpowiedziami na częste pytania. Gdy usług jest wiele, zaczynamy od tych o najwyższej marży lub popycie. Przy pozycjonowaniu wolimy kilka dobrych stron niż dziesiątki podobnych tekstów. Dobrze opisana oferta pomaga pozyskać nowych klientów, którzy porównują kilka firm." },
    { title: "Sklep internetowy — pozycjonowanie strony i kategorii", text: "Sklep internetowy potrzebuje innego podejścia niż strona usługowa. Liczą się kategorie, opisy produktów, filtry i struktura adresów. Sprawdzamy, czy filtry nie tworzą tysięcy podobnych adresów. Jeśli sklep z Sosnowca sprzedaje w całej Polsce, nazwa miasta ma mniejsze znaczenie niż frazy produktowe; odbiór osobisty w Zagłębiu może być dodatkiem. Pozycjonowanie strony sklepu łączymy z analizą zamówień, o ile platforma pozwala na wiarygodny pomiar. Zmiany szablonu wyceniamy osobno." },
    { title: "Proces pozycjonowania lokalnego krok po kroku", text: "Proces pozycjonowania stron dzielimy na etapy z jasnym odbiorem. Najpierw diagnoza: audyt, analiza fraz i cele. Potem poprawki techniczne i struktura. Następnie treści dla priorytetowych usług i profil w Mapach. Po publikacji kontrolujemy indeksowanie, linki i formularze. Wdrożenie może prowadzić Twój zespół, programista lub my. Harmonogram prac odróżniamy od czasu, którego Google potrzebuje na przetworzenie zmian, dlatego w pozycjonowaniu nie obiecujemy dat." },
    { title: "Ile kosztuje pozycjonowanie stron w Sosnowcu?", text: "Koszt zależy od rozmiaru strony, jej stanu technicznego, liczby usług, konkurencji i tego, kto przygotowuje treści. Jednorazowy audyt to inny zakres niż stała praca nad treściami i profilem w Mapach. Wycena powstaje po obejrzeniu witryny i rozmowie o celach. Rozpisujemy zadania, terminy, odpowiedzialność i koszty dodatkowe, np. zdjęcia czy prace programistyczne. Nie podajemy stałej ceny bez znajomości strony. Zbyt tanie pozycjonowanie często oznacza raport bez wdrożeń." },
    { title: "Agencja SEO Sosnowiec — czy musi mieć tu biuro?", text: "FOTZ Studio to agencja z zespołem w Poznaniu. Firmy z Sosnowca obsługujemy zdalnie i nie przedstawiamy tej oferty jako biura w Sosnowcu. Współpraca opiera się na wideorozmowach, wspólnej liście zadań i dostępie do Search Console. Adres agencji nie wpływa na pozycje Twojej strony; znaczenie mają treści, struktura i profil firmy. Od Ciebie potrzebujemy wiedzy o klientach i ofercie. Wybierając agencję SEO, sprawdź, czy dostaniesz konkretną listę prac i dostęp do danych." },
    { title: "Lokalne firmy i SEO w Sosnowcu: strategie dla biznesu", text: "Lokalne firmy z miasta Sosnowiec to często rzemiosło, handel, usługi medyczne, transport i firmy obsługujące przemysł. Strategie SEO różnią się między nimi: gabinet potrzebuje widoczności w okolicy, a firma logistyczna opisów usług dla całego regionu. Pomagamy wybrać kierunek, który odpowiada sposobowi sprzedaży. W pozycjonowaniu lokalnym liczy się spójność: te same dane firmy na stronie, w profilu i katalogach. Działania z zakresu SEO planujemy tak, aby Twój zespół mógł je później utrzymać." },
    { title: "Pozycjonowanie a Google Ads i marketing", text: "Pozycjonowanie rozwija obecność w organicznych wynikach wyszukiwania. Google Ads to płatna reklama z osobnym budżetem, która działa od razu, ale znika po wyłączeniu kampanii. Reklama pomaga sprawdzić, które frazy dają zapytania, a SEO buduje stałą obecność. Reklama nie podnosi pozycji w wynikach organicznych. W raportach rozdzielamy kanały, żeby było widać, skąd przychodzi klient. Marketing obejmuje też social media czy wideo, ale ich wpływ oceniamy osobno." },
    { title: "Efekty pozycjonowania stron internetowych i raport", text: "Efekty pozycjonowania obserwujemy w kilku warstwach: indeksowanie, wyświetlenia, kliknięcia, ruch na stronie i kontakty. Wzrost wyświetleń bez kontaktów oznacza, że trzeba poprawić ofertę lub formularz. Raport opisuje, co zrobiliśmy, co się zmieniło i jaki jest następny krok. Konwersja, czyli kontakt lub zakup, jest ważniejsza niż sama pozycja frazy. Nie gwarantujemy miejsca wysoko w wynikach wyszukiwania; zobowiązujemy się do uzgodnionych prac i terminów." },
    { title: "Strona www Sosnowiec — SEO przy przebudowie", text: "Przebudowa to moment, w którym łatwo stracić widoczność. Przed migracją zapisujemy listę adresów, treści i dane z Search Console, a po publikacji sprawdzamy mapę przekierowań. Jeśli tworzysz nową stronę, od początku planujemy strukturę usług i adresów. FOTZ Studio projektuje też strony, więc możemy połączyć projekt i SEO. Strona internetowa nowej firmy też może być pozycjonowana, ale Google potrzebuje czasu, by ją poznać. Na rozmowę przygotuj adres witryny i opis najważniejszych usług." },
  ],
  planning: [
    { title: "Rozmowa i diagnoza", text: "Poznajemy ofertę, obszar obsługi i cel firmy. Przeglądamy stronę, profil w Mapach i dostępne dane, aby wskazać najważniejsze problemy." },
    { title: "Wycena i zakres prac", text: "Przygotowujemy propozycję z listą zadań, terminami i podziałem odpowiedzialności. Osobno opisujemy koszty dodatkowe." },
    { title: "Realizacja i przegląd danych", text: "Wprowadzamy uzgodnione poprawki i kontrolujemy je po publikacji. W ustalonym terminie porównujemy dane z punktem wyjścia." },
  ],
  related: {
    title: "Działasz poza Sosnowcem? Lokalna widoczność w innych miastach",
    text: "Jeśli Twoja firma obsługuje klientów w całej metropolii, zobacz oferty dla Katowic, Gliwic i Zabrza. Przy kilku miastach przygotowujemy wspólny plan, zamiast powielać te same treści na wielu podstronach.",
    links: [
      { href: "/seo/pozycjonowanie-katowice", label: "Pozycjonowanie Katowice" },
      { href: "/pozycjonowanie/gliwice", label: "Pozycjonowanie Gliwice" },
      { href: "/pozycjonowanie/zabrze", label: "Pozycjonowanie Zabrze" },
    ],
  },
  faqs: [
    { question: "Czy pozycjonowanie w Sosnowcu się opłaca?", answer: "Zależy to od popytu na Twoje usługi, konkurencji, marży i możliwości obsługi zapytań. Dla wielu lokalnych firm rozsądnym startem jest poprawa najważniejszej strony usługi i wizytówki. Przed stałą współpracą porównujemy zakres prac z celem biznesowym. Nie deklarujemy zwrotu z inwestycji bez danych o zapytaniach i sprzedaży." },
    { question: "Ile trwa, zanim widać efekty pozycjonowania?", answer: "Termin zależy od stanu strony, konkurencji, zakresu prac i tego, jak szybko Google przetworzy zmiany. Poprawki techniczne mogą zostać zauważone szybciej niż rozbudowa treści. Ustalamy harmonogram wdrożeń i termin przeglądu danych, ale nie obiecujemy konkretnej daty ani pozycji." },
    { question: "Czy gwarantujecie pierwsze miejsce w Google?", answer: "Nie. Nikt nie kontroluje algorytmu Google, więc gwarancja konkretnej pozycji byłaby nieuczciwa. Zobowiązujemy się do uzgodnionych prac, terminów wdrożeń i przejrzystego raportu." },
    { question: "Czy macie biuro w Sosnowcu?", answer: "Nie. FOTZ Studio ma zespół w Poznaniu, a firmy z Sosnowca obsługujemy zdalnie. Adres agencji nie ma wpływu na widoczność Twojej strony." },
    { question: "Czy mogę pozycjonować stronę samodzielnie?", answer: "Tak, wiele podstawowych działań, jak uzupełnienie wizytówki czy opisanie usług, możesz wykonać sam. Agencja przydaje się, gdy problemy dotyczą techniki, struktury serwisu lub gdy brakuje czasu na regularną pracę." },
    { question: "Czy pozycjonowanie jest legalne i bezpieczne?", answer: "Tak, o ile działania są zgodne z wytycznymi Google: poprawiają stronę i treści, a nie próbują manipulować wynikami. Nie kupujemy masowych linków ani nie publikujemy automatycznie generowanych tekstów." },
    { question: "Czy da się pozycjonować stronę na całą Polskę, nie tylko Sosnowiec?", answer: "Tak. Jeśli sprzedajesz w całym kraju, skupiamy się na frazach produktowych i usługowych bez nazwy miasta. Pozycjonowanie lokalne i ogólnopolskie można łączyć, gdy firma ma oba typy klientów." },
  ],
};

export default function PozycjonowanieSosnowiec() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
