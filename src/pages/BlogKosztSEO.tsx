import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, AlertCircle, Check } from "lucide-react";
import { motion } from "framer-motion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie strony miesięcznie?",
    answer: "Koszt SEO w Polsce wynosi średnio 1500-5000 zł miesięcznie dla stron małych i średnich firm. Dla kampanii ogólnopolskich i e-commerce może być 5000-15000 zł+. Zakres pracy, konkurencja słów kluczowych i stan strony wpływają na ostateczną cenę. Wiele agencji oferuje pakiety od 999 zł dla lokalnych biznesów."
  },
  {
    question: "Czy tanie SEO za 300 zł miesięcznie jest skuteczne?",
    answer: "Nie - SEO za 300 zł to najczęściej spam, automatyczne linki, i praktyki zagrażające Twojej stronie. Profesjonalna praca SEO (audyt, optymalizacja techniczna, content, link building) wymaga czasu specjalisty. Za tak niską cenę możesz spodziewać się jedynie schematycznych zmian, które nie przyniosą rzeczywistych wyników."
  },
  {
    question: "Kiedy zobaczę pierwsze efekty SEO?",
    answer: "Pierwsze efekty (pozycje 20-50) widać po 4-8 tygodniach pracy. Istotne wyniki (pozycje top 10) osiągamy zwykle po 2-3 miesiącach. Pełne potencjalne wyniki bywają widoczne po 6-12 miesiącach. Czas zależy od konkurencji słów kluczowych, wieku domeny i stanu strony."
  },
  {
    question: "Czy lepsza jest agencja SEO czy freelancer?",
    answer: "Agencja SEO oferuje: zespół specjalistów, wyspecjalizowanych narzędzi, wieloletnie doświadczenie i gwarancje. Freelancer może być tańszy, ale bywają niezawodni. W agencji masz dostęp do pełnego spektrum usług i sprawdzony proces. Sprawdź opinie, portfolio i referencje przed wyborem."
  },
  {
    question: "Co zawiera pakiet SEO w agencji?",
    answer: "Typowy pakiet SEO obejmuje: audyt SEO, research słów kluczowych, optymalizację on-page, optymalizację techniczną, content marketing, building backlinków, link audit, competitor analysis oraz raportowanie. Premium pakiety dodają: advanced analytics, conversion rate optimization i strategic consulting."
  },
  {
    question: "Jak długo trwa kontrakt SEO?",
    answer: "Standardowe kontrakty SEO to 3-6 miesięcy. Niektóre agencje wymagają 12 miesięcy dla większych projektów. Wiele umów pozwala na rozwiązanie za 30 dni notyfikacji. SEO to długoterminowa inwestycja - przy krótszych kontraktach trudno osiągnąć zadowalające wyniki."
  },
  {
    question: "Czy mogę pozycjonować stronę samodzielnie?",
    answer: "Tak, ale wymaga to czasu, nauki i odpowiednich narzędzi. DIY SEO jest tańsze, lecz czasochłonne - możesz poświęcić 20-40 godzin miesięcznie. Dla firm bez doświadczenia ryzyko błędów jest wysokie. Hybrydowe podejście - sam się uczysz + doradztwo agencji - może być kompromisem."
  },
  {
    question: "Jaki budżet SEO potrzebuje mała firma?",
    answer: "Małe firmy lokalne mogą zacząć od 999-2000 zł miesięcznie. To wystarczająco na audyt, optymalizację strony i basics. Dla skuteczniejszych kampanii rekomendujemy 2000-5000 zł. Jeśli konkurencja jest niska, nawet 1500 zł może przynieść dobre rezultaty. Liczy się konsystencja pracy nad czasem."
  }
];

