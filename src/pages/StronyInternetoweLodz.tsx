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
  Search,
  Settings2,
  ShoppingCart,
} from "lucide-react";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";

const seoTitle = "Strony internetowe Łódź — projektowanie | FOTZ";
const seoDescription = "Profesjonalne strony internetowe Łódź: projektowanie stron WWW, WordPress, sklepy internetowe i SEO. Sprawdź zakres prac oraz wycenę FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/uslugi/strony-internetowe/lodz";
const pageTitle = "Strony internetowe Łódź";
const serviceLead = "Profesjonalna strona WWW dla firm z Łodzi i okolic: projekt graficzny, wygodny CMS, integracje, techniczne SEO, publikacja i pomiar zapytań.";
const contactHref = "/kontakt?usluga=web#formularz";

const projectTypes = [
  {
    icon: Globe,
    title: "Strona firmowa i wizytówka",
    text: "Podstawowa strona WWW, czyli wizytówka, prezentuje firmę, ofertę i kontakt. Rozbudowana strona firmowa porządkuje usługi i materiały. Projektujemy podstrony według pytań odbiorców, bez powielonego szablonu.",
  },
  {
    icon: Layers3,
    title: "Landing page do kampanii",
    text: "Landing page prowadzi do jednego działania: wysłania zgłoszenia, rozmowy lub zakupu. Układ treści i CTA dopasowujemy do źródła ruchu. Strona może wspierać reklamy online, ale każda kampania ma osobny budżet i zakres.",
  },
  {
    icon: ShoppingCart,
    title: "Sklep internetowy i katalog",
    text: "Sklepy internetowe dla firm obejmują katalog, koszyk, płatności, dostawy i zamówienia. Katalog bez sprzedaży online może prowadzić do zapytania o produkt. Przed wdrożeniem ustalamy dane, warianty oraz integracje.",
  },
  {
    icon: Settings2,
    title: "Modernizacja i migracja",
    text: "Nowa strona internetowa może zastąpić przestarzałą witrynę bez kopiowania wszystkich treści. Analizujemy adresy i materiały; aktualizacja treści oraz przekierowania mają uzgodniony zakres, a publikacja kończy się kontrolą.",
  },
];

const integrationItems = [
  {
    title: "Formularze i CRM",
    text: "Formularz może przekazywać zapytanie na e-mail lub do CRM. Ustalamy pola, zgody, komunikaty, zabezpieczenia antyspamowe i test dostarczania wiadomości.",
  },
  {
    title: "Płatności i sprzedaż",
    text: "Dla sklepu planujemy płatności, dostawy, faktury i powiadomienia. Zakres zależy od operatorów, ich dokumentacji, warunków umów oraz opłat.",
  },
  {
    title: "Analityka i marketing",
    text: "Konfigurujemy uzgodnione zdarzenia i system zgód. Integracja z systemem reklamowym, działaniem marketingowym lub mailingiem nie zastępuje strategii i pracy z treścią.",
  },
  {
    title: "Rezerwacje i automatyzacje",
    text: "Łączymy stronę z kalendarzem, rezerwacjami lub firmowym API po sprawdzeniu danych. Automatyzacje oraz AI wdrażamy z opisanym scenariuszem; interaktywny element musi mieć sposób odbioru.",
  },
];

const processSteps = [
  { number: "01", title: "Brief i cele", text: "Poznajemy ofertę, odbiorców, potrzeby klienta i cel biznesowy. Ustalamy wartościowe zapytania oraz informacje poprzedzające kontakt." },
  { number: "02", title: "Architektura i zakres", text: "Porządkujemy podstrony, funkcje, materiały i integracje. Opisujemy etapy, odpowiedzialności oraz kryteria odbioru." },
  { number: "03", title: "Prototyp i design", text: "Projektujemy nawigację, prototyp UX i interfejs UI. Przed programowaniem pokazujemy kluczowe widoki także na mały ekran." },
  { number: "04", title: "Kod i panel CMS", text: "Łączymy projekt strony WWW z treściami, panelem i integracjami. Konfigurujemy obsługę zapytań oraz techniczne SEO." },
  { number: "05", title: "Testy i poprawki", text: "Sprawdzamy widoki, linki, zapytania, przekierowania i zgodność z projektem. Uwagi zbieramy w uzgodnionej formie." },
  { number: "06", title: "Publikacja i rozwój", text: "Po akceptacji publikujemy witrynę i przekazujemy dostępy. Omawiamy opiekę, aktualizacje oraz dalszy rozwój strony." },
];

