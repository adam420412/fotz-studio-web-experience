# Search Console i jakość witryny — 8 października 2026

Właściwość: `sc-domain:fotz-studio.pl`. Produkcyjny origin: `https://www.fotz-studio.pl`.

## Odczyt Search Console

| Raport | Stan widoczny 8 października |
| --- | --- |
| Indeksowanie stron, aktualizacja 4 października | 685 zindeksowanych, 440 niezindeksowanych |
| Powody wykluczenia | 254 wykryte bez indeksacji, 147 zeskanowane bez indeksacji, 13 przekierowań, 13 alternatywnych canonicali, 10 błędów 404, 2 noindex, 1 robots.txt |
| Breadcrumbs, aktualizacja 7 października | 78 prawidłowych elementów, 0 krytycznych; 2 ostrzeżenia o URL-u elementu |
| Opinie, aktualizacja 7 października | 57 prawidłowych elementów, 0 krytycznych |
| Filmy, aktualizacja 5 października | 18 niezindeksowanych: film nie jest na stronie odtwarzania; 0 zindeksowanych filmów |
| Core Web Vitals, aktualizacja 6 października | Za mało danych z 90 dni dla telefonu i komputera |
| Mapa XML | Sukces, ostatni odczyt 2 października, 1073 wykryte adresy; aktualna mapa produkcyjna ma 1072 |

Zapisano wszystkie 147 i 254 adresy z dwóch największych grup. W pierwszej 112 to poradniki, a 35 inne adresy; w drugiej odpowiednio 219 i 35. Brak indeksacji sam w sobie nie wskazuje jednej przyczyny i nie oznacza, że każda strona wymaga przekierowania lub usunięcia.

Błędy 404 obejmują 8 adresów z przykładów programistycznych oraz dwa starsze adresy ofert. `/produkcja-video-poznan` i `/strony-internetowe/torun` już przekierowują do działających ofert. Przykładowe `/user/:id` i `/blog/dist/index.cjs` zwracają prawidłowe 404. Blokada robots dotyczy `/api/data`; wpisy noindex to testowy artykuł i stary adres pliku. Nie odblokowano technicznych zasobów dla samego zmniejszenia licznika wykluczeń.

Ostrzeżenia breadcrumbs w GSC dotyczą Łodzi i Torunia oraz skanowań z września. Bieżący HTML obu stron ma poprawne oznaczenia. Po sprawdzeniu rozpoczęto weryfikację w GSC: **„Weryfikacja Rozpoczęto”, 8.10.2026**. To przyjęcie zgłoszenia, nie wynik końcowy.

## Wykryte i poprawione problemy

- Nowa kontrola całego wygenerowanego HTML wykryła 9 niedziałających linków, których kontrola kodu źródłowego nie obejmowała: 2 karty nieistniejących artykułów na blogu i 7 automatycznie tworzonych adresów miejscowości na stronie Białegostoku. Nieistniejące karty usunięto; miejscowości pozostają informacją o obszarze współpracy, bez fikcyjnych odnośników.
- Ta sama kontrola znalazła 16 stron z niepełnymi breadcrumbs. W 15 wspólny komponent ignorował pole `path` używane przez widoczną nawigację; w jednej stronie tablica Schema.org była przekazana w niewłaściwym formacie. Naprawiono oba przypadki i dodano testy regresji.
- 7 tras zwracało pełne HTML z canonicalem innego, już istniejącego adresu. Dodano bezpośrednie 308 oraz przekierowania SPA do dotychczasowego adresu kanonicznego: OKR, NPS, reklama programatyczna, zero trust, API gateway, audyt SEO i strony WWW Kielce. Linki wewnętrzne oraz linki renderowane z CMS prowadzą do celów. Parametry i kotwice są zachowane. Te aliasy już wcześniej nie występowały w mapach — liczba 1072 adresów nie maleje w tym wydaniu.
- Przebudowano `/uslugi/marketing-internetowy`, `/agencja-marketingu-internetowego`, `/seo/audyt` i `/agencja-marketingowa/wroclaw`: czytelny zakres, etapy współpracy, rozdzielenie kosztów, dowody w portfolio, FAQ i ścieżka kontaktu. Pierwsza strona występuje w świeżej grupie „zeskanowana, ale niezindeksowana”. Pozostałe rozwijają wcześniej ustalone priorytety jakości i danych GSC.
- W poprawianych ofertach usunięto nieudokumentowane wyniki, ceny i gwarancje. Wrocław wskazuje prawdziwą siedzibę w Poznaniu, pracę zdalną i osobno uzgadnianą logistykę, zamiast deklaracji lokalnego biura i liczników klientów.
- Wspólny układ czterech ofert korzysta z motywów witryny i przycisków marki, ma krótszy wstęp, karty zakresu i dostępne natywne FAQ. Treść i odpowiedzi pozostają w HTML.
- Kontrola przed publikacją obejmuje teraz linki w wyrenderowanym HTML, pojedynczy H1, zgodność adresu z canonicalem i pełne adresy breadcrumbs. Tryb odczytu produkcji raportuje błędy HTTP i rozbieżności canonical/noindex względem sprawdzonego buildu.

## Walidacja kodu i interfejsu

