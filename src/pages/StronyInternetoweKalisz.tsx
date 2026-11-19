import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { CityLinksSection } from "@/components/sections/CityLinksSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { SEOHead } from "@/components/seo/SEOHead";
import {
  BreadcrumbSchema,
  FAQSchema,
  OrganizationSchema,
  ServiceSchema,
} from "@/components/seo/StructuredData";
import { enquiryHref } from "@/lib/enquiry.mjs";

const path = "/uslugi/strony-internetowe/kalisz";
const breadcrumbs = [
  { name: "Strony internetowe", url: "/uslugi/strony-internetowe" },
  { name: "Kalisz", url: path },
];
const scope = [
  {
    title: "Nowa strona firmowa lub landing page",
    text: "Jeżeli chcesz przyjmować zapytania o jedną usługę, wystarczy często jedna strona z opisem, zdjęciem realizacji i formularzem. Projektujemy strony firmowe z osobnymi podstronami, gdy klient musi najpierw wybrać usługę lub oddział. Podeślij listę usług oraz przykład pytania, z którym najczęściej dzwoni klient.",
    variant: "website",
    link: "Wyceń nową stronę",
  },
  {
    title: "Przebudowa obecnej strony internetowej",
    text: "Masz już serwis, ale telefonów jest mało albo każda zmiana cennika wymaga programisty? Prześlij adres i napisz, gdzie utykasz. Możemy poprawić formularz, przebudować nawigację lub zaplanować migrację. Koszt wykonania strony zależy także od tego, które materiały można wykorzystać ponownie. W wycenie wskażemy, które treści i działające adresy warto zachować.",
    variant: "redesign",
    link: "Omów przebudowę strony",
  },
  {
    title: "Sklep internetowy lub katalog produktów",
    text: "Sklep ma sens, jeśli klient może sam wybrać wariant, poznać koszt dostawy i zapłacić. Przy produkcie wykonywanym na wymiar lepszy bywa katalog z zapytaniem o konkretny model. Pokaż nam przykładowy produkt i opowiedz, jak dziś przyjmujesz zamówienie.",
    variant: "shop",
    link: "Zapytaj o wycenę sklepu",
  },
];
const projects = [
  {
    image: "chorwacja",
    name: "Apartamenty Chorwacja",
    href: "/realizacje/apartamenty-chorwacja",
    alt: "Mobilna strona rezerwacyjna Apartamenty Chorwacja",
    text: "Strona apartamentów na wynajem, na której gość może obejrzeć wnętrza i przejść do rezerwacji. Ten projekt pokazuje, jak połączyć zdjęcia, opis wyposażenia i dostępność w jednym miejscu.",
  },
  {
    image: "cute-dumpling",
    name: "Cute as a Dumpling",
    href: "/realizacje/cute-dumpling",
    alt: "Sklep Cute as a Dumpling z kolekcją ozdób",
    text: "Sklep internetowy z ozdobami świątecznymi. Możesz obejrzeć, jak zdjęcia, kategorie i karta produktu pomagają kupującemu wybrać dekorację.",
  },
  {
    image: "klagem",
    name: "KLAGEM",
    href: "/realizacje/klagem",
    alt: "Konfigurator 3D produktu KLAGEM",
    text: "Strona z konfiguratorem mebli 3D. Klient dobiera wariant i widzi swój zestaw, zanim zapyta o wykonanie. To przydatny przykład dla producenta, którego produkty zależą od wyboru kilku parametrów.",
  },
];

