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


## Druga partia — treści i kontekst zapytania

Rozszerzono cztery oferty zgodnie z właściwą intencją analiz NEURONwriter: audyt SEO (zakres, raport, analiza treści, technologia i przygotowanie), agencja Poznań (kryteria wyboru i prawdziwe portfolio), social media (dobór kanałów, produkcja, moderacja, budżet i raportowanie) oraz strony Legnica (rodzaj strony, CMS, materiały, SEO i utrzymanie). Linki kontaktowe zachowują usługę; oferta audytu także wariant `audit`. Wspólny ServiceEditorial przekazuje kategorię również na pozostałych czterech korzystających z niego ofertach.

| Oferta | Analiza | Przed | Po, lokalna treść |
|---|---|---:|---:|
| Agencja Poznań | 5a02ecc0a94e910d | 63 | 71 |
| Audyt SEO | 880fa6a633767168 | 42 | 57 |
| Agencja social media | a51d6a0db3ccc629 | 61 | 75 |
| Strony Legnica | aaac7d78e9edc8f0 | 29 | 48 |

Dla Legnicy utworzono ósmą analizę: „tworzenie stron internetowych Legnica”. Poprzednie ogólne zapytanie mieszało ofertę z portalem miejskim i nie jest właściwą podstawą oceny. Nowy SERP jest w 90% transakcyjny/lokalny, lecz zawiera także oferty pozycjonowania. Uwzględniono pytania o tworzenie stron, odrzucono rozszerzanie strony o niepowiązane lokalne rankingi i cenniki SEO. Wyników 29→48 nie wolno porównywać z 48 w starej analizie — to różne modele.

Walidacja drugiej partii: pełny build 1074 dokumentów / 1071 pełnych treści / 0 błędów, 93/93 testy, kontrola 134874 linków wewnętrznych i 3926 odnośników źródłowych bez błędów, mobile 390 px bez poziomego przepełnienia. Wynik punktowy nie jest celem ani potwierdzeniem skuteczności w Google.

## Cały serwis, nie tylko oferta

Zebrano treść, nagłówki, obrazy, odnośniki i historyczne wyniki GSC dla wszystkich 1072 adresów: 742 adresy blogowe i 330 pozostałych. Pełna kolejka jest w `neuron-page-inventory-2026-10-11.csv`; status każdego URL odróżnia wdrożenie, ocenę i brak indywidualnej analizy. Arkusz nie stwierdza, że wszystkie strony przeszły NEURONwriter.

Automatyczne flagi w lokalnym `all-pages-content-review.csv` są wyłącznie pomocą do ręcznej oceny, nie listą potwierdzonych błędów. Brak dodatkowego zdjęcia poza wspólną galerią nie oznacza awarii. Podstrony miejskie wymagają także sprawdzenia starych dat, statystyk doświadczenia i obietnic bez źródeł. Zbieżne adresy lokalnego SEO lub tworzenia stron należy porównać pod kątem intencji przed wydawaniem kolejnych analiz lub decyzją o konsolidacji. Nie wykonano masowych przekierowań ani usuwania stron.

Priorytet kolejnych analiz: właściwe podstrony sprzedażowe z wyświetleniami i niską liczbą kliknięć; następnie wykluczone oferty; później powiązane poradniki. Strony kontaktowe i prawne oceniamy według ich funkcji, bez sztucznego rozbudowywania ich pod score narzędzia. Limit planu wynosi 75 nowych analiz miesięcznie, wykorzystano 8. Każde użycie analizy grupowej wymaga tej samej intencji; ogólna przynależność do SEO czy marketingu nie wystarcza.

Dla widoczności w Google AI nie ma dodatkowego wymaganego schematu ani pliku: indeksowanie, dostępna treść i wiarygodne źródła pozostają podstawą. Nie ma gwarancji cytowania. Źródło: https://developers.google.com/search/docs/appearance/ai-features.

Pierwsza partia została scalona w PR #43 (main aaef1b35903d1e35992cd93f877733c13a53ce7c). Potwierdzono udane wdrożenie Vercel oraz nowe treści na trzech publicznych adresach HTTP 200 z poprawnymi canonicalami i jednym H1. Import produkcji do NEURONwriter: 68 / 75 / 67. Google przyjął jedną prośbę o ponowne indeksowanie dla każdego z trzech adresów; nie jest to potwierdzenie ponownego przetworzenia treści. Druga partia jest w PR #44; przegląd Claude Code dokładnego head 78b673f nie wykazał błędów blokujących. Poprawiono wskazane sklejenie nagłówka w CSV.


