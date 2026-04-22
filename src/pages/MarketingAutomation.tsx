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

  const packages = [
    {
      title: "Automation Start",
      price: "1 999 zł",
      type: "jednorazowo",
      desc: "Wdrożenie podstawowej automatyzacji",
      features: [
        "Audyt obecnych procesów",
        "Welcome sequence email",
        "1 automation workflow",
        "Konfiguracja narzędzia",
        "Szkolenie z obsługi",
      ],
    },
    {
      title: "Automation Growth",
      price: "3 999 zł",
      type: "jednorazowo",
      desc: "Kompleksowe wdrożenie",
      features: [
        "3-5 automation workflows",
        "Lead scoring setup",
        "CRM integracja",
        "Email sequences (3+)",
        "Segmentacja zaawansowana",
        "Miesiąc opieki po wdrożeniu",
      ],
      highlight: true,
    },
    {
      title: "Automation Enterprise",
      price: "999+ zł/mies.",
      type: "abonament",
      desc: "Stała opieka i rozwój",
      features: [
        "Nieograniczone workflows",
        "A/B testy automatyzacji",
        "Integracje custom",
        "Dedykowany specjalista",
        "Optymalizacja ciągła",
      ],
    },
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
        "Marketing automation jest opłacalne od momentu gdy masz regularny napływ leadów (100+ miesięcznie) lub chcesz utrzymać stałą komunikację z bazą klientów. Nawet małe firmy używają prostej automatyzacji (GetResponse, Mailerlite) skutecznie. Zaawansowane narzędzia jak HubSpot czy Marketo mają sens dla firm z dedykowanym zespołem marketingu.",
    },
    {
      question: "Jakie narzędzia marketing automation polecacie?",
      answer:
        "Małe firmy / e-commerce: Klaviyo (najlepszy dla sklepów), Mailerlite (tani i prosty). Firmy usługowe B2B: ActiveCampaign, HubSpot (starter). Średnie i duże firmy: HubSpot Professional, Marketo, Pardot. Do automatyzacji między narzędziami: Zapier lub Make. Dobór narzędzia zależy od budżetu, integracji i potrzeb.",
    },
    {
      question: "Ile kosztuje wdrożenie marketing automation?",
      answer:
        "Koszt wdrożenia: proste automatyzacje email 1000-3000 zł jednorazowo + koszt narzędzia (100-500 zł/mies.). Kompleksowe wdrożenie z CRM i lead scoringiem: 5000-20 000 zł. Stała opieka i optymalizacja: 1000-3000 zł/mies. Narzędzie SaaS to 100-2000 zł/mies. w zależności od wielkości bazy.",
    },
    {
      question: "Jaki ROI daje marketing automation?",
      answer:
        "Firmy które wdrożyły marketing automation raportują: 80% wzrost ilości leadów, 77% wzrost konwersji leadów, 53% wyższy ROAS. Kluczowy KPI to koszt per lead — automatyzacja obniża go o 33-50% w porównaniu do ręcznych działań. ROI widać zwykle po 3-6 miesiącach od wdrożenia.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Marketing Automation — wdrożenie i obsługa | fotz.pl"
        description="Marketing automation dla firm — wdrożenie automatyzacji emaili, lead scoringu, CRM i nurturingu. Pracuj mądrzej, nie więcej. Sprawdź ofertę i cennik!"
        canonical="https://fotz.pl/uslugi/marketing-automation"
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
                Wdrażamy systemy marketing automation które pracują za Ciebie 24/7. Automatyczne emaile,
                lead scoring, CRM integracja i nurturing — wszystko skonfigurowane i zoptymalizowane.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "80%", label: "Więcej leadów" },
                  { value: "24/7", label: "System pracuje za Ciebie" },
                  { value: "33%", label: "Niższy koszt per lead" },
                  { value: "6 mies.", label: "Śr. czas do ROI" },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-slate-800 bg-opacity-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-400">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Bezpłatna analiza procesów <ArrowRight className="ml-2 w-5 h-5" />
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

        {/* Packages */}
        <FadeInView>
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-5xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pakiety marketing automation</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`rounded-lg p-8 ${
                      pkg.highlight
                        ? "bg-gradient-to-br from-orange-600 to-orange-700 text-white border-2 border-orange-400 transform scale-105"
                        : "bg-white border border-slate-200"
                    }`}
                  >
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <div className={`text-2xl font-bold mb-0.5 ${pkg.highlight ? "text-white" : "text-orange-600"}`}>
                      {pkg.price}
                    </div>
                    <div className={`text-xs mb-2 ${pkg.highlight ? "text-orange-200" : "text-slate-400"}`}>{pkg.type}</div>
                    <p className={`mb-6 text-sm ${pkg.highlight ? "text-orange-100" : "text-slate-600"}`}>{pkg.desc}</p>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.highlight ? "text-white" : "text-orange-600"}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
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
