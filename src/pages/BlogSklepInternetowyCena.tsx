import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, DollarSign, ShoppingBag, AlertCircle } from "lucide-react";
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

export default function SklepInternetowyCena() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Sklep internetowy cena — ile kosztuje?" },
  ];

  const tierPrices = [
    {
      type: "DIY (kreator sklepu)",
      price: "400-1500 zł/rok",
      platform: "Wix eCommerce, Shopify Basic",
      forWho: "Hobbystyczne, bardzo mały asortyment",
      pros: "Bez wiedzy technicznej, szybki start",
      cons: "Ograniczona elastyczność, prowizje, gorszy SEO",
    },
    {
      type: "Sklep WooCommerce (mały)",
      price: "5 000 – 15 000 zł",
      platform: "WordPress + WooCommerce",
      forWho: "Start firmy, do 100 produktów",
      pros: "Pełna kontrola, dobry SEO, rozszerzalny",
      cons: "Wymaga hostingu i opieki technicznej",
      highlight: true,
    },
    {
      type: "Sklep WooCommerce (średni)",
      price: "15 000 – 40 000 zł",
      platform: "WordPress + WooCommerce custom",
      forWho: "Rozwinięty e-commerce, 100-5000 prod.",
      pros: "Zaawansowane funkcje, optymalizacja",
      cons: "Wyższy koszt wdrożenia i utrzymania",
    },
    {
      type: "Custom e-commerce",
      price: "40 000 – 200 000+ zł",
      platform: "Custom React/Next.js + API",
      forWho: "Duże sklepy, marketplace",
      pros: "Pełna skalowalność, unikalny UX",
      cons: "Bardzo wysoki koszt, długi czas",
    },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje sklep internetowy w Polsce?",
      answer:
        "Sklep internetowy kosztuje od 400 zł/rok (kreator DIY) do setek tysięcy złotych (custom e-commerce). Realna inwestycja dla małej firmy: WooCommerce 5000-15 000 zł + hosting 50-200 zł/mies. + domena 80 zł/rok. Shopify: 3000-8000 zł wdrożenie + 130-1600 zł/mies. abonament + prowizje.",
    },
    {
      question: "Co wchodzi w koszt sklepu internetowego?",
      answer:
        "Koszt sklepu to: projekt graficzny i UX, programowanie (frontend + backend), konfiguracja płatności (PayU, Przelewy24, BLIK), integracja z dostawcami (InPost, DPD), import produktów, SEO podstawowe. Osobno: domena, hosting, certyfikat SSL, opieka techniczna, marketing.",
    },
    {
      question: "Jaka platforma e-commerce jest najlepsza w Polsce?",
      answer:
        "WooCommerce (WordPress) — najpopularniejszy wybór dla polskich firm. Pełna kontrola, najlepszy SEO, duży ekosystem. Shopify — dobry dla tych co nie chcą zarządzać technikaliami. PrestaShop — dobra alternatywa dla większych sklepów. IdoSell/IAI Shop — polskie rozwiązanie z pełną obsługą. Wybór zależy od budżetu i potrzeb.",
    },
    {
      question: "Czy sklep internetowy się opłaca?",
      answer:
        "Zależy od branży, marż i ruchu. Sklep online ma niższe koszty stałe niż stacjonarny, dostępność 24/7, brak ograniczeń geograficznych. Realistyczny czas do ROI: 6-18 miesięcy przy dobrym marketingu. Niezbędne elementy sukcesu: unikalny asortyment lub cena, sprawna logistyka, SEO lub reklamy, zaufanie klientów.",
    },
    {
      question: "Jak długo trwa uruchomienie sklepu internetowego?",
      answer:
        "Mały sklep WooCommerce (do 50 produktów): 4-8 tygodni. Średni sklep (50-500 produktów): 8-16 tygodni. Duży e-commerce: 3-6 miesięcy. Czas zależy od: przygotowania treści i zdjęć, liczby produktów do importu, zakresu customizacji i integracji z systemami zewnętrznymi.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Sklep internetowy cena 2025 — ile kosztuje e-commerce? | fotz.pl"
        description="Sklep internetowy cena — ile kosztuje WooCommerce, Shopify, custom e-commerce w Polsce w 2025 roku. Realne koszty, ukryte opłaty i co naprawdę wchodzi w cenę."
        canonical="https://fotz.pl/blog/sklep-internetowy-cena"
      />
      <ArticleSchema
        title="Sklep internetowy cena 2025 — ile kosztuje e-commerce w Polsce?"
        description="Realne ceny sklepów internetowych — WooCommerce, Shopify, custom. Co wchodzi w koszt i jakie są ukryte opłaty."
        datePublished="2025-02-15"
        dateModified="2025-04-01"
        url="https://fotz.pl/blog/sklep-internetowy-cena"
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
                <span className="flex items-center gap-1"><ShoppingBag className="w-4 h-4" /> E-commerce</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Sklep internetowy cena 2025 — ile naprawdę kosztuje e-commerce?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Ceny sklepów internetowych w Polsce wahają się od 400 zł/rok do setek tysięcy złotych.
                Wyjaśniamy co naprawdę wpływa na cenę i jak wybrać właściwą platformę.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Cennik sklepów internetowych 2025</h2>
              <div className="space-y-4 mb-8">
                {tierPrices.map((tier, idx) => (
                  <div key={idx} className={`p-5 rounded-lg border ${tier.highlight ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-slate-50"}`}>
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-bold text-slate-900">{tier.type}</h3>
                      <span className="text-xl font-bold text-blue-600">{tier.price}</span>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">Platforma: {tier.platform}</p>
                    <p className="text-slate-600 text-sm mb-2">Dla kogo: {tier.forWho}</p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2 text-green-700">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                        {tier.pros}
                      </div>
                      <div className="flex items-center gap-2 text-slate-500">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        {tier.cons}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Koszty stałe sklepu internetowego</h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-3 border border-slate-200">Pozycja</th>
                      <th className="text-left p-3 border border-slate-200">Orientacyjny koszt</th>
                      <th className="text-left p-3 border border-slate-200">Uwagi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Domena", "80-150 zł/rok", "Obowiązkowo"],
                      ["Hosting (WooCommerce)", "100-500 zł/mies.", "VPS zalecany dla sklepów"],
                      ["Shopify abonament", "130-1625 zł/mies.", "Plus prowizje od sprzedaży"],
                      ["Płatności (PayU/Przelewy24)", "1-2% + 0,30 zł/transakcja", "Koszt stały"],
                      ["Certyfikat SSL", "0-500 zł/rok", "Let's Encrypt gratis"],
                      ["Opieka techniczna", "200-800 zł/mies.", "Aktualizacje, backupy, bezpieczeństwo"],
                      ["Marketing (SEO + Ads)", "1000-10 000+ zł/mies.", "Bez tego sklep nie zarobi"],
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="p-3 border border-slate-200 text-slate-700">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Tworzysz sklep internetowy?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Bezpłatna wycena i konsultacja. Powiemy Ci co warto zainwestować, a co jest zbędne.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                    Tworzenie sklepów internetowych <ArrowRight className="ml-2 w-4 h-4" />
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Sklep internetowy cena</h2>
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
          heading="Ile będzie kosztować Twój sklep?"
          subheading="Bezpłatna wycena i rekomendacja platformy. Odpowiadamy w 24 godziny."
        />
      </Layout>
    </>
  );
}
