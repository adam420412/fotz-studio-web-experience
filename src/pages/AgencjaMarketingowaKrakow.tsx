import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileText,
  Lightbulb,
  MapPin,
  PenTool,
  Search,
  Target,
  Video,
} from "lucide-react";
import {
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/seo/StructuredData";

const seoTitle = "Agencja marketingowa Kraków — marketing reklamowy | FOTZ";
const seoDescription = "Agencja marketingowa Kraków: strategia, treści i kampanie reklamowe, SEO, Google Ads, social media oraz produkcja. Sprawdź zakres dla Twojej firmy.";
const canonicalUrl = "https://www.fotz-studio.pl/agencja-marketingowa/krakow";
const contactHref = "/kontakt?usluga=marketing#formularz";

const faqItems = [
  {
    question: "Co obejmuje obsługa marketingowa dla firmy z Krakowa?",
    answer:
      "Obsługa marketingowa porządkuje ofertę, strategię, komunikację i promocję. W zależności od potrzeb może obejmować stronę docelową, treści, zdjęcia, filmy, kampanie reklamowe oraz prowadzenie social media. Zakres ustalamy po poznaniu firmy, klientów i dotychczasowych działań. Nie trzeba zlecać wszystkich kanałów jednocześnie.",
  },
  {
    question: "Jak wybrać agencję marketingową w Krakowie?",
    answer:
      "Sprawdź, czy zespół rozumie Twój model biznesowy i potrafi rozpisać zakres, odpowiedzialności oraz sposób pomiaru. Ranking ani sama nazwa agencji reklamowej nie zastąpią konkretnego planu. Zapytaj o akceptacje, dostęp do kont, przekazanie materiałów i raportowanie jakości zapytań, nie tylko zasięgu.",
  },
  {
    question: "Ile kosztuje współpraca z agencją marketingową?",
    answer:
      "Koszt zależy od liczby usług i kanałów, skali strony, potrzebnych treści, produkcji oraz czasu pracy zespołu. W wycenie oddzielamy strategię i doradztwo, przygotowanie materiałów, stałą obsługę, wdrożenia oraz budżet emisji reklam. Nie podajemy sztywnego cennika przed ustaleniem zakresu. Otrzymasz warunki dopasowane do projektu.",
  },
  {
    question: "Jak wygląda rozpoczęcie współpracy z agencją?",
    answer:
      "Na start potrzebujemy opisu oferty, grupy odbiorców, obszaru działania i celu. Pomaga adres strony, linki do profili oraz informacja o dostępnych materiałach i danych. Po briefie otrzymujesz plan marketingowy z priorytetami, harmonogramem, odpowiedzialnościami i wyceną. Dopiero po akceptacji przechodzimy do produkcji, wdrożeń lub emisji kampanii.",
  },
  {
    question: "Po jakim czasie można ocenić efekty marketingu?",
    answer:
      "Termin oceny zależy od kanału, punktu wyjścia, konkurencji, budżetu i szybkości wdrożeń. Działanie strony i formularza można sprawdzić po publikacji, a kampanie wymagają danych o emisji oraz kontaktach. Pozycjonowanie potrzebuje czasu na przetworzenie zmian przez wyszukiwarkę. Nie gwarantujemy terminu sprzedaży ani określonej liczby leadów.",
  },
  {
    question: "Czy agencja spoza Krakowa może prowadzić marketing dla mojej firmy?",
    answer:
      "Tak. Firmy z Krakowa obsługujemy zdalnie: rozmowy, brief, akceptacje i raporty prowadzimy online. Produkcję na miejscu planujemy osobno, po ustaleniu lokalizacji i zakresu. Jeśli wpisujesz „agencja marketingowa z Krakowa” i zależy Ci na codziennym dostępie do biura, zapisz ten warunek w briefie, aby porównać go z naszym modelem pracy.",
  },
];

const serviceItems = [
  {
    icon: Lightbulb,
    title: "Strategiczny marketing i cele biznesowe",
    description:
      "Jesteśmy agencją, która najpierw chce poznać ofertę, potrzeb i oczekiwań klientów oraz drogę zakupu. Strategie oparte na danych określają, które realne działania marketingowe są potrzebne. Jeśli celem jest wzrost przychodów lub wzrost sprzedaży, plan musi uwzględniać także obsługę leadów. Dobieramy SEO, content, social media lub strony WWW zamiast narzucać pakiet wszystkich usług.",
  },
  {
    icon: FileText,
    title: "Content marketing, treści i prowadzenie social mediów",
    description:
      "Content marketing porządkuje tematy, które wyjaśniają ofertę i zachęcają klientów do rozmowy. Przygotowujemy teksty, artykuły, posty i scenariusze dla Twojej marki, a prowadzenie social mediów obejmuje publikacje w uzgodnionym zakresie. Treści są osobnym zadaniem od reklam: mogą wspierać rozpoznawalność marki, obsługę klienta i cele w Twojej firmie. Eksperci w swojej dziedzinie opracowują materiały na podstawie prawdziwych informacji.",
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Meta Ads",
    description:
      "Prowadzimy kampanie reklamowe z celem, kreacją, budżetem i stroną docelową. Kampanie Google Ads odpowiadają na aktywne wyszukiwania, a Meta Ads, w tym Facebook Ads na Facebooku i Instagramie, docierają do wybranych odbiorców. Dla marketingu B2B rozważamy LinkedIn Ads, a TikTok Ads — gdy odbiorcy są na TikToku. Ustalamy, co optymalizować, jak rozliczać emisję i kiedy analiza ROI jest możliwa.",
  },
  {
    icon: Search,
    title: "SEO i strony WWW: kiedy projektować landing page?",
    description:
      "W zakresie tworzenia stron internetowych łączymy SEO z doświadczeniem użytkownika. Audyt obejmuje indeksowanie, strukturę i treści, a etap projektowania stron — ofertę, wersję mobilną oraz formularz. Tworzymy strony i landing page, na których konwersja ma uzgodnioną definicję. Dla sklepu internetowego planujemy kategorie, produkty i ścieżkę zakupu. Optymalizacja nie kończy się na pozyskaniu ruchu; strona musi wyjaśniać ofertę.",
  },
  {
    icon: Video,
    title: "Produkcja foto i wideo oraz projektowanie graficzne",
    description:
      "Plan produkcji wynika z kanału i komunikatu. Przygotowujemy zdjęcia produktowe i wizerunkowe, nagrania, montaż filmu, rolki oraz grafiki do reklam i kampanii digitalowych. Przed pracą ustalamy scenariusz, listę ujęć lub formatów, materiały od firmy, poprawki i sposób przekazania plików. Produkcję w Krakowie planujemy po potwierdzeniu lokalizacji i zakresu.",
  },
  {
    icon: PenTool,
    title: "Kreatywna agencja: identyfikacja i komunikacja marki",
    description:
      "Oferujemy kompleksowe porządkowanie sposobu prezentowania firmy, a kreatywny kierunek wynika z jej charakteru. Usługi agencji mogą obejmować znak, kolory, typografię i szablony materiałów. Plan komunikacji utrzymuje jednolity przekaz na stronie i w reklamie. Pełne zaangażowanie nie zastępuje jasnych akceptacji, a eksperckie treści powinny opierać się na prawdziwych informacjach.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief i diagnoza",
    description:
      "Zbieramy informacje dotyczące Twoich celów marketingowych, oferty, odbiorców, obszaru sprzedaży i sposobu obsługi zapytań. Sprawdzamy stronę, profile, dostępne dane i materiały. Ustalamy, co jest problemem: widoczność, komunikat, brak treści, kampania czy droga do kontaktu.",
  },
  {
    step: "02",
    title: "Zakres, strategia i wycena",
    description:
      "Działania marketingowe Twojej firmy wymagają jasnych priorytetów. Wybieramy potrzebne usługi i kanały, a w ofercie opisujemy, co firma zyska: rezultat każdego etapu, harmonogram, odpowiedzialności i liczbę akceptacji. Budżet reklamowy jest pozycją osobną od wynagrodzenia agencji.",
  },
  {
    step: "03",
    title: "Treści, produkcja i wdrożenie",
    description:
      "W zakresie marketingu Twojej firmy ustalamy, co realizować najpierw: teksty, grafiki, zdjęcia, materiały filmowe, poprawki strony lub kampanie. Przed publikacją akceptujesz materiały i docelowy sposób działania. Dostępy do strony oraz kont reklamowych organizujemy bez przekazywania prywatnych haseł pracowników.",
  },
  {
    step: "04",
    title: "Pomiar, wnioski i kolejny etap",
    description:
      "Podsumowujemy wykonane prace i dostępne dane, a następnie wskazujemy, co wymaga poprawy. Mierzalne efekty oceniamy na podstawie uzgodnionych zdarzeń i jakości kontaktów. Nie powtarzamy automatycznie działań, które nie mają uzasadnienia w danych lub strategii.",
  },
];

export default function AgencjaMarketingowaKrakow() {
  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords="agencja marketingowa kraków, agencja reklamowa kraków, marketing internetowy kraków, kampanie reklamowe kraków, seo kraków, google ads kraków"
      />
      <ServiceSchema
        name="Usługi marketingowe dla firm z Krakowa"
        description="Strategia marketingowa, treści, kampanie Google Ads i Meta Ads, SEO, strony internetowe, social media oraz produkcja foto i wideo dla firm z Krakowa."
        provider="FOTZ Studio"
        areaServed="Kraków"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Agencja marketingowa", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
          { name: "Kraków", url: canonicalUrl },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.07),transparent_50%)]" />
        <div className="container-wide relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-sm text-yellow-400 mb-6">
            <MapPin className="w-4 h-4" /> Marketing dla firm z Krakowa — współpraca online
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Agencja marketingowa Kraków
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Łączymy strategię, treści, reklamy i produkcję w spójny plan marketingowy dopasowany do celu Twojej firmy. Wybierasz potrzebne usługi, a przed startem znasz zakres, odpowiedzialności i sposób pomiaru zapytań.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gap-2 bg-yellow-400 text-gray-900 hover:bg-yellow-300">
              <Link to={contactHref}>
                Opisz cel i poproś o zakres <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <a href="#oferta">Zobacz usługi marketingowe</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Agencja marketingowa czy agencja reklamowa: jak poznać potrzeby Twojego biznesu?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div className="space-y-5">
              <p>
                Nazwy bywają używane zamiennie, dlatego ważniejszy jest zakres niż etykieta. Agencja reklamowa może koncentrować się na kreacji i emisji, agencja marketingu łączy promocję ze strategią, treściami i analizą, a interaktywna agencja projektuje także strony internetowe. Różne zespoły mogą oferować odmienne kompetencje, więc wyszukiwanie „agencja reklamowa Kraków” nie przesądza jeszcze, czego potrzebuje Twój biznes.
              </p>
              <p>
                Jeśli szukasz agencji marketingowej, zacznij od problemu: mało wartościowych zapytań, niejasna oferta, brak materiałów albo trudność z oceną kampanii. Profesjonalne usługi powinny wskazywać sposób rozwiązania tego problemu. Dobra obsługa klienta obejmuje także zrozumiałe akceptacje i dostęp do wyników pracy.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Kompleksowa obsługa firm nie oznacza uruchamiania wszystkiego naraz. Dla firmy usługowej priorytetem może być strona z ofertą i pomiar telefonu, dla e-commerce — kategorie sklepu internetowego i kampanie produktowe, a dla B2B lub software house — eksperckie treści oraz kwalifikacja leadów. Każda branża ma inne potrzeby, a plan uwzględnia możliwości zespołu sprzedaży.
              </p>
              <p>
                Wybór godnego zaufania partnera powinien opierać się na zakresie, zasadach i sposobie pomiaru, nie na obietnicy sprzedaży. Sprawdź, kto pracuje w danym obszarze marketingu, co dokładnie otrzymasz i jak rozliczane są treści, produkcja oraz reklama. Sam opis „agencja reklamowa z Krakowa” nie zastępuje jasnych zasad, niezależnie od tego, czy zespół pracuje na miejscu, czy zdalnie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Usługi agencji marketingowej: zakres usług dla Twojej firmy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Strategia określa kierunek, treści wyjaśniają ofertę, reklamy zapewniają dystrybucję, a produkcja dostarcza materiały. Te obszary mogą współpracować, ale każdy ma osobny rezultat i zakres wyceny.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item) => (
              <article key={item.title} className="h-full rounded-xl border border-gray-700 bg-gray-950 p-6">
                <item.icon className="w-7 h-7 text-yellow-400 mb-4" />
                <h2 className="text-lg font-semibold text-white mb-3">{item.title}</h2>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="strategia" className="section-padding bg-gray-950 scroll-mt-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Strategie marketingowe dla Twojej marki i rozwoju biznesu w Krakowie
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <p>
              Najpierw ustalamy, co marketing ma zmienić w biznesie. Celem może być pozyskiwanie klientów z Krakowa, wejście z ofertą w nowy segment, wsparcie sprzedaży lub zwiększenie rozpoznawalności marki. Dopiero potem dobieramy kanał. Zintegrowane kampanie łączą wyszukiwarkę Google, lokalną stronę i media społecznościowe, ale każdy kanał ma własną rolę oraz miernik.
            </p>
            <p>
              Zakres digital marketingu w 2026 roku wymaga spójności między reklamą a miejscem docelowym. Ten sam argument powinien być widoczny w kreacji, na stronie docelowej i w rozmowie handlowej. Firmy mogą działać w centrum Krakowa, innych dzielnicach lub poza miastem, dlatego obszar emisji oraz treść strony muszą odzwierciedlać rzeczywistą dostępność oferty. Nie tworzymy lokalnych obietnic ani stron bez praktycznego znaczenia dla odbiorcy.
            </p>
          </div>
        </div>
      </section>

      <section id="pomiar" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Jak mierzymy leady, wyniki sprzedaży i przychód?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Źródła i strony docelowe",
                text: "W Search Console analizujemy zapytania, wyświetlenia, kliknięcia i widoczne adresy w wyszukiwarce Google. Dla kampanii sprawdzamy emisję, koszty oraz wejścia na właściwe oferty. Dane organiczne i płatne oceniamy osobno, z uwzględnieniem sezonowości i zmian w serwisie.",
              },
              {
                title: "Uzgodnione działania użytkownika",
                text: "Jeśli dostępy i konfiguracja na to pozwalają, mierzymy formularze, kliknięcia telefonu lub inne działania prowadzące do kontaktu. Lead nie jest jeszcze klientem, a kliknięcie telefonu nie dowodzi odbytej rozmowy. Dlatego opisujemy, co dokładnie oznacza raportowane zdarzenie.",
              },
              {
                title: "Kwalifikacja i dalsza obsługa",
                text: "Wyniki sprzedażowe i przychód wymagają informacji od zespołu sprzedaży. Liczba wartościowych zapytań, wysłanych ofert i realizacji pomaga ocenić kanał. Nie przypisujemy kampanii niepotwierdzonej sprzedaży; braki w pomiarze oznaczamy i uzgadniamy sposób ich uzupełnienia.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-xl border border-gray-700 bg-gray-950 p-6">
                <BarChart3 className="w-6 h-6 text-yellow-400 mb-4" />
                <h3 className="font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proces" className="section-padding bg-gray-950 scroll-mt-24">
        <div className="container-wide max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Proces współpracy z agencją krok po kroku
          </h2>
          <p className="text-gray-300 mb-10 leading-relaxed">
            Skuteczne działania dzielimy na zrozumiałe etapy. Wiesz, co powstaje, kto dostarcza materiały, kto akceptuje rezultat i kiedy rozpoczyna się emisja lub publikacja.
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

      <section id="wspolpraca" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Warunki współpracy i wycena bez sztywnych pakietów
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                Wycena zależy od wybranych usług, liczby kanałów, skali stron WWW, potrzebnych treści, logistyki produkcji i zakresu wdrożeń. Jednorazowy audyt lub projekt rozliczamy inaczej niż stałą obsługę. Plan marketingowy określa prace strategiczne, produkcję, wdrożenie, prowadzenie kampanii i budżet dla dostawcy reklamy, a oferta rozdziela ich koszty.
              </p>
              <p>
                Warunki określają terminy, poprawki, akceptacje, sposób komunikacji oraz przekazanie uzgodnionych materiałów. Dostępy do kont i profili pozostają pod kontrolą firmy. Zakres wsparcia technicznego po publikacji zapisujemy osobno, aby było jasne, kto odpowiada za kolejne zmiany.
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-gray-950 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Co przygotować do rozmowy?</h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Adres strony, profile i opis najważniejszej oferty.",
                  "Grupa odbiorców, rzeczywisty obszar sprzedaży i cel projektu.",
                  "Dostępne zdjęcia, wideo, identyfikacja oraz dane o dotychczasowych działaniach.",
                  "Orientacyjny termin, budżet i osoba odpowiedzialna za akceptacje.",
                  "Informacja, kto odbiera zapytania i jak oceniana jest ich jakość.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-yellow-400 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-yellow-400 text-gray-900">
        <div className="container-wide text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-5">
            Porozmawiajmy o marketingu Twojej firmy
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Opisz ofertę, odbiorców i cel. Wskażemy informacje potrzebne do diagnozy oraz przygotujemy zakres prac, produkcji, reklam i pomiaru bez automatycznego pakietu wszystkich kanałów. Realne efekty zaczynają się od jasnego zakresu i uzgodnionego sposobu oceny.
          </p>
          <Button asChild size="lg" className="gap-2 bg-gray-900 text-yellow-400 hover:bg-gray-800">
            <Link to={contactHref}>
              Poproś o zakres i wycenę <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="section-padding bg-gray-950">
        <div className="container-wide max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
            Pytania o marketing i reklamę dla firm z Krakowa
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                id={`krakow-faq-${index}`}
                className="rounded-xl border border-gray-700 bg-gray-900 px-6"
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

      <section className="py-12 bg-gray-900 border-t border-gray-800">
        <div className="container-wide max-w-4xl">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-white mb-4">Powiązane usługi FOTZ</h2>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/uslugi/marketing-internetowy" className="text-yellow-400 hover:underline">Marketing internetowy</Link>
            <Link to="/performance-marketing/google-ads" className="text-yellow-400 hover:underline">Kampanie Google Ads</Link>
            <Link to="/social-media/obsluga" className="text-yellow-400 hover:underline">Obsługa social media</Link>
            <Link to="/uslugi/strony-internetowe" className="text-yellow-400 hover:underline">Strony internetowe</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
