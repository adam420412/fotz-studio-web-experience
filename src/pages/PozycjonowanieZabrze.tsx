import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Link2,
  MapPin,
  Search,
  Settings2,
} from "lucide-react";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

const seoTitle = "Pozycjonowanie stron Zabrze — agencja SEO | FOTZ";
const seoDescription = "Pozycjonowanie stron Zabrze: audyt SEO, technika, treści i lokalna widoczność. Agencja FOTZ — pomiar zapytań, zakres prac i warunki wyceny dla Twojej firmy.";
const canonicalUrl = "https://www.fotz-studio.pl/pozycjonowanie/zabrze";

const faqItems = [
  {
    question: "Co obejmuje pozycjonowanie stron w Zabrzu?",
    answer:
      "Zakres ustalamy po audycie i rozmowie o ofercie. Może obejmować poprawki techniczne, optymalizację strony www, treści, linkowanie wewnętrzne, pozyskiwanie linków oraz profil firmy w Google. Wycena wskazuje konkretne zadania, odpowiedzialności i sposób raportowania, bez automatycznego wdrażania niepotrzebnych prac.",
  },
  {
    question: "Jak wybrać agencję SEO w Zabrzu?",
    answer:
      "Dobra agencja SEO przedstawia diagnozę, plan działań i sposób pomiaru, a nie tylko listę fraz. Zapytaj, kto wdraża zalecenia i jak wygląda raport. Portfolio pomaga poznać sposób pracy, ale nie zastępuje zakresu dla Twojej strony. Agencja interaktywna i zespół SEO powinni jasno rozdzielić projektowanie, wsparcie techniczne i działania w wyszukiwarce.",
  },
  {
    question: "Ile kosztuje pozycjonowanie w Zabrzu?",
    answer:
      "Cena zależy od stanu technicznego serwisu, konkurencji, liczby usług lub kategorii, obszaru działania oraz potrzebnych treści i wdrożeń. Innego zakresu SEO wymaga strona usługowa, a innego sklep internetowy. Nie podajemy sztywnego cennika przed analizą. Otrzymasz wycenę z zadaniami, warunkami współpracy i sposobem rozliczania prac.",
  },
  {
    question: "Jak mierzycie widoczność i zapytania z Google?",
    answer:
      "W Google Search Console analizujemy zapytania, wyświetlenia, kliknięcia i strony docelowe. Obserwujemy ruch organiczny oraz, jeśli konfiguracja na to pozwala, uzgodnione formularze lub inne działania użytkowników. Raport oddziela pozycję w wynikach wyszukiwania od faktycznego ruchu i kontaktów, dzięki czemu decyzje opierają się na danych, a nie pojedynczej frazie.",
  },
  {
    question: "Po jakim czasie widać efekty pozycjonowania strony?",
    answer:
      "Tempo zależy od punktu wyjścia, konkurencji, skali zmian, szybkości wdrożeń i algorytmów Google. Gwarancja konkretnej pozycji, terminu efektu albo liczby klientów nie byłaby rzetelna. Po pierwszych pracach sprawdzamy indeksację i reakcję w danych, a następne działania SEO planujemy na podstawie obserwacji zamiast z góry obiecywać rezultat.",
  },
  {
    question: "Czy można pozyskiwać klientów także spoza Zabrza?",
    answer:
      "Tak, jeśli firma rzeczywiście obsługuje inne miejscowości. Można uwzględnić zapytania z Gliwic, Bytomia czy Rudy Śląskiej, ale każdy obszar wymaga trafnej podstrony i informacji o dostępności usługi. Nie mnożymy stron tylko z podmienioną nazwą miasta. Zasięg ustalamy według oferty i realnego sposobu świadczenia usług.",
  },
];

