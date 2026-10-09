# Wyświetlanie i okładki artykułów CMS — 9 października 2026

## Problem i rozwiązanie

Na bazie `f23e27c` gotowy HTML artykułu był usuwany przez `createRoot()`, po czym użytkownik czekał na kod widoku i zapytanie do CMS. Przy zablokowanym CMS test wykazał utratę pierwotnego `main`, H1 i wszystkich H2; po błędzie odczytu następowało przekierowanie do bloga.

60 publicznych artykułów CMS korzysta teraz z kompletnego drzewa `App` podczas budowania i z hydratacji w przeglądarce. Każdy dokument przekazuje tylko publiczne pola swojego artykułu w bezpiecznie serializowanym JSON. Klient sprawdza wersję, ścieżkę i slug przed zasileniem odpowiedniego klucza React Query. Początkowa trasa pozostaje `/blog/:slug`, więc parametry oraz nawigacja nadal działają. Pozostałe trasy zachowują dotychczasowy sposób startu.

Dane są oznaczone jako nieaktualne i odświeżane w tle po uruchomieniu widoku. Błąd tego odświeżenia zachowuje już widoczną treść. Przy wejściu bez dostępnej kopii użytkownik otrzymuje komunikat oraz przycisk ponowienia. Prawidłowa odpowiedź o braku artykułu nadal kieruje do bloga. Data publikacji jest formatowana w strefie Europe/Warsaw, aby przeglądarka i serwer wyświetlały ten sam dzień.

## Obrazy

- 60 istniejących okładek ma 180 lokalnych wariantów WebP: 480, 800 i 1200 px. Obrazy zachowują proporcje i przedstawioną treść; nie tworzono nowych ilustracji.
- Oryginały ważą łącznie 14 212 816 B. Warianty 800 px: 1 686 296 B, czyli o 88,1% mniej. To suma zasobów, nie transfer jednej wizyty.
- Przykładowa okładka B2B: 909 218 B → 26 802 B przy 800 px. Okładka kampanii: 90 242 B → 30 474 B.
- `srcset`, rozmiary, wymiary oraz wysoki priorytet/preload kierują przeglądarkę do odpowiedniego pliku. Zmiana URL-a okładki w CMS powoduje użycie nowego źródła, bez wyświetlania starej fotografii.
- `npm run images:blog` przygotowuje warianty z publicznego snapshotu; build wykorzystuje pliki z repozytorium i niczego nie pobiera. Surowe pliki źródłowe są wyłącznie w ignorowanej pamięci podręcznej.

## Weryfikacja lokalna

- 59 testów, TypeScript, ESLint zmienianych modułów i `git diff --check`: PASS. Testy obejmują bezpieczną serializację, zgodność wyrenderowanej treści wszystkich rekordów, klucze danych, odświeżanie po awarii, zmianę okładki i obecność wariantów.
- Build: 1074 dokumenty, 1071 pełnych treści, zero błędów. Audyt: 1072 unikalne URL-e map, 134770 odnośników HTML, 4043 linki źródłowe i 487 galerii bez błędów. Audyt wymaga danych startowych na każdej publicznej stronie CMS; surowy JSON źródłowy jest oddzielony od kontroli już wyrenderowanych canonicali, linków i schematów.
- Przeglądarka, 60/60 artykułów, 390 px, zablokowane żądania CMS i strefa America/Los_Angeles: zachowane pierwotne `main`, H1 i wszystkie H2. Jeden przejściowy błąd pobrania modułu wymagał ponownego wczytania; ponowiona kontrola przeszła. Brak wykrytych błędów hydratacji.
- Poradnik kampanii zachował tekst także po zakończeniu prób odświeżenia błędem. Zimny start z cache wyłączonym, opóźnieniem 150 ms i pobieraniem 200000 B/s również zachował węzły. Telefon pobrał wariant 480 px; brak poziomego przepełnienia. Menu/Escape, spis treści, przejście do listy bloga i powrót działają.
- Główna i audyt SEO zachowują pierwotne węzły. Artykuł B2B działa w ciemnym motywie na desktopie i wybiera wariant 1200 px. Instrumentacja była dodana wyłącznie do lokalnego wyniku budowania i usunięta przed publikacją.
- Do regularnej kontroli Lighthouse w CI dodano artykuł CMS.

## Pomiary

Lighthouse mobile, ten sam podgląd Vite, jeden worker, po jednej próbie przed i po; bez równoległego buildu. To wyniki laboratoryjne, nie dane terenowe Search Console ani dowód zmiany pozycji.

| Artykuł | Wydajność przed → po | LCP przed → po | Dostępność | SEO |
| --- | --- | --- | --- | --- |
| Kampanie reklamowe | 74 → 83 | 5,7 → 3,7 s | 100 → 100 | 100 → 100 |
| Agencja marketingowa B2B | 69 → 85 | 14,4 → 3,4 s | 98 → 98 | 100 → 100 |

Dobre praktyki: 100 dla obu stron w obu pomiarach. Pozostaje pole do poprawy LCP i obrazów wewnątrz starszych artykułów. Nie zmieniano treści, dat publikacji ani `lastmod` map. Nie ponawiano zgłoszeń GSC z poprzedniego etapu i nie wysyłano formularzy kontaktowych.

Surowe lokalne dowody: `docs/seo/qa-2026-10-09/blog-loading/` oraz `reports/unlighthouse-blog-loading-{before,after}/` (ignorowane w Git). Potwierdzenie CI i wdrożenia produkcyjnego będzie zapisane w opisie PR.

Dokumentacja mechanizmu: [React hydrateRoot](https://react.dev/reference/react-dom/client/hydrateRoot), [TanStack Query — SSR](https://tanstack.com/query/v5/docs/framework/react/guides/ssr).
