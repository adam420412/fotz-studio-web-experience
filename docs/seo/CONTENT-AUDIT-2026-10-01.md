# FOTZ Studio — naprawy i wiedza SEO/AEO, 4 października 2026

## Zakres zmian

Ta aktualizacja opisuje kod przygotowany po audycie z 2 października. Publikację potwierdza osobno stan wdrożenia i odczyt produkcji; sam dokument ani build nie są takim dowodem.

- **Treść w HTML:** prerenderowanie pełnych treści wszystkich publicznych tras, również 61 opublikowanych artykułów CMS ze sprawdzonego snapshotu. Nagłówki, linki, treść i dane strukturalne są dostępne przed uruchomieniem JavaScript. Build przerywa pracę przy błędzie renderowania. Nie zmieniono dat publikacji starych artykułów dla pozornej świeżości.
- **Oferta:** usunięto sprzeczne kwoty 499 zł i niepotwierdzone pakiety z poprawianych cenników oraz powtarzalnych szablonów WWW. Cenniki pokazują zatwierdzone 2 października pakiety WWW START i WIDEO START po 1490 zł netto, z warunkami i wyłączeniami. Większe projekty wymagają osobnej wyceny. START nie zastępuje całego katalogu usług. Zachowano zmiany landing pages z PR #19.
- **Asystent:** wspólne fakty o adresie Plac Wolności 16, kontakcie, konsultacji 15 minut i ofercie; sprawdzone odnośniki i przekazanie do zespołu przy braku informacji. Usunięto przykładowy adres i wymyślone gwarancje.
- **Treści i portfolio:** poprawiono Legnicę, Poznań, strategię content marketingu, cennik social media oraz powtarzalne błędy językowe miast. Cute as a Dumpling opisano jako sklep z dekoracjami, Klagem jako systemy meblowe, RPPG jako organizację przedsiębiorców. W poprawianych realizacjach i sekcjach głównej liczby bez źródeł zastąpiono konkretnym zakresem; Enea pokazuje rzeczywiste materiały zamiast zdjęcia ilustracyjnego opisanego jako stan przed zmianą.
- **Wygląd i wideo:** krótsza mobilna główna, usługi bliżej początku, czytelne karty i CTA. Showreel pobierany dopiero po kliknięciu; wersja 6,05 MB zamiast 9,83 MB (około 38% mniej bajtów). Zachowano oryginalny plik. Nie jest to pomiar Core Web Vitals.
- **Zasoby:** zamiast niedostępnych materiałów i nieukończonego newslettera — działające poradniki i generator briefu. Zaprzestano promowania checklisty kampanii jako materiału dla klientów, zgodnie z ustaleniem dotyczącym jej wewnętrznego użycia. Wcześniejszy publiczny plik nie został skasowany.
- **Formularze:** jeden identyfikator zgłoszenia i ponawianie z tym samym ID, oczekiwanie na potwierdzenie, brak równoległego dublowania CRM przy nowszym endpointcie. Usunięto pozorną konwersję po samym wejściu na podziękowanie. Opcjonalny pomiar wymaga zgody i potwierdzenia serwera. Kalendarz rozróżnia zapis terminu od powodzenia powiadomień; awaria powiadomienia nie wymusza drugiej rezerwacji.
- **Kontrole:** rzeczywista kontrola TypeScript obu projektów, testy logiki, pełny build oraz kontrola treści HTML, metadanych, JSON-LD, lokalnych zasobów, map i odnośników w CI dla pull requestów.

## Aktualne dane Search Console

Odczyt 4.10.2026, właściwość **sc-domain:fotz-studio.pl**, kanoniczny host **https://www.fotz-studio.pl**:

- Mapa `sitemap-index.xml`: **Sukces**, ostatni odczyt 2.10, **1073 wykryte strony**. Historyczny błąd pobrania z audytu poniżej już nie występuje. Wykrycie nie oznacza zaindeksowania wszystkich adresów.
- Raport wyszukiwania z generatywną AI, 30.06–29.09.2026, internet/tekst: **54 wyświetlenia, 36 adresów URL**. To wyświetlenia, nie kliknięcia, cytowania w każdym narzędziu AI ani zapytania klientów.
- Główny raport w tym samym okresie: **24 kliknięcia, 12 094 wyświetlenia, CTR 0,2%, średnia pozycja 35,8**. Raport AI jest przekrojem; nie dodajemy jego wyświetleń do całości. Okres poprzedza naprawy, więc nie dowodzi ich efektów.
- GSC nie ma wystarczających danych terenowych CWV. Nie zadeklarowano zaliczenia CWV ani poprawy pozycji.

Dowody odczytu zapisano lokalnie w `qa-2026-10-01/audit-fixes/gsc-*-2026-10-04.*` (poza publikowanym repozytorium).

## Wiedza z filmów i jej zastosowanie

Przeczytano pełne transkrypcje czterech materiałów, w tym filmu wskazanego przez użytkownika:

