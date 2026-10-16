import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja-web.webp";
import victoryCarsImg from "@/assets/portfolio/victory-cars-web.webp";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new-web.webp";

const sections = [
  {
    title: "Tworzenie stron www Białystok — dla jakiej firmy i branży?",
    text: "Piszą do nas firmy z Białegostoku i okolic: usługodawcy, producenci, sklepy, spółki B2B i branża IT. Jedna potrzebuje wizytówki, druga rozbudowanej witryny, trzecia sprzedaży online. Zanim zaczniemy projektować, poznajemy specyfikę branży i wymagania klientów. Białystok obsługujemy zdalnie z Poznania — bez biura na miejscu.",
  },
  {
    title: "Jaka powinna być strona internetowa Twojej firmy?",
    text: "Profesjonalny wygląd to za mało. Dobrze wykonana strona mówi, co oferujesz, komu i na jakich warunkach, i pomaga pozyskiwać zapytania. Strona www przestała być tylko wizytówką każdej firmy. Każda podstrona prowadzi do jednego działania: telefonu, formularza albo zamówienia. Responsywny układ sprawdzamy na urządzenia mobilne o różnych szerokościach, a polityka prywatności i zgody cookies są częścią wdrożenia.",
  },
  {
    title: "Projektowanie stron internetowych w Białymstoku — etapy i wdrożenie",
    text: "Zaczynamy od briefu: cel, odbiorcy, materiały i termin. Układamy strukturę podstron, potem projektujemy widoki na telefon i komputer. Po akceptacji wdrażamy uzgodnione funkcje, integracje i testy. Przed publikacją sprawdzamy linki, metadane i Google Analytics. Czas realizacji zależy od zakresu i gotowości tekstów — harmonogram potwierdzamy po briefie.",
  },
  {
    title: "CMS i aktualizacja Twojej strony",
    text: "Panel CMS dobieramy tak, aby admin w firmie mógł samodzielnie wprowadzić aktualizację oferty lub wpisu. Personalizacja wyglądu wynika z marki, a nie z gotowego szablonu. Planując rozwój własnej strony, ustalamy, co zmienisz sam, a co wymaga pracy wykonawcy.",
  },
  {
    title: "Strona firmowa, landing czy sklep internetowy?",
    text: "Wizytówka wystarczy przy krótkiej prezentacji. Strona firmowa mieści usługi, realizacje i odpowiedzi na pytania. Landing skupia się na jednej ofercie, np. pod kampanię reklamową. Sklep wymaga katalogu, płatności i dostawy — koszt i termin wyceniamy osobno.",
    href: "/uslugi/sklepy-internetowe",
    link: "Sklepy internetowe — zakres usługi",
  },
  {
    title: "Wyszukiwarka, SEO i reklama w Google",
    text: "Podstawy SEO planujemy przy strukturze: adresy, nagłówki, tytuły i linkowanie. Pozycjonowanie stron to osobny, ciągły zakres — nie gwarantujemy miejsca w wynikach. Kampania Google Ads powinna prowadzić do właściwej podstrony, co ułatwia konwersję.",
    href: "/uslugi/pozycjonowanie/bialystok",
    link: "Usługi pozycjonowania — Białystok",
  },
  {
    title: "Modernizacja istniejącej strony",
    text: "Nie zawsze trzeba zaczynać od zera. Przegląd istniejącej strony pokazuje, które treści i adresy zachować. Przy migracji przygotowujemy przekierowania, a optymalizacja obejmuje m.in. grafiki i formularze.",
    href: "/seo/audyt",
    link: "Audyt SEO obecnej witryny",
  },
  {
    title: "Ile kosztuje strona www w Białymstoku?",
    text: "Nie podajemy jednego przedziału cenowego — cena zależy od podstron, treści, funkcji i integracji. Kompleksowy kosztorys oddziela wykonanie od domeny, hostingu i opieki technicznej.",
    href: "/cennik-stron-internetowych",
    link: "Jak wyceniamy strony internetowe",
  },
  {
    title: "Jak wybrać agencję do tworzenia stron internetowych?",
    text: "Zapytaj, kto przygotuje projekt, treści i wdrożenie oraz kto zachowa dostęp do domeny. Sprawdź case z portfolio. Agencja reklamowa czy agencja interaktywna powinna rozpisać zadania, a nie obiecywać konkurencyjność na rynku bez pracy nad ofertą.",
  },
];

const bialystokOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const faqs = [
  { question: "Ile trwa wykonanie strony internetowej?", answer: "Termin zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji. Harmonogram etapów potwierdzamy po briefie." },
  { question: "Czy musimy spotkać się w Białymstoku?", answer: "Nie. Projekt prowadzimy zdalnie z Poznania — rozmowy, przekazanie materiałów i akceptacje odbywają się online." },
  { question: "Czy po uruchomieniu zapewniacie obsługę strony?", answer: "Zakres opieki, kopii zapasowych i aktualizacji ustalamy w ofercie. Nie jest on automatycznie zawarty w każdej cenie." },
  { question: "Czy strona będzie łatwa w obsłudze?", answer: "Dobieramy CMS do sposobu edycji treści i przekazujemy instrukcję w uzgodnionym zakresie. Niestandardowe zmiany układu mogą wymagać pracy wykonawcy." },
];

export default function StronyInternetoweBialystok() {
  return (
    <Layout>
      <SEOHead
        title="Strony internetowe Białystok — strona www, tworzenie stron"
        description="Strony internetowe Białystok: tworzenie stron internetowych, strona www i sklep. Projektujemy zdalnie, podstawy pozycjonowania w zakresie. Wycena po briefie."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/bialystok"
      />
      <ServiceSchema name="Strony internetowe dla firm z Białegostoku" description="Projektowanie i tworzenie stron firmowych, landing page i sklepów internetowych." areaServed="Białystok" />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Białystok", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/bialystok" }]} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
        <p className="dv-eyebrow mb-5">FOTZ Studio · współpraca zdalna</p>
        <h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Białystok — tworzenie stron www i projektowanie stron</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-7">Projektujemy i wdrażamy strony dla firm z Białegostoku i okolic: od wizytówki po sklep. Strona internetowa z CMS buduje obecność online i ułatwia kontakt potencjalnych klientów.</p>
        <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz stronę do wyceny</Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Projektowanie i tworzenie stron internetowych — warianty</h2>
        <QuoteOptions options={bialystokOptions} note="Zakres, cenę i harmonogram ustalamy po poznaniu projektu. Domenę, hosting i dalszą opiekę rozpisujemy w wycenie." />
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {sections.map((item) => (
          <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border">
            <h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2>
            <div>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              {item.href && <Link to={item.href} className="inline-block underline underline-offset-4 mt-5">{item.link}</Link>}
            </div>
          </section>
        ))}
      </div>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Realizacja — przykłady stron</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: "Apartamenty Chorwacja", text: "Strona z ofertą noclegów", image: apartamentyImg, path: "/realizacje/apartamenty-chorwacja" },
            { name: "Victory Cars", text: "Prezentacja oferty motoryzacyjnej", image: victoryCarsImg, path: "/realizacje/victory-cars" },
            { name: "Cute as a Dumpling", text: "Sklep z ręcznie robionymi dekoracjami", image: cuteDumplingImg, path: "/realizacje/cute-dumpling" },
          ].map((x) => (
            <Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden">
              <img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5"><h3 className="text-xl mb-2">{x.name}</h3><p className="text-muted-foreground">{x.text}</p></div>
            </Link>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground">To przykłady naszych projektów, nie lista klientów z Białegostoku. Więcej o zakresie: <Link className="underline" to="/uslugi/strony-internetowe-dla-firm">strony internetowe dla firm</Link>.</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Strony internetowe Białystok — pytania</h2>
        {faqs.map((f) => (
          <details key={f.question} className="py-5 border-b border-border">
            <summary className="font-medium cursor-pointer">{f.question}</summary>
            <p className="mt-4 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o swój projekt</Link>
          <Link className="dv-btn dv-btn-secondary" to="/kontakt">Kontakt</Link>
        </div>
      </section>
    </Layout>
  );
}
