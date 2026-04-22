import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Target,
  Users,
  TrendingUp,
  Mail,
  Globe,
  BarChart3,
  Zap,
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

export default function LeadGeneration() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Lead Generation" },
  ];

  const channels = [
    { icon: Globe, title: "SEO i content marketing", desc: "Organiczny ruch z Google — leady które sami szukają Twojego rozwiązania. Najniższy koszt długoterminowo." },
    { icon: Target, title: "Google Ads i Meta Ads", desc: "Płatna generacja leadów — szybkie efekty, pełna kontrola budżetu, mierzalny koszt per lead." },
    { icon: Users, title: "LinkedIn i B2B outreach", desc: "Dotarcie do konkretnych decydentów — CEO, CMO, dyrektorów. Idealny dla B2B." },
    { icon: Globe, title: "Landing pages i funnel", desc: "Dedykowane strony do konwersji + sekwencja po-konwersyjna. Wyższy % leadów na klientów." },
    { icon: Mail, title: "Email cold outreach", desc: "Spersonalizowane zimne emaile do precyzyjnie dobranych firm i osób. Legalne przy RODO." },
    { icon: Zap, title: "Marketing automation", desc: "Automatyczny nurturing leadów — od pierwszego kontaktu do gotowości do zakupu." },
  ];

  const faqItems = [
    {
      question: "Co to jest lead generation?",
      answer:
        "Lead generation (generacja leadów) to proces pozyskiwania potencjalnych klientów zainteresowanych Twoją ofertą. Lead to osoba lub firma która wyraziła zainteresowanie — przez formularz kontaktowy, zapis na newsletter, pobranie e-booka, zapytanie ofertowe lub kontakt telefoniczny. Lead generation to pierwszy etap lejka sprzedażowego.",
    },
    {
      question: "Czym różni się lead od klienta?",
      answer:
        "Lead = potencjalny klient który wyraził zainteresowanie. MQL (Marketing Qualified Lead) = lead oceniony jako gotowy do sprzedaży przez marketing. SQL (Sales Qualified Lead) = lead przekazany do sprzedaży. Klient = osoba która kupiła. Cały proces od leadu do klienta to konwersja — jej optymalizacja to klucz do rentowności.",
    },
    {
      question: "Ile kosztuje pozyskanie leadu (CPL)?",
      answer:
        "Koszt per lead (CPL) jest bardzo zróżnicowany: usługi lokalne 20-100 zł, B2B 100-500 zł, finanse/ubezpieczenia 200-1000 zł, nieruchomości 50-300 zł. Wpływa na to: kanał (SEO najtańsze długoterminowo, reklamy płatne natychmiastowe), branża, konkurencja i jakość landing page.",
    },
    {
      question: "Jakie kanały lead generation działają najlepiej?",
      answer:
        "B2C: Google Ads + SEO + Facebook/Instagram Ads. B2B: LinkedIn Ads + content marketing + cold email outreach + SEO. Lokalne: SEO lokalne + Google Ads + Google Business Profile. E-commerce: Meta Ads + Google Shopping + remarketing. Nie ma jednej odpowiedzi — najlepiej łączyć kanały i mierzyć CPL z każdego.",
    },
    {
      question: "Jak mierzyć efektywność lead generation?",
      answer:
        "Kluczowe metryki: liczba leadów (ilość), CPL (koszt per lead), jakość leadów (% który staje się klientem), CAC (Customer Acquisition Cost), LTV (Lifetime Value). Konfigurujemy śledzenie konwersji w GA4, Google Ads i Meta Ads. Miesięczny raport z rekomendacjami optymalizacji.",
    },
    {
      question: "Jak szybko zobaczymy pierwsze leady?",
      answer:
        "Zależy od kanału: Google Ads/Meta Ads: pierwsze leady w 1-2 tygodnie. LinkedIn outreach: pierwsze odpowiedzi w 1-4 tygodnie. SEO: 3-6 miesięcy do widocznych wyników organicznych. Content marketing: 6-12 miesięcy. Rekomendujemy start z kanałami płatnymi i równoległe budowanie organicznych.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Lead Generation — pozyskiwanie klientów dla firm | fotz.pl"
        description="Lead generation dla firm — kompleksowe strategie pozyskiwania leadów: Google Ads, SEO, LinkedIn, landing pages, email marketing. Sprawdź ofertę i cennik!"
        canonical="https://fotz.pl/uslugi/lead-generation"
        keywords="lead generation, generowanie leadów, pozyskiwanie klientów online, leady sprzedażowe, lead generation b2b, generowanie leadów b2b"
      />
      <ServiceSchema
        name="Lead Generation"
        description="Kompleksowe strategie generacji leadów — Google Ads, SEO, LinkedIn, landing pages, email outreach, marketing automation"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-teal-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-teal-900 bg-opacity-50 text-teal-300 px-3 py-1 rounded-full text-sm mb-4">
                <Star className="w-4 h-4" />
                Specjaliści lead generation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Lead Generation — pozyskuj klientów każdego miesiąca
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Budujemy systemy generowania leadów które działają na autopilocie. Google Ads, SEO, LinkedIn,
                landing pages, email — dobieramy kanały do Twojej branży i celów sprzedażowych.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "6+", label: "Kanałów lead gen" },
                  { value: "CPL", label: "Optymalizacja pod koszt" },
                  { value: "3x", label: "ROI vs cold calling" },
                  { value: "CRM", label: "Pełna integracja" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
                Bezpłatna analiza lead gen <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Channels */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Kanały generacji leadów</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Każda firma jest inna — dobieramy kanały do branży, grupy docelowej i budżetu.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {channels.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-teal-600 mb-3" />
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

        {/* What we deliver */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Co dostarczamy?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Strategia pozyskiwania leadów dopasowana do branży",
                  "Konfiguracja i zarządzanie kampaniami płatnymi",
                  "Dedykowane landing pages pod każdą kampanię",
                  "Śledzenie konwersji i konfiguracja GA4",
                  "Integracja z CRM (HubSpot, Pipedrive, Salesforce)",
                  "Email nurturing po pozyskaniu leadu",
                  "Lead scoring i kwalifikacja automatyczna",
                  "Miesięczny raport z CPL i rekomendacjami",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Lead Generation</h2>
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
