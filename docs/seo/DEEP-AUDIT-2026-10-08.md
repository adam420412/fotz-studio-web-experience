# Rozszerzony audyt FOTZ Studio — 8 października 2026

## Zakres i narzędzia

- Lighthouse CI 0.15.1: istniejąca kontrola czterech mobilnych szablonów w każdym PR, po dwa pomiary.
- Unlighthouse 0.19.1: wykonany audyt produkcji na bazie `0d74c65`, 20 jawnie wybranych tras, jeden pomiar mobilny każdej trasy, jeden pracownik. To próbka szablonów, nie ręczny przegląd 1074 stron.
- lychee 0.24.2: wszystkie zewnętrzne odnośniki HTTP(S) wyodrębnione z całego statycznego buildu; plik źródeł pozwala przypisać błąd do artykułu.
- Osobna kontrola całego buildu: metadane, kanoniki, mapy XML, linki wewnętrzne i galerie realizacji.

Wyniki laboratoryjne dotyczą tego uruchomienia. Nie dowodzą indeksacji, ruchu ani poprawy pozycji Google. W tej zmianie nie wykonano nowego eksportu Search Console ani ponownego zgłoszenia map — dane GSC trzeba analizować oddzielnie dla `sc-domain:fotz-studio.pl`.

## Co poprawiono

1. 18 eksportów portfolio otrzymało WebP o szerokości do 1200 px: 7 653 640 → 662 004 bajty (91,4% mniej). Podmieniono importy w ofertach, menu, sekcjach i realizacjach; oryginały zachowano. Generowanie: `node scripts/prepare-portfolio-images.mjs`.
2. Główna okładka wideo ma warianty 480/800 px i `srcset`. Film nadal pobiera się po kliknięciu. Generowanie: `node scripts/prepare-video-posters.mjs`.
3. Artykuł o kosztach strony pokazuje realizację FPS Poznań zamiast zdjęcia stockowego; obraz LCP ładuje się priorytetowo. Poprawiono mobilną nawigację, rozdzielono kategorię od linku powrotu, usunięto powtórzony blok ze sprzecznymi cenami. Widoczne FAQ i pojedynczy `FAQPage` korzystają z jednej listy pytań.
4. Naprawiono 14 starych adresów `blog.fotz.pl` do istniejących artykułów, omyłkowy link `m.in.`, odnośniki monday/IAB i niedziałający skrót do panelu klienta w stopce. Stopka prowadzi teraz do kontaktu pod nazwą „Obsługa klienta”.
5. Przejrzano osiem artykułów CMS wskazanych przez uszkodzone źródła: poprawiono 19 fragmentów. MŚP odpowiadały za **46,6% całkowitego PKB** (dane za 2022 w raporcie PARP 2025), a nie 74,1%. Usunięto niepotwierdzone obietnice wzrostu i przykłady pozornych wyników; zastąpiono je praktycznymi wskazówkami pomiaru. Korekty są jawne w `reviewed-blog-copy.mjs` i wspólne dla HTML oraz aplikacji. Test wymaga ponownego przeglądu po zmianie tekstu źródłowego.
6. Podkreślenia odnośników w treści poprawiają ich rozpoznawalność. Poprawiono nazwy dostępne przycisku filmu, kart galerii i dni kalendarza oraz kolejność nagłówków kontaktu i realizacji na stronie usługi. Logotypy mają stałe wymiary.
7. Dodano ręczny workflow `Deep SEO audit`, konfiguracje, instrukcję i mapowanie linków do stron źródłowych. Node w CI ujednolicono do 22.22.0 ze względu na wymagania Unlighthouse.

