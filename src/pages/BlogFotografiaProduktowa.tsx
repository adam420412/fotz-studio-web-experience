import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, ChevronRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { getOwnPhoto } from "@/lib/own-photos.mjs";

const seoTitle = "Fotografia produktowa — poradnik 2026 | FOTZ";
const seoDescription = "Fotografia produktowa — poradnik 2026: produkt, światło, tło, aparat, ustawienia i obróbka. Zobacz, jak krok po kroku przygotować zdjęcia do sklepu.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/fotografia-produktowa-poradnik";
const pageTitle = "Fotografia produktowa — poradnik krok po kroku 2026";
const heroImageUrl = "https://www.fotz-studio.pl/work/product-1200.webp";
const heroPhoto = getOwnPhoto("produktowy");

const articleData = {
  headline: pageTitle,
  description: seoDescription,
  url: canonicalUrl,
  image: heroImageUrl,
  datePublished: "2026-04-12",
  dateModified: "2026-11-11",
  author: "Fotz Studio",
};

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Fotografia produktowa — poradnik", url: "/blog/fotografia-produktowa-poradnik" },
];

const principles = [
  {
    title: "Pokaż produkt zgodnie z rzeczywistością",
    text: "Odbiorca powinien rozpoznać kształt, proporcję, fakturę i wykończenie. Nie ukrywaj istotnych cech ani nie zmieniaj produktu w obróbce.",
  },
  {
    title: "Zacznij od jednego celu zdjęcia",
    text: "Główne zdjęcie katalogowe odpowiada na pytanie „co kupuję?”, a scenografia pokazuje kontekst użycia. Nie próbuj upchnąć wszystkich przekazów w jednym kadrze.",
  },
  {
    title: "Kontroluj światło, nie tylko jego moc",
    text: "Kierunek i wielkość źródła wpływają na kontrast oraz refleksy. Miękkie oświetlenie ułatwia pokazanie formy, ale nie jest receptą na każdy produkt.",
  },
  {
    title: "Pilnuj ostrości istotnych detali",
    text: "Etykieta, krawędzie i elementy użytkowe powinny być czytelne. Sprawdzaj zdjęcie w powiększeniu, zamiast oceniać je wyłącznie na ekranie aparatu.",
  },
  {
    title: "Oddziel produkt od tła",
    text: "Tło nie może zlewać się z fotografowanym przedmiotem ani z nim rywalizować. Zostaw też zapas przestrzeni do późniejszego kadrowania.",
  },
  {
    title: "Przekazuj skalę bez złudzeń",
    text: "Pokazuj wymiary w opisie, a w scenografii używaj znanych elementów wyłącznie wtedy, gdy ich obecność nie sugeruje innego rozmiaru produktu.",
  },
  {
    title: "Utrzymaj spójność całej serii",
    text: "Podobny kierunek światła, kadrowanie i balans bieli porządkują katalog. Zapisz ustawienia, aby kolejne partie zdjęć można było dopasować.",
  },
  {
    title: "Dbaj o wierne kolory",
    text: "Ustaw balans bieli dla wybranego światła i porównaj zdjęcie z produktem w neutralnych warunkach. Nie wzmacniaj koloru kosztem jego zgodności.",
  },
  {
    title: "Buduj czytelną kompozycję",
    text: "Wyśrodkowanie dobrze sprawdza się w wielu ujęciach katalogowych, a trójpodział i diagonale pomagają w scenografii. Zasada jest pomocą, nie obowiązkiem.",
  },
  {
    title: "Sprawdzaj efekt w miejscu publikacji",
    text: "Oceń miniaturę, widok na telefonie i powiększenie. Dobre zdjęcie produktu powinno być czytelne także poza programem do obróbki.",
  },
];

