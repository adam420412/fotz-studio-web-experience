import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const content = {
  title: "Agencja marketingowa Poznań — strategia, treści i reklama",
  eyebrow: "FOTZ Studio · od pomysłu do publikacji",
  path: "/agencja-marketingowa/poznan",
  area: "Poznań i Wielkopolska",
  lead: "Tworzymy strony internetowe, zdjęcia, filmy i komunikację dla firm. Łączymy produkcję materiałów z SEO, social media i kampaniami reklamowymi, żeby odbiorca mógł poznać ofertę i łatwo przejść do kontaktu.",
  summary: [
    "Opowiedz, co sprzedajesz, do kogo chcesz dotrzeć i co dziś utrudnia pozyskiwanie zapytań.",
    "Wybierzemy zakres: pojedynczą realizację, poprawę strony albo stałą komunikację.",
    "Ustalimy materiały, etapy, budżet i sposób sprawdzania efektów."
  ],
  scopeTitle: "Marketing internetowy dla firm z Poznania — wybierz zakres",
  scope: [
    { title: "Strony internetowe", text: "Strona firmowa lub landing page z czytelną ofertą, realizacjami i drogą do zapytania. Zanim zaczniemy projektować widoki, ustalamy, jak witryna ma wspierać sprzedaż. Treści i wdrożenie dopasowujemy do zakresu zlecenia.", href: "/uslugi/strony-internetowe", link: "Zobacz ofertę stron WWW" },
    { title: "SEO i pozycjonowanie", text: "Sprawdzamy indeksowanie, treści, linki i techniczne przeszkody. Korzystamy z Search Console, aby ustalić kolejność poprawek i obserwować ich skutki.", href: "/seo/audyt", link: "Co obejmuje audyt SEO" },
    { title: "Social media", text: "Strategia social media, posty, rolki i materiały do publikacji w mediach społecznościowych. Zakres kanałów, produkcji oraz obsługi profili ustalamy na początku współpracy.", href: "/social-media/obsluga", link: "Prowadzenie social media" },
    { title: "Film i fotografia", text: "Spoty, krótkie filmy, relacje z wydarzeń, zdjęcia produktów i wnętrz. Przygotowujemy materiały, które możesz wykorzystać na stronie i w reklamie.", href: "/uslugi/produkcja-filmow", link: "Produkcja filmowa" },
    { title: "Kampanie reklamowe", text: "Kreacje, strona docelowa i pomiar zapytań tworzą wspólną drogę klienta. Prowadzimy kampanie Google Ads i Meta Ads, w tym Facebook Ads, dobierając kanały do odbiorców. Wyniki oceniamy w odniesieniu do budżetu oraz jakości pozyskanych kontaktów.", href: "/performance-marketing", link: "Kampanie i performance marketing" },
    { title: "Strategia treści", text: "Porządkujemy tematy, formaty i miejsca publikacji. Łączymy pytania klientów z ofertą, przykładami realizacji oraz następnym krokiem odbiorcy.", href: "/content-marketing/strategia", link: "Strategia content marketingu" }
  ],
  sections: [
    { title: "Co sprawdzić przy wyborze agencji marketingowej?", text: "Jeśli szukasz agencji, zacznij od rozmowy o celach biznesowych i o zadaniu, które marketing ma rozwiązać. Firma usługowa potrzebująca zapytań wymaga innego planu niż sklep e-commerce lub marka przygotowująca premierę produktu. Przy wyborze agencji porównaj zakres, portfolio, sposób komunikacji i warunki odbioru. Sama lista kanałów nie pokazuje, kto przygotuje materiały, kto je opublikuje oraz jak zostanie oceniony wynik. Przed decyzją o współpracy sprawdź portfolio zrealizowanych projektów i doświadczenie we współpracy z klientami o podobnym sposobie sprzedaży. Rozpoznawalne logo nie zastępuje opisu wykonanej pracy.", points: ["Zapytaj o podobny zakres pracy: projekt strony, produkcję filmu lub prowadzenie kampanii. Zobacz gotowe materiały i opis udziału agencji.", "Ustal odpowiedzialność za treści, dostęp do kont, akceptację materiałów i kontakt po publikacji.", "Porównuj oferty z takim samym zakresem. Produkcja, obsługa marketingowa, budżet reklamowy i licencje powinny być rozpisane oddzielnie."] },
    { title: "Portfolio: marketing i reklama w praktyce", text: "W kampanii rekrutacyjnej Dawid EDU połączyliśmy kreacje Meta Ads z poprawkami strony i krótszą drogą do formularza. To przykład współpracy obejmującej reklamę oraz miejsce, do którego trafia odbiorca. Dla FPS Poznań przygotowaliśmy projekt strony, a w realizacjach dla Enea Stadionu pokazujemy własną produkcję wizualną. Każda praca ma opis zakresu; rezultatów jednej kampanii nie traktujemy jako obietnicy dla innej firmy.", href: "/realizacje/dawid-edu", link: "Zobacz kampanię i zakres prac dla Dawid EDU" },
    { title: "Agencja reklamowa i interaktywna: jeden zakres czy szerszy plan?", text: "Agencja reklamowa pomaga opracować komunikat i kreacje, a agencja interaktywna skupia się również na stronie oraz jej funkcjach. W FOTZ łączymy te elementy w uzgodnionym zakresie. Możemy realizować pojedyncze zadania: sesji zdjęciowej, filmu, strony lub audytu. Jeśli potrzebujesz kilku elementów, ustalamy ich kolejność — na przykład ofertę i stronę docelową przed uruchomieniem reklam. Dzięki temu wiadomo, które materiały są potrzebne teraz i co można rozwijać w kolejnych etapach." },
    { title: "Współpraca z agencją marketingu — jak zacząć?", text: "Zaczynamy od rozmowy o celach: jakie zapytanie jest wartościowe i jak dziś przebiega kontakt z klientem. Prześlij adres strony i profili, krótki opis oferty oraz cel projektu. Na pierwszej rozmowie doprecyzujemy odbiorców, dostępne materiały, budżet i termin. Następnie przygotujemy zakres z wyceną i etapami odbioru. Wynagrodzenie za prace oraz budżet reklamowy rozpisujemy osobno.", href: "/kontakt", link: "Opisz swój projekt" },
    { title: "Poznań jako miejsce spotkań i realizacji", text: "Nasza agencja marketingowa działa w Poznaniu, przy placu Wolności 16. Termin spotkania i miejsce zdjęć lub nagrań ustalamy wcześniej. Możemy połączyć pracę na miejscu z rozmowami i akceptacją materiałów online; obsługujemy również projekty spoza Wielkopolski.", href: "/o-nas", link: "Poznaj FOTZ Studio" },
    { title: "Performance marketing: jak raportujemy wynik kampanii?", text: "Dla strony kontrolujemy wyświetlanie na telefonie, działanie linków i formularza oraz dostępność treści dla wyszukiwarki. W kampaniach reklamowych ustalamy, co chcemy raportować i na podstawie jakich danych. Przy dalszej obsłudze ustalamy właściwe wskaźniki: widoczność, wejścia, zapytania, koszt pozyskania kontaktu i jego jakość. W prowadzeniu kampanii PPC liczy się także pomiar na stronie docelowej i dalszy kontakt z klientem. Zasięg posta czy kliknięcie reklamy to etap drogi klienta; o pozyskaniu nowych klientów świadczy dopiero wynik dalszej obsługi zgłoszeń." },
    {"title": "Social media i komunikacja marki: B2B, e-commerce i event", "text": "Strategie dobieramy do sposobu podejmowania decyzji. W B2B materiał powinien wyjaśniać problem i kompetencje zespołu; w e-commerce pokazywać produkt oraz warunki zakupu. Event lub webinar wymaga informacji przed wydarzeniem i dobrego wykorzystania zdjęć lub filmu po jego zakończeniu. Zakres contentu dopasowujemy do dostępnego materiału oraz planu publikacji. Nie kopiujemy tego samego planu między branżami. Profil, reklama i treści na stronie powinny prowadzić potencjalnego klienta do zgodnej z komunikatem oferty. Spójność komunikacji marki pomaga odbiorcy rozpoznać ofertę niezależnie od kanału. Materiał branżowy powinien wyjaśniać konkretne zastosowanie, zamiast opierać się na ogólnych hasłach marketingu i reklamy."},
    {"title": "Narzędzia AI i automatyzacja w uzgodnionym zakresie", "text": "AI może pomóc przygotować warianty robocze, uporządkować materiał lub obsługę zapytań. Przed użyciem ustalamy cel, źródła danych i sposób kontroli. Końcowy tekst, grafika oraz informacje o firmie wymagają oceny człowieka. Nie publikujemy wygenerowanych opinii ani wyników kampanii. Platforma lub narzędzie ma wspierać pracę zespołu, a koszt integracji uwzględniamy w wycenie. Zasady wykorzystania AI ustalamy przed pracą nad materiałami dla klienta.", "href": "/ai-marketing", "link": "Poznaj zakres AI w marketingu"},
    {"title": "Obsługa marketingowa: kto decyduje i kto akceptuje?", "text": "Partnerska współpraca z agencją potrzebuje prostych zasad. Ustalamy osobę kontaktową, sposób akceptacji i termin dostarczenia danych o ofercie. Możemy zaprojektować materiały do działań online i offline, lecz zakres druku, emisji oraz zewnętrznych wykonawców potwierdzamy osobno. Kompleksowy zakres ustalamy tylko wtedy, gdy poszczególne działania marketingowe są potrzebne do wspólnego celu. Możemy rekomendować etapowanie prac, aby najpierw uporządkować ofertę, a dopiero potem zwiększać wydatki na promocję. Przed startem zapisujemy, co zespół ma zrealizować i jak rozliczamy zmianę zakresu."}
  ],
  faqs: [
    { question: "Ile kosztuje współpraca z agencją marketingową?", answer: "Wycena zależy od zakresu, liczby materiałów, potrzebnych integracji oraz tego, czy jest to pojedynczy projekt, czy stała obsługa. Po poznaniu zadania podajemy cenę prac. Budżet kampanii płatnych ustalamy oddzielnie." },
    { question: "Czy mogę zamówić tylko film, zdjęcia albo stronę?", answer: "Tak. Współpraca może obejmować jedną realizację. Nie trzeba zamawiać pełnej obsługi marketingowej, żeby zlecić konkretny projekt." },
    { question: "Czy pracujecie wyłącznie z firmami z Poznania?", answer: "Nie. Poznań jest naszą bazą, ale współpracujemy także z firmami z innych miast. Sposób spotkań, produkcji i przekazania materiałów ustalamy dla danego projektu." },
    { question: "Czy mogę przyjść do studia bez umówienia?", answer: "Możesz skontaktować się z nami przez formularz, telefon lub e-mail i ustalić termin. Dzięki temu potwierdzimy miejsce spotkania oraz dostępność zespołu." },
    { question: "Czy przed reklamą trzeba zbudować nową stronę?", answer: "Nie zawsze. Najpierw sprawdzamy istniejącą stronę i cel kampanii. Czasem wystarczy dopracowanie oferty lub formularza, a w innym przypadku potrzebny będzie osobny landing page. Niektóre formaty pozwalają zbierać zapytania bezpośrednio w platformie reklamowej." },
    { question: "Jak szybko zobaczę efekty marketingu?", answer: "Termin wykonania materiałów ustalamy w harmonogramie. Efekty sprzedażowe zależą między innymi od oferty, budżetu, konkurencji i obsługi zapytań. Po publikacji potrzebne są dane do oceny; nie gwarantujemy określonej liczby klientów ani pozycji w Google." }
  ]
};

export default function AgencjaMarketingowaPoznan() {
  return <>
    <SEOHead
      title="Agencja marketingowa Poznań — social media i reklama | FOTZ"
      description="Agencja marketingowa FOTZ w Poznaniu: strategie, kampanie, strony, filmy i social media. Poznaj portfolio, zakres obsługi marketingowej i wycenę projektu."
      canonical="https://www.fotz-studio.pl/agencja-marketingowa/poznan"
    />
    <ServiceEditorial {...content} workAfterScope />
  </>;
}