1. Ahrefs, [Learn 80% of AEO in 19 Minutes](https://www.youtube.com/watch?v=58MR03s0ev8).
2. Ahrefs, [Complete AI SEO Course for Beginners](https://www.youtube.com/watch?v=uza9GX0E2mw).
3. Ahrefs, [Learn 80% of SEO in 14 Minutes](https://www.youtube.com/watch?v=EJj4CpzawPI).
4. Google Search Central, [Do sitemaps still matter?](https://www.youtube.com/watch?v=hDva5VoZJsE).

Najważniejsze zastosowanie: odpowiadać na pytania klientów jasnym zakresem usługi i dowodami, poprawiać istniejącą treść przed mnożeniem podobnych podstron, zapewnić dostępny HTML oraz oddzielać widoczność od rzeczywistych zapytań. Korelacje prezentowane przez dostawcę narzędzia nie są gwarancją wzrostu. Materiały nie uzasadniają automatycznego usunięcia technicznych artykułów — część ma wyświetlenia w GSC.

Zweryfikowano także aktualne źródła pierwotne:

- [Google: raporty generatywnej AI](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports) i [pomoc raportu](https://support.google.com/webmasters/answer/16984139): bieżący raport AI należy odróżnić od wcześniejszej dokumentacji opisującej tylko zbiorczą skuteczność.
- [Google: nowy przewodnik optymalizacji](https://developers.google.com/search/blog/2026/05/a-new-resource-for-optimizing): użyteczność, oryginalne materiały i podstawy techniczne pozostają punktem wyjścia.
- [OpenAI: boty](https://developers.openai.com/api/docs/bots): OAI-SearchBot i GPTBot mają odrębne zastosowania i ustawienia; dostęp wyszukiwarki nie oznacza konieczności zezwolenia na trening.
- [Google: JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): pełny HTML ogranicza zależność od dodatkowego renderowania.

Nie pobrano „wszystkich kanałów” ani wszystkich najnowszych transkrypcji. Próba eksportu piątego filmu Google zakończyła się brakiem transkrypcji — nie zaliczono go do przeczytanych. Surowych transkrypcji nie publikujemy. Własne wnioski i linki zachowano jako notatkę wiedzy na prośbę użytkownika; nie jest to trening modelu.

## Kontrole przed publikacją

- TypeScript: oba projekty przeszły kontrolę.
- Testy logiki: 34 zaliczone, 0 pominiętych i 0 błędów.
- Generowanie: 1085 dokumentów, 1082 pełne treści publicznych stron i 3 trasy noindex; 0 błędów renderowania.
- Kontrola HTML, nagłówków, canonicali, JSON-LD i lokalnych plików: bez błędów. 1073 unikalne adresy w mapach, bez błędów map.
- Odnośniki źródłowe: 4048 sprawdzonych, 0 uszkodzonych.
- Przegląd mobilny: 12 kluczowych stron oraz 9 widoków po końcowych zmianach; bez poziomego przepełnienia i błędów już załadowanych obrazów. To próbka wizualna, nie screenshot każdego adresu.
- Cennik bez JavaScript: poprawny H1, oba pakiety START, pełna treść i canonical. Film: 0 żądań MP4 przed kliknięciem, żądanie `fotz-reel-web.mp4` po kliknięciu.

Dowody i wyniki znajdują się w lokalnym katalogu `qa-2026-10-01/audit-fixes/`. Wynik produkcji i CI należy czytać oddzielnie od powyższych kontroli lokalnych.

## Granice odbioru i dalsze działania

Pełna kontrola automatyczna obejmuje wszystkie generowane adresy; oględziny mobilne i redakcja treści obejmują reprezentatywne strony, priorytety GSC oraz współdzielone szablony. Nie oznacza to przeczytania każdego akapitu ponad tysiąca podstron.

Wymagające osobnego potwierdzenia: dostarczenie kontrolowanego zgłoszenia do poczty i CRM, operacyjne powiadomienia rezerwacji, faktyczna konfiguracja GA4/Ads i jej wyniki. Nie wysyłano formularzy ani rezerwacji do produkcji. Testy logiki stosują kontrolowane odpowiedzi. Zmiana asystenta w Edge Function pozostaje kodem; nie wdrażano funkcji Supabase ani starszego `send-contact` z repozytorium ponad nowszą wersję produkcyjną.

Po wdrożeniu należy porównać okresy w GSC i kwalifikowane zapytania. Dalsza redakcja dużego bloga powinna wynikać z danych strony i intencji zapytania, bez masowego zmieniania dat, usuwania URL-i i obietnic pozycji. Nie uruchomiono automatycznego monitoringu ani emisji reklam.

---

## Archiwum: audyt uzupełniający z 2 października 2026

Poniższe ustalenia opisują stan sprzed poprawek. Aktualizacja powyżej ma pierwszeństwo, w szczególności dla mapy GSC i wewnętrznej checklisty.


## Aktualny audyt uzupełniający po publikacji PR #17 i #18

**Wniosek:** podstawowe naprawy adresów i metadanych są wdrożone. Największe pozostałe problemy dotyczą zgodności oferty, opisów klientów, odpowiedzi asystenta i pomiaru zapytań. Kolejny etap powinien poprawiać jakość istniejących stron, zanim powstaną następne podstrony.

To audyt, nie wdrożenie kolejnych zmian. Zbadano publiczną produkcję `https://www.fotz-studio.pl`, aktualne raporty GSC właściwości `sc-domain:fotz-studio.pl` i kod po PR #18. Nowa kontrola obejmuje 10 kluczowych stron w przeglądarce, próbki mobilne przy potwierdzonym `innerWidth=390`, 12 odczytów HTTP (5 stron HTML i 7 map XML), wyszukiwanie powtarzalnych problemów w 997 plikach TSX bezpośrednio w `src/pages` oraz ścieżki formularzy i CI. Nie oznacza to redakcyjnego przeczytania każdego akapitu wszystkich 1073 adresów. Wcześniejszy pełny przegląd tras opisano w archiwum poniżej i w `SITE-AUDIT-2026-10-01.md`.

Nie wysyłano formularzy, zapisów do newslettera ani rezerwacji. Test pytania „adres” uruchomił lokalną odpowiedź FAQ asystenta; nie przekazano go człowiekowi ani do funkcji AI. Nie zmieniano konfiguracji produkcyjnej, map w GSC ani treści witryny.

### Dane Google wyznaczające kolejność

Świeży odczyt GSC: **30.06–29.09.2026**, wyszukiwarka internetowa, 3 miesiące, wszystkie urządzenia: **24 kliknięcia, 12 094 wyświetlenia, CTR 0,2%, średnia pozycja 35,8**. To okres sprzed ostatnich wdrożeń; nie można na jego podstawie ocenić efektów PR #17/#18. Przy przeciętnej pozycji 35,8 niski CTR nie dowodzi wyłącznie problemu tytułów.

| Strona / temat | Kliknięcia | Wyświetlenia | Śr. pozycja | Następne działanie |
|---|---:|---:|---:|---|
| `/uslugi/strony-internetowe/legnica` | 0 | 695 | 55,7 | Ceny, opis Cute Dumpling, język i konkretna oferta |
| `/agencja-marketingowa/poznan` | 0 | 580 | 43,9 | Spójność pakietów i zakresów z cennikami |
| `/agencja-social-media` | 0 | 289 | 58,2 | Wzmocnić dowody realizacji; mierzyć po ponownym skanowaniu |
| `/content-marketing/strategia` | 0 | 285 | 72,9 | Poprawić klientów i przebudować początek wokół usługi |
| `/seo/pozycjonowanie-katowice` | 0 | 283 | 77,5 | Kolejna strona do pełnej oceny treści lokalnej |
| `/seo/audyt` | 0 | 277 | 74,8 | Doprecyzować zakres audytu i rezultat dla klienta |
| Poradnik Tiptap/Lexical/Slate 2024 | 1 | 330 | 5,7 | Ocenić intencję i aktualność; nie usuwać automatycznie |

Zapytania „agencja social media poznań” (575 wyświetleń, 0 kliknięć), „social media poznań” (534, 0) i „social media marketing” (1030, 0) wskazują obszar zainteresowania. Potrzebna jest mapa zapytanie → główna oferta → poradnik. Samo występowanie kilku URL-i nie dowodzi kanibalizacji i nie uzasadnia automatycznych przekierowań.

### P1 — poprawki w pierwszej kolejności

**1. Asystent podaje przykładowy adres i niezależną ofertę. Potwierdzone w produkcji.**

- Na pytanie „adres” odpowiada: „Siedziba: Poznań, ul. Przykładowa 10”, mimo że stopka podaje Plac Wolności 16.
- W jego bazie FAQ konsultacja trwa 30 minut, na stronie 15 minut; strony WWW zaczynają się od 3000 zł, social media od 2000 zł. Są też osobne deklaracje zaliczek, gwarancji, terminów i doświadczenia.
- Działanie: jedna zatwierdzona baza danych kontaktowych i oferty używana przez stronę, cenniki oraz FAQ/AI; odpowiedzi bez potwierdzonej informacji mają odsyłać do konkretnej oferty. Sprawdzić także URL-e wpisane wewnątrz odpowiedzi tekstowych — poprzedni audyt linków JSX nie obejmuje ich w pełni.
- Odbiór: test adresu, konsultacji, cen, gwarancji i odnośników w widocznym czacie. Dowód: `qa-2026-10-01/audit-next/chat-address.png` i `chat-address.txt`; źródło `src/components/ChatbotFAQ.tsx:29–71`.

**2. Niespójne ceny i niejasna relacja między pakietami. Potwierdzone.**

- [Legnica](https://www.fotz-studio.pl/uslugi/strony-internetowe/legnica): w pierwszym ekranie „od 499 zł”, niżej najtańsza karta 2000 zł netto, następne 5000 i 8000 zł. Nie wyjaśniono, co można kupić za 499 zł. W źródłach fraza „od 499 zł” występuje w 30 plikach stron — to lista do sprawdzenia, nie 30 potwierdzonych sprzeczności.
- [Cennik social media](https://www.fotz-studio.pl/agencja-social-media/cennik): 2900 / 5900 / 12 900 zł. [Artykuł o cenniku](https://www.fotz-studio.pl/blog/agencja-social-media-cennik): „nasz cennik” 2500 / 5000 / 8000–9000 zł, przy czym pierwszy pakiet obejmuje opiekę nad WWW. [Agencja Poznań](https://www.fotz-studio.pl/agencja-marketingowa/poznan): 1299 / 2999 / 5999 zł za inne zestawy usług. Różne zakresy mogą uzasadniać różne ceny, ale strona tego nie porządkuje.
- Artykuł zawiera też zdanie, że pakiet 5000 zł kosztuje mniej niż połowę etatu przy podanych widełkach wynagrodzenia 6000–9000 zł brutto. Bez kalkulacji dodatkowych kosztów takie porównanie nie wynika z danych w tekście.
- Działanie: zatwierdzić jeden katalog ofert, identyfikatory pakietów, zakres, netto/brutto, rozdzielenie budżetu reklam i warunki współpracy. Artykuły powinny pobierać ceny z tego samego źródła lub odsyłać do aktualnego cennika. Nie wybierać arbitralnie jednej z obecnych kwot.

**3. Sprzeczne opisy klientów i nieudokumentowane wyniki. Potwierdzone sprzeczności; prawdziwe zakresy wymagają źródeł projektu.**

- [Content marketing](https://www.fotz-studio.pl/content-marketing/strategia) opisuje Klagem jako markę kosmetyków premium, a [realizacja Klagem](https://www.fotz-studio.pl/realizacje/klagem) jako producenta systemów meblowych. RPPG w pierwszym miejscu jest firmą technologiczną, a w swojej realizacji Radą Polskich Przedsiębiorców Globalnych.
- Legnica pokazuje Cute Dumpling jako stronę gastronomiczną; [realizacja](https://www.fotz-studio.pl/realizacje/cute-dumpling) opisuje sklep z ozdobami świątecznymi. Podobne przypisanie do gastronomii znaleziono w 24 plikach źródłowych.
- Wyniki typu +180%, +280%, +340%, 15 tys. subskrybentów, 98% zadowolenia czy 160+ opinii wymagają raportu, okresu i definicji pomiaru. Audyt nie potwierdził ich prawdziwości ani nie stwierdza, że wszystkie są fałszywe. Na stronie głównej opis „Ostatnie 12 miesięcy” nie wskazuje dat granicznych.
- W kodzie realizacji Enea obraz z Unsplash ma alt „Stadion przed transformacją”. W portfolio należy użyć materiału z realizacji albo wyraźnie podpisać ilustracyjny charakter zdjęcia.
- Działanie: wspólny rejestr klientów, wykonanych prac i zatwierdzonych wyników. Do każdego wyniku dopisać okres i źródło; bez dowodu prezentować konkretny zakres pracy zamiast liczby. Zacząć od Content Marketing, Klagem, RPPG, Cute Dumpling i Enea.

**4. Pomiar i obsługa zapytań nie są potwierdzone od formularza do CRM. Luka potwierdzona w kodzie, dostarczenie wymaga osobnego testu.**

- `Podziekowanie.tsx:31–43` ma identyfikator zastępczy `AW-CONVERSION_ID/CONVERSION_LABEL`; zdarzenie uruchamiane jest przy wejściu na stronę podziękowania. Takie wejście nie jest samo w sobie potwierdzonym nowym zapytaniem.
- Na głównej stronie zaobserwowano skrypt Ahrefs Analytics; nie zaobserwowano inicjalizacji GA4/Google Ads. Nie oznacza to braku jakiejkolwiek analityki. Osobne landing pages kampanii mają własny pomiar Meta i wymagają odrębnego odbioru.
- Formularze wysyłają wiadomość przez `send-contact`, a CRM uruchamiany jest osobno, bez oczekiwania na wynik. Awaria zapisu CRM nie zmienia komunikatu sukcesu. Kalendarz ignoruje zwracane pole `error` z `notify-booking`, więc sam `try/catch` nie wykryje wszystkich błędów powiadomienia.
- Działanie: jeden identyfikator zgłoszenia, trwały zapis, ponawianie powiadomień/CRM, zdarzenie konwersji po potwierdzonym przyjęciu zgłoszenia i brak podwójnego zliczania. Następnie kontrolowany test: formularz → zapis → wiadomość → CRM → analityka. Na razie nie ma dowodu utraty rzeczywistego leada; jest ryzyko nieobsłużonej awarii.

**5. Search Console nadal nie potwierdza odczytu mapy. Stan potwierdzony, przyczyna nieustalona.**

Raport po odświeżeniu pokazuje `sitemap-index.xml`: „Nieznany”, „Nie udało się pobrać”, 0 wykrytych stron, zgłoszenie 2 października. Jednocześnie bieżący odczyt HTTP indeksu i wszystkich sześciu map kończy się 200, XML się parsuje, a wszystkie adresy używają właściwej domeny. Suma to **1073 URL-e**: główne 68, usługi 144, miasta 82, blog 741, realizacje 22, branże 16.

Udany HTTP ani wcześniejszy test aktywnego URL-a nie dowodzą sukcesu parsera map GSC. Następny krok: po przetworzeniu zgłoszenia ponownie sprawdzić raport; jeśli błąd się utrzyma, porównać czas ostatniej próby, logi żądań Googlebota, odpowiedzi CDN i dostępność map składowych. Nie zgłaszać masowo adresów ani nie zmieniać zabezpieczeń hostingu bez dowodu blokady. [Interpretacja stanów raportu — Google](https://support.google.com/webmasters/answer/7451001).

### P2 — jakość treści, grafika i rozwój techniczny

**6. Przeredagować teksty miast i skrócić powtarzalne sekcje SEO.** Na Legnicy występują m.in. „O nas w Legnica”, „Stron to nasza pasja”, „Www dla Twojej firmy i swojej strony www” oraz urwane zdanie „Internetowych z wykorzystaniem najlepszych narzędzi…”. To konkretne błędy redakcyjne. Wspólny komponent `CityIntroSection` skleja „O nas w” z nazwą w mianowniku, więc poprawka powinna objąć szablon. Oferta ma wyjaśniać rezultat, zawartość projektu, proces i obsługę zdalną, bez sugerowania niepotwierdzonych lokalnych biur. Strona `/content-marketing/strategia` zaczyna się rozbudowaną definicją; warto na początku wyjaśnić, co klient zamawia i otrzymuje.

**7. Uporządkować kompozycję mobilnej strony głównej. Rekomendacja UX, nie stwierdzona awaria.** Przy 390 × 844 px strona ma około 23 337 px wysokości. Sekcja usług zaczyna się ok. 3843 px, realizacje ok. 6632 px, kontakt ok. 17 618 px; po kontakcie następują jeszcze trzy długie sekcje tekstu SEO. Link kontaktowy w nagłówku i CTA już istnieją. Proponowany układ: oferta → 2–3 realne realizacje → proces → zweryfikowane opinie → kontakt; definicje i rozbudowane poradniki przenieść do odpowiednich podstron. Zmniejszyć pionowe odstępy i dekoracje na telefonie, ujednolicić karty usług/cenników, użyć własnych zdjęć zespołu i materiałów klientów. Zachować obecny ciemny styl marki. W 7 ponownie sprawdzonych widokach mobilnych nie wykryto poziomego przepełnienia ani błędów już załadowanych obrazów.

**8. Zmniejszyć koszt wideo na telefonie i wykonać osobny pomiar wydajności.** Plik `public/videos/fotz-reel.mp4` ma 9 831 246 bajtów, czyli ok. 9,8 MB. Mobilny DOM głównej zawiera dwa filmy z `autoplay`; nie zmierzono pełnego transferu ani wpływu na LCP. Rozważyć krótszy wariant mobilny, poster do czasu zbliżenia sekcji do ekranu i respektowanie ograniczenia animacji. GSC Core Web Vitals (aktualizacja 1.10) pokazuje za mało danych z 90 dni zarówno dla telefonu, jak i komputera. Nie ma podstaw do podania wyniku Lighthouse ani deklaracji „CWV zaliczone”.

**9. Dokończyć zasoby i proces newslettera.** [Zasoby](https://www.fotz-studio.pl/zasoby) mają sześć kart z komunikatem niedostępności. Nowa checklista kampanii działa pod `/downloads/checklista-kampanii-fotz-studio.pdf`, ale katalog nadal kieruje użytkownika do zapytania o materiał. Podpiąć gotowy PDF i dopasować opis do rzeczywistej zawartości; inne materiały udostępnić dopiero po ich przygotowaniu. Newsletter w stopce wysyła prośbę e-mailem do właściciela; zbadana ścieżka nie zapisuje subskrybenta u dostawcy newslettera. Obecny komunikat o prośbie jest uczciwy, lecz automatyczny zapis, potwierdzenie i wypisanie wymagają dopracowania lub potwierdzenia procesu ręcznego.

**10. Zapewnić HTML z treścią dla najważniejszych stron.** W pięciu aktualnie pobranych dokumentach HTTP element `#root` jest pusty; metadane są w HTML, a fallback `noscript` ma 215 znaków. Właściwa oferta i linki powstają po uruchomieniu JavaScript. Rozważyć SSG/SSR najpierw dla strony głównej, usług, realizacji i najważniejszych poradników. To ograniczenie techniczne, nie dowód braku indeksowania — Google potrafi renderować JS, a ów proces wymaga dodatkowego etapu. [Wskazówki Google o JavaScript i prerenderingu](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics).

**11. Ograniczyć rozproszenie tematyczne i uporządkować aktualizacje CMS.** Blog stanowi 741 z 1073 adresów w mapach. Sama liczba nie jest błędem. Warto sprawdzić, które poradniki odpowiadają zapytaniom potencjalnych klientów, które są dublowane, a które techniczne tematy mają realny ruch i sens dla sprzedaży. Nie usuwać automatycznie artykułów z rokiem 2024 ani nie zmieniać samych dat. Dla nowych wpisów CMS aktualizacja statycznych metadanych/map wymaga synchronizacji i wdrożenia — potrzebna kontrola zgodności po publikacji.

**12. Naprawić automatyczne kontrole jakości przed kolejnymi zmianami.** Workflow SEO jest uruchamiany tylko ręcznie i na początku wymaga `public/sitemap.xml`, którego nie ma; projekt używa `sitemap-index.xml`. Sprawdzanie canonicali obejmuje jedynie główną mapę. Workflow TypeScript wywołuje `tsc --noEmit` na konfiguracji z `files: []` i references. Diagnostyczne uruchomienie tej komendy z `--listFiles` zakończyło się kodem 0 i bez listy plików — nie sprawdza kodu aplikacji. Zmienić na kontrolę właściwego projektu, dołączyć testy logiki oraz wszystkie mapy i wymagane sprawdzenia dla PR. Wcześniejsze ręczne testy PR #17/#18 pozostają oddzielnym dowodem, nie naprawiają samego workflow.

### Proponowana kolejność wykonania i odbiór

1. **Asystent i dane firmy:** poprawny adres, 15 minut, spójne linki; ceny tylko z zatwierdzonego katalogu.
2. **Oferta i portfolio:** ceny Legnicy/social media, branże klientów, dowody wyników, realne zdjęcia. Potrzebne materiały właściciela: aktualny cennik, zakresy umów i raporty do publikowanych liczb.
3. **Strony z zainteresowaniem w GSC:** Legnica → Poznań → content marketing; dopiero później następne miasta.
4. **Leady i pomiar:** kontrolowane zgłoszenie, odbiór wiadomości i rekordu CRM, jedno zdarzenie konwersji na przyjęte zapytanie.
5. **Mobilna kompozycja, zasoby, wideo oraz renderowanie:** wdrażać etapami i porównywać ten sam zestaw stron/urządzeń. Równolegle naprawić CI.
6. **GSC po ponownym przetworzeniu:** potwierdzić stan mapy i inspekcje reprezentatywnych adresów; wyniki oceniać na porównywalnych okresach po wdrożeniu, z uwzględnieniem opóźnienia danych.

### Dowody i granice weryfikacji

Nowe dowody lokalne znajdują się w `docs/seo/qa-2026-10-01/audit-next/` (folder wyłączony z publikacji Git): `production-pages.json`, `legnica-dom.json`, `source-patterns.json`, `live-http.json`, `home-resources.json`, `chat-address.txt/.png`, `legnica-mobile.png`, `home-mobile.png`, `gsc-performance-queries.txt`, `gsc-performance-pages.txt`, `gsc-sitemap-current.txt/.png`, `gsc-cwv.txt`.

Potwierdzono: niespójności tekstów/cen, lokalną odpowiedź asystenta, stan map GSC, prawidłowe pobranie XML, próbkę widoków mobilnych i wskazane ścieżki kodu. Nie potwierdzono: poprawności wszystkich deklarowanych KPI/cen, dostarczenia prawdziwego zgłoszenia, zapisu u dostawcy newslettera, pomiaru konwersji w kontach reklamowych, wyników terenowych CWV ani wzrostu pozycji po ostatnim wdrożeniu.

---

## Archiwum: audyt treści i SEO podstron z 1 października 2026

Poniższa część dokumentuje wcześniejszy etap i stan jego gałęzi. Nie należy traktować opisanych tam historycznych domen ani braków jako nowych ustaleń o dzisiejszej produkcji.

Gałąź: `claude/nice-darwin-b032ah` (od `main` @ `5ab99d8`). Zakres: wyłącznie `src/pages/**` + ten raport.
Pliki `src/components/**`, `src/index.css`, `scripts/prerender-seo.mjs`, `src/App.tsx` nie były edytowane (równolegle zmienia je Codex).

## 1. Inwentaryzacja

| Pozycja | Liczba |
|---|---|
| Wpisy `<Route>` w `src/App.tsx` | **1051** |
| w tym trasy statyczne (bez parametrów) | 1047 |
| w tym trasy dynamiczne / wildcard (`/blog/:slug`, `/agencja-social-media/:clusterSlug`, `/akademia/*`, `*`) | 4 |
| w tym przekierowania `Redirect301` | 38 |
| Pliki stron `src/pages/**/*.tsx` | **1014** |
| Pliki stron bez trasy w App.tsx (martwy kod, nie ruszałem) | 7: `AgencjaMarketingowaHub`, `Akademia`, `AkademiaLanding`, `BlogEcommercePoradnik`, `BlogJakWybracAgencje`, `BlogMVPCoToJest`, `clusters/UslugiCluster` |
| Trasy wskazujące na brakujący plik | 0 |
| Przekierowania do nieistniejącej trasy | 0 |

## 2. Faktyczny zakres kontroli (ważne)

To był **audyt statyczny kodu źródłowego**, wykonany skryptem nad wszystkimi 1051 trasami i 1014 plikami stron. **Nie był to odbiór przeglądarkowy** — strony nie były renderowane, nie sprawdzano wyglądu, Lighthouse, konsoli ani danych Google Search Console (brak dostępu z tej sesji; link do GSC przesłany przez właściciela nie został odczytany).

Co sprawdzono skryptem dla każdej strony:
- obecność `SEOHead`, `title`, `description`, `canonical` (literal lub zmienna);
- zgodność ścieżki `canonical` z trasą z App.tsx;
- zgodność `url` w `ArticleSchema` z `canonical`;
- liczba `<h1>` / `<motion.h1>` w pliku;
- wszystkie linki wewnętrzne (`to=`, `href=`, `url:`, `link:`, `path:`) względem listy tras, w tym linki do tras-przekierowań;
- URL-e w `BreadcrumbSchema` względem listy tras;
- obrazy `https://fotz.pl/...` w schematach względem `public/`;
- duplikaty `title`/`description` między stronami, długości, tytuły/opisy zakończone „…”;
- miasto w `title`/`description` vs miasto w slug-u trasy (heurystyka);
- numery telefonów-placeholdery (uzupełnienie od Codexa).

Czego **nie** sprawdzono: poprawność merytoryczna treści ~1000 artykułów, literówki w treści akapitów (sprawdzono tylko tytuły SEO, breadcrumby i etykiety), działanie formularzy, schematy JSON-LD pod walidatorem Google, H1 renderowane przez komponenty wspólne (`Hero`, `ServicePageTemplate`) — tylko potwierdzono w kodzie, że `Hero.tsx`/`HeroV3.tsx` zawierają `<h1>`.

## 3. Wykonane poprawki (149 plików w `src/pages/**`)

### 3.1 Canonical / schema URL niezgodne z trasą
| Strona (trasa) | Było | Jest |
|---|---|---|
| `/agencja-marketingowa/elblag` | `canonical="/agencja-marketingowa/elblag"` (relatywny) | pełny URL `https://fotz.pl/...` |
| `/admin/topical-map` (noIndex) | canonical relatywny | pełny URL (spójność; i tak nierenderowany przy noIndex) |
| `/blog/customer-health-score-co-to` | canonical, ArticleSchema i breadcrumb → `/blog/customer-health-score-co-to-jest-jak-zbudowac` (trasa nie istnieje, 404) | → `/blog/customer-health-score-co-to` |
| `/blog/co-to-jest-cms` | ArticleSchema `url` → `/blog/cms-co-to-jest` (brak trasy) | → canonical |
| `/blog/marketing-automation` | ArticleSchema `url` + breadcrumb → `/blog/automatyzacja-marketingu-narzedzia` (brak trasy), nazwa „Automatyzacja marketingu narzedzia” | → `/blog/marketing-automation`, nazwa „Marketing automation” |
| `/realizacje/fps-cegielski` | breadcrumb + ArticleSchema → `/realizacje/fps-poznan` (brak trasy) | → `/realizacje/fps-cegielski` |
| `/blog/event-driven-architecture-co-to-jest-jak-wdrozyz` i `/blog/event-driven-architecture-co-to-jest-kafka-rabbitmq-event-sourcing` | identyczny `title` „Event-Driven Architecture \| Fotz Studio” na dwóch różnych stronach | rozróżnione: „…— jak wdrożyć EDA?” / „…— Kafka, RabbitMQ, CQRS” |

Nie zmieniono (celowe aliasy canonical na inną istniejącą stronę, zgodnie z uwagą Codexa): `/blog/reklama-programatyczna-co-to` → `/blog/programmatic-advertising-co-to` (moja wcześniejsza zmiana cofnięta), API gateway, zero trust, NPS/OKR, `/uslugi/audyt-seo` → `/seo/audyt`.

### 3.2 Linki wewnętrzne do nieistniejących tras (naprawione → istniejąca trasa)
| Plik | Zły link | Poprawiony na |
|---|---|---|
| AgencjaKreaTywnaPoznan | `/uslugi/social-media/poznan`, `/uslugi/produkcja-filmow/poznan` | `/social-media/poznan`, `/uslugi/produkcja-filmow` |
| AgencjaMarketingowaCzestochowa, …Legnica | `/social-media/czestochowa`, `/social-media/legnica` | `/social-media` (jak na pozostałych stronach miejskich) |
| AgencjaMarketingowaGdynia, …Gdansk | `/agencje-marketingowe` | `/agencja-marketingowa` |
| AgencjaMarketingowaKielce | breadcrumb `https://fotz.pl/agencja` | `/agencja-marketingowa` |
| AgencjaSEOWarszawa, AgencjaSEOWroclaw | `/agencja-seo` | `/seo/pozycjonowanie` (jak AgencjaSEOKrakow) |
| BlogContentMarketingCoTo | `/uslugi/pozycjonowanie-stron-internetowych` | `/uslugi/pozycjonowanie` |
| BlogDronWMarketinguFirmy, BlogFilmRekrutacyjnyEmployerBranding | `/produkcja-video-poznan` | `/uslugi/produkcja-filmow` |
| BlogZdjeciaKorporacyjneVsReklamowe | `/fotografia-biznesowa` | `/uslugi/fotografia` |
| CaseStudyStronaWWW, CaseStudyEcommerceCRO, CaseStudyLocalSEO | `/case-studies` | `/realizacje` |
| DlaKogoFirmyLokalne, DlaKogoInstytucje | `/realizacje/graf`, `/realizacje/fps` | `/realizacje/graf-tapicerstwo`, `/realizacje/fps-cegielski` |
| FacebookAdsKatowice, FacebookAdsLodz | `/uslugi/seo/katowice`, `/uslugi/seo/lodz` | `/uslugi/pozycjonowanie/{miasto}` |
| Pozycjonowanie (`/seo/pozycjonowanie`) | 9 linków `/pozycjonowanie-{miasto}` (brak tras), renderowanych jako „Strona w przygotowaniu” | `/seo/pozycjonowanie-{miasto}` lub `/uslugi/pozycjonowanie/{miasto}`; wszystkie miasta mają strony, więc kafelki są teraz linkami |
| SocialMedia (`/social-media/obsluga`) | Warszawa → `/social-media-warszawa` (brak trasy, „Wkrótce”) | `/social-media/warszawa` (strona istnieje, jest linkiem). Pozostałe miasta nadal „Wkrótce” — brak stron |
| PozycjonowanieKalisz, …Plock, …Legnica, …Torun, …Zgorzelec | `/pozycjonowanie`, `/pozycjonowanie/{duże miasto}`, `/pozycjonowanie/torun` | `/uslugi/pozycjonowanie`, `/uslugi/pozycjonowanie/{miasto}` |
| PozycjonowanieSosnowiec, …Walbrzych | `/uslugi/pozycjonowanie/gliwice`, `/…/zabrze` | `/pozycjonowanie/gliwice`, `/pozycjonowanie/zabrze` |
| PozycjonowanieSosnowiec, …Walbrzych, …Gliwice, …Elblag | breadcrumb własny `https://fotz.pl/uslugi/pozycjonowanie/{miasto}` | `https://fotz.pl/pozycjonowanie/{miasto}` (faktyczna trasa) |
| SklepyInternetowe | `/uslugi/sklepy-internetowe/wroclaw`, `/gdansk` (brak stron) — usunięte z listy miast; `/uslugi/meta-ads` | `/performance-marketing/meta-ads` |
| SklepyInternetowePoznan | `/uslugi/ecommerce` | `/uslugi/sklepy-internetowe` |
| StronyInternetoweKielce, …Rzeszow, …Torun, …Walbrzych | `/strony-internetowe`, `/strony-internetowe/rzeszow`, `/strony-internetowe/torun` | `/uslugi/strony-internetowe`, `/uslugi/strony-internetowe/{miasto}` |
| UslugiIdentyfikacjaWizualna | `/uslugi/kampanie-reklamowe` | `/kampanie-reklamowe` |
| KompleksowaObsluga | breadcrumb `https://fotz.pl/kompleksowa-obsluga` | `/kompleksowa-obsluga-marketingowa` |

### 3.3 Linki wewnętrzne do tras-przekierowań 301 (54 wystąpienia → cel bezpośredni)
- `/agencja-marketingowa-{miasto}` → `/agencja-marketingowa/{miasto}` (23 wystąpienia w stronach miejskich, blogach i sklepach),
- `/landing-page` (301 → artykuł blogowy) w listach „powiązane usługi” → strona usługi `/uslugi/landing-page` (21 plików: GoogleAds, FacebookAds, TikTokAds, YouTubeAds, StronyInternetowe, SEOOffPage, CMEbooki, blogi…),
- `/blog/copywriting-landing-page`, `/blog/influencer-marketing-polska`, `/blog/instagram-reels-vs-tiktok`, `/blog/tiktok-dla-biznesu`, `/content-marketing/tresci-seo`, `/akademia` → cele przekierowań.

### 3.4 Obrazy w schematach wskazujące na nieistniejące pliki (36 wystąpień)
- 30 artykułów: `ArticleSchema image` / JSON-LD `image` typu `https://fotz.pl/og-*.jpg`, `/images/...`, `/img/...` — pliki nie istnieją w `public/` → zastąpione istniejącym `https://fotz.pl/og-image.jpg`.
- 6 stron: `https://fotz.pl/logo.png` (brak) → `https://fotz.pl/logo-fotz.jpg` (istnieje).
- CaseStudyKlagem: `https://fotz.pl/portfolio/klagem.png` (brak) → URL z importowanego assetu `klagemImg`.

### 3.5 Tytuły SEO urwane „…” (artefakt generatora) i literówki — 17 stron
Przepisane na pełne tytuły ≤ 60 znaków (sens zachowany): BlogContentMarketing, BlogCopywritingDlaSEO, BlogCssAnchorPopoverCoTo, BlogCssContainerLayerCoTo, BlogFotografiaArchitektura, BlogGoogleMyBusiness, BlogMarketingDlaSalonuPieknosci, BlogMarketingLokalny, BlogMswTestingCoTo, BlogPinterestDlaFirmy, BlogProjektowanieStron, BlogReactFlowCoTo, BlogRetargetingPoradnik, BlogSEOTechniczne, BlogSklepInternetowyNaWlasnej („Wlasny… Porzadnik…” → „Własny… Poradnik”, także w headline i alt), BlogUXAudit, BlogVideoMarketingROI.

### 3.6 Nazwy miast bez diakrytyków w breadcrumbach / etykietach
„Torun” → „Toruń” (PozycjonowanieTorun), „Plock” → „Płock” (AgencjaMarketingowaPlock), „Walbrzych” → „Wałbrzych” (StronyInternetoweWalbrzych), „Lodz” → „Łódź” (TikTokAdsLodz: etykieta i `areaServed`).

### 3.7 Telefony-placeholdery (uzupełnienie od Codexa; zweryfikowany numer ze stopki: **+48 790 814 814**)
Zastąpione w treści widocznej, schematach `telephone` i `tel:`; przyciski „Zadzwoń” bez linku zamienione na `<Button asChild><a href="tel:+48790814814">`:
- `+48 61 123 45 67` — AgencjaMarketingowaPoznan (2×)
- `+48 (22) 123 45 67` — AgencjaMarketingowaWarszawa (3×)
- `+48 123 456 789` / `+48123456789` — AgencjaMarketingowaGdansk (3×), …Bydgoszcz, …Elblag, GoogleAdsBydgoszcz (2×), GoogleAdsSzczecin, GoogleAdsBialystok, GoogleAdsKielce, FacebookAdsTorun (schema), CennikPozycjonowania, KampanieReklamowe, StronyInternetowePodkarpacie, StronyInternetoweWielkopolska (2×)
- `+48 12 345 6789` / `+48-12-345-6789` — AgencjaMarketingowaWroclaw (2×)
- `+48 24 262 0000` — AgencjaMarketingowaPlock
- `telephone: "+48"`, `"+48 (kontakt)"` — AgencjaMarketingowaJeleniaGora, …Zgorzelec (schema)

Zostawione celowo: `placeholder="+48 123 456 789"` w polach formularzy (Kontakt, Konsultacja, Kariera, GeneratorBriefu), przykładowe numery w treści edukacyjnej (BlogPozycjonowanieGoogleMaps, BlogColdEmailCoTo) i w próbkach kodu (BlogSupabaseDeepDiveCoTo, BlogKonvaCanvasCoTo, BlogAwsCoTo).

### 3.8 Responsywność (punktowo, wg wskazania Codexa)
- `/agencja-marketingowa/poznan`: hero — dwa przyciski w `flex` bez zawijania → `flex-col sm:flex-row`, przyciski `w-full sm:w-auto`.
- `/blog/brand-ambassador-co-to`: długi badge kosztów (`flex-shrink-0 ml-4`) wypychał nagłówek → na mobile układ kolumnowy, badge `self-start`, na ≥sm ograniczony do 50% szerokości.

## 4. Pozostałe niepewności faktograficzne / do decyzji właściciela (NIE zmieniane)

1. **Domena canonical na `/realizacje/dawid-edu`** (CaseStudyDawidEdu): canonical, breadcrumby i `ogImage` używają `https://www.fotz-studio.pl/...`, podczas gdy całość witryny używa `https://fotz.pl`. Zgodnie z instrukcją czekamy na decyzję właściciela.
2. **Fikcyjne adresy biur** w stopkach stron miejskich, np. AgencjaMarketingowaPlock: „ul. Grodzka 10, 09-400 Plock” (telefon poprawiony, adres zostawiony bez dowodów). Warto przejrzeć wszystkie `AgencjaMarketingowa*` pod kątem `address`/`PostalAddress` w JSON-LD (np. Wrocław, Warszawa, Gdańsk deklarują lokalne adresy).
3. **Statystyki w hero stron miejskich** (np. Poznań: „ponad 200 projektów”, „500+ klientów”, „97% zadowolonych”) — niezweryfikowane, nie dopisywałem ani nie usuwałem.
4. **Trasa `/blog/dług-techniczny-co-to`** (BlogTechDebtCoTo) zawiera „ł” w ścieżce; canonical jest procentowo zakodowany i formalnie zgodny, ale slug z polskim znakiem to ryzyko w sitemapie/GSC. Wymaga zmiany w App.tsx + redirect (poza moim zakresem).
5. **Literówka w slugu trasy** `/blog/event-driven-architecture-co-to-jest-jak-wdrozyz` (i `…zero-trust…-jak-wdrozyz`, `data-mesh…-jak-wdrozyz`) — „wdrozyz” zamiast „wdrozyc”. Zmiana wymaga App.tsx + 301.
6. **Podwójne trasy do tego samego komponentu**: np. `/strony-internetowe/kielce` i `/uslugi/strony-internetowe/kielce` → `StronyInternetoweKielce` (canonical wskazuje pierwszą). Analogicznie aliasy blogowe. Do decyzji, czy zostawić jako aliasy, czy dodać 301.
7. **`/social-media/obsluga`**: kafelki miast Kraków, Wrocław, Gdańsk, Łódź, Katowice, Szczecin, Bydgoszcz, Lublin wciąż „Wkrótce” — nie ma stron social media dla tych miast (hrefy w kodzie `/social-media-{miasto}` są martwe, ale nie renderują się jako linki).
8. **`GeneratorBriefu`**: skrypt wykrył 2× `<h1>` — drugi jest w szablonie HTML generowanego dokumentu (string), nie w DOM strony. Nie jest to błąd.
9. **`Index`**: brak `<h1>` w pliku strony — H1 renderuje komponent `Hero`/`HeroV3` (potwierdzone w kodzie komponentu).

## 5. Problemy systemowe do obsługi po stronie Codexa / generatora (nie naprawiane punktowo)

- **327 opisów meta** kończy się „…” wpisanym w źródle (generator ucinał do ~155 znaków) i **312 tytułów** ma > 60 znaków (SEOHead sam ucina do 57 + „...”). Codex potwierdził, że generator obsługuje już pełne tytuły — do regeneracji hurtowej.
- **BreadcrumbSchema z relatywnymi URL-ami** (`url: "/"`, `"/blog"`) w 436 stronach — JSON-LD `item` powinien być absolutny. Najprościej dodać prefiks `https://fotz.pl` w `BreadcrumbSchema` (komponent Codexa) zamiast edytować 436 plików.
- Niespójny branding w tytułach: „| Fotz Studio”, „| Fotz.pl”, „| fotz.pl”, „| Fotz”, „- fotz studio”. Do ujednolicenia w generatorze.
- 7 nieużywanych plików stron (sekcja 1) — kandydaci do usunięcia po potwierdzeniu.
- Wszystkie strony miejskie `AgencjaMarketingowa*` mają podobne wzorce fikcyjnych danych (telefon naprawiony, adresy — patrz pkt 4.2).

## 6. Walidacja

| Krok | Wynik |
|---|---|
| `npx tsc --noEmit -p tsconfig.app.json` | OK (exit 0) |
| `npx eslint <149 zmienionych plików>` | OK (exit 0) |
| `npm run build` (`vite build` + `scripts/prerender-seo.mjs`) | patrz sekcja 6.1 |
| Ponowny przebieg skryptu audytu po poprawkach | brakujące trasy w linkach: 0 (poza przykładami w BlogRobotsTxtCoTo i martwymi hrefami „Wkrótce”); linki do 301: 0; brakujące assety schematów: 0; duplikaty title: 0; tytuły z „…”: 0; ArticleSchema url ≠ canonical: 0 |

Nie przepisywano żadnych testów (repo nie ma testów jednostkowych; skrypty: `lint`, `build`).

Sugestia dla GSC: po wdrożeniu porównać raport „Strony” → „Nie znaleziono (404)” i „Strona z przekierowaniem” z listą z sekcji 3.2–3.3 oraz „Duplikat, Google wybrał inną stronę kanoniczną” z aliasami z sekcji 4.6.

---

# Etap 2 (ten sam dzień, osobny commit) — urwane opisy meta, uszkodzone tytuły, martwe CTA

Zakres jak wyżej: tylko `src/pages/**` + ten raport. Bez zmian domeny, adresów, cen, wyników i bez nowych obietnic. Zmienione pliki: **521** w `src/pages/**`.

## 7. Opisy meta (327 urwanych „…” → pełne zdania)

Zasada: opis ma być pełnym zdaniem opisującym właściwą stronę, bez ucinania do 155 znaków (ucinanie w źródle zostawiało urwane frazy typu „Kompletny przewodnik po…”). Źródło treści dla każdego opisu:

| Źródło nowego opisu | Liczba stron | Jak |
|---|---|---|
| Pełny opis z `ArticleSchema description` tej samej strony (kompletne zdanie, ≥ 80 znaków, zgodne z H1) | **239** | przeniesiony 1:1 do `SEOHead description` |
| Napisany ręcznie na podstawie H1, pierwszego akapitu i FAQ strony | **88** | lista plików: AIMarketing, AgencjaKreaTywnaPoznan, AgencjaMarketingowa{Koszalin, Plock, Poznan, Sosnowiec, Zgorzelec}, AgencjaMarketinguInternetowego, Akademia, Blog, BlogContentMarketingPoradnik, BlogFotografiaArchitektura, BlogFotografiaProduktowa, BlogInstagramDlaFirmy, BlogKosztStrony, BlogLandingPageVsStrona, BlogMarketingNieruchomosci, BlogPersonalBrandingLinkedIn, BlogReelsVsTikTok, BlogSEOLokalnePoznan, BlogSocialMediaDlaFirm, BlogSprzedazOnline, BlogStronaInternetowaDlaRestauracji, BlogTanieStrony, BlogTikTokBiznes, CMVideoContent, CaseStudyFriendlyGas, Cennik, CennikStronInternetowych, DlaKogo, DlaKogo{Ecommerce, Instytucje, MarkiPremium}, FAQ, FacebookAdsWarszawa, GeneratorBriefu, GoogleAds, IdentyfikacjaWizualna, KalkulatorCen, KalkulatorROI, KampanieReklamowe, Kariera, KompleksowaObsluga, Konsultacja, Kontakt, LinkedInAds, LogoIBranding, MarketingInternetowy, ONas, Poradniki, Pozycjonowanie, Pozycjonowanie{Bialystok, Legnica, Poznan, Sosnowiec, Torun, Walbrzych, Warszawa}, SEOCopywriting, SEOLinkBuilding, SklepyInternetowe, SklepyInternetowe{Poznan, Warszawa}, SlownikMarketingowy, SocialMedia, SocialMediaWarszawa, SpotyReklamowe, StronaInternetowaDla{Fotografa, Prawnika, Stomatologa, Trenera}, StronyInternetowe{Bialystok, Czestochowa, Podkarpacie, Torun, Zabrze, ZielonaGora}, TikTokAds, TikTokAds{Gdansk, Krakow, Lodz, Poznan, Warszawa}, Uslugi, UslugiIdentyfikacjaWizualna, UslugiLandingPage, Wizualizacje3D, YouTubeAds |

W opisach ręcznych użyto wyłącznie faktów już obecnych na danej stronie (np. „od 499 zł netto” na cennikach, „od 400 zł/mies.” na stronach Ads, „wzrost konwersji o 140%” w case study Friendly Gas). Nie dodano nowych liczb, gwarancji ani referencji. Przy okazji poprawiono polskie znaki w opisach, które ich nie miały (Koszalin, Płock, Zgorzelec, Toruń, Warszawa social media, cold email, fotografia biznesowa), literówki „Dowiedź się”, „białohat SEO” → „white hat SEO”, „Kompleksny” → „Kompleksowy”, „firm z Szczecina” → „firm ze Szczecina”.

## 8. Tytuły SEO

- **240 tytułów** „zredukowanych do hasła” (np. „Incident Management | Fotz Studio”, „Klagem | Fotz Studio”, „Astro 5 | Fotz Studio”) przywrócono do pełnej formy z `ArticleSchema title` tej samej strony (tożsamej z H1 / tematem artykułu), np. „Incident Management — co to jest, severity, PagerDuty, postmortem, on-call SLA?”. Gdy pełny tytuł ma ≤ 46 znaków, dodano sufiks „| Fotz Studio”; dłuższych nie ucinano (zgodnie z ustaleniem, że generator obsługuje pełne tytuły).
- **11 tytułów/opisów bez polskich znaków** przepisano poprawnie: BlogB2BMarketingCoTo, BlogBrandingCoTo, BlogCertyfikatSSL, BlogCustomerSuccessCoTo, BlogFaktoringCoToJest, BlogFreemiumCoTo, BlogMarketingAutomation, BlogOmnichannelCoTo, BlogProgrammaticCoTo, BlogStorytellingCoTo, BlogVATCoToJest.
- 52 krótkie tytuły stron usługowych/miejskich bez `ArticleSchema` (np. „Agencja Marketingowa Poznań | Fotz Studio”, „Dropshipping w Polsce 2025 | Fotz Studio”) uznano za poprawne i zostawiono.

## 9. Etykiety i literówki w treści

| Plik | Było | Jest |
|---|---|---|
| AgencjaMarketingowaLegnica, …Czestochowa | „Social media i mediach społecznościowych” | „Social media i marketing w mediach społecznościowych” |
| AgencjaMarketingowaLegnica, …Czestochowa | „Wdrażać i realizacja kampanii” | „Wdrożenie i realizacja kampanii” |
| AgencjaMarketingowaRzeszow | CTA „Zabook Bezpłatną Konsultację” | „Zarezerwuj Bezpłatną Konsultację” |
| EmailMarketing | CTA „Zaczęajmy od konsultacji” | „Zacznijmy od konsultacji” |
| BlogMarketingDlaFirmy | CTA „Pobrań poradnik (bezpłatnie)” | „Pobierz poradnik (bezpłatnie)” |
| AgencjaMarketingowaKoszalin | „Specjalisci Pomorza Srodkowego” | „Specjaliści Pomorza Środkowego” |
| AgencjaMarketingowaKrakow (5×), …Warszawa (2×) | `&amp;` w literałach JS (renderowało się dosłownie „&amp;”) | „&” |
| BlogPandaCssUnoCoTo, BlogJsProposalsCoTo | `\d`, `\.` w stringu z przykładem kodu (renderowało „d” / „.”, błąd ESLint `no-useless-escape`) | `\\d`, `\\.` |

## 10. Martwe CTA (przycisk bez `href`/`onClick`/`asChild`) — 78 przycisków w 51 plikach

Wykryte skryptem: `<Button>` z tekstem typu Wycena / Konsultacja / Zadzwoń / Zamów / Skontaktuj, nieopakowany w `<Link>`/`<a>`, poza formularzem i bez handlera. Poprawka: `<Button asChild …><Link to="/kontakt">…</Link></Button>` (73 przyciski), `…<Link to="/poradniki">` dla „Pobierz poradnik” (1), `…<a href="tel:+48790814814">` dla „Zadzwoń…” (5, w tym dwa z kolejnymi placeholderami telefonu: Kraków „+48 12 XXX XX XX”, Rzeszów „+48 721 234 567”; dodatkowo tekst „+48 56 XXX XXXX” w StronyInternetoweTorun). W dwóch plikach (FacebookAdsGdansk, FacebookAdsPoznan) dodano import `Link` z react-router-dom. Pozostawiono celowo przyciski formularzy (`type="submit"`) i przyciski z `onClick`.

## 11. Walidacja etapu 2

| Krok | Wynik |
|---|---|
| `npx tsc --noEmit -p tsconfig.app.json` | OK (exit 0) |
| `npx eslint <521 zmienionych plików>` | OK, 0 błędów (pozostało 1 ostrzeżenie `react-hooks/exhaustive-deps` w KalkulatorCen — istniało przed zmianami, nie dotyczy treści) |
| `npm run build` (`vite build` + prerender) | OK (exit 0, 1002 stron wyrenderowanych, 1m53s) |
| Skrypt audytu po zmianach | opisy zakończone „…”: 0; tytuły zakończone „…”: 0; martwe CTA: 0; linki do nieistniejących tras: 0 (bez zmian wobec etapu 1) |

Uwaga: po przywróceniu pełnych tytułów rośnie liczba tytułów > 60 znaków (470) i opisów > 155 znaków (300). To zamierzone — pełne zdania zamiast urwanych; ewentualne skracanie na wyjściu to decyzja po stronie `SEOHead` (komponent Codexa).
