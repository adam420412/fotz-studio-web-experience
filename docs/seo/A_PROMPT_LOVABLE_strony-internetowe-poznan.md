# PLIK A — Prompt Lovable: `/strony-internetowe-poznan/`

**Cel:** wygenerować lub uzupełnić podstronę `/strony-internetowe-poznan/` o pełny zakres sekcji SEO + UX, aby walczyć w top 3 dla frazy "strony internetowe poznań" (volume ~720/mc, KD 8) i fraz pokrewnych.

**Jak używać:**
1. Otwórz Lovable (lub odpowiednik AI builder do React/Tailwind).
2. Wklej cały tekst poniżej w polu prompta.
3. Iteruj 2-3 razy: po pierwszej generacji popraw szczegóły (cennik, FAQ, case studies).
4. Po wdrożeniu sprawdź PageSpeed Insights — mobile > 85, desktop > 95.

---

## ZACZNIJ KOPIOWANIE TUTAJ ↓

Hej, jestem właścicielem fotz.pl — agencji marketingowej i web developerskiej z Poznania. Buduję dedykowaną podstronę usługową `/strony-internetowe-poznan/` dla mojego React + Vite + Tailwind + shadcn/ui projektu (komponenty już istnieją w `src/components`).

**Cel strony:** rankować w top 3 Google dla frazy "strony internetowe poznań" i pokrewnych (tworzenie stron poznań, projektowanie stron poznań, agencja web design poznań, wykonanie strony www poznań).

**Stack:** React 18, TypeScript, Tailwind, shadcn/ui, react-router-dom, framer-motion. Komponent SEO `<SEOHead>` jest dostępny w `@/components/seo/SEOHead`. Schema komponenty: `LocalBusinessSchema`, `OrganizationSchema`, `ServiceSchema`, `FAQPageSchema` w `@/components/seo/StructuredData`.

**Ważne ograniczenia:**
- Wszystkie teksty w języku polskim
- Kolory i typografia muszą używać design tokens z `tailwind.config.ts` (kolory `dv-*`, akcent `dv-accent-pink`)
- Animacje przez `framer-motion` (komponenty wrapping w `<FadeInView>` z `@/components/FadeInView`)
- Cennik widoczny od razu — nie ukrywaj za "Skontaktuj się"
- Mobile-first, hero LCP < 2.5s, brak heavy assets w viewport początkowym

### Wymagana struktura strony (sekcje w tej kolejności)

#### 1. Hero (above the fold)
- H1: "Strony internetowe Poznań — projektowanie i tworzenie stron WWW"
- Subtitle: "Lokalna agencja web developerska z Poznania. Tworzymy nowoczesne, szybkie i konwertujące strony internetowe dla firm z Wielkopolski."
- 2 CTA: primary "Zamów stronę" (kotwica do sekcji kontakt) + secondary "Zobacz realizacje" (kotwica do sekcji portfolio)
- Wizualnie: tło z animowanym video lub statyczny gradient (poza viewport początkowym = nie ładuj video). Tekst po lewej, mockup laptopa po prawej (na mobile: tekst na górze, mockup poniżej).
- Trust indicators pod CTA: "100+ stron", "8 lat na rynku", "Klienci: Enea Stadion, FPS Cegielski, Destini, KMINSTAL"

#### 2. Pasek logo klientów (marquee)
Animowany marquee z logotypami: Enea Stadion, FPS Cegielski, Destini, Krypton, KMINSTAL, Ogrody Aleksandry, Dawid, BabyLove. Logo klikalne → otwiera realizację w portfolio.

#### 3. Sekcja "Dlaczego strona internetowa od fotz?"
Grid 3×2 = 6 powodów, każdy z ikoną (Lucide), tytułem i 2-3 zdaniami opisu:
1. **Lokalna agencja z Poznania** — "Spotykamy się osobiście. Znamy specyfikę poznańskiego rynku. Mówimy językiem Twojej branży."
2. **Nowoczesne technologie** — "React, Next.js, WordPress, Webflow, Shopify. Dobieramy stack do projektu, a nie odwrotnie."
3. **SEO w standardzie** — "Każda strona zoptymalizowana pod Google od pierwszego dnia. Schema markup, Core Web Vitals, mobile-first."
4. **Mobile-first design** — "70% ruchu to mobile. Twoja strona będzie szybka i czytelna na każdym urządzeniu."
5. **Wsparcie po wdrożeniu** — "Nie zostawiamy Cię po uruchomieniu. Pakiety wsparcia od 300 zł/mc — aktualizacje, kopie, monitoring, SLA."
6. **Konwersja, nie tylko design** — "Ładna strona to za mało. Projektujemy z myślą o wynikach: leady, sprzedaż, zaangażowanie."

