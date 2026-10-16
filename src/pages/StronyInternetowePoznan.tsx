import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import eneaStadion from "@/assets/portfolio/enea-stadion-web.webp";
import fpsCegielski from "@/assets/portfolio/fps-cegielski-web.webp";
import klagem from "@/assets/portfolio/klagem-web.webp";

type Section = { title: string; text: string; points?: string[]; href?: string; link?: string };

const sections: Section[] = [
  {
    title: "Strony www dla firm z Poznania — od czego zaczynamy?",
    text: "Pracujemy w Poznaniu, więc spotkanie w biurze klienta, na budowie czy w restauracji umawiamy po uzgodnieniu terminu. Rozmowę zaczynamy od pytania, kto ma trafić na stronę i co powinien zrobić po jej przeczytaniu. Inaczej planuje się serwis gabinetu na Jeżycach, a inaczej firmy produkcyjnej, która sprzedaje w całym kraju. Ustalamy obszar działania, najważniejsze usługi, pytania klientów i sposób przyjmowania zleceń. Strona www ma odpowiadać na te pytania, dlatego dopiero na tej podstawie powstaje struktura strony, czyli lista podstron i kolejność informacji. Profesjonalne strony nie muszą być rozbudowane, ale każda podstrona powinna mieć jasny cel. Dzięki temu nowa strona nie jest zbiorem przypadkowych zakładek, tylko uporządkowaną drogą od pierwszego wejścia do kontaktu.",
  },
  {
    title: "Tworzenie stron internetowych Poznań — elementy każdego projektu strony",
    text: "Profesjonalne tworzenie stron internetowych to coś więcej niż kod. W zakresie projektowania stron internetowych ustalamy strukturę strony, treści, funkcjonalności strony i sposób pomiaru zapytań. Każda strona www, którą przekazujemy, przechodzi kontrolę formularzy, linków i widoku mobilnego. Wykonanie strony obejmuje też metadane, przekierowania i przekazanie dostępów. W przypadku strony z rezerwacjami lub sklepem dochodzą testy płatności i powiadomień. Realizujemy strony internetowe dla małych firm i większych organizacji, a zakres dopasowujemy do budżetu. Profesjonalna strona internetowa nie musi być rozbudowana. Od profesjonalnej strony www oczekujemy przede wszystkim jasnej oferty, szybkiego działania i prostego kontaktu. Skuteczne strony internetowe pomagają klientom, którzy porównują firmy przez strony online, mapy i media społecznościowe. Ogólnopolski opis usługi znajdziesz w zakładce Strony internetowe w menu.",
  },
  {
    title: "Strona firmowa, landing page czy sklep — co sprawdzi się w Twojej firmie?",
    text: "Strona firmowa sprawdzi się, gdy oferujesz kilka usług i chcesz pokazać realizacje, zespół oraz odpowiedzi na częste pytania. Landing page wystarczy przy jednej ofercie, na przykład kampanii reklamowej lub zapisach na wydarzenie. Sklep internetowy wymaga katalogu produktów, wariantów, koszyka, płatności i obsługi zamówień, dlatego planujemy go osobno. Każda firma ma inne oczekiwania wobec strony, więc najpierw sprawdzamy, ile informacji trzeba przekazać i jak klienci dziś kupują. Nie namawiamy na rozbudowany serwis, jeśli na start wystarczy prosta wizytówka z czytelną ofertą. Rozwiązanie można później rozwijać etapami.",
    href: "/uslugi/sklepy-internetowe",
    link: "Sklepy internetowe — zakres wdrożenia",
  },
  {
    title: "Proces tworzenia stron internetowych w Poznaniu",
    text: "Tworzenie strony internetowej to proces złożony z kilku etapów, a każdy kończy się akceptacją. Po briefie przygotowujemy układ najważniejszych widoków i plan treści. Następnie powstaje projekt graficzny strony dopasowany do marki: kolorów, zdjęć, typografii i tonu komunikacji. Po zatwierdzeniu projektu strony internetowej przechodzimy do wdrożenia, czyli programowania, podłączenia formularzy i przygotowania panelu. Na końcu testujemy wersje strony na telefonie, tablecie i komputerze. Uruchomienie strony planujemy razem z Tobą, tak aby zmiana domeny lub hostingu nie wypadła w najgorętszym okresie sprzedaży.",
    points: [
      "Brief: cel, odbiorcy, zakres i materiały",
      "Projekt strony www: układ, treść i wygląd strony",
      "Wdrożenie strony: kod, CMS, formularze i integracje",
      "Testy, publikacja i przekazanie dostępów",
    ],
  },
  {
    title: "Wygląd i użyteczność strony internetowej dla Twojej firmy",
    text: "Estetyka ma znaczenie, ale ważniejsze jest to, czy odwiedzający szybko znajdzie potrzebne informacje. Użyteczność strony sprawdzamy już na etapie makiet: czy menu jest zrozumiałe, czy przyciski kontaktu są widoczne i czy formularz nie zadaje zbędnych pytań. Projektowanie stron internetowych w Poznaniu często dotyczy firm, które obsługują klientów lokalnie, więc dbamy o mapę dojazdu, godziny otwarcia i dane kontaktowe. Tworzymy funkcjonalne strony, na których treść prowadzi do decyzji, a dekoracje jej nie zasłaniają. Nowoczesny projekt nie musi oznaczać ciężkich animacji.",
  },
  {
    title: "Nowa strona www — responsywność i szybkość ładowania",
    text: "Wielu odwiedzających trafia na stronę z telefonu, dlatego responsywne strony internetowe i responsywne strony www projektujemy od widoku mobilnego. Sprawdzamy czytelność tekstu, wielkość przycisków i działanie menu na różnych szerokościach ekranu. Na czas ładowania strony wpływają obrazy, skrypty zewnętrzne, hosting i liczba wtyczek. Kompresujemy grafiki, ograniczamy zbędny kod i opisujemy, które dodatki mogą spowolnić serwis w przyszłości. Bezpieczne strony wymagają też certyfikatu SSL, aktualnego oprogramowania i kopii zapasowych. Te elementy zapisujemy w zakresie prac, aby było jasne, kto za nie odpowiada po starcie.",
  },
  {
    title: "Strony www WordPress czy rozwiązanie dedykowane?",
    text: "Technologię dobieramy do sposobu pracy z treścią. WordPress dobrze sprawdza się, gdy chcesz samodzielnie dodawać wpisy, realizacje lub zmieniać ofertę w panelu. Przy sklepie można rozważyć WooCommerce albo inną platformę sprzedażową. Rozwiązania dedykowane wybieramy wtedy, gdy potrzebne są niestandardowe funkcje, na przykład kalkulator, rezerwacje lub konfigurator. W wycenie określamy, które elementy edytujesz samodzielnie i czy przekazanie obejmuje szkolenie. Nie każda zmiana układu będzie możliwa z poziomu panelu, dlatego mówimy o tym przed startem.",
  },
  {
    title: "Treści, zdjęcia i wideo na Twojej stronie www",
    text: "Dobra strona potrzebuje konkretnych tekstów i prawdziwych zdjęć. Ustalamy, które materiały dostarczasz, a co przygotujemy w ramach zlecenia. Oprócz tworzenia stron FOTZ Studio zajmuje się fotografią i produkcją wideo, więc sesję zespołu, wnętrza lub produktów możemy zaplanować w Poznaniu razem z projektem. Strona www ze zdjęciami z realnej pracy pomaga klientom zrozumieć ofertę lepiej niż grafiki ze stockowych banków. Teksty piszemy prostym językiem, z odpowiedziami na pytania, które klienci zadają przez telefon. Koszt sesji lub nagrań rozpisujemy osobno.",
  },
  {
    title: "SEO i widoczność Twojej strony w wynikach wyszukiwania",
    text: "Podstawy SEO wdrażamy podczas budowania strony www, a nie po publikacji. Obejmują one strukturę adresów, tytuły, opisy, nagłówki, linkowanie wewnętrzne i dane strukturalne. Przygotowujemy serwis pod kątem wyszukiwarek internetowych, ale samo wdrożenie nie zapewnia wysokiej pozycji. Na to, jak wysoko pojawi się serwis, wpływają konkurencja, treść, linki i historia domeny. Jeśli celem jest zwiększenie widoczności strony w Google, pozycjonowanie stron rozpisujemy jako osobną usługę. Nie obiecujemy określonego miejsca w Google, pokazujemy natomiast, jakie prace wykonujemy i jak oceniamy pozycję Twojej strony.",
    href: "/seo/pozycjonowanie-poznan",
    link: "Oferta pozycjonowania w Poznaniu",
  },
  {
    title: "Przebudowa swojej strony zamiast budowania strony www od zera",
    text: "Jeśli masz już serwis, zaczynamy od przeglądu treści, ruchu i zapytań. Sprawdzamy, które podstrony są odwiedzane i mają linki z innych witryn. Przy zmianie adresów przygotowujemy przekierowania, a po publikacji kontrolujemy indeksowanie. Czasem lepszym wyjściem jest poprawa struktury i treści zamiast stawiania wszystkiego od nowa. Przed decyzją możemy wykonać audyt, który pokaże problemy techniczne i miejsca do poprawy.",
    href: "/seo/audyt",
    link: "Audyt SEO obecnej strony",
  },
  {
    title: "Cena strony internetowej — od czego zależy?",
    text: "Koszt zależy od liczby podstron, ilości treści, projektu graficznego i potrzebnych funkcji. Koszt wykonania strony internetowej rośnie przy integracjach z systemami zewnętrznymi, wersjach językowych, sklepie lub rezerwacjach. Osobno rozpisujemy koszty cykliczne: domenę, hosting, licencje i opiekę techniczną. Porównując oferty, sprawdź liczbę rund poprawek, prawa do projektu, przekazanie dostępów i zasady dalszej współpracy. Dokładna wycena powstaje po briefie, gdy znamy zakres i harmonogram. Nie podajemy jednej stawki dla wszystkich projektów, bo realizacja strony internetowej dla gabinetu i dla producenta to zupełnie inne zadania.",
    href: "/cennik-stron-internetowych",
    link: "Jak wyceniamy strony internetowe",
  },
  {
    title: "Ile trwa realizacja? Harmonogram tworzenia stron www",
    text: "Czas przygotowania strony internetowej zależy od zakresu oraz tempa przekazywania materiałów i decyzji. Prosta strona www w formie wizytówki wymaga mniej etapów niż serwis z blogiem czy sklep z setkami produktów. Harmonogram rozpisujemy po briefie i aktualizujemy, jeśli zakres się zmienia. Najczęściej opóźnienia wynikają z brakujących tekstów, zdjęć lub akceptacji, dlatego już na początku ustalamy, kto po stronie firmy zatwierdza kolejne etapy.",
  },
  {
    title: "Chcesz stworzyć stronę? Co przygotować do tworzenia strony",
    text: "Jeśli zależy Ci na serwisie, który od początku będzie dobrze zaplanowana, zbierz kilka informacji przed spotkaniem. Nie musisz mieć gotowych tekstów; wystarczy opis oferty i odbiorców.",
    points: [
      "adres obecnej witryny lub profilu firmy",
      "listę usług lub produktów i najczęstsze pytania klientów",
      "logo, zdjęcia i materiały, które możesz wykorzystać",
      "przykłady stron, które Ci się podobają, i termin startu",
    ],
  },
  {
    title: "Strony internetowe tworzymy z myślą o rozwoju — opieka po publikacji",
    text: "Po uruchomieniu serwis wymaga aktualizacji, kopii zapasowych i reakcji na zgłoszenia. Zakres opieki ustalamy przed publikacją, aby było jasne, co obejmuje abonament, a co jest osobnym zleceniem. Rozwój Twojej firmy często oznacza nowe usługi, a rozwój Twojej strony internetowej — kolejne podstrony lub integracje, dlatego planujemy strukturę tak, aby łatwo ją rozbudować. Po starcie warto obserwować dane z Google Search Console i analityki: skąd przychodzą odwiedzający, które podstrony czytają i gdzie rezygnują. Na tej podstawie proponujemy kolejne zmiany.",
  },
  {
    title: "Strony www Poznań — jak wybrać wykonawcę strony?",
    text: "Poznań to miasto, w którym działa wiele agencji i freelancerów, więc warto porównać nie tylko portfolio. Zapytaj, kto przygotuje projekt, treści i wdrożenie, ile rund poprawek obejmuje oferta i kto po publikacji będzie właścicielem dostępów. Doświadczenie w tworzeniu stron internetowych najlepiej ocenić po konkretnych realizacjach i opisie roli wykonawcy. Od wykonawcy strony warto oczekiwać jasnej informacji, czego nie obejmuje zlecenie. Specjalizujemy się w tworzeniu stron internetowych dla firm usługowych i produkcyjnych, a jako agencja interaktywna łączymy projekt z fotografią, wideo i kampaniami.",
  },
];

const poznanOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const work = [
  { name: "Enea Stadion Poznań", text: "Strona prezentująca stadion, jego przestrzenie i ofertę dla organizatorów wydarzeń.", image: eneaStadion, path: "/realizacje/enea-stadion" },
  { name: "FPS Poznań (Cegielski)", text: "Strona internetowa i identyfikacja wizualna dla fabryki pojazdów szynowych.", image: fpsCegielski, path: "/realizacje/fps-cegielski" },
  { name: "KLAGEM", text: "Strona i konfigurator mebli 3D z doborem modułów, wymiarów i kolorów.", image: klagem, path: "/realizacje/klagem" },
];

const faqs = [
  { question: "Ile kosztuje strona firmowa w Poznaniu?", answer: "Cena zależy od liczby podstron, treści, funkcji i integracji. Po krótkim briefie przygotowujemy wycenę z rozpisanym zakresem, harmonogramem oraz kosztami cyklicznymi, takimi jak domena i hosting." },
  { question: "Czy możemy spotkać się osobiście?", answer: "Tak. Zespół FOTZ Studio pracuje w Poznaniu, więc spotkanie umawiamy po uzgodnieniu terminu. Część rozmów i akceptacji możemy prowadzić online." },
  { question: "Jak długo trwa stworzenie strony internetowej?", answer: "Termin zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji. Harmonogram etapów potwierdzamy po briefie." },
  { question: "Czy strona będzie dostosowana do telefonów i wyszukiwarek?", answer: "Tak, projektujemy widoki mobilne i wdrażamy techniczne podstawy SEO. Sama publikacja serwisu nie zapewnia jednak określonej pozycji w Google." },
  { question: "Czy samodzielnie zmienię treść na stronie?", answer: "Jeśli potrzebujesz regularnie edytować ofertę, dobieramy CMS, na przykład WordPress, i ustalamy zakres edycji oraz szkolenie." },
  { question: "Czy przygotujecie teksty i zdjęcia?", answer: "Możemy przygotować treści oraz sesję zdjęciową lub nagrania w Poznaniu. Zakres i koszt tych prac rozpisujemy w wycenie." },
];

