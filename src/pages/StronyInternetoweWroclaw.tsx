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

const seoTitle = "Strony internetowe Wrocław — projektowanie | FOTZ";
const seoDescription = "Profesjonalne strony internetowe Wrocław: projektowanie stron WWW, WordPress, sklepy internetowe i SEO. Sprawdź zakres prac oraz wycenę FOTZ.";
const canonicalUrl = "https://www.fotz-studio.pl/uslugi/strony-internetowe/wroclaw";
const pageTitle = "Projektowanie i tworzenie stron internetowych we Wrocławiu";
const serviceLead = "Profesjonalna strona WWW dla firm we Wrocławiu i okolicach: indywidualny projekt, wdrożenie, wygodny panel treści, integracje, techniczne SEO i pomiar zapytań.";
const contactHref = "/kontakt?usluga=web#formularz";

const projectTypes = [
  {
    icon: Globe,
    title: "Strona firmowa i wizytówka",
    text: "Strona wizytówka porządkuje podstawowe informacje o firmie, ofercie i kontakcie. Rozbudowana strona firmowa może prezentować osobne usługi, zespoły, aktualności i materiały do pobrania. Projektujemy strukturę dopasowaną do sposobu wyboru usługi przez klientów, bez tworzenia podstron, które nie mają konkretnego zadania.",
  },
  {
    icon: Layers3,
    title: "Landing page do kampanii",
    text: "Strona docelowa koncentruje się na jednej ofercie i działaniu: wysłaniu briefu, rezerwacji rozmowy albo zakupie. Układ argumentów, formularz i CTA dopasowujemy do źródła ruchu. Landing page może wspierać Google Ads lub kampanię w social mediach, ale budżet reklamowy i prowadzenie kampanii stanowią odrębny zakres.",
  },
  {
    icon: ShoppingCart,
    title: "Sklep internetowy i katalog",
    text: "Sklep internetowy wymaga opracowania katalogu, koszyka, płatności, dostaw i obsługi zamówień. Katalog bez sprzedaży online może natomiast prowadzić do zapytania o produkt. Przed projektem ustalamy model sprzedaży, liczbę wariantów, źródło danych oraz integracje, żeby dobrać właściwą technologię i zakres prac.",
  },
  {
    icon: Settings2,
    title: "Modernizacja i migracja",
    text: "Nowa strona może zastąpić przestarzałą witrynę bez utraty uporządkowanych treści i ważnych adresów. Analizujemy dotychczasową strukturę, wskazujemy materiały do aktualizacji i planujemy przekierowania. Migracja obejmuje uzgodnione kopie robocze, przeniesienie danych oraz kontrolę strony po publikacji, a nie automatyczne kopiowanie wszystkich treści.",
  },
];

