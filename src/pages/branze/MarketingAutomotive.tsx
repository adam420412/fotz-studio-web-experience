import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { IndustryWork } from "@/components/sections/IndustryWork";
import { OtherIndustries } from "@/components/sections/OtherIndustries";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { enquiryHref } from "@/lib/enquiry.mjs";
import { industryEnquiryHref } from "@/lib/industry-enquiry.mjs";

const path = "/dla-kogo/automotive";
const lead = "Chcesz umawiać jazdy próbne konkretnym modelem, zapełnić kalendarz serwisu czy sprzedawać produkt do pielęgnacji auta? W FOTZ Studio łączymy kampanię z tym, co dzieje się po kliknięciu. Wybierz temat, obejrzyj nasze realizacje i opisz, czego potrzebuje Twój zespół.";
const consultation = industryEnquiryHref("automotive", "/konsultacja");
const breadcrumbs = [{ name: "Dla kogo", url: "/dla-kogo" }, { name: "Motoryzacja", url: path }];

const requests = [
  {
    title: "Kampania dla dealera lub serwisu",
    text: "Gdy salon ma wolne jazdy demonstracyjne, reklama powinna prowadzić do wyboru modelu i terminu. Serwis potrzebuje innych danych: marki auta, rodzaju usługi i możliwości przyjęcia pojazdu. Ustalimy, które zgłoszenie ma trafić do sprzedawcy, a które do recepcji.",
    service: "marketing",
    variant: "lead_ads",
    link: "Zapytaj o kampanię i obsługę zapytań",
  },
  {
    title: "Strona z katalogiem samochodów",
    text: "Klient znalazł auto w ogłoszeniu i chce sprawdzić, czy stoi jeszcze w salonie. Projektujemy kartę pojazdu z aktualną dostępnością, wyposażeniem i kontaktem w sprawie tego egzemplarza. W portfolio możesz przejść do stron przygotowanych dla Victory Cars i Sookar.",
    service: "web",
    variant: "website",
    link: "Omów katalog dla swojego salonu",
  },
  {
    title: "Zdjęcia i filmy do sprzedaży",
    text: "Pokażemy detal, którego brakuje klientowi przed zakupem: przestrzeń bagażową, wnętrze po rozłożeniu siedzeń albo sposób użycia preparatu w warsztacie. Z Tobą ustalamy listę ujęć, auta dostępne na planie i wersje do reklamy, ogłoszeń oraz mediów społecznościowych.",
    service: "video",
    variant: "materials",
    link: "Zapytaj o produkcję materiałów",
  },
];

