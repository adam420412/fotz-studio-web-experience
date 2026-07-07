import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile trwa produkcja filmu rekrutacyjnego?",
    answer:
      "Zwykle od zgłoszenia do gotowego filmu mija 2 do 3 tygodni. Sam dzień zdjęciowy to jeden dzień u Ciebie w firmie, a montaż z napisami i dwiema rundami poprawek zajmuje kolejny tydzień lub dwa.",
  },
  {
    question: "Ile kosztuje film rekrutacyjny?",
    answer:
      "Wycena zależy od zakresu, ale pojedynczy materiał zaczyna się od 1 900 zł. Jeśli chcesz od razu komplet materiałów, czyli pełny film i kilka rolek na social media nagranych jednego dnia, to 12 000 zł za cały dzień zdjęciowy.",
  },
  {
    question: "Czy dojeżdżacie do naszej firmy?",
    answer:
      "Tak, nagrywamy na miejscu, czyli u Ciebie w biurze, hali albo magazynie. To ważne, bo kandydat ma zobaczyć prawdziwe miejsce pracy, nie studio.",
  },
  {
    question: "Czy nagrywacie z naszymi pracownikami czy z aktorami?",
    answer:
      "Zawsze polecamy prawdziwych pracowników, bo wychodzi to bardziej autentycznie i kandydaci od razu widzą, z kim będą pracować. Aktora dobieramy tylko wtedy, kiedy zespół wyraźnie nie chce występować przed kamerą.",
  },
  {
    question: "Jak długi powinien być film rekrutacyjny?",
    answer:
      "Rolka na social media to 15 do 60 sekund, a pełny film employer branding zwykle 2 do 4 minut. Dłużej niż 4 minuty rzadko się opłaca, bo kandydaci i tak oglądają wideo najczęściej tylko do połowy.",
  },
  {
    question: "Gdzie najlepiej opublikować film rekrutacyjny?",
    answer:
      "Na start zakładka kariera na stronie firmowej i ogłoszenie o pracę z linkiem do filmu. Rolkę warto dodatkowo puścić na LinkedInie oraz na Instagramie lub TikToku, żeby dotrzeć też do osób, które aktywnie nie szukają pracy.",
  },
];

const CANONICAL = "https://fotz.pl/blog/film-rekrutacyjny-employer-branding";

