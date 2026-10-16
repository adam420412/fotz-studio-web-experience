import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja-web.webp";
import victoryCarsImg from "@/assets/portfolio/victory-cars-web.webp";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new-web.webp";

type Section = { title: string; text: string; points?: string[]; href?: string; link?: string };

const sections: Section[] = [
  {
    title: "Strona www dla firm z Łodzi — kto korzysta z oferty?",
    text: "Pracujemy z firmami z Łodzi i okolic, które potrzebują strony www do pozyskiwania klientów, prezentacji usług albo sprzedaży online. To mogą być gabinety, warsztaty, firmy budowlane, producenci, marki odzieżowe czy biura obsługujące klientów B2B. Każda działalność ma inny cel biznesowy i inne potrzeby klienta, dlatego tworzenie stron zaczynamy od pytania, co odwiedzający ma zrobić po wejściu: zadzwonić, wypełnić formularz, umówić wizytę czy kupić produkt. FOTZ Studio działa w Poznaniu i nie ma biura w Łodzi. Projekty dla firm z Łodzi i województwa łódzkiego prowadzimy zdalnie: rozmowy wideo, wspólny folder na materiały i akceptacje kolejnych etapów online.",
  },
  {
    title: "Wizytówka, strona firmowa czy sklep internetowy?",
    text: "Wizytówka sprawdzi się, gdy oferta jest krótka, a klient głównie szuka telefonu, adresu i godzin. Strona firmowa z osobną podstroną dla każdej usługi pomagają, gdy klienci porównują zakresy i chcą zobaczyć realizacje. Landing page przydaje się pod kampanię Google Ads lub Meta Ads, kiedy ruch trafia do jednej oferty. Sklep internetowy wymaga katalogu, wariantów, płatności, dostaw i obsługi zamówień. Strony internetowe i sklepy wyceniamy osobno, bo różnią się zakresem prac i testów. Jeśli prowadzisz sprzedaż w sieci, zobacz też sklepy internetowe dla firm.",
    href: "/uslugi/sklepy-internetowe",
    link: "Sklepy internetowe — zakres usługi",
  },
  {
    title: "Projektowanie stron internetowych: design, szablon czy projekt indywidualny?",
    text: "Projektowanie i tworzenie stron internetowych nie zaczyna się od wyboru kolorów. Zanim zaczniemy projektować, układamy listę podstron i kolejność informacji, potem przygotowujemy makietę, a dopiero na końcu projekt strony www. Design ma wspierać czytelność oferty i wizerunek firmy, nie zasłaniać treści efektami. Projektujemy na podstawie Twoich materiałów: logo, zdjęć, opisów usług. Jeśli ich brakuje, możemy wycenić teksty, sesję zdjęciową lub film. Gotowy szablon bywa rozsądnym kompromisem przy małym budżecie, ale wybór szablonu strony omawiamy otwarcie, bo ogranicza późniejsze zmiany. Wygląd strony akceptujesz przed etapem wdrożenia.",
  },
  {
    title: "Responsywny projekt na smartfon i tablet",
    text: "Duża część odwiedzin firmowych stron odbywa się na telefonie, dlatego widok mobilny projektujemy równolegle z wersją na komputer. Responsywne strony internetowe testujemy na smartfonie, tablecie i innych urządzeniach mobilnych: czy menu jest wygodne, przyciski łatwe do kliknięcia, a formularz krótki. Optymalizujemy obrazy i ograniczamy zbędne skrypty, bo szybkość ładowania wpływa na to, czy ktoś doczyta ofertę. Wynik zależy też od hostingu i narzędzi dodanych później, dlatego ustalamy, kto odpowiada za ich dobór.",
  },
  {
    title: "WordPress, CMS i interaktywny konfigurator",
    text: "Technologię dobieramy do sposobu, w jaki będziesz zarządzać treścią. WordPress jest dobrym wyborem, gdy chcesz samodzielnie dodawać wpisy, realizacje i zmieniać cennik. Przy sprzedaży można rozważyć WooCommerce. Rozwiązanie dedykowane ma sens przy nietypowych funkcjach, na przykład konfiguratorze produktu. W ofercie opisujemy, co zmienisz w panelu, a co wymaga pracy programisty. Narzędzia AI przy tworzeniu stron www wykorzystujemy pomocniczo, na przykład przy porządkowaniu materiałów, ale treść i projekt zawsze sprawdza człowiek.",
    href: "/realizacje/klagem",
    link: "KLAGEM — strona z konfiguratorem mebli 3D",
  },
  {
    title: "SEO, widoczność w Google i pozycjonowanie w Łodzi",
    text: "Podstawy SEO wdrażamy razem ze stroną: strukturę adresów, tytuły, opisy, nagłówki, linkowanie wewnętrzne i poprawny adres kanoniczny. Frazy dobieramy do rzeczywistej oferty, a nie do listy słów wpisanych na siłę. Gotowa witryna to punkt wyjścia, ale stała widoczność w Google wymaga osobnej pracy: analizy konkurencji, rozbudowy treści i poprawek technicznych. Zakres pozycjonowania dla klientów z Łodzi rozpisujemy jako oddzielną usługę. Nie gwarantujemy konkretnej pozycji w wynikach wyszukiwania.",
    href: "/seo/pozycjonowanie-lodz",
    link: "Pozycjonowanie dla firm z Łodzi",
  },
  {
    title: "Marketing, Ads i sprzedaż — jak strona pomaga pozyskiwać klientów?",
    text: "Strona internetowa jako narzędzie marketingowe łączy różne kanały: wyszukiwarkę, kampanie Google Ads, social media i polecenia. Żeby pomagała zdobywać nowych klientów, musi odpowiadać na pytania potencjalnych klientów zadawane przed zakupem: co obejmuje usługa, ile trwa, od czego zależy cena, jak wygląda kontakt. Konfigurujemy formularz, kliknięcia w telefon i podstawową analitykę, tak aby było widać, skąd przychodzą zapytania. Sama witryna nie zastąpi szybkiej odpowiedzi na wiadomość — o tym też rozmawiamy przy planowaniu.",
  },
  {
    title: "Gdy strona internetowa już istnieje — przebudowa",
    text: "Jeśli masz już stronę, zaczynamy od przeglądu: które podstrony mają ruch, które adresy mają linki zewnętrzne, jakie funkcje są potrzebne. Przy zmianie adresów przygotowujemy przekierowania, a po publikacji kontrolujemy indeksowanie. Czasem wystarczy przebudować kilka kluczowych podstron zamiast całego serwisu. Przed decyzją możesz zamówić audyt SEO obecnej strony.",
    href: "/seo/audyt",
    link: "Audyt SEO istniejącej strony",
  },
  {
    title: "Tanie strony internetowe Łódź — od czego zależy cena?",
    text: "Nie publikujemy jednej stawki, bo koszt wykonania strony zależy od liczby podstron, treści, funkcji, integracji i wersji językowych. Wycena oddziela wykonanie od kosztów stałych: domena i hosting, licencje, opieka techniczna. Hasła o konkurencyjnych cenach niewiele mówią bez zakresu — porównując oferty, sprawdź liczbę poprawek, prawa do projektu, przekazanie dostępów i zasady aktualizacji. Możemy zacząć od mniejszego zakresu i rozbudowywać stronę etapami.",
    href: "/cennik-stron-internetowych",
    link: "Jak wyceniamy strony internetowe",
  },
  {
    title: "Agencja interaktywna czy freelancer — opinie klientów i portfolio",
    text: "Agencja, software house czy freelancer — każdy model ma zalety. Zapytaj, kto przygotuje treść, kto projekt, a kto wdrożenie, i poproś o portfolio z opisem udziału wykonawcy. Opinie są przydatne, jeśli dotyczą podobnego zakresu. Profesjonalny wykonawca i profesjonalne strony internetowe powstają w procesie z punktami akceptacji, harmonogramem i listą odbiorową. Nasze realizacje stron internetowych pokazujemy niżej; to przykłady projektów, a nie klienci z Łodzi.",
    points: [
      "Czy wykonawca zadaje pytania o cel i odbiorców?",
      "Czy wiadomo, kto dostarcza teksty i zdjęcia?",
      "Czy oferta opisuje opiekę po publikacji?",
    ],
  },
  {
    title: "Opieka online i rozwój Twojej strony",
    text: "Po starcie strona wymaga regularnej aktualizacji oprogramowania, kopii zapasowych i drobnych zmian w treści. Zakres opieki ustalamy osobno — możesz zarządzać stroną samodzielnie albo zlecać prace według potrzeb. Rozwój strony planujemy na podstawie danych: pytań klientów, źródeł ruchu i tego, jak odwiedzający korzystają z Twojej strony na telefonie.",
  },
];

const lodzOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const projects = [
  { name: "Apartamenty Chorwacja", text: "Strona prezentująca obiekty noclegowe", image: apartamentyImg, path: "/realizacje/apartamenty-chorwacja" },
  { name: "Victory Cars", text: "Prezentacja oferty motoryzacyjnej", image: victoryCarsImg, path: "/realizacje/victory-cars" },
  { name: "Cute as a Dumpling", text: "Sklep z ręcznie robionymi produktami", image: cuteDumplingImg, path: "/realizacje/cute-dumpling" },
];

const steps = [
  { title: "1. Rozmowa i brief", text: "Poznajemy ofertę, odbiorców i obszar działania — czy obsługujesz tylko Łódź, czy całą Polskę. Ustalamy cel strony i potrzebne materiały." },
  { title: "2. Projekt i wdrożenie", text: "Przygotowujemy strukturę, makietę i projekt graficzny, a po akceptacji programujemy stronę i podpinamy formularze oraz analitykę." },
  { title: "3. Testy i publikacja", text: "Sprawdzamy widoki mobilne, linki, formularze i metadane. Przekazujemy dostępy oraz instrukcję edycji w uzgodnionym zakresie." },
];

const faqs = [
  { question: "Ile kosztuje strona internetowa dla firmy z Łodzi?", answer: "Cena zależy od liczby podstron, treści, funkcji i integracji. Po krótkim opisie projektu przygotowujemy wycenę z rozpisanym zakresem i harmonogramem." },
  { question: "Jak długo trwa stworzenie strony?", answer: "Termin zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji po Twojej stronie. Harmonogram etapów potwierdzamy po briefie." },
  { question: "Czy realizujecie projekty dla firm z Łodzi zdalnie?", answer: "Tak. Zespół FOTZ Studio pracuje w Poznaniu i nie ma biura w Łodzi. Rozmowy, przekazanie materiałów i akceptacje prowadzimy online." },
  { question: "Czy będę mógł samodzielnie edytować stronę?", answer: "Jeśli planujesz regularne zmiany, dobieramy CMS, np. WordPress, i opisujemy, które elementy edytujesz w panelu. Instrukcję lub szkolenie uwzględniamy w ofercie." },
  { question: "Czy strona będzie działać na smartfonach i będzie przygotowana pod SEO?", answer: "Każdy projekt obejmuje widok mobilny i podstawy techniczne SEO. Stałe pozycjonowanie jest osobną usługą i nie gwarantujemy konkretnej pozycji w Google." },
  { question: "Czy po uruchomieniu strony mogę liczyć na wsparcie techniczne?", answer: "Zakres opieki, aktualizacji i kopii zapasowych ustalamy przed publikacją. Możesz wybrać stałą opiekę albo zlecać prace według potrzeb." },
];