const preparationSteps = [
  {
    title: "Wybierz egzemplarz i uzupełnij braki",
    text: "Sprawdź powierzchnię, opakowanie, etykiety i komplet akcesoriów. Przygotuj części, które rzeczywiście trafiają do klienta, oraz egzemplarz zapasowy, jeśli jest dostępny.",
  },
  {
    title: "Oczyść produkt metodą właściwą dla materiału",
    text: "Usuń kurz, odciski i luźne nitki. Szkło, metal i ekrany wymagają szczególnej uwagi, ale środek czyszczący zawsze dobierz do zaleceń producenta.",
  },
  {
    title: "Przygotuj miejsce i stabilne podłoże",
    text: "Zabezpiecz stół, tło i przestrzeń na statyw. Odsuń przedmioty powodujące przypadkowe odbicia. W domu wybierz miejsce, w którym możesz kontrolować mieszanie światła.",
  },
  {
    title: "Ułóż tło bez niepożądanych zagięć",
    text: "Papier, tkanina lub płyta powinny być czyste i stabilne. Gramaturę dobierz do sposobu montażu i podatności na odkształcenia, a nie do jednej uniwersalnej wartości.",
  },
  {
    title: "Dobieraj rekwizyty oszczędnie",
    text: "Rekwizyt ma wyjaśniać zastosowanie lub skalę, a nie zasłaniać produkt. Unikaj cudzych znaków, przypadkowych napisów i przedmiotów, których klient nie otrzyma.",
  },
  {
    title: "Zapisz kolejność i ustalenia",
    text: "Na liście uwzględnij warianty, ujęcia i wymagane kadry. Przy serii odnotuj położenie produktu, świateł i aparatu, aby ułatwić powtarzalność.",
  },
];

const equipment = [
  {
    title: "Telefon lub aparat — zacznij od kontroli",
    text: "Nowoczesny telefon wystarczy do nauki i wielu prostych publikacji. Aparaty bezlusterkowe i lustrzanki dają wygodniejszą kontrolę parametrów, obiektywu i pracy z oświetleniem, ale sam model sprzętu fotograficznego nie poprawia zdjęcia.",
  },
  {
    title: "Obiektyw i odległość",
    text: "Obiektyw szerokokątny ustawiony zbyt blisko może deformować proporcje. Zwiększ odległość i wybierz dłuższą ogniskową dostępną w Twoim zestawie, zachowując właściwą perspektywę i czytelny kadr produktowy.",
  },
  {
    title: "Statyw i zdalne wyzwalanie",
    text: "Statyw stabilizuje kadr, ułatwia powtarzanie kompozycji i pracę z dłuższym czasem. Zdalne wyzwalanie lub samowyzwalacz ogranicza poruszenie aparatu podczas naciskania spustu.",
  },
  {
    title: "Lampa i dyfuzor",
    text: "Do domowej pracy może posłużyć lampa LED z dyfuzorem albo światło z okna przepuszczone przez czystą, białą tkaninę. Lampy studyjne dają więcej możliwości, lecz wymagają kontroli temperatury i bezpiecznego montażu.",
  },
  {
    title: "Kartki i blendy",
    text: "Biała kartka może rozjaśnić cień, a czarna ograniczyć niepożądane odbicia i podkreślić krawędź. To proste narzędzia do kształtowania światła, nie zamiennik starannego ustawienia produktu.",
  },
];

const shootingSteps = [
  {
    title: "Ustaw kadr i poziom aparatu",
    text: "Wyrównaj horyzont, sprawdź krawędzie fotografowanego przedmiotu i zostaw margines do eksportu. Zablokuj położenie statywu przed kolejnymi poprawkami produktu.",
  },
  {
    title: "Wybierz tryb manualny lub półautomatyczny",
    text: "Ustaw niską czułość dostępną dla danego aparatu i warunków. Dobierz przysłonę do wymaganej głębi ostrości, a czas do stabilności zestawu i rodzaju światła.",
  },
  {
    title: "Dopasowanie balansu bieli",
    text: "Nie mieszaj bez kontroli światła okiennego z lampami o różnej barwie. Ustawienia balansu bieli możesz dobrać ręcznie lub na podstawie kadru referencyjnego, który ułatwi późniejszą korektę.",
  },
  {
    title: "Ustaw ostrość i wykonaj próbę",
    text: "Skup się na najważniejszym fragmencie, a potem oceń cały produkt w powiększeniu. Przy bardzo płytkiej głębi zmień przysłonę lub odległość; focus stacking pozostaw na stabilny, bardziej zaawansowany wariant pracy.",
  },
  {
    title: "Zmieniaj jeden element naraz",
    text: "Najpierw popraw światło, potem kadr, a dopiero później pozostałe parametry. Dzięki temu rozpoznasz przyczynę efektu i łatwiej powtórzysz udane ustawienie.",
  },
  {
    title: "Zapisz serię i materiał źródłowy",
    text: "Wykonaj wymagane ujęcia oraz bezpieczne warianty zapasowe. Jeśli urządzenie i proces na to pozwalają, zachowaj RAW obok pliku do szybkiego podglądu i uporządkuj nazwy przed obróbką.",
  },
];

