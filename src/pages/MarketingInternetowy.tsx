import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, ShoppingCart, BarChart3, Target, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const breadcrumbs = [
  { label: "Strona główna", url: "/" },
  { label: "Usługi", url: "/uslugi" },
  { label: "Marketing internetowy", url: "/uslugi/marketing-internetowy" }
];

const marketingServices = [
  {
    icon: Globe,
    title: "SEO — Pozycjonowanie",
    description: "Optymalizacja stron pod wyszukiwarki. Audyt techniczny, content marketing, link building. Wyniki widoczne po 3-6 miesiącach dla nowych domen."
  },
  {
    icon: Target,
    title: "Google Ads",
    description: "Kampanie Search, Display, Shopping. Precyzyjny targeting, audyt budżetu, optymalizacja CPC. ROI 3-8x dla dobrze skonfigurowanych kampanii."
  },
  {
    icon: ShoppingCart,
    title: "Facebook/Instagram Ads",
    description: "Kampanie na Meta. Targeting demograficzny i behawioralny. Efektywne dla e-commerce, usług, lead generation. CPL 10-50 PLN."
  },
  {
    icon: Zap,
    title: "Social Media Management",
    description: "Obsługa Instagram, Facebook, LinkedIn, TikTok. Content calendar, kreacje, community management. Zwiększenie zasięgu organicznego."
  },
  {
    icon: BarChart3,
    title: "Content Marketing",
    description: "Blogi, artykuły, case studies. Strategia treści dla SEO. Pozycjonowanie long-tail keywords, budowanie autorytetu."
  },
  {
    icon: DollarSign,
    title: "Email Marketing",
    description: "Kampanie e-mail, automatyzacja, nurturing leads. Integracja z CRM. Conversion rate 2-5% dla dobrze segmentowanej listy."
  }
];

const processSteps = [
  {
    number: 1,
    title: "Analiza i strategia",
    description: "Audyt konkurencji, analiza rynku, zdefiniowanie celów. Ustalenie budżetu i kanałów. Podsumowanie w raporcie — bezpłatna strategia marketingowa."
  },
  {
    number: 2,
    title: "Konfiguracja kampanii",
    description: "Uruchomienie kampanii SEO, Google Ads, Meta Ads. Setup konwersji tracking, GA4, CRM. Pierwszy miesiąc — optymalizacja i testy."
  },
  {
    number: 3,
    title: "Monitoring i optymalizacja",
    description: "Cotygodniowy monitoring, raportowanie, optymalizacja kampanii. Adjustmenty na podstawie danych. Rozmowy strategiczne co miesiąc."
  },
  {
    number: 4,
    title: "Skalowanie wyników",
    description: "Zwiększanie budżetu na kanały z najlepszym ROI. A/B testy, testowanie nowych kampanii. Long-term growth strategia."
  }
];

const faqItems = [
  {
    question: "Ile kosztuje marketing internetowy?",
    answer: "Marketing internetowy nie ma jednej ceny — zależy od zakresu. SEO solo: 1 500–3 000 PLN/mies. Google Ads: budżet kampanii + 15–20% zarządzania. Meta Ads: budżet + zarządzanie. Kompleksowa obsługa (SEO + Ads + social): 5 000–15 000 PLN/mies. Więcej kanałów = lepszy ROI, ale wyższy budżet."
  },
  {
    question: "Ile czasu trwa zanim zobaczę rezultaty?",
    answer: "SEO: 3–6 miesięcy na pierwsze pozycjonowanie, 6–12 miesięcy na top 3 wyniki. Google Ads: wyniki w ciągu 2–4 tygodni. Meta Ads: 2–3 tygodnie optimalizacji. Email: 30–60 dni na builds listy z konwersją. Zależy od konkurencji słowa kluczowego i zakresu kampanii."
  },
  {
    question: "Czy mogę sam prowadzić marketing bez agencji?",
    answer: "Możesz, ale wymaga to czasu i wiedzy. Marketing internetowy to specjalizacja — nowe algorytmy, nowe narzędzia, zmianę trendów co miesiąc. Samodzielnie: 20–40 godzin/mies na konfigurację i monitoring. Agencja: gwarantuje jakość, oszczędzę Ci czasu, a my bierzemy odpowiedzialność za wyniki."
  },
  {
    question: "Czy marketing internetowy ma gwarancje?",
    answer: "Nie ma gwarancji pozycjonowania (nieetyczne agencje obiecują 'top 3 pozycje gwarantowane' — to oszustwo). Gwarancjuję jednak profesjonalne zarządzanie — audyty, optymalizacje, A/B testy, raportowanie. Dla Google Ads — optimizuję do minimalizacji CPC. Dla SEO — audyt + implementacja best practices. Rezultaty zależą od konkurencji i budżetu."
  },
  {
    question: "Jaki jest najlepszy ROI z marketingu internetowego?",
    answer: "Google Ads (Search): ROI 3–8x dla dobrze skonfigurowanych kampanii. Meta Ads: ROI 2–5x dla e-commerce. SEO: ROI 5–10x long-term (po 6–12 mies). Email: ROI 40–50x. Najlepszy ROI = kombinacja kanałów. SEO zapewnia traffic, Ads — szybkie konwersje, email — retention."
  },
  {
    question: "Czy moja firma potrzebuje wszystkich kanałów marketingowych?",
    answer: "Nie. Zależy od branży i budżetu. E-commerce: SEO + Google Shopping + Meta Ads. Usługi lokalne: SEO + Google Ads + Facebook. B2B: LinkedIn + Google Ads + content marketing. Startup: organic social + content + growth hacks. Projektujemy mix kanałów specyficzny dla Twojej branży i budżetu."
  }
];