export default function StronyInternetoweLodz() {
  return <Layout>
    <SEOHead title="Strony internetowe Łódź — projektujemy stronę www dla firm" description="Strony internetowe Łódź i okolice: projektujemy stronę www, sklep i podstawy SEO dla firm. Współpraca zdalna z FOTZ Studio z Poznania. Opisz projekt." canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/lodz" />
    <ServiceSchema name="Strony internetowe dla firm z Łodzi" description="Projektowanie i tworzenie stron www oraz sklepów internetowych dla firm z Łodzi, prowadzone zdalnie." areaServed="Łódź" />
    <FAQSchema items={faqs} />
    <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Łódź", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/lodz" }]} />

    <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
      <p className="dv-eyebrow mb-5">FOTZ Studio · Łódź i okolice · współpraca zdalna</p>
      <h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Łódź — tworzenie stron internetowych Łódź i okolice</h1>
      <p className="text-lg text-muted-foreground max-w-3xl mb-7">Projektujemy i wdrażamy strony www, które jasno pokazują ofertę, dobrze działają na telefonie i prowadzą do kontaktu lub zakupu. Ustalamy strukturę, przygotowujemy projekt graficzny i wdrażamy nowoczesne strony internetowe z uzgodnionymi funkcjami. Tworzenie stron dla firm z Łodzi prowadzimy zdalnie, z jasnym podziałem zadań.</p>
      <div className="flex flex-wrap gap-4"><Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz projekt do wyceny</Link><Link className="dv-btn dv-btn-secondary" to="/uslugi/strony-internetowe-dla-firm">Strony internetowe dla firm</Link></div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading mb-7">Strony www Łódź i okolice — oferta i wycena</h2>
      <QuoteOptions options={lodzOptions} note="Zakres, cenę i harmonogram ustalamy po rozmowie. Domenę, hosting, licencje i opiekę po publikacji rozpisujemy w wycenie osobno." />
    </section>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading mb-7">Etapy tworzenia stron www — od briefu do publikacji</h2>
      <div className="grid md:grid-cols-3 gap-8">{steps.map(x => <article key={x.title}><h3 className="text-xl mb-3">{x.title}</h3><p className="text-muted-foreground leading-relaxed">{x.text}</p></article>)}</div>
    </section>

    <div className="max-w-6xl mx-auto px-6 py-12">{sections.map(item => <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border"><h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2><div><p className="text-muted-foreground leading-relaxed">{item.text}</p>{item.points && <ul className="list-disc pl-5 mt-4 space-y-2 text-muted-foreground">{item.points.map(point => <li key={point}>{point}</li>)}</ul>}{item.href && <Link to={item.href} className="inline-block underline underline-offset-4 mt-5">{item.link}</Link>}</div></section>)}</div>

    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading mb-7">Portfolio — przykładowe realizacje stron internetowych</h2>
      <div className="grid md:grid-cols-3 gap-6">{projects.map(x => <Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden"><img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" /><div className="p-5"><h3 className="text-xl mb-2">{x.name}</h3><p className="text-muted-foreground">{x.text}</p></div></Link>)}</div>
    </section>

    <section className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-heading mb-7">Strony internetowe Łódź — najczęstsze pytania</h2>
      {faqs.map(f => <details key={f.question} className="py-5 border-b border-border"><summary className="font-medium cursor-pointer">{f.question}</summary><p className="mt-4 text-muted-foreground">{f.answer}</p></details>)}
      <div className="mt-8 flex flex-wrap gap-4"><Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o swoją stronę</Link><Link className="dv-btn dv-btn-secondary" to="/kontakt">Kontakt</Link></div>
    </section>
  </Layout>;
}
