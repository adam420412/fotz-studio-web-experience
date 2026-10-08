import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { RelatedServices, servicesByCategory } from "@/components/blog/RelatedServices";
import { FAQSchema } from "@/components/seo/StructuredData";

const cities = [
  { name: "Poznań", path: "/uslugi/strony-internetowe/poznan", active: true },
  { name: "Warszawa", path: "/uslugi/strony-internetowe/warszawa", active: true },
  { name: "Kraków", path: "/uslugi/strony-internetowe/krakow", active: true },
  { name: "Wrocław", path: "/uslugi/strony-internetowe/wroclaw", active: true },
  { name: "Gdańsk", path: "/uslugi/strony-internetowe/gdansk", active: true },
  { name: "Łódź", path: "/uslugi/strony-internetowe/lodz", active: true },
  { name: "Katowice", path: "/uslugi/strony-internetowe/katowice", active: true },
  { name: "Szczecin", path: "/uslugi/strony-internetowe/szczecin", active: true },
  { name: "Lublin", path: "/uslugi/strony-internetowe/lublin", active: true },
  { name: "Bydgoszcz", path: "/uslugi/strony-internetowe/bydgoszcz", active: true },
  { name: "Białystok", path: "/uslugi/strony-internetowe/bialystok", active: true },
  { name: "Rzeszów", path: "/uslugi/strony-internetowe/rzeszow", active: true },
];

const faqItems = [
  {
    "question": "Jakie są koszty stworzenia strony internetowej?",
    "answer": "Koszt stworzenia strony internetowej zależy od wielu czynników. Proste strony wizytówki kosztują od kilkuset do kilku tysięcy złotych, podczas gdy rozbudowane strony internetowe mogą kosztować od kilku do kilkudziesięciu tysięcy złotych."
  },
  {
    "question": "Jakie są koszty utrzymania strony internetowej?",
    "answer": "Koszt utrzymania strony obejmuje opłaty za hosting, domenę oraz ewentualne aktualizacje i wsparcie techniczne. Średnie miesięczne koszty wynoszą od kilkudziesięciu do kilkuset złotych."
  },
  {
    "question": "Co wpływa na cenę wykonania strony internetowej?",
    "answer": "Cena wykonania strony zależy od złożoności projektu, wybranych technologii, doświadczenia wykonawcy oraz dodatkowych usług jak pozycjonowanie czy optymalizacja."
  },
  {
    "question": "Jak długo trwa wykonanie strony internetowej?",
    "answer": "Czas wykonania strony może się różnić. Proste strony mogą być gotowe w ciągu kilku dni, podczas gdy bardziej złożone projekty mogą wymagać kilku tygodni lub miesięcy."
  },
  {
    "question": "Jak wybrać wykonawcę strony internetowej?",
    "answer": "Wybór wykonawcy powinien być przemyślany. Sprawdź portfolio, opinie klientów oraz zakres oferowanych usług. Dobry wykonawca przedstawi jasny cennik i terminy realizacji."
  }
];

