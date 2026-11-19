import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { CityLinksSection } from "@/components/sections/CityLinksSection";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, OrganizationSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { enquiryHref } from "@/lib/enquiry.mjs";
import apartments from "@/assets/portfolio/apartamenty-chorwacja-web.webp";
import dumpling from "@/assets/portfolio/cute-dumpling-new-web.webp";
import victory from "@/assets/portfolio/victory-cars-web.webp";

const path = "/uslugi/strony-internetowe/krakow";
const breadcrumbs = [
  { name: "Strony internetowe", url: "/uslugi/strony-internetowe" },
  { name: "Kraków", url: path },
];

const scopes = [
  {
    title: "Nowa strona dla firmy usługowej",
    text: "Jeśli w Krakowie przyjmujesz klientów w lokalu, na pierwszym ekranie przydadzą się usługa, dzielnica i sposób rezerwacji. Jeśli dojeżdżasz do klienta, ważniejsze będą zakres dojazdu, przykładowa realizacja i pytania potrzebne do wyceny. Pokaż nam wiadomość, którą dziś najczęściej dostajesz. Od niej możemy zacząć układ oferty.",
    variant: "website", link: "Wyceń nową stronę firmową",
  },
  {
    title: "Przebudowa istniejącej witryny",
    text: "Masz odwiedziny, ale ludzie dzwonią, żeby zapytać, gdzie znaleźć cennik lub wolny termin? Prześlij adres i opisz jeden problem. Sprawdzimy drogę od wejścia na stronę do kontaktu. Ustalimy, które treści, adresy i integracje zachować oraz czy wystarczy poprawa pojedynczego widoku.",
    variant: "redesign", link: "Zapytaj o przebudowę strony",
  },
  {
    title: "Sklep internetowy lub katalog produktów",
    text: "Przy stałych cenach kupujący może sam wybrać wariant, zapłacić i zamówić dostawę. Przy produkcji na wymiar praktyczniejszy może być katalog z zapytaniem o konkretny model. Podaj liczbę produktów, wariantów i używany system magazynowy. Wycenimy funkcje potrzebne na start oraz te, które można dodać później.",
    variant: "shop", link: "Wyceń sklep lub katalog",
  },
];

const projects = [
  { name: "Apartamenty Chorwacja", href: "/realizacje/apartamenty-chorwacja", image: apartments, alt: "Strona apartamentów w Chorwacji z ofertą pobytu", text: "Gość porównuje apartamenty i przechodzi do rezerwacji. Obejrzyj tę realizację, jeśli przyjmujesz gości z różnych krajów i chcesz pokazać dostępność oraz wyposażenie również na telefonie." },
  { name: "Victory Cars", href: "/realizacje/victory-cars", image: victory, alt: "Projekt katalogu samochodów Victory Cars", text: "Kupujący ogląda konkretny samochód przed rozmową z dealerem. Podobny układ sprawdza się tam, gdzie przed wyceną trzeba porównać zdjęcia, warianty lub parametry produktu." },
  { name: "Cute as a Dumpling", href: "/realizacje/cute-dumpling", image: dumpling, alt: "Sklep z dekoracjami świątecznymi Cute as a Dumpling", text: "Sklep z ozdobami świątecznymi pokazuje, jak poprowadzić klienta od kolekcji do wybranej dekoracji. Zajrzyj do projektu, jeśli planujesz sprzedaż własnych produktów lub sezonowe kolekcje." },
];

