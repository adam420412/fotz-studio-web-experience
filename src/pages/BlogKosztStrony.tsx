import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ChevronRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const seoTitle = "Ile kosztuje strona internetowa w 2026? | FOTZ";
const seoDescription = "Ile kosztuje strona internetowa w 2026? Poznaj czynniki ceny, koszt domeny i hostingu, CMS, SEO oraz przykładowe budżety i pytania do oferty.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/ile-kosztuje-strona-internetowa";
const articleHeadline = "Ile kosztuje strona internetowa w 2026? Koszty i wycena";

const faqItems = [
  {
    question: "Ile kosztuje strona internetowa dla firmy w Polsce?",
    answer: "Nie ma jednej ceny dla małej firmy ani dużych firm. Znaczenie mają podstrony, materiały, projekt graficzny, system edycji, integracje i opieka. Porównuj pełne oferty oraz wydatek w pierwszym roku, a nie samą kwotę wdrożenia.",
  },
  {
    question: "Ile kosztuje utrzymanie strony internetowej miesięcznie i rocznie?",
    answer: "Na koszt utrzymania strony internetowej wpływają domena, hosting, licencje, aktualizacje, kopie zapasowe i zakres wsparcia. Zsumuj opłaty roczne i miesięczne z wybranych ofert, zamiast przyjmować uniwersalną stawkę.",
  },
  {
    question: "Ile kosztuje strona internetowa na WordPressie?",
    answer: "Sam WordPress nie przesądza o cenie. Wpływ mają m.in. szablon lub indywidualny projekt, liczba widoków, wtyczki, migracja treści, integracje, testy i późniejsza opieka. Wycena powinna wymieniać te elementy osobno.",
  },
  {
    question: "Czy kreator stron jest najtańszym rozwiązaniem?",
    answer: "Kreator stron może ograniczyć wydatek na własną stronę internetową, ale wymaga abonamentu i pracy. Sprawdź także możliwości SEO, eksportu treści, integracji i rozwoju. Najniższa opłata początkowa nie zawsze oznacza najniższy całkowity koszt.",
  },
  {
    question: "Czy można samodzielnie stworzyć stronę internetową?",
    answer: "Tak. Samodzielne tworzenie własnej strony internetowej wymaga jednak czasu na naukę, materiały, konfigurację i testy. Nie eliminuje opłat za domenę, hosting lub narzędzia. Przy integracjach, migracji i bezpieczeństwie warto rozważyć pomoc specjalisty.",
  },
  {
    question: "Freelancer czy agencja — co wybrać?",
    answer: "Freelancer może odpowiadać za uzgodniony, ograniczony zakres, a agencja za koordynację kilku kompetencji. Nie generalizuj na podstawie formy działalności. Sprawdź doświadczenie, zakres, terminy, odpowiedzialność i sposób przekazania strony.",
  },
  {
    question: "Ile kosztuje zrobienie strony internetowej i co obejmuje cena?",
    answer: "Koszt zależy od uzgodnionego zakresu. Cena wykonania strony powinna opisywać projekt, liczbę widoków, wdrożenie, system edycji, materiały, integracje, testy, publikację i szkolenie. Osobno ustal poprawki, prace dodatkowe, własność dostępów oraz opłaty po starcie.",
  },
  {
    question: "Jak obniżyć koszt stworzenia strony internetowej?",
    answer: "Zawęź pierwszą wersję do najważniejszych celów, uporządkuj materiały i odłóż funkcje, których nie potrzebujesz na starcie. Nie oszczędzaj na testach formularzy, kopiach zapasowych, bezpieczeństwie ani prawach do korzystania z materiałów.",
  },
];

