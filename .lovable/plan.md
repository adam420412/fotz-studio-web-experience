## Co zostało w SEO

Z aktywnego skanera (panel SEO):

1. **`gsc` — Google Search Console nie domknięte**
   - Weryfikacja DNS dla `fotz-studio.pl` ✅ (TXT propaguje na 8.8.8.8 i 1.1.1.1)
   - Brakuje: kliknąć „Zweryfikuj" w SC + dodać property dla `fotz.pl` (canonical domena) + zgłosić sitemapy
   - Connector GSC w Lovable nie jest spięty — po spięciu mogę automatycznie zgłosić sitemap i podpiąć dane do panelu admina

2. **`lighthouse_performance` — LCP wolne na opublikowanej wersji**
   - Hero homepage długo się renderuje
   - W repo mamy już WebP poster + memory `hero-and-scrolling-optimization`, więc trzeba zweryfikować czy bieżący `HeroV3` realnie ma `fetchpriority="high"`, brak `loading="lazy"` i `preload` w `index.html`

Plus długi SEO z `.lovable/plan.md` (nie pokazują się w skanerze, ale są w planie):

3. **Canonical mismatch** na 8 stronach (lista do zidentyfikowania w trakcie audytu)
4. **Brakujące redirecty 301**: `/login → /akademia/auth` (mamy `/landing-page` już zrobione)
5. **Unikalne title/meta na 12 stronach `/dla-kogo/*`** — weryfikacja czy nie ma duplikatów
6. **`lastmod` w `sitemap-industries.xml`** — stara data
7. **Rozszerzenie `sitemap-main.xml`** o nowy klaster SM (już zrobione dla pillara/20 hubów, ale po publikacji artykułów trzeba domknąć w `sitemap-index.xml`)

---

## Plan działań (3 etapy)

### Etap 1 — Domknięcie Google Search Console (priorytet 1, blokuje wszystko inne)

1. **Spiąć connector** `google_search_console` przez `standard_connectors--connect` — daje nam programowy dostęp do API SC z agenta.
2. **Dodać property `fotz.pl`** (canonical, non-www) — DNS już zweryfikowany dla `fotz-studio.pl`, ale `fotz.pl` to osobna domena property. Tutaj będzie trzeba dorzucić drugi TXT u rejestratora `fotz.pl` — wygeneruję token i podam Ci wartość.
3. **Zgłosić 4 sitemapy** programowo przez API:
   - `https://fotz.pl/sitemap-index.xml`
   - `https://fotz.pl/sitemap-main.xml`
   - `https://fotz.pl/sitemap-industries.xml`
   - `https://fotz.pl/sitemap-casestudies.xml`
4. **Zaznaczyć finding `gsc:gsc` jako fixed**.

### Etap 2 — Performance (LCP fix)

1. Przeczytać `src/components/sections/HeroV3.tsx` (lub aktualny hero na home) i `index.html`.
2. Upewnić się, że hero image ma `fetchpriority="high"`, brak `loading="lazy"`, jawne `width`/`height`.
3. Dodać `<link rel="preload" as="image" href="/<hero>.webp" fetchpriority="high">` do `index.html` jeśli go nie ma.
4. Sprawdzić `@font-face` — wszystkie z `font-display: swap`.
5. Po edycji: poprosić Cię o republish (Vercel) — bez tego finding nie zniknie, bo skaner sprawdza prod.
6. Zaznaczyć finding `lighthouse:lighthouse_performance` jako fixed.

### Etap 3 — SEO debts sprzątnięcie

1. Audit canonical: uruchomić `scripts/seo-canonical-check.mjs` (mamy już taki) → wylistować 8 mismatchy → poprawić.
2. Dodać redirect 301 `/login → /akademia/auth` w `vercel.json` + `Redirect301` component.
3. Audit title/meta na `/dla-kogo/*` — przejść po 12 stronach, sprawdzić uniqueness, pozmieniać duplikaty.
4. Update `<lastmod>` w `sitemap-industries.xml` na dzisiejszą datę.
5. Republish.

---

## Szczegóły techniczne

**GSC API (Etap 1)**: użyję connector gateway `https://connector-gateway.lovable.dev/google_search_console/webmasters/v3/sites` — endpointy `PUT /sites/{url}` (dodanie property), `PUT /sites/{url}/sitemaps/{feedpath}` (zgłoszenie sitemapy). Bez connectora trzeba ręcznie w UI Search Console.

**LCP**: dane z `lighthouse_performance` mówią tylko „hero loads slowly" — bez confirmed source musimy zrobić quick audit aktualnego komponentu hero. Most likely fix to preload + fetchpriority — to typowe wins na 1-2s LCP.

**Republish**: po Etapie 2 i 3 musisz kliknąć „Publish" w Lovable lub poczekać na auto-deploy Vercela. Findingi `lighthouse` i `gsc` sprawdzają production URL, nie preview.

---

## Pytanie przed startem

Idziemy całością (Etap 1+2+3 w jednym lotem), czy najpierw tylko domknięcie GSC (Etap 1), żeby mieć dane z indeksacji zanim ruszymy z performance i sprzątaniem? Rekomenduję **całość** — Etap 1 wymaga Twojej akcji w DNS (drugi TXT dla `fotz.pl`), ja w międzyczasie lecę z Etapem 2+3.
