import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CityLinksSection } from "@/components/sections/CityLinksSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";
import { enquiryHref } from "@/lib/enquiry.mjs";

const path = "/uslugi/strony-internetowe/poznan";
const breadcrumbs = [
  { name: "Strony internetowe", url: "/uslugi/strony-internetowe" },
  { name: "Poznań", url: path },
];
const fps = workImages.fps;
const cover = imageVariants.fps[1];

const offers = [
  {
    title: "Nowa strona firmowa z wyceną usługi",
    text: "Jeżeli każde zapytanie zaczyna się od telefonu, przyślij dwa pytania, które zadajesz na początku rozmowy. Dla wykonawcy będą to na przykład miejsce realizacji i przybliżony zakres prac. Możemy pokazać te informacje przy usłudze i przenieść je do formularza. Właściciel firmy dostaje wtedy kontekst do pierwszej odpowiedzi.",
    variant: "website", link: "Wyceń nową stronę firmową",
  },
  {
    title: "Przebudowa strony WWW, którą już masz",
    text: "Znasz problem z własnej skrzynki. Goście nie znajdują menu, dział handlowy wysyła w kółko ten sam katalog lub formularz na telefonie sprawia trudność. Podaj adres i przykład. Zaczniemy od sprawdzenia tej drogi. W wycenie pokażemy, które widoki wymagają zmiany i co można zachować z obecnej witryny.",
    variant: "redesign", link: "Zapytaj o przebudowę strony",
  },
  {
    title: "Sklep internetowy albo katalog dla handlowców",
    text: "Czy klient ma od razu kupować, czy najpierw zapytać o dostępność i warunki dostawy? Sklep potrzebuje koszyka, płatności i obsługi zamówień. W katalogu przemysłowym ważniejsze mogą być rysunki, porównanie parametrów i zapytanie z numerem modelu. Do wyceny podeślij jedną kartę produktu, liczbę wariantów i nazwę używanego systemu sprzedaży.",
    variant: "shop", link: "Wyceń sklep lub katalog produktów",
  },
];

const projects = [
  {
    name: "Gierky Activity Bar", linkLabel: "Zobacz projekt dla Gierky", href: "/realizacje/gierki",
    image: "/work/industries/gierky-web-800.webp", width: 800, height: 539,
    srcSet: "/work/industries/gierky-web-480.webp 480w, /work/industries/gierky-web-800.webp 800w, /work/industries/gierky-web-1280.webp 1280w",
    alt: "Projekt strony Gierky Activity Bar z ofertą poznańskiego lokalu",
    text: "Osoba organizująca wyjście ze znajomymi chce sprawdzić, co można zrobić na miejscu i jak zarezerwować atrakcję. Dla Gierky przygotowaliśmy podstrony atrakcji, zdjęcia wnętrz i przejście do rezerwacji. Zajrzyj do projektu, jeśli prowadzisz lokal i chcesz ułatwić gościom wybór jeszcze przed wizytą.",
  },
  {
    name: "Enea Stadion", linkLabel: "Zobacz projekt dla Enea Stadionu", href: "/realizacje/enea-stadion",
    image: "/work/portfolio/portfolio-enea-stadion-web-960.webp", width: 960, height: 546,
    srcSet: "/work/portfolio/portfolio-enea-stadion-web-480.webp 480w, /work/portfolio/portfolio-enea-stadion-web-960.webp 960w",
    alt: "Strona internetowa Enea Stadionu prezentująca poznański obiekt",
    text: "Na stronie Enea Stadionu pokazaliśmy obiekt, jego przestrzenie i ofertę. Organizator konferencji szuka innych informacji niż kibic w dniu meczu. Jeśli również obsługujesz kilka grup klientów, ten przykład pomoże ustalić, które wejścia do oferty warto wyróżnić już w menu.",
  },
];