const scopeItems = [
  {
    icon: Search,
    title: "Audyt SEO i słowa kluczowe",
    description:
      "Audyt SEO pokazuje, które elementy ograniczają widoczność w Google i jak strona odpowiada na potrzeby odbiorców. Grupujemy słowa kluczowe według usługi, intencji i obszaru. Każda fraza otrzymuje właściwą podstronę, a rekomendacje wskazują priorytety, zakres wdrożenia i sposób sprawdzenia rezultatu.",
  },
  {
    icon: Settings2,
    title: "Techniczna optymalizacja strony",
    description:
      "Sprawdzamy indeksację, canonical, robots.txt, mapę witryny, błędy adresów, wersję mobilną i szybkość ładowania. Techniczna optymalizacja obejmuje również nagłówki, dane strukturalne i działanie formularza. Zalecenia możemy wdrożyć lub przekazać programiście, a wsparcie techniczne obejmuje kontrolę wykonanych poprawek.",
  },
  {
    icon: FileText,
    title: "Treści ofertowe i content marketing",
    description:
      "Tworzenie treści zaczynamy od pytań odbiorców, zakresu oferty i informacji potrzebnych przed kontaktem. Optymalizacja stron internetowych porządkuje title, opisy, nagłówki i treść bez sztucznego powtarzania fraz. Content marketing uzupełnia ofertę o poradniki, a pozycjonowanie sklepów internetowych uwzględnia kategorie i produkty sklepu internetowego.",
  },
  {
    icon: MapPin,
    title: "Lokalna widoczność i profil firmy",
    description:
      "Pozycjonowanie lokalne łączy stronę z rzeczywistym obszarem działania. W profilu firmy w Google, dawniej Google Moja Firma, analizujemy kategorie, usługi, opis i powiązanie z właściwą podstroną. Obecność w Mapach Google uzupełnia wyniki organiczne. Nie tworzymy fikcyjnych lokalizacji ani recenzji, a dane firmy w internecie powinny być spójne.",
  },
  {
    icon: Link2,
    title: "Linkowanie i struktura podstron",
    description:
      "Linkowanie wewnętrzne prowadzi między powiązanymi usługami, poradnikami i ofertą. Pomaga użytkownikowi dotrzeć do potrzebnych informacji, a wyszukiwarce zrozumieć strukturę serwisu. Plan może uwzględniać wartościowe linki zewnętrzne i pozyskiwanie linków, ale ich liczba nie zastępuje jakości tematycznej ani użytecznej strony docelowej.",
  },
  {
    icon: BarChart3,
    title: "Pomiar zapytań i raport",
    description:
      "Raport przedstawia wykonane prace, widoczność grup fraz, ruch na stronie i uzgodnione działania użytkowników. Łączymy dane z wyszukiwarki z informacją o zapytaniach do firmy. Na tej podstawie aktualizujemy plan, zamiast rozliczać samą pozycję w wynikach wyszukiwania lub automatycznie powtarzać ten sam zakres zadań.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief i analiza punktu wyjścia",
    description:
      "Poznajemy ofertę, obszar działania, cele i sposób obsługi zapytań. Sprawdzamy stronę, dostępne dane oraz profil firmy, jeśli jest istotny dla lokalnej widoczności.",
  },
  {
    step: "02",
    title: "Strategia, priorytety i wycena",
    description:
      "Wskazujemy frazy, podstrony i poprawki o największym znaczeniu dla planu. Otrzymujesz zakres prac, odpowiedzialności, harmonogram i wycenę dopasowaną do strategii marketingowej firmy.",
  },
  {
    step: "03",
    title: "Wdrożenia, optymalizacja i treści",
    description:
      "Realizujemy uzgodnione poprawki techniczne, optymalizację strony i publikacje. Jeśli część prac wykonuje Twój zespół, przekazujemy zalecenia i sprawdzamy sposób ich wdrożenia.",
  },
  {
    step: "04",
    title: "Pomiar i rozwój widoczności",
    description:
      "Porównujemy dane z punktem wyjścia i omawiamy wnioski. Kolejny etap zależy od zapytań, zmian oferty i reakcji użytkowników, a nie od sztywnej listy działań powtarzanych co miesiąc.",
  },
];

