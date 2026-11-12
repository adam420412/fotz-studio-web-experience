import { ServiceEditorial } from "@/components/ServiceEditorial";
import { SEOHead } from "@/components/seo/SEOHead";

const scope = [
  {
    title: "SEO i pozycjonowanie stron",
    text: "W Search Console sprawdzamy widoczność stron internetowych i słowa, którymi klienci opisują Twoją usługę w Google. Jeśli strona wyświetla się na pytania o cenę, a cennik jest trudny do znalezienia, zaczynamy od oferty i sposobu wyceny. Możemy też zaplanować audyt techniczny i poprawę treści.",
    href: "/seo/pozycjonowanie-gdansk",
    link: "Poznaj zakres pozycjonowania dla firm z Gdańska",
  },
  {
    title: "Kampanie reklamowe Google Ads",
    text: "Zanim uruchomimy działania reklamowe dla lokalnej usługi, ustalamy zakres dojazdu, dostępność i wartość zlecenia. Dopiero wtedy dobieramy zapytania, obszar emisji reklamy i stronę docelową. Jeżeli sprzedajesz na kilku rynkach, ustalamy osobne komunikaty dla Twoich klientów. Dostawca B2B z Gdańska może kierować ofertę do kupców z całej Polski.",
    href: "/performance-marketing/google-ads",
    link: "Sprawdź, jak planujemy kampanie Google Ads",
  },
  {
    title: "Social media dla firm z Gdańska i kampanie Meta Ads",
    text: "Na Facebooku i Instagramie możemy pokazać efekt pracy, ludzi lub produkt w użyciu. Gdy odbiorcą jest osoba odpowiedzialna za zakupy w firmie, rozważamy również LinkedIn. Ustalamy, kto przygotuje materiały, kto zatwierdzi posty i dokąd mają trafić pytania potencjalnych klientów. Prowadzenie reklam i budżet emisji mają osobną wycenę.",
    href: "/social-media/obsluga",
    link: "Zobacz zakres obsługi social media",
  },
  {
    title: "Strony internetowe i e-commerce",
    text: "Tworzenie stron WWW zaczynamy od ustalenia, czego klient potrzebuje przed zapytaniem, rezerwacją albo zakupem. Na czas jednej promocji często wystarczy landing page z ofertą i krótkim formularzem. Na telefonie klient powinien móc obejrzeć realizację, poznać warunki i skontaktować się z firmą. W sklepie internetowym równie ważne są opis wariantów, dostawa i czytelny koszyk.",
    href: "/uslugi/strony-internetowe/gdansk",
    link: "Omów stronę internetową dla swojej firmy",
  },
  {
    title: "Content marketing i produkcja wideo",
    text: "Rozmowy z handlowcami podpowiadają, co pokazać. Przykładowo pytanie o montaż produktu można zamienić w krótką instrukcję wideo, a pytanie o wybór wariantu w porównanie na stronie. Dla każdego z materiałów reklamowych ustalamy format, projekt graficzny, liczbę wersji i prawa do wykorzystania.",
    href: "/uslugi/video-marketing",
    link: "Obejrzyj realizacje wideo FOTZ",
  },
  {
    title: "Strategia marketingu internetowego i analityka",
    text: "Jeśli sprzedaż wymaga kilku rozmów, plan obejmuje także pracę po wysłaniu formularza. Ustalamy, kto oddzwania i gdzie zapisuje wynik rozmowy. Dzięki temu budżet na następny miesiąc można oprzeć na zapytaniach pasujących do oferty.",
    href: "/content-marketing/strategia",
    link: "Zobacz, co zawiera strategia treści",
  },
];