const planning = [
  {
    title: "Profesjonalna strona internetowa. Co musi zawierać projekt dla Twojej firmy?",
    text: "Gdy zlecasz agencji wykonanie strony, pokaż jedną ofertę, którą klient ma wybrać. Jeśli dział handlowy co tydzień wysyła zdjęcia wnętrza albo klienci proszą o wymiary produktu, warto zaplanować te materiały już podczas budowy strony. Nasza agencja interaktywna może przygotować zdjęcia, film i tekst w ramach osobnej wyceny. Omówimy, co wykorzystać z istniejących materiałów i co zamówić przed pracą nad projektem strony WWW. Dzięki temu klient może podjąć decyzję bez czekania na odpowiedź.",
  },
  {
    title: "Projekt graficzny strony i UX. Co sprawdzić na telefonie?",
    text: "Przed akceptacją projektu strony internetowej wybierz jedną czynność, którą ma wykonać klient. W przypadku lokalu poproś osobę spoza firmy, by na telefonie znalazła termin i warunki rezerwacji. W przypadku producenta niech odszuka kartę wybranego modelu. Tak sprawdzisz, czy układ jest intuicyjny. Design, zdjęcia i wygląd strony możemy ocenić na tej samej próbce, na której widać jej użyteczność. Responsywne strony internetowe powinny zachować czytelny tekst, wygodne przyciski i działający formularz także na małym ekranie.",
  },
  {
    title: "System zarządzania treścią. Kto może edytować stronę po wdrożeniu?",
    text: "Właściciel lokalu zmienia menu, dział marketingu dodaje realizacje, a handlowiec aktualizuje dokumentację produktu. Powiedz, kto w Twojej firmie odpowiada za te treści. Jeżeli potrzebujesz CMS, pokażemy na przykładzie tej zmiany, czy panel jest łatwy w obsłudze. WordPress może wystarczyć do prowadzenia prostych stron firmowych. Przy katalogu zasilanym z magazynu najpierw sprawdzamy, skąd pochodzą ceny, zdjęcia i opisy. Ta funkcjonalność ma znaczenie dla budżetu i czasu wdrożenia.",
  },
  {
    title: "Budowa strony WWW, SEO i widoczność usług w Google",
    text: "Oddzielna podstrona ma sens, kiedy klient ma osobne pytania o daną usługę. Przy sali szkoleniowej będzie pytał o liczbę miejsc, układ stołów i dojazd. Przy wynajmie całego obiektu liczą się dostępność, zaplecze i kontakt z opiekunem. Porządkujemy tytuły, opisy i linki, by użytkownik wyszukiwarki trafił na odpowiednią ofertę. Optymalizacja techniczna na start obejmuje m.in. sprawdzenie indeksowania i adresów. Dalsze pozycjonowanie możemy wycenić osobno.",
  },
  {
    title: "Audyt strony przed zmianą adresów i przeniesieniem oferty",
    text: "Wklej link do starszej witryny i wskaż treści, do których wciąż odsyłają klienci, partnerzy lub kody QR na drukach. Przy przebudowie zestawiamy te adresy z danymi Search Console. Ustalamy, co zostaje pod dawnym adresem, a co wymaga przekierowania. Dla firm z Poznania wystawiających się na targach szczególnie istotny może być link wydrukowany w katalogu. Sprawdzamy go po publikacji tak samo jak odnośniki w menu.",
  },
  {
    title: "Marketing po uruchomieniu. Co policzyć na Twojej stronie?",
    text: "Jeśli celem kampanii jest zapytanie, sprawdźmy, gdzie kończy się kontakt online. Kliknięcie w numer telefonu, poprawne wysłanie formularza i rezerwacja w zewnętrznym systemie to różne zdarzenia. Wybieramy pomiar pasujący do celu i ustalamy, kto odbiera zgłoszenia. W przypadku osobnego formularza do zamówień grupowych pracownik może od razu dostać datę i liczbę osób. Przy odbiorze warto przejść tę ścieżkę także ze skrzynką odbiorcy pod ręką.",
  },
];

