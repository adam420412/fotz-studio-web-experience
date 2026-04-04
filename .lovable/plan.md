

## Pelna restrukturyzacja architektury informacji Fotz Studio

### Zakres zmian

Na podstawie raportu i mapy przekierowan (64 pozycje) trzeba zmodyfikowac nastepujace elementy:

### Faza 1: Routing i przekierowania (App.tsx + vercel.json + _redirects)

**App.tsx** - zmiana sciezek tras:
- 30 stron miast: `/strony-internetowe-{city}` → `/uslugi/strony-internetowe/{city}`
- `/strony-internetowe` → `/uslugi/strony-internetowe`
- `/ecommerce-tworzenie-sklepu` → `/uslugi/strony-internetowe/ecommerce`
- `/identyfikacja-wizualna` → `/uslugi/branding`
- `/spoty-reklamowe` → `/uslugi/produkcja-video`
- `/fotograf-poznan` → `/uslugi/fotografia`
- `/fotografia-z-drona` → `/uslugi/fotografia-z-drona`
- `/studio-podcastowe` → `/uslugi/studio-podcastowe`
- `/produkcja-filmow-poznan` → `/uslugi/produkcja-filmow`
- `/audyt-seo` → `/seo/audyt`
- `/pozycjonowanie` → `/seo/pozycjonowanie`
- `/pozycjonowanie-stron-poznan` → `/seo/pozycjonowanie-poznan`
- `/pozycjonowanie-google-maps` → `/seo/google-maps`
- `/social-media` → `/social-media/obsluga`
- `/social-media-poznan` → `/social-media/poznan`
- `/google-ads` → `/performance-marketing/google-ads`
- `/facebook-ads` → `/performance-marketing/facebook-ads`
- `/instagram-ads` → `/performance-marketing/instagram-ads`
- `/facebook-instagram-ads` → `/performance-marketing/meta-ads`
- `/linkedin-ads` → `/performance-marketing/linkedin-ads`
- `/tiktok-ads` → `/performance-marketing/tiktok-ads`
- `/youtube-ads` → `/performance-marketing/youtube-ads`
- `/content-marketing` → `/content-marketing/strategia`
- 10 postow bloga przenoszonych do klastrow tematycznych (np. `/blog/seo-ecommerce` → `/seo/ecommerce`)

**Dodanie Redirect301 routes** dla kazdej starej sciezki wskazujacej na nowa.

**vercel.json** - dodanie 64 nowych przekierowan 301.

**public/_redirects** - analogiczne przekierowania dla Netlify/Lovable.

### Faza 2: Nawigacja (MegaMenu + Footer)

- **MegaMenu.tsx** - aktualizacja wszystkich `href` w menuCategories
- **Footer.tsx** - aktualizacja wszystkich `href` w footerLinks (uslugi, kampanie, miasta, narzedzia)

### Faza 3: Kanoniczne URL-e i SEO w komponentach stron

Kazda z ~60 przeniesionych stron ma komponent `SEOHead` z `canonical` prop. Trzeba zaktualizowac:
- `canonical` URL na nowy adres
- Breadcrumbs (jesli uzywane)
- Linki wewnetrzne w tresci stron

Dotyczy plikow: wszystkie StronyInternetowe*.tsx, FacebookAds.tsx, GoogleAds.tsx, InstagramAds.tsx, LinkedInAds.tsx, TikTokAds.tsx, YouTubeAds.tsx, FacebookInstagramAds.tsx, Pozycjonowanie*.tsx, SocialMedia*.tsx, SpotyReklamowe.tsx, FotografPoznan.tsx, IdentyfikacjaWizualna.tsx, ContentMarketing.tsx, AudytSEO.tsx, EcommerceTworzenie.tsx, StudioPodcastowe.tsx, FotografiaZDrona.tsx, ProdukcjaFilmowPoznan.tsx, oraz 10 artykulow blogowych.

### Faza 4: Sitemaps XML

Aktualizacja 6 plikow sitemap w `public/`:
- `sitemap-services.xml` - nowe URL-e /uslugi/*, /seo/*, /performance-marketing/*
- `sitemap-cities.xml` - nowe URL-e /uslugi/strony-internetowe/{city}
- `sitemap-blog.xml` - usuniecie przeniesionych postow, dodanie nowych URL-i w odpowiednich sitemapach
- `sitemap-main.xml` - aktualizacja zmienionych URL-i
- `sitemap-industries.xml` - bez zmian
- `sitemap-casestudies.xml` - bez zmian

### Faza 5: Linki wewnetrzne w tresci

Przeszukanie calego codebase (`search_files`) pod katem starych URL-i i ich zamiana na nowe. Dotyczy to glownie:
- Sekcji RelatedServices na stronach
- Linkow w tresci artykulow blogowych
- CTA i linkow w sekcjach FAQ
- Komponentow CaseStudy

### Wazne uwagi techniczne

- **Domena produkcyjna**: canonical URL-e uzywaja `https://fotz.pl`, nie `.lovable.app`
- **vercel.json**: musi uzywac skladni path-to-regexp (`:path*`), nie regex
- **Nie tworzymy nowych stron** (oznaczonych "New" w raporcie jak /seo/on-page/) - tylko przenosimy istniejace
- **Nie edytujemy** plikow auto-generowanych (client.ts, types.ts, .env)
- Implementacja bedzie wymagala wielu iteracji ze wzgledu na liczbe plikow (~100+)

### Kolejnosc implementacji

1. App.tsx (trasy + Redirect301)
2. vercel.json + _redirects (przekierowania serwerowe)
3. MegaMenu.tsx + Footer.tsx (nawigacja)
4. Kanoniczne URL-e w komponentach stron (po ~10-15 plikow na iteracje)
5. Sitemaps XML
6. Linki wewnetrzne (search & replace)

