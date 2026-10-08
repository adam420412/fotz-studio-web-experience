# Narzędzia open source dla SEO FOTZ Studio

Przegląd repozytoriów i dokumentacji: 8 października 2026. Narzędzia wspierają kontrolę techniczną; dane o indeksacji i zapytaniach nadal pochodzą z właściwości `sc-domain:fotz-studio.pl` w Google Search Console.

| Repozytorium | Przydatność w tym projekcie | Status |
| --- | --- | --- |
| [GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) | Powtarzalne audyty mobilne, SEO, dostępności i wydajności przy zmianach kodu. Raporty porównują próbki stron. | Dodano `@lhci/cli@0.15.1`, konfigurację i krok w istniejącym workflow SEO. |
| [harlan-zw/unlighthouse](https://github.com/harlan-zw/unlighthouse) | Przegląd witryny przy użyciu Lighthouse, z próbkowaniem podobnych adresów i interfejsem do analizy wyników. Przydatny do osobnego przeglądu rodzin szablonów. | Zainstalowano `@unlighthouse/cli@0.19.1`; wykonano audyt 20 mobilnych szablonów. Konfiguracja i ręczny workflow są w repozytorium. |
| [lycheeverse/lychee](https://github.com/lycheeverse/lychee) | Kontrola odnośników w HTML i dokumentacji, szczególnie zewnętrznych materiałów i cytowanych źródeł. | Zainstalowano `lychee 0.24.2`; wykonano kontrolę wszystkich zewnętrznych odnośników w wygenerowanym HTML. Linki wewnętrzne sprawdza osobny audyt całego buildu. |

## Uruchamianie w projekcie

```sh
npm ci
npm run build
npm run seo:check
npm run seo:lighthouse
```

Lighthouse wymaga lokalnego Chrome; runner GitHub Actions zapewnia przeglądarkę. Konfiguracja `lighthouserc.cjs` podaje jawnie cztery adresy: główną, obsługę social media, strony internetowe i audyt SEO. Każdy jest mierzony dwukrotnie w profilu mobilnym. Dzięki temu zwykły PR nie uruchamia ponad tysiąca kosztownych pomiarów.

SEO poniżej 95/100, brak tytułu, opisu lub opisów alternatywnych obrazów zatrzymują kontrolę. Dostępność poniżej 90/100 i wydajność poniżej 70/100 są raportowane jako ostrzeżenia. Nie pomijamy kategorii wydajności tylko po to, aby uzyskać zielony wynik. Raport laboratoryjny nie zastępuje Core Web Vitals od rzeczywistych użytkowników ani nie potwierdza poprawy pozycji.

Raporty zapisują się w ignorowanych katalogach `.lighthouseci/` i `reports/lighthouse/`. Workflow zachowuje je przez 14 dni jako artefakt bieżącego uruchomienia. Nie używa publicznej usługi przechowywania raportów Lighthouse ani nowych tokenów.

Dokumentacja konfiguracji: [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md). Przy wprowadzaniu nowego narzędzia należy sprawdzić jego aktualną wersję, wymagania i zakres raportu. Sam wybór narzędzi nie oznacza wykonania wszystkich opisanych audytów.

## Rozszerzony audyt

Wymagane: Node.js 22.22.0 (Unlighthouse wymaga co najmniej 22.18), Chrome i Python 3. Na macOS `brew install lychee` instaluje kontroler odnośników. Ręczny workflow `Deep SEO audit` używa wersji lychee 0.24.2 przez oficjalną akcję projektu.

```sh
npm run seo:unlighthouse
npm run build
npm run seo:links
```

Unlighthouse domyślnie mierzy 20 jawnie wskazanych szablonów na produkcji, z jednym pracownikiem, jednym pomiarem strony i mobilnym ograniczeniem sieci/CPU. Próg SEO to 95, dostępności 90, wydajności 70; przekroczenie budżetu kończy proces błędem i zachowuje raport. Zmienna `FOTZ_AUDIT_SITE` zmienia badany serwer, `FOTZ_AUDIT_OUTPUT` katalog raportów. `FOTZ_AUDIT_PATHS` zastępuje listę tras (adresy rozdzielone przecinkami). Flaga CLI `--urls` dodaje adresy do konfiguracji, dlatego do ograniczenia próbki należy użyć zmiennej. Przykład dla lokalnego podglądu:

```sh
FOTZ_AUDIT_SITE=http://127.0.0.1:5195 FOTZ_AUDIT_OUTPUT=./reports/unlighthouse-after FOTZ_AUDIT_PATHS=/,/kontakt,/realizacje/klagem npm run seo:unlighthouse
```

`seo:links` zbiera odnośniki z każdego HTML w `dist`, a następnie uruchamia lychee. `reports/links/sources.json` wskazuje strony zawierające dany adres. Raporty 403, 429 i timeout wymagają interpretacji — nie są automatycznie uznawane za poprawne ani za dowód usunięcia strony. Adresy mailowe nie są sprawdzane przez wysyłanie wiadomości.

Rozszerzony workflow uruchamia się ręcznie i przechowuje raporty przez 14 dni, także po nieudanym audycie. Nie tworzy harmonogramu ani nie publikuje raportów w zewnętrznym serwisie. Lokalnie raporty pozostają w ignorowanych katalogach `reports/links/` i `reports/unlighthouse*/`.

Wyniki i poprawki: [audyt 8 października 2026](DEEP-AUDIT-2026-10-08.md).
