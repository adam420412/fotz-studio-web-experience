# Oferty — fala 2 — 16.10.2026

Dwanaście ofert z co najmniej 20 wyświetleniami w GSC (9.07–8.10) przepisano od nowa i oceniono w NEURONwriter na zbudowanej stronie (`evaluate-content`, zapis w edytorze `import-content`). Projekt `59db8bbb8ee62780`, 12 nowych analiz (Polish / google.pl), bez zakupu kredytów.

| Oferta | Wyśw. GSC | Ocena | Słowa |
|---|---:|---:|---:|
| /agencja-social-media/szczecin | 80 | 94 | ok. 1380 |
| /agencja-social-media/lublin | 68 | **96** | ok. 1320 |
| /agencja-social-media/warszawa | 52 | **96** | ok. 1630 |
| /agencja-marketingowa/rzeszow | 48 | **98** | ok. 1270 |
| /agencja-social-media/krakow | 47 | 94 | ok. 1590 |
| /uslugi/studio-podcastowe | 45 | **95** | ok. 1190 |
| /agencja-marketingowa/lodz | 43 | **96** | ok. 1630 |
| /uslugi/sklepy-internetowe/krakow | 43 | **99** | ok. 1870 |
| /kompleksowa-obsluga-marketingowa | 38 | **97** | ok. 2020 |
| /uslugi/produkcja-filmow | 37 | **96** | ok. 1470 |
| /uslugi/strony-internetowe/wroclaw | 37 | **100** | ok. 1790 |
| /agencja-marketingowa/krakow | 34 | **96** | ok. 1300 |

Szczecin i Kraków (social media) mają 94: punkt kosztowało usunięcie roku „2026” z nagłówków oraz frazesów („klucz do sukcesu”, „działania digitalowe”), które NEURONwriter podpowiadał. Zostawiono naturalny tekst; do decyzji, czy dopisywać te frazy.

Ocena tekstu nie potwierdza rankingu ani pozyskania klienta.

## Zmiany techniczne

- Social media w Szczecinie, Lublinie, Warszawie i Krakowie mają własne strony (`SocialMedia<Miasto>.tsx`) zamiast wspólnego szablonu `SocialMediaClusterHub`. Adresy bez zmian; trasy dodane przed `/agencja-social-media/:clusterSlug`.
- Stary szablon `/social-media/warszawa` (4 wyświetlenia, tekst bez polskich znaków) zastąpiony nową ofertą; adres przekierowany 308 na `/agencja-social-media/warszawa` (vercel.json i trasa SPA), usunięty z sitemap.
- `ProdukcjaFilmowPoznan.tsx` ma własną kopię `filmOffer`; wspólne dane w `src/data/sales-offers.ts` (używane przez `/uslugi/produkcja-video`) bez zmian.
- Wszystkie 12 ofert dopisano do testu `offer-claims`.

## Co usunięto (twierdzenia bez dowodu)

Pakiety cenowe (m.in. 2 499 / 4 999 / 9 999 zł, 2 499 / 5 999 / 14 999 PLN, 2 000–10 000 PLN, sklepy od 8 / 20 / 35 tys. zł, podcast 350 / 600 za godzinę, WIDEO START 1 490 zł na stronie produkcji filmów), liczby klientów i projektów („500+”, „80+ sklepów”, „200+ projektów”), lata doświadczenia, procenty wzrostu i zadowolenia, „TOP 3”, opinie z gwiazdkami, wsparcie 24/7, odpowiedź w 24 h, stałe terminy, sprzęt studia (Shure/Rode, 4K) i „studio w centrum Poznania”, nieudokumentowane realizacje (Apartamenty Chorwacja, Victory Cars, Cute Dumpling). Każda oferta miejska mówi, że zespół pracuje w Poznaniu, a firmy z danego miasta obsługuje zdalnie, bez biura na miejscu.

## Do akceptacji przez właściciela

- Studio podcastowe: czy FOTZ ma własne studio (strona mówi o nagraniu u klienta, w sali lub wynajętym studio), transmisje na żywo, wynajem bez ekipy.
- Produkcja filmów: czy przywrócić cenę pakietu WIDEO START; czy dopisać operatora drona z UAVO, OC i badaniami (informacja właściciela).
- Zakres usług: projekty do druku (wizytówki, teczki, banery, ulotki, roll-upy), projektowanie logo, strony na WordPressie i WooCommerce, wersje EN/DE, treści po niemiecku, „proste automatyzacje” (leady do e-maila lub CRM), integracje sklepów (PayU, Przelewy24, Stripe, BLIK, InPost/DPD/DHL, ERP, Allegro), packshoty z przesłanego towaru.
- Sposób pracy: jedna osoba kontaktowa / „social media manager”, raport co miesiąc, instrukcja nagrywania telefonem, nagranie zdalnie wyreżyserowane, „nie prowadzimy klasycznego PR ani zakupu mediów tradycyjnych”.
- Realizacje: opisy zakresu prac dla RPPG, Klagem, FPS Cegielski i Enea Stadion; czy pokazać mevky.pl jako realizację sklepu.
- Zdjęcie Enea Stadionu w nagłówku stron social media w innych miastach.
- Wzorzec `AgencjaMarketingowaWroclaw.tsx` nadal podaje adres „Plac Wolności 16” — czeka na decyzję o adresie.

## Kontrola lokalna

Testy 242/242, `tsc` bez błędów, build 667 stron / 664 pełnych treści SSR bez błędów, sitemap 665 bez problemów, 83 503 linki bez uszkodzeń, galerie bez błędów; każda oferta ma jeden H1.
