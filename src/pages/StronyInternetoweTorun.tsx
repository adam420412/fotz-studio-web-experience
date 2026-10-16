import { enquiryHref } from "@/lib/enquiry.mjs";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { QuoteOptions, websiteOptions } from "@/components/QuoteOptions";
import mechanica from "@/assets/portfolio/mechanica-web.webp";
import celsjusz from "@/assets/portfolio/celsjusz-web.webp";

const sections = [
  {
    title: "Tworzenie stron internetowych Toruń — dla kogo?",
    text: "Piszą do nas firmy z Torunia i okolic, które chcą mieć stronę internetową po raz pierwszy albo uporządkować witrynę, która przestała pasować do oferty. Inaczej projektujemy stronę dla gabinetu przyjmującego mieszkańców Torunia na miejscu, inaczej dla wykonawcy dojeżdżającego do klientów w województwie kujawsko-pomorskim, a jeszcze inaczej dla producenta, który szuka nowych klientów w całej Polsce. Ustalamy, jakie pytania zadają klienci przed kontaktem i jaki krok ma wykonać osoba odwiedzająca serwis. FOTZ Studio pracuje w Poznaniu i obsługuje klientów z Torunia zdalnie — nie mamy biura w Toruniu.",
  },
  {
    title: "Strona internetowa, wizytówka czy sprzedaż online?",
    text: "Wizytówka wystarczy, gdy potrzebujesz krótkiej prezentacji i danych kontaktowych. Serwis firmowy daje miejsce na osobne podstrony usług, realizacje i odpowiedzi na pytania. Landing page skupia się na jednej ofercie, np. z kampanii. Jeśli chcesz sprzedawać online, sklepy internetowe Toruń czy inne miasto nie zmieniają zasad: potrzebny jest katalog, warianty, płatności, dostawa i obsługa zamówień. Ten zakres omawiamy osobno.",
    href: "/uslugi/sklepy-internetowe",
    link: "Sklepy internetowe — zakres usługi",
  },
  {
    title: "Projektowanie stron www Toruń — treści i grafika",
    text: "Projekt strony internetowej zaczynamy od struktury: listy podstron, kolejności sekcji i miejsc na formularz oraz telefon. Ustalamy, które teksty i zdjęcia dostarczasz, a co przygotujemy my — możemy też zrealizować sesję zdjęciową. Projekt graficzny dopasowujemy do marki zgodnie z zasadami UX. Przed wdrożeniem akceptujesz układ, a liczbę rund poprawek zapisujemy w ofercie.",
  },
  {
    title: "Responsywny i mobilny projekt strony www",
    text: "Każda witryna powstaje w wersji na telefon i komputer. Sprawdzamy czytelność tekstu, przyciski i menu na urządzeniach mobilnych zgodnie z technologią RWD. Optymalizujemy obrazy. Na szybkość wpływa też hosting, dlatego przed startem ustalamy, kto odpowiada za serwer i certyfikat SSL.",
  },
  {
    title: "CMS WordPress i intuicyjny panel",
    text: "Technologię dobieramy do potrzeb. Jeśli chcesz samodzielnie aktualizować treść swojej strony internetowej, proponujemy CMS WordPress z intuicyjnym panelem. Przy niestandardowej funkcjonalności rozważamy rozwiązanie dedykowane. W wycenie określamy, co zmienisz w panelu, a co wymaga pracy programisty.",
  },
  {
    title: "SEO i przygotowanie do pozycjonowania — widoczność w Google",
    text: "Przygotowanie pod wyszukiwarkę planujemy razem ze strukturą: adresy, tytuły, nagłówki, linkowanie wewnętrzne i adres kanoniczny. Słowa kluczowe dobieramy do rzeczywistej oferty. Takie podstawy ułatwiają pozycjonowanie stron, ale sama publikacja nie gwarantuje miejsca w wynikach wyszukiwania. Regularne pozycjonowanie dla klientów z Torunia to osobny zakres usług.",
    href: "/uslugi/pozycjonowanie/torun",
    link: "Pozycjonowanie dla firm z Torunia",
  },
  {
    title: "Stworzenie strony od nowa czy przebudowa witryny?",
    text: "Jeśli masz już stronę, sprawdzamy podstrony, które mają ruch lub linki. Nie każda poprawa wymaga budowy od zera. Przy zmianie adresów przygotowujemy przekierowania, a po publikacji kontrolujemy indeksowanie. To ogranicza ryzyko utraty widoczności, choć nie daje gwarancji.",
    href: "/seo/audyt",
    link: "Audyt istniejącej strony",
  },
  {
    title: "Koszt stron i sklepów — od czego zależy?",
    text: "Cena zależy od liczby podstron, treści, projektu, funkcji i integracji. W ofercie oddzielamy wykonanie od kosztów cyklicznych: domeny, hostingu, licencji i opieki technicznej. Zakres wsparcia po publikacji ustalamy przed startem — nie jest automatycznie zawarty w każdej cenie.",
    href: "/cennik-stron-internetowych",
    link: "Jak wyceniamy strony",
  },
  {
    title: "Agencja czy freelancer — kogo warto wybrać?",
    text: "Przejrzyj portfolio i zapytaj, co dokładnie przygotował wykonawca. Kreatory stron wystarczą przy prostej wizytówce, ale rozbudowana oferta wymaga planu treści i kontroli technicznej. Profil w social media nie zastąpi strony, na której klient znajdzie niezbędne informacje. Porównaj komunikację, punkty akceptacji i warunki współpracy.",
  },
];