const faqItems = [
  {
      question: "Ile kosztują tanie strony internetowe w Łodzi?",
      answer: "Tanie strony internetowe Łódź zaczynają się od prostej wizytówki — ale tanio nie może znaczyć źle: szybkość, SEO i bezpieczeństwo zostają w standardzie. Tworzenie stron Łódź wyceniamy po briefu; napisz, zobaczysz konkretny koszt i termin.",
    },
    {
    question: "Ile kosztuje strona internetowa w Łodzi?",
    answer: "Cena zależy od liczby widoków i podstron, projektu graficznego, treści, CMS, integracji, wersji językowych i migracji. Po briefie otrzymasz wycenę z zakresem, etapami i warunkami odbioru. Nie stosujemy jednej sztywnej ceny dla każdej realizacji.",
  },
  {
    question: "Jak długo trwa stworzenie strony internetowej?",
    answer: "Termin zależy od złożoności, gotowości materiałów, integracji i tempa akceptacji. Harmonogram przygotowujemy po ustaleniu zakresu i wskazujemy zadania klienta. Nie deklarujemy jednego czasu realizacji dla prostej witryny, rozbudowanego serwisu i sklepu.",
  },
  {
    question: "Czy stronę będzie można samodzielnie edytować?",
    answer: "Tak, jeśli projekt obejmuje system zarządzania treścią. Uzgadniamy edytowalne pola, uprawnienia, dostępy i instrukcję. Panel może obsługiwać ofertę, aktualności, zdjęcia lub produkty, a techniczne aktualizacje wymagają osobnych ustaleń opieki.",
  },
  {
    question: "Czy strona będzie responsywna i przygotowana pod SEO?",
    answer: "Projektujemy strony dostosowane do różnych ekranów i sprawdzamy kluczowe widoki. Wdrożenie obejmuje uzgodnione metadane, nagłówki, adresy, dane strukturalne i kontrolę indeksacji. Pozycjonowanie to dalszy proces, a nie gwarancja pozycji w Google.",
  },
  {
    question: "Czym strona wizytówka różni się od landing page?",
    answer: "Taka prosta strona prezentuje firmę, ofertę i dane kontaktowe w kilku sekcjach lub podstronach. Landing page prowadzi do jednego działania i odpowiada konkretnemu źródłu ruchu. Wybór zależy od celu, decyzji klienta oraz planu rozwoju treści i kampanii.",
  },
  {
    question: "Czy tworzycie strony WordPress i sklepy internetowe?",
    answer: "Tak, zakres może obejmować WordPress, inny odpowiedni CMS, sklep internetowy albo wdrożenie dedykowane. Technologię wybieramy po analizie edycji treści, integracji, katalogu i wymagań technicznych, zamiast narzucać jedną platformę każdej firmie.",
  },
  {
    question: "Jakie materiały muszę przygotować?",
    answer: "Przydadzą się opis oferty, dane firmy, logo, zdjęcia, dotychczasowe treści i lista funkcji. Copywriting, opracowanie zdjęć lub projektowanie logo możemy uwzględnić jako dodatkowy zakres. Informacje prawne i zgody wymagają zatwierdzenia przez klienta.",
  },
  {
    question: "Czy współpraca wymaga biura lub spotkań w Łodzi?",
    answer: "Projekt możemy prowadzić zdalnie: brief, prezentacje, akceptacje i przekazanie dostępów nie wymagają lokalnego biura w Łodzi. Formę kontaktu ustalamy na początku. Realizacje stron internetowych i opinie klientów warto porównywać razem z zakresem oraz warunkami poprawek.",
  },
  {
    question: "Co dzieje się po uruchomieniu strony?",
    answer: "Po publikacji kontrolujemy uzgodnione elementy i przekazujemy materiały projektowe. Opieka może obejmować kopie, aktualizacje, monitoring i rozwój funkcji. Pozycjonowanie, treści i reklamy wymagają osobnych ustaleń; nie obiecujemy pozycji ani liczby zapytań.",
  },
];

