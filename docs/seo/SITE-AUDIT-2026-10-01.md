# FOTZ Studio — poprawki SEO, wyglądu i nawigacji

Data: 1 października 2026. Baza: `5ab99d8c340b13dc75c3d6e39527ced32c6330a7`, gałąź `codex/fotz-seo-visual-20261001`.

Status: pakiet zmian do przeglądu. Nie scalono do main i nie opublikowano na produkcji. Audyt obejmuje 1024 publiczne trasy aplikacji, wspólne komponenty i mapy witryny. Każda trasa przeszła kontrolę DOM; ręczna ocena wizualna dotyczy reprezentatywnych szablonów i wykrytych wyjątków, a nie przeczytania każdego akapitu 1024 stron.

Uzupełnienie z 2 października: objęto kontrolą także 61 opublikowanych artykułów CMS, wcześniej nieobecnych w prerenderze. Wyniki tabeli poniżej dokumentują pierwszy etap 1024 tras; odbiór rozszerzenia jest opisany w raporcie GSC.

## Co zmieniono

- Generator odczytuje pełne metadane z drzewa składni TypeScript, również z importowanych stałych i szablonów. Nie uruchamia kodu stron. Poprzedni odczyt pomijał część tras i niektóre strony otrzymywały tytuł strony głównej. Prerender generuje teraz 1024 strony, bez pominięć. Brak źródła/metadanych przerywa build błędem.
- Tytuły i opisy nie są automatycznie ucinane do 60/155 znaków. Naprawiono 327 opisów zakończonych wielokropkiem, rozwinięto skrócone tytuły, poprawiono encje i cudzysłowy. Pozostałe identyczne tytuły należą do tras wskazujących ten sam canonical.
- Każdy indeksowalny wygenerowany dokument ma jeden absolutny canonical i komplet podstawowych metadanych. Strony noindex zachowują wyłączenie z indeksowania. Breadcrumb schema otrzymuje pełne URL-e; widoczna nawigacja nie powiela strony głównej.
- Usunięto ukryty blok powielający nagłówki i linki. Użytkownik bez JavaScript otrzymuje czytelną informację oraz dane kontaktowe. To prerender metadanych, **nie SSR pełnej treści**.
- Robots.txt dopuszcza zasoby potrzebne do renderowania aplikacji. Mapy XML mają 1014 unikalnych kanonicznych URL-i, bez przekierowań i stron noindex. Naprawiono też nadmiarowy znacznik w mapie bloga; kontrola sprawdza składnię XML, nie tylko listę adresów. Mapa HTML korzysta z tych samych adresów i czytelnych tytułów, z jedną kolumną na wąskim ekranie.
- Poprawiono brakujące odnośniki, telefony przykładowe i obrazy w danych strukturalnych. Niezależny skan po integracji znalazł dodatkowe pominięte linki w tablicach danych, które również naprawiono. Stary błędny adres artykułu Customer Health Score ma przekierowanie do istniejącej trasy.
- Naprawiono 78 nieaktywnych CTA w pierwszej partii oraz dalsze 159 nieaktywnych kontrolek wykrytych niezależnym skanem (natywne przyciski, pakiety, udostępnianie). Przyciski ofertowe prowadzą do kontaktu, telefony do `tel:`, portfolio do realizacji. Nieaktywne ikony artykułów zastąpiono kopiowaniem linku. Usunięto „Załaduj więcej”, gdy lista wyświetla już wszystkie wyniki.
- „Zasoby” nie udają wysyłki e-maila ani pobrania niepodpiętego pliku. Nieuzupełnione materiały mają informację o niedostępności i kontakt; poradniki, brief i kalkulatory mają działające linki. Nie utworzono obiecywanych PDF-ów.
- Nawigacja, logo, hero, stopka, tabele, długie polskie etykiety i przyciski mieszczą się w telefonie. Menu ma przewijanie, blokadę przewijania tła, Escape oraz powrót fokusu. Poprawiono jasny i ciemny motyw, również starsze szablony z tekstem niemal niewidocznym na ciemnym tle.
- Formularze mają powiązane etykiety. Na kontakcie wyłączono nakładające się dodatkowe widżety kontaktowe. Kalendarz pokazuje poprawny zakres tygodnia, czyści wybór przy zmianie tygodnia, blokuje minione godziny i terminy przy błędzie dostępności. Nieudany zapis nie powoduje sukcesu ani kolejnych powiadomień; zapis pending jest opisany jako zgłoszenie wymagające potwierdzenia. Nie zakłada doręczenia e-maila.
- Osadzenie Instagram ma czytelny link do oryginału, kiedy zewnętrzny embed się nie pojawia. Zachowano oryginalne zdjęcia i materiały firmy.

## Niezależna weryfikacja

