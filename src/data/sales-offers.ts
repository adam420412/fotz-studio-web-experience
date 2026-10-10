import type { SalesOfferProps } from '@/components/SalesOffer';
const webEvidence = [
  { title: 'FPS Poznań', text: 'Strona Fabryki Pojazdów Szynowych: prezentacja firmy przemysłowej i jej oferty. Zobacz układ oraz materiały z projektu.', href: '/realizacje/fps-cegielski' },
  { title: 'RPPG', text: 'Strona Rady Polskich Przedsiębiorców Globalnych. Projekt dla organizacji biznesowej z informacjami o jej działalności.', href: '/realizacje/rppg' },
  { title: 'Klagem', text: 'Prezentacja usług odszkodowawczych. Przykład uporządkowania specjalistycznej oferty i jej oprawy wizualnej.', href: '/realizacje/klagem' },
];
const filmEvidence = [
  { title: 'CUPRA × Enea Stadion', text: 'Spot łączący samochód i przestrzeń stadionu. Odtwórz materiał powyżej lub przejdź do jego oryginalnej publikacji.', href: '/realizacje/enea-stadion' },
  { title: 'Wydarzenia na stadionie', text: 'Kadry z wydarzeń sportowych i koncertów. Różne tematy, tempo montażu i formaty przeznaczone do komunikacji miejsca.', href: '/realizacje/enea-stadion' },
  { title: 'Gierky Activity Bar', text: 'Materiały pokazujące wnętrze i charakter miejsca. Przykład pracy nad prezentacją przestrzeni dla gości.', href: '/realizacje/gierki' },
];
export const websiteOffer: SalesOfferProps = {
  path: '/uslugi/strony-internetowe', service: 'web',
  title: 'Tworzenie stron internetowych dla firm — zakres i wycena | FOTZ',
  description: 'Strony firmowe, sklepy i przebudowa istniejących witryn. Zobacz projekty FPS, RPPG i Klagem, zakres prac oraz zasady wyceny strony w FOTZ Studio.',
  heading: 'Strona, która jasno pokazuje Twoją ofertę.', eyebrow: 'Strony internetowe dla firm · FOTZ Studio',
  lead: 'Projektujemy i wdrażamy strony firmowe, landing pages oraz sklepy. Łączymy treść, wygląd i działający kontakt, żeby klient wiedział, co oferujesz i jak zrobić kolejny krok.',
  cta: 'Wyceń moją stronę', hero: 'fps', caption: 'FPS Poznań — projekt strony z portfolio FOTZ Studio.', evidence: webEvidence,
  options: [
    { title: 'Nowa strona firmowa', text: 'Dla firmy, która potrzebuje czytelnej prezentacji usług i miejsca do zbierania zapytań.', detail: 'Struktura, projekt, wdrożenie, formularz oraz przekazanie obsługi. Liczbę podstron i treści ustalamy w wycenie.', variant: 'website' },
    { title: 'Przebudowa strony', text: 'Dla firmy, której obecna witryna jest nieaktualna, trudna w edycji lub niewygodna na telefonie.', detail: 'Najpierw sprawdzamy istniejące adresy, treści i pomiar. Ustalamy migrację oraz przekierowania przed publikacją.', variant: 'redesign' },
    { title: 'Sklep internetowy', text: 'Dla marki, która chce sprzedawać produkty online i uporządkować obsługę zamówień.', detail: 'Katalog, koszyk, płatności, dostawy i integracje dobieramy do procesów firmy. Testujemy uzgodnioną ścieżkę zakupu.', variant: 'shop' },
  ],
  scope: [
    { title: 'Struktura i treść', text: 'Ustalamy odbiorców, ofertę, podstrony i informacje potrzebne do decyzji. Określamy, kto dostarcza teksty i zdjęcia.' },
    { title: 'Projekt na telefon i komputer', text: 'Pokazujemy układ, typografię i sposób prezentacji oferty. Uzgadniamy projekt oraz rundy uwag przed wdrożeniem.' },
    { title: 'Formularze i integracje', text: 'Wybieramy sposób kontaktu, odbiorców wiadomości i potrzebne połączenia. Dostarczenie zgłoszenia jest osobnym punktem odbioru.' },
    { title: 'Podstawy SEO', text: 'Porządkujemy adresy, nagłówki, metadane, linkowanie i możliwość indeksowania. Przy przebudowie uwzględniamy stare adresy.' },
    { title: 'Testy przed publikacją', text: 'Sprawdzamy nawigację, formularze, kluczowe funkcje i widoki mobilne. Hosting, domenę i licencje rozpisujemy w ofercie.' },
    { title: 'Edycja i utrzymanie', text: 'Dobieramy CMS do tego, co chcesz edytować. Ustalamy przekazanie dostępów, instrukcję i zakres dalszej opieki.' },
  ],
  pricing: 'Mały zakres może zacząć się od pakietu WWW START: 1490 zł netto za One Page do 5 sekcji na szablonie FOTZ, z materiałami klienta i jedną rundą poprawek. Domena i hosting są osobno. Stronę z indywidualnym projektem, większą liczbą podstron, sklepem lub integracjami wyceniamy według zakresu.',
  pricingHref: '/cennik-stron-internetowych', pricingLabel: 'Porównaj zakresy i pełne warunki wyceny',
  steps: [
    { title: 'Cel i zakres', text: 'Przesyłasz opis firmy lub adres obecnej strony. Uzgadniamy funkcje, materiały, budżet i etapy.' },
    { title: 'Projekt i wdrożenie', text: 'Akceptujesz kierunek wizualny i treść. Budujemy stronę oraz podłączamy uzgodnione funkcje.' },
    { title: 'Odbiór i publikacja', text: 'Przechodzimy najważniejsze ścieżki klienta. Po odbiorze publikujemy i przekazujemy instrukcję obsługi.' },
  ],
  faqs: [
    { question: 'Ile trwa stworzenie strony?', answer: 'Harmonogram zależy od liczby podstron, funkcji, treści oraz czasu na akceptację. Termin podajemy po poznaniu zakresu i dostępności materiałów. Zmiany zakresu ustalamy przed dodatkowymi pracami.' },
    { question: 'Czy przygotujecie teksty i zdjęcia?', answer: 'Możemy je przygotować jako element oferty. W pakiecie WWW START teksty, logo i zdjęcia dostarcza klient. Copywriting, sesję zdjęciową i produkcję filmu wyceniamy osobno.' },
    { question: 'Czy będę samodzielnie edytować stronę?', answer: 'Jeśli edycja jest potrzebna, dobieramy odpowiedni CMS i zakres pól. Podczas przekazania pokazujemy uzgodnione operacje. Nie każda integracja lub zmiana układu jest edycją treści.' },
    { question: 'Co stanie się ze starymi adresami i pozycjami?', answer: 'Przed migracją sprawdzamy ważne adresy i planujemy przekierowania, zachowanie treści oraz kontrolę po publikacji. Przebudowa nie jest gwarancją utrzymania każdej pozycji; zmiany monitorujemy w Search Console.' },
    { question: 'Czy SEO jest w cenie strony?', answer: 'Oferta może obejmować przygotowanie techniczne i podstawowe metadane. Regularne pozycjonowanie, rozwój treści i raportowanie to osobny zakres. Wskazujemy w wycenie, co dokładnie otrzymasz.' },
    { question: 'Czy strona zagwarantuje zapytania?', answer: 'Strona ma pomóc klientom zrozumieć ofertę i nawiązać kontakt. Liczba zapytań zależy także od ruchu, dopasowania oferty, konkurencji i obsługi sprzedaży. Ustalamy pomiar, aby sprawdzać te etapy osobno.' },
  ],
};
export const seoOffer: SalesOfferProps = {
  path: '/seo/pozycjonowanie', service: 'seo', title: 'Pozycjonowanie stron — audyt, wdrożenia i rozwój SEO | FOTZ',
  description: 'SEO dla firm: diagnoza w Search Console, poprawki techniczne, treści ofertowe i pomiar zapytań. Sprawdź zakres współpracy z FOTZ Studio i zapytaj o swoją stronę.',
  heading: 'SEO zaczyna się od oferty, którą warto znaleźć.', eyebrow: 'Pozycjonowanie stron · FOTZ Studio',
  lead: 'Sprawdzamy, jak klienci szukają Twoich usług i co przeszkadza im trafić na stronę. Układamy plan, wdrażamy uzgodnione poprawki i oceniamy widoczność, wejścia oraz zapytania.',
  cta: 'Omów SEO mojej strony', hero: 'klagem', caption: 'Klagem — przykład projektu strony z naszego portfolio. Zdjęcie pokazuje realizację, nie deklarowany wynik pozycjonowania.', evidence: webEvidence,
  options: [
    { title: 'Audyt i plan wdrożeń', text: 'Masz stronę, ale nie wiesz, co poprawić w pierwszej kolejności.', detail: 'Lista problemów z przykładami adresów, oceną znaczenia i propozycją działań. Wdrożenia mogą być osobnym etapem.', variant: 'audit' },
    { title: 'Stały rozwój SEO', text: 'Potrzebujesz regularnej pracy nad ofertą, treściami i techniczną kondycją strony.', detail: 'Uzgodnione zadania, odpowiedzialność za publikację, raport oraz kolejne priorytety. Zakres dopasowujemy do możliwości firmy.', variant: 'ongoing' },
    { title: 'SEO przy przebudowie', text: 'Zmieniasz stronę, system lub strukturę adresów i chcesz przygotować migrację.', detail: 'Spis ważnych adresów, przekierowania, kontrola treści i indeksowania oraz porównanie danych po wdrożeniu.', variant: 'redesign' },
  ],
  scope: [
    { title: 'Diagnoza w Google', text: 'Czytamy Search Console, sprawdzamy indeksowanie i zapytania dla konkretnych ofert. Oddzielamy ruch związany z marką od nowych odbiorców.' },
    { title: 'Priorytety biznesowe', text: 'Wybieramy usługi, odbiorców i obszar działania. Najpierw rozwijamy podstrony odpowiadające na pytania potencjalnych klientów.' },
    { title: 'Poprawki techniczne', text: 'Sprawdzamy adresy, przekierowania, kanoniczność, nagłówki, linki i dostępność treści. Każdą zmianę weryfikujemy po publikacji.' },
    { title: 'Treści i realizacje', text: 'Porządkujemy zakres oferty, koszty, pytania i przykłady pracy. Opieramy treść na tym, co firma rzeczywiście robi.' },
    { title: 'Widoczność lokalna', text: 'Jeśli firma obsługuje dany obszar, dopasowujemy informacje lokalne i powiązania z Profilem Firmy w Google. Nie tworzymy fikcyjnych oddziałów.' },
    { title: 'Pomiar kontaktów', text: 'Ustalamy pomiar formularzy i kliknięć kontaktu. Zgłoszenie, kwalifikacja klienta i sprzedaż są osobnymi etapami raportu.' },
  ],
  pricing: 'Koszt wynika z kondycji strony, liczby ofert, konkurencji i odpowiedzialności za wdrożenia. Możesz zacząć od audytu albo uzgodnionego zestawu poprawek. Przy stałej współpracy określamy zadania, budżet, rytm raportów i zasady zakończenia. Koszty treści, narzędzi lub publikacji zewnętrznych wskazujemy osobno.',
  pricingHref: '/cennik-pozycjonowania', pricingLabel: 'Zobacz, co wpływa na koszt SEO',
  steps: [
    { title: 'Punkt wyjścia', text: 'Poznajemy ofertę i dostępne dane. Ustalamy, jakie zapytania mają wartość dla firmy i które strony wymagają pracy.' },
    { title: 'Plan i wdrożenia', text: 'Wybieramy zadania, osobę akceptującą treść oraz wykonawcę zmian. Sprawdzamy rezultat techniczny po publikacji.' },
    { title: 'Raport i decyzja', text: 'Porównujemy odpowiednie okresy, uwzględniając sezonowość i datę wdrożenia. Raport kończymy priorytetami na następny etap.' },
  ],
  faqs: [
    { question: 'Czy pierwsza rozmowa obejmuje pełny audyt?', answer: 'Nie. Podczas pierwszej rozmowy ustalamy cel i potrzebne informacje. Pełny audyt z analizą i listą zaleceń ma odrębny, uzgodniony zakres oraz cenę.' },
    { question: 'Kiedy można oceniać efekty SEO?', answer: 'Najpierw potwierdzamy wdrożenie i możliwość odczytania zmian przez wyszukiwarkę. Widoczność oceniamy na kolejnych porównywalnych okresach. Tempo zależy od stanu strony, konkurencji i skali zmian; nie ustalamy jednej gwarantowanej daty dla wszystkich projektów.' },
    { question: 'Czy gwarantujecie TOP 10 albo liczbę leadów?', answer: 'Nie. Zobowiązujemy się do uzgodnionych prac, ich weryfikacji i raportowania. Pozycje oraz liczba zapytań zależą także od konkurencji, oferty i zachowań odbiorców.' },
    { question: 'Kto wdraża zalecenia?', answer: 'Ustalamy to w ofercie. Możemy pracować nad wdrożeniem albo przygotować zadania dla opiekuna strony. Sam raport nie oznacza, że wskazane poprawki zostały opublikowane.' },
    { question: 'Czy trzeba tworzyć nowe podstrony dla każdego miasta?', answer: 'Tylko jeśli strona wnosi przydatne informacje o rzeczywiście obsługiwanym obszarze. Najpierw sprawdzamy istniejące oferty, intencje wyszukiwania i dane. Liczba podstron sama w sobie nie jest celem.' },
    { question: 'Co będzie w raporcie?', answer: 'Wykonane prace, ważne zmiany indeksowania, zapytania i kliknięcia dla ofert oraz dostępne dane o kontaktach. Ruch, zapytania i sprzedaż pokazujemy osobno. Ustalamy także następne zadania i osoby odpowiedzialne.' },
  ],
};
export const filmOffer: SalesOfferProps = {
  path: '/uslugi/produkcja-filmow', service: 'video', title: 'Produkcja filmów dla firm — realizacje, zakres i wycena | FOTZ',
  description: 'Filmy firmowe, relacje z wydarzeń i rolki. Zobacz produkcje CUPRA × Enea Stadion i materiały FOTZ Studio. Scenariusz, nagrania, montaż i wersje do publikacji.',
  heading: 'Pokaż firmę w dobrym filmie.', eyebrow: 'Produkcja filmów · Poznań i nagrania wyjazdowe',
  lead: 'Od pomysłu i listy ujęć po nagrania, montaż oraz gotowe pliki. Tworzymy filmy dla firm, relacje z wydarzeń i rolki do social media. Ustalamy, co widz ma zobaczyć i gdzie wykorzystasz materiał.',
  cta: 'Wyceń film lub rolki', hero: 'backstage', caption: 'Praca zespołu FOTZ Studio na planie sesji — własny materiał z realizacji.', films: true, evidence: filmEvidence,
  options: [
    { title: 'Film o firmie lub produkcie', text: 'Chcesz pokazać ludzi, proces, miejsce albo sposób działania produktu.', detail: 'Uzgadniamy scenariusz, rozmówców, lokalizacje, ujęcia i docelową długość. Przed planem potwierdzamy harmonogram.', variant: 'film' },
    { title: 'Rolki i krótkie formaty', text: 'Potrzebujesz serii materiałów do firmowego profilu lub kampanii.', detail: 'Lista tematów, nagrania, montaż, napisy oraz ustalone warianty. Prowadzenie profilu i emisję reklam wyceniamy osobno.', variant: 'reels' },
    { title: 'Spot reklamowy', text: 'Masz konkretną ofertę i potrzebujesz materiału do jej promocji.', detail: 'Przekaz, scenariusz, produkcja i wersje dopasowane do kanałów. Sprawdź także dedykowaną ofertę spotów reklamowych.', variant: 'spot' },
  ],
  scope: [
    { title: 'Cel i koncepcja', text: 'Ustalamy odbiorców, temat oraz miejsca publikacji. Dobieramy formę do informacji, które widz powinien zapamiętać.' },
    { title: 'Scenariusz i przygotowanie', text: 'Rozpisujemy ujęcia, wypowiedzi, rekwizyty i osoby na planie. Potwierdzamy dostępność lokalizacji oraz potrzebne zgody.' },
    { title: 'Dzień zdjęciowy', text: 'Określamy czas, ekipę, światło i dźwięk. Dron, studio, aktorów oraz dojazd uwzględniamy, jeśli wymagają tego ujęcia.' },
    { title: 'Montaż i dźwięk', text: 'Układamy materiał, opracowujemy kolor i dźwięk. Napisy, muzykę i dodatkową animację określamy w zakresie.' },
    { title: 'Wersje do publikacji', text: 'Ustalamy proporcje, długości, miniatury i wersje językowe. Inaczej przygotowujemy materiał na stronę, inaczej do rolki.' },
    { title: 'Odbiór i wykorzystanie', text: 'Umawiamy rundy poprawek i format przekazania. Wyjaśniamy zakres licencji, wykorzystania muzyki i ewentualnego przekazania surowych nagrań.' },
  ],
  pricing: 'Pakiet WIDEO START kosztuje 1490 zł netto: 3 pionowe rolki po 15–30 sekund, do 90 minut nagrań w jednej lokalizacji w Poznaniu, montaż, proste napisy, muzyka i jedna runda drobnych poprawek. Dron, aktor, studio, lektor, osobna sesja zdjęciowa, publikacja i reklamy są poza pakietem. Dojazd poza Poznań oraz większe produkcje wyceniamy osobno.',
  pricingHref: '/kampanie/wideo.html', pricingLabel: 'Zobacz pełny zakres WIDEO START',
  steps: [
    { title: 'Brief i plan', text: 'Przesyłasz temat, przykład kierunku i termin. Przygotowujemy zakres, plan nagrań i wycenę.' },
    { title: 'Nagrania i montaż', text: 'Realizujemy uzgodnione ujęcia. Pokazujemy wersję do akceptacji i zbieramy uwagi w ustalonych rundach.' },
    { title: 'Gotowe materiały', text: 'Otrzymujesz pliki w umówionych formatach. Publikację, dalszą obsługę oraz kampanię możemy wycenić jako osobny etap.' },
  ],
  faqs: [
    { question: 'Czy muszę mieć własny scenariusz?', answer: 'Nie. Wystarczy cel, temat i informacja, gdzie chcesz użyć filmu. Przygotowanie koncepcji i scenariusza możemy uwzględnić w ofercie.' },
    { question: 'Czy nagrywacie poza Poznaniem?', answer: 'Tak, miejsce nagrań i dostępność ekipy ustalamy przed potwierdzeniem. Dojazd, nocleg lub wynajem lokalizacji rozpisujemy osobno, jeśli są potrzebne.' },
    { question: 'Ile trwa realizacja filmu?', answer: 'Termin zależy od przygotowania, liczby lokalizacji, dni zdjęciowych i montażu. Uzgadniamy go po poznaniu zakresu oraz dostępności uczestników. Pilny termin wymaga sprawdzenia grafiku.' },
    { question: 'Czy otrzymam wersje pionową i poziomą?', answer: 'Tak, jeśli obejmuje je oferta. Warto określić formaty przed nagraniem, żeby zaplanować kadry i napisy. Dodatkowe wersje wpływają na zakres montażu.' },
    { question: 'Czy cena obejmuje publikowanie i reklamy?', answer: 'Produkcja materiałów, prowadzenie profilu, obsługa kampanii i budżet reklamowy są oddzielnymi zakresami. Możemy je połączyć w jednej ofercie, z wyraźnym podziałem kosztów.' },
    { question: 'Czy mogę wykorzystać film w reklamie?', answer: 'Sposób wykorzystania ustalamy w ofercie i umowie. Sprawdzamy zakres praw do muzyki, wizerunku, materiałów zewnętrznych i udziału wykonawców dla wybranych kanałów.' },
  ],
};
export const spotOffer: SalesOfferProps = {
  ...filmOffer, path: '/uslugi/produkcja-video', title: 'Spoty reklamowe — CUPRA i produkcje FOTZ Studio',
  description: 'Zobacz spot CUPRA × Enea Stadion i zapytaj o produkcję reklamy wideo. Pomysł, scenariusz, nagrania i montaż do Meta Ads, YouTube oraz publikacji marki.',
  heading: 'Spot reklamowy z konkretnym przekazem.', eyebrow: 'Spoty reklamowe · produkcja FOTZ Studio',
  lead: 'Pokaż produkt, usługę lub miejsce w materiale dopasowanym do kampanii. Ustalimy przekaz, przygotujemy scenariusz i produkcję, a na końcu przekażemy wersje do wybranych kanałów.',
  cta: 'Wyceń spot reklamowy', hero: 'stadium', caption: 'Enea Stadion w naszym obiektywie. Poniżej zobaczysz spot CUPRA × Enea Stadion oraz inne materiały.',
  options: [
    { title: 'Spot marki lub produktu', text: 'Jedna konkretna oferta, pomysł wizualny i jasno określony odbiorca.', detail: 'Koncepcja, scenariusz, nagrania i montaż. Liczbę wersji, czas emisji i zakres praw zapisujemy w ofercie.', variant: 'spot' },
    { title: 'Materiały do testu reklam', text: 'Kilka wariantów początku, argumentu lub zakończenia do jednej kampanii.', detail: 'Warianty planujemy przed nagraniem. Wyniki kreacji oceniamy osobno od technicznego odbioru gotowych plików.', variant: 'ad_variants' },
    { title: 'Film i krótkie wersje', text: 'Potrzebujesz szerszej prezentacji na stronę oraz skrótów do social media.', detail: 'Rozpisujemy wspólne ujęcia, docelowe długości i proporcje. Dzięki temu zakres obejmuje wszystkie uzgodnione zastosowania.', variant: 'film' },
  ],
  pricing: 'Koszt spotu zależy od pomysłu, liczby scen, lokalizacji, ekipy, uczestników oraz montażu. Wycena określa także wersje do publikacji, poprawki i prawa wykorzystania. Produkcja reklamy, obsługa kampanii oraz opłaty za emisję są oddzielnymi pozycjami. Dla prostych pionowych materiałów sprawdź dostępny pakiet WIDEO START.',
  pricingHref: '/cennik', pricingLabel: 'Porównaj zakres produkcji i pakiet WIDEO START',
};
