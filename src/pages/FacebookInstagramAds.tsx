import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/performance-marketing/meta-ads";

const scope = [
  {
    title: "Plan kampanii Meta Ads",
    text: "Zaczynamy od celu biznesowego: zapytania o usługę, sprzedaż w e-commerce, zapisy na wydarzenie lub do placówki edukacyjnej. Do celu dobieramy rodzaj kampanii reklamowej Meta, grupy docelowe, miejsca emisji i budżet reklamowy. Plan zapisujemy przed startem: co uznamy za wartościową konwersję, jakie dane dostarczy firma i na jakiej podstawie ocenimy wyniki kampanii.",
  },
  {
    title: "Formaty reklam w Meta Ads: Facebook i Instagram",
    text: "Przygotowujemy formaty reklam w Meta Ads: grafiki, karuzele i krótkie wideo dla aktualności, relacji i Reels. Jeden komunikat dostosowujemy do różnych miejsc wyświetlania na Facebooku i Instagramie. Liczbę wersji, poprawki i ewentualną produkcję zdjęć lub filmu ustalamy w wycenie.",
    href: "/uslugi/reklama-facebook",
    link: "Zobacz zakres kreacji reklamowych",
  },
  {
    title: "Konfiguracja, pomiar i optymalizacja kampanii",
    text: "Sprawdzamy konto reklamowe w Menedżerze reklam Meta (Meta Ads Manager), zdarzenia na stronie i drogę do formularza lub zakupu. Zakres konfiguracji piksela Meta i Conversions API ustalamy po przeglądzie dostępów oraz obecnego wdrożenia. Prowadzenie kampanii Meta Ads obejmuje uzgodnione testy, analizę wydatków i wnioski. Jakość kontaktów oceniamy wspólnie z osobą, która obsługuje je w Twojej firmie.",
  },
];

