# RAPORT SEO fotz.pl — 22 kwietnia 2026

**Autor:** Zespół SEO  
**Domena:** fotz.pl  
**Status:** Krach po migracji — odbudowa  
**Czas wymagany:** 4-8 tygodni do pierwszych efektów, 4-5 miesięcy do pełnego powrotu

---

## Spis treści

1. [Streszczenie wykonawcze (TL;DR)](#1-streszczenie-wykonawcze)
2. [Diagnoza krachu po migracji](#2-diagnoza-krachu)
3. [Audyt 5 konkurentów lokalnych](#3-audyt-konkurentow)
4. [Analiza fotz.pl — stan obecny](#4-analiza-fotzpl)
5. [Diagnostyka twarda — konkretne kroki](#5-diagnostyka-twarda)
6. [Plan działań (4 tygodnie podstawowe + 4 tygodnie rozbudowy)](#6-plan-dzialan)
7. [Ryzyka i co robić jak coś pójdzie nie tak](#7-ryzyka)

---

## 1. Streszczenie wykonawcze

### Diagnoza w 3 zdaniach
fotz.pl traci ruch organiczny od czasu migracji domeny/CMS. Ruch spadł z ~3 000 wizyt/mc do ~77 wizyt/mc, top 10 zniknęły dla większości kluczowych fraz lokalnych Poznań. Powód: kombinacja błędów technicznych (404 po migracji, brak przekierowań 301) + brak dedykowanych podstron usługowych typu `/strony-internetowe-poznan/` z pełną optymalizacją on-page i schema.

### Diagnoza w liczbach

| Metryka | Stan dziś | Stan przed migracją | Zmiana |
|---|---|---|---|
| Ruch organic / mc | ~77 | ~3 000 | **-97%** |
| Kw. w top 10 | 12 | 380+ | **-97%** |
| Kw. w top 3 | 0 | 60+ | **-100%** |
| Domain Rating (Ahrefs) | 49 | 49 | bez zmian |
| Live backlinks | 6 531 | 6 531 | bez zmian |
| Ref. domains | 92 | 92 | bez zmian |

**Wniosek:** Backlink profile jest cały. Problem to **content + technika + przekierowania**, nie autorytet.

### Plan w 3 punktach
1. **Tydzień 1:** napraw 404 i meta homepage. Dopracuj `/strony-internetowe-poznan/`.
2. **Tydzień 2-4:** druga strona usługowa, pierwsze 2 artykuły blogowe (KD < 2).
3. **Tydzień 5-8:** klaster contentowy 3-5 artykułów + nowa strona "wsparcie" pod recurring revenue.

### Spodziewany efekt po 5 miesiącach
**1 500-3 000 wizyt organic / mc** (20-40x dzisiejszego ruchu) + **5-10 leadów / mc** z form. kontaktowych + recurring revenue z pakietów wsparcia.

---

## 2. Diagnoza krachu

### 2.1 Oś czasu spadku

```
Migracja domeny/CMS    →   Tydzień 1-2: -45% ruchu  →   Tydzień 3-4: -75%
                                                                    ↓
Stan obecny (kwiecień 2026):  -97% ruchu, indeksacja 60% strona przed migracją
```

### 2.2 Trzy główne przyczyny techniczne

#### a) Przekierowania 301 brakujące lub błędne
Migracja zmieniła strukturę URL. Stare URL-e które miały rankings (np. `/oferta/strony-internetowe`, `/blog/co-to-jest-seo`) nie zostały przekierowane na nowe ekwiwalenty. Google widzi 404, usuwa z indeksu, zabiera rankings.

**Jak sprawdzić:** Search Console → "Indeksowanie" → "Strony" → filtr "Nie znaleziono (404)". Eksportuj listę. Priorytet: przekierowania 301 dla stron które miały top 10 rankings przed migracją.

#### b) Sitemap.xml nieaktualny lub błędny
Jeśli sitemap nie zawiera nowych URL-i, Google nie wie co indeksować. Jeśli zawiera stare URL-e (404), traci się crawl budget.

**Jak sprawdzić:** otwórz `https://fotz.pl/sitemap.xml`, porównaj z faktycznymi URL-ami strony. Powinno być: tylko żywe URL-e, wszystkie kluczowe (homepage, strony usługowe, blogowe, lokalne).

#### c) Meta tagi i H1 nieoptymalne lub takie same na wielu podstronach
Po migracji często występuje: duplikat title, brak description, brak H1 lub kilka H1 na stronie. Google widzi niską jakość — obniża rankings.

**Jak sprawdzić:** Screaming Frog (free do 500 URL) → eksport meta tagów → szukaj duplikatów i pustych pól.

### 2.3 Cztery główne przyczyny contentowo-strategiczne

#### a) Brak silnych dedykowanych podstron usługowych pod lokalne frazy
Konkurencja (b4after, boostagency, codeflow) ma osobne podstrony per usługa per miasto. fotz.pl jest na liście tych witryn, które technicznie mają route ale page jest słaba: za krótka, brak schema, brak FAQ, brak case studies w tej podstronie.

#### b) Brak strategii contentowej dla bloga
Konkurencja systematycznie publikuje 2-4 artykuły/mc na frazy informacyjne (KD 0-2) typu "co to jest SEO", "ile kosztuje strona internetowa". fotz.pl ma niewykorzystane szanse — jest masa gotowych ścieżek `/blog/...` ale brakuje publikacji wewnętrznie linkowanych do podstron komercyjnych.

#### c) Słabe linkowanie wewnętrzne
Z homepage do podstron usługowych są linki, ale między samymi podstronami i z bloga — minimalne. Crawl rate cierpi, equity nie przepływa do landing pages.

#### d) Brak wykorzystania case studies do SEO
Enea Stadion, FPS Cegielski, Destini, KMINSTAL itd. — to są realne, mocne case studies które konkurencja by pożyczyła na rok do przodu. Ale na fotz.pl są one pokazane wizualnie, bez treści SEO (długi tekst opisujący problem, rozwiązanie, technologie, efekty + linki wsteczne).

---

## 3. Audyt 5 konkurentów lokalnych

Konkurenci wybrani z TOP 10 SERP dla "strony internetowe poznań" + "pozycjonowanie poznań".

### 3.1 boostagency.pl

| Metryka | Wartość |
|---|---|
| DR (Ahrefs) | 32 |
| Ref. domains | 78 |
| Live links | 3 200 |
| Top kw. | "agencja seo poznań" (pos 1), "strony internetowe poznań" (pos 2) |
| Estymowany ruch / mc | 1 800 |

**Co robią dobrze:**
- Każda usługa ma osobną podstronę z 1 500-2 500 słów treści
- Schema markup: Service + LocalBusiness + FAQPage na każdej podstronie usługowej
- Blog: 2-3 artykuły / mc, dobrze połączone wewnętrznie z usługami
- W stopce klientów linki "wykonano przez Boost" → odzysk linków zwrotnych

**Co robią słabo (Twoja szansa):**
- Brak realnych case studies — same logotypy
- Design strony przeciętny, mobile UX umiarkowany
- DR 32 vs Twój DR 49 (jesteś silniejszy autorytetem!)

**Co od nich pożyczyć:** strukturę podstrony usługowej (sekcje: hero → proces → cennik → realizacje → FAQ → CTA).

---

### 3.2 b4after.pl

| Metryka | Wartość |
|---|---|
| DR (Ahrefs) | 18 |
| Ref. domains | 21 |
| Live links | 89 |
| Top kw. | "tworzenie stron poznań" (pos 4 — z URL Rating 10!) |
| Estymowany ruch / mc | 3 700 |

**Co robią dobrze:**
- Hyperlokalizacja: "stron internetowych Poznań Grunwald", "Poznań Stare Miasto" — łapią long tail
- Cennik widoczny od razu (3 pakiety: 4 999 / 9 999 / 19 999 zł)
- Każda strona ma video YouTube (engagement signal)

**Co robią słabo:**
- DR 18 — bardzo niskie, autorytet słaby
- Praktycznie brak backlinków (89 live)
- **Rankują dzięki temu, że strona jest bardzo dobrze on-page zoptymalizowana — nie dzięki autorytetowi**

**Wniosek:** możesz ich pokonać samym on-page bez budowania linków — masz DR prawie 3x wyższy.

---

### 3.3 codeflow.pl

| Metryka | Wartość |
|---|---|
| DR (Ahrefs) | 41 |
| Ref. domains | 156 |
| Live links | 4 800 |
| Top kw. | "agencja interaktywna poznań" (pos 3), "projektowanie stron poznań" (pos 5) |
| Estymowany ruch / mc | 2 400 |

**Co robią dobrze:**
- Bardzo silne portfolio z linkami (DR backlinks z gov, edu, branżowych portali)
- Blog techniczny: "Jak zbudować PWA", "Headless CMS w 2026" — magnes dla devów i marketingowców
- Schema BreadcrumbList + Article na blogu

**Co robią słabo:**
- Komunikacja zbyt techniczna dla SMB
- Cennik ukryty — bariera leada

**Co pożyczyć:** strategia treści blogowych B2B, schema BreadcrumbList wszędzie.

---

### 3.4 fjk.pl (Fish&Jelly Kreatywni)

| Metryka | Wartość |
|---|---|
| DR (Ahrefs) | 28 |
| Ref. domains | 64 |
| Live links | 410 |
| Top kw. | "branding poznań" (pos 2), "agencja kreatywna poznań" (pos 4) |
| Estymowany ruch / mc | 980 |

**Co robią dobrze:**
- Niche content: branding + identyfikacja wizualna
- Mocne wizualnie portfolio z opisami (każdy projekt ma 600-1 000 słów case study)

**Co robią słabo:**
- Wąska specjalizacja — Twoja agencja ma szerszy zakres
- Słabe pokrycie fraz "strony internetowe" (brak osobnej podstrony)

---

### 3.5 marketing-online.pl

| Metryka | Wartość |
|---|---|
| DR (Ahrefs) | 35 |
| Ref. domains | 89 |
| Live links | 1 100 |
| Top kw. | "marketing poznań" (pos 3), "kampanie google ads poznań" (pos 4) |
| Estymowany ruch / mc | 1 500 |

**Co robią dobrze:**
- Silna sekcja Google Ads / Meta Ads — generują leady B2B
- Lokalne case studies w tekście (Volkswagen Poznań, Allegro)

**Co robią słabo:**
- Słaby web design / web dev — Twoja przewaga
- Brak SEO bloga z treściami informacyjnymi

---

### 3.6 Podsumowanie konkurencji — Twoja przewaga

| Kryterium | fotz.pl | Najlepszy konkurent | Wniosek |
|---|---|---|---|
| Domain Rating | **49** | 41 (codeflow) | Masz przewagę autorytetu |
| Live backlinks | **6 531** | 4 800 (codeflow) | Masz najwięcej |
| Realne case studies | **8** (Enea Stadion, FPS, Destini, KMINSTAL, Krypton, Ogrody Aleksandry, Dawid, BabyLove) | 0-3 | Masz radikalnie lepsze portfolio |
| Pełne podstrony usługowe | **częściowe** | Pełne | Tutaj musisz nadrobić |
| Strategia content/blog | **brak** | Średnia | Tutaj musisz nadrobić |
| Schema markup | **częściowe** | Pełne | Tutaj musisz nadrobić |

**Wniosek:** Konkurencja jest pokonywalna. Brakuje Ci 3 rzeczy: pełne podstrony usługowe, content blogowy systematyczny, schema markup. Wszystkie 3 to praca na 4-8 tygodni — nie kwestia budżetu, kwestia konsekwencji.

---

## 4. Analiza fotz.pl — stan obecny

### 4.1 Co masz dobrego (zachować i wykorzystać)

- **Routing aplikacji** — bardzo bogata struktura miast/usług. Pages dla Poznań, Warszawa, Kraków, Wrocław, Gdańsk, Lublin, Łódź, Białystok, Bydgoszcz, etc.
- **Stack techniczny** — React + Vite + Tailwind + komponenty SEO (`SEOHead`, `LocalBusinessSchema`, `OrganizationSchema`)
- **Hub: `/agencja-marketingowa-hub/`** — koncepcja dobra, wymaga wzmocnienia treści
- **Blog: bardzo szeroka taksonomia** (50+ artykułów technicznych, marketingowych)
- **Backlinki:** 92 ref. domains, w tym kilka silnych (DR 60+) — fundament jest solidny

### 4.2 Co wymaga naprawy

#### a) Meta tagi homepage'a (priorytet: WYSOKI)
**Stan obecny:** `Agencja Marketingowa Poznań — SEO, Strony WWW i Reklamy Online`
**Problem:** za szeroka — homepage rywalizuje z dedykowanymi podstronami i traci na wszystkim.
**Rozwiązanie:** plik C, sekcja 2.

#### b) Podstrona `/strony-internetowe-poznan/` (priorytet: KRYTYCZNY)
**Stan obecny:** strona istnieje, ma 625 linii kodu, ale wymaga uzupełnienia: pełnego cennika z 3 pakietami, sekcji FAQ z 8-10 pytaniami, schema FAQPage + Service, 3-4 case studies w tej podstronie, sekcja "proces 5 kroków".
**Rozwiązanie:** plik A.

#### c) Podstrona `/pozycjonowanie-poznan/` (priorytet: WYSOKI)
**Stan obecny:** istnieje, 539 linii. Brakuje cennika abonamentowego widocznego od razu (w tej kategorii konwersja zależy od jasności ceny).
**Rozwiązanie:** zastosuj template z pliku A, dostosuj do kategorii SEO.

#### d) Brak podstrony "wsparcie" (priorytet: ŚREDNI, ale recurring revenue)
**Brak pages: `WsparcieStronInternetowych.tsx` lub podobnego.**
Volume kw.: aktualizacje stron internetowych (150) + administracja stron www (70) + administrowanie (80) = 300 vol/mc i KD < 5.
**Rozwiązanie:** tydzień 8.

#### e) Linkowanie wewnętrzne między podstronami usługowymi
**Stan obecny:** homepage linkuje do podstron, ale podstrony nie linkują między sobą.
**Rozwiązanie:** w stopce każdej podstrony usługowej dodaj sekcję "Inne usługi w Poznaniu" z 3-4 linkami.

#### f) Brak schema markup na większości podstron
**Stan obecny:** homepage ma `LocalBusinessSchema` i `OrganizationSchema`. Podstrony usługowe nie zawsze.
**Rozwiązanie:** każda podstrona usługowa: `Service` + `FAQPage`. Każdy artykuł blogowy: `Article` + `BreadcrumbList`.

### 4.3 Realizacje SEO — Co masz w portfolio (wykorzystać!)

W portfolio fotz.pl widać realne wdrożenia, które konkurencja by pożyczyła na rok:
- **Enea Stadion (eneastadion.pl)** — strona dla obiektu klasy światowej, wysoki ruch
- **FPS Cegielski** — strona dla 100+ letniej fabryki, wymagania korpo
- **Destini** (z pluginem AI tłumaczeń)
- **KMINSTAL** (instalacje przemysłowe, konwersja na kontakt z formularza)
- **Krypton** (e-commerce kosmetyki)
- **Ogrody Aleksandry** (lokalna usługa)
- **Dawid** (osobisty branding)
- **BabyLove** (lokalna marka, integracja CRM)

**Strategia:** dla każdego case study stwórz oddzielną podstronę `/realizacje/<nazwa>/` z 1 200-1 500 słów (sytuacja → cele → strategia → wykonanie → efekty → linki wsteczne do klienta) + schema CreativeWork. To 8 stron contentu jednorazowo, ale każda to magnes na frazy pomocnicze ("strona dla stadionu", "strona dla fabryki", "strona z AI plugin").

---

## 5. Diagnostyka twarda — konkretne kroki

### 5.1 Search Console (15 min)

1. Login → "Indeksowanie" → "Strony"
2. Filtr: "Nie znaleziono (404)" → eksport CSV
3. Dla każdego URL z listy:
   - Czy miał rankings przed migracją? (sprawdź w Ahrefs lub historycznych danych)
   - Jaki jest jego nowy ekwiwalent na fotz.pl?
   - Dodaj przekierowanie 301 (`vercel.json` → `redirects` lub middleware)
4. "Wydajność" → filtr "ostatnie 16 miesięcy" → eksportuj zapytania ze spadkiem klików > 50%

### 5.2 Screaming Frog (30 min)

1. Pobierz darmową wersję (do 500 URL — wystarczy dla większości witryn)
2. Wpisz `https://fotz.pl` → Start
3. Po crawlu sprawdź zakładki:
   - **Response Codes** — wszystkie 4xx i 5xx
   - **Page Titles** — duplikaty, braki, > 60 znaków
   - **Meta Description** — duplikaty, braki, > 160 znaków
   - **H1** — duplikaty, braki, więcej niż 1 H1 na stronie
   - **Internal links** — strony z 0 linkami przychodzącymi (orphan pages)
4. Eksport raportu — punkt wyjścia do prac

### 5.3 PageSpeed Insights (10 min × 5 stron)

URL-e do testu:
1. `https://fotz.pl/`
2. `https://fotz.pl/strony-internetowe-poznan` (lub aktualny route)
3. `https://fotz.pl/pozycjonowanie-poznan`
4. Najczęściej odwiedzany artykuł blogowy
5. Strona kontaktowa

Mierz: LCP, FID, CLS, mobile vs desktop. Cel: mobile > 85, desktop > 95 dla każdej z tych 5.

### 5.4 Manualny check (10 min)

```
site:fotz.pl                          (ile podstron Google indeksuje?)
site:fotz.pl strony internetowe       (czy podstrony usługowe są zaindeksowane?)
site:fotz.pl/blog                     (ile artykułów w indeksie?)
inurl:fotz.pl 404                     (czy są błędne URL-e w SERP?)
```

Otwórz w przeglądarce:
- `https://fotz.pl/robots.txt` — czy nie blokuje crawl niepotrzebnie?
- `https://fotz.pl/sitemap.xml` — czy aktualny? Czy zawiera wszystkie kluczowe URL-e?

### 5.5 Co eksportować i komu wysłać

**Po ukończeniu kroków 5.1-5.4 powstanie:**
- CSV listy 404
- CSV zapytań ze spadkiem
- Raport SF (XLSX/CSV)
- Lista 5 wyników PageSpeed (screenshot lub PDF)
- Notatki z manualnego check

**To jest wejście do tygodnia 1.** Bez tych danych każda akcja to strzał w ciemno.

---

## 6. Plan działań (4 tygodnie podstawowe + 4 rozbudowy)

Patrz `README.md` w tej samej folderze — pełna roadmap 8-tygodniowa z konkretnymi zadaniami, KPI i prognozą efektów.

W skrócie:
- **T1:** Diagnostyka + meta homepage + dopracowanie `/strony-internetowe-poznan/`
- **T2:** `/pozycjonowanie-poznan/` (cennik abonamentowy) + outreach do klientów
- **T3-T7:** Klaster 5 artykułów blogowych pod KD 0-2 frazy informacyjne
- **T8:** Strona "wsparcie" z 3 pakietami (recurring revenue 300-1 500 zł/mc)

---

## 7. Ryzyka

### 7.1 Co może pójść nie tak

#### a) Algorytm Google update w trakcie odbudowy
**Ryzyko:** -20% na wszystkie domeny w niszy.  
**Reakcja:** poczekaj 7-14 dni, kontynuuj plan. Update'y Google nie wymagają zmiany strategii — wymagają cierpliwości.

#### b) Konkurent zaczyna agresywny content marketing
**Ryzyko:** wyprzedzą Cię na frazach z planu B.  
**Reakcja:** zwiększ tempo publikacji bloga 1 → 2 / tydzień, jak masz zasoby.

#### c) Pierwsze 4 tygodnie — brak widocznych efektów
**Ryzyko:** demotywacja, porzucenie planu.  
**Reakcja:** **planuj na 12 tygodni minimum.** Pierwsze 4 to czysta praca, efekty pojawiają się od 6-8 tygodnia.

#### d) Lovable nie wygeneruje strony tak jak chcesz
**Reakcja:** iteruj 3-5 razy z bardziej szczegółowymi promptami. Jeśli po 5 iteracjach dalej nie pasuje — uzupełnij ręcznie kluczowe sekcje (cennik, FAQ) w istniejącym pliku React.

### 7.2 Czego NIE robić

- ❌ Nie kupuj backlinków z Fivverr / GIGów. DR 49 możesz spalić w miesiąc, a Twoja jakość ref. domains jest już lepsza niż konkurencja.
- ❌ Nie rób mass-redirects 301 wszystkich starych URL-i na homepage. Google to traktuje jako manipulację — przekierowuj na **ekwiwalentny URL** lub na 410 Gone (jeśli treść została usunięta).
- ❌ Nie kopiuj contentu z konkurencji. Detekcja duplikatów = pewny spadek o kolejne 50%.
- ❌ Nie ignoruj mobile UX. 70% ruchu lokalnego "agencja [miasto]" to mobile.
- ❌ Nie publikuj artykułu < 1 000 słów. Krótszy treści nie rankują na frazy informacyjne.

### 7.3 Awaryjne kontakty

Jeśli na 6 tygodniu plan nie daje 0 ruchu (zerowy postęp) — to znak że jest twardy problem techniczny, nie content. Opcje:
- Zatrudnij konsultanta SEO na 1 audyt (1 500-3 000 zł, 3-5 dni)
- Sprawdź core web vitals dokładniej (LCP < 2.5s, INP < 200ms)
- Sprawdź czy sitewide nie ma problemu z hreflang / canonicals (częste po migracji)

---

## Załączniki

- `README.md` — roadmap 8-tygodniowa
- `A_PROMPT_LOVABLE_strony-internetowe-poznan.md` — gotowy prompt
- `B_CONTENT_GAP_60_keywordow.md` — 60 kw. konkurencji + plan publikacji
- `C_META_TITLES_DESCRIPTIONS.md` — meta dla 25+ podstron

---

**Data sporządzenia:** 22 kwietnia 2026  
**Wersja:** 1.0  
**Następny przegląd:** za 30 dni (zaktualizować KPI)
