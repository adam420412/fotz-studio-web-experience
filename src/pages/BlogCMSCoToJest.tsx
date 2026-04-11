import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Settings, Globe, ShoppingBag, Code2 } from "lucide-react";
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

export default function BlogCMSCoToJest() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "CMS — co to jest? Systemy zarządzania treścią" },
  ];

  const cmsSystems = [
    { name: "WordPress", share: "43%", bestFor: "Blogi, strony firmowe, sklepy (WooCommerce)", pros: "Ogromna społeczność, tysiące motywów i wtyczek, świetne SEO", cons: "Wymaga aktualizacji, podatny na ataki jeśli zaniedbany" },
    { name: "Shopify", share: "4%", bestFor: "Sklepy e-commerce", pros: "Łatwość obsługi, hosting w cenie, 24/7 wsparcie", cons: "Prowizja od sprzedaży, ograniczona customizacja, abonament" },
    { name: "Wix", share: "3%", bestFor: "Proste strony, portfolio", pros: "Drag & drop, hosting w cenie, szybki start", cons: "Słabsze SEO, zamknięta platforma, trudna migracja" },
    { name: "Joomla", share: "2%", bestFor: "Portale, magazyny, społeczności", pros: "Elastyczny system uprawnień, dobry dla złożonych portali", cons: "Stroma krzywa nauki, mniej popularny = mniej zasobów" },
    { name: "Drupal", share: "1,5%", bestFor: "Duże portale, instytucje rządowe", pros: "Bardzo bezpieczny, skalowalny, enterprise-grade", cons: "Bardzo trudny bez dewelopera, drogie wdrożenia" },
    { name: "Headless CMS", share: "Rosnący", bestFor: "Aplikacje webowe, omnichannel", pros: "Pełna elastyczność, nowoczesna architektura", cons: "Wymaga dewelopera, wyższy koszt wdrożenia" },
  ];

  const faqItems = [
    {
      question: "Co to jest CMS?",
      answer:
        "CMS (Content Management System) to system zarządzania treścią — oprogramowanie umożliwiające tworzenie, edytowanie i zarządzanie stroną internetową bez znajomości programowania. Dzięki CMS możesz dodawać artykuły, zdjęcia i podstrony przez panel administracyjny — jak edytor tekstowy. Najpopularniejszy CMS to WordPress, który obsługuje 43% wszystkich stron internetowych na świecie.",
    },
    {
      question: "Jaki CMS wybrać dla strony firmowej?",
      answer:
        "Dla strony firmowej najczęściej polecamy WordPress — dojrzały, elastyczny, świetny dla SEO. Alternatywy: Wix lub Squarespace jeśli chcesz bardzo prostego narzędzia bez angażowania dewelopera. Dla sklepu: WooCommerce (WordPress) lub Shopify. Kluczowe pytania: Jak duża będzie strona? Czy potrzebujesz sklepu? Jak ważne jest SEO? Czy masz dewelopera?",
    },
    {
      question: "Czy CMS jest bezpłatny?",
      answer:
        "WordPress, Joomla i Drupal są bezpłatne (open source) — płacisz tylko za hosting i domenę. Shopify, Wix i Squarespace to platformy SaaS — płacisz miesięczny abonament (wszystko w pakiecie: hosting + CMS + wsparcie). Za WordPress płacisz: hosting (20-200 zł/mies.), domenę (80 zł/rok) i ewentualnie motyw i wtyczki premium.",
    },
    {
      question: "Co to jest headless CMS?",
      answer:
        "Headless CMS to system gdzie backend (zarządzanie treścią) jest oddzielony od frontendu (wyświetlania). Treść jest dostarczana przez API do dowolnego frontendu — strony www, aplikacji mobilnej, smart TV. Popularne headless CMS: Contentful, Strapi, Sanity. Zalety: dowolny frontend (React, Vue), omnichannel. Wady: wymaga dewelopera, wyższy koszt. Dla większości firm klasyczny WordPress jest lepszy.",
    },
    {
      question: "Czy mogę zmienić CMS bez utraty SEO?",
      answer:
        "Zmiana CMS (migracja) możliwa jest bez utraty SEO jeśli jest prawidłowo przeprowadzona: zachowaj te same URL-e lub stosuj przekierowania 301, przenieś meta tagi, tytuły i opisy, zachowaj mapę strony sitemap.xml, zaktualizuj Google Search Console. Migracja CMS to duże przedsięwzięcie — warto zlecić specjaliście SEO. Niedbała migracja może oznaczać utratę 30-70% pozycji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="CMS — co to jest? Systemy zarządzania treścią porównanie | fotz.pl"
        description="CMS co to jest — wyjaśniamy czym jest Content Management System, porównanie WordPress, Shopify, Wix, Joomla i Drupal. Który CMS wybrać dla strony firmowej?"
        canonical="https://fotz.pl/blog/co-to-jest-cms"
      />
      <ArticleSchema
        title="CMS — co to jest? Systemy zarządzania treścią"
        description="Czym jest CMS, porównanie popularnych systemów (WordPress, Shopify, Wix), który wybrać dla strony firmowej lub sklepu."
        datePublished="2025-01-30"
        dateModified="2025-03-28"
        url="https://fotz.pl/blog/co-to-jest-cms"
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
                <span className="flex items-center gap-1"><Settings className="w-4 h-4" /> CMS i technologie</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                CMS — co to jest i który wybrać?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                CMS (Content Management System) pozwala zarządzać stroną internetową bez znajomości programowania.
                WordPress, Shopify, Wix — który system wybrać i kiedy?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Jak działa CMS?</h2>
              <p className="text-slate-700 mb-4">
                Bez CMS strona internetowa to pliki HTML, CSS i JavaScript wymagające znajomości kodu.
                CMS dodaje warstwę abstrakcji — edytor podobny do Worda, przez który tworzysz treści,
                a system sam generuje odpowiedni kod.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {[
                  { icon: Globe, label: "Łatwość", desc: "Dodajesz treści jak w edytorze tekstowym — zero kodu" },
                  { icon: Settings, label: "Kontrola", desc: "Zarządzasz wszystkimi podstronami z jednego panelu" },
                  { icon: Code2, label: "Elastyczność", desc: "Wtyczki rozszerzają funkcjonalność bez pisania kodu" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-blue-50 p-4 rounded-lg border border-blue-200 text-center">
                      <Icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <div className="font-bold text-slate-900 text-sm mb-1">{item.label}</div>
                      <p className="text-slate-600 text-xs">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najpopularniejsze systemy CMS 2025</h2>
              <div className="space-y-3 mb-6">
                {cmsSystems.map((cms, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-bold text-slate-900">{cms.name}</span>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{cms.share} rynku</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-2"><span className="font-medium">Najlepszy dla:</span> {cms.bestFor}</p>
                    <div className="grid md:grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-green-600 font-medium">✓ </span>
                        <span className="text-slate-600">{cms.pros}</span>
                      </div>
                      <div>
                        <span className="text-red-500 font-medium">✗ </span>
                        <span className="text-slate-600">{cms.cons}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <ShoppingBag className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Nie wiesz który CMS wybrać?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Doradzamy i wdrażamy na WordPress, WooCommerce i inne systemy. Bezpłatna konsultacja.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron internetowych <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — CMS co to jest</h2>
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
          heading="Pomożemy wybrać i wdrożyć właściwy CMS"
          subheading="WordPress, WooCommerce, custom — doradztwo i realizacja w jednym miejscu."
        />
      </Layout>
    </>
  );
}
