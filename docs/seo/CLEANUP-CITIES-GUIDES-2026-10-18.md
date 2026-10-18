# Porządkowanie — oferty miejskie z małym ruchem, poradniki, okruszki — 18.10.2026

## Zakres

- **52 oferty miejskie** z listy `city-pages-low-traffic-2026-10-17.csv` oczyszczone z twierdzeń bez pokrycia (ta sama reguła co 120 ofert z 17.10). Decyzja o przekierowaniu nadal należy do właściciela; do tego czasu strony są uczciwe. Wszystkie dopisane do testu (`lowTraffic`) — przy przekierowaniu trzeba je z listy usunąć.
- **48 poradników z największym ruchem**: usunięte twierdzenia o FOTZ (ceny i pakiety, wyniki klientów, liczby opinii i wyświetleń, „bezpłatny audyt dla każdego”, „oferta w 24 h”), statystyki rynkowe bez źródła; widełki rynkowe zostały tylko z dopiskiem, że to nie cennik FOTZ.
- **Okruszki**: 82 strony miały ostatni element okruszków wskazujący na stronę główną (widoczna ścieżka gubiła bieżącą stronę, a w dwóch przypadkach dane strukturalne wskazywały zły adres). Ostatni element prowadzi teraz do bieżącej strony.
- **Odznaki „Najpopularniejszy”** na pakietach (11 stron) → „Polecany zakres” — nie mamy danych sprzedażowych na poparcie popularności.
- **Wspólne teksty**: `LocalSEOBoost` nie twierdzi już, że cała produkcja to jeden zespół (FOTZ korzysta z podwykonawców); usunięte „bez podwykonawców” w poradniku o briefie.
- **Detektor**: nowa reguła liczby klientów, realizacji, opinii i lat doświadczenia; odczyt liczników (`value`/`suffix`/`label`).
- **Poprawki merytoryczne**: FID → INP, przykładowe adresy fotz.pl → fotz-studio.pl, nieistniejące katalogi (Pudelek, Goldenline), złagodzone „CTR jest czynnikiem rankingowym”, błędne fakty o miastach (odległości, liczby mieszkańców, firmy, dzielnice).

## Do decyzji właściciela (z raportów)