export function BlogKosztSEO() {
  const breadcrumbItems = [
    { name: "Strona główna", url: "https://fotz.pl" },
    { name: "Blog", url: "https://fotz.pl/blog" },
    { name: "Ile kosztuje SEO", url: "https://fotz.pl/blog/koszt-seo" }
  ];

  return (
    <>
      <SEOHead
        title="Ile kosztuje SEO? Cennik pozycjonowania 2025 [Poradnik]"
        description="Odkryj realną cenę SEO w Polsce. Ceny pakietów, modele rozliczania, co wpływa na koszt pozycjonowania i czy tanie SEO za 300 zł jest skuteczne."
        canonical="https://fotz.pl/blog/koszt-seo"
        ogType="article"
        keywords="koszt SEO, ile kosztuje SEO, cena SEO, cennik pozycjonowania"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ile kosztuje SEO? Cennik pozycjonowania 2025 [Poradnik]",
            "description": "Pełny poradnik do cen SEO w Polsce - modele rozliczania, przedziały cenowe, czynniki wpływające na koszt, oraz jak wycenić budżet.",
            "author": {
              "@type": "Organization",
              "name": "Fotz Studio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fotz Studio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2025-04-12",
            "dateModified": "2025-04-12"
          }
        ]}
      />

      <ArticleSchema
        title="Ile kosztuje SEO? Cennik pozycjonowania 2025 [Poradnik]"
        description="Pełny poradnik do cen SEO - modele rozliczania, ceny pakietów, czynniki wpływające na koszt i jak budżetować SEO dla firmy."
        url="https://fotz.pl/blog/koszt-seo"
        datePublished="2025-04-12"
        dateModified="2025-04-12"
      />

      <BreadcrumbSchema items={breadcrumbItems} />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">Ile kosztuje SEO</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="pb-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
              >
                <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Pozycjonowanie SEO
                </span>

                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje SEO? Cennik pozycjonowania 2025
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół Fotz
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    12 kwietnia 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    28 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2015"
                    alt="Cennik i koszty SEO - poradnik"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg prose-invert max-w-none"
              >
                <p className="lead text-xl text-muted-foreground mb-8">
                  Jaki jest realny koszt SEO w Polsce? Czy tanie pozycjonowanie za 300 zł jest efektywne? W tym kompletnym poradniku poznasz wszystkie modele rozliczania SEO, przedziały cenowe dla różnych typów biznesów, oraz co dokładnie wpływa na ostateczną cenę. Dowiesz się, czy inwestycja w SEO zwraca się i jak budżetować pozycjonowanie dla swojej firmy.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Dlaczego ceny SEO się różnią?
                </h2>

                <p className="text-muted-foreground mb-6">
                  <strong>Koszt SEO nie jest standardowy dla wszystkich firm.</strong> Różne agencje proponują drastycznie różne ceny - od 300 zł do 30 000+ zł miesięcznie. Dlaczego? Ponieważ zaobserwowana inaczej zakres pracy, doświadczenie specjalisty, narzędzia jakie się wykorzystuje i poziom konkurencji na rynku.
                </p>

                <p className="text-muted-foreground mb-6">
                  Współpraca z profesjonalną agencją SEO to inwestycja w długoterminowy wzrost ruchu organicznego. Dlatego warto zrozumieć, na co się wydaje pieniądze i jakie są realne oczekiwania w zależności od budżetu.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Modele rozliczania SEO
                </h2>

                <p className="text-muted-foreground mb-6">
                  Agencje SEO stosują różne modele rozliczania. Każdy ma swoje zalety i wady. Zapoznaj się z nimi, aby wybrać ten najlepszy dla Twojego biznesu.
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold">Model rozliczania</th>
                        <th className="px-6 py-4 text-left font-semibold">Opis</th>
                        <th className="px-6 py-4 text-left font-semibold">Dla kogo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Miesięczny abonament</td>
                        <td className="px-6 py-4 text-muted-foreground">Stała opłata co miesiąc za określony zakres pracy (raporty, optymalizacje, content). To najczęściej spotykany model.</td>
                        <td className="px-6 py-4 text-muted-foreground">Większość firm - zapewnia stabilność budżetu</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Projekt jednorazowy</td>
                        <td className="px-6 py-4 text-muted-foreground">Jednorazowa opłata za konkretny projekt: audyt SEO, optymalizacja strony, strategy dokument. Nie ma dalszych zobowiązań.</td>
                        <td className="px-6 py-4 text-muted-foreground">Firmy chcące się nauczyć SEO samodzielnie lub duże budżety</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Rozliczenie za efekty</td>
                        <td className="px-6 py-4 text-muted-foreground">Płacisz wyłącznie za osiągnięte pozycje/rankingiem (np. 500 zł za każdą pozycję w top 10). Rzadki model - dużo błędów.</td>
                        <td className="px-6 py-4 text-muted-foreground">Bardzo ostrożnie - często niejasne warunki</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Godzinowa konsultacja</td>
                        <td className="px-6 py-4 text-muted-foreground">Płacisz za każdą godzinę konsultacji (200-500 zł/h). Pasuje dla krótkoterminowych potrzeb lub doradztwu.</td>
                        <td className="px-6 py-4 text-muted-foreground">Punktowe wsparcie, audyty,Strategy Sessions</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Przedziały cenowe SEO w Polsce 2025
                </h2>

                <p className="text-muted-foreground mb-6">
                  Poniżej znajdują się realistyczne przedziały cenowe dla SEO w Polsce w 2025 roku, podzielone na kategorie biznesu.
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold">Zakres/typ biznesu</th>
                        <th className="px-6 py-4 text-left font-semibold">Koszt miesięczny</th>
                        <th className="px-6 py-4 text-left font-semibold">Co obejmuje</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Lokalne (1 miasto)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">999 - 2 500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Optymalizacja GMB, content, linki lokalne, raporty</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Mała firma (1-10 SEO haseł)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">1 500 - 3 500 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Audyt, optymalizacja on-page, content, basics link building</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">E-commerce (kategorie produktów)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">3 000 - 8 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">SEO kategorii, produktów, content, link building, CRO</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Ogólnopolskie (konkurencyjne)</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">5 000 - 15 000 zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Full-service SEO, advanced analytics, premium content, aggressive link building</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 font-semibold">Enterprise / National Brand</td>
                        <td className="px-6 py-4 text-yellow-400 font-semibold">15 000 - 50 000+ zł</td>
                        <td className="px-6 py-4 text-muted-foreground">Dedykowany zespół, research, PR, zaawansowana strategia, obsługę API Google</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="my-8 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                  <div className="flex gap-4">
                    <AlertCircle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground">
                        <strong>Ważne:</strong> Powyższe ceny są średnimi dla Polski w 2025. Agencje w Warszawie mogą być droższe, agencje na prowincji tańsze. Doświadczenie agencji, portfel klientów i gwarancje również wpływają na cenę.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Co wpływa na cenę SEO?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Agencja wycenia SEO na podstawie wielu czynników. Zrozumienie ich pomoże Ci negocjować lepszą ceny i wiedzieć, za co płacisz.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">1. Konkurencja słów kluczowych</h3>
                <p className="text-muted-foreground mb-6">
                  Hasła z niską konkurencją (100-500 monthly searches) są tańsze w pozycjonowaniu. Słowa kluczowe z wysoką konkurencją (10 000+ searches) wymagają więcej pracy - optymalizacji zaawansowanej, quality content i dużo linków. To zwiększa koszt SEO.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">2. Stan techniczny strony</h3>
                <p className="text-muted-foreground mb-6">
                  Stara strona zbudowana na WordPress 2010 z problemami technicznymi wymaga więcej pracy niż nowoczesna React aplikacja. Architektura URLs, szybkość loading, responsywność - wszystko to wpływa na koszt. Audyt SEO zwykle ujawnia 50-200 problemów.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">3. Ilość publikowanych artykułów</h3>
                <p className="text-muted-foreground mb-6">
                  Czy potrzebujesz 2 artykułów miesięcznie czy 10? Content marketing to 40-60% koszt SEO. Quality content wymaga copywriterów, fotografów, edytorów. Im więcej contentu, tym wyższy koszt.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">4. Doświadczenie agencji i specjalistów</h3>
                <p className="text-muted-foreground mb-6">
                  Junior SEO specialist (1-2 lata doświadczenia) kosztuje taniej niż Senior SEO Strategist (10+ lat). Agencje z Googleem Partnership lub certyfikatami mogą pobierać więcej. Portfel top klientów też wpływa na cenę.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">5. Branża i lokalizacja</h3>
                <p className="text-muted-foreground mb-6">
                  Pozycjonowanie dla prawa, medycyny czy finansów jest droższe - wymagają one specjalistycznej wiedzy. E-commerce, SaaS czy usługi lokalne mogą być tańsze. Pozycjonowanie w dużych miastach konkurencyjne - wyższa cena.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">6. Narzędzia i reporting</h3>
                <p className="text-muted-foreground mb-6">
                  Czy agencja używa Semrush, Ahrefs, SE Ranking? Czy dostaniesz zaawansowane raporting z API integracji? Premium narzędzia kosztują i są licencjonowane - agencja przerzuca to na ceny.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Tanie SEO vs Profesjonalne SEO
                </h2>

                <p className="text-muted-foreground mb-6">
                  Tanie SEO i profesjonalne SEO różnią się jakościowo. Oto zestawienie red flags taniego SEO vs co dobre SEO powinno zawierać.
                </p>

                <div className="overflow-x-auto mb-8 rounded-lg border border-gray-700">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-800 border-b border-gray-700">
                        <th className="px-6 py-4 text-left font-semibold text-red-400">Tanie SEO (do uniknięcia)</th>
                        <th className="px-6 py-4 text-left font-semibold text-green-400">Profesjonalne SEO</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Tylko linkowanie z SEO katalogów spamowych</td>
                        <td className="px-6 py-4">Linki z autorytywnych, tematycznych witryn</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Brak audytu SEO, od razu praca</td>
                        <td className="px-6 py-4">Wnikliwy audyt SEO jako punkt startowy</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Spam schlów kluczowych (keyword stuffing)</td>
                        <td className="px-6 py-4">Naturalne, czytane dla użytkownika content</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Obietnice: top 3 pozycji w 30 dni</td>
                        <td className="px-6 py-4">Realistyczne timeline: 3-6 miesięcy dla wyników</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Brak raportów lub śmietnościowe raporty</td>
                        <td className="px-6 py-4">Szczegółowe miesieczne raporty z metrykami</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Nikt nie zna facet SEO - freelancer/agencja</td>
                        <td className="px-6 py-4">Dedykowany account manager, zespół przezroczysty</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Brak strategii, chaotyczne działania</td>
                        <td className="px-6 py-4">Jasna strategia z milestones i KPIs</td>
                      </tr>
                      <tr className="hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">Brak czytania analityk (GSC, GA4)</td>
                        <td className="px-6 py-4">Głębokie analizy danych i optymalizacja CRO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Jak wycenić budżet SEO dla swojej firmy?
                </h2>

                <p className="text-muted-foreground mb-6">
                  Chcesz wiedzieć, ile powinieneś przeznaczyć na SEO? Oto praktyczny poradnik do wycenę budżetu.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Krok 1: Zdefiniuj cel biznesowy</h3>
                <p className="text-muted-foreground mb-6">
                  Ile leadów lub sprzedaży potrzebujesz z SEO w następnym roku? Jeśli chcesz 50 leadów/miesiąc, a średnia wartość leadu to 500 zł, to potencjał roczny to 300 000 zł. Budżet SEO powinien być ułamkiem tego potencjału - zazwyczaj 5-10%.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Krok 2: Przeanalizuj konkurencję SEO</h3>
                <p className="text-muted-foreground mb-6">
                  Jak wygląda top 3 dla Twoich głównych haseł? Czy to małe lokalne firmy czy duże korpora? Jeśli konkurencja to duże marki - musisz przeznaczyć więcej. Jeśli mała konkurencja - możesz zacząć od niższego budżetu.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Krok 3: Ustal procent od przychodu</h3>
                <p className="text-muted-foreground mb-6">
                  Średnio firmy wydają 2-10% przychodu na marketing. SEO powinno być częścią tego. Dla e-commerce: 3-5% przychodu na SEO. Dla usług: 5-10%. Dla startupu: 10-15% budżetu marketingowego.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Krok 4: Porównaj roczny koszt vs ROI</h3>
                <p className="text-muted-foreground mb-6">
                  Roczny koszt SEO przy 3000 zł/miesiąc to 36 000 zł. Jeśli to przyniesie Ci 20 leadów/miesiąc warte po 1000 zł każdy, to ROI to 240 000 zł. To 6.7x zwrotu - solidna inwestycja.
                </p>

                <h3 className="text-xl font-semibold mt-8 mb-4">Wytyczne budżetowania SEO:</h3>
                <ul className="space-y-3 mb-6 text-muted-foreground">
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Startup/nowa firma:</strong> 1500-3000 zł/miesiąc (eksperymentowanie, build fundamentals)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Mała firma (1-10 mln PLN przychodu):</strong> 2000-5000 zł/miesiąc (fokus na growth)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Średnia firma (10-50 mln):</strong> 5000-12000 zł/miesiąc (full-service SEO)</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Duża firma/E-commerce (50 mln+):</strong> 10000-30000+ zł/miesiąc (zaawansowana strategia)</span>
                  </li>
                </ul>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Accordion type="single" collapsible>
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-muted/30 transition-colors">
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <span className="text-left font-semibold">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-muted-foreground">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                <FAQSchema items={faqItems} />
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Chcesz wiedzieć, ile będzie kosztować SEO dla Twojej firmy?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Każda firma jest inna. Zapraszamy na bezpłatną konsultację, gdzie przeanalizujemy Twoją stronę, konkurencję i zaproponujemy dedykowany pakiet SEO.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053]">
                    <Link to="/kontakt">Bezpłatna wycena SEO</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/cennik-pozycjonowania">Sprawdź nasze ceny</Link>
                  </Button>
                </div>
              </motion.div>

              {/* Related Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-8 bg-muted/30 rounded-2xl"
              >
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane artykuły i usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/blog/pozycjonowanie-lokalne-dla-firm" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Pozycjonowanie lokalne</h4>
                    <p className="text-sm text-muted-foreground">SEO dla firm lokalnych i Google Maps</p>
                  </Link>
                  <Link to="/uslugi/pozycjonowanie" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Usługa SEO</h4>
                    <p className="text-sm text-muted-foreground">Pakiety pozycjonowania dla firm</p>
                  </Link>
                  <Link to="/cennik-pozycjonowania" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Cennik SEO</h4>
                    <p className="text-sm text-muted-foreground">Przejrzyste ceny i pakiety</p>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
}

export default BlogKosztSEO;