#### 4. Sekcja "Nasze usługi web developerskie"
3 karty (cards) na desktop / vertical stack na mobile:

**Karta 1 — Strona firmowa**
- Ikona: Globe lub Building
- Opis: "Profesjonalna strona prezentująca Twoją firmę. 5-15 podstron, formularz kontaktowy, mapa Google, integracja z CRM."
- Bullet points: "Responsywny design", "Optymalizacja SEO on-page", "Schema markup", "GA4 + GTM", "SSL + bezpieczeństwo"
- Cena od: "od 4 999 zł"
- CTA: "Zamów stronę firmową"

**Karta 2 — Sklep e-commerce**
- Ikona: ShoppingCart
- Opis: "Sklep internetowy WordPress + WooCommerce, Shopify lub dedykowane rozwiązanie. Płatności, integracje, marketing automation."
- Bullet points: "Płatności (Stripe, Przelewy24, BLIK)", "Integracja z magazynem", "Newsletter + remarketing", "Multilanguage", "Optymalizacja konwersji"
- Cena od: "od 12 999 zł"
- CTA: "Zamów sklep"

**Karta 3 — Aplikacja webowa / dedykowana**
- Ikona: Code2
- Opis: "Web-app, panel klienta, system rezerwacji, intranet. Stack: React/Next.js + Node.js + Postgres/Supabase. Dla firm które potrzebują czegoś więcej niż strona."
- Bullet points: "Architektura SaaS-ready", "Auth + role", "API REST/GraphQL", "Hosting Vercel/AWS", "Stała opieka deweloperska"
- Cena od: "od 24 999 zł"
- CTA: "Skonsultuj projekt"

#### 5. Sekcja "Proces tworzenia strony — 5 kroków"
Stepper / timeline z 5 etapami:

1. **Brief i analiza** (1-3 dni) — "Spotkanie wstępne, analiza konkurencji, ustalenie celów biznesowych. Zostaniesz z dokumentem strategii."
2. **UX/UI design** (5-10 dni) — "Wireframe → mockupy hi-fi w Figma → akceptacja. Pełna kontrola wyglądu zanim zaczniemy kodować."
3. **Development** (10-30 dni) — "Programujemy frontend i backend. Co tydzień podgląd na środowisku staging. Możesz testować w trakcie."
4. **Testy i optymalizacja** (3-7 dni) — "Testy na różnych przeglądarkach i urządzeniach, optymalizacja PageSpeed, testy SEO, security check."
5. **Wdrożenie i wsparcie** (1-3 dni + 30 dni gwarancji) — "Migracja na produkcję, konfiguracja domeny i SSL, szkolenie dla Twojego zespołu, 30 dni gwarancji bezpłatnych poprawek."

#### 6. Sekcja "Cennik stron internetowych w Poznaniu"
3 pakiety cenowe (PricingCard) — najważniejsze: cena widoczna od razu, bez chowania.

**LANDING PAGE — 4 999 zł**
- 1 podstrona, do 5 000 słów
- Design indywidualny w Figma
- Optymalizacja SEO + schema
- Formularz kontaktowy + GA4
- Hosting + SSL na 12 mc
- 30 dni gwarancji
- Termin: 7-14 dni
- *CTA: "Zamów landing page"*

**STRONA FIRMOWA — 9 999 zł** (badge: "Najpopularniejszy")
- 5-15 podstron
- Custom design w Figma
- WordPress lub Webflow
- Pełne SEO on-page + schema markup
- Blog (CMS)
- Formularze + integracja z CRM
- Multilanguage (opcja +1 999 zł)
- 30 dni gwarancji + 3 mc wsparcia (gratis)
- Termin: 30-45 dni
- *CTA: "Zamów stronę firmową"*

**SKLEP / WEB-APP — od 19 999 zł**
- Sklep e-commerce lub dedykowana aplikacja
- Custom design + UX research
- WooCommerce, Shopify lub stack dedykowany
- Integracje (płatności, magazyn, CRM, ERP)
- Pełne SEO + Schema Product/Service
- Marketing automation
- 60 dni gwarancji + 6 mc wsparcia (gratis)
- Termin: 60-90 dni
- *CTA: "Skonsultuj sklep / aplikację"*

