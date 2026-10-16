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
    title: "Tworzenie stron www Wrocław — jak współpracujemy z klientem zdalnie?",
    text: "Zespół FOTZ Studio pracuje w Poznaniu, a firmy z Wrocławia obsługujemy zdalnie. Brief, prezentację projektu i akceptacje prowadzimy na spotkaniach online, a teksty, logo i zdjęcia przesyłasz nam w formie cyfrowej. Każdy etap kończy się krótkim podsumowaniem na piśmie, więc wiadomo, co zostało zatwierdzone i co dzieje się dalej. Pierwsza rozmowa dotyczy celu strony: kto ma ją odwiedzić i jaki krok powinien wykonać — zadzwonić, wysłać zapytanie, zarezerwować termin albo kupić produkt. Na tej podstawie planujemy strukturę, czyli listę podstron i kolejność informacji. Potrzeb klienta nie zgadujemy — pytamy o nie wprost, zanim powstanie pierwsza makieta.",
  },
  {
    title: "Profesjonalne tworzenie stron internetowych — co obejmuje realizacja?",
    text: "Profesjonalne tworzenie stron internetowych zaczyna się od planu, a nie od wyboru szablonu. W zakresie projektu ustalamy treści, funkcjonalność formularzy i sposób mierzenia zapytań. Wykonanie strony internetowej obejmuje też metadane, przekierowania ze starych adresów i przekazanie dostępów do domeny, hostingu i panelu CMS. Każda strona www przed publikacją przechodzi kontrolę linków, formularzy i widoku na urządzeniach mobilnych. Gdy serwis ma rezerwacje lub płatności, testujemy także powiadomienia i potwierdzenia. Zakres dopasowujemy do budżetu i do tego, co firma rzeczywiście wykorzysta.",
  },
  {
    title: "Strony internetowe dla firm we Wrocławiu — dla kogo projektujemy?",
    text: "Wrocław to miasto z dużym rynkiem usług dla biznesu, firmami technologicznymi, logistyką, przemysłem i silną branżą gastronomiczno-turystyczną. Każda z tych grup ma inny cel strony. Firma B2B potrzebuje jasnego opisu oferty, przykładów zastosowań i formularza dla działu zakupów. Lokal w centrum miasta potrzebuje menu, godzin otwarcia, rezerwacji i dobrej wersji mobilnej. Wiele firm, dla których Wrocław jest siedzibą, współpracuje z partnerami z zagranicy, dlatego wersję angielską lub niemiecką planujemy już na etapie struktury, a nie dopiero po publikacji. Strona internetowa dla firmy ma przede wszystkim pomagać w zdobywaniu nowych klientów i odpowiadać na pytania, które dziś trafiają do Ciebie telefonicznie.",
  },
  {
    title: "Wizytówka, strona firmowa czy sklep internetowy?",
    text: "Prosta wizytówka wystarczy, gdy klient ma szybko sprawdzić ofertę, dane i sposób kontaktu. Strona firmowa sprawdzi się, gdy masz kilka usług i chcesz pokazać realizacje, zespół oraz odpowiedzi na częste pytania. Landing page wystarczy przy jednej ofercie, kampanii reklamowej albo rekrutacji. Sklep internetowy wymaga katalogu, wariantów produktów, koszyka, płatności i obsługi zamówień, dlatego planujemy go jako osobny projekt. Wybór strony czy sklepu internetowego zależy od tego, jak klienci kupują dziś. Nie proponujemy rozbudowanego serwisu, jeśli na start wystarczy firmowa strona z czytelną ofertą — kolejne podstrony można dodać etapami.",
    href: "/uslugi/sklepy-internetowe",
    link: "Sklepy internetowe — zakres wdrożenia",
  },
  {
    title: "Proces tworzenia stron internetowych Wrocław krok po kroku",
    text: "Proces tworzenia stron internetowych dzielimy na etapy, z akceptacją po każdym z nich. Po briefie przygotowujemy układ kluczowych widoków i plan treści. Potem powstaje projekt graficzny dopasowany do marki: kolorów, typografii, zdjęć i tonu komunikacji. Po zatwierdzeniu projektu strony internetowej przechodzimy do wdrożenia — kodu, CMS, formularzy i integracji. Na końcu sprawdzamy wersje na telefonie, tablecie i komputerze oraz ustalamy z Tobą termin uruchomienia.",
    points: [
      "Brief online: cel, odbiorcy, zakres i materiały",
      "Projekt strony: układ, treść i design",
      "Wdrożenie: kod, CMS, formularze i integracje",
      "Testy, publikacja i przekazanie dostępów",
    ],
  },
  {
    title: "Projektowanie stron www Wrocław — użyteczność i design",
    text: "Proces projektowania stron zaczynamy od makiet, a dopiero potem dobieramy kolory i zdjęcia. Sprawdzamy, czy menu jest zrozumiałe, czy numer telefonu i przycisk kontaktu są widoczne i czy formularz nie pyta o zbędne dane. Na rynku, na którym klient porównuje kilka firm w kilka minut, wygrywa zwykle strona, która szybko odpowiada na pytanie „czy to dla mnie i ile to trwa”. Projektujemy tak, aby design wspierał treść, a nie ją zasłaniał. Nowoczesne strony internetowe nie muszą mieć ciężkich animacji — liczy się czytelność i szybki kontakt.",
  },
  {
    title: "Responsywne strony internetowe — mobilny widok i optymalizacja",
    text: "Dużo wejść pochodzi z telefonów, dlatego strony responsywne projektujemy od widoku mobilnego. Sprawdzamy rozmiar tekstu, wielkość przycisków i działanie menu na różnych ekranach. Na czas ładowania wpływają zdjęcia, skrypty zewnętrzne, hosting i liczba wtyczek, więc optymalizacja obejmuje kompresję grafik i ograniczenie zbędnego kodu. Bezpieczna strona wymaga certyfikatu SSL, aktualizacji i kopii zapasowych — w zakresie prac zapisujemy, kto za nie odpowiada po starcie.",
  },
  {
    title: "WordPress, inny CMS czy rozwiązanie dedykowane?",
    text: "Technologię dobieramy do tego, jak zespół będzie pracował z treścią. Strony WordPress sprawdzają się, gdy chcesz samodzielnie publikować wpisy, oferty pracy lub realizacje. WordPress z WooCommerce bywa dobrym wyborem przy mniejszym sklepie. Rozwiązanie dedykowane ma sens przy niestandardowych funkcjach, takich jak kalkulator, konfigurator czy integracja z systemem firmy. W wycenie opisujemy, które elementy edytujesz w panelu CMS i czy przekazanie obejmuje szkolenie online.",
  },
  {
    title: "Projektowanie logo, treści i zdjęcia na stronę",
    text: "Strona potrzebuje konkretnych tekstów, spójnej identyfikacji i prawdziwych zdjęć. Jeśli marka nie ma jeszcze znaku, projektowanie logo i podstawowych elementów graficznych możemy włączyć do zlecenia. Teksty piszemy prostym językiem, z odpowiedziami na pytania, które klienci zadają przez telefon. Oprócz tworzenia stron FOTZ Studio zajmuje się fotografią i produkcją wideo. Jeśli potrzebna jest sesja we Wrocławiu, możliwość i koszt wyjazdu ustalamy osobno przy wycenie; często wystarczą też materiały, które firma już ma.",
  },
  {
    title: "SEO, pozycjonowanie stron i widoczność w wyszukiwarce",
    text: "Podstawy SEO wdrażamy w trakcie budowania strony: adresy, tytuły, opisy, nagłówki, linkowanie wewnętrzne i dane strukturalne. Przygotowujemy serwis pod kątem wyszukiwarek internetowych, ale samo wdrożenie nie daje wysokiej pozycji. O tym, gdzie pojawią się wyniki wyszukiwania z Twoją firmą, decydują m.in. konkurencja w branży, jakość treści, linki i historia domeny. Jeśli zależy Ci na widoczności strony w Google, pozycjonowanie stron internetowych rozpisujemy jako osobną usługę z własnym zakresem. Nie gwarantujemy konkretnego miejsca w wyszukiwarce — pokazujemy, jakie prace SEO wykonujemy i jak mierzymy postępy.",
    href: "/seo/pozycjonowanie-wroclaw",
    link: "Pozycjonowanie stron — Wrocław",
  },
  {
    title: "Nowa strona czy przebudowa — jak nie stracić efektów pozycjonowania?",
    text: "Jeśli masz już serwis, zaczynamy od przeglądu treści, ruchu i zapytań. Sprawdzamy, które podstrony są odwiedzane i mają linki z innych witryn, żeby nie stracić ich przy zmianie adresów. Czasem lepiej poprawić strukturę i treść niż budować wszystko od nowa. Przed decyzją możemy wykonać audyt SEO, który pokaże problemy techniczne i miejsca do poprawy.",
    href: "/seo/audyt",
    link: "Audyt SEO obecnej strony",
  },
  {
    title: "Stworzenie strony internetowej — od czego zależy cena?",
    text: "Cena strony internetowej zależy od liczby podstron, ilości treści, projektu graficznego i potrzebnych funkcji. Koszt wykonania strony rośnie przy integracjach, wersjach językowych, sklepie lub rezerwacjach. Osobno rozpisujemy koszty utrzymania strony internetowej: domenę, hosting, licencje i opiekę techniczną. Porównując oferty, sprawdź liczbę rund poprawek, prawa do projektu i to, kto po publikacji jest właścicielem dostępów. Dokładna wycena powstaje po briefie.",
    href: "/cennik-stron-internetowych",
    link: "Jak wyceniamy strony internetowe",
  },
  {
    title: "Ile trwa realizacja strony?",
    text: "Czas realizacji zależy od zakresu oraz tempa przekazywania materiałów i decyzji. Prosta wizytówka ma mniej etapów niż serwis z blogiem, wersją językową czy sklepem. Harmonogram rozpisujemy po briefie. Przy pracy zdalnej szczególnie ważne jest, aby po stronie firmy była jedna osoba, która zbiera uwagi i zatwierdza etapy — to najlepiej skraca cały projekt.",
  },
  {
    title: "Agencja interaktywna — projektowanie stron i sklepów internetowych",
    text: "FOTZ Studio to agencja interaktywna, która łączy projektowanie i tworzenie stron z fotografią, wideo, SEO i kampaniami reklamowymi. Budujemy strony tak, aby kolejne działania marketingowe — reklamy, social media czy pozycjonowanie — miały dokąd kierować ruch. Przy wyborze wykonawcy warto zapytać, kto przygotuje projekt, treści i wdrożenie, ile rund poprawek obejmuje oferta i czego zlecenie nie obejmuje. Budowa stron internetowych to dla nas część większej obecności firmy w internecie, a nie pojedynczy produkt.",
  },
  {
    title: "Tworzenie strony — co przygotować przed rozmową",
    text: "Nie musisz mieć gotowych tekstów. Wystarczy kilka informacji, które przyspieszą wycenę.",
    points: [
      "adres obecnej witryny lub profilu firmy",
      "listę usług lub produktów i najczęstsze pytania klientów",
      "logo, zdjęcia i materiały do wykorzystania",
      "przykłady stron, które Ci się podobają, oraz planowany termin startu",
    ],
  },
  {
    title: "Opieka i rozwój strony po publikacji",
    text: "Po uruchomieniu serwis wymaga aktualizacji, kopii zapasowych i reakcji na zgłoszenia. Zakres opieki ustalamy przed publikacją, żeby było jasne, co obejmuje abonament, a co jest osobnym zleceniem. Plan rozwoju strony zakłada, że łatwo dodasz nowe usługi, podstrony lub integracje. Po starcie warto śledzić dane z Google Search Console i analityki — na ich podstawie proponujemy kolejne zmiany Twojej strony internetowej.",
  },
];

const wroclawOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const work = [
  { name: "Enea Stadion Poznań", text: "Strona prezentująca stadion, jego przestrzenie i ofertę dla organizatorów wydarzeń.", image: eneaStadion, path: "/realizacje/enea-stadion" },
  { name: "FPS Poznań (Cegielski)", text: "Strona internetowa i identyfikacja wizualna dla fabryki pojazdów szynowych.", image: fpsCegielski, path: "/realizacje/fps-cegielski" },
  { name: "KLAGEM", text: "Strona i konfigurator mebli 3D z doborem modułów, wymiarów i kolorów.", image: klagem, path: "/realizacje/klagem" },
];

const faqs = [
  { question: "Czy macie biuro we Wrocławiu?", answer: "Nie. Zespół FOTZ Studio pracuje w Poznaniu, a firmy z Wrocławia obsługujemy zdalnie: spotkania online, materiały przesyłane cyfrowo i akceptacje etapów na piśmie." },
  { question: "Ile kosztuje strona internetowa we Wrocławiu?", answer: "Cena zależy od liczby podstron, treści, funkcji i integracji. Po briefie przygotowujemy wycenę z rozpisanym zakresem, harmonogramem i kosztami cyklicznymi, takimi jak domena i hosting." },
  { question: "Czy przyjedziecie na zdjęcia lub nagrania?", answer: "Wyjazd na sesję zdjęciową lub nagrania we Wrocławiu ustalamy osobno — zależy od zakresu i terminu. Projekt strony możemy też oprzeć na materiałach, które firma już posiada." },
  { question: "Jak długo trwa stworzenie strony internetowej?", answer: "Termin zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji. Harmonogram etapów potwierdzamy po briefie." },
  { question: "Czy strona będzie dostosowana do telefonów i wyszukiwarek?", answer: "Tak, projektujemy widoki mobilne i wdrażamy techniczne podstawy SEO. Sama publikacja nie zapewnia jednak określonej pozycji w Google." },
  { question: "Czy przygotujecie wersję angielską lub niemiecką?", answer: "Tak, wersje językowe planujemy w strukturze strony. Tłumaczenia może dostarczyć firma albo ustalamy ich przygotowanie w wycenie." },
];