export default function PozycjonowanieZabrze() {
  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords="pozycjonowanie zabrze, pozycjonowanie stron zabrze, seo zabrze, pozycjonowanie lokalne zabrze, audyt seo zabrze"
      />
      <ServiceSchema
        name="Pozycjonowanie stron internetowych Zabrze"
        description="Pozycjonowanie stron dla firm z Zabrza i okolic: audyt SEO, optymalizacja techniczna, treści, linkowanie, lokalna widoczność oraz pomiar zapytań."
        provider="FOTZ Studio"
        areaServed="Zabrze"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Usługi", url: "https://www.fotz-studio.pl/uslugi" },
          { name: "Pozycjonowanie", url: "https://www.fotz-studio.pl/seo/pozycjonowanie" },
          { name: "Zabrze", url: canonicalUrl },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.07),transparent_50%)]" />
        <div className="container-wide relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-sm text-yellow-400 mb-6">
            <MapPin className="w-4 h-4" /> SEO lokalne dla firm z Zabrza
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Pozycjonowanie stron Zabrze
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Porządkujemy technikę, treści i lokalną widoczność, aby strona odpowiadała na realne potrzeby odbiorców. Plan powstaje po analizie danych i oferty, bez obiecywania konkretnych pozycji.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
              <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
                Poproś o analizę i wycenę <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <a href="#zakres-prac">Zobacz zakres prac</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Pozycjonowanie Zabrze — od wyszukiwania do kontaktu
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div className="space-y-5">
              <p>
                Pozycjonowanie strony zaczynamy od rozpoznania intencji. Klient może wpisać nazwę usługi z miastem, szukać firmy w pobliżu albo porównywać zakres i warunki współpracy. Skuteczne pozycjonowanie odpowiada na tę intencję kompletną ofertą, zamiast jedynie powtarzać nazwę miasta. Strona www powinna jasno pokazywać, co robisz, gdzie działasz i jak można przesłać zapytanie.
              </p>
              <p>
                Pozycjonowanie stron Zabrze układamy według usług i obszaru, który rzeczywiście obsługujesz. Dla lokalnych klientów istotne są także dostępność, trasa dojazdu, sposób realizacji i informacje potrzebne przed rozmową. To pomaga firmie konkurować o wartościowe wejścia, a nie o przypadkowy ruch.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Mikulczyce, Biskupice, Helenka, Grzybowice, Kończyce czy Zaborze Północ mogą być częścią obszaru działania, ale dzielnica sama w sobie nie uzasadnia osobnej podstrony. Podobnie plan dla Zabrza i okolic powinien uwzględniać Gliwice tylko wtedy, gdy firma świadczy tam usługi. Treść opisuje rzeczywisty zasięg, bez tworzenia pustych wariantów lokalnych.
              </p>
              <p>
                Inne potrzeby ma firma usługowa, marka B2B i sklep. Pozycjonowanie stron internetowych może koncentrować się na ofercie, a dla sklepu obejmować strukturę kategorii i produktów. SEO w Zabrzu jest częścią szerszej strategii: kampania Google Ads lub dedykowany landing page może wspierać test popytu, ale płatne wejścia rozliczamy osobno od ruchu organicznego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="zakres-prac" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Co obejmuje pozycjonowanie stron w Zabrzu?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Zakres prac zależy od diagnozy. Nie każda strona potrzebuje wszystkich działań jednocześnie, dlatego audyt SEO wyznacza priorytety, a zakres działań SEO przedstawiamy w zrozumiałym planie.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scopeItems.map((item) => (
              <article key={item.title} className="h-full rounded-xl border border-gray-700 bg-gray-950 p-6">
                <item.icon className="w-7 h-7 text-yellow-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pomiar" className="section-padding bg-gray-950 scroll-mt-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Jak mierzymy widoczność w Google i zapytania?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Zapytania i strony docelowe",
                text: "Search Console pokazuje zapytania, wyświetlenia, kliknięcia i adresy, które pojawiają się w wynikach. Analizujemy grupy tematów oraz zmiany po wdrożeniach, zamiast opierać wnioski na jednym ręcznie sprawdzonym wyniku.",
              },
              {
                title: "Ruch organiczny i zachowanie",
                text: "Sprawdzamy, czy użytkownicy trafiają na właściwe oferty i jak korzystają ze strony. Interpretacja uwzględnia sezonowość i zmiany w serwisie. Sam algorytm wyszukiwarki nie wyjaśnia, czy ruch odpowiada profilowi potencjalnego klienta.",
              },
              {
                title: "Kontakt i jakość zapytań",
                text: "Jeśli dostępy i konfiguracja na to pozwalają, mierzymy uzgodnione formularze lub inne działania. Warto także notować źródło zapytania w firmie. To pozwala oddzielić klientów z Zabrza i faktyczne kontakty od samej liczby wejść.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-700 bg-gray-900 p-6">
                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Proces pozycjonowania dla firm z Zabrza
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Współpracę porządkujemy w czterech etapach. Przed rozpoczęciem znasz zakres SEO, odpowiedzialności i sposób akceptacji zadań.
          </p>
          <div className="space-y-6">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-yellow-400 text-gray-900 font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="wycena" className="section-padding bg-gray-950 scroll-mt-24">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Jak agencja SEO wycenia pozycjonowanie w Zabrzu?
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              Na koszt wpływają stan techniczny strony, konkurencja, liczba ofert lub kategorii, obszar działania oraz wymagany zakres contentu i wdrożeń. Pozycjonowanie w Zabrzu dla jednej usługi będzie wymagało innego planu niż rozbudowany katalog sklepu. Dlatego najpierw określamy problem i rezultat pracy, a dopiero potem budżet.
            </p>
            <p>
              Wycena zawiera konkretne zadania, terminy, warunki współpracy i sposób raportowania. Możliwy jest projekt audytowy albo stały rozwój widoczności, jeśli odpowiada potrzebom firmy. Skuteczne SEO nie opiera się na obietnicy pozycji. Dokumentujemy prace i dane, a decyzje o kolejnym zakresie podejmujemy na podstawie pomiaru.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-yellow-400 text-gray-900">
        <div className="container-wide text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Sprawdź zakres pozycjonowania dla swojej firmy
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Prześlij adres strony i opisz ofertę oraz obszar działania. Na tej podstawie ustalimy informacje potrzebne do analizy, zakres prac i warunki wyceny.
          </p>
          <Button asChild size="lg" className="gap-2 bg-gray-900 text-yellow-400 hover:bg-gray-800">
            <Link to="/kontakt?usluga=seo&wariant=audit#formularz">
              Zapytaj o SEO w Zabrzu <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-gray-900">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
            Pozycjonowanie Zabrze — pytania i odpowiedzi
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                id={`zabrze-faq-${index}`}
                className="rounded-xl border border-gray-700 bg-gray-950 px-6"
              >
                <summary className="cursor-pointer py-5 text-left font-medium text-white hover:text-yellow-400">
                  {item.question}
                </summary>
                <p className="pb-5 text-gray-300 leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-950 border-t border-gray-800">
        <div className="container-wide max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">Powiązane usługi SEO</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/seo/pozycjonowanie" className="text-yellow-400 hover:underline">Poznaj usługę pozycjonowania</Link>
            <Link to="/pozycjonowanie/gliwice" className="text-yellow-400 hover:underline">Pozycjonowanie Gliwice</Link>
            <Link to="/pozycjonowanie/sosnowiec" className="text-yellow-400 hover:underline">Pozycjonowanie Sosnowiec</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
