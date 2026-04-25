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
      desc: "Reklamy wideo przed i w trakcie filmów. Zasięg 2+ mld użytkowników.",
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

  const packages = [
    {
      title: "Starter",
      budget: "500–1500 zł/mies. budżet",
      fee: "+ 499 zł obsługa",
      desc: "Dla małych firm i usług lokalnych",
      features: [
        "Kampania Search (1-2 grupy)",
        "Do 30 słów kluczowych",
        "Miesięczna optymalizacja",
        "Raport co 2 tygodnie",
        "Śledzenie konwersji",
      ],
    },
    {
      title: "Standard",
      budget: "1500–5000 zł/mies. budżet",
      fee: "+ 799 zł obsługa",
      desc: "Dla firm z ambicją wzrostu",
      features: [
        "2-4 kampanie (Search + Display)",
        "Do 100 słów kluczowych",
        "Cotygodniowa optymalizacja",
        "Raport tygodniowy",
        "A/B testy reklam",
        "Landing page review",
        "Google Analytics 4 setup",
      ],
      highlight: true,
    },
    {
      title: "Enterprise",
      budget: "5000+ zł/mies. budżet",
      fee: "+ 1499 zł obsługa",
      desc: "Dla e-commerce i dużych firm",
      features: [
        "Wszystkie typy kampanii",
        "Nieograniczone słowa kluczowe",
        "Codzienny monitoring",
        "Dedykowany account manager",
        "Shopping Ads + Performance Max",
        "Pełna integracja CRM",
        "Comiesięczna strategia",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Jaki jest minimalny budżet na Google Ads?",
      answer:
        "Rekomendujemy minimum 500 zł/mies. na budżet reklamowy. Poniżej tej kwoty algorytm Google ma za mało danych do optymalizacji. Dla e-commerce minimum to 1500-2000 zł/mies. Im większy budżet, tym szybsza optymalizacja.",
    },
    {
      question: "Kiedy zobaczę pierwsze wyniki?",
      answer:
        "Pierwsze kliknięcia pojawiają się w ciągu kilku godzin od uruchomienia. Konwersje i optymalizacja algorytmu potrzebują 2-4 tygodni uczenia się. Pełne wyniki widać po 60-90 dniach współpracy.",
    },
    {
      question: "Czy Google Ads vs SEO — co lepsze?",
      answer:
        "Google Ads = szybkie wyniki, płacisz za kliknięcie, łatwo kontrolować budżet. SEO = wolniejsze wyniki (3-6 mies.), ale bezpłatny ruch organiczny. Najlepiej łączyć oba kanały — Ads na start, SEO długoterminowo.",
    },
    {
      question: "Jak mierzyć ROI z Google Ads?",
      answer:
        "Konfigurujemy śledzenie konwersji (sprzedaż, zapytania, telefony). W raporcie widzisz koszt na konwersję, ROAS (return on ad spend), wartość leadów. Śr. ROAS u naszych klientów: 3-8x budżet.",
    },
    {
      question: "Na jak długo umowa?",
      answer:
        "Pracujemy na umowach miesięcznych bez długoterminowego zobowiązania. Rekomendujemy min. 3 miesiące na prawdziwą optymalizację, ale możesz zakończyć w dowolnym momencie.",
    },
    {
      question: "Co jeśli wyniki będą słabe?",
      answer:
        "Analizujemy przyczyny — może być: zbyt niski budżet, złe słowa kluczowe, słaba strona docelowa, za duża konkurencja. Wdrażamy poprawki i eskalujemy do naszego zespołu seniorów. Transparentnie raportujemy co działa, a co nie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Kampania Google Ads | Reklama Google dla firm | fotz.pl"
        description="Kampanie Google Ads — skuteczna reklama w wyszukiwarce Google. ROI 3-8x. Certyfikowani specjaliści. Bezpłatna wycena kampanii!"
        canonical="https://fotz.pl/uslugi/kampania-google-ads"
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
                Google Certified Partners
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Kampania Google Ads — reklama w Google która przynosi wyniki
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                65% kliknięć dla zapytań z zamiarem zakupu trafia na reklamy Google Ads.
                Docieramy do klientów dokładnie wtedy, gdy szukają Twojej usługi.
                Średni ROAS naszych klientów: 3-8x budżet reklamowy.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "3-8x", label: "Śr. ROAS" },
                  { value: "Google", label: "Certified Partner" },
                  { value: "5 dni", label: "Start kampanii" },
                  { value: "500 zł", label: "Min. budżet" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Bezpłatna analiza słów kluczowych <ArrowRight className="ml-2 w-5 h-5" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pakiety Google Ads</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Przejrzyste ceny. Płacisz za budżet + obsługę. Bez prowizji od wydatków.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-2 border-blue-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className="mb-4">
                      <div className={`text-lg font-bold ${pkg.highlight ? "text-white" : "text-blue-600"}`}>
                        {pkg.budget}
                      </div>
                      <div className={`text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-500"}`}>{pkg.fee}</div>
                    </div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-blue-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-blue-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
              <p className="text-center text-slate-500 text-sm mt-8">
                * Nie pobieramy prowizji od wydatków reklamowych. Płacisz tylko stałą opłatę za obsługę.
              </p>
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
                  { icon: DollarSign, title: "Nieruchomości", desc: "Deweloperzy i agencje nieruchomości z wysokim ROI per lead." },
                  { icon: Globe, title: "Usługi prawnicze", desc: "Kancelarie, doradcy — lead z Google Ads = klient wartości 5000+ zł." },
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
                <Link to="/uslugi/audyt-seo" className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-400 transition-colors">
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
