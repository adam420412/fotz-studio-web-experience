# Strategia treści: oferta i poradnik — 9 października 2026

## Powód i zakres

Odczyt Search Console dla `sc-domain:fotz-studio.pl` z 9 października: oferta `/content-marketing/strategia` ma 276 wyświetleń, 0 kliknięć, CTR 0% i średnią pozycję 72,8 w okresie 7 lipca–6 października. Największe widoczne zapytania to „strategia content marketing” (69 wyświetleń), „content marketing strategie” (37), „content marketing strategia” (35), „content marketing definicja” (26) i „strategia content marketingu” (26). Raport obejmuje czas przed tym wydaniem; nie świadczy o efekcie ostatnich poprawek. Niska klikalność przy tej pozycji nie jest sama dowodem błędnego tytułu.

Dopracowano istniejącą ofertę oraz jej powiązany poradnik `/blog/strategia-content-marketingu-skuteczny-przewodnik-dla-firm`. Nie utworzono nowych stron ani przekierowań.

## Oferta

- Nagłówek i opis jasno identyfikują usługę, a krótka definicja odróżnia strategię od kalendarza publikacji.
- Sześć części zakresu: diagnoza, pytania odbiorców, formaty/kanały, plan, proces produkcji i pomiar.
- Trzy przykłady łączą pytanie klienta z materiałem, kanałem i następnym krokiem. Są oznaczone jako przykład planu dla producenta wyposażenia, nie wyniki klienta.
- Zdjęcie z planu sesji FOTZ wykorzystuje istniejące responsywne pliki WebP. Podpis opisuje rzeczywisty kadr. Galeria wybranych realizacji jest widoczna wcześniej i występuje tylko raz.
- Brief wejściowy, linki do produkcji, prowadzenia profili, CUPRA/rolek oraz audytu. Sześć odpowiedzi FAQ i schema korzystają z tych samych danych. Osobno opisano strategię, produkcję i publikację, bez nowych cen lub deklaracji terminów.

## Poradnik

Redakcja zastępuje nieudokumentowaną statystykę 29%, ogólne twierdzenia o badaniach, sztywny wymóg 3–4 kanałów, obietnice efektów regularnego publikowania i przypisanie niepotwierdzonego wzrostu sprzedaży klientowi. Nowa wersja ma definicję, brief pojedynczego materiału, etapy, rozróżnienie wskaźników i kosztów, kryteria dystrybucji oraz źródła Google. Usunięto dwie dodatkowe ilustracje stockowe z treści; istniejąca okładka pozostaje.

Korekta jest stosowana przy dokładnej zgodności całego przejrzanego HTML źródłowego. Późniejsza zmiana w CMS pozostaje do odrębnej redakcji i nie jest nadpisywana. Zachowano wszystkie 17 istniejących identyfikatorów kotwic, adres, tytuł i datę publikacji. Nie edytowano bazy CMS. Test sprawdza także zmianę końca przyszłego tekstu i pominięcie starej korekty.

Zmieniono `lastmod` tylko dwóch merytorycznie edytowanych stron oraz datę mapy głównej w indeksie. Nadal 1072 URL-e w mapach. Nie wysyłano nowych próśb o indeksowanie ani formularzy.

## Nawigacja do sekcji

Test przejścia z poradnika do przykładu w ofercie ujawnił, że wspólny `ScrollToTop` ignorował fragment URL-a i zawsze przewijał do góry. Teraz rozwiązuje kotwicę również po pojawieniu się opóźnionej trasy lub treści CMS. Obserwacja kończy się po znalezieniu celu, zmianie adresu lub limicie czasu. Nieprawidłowo zakodowany fragment nie przerywa działania strony. Testy obejmują opóźniony cel, anulowanie poprzedniej nawigacji, polskie znaki i brak celu.

## Źródła

- [Google: pomocne, rzetelne treści](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [Google: funkcje AI i witryna](https://developers.google.com/search/docs/appearance/ai-features).
- [Search Console: raport skuteczności](https://support.google.com/webmasters/answer/7576553?hl=pl).
- [GA4: oznaczanie kluczowych zdarzeń](https://support.google.com/analytics/answer/13128484?hl=pl).
- Własne portfolio i istniejące warianty zdjęć `selected-work-images.json`.

## Walidacja lokalna

63 testy, TypeScript i ESLint zmienianych plików: PASS. Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów. Audyt: 1072 unikalne adresy w mapach, 134766 linków HTML i 4044 linki źródłowe bez błędów; 487 galerii bez błędów.

Przeglądarka: 390 px / ciemny, 320 px / jasny, desktop; pojedynczy H1 i galeria, brak poziomego przepełnienia. FAQ otwiera się klawiaturą. Finalna wersja przewija do sekcji przy bezpośrednim wejściu, przejściu poradnik → oferta i oferta → materiały. Kontakt otwiera formularz na górze, bez wysyłania. Finalny przebieg ma pusty rejestr błędów JS. Wcześniejsza próba przerwana podczas przebudowy lokalnych plików została powtórzona po zakończeniu buildu.

Lokalny mobilny Unlighthouse, jedna próbka na adres po redakcji: oferta 88/100 wydajności, LCP 3,2 s; poradnik 84/100, LCP 3,4 s. Dostępność, dobre praktyki i SEO: 100/100 dla obu; CLS 0. Pomiar poprzedza dodatkową poprawkę przewijania (sprawdzoną później testami i przeglądarką). Bez próbki porównawczej sprzed redakcji i bez wniosków o CrUX lub rankingach.

Odbiór CI i publikacji zapisuje opis PR. Surowy odczyt GSC i dowody lokalne: ignorowany katalog `docs/seo/qa-2026-10-09/content-strategy/`. Wdrożenie ani pomiary laboratoryjne nie potwierdzają wzrostu pozycji, ruchu lub sprzedaży.
