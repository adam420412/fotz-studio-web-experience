# Audyt treści i SEO podstron — 2026-10-01

Gałąź: `claude/nice-darwin-b032ah` (od `main` @ `5ab99d8`). Zakres: wyłącznie `src/pages/**` + ten raport.
Pliki `src/components/**`, `src/index.css`, `scripts/prerender-seo.mjs`, `src/App.tsx` nie były edytowane (równolegle zmienia je Codex).

## 1. Inwentaryzacja

| Pozycja | Liczba |
|---|---|
| Wpisy `<Route>` w `src/App.tsx` | **1051** |
| w tym trasy statyczne (bez parametrów) | 1047 |
| w tym trasy dynamiczne / wildcard (`/blog/:slug`, `/agencja-social-media/:clusterSlug`, `/akademia/*`, `*`) | 4 |
| w tym przekierowania `Redirect301` | 38 |
| Pliki stron `src/pages/**/*.tsx` | **1014** |
| Pliki stron bez trasy w App.tsx (martwy kod, nie ruszałem) | 7: `AgencjaMarketingowaHub`, `Akademia`, `AkademiaLanding`, `BlogEcommercePoradnik`, `BlogJakWybracAgencje`, `BlogMVPCoToJest`, `clusters/UslugiCluster` |
| Trasy wskazujące na brakujący plik | 0 |
| Przekierowania do nieistniejącej trasy | 0 |

## 2. Faktyczny zakres kontroli (ważne)

To był **audyt statyczny kodu źródłowego**, wykonany skryptem nad wszystkimi 1051 trasami i 1014 plikami stron. **Nie był to odbiór przeglądarkowy** — strony nie były renderowane, nie sprawdzano wyglądu, Lighthouse, konsoli ani danych Google Search Console (brak dostępu z tej sesji; link do GSC przesłany przez właściciela nie został odczytany).

Co sprawdzono skryptem dla każdej strony:
- obecność `SEOHead`, `title`, `description`, `canonical` (literal lub zmienna);
- zgodność ścieżki `canonical` z trasą z App.tsx;
- zgodność `url` w `ArticleSchema` z `canonical`;
- liczba `<h1>` / `<motion.h1>` w pliku;
- wszystkie linki wewnętrzne (`to=`, `href=`, `url:`, `link:`, `path:`) względem listy tras, w tym linki do tras-przekierowań;
- URL-e w `BreadcrumbSchema` względem listy tras;
- obrazy `https://fotz.pl/...` w schematach względem `public/`;
- duplikaty `title`/`description` między stronami, długości, tytuły/opisy zakończone „…”;
- miasto w `title`/`description` vs miasto w slug-u trasy (heurystyka);
- numery telefonów-placeholdery (uzupełnienie od Codexa).

Czego **nie** sprawdzono: poprawność merytoryczna treści ~1000 artykułów, literówki w treści akapitów (sprawdzono tylko tytuły SEO, breadcrumby i etykiety), działanie formularzy, schematy JSON-LD pod walidatorem Google, H1 renderowane przez komponenty wspólne (`Hero`, `ServicePageTemplate`) — tylko potwierdzono w kodzie, że `Hero.tsx`/`HeroV3.tsx` zawierają `<h1>`.

## 3. Wykonane poprawki (149 plików w `src/pages/**`)

