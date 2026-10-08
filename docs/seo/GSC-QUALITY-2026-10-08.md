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

## Pozostała praca i interpretacja

Pełna kontrola techniczna obejmuje wszystkie generowane dokumenty. Redakcja akapitów i oględziny ekranów obejmują podany zakres, nie ręczny odbiór ponad tysiąca stron. Duża część bloga i starszych ofert nadal wymaga indywidualnej redakcji, szczególnie danych liczbowych, cen, przypisania prac oraz treści lokalnych. Nie wykonano masowego usuwania podstron, tworzenia nowych stron pod zapytania ani zmiany dat publikacji poradników.

18 zgłoszeń wideo nie oznacza 18 niedziałających podstron. Strona oferty z pomocniczym filmem nie musi kwalifikować się jako strona odtwarzania. Nie przestawiano ofert wyłącznie po to, by zmienić kategorię w GSC. Brak danych CWV nie jest wynikiem pozytywnym. Zgłoszenie do weryfikacji lub indeksacji nie potwierdza ponownego skanowania, wzrostu pozycji ani kontaktów.

Źródła interpretacji: [raport indeksowania Google](https://support.google.com/webmasters/answer/7440203), [inspekcja URL](https://support.google.com/webmasters/answer/9012289), [breadcrumb](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [raport filmów](https://support.google.com/webmasters/answer/9495631).

Dowody konta, raporty i zrzuty ekranu pozostają lokalnie w ignorowanym `docs/seo/qa-2026-10-08/`.