const sections = [
  {
    title: "Jak planujemy działania marketingowe w motoryzacji?",
    text: "Zacznijmy od jednego zadania dla zespołu sprzedaży. Czy chcesz zebrać zapisy na premierę, sprzedać konkretną grupę aut używanych, czy zapełnić wolne godziny w warsztacie? Przy otwarciu salonu ważne są lokalizacja i dostępne modele demonstracyjne. Przy wyprzedaży rocznika liczy się lista egzemplarzy, o które klient może rzeczywiście zapytać. W briefie zapiszemy cel, osobę odpowiedzialną za odpowiedź i warunki zakończenia promocji. Strategię dobieramy do etapu decyzji zakupowej i możliwości zespołu.",
  },
  {
    title: "Kampania Google Ads dla branży motoryzacyjnej. Co pokazuje strona docelowa?",
    text: "Kupujący, który wpisuje model auta i nazwę miasta, często chce ustalić konkretną rzecz: cenę egzemplarza, wyposażenie albo termin odbioru. Prowadzimy go do karty pasującej do reklamy. Przygotowując kampanię, ustalamy, kto aktualizuje ofertę po sprzedaży pojazdu. Jeśli szukasz klientów serwisu, dobierzemy obszar dojazdu i pokażemy te naprawy, na które możesz przyjąć samochód. W wycenie osobno podajemy budżet na reklamy i wynagrodzenie za prowadzenie kampanii.",
    href: "/performance-marketing/google-ads",
    link: "Zobacz zakres obsługi Google Ads",
  },
  {
    title: "Content marketing w branży motoryzacyjnej. Co publikować w social media?",
    text: "Jeden model samochodu można pokazać rodzinie planującej wakacje i osobie dojeżdżającej codziennie do pracy. Pierwszej przyda się widok bagażnika z wózkiem, drugiej sposób ładowania telefonu i wygoda wsiadania. Te pytania warto zebrać od handlowca przed nagraniem. Z jednego planu możemy przygotować pionowe materiały na Instagram i Facebook oraz dłuższą prezentację na stronę. Odbiorca dostaje zaproszenie do sprawdzenia auta, a sprzedawca wie, którego materiału dotyczy pytanie.",
    href: "/social-media/obsluga",
    link: "Sprawdź, jak planujemy publikacje",
  },
  {
    title: "SEO i lokalny marketing dla serwisu samochodowego",
    text: "Kierowca szukający wymiany opon na sobotę potrzebuje trzech informacji: czy usługa obejmuje jego koła, ile potrwa i czy jest wolny termin. Na stronie serwisu można połączyć te odpowiedzi z dojazdem, godzinami otwarcia i formularzem. Sprawdzamy też zgodność informacji w profilu firmy w Google. Przy kilku lokalizacjach każda powinna kierować do właściwego doradcy. To ogranicza sytuacje, w których klient dzwoni pod centralny numer i ponownie opisuje tę samą sprawę.",
  },
  {
    title: "Raport dla dealera. Jak mierzyć koszt pozyskania klienta?",
    text: "Przykładowo kampania mogła przynieść 20 formularzy, z których 8 zakończyło się umówieniem terminu, a na jazdę przyszło 5 osób. Każda liczba odpowiada na inne pytanie. Dział marketingu sprawdza koszt zgłoszenia, kierownik salonu zaś dostępność modelu i skuteczność kontaktu po wysłaniu formularza. To przykład sposobu liczenia. Wspólnie wybieramy miernik, zapisujemy źródło zapytania w CRM i porównujemy wyniki z pracą handlowców.",
  },
  {
    id: "wycena",
    title: "Koszt marketingu dla branży motoryzacyjnej. Co zawiera wycena?",
    text: "Orientacyjna stawka za podstawową obsługę obejmującą stronę, SEO i kampanie zaczyna się od 5 000 zł miesięcznie. Szersza obsługa, z produkcją wideo, konfiguratorem 3D i rozbudowanymi kampaniami, to orientacyjnie 10 000–25 000 zł miesięcznie. W indywidualnej wycenie otrzymasz kwotę netto, VAT i końcową kwotę do zapłaty, a także zakres prac i termin. Oddzielnie pokażemy wynagrodzenie za obsługę, koszty produkcji i budżet na zakup reklam. Jednorazowe nagranie lub projekt strony wyceniamy według briefu.",
  },
  {
    title: "Kampania wizerunkowa w branży automotive. Co pokazują produkcje FOTZ?",
    text: "Jeszcze przed zdjęciami otrzymasz listę materiałów do odbioru. Do ogłoszenia przydadzą się spójne zdjęcia zewnętrzne, wnętrze oraz istotne ślady użytkowania auta. Przy premierze modelu zakres może obejmować spot główny, krótkie montaże i kadry na stronę. Dynamiczny montaż może przyciągać uwagę, ale szczegół techniczny potrzebuje czasu na ekranie. Ustalamy terminy odbioru, formaty i pola wykorzystania materiałów. Spot CUPRA przy Enea Stadionie pokazuje nasz sposób filmowania samochodu. Film dla Krypton.tools pozwala ocenić, jak pokazujemy użycie produktu w warsztacie.",
    href: "/uslugi/produkcja-video",
    link: "Poznaj zakres produkcji spotu",
  },
  {
    title: "Samochody elektryczne. Jak dobrać temat treści do pytań kupujących?",
    text: "Przy zakupie pierwszego auta elektrycznego klient może porównywać dwa konkretne modele i mieć jedno praktyczne pytanie: jak wygląda ładowanie po powrocie do domu? Zamiast czytać dane techniczne do kamery, doradca może na nagraniu pokazać gniazdo, kabel i ustawienia dostępne w danym modelu. Dla osoby, która chce jeździć głównie w trasie, lepszy będzie poradnik planowania postoju. Rodzaj i tematykę treści ustalamy z pracownikami salonu, którzy słyszą te pytania na co dzień. Przed publikacją klient zatwierdza parametry prezentowanej wersji.",
  },
  {
    title: "Kanały komunikacji. Kiedy wybrać reklamę w wyszukiwarce, a kiedy Meta?",
    text: "Dobór kanału zależy od celu kampanii. Wyszukiwarka pozwala dotrzeć do osób, które potrafią już nazwać poszukiwany pojazd lub usługę. Media społecznościowe nadają się do zaprezentowania nowych modeli odbiorcom dopiero układającym listę opcji. W obu przypadkach strona docelowa ma odpowiadać na obietnicę reklamy. Jeśli w filmie zapraszasz na jazdę autem w wersji kombi, na formularzu nie powinno zabraknąć tej wersji. Facebook i Instagram mogą generować zgłoszenia bezpośrednio z formularza. Dla różnych grup odbiorców przygotujemy odrębne komunikaty i sprawdzimy, które faktycznie prowadzą do rozmów o ofercie.",
  },
  {
    title: "Jak budować wizerunek marki i rozpoznać skuteczny marketing motoryzacyjny?",
    text: "Przy premierze modelu film promocyjny może budować rozpoznawalność wśród lokalnych kierowców. Spot pomaga budować zainteresowanie wokół marki. Doradca może wyjaśnić w osobnym filmie różnice między wersjami. Zasięg filmu opisuje skalę kontaktu z materiałem. Dla kierownika sprzedaży raport powinien dodatkowo pokazywać liczbę umówionych jazd testowych i wynik późniejszych rozmów. Tak można rozdzielić budowanie wizerunku od zbierania zgłoszeń i zaplanować osobny budżet na każdy cel.",
  },
  {
    title: "Marketing automation i obsługa leada. Co dzieje się po wysłaniu formularza?",
    text: "Projekt zaczyna się od ustalenia, jakie dane dostanie doradca i kiedy odpowie klientowi. Formularz na jazdę demonstracyjną może przekazać model, salon i preferowaną porę kontaktu. Automatyczne potwierdzenie przyjęcia zgłoszenia powinno jasno mówić, czy termin jest już zarezerwowany, czy dopiero wymaga potwierdzenia. Przed startem sprawdzamy jeden testowy kontakt na całej drodze. Dla zainteresowanych serwisem projektujemy osobny obieg, aby recepcja miała dane potrzebne do ustalenia zakresu wizyty.",
  },
  {
    title: "Optymalizacja kampanii reklamowych. Jak pozyskać nowych klientów?",
    text: "Załóżmy, że reklama salonu przyciąga uwagę, a zespół ma mało rozmów o zakupie auta. Sprawdzamy najpierw, czy zgłoszenia dotyczą dostępnych pojazdów oraz jak szybko odpowiada doradca. Dane z Google Analytics mogą pokazać, na którym kroku użytkownicy opuszczają formularz. Informacja handlowca wyjaśnia z kolei, czy oferta odpowiadała na potrzeby potencjalnych klientów. Dopiero potem ustalamy, czy zmienić materiał reklamowy, stronę czy zasady kontaktu. Miarą poprawy jest uzgodniony wynik sprzedażowy, na przykład liczba odbytych spotkań.",
  },
  {
    title: "Branża motoryzacyjna. Jak dobrać strategię do grupy docelowej?",
    text: "W branży motoryzacyjnej decyzje zakupowe zapadają w różnych momentach. Kierowca z usterką chce szybko ustalić dostępność serwisu. Osoba rozważająca zakup auta może przez kilka tygodni porównywać marki i konkretne modele. Dystrybutor części potrzebuje zgodności z pojazdem, warunków dostaw i kontaktu do opiekuna. Z tego powodu grupa docelowa, główny kanał i treść oferty zależą od tego, do kogo ma trafić projekt. Do wyceny podaj, co klient powinien wiedzieć przed pierwszą rozmową.",
  },
  {
    title: "Rodzaj i tematyka treści. Co pomaga klientowi podjąć decyzję zakupową?",
    text: "Przy planowaniu każdej kampanii content marketingowej ustalamy, na które pytanie kupującego odpowie dany materiał. Na początku przydają się materiały porównawcze. Pytanie „które nadwozie sprawdzi się u mnie?” możemy zamienić w poradnik z dwoma zdjęciami i wymiarami bagażników. Bliżej decyzji klient woli obejrzeć ten egzemplarz, który jest do odbioru. Wtedy handlowcowi przydadzą się krótki film wizualnie porównujący wyposażenie oraz precyzyjny link do oferty. Po zakupie zaproponuj instrukcję pierwszego przeglądu albo odpowiedź serwisanta na częste pytanie. Tak można budować relację z klientem również między wizytami.",
  },
  {
    title: "Digital marketing dla motoryzacji. Jak czytać raport z wielu kanałów?",
    text: "Osoba zainteresowana samochodem może zobaczyć rolkę, wrócić przez wyszukiwarkę i dopiero wtedy zadzwonić. Jeśli oba kanały raportują tę samą rezerwację, suma ich wyników zawyży liczbę spotkań. Na starcie strategii marketingowej ustalamy wspólne definicje, sposób oznaczania odnośników i zakres danych dostępnych za zgodą użytkownika. Kierownik dostaje liczbę unikalnych rozmów oraz ich dalszy wynik. Przy małej próbie ustalamy, jaki następny test da podstawę do decyzji o budżecie.",
  },
  {
    title: "Co możesz wykorzystać z dotychczasowych materiałów marki?",
    text: "Na etapie wyceny przejrzymy bibliotekę zdjęć importera, lokalne nagrania i standardy wizualne marki. Sprawdzimy z Tobą, do których formatów i kanałów wolno wykorzystać materiał, jak długo obowiązuje licencja i kto zatwierdza publikację. Do kampanii promocyjnej często brakuje jedynie aktualnych ujęć auta demonstracyjnego. Jeśli planujesz dni otwarte, połączymy taki materiał z krótkim zaproszeniem od doradcy. W spotach produktowych możemy pokazać szczegół technologiczny i jego działanie podczas zwykłej jazdy.",
  },
];

