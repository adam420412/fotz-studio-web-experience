import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Czy mala firma moze pozycjonowac sie bez agencji?",
    answer: "Tak, mala firma może pozycjonować sie samodzielnie, ale wymaga to czasu i nauki. Jeśli masz budżet ograniczony, możesz zacząć od bezpłatnych narzędzi: Google My Business, Google Search Console i Google Analytics. Jednak agencja specjalizująca się w SEO zaoszczędzi Ci czasu i częściej osiąga lepsze efekty, szczególnie w pierwszych 6 miesiącach pozycjonowania.",
  },
  {
    question: "Ile kosztuje SEO dla malej firmy miesiecznie?",
    answer: "Koszt SEO dla malej firmy zależy od zakresu usług. Lokalne SEO zaczyna się od 500-1500 zł miesięcznie, a pełny serwis pozycjonowania to 1500-4000 zł miesięcznie. Możesz też robić to samodzielnie za darmo, ale wtedy inwestujesz swój czas. Najlepiej wybrać agencję, która oferuje transparentne raportowanie i ustalić konkretne KPI.",
  },
  {
    question: "Jak dlugo czekac na efekty pozycjonowania?",
    answer: "Pierwsze widoczne rezultaty SEO pojawiają się zwykle po 3-6 miesiącach. Jednak zależy to od konkurencji w Twojej branży i słów kluczowych. Pozycjonowanie lokalne działa szybciej niż ogólnopolskie. Po 6-12 miesiącach powinieneś zobaczyć znaczący wzrost organicznych odwiedzin i zapytań od potencjalnych klientów.",
  },
  {
    question: "Co to jest lokalne SEO i po co je robic?",
    answer: "Lokalne SEO to optymalizacja strony i profilu Google My Business dla wyników wyszukiwania w konkretnym mieście lub regionie. Jest idealne dla małych firm, bo pozwala przyciągnąć klientów z Twojej okolicy. Jeśli opieram się na danych, 97% wyszukiwań ma lokalny komponent - ludzie szukają 'hydraulik Poznań', a nie 'hydraulik' na całej Polsce.",
  },
  {
    question: "Jak Google My Business pomaga w pozycjonowaniu?",
    answer: "Google My Business jest jednym z najważniejszych narzędzi dla lokalnego SEO. Pozwala Ci pojawić się w Google Maps i lokalnych wynikach wyszukiwania. Profil powinien być w 100% wypełniony, zawierać adres, telefon, godziny otwarcia, zdjęcia i regularnie uaktualniane posty. Firmy z aktywnym GMB otrzymują 40% więcej kliknięć z mapy.",
  },
  {
    question: "Czy warto inwestowac w SEO przy malym budzecie?",
    answer: "Tak, SEO jest jedną z najlepszych inwestycji dla małej firmy. Zwrot z inwestycji w SEO bywa wyższy niż w Google Ads, bo ludzie klikają na wyniki organiczne chętniej niż na reklamy. Nawet mały budżet na lokalne SEO (500-1000 zł/miesiąc) może przynieść kilka nowych klientów miesięcznie, co szybko się zwraca.",
  },
  {
    question: "Co to sa slowa kluczowe long-tail i dlaczego sa wazne?",
    answer: "Słowa kluczowe long-tail to dłuższe frazy zawierające 3+ słowa, np. 'agencja SEO dla sklepów online Poznań' zamiast 'SEO'. Są mniej konkurencyjne, łatwiej je pozycjonować, a mają wyższą konwersję, bo są bardziej specyficzne. Dla małych firm long-tail keywords to złota kopalnia - mniej konkurencji, szybsze wyniki i bardziej celowy ruch.",
  },
  {
    question: "Jaka jest roznica miedzy pozycjonowaniem a Google Ads?",
    answer: "SEO (pozycjonowanie) to bezpłatne wyniki organiczne w Google - płacisz agencję, ale nie za każde kliknięcie. Google Ads to płatne kampanie reklamowe - płacisz za każde kliknięcie. SEO działa długoterminowo i generuje konsekwentny ruch. Google Ads daje szybkie wyniki, ale Traffic znika, gdy przestaniesz płacić. Idealne jest łączyć oba kanały.",
  },
];

const breadcrumbItems = [
  { label: "Strona główna", path: "/" },
  { label: "Blog", path: "/blog" },
  { label: "Pozycjonowanie dla małych firm", path: "/blog/pozycjonowanie-dla-malych-firm" },
];

