# Cztery oferty SEO — Wrocław, Gdańsk, Łódź i Warszawa

## Zakres i punkt wyjścia

Kontynuacja standardu ofert Katowic i Krakowa z PR #36: indywidualny opis usługi, sześć części zakresu, trzy przykładowe sytuacje, sposób wyceny i raportowania, sześć FAQ, własne portfolio oraz sprawdzona wersja mobilna. Nie utworzono nowych adresów.

Odczyt Search Console 10 października 2026, usługa `sc-domain:fotz-studio.pl`, filtr trzech miesięcy. Dostępny raport obejmuje 7 lipca–6 października, więc nie służy do oceny bieżących wdrożeń.

| Adres `/seo/pozycjonowanie-…` | Wyświetlenia | Kliknięcia | Średnia pozycja |
| --- | ---: | ---: | ---: |
| `wroclaw` | 120 | 0 | 66,9 |
| `gdansk` | 94 | 0 | 52,8 |
| `lodz` | 34 | 0 | 56,2 |
| `warszawa` | 58 | 1 | 46,4 |

Wrocław: „pozycjonowanie wrocław” 56 wyświetleń, „pozycjonowanie stron wrocław cennik” 22, zapytania o agencję i audyt po 9. Gdańsk: „pozycjonowanie stron gdańsk” 37, „agencja seo gdańsk” 13; są też pojedyncze zapytania o Gdynię i Trójmiasto. Łódź: „seo łódź” 9, „pozycjonowanie stron łódź” 8, „agencja seo łódź” 5. Warszawa: „agencja seo warszawa” 23; zapytania o pozycjonowanie, SEO i audyt po 8 wyświetleń. To małe próby, nie dowód preferencji branżowych. Scenariusze na stronach są przykładami doboru zakresu, bez przypisywania im wyników klientów.

## Redakcja i wygląd

- Wrocław: koszt, porównywalny zakres oferty, audyt i migracja istniejącej strony. Zdjęcie projektu Klagem.
- Gdańsk: rzeczywisty zasięg w Trójmieście, informacje przed wizytą, sezonowość i rezerwacje. Zdjęcie Lech Poznań Lounge z realizacji dla Enea Stadionu.
- Łódź: rozróżnienie usług, katalogu producenta i sklepu; opisy, warianty i dane o zamówieniach. Fotografia produktów z istniejącego portfolio.
- Warszawa: specjalizacje, rzeczywiste placówki, ogólnopolski B2B oraz akceptacja treści przez osobę z firmy. Projekt RPPG Group.

Usunięto literówki („Wrocławiaia”, „Gdańskaa”, „Gdańskuu”, „w Wrocławiu”), powtórzenia i niepotwierdzone deklaracje lokalnych sukcesów. Każda oferta jasno wskazuje zespół w Poznaniu oraz obsługę zdalną. Zdjęcia mają opisowe podpisy, linki do rzeczywistych realizacji i istniejące warianty WebP 480/800/1200. Galeria projektów jest widoczna przed sekcją wyceny i występuje raz.

Wykorzystano `LocalSeoOffer`, zachowując odrębne treści czterech ofert. Wspólny H1 otrzymał separator między słowem „stron” a nazwą miasta, również dla odczytu tekstowego. To jedyna zmiana prezentacji dotykająca wcześniejszych ofert Katowic i Krakowa.

## SEO i działanie

- Tytuł, opis i canonical pozostają w komponencie konkretnej strony, zgodnie z ekstraktorem metadanych. Adresy i canonicale nie zmieniły się.
- Widoczne FAQ i schema korzystają z tych samych 24 odpowiedzi. Zachowano Service oraz Breadcrumb schema, bez deklarowania lokalnych oddziałów.
- Cztery strony dołączono do istniejącej hydratacji, zachowującej pełną treść HTML przy uruchomieniu aplikacji. Brak animacji ukrywających tekst.
- Linki usług prowadzą do rzeczywistych stron, w tym `/uslugi/pozycjonowanie-lokalne`. Nawigacja prowadzi do zakresu, przykładów, wyceny i FAQ.
- `lastmod` zmieniono tylko przy czterech merytorycznie edytowanych ofertach. Mapa miast w indeksie miała już datę 10 października po poprzednim wydaniu. Bez nowych stron, przekierowań, zmian CMS czy próśb o indeksowanie.

## Źródła

- [Google: struktura adresów sklepu](https://developers.google.com/search/docs/specialty/ecommerce/designing-a-url-structure-for-ecommerce-sites).
- [Google: migracja i zmiany adresów](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes).
- [Google: lokalne wyniki wyszukiwania](https://support.google.com/business/answer/7091?hl=pl).
- [Google: pomocne treści i podstawy SEO](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).
- Dane GSC odczytane w interfejsie oraz istniejące portfolio i `selected-work-images.json`.

Surowe odczyty, logi i zrzuty są w ignorowanym katalogu `docs/seo/qa-2026-10-10/four-seo-offers/`. Odbiór produkcji opisuje wydanie. Wyniki testów i pomiarów laboratoryjnych nie potwierdzają poprawy pozycji, leadów ani sprzedaży. Formularzy nie wysyłano.

## Walidacja lokalna

63 testy, TypeScript i ESLint zmienionych plików: PASS. Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów. Audyt całej witryny: 1072 unikalne URL-e w mapach, 134804 linki HTML i 4047 linków źródłowych bez błędów; 487 galerii bez błędów. Dodatkowy odbiór HTTP obejmuje wszystkie cztery oferty, Katowice i Kraków po zmianie wspólnego nagłówka, stronę główną, audyt oraz kontakt: 9 stron, 12 wariantów zdjęć i 4 wpisy mapy miast PASS. Sprawdzono zgodność widocznych FAQ i schema na każdej z czterech nowych ofert.

W przeglądarce sprawdzono wszystkie cztery strony na desktopie oraz przy 390 i 320 px. Brak poziomego przepełnienia, po jednym H1 i jednej galerii, zdjęcia załadowane. Tryb ciemny: Wrocław i Gdańsk; jasny: Łódź i Warszawa. Na każdej stronie działa kotwica wyceny, FAQ otwierane klawiaturą i przejście do formularza kontaktowego na górze strony. Formularzy nie wysyłano, rejestr JS bez błędów.

Mobilny Unlighthouse — jedna próbka lokalnego preview na każdy adres:

| Oferta | Wydajność | LCP | Dostępność / dobre praktyki / SEO |
| --- | ---: | ---: | --- |
| Wrocław | 88 | 3,3 s | 100 / 100 / 100 |
| Gdańsk | 87 | 3,4 s | 100 / 100 / 100 |
| Łódź | 85 | 3,4 s | 100 / 100 / 100 |
| Warszawa | 90 | 2,9 s | 100 / 100 / 100 |

TBT 0 ms na wszystkich, CLS 0–0,001. Brak próbki sprzed redakcji; wartości opisują bieżący pomiar laboratoryjny, nie zmianę wyników rzeczywistych użytkowników.
