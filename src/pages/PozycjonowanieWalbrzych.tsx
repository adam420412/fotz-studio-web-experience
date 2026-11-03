import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart2,
  CheckCircle2,
  FileText,
  Link2,
  MapPin,
  Search,
  Settings2,
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const faqItems = [
  {
    question: "Co obejmuje pozycjonowanie stron w Wałbrzychu?",
    answer:
      "Zakres ustalamy po audycie. Może obejmować techniczne poprawki, optymalizację oferty i metadanych, treści, linkowanie wewnętrzne, pozyskiwanie linków oraz prace nad profilem firmy w Google. Oferta wskazuje konkretne zadania, odpowiedzialności i sposób raportowania.",
  },
  {
    question: "Czy audyt SEO obejmuje wizytówkę Google?",
    answer:
      "Jeśli profil firmy jest istotny dla Twojego obszaru działania, możemy uwzględnić go w audycie. Sprawdzamy m.in. kategorie, opis usług, spójność danych ze stroną i powiązanie z odpowiednią podstroną. Zakres potwierdzamy przed rozpoczęciem prac.",
  },
  {
    question: "Ile kosztuje pozycjonowanie w Wałbrzychu?",
    answer:
      "Cena zależy od stanu strony, konkurencji, liczby usług lub kategorii, obszaru działania oraz potrzebnego zakresu treści i wdrożeń. Nie stosujemy na tej stronie sztywnych pakietów cenowych. Po analizie otrzymasz wycenę z zakresem prac i warunkami współpracy.",
  },
  {
    question: "Jak mierzycie efekty pozycjonowania?",
    answer:
      "Analizujemy zapytania, wyświetlenia i kliknięcia w Google Search Console, widoczność wybranych fraz oraz ruch organiczny. Jeśli konfiguracja i dostępy na to pozwalają, mierzymy też formularze i inne uzgodnione działania. Raport oddziela dane o pozycjach od faktycznych zapytań.",
  },
  {
    question: "Po jakim czasie widać efekty SEO?",
    answer:
      "Tempo zależy m.in. od punktu wyjścia, konkurencji, skali zmian i szybkości wdrożeń. Nie podajemy z góry terminu uzyskania określonej pozycji. Po pierwszych pracach sprawdzamy indeksację i dane, a kolejne decyzje opieramy na obserwowanych reakcjach użytkowników i wyszukiwarki.",
  },
  {
    question: "Czy firma musi mieć lokal w Wałbrzychu?",
    answer:
      "Nie jest to potrzebne do rozpoczęcia współpracy, którą prowadzimy zdalnie. Sam profil firmy w Google musi natomiast odpowiadać rzeczywistemu sposobowi działania i zasadom Google. Nie tworzymy fikcyjnych adresów; obszar usług powinien pokrywać się z rzeczywistym zasięgiem firmy.",
  },
];

