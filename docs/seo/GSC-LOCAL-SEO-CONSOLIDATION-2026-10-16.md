# Lokalne SEO i konsolidacja ofert — 16.10.2026

## Dane i decyzja

Świeży odczyt Search Console: 14.07–13.10.2026, wyszukiwanie Sieć, dokładne adresy stron. Zapis ekranów w `output/lead-audit-2026-10-16/local-seo/gsc-*.txt`.

| Adres | Wyświetlenia | Kliknięcia | Średnia pozycja |
|---|---:|---:|---:|
| /uslugi/pozycjonowanie/katowice | 88 | 0 | 22,1 |
| /seo/pozycjonowanie-katowice | 318 | 0 | 77,3 |
| /uslugi/pozycjonowanie/krakow | 0 | 0 | brak danych |
| /agencja-seo-krakow | 141 | 0 | 48,7 |
| /seo/pozycjonowanie-krakow | 343 | 0 | 61 |

Katowice: oba adresy mają zapytania „pozycjonowanie katowice”, „pozycjonowanie stron katowice”, „agencja seo katowice”, „audyt seo katowice” i zapytania regionalne. Kraków: oba aktywne adresy mają m.in. „pozycjonowanie kraków”, „pozycjonowanie stron kraków”, „agencja seo kraków”, „audyt seo kraków”. Stare /uslugi/pozycjonowanie/krakow nie ma danych w tym okresie. Analiza top zapytań potwierdza tę samą intencję; nie jest dowodem przyczynowej kanibalizacji.

Docelowe /seo/pozycjonowanie-* wybrano ze względu na spójną architekturę, zweryfikowane oferty i pełniejsze pokrycie tematu. Starsze adresy mają lepszą średnią pozycję w odmiennym zestawie zapytań; nie twierdzimy, że wybrany docelowy URL już lepiej rankuje. Po zmianie potrzebna jest kontrola obu adresów oraz wspólnych zapytań. Dane kończą się przed wdrożeniem PR #64 i nie służą ocenie skuteczności wczorajszej zmiany.

Przygotowano trwałe przekierowania Vercel oraz odpowiadające im przejścia SPA:

- /uslugi/pozycjonowanie/katowice → /seo/pozycjonowanie-katowice
- /uslugi/pozycjonowanie/krakow → /seo/pozycjonowanie-krakow
- /agencja-seo-krakow → /seo/pozycjonowanie-krakow

Usunięto trzy niezależne szablony, a ich odnośniki wewnętrzne prowadzą bezpośrednio do ofert docelowych. Adresy źródłowe usunięto z sitemap. Nie przeniesiono niepotwierdzonych statystyk wzrostu, ocen klientów, gwarancji TOP ani sztywnych cen. Zakresy usług i pytania o wycenę pokrywają już docelowe oferty. Nie konsolidowano pozostałych miast bez ich analizy.

## Oferta lokalna

/uslugi/pozycjonowanie-lokalne w świeżej inspekcji jest już w indeksie. Wpis „discovered” z audytu 4.10 jest historyczny. Nowy tekst przedstawia osobną usługę: profil i stronę firmy z rzeczywistym obszarem obsługi, dane NAP, treści, zdjęcia, opinie, pomiar, zakres wdrożeń i wycenę. Portfolio nie jest przedstawiane jako case study wyników SEO. CTA ustawia SEO / ongoing w formularzu. Zachowano publiczny adres i self-canonical, lastmod: 2026-10-16.

Usunięto wcześniejsze niepotwierdzone liczby 46%, 44%, 76%, 72%, 35%, +180%, +65%, +40%, ceny 499/999/1999 oraz obietnicę TOP 3 w określonym czasie.

## NEURONwriter

Projekt `59db8bbb8ee62780`, nowa analiza `2991be925c9eb1e1`, fraza „pozycjonowanie lokalne”, Polish / google.pl / top-intent. Jedna analiza z planu, bez zakupu. Wynik importu starego publicznego URL: 54. Nowy rzeczywisty HTML z renderera SSR: 100, zapisany w edytorze NEURONwriter. Obie oferty docelowe miast ponownie sprawdzone z publicznych adresów: Katowice 95, Kraków 95. Przekierowane aliasy nie potrzebują oddzielnych konkurujących tekstów.

Ocena tekstu nie potwierdza rankingu, widoczności w AI ani pozyskania klienta.

## Źródła zasad

- Google, lokalne wyniki: https://support.google.com/business/answer/7091?hl=pl
- Google, konsolidacja podobnych adresów: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

## Stan kontroli

Przegląd Claude oczekuje na dostęp. Claude Code CLI zwrócił `401 OAuth access token is invalid`; odczyt aplikacji desktopowej zakończył się timeoutem. Poproszono użytkownika o otwarcie zalogowanej aplikacji. Nie przedstawiamy przeglądu z PR #64 jako przeglądu tej zmiany.

Kontrola lokalna: TypeScript bez błędów, 152/152 testy, 1072 dokumenty / 1069 pełnych treści SSR bez błędów, 1070 adresów sitemap bez problemów, 134677 odnośników HTML i 3930 źródłowych bez uszkodzeń, 484 galerie bez błędów. Mobilnie 390 px bez poziomego przewijania; CTA wybiera SEO / stałe działania w formularzu. Trzy przejścia SPA zachowują query i hash. Po redakcji usuwającej powtórzenia wynik SSR nadal 100. Powtórny build końcowy i CI w toku; publikacja i ocena publicznej wersji po wdrożeniu nie są jeszcze potwierdzone.

Nowa oferta nie dodaje odnośnika do starej strony technicznego SEO z niezweryfikowaną deklaracją wzrostu. Jej opis zakresu pozostaje na miejscu; audyt techniczny można omówić w formularzu.