### 3.1 Canonical / schema URL niezgodne z trasą
| Strona (trasa) | Było | Jest |
|---|---|---|
| `/agencja-marketingowa/elblag` | `canonical="/agencja-marketingowa/elblag"` (relatywny) | pełny URL `https://fotz.pl/...` |
| `/admin/topical-map` (noIndex) | canonical relatywny | pełny URL (spójność; i tak nierenderowany przy noIndex) |
| `/blog/customer-health-score-co-to` | canonical, ArticleSchema i breadcrumb → `/blog/customer-health-score-co-to-jest-jak-zbudowac` (trasa nie istnieje, 404) | → `/blog/customer-health-score-co-to` |
| `/blog/co-to-jest-cms` | ArticleSchema `url` → `/blog/cms-co-to-jest` (brak trasy) | → canonical |
| `/blog/marketing-automation` | ArticleSchema `url` + breadcrumb → `/blog/automatyzacja-marketingu-narzedzia` (brak trasy), nazwa „Automatyzacja marketingu narzedzia” | → `/blog/marketing-automation`, nazwa „Marketing automation” |
| `/realizacje/fps-cegielski` | breadcrumb + ArticleSchema → `/realizacje/fps-poznan` (brak trasy) | → `/realizacje/fps-cegielski` |
| `/blog/event-driven-architecture-co-to-jest-jak-wdrozyz` i `/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing` | identyczny `title` „Event-Driven Architecture \| Fotz Studio” na dwóch różnych stronach | rozróżnione: „…— jak wdrożyć EDA?” / „…— Kafka, RabbitMQ, CQRS” |

Nie zmieniono (celowe aliasy canonical na inną istniejącą stronę, zgodnie z uwagą Codexa): `/blog/reklama-programatyczna-co-to` → `/blog/programmatic-advertising-co-to` (moja wcześniejsza zmiana cofnięta), API gateway, zero trust, NPS/OKR, `/uslugi/audyt-seo` → `/seo/audyt`.

### 3.2 Linki wewnętrzne do nieistniejących tras (naprawione → istniejąca trasa)
| Plik | Zły link | Poprawiony na |
|---|---|---|
| AgencjaKreaTywnaPoznan | `/uslugi/social-media/poznan`, `/uslugi/produkcja-filmow/poznan` | `/social-media/poznan`, `/uslugi/produkcja-filmow` |
| AgencjaMarketingowaCzestochowa, …Legnica | `/social-media/czestochowa`, `/social-media/legnica` | `/social-media` (jak na pozostałych stronach miejskich) |
| AgencjaMarketingowaGdynia, …Gdansk | `/agencje-marketingowe` | `/agencja-marketingowa` |
| AgencjaMarketingowaKielce | breadcrumb `https://fotz.pl/agencja` | `/agencja-marketingowa` |
| AgencjaSEOWarszawa, AgencjaSEOWroclaw | `/agencja-seo` | `/seo/pozycjonowanie` (jak AgencjaSEOKrakow) |
| BlogContentMarketingCoTo | `/uslugi/pozycjonowanie-stron-internetowych` | `/uslugi/pozycjonowanie` |
| BlogDronWMarketinguFirmy, BlogFilmRekrutacyjnyEmployerBranding | `/produkcja-video-poznan` | `/uslugi/produkcja-filmow` |
| BlogZdjeciaKorporacyjneVsReklamowe | `/fotografia-biznesowa` | `/uslugi/fotografia` |
| CaseStudyStronaWWW, CaseStudyEcommerceCRO, CaseStudyLocalSEO | `/case-studies` | `/realizacje` |
| DlaKogoFirmyLokalne, DlaKogoInstytucje | `/realizacje/graf`, `/realizacje/fps` | `/realizacje/graf-tapicerstwo`, `/realizacje/fps-cegielski` |
| FacebookAdsKatowice, FacebookAdsLodz | `/uslugi/seo/katowice`, `/uslugi/seo/lodz` | `/uslugi/pozycjonowanie/{miasto}` |
| Pozycjonowanie (`/seo/pozycjonowanie`) | 9 linków `/pozycjonowanie-{miasto}` (brak tras), renderowanych jako „Strona w przygotowaniu” | `/seo/pozycjonowanie-{miasto}` lub `/uslugi/pozycjonowanie/{miasto}`; wszystkie miasta mają strony, więc kafelki są teraz linkami |
| SocialMedia (`/social-media/obsluga`) | Warszawa → `/social-media-warszawa` (brak trasy, „Wkrótce”) | `/social-media/warszawa` (strona istnieje, jest linkiem). Pozostałe miasta nadal „Wkrótce” — brak stron |
| PozycjonowanieKalisz, …Plock, …Legnica, …Torun, …Zgorzelec | `/pozycjonowanie`, `/pozycjonowanie/{duże miasto}`, `/pozycjonowanie/torun` | `/uslugi/pozycjonowanie`, `/uslugi/pozycjonowanie/{miasto}` |
| PozycjonowanieSosnowiec, …Walbrzych | `/uslugi/pozycjonowanie/gliwice`, `/…/zabrze` | `/pozycjonowanie/gliwice`, `/pozycjonowanie/zabrze` |
| PozycjonowanieSosnowiec, …Walbrzych, …Gliwice, …Elblag | breadcrumb własny `https://fotz.pl/uslugi/pozycjonowanie/{miasto}` | `https://fotz.pl/pozycjonowanie/{miasto}` (faktyczna trasa) |
| SklepyInternetowe | `/uslugi/sklepy-internetowe/wroclaw`, `/gdansk` (brak stron) — usunięte z listy miast; `/uslugi/meta-ads` | `/performance-marketing/meta-ads` |
| SklepyInternetowePoznan | `/uslugi/ecommerce` | `/uslugi/sklepy-internetowe` |
| StronyInternetoweKielce, …Rzeszow, …Torun, …Walbrzych | `/strony-internetowe`, `/strony-internetowe/rzeszow`, `/strony-internetowe/torun` | `/uslugi/strony-internetowe`, `/uslugi/strony-internetowe/{miasto}` |
| UslugiIdentyfikacjaWizualna | `/uslugi/kampanie-reklamowe` | `/kampanie-reklamowe` |
| KompleksowaObsluga | breadcrumb `https://fotz.pl/kompleksowa-obsluga` | `/kompleksowa-obsluga-marketingowa` |