Źródła korekt: [PARP, raport 2025](https://www.parp.gov.pl/storage/publications/pdf/ROSS_2025_skorygowany_22_07_2025.pdf), [IAB Polska / PwC AdEx](https://www.iab.org.pl/aktualnosci/miliard-wiecej-niz-rok-wczesniej-dla-reklamy-online-iab-polska-pwc-adex/), [monday B2B marketing](https://monday.com/blog/marketing/b2b-marketing/).

## Punkt odniesienia: produkcja przed zmianami

| Trasa | Wydajność | Dostępność | SEO |
| --- | ---: | ---: | ---: |
| / | 69 | 100 | 100 |
| /agencja-social-media | 82 | 100 | 100 |
| /blog/ile-kosztuje-strona-internetowa | 74 | 96 | 100 |
| /blog/strona-internetowa-dla-malej-firmy | 74 | 100 | 100 |
| /cennik | 100 | 100 | 100 |
| /dla-kogo/instytucje | 100 | 100 | 100 |
| /kontakt | 84 | 99 | 100 |
| /o-nas | 100 | 100 | 100 |
| /realizacje | 99 | 100 | 100 |
| /realizacje/enea-stadion | 98 | 100 | 100 |
| /realizacje/gierki | 77 | 100 | 100 |
| /realizacje/klagem | 76 | 100 | 100 |
| /seo/audyt | 82 | 100 | 100 |
| /social-media/content | 99 | 100 | 100 |
| /social-media/obsluga | 100 | 100 | 100 |
| /uslugi | 80 | 100 | 100 |
| /uslugi/fotografia-produktowa | 78 | 100 | 100 |
| /uslugi/strony-internetowe | 76 | 98 | 100 |
| /uslugi/strony-internetowe/wielkopolska | 78 | 100 | 100 |
| /uslugi/video-marketing | 76 | 100 | 100 |

Wszystkie 20 stron: best practices 100. Proces poprawnie zakończył się kodem 1, ponieważ wydajność głównej 69 była poniżej budżetu 70. Niska wydajność części szablonów wiąże się m.in. z obrazami, czasem LCP i wspólnym JavaScriptem. Nie obniżono progu, żeby ukryć wynik.

## Kontrola odnośników

Pierwszy przebieg: 201 zapisanych adresów, 200 unikalnych po normalizacji lychee, 173 udane sprawdzenia i 28 błędów. Błędy powiązano z konkretnymi stronami; nie tworzono przekierowań do przypadkowych zamienników.

Końcowy przebieg: 179 zapisanych adresów, 178 unikalnych po normalizacji, 176 udanych sprawdzeń, 3 błędy, 0 timeoutów. Po poprawkach pozostają do ręcznej weryfikacji trzy źródła blokujące automat: PWN (403), Adjet (403), Contentful (429). Nie dodano globalnej listy ignorowania tych statusów. Odpowiedź 403/429 sama w sobie nie dowodzi, że artykuł zniknął. W związku z tym zadanie lychee może nadal zakończyć się niepowodzeniem; raport i lista stron są zachowywane.

## Walidacja buildu

- Build: 1074 strony, 1071 pełnych treści HTML, 0 błędów renderowania.
- Mapy: 1072 unikalne adresy, 0 problemów map i metadanych.
- 134 781 odnośników wewnętrznych w HTML i 4038 odnośników źródłowych: 0 błędnych celów.
- 487 galerii realizacji: 0 błędów.
- TypeScript i 43 testy: poprawne; lint zmienionych elementów funkcjonalnych: poprawny.
- Kontrola gotowego artykułu: pojedynczy FAQPage, pięć odpowiedzi zgodnych z widoczną treścią.

## Dowody i granice sprawdzenia

Lokalne raporty są ignorowane przez Git: `docs/seo/qa-2026-10-08/deep-audit/`, `reports/links/`, `reports/unlighthouse-before/`. Pełne raporty Lighthouse i lychee nie trafiają do publicznego repozytorium. Nie wysyłano formularzy ani nie tworzono próbnych rezerwacji.

Kolejne priorytety: porównanie wyników po wdrożeniu, ograniczenie wspólnego JavaScriptu i analiza rzeczywistych Core Web Vitals oraz wykluczeń indeksacji w GSC. Przegląd merytoryczny ośmiu wskazanych artykułów nie stanowi weryfikacji całej biblioteki CMS.
