import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Globe, Settings, Code2, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogWordPressCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "WordPress — co to jest i jak działa?" },
  ];

  const wordpressUses = [
    { icon: Globe, title: "Strony firmowe", desc: "Ponad 43% stron www na świecie działa na WordPress. Od wizytówek po rozbudowane portale korporacyjne." },
    { icon: Settings, title: "Blogi i magazyny", desc: "WordPress powstał jako platforma blogowa — obsługuje najpopularniejsze blogi świata." },
    { icon: Code2, title: "Sklepy WooCommerce", desc: "Wtyczka WooCommerce zamienia WordPress w pełnoprawny sklep internetowy — bezpłatnie." },
    { icon: Users, title: "Portale i społeczności", desc: "Systemy membership, kursy online, fora — WordPress obsługuje zróżnicowane społeczności." },
  ];

  const wordpressVsOthers = [
    { feature: "Łatwość obsługi", wordpress: "★★★★☆ Prosty panel", squarespace: "★★★★★ Bardzo prosty", wix: "★★★★★ Drag & drop" },
    { feature: "Elastyczność", wordpress: "★★★★★ Nieograniczona", squarespace: "★★★☆☆ Ograniczona", wix: "★★★☆☆ Ograniczona" },
    { feature: "SEO", wordpress: "★★★★★ Yoast SEO", squarespace: "★★★☆☆ Podstawowe", wix: "★★★☆☆ Podstawowe" },
    { feature: "Koszt", wordpress: "Hosting + wtyczki", squarespace: "Abonament ~100-200 zł/mies.", wix: "Abonament ~50-150 zł/mies." },
    { feature: "Sklep", wordpress: "WooCommerce (gratis)", squarespace: "Wbudowany (abonament)", wix: "Wbudowany (abonament)" },
    { feature: "Własność danych", wordpress: "★★★★★ Pełna kontrola", squarespace: "★★☆☆☆ Zamknięta platforma", wix: "★★☆☆☆ Zamknięta platforma" },
  ];

  const faqItems = [
    {
      question: "Co to jest WordPress?",
      answer:
        "WordPress to najpopularniejszy system zarządzania treścią (CMS) na świecie — używa go ponad 43% wszystkich stron internetowych. Jest bezpłatny i open-source. Umożliwia tworzenie i zarządzanie stroną bez znajomości programowania — przez intuicyjny panel administracyjny. Dostępny jest w dwóch wersjach: WordPress.com (hosting w pakiecie, mniej elastyczny) i WordPress.org (instalacja na własnym hostingu, pełna kontrola).",
    },
    {
      question: "Czy WordPress jest bezpłatny?",
      answer:
        "Sam WordPress (oprogramowanie) jest całkowicie bezpłatny — można pobrać z wordpress.org. Płacisz za: hosting (30-200 zł/mies.), domenę (ok. 80 zł/rok), ewentualnie motyw premium (200-500 zł jednorazowo), wtyczki premium (SEO, formularz, sklep) i ewentualnie dewelopera lub agencję do wdrożenia. Całkowity koszt roczny: 400-2000 zł dla prostej strony firmowej.",
    },
    {
      question: "Dla kogo jest WordPress?",
      answer:
        "WordPress sprawdza się dla: małych i średnich firm szukających elastycznej strony, blogerów i twórców treści, sklepów internetowych (WooCommerce), organizacji non-profit i instytucji, agencji i freelancerów zarządzających wieloma stronami. Nie sprawdza się dla bardzo złożonych aplikacji webowych — tam lepsze są custom rozwiązania.",
    },
    {
      question: "WordPress czy Wix — co wybrać?",
      answer:
        "Wix: prostszy, gotowy hosting, drag & drop, ale mniej elastyczny, gorsze SEO, zamknięta platforma (dane trudno przenieść). WordPress: wymaga hostingu i konfiguracji, nieograniczona elastyczność, świetne SEO (Yoast), pełna własność danych. Rekomendacja: dla firm traktujących stronę jako narzędzie biznesowe — WordPress. Dla hobbystycznych projektów gdzie łatwość obsługi ważniejsza od SEO — Wix.",
    },
    {
      question: "Czy WordPress jest bezpieczny?",
      answer:
        "WordPress jest bezpieczny jeśli jest właściwie zarządzany: regularnie aktualizuj WordPress + wtyczki + motyw, używaj silnych haseł i dwuetapowej weryfikacji, zainstaluj wtyczkę bezpieczeństwa (Wordfence lub Solid Security), rób regularne backupy, używaj reputablego hostingu. Problemy bezpieczeństwa zazwyczaj wynikają z nieaktualnych wtyczek lub słabych haseł — nie z samego WordPressa.",
    },
    {
      question: "Jak zainstalować WordPress?",
      answer:
        "Instalacja WordPress: 1) Kup hosting i domenę. 2) W panelu hostingu (cPanel) znajdź 'WordPress Installer' lub 'Softaculous' — jeden przycisk. 3) Uzupełnij dane: url, nazwa strony, login administratora. 4) Poczekaj 2-3 minuty. 5) Zaloguj się do panelu pod adresem twojadomena.pl/wp-admin. 6) Wybierz motyw i zainstaluj potrzebne wtyczki. Cały proces zajmuje ok. 15 minut.",
    },
  ];

  return (
    <>
      <SEOHead
        title="WordPress — co to jest i jak działa? Poradnik 2025 | fotz.pl"
        description="WordPress co to jest — wyjaśniamy czym jest WordPress, jak działa CMS, do czego służy i kiedy warto go wybrać. Porównanie z Wix i Squarespace. Poradnik 2025."
        canonical="https://fotz.pl/blog/wordpress-co-to"
      />
      <ArticleSchema
        title="WordPress — co to jest i jak działa?"
        description="Czym jest WordPress, jak działa system CMS, do czego służy i kiedy wybrać WordPress zamiast Wix czy Squarespace."
        datePublished="2025-01-12"
        dateModified="2025-03-22"
        url="https://fotz.pl/blog/wordpress-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Globe className="w-4 h-4" /> CMS / WordPress</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                WordPress — co to jest i jak działa?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                WordPress to system zarządzania treścią używany przez ponad 43% stron internetowych na świecie.
                Bezpłatny, elastyczny i potężny — idealne narzędzie dla firm, blogów i sklepów.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">WordPress w liczbach</h2>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { stat: "43%", desc: "wszystkich stron www używa WordPressa" },
                  { stat: "~60 000", desc: "bezpłatnych wtyczek w oficjalnym repozytorium" },
                  { stat: "0 zł", desc: "koszt samego oprogramowania WordPress" },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</div>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Do czego służy WordPress?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {wordpressUses.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">WordPress vs Wix vs Squarespace</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Cecha</th>
                      <th className="text-left p-3 border border-slate-700">WordPress</th>
                      <th className="text-left p-3 border border-slate-700">Squarespace</th>
                      <th className="text-left p-3 border border-slate-700">Wix</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wordpressVsOthers.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.feature}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.wordpress}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.squarespace}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.wix}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Zalety WordPress dla firm</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Pełna własność strony — Twoje dane, Twój hosting, żadna platforma nie może zamknąć Twojego konta",
                  "Najlepsze SEO — Yoast SEO, pełna kontrola nad meta tagami, schemat, sitemap",
                  "WooCommerce — możesz w każdej chwili dodać sklep bez przepisywania strony",
                  "Ogromna społeczność — tysiące deweloperów, rozwiązanie na każdy problem",
                  "Łatwa obsługa dla właściciela — aktualizujesz treści sam, bez angażowania dewelopera",
                  "Skalowalność — rośnie razem z Tobą od małej wizytówki do dużego portalu",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony na WordPress?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy profesjonalne strony WordPress — z SEO, szkoleniem i opieką po uruchomieniu.
                </p>
                <Link to="/uslugi/strona-wordpress" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Strona WordPress — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — WordPress co to jest</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Zbudujmy razem stronę na WordPress"
          subheading="Profesjonalne wdrożenie, SEO i szkolenie — gotowe w 2-4 tygodnie."
        />
      </Layout>
    </>
  );
}