export default function BlogPozycjonowanieDlaMalychFirm() {
  return (
    <>
      <SEOHead
        title="Pozycjonowanie dla malych firm — jak zaczac SEO z malym budzetem? | Fotz.pl"
        description="Praktyczny przewodnik po SEO dla małych firm. Dowiedz się, jak zacząć pozycjonowanie z ograniczonym budżetem, optymalizować stronę i zdobywać klientów online."
        canonical="https://fotz.pl/blog/pozycjonowanie-dla-malych-firm"
        keywords="pozycjonowanie małych firm, seo dla małych firm, pozycjonowanie strony małej firmy, tanie pozycjonowanie, seo lokalne dla firm, pozycjonowanie lokalne małej firmy, seo dla małego biznesu"
      />
      <ArticleSchema
        title="Pozycjonowanie dla malych firm — jak zaczac SEO z malym budzetem?"
        description="Praktyczny przewodnik po SEO dla małych firm. Dowiedz się, jak zacząć pozycjonowanie z ograniczonym budżetem, optymalizować stronę i zdobywać klientów online."
        image="https://fotz.pl/og-seo-small-business.jpg"
        author="Fotz Studio"
        publishDate="2026-04-12"
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQSchema items={faqItems} />
      
      <Layout>
        <PageBreadcrumbs items={breadcrumbItems} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-20 px-4 sm:px-6 lg:px-8 rounded-lg mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-blue-600 bg-opacity-30 border border-blue-400 rounded-full px-4 py-1 mb-6 text-sm font-medium">
              SEO / Pozycjonowanie
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Pozycjonowanie dla małych firm
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Pozycjonowanie dla małych firm — jak skutecznie i tanio wypozycjonować stronę małej firmy? Praktyczne wskazówki SEO lokalne dla małych i średnich przedsiębiorstw.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-4">
                <div className="text-2xl font-bold">500 zł</div>
                <div className="text-sm text-blue-100">SEO od/mies.</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-4">
                <div className="text-2xl font-bold">3-6 mies.</div>
                <div className="text-sm text-blue-100">Efekty widoczne</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-4">
                <div className="text-2xl font-bold">97%</div>
                <div className="text-sm text-blue-100">szuka online</div>
              </div>
              <div className="bg-blue-500 bg-opacity-20 border border-blue-400 rounded-lg p-4">
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-blue-100">TOP 3 klikan</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="max-w-4xl mx-auto">
          {/* Section 1 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Czy mała firma potrzebuje SEO?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Według najnowszych badań, 97% konsumentów szuka firm online przed pierwszym kontaktem. Jeśli Twoja małą firma nie pojawia się w wyszukiwarce Google na pierwszych pozycjach, tracisz klientów. To nie przesada - to fakt rynkowy.
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Pozycjonowanie dla małych firm ma ogromną zaletę: możesz skupić się na słowach kluczowych, które mają mniejszą konkurencję. Duże korporacje pozycjonują się na ogólne hasła, a ty możesz zdominować niszę lokalną lub specjalistyczną. Na przykład, "hydraulik Poznań 24h" to dla ciebie łatwsze do zdobycia niż samo słowo "hydraulik".
                </p>
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Jeśli nie robisz SEO, tracisz organiczny ruch z Google. To bedeuta mniej zapytań od potencjalnych klientów, mniejszy przychód i trudniej ci rosnąć. Z drugiej strony, inwestycja w SEO to inwestycja w długoterminowy wzrost biznesu - zdecydowanie wart wysiłku.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 2 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">SEO dla małej firmy - od czego zacząć?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Jeśli zaczynasz swoją przygodę z SEO, nie musisz wszystkiego robić naraz. Oto 5 pierwszych kroków, od których powinieneś zacząć:
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">1. Zadbaj o Google My Business</h3>
                  <p className="text-slate-700">
                    To bezpłatne narzędzie od Google'a jest najważniejsze dla lokalnego SEO. Utwórz lub zaktualizuj swój profil, uzupełnij wszystkie dane: adres, telefon, godziny otwarcia, kategorie usług. Dodaj zdjęcia i rozważ publikowanie postów na profilu.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">2. Optymalizacja strony internetowej</h3>
                  <p className="text-slate-700">
                    Twoja strona musi być szybka, responsywna i łatwa do nawigacji. Pamiętaj o meta tytułach, meta opisach i poprawnej strukturze nagłówków (H1, H2, H3). Każda podstrona powinna być o coś konkretnego.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">3. Wyszukaj słowa kluczowe long-tail</h3>
                  <p className="text-slate-700">
                    Zamiast pozycjonować się na ogólne słowa kluczowe, szukaj dłuższych fraz z niższą konkurencją. Np. zamiast "projektant graficzny", rób "projektant graficzny dla startupów Poznań". Użyj Google Search Console (bezpłatne) lub Ubersuggesta.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">4. Lokalne SEO</h3>
                  <p className="text-slate-700">
                    Upewnij się, że Twoja nazwa, adres i telefon (NAP) są spójne na wszystkich platformach: strona, Google My Business, katalogi lokalne. To ważne dla Google'a.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">5. Zdobywaj pierwsze recenzje</h3>
                  <p className="text-slate-700">
                    Poproś swoich klientów o pozostawienie opinii na Google My Business, Facebook'u czy Trustpilot. Recenzje wpływają na ranking i budują zaufanie nowych klientów.
                  </p>
                </div>
              </div>
            </section>
          </FadeInView>

          {/* Section 3 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Pozycjonowanie lokalne - jak zdobyć klientów z okolicy</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Dla większości małych firm, lokalne SEO jest kluczem do sukcesu. Ludzie szukają firm obok siebie, a nie na drugiej stronie kraju. Lokalne SEO to skupienie się na pojawianiu się w wynikach dla Twojego miasta lub regionu.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Optimizacja Google Maps</h3>
                <p className="text-slate-700 mb-4">
                  Google Maps to mapa miast i biznesów. Gdy ktoś szuka "firma w Poznaniu", pojawia się mapa z najbliższymi wynikami. Upewnij się, że:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li>Twój profil jest w 100% kompletny</li>
                  <li>Kategoria jest odpowiednia dla Twojej branży</li>
                  <li>Zdjęcia są wysokiej jakości i pokazują Twoją pracę</li>
                  <li>Godziny otwarcia są aktualne</li>
                  <li>Reagujesz na recenzje (zarówno pozytywne jak i negatywne)</li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Konsystencja NAP</h3>
                <p className="text-slate-700 mb-4">
                  NAP to nazwa (Name), adres (Address) i telefon (Phone). Google musi widzieć, że wszędzie podajesz dokładnie te same informacje. Nawet jedna litera źle wpisana może wpłynąć na Twój ranking.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Local Schema Markup</h3>
                <p className="text-slate-700 mb-4">
                  Local Schema to kod HTML, który mówi Google'owi, że jesteś lokalną firmą. Zawiera informacje o NAP, godzinach pracy i kategorii. Jeśli masz stronę internetową, powinna zawierać ten markup.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Strategia recenzji</h3>
                <p className="text-slate-700">
                  Firmy z więcej recenzjami pojawiają się wyżej w wynikach. Poproś klientów o zostawienie opinii po zakupie. Odpowiadaj na wszystkie recenzje - to pokazuje Google'owi, że Twoja firma jest aktywna.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 4 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Słowa kluczowe dla małej firmy - jak je wybrać?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Wybór słów kluczowych to fundament SEO. Dla małej firmy, strategie są inne niż dla dużych korporacji. Nie będziesz pozycjonować się na "telefony komórkowe" - to zbyt konkurencyjne. Zamiast tego, szukaj niszy.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Long-tail keywords - złota kopalina dla małych firm</h3>
                <p className="text-slate-700 mb-4">
                  Long-tail to dłuższe frazy, zawierające zazwyczaj 3-4 słowa. Przykłady:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-6 space-y-2">
                  <li>"Hydraulik Poznań 24h" zamiast "hydraulik"</li>
                  <li>"Naprawa laptopów dla startupów" zamiast "naprawa laptopów"</li>
                  <li>"Dietetyk online dla sportowców" zamiast "dietetyk"</li>
                  <li>"Kursy angielskiego dla dzieci Kraków" zamiast "kursy angielskiego"</li>
                </ul>
                <p className="text-slate-700 mb-6">
                  Long-tail keywords mają mniej poszukiwań, ale znacznie mniej konkurencji. Ludzie szukający takich fraz wiedzą dokładnie czego chcą, więc konwersja jest wyższa.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Intent - co faktycznie chce klient?</h3>
                <p className="text-slate-700 mb-4">
                  Nie wszystkie słowa kluczowe są równe. Słowo kluczowe "ile kosztuje SEO" sugeruje, że osoba szuka informacji o cenach - to intent komercyjny, potencjalny klient. Słowo "jak robić SEO" to intent informacyjny - osoba uczy się, ale może nie być gotowa do zakupu.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Narzędzia do badania słów kluczowych</h3>
                <p className="text-slate-700 mb-4">
                  Nie musisz wydawać pieniędzy na drogi tools. Na początku wystarczą bezpłatne:
                </p>
                <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                  <li><strong>Google Search Console</strong> - pokaże ci, na jakie słowa już się pojawiam</li>
                  <li><strong>Google Trends</strong> - czy słowo kluczowe rośnie w popularności?</li>
                  <li><strong>Ubersuggest (wersja bezpłatna)</strong> - szukaj słów kluczowych long-tail</li>
                  <li><strong>Google autocomplete</strong> - czego szukają ludzie, gdy zaczynają pisać</li>
                </ul>
              </div>
            </section>
          </FadeInView>

          {/* Section 5 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Techniczne SEO dla małej firmy - minimum, które musisz zrobić</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Techniczne SEO to fundamenty. Jeśli Twoja strona nie spełnia podstawowych wymagań technicznych, ranking będzie słaby. Dobra wiadomość? Dla małej firmy wystarczy zrobić kilka rzeczy dobrze.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-slate-300 text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-3 text-left font-bold">Działanie</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">Trudność</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">Priorytet</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-3">HTTPS - szyfrowanie strony</td>
                        <td className="border border-slate-300 p-3">Łatwe</td>
                        <td className="border border-slate-300 p-3 font-bold text-red-600">KRYTYCZNE</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3">Mobile Friendly - responsywna na telefonie</td>
                        <td className="border border-slate-300 p-3">Średnie</td>
                        <td className="border border-slate-300 p-3 font-bold text-red-600">KRYTYCZNE</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3">Page Speed - szybkość strony</td>
                        <td className="border border-slate-300 p-3">Średnie</td>
                        <td className="border border-slate-300 p-3 font-bold text-orange-600">Wysoki</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3">Meta Title i Meta Description</td>
                        <td className="border border-slate-300 p-3">Łatwe</td>
                        <td className="border border-slate-300 p-3 font-bold text-orange-600">Wysoki</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3">XML Sitemap</td>
                        <td className="border border-slate-300 p-3">Łatwe</td>
                        <td className="border border-slate-300 p-3">Średni</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3">robots.txt</td>
                        <td className="border border-slate-300 p-3">Łatwe</td>
                        <td className="border border-slate-300 p-3">Średni</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3">Struktura URL - czytelne adresy</td>
                        <td className="border border-slate-300 p-3">Średnie</td>
                        <td className="border border-slate-300 p-3">Średni</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3">Internal Linking - linki wewnętrzne</td>
                        <td className="border border-slate-300 p-3">Łatwe</td>
                        <td className="border border-slate-300 p-3">Średni</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 mb-4">
                  Zaczni od tego, co jest krytyczne: HTTPS i responsywność mobilna. Następnie zajmij się szybkością i meta tagami. Reszta może czekać.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 6 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Ile kosztuje pozycjonowanie dla małej firmy?</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Koszt SEO zależy od kilku czynników: zakresu pracy, konkurencji w Twojej branży i czy chcesz robić to samodzielnie, czy zatrudnić agencję. Oto przegląd opcji:
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-slate-300 text-sm">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="border border-slate-300 p-3 text-left font-bold">Podejście</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">Koszt/miesiąc</th>
                        <th className="border border-slate-300 p-3 text-left font-bold">Zyski/Wady</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-3 font-bold">DIY (sama praca)</td>
                        <td className="border border-slate-300 p-3">0 zł</td>
                        <td className="border border-slate-300 p-3">Zysk: bezpłatnie. Wada: wymaga dużo czasu i nauki.</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3 font-bold">Lokalne SEO agencja</td>
                        <td className="border border-slate-300 p-3">500-1500 zł</td>
                        <td className="border border-slate-300 p-3">Zysk: szybkie efekty, fokus lokalny. Wada: ograniczony zakres.</td>
                      </tr>
                      <tr>
                        <td className="border border-slate-300 p-3 font-bold">Full Service SEO</td>
                        <td className="border border-slate-300 p-3">1500-4000 zł</td>
                        <td className="border border-slate-300 p-3">Zysk: kompleksowe wsparcie. Wada: wyższa cena.</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="border border-slate-300 p-3 font-bold">SEO narzędzia</td>
                        <td className="border border-slate-300 p-3">50-300 zł</td>
                        <td className="border border-slate-300 p-3">Zysk: niski koszt. Wada: musisz wiedzieć, jak je używać.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-slate-700 mb-4">
                  Jeśli jesteś małą firmą i masz ograniczony budżet, zaczynom od lokalnego SEO za 500-1000 zł na miesiąc. To wystarczy, aby zdobyć pierwsze klientów. Gdy będzie się rozwijać, możesz zwiększyć budżet.
                </p>

                <p className="text-slate-700">
                  Pamiętaj: SEO to inwestycja, nie wydatek. Zwrot z inwestycji zwykle pojawia się po 3-6 miesiącach, kiedy zaczynasz dostawać nowych klientów z Google.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* Section 7 */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Pozycjonowanie w Fotz Studio - jak pomagamy małym firmom</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 mb-4 leading-relaxed">
                  Wiemy, jakie wyzwania niesie posiadanie małej firmy i ograniczony budżet. W Fotz Studio specjalizujemy się dokładnie w tym - pomagamy małym firmom zdobywać klientów z Google.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Nasz podejście</h3>
                <p className="text-slate-700 mb-4">
                  Skupiamy się na lokalnym SEO, bo wiemy, że dla większości małych firm, najbardziej wartościowi klienci to ci z okolicy. Optymalizujemy Twoją stronę, Google My Business, budujemy recenzje i robimy wszystko transparentnie - wiesz zawsze, na czym się pracuje.
                </p>

                <h3 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Usługi, które oferujemy</h3>
                <p className="text-slate-700 mb-4">
                  Mamy dedykowane usługi dla małych firm:
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">
                      <Link to="/uslugi/pozycjonowanie" className="text-blue-600 font-bold hover:underline">
                        Pozycjonowanie SEO
                      </Link>
                      {" "}dla stron e-commerce i serwisów
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">
                      <Link to="/uslugi/pozycjonowanie-lokalne" className="text-blue-600 font-bold hover:underline">
                        Lokalne SEO
                      </Link>
                      {" "}dla firm usługowych i handlowych
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">
                      Audyt SEO - sprawdzenie obecnego stanu i wskazanie co poprawiać
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">→</span>
                    <span className="text-slate-700">
                      Raportowanie - pełną transparencję rezultatów każdego miesiąca
                    </span>
                  </li>
                </ul>

                <p className="text-slate-700 mt-6">
                  Jeśli chcesz wiedzieć, jak możemy pomóc Twojej firmie, <Link to="/kontakt" className="text-blue-600 font-bold hover:underline">skontaktuj się z nami</Link>. Dajemy pierwszą konsultację bezpłatnie.
                </p>
              </div>
            </section>
          </FadeInView>

          {/* FAQ Section */}
          <FadeInView>
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-slate-900">Częste pytania o SEO dla małych firm</h2>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={index}
                    className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden hover:border-blue-300 transition"
                  >
                    <summary className="px-6 py-4 cursor-pointer font-bold text-slate-900 hover:text-blue-600 flex items-center gap-3">
                      <span className="text-blue-600">+</span>
                      <span>{item.question}</span>
                    </summary>
                    <div className="px-6 py-4 border-t border-slate-200 text-slate-700 leading-relaxed">
                      {item.answer}
                    </div>
                  </details>
                ))}
              </div>
            </section>
          </FadeInView>

          {/* CTA Section */}
          <FadeInView>
            <section className="bg-slate-900 text-white py-12 px-6 sm:px-8 rounded-lg mb-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Gotów na zmianę?
                </h2>
                <p className="text-lg text-slate-300 mb-8">
                  Pozycjonowanie dla małej firmy nie musi być skomplikowane. Pozwól nam pokazać, jak możemy Ci pomóc zdobyć klientów z Google.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/uslugi/pozycjonowanie"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition"
                  >
                    Poznaj nasze usługi
                  </Link>
                  <Link
                    to="/kontakt"
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-8 rounded-lg transition"
                  >
                    Zarezerwuj konsultację
                  </Link>
                </div>
              </div>
            </section>
          </FadeInView>

          {/* Contact Section */}
          <FadeInView>
            <ContactSection />
          </FadeInView>

          {/* Related Links */}
          <FadeInView>
            <section className="border-t border-slate-200 pt-12">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Czytaj też:</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/uslugi/pozycjonowanie"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Pozycjonowanie stron internetowych - pełna usługa SEO dla Twojego biznesu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog/google-ads-vs-seo"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Google Ads vs SEO - która strategia jest lepsza dla Twojej firmy?
                  </Link>
                </li>
                <li>
                  <Link
                    to="/uslugi/pozycjonowanie-lokalne"
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Lokalne SEO - jak zdobyć klientów z Twojej okolicy
                  </Link>
                </li>
              </ul>
            </section>
          </FadeInView>
        </article>
      </Layout>
    </>
  );
}
