import type { SalesOfferProps } from '@/components/SalesOffer';

export const companyWebsiteOffer: SalesOfferProps = {
  path: '/uslugi/strony-internetowe-dla-firm', service: 'web',
  title: 'Strony internetowe dla firm — projekt i wycena | FOTZ Studio',
  description: 'Tworzymy strony internetowe dla firm usługowych i produkcyjnych. Zobacz realizacje, zakres projektu, zasady wyceny i opisz stronę swojej firmy.',
  heading: 'Strony internetowe dla firm, które ułatwiają kontakt.',
  eyebrow: 'Projektowanie i tworzenie stron internetowych',
  lead: 'Klient powinien szybko zrozumieć, czym zajmuje się Twoja firma, zobaczyć jej realizacje i wiedzieć, o co może zapytać. Projektujemy strony firmowe z czytelną ofertą, prawdziwymi zdjęciami oraz krótką drogą od pierwszego wejścia do rozmowy.',
  cta: 'Opisz stronę swojej firmy', hero: 'rppg',
  caption: 'RPPG — strona organizacji biznesowej zaprojektowana przez FOTZ Studio.',
  evidence: [
    { title: 'FPS Poznań — przemysł', text: 'Prezentacja Fabryki Pojazdów Szynowych i jej oferty. Przykład strony dla firmy produkcyjnej z materiałami o działalności i produktach.', href: '/realizacje/fps-cegielski' },
    { title: 'RPPG — organizacja biznesowa', text: 'Strona Rady Polskich Przedsiębiorców Globalnych. Projekt porządkujący informacje o organizacji i jej aktywności.', href: '/realizacje/rppg' },
    { title: 'KLAGEM — produkt i konfiguracja', text: 'Strona marki mebli modułowych oraz konfigurator 3D. Klient może dobrać wariant produktu przed wysłaniem zapytania.', href: '/realizacje/klagem' },
  ],
  options: [
    { title: 'Wizytówka małej firmy', text: 'Jedna strona dla jasno określonej oferty: czym się zajmujesz, dla kogo pracujesz i jak się skontaktować.', detail: 'Dobry punkt wyjścia przy niewielkiej liczbie usług i gotowych materiałach. Sprawdź warunki WWW START poniżej.', variant: 'website' },
    { title: 'Strona z podstronami usług', text: 'Dla firmy, której klienci szukają różnych rozwiązań. Każda usługa otrzymuje własny opis, przykłady i kontakt.', detail: 'Ustalamy strukturę, projekt graficzny, treści, zdjęcia, formularze i funkcje potrzebne Twojemu zespołowi.', variant: 'website' },
    { title: 'Przebudowa obecnej witryny', text: 'Gdy strona jest trudna w obsłudze, nie pokazuje aktualnej oferty albo gubi użytkownika przed formularzem.', detail: 'Zaczynamy od istniejących adresów, danych i treści. Planujemy migrację oraz przekierowania ważnych podstron.', variant: 'redesign' },
  ],
  scope: [
    { title: 'Oferta z perspektywy klienta', text: 'Układamy informacje o usługach, obszarze działania i sposobie współpracy. Strona główna kieruje do konkretnego zakresu zamiast powtarzać ogólne hasła.' },
    { title: 'Responsywny projekt strony', text: 'Projektujemy widoki na telefon i komputer. Czytelność tekstu, nawigacja, zdjęcia i przyciski mają ułatwiać korzystanie ze strony również na małym ekranie.' },
    { title: 'Treści i zdjęcia firmy', text: 'Określamy, kto przygotuje teksty, fotografie zespołu i materiały z realizacji. Możemy połączyć tworzenie strony internetowej z sesją lub nagraniami.' },
    { title: 'Przygotowanie pod SEO', text: 'Ustalamy adresy, nagłówki, metadane i linkowanie. Sprawdzamy możliwość indeksowania strony w wyszukiwarce oraz konfigurację Google Search Console.' },
    { title: 'Formularz i pomiar zapytań', text: 'Dobieramy pola do rodzaju usługi. W odbiorze uwzględniamy test dostarczenia wiadomości i uzgodniony pomiar konwersji z uwzględnieniem zgód użytkownika.' },
    { title: 'Edycja i utrzymanie', text: 'Dobieramy CMS, np. WordPress, do faktycznych potrzeb. Uzgadniamy edycję oferty, przekazanie dostępów, aktualizacje, kopie zapasowe i opiekę po publikacji.' },
  ],
  pricing: 'Ile kosztuje strona internetowa dla firmy? WWW START to 1490 zł netto za One Page do 5 sekcji na szablonie FOTZ, z materiałami klienta i jedną rundą poprawek. Domena i hosting są osobno. Indywidualny design, dodatkowe podstrony, tworzenie treści, zdjęcia i integracje wymagają osobnej wyceny. Cenę projektu określamy po ustaleniu funkcjonalności i odpowiedzialności za materiały.',
  pricingHref: '/cennik-stron-internetowych', pricingLabel: 'Sprawdź cennik i zakres WWW START',
  steps: [
    { title: 'Poznajemy firmę i odbiorców', text: 'Przesyłasz obecną stronę, opis usług i przykłady realizacji. Ustalamy, jakie pytania zadaje klient przed zakupem oraz jakie działania ma umożliwiać nowa strona.' },
    { title: 'Projektujemy i wdrażamy', text: 'Akceptujesz strukturę, kierunek graficzny i teksty. Budujemy witrynę, wprowadzamy materiały i konfigurujemy uzgodnione funkcje.' },
    { title: 'Testujemy i przekazujemy', text: 'Przechodzimy ścieżkę od oferty do kontaktu. Sprawdzamy widoki mobilne, linki i formularze, publikujemy stronę oraz przekazujemy instrukcję obsługi.' },
  ],
  guidance: [
    { title: 'Jaka strona www dla firmy usługowej, a jaka dla producenta?', text: 'Projekt strony zależy od decyzji, którą ma podjąć odbiorca. Firma usługowa potrzebuje jasnego zakresu współpracy, a producent często także katalogu i informacji technicznych. Dopasowujemy strukturę do Twojej branży.', points: ['Usługi: opis problemu klienta, zakres prac, realizacje, sposób wyceny i dane kontaktowe przy ofercie.', 'Produkcja i B2B: kategorie produktów, parametry, materiały do pobrania oraz formularz zapytania o konkretny produkt.', 'Rozwój: kolejne języki, sklep lub konfigurator planujemy jako uzgodnione funkcje, z określonym kosztem i terminem.'], link: { label: 'Poznaj także sklepy i pozostałe rozwiązania WWW', href: '/uslugi/strony-internetowe' } },
    { title: 'Co pomaga stronie firmowej zdobywać zapytania?', text: 'Profesjonalna strona www powinna odpowiadać na pytania, które poprzedzają rozmowę z firmą. Sama publikacja nie zapewnia ruchu. Łączymy przejrzysty układ z planem dotarcia do odbiorców i sprawdzamy kolejne etapy kontaktu.', points: ['Wiarygodność: własne realizacje, zakres wykonanej pracy i zdjęcia zamiast anonimowych obietnic.', 'Ruch: pozycjonowanie, kampanie lub social media dobrane do oferty i budżetu Twojej firmy.', 'Ocena: wejścia na ofertę, poprawne wysłanie formularza i jakość rozmów z potencjalnymi klientami.'], link: { label: 'Zobacz, jak pracujemy nad widocznością w Google', href: '/seo/pozycjonowanie' } },
  ],
  faqs: [
    { question: 'Co przygotować do wyceny strony firmowej?', answer: 'Wystarczy opis działalności, lista usług i adres obecnej strony, jeśli ją masz. Wskaż potrzebne funkcje, termin oraz dostępne logo, teksty i zdjęcia. Pomożemy doprecyzować brakujące elementy przed ofertą.' },
    { question: 'Ile trwa proces tworzenia strony internetowej?', answer: 'Termin zależy od liczby podstron, funkcji, materiałów i akceptacji. Harmonogram podajemy po rozmowie o zakresie. Prosta strona na gotowym układzie i rozbudowana witryna z indywidualnym projektem wymagają innego nakładu pracy.' },
    { question: 'Czy mogę samodzielnie zmieniać ofertę?', answer: 'Tak, jeśli w zakresie ustalimy system zarządzania treścią i odpowiednie pola. Pokazujemy obsługę uzgodnionych funkcji. Zmiana całego układu lub nowa integracja może wymagać dodatkowych prac.' },
    { question: 'Czy projektowanie strony obejmuje pozycjonowanie?', answer: 'W wycenie rozdzielamy przygotowanie techniczne pod SEO i późniejsze pozycjonowanie. Regularna optymalizacja, rozwój treści i analiza wyników są osobnym zakresem. Wyszukiwarka samodzielnie decyduje o indeksowaniu i pozycjach.' },
    { question: 'Czy pracujecie z firmami spoza Poznania?', answer: 'Tak, projektowanie stron www prowadzimy także zdalnie. Materiały i akceptacje możemy wymieniać online. Ewentualną sesję zdjęciową, nagrania i dojazd ustalamy osobno.' },
  ],
};