## Potwierdzenie produkcji drugiej partii

PR #44 scalony: main `89fc3ba93c342a17cb7b50f1cb785c1095e7be80`. Dnia 11.10 potwierdzono nowe treści na wszystkich czterech publicznych URL-ach (HTTP 200, jeden H1, własny canonical, link do formularza z właściwą usługą). Import produkcji do NEURONwriter: Poznań **72**, audyt **57**, social media **75**, Legnica **48**. Cztery edytory zapisane i oznaczone jako ukończone. Razem siedem ofert opracowanych indywidualnie; pozostałe adresy nadal wymagają pracy zgodnie z inwentaryzacją.

## Problem starych aliasów ujawniony w GSC

Inspekcja `/agencja-marketingowa/poznan` wykazała brak indeksowania: Google pamięta canonical `https://fotz.pl/agencja-marketingowa/poznan` z 20.09 oraz wybiera alias `https://www.fotz-studio.pl/agencja-marketingowa-poznan`. Aktualna oferta ma już własny canonical, ale alias zwracał HTTP 200 z treścią i canonicalem strony głównej; przekierowanie działało dopiero po JavaScript.

Uzupełniono dwanaście brakujących dokładnych reguł hostingowych według istniejących przekierowań React: jedenaście aliasów agencji miejskich i `/akademia`. Vercel `permanent: true` oznacza HTTP 308. Nie dodano szerokiego wildcardu akademii, ponieważ istnieją osobne strony auth/admin. W aplikacji ujednolicono `/landing-page` z istniejącym docelowym adresem serwera `/uslugi/strony-internetowe`.

Test `redirect-parity.test.mjs` odczytuje AST routingu i sprawdza wszystkie dokładne aliasy: jedna bezwarunkowa reguła serwera, zgodny cel, trwały status, istniejąca strona docelowa i brak łańcucha przekierowań. Ta kontrola zapobiega powrotowi pozornych stron HTTP 200 dla aliasów. Publikację i odpowiedzi produkcji należy potwierdzić po scaleniu.


## Trzecia partia — obsługa profili, strategia treści i Instagram Ads

Treści przygotowano na podstawie trzech odrębnych analiz NEURONwriter. Doprecyzowano zakres współpracy, materiały od klienta, akceptację, budżet i ocenę zapytań. Strony prowadzą do formularza z konkretnym zakresem; dodano warianty `content_plan` i `instagram_ads` oraz rozpoznawanie istniejącej kategorii `marketing` na obu rodzinach ofert. Instagram Ads korzysta z czytelnego szablonu ServiceEditorial i zachowuje prerenderowaną treść przy hydratacji. Usunięto nieudokumentowane mnożniki wyników, stałe CPC i ogólne obietnice z poprzedniej wersji.

| Oferta | Analiza | Przed (produkcja) | Po (lokalna treść) | Historyczne wyświetlenia GSC |
|---|---|---:|---:|---:|
| Obsługa social media | ad8273024336717e | 35 | 70 | 185 |
| Strategia content marketingowa | be80621d8dbc76e5 | 48 | 69 | 277 |
| Kampanie Instagram Ads | 266e632b9d0606e0 | 55 | 72 | 153 |

Wyniki przed i po dotyczą tej samej analizy oraz treści `main-content`. Są wskazówką redakcyjną, nie dowodem pozycji, indeksowania ani leadów. Social media ma przewagę intencji transakcyjnej (62,1%). Strategia i obie przeanalizowane frazy Instagram Ads mają przewagę intencji informacyjnej: wykorzystano przydatne pytania, zachowując funkcję oferty. Nie dodawano treści o zarobkach twórców, ofertach pracy czy niepowiązanych usługach wyłącznie dla punktów.

Pomocnicza analiza ogólnej frazy Instagram Ads (`1a95b2ccb6cba431`) została oznaczona jako pomocnicza, nie jako ukończona oferta. W tym etapie utworzono cztery analizy, łącznie 12 od początku audytu (limit planu: 75; nie wykupowano dodatkowych kredytów).

