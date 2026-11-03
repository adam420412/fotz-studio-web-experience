import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Globe,
  Layers3,
  MessageSquare,
  MonitorSmartphone,
  Palette,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";

const seoTitle = "Strony internetowe Białystok — projektowanie | FOTZ";
const seoDescription = "Strony internetowe Białystok: projektowanie i tworzenie stron WWW, CMS, SEO, pozycjonowanie i pomiar zapytań. Sprawdź zakres prac i wycenę FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/uslugi/strony-internetowe/bialystok";
const pageTitle = "Strony internetowe Białystok";
const serviceLead = "Profesjonalna strona WWW dla firm z Białegostoku i okolic: projektowanie i tworzenie stron internetowych, wygodny CMS, techniczne SEO i mierzalne zapytania.";
const contactHref = "/kontakt?usluga=web#formularz";

const scopeItems = [
  {
    icon: Globe,
    title: "Strona firmowa i wizytówka",
    text: "Projektujemy strukturę podstron, prezentację usług i drogę do kontaktu. Strona WWW bywa wizytówką każdej firmy, ale może też być rozbudowanym serwisem B2B albo katalogiem bez sprzedaży online.",
  },
  {
    icon: Layers3,
    title: "Landing page do kampanii",
    text: "Tworzymy stronę docelową z jednym celem i czytelnym CTA. Układ treści dopasowujemy do źródła ruchu, także do reklamy Google Ads; budżet i obsługę kampanii reklamowej wyceniamy osobno.",
  },
  {
    icon: ShoppingCart,
    title: "Sklep i integracje",
    text: "Zakres może obejmować sklep internetowy, płatności i dostawy. Integracja z narzędziami firmy oraz przygotowanie kategorii i kart produktów wymagają osobnych ustaleń przed wdrożeniem.",
  },
  {
    icon: Settings2,
    title: "Modernizacja i migracja",
    text: "Możemy zaprojektować nową wersję istniejącej strony, uporządkować treści i przenieść je do nowego panelu. Przeniesienie obejmuje uzgodnione przekierowania, kopie robocze i kontrolę najważniejszych adresów.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Brief i zakres",
    text: "Poznajemy firmę, odbiorców i branżę. Ustalamy podstrony, funkcje, materiały, odpowiedzialności i kryteria akceptacji.",
  },
  {
    number: "02",
    title: "Architektura i projekt",
    text: "Przygotowujemy architekturę informacji, prototyp i UI/UX. Przed programowaniem akceptujesz projekt oraz poprawki.",
  },
  {
    number: "03",
    title: "Panel i wdrożenie",
    text: "Łączymy projekt z treściami, konfigurujemy panel, formularze, integracje, SEO i analitykę.",
  },
  {
    number: "04",
    title: "Testy i publikacja",
    text: "Sprawdzamy widok mobilny, formularze, linki, przekierowania i indeksację. Po akceptacji publikujemy stronę i przekazujemy dostępy.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje strona internetowa w Białymstoku?",
    answer: "Cena zależy od liczby podstron, projektu, treści, panelu, integracji i przeniesienia danych. Po briefie otrzymasz koszt, zakres, harmonogram i warunki poprawek — bez sztywnego cennika dla każdego projektu.",
  },
  {
    question: "Ile trwa realizacja strony lub sklepu?",
    answer: "Termin zależy od funkcji, liczby widoków, materiałów, akceptacji i integracji. Harmonogram ustalamy po briefie; nie deklarujemy jednego czasu realizacji dla każdej strony lub sklepu.",
  },
  {
    question: "Strona wizytówka, firmowa czy landing page — co wybrać?",
    answer: "Wizytówka prezentuje podstawowe informacje, rozbudowana witryna rozwija ofertę, a strona docelowa prowadzi do jednego działania. Wybór zależy od celu, ruchu i planu rozwoju.",
  },
  {
    question: "Czy będę mógł samodzielnie edytować treści?",
    answer: "Tak, jeśli zakres obejmuje CMS. Uzgodnimy dostępy administratora, edycję podstron i instrukcję. Aktualizacje techniczne oraz utrzymanie mogą być osobnym elementem opieki.",
  },
  {
    question: "Czy tworzenie stron obejmuje pozycjonowanie i Google Ads?",
    answer: "Wdrożenie obejmuje uzgodnione podstawy technicznego SEO. Pozycjonowanie stron, rozwój treści i reklama Google Ads to odrębne działania wymagające osobnego zakresu; nie gwarantujemy pozycji ani liczby zapytań.",
  },
  {
    question: "Co obejmuje opieka po uruchomieniu strony?",
    answer: "Opieka może obejmować aktualizacje panelu, kopie, drobne zmiany, monitoring i pomoc. Warunki reakcji, zakres prac i ewentualny abonament określamy w ofercie.",
  },
];

const sectionHeading = "text-3xl md:text-4xl font-heading font-bold mb-5";
const bodyText = "text-muted-foreground leading-relaxed";