const faqs = [
  {
    question: "Czy można zacząć od jednej kampanii zamiast pełnej obsługi?",
    answer: "Tak. Możemy przygotować jedną kampanię na dni otwarte, premierę modelu lub sezonową usługę. Wskaż model, daty, obszar i liczbę terminów, które zespół może obsłużyć. Otrzymasz zakres materiałów, emisji i rozliczenia.",
  },
  {
    question: "Jak wygląda współpraca przy katalogu aut i systemie DMS?",
    answer: "Najpierw sprawdzamy, skąd pochodzą informacje o autach i jakie dane udostępnia Twój system dealerski. Ustalamy częstotliwość aktualizacji, identyfikator egzemplarza i sposób wycofania sprzedanego pojazdu. Integrację potwierdzamy po sprawdzeniu dostępu i dokumentacji dostawcy.",
  },
  {
    question: "Czy konfigurator 3D jest potrzebny każdemu salonowi?",
    answer: "Przy samochodach gotowych do odbioru często wystarczą rzeczywiste zdjęcia i lista wyposażenia. Konfigurator warto rozważyć, jeśli zamówienie zależy od kombinacji wersji, koloru i dodatków. Do wyceny potrzebujemy reguł wyboru, materiałów 3D i sposobu przekazania konfiguracji do handlowca.",
  },
  {
    question: "Czy możecie przygotować zdjęcia samochodów na miejscu?",
    answer: "Tak. Podaj lokalizację, liczbę aut i cel zdjęć. Uzgodnimy dostęp do pojazdów, miejsce na plan, przygotowanie wnętrza i dojazd. Przy kilku samochodach zaplanujemy kolejność ujęć tak, żeby pozostałe auta były dostępne dla klientów salonu.",
  },
  {
    question: "Co przesłać do wyceny marketingu automotive?",
    answer: "Wystarczy link do oferty, cel oraz przykład modelu lub usługi, którą chcesz promować. Dodaj miasto, termin i orientacyjny budżet. Jeśli reklamy już działają, napisz, gdzie dziś trafiają zapytania i które z nich mają największą wartość dla salonu.",
  },
];