const sectionHeading = "text-3xl md:text-4xl font-heading font-bold mb-5";
const bodyText = "text-muted-foreground leading-relaxed";

export default function StronyInternetoweLodz() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceSchema name={pageTitle} description={serviceLead} provider="FOTZ Studio" areaServed="Łódź" />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" },
        { name: "Łódź", url: canonicalUrl },
      ]} />
      <FAQSchema items={faqItems} />

      <Layout workPlacement="manual">
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Globe className="w-4 h-4" aria-hidden="true" /> Strony WWW Łódź — oferta dla firm
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-7 leading-tight">{pageTitle}</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-9 max-w-3xl mx-auto">{serviceLead}</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link to={contactHref}>Opisz swoją stronę <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <a href="#typy-projektow">Zobacz typy projektów</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="typy-projektow" className="py-20 scroll-mt-24">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Typy projektów</p>
              <h2 className={sectionHeading}>Tworzenie stron internetowych Łódź — typy projektów i realizacja</h2>
              <p className={`${bodyText} mb-5`}>Tworzenie stron internetowych Łódź zaczynamy od pytania, co witryna ma zmienić w firmie. Strony internetowe Łódź mają uporządkować ofertę, ułatwić kontakt, wspierać sprzedaż i pomagać pozyskiwać nowych klientów. Funkcje należy projektować pod rzeczywiste czynności odbiorców i zespołu, a profesjonalny projekt graficzny porządkuje drogę do działania.</p>
              <p className={bodyText}>Dla firm z Łodzi i województwa łódzkiego przygotowujemy strony internetowe i sklepy z uwzględnieniem rynku lokalnego oraz działalności ogólnopolskiej. Inne treści potrzebuje firma usługowa, inne producent, organizacja lub zespół B2B. Lokalizacja określa kontekst, ale nie zastępuje analizy odbiorców.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {projectTypes.map((item) => (
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
              <Palette className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Jak projektować strony WWW Łódź: design i zakres realizacji</h2>
              <p className={`${bodyText} mb-5`}>Projektowanie stron internetowych zaczynamy od architektury informacji: nazw usług, argumentów, nawigacji i CTA. Projektowanie stron WWW łączy projekt graficzny z czytelnością, a nowoczesne strony internetowe wspierają wizerunek firmy. Wygląd strony i indywidualny design nie kopiują szablonu strony. Zakres może obejmować projekt UI i bibliotekę komponentów.</p>
              <p className={bodyText}>Oferta opisuje rezultaty, a realizacja ma jasne granice. Oferta obejmuje uzgodnione widoki, responsywny interfejs, konfigurację treści, zapytań i integracji, techniczne SEO, testy oraz publikację. Copywriting, dodatkowe języki, zdjęcia i rozbudowane funkcje wymagają wyraźnego ujęcia w wycenie.</p>
            </div>
            <div>
              <FileText className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Zakres tworzenia stron WWW: CMS i materiały</h2>
              <p className={`${bodyText} mb-5`}>Podczas tworzenia stron WWW system CMS dobieramy do codziennej pracy zespołu. WordPress sprawdza się w wielu serwisach redakcyjnych, ale czasem lepszy będzie inny panel lub rozwiązanie dedykowane. Oceniamy treści, uprawnienia i funkcje. Panel ma ułatwiać pracę; aktualizacja oferty nie może przypadkiem zmieniać całego układu.</p>
              <p className={`${bodyText} mb-5`}>Do rozpoczęcia wystarczy opis firmy i rozmowa o klientach. Przydatne są obecne teksty, identyfikacja wizualna, zdjęcia z prawami do wykorzystania oraz pytania z rozmów z klientami. Możemy pracować na materiałach klienta albo uwzględnić redakcję i copywriting w projekcie.</p>
              <ul className="space-y-3">
                {[
                  "lista podstron, funkcji i osób akceptujących",
                  "treści, media oraz informacje o prawach do materiałów",
                  "zasady edycji, instrukcja i przekazanie dostępów",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Integracje</p>
              <h2 className={sectionHeading}>Strona WWW jako interaktywny element firmy: integracje i AI</h2>
              <p className={bodyText}>Budowa stron internetowych często wykracza poza wygląd i panel. Integracje mogą skrócić obsługę zapytania i połączyć witrynę z obsługą zamówień. Każdą opisujemy osobno: źródło i cel danych, dostęp, synchronizację oraz zachowanie przy błędzie. Dzięki temu wiadomo, co podlega testom i odbiorowi.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {integrationItems.map((item) => (
                <article key={item.title} className="p-7 rounded-2xl bg-card border border-border/50">
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
              <MonitorSmartphone className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Responsywne strony internetowe i techniczne SEO</h2>
              <p className={`${bodyText} mb-5`}>Projektujemy responsywne strony internetowe na smartfon, tablet i komputer. Urządzenia mobilne wymagają czytelnego tekstu, wygodnego menu, pól kontaktowych i dostępnego CTA. Strona WWW powinna oszczędnie korzystać z obrazów, czcionek i kodu, ale Core Web Vitals trzeba zmierzyć po publikacji.</p>
              <p className={bodyText}>Techniczne SEO przygotowuje fundament pod pozycjonowanie w wyszukiwarkach. Uporządkowane nagłówki, opisowe adresy URL, metadane i linkowanie wewnętrzne pomagają zrozumieć strukturę serwisu. Dane strukturalne odpowiadają widocznej treści, lecz sama obecność schema nie zapewnia miejsca w Google.</p>
            </div>
            <div>
              <Search className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Techniczne SEO i indeksacja online przed publikacją</h2>
              <ul className="space-y-3 mb-5">
                {[
                  "jedno H1 i logiczną hierarchię pozostałych nagłówków",
                  "title, description, kanoniczne adresy i ustawienia indeksacji",
                  "mapę serwisu, przekierowania oraz błędne adresy",
                  "linki wewnętrzne, nawigację i dostępność treści",
                  "wysyłkę zapytań, zgody i mobilny interfejs",
                  "obrazy, zasoby oraz podstawy wydajności",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className={bodyText}>Pozycjonowanie stron internetowych obejmuje badanie fraz, rozwój treści i prace po publikacji. Do pozycjonowania nie wystarczy jednorazowa optymalizacja. Nie obiecujemy określonej pozycji; skuteczność zależy m.in. od konkurencji, oferty, domeny i regularności działań.</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Proces i odpowiedzialności</p>
              <h2 className={sectionHeading}>Proces tworzenia stron internetowych</h2>
              <p className={bodyText}>Projektowanie i tworzenie stron internetowych w Łodzi dzielimy na etapy z rezultatem i akceptacją. Zakres wdrożenia opisuje obowiązki: jako agencja interaktywna odpowiadamy za projekt i kod, a klient za prawdziwość informacji i decyzje. Podczas tworzenia stron internetowych zmiana zakresu wymaga omówienia harmonogramu i wyceny.</p>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <li key={step.number} className="p-6 rounded-2xl border border-border/50 bg-card/50">
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
              <h2 className={sectionHeading}>Jak mierzyć widoczność i zapytania ze strony?</h2>
              <p className={`${bodyText} mb-5`}>Po publikacji rozdzielamy widoczność, ruch i działania użytkowników. Google Search Console pokazuje m.in. zapytania i strony docelowe. Narzędzie analityczne może rejestrować uzgodnione zdarzenia, takie jak wysłanie formularza, kliknięcie telefonu czy rozpoczęcie rezerwacji, z uwzględnieniem prywatności i trybu zgód.</p>
              <p className={bodyText}>Wejście na stronę nie oznacza wartościowego leada, a pozycja frazy nie określa jakości zapytania. Definiujemy zdarzenia i ich weryfikację. Kampanie Google Ads mierzymy osobno od ruchu organicznego. Nie przypisujemy stronie wyników firmy bez danych oraz bez uwzględnienia pracy zespołu obsługującego klientów.</p>
            </div>
            <div>
              <Settings2 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Od czego zależy wycena strony WWW?</h2>
              <p className={`${bodyText} mb-5`}>Koszt zależy od indywidualnych widoków, podstron, treści, wersji językowych i funkcji. Na wycenę wpływają CMS, integracje, migracja, testy oraz wymagania dostępności i wydajności. Wykonanie strony lub sklepu ustalamy po briefie; sama cena bez zakresu nie pozwala rzetelnie porównać ofert.</p>
              <p className={`${bodyText} mb-5`}>Każda strona WWW ma inne wymagania. Wycena wskazuje etapy, poprawki, materiały klienta, publikację i dostępy. Domena i hosting, licencje, opieka, pozycjonowanie i budżet reklamowy są kosztami tylko po zapisaniu w ofercie. Hasło „tanie strony internetowe” nie zastępuje warunków realizacji, a „konkurencyjne ceny” nie mówią nic o zakresie.</p>
              <Button asChild>
                <Link to={contactHref}>Poproś o wycenę zakresu <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className={sectionHeading}>Portfolio, realizacje stron internetowych i opinie klientów — Łódź i okolice</h2>
            <p className={`${bodyText} mb-5`}>Wybierając agencję lub freelancera, porównaj sposób pracy, a nie tylko ofertę. Zapytaj, kto projektuje i programuje, jak wygląda akceptacja, co stanie się z kodem i dostępami oraz kto odpowiada za zapytania po publikacji. Portfolio stron internetowych warto oceniać pod kątem czytelności, funkcji i podobnych wyzwań, nie tylko atrakcyjnych zrzutów ekranu.</p>
            <p className={`${bodyText} mb-5`}>Profesjonalne strony internetowe dla firm powinny mieć właściciela treści i plan rozwoju. Przed podpisaniem umowy ustal, czy możesz zmieniać ofertę, jak działają kopie i aktualizacje oraz jak wyceniane są nowe funkcje. Strona wspiera plan pozyskiwania klientów, ale jasne warunki są ważniejsze niż obietnica natychmiastowego dotarcia do potencjalnych klientów.</p>
            <p className={bodyText}>Projekty dla regionu Łódź i okolice prowadzimy zdalnie, z prezentacjami i akceptacjami online. Strony WWW w Łodzi przygotowujemy według rzeczywistych potrzeb. Dla klientów z Łodzi oraz województwa łódzkiego ustalamy obszar działania i sposób kontaktu. Nie deklarujemy lokalnego biura w Łodzi. Lokalny kontekst uwzględniamy w treści i strukturze oferty.</p>
          </div>
        </section>

        <SelectedWork />

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <p className="text-primary text-sm font-medium mb-3">FAQ</p>
              <h2 className={sectionHeading}>Najczęstsze pytania o stronę internetową w Łodzi</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={item.question} id={`lodz-faq-${index + 1}`} className="group rounded-xl border border-border/50 bg-card/50 px-6 py-5">
                  <summary className="cursor-pointer list-none font-medium leading-relaxed">{item.question}</summary>
                  <p className={`${bodyText} mt-4`}>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10 text-center">
              <MessageSquare className="w-8 h-8 text-primary mx-auto mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Strony internetowe Łódź — porozmawiajmy o projekcie</h2>
              <p className={`${bodyText} mb-7 max-w-2xl mx-auto`}>Napisz, czy potrzebujesz strony firmowej, landing page, sklepu czy modernizacji obecnej witryny. Opisz odbiorców, funkcje i materiały, które już masz. Na tej podstawie ustalimy zakres Twojej strony, informacje potrzebne do wyceny i kolejny krok współpracy.</p>
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
