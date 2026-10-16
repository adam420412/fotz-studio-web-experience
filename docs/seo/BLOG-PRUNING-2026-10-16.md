# Blog — plan porządkowania — 16.10.2026

## Dane

Inwentarz `neuron-page-inventory-2026-10-11.csv` (GSC 9.07–8.10.2026): 741 wpisów bloga, 3720 wyświetleń, 426 wpisów z zerem wyświetleń. Wpisy są statycznymi stronami `src/pages/Blog*.tsx` (696 plików). Integracja BabyLoveGrowth zapisuje nowe artykuły jako szkice (`is_published` domyślnie `false`, migracja 20260424000100), więc nie publikuje już automatycznie. Stanu crona w Supabase nie sprawdzono — brak dostępu do projektu.

Około połowa wpisów dotyczy tematów spoza oferty FOTZ: programowania (React, TypeScript, bazy danych, DevOps), inżynierii AI, metryk SaaS, finansów, operacji sprzedażowych i zarządzania projektami. Czytelnik takiego wpisu nie jest klientem agencji, a te treści rozmywają tematykę serwisu.

## Rekomendacja — `blog-pruning-2026-10-16.csv`

| Rekomendacja | Wpisy | Uwagi |
|---|---:|---|
| 410 (usunąć) | 356 | łącznie 827 wyświetleń i 4 kliknięcia w 3 mies. |
| przekierować 301 | 45 | duplikaty tematów i numerowane wpisy dublujące oferty (np. `pozycjonowanie-stron-poznan-4` → `/seo/pozycjonowanie-poznan`); cel w kolumnie `cel_przekierowania` |
| zachować i dopracować (NEURON) | 6 | tematy ofertowe z ≥50 wyświetleniami |
| zachować | 188 | temat ofertowy z wyświetleniami |
| zachować — sprawdzić po 3 mies. | 146 | temat ofertowy, 0 wyświetleń; ponowna ocena po kolejnym okresie |

Klasyfikacja: reguły na podstawie adresu, wyświetleń i kliknięć oraz ręczna ocena 391 niejednoznacznych adresów. Wpisy techniczne z ruchem (np. `tiptap-lexical-...` 278 wyświetleń, 1 kliknięcie) także oznaczono do usunięcia: ruch pochodzi od programistów, nie od klientów.

Do decyzji właściciela przed wdrożeniem (nieodwracalne dla indeksu): akceptacja listy 410, w szczególności wpisów z ruchem: `arr-annual-recurring-revenue-co-to` (73), `qbr-co-to` (62), `tam-sam-som-co-to` (55), `kanban-co-to` (51), `tiptap-lexical-...` (278).

## Wdrożenie po akceptacji

1. Usunąć trasy i pliki stron 410; serwer zwraca 410 (reguła w `middleware.ts` lub lista w `vercel.json`), adresy znikają z sitemap.
2. Dodać 45 przekierowań 308 (serwer + `Redirect301`, kontrola `redirect-parity.test.mjs`).
3. Usunąć odnośniki wewnętrzne do usuniętych wpisów i obrazy w `public/blog-images` używane tylko przez nie.
4. Po 4–6 tygodniach: raport indeksowania i wyświetlenia pozostałych wpisów.
