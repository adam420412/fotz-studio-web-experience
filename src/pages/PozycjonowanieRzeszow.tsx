import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/uslugi/pozycjonowanie/rzeszow",
  city: "Rzeszów",
  headingPrefix: "Skuteczne pozycjonowanie stron internetowych",
  headingSuffix: " — pozycjonowanie w Rzeszowie i SEO",
  cityGenitive: "Rzeszowa",
  title: "Pozycjonowanie stron Rzeszów — usługi pozycjonowania | Agencja SEO",
  description: "Rzeszów: pozycjonowanie stron dla firm i usługi pozycjonowania lokalnego. Agencja SEO FOTZ Studio — audyt, optymalizacja i widoczność w Google.",
  lead: "Prowadzisz firmę w Rzeszowie lub okolicy i chcesz, aby klienci znajdowali Twoją ofertę w Google? Łączymy audyt, optymalizację strony i treści z czytelną drogą do kontaktu.",
  hero: { image: "conference", caption: "Konferencja z portfolio FOTZ — dokumentacja wydarzenia. Własne zdjęcia pomagają pokazać firmę na stronie oferty." },
  scopeTitle: "Pozycjonowanie Rzeszów – skuteczne SEO w Rzeszowie",
  planningTitle: "Ile kosztuje pozycjonowanie stron w Rzeszowie?",
  scope: [
    { title: "Audyt strony internetowej", text: "Sprawdzamy indeksowanie, błędy techniczne, wersję mobilną i dane z Search Console.", href: "/seo/audyt", link: "Zobacz audyt strony" },
    { title: "Słowa kluczowe i oferta", text: "Każdej usłudze przypisujemy frazę i jedną stronę, aby podstrony nie konkurowały ze sobą.", href: "/seo/pozycjonowanie", link: "Poznaj pozycjonowanie" },
    { title: "Treści dla klientów", text: "Opisujemy zakres usługi, warunki i pytania przed zakupem, zachowując naturalny język.", href: "/content-marketing/strategia", link: "Strategia treści" },
    { title: "Profil Firmy w Google", text: "Dla kwalifikującej się firmy porządkujemy kategorię, godziny i kontakt w wizytówce.", href: "/uslugi/pozycjonowanie-lokalne", link: "Lokalne SEO" },
    { title: "Optymalizacja techniczna", text: "Poprawiamy strukturę, linkowanie, metadane i wydajność wskazaną w audycie.", href: "/seo/techniczne", link: "Prace techniczne" },
    { title: "Kontakt i konwersja", text: "Sprawdzamy formularz i telefon, aby zapytanie trafiało do właściwej osoby.", href: "/kontakt", link: "Omów swoją stronę" },
  ],
  examplesTitle: "Pozycjonowanie stron internetowych Rzeszów: przykładowe sytuacje",
  examplesIntro: "To scenariusze do rozmowy o zakresie, a nie wyniki klientów.",
  examples: [
    { title: "Usługodawca z Rzeszowa i okolic", text: "Gabinet lub serwis obsługuje Rzeszów oraz pobliskie gminy. Opisujemy realny obszar działania zamiast tworzyć stronę dla każdej miejscowości.", measure: "telefony i formularze z ruchu organicznego." },
    { title: "Firma B2B z Podkarpacia", text: "Dostawca dla przemysłu czy branży lotniczej sprzedaje w całym kraju. Rozwijamy strony specjalizacji, a lokalne frazy z Rzeszowa pozostają jednym z wątków.", measure: "zapytania ofertowe dla wybranych usług." },
    { title: "Sklep internetowy", text: "Porządkujemy kategorie, opisy produktów i filtry, a lokalny odbiór traktujemy jako dodatkowy atut.", measure: "zamówienia, jeśli sklep je wiarygodnie rejestruje." },
  ],
  content: [
    { title: "Na czym polega pozycjonowanie stron w Rzeszowie?", text: "Pozycjonowanie stron w Rzeszowie pomaga powiązać ofertę z pytaniami, które potencjalni klienci wpisują w wyszukiwarkę. Rzeszów i okolice to także lokalny rynek gmin wokół miasta. To rynek, na którym obok handlu i usług działają firmy technologiczne, produkcyjne i zakłady z otoczenia Doliny Lotniczej. Dlatego zaczynamy od celu: telefonu, zapytania ofertowego albo sprzedaży." },
    { title: "Pozycjonowanie lokalne: lokalny klient i Mapy", text: "Lokalne SEO i pozycjonowanie w Rzeszowie łączą witrynę z Profilem Firmy w Google (dawniej profil Google My Business). Wyniki w Mapach zależą też od odległości, więc lokalnych wynikach wyszukiwania przyglądamy się osobno. Klient ze Staroniwy czy Słociny potrzebuje aktualnych godzin, dojazdu i kontaktu." },
    { title: "Audyt SEO i optymalizacja strony — kluczowy etap", text: "Audyt strony internetowej obejmuje indeksowanie, błędy techniczne, wersję mobilną i dane z Search Console. Optymalizacja strony dotyczy struktury, linkowania i metadanych. Raport wskazuje, które poprawki są kluczowe, a które mogą poczekać." },
    { title: "Fraza, konkurencja i usługa na stronie www", text: "Frazy dobieramy do usług, które chcesz oferować. Sprawdzamy, czy pod daną frazą wyszukiwarka pokazuje oferty, sklepy czy poradniki, a konkurencja jest punktem odniesienia, nie źródłem tekstów. Każda fraza otrzymuje jedną stronę i cel, dzięki czemu witryna nie dubluje treści." },
    { title: "Pozycjonowanie sklepów internetowych w Rzeszowie", text: "Sklep internetowy wymaga innej optymalizacji niż strona usługowa: kategorie, opisy produktów, warianty i adresy filtrów. Pozycjonowanie sklepów internetowych w Rzeszowie łączymy z pomiarem zamówień, jeśli sklep udostępnia wiarygodne dane." },
    { title: "Agencja SEO Rzeszów — usługi SEO i współpraca", text: "FOTZ Studio to agencja z zespołem w Poznaniu; z firmami z Rzeszowa pracujemy zdalnie i nie przedstawiamy tej oferty jako biura w mieście. Zakres usług SEO, obieg materiałów i akceptację zmian ustalamy przed startem." },
    { title: "Strategie SEO dla firm w Rzeszowie", text: "Strategie pozycjonowania stron w Rzeszowie zależą od tego, czy miasto jest rynkiem docelowym, czy tylko siedzibą. Usługa wymagająca wizyty potrzebuje lokalnej treści, a firma B2B — stron specjalizacji. Plan trzeba dostosować do możliwości obsługi zapytań." },
    { title: "Pozycje w wynikach wyszukiwania a nowych klientów", text: "Skuteczne pozycjonowanie nie kończy się na pozycji strony w wynikach wyszukiwania Google — ta nie zastąpi czytelnej oferty, która przyciąga nowych klientów. Sprawdzamy, czy ruch na stronie zamienia się w zapytanie i jak mierzona jest konwersja. Każda firma dostaje raport, w którym oddzielamy działania SEO, widoczność, kliknięcia i kontakty." },
    { title: "Marketing internetowy: SEO i Google Ads", text: "Reklamy Google Ads mają osobny budżet i nie kupują pozycji organicznej. Działania marketingowe planujemy razem, ale rozliczamy kanały osobno, aby ocenić, skąd przychodzą zapytania." },
    { title: "Profesjonalne pozycjonowanie stron www — czego nie obiecujemy", text: "Profesjonalne pozycjonowanie to uzgodnione prace i raport, a nie gwarancja pozycji w Google. Nie obiecujemy TOP 10 ani liczby klientów. Inwestycja w pozycjonowanie ma sens, gdy unikalny opis usług odpowiada na realne pytania klientów. W Twojej firmie wiedza o klientach jest równie ważna jak praca specjalistów od SEO." },
  ],
  planning: [
    { title: "Diagnoza", text: "Na start przeglądamy stronę, konkurencję i dane, aby wskazać najważniejsze poprawki." },
    { title: "Wycena zakresu", text: "Koszt zależy od wielkości serwisu, stanu technicznego i potrzebnych treści. Zadania i koszty dodatkowe rozpisujemy przed startem." },
    { title: "Raport", text: "Łączymy listę zmian z danymi z Search Console i informacjami o kontaktach." },
  ],
  related: {
    title: "Działasz także w innych miastach?",
    text: "Zobacz zakres pracy dla Lublina i Krakowa albo ofertę poznańską, gdzie pracuje nasz zespół.",
    links: [
      { href: "/seo/pozycjonowanie-lublin", label: "Pozycjonowanie Lublin" },
      { href: "/seo/pozycjonowanie-krakow", label: "Pozycjonowanie Kraków" },
      { href: "/seo/pozycjonowanie-poznan", label: "Pozycjonowanie Poznań" },
    ],
  },
  faqs: [
    { question: "Czy gwarantujecie pierwsze miejsce w Google?", answer: "Nie. Nikt nie może zagwarantować pozycji. Zobowiązujemy się do uzgodnionych prac, terminów wdrożeń i raportowania." },
    { question: "Czy macie biuro w Rzeszowie?", answer: "Nie. Zespół pracuje w Poznaniu, a firmy z Rzeszowa obsługujemy zdalnie." },
    { question: "Ile czasu potrzeba na efekty pozycjonowania w Rzeszowie?", answer: "To zależy od stanu witryny, konkurencji i zakresu prac. Ustalamy termin przeglądu danych, bez obietnic konkretnej pozycji." },
    { question: "Czy pozycjonowanie opłaca się małej firmie z Rzeszowa?", answer: "Zależy to od popytu, konkurencji i marży. Lokalna firma może zacząć od jednej ważnej usługi i wizytówki." },
    { question: "Czy potrzebuję nowej strony?", answer: "Niekoniecznie. Najpierw sprawdzamy obecną witrynę; przebudowę proponujemy tylko z konkretnego powodu." },
  ],
};

export default function PozycjonowanieRzeszow() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
