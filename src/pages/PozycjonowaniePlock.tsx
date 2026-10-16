import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/pozycjonowanie/plock",
  city: "Płock",
  headingPrefix: "Pozycjonowanie",
  headingSuffix: " — usługi pozycjonowania stron i lokalne SEO",
  cityGenitive: "Płocka",
  title: "Pozycjonowanie stron Płock — SEO i usługi pozycjonowania | FOTZ",
  description: "Pozycjonowanie stron Płock: agencja SEO FOTZ zdalnie wspiera każdą firmę i klientów z Płocka. Optymalizacja stron www, wizytówka Google, wycena pozycjonowania.",
  lead: "Chcesz, aby klienci z Płocka i okolic częściej trafiali na Twoją ofertę w Google? Pozycjonowanie zaczynamy od usług, które chcesz sprzedawać, a potem porządkujemy stronę, treści i drogę do kontaktu, żeby wizyta z wyszukiwarki mogła zamienić się w zapytanie.",
  hero: { image: "backstage", caption: "Za kulisami sesji produktowej FOTZ — praca na planie przy ustawianiu światła i kadru. Własne zdjęcia pomagają pokazać ofertę firmy rzetelniej niż materiały stockowe." },
  scopeTitle: "Pozycjonowanie stron w Płocku — co SEO da Twojej firmie?",
  planningTitle: "Wycena i cennik pozycjonowania: jak zaczyna agencja?",
  scope: [
    { title: "Audyt SEO i stan techniczny", text: "Sprawdzamy indeksowanie, przekierowania, duplikaty, szybkość ładowania oraz działanie witryny na telefonie. Dane z Search Console pokazują, które adresy już mają wyświetlenia i gdzie zaczyna się problem.", href: "/seo/audyt", link: "Sprawdź, co obejmuje audyt" },
    { title: "Dobór słów kluczowych", text: "Każdą frazę przypisujemy do jednej strony i jednego celu. Oddzielamy zapytania o usługę od pytań poradnikowych, żeby artykuł nie konkurował ze stroną oferty.", href: "/seo/pozycjonowanie", link: "Zobacz usługę pozycjonowania" },
    { title: "Treści oferty i portfolio", text: "Pomagamy opisać zakres usługi, warianty, obszar dojazdu i dane potrzebne do wyceny. Uzupełniamy stronę o realizacje i zdjęcia, które pokazują Twoją pracę.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Wizytówka i Mapy Google", text: "Dla firm, które obsługują klientów na miejscu lub dojeżdżają do nich, sprawdzamy Profil Firmy w Google: kategorię, godziny, obszar działania i link do właściwej podstrony.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz lokalne SEO" },
    { title: "Optymalizacja techniczna", text: "Porządkujemy metadane, strukturę nagłówków, linkowanie wewnętrzne i mapę witryny. Przy przebudowie strony planujemy przekierowania, aby nie stracić adresów, które już przyciągają ruch.", href: "/seo/techniczne", link: "Poznaj SEO techniczne" },
    { title: "Pomiar zapytań", text: "Ustalamy, co można wiarygodnie zmierzyć: wysłany formularz, kliknięcie numeru telefonu czy zamówienie w sklepie. Kliknięcie przycisku nie jest jeszcze pozyskanym klientem.", href: "/kontakt", link: "Omów pomiar kontaktów" },
  ],
  examplesTitle: "Firma w Płocku i jej branża: SEO w trzech sytuacjach",
  examplesIntro: "Płocki rynek tworzą zarówno firmy usługowe obsługujące mieszkańców, jak i przedsiębiorstwa pracujące dla przemysłu czy klientów z całego kraju. Poniższe scenariusze służą do rozmowy o zakresie — nie są opisem wyników konkretnych klientów.",
  examples: [
    { title: "Usługi z dojazdem do klienta", text: "Hydraulik, elektryk czy firma remontowa z Płocka obsługuje często także Gostynin, Sierpc lub okoliczne gminy. Opisujemy rzeczywisty obszar dojazdu i rodzaje zleceń, zamiast tworzyć osobną stronę dla każdej miejscowości.", measure: "telefony i formularze z informacją o lokalizacji oraz rodzaju zlecenia." },
    { title: "Firma B2B obsługująca przemysł", text: "Dostawca usług technicznych, serwisu lub transportu potrzebuje stron opisujących specjalizacje, uprawnienia i sposób realizacji. Frazy są węższe, a decyzję podejmuje często kilka osób.", measure: "zapytania ofertowe dla wybranych usług i ich jakość w rozmowach handlowych." },
    { title: "Sklep internetowy z Płocka", text: "Gdy sprzedaż obejmuje całą Polskę, nazwa miasta nie powinna dominować w treści. Rozwijamy kategorie, opisy produktów i filtry, a odbiór osobisty w Płocku traktujemy jako dodatkową informację.", measure: "ruch organiczny na kategoriach oraz zamówienia, jeśli sklep udostępnia te dane." },
  ],
  content: [
    { title: "Na czym polega pozycjonowanie stron dla firmy w Płocku?", text: "Pozycjonowanie SEO, czyli pozycjonowanie stron internetowych, to praca nad treścią, strukturą i techniczną dostępnością witryny, aby wyszukiwarka mogła powiązać Twoją ofertę z pytaniem klienta. Dla firmy w Płocku zaczynamy od ustalenia, które usługi mają największe znaczenie i jakiego kontaktu oczekujesz. Kluczowy jest cel biznesowy, a nie sama liczba odwiedzin. Następnie sprawdzamy, jak klienci opisują swoją potrzebę i czego brakuje na obecnej stronie. Pozycjonowanie to proces długofalowy, a jego zakres zależy od miejsca, w którym działamy z Twoją firmą: część poprawek da się wdrożyć szybko, ale reakcja w wynikach wyszukiwania wymaga czasu i zależy od konkurencji w Twojej branży." },
    { title: "Pozycjonowanie lokalne: wizytówka, Mapy i widoczność w Google", text: "Pozycjonowanie lokalne dla firm dotyczy klientów, którzy szukają wykonawcy w pobliżu — na Podolszycach, Radziwiu czy w okolicach Starego Rynku. Tu znaczenie mają wizytówka, spójne dane kontaktowe i strona opisująca obszar obsługi — od Płocka i okolic po sąsiednie powiaty. Wyniki w Mapach Google zależą także od odległości od szukającego, więc oceniamy je osobno od pozycjonowania stron w Google. Pozycjonowanie ogólnopolskie, w odróżnieniu od lokalnego SEO, wymaga innego planu: więcej treści o produktach i zastosowaniach, mniej odniesień do miasta. Wiele firm łączy oba kierunki, dlatego na początku ustalamy proporcje." },
    { title: "Sytuacja na rynku w Płocku a frazy w wyszukiwarce Google", text: "Płock to ośrodek przemysłowy nad Wisłą z silnym zapleczem firm usługowych, handlowych i wykonawczych pracujących dla zakładów z regionu. Oznacza to dwa rodzaje wyszukiwań: krótkie lokalne zapytania, które wpisują mieszkańcy Płocka (np. hydraulik Płock), oraz specjalistyczne frazy w relacjach B2B. Każda branża ma tu inną dynamikę. Wybór fraz opieramy na danych i analizie wyników, a nie na liczbie wyszukiwań. Fraza z mniejszym ruchem, ale jasną intencją zakupową, bywa cenniejsza niż ogólne hasło. Słowa kluczowe dobieramy więc tak, aby odpowiadały ofercie, którą firma faktycznie realizuje." },
    { title: "Strony internetowe Płock: projektowanie stron a SEO", text: "Strona internetowa jest podstawą każdego planu SEO. Nawet dobrze dobrane frazy nie pomogą, jeśli strona ładuje się wolno, formularz nie działa na telefonie, a oferta jest opisana jednym akapitem. Dlatego pozycjonowanie strony firmy łączymy z oceną nawigacji, szybkości i treści, a listę optymalizacji strony układamy według wpływu na kontakt. Jeśli planujesz nowy projekt strony www lub nowoczesną witrynę, możemy wesprzeć projektowanie stron internetowych od strony SEO: zapisać ważne adresy, przygotować przekierowania i zaplanować strukturę ofert. Strony projektujemy także sami, ale tworzenie stron www wyceniamy osobno, a cena strony internetowej zależy od jej zakresu. Każda strona powinna być responsywna i czytelna na telefonie." },
    { title: "Link building i treści eksperckie dla Twojego biznesu", text: "Linki z innych serwisów mogą wzmacniać widoczność Twojej strony, ale tylko gdy pochodzą z miejsc związanych z Twoją działalnością. Zamiast kupowania pakietów linków stawiamy na wpisy w branżowych katalogach, współprace i treści, do których warto odsyłać. Poradniki odpowiadające na pytania klientów pomagają budować zaufanie i zbierać ruch, który później prowadzimy do strony usługi." },
    { title: "SEO a reklama w wyszukiwarce: marketing online", text: "Kampanie Google Ads dają szybką obecność w wynikach, ale ruch kończy się wraz z budżetem reklamowym. Pozycjonowanie rozwija bezpłatny ruch z wyszukiwarek internetowych, który rośnie wolniej. Przy sezonowej ofercie lub nowej usłudze warto połączyć oba kanały, a dane z reklam wykorzystać przy wyborze tematów. W raporcie rozdzielamy ruch płatny i organiczny, aby było wiadomo, skąd pochodzą wartościowe zapytania." },
    { title: "Firmy z Płocka i okolic: agencja SEO pracująca zdalnie", text: "Obsługujemy firmy z Płocka i okolic zdalnie, z zespołu w Poznaniu. Pracujemy zarówno dla klientów z Płocka, którzy obsługują rynek miasta Płock, jak i dla tych, którzy sprzedają w całym kraju. Nie mamy biura w mieście, dlatego współpracę opieramy na ustalonym kontakcie, wspólnych dokumentach i krótkich spotkaniach online. Agencja potrzebuje od Ciebie wiedzy o klientach i ofercie, a w zamian przekazuje plan, listę wdrożeń i raport. Dzięki temu wiesz, co dzieje się na Twojej stronie i jakie działania przynoszą Twojej firmie wartość." },
    { title: "Najczęstsze pytania o pozycjonowanie przed startem", text: "Przed współpracą klienci pytają zwykle o koszt, czas oczekiwania na efekty i to, czy trzeba zmieniać stronę. Odpowiedzi zależą od stanu witryny i konkurencji, dlatego zbieraliśmy je w sekcji poniżej. Jeśli Twojego pytania tam nie ma, opisz swoją sytuację w formularzu — odpowiemy, od czego warto zacząć." },
    { title: "Wyniki wyszukiwania: jak mierzyć skuteczność pozycjonowania?", text: "Skuteczność pozycjonowania oceniamy na danych. Raport zawiera listę wykonanych prac, wyświetlenia i kliknięcia z Search Console, pozycje ważnych fraz oraz dostępne dane o kontaktach. Oddzielamy zapytania o nazwę marki od wyszukiwań usługi, a widoczność strony w wynikach wyszukiwania Google porównujemy z ruchem z innych kanałów marketingu. Gdy strona jest wyżej w Google na frazy usługowe, a zapytań nie przybywa, sprawdzamy dopasowanie treści i działanie formularza. Ocena wymaga porównania podobnych okresów, nie jednego tygodnia." },
  ],
  planning: [
    { title: "Rozmowa i diagnoza", text: "Prosimy o adres strony, opis priorytetowej usługi i obszar obsługi. Po wstępnym przeglądzie ustalamy, czy na start wystarczy audyt, czy potrzebna jest stała obsługa. Nie każda strona firmowa wymaga od razu kompleksowej obsługi." },
    { title: "Zakres i koszt przed startem", text: "Nie mamy jednego cennika dla wszystkich. Koszt zależy od wielkości serwisu, stanu technicznego, liczby ofert i potrzebnych treści. W propozycji wskazujemy zadania, terminy odbioru i ewentualne koszty dodatkowe." },
    { title: "Wdrożenia i przegląd danych", text: "Optymalizacja SEO odbywa się etapami. Pracujemy zdalnie z Poznania, z ustalonym kontaktem i obiegiem akceptacji. Po wdrożeniach sprawdzamy ważne adresy i formularze, a w ustalonym terminie omawiamy dane i kolejne kroki." },
  ],
  related: {
    title: "Działasz także poza Płockiem?",
    text: "Jeśli obsługujesz klientów w stolicy, zobacz ofertę dla Warszawy. Dla firm z centralnej Polski przygotowaliśmy zakres prac dla Łodzi, a dla województwa kujawsko-pomorskiego — dla Torunia. Przy kilku obszarach planujemy jedną spójną strukturę zamiast powielać treści.",
    links: [
      { href: "/seo/pozycjonowanie-warszawa", label: "Pozycjonowanie Warszawa" },
      { href: "/seo/pozycjonowanie-lodz", label: "Pozycjonowanie Łódź" },
      { href: "/uslugi/pozycjonowanie/torun", label: "Pozycjonowanie Toruń" },
    ],
  },
  faqs: [
    { question: "Ile kosztuje pozycjonowanie w Płocku?", answer: "Wycenę przygotowujemy po przejrzeniu strony i ustaleniu celu. Inny zakres ma jednorazowy audyt z listą poprawek, a inny stała praca nad treściami, wizytówką i pomiarem. W ofercie rozpisujemy zadania i koszty dodatkowe." },
    { question: "Jak długo trwa pozycjonowanie i kiedy widać efekty?", answer: "Zależy to od stanu witryny, konkurencji i zakresu wdrożeń. Pierwsze zmiany w wyświetleniach można obserwować po indeksacji poprawek, ale stabilna widoczność wymaga dłuższej pracy. Nie obiecujemy terminu, w którym pozycjonowanie Twojej strony przyniesie wysokie pozycje w Google." },
    { question: "Czy gwarantujecie pierwsze miejsce w Google?", answer: "Nie. Nikt nie kontroluje algorytmu wyszukiwarki. Zobowiązujemy się do uzgodnionych prac, terminów i przejrzystego raportu, a efekty oceniamy wspólnie na danych." },
    { question: "Czy macie biuro w Płocku?", answer: "Nie. Zespół FOTZ Studio pracuje w Poznaniu, a firmy z innych miast obsługujemy zdalnie. Nie przedstawiamy tej oferty jako biura w Płocku." },
    { question: "Czy potrzebuję nowej strony, żeby zacząć SEO?", answer: "Zwykle nie. Najpierw sprawdzamy obecną witrynę i możliwości edycji. Przebudowę proponujemy dopiero wtedy, gdy ograniczenia systemu blokują potrzebne zmiany." },
    { question: "Jaki program do SEO jest najlepszy?", answer: "Nie ma jednego narzędzia do wszystkiego. Podstawą jest Google Search Console, a dodatkowe programy pomagają w analizie fraz, linków i błędów technicznych. Narzędzia wspierają decyzje, ale nie zastąpią znajomości oferty i klientów." },
  ],
};

export default function PozycjonowaniePlock() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
