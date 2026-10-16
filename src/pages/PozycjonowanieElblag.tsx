import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/pozycjonowanie/elblag",
  city: "Elbląg",
  cityGenitive: "Elbląga",
  headingPrefix: "Pozycjonowanie stron internetowych",
  headingSuffix: " — agencja SEO, widoczność w Google i optymalizacja",
  title: "Pozycjonowanie stron internetowych Elbląg — agencja SEO i Google",
  description: "Pozycjonowanie stron w Elblągu: agencja SEO FOTZ Studio. Audyt, optymalizacja, wizytówka Google i rozsądne połączenie z reklamą Google Ads. Firmy z Elbląga obsługujemy zdalnie.",
  lead: "Szukasz sposobu, by klienci z Elbląga i okolic trafiali z Google na Twoją ofertę, a nie tylko do konkurencji? Porządkujemy stronę, treści i drogę do kontaktu wokół usług, które chcesz sprzedawać. Zespół FOTZ pracuje w Poznaniu, a firmy z Elbląga i Żuław obsługujemy zdalnie.",
  hero: { image: "fps", caption: "H. Cegielski – FPS — realizacja FOTZ dla firmy przemysłowej: strona i zdjęcia produkcji. Rzetelne materiały pomagają pokazać kompetencje firmy przed pierwszą rozmową." },
  scopeTitle: "Pozycjonowanie stron w Elblągu — zakres usługi SEO",
  planningTitle: "Pozycjonowanie Elbląg: jak zaczynamy współpracę?",
  scope: [
    { title: "Audyt SEO witryny", text: "Sprawdzamy indeksowanie, przekierowania, powielone adresy i działanie strony na urządzeniach mobilnych. Dane z Search Console pokazują, które podstrony mają wyświetlenia, a gdzie brakuje kliknięć.", href: "/seo/audyt", link: "Zobacz zakres audytu" },
    { title: "Słowa kluczowe i podstrony", text: "Każdą usługę łączymy z jedną podstroną i grupą fraz, żeby podobne adresy nie konkurowały ze sobą o tę samą potrzebę klienta.", href: "/seo/pozycjonowanie", link: "Poznaj usługę pozycjonowania" },
    { title: "Treści i własne zdjęcia", text: "Rozwijamy opisy ofert i odpowiedzi na pytania przed zakupem. Jako studio produkcyjne możemy przygotować zdjęcia lub wideo z Twojej firmy.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Wizytówka Google i lokalne SEO", text: "Dla firm obsługujących klientów na miejscu porządkujemy Profil Firmy: kategorię, obszar działania, godziny i dane zgodne ze stroną.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz pozycjonowanie lokalne" },
    { title: "Optymalizacja techniczna", text: "Metadane, linkowanie wewnętrzne, dane strukturalne i wydajność. Przy zmianie strony planujemy przekierowania, aby nie stracić wypracowanego ruchu.", href: "/seo/techniczne", link: "Poznaj prace techniczne" },
    { title: "Pomiar zapytań", text: "Ustalamy, co jest wynikiem: telefon, wiadomość, rezerwacja czy zakup. Odróżniamy kliknięcie przycisku od zapytania, które dotarło do firmy.", href: "/kontakt", link: "Omów sposób pomiaru" },
  ],
  examplesTitle: "Pozycjonowanie stron Elbląg: usługi, firma B2B czy sklep?",
  examplesIntro: "Inaczej układamy stronę warsztatu z Zatorza, inaczej ofertę zakładu, który sprzedaje w całym kraju. To przykładowe sytuacje do rozmowy o zakresie, a nie opisy wyników naszych klientów.",
  examples: [
    { title: "Usługi z wizytą klienta", text: "Gabinet, warsztat czy szkoła językowa potrzebują jasnej podstrony usługi, aktualnej wizytówki i prostego kontaktu z telefonu.", measure: "połączenia, wiadomości i rezerwacje z wyników wyszukiwania oraz Map, jeśli da się je zarejestrować." },
    { title: "Przemysł i firmy B2B", text: "Elbląg ma tradycje przemysłowe i firmy produkcyjne, które sprzedają poza regionem. Rozwijamy strony produktów i zastosowań, a frazy z nazwą miasta traktujemy jako uzupełnienie.", measure: "liczba i jakość zapytań o konkretne produkty, oceniana z działem handlowym." },
    { title: "Turystyka i sezon", text: "Noclegi, rejsy po Kanale Elbląskim czy wypoczynek nad Zalewem Wiślanym wymagają aktualnych terminów, cen i warunków rezerwacji przed sezonem.", measure: "zapytania z terminem i liczbą osób lub potwierdzone rezerwacje, jeśli system je udostępnia." },
  ],
  content: [
    { title: "Pozycjonowanie stron internetowych Elbląg — na czym polega?", text: "Pozycjonowanie to praca nad treścią, strukturą i techniczną stroną witryny, dzięki której wyszukiwarka łączy ją z pytaniami klientów. SEO nie jest jednorazowym ustawieniem: obejmuje audyt, optymalizację, rozwój treści i kontrolę efektów. Dla przedsiębiorcy z Elbląga celem zwykle nie jest sam ruch, ale zapytania o konkretne usługi. Dlatego zaczynamy od oferty, obszaru obsługi i tego, ile nowych zleceń firma może przyjąć. Strona internetowa ma odpowiadać na potrzebę wyszukującego, a nie powtarzać nazwę miasta w każdym zdaniu." },
    { title: "Rynek w Elblągu a strategie SEO dla Twojej firmy", text: "Elbląg łączy przemysł, usługi dla mieszkańców, handel i turystykę związaną z Kanałem Elbląskim, Starym Miastem i Zalewem Wiślanym. Klient szukający mechanika na Zawadzie potrzebuje czegoś innego niż kupiec hurtowy porównujący dostawców. Strategie dobieramy do grupy docelowej: dla usług lokalnych ważne są Mapy i podstrony z obszarem dojazdu, dla firm B2B — produkty, specyfikacje i zastosowania. Uwzględniamy też klientów z Żuław, Braniewa czy Pasłęka, jeśli rzeczywiście ich obsługujesz." },
    { title: "Wizytówka Google i pozycjonowanie lokalne w Elblągu", text: "Pozycjonowanie lokalne obejmuje stronę oraz, dla kwalifikującej się firmy, Profil Firmy w Google. W mapach Google liczą się trafność, odległość i rozpoznawalność, dlatego wynik może różnić się w zależności od miejsca, z którego ktoś szuka. Wizytówka powinna mieć właściwą kategorię, prawdziwy adres lub obszar działania, godziny i zdjęcia. Lokalne SEO prowadzi z wizytówki do odpowiedniej podstrony usługi, a nie na stronę główną. Nie obiecujemy miejsca wśród 10 najlepszych wyników w każdej części miasta." },
    { title: "Audyt, słowa kluczowe i optymalizacja SEO", text: "Audyt zaczynamy od podstron, które mają sprzedawać. Sprawdzamy, czy Google je indeksuje, na jakie frazy się wyświetlają i dlaczego nie przynoszą kliknięć. Słowa kluczowe dobieramy na podstawie oferty, danych z Search Console i analizy, co pokazują wyniki wyszukiwania. Optymalizacja SEO obejmuje tytuły, nagłówki, linkowanie, szybkość i czytelność na telefonie. Wysokie pozycje nie mają wartości, jeśli po kliknięciu klient nie znajduje ceny, zakresu ani kontaktu." },
    { title: "Sklep internetowy i e-commerce z Elbląga", text: "Sklep internetowy potrzebuje innego planu niż strona usługowa. Porządkujemy kategorie, filtry, opisy produktów i adresy, które wyszukiwarka nie powinna indeksować. W e-commerce frazy z nazwą miasta mają mniejsze znaczenie niż produkty, ale lokalny odbiór może być atutem. Przy produktach pokazywanych w zakładce Zakupy sprawdzamy też spójność danych z Google Merchant Center. Sprzedaż oceniamy tylko wtedy, gdy platforma rzetelnie ją zlicza." },
    { title: "Skuteczne pozycjonowanie stron internetowych a kampanie Google Ads", text: "SEO rozwija widoczność w bezpłatnych wynikach, a reklamy w Google mają osobny budżet. Kampania Google Ads — dawniej Google AdWords — pomaga zaistnieć w sieci od razu, gdy strona dopiero zdobywa widoczność. Działania SEM łączymy z pozycjonowaniem tak, by nie płacić za frazy, które przynoszą ruch organiczny. Reklama nie kupuje wyższej pozycji w wynikach organicznych. Kampanie reklamowe i ich prowadzenie wyceniamy osobno, a w raporcie rozdzielamy kanały." },
    { title: "Content marketing, social media i rozpoznawalność marki", text: "Content marketing w SEO to przede wszystkim opisy usług i poradniki, które odpowiadają na pytania przed zakupem. Social media nie zastąpią strony, ale wspierają rozpoznawalność Twojej marki i pomagają dotrzeć do mieszkańców. Posty w mediach społecznościowych mogą kierować do konkretnej oferty. Lokalne media i portale bywają dobrym miejscem na wzmiankę o firmie, jeśli publikacja ma realną wartość dla czytelnika. Własne zdjęcia z realizacji pokazują firmę rzetelniej niż zdjęcia stockowe." },
    { title: "Tworzenie stron www Elbląg a pozycjonowanie", text: "Nie zawsze trzeba projektować nową witrynę. Najpierw sprawdzamy, czy obecna strona pozwala na zmiany w treści, nagłówkach i adresach. Gdy przebudowa jest potrzebna, łączymy projektowanie stron www z planem SEO: zapisujemy ważne adresy, przygotowujemy przekierowania i kontrolę po publikacji. Nowoczesne strony to nie tylko wygląd, ale szybkość, dostępność i prosty formularz kontaktowy. Tworzenie stron internetowych i pozycjonowanie stron www wyceniamy jako osobne zakresy." },
    { title: "Ile kosztuje pozycjonowanie w Elblągu i jak mierzymy efekty?", text: "Wycena zależy od rozmiaru serwisu, stanu technicznego, liczby ofert i potrzebnych materiałów. Nie podajemy stałego cennika, bo inny zakres ma strona jednego warsztatu, a inny sklep z setkami produktów. Raport łączy wykonane prace z danymi z Search Console i Google Analytics. Konwersja to dla nas konkretna akcja: telefon, wiadomość, rezerwacja lub zakup. Efekty obserwujemy w miesiącach, a nie dniach, i porównujemy podobne okresy przy ofercie sezonowej." },
    { title: "Agencja SEO z Poznania dla firm z Elbląga", text: "Szukając agencji, która zajmie się Twoim biznesem, porównaj zakres prac, odpowiedzialność za wdrożenia i sposób raportowania. FOTZ to agencja marketingowa i studio produkcyjne z Poznania; firmy z Elbląga obsługujemy zdalnie, bez biura w mieście. Kompleksowy marketing nie oznacza, że każda firma potrzebuje wszystkich usług. Ustalamy priorytety dla Twojego biznesu i jeden kontakt po naszej stronie." },
  ],
  planning: [
    { title: "Rozmowa o priorytetowej usłudze", text: "Ustalamy, którą ofertę rozwijać, kto jest odbiorcą, jaki obszar obsługujesz i jak przyjmujesz zapytania. Przeglądamy stronę i dostępne dane." },
    { title: "Zakres i wycena przed startem", text: "Dzielimy prace na analizę, wdrożenia, treści i pomiar. Przed rozpoczęciem wskazujemy, co jest w cenie, co wymaga dodatkowej wyceny i kto akceptuje zmiany." },
    { title: "Wdrożenia i przegląd danych", text: "Po publikacji sprawdzamy adresy, linki i kontakt na telefonie. W ustalonym terminie omawiamy widoczność, kliknięcia i zapytania oraz kolejny krok." },
  ],
  related: {
    title: "Pozycjonowanie w innych miastach Pomorza i Warmii",
    text: "Jeśli działasz także w Trójmieście lub na Warmii, zobacz zakres pracy dla Gdańska, Gdyni i Olsztyna. Przy kilku obszarach obsługi ustalamy wspólny plan zamiast powielać te same treści.",
    links: [
      { href: "/seo/pozycjonowanie-gdansk", label: "Pozycjonowanie Gdańsk" },
      { href: "/uslugi/pozycjonowanie/gdynia", label: "Pozycjonowanie Gdynia" },
      { href: "/uslugi/pozycjonowanie/olsztyn", label: "Pozycjonowanie Olsztyn" },
    ],
  },
  faqs: [
    { question: "Na czym polega pozycjonowanie stron?", answer: "To praca nad treścią, strukturą i technicznym stanem witryny, aby wyszukiwarka mogła powiązać ofertę z pytaniem klienta. Zaczynamy od audytu i celu firmy, a potem wdrażamy poprawki według priorytetów." },
    { question: "Ile kosztuje pozycjonowanie w Elblągu?", answer: "Wycenę przygotowujemy po poznaniu strony, oferty i celu. Zakres może obejmować jednorazowy audyt, naprawę techniczną albo stały rozwój treści. W propozycji rozpisujemy zadania, terminy i ewentualne koszty dodatkowe." },
    { question: "Jak długo trzeba czekać na efekty pozycjonowania?", answer: "Zależy to od stanu witryny, konkurencji i zakresu prac. Pierwsze zmiany w danych bywają widoczne po kilku tygodniach, ale stabilną ocenę robimy po kilku miesiącach. Nie gwarantujemy konkretnej pozycji ani liczby zapytań." },
    { question: "Czy macie biuro w Elblągu?", answer: "Nie. Zespół FOTZ Studio pracuje w Poznaniu, a firmy z Elbląga obsługujemy zdalnie: rozmowy wideo, wspólne dokumenty i ustalony obieg akceptacji. Nie przedstawiamy tej oferty jako biura w Elblągu." },
    { question: "Czym różni się pozycjonowanie lokalne od ogólnopolskiego?", answer: "Lokalne dotyczy klientów z określonego obszaru i obejmuje wizytówkę oraz wyniki w Mapach. Ogólnopolskie skupia się na produktach i usługach bez względu na miejsce. Wiele firm z Elbląga potrzebuje obu podejść dla różnych ofert." },
    { question: "Czy muszę mieć stronę, żeby pozycjonować wizytówkę?", answer: "Wizytówka może działać bez strony, ale strona daje miejsce na pełny opis usług, cennik i odpowiedzi na pytania. Zwykle polecamy połączyć oba elementy." },
  ],
};

export default function PozycjonowanieElblag() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