Walidacja: typecheck, 148/148 testów, build 1074 dokumentów / 1071 pełnych treści / 0 błędów; 1072 adresy w sitemap, 134915 linków wyrenderowanych, 3920 odnośników źródłowych i 486 galerii bez błędów kontroli. Mobile 390 px: wszystkie trzy oferty bez poziomego przepełnienia; przejścia do kontaktu zachowują właściwą usługę i wariant. Konsola testowanej karty bez błędów. Nie wysyłano nowych zgłoszeń testowych. Publikacja i zapis edytorów NEURONwriter wymagają osobnego potwierdzenia po scaleniu.

Dowody lokalne: `output/lead-audit-2026-10-11/gsc/etap-3/`, w tym rekomendacje, wyrenderowane wersje ocenione przez NEURONwriter i logi walidacji.


## Potwierdzenie produkcji trzeciej partii

PR #48 scalony, main `8631af964b2d7b54ca5bec45a4054036c56ba4f1`. Oba wdrożenia Vercel mają status success. Zweryfikowano trzy publiczne oferty: HTTP 200, nowe treści, jeden H1, własny canonical, index/follow i linki do formularza z wariantem usługi. Brak NUL i U+FFFD w HTML. Import bezpośrednio z produkcji do edytorów NEURONwriter dał odpowiednio **69 / 68 / 72**; dwie oceny różnią się o punkt od lokalnej ekstrakcji. Wszystkie trzy analizy zapisano, otagowano i oznaczono jako ukończone. Inwentaryzacja pokazuje wyniki importu produkcji. Razem 10 ofert opracowanych indywidualnie. Brak nowego dowodu indeksowania czy wzrostu zapytań — wymaga to obserwacji GSC i CRM po publikacji.


## Portfolio — większe kadry i lżejsze podglądy

Inspiracja funkcjonalna: https://boostagency.pl/ oraz https://boostagency.pl/portfolio (duże kadry, proste kategorie, spokojny ruch). Wykorzystano wyłącznie własne materiały i kolorystykę FOTZ. Portfolio otrzymało szeroki kadr Enea Stadionu, większą siatkę dwóch kolumn, filtry z licznikami i wyróżnioną kolejność Enea / KLAGEM / Dawid EDU. Do sekcji filmów dołączono istniejący spot CUPRA (łącznie siedem filmów). Zachowano 21 projektów i 58 zdjęć, adresy realizacji, powiększanie i ręczny start filmów.

Nowe style obsługują delikatne powiększenie obrazu, ruch strzałki i wejście kart po filtrowaniu. Animacje nie ukrywają treści; są ograniczone do komputerów i preferencji no-preference. Strona została włączona do hydratacji, aby nie wymieniać prerenderowanego DOM przy starcie.

Dla 77 źródłowych obrazów (77 864 088 bajtów) przygotowano podglądy WebP 480/960 px (obie wersje razem 7 594 990 bajtów). Nie jest to rozmiar początkowego transferu strony: obrazy ładują się leniwie, a przeglądarka wybiera wariant z srcset/sizes. Oryginały pozostają do pełnego podglądu. Generator: `npm run images:portfolio`. Nowe materiały z modułu danych mają fallback do oryginału do czasu regeneracji.

Kontrola przeglądarkowa: mobile 390 px bez poziomego przepełnienia; filtrowanie projektów i zdjęć, doładowanie 12→24 zdjęć, otwarcie galerii 8 zdjęć Enea i przejście 1→2; Escape zamyka i przywraca fokus. Emulacja reduced motion wyłącza portfolio-arrive, przy zwykłym ustawieniu przejście obrazów trwa 0,7 s. Brak błędów konsoli. Filmów nie ma w DOM przed świadomym odtworzeniem. Końcowa walidacja z wariantami obrazów: typecheck, ESLint, build 1074 dokumentów / 1071 treści / 0 błędów, audyt SEO bez błędów (134915 linków HTML, 3922 źródłowych). Sprawdzono 66 wariantów obrazów obecnych w początkowym HTML; wszystkie istnieją w dist. Browser wybiera podgląd 480 px przy mobilnym layoucie 390 px. Odtwarzanie CUPRA potwierdzone: readyState 4, postęp 6,27 s / 26,38 s, brak błędu. Publikację potwierdzimy po scaleniu.