- 38 testów logiki: PASS; TypeScript: PASS; ESLint nowych ofert i wspólnych zmienionych komponentów: PASS.
- Pełny build: 1077 dokumentów, 1074 pełne treści, 0 błędów renderowania. Ubyło 7 zbędnych dokumentów aliasów, nie ofert.
- Audyt: 0 błędów HTML/SEO, 1072 unikalne URL-e map, 0 błędów map; 133483 linki wewnętrzne w HTML (unikalne w obrębie dokumentu), 0 uszkodzonych. 4034 linki źródłowe, 0 błędnych celów.
- Cztery oferty: 390 px / ciemny i 320 px / jasny motyw, po jednym H1, bez poziomego przepełnienia. Oględziny desktopowe wspólnego układu, rozwinięcie FAQ, zachowanie query/hash przy przekierowaniu oraz przejście do pięciu pól formularza kontaktowego. Bez wysyłania formularza.
- Kontrola HTTP zawiera 27 przypadków: cztery nowe oferty, 16 breadcrumbs i 7 przekierowań. Przed wydaniem wszystkie 27 wykazują stary stan, więc kontrola odróżnia publikowaną zmianę od dotychczasowej produkcji.

Publikację, wynik CI, test 27 przypadków i pełny odczyt produkcji dokumentuje osobno odbiór wydania. Sam ten raport nie stanowi potwierdzenia wdrożenia.

## Odbiór produkcji i uzupełnienie

Zmiany z PR #26 zostały opublikowane 8 października. Oba wdrożenia Vercel zakończyły się sukcesem, a 27 kontroli nowych ofert, breadcrumbs i przekierowań przeszło na domenie produkcyjnej. Google przyjął prośby o ponowne indeksowanie `/seo/audyt` i `/uslugi/marketing-internetowy`.

Inspekcja pojedynczego URL-a marketingu pokazała, że strona już znajduje się w Google, ma prawidłowy canonical, a ostatnie skanowanie odbyło się 6 października o 02:05:11. Raport zbiorczy nadal wymienia ją jako zeskanowaną bez indeksacji. Nie przypisujemy jej wcześniejszej obecności w indeksie temu wdrożeniu.

Pełny odczyt 1077 adresów po publikacji ujawnił 3 rozbieżności między aplikacją a hostingiem: `/social-media`, `/content-marketing` i `/blog/automatyzacja-marketingu`. Hosting przekierowywał do prawidłowych celów, ale aplikacja oraz prerender nadal obsługiwały stare strony. Uzupełnienie dopasowuje przekierowania SPA do istniejącego hostingu, normalizuje odnośniki z CMS i blokuje ponowne wygenerowanie niezależnej strony dla ścieżki przekierowania. Przejścia aplikacji z parametrami i kotwicą sprawdzono w przeglądarce. Żaden adres docelowy ani wpis mapy XML nie jest usuwany.

## Filmy na głównej i odnośniki social media

Na głównej, poniżej pierwszego ekranu i logotypów, dodano sekcję z wyróżnionym spotem **CUPRA × Enea Stadion** oraz trzema rolkami: dzień meczowy Lech–Legia, Julia Wieniawa w B17 i sanah na Enea Stadionie. Cupra i mecz korzystają z oryginalnych plików użytkownika, przystosowanych do przeglądarki; odtwarzacz pojawia się dopiero po kliknięciu. Karty koncertowe mają rzeczywiste okładki publikacji i prowadzą do zweryfikowanych postów na Instagramie, z jednoznacznym oznaczeniem zewnętrznego odnośnika.

Ten sam wybór materiałów trafia do `/social-media/obsluga`, a rolki także do `/agencja-social-media`. Strona agencji zyskała bezpośrednie przejścia do prowadzenia profili, produkcji treści i kampanii Meta; przycisk „Zobacz nasze rolki” prowadzi do materiałów na tej samej stronie. Nazwę „Prowadzenie social media” ujednolicono w nawigacji i stopce. Docelowe profile Instagram, Facebook i kanał YouTube sprawdzono w dostępnych źródłach; nie zmieniano ustawień ani treści tych profili.

Nowe okładki mają łącznie około 147 kB; filmy pobierane po kliknięciu ważą około 4,7 MiB i 7,8 MiB. Odtwarzanie obu plików potwierdzono w przeglądarce, wraz z zamykaniem okna, Escape i powrotem fokusu. Kontrola 390 px / ciemny oraz 320 px / jasny motyw nie wykazała poziomego przepełnienia. Finalny zestaw po usunięciu 3 zbędnych dokumentów aliasów obejmuje **1074 dokumenty i 1072 URL-e w mapach**. Pełny odczyt tych 1074 adresów produkcyjnych nie wykazał błędów HTTP ani rozbieżności metadanych przed publikacją uzupełnienia mediów; wynik odbioru nowych materiałów zapisuje osobny raport wydania.

## Pozostała praca i interpretacja

Pełna kontrola techniczna obejmuje wszystkie generowane dokumenty. Redakcja akapitów i oględziny ekranów obejmują podany zakres, nie ręczny odbiór ponad tysiąca stron. Duża część bloga i starszych ofert nadal wymaga indywidualnej redakcji, szczególnie danych liczbowych, cen, przypisania prac oraz treści lokalnych. Nie wykonano masowego usuwania podstron, tworzenia nowych stron pod zapytania ani zmiany dat publikacji poradników.

18 zgłoszeń wideo nie oznacza 18 niedziałających podstron. Strona oferty z pomocniczym filmem nie musi kwalifikować się jako strona odtwarzania. Nie przestawiano ofert wyłącznie po to, by zmienić kategorię w GSC. Brak danych CWV nie jest wynikiem pozytywnym. Zgłoszenie do weryfikacji lub indeksacji nie potwierdza ponownego skanowania, wzrostu pozycji ani kontaktów.

Źródła interpretacji: [raport indeksowania Google](https://support.google.com/webmasters/answer/7440203), [inspekcja URL](https://support.google.com/webmasters/answer/9012289), [breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [raport filmów](https://support.google.com/webmasters/answer/9495631).

Dowody konta, raporty i zrzuty ekranu pozostają lokalnie w ignorowanym `docs/seo/qa-2026-10-08/`.
