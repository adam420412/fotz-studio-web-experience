import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const criteria = [
  {
    number: 1,
    title: "Specjalizacja",
    description: "Czy agencja oferuje kompleksowe uslugi (full-service) czy specjalizuje sie w jednym obszarze? Agencje full-service zajmuja sie wszystkim - stronami, SEO, social media, PPC. Specjalistyczne skupiaja sie na jednym obszarze (np. SEO czy Google Ads). Wybor zalezy od Twoich potrzeb - jesli masz male budget, specjalista bedzie tanszy. Jesli szukasz jednego partnera do wszystkiego, full-service bedziesz miec wygodniej."
  },
  {
    number: 2,
    title: "Portfolio i case studies",
    description: "Nie patrzysz na ilosc prac, lecz na ich jakosc i efekty. Dobre case studies pokazuja: co bylo problemem, jakie rozwiazanie zastosowano, jakie byly efekty (liczby, procenty wzrostu). Unikaj agencji, ktore pokazuja tylko szablonowe projekty bez kontekstu biznesowego. Sprawdz czy case study pokazuje rzeczywiste problemy biznesowe i ich rozwiazania."
  },
  {
    number: 3,
    title: "Opinie i referencje",
    description: "Sprawdzaj oceny na Google Maps, Trustpilot, Clutch.co i LinkedInie. Szukaj konkretnych opinii z nazwiskami, a nie skomentowanych ogolnie. Dziwiaj sie, jesli agencja nie ma ani jednego negatywnego komentarza - to podejrzane. Zadzwon do kilku referencji i zapytaj o ich rzeczywiste doswiadczenie."
  },
  {
    number: 4,
    title: "Transparentnosc cennika",
    description: "Agencja powinna wyjasniac, co sie znajduje w ofercie i ile kosztuje kazdy element. Brak ukrytych oplat, dodatkowych kosztow za raporty czy opiekuna. Spytaj co wlaczaja w cene i jakie moga byc dodatkowe koszty (np. media buying, hosting, certyfikaty)."
  },
  {
    number: 5,
    title: "Komunikacja i dostepnosc",
    description: "Czy agencja odpowiada szybko na Twoje pytania? Czy masz przydzielonego konkretnego opiekuna? Spytaj ile czasu zajmuje im odpowiedz na maila (powinno byc do 24h). Czy mozesz sie z nimi spotykac regularnie, czy wszystko przez email?"
  },
  {
    number: 6,
    title: "Rozumienie Twojej branzy",
    description: "Agencja, ktora robi projekty w Twojej branzy, lepiej rozumie Twoj biznes. Nie musza miec doswiadczenia wlasnie w Twojej niszce, ale powinni byc gotowi sie jej nauczyc. Sprawdz czy zadaja ci dobre pytania o Twoim biznesie podczas pierwszych rozmow."
  },
  {
    number: 7,
    title: "Narzedzia i technologie",
    description: "Agencja powinna uzywac nowoczesnych narzedzi: GA4, Google Search Console, Meta Ads Manager, narzedzia SEO (SEMrush, Ahrefs), CRM itp. Pytaj jakie narzedzia uzywaja i czy masz dostep do licznikow w swoim koncie Google Analytics."
  },
  {
    number: 8,
    title: "Reporting i analityka",
    description: "Co miesiac powinna wysylac ci raporty z efektami pracy. Raporty powinny pokazywac: liczbe wizyt, konwersji, ROI, pozycje w Google, zaangazowanie na social media. Pytaj czy raporty sa automatyczne czy robione recznie, oraz czy mozesz je dostat szybko po koncu miesiaca."
  },
  {
    number: 9,
    title: "Elastycznosc umowy",
    description: "Nie godz sie na umowy na 12 lub 24 miesiace, jesli nie masz pewnosci czy agencja jest dobra. Poczatek wspolpracy to okres testowy - preferuj umowy na 1 lub 3 miesiace. Jesli agencja nie zgadza sie na krotsze umowy, to podejrzane."
  },
  {
    number: 10,
    title: "Kultura i wartosci",
    description: "Czy lubisz pracowac z ta agencja? Czy czujesz, ze sa zainteresowani sukcesem Twojej firmy? Czy sie z nimi swobodnie porozumiewasz? Wspolpraca z agencja to czesto wielomiesiecza zwiazek - ważne zeby to byla przyjemna wspolpraca."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje wspolpraca z agencja marketingowa?",
    answer: "Cena zalezy od zakresu uslug, szumienia agencji i Twojego miasta. Agencje lokalne w mniejszych miastach czesto sa tańsze. Przychyad sie za 1000-3000 PLN mesiecznie za podstawowe uslugi (SEO, social media), a za kompleksowe rozwiazania 5000-15000+ PLN. Duze agencje czy zagraniczni gracze moga kosztowac znacznie wiecej."
  },
  {
    question: "Jak sprawdzic czy agencja marketingowa jest dobra?",
    answer: "Sprawdz portfolio, opinie na Google i Clutch.co, zapytaj o case studies z wynikami. Zadzwon do paru referencji. Podczas pierwszej konsultacji spytaj ile czasu robi im sie za pomoca - dobre agencje powinny byc gotowe poswiecic minimum 1-2 godzin na diagnose Twojego biznesu."
  },
  {
    question: "Czy warto podpisywac dluga umowe z agencja?",
    answer: "Nie na poczatku. Zaproponuj 1-3 miesiace wspólpracy aby sprawdzic czy sie klapki. Dlugie umowy maja sens gdy juz widzisz efekty i jestes zadowolony. Jesli agencja nie przystaje na krotsze umowy, to mozliwe ze sie nie ufaja swoim efektom."
  },
  {
    question: "Co powinna zawierac umowa z agencja marketingowa?",
    answer: "Umowa powinna zawierac: zakres uslug, cene i warunki platnosci, KPI (cele, ktorych ma osiagnac agencja), raportowanie (co i kiedy dostaniesz), czas reakcji na pytania, warunki rozwiazania umowy, dostep do Twoich kont reklamowych, odpowiedzialnosc za efekty."
  },
  {
    question: "Jak dlugo trwa zanim agencja zacznie przynosic efekty?",
    answer: "Zalezy od zakresu. Social media i Google Ads - pierwsze efekty w 2-4 tygodnie. SEO - minimum 2-3 miesiace zanim zobaczysz zmiane. PPC - od razu, ale optymalizacja trwa kilka tygodni. Pytaj agencje o prognozy na poczatku wspolpracy."
  },
  {
    question: "Czym rozni sie agencja marketingowa od agencji reklamowej?",
    answer: "Agencja marketingowa zajmuje sie cała strategia - badania, content, SEO, social media, email marketing. Agencja reklamowa skupia sie glownie na tworzeniu reklam i kampaniach platnychPPC). Agencja marketingowa jest szersza, agencja reklamowa bardziej specjalistyczna."
  },
  {
    question: "Jak sprawdzic portfolio agencji marketingowej?",
    answer: "Pytaj o case studies z wynikami - liczby wizyt, konwersji, zwrotu z inwestycji. Nie patrzysz na piekne zdjecia, lecz na rzeczywiste biznesowe rezultaty. Sprawdzaj czy sa to projekty z Twojej branzy. Dobra agencja bez problemu pokaże 3-5 referencji z wynikami."
  },
  {
    question: "Czy mala firma powinna korzystac z agencji marketingowej?",
    answer: "Tak, ale rachunek sie tutaj. Dla malych firm bardziej sprawdzi sie praca ze specjalista (np. SEO-owcem) niz cala agencja. Szukaj agencji szybko sie rozwijajacych czy freelancerow ktorzy pracuja z malymi biznesami. Cena bedzie niska, a efekty podobne."
  }
];

