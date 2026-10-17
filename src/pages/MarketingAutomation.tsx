import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Mail,
  Target,
  BarChart3,
  Users,
  TrendingUp,
  Settings,
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

export default function MarketingAutomation() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Usługi", href: "/uslugi" },
    { label: "Marketing Automation" },
  ];

  const automations = [
    { icon: Mail, title: "Email sequences", desc: "Automatyczne sekwencje emailowe po zapisie, zakupie lub porzuceniu koszyka." },
    { icon: Target, title: "Lead scoring", desc: "Automatyczna ocena gotowości leadów do zakupu na podstawie zachowań i danych." },
    { icon: Users, title: "Segmentacja dynamiczna", desc: "Automatyczne przypisywanie do segmentów na podstawie zachowań i atrybutów." },
    { icon: BarChart3, title: "Raportowanie auto", desc: "Automatyczne raporty cotygodniowe dla całego zespołu i managementu." },
    { icon: TrendingUp, title: "Nurturing B2B", desc: "Długie sekwencje edukacyjne dla leadów B2B z długim cyklem decyzyjnym." },
    { icon: Settings, title: "Integracje CRM", desc: "Połączenie narzędzi marketing automation z CRM (HubSpot, Salesforce, Pipedrive)." },
  ];

  const tools = ["HubSpot", "ActiveCampaign", "Marketo", "Pardot", "Klaviyo", "Brevo", "GetResponse", "Zapier", "Make (Integromat)"];

  const pricingFactors = [
    "Liczba i złożoność workflowów (np. sama sekwencja powitalna vs. lead scoring i nurturing B2B).",
    "Integracje — z CRM, sklepem, formularzami i innymi narzędziami.",
    "Stan bazy kontaktów i obecnych procesów (audyt, porządkowanie danych, segmentacja).",
    "Jednorazowe wdrożenie czy stała opieka i optymalizacja.",
    "Abonament za narzędzie (np. HubSpot, Klaviyo, ActiveCampaign) opłacasz bezpośrednio u dostawcy — osobno od naszej usługi.",
  ];

  const faqItems = [
    {
      question: "Co to jest marketing automation?",
      answer:
        "Marketing automation to użycie oprogramowania do automatyzacji powtarzalnych zadań marketingowych. Zamiast ręcznie wysyłać emaile do każdego leadu, system robi to automatycznie na podstawie zdefiniowanych reguł. Przykład: osoba zapisuje się na newsletter → automatycznie dostaje welcome email → po 3 dniach email z case study → po tygodniu propozycja konsultacji.",
    },
    {
      question: "Dla jakiej wielkości firm marketing automation jest odpowiedni?",
      answer:
        "Marketing automation jest opłacalne od momentu gdy masz regularny napływ leadów lub chcesz utrzymać stałą komunikację z bazą klientów. Nawet małe firmy używają prostej automatyzacji (GetResponse, Mailerlite) skutecznie. Zaawansowane narzędzia jak HubSpot czy Marketo mają sens dla firm z dedykowanym zespołem marketingu.",
    },
    {
      question: "Jakie narzędzia marketing automation polecacie?",
      answer:
        "Małe firmy / e-commerce: Klaviyo (najlepszy dla sklepów), Mailerlite (tani i prosty). Firmy usługowe B2B: ActiveCampaign, HubSpot (starter). Średnie i duże firmy: HubSpot Professional, Marketo, Pardot. Do automatyzacji między narzędziami: Zapier lub Make. Dobór narzędzia zależy od budżetu, integracji i potrzeb.",
    },
    {
      question: "Ile kosztuje wdrożenie marketing automation?",
      answer:
        "Wycenę przygotowujemy po rozmowie o zakresie: liczbie workflowów, potrzebnych integracjach (np. z CRM), stanie bazy kontaktów oraz tym, czy chodzi o jednorazowe wdrożenie, czy stałą opiekę. Abonament za samo narzędzie opłacasz bezpośrednio u jego dostawcy — jego wysokość zależy głównie od wielkości bazy.",
    },
    {
      question: "Jaki ROI daje marketing automation?",
      answer:
        "Nie obiecujemy konkretnych wskaźników — efekt zależy od jakości bazy, oferty i treści. Automatyzacja oszczędza czas na powtarzalnych zadaniach i pozwala regularnie kontaktować się z leadami. Przed wdrożeniem ustalamy mierniki (np. koszt pozyskania leada, konwersja z leada na klienta) i śledzimy je w raportach.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Marketing Automation — wdrożenie i obsługa | FOTZ Studio"
        description="Marketing automation dla firm — wdrożenie automatyzacji emaili, lead scoringu, CRM i nurturingu. Pracuj mądrzej, nie więcej. Sprawdź ofertę!"
        canonical="https://www.fotz-studio.pl/uslugi/marketing-automation"
        keywords="marketing automation, automatyzacja marketingu, marketing automation dla firm, narzędzia marketing automation, marketing automation crm"
      />
      <ServiceSchema
        name="Marketing Automation"
        description="Wdrożenie i obsługa systemów marketing automation — email sequences, lead scoring, CRM integration, nurturing workflows"
        areaServed={["PL"]}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-orange-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 bg-orange-900 bg-opacity-50 text-orange-300 px-3 py-1 rounded-full text-sm mb-4">
                <Zap className="w-4 h-4" />
                Automatyzacja marketingu
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Marketing Automation — sprzedawaj więcej, pracuj mniej
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Wdrażamy systemy marketing automation, które wykonują powtarzalne zadania automatycznie. Automatyczne emaile,
                lead scoring, CRM integracja i nurturing — wszystko skonfigurowane i zoptymalizowane.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  <Link to="/kontakt">
                    Bezpłatna analiza procesów <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Link to="/uslugi/email-marketing">
                  <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                    Email marketing
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Automation types */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co automatyzujemy?</h2>
              <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                Powtarzalne zadania marketingowe — delegujemy do systemów automatycznych.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automations.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <FadeInView key={idx} delay={idx * 0.07}>
                      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <Icon className="w-8 h-8 text-orange-600 mb-3" />
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

        {/* Tools */}
        <FadeInView>
          <section className="py-10 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
              <h3 className="text-lg font-bold text-slate-900 mb-5">Narzędzia z którymi pracujemy:</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, idx) => (
                  <span key={idx} className="bg-white border border-slate-200 px-4 py-2 rounded-full text-slate-700 text-sm font-medium shadow-sm">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </FadeInView>

        {/* Pricing factors */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Od czego zależy wycena?</h2>
              <p className="text-center text-slate-600 mb-10">
                Wycenę przygotowujemy po rozmowie o zakresie i analizie Twoich obecnych procesów.
              </p>
              <ul className="space-y-3">
                {pricingFactors.map((factor, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-1 text-orange-600" />
                    <span>{factor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </FadeInView>

        {/* FAQ */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ — Marketing Automation</h2>
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