type OfferTopic = { title: string; text: string; href?: string; link?: string };
const essentials: OfferTopic[] = [
  {
    title: "Wycena strony internetowej w Kaliszu. Ile kosztuje nowa witryna?",
    text: "WWW START kosztuje 1 490 zł netto za One Page do pięciu sekcji na szablonie FOTZ. Dostarczasz teksty, zdjęcia i logo. Cena obejmuje jedną rundę poprawek. Domenę i hosting opłacasz osobno. Jeśli potrzebujesz indywidualnego projektu graficznego, kilku wersji językowych, przygotowania treści lub połączenia z innym systemem, opisz to przed wyceną. W ofercie odróżnimy koszt uruchomienia od późniejszych opłat za utrzymanie strony.",
    href: "/cennik",
    link: "Sprawdź warunki pakietu WWW START",
  },
  {
    title:
      "Strony WWW dla firm z Kalisza i okolic. Co musi znaleźć się w ofercie?",
    text: "Inaczej wygląda zapytanie do warsztatu, który przyjmuje klientów na miejscu, a inaczej do wykonawcy dojeżdżającego na pomiar. Warsztatowi przyda się czytelny dojazd, zakres usług i telefon do recepcji. Wykonawcy przyda się krótki formularz z miejscowością, wymiarami i opcją omówienia dokumentacji. Pracujemy zdalnie z firmami z Kalisza i powiatu kaliskiego. Obszar działania na stronie opisujemy zgodnie z tym, dokąd rzeczywiście dojeżdżasz.",
  },
  {
    title: "Projekt graficzny i responsywna strona na telefon",
    text: "Zanim zaczniemy projektować widoki witryny, uzgodnimy, co użytkownik ma zrobić po wejściu na Twoją stronę. Jeśli odbiorca przegląda ofertę na telefonie w przerwie w pracy, powinien zobaczyć zakres, orientacyjną cenę lub sposób wyceny oraz przycisk, który może wygodnie nacisnąć kciukiem. Responsywny projekt pokazujemy na małym i dużym ekranie. Możesz wtedy sprawdzić czytelność tekstu, długość formularza i kolejność informacji, zanim powstanie gotowa strona WWW.",
  },
  {
    title: "Stworzenie strony internetowej. Co przygotować do wyceny?",
    text: "Na pierwszą rozmowę wystarczą adres dotychczasowej witryny, opis jednej usługi i przykład dobrego zapytania. Jeśli prowadzisz sklep, pokaż nam także produkt z wariantami i sposób naliczania kosztu wysyłki. Razem rozpiszemy mapę podstron, brakujące materiały i osobę, która zatwierdza projekt. Gdy brakuje zdjęć lub opisów, możesz zamówić ich przygotowanie osobno. Dostaniesz listę potrzebnych plików, zanim poświęcisz czas na ich kompletowanie.",
  },
];
const guides: { title: string; topics: OfferTopic[] }[] = [
  {
    title: "Projektowanie stron WWW w Kaliszu – wycena i odbiór",
    topics: [
      {
        title: "Ceny stron internetowych. Jak porównać dwie wyceny?",
        text: "Przy porównaniu ofert poproś o rozbicie na projekt graficzny, wdrożenie, opracowanie treści i późniejszą opiekę. Ta sama liczba podstron może oznaczać pięć podobnych usług lub pięć różnych narzędzi. Cena strony zależy między innymi od tego, czy w katalogu wystarczy opis, czy klient ma także filtrować produkty i pobierać dokumentację. Zwróć uwagę, jakie dodatkowe funkcje wchodzą do odbioru i które wydatki wrócą za rok. Wtedy porównujesz koszt wykonania strony internetowej dla własnego biznesu na tych samych warunkach.",
      },
      {
        title: "Co odróżnia profesjonalne strony internetowe firm usługowych?",
        text: "Podczas projektowania stron dla firm z Kalisza bierzemy pod uwagę indywidualne potrzeby odbiorców. Jeżeli chcesz ocenić profesjonalizm wykonawcy, poproś o przykłady podobnych realizacji. Dobrym testem prostej strony jest pytanie, czy nowa osoba potrafi wybrać usługę bez telefonu do właściciela. Jeżeli szyjesz zasłony na wymiar, pokaż tkaninę przy świetle dziennym, sposób mierzenia okna i obszar dojazdu na montaż. Jeśli Twoi klienci z Kalisza mogą odwiedzić ekspozycję, dodaj wskazówki dotyczące wejścia i godziny konsultacji. To treści dopasowane do konkretnych pytań. Sam profesjonalny wygląd strony nie wyjaśni, jak zamówić pomiar.",
      },
      {
        title: "Odbiór strony WWW. Co sprawdzić przed publikacją?",
        text: "Proces tworzenia stron internetowych warto podzielić na decyzje, które można sprawdzić. Po pierwszym spotkaniu wiesz, co musi umieć witryna i jaki cel biznesowy ma wspierać. Na etapie projektowania stron ocenisz tekst, zdjęcia i kolejność działań, a po zakodowaniu dostajesz adres testowy. Współpraca przebiega sprawniej, jeśli jedna osoba zbiera uwagi zespołu. Profesjonalne podejście do odbioru poznasz po tym, że możesz własnoręcznie przejść przez cały proces. Wykonaj w serwisie zadanie swojego klienta i sprawdź, do kogo trafia rezultat.",
      },
      {
        title:
          "Strony internetowe dla firm z Kalisza. Co przyda się klientowi hurtowemu?",
        text: "Jeśli wytwarzasz części na zamówienie, potencjalny klient zwykle nie wpisze ich do koszyka. Zamiast tego chce sprawdzić tolerancje, materiał i termin kontaktu z technologiem. Jeśli szukasz wykonawcy strony WWW w Kaliszu dla zakładu produkcyjnego, pokaż mu przykład zamówienia. Wielkość serii i oczekiwany termin dostawy to często pierwsze dane potrzebne do wyceny. Możemy przygotować opis możliwości, wskazać format dokumentacji i ustalić bezpieczny sposób przekazania rysunku. Przykład pokazuje, jak funkcjonalność wynika ze sposobu sprzedaży. Integracja z systemem ofertowym wymaga osobnego sprawdzenia dostępu i warunków dostawcy.",
      },
      {
        title:
          "Czy wizytówka wystarczy, czy potrzebny jest kompleksowy serwis?",
        text: "Przy jednej usłudze wizytówka z przykładami często odpowie na więcej pytań niż rozbudowane menu z pustymi kategoriami. Jeżeli obsługujesz różne branże, ustalmy hierarchię Twojej strony internetowej. Przykładowo klient hurtowy będzie poszukiwał kart technicznych, a detaliczny cen i dostawy. Projektowanie i tworzenie stron internetowych zaczynamy wtedy od dwóch krótkich ścieżek. Zanim zamówisz kolejne podstrony, przejdź przez prototyp z osobą, która pierwszy raz widzi ofertę.",
      },
    ],
  },
  {
    title: "SEO, Google i kampanie. Jak mierzyć wyniki?",
    topics: [
      {
        title: "Optymalizacja SEO i widoczność w Google",
        text: "Przed publikacją sprawdzamy, czy każda ważna usługa ma własny adres, tytuł i opis odpowiadający na pytanie klienta. Ustalamy linkowanie między powiązanymi ofertami, mapę strony i możliwość indeksowania. Dla działalności lokalnej liczą się także aktualne godziny, telefon i obszar obsługi. Po uruchomieniu Google Search Console pomaga zobaczyć, na jakie zapytania wyświetla się Twoja strona. Dalsze pozycjonowanie i rozwijanie treści można wycenić jako osobny zakres.",
        href: "/pozycjonowanie/kalisz",
        link: "Poznaj ofertę pozycjonowania w Kaliszu",
      },
      {
        title: "Landing page pod kampanię reklamową",
        text: "Jeśli zbierasz zapisy na szkolenie lub oferujesz jedną usługę w określonym terminie, klient z reklamy powinien trafić od razu na tę ofertę. Układamy nagłówek zgodny z reklamą, opis dla kogo jest usługa, warunki i jedno główne wezwanie do działania. W formularzu pytamy tylko o dane potrzebne do następnego kroku. Po wysłaniu klient widzi potwierdzenie i wie, czego oczekiwać. Rozbudowę pełnego serwisu można zaplanować oddzielnie.",
        href: "/uslugi/landing-page",
        link: "Sprawdź ofertę landing page",
      },
      {
        title: "Oferta online. Jak mierzyć zapytania na Twojej stronie?",
        text: "Jeszcze przed wdrożeniem ustalamy, co dla Twojej firmy oznacza wartościowy kontakt. Kliknięcie telefonu, wysłanie formularza i przyjęcie zlecenia to trzy różne zdarzenia. W uzgodnionym zakresie konfigurujemy analitykę oraz sprawdzamy testowe przejście od oferty do potwierdzenia. Po publikacji warto zestawić zapytania z tym, jaką usługą interesował się klient. Wynik pomaga podjąć konkretną decyzję. Jeżeli kampania przyciąga właściwe osoby, a brakuje zapytań, sprawdzamy, czy formularz jest intuicyjny i czy komunikat marketingowy odpowiada opisowi usługi.",
      },
      {
        title: "Pozycjonowanie stron internetowych a kampania w Google",
        text: "Gdy zależy Ci na zapytaniach na konkretny termin, ustalmy, czy na Twojej stronie jest miejsce na czasową ofertę i jak zespół zamknie zapisy. Projekt strony i plan marketingowy mogą powstawać równolegle. Budżet na emisję reklam omawiamy osobno. Wyszukiwarka Google może przez cały rok prowadzić do poradnika lub opisu usługi. Z Google Search Console dowiesz się, które zapytania przynoszą wejścia. Porównanie z konkurencją pomaga znaleźć pytania bez odpowiedzi. Stałe pozycjonowanie i marketing online planujemy według celu oraz dostępnych zasobów.",
      },
    ],
  },
  {
    title: "Sklep internetowy i obsługa witryny po wdrożeniu",
    topics: [
      {
        title: "Obsługa witryny w WordPressie. Co zmienisz na swojej stronie?",
        text: "Pakiet WWW START opisuje zakres prac na szablonie FOTZ. WordPress to jedna z opcji dla indywidualnie wycenianej witryny z panelem do samodzielnej edycji. Czy raz w roku zmieniasz telefon, czy co tydzień dodajesz nową realizację? Przy wyborze WordPressa możesz dostać edytowalne pola na zdjęcia, opis i dane kontaktowe. Przy odbiorze przechodzimy przez typową zmianę razem. Ustalamy również, kto zajmuje się aktualizacjami, kopiami zapasowymi i odnowieniem licencji. Zakres późniejszego wsparcia znajdziesz w wycenie.",
      },
      {
        title:
          "Przebudowa stron internetowych w Kaliszu. Jak zmienić witrynę bez utraty ważnych adresów?",
        text: "Gdy zmieniasz serwis, adres reklamowanej usługi może być już wydrukowany na ulotkach albo zapisany przez stałych klientów. Przed przeniesieniem zbieramy adresy ważnych podstron, ustalamy ich odpowiedniki i przygotowujemy przekierowania. W dniu wdrożenia sprawdzamy działanie linków, formularzy i telefonu po przełączeniu domeny. Osobno ustalamy obsługę poczty firmowej na tej domenie. Dzięki temu wiadomo, co dokładnie wchodzi w zakres przeprowadzki i kto ma dostęp potrzebny do publikacji.",
      },
      {
        title: "Sklep internetowy. Jak zaplanować płatności i dostawę online?",
        text: "W projekcie sklepu najpierw przechodzimy przez jedno rzeczywiste zamówienie. Czy produkt można odebrać w Kaliszu? Czy termin wysyłki zmienia się po wyborze rozmiaru? Jak kupujący sprawdzi koszt dostawy przed płatnością? Z takich pytań powstają wymagania do karty produktu i koszyka. Integrację z magazynem lub systemem fakturowania ustalamy po sprawdzeniu możliwości dostawcy. W teście odbiorowym sprzedawca powinien móc odszukać zamówienie i sprawdzić jego status.",
        href: "/uslugi/strony-internetowe/ecommerce",
        link: "Zobacz, co obejmuje projekt sklepu internetowego",
      },
      {
        title:
          "Projektowanie nowoczesnych stron internetowych. Jak sprawdzamy urządzenia mobilne?",
        text: "Podczas odbioru responsywnej strony poproś osobę spoza zespołu o znalezienie ceny i wysłanie zapytania na urządzeniu mobilnym. Łatwo zauważyć miejsca, gdzie menu zasłania formularz lub opis błędu nie podpowiada, jak poprawić numer telefonu. Zaczynamy od funkcjonalności strony. Dobieramy kontrast, etykiety i kolejność przechodzenia klawiaturą. Intuicyjny układ powinien działać również przy powiększeniu tekstu. Takie sprawdzenie witryny daje konkretną listę poprawek przed premierą.",
      },
      {
        title:
          "Profesjonalne strony WWW. Co obejmuje obsługa witryny po wdrożeniu?",
        text: "Nawet nowoczesne strony internetowe dla firm wymagają opieki. Ustal, kto odpowiada za aktualizacje i przywrócenie kopii, gdy pojawi się problem. Inne potrzeby ma jednoosobowa firma, a inne sklep działający przez całą dobę. Przed przekazaniem dostępów zapiszemy uzgodniony zakres obsługi, sposób zgłaszania awarii i osobę odpowiedzialną za odnowienie domeny. Jeśli potrzebujesz kompleksowej opieki, możemy odrębnie wycenić stałe prace. Firmowe konta i dane do kontaktu powinny pozostać pod kontrolą Twojej firmy.",
      },
      {
        title: "Na jakiej platformie uruchomić sprzedaż online?",
        text: "Czasem sprzedajesz już kilka produktów przez wiadomości i potrzebujesz sklepu z łatwą obsługą. Na etapie wyceny możemy porównać koszt platformy abonamentowej z rozwiązaniem WooCommerce dla WordPressa. Liczą się opłaty, dostępne metody płatności, obsługa wariantów i sposób eksportu danych. Przy nietypowych wymaganiach sprawdzimy je na przykładzie jednego produktu. Dopiero wtedy dobieramy technologię do indywidualnych potrzeb sklepu.",
      },
    ],
  },
];