const breadcrumbItems = [
  { name: "Strona glowna", path: "/" },
  { name: "Blog", path: "/blog" },
  { name: "Jak wybrac agencje marketingowa", path: "/blog/jak-wybrac-agencje-marketingowa" }
];

export default function BlogJakWybracAgencjeMarketingowa() {
  return (
    <>
      <SEOHead
        title="Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025"
        description="Kompletny przewodnik jak wybrać agencję marketingową. 10 kryteriów wyboru, 5 błędów do uniknięcia, pytania na rozmowę i lista red flag."
        canonical="https://fotz.pl/blog/jak-wybrac-agencje-marketingowa"

        keywords="Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 poradnik, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 strategia, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 jak zrobić, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 marketing, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 przykłady, Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025 w Polsce"
      />
      
      <ArticleSchema
        headline="Jak wybrac agencje marketingowa? 10 kryteriow wyboru w 2025"
        description="Kompletny przewodnik jak wybrać agencję marketingową. 10 kryteriów wyboru, 5 błędów do uniknięcia, pytania na rozmowę i lista red flag."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        author="Fotz Studio"
        image="https://fotz.pl/og-jak-wybrac-agencje.jpg"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbItems} />

        <div className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-blue-950 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-blue-600/20 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Marketing / Poradnik
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Jak wybrac agencje marketingowa?
              </h1>
              
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Poradnik dla przedsiebiorcy - jak nie popalic sie przy wyborze agencji. 10 kryteriow, 5 bledow do unikniecia, pytania na rozmowe i lista red flag.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">10</div>
                  <div className="text-sm text-slate-300">kryteriow wyboru</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">5</div>
                  <div className="text-sm text-slate-300">bledow do unikniecia</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">8</div>
                  <div className="text-sm text-slate-300">pyta\ do zadania</div>
                </div>
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-300">5</div>
                  <div className="text-sm text-slate-300">red flag na ucieczke</div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            {/* Section 1 */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-slate-900">
                  Dlaczego wybor agencji marketingowej jest trudny?
                </h2>
                
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    W Polsce dziala kilka tysiecy agencji marketingowych. Duzych, malych, specjalizujacych sie w jednym obszarze, oferujacych wszystko. Kazda mowi ze jest najlepsza. Jak sie nie znasz na marketingu, latwo pociagnac na pusta obietnice.
                  </p>
                  
                  <p>
                    Decyzja o wyborze agencji to jedna z wazniejszych decyzji dla Twojej firmy. Niedobra agencja moze Ci wysysac budżet bez efektow, a dobra agencja to partner w rozwoju biznesu. Roznica w efektach pomiedzy dobrą a zla agencja to czesto kilkadziesiąt tysiecy zlotych rocznie.
                  </p>

                  <p>
                    Problem w tym, ze wiele agencji mówi dobrze, ale nie dostarcza rezultatów. Obiecuja pozycje nr 1 w Google, gwarantuja wzrost sprzedazy, mówia ze sa ekspertami - a potem nic sie nie zmienia. Dlatego musisz miec konkretne kryteria, wedlug ktorych ocenisz agencje.
                  </p>

                  <p>
                    W tym poradniku pokazemy Ci 10 kryteriow, ktorymi powinienes sie kierowac. Kazdemu wyjasnienmy dlaczego jest wazne i co konkretnie powinienes sprawdzic.
                  </p>
                </div>
              </section>
            </FadeInView>

            {/* Section 2 - 10 Criteria */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  10 kryteriow wyboru agencji marketingowej
                </h2>
                
                <div className="space-y-8">
                  {criteria.map((item) => (
                    <div key={item.number} className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {item.number}. {item.title}
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </FadeInView>

            {/* Section 3 - 5 Errors */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  5 bledow przy wyborze agencji marketingowej
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      Blad 1: Wybieranie najtanszej agencji
                    </h3>
                    <p className="text-red-800">
                      Najtansza agencja czesto oznacza najgorsze efekty. Agencja pracuje na kilkudziesieciu klientach, przydziela Ci pracownika z doswiadczeniem 3 miesiace. Inwestujesz, a efektow nie ma. Lepsiej zapłacic wiecej za agencje ze swietnymi przypadkami.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      Blad 2: Brak sprawdzenia portfolio i case studies
                    </h3>
                    <p className="text-red-800">
                      Agencja pokazuje Ci piekne strony i grafiki, ale bez wyników biznesowych. Czy ci klienci mieli wzrost sprzedazy? Ile osób zaczelo kupowac? To sie nie liczy. Pytaj zawsze o konkretne liczby i wyniki.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      Blad 3: Podpisywanie dlugiej umowy bez efektow
                    </h3>
                    <p className="text-red-800">
                      Umowa na 12 lub 24 miesiace bez gwarancji jakichkolwiek efektow to recepta na straty. Zaczij od 1 miesiaca, potem 3 miesiace. Jesli agencja nie chce, to zły znak.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      Blad 4: Brak KPI w umowie
                    </h3>
                    <p className="text-red-800">
                      Umowa powinna jasno definiowac cele - jaki ma byc wzrost, ile konwersji, jakie pozycje w Google. Bez KPI agencja moze pracowac bez odpowiedzialnosci za wyniki.
                    </p>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                    <h3 className="text-lg font-bold text-red-900 mb-2">
                      Blad 5: Agencja ktora obiecuje zbyt duzo
                    </h3>
                    <p className="text-red-800">
                      Jesli agencja obiecuje pozycje nr 1 w Google bez uwarsunkowania, to klamie. Nikt nie moze zagwarantowac pozycji nr 1 - zależy od konkurencji, budzetu, czasu. Uciekaj od takich obietnic.
                    </p>
                  </div>
                </div>
              </section>
            </FadeInView>

            {/* Section 4 - Questions */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Pytania, ktore musisz zadac agencji przed podpisaniem umowy
                </h2>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
                  <ol className="space-y-6">
                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">1.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Pokaz mi 3 case studies z mojej branzy
                        </p>
                        <p className="text-slate-700">
                          Case study powinno zawierac: problem, rozwiazanie, efekty (liczby).
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">2.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Kto bedzie moim opiekunem?
                        </p>
                        <p className="text-slate-700">
                          Pytaj o nazwisko konkretnej osoby i jej doswiadczenie.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">3.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Jak raportujecie wyniki?
                        </p>
                        <p className="text-slate-700">
                          Co miesiac, jaki format, czy mozesz dostac raport w kilka dni po koncu miesiaca?
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">4.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Czy posiadacie certyfikaty Google Ads / Meta Business?
                        </p>
                        <p className="text-slate-700">
                          Certyfikaty sa potwierdzeniem wiedzy. Bez nich to nie specjalista.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">5.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Jaki jest czas reakcji na maila?
                        </p>
                        <p className="text-slate-700">
                          Dobrze jest do 24h, bardzo dobrze to 12h.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">6.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Co sie dzieje gdy nie ma efektow?
                        </p>
                        <p className="text-slate-700">
                          Czy agencja proponuje zmiane strategii? Czy mozesz rozerwac umowe?
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">7.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Czy mam dostep do moich kont reklamowych?
                        </p>
                        <p className="text-slate-700">
                          Google Analytics, Google Ads, Meta Business powinny byc na Twoim koncie.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="font-bold text-blue-600 text-lg">8.</span>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">
                          Jak wyglada rozliczenie budzetu reklamowego?
                        </p>
                        <p className="text-slate-700">
                          Czy agencja dodaje prowizje? Czy widzisz dokładnie gdzie ida Twoje pieniadze?
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
            </FadeInView>

            {/* Section 5 - Full-service vs Specialist */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Agencja full-service vs specjalistyczna — co wybrac dla firmy?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="border border-slate-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Agencja Full-Service</h3>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        <strong>Zalety:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Jeden partner do wszystkiego</li>
                          <li>Zintegrowana strategia</li>
                          <li>Lepsza komunikacja</li>
                          <li>Mniej frustracji</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Wady:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Wyzsza cena</li>
                          <li>Mogą być słabsze w jednym obszarze</li>
                          <li>Wiecej czasu na zdecydowanie</li>
                        </ul>
                      </p>
                      <p><strong>Koszt:</strong> 5000-15000+ PLN/mc</p>
                    </div>
                  </div>

                  <div className="border border-slate-300 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Agencja Specjalistyczna</h3>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        <strong>Zalety:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Ekspert w swoim obszarze</li>
                          <li>Nizsza cena</li>
                          <li>Lepsze wyniki w specjalizacji</li>
                        </ul>
                      </p>
                      <p>
                        <strong>Wady:</strong>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Musisz sami koordynowac</li>
                          <li>Wiecej kontaktów do prowadzenia</li>
                          <li>Ryzyko niespójności</li>
                        </ul>
                      </p>
                      <p><strong>Koszt:</strong> 1500-5000 PLN/mc</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-100 border border-slate-300 rounded-lg p-6">
                  <h4 className="font-bold text-slate-900 mb-4">Kto powinien wybrać którą opcję?</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li><strong>Full-service:</strong> Duże firmy, przedsiebiorstwa, ktorych stac na wiecej, szukaja peace of mind</li>
                    <li><strong>Specjalista:</strong> Mała/srednia firma, ograniczony budżet, wiesz dokładnie co Ci potrzeba (np. tylko SEO)</li>
                  </ul>
                </div>
              </section>
            </FadeInView>

            {/* Section 6 - Red Flags */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Red flagi — kiedy uciec od agencji marketingowej
                </h2>
                
                <div className="bg-amber-50 border border-amber-300 rounded-lg p-8">
                  <p className="text-slate-700 mb-6 font-semibold">
                    Jesli zobaczysz ktorykolwiek z tych znakow, uciekaj jak najdalej:
                  </p>
                  
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="text-2xl text-red-500">⚠</span>
                      <div>
                        <p className="font-bold text-slate-900">Brak dostepu do wlasnych kont</p>
                        <p className="text-slate-700 text-sm">
                          Agencja twierdzi ze musi prowadzic wszystko ze swoich kont. To kontrola i twoim zadaniem bedzie sie uwolnic.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="text-2xl text-red-500">⚠</span>
                      <div>
                        <p className="font-bold text-slate-900">Obiecywanie pozycji nr 1 na Google</p>
                        <p className="text-slate-700 text-sm">
                          Nikt nie moze zagwarantowac pozycji nr 1. Jesli agencja to mówi, to klamie lub nie wie co mówi.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="text-2xl text-red-500">⚠</span>
                      <div>
                        <p className="font-bold text-slate-900">Brak transparentnosci budzetu</p>
                        <p className="text-slate-700 text-sm">
                          Nie wiesz ile za co placiłs. Agencja dodaje ukryte prowizje lub nie pokazuje gdzie ida pieniadze.
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="text-2xl text-red-500">⚠</span>
                      <div>
                        <p className="font-bold text-slate-900">Brak raportow</p>
                        <p className="text-slate-700 text-sm">
                          Agencja nie wysyla raportow miesiecznych lub robią to nieregularnie. Jak masz sprawdzic efekty?
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="text-2xl text-red-500">⚠</span>
                      <div>
                        <p className="font-bold text-slate-900">Zmiana opiekuna co miesiac</p>
                        <p className="text-slate-700 text-sm">
                          Zawsze masz inną osobę. To oznacza ze agencja ma fluktuacje kadr lub nie ceni Ciebie jako klienta.
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
              </section>
            </FadeInView>

            {/* Section 7 - Why Fotz */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Dlaczego Fotz Studio?
                </h2>
                
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    Wiemy ze przeczytałes cały poradnik. Mozliwe ze teraz szukasz agencji. Czemu warto wybrać Fotz?
                  </p>

                  <p>
                    Fotz Studio specjalizuje sie w: tworzeniu stron internetowych, pozycjonowaniu SEO, prowadzeniu social media, produkcji foto/video. Nie robimy wszystkiego - robimy to dobrze. Mamy portfolio pełne case studies z rzeczywistymi wynikami.
                  </p>

                  <p>
                    Nasze klienty to przedsiebiorcy, ktorzy szukaja jednego partnera - agencji, ktora zajmie sie ich marketingiem od A do Z. Nie chcą sie bawić w koordynowanie kilku podwykonawców. Chcą wiedzieć ze ktos dba o calos. To jest Fotz.
                  </p>

                  <p>
                    Ale co najwazniejsze - nasze wyniki mowią same za siebie. Nasza klienci nie szukaja nowych agencji bo sa zadowoleni. A nowych klientów odkrywają nas przez referencje.
                  </p>

                  <div className="mt-8 space-y-4">
                    <h4 className="font-bold text-slate-900">Poznaj nasze uslugi:</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link to="/uslugi/tworzenie-stron-internetowych" className="text-blue-600 hover:text-blue-700 underline">
                          Tworzenie stron internetowych
                        </Link>
                      </li>
                      <li>
                        <Link to="/uslugi/pozycjonowanie" className="text-blue-600 hover:text-blue-700 underline">
                          Pozycjonowanie SEO
                        </Link>
                      </li>
                      <li>
                        <Link to="/social-media/obsluga" className="text-blue-600 hover:text-blue-700 underline">
                          Prowadzenie social media
                        </Link>
                      </li>
                      <li>
                        <Link to="/uslugi/produkcja-video" className="text-blue-600 hover:text-blue-700 underline">
                          Fotografia i wideo
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </FadeInView>

            {/* FAQ */}
            <FadeInView>
              <section className="mb-16">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Najczestsze pytania
                </h2>

                <FAQSchema items={faqItems} />

                <div className="space-y-6">
                  {faqItems.map((item, index) => (
                    <details key={index} className="border border-slate-300 rounded-lg overflow-hidden">
                      <summary className="bg-slate-50 px-6 py-4 cursor-pointer font-semibold text-slate-900 hover:bg-slate-100">
                        {item.question}
                      </summary>
                      <div className="px-6 py-4 bg-white text-slate-700 border-t border-slate-300">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </FadeInView>

            {/* CTA Section */}
            <FadeInView>
              <section className="bg-slate-900 text-white rounded-lg p-8 sm:p-12 text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Gotów wybrać dobrą agencje?
                </h2>
                <p className="text-slate-300 mb-8 text-lg">
                  Sprawdz oferte Fotz Studio i zobacz czy jestesmy dla Ciebie.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/o-nas"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
                  >
                    Poznaj nasz zespol
                  </Link>
                  <Link
                    to="/kontakt"
                    className="bg-white text-slate-900 hover:bg-slate-100 font-bold py-3 px-8 rounded-lg transition"
                  >
                    Napisz do nas
                  </Link>
                </div>
              </section>
            </FadeInView>

            {/* Related Articles */}
            <FadeInView>
              <section>
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  Powiazane artykuly
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Link
                    to="/blog/google-ads-vs-seo"
                    className="border border-slate-300 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">
                      Google Ads vs SEO — która strategia lepsza?
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Porownanie obu podejsc do marketing online i ktorego powinienes wybrać dla swojej firmy.
                    </p>
                  </Link>

                  <Link
                    to="/uslugi/pozycjonowanie"
                    className="border border-slate-300 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">
                      Pozycjonowanie SEO — co to jest i ile kosztuje?
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Wszystko co chciales wiedziec o SEO, jak działa, ile trwa i ile to kosztuje dla Twojej firmy.
                    </p>
                  </Link>

                  <Link
                    to="/blog/prowadzenie-social-media-cennik"
                    className="border border-slate-300 rounded-lg p-6 hover:shadow-lg transition"
                  >
                    <h3 className="font-bold text-slate-900 mb-2">
                      Prowadzenie social media — cennik i zakresy uslug
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Ile kosztuje profesjonalne prowadzenie social media i co sie w to wlacza.
                    </p>
                  </Link>
                </div>
              </section>
            </FadeInView>
          </article>
        </div>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}
