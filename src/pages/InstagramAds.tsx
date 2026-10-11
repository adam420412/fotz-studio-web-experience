import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";
import { enquiryHref } from "@/lib/enquiry.mjs";

const path = "/performance-marketing/instagram-ads";
const scope = [
  { title: "Cel i odbiorcy kampanii", text: "Ustalamy ofertę, grupę odbiorców, obszar działania i oczekiwany następny krok: wizytę na stronie, zapytanie lub zakup. Dobieramy ustawienia kampanii do celu i dostępnego pomiaru." },
  { title: "Kreacje do aktualności", text: "Zdjęcia, grafiki, wideo i karuzele z czytelnym komunikatem. Przygotowujemy warianty, które pokazują produkt, usługę lub realizację i prowadzą do konkretnej oferty.", href: "/social-media/content", link: "Produkcja treści do social media" },
  { title: "Reklamy w Stories i Reels", text: "Pionowe filmy i materiały dopasowane do telefonu. Projektujemy początek filmu, napisy, kadry i wezwanie do działania; przed emisją sprawdzamy podgląd danego umiejscowienia.", href: "/uslugi/produkcja-video", link: "Zobacz nasze spoty reklamowe" },
  { title: "Konfiguracja i uruchomienie", text: "Pracujemy w Menedżerze reklam Meta. Sprawdzamy dostępy, miejsce docelowe, budżet, harmonogram i dostępne umiejscowienia. Kreacje oraz warunki testu akceptujesz przed startem." },
  { title: "Pomiar zapytań lub zakupów", text: "Uzgadniamy zdarzenia, oznaczenia linków i sposób przekazywania zgłoszeń. Sprawdzamy drogę od reklamy do formularza lub sklepu; zakres integracji z analityką i CRM określamy w ofercie." },
  { title: "Optymalizacja i raport", text: "Porównujemy komunikaty, materiały i odbiorców. Raportujemy koszty oraz wyniki zgodnie z celem, a po stronie firmy weryfikujemy jakość kontaktów. Zmiany budżetu wymagają uzgodnienia." },
];
const sections = [
  {
    title: "Jak działają kampanie Instagram Ads?",
    text: "Instagram Ads to płatne reklamy na Instagramie obsługiwane w systemie Meta Ads. Materiał może prowadzić do oferty na stronie, formularza lub rozmowy — sposób kontaktu dobieramy do celu oraz możliwości konta. Zaczynamy od ustalenia, komu i co chcemy pokazać. Dopiero potem wybieramy format, grupę odbiorców i budżet. Regularne prowadzenie profilu oraz płatna emisja są różnymi zadaniami, które można połączyć w jednym planie.",
    href: "/social-media/obsluga", link: "Potrzebujesz także prowadzenia Instagrama?",
  },
  {
    title: "Ile kosztuje reklama na Instagramie?",
    text: "Koszt współpracy rozpisujemy na obsługę kampanii, przygotowanie materiałów i budżet reklamowy płacony Meta. Osobno ustalamy ewentualne prace nad stroną, formularzem lub pomiarem. Koszt kliknięcia i pozyskania kontaktu zależy od oferty, konkurencji, odbiorców oraz kreacji. Dlatego nie podajemy jednej stawki CPC ani gwarantowanego kosztu klienta dla każdej branży. Budżet testu ustalamy przed uruchomieniem, razem z zakresem oceny i zasadami dalszych decyzji.",
    points: ["Obsługa: konfiguracja, monitoring, analiza i uzgodnione zmiany kampanii.", "Produkcja: liczba grafik lub filmów, formaty, poprawki i potrzebne nagrania.", "Emisja: środki na wyświetlanie reklam; nie są wynagrodzeniem agencji.", "Wycena: prześlij ofertę, adres profilu i strony, obszar sprzedaży oraz planowany budżet."],
  },
  {
    title: "Formaty reklam: od zdjęcia do Reels",
    text: "Zdjęcie lub krótki film może pokazać produkt i jego zastosowanie. Karuzela pozwala rozłożyć ofertę na kolejne kadry, a Stories i Reels dają miejsce na pionowy materiał. Format dobieramy do komunikatu i dostępnych zasobów. Nie każdy film z profilu nadaje się od razu do reklamy: sprawdzamy kadrowanie, czytelność napisów, dźwięk, prawa do materiałów i wymagania emisji. Pokazujemy, co odbiorca otrzymuje i jak może zrobić następny krok.",
    points: ["Początek: produkt, problem lub konkretne zastosowanie, które szybko wyjaśnia temat.", "Treść: jeden główny komunikat, dowód w postaci realizacji i czytelne wezwanie do działania.", "Warianty: inne otwarcie, kadr lub argument do porównania; liczbę wersji zapisujemy w zakresie produkcji."],
    href: "/social-media/obsluga#materialy", link: "Obejrzyj spot CUPRA × Enea Stadion i nasze rolki",
  },
  {
    title: "Uruchomienie kampanii krok po kroku",
    text: "Najpierw sprawdzamy ofertę oraz drogę klienta po kliknięciu. Uzgadniamy cel, obszar działania i odbiorców, następnie przygotowujemy kreacje. Po akceptacji konfigurujemy kampanię w Menedżerze reklam, testujemy linki i pomiar oraz kontrolujemy wydatki. Konta pozostają własnością firmy; ustalamy uprawnienia do potrzebnych zasobów. Zakres targetowania i dostępność formatów zależą także od konta, rodzaju oferty oraz aktualnych zasad Meta.",
    points: ["Brief: profil, strona, oferta, materiały, budżet i osoba odpowiedzialna za odpowiedzi klientom.", "Przygotowanie: teksty, obrazy lub filmy, miejsce docelowe i zdarzenie mierzące cel.", "Start: akceptacja materiałów, kontrola emisji i sprawdzenie, czy zgłoszenia trafiają do właściwej osoby.", "Dalsza praca: porównanie danych, wnioski oraz uzgodnione zmiany kreacji i ustawień."],
  },
  {
    title: "Jak mierzymy skuteczność reklam na Instagramie?",
    text: "Dobieramy wskaźnik do zadania kampanii. Zasięg informuje o dotarciu, kliknięcie o reakcji, a odebrany formularz o zgłoszeniu. Dopiero rozmowa i dane firmy pozwalają ocenić, czy kontakt był wartościowy. Przy sprzedaży analizujemy potwierdzone zakupy i przychód w zakresie dostępnego pomiaru. Jeśli wdrażamy Meta Pixel lub integrację zdarzeń, testujemy ich działanie i ustawienia zgód. W raporcie oddzielamy dane platformy od potwierdzonych wyników w firmie.",
    points: ["Dla zapytań: koszt zgłoszenia, poprawność danych, kontakt z klientem i jego zainteresowanie ofertą.", "Dla sklepu: zakupy, wartość zamówień i koszt reklam; przychód nie jest automatycznie zyskiem.", "Dla każdej kampanii: ograniczenia pomiaru i konkretna decyzja wynikająca z raportu."],
    href: "/performance-marketing/meta-ads", link: "Zobacz szerszy zakres kampanii Meta Ads",
  },
  {
    title: "Przykład FOTZ Studio: kampania Dawid EDU",
    text: "Dla Dawid EDU połączyliśmy reklamę na Facebooku i Instagramie z kreacjami oraz poprawkami strony rekrutacyjnej. Materiały odpowiadały na pytania rodziców, a strona prowadziła do krótkiego formularza. W opisie realizacji pokazujemy zakres prac i dane całej kampanii Meta Ads. Nie przypisujemy tych wyników wyłącznie Instagramowi i nie utożsamiamy kliknięć z przyjętymi uczniami. To przykład tego, jak łączymy reklamę z drogą do kontaktu.",
    href: "/realizacje/dawid-edu", link: "Zobacz kreacje i raport kampanii Dawid EDU",
  },
  {
    title: "Masz już reklamy, ale nie masz zapytań?",
    text: "Zaczynamy od miejsca, w którym urywa się kontakt: dopasowania komunikatu do oferty, jakości ruchu, formularza, pomiaru lub obsługi zgłoszeń. Samo zwiększenie budżetu nie rozwiązuje każdego problemu. Możemy uzgodnić przegląd istniejącej kampanii i plan poprawek albo przejąć jej prowadzenie. Przed wyceną potrzebujemy informacji o celu i dostępu do danych, które pozwalają ocenić dotychczasowe działania.",
    href: enquiryHref("marketing", "campaign_audit"), link: "Zapytaj o przegląd kampanii",
  },
];
const faqs = [
  { question: "Czy lepiej wybrać Instagram Ads czy Facebook Ads?", answer: "Zależy to od odbiorców, oferty i materiałów. Możemy porównać emisję na Instagramie oraz Facebooku w ramach Meta Ads i ocenić wyniki według wspólnego celu. Nie zakładamy, że jedna platforma będzie tańsza lub lepsza dla każdej firmy. Jeśli potrzebujesz emisji tylko na Instagramie, sprawdzamy dostępne ustawienia dla danej kampanii." },
  { question: "Czym kampania różni się od przycisku Promuj post?", answer: "Promowanie istniejącego posta upraszcza rozpoczęcie reklamy. Prowadzenie kampanii obejmuje również plan celu, odbiorców, kreacji, budżetu i pomiaru. Menedżer reklam pozwala pracować nad tymi elementami wspólnie i porównywać warianty. Dobieramy sposób uruchomienia do zadania, zamiast traktować samo promowanie posta jako kompletną strategię." },
  { question: "Czy budżet reklamowy jest w cenie obsługi?", answer: "Budżet emisji płacony Meta, wynagrodzenie za obsługę i produkcję materiałów pokazujemy osobno. W ofercie określamy zakres, koszty oraz zasady akceptowania zmian. Cena filmu reklamowego także jest osobną pozycją i zależy od scenariusza, nagrań, montażu i liczby wersji." },
  { question: "Czy potrzebuję strony internetowej do reklamy?", answer: "Nie w każdym modelu. Można ustalić kontakt przez formularz lub wiadomość, jeżeli dany cel i konto to obsługują. Przy bardziej złożonej ofercie strona pomaga wcześniej wyjaśnić zakres i pokazać realizacje. W obu przypadkach sprawdzamy, kto otrzyma zapytanie i jak na nie odpowie." },
  { question: "Czy możecie wykorzystać nasze zdjęcia i rolki?", answer: "Tak, po sprawdzeniu jakości, formatu, komunikatu oraz praw do wykorzystania w reklamie. Dostępność muzyki przy publikacji rolki nie oznacza automatycznie możliwości użycia jej w płatnej kampanii. Jeśli potrzeba nowych materiałów, osobno ustalamy zdjęcia, nagrania, montaż i wersje do testu." },
  { question: "Jak szybko kampania przyniesie klientów?", answer: "Nie deklarujemy terminu ani liczby klientów. Po uruchomieniu kontrolujemy emisję i poprawność pomiaru; czas potrzebny do oceny zależy od budżetu, liczby zdarzeń oraz procesu zakupu. Wspólnie ustalamy moment przeglądu i kryteria dalszych decyzji. Wyświetlenia reklamy nie są potwierdzeniem sprzedaży." },
  { question: "Czy obsługa Instagram Ads obejmuje prowadzenie profilu?", answer: "Tylko jeśli włączymy je do zakresu. Kampanie reklamowe, regularne posty, Stories, moderacja i odpowiedzi na wiadomości wymagają osobnego ustalenia odpowiedzialności. Możemy połączyć te prace albo przygotować same reklamy i materiały." },
];