const sections = [
  {
    title: "Formaty reklam w Meta Ads: zdjęcia, karuzele i krótkie wideo",
    text: "Materiał dobieramy do tego, co trzeba pokazać przed zakupem. Zdjęcie może przedstawić produkt lub efekt usługi, karuzela kilka wariantów, a krótkie wideo przebieg pracy. Nie każda kampania potrzebuje wszystkich formatów. Zaczynamy od materiałów, które masz, i wskazujemy konkretne braki: ujęcie produktu, przykład realizacji, wypowiedź lub instrukcję. W reklamie sprawdzamy czytelność tekstu, kadr na telefonie oraz zgodność obietnicy ze stroną. Facebook i Instagram wymagają uwagi przy rozmieszczeniu napisów i przycisków. Dlatego przed emisją oglądamy podglądy dostępnych umiejscowień. Ustalamy również liczbę poprawek i osobę zatwierdzającą kreacje. To ogranicza opóźnienia oraz produkowanie materiałów, których kampania nie wykorzysta.",
  },
  {
    title: "Przejęcie konta i prowadzenie kampanii Meta Ads",
    text: "Jeżeli kampanie już działają, zaczynamy od przeglądu dotychczasowej pracy. Potrzebujemy dostępu do uzgodnionych zasobów, informacji o wcześniejszych wydatkach oraz o tym, które zgłoszenia zakończyły się sprzedażą. Sprawdzamy strukturę konta reklamowego Meta, nazewnictwo, materiały i pomiar. Nie usuwamy historii tylko po to, by zacząć od zera. W planie rozdzielamy pilne błędy od pomysłów wymagających testu. Prowadzenie kampanii oznacza także kontrolę, czy promocja jest aktualna, produkt dostępny, a firma gotowa odpowiadać. Uzgadniamy, kto zgłasza zmiany oferty i kto podejmuje decyzję o dodatkowym wydatku. Dostęp nadajesz przez ustawienia konta; nie przesyłasz nam hasła.",
  },
  {
    title: "Budżet na test: kiedy ograniczyć działania reklamowe?",
    text: "Przy małym budżecie lepiej ustalić jeden cel i sprawdzić konkretną ofertę, niż dzielić środki na wiele równoległych pomysłów. Określamy, komu chcemy wyświetlać reklamy, co odbiorca zobaczy po kliknięciu i jak firma obsłuży odpowiedź. Skuteczna kampania potrzebuje też czasu osoby odpowiedzialnej za sprzedaż. Jeżeli brakuje materiałów, działającej strony lub możliwości obsługi kontaktów, najpierw rozwiązujemy ten problem. Zwiększenie budżetu nie naprawi niedostępnej usługi. Przed kolejnym etapem ustalamy, czego nauczył nas test i czy mamy wystarczające dane do decyzji. Jeśli nie, pokazujemy tę niepewność zamiast obiecywać określony koszt klienta.",
  },

  {
    title: "Agencja Meta Ads — czym zajmujemy się w ekosystemie Meta",
    text: "Meta Ads to system reklamowy firmy Meta. Kampanie na Facebooku i Instagramie planujemy jako część jednego procesu: od oferty i materiału reklamowego po kontakt z klientem. Jako agencja reklamowa odpowiadamy za uzgodnioną strukturę kampanii, kreacje, kontrolę budżetu, pomiar i wnioski. Przed startem sprawdzamy dostępne miejsca emisji oraz to, które pasują do celu i materiałów. Jeśli potrzebujesz przede wszystkim jednej platformy, określamy jej rolę w planie. Reklama Meta ma prowadzić do działania, które Twoja firma potrafi obsłużyć.",
    points: [
      "Facebook: szeroki zasięg, wydarzenia, formularze kontaktowe i reklamy usług lokalnych.",
      "Instagram: Reels, relacje i materiały, w których liczy się obraz oraz krótkie wideo.",
      "Messenger: rozmowa z potencjalnym klientem, gdy firma może szybko odpowiadać na wiadomości.",
      "Audience Network: dodatkowy zasięg poza aplikacjami Meta, włączany po sprawdzeniu jakości ruchu.",
    ],
    href: "/performance-marketing/instagram-ads",
    link: "Kampanie Instagram Ads",
  },
  {
    title: "Kampanie reklamowe Meta Ads dla nowych klientów i sprzedaży",
    text: "Rodzaj kampanii wynika z tego, co ma zrobić odbiorca. Kampania na kontakty może prowadzić do formularza Lead Ads albo formularza na stronie. Kampania sprzedażowa — w tym Meta Ads dla e-commerce — może korzystać z katalogu produktów i remarketingu, jeżeli pasują do oferty i dostępnego pomiaru. Kampania zasięgowa pomaga pokazać markę lub wydarzenie mieszkańcom określonego obszaru. Każdy cel potrzebuje odpowiedniego komunikatu i miary sukcesu. W kampaniach Meta Ads dla usług rozdzielamy liczbę zgłoszeń od rozmów, ofert i uzgodnionych współprac.",
  },
  {
    title: "Strategia Facebook Ads: odbiorcy, oferta i Advantage+",
    text: "Najpierw ustalamy, kto może kupić, gdzie firma rzeczywiście obsługuje klientów i jakie potrzeby rozwiązuje oferta. Następnie sprawdzamy dostępne ustawienia odbiorców i automatyzacje Advantage+ na konkretnym koncie. Nie traktujemy wąskiego kierowania jako uniwersalnej recepty dla małego budżetu. Porównujemy jakość zapytań, koszt oraz liczbę danych potrzebną do oceny testu. Zmiany w algorytmach Meta są powodem do sprawdzenia ustawień, a nie do obiecywania wyniku. Strategia obejmuje także komunikat, materiały i stronę docelową — sam wybór grupy odbiorców nie zastępuje dobrej oferty.",
  },
  {
    title: "Cennik obsługi i budżet: ile kosztuje kampania Meta Ads?",
    text: "Koszt kampanii Meta Ads ma trzy oddzielne części. Budżet reklamowy płacisz bezpośrednio platformie Meta — budżet w Meta Ads zależy od celu, obszaru i liczby testowanych reklam. Obsługę kampanii i ewentualne przygotowanie materiałów wyceniamy osobno, według liczby kampanii, kreacji i potrzebnych wdrożeń. Przed startem uzgadniamy limit wydatków i sposób jego kontroli, żeby koszt nie zaskoczył Cię na fakturze, a efektywność reklam Meta była mierzalna.",
    points: [
      "Budżet reklamowy: płatność za emisję, ustawiona na Twoim koncie.",
      "Obsługa kampanii: plan, konfiguracja, optymalizacja i raport.",
      "Materiały: grafiki, teksty i wideo, gdy nie masz gotowych kreacji.",
    ],
  },
  {
    title: "Konwersja i zwrot z inwestycji: jak oceniamy reklamy Meta Ads",
    text: "Kliknięcia nie są celem samym w sobie. Sprawdzamy, czy formularz działa, czy uzgodnione zdarzenia trafiają do Menedżera reklam Meta i dokąd przechodzi kontakt. Wdrożenie pixela Meta, Conversions API lub połączenia z CRM otrzymuje konkretny zakres po przeglądzie technicznym. Po stronie firmy potrzebujemy informacji, które zgłoszenia stały się rozmowami, ofertami i sprzedażą. Sam koszt formularza nie pokazuje zwrotu z inwestycji. Do oceny opłacalności potrzebne są również przychody, marża i koszty obsługi. Jeśli tych danych brakuje, raportujemy ograniczenie pomiaru.",
    points: [
      "Zdarzenia: wysłanie formularza, rozmowa, zakup lub zapis — zgodnie z celem.",
      "Koszt kontaktu i koszt sprzedaży liczone oddzielnie.",
      "Wnioski: co zmieniamy w kreacji, grupie docelowej, ofercie lub stronie.",
    ],
  },
  {
    title: "Meta Ads, Google Ads i social media — jak połączyć marketing",
    text: "Google Ads w wyszukiwarce warto rozważyć, gdy klient aktywnie szuka rozwiązania. Reklama Meta Ads może pokazać ofertę nowym odbiorcom lub przypomnieć ją osobom, które już ją znają. Połączenie Meta Ads z SEO i prowadzeniem profili planujemy wtedy, gdy każdy kanał ma określone zadanie i budżet. Marketing nie musi zaczynać się od wszystkich platform naraz. Prowadzenie profili to osobny zakres: publikacje, moderacja i odpowiedzi na komentarze. Kampanie reklamowe na Facebooku nie oznaczają automatycznie codziennej obsługi social mediów ani produkcji nowych materiałów.",
    href: "/social-media/obsluga",
    link: "Obsługa social media",
  },
  {
    title: "Realizacja: kampania rekrutacyjna Meta Ads dla Dawid EDU",
    text: "Dla Dawid EDU, szkoły i przedszkola w Poznaniu, prowadziliśmy kampanię rekrutacyjną na Facebooku i Instagramie. Przygotowaliśmy osobne kreacje dla różnych etapów edukacji i poprawiliśmy stronę, do której kierowały reklamy. W case study opisujemy zakres pracy, dane z konta i ograniczenia pomiaru. To przykład naszej pracy, nie obietnica takiego samego wyniku w innej branży.",
    href: "/realizacje/dawid-edu",
    link: "Zobacz realizację Dawid EDU",
  },
  {
    title: "Reklama na Facebooku i Instagramie: od briefu do uruchomienia",
    text: "Prześlij stronę docelową, opis usługi lub produktu, obszar sprzedaży i materiały, które możesz udostępnić. Ustalmy, czy celem jest formularz, rozmowa, zakup czy zapis. Po przeglądzie zapisujemy zakres obsługi, planowany budżet, liczbę kreacji i sposób ich akceptacji. Przed publikacją sprawdzamy linki, formularz oraz wersję mobilną strony. W harmonogramie oddzielamy termin przygotowania kampanii od terminu oceny danych. Nie uruchamiamy dodatkowych zadań tylko dlatego, że są dostępne w systemie Meta Ads — najpierw ustalamy ich cel i koszt.",
    points: ["Brief i dostęp: oferta, cel, obecne wyniki i osoba odpowiedzialna za kontakt.", "Przygotowanie: komunikaty, formaty reklam i uzgodnione zdarzenia do pomiaru.", "Akceptacja: kreacje, strona docelowa i limit budżetu przed startem.", "Ocena: raport z wykonanych prac, wyników i propozycji dalszych testów."],
  },
  {
    title: "Co wpływa na cenę prowadzenia kampanii reklamowych Meta Ads?",
    text: "Porównując wyceny agencji, sprawdź, czy dotyczą tych samych zadań. Jedna kampania dla usługi lokalnej ma inny zakres niż obsługa sklepu z wieloma kategoriami, katalogiem i regularnymi zmianami oferty. Koszt zależy również od liczby wersji materiałów, rynków, stron docelowych oraz stanu pomiaru. W propozycji rozpisujemy prace na start i zadania powtarzalne. Jeżeli masz gotowe fotografie i filmy, najpierw sprawdzamy ich przydatność. Nowa produkcja, przebudowa strony i integracje nie powinny być ukryte w ogólnej pozycji „obsługa reklam”.",
    points: ["Prace jednorazowe: przegląd, konfiguracja i przygotowanie do startu — zgodnie z wyceną.", "Praca regularna: uzgodniona optymalizacja kampanii, testy i raportowanie.", "Dodatkowe zadania: nowa sesja, nagrania, montaż, strona lub integracja — osobny zakres.", "Emisja reklam: budżet płacony platformie Meta, oddzielony od wynagrodzenia FOTZ."],
  },
  {
    title: "Optymalizacja kampanii: co zmieniamy po pierwszych danych?",
    text: "Zaczynamy od rozpoznania problemu. Gdy reklama przyciąga kliknięcia, ale formularz pozostaje pusty, sprawdzamy zgodność komunikatu ze stroną, warunki oferty i działanie kontaktu. Jeśli zgłoszenia są tanie, ale niepasujące, analizujemy pytania w formularzu i to, co obiecuje kreacja. Dopiero potem dobieramy test: inny argument, materiał, stronę lub ustawienia emisji. Zapisujemy, co zmieniliśmy i na podstawie jakich danych ocenimy efekt. Prowadzenie kampanii wymaga też umiejętności zatrzymania testu, gdy budżet się kończy albo firma nie może obsłużyć kontaktów.",
  },
  {
    title: "Reklama Meta dla usług: liczy się jakość zgłoszenia",
    text: "W firmie usługowej formularz jest początkiem procesu sprzedaży. Uzgadniamy, co odróżnia wartościowy kontakt od zgłoszenia spoza oferty: potrzeba, lokalizacja, termin lub zakres zlecenia. Nie trzeba od razu rozbudowanego CRM — sposób oznaczania statusów dobieramy do możliwości zespołu. Potrzebna jest jednak osoba, która odbiera zgłoszenia i przekazuje informację o ich dalszym losie. Wyniki kampanii Meta Ads zestawiamy z tymi informacjami. Dzięki temu decyzja o dalszej reklamie opiera się na szansach sprzedaży, a nie wyłącznie na liczbie formularzy.",
  },
  {
    title: "Facebook i Instagram w e-commerce: sprzedaż a rentowność",
    text: "Dla sklepu ustalamy produkty do promocji, dostępność, warunki dostawy oraz stronę, na którą trafia odbiorca. Przed kampanią sprawdzamy, czy materiały pokazują cechy produktu i odpowiadają na pytania przed zakupem. Raportowany przychód z reklam nie jest zyskiem sklepu. Przy ocenie rentowności trzeba uwzględnić marżę, zwroty, realizację zamówień, produkcję materiałów i koszt obsługi marketingowej. Jeżeli dane platformy różnią się od zamówień w sklepie, opisujemy sposób liczenia oraz ograniczenia. Nie zwiększamy planu wydatków na podstawie samego wzrostu wyświetleń.",
  },
  {
    title: "Agencja Facebook Ads: jak porównać zakres współpracy?",
    text: "Poproś o opis rzeczywistej realizacji i rozdzielenie odpowiedzialności: kto przygotuje kreacje, kto wdroży pomiar, kto poprawi stronę i kto oceni jakość kontaktów. Dobra propozycja wyjaśnia także, co nie mieści się w cenie. W FOTZ możesz obejrzeć realizację Dawid EDU i omówić, które elementy tego procesu pasują do Twojej firmy. Nie przenosimy wyników jednego klienta do prognozy dla innej branży. Ustalamy dostęp do konta, sposób przekazywania materiałów oraz podsumowanie pracy. To ułatwia porównanie ofert agencji i późniejszą ocenę współpracy.",
    href: "/realizacje/dawid-edu", link: "Sprawdź zakres naszej realizacji",
  },
];