const integrationItems = [
  {
    title: "Kontakt i obsługa zapytań",
    text: "Formularze mogą przekazywać zapytania na wskazany adres lub do CRM. Określamy wymagane pola, komunikaty błędów, zgody, zabezpieczenia antyspamowe i sposób testowania dostarczania wiadomości.",
  },
  {
    title: "Sprzedaż i płatności",
    text: "Dla sklepu lub płatnej oferty planujemy operatora płatności, metody dostawy, faktury i powiadomienia. Zakres zależy od wybranych usług zewnętrznych, ich dokumentacji oraz warunków umów i opłat.",
  },
  {
    title: "Analityka i marketing",
    text: "Konfigurujemy uzgodnione narzędzia pomiaru, zdarzenia i połączenie z systemem zarządzania zgodami. Integracja z Google Ads lub narzędziem mailingowym nie zastępuje strategii kampanii i pracy z treścią.",
  },
  {
    title: "Systemy firmowe i automatyzacje",
    text: "Możliwe jest połączenie z kalendarzem, systemem rezerwacji, ERP lub wewnętrznym API. Najpierw sprawdzamy dostęp, format danych i odpowiedzialność stron, a następnie opisujemy scenariusze błędów oraz sposób odbioru integracji.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Brief i cele",
    text: "Rozpoznajemy ofertę, odbiorców, konkurencję i cel strony. Ustalamy, jakie zapytania są wartościowe oraz jakie informacje klient potrzebuje przed kontaktem.",
  },
  {
    number: "02",
    title: "Zakres i architektura",
    text: "Porządkujemy podstrony, funkcje, materiały i integracje. Powstaje lista zadań z odpowiedzialnościami, etapami akceptacji i kryteriami odbioru projektu.",
  },
  {
    number: "03",
    title: "Prototyp i projekt graficzny",
    text: "Projektujemy nawigację, prototyp oraz interfejs UI/UX. Pokazujemy hierarchię treści i zachowanie na małych ekranach przed rozpoczęciem programowania.",
  },
  {
    number: "04",
    title: "Programowanie i panel",
    text: "Łączymy zaakceptowany design z kodem, treściami i panelem. W tym etapie konfigurujemy uzgodnione integracje, formularze i podstawy technicznego SEO.",
  },
  {
    number: "05",
    title: "Testy i poprawki",
    text: "Sprawdzamy widoki, linki, wysyłkę zapytań, przekierowania i zgodność z projektem. Klient otrzymuje możliwość zgłoszenia uwag w ustalonej formie i terminie.",
  },
  {
    number: "06",
    title: "Publikacja i przekazanie",
    text: "Po akceptacji uruchamiamy stronę, kontrolujemy indeksację i przekazujemy dostępy. Omawiamy także zakres opieki, aktualizacji i dalszego rozwoju strony.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje strona internetowa we Wrocławiu?",
    answer: "Cena zależy od liczby widoków i podstron, projektu graficznego, treści, panelu, integracji, wersji językowych i migracji. Po briefie otrzymasz wycenę z zakresem, etapami i warunkami odbioru. Nie stosujemy jednej sztywnej ceny dla każdej realizacji; koszt ustalamy dla konkretnych wymagań.",
  },
  {
    question: "Jak długo trwa stworzenie strony internetowej?",
    answer: "Termin zależy od złożoności, gotowości materiałów, liczby integracji i tempa akceptacji. Harmonogram przygotowujemy po ustaleniu zakresu i wskazujemy zadania po stronie klienta. Nie deklarujemy jednego czasu realizacji dla wizytówki, rozbudowanego serwisu i sklepu internetowego.",
  },
  {
    question: "Czy stronę będzie można samodzielnie edytować?",
    answer: "Tak, jeśli projekt obejmuje system CMS. Uzgadniamy, które treści i elementy mają być edytowalne, oraz przekazujemy dostępy i instrukcję. Panel administratora może obsługiwać ofertę, aktualności, zdjęcia lub produkty. Aktualizacje techniczne i utrzymanie strony internetowej są osobnym zagadnieniem opieki.",
  },
  {
    question: "Czy strona będzie responsywna i gotowa pod SEO?",
    answer: "Projektujemy responsywne strony internetowe i sprawdzamy kluczowe widoki na różnych szerokościach ekranu. Wdrożenie obejmuje uzgodnione podstawy technicznego SEO: metadane, nagłówki, adresy, dane strukturalne i kontrolę indeksacji. Pozycjonowanie stron internetowych to dalszy proces, a nie gwarancja pozycji w Google.",
  },
  {
    question: "Czym strona wizytówka różni się od landing page?",
    answer: "Wizytówka prezentuje firmę, ofertę i dane kontaktowe, często w kilku sekcjach lub podstronach. Landing page prowadzi odbiorcę do jednego działania i jest dopasowany do konkretnego źródła ruchu. Wybór zależy od celu, etapu decyzji klienta oraz planu rozwoju treści i kampanii.",
  },
  {
    question: "Czy tworzycie witryny na WordPressie i sklepy internetowe?",
    answer: "Tak, zakres może obejmować tę platformę, inny odpowiedni CMS, sklep internetowy albo dedykowane wdrożenie. Technologię wybieramy po analizie edycji treści, integracji, skali katalogu i wymagań technicznych. Nie zakładamy z góry, że jedna platforma będzie właściwa dla każdej firmy.",
  },
  {
    question: "Jakie materiały muszę przygotować do projektu?",
    answer: "Przydadzą się opis oferty, dane firmy, logo, zdjęcia, dotychczasowe treści i informacje o wymaganych funkcjach. Jeśli materiałów brakuje, copywriting, opracowanie zdjęć lub projektowanie logo możemy uwzględnić jako dodatkowy zakres. Dane do zgód i polityki prywatności wymagają zatwierdzenia przez klienta.",
  },
  {
    question: "Czy współpraca wymaga spotkań we Wrocławiu?",
    answer: "Projekt możemy prowadzić zdalnie: brief, prezentacje, akceptacje i przekazanie dostępów nie wymagają lokalnego biura we Wrocławiu. Formę kontaktu i spotkania ustalamy na początku. Przy porównywaniu wykonawców warto sprawdzić zakres, dotychczasowe realizacje, warunki poprawek, dostęp do kodu i opiekę po publikacji.",
  },
  {
    question: "Co dzieje się po uruchomieniu strony?",
    answer: "Po publikacji kontrolujemy uzgodnione elementy techniczne i przekazujemy materiały z projektu. Opieka może obejmować aktualizacje, kopie, monitoring, drobne zmiany i rozwój funkcji, zależnie od oferty. Pozycjonowanie stron, tworzenie treści i reklamy wymagają osobnych ustaleń; nie gwarantujemy liczby zapytań ani sprzedaży.",
  },
];