const mistakes = [
  {
    problem: "Mieszane kolory światła",
    solution: "Wyłącz konkurujące źródła albo rozdziel ich obszary, a następnie ponownie ustaw balans bieli.",
  },
  {
    problem: "Nieczytelne refleksy na szkle i metalu",
    solution: "Zmień kąt produktu lub źródła, powiększ dyfuzor i przesłaniaj odbicia czarnymi kartkami zamiast wybielać plamy w postprodukcji.",
  },
  {
    problem: "Produkt zlewa się z tłem",
    solution: "Zmień jasność albo kolor tła, odsuń produkt i dodaj kontrolowane światło na krawędź, jeśli pasuje to do koncepcji.",
  },
  {
    problem: "Nienaturalna perspektywa",
    solution: "Odsuń aparat, unikaj skrajnego szerokiego kąta i sprawdź, czy piony oraz proporcje odpowiadają rzeczywistemu przedmiotowi.",
  },
  {
    problem: "Przesadna korekta",
    solution: "Przywróć naturalną fakturę i kolor. Usuwaj zabrudzenia powstałe na planie, ale nie trwałe cechy produktu ani informacje istotne dla kupującego.",
  },
  {
    problem: "Dobry kadr, zły plik",
    solution: "Zweryfikuj przestrzeń kolorów, rozmiar, format i kadrowanie w docelowym serwisie. Nie zakładaj, że jeden eksport pasuje wszędzie.",
  },
];

const faqItems = [
  {
    id: "dom",
    question: "Jak zrobić zdjęcia produktowe w domu?",
    answer: "Zacznij od czystego produktu, stabilnego stołu i jednego kontrolowanego źródła światła. Ustaw aparat lub telefon na statywie, wybierz neutralne tło i wykonaj serię próbną. Poprawiaj pojedynczo światło, kadr oraz ostrość, a efekt sprawdzaj również na telefonie.",
  },
  {
    id: "aparat",
    question: "Jaki aparat i obiektyw do fotografii produktowej?",
    answer: "Do prostych zdjęć może wystarczyć telefon z ręczną kontrolą lub blokadą ekspozycji. Aparat bezlusterkowy albo lustrzanka ułatwiają pracę z obiektywami i plikami RAW. Ważniejsze od marki są stabilność, właściwa odległość, ogniskowa bez zauważalnych deformacji oraz dobre światło.",
  },
  {
    id: "lampa",
    question: "Jaka lampa sprawdzi się do zdjęć produktowych?",
    answer: "Na początek wygodna jest lampa LED z możliwością regulacji i dużym dyfuzorem. Możesz też wykorzystać miękkie światło okienne. Przy szkle i metalu rozmiar oraz położenie źródła bywają ważniejsze niż jego moc. Nie mieszaj źródeł o różnej barwie bez świadomej korekty.",
  },
  {
    id: "packshot",
    question: "Czym jest packshot i kiedy go wybrać?",
    answer: "To czytelne ujęcie produktu, najczęściej na jednolitym, neutralnym tle, bez rozbudowanego kontekstu. Sprawdza się jako podstawowa prezentacja w katalogu lub sklepie. Wymagania dotyczące głównego zdjęcia zależą jednak od platformy, dlatego przed sesją trzeba sprawdzić jej aktualne zasady.",
  },
  {
    id: "ilosc",
    question: "Ile zdjęć jednego produktu warto przygotować?",
    answer: "Nie ma jednej liczby odpowiedniej dla każdej oferty. Zaplanuj ujęcie główne, strony i tył, istotne detale, elementy zestawu oraz — jeśli jest potrzebny — kontekst użycia. Usuń kadry powtarzalne, które niczego nie wyjaśniają. Liczbę i kolejność dopasuj do produktu i ograniczeń platformy.",
  },
  {
    id: "ostrosc",
    question: "Jak uzyskać ostrość na całym produkcie?",
    answer: "Ustaw aparat stabilnie, wybierz odpowiedni punkt ostrości i zamknij przysłonę w zakresie zachowującym dobrą jakość obrazu. Możesz też zwiększyć odległość od produktu. Focus stacking łączy kadry z różną płaszczyzną ostrości, ale wymaga nieruchomego produktu, statywu i starannego połączenia.",
  },
  {
    id: "pliki",
    question: "Jakie pliki przygotować do sklepu internetowego?",
    answer: "Do publikacji najczęściej używa się JPEG lub WebP, a PNG przydaje się, gdy wymagana jest przezroczystość i format jest akceptowany. Zachowaj wersję źródłową do archiwum. Rozdzielczość, proporcje, maksymalny rozmiar i przestrzeń kolorów dopasuj do aktualnych wymagań docelowego serwisu.",
  },
  {
    id: "koszt",
    question: "Od czego zależy koszt fotografii produktowej?",
    answer: "Na wycenę wpływają m.in. liczba produktów i ujęć, rodzaj powierzchni, scenografia, przygotowanie, obróbka, licencja oraz sposób dostarczenia plików. Osobno warto ustalić transport, poprawki i ewentualne materiały wideo. Zamiast polegać na sztywnym cenniku internetowym, poproś o zakres odpowiadający konkretnej liście zdjęć.",
  },
  {
    id: "sprzedaz",
    question: "Czy lepsze zdjęcia gwarantują wyższą sprzedaż?",
    answer: "Nie. Zdjęcia mogą ograniczać niepewność i ułatwiać ocenę oferty, ale na wynik wpływają także cena, dostępność, opis, dostawa, zaufanie i ruch na stronie. Oceniaj zmianę we własnych danych, w podobnych warunkach i z wyraźnie nazwaną hipotezą, zamiast przypisywać jej z góry określony rezultat.",
  },
];