const faqs = [
  {
    question: "Czy stała obsługa marketingowa obejmuje budżet i kampanie Meta Ads?",
    answer: "Zakres stałej obsługi i prowadzenie kampanii reklamowych uzgadniamy oddzielnie. Nie zakładaj, że cena publikacji w social media obejmuje przygotowanie, optymalizację i raportowanie reklam. W wycenie wskazujemy obsługę kampanii, potrzebne materiały i budżet emisji jako osobne części. Możemy je połączyć w jednym planie po ustaleniu zakresu.",
  },
  {
    question: "Co otrzymam w raporcie z kampanii?",
    answer: "Uzgodniony raport obejmuje wykonane zadania, wydatki, wyniki i wnioski do dalszej pracy. Dla usług osobno pokazujemy zgłoszenia oraz ich jakość na podstawie informacji od firmy. Przychód i zwrot z inwestycji oceniamy tylko wtedy, gdy mamy odpowiednie dane. Zaznaczamy braki pomiaru i proponujemy, co poprawić, kontynuować lub zatrzymać.",
  },
  {
    question: "Czym różni się Meta Ads od Facebook Ads?",
    answer: "Facebook Ads to potoczna nazwa reklam na Facebooku. Meta Ads to szerszy system reklamowy Meta. Kampanie mogą korzystać z Facebooka, Instagrama i innych dostępnych miejsc emisji, zarządzanych w Menedżerze reklam Meta. Wybór zależy od celu kampanii, formatu i aktualnych ustawień konta. Zakres pomiaru sprawdzamy przed startem.",
  },
  {
    question: "Jaki minimalny budżet reklamowy jest potrzebny?",
    answer: "Nie podajemy jednej kwoty dla wszystkich. Budżet w Meta Ads zależy od celu, obszaru, liczby testowanych reklam i kosztu kontaktu w branży. Przed startem proponujemy budżet testowy i limit wydatków, a po pierwszych tygodniach oceniamy, czy warto go zmienić.",
  },
  {
    question: "Czy konto reklamowe pozostaje moje?",
    answer: "Tak. Pracujemy na koncie reklamowym firmy, w ramach Business Managera i nadanych uprawnień. Płatność za emisję jest ustawiona na Twojej karcie lub fakturze, a dane i piksel Meta zostają po Twojej stronie po zakończeniu współpracy.",
  },
  {
    question: "Czy przejmiecie istniejące kampanie Meta?",
    answer: "Możemy zacząć od przeglądu konta: ustawień kampanii, grup docelowych, kreacji, zdarzeń i formularzy. Na tej podstawie przygotujemy listę zmian. Nie potrzebujemy Twojego hasła — wystarczy dostęp nadany w ustawieniach firmy w Meta.",
  },
  {
    question: "Kiedy widać efekty kampanii?",
    answer: "Pierwsze dane o wyświetleniach i kliknięciach pojawiają się w ciągu kilku dni. Ocena kosztu kontaktu lub sprzedaży wymaga zwykle kilku tygodni i wystarczającej liczby zdarzeń. Nie gwarantujemy określonej liczby klientów, bo wynik kampanii Meta Ads zależy też od oferty, ceny i obsługi zapytań.",
  },
  {
    question: "Czy przygotujecie reklamy z moich zdjęć i filmów?",
    answer: "Tak, jeśli materiały mają odpowiednią jakość i format. Jeśli potrzebna jest nowa sesja albo nagranie, dostaniesz osobny zakres i koszt produkcji. FOTZ Studio realizuje zdjęcia i wideo we własnym zakresie.",
  },
];