export default function BlogFilmRekrutacyjnyEmployerBranding() {
  return (
    <Layout>
      <SEOHead
        title="Film rekrutacyjny: jak przyciągnąć kandydatów, którzy sami się zgłoszą"
        description="Tekstowe ogłoszenie już nie przyciąga dobrych kandydatów. Pokazujemy, jak film rekrutacyjny wspiera employer branding i ile kosztuje taka produkcja wideo."
        canonical={CANONICAL}
        keywords="film rekrutacyjny, employer branding, produkcja video, film rekrutacyjny koszt, wideo rekrutacyjne, video employer branding"
      />
      <ArticleSchema
        title="Film rekrutacyjny: jak przyciągnąć kandydatów, którzy sami się zgłoszą"
        description="Jak film rekrutacyjny wspiera employer branding, co pokazać w materiale, gdzie go publikować i ile kosztuje produkcja wideo w FOTZ Studio."
        url={CANONICAL}
        datePublished="2026-07-07"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Film rekrutacyjny: jak przyciągnąć kandydatów, którzy sami się zgłoszą", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Film rekrutacyjny: jak przyciągnąć kandydatów, którzy sami się zgłoszą", url: "/blog/film-rekrutacyjny-employer-branding" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Produkcja video
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Film rekrutacyjny: jak przyciągnąć kandydatów, którzy sami się zgłoszą
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Tekstowe ogłoszenie już nie przyciąga dobrych kandydatów. Pokazujemy, jak film rekrutacyjny wspiera employer branding i ile kosztuje taka produkcja wideo.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead">
            Ogłoszenie na portalu pracy dziś ginie w tysiącach innych ogłoszeń. Kandydaci nie chcą czytać kolejnego opisu stanowiska, chcą zobaczyć, jak naprawdę wygląda praca u Ciebie i z kim będą pracować. Film rekrutacyjny odpowiada na to pytanie szybciej niż jakikolwiek tekst.
          </p>

          <h2>Czym jest film rekrutacyjny i po co go robić</h2>
          <p>
            Film rekrutacyjny to krótka produkcja wideo, która pokazuje Twoją firmę oczami ludzi, którzy w niej pracują. Zamiast opisywać stanowisko, pokazujesz konkretne osoby, atmosferę, biuro albo halę produkcyjną i to, co naprawdę czeka nowego pracownika.
          </p>
          <p>
            Dla działu HR to narzędzie, które robi dwie rzeczy naraz. Po pierwsze, przyciąga kandydatów, którzy faktycznie pasują do zespołu, bo widzą, z kim będą pracować, zanim wyślą CV. Po drugie, buduje markę pracodawcy poza samą rekrutacją, bo dobre wideo krąży w social mediach, nie tylko na portalach z ogłoszeniami.
          </p>
          <p>
            Nasze materiały wideo generują ponad <strong>3 000 000 wyświetleń miesięcznie</strong>. To pokazuje, że dobrze zrobiony film potrafi wyjść daleko poza grono osób aktywnie szukających pracy i dotrzeć też do tych, którzy jeszcze nie szukają, ale zobaczą film znajomego i pomyślą, że chcą tam pracować.
          </p>

          <h2>Co pokazać w filmie rekrutacyjnym</h2>
          <p>
            Dobry film rekrutacyjny nie sprzedaje abstrakcyjnych wartości firmy. Pokazuje konkrety, które kandydat może sobie wyobrazić na własnej skórze. Co warto uwzględnić w scenariuszu:
          </p>
          <ul>
            <li><strong>Ludzi z imienia i nazwiska:</strong> prawdziwi pracownicy zawsze działają lepiej niż aktor czytający scenariusz.</li>
            <li><strong>Kulisy pracy:</strong> biuro, hala produkcyjna, magazyn, samochód serwisowy, cokolwiek jest realnym miejscem pracy.</li>
            <li><strong>Typowy dzień:</strong> krótkie ujęcia od wejścia do biura po wyjście, żeby kandydat wiedział, czego się spodziewać.</li>
            <li><strong>Krótkie wypowiedzi zespołu:</strong> jedno, dwa zdania od kilku osób działają lepiej niż jeden długi monolog.</li>
            <li><strong>Konkrety, nie hasła:</strong> zamiast ogólników pokaż konkretny kurs, szkolenie albo awans, który się wydarzył.</li>
          </ul>
          <p>
            Im mniej wyreżyserowane wygląda nagranie, tym bardziej kandydat mu wierzy.
          </p>

          <h2>Gdzie publikować film rekrutacyjny</h2>
          <p>
            Sam film to połowa roboty. Drugą połową jest dystrybucja, czyli dotarcie z nim do właściwych ludzi.
          </p>
          <ul>
            <li><strong>Zakładka kariera na stronie firmowej:</strong> to pierwsze miejsce, które sprawdza kandydat po kliknięciu w ogłoszenie.</li>
            <li><strong>LinkedIn:</strong> naturalne środowisko dla treści employer branding, zwłaszcza jeśli publikuje go też zespół, nie tylko firmowy profil.</li>
            <li><strong>Rolki na Instagramie i TikToku:</strong> krótsza wersja filmu dociera do ludzi, którzy w ogóle nie szukają aktywnie pracy, ale zobaczą ją, scrollując telefon.</li>
            <li><strong>Ogłoszenia o pracę:</strong> link do filmu w treści ogłoszenia zwiększa liczbę kliknięć i, co ważniejsze, jakość aplikacji.</li>
          </ul>
          <p>
            Prowadzimy w całości Instagram Enea Stadionu, więc wiemy, jak zaplanować dystrybucję wideo tak, żeby realnie ktoś je zobaczył, a nie tylko leżało na kanale.
          </p>

          <h2>Rolka rekrutacyjna czy pełny film employer branding</h2>
          <p>
            Nie każda firma potrzebuje pełnej produkcji od razu. Czasem lepiej zacząć od krótkiej rolki i sprawdzić, jak reaguje rynek.
          </p>
          <p>
            <strong>Rolka rekrutacyjna</strong> to 15 do 60 sekund, tempo social mediów, jedno mocne ujęcie albo szybki montaż kilku scen. Sprawdza się przy pojedynczej rekrutacji, konkretnym stanowisku albo jako test, zanim zainwestujesz w większy projekt.
          </p>
          <p>
            <strong>Pełny film employer branding</strong> to zwykle 2 do 4 minut, więcej wypowiedzi zespołu, szersze pokazanie firmy i miejsce na stronie kariera oraz w kampaniach LinkedIn. To inwestycja na dłużej, nie pod jedno ogłoszenie, tylko pod markę pracodawcy jako całość.
          </p>
          <p>
            W praktyce dobrze łączyć oba formaty: jeden dzień zdjęciowy, z którego wychodzi pełny film i kilka rolek do social mediów.
          </p>

          <h2>Ile kosztuje film rekrutacyjny</h2>
          <p>
            Cena filmu rekrutacyjnego zależy od zakresu: liczby lokalizacji, długości materiału, liczby osób do nagrania i tego, czy potrzebujesz jednego filmu, czy całego pakietu treści.
          </p>
          <ul>
            <li>Pojedynczy materiał wideo (na przykład jedna rolka rekrutacyjna albo krótki film) wyceniamy indywidualnie, z widełkami <strong>od 1 900 zł</strong> za materiał.</li>
            <li>Dzień zdjęciowy z serią 10 rolek to <strong>12 000 zł</strong>: dobre rozwiązanie, jeśli chcesz od razu mieć komplet materiałów, czyli pełny film na stronę kariera plus kilka krótszych rolek na social media, nagranych tego samego dnia.</li>
          </ul>
          <p>
            Ostateczną wycenę zawsze podajemy po rozmowie o zakresie, bo film dla dwuosobowego zespołu marketingu wygląda inaczej niż produkcja dla stu osób w hali produkcyjnej. Ale nigdy nie usłyszysz od nas ogólnego "to zależy" bez konkretnej liczby, zawsze dostajesz widełki na piśmie.
          </p>

          <h2>Jak wygląda praca z nami</h2>
          <p>
            Proces produkcji filmu rekrutacyjnego w FOTZ Studio wygląda tak:
          </p>
          <ol>
            <li><strong>Warsztat:</strong> rozmawiamy o tym, kogo chcesz przyciągnąć, jakie masz stanowiska do obsadzenia i co wyróżnia pracę u Ciebie.</li>
            <li><strong>Scenariusz:</strong> przygotowujemy strukturę filmu, kto mówi, co pokazujemy, w jakiej kolejności.</li>
            <li><strong>Dzień zdjęciowy:</strong> przyjeżdżamy do Ciebie, nagrywamy ludzi, kulisy i wypowiedzi zespołu, zwykle wystarczy jeden dzień.</li>
            <li><strong>Montaż z napisami:</strong> film wraca z profesjonalnym montażem i napisami, bo większość osób ogląda wideo bez dźwięku.</li>
            <li><strong>Dwie rundy poprawek:</strong> masz dwie rundy na uwagi, zanim materiał trafi do publikacji.</li>
          </ol>
          <p>
            Zanim ruszymy ze zdjęciami, warto się do nich dobrze przygotować. Piszemy o tym szczegółowo w tekście o tym, jak{" "}
            <Link to="/blog/jak-przygotowac-dzien-zdjeciowy" className="text-[#75143F] underline">
              przygotować firmę do dnia zdjęciowego
            </Link>
            , żeby dzień na planie przebiegł sprawnie i bez stresu.
          </p>
          <p>
            Jeśli szukasz partnera do stałej produkcji video, nie tylko jednego filmu, zobacz też, jak wygląda{" "}
            <Link to="/produkcja-video-poznan" className="text-[#75143F] underline">
              produkcja video w Poznaniu
            </Link>
            {" "}w naszym wykonaniu. Robiliśmy produkcje wideo między innymi dla Żabki, WSB Merito, Zakładów Cegielskiego i FPS, więc wiemy, jak pracować zarówno z dużą korporacją, jak i z mniejszym zespołem HR. Mamy też ponad <strong>160 opinii Google na 5.0</strong>, co samo w sobie sporo mówi o tym, jak traktujemy klientów.
          </p>

          <div className="not-prose my-12 rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Chcesz zobaczyć, jak Twoja firma wygląda oczami kandydata?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zacznij od darmowej rolki testowej albo od krótkiej rozmowy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-semibold hover:bg-white/90 transition-colors"
              >
                Darmowa rolka
              </Link>
              <Link
                to="/konsultacja"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Umów konsultację 15 min
              </Link>
            </div>
          </div>

          <h2>FAQ</h2>
          <div className="not-prose space-y-4 my-6">
            {faqItems.map((f) => (
              <div key={f.question} className="rounded-xl border border-border p-5 bg-card">
                <h3 className="font-semibold text-foreground mb-2">{f.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}