const sectionClass = "scroll-mt-24 mt-12";
const headingClass = "text-2xl md:text-3xl font-heading font-bold mb-5";
const paragraphClass = "text-muted-foreground leading-relaxed mb-5";

export default function BlogFotografiaProduktowa() {
  return (
    <Layout workExcludeImageId="product">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogImage={heroImageUrl}
        ogType="article"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema data={articleData} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="bg-background pb-20">
        <div className="container mx-auto px-4">
          <nav aria-label="Ścieżka nawigacji" className="max-w-4xl mx-auto pt-32 pb-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
            <span className="text-foreground" aria-current="page">Fotografia produktowa — poradnik</span>
          </nav>

          <header className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Wróć do bloga
            </Link>
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Praktyczny poradnik · edycja 2026</p>
            <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight mb-6">{pageTitle}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Jak robić zdjęcia produktów, które są czytelne, spójne i zgodne z rzeczywistością? Ten przewodnik prowadzi od planu i przygotowania przez światło, sprzęt oraz ustawienia aparatu aż po obróbkę i publikację. Bez listy niezbędnych drogich zakupów i bez obiecywania wyników sprzedażowych.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-10">
              <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" />Opublikowano: 12 kwietnia 2026</span>
              <span>Aktualizacja: 11 listopada 2026</span>
              <span>Redakcja: Zespół FOTZ</span>
            </div>
            <figure className="offer-visual mb-10">
              <div className="aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden bg-muted border border-border/50">
                <img
                  src={heroPhoto.src}
                  srcSet={heroPhoto.srcSet}
                  sizes={heroPhoto.sizes}
                  width={heroPhoto.width}
                  height={heroPhoto.height}
                  alt={heroPhoto.alt}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <figcaption className="mt-3 text-sm text-muted-foreground">Przykład prezentacji produktu z portfolio FOTZ. Dobór tła i kadru zależy od celu zdjęcia oraz miejsca publikacji.</figcaption>
            </figure>
          </header>

          <div className="max-w-4xl mx-auto">
            <nav aria-label="Spis treści" className="rounded-2xl border border-border/50 bg-muted/20 p-6 mb-12">
              <h2 className="text-xl font-heading font-bold mb-4">W tym poradniku</h2>
              <ol className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-muted-foreground list-decimal list-inside">
                <li><a href="#czym-jest" className="hover:text-primary">Definicja i rodzaje zdjęć</a></li>
                <li><a href="#zasady" className="hover:text-primary">10 zasad fotografii produktowej</a></li>
                <li><a href="#plan-zdjec" className="hover:text-primary">Plan ujęć</a></li>
                <li><a href="#przygotowanie" className="hover:text-primary">Produkt i miejsce pracy</a></li>
                <li><a href="#sprzet" className="hover:text-primary">Sprzęt i oświetlenie</a></li>
                <li><a href="#ustawienia" className="hover:text-primary">Sesja krok po kroku</a></li>
                <li><a href="#obrobka" className="hover:text-primary">Obróbka i publikacja</a></li>
                <li><a href="#faq" className="hover:text-primary">Najczęstsze pytania</a></li>
              </ol>
            </nav>

            <section id="czym-jest" className={sectionClass}>
              <h2 className={headingClass}>Czym jest fotografia produktowa? Packshot i zdjęcia reklamowe</h2>
              <p className={paragraphClass}>
                <strong>Fotografia produktowa to dziedzina fotografii komercyjnej, która przedstawia przedmioty, ich cechy i sposób użycia.</strong> Jej zadaniem jest dostarczenie rzetelnej informacji wizualnej w sklepie internetowym, katalogu, kampanii lub prezentacji. Obejmuje zarówno proste zdjęcia produktowe, jak i bardziej rozbudowane sesje produktowe.
              </p>
              <p className={paragraphClass}>
                Najczęściej spotykane <strong>zdjęcie katalogowe</strong> pokazuje sam produkt na neutralnym tle. Zdjęcie na białym tle jest jednym z wariantów, a nie jedyną poprawną formą. <strong>Fotografia reklamowa</strong> i aranżacja lifestyle budują kontekst oraz wizerunek marki, natomiast detale dokumentują fakturę, wykończenie i najlepsze cechy konstrukcji. Seria obrotowa 360° składa się z wielu ujęć i wymaga odrębnego planu; nie jest automatycznie tym samym co interaktywny model 3D.
              </p>
              <p className={paragraphClass}>
                Dobre materiały pomagają potencjalnym klientom porównać ofertę i podjąć świadome decyzje zakupowe. Nie zastępują jednak opisu, parametrów ani obsługi klienta. Przyciągają uwagę najlepiej wtedy, gdy odpowiadają na konkretne pytanie odbiorcy, a nie tylko na potrzebę efektownego kadru.
              </p>
            </section>

            <section id="zasady" className={sectionClass}>
              <h2 className={headingClass}>10 zasad dobrej fotografii produktowej</h2>
              <p className={paragraphClass}>Poniższa checklista porządkuje jakość zdjęć niezależnie od tego, czy pracujesz telefonem w domu, czy aparatem w studio fotografii.</p>
              <ol className="space-y-5">
                {principles.map((item, index) => (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">{index + 1}</span>
                    <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="plan-zdjec" className={sectionClass}>
              <h2 className={headingClass}>Plan zdjęć produktów i realizacja sesji</h2>
              <p className={paragraphClass}>
                Przed ustawieniem lampy określ, gdzie trafią fotografie produktów. Własne sklepy, katalog do druku i serwisy takie jak Allegro czy Amazon mogą wymagać innych kadrów, plików i sposobu prezentacji. Nie przepisuj stałych wymiarów z jednego serwisu do drugiego — przed realizacją sesji sprawdź aktualną dokumentację każdego kanału.
              </p>
              <p className={paragraphClass}>
                Dla każdego wariantu zapisz ujęcie główne, przód, tył, boki, detale i zawartość zestawu. Dodaj kontekst użycia tylko wtedy, gdy wyjaśnia funkcję. Jeśli plan obejmuje także pakiet „packshot i filmy produktowe”, rozdziel listę kadrów od materiału ruchomego. Dynamiczne filmy i pionowe Reels wymagają innego kadrowania oraz planu niż statyczne packshoty na białym tle.
              </p>
              <p className={paragraphClass}>
                Przykład redakcyjny: jeśli chcesz sfotografować jeden z Twoich produktów, zacznij od jego funkcji i najważniejszego detalu. Zastanów się, która strona fotografowanego produktu najlepiej wyjaśnia ofertę i jakie pytanie może pozostać po obejrzeniu kadru głównego. Profesjonalne packshoty nie muszą być efektowne za wszelką cenę — mają pokazywać właściwy przedmiot, wariant i zestaw.
              </p>
              <p className={paragraphClass}>
                Zdjęcie główne może zwrócić uwagę potencjalnych klientów, a kolejne kadry pomagają utrzymać uwagę klientów na detalach istotnych dla decyzji. Realizacja sesji powinna więc odpowiadać na wcześniej zapisane potrzeby, zamiast kończyć się przypadkowym zbiorem podobnych ujęć.
              </p>
              <div className="rounded-xl border border-border/50 bg-muted/20 p-5">
                <h3 className="font-semibold mb-2">Minimalna karta zadania</h3>
                <p className="text-muted-foreground leading-relaxed">Nazwa i wariant produktu, kanał publikacji, cel każdego kadru, wymagane proporcje, lista akcesoriów, sposób nazwania plików i osoba akceptująca. W dziedzinie fotografii produktowej i reklamowej taki kompleksowy zapis ogranicza pominięcia bez udawania, że każda realizacja wygląda tak samo.</p>
              </div>
            </section>

            <section id="przygotowanie" className={sectionClass}>
              <h2 className={headingClass}>Przygotowanie produktu: jak przygotować miejsce do zdjęć?</h2>
              <p className={paragraphClass}>Staranne przygotowanie produktu ogranicza poprawki i ryzyko powtórzenia pracy. Proces wykonywania zdjęć zacznij od uporządkowania stanowiska: aby sprawnie przygotować miejsce, przejdź kolejno przez poniższe punkty.</p>
              <ol className="space-y-5">
                {preparationSteps.map((item) => (
                  <li key={item.title} className="rounded-xl border border-border/40 p-5">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="sprzet" className={sectionClass}>
              <h2 className={headingClass}>Sprzęt do fotografii produktowej: co jest naprawdę potrzebne?</h2>
              <p className={paragraphClass}>
                Podstawowy sprzęt fotograficzny to urządzenie z kontrolą ostrości i ekspozycji, stabilne podparcie, jedno źródło światła, dyfuzor oraz czyste tło. Nie opisujemy tu wyposażenia FOTZ ani nie sugerujemy, że jeden zestaw pasuje do każdego zadania. Wybór zależy od produktu, skali pracy i wymaganych plików.
              </p>
              <div className="space-y-6">
                {equipment.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-xl font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="swiatlo-i-kompozycja" className={sectionClass}>
              <h2 className={headingClass}>Światło, tło i kompozycja w praktyce</h2>
              <h3 className="text-xl font-heading font-semibold mb-2">Jedno duże źródło jako punkt wyjścia</h3>
              <p className={paragraphClass}>
                Ustaw lampę lub okno z boku i nieco przed produktem, a następnie obserwuj cień oraz refleksy. Przesuwanie źródła zmienia sposób pokazania faktury. Przy przedmiotach błyszczących fotografujesz także odbicia otoczenia, dlatego duży dyfuzor i czarne zapory bywają skuteczniejsze niż dalsze rozjaśnianie kadru.
              </p>
              <h3 className="text-xl font-heading font-semibold mb-2">Tło dopasowane do kanału i produktu</h3>
              <p className={paragraphClass}>
                Białe, szare i kolorowe tła mają różne zastosowania. Neutralne tło ułatwia spójną serię, a aranżacyjna scena pomaga opowiedzieć o użyciu. Zadbaj o odstęp od produktu i unikaj wzorów, które zaburzają czytelność. Staranne oświetlenie tła nie powinno zmieniać jego rzeczywistej barwy na zdjęciu.
              </p>
              <h3 className="text-xl font-heading font-semibold mb-2">Kompozycja pod jeden przekaz</h3>
              <p className={paragraphClass}>
                W ujęciu katalogowym zacznij od wyśrodkowania i równych marginesów. W zdjęciu reklamowym wypróbuj trójpodział, przestrzeń na tekst albo linię prowadzącą wzrok. Zachowaj wolną przestrzeń do różnych proporcji, ale nie kadruj tak szeroko, by produkt stał się nieczytelny. Wysokiej jakości zdjęcia wynikają z kontroli całości, nie z samej liczby pikseli.
              </p>
            </section>

            <section id="ustawienia" className={sectionClass}>
              <h2 className={headingClass}>Jak sfotografować produkt? Aparat, statyw i ustawienia</h2>
              <p className={paragraphClass}>
                Nie istnieje jedno precyzyjne ustawienie dla każdego aparatu i produktu. Jako punkt próbny przy małym, nieruchomym przedmiocie można rozważyć średni zakres przysłony, np. f/8–f/11, niską czułość i czas dopasowany do statywu oraz światła. To nie jest uniwersalna recepta: zbyt mocno zamknięta przysłona może obniżyć ostrość przez dyfrakcję.
              </p>
              <ol className="space-y-5">
                {shootingSteps.map((item) => (
                  <li key={item.title} className="flex gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" aria-hidden="true" />
                    <div><h3 className="font-semibold mb-1">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section id="obrobka" className={sectionClass}>
              <h2 className={headingClass}>Obróbka i retusz zdjęć produktowych</h2>
              <p className={paragraphClass}>
                Zacznij od wyboru najlepszych ujęć i jednolitego nazewnictwa. Następnie skoryguj balans bieli, ekspozycję, poziomy, geometryczne zniekształcenia i kadr. Dopiero później usuń kurz czy drobne ślady powstałe podczas pracy. Obróbki graficznej nie należy używać do zmiany koloru, wymiarów, zawartości zestawu ani właściwości produktu.
              </p>
              <p className={paragraphClass}>
                Do podstawowej korekty może posłużyć także bezpłatny GIMP; ważniejszy od programu jest uporządkowany proces. Profesjonalny retusz obejmuje czasem czyszczenie tła, składanie ostrości lub zaawansowane techniki postprodukcji, lecz powinien zachować wiarygodność. Porównuj wynik z oryginałem i rzeczywistym przedmiotem; odwzorowanie kolorów oceń w neutralnych warunkach, a fakturę w powiększeniu.
              </p>
              <h3 className="text-xl font-heading font-semibold mb-2">Eksport bez jednego „uniwersalnego” pliku</h3>
              <p className={paragraphClass}>
                Przygotuj wersję archiwalną i pliki do konkretnych kanałów. JPEG lub WebP sprawdzają się w wielu publikacjach, a PNG może zachować przezroczystość, jeśli platforma go obsługuje. Zapisz wymagane proporcje i rozmiar, a przed wysłaniem sprawdź ostrość po kompresji. Nie każdy fotograf udostępnia pliki RAW — zakres należy ustalić przed rozpoczęciem sesji fotograficznej.
              </p>
            </section>

            <section id="publikacja" className={sectionClass}>
              <h2 className={headingClass}>Jak przygotować zdjęcia produktowe dla e-commerce?</h2>
              <p className={paragraphClass}>
                W sklepie internetowym zacznij od jasnej kolejności: najpierw produkt i wariant, potem widoki pomocnicze, detale, zawartość zestawu i kontekst. Uzupełnij opis o informacje niewidoczne w kadrze. Opis alternatywny powinien nazywać rzeczywiście widoczny produkt i istotny detal, bez powtarzania listy słów kluczowych.
              </p>
              <p className={paragraphClass}>
                Przed publikacją otwórz stronę na telefonie i komputerze, sprawdź miniaturę listy, powiększenie oraz czas wczytania. Zdjęcia mogą wspierać ocenę produktu przez potencjalnych klientów, ale nie zakładaj, że same zdjęcia zwiększają szanse na sprzedaż niezależnie od reszty oferty. Wzrost sprzedaży ani lepsza pozycja w wyszukiwarce nie są automatycznym skutkiem publikacji. Wpływ zmiany mierz we własnych danych i uwzględnij inne elementy oferty.
              </p>
              <p className={paragraphClass}>
                Jeśli rozwijasz wizerunek Twojej marki w świecie e-commerce, zachowaj spójność między katalogiem, materiałami do kampanii reklamowych i mediami społecznościowymi. Nie każdy kadr trzeba publikować wszędzie. Dobieraj wersje do kanału i zapisz, które pliki są źródłem dalszych eksportów.
              </p>
            </section>

            <section id="bledy" className={sectionClass}>
              <h2 className={headingClass}>Najczęstsze błędy i sposób ich poprawy</h2>
              <div className="overflow-x-auto rounded-xl border border-border/50">
                <table className="w-full text-sm text-muted-foreground">
                  <thead className="bg-muted/40 text-foreground">
                    <tr><th scope="col" className="px-4 py-3 text-left">Problem</th><th scope="col" className="px-4 py-3 text-left">Co sprawdzić i zmienić</th></tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    {mistakes.map((item) => (
                      <tr key={item.problem}><th scope="row" className="px-4 py-4 text-left font-semibold text-foreground align-top">{item.problem}</th><td className="px-4 py-4 leading-relaxed">{item.solution}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="samodzielnie-czy-fotograf" className={sectionClass}>
              <h2 className={headingClass}>Samodzielna sesja czy profesjonalna fotografia produktowa?</h2>
              <p className={paragraphClass}>
                Własna próba jest sensowna, gdy możesz poświęcić czas na naukę, produkt nie stawia nietypowych trudności, a lista ujęć jest ograniczona. Zacznij od jednego przedmiotu i stwórz powtarzalny proces. Jeśli nie możesz opanować odbić, koloru lub spójności serii, dalsze dokupowanie sprzętu nie zawsze rozwiąże przyczynę.
              </p>
              <p className={paragraphClass}>
                Profesjonalna fotografia produktowa jest warta rozważenia przy trudnych materiałach, rozbudowanej liście, aranżacji lub konieczności utrzymania wielu wariantów. Portfolio nie może być wyłącznie zbiorem profesjonalnie wyglądających zdjęć: sprawdź podobne produkty, sposób realizacji sesji, zakres poprawek, terminy, licencję i formaty plików. Koszt zależy m.in. od przygotowania, liczby ujęć, stylizacji, transportu i zaawansowanych technik, dlatego porównuj pełny zakres, a nie samą stawkę.
              </p>
              <p className={paragraphClass}>
                Przed wyborem zapytaj również, kto odpowiada za listę zdjęć, przygotowanie produktów i akceptację próbną. Jasne ustalenia są użyteczniejsze niż deklaracja najwyższej jakości zdjęć bez kryteriów odbioru. Profesjonalne zdjęcia produktów nie są gwarancją przewagi na tle konkurencji — mają rzetelnie prezentować ofertę i wspierać jej komunikację.
              </p>
            </section>

            <section id="faq" className={sectionClass} aria-labelledby="faq-heading">
              <h2 id="faq-heading" className={headingClass}>Fotografia produktowa — najczęstsze pytania</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <details id={`product-photo-faq-${item.id}`} key={item.id} className="group rounded-xl border border-border/50 bg-muted/10 px-5 py-4 open:bg-muted/30">
                    <summary className="cursor-pointer list-none font-semibold leading-relaxed marker:content-none">{item.question}</summary>
                    <p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <aside className="mt-14 rounded-2xl border border-primary/20 bg-muted/20 p-7 md:p-9" aria-labelledby="nastepny-krok-heading">
              <h2 id="nastepny-krok-heading" className="text-2xl font-heading font-bold mb-4">Od poradnika do własnej checklisty</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wybierz jeden produkt, zapisz listę potrzebnych ujęć i wykonaj kontrolowaną próbę. Jeśli potrzebujesz wsparcia przy większej serii, najpierw sprawdź zakres usługi i przykładowe realizacje — to odrębne strony od tego poradnika.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Link to="/uslugi/fotografia-produktowa" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
                  Zobacz zakres usługi <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link to="/realizacje" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold hover:bg-muted transition-colors">Przejrzyj realizacje</Link>
                <Link to="/kontakt" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-5 py-3 font-semibold hover:bg-muted transition-colors">Zapytaj o zakres</Link>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </Layout>
  );
}
