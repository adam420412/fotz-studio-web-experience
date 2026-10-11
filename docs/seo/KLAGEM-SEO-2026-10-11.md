# KLAGEM, jakość treści i Search Console — 11 października 2026

## Zakres

Rozbudowano istniejącą realizację `/realizacje/klagem` o konfigurator mebli modułowych, rzeczywisty zrzut interfejsu, opis funkcji i link do `https://klagem.pl/konfigurator/`. Podczas odczytu publicznego narzędzia potwierdzono wybór gotowego układu, wymiarów i formy modułu, podgląd 3D, orientacyjną wycenę oraz dostępność zapisu projektu. Nie składano zamówienia ani zapytania na stronie klienta.

Wspólna sekcja przedstawia KLAGEM na głównej, ofercie WWW i e-commerce, stronach odbiorców e-commerce/retail, usłudze wizualizacji 3D oraz w poradniku. Korzysta z trzech wersji WebP i nie osadza działającej aplikacji klienta. Podgląd jest dostępny przez wyraźny link zewnętrzny. CTA do kontaktu zachowuje usługę WWW i wariant „Konfigurator produktów 3D”.

Usunięto przypisanie KLAGEM do odszkodowań i kosmetyków, deklarowane bez źródła wzrosty konwersji/rozpoznawalności tej marki oraz jej nietrafną prezentację jako przykładu branży prawnej. Dwie sekcje z modelem regulatora zastąpiono rzeczywistą realizacją KLAGEM. W ofercie e-commerce zastąpiono pozorne wyniki klientów konkretnym zakresem wdrożenia, kosztami zależnymi od funkcji, etapami i pytaniami do wyceny. Z dwóch dotykanych stron branżowych usunięto niepotwierdzone liczniki wyników; ich stara implementacja łamała też reguły hooków React.

## Powiązanie z GSC

Zapis raportu z 8 października (`docs/seo/qa-2026-10-08/discovered.txt`) zawierał `/blog/wizualizacje-3d-ecommerce` w grupie wykrytych bez indeksacji. Istniejący poradnik zawierał nieudokumentowane obietnice „40% wyższej konwersji”, ceny i pozorny case study. Zastąpiono go treścią o decyzji render/podgląd/konfigurator, rzeczywistym KLAGEM, danych potrzebnych do wyceny, odbiorze i pomiarze zapytań. Zachowano URL i pierwotną datę publikacji; data istotnej aktualizacji jest jawna i zgodna z Article schema. FAQ pochodzi z jednej listy używanej przez HTML i schema.

To kontynuacja jakościowa zapisanego audytu, nie dowód, że problem indeksacji został rozwiązany. Zastosowana zasada: autentyczne doświadczenie i pomoc w decyzji, zgodnie z [zaleceniami Google dotyczącymi przydatnych treści](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Dostęp do Google

11 października konto użytkownika początkowo nie miało potwierdzonej własności `sc-domain:fotz-studio.pl`. Na wyraźne polecenie użytkownika dodano dokładnie jeden TXT w strefie DNS domeny głównej, TTL 14400. Porównano zapis przed i po zmianie. Google Public DNS zwraca nowy rekord. Pierwsza próba w GSC widziała jeszcze stary zestaw TXT; sam zapis rekordu nie oznacza zakończenia weryfikacji. Zgodnie z [instrukcją Google](https://support.google.com/webmasters/answer/9008080) usługa domenowa wymaga weryfikacji DNS, a plik TXT w repo nie jest jej zamiennikiem.

## Odbiór

Walidacja lokalna: 92/92 testy, TypeScript i lint wszystkich zmienionych komponentów poprawne. Pełny lint repo wykazał historyczne błędy poza zakresem; nie przedstawiamy go jako zaliczonego. Build: 1074 dokumenty, 1071 pełnych treści, 0 błędów renderowania. Audyt: 1072 unikalne URL-e map, 134832 odnośniki w HTML i 3920 linków źródłowych bez błędnych celów; 0 błędów galerii. Kontrola UI: główna i oferta e-commerce przy 390 px w ciemnym motywie; realizacja, poradnik i oferta przy 320 px w jasnym, po jednym H1 i bez poziomego przepełnienia. CTA ustawia w formularzu usługę WWW oraz wariant konfiguratora. Nie wysyłano testowego formularza. Publikacja jest osobnym etapem odbioru. Dowody UI, DNS, buildów oraz brief Meta Ads/CRM pozostają lokalnie w `output/lead-audit-2026-10-11/`. Brief nie jest potwierdzeniem integracji Facebook Instant Forms ani odbioru CAPI; test rezerwacji bez zgód reklamowych tego nie obejmował. Nie zmieniano kampanii, budżetów ani produkcyjnego backendu.