export default function InstagramAds() {
  return <>
    <SEOHead title="Instagram Ads — kampanie i reklama na Instagramie | FOTZ" description="Prowadzimy kampanie Instagram Ads: kreacje, Stories, Reels, budżet i pomiar zapytań. Zobacz realizację Dawid EDU i ustal zakres reklamy z FOTZ Studio." canonical={`https://www.fotz-studio.pl${path}`} />
    <ServiceEditorial
      path={path} title="Instagram Ads — reklama na Instagramie dla firm"
      eyebrow="FOTZ Studio · od kreacji do kontaktu"
      lead="Przygotowujemy i prowadzimy kampanie Instagram Ads: od pomysłu na zdjęcia lub wideo po emisję i ocenę zapytań. Łączymy kreacje, ofertę oraz drogę do kontaktu, żeby było wiadomo, co reklamujemy i jak sprawdzamy efekt."
      summary={["Pokaż nam ofertę, profil i materiały. Ustalimy cel oraz odbiorców kampanii.", "Oddzielnie wycenimy obsługę, produkcję kreacji i budżet płacony Meta.", "Przed startem uzgodnimy pomiar oraz sposób odbierania i oceny zapytań."]}
      scopeTitle="Co obejmuje prowadzenie kampanii Instagram Ads?"
      scope={scope} sections={sections} faqs={faqs}
      enquiryVariant="instagram_ads" workAfterScope
    />
  </>;
}
