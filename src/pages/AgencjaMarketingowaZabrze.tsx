import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const scope = [
  {
    title: "Pozycjonowanie lokalne i wizytówka Google",
    text: "Jeśli obsługujesz klientów na miejscu, sprawdzimy, czy w wyszukiwarce znajdują właściwą usługę, numer telefonu, godziny i adres. Przy dojazdach ustalimy faktyczny obszar pracy. Porównamy stronę z tym, o co klienci pytają przed rezerwacją.",
    href: "/pozycjonowanie/zabrze",
    link: "Sprawdź zakres lokalnego SEO",
  },
  {
    title: "Kampanie reklamowe i Google Ads",
    text: "Dla instalatora zapytanie o samą część ma inną wartość niż prośba o pomiar z montażem. Zanim ruszy kampania, dobierzemy słowa, obszar i stronę docelową do tego drugiego zlecenia. Uzgodnimy budżet emisji oraz osobę odpowiedzialną za telefon do klienta. Żeby pozyskiwać nowych klientów na rentowne zlecenia, przypiszemy osobny cel do prośby o pomiar.",
    href: "/performance-marketing/google-ads",
    link: "Poznaj zakres obsługi Google Ads",
  },
  {
    title: "Strony internetowe i sprzedaż online",
    text: "Producent potrzebuje miejsca na rysunki i parametry, a klient umawiający wizytę – prostego wyboru terminu. Zanim zaczniemy projektować stronę, odpowiemy z Tobą na pytanie, do którego z tych kroków ma prowadzić. Przy przebudowie sprawdzamy, które adresy stron WWW już przyciągają kupujących.",
    href: "/uslugi/strony-internetowe/zabrze",
    link: "Zobacz, jak pracujemy nad stroną",
  },
  {
    title: "Social media i fotografia biznesowa",
    text: "Na sesję dobieramy ujęcia, których potrzebuje Twój sprzedawca. W zakładzie może to być detal obrabianej części, zespół przy pracy i gotowy produkt z punktem odniesienia dla skali. Z jednej sesji planujemy zdjęcia na ofertę oraz krótkie publikacje w social mediach.",
    href: "/kontakt?usluga=video&wariant=photo_session#formularz",
    link: "Omów zdjęcia do oferty",
  },
  {
    title: "Logo i projektowanie graficzne",
    text: "Przygotowujemy projekty graficzne do sieci i do druku. Wizytówka, ulotka czy baner mogą odsyłać do tej samej promocji co reklama na telefonie. Przed składem prosimy o specyfikację techniczną. Drukarnia określa format i spady, a my przygotowujemy pliki według tych wytycznych.",
    href: "/agencja-graficzna",
    link: "Zobacz zakres projektów graficznych",
  },
  {
    title: "Obsługa marketingowa i pomiar zgłoszeń",
    text: "Jeżeli kilka osób zajmuje się stroną, kampaniami reklamowymi i obsługą klienta, ustalamy wspólny sposób zapisu zgłoszeń. Umawiamy się na wskaźnik przydatny w obsłudze klienta, na przykład czas do oddzwonienia. W raporcie możesz zobaczyć, które działania marketingowe przyniosły pytania o wycenę, ile z nich obsłużył handlowiec i gdzie warto poprawić ofertę.",
    href: "/kontakt?usluga=marketing#formularz",
    link: "Opisz nam swój proces sprzedaży",
  },
];

