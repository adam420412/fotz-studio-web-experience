import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/performance-marketing/meta-ads";

const scope = [
  {
    title: "Plan kampanii Meta Ads",
    text: "Zaczynamy od celu biznesowego: zapytania o usługę, sprzedaż w e-commerce, zapisy na wydarzenie lub rekrutacja. Do celu dobieramy rodzaj kampanii, grupy docelowe, miejsca emisji i budżet reklamowy. Plan zapisujemy przed startem, żeby było jasne, co oceniamy po pierwszych tygodniach.",
  },
  {
    title: "Kreacje reklamowe na wszystkie miejsca",
    text: "Przygotowujemy grafiki, karuzele i krótkie wideo w formatach dla aktualności, relacji i Reels. Jeden komunikat dostosowujemy do różnych miejsc wyświetlania. Liczbę wersji, poprawki i ewentualną produkcję zdjęć lub filmu ustalamy w wycenie.",
    href: "/uslugi/reklama-facebook",
    link: "Zobacz zakres kreacji reklamowych",
  },
  {
    title: "Konfiguracja, pomiar i optymalizacja kampanii",
    text: "Porządkujemy konto reklamowe w Menedżerze reklam, piksel Meta i Conversions API oraz zdarzenia na stronie. Analizujemy wyniki, wyłączamy słabsze reklamy i testujemy nowe warianty. Raport pokazuje koszt, efekty kampanii i jakość pozyskanych kontaktów.",
  },
];

const sections = [
  {
    title: "Agencja Meta Ads — czym zajmujemy się w ekosystemie Meta",
    text: "Meta Ads to system reklamowy, który obejmuje Facebooka, Instagrama, Messengera i Audience Network. Jedna kampania może wyświetlać reklamy w wielu z tych miejsc, a jedno konto reklamowe zbiera dane z całej aktywności. Jako agencja Meta Ads odpowiadamy za całość: strukturę kampanii, kreacje reklamowe, budżet, pomiar i wnioski. Jeśli potrzebujesz głównie reklamy na jednej platformie, przygotowaliśmy też osobne strony dla Facebook Ads i Instagram Ads.",
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
    title: "Kampanie Meta Ads dla nowych klientów i sprzedaży",
    text: "Rodzaj kampanii wynika z tego, co ma zrobić odbiorca. Kampania na kontakty prowadzi do formularza Lead Ads albo formularza na stronie. Kampania sprzedażowa w e-commerce korzysta z katalogu produktów i remarketingu osób, które oglądały ofertę. Kampania zasięgowa pomaga pokazać markę lub wydarzenie mieszkańcom określonego obszaru. Nie łączymy wszystkiego w jednej kampanii: każdy cel potrzebuje innego komunikatu i innej miary sukcesu.",
  },
  {
    title: "Grupy docelowe i Advantage+",
    text: "Grupy odbiorców budujemy z kilku źródeł: lokalizacji, zainteresowań, osób odwiedzających stronę, listy klientów oraz grup podobnych (lookalike). Automatyzacje Advantage+ mogą samodzielnie szukać odbiorców i rozdzielać budżet. Sprawdzają się wtedy, gdy konto ma wystarczająco danych o konwersjach. Przy małym budżecie lub nowym koncie zaczynamy od węższych ustawień i rozszerzamy je na podstawie wyników.",
  },
  {
    title: "Ile kosztuje kampania Meta Ads?",
    text: "Koszt kampanii ma trzy oddzielne części. Budżet reklamowy płacisz bezpośrednio platformie Meta. Obsługę kampanii i ewentualne przygotowanie materiałów wyceniamy osobno, według liczby kampanii, kreacji i potrzebnych wdrożeń. Minimalny budżet zależy od celu, obszaru i liczby testowanych reklam. Przed startem uzgadniamy limit wydatków i sposób jego kontroli, żeby koszt nie zaskoczył Cię na fakturze.",
    points: [
      "Budżet reklamowy: płatność za emisję, ustawiona na Twoim koncie.",
      "Obsługa kampanii: plan, konfiguracja, optymalizacja i raport.",
      "Materiały: grafiki, teksty i wideo, gdy nie masz gotowych kreacji.",
    ],
  },
  {
    title: "Pomiar: piksel Meta, Conversions API i jakość zapytań",
    text: "Kliknięcia nie są celem samym w sobie. Sprawdzamy, czy formularz działa, czy zdarzenia trafiają do Menedżera reklam i dokąd przechodzi kontakt. Conversions API przesyła dane o konwersjach z serwera, co pomaga, gdy przeglądarka blokuje część informacji. Po stronie firmy oceniamy, ile zgłoszeń to realne szanse sprzedaży. Te dane łączymy w raporcie z wydatkami na reklamę.",
    points: [
      "Zdarzenia: wysłanie formularza, rozmowa, zakup lub zapis — zgodnie z celem.",
      "Koszt kontaktu i koszt sprzedaży liczone oddzielnie.",
      "Wnioski: co zmieniamy w kreacji, grupie docelowej, ofercie lub stronie.",
    ],
  },
  {
    title: "Meta Ads, Google Ads i social media — jak je połączyć",
    text: "Google Ads warto rozważyć, gdy klient sam szuka rozwiązania w wyszukiwarce. Reklamy Meta docierają do osób, które jeszcze nie szukają, ale pasują do grupy docelowej. Prowadzenie profili w social media to osobny zakres: plan publikacji, moderacja i odpowiedzi na komentarze. Możemy połączyć te działania, jeśli potrzebujesz spójnego marketingu w kilku kanałach.",
    href: "/social-media/obsluga",
    link: "Obsługa social media",
  },
  {
    title: "Realizacja: kampania rekrutacyjna Meta Ads",
    text: "Dla Dawid EDU, szkoły i przedszkola w Poznaniu, prowadziliśmy kampanię rekrutacyjną na Facebooku i Instagramie. Przygotowaliśmy osobne kreacje dla różnych etapów edukacji i poprawiliśmy stronę, do której kierowały reklamy. W case study opisujemy zakres pracy, dane z konta i ograniczenia pomiaru. To przykład naszej pracy, nie obietnica takiego samego wyniku w innej branży.",
    href: "/realizacje/dawid-edu",
    link: "Zobacz realizację Dawid EDU",
  },
];

