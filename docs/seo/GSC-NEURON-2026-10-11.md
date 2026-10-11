# GSC i NEURONwriter — 11.10.2026

## Stan wyjściowy i zakres
Świeży odczyt GSC wykonany 11.10.2026; raport zbiorczy aktualny na 4.10.2026. Właściwość: sc-domain:fotz-studio.pl. 685 zaindeksowanych, 440 wykluczonych przykładów. Pobrano komplet przykładów z siedmiu kategorii i sprawdzono wszystkie adresy HTTP.

| Kategoria GSC | Adresy |
|---|---:|
| Zeskanowano, nie zindeksowano | 147 |
| Wykryto, nie zindeksowano | 254 |
| Przekierowania | 13 |
| Alternatywna strona kanoniczna | 13 |
| Nie znaleziono | 10 |
| noindex | 2 |
| robots.txt | 1 |

427 adresów kończy się HTTP 200, 13 HTTP 404. Wszystkie 401 przykładów z dwóch największych kategorii zwracają 200, mają index/follow, jeden H1 i własny canonical (po normalizacji kodowania URL). To nie dowodzi, że wszystkie są obecnie w indeksie. 331/401 to wpisy blogowe; 70 to pozostałe adresy.

W grupach technicznych są prawidłowe przekierowania i fikcyjne ścieżki kodu/produktów. Nie należy przekierowywać ich zbiorczo na stronę główną ani usuwać celowego noindex. Dwa stare adresy ofert z raportu 404 już przekierowują do właściwych usług.

Indywidualna inspekcja trzech ofert poniżej już PRZED zmianami pokazała „Adres URL znajduje się w Google”. Nie przypisujemy indeksowania niniejszej publikacji.

## Pierwsza partia treści
Projekt NEURONwriter: 59db8bbb8ee62780, fotz-studio.pl, Polish/google.pl. Utworzono 7 analiz w ramach istniejącego limitu: trzy dla przebudowanych ofert oraz cztery dla kolejnych priorytetów z GSC. Pozostałe podstrony nie zostały jeszcze opracowane w NEURONwriterze. Pełna lista 1072 adresów sitemap z jawnym statusem pokrycia znajduje się w lokalnym page-inventory.csv.

| Oferta | Query | Ocena przed | Ocena wersji roboczej |
|---|---|---:|---:|
| /uslugi/strony-internetowe-dla-firm | b672d2ef932a858d | 51 | 68 |
| /uslugi/reklama-facebook | 0b4d48c9ace333b8 | 60 | 75 |
| /uslugi/video-marketing | cc667ee62260969d | 59 | 67 |

Metoda: evaluate_content dla produkcyjnego URL z id=main-content, następnie ten sam obszar HTML z pełnego prerenderu i te same pola title/description nowej wersji. Ocena oznacza dopasowanie do modelu treści NEURONwriter, nie pozycję w Google, pozyskanych klientów ani prognozę konwersji. Po publikacji należy porównać bezpośredni import produkcyjnego URL.

Wdrożenia: konkretne zakresy i zasady wyceny, własne realizacje, pytania o koszt/proces/wybór rozwiązania, rozdzielenie emisji reklam i obsługi, pomiar rzeczywistych zgłoszeń. Usunięto niepotwierdzone gwarancje i stare pakiety. Dane ofert są renderowane w HTML i zachowywane przy hydratacji. Linki do kontaktu zachowują usługę oraz wariant. Dodano kontekstowe linki w /uslugi; lastmod zmieniono tylko dla trzech przebudowanych ofert.

## Walidacja
Build: 1074 dokumenty, 1071 pełne treści, 0 błędów treści. Typecheck i ESLint zmienionych plików przeszły. 93/93 testy. Audyt: 1072 unikalne adresy mapy, 0 problemów metadanych i mapy, 134863 linki wewnętrzne bez uszkodzonych odnośników, 3922 odnośniki w źródłach bez błędów. Zdjęcia realizacji: 486 stron z galeriami, 0 błędów.

## Dalsza kolejność
1. Pozostałe oferty i realizacje z listy 70 adresów: indywidualna inspekcja GSC, porównanie intencji i treści, analiza NEURONwriter przypisana do konkretnej oferty.
2. 331 wpisów blogowych: grupowanie tematów, wykrywanie duplikatów i ocena przydatności; aktualizacja istniejących tekstów, bez tworzenia kolejnych stron na bliskie warianty fraz.
3. Pozostała mapa: osobne analizy według unikalnej intencji, z kontrolą miesięcznego limitu. Nie używać jednej analizy do oceniania niepowiązanych tematów.
4. Ocena po publikacji: rzeczywisty status GSC, wyświetlenia i kliknięcia ofert, poprawnie odebrane formularze i jakość rozmów. Sam wynik content score nie zastępuje tych danych.

## Dowody
Lokalny katalog output/lead-audit-2026-10-11/gsc: listy siedmiu kategorii, live-urls.json, trzy inspekcje przed zmianami, neuron-recommendations.json, page-inventory.csv oraz logi kontroli. Raport zawiera statusy z konkretnych dat; nie jest automatycznym monitoringiem.

Źródła: [Google — raport indeksowania](https://support.google.com/webmasters/answer/7440203), [ponowne skanowanie](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).


## Dodatkowe ustalenia przed publikacją

Świeży raport skuteczności (sc-domain:fotz-studio.pl, Sieć, 9.07–8.10.2026): 34 kliknięcia, 17 267 wyświetleń, CTR 0,2%, średnia pozycja 33,5; 562 adresy w tabeli. Są to dane historyczne, nie efekt dzisiejszych poprawek. Oferta video marketing ma 0 kliknięć i 3 wyświetlenia; dwie pozostałe nie występują w tabeli okresu. Zapis: performance-pages.json i gsc-performance-baseline.txt. Statystyki zostały dołączone do pełnej listy 1072 adresów.

Kolejne analizy NEURONwriter uruchomione na podstawie wyświetleń bez kliknięć (kolejka do opracowania, nie zakończone wdrożenia):

| Adres | Wyświetlenia | Query |
|---|---:|---|
| /uslugi/strony-internetowe/legnica | 715 | ae6adae81ce954af |
| /agencja-marketingowa/poznan | 578 | 5a02ecc0a94e910d |
| /seo/audyt | 345 | 880fa6a633767168 |
| /agencja-social-media | 278 | a51d6a0db3ccc629 |

Dodatkowa inspekcja /uslugi/audyt-strony-internetowej także potwierdza indeksowanie mimo obecności w starszym raporcie wykluczeń.

Claude Code przejrzał head 0c357d3 bez blokujących uwag. Jedną uwagę o zbyt ogólnym kontekście formularza poprawiono: formularze na ofertach dostają domyślny wariant, zachowują wariant jawnie podany w linku, a zmiana usługi usuwa poprzedni zakres. Temat wiadomości zawiera wariant. Kategoria backendowa marketing pozostaje istniejąca; etykieta obejmuje teraz również kampanie. Przegląd kampanii ma odrębny wariant campaign_audit. Dodano test dla domyślnych zakresów i pierwszeństwa kontekstu linku.
