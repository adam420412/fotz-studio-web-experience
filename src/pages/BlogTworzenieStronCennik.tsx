import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, DollarSign, Globe, AlertCircle } from "lucide-react";
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

export default function BlogTworzenieStronCennik() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Tworzenie stron internetowych cennik 2025" },
  ];

  const priceTable = [
    { type: "Landing page (1 strona)", range: "1 000 – 4 000 zł", time: "1-2 tyg.", tech: "WordPress / React" },
    { type: "Strona wizytówka (3-5 stron)", range: "1 500 – 5 000 zł", time: "1-3 tyg.", tech: "WordPress" },
    { type: "Strona firmowa (10-15 stron)", range: "3 000 – 12 000 zł", time: "3-6 tyg.", tech: "WordPress" },
    { type: "Sklep WooCommerce (do 100 prod.)", range: "5 000 – 15 000 zł", time: "4-8 tyg.", tech: "WordPress + WooCommerce" },
    { type: "Sklep WooCommerce (100+ prod.)", range: "10 000 – 40 000 zł", time: "6-12 tyg.", tech: "Custom / WooCommerce" },
    { type: "Portal / aplikacja webowa", range: "30 000 – 200 000+ zł", time: "3-12 mies.", tech: "React / Node / custom" },
    { type: "Strona Shopify Basic", range: "3 000 – 8 000 zł", time: "2-4 tyg.", tech: "Shopify" },
  ];

  const agencyVsFreelancer = [
    { aspect: "Cena", agency: "Wyższa (projekt + zarządzanie)", freelancer: "Niższa (brak overheadu)" },
    { aspect: "Czas realizacji", agency: "Krótszy (zespół)", freelancer: "Dłuższy (jedna osoba)" },
    { aspect: "Backup/zastępstwo", agency: "Tak — zawsze ktoś dostępny", freelancer: "Ryzyko jeśli zachoruje" },
    { aspect: "Kompleksowość", agency: "Projekt + SEO + marketing", freelancer: "Zazwyczaj samo kodowanie" },
    { aspect: "Komunikacja", agency: "Dedykowany PM", freelancer: "Bezpośrednia, szybsza" },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje prosta strona internetowa?",
      answer:
        "Prosta strona wizytówka (3-5 podstron) kosztuje od 1500 do 5000 zł w zależności od designu i funkcji. Landing page (jedna podstrona): 1000-4000 zł. Do tego dochodzi domena (ok. 80 zł/rok) i hosting (50-200 zł/mies.). Najtańsza opcja to kreator (Wix, Squarespace) za ok. 400-800 zł/rok — ale mniej elastyczny.",
    },
    {
      question: "Ile kosztuje sklep internetowy?",
      answer:
        "Sklep internetowy na WooCommerce (do 100 produktów): 5000-15 000 zł. Duży sklep (100+ produktów) z zaawansowanymi funkcjami: 10 000-40 000 zł. Shopify z customizacją: 3000-10 000 zł wdrożenia + 130-1600 zł/mies. abonamentu. Do tego koszty stałe: hosting, domena, certyfikat SSL.",
    },
    {
      question: "Agencja czy freelancer — kogo wybrać do strony?",
      answer:
        "Freelancer jest tańszy i komunikacja bywa sprawniejsza — dobry wybór dla prostych projektów. Agencja zapewnia kompleksowość (design + kod + SEO + treści), backup jeśli ktoś zachoruje i większe doświadczenie. Dla projektów powyżej 10 000 zł rekomendujemy agencję lub sprawdzonego seniora.",
    },
    {
      question: "Co wpływa na cenę strony internetowej?",
      answer:
        "Główne czynniki cenowe: liczba podstron, funkcjonalności (sklep, rezerwacje, blog), stopień customizacji projektu graficznego (gotowy motyw vs custom design), wymagania SEO, integracje z zewnętrznymi systemami (CRM, płatności, ERP), czas realizacji i doświadczenie wykonawcy.",
    },
    {
      question: "Czy można zrobić tanią stronę samodzielnie?",
      answer:
        "Tak — Wix, Squarespace, WordPress z Elementor pozwalają stworzyć stronę samodzielnie za 400-1500 zł/rok. Ograniczenia: czas (kilkadziesiąt godzin nauki i tworzenia), gorszy efekt niż u profesjonalisty, ograniczone SEO. Dla firmy traktującej stronę jako narzędzie biznesowe warto zainwestować w profesjonalistę.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Tworzenie stron internetowych cennik 2025 — aktualny przegląd cen"
        description="Tworzenie stron internetowych cennik 2025 — ile kosztuje strona firmowa, sklep, landing page. Ceny agencji i freelancerów. Sprawdź co wchodzi w cenę!"
        canonical="https://fotz.pl/blog/tworzenie-stron-internetowych-cennik"

        keywords="Tworzenie stron internetowych cennik 2025, Tworzenie stron internetowych cennik 2025 co to jest, Tworzenie stron internetowych cennik 2025 jak działa, Tworzenie stron internetowych cennik 2025 definicja, Tworzenie stron internetowych cennik 2025 przykłady, Tworzenie stron internetowych cennik 2025 poradnik, Tworzenie stron internetowych cennik 2025 przewodnik"
      />
      <ArticleSchema
        title="Tworzenie stron internetowych cennik 2025 — przegląd cen"
        description="Aktualne ceny za tworzenie stron internetowych w Polsce — strona wizytówka, sklep, landing page. Agencja vs freelancer."
        datePublished="2025-01-25"
        dateModified="2025-03-20"
        url="https://fotz.pl/blog/tworzenie-stron-internetowych-cennik"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> Cennik</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Tworzenie stron internetowych cennik 2025 — ile to kosztuje?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Aktualne ceny za tworzenie stron internetowych w Polsce — od prostej wizytówki po zaawansowany sklep.
                Porównanie agencja vs freelancer i co wchodzi w cenę.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Cennik tworzenia stron internetowych 2025</h2>
              <p className="text-slate-600 mb-6">Orientacyjne stawki polskich agencji i freelancerów (netto):</p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Typ strony</th>
                      <th className="text-left p-3 border border-slate-700">Cena</th>
                      <th className="text-left p-3 border border-slate-700">Czas</th>
                      <th className="text-left p-3 border border-slate-700">Technologia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.type}</td>
                        <td className="p-3 border border-slate-200 text-blue-600 font-bold">{row.range}</td>
                        <td className="p-3 border border-slate-200 text-slate-600">{row.time}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.tech}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-400 text-xs italic mb-8">
                Ceny netto. Orientacyjne — rzeczywiste zależą od zakresu, designu i doświadczenia wykonawcy.
              </p>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Agencja vs freelancer — różnice cenowe i jakościowe</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 border border-slate-200">Aspekt</th>
                      <th className="text-left p-3 border border-slate-200">Agencja</th>
                      <th className="text-left p-3 border border-slate-200">Freelancer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agencyVsFreelancer.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-medium text-slate-800">{row.aspect}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.agency}</td>
                        <td className="p-3 border border-slate-200 text-slate-700">{row.freelancer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Ukryte koszty — o czym zapomnieć nie wolno</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Domena — ok. 80 zł/rok (obowiązkowo)",
                  "Hosting — 50-300 zł/mies. (współdzielony) lub 200-800 zł/mies. (VPS)",
                  "Certyfikat SSL — gratis (Let's Encrypt) lub 100-500 zł/rok (komercyjny)",
                  "Motyw premium WordPress — jednorazowo 200-500 zł",
                  "Wtyczki premium — 0-1000 zł/rok (SEO, cache, formularze, bezpieczeństwo)",
                  "Zdjęcia stock — Unsplash gratis, Shutterstock 200-500 zł/rok",
                  "Opieka techniczna — 100-500 zł/mies. (aktualizacje, backupy)",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Globe className="w-5 h-5 text-blue-600 mb-2" />
                <h3 className="font-bold text-slate-900 mb-2">Chcesz wiedzieć ile będzie kosztować Twoja strona?</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Bezpłatna wycena w 24 godziny. Opowiedz nam o projekcie i dostaniesz konkretną ofertę.
                </p>
                <Link to="/kontakt">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Bezpłatna wycena <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Cennik tworzenia stron</h2>
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
        />
      </Layout>
    </>
  );
}