const questions = [
  { question: "Ile kosztuje stworzenie strony internetowej dla firmy z Poznania?", answer: "Pakiet WWW START kosztuje 1 490 zł netto. Obejmuje One Page do pięciu sekcji na szablonie FOTZ i jedną rundę poprawek. Teksty, zdjęcia i logo dostarcza klient. Domena i hosting są płatne osobno. Indywidualny projekt graficzny, osobne podstrony usług, sklep lub połączenie z systemem rezerwacji wyceniamy po określeniu zakresu." },
  { question: "Jakie materiały przygotować do wyceny strony WWW?", answer: "Na początek wystarczy krótki opis oferty, adres obecnej strony, jeśli ją masz, i jedna sytuacja, w której klient ma się z Tobą skontaktować. Dopisz, czy masz zdjęcia, teksty oraz termin wydarzenia lub kampanii. Jeśli potrzebujesz sesji zdjęciowej albo tekstów, uwzględnimy je jako osobne pozycje. Przykład jednej usługi lub produktu pozwala oszacować pracę dokładniej niż sama liczba zakładek." },
  { question: "Czy muszę od razu zamawiać całą nową stronę?", answer: "Jeśli problem dotyczy jednego miejsca, na przykład rezerwacji stolika na telefonie, warto najpierw ocenić właśnie ten widok. Podeślij adres oraz opisz, na czym zatrzymują się goście. Porównamy koszt poprawki z zakresem przebudowy. Gdy potrzebna jest nowa strona, określimy, które treści, integracje i adresy nadal będą przydatne." },
  { question: "Kiedy poznam termin realizacji strony internetowej?", answer: "Termin wpisujemy do oferty po ustaleniu liczby widoków, treści i integracji. Napisz, czy projekt musi ruszyć przed targami, otwarciem lokalu lub startem sprzedaży. Możemy wtedy ustalić kolejność publikacji. Przygotuj też termin, w którym osoba odpowiedzialna za ofertę może zatwierdzić materiały." },
  { question: "Czy da się zachować domenę, pocztę firmową i dotychczasowy hosting?", answer: "Zwykle można zachować domenę. Przed publikacją ustalamy, kto nią zarządza, gdzie działa poczta i jakie wymagania ma nowy serwis. Jeśli potrzebna będzie zmiana hostingu, opisujemy zakres przenosin i kontrolę poczty. Do pierwszej rozmowy wystarczy nazwa dostawcy. Dane dostępowe ustalimy dopiero na etapie wdrożenia." },
  { question: "Jak ocenić ofertę wykonawcy strony internetowej?", answer: "Poproś o przykład serwisu o podobnym zadaniu i sprawdź go na własnym telefonie. Porównaj, kto dostarcza materiały, ile zmian uwzględnia cena, jakie integracje obejmuje wdrożenie i kto odpowiada za utrzymanie. Zapisz także, jak sprawdzicie odbiór zapytania lub płatności. Wtedy łatwiej ocenić, co rzeczywiście obejmuje koszt strony." },
];

