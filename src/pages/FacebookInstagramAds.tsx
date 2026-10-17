import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/performance-marketing/meta-ads";

const scope = [
  {
    title: "Plan kampanii Meta Ads",
    text: "Strategia reklamowa Meta Ads zaczyna się od celu biznesowego: zapytania o usługę, sprzedaż w sklepie internetowym, zapisy na wydarzenie albo rekrutacja. Do celu dobieramy rodzaj kampanii, grupy docelowe, miejsca emisji i budżet reklamowy. Plan zapisujemy przed startem, żeby obie strony wiedziały, co oceniamy po pierwszych tygodniach i jakie wskaźniki mają znaczenie dla Twojej sprzedaży.",
  },
  {
    title: "Kreacje reklamowe na Facebook i Instagram",
    text: "Przygotowujemy grafiki, karuzele i krótkie wideo w formatach dla aktualności, relacji i Reels. Jeden komunikat dostosowujemy do różnych miejsc wyświetlania, a teksty reklam piszemy pod konkretną grupę odbiorców. Liczbę wersji, poprawki i ewentualną produkcję zdjęć lub filmu ustalamy w wycenie.",
    href: "/uslugi/reklama-facebook",
    link: "Zobacz zakres kreacji reklamowych",
  },
  {
    title: "Konfiguracja, pomiar i optymalizacja kampanii",
    text: "Porządkujemy ustawienia w Menedżerze reklam, Conversions API i zdarzenia na stronie, bo kampania bez poprawnego pomiaru uczy algorytm złych wniosków. Analizujemy wyniki kampanii, wyłączamy słabsze reklamy i testujemy nowe warianty. Raport pokazuje wydatki, efekty i jakość pozyskanych kontaktów, a nie tylko kliknięcia.",
  },
];