export default function StronyInternetoweWroclaw() {
  return (
    <Layout>
      <SEOHead
        title="Strony internetowe Wrocław – strona www dla firm"
        description="Strony internetowe dla firm z Wrocławia: strona www, landing page, sklep i podstawy SEO. Współpraca zdalna z zespołem FOTZ Studio i jasna wycena."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/wroclaw"
      />
      <ServiceSchema name="Tworzenie stron internetowych dla firm z Wrocławia" description="Projektowanie i wdrożenie stron firmowych, landing page'y oraz sklepów internetowych — współpraca zdalna." areaServed="Wrocław" />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Wrocław", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/wroclaw" }]} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
        <p className="dv-eyebrow mb-5">FOTZ Studio · współpraca zdalna z Wrocławiem</p>
        <h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Wrocław — projektowanie i tworzenie stron internetowych we Wrocławiu</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-7">
          Projektujemy strony firmowe, landing page i sklepy dla firm z Wrocławia — strony, które działają na telefonie, jasno opisują ofertę i ułatwiają kontakt. Całą współpracę prowadzimy zdalnie — od briefu, przez projekt i wdrożenie, po publikację.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz projekt do wyceny</Link>
          <a className="dv-btn dv-btn-secondary" href="tel:+48790814814">+48 790 814 814</a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-5">Profesjonalne strony www dla firm z Wrocławia — zakres współpracy</h2>
        <p className="text-muted-foreground leading-relaxed max-w-4xl mb-7">
          Projekt strony internetowej i budowę serwisu przygotowujemy dla firm usługowych, produkcyjnych, technologicznych, gabinetów i lokali gastronomicznych. Zakres obejmuje plan treści, projekt, wdrożenie i publikację, a w razie potrzeby także zdjęcia, wideo i kampanie. Wybierz wariant najbliższy Twoim potrzebom — szczegóły ustalimy na rozmowie online.
        </p>
        <QuoteOptions options={wroclawOptions} note="Zakres, cenę i harmonogram ustalamy po poznaniu projektu. Domenę, hosting, licencje i dalszą opiekę rozpisujemy w wycenie." />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-3">Realizacje — portfolio stron internetowych FOTZ Studio</h2>
        <p className="text-muted-foreground mb-7">Projekty zrealizowane dla firm z Wielkopolski — pokazują, jak pracujemy nad strukturą, treścią i wdrożeniem.</p>
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
        <h2 className="text-3xl font-heading mb-7">Strony internetowe Wrocław — pytania klientów</h2>
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
