import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Instagram,
  Target,
  BarChart3,
  Play,
  Image,
  ShoppingBag,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function ReklamaInstagram() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Reklama Instagram" },
  ];

  const formats = [
    { icon: Image, title: "Reklamy w feedzie", desc: "Zdjęcia i karuzele w głównym feedzie Instagram. Idealne do showcase produktów i portfolio." },
    { icon: Play, title: "Instagram Reels Ads", desc: "Reklamy wideo między Reelsami — najwyższy organiczny zasięg i niski CPM." },
    { icon: Star, title: "Stories Ads", desc: "Pełnoekranowe reklamy między Stories. Świetne dla ofert czasowych i lead generation." },
    { icon: ShoppingBag, title: "Instagram Shopping", desc: "Tagi produktowe i katalog — bezpośrednia sprzedaż bez opuszczania aplikacji." },
    { icon: Target, title: "Remarketing", desc: "Dotarcie do osób które weszły w interakcję z profilem lub odwiedziły stronę." },
    { icon: BarChart3, title: "Explore Ads", desc: "Reklamy w zakładce Odkrywaj — docierasz do osób szukających nowych treści." },
  ];

  const faqItems = [
    {
      question: "Ile kosztuje reklama na Instagramie?",
      answer:
        "Koszt reklamy Instagram (obsługa): od 799 zł/mies. Budżet reklamowy osobno — minimum 500-1000 zł/mies. CPM w Polsce: 5-25 zł. CPC: 0,30-3 zł. Reklamy Instagram i Facebook są zarządzane przez ten sam Menedżer reklam (Meta Ads Manager), często w ramach jednej kampanii.",
    },
    {
      question: "Dla jakich branż Instagram Ads działa najlepiej?",
      answer:
        "Instagram idealny dla: fashion/odzież, beauty i kosmetyki, gastronomia i kawiarnie, fitness i wellness, wystrój wnętrz, turystyka, architektura, fotografia, biżuteria, produkty premium. Gorzej dla: usług B2B, branż technicznych, produktów trudnych do pokazania wizualnie.",
    },
    {
      question: "Czy Instagram Ads to to samo co Facebook Ads?",
      answer:
        "Tak — obie platformy zarządzane są przez Meta Ads Manager. Możesz prowadzić kampanie tylko na Instagram, tylko na Facebook lub na oba jednocześnie. Zazwyczaj rekomendujemy obie platformy łącznie — niższe CPM i szerszy zasięg. Kreacje muszą być dostosowane do każdego formatu.",
    },
    {
      question: "Jakie formaty reklam działają najlepiej na Instagramie?",
      answer:
        "Reels Ads — najwyższe zasięgi i niski CPM w 2024/25. Stories Ads — świetna konwersja (pełny ekran, CTA). Karuzele w feedzie — dla e-commerce (pokazujesz wiele produktów). Video Ads — wyższe zaangażowanie niż statyczne zdjęcia. Zawsze testujemy minimum 3 kreacje jednocześnie.",
    },
    {
      question: "Ile obserwujących potrzebuję do skutecznych reklam?",
      answer:
        "Żadnych — reklamy Instagram działają niezależnie od liczby obserwujących. Ale profil powinien wyglądać profesjonalnie gdy potencjalny klient kliknie i go sprawdzi. Rekomendujemy posiadanie minimum 9-12 publikacji na profilu i regularną aktywność dla wiarygodności.",
    },
    {
      question: "Jak mierzyć wyniki reklam na Instagramie?",
      answer:
        "Kluczowe metryki: CPM (koszt za 1000 wyświetleń), CPC (koszt za klik), CTR (współczynnik kliknięć), koszt per konwersja, ROAS (dla e-commerce). Do mierzenia konwersji niezbędny jest Meta Pixel na stronie. Raportujemy tygodniowo z rekomendacjami optymalizacji.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Reklama Instagram — agencja Instagram Ads | fotz.pl"
        description="Reklama na Instagramie — kampanie Meta Ads dla firm. Reels Ads, Stories, Shopping. Obsługa Instagram Ads od 799 zł/mies. Bezpłatny audyt kampanii!"
        canonical="https://fotz.pl/uslugi/reklama-instagram"
        keywords="reklama instagram, reklamy na instagramie, instagram ads, kampanie instagram, reklama instagram cena, instagram dla firm"
      />
      <ServiceSchema
        name="Reklama Instagram (Instagram Ads)"
        description="Profesjonalna obsługa reklam na Instagramie — Reels Ads, Stories Ads, Instagram Shopping, remarketing"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-pink-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-pink-900 bg-opacity-50 text-pink-300 px-3 py-1 rounded-full text-sm mb-4">
                <Instagram className="w-4 h-4" />
                Specjaliści Instagram Ads
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Reklama Instagram — docieraj do klientów tam gdzie spędzają czas
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Kampanie Instagram Ads które budują markę i sprzedają. Reels, Stories, Shopping — wszystkie formaty
                dopasowane do Twojej grupy docelowej i celów biznesowych.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "11 mln", label: "Polaków na IG" },
                  { value: "60%", label: "Odkrywa produkty na IG" },
                  { value: "Reels", label: "Najwyższy zasięg" },
                  { value: "od 799 zł", label: "Obsługa/mies." },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  Bezpłatny audyt kampanii IG <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link to="/uslugi/social-media-marketing">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Social media marketing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Formats */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Formaty reklam Instagram</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każdy format służy innemu celowi — dobieramy je strategicznie do etapu lejka sprzedażowego.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formats.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-pink-600 mb-3" />
                        <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* What we do */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Czym zajmujemy się w ramach Instagram Ads?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Konfiguracja Meta Business Suite i Pixel",
                  "Strategia targetowania i grupy docelowe",
                  "Produkcja kreacji — grafiki, karuzele, Reels",
                  "A/B testy kreacji i nagłówków",
                  "Ustawienie i zarządzanie kampaniami",
                  "Remarketing i Lookalike Audiences",
                  "Instagram Shopping (dla e-commerce)",
                  "Tygodniowe raporty i optymalizacja",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Reklama Instagram</h2>
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
