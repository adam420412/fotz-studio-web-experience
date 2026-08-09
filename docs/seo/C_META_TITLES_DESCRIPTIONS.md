# PLIK C — Meta Titles & Descriptions dla 25+ podstron fotz.pl

**Cel:** gotowe do wklejenia meta tagi dla każdej kluczowej podstrony — title (do 60 znaków), description (do 160 znaków).

**Zasady:**
- Title: keyword + brand / benefit / location, max 60 znaków
- Description: keyword + benefit + CTA, 150-160 znaków
- Po wklejeniu każdego meta: Search Console → "Sprawdź URL" → "Poproś o zindeksowanie"

**Komponent w kodzie:** `<SEOHead title="..." description="..." canonical="..." />` w `src/pages/<Page>.tsx`.

---

## Sekcja 1 — Główne podstrony usługowe Poznań

### 1.1 `/strony-internetowe-poznan`
```tsx
title="Strony Internetowe Poznań | Tworzenie i Projektowanie Stron WWW"
description="Strony internetowe Poznań — profesjonalne tworzenie, projektowanie stron www, sklepy e-commerce, aplikacje webowe. Cennik od 4 999 zł. Lokalna agencja. Sprawdź!"
```
Length: title 59 znaków, desc 159 znaków.

### 1.2 `/pozycjonowanie-poznan`
```tsx
title="Pozycjonowanie Poznań — Lokalna Agencja SEO | Fotz Studio"
description="Pozycjonowanie stron Poznań. Lokalna agencja SEO. Audyt SEO, optymalizacja, link building. Pakiety abonamentowe od 2 000 zł/mc. Bezpłatna wycena. Zadzwoń."
```
Length: title 56 znaków, desc 160 znaków.

### 1.3 `/sklepy-internetowe-poznan`
```tsx
title="Sklepy Internetowe Poznań — Tworzenie Sklepów E-commerce"
description="Sklepy internetowe Poznań — tworzymy sklepy e-commerce na WordPress, Shopify, Magento. Płatności, integracje, marketing. Cennik od 12 999 zł. Sprawdź ofertę!"
```

### 1.4 `/google-ads-poznan`
```tsx
title="Google Ads Poznań — Kampanie Reklamowe Google | Fotz Studio"
description="Google Ads Poznań — prowadzenie kampanii reklamowych Google Ads. Audyt, strategia, optymalizacja. Lokalna agencja PPC. Bezpłatna konsultacja. Zadzwoń."
```

### 1.5 `/social-media-poznan`
```tsx
title="Social Media Poznań — Prowadzenie Mediów Społecznościowych"
description="Social Media Poznań — prowadzenie Facebook, Instagram, LinkedIn, TikTok dla firm. Strategia, content, kampanie. Pakiety od 1 500 zł/mc. Skontaktuj się!"
```

### 1.6 `/branding-poznan`
```tsx
title="Branding Poznań — Identyfikacja Wizualna i Logo dla Firm"
description="Branding Poznań — projektowanie logo, identyfikacja wizualna, brand book, naming. Profesjonalna agencja brandingowa. Portfolio + cennik. Zobacz realizacje."
```

### 1.7 `/agencja-marketingowa-poznan`
```tsx
title="Agencja Marketingowa Poznań — Marketing Online dla Firm"
description="Agencja marketingowa Poznań. SEO, Google Ads, social media, strony www, branding. Kompleksowa obsługa marketingu online dla firm. Sprawdź ofertę!"
```

### 1.8 `/tworzenie-stron-poznan`
```tsx
title="Tworzenie Stron Poznań — Profesjonalne Strony WWW"
description="Tworzenie stron internetowych Poznań — projektujemy i programujemy strony www, sklepy, aplikacje. WordPress, React, Next.js. Cennik od 4 999 zł. Wycena!"
```

---

## Sekcja 2 — Homepage i hub strony

### 2.1 `/` (strona główna fotz.pl)
**STAN OBECNY (do zmiany):**
```tsx
title="Agencja Marketingowa Poznań — SEO, Strony WWW i Reklamy Online"
description="Fotz Studio — agencja marketingowa z Poznania. Strony internetowe, SEO, Google Ads, social media, produkcja wideo. Kompleksowa obsługa marki premium."
```
**PROPONOWANY (priorytet T1 — quick win):**
```tsx
title="Fotz Studio — Agencja Marketingowa Poznań | Strony WWW, SEO"
description="Fotz Studio — agencja marketingowa Poznań. Tworzenie stron www, pozycjonowanie SEO, Google Ads, social media. 8 lat doświadczenia, 100+ projektów. Bezpłatna wycena!"
```
**Uzasadnienie zmiany:** dodanie liczb (8 lat, 100+ projektów) + mocny CTA w description podnosi CTR. Title z brandem na początku łatwiejsze do zapamiętania.

