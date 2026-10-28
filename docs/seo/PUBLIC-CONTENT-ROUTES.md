# Publikacja artykułów i obsługa nieistniejących adresów

Adresy `/blog/:slug` i `/agencja-social-media/:clusterSlug` nie są już automatycznie uznawane za istniejące. Manifest `known-routes.json` powstaje podczas builda z tras aplikacji, wpisów `src/data/blog-seo.json` oraz `src/data/socialMediaClusters.ts`. Te same adresy otrzymują HTML podczas prerenderowania.

Po dodaniu, zmianie sluga lub wycofaniu artykułu w CMS:

1. Odśwież publiczne snapshoty przez `node scripts/sync-blog-seo.mjs`.
2. Przejrzyj różnice w treści i metadanych. Zachowaj świadomie wprowadzone poprawki redakcyjne i zdjęcia FOTZ; synchronizacja pobiera wersję CMS.
3. Wykonaj build, zaktualizuj mapy przez `python3 scripts/sync-sitemaps.py` i `python3 scripts/sync-html-sitemap.py`, a następnie ponownie wykonaj build.
4. Uruchom `npm test`, `npm run typecheck` i `npm run seo:check`, przejrzyj zmiany, wdróż i sprawdź opublikowane adresy.

Sama publikacja w CMS nie dopisuje adresu do statycznego wdrożenia. Przed promocją wpisu trzeba zakończyć powyższy proces. Nie przywracaj wildcardu `/blog/[^/]+`, aby obejść brak synchronizacji: przywróciłby odpowiedzi 200 dla dowolnych, nieistniejących artykułów.

Nieznany adres otrzymuje HTTP 404, nagłówek `X-Robots-Tag: noindex, nofollow` i samodzielny ekran błędu z linkami do strony głównej oraz kontaktu. Ekran nie uruchamia aplikacji ani nie pobiera kolejnej strony. Nawigacja wewnątrz aplikacji również pokazuje brak strony, zamiast przenosić na ogólną listę. Wycofana oferta studia podcastowego nadal zwraca 410.

Testy sprawdzają każdy adres z obu źródeł treści, polskie znaki w URL, błędne kodowanie, nieznane slugi, GET/HEAD, zasoby aplikacji oraz wycofaną ofertę. Przed tą zmianą porównano publiczny CMS z zapisanymi snapshotami: 61 wpisów po obu stronach, bez brakujących lub wycofanych slugów (28.10.2026).
