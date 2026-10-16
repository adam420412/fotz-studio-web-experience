# Pozycjonowanie w miastach — fala 1 — 16.10.2026

Osiem ofert lokalnego SEO z co najmniej 20 wyświetleniami w GSC (9.07–8.10) przebudowano na wspólnym komponencie `LocalSeoOffer`, tak jak Kraków, Katowice, Poznań i pięć dużych miast (PR #64–#68). Adresy, nazwy eksportów i trasy są bez zmian, więc nie ma przekierowań.

## NEURONwriter

Projekt `59db8bbb8ee62780`, osiem nowych analiz (Polish / google.pl), bez zakupu kredytów. Ocena zbudowanego `main-content` z title i description (`evaluate-content`), zapis w edytorze (`import-content`):

| Oferta | Wyśw. GSC | Analiza | Ocena | Słowa |
|---|---:|---|---:|---:|
| /uslugi/pozycjonowanie/czestochowa | 61 | c5128d2c5ef41ca1 | **97** | ok. 2120 |
| /uslugi/pozycjonowanie/olsztyn | 61 | c2d5d7d283c99677 | **96** | ok. 1610 |
| /pozycjonowanie/sosnowiec | 47 | 0248744294cff686 | **97** | ok. 1940 |
| /pozycjonowanie/walbrzych | 47 | 74c2a931e653de55 | **100** | ok. 1530 |
| /uslugi/pozycjonowanie/rzeszow | 41 | 4e8b5ae283773812 | **96** | ok. 1090 |
| /pozycjonowanie/plock | 37 | d3df86d8f0bf69ed | **96** | ok. 1700 |
| /pozycjonowanie/zabrze | 28 | 3fb2eb3ecfc2a63d | **100** | ok. 1000 |
| /pozycjonowanie/elblag | 24 | 71509d131bc35308 | **97** | ok. 1610 |

Ocena tekstu nie potwierdza rankingu ani pozyskania klienta.

## Co usunięto

Stare szablony zawierały ceny („od 899 zł”, „900–2500 zł/mies.”), obietnice („TOP 10 po 6–8 tygodniach”, „TOP 5”), procenty wzrostu, ocenę 4,9/5, liczby mieszkańców i tezy o „niskiej konkurencji”. Nic z tego nie przeniesiono. Każda oferta mówi, że zespół pracuje w Poznaniu i obsługuje firmy z danego miasta zdalnie, bez biura na miejscu. Wszystkie osiem dopisano do testu `offer-claims`.

Kontrola duplikacji: wspólne zdania między ofertami miast to tylko stałe elementy szablonu (proces, kontakt, podpisy zdjęć portfolio).

Usunięto też śledzony w repozytorium pusty plik tymczasowy `PozycjonowanieKoszalin.tsx.tmp.*`.

## Do akceptacji przez właściciela

- Ogólne opisy miast i przykłady obszaru (np. Jasna Góra i Jura w Częstochowie, Zagłębie przy Sosnowcu, przemysł w Płocku, dzielnice jako przykłady fraz lokalnych).
- W Płocku jedna sekcja wspomina tworzenie stron, wyceniane osobno.
- Linki do innych miast prowadzą częściowo do starszych szablonów (Gliwice, Toruń), które czekają na przebudowę.

## Kontrola lokalna

Testy 229/229, `tsc` bez błędów, build 668 stron / 665 pełnych treści SSR bez błędów, sitemap 666 bez problemów, 83 551 linków bez uszkodzeń, galerie bez błędów; każda oferta ma jeden H1.
