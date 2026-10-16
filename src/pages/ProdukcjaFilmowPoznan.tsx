import { SEOHead } from '@/components/seo/SEOHead';
import { SalesOffer, type SalesOfferProps } from '@/components/SalesOffer';
import { filmOffer } from '@/data/sales-offers';

// Page-specific copy for /uslugi/produkcja-filmow. The shared filmOffer object is
// also used by /uslugi/produkcja-video, so this page overrides its texts locally.
const offer: SalesOfferProps = {
  ...filmOffer,
  title: 'Produkcja filmów dla firm: film reklamowy, spot, video | FOTZ',
  description: 'Profesjonalna produkcja filmów dla firm: film reklamowy, film promocyjny, spot i krótkie formaty dla Twojej marki. Scenariusz, zdjęcia, montaż i wycena.',
  heading: 'Film reklamowy, spot, film promocyjny: profesjonalna produkcja filmów dla firm',
  eyebrow: 'Produkcja filmów · zespół FOTZ Studio z Poznania',
  lead: 'Zajmujemy się produkcją filmów od pomysłu, przez dzień zdjęciowy, po finalne pliki w formatach do publikacji. Realizujemy filmy reklamowe dla firm, materiały wizerunkowe, produktowe i krótkie formy do social media. Najpierw ustalamy, kto ma obejrzeć materiał, co powinien zapamiętać i gdzie go zobaczy.',
  cta: 'Wyceń produkcję filmu',
  caption: 'Zespół FOTZ Studio na planie — własny materiał z realizacji.',
  evidence: [
    { title: 'Spot reklamowy CUPRA × Enea Stadion', text: 'Materiał łączący samochód z przestrzenią stadionu. Odtworzysz go wyżej, a na stronie projektu zobaczysz szerszy kontekst współpracy ze stadionem.', href: '/realizacje/enea-stadion' },
    { title: 'Film promocyjny dla WSB Merito', text: 'Materiał rekrutacyjny studiów podyplomowych: koncepcja, scenariusz, zdjęcia na kampusie i na stadionie oraz postprodukcja w rozdzielczości 4K.', href: '/realizacje/wsb-merito' },
    { title: 'Film wizerunkowy Gierky Activity Bar', text: 'Nagrania pokazujące wnętrze, atmosferę i charakter miejsca. Przykład materiału, który ma zachęcić gości do odwiedzin.', href: '/realizacje/gierki' },
  ],
  options: [
    { title: 'Film reklamowy i spot promocyjny', text: 'Masz konkretną ofertę, produkt albo wydarzenie i potrzebujesz materiału do kampanii reklamowej.', detail: 'Ustalamy jeden główny przekaz, długość i wersje: od kilkunastu sekund do kampanii w sieci po dłuższą formę na YouTube lub stronę.', variant: 'spot' },
    { title: 'Film produktowy, szkoleniowy i biznesowy', text: 'Chcesz pokazać ludzi, proces, miejsce albo działanie produktu. Tu mieszczą się też filmy korporacyjne i rekrutacyjne.', detail: 'Rozpisujemy rozmówców, lokalizacje i ujęcia. Produkt pokazujemy w użyciu, a nie tylko na neutralnym tle.', variant: 'film' },
    { title: 'Krótki film reklamowy do social media', text: 'Potrzebujesz serii pionowych materiałów na TikTok, Reels lub Facebook dla firmowego profilu.', detail: 'Lista tematów, nagrania w jednym lub kilku terminach, edycja i napisy. Prowadzenie profilu oraz emisję reklam rozliczamy osobno.', variant: 'reels' },
  ],
  scope: [
    { title: 'Cel i koncepcja filmu', text: 'Zaczynamy od grupy odbiorców i miejsca publikacji. Inaczej buduje się materiał dla klientów, inaczej dla kandydatów do pracy, a jeszcze inaczej na targi.' },
    { title: 'Scenariusz i plan filmowy', text: 'Rozpisujemy ujęcia, pytania do wypowiedzi i harmonogram. Ustalamy lokalizacje, rekwizyty, osoby przed kamerą oraz potrzebne zgody.' },
    { title: 'Dzień zdjęciowy', text: 'Na plan przyjeżdża ekipa dobrana do zadania: kamera, światło i dźwięk. Ujęcia lotnicze realizujemy, jeśli pozwala na to miejsce i przepisy.' },
    { title: 'Postprodukcja i animacja', text: 'Po zakończeniu zdjęć układamy materiał, korygujemy kolor i opracowujemy dźwięk. Muzykę, lektora, napisy i proste animacje tekstu ustalamy w zakresie.' },
    { title: 'Formaty video i wideo reklamowe', text: 'Przygotowujemy wersję poziomą na stronę i YouTube oraz pionowe skróty do publikacji w mediach społecznościowych. Każdy dodatkowy format planujemy przed nagraniem, żeby kadry do niego pasowały.' },
    { title: 'Odbiór i prawa do materiału', text: 'Uzgadniamy rundy poprawek, sposób przekazania plików i zakres wykorzystania. Wyjaśniamy prawa do muzyki i wizerunku oraz to, czy przekazujemy surowy materiał filmowy.' },
  ],
  pricing: 'Koszt produkcji filmu zależy przede wszystkim od tego, jaka będzie liczba dni zdjęciowych, lokalizacji i osób na planie, a także od skali postprodukcji i liczby wersji. Przy produkcji filmów reklamowych i promocyjnych na końcową kwotę wpływa też to, czy potrzebni są aktorzy, lektor, wynajęte studio, ujęcia lotnicze albo animacje reklamowe. W ofercie rozpisujemy każdą pozycję, a koszty zewnętrzne pokazujemy osobno. Na prosty start z pionowymi rolkami mamy pakiet WIDEO START z opisanym zakresem.',
  pricingLabel: 'Sprawdź zakres i warunki pakietu WIDEO START',
  steps: [
    { title: 'Brief i oferta', text: 'Przesyłasz temat, termin i przykłady kierunku, który Ci odpowiada. Odpowiadamy z pytaniami, zakresem, planem i kosztorysem.' },
    { title: 'Plan realizacji filmu i zdjęcia', text: 'Akceptujesz koncepcję i harmonogram, więc masz pełną kontrolę nad każdym etapem produkcji. Potem nagrywamy w ustalonych lokalizacjach.' },
    { title: 'Montaż i gotowy film', text: 'Pokazujemy wersję roboczą, zbieramy uwagi w umówionych rundach i przekazujemy pliki w uzgodnionych formatach.' },
  ],
  guidance: [
    {
      title: 'Jak wygląda produkcja filmów dla firm: proces produkcji krok po kroku',
      text: 'Proces produkcji dzielimy na przygotowanie, zdjęcia i postprodukcję. Najwięcej decyzji zapada przed nagraniem, bo od planu zależy, ile czasu potrzeba na planie i jakie wersje da się uzyskać z jednego materiału. Specjalizujemy się w realizacji filmów promocyjnych i reklamowych, które firma może od razu wykorzystać w kampanii, na stronie albo w rekrutacji.',
      points: [
        'Preprodukcja: cel, scenariusz, lista ujęć, lokalizacje, obsada i harmonogram.',
        'Zdjęcia: kamera, światło i dźwięk dobrane do miejsca oraz formatu, w razie potrzeby ujęcia lotnicze.',
        'Postprodukcja: edycja, kolor, dźwięk, napisy, grafika i eksport wersji do wybranych kanałów.',
      ],
      link: { label: 'Przeczytaj, ile kosztuje film reklamowy', href: '/blog/ile-kosztuje-film-reklamowy' },
    },
    {
      title: 'Filmy promocyjne dla firm i filmy szkoleniowe',
      text: 'Tworzenie filmów promocyjnych zaczynamy od pytania, jaką decyzję ma podjąć widz. Nie dla każdej firmy najlepszy będzie długi film. Ten sam budżet można przeznaczyć na jeden dłuższy film wizerunkowy albo na kilka krótkich materiałów do testów w kampanii. Pomagamy wybrać formę pasującą do Twojej marki i do tego, czego potrzeba Twojej firmie teraz. Nagrywaliśmy materiały dla firm z różnych branż, m.in. sportu i wydarzeń, edukacji, rozrywki i motoryzacji. Pamiętaj jednak, że sam film nie wystarczy, żeby wyróżnić się na tle konkurencji — marka potrzebuje też jasnej oferty i przemyślanej dystrybucji.',
      points: [
        'Materiały szkoleniowe i filmy instruktażowe pokazujące obsługę produktu lub procedurę.',
        'Filmy rekrutacyjne i wizerunkowe, w których występują pracownicy i prawdziwe miejsce pracy.',
        'Relacje z wydarzeń, konferencji i targów oraz krótkie filmy na profile firmowe.',
      ],
      link: { label: 'Zobacz poradnik o filmie rekrutacyjnym', href: '/blog/film-rekrutacyjny-employer-branding' },
    },
    {
      title: 'Kompleksowa produkcja wideo: co robimy sami, a co wyceniamy osobno',
      text: 'FOTZ Studio to nie klasyczne studio filmowe z własną halą zdjęciową. U nas produkcja filmów reklamowych dla firm odbywa się w siedzibie klienta, w plenerze lub w wynajętym miejscu. Przy zlecaniu tworzenia filmów warto wiedzieć, kto za co odpowiada. Kompleksowy zakres oznacza, że jedna ekipa odpowiada za koncepcję, nagrania i edycję. Profesjonalne filmy wymagają jednak czasem osób spoza zespołu — wtedy mówimy o tym otwarcie.',
      points: [
        'W zespole: koncepcja, realizacja zdjęć, ujęcia lotnicze, edycja, kolor i dźwięk oraz przygotowanie formatów.',
        'Osobno: aktorzy, lektor, wynajem studia, licencje muzyczne i rozbudowane animacje 2D i 3D.',
        'Produkcja video, w tym serie materiałów video do kampanii, może być połączona z publikacją i reklamami, ale te zakresy rozliczamy oddzielnie.',
      ],
      link: { label: 'Porównaj z ofertą spotów reklamowych', href: '/uslugi/produkcja-video' },
    },
  ],
  faqs: [
    { question: 'Ile kosztuje produkcja filmu?', answer: 'Nie podajemy jednej ceny, bo jeden dzień w jednej lokalizacji to inny zakres niż spot z aktorami, kilkoma planami i animacją. Po krótkim briefie przygotowujemy kosztorys z podziałem na preprodukcję, zdjęcia, postprodukcję i koszty zewnętrzne.' },
    { question: 'Kto pracuje przy produkcji filmu?', answer: 'Przy mniejszych realizacjach to zwykle osoba prowadząca projekt, operator kamery i montażysta. Przy większych dochodzą m.in. oświetleniowiec, dźwiękowiec, pilot drona, aktorzy lub lektor. Skład ekipy wpisujemy do oferty.' },
    { question: 'Czy muszę mieć gotowy scenariusz?', answer: 'Nie. Wystarczy cel, temat i informacja, gdzie chcesz wykorzystać film. Koncepcję przygotowujemy my, a Ty akceptujesz ją przed nagraniem.' },
    { question: 'Czy realizujecie projekty na terenie całej Polski?', answer: 'Zespół pracuje w Poznaniu i tu nagrywamy najczęściej. Z firmami z innych miast rozmawiamy zdalnie i możemy realizować część prac bez spotkań na miejscu, a możliwość wyjazdu na zdjęcia, dojazd i nocleg ustalamy osobno dla każdego projektu.' },
    { question: 'Ile trwa realizacja filmu?', answer: 'Termin zależy od przygotowania, liczby lokalizacji i nagrań oraz zakresu edycji. Podajemy go po poznaniu zakresu i dostępności uczestników. Pilny termin zawsze sprawdzamy w grafiku przed potwierdzeniem.' },
    { question: 'Czy otrzymam wersję pionową i poziomą?', answer: 'Tak, jeśli obejmuje je oferta. Formaty warto określić przed nagraniem, żeby zaplanować kadry i napisy. Każda dodatkowa wersja wydłuża postprodukcję.' },
    { question: 'Czy mogę wykorzystać film w reklamie?', answer: 'Zakres wykorzystania zapisujemy w ofercie i umowie. Sprawdzamy prawa do muzyki, wizerunku i materiałów zewnętrznych dla wybranych kanałów. Obsługę kampanii i budżet reklamowy rozliczamy osobno.' },
  ],
};

export default function ProdukcjaFilmowPoznan() {
  return <><SEOHead title="Produkcja filmów dla firm: film reklamowy, spot, video | FOTZ" description="Profesjonalna produkcja filmów dla firm: film reklamowy, film promocyjny, spot i krótkie formaty dla Twojej marki. Scenariusz, zdjęcia, montaż i wycena." canonical="https://www.fotz-studio.pl/uslugi/produkcja-filmow" /><SalesOffer {...offer} /></>;
}
