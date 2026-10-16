# Blog — porządkowanie — 16.10.2026

## Dane

Inwentarz `neuron-page-inventory-2026-10-11.csv` (GSC 9.07–8.10.2026): 741 wpisów bloga, 3720 wyświetleń, 426 wpisów z zerem wyświetleń. Wpisy to głównie statyczne strony `src/pages/Blog*.tsx` oraz artykuły CMS z migawki `src/data/blog-content.json`. Integracja BabyLoveGrowth zapisuje nowe artykuły jako szkice (`is_published` domyślnie `false`), więc sama nie publikuje.

Około połowa wpisów dotyczyła tematów spoza oferty FOTZ: programowania (React, TypeScript, bazy danych, DevOps), inżynierii AI, metryk SaaS, finansów, operacji sprzedażowych i zarządzania projektami. Czytelnik takiego wpisu nie jest klientem agencji, a te treści rozmywały tematykę serwisu.

## Decyzja i wdrożenie (akceptacja właściciela 16.10)

Lista z powodem dla każdego adresu: `blog-pruning-2026-10-16.csv`.

| Rekomendacja | Wpisy | Wdrożenie |
|---|---:|---|
| 410 (usunąć) | 344 | łącznie 1086 wyświetleń i 5 kliknięć w 3 mies.; trasa i plik usunięte, serwer zwraca 410 |
| przekierować 301 | 35 | duplikaty tematów → pozostawiony wpis; reguła 308 w `vercel.json` |
| 410 — decyzja | 4 | cele aliasów chronionych testem CMS (`okr`, `nps`, `zero-trust`, `api-gateway`); pozostawione do osobnej decyzji |
| zachować | 358 | w tym 10 artykułów CMS po wcześniejszym przeglądzie (`reviewed-blog-*`) i 6 do dopracowania z NEURONwriter |

Klasyfikacja: reguły na podstawie adresu, wyświetleń i kliknięć, ręczna ocena 391 niejednoznacznych adresów oraz kontrola fałszywych trafień (tematy z rokiem w adresie, film rekrutacyjny, branding — zachowane).

Mechanizm:

- `src/data/retired-blog.json` — źródło prawdy: 345 adresów `gone` (344 wpisy + alias `customer-health-score-co-to-jest-jak-zbudowac`, którego cel usunięto) i 35 przekierowań.
- `middleware.ts` zwraca **410 Gone** z treścią strony 404 (noindex) dla adresów `gone`, także zakodowanych procentowo. Bez tego `/blog/:slug` zwracałby 200.
- `scripts/sync-blog-seo.mjs` pomija wycofane slugi przy kolejnej synchronizacji CMS, nawet jeśli w Supabase nadal są opublikowane.
- Usunięto 366 tras i plików stron, 13 artykułów z migawki CMS, ich metadane i 39 nieużywanych plików okładek; 379 adresów z sitemap.
- Odnośniki wewnętrzne do przekierowanych wpisów prowadzą wprost do celu (8 plików, mapa aliasów CMS). Jedyny link CMS do usuniętego wpisu (`b2b-co-to-jest`) prowadzi do `/uslugi/marketing-b2b`.
- Testy: każdy wpis `gone` zwraca 410, nie ma trasy ani wpisu w sitemap; każde przekierowanie jest stałe i kończy się na zachowanej stronie.

## Kontrola lokalna

Testy 179/179, build 691 dokumentów / 688 pełnych treści SSR bez błędów, 689 adresów sitemap bez problemów, 87 080 linków wyrenderowanych bez uszkodzeń, galerie bez błędów.

## Po publikacji

1. Sprawdzić próbkę adresów: 410, 308 i 200 dla zachowanych.
2. Zgłosić nową mapę witryny w Search Console.
3. Po 4–6 tygodniach: raport indeksowania i wyświetlenia pozostałych wpisów, w tym 152 oznaczonych „sprawdzić po 3 mies.”.
4. Opcjonalnie odpublikować w Supabase artykuły CMS objęte przekierowaniem (serwer i tak przekierowuje).
