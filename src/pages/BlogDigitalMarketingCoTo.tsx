import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clock,
  Globe,
  Handshake,
  Mail,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const pageTitle = "Digital marketing — co to jest i jak zacząć? | FOTZ";
const pageDescription = "Digital marketing (marketing cyfrowy): definicja, kanały online i przykład strategii dla małej firmy. Zobacz, jak zacząć i mierzyć leady bez zgadywania.";
const pageUrl = "https://www.fotz-studio.pl/blog/digital-marketing-co-to";

export default function BlogDigitalMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Digital marketing — co to jest i jak zacząć?" },
  ];

  const digitalChannels = [
    {
      icon: Search,
      name: "SEO i content marketing",
      description:
        "SEO (search engine optimization) poprawia widoczność strony w organicznych wynikach wyszukiwarki. Content marketing odpowiada na pytania odbiorców przez artykuły, poradniki, wideo czy infografiki. Ten kanał warto rozważyć, gdy klienci szukają informacji o produktach lub usługach, a firma może regularnie rozwijać merytoryczne treści. Mierz nie tylko ruch na stronie, lecz także zapytania i sprzedaż przypisaną do wejść z wyszukiwarki.",
    },
    {
      icon: Target,
      name: "Google Ads, SEM i PPC",
      description:
        "Płatne kampanie w wyszukiwarkach pozwalają kierować reklamy na wybrane słowa kluczowe, lokalizacje i strony docelowe. Model PPC oznacza rozliczenie za kliknięcia, ale kliknięcie w reklamę nie jest jeszcze leadem. Google Ads może pomóc sprawdzić popyt i przekaz przy aktywnie poszukiwanej ofercie. Warunkiem sensownego testu są działająca strona, kontrola budżetu reklamowego i pomiar jakości zapytań.",
    },
    {
      icon: Share2,
      name: "Social media marketing",
      description:
        "Media społecznościowe, m.in. Facebook, Instagram, LinkedIn czy TikTok, łączą publikacje organiczne, obsługę społeczności i reklamy. Sprawdzają się do budowania relacji z odbiorcami, pokazywania realizacji i wspierania rozpoznawalności marki. Platformę wybieraj według obecności grupy docelowej, a nie mody. Zasięg i zaangażowanie są pomocnicze; przy celu sprzedażowym sprawdzaj również leady i ich jakość.",
    },
    {
      icon: Mail,
      name: "E-mail marketing i newsletter",
      description:
        "E-mail marketing wykorzystuje zgodę odbiorcy na kontakt, np. po zapisie do newslettera. Może wspierać obsługę obecnych klientów, edukację przed zakupem i przypomnienie o ofercie. Potrzebuje wartościowego powodu zapisu, uporządkowanej bazy oraz zgodności z przepisami. Oceniaj nie samą liczbę wysłanych wiadomości, lecz odpowiedzi, rejestracje, zamówienia i wypisy.",
    },
    {
      icon: Bot,
      name: "Automatyzacja i AI",
      description:
        "Automatyzacja porządkuje powtarzalne działania, np. segmentację kontaktów czy sekwencję wiadomości po zapisie. Wykorzystanie AI w marketingu może przyspieszyć research i tworzenie wersji roboczych, ale wymaga sprawdzenia faktów, tonu marki oraz ochrony danych. Technologia nie zastąpi właściwego doboru oferty, grupy docelowej i celu kampanii.",
    },
    {
      icon: Handshake,
      name: "Marketing afiliacyjny i współprace",
      description:
        "Marketing afiliacyjny polega na wynagradzaniu partnera za ustalone działanie, na przykład sprzedaż z jego linku. We współpracach z twórcami istotne są dopasowanie widowni, jasne oznaczenie reklamy i reguły rozliczenia. Ten kanał może poszerzyć zasięg, lecz wymaga kontroli jakości ruchu, wiarygodności partnerów i spójności przekazu z marką.",
    },
  ];

  const strategySteps = [
    {
      title: "1. Zapisz cel biznesowy i punkt wyjścia",
      text: "Ustal, czy chodzi o kwalifikowane leady, sprzedaż w e-commerce, rezerwacje czy świadomość marki. Zanotuj obecną liczbę zapytań, sprzedaż, sezonowość i zdolność zespołu do obsługi nowych klientów. Cele biznesowe powinny wyznaczać wskaźniki, a nie odwrotnie.",
    },
    {
      title: "2. Opisz grupę docelową i intencję",
      text: "Określ, do kogo kierujesz ofertę, jaki problem rozwiązujesz i jakie pytania pojawiają się przed zakupem. Rozmowy z klientami oraz zapytania do obsługi sprzedaży pomagają lepiej niż sama ogólna persona. Odbiorca porównujący oferty potrzebuje innych treści niż osoba poznająca temat.",
    },
    {
      title: "3. Przygotuj stronę i drogę kontaktu",
      text: "Strona internetowa powinna jasno wyjaśniać ofertę, ograniczenia, obszar działania i następny krok. Sprawdź formularz, telefon, szybkość oraz wygodę na urządzeniu mobilnym. Kampanie marketingowe nie naprawią niejasnej oferty ani niedziałającego formularza.",
    },
    {
      title: "4. Wybierz jeden lub dwa kanały na start",
      text: "Weź pod uwagę intencję zakupową, długość decyzji, dostępne materiały, czas zespołu i budżet. SEO oraz content marketing wymagają cierpliwej pracy nad treściami, a płatna reklama ponoszenia kosztu mediów. Nie musisz być na każdej platformie jednocześnie.",
    },
    {
      title: "5. Zaplanuj test i pełny koszt",
      text: "Zapisz zakres prac, osobę odpowiedzialną, termin i warunek podjęcia decyzji. Do budżetu wlicz przygotowanie strategii, treści i kreacji, stronę docelową, narzędzia, czas zespołu, obsługę oraz wydatki reklamowe. Ustal kwotę, którą możesz przeznaczyć na wiarygodny test bez obietnicy wyniku.",
    },
    {
      title: "6. Mierz, porównuj i poprawiaj",
      text: "Po uruchomieniu analizuj dane w regularnych odstępach, zachowując ostrożność przy małej liczbie obserwacji. Sprawdzaj drogę od kanału do leada i klienta. Zmieniaj jeden istotny element naraz, np. stronę docelową lub przekaz, aby łatwiej ocenić wpływ optymalizacji.",
    },
  ];

  const faqItems = [
    {
      question: "Co to jest digital marketing?",
      answer:
        "Digital marketing, czyli marketing cyfrowy, to planowanie i prowadzenie komunikacji, sprzedaży oraz obsługi klientów w kanałach cyfrowych. Obejmuje m.in. SEO, content marketing, Google Ads, media społecznościowe, e-mail marketing, automatyzację i analitykę. Nie sprowadza się wyłącznie do reklamy ani do obecności w social mediach.",
    },
    {
      question: "Czy digital marketing i marketing internetowy to to samo?",
      answer:
        "W praktyce te pojęcia są często używane zamiennie, bo większość działań odbywa się online. Marketing cyfrowy może jednak obejmować także inne kanały cyfrowe, np. SMS-y lub komunikację w aplikacji. Ważniejsza od nazwy jest lista działań, odbiorców i wskaźników zapisanych w strategii.",
    },
    {
      question: "Od czego zacząć digital marketing w małej firmie?",
      answer:
        "Zacznij od celu, rozmów z klientami i sprawdzenia strony oraz formularza. Następnie wybierz jeden lub dwa kanały dopasowane do intencji odbiorców i zasobów firmy. Przed pierwszą kampanią skonfiguruj pomiar zapytań, ustal pełny koszt testu i sposób oceny jakości leadów.",
    },
    {
      question: "Ile kosztuje digital marketing?",
      answer:
        "Nie ma jednej ceny, ponieważ koszt zależy od zakresu, konkurencji, stanu strony, liczby kanałów i tego, co firma wykona samodzielnie. Odrębnie oszacuj pracę nad strategią, treściami i stroną, narzędzia, obsługę oraz budżet reklamowy. Porównuj oferty po zakresie i sposobie raportowania, nie po obietnicy zwrotu.",
    },
    {
      question: "Który kanał digital marketingu jest najlepszy?",
      answer:
        "Nie ma kanału najlepszego dla każdej firmy. SEO i treści mogą odpowiadać na aktywnie poszukiwane informacje, Google Ads na intencję zakupową, a social media wspierać relacje i rozpoznawalność. E-mail marketing bywa przydatny przy własnej bazie kontaktów. Wybór zależy od klientów, marży, cyklu sprzedaży i możliwości pomiaru.",
    },
    {
      question: "Jak mierzyć skuteczność digital marketingu?",
      answer:
        "Połącz dane z analityki, reklam i CRM lub arkusza sprzedaży. Mierz liczbę oraz jakość leadów, współczynnik konwersji, koszt kwalifikowanego leada, CAC i przychód lub marżę. W SEO obserwuj też zapytania i widoczność w Search Console. O wyniku decyduj na podstawie spójnych okresów i znanych ograniczeń atrybucji.",
    },
    {
      question: "Czy AI zastąpi specjalistę digital marketingu?",
      answer:
        "AI może wspierać analizę, research i produkcję wersji roboczych, ale nie gwarantuje trafnych decyzji. Marketing manager lub właściciel nadal musi zdefiniować cel, sprawdzić informacje, zadbać o dane i ocenić jakość pytań od klientów. Narzędzie warto dobierać do konkretnego zadania, nie jako zamiennik całej strategii.",
    },
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        keywords="digital marketing co to, czym jest digital marketing, marketing cyfrowy, jak działa digital marketing, strategia digital marketingu, kanały digital marketingu"
      />
      <ArticleSchema
        title="Digital marketing od podstaw — co to jest, jak działa i jak zacząć?"
        description={pageDescription}
        datePublished="2025-04-09"
        dateModified="2026-11-02"
        url={pageUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <article>
          <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
                  <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> Marketing online</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Digital marketing od podstaw — co to jest, jak działa i jak zacząć?
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed">
                  Digital marketing to działania marketingowe prowadzone w kanałach cyfrowych: od SEO i treści po reklamy, e-mail oraz analitykę. Jego zadaniem jest połączyć potrzeby odbiorców z ofertą firmy i zmierzyć, co dzieje się po dotarciu do użytkownika.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <FadeInView>
                <nav aria-label="Spis treści" className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-10">
                  <p className="font-bold text-slate-900 mb-3">W tym przewodniku</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-slate-700">
                    <li><a className="hover:text-blue-600 hover:underline" href="#definicja">Czym jest digital marketing i marketing cyfrowy?</a></li>
                    <li><a className="hover:text-blue-600 hover:underline" href="#jak-dziala">Jak działa digital marketing i reklama online?</a></li>
                    <li><a className="hover:text-blue-600 hover:underline" href="#kanaly">Kanały i warunki ich wyboru</a></li>
                    <li><a className="hover:text-blue-600 hover:underline" href="#strategia">Jak zbudować strategię krok po kroku?</a></li>
                    <li><a className="hover:text-blue-600 hover:underline" href="#przyklad">Przykład małej strategii</a></li>
                    <li><a className="hover:text-blue-600 hover:underline" href="#pomiar">Pomiar leadów, kosztów i zwrotu</a></li>
                  </ol>
                </nav>
              </FadeInView>

              <FadeInView>
                <h2 id="definicja" className="text-2xl font-bold text-slate-900 mt-4 mb-4">Czym jest digital marketing i marketing cyfrowy?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Digital marketing, nazywany też marketingiem cyfrowym, obejmuje poznawanie potrzeb klientów, przygotowanie oferty i treści, dotarcie do odbiorców, obsługę kontaktu oraz analizę wyników w środowisku cyfrowym. Reklama internetowa jest tylko jednym z jego elementów. Równie ważne mogą być witryna, obsługa zapytań i doskonalenie doświadczenia użytkownika.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Pojęcia digital marketing, marketing digitalowy i marketing internetowy bywają używane zamiennie. Ściślej, marketing cyfrowy może obejmować również SMS-y, aplikacje i inne kanały cyfrowe, natomiast marketing online koncentruje się na internecie. W codziennym planie firmy najważniejsze jest jednak nie rozstrzyganie nazw, lecz określenie ludzi, problemów i działań, których dotyczy strategia.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Ten przewodnik wyjaśnia digital marketing od podstaw i pokazuje, jak połączyć działania w kanałach komunikacji w prostą strategię. Nie znajdziesz tu uniwersalnych mnożników ROI. Wynik zależy m.in. od oferty, marży, konkurencji, jakości realizacji, sezonu i sposobu przypisywania sprzedaży do działań marketingowych.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-5 mb-8">
                  <p className="text-blue-900 font-semibold mb-1">W skrócie</p>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    Skuteczna strategia digital marketingu łączy konkretny cel, właściwą grupę odbiorców, dopasowany kanał, użyteczną stronę i pomiar prowadzący aż do jakości leada lub sprzedaży.
                  </p>
                </div>
              </FadeInView>

              <FadeInView>
                <h2 id="jak-dziala" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Jak działa digital marketing i reklama online w praktyce?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Digital marketing działa jako ciąg połączonych decyzji, a nie pojedyncza publikacja lub kampania reklamowa. Potencjalny klient najpierw napotyka treść albo reklamę, następnie ocenia ofertę i dopiero później może wysłać zapytanie, zadzwonić lub kupić. Na każdym etapie może też przerwać proces, dlatego trzeba badać całą ścieżkę.
                </p>
                <ul className="space-y-3 mb-5">
                  <li className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span><strong>Dotarcie:</strong> kanał i przekaz pomagają zaprezentować ofertę właściwym odbiorcom. Precyzyjne targetowanie zawęża grupę, ale nie gwarantuje jej zainteresowania.</span></li>
                  <li className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span><strong>Odpowiedź na intencję:</strong> strona docelowa lub treść wyjaśnia problem, korzyść, warunki i następny krok. Inna treść wspiera rozpoznawalność, a inna decyzję zakupową.</span></li>
                  <li className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span><strong>Działanie użytkownika:</strong> formularz, rozmowa lub zakup zamienia zainteresowanie w mierzalny sygnał. Lead trzeba następnie ocenić pod kątem zgodności z ofertą.</span></li>
                  <li className="flex gap-3 text-slate-700 leading-relaxed"><CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-1" /><span><strong>Sprzężenie zwrotne:</strong> analiza danych i informacji ze sprzedaży pokazuje, które kampanie, treści oraz frazy przyciągają wartościowe zapytania, a które wymagają zmiany.</span></li>
                </ul>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Działania inbound pomagają klientowi znaleźć firmę, gdy szuka odpowiedzi, np. przez SEO i poradniki. Outbound kieruje przekaz do wybranej grupy, np. w reklamie. Performance marketing natomiast koncentruje się na mierzalnych działaniach i optymalizacji kosztu. Digital marketing może łączyć te podejścia, ale obejmuje też badania, markę i relacje z klientami, których nie oddaje jeden wskaźnik.
                </p>
              </FadeInView>

              <FadeInView>
                <h2 id="kanaly" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Kanały digital marketingu: SEO, PPC i social media</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Poszczególne rozwiązania najlepiej porównywać według roli w procesie zakupowym i dostępnych zasobów, a nie według obiecywanej skuteczności. Poniżej znajdziesz praktyczne warunki wyboru. Jeden kanał może pełnić kilka funkcji, a strategie digital często łączą dotarcie, edukację i późniejszy kontakt.
                </p>
                <div className="space-y-4 mb-8">
                  {digitalChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <section key={channel.name} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                        <Icon className="w-5 h-5 text-blue-600 mb-2" />
                        <h3 className="font-bold text-slate-900 mb-2">{channel.name}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{channel.description}</p>
                      </section>
                    );
                  })}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Przy usłudze lokalnej punktem wyjścia mogą być widoczność na frazy związane z problemem i prosta strona oferty. W B2B często potrzebne są materiały wyjaśniające złożoną decyzję oraz uporządkowana obsługa leadów. W sklepie internetowym warto osobno analizować katalog produktów, koszt reklam i powtórne zakupy. To przykładowe kierunki, nie gotowe recepty — przed wyborem sprawdź własne dane.
                </p>
              </FadeInView>

              <FadeInView>
                <h2 id="strategia" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Jak budować strategię digital marketingową krok po kroku?</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Aby zacząć digital marketing bez rozpraszania budżetu, przygotuj krótki dokument mieszczący się na jednej stronie. Zapisz w nim decyzje z poniższej listy. Plan ma porządkować pracę i umożliwiać wnioski, a nie udowadniać za wszelką cenę skuteczność wybranego narzędzia.
                </p>
                <div className="space-y-5 mb-8">
                  {strategySteps.map((step) => (
                    <div key={step.title}>
                      <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </FadeInView>

              <FadeInView>
                <h2 id="przyklad" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Przykład małej strategii dla firmy usługowej</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Wyobraźmy sobie hipotetyczną, jednoosobową firmę naprawczą działającą w jednym mieście. Jej celem nie jest „więcej ruchu”, lecz pozyskiwanie zapytań o usługi, które firma rzeczywiście wykonuje. Właściciel może odpowiadać na ograniczoną liczbę zgłoszeń, dlatego jakość i obszar zapytań są równie ważne jak ich liczba.
                </p>
                <ol className="list-decimal list-inside space-y-3 text-slate-700 leading-relaxed mb-5">
                  <li><strong>Porządek na początek:</strong> firma tworzy stronę jednej usługi z zakresem prac, lokalizacją, odpowiedziami na częste pytania, numerem telefonu i krótkim formularzem. Testuje wysyłkę na telefonie i zapisuje zgodę na kontakt wymaganą w danym przypadku.</li>
                  <li><strong>Treści odpowiadające na potrzeby:</strong> na podstawie rozmów z klientami przygotowuje trzy poradniki: jak rozpoznać usterkę, kiedy zgłosić problem specjaliście i od czego zależy koszt naprawy. Nie podaje sztywnej ceny bez diagnozy, lecz wyjaśnia czynniki wyceny.</li>
                  <li><strong>Ograniczony test kanału:</strong> firma optymalizuje stronę pod pozycjonowanie i uruchamia niewielką kampanię Google Ads tylko na usługi oraz obszar, który obsługuje. Osobno rejestruje wejścia organiczne i płatne, zamiast oceniać je łącznie.</li>
                  <li><strong>Obsługa i przegląd:</strong> właściciel zapisuje każde zapytanie w arkuszu, oznacza jego źródło, temat i rezultat. Po uzgodnionym okresie sprawdza zgodność leadów z ofertą, koszty oraz powody odrzuceń, a dopiero potem decyduje o zmianie lub zwiększeniu budżetu.</li>
                </ol>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Taki plan nie gwarantuje określonej sprzedaży. Daje natomiast możliwość wykrycia konkretnych problemów: nietrafnych fraz, zbyt szerokiego obszaru reklamy, niejasnej strony albo braku odpowiedzi na pytania klientów. Jeśli zespół nie ma czasu na regularne publikacje, lepiej ograniczyć liczbę kanałów i najpierw dopracować pomiar.
                </p>
              </FadeInView>

              <FadeInView>
                <h2 id="pomiar" className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pomiar leadów i wskaźniki skutecznej strategii</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Zacznij od definicji. Lead to zidentyfikowany kontakt z potencjalnym klientem, np. poprawnie wysłane zapytanie lub rozmowa o ofercie. Kwalifikowany lead spełnia dodatkowo ustalone warunki: dotyczy właściwej usługi, lokalizacji i realnej potrzeby. Oddzielenie tych pojęć zapobiega chwaleniu się zgłoszeniami, których firma nie może obsłużyć.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Co połączyć w jednym rejestrze?</h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  W analityce oznacz wysłanie formularza i inne istotne działania, a w linkach kampanii stosuj spójne parametry UTM. Dane z formularza lub systemu reklamowego przekazuj do CRM albo prostego arkusza. Zapisuj datę, usługę, źródło i kampanię, status kwalifikacji, powód odrzucenia, etap sprzedaży oraz — jeśli to możliwe — przychód i marżę. Pilnuj deduplikacji zgłoszeń i zasad dostępu do danych osobowych.
                </p>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Które wskaźniki mają znaczenie?</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700 leading-relaxed mb-4">
                  <li><strong>Współczynnik konwersji:</strong> liczba wybranych działań podzielona przez liczbę sesji lub użytkowników, zawsze z jasno nazwanym mianownikiem.</li>
                  <li><strong>CPL:</strong> koszt działań podzielony przez liczbę leadów. Osobno licz koszt leada kwalifikowanego, uwzględniając ten sam pełny zakres kosztów.</li>
                  <li><strong>CAC:</strong> koszty marketingu i sprzedaży przypisane do pozyskania nowych klientów podzielone przez ich liczbę.</li>
                  <li><strong>ROAS:</strong> przychód przypisany do reklamy podzielony przez koszt reklamy. Nie jest tym samym co ROI, bo pomija m.in. marżę i pozostałe koszty.</li>
                  <li><strong>Zwrot z inwestycji:</strong> ROI obliczaj jako (zwrot − koszt) / koszt × 100%, najpierw definiując, czy „zwrot” oznacza przypisaną marżę, i które koszty uwzględniasz.</li>
                </ul>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 mb-5">
                  <p className="font-semibold text-slate-900 mb-2">Przykład rachunku, nie benchmark</p>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    Jeśli hipotetyczny miesięczny test kosztuje 4000 zł i generuje 20 leadów, CPL wynosi 200 zł. Gdy tylko 5 zgłoszeń jest zgodnych z ofertą, koszt kwalifikowanego leada wynosi 800 zł. Ten rachunek nie mówi jeszcze, czy działanie jest opłacalne — potrzebna jest informacja o sprzedaży, marży i pełnych kosztach obsługi.
                  </p>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">
                  W SEO pomocne są Google Search Console i analityka strony. Jeżeli ważne zapytanie znajduje się blisko pierwszej strony wyników, czyli w tzw. striking distance, sprawdź, czy odpowiadająca mu strona rzeczywiście wyjaśnia intencję i zachęca do kliknięcia. Uzupiełnij brakujące informacje, tytuł i opis, a potem porównaj tę samą parę zapytanie–URL w kolejnym okresie. Sama pozycja nie dowodzi liczby leadów.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Pamiętaj też o ograniczeniach atrybucji. Klient może najpierw przeczytać poradnik, później kliknąć reklamę i ostatecznie zadzwonić. Model ostatniego kliknięcia nie pokaże całej ścieżki, a część kontaktów offline wymaga ręcznego oznaczenia. Porównuj spójne okresy, zaznaczaj sezonowość i nie wyciągaj daleko idących wniosków z kilku zgłoszeń.
                </p>
              </FadeInView>

              <FadeInView>
                <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Jak optymalizować strategię i unikać typowych błędów?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Optymalizacja powinna odpowiadać na konkretny problem. Jeśli kampania generuje kliknięcia, ale konwersja nie jest poprawnie zdefiniowana, nie ocenisz jej wartości. Reklama, która próbuje promować wszystkie produkty lub usługi naraz, dodatkowo zaciera przekaz. Precyzyjny dobór jednej oferty i grupy odbiorców ułatwia test. Zanim zwiększysz budżet marketingowy, sprawdź spójność frazy, reklamy, strony i oczekiwań klienta.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Inny błąd to ocenianie każdego kanału tak samo. Marketing w wyszukiwarkach obejmuje SEO i płatne kampanie, lecz każdy z tych obszarów ma inny rytm pracy. Płatny kanał może szybko dostarczyć dane o reakcji na przekaz, natomiast proces pozycjonowania wymaga dłuższej obserwacji. Zanim zwiększysz zasięg, ustal, do kogo chcesz dotrzeć i po jakim czasie kampania zostanie oceniona.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  W skutecznej strategii analizie danych z panelu reklamowego towarzyszy informacja ze sprzedaży. Sprawdź, czy zespół skontaktował się z leadem, dlaczego odrzucił zapytanie i czy pozyskanie potencjalnego klienta zakończyło się zakupem. Dzięki temu raport marketingowy pokaże jakość, a nie tylko aktywność. Różne strategie wymagają różnych wskaźników i terminów decyzji.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Dbaj też o spójność. Odbiorca docelowy powinien rozpoznać tę samą ofertę w treści, reklamie i rozmowie. Platforma, kanał społecznościowy, newsletter i strona internetowa mogą pełnić różne role, ale wszystkie kanały komunikacji powinny wynikać z jednej strategii digital marketingowej. Poradnik, wideo czy infografika mogą wyjaśniać problem, a email marketing podtrzymywać kontakt. Zamiast budować obecność wszędzie, wybierz działania, które pomagają budować relacje z odbiorcami i mierz ich wkład. Rozpoznawalność marki może być jednym z celów, ale nie zastępuje oceny jakości zapytań.
                </p>
              </FadeInView>

              <FadeInView>
                <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Ile kosztuje marketing internetowy i jak planować budżet?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Zamiast sztywnego cennika potrzebna jest lista prac i założeń. Na koszt wpływają stan strony, liczba produktów lub usług, konkurencyjność rynku, wymagane treści i kreacje, narzędzia, obsługa kampanii oraz wydatki na media. Inny będzie koszt jednorazowego uporządkowania pomiaru, a inny comiesięcznej pracy w kilku kanałach.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Budżet testu powinien być akceptowalny nawet wtedy, gdy wynik okaże się negatywny. Ustal z góry, jakie dane pozwolą kontynuować, zmienić lub zatrzymać działania. Marketing tradycyjny i online mogą uzupełniać się, dlatego oceniaj budżet w kontekście całego procesu sprzedaży, a nie tylko ceny pojedynczego kliknięcia.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                  <p className="text-blue-800 font-semibold mb-2">Potrzebujesz uporządkować digital marketing w firmie?</p>
                  <p className="text-blue-700 text-sm leading-relaxed mb-3">
                    Możemy pomóc dobrać zakres do celu i istniejących zasobów, przygotować stronę, treści lub kampanię oraz ustawić mierzenie zapytań. Zakres i warunki ustalamy przed rozpoczęciem pracy, bez gwarancji wyniku sprzedażowego.
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    <Link to="/uslugi/marketing-internetowy" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                      Marketing internetowy — oferta <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/seo" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                      Usługi SEO <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/performance-marketing" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                      Performance marketing <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                      Kontakt z FOTZ Studio <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeInView>
            </div>
          </section>

          <FadeInView>
            <section className="py-12 md:py-16 bg-slate-50">
              <div className="max-w-3xl mx-auto px-4 md:px-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-8">FAQ — najczęstsze pytania o digital marketing</h2>
                <FAQSchema items={faqItems} />
                <div className="space-y-5">
                  {faqItems.map((item) => (
                    <section key={item.question} className="bg-white rounded-lg border border-slate-200 p-5">
                      <h3 className="font-semibold text-slate-900 mb-2">{item.question}</h3>
                      <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                    </section>
                  ))}
                </div>
              </div>
            </section>
          </FadeInView>
        </article>

        <ContactSection />
      </Layout>
    </>
  );
}