const sections = [
  {
    title: "Szukasz w Google „agencja reklamowa Zabrze”? Jak porównać oferty?",
    text: "Na pierwszą rozmowę wystarczy oferta i przykład ostatniego wartościowego zlecenia. Pytamy, co klient musiał wiedzieć przed zakupem, jak trafił do firmy i co mogło zatrzymać go przed kontaktem. Dla serwisu obsługującego Zabrze i Gliwice ważny będzie czas dojazdu. Dla dostawcy podzespołów z tego samego miasta liczą się tolerancje, minimalna seria i termin dostawy. Otrzymasz propozycję działań z kolejnością prac, osobą do akceptacji i sposobem oceny.",
  },
  {
    title: "Wycena kampanii. Ile kosztuje kompleksowy marketing firmy?",
    text: "Poniższe stawki służą do porównania zakresów. Przed zleceniem podamy w wycenie kwotę netto, VAT i pełną cenę do zapłaty. Ustalimy też, co powstanie jednorazowo, co zrobimy co miesiąc i jakie materiały dostarcza firma. Budżet zakupu reklam ustalamy osobno.",
    points: [
      "Start – 1 500 zł miesięcznie. Strona do pięciu podstron, podstawowe SEO, profil firmy w Google i konfiguracja profili społecznościowych.",
      "Rozwój – 3 500 zł miesięcznie. Nowa strona lub przebudowa, pozycjonowanie, kampania Google Ads, kampanie w mediach społecznościowych i raport.",
      "Premium – od 7 000 zł miesięcznie. Dedykowany zespół, kompleksowa strategia dla kolejnych etapów sprzedaży, prowadzenie kampanii w kilku kanałach i bieżąca optymalizacja.",
    ],
  },
  {
    title: "Realizacja FOTZ dla producenta. Jak pokazać kupującemu skomplikowany produkt?",
    text: "Dla Fabryki Pojazdów Szynowych w Poznaniu przygotowaliśmy stronę internetową. W portfolio możesz obejrzeć sam projekt i sposób prezentacji pojazdów. Jeżeli sprzedajesz rozwiązania techniczne, ustalimy z handlowcem, co kupujący powinien zobaczyć przed wysłaniem specyfikacji. Czasem jest to karta z wymiarami, czasem seria zdjęć dwóch wersji tej samej części.",
    href: "/realizacje/fps-cegielski",
    link: "Obejrzyj stronę Fabryki Pojazdów Szynowych",
  },
  {
    title: "Jak tworzymy sklepy internetowe, strony i konfiguratory dla producentów?",
    text: "W konfiguratorze mebli KLAGEM klient wybiera moduły, wymiary i kolory oraz sprawdza orientacyjną wycenę. Jeśli pytania o zmianę wymiaru stale wracają do Twojego handlowca, możemy zaprojektować prostszy pierwszy krok – tabelę wariantów, formularz z parametrami albo konfigurator. Wybór zależy od liczby kombinacji i sposobu obliczania ceny.",
    href: "/realizacje/klagem",
    link: "Sprawdź konfigurator KLAGEM",
  },
  {
    title: "Jak odróżnić skuteczne kampanie reklamowe od samych kliknięć?",
    text: "Widoczność w Google pokaże, czy strona zaczęła pojawiać się na pytania o konkretną usługę. W formularzu i przy telefonie liczy się kolejny krok. Przykładowo po dwunastu zgłoszeniach można oddzielić rozmowy o dostępnym terminie od pytań spoza obszaru działania. Z handlowcem sprawdzamy, ile rozmów doprowadziło do oferty. To pomaga zdecydować, czy zmienić treść reklamy, warunki na stronie czy sposób odpowiedzi klientowi.",
  },
  {
    title: "Od logo do wizytówki. Jak łączymy projekt reklamy z drukiem?",
    text: "Planujesz zmianę adresu salonu? Poza stroną i profilem w Google warto wtedy poprawić również ulotkę, wizytówkę i oznaczenie wejścia. Przygotujemy projekt graficzny na podstawie wymiarów powierzchni i księgi identyfikacji wizualnej. Gdy potrzebny jest druk wielkoformatowy lub oklejanie samochodów, prześlij specyfikację wybranego wykonawcy. Drukarnia potwierdza technikę i podłoże, a produkcję i montaż ustalasz z wykonawcą przed zamówieniem.",
  },
  {
    title: "Kompleksowe usługi marketingowe. Kiedy wystarczy jedna poprawka?",
    text: "Jeżeli nowi klienci bez trudu znajdują Twój zakład, ale telefonują po dane dostępne tylko w papierowym katalogu, zacznijmy od udostępnienia tych informacji na stronie. Jeśli uruchamiasz nową linię produktów, potrzebne mogą być jednocześnie zdjęcia, karty ofertowe i zapowiedź w mediach społecznościowych. Takie kompleksowe działania rozpiszemy na etapy, żeby publikacja strony i start reklamy miały wspólny termin. Na konsultacji wybierzemy najkrótszą drogę od pytania kupującego do rozmowy z handlowcem.",
  },
  {
    title: "Doradztwo przed kampanią. Co omówić z osobą odpowiedzialną za sprzedaż?",
    text: "Które zapytania rzeczywiście kończą się zleceniem? Gdy firma oferuje i serwis maszyn, i części zamienne, każda z tych usług ma inny czas realizacji oraz marżę. Oznacz je oddzielnie w swoim zestawieniu. Przy wyborze strategii reklamowych sprawdzimy, na które zlecenia masz dziś wolne moce. Takie doradztwo zaczynamy od rozmowy z osobą pracującą w obsłudze klienta, która zna najczęstsze pomyłki kupujących.",
  },
  {
    title: "Wizytówka Google i strona internetowa. Jak ułatwić kontakt w Zabrzu?",
    text: "Wpisz w telefonie nazwę usługi i dzielnicy, którą obsługujesz, na przykład serwis rowerowy w Mikulczycach. Popatrz na ofertę oczami osoby, która chce przyjechać po pracy. Czy na stronie i w profilu widzi te same godziny? Czy może zapytać o naprawę swojego typu roweru? Zwiększenie widoczności pomoże dopiero wtedy, gdy zainteresowany wie, jak umówić termin. Jeśli masz kilka punktów na Śląsku, dla każdego sprawdzimy właściwy numer i wskazówki dojazdu.",
  },
  {
    title: "Jak zaprojektować próbki i gadżety na targi branżowe?",
    text: "Na targach gość bierze do ręki próbkę. Czy po powrocie do biura znajdzie ten sam wariant w katalogu? Ustalamy znakowanie próbek kodem modelu oraz krótki adres z parametrami i kontaktem do handlowca. Jeśli zamawiasz gadżety, sprawdzamy projekt w rzeczywistej wielkości. Smycz ma mniej miejsca na nazwę niż baner, więc drobny napis może wymagać uproszczenia. Przed zatwierdzeniem serii możesz ocenić czytelność na wydruku próbnym.",
  },
];