const faqs = [
  {
    question: "Jak długo trwa tworzenie strony WWW?",
    answer:
      "Orientacyjnie zakładamy 2–3 tygodnie dla wizytówki, 4–6 tygodni dla strony firmowej i 6–10 tygodni dla sklepu. Termin potwierdzimy po ustaleniu funkcji, dostępności materiałów i terminu akceptacji projektu. Jeśli rozważasz prostą stronę na szablonie, porównaj jej zakres z pakietem WWW START za 1 490 zł netto. Jeśli start wiąże się z wydarzeniem lub kampanią, podaj datę już w zapytaniu.",
  },
  {
    question: "Czy można zacząć od jednej usługi i rozbudować stronę później?",
    answer:
      "Tak. Na początku wybieramy zakres, który klient może od razu zamówić. Planujemy strukturę tak, żeby później można było dodać osobne usługi, realizacje lub sklep. W wycenie pierwszego etapu wskażemy, które prace należą do kolejnego.",
  },
  {
    question: "Czy mogę zachować domenę i firmową skrzynkę?",
    answer:
      "Zwykle tak. Przed wdrożeniem sprawdzamy dostęp do domeny, miejsce obsługi poczty oraz ustawienia obecnego hostingu. Uzgadniamy zakres zmian i test poczty, zanim przełączymy stronę.",
  },
  {
    question: "Czy samodzielnie zmienię zdjęcia i ceny na stronie?",
    answer:
      "Możemy przygotować panel administracyjny do aktualizacji wybranych elementów. Pokaż, co dziś zmieniasz najczęściej. Uwzględnimy to w projekcie i przejdziemy przez przykładową zmianę przy odbiorze.",
  },
  {
    question: "Co wysłać, żeby otrzymać wycenę?",
    answer:
      "Podaj branżę, cel strony, termin i dane do kontaktu. Dołącz link do obecnej witryny lub jednej realizacji, której sposób prezentacji Ci odpowiada. Przy sklepie dopisz liczbę produktów i potrzebne integracje. Dzięki temu możemy od razu omówić funkcje wpływające na cenę.",
  },
];

