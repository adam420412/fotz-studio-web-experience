import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import apartamentyImg from "@/assets/portfolio/apartamenty-chorwacja-web.webp";
import victoryCarsImg from "@/assets/portfolio/victory-cars-web.webp";
import cuteDumplingImg from "@/assets/portfolio/cute-dumpling-new-web.webp";

type Section = { title: string; text: string; links?: { href: string; label: string }[] };

const sections: Section[] = [
  {
    title: "Profesjonalne strony WWW Szczecin dla Twojej firmy",
    text: "Tworzymy serwisy dla firm działających lokalnie i marek sprzedających w całej Polsce. Firma obsługująca klientów z Niemiec może potrzebować wersji językowej. Ustalamy, co ma zrobić osoba, która trafi na witrynę. To pierwszy cyfrowy kontakt z marką, więc układ dopasowujemy do Twojego biznesu.",
  },
  {
    title: "Wizytówka, strona firmowa czy sklep internetowy?",
    text: "Wizytówka wystarczy, gdy klient ma szybko sprawdzić ofertę i kontakt. Strona www z podstronami pozwala opisać usługi i pokazać realizacje. Sklep wymaga katalogu, płatności i dostawy. Serwis internetowy można rozbudowywać etapami.",
    links: [{ href: "/uslugi/sklepy-internetowe", label: "Sklepy internetowe — zakres usługi" }],
  },
  {
    title: "UX i widok mobilny — techniczny standard",
    text: "Dobry design ma ułatwiać wybór. Projektujemy widok na telefon i komputer, sprawdzamy przyciski, czytelność i formularze. Optymalizacja zdjęć pomaga skrócić czas ładowania strony. Nie wybieramy narzędzi tylko dlatego, że to najnowsze technologie. Konwersja zależy też od oferty i strategii pozyskiwania nowych klientów, a rozwój biznesu online od szybkiej odpowiedzi na zapytania.",
  },
  {
    title: "System CMS i samodzielna edycja",
    text: "Budujemy strony internetowe w oparciu o technologię dobraną do sposobu aktualizacji. Do regularnych zmian przygotowujemy panel edycji, na przykład w WordPressie. Niestandardowe funkcje, jak konfigurator produktu, wymagają pracy web developerów. W wycenie opisujemy, co zmienisz samodzielnie.",
    links: [{ href: "/realizacje/klagem", label: "KLAGEM — strona i konfigurator mebli 3D" }],
  },
  {
    title: "SEO i widoczność — zakres pozycjonowania",
    text: "Podstawy pod wyszukiwarkę wdrażamy przy budowie: adresy, tytuły, nagłówki, linkowanie i adres kanoniczny. To techniczny fundament, ale sam nie zapewnia widoczności. Działania z zakresu SEO, w tym wizytówka Google, to osobna usługa. Przy pozycjonowaniu stron internetowych w Szczecinie liczy się aktualna oferta i czas na ocenę zmian. Nie obiecujemy konkretnego miejsca w wynikach.",
    links: [
      { href: "/uslugi/pozycjonowanie/szczecin", label: "Pozycjonowanie dla firm ze Szczecina" },
      { href: "/seo/audyt", label: "Audyt istniejącej strony" },
    ],
  },
  {
    title: "Ile kosztuje strona internetowa?",
    text: "Cena zależy od liczby podstron, treści i funkcji. Osobno rozpisujemy domenę, hosting i opiekę. Porównując oferty stron www w Szczecinie, zapytaj o poprawki i przekazanie dostępów. Kompleksowy zakres oznacza jasno opisane zadania.",
    links: [{ href: "/cennik-stron-internetowych", label: "Jak wyceniamy strony" }],
  },
  {
    title: "Jak wybrać agencję?",
    text: "Przy wyborze firmy do projektowania stron internetowych w Szczecinie sprawdź portfolio i zapytaj, co przygotował wykonawca. Profesjonalna agencja pokazuje etapy akceptacji. Przy projektowaniu stron www łączymy wiedzę z zakresu UX z produkcją zdjęć i filmów.",
  },
  {
    title: "Tworzenie stron internetowych Szczecin — współpraca zdalna",
    text: "Nie mamy biura w Szczecinie. Projekt prowadzimy z Poznania, a rozmowy i akceptacje odbywają się online. Profesjonalne strony internetowe dla firm ze Szczecina czy Polic powstają w tym samym procesie.",
  },
];

