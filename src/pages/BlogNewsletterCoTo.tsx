import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock, Mail, Users, TrendingUp, Zap } from "lucide-react";
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

export default function BlogNewsletterCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Newsletter — co to jest i jak go stworzyć?" },
  ];

  const newsletterBenefits = [
    { icon: TrendingUp, title: "Bezpośredni kontakt", desc: "Email to jedyny kanał gdzie masz bezpośredni dostęp do odbiorcy bez algorytmów — dostarczasz treść prosto do skrzynki." },
    { icon: Users, title: "Twoja lista = Twój zasób", desc: "W przeciwieństwie do social media — lista mailowa należy do Ciebie. Żaden algorytm jej nie zablokuje." },
    { icon: Zap, title: "Najwyższy ROI", desc: "Email marketing generuje średnio 36-42 USD zwrotu na każdy 1 USD zainwestowany — najwyższy ROI ze wszystkich kanałów." },
    { icon: Mail, title: "Segmentacja i personalizacja", desc: "Wysyłaj różne treści różnym grupom subskrybentów — na podstawie zainteresowań, historii zakupów czy etapu lejka." },
  ];

  const newsletterTools = [
    { name: "Mailchimp", desc: "Najpopularniejsze narzędzie. Bezpłatne do 500 subskrybentów, polskie tłumaczenie, łatwy kreator.", price: "Free do 500 os., od $13/mies." },
    { name: "MailerLite", desc: "Proste i niedrogie, popularne w Polsce. Bardzo dobry kreator automatyzacji, RODO-friendly.", price: "Free do 1000 os., od $9/mies." },
    { name: "GetResponse", desc: "Polska firma! Automatyzacje, landing page, webinary w pakiecie. Wsparcie po polsku.", price: "Od 75 zł/mies." },
    { name: "Klaviyo", desc: "Dla e-commerce — integracja z WooCommerce, Shopify. Zaawansowana segmentacja behawioralna.", price: "Free do 250 os., od $20/mies." },
  ];

  const faqItems = [
    {
      question: "Co to jest newsletter?",
      answer:
        "Newsletter to regularna wiadomość email wysyłana do listy subskrybentów, którzy dobrowolnie zapisali się na Twoją komunikację. Newslettery mogą zawierać: aktualności firmy, artykuły i porady branżowe, oferty i promocje, nowości produktowe, linki do bloga. Newsletter to element email marketingu — buduje relację z odbiorcami i utrzymuje kontakt z potencjalnymi klientami.",
    },
    {
      question: "Jak założyć newsletter?",
      answer:
        "Kroki do uruchomienia newslettera: 1) Wybierz narzędzie (Mailchimp, MailerLite, GetResponse). 2) Utwórz formularz zapisu i osadź go na stronie. 3) Stwórz email powitalny (welcome email) z potwierdzeniem zapisu. 4) Zaplanuj harmonogram wysyłki (np. co tydzień lub co miesiąc). 5) Przygotuj pierwszą kampanię. 6) Monitoruj statystyki (open rate, click rate). Całość zajmuje 2-4 godziny.",
    },
    {
      question: "Ile kosztuje newsletter?",
      answer:
        "Narzędzia do newslettera mają plany bezpłatne — Mailchimp i MailerLite pozwalają wysyłać do 1000-2000 subskrybentów za darmo. Płatne plany od ok. 9-30 USD/mies. (do kilku tysięcy subskrybentów). GetResponse jako polska alternatywa od 75 zł/mies. Koszt rośnie wraz z liczbą subskrybentów — przy 10 000 lista to ok. 50-150 USD/mies.",
    },
    {
      question: "Jaki powinien być dobry open rate newslettera?",
      answer:
        "Branżowe benchmarki open rate: B2C (sklepy, usługi) 15-25%, B2B (firmy do firm) 20-30%, nonprofit 25-35%, media i publishing 20-25%. Czynniki wpływające na open rate: temat wiadomości (najważniejszy!), czas wysyłki (wt-czw, godz. 9-11 lub 14-16), reputacja nadawcy, jakość listy. Open rate poniżej 15% to sygnał do poprawy.",
    },
    {
      question: "Czy newsletter jest zgodny z RODO?",
      answer:
        "Newsletter może być wysyłany tylko do osób które WYRAZIŁY ŚWIADOMĄ ZGODĘ na otrzymywanie wiadomości. Wymogi RODO: wyraźna zgoda przy zapisie (checkboxy muszą być niezaznaczone domyślnie), możliwość łatwego wypisania się (link Unsubscribe), informacja o administratorze danych, nie możesz wysyłać do danych pozyskanych bez zgody (np. z wizytówek). Narzędzia takie jak MailerLite mają wbudowane funkcje RODO-compliance.",
    },
    {
      question: "Jak zbudować listę subskrybentów?",
      answer:
        "Skuteczne sposoby budowania listy: lead magnet (darmowy PDF, checklista, kurs w zamian za email), pop-up na stronie (exit intent), formularz w stopce i sidebar, rejestracja w sklepie z opcją zapisu, konkurs na social media, strona zapisu z konkretną obietnicą wartości. Nie kupuj list mailowych — to naruszenie RODO i spam, który zniszczy Twoją reputację nadawcy.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Newsletter — co to jest i jak go stworzyć? Poradnik | fotz.pl"
        description="Newsletter co to jest — wyjaśniamy czym jest newsletter, jak założyć mailing, ile kosztuje i jak zbudować listę subskrybentów. Narzędzia: Mailchimp…"
        canonical="https://fotz.pl/blog/newsletter-co-to"

        keywords="Newsletter co to jest, Newsletter definicja, czym jest Newsletter, Newsletter przykłady, jak działa Newsletter, Newsletter znaczenie, Newsletter przewodnik"
      />
      <ArticleSchema
        title="Newsletter — co to jest i jak go stworzyć?"
        description="Czym jest newsletter, jak uruchomić mailing, jakie narzędzia wybrać i jak budować listę subskrybentów zgodnie z RODO."
        datePublished="2025-01-28"
        dateModified="2025-03-25"
        url="https://fotz.pl/blog/newsletter-co-to"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min czytania</span>
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Email marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Newsletter — co to jest i jak go stworzyć?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Newsletter to kanał komunikacji z najwyższym ROI ze wszystkich narzędzi marketingowych — 36-42 USD
                zwrotu na każdego wydanego dolara. Dowiedz się jak go uruchomić.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Dlaczego newsletter warto mieć?</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {newsletterBenefits.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <Icon className="w-5 h-5 text-blue-600 mb-2" />
                      <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Najlepsze narzędzia do newslettera</h2>
              <div className="space-y-3 mb-6">
                {newsletterTools.map((tool, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{tool.name}</span>
                      <span className="text-blue-600 text-xs font-medium">{tool.price}</span>
                    </div>
                    <p className="text-slate-600 text-sm">{tool.desc}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Jak napisać dobry newsletter? 6 zasad</h2>
              <div className="space-y-2 mb-6">
                {[
                  "Jeden cel = jeden email — nie przepychaj 10 tematów w jedną wiadomość",
                  "Temat wiadomości decyduje o open rate — testuj różne warianty (A/B test)",
                  "Pisz do jednej osoby, nie do tłumu — 'Hej Marku' zamiast 'Hej Czytelnicy'",
                  "Konkretna wartość w każdym wydaniu — czytelnicy muszą wiedzieć po co otwierają",
                  "Jeden główny CTA (call to action) — przycisk/link do konkretnego działania",
                  "Optymalizuj na mobile — 60%+ emaili otwierane jest na telefonie",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz pomocy z email marketingiem?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Projektujemy strategie email marketingu i wdrażamy automatyzacje dla firm.
                </p>
                <Link to="/uslugi/email-marketing" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Email marketing — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Newsletter co to jest</h2>
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
          heading="Zacznij budować listę subskrybentów"
          subheading="Pomożemy skonfigurować newsletter i stworzyć strategię email marketingu."
        />
      </Layout>
    </>
  );
}
