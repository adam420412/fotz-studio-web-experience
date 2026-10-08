# Kolejny etap: wydajność, oferta Poznań i jakość treści

Punkt wyjścia: `main` 963ef190b1efa1fe91f8ff79db123b55548917d4 (PR #30). Prace nie zmieniają domeny kanonicznej ani adresów oferty. Stan publikacji należy potwierdzić osobno w PR i na produkcji.

## Zmiany

- Prerender korzysta z manifestu Vite: w HTML są podpowiedzi ładowania tylko bieżącej strony i jej statycznych zależności oraz pierwszego obrazu oznaczonego jako priorytetowy. Nie pobiera innych stron przez `dynamicImports`. Usunięto dwa nieużywane globalne preloads obrazów.
- Menu desktopowe pobiera swoją bibliotekę dopiero po otwarciu; w trakcie ładowania zachowuje link do wszystkich usług. Panel diagnostyczny SEO pobiera się tylko dla włączonego trybu deweloperskiego.
- Jawne przypisanie plików React, JSX i scheduler do vendor usuwa ich zależność od biblioteki animacji. Supabase pozostaje poza podstawowym grafem aplikacji.
- `/agencja-marketingowa/poznan`: nowa treść, sześć zakresów usług, proces i warunki wyceny, sześć odpowiedzi FAQ zgodnych z JSON-LD. Realne portfolio Enea Stadion / FPS / Klagem pokazane po zakresie oferty. Usunięto stary układ i ogólne pakiety z niepotwierdzonymi obietnicami. Priorytet wynika z odczytu GSC z 8 października: 578 wyświetleń i 0 kliknięć (szczegóły w poprzednim raporcie).
- Artykuł `/blog/ai-w-marketingu-firm-jak-zwiekszyc-efektywnosc-dzialan`: redakcja 12 fragmentów, usunięcie niepotwierdzonych wzrostów procentowych i cennika narzędzi, poprawione odnośniki spisu treści, poprawna lokalizacja FOTZ oraz plan pomiaru efektów. Korekty obejmują prerender i widok CMS; późniejsze zmiany źródłowe nie są nadpisywane automatycznie.
- Dwa potwierdzenia formularzy na `/kontakt` mają spójną treść bez pozostawionej obietnicy odpowiedzi w mniej niż 24 h.

## Pomiar przed i po

Ta sama lokalna konfiguracja Vite preview, Chrome, mobilne ograniczenie Lighthouse, 1 worker, 2 próbki na adres. Osobne, kolejno uruchomione skany; brak jednoczesnego builda. Raporty `reports/unlighthouse-performance-{before,after}-clean/ci-result.json`. Pierwszy przerwany pilot nie jest dowodem porównawczym.

| Strona | Performance przed → po | LCP przed → po |
|---|---:|---:|
| Główna | 80 → 85 | 4,45 → 3,91 s |
| Audyt SEO | 76 → 77 | 5,15 → 5,13 s |
| Studio podcastowe | 74 → 77 | 5,83 → 5,29 s |

Pozostałe kategorie wszystkich trzech adresów: accessibility / best practices / SEO = 100 / 100 / 100 w obu skanach. Te wyniki są laboratoryjne, nie są oceną Core Web Vitals z danych odwiedzających. LCP na podstronach nadal wymaga pracy.

Podstawowy graf statycznych importów JS: 820740 → 704617 B; gzip 239380 → 199244 B (−16,8%). To zakres podstawowych importów, nie całkowity transfer każdego widoku. Strony korzystające z animacji lub bazy mogą nadal ładować odpowiednie biblioteki. Porównanie Lighthouse dotyczy zmian wydajności; finalna redakcja oferty dodała około 100 B gzip do wspólnych danych portfolio.

## Walidacja lokalna

- Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów renderowania.
- TypeScript oraz 46 testów zaliczone, w tym zależności manifestu, cykle, deduplikacja podpowiedzi i obraz z responsywnym srcset.
- Metadane: 0 błędów; sitemap: 1072 unikalne adresy, 0 błędów.
- 134770 linków z HTML: 0 uszkodzonych; 4037 linków w źródłach: 0 uszkodzonych.
- 487 galerii: 0 błędów; 24378 lokalnych podpowiedzi zasobów: 0 brakujących plików.
- Przeglądarka: menu desktopowe otwiera się i zamyka Escape, przejście przez menu działa, mobilne menu działa; oferta przy 390 px bez przewijania poziomego, pojedyncza galeria i działające FAQ. Artykuł po uruchomieniu JS zawiera nowe fragmenty i poprawne kotwice. Brak błędów JS w tych kontrolach.

## Kontrolne zgłoszenie i ograniczenie CRM

Wysłano jeden wyraźnie oznaczony test techniczny `FOTZ-QA-20261008-PERF` z produkcyjnego formularza kontaktowego. Serwer zwrócił zapis i identyfikator zgłoszenia; otrzymanie odpowiadającej wiadomości potwierdzono w skrzynce FOTZ przez Gmail (INBOX). Nie jest to dowód odbioru przez klienta.

Odpowiedź serwera zawierała `crm_queued: true`, `crm_delivered: false`, `notification_status: sent`. Potwierdza kolejkę, nie końcowe dostarczenie CRM. Po zalogowaniu kontem GitHub panel Supabase nie udostępnia projektu formularza ani wskazanego projektu CRM. Dalsza weryfikacja wymaga panelu, w którym utrzymywana jest obecna funkcja i kolejka. Nie wdrażano starego lokalnego `send-contact`, który różni się od działającego endpointu.

Kalendarz: odczyt dostępności, wybór dnia/godziny i przejście do formularza działają. Nie tworzono testowej rezerwacji zajmującej termin. Pełne dostarczenie rezerwacji i zapis w CRM pozostają niepotwierdzone.

Surowe dowody lokalne: `docs/seo/qa-2026-10-08/performance-next/` (ignorowane w Git). Brak nowych zgłoszeń do indeksowania; wcześniejsze prośby Google potrzebują czasu na przetworzenie.

## Źródła techniczne i redakcyjne

- https://vite.dev/guide/backend-integration — manifest i statyczne zależności.
- https://web.dev/articles/optimize-lcp — odkrywanie zasobów i priorytet obrazu.
- https://support.google.com/google-ads/answer/7065882?hl=pl — działanie Smart Bidding.
- https://www.salesforce.com/marketing/resources/state-of-marketing-report/ — sprawdzone źródło zamiast niepotwierdzonych statystyk ze starego tekstu.
