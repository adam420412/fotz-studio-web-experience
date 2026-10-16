import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/pozycjonowanie/zabrze",
  city: "Zabrze",
  headingPrefix: "Pozycjonowanie stron",
  headingSuffix: " — agencja SEO",
  cityGenitive: "Zabrza",
  title: "Pozycjonowanie stron Zabrze — zakres pozycjonowania | Agencja SEO",
  description: "Pozycjonowanie stron w Zabrzu dla firm z Zabrza i okolic: agencja SEO FOTZ Studio. Audyt, optymalizacja i zakres pozycjonowania przed wyceną.",
  lead: "Chcesz, aby klienci z Zabrza i okolic trafiali z Google na Twoją ofertę? Łączymy audyt, optymalizację strony i plan treści z czytelną drogą do kontaktu. Współpracę prowadzimy zdalnie z Poznania.",
  hero: { image: "fps", caption: "H. Cegielski – FPS — realizacja FOTZ dla firmy przemysłowej. Zdjęcia produkcji pomagają pokazać kompetencje firmy B2B." },
  scopeTitle: "Pozycjonowanie stron w Zabrzu — zakres usługi SEO",
  planningTitle: "Agencja SEO dla firm z Zabrza: jak zaczynamy?",
  scope: [
    { title: "Audyt SEO strony", text: "Sprawdzamy indeksowanie, błędy techniczne, podstrony ofertowe i dane z Search Console.", href: "/seo/audyt", link: "Zobacz audyt" },
    { title: "Frazy i podstrony", text: "Każdą frazę przypisujemy do jednej podstrony z usługą, aby strony nie konkurowały ze sobą.", href: "/seo/pozycjonowanie", link: "Usługa pozycjonowania" },
    { title: "Content i opisy usług", text: "Tworzenie treści opartych na wiedzy firmy: zakres, warianty, pytania klientów i realizacje.", href: "/content-marketing/strategia", link: "Strategia treści" },
    { title: "SEO lokalne i wizytówka", text: "Profil Firmy w Google (dawniej Google Moja Firma) uzgadniamy z treścią strony.", href: "/uslugi/pozycjonowanie-lokalne", link: "Pozycjonowanie lokalne" },
    { title: "Optymalizacja techniczna", text: "Szybkość, wersja mobilna, przekierowania i struktura linków wewnętrznych.", href: "/seo/techniczne", link: "SEO techniczne" },
    { title: "Kontakt i pomiar", text: "Mierzymy formularze i telefony, oddzielając kliknięcie od przyjętego zapytania.", href: "/kontakt", link: "Omów cel" },
  ],
  examplesTitle: "Pozycjonowanie Zabrze: przykładowe sytuacje firm",
  examplesIntro: "To scenariusze do rozmowy o zakresie, a nie wyniki klientów.",
  examples: [
    { title: "Firma B2B i produkcja", text: "Opisujemy technologie, zastosowania i branże odbiorców. Klient z Zabrza i z całej Polski szuka parametrów, nie nazwy miasta.", measure: "zapytania ofertowe dla wybranych usług." },
    { title: "Usługa z dojazdem", text: "Dla ekipy obsługującej Zabrze, Gliwice czy Rudę Śląską porządkujemy obszar działania i landing page usługi.", measure: "telefony i formularze z podstrony." },
    { title: "Gabinet lub punkt", text: "Spójne godziny, adres i zakres usług na stronie oraz w Mapach Google.", measure: "wyznaczanie trasy, połączenia i rezerwacje." },
  ],
  content: [
    { title: "Pozycjonowanie stron internetowych w Zabrzu — od czego zacząć?", text: "Pozycjonowanie stron internetowych zaczynamy od celu firmy: telefonu, rezerwacji albo zapytania o projekt. Potem sprawdzamy, jak klienci opisują potrzebę w wyszukiwarce i której podstronie brakuje odpowiedzi. Zabrze ma gospodarkę opartą na przemyśle, usługach, medycynie i turystyce poprzemysłowej, więc strategia dla zakładu produkcyjnego wygląda inaczej niż dla gabinetu czy lokalu. Pozycjonowanie Zabrze ma sens tam, gdzie miejsce realizacji usługi naprawdę ma znaczenie." },
    { title: "Pozycjonowanie lokalne i SEO w Zabrzu", text: "Pozycjonowanie lokalne obejmuje stronę www oraz wizytówkę w Mapach Google. Osoba z dzielnicy takiej jak Mikulczyce, Helenka, Biskupice, Kończyce, Grzybowice czy Zaborze Północ szuka wykonawcy w pobliżu, więc liczy się adres lub obszar obsługi, godziny i kontakt. Lokalna widoczność nie oznacza osobnej podstrony dla każdej dzielnicy. Pozycjonowanie w Zabrzu łączymy z rzeczywistym zasięgiem firmy, także gdy obsługujesz klientów z Zabrza i z sąsiednich miast konurbacji." },
    { title: "Audyt SEO i optymalizacja strony firmy", text: "Audyt SEO pokazuje, co blokuje widoczność: indeksowanie, duplikaty, wolne ładowanie, brak linków wewnętrznych lub niejasna oferta. Optymalizację strony prowadzimy według priorytetów, bo nie każda poprawka ma wpływ na zapytania. Algorytm Google ocenia przede wszystkim przydatność treści i dostępność witryny. Wartościowe linki zewnętrzne pozyskujemy ostrożnie, z miejsc związanych z branżą, bez kupowania przypadkowych odnośników." },
    { title: "Słowa kluczowe, content marketing i sklep internetowy", text: "Słowa kluczowe wybieramy na podstawie usług i danych, a każda fraza dostaje przypisaną podstronę. Content marketing traktujemy jako odpowiedź na pytania przed zakupem, nie jako dopisywanie nazwy miasta. Pozycjonowanie sklepów internetowych wymaga pracy na kategoriach, filtrach i opisach produktów; sklep z Zabrza sprzedający w całej Polsce powinien konkurować frazami produktowymi, a lokalny odbiór pokazać jako dodatkowy atut." },
    { title: "Agencja SEO w Zabrzu czy zdalna współpraca?", text: "Dobra agencja pokazuje zakres prac, odpowiedzialność za wdrożenie i raport, który rozumie właściciel firmy. FOTZ Studio jest agencją interaktywną z Poznania; firmy z Zabrza obsługujemy zdalnie i nie przedstawiamy tej oferty jako biura w Zabrzu. W portfolio mamy strony, zdjęcia i kampanie, ale nie przypisujemy im wyników SEO. Możemy też zaplanować kampanię Google Ads jako osobny kanał w strategii marketingowej, gdy potrzebujesz ruchu na stronie szybciej." },
    { title: "Skuteczne pozycjonowanie: efekty, koszt i gwarancja", text: "Skuteczne SEO oceniamy po widoczności w Google, kliknięciach i zapytaniach, a nie po samej pozycji w wynikach wyszukiwania. Nie dajemy gwarancji miejsca, bo zmiany algorytmów Google i działania konkurencji są poza kontrolą agencji. Koszt zależy od wielkości serwisu, stanu technicznego i liczby usług. Przed startem rozpisujemy działania SEO, wsparcie techniczne i sposób raportowania." },
  ],
  planning: [
    { title: "Rozmowa o usłudze", text: "Ustalamy priorytetową usługę, obszar obsługi i cel kontaktu." },
    { title: "Wycena zakresu SEO", text: "Dzielimy prace na audyt, wdrożenia, treści i pomiar, z kosztami dodatkowymi." },
    { title: "Raport i kolejny krok", text: "Raport pokazuje wykonane zmiany, dane z Search Console i zapytania." },
  ],
  related: {
    title: "Działasz też w innych miastach Śląska?",
    text: "Zobacz zakres dla Gliwic, Katowic i Sosnowca. Przy kilku obszarach ustalamy wspólny plan, bez powielania treści.",
    links: [
      { href: "/pozycjonowanie/gliwice", label: "Pozycjonowanie Gliwice" },
      { href: "/seo/pozycjonowanie-katowice", label: "Pozycjonowanie Katowice" },
      { href: "/pozycjonowanie/sosnowiec", label: "Pozycjonowanie Sosnowiec" },
    ],
  },
  faqs: [
    { question: "Ile kosztuje pozycjonowanie w Zabrzu?", answer: "Wycenę przygotowujemy po audycie strony i ustaleniu celu. Rozpisujemy zadania, terminy i ewentualne koszty dodatkowe." },
    { question: "Czy macie biuro w Zabrzu?", answer: "Nie. Zespół pracuje w Poznaniu, a firmy z Zabrza obsługujemy zdalnie." },
    { question: "Czy pozycjonowanie w Zabrzu pomoże dotrzeć do klientów z Gliwic czy Bytomia?", answer: "Tak, jeśli faktycznie tam działasz. Opisujemy obszar obsługi, ale nie tworzymy stron dla miast, w których nie realizujesz usług." },
    { question: "Kiedy widać efekty SEO?", answer: "Zależy to od stanu witryny, konkurencji i zakresu wdrożeń. Ustalamy termin przeglądu danych, bez obietnic konkretnej pozycji." },
    { question: "Czy potrzebuję nowej strony www?", answer: "Niekoniecznie. Najpierw sprawdzamy, czy obecną stronę można poprawić." },
    { question: "Czy pomagacie w widoczności w AI?", answer: "Porządkujemy treść tak, aby była jasna dla ludzi i wyszukiwarek, ale nie gwarantujemy cytowania przez narzędzia AI." },
  ],
};

export default function PozycjonowanieZabrze() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