### 3.3 Linki wewnętrzne do tras-przekierowań 301 (54 wystąpienia → cel bezpośredni)
- `/agencja-marketingowa-{miasto}` → `/agencja-marketingowa/{miasto}` (23 wystąpienia w stronach miejskich, blogach i sklepach),
- `/landing-page` (301 → artykuł blogowy) w listach „powiązane usługi” → strona usługi `/uslugi/landing-page` (21 plików: GoogleAds, FacebookAds, TikTokAds, YouTubeAds, StronyInternetowe, SEOOffPage, CMEbooki, blogi…),
- `/blog/copywriting-landing-page`, `/blog/influencer-marketing-polska`, `/blog/instagram-reels-vs-tiktok`, `/blog/tiktok-dla-biznesu`, `/content-marketing/tresci-seo`, `/akademia` → cele przekierowań.

### 3.4 Obrazy w schematach wskazujące na nieistniejące pliki (36 wystąpień)
- 30 artykułów: `ArticleSchema image` / JSON-LD `image` typu `https://fotz.pl/og-*.jpg`, `/images/...`, `/img/...` — pliki nie istnieją w `public/` → zastąpione istniejącym `https://fotz.pl/og-image.jpg`.
- 6 stron: `https://fotz.pl/logo.png` (brak) → `https://fotz.pl/logo-fotz.jpg` (istnieje).
- CaseStudyKlagem: `https://fotz.pl/portfolio/klagem.png` (brak) → URL z importowanego assetu `klagemImg`.

### 3.5 Tytuły SEO urwane „…” (artefakt generatora) i literówki — 17 stron
Przepisane na pełne tytuły ≤ 60 znaków (sens zachowany): BlogContentMarketing, BlogCopywritingDlaSEO, BlogCssAnchorPopoverCoTo, BlogCssContainerLayerCoTo, BlogFotografiaArchitektura, BlogGoogleMyBusiness, BlogMarketingDlaSalonuPieknosci, BlogMarketingLokalny, BlogMswTestingCoTo, BlogPinterestDlaFirmy, BlogProjektowanieStron, BlogReactFlowCoTo, BlogRetargetingPoradnik, BlogSEOTechniczne, BlogSklepInternetowyNaWlasnej („Wlasny… Porzadnik…” → „Własny… Poradnik”, także w headline i alt), BlogUXAudit, BlogVideoMarketingROI.