export const facebookOffer: SalesOfferProps = {
  path: '/uslugi/reklama-facebook', service: 'marketing',
  title: 'Reklama na Facebooku i Instagramie — kampanie | FOTZ Studio',
  description: 'Reklama na Facebooku i Instagramie: plan kampanii, kreacje, formularze i pomiar zapytań. Zobacz realizację Dawid EDU i ustal zakres Meta Ads z FOTZ.',
  heading: 'Reklama na Facebooku od oferty do zapytania.',
  eyebrow: 'Facebook Ads i Instagram · FOTZ Studio',
  lead: 'Łączymy kampanię reklamową z tym, co dzieje się po kliknięciu. Przygotowujemy komunikat, grafiki lub wideo, sprawdzamy stronę docelową i sposób odbierania zgłoszeń. Zaczynamy od Twojej oferty oraz celu kampanii, a potem ustalamy budżet i plan testów.',
  cta: 'Opisz cel swojej kampanii', hero: 'bar',
  caption: 'Gierky Activity Bar — fotografia FOTZ Studio. Własne materiały pomagają pokazać charakter marki w komunikacji.',
  evidence: [
    { title: 'Dawid EDU — kampania Meta Ads', text: 'Reklamy rekrutacyjne na Facebooku i Instagramie, kreacje oraz poprawki strony i formularza. Zobacz zakres pracy i raport z opisem ograniczeń pomiaru.', href: '/realizacje/dawid-edu' },
    { title: 'Enea Stadion — materiały marki', text: 'Filmy i zdjęcia pokazujące wydarzenia oraz przestrzeń. Przykład produkcji treści, z których można budować komunikację miejsca.', href: '/realizacje/enea-stadion' },
    { title: 'Gierky — prezentacja miejsca', text: 'Fotografie wnętrza i stref rozrywki. Zobacz nasze materiały wizualne i sposób prezentacji miejsca.', href: '/realizacje/gierki' },
  ],
  options: [
    { title: 'Start kampanii Facebook Ads', text: 'Masz usługę lub produkt, który chcesz promować. Ustalamy odbiorców, ofertę, miejsca emisji i sposób mierzenia celu.', detail: 'Plan kampanii, przygotowanie reklam, kontrola strony docelowej oraz uzgodniona obsługa i raportowanie.', variant: 'meta_ads' },
    { title: 'Reklamy pozyskujące zapytania', text: 'Potrzebujesz kontaktów do osób zainteresowanych konkretną ofertą. Wybieramy formularz Lead Ads albo formularz na stronie.', detail: 'Ustalamy pytania, odbiorcę zgłoszeń, czas reakcji i ewentualne połączenie z CRM. Integrację wyceniamy według systemu.', variant: 'lead_ads' },
    { title: 'Przegląd obecnej kampanii', text: 'Reklamy działają, ale nie wiesz, dlaczego kontakty są drogie lub niedopasowane. Sprawdzamy całą drogę użytkownika.', detail: 'Analiza ustawień, kreacji, budżetu, formularzy i pomiaru. Rekomendacje oraz wdrożenia rozpisujemy osobno.', variant: 'audit' },
  ],
  scope: [
    { title: 'Cel i grupa docelowa', text: 'Ustalamy, kogo ma zainteresować reklama na Facebooku, na jakim obszarze działa firma i co ma zrobić odbiorca. Inaczej planujemy zapytanie o usługę, a inaczej zakup w sklepie internetowym.' },
    { title: 'Konto i dostęp do danych', text: 'Pracujemy na uzgodnionym koncie reklamowym firmy. Porządkujemy potrzebne dostępy w Meta i ustalamy, kto odpowiada za płatności, publikację oraz zatwierdzanie materiałów.' },
    { title: 'Kreacje i format reklamy', text: 'Dobieramy grafiki, karuzele lub reklamy wideo do komunikatu. Przygotowujemy tekst, wezwanie do działania i wersje na uzgodnione miejsca wyświetlania reklam.' },
    { title: 'Formularz i strona docelowa', text: 'Sprawdzamy zgodność reklamy z ofertą, czytelność na urządzeniach mobilnych i działanie przycisków. Ustalamy zakres poprawek przed wydawaniem budżetu na ruch.' },
    { title: 'Pomiar konwersji', text: 'Weryfikujemy uzgodnione zdarzenia, linki kampanii i zgody. Konwersja powinna odpowiadać rzeczywistemu działaniu; kliknięcie przycisku nie potwierdza jeszcze otrzymania zapytania.' },
    { title: 'Optymalizacja i raport', text: 'Porównujemy warianty reklamy, koszty i jakość kontaktów. Raport pokazuje wykonane zmiany oraz wnioski do kolejnego testu, z rozróżnieniem danych Meta i wyników sprzedaży.' },
  ],
  pricing: 'Koszt reklamy na Facebooku dzielimy na budżet emisji opłacany w Meta, przygotowanie materiałów i wynagrodzenie za obsługę. Osobno ustalamy ewentualny landing page, nagrania oraz integrację formularza z CRM. Budżet testu dopasowujemy do celu, rynku i zakresu kampanii; nie podajemy jednej stawki za kontakt dla każdej branży. Wycena określa liczbę materiałów, czas obsługi i sposób raportowania.',
  pricingHref: '#zapytanie', pricingLabel: 'Podaj ofertę i budżet do wyceny kampanii',
  steps: [
    { title: 'Diagnoza i plan', text: 'Przeglądamy ofertę, dotychczasowe kampanie oraz dane o kontaktach. Ustalamy cel, warunki testu i materiały potrzebne do startu.' },
    { title: 'Przygotowanie i uruchomienie', text: 'Akceptujesz kreacje, budżet i miejsce, do którego prowadzi reklama. Sprawdzamy formularz oraz pomiar i uruchamiamy uzgodnione działania.' },
    { title: 'Ocena i kolejne testy', text: 'Analizujemy reklamy razem z informacją od osób obsługujących zapytania. Optymalizujemy komunikaty i kampanię, a zmiany budżetu uzgadniamy.' },
  ],
  guidance: [
    { title: 'Lead Ads czy reklama prowadząca na stronę?', text: 'Formularz w Meta skraca drogę do zgłoszenia. Strona internetowa pozwala wcześniej przedstawić zakres, cenę lub realizacje. Wybór zależy od tego, ile informacji klient potrzebuje przed rozmową.', points: ['Lead Ads: określamy pytania kwalifikujące, treść formularza i sposób przekazania kontaktu do zespołu.', 'Landing page: dopasowujemy nagłówek i ofertę do reklamy oraz sprawdzamy formularz na telefonie.', 'Obsługa: uzgadniamy właściciela zgłoszenia, odpowiedź i status w CRM; samo zebranie danych nie kończy procesu.'], link: { label: 'Zobacz przykład kampanii i poprawionej ścieżki kontaktu', href: '/realizacje/dawid-edu' } },
    { title: 'Dlaczego reklama na Facebooku nie przynosi klientów?', text: 'Niski koszt kliknięcia nie wystarcza, jeśli odbiorca nie rozumie oferty lub nie otrzymuje odpowiedzi. Skuteczność kampanii oceniamy na kilku etapach, żeby znaleźć miejsce wymagające poprawy.', points: ['Brak reakcji na reklamę: sprawdzamy dopasowanie grupy odbiorców, przekaz, format i warianty kreacji.', 'Kliknięcia bez formularzy: kontrolujemy szybkość i treść strony, cenę, dowody realizacji oraz działanie kontaktu.', 'Zapytania bez sprzedaży: zestawiamy koszty reklamy z jakością zgłoszeń, ofertowaniem i informacją z działu sprzedaży.'], link: { label: 'Poznaj szerszy zakres kampanii reklamowych', href: '/kampanie-reklamowe' } },
  ],
  faqs: [
    { question: 'Czy reklamy obejmują Facebook i Instagram?', answer: 'Możemy prowadzić działania w obu kanałach Meta Ads. Dobór miejsc emisji zależy od celu, materiałów i odbiorców. Zakres ustalamy w planie; obecność marki w obu kanałach nie oznacza identycznych reklam.' },
    { question: 'Czy potrzebuję strony internetowej do reklamy na Facebooku?', answer: 'Nie w każdym przypadku. Zgłoszenia można zbierać przez formularz Lead Ads. Przy złożonej ofercie przydaje się strona z opisem, realizacjami i odpowiedziami na pytania. Zawsze trzeba ustalić obsługę kontaktów i wymagane informacje dla użytkownika.' },
    { question: 'Jak sprawdzimy skuteczność reklamy?', answer: 'Ustalamy wskaźniki odpowiednie do celu kampanii: koszt poprawnego zgłoszenia, jakość kontaktu lub sprzedaż możliwą do przypisania do reklamy. Menedżer reklam pokazuje własne dane i model przypisania wyników; porównujemy je z formularzami i informacjami od firmy.' },
    { question: 'Czy gwarantujecie określoną liczbę klientów?', answer: 'Nie. Wynik zależy również od oferty, konkurencji, budżetu i obsługi sprzedaży. Zobowiązania dotyczą zakresu pracy, testów i raportowania. Przykłady realizacji pomagają ocenić sposób działania, nie stanowią obietnicy takiego samego wyniku.' },
    { question: 'Co przygotować przed rozmową?', answer: 'Wyślij link do oferty i profili, opisz odbiorców, obszar działania oraz planowany budżet. Jeśli reklamy już działają, przydadzą się raporty i informacja, które kontakty kończą się rozmową lub sprzedażą. Hasła nie są potrzebne w formularzu.' },
  ],
};