| Kontrola | Wynik |
|---|---|
| HTTP publicznych URL-i przed zmianami | 1024/1024 odpowiedzi 200; nie jest to dowód poprawnej treści ani indeksacji |
| Build produkcyjny | PASS, 1024 strony wygenerowane, 0 pominiętych |
| Nagłówki HTML | PASS, 1024/1024 bez błędów sprawdzanych tagów; 0 opisów i tytułów zakończonych wielokropkiem |
| XML i adresy w mapach | PASS, 1014 unikalnych URL-i, 0 zgłoszonych błędów |
| Istniejący walidator sitemap-main | PASS, 69 kanonicznych indeksowalnych adresów |
| Linki literalne JSX i tablic danych | PASS, 4091 odnośników; 0 nierozpoznanych celów |
| Przegląd mobilny 390 × 844 | PASS, 1024/1024 tras: 0 przepełnień, 1 H1, 0 błędów nawigacji i brakujących załadowanych obrazów |
| Mapa HTML i 2 statyczne landingi kampanii | PASS przy 320 px: 1 H1, 0 przepełnień i błędów załadowanych obrazów |
| Wcześniej wykryte przepełnienia | 45/45 naprawione i powtórnie sprawdzone |
| Siedem typów stron przy 320 px | PASS: strona główna, usługa, realizacja, branża, artykuł, miasto, kontakt |
| Widoki desktop i menu | PASS: jasny/ciemny motyw, 1440 px, nawigacja klawiaturą i Escape; dodatkowo wąskie menu 320 px |
| Walidacja pustego formularza kontaktowego | PASS, błędy wymaganych pól; bez wysyłania |
| Testy regresji | PASS, 7/7: 3 ekstrakcji SEO i 4 rzeczywistych handlerów kalendarza z atrapami I/O |
| TypeScript aplikacji | PASS, `npx tsc --noEmit -p tsconfig.app.json` |
| ESLint zmienionych plików TS/TSX | 0 błędów; 2 wcześniejsze ostrzeżenia: fast refresh button.tsx i zależności useMemo w KalkulatorCen |

Dowody robocze są w lokalnym `docs/seo/qa-2026-10-01/`: wyniki HTTP, metadane, pełne kontrole DOM i zrzuty ekranu. Folder nie trafia do Git, aby nie dodawać megabajtów surowych wyników. Sprawdzono ładowane obrazy; nie oznacza to ręcznej kontroli wszystkich zdjęć ładowanych dopiero po przewinięciu każdej strony.

## Powtórzenie kontroli

```sh
npm ci
node --test scripts/seo-metadata.test.mjs scripts/booking-calendar.test.mjs scripts/blog-seo.test.mjs scripts/middleware-seo.test.mjs
npx tsc --noEmit -p tsconfig.app.json
npm run build
node scripts/audit-source-links.mjs
python3 scripts/audit-built-site.py
node scripts/validate-sitemap-indexable.mjs
```

Test middleware wymaga manifestu z `npm run build`. Dla artykułów CMS najpierw odświeżyć `node scripts/sync-blog-seo.mjs`. Po świadomej aktualizacji tras/metadanych: `python3 scripts/sync-sitemaps.py`, ponowny audyt i `python3 scripts/sync-html-sitemap.py`. Skrypty aktualizujące mapy modyfikują `public/`; przed publikacją wykonać build po zmianach. Prerender można uruchomić ponownie bez powielania kontrolowanych tagów i fallbacku.

## Pozostające decyzje i granice odbioru

1. **Domena główna — decyzja potwierdzona:** właściciel wskazał fotz-studio.pl. Kolejny etap pakietu ujednolica URL-e do `https://www.fotz-studio.pl`, zgodnie z obecnym docelowym hostem. Produkcyjne przekierowanie bez www ma obecnie status 307 i wymaga kontroli w panelu Vercel przy wdrożeniu. Nie zmieniono osobnego hostingu fotz.pl.
2. **Dane firmy i oferta:** do potwierdzenia pozostają zaproszenia do biura/studia, adresy biur na stronach miejskich, ceny i deklarowane wyniki/liczby klientów. Zmiany nie są audytem prawdziwości wszystkich istniejących twierdzeń. Bez potwierdzenia nie należy traktować tych danych jako zweryfikowanych.
3. **Search Console — dostęp potwierdzony w kolejnym etapie:** odczytano właściwość domenową oraz prefiks HTTPS z www. Pełny opis danych, konfliktu canonicali, błędnych plików w indeksie i kolejnych działań: [GSC-AUDIT-2026-10-02.md](GSC-AUDIT-2026-10-02.md). Nie zmieniano uprawnień ani weryfikacji domeny. Raporty GSC mają opóźnienia; inspekcja Wrocławia była już korzystniejsza niż starsza lista wykluczeń.
4. **Integracje:** nie wysłano wiadomości kontaktowej, newslettera ani rezerwacji produkcyjnej; testy kalendarza używają atrap. Doręczenia e-maili, CRM, konflikty jednoczesnych rezerwacji i dostępność usług wymagają oddzielnego odbioru. Nie mierzono Lighthouse.
5. **Publikacja:** lokalny build i przegląd nie potwierdzają aktywacji zmian na hostingu. Przekierowania HTTP, nagłówki oraz działanie publicznych HTML-i trzeba potwierdzić po wdrożeniu. Nie uruchamiano automatycznej publikacji ani scalania.

## Asysta Claude

Włączono po niezależnym sprawdzeniu diffów: `d429a21269eecb4222c5bf9a83649f75f2a69ec5` i `4d81e35285eb9a3437fa4a6d3fcc21adb6dd6871` (lokalnie cherry-pick `ad2d977`, `466ebea`). Szczegóły autora: `CONTENT-AUDIT-2026-10-01.md`. Jego deklaracja o braku martwych linków i CTA była węższa od późniejszego niezależnego skanu; dodatkowe przypadki poprawiono w tym pakiecie. Cofnięto uboczną zmianę `priceRange` z `$$` na `$`.