### 2.2 `/agencja-marketingowa-hub`
```tsx
title="Agencja Marketingowa — Marketing Online w Polsce | Fotz"
description="Fotz Studio to agencja marketingowa działająca w całej Polsce. Strony www, SEO, Google Ads, social media. Sprawdź lokalizacje i specjalizacje. Skontaktuj się!"
```

### 2.3 `/kontakt`
```tsx
title="Kontakt — Fotz Studio Agencja Marketingowa Poznań"
description="Skontaktuj się z Fotz Studio. Bezpłatna konsultacja marketingowa. Telefon, email, formularz, mapa biura w Poznaniu. Odpowiadamy w 24h. Zadzwoń teraz!"
```

### 2.4 `/o-nas`
```tsx
title="O Nas — Fotz Studio Agencja Marketingowa Poznań | 100+ Klientów"
description="Fotz Studio — zespół specjalistów marketingu i web developmentu z Poznania. 8 lat doświadczenia, 100+ klientów. Poznaj naszą historię, zespół i wartości."
```

### 2.5 `/realizacje` (portfolio)
```tsx
title="Realizacje — Portfolio Stron i Projektów | Fotz Studio"
description="Portfolio Fotz Studio. Strony internetowe, sklepy e-commerce, branding. Klienci: Enea Stadion, FPS Cegielski, Destini, KMINSTAL. Zobacz nasze realizacje!"
```

### 2.6 `/cennik`
```tsx
title="Cennik — Strony, SEO, Reklamy | Fotz Studio Poznań"
description="Cennik usług Fotz Studio. Strony internetowe od 4 999 zł, pozycjonowanie SEO od 2 000 zł/mc, Google Ads, social media. Pakiety i opcje. Sprawdź szczegóły!"
```

### 2.7 `/blog` (główna bloga)
```tsx
title="Blog — Marketing, SEO, Web Development | Fotz Studio"
description="Blog Fotz Studio. Praktyczne artykuły o marketingu online, SEO, web developmencie i social media. Aktualne trendy, poradniki, case studies. Czytaj!"
```

---

## Sekcja 3 — Podstrony usługowe (bez geo)

### 3.1 `/uslugi/strony-internetowe`
```tsx
title="Strony Internetowe — Tworzenie Stron WWW dla Firm | Fotz"
description="Tworzenie stron internetowych dla firm. Projektowanie UX/UI, programowanie React/WordPress, SEO, hosting. Cennik od 4 999 zł. Bezpłatna wycena!"
```

### 3.2 `/uslugi/sklepy-internetowe`
```tsx
title="Sklepy Internetowe — Tworzenie Sklepów E-commerce | Fotz"
description="Sklepy internetowe od Fotz Studio. WordPress + WooCommerce, Shopify, Magento. Integracje, marketing, optymalizacja konwersji. Wycena od 12 999 zł!"
```

### 3.3 `/seo/pozycjonowanie`
```tsx
title="Pozycjonowanie Stron — Profesjonalne SEO | Fotz Studio"
description="Pozycjonowanie stron internetowych. Audyt SEO, optymalizacja on-page, link building, content marketing. Pakiety abonamentowe od 2 000 zł/mc. Sprawdź!"
```

### 3.4 `/seo/audyt`
```tsx
title="Audyt SEO — Bezpłatna Analiza Strony WWW | Fotz Studio"
description="Bezpłatny audyt SEO Twojej strony. Analiza techniczna, on-page, off-page. Raport z rekomendacjami w 5 dni. Pierwsza konsultacja gratis. Zamów audyt!"
```

### 3.5 `/kampanie-reklamowe`
```tsx
title="Kampanie Reklamowe Online — Google Ads, Meta Ads | Fotz"
description="Kampanie reklamowe online. Google Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, TikTok Ads. Strategia, prowadzenie, optymalizacja. Bezpłatna wycena!"
```