export const videoMarketingOffer: SalesOfferProps = {
  path: '/uslugi/video-marketing', service: 'video',
  title: 'Video marketing dla firm — strategia i materiały | FOTZ Studio',
  description: 'Video marketing dla firm: plan treści, filmy, rolki i wersje do reklam. Zobacz realizacje FOTZ, sposób wyceny oraz pomiar działań i zaplanuj nagrania.',
  heading: 'Video marketing z planem na wykorzystanie filmu.',
  eyebrow: 'Treści wideo dla firm · FOTZ Studio',
  lead: 'Planujemy, co pokazać, komu i gdzie opublikować materiał. Łączymy tematy, nagrania oraz montaż z konkretną ofertą firmy. Możesz zamówić serię rolek, film wyjaśniający produkt albo materiały do kampanii — z określonym zakresem i sposobem oceny.',
  cta: 'Zaplanujmy materiały video', hero: 'backstage', films: true,
  caption: 'Praca ekipy FOTZ Studio na planie sesji mebli modułowych.',
  evidence: [
    { title: 'CUPRA × Enea Stadion', text: 'Spot pokazujący samochód w przestrzeni stadionu. Obejrzyj naszą realizację i zobacz sposób prowadzenia obrazu oraz montażu.', href: '/realizacje/enea-stadion' },
    { title: 'Wydarzenia i komunikacja miejsca', text: 'Materiały z Enea Stadionu: wydarzenia sportowe, koncerty i przestrzenie. Różne tematy do komunikacji jednej marki.', href: '/realizacje/enea-stadion' },
    { title: 'Gierky Activity Bar', text: 'Prezentacja wnętrza i charakteru miejsca poprzez własne materiały wizualne. Zobacz zakres realizacji w portfolio.', href: '/realizacje/gierki' },
  ],
  options: [
    { title: 'Regularne treści do social media', text: 'Seria tematów, która odpowiada na pytania odbiorców i pokazuje ludzi, produkty oraz pracę firmy.', detail: 'Plan tematów, lista ujęć, nagrania, montaż i formaty do wybranych kanałów. Publikację oraz obsługę profili ustalamy osobno.', variant: 'video_plan' },
    { title: 'Film dla klienta B2B', text: 'Przedstawienie produktu, procesu lub usługi osobie, która potrzebuje konkretów przed rozmową handlową.', detail: 'Może to być prezentacja firmy, demonstracja produktu lub film instruktażowy. Uzgadniamy scenariusz, długość i miejsce wykorzystania.', variant: 'film' },
    { title: 'Wideo do kampanii reklamowej', text: 'Materiały przygotowane pod ofertę, zrozumiały komunikat i wezwanie do działania.', detail: 'Wyceniamy uzgodnione warianty początku filmu, napisów i zakończenia. Obsługa kampanii i budżet reklamowy są osobnym zakresem.', variant: 'ad_variants' },
  ],
  scope: [
    { title: 'Cel marketingowy', text: 'Ustalamy, czy film ma budować świadomość marki, wyjaśniać ofertę, pomóc w sprzedaży czy odpowiadać na pytania klientów. Od tego zaczyna się strategia video marketingowa.' },
    { title: 'Tematy i scenariusze', text: 'Dobieramy treści wideo do grupy docelowej. Rozpisujemy wypowiedzi, ujęcia i materiały potrzebne na planie, żeby nagrania miały określony cel.' },
    { title: 'Organizacja produkcji', text: 'Ustalamy lokalizacje, osoby przed kamerą, dostępność produktów i harmonogram. Ekipa, dodatkowy sprzęt, lektor lub studio trafiają do wyceny.' },
    { title: 'Montaż i wersje materiałów', text: 'Dopasowujemy tempo, napisy i kadry do miejsca publikacji. Liczbę filmów, proporcje obrazu, muzykę i rundy poprawek określamy przed realizacją.' },
    { title: 'Plan dystrybucji', text: 'Wskazujemy, jak wykorzystać materiały wideo na stronie, w social media i reklamie. Ustalamy, kto publikuje, przygotowuje opisy oraz odpowiada za obsługę kampanii.' },
    { title: 'Ocena i rozwój', text: 'Porównujemy wyniki z celem: obejrzenia, przejścia do oferty i zapytania. Na tej podstawie planujemy kolejne tematy lub warianty, zamiast oceniać wszystko samą liczbą wyświetleń.' },
  ],
  pricing: 'Koszt video marketingu zależy od strategii, liczby tematów, dni nagraniowych i wersji montażowych. Produkcję, publikację oraz reklamy rozpisujemy osobno. Na prosty początek WIDEO START kosztuje 1490 zł netto: 3 pionowe rolki po 15–30 sekund, do 90 minut nagrań w jednej lokalizacji w Poznaniu, montaż, proste napisy, muzyka i jedna runda drobnych poprawek. Pakiet nie obejmuje drona, aktora, studia, lektora, osobnej sesji zdjęciowej, publikacji ani reklam. Dojazd poza Poznań wyceniamy osobno.',
  pricingHref: '/cennik', pricingLabel: 'Zobacz pełne warunki pakietów START',
  steps: [
    { title: 'Oferta i plan treści', text: 'Przeglądamy Twoje produkty i usługi oraz dotychczasowe materiały. Wybieramy odbiorcę, tematy, kanały i cel pierwszej serii.' },
    { title: 'Nagrania i montaż', text: 'Pracujemy według zaakceptowanej listy ujęć. Otrzymujesz uzgodnione wersje do oceny, a następnie gotowe pliki do publikacji.' },
    { title: 'Wykorzystanie i wnioski', text: 'Publikacja odbywa się według ustalonego zakresu odpowiedzialności. Przy stałej współpracy analizujemy wyniki i dopracowujemy kolejne materiały.' },
  ],
  guidance: [
    { title: 'Czym jest video marketing i jak dobrać format?', text: 'Video marketing to wykorzystanie filmu w komunikacji z odbiorcą na określonym etapie decyzji. Może być częścią content marketingu, kampanii lub wsparcia handlowców. Najpierw wybieramy zadanie, później długość i formę.', points: ['Pierwszy kontakt: krótki film promocyjny lub rolka pokazująca produkt, ludzi albo problem, który rozwiązujesz.', 'Rozważanie oferty: demonstracja, explainer video lub filmy instruktażowe pomagające zrozumieć sposób działania.', 'Rozmowa B2B: prezentacja realizacji lub fragment webinaru z odpowiedzią na konkretną wątpliwość klienta.'], link: { label: 'Potrzebujesz wyłącznie produkcji? Zobacz ofertę filmową', href: '/uslugi/produkcja-filmow' } },
    { title: 'Jak wykorzystać video marketing na różnych kanałach?', text: 'Ten sam temat można opracować w kilku wersjach. Kanał komunikacji wpływa na kadr, tempo i zakres informacji. Planujemy warianty przed nagraniem, żeby nie zabrakło potrzebnych ujęć.', points: ['Instagram i TikTok: pionowy format, czytelny początek, napisy oraz jeden główny komunikat dla odbiorcy.', 'YouTube i strona firmy: miejsce na szersze wyjaśnienie produktu, spójny tytuł, opis i link do odpowiedniej oferty.', 'LinkedIn i kampanie B2B: materiał odpowiadający na pytanie zawodowe, pokazujący proces lub doświadczenie firmy.'], link: { label: 'Połącz materiały z obsługą social media', href: '/social-media/obsluga' } },
    { title: 'Jak mierzyć skuteczność video marketingu?', text: 'Wskaźnik powinien odpowiadać zadaniu filmu. Dobre obejrzenia nie potwierdzają jeszcze nowych klientów. Uzgadniamy pomiar, źródła danych i sposób porównywania materiałów.', points: ['Uwaga: czy odbiorca ogląda początek i dociera do kluczowej informacji? Porównujemy podobne formaty i kanały.', 'Zainteresowanie: czy po obejrzeniu następuje przejście do strony, produktu lub formularza?', 'Zapytania: czy zgłoszenie dociera do firmy i prowadzi do rozmowy? Wyniki reklamy zestawiamy z informacją od sprzedaży.'], link: { label: 'Zobacz ofertę reklam na Facebooku i Instagramie', href: '/uslugi/reklama-facebook' } },
  ],
  faqs: [
    { question: 'Czy video marketing obejmuje publikację i reklamy?', answer: 'Tylko jeśli uwzględnimy je w ofercie. Produkcja materiałów, obsługa profili i prowadzenie kampanii to różne zadania. Przed startem określamy, kto publikuje oraz jaki budżet jest przeznaczony na emisję.' },
    { question: 'Czy muszę występować przed kamerą?', answer: 'Nie zawsze. Można pokazać produkt, proces i przestrzeń albo przygotować wypowiedź członka zespołu. Formę dobieramy do tematu oraz odbiorcy. Udział aktora lub lektora wymaga osobnego ustalenia.' },
    { question: 'Czy jeden dzień nagrań wystarczy na serię filmów?', answer: 'Może wystarczyć, jeśli tematy, lokalizacje i uczestnicy są dobrze przygotowani. Liczbę materiałów określamy na podstawie scenariuszy i czasu na planie. Nie obiecujemy dowolnej liczby filmów z jednego nagrania.' },
    { question: 'Czy film pomoże w SEO strony?', answer: 'Film może ułatwić zrozumienie oferty i uzupełnić treść strony. Przy publikacji warto zadbać o opis, dostępność materiału, napisy i kontekst. Samo dodanie wideo nie gwarantuje indeksowania ani wyższej pozycji w Google.' },
    { question: 'Co wysłać do wyceny video marketingu?', answer: 'Opisz usługę lub produkt, odbiorców, planowany termin i kanały publikacji. Dodaj linki do własnych materiałów oraz informację o lokalizacjach i osobach do nagrań. Doprecyzujemy tematy, zakres produkcji i prawa wykorzystania.' },
  ],
};