const sections = [
  {
    title: "Agencja Meta Ads z Poznania dla firm z całej Polski",
    text: "FOTZ Studio to agencja reklamowa i produkcyjna z Poznania. Kampanie Meta Ads prowadzimy dla firm z Poznania i z całej Polski: spotkania odbywamy online lub w Poznaniu po uzgodnieniu terminu, a materiały i dostępy wymieniamy cyfrowo. Dla firm spoza Poznania nie mamy osobnego biura — cała współpraca działa zdalnie. Jako kompleksowa agencja łączymy w jednym zespole marketing, planowanie kampanii, produkcję zdjęć i wideo oraz analizę danych, dlatego reklama nie czeka tygodniami na materiały od kilku podwykonawców.",
    points: [
      "Usługi lokalne: gabinety, szkoły, warsztaty, firmy remontowe i inne biznesy, które potrzebują zapytań z określonego obszaru.",
      "Sklepy internetowe: kampanie sprzedażowe z katalogiem produktów i remarketingiem.",
      "Wydarzenia i obiekty: promocja biletów, zapisów i terminów.",
      "Firmy B2B: dotarcie do osób decyzyjnych i pozyskiwanie kontaktów przez formularze.",
    ],
  },
  {
    title: "Czym jest reklama Meta i ekosystem Meta",
    text: "Meta Ads to system reklamowy Meta, w którym jedna kampania może wyświetlać reklamy na Facebooku, Instagramie, w Messengerze i w Audience Network. Wszystkie kampanie na Facebooku i Instagramie zarządzane są z jednego miejsca — Menedżer reklam Meta (w wersji angielskiej Meta Ads Manager). Aplikacje firmy Meta zbierają dane o zachowaniu odbiorców, więc algorytm może szukać osób najbardziej skłonnych do wykonania wybranej akcji. Na czym polega Meta Ads w praktyce? Ty wybierasz cel, odbiorców, budżet i kreacje, a system Meta w aukcji decyduje, komu i gdzie wyświetlić reklamę.",
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
    title: "Reklama Meta Ads — kiedy to dobry kanał marketingowy",
    text: "Reklama Meta Ads daje dostęp do ludzi, którzy jeszcze nie szukają Twojej usługi, ale pasują do profilu klienta. Meta Ads pozwala zawęzić emisję do regionu, wieku, zainteresowań albo osób, które odwiedziły stronę. Platforma sprawdza się, gdy oferta dobrze wygląda na zdjęciu lub w krótkim wideo, gdy decyzja o zakupie zapada szybko albo gdy firma chce budować rozpoznawalność w swoim regionie. Słabiej działa, gdy klient szuka wyłącznie w wyszukiwarce — wtedy kampania reklamowa w Google bywa pierwszym wyborem. Każda kampania to tylko element szerszego planu marketingowego, w którym liczy się też strona, oferta i obsługa zapytań. Konwersja, czyli zakup, zapis albo wysłanie formularza, musi być zdefiniowana przed startem, bo od niej zależy, jak system optymalizuje emisję.",
    points: [
      "Facebook i Instagram w jednej kampanii: wspólny budżet, różne formaty i miejsca emisji.",
      "Marketing lokalny: reklama na Facebooku i Instagramie dla mieszkańców wybranego obszaru.",
      "Marketing sklepu internetowego: konwersja mierzona zdarzeniem zakupu, a nie kliknięciem.",
    ],
  },
  {
    title: "Rodzaje kampanii Meta Ads: kontakty, sprzedaż, zasięg",
    text: "Rodzaj kampanii wynika z tego, co ma zrobić odbiorca. Kampania na kontakty korzysta z Lead Ads, czyli formularza w aplikacji, albo prowadzi do formularza na stronie. Kampania sprzedażowa w e-commerce korzysta z katalogu produktów i remarketingu osób, które oglądały ofertę. Kampania zasięgowa pomaga pokazać markę lub wydarzenie mieszkańcom określonego obszaru. Nie łączymy wszystkiego w jednej kampanii: każdy cel potrzebuje innego komunikatu i innej miary sukcesu. Skuteczna kampania to taka, której wynik da się porównać z założonym celem, a nie taka, która ma najwięcej polubień.",
    points: [
      "Meta Ads dla e-commerce: katalog, reklamy dynamiczne, remarketing porzuconych koszyków.",
      "Pozyskiwanie kontaktów: formularz natywny w aplikacji, formularz na stronie, wiadomości w Messengerze.",
      "Rozpoznawalność: wideo, zasięg w danym regionie, promocja wydarzeń.",
    ],
    href: "/performance-marketing/remarketing",
    link: "Remarketing w kampaniach reklamowych",
  },
  {
    title: "Formaty reklam w Meta Ads",
    text: "Meta Ads oferuje kilka formatów, które dobieramy do celu i do materiałów, jakie masz albo możemy nagrać. Pojedyncze zdjęcie dobrze sprawdza się przy prostej ofercie. Karuzela pozwala pokazać kilka produktów lub etapów usługi. Wideo i Reels pomagają wyjaśnić ofertę i zatrzymać uwagę w aktualnościach. Reklama z kolekcją lub katalogiem łączy obraz z listą produktów w sklepie. Ponieważ FOTZ Studio zajmuje się też produkcją filmów i zdjęć, reklama meta może powstać z materiału przygotowanego specjalnie pod kampanię, a nie z przypadkowych ujęć.",
    points: [
      "Zdjęcie i grafika — prosty komunikat, szybkie testy wariantów.",
      "Karuzela — kilka produktów, usług lub argumentów w jednej reklamie.",
      "Wideo i Reels — pionowe formaty do relacji i Reels oraz poziome do aktualności.",
      "Katalog i kolekcja — reklamy produktów dla sklepów internetowych.",
    ],
  },
  {
    title: "Grupy docelowe, algorytm i Advantage+",
    text: "Grupy odbiorców budujemy z kilku źródeł: lokalizacji, zainteresowań, osób odwiedzających stronę, listy klientów oraz grup podobnych (lookalike). Automatyzacje Advantage+ mogą samodzielnie szukać odbiorców i rozdzielać budżet między reklamy. Działanie tej automatyzacji opiera się na algorytmach Meta, które uczą się na zdarzeniach z konta, dlatego sprawdzają się wtedy, gdy konto ma wystarczająco danych o konwersjach. Przy małym budżecie lub nowym koncie zaczynamy od węższych ustawień i rozszerzamy je na podstawie wyników. Efektywność reklam Meta w dużej mierze zależy od jakości sygnałów, które system dostaje ze strony.",
  },
  {
    title: "Ile kosztuje kampania Meta Ads? Cennik i budżet",
    text: "Koszt kampanii Meta Ads zależy od celu, branży, obszaru, liczby kampanii i tego, czy potrzebne są nowe materiały. Nie publikujemy stałego cennika, bo każda wycena wynika z zakresu. Koszt dzieli się na trzy części. Budżet reklamowy zawsze płacisz osobno, bezpośrednio platformie Meta — nie przechodzi przez nasze faktury. Obsługę kampanii i ewentualne przygotowanie kreacji wyceniamy oddzielnie. Przed startem uzgadniamy limit wydatków i sposób jego kontroli, żeby koszt nie zaskoczył Cię na fakturze.",
    points: [
      "Budżet reklamowy: płatność za emisję reklam, rozliczana przez Meta z Twoją firmą.",
      "Prowadzenie kampanii: plan, konfiguracja, optymalizacja kampanii i raport.",
      "Materiały: grafiki, teksty i wideo, gdy nie masz gotowych kreacji.",
    ],
  },
  {
    title: "Konta reklamowe zawsze na firmę klienta",
    text: "Konto reklamowe zakładamy albo prowadzimy na firmę klienta, w ramach jego portfolio biznesowego w Meta. Ty jesteś właścicielem konta reklamowego, pixela i zebranych danych, a nam nadajesz dostęp z odpowiednimi uprawnieniami. Jeśli masz już konto, zaczynamy od przeglądu ustawień. Jeśli nie — pomagamy założyć je od początku i podłączyć stronę, profil na Facebooku i konto na Instagramie. Po zakończeniu współpracy wystarczy odebrać nam dostęp; historia kampanii zostaje u Ciebie.",
  },
  {
    title: "Pomiar: pixel Meta, Conversions API i zwrot z inwestycji",
    text: "Kliknięcia nie są celem samym w sobie. Sprawdzamy, czy formularz działa, czy zdarzenia z pixela Meta trafiają do Menedżera reklam i dokąd przechodzi kontakt. Conversions API przesyła dane o konwersjach z serwera, co pomaga, gdy przeglądarka blokuje część informacji. Po stronie firmy oceniamy, ile zgłoszeń to realne szanse sprzedaży. Te dane łączymy w raporcie z wydatkami, żeby ocenić zwrot z inwestycji w działania reklamowe, a nie tylko koszt kliknięcia.",
    points: [
      "Zdarzenia: wysłanie formularza, rozmowa, zakup lub zapis — zgodnie z celem.",
      "Koszt kontaktu i koszt sprzedaży liczone oddzielnie.",
      "Wnioski: co zmieniamy w kreacji, grupie docelowej, ofercie lub stronie.",
    ],
  },
  {
    title: "Jak wygląda prowadzenie kampanii Meta Ads",
    text: "Obsługa kampanii to praca w cyklu, a nie jednorazowe ustawienie reklamy. Po starcie obserwujemy pierwsze dane, porównujemy reklamy i grupy odbiorców, a potem przesuwamy budżet tam, gdzie efekty są najlepsze. Raz na jakiś czas wracamy do strategii: oferty, sezonu, strony docelowej. Raport omawiamy na krótkim spotkaniu online, żeby decyzje były zrozumiałe także dla osób, które nie pracują w marketingu na co dzień.",
    points: [
      "Brief i przegląd konta, strony oraz dotychczasowych kampanii.",
      "Plan kampanii, grupy docelowe, budżet i harmonogram testów.",
      "Kreacje reklamowe i konfiguracja pomiaru.",
      "Start, optymalizacja i regularny raport z rekomendacjami.",
    ],
  },
  {
    title: "Meta Ads, Google Ads i inne kanały marketingu",
    text: "Google Ads warto rozważyć, gdy klient sam szuka rozwiązania w wyszukiwarce. Reklamy Meta docierają do osób, które jeszcze nie szukają, ale pasują do grupy docelowej. Połączenie Meta Ads z SEO ma sens, gdy strona zbiera ruch z wyszukiwarki, a kampanie remarketingowe przypominają ofertę tym, którzy już ją odwiedzili. Inne platformy — TikTok Ads, LinkedIn Ads, Pinterest Ads czy Allegro Ads — wybieramy tylko wtedy, gdy pasują do produktu i odbiorców. Prowadzenie profili w social media to osobny zakres: plan publikacji, moderacja i odpowiedzi na komentarze.",
    href: "/performance-marketing/google-vs-facebook",
    link: "Google Ads czy reklamy Meta — porównanie",
  },
  {
    title: "Meta Ads w 2026: co zmienia automatyzacja",
    text: "W 2026 roku kampanie w Meta Ads coraz mocniej opierają się na automatyzacji: system Meta Ads sam dobiera miejsca emisji, odbiorców i warianty reklam. Dla firmy oznacza to, że przewagę dają dobre kreacje, poprawny pomiar i jasna oferta, a nie ręczne ustawianie dziesiątek grup odbiorców. Dlatego w kampaniach Meta Ads większą część pracy poświęcamy materiałom reklamowym i jakości danych z konta. Automatyzacja pomaga, ale nie zastępuje decyzji, komu i z jaką ofertą chcesz się pokazać.",
  },
  {
    title: "Realizacja: kampania Meta Ads dla Dawid EDU",
    text: "Dla Dawid EDU — szkoły i przedszkola w Poznaniu — prowadziliśmy kampanię rekrutacyjną na Facebooku i Instagramie. Przygotowaliśmy osobne kreacje dla różnych etapów edukacji i poprawiliśmy stronę, do której kierowały reklamy. W case study opisujemy zakres pracy przy kampanii. To przykład naszej pracy, nie obietnica takiego samego wyniku w innej branży.",
    href: "/realizacje/dawid-edu",
    link: "Zobacz realizację Dawid EDU",
  },
];