const questions = [
  { question: "Ile kosztuje strona internetowa dla małej firmy z Krakowa?", answer: "WWW START kosztuje 1 490 zł netto. To One Page do pięciu sekcji na szablonie FOTZ. Dostarczasz teksty, zdjęcia i logo. W cenie jest jedna runda poprawek, a domenę i hosting opłacasz osobno. Stronę z podstronami, rezerwacjami lub indywidualnym projektem graficznym wyceniamy po ustaleniu zakresu." },
  { question: "Czy mogę samodzielnie edytować stronę w WordPressie?", answer: "Tak, jeśli wybierzemy WordPress jako system zarządzania treścią. Ustalamy, co Twoja firma zmienia najczęściej, np. ceny usług, zdjęcia realizacji albo godziny otwarcia. Przy odbiorze sprawdzasz na swoim koncie, czy potrafisz wykonać taką zmianę. Wybór CMS dla indywidualnego projektu omawiamy przy wycenie." },
  { question: "Mam stronę w Google. Co stanie się z jej adresami przy przebudowie?", answer: "Przed migracją sporządzamy listę ważnych adresów i sprawdzamy, które podstrony przyciągają odwiedzających. Tam, gdzie adres musi się zmienić, planujemy przekierowanie na odpowiednik. Po wdrożeniu sprawdzamy kod odpowiedzi, odnośniki i mapę witryny. Dostęp do Search Console pozwala obserwować, jak Google odczytuje zmiany." },
  { question: "Czy strona będzie działać po polsku i po angielsku?", answer: "Możemy przygotować osobne wersje językowe. Dla obiektu noclegowego sama zmiana menu często nie wystarczy. Gość potrzebuje również zrozumiałych warunków pobytu, informacji o dojeździe i potwierdzenia rezerwacji. W briefie zaznacz języki i powiedz, które tłumaczenia już masz. Ustalimy, kto przygotowuje pozostałe treści." },
  { question: "Jak długo trwa tworzenie strony i kiedy można ją uruchomić?", answer: "Datę uzgadniamy po poznaniu zakresu i sprawdzeniu materiałów. Przy prostym serwisie decyzja o treści i zdjęciach często zajmuje więcej czasu niż samo wstawienie ich na stronę. Jeśli masz termin otwarcia, targów albo kampanii, wpisz go w formularzu. Wskażemy, co może być gotowe na tę datę i co warto zaplanować w następnej kolejności." },
  { question: "Jak wygląda współpraca z firmą z Krakowa po publikacji?", answer: "Pracujemy zdalnie. Po uruchomieniu ustalamy sposób zgłaszania zmian oraz odpowiedzialność za domenę, hosting, aktualizacje i kopie zapasowe. Jeśli po premierze planujesz pozycjonowanie strony lub kampanię reklamową, możemy wycenić te działania osobno. Już przy odbiorze możesz przejść cały formularz lub zamówienie na swoim telefonie." },
];