const steps = [
  { title: "1. Brief i cele", text: "Zbieramy informacje o usługach, odbiorcach i obszarze działania Twojej firmy z Torunia. Ustalamy termin, budżet i osobę decyzyjną." },
  { title: "2. Projekt i wdrożenie", text: "Układamy ścieżkę użytkownika, przygotowujemy projekt, treści i funkcje, a technologię dobieramy do sposobu aktualizacji." },
  { title: "3. Testy i publikacja", text: "Sprawdzamy wersję mobilną, formularz, linki i metadane. Przekazujemy dostępy i instrukcję obsługi panelu." },
];

const torunOptions = websiteOptions.map((option, index) => ({ ...option, href: enquiryHref("web", index === 2 ? "shop" : "website") }));

const faqs = [
  { question: "Czy pracujecie z firmami z Torunia?", answer: "Tak. Projekt prowadzimy zdalnie z Poznania — rozmowy, przekazanie materiałów i akceptacje odbywają się online. Nie mamy biura w Toruniu." },
  { question: "Ile trwa stworzenie strony internetowej?", answer: "Czas wykonania zależy od zakresu oraz gotowości tekstów, zdjęć i decyzji po stronie firmy. Harmonogram etapów potwierdzamy po briefie." },
  { question: "Czy strona będzie przygotowana pod wyszukiwarkę i telefony?", answer: "Tak, wersję mobilną i podstawy techniczne uwzględniamy w projekcie. Nie gwarantujemy jednak konkretnej pozycji w Google." },
  { question: "Czy samodzielnie zmienię treść strony?", answer: "Jeśli potrzebujesz regularnej edycji, wdrażamy CMS z intuicyjnym panelem i ustalamy zakres zmian możliwych bez programisty." },
  { question: "Czy tworzycie też sklepy internetowe?", answer: "Tak. Zakres sklepu — katalog, płatności, dostawy i obsługę zamówień — opisujemy osobno w wycenie." },
];

export default function StronyInternetoweTorun() {
  return (
    <Layout>
      <SEOHead
        title="Strony internetowe Toruń — strona www, sklep internetowy"
        description="Tworzenie stron internetowych Toruń: Twoja strona www lub sklep internetowy z CMS i podstawami SEO. Projektujemy zdalnie z Poznania. Wycena po briefie."
        canonical="https://www.fotz-studio.pl/uslugi/strony-internetowe/torun"
      />
      <ServiceSchema name="Strony internetowe dla firm z Torunia" description="Projektowanie i wdrożenie stron firmowych oraz sklepów internetowych." areaServed="Toruń" />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: "Strona główna", url: "https://www.fotz-studio.pl" }, { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" }, { name: "Toruń", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe/torun" }]} />

      <section className="max-w-6xl mx-auto px-6 pt-32 pb-14">
        <p className="dv-eyebrow mb-5">FOTZ Studio · współpraca zdalna z Poznania</p>
        <h1 className="text-4xl md:text-6xl font-heading mb-6">Strony internetowe Toruń — tworzenie stron internetowych, strona www i sklep internetowy dla Twojej firmy</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mb-7">Pomagamy zbudować obecność firmy w sieci: projektujemy i wdrażamy nowoczesne strony, które jasno przedstawiają ofertę, działają na telefonie i prowadzą do zapytania lub zakupu. Zajmujemy się strukturą, projektem, treściami i uzgodnionymi funkcjami.</p>
        <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Opisz stronę do wyceny</Link>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Strony www Toruń — warianty i wycena</h2>
        <QuoteOptions options={torunOptions} note="Zakres, cenę i harmonogram ustalamy po poznaniu projektu. Domenę, hosting, licencje i opiekę rozpisujemy osobno." />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Jak tworzymy strony www dla klientów — krok po kroku</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((x) => (
            <article key={x.title}>
              <h3 className="text-xl mb-3">{x.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{x.text}</p>
            </article>
          ))}
        </div>
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
        <h2 className="text-3xl font-heading mb-3">Strony internetowe w Toruniu i nie tylko — portfolio</h2>
        <p className="text-muted-foreground mb-7">To projekty FOTZ Studio dla firm spoza Torunia — pokazują sposób pracy, nie listę lokalnych klientów.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { name: "Mechanica", text: "Strona producenta urządzeń do transportu bliskiego", image: mechanica, path: "/realizacje/mechanica" },
            { name: "Celsjusz OZE", text: "Strona firmy z branży pomp ciepła i fotowoltaiki", image: celsjusz, path: "/realizacje/celsjusz" },
          ].map((x) => (
            <Link key={x.path} to={x.path} className="rounded-xl border border-border overflow-hidden">
              <img src={x.image} alt={x.name} loading="lazy" className="w-full aspect-video object-cover" />
              <div className="p-5">
                <h3 className="text-xl mb-2">{x.name}</h3>
                <p className="text-muted-foreground">{x.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-heading mb-7">Strona internetowa Toruń — FAQ</h2>
        {faqs.map((f) => (
          <details key={f.question} className="py-5 border-b border-border">
            <summary className="font-medium cursor-pointer">{f.question}</summary>
            <p className="mt-4 text-muted-foreground">{f.answer}</p>
          </details>
        ))}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link className="dv-btn dv-btn-primary" to={enquiryHref("web")}>Zapytaj o swój projekt</Link>
          <Link className="dv-btn dv-btn-secondary" to="/uslugi/strony-internetowe-dla-firm">Strony internetowe dla firm</Link>
        </div>
      </section>
    </Layout>
  );
}