const faqs = [
  {
    question: "Jak wygląda współpraca i dojazd na sesję?",
    answer: "FOTZ Studio pracuje z Poznania. Plan i projekty omawiamy online. Jeśli potrzebujesz sesji w zakładzie, ustalamy wcześniej adres, termin, dojazd i warunki zdjęć na miejscu.",
  },
  {
    question: "Czy mogę zamówić jeden projekt zamiast stałej obsługi?",
    answer: "Tak. Możesz zlecić projekt graficzny, sesję, audyt albo stronę internetową. W wycenie jednorazowej określamy rezultat, formaty plików, termin i zakres poprawek.",
  },
  {
    question: "Czy tworzycie sklepy internetowe dla producentów?",
    answer: "Tak. Przy projekcie sklepu internetowego pytamy o produkty, warianty, sposób dostawy i płatności. Jeśli każde zamówienie wymaga rozmowy technicznej, rozważymy katalog z zapytaniem ofertowym.",
  },
  {
    question: "Jak wycenić projekt materiałów reklamowych na druk wielkoformatowy?",
    answer: "Prześlij wymiary powierzchni, zdjęcie miejsca i specyfikację wykonawcy. Przygotowanie projektu i pliku do druku ma osobny zakres. Jeśli zamówienie obejmuje również wykonanie szyldu lub montaż, wskaż to w briefie, aby ustalić odpowiedzialność i koszt przed akceptacją.",
  },
  {
    question: "Co podać, aby otrzymać wycenę działań marketingowych?",
    answer: "Napisz, co sprzedajesz, komu i w jakim obszarze. Dołącz link do oferty i wskaż jeden priorytet, na przykład zapytania o wybrany produkt. Jeśli masz już stronę lub kampanię, przyda się także opis miejsca, w którym zwykle urywa się rozmowa.",
  },
];

export default function AgencjaMarketingowaZabrze() {
  return <>
    <SEOHead
      title="Agencja marketingowa Zabrze – agencja reklamowa FOTZ"
      description="Agencja marketingowa dla firm z Zabrza. Jak planujemy skuteczne kampanie reklamowe? Zobacz cennik obsługi i realizacje. Zapytaj o reklamę i wycenę projektu."
      canonical="https://www.fotz-studio.pl/agencja-marketingowa/zabrze"
    />
    <ServiceEditorial
      title="Agencja marketingowa dla firm z Zabrza – reklama online i projekty do druku"
      eyebrow="FOTZ Studio · współpraca online"
      path="/agencja-marketingowa/zabrze"
      area="Zabrze"
      lead="Chcesz otrzymywać więcej zapytań o usługę w Zabrzu czy dotrzeć do odbiorców w całej Polsce? Podeślij adres strony i przykład zamówienia, jakiego szukasz. W FOTZ Studio ustalimy, co wymaga poprawy przed wydaniem pieniędzy na reklamę. Pierwszą rozmowę możemy przeprowadzić online."
      priceNote="Pakiety obsługi od 1 500 zł miesięcznie. Budżet na emisję reklam ustalamy osobno."
      contactLabel="Zapytaj o wycenę marketingu"
      contactDescription="Podeślij adres strony i napisz, jakiego zlecenia szukasz. Jeśli potrzebujesz zdjęć na miejscu, podaj też lokalizację i preferowany termin."
      summary={[
        "Zobacz, jak połączyć lokalne SEO z telefonami i zapytaniami o usługę.",
        "Porównaj trzy pakiety oraz zakres wyceny jednorazowej.",
        "Sprawdź przykłady stron FOTZ dla producentów FPS i KLAGEM.",
      ]}
      scopeTitle="Agencja reklamowa – Zabrze i okolice. Co możesz zlecić?"
      scope={scope}
      sections={sections}
      faqs={faqs}
      faqTitle="Pytania o współpracę z agencją marketingową"
      workAfterScope
      galleryExcludeHero
    />
  </>;
}