export default function StronyInternetowePoznan() {
  return (
    <Layout workPlacement="after-main" workExcludeImageId="fps">
      <SEOHead
        title="Strony internetowe Poznań – projekty WWW dla Gierky i FPS | FOTZ"
        description="Projektujemy responsywne strony WWW dla firm z Poznania. Zobacz realizacje dla FPS, Gierky i Enea Stadionu. Pakiet WWW START za 1 490 zł netto. Zapytaj o wycenę."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/poznan"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, ...breadcrumbs]} />
      <ServiceSchema name="Projektowanie stron internetowych w Poznaniu" description="Strony firmowe, sklepy i przebudowy dla firm z Poznania. Portfolio poznańskich realizacji i wycena." areaServed={["Poznań", "Wielkopolska"]} />
      <FAQSchema items={questions} />
      <PageBreadcrumbs items={breadcrumbs} />

      <section className="container-wide grid items-center gap-8 px-6 py-10 md:px-12 md:py-16 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="offer-heading mb-5">Responsywne strony internetowe dla firm z Poznania</h1>
          <p className="max-w-2xl text-lg leading-relaxed">Co klient ma załatwić na Twojej stronie? W Gierky gość wybiera atrakcję i przechodzi do rezerwacji. W serwisie producenta pojazdów szynowych FPS poznaje ofertę przed rozmową z działem handlowym. Projektujemy strony internetowe w Poznaniu wokół takich decyzji. Pokaż nam, co dziś klienci muszą ustalać przez telefon.</p>
          <div className="my-6 flex flex-wrap gap-3">
            <a className="dv-btn dv-btn-primary" href="#formularz">Poproś o wycenę strony</a>
            <a className="dv-btn dv-btn-secondary" href="#realizacje">Zobacz poznańskie realizacje</a>
          </div>
          <p className="text-sm text-muted-foreground"><a href="#cena" className="underline underline-offset-4">WWW START za 1 490 zł netto</a> · Jedna strona do pięciu sekcji na szablonie FOTZ</p>
        </div>
        <figure className="offer-visual min-w-0">
          <Link to={fps.href} className="block rounded-xl focus-visible:outline-offset-4">
            <img src={cover.src} srcSet={imageVariants.fps.map(image => image.src + " " + image.width + "w").join(", ")} sizes="(min-width: 1024px) 43vw, 90vw" width={cover.width} height={cover.height} alt={fps.alt} loading="eager" className="w-full rounded-xl" />
          </Link>
          <figcaption className="mt-3 text-sm text-muted-foreground">FPS Poznań. Strona internetowa i identyfikacja wizualna producenta pojazdów szynowych. <Link className="underline" to={fps.href}>Obejrzyj projekt dla FPS</Link></figcaption>
        </figure>
      </section>

      <section id="realizacje" tabIndex={-1} className="section-padding scroll-mt-24 bg-muted/30 py-12">
        <div className="container-wide">
          <h2 className="max-w-3xl text-3xl font-heading font-bold">Realizacje stron internetowych w Poznaniu dla Gierky, Enea Stadionu i FPS</h2>
          <div className="mt-7 grid gap-8 md:grid-cols-2">
            {projects.map(project => (
              <article key={project.href} className="flex flex-col items-start">
                <img src={project.image} srcSet={project.srcSet} sizes="(min-width: 768px) 45vw, 90vw" loading="lazy" width={project.width} height={project.height} alt={project.alt} className="aspect-video w-full rounded-xl border bg-muted object-contain" />
                <h3 className="mt-4 text-2xl font-heading">{project.name}</h3>
                <p className="my-3 max-w-2xl leading-relaxed">{project.text}</p>
                <Link to={project.href} className="mt-auto underline underline-offset-4">{project.linkLabel}</Link>
              </article>
            ))}
          </div>
          <article className="mt-8 max-w-3xl border-t border-border pt-6">
            <h3 className="text-2xl font-heading">FPS Poznań. Oferta producenta dla odbiorcy B2B</h3>
            <p className="my-3 leading-relaxed">Przy projekcie dla Fabryki Pojazdów Szynowych połączyliśmy stronę producenta z jego identyfikacją wizualną. Jeśli Twoi handlowcy pokazują ofertę na targach, zobacz, jak można przedstawić produkty i kompetencje firmy osobie, która dopiero ją poznaje.</p>
            <Link className="underline underline-offset-4" to={fps.href}>Zobacz projekt i zakres prac dla FPS</Link>
          </article>
        </div>
      </section>

      <section className="container-wide px-6 py-14 md:px-12">
        <h2 className="text-3xl font-heading font-bold">Projektowanie i tworzenie stron WWW. Jaki zakres wycenić?</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {offers.map(offer => (
            <article key={offer.variant} className="dv-panel flex flex-col p-6">
              <h3 className="text-xl font-heading font-semibold">{offer.title}</h3>
              <p className="my-4 leading-relaxed">{offer.text}</p>
              <Link to={enquiryHref("web", offer.variant)} className="mt-auto underline underline-offset-4">{offer.link}</Link>
            </article>
          ))}
        </div>
      </section>

      <section id="cena" className="section-padding scroll-mt-24 bg-muted/30 py-12">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          <div><h2 className="text-3xl font-heading font-bold">Ile kosztuje strona WWW dla firmy z Poznania?</h2>
            <p className="my-4 text-3xl font-semibold">1 490 zł netto</p>
            <p>WWW START to One Page do pięciu sekcji na szablonie FOTZ. Dostarczasz logo, zdjęcia i teksty. Cena obejmuje jedną rundę poprawek. Domenę i hosting opłacasz osobno.</p>
            <Link to="/cennik" className="mt-4 inline-block underline">Zobacz warunki WWW START w cenniku</Link>
          </div>
          <div><h3 className="text-xl font-heading font-semibold">Co wpływa na wycenę indywidualnego projektu strony?</h3>
            <p className="mt-3 leading-relaxed">Różnicę robi sposób obsługi klienta. Przycisk prowadzący do systemu rezerwacji, którego już używasz, ma inny zakres niż budowa od podstaw kalendarza dla kilku sal. Podobnie przy ofercie B2B. Umieszczenie katalogu PDF to inna praca niż przygotowanie wyszukiwarki modeli z dokumentacją. Opisz, który wariant jest Ci potrzebny. Uwzględnimy koszt uruchomienia i późniejszego utrzymania.</p>
          </div>
        </div>
      </section>

      <section className="container-wide grid gap-x-10 gap-y-9 px-6 py-14 md:grid-cols-2 md:px-12">
        {planning.map(item => <article key={item.title}>
          <h2 className="text-2xl font-heading font-semibold">{item.title}</h2>
          <p className="mt-3 leading-relaxed">{item.text}</p>
        </article>)}
        <div>
          <h2 className="text-2xl font-heading font-semibold">Etapy tworzenia stron internetowych dla firm</h2>
          <p className="my-3 leading-relaxed">Jeśli porównujesz oferty agencji, zobacz, co dzieje się między pierwszym briefem a publikacją. Przedstawiamy tam proces projektowania stron internetowych, pracę nad materiałami i odbiór gotowego serwisu. Tu możesz obejrzeć poznańskie przykłady i od razu wybrać zakres wyceny.</p>
          <Link className="underline" to="/uslugi/tworzenie-stron-internetowych/poznan">Jak przebiega tworzenie strony w FOTZ?</Link>
        </div>
      </section>

      <section className="container-wide max-w-4xl px-6 py-10">
        <h2 className="mb-5 text-3xl font-heading font-bold">Strony WWW w Poznaniu. O co pytają klienci przed zleceniem projektu?</h2>
        {questions.map(item => <details key={item.question} className="border-t border-border py-3">
          <summary className="min-h-11 cursor-pointer py-2 font-medium">{item.question}</summary>
          <p className="mt-2 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>)}
      </section>
      <div className="container-wide max-w-4xl px-6 py-8">
        <EnquiryForm defaultService="web" />
        <p className="mt-4">Wolisz omówić projekt telefonicznie? <a href="tel:+48790814814" className="underline">790 814 814</a></p>
      </div>
      <div className="container-wide flex flex-wrap gap-5 px-6 py-6">
        <Link className="underline" to="/uslugi/strony-internetowe">Pełna oferta stron WWW</Link>
        <Link className="underline" to="/seo/pozycjonowanie">Zakres pozycjonowania</Link>
        <Link className="underline" to="/performance-marketing">Kampanie reklamowe</Link>
        <Link className="underline" to="/social-media/obsluga">Obsługa social media</Link>
      </div>
      <CityLinksSection currentCity="Poznań" />
    </Layout>
  );
}
