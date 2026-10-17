import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Globe,
  Target,
  BarChart3,
  DollarSign,
  Search,
  ShoppingCart,
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

export default function KampaniaGoogleAds() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Google Ads", href: "/performance-marketing/google-ads" },
    { label: "Kampania Google Ads" },
  ];

  const campaignTypes = [
    {
      icon: Search,
      title: "Search Ads",
      desc: "Reklamy tekstowe w wynikach wyszukiwania. Najwyższy intent zakupowy.",
    },
    {
      icon: Globe,
      title: "Display Ads",
      desc: "Banery graficzne na milionach stron partnerskich Google.",
    },
    {
      icon: ShoppingCart,
      title: "Shopping Ads",
      desc: "Reklamy produktów dla sklepów e-commerce. Zdjęcie + cena w Google.",
    },
    {
      icon: Zap,
      title: "YouTube Ads",
      desc: "Reklamy wideo przed i w trakcie filmów. Duży zasięg i targetowanie po zainteresowaniach.",
    },
    {
      icon: Target,
      title: "Performance Max",
      desc: "Kampanie AI-driven działające we wszystkich kanałach Google naraz.",
    },
    {
      icon: BarChart3,
      title: "Local Campaigns",
      desc: "Reklamy kierujące klientów do fizycznych lokalizacji firmy.",
    },
  ];

  const services = [
    "Badanie słów kluczowych i analiza konkurencji",
    "Tworzenie grup reklam i tekstów reklamowych",
    "Targeting demograficzny, geograficzny i behawioralny",
    "Strategia ustalania stawek (bidding)",
    "Optymalizacja Quality Score",
    "Konfiguracja śledzenia konwersji",
    "Testy A/B reklam",
    "Miesięczny raport wyników",
    "Optymalizacja i skalowanie kampanii",
  ];

  const pricingFactors = [
    {
      title: "Zakres kampanii",
      desc: "Liczba i typy kampanii (Search, Display, Shopping, YouTube, Performance Max) oraz liczba grup reklam i słów kluczowych.",
    },
    {
      title: "Tryb obsługi",
      desc: "Jak często optymalizujemy i raportujemy, czy potrzebna jest konfiguracja GA4, śledzenia konwersji lub integracja z CRM.",
    },
    {
      title: "Budżet reklamowy",
      desc: "Budżet płacisz bezpośrednio Google, osobno od wynagrodzenia za obsługę. Jego wysokość dobieramy do branży, konkurencji i celu.",
    },
  ];

  const faqItems = [
    {
      question: "Jaki jest minimalny budżet na Google Ads?",
      answer:
        "Nie ma jednej kwoty dla wszystkich — zależy od branży, stawek za kliknięcie w Twojej niszy i celu kampanii. Zbyt mały budżet daje algorytmowi mało danych do optymalizacji, dlatego wysokość budżetu ustalamy po analizie słów kluczowych. Budżet reklamowy płacisz Google osobno od obsługi.",
    },
    {
      question: "Kiedy zobaczę pierwsze wyniki?",
      answer:
        "Pierwsze kliknięcia mogą pojawić się wkrótce po uruchomieniu kampanii. Konwersje i optymalizacja algorytmu potrzebują czasu na naukę, a tempo zależy od budżetu, branży i strony docelowej — dlatego nie obiecujemy sztywnych terminów efektów.",
    },
    {
      question: "Czy Google Ads vs SEO — co lepsze?",
      answer:
        "Google Ads = szybsze dotarcie, płacisz za kliknięcie, łatwo kontrolować budżet. SEO = efekty narastają wolniej, ale ruch organiczny nie jest opłacany za każde kliknięcie. Najlepiej łączyć oba kanały — Ads na start, SEO długoterminowo.",
    },
    {
      question: "Jak mierzyć ROI z Google Ads?",
      answer:
        "Konfigurujemy śledzenie konwersji (sprzedaż, zapytania, telefony). W raporcie widzisz koszt na konwersję, ROAS (return on ad spend) i wartość leadów — na tej podstawie decydujemy o dalszej optymalizacji.",
    },
    {
      question: "Na jak długo umowa?",
      answer:
        "Pracujemy na umowach miesięcznych bez długoterminowego zobowiązania. Rekomendujemy min. 3 miesiące na prawdziwą optymalizację, ale możesz zakończyć w dowolnym momencie.",
    },
    {
      question: "Co jeśli wyniki będą słabe?",
      answer:
        "Analizujemy przyczyny — może być: zbyt niski budżet, złe słowa kluczowe, słaba strona docelowa, za duża konkurencja. Wdrażamy poprawki i jasno raportujemy co działa, a co nie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kampania Google Ads | Reklama Google dla firm | FOTZ Studio"
        description="Kampanie Google Ads — reklama w wyszukiwarce Google, Display, Shopping i YouTube. Konfiguracja, optymalizacja i raporty. Bezpłatna wycena kampanii!"
        canonical="https://www.fotz-studio.pl/uslugi/kampania-google-ads"
        keywords="kampania google ads, prowadzenie kampanii google ads, kampania reklamowa google, obsługa google ads, google ads agencja, google ads dla firm"
      />
      <ServiceSchema
        name="Kampania Google Ads"
        description="Tworzenie i zarządzanie kampaniami Google Ads dla firm — Search, Display, Shopping, YouTube"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-blue-900 bg-opacity-50 text-blue-300 px-3 py-1 rounded-full text-sm mb-4">
                <Target className="w-4 h-4" />
                Kampanie Google Ads
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Kampania Google Ads — reklama w Google która przynosi wyniki
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Reklama w wyszukiwarce trafia do osób, które same szukają produktu lub usługi.
                Docieramy do klientów dokładnie wtedy, gdy szukają Twojej usługi,
                a wyniki mierzymy śledzeniem konwersji.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "ROAS", label: "Mierzony w raportach" },
                  { value: "Search", label: "Display, Shopping, YouTube" },
                  { value: "Wycena", label: "Po rozmowie o zakresie" },
                  { value: "Budżet", label: "Płacony Google osobno" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Link to="/kontakt">
                    Bezpłatna analiza słów kluczowych <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Link to="/performance-marketing/google-ads">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                    Więcej o Google Ads
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Campaign types */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Typy kampanii Google Ads</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Dobieramy typy kampanii do Twoich celów — sprzedaż, leady, zasięg czy rozpoznawalność marki.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {campaignTypes.map((type, idx) => {
                  const Icon = type.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.05}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-10 h-10 text-blue-600 mb-4" />
                        <h3 className="font-bold text-lg text-slate-900 mb-2">{type.title}</h3>
                        <p className="text-slate-600 text-sm">{type.desc}</p>
                      </div>
                    </FadeInView>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Services included */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co robimy w ramach kampanii?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Pełna obsługa od konfiguracji po optymalizację — bez ukrytych kosztów.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-800">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Od czego zależy wycena?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Wycenę obsługi przygotowujemy po rozmowie o zakresie i celach kampanii.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {pricingFactors.map((factor, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="rounded-lg p-8 bg-white border border-slate-200"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mb-3" />
                    <h3 className="text-xl font-bold mb-2">{factor.title}</h3>
                    <p className="text-sm text-slate-600">{factor.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Who benefits */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Dla kogo jest Google Ads?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: ShoppingCart, title: "E-commerce", desc: "Sklepy internetowe — Shopping Ads z produktami bezpośrednio w Google." },
                  { icon: Target, title: "Usługi lokalne", desc: "Fryzjer, mechanik, dentysta — klienci szukający lokalnie." },
                  { icon: TrendingUp, title: "B2B / Leady", desc: "Firmy B2B szukające nowych klientów przez formularze kontaktowe." },
                  { icon: Zap, title: "Startupy", desc: "Szybkie dotarcie do klientów bez czekania na SEO." },
                  { icon: DollarSign, title: "Nieruchomości", desc: "Deweloperzy i agencje nieruchomości, dla których każdy lead ma wysoką wartość." },
                  { icon: Globe, title: "Usługi prawnicze", desc: "Kancelarie, doradcy — jeden klient z zapytania w Google bywa wart wielokrotność kosztu kliknięcia." },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-slate-200">
                      <Icon className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Google Ads</h2>

              <FAQSchema items={faqItems} />

              <Accordion type="single" collapsible className="w-full bg-slate-50 rounded-lg">
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

        {/* Internal links */}
        <FadeInView>
          <section className="py-12 bg-slate-50">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">Sprawdź też nasze inne usługi</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/performance-marketing/google-ads" className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Google Ads — pełna oferta</span>
                </Link>
                <Link to="/seo/audyt" className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Audyt SEO</span>
                </Link>
                <Link to="/uslugi/marketing-internetowy" className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
                  <span className="font-medium text-slate-800">Marketing internetowy</span>
                </Link>
              </div>
            </div>
          </section>
        </FadeInView>

        <ContactSection
        />
      </Layout>
    </>
  );
}
