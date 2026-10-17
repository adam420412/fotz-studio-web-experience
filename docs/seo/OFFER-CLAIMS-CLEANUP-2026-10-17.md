# Porządkowanie twierdzeń bez pokrycia na ofertach — 17.10.2026

## Zakres

Skan detektorem `scripts/offer-claims.mjs` objął 614 plików stron z trasami: 461 miało co najmniej jedno zdanie z twierdzeniem bez pokrycia (4 614 trafień), w tym 168 ofert (1 232 trafienia). Poprawiono **120 ofert** w dwóch rundach oraz wspólne komponenty sekcji miejskich. Poradników bloga nie ruszano (statystyki rynkowe w poradnikach to osobna decyzja).

Pozostało 52 ofert miejskich z małym ruchem, które są na liście do przekierowania (`city-pages-low-traffic-2026-10-17.csv`) — porządkujemy je dopiero po decyzji, czy zostają.

## Co usuwano lub przepisywano

- stałe ceny, pakiety z kwotami i „od X zł” → opis, od czego zależy wycena; budżet reklamowy zawsze osobno;
- procenty wyników i statystyki rynkowe bez źródła, liczniki (`useCountUp`, `AnimatedCounter`);
- liczby klientów, projektów, lat doświadczenia, oceny i gwiazdki, opinie bez weryfikacji, „certyfikowani”, „Google Partners”;
- obietnice TOP/pierwszej strony, gwarancje wyników, sztywne terminy efektów, „24 h”, „24/7”;
- biura, siedziby i „lokalny zespół” w innych miastach → „pracujemy z Poznania, firmy z <miasto> obsługujemy zdalnie”;
- błędy faktów (np. Gorzów „miasto portowe”, liczby mieszkańców, Polpharma w Toruniu, Canal Plus w Bydgoszczy), zmyślony adres biura w Płocku, fałszywy numer telefonu w ofercie Szczecina i placeholder „+48 XXX XXX XXX” w Jeleniej Górze, zmyślony testimonial „Jan Kowalski, Firma XYZ”.

Wspólne komponenty poprawione centralnie: `ContactSection` (24 h), `CityBenefitsSection` („600+ projektów”, „100% zadowolonych”), `CityIntroSection` („8+ lat”), `LocalSEOBoost` (ceny i terminy w FAQ), `ExitIntentPopup`.

## Detektor

- ceny pisane „zl” bez ogonka, zdania „gwarancja wyników/skuteczności/…”, tekst w szablonach z podstawieniami;
- pomija kolory CSS (`hsla(… 71% …)` dawał fałszywe trafienia);
- 120 poprawionych ofert dopisano do testu regresji (`cleaned`), więc twierdzenia nie wrócą.

Ograniczenia: detektor nie łączy kwoty i „zł” w osobnych elementach JSX ani liczb w propsach liczników — te przypadki agenci poprawili ręcznie.

## NEURONwriter (2 nowe analizy + 1 zapasowa)

| Oferta | Fraza | Przed | Po | Słowa |
|---|---|---:|---:|---:|
| /seo | agencja seo | ok. 88 | **100** | ok. 2580 |
| /performance-marketing/meta-ads | meta ads agencja | 68 | **95** | ok. 2230 |

Analiza „pozycjonowanie stron” (`8ccec56857fb6af2`) została utworzona, ale nie użyta — hub /seo celuje w „agencja seo”, żeby nie konkurować z /seo/pozycjonowanie. Można ją wykorzystać dla /seo/pozycjonowanie.

## Do decyzji właściciela (zebrane z raportów)

