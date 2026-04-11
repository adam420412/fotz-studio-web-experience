import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Zap, TrendingUp, BarChart2, CheckCircle2 } from "lucide-react";
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

export default function BlogMarketingAutomationCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Marketing Automation — co to jest i jak wdrożyć?" },
  ];

  const automationExamples = [
    { trigger: "Rejestracja na listę emailową", action: "Uruchomienie welcome sequence (5 emaili przez 2 tygodnie)" },
    { trigger: "Porzucenie koszyka", action: "Seria 3 emaili (1h, 24h, 72h) z przypomnieniem i ofertą" },
    { trigger: "Brak logowania przez 14 dni (SaaS)", action: "Email z poradnikiem jak zacząć + invite na webinar" },
    { trigger: "Odwiedzenie strony cennik bez zakupu", action: "Retargeting Meta Ads + email z porównaniem planów" },
    { trigger: "Urodziny klienta", action: "Spersonalizowany email z kodem rabatowym" },
    { trigger: "Lead score przekroczył 50 pkt", action: "Automatyczne przypisanie do handlowca w CRM" },
  ];

  const faqItems = [
    {
      question: "Co to jest Marketing Automation?",
      answer:
        "Marketing Automation to używanie oprogramowania do automatyzowania powtarzalnych zadań marketingowych — wysyłki emaili, zarządzania leadami, publikacji w social media, scoring leadów — na podstawie zachowania użytkowników lub upływu czasu. Zamiast ręcznie wysyłać email każdemu nowemu subskrybentowi, system robi to automatycznie. Forrester Research: firmy które wdrożyły marketing automation generują 50% więcej leadów przy 33% niższym koszcie. Marketing automation jest fundamentem scalable growth dla firm SaaS i e-commerce.",
    },
    {
      question: "Jakie narzędzia do Marketing Automation wybrać?",
      answer:
        "Najlepsze platformy Marketing Automation: E-commerce: Klaviyo — najlepsze dla sklepów (Shopify/WooCommerce), email + SMS. Od 20 USD/mies. B2B SaaS (SMB): ActiveCampaign — email automation + CRM + lead scoring. Od 15 USD/mies. B2B (Mid/Enterprise): HubSpot Marketing Hub — kompleksowy, drogi (od 800 USD/mies.), ale potężny. Marketo (Adobe): enterprise B2B, zaawansowany lead scoring. Pardot (Salesforce): enterprise, integracja z Salesforce CRM. Marketing + CRM all-in-one: HubSpot, ActiveCampaign. Customer.io: developer-friendly, behavioral emails dla SaaS. Rekomendacja SMB: Klaviyo dla e-commerce, ActiveCampaign dla B2B — oba mają świetny ROI.",
    },
    {
      question: "Jak wdrożyć Marketing Automation?",
      answer:
        "Wdrożenie Marketing Automation krok po kroku: 1) Wybierz narzędzie dopasowane do modelu biznesowego i budżetu. 2) Integruj z CRM, e-commerce lub stroną (Shopify, WordPress, custom). 3) Zainstaluj pixel/tag śledzenia na stronie. 4) Zdefiniuj segmenty odbiorców — nowi, aktywni, nieaktywni, VIP. 5) Stwórz pierwsze automatyzacje od najprostszych: welcome email, abandoned cart. 6) Skonfiguruj lead scoring — które akcje zwiększają/zmniejszają score? 7) Połącz z CRM — automatyczne przekazywanie gorących leadów do sprzedaży. 8) Mierz i optymalizuj — open rate, click rate, konwersje z automatyzacji.",
    },
    {
      question: "Co to jest Lead Scoring?",
      answer:
        "Lead Scoring to automatyczne nadawanie punktów leadom na podstawie ich zachowania i danych demograficznych, aby określić gotowość do zakupu. Scoring behawioralny: otwarcie emaila (+1), kliknięcie linku (+3), odwiedzenie strony cennik (+10), wypełnienie formularza (+15), udział w webinarze (+20), brak aktywności przez 30 dni (-5). Scoring demograficzny: stanowisko Manager/Dyrektor (+10), firma 50+ pracowników (+10), branża docelowa (+15). Lead w MQL (Marketing Qualified Lead) trafia do handlowca automatycznie po przekroczeniu progu (np. 50 pkt). Efekt: sprzedawcy kontaktują się tylko z najgorętszymi leadami.",
    },
    {
      question: "Czym jest Marketing Automation dla e-commerce?",
      answer:
        "Marketing Automation w e-commerce: Kluczowe automatyzacje: 1) Welcome series — seria emaili dla nowych subskrybentów z ofertą powitalną. 2) Abandoned Cart — 3 emaile (1h, 24h, 72h) odzyskuje 5-15% porzuconych koszyków. 3) Post-purchase — podziękowanie, prośba o recenzję, upsell/cross-sell. 4) Win-back — dla nieaktywnych klientów (brak zakupu 90+ dni). 5) Birthday email — spersonalizowany kod rabatowy. 6) Browse abandonment — email dla osób które oglądały produkt bez dodania do koszyka. ROI: abandoned cart automation to zazwyczaj najwyżej rentowna automatyzacja w e-commerce — 38:1 ROI (Klaviyo data).",
    },
    {
      question: "Ile kosztuje Marketing Automation?",
      answer:
        "Koszty Marketing Automation zależą od platformy i skali: Małe firmy (do 2000 kontaktów): ActiveCampaign Starter od 15 USD/mies., Klaviyo od 20 USD/mies., Mailchimp od 13 USD/mies. Średnie firmy (2000-10 000 kontaktów): ActiveCampaign 30-70 USD/mies., Klaviyo 60-150 USD/mies. Duże firmy (10 000+ kontaktów): 200-2000 USD/mies. Enterprise: HubSpot Marketing Hub od 800 USD/mies., Marketo 1500+ USD/mies. Ukryte koszty: czas konfiguracji (10-40h inicjalnie), integracje (developer), szkolenie zespołu. ROI: firmy SMB odnotowują zwrot inwestycji w Marketing Automation w ciągu 6-12 miesięcy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Marketing Automation — co to jest i jak wdrożyć? | fotz.pl"
        description="Marketing Automation co to jest — wyjaśniamy czym jest automatyzacja marketingu, narzędzia (Klaviyo, ActiveCampaign), lead scoring i jak wdrożyć automation."
        canonical="https://fotz.pl/blog/marketing-automation-co-to"
      />
      <ArticleSchema
        title="Marketing Automation — co to jest i jak wdrożyć?"
        description="Czym jest Marketing Automation, najlepsze narzędzia (Klaviyo, ActiveCampaign, HubSpot), lead scoring, automatyzacje e-commerce i jak wdrożyć automation krok po kroku."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/marketing-automation-co-to"
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
                <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> Automatyzacja</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Marketing Automation — co to jest i jak automatyzować marketing?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Marketing Automation to automatyzowanie powtarzalnych zadań marketingowych.
                Firmy które go wdrożyły generują 50% więcej leadów przy 33% niższym koszcie.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Przykłady automatyzacji marketingu</h2>
              <div className="space-y-3 mb-6">
                {automationExamples.map((ex, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-start gap-2 mb-1">
                      <Zap className="w-3 h-3 text-yellow-500 flex-shrink-0 mt-1" />
                      <p className="text-slate-500 text-xs font-medium">TRIGGER: {ex.trigger}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-slate-800 text-xs font-medium">ACTION: {ex.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Porównanie platform</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700">Platforma</th>
                      <th className="text-left p-3 border border-slate-700">Cena</th>
                      <th className="text-left p-3 border border-slate-700">Najlepsza dla</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { tool: "Klaviyo", price: "Od 20 USD/mies.", best: "E-commerce (Shopify, WooCommerce)" },
                      { tool: "ActiveCampaign", price: "Od 15 USD/mies.", best: "B2B SMB, email + CRM + lead scoring" },
                      { tool: "HubSpot Marketing", price: "Od 800 USD/mies.", best: "Mid-market B2B, all-in-one" },
                      { tool: "Mailchimp", price: "Od 13 USD/mies.", best: "Start, prostsze automatyzacje" },
                      { tool: "Customer.io", price: "Od 100 USD/mies.", best: "SaaS, behavioral emails, API" },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-bold text-slate-700 text-xs">{row.tool}</td>
                        <td className="p-3 border border-slate-200 text-green-700 text-xs">{row.price}</td>
                        <td className="p-3 border border-slate-200 text-slate-500 text-xs">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz zintegrować stronę z Marketing Automation?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Strony z formularzami opt-in, pikselami śledzącymi i integracją z Klaviyo/ActiveCampaign — fundament automatyzacji.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Marketing Automation co to jest</h2>
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
          heading="Wdróż Marketing Automation dla swojej firmy"
          subheading="Strona z integracją email marketing, pikselami i formularzami — automatyzuj pozyskiwanie i nurturing leadów."
        />
      </Layout>
    </>
  );
}
