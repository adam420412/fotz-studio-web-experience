# FOTZ Studio — Search Console i konsolidacja social media Poznań

Odczyt 4 października 2026 z właściwości domenowej `sc-domain:fotz-studio.pl`. Kanoniczny origin produkcji: `https://www.fotz-studio.pl`.

## Stan potwierdzony w Google

- Skuteczność, wyszukiwanie w internecie (tekst), 30 czerwca–29 września 2026: **24 kliknięcia, 12,1 tys. wyświetleń (zaokrąglenie interfejsu), CTR 0,2%, średnia pozycja 35,8**. Tabele zawierają 817 zapytań i 229 stron. Okres poprzedza październikowe wdrożenia, więc nie jest miarą ich efektu.
- Indeks map: **Sukces**, 1073 wykryte adresy, ostatni odczyt 2 października. Wykrycie adresów nie oznacza ich indeksowania.
- Core Web Vitals: za mało danych z ostatnich 90 dni dla komputerów i telefonów. To brak pomiaru terenowego, nie zaliczony test szybkości.
- Raport zbiorczy indeksowania nadal ma datę **21 września**: 363 zindeksowane, 44 wykluczone. Nie używamy go do oceny bieżącego stanu poszczególnych napraw.
- `/uslugi/fotografia-z-drona`: inspekcja wskazuje **„Adres URL znajduje się w Google”**. Skanowanie 2 października, 21:29:25, dozwolone i udane. Zadeklarowany canonical jest właściwy, Google wybrał sprawdzany URL. To potwierdzona zmiana względem wcześniejszego canonicala na fotz.pl.
- `/agencja-social-media/poznan`: **w indeksie**, skanowanie 3 października, 11:30:40. Google wybrał sprawdzany URL, wskazany także w canonicalu oraz mapie.
- `/social-media/poznan`: **wykryty, obecnie niezindeksowany**; brak daty skanowania. Google zna mapę i link z `/agencja-marketingu-internetowego`.

## Dlaczego ten zakres

Zapytania `agencja social media poznań` i `social media poznań` mają odpowiednio 575 i 534 wyświetlenia, pozycje 20,2 i 18,3, bez kliknięć. `social media marketing` ma 1030 wyświetleń i pozycję 8,4, ale historycznie jest związane ze stroną główną HTTP. Nie przypisujemy tych wyświetleń automatycznie do nowej oferty ani nie traktujemy ich jako leadów.

Dwa poznańskie adresy dotyczyły tej samej usługi. Zachowujemy `/agencja-social-media/poznan`, który Google już indeksuje. Sam brak indeksacji drugiego adresu nie dowodzi kanibalizacji; konsolidacja wynika także z przeglądu pokrywającej się treści i intencji.

## Wprowadzone zmiany

- Dedykowana oferta pod istniejącym, indeksowanym adresem: zakres obsługi, rzeczywiste materiały, proces, wycena, FAQ i ścieżki kontaktu. Zachowano listę artykułów CMS przypisanych do poznańskiego klastra oraz obsługę błędu jej pobrania.
- `/social-media/poznan` otrzymuje trwałe przekierowanie do `/agencja-social-media/poznan`. Dwa dawne aliasy z myślnikami kierują bezpośrednio do celu, bez dodatkowego przeskoku. Nawigacja SPA również prowadzi do właściwej strony.
- Linki w 14 plikach stron/komponentów prowadzą do celu bez przekierowania. Przy renderowaniu treści CMS linki do starej oferty są normalizowane z zachowaniem parametrów i kotwic; nie zmieniono danych w bazie CMS.
- Jeden URL oferty w mapach XML i HTML. Usunięto adres przekierowujący; datę aktualizacji zmieniono tylko dla rzeczywiście edytowanej strony i dwóch zmienionych map.
- Dwa odtwarzacze z okładkami pochodzącymi z filmów, ładowane dopiero po kliknięciu. Pozostałe prace są dostępne w portfolio. Usunięto sześć odtwarzaczy pobierających materiał przy wejściu oraz powtarzalne sekcje z ogólnymi obietnicami.

## Walidacja i granice

- TypeScript: PASS. ESLint dedykowanej strony i danych klastra: PASS.
- Testy: 35/35 PASS. Nowy przypadek linków CMS najpierw wykazał błąd, następnie przeszedł po poprawce; sprawdza parametry, kotwice, obcą domenę i podobny, ale inny slug.
- Lokalna przeglądarka: 1280, 390 i 320 px, jasny/ciemny motyw, jeden H1, brak przepełnienia, rozwijane FAQ, skoki do sekcji, przekierowanie SPA i odtwarzanie filmu po kliknięciu.
- Pełny build: 1084 dokumenty, 1081 pełnych treści, 0 błędów renderowania. Metadane: 0 błędów. Mapy: 1072 unikalne URL-e, 0 błędów (o jeden mniej po konsolidacji). Linki źródłowe: 4037, 0 błędnych celów.
- Test renderowania z kontrolnym artykułem potwierdził obecność linku CMS w statycznym HTML po poprawce inicjalizacji danych. Zdjęcie hero zoptymalizowano z 809444 do 89802 bajtów.
- HTTP hostingu i ponowne zgłoszenie zmienionej oferty: do potwierdzenia po publikacji.
- Brak nowych danych o wzroście ruchu, zapytań lub sprzedaży. Nie wysyłano formularzy, nie zmieniano uprawnień konta ani nie usuwano adresów przez narzędzie Usunięcia.

Dowody konta pozostają lokalnie w ignorowanym katalogu `docs/seo/qa-2026-10-04-gsc/`; raport nie zawiera eksportów danych osobowych.

Dokumentacja: [łączenie duplikatów i sygnały canonical](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [zgłoszenie zmienionego URL-a do ponownego skanowania](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl). Zgłoszenie nie jest potwierdzeniem skanowania, indeksacji ani poprawy pozycji.
