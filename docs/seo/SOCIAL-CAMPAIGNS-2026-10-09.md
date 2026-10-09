# Social media, poradnik o kampaniach i nawigacja bloga — 9 października 2026

## Powód i dane Search Console

Odczyt właściwości `sc-domain:fotz-studio.pl`, 9 października. Porównanie 28 września–4 października do 21–27 września:

- Poradnik `/blog/czym-sa-kampanie-reklamowe-i-jak-skutecznie-je-prowadzic`: 11 wobec 111 wyświetleń, 0 kliknięć w obu okresach, średnia pozycja 29,9 wobec 34,9. Zapytania obejmują „obsługa kampanii reklamowych”, „kampanie reklamowe w internecie”, „kampanie reklamowe podział” i „czym jest kampania reklamowa”. Spadek wyświetleń nie dowodzi pogorszenia pozycji ani jednej określonej przyczyny.
- Zapytanie „social media marketing”: 221 wobec 86 wyświetleń, 0 kliknięć, pozycja 3 wobec 5,2. Wszystkie wyświetlenia tabela przypisuje do historycznego `http://www.fotz-studio.pl/`. Nie przypisujemy ich ofercie `/uslugi/social-media-marketing`. Wybór tej oferty do redakcji wynika z przeglądu treści i jej roli w istniejącym klastrze usług.
- Inspekcja poradnika: adres już jest w indeksie. Ostatnie skanowanie 20 września, 01:13:16; historyczny zadeklarowany canonical wskazuje jeszcze `fotz.pl`, ale Google wybrał sprawdzany URL na `www.fotz-studio.pl`. Aktualny HTML ma już poprawny canonical. Nie traktujemy starego odczytu jako utraty indeksacji.
- Inspekcja oferty: także znajduje się w Google, ze skanowaniem 8 września, 12:30:40. Historyczny canonical wskazuje `fotz.pl`, Google wybrał sprawdzany URL; raport pokazuje niekrytyczne ostrzeżenie breadcrumbs. Aktualny HTML przechodzi kontrolę canonicala i kompletnych breadcrumbs.
- Okres pomiaru poprzedza to wdrożenie. Raport nie stanowi dowodu wzrostu ruchu lub sprzedaży po poprawkach.

## Zmiany

1. Oferta Social Media Marketing ma spójny z marką układ, sześć ścieżek usług, zdjęcia z prawdziwych realizacji, przejście do CUPRA i rolek, zakres produkcji, zasady akceptacji, pomiar oraz FAQ dostępne w HTML. Usunięto niepotwierdzone pakiety 1299/2299/3999 zł, nielimitowane treści, obietnicę 3× zasięgu, statystyki platform bez źródeł i sprzeczne informacje o budżecie.
2. Istniejący poradnik odpowiada wprost na pytania o definicję, rodzaje kampanii, brief, budżet, wykonawcę i pomiar. Zastąpiono uniwersalną proporcję budżetu oraz próg „1000 wyświetleń lub 50 kliknięć” opisem kryteriów testu. Dodano jawnie hipotetyczny przykład rachunku, rozróżnienie zapytań/klientów/ROAS, oryginalną okładkę CUPRA i właściwe linki do ofert. Korekty stosują się tylko przy zgodności z przejrzaną treścią CMS; późniejsze zmiany źródła pozostają do nowej redakcji. Data publikacji artykułu i baza CMS nie są zmieniane.
3. Mechanizm spisu treści dopasowuje lokalne fragmenty z polskimi znakami, interpunkcją i zakodowanym `&` do jednoznacznych istniejących nagłówków. Zachowuje prawidłowe odnośniki, inne strony, nieznane i niejednoznaczne cele. Nagłówki mają odstęp od stałej nawigacji po skoku. Linki wewnątrz treści mają stałe podkreślenie, aby nie rozróżniać ich wyłącznie kolorem. Korekta naprawia 297 odnośników w 47 artykułach i działa w HTML serwera oraz po uruchomieniu aplikacji.
4. Zmieniono `lastmod` tylko dwóch merytorycznie edytowanych adresów oraz wpisy dwóch zawierających je map. Pozostają te same adresy kanoniczne i 1072 URL-e w mapach.

## Źródła merytoryczne

- [Google Ads: sposoby śledzenia konwersji](https://support.google.com/google-ads/answer/1722054?hl=pl) — różne działania i źródła konwersji.
- [Google Ads: cele konwersji](https://support.google.com/google-ads/answer/10995103?hl=pl) — wybór działań, pod które optymalizowana jest kampania.
- Portfolio i istniejące pliki FOTZ: `FeaturedFilms`, `selected-work.mjs`; bez przypisywania materiałom nieudokumentowanych wyników kampanii.

## Weryfikacja

- TypeScript i ESLint zmienianych komponentów/helperów: PASS. 53 testy: PASS, w tym zgodność korekt z CMS, wszystkie lokalne fragmenty w 61 artykułach, zachowanie linków zewnętrznych, niejednoznacznych i błędnie zakodowanych oraz ignorowanie atrybutów `data-*`.
- Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów renderowania. 1072 unikalne adresy map, 0 błędów metadanych/map i 0 błędnych spośród 134770 odnośników w HTML. 4042 linki źródłowe i 487 galerii bez błędów.
- Dodatkowy odbiór HTML: oferta i 60 publicznych stron CMS mają właściwe canonicale, jeden H1, aktualny plik JS i działające lokalne fragmenty. Celowo wyłączono starszy techniczny `test-babylove-article`, który ma własną politykę canonical/noindex; testy helpera nadal obejmują wszystkie 61 rekordów CMS.
- Przeglądarka: oferta 390 px / ciemny, poradnik 320 px / jasny, widok desktopowy oferty i galerii. Brak poziomego przepełnienia. FAQ otwiera się; spis treści przenosi do właściwego nagłówka widocznego poniżej nawigacji; nowe odnośniki prowadzą do poradnika i `/social-media/obsluga#materialy`; zdjęcia galerii się ładują. Konsola bez błędów JS. Bez wysyłania formularzy.
- Mobilny pomiar lokalny (po jednej próbie, bez danych CrUX): oferta 80/100 wydajności i LCP 4,4 s; poradnik 76/100 i LCP 5,9 s. SEO i dobre praktyki: 100/100 dla obu. Dostępność oferty: 100/100; wynik 96/100 poradnika ujawnił brak podkreślenia linku w podpisie CUPRA, objęty dodatkową poprawką CSS. Wynik ponownego pomiaru oraz odbiór produkcji należy sprawdzać w opisie PR. Wydajność starszego szablonu CMS pozostaje kolejnym etapem, bez deklaracji poprawy CWV. Surowe dowody konta i QA pozostają w ignorowanym `docs/seo/qa-2026-10-09/social-campaigns/`.
