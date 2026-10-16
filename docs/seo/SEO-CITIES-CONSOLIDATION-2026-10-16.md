# Konsolidacja SEO miast — Warszawa, Wrocław, Łódź, Gdańsk, Lublin — 16.10.2026

Ten sam schemat co Katowice i Kraków (PR #64/#65) oraz Poznań (PR #66): jedna oferta `/seo/pozycjonowanie-{miasto}` na komponencie `LocalSeoOffer`, pozostałe szablony usunięte, aliasy z trwałym przekierowaniem.

## Przekierowania 308

| Źródło | Wyświetlenia GSC (9.07–8.10) | Cel |
|---|---:|---|
| /agencja-seo-warszawa | 142 | /seo/pozycjonowanie-warszawa (70) |
| /uslugi/pozycjonowanie/warszawa | — | /seo/pozycjonowanie-warszawa |
| /agencja-seo-wroclaw | 72 | /seo/pozycjonowanie-wroclaw (121) |
| /uslugi/pozycjonowanie/wroclaw | — | /seo/pozycjonowanie-wroclaw |
| /uslugi/pozycjonowanie/lodz | 100 | /seo/pozycjonowanie-lodz (42) |
| /uslugi/pozycjonowanie/gdansk | 38 | /seo/pozycjonowanie-gdansk (96) |
| /agencja-seo-lublin | 77 | /seo/pozycjonowanie-lublin (nowa) |
| /uslugi/pozycjonowanie/lublin | 40 | /seo/pozycjonowanie-lublin |

Wybrano adresy `/seo/pozycjonowanie-*` ze względu na spójną architekturę z ofertami po przeglądzie, nie dlatego, że już lepiej rankują (Warszawa i Łódź mają więcej wyświetleń na aliasie). Po wdrożeniu trzeba porównać wspólne zapytania obu adresów w GSC. Usunięte szablony zawierały niepotwierdzone statystyki, ceny i obietnice pozycji; nie przeniesiono ich. Odnośniki wewnętrzne prowadzą wprost do ofert docelowych; aliasy usunięte z sitemap; Lublin dodany do sitemap i hydratacji.

## NEURONwriter

Projekt `59db8bbb8ee62780`, pięć nowych analiz (Polish / google.pl), bez zakupu dodatkowych kredytów. Ocena zbudowanego `main-content` z title/description przez API `evaluate-content`, zapis w edytorze `import-content`:

| Oferta | Analiza | Przed | Po | Słowa |
|---|---|---:|---:|---:|
| Warszawa | e532d063ba531428 | 52 | **98** | ok. 2320 |
| Wrocław | e90aa476368c8ace | 46 | **98** | ok. 2155 |
| Łódź | 44ca580d47bf9933 | 52 | **99** | ok. 1875 |
| Gdańsk | c1d194b5daa622ed | 49 | **99** | ok. 2705 |
| Lublin | 99328e9690d6770e | 24 | **≥95** (wynik końcowy w PR) | ok. 2470 |

Treści są pisane osobno dla każdego miasta (rynek, typy firm, dzielnice i okolice jako przykłady obszaru), bez statystyk. Kontrola duplikacji: zdania wspólne między ofertami miast to tylko stałe elementy szablonu. Każda oferta wprost mówi, że zespół pracuje w Poznaniu, a firmy z danego miasta obsługuje zdalnie — bez biura w tym mieście. Wszystkie pięć ofert dopisano do testu `offer-claims`.

Ocena tekstu nie potwierdza rankingu ani pozyskania klienta.

## Do akceptacji przez właściciela

- Ogólne opisy gospodarki miast (np. port i stocznie w Gdańsku, tradycja włókiennicza w Łodzi, ośrodek akademicki i medyczny w Lublinie).
- Zdania o możliwości realizacji zdjęć lub filmu na miejscu — wyjazd i jego koszt ustalane osobno.

## Kontrola lokalna

Testy 198/198, build 680 dokumentów / 677 pełnych treści SSR bez błędów, sitemap 678 bez problemów, 84 971 linków bez uszkodzeń, galerie bez błędów; każda oferta ma jeden H1.