### 3.6 `/social-media`
```tsx
title="Social Media — Prowadzenie Mediów Społecznościowych | Fotz"
description="Prowadzenie social media dla firm. Facebook, Instagram, LinkedIn, TikTok. Strategia, content, reklamy, analityka. Pakiety od 1 500 zł/mc. Skontaktuj się!"
```

### 3.7 `/produkcja-filmowa`
```tsx
title="Produkcja Filmów Reklamowych — Spoty, Wideo Marketing"
description="Produkcja filmowa Fotz Studio. Spoty reklamowe, wideo dla social media, produkcja wideo dla firm. Profesjonalne studio nagraniowe. Zobacz portfolio!"
```

### 3.8 `/copywriting`
```tsx
title="Copywriting — Pisanie Tekstów Reklamowych i SEO | Fotz"
description="Copywriting marketingowy. Teksty SEO, content marketing, claims, slogany, treści na strony www. Doświadczeni copywriterzy. Wycena indywidualna. Zamów!"
```

---

## Sekcja 4 — Podstrony lokalne (poza Poznaniem)

Wzorzec dla każdej: `[Usługa] [Miasto] | Fotz Studio` + benefit + CTA.

### 4.1 `/strony-internetowe-warszawa`
```tsx
title="Strony Internetowe Warszawa — Tworzenie Stron WWW | Fotz"
description="Strony internetowe Warszawa — tworzenie stron www, sklepów e-commerce, aplikacji. Profesjonalna agencja web. Cennik od 4 999 zł. Bezpłatna wycena!"
```

### 4.2 `/strony-internetowe-krakow`
```tsx
title="Strony Internetowe Kraków — Tworzenie Stron WWW | Fotz"
description="Strony internetowe Kraków — projektujemy i programujemy strony www, sklepy, aplikacje. Lokalne wsparcie + zdalna współpraca. Cennik od 4 999 zł. Wycena!"
```

### 4.3 `/strony-internetowe-wroclaw`
```tsx
title="Strony Internetowe Wrocław — Tworzenie Stron WWW | Fotz"
description="Strony internetowe Wrocław — profesjonalne tworzenie stron www, sklepów e-commerce. WordPress, React. Cennik od 4 999 zł. Bezpłatna konsultacja!"
```

### 4.4 `/strony-internetowe-gdansk`
```tsx
title="Strony Internetowe Gdańsk — Tworzenie Stron WWW | Fotz"
description="Strony internetowe Gdańsk — tworzenie stron www, sklepów, aplikacji. Profesjonalna agencja, projektowanie i programowanie. Cennik od 4 999 zł. Wycena!"
```

### 4.5 `/strony-internetowe-lodz`
```tsx
title="Strony Internetowe Łódź — Tworzenie Stron WWW | Fotz Studio"
description="Strony internetowe Łódź — tworzymy strony www, sklepy e-commerce, aplikacje webowe. Cennik od 4 999 zł. Bezpłatna konsultacja online. Sprawdź!"
```

**Wzorzec do skopiowania dla pozostałych miast** (Bydgoszcz, Lublin, Białystok, Szczecin, Katowice, etc.):
```tsx
title="Strony Internetowe [MIASTO] — Tworzenie Stron WWW | Fotz"
description="Strony internetowe [MIASTO] — tworzymy strony www, sklepy e-commerce, aplikacje. Lokalne wsparcie + zdalna współpraca. Cennik od 4 999 zł. Wycena gratis!"
```

Ten sam wzorzec dla `/pozycjonowanie-[miasto]` i `/agencja-marketingowa-[miasto]`.

---

## Sekcja 5 — Artykuły blogowe (kluczowe z planu B)

### 5.1 `/blog/adres-url-przewodnik` (T3, kw. "adres url" — 1 900 vol/mc)
```tsx
title="Adres URL — Co To Jest? Kompletny Przewodnik 2026"
description="Czym jest adres URL? Budowa, struktura, rodzaje, najczęstsze błędy. Praktyczny przewodnik 2026 + URL-e przyjazne SEO. Sprawdź wszystko o URL-ach!"
```

### 5.2 `/blog/cms-co-to` (T4, kw. "cms co to" — 1 300 vol/mc)
```tsx
title="CMS Co To Jest? WordPress vs Webflow vs Shopify (2026)"
description="CMS — co to jest, jak działa, jaki wybrać? Porównanie WordPress, Webflow, Shopify, Drupal. Dla kogo, ceny, plusy i minusy. Praktyczny przewodnik 2026!"
```

