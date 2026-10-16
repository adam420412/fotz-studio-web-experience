# Strony internetowe w miastach — konsolidacja i NEURONwriter — 16.10.2026

## Konsolidacja

12 miast miało po dwie strony tej samej usługi: `/uslugi/tworzenie-stron-internetowych/{miasto}` i `/uslugi/strony-internetowe/{miasto}`. Te pierwsze przekierowano (308, Vercel + `Redirect301`) na drugie — spójnie z ofertą Legnicy po przeglądzie (95). Miasta: Warszawa, Kraków, Wrocław, Gdańsk, Łódź, Toruń, Szczecin, Bydgoszcz, Katowice, Lublin, Poznań, Białystok. Usunięto 12 szablonów, odnośniki wewnętrzne prowadzą wprost do celu, aliasy usunięte z sitemap. W Poznaniu, Warszawie i Bydgoszczy alias miał więcej wyświetleń niż cel — po wdrożeniu trzeba porównać wspólne zapytania w GSC.

## Oferty podniesione do ≥ 95

Nowe analizy NEURONwriter (projekt `59db8bbb8ee62780`), ocena zbudowanego `main-content` z title/description, zapis w edytorze:

| Oferta | Wyśw. (cel + alias) | Analiza | Przed | Po |
|---|---:|---|---:|---:|
| /uslugi/strony-internetowe/poznan | 4 + 52 | c14b68e10adb6f96 („tworzenie stron internetowych poznań”) | 71 | **100** |
| /uslugi/strony-internetowe/torun | 66 + 14 | 19106952f9159eee | 67 | **95** |
| /uslugi/strony-internetowe/lodz | 52 + 27 | 979d8b770d10ac5a | 74 | **100** |
| /uslugi/strony-internetowe/szczecin | 49 + 28 | 4dc4bc3bd4a2fdd0 | 76 | **97** |
| /uslugi/strony-internetowe/bialystok | 44 + 13 | 13f2250b007e28f4 | 70 | **98** |

Strony przebudowano na układ oferty Legnicy (warianty zapytań, sekcje, realizacje, FAQ, dane strukturalne), z własną treścią dla każdego miasta. Poznań: zespół na miejscu, spotkania po uzgodnieniu terminu. Pozostałe: obsługa zdalna z Poznania, bez biura w mieście. Realizacje opisane bez wyników liczbowych; przy miastach spoza Poznania z dopiskiem, że to klienci z innych miejscowości.

Usunięte twierdzenia bez pokrycia m.in.: „+180% rezerwacji”, „+250% ruchu”, „5 lat / 15+ lat doświadczenia”, „50+ projektów w Toruniu”, „98% zadowolonych klientów”, „wsparcie 24/7”, „wycena w 24 h”, „30 dni bezpłatnej opieki”, „90 000 firm”, terminy realizacji w tygodniach, „gwarantuje sukces”, fikcyjny adres biura w Toruniu, nazwy lokalnych firm, deklarowana obsługa w językach LT/UK. Wszystkie pięć ofert dopisano do testu `offer-claims`.

## Do decyzji właściciela

- Nowe strony nie mają sekcji z linkami do innych miast ani osobnej sekcji kontaktowej (jak Legnica). Kontakt prowadzi przez formularz zapytania i /kontakt.
- Poznań: zdania o własnej produkcji zdjęć i wideo oraz o pracy dla firm usługowych i produkcyjnych.

## Kontrola lokalna

Testy 221/221, build 668 dokumentów / 665 pełnych treści SSR bez błędów, sitemap 666 bez problemów, 83 498 linków bez uszkodzeń; każda oferta ma jeden H1.