function Topic({ item }: { item: OfferTopic }) {
  return (
    <section className="grid gap-4 border-t border-border py-7 md:grid-cols-[1fr_1.6fr] md:gap-12">
      <h2 className="text-2xl font-heading">{item.title}</h2>
      <div>
        <p className="leading-relaxed">{item.text}</p>
        {item.href && (
          <Link
            className="mt-4 inline-block underline underline-offset-4"
            to={item.href}
          >
            {item.link}
          </Link>
        )}
      </div>
    </section>
  );
}

export default function StronyInternetoweKalisz() {
  return (
    <Layout>
      <SEOHead
        title="Projektowanie i tworzenie stron WWW – Kalisz | FOTZ Studio"
        description="Projektujemy profesjonalne strony WWW dla firm z Kalisza. Poznaj cenę WWW START, zobacz naszą pracę i zapytaj o projekt witryny, sklep lub SEO w Google."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/kalisz"
      />
      <OrganizationSchema />
      <ServiceSchema
        name="Projektowanie stron internetowych dla firm z Kalisza"
        description="Strony firmowe, landing page, sklepy i przebudowy istniejących serwisów."
        areaServed="Kalisz"
      />
      <BreadcrumbSchema
        items={[{ name: "Strona główna", url: "/" }, ...breadcrumbs]}
      />
      <FAQSchema items={faqs} />
      <PageBreadcrumbs items={breadcrumbs} />
      <section className="container-wide grid items-center gap-8 px-6 py-10 md:px-12 lg:grid-cols-2">
        <div>
          <h1 className="offer-heading mb-5">
            Projektowanie stron internetowych w Kaliszu z myślą o widoczności w
            Google
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Chcesz, żeby klient zamówił pomiar, zarezerwował pobyt albo kupił
            produkt? Pokaż nam, co sprzedajesz. Zaproponujemy stronę WWW, na
            której kupujący zobaczy właściwą ofertę i będzie wiedział, co zrobić
            dalej.
          </p>
          <p className="my-5">
            WWW START · 1 490 zł netto za One Page do pięciu sekcji na szablonie
            FOTZ. Twoje materiały, jedna runda poprawek. Domena i hosting
            osobno.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="dv-btn dv-btn-primary" href="#zapytanie">
              Opisz swój projekt
            </a>
            <a className="dv-btn dv-btn-secondary" href="#realizacje">
              Zobacz realizacje
            </a>
          </div>
        </div>
        <figure>
          <img
            width={1200}
            height={900}
            fetchPriority="high"
            className="w-full rounded-xl"
            src="/work/industries/victory-cars-800.webp"
            srcSet="/work/industries/victory-cars-480.webp 480w, /work/industries/victory-cars-800.webp 800w, /work/industries/victory-cars-1280.webp 1200w"
            sizes="(min-width:1024px) 45vw, 90vw"
            alt="Projekt katalogu samochodów dla dealera Victory Cars"
          />
          <figcaption className="mt-2 text-sm text-muted-foreground">
            <Link className="underline" to="/realizacje/victory-cars">
              Victory Cars · katalog samochodów zaprojektowany przez FOTZ Studio
            </Link>
          </figcaption>
        </figure>
      </section>
      <section className="container-wide px-6 py-10 md:px-12">
        <h2 className="mb-6 text-3xl font-heading">
          Projektowanie i tworzenie stron WWW dla firm z Kalisza
        </h2>
        <div className="grid gap-5 lg:grid-cols-3">
          {scope.map((item) => (
            <article key={item.variant} className="dv-panel flex flex-col p-6">
              <h3 className="mb-3 text-xl font-heading">{item.title}</h3>
              <p className="mb-5 leading-relaxed">{item.text}</p>
              <Link
                className="mt-auto underline underline-offset-4"
                to={enquiryHref("web", item.variant)}
              >
                {item.link}
              </Link>
            </article>
          ))}
        </div>
      </section>
      <section
        id="realizacje"
        aria-labelledby="realizacje-title"
        tabIndex={-1}
        className="container-wide scroll-mt-24 px-6 py-10 md:px-12"
      >
        <h2 id="realizacje-title" className="mb-6 text-3xl font-heading">
          Strony WWW dla firm – projekty graficzne i wdrożenia FOTZ
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((item) => (
            <article key={item.href} className="flex flex-col">
              <img
                className="aspect-video w-full rounded-lg bg-muted object-contain"
                width={800}
                height={450}
                loading="lazy"
                src={"/work/industries/" + item.image + "-800.webp"}
                alt={item.alt}
              />
              <h3 className="my-3 text-xl font-heading">{item.name}</h3>
              <p className="mb-4">{item.text}</p>
              <Link
                className="mt-auto underline underline-offset-4"
                to={item.href}
              >
                Zobacz {item.name}
              </Link>
            </article>
          ))}
        </div>
        <a href="#zapytanie" className="dv-btn dv-btn-primary mt-6">
          Zapytaj o podobny projekt
        </a>
      </section>
      <div className="container-wide px-6 py-8 md:px-12">
        {essentials.map((item) => (
          <Topic key={item.title} item={item} />
        ))}
        {guides.map((guide) => (
          <details key={guide.title} className="border-t border-border">
            <summary className="cursor-pointer py-5 text-xl font-heading">
              {guide.title}
            </summary>
            {guide.topics.map((item) => (
              <Topic key={item.title} item={item} />
            ))}
          </details>
        ))}
      </div>
      <section className="container-wide max-w-4xl px-6 pb-12 md:px-12">
        <h2 className="mb-5 text-3xl font-heading">
          Najczęściej zadawane pytania o stronę WWW
        </h2>
        {faqs.map((item) => (
          <details key={item.question} className="border-t border-border py-3">
            <summary className="min-h-11 cursor-pointer py-2 font-medium">
              {item.question}
            </summary>
            <p className="py-3">{item.answer}</p>
          </details>
        ))}
      </section>
      <section
        id="zapytanie"
        tabIndex={-1}
        className="scroll-mt-24"
        aria-label="Zapytanie do FOTZ Studio"
      >
        <ContactSection
          city="Kalisz"
          title="Opowiedz nam o swojej stronie"
          description="Podaj adres obecnej witryny lub napisz, co klient ma zamawiać. Ustalimy koszt, materiały i możliwy termin."
        />
      </section>
      <CityLinksSection currentCity="Kalisz" />
    </Layout>
  );
}