- g6 poradniki (product launch, MEDDIC, Google Ads cennik, cena strony, audyt, content poradnik): ~45. Usunięte: „bezpłatny audyt dla każdego klienta”, „oferta w 24 h”, „90% stron”. Widełki rynkowe opisane jako „nie cennik FOTZ”. Owner: bezpłatna konsultacja (strona /konsultacja istnieje); aktualność widełek.
- g3 poradniki (SEO copywriting, inbound, social dla firm, SEO lokalne, content strategy, CTR): ~34. DO NAPRAWY: przykładowe adresy „fotz.pl/blog” → fotz-studio.pl (SEO copywriting, CTR); „CTR jest czynnikiem rankingowym” złagodzić.
- g5 poradniki (reklama wideo FB, fotografia biznesowa, content marketing, copywriting SEO, SEO lokalne poradnik, referral): ~47. Usunięte ceny FOTZ (rolka 1 900 zł, 10 rolek 12 000 zł, pakiety 5 000/8–9 tys.), „160 opinii 5.0”, „3 mln wyświetleń”, Żabka, „Pakiet Lokalny 999 zł”. Owner: studio fotograficzne w Poznaniu; retusz w cenie; „Darmowa rolka na start”. DO NAPRAWY: Pudelek/Goldenline w SEO lokalnym; mity o długości zdań/pogrubieniach.
- g1 poradniki (nieruchomości, event, ICP, zdjęcia korpo vs reklamowe, film reklamowy, dropshipping): ~57. Usunięte ceny video FOTZ (1 900 zł, 12 000 zł/10 rolek, PARTNER 8–9 tys.), „3 mln wyświetleń”, „160 opinii”, Żabka. DO NAPRAWY/decyzja: dropshipping — zmyślone hurtownie (Korepetycje.net itd.) i błędne VAT/PIT (limit 240 tys. od 2026).
- g2 poradniki (market research, loyalty, jak wybrać agencję, rolka dla firmy, film rekrutacyjny, cold email): ~34. Usunięty cennik rolek (1 900 / 12 000 / Premiera 2 900 / START–PARTNER). Owner: „darmowa rolka próbna”.
- g4 poradniki (marketing lokalny, koszt SEO, negocjacje, Pinterest, budżet, technical SEO): ~48. Pinterest: uszkodzone zdanie z chińskimi znakami naprawione.
- g7 poradniki (SEO sklepu, sales forecast, ABM, psychologia cen, landing page cena, audyt SEO krok): ~51. Usunięte: cennik landing page FOTZ 1500–5000 zł, „audyt w 2–3 dni”. DO NAPRAWY: FID → INP w audyt SEO krok.
- g0 poradniki (tanie strony, hosting, B2B, PoC, koszt Google Ads, jak wybrać agencję SEO): ~70. Usunięte: „pakiety od 2 000 zł”, „pracujemy od 1000 zł, ROAS 2,5–4”, „ROI 4200%”. Literówki (案例) naprawione. Uwaga: schemaJson w KosztGoogleAds ma stare odpowiedzi FAQ.
- city g8 (WWW Konin/Wałbrzych/Kielce, GAds Rzeszów, TikTok Kraków): ~75, wszystkie OK.
DECYZJA KLUCZOWA: cennik video (rolka od 1 900 zł netto, 10 rolek 12 000 zł, Premiera 2 900 zł, abonamenty START 2 500 / WZROST 5 000 / PARTNER 8–9 tys. zł) występował spójnie w 4 poradnikach — może to być prawdziwy cennik właściciela. Usunięty; można przywrócić jednym commitem po potwierdzeniu.
- city g3 (WWW Bydgoszcz, SEO Toruń, AM Zabrze, GAds Gdańsk, FB Gdynia/Toruń): ~86. Owner: 30-dniowa gwarancja po starcie; raporty tygodniowe; breadcrumb Gdynia → strona główna (błąd).
- city g7 (WWW Olsztyn, AM Kielce/Kalisz, GAds Lublin, TikTok Warszawa): ~75. Owner: okres wypowiedzenia 30 dni (Kalisz); zakresy raportów.
- Poprawki moje: fotz.pl → fotz-studio.pl w przykładach URL; Pudelek/Goldenline usunięte; FID → INP; CTR jako czynnik rankingowy złagodzony.
- city g0 (WWW Kraków/Częstochowa, SEO Gliwice, AM Koszalin, FB Bydgoszcz, TikTok Wrocław): ~86. Gliwice: błędne dzielnice poprawione; usunięte marki Rockwell/ABB/Siemens. Błąd: breadcrumb ostatni element → strona główna (Bydgoszcz, Gdynia).
- city g4 (WWW Katowice, SEO Bydgoszcz, AM Wałbrzych, GAds Łódź/Gdynia/Kielce): ~105. Usunięte: „HIPAA compliant”, Local Services Ads, błędne liczby mieszkańców. Owner: „30-dniowa gwarancja po wdrożeniu” (Katowice).
- city g5 (WWW Rybnik, SEO Radom, AM Elbląg, FB Kraków, GAds Toruń, sklepy Warszawa): ~102. Radom: zmyślone „SEO dla lotnictwa / WSK” usunięte. Owner: hello@fotz.pl; raport co 2 tygodnie.
- city g6 (WWW Opole, SEO Kielce/Kalisz/Gdynia, GAds Szczecin, AM Olsztyn): ~120. Usunięte: „kaliski batik”, MTP w Warszawie, „największy port w Polsce”, Michelin/Bridgestone, „200+ projektów”. Owner: dzielnice Kalisza (Pomorskie, Teodora, Bogucin) do sprawdzenia.
- city g1 (WWW Gdańsk, SEO Szczecin, AM Częstochowa/Lublin, FB Lublin, TikTok Łódź): ~106. Usunięte: „60 km od Berlina”, zmyślone klientki branży morskiej, „bez podwykonawców”. Owner: warunki umów (bez kar).


## Kontrola lokalna

Testy 418/418, `tsc` bez błędów, build 667 stron / 664 pełnych treści SSR bez błędów, sitemap 665 bez problemów, 83 589 linków bez uszkodzeń, galerie bez błędów.
