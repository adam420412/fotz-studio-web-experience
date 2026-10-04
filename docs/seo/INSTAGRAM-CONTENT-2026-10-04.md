# Instagram i obsługa social media — 4 października 2026

## Wybór stron z Search Console

Właściwość: `sc-domain:fotz-studio.pl`. Produkcja: `https://www.fotz-studio.pl`.

Eksport odczytany 4 października, okres 30 czerwca–29 września 2026:

| URL | Kliknięcia | Wyświetlenia | Średnia pozycja |
| --- | ---: | ---: | ---: |
| `/blog/instagram-dla-firmy` | 0 | 192 | 26,7 |
| `/social-media/obsluga` | 0 | 126 | 47,0 |
| `/social-media/instagram` (historyczny adres, dziś przekierowanie) | 0 | 257 | 34,9 |

Dane sprzed październikowych wdrożeń służą do wyboru zakresu, nie do pomiaru jego efektu. Nie sumujemy zapytań z wynikami stron ani nie uznajemy wyświetleń za leady.

Bieżąca inspekcja poradnika: **w indeksie**, skanowanie 23 września 2026, 21:17:45. W tym historycznym skanie canonical deklarował `https://fotz.pl/blog/instagram-dla-firmy`, a Google wybrał sprawdzany URL. Pobranie bieżącej produkcji już przed tą zmianą potwierdziło prawidłowy canonical na `www.fotz-studio.pl`. Nie przypisujemy wcześniejszej naprawy canonicala temu pakietowi.

## Usunięte problemy

- Poradnik przedstawiał IGTV/Guide jako aktualne formaty, wymyślone zasięgi dla formatów, gwarantowane przewagi ROAS oraz fałszywe zdanie, że Stories nie podlegają rankingowi. Tekst miał liczne błędy językowe i nieaktualny rok w tytule.
- Oferta zawierała wyniki bez dokumentacji (`+340%`, `2.5M+`, `+520%` itd.), mylące przypisania realizacji do prowadzenia profili i nielimitowane publikacje. Długie sekcje powtarzały ogólne frazy.
- Link Instagram w stopce wskazywał alias HTTP bez odpowiadającej trasy SPA. Stopka prowadzi teraz wprost do poradnika; dodano też zgodne przekierowanie SPA dla starszych linków. Istniejące przekierowanie 308 pozostaje bez zmian.

## Nowa treść i wygląd

Poradnik odpowiada kolejno na pytania o cel, profil, formaty, miesięczny plan, pomiar i reklamy. Zawiera przykłady oznaczone jako propozycje, źródła Meta, spis treści i link do obsługi profilu. Zachowano datę publikacji 12.04.2025; widoczna data aktualizacji oraz `Article.dateModified` to 4.10.2026, po rzeczywistej redakcji.

Oferta pokazuje sześć obszarów pracy, trzy modele współpracy, zakres wyceny i odpowiedzialności, FAQ oraz dwa rzeczywiste filmy z okładkami. Odtwarzacze powstają dopiero po kliknięciu. Nie zmieniono cen zatwierdzonych pakietów START ani mechanizmu formularzy.

Obie strony mają czytelny układ w jasnym i ciemnym motywie. Usunięto wymuszony `prose-invert` poradnika, ciężkie zewnętrzne zdjęcie ilustracyjne i niepotrzebne animacje. Poprawiono układ numerów kroków na małym ekranie. Mapy XML zachowują 1072 adresy; daty zmieniono tylko dla dwóch edytowanych stron i ich map. Mapa HTML używa aktualnych tytułów.

## Walidacja

- TypeScript: PASS; ESLint czterech zmienionych plików TSX: PASS.
- Testy istniejącej logiki: 35 PASS, 0 FAIL, 0 SKIP.
- Build: 1084 dokumenty, 1081 pełnych treści, 0 błędów renderowania.
- Audyt: 0 błędów metadanych i map, 4026 odnośników źródłowych, 0 błędnych celów.
- Przeglądarka: 1280, 390 i 320 px; jasny/ciemny motyw, brak poziomego przepełnienia, FAQ, spis treści, przejścia oferta–poradnik i alias SPA. Film AutoSpa: 0 żądań MP4 przed kliknięciem, po kliknięciu poprawne odtwarzanie (`readyState=4`).
- Kontrola HTTP przed wdrożeniem wykazała stare treści i obietnice, brak wzajemnego linku w ofercie i odtwarzacze ładowane przy wejściu. Ten sam skrypt zostanie użyty na podglądzie i produkcji.
- Potwierdzenia CI, publikacji oraz zgłoszenia GSC są zapisywane oddzielnie w lokalnym, ignorowanym katalogu `qa-2026-10-04-gsc/instagram/`. Ten raport nie jest dowodem indeksacji nowej wersji ani wzrostu ruchu.

## Źródła pierwotne

- [Meta: systemy rekomendacji, w tym Stories](https://about.fb.com/news/2023/06/how-ai-ranks-content-on-facebook-and-instagram/).
- [Meta: wskazówki w panelu profesjonalnym](https://about.fb.com/news/2024/10/best-practices-education-hub-creators-instagram/).
- [Google: pomocne i wiarygodne treści](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: tytuły stron](https://developers.google.com/search/docs/appearance/title-link).

Pomoc Meta dotycząca statystyk przekierowała do logowania, a strona Instagram Ranking Explained zwróciła 429. Nie wykorzystano ich jako przeczytanych źródeł. Nie deklarujemy zapoznania się z pełną dokumentacją lub najnowszym algorytmem.
