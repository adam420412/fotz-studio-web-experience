import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-katowice",
  city: "Katowice",
  cityGenitive: "Katowic",
  title: "Pozycjonowanie Katowice — zakres SEO dla firm | FOTZ Studio",
  description: "SEO dla firm z Katowic i Śląska: audyt, poprawki strony, treści i pomiar zapytań. Zobacz zakres pozycjonowania, realizacje FOTZ oraz zasady wyceny.",
  lead: "Pomagamy uporządkować widoczność oferty w Google: od indeksowania strony po treści odpowiadające na pytania klientów. Dla firmy z Katowic ustalamy, które usługi i obszary obsługi warto rozwijać oraz jak sprawdzać jakość pozyskanych zapytań.",
  hero: { image: "fps", caption: "FPS Poznań — projekt strony internetowej z portfolio FOTZ. Prezentacja oferty producenta pojazdów szynowych." },
  scope: [
    { title: "Audyt i lista priorytetów", text: "Sprawdzamy indeksowanie, adresy kanoniczne, przekierowania oraz dane Search Console. Oddzielamy błędy blokujące ważne strony od adresów, które celowo nie powinny być indeksowane.", href: "/seo/audyt", link: "Zobacz zakres audytu SEO" },
    { title: "Mapa usług i obszaru obsługi", text: "Łączymy zapytania z konkretnymi usługami. Ustalamy, czy klient szuka wykonawcy w Katowicach, obsługi z dojazdem na Śląsku czy dostawcy działającego w całym kraju.", href: "/seo/pozycjonowanie", link: "Sprawdź ofertę pozycjonowania" },
    { title: "Wdrożenia na stronie", text: "Porządkujemy nagłówki, linki między ofertami, wersję mobilną i dostępność treści dla wyszukiwarki. Zakres prac programistycznych oraz testy po publikacji zapisujemy w planie.", href: "/seo/techniczne", link: "Przeczytaj o technicznym SEO" },
    { title: "Treści wspierające decyzję", text: "Rozwijamy opis zakresu usługi, procesu, ograniczeń i danych do wyceny. Korzystamy z dokumentacji oraz rzeczywistych realizacji firmy, aby klient mógł ocenić, czy oferta pasuje do jego potrzeby.", href: "/content-marketing/strategia", link: "Zobacz planowanie treści" },
    { title: "Profil Firmy w Google", text: "Jeśli firma kwalifikuje się do profilu, sprawdzamy kategorie, dane kontaktowe, godziny i rzeczywisty obszar obsługi. Profil w Mapach oraz widoczność strony wymagają osobnej oceny.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj zakres lokalnego SEO" },
    { title: "Pomiar zapytań", text: "Ustalamy sposób mierzenia wysłanych formularzy i innych działań kontaktowych. W raporcie zestawiamy je z widocznością i wejściami; jakość zapytań oceniamy z osobą, która je obsługuje.", href: "/kontakt", link: "Omów cel i dostępne dane" },
  ],
  examplesTitle: "Katowice, region czy cała Polska?",
  examplesIntro: "Obszar działań wynika z modelu sprzedaży. Poniższe przykłady pokazują sposób wyboru zakresu, a nie wyniki konkretnych klientów.",
  examples: [
    { title: "Usługa z dojazdem", text: "Dla wykonawcy obsługującego Katowice i sąsiednie miasta opisujemy faktyczny zasięg, warunki dojazdu i dane potrzebne do wyceny. Osobna podstrona ma sens, gdy pomaga wyjaśnić odrębną ofertę lub lokalną realizację.", measure: "zapytania o właściwą usługę z obszaru, który firma rzeczywiście obsługuje." },
    { title: "Dostawca dla biznesu", text: "Dla firmy B2B sprawdzamy, czy ważniejsze od nazwy miasta są parametry produktu, zastosowania i wymagania zamawiającego. Rozwijamy strony rozwiązań oraz formularz zbierający dane do rozmowy handlowej.", measure: "zapytania ofertowe z informacją o potrzebie klienta, a nie tylko wejścia na blog." },
    { title: "Kilka punktów obsługi", text: "Dla istniejących placówek porządkujemy adresy, godziny, kontakty i zakres usług. Każdy punkt powinien mieć aktualne informacje, a profil Google musi odpowiadać rzeczywistej działalności.", measure: "działania kontaktowe i zapytania przypisane do właściwej placówki." },
  ],
  planning: [
    { title: "Diagnoza przed abonamentem", text: "Najpierw określamy stan witryny, ważne usługi i to, kto odpowiada za CMS. Jeżeli potrzebna jest jednorazowa naprawa indeksowania, opisujemy ją jako osobne zadanie. Stałą pracę planujemy dla uzgodnionych ofert i tematów." },
    { title: "Wycena z rozpisanym zakresem", text: "Koszt zależy od liczby usług, wielkości strony, potrzebnych wdrożeń i treści. W propozycji oddzielamy audyt, pracę techniczną, przygotowanie materiałów oraz ewentualne koszty zewnętrzne. Ustalamy również, kto wprowadza i akceptuje zmiany." },
    { title: "Raport po wdrożeniu", text: "Pokazujemy wykonane prace, stan najważniejszych adresów, wyświetlenia i kliknięcia w Search Console oraz dostępne dane o zapytaniach. Porównujemy ustalone okresy, uwzględniając sezonowość. Wzrost wyświetleń sam nie potwierdza wzrostu sprzedaży." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Katowicach?", answer: "Cena zależy od stanu strony, liczby usług, obszaru obsługi i prac do wykonania. Do wyceny potrzebujemy adresu witryny oraz opisu celu. Oferta powinna określać zadania, odpowiedzialność za wdrożenia, harmonogram i koszty dodatkowe; sama liczba fraz nie opisuje całego zakresu." },
    { question: "Czy FOTZ ma biuro w Katowicach?", answer: "Nasz zespół pracuje z Poznania. Obsługę SEO dla firmy z Katowic możemy prowadzić zdalnie: od briefu i analizy danych po uzgodnienie wdrożeń i omówienie raportu. Ta strona opisuje obszar obsługi, a nie lokalny oddział." },
    { question: "Czy potrzebuję osobnej strony na każde miasto na Śląsku?", answer: "Nie ma takiej ogólnej potrzeby. Najpierw sprawdzamy rzeczywisty zasięg, różnice w ofercie i pytania klientów. Sama podmiana nazwy miasta nie tworzy użytecznej strony. Osobny adres rozważamy wtedy, gdy można pokazać odrębny zakres, placówkę, warunki obsługi lub udokumentowaną realizację." },
    { question: "Czy możecie wykonać tylko audyt SEO?", answer: "Tak. Możemy rozpocząć od audytu z priorytetami i listą zadań. Przed pracą ustalamy, czy obejmuje również wdrożenie poprawek przez FOTZ, czy przekazanie zaleceń osobie zarządzającej stroną. Weryfikację po wdrożeniu określamy w zakresie." },
    { question: "Czy pozycjonowanie obejmuje też Mapy Google?", answer: "Zakres Profilu Firmy w Google ustalamy osobno, po sprawdzeniu kwalifikowalności firmy. Obejmuje on prawdziwe dane, kategorie, godziny i informacje o usługach. Pozycja w Mapach zależy również od lokalizacji wyszukującej osoby; nie gwarantujemy jednakowej widoczności w całym regionie." },
    { question: "Kiedy pojawią się wyniki i czy gwarantujecie TOP 10?", answer: "Nie gwarantujemy pozycji ani terminu wejścia do TOP 10. Wpływ zmian zależy m.in. od stanu witryny, konkurencji i ponownego przetworzenia stron przez Google. Harmonogram prac i termin przeglądu danych ustalamy przed rozpoczęciem; ranking oraz liczbę zapytań oceniamy oddzielnie od samego wdrożenia." },
  ],
};

export default function SEOPozycjonowanieKatowice() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