Pod cennikiem text dyskretny: "Wszystkie ceny netto. Możliwość rozłożenia płatności na 3-6 transz. Faktury VAT."

#### 7. Sekcja "Realizacje — strony stworzone w Poznaniu"
Grid 4 case studies (2x2 desktop, 1 column mobile). Każdy:
- Hero image (screenshot strony)
- Nazwa klienta
- Branża
- Co zrobiliśmy (1 zdanie)
- KPI / efekt (1 metryka): np. "+340% leadów / 6 mc"
- CTA: "Zobacz realizację" → link do `/realizacje/<slug>/`

Realizacje do pokazania:
1. **Enea Stadion** — strona dla obiektu sportowego klasy światowej (eneastadion.pl)
2. **FPS Cegielski** — strona korpo dla 100+ letniej fabryki
3. **Destini** — sklep z pluginem AI tłumaczeń (autorska technologia)
4. **KMINSTAL** — strona produkcyjnej firmy instalacyjnej, +280% formularzy / 4 mc

Pod gridem CTA: "Zobacz wszystkie realizacje" → `/realizacje/`

#### 8. Sekcja "Technologie z których korzystamy"
Grid logotypów 4×2 (mobile: 2×4): React, Next.js, WordPress, Webflow, Shopify, Tailwind CSS, Figma, Vercel.
Pod gridem 1 zdanie: "Dobieramy technologię do projektu — nie wciskamy WordPressa tam, gdzie potrzebny jest Next.js, ani vice versa."

#### 9. Sekcja FAQ — kluczowe dla SEO!
Akkordeon z 10 pytaniami. Komponent `<Accordion>` z shadcn/ui. **Schema FAQPage musi być dołączona** (`<FAQPageSchema questions={...} />`).

Pytania i odpowiedzi (każda odpowiedź 80-150 słów):

1. **Ile kosztuje strona internetowa w Poznaniu?**
   "Cena zależy od zakresu: prosty landing page od 4 999 zł, strona firmowa 9 999-19 999 zł, sklep e-commerce od 19 999 zł, aplikacja webowa od 24 999 zł. Każdą wycenę przygotowujemy indywidualnie po briefie. W cenie zawsze: design, programowanie, optymalizacja SEO, hosting i SSL na 12 mc, 30 dni gwarancji."

2. **Ile trwa stworzenie strony internetowej?**
   "Landing page: 7-14 dni. Strona firmowa: 30-45 dni. Sklep e-commerce: 60-90 dni. Aplikacja webowa: 90-180 dni. Termin zależy od liczby iteracji designu, treści dostarczanych przez klienta i zakresu integracji. Pierwszy podgląd na staging masz po ok. 50% czasu."

3. **Czy tworzycie strony tylko dla firm z Poznania?**
   "Bazujemy w Poznaniu i znamy lokalny rynek najlepiej, ale obsługujemy klientów z całej Polski. Spotkania zdalne (Google Meet, Zoom) są standardem. Dla klientów z Wielkopolski preferujemy spotkania osobiste — biuro mamy w centrum Poznania."

4. **Czy strona będzie zoptymalizowana pod SEO?**
   "Tak, w standardzie. Każda strona ma: poprawne meta tagi, schema markup (Service, FAQPage, LocalBusiness, BreadcrumbList), optymalizację Core Web Vitals (LCP < 2.5s), mobile-first, alt-tagi obrazków, sitemap.xml, robots.txt, integrację Google Analytics 4 i Search Console. Po wdrożeniu możesz dodać pakiet pozycjonowania od 2 000 zł/mc."

5. **W jakiej technologii zbudujecie moją stronę?**
   "To zależy od potrzeb. Dla większości firm WordPress (łatwa edycja przez klienta) lub Webflow (premium design + brak licencji). Dla aplikacji i wymagających projektów React/Next.js + Node.js. Dla sklepów: WooCommerce, Shopify lub dedykowane na Next.js. Wybór konsultujemy w briefie — dobieramy stack do projektu, nie odwrotnie."

6. **Czy mogę samodzielnie edytować treści po wdrożeniu?**
   "Tak. Dla stron WordPress dostarczamy pełen panel CMS i 2-godzinne szkolenie online. Dla Webflow — dostęp do CMS i edytora wizualnego. Dla rozwiązań dedykowanych przygotowujemy dedykowany panel admin lub headless CMS (Sanity, Contentful, Strapi) zależnie od projektu."

