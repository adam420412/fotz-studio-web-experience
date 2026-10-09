# Zachowanie treści przy pierwszym wejściu — 9.10.2026

## Problem i zmiana

Wersja bazowa `88eae91` dostarczała pełny HTML, po czym `createRoot()` usuwał go i budował stronę ponownie. Test przeglądarkowy potwierdził utratę pierwotnego `main`, H1 i wszystkich H2 na głównej, audycie SEO i ofercie poznańskiej.

Osiem tras renderuje teraz kompletny komponent `App` również podczas budowania. Dokument otrzymuje `data-hydrate-path`; klient uruchamia `hydrateRoot()` tylko przy zgodności ścieżki. Pozostałe szablony, pusty podgląd deweloperski i fallback dla innej ścieżki nadal korzystają z `createRoot()`.

- `/`
- `/seo/audyt`
- `/agencja-marketingowa/poznan`
- `/agencja-marketingowa/wroclaw`
- `/agencja-marketingu-internetowego`
- `/uslugi/marketing-internetowy`
- `/content-marketing/strategia`
- `/uslugi/strony-internetowe/legnica`

Kod głównej ładuje się jako osobny moduł strony. Klient pobiera kod wybranej strony przed rozpoczęciem hydratacji i przekazuje gotowy komponent do tej samej początkowej trasy co serwer. Jej sekcje współdzielą jedną granicę hydratacji. Banner cookies jest montowany dopiero po hydratacji, bez pustej granicy Suspense oczekującej na bibliotekę animacji. Zapisany język stosowany jest po zgodnym pierwszym renderze, a etykieta przełącznika motywu jest początkowo niezależna od ustawień przeglądarki.

Poprawiono też wykrywanie `fetchPriority` w HTML generowanym przez React. Preload rzeczywistej okładki filmu występuje teraz przed skryptami. Dla głównej CSS i okładka mają pierwszeństwo przed modułami portfolio, które pobiera router; pozostałe oferty zachowują preloading swoich modułów.

Prerender nie modyfikuje stylów na trasach przeznaczonych do hydratacji. Audyt buildu sprawdza zgodność znacznika ze ścieżką kanoniczną i brak ukrywania statycznej treści przez inline `opacity:0`.

## Weryfikacja

- Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów renderowania.
- Audyt: 1072 unikalne URL-e sitemap; 134770 linków w HTML i 4037 w źródłach, bez uszkodzonych odnośników; 487 galerii bez błędów.
- TypeScript aplikacji i konfiguracji: poprawny; 48 testów: poprawne, w tym dwa nowe przypadki regresji preloadingów.
- Test tożsamości węzłów przed/po uruchomieniu React: `main`, H1 i wszystkie H2 zachowane na wszystkich ośmiu trasach, bez błędów hydratacji.
- Preferencje: PL/dark i EN/light na głównej oraz EN/light na audycie — zachowane węzły, właściwy motyw i tłumaczenia, brak błędów.
- Dodatkowy zimny start z wyłączoną pamięcią cache, opóźnieniem 150 ms i pobieraniem 200000 B/s: główna EN/light, audyt dark i Poznań light zachowują treść bez błędów hydratacji.
- Telefon 390 px: brak poziomego przepełnienia, menu i Escape, rozwijane FAQ, odtwarzanie CUPRA (`readyState=4`, czas odtwarzania rośnie, brak błędu), zdjęcia Enea/FPS/Klagem, odnośnik do zakresu oferty.
- Przejście z oferty do formularza i powrót: poprawne. Podcast oraz artykuł CMS poza zakresem hydratacji nadal się wyświetlają, bez nowych błędów JavaScript.

Skrypt obserwujący węzły został wstrzyknięty wyłącznie do lokalnych plików wynikowych, a następnie usunięty przed pomiarami. Nie jest częścią wdrożenia.

## Warunki porównania wydajności

Bazowy build zachowano w `docs/seo/qa-2026-10-09/first-render/dist-before`. Obie wersje obsługuje identyczny podgląd Vite, z poprawionym wyborem `path/index.html` również dla URL-a bez końcowego ukośnika. Bez tej poprawki Vite dla części takich adresów podawał HTML głównej, co nie odpowiadało produkcji. Wyników podstron z wcześniejszego, niepoprawionego podglądu nie należy zestawiać bezpośrednio z tym pomiarem.

Statyczny graf importów wejścia: 704617 → 641539 B; gzip (Python, poziom 9) 197468 → 170074 B, czyli −13,9%. To graf wejścia, bez późniejszych modułów stron, obrazów i kodu zewnętrznego; nie jest to całkowity transfer wizyty.

Porównanie Lighthouse: telefon, jeden worker, dwie próbki na trasę, kolejno wersja bazowa i zmieniona, bez równoległego buildu. Wyniki końcowe znajdują się w opisie PR oraz lokalnie w `reports/unlighthouse-first-render-before/` i `reports/unlighthouse-first-render-final/`. Wyniki laboratoryjne nie są danymi terenowymi GSC.

## Search Console — odczyt 9.10.2026

Raport indeksowania nadal ma aktualizację 4.10: 685 stron zindeksowanych i 440 pozostałych (254 wykryte, 147 zeskanowanych, 13 przekierowań, 13 alternatywnych canonical, 10 odpowiedzi 404, 2 noindex, 1 robots). Nie każda kategoria oznacza usterkę do usunięcia.

Menu nawigacyjne: aktualizacja 7.10, 78 prawidłowych elementów, 0 krytycznie nieprawidłowych; weryfikacja ostrzeżenia URL dla 2 elementów ma status „Rozpoczęto”. Brak danych terenowych Core Web Vitals. Nie ponawiano zgłoszeń indeksowania ani walidacji i nie przypisano wcześniejszych danych dzisiejszym zmianom.

Surowe dowody lokalne: `docs/seo/qa-2026-10-09/first-render/` (ignorowane w Git). Dostęp do projektu backendu CRM pozostaje osobnym, nierozwiązanym etapem; nie wysyłano ponownie testowego zapytania.