export default function MarketingAutomotive() {
  return <Layout>
    <SEOHead
      title="Marketing w branży motoryzacyjnej – kampanie i SEO | FOTZ"
      description="Marketing w branży motoryzacyjnej dla dealerów i serwisów. Dobieramy kanał i kampanię do potrzeb klienta. Zobacz ceny oraz filmy i katalogi aut z portfolio FOTZ."
      canonical="https://www.fotz-studio.pl/dla-kogo/automotive"
    />
    <OrganizationSchema />
    <ServiceSchema name="Marketing w branży motoryzacyjnej" description={lead} areaServed="Polska" />
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, ...breadcrumbs]} />
    <FAQSchema items={faqs} />
    <PageBreadcrumbs items={[breadcrumbs[0], { name: "Motoryzacja" }]} />

    <section className="container-wide grid items-center gap-8 px-6 py-10 md:px-12 lg:grid-cols-2">
      <div>
        <h1 className="offer-heading mb-6">Marketing w branży motoryzacyjnej – kampanie reklamowe i content marketing</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">{lead}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link className="dv-btn dv-btn-primary" to={consultation}>Umów bezpłatną konsultację</Link>
          <a className="dv-btn dv-btn-secondary" href="#realizacje-branzowe">Zobacz realizacje</a>
          <a className="inline-flex min-h-11 items-center underline underline-offset-4" href="#wycena">Sprawdź ceny</a>
        </div>
      </div>
      <figure className="min-w-0">
        <img className="aspect-[3/2] w-full rounded-xl object-cover" width={1280} height={853}
          src="/work/services/krypton-fotografia-1280.webp"
          srcSet="/work/services/krypton-fotografia-480.webp 480w, /work/services/krypton-fotografia-1280.webp 1280w"
          sizes="(min-width: 1024px) 45vw, 90vw" fetchPriority="high"
          alt="Zmywacz do hamulców Krypton.tools w rękach osoby pracującej w warsztacie" />
        <figcaption className="mt-2 text-sm text-muted-foreground">Krypton.tools · fotografia produktowa FOTZ Studio w warsztacie.</figcaption>
      </figure>
    </section>

    <section className="container-wide px-6 py-10 md:px-12" aria-labelledby="zakres-marketingu">
      <h2 id="zakres-marketingu" className="mb-7 text-3xl font-heading">Marketing motoryzacyjny dla dealera, serwisu i marki automotive</h2>
      <div className="grid gap-5 lg:grid-cols-3">
        {requests.map(item => <article key={item.service} className="dv-panel flex flex-col p-6">
          <h3 className="mb-3 text-xl font-heading">{item.title}</h3>
          <p className="mb-5 leading-relaxed text-muted-foreground">{item.text}</p>
          <Link className="mt-auto underline underline-offset-4" to={industryEnquiryHref("automotive", enquiryHref(item.service, item.variant))}>{item.link}</Link>
        </article>)}
      </div>
    </section>

    <IndustryWork slug="automotive" />

    <section className="container-wide px-6 py-6 md:px-12" aria-label="Plan kampanii, pomiar i zakres współpracy">
      {sections.map(item => <section id={item.id} tabIndex={item.id ? -1 : undefined} key={item.title} className="scroll-mt-24 grid gap-4 border-b border-border py-7 md:grid-cols-[1fr_1.65fr] md:gap-10">
        <h2 className="text-2xl font-heading">{item.title}</h2>
        <div><p className="leading-relaxed text-muted-foreground">{item.text}</p>
          {item.href && <Link className="mt-4 inline-block underline underline-offset-4" to={item.href}>{item.link}</Link>}
        </div>
      </section>)}
    </section>
    <section className="container-wide max-w-4xl px-6 py-12 md:px-12" aria-labelledby="pytania">
      <h2 id="pytania" className="mb-6 text-3xl font-heading">Pytania o marketing dla branży motoryzacyjnej</h2>
      {faqs.map(item => <details key={item.question} className="border-t border-border py-3">
        <summary className="min-h-11 cursor-pointer py-2 font-medium">{item.question}</summary>
        <p className="py-3 leading-relaxed text-muted-foreground">{item.answer}</p>
      </details>)}
      <nav aria-label="Usługi dla motoryzacji" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 underline underline-offset-4">
        <Link to="/wizualizacje-3d">Konfiguratory i wizualizacje 3D</Link>
        <Link to="/uslugi/fotografia">Fotografia dla firm</Link>
      </nav>
    </section>
    <section className="container-wide px-6 pb-12 md:px-12">
      <h2 className="mb-3 text-3xl font-heading">Co chcesz promować w swoim salonie lub serwisie?</h2>
      <p className="mb-5 max-w-2xl">Podeślij link do modelu, usługi albo dotychczasowej kampanii. Dobierzemy zakres do terminu i liczby zapytań, które Twój zespół może obsłużyć.</p>
      <Link className="dv-btn dv-btn-primary" to={industryEnquiryHref("automotive", enquiryHref("marketing"))}>Zapytaj o wycenę projektu</Link>
    </section>
    <OtherIndustries currentSlug="automotive" />
  </Layout>;
}
