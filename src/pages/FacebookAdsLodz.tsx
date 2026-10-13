import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceEditorial } from "@/components/ServiceEditorial";

const path = "/performance-marketing/facebook-ads/lodz";
const scope = [
  { title: "Plan kampanii reklamowej", text: "Wybieramy ofertę, cel i grupę docelową. Ustalamy, czy chcesz pozyskiwać zapytania o usługę, promować wydarzenie, czy sprzedawać produkty. Każdy cel potrzebuje innego komunikatu i pomiaru." },
  { title: "Kreacje na Facebook i Instagram", text: "Przygotowujemy uzgodnione grafiki, teksty i materiały wideo. Format dopasowujemy do miejsca emisji: aktualności, relacji lub Reels. Liczbę wersji i poprawki zapisujemy w wycenie.", href: "/uslugi/video-marketing", link: "Filmy i rolki do reklam" },
  { title: "Konfiguracja i monitorowanie", text: "Porządkujemy konto reklamowe, budżet, harmonogram i zdarzenia. Sprawdzamy stronę docelową oraz drogę zapytania. Raport łączy dane o reklamie z informacją o jakości kontaktów." },
];
const sections = [
  {
    title: "Facebook Ads Łódź — reklama dla Twojej firmy",
    text: "FOTZ Studio prowadzi kampanie dla firm obsługujących Łódź i inne uzgodnione obszary. Pracujemy z Poznania, a brief, akceptację kreacji i omówienie wyników możemy przeprowadzić online. Ewentualną produkcję zdjęć lub filmu na miejscu wyceniamy osobno. Na początku określamy, co chcesz reklamować i dokąd ma trafić odbiorca po kliknięciu. Następnie przygotowujemy zakres prac do zatwierdzenia. Nie wymagamy zamówienia prowadzenia wszystkich profili, aby rozpocząć kampanię.",
  },
  {
    title: "Agencja i firma: plan, harmonogram, odpowiedzialność",
    text: "Dobra współpraca wymaga ustalenia, kto dostarcza ofertę, akceptuje materiały i odbiera wiadomości. Przed startem prosimy o link do strony, firmowy profil, informacje o produktach oraz wcześniejszych kampaniach. Ty potwierdzasz ceny, dostępność i warunki usługi; my odpowiadamy za uzgodniony zakres przygotowania i obsługi reklamy. Termin uruchomienia zależy od materiałów, dostępów i weryfikacji przez platformę. Samo włączenie emisji nie oznacza jeszcze pozyskania nowych klientów.",
    points: ["Brief: usługa, obszar obsługi, budżet i oczekiwany rodzaj zapytań.", "Przygotowanie: komunikat, kreacje, strona lub formularz i pomiar.", "Start: akceptacja materiałów, kosztów oraz sposobu obsługi kontaktów.", "Ocena: dane, jakość zgłoszeń i decyzja o następnych testach."],
  },
  {
    title: "Reklamy na Facebooku: Łódź i właściwa grupa odbiorców",
    text: "Dla lokalnego biznesu ważny jest rzeczywisty obszar obsługi. Salon na Widzewie może potrzebować kontaktów z okolicy, a firma z dojazdem obejmować także Zgierz lub Pabianice. Sklep z siedzibą w Łodzi może sprzedawać w całej Polsce. Zamiast automatycznie zawężać każdą kampanię do miasta, dopasowujemy lokalizację do oferty. Wielkość grupy odbiorców wpływa na możliwości testowania i wydawania budżetu. Ustawienia nie gwarantują dokładnego miejsca zamieszkania każdej osoby; pytania w formularzu pomagają zweryfikować, czy możesz ją obsłużyć.",
  },
  {
    title: "Facebook i Instagram — kreacje dopasowane do grupy docelowej",
    text: "Reklama powinna pokazać produkt lub usługę, wyjaśnić korzyść i wskazać następny krok. Zdjęcie pomaga ocenić wygląd, karuzela porównać warianty, a krótki film zobaczyć zastosowanie. Z dostępnych typów reklam wybieramy te, do których masz odpowiednie materiały i ofertę. Testujemy uzgodnione warianty komunikatu. Wizerunek Twojej marki powinien być spójny w reklamie i na stronie; nie obiecujemy w kreacji czegoś, czego firma nie dostarcza. Content może powstać z nowych nagrań albo z posiadanych materiałów, po sprawdzeniu praw do wykorzystania.",
    href: "/uslugi/reklama-facebook", link: "Zobacz zakres kreacji i kampanii Meta",
  },
  {
    title: "Ile kosztuje reklama na Facebooku i Instagramie?",
    text: "Wycena ma trzy części: obsługę kampanii, przygotowanie materiałów oraz budżet reklamowy płacony platformie Meta. Koszt zależy od liczby produktów, kreacji, kanałów i wymaganych wdrożeń. Uzgadniamy limit wydatków oraz sposób kontroli budżetu; budżet dzienny jest ustawieniem emisji, a nie ceną pozyskania klienta. Nie podajemy jednej stawki za kliknięcie dla całego miasta. Konkurencja, cel, jakość materiałów i zachowanie odbiorców wpływają na wynik. Po poznaniu potrzeb otrzymasz propozycję z zakresem i kosztami do akceptacji.",
  },
  {
    title: "Meta Ads: optymalizacja i pomiar wartościowych zapytań",
    text: "Najpierw określamy, jakie zdarzenie ma znaczenie dla biznesu. Lead to zgłoszenie, które wymaga dalszej oceny — nie każda wiadomość jest szansą sprzedaży. Sprawdzamy działanie formularza i przekazywanie kontaktu do ustalonego miejsca. Jeśli potrzebna jest integracja z CRM, potwierdzamy jej zakres i wykonujemy test. Konfigurację Piksela Meta lub Conversions API uzgadniamy z administratorem strony i mechanizmem zgód. Raport rozdziela wyświetlenia, kliknięcia, formularze oraz potwierdzoną sprzedaż. Optymalizację reklam opieramy na danych, a nie tylko na najtańszym kliknięciu.",
    points: ["Kontakt z klientami: kto odpowiada i jak oznacza jakość zgłoszenia.", "Koszt: wydatki na emisję i obsługę pokazane oddzielnie.", "Sprzedaż: wynik weryfikowany po stronie firmy, z uwzględnieniem zwrotów i marży.", "Wnioski: co zmieniamy w kreacji, ofercie lub stronie i dlaczego."],
  },
  {
    title: "Social media a kampania reklamowa — co obejmuje obsługa?",
    text: "Prowadzenie social media to osobny zakres: plan publikacji, regularne materiały, moderacja i odpowiedzi na komentarze. Kampania płatna nie oznacza automatycznie codziennej obsługi profilu. Możemy połączyć oba zadania, jeśli potrzebujesz spójnej obecności marki w mediach społecznościowych. Wtedy ustalamy, co będziemy publikować, kto akceptuje wpisy i jak obsługiwane są wiadomości. Zasięgi i budowanie rozpoznawalności marki oceniamy oddzielnie od zapytań. Odbiorca może polubić post, nie będąc jeszcze gotowym do zakupu.",
    href: "/social-media/obsluga", link: "Poznaj zakres obsługi social media",
  },
  {
    title: "Nasze realizacje: reklama i droga do kontaktu",
    text: "W projekcie Dawid EDU połączyliśmy stronę internetową z kampanią rekrutacyjną Meta Ads. W case study zobaczysz kreacje i opis zakresu dla szkoły, przedszkola oraz edukacji domowej. To przykład pracy naszego zespołu, a nie deklaracja wyniku kampanii dla firm z Łodzi. Fotografie z własnych realizacji poniżej pokazują także materiały, które pomagają prezentować markę online. Przed wykorzystaniem konkretnego projektu wyjaśniamy, co wykonaliśmy; nie przypisujemy zdjęciom wyników sprzedażowych.",
    href: "/realizacje/dawid-edu", link: "Zobacz realizację Dawid EDU",
  },
];
const faqs = [
  { question: "Jak wybrać agencję Facebook Ads do obsługi firmy z Łodzi?", answer: "Sprawdź zakres realizacji, dostęp do kont, podział kosztów i sposób raportowania. Zapytaj, kto przygotuje materiały i co stanie się ze zgłoszeniem z reklamy. Nasza agencja pracuje z Poznania; współpracę z firmami z Łodzi prowadzimy zdalnie, a zdjęcia lub spotkanie na miejscu uzgadniamy osobno." },
  { question: "Czy reklamy Facebook Ads sprawdzą się w małej firmie?", answer: "Mogą być sposobem sprawdzenia konkretnej oferty, jeśli firma ma środki na emisję, materiały i obsługę zapytań. Dla małych i średnich firm ważny jest ograniczony, czytelny zakres testu. Nie gwarantujemy opłacalności przed poznaniem marży, popytu i wyników." },
  { question: "Facebook Ads czy Google Ads — co wybrać?", answer: "Google Ads warto rozważyć, gdy klient aktywnie szuka rozwiązania. Facebook i Instagram pomagają pokazać ofertę odbiorcom podczas korzystania z serwisów społecznościowych. Dobór kanałów zależy od produktu i procesu zakupu. Nie trzeba uruchamiać obu systemów jednocześnie." },
  { question: "Czy przygotujecie reklamy na Facebooku i Instagramie z moich zdjęć?", answer: "Tak, po ocenie jakości, formatu i możliwości wykorzystania materiałów. Uzgadniamy liczbę kreacji, teksty oraz poprawki. Jeśli potrzebna jest nowa sesja lub nagrania, otrzymasz osobny zakres i koszt produkcji." },
  { question: "Dlaczego kampania ma kliknięcia, ale nie daje zapytań?", answer: "Sprawdzamy zgodność reklamy z ofertą, stronę docelową, działanie formularza i jakość ruchu. Problem może dotyczyć komunikatu, ceny, zaufania albo kontaktu. Samo zwiększenie budżetu nie rozwiązuje tych przyczyn; najpierw ustalamy, gdzie odbiorca rezygnuje." },
  { question: "Czy reklama będzie wyświetlana tylko mieszkańcom Łodzi?", answer: "Możemy ustawić uzgodniony obszar kierowania według opcji dostępnych na koncie. Lokalizacja jest sygnałem platformy, dlatego nie stanowi gwarancji adresu zamieszkania. W ofercie i formularzu jasno podajemy obszar usługi, a firma potwierdza możliwość realizacji przy kontakcie." },
  { question: "Czy przejmiecie istniejące konto reklamowe?", answer: "Możemy rozpocząć od przeglądu po uzyskaniu potrzebnych uprawnień. Konto pozostaje po stronie klienta. Zakres porządkowania kampanii, zdarzeń i materiałów ustalamy po sprawdzeniu stanu; nie potrzebujemy hasła przesłanego w wiadomości." },
];