const sectionHeading = "text-3xl md:text-4xl font-heading font-bold mb-5";
const bodyText = "text-muted-foreground leading-relaxed";

export default function StronyInternetoweWroclaw() {
  return (
    <>
      <SEOHead title={seoTitle} description={seoDescription} canonical={canonicalUrl} />
      <ServiceSchema name={pageTitle} description={serviceLead} provider="FOTZ Studio" areaServed="Wrocław" />
      <BreadcrumbSchema items={[
        { name: "Strona główna", url: "https://www.fotz-studio.pl" },
        { name: "Strony internetowe", url: "https://www.fotz-studio.pl/uslugi/strony-internetowe" },
        { name: "Wrocław", url: canonicalUrl },
      ]} />
      <FAQSchema items={faqItems} />

      <Layout workPlacement="manual">
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="inline-flex items-center gap-2 px-4 py-2 mb-7 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Globe className="w-4 h-4" aria-hidden="true" /> Profesjonalne strony WWW dla firm z Wrocławia
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
              <h2 className={sectionHeading}>Tworzenie stron WWW dla firm z Wrocławia — zakres dopasowany do celu</h2>
              <p className={`${bodyText} mb-5`}>Profesjonalne tworzenie stron internetowych zaczynamy od pytania, co strona ma zmienić w firmie. Może uporządkować ofertę, skrócić drogę do kontaktu, wspierać sprzedaż albo ułatwić obsługę klientów. Funkcje należy projektować pod rzeczywiste czynności odbiorców i zespołu, a profesjonalny projekt graficzny powinien porządkować tę ścieżkę. Dzięki temu projekt strony internetowej odpowiada konkretnym potrzebom, a gotowa strona WWW nie powiela popularnego szablonu.</p>
              <p className={bodyText}>Dla firm z Wrocławia i całego Dolnego Śląska projektujemy strony internetowe oraz sklepy z uwzględnieniem lokalnego i ogólnopolskiego rynku. Lokalizacja pomaga określić kontekst oferty, ale nie zastępuje analizy odbiorców. Inne treści będą potrzebne firmie usługowej, inne producentowi, organizacji lub zespołowi B2B sprzedającemu poza regionem.</p>
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
              <h2 className={sectionHeading}>Projektowanie stron WWW Wrocław: od architektury do designu</h2>
              <p className={`${bodyText} mb-5`}>Dobry projekt graficzny zaczyna się przed wyborem kolorów. Najpierw układamy architekturę informacji: nazwy usług, kolejność argumentów, nawigację i drogę do CTA. Następnie projektujemy prototyp oraz design, który porządkuje treść i pomaga poruszać się po stronie. Nowoczesne strony internetowe nie muszą być przeładowane efektami; ważne są czytelność, spójność i wygodna obsługa.</p>
              <p className={bodyText}>Zakres może obejmować warsztat lub brief, analizę konkurencji, prototyp UX, projekt UI i bibliotekę powtarzalnych komponentów. Uzgadniamy także zasady dla formularzy, komunikatów i stanów pustych. Klient widzi kluczowe widoki przed programowaniem, dzięki czemu uwagi dotyczące układu można omówić, zanim powstanie kod.</p>
            </div>
            <div>
              <FileText className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Co dokładnie obejmuje realizacja?</h3>
              <p className={`${bodyText} mb-5`}>Oferta opisuje rezultaty i granice prac, a nie tylko nazwę pakietu. Dla stron WWW dla firm możemy zaplanować między innymi:</p>
              <ul className="space-y-3 mb-5">
                {[
                  "mapę podstron i prototyp najważniejszych ścieżek użytkownika",
                  "responsywny projekt interfejsu oraz wdrożenie zaakceptowanych widoków",
                  "konfigurację panelu, treści, formularzy i uzgodnionych integracji",
                  "podstawy technicznego SEO, testy i publikację na wskazanej domenie",
                  "instrukcję obsługi, przekazanie dostępów i ustalone warunki opieki",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className={bodyText}>Copywriting, sesja zdjęciowa, projektowanie logo, dodatkowe języki i rozbudowane funkcje są ujęte tylko wtedy, gdy znajdują się w zakresie. Taki opis ułatwia porównanie ofert i odbiór bez nieporozumień.</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <Layers3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Zakres tworzenia stron internetowych Wrocław: CMS i materiały</h2>
              <p className={`${bodyText} mb-5`}>System zarządzania treścią dobieramy do codziennej pracy zespołu. Strony WordPress sprawdzają się w wielu projektach redakcyjnych, ale czasem lepszy będzie inny CMS lub rozwiązanie dedykowane. Oceniamy rodzaj treści, uprawnienia, liczbę osób edytujących i planowane funkcje. Panel ma ułatwiać aktualizację oferty, a nie pozwalać przypadkiem zepsuć całego układu.</p>
              <p className={bodyText}>Na etapie projektowania stron określamy pola dla usług, artykułów, produktów i mediów. Pokazujemy, jak dodać lub zmienić treść oraz jak zadbać o obrazy i metadane. Po wdrożeniu przekazujemy uzgodnione uprawnienia administratora. Hosting, domena, kopie zapasowe i aktualizacje techniczne wymagają osobnego opisania odpowiedzialności.</p>
            </div>
            <div>
              <MessageSquare className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Jak przygotować treści i materiały?</h3>
              <p className={`${bodyText} mb-5`}>Do rozpoczęcia prac wystarczy uporządkowany opis firmy i rozmowa o klientach. Przydatne są teksty obecnej witryny, cennik lub sposób wyceny, dane kontaktowe, identyfikacja wizualna i zdjęcia z prawami do wykorzystania. W briefu warto też wskazać najczęstsze pytania odbiorców oraz argumenty, które pojawiają się w rozmowach sprzedażowych.</p>
              <p className={`${bodyText} mb-5`}>Możemy zaplanować copywriting i redakcję materiałów jako część projektu albo pracować na treściach dostarczonych przez klienta. W obu wariantach ustalamy terminy dostarczenia, osobę akceptującą i sposób zgłaszania uwag. Treści prawne, zgody oraz informacje branżowe powinny być zweryfikowane pod kątem rzeczywistej działalności.</p>
              <p className={bodyText}>Nie tworzymy fikcyjnych opinii, realizacji ani lokalnych wersji treści tylko po to, by zwiększyć liczbę słów. Treść ma pomagać w podjęciu decyzji i odpowiadać na pytania, zanim użytkownik skontaktuje się z firmą.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Integracje</p>
              <h2 className={sectionHeading}>Strona WWW połączona z narzędziami firmy</h2>
              <p className={bodyText}>Budowa stron internetowych często wykracza poza wygląd i panel. Integracje mogą skrócić obsługę zapytania, ograniczyć ręczne przepisywanie danych i połączyć stronę z procesem sprzedaży. Każdą z nich opisujemy osobno: źródło i cel danych, uwierzytelnienie, częstotliwość synchronizacji oraz zachowanie przy awarii. Dzięki temu wiadomo, co dokładnie podlega testom i odbiorowi.</p>
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
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-primary text-sm font-medium mb-3">Funkcjonalność i rozwój</p>
            <h2 className={sectionHeading}>Jak projektować strony internetowe dla klientów z Wrocławia i okolic?</h2>
            <p className={`${bodyText} mb-5`}>Budujemy strony internetowe dla klientów, którzy chcą uporządkować obecność firmy w internecie i przygotować serwis na kolejne etapy rozwoju. Strona internetowa dla firmy powinna odpowiadać na realne czynności zespołu. Funkcjonalność firmowej strony musi wynikać z obsługi klientów, a nie z przypadkowej listy modułów. Na etapie projektowania stron internetowych porównujemy prezentację oferty z czynnościami wykonywanymi przez zespół po wysłaniu zapytania. Ułatwia to wybór rozwiązań użytecznych w codziennej pracy.</p>
            <p className={`${bodyText} mb-5`}>Nowe witryny internetowe projektujemy tak, aby dało się rozbudować treści bez zmiany podstawowych założeń. Wspólne fundamenty stron i sklepów internetowych obejmują czytelną strukturę, bezpieczne formularze i możliwość aktualizacji. Inne wymagania ma jednak katalog produktów, a inne prosty serwis usługowy. Dlatego zakres dla stron internetowych i sklepów opisujemy oddzielnie, z uwzględnieniem danych, integracji i odpowiedzialności za ich utrzymanie.</p>
            <p className={bodyText}>Plan rozwoju Twojej strony internetowej może obejmować nowe podstrony, kolejne języki, dodatkowe integracje lub zmianę sposobu pomiaru. Po publikacji analizujemy, które elementy wymagają poprawy, zamiast rozbudowywać serwis bez celu. Warunki utrzymania strony internetowej ustalamy osobno od prac rozwojowych. Wykonanie strony internetowej lub sklepu wyceniamy z uwzględnieniem bieżącego zakresu oraz przygotowania na późniejsze etapy. Klient wie, które prace są potrzebne od razu, a które może zlecić po zebraniu danych i ustaleniu priorytetów.</p>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <MonitorSmartphone className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Responsywne strony internetowe i techniczne SEO</h2>
              <p className={`${bodyText} mb-5`}>Projektujemy strony responsywne z myślą o telefonie, tablecie i komputerze. Sprawdzamy nie tylko szerokość układu, lecz także czytelność tekstu, działanie menu, wielkość pól formularza i dostępność CTA. Optymalizacja obrazów, czcionek i kodu wspiera szybkie ładowanie, ale wynik Core Web Vitals należy zmierzyć na opublikowanej stronie i dla rzeczywistych warunków.</p>
              <p className={bodyText}>Techniczne SEO przygotowujemy jako fundament pod dalszą widoczność w wyszukiwarkach internetowych. Uporządkowane nagłówki, opisowe adresy URL, metadane i linkowanie wewnętrzne pomagają zrozumieć strukturę serwisu. Dane strukturalne muszą odpowiadać widocznej treści. Wyszukiwarka Google analizuje dostępne treści i zasoby, ale strony w Google nie pojawiają się wyłącznie dlatego, że wdrożono znaczniki schema.</p>
            </div>
            <div>
              <Search className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Co sprawdzamy przed publikacją?</h3>
              <ul className="space-y-3 mb-5">
                {[
                  "jednoznaczne H1 i logiczną hierarchię pozostałych nagłówków",
                  "title, description, kanoniczne adresy i ustawienia indeksacji",
                  "mapę serwisu, przekierowania oraz reakcję na nieistniejące adresy",
                  "linki wewnętrzne, nawigację i dostępność najważniejszych treści",
                  "formularze, komunikaty, zgody i działanie na urządzeniach mobilnych",
                  "obrazy, zasoby blokujące renderowanie i podstawy wydajności",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
              <p className={bodyText}>Pozycjonowanie stron obejmuje także badanie fraz, rozwój treści i pracę po publikacji. Do pozycjonowania nie wystarczy jednorazowa optymalizacja. Może być kolejnym etapem współpracy, ale nie obiecujemy określonej pozycji w wynikach wyszukiwania. Skuteczność zależy m.in. od konkurencji, jakości oferty, domeny i regularności działań.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="max-w-3xl mb-12">
              <p className="text-primary text-sm font-medium mb-3">Proces i odpowiedzialności</p>
              <h2 className={sectionHeading}>Jak wygląda proces tworzenia stron internetowych?</h2>
              <p className={bodyText}>Proces projektowania stron dzielimy na etapy z jasnym rezultatem i akceptacją. Na początku ustalamy, kto podejmuje decyzje, dostarcza materiały i zatwierdza poprawki. Jako agencja interaktywna odpowiadamy za uzgodniony projekt i wdrożenie, a klient za prawdziwość informacji o firmie oraz terminowe akceptacje. Zmiana zakresu w trakcie prac wymaga omówienia wpływu na harmonogram i wycenę.</p>
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
              <MessageSquare className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Co wpływa na liczbę zapytań ze strony firmowej?</h2>
              <p className={`${bodyText} mb-5`}>Podstawą efektywnej strony internetowej jest połączenie właściwego ruchu z odpowiedzią na potrzeby klienta. Użytkownik powinien szybko rozpoznać, co firma oferuje, dla kogo pracuje i jaki jest następny krok. Jeśli komunikat jest zbyt ogólny, nawet dobrze zaprojektowany interfejs nie pomoże w podjęciu decyzji. Dlatego treści powstają z informacji o realnych problemach odbiorców, a nie z listy fraz do mechanicznego umieszczenia w tekście.</p>
              <p className={`${bodyText} mb-5`}>Na drogę do kontaktu wpływają także wiarygodne dane, jasne warunki i forma CTA dopasowana do gotowości klienta. Osoba porównująca wykonawców może potrzebować zakresu i przykładów pracy, a klient gotowy do rozmowy — krótkiego formularza. Telefon, brief i konsultacja powinny mieć zrozumiałe etykiety. Nie ukrywamy kluczowych informacji za przyciskami ani nie obiecujemy rezultatu, którego nie da się potwierdzić.</p>
              <ul className="space-y-3">
                {[
                  "oferta i komunikat dopasowane do intencji wyszukiwania",
                  "czytelna prezentacja usług, obszaru działania i warunków współpracy",
                  "szybki, responsywny interfejs oraz dostępne formularze",
                  "krótka droga do kontaktu i jasne informacje po wysłaniu zapytania",
                  "pomiar zdarzeń oraz wnioski oparte na rzeczywistych danych",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <Layers3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h3 className="text-2xl font-heading font-bold mb-5">Czy jedna strona wystarczy, aby docierać do klientów z Wrocławia?</h3>
              <p className={`${bodyText} mb-5`}>Jedna strona może wystarczyć na start, gdy oferta jest wąska, a użytkownik podejmuje decyzję po krótkiej prezentacji. Wraz z rozwojem firmy warto jednak rozdzielić usługi, które odpowiadają na różne potrzeby. Osobne podstrony pozwalają dokładniej opisać proces, warunki i odbiorców każdej usługi. Decyzję o rozbudowie podejmujemy na podstawie oferty i danych, a nie zasady, że większa liczba adresów zawsze jest lepsza.</p>
              <p className={`${bodyText} mb-5`}>Dla lokalnej widoczności ważne są spójne dane firmy, rzeczywisty obszar świadczenia usług i treści przydatne odbiorcom z danego rynku. Profil Firmy w Google, linki oraz pozycjonowanie lokalne mogą uzupełniać pracę nad serwisem, ale są odrębnymi działaniami. Nie tworzymy pozbawionych wartości stron dla dzielnic ani nie sugerujemy obecności w miejscach, w których firma nie działa.</p>
              <p className={bodyText}>Strona przygotowana pod kampanię Google Ads powinna odpowiadać treści reklamy i prowadzić do uzgodnionego działania. Przed uruchomieniem kampanii sprawdzamy stronę docelową, formularz i konfigurację pomiaru. Dalsza optymalizacja obejmuje analizę zapytań oraz zachowań użytkowników. Budżet reklamowy, prowadzenie kampanii i zmiany strony opisujemy osobno, aby zakres odpowiedzialności był jasny.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-2 gap-12">
            <div>
              <BarChart3 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Jak mierzyć widoczność i zapytania ze strony?</h2>
              <p className={`${bodyText} mb-5`}>Po publikacji warto rozdzielić trzy poziomy pomiaru: widoczność, ruch i działania użytkowników. Google Search Console pokazuje m.in. zapytania i strony docelowe; analizujemy też wyniki wyszukiwania pod kątem widoczności oferty. Narzędzie analityczne może rejestrować uzgodnione zdarzenia, takie jak wysłanie formularza, kliknięcie telefonu czy rozpoczęcie rezerwacji, z uwzględnieniem prywatności i trybu zgód.</p>
              <p className={bodyText}>Samo wejście na stronę nie oznacza wartościowego leada, a pozycja frazy nie mówi nic o jakości zapytania. Dlatego wspólnie definiujemy zdarzenia i sposób ich weryfikacji, a w raporcie oddzielamy ruch organiczny od Google Ads. Nie przypisujemy stronie wyników sprzedaży bez danych i bez uwzględnienia pracy zespołu obsługującego klientów.</p>
            </div>
            <div>
              <Settings2 className="w-8 h-8 text-primary mb-5" aria-hidden="true" />
              <h2 className={sectionHeading}>Od czego zależy wycena strony WWW?</h2>
              <p className={`${bodyText} mb-5`}>Cena strony internetowej zależy od liczby indywidualnych widoków, podstron, treści, wersji językowych i funkcji. Na koszt wpływają również CMS, integracje, przeniesienie danych, testy oraz wymagania dotyczące dostępności i wydajności. Koszt wykonania strony lub sklepu ustalamy po briefie; przedział cenowy bez zakresu nie pozwala rzetelnie porównać ofert.</p>
              <p className={`${bodyText} mb-5`}>Wycena powinna wskazywać etapy, liczbę lub sposób obsługi poprawek, materiały klienta, warunki publikacji i przekazania dostępów. Domena, hosting, płatne licencje, opieka, pozycjonowanie i budżet reklamowy są kosztami projektu tylko wtedy, gdy wyraźnie zapisano je w ofercie. Dzięki temu późniejsze utrzymanie strony nie jest niespodzianką.</p>
              <Button asChild>
                <Link to={contactHref}>Poproś o wycenę zakresu <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" /></Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className={sectionHeading}>Strony internetowe dla firm we Wrocławiu — jak wybrać wykonawcę?</h2>
            <p className={`${bodyText} mb-5`}>Wybierając agencję lub freelancera, porównaj sposób pracy, a nie wyłącznie prezentację oferty. Zapytaj, kto projektuje i programuje, jak wygląda akceptacja, co stanie się z kodem i dostępami oraz kto odpowiada za formularze po publikacji. Portfolio stron internetowych warto oceniać pod kątem czytelności, funkcji i podobnych wyzwań, nie tylko atrakcyjnych zrzutów ekranu.</p>
            <p className={`${bodyText} mb-5`}>Profesjonalna strona internetowa powinna mieć właściciela treści i plan rozwoju. Przed podpisaniem umowy ustal, czy możesz samodzielnie zmieniać ofertę, jak działają kopie i aktualizacje oraz jak wyceniane są nowe funkcje. Jasne warunki są ważniejsze niż obietnica natychmiastowego pozyskiwania nowych klientów z internetu.</p>
            <p className={bodyText}>Współpracę z firmami z Wrocławia możemy prowadzić zdalnie, z prezentacjami i akceptacjami online. Nie deklarujemy lokalnego biura we Wrocławiu. Lokalny kontekst uwzględniamy w treści i strukturze oferty, natomiast obszar działania firmy, język komunikacji i sposób kontaktu ustalamy na podstawie rzeczywistych potrzeb klienta.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-10">
              <p className="text-primary text-sm font-medium mb-3">FAQ</p>
              <h2 className={sectionHeading}>Najczęstsze pytania o strony internetowe we Wrocławiu</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <details key={item.question} id={`wroclaw-faq-${index + 1}`} className="group rounded-xl border border-border/50 bg-card/50 px-6 py-5">
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
              <p className={`${bodyText} mb-7 max-w-2xl mx-auto`}>Napisz, czy potrzebujesz strony firmowej, landing page, sklepu czy modernizacji obecnej witryny. Opisz odbiorców, najważniejsze funkcje i materiały, które już masz. Na tej podstawie ustalimy informacje potrzebne do wyceny, właściwy zakres prac i kolejny krok współpracy.</p>
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
