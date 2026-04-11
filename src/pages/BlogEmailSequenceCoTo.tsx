import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, CheckCircle2, TrendingUp, Zap } from "lucide-react";
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

export default function BlogEmailSequenceCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Email Sequence — co to jest i jak budować sekwencje?" },
  ];

  const sequenceTypes = [
    { type: "Welcome Sequence", desc: "Seria 3-7 emaili po zapisaniu się na listę. Buduje relację, przedstawia markę, dostarcza wartość. Najwyższy open rate ze wszystkich sekwencji." },
    { type: "Onboarding Sequence", desc: "Seria emaili dla nowych klientów/użytkowników produktu. Pomaga osiągnąć 'aha moment', zmniejsza churn w pierwszych 30 dniach." },
    { type: "Nurture Sequence", desc: "Edukuje potencjalnych klientów przez tygodnie/miesiące. Buduje zaufanie i prowadzi do decyzji zakupowej." },
    { type: "Sales Sequence", desc: "Targeted sekwencja dla leadów gotowych do zakupu. Demo invite, case studies, objection handling, ograniczone oferty." },
    { type: "Re-engagement Sequence", desc: "Dla nieaktywnych subskrybentów lub klientów po churnie. 3-5 emaili z wartością lub ofertą specjalną aby reaktywować." },
    { type: "Abandoned Cart Sequence", desc: "E-commerce: 3 emaile po porzuceniu koszyka (1h, 24h, 72h). Średnio odzyskuje 5-15% porzuconych koszyków." },
  ];

  const faqItems = [
    {
      question: "Co to jest Email Sequence?",
      answer:
        "Email Sequence (sekwencja emaili / drip campaign) to seria automatycznych emaili wysyłanych do subskrybenta lub klienta w określonym czasie lub po konkretnych zdarzeniach (zachowaniach). W odróżnieniu od newsletterów (wysyłka do wszystkich w tym samym czasie), sekwencje są zautomatyzowane i personalizowane — każdy otrzymuje je w odpowiednim dla siebie momencie. Email sequences to jeden z najwyżej ROI kanałów marketingu: DMA raportuje 36-42 USD zwrotu na każdego 1 USD wydanego na email marketing.",
    },
    {
      question: "Jak zbudować skuteczną sekwencję emaili?",
      answer:
        "Budowanie email sequence krok po kroku: 1) Zdefiniuj cel — co chcesz osiągnąć sekwencją? (zakup, activation, retencja). 2) Zidentyfikuj triggery — co wyzwala sekwencję? (signup, zakup, brak aktywności). 3) Zaplanuj strukturę — ile emaili, w jakich odstępach, z jaką treścią. 4) Napisz emaile — subject line, preheader, body, CTA. Testuj subject lines. 5) Skonfiguruj w narzędziu — Klaviyo, ActiveCampaign, HubSpot, Mailchimp. 6) Przetestuj cały flow — sprawdź każdy email przed uruchomieniem. 7) Analizuj i optymalizuj — open rate, click rate, konwersje.",
    },
    {
      question: "Jakie narzędzia do email sequences?",
      answer:
        "Narzędzia do email sequences: E-commerce: Klaviyo — najlepsze dla sklepów, integracja z Shopify/WooCommerce. Od 20 USD/mies. SaaS/B2B: ActiveCampaign — zaawansowane automatyzacje, CRM. Od 15 USD/mies. Intercom — email + in-app messaging. B2B sales sequences: Outreach, Salesloft, Apollo — dla cold email i follow-upów sprzedażowych. Marketing: HubSpot — marketing automation + CRM. Mała firma: Mailchimp — prosty, tani, dobry na start. Zaawansowani: Customer.io — developer-friendly, behavioral emails. Wybór: Klaviyo dla e-commerce, ActiveCampaign lub HubSpot dla B2B SaaS.",
    },
    {
      question: "Ile emaili powinna mieć sekwencja?",
      answer:
        "Optymalna długość email sequences: Welcome sequence: 3-5 emaili (7-14 dni). Onboarding SaaS: 5-10 emaili (pierwsze 30 dni). Nurture sequence: 6-12 emaili (4-12 tygodni). Sales sequence (cold email): 5-8 followupów. Abandoned cart: 3 emaile (1h, 24h, 72h po porzuceniu). Re-engagement: 3-5 emaili z sunset policy (usunięcie nieaktywnych). Zasada: lepiej mniej emaili z wyższą wartością niż dużo spamerskich. Monitoruj unsubscribe rate — jeśli przekracza 0.5%, sekwencja jest za długa lub za częsta.",
    },
    {
      question: "Jak pisać subject lines które są otwierane?",
      answer:
        "Skuteczne subject lines w emailach: Personalizacja: '[Imię], masz pytanie?' — avg +26% open rate. Ciekawość: 'Czy popełniasz ten błąd?' Liczby: '7 sposobów na zwiększenie konwersji'. Pilność: 'Ostatnie 24h — oferta wygasa'. Pytanie: 'Dlaczego Twój landing page nie konwertuje?'. Unikaj spam triggerów: FREE (caps), !!!, 100%, zagwarantowane. Optymalna długość: 30-50 znaków. A/B testuj ZAWSZE — większość narzędzi to oferuje. Preheader (podtytuł): traktuj jako przedłużenie subject line — dodatkowe 40-100 znaków widocznych w skrzynce.",
    },
    {
      question: "Jakie są dobre wskaźniki email marketingu?",
      answer:
        "Benchmarki email marketingu (2025): Open Rate: 20-35% to dobry wynik dla B2B. E-commerce: 15-25%. Newsletter: 25-40%. Click Rate (CTR): 2-5% to dobry wynik. Unsubscribe Rate: poniżej 0.5% (powyżej 0.5% = problem z treścią lub częstotliwością). Bounce Rate: Hard bounce poniżej 2%, soft bounce poniżej 5%. Conversion Rate: zależy od celu — zakup, rejestracja, itp. Open Rate B2B (cold email): 40-60% to dobry wynik dla ciepłych lista (np. followup po eventi). Narzędzia analityczne: Google Analytics 4 (UTM), raportowanie narzędzia (Klaviyo, AC).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Email Sequence — co to jest i jak budować sekwencje emaili? | fotz.pl"
        description="Email Sequence co to jest — wyjaśniamy czym są sekwencje emaili, typy (welcome, onboarding, nurture), narzędzia i jak pisać skuteczne subject lines."
        canonical="https://fotz.pl/blog/email-sequence-co-to"
      />
      <ArticleSchema
        title="Email Sequence — co to jest i jak budować sekwencje emaili?"
        description="Czym jest Email Sequence (drip campaign), typy sekwencji emaili, narzędzia (Klaviyo, ActiveCampaign), budowanie sekwencji i benchmarki email marketingu."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/email-sequence-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min czytania</span>
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Email Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Email Sequence — co to jest i jak budować skuteczne sekwencje?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Email sequences (drip campaigns) to zautomatyzowane serie emaili które pielęgnują leady
                i konwertują klientów. Typy, narzędzia i jak je budować krok po kroku.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy email sequences</h2>
              <div className="space-y-3 mb-6">
                {sequenceTypes.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <Mail className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.type}</p>
                      <p className="text-slate-600 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Benchmarki email marketingu</h2>
              <div className="space-y-2 mb-6">
                {[
                  { metric: "Open Rate B2B", value: "20–35%", note: "Dobry wynik dla list opt-in" },
                  { metric: "Open Rate E-commerce", value: "15–25%", note: "Niższy — większa konkurencja" },
                  { metric: "Click Rate (CTR)", value: "2–5%", note: "Procent otwierających którzy klikają" },
                  { metric: "Unsubscribe Rate", value: "poniżej 0.5%", note: "Powyżej 0.5% to sygnał problemu" },
                  { metric: "Conversion Rate", value: "1–5%", note: "Zależy od celu i jakości listy" },
                ].map((b, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div>
                      <p className="text-slate-800 text-sm font-medium">{b.metric}</p>
                      <p className="text-slate-500 text-xs">{b.note}</p>
                    </div>
                    <span className="font-bold text-blue-600 text-sm ml-4 whitespace-nowrap">{b.value}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz budować listę mailingową przez stronę?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Landing page z optymalizowanym formularzem zapisu — fundament skutecznego email marketingu.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Email Sequence co to jest</h2>
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
          heading="Zbuduj stronę która zbiera leady do email marketingu"
          subheading="Landing page, formularz opt-in i integracja z Klaviyo/ActiveCampaign — pomagamy budować listę mailingową."
        />
      </Layout>
    </>
  );
}
