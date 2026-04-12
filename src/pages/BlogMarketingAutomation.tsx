import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Zap, BarChart3, Mail, Settings, Cpu, CheckCircle, AlertCircle } from "lucide-react";
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

export default function BlogMarketingAutomation() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Automatyzacja marketingu narzedzia" },
  ];

  const platforms = [
    {
      name: "HubSpot",
      priceRange: "0-3200+ zl/mies",
      strength: "Najlepszy CRM + marketing automation",
      features: ["Email marketing automation", "Lead scoring", "Forms i landing pages", "CRM zintegrowany", "SMS marketing", "Reporting"],
      bestFor: "Firmy B2B i B2C szukajace kompletnego rozwiazania",
      pros: ["Intuicyjny interfejs", "Doskonale scalony CRM", "Duza baza wiedzy", "Polskie wsparcie dostepne"],
      cons: ["Drogi dla startupow", "Limit kontaktow w bezplatnym planie", "Konieczna nauka systemu"]
    },
    {
      name: "Marketo",
      priceRange: "1000-5000+ zl/mies",
      strength: "Zaawansowana automatyzacja dla B2B",
      features: ["Multi-touch attribution", "Zaawansowany lead scoring", "Personalizacja dynamiczna", "Integracja z Salesforce", "Mobile marketing", "Predictive analytics"],
      bestFor: "Duze firmy B2B z zlozonym cyklem sprzedazy",
      pros: ["Najpotezniejsza automatyzacja", "Najlepsze integracje enterprise", "Zaawansowana analityka", "Skalowanie bez granic"],
      cons: ["Bardzo droga", "Stroma krzywa uczenia", "Wymaga dedykowanego zespolu"]
    },
    {
      name: "ActiveCampaign",
      priceRange: "25-229+ zl/mies",
      strength: "Najlepszy stosunek ceny do funkcjonalnosci",
      features: ["Email marketing", "Lead scoring", "Integracje (1000+)", "CRM lekki", "SMS i omnichannel", "Automation workflows"],
      bestFor: "Malych i srednich firm szukajacych wartosci",
      pros: ["Bardzo konkurencyjne ceny", "Mnogo integracji", "Latwiejszy setup niz Marketo", "Dobre wsparcie"],
      cons: ["Mniej zaawansowany niz Marketo", "CRM nie tak mocny jak HubSpot", "UI czasem nieintuitywny"]
    },
    {
      name: "GetResponse",
      priceRange: "0-599+ zl/mies",
      strength: "Email marketing z prostym automation",
      features: ["Email marketing", "Landing pages", "Webinary", "Podstawowe automatyzacje", "SMS marketing", "E-commerce integracje"],
      bestFor: "E-commerce i male biznesy szukajace prostych rozwiazan",
      pros: ["Tania (zwlaszcza plan S)", "Uproszczony interfejs", "Dobry dla e-commerce", "Duzo szablonow"],
      cons: ["Podstawowa automatyzacja", "Nie dla zaawansowanych uzytkownikow", "Limit funkcji na niskich planach"]
    },
    {
      name: "MailerLite",
      priceRange: "0-60 zl/mies",
      strength: "Najtansza opcja z dobrymi funkcjami",
      features: ["Email marketing", "Automation workflows", "Landing pages", "Podstawowy CRM", "SMS w premium", "Segmentacja"],
      bestFor: "Startupow, blogerow, male biznesy z ograniczonym budzetem",
      pros: ["Najnizsza cena na rynku", "Intuicyjny interfejs", "Dobre dla poczatkujacych", "Bez limitu liczby subskrybentow w planie free"],
      cons: ["Ograniczone zaawansowane funkcje", "Nie dla duzych firm", "Wsparcie mniej responsywne"]
    },
    {
      name: "Klaviyo",
      priceRange: "20-500+ zl/mies",
      strength: "Najlepsze dla e-commerce",
      features: ["Email + SMS marketing", "Zaawansowana segmentacja", "Predictive analytics", "Abandoned cart automation", "Flow builder", "E-commerce natywne integracje"],
      bestFor: "Sklepy online i e-commerce biznesy",
      pros: ["Made for e-commerce", "Zaawansowana segmentacja", "Automatyzacja abandoned cart", "Predykcyjna analityka"],
      cons: ["Droga dla startupow", "Ostrza krzywa uczenia", "E-commerce focused - mniej dla B2B"]
    }
  ];

  const automationTypes = [
    {
      title: "Email nurturing sequences",
      description: "Automatyczne serije emaili wysylanej do leadow na podstawie jego zachowania",
      example: "Welcome series (Day 1), Problem email (Day 3), Solution (Day 5), Case study (Day 10), CTA (Day 15)",
      tools: ["HubSpot", "ActiveCampaign", "GetResponse", "Klaviyo"]
    },
    {
      title: "Lead scoring automation",
      description: "Automatyczne przydzielanie punktow leadom na podstawie zachowania i danych demograficznych",
      example: "Email open +5 pkt, Link click +10 pkt, Form fill +30 pkt, Website visit +7 pkt. Wysoki score = handoff do sprzedazy",
      tools: ["HubSpot", "Marketo", "ActiveCampaign"]
    },
    {
      title: "Abandoned cart recovery",
      description: "Automatyczne powiadomienia gdy klient opusci koszyk bez kupna",
      example: "1h po opuszczeniu koszyka: email z remind, 24h: second email z discount, 48h: final call",
      tools: ["Klaviyo", "GetResponse", "Shopify natywnie"]
    },
    {
      title: "Social media scheduling",
      description: "Automatyczne publikowanie postow na social media z optymalnymi czasami",
      example: "Plan posta, system publikuje on o optymalnym czasie dla twojej audience",
      tools: ["Buffer", "Hootsuite", "Later"]
    },
    {
      title: "SMS marketing automation",
      description: "Automatyczne wysylanie SMS na podstawie triggerow",
      example: "Order confirmation SMS, Shipping notification, Re-engagement SMS dla nieaktywnych",
      tools: ["Klaviyo", "GetResponse", "ActiveCampaign"]
    },
    {
      title: "CRM pipeline automation",
      description: "Automatyczne przenoszenie dealow między etapami na podstawie akcji",
      example: "Demo request = MQL, Demo ukonczone = SQL, Propozycja = Opportunity",
      tools: ["HubSpot", "Marketo", "Pipedrive"]
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: "Analiza potrzeb",
      desc: "Zdefiniuj swoj funnel (TOFU-MOFU-BOFU), source leadow i KPI. Co chcesz zautomatyzowac najpierw?"
    },
    {
      step: 2,
      title: "Wybor platformy",
      desc: "Porownaj narzedzia (HubSpot, ActiveCampaign, Marketo itd) wzgledem budzetu, funkcji i integracji. Zacznij z free planu."
    },
    {
      step: 3,
      title: "Konfiguracja bazy danych",
      desc: "Importuj istniejace kontakty, oczysc baze (spam traps, duplicates), przygotuj segmentacje."
    },
    {
      step: 4,
      title: "Design email sequences",
      desc: "Napisz 5-10 emaili w kazdej sekwencji z wartoscia edukacyjna. A/B testuj subject lines."
    },
    {
      step: 5,
      title: "Setup automation workflows",
      desc: "Skonfiguruj triggery (form submit, email open, link click). Ustaw delay miedzy emailami (48h)."
    },
    {
      step: 6,
      title: "Lead scoring setup",
      desc: "Przydziel punkty za behawior i dane. Ustaw threshold dla handoff do sprzedazy (np. 100 pkt)."
    },
    {
      step: 7,
      title: "Testing i optimization",
      desc: "Testuj na malej gruupie, monitoruj open rate, click rate, conversion rate. Iteruj przez 3-6 miesiecy."
    },
    {
      step: 8,
      title: "Skalowanie",
      desc: "Po potwierdzeniu ROI, skaluj baze, dodaj nowe sekwencje, zintegruj nowe kanaly (SMS, social)."
    }
  ];

  const roiMetrics = [
    {
      metric: "Cost Per Lead (CPL)",
      formula: "Calkowity koszt / liczba leadow",
      example: "HubSpot $500/mies / 50 leadow = $10 CPL"
    },
    {
      metric: "Conversion Rate",
      formula: "Liczba konwersji / liczba leadow * 100%",
      example: "10 klientow z 100 leadow = 10% conversion"
    },
    {
      metric: "Cost Per Customer (CAC)",
      formula: "Calkowity koszt / liczba pozyskanych klientow",
      example: "HubSpot $500 + ads $500 / 20 klientow = $50 CAC"
    },
    {
      metric: "Customer Lifetime Value (LTV)",
      formula: "Srednia przychod na klienta * sredni zycia klienta",
      example: "Przychod $1000 * 5 lat = $5000 LTV"
    },
    {
      metric: "ROI",
      formula: "(Przychod - Koszty) / Koszty * 100%",
      example: "($100k przychod - $10k koszt) / $10k = 900% ROI"
    }
  ];

  const faqItems = [
    {
      question: "Jaki jest najlepszy tool do automatyzacji dla poczatkujacych?",
      answer: "Dla poczatkujacych: MailerLite (najnizsza cena, intuicyjny) lub GetResponse (email + automation + webinary). Obie platformy maja dobry free plan i nie wymagaja duzej wiedzy technicznej. Dla B2B: zacznij z ActiveCampaign lub HubSpot free planu."
    },
    {
      question: "Czy mogę bez automatyzacji zrobić marketing online?",
      answer: "Tak, ale bedzie to powolne i nieefektywne. Bez automatyzacji musisz recznie wysylac maile, czylic leady i przypominac o ofertach. Automatyzacja pozwala ci pracowac bardziej mądrze - system pracuje za ciebie 24/7. Zwlaszcza dla scaling biznesu, automatyzacja jest konieczna."
    },
    {
      question: "Ile czasu zajmuje setup automatyzacji?",
      answer: "Podstawowy setup: 2-4 tygodnie. Importowanie bazy (1 tydzien), design workflows (1 tydzien), testing (2 tygodnie). Pelna optymalizacja: 3-6 miesiecy. Zalezy od zlozosci - prosty welcome series to kilka dni, duzy funnel z multi-channel to 3+ miesiace."
    },
    {
      question: "Czy automatyzacja zwieksza spam rate?",
      answer: "Nie, jesli robisz to poprawnie. Klucz: 1) Segmentuj odbiorce - wysylaj relevantne maile, 2) Ustaw rozumne czestotliwosci emaili (nie wiecej niz 2-3 dziennie), 3) Zawsze daj unsubscribe button, 4) Monitoruj unsubscribe rate. Dobrze skonfigurowana automatyzacja ma nizszy spam rate niz manualne kampanie."
    },
    {
      question: "Jak integrować platformę automatyzacji z CRM?",
      answer: "Większość platform (HubSpot, ActiveCampaign) ma wbudowany CRM lub integruje się z Salesforce. Konfiguracja: 1) Zaloguj się do obu platform, 2) W sekcji integrations, autoryzuj dostęp, 3) Mapuj pola (np. email, imię, status lead), 4) Testuj sync. Alternatywa: Zapier do niestandardowych integracji. Po skonfigurowaniu data płynie automatycznie między systemami."
    }
  ];

  return (
    <>
      <SEOHead
        title="Automatyzacja marketingu narzedzia | HubSpot, ActiveCampaign, Marketo - Poradnik 2025"
        description="Odkryj najlepsze narzedzia do automatyzacji marketingu. Porownanie HubSpot, Marketo, ActiveCampaign, GetResponse, MailerLite, Klaviyo. Ceny, funkcje, kto dla kogo."
        canonical="https://fotz.pl/blog/automatyzacja-marketingu-narzedzia"
      />
      <ArticleSchema
        title="Automatyzacja marketingu narzedzia - Porównanie HubSpot, Marketo, ActiveCampaign i innych"
        description="Pełny poradnik do narzędzi automatyzacji marketingu. Porównanie HubSpot, Marketo, ActiveCampaign, GetResponse, MailerLite. Ceny, funkcje, najlepsze dla B2B/B2C."
        datePublished="2025-04-10"
        dateModified="2025-08-01"
        url="https://fotz.pl/blog/automatyzacja-marketingu-narzedzia"
      />
      <BreadcrumbSchema breadcrumbs={[
        { name: "Strona główna", url: "/" },
        { name: "Blog", url: "/blog" },
        { name: "Automatyzacja marketingu narzedzia", url: "/blog/automatyzacja-marketingu-narzedzia" }
      ]} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min czytania</span>
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Marketing automation</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Automatyzacja marketingu narzedzia
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Porownanie HubSpot, Marketo, ActiveCampaign, GetResponse, MailerLite i Klaviyo. Ceny, funkcje, ktorego narzedzia wybrac dla swojego biznesu.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Automatyzacja marketingu zmienia gre dla firm chcacych skalowac bez proporcjonalnego wzrostu kosztow. Zamiast ręcznego wysyłania emaili i trackowania leadów, system robi to za Ciebie - 24/7, bez bledow, z personalizacja.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Ale jaki tool wybrać? Na rynku jest HubSpot, Marketo, ActiveCampaign, GetResponse, MailerLite, Klaviyo i wiele innych. Każdy obiecuje najlepsze rezultaty. W tym przewodniku porownujemy narzedzia - ceny, funkcje, pros/cons - abyśmy mógł wybrać najlepsze dla siebie.
              </p>
            </FadeInView>
          </div>
        </section>

        {/* Porownanie narzedzi */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Porownanie narzedzi do automatyzacji</h2>
              <p className="text-slate-300 mb-12">
                Oto glowne platformy - ceny, najsilniejsze strony i dla kogo najlepsze:
              </p>
            </FadeInView>

            <div className="space-y-6">
              {platforms.map((platform, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-yellow-400/50 transition">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-xl font-bold text-yellow-400 mb-2">{platform.name}</h3>
                        <p className="text-slate-400 text-sm mb-4">Cena: <span className="text-slate-200 font-semibold">{platform.priceRange}</span></p>
                        <p className="text-slate-300 mb-4">{platform.strength}</p>

                        <div className="mb-4">
                          <p className="text-sm text-slate-400 font-semibold mb-2">Najlepszy dla:</p>
                          <p className="text-slate-300 text-sm">{platform.bestFor}</p>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-green-400 font-semibold">Zalety:</p>
                          {platform.pros.map((pro, i) => (
                            <div key={i} className="flex gap-2 text-sm text-slate-300">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-slate-400 font-semibold mb-3">Glowne funkcje:</p>
                        <div className="bg-gray-900/50 rounded p-4 mb-4">
                          <ul className="space-y-2">
                            {platform.features.map((feature, i) => (
                              <li key={i} className="text-sm text-slate-300 flex gap-2">
                                <span className="text-yellow-400">•</span> {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm text-red-400 font-semibold">Wady:</p>
                          {platform.cons.map((con, i) => (
                            <div key={i} className="flex gap-2 text-sm text-slate-300">
                              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Rodzaje automatyzacji */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Co mozesz zautomatyzowac?</h2>
              <p className="text-slate-300 mb-12">
                Oto glowne typy automatyzacji ktore zwiekszaja konwersje i zmniejszaja prace manualną:
              </p>
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-6">
              {automationTypes.map((type, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Cpu className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <h3 className="text-lg font-bold text-white">{type.title}</h3>
                    </div>
                    <p className="text-slate-300 text-sm mb-3">{type.description}</p>
                    <div className="bg-gray-900/50 rounded p-3 mb-3">
                      <p className="text-xs text-slate-400 mb-1 font-semibold">Przyklad:</p>
                      <p className="text-sm text-slate-300">{type.example}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {type.tools.map((tool, i) => (
                        <span key={i} className="text-xs bg-yellow-400/10 text-yellow-300 px-2 py-1 rounded border border-yellow-400/20">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* Email automation */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Email marketing automation - Praktyczne przyklady</h2>
              <p className="text-slate-300 mb-8">
                Email to najsilniejszy kanal automatyzacji. Oto przyklady sekwencji ktore pracuja:
              </p>
            </FadeInView>

            <div className="space-y-6">
              <FadeInView delay={0.1}>
                <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" /> Welcome Series (dla nowych subskrybentow)
                  </h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <div className="flex gap-4">
                      <span className="font-semibold text-blue-300 flex-shrink-0">Day 1:</span>
                      <span>Witaj email - dzieki za rejestracje, co dostaniesz, co robie</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-blue-300 flex-shrink-0">Day 3:</span>
                      <span>Problem email - identyfikuj biggest pain point, pokaż ze rozumiesz problem</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-blue-300 flex-shrink-0">Day 5:</span>
                      <span>Solution email - jak rozwiazujesz ten problem, case study lub testimonial</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-blue-300 flex-shrink-0">Day 7:</span>
                      <span>Social proof - testimonials od zadowolonych klientow, reviews</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-blue-300 flex-shrink-0">Day 10:</span>
                      <span>Call to action - demo, trial, spotkanie. Bez presji, tylko zaproponowanie</span>
                    </div>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <div className="bg-emerald-900/20 border border-emerald-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-emerald-300 mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" /> Nurture Sequence (dla leadow w MOFU)
                  </h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <p>Wysylana gdy lead pobierze whitepaper lub rejestruje sie na webinar:</p>
                    <div className="flex gap-4 mt-3">
                      <span className="font-semibold text-emerald-300 flex-shrink-0">48h:</span>
                      <span>Email 1 - deep dive w topic z whitepaper, educational content</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-emerald-300 flex-shrink-0">96h:</span>
                      <span>Email 2 - intermediate level, how-to guide, best practices</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-emerald-300 flex-shrink-0">1 week:</span>
                      <span>Email 3 - advanced tactics, case study, ROI metrics</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-emerald-300 flex-shrink-0">2 weeks:</span>
                      <span>Email 4 - CTA do demo, propozycja, exclusive offer</span>
                    </div>
                  </div>
                </div>
              </FadeInView>

              <FadeInView delay={0.3}>
                <div className="bg-orange-900/20 border border-orange-700/50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-300 mb-4 flex items-center gap-2">
                    <Mail className="w-5 h-5" /> Abandoned Cart (dla e-commerce)
                  </h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <p>Automatyczne powiadomienia gdy klient opusci koszyk:</p>
                    <div className="flex gap-4 mt-3">
                      <span className="font-semibold text-orange-300 flex-shrink-0">1 hour:</span>
                      <span>Email 1 - Reminder o opuszczonym koszyku, link do koszyka</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-orange-300 flex-shrink-0">24h:</span>
                      <span>Email 2 - Second reminder + 10% discount code</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="font-semibold text-orange-300 flex-shrink-0">72h:</span>
                      <span>Email 3 - Final call + bigger discount, limited time offer</span>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
          </div>
        </section>

        {/* Metryki ROI */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak mierzyć ROI automatyzacji?</h2>
              <p className="text-slate-300 mb-8">
                Nie mozesz poprawiac tego co nie mierzysz. Oto glowne metryki:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {roiMetrics.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.1}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">{item.metric}</h3>
                    <p className="text-sm text-slate-400 mb-2">
                      <span className="font-semibold text-slate-300">Wzor:</span> {item.formula}
                    </p>
                    <p className="text-sm text-slate-300">
                      <span className="font-semibold text-slate-300">Przyklad:</span> {item.example}
                    </p>
                  </div>
                </FadeInView>
              ))}
            </div>

            <FadeInView delay={0.6} className="mt-6">
              <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border border-yellow-400/30 rounded-lg p-6">
                <p className="text-slate-300 text-sm mb-4">
                  <span className="font-semibold text-yellow-300">Szybka zasada:</span> Jesli LTV (lifetime value klienta) jest wiecej niz 3x CAC (koszt pozyskania), automatyzacja jest rentowna.
                </p>
                <p className="text-slate-300 text-sm">
                  Przyklad: LTV = 5000 zl, CAC = 1200 zl → 5000 / 1200 = 4.2x. To dobry zwrot.
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Implementacja */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jak zaczac - 8 krokow implementacji</h2>
              <p className="text-slate-300 mb-8">
                Praktyczne kroki aby wdrozyc automatyzacje bez bolu:
              </p>
            </FadeInView>

            <div className="space-y-4">
              {implementationSteps.map((item) => (
                <FadeInView key={item.step} delay={item.step * 0.08}>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 flex gap-4">
                    <div className="bg-yellow-400/20 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <span className="text-yellow-400 font-bold text-sm">{item.step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-900 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Czesto zadawane pytania</h2>
              <p className="text-slate-300 mb-8">
                Odpowiadamy na najczestsze pytania o narzedzia automatyzacji:
              </p>
            </FadeInView>

            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, idx) => (
                <FadeInView key={idx} delay={idx * 0.05}>
                  <AccordionItem value={`faq-${idx}`} className="border border-gray-700 rounded-lg bg-gray-800 px-4">
                    <AccordionTrigger className="text-base font-semibold text-white hover:text-yellow-400 py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-300 pb-4 pt-0">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </FadeInView>
              ))}
            </Accordion>
          </div>

          <FAQSchema
            items={faqItems.map(item => ({
              question: item.question,
              answer: item.answer
            }))}
          />
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 border-b border-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
            <FadeInView>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Gotowy do wybrania narzedzia?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Wdrożenie automatyzacji to inwestycja, która szybko się zwraca poprzez wyższą konwersję i niższe koszty pozyskania klienta.
                Pomożemy Ci wybrać idealne narzędzie i wdrożyć strategie.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-lg transition"
              >
                Konsultacja bezplatna <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInView>
          </div>
        </section>

        <ContactSection />
      </Layout>
    </>
  );
}
