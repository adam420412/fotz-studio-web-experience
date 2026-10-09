import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const content = {
  title: "Social media marketing dla firm",
  eyebrow: "Strategia · zdjęcia · rolki · reklamy",
  path: "/uslugi/social-media-marketing",
  lead: "Pokaż ludzi, produkt i pracę, która stoi za Twoją marką. Łączymy plan komunikacji, własne zdjęcia i filmy oraz kampanie na Facebooku i Instagramie. Dobieramy zakres do celu firmy i materiałów, które już masz.",
  summary: [
    "Ustalamy odbiorców, cel i rolę social media w Twojej sprzedaży.",
    "Planujemy tematy, produkcję oraz drogę od publikacji do kontaktu.",
    "Uzgadniamy liczbę materiałów, akceptację, budżet i sposób raportowania."
  ],
  scopeTitle: "Wybierz wsparcie, którego potrzebujesz.",
  scope: [
    { title: "Strategia i plan tematów", text: "Przegląd profili, odbiorców i oferty. Określamy tematy, formaty, kanały oraz cel każdej grupy materiałów. Plan uwzględnia możliwości produkcji i czas na akceptację.", href: "/social-media/strategia", link: "Strategia social media" },
    { title: "Prowadzenie profili", text: "Kalendarz publikacji, teksty, przygotowanie postów i publikowanie po akceptacji. Osobno ustalamy zakres moderacji, godziny obsługi oraz przekazywanie pytań klientów do firmy.", href: "/social-media/obsluga", link: "Obsługa i prowadzenie profili" },
    { title: "Zdjęcia, rolki i treści", text: "Materiały z Twojej firmy: ludzie, realizacje, produkty i wydarzenia. Ustalamy scenariusze nagrań, formaty, napisy, wersje do reklam i liczbę gotowych publikacji.", href: "/social-media/content", link: "Produkcja treści do social media" },
    { title: "Kampanie Meta Ads", text: "Reklamy na Facebooku i Instagramie dopasowane do oferty oraz celu. Przygotowujemy kreacje, stronę lub formularz docelowy i pomiar. Emisję reklam wyceniamy osobno od obsługi.", href: "/performance-marketing/meta-ads", link: "Reklamy Facebook i Instagram" },
    { title: "Pomiar i wnioski", text: "Sprawdzamy zasięg, wejścia na stronę, zapytania oraz ich jakość. Jeśli udostępniasz dane sprzedażowe, porównujemy również pozyskanych klientów i koszty. Raport kończymy planem zmian.", href: "/social-media/analityka", link: "Analityka social media" },
    { title: "Wsparcie Twojego zespołu", text: "Możemy przygotować same zdjęcia i filmy albo przejąć wybrany fragment obsługi. Dzielimy odpowiedzialność z osobą prowadzącą marketing po Twojej stronie.", href: "/realizacje", link: "Zobacz nasze realizacje" }
  ],
  sections: [
    { title: "Czym jest social media marketing?", text: "To planowanie i prowadzenie komunikacji firmy w mediach społecznościowych: od poznania odbiorców, przez treści i rozmowy, po płatną promocję oraz ocenę efektów. Post może wyjaśniać usługę, rolka pokazywać realizację, a reklama kierować do konkretnej oferty. Te działania powinny mieć wspólny cel i czytelny następny krok dla odbiorcy." },
    { title: "Na których platformach działać?", text: "Zaczynamy od miejsc, w których można dotrzeć do Twoich odbiorców i regularnie publikować przydatne materiały. Instagram i Facebook mogą połączyć zdjęcia, rolki, komunikację oraz reklamy Meta. LinkedIn warto rozważyć przy komunikacji zawodowej, a TikTok przy planie opartym na krótkim wideo. Dobór kanału i zakres obsługi uzgadniamy po analizie firmy; nie każda marka potrzebuje wszystkich platform." },
    { title: "Jak powstają materiały?", text: "Zbieramy pytania klientów i ustalamy tematy. Następnie przygotowujemy listę ujęć oraz harmonogram sesji lub nagrań. Gotowe teksty, zdjęcia i filmy trafiają do akceptacji przed publikacją. W portfolio możesz obejrzeć spot CUPRA × Enea Stadion i rolki z wydarzeń — to przykłady naszej produkcji, które pomagają ustalić kierunek Twoich materiałów.", href: "/social-media/obsluga#materialy", link: "Obejrzyj spot i rolki" },
    { title: "Ile kosztuje social media marketing?", text: "Koszt zależy od liczby kanałów, publikacji, dni zdjęciowych, montażu i zakresu obsługi wiadomości. W ofercie rozdzielamy stałą obsługę, dodatkową produkcję oraz budżet płacony platformom reklamowym. Podaj adresy profili, cel, planowany zakres i termin — przygotujemy wycenę odpowiednią do tych potrzeb.", href: "/kontakt", link: "Porozmawiajmy o zakresie i wycenie" },
    { title: "Co pokazuje raport?", text: "Zasięg mówi, do ilu osób dotarła publikacja; kliknięcia pokazują zainteresowanie dalszą treścią. Zapytania, rozmowy i zamówienia pozwalają ocenić znaczenie tych działań dla firmy. Sprawdzamy je osobno, z uwzględnieniem wydatków i sprawności pomiaru. Ustalamy, które treści rozwijać, jakie pytania pozostają bez odpowiedzi i co zmienić w następnym okresie.", href: "/blog/czym-sa-kampanie-reklamowe-i-jak-skutecznie-je-prowadzic", link: "Jak zaplanować i mierzyć kampanię reklamową" }
  ],
  faqs: [
    { question: "Czy mogę zamówić tylko rolki lub sesję zdjęciową?", answer: "Tak. Możemy przygotować materiały do wykorzystania przez Twój zespół. Przed produkcją ustalamy liczbę materiałów, formaty, przeznaczenie, poprawki i sposób przekazania plików." },
    { question: "Czy muszę dostarczyć własne materiały?", answer: "Możemy wykorzystać Twoje dostępne zdjęcia i filmy albo zaplanować nową produkcję. Potrzebujemy informacji o ofercie, odbiorcach oraz dostępu do osób, produktów lub miejsc, które mają pojawić się w materiałach." },
    { question: "Czy prowadzenie profilu obejmuje reklamy?", answer: "Zakres publikacji i zakres kampanii reklamowych ustalamy osobno. Wycena określa, kto prowadzi reklamy, jakie materiały przygotowujemy i jaki budżet przeznaczasz na ich emisję." },
    { question: "Kto zatwierdza posty i odpowiada klientom?", answer: "Wyznaczamy osobę po Twojej stronie i termin akceptacji. Zakres moderacji, godziny odpowiedzi oraz przekazywanie pytań handlowych ustalamy przed startem. Szczegółowe odpowiedzi dotyczące oferty mogą wymagać udziału Twojego zespołu." },
    { question: "Kiedy będzie można ocenić efekty?", answer: "Najpierw sprawdzamy wykonanie planu, reakcje na treści i działanie pomiaru. Ocena zapytań i sprzedaży wymaga danych oraz czasu odpowiadającego procesowi zakupowemu. Nie ustalamy jednej obietnicy wzrostu dla wszystkich firm." }
  ]
};

export default function SocialMediaMarketing() {
  return <>
    <SEOHead
      title="Social media marketing dla firm — oferta | FOTZ Studio"
      description="Strategia social media, prowadzenie profili, zdjęcia, rolki i Meta Ads. Zobacz realizacje FOTZ Studio, zakres współpracy i sposób wyceny dla Twojej firmy."
      canonical="https://www.fotz-studio.pl/uslugi/social-media-marketing"
    />
    <ServiceEditorial {...content} workAfterScope />
  </>;
}
