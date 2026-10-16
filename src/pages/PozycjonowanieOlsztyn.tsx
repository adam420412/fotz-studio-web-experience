import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/uslugi/pozycjonowanie/olsztyn",
  city: "Olsztyn",
  headingPrefix: "Pozycjonowanie stron",
  headingSuffix: " — lokalne SEO i pozycjonowanie stron internetowych dla firm usługowych",
  cityGenitive: "Olsztyna",
  title: "Pozycjonowanie stron Olsztyn — zakres pozycjonowania SEO stron internetowych | FOTZ",
  description: "Pozycjonowanie stron Olsztyn: skuteczne pozycjonowanie stron internetowych i pozycjonowanie lokalne. Agencja SEO FOTZ — audyt, optymalizacja i plan pozycjonowania, który zwiększa widoczność oferty.",
  lead: "Prowadzisz firmę w Olsztynie i chcesz, aby klienci znajdowali Twoją ofertę w Google? Łączymy audyt, poprawki techniczne i czytelne opisy usług z prostą drogą do kontaktu. Pracujemy zdalnie z Poznania, a zakres ustalamy po sprawdzeniu strony.",
  hero: { image: "conference", caption: "Konferencja z portfolio FOTZ — zdjęcia wydarzenia przygotowane dla klienta. Rzeczywiste materiały pomagają opisać ofertę rzetelnie." },
  scopeTitle: "Pozycjonowanie stron w Olsztynie — kompleksowe usługi SEO",
  planningTitle: "Ile kosztuje pozycjonowanie w wyszukiwarce i jak zaczynamy?",
  scope: [
    { title: "Audyt strony internetowej", text: "Sprawdzamy indeksowanie, przekierowania, szybkość i wersję mobilną. Wskazujemy mocne i słabe strony witryny oraz obszary wymagające poprawy.", href: "/seo/audyt", link: "Sprawdź zakres audytu" },
    { title: "Frazy przypisane do ofert", text: "Każdej ważnej usłudze przypisujemy jedną stronę i grupę fraz. Dzięki temu podstrony nie konkurują ze sobą o to samo pytanie.", href: "/seo/pozycjonowanie", link: "Zobacz usługę pozycjonowania" },
    { title: "Treści odpowiadające na pytania", text: "Opisujemy zakres usługi, warunki realizacji i dane potrzebne do wyceny. Wykorzystujemy Twoje zdjęcia i realizacje zamiast ogólników.", href: "/content-marketing/strategia", link: "Przejdź do strategii treści" },
    { title: "Profil Firmy w Google", text: "Dla firm obsługujących klientów na miejscu porządkujemy kategorię, godziny, kontakt i powiązanie wizytówki z właściwą stroną.", href: "/uslugi/pozycjonowanie-lokalne", link: "Zobacz lokalne SEO" },
    { title: "Struktura i linkowanie", text: "Porządkujemy menu, linki wewnętrzne, metadane i mapę witryny. Przy zmianie strony planujemy przekierowania ważnych adresów.", href: "/seo/techniczne", link: "Poznaj prace techniczne" },
    { title: "Pomiar kontaktów", text: "Ustalamy, co da się wiarygodnie mierzyć: formularz, telefon, rezerwację. Kliknięcie przycisku nie jest jeszcze przyjętym zleceniem.", href: "/kontakt", link: "Omów ścieżkę klienta" },
  ],
  examplesTitle: "Pozycjonowanie Olsztyn: trzy typowe sytuacje",
  examplesIntro: "To przykładowe scenariusze do rozmowy o zakresie prac, a nie opisy wyników klientów.",
  examples: [
    { title: "Usługa świadczona w mieście", text: "Gabinet, warsztat lub firma remontowa potrzebuje jasnej informacji o obszarze działania, terminach i sposobie kontaktu — od Jarot po Zatorze.", measure: "przyjęte zapytania i telefony z wybranych stron." },
    { title: "Oferta zależna od sezonu", text: "Noclegi, wypoczynek nad jeziorami czy wydarzenia wymagają aktualnych opisów przed okresem planowania przyjazdów.", measure: "zapytania z terminem w porównaniu z podobnym okresem." },
    { title: "Firma B2B z regionu", text: "Producent lub dostawca usług dla firm sprzedaje w całym kraju. Lokalne frazy uzupełniają plan, ale główne treści dotyczą produktów.", measure: "jakość zapytań handlowych dla wybranych ofert." },
  ],
  content: [
    { title: "Search engine optimization: jak wyszukiwarka ocenia stronę internetową?", text: "Search engine optimization (SEO) to praca nad treścią, strukturą i techniczną dostępnością witryny. Celem pozycjonowania jest to, aby wyszukiwarka mogła powiązać Twoją ofertę z pytaniem użytkownika i pokazać ją w wynikach wyszukiwania. Algorytm Google ocenia między innymi trafność treści, jakość strony oraz linki prowadzące do niej z innych witryn. Pozycjonowanie stron nie polega na dopisywaniu nazwy miasta do każdego akapitu. Zaczynamy od usług, które chcesz sprzedawać, i od tego, jak potencjalni klienci opisują swoją potrzebę w wyszukiwarce Google." },
    { title: "Pozycjonowanie lokalne i lokalna wizytówka w Olsztynie", text: "Pozycjonowanie lokalne pomaga firmom, dla których miejsce świadczenia usługi ma znaczenie. Obejmuje stronę oraz, gdy firma się kwalifikuje, Profil Firmy w Google z adresem lub obszarem obsługi. Lokalne SEO w Olsztynie wymaga spójnych danych: nazwy, telefonu, godzin i linku do właściwej oferty. Lokalna wizytówka i strona powinny mówić to samo. Wyniki w Mapach zależą też od odległości użytkownika, dlatego oceniamy je osobno od pozycji strony. Nie tworzymy osobnych podstron dla Kortowa czy Pieczewa, jeśli firma nie ma tam odrębnej oferty." },
    { title: "Pozycjonowanie stron Olsztyn: strona Twojej firmy na lokalnym rynku", text: "Olsztyn jest stolicą województwa warmińsko-mazurskiego, ośrodkiem akademickim i punktem wyjazdowym w stronę Mazur. Firmy w Olsztynie obsługują więc mieszkańców, studentów, przyjezdnych i klientów biznesowych z regionu. Każda z tych grup szuka innych informacji. Dlatego plan zaczynamy od wyboru priorytetowej usługi i ustalenia, czy klient przychodzi na miejsce, zamawia wizytę, czy kupuje online. Pozycjonowanie firmy ma odzwierciedlać rzeczywisty sposób działania, a strona internetowa ma odpowiadać na pytania przed kontaktem." },
    { title: "Słowa kluczowe i fraza przypisana do strony", text: "Dobór słów kluczowych opieramy na ofercie, danych z Google Search Console i analizie wyników wyszukiwania. Sprawdzamy, czy pod daną frazą Google pokazuje w Olsztynie oferty, sklepy czy poradniki, oraz jaka jest konkurencyjność fraz kluczowych. Każda fraza otrzymuje stronę docelową, aby artykuł nie zastępował oferty konkretnej usługi. Konkurencja w branży jest punktem odniesienia dla zakresu informacji, a nie źródłem tekstu do kopiowania. Treść piszemy naturalnym językiem, bez upychania odpowiednich słów kluczowych w każdym zdaniu." },
    { title: "Kompleksowy audyt SEO i optymalizacja strony", text: "Przeprowadzając kompleksowy audyt, sprawdzamy indeksowanie, przekierowania, duplikaty, szybkość ładowania oraz wygodę korzystania na telefonie. Wskazujemy mocne i słabe strony serwisu oraz obszary wymagające poprawy. Optymalizacja strony obejmuje też tytuły, opisy, nagłówki i linkowanie wewnętrzne, czyli porządek treści i struktury strony. Gdy ograniczenia CMS, na przykład WordPress, blokują zmiany, opisujemy wdrożenie i osobę odpowiedzialną. Raport wskazuje kolejność prac: co naprawić najpierw i jak sprawdzić efekt." },
    { title: "Pozycjonowanie stron internetowych Olsztyn: firmy usługowe i sklepy", text: "Inaczej planujemy pozycjonowanie firmy usługowej, a inaczej sklepu internetowego. Przy usługach liczy się opis zakresu, obszaru i terminu. W sklepie sprawdzamy kategorie, opisy produktów, filtry i adresy powstające podczas wyszukiwania. Dla firm sprzedających z Olsztyna w całej Polsce lokalne frazy są dodatkiem, a główne treści dotyczą produktów. Jeśli pytasz, czy warto inwestować w pozycjonowanie sklepu internetowego, zaczynamy od kategorii, które mają potencjał sprzedażowy." },
    { title: "Firmowy serwis a sezonowość oferty", text: "Część branż w Olsztynie i okolicy, takich jak noclegi, wypoczynek nad jeziorami czy wydarzenia, ma wyraźny sezon. Treści warto zaktualizować przed okresem, w którym klienci porównują oferty i planują przyjazd. Po sezonie strona nie musi znikać: może informować o kolejnym terminie. Wyniki porównujemy z podobnym okresem, aby oddzielić zmianę popytu od wpływu poprawek i ocenić widoczność w wynikach wyszukiwania w uczciwy sposób." },
    { title: "Linki i działania SEO poza stroną", text: "Budowanie wartościowych linków to uzupełnienie, a nie zastępstwo dobrej oferty. Szukamy odnośników z serwisów branżowych, olsztyńskich organizacji i partnerów, z którymi firma faktycznie współpracuje, także w Olsztynie i regionie. Nie kupujemy przypadkowych pakietów linków, bo mogą zaszkodzić witrynie. Działania poza witryną łączymy z aktualną wizytówką i spójnymi danymi firmy w katalogach." },
    { title: "Kiedy widać efekty pozycjonowania stron w Olsztynie?", text: "Czas zależy od stanu witryny, konkurencyjności branży, zakresu prac i tego, jak szybko wyszukiwarka przetworzy zmiany. Ustalamy harmonogram wdrożeń i termin przeglądu danych, ale nie gwarantujemy konkretnej pozycji w Google. Pierwsze sygnały to zwykle wyświetlenia i kliknięcia w Search Console, a dopiero później zapytania. Pozycjonowanie to proces: po pierwszym etapie oceniamy dane i decydujemy o kolejnych krokach." },
    { title: "Co zyskujesz dzięki pozycjonowaniu i jak to mierzyć?", text: "Raport dla firmy z Olsztyna obejmuje wykonane prace, pozycje w wynikach, kliknięcia, ruch na stronie i dostępne dane o kontaktach z Google Analytics. Rozdzielamy wyszukiwania marki od wyszukiwań usługi, a ruch organiczny od reklam. Konwersja to dla nas wysłany formularz, telefon lub rezerwacja, a nie samo wejście. Gdy widoczność strony internetowej rośnie bez nowych zapytań, analizujemy ofertę i formularz. Skuteczne pozycjonowanie oceniamy przez cel firmy, nie samą liczbę odwiedzin." },
    { title: "SEO a Google Ads — co wybrać?", text: "Google Ads daje widoczność od uruchomienia płatnych kampanii reklamowych, ale wymaga stałego budżetu na kliknięcia. Pozycjonowanie rozwija obecność w bezpłatnych wynikach i potrzebuje czasu. Oba kanały można łączyć z innymi działaniami marketingu internetowego: dane z kampanii pomagają wybrać tematy treści. Reklama nie podnosi pozycji organicznej, dlatego w raportach rozdzielamy oba źródła. Narzędzia sztucznej inteligencji również korzystają z czytelnych stron." },
    { title: "Agencja SEO — jak wygląda współpraca?", text: "Współpracę z firmami z Olsztyna prowadzimy zdalnie z Poznania. Nie przedstawiamy tej oferty jako biura w Olsztynie. Ustalamy osobę kontaktową, obieg materiałów i terminy akceptacji. Potrzebujemy Twojej wiedzy o klientach, pytaniach i ograniczeniach obsługi, bo agencja jej nie zastąpi. Po każdym etapie otrzymujesz opis zmian i propozycję kolejnego kroku, aby łatwiej docierać do klientów, którzy szukają Twoich usług." },
  ],
  planning: [
    { title: "Diagnoza priorytetowej usługi", text: "Zaczynamy od oferty, którą chcesz rozwijać, i od przeglądu obecnej strony oraz danych." },
    { title: "Wycena zależna od zakresu", text: "Koszt zależy od wielkości serwisu, stanu technicznego, liczby ofert i potrzebnych treści. Przed startem rozpisujemy zadania, koszty dodatkowe i sposób akceptacji." },
    { title: "Przegląd wyników", text: "Raport łączy listę zmian z danymi z Search Console i dostępnym pomiarem kontaktów." },
  ],
  related: {
    title: "Działasz także w innych miastach?",
    text: "Firmy z Warmii i Mazur często obsługują klientów również w sąsiednich regionach. Zobacz zakres pracy dla Elbląga, Gdańska i Białegostoku.",
    links: [
      { href: "/pozycjonowanie/elblag", label: "Pozycjonowanie Elbląg" },
      { href: "/seo/pozycjonowanie-gdansk", label: "Pozycjonowanie Gdańsk" },
      { href: "/uslugi/pozycjonowanie/bialystok", label: "Pozycjonowanie Białystok" },
    ],
  },
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Olsztynie?", answer: "Wycenę przygotowujemy po poznaniu strony, oferty i celu. Zakres może obejmować jednorazowy audyt, naprawę techniczną albo stałą obsługę." },
    { question: "Czy SEO opłaca się małej firmie w Olsztynie?", answer: "Zależy to od popytu, konkurencji i możliwości obsługi zapytań. Często wystarczy zacząć od jednej oferty i wizytówki." },
    { question: "Czy gwarantujecie pierwsze miejsce w Google?", answer: "Nie. Nikt nie może zagwarantować konkretnej pozycji. Zobowiązujemy się do uzgodnionych prac, terminów i raportowania." },
    { question: "Czy macie biuro w Olsztynie?", answer: "Nie. Zespół FOTZ Studio pracuje w Poznaniu, a firmy z Olsztyna obsługujemy zdalnie." },
    { question: "Czy SEO trzeba prowadzić stale?", answer: "Jednorazowe poprawki mogą usunąć błędy, ale konkurencja i wyniki się zmieniają. O stałej obsłudze decydujemy na podstawie danych." },
    { question: "Czy muszę mieć nową stronę?", answer: "Niekoniecznie. Najpierw sprawdzamy obecną witrynę. Przebudowę proponujemy tylko wtedy, gdy ograniczenia uniemożliwiają potrzebne zmiany." },
  ],
};

export default function PozycjonowanieOlsztyn() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
