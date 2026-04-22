import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, TrendingUp, Zap, Globe, Building2, BarChart3, Target } from "lucide-react";
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
  { label: "Agencja SEO", url: "/agencja-seo" },
  { label: "Warszawa", url: "/agencja-seo-warszawa" }
];

const seoServices = [
  {
    icon: Globe,
    title: "On-page SEO",
    description: "Optymalizacja metatagsów, headingów, struktury URL, internal linking. Keyword research i implementacja long-tail keywords."
  },
  {
    icon: Building2,
    title: "Techniczne SEO",
    description: "Audyt techniczny, Core Web Vitals, mobile optimization, sitemaps, robots.txt, structured data. Szybkość strony, infrastruktura."
  },
  {
    icon: BarChart3,
    title: "Off-page SEO",
    description: "Link building, acquiring high-authority backlinks. Guest posting, HARO, broken link building. Budowanie domeny authority."
  },
  {
    icon: Target,
    title: "Content Strategy",
    description: "Cluster topics, pillar pages, long-form content. Pozycjonowanie dla multiple keywords. Content calendar, regular updates."
  },
  {
    icon: TrendingUp,
    title: "Local SEO",
    description: "Google Business Profile, local citations, NAP consistency. Pozycjonowanie dla 'na blisko mnie' queries. Multi-location SEO."
  },
  {
    icon: Zap,
    title: "Monitoring & Reporting",
    description: "Rank tracking, traffic monitoring, competitor analysis, GA4. Raportowanie zmiany rankings, visibility, leads, conversions."
  }
];

const warsawMarketFacts = [
  {
    label: "Mieszkańców",
    value: "1.8M",
    description: "Warszawa to największy rynek w Polsce"
  },
  {
    label: "Firm zarejestrowanych",
    value: "50k+",
    description: "Ogromna konkurencja SEO"
  },
  {
    label: "Średni CPC Google Ads",
    value: "15–50 PLN",
    description: "Najdroższy rynek w Polsce"
  },
  {
    label: "SEO difficulty",
    value: "Bardzo wysoka",
    description: "Konkurencja wymaga zaawansowanej strategii"
  }
];

const faqItems = [
  {
    question: "Ile kosztuje SEO dla firm z Warszawy?",
    answer: "SEO dla Warszawy jest droższe niż dla mniejszych miast — konkurencja jest większa. Basic pakiet: 1 500–2 000 PLN/mies. Standard: 2 000–4 000 PLN/mies (zalecane dla większości). Premium (link building + zaawansowana strategia): 5 000–10 000+ PLN/mies. Budżet zależy od branży (YMYL sektory = drożej) i konkurencji keywords."
  },
  {
    question: "Ile czasu trwa zanim zobaczę rezultaty SEO w Warszawie?",
    answer: "Warszawa to konkurencyjny rynek. Pierwsze pozycjonowanie: 3–4 miesiące. Top 10 pozycje dla keywords low-competition: 4–6 miesięcy. Top 3 dla competitive keywords: 6–12 miesięcy lub dłużej. Zależy od stanu strony, budżetu linków i konkurencji. Nowe domeny wymagają więcej czasu — old domains mają lepszą pozycję."
  },
  {
    question: "Czy mogę prowadzić SEO sam w Warszawie?",
    answer: "Możesz, ale wymaga to czasu i doświadczenia. SEO to 20–30 godzin/mies (minimum) — keyword research, on-page, link building, content creation, monitoring. Rynek warszawski jest konkurencyjny — błędy kosztują Cię rankings. Agencja oszczędzi Ci czasu i gwarantuje profesjonalne execution. Zwróć się do agencji z portfolio klientów w Warszawie."
  },
  {
    question: "Czy agencja SEO gwarantuje pozycjonowanie na Google?",
    answer: "Żadna etyczna agencja nie gwarantuje pozycjonowania — Google zmienia algorytm co miesiąc. Agencje obiecujące 'gwarancję pozycji' używają black-hat technik (spam, PBN) — to ryzyko. My gwarantujemy: audyt, implementacja best practices, monitoring, regular optimizations. Rezultaty zależą od konkurencji, backlinks, treści. Pozycjonowanie to maratoni, nie sprint."
  },
  {
    question: "Czy SEO w Warszawie jest warte inwestycji?",
    answer: "Tak. Warszawa to rynek DUŻYCH kwot — nawet małe zmiany w rankings mają duży impact na revenue. E-commerce z top 1 position dla high-intent keywords zarabia kilkadziesiąt tysięcy PLN/mies. Dla usług (prawo, finanse, nieruchomości) — jedna konwersja to 5k–50k PLN wartości. SEO to najlepszy ROI — traffic jest 'bezpłatny' po pozycjonowaniu."
  },
  {
    question: "Jaki jest mix SEO, Google Ads, i social media dla Warszawy?",
    answer: "Dla firm w Warszawie — hybrid strategy: SEO dla long-term traffic (6+ miesięcy), Google Ads dla szybkich konwersji (2–4 tygodnie), social media dla brand awareness. E-commerce: 40% SEO, 40% Ads, 20% social. Usługi: 50% SEO, 30% Ads, 20% social. B2B: 40% SEO, 20% Ads, 40% LinkedIn/content. Kombinacja = maksymalny coverage rynku warszawskiego."
  }
];