export default function StronyInternetoweBialystok() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceSchema name={pageTitle} description={serviceLead} provider="FOTZ Studio" areaServed="Białystok" />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" },
        { name: "Białystok", url: canonicalUrl },
      ]} />
      <FAQSchema items={faqItems} />

      <Layout workPlacement="manual">
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Globe className="w-4 h-4" aria-hidden="true" /> Projektowanie stron WWW Białystok dla firm
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-7 leading-tight">{pageTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-9 max-w-3xl mx-auto">{serviceLead}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to={contactHref}>Opisz projekt strony <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <a href="#zakres">Zobacz zakres współpracy</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="zakres" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Zakres projektu</p>
              <h2 className={sectionHeading}>Tworzenie stron internetowych Białystok dopasowane do celu firmy</h2>
              <p className={bodyText}>Profesjonalny projekt nowoczesnych stron internetowych zaczynamy od celu, nie od przedziału cenowego. Projektować i wdrażać funkcje zaczynamy po ustaleniu, jak serwis firmowy ma wzmacniać obecność online i pozyskiwać zapytania od potencjalnych klientów. Specyfika, wymagania klientów i rozwój Twojej firmy decydują o kompleksowym zakresie. Gdy branża IT wymaga technicznej oferty, planujemy treści pod ten kontekst; konkurencyjność na rynku zależy także od pracy po publikacji.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {scopeItems.map((item) => (
                <article key={item.title} className="p-7 rounded-2xl bg-card border border-border/50">
                  <item.icon className="w-7 h-7 text-primary mb-5" aria-hidden="true" />
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className={bodyText}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <FileText className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Tworzenie stron WWW Białystok: CMS, treści i materiały</h2>
              <p className={`${bodyText} mb-5`}>Dobieramy system CMS do codziennej obsługi Twojej strony. Panel administratora może umożliwiać edycję oferty, aktualności i zdjęć, a każda podstrona powinna mieć uzgodniony sposób aktualizacji. Wykonana strona ma być wygodna w edycji, nie tylko estetyczna.</p>
              <p className={bodyText}>Do briefu własnej strony przygotuj opis usług, dane kontaktowe, logo i dostępne zdjęcia. Możemy zaplanować copywriting oraz przygotowanie materiałów jako osobny zakres. Polityka prywatności, zgody i treści branżowe wymagają akceptacji oraz właściwych danych firmy. Personalizacja dotyczy treści i funkcji, nie fikcyjnych wersji dla dzielnic.</p>
            </div>
            <div>
              <MonitorSmartphone className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Techniczne SEO i wydajność od wdrożenia</h2>
              <p className={`${bodyText} mb-5`}>Projektowanie stron WWW obejmuje responsywny interfejs na urządzenia mobilne, uporządkowane nagłówki, metadane, adresy URL i dane strukturalne zgodne z treścią. Optymalizacja obrazów, kodu i ładowania pomaga przygotować stronę do pomiaru Core Web Vitals.</p>
              <ul className="space-y-3">
                {["Kontrola indeksacji, kanonicznych adresów i przekierowań", "Czytelna nawigacja oraz linkowanie wewnętrzne", "Formularze i CTA sprawdzone przed publikacją", "Przygotowanie do dalszego pozycjonowania stron"].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Proces i odpowiedzialności</p>
              <h2 className={sectionHeading}>Jak wygląda projektowanie stron internetowych w Białymstoku?</h2>
              <p className={bodyText}>Proces tworzenia stron prowadzimy zdalnie i nie deklarujemy lokalnego biura w Białymstoku. Jako agencja interaktywna ustalamy zakres, dostęp do kodu i warunki opieki przed realizacją. Jako agencja reklamowa możemy przygotować reklamę osobno. Porównując wykonawców, sprawdź te elementy, nie tylko cenę.</p>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <li key={step.number} className="p-6 rounded-2xl border border-border/50 bg-background">
                  <span className="block text-primary font-mono text-sm mb-5">{step.number}</span>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className={bodyText}>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <BarChart3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Jak mierzymy widoczność i działania strony?</h2>
              <p className={`${bodyText} mb-5`}>Po publikacji analizujemy zapytania i strony docelowe w Google Search Console. W Google Analytics konfigurujemy wyłącznie uzgodnione zdarzenia, na przykład wysłanie formularza lub kliknięcie telefonu, z uwzględnieniem prywatności użytkowników i trybu zgód.</p>
              <p className={bodyText}>Pozycja w wyszukiwarce nie jest tym samym co zapytanie lub sprzedaż. Dlatego raport działań Twojej strony powinien rozdzielać widoczność, ruch i konwersję. Kampania Google Ads wymaga osobnego budżetu i pomiaru. Nie publikujemy case study ani wyników bez danych.</p>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Od czego zależy wycena strony WWW?</h2>
              <p className={`${bodyText} mb-5`}>Na koszt wpływają liczba widoków i podstron, UI/UX, copywriting, panel, integracje, przeniesienie treści, języki i testy. Wycenę strony lub sklepu przygotowujemy po briefie, bez sztywnego cennika.</p>
              <p className={`${bodyText} mb-6`}>Oferta określa cenę, etapy, poprawki, materiały klienta i odbiór. Hosting, domena, opieka, pozycjonowanie i budżet reklamowy są ujęte tylko po wyraźnym wpisaniu do zakresu.</p>
              <Button asChild>
                <Link to={contactHref}>Poproś o wycenę zakresu <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <SelectedWork />

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <p className="text-primary text-sm font-medium mb-3">FAQ</p>
              <h2 className={sectionHeading}>Najczęstsze pytania o strony internetowe w Białymstoku</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={item.question} id={`bialystok-faq-${index + 1}`} className="group rounded-xl border border-border/50 bg-card/50 px-6 py-5">
                  <summary className="cursor-pointer list-none font-medium leading-relaxed">{item.question}</summary>
                  <p className={`${bodyText} mt-4`}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
              <Palette className="w-8 h-8 text-primary mx-auto mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Porozmawiajmy o Twojej nowej stronie internetowej</h2>
              <p className={`${bodyText} mb-7 max-w-2xl mx-auto`}>Napisz, czy potrzebujesz nowej strony firmowej, strony docelowej czy modernizacji istniejącej witryny oraz do jakich klientów z Białegostoku i okolic chcesz docierać. Na tej podstawie ustalimy informacje potrzebne do wyceny i kolejny krok.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg"><Link to={contactHref}>Wyślij brief projektu <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/uslugi/strony-internetowe">Zobacz ogólną ofertę stron</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
