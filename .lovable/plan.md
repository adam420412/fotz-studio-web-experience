## Cel

Wykorzystać paczkę Topical Map AI (1 pillar + 20 klastrów / 1120 briefów dla frazy „agencja social media") do skokowego rozwoju SEO Fotz.pl oraz przy okazji domknąć kilka długów technicznych z `.lovable/plan.md` i memory. Cały content i nowe sekcje wpinamy w istniejącą architekturę (Supabase `blog_articles`, klastry usług, miasta, RelatedServices), bez przepisywania designu.

---

## Etap 1 — Pillar `/agencja-social-media` (priorytet 1)

Nowa, statyczna strona hub (komponent React, nie blog), Awwwards-grade, w obecnym dark/premium stylu:

- Route: `/agencja-social-media` (canonical non-www, bez trailing slash).
- Sekcje: hero z showreelem, „Czym jest agencja SM", „Co robimy", 20 kafelków = 20 klastrów (każdy → osobny URL), case studies SM (Cegielski, klienci z portfolio), cennik 3 tiery (Start/Business/Premium z memory), FAQ (z briefu pillar), CTA → Web3Forms.
- `SEOHead` + `OrganizationSchema` + `Service` JSON-LD + `FAQPage` JSON-LD.
- Dodać do `sitemap-main.xml`, MegaMenu (sekcja Social Media), wewnętrzne linki z `/social-media/obsluga`, `/kompleksowa-obsluga-marketingowa`, `/dla-kogo/*`.

## Etap 2 — Architektura 20 klastrów

Każdy klaster = własny URL hub + N artykułów blogowych pod nim.

```text
/agencja-social-media                       (pillar)
├── /agencja-social-media/co-to-jest        (cluster 01 hub)
├── /agencja-social-media/co-robi           (cluster 02 hub)
├── /agencja-social-media/vs-samodzielny    (cluster 03)
├── /agencja-social-media/rodzaje-uslug     (cluster 04)
├── /agencja-social-media/platformy-2026    (cluster 05)
├── /agencja-social-media/zasada-5-5-5      (cluster 06)
├── /agencja-social-media/poznan            (cluster 10 — priorytet, lokalny)
├── /agencja-social-media/warszawa          (cluster 07)
├── /agencja-social-media/krakow            (08)
├── /agencja-social-media/wroclaw           (09)
├── /agencja-social-media/katowice (11) /lublin (12) /szczecin (13)
├── /agencja-social-media/najlepsza-w-polsce (14)
├── /agencja-social-media/cennik            (15) — kalkulator z memory
├── /agencja-social-media/modele-rozliczen  (16)
├── /agencja-social-media/pakiety           (17)
├── /agencja-social-media/czy-warto         (18)
├── /agencja-social-media/jak-negocjowac    (19)
└── /agencja-social-media/roi               (20)
```

Klaster-hub używa istniejącego `cluster-hub-design-template` z memory: hero, opis, lista artykułów dynamicznie z `blog_articles` (filtr po tagu/slug-prefiksie), RelatedServices, CTA. Miasta dziedziczą szablon `cluster-10-pozna`/Warszawa z lokalnymi danymi (mapa, telefon, oferta).

## Etap 3 — Pipeline generowania 1120 artykułów

Nie piszemy ręcznie. Wykorzystujemy istniejące `babylove-webhook` + `blog_articles` (z memory):

1. Skrypt nodowy `scripts/import-topical-briefs.mjs` parsuje `/tmp/topical/content-briefs/**/*.md` → emituje JSON job-listę (cluster, slug docelowy, target keyword, intent, word count).
2. Dla każdego briefu wywołanie Lovable AI Gateway (`google/gemini-2.5-pro` dla pillar i miast, `gemini-2.5-flash` dla long-tail) z promptem zbudowanym z briefu + brand voice Fotz (premium, lead-gen, polskie daty, RelatedServices).
3. Wyniki idą do `blog_articles` przez edge function (insert: title, slug, content_html, meta_description, json_ld, faq_json_ld, hero_image_url, sync_source='topical-map', is_published=false).
4. Panel admina (już istnieje) — przegląd i bulk publish; po publikacji artykuł automatycznie wpada do `sitemap-index.xml`.
5. Rate limit / batche po 20, retry, log do tabeli `blog_articles.sync_source`.

Priorytet publikacji (kolejność batchy):
- Batch A: cluster 10 (Poznań, 56 briefów) — quick win lokalny.
- Batch B: cluster 15 + 16 + 17 (cennik/pakiety/modele) — wysoka intencja zakupowa.
- Batch C: clustery 07-13 (pozostałe miasta).
- Batch D: 01-06 + 14 + 18-20 (informacyjne, autorytet tematyczny).

## Etap 4 — Naprawa długów z `.lovable/plan.md` (przy okazji)

- Usunąć stary `public/sitemap.xml`, w `robots.txt` zostawić tylko `sitemap-index.xml`.
- Naprawić canonical mismatch (8 stron wymienionych w planie).
- Zredirectować `/login` → `/akademia/auth`, `/landing-page` → `/uslugi/strony-internetowe`.
- Zweryfikować unikalne title/meta na 12 stronach `/dla-kogo/*`.
- Zaktualizować `lastmod` w `sitemap-industries.xml`.
- Po doklejeniu nowych klastrów: rozszerzyć `sitemap-main.xml` + skrypt `validate-sitemap-indexable.mjs`.

## Etap 5 — UX / konwersja

- Rozbudować MegaMenu: nowa kolumna „Agencja Social Media" z 20 klastrami (z limitem widoczności + „zobacz wszystko").
- Footer: dodać sekcję „Agencja SM w miastach" (7 linków).
- W `RelatedServices` na każdej stronie social/blog dodać link do nowego pillara.
- Floating CTA i ExitIntent zostają bez zmian (zgodnie z poprzednim usunięciem popupa wyjścia).
- Pillar i 15 (cennik) → kalkulator wyceny SM (rozszerzenie istniejącego `interactive-price-calculator`).