export default function StronyInternetoweKrakow() {
  return (
    <Layout workPlacement="after-main">
      <SEOHead
        title="Strony internetowe Kraków – tworzenie stron WWW dla firm | FOTZ"
        description="Tworzenie stron WWW dla firm z Krakowa. Projektujemy strony internetowe, sklepy i serwisy z rezerwacją. WWW START za 1 490 zł netto. Zobacz realizacje i wyceń projekt."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/krakow"
      />
      <OrganizationSchema />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "/" }, ...breadcrumbs]} />
      <ServiceSchema name="Projektowanie stron WWW dla firm z Krakowa" description="Strony firmowe, sklepy internetowe i przebudowa witryn. Wycena i współpraca zdalna dla firm z Krakowa." areaServed={["Kraków", "Małopolska"]} />
      <FAQSchema items={questions} />
      <PageBreadcrumbs items={breadcrumbs} />

      <section className="container-wide px-6 py-10 md:px-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end">
          <div>
            <h1 className="offer-heading mb-5">Projektowanie i tworzenie stron WWW dla firm z Krakowa – wycena i realizacje</h1>
            <p className="text-lg max-w-3xl leading-relaxed text-muted-foreground">Potrzebujesz strony internetowej, na której klient może zarezerwować pobyt, kupić produkt czy wysłać zapytanie o usługę? Dobierzemy zakres do tego, jak sprzedajesz. Jako agencja wykonujemy strony dla lokali, firm usługowych i sklepów. Projektujemy strony internetowe dla firm z Krakowa i Małopolski. Projekt, uwagi i odbiór omawiamy zdalnie.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="dv-btn dv-btn-primary" href="#formularz">Poproś o wycenę strony</a>
              <a className="dv-btn dv-btn-secondary" href="#realizacje">Obejrzyj realizacje</a>
            </div>
          </div>
          <aside className="rounded-xl bg-muted/50 p-6">
            <h2 className="text-xl font-heading font-semibold">Ile kosztuje prosta strona WWW?</h2>
            <p className="mt-3"><strong className="text-3xl">1 490 zł netto</strong></p>
            <p className="my-3 text-muted-foreground">WWW START obejmuje One Page do pięciu sekcji na szablonie FOTZ, Twoje materiały i jedną rundę poprawek. Domena i hosting są płatne osobno.</p>
            <Link className="underline underline-offset-4" to="/cennik">Sprawdź warunki WWW START</Link>
          </aside>
        </div>
      </section>

      <section id="zakres" className="section-padding py-12 bg-muted/30">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold">Tworzenie stron internetowych dla firm – wybierz zakres projektu</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-3">
            {scopes.map(scope => <article key={scope.variant} className="dv-panel flex flex-col p-6">
              <h3 className="text-xl font-heading font-semibold">{scope.title}</h3>
              <p className="my-4 leading-relaxed text-muted-foreground">{scope.text}</p>
              <Link to={enquiryHref("web", scope.variant)} className="mt-auto font-semibold underline underline-offset-4">{scope.link}</Link>
            </article>)}
          </div>
        </div>
      </section>

      <section id="realizacje" tabIndex={-1} className="container-wide scroll-mt-24 py-14 px-6 md:px-12">
        <h2 className="text-3xl font-heading font-bold">Portfolio agencji – realizacje stron i sklepów internetowych</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">Porównaj, co robi użytkownik po wejściu na każdą z tych stron. Ten wybór wpływa na układ serwisu, zakres prac i koszt wdrożenia.</p>
        <div className="mt-7 grid gap-6 md:grid-cols-3">{projects.map(project => <article key={project.href} className="flex flex-col">
          <img className="aspect-video w-full rounded-xl border bg-muted object-contain" src={project.image} alt={project.alt} loading="lazy" width={800} height={450} />
          <h3 className="mt-4 text-xl font-heading font-semibold">{project.name}</h3><p className="my-3 leading-relaxed text-muted-foreground">{project.text}</p>
          <Link className="mt-auto inline-flex items-center gap-1 underline underline-offset-4" to={project.href}>Zobacz projekt {project.name} <ArrowUpRight size={16} /></Link>
        </article>)}</div>
        <Link className="mt-6 inline-block underline underline-offset-4" to="/realizacje">Całe portfolio FOTZ</Link>
      </section>

      <section className="section-padding py-14 bg-muted/30">
        <div className="container-wide grid gap-8 md:grid-cols-2">
          <article><h2 className="text-2xl font-heading font-semibold">Projektowanie i tworzenie stron WWW – wycena dla klientów z Krakowa</h2>
            <p className="mt-3 leading-relaxed">Wystarczą trzy informacje. Napisz, czym zajmuje się firma, kto kupuje i jaki ma być ostatni krok na stronie. Jeśli masz obecną witrynę, wklej adres i dopisz, czy chcesz zachować branding. Opisz grupę docelową. Dołącz materiały do komunikacji marki, jeśli już masz identyfikację wizualną, zdjęcia, teksty lub tłumaczenia. Podaj też termin premiery. Na tej podstawie odróżnimy koszt uruchomienia od kosztu późniejszych zmian.</p>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">Web design i UX – jak klient korzysta ze strony na telefonie?</h2>
            <p className="mt-3 leading-relaxed">Przed akceptacją projektu przejdź jedną prawdziwą ścieżkę klienta. Na przykład turysta szukający noclegu chce sprawdzić dostępność i warunki dojazdu jeszcze przed telefonem. Osoba wybierająca wykonawcę chce wysłać wymiary i dostać wycenę. Na małym ekranie pokażemy te informacje i sprawdzimy, czy formularz da się wygodnie wypełnić kciukiem.</p>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">Optymalizacja SEO i pozycjonowanie stron firmowych</h2>
            <p className="mt-3 leading-relaxed">Ustalamy strukturę usług i czytelne adresy podstron. Dobieramy tytuły, opisy i linki wewnętrzne. Przy publikacji sprawdzamy szybkość ładowania, dostępność dla wyszukiwarki i działanie formularza na docelowej domenie. Jeśli prowadzisz kilka lokali w Krakowie, każdy adres powinien mieć aktualne godziny i wskazówki dojazdu. Jeśli szukasz kompleksowej obsługi działań marketingowych, zaznacz, czy oprócz SEO planujesz płatne kampanie w wyszukiwarce (SEM). Wtedy zobaczysz w wycenie koszt uruchomienia serwisu, prowadzenia kampanii i późniejszej pracy nad treścią.</p>
            <Link className="mt-3 inline-block underline" to="/seo/pozycjonowanie">Zobacz zakres pozycjonowania</Link>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">Landing page do kampanii Google Ads czy serwis z podstronami?</h2>
            <p className="mt-3 leading-relaxed">Landing page ma sens, kiedy odbiorca przychodzi z jednej reklamy i zamawia jedną usługę. Jeśli planujesz posty sponsorowane na Instagramie czy TikToku, strona powinna od razu pokazać ten sam produkt i warunki co materiał reklamowy. Przy kilku specjalizacjach warto dać każdej własne miejsce, przykłady i sposób kontaktu. Podczas wyceny zaznaczymy, które elementy powstają na szablonie, a które projektujemy indywidualnie.</p>
            <Link className="mt-3 inline-block underline" to="/uslugi/tworzenie-stron-internetowych/krakow">Poznaj etapy tworzenia strony w FOTZ</Link>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">WordPress i WooCommerce – strona w systemie CMS czy sklep e-commerce?</h2>
            <p className="mt-3 leading-relaxed">W e-commerce zamówienie ze strony musi trafić do osoby, która wydaje towar. Jeśli masz osobny magazyn, prześledzimy wspólnie, co dzieje się po kliknięciu „zamawiam”. Jeśli rozważasz WordPress i WooCommerce, podaj system do faktur, sposób rozliczania dostawy i listę wariantów. Ustalimy, czy wystarczy gotowa integracja. Wykonanie sklepu internetowego wyceniamy na podstawie tego przykładu. Przy odbiorze przechodzimy zamówienie od karty produktowej po wiadomość z potwierdzeniem.</p>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">Jak sprawdzić, czy marketing przynosi zapytania?</h2>
            <p className="mt-3 leading-relaxed">W formularzu przypisanym do reklamy o rezerwacji warto zapytać o datę pobytu. Gdy ktoś chce zamówić wycenę prac, przyda się opis zakresu. Jako agencja interaktywna pomagamy dobrać pola do rodzaju zgłoszenia. Ustalmy, co chcesz mierzyć. Dla noclegu będzie to wysłanie prośby o termin, dla wykonawcy prośba o kosztorys. Jeśli prowadzisz kampanie Google Ads lub reklamy w social media, możemy zaplanować pomiar w Google Analytics po uzyskaniu zgody. Wycena określi zakres konfiguracji, a zespół będzie mógł porównać liczbę wysłań formularza z zapytaniami odebranymi przez firmę.</p>
          </article>
          <article><h2 className="text-2xl font-heading font-semibold">Kto aktualizuje stronę i zapewnia wsparcie techniczne?</h2>
            <p className="mt-3 leading-relaxed">Zanim zaczniemy wdrażać zmiany, ustalmy, kto ma dostęp do domeny, hostingu i panelu administracyjnego. Możesz samodzielnie aktualizować ofertę albo zlecić nam opiekę w ustalonym zakresie. Przy przebudowie serwisów internetowych pytamy także o wtyczki, licencje i aktualną wersję PHP na hostingu. Dzięki temu koszty utrzymania i wsparcie techniczne pojawiają się już w wycenie.</p>
          </article>
        </div>
      </section>

      <section className="container-wide max-w-4xl px-6 py-12">
        <h2 className="mb-5 text-3xl font-heading font-bold">Tworzenie stron internetowych dla firm z Krakowa i okolic – pytania klientów</h2>
        {questions.map(item => <details key={item.question} className="border-t border-border py-3">
          <summary className="min-h-11 py-2 font-medium cursor-pointer">{item.question}</summary>
          <p className="mt-2 leading-relaxed text-muted-foreground">{item.answer}</p>
        </details>)}
      </section>
      <div className="container-wide max-w-4xl px-6 pb-10">
        <EnquiryForm defaultService="web" />
        <p className="mt-4 text-sm">Wolisz zadzwonić? <a href="tel:+48790814814" className="underline">790 814 814</a></p>
      </div>
      <div className="container-wide px-6 py-6 flex flex-wrap gap-x-6 gap-y-3">
        <Link className="underline" to="/uslugi/strony-internetowe">Oferta stron internetowych</Link>
        <Link className="underline" to="/uslugi/landing-page">Landing page do kampanii</Link>
        <Link className="underline" to="/performance-marketing">Kampanie reklamowe</Link>
      </div>
      <CityLinksSection currentCity="Kraków" />
    </Layout>
  );
}