const scopeItems = [
  {
    icon: Search,
    title: "Audyt SEO i słowa kluczowe",
    description:
      "Szczegółowa analiza pokazuje, jak Twoja strona odpowiada na zapytania i co ogranicza widoczność. Każda fraza otrzymuje przypisaną intencję i stronę docelową, a wyszukiwarka Google dostaje spójne informacje o ofercie. Otrzymujesz priorytety, a każda rekomendacja wskazuje, co poprawić najpierw i które działania nie są teraz potrzebne.",
  },
  {
    icon: Settings2,
    title: "Techniczne minimum strony",
    description:
      "Sprawdzamy indeksację, canonical, robots.txt, mapę witryny, błędy adresów, wersję mobilną i szybkość ładowania. Wdrażamy lub przekazujemy programiście poprawki kodu, nagłówków i danych strukturalnych. SEO techniczne obejmuje też sprawdzenie, czy formularz i kluczowe podstrony działają na telefonie.",
  },
  {
    icon: FileText,
    title: "Optymalizacja oferty i treści",
    description:
      "Optymalizacja strony porządkuje title, meta description, nagłówki oraz treść strony pod kątem widoczności i potrzeb odbiorcy. Opisujemy zakres usług, obszar działania, proces i odpowiedzi na pytania klientów. Dla sklepów internetowych uwzględniamy kategorie i produkty, zamiast kierować cały ruch do strony głównej.",
  },
  {
    icon: MapPin,
    title: "Profil firmy w Google",
    description:
      "Wizytówka Google, czyli profil firmy w Google, powinna przedstawiać rzeczywistą działalność. Analizujemy kategorie, usługi i opis. Spójny opis oraz dane profilu firmy łączymy z właściwą podstroną. Mapy Google i Google Maps uzupełniają wyniki organiczne, ale nie zastępują optymalizacji strony.",
  },
  {
    icon: Link2,
    title: "Linkowanie i tematy",
    description:
      "Linkowanie wewnętrzne prowadzi z treści poradnikowych do odpowiedniej oferty i między powiązanymi usługami. Planujemy publikacje na podstawie pytań odbiorców, a nie powielania nazwy miasta. Linki zewnętrzne pozyskujemy zgodnie z ustaloną strategią, bez deklarowania sztucznej liczby odnośników.",
  },
  {
    icon: BarChart2,
    title: "Pomiar i raport",
    description:
      "Raport pokazuje wykonane wdrożenia, zmiany widoczności w Google, ruch organiczny i uzgodnione działania użytkowników. Na tej podstawie aktualizujemy plan działań. Nie poprzestajemy na samych pozycjach w wynikach wyszukiwania, bo sama pozycja nie mówi, czy firma otrzymuje wartościowe zapytania.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief i punkt wyjścia",
    description:
      "Ustalamy ofertę, obszar działania i sposób pozyskiwania klientów. Sprawdzamy dostępne dane, stronę oraz profil firmy, jeśli ma on znaczenie dla Twojej widoczności.",
  },
  {
    step: "02",
    title: "Strategia i wycena",
    description:
      "Wskazujemy priorytetowe frazy, podstrony i poprawki. Otrzymujesz strategię SEO z zakresem, odpowiedzialnościami, harmonogramem prac oraz wyceną dopasowaną do potrzeb Twojej firmy.",
  },
  {
    step: "03",
    title: "Wdrożenia i treści",
    description:
      "Realizujemy uzgodnione poprawki techniczne, optymalizację i publikacje. Jeśli część prac wykonuje Twój zespół, przekazujemy konkretne zalecenia i sprawdzamy rezultat wdrożenia.",
  },
  {
    step: "04",
    title: "Pomiar i kolejne decyzje",
    description:
      "Porównujemy dane z punktem wyjścia, omawiamy zapytania i wnioski. Następny etap opieramy na wynikach oraz zmianach oferty, a nie na automatycznym powtarzaniu listy zadań.",
  },
];

const relatedLinks = [
  { label: "Pozycjonowanie Wrocław", url: "/uslugi/pozycjonowanie/wroclaw" },
  { label: "Pozycjonowanie Legnica", url: "/pozycjonowanie/legnica" },
  { label: "Pozycjonowanie Gliwice", url: "/pozycjonowanie/gliwice" },
  { label: "Pozycjonowanie Zabrze", url: "/pozycjonowanie/zabrze" },
  { label: "Wszystkie usługi SEO", url: "/seo/pozycjonowanie" },
];