const BlogKosztStrony = () => {
  const articleData = {
    headline: articleHeadline,
    description: seoDescription,
    image: "https://www.fotz-studio.pl/work/fps-1200.webp",
    datePublished: "2024-12-20",
    dateModified: "2026-11-02",
    author: "Zespół FOTZ",
    url: canonicalUrl,
  };

  const breadcrumbs = [
    { name: "Strona główna", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Ile kosztuje strona internetowa", url: "/blog/ile-kosztuje-strona-internetowa" },
  ];

  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        ogType="article"
        canonical={canonicalUrl}
        keywords="ile kosztuje strona internetowa, koszt strony www, cena strony internetowej, koszt utrzymania strony"
      />
      <ArticleSchema data={articleData} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="pb-20 bg-background">
        <header className="pt-32 pb-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Ścieżka nawigacji" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-8">
                <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                <span className="text-foreground">Ile kosztuje strona internetowa</span>
              </nav>

              <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Wróć do bloga
              </Link>
              <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">Strony internetowe</p>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{articleHeadline}</h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2"><User className="w-4 h-4" aria-hidden="true" />Zespół FOTZ</span>
                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" aria-hidden="true" />Aktualizacja: 2 listopada 2026</span>
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" aria-hidden="true" />12 min czytania</span>
              </div>
              <p className="text-xs text-muted-foreground mb-6">Pierwsza publikacja: 20 grudnia 2024</p>
              <div className="aspect-video rounded-2xl overflow-hidden">
                <img
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  src="/work/fps-800.webp"
                  srcSet="/work/fps-480.webp 480w, /work/fps-800.webp 800w, /work/fps-1200.webp 1200w"
                  sizes="(min-width: 1024px) 896px, 95vw"
                  width="1200"
                  height="900"
                  alt="Projekt strony FPS Poznań — realizacja FOTZ Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto prose prose-lg prose-invert max-w-none"
          >
            <p className="lead text-xl text-muted-foreground mb-6">
              <strong>Krótka odpowiedź:</strong> koszt strony internetowej zależy od wielu czynników: celu, liczby podstron, materiałów, technologii, integracji i pracy po publikacji. Dla firmy w Polsce nie ma jednej uczciwej odpowiedzi bez ustalenia zakresu, dlatego zamiast sztywnych stawek rynkowych pokazujemy, jak zbudować i porównać budżet.
            </p>
            <p className="text-muted-foreground mb-10">
              Cena strony internetowej różni się w zależności od zakresu. Pytanie „ile kosztuje stworzenie strony internetowej?” warto rozdzielić na wdrożenie, przygotowanie treści, opłaty cykliczne i rozwój. Dopiero całkowita suma pozwala porównać oferty. Artykuł nie przedstawia cennika FOTZ ani gwarantowanego zwrotu; liczby występują wyłącznie w oznaczonych hipotetycznych scenariuszach.
            </p>

            <section aria-labelledby="czynniki-ceny" className="mb-12">
              <h2 id="czynniki-ceny" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Od czego zależy cena strony internetowej?</h2>
              <p className="text-muted-foreground mb-6">
                Najważniejsze czynniki wpływają na koszt pracy, a nie tylko na wygląd strony. Dwie witryny z podobną stroną główną mogą wymagać zupełnie innego nakładu: jedna ma kilka statycznych sekcji, a druga wiele widoków, wersji językowych i połączeń z systemami firmy.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <caption className="text-left text-sm text-muted-foreground mb-3">Co sprawdzić przed porównaniem wycen</caption>
                  <thead><tr className="border-b border-border"><th scope="col" className="text-left py-3 px-4">Czynnik</th><th scope="col" className="text-left py-3 px-4">Jak zmienia zakres prac</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Typ i wielkość strony</td><td className="py-3 px-4 text-muted-foreground">Liczba podstron, unikalnych widoków, języków i ścieżek użytkownika.</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Projekt UX i grafika</td><td className="py-3 px-4 text-muted-foreground">Warsztaty, prototyp, indywidualny projekt lub adaptacja szablonu, poprawki.</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Materiały</td><td className="py-3 px-4 text-muted-foreground">Teksty, zdjęcia, wideo, tłumaczenia, opisy produktów i ich prawa.</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Technologia i integracje</td><td className="py-3 px-4 text-muted-foreground">CMS, formularze, CRM, płatności, rezerwacje, API i migracja danych.</td></tr>
                    <tr className="border-b border-border/50"><td className="py-3 px-4">Jakość i publikacja</td><td className="py-3 px-4 text-muted-foreground">Testy urządzeń, dostępność, wydajność, SEO techniczne, analityka i szkolenie.</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground">Organizacja projektu również wpływa na cenę strony: liczba osób akceptujących, terminy dostarczenia materiałów i sposób rozliczania zmian. Harmonogram powinien wskazywać odpowiedzialność obu stron.</p>
            </section>

            <section aria-labelledby="typy-stron" className="mb-12">
              <h2 id="typy-stron" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Strony internetowe: cennik według typu i funkcji</h2>
              <p className="text-muted-foreground mb-6">Od typu i wielkości strony zależy punkt wyjścia, ale lista funkcji jest ważniejsza niż sama nazwa. Wycena prostej strony internetowej z jedną wizytówką obejmuje inny zakres niż większa strona z blogiem, rezerwacjami i wersjami językowymi. Dodanie funkcji do strony po akceptacji wyceny zmienia zakres.</p>
              <ul className="space-y-3 text-muted-foreground mb-6">
                <li><strong>Landing page:</strong> jedna strona pod konkretną kampanię lub ofertę; cenę zmienia projekt treści, testy formularza i integracje. Zobacz zakres usługi <Link to="/uslugi/landing-page" className="text-primary hover:underline">tworzenia landing page</Link>.</li>
                <li><strong>Strona wizytówka:</strong> zwykle prezentuje firmę, ofertę i kontakt. Koszt strony wizytówkowej zależy m.in. od liczby sekcji, materiałów i wariantu one page lub serwisu z podstronami usług.</li>
                <li><strong>Strona firmowa z blogiem:</strong> wymaga szablonów dla oferty, kategorii i artykułów oraz ustalenia, kto przygotowuje i migruje treści.</li>
                <li><strong>Sklep internetowy:</strong> strony e-commerce dodają katalog, koszyk, płatności, dostawy, regulaminy, powiadomienia i często integracje magazynowe lub księgowe.</li>
                <li><strong>Portal lub aplikacja webowa:</strong> konta użytkowników, uprawnienia, panel i procesy biznesowe wymagają osobnej specyfikacji oraz testów.</li>
              </ul>
              <p className="text-muted-foreground">Jeśli planujesz sprzedaż online, porównaj zakres <Link to="/uslugi/sklepy-internetowe" className="text-primary hover:underline">wdrożenia sklepu internetowego</Link>. Przy serwisie firmowym sprawdź usługę <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzenia stron internetowych</Link>. Profesjonalne strony internetowe powinny mieć zakres dopasowany do celu, a nie tylko nazwę pakietu.</p>
            </section>

            <section aria-labelledby="cms-i-wykonawca" className="mb-12">
              <h2 id="cms-i-wykonawca" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Kreator, WordPress czy rozwiązanie dedykowane?</h2>
              <p className="text-muted-foreground mb-4"><strong>Kreator stron</strong> upraszcza samodzielne postawienie strony i często łączy edytor z hostingiem w abonamencie. Tanie strony internetowe z kreatora mogą ograniczyć wydatek na start, ale wymagają własnej pracy. W przypadku strony internetowej stworzonej w kreatorze sprawdź ograniczenia szablonu, eksport treści, opłaty w kolejnych okresach i funkcje potrzebne w Twojej stronie.</p>
              <p className="text-muted-foreground mb-4"><strong>WordPress</strong> jest systemem zarządzania treścią i pozwala edytować treści strony internetowej bez konieczności zmiany kodu. Gotowy szablon skraca projektowanie nowej strony internetowej, lecz nietypowe funkcje wymagają konfiguracji i testów. Każda wtyczka powinna mieć uzasadnienie, aktualizacje i sprawdzoną zgodność; większa liczba wtyczek nie oznacza lepszej strony.</p>
              <p className="text-muted-foreground">Rozwiązanie dedykowane uzasadnia nietypowy proces, integracja lub wymagania dotyczące działania strony, lecz zwiększa zakres projektu strony internetowej i utrzymania. Dobra strona nie zawsze potrzebuje dedykowanego kodu. Freelancer, zespół i agencja różnią się organizacją pracy, nie automatycznie jakością. Oceń kompetencje potrzebne do strategii, designu, programowania i opieki.</p>
            </section>

            <section aria-labelledby="zakres-prac" className="mb-12">
              <h2 id="zakres-prac" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Co obejmuje koszt wykonania strony internetowej?</h2>
              <p className="text-muted-foreground mb-4">Oferta powinna przedstawiać, jak przebiega budowa strony internetowej i jaki jest rezultat każdego etapu. Zakres obejmuje analizę celów, architekturę informacji, projekt UX i warstwę wizualną, wdrożenie, konfigurację, testy oraz publikację. W umowie warto wskazać liczbę rund poprawek i kryteria odbioru.</p>
              <p className="text-muted-foreground mb-4"><strong>Materiały są osobną pozycją do ustalenia.</strong> Zapisz, kto dostarcza teksty, logo, zdjęcia, filmy, tłumaczenia, dane produktów i treści prawne. Wykonawca może przygotować je w ramach dodatkowej pracy, ale potrzebuje informacji o ofercie i akceptacji klienta. Ustal też formaty, terminy i licencje.</p>
              <p className="text-muted-foreground">Przy integracjach wymień systemy i kierunek przepływu danych: formularz do CRM, płatności do sklepu, rezerwacje do kalendarza czy produkty z magazynu. Zapytaj o środowisko testowe, obsługę błędów i odpowiedzialność za zmiany zewnętrznego API. Tak opisana realizacja strony www ogranicza ryzyko dopisku „integracja” bez wspólnego rozumienia zakresu.</p>
            </section>

            <section aria-labelledby="utrzymanie" className="mb-12">
              <h2 id="utrzymanie" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Ile kosztuje utrzymanie strony internetowej?</h2>
              <p className="text-muted-foreground mb-4">Utrzymanie obejmuje opłaty cykliczne i pracę techniczną. Domena i hosting mogą mieć różne ceny odnowienia niż promocyjna cena pierwszego okresu. Sprawdź także pocztę, płatne licencje, szablon, wtyczki, CDN i dodatkowe usługi, zwłaszcza w pierwszym roku.</p>
              <p className="text-muted-foreground mb-4">Certyfikat SSL bywa dostępny w pakiecie hostingowym lub jako bezpłatny certyfikat, ale konfiguracja i odnowienia wymagają kontroli. W przypadku strony bez SSL przeglądarka może wyświetlać ostrzeżenie. Regularnie utrzymana strona internetowa powinna mieć aktualizacje systemu i wtyczek, kopie zapasowe, monitoring oraz dbanie o bezpieczeństwo strony. Ustal czas reakcji i limit prac w abonamencie.</p>
              <p className="text-muted-foreground">Do rocznego rachunku dodaj rozwój treści, kampanie i naprawy nieobjęte umową. Rola administratora strony powinna obejmować własne dostępy do domeny, hostingu i analityki. Przy zakończeniu współpracy ustal procedurę przekazania plików, bazy danych, haseł i dokumentacji.</p>
            </section>

            <section aria-labelledby="seo-i-pomiar" className="mb-12">
              <h2 id="seo-i-pomiar" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">SEO, wydajność i analityka w budżecie</h2>
              <p className="text-muted-foreground mb-4">Podstawowe SEO przy wdrożeniu powinno mieć konkretną listę: struktura nagłówków, czytelne adresy, metadane, canonical, mapa XML, indeksowanie, przekierowania przy migracji i dane strukturalne zgodne z treścią. Oddziel te prace od ciągłego pozycjonowania, które może obejmować audyt, treści i rozwój widoczności. Szczegóły znajdziesz w opisie usługi <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowania stron</Link>.</p>
              <p className="text-muted-foreground">Wycena powinna uwzględniać optymalizację obrazów, szybkość ładowania strony, obsługę telefonu i test formularza, ponieważ te elementy wpływają na działanie Twojej strony internetowej. Analityka wymaga zdefiniowania zdarzeń i zgodności z zasadami prywatności. Techniczne przygotowanie nie gwarantuje pozycji w Google ani sprzedaży; umożliwia natomiast pomiar i dalszą optymalizację.</p>
            </section>

            <section aria-labelledby="scenariusze" className="mb-12">
              <h2 id="scenariusze" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Hipotetyczne scenariusze — przykładowe rachunki</h2>
              <p className="text-muted-foreground mb-6"><strong>Poniższe kwoty są wyłącznie umownymi założeniami do ćwiczenia rachunku.</strong> To nie jest cennik FOTZ, oferta, średnia rynkowa ani rekomendowany budżet. Nie opisują też rabatów. Pokazują jedynie, jak dodać pozycje i nie pominąć kosztów po starcie; w realnej ofercie ustal walutę, VAT i okres rozliczenia.</p>
              <div className="space-y-5">
                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-xl font-heading font-semibold mb-3">Scenariusz hipotetyczny A: lokalna strona usługowa</h3>
                  <p className="text-muted-foreground">Projekt i wdrożenie 6 000 zł + teksty i zdjęcia 1 200 zł + domena, hosting i poczta 600 zł rocznie + opieka 1 800 zł rocznie = <strong>9 600 zł w pierwszym roku</strong>. Kolejny rok wymaga nowej sumy bez wdrożenia, ale z aktualnymi opłatami i planem rozwoju.</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-xl font-heading font-semibold mb-3">Scenariusz hipotetyczny B: firma B2B z CMS i CRM</h3>
                  <p className="text-muted-foreground">Wdrożenie 12 000 zł + materiały 2 000 zł + integracja CRM 2 500 zł + infrastruktura 1 200 zł rocznie + opieka i rozwój 3 600 zł rocznie = <strong>21 300 zł w pierwszym roku</strong>. Zmiana zakresu integracji oznacza osobną kalkulację.</p>
                </div>
                <div className="p-6 bg-card rounded-xl border border-border/50">
                  <h3 className="text-xl font-heading font-semibold mb-3">Scenariusz hipotetyczny C: sklep z integracjami</h3>
                  <p className="text-muted-foreground">Katalog i checkout 18 000 zł + import produktów 3 000 zł + integracje 4 000 zł + infrastruktura i licencje 2 400 zł rocznie + opieka 6 000 zł rocznie = <strong>33 400 zł w pierwszym roku</strong>. Rachunek nie obejmuje niezdefiniowanych funkcji ani promocji.</p>
                </div>
              </div>
            </section>

            <section aria-labelledby="pytania-do-oferty" className="mb-12">
              <h2 id="pytania-do-oferty" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Pytania do oferty — jak porównać wykonawców?</h2>
              <p className="text-muted-foreground mb-4">Wyślij każdemu wykonawcy ten sam opis celów, funkcji i materiałów. Wspólny brief do tworzenia stron www ułatwi zestawienie odpowiedzi. Porównaj nie tylko koszt strony www, ale komplet informacji:</p>
              <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                <li>Jakie widoki, podstrony i funkcje obejmuje wycena, a co jest poza zakresem?</li>
                <li>Czy projekt jest indywidualny czy oparty na szablonie i ile przewidziano poprawek?</li>
                <li>Kto przygotowuje treści, grafiki, tłumaczenia i migrację oraz kto udziela licencji?</li>
                <li>Jakie integracje, testy, prace SEO i zdarzenia analityczne zawiera wdrożenie?</li>
                <li>Jak rozliczane są zmiany, opóźnienia materiałów i prace dodatkowe?</li>
                <li>Jakie są koszty domeny, hostingu, licencji i opieki po pierwszym okresie?</li>
                <li>Kto jest właścicielem kont i danych oraz jak wygląda przekazanie strony?</li>
                <li>Jakie są etapy, osoby odpowiedzialne, warunki odbioru i wsparcia po publikacji?</li>
              </ol>
            </section>

            <section aria-labelledby="zwrot" className="mb-12">
              <h2 id="zwrot" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Jak mierzyć zwrot z inwestycji w stronę?</h2>
              <p className="text-muted-foreground mb-4">Zacznij przed wdrożeniem. Zapisz bazową liczbę wartościowych zapytań, sprzedaż, konwersję formularza i koszt pozyskania klienta. Po starcie mierz wysłania formularzy, potwierdzone rozmowy, rezerwacje lub transakcje, a następnie łącz je z jakością leadów i wynikiem sprzedażowym. Sama liczba odwiedzin nie dowodzi zwrotu.</p>
              <p className="text-muted-foreground mb-4">Do kalkulacji przyjmij pełny koszt: projekt, materiały, wdrożenie, utrzymanie i promocję. Możesz użyć wzoru: <strong>(przypisany zysk − koszty) ÷ koszty × 100%</strong>. Określ okres, marżę i zasady przypisywania wyniku kanałom. Uwzględnij sezonowość oraz inne zmiany, np. nową ofertę lub kampanię.</p>
              <p className="text-muted-foreground">Nie ma gwarantowanego ROI z samej strony. Wynik zależy także od rynku, oferty, obsługi zapytań i działań marketingowych. Regularny przegląd danych pomaga zdecydować, czy kolejny budżet przeznaczyć na treści, UX, integracje czy promocję.</p>
            </section>

            <section aria-labelledby="faq" className="mb-12">
              <h2 id="faq" className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">Najczęściej zadawane pytania o koszt strony</h2>
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <div key={item.question} className="p-6 bg-card rounded-xl border border-border/50">
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section aria-labelledby="wycena" className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center">
              <h2 id="wycena" className="text-2xl md:text-3xl font-heading font-bold mb-4">Budujemy strony — chcesz wycenić zakres dla Twojej firmy?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">Przekaż cele, listę podstron, funkcji, integracji i materiałów. Na tej podstawie można przygotować wycenę profesjonalnej strony internetowej z jasno opisanymi założeniami, bez utożsamiania jej z przykładami z tego artykułu.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                  <Link to="/kontakt">Przejdź do kontaktu<ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" /></Link>
                </Button>
                <Button asChild variant="outline" size="lg"><Link to="/realizacje">Zobacz realizacje</Link></Button>
              </div>
            </section>
          </motion.div>
        </div>
      </article>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto"><RelatedServices services={servicesByCategory.websites} /></div>
      </div>
      <RelatedArticles currentArticleId="ile-kosztuje-strona-internetowa" />
    </Layout>
  );
};

export default BlogKosztStrony;