7. **Czy oferujecie wsparcie i aktualizacje po wdrożeniu strony?**
   "Tak. Mamy 3 pakiety wsparcia: BASIC (300 zł/mc — aktualizacje + kopie + monitoring), STANDARD (600 zł/mc — BASIC + 2h dev + SEO basic), PREMIUM (1 200 zł/mc — STANDARD + 6h dev + SEO advanced + SLA 24h). Pierwszy miesiąc wsparcia w cenie strony firmowej (gratis)."

8. **Co jeśli nie podoba mi się design?**
   "Pracujemy w iteracjach. W etapie UX/UI design pokazujemy wireframe → mockupy w Figma. Robimy 2 rundy poprawek bezpłatnie, kolejne za 200 zł/h. Nie zaczynamy programować dopóki nie zaakceptujesz mockupów. Jeśli po 2 rundach poprawek dalej nie pasuje — zwracamy 50% zaliczki."

9. **Czy strona będzie działać na telefonie i tablecie?**
   "Tak — wszystkie nasze strony są mobile-first. Testujemy na iPhone (Safari), Android (Chrome), iPad i tablecie Android. Sprawdzamy też różne rozdzielczości i orientacje (portrait/landscape). 70% ruchu na większości stron to mobile, więc traktujemy to jako priorytet, nie dodatek."

10. **Czy mogę zobaczyć wcześniejsze realizacje?**
    "Oczywiście. W zakładce 'Realizacje' znajdziesz portfolio z 100+ projektami. Najmocniejsze: Enea Stadion (eneastadion.pl), FPS Cegielski, Destini (z pluginem AI tłumaczeń), KMINSTAL, Krypton (e-commerce kosmetyki). Każda realizacja ma case study z opisem celów, procesu i efektów."

#### 10. Sekcja CTA "Zamów stronę internetową w Poznaniu"
Sekcja na pełny ekran z formularzem kontaktowym po prawej i tekstem po lewej.

**Lewa strona — tekst:**
- H2: "Porozmawiajmy o Twojej stronie"
- Paragraph: "Wypełnij formularz lub zadzwoń — odpowiemy w 24h roboczych. Pierwsze spotkanie i wycena bez zobowiązań."
- Lista: "📍 Biuro: ul. [adres] Poznań" / "📞 +48 [telefon]" / "✉️ [email]" / "🕘 Pn-Pt 9:00-17:00"
- Trust badges: "ISO 27001" (jeśli posiadasz) / "8 lat doświadczenia" / "100+ stron"

**Prawa strona — formularz:**
- Pole "Imię i firma"
- Pole "Email"
- Pole "Telefon" (opcjonalne)
- Select "Co cię interesuje?" → opcje: Landing page / Strona firmowa / Sklep / Aplikacja / Konsultacja
- Select "Budżet" → opcje: 5-10 tys / 10-25 tys / 25-50 tys / 50+ tys / Nie wiem
- Textarea "Krótko o projekcie" (opcjonalne)
- Checkbox RODO (link do polityki prywatności)
- Button "Wyślij zapytanie"
- Pod buttonem dyskretny tekst: "Twoje dane są bezpieczne. Nie przesyłamy ich nikomu."

#### 11. Stopka strony — linkowanie wewnętrzne
Pod sekcją CTA, przed głównym footerem strony, wstawić sekcję:

**"Inne usługi w Poznaniu"** — grid 3×2 z linkami:
- → /pozycjonowanie-poznan/
- → /sklepy-internetowe-poznan/
- → /agencja-marketingowa-poznan/
- → /google-ads-poznan/
- → /social-media-poznan/
- → /branding-poznan/

Każdy link z ikoną i krótkim opisem (max 8-10 słów).

### Wymagania techniczne

#### Meta tagi (komponent SEOHead)
```tsx
<SEOHead
  title="Strony Internetowe Poznań | Tworzenie i Projektowanie Stron WWW"
  description="Strony internetowe Poznań — profesjonalne tworzenie i projektowanie stron www, sklepów e-commerce i aplikacji webowych. Cennik od 4 999 zł. Lokalna agencja web developerska. Sprawdź!"
  keywords="strony internetowe poznań, tworzenie stron poznań, projektowanie stron poznań, agencja web design poznań, sklepy internetowe poznań, web development poznań"
  canonical="https://fotz.pl/strony-internetowe-poznan"
/>
```

