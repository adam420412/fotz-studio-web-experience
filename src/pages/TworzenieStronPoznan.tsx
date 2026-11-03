import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
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
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const seoTitle = "Tworzenie stron internetowych Poznań – strona WWW | FOTZ";
const seoDescription = "Profesjonalne strony internetowe dla firm z Poznania: strona WWW, projektowanie stron, CMS, integracje i SEO. Sprawdź zakres prac i wycenę FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/uslugi/tworzenie-stron-internetowych/poznan";
const pageTitle = "Tworzenie stron internetowych Poznań";
const serviceLead = "Oferujemy strony internetowe dla firm z Poznania: od wizytówki i strony firmowej po landing page oraz sklep internetowy, z projektem UX/UI, CMS, integracjami i technicznym SEO.";
const contactHref = "/kontakt?usluga=web#formularz";

const breadcrumbs = [
  { name: "Strona główna", url: "https://www.fotz-studio.pl" },
  { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
  { name: "Tworzenie stron internetowych", url: "https://www.fotz-studio.pl/uslugi/tworzenie-stron-internetowych" },
  { name: "Poznań", url: canonicalUrl },
];

const projectTypes = [
  {
    icon: Globe,
    title: "Strona firmowa i wizytówka",
    text: "Strona wizytówka prezentuje najważniejsze informacje o firmie, ofercie i kontakcie. Rozbudowana strona firmowa może mieć osobne opisy usług, aktualności, zespołu i materiałów do pobrania. Strukturę strony planujemy według pytań odbiorców, bez podstron dodawanych wyłącznie dla objętości.",
  },
  {
    icon: Layers3,
    title: "Landing page do kampanii",
    text: "Strona docelowa porządkuje jedną ofertę i prowadzi do uzgodnionego działania, na przykład wysłania briefu lub rezerwacji rozmowy. Treść, formularz i CTA dopasowujemy do źródła ruchu. Projekt strony WWW może wspierać Google Ads lub social media, lecz prowadzenie kampanii jest odrębnym zakresem.",
  },
  {
    icon: ShoppingCart,
    title: "Sklep internetowy i katalog",
    text: "Sklep internetowy wymaga przemyślenia katalogu, koszyka, płatności, dostaw i obsługi zamówień. Katalog bez sprzedaży online może prowadzić do zapytania o produkt. Przed wdrożeniem ustalamy model sprzedaży, warianty, źródła danych i integracje, aby dobrać technologię do realnego procesu.",
  },
  {
    icon: Settings2,
    title: "Modernizacja i migracja",
    text: "Nowa strona może zastąpić przestarzałą witrynę bez bezrefleksyjnego kopiowania wszystkich treści. Analizujemy dotychczasowe adresy i materiały, wskazujemy elementy do aktualizacji oraz planujemy przekierowania. Realizacja strony internetowej obejmuje uzgodnione przeniesienie danych, testy i kontrolę po publikacji.",
  },
];

const integrationItems = [
  {
    title: "Formularze i obsługa zapytań",
    text: "Formularz może przekazywać wiadomość na wskazany adres lub do CRM. Ustalamy pola, zgody, komunikaty błędów, zabezpieczenia antyspamowe oraz sposób sprawdzenia dostarczania zapytań.",
  },
  {
    title: "Płatności i sprzedaż",
    text: "Dla sklepu lub płatnej oferty planujemy płatności, dostawy, faktury i powiadomienia. Zakres zależy od dokumentacji dostawców, warunków ich usług oraz danych potrzebnych do obsługi zamówienia.",
  },
  {
    title: "Analityka i marketing",
    text: "Konfigurujemy uzgodnione zdarzenia i połączenie z systemem zgód. Integracja z narzędziem mailingowym, newsletterem lub Google Ads nie zastępuje strategii, pracy z treścią i prowadzenia kampanii.",
  },
  {
    title: "Systemy firmowe i API",
    text: "Strona może łączyć się z kalendarzem, rezerwacjami, ERP lub wewnętrznym API. Sprawdzamy dostęp i format danych, opisujemy odpowiedzialność stron, scenariusze błędów oraz kryteria odbioru integracji.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Brief i cele",
    text: "Rozpoznajemy ofertę, odbiorców i oczekiwania wobec strony. Ustalamy, jakie informacje są potrzebne przed kontaktem i które zapytania mają wartość biznesową.",
  },
  {
    number: "02",
    title: "Architektura i zakres",
    text: "Porządkujemy podstrony, funkcje, materiały i integracje. Zapisujemy odpowiedzialności, etapy akceptacji oraz kryteria odbioru każdego projektu strony.",
  },
  {
    number: "03",
    title: "Prototyp i design",
    text: "Projektujemy nawigację, prototyp UX i interfejs UI. Prezentujemy hierarchię treści oraz zachowanie kluczowych widoków na małych ekranach.",
  },
  {
    number: "04",
    title: "Programowanie i CMS",
    text: "Łączymy zaakceptowany projekt graficzny strony z kodem, treściami i panelem. Konfigurujemy formularze, integracje i podstawy technicznego SEO.",
  },
  {
    number: "05",
    title: "Testy i akceptacja",
    text: "Sprawdzamy widoki, linki, zapytania, przekierowania i zgodność z projektem. Klient zgłasza uwagi w ustalonej formie, a my odnosimy je do zakresu.",
  },
  {
    number: "06",
    title: "Publikacja i przekazanie",
    text: "Po akceptacji następuje uruchomienie strony, kontrola uzgodnionych elementów i przekazanie dostępów. Omawiamy również opiekę oraz rozwój.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje strona internetowa w Poznaniu?",
    answer: "Cena strony internetowej zależy od widoków, treści, CMS, integracji, wersji językowych i migracji. Po briefie otrzymasz zakres oraz etapy; nie stosujemy jednej sztywnej ceny.",
  },
  {
    question: "Jak długo trwa stworzenie strony internetowej?",
    answer: "Termin zależy od złożoności, materiałów, integracji i akceptacji. Harmonogram ustalamy dla konkretnego zakresu, z zadaniami klienta, a nie jednym czasem dla każdego projektu.",
  },
  {
    question: "Czy stronę będzie można samodzielnie edytować?",
    answer: "Tak, jeśli zakres obejmuje system zarządzania treścią. Uzgadniamy pola, uprawnienia i instrukcję; hosting, kopie oraz aktualizacje techniczne opisujemy osobno.",
  },
  {
    question: "Czy strona będzie responsywna i przygotowana pod SEO?",
    answer: "Sprawdzamy widoki mobilne oraz uzgodnione metadane, nagłówki, adresy, dane strukturalne i indeksację. Pozycjonowanie stron to dalszy proces, nie gwarancja pozycji w Google.",
  },
  {
    question: "Czym strona wizytówka różni się od landing page?",
    answer: "Wizytówka prezentuje firmę, ofertę i kontakt. Landing page prowadzi z konkretnego źródła ruchu do jednego działania; wybór zależy od celu.",
  },
  {
    question: "Czy tworzycie strony WWW na WordPressie?",
    answer: "Możemy użyć WordPressa, innego CMS lub wdrożenia dedykowanego. Technologię dobieramy do treści, integracji, katalogu i wymagań, a nie do każdej firmy tak samo.",
  },
  {
    question: "Jakie materiały są potrzebne do projektu strony?",
    answer: "Przygotuj opis oferty, dane firmy, logo, zdjęcia z prawami do użycia, obecne teksty i funkcje. Copywriting możemy uwzględnić w zakresie; zgody zatwierdza klient.",
  },
  {
    question: "Czy współpraca wymaga spotkań w Poznaniu?",
    answer: "Brief i akceptacje prowadzimy zdalnie. Nie deklarujemy lokalnego biura w Poznaniu. Przy wyborze wykonawcy porównaj zakres, poprawki, dostęp do kodu i opiekę.",
  },
  {
    question: "Co dzieje się po uruchomieniu strony?",
    answer: "Przekazujemy materiały i kontrolujemy uzgodnione elementy. Opieka może obejmować aktualizacje, kopie i rozwój. Pozycjonowanie ustalamy osobno; nie obiecujemy pozycji ani liczby zapytań.",
  },
];

const sectionHeading = "text-3xl md:text-4xl font-heading font-bold mb-5";
const bodyText = "text-muted-foreground leading-relaxed";

export default function TworzenieStronPoznan() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceSchema name={pageTitle} description={serviceLead} provider="FOTZ Studio" areaServed="Poznań" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />

      <Layout workPlacement="manual">
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Globe className="w-4 h-4" aria-hidden="true" /> Profesjonalne strony WWW dla firm z Poznania
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
              <h2 className={sectionHeading}>Strony internetowe dla firm z Poznania: tworzenie stron WWW, strona firmowa i sklep internetowy</h2>
              <p className={`${bodyText} mb-5`}>Profesjonalne tworzenie stron internetowych zaczynamy od celu: uporządkowania oferty, kontaktu, sprzedaży lub obsługi klientów. Funkcje i wygląd strony projektujemy pod czynności odbiorców, więc projekt strony internetowej nie powiela przypadkowego szablonu.</p>
              <p className={bodyText}>Poznań to miasto różnych modeli sprzedaży; tworzenie i projektowanie stron dopasowujemy do potrzeb firmy usługowej, producenta i zespołu B2B.</p>
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
              <h2 className={sectionHeading}>Projektowanie stron WWW Poznań: projekt strony internetowej i design</h2>
              <p className={`${bodyText} mb-5`}>Projekt zaczynamy od architektury informacji: nazw usług, argumentów, nawigacji i CTA. Następnie prototyp oraz design porządkują treść. Nowoczesna i profesjonalna strona internetowa powinna być czytelna i spójna, bez nadmiaru efektów; najważniejsza jest użyteczność strony.</p>
              <p className={bodyText}>Zakres może obejmować brief, analizę konkurencji, prototyp UX, projekt UI i komponenty. Klient zatwierdza widoki przed programowaniem, więc uwagi o układzie omawiamy przed kodowaniem.</p>
            </div>
            <div>
              <FileText className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Co obejmuje tworzenie strony?</h3>
              <p className={`${bodyText} mb-5`}>Oferta opisuje rezultaty i granice prac, a nie tylko nazwę pakietu. Dla stron WWW dla firm możemy zaplanować między innymi:</p>
              <ul className="space-y-3 mb-5">
                {[
                  "mapę podstron i prototyp najważniejszych ścieżek użytkownika",
                  "responsywny interfejs oraz wdrożenie zaakceptowanych widoków",
                  "konfigurację panelu, treści, formularzy i uzgodnionych integracji",
                  "podstawy technicznego SEO, testy i publikację na wskazanej domenie",
                  "instrukcję obsługi, przekazanie dostępów i warunki opieki",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className={bodyText}>Copywriting, zdjęcia, projektowanie logo, dodatkowe języki i rozbudowane funkcje wchodzą w zakres tylko po wyraźnym ustaleniu. Taki opis ułatwia porównanie ofert i odbiór bez nieporozumień.</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <Layers3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Tworzenie stron internetowych Poznań: strony WWW WordPress, CMS i materiały</h2>
              <p className={`${bodyText} mb-5`}>System zarządzania treścią dobieramy do pracy zespołu. Strony WWW WordPress sprawdzają się w projektach redakcyjnych, ale czasem lepszy będzie inny CMS. Oceniamy treści, uprawnienia i funkcje. Strona WWW i panel mają ułatwiać aktualizację oferty bez ryzyka zmiany całego układu.</p>
              <p className={bodyText}>Na etapie projektowania stron określamy pola usług, artykułów, produktów i mediów oraz pokazujemy edycję treści, obrazów i metadanych. Przekazujemy uprawnienia; hosting, domenę, kopie i aktualizacje opisujemy osobno.</p>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Jak przygotować treści i materiały?</h3>
              <p className={`${bodyText} mb-5`}>Na start wystarczy uporządkowany opis firmy i rozmowa o klientach. Przydatne są teksty obecnej witryny, sposób wyceny, dane kontaktowe, identyfikacja wizualna i zdjęcia z prawami do wykorzystania. W briefu warto wskazać pytania odbiorów oraz argumenty znane z rozmów sprzedażowych.</p>
              <p className={`${bodyText} mb-5`}>Możemy zaplanować copywriting i redakcję jako część projektu albo pracować na dostarczonych materiałach. Ustalamy terminy, osobę akceptującą i sposób zgłaszania uwag. Treści prawne, zgody oraz informacje branżowe powinny odpowiadać rzeczywistej działalności.</p>
              <p className={bodyText}>Nie tworzymy fikcyjnych opinii, realizacji ani lokalnych wersji tekstu tylko dla zwiększenia liczby słów. Każda strona internetowa ma pomagać w decyzji i odpowiadać na pytania przed kontaktem z firmą.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Integracje</p>
              <h2 className={sectionHeading}>Strona WWW połączona z narzędziami firmy</h2>
              <p className={bodyText}>Integracje łączą stronę z procesem sprzedaży i ograniczają przepisywanie danych. Każdą opisujemy przez źródło i cel danych, uwierzytelnienie, synchronizację, zachowanie przy awarii oraz testy odbiorowe.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {integrationItems.map((item) => (
                <article key={item.title} className="p-7 rounded-2xl bg-background border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className={bodyText}>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <MonitorSmartphone className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Profesjonalne strony internetowe: responsywność i techniczne SEO</h2>
              <p className={`${bodyText} mb-5`}>Projektujemy responsywne strony WWW z myślą o telefonie, tablecie i komputerze. Sprawdzamy nie tylko szerokość układu, lecz także czytelność tekstu, menu, pola formularza i dostępność CTA. Optymalizacja obrazów, czcionek i kodu wspiera szybkie ładowanie strony, ale Core Web Vitals należy zmierzyć na opublikowanym serwisie i w rzeczywistych warunkach.</p>
              <p className={bodyText}>Techniczne SEO przygotowujemy jako fundament pod widoczność w wyszukiwarkach internetowych. Uporządkowane nagłówki, opisowe adresy URL, metadane i linkowanie wewnętrzne pomagają zrozumieć strukturę serwisu. Dane strukturalne muszą odpowiadać widocznej treści, a sama obecność znaczników schema nie zapewnia wyników w Google.</p>
            </div>
            <div>
              <Search className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Co sprawdzamy przed publikacją?</h3>
              <ul className="space-y-3 mb-5">
                {[
                  "jednoznaczne H1 i logiczną hierarchię pozostałych nagłówków",
                  "title, description, kanoniczne adresy i ustawienia indeksacji",
                  "mapę serwisu, przekierowania oraz reakcję na błędne adresy",
                  "linki wewnętrzne, nawigację i dostępność najważniejszych treści",
                  "formularze, komunikaty, zgody i działanie na urządzeniach mobilnych",
                  "obrazy, zasoby blokujące renderowanie i podstawy wydajności",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className={bodyText}>Pozycjonowanie stron obejmuje badanie fraz, rozwój treści i pracę po publikacji. Może być kolejnym etapem współpracy, ale nie obiecujemy określonej pozycji. Zwiększenie widoczności strony w Google zależy m.in. od konkurencji, jakości oferty, domeny i regularności działań.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Proces i odpowiedzialności</p>
              <h2 className={sectionHeading}>Proces tworzenia stron internetowych w Poznaniu i budowania strony WWW</h2>
              <p className={bodyText}>Proces tworzenia stron internetowych w Poznaniu dzielimy na etapy z jasnym rezultatem i akceptacją. Tworzenie strony internetowej to proces wymagający decyzji, materiałów i poprawek. Jako agencja interaktywna odpowiadamy za uzgodniony projekt i wdrożenie strony, a klient za prawdziwość informacji oraz terminowe akceptacje. Zmiana zakresu wymaga omówienia wpływu na harmonogram i wycenę.</p>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <BarChart3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Jak mierzyć widoczność swojej strony i zapytania?</h2>
              <p className={`${bodyText} mb-5`}>Google Search Console pokazuje zapytania i strony docelowe, dzięki czemu analizujemy Twojej strony w wynikach wyszukiwania obecność dla istotnych fraz. Analityka rejestruje uzgodnione zdarzenia: wysłanie formularza, kliknięcie telefonu czy rezerwację, z uwzględnieniem zgód.</p>
              <p className={bodyText}>Wejście nie oznacza leada, a pozycja frazy nie opisuje jakości zapytania. Definiujemy i weryfikujemy zdarzenia, oddzielamy ruch organiczny od Google Ads i nie przypisujemy sprzedaży bez danych.</p>
            </div>
            <div>
              <Settings2 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Od czego zależy cena strony internetowej?</h2>
              <p className={`${bodyText} mb-5`}>Cena strony zależy od indywidualnych widoków, podstron, treści, wersji językowych i funkcjonalności strony. Na koszt wpływają również CMS, integracje, przeniesienie danych, testy oraz wymagania dostępności i wydajności. Koszt wykonania strony internetowej ustalamy po briefie; przedział bez zakresu nie pozwala rzetelnie porównać ofert.</p>
              <p className={`${bodyText} mb-5`}>Wycena wskazuje etapy, sposób obsługi poprawek, materiały klienta, warunki publikacji i przekazania dostępów. Domena, hosting, płatne licencje, opieka, pozycjonowanie i budżet reklamowy są kosztami projektu tylko wtedy, gdy zapisano je w ofercie. Dzięki temu późniejsze utrzymanie strony nie jest niespodzianką.</p>
              <Button asChild>
                <Link to={contactHref}>Poproś o wycenę zakresu <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className={sectionHeading}>Strony WWW Poznań: budowa stron internetowych i odbiór</h2>
            <p className={`${bodyText} mb-5`}>Realizację zaczynamy od ustalenia, jak treści i integracje mają wspierać rozwój Twojej firmy. Tworzymy profesjonalne strony internetowe jako funkcjonalne strony z konkretnym zakresem odbioru. Skuteczne strony internetowe prowadzą użytkownika do właściwej informacji lub działania, a każda firma ma w tym obszarze inne potrzeby. Specjalizujemy się w tworzeniu stron, dlatego tworzeniu stron internetowych dla firm towarzyszy analiza procesów, nie przypadkowa lista modułów.</p>
            <p className={`${bodyText} mb-5`}>W zakresie projektowania stron internetowych planujemy integracje oraz kolejne wersje strony. Realizujemy strony internetowe jako bezpieczne strony online: przed publikacją sprawdzamy uprawnienia, formularze i zgodność z przyjętym zakresem. Projektowanie stron internetowych w Poznaniu może uwzględniać sprzedaż lokalną i poza regionem, ale struktura nie powstaje przez kopiowanie lokalnych tekstów. Oprócz tworzenia stron uzgadniamy opiekę, a wykonanie strony dokumentujemy w ofercie. Przy realizacji strony po migracji, a w przypadku strony ze zmienionymi adresami, kontrolujemy przekierowania.</p>
            <h2 className={`${sectionHeading} mt-12`}>Podejście do tworzenia stron WWW w Poznaniu: pomiar efektów</h2>
            <p className={`${bodyText} mb-5`}>Mierzymy czas ładowania strony i widoczność Twojej strony w wynikach wyszukiwania, ale pozycję Twojej strony analizujemy razem z ruchem i zapytaniami. Responsywne strony internetowe testujemy na uzgodnionych widokach, a rozwój Twojej strony internetowej planujemy pod kątem wyszukiwarek internetowych oraz realnych potrzeb odbiorców. Na Twojej stronie WWW publikuj potrzebne treści; projektując strony w Poznaniu, unikamy lokalnych adresów bez zastosowania.</p>
            <h2 className={`${sectionHeading} mt-12`}>Wybór wykonawcy: jakie informacje podać o Twojej stronie?</h2>
            <p className={bodyText}>Przy wyborze wykonawcy strony porównaj proces, poprawki i dostęp do kodu. Doświadczenie w tworzeniu stron internetowych oceniaj przez podobne wyzwania, a zasady tworzenia strony — przez jasne akceptacje. Profesjonalnej strony WWW nie oceniaj wyłącznie po wyglądzie; koszt strony internetowej dla Twojej firmy sprawdź wraz z zakresem. Każda strona WWW wymaga aktualizacji. Strony internetowe tworzymy ze zdalnymi akceptacjami, bez deklarowania biura w Poznaniu.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <p className="text-primary text-sm font-medium mb-3">FAQ</p>
              <h2 className={sectionHeading}>Najczęstsze pytania — strona internetowa w Poznaniu</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={item.question} id={`poznan-faq-${index + 1}`} className="group rounded-xl border border-border/50 bg-card/50 px-6 py-5">
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
              <h2 className={sectionHeading}>Chcesz stworzyć stronę? Nowa strona internetowa — zakres w Twojej firmie</h2>
              <p className={`${bodyText} mb-7 max-w-2xl mx-auto`}>Opisz odbiorców, funkcje i materiały, abyśmy ustalili zakres oraz wycenę. W zakładce Strony internetowe znajdziesz opis usługi. Twoja strona WWW powinna obejmować tylko potrzebne funkcje; nowa strona WWW nie wymaga modułów bez zastosowania. Porozmawiajmy o Twojej stronie.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg"><Link to={contactHref}>Wyślij brief projektu <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Link></Button>
                <Button asChild variant="outline" size="lg"><Link to="/uslugi/tworzenie-stron-internetowych">Zobacz ogólną ofertę stron</Link></Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