const sections = [
  {
    title: "Marketing dla firm z Gdańska – zasięg lokalny czy ogólnopolski?",
    text: "Pracujemy z firmami z różnych branż. Firma w Gdańsku może obsługiwać mieszkańców kilku dzielnic, turystów planujących pobyt albo odbiorców przemysłowych z całego kraju. Każda z tych grup inaczej szuka wykonawcy. Dlatego strategie marketingowe dobieramy do branży i zasięgu dostawy. Przed wyceną pytamy, skąd przychodzą obecni klienci, o co pytają przed zakupem i jakie zlecenia chcesz pozyskiwać od nowych klientów.",
    points: [
      "Usługa z dojazdem po Gdańsku i okolicy. Jeśli pozyskujesz klientów z Gdańska przez wizytówkę w Mapach Google, sprawdź podany obszar obsługi, godziny i telefon do osoby przyjmującej zlecenia.",
      "Obiekt przyjmujący rezerwacje. Pokaż dostępne warianty i warunki rezerwacji. Ustal, kto aktualizuje dostępność w sezonie.",
      "Producent sprzedający przez handlowców. Pokaż zastosowanie produktu, wymagania techniczne i dane potrzebne do przygotowania oferty.",
    ],
  },
  {
    title: "Ile kosztuje współpraca z agencją marketingową?",
    text: "Podstawowa stała obsługa w FOTZ Studio kosztuje 3 000 zł netto miesięcznie. Sprawdza się, gdy masz zdjęcia lub filmy i potrzebujesz zespołu do regularnej publikacji. Umawiamy plan, cztery materiały łącznie w miesiącu na maksymalnie dwa profile oraz jedną zbiorczą rundę poprawek. Zakres obejmuje też aktualizację strony do godziny, podsumowanie miesiąca i spotkanie do 30 minut.",
    points: [
      "Ograniczona opieka kosztuje 2 000 zł netto miesięcznie i obejmuje do czterech godzin pracy łącznie. Przed rozpoczęciem miesiąca wybieramy zadania, które zmieszczą się w tym czasie.",
      "Produkcja zdjęć i filmów, montaż, moderacja, SEO, obsługa kampanii i budżet reklamowy wymagają osobnej kalkulacji.",
      "Przy jednorazowym projekcie otrzymujesz wycenę wykonania, listę materiałów do odbioru i terminy akceptacji.",
    ],
    href: "/agencja-marketingu-internetowego",
    link: "Porównaj zakres stałej obsługi marketingowej",
  },
  {
    title: "Agencja reklamowa w praktyce – strona i kampania Dawid EDU",
    text: "Dla Dawid EDU przygotowaliśmy stronę oraz kampanię rekrutacyjną Meta Ads dla szkoły, przedszkola i edukacji domowej. Rodzic zainteresowany konkretną formą nauki potrzebował odpowiedniej informacji po kliknięciu reklamy. Zobacz kreacje i ścieżkę kontaktu. Przy podobnym zleceniu dla Twojej firmy ustalimy, dokąd kierować każdą grupę odbiorców i kto po Twojej stronie odpowie na zgłoszenia.",
    href: "/realizacje/dawid-edu",
    link: "Zobacz projekt strony i kampanii Dawid EDU",
  },
  {
    title: "Projektowanie stron WWW dla producenta – przykład KLAGEM",
    text: "Przy meblach modułowych zdjęcie pojedynczego modelu nie wystarcza do rozmowy o zamówieniu. Dla KLAGEM przygotowaliśmy stronę i cyfrowy konfigurator mebli 3D. Klient może wybrać moduły, wymiary i kolory oraz zobaczyć orientacyjną wycenę. Jeśli sprzedajesz produkt na zamówienie, przed projektem ustalimy z handlowcem, jakie wybory klient może podjąć sam, a które wymagają konsultacji.",
    href: "/realizacje/klagem",
    link: "Obejrzyj konfigurator mebli KLAGEM",
  },
  {
    title: "Co ustalić na początku współpracy z agencją reklamową?",
    text: "Na pierwszą rozmowę przygotuj adres strony, opis usługi i przykład zamówienia, na którym Ci zależy. Wspólnie przechodzimy drogę klienta od wyszukiwarki lub reklamy do kontaktu. Ustalamy priorytet i przekazujemy do akceptacji zakres prac, harmonogram, koszty i podział obowiązków. Możesz zlecić pojedynczy etap, jeśli resztą zajmuje się Twój zespół.",
    points: [
      "Pierwsza konsultacja online trwa około 15 minut. Omawiamy cel biznesowy i określamy, jakie dane z narzędzi marketingowych pomogą przygotować wycenę. Po przyjęciu oferty wybierasz osobę zatwierdzającą treści.",
      "Przed publikacją sprawdzamy wersję mobilną, linki, formularz i adres odbiorcy zapytań.",
      "Po publikacji omawiamy dane z uzgodnionego okresu i wybieramy kolejny krok.",
    ],
  },
  {
    title: "Jak ocenić skuteczność prowadzenia kampanii reklamowych?",
    text: "Gdy prowadzimy kampanie, wiążemy raport z Twoim celem. Zestawiamy wydatki, wejścia na stronę i liczbę wysłanych zapytań. Uzgadniamy z handlowcem, jaki kontakt kwalifikuje jako lead, na przykład zapytanie o wycenę na obsługiwanym obszarze. Zespół sprzedaży może dopisać, które rozmowy dotyczyły właściwej usługi i ile zakończyło się ofertą. Aby ocenić zwrot z inwestycji, potrzebujemy też marży ze sprzedaży przypisanej do kampanii oraz uzgodnionych kosztów marketingu i reklamy. Jeśli reklama lokalu na wydarzenia przynosi dużo pytań o pojedynczy nocleg, trzeba sprawdzić treść reklamy i stronę rezerwacji. Większy budżet miałby sens dopiero po ustaleniu, czy zmiana przyciągnęła odpowiednich odbiorców.",
  },
  {
    title: "Identyfikacja wizualna i projekt graficzny do kampanii",
    text: "Przy tworzeniu materiałów reklamowych sprawdzamy, czy marka ma już motyw wizualny, po którym odbiorcy rozpoznają ją w reklamie. Może to być sposób fotografowania produktu albo charakterystyczny detal opakowania. Ustal z agencją reklamową, które elementy marki są stałe, a gdzie zostawiasz projektantom miejsce na kreatywność. Przed sesją można porównać dwa pomysły na pokazanie tego samego produktu i wybrać czytelniejszy dla odbiorcy. Jeśli zmienia się cała oferta, ustalamy, które elementy identyfikacji wizualnej wymagają odświeżenia. Taką pracę można obejrzeć w portfolio FOTZ na przykładzie strony i identyfikacji dla producenta pojazdów szynowych FPS Poznań.",
    href: "/realizacje/fps-cegielski",
    link: "Zobacz stronę i identyfikację FPS Poznań",
  },
  {
    title: "Kiedy wystarczy agencja social media, a kiedy potrzebna jest kompleksowa obsługa?",
    text: "Jeśli potrzebujesz jedynie publikacji i moderacji, szukaj agencji social media z zakresem, który pasuje do Twojego zespołu. Przy premierze produktu warto połączyć stronę WWW, materiały dla sprzedawców i działania reklamowe we wspólnym harmonogramie. Przygotujemy propozycję kolejności prac i wskażemy, ile kosztuje każdy etap. Jeżeli za PR odpowiada Twój zespół, może wcześniej dostać uzgodnione materiały do publikacji. Przy mniejszym zleceniu, na przykład kampanii B2C promującej rezerwacje na weekend, inwestycja w jeden kanał może wystarczyć do sprawdzenia zainteresowania ofertą.",
  },
  {
    title: "Kiedy postawić na social media, a kiedy na pozycjonowanie?",
    text: "Jeśli szukasz agencji do promocji wydarzenia w konkretnym terminie, podaj liczbę wolnych miejsc i datę zamknięcia zapisów. Wtedy media społecznościowe i płatna kampania mogą kierować do aktualnego kalendarza. Dla usługi zamawianej przez cały rok warto sprawdzić w Search Console, które pytania klientów już przynoszą odwiedziny. Na tej podstawie wybieramy jedną podstronę do poprawy i sprawdzamy, czy ułatwia kontakt.",
    href: "/seo/audyt",
    link: "Sprawdź, co obejmuje audyt SEO",
  },
  {
    title: "Czego oczekiwać od agencji social media dla firmy w Gdańsku?",
    text: "Dobry brief podaje, ile czasu i zasobów masz na zatwierdzanie materiałów oraz odpowiadanie na wiadomości. Jeśli prowadzisz restaurację, aktualna oferta i zdjęcia potraw przydadzą się bardziej niż kolejny format do obsłużenia. Dla lokalnych firm z zespołem sprzedaży ważniejsza może być krótka demonstracja produktu z kontaktem do doradcy. Zanim zlecisz marketing w social media, poproś o wskazanie osoby odpowiedzialnej za każdy etap, od pomysłu po publikację. Ułatwi to dopasowanie obsługi do Twoich potrzeb.",
    href: "/agencja-social-media",
    link: "Sprawdź zakres pracy agencji social media",
  },
  {
    title: "Umów się na bezpłatną konsultację",
    text: "Przed rozmową wybierz jeden produkt lub usługę, na których chcesz się skupić. Pokaż nam przykład ostatniego zapytania bez danych klienta i powiedz, co zadecydowało o sprzedaży. W ciągu pierwszych 15 minut omówimy, jakich informacji potrzebujemy do wyceny. Termin rozmowy potwierdzimy w odpowiedzi.",
    href: "/konsultacja",
    link: "Wybierz preferowany termin rozmowy",
  },
];

