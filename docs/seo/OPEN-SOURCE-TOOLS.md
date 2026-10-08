# Narzędzia open source dla SEO FOTZ Studio

Przegląd repozytoriów i dokumentacji: 8 października 2026. Narzędzia wspierają kontrolę techniczną; dane o indeksacji i zapytaniach nadal pochodzą z właściwości `sc-domain:fotz-studio.pl` w Google Search Console.

| Repozytorium | Przydatność w tym projekcie | Status |
| --- | --- | --- |
| [GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci) | Powtarzalne audyty mobilne, SEO, dostępności i wydajności przy zmianach kodu. Raporty porównują próbki stron. | Dodano `@lhci/cli@0.15.1`, konfigurację i krok w istniejącym workflow SEO. |
| [harlan-zw/unlighthouse](https://github.com/harlan-zw/unlighthouse) | Przegląd witryny przy użyciu Lighthouse, z próbkowaniem podobnych adresów i interfejsem do analizy wyników. Przydatny do osobnego przeglądu rodzin szablonów. | Zweryfikowano dokumentację; nie instalowano i nie uruchamiano skanu. |
| [lycheeverse/lychee](https://github.com/lycheeverse/lychee) | Kontrola odnośników w HTML i dokumentacji, szczególnie zewnętrznych materiałów i cytowanych źródeł. | Zweryfikowano dokumentację; obecne linki wewnętrzne nadal sprawdza audyt całego buildu. Nie instalowano. |

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