export default function StronyInternetowePoznan() {
  return (
    <Layout>
      <SEOHead
        title="Tworzenie stron internetowych Poznań – projektowanie stron WWW"
        description="Profesjonalne strony internetowe dla firm z Poznania: strona www, sklep i podstawy SEO. Spotkanie w Poznaniu, jasna wycena i realizacje FOTZ Studio."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/poznan"
      />
      <ServiceSchema name="Tworzenie stron internetowych dla firm z Poznania" description="Projektowanie i wdrożenie stron firmowych, landing page'y oraz sklepów internetowych." areaServed="Poznań" />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Poznań", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/poznan" }]} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
        <p className="dv-eyebrow mb-5">FOTZ Studio · zespół w Poznaniu</p>
        <h1 className="text-4xl md:text-6xl font-heading mb-6">Tworzenie stron internetowych Poznań — strony WWW dla firm</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-7">
          Oferujemy strony firmowe, landing page i sklepy, które działają na telefonie, jasno opisują ofertę i ułatwiają kontakt. Tworzenie i projektowanie stron prowadzimy od briefu przez projekt i wdrożenie po publikację.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz projekt do wyceny</Link>
          <a className="dv-btn dv-btn-secondary" href="tel:+48790814814">+48 790 814 814</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-5">Strona internetowa w Poznaniu — zakres współpracy</h2>
        <p className="text-muted-foreground leading-relaxed max-w-4xl mb-7">
          Tworzymy profesjonalne strony internetowe dla firm usługowych, produkcyjnych, gabinetów, restauracji i instytucji. Zakres obejmuje tworzenie strony od planu treści po wdrożenie, a w razie potrzeby także zdjęcia, wideo i kampanie. Wybierz wariant najbliższy Twoim potrzebom — szczegóły ustalimy na rozmowie.
        </p>
        <QuoteOptions options={poznanOptions} note="Zakres, cenę i harmonogram ustalamy po poznaniu projektu. Domenę, hosting, licencje i dalszą opiekę rozpisujemy w wycenie." />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Realizacje — profesjonalne strony dla firm</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {work.map(x => (
            <Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden">
              <img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5"><h3 className="text-xl mb-2">{x.name}</h3><p className="text-muted-foreground">{x.text}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {sections.map(item => (
          <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border">
            <h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2>
            <div>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              {item.points && <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}
              {item.href && <Link to={item.href} className="inline-block underline underline-offset-4 mt-5">{item.link}</Link>}
            </div>
          </section>
        ))}
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Tworzenie stron www w Poznaniu — najczęstsze pytania</h2>
        {faqs.map(f => (
          <details key={f.question} className="py-5 border-b border-border">
            <summary className="font-medium cursor-pointer">{f.question}</summary>
            <p className="mt-4 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o wycenę</Link>
          <Link className="dv-btn dv-btn-secondary" to="/uslugi/strony-internetowe-dla-firm">Strony internetowe dla firm — oferta</Link>
        </div>
      </section>
    </Layout>
  );
}