- g1 (LinkedIn, Tychy, Gdynia, Gastronomia, FB Gdańsk, SM strategia): ~74 twierdzeń. Owner: Apartamenty Chorwacja / Victory Cars / Cute Dumpling mają strony /realizacje — czy to prawdziwe projekty (Wrocław je usunął w fali 2)? Odznaki „Najpopularniejszy” zostały.
- g0 (WWW Lublin, TikTok Gdańsk, medyczny, GAds Białystok/Wrocław, WWW Koszalin): ~66. Owner: gwarancja 30 dni (usunięta). WSPÓLNE: CityBenefitsSection „100% zadowolonych klientów”; ContactSection „Odpowiadamy w ciągu 24h”, „Bezpłatna wycena w 24h”.
- g2 (GAds Warszawa, SEO lokalne Poznań, e-mail, WWW lubelskie, IT, słownik): ~67. Owner: „Darmowy hosting 1 rok”, „Wsparcie 3 miesiące” (lubelskie), „Dedykowany strateg email”. DO NAPRAWY: Lubelskie FAQ — odpowiedzi skopiowane z pytania o koszt. /blog/google-ads-cennik może mieć ceny.
- g9 (FB Katowice, Google vs FB, TikTok biznes, WooCommerce, WWW Sosnowiec, AM Legnica): ~77. Legnica: błędna liczba mieszkańców usunięta, zmyślone kampanie KGHM usunięte. Owner: opis FPS („strona i treści”); „Szkolenie gratis”. WSPÓLNE: CityIntroSection „8+ lat doświadczenia”; CityBenefitsSection „600+ projektów”; ContactSection link do mapy „Plac Wolności 16”.
- g5 (AM Gdańsk/Toruń/Katowice, YouTube Ads, produkcja, restauracje): ~83. Usunięte fałszywe: „Polpharma”, „czwarte co do wielkości miasto”. Do sprawdzenia: e-mail kontakt@fotz.pl na Gdańsku; dzielnica „Schoodnica”; opisy dzielnic Katowic; „Dedykowany account manager”; TripAdvisor; ERP/konfigurator.
- g6 (WWW Gliwice, tworzenie stron, Reels vs TikTok, AM Szczecin, GAds Bydgoszcz, Wizualizacje 3D): ~150. AM Szczecin: fałszywy telefon +48 531 234 567 → +48 790 814 814; „Biuro w Szczecinie” usunięte. Bydgoszcz: błędy faktów (Canal Plus, Konin). Owner: 3D „Regulator ciśnienia… dla klienta B2B”, oprogramowanie 3ds Max/Corona/V-Ray/Blender; formularz w AM Szczecin nie ma obsługi wysyłki. WSPÓLNE: LocalSEOBoost (ceny/terminy) — poprawione centralnie.
- g7 (WWW Radom/Warszawa, GAds Katowice, AM Płock/Białystok, edukacja): ~86. AM Płock: zmyślony adres „ul. Grodzka 10, Płock” usunięty; ceny pisane „zl” (detektor nie łapał). Owner: hello@fotz.pl; „30-dniowy support”; „Przedszkole” realizacja.
DETEKTOR: dodać „zl” bez ł; ignorować kolory CSS hsla/rgba.
- g3 (cennik SEO, WWW Rzeszów, FB Szczecin, Blog, TikTok Ads, copywriting landing): ~103. Zmyślony testimonial „Jan Kowalski, Firma XYZ, ROI 340%” usunięty. Owner: ceny rolek 1 900 / 12 000 zł i social od 2 500 zł w artykułach bloga — czy to potwierdzony cennik; newsletter bez formularza.
- g4 (AM hub, FB Wrocław, beauty, sklepy Poznań, Google Ads, AM Gliwice): ~97. „Google Partners” usunięte. Owner: Fabryka Virali i Verthé (case study); /case-studies/optymalizacja-konwersji-ecommerce; „Stała osoba kontaktowa”.
- g8 (AM Bydgoszcz/Jelenia Góra, WWW Zabrze/Płock/Tarnów, AI marketing): ~70. Placeholder telefonu „+48 XXX XXX XXX” → +48 790 814 814. Owner: „anulowanie umowy w każdym momencie” (Bydgoszcz); kontakt@fotz.pl; lista narzędzi AI.
DETEKTOR: „gwarancja” nie łapane przez gwarant\p{L}* — dodać gwaranc.
## Fala 2 sprzątania
- c2 (Kamionki, prawnik, audyt, off-page, ebooki, nieruchomości): ~43. Owner: wizualizacje 3D/spacery 360°/CRM dla dewelopera; skład zespołu „UX, SEO, frontend” (audyt). Detektor nie łapie liczb w useCountUp — sprawdzić grep useCountUp.
- c0 (PM hub, trener, kampania Google Ads, SEO e-commerce, targetowanie, marki premium): ~62. „Google Certified Partners” usunięte. Owner: Verthé/Sookar/Victory Cars; „umowy miesięczne bez długoterminowego zobowiązania”.
- c5 (pozycjonowanie usługa, stomatolog, projektowanie stron, SM content, agencja kreatywna, e-commerce retail): ~40. Agencja kreatywna: adres Plac Wolności usunięty z hero; realizacje → Enea/FPS/WSB/Gierky/Dawid EDU. Owner: Fabryka Virali/Cute Dumpling/Friendly Gas; studio podcastowe; „30 dni wsparcia”, „2 rundy poprawek”, Planable/Metricool, Allegro/Amazon, zdjęcia 360°.
- c6 (identyfikacja wizualna, marketing automation, WWW Wielkopolska, SM analityka, agencja graficzna, NGO): ~68. NGO: „1% podatku” → neutralnie (dziś 1,5%). Owner: narzędzia Marketo/Pardot/Salesforce/HubSpot/Sprout/Brand24; portfolio 3D viz-17…22; zakres Enea („event + social”); granty i dotacje; „tygodniowe spotkania”, „4–8 tygodni”. Schema LocalBusiness: adres Poznań vs siedziba Kamionki. DETEKTOR: kwota i „zł” w osobnych elementach JSX nie są łączone.
- c7 (tworzenie stron, lead gen, WWW Podkarpacie, TikTok Poznań, kampanie reklamowe, turystyka): ~62. Podkarpacie: JSON-LD adres przestawiony na Poznań. DO NAPRAWY: TworzenieStronInternetowych FAQ hosting/domena — skopiowana odpowiedź o koszcie. Owner: wirtualne spacery 360°, system opinii.
- c3 (WWW Gorzów, SEO Zgorzelec, optymalizacja strony, SEO techniczne, video content, automotive): ~80. Gorzów: fałszywe fakty („miasto portowe”, 250 tys., 80 km od Berlina) usunięte. Owner: „studio w centrum Poznania” (video content); konfigurator 3D, DMS/CRM, wirtualne spacery.
- c8 (sklepy, WordPress, identyfikacja, remarketing, firmy lokalne, FAQ): ~91. FAQ: adres Plac Wolności i godziny biura usunięte; sprzeczność „umowy miesięczne” vs „minimum 3 miesiące” usunięta. Owner: zdjęcia biura (tabliczka HOFA); studio podcastowe w centrum Poznania; Ballinn App, Graf Tapicerstwo, Mechanica, Przedszkole.
- c9 (projekt strony, identyfikacja firmy, dron, PM optymalizacja, e-commerce, AM Koszalin): ~78. Dron: UAVO/OC/badania dopisane (potwierdzone). Owner: transmisje, panoramy 360°, ortofotomapy, inspekcje linii; „Osiedle Skaland”, „Eko Kamionki”; TikTok Ads w ofercie.
NASTĘPNE: strony CaseStudy*/realizacje mogą zawierać liczby wyników — sprawdzić.
- c1 (landing page, fotograf, B2B, on-page, e-mail blog, instytucje): ~85. Fabryka Virali usunięta z instytucji (opis niezgodny z portfolio). Owner: Enea zakres; terminy wykonania.
- c4 (logo i branding, AM Zgorzelec, one page, influencer, sklepy, prawo/finanse): ~87. Owner: galeria viz-17…20; domena + 30 dni wsparcia (one page); marketing PL/DE; Ratio Legal jako realizacja?
CASE STUDIES: CaseStudyEcommerceCRO (106), CaseStudyLocalSEO (52), CaseStudyStronaWWW (24) — liczby wyników bez nazwy klienta; pozostałe case study (2–4 twierdzenia) — do potwierdzenia, czy wyniki są z danych klienta.
- meta-ads 96 (68→96, ~2230). Owner: neutralne FAQ o statusie Meta Business Partner; wspólny raport online; po zakończeniu klient odbiera dostęp; Dawid EDU „poprawiliśmy stronę docelową”.


## Kontrola lokalna

Testy 365/365, `tsc` bez błędów, build 667 stron / 664 pełnych treści SSR bez błędów, sitemap 665 bez problemów, 83 509 linków bez uszkodzeń, galerie bez błędów.