### 3.6 Nazwy miast bez diakrytyków w breadcrumbach / etykietach
„Torun” → „Toruń” (PozycjonowanieTorun), „Plock” → „Płock” (AgencjaMarketingowaPlock), „Walbrzych” → „Wałbrzych” (StronyInternetoweWalbrzych), „Lodz” → „Łódź” (TikTokAdsLodz: etykieta i `areaServed`).

### 3.7 Telefony-placeholdery (uzupełnienie od Codexa; zweryfikowany numer ze stopki: **+48 790 814 814**)
Zastąpione w treści widocznej, schematach `telephone` i `tel:`; przyciski „Zadzwoń” bez linku zamienione na `<Button asChild><a href="tel:+48790814814">`:
- `+48 61 123 45 67` — AgencjaMarketingowaPoznan (2×)
- `+48 (22) 123 45 67` — AgencjaMarketingowaWarszawa (3×)
- `+48 123 456 789` / `+48123456789` — AgencjaMarketingowaGdansk (3×), …Bydgoszcz, …Elblag, GoogleAdsBydgoszcz (2×), GoogleAdsSzczecin, GoogleAdsBialystok, GoogleAdsKielce, FacebookAdsTorun (schema), CennikPozycjonowania, KampanieReklamowe, StronyInternetowePodkarpacie, StronyInternetoweWielkopolska (2×)
- `+48 12 345 6789` / `+48-12-345-6789` — AgencjaMarketingowaWroclaw (2×)
- `+48 24 262 0000` — AgencjaMarketingowaPlock
- `telephone: "+48"`, `"+48 (kontakt)"` — AgencjaMarketingowaJeleniaGora, …Zgorzelec (schema)

Zostawione celowo: `placeholder="+48 123 456 789"` w polach formularzy (Kontakt, Konsultacja, Kariera, GeneratorBriefu), przykładowe numery w treści edukacyjnej (BlogPozycjonowanieGoogleMaps, BlogColdEmailCoTo) i w próbkach kodu (BlogSupabaseDeepDiveCoTo, BlogKonvaCanvasCoTo, BlogAwsCoTo).

### 3.8 Responsywność (punktowo, wg wskazania Codexa)
- `/agencja-marketingowa/poznan`: hero — dwa przyciski w `flex` bez zawijania → `flex-col sm:flex-row`, przyciski `w-full sm:w-auto`.
- `/blog/brand-ambassador-co-to`: długi badge kosztów (`flex-shrink-0 ml-4`) wypychał nagłówek → na mobile układ kolumnowy, badge `self-start`, na ≥sm ograniczony do 50% szerokości.

## 4. Pozostałe niepewności faktograficzne / do decyzji właściciela (NIE zmieniane)