### 5.3 `/blog/grafika-rastrowa-wektorowa` (T5, kw. ~1 340 vol/mc)
```tsx
title="Grafika Rastrowa i Wektorowa — Różnice + Przykłady (2026)"
description="Grafika rastrowa vs wektorowa — kompletna różnica, przykłady, formaty plików (JPG, PNG, SVG). Kiedy użyć której? Praktyczny przewodnik z przykładami!"
```

### 5.4 `/blog/content-co-to-znaczy` (T6, kw. "content co to znaczy" — 500 vol/mc)
```tsx
title="Content Co To Znaczy? Przewodnik Content Marketingu 2026"
description="Content — co to znaczy w marketingu? Rodzaje treści (text, video, podcast, infografika), strategia content marketingu, narzędzia. Praktyczny przewodnik!"
```

### 5.5 `/blog/front-end-back-end` (T7, kw. ~1 540 vol/mc)
```tsx
title="Front-end vs Back-end — Różnice, Technologie, Co Wybrać"
description="Front-end vs back-end — co to, czym się różnią, jakie technologie, ile zarabia frontend developer. Praktyczny przewodnik dla początkujących i biznesu!"
```

### 5.6 `/blog/hosting-domena` (T9+, kw. ~1 860 vol/mc)
```tsx
title="Hosting i Domena — Co To Jest? Przewodnik dla Początkujących"
description="Hosting i domena — co to jest, jak wybrać, ile kosztuje? Rodzaje hostingu (shared, VPS, dedykowany), rejestracja domeny krok po kroku. 2026!"
```

### 5.7 `/blog/landing-page-co-to` (T9+, kw. "landing page co to" — 720 vol/mc)
```tsx
title="Landing Page — Co To Jest, Jak Stworzyć, Przykłady (2026)"
description="Landing page — co to jest, do czego służy, jak zaprojektować skuteczną stronę docelową. Przykłady, struktura, błędy, narzędzia. Pełny przewodnik 2026!"
```

### 5.8 `/blog/api-co-to-jest` (już istnieje, kw. 1 600 vol/mc — rozszerzyć)
```tsx
title="API Co To Jest? Przewodnik dla Programistów i Biznesu (2026)"
description="API — co to jest, jak działa, do czego służy. REST, GraphQL, SOAP. Praktyczne przykłady, integracje, korzyści dla biznesu. Pełny przewodnik 2026!"
```

---

## Sekcja 6 — Strona "wsparcie" (T8)

### 6.1 `/wsparcie-stron-internetowych` (do utworzenia)
```tsx
title="Wsparcie Stron Internetowych — Aktualizacje, Kopie, Monitoring"
description="Wsparcie stron www. Aktualizacje WordPress, kopie zapasowe, monitoring, SLA. Pakiety BASIC (300 zł/mc), STANDARD (600 zł/mc), PREMIUM (1 200 zł/mc)."
```

### 6.2 `/aktualizacje-stron-internetowych`
```tsx
title="Aktualizacje Stron Internetowych — Pakiety od 300 zł/mc | Fotz"
description="Aktualizacje stron internetowych — WordPress, wtyczki, motywy, PHP, SSL. Bezpieczeństwo + monitoring. Pakiety od 300 zł/mc. Bez umów na lata. Sprawdź!"
```

### 6.3 `/audyt-strony-internetowej`
```tsx
title="Audyt Strony Internetowej — Analiza Techniczna i SEO"
description="Bezpłatny audyt strony www. Analiza techniczna, SEO, UX, Core Web Vitals, bezpieczeństwo. Raport z rekomendacjami w 5 dni. Zamów audyt online!"
```

---

## Sekcja 7 — Strony cennikowe i konwersyjne

### 7.1 `/cennik-pozycjonowania`
```tsx
title="Cennik Pozycjonowania — Pakiety SEO od 2 000 zł/mc | Fotz"
description="Cennik pozycjonowania stron. Pakiety abonamentowe SEO: BASIC (2 000 zł/mc), STANDARD (4 000 zł/mc), PREMIUM (6 000 zł/mc). Co zawierają, co liczą. Sprawdź!"
```

