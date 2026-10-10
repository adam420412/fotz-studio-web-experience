import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSeoOffer, type LocalSeoOfferProps } from "@/components/LocalSeoOffer";

const offer: LocalSeoOfferProps = {
  path: "/seo/pozycjonowanie-gdansk",
  city: "Gdańsk",
  cityGenitive: "Gdańska",
  title: "Pozycjonowanie Gdańsk — SEO dla firm i usług | FOTZ Studio",
  description: "SEO dla firm z Gdańska i Trójmiasta: audyt strony, lokalny zasięg, treści i pomiar kontaktów. Zobacz realizacje FOTZ oraz zasady wyceny pozycjonowania.",
  lead: "Pomagamy przedstawić ofertę osobom, które szukają konkretnej usługi lub miejsca w Gdańsku. Sprawdzamy stronę, planujemy treści i porządkujemy drogę do kontaktu, uwzględniając rzeczywisty zasięg obsługi w Trójmieście.",
  hero: { image: "lounge", caption: "Lech Poznań Lounge na Enea Stadionie — fotografia wnętrza z realizacji FOTZ. Kadr pokazuje przestrzeń i jej wyposażenie." },
  scope: [
    { title: "Audyt oferty i indeksowania", text: "Weryfikujemy najważniejsze adresy, tytuły i dostępność treści dla wyszukiwarki. W Search Console sprawdzamy, jakie zapytania prowadzą do ofert, a na telefonie — czy można dotrzeć do potrzebnych informacji.", href: "/seo/audyt", link: "Zobacz audyt SEO" },
    { title: "Zasięg w Trójmieście", text: "Ustalamy, gdzie usługa jest faktycznie dostępna: w punkcie w Gdańsku, z dojazdem czy również w Gdyni i Sopocie. Treści wyjaśniają warunki obsługi oraz kontakt do właściwego miejsca.", href: "/uslugi/pozycjonowanie-lokalne", link: "Poznaj pozycjonowanie lokalne" },
    { title: "Informacje przed wizytą", text: "Porządkujemy opis usługi, godziny, dostępne warianty i sposób ustalenia terminu. Prawdziwe zdjęcia, podpisy i odpowiedzi na pytania pomagają klientowi ocenić ofertę przed wysłaniem zapytania.", href: "/content-marketing/strategia", link: "Zaplanuj potrzebne treści" },
    { title: "Profil Firmy w Google", text: "Dla kwalifikującej się działalności sprawdzamy zgodność adresu, kategorii, godzin i danych kontaktowych ze stroną. Informacje sezonowe lub zmiany dostępności aktualizujemy w uzgodnionym zakresie.", href: "/uslugi/pozycjonowanie-lokalne", link: "Sprawdź zakres lokalnej widoczności" },
    { title: "Technika strony i rezerwacje", text: "Sprawdzamy linki, przekierowania, ładowanie materiałów i dojście do formularza. Jeśli używasz zewnętrznego systemu rezerwacji, ustalamy dostępne połączenia i możliwość pomiaru przejść.", href: "/seo/techniczne", link: "Przejdź do technicznego SEO" },
    { title: "Raport z uwzględnieniem sezonu", text: "Zestawiamy wykonane prace, wyświetlenia i kliknięcia z dostępnymi danymi o zapytaniach. Dla oferty sezonowej dobieramy okres porównania tak, aby odróżnić zmiany popytu od efektów wdrożenia.", href: "/kontakt", link: "Omów dane i cele firmy" },
  ],
  examplesTitle: "Punkt w Gdańsku czy obsługa całego Trójmiasta?",
  examplesIntro: "Plan zależy od tego, jak klient korzysta z usługi. Poniżej znajdują się przykładowe scenariusze doboru działań, które dopasowujemy do rzeczywistej oferty firmy.",
  examples: [
    { title: "Miejsce odwiedzane osobiście", text: "Łączymy opis oferty z informacjami o godzinach, lokalizacji, dostępie i rezerwacji. Zdjęcia pokazują faktyczny wygląd miejsca, a kontakt jest dostępny bez szukania go w kilku podstronach.", measure: "zapytania i rezerwacje, o ile system pozwala potwierdzić ich źródło." },
    { title: "Usługa z dojazdem", text: "Wyjaśniamy zasięg, warunki realizacji i informacje potrzebne do wyceny. Różnice w obsłudze Gdańska, Gdyni czy Sopotu opisujemy tylko wtedy, gdy wynikają z rzeczywistego sposobu pracy.", measure: "liczbę i jakość kontaktów z obszaru, który firma obsługuje." },
    { title: "Oferta zależna od terminów", text: "Dla usług sezonowych i wydarzeń planujemy aktualizację oferty przed okresem zainteresowania. Dbamy o prawdziwe informacje o terminach, dostępności i kolejnym kroku klienta.", measure: "zapytania o odpowiedni termin oraz wyniki porównywalnego okresu sezonu." },
  ],
  planning: [
    { title: "Mapa miejsc i usług", text: "Na początku zbieramy adres strony, listę usług, rzeczywisty obszar działania i informacje o punktach obsługi. Jeśli oferta różni się między miejscami, opisujemy te różnice. Samo dodanie kolejnej nazwy miasta nie jest powodem do tworzenia nowej podstrony." },
    { title: "Wycena z materiałami", text: "Koszt zależy od potrzebnej analizy, liczby ofert, prac w CMS oraz treści i zdjęć. Ustalamy, które materiały dostarcza firma, a które przygotowuje FOTZ. Zakres integracji rezerwacji i koszty zewnętrzne rozpisujemy osobno." },
    { title: "Aktualizacja i ocena kontaktów", text: "Uzgadniamy osobę odpowiedzialną za zmiany godzin, oferty i dostępności. Raport łączy listę wykonanych prac z widocznością, kliknięciami i dostępnymi danymi kontaktowymi. Potwierdzenie sprzedaży wymaga informacji z procesu obsługi klienta." },
  ],
  faqs: [
    { question: "Ile kosztuje pozycjonowanie strony w Gdańsku?", answer: "Wycenę ustalamy po sprawdzeniu witryny, liczby usług, obszaru obsługi oraz potrzebnych treści i wdrożeń. Oferta określa zadania, terminy odbioru, podział odpowiedzialności i koszty dodatkowe. Możemy zacząć od jednorazowego audytu lub uzgodnić regularną pracę nad stroną." },
    { question: "Czy FOTZ ma biuro w Gdańsku?", answer: "Siedziba FOTZ Studio znajduje się w Poznaniu. Obsługę SEO firm z Gdańska i Trójmiasta prowadzimy zdalnie, z uzgodnionym kontaktem, przekazaniem materiałów i akceptacją zmian. Zakres ewentualnej produkcji zdjęć lub filmów ustalamy oddzielnie." },
    { question: "Czy jedna strona może obsługiwać Gdańsk, Gdynię i Sopot?", answer: "Tak, jeśli czytelnie przedstawia prawdziwy zakres działania firmy. Osobne podstrony rozważamy dla rzeczywistych placówek lub ofert wymagających innych informacji. Powtarzanie tego samego tekstu z podmienioną nazwą miasta nie pomaga klientowi wybrać usługi." },
    { question: "Jak uwzględniacie sezonowość w SEO?", answer: "Plan treści i aktualizacji ustalamy z wyprzedzeniem względem ważnych terminów firmy. Wyniki porównujemy z okresem o podobnym charakterze, jeśli dostępne są dane. Wzrost lub spadek zainteresowania sezonową usługą sam w sobie nie dowodzi skuteczności albo nieskuteczności pozycjonowania." },
    { question: "Czy Profil Firmy w Google zapewni widoczność w całym Trójmieście?", answer: "Nie można obiecać jednakowej widoczności w każdym miejscu. Lokalne wyniki zależą m.in. od trafności, odległości i rozpoznawalności. Profil prowadzimy zgodnie z rzeczywistą działalnością i zasadami Google, a jego dane oraz wyniki strony analizujemy osobno." },
    { question: "Czy można mierzyć rezerwacje i kiedy ocenić wyniki?", answer: "Możliwości zależą od formularza lub systemu rezerwacji oraz dostępnych integracji. Kliknięcie przycisku odróżniamy od przyjętego zapytania i potwierdzonego terminu. Sposób pomiaru oraz termin przeglądu danych ustalamy przed wdrożeniem; nie gwarantujemy pozycji ani liczby rezerwacji." },
  ],
};

export default function SEOPozycjonowanieGdansk() {
  return <>
    <SEOHead title={offer.title} description={offer.description} canonical={`https://www.fotz-studio.pl${offer.path}`} />
    <LocalSeoOffer {...offer} />
  </>;
}