const faqs = [
  {
    question: "Czy jesteście agencją reklamową z biurem w Gdańsku?",
    answer: "Jesteśmy agencją marketingową, która obsługuje Trójmiasto zdalnie. Adres rejestrowy FOTZ Studio to Poznańska 117/11, 62-023 Kamionki. Termin zdjęć, nagrania lub spotkania na miejscu i koszt dojazdu uzgadniamy indywidualnie przed wyceną.",
  },
  {
    question: "Czy mogę zamówić tylko reklamę na Facebooku?",
    answer: "Tak. Prześlij link do promowanej oferty i napisz, kto ma ją zobaczyć. Dopasujemy zakres kreacji, obsługę kampanii Facebook Ads i sposób sprawdzania zapytań. W propozycji zobaczysz osobno wynagrodzenie za pracę i budżet płacony platformie.",
  },
  {
    question: "Co przygotować do wyceny marketingu?",
    answer: "Wystarczy adres witryny lub profilu, opis produktu, obszar sprzedaży i oczekiwany termin. Pomagają też dostępne zdjęcia oraz przykład pytania, które zwykle zadaje klient. Na tej podstawie określimy, co możemy wykonać w Twoim budżecie.",
  },
  {
    question: "Kto będzie mieć dostęp do kont i danych?",
    answer: "Konta reklamowe i profile pozostają pod kontrolą firmy. Uzgadniamy uprawnienia potrzebne do projektu oraz osobę, która akceptuje wydatki. Przy przekazaniu projektu otrzymujesz materiały i instrukcje w zakresie zapisanym w ofercie.",
  },
];