const packages = [
  {
    name: "Basic",
    price: "999",
    description: "Dla małych firm i startupów",
    features: [
      "SEO — optymalizacja na page",
      "Social Media Management (2 kanały)",
      "Podstawowy tracking",
      "Raport miesięczny"
    ]
  },
  {
    name: "Standard",
    price: "1999",
    description: "Kompleksowe, najczęściej wybierane",
    features: [
      "SEO — pełna implementacja",
      "Google Ads — konfiguracja i zarządzanie",
      "Social Media Management (3–4 kanały)",
      "Content Marketing — 2 artykuły/mies",
      "GA4, CRM setup",
      "Raport i strategia co miesiąc"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "3999+",
    description: "Pełna agencja — dla ambitnych firm",
    features: [
      "SEO — wszystko + link building",
      "Google Ads + Meta Ads + LinkedIn",
      "Social Media Management — 5+ kanałów",
      "Content Marketing — 4+ artykułów/mies",
      "Email marketing + automation",
      "Video content, UGC",
      "Tygodniowe strategiczne rozmowy"
    ]
  }
];

const resultsStats = [
  {
    label: "Średni wzrost ruchu",
    value: "+180%",
    description: "po 6 miesiącach SEO"
  },
  {
    label: "ROI z Google Ads",
    value: "3–8x",
    description: "dla dobrze skonfigurowanych kampanii"
  },
  {
    label: "Czas na wyniki",
    value: "3–6 mies",
    description: "SEO, szybciej dla Ads"
  }
];

export default function MarketingInternetowy() {
  return (
    <>
      <SEOHead
        title="Marketing internetowy — kompleksowe usługi online dla Twojej firmy | Fotz"
        description="Marketing internetowy dla firm w Polsce. SEO, Google Ads, Facebook/Instagram, social media, content marketing. Bezpłatna strategia marketingowa — bezpłatna konsultacja!"
        canonical="https://fotz.pl/uslugi/marketing-internetowy"
        keywords="marketing internetowy, marketing online, marketing cyfrowy, usługi marketingowe online, agencja marketingu internetowego, digital marketing"
      />

      <ServiceSchema
        name="Marketing internetowy"
        description="Kompleksowe usługi marketingu internetowego — SEO, Google Ads, Meta Ads, social media, content marketing, email. Audyty, strategia, kampanie, monitoring."
        provider="Fotz"
        areaServed={["PL"]}
      />

      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        {/* Hero Section */}
        <section className="min-h-[600px] bg-gradient-to-br from-blue-600 to-blue-800 text-white flex items-center py-20">
          <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Marketing internetowy — kompleksowe usługi online dla Twojej firmy
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-blue-100">
                2200 firm miesięcznie szuka <strong>"marketing internetowy"</strong> w Polsce. Czy jesteś na tej liście wyników?
              </p>
              <p className="text-lg text-blue-200 mb-8">
                SEO, Google Ads, social media, content marketing — wszystko z jednej agencji. Wyniki mierzalne, strategia spersonalizowana, wsparcie na każdym kroku.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                  asChild
                >
                  <Link to="#contact">
                    Bezpłatna strategia
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700"
                >
                  Pogadajmy
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Co to jest marketing internetowy? */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Co to jest marketing internetowy?</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "SEO",
                    description: "Pozycjonowanie stron w Google. Pojawić się na pierwszej stronie dla ważnych keywords. Organic traffic, bezpłatny ruch ze wyszukiwarek."
                  },
                  {
                    title: "Google Ads",
                    description: "Płatne ogłoszenia w Google Search, Display, Shopping. Szybkie wyniki, precyzyjny targeting, mierzalny ROI."
                  },
                  {
                    title: "Social Media Marketing",
                    description: "Instagram, Facebook, LinkedIn, TikTok. Budowanie społeczności, content, kampanie, influencer partnerships."
                  },
                  {
                    title: "Content Marketing",
                    description: "Artykuły, blogi, case studies, whitepapery. Budowanie autorytetu, SEO, pozyskiwanie leads poprzez wartościową treść."
                  },
                  {
                    title: "Email Marketing",
                    description: "Kampanie e-mailowe, automation, nurturing. Retention, re-engagement, wysokie ROI dla istniejących klientów."
                  },
                  {
                    title: "Analytics",
                    description: "Tracking, raportowanie, analiza danych. GA4, conversion tracking, dashboards. Decyzje oparte na danych, nie intuicji."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="p-6 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Dlaczego fotz.pl? */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Dlaczego fotz.pl?</h2>

              <div className="grid md:grid-cols-2 gap-12">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Reach lokalny + krajowy</h3>
                  <p className="text-gray-700 mb-6">
                    Obsługujemy firmy z całej Polski — z Warszawy, Krakowa, Gdańska, Poznania i małych miast. Rozumiemy specyfikę każdego rynku, konkurencję lokalną, CPL w każdym regionie.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Kampanie skalowalne — od jednego miasta do całej Polski",
                      "Doświadczenie w branżach: e-commerce, B2B, usługi, turystyka, edukacja",
                      "Zrozumienie polskiego rynku — VAT, RODO, lokalne regulacje"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeIn}
                >
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Integrated approach</h3>
                  <p className="text-gray-700 mb-6">
                    Nie pracujemy w silosach. SEO informuje strategię content, Google Ads data się w social media, email wspiera wszystkie kanały.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Jeden partner = spójna strategia marketingowa",
                      "Cross-channel synergies — lepszy ROI razem niż osobno",
                      "Raportowanie holistyczne — widać wpływ każdego kanału"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Nasze usługi marketingowe */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Nasze usługi marketingowe</h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {marketingServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={idx}
                      variants={fadeIn}
                      className="p-8 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-400 transition-colors"
                    >
                      <Icon className="w-10 h-10 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                      <p className="text-gray-700">{service.description}</p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        </FadeInView>

        {/* Jak wygląda współpraca? */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Jak wygląda współpraca?</h2>

              <div className="grid md:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="relative"
                  >
                    <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4 text-lg">
                        {step.number}
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-700 text-sm">{step.description}</p>
                    </div>
                    {idx < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                        <ArrowRight className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Wyniki które osiągamy */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Wyniki które osiągamy</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {resultsStats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg"
                  >
                    <div className="text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                    <p className="text-gray-700">{stat.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pakiety */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Pakiety marketingowe</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className={`rounded-lg p-8 flex flex-col ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-blue-600 to-blue-800 text-white border-2 border-blue-600 relative -mt-4 md:-mt-8"
                        : "bg-white border border-gray-200"
                    }`}
                  >
                    {pkg.highlight && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Najpopularniejszy
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`mb-6 ${pkg.highlight ? "text-blue-100" : "text-gray-600"}`}>
                      {pkg.description}
                    </p>
                    <div className="text-3xl font-bold mb-6">
                      {pkg.price} <span className={`text-lg ${pkg.highlight ? "text-blue-100" : "text-gray-600"}`}>PLN/mies</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {pkg.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-3">
                          <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-blue-200" : "text-green-600"}`} />
                          <span className={pkg.highlight ? "text-blue-50" : "text-gray-700"}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${pkg.highlight ? "bg-white text-blue-700 hover:bg-gray-100" : "bg-blue-600 text-white hover:bg-blue-700"}`}
                      asChild
                    >
                      <Link to="#contact">Zainteresuj się</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Najczęstsze pytania</h2>

              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-200 rounded-lg px-6 data-[state=open]:bg-blue-50">
                    <AccordionTrigger className="text-lg font-semibold text-gray-900 hover:text-blue-600 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <FAQSchema
                items={faqItems.map(item => ({
                  question: item.question,
                  answer: item.answer
                }))}
              />
            </div>
          </section>
        </FadeInView>

        {/* Contact Section */}
        <ContactSection
          heading="Zacznij z marketingiem internetowym"
          subheading="Bezpłatna strategia marketingowa dla Twojej firmy. Bez zobowiązań."
        />
      </Layout>
    </>
  );
}