export default function FacebookAdsLodz() {
  return <>
    <SEOHead title="Facebook Ads Łódź — agencja reklamy Facebook i Instagram | FOTZ" description="Reklama Facebook i Instagram dla firm z Łodzi. Kreacje, kampania, budżet i pomiar zapytań. Zobacz realizacje i ustal zakres zdalnej obsługi FOTZ Studio." canonical={`https://www.fotz-studio.pl${path}`} />
    <ServiceEditorial path={path} title="Agencja Facebook Ads Łódź — reklamy Meta i social media" eyebrow="FOTZ Studio · kampanie Meta dla firm z Łodzi" area="Łódź" enquiryVariant="meta_ads"
      lead="Przygotowujemy reklamy na Facebooku i Instagramie: od oferty i kreacji po emisję oraz ocenę zapytań. Ustalmy cel, budżet i obszar obsługi Twojej firmy. Otrzymasz konkretny zakres prac, a koszty materiałów, prowadzenia kampanii i emisji pokażemy oddzielnie."
      summary={["Pokaż ofertę, profil, stronę i dotychczasowe działania.", "Uzgodnimy odbiorców, materiały, budżet i obsługę zgłoszeń.", "Po akceptacji uruchomimy ustalony zakres i ocenimy dane."]}
      scopeTitle="Facebook Ads i social media — zakres kampanii" scope={scope} sections={sections} faqs={faqs} workAfterScope />
  </>;
}