const faqs = [
  {
    question: "Ile kosztuje obsługa Meta Ads?",
    answer: "Koszt obsługi zależy od liczby kampanii, kreacji i wdrożeń, na przykład konfiguracji pixela lub Conversions API. Przed startem dostajesz wycenę z opisanym zakresem. Budżet reklamowy płacisz osobno, bezpośrednio Meta, więc zawsze widzisz, ile poszło na emisję, a ile na pracę agencji.",
  },
  {
    question: "Czym różni się Meta Ads od Facebook Ads?",
    answer: "Facebook Ads to potoczna nazwa reklam na Facebooku. Meta Ads obejmuje cały system Meta: Facebooka, Instagrama, Messengera i Audience Network, zarządzany z jednego Menedżera reklam. Jeśli interesuje Cię głównie reklama na Facebooku, zobacz osobną stronę o tej usłudze w menu usług.",
  },
  {
    question: "Czy Meta Ads jest trudne?",
    answer: "Samo uruchomienie reklamy jest proste, ale wyniki kampanii na Facebooku i Instagramie zależą od pomiaru, struktury kampanii, kreacji i oceny jakości kontaktów. Najczęstsze problemy to brak poprawnych zdarzeń, zbyt wiele małych kampanii i reklamy bez testów. Tym zajmuje się agencja Facebook Ads — albo osoba w firmie, która ma na to czas.",
  },
  {
    question: "Jaki minimalny budżet reklamowy jest potrzebny?",
    answer: "Nie podajemy jednej kwoty dla wszystkich. Budżet zależy od celu, obszaru, liczby testowanych reklam i kosztu kontaktu w branży. Przed startem proponujemy budżet testowy i limit wydatków, a po pierwszych tygodniach oceniamy, czy warto go zmienić.",
  },
  {
    question: "Czy konta reklamowe będą należeć do mojej firmy?",
    answer: "Tak. Konta reklamowe zakładamy lub prowadzimy na firmę klienta. Płatność za emisję jest ustawiona na Twoją kartę lub fakturę od Meta, a dane i pixel zostają po Twojej stronie po zakończeniu współpracy.",
  },
  {
    question: "Czy przejmiecie istniejące kampanie Meta?",
    answer: "Tak. Zaczynamy od przeglądu konta reklamowego Meta: ustawień kampanii, grup docelowych, kreacji, zdarzeń i formularzy. Na tej podstawie przygotujemy listę zmian. Nie potrzebujemy Twojego hasła — wystarczy dostęp nadany w ustawieniach firmy w Meta.",
  },
  {
    question: "Kiedy widać wyniki kampanii Meta Ads?",
    answer: "Pierwsze dane o wyświetleniach i kliknięciach pojawiają się w ciągu kilku dni. Ocena kosztu kontaktu lub sprzedaży wymaga zwykle kilku tygodni i wystarczającej liczby zdarzeń. Nie gwarantujemy określonej liczby klientów, bo wynik zależy też od oferty, ceny i obsługi zapytań.",
  },
  {
    question: "Czy przy wyborze agencji liczy się status partnera Meta?",
    answer: "Status Meta Business Partner to program Meta dla agencji i można go sprawdzić w katalogu partnerów Meta. Przy wyborze agencji warto też zapytać o przykładowe realizacje, sposób raportowania i o to, na kogo zakładane są konta reklamowe.",
  },
  {
    question: "Czy obsługujecie firmy spoza Poznania?",
    answer: "Tak. Zespół pracuje w Poznaniu, a firmy z innych miast obsługujemy zdalnie: spotkania online, materiały i dostępy przesyłane cyfrowo. Nie mamy biur w innych miastach. Jeśli kampania wymaga nagrania lub sesji na miejscu, wyjazd ustalamy osobno.",
  },
  {
    question: "Czy przygotujecie reklamy z moich zdjęć i filmów?",
    answer: "Tak, jeśli materiały mają odpowiednią jakość i format. Jeśli potrzebna jest nowa sesja albo nagranie, dostaniesz osobny zakres i koszt produkcji. FOTZ Studio realizuje zdjęcia i wideo we własnym zakresie.",
  },
];

