import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShoppingCart, TrendingUp, BarChart2, DollarSign } from "lucide-react";
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

export default function BlogEcommerceMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "E-commerce Marketing — co to jest i jak sprzedawać online?" },
  ];

  const ecommerceChannels = [
    { channel: "SEO e-commerce", desc: "Optymalizacja kategorii, produktów i bloga pod wyszukiwarki. Najtańszy długoterminowy kanał pozyskania ruchu." },
    { channel: "Google Shopping Ads", desc: "Reklamy produktowe z zdjęciem, ceną i nazwą marki bezpośrednio w Google. Wysoka intencja zakupowa." },
    { channel: "Meta Ads (Facebook/Instagram)", desc: "Reklamy produktowe i katalogi. Retargeting porzuconych koszyków. Najlepszy dla brandingu i odkrywania produktów." },
    { channel: "Email Marketing (Klaviyo)", desc: "Abandoned cart, welcome series, post-purchase. ROI 38:1 — najwyższy spośród kanałów e-commerce." },
    { channel: "Influencer Marketing", desc: "UGC i recenzje produktów. Skuteczne dla beauty, fashion, lifestyle. Micro-influencerzy z niszową publicznością." },
    { channel: "Marketplace (Allegro, Amazon)", desc: "Dodatkowy kanał sprzedaży. Allegro: 20+ mln aktywnych kupujących w Polsce. Amazon: globalny zasięg." },
  ];

  const faqItems = [
    {
      question: "Co to jest E-commerce Marketing?",
      answer:
        "E-commerce Marketing to zbiór strategii i taktyk marketingowych mających na celu przyciągnięcie potencjalnych klientów do sklepu internetowego, zachęcenie do zakupu i budowanie lojalności. Obejmuje: SEO dla e-commerce, Google Shopping Ads, Meta Ads, email marketing, retargeting, influencer marketing, content marketing (blog z poradnikami), programy lojalnościowe, optymalizację konwersji (CRO). E-commerce w Polsce rośnie — wartość rynku osiągnęła 100 mld PLN (2023). Skuteczny e-commerce marketing łączy wiele kanałów w spójną strategię omnichannel.",
    },
    {
      question: "Jak promować sklep internetowy?",
      answer:
        "Strategie promocji sklepu internetowego: 1) SEO — optymalizacja kategorii i produktów pod słowa kluczowe (np. 'buty sportowe damskie'). Long-term, niski koszt. 2) Google Shopping Ads — reklamy produktowe z ceną i zdjęciem. Wysoka intencja zakupowa. 3) Meta Ads — retargeting i lookalike audiences. 4) Email marketing — Klaviyo: welcome series, abandoned cart, cross-sell po zakupie. 5) Allegro Ads — jeśli sprzedajesz też na Allegro. 6) Influencer marketing — micro-influencerzy w niszy produktu. 7) Content marketing — poradniki, rankingi, how-to videos (YouTube). 8) Programy lojalnościowe — punkty, cashback, VIP tiers.",
    },
    {
      question: "Jakie metryki mierzyć w e-commerce?",
      answer:
        "Kluczowe KPI e-commerce: Conversion Rate (CR): liczba zakupów / liczba sesji × 100%. Benchmark: 1-3% (powyżej 3% świetny wynik). Average Order Value (AOV): średnia wartość zamówienia. Cart Abandonment Rate: procent porzuconych koszyków (benchmark: 69%). ROAS (Return on Ad Spend): przychód / wydatki na reklamy. Benchmark per kanał: SEA 4x+, Meta 2-4x. CAC (Customer Acquisition Cost): koszt pozyskania klienta. LTV (Lifetime Value): całkowita wartość klienta. Repeat Purchase Rate: % klientów którzy kupują ponownie (dobry sklep: 25-40%). Revenue per Session: przychód / liczba sesji — ogólna miara efektywności.",
    },
    {
      question: "Jak optymalizować sklep internetowy pod konwersję?",
      answer:
        "CRO dla e-commerce: 1) Zdjęcia produktów — wysokiej jakości, wiele kątów, zoom, wideo 360°. 2) Opis produktu — konkretne korzyści, nie tylko cechy. Odpowiedź na 'dlaczego kupić właśnie to?'. 3) Social proof — recenzje (ocena 4.0+), zdjęcia klientów (UGC), liczba sprzedanych. 4) Przejrzysty checkout — minimum kroków, opcja zakupu bez rejestracji, progress bar. 5) Trust signals — certyfikaty, loga płatności (BLIK, PayPal), polityka zwrotów. 6) Szybkość — Core Web Vitals. Amazon: 100ms opóźnienia = 1% mniej przychodów. 7) Mobile UX — 60%+ zakupów e-commerce na mobile. 8) Dostępność — filtrowanie, wyszukiwarka produktów, kategorie.",
    },
    {
      question: "Jak działa Google Shopping?",
      answer:
        "Google Shopping (Google Ads Shopping) to format reklam produktowych wyświetlanych w górnej części wyników Google — z zdjęciem, ceną, nazwą produktu i marki. Jak działa: łączysz Google Merchant Center ze swoim sklepem (plik produktowy XML lub integracja z platformą). Google automatycznie dopasowuje produkty do zapytań użytkowników. Typy kampanii Shopping: Standard Shopping, Performance Max (automatyczna optymalizacja przez AI). Zalety: wysoka intencja zakupowa, widoczność przed wynikami organicznymi. Koszty: CPC (cost per click) — płacisz za kliknięcie. Benchmark CPC: 0.50-3 PLN w zależności od kategorii. ROAS benchmark: 4-8x (400-800%). Niezbędny dla każdego e-commerce w Polsce.",
    },
    {
      question: "Jak walczyć z porzuconymi koszykami?",
      answer:
        "Strategie odzyskiwania porzuconych koszyków: Email abandoned cart sequence — 3 emaile: 1h po porzuceniu (przypomnienie), 24h (social proof + FAQ), 72h (oferta: darmowa dostawa lub mały rabat). Odzyskuje 5-15% porzuconych koszyków. Retargeting Meta Ads — dynamiczne reklamy z dokładnie porzuconym produktem. Retargeting Google Display — banery na milionach stron. Push notifications — dla użytkowników którzy wyrazili zgodę. Exit-intent popup — gdy kursor kieruje się poza okno: 'Zostaw email i dostań -10%'. Optymalizacja checkout — każde zbędne pole lub krok to więcej porzuceń. Opcja zakupu bez rejestracji jest obowiązkowa — 34% porzuceń to ze względu na konieczność rejestracji (Baymard).",
    },
  ];

  return (
    <>
      <SEOHead
        title="E-commerce Marketing — co to jest i jak sprzedawać online?"
        description="E-commerce Marketing co to jest — wyjaśniamy jak promować sklep internetowy, kluczowe kanały (SEO, Google Shopping, Meta Ads), metryki i CRO dla e-commerce."
        canonical="https://fotz.pl/blog/ecommerce-marketing-co-to"

        keywords="E-commerce Marketing co to jest, E-commerce Marketing definicja, czym jest E-commerce Marketing, E-commerce Marketing w marketingu, E-commerce Marketing przykłady, jak działa E-commerce Marketing, E-commerce Marketing strategia"
      />
      <ArticleSchema
        title="E-commerce Marketing — co to jest i jak sprzedawać online?"
        description="Czym jest E-commerce Marketing, kanały (SEO, Google Shopping, Meta Ads, email), metryki (CR, AOV, ROAS), CRO dla sklepów i jak walczyć z porzuconymi koszykami."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/ecommerce-marketing-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><ShoppingCart className="w-4 h-4" /> Marketing e-commerce</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                E-commerce Marketing — co to jest i jak skutecznie sprzedawać online?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                E-commerce marketing w Polsce to rosnący rynek 100+ mld PLN. Jakie kanały działają,
                jak mierzyć efekty i jak optymalizować konwersję sklepu internetowego?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Kanały e-commerce marketingu</h2>
              <div className="space-y-3 mb-6">
                {ecommerceChannels.map((ch, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <ShoppingCart className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{ch.channel}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{ch.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe metryki e-commerce</h2>
              <div className="space-y-2 mb-6">
                {[
                  { metric: "Conversion Rate", value: "1–3%", note: "Powyżej 3% to dobry wynik" },
                  { metric: "Cart Abandonment Rate", value: "69%", note: "Branżowe benchmark — odzyskuj emailem" },
                  { metric: "ROAS Google Shopping", value: "4–8x", note: "Cel: 4x+ (ROAS 400%+)" },
                  { metric: "Email ROI", value: "38:1", note: "Najwyższy ROI spośród kanałów" },
                  { metric: "Repeat Purchase Rate", value: "25–40%", note: "Lojalność = tańszy klient" },
                ].map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{m.metric}</p>
                      <p className="text-slate-500 text-xs">{m.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{m.value}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz sklepu internetowego zoptymalizowanego pod sprzedaż?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Sklepy z szybkim checkoutem, Google Shopping integration i Klaviyo — zaprojektowane pod maksymalną konwersję.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — E-commerce Marketing co to jest</h2>
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
          heading="Zbuduj skuteczny sklep internetowy z marketingiem"
          subheading="SEO, Google Shopping integration i email marketing — pomagamy sklepom online rosnąć organicznie i przez płatne kanały."
        />
      </Layout>
    </>
  );
}