const faqs = [
  {
    question: "Czym różni się Meta Ads od Facebook Ads?",
    answer: "Facebook Ads to potoczna nazwa reklam na Facebooku. Meta Ads obejmuje cały system reklamowy Meta: Facebooka, Instagrama, Messengera i Audience Network, zarządzany z jednego Menedżera reklam. Kampania może korzystać z jednego lub kilku miejsc emisji.",
  },
  {
    question: "Jaki minimalny budżet reklamowy jest potrzebny?",
    answer: "Nie podajemy jednej kwoty dla wszystkich. Budżet zależy od celu, obszaru, liczby testowanych reklam i kosztu kontaktu w branży. Przed startem proponujemy budżet testowy i limit wydatków, a po pierwszych tygodniach oceniamy, czy warto go zmienić.",
  },
  {
    question: "Czy konto reklamowe pozostaje moje?",
    answer: "Tak. Pracujemy na koncie reklamowym firmy, w ramach Business Managera i nadanych uprawnień. Płatność za emisję jest ustawiona na Twojej karcie lub fakturze, a dane i piksel zostają po Twojej stronie po zakończeniu współpracy.",
  },
  {
    question: "Czy przejmiecie istniejące kampanie Meta?",
    answer: "Możemy zacząć od przeglądu konta: ustawień kampanii, grup docelowych, kreacji, zdarzeń i formularzy. Na tej podstawie przygotujemy listę zmian. Nie potrzebujemy Twojego hasła — wystarczy dostęp nadany w ustawieniach firmy w Meta.",
  },
  {
    question: "Kiedy widać efekty kampanii?",
    answer: "Pierwsze dane o wyświetleniach i kliknięciach pojawiają się w ciągu kilku dni. Ocena kosztu kontaktu lub sprzedaży wymaga zwykle kilku tygodni i wystarczającej liczby zdarzeń. Nie gwarantujemy określonej liczby klientów, bo wynik zależy też od oferty, ceny i obsługi zapytań.",
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
      description="Agencja Meta Ads FOTZ Studio: kampanie na Facebooku, Instagramie i w Messengerze. Plan, kreacje reklamowe, budżet, piksel i Conversions API oraz raport z jakości zapytań."
      canonical={`https://www.fotz-studio.pl${path}`}
    />
    <ServiceEditorial
      path={path}
      title="Agencja Meta Ads — kampanie na Facebooku i Instagramie"
      eyebrow="FOTZ Studio · kampanie Meta Ads dla firm"
      enquiryVariant="meta_ads"
      lead="Prowadzimy kampanie Meta Ads na Facebooku, Instagramie i w Messengerze: od planu i kreacji reklamowych po budżet, pomiar i optymalizację. Pomagamy pozyskać potencjalnych klientów i pokazujemy oddzielnie koszt emisji, obsługi i materiałów."
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
