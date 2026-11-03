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

const seoTitle = "Agencja marketingowa Łódź — marketing reklamowy | FOTZ";
const seoDescription = "Agencja marketingowa Łódź: strategia, treści i kampanie reklamowe, SEO, Google Ads, social media oraz produkcja. Sprawdź zakres dla swoich klientów.";
const canonicalUrl = "https://www.fotz-studio.pl/agencja-marketingowa/lodz";
const contactHref = "/kontakt?usluga=marketing#formularz";

const faqItems = [
  {
    question: "Co obejmuje obsługa marketingowa dla firmy z Łodzi?",
    answer:
      "Obsługa marketingowa porządkuje ofertę, strategię, komunikację i promocję. W zależności od potrzeb może obejmować stronę docelową, treści, zdjęcia, filmy, kampanie reklamowe oraz prowadzenie social media. Zakres ustalamy po poznaniu firmy, klientów i dotychczasowych działań. Nie trzeba zlecać wszystkich kanałów jednocześnie.",
  },
  {
    question: "Jak wybrać agencję marketingową w Łodzi?",
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
    question: "Czy agencja spoza Łodzi może prowadzić marketing dla mojej firmy?",
    answer:
      "Tak. Firmy z Łodzi obsługujemy zdalnie: rozmowy, brief, akceptacje i raporty prowadzimy online. Produkcję na miejscu planujemy osobno, po ustaleniu lokalizacji i zakresu. Jeśli wpisujesz „agencja marketingowa z Łodzi” i zależy Ci na codziennym dostępie do biura, zapisz ten warunek w briefie, aby porównać go z naszym modelem pracy.",
  },
];

const serviceItems = [
  {
    icon: Lightbulb,
    title: "Strategiczny marketing i cele biznesowe",
    description:
      "Strategiczny plan marketingowy zaczyna się od oferty i drogi zakupu. Cele biznesowe określają, które działania marketingowe są potrzebne. Analizujemy rynek i konkurencję, a następnie wybieramy SEO, media społecznościowe, content lub strony WWW. Taki plan wskazuje priorytety, role kanałów i mierniki zamiast narzucać pakiet wszystkich usług.",
  },
  {
    icon: FileText,
    title: "Treści i prowadzenie social media",
    description:
      "Przygotowujemy teksty ofertowe, artykuły, posty i scenariusze na podstawie pytań klientów. Marketing w social media zaczyna się od planu tematów i copywritingu. Obsługa profili w mediach społecznościowych obejmuje publikacje w uzgodnionym zakresie. Treści są osobnym zadaniem od reklam: mogą wyjaśniać ofertę lub zwiększyć rozpoznawalność marki i wspierać rozmowę sprzedażową.",
  },
  {
    icon: Target,
    title: "Kampanie Google Ads i Meta Ads",
    description:
      "Prowadzimy kampanie reklamowe z przypisanym celem, kreacją, budżetem i stroną docelową. Google Ads, dawniej AdWords, odpowiada na aktywne wyszukiwania, a Meta Ads na Facebooku i Instagramie dociera do wybranych odbiorców. Kampania reklamowa ma osobny budżet emisji i koszt obsługi. Optymalizujemy ją na podstawie danych, nie obietnicy wyniku.",
  },
  {
    icon: Search,
    title: "SEO i strony WWW: kiedy projektować landing page?",
    description:
      "Agencja interaktywna łączy widoczność w Google z miejscem, do którego trafia użytkownik. Audyt SEO obejmuje indeksowanie, strukturę i treści, a projektowanie stron internetowych — ofertę, wersję mobilną oraz formularz. Dla jednej kampanii przygotowujemy dedykowaną podstronę. Sklep internetowy wymaga osobnej pracy nad kategoriami, produktami i ścieżką zakupu.",
  },
  {
    icon: Video,
    title: "Produkcja foto i wideo oraz projektowanie graficzne",
    description:
      "Plan produkcji wynika z kanału i komunikatu. Przygotowujemy zdjęcia produktowe i wizerunkowe, nagrania, montaż filmu, rolki oraz projektowanie graficzne do reklam i mediów społecznościowych. Przed pracą ustalamy scenariusz, listę ujęć lub formatów, materiały od firmy, poprawki i sposób przekazania plików. Nie produkujemy materiałów bez określonego zastosowania.",
  },
  {
    icon: PenTool,
    title: "Kreatywna agencja: identyfikacja i komunikacja marki",
    description:
      "Agencja kreatywna porządkuje sposób prezentowania firmy, a kreatywny kierunek wynika z jej charakteru. Zakres identyfikacji wizualnej może obejmować znak, kolory, typografię i szablony materiałów. Plan komunikacji utrzymuje jednolity przekaz na stronie i w reklamie. Public relations oraz eksperckie treści w obszarze wizerunku firm powinny opierać się na prawdziwych informacjach i budować zaufanie.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Brief i diagnoza",
    description:
      "Poznajemy ofertę, odbiorców, obszar sprzedaży i sposób obsługi zapytań. Sprawdzamy stronę, profile, dostępne dane i materiały. Ustalamy, co jest problemem: widoczność, komunikat, brak treści, kampania czy droga do kontaktu.",
  },
  {
    step: "02",
    title: "Zakres, strategia i wycena",
    description:
      "Wybieramy potrzebne usługi i kanały oraz dobieramy ekspertów w obszarze marketingu, którego dotyczy zadanie. Oferta określa rezultat każdego etapu, harmonogram, odpowiedzialności, liczbę akceptacji i koszty. Budżet reklamowy jest pozycją osobną od wynagrodzenia agencji.",
  },
  {
    step: "03",
    title: "Treści, produkcja i wdrożenie",
    description:
      "Przygotowujemy uzgodnione teksty, grafiki, zdjęcia, materiały filmowe, poprawki strony lub kampanie. Przed publikacją akceptujesz materiały i docelowy sposób działania. Dostępy do strony oraz kont reklamowych organizujemy bez przekazywania prywatnych haseł pracowników.",
  },
  {
    step: "04",
    title: "Pomiar, wnioski i kolejny etap",
    description:
      "Podsumowujemy wykonane prace i dostępne dane, a następnie wskazujemy, co wymaga poprawy. Rozwój zależy od jakości kontaktów, reakcji odbiorców i celów firmy. Nie powtarzamy automatycznie działań, które nie mają uzasadnienia w danych lub strategii.",
  },
];

