

# Plan naprawy SEO po audycie crawlera (248 issues, health 85.5)

## Diagnoza

Crawler znalazł 94 z 143 stron. **83 URLe z sitemap nie zostały odnalezione** — to stary plik `sitemap.xml` z pre-restrukturyzacyjnymi URLami, wciąż wskazywany w `robots.txt`. Pozostałe problemy to głównie **canonical mismatch** (stare strony mają canonical wskazujący na nowe URLe klastrowe) oraz **DUPLICATE_TITLE/META_DESC/BODY** na 12 stronach branżowych `/dla-kogo/*`.

---

## Krok 1: Usunięcie starego sitemap.xml i naprawienie robots.txt

**Problem:** `robots.txt` wskazuje na DWA sitemapy: `sitemap-index.xml` (nowy, poprawny) i `sitemap.xml` (stary, 143 URLe z pre-restrukturyzacji). Stąd 83 "orphaned URLs".

**Działanie:**
- Zastąpić `public/sitemap.xml` przekierowaniem lub usunąć go — zostawić TYLKO `sitemap-index.xml`
- W `robots.txt` usunąć linię `Sitemap: https://fotz.pl/sitemap.xml`

---

## Krok 2: Naprawienie canonical mismatch na 8 stronach

Strony serwowane pod starymi URLami mają canonical wskazujący na nowe URLe klastrowe, które są innymi stronami. Canonical musi wskazywać na URL, pod którym strona jest faktycznie dostępna:

| Strona | Aktualny canonical (zły) | Poprawny canonical |
|---|---|---|
| `/kampanie-reklamowe` | `/performance-marketing/kampanie` | `/kampanie-reklamowe` |
| `/kampanie-reklamowe-poznan` | `/performance-marketing/kampanie-poznan` | `/kampanie-reklamowe-poznan` |
| `/kompleksowa-obsluga-marketingowa` | `/kompleksowa-obsluga` | `/kompleksowa-obsluga-marketingowa` |
| `/wizualizacje-3d` | `/uslugi/wizualizacje-3d` | `/wizualizacje-3d` |
| `/realizacje/fps-cegielski` | `/realizacje/fps-poznan` | `/realizacje/fps-cegielski` |
| `/blog/seo-ecommerce` (jeśli nadal dostępny) | `/seo/ecommerce` | dopasować do faktycznej trasy |
| `/blog/remarketing-poradnik` | `/performance-marketing/remarketing` | dopasować do faktycznej trasy |
| `/blog/copywriting-landing-page` | `/content-marketing/copywriting-landing` | dopasować do faktycznej trasy |
| `/blog/influencer-marketing-polska` | `/social-media/influencer` | dopasować do faktycznej trasy |

**Pliki:** `KampanieReklamowe.tsx`, `KampanieReklamowePoznan.tsx`, `KompleksowaObsluga.tsx`, `Wizualizacje3D.tsx`, `CaseStudyFPS.tsx`, `BlogSEOEcommerce.tsx`, `BlogRemarketing.tsx`, `BlogCopywritingLanding.tsx`, `BlogInfluencerMarketing.tsx`

---

## Krok 3: Naprawa DUPLICATE_TITLE/META_DESC na stronach `/dla-kogo/*`

**Problem:** Wszystkie 12 stron branżowych (`/dla-kogo/turystyka`, `/dla-kogo/ngo`, itd.) zgłaszają DUPLICATE_TITLE, DUPLICATE_META_DESC, DUPLICATE_BODY i THIN_CONTENT.

**Działanie:** Sprawdzić, czy strony branżowe (`MarketingTurystyka.tsx`, `MarketingNGO.tsx` itd.) mają unikalne `<title>` i `<meta description>`. Z crawla wynika, że tytuły i opisy się duplikują — prawdopodobnie renderuje się fallback z `DlaKogo.tsx` zamiast właściwej strony branżowej. Trzeba zweryfikować routing i upewnić się, że każda podstrona renderuje własny SEOHead.

---

## Krok 4: Naprawa `/dla-kogo` (hub) i `/uslugi/strony-internetowe` (hub)

Te dwie strony hubowe mają DUPLICATE_TITLE/META_DESC/BODY. Sprawdzić ich SEOHead i upewnić się, że title/description są unikalne i nie kolidują z podstronami.

---

## Krok 5: Naprawa `/blog` DUPLICATE_TITLE/META_DESC

Blog hub (`/blog`) ma zduplikowany title/description — prawdopodobnie pokrywa się z inną stroną. Nadać unikalny title.

---

## Krok 6: Usunięcie `/login` z crawla lub dodanie redirect

`/login` ma 8 błędów (brak H1, brak canonical, brak meta). Strona nie istnieje jako trasa w `App.tsx`. Dodać redirect 301 z `/login` → `/akademia/auth` (komponent `Redirect301`).

---

## Krok 7: Usunięcie `/landing-page` lub redirect

`/landing-page` ma 7 błędów i nie istnieje jako trasa. Dodać redirect do `/blog/jak-stworzyc-landing-page` lub `/uslugi/strony-internetowe`.

---

## Krok 8: Aktualizacja `sitemap-industries.xml`

Daty `lastmod` w `sitemap-industries.xml` to `2026-01-31` — zaktualizować na `2026-04-04`.

---

## Podsumowanie zmian

| Plik | Zmiana |
|---|---|
| `public/sitemap.xml` | Usunąć lub zastąpić redirectem do sitemap-index.xml |
| `public/robots.txt` | Usunąć drugą linię Sitemap |
| 9 plików `.tsx` | Naprawić canonical URLs |
| 12 plików `branze/*.tsx` | Zweryfikować unikalne title/desc (jeśli duplikaty) |
| `public/sitemap-industries.xml` | Zaktualizować lastmod |
| `src/App.tsx` | Dodać redirect `/login` → `/akademia/auth` i `/landing-page` |

**Szacowany efekt:** Eliminacja ~200 z 248 issues, wzrost health score z 85.5 do ~95+.