## Etap 6 — Mierzenie

- Dashboard admina: nowa karta „Topical Map Progress" — % opublikowanych z 1120, traffic per cluster (z `analytics--read_project_analytics`), top 10 pozycji (Semrush connector).
- Co tydzień skrypt `seo-internal-linking-map.mjs` raportuje sieroty.
- 90-dniowy KPI: +50 zaindeksowanych URLi/mies., top-10 dla „agencja social media poznań" w 6 mies.

---

## Szczegóły techniczne

- Brak nowych zależności runtime; tylko skrypty build-time (`scripts/import-topical-briefs.mjs`, generator promptów).
- Migracja Supabase: dodać kolumny `blog_articles.cluster_slug TEXT`, `parent_pillar_slug TEXT`, `target_keyword TEXT`, indeksy. RLS bez zmian (public SELECT published).
- Edge function `generate-from-brief` (verify_jwt=false dla wewnętrznego runnera + secret guard `IMPORT_TOKEN`).
- Nowy katalog `src/pages/social-media-cluster/` z generycznym `ClusterHub.tsx` + 20 cienkimi stronami eksportującymi dane.
- Prerendering: dopisać 20+1 URLi pillara/klastrów do skryptu `prerendering-static-metadata-implementation`.
- Wszystkie nowe `<title>` ≤60 znaków, `<meta description>` ≤160, polskie daty (memory `polish-date-localization-standards`).

## Kolejność wykonania (sprint)

1. Pillar `/agencja-social-media` + nawigacja + sitemap + JSON-LD.
2. Migracja `blog_articles` + edge function `generate-from-brief` + skrypt importu briefów.
3. Klaster 10 (Poznań) — hub + batch 56 artykułów (test pipeline).
4. Klastry 15/16/17 (cennik/pakiety/modele) + kalkulator.
5. Pozostałe miasta (07-09, 11-13) + cluster 14.
6. Klastry informacyjne 01-06, 18-20.
7. Sprzątanie długów SEO z `.lovable/plan.md`.
8. Dashboard postępu + raporty.

---

## Pytania przed startem

1. Czy publikujemy artykuły z auto-publish, czy każdy batch ma przejść QA w panelu admina (rekomenduję QA dla pierwszych 3 batchy, potem auto)?
2. Czy chcesz strony miast pod `/agencja-social-media/<miasto>` (nowy klaster), czy konsolidujemy z istniejącymi stronami `/social-media/<miasto>` i `/kampanie-reklamowe-poznan`?
3. Kalkulator wyceny SM na pillarze i `/cennik` — bazujemy na obecnych tierach Start/Business/Premium z memory, czy chcesz nowe widełki specyficzne dla SM?