export default function AgencjaMarketingowaGdansk() {
  return <>
    <SEOHead
      title="Agencja marketingowa Gdańsk | Agencja reklamowa FOTZ"
      description="Agencja marketingowa dla firm z Gdańska i Trójmiasta. Google Ads, kampanie reklamowe na Facebooku i social media. Sprawdź ceny i realizacje FOTZ."
      canonical="https://www.fotz-studio.pl/agencja-marketingowa/gdansk"
    />
    <ServiceEditorial
      path="/agencja-marketingowa/gdansk"
      area="Gdańsk"
      title="Agencja marketingowa dla firm z Gdańska – kampanie reklamowe i social media"
      eyebrow="FOTZ Studio · obsługa Trójmiasta online"
      lead="Dla firm z Gdańska i Trójmiasta przygotowujemy strony, treści i kampanie reklamowe. Pokaż nam ofertę i przykład zlecenia, na którym Ci zależy. Dobierzemy materiały i sposób kontaktu do tego, jak klient rezerwuje termin, zamawia produkt lub wybiera wykonawcę."
      priceNote="Stała obsługa od 3 000 zł netto miesięcznie. Projekty jednorazowe wyceniamy indywidualnie."
      contactLabel="Zapytaj o wycenę marketingu"
      contactDescription="Napisz, co sprzedajesz, gdzie docierasz do klientów i jakich zapytań potrzebujesz. Dołącz link do oferty, a dobierzemy zakres i przygotujemy wycenę."
      summary={[
        "Wybierz usługę, której sprzedaż ma największe znaczenie dla Twojej firmy.",
        "Porównaj zakres jednorazowego projektu i miesięcznej opieki.",
        "Zobacz, co przygotowaliśmy dla Dawid EDU i KLAGEM.",
      ]}
      scopeTitle="Usługi marketingowe w Gdańsku – co możesz zlecić FOTZ Studio?"
      scope={scope}
      sections={sections}
      faqs={faqs}
      faqTitle="Pytania i odpowiedzi o współpracę z agencją marketingową"
      workAfterScope
      galleryExcludeHero
    />
  </>;
}