const packages = [
  {
    name: "Basic",
    price: "999",
    description: "Dla startupów i małych sklepów",
    features: [
      "Keyword research (20–50 keywords)",
      "On-page SEO optimization",
      "Technical audit",
      "10 backlinks/mies",
      "Raport miesięczny"
    ]
  },
  {
    name: "Standard",
    price: "1999",
    description: "Najpopularniejszy dla firm w Warszawie",
    features: [
      "Keyword research (50–100 keywords)",
      "On-page + technical SEO",
      "Content strategy (2 artykuły/mies)",
      "25–50 backlinks/mies",
      "Local SEO (Google Business)",
      "Rank tracking, GA4 setup",
      "Raport + strategia co miesiąc"
    ],
    highlight: true
  },
  {
    name: "Premium",
    price: "3999+",
    description: "Agresywna ekspansja SEO",
    features: [
      "100+ keywords, advanced research",
      "Full technical SEO overhaul",
      "Content marketing (4+ artykułów/mies)",
      "50–100 backlinks/mies",
      "Multi-location SEO",
      "Competitor monitoring",
      "Weekly strategy calls",
      "Video SEO, featured snippets"
    ]
  }
];

export default function AgencjaSEOWarszawa() {
  return (
    <>
      <SEOHead
        title="Agencja SEO Warszawa — pozycjonowanie stron dla firm | Fotz"
        description="Agencja SEO Warszawa. Fotz — pozycjonowanie stron w Google dla firm z Warszawy. SEO, technical audit, link building. Bezpłatna analiza strony!"
        canonical="https://fotz.pl/agencja-seo-warszawa"
        keywords="agencja seo warszawa, pozycjonowanie warszawa, seo warszawa, agencja seo warszawa cena, pozycjonowanie stron warszawa, seo dla firm warszawa, audyt seo warszawa, optymalizacja seo warszawa, pozycjonowanie lokalne warszawa, link building warszawa"
      />

      <ServiceSchema
        name="Agencja SEO Warszawa"
        description="Profesjonalne usługi SEO dla firm w Warszawie. Pozycjonowanie w Google, audyt techniczny, content strategy, link building. Wyniki w 3–6 miesięcy."
        provider="Fotz"
        areaServed={["PL"]}
      />

      <BreadcrumbSchema items={breadcrumbs} />

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
                Agencja SEO Warszawa — pozycjonowanie stron dla firm
              </h1>
              <p className="text-xl sm:text-2xl mb-4 text-blue-100">
                450 firm w Warszawie szuka <strong>"agencja seo warszawa"</strong> każdego miesiąca. Czy już się tam pojawisz?
              </p>
              <p className="text-lg text-blue-200 mb-8">
                Warszawa to najbardziej konkurencyjny rynek SEO w Polsce. Agencja SEO Warszawa Fotz Studio — audyt SEO, pozycjonowanie lokalne, SEO techniczne (Core Web Vitals) i link building. CPL w Google Ads: 15–50 PLN. SEO to najlepszy ROI — jedna konwersja to 5–50k PLN.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-gray-100"
                  asChild
                >
                  <Link to="#contact">
                    Bezpłatna analiza SEO
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-blue-700"
                >
                  Pogadajmy o rankingach
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Warszawa Market Facts */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Dlaczego lokalny SEO w Warszawie jest trudny?</h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {warsawMarketFacts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200"
                  >
                    <div className="text-3xl font-bold text-blue-600 mb-2">{fact.value}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{fact.label}</h3>
                    <p className="text-gray-700 text-sm">{fact.description}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Wyzwania SEO w Warszawie</h3>
                <ul className="space-y-3">
                  {[
                    "Duża konkurencja — każdy keyword ma 100+ agencji konkurujących",
                    "YMYL sektory (finanse, prawo, nieruchomości) — wymagają zaawansowanego E-E-A-T",
                    "Corporate clients — duże firmy z nieograniczonymi budżetami SEO",
                    "High CPL — nawet dobrze pozycjonowane strony wymagają dużego budżetu linków",
                    "Dynamiczny rynek — firmy się przeprowadzają, branże się zmieniają"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        </FadeInView>

        {/* Nasze wyniki w Warszawie */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Nasze wyniki w Warszawie</h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    metric: "+180%",
                    label: "Średni wzrost traffic",
                    description: "po 6 miesiącach SEO dla firm w Warszawie"
                  },
                  {
                    metric: "3–6 mies",
                    label: "Czas na top 10",
                    description: "dla keywords medium-difficulty w konkurencyjnym rynku"
                  },
                  {
                    metric: "50–100",
                    label: "Backlinks/miesiąc",
                    description: "w pakietach Premium — budowanie autorytetu domeny"
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="p-8 bg-white rounded-lg border border-gray-200 text-center"
                  >
                    <div className="text-5xl font-bold text-blue-600 mb-2">{item.metric}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.label}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Co zawiera nasze SEO? */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Co zawiera nasze SEO?</h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {seoServices.map((service, idx) => {
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

        {/* Proces SEO */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Nasz proces SEO</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Krok 1: Audyt SEO",
                    description: "Kompleksowy audyt strony — on-page, technical, backlinks, konkurencja. Raport z rekomendacjami — dokładnie wiesz co trzeba zrobić."
                  },
                  {
                    title: "Krok 2: Keyword Research",
                    description: "50–100 keywords zidentyfikowane. Long-tail opportunities, low-competition keywords dla szybkich wyników. Prioritization based on search intent."
                  },
                  {
                    title: "Krok 3: On-page & Technical",
                    description: "Implementacja on-page (metatagsów, headingów, internal linking). Naprawa technical issues — speed, mobile, Core Web Vitals, schema markup."
                  },
                  {
                    title: "Krok 4: Content & Link Building",
                    description: "Artykuły targeting long-tail keywords. Link building — guest posts, HARO, broken links. Gradualny wzrost link profile."
                  },
                  {
                    title: "Krok 5: Monitoring & Optimization",
                    description: "Rank tracking, traffic analysis, competitor monitoring. Regular optimization based on data — A/B testy, content updates, nowe keywords."
                  }
                ].map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeIn}
                    className="flex gap-6 p-6 bg-white rounded-lg border border-gray-200"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pakiety SEO */}
        <FadeInView>
          <section className="py-20 bg-white">
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900 text-center">Pakiety SEO dla Warszawy</h2>

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
                        Rekomendowany
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
                      <Link to="#contact">Chcę konsultację</Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-20 bg-gray-50">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold mb-12 text-gray-900">Pytania o SEO w Warszawie</h2>

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
        />
      </Layout>
    </>
  );
}
