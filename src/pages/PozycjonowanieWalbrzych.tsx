import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/pozycjonowanie/walbrzych",
  city: "Wałbrzych",
  headingPrefix: "Pozycjonowanie stron i audyt SEO",
  headingSuffix: " — agencja SEO, pozycjonowanie lokalne i reklama dla firm",
  cityGenitive: "Wałbrzycha",
  title: "Pozycjonowanie Wałbrzych — SEO, audyt i reklama Google | FOTZ",
  description: "Pozycjonowanie Wałbrzych: agencja SEO FOTZ dla firm z Wałbrzycha i okolic. Audyt SEO, optymalizacja, wizytówka i widoczność w Google oraz AI. Kompleksowy plan i wycena.",
  lead: "Chcesz, żeby klienci z Wałbrzycha i okolic łatwiej znajdowali Twoją firmę w Google? Łączymy audyt SEO, poprawki techniczne i czytelną ofertę z drogą do kontaktu. Pracujemy zdalnie z Poznania i zaczynamy od usług, które realnie chcesz sprzedawać.",
  hero: { image: "fps", caption: "FPS Cegielski — realizacja FOTZ: strona i materiały wizualne dla firmy przemysłowej. Rzetelne zdjęcia pomagają pokazać zakład i ofertę jeszcze przed rozmową." },
  scopeTitle: "SEO Wałbrzych — co obejmuje pozycjonowanie?",
  planningTitle: "Pozycjonowanie w Wałbrzychu: jak zaczynamy?",
  scope: [
    { title: "Audyt SEO strony", text: "Sprawdzamy indeksowanie, przekierowania, czas ładowania i dane z Search Console. Oceniamy też, czy na telefonie da się szybko poznać ofertę i wysłać zapytanie.", href: "/seo/audyt", link: "Sprawdź zakres audytu" },
    { title: "Frazy przypisane do usług", text: "Każda fraza dostaje jedną stronę docelową: usługę, kategorię albo poradnik. Dzięki temu podstrony nie konkurują ze sobą o tę samą potrzebę klienta.", href: "/seo/pozycjonowanie", link: "Zobacz usługę pozycjonowania" },
    { title: "Treści i materiały oferty", text: "Pomagamy opisać zakres usługi, warunki realizacji i odpowiedzi na pytania przed zakupem. Wykorzystujemy prawdziwe zdjęcia i realizacje firmy.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Profil Firmy w Google", text: "Dla firm, które mogą go prowadzić, porządkujemy kategorię, obszar obsługi, godziny i zdjęcia. Wizytówka i strona przekazują te same informacje.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz lokalne SEO" },
    { title: "SEO techniczne", text: "Poprawiamy strukturę adresów, linkowanie wewnętrzne, metadane i wskazane problemy z wydajnością. Przy przebudowie strony planujemy mapę przekierowań.", href: "/seo/techniczne", link: "Poznaj prace techniczne" },
    { title: "Pomiar zapytań", text: "Ustalamy, co da się wiarygodnie mierzyć: formularz, kliknięcie telefonu, zapytanie ofertowe. Kliknięcie przycisku nie jest tym samym co przyjęte zlecenie.", href: "/kontakt", link: "Omów ścieżkę klienta" },
  ],
  examplesTitle: "Pozycjonowanie stron Wałbrzych: przykładowe scenariusze.",
  examplesIntro: "Inaczej planujemy stronę warsztatu z Podzamcza, inaczej ofertę noclegów przy turystycznym szlaku, a jeszcze inaczej firmę produkcyjną sprzedającą w całym kraju. To scenariusze do rozmowy o zakresie, nie wyniki klientów.",
  examples: [
    { title: "Usługi dla mieszkańców", text: "Hydraulik, gabinet czy serwis pracujący w Wałbrzychu i pobliskich gminach potrzebuje jasnego obszaru obsługi, telefonu widocznego na komórce i aktualnej wizytówki. Nie tworzymy osobnej podstrony dla każdego osiedla bez realnej różnicy w ofercie.", measure: "telefony i formularze z Google oraz z Profilu Firmy, jeśli da się je rozróżnić." },
    { title: "Turystyka i noclegi", text: "Okolice Zamku Książ, Starej Kopalni i Gór Wałbrzyskich przyciągają osoby planujące przyjazd. Taka oferta potrzebuje informacji o dojeździe, terminach, warunkach rezerwacji i zdjęć miejsca.", measure: "zapytania o termin oraz przejścia do systemu rezerwacji, z uwzględnieniem sezonu." },
    { title: "Firma B2B z regionu", text: "Zakład produkcyjny lub dostawca dla przemysłu sprzedaje poza miastem. Rozwijamy opisy produktów, technologii i zastosowań, a nazwa miasta pozostaje informacją o lokalizacji, nie główną frazą.", measure: "jakość zapytań ofertowych dla wybranych grup produktów." },
  ],
  content: [
    { title: "Pozycjonowanie stron w Wałbrzychu: od czego zacząć?", text: "Zaczynamy od pytania, jakie zlecenia firma chce pozyskiwać. Dla warsztatu celem jest telefon, dla pensjonatu rezerwacja, a dla producenta zapytanie ofertowe. Dopiero potem dobieramy słowa kluczowe, sprawdzamy konkurencję w wynikach wyszukiwania i przygotowujemy plan działań. Rynek w mieście Wałbrzych jest mniejszy niż we Wrocławiu, ale klienci wyszukują podobnie: konkretnej usługi, w pobliżu, z jasnym kontaktem." },
    { title: "Pozycjonowanie lokalne i SEO lokalne dla firm z Wałbrzycha", text: "Pozycjonowanie lokalne łączy stronę internetową z Profilem Firmy w Google. Wizytówka Google pokazuje się w Mapach Google (Google Maps), dlatego obszar obsługi, godziny i kategoria muszą być aktualne. Firma ze Śródmieścia, Piaskowej Góry czy Szczawienka konkuruje inaczej niż przedsiębiorstwo obsługujące Świebodzice, Szczawno-Zdrój i Boguszów-Gorce. Lokalne SEO odzwierciedla realny zasięg działalności, a nie listę wpisanych miejscowości. Lokalne firmy zyskują, gdy dane w wizytówce i na stronie są spójne." },
    { title: "Audyt SEO Wałbrzych — czym jest audyt SEO?", text: "To szczegółowa analiza strony pod kątem widoczności w Google. Sprawdzamy indeksowanie, duplikaty, meta tytuły, szybkość ładowania i działanie formularzy. Raport porządkuje problemy według wpływu na sprzedaż: co naprawić od razu, co rozwinąć później i kto odpowiada za wdrożenia. Metoda jest taka sama jak w dużym mieście, ale rekomendacja uwzględnia lokalny popyt i możliwości Twojej firmy." },
    { title: "Optymalizacja strony i strategie treści", text: "Optymalizacja obejmuje tytuły, nagłówki, opisy usług i linkowanie wewnętrzne. Każda ważna fraza otrzymuje stronę, która na nią odpowiada. Dostosowanie strony do potrzeb klienta oznacza opis zakresu pracy, przebiegu realizacji i danych potrzebnych do wyceny. Naturalny język pomaga wyszukiwarce i osobie porównującej oferty. Elementy strategii SEO ustalamy tak, by odpowiadały potrzebom Twojej firmy." },
    { title: "SEO i AI: jak dziś wyszukują klienci", text: "Klienci szukają w Google, w Mapach, a coraz częściej także w asystentach AI, które streszczają odpowiedzi. Widoczność w Google i AI wspiera spójny opis firmy, jasna oferta i aktualne dane kontaktowe. Nie obiecujemy obecności w odpowiedziach narzędzi AI, bo nie kontrolujemy ich działania. Możemy natomiast zadbać, by strona jasno odpowiadała na pytania o usługę, obszar i warunki." },
    { title: "Agencja reklamowa Wałbrzych czy agencja SEO? Google Ads, social media i marketing", text: "Agencja reklamowa często łączy Google Ads i social media, a kampanie reklamowe w Google Ads z reklamą na Facebooku i Instagramie. Skuteczne kampanie wymagają jednak strony, na której klient znajdzie odpowiedź. Agencja SEO rozwija ruch organiczny, czyli bezpłatne wyniki. W FOTZ Studio prowadzimy marketing w obu kierunkach — także Google Ads i Meta Ads — ale rozdzielamy budżety i raporty. Reklama nie kupuje wyższej pozycji organicznej." },
    { title: "Pozycjonowanie sklepów internetowych z regionu", text: "Sklep z Wałbrzycha zwykle sprzedaje w całej Polsce, więc ważniejsze są kategorie, opisy produktów i filtry niż nazwa miasta. Sprawdzamy, czy adresy z filtrów nie tworzą duplikatów i czy klient przejdzie od kategorii do koszyka na telefonie. Pozycjonowanie sklepów internetowych planujemy wokół kategorii, które mają marżę." },
    { title: "Ruch organiczny i raport: widoczność Twojej firmy w Google", text: "Raport pokazuje wykonane prace, wyświetlenia i kliknięcia z Search Console oraz dostępne dane o zapytaniach. Rozdzielamy ruch z marki od wyszukiwań usługi i ruch płatny od bezpłatnego. Nie oceniamy pracy po samych pozycjach w wynikach wyszukiwania, bo zależą one od lokalizacji użytkownika i urządzenia. Liczy się to, czy widoczność Twojej firmy w Google zamienia się w kontakt." },
    { title: "Ile kosztuje pozycjonowanie i czy się opłaca?", text: "Koszt zależy od rozmiaru strony, stanu technicznego, liczby usług i potrzebnych materiałów. Wycenę przygotowujemy po diagnozie: osobno analiza, wdrożenia, treści i pomiar. Małej firmie często wystarcza dopracowanie kilku stron oferty i wizytówki, a nie kompleksowy pakiet. Czy to się opłaca, zależy od marży, popytu i możliwości obsługi nowych zleceń. Współpraca ma charakter zdalny." },
    { title: "Zdobywaj klientów z wyszukiwarki — najczęstsze pytania o pozycjonowanie", text: "Firmy działające na lokalnym rynku najczęściej pytają o czas, koszt i gwarancję. Czas zależy od konkurencji i zakresu zmian; wdrożenia planujemy w harmonogramie, ale reakcji Google nie przyspieszymy. Gwarancji konkretnej pozycji nie dajemy. Zwiększ widoczność krok po kroku: najpierw usuń przeszkody techniczne, potem rozwijaj treści, które odpowiadają na realne potrzeby. Skuteczne pozycjonowanie to praca systematyczna." },
  ],
  planning: [
    { title: "Rozmowa o celu i ofercie", text: "Ustalamy priorytetową usługę, obszar obsługi i sposób przyjmowania zapytań. Przeglądamy stronę, wizytówkę i dostępne dane, żeby zaproponować pierwszy zakres prac." },
    { title: "Zakres i wycena przed startem", text: "Rozpisujemy zadania, terminy odbioru, koszty dodatkowe i odpowiedzialność za wdrożenia. Współpracujemy zdalnie, z jednym kanałem kontaktu i jasnym obiegiem akceptacji." },
    { title: "Wdrożenia i przegląd danych", text: "Po zmianach sprawdzamy adresy, formularze i linki na telefonie. W ustalonym terminie porównujemy widoczność, kliknięcia i zapytania, a następny krok wybieramy na podstawie danych." },
  ],
  related: {
    title: "Działasz także w innych miastach Dolnego Śląska?",
    text: "Jeśli obsługujesz klientów we Wrocławiu lub w Legnicy, zobacz zakres pracy dla tych miast. Przy kilku obszarach ustalamy wspólny plan, zamiast powielać te same treści.",
    links: [
      { href: "/seo/pozycjonowanie-wroclaw", label: "Pozycjonowanie Wrocław" },
      { href: "/pozycjonowanie/legnica", label: "Pozycjonowanie Legnica" },
      { href: "/pozycjonowanie/zgorzelec", label: "Pozycjonowanie Zgorzelec" },
    ],
  },
  faqs: [
    { question: "Na czym polega pozycjonowanie stron?", answer: "To praca nad treścią, strukturą i techniczną dostępnością witryny, aby Google mógł powiązać ofertę z pytaniem klienta. Zaczynamy od audytu, potem wdrażamy poprawki i rozwijamy strony usług." },
    { question: "Na czym polega pozycjonowanie lokalne w Wałbrzychu?", answer: "Łączy stronę z Profilem Firmy w Google i spójnymi danymi o adresie lub obszarze obsługi. Wynik w Mapach zależy też od odległości użytkownika, więc nie obiecujemy jednakowej pozycji w każdej dzielnicy." },
    { question: "Ile kosztuje pozycjonowanie w Wałbrzychu?", answer: "Nie podajemy stałego cennika bez poznania strony. Wycena zależy od zakresu: jednorazowy audyt, naprawy techniczne albo stała praca nad treściami. W propozycji rozpisujemy zadania i ewentualne koszty dodatkowe." },
    { question: "Ile trwa pozycjonowanie i kiedy widać efekty?", answer: "Termin zależy od stanu strony, konkurencji i tempa wdrożeń. Ustalamy harmonogram prac oraz datę przeglądu danych, ale nie gwarantujemy TOP 10 ani liczby zapytań." },
    { question: "Czy macie biuro w Wałbrzychu?", answer: "Nie. FOTZ Studio ma zespół w Poznaniu, a firmy z Wałbrzycha obsługujemy zdalnie. Nie przedstawiamy tej oferty jako biura w Wałbrzychu." },
    { question: "Czy mogę samemu zrobić SEO?", answer: "Część zadań tak: uzupełnienie wizytówki, opisów usług czy zdjęć. Audyt, poprawki techniczne i migracje strony warto zlecić osobie, która sprawdzi ich wpływ na indeksowanie." },
    { question: "Jak mierzyć efekty pozycjonowania?", answer: "Łączymy dane z Search Console z pomiarem formularzy i telefonów. Wyświetlenia, kliknięcia i przyjęte zapytania oceniamy osobno, z uwzględnieniem sezonowości." },
  ],
};

export default function PozycjonowanieWalbrzych() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
