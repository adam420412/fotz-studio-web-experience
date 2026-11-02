import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, Clock, Search, Target, User } from "lucide-react";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const seoTitle = "Copywriting i copywriter — co to jest? Definicja | FOTZ";
const seoDescription = "Copywriting: definicja, rodzaje tekstów, SEO i praca copywritera w marketingu. Zobacz nagłówki, CTA, przykłady przed i po oraz pomiar zapytań.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/copywriting-co-to";
const pageTitle = "Copywriting — co to jest? Kim jest copywriter i jak pracuje?";

const breadcrumbs = [
  { label: "Strona główna", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Copywriting — co to jest?" },
];

const textTypes = [
  {
    title: "Teksty sprzedażowe i oferty",
    text: "Strona ofertowa, strona kampanii i tekst sprzedażowy porządkują argumenty oraz prowadzą do zapytania albo finalizacji zakupu. Język korzyści tłumaczy cechę rozwiązania na konkretny rezultat dla odbiorcy, bez obiecywania efektu, którego firma nie może udokumentować.",
  },
  {
    title: "Reklamy i kampanie",
    text: "Tekst reklamowy, slogan i scenariusz mają mało miejsca, dlatego muszą szybko komunikować temat i dalszy krok. Powstają też materiały promocyjne, e-maile oraz posty w mediach społecznościowych. Przekaz powinien odpowiadać etapowi decyzji, a nie tylko przyciągać uwagę.",
  },
  {
    title: "Teksty na strony internetowe",
    text: "Treści na strony internetowe obejmują opis firmy, opisy produktów i materiały odpowiadające zapytaniom, które ułatwiają porównanie. Dłuższe formy, takie jak poradnik czy case study, łączą informację z kontekstem oferty. Dobre teksty nie powtarzają jednej frazy, lecz wyjaśniają zagadnienie i pokazują, co czytelnik może zrobić dalej.",
  },
  {
    title: "Mikroteksty i artykuły informacyjne",
    text: "UX writing obejmuje przyciski, formularze i komunikaty, a treść informacyjna — artykuły oraz materiały edukacyjne. Ten rodzaj tekstu pomaga w obsłudze i ma znaczenie dla wizerunku marki. Tworzenie treści może wspierać cele biznesowe także wtedy, gdy nie kończy się natychmiastową sprzedażą.",
  },
];

const processSteps = [
  {
    title: "1. Research i brief",
    text: "Ustal odbiorcę, problem, cel i miejsce publikacji. Zbierz ofertę, rozmowy z klientami, pytania sprzedażowe i dostępne dane. Sprawdź, czego ludzie szukają oraz jak konkurencja opisuje podobne rozwiązania. Brief powinien wskazywać źródła, ograniczenia, osobę akceptującą i kryterium gotowości.",
  },
  {
    title: "2. Draft oparty na hierarchii",
    text: "Zapisz najpierw jedną myśl przewodnią, potem kolejność argumentów. Draft ma domykać temat: od problemu przez rozwiązanie i zakres do działania. Nie poleruj każdego zdania przed sprawdzeniem struktury. W notatkach oznacz informacje wymagające potwierdzenia zamiast uzupełniać je przypuszczeniami.",
  },
  {
    title: "3. Redakcja i weryfikacja",
    text: "Usuń ogólniki, powtórzenia i nieudokumentowane liczby. Sprawdź zgodność nagłówków z treścią, zrozumiałość CTA, poprawność linków i spójność tonu. Przeczytaj tekst jako odbiorca, który nie zna firmy. Na końcu zweryfikuj nazwy, parametry, warunki oferty oraz dane kontaktowe z właścicielem informacji.",
  },
  {
    title: "4. Publikacja i test",
    text: "Po publikacji sprawdź wersję mobilną, formularz i zdarzenia analityczne. Testuj jedną istotną zmianę naraz, na przykład nagłówek albo kolejność sekcji, i zapisz datę oraz hipotezę. Wynik porównuj z zapytaniami i zachowaniem użytkowników; sama zmiana tekstu nie dowodzi przyczyny zmiany sprzedaży.",
  },
];

const faqItems = [
  {
    question: "Co to jest copywriting i jaką rolę pełni copywriter?",
    answer: "Copywriting to planowanie i pisanie przekazu, który pomaga odbiorcy zrozumieć ofertę i podjąć wskazane działanie. Copywriter odpowiada za research, strukturę, redakcję i dopasowanie tekstu do kanału. Może pracować w zespole lub jako freelancer; samo ładne pisanie nie zastępuje znajomości oferty i odbiorców.",
  },
  {
    question: "Czym copywriting różni się od pisania treści i content marketingu?",
    answer: "Copywriting zwykle koncentruje się na decyzji i działaniu, a content writing na wyjaśnianiu zagadnień. Ten szerszy obszar obejmuje planowanie, publikację i dystrybucję treści. W praktyce jeden poradnik może być informacyjny, odpowiadać na pytania z wyszukiwarki i prowadzić do oferty, więc granica zależy od zadania, nie od etykiety zawodu.",
  },
  {
    question: "Czy optymalizacja tekstu polega na powtarzaniu słów kluczowych?",
    answer: "Nie. Ten sposób pisania łączy odpowiedź na intencję wyszukiwania z czytelną strukturą i naturalnym językiem. Fraza może pojawić się w title, nagłówku lub treści, jeśli pomaga opisać temat. Optymalizacja nie polega na osiągnięciu sztywnej liczby wystąpień i nie gwarantuje pozycji w wynikach wyszukiwania.",
  },
  {
    question: "Czy sztuczna inteligencja zastąpi copywritera?",
    answer: "AI może wspomóc listę pytań, warianty lub wstępną redakcję, ale wymaga sprawdzenia faktów, kontekstu i praw do materiałów. Sztuczna inteligencja nie zastępuje rozmowy z klientem, odpowiedzialności za ofertę ani oceny danych. Kreatywny wariant również trzeba zweryfikować. Warto traktować ją jako narzędzie procesu, a nie automatyczne źródło gotowych twierdzeń.",
  },
  {
    question: "Ile kosztuje copywriting?",
    answer: "Cena zależy od researchu, rodzaju tekstu, liczby widoków, źródeł, konsultacji, redakcji i zakresu pomiaru. Porównuj oferty według rezultatu prac oraz odpowiedzialności, nie tylko liczby znaków. Przed wyceną warto opisać cel, odbiorców, termin, dostępne materiały i sposób akceptacji.",
  },
  {
    question: "Ile zarabia copywriter za 1000 znaków?",
    answer: "Nie ma jednej stawki za 1000 znaków ani jednego sposobu rozliczania. Widełki zależą od doświadczenia, specjalizacji, źródeł i zakresu pracy, a wynagrodzenie etatowe to inny temat niż cena zlecenia. Przy porównaniu ofert sprawdź, czy obejmują brief, research, poprawki, publikację i prawa do tekstu.",
  },
];

export default function BlogCopywritingCoTo() {
  return (
    <>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogType="article"
      />
      <ArticleSchema
        title={pageTitle}
        description={seoDescription}
        datePublished="2024-11-01"
        dateModified="2026-11-02"
        url={canonicalUrl}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 9 min czytania</span>
                <span className="flex items-center gap-1"><User className="w-4 h-4" /> Zespół FOTZ Studio</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">{pageTitle}</h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jak działa copywriting w praktyce? To sposób planowania i redagowania przekazu, który pomaga
                czytelnikowi zrozumieć ofertę oraz wybrać dalszy krok. Poniżej znajdziesz rodzaje tekstów,
                strukturę oferty, proces pracy i przykłady redakcji bez obietnic wyników.
              </p>
            </motion.div>
          </div>
        </section>

        <article className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <section id="definicja" aria-labelledby="definicja-title">
                <h2 id="definicja-title" className="text-2xl font-bold text-slate-900 mt-8 mb-4">Czym jest copywriting i czym zajmuje się copywriter? Definicja</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Copywriting to proces tworzenia tekstów marketingowych, który łączy wiedzę o odbiorcy, ofercie i kanale
                  komunikacji. W praktyce obejmuje pisanie tekstów reklamowych oraz redakcję przekazu. Jego zadaniem jest
                  ułatwienie zrozumienia i określonego działania: wysłania zapytania, zapisu, rejestracji albo zakupu
                  produktu lub usługi.
                  Przekaz perswazyjny powinien opierać argumenty na faktach; skuteczny copywriting nie przedstawia samej
                  obietnicy jako dowodu wartości.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Copywriter to specjalista, który bada potrzeby odbiorców, wybiera informacje i redaguje przekaz.
                  Praca copywritera polega na tworzeniu treści, ale obejmuje też analizę, rozmowę z klientem i kontrolę
                  jakości. Dobry copywriter wie, jak tworzyć teksty dla różnych kanałów; łączy kreatywność, umiejętność
                  pisania tekstów i znajomość zasad. Copywriterzy tworzą przekonujące komunikaty, lecz nie zastępują
                  eksperta w danej dziedzinie.
                </p>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="rodzaje" aria-labelledby="rodzaje-title" className="mt-10">
                <h2 id="rodzaje-title" className="text-2xl font-bold text-slate-900 mb-4">Rodzaje tekstów i ich zadania</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Nie ma jednego uniwersalnego tekstu promocyjnego. Inny będzie opis usługi, inny e-mail do osoby,
                  która zna markę, a jeszcze inny wpis w social media. Rodzaj pracy zależy od intencji i miejsca kontaktu.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  {textTypes.map((item) => (
                    <div key={item.title} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="intencja" aria-labelledby="intencja-title" className="mt-10">
                <h2 id="intencja-title" className="text-2xl font-bold text-slate-900 mb-4">Intencja, odbiorca i moment decyzji</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Zanim zaczniesz pisać teksty, opisz jedną sytuację odbiorcy. Osoba poznająca temat potrzebuje definicji
                  i przykładu, a klient porównujący oferty — zakresu, warunków i odpowiedzi na zastrzeżenia. Komunikat
                  informacyjny nie musi zmuszać do kontaktu, a strona sprzedażowa nie powinna ukrywać podstaw oferty.
                  Dobór argumentu wynika z pytania, nie z samej cechy demograficznej.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  W briefie zapisz: co odbiorca wie, czego nie wie, co może go zatrzymać i jaką decyzję ułatwia strona.
                  Wywiady z klientami pokazują język grupy docelowej, a dane — co użytkownicy chcą wyszukiwać. Reklama
                  może kierować odbiorców do zakupu produktu, a poradnik pomaga porównać rozwiązania; oba formaty wymagają
                  innych argumentów. Tekst może wpływać na decyzje zakupowe, gdy porządkuje wybór, ale nie powinien
                  wykorzystywać fałszywej presji.
                </p>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="oferta" aria-labelledby="oferta-title" className="mt-10">
                <h2 id="oferta-title" className="text-2xl font-bold text-slate-900 mb-4">Struktura oferty, nagłówki i CTA</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Czytelna oferta odpowiada w kolejności: dla kogo jest rozwiązanie, jaki problem adresuje, co dokładnie
                  obejmuje i co zrobić dalej. Następnie wyjaśnia proces, warunki oraz ograniczenia. Referencje lub dane
                  można użyć tylko ze zgodą i źródłem. Storytelling, czyli opowiadanie historii, pomaga pokazać kontekst,
                  lecz nie zastępuje informacji o produkcie lub usłudze.
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Nagłówek otwierający: temat i adresat, bez ogólnego hasła dla wszystkich.",
                    "Sekcje: jedna myśl w każdej, konkretny zakres i logiczna kolejność pytań.",
                    "CTA: nazwa działania, np. „Opisz projekt”, oraz informacja, co wydarzy się po kontakcie.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Każdy nagłówek powinien ułatwiać skanowanie, a nie powtarzać frazę. Wezwanie do działania odnosi się
                  do rzeczywistego kroku. „Zamów bezpłatną wycenę” wymaga faktycznie bezpłatnej wyceny; jeśli warunki
                  są inne, CTA trzeba zmienić. To część zakresu marketingu i obsługi, nie wyłącznie kwestia stylu.
                </p>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="seo" aria-labelledby="seo-title" className="mt-10">
                <h2 id="seo-title" className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Search className="w-6 h-6 text-blue-600" /> SEO copywriting bez upychania fraz
                </h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Copywriting SEO zaczyna się od intencji zapytania i przeglądu wyników wyszukiwania. Ustal, czy użytkownik
                  szuka definicji, porównania czy oferty. Wyszukiwarka jest jednym z miejsc kontaktu z marką, dlatego strona
                  powinna dostarczyć odpowiedź zapowiedzianą w wyniku. Następnie zaplanuj nagłówki, linki wewnętrzne,
                  title i opis. Słowa kluczowe pomagają nazwać temat, a lista fraz kluczowych porządkuje pytania. Redakcję
                  uzupełnij optymalizacją pod kątem wyszukiwarek: sprawdź indeksowanie, jakość strony i dostępność treści.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Zasady SEO wymagają naturalnego języka oraz rzeczywistej wartości dla czytelnika. Nie dodawaj wariantów
                  frazy do każdego akapitu i nie twórz stron różniących się tylko słowem. Widoczność wymaga również pomiaru,
                  ponieważ ręczne sprawdzenie jednej frazy nie pokazuje widoczności całej witryny. Treści SEO powinny
                  prowadzić do powiązanej usługi tam, gdzie jest to logiczne, np. do strony
                  {" "}<Link to="/seo/copywriting-seo" className="text-blue-600 font-semibold hover:underline">copywritingu SEO</Link>.
                </p>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="proces" aria-labelledby="proces-title" className="mt-10">
                <h2 id="proces-title" className="text-2xl font-bold text-slate-900 mb-4">Dobry copywriter: research, draft, redakcja i test</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Proces tworzenia treści ogranicza zgadywanie i ułatwia akceptację. Niezależnie od tego, czy powstaje
                  krótka reklama, czy rozbudowany poradnik, zachowaj kolejność decyzji i osobną fazę sprawdzania.
                </p>
                <div className="space-y-4 mb-6">
                  {processSteps.map((step) => (
                    <div key={step.title} className="border-l-4 border-blue-600 bg-slate-50 p-5 rounded-r-lg">
                      <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-700 text-sm leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="przyklady" aria-labelledby="przyklady-title" className="mt-10">
                <h2 id="przyklady-title" className="text-2xl font-bold text-slate-900 mb-4">Przykłady przed i po: redakcja, nie wynik testu</h2>
                <p className="text-slate-700 leading-relaxed mb-5">
                  Poniższe warianty pokazują sposób pracy nad jasnością. Nie są case study i nie przypisujemy im wzrostu
                  konwersji. Po zmianie należy sprawdzić zgodność z ofertą, a dopiero potem zebrać dane.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                    <p className="text-sm text-slate-500 mb-1"><strong>Przed:</strong> „Jesteśmy nowoczesną firmą i oferujemy kompleksowe rozwiązania dla każdego.”</p>
                    <p className="text-slate-800"><strong>Po:</strong> „Projektujemy stronę firmową z opisem usług i formularzem kontaktowym. Zakres ustalamy po briefie.”</p>
                    <p className="text-sm text-slate-600 mt-2">Zmiana: konkretna usługa i warunek współpracy zamiast ogólnej pochwały.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
                    <p className="text-sm text-slate-500 mb-1"><strong>Przed:</strong> „Kliknij tutaj już teraz!”</p>
                    <p className="text-slate-800"><strong>Po:</strong> „Opisz potrzebny tekst i odbiorców. W odpowiedzi ustalimy zakres oraz materiały do wyceny.”</p>
                    <p className="text-sm text-slate-600 mt-2">Zmiana: jasne CTA wyjaśnia działanie i następny krok bez presji.</p>
                  </div>
                </div>
              </section>
            </FadeInView>

            <FadeInView>
              <section id="pomiar" aria-labelledby="pomiar-title" className="mt-10">
                <h2 id="pomiar-title" className="text-2xl font-bold text-slate-900 mb-4">Jak mierzyć tekst i zapytania?</h2>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Najpierw przypisz miernik do zadania. W Google Search Console obserwuj zapytania, wyświetlenia, kliknięcia
                  i strony docelowe, ale nie traktuj średniej pozycji jako wyniku sprzedaży. Dla formularza skonfiguruj
                  zdarzenie wysłania i sprawdź je testowo. Następnie porównuj źródło zapytania z jego jakością w CRM lub
                  rejestrze obsługi, z uwzględnieniem zgód i ograniczeń pomiaru.
                </p>
                <p className="text-slate-700 leading-relaxed mb-6">
                  Działania marketingowe warto oceniać w porównywalnych okresach i zapisywać zmiany strony. Marketing
                  internetowy ułatwia pomiar, ale dane wymagają kontekstu. Skuteczność angażujących treści analizuj przez
                  dalszą nawigację lub wysłania formularza, pamiętając, że konwersja zależy także od oferty, ruchu i obsługi.
                  Nie przypisuj całego efektu jednemu nagłówkowi bez danych i kontroli innych zmian.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                  <Target className="w-6 h-6 text-blue-600 mb-2" />
                  <p className="text-blue-900 font-semibold mb-2">Od poradnika do konkretnego zadania</p>
                  <p className="text-blue-800 text-sm leading-relaxed mb-3">
                    Przygotuj brief z odbiorcą, celem i źródłami. Zobacz zakres
                    {" "}<Link to="/content-marketing/copywriting-landing" className="font-semibold hover:underline">tekstów na landing page</Link>
                    {" "}lub <Link to="/kontakt?usluga=seo#formularz" className="font-semibold hover:underline">skontaktuj się z FOTZ Studio</Link>,
                    aby omówić wymagany rezultat prac.
                  </p>
                  <Link to="/kontakt?usluga=seo#formularz" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline text-sm">
                    Przejdź do formularza kontaktowego <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </section>
            </FadeInView>
          </div>
        </article>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50" aria-labelledby="faq-title">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 id="faq-title" className="text-2xl font-bold text-center mb-8">Copywriting — najczęstsze pytania</h2>
              <FAQSchema items={faqItems} />
              <div className="w-full bg-white rounded-lg border border-slate-200 divide-y divide-slate-200">
                {faqItems.map((item) => (
                  <details key={item.question} className="group px-6 py-4">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900">
                      {item.question}
                    </summary>
                    <p className="text-slate-700 leading-relaxed mt-3">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection />
      </Layout>
    </>
  );
}