export default function AgencjaMarketingowaLodz() {
  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        keywords="agencja marketingowa łódź, agencja reklamowa łódź, marketing internetowy łódź, kampanie reklamowe łódź, seo łódź, google ads łódź"
      />
      <ServiceSchema
        name="Usługi marketingowe dla firm z Łodzi"
        description="Strategia marketingowa, treści, kampanie Google Ads i Meta Ads, SEO, strony internetowe, social media oraz produkcja foto i wideo dla firm z Łodzi."
        provider="FOTZ Studio"
        areaServed="Łódź"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl/" },
          { name: "Agencja marketingowa", url: "https://www.fotz-studio.pl/agencja-marketingowa" },
          { name: "Łódź", url: canonicalUrl },
        ]}
      />
      <FAQSchema items={faqItems} />

      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gray-900 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(234,179,8,0.07),transparent_50%)]" />
        <div className="container-wide relative z-10 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-4 py-2 text-sm text-yellow-400 mb-6">
            <MapPin className="w-4 h-4" /> Marketing dla firm z Łodzi — współpraca online
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
            Agencja marketingowa Łódź
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
            Agencja marketingowa czy agencja reklamowa w Łodzi?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <div className="space-y-5">
              <p>
                Nazwy bywają używane zamiennie, dlatego ważniejszy jest zakres niż etykieta. Agencja reklamowa może koncentrować się na kreacji i emisji, agencja marketingu łączy promocję ze strategią, treściami i analizą, a interaktywna agencja projektuje także strony internetowe. Wyszukiwanie „agencja reklamowa Łódź” nie przesądza jeszcze, jakich kompetencji potrzebuje Twój biznes.
              </p>
              <p>
                Jeśli szukasz agencji marketingowej, zacznij od problemu: mało wartościowych zapytań, niejasna oferta, brak materiałów albo trudność z oceną kampanii. Profesjonalne usługi powinny wskazywać sposób rozwiązania tego problemu. Dobra obsługa klienta obejmuje także zrozumiałe akceptacje i dostęp do wyników pracy.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Kompleksowy zakres nie oznacza uruchamiania wszystkiego naraz. Dla firmy usługowej priorytetem może być strona z ofertą i pomiar telefonu, dla e-commerce — kategorie sklepu internetowego i kampanie produktowe, a dla marki B2B — eksperckie treści oraz kwalifikacja leadów. Każda branża ma inne potrzeby, a plan uwzględnia możliwości zespołu sprzedaży.
              </p>
              <p>
                Wyboru nie opieraj na liście „10 najlepszych” ani obietnicy sprzedaży. Sprawdź, kto pracuje w danym obszarze marketingu, co dokładnie otrzymasz i jak rozliczane są treści, produkcja oraz reklama. Sam opis „agencja reklamowa z Łodzi” nie zastępuje jasnych zasad, niezależnie od tego, czy zespół pracuje na miejscu, czy zdalnie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="oferta" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-5">
              Usługi marketingowe: wybierz zakres dla swojej firmy
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
            Strategie marketingowe i strategie komunikacji dla firm z Łodzi
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-gray-300 leading-relaxed">
            <p>
              Najpierw ustalamy, co marketing ma zmienić w biznesie. Celem może być pozyskiwanie klientów z Łodzi, wejście z ofertą w nowy segment, wsparcie sprzedaży lub zwiększenie rozpoznawalności marki. Dopiero potem dobieramy kanał. Wizytówka Google i lokalna strona pomagają osobom szukającym usługi w pobliżu, kampania Search odpowiada na konkretne zapytanie, a social media mogą budować kontakt z marką przed zakupem.
            </p>
            <p>
              W 2026 roku digital marketing wymaga spójności między reklamą a miejscem docelowym. Ten sam argument powinien być widoczny w kreacji, na stronie docelowej i w rozmowie handlowej. Jeśli firma działa poza Łodzią, obszar emisji oraz treść strony muszą odzwierciedlać rzeczywistą dostępność oferty. Nie tworzymy lokalnych obietnic ani stron bez praktycznego znaczenia dla odbiorcy.
            </p>
          </div>
        </div>
      </section>

      <section id="pomiar" className="section-padding bg-gray-900 scroll-mt-24">
        <div className="container-wide max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Jak mierzymy leady i jakość zapytań od klientów?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Źródła i strony docelowe",
                text: "W Search Console analizujemy zapytania, wyświetlenia, kliknięcia i widoczne adresy. Dla kampanii sprawdzamy emisję, koszty oraz wejścia na właściwe oferty. Dane organiczne i płatne oceniamy osobno, z uwzględnieniem sezonowości i zmian w serwisie.",
              },
              {
                title: "Uzgodnione działania użytkownika",
                text: "Jeśli dostępy i konfiguracja na to pozwalają, mierzymy formularze, kliknięcia telefonu lub inne działania prowadzące do kontaktu. Lead nie jest jeszcze klientem, a kliknięcie telefonu nie dowodzi odbytej rozmowy. Dlatego opisujemy, co dokładnie oznacza raportowane zdarzenie.",
              },
              {
                title: "Kwalifikacja i dalsza obsługa",
                text: "Warto łączyć dane marketingu i reklamy z informacją od zespołu sprzedaży. Liczba wartościowych zapytań, wysłanych ofert i realizacji pomaga ocenić kanał. Nie przypisujemy kampanii niepotwierdzonej sprzedaży; braki w pomiarze oznaczamy i uzgadniamy sposób ich uzupełnienia.",
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
            Ustal plan marketingowy dopasowany do Twojej firmy
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Opisz ofertę, odbiorców i cel. Wskażemy informacje potrzebne do diagnozy oraz przygotujemy zakres prac, produkcji, reklam i pomiaru bez automatycznego pakietu wszystkich kanałów.
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
            Pytania o marketing i reklamę dla firm z Łodzi
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                id={`lodz-faq-${index}`}
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