export default function FacebookInstagramAds() {
  return <>
    <SEOHead
      title="Agencja Meta Ads — reklama na Facebooku i Instagramie | FOTZ"
      description="Agencja Meta Ads FOTZ Studio: prowadzenie kampanii reklamowych na Facebooku i Instagramie. Plan, kreacje, budżet, piksel Meta i pomiar konwersji."
      canonical={`https://www.fotz-studio.pl${path}`}
    />
    <ServiceEditorial
      path={path}
      title="Agencja Meta Ads: kampanie reklamowe na Facebooku i Instagramie"
      eyebrow="FOTZ Studio · kampanie Meta Ads dla firm"
      enquiryVariant="meta_ads"
      lead="Prowadzimy reklamy na Facebooku i Instagramie: plan, kreacje, pomiar i optymalizację. Osobno wyceniamy obsługę, materiały i budżet emisji. Oceniaj z nami koszt oraz jakość zapytań."
      contactLabel="Zapytaj o kampanię Meta Ads"
      contactDescription="Prześlij adres strony, cel kampanii i planowany budżet. Napisz, czy masz już konto reklamowe i gotowe zdjęcia lub filmy. Ustalimy zakres oraz koszt obsługi."
      summary={[
        "Pokaż ofertę, stronę, konto reklamowe i dotychczasowe kampanie.",
        "Uzgodnimy cel, grupy docelowe, materiały, budżet i sposób pomiaru.",
        "Uruchomimy kampanię, przeanalizujemy wyniki i zaproponujemy kolejne testy.",
      ]}
      scopeTitle="Kampanie Meta Ads — zakres współpracy z agencją"
      scope={scope}
      sections={sections}
      faqs={faqs}
      workAfterScope
    />
  </>;
}
