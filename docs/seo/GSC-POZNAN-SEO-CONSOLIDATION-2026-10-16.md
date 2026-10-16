# Konsolidacja SEO Poznań — 16.10.2026

## Dane i decyzja

Inwentarz (GSC 9.07–8.10.2026), dokładne adresy:

| Adres | Wyświetlenia | Kliknięcia |
|---|---:|---:|
| /seo/pozycjonowanie-poznan | 242 | 0 |
| /agencja-seo-poznan | 101 | 0 |
| /uslugi/pozycjonowanie/poznan | 47 | 1 |

Trzy niezależne szablony odpowiadały na tę samą intencję („pozycjonowanie / agencja SEO Poznań”). Docelowy adres: `/seo/pozycjonowanie-poznan` — najwięcej wyświetleń, ta sama architektura co zweryfikowane oferty Katowice i Kraków (`LocalSeoOffer`, PR #64/#65). Świeżego odczytu GSC z dokładnymi zapytaniami nie wykonano; wymaga go kontrola po publikacji.

Wdrożone zmiany:

- Nowa oferta `src/pages/SEOPozycjonowaniePoznan.tsx` na wspólnym komponencie, z hydratacją. Komponent dostał opcjonalny `locationNote`, bo dla Poznania domyślny dopisek o pracy zdalnej był nieprawdziwy.
- Trwałe przekierowania Vercel i `Redirect301`: `/agencja-seo-poznan` i `/uslugi/pozycjonowanie/poznan` → `/seo/pozycjonowanie-poznan`. Adresy źródłowe usunięte z sitemap, lastmod docelowego 2026-10-16.
- Usunięte trzy stare szablony. Odnośniki wewnętrzne (15 plików) prowadzą bezpośrednio do oferty docelowej.

Nie przeniesiono twierdzeń ze starych stron: „+240%” i „+380%” ruchu, „-62% CPA”, „TOP 5”, ocena 4,9/5, ceny „od 900 zł” i „od 1200 zł/mies.”, gwarancja „mierzalnego wzrostu”. Nowa oferta mówi o zespole w Poznaniu i spotkaniach po uzgodnieniu terminu, zgodnie z ofertą agencji marketingowej Poznań; nie podaje adresu. Portfolio (Enea Stadion) pokazano jako realizację FOTZ, nie jako wynik SEO.

## NEURONwriter

Projekt `59db8bbb8ee62780`, nowa analiza `3ddd4fddd51489b2`, fraza „pozycjonowanie poznań”, Polish / google.pl, intencja transakcyjna, typ wyników: landing page. Jedna analiza z planu, bez zakupu. Pierwsza wersja wyrenderowanego `main-content` z title/description: 76. Po uzupełnieniu brakujących tematów (audyt, frazy, lokalne SEO i wizytówka, sklepy, raport, Google Ads, WordPress) i rozwinięciu treści do ok. 2470 słów: **99/100** (ocena API `evaluate-content` na zbudowanym HTML). Treść zapisano w edytorze (`import-content`, 99). Nie dopisywano fraz konkurencji ani sztucznych powtórzeń. Ocena tekstu nie potwierdza rankingu ani pozyskania klienta; po publikacji potwierdzić import produkcyjnego URL.

## Test twierdzeń bez pokrycia

`scripts/offer-claims.test.mjs` (+ `offer-claims.mjs`): golden set 12 prawdziwych zdań usuniętych w PR #43–#65 musi być wykrywany; 7 zdań z uczciwymi ograniczeniami (negacje, pytania FAQ) nie może być zgłaszanych; 22 zrecenzowane oferty — w tym nowy Poznań — nie mogą zawierać procentów, cen, obietnic pozycji, gwarancji, certyfikatów, ocen ani biur poza Poznaniem. Każdą nowo zrecenzowaną ofertę dopisuje się do listy `reviewed`. Stare strony Poznania test oznaczał 13 trafieniami.

## Kontrola lokalna

TypeScript bez błędów, 178/178 testów, build: 1070 dokumentów / 1067 pełnych treści SSR bez błędów, 1068 adresów sitemap bez problemów, 134414 linków wyrenderowanych bez uszkodzeń, galerie bez błędów. Strona docelowa: jeden H1, self-canonical, `index, follow`, ok. 2470 słów w `main-content`. Aliasów nie prerenderowano. Kontrola mobilna, publikacja i odpowiedzi produkcji (308) wymagają potwierdzenia po scaleniu.

## Leady

Formularze kontaktu i rezerwacji wysyłają do funkcji Supabase (`send-contact`, `book-consultation`); Vercel nie ma błędów w ostatnich 7 dniach, a plan Hobby nie przechowuje starszych logów. Dostarczenie do CRM nadal niepotwierdzone — wymaga dostępu do projektu Supabase.
