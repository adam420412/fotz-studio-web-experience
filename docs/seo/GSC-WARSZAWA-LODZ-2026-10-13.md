# GSC i NEURONwriter — Warszawa i Facebook Ads Łódź, 13.10.2026

## Dobór ofert i stan przed zmianą

Kolejna partia obejmuje istniejące adresy z audytu. Dane skuteczności pochodzą z okresu 9.07–8.10.2026 i nie są efektem tego wdrożenia.

| Oferta | Historyczne wyświetlenia / kliknięcia | Aktualna inspekcja przed zmianą | Analiza NEURONwriter | Ocena starej produkcji |
|---|---:|---|---|---:|
| `/agencja-marketingowa/warszawa` | 155 / 0 | URL jest w Google | `ae1756ad7ee4fb01` | 69 |
| `/performance-marketing/facebook-ads/lodz` | 113 / 0 | Zeskanowano, jeszcze nie zindeksowano | `d457b0717e855d61` | 72 |

Google dla Łodzi pokazuje skan z 17.07.2026 i stary canonical `https://fotz.pl/performance-marketing/facebook-ads/lodz`. Test wersji opublikowanej z 13.10 o 21:55 potwierdza udane pobranie, dozwolone indeksowanie i aktualny canonical na `https://www.fotz-studio.pl/performance-marketing/facebook-ads/lodz`. Ten prawidłowy canonical istniał już przed niniejszą zmianą; nie przypisujemy jego naprawy tej partii. Test dostępności nie oznacza wejścia do indeksu.

Wykorzystano dwie nowe analizy w istniejącym projekcie `59db8bbb8ee62780`, Polish / google.pl, top-intent; razem 17 analiz utworzonych podczas audytu. Nie kupowano kredytów ani nowego planu. Intencja Warszawy: 96,4% transakcyjna, 67,9% lokalna. Łódź: 51,7% lokalna, 41,4% transakcyjna, z domieszką wyników profili i poradników. Odrzucono sugestie o zarobkach twórców, lokalnych ogłoszeniach, rankingi konkurencji i niepasujące pytania.

## Zmiany

- Usunięto niepotwierdzone warszawskie biuro, godziny, alias kontaktowy, statystyki doświadczenia, nagrody, wzrosty przychodów i gwarancje. Uporządkowano starą ofertę pakietową; wycena zależy od konkretnych zadań. Dane firmy są we wspólnym układzie strony.
- Usunięto z Łodzi niepotwierdzone pakiety, certyfikaty, twierdzenia o lokalnych klientach i zarobkach, stałym CPC, terminach uzyskania wyników oraz porównaniach skuteczności bez dowodów.
- Podano siedzibę w Poznaniu i zasady współpracy zdalnej. Sesje, nagrania i dojazdy wymagają osobnego uzgodnienia. Portfolio nie jest przedstawiane jako lista klientów z tych miast.
- Dodano jasny zakres, rozdzielenie obsługi, produkcji i emisji, akceptację materiałów, ocenę zapytań oraz odpowiedzialność za ich obsługę. Dawid EDU potwierdza stronę i kampanię; KLAGEM potwierdza stronę i konfigurator 3D. Nie przypisano im nowych wyników liczbowych.
- Obie strony używają ServiceEditorial, zachowują galerie własnych zdjęć i otrzymują hydratację. Kontakt zachowuje `usluga=marketing`; oferta Łodzi również `wariant=meta_ads`. Nie zmieniano formularza ani backendu.
- Zmieniono title, description i lastmod tylko tych dwóch ofert. Nie tworzono kolejnych adresów ani przekierowań.

Treść redagowano na podstawie zaleceń oraz ocen NEURONwriter, z kontrolą użyteczności i faktów. Wynik narzędzia nie jest miarą indeksowania, pozycji ani leadów. Zasady jakości: [Google — pomocna i wiarygodna treść](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Przegląd i walidacja

Claude Code wykonał audyt obu starych stron na bazie `b55b22c`. Wskazane problemy uwzględniono w nowych ofertach. Przegląd dokładnego PR, końcowy build, ocena wyrenderowanej treści i potwierdzenie produkcji są wykonywane przed zamknięciem etapu.

Ręczne zgłaszanie URL-i w GSC osiągnęło 13.10 dzienny limit podczas poprzedniej partii. Nie obchodzimy limitu; samo wdrożenie i aktualizacja sitemap nie potwierdzają przyjęcia prośby. W kolejce pozostaje także `/uslugi/video-marketing` z poprzedniej partii.

Dowody lokalne: `output/lead-audit-2026-10-13/neuron-warszawa-lodz-95/`: rekomendacje, oceny przed zmianą, inspekcje i test GSC, audyt Claude oraz logi walidacji.

## Walidacja wersji przygotowanej do przeglądu

Wyrenderowana treść główna i rzeczywiste metadata: Warszawa **95**, Łódź **95**. Zapis w obu edytorach NEURONwriter potwierdza 95/100. Typecheck i ESLint zmienionych plików przeszły, testy 148/148. Build: 1075 dokumentów, 1072 pełne treści, zero błędów. Audyt: 1073 unikalne URL-e sitemap, 135063 linki w HTML, 3963 odnośniki źródłowe oraz 486 galerii bez błędów. Wynik publicznego importu będzie sprawdzony po wdrożeniu.

Claude przejrzał dokładny head `1ba25f2` PR #58: zakres zaakceptowany, brak blokerów. Poprawiono wskazane umiejscowienie zdjęć w opisie i skrócono title Łodzi. Dwa nagłówki Warszawy mają mniej powtarzalny początek, doprecyzowano nazwę agencji marketingu internetowego, a informację o osobno uzgadnianym mailingu przeniesiono do kosztów i zakresu. Kontrola mobilna obu ofert przy 390 px nie wykazała poziomego przepełnienia; kliknięcie CTA wybrało w formularzu marketing, w Łodzi również wariant kampanii Facebook i Instagram. Nie wysyłano testowych zapytań. Konsola testowanej karty bez błędów. Końcowy publiczny wynik i wdrożenie nadal wymagają potwierdzenia po scaleniu.
