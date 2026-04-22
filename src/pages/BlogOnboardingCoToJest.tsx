import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle2, Users, Zap, Star } from "lucide-react";
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

export default function BlogOnboardingCoToJest() {
  const breadcrumbs = [
    { label: "Strona glowna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Onboarding — co to jest i jak go zaprojektowac?" },
  ];

  const onboardingTypes = [
    { type: "Onboarding klienta (Customer Onboarding)", desc: "Proces wprowadzenia nowego klienta do produktu lub uslugi — od rejestracji do pierwszej realnej wartosci (Time to Value).", icon: Star },
    { type: "Onboarding pracownika (Employee Onboarding)", desc: "Wdrozenie nowego pracownika do firmy — szkolenia, integracja z zespolem, nauka procesow i narzedzi.", icon: Users },
    { type: "Onboarding produktowy (Product Onboarding)", desc: "Specyficznie w SaaS: in-app flow, tooltopy, checklista, welcome email — prowadzace uzytkownika do pierwszego sukcesu.", icon: Zap },
  ];

  const steps = [
    { step: "1. Welcome", desc: "Email powitalny, potwierdzenie rejestracji, pierwsze wrazenie marki." },
    { step: "2. Setup", desc: "Profil, ustawienia, integracje — minimalne tarcie na starcie." },
    { step: "3. Aha! Moment", desc: "Moment gdy uzytkownik widzi glowna korzysc produktu po raz pierwszy." },
    { step: "4. Habit formation", desc: "Powtarzalne uzycie ktore staje sie nawykiem. Powiadomienia, remindery, email nurturing." },
    { step: "5. Expansion", desc: "Upsell, zaproszenie zespolu, integracje — glebokie zakorzenienie w procesie klienta." },
  ];

  const faqItems = [
    {
      question: "Co to jest onboarding?",
      answer:
        "Onboarding to proces wprowadzenia nowej osoby lub podmiotu do systemu, organizacji lub produktu. W kontekscie SaaS i e-commerce: onboarding klienta to zorganizowany proces ktory przeprowadza nowego uzytkownika od rejestracji do pierwszego sukcesu z produktem. W HR: onboarding pracownika to kompleksowy program wdrozenia nowego czlonka zespolu — od podpisania umowy przez pierwsze 90 dni. Dobry onboarding bezposrednio wplywa na retencje, NPS i churn — klienci ktorzy nie przejda onboardingu odchodza wczesniej.",
    },
    {
      question: "Dlaczego onboarding jest wazny?",
      answer:
        "Znaczenie onboardingu: 86% klientow pozostaje lojalnych po dobrym onboardingu (Wyzowl). Pierwsze 90 dni decyduje czy klient zostanie na dluzej. Slaby onboarding to glowna przyczyna churnu w SaaS — klient nie rozumie wartosci i odchodzi. Dla pracownikow: firmy z dobrym onboardingiem maja o 82% wyzsza retencje pracownikow (BambooHR). Time to Productivity (czas do pelnej produktywnosci) skraca sie srednio o 60% przy dobrym onboardingu. Koszt zastapienia pracownika to 50-200% rocznego wynagrodzenia — dobry onboarding sie oplaca.",
    },
    {
      question: "Jak zaprojektowac onboarding klienta w SaaS?",
      answer:
        "Kroki do projektowania onboardingu SaaS: 1) Zdefiniuj Aha! Moment — ktory moment pokazuje klientowi kluczowa wartosc produktu? Przyspiesz dojscie do niego. 2) Zmapuj user journey — od rejestracji do pierwszego sukcesu. Usun zbedne kroki. 3) Zbuduj in-app flow — tooltopy, checklista, progress bar motywuja do dokonczenia setup. 4) Zaprojektuj email sekwencje — welcome email, tip-of-the-day, milestone emails. 5) Mierz aktywacje — ile % uzytkownikow osiaga Aha! Moment. 6) Customer Success — dla enterprise i mid-market: dedykowany opiekun w pierwszych 90 dniach.",
    },
    {
      question: "Jak wygladac powinien onboarding pracownika?",
      answer:
        "Best practices onboardingu pracownika: Pre-boarding (przed pierwszym dniem): sprzet gotowy, dostepy nadane, team powiadomiony. Dzien pierwszy: welcome, prezentacja firmy, oprowadzenie, lunch z zespolem. Pierwszy tydzien: szkolenia podstawowe, pierwsze zadania, poznanie kluczowych procesow. Pierwszy miesiac: pierwsze projekty, regularne spotkania 1:1 z managerem, feedback. 90 dni: ocena probna, plany rozwojowe, pelna integracja. Buddy system: przypisanie mentora/opiekuna z zespolu przyspiesza wdrozenie o 50%.",
    },
    {
      question: "Jakie sa narzedzia do onboardingu?",
      answer:
        "Narzedzia do onboardingu klientow (SaaS): Intercom — in-app messaging, tooltopy, onboarding tours. Appcues, Pendo, UserGuiding — dedykowane narzedzia do product tours. Customer.io, Klaviyo, ActiveCampaign — automatyzacja email onboardingu. Loom — video walkthroughs zamiast tekstu. Narzedzia do onboardingu pracownikow: BambooHR, Workday — HR onboarding management. Notion, Confluence — baza wiedzy i dokumentacja. Slack — komunikacja i welcome boty. Mierzenie onboardingu: completion rate, Time to Value, aktywacja (%).",
    },
    {
      question: "Co to jest Time to Value (TTV) w kontekscie onboardingu?",
      answer:
        "Time to Value (TTV) to czas od rejestracji/zakupu do momentu gdy klient po raz pierwszy odczuwa realna korzysc z produktu (Aha! Moment). Kroki do skrocenia TTV: Uproszczone rejestracja — usuń zbedne pola, umozliw SSO (Google, LinkedIn). Progresywne profilowanie — pytaj tylko o to co niezbedne na starcie. Predefiniowane szablony — zamiast pustego stanu, daj gotowe przykłady. Interaktywny demo — pozwol zobaczyc produkt w akcji przed pelnà rejestracją. Onboarding checklist — wyraznie pokazuje co nalezy zrobic jako pierwsze. Krótszy TTV = wyzszy activation rate = nizszy churn.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Onboarding — co to jest i jak go zaprojektowac? | fotz.pl"
        description="Onboarding co to jest — wyjasnamy czym jest onboarding klienta i pracownika, jak zaprojektowac onboarding w SaaS, Time to Value i narzedzia do onboardingu."
        canonical="https://fotz.pl/blog/onboarding-co-to-jest"

        keywords="Onboarding co to jest, Onboarding definicja, czym jest Onboarding, Onboarding przykłady, jak działa Onboarding, Onboarding znaczenie, Onboarding przewodnik"
      />
      <ArticleSchema
        title="Onboarding — co to jest i jak go zaprojektowac?"
        description="Czym jest onboarding klienta i pracownika, jak zaprojektowac onboarding w SaaS, Time to Value, Aha! Moment i najlepsze narzedzia do onboardingu."
        datePublished="2025-04-10"
        dateModified="2025-04-10"
        url="https://fotz.pl/blog/onboarding-co-to-jest"
      />
      <BreadcrumbSchema items={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs items={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min czytania</span>
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> SaaS i HR</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Onboarding — co to jest i jak go zaprojektowac?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Onboarding to proces wprowadzenia klienta lub pracownika do produktu lub organizacji.
                Dobry onboarding obniża churn o 50%+ i przyspiesza czas do wartosci.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Rodzaje onboardingu</h2>
              <div className="space-y-3 mb-6">
                {onboardingTypes.map((o, idx) => {
                  const Icon = o.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900 text-sm">{o.type}</p>
                        <p className="text-slate-600 text-xs mt-0.5">{o.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Etapy onboardingu produktowego (SaaS)</h2>
              <div className="space-y-2 mb-6">
                {steps.map((s, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{s.step}</p>
                      <p className="text-slate-600 text-xs">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Zap className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony ktora sama przeprowadza klientow przez onboarding?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy doswiadczenia cyfrowe ktore prowadza uzytkownika krok po kroku — wyzszy activation rate, nizszy churn.
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
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Onboarding co to jest</h2>
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