#### Schema markup (komponenty StructuredData)
Dołącz na stronie:
1. `<LocalBusinessSchema />` — z homepage'a, ten sam komponent
2. `<ServiceSchema serviceName="Tworzenie stron internetowych" areaServed="Poznań" priceRange="4999-49999 PLN" />`
3. `<FAQPageSchema questions={faqArray} />` — gdzie faqArray to 10 pytań z sekcji FAQ
4. `<BreadcrumbListSchema items={[{name: "Strona główna", url: "/"}, {name: "Usługi", url: "/uslugi/"}, {name: "Strony internetowe Poznań", url: "/strony-internetowe-poznan/"}]} />`

#### Performance / PageSpeed
- Hero image: WebP, max 200kb, `<img loading="eager" fetchPriority="high" />`
- Pozostałe obrazy: WebP, lazy loading (`loading="lazy"`)
- Animacje: `framer-motion` z `viewport={{ once: true, amount: 0.3 }}` dla `whileInView`
- Sekcje below the fold w `<Suspense>` z `lazy()` (analogicznie do Index.tsx)
- Brak heavy fonts — używaj systemowych (`font-sans` z Tailwind)
- Cel Lighthouse: mobile > 85, desktop > 95, accessibility > 95

#### Routing
Page komponent: `src/pages/StronyInternetowePoznan.tsx` (już istnieje — uzupełnij brakujące sekcje)
Route w `src/App.tsx`: `<Route path="/strony-internetowe-poznan" element={<StronyInternetowePoznan />} />`
Sitemap: dodać URL do `public/sitemap.xml` lub dynamicznego generatora w `scripts/`

#### Accessibility
- Kontrast tekstu: min 4.5:1
- Wszystkie obrazy mają `alt` (opisowy, nie keyword stuffing)
- Formularz kontaktowy z `<label>` i `aria-describedby`
- Akkordeon FAQ keyboard-navigable (komponent shadcn/ui ma to out-of-box)
- Wszystkie linki klikalne na touch (min 44x44px)

### Co zwrócić

Zwróć kompletny kod komponentu React (TSX) zawierający wszystkie 11 sekcji powyżej, gotowy do wklejenia w `src/pages/StronyInternetowePoznan.tsx`. Używaj komponentów z `@/components/sections/`, `@/components/ui/`, `@/components/seo/` jeśli są dostępne. Dla komponentów których nie ma — utwórz inline w pliku page.

### Co NIE robić

- ❌ Nie zmieniaj design tokens (kolory, fonty) — używaj tych z `tailwind.config.ts`
- ❌ Nie dodawaj zewnętrznych zależności bez potrzeby (npm packages)
- ❌ Nie używaj komponentów typu `react-icons` jeśli już używamy `lucide-react`
- ❌ Nie hardcoduj tekstów które powinny być w jakimś `i18n` jeśli istnieje
- ❌ Nie generuj Lorem ipsum — używaj tekstów które dałem powyżej

## KOPIOWANIE TUTAJ KOŃCZ ↑

---

## Po wygenerowaniu — checklist

- [ ] Nowa strona zawiera wszystkie 11 sekcji z briefu
- [ ] Meta tagi i schema markup są obecne i poprawne (test w https://validator.schema.org/)
- [ ] Cennik widoczny od razu, 3 pakiety, ceny widoczne w PLN
- [ ] FAQ ma min. 10 pytań, każda odpowiedź > 80 słów, schema FAQPage poprawna
- [ ] Realizacje (4 case studies) są wyświetlane z linkami do `/realizacje/<slug>/`
- [ ] Linkowanie wewnętrzne na końcu strony (sekcja "Inne usługi w Poznaniu") działa
- [ ] PageSpeed mobile > 85, desktop > 95 (testować po wdrożeniu)
- [ ] Po wdrożeniu: Search Console → "Sprawdź URL" → "Poproś o zindeksowanie"

## Po 7 dniach od wdrożenia

- [ ] Sprawdź w Search Console: czy URL jest zaindeksowany
- [ ] Wpisz w Google incognito: "strony internetowe poznań" — gdzie jest pozycja?
- [ ] Sprawdź Ahrefs lub Senuto: nowe rankings na frazy z briefu
- [ ] Zmierz CTR z Search Console — jeśli > 2% to dobre meta tagi
- [ ] Iteruj meta jeśli CTR < 1% (zmień title/description, ponowny request indeksacji)