const BlogKosztStrony = () => {
  return (
    <>
      <SEOHead
        title="Ile Kosztuje Strona Internetowa w 2026? Cennik i Czynniki Wyceny"
        description="Ile kosztuje strona internetowa w 2026? Poznaj orientacyjne widełki cenowe, koszty utrzymania, typy stron i czynniki wpływające na indywidualną wycenę."
        ogType="article"
        canonical="https://www.fotz-studio.pl/blog/ile-kosztuje-strona-internetowa"
        keywords="ile kosztuje strona internetowa, cennik stron internetowych, koszt strony www, cena strony internetowej 2026"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Ile kosztuje strona internetowa w 2026? Cennik i czynniki wyceny",
            "description": "Kompleksowy przewodnik po kosztach tworzenia stron internetowych w 2026 roku",
            "author": {
              "@type": "Organization",
              "name": "FOTZ"
            },
            "publisher": {
              "@type": "Organization",
              "name": "FOTZ",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.fotz-studio.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2024-12-20",
            "dateModified": "2026-10-08"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://www.fotz-studio.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.fotz-studio.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Ile kosztuje strona internetowa w 2026?" }
            ]
          }
        ]}
      />

      <FAQSchema items={faqItems} />
      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-background">
          <div className="container mx-auto px-4">
            <nav aria-label="Ścieżka nawigacji" className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="shrink-0 hover:text-primary transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              <Link to="/blog" className="shrink-0 hover:text-primary transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="text-foreground">Ile kosztuje strona internetowa w 2026?</span>
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
                
                <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                  Strony internetowe
                </p>
                
                <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                  Ile kosztuje strona internetowa w 2026? Cennik i czynniki wyceny
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Zespół FOTZ
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    20 grudnia 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    15 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="eager" fetchPriority="high" decoding="async"
                    src="/work/fps-800.webp"
                    srcSet="/work/fps-480.webp 480w, /work/fps-800.webp 800w, /work/fps-1200.webp 1200w"
                    sizes="(min-width: 1024px) 896px, 95vw" width="1200" height="900"
                    alt="Projekt strony FPS Poznań — realizacja FOTZ Studio"
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
                  Zastanawiasz się, ile będzie kosztować strona internetowa w 2026 roku? Poniższe widełki są orientacyjne: zakres projektu, treści i integracje wpływają na ostateczną wycenę. Wyjaśniamy, co warto uwzględnić w budżecie i jak porównywać oferty wykonawców.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Koszt stworzenia strony internetowej
                </h2>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Różne typy stron internetowych
                </h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Koszt stworzenia strony internetowej zależy w dużej mierze od jej typu.</strong> Prosta strona wizytówka, prezentująca podstawowe informacje o Twojej firmie, będzie znacznie tańsza niż rozbudowany sklep internetowy z systemem płatności online i bazą produktów. Cena strony internetowej rośnie wraz z jej złożonością i funkcjonalnością. Sprawdź naszą ofertę <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzenia stron internetowych</Link>.
                </p>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Czynniki wpływające na koszt stworzenia strony
                </h3>
                <p className="text-muted-foreground mb-4">
                  Na koszt stworzenia strony internetowej wpływa wiele czynników. Funkcjonalność strony, wykorzystane technologie i czas potrzebny na jej wykonanie to tylko niektóre z nich.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">Czynniki wpływające na koszt</th>
                        <th className="text-left py-4 px-4 font-semibold">Przykłady</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Projekt graficzny</td>
                        <td className="py-4 px-4 text-muted-foreground">Indywidualny projekt, unikalny układ i interakcje</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Funkcjonalność strony</td>
                        <td className="py-4 px-4 text-muted-foreground">System CMS, formularze, integracje, e-commerce</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Pozycjonowanie SEO</td>
                        <td className="py-4 px-4 text-muted-foreground">Optymalizacja treści, meta tagi, struktura URL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Średni koszt wykonania strony internetowej w 2026
                </h3>
                <p className="text-muted-foreground mb-4">
                  Ustalenie dokładnego średniego kosztu wykonania strony internetowej w 2026 roku jest trudne, ponieważ zależy on od wielu wspomnianych czynników.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">Typ strony internetowej</th>
                        <th className="text-left py-4 px-4 font-semibold">Orientacyjny koszt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Strona wizytówka (one page)</td>
                        <td className="py-4 px-4 text-muted-foreground">od 2 000 zł do 5 000 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Strona firmowa (wielopodstronowa)</td>
                        <td className="py-4 px-4 text-muted-foreground">od 5 000 zł do 15 000 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Sklep internetowy</td>
                        <td className="py-4 px-4 text-muted-foreground">od 10 000 zł do 50 000 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Portal / aplikacja webowa</td>
                        <td className="py-4 px-4 text-muted-foreground">od 30 000 zł wzwyż</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Cennik stron internetowych
                </h2>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Porównanie cenników różnych usługodawców
                </h3>
                <p className="text-muted-foreground mb-6">
                  Analiza cenników stron internetowych różnych usługodawców ujawnia znaczne różnice w cenach. Cena strony internetowej zależy od renomy agencji, zakresu usług i oferowanych technologii. Niektórzy oferują tanie strony oparte na gotowych szablonach, podczas gdy inni specjalizują się w profesjonalnych stronach internetowych z indywidualnym projektem graficznym.
                </p>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Co zawiera cennik wykonania strony?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Cennik wykonania strony internetowej zazwyczaj zawiera kilka podstawowych elementów: projekt graficzny strony, kodowanie i programowanie, integrację z systemem zarządzania treścią (np. WordPress) oraz podstawowe pozycjonowanie.
                </p>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Koszt utrzymania strony internetowej
                </h2>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Co obejmuje koszt utrzymania strony?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Koszt utrzymania strony internetowej obejmuje: opłatę za hosting, domenę, aktualizacje oprogramowania, certyfikaty SSL, kopie zapasowe oraz wsparcie techniczne.
                </p>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Jakie są średnie koszty miesięczne?
                </h3>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">Typ Strony</th>
                        <th className="text-left py-4 px-4 font-semibold">Miesięczny Koszt Utrzymania</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Prosta strona wizytówka</td>
                        <td className="py-4 px-4 text-muted-foreground">50 - 200 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Strona firmowa z CMS</td>
                        <td className="py-4 px-4 text-muted-foreground">100 - 500 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Sklep internetowy</td>
                        <td className="py-4 px-4 text-muted-foreground">300 - 2 000 zł</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Ile kosztuje landing page?
                </h2>

                <p className="text-muted-foreground mb-4">
                  <strong>Landing page</strong> to oddzielna kategoria stron internetowych — pojedyncza strona zaprojektowana pod jeden cel: sprzedaż, zbieranie leadów lub zapis na newsletter. Jest tańsza i szybsza w realizacji od pełnej strony firmowej, ale wymaga precyzyjnego projektu konwersji. Więcej o tym, <Link to="/uslugi/landing-page" className="text-primary hover:underline">czym jest landing page i ile kosztuje</Link>, znajdziesz na naszej stronie usługi.
                </p>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-4 px-4 font-semibold">Typ landing page</th>
                        <th className="text-left py-4 px-4 font-semibold">Orientacyjny koszt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Landing page basic (do kampanii reklamowej)</td>
                        <td className="py-4 px-4 text-muted-foreground">od 2 000 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Landing page pro (animacje, integracje CRM)</td>
                        <td className="py-4 px-4 text-muted-foreground">od 4 500 zł</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-4 px-4 text-muted-foreground">Landing page enterprise (funnel, A/B testing)</td>
                        <td className="py-4 px-4 text-muted-foreground">od 9 000 zł</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Pozycjonowanie stron a koszty
                </h2>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Ile kosztuje pozycjonowanie strony internetowej?
                </h3>
                <p className="text-muted-foreground mb-6">
                  <strong>Pozycjonowanie stron internetowych to proces optymalizacji Twojej strony, mający na celu poprawę jej widoczności w wynikach wyszukiwania.</strong> Cennik SEO obejmuje audyt strony, analizę słów kluczowych, optymalizację treści i link building. Koszty pozycjonowania zaczynają się od kilkuset złotych miesięcznie dla mniej konkurencyjnych branż. Dowiedz się więcej o naszej usłudze <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowania stron</Link>.
                </p>

                <h3 className="text-xl font-heading font-semibold mt-8 mb-4">
                  Dlaczego warto inwestować w SEO?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Inwestycja w SEO jest kluczowa dla zwiększenia widoczności Twojej strony i dotarcia do potencjalnych klientów. Dobrze wypozycjonowana witryna generuje większy ruch organiczny, co przekłada się na wzrost sprzedaży. Dowiedz się więcej o <Link to="/seo/pozycjonowanie" className="text-primary hover:underline">pozycjonowaniu stron</Link>.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl md:text-3xl font-heading font-bold mt-12 mb-6">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-6 mb-12">
                  {faqItems.map(({ question, answer }) => (
                    <div key={question} className="p-6 bg-card rounded-xl border border-border/50">
                      <h3 className="text-lg font-semibold mb-2">{question}</h3>
                      <p className="text-muted-foreground">{answer}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Cities Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-16 p-8 bg-card rounded-2xl border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <h2 className="text-2xl font-heading font-bold">
                    Tworzenie stron internetowych w całej Polsce
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  Realizujemy projekty dla klientów z całego kraju. Sprawdź nasze usługi <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline">tworzenia stron internetowych</Link> w Twoim mieście:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {cities.map((city) => (
                    city.active ? (
                      <Link
                        key={city.name}
                        to={city.path}
                        className="block p-3 bg-background border border-border/50 rounded-lg text-center hover:border-primary/50 hover:bg-primary/5 transition-all"
                      >
                        <span className="font-medium text-sm">{city.name}</span>
                      </Link>
                    ) : (
                      <div
                        key={city.name}
                        className="block p-3 bg-background/50 border border-border/30 rounded-lg text-center opacity-50"
                      >
                        <span className="font-medium text-sm text-muted-foreground">{city.name}</span>
                      </div>
                    )
                  ))}
                </div>
              </motion.div>

              {/* Related Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 p-8 bg-muted/30 rounded-2xl"
              >
                <h3 className="text-xl font-heading font-bold mb-4">Powiązane usługi</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <Link to="/uslugi/strony-internetowe" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Strony internetowe</h4>
                    <p className="text-sm text-muted-foreground">Profesjonalne strony www dla firm</p>
                  </Link>
                  <Link to="/seo/pozycjonowanie" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Pozycjonowanie SEO</h4>
                    <p className="text-sm text-muted-foreground">Zwiększ widoczność w Google</p>
                  </Link>
                  <Link to="/social-media/obsluga" className="p-4 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all">
                    <h4 className="font-semibold mb-2">Social Media</h4>
                    <p className="text-sm text-muted-foreground">Marketing w mediach społecznościowych</p>
                  </Link>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#75143F]/20 to-[#0F3053]/20 border border-primary/20 text-center"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Potrzebujesz wyceny strony internetowej?
                </h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Skontaktuj się z nami i otrzymaj bezpłatną wycenę dopasowaną do potrzeb Twojej firmy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90">
                    <Link to="/kontakt">
                      Bezpłatna wycena
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link to="/realizacje">
                      Zobacz realizacje
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </article>

        {/* Related Services */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <RelatedServices services={servicesByCategory.websites} />
          </div>
        </div>

        {/* Related Articles */}
        <RelatedArticles currentArticleId="ile-kosztuje-strona-internetowa" />
      </Layout>
    </>
  );
};

export default BlogKosztStrony;