1. **Domena canonical na `/realizacje/dawid-edu`** (CaseStudyDawidEdu): canonical, breadcrumby i `ogImage` używają `https://www.fotz-studio.pl/...`, podczas gdy całość witryny używa `https://fotz.pl`. Zgodnie z instrukcją czekamy na decyzję właściciela.
2. **Fikcyjne adresy biur** w stopkach stron miejskich, np. AgencjaMarketingowaPlock: „ul. Grodzka 10, 09-400 Plock” (telefon poprawiony, adres zostawiony bez dowodów). Warto przejrzeć wszystkie `AgencjaMarketingowa*` pod kątem `address`/`PostalAddress` w JSON-LD (np. Wrocław, Warszawa, Gdańsk deklarują lokalne adresy).
3. **Statystyki w hero stron miejskich** (np. Poznań: „ponad 200 projektów”, „500+ klientów”, „97% zadowolonych”) — niezweryfikowane, nie dopisywałem ani nie usuwałem.
4. **Trasa `/blog/dług-techniczny-co-to`** (BlogTechDebtCoTo) zawiera „ł” w ścieżce; canonical jest procentowo zakodowany i formalnie zgodny, ale slug z polskim znakiem to ryzyko w sitemapie/GSC. Wymaga zmiany w App.tsx + redirect (poza moim zakresem).
5. **Literówka w slugu trasy** `/blog/event-driven-architecture-co-to-jest-jak-wdrozyz` (i `…zero-trust…-jak-wdrozyz`, `data-mesh…-jak-wdrozyz`) — „wdrozyz” zamiast „wdrozyc”. Zmiana wymaga App.tsx + 301.
6. **Podwójne trasy do tego samego komponentu**: np. `/strony-internetowe/kielce` i `/uslugi/strony-internetowe/kielce` → `StronyInternetoweKielce` (canonical wskazuje pierwszą). Analogicznie aliasy blogowe. Do decyzji, czy zostawić jako aliasy, czy dodać 301.
7. **`/social-media/obsluga`**: kafelki miast Kraków, Wrocław, Gdańsk, Łódź, Katowice, Szczecin, Bydgoszcz, Lublin wciąż „Wkrótce” — nie ma stron social media dla tych miast (hrefy w kodzie `/social-media-{miasto}` są martwe, ale nie renderują się jako linki).
8. **`GeneratorBriefu`**: skrypt wykrył 2× `<h1>` — drugi jest w szablonie HTML generowanego dokumentu (string), nie w DOM strony. Nie jest to błąd.
9. **`Index`**: brak `<h1>` w pliku strony — H1 renderuje komponent `Hero`/`HeroV3` (potwierdzone w kodzie komponentu).

## 5. Problemy systemowe do obsługi po stronie Codexa / generatora (nie naprawiane punktowo)

- **327 opisów meta** kończy się „…” wpisanym w źródle (generator ucinał do ~155 znaków) i **312 tytułów** ma > 60 znaków (SEOHead sam ucina do 57 + „...”). Codex potwierdził, że generator obsługuje już pełne tytuły — do regeneracji hurtowej.
- **BreadcrumbSchema z relatywnymi URL-ami** (`url: "/"`, `"/blog"`) w 436 stronach — JSON-LD `item` powinien być absolutny. Najprościej dodać prefiks `https://fotz.pl` w `BreadcrumbSchema` (komponent Codexa) zamiast edytować 436 plików.
- Niespójny branding w tytułach: „| Fotz Studio”, „| Fotz.pl”, „| fotz.pl”, „| Fotz”, „- fotz studio”. Do ujednolicenia w generatorze.
- 7 nieużywanych plików stron (sekcja 1) — kandydaci do usunięcia po potwierdzeniu.
- Wszystkie strony miejskie `AgencjaMarketingowa*` mają podobne wzorce fikcyjnych danych (telefon naprawiony, adresy — patrz pkt 4.2).

## 6. Walidacja

| Krok | Wynik |
|---|---|
| `npx tsc --noEmit -p tsconfig.app.json` | OK (exit 0) |
| `npx eslint <149 zmienionych plików>` | OK (exit 0) |
| `npm run build` (`vite build` + `scripts/prerender-seo.mjs`) | patrz sekcja 6.1 |
| Ponowny przebieg skryptu audytu po poprawkach | brakujące trasy w linkach: 0 (poza przykładami w BlogRobotsTxtCoTo i martwymi hrefami „Wkrótce”); linki do 301: 0; brakujące assety schematów: 0; duplikaty title: 0; tytuły z „…”: 0; ArticleSchema url ≠ canonical: 0 |

Nie przepisywano żadnych testów (repo nie ma testów jednostkowych; skrypty: `lint`, `build`).

Sugestia dla GSC: po wdrożeniu porównać raport „Strony” → „Nie znaleziono (404)” i „Strona z przekierowaniem” z listą z sekcji 3.2–3.3 oraz „Duplikat, Google wybrał inną stronę kanoniczną” z aliasami z sekcji 4.6.