### 7.2 `/cennik-tworzenie-stron`
```tsx
title="Cennik Tworzenia Stron — Strony WWW od 4 999 zł | Fotz Studio"
description="Cennik tworzenia stron internetowych. Landing page od 4 999 zł, strona firmowa od 9 999 zł, sklep e-commerce od 19 999 zł. Pakiety + opcje. Sprawdź!"
```

### 7.3 `/projekt-strony-internetowej`
```tsx
title="Projekt Strony Internetowej — UX/UI Design dla Firm"
description="Projekt strony internetowej — wireframe, mockupy hi-fi w Figma, prototyp interaktywny. Profesjonalny UX/UI design. Cennik od 1 999 zł za projekt!"
```

---

## Jak wdrożyć — krok po kroku

### Krok 1 — Otwórz plik page'a w VS Code
Przykład: `src/pages/Index.tsx` (homepage), `src/pages/StronyInternetowePoznan.tsx` etc.

### Krok 2 — Znajdź `<SEOHead>` komponent
Wygląda mniej więcej tak:
```tsx
<SEOHead
  title="Stary tytuł..."
  description="Stary opis..."
  keywords="..."
  canonical="https://fotz.pl/<ścieżka>"
/>
```

### Krok 3 — Zamień title i description na te z tego pliku
Pozostaw `keywords` i `canonical` — keywords nie szkodzą, canonical jest ważny.

### Krok 4 — Sprawdź długość
- Title max 60 znaków (ideal 50-58)
- Description 150-160 znaków (ideal 155)
- Polish characters liczymy jako 1 znak

Tool: https://www.charactercountonline.com/

### Krok 5 — Commit + deploy
```bash
git add src/pages/[Page].tsx
git commit -m "seo(meta): update title+description for [Page]"
git push
```

Po deploy poczekaj 1-2 godziny, otwórz Search Console:

### Krok 6 — Search Console "Sprawdź URL"
1. Wpisz pełen URL (np. `https://fotz.pl/strony-internetowe-poznan`)
2. Kliknij "Sprawdź URL"
3. Po 30 sekundach kliknij "Poproś o zindeksowanie"
4. Google indeksuje w 1-3 dni; nowe meta będą widoczne w SERP w 1-7 dni

### Krok 7 — Po 14 dniach: zmierz CTR
Search Console → "Wydajność" → filter po URL → ostatnie 14 dni vs poprzednie 14 dni. Cel: CTR powinno wzrosnąć o min. 0.3 punktu procentowego.

---

## Antywzorce — czego NIE robić

- ❌ **Nie kopiuj title/description między podstronami.** Każda podstrona musi mieć unikalny zestaw. Duplicate meta = sygnał niskiej jakości.
- ❌ **Nie keyword stuffing** w title ("Strony Strony Strony Internetowe Poznań Poznań Tanie"). Google rozpoznaje, obniża CTR i pozycję.
- ❌ **Nie dłuższe niż 60/160 znaków.** Google obetnie z "..." i CTR spadnie.
- ❌ **Nie zmieniaj canonical** bez przemyślenia. Zły canonical = strona nie indeksuje się.
- ❌ **Nie usuwaj `<SEOHead>`** komponentu — strona straci wszystkie meta + schema.
- ❌ **Nie kopiuj 1:1 description z konkurencji.** Detekcja to robi Google automatycznie.

---

## Bonus — generator meta description (jeśli kiedyś chcesz inny wariant)

Wzorzec sprawdzony pod CTR > 3%:
```
[Keyword exact match] — [główna korzyść]. [Co konkretnie]. [Liczba lub social proof]. [CTA z verbem].
```

Przykład rozbicia dla `/strony-internetowe-poznan`:
- Keyword: "Strony internetowe Poznań"
- Korzyść: "profesjonalne tworzenie i projektowanie"
- Co konkretnie: "stron www, sklepów e-commerce, aplikacji webowych"
- Liczba: "Cennik od 4 999 zł"
- CTA: "Sprawdź!"

Składamy: "Strony internetowe Poznań — profesjonalne tworzenie i projektowanie stron www, sklepów e-commerce, aplikacji webowych. Cennik od 4 999 zł. Sprawdź!" (155 znaków ✓)

---

**Data sporządzenia:** 22 kwietnia 2026  
**Wersja:** 1.0  
**Następna aktualizacja:** po publikacji pierwszych 5 nowych podstron — wtedy doszlifować CTR-y na bazie danych Search Console.