const PozycjonowanieWalbrzych = () => {
  return (
    <Layout>
      <SEOHead
        title="Pozycjonowanie Wałbrzych — SEO w Google | FOTZ"
        description="Pozycjonowanie stron Wałbrzych: kompleksowy audyt SEO, optymalizacja i profil firmy w Google. Zwiększ widoczność firmy z Wałbrzycha i okolic. Sprawdź wycenę."
        canonical="https://www.fotz-studio.pl/pozycjonowanie/walbrzych"
        keywords="pozycjonowanie wałbrzych, pozycjonowanie stron wałbrzych, seo wałbrzych, pozycjonowanie lokalne wałbrzych, audyt seo wałbrzych"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Wałbrzych"
        description="Pozycjonowanie stron dla firm z Wałbrzycha i okolic: audyt SEO, optymalizacja techniczna, treści, linkowanie, profil firmy w Google oraz pomiar widoczności i zapytań."
        provider="FOTZ Studio"
        areaServed="Wałbrzych"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/seo/pozycjonowanie" },
          { name: "Wałbrzych", url: "https://www.fotz-studio.pl/pozycjonowanie/walbrzych" },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative min-h-[85vh] flex items-center justify-center bg-gray-900 overflow-hidden pt-20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 rounded-full px-4 py-2 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                SEO lokalne · Wałbrzych i okolice
              </div>
            </FadeInView>
            <FadeInView delay={0.1}>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Pozycjonowanie <span className="text-yellow-400">Wałbrzych</span> — audyt i lokalne SEO dla firm
              </h1>
            </FadeInView>
            <FadeInView delay={0.2}>
              <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Pomagamy uporządkować widoczność firmy w Google: od audytu i techniki po treści, linkowanie oraz profil firmy. Plan powstaje na podstawie danych i rzeczywistego obszaru działania, bez obiecywania konkretnych pozycji.
              </p>
            </FadeInView>
            <FadeInView delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-base px-8 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                  <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                    Poproś o analizę i wycenę <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 border-gray-700 text-white hover:bg-gray-800">
                  <a href="#zakres-prac">Zobacz zakres prac</a>
                </Button>
              </div>
            </FadeInView>
            <FadeInView delay={0.4}>
              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
                {["Priorytety po audycie", "Wycena według zakresu", "Pomiar widoczności i zapytań"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800 border-y border-gray-700">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="max-w-3xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Pozycjonowanie lokalne w Wałbrzychu — od wyszukiwania do zapytania
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Klient może wpisać nazwę usługi z miastem, szukać firmy „w pobliżu” albo wyszukiwać informacji o cenie, dostępności i konkretnym problemie. Skuteczne pozycjonowanie odpowiada na tę intencję kompletną ofertą, zamiast tylko powtarzać frazę „SEO Wałbrzych”. Strona internetowa powinna jasno pokazywać, co robisz, gdzie działasz i jak skontaktować się z firmą.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <FadeInView>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Dla firm z Wałbrzycha i okolic układamy frazy według usług i obszaru, który rzeczywiście obsługujesz. Strategie dla jednej miejscowości i całego regionu wymagają innych stron docelowych. Zamiast tworzyć puste wersje dla każdej dzielnicy, rozwijamy treści, które pomagają wybrać ofertę. To wspiera lokalne SEO i pomaga pozyskiwać wartościowe zapytania.
                </p>
                <p>
                  Lokalne firmy potrzebują innej struktury niż firmy działające w kilku miejscowościach. Dostosowanie strony zaczynamy od oferty, sezonowości i pytań klientów. Analiza lokalnego rynku obejmuje także to, czy potencjalny klient może łatwo znaleźć zakres usługi, cennik lub sposób wyceny, obszar dojazdu i formularz. Marketing lokalny powinien porządkować te informacje, a nie je ukrywać.
                </p>
              </div>
            </FadeInView>
            <FadeInView delay={0.15}>
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4">Co ustalamy przed wyborem fraz?</h3>
                <ul className="space-y-3 text-gray-300">
                  {[
                    "które usługi lub produkty są priorytetem",
                    "jaki obszar firma rzeczywiście obsługuje",
                    "jakie pytania poprzedzają rozmowę lub zakup",
                    "które strony i zapytania już przynoszą ruch",
                    "jakie działanie użytkownika uznajemy za wartościowe",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <section id="zakres-prac" className="py-20 bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeInView className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Czym jest audyt SEO i co obejmuje pozycjonowanie stron w Wałbrzychu?
            </h2>
            <p className="text-gray-300">
              Kompleksowy zakres nie oznacza wykonywania wszystkiego bez ustalenia priorytetów. Audyt SEO Wałbrzych pozwala wybrać prace potrzebne dla Twojej strony i przypisać im mierzalny rezultat.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.05}>
                <article className="h-full bg-gray-800 border border-gray-700 rounded-xl p-6">
                  <item.icon className="w-7 h-7 text-yellow-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </article>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInView className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Raport SEO dla Twojej firmy: widoczność, ruch organiczny i zapytania</h2>
            <p className="text-gray-300 leading-relaxed">
              Ocena strategii SEO łączy dane z wyszukiwarki z tym, co dzieje się po wejściu na stronę. W Google Search Console sprawdzamy zapytania, wyświetlenia, kliknięcia i strony docelowe. Analytics pomaga prześledzić zachowanie użytkowników, a uzgodnione zdarzenia — kontakt z firmą. Zakres pomiaru zależy od dostępów i poprawnej konfiguracji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Widoczność w wynikach",
                text: "Obserwujemy grupy fraz i podstrony, nie pojedynczy sprawdzany ręcznie wynik. Pozycje w wynikach wyszukiwania analizujemy razem z wyświetleniami i kliknięciami.",
              },
              {
                title: "Ruch organiczny",
                text: "Sprawdzamy, czy użytkownicy trafiają na właściwe oferty i treści. Wnioski uwzględniają sezonowość oraz zmiany w serwisie, zamiast przypisywać każdą zmianę jednej optymalizacji.",
              },
              {
                title: "Zapytania i jakość kontaktu",
                text: "Mierzymy uzgodnione formularze lub inne działania i zalecamy notowanie źródła zapytania w firmie. Dzięki temu łatwiej oddzielić sam ruch od kontaktów pasujących do oferty.",
              },
            ].map((item, index) => (
              <FadeInView key={item.title} delay={index * 0.08}>
                <div className="h-full bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proces i wdrożenia SEO dla firm z Wałbrzycha</h2>
            <p className="text-gray-300">Tryb zdalny porządkujemy w czterech etapach. Zakres każdego z nich znasz przed rozpoczęciem zadań, a uzgodnienia i raporty otrzymujesz online.</p>
          </FadeInView>
          <div className="space-y-6">
            {processSteps.map((item, index) => (
              <FadeInView key={item.step} delay={index * 0.08}>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center shrink-0 text-gray-900 font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView>
            <h2 className="text-3xl font-bold text-white mb-6">Agencja SEO Wałbrzych — ile kosztuje pozycjonowanie?</h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Nie ma jednej ceny dla każdej firmy. Na wycenę wpływają stan techniczny strony, konkurencja, liczba ofert i obszar działania, a także potrzebny zakres contentu, linkowania i wdrożeń. Inny plan będzie potrzebny stronie usługowej, a inny sklepom internetowym z rozbudowanym katalogiem. Najpierw określamy problem i oczekiwany rezultat pracy, dopiero potem budżet.
              </p>
              <p>
                Wycena zawiera konkretne zadania, terminy, odpowiedzialności i sposób raportowania. Możliwy jest projekt audytowy albo stały rozwój SEO, jeśli odpowiada to potrzebom Twojej firmy. Agencja SEO powinna przedstawić zakres i sposób pomiaru, nie tylko liczbę fraz. Nie deklarujemy konkretnych pozycji ani sprzedaży; dokumentujemy prace i dane, na których opieramy decyzje.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-10">
          <FadeInView>
            <h2 className="text-3xl font-bold text-white mb-6">SEO i reklama — Google Ads i social media</h2>
            <p className="text-gray-300 leading-relaxed">
              SEO buduje ruch organiczny, a kampanie reklamowe w Google Ads zapewniają płatne wejścia po uruchomieniu i w ramach budżetu. Google Ads i Facebook Ads, określane także jako Google Ads i Meta Ads w porównaniach kanałów, mogą wesprzeć test popytu lub komunikatu. Skuteczne kampanie wymagają osobnych celów i budżetu. Reklama w social media odpowiada na inną intencję niż wyszukiwanie. Agencja reklamowa lub Twój zespół powinni rozliczać jej koszty i wyniki osobno od SEO.
            </p>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl font-bold text-white mb-6">SEO i AI — użyteczna treść w Google</h2>
            <p className="text-gray-300 leading-relaxed">
              Google i AI zmieniają sposób prezentowania odpowiedzi, ale podstawą pozostaje użyteczna strona. W obszarze SEO i AI stosujemy jasne definicje, konkretne odpowiedzi, logiczne nagłówki i dane strukturalne. Nie obiecujemy cytowania w generowanych odpowiedziach; dbamy o treść, którą użytkownik może łatwo zrozumieć i sprawdzić.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-yellow-400 text-gray-900">
        <div className="container mx-auto px-4 text-center">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Zdobywaj klientów — sprawdź widoczność Twojej firmy w Google</h2>
            <p className="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
              Prześlij adres strony i opisz obszar działania. Wskażemy, jakie informacje są potrzebne do analizy oraz przygotujemy zakres i wycenę bez sztywnego pakietu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-base px-8 bg-gray-900 text-yellow-400 hover:bg-gray-800">
                <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                  Zwiększ widoczność — zapytaj o SEO <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8 border-gray-900 text-gray-900 hover:bg-yellow-300">
                <Link to="/seo/pozycjonowanie">Poznaj usługę pozycjonowania</Link>
              </Button>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInView className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Najczęstsze pytania o pozycjonowanie w Wałbrzychu</h2>
          </FadeInView>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FadeInView key={item.question} delay={index * 0.04}>
                <details
                  id={`walbrzych-faq-${index}`}
                  className="bg-gray-900 border border-gray-700 rounded-xl px-6"
                >
                  <summary className="cursor-pointer text-left font-medium py-5 text-white hover:text-yellow-400">
                    {item.question}
                  </summary>
                  <p className="text-gray-300 pb-5">{item.answer}</p>
                </details>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900 border-t border-gray-700">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Pozycjonowanie w innych miastach</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {relatedLinks.map((link) => (
              <Link key={link.url} to={link.url} className="text-yellow-400 hover:underline font-medium text-sm">
                → {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
};

export default PozycjonowanieWalbrzych;