const steps = [
  { title: "1. Brief i cele biznesowe", text: "Zapisujemy cele biznesowe, odbiorców i materiały do przygotowania." },
  { title: "2. Projekt i treść", text: "Projektujemy ścieżkę i wygląd w podejściu UCD (user-centered design). Akceptujesz układ przed wdrożeniem." },
  { title: "3. Wdrożenie i testy", text: "Sprawdzamy widoki, formularze i kod według wytycznych W3C. Przekazujemy dostępy." },
];

const projects = [
  { name: "Cute as a Dumpling", text: "Sklep z ręcznie robionymi dekoracjami", image: cuteDumplingImg, path: "/realizacje/cute-dumpling" },
  { name: "Victory Cars", text: "Prezentacja oferty motoryzacyjnej", image: victoryCarsImg, path: "/realizacje/victory-cars" },
  { name: "Apartamenty Chorwacja", text: "Strona z ofertą apartamentów", image: apartamentyImg, path: "/realizacje/apartamenty-chorwacja" },
];

const szczecinOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const faqs = [
  { question: "Czy musimy spotkać się w Szczecinie?", answer: "Nie. Pracujemy zdalnie z Poznania. Spotkanie na miejscu jest możliwe po uzgodnieniu terminu i kosztów dojazdu." },
  { question: "Ile trwa proces tworzenia stron internetowych?", answer: "Termin zależy od zakresu i gotowości materiałów. Harmonogram potwierdzamy po briefie." },
  { question: "Czy samodzielnie zmienię treść strony?", answer: "Tak, jeśli uzgodnimy panel edycji. W ofercie zapisujemy, które elementy zmienisz sam." },
    { question: "Czy nowa strona gwarantuje pozycję w Google?", answer: "Nie. Przygotowujemy stronę do indeksowania, ale pozycja zależy od konkurencji i dalszej pracy." },
];

export default function StronyInternetoweSzczecin() {
  return (
    <Layout>
      <SEOHead
        title="Strony internetowe Szczecin — projektowanie, strona www"
        description="Szczecin: projektowanie stron internetowych, sklep internetowy i pozycjonowanie stron internetowych w Szczecinie. Kompleksowy zakres, agencja FOTZ."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/szczecin"
      />
      <ServiceSchema name="Strony internetowe dla firm ze Szczecina" description="Projektowanie i wdrożenie stron firmowych oraz sklepów internetowych." areaServed="Szczecin" />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Szczecin", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/szczecin" }]} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
        <p className="dv-eyebrow mb-5">FOTZ Studio · współpraca zdalna z Poznania</p>
        <h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Szczecin — projektowanie stron WWW i SEO</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-7">Projektujemy i wdrażamy strony firmowe, landing page oraz sklepy dla firm ze Szczecina i regionu.</p>
        <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz projekt do wyceny</Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Sklepy internetowe Szczecin i strony WWW — zakres</h2>
        <QuoteOptions options={szczecinOptions} note="Cenę i harmonogram ustalamy po briefie. Domenę, hosting i dalszą opiekę rozpisujemy osobno." />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Przykłady naszych projektów</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((x) => (
            <Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden">
              <img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5"><h3 className="text-xl mb-2">{x.name}</h3><p className="text-muted-foreground">{x.text}</p></div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-5">To przykłady naszej pracy, nie lista klientów ze Szczecina.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Tworzenie stron www — jak pracujemy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((x) => (
            <article key={x.title}><h3 className="text-xl mb-3">{x.title}</h3><p className="text-muted-foreground leading-relaxed">{x.text}</p></article>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {sections.map((item) => (
          <section key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-b border-border">
            <h2 className="text-2xl md:text-3xl font-heading">{item.title}</h2>
            <div>
              <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              {item.links && (
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {item.links.map((l) => <Link key={l.href} to={l.href} className="underline underline-offset-4">{l.label}</Link>)}
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Najczęstsze pytania</h2>
        {faqs.map((f) => (
          <details key={f.question} className="py-5 border-b border-border">
            <summary className="font-medium cursor-pointer">{f.question}</summary>
            <p className="mt-4 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o swój projekt</Link>
          <Link className="dv-btn dv-btn-secondary" to="/uslugi/strony-internetowe-dla-firm">Oferta stron internetowych dla firm</Link>
        </div>
      </section>
    </Layout>
  );
}