export default function FacebookInstagramAds() {
  return <>
    <SEOHead
      title="Agencja Meta Ads — kampanie Facebook i Instagram | FOTZ"
      description="Agencja Meta Ads FOTZ Studio z Poznania: kampanie reklamowe na Facebooku i Instagramie dla firm z całej Polski. Plan, kreacje, budżet, pixel i raport."
      canonical={`https://www.fotz-studio.pl${path}`}
    />
    <ServiceEditorial
      path={path}
      title="Agencja Meta Ads — kampanie reklamowe na Facebooku i Instagramie"
      eyebrow="FOTZ Studio · Meta Ads w Polsce dla firm"
      enquiryVariant="meta_ads"
      lead="Prowadzimy kampanie Meta Ads na Facebooku, Instagramie i w Messengerze dla firm z całej Polski: od planu i kreacji reklamowych po budżet, pomiar i optymalizację. Konto w Menedżerze reklam działa na Twoją firmę, budżet płacisz bezpośrednio Meta, a my pokazujemy oddzielnie koszt obsługi i materiałów."
      summary={[
        "Pokaż ofertę, stronę i dotychczasowe kampanie reklamowe Meta Ads.",
        "Uzgodnimy cel, grupy docelowe, materiały, budżet i sposób pomiaru.",
        "Uruchomimy kampanię, przeanalizujemy wyniki i zaproponujemy kolejne testy.",
      ]}
      scopeTitle="Kampanie Meta Ads — zakres współpracy z agencją"
      scope={scope}
      sections={sections}
      faqs={faqs}
      workAfterScope
      contactDescription="Opisz ofertę i cel kampanii, wyślij adres strony i napisz, czy masz już konto w Menedżerze reklam. Odpowiemy z propozycją kolejnego kroku i zakresem wyceny."
    />
  </>;
}
