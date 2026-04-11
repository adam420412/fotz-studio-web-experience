import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, TrendingUp, CheckCircle2, BarChart2 } from "lucide-react";
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

export default function BlogEmailMarketingCoTo() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Email Marketing — co to jest i jak prowadzić skuteczne kampanie?" },
  ];

  const emailTypes = [
    {
      type: "Newsletter",
      freq: "Tygodniowy / miesięczny",
      desc: "Regularna komunikacja z bazą subskrybentów — aktualności, treści edukacyjne, oferty. Buduje relację i utrzymuje markę w świadomości.",
      metric: "Open rate 20-30%, CTR 2-5%",
    },
    {
      type: "Sekwencja powitalna (Welcome series)",
      freq: "Trigger: zapis do listy",
      desc: "Automatyczna seria emaili po zapisie — przedstawia markę, dostarcza wartość, prowadzi do konwersji. 3-7 emaili w ciągu 2 tygodni.",
      metric: "Open rate 50-60%, najwyższe engagement",
    },
    {
      type: "Porzucony koszyk (Abandoned Cart)",
      freq: "Trigger: porzucenie koszyka",
      desc: "Automatyczny email po porzuceniu koszyka e-commerce. 1-3 emaili w 24-72h. Najwyższy ROI w email marketingu — 10-15% konwersja.",
      metric: "Open rate 40-45%, konwersja 10-15%",
    },
    {
      type: "Email transakcyjny",
      freq: "Trigger: akcja użytkownika",
      desc: "Potwierdzenia zamówień, resetowania haseł, faktury, shipping notifications. Otwieralność 70-90% — najchętniej czytane emaile.",
      metric: "Open rate 70-90% — najwyższy",
    },
    {
      type: "Kampania promocyjna",
      freq: "Okazjonalny",
      desc: "Black Friday, sezonowe wyprzedaże, launche produktów. Wysoka sprzedaż krótkoterminowa. Ryzyko niezasubskrybowania jeśli za dużo.",
      metric: "Open rate 15-25%, wysoki przychód jednorazowy",
    },
    {
      type: "Re-engagement",
      freq: "Trigger: brak aktywności 90-180 dni",
      desc: "Reaktywacja nieaktywnych subskrybentów. Oferta specjalna, pytanie czy chcą zostać. Oczyszcza bazę i poprawia dostarczalność.",
      metric: "Open rate 10-20% (reaktywowanych), reszta do usunięcia",
    },
  ];

  const emailMetrics = [
    { metric: "Open Rate", good: ">20%", avg: "15-20%", bad: "<15%", desc: "% dostarczonych emaili które zostały otwarte." },
    { metric: "Click-Through Rate (CTR)", good: ">3%", avg: "1-3%", bad: "<1%", desc: "% dostarczonych emaili z kliknięciem w link." },
    { metric: "Click-to-Open Rate (CTOR)", good: ">20%", avg: "10-20%", bad: "<10%", desc: "% otwartych emaili z kliknięciem — mierzy jakość treści." },
    { metric: "Bounce Rate", good: "<1%", avg: "1-2%", bad: ">2%", desc: "% emaili które nie dotarły (hard bounce = zły adres, soft = problem serwera)." },
    { metric: "Unsubscribe Rate", good: "<0.2%", avg: "0.2-0.5%", bad: ">0.5%", desc: "% odbiorców którzy zrezygnowali z listy po emailu." },
    { metric: "Spam Complaint Rate", good: "<0.1%", avg: "0.1%", bad: ">0.1%", desc: "% oznaczonych jako spam. Powyżej 0.1% zagrożenie dostarczalnością." },
  ];

  const faqItems = [
    {
      question: "Co to jest email marketing?",
      answer: "Email marketing to kanał marketingowy polegający na wysyłaniu emaili do subskrybentów w celu budowania relacji, informowania i generowania sprzedaży. Email marketing to jeden z kanałów z najwyższym ROI w marketingu cyfrowym — średni ROI wynosi 36:1 (Litmus 2023), tzn. każde 1 PLN wydane na email marketing przynosi 36 PLN przychodu. Dlaczego email jest skuteczny: własny kanał (nie zależy od algorytmów social media), bezpośredni kontakt z odbiorcą który wyraził zgodę na komunikację, wysoka personalizacja i segmentacja, automatyzacja pozwala skalować bez proporcjonalnego wzrostu kosztów. Warunek: lista subskrybentów musi być zbierana z zgodą RODO (opt-in). Zakupione bazy = niskie open rate, wysokie spam rate, ryzyko prawne.",
    },
    {
      question: "Jak zbudować listę emailową?",
      answer: "Metody budowania listy emailowej (permission-based): Lead magnety — oferuj wartość w zamian za email: ebook, checklist, kurs emailowy, darmowy raport, template, kalkulator. Popup/slide-in na stronie — pojawia się po 30-60 sekundach lub przy próbie wyjścia (exit intent). Konwertuje 1-5% odwiedzin. Formularz w stopce i sidebar strony — niska konwersja ale stały napływ. Landing page do zapisu — dedykowana strona z jednym CTA (zapis). Używaj w kampaniach reklamowych. Lead gen reklamy — Facebook/LinkedIn Lead Ads, Google Lead Extensions — zapis bez opuszczania platformy. Content gating — dostęp do wartościowego contentu po podaniu emaila. Konkurs lub giveaway — duże i szybkie, ale niska jakość listy. WAŻNE: Quality > Quantity. 1000 zaangażowanych subskrybentów > 10 000 niezainteresowanych.",
    },
    {
      question: "Jakie narzędzia email marketing wybrać?",
      answer: "Porównanie narzędzi email marketing: Mailchimp — popularny, darmowy do 500 kontaktów. Dobry dla startujących. Ograniczona automatyzacja w bezpłatnym planie. Klaviyo — lider dla e-commerce. Głęboka integracja Shopify, zaawansowane segmenty behawioralne, analityka revenue. Od ~$20/mies. Active Campaign — zaawansowana automatyzacja i CRM. Dobry dla B2B i SaaS. Od ~$30/mies. ConvertKit (Kit) — popularny wśród twórców treści i personal brand. Dobry UX. GetResponse — polskie narzędzie z polskim supportem. Dobry wybór dla SMB. Od ~$19/mies. MailerLite — prosty, tani, dobry dla małych biznesów. Do 1000 kontaktów za darmo. Brevo (dawniej Sendinblue) — transakcyjny email + marketing. Dobra cena. Wybór: e-commerce → Klaviyo. Twórca/newsletter → ConvertKit. Polska firma SMB → GetResponse. Zaawansowana automatyzacja B2B → ActiveCampaign.",
    },
    {
      question: "Jak poprawić open rate emaili?",
      answer: "Optymalizacja open rate: Temat emaila (subject line) — najważniejszy czynnik: długość 40-50 znaków (widoczne na mobile), personalizacja imienia (wzrost OR o 26%), liczby i dane konkretne ('5 błędów które kosztują Cię klientów'), pytania ('Czy robisz ten błąd w SEO?'), pilność bez clickbait. Preheader — 2. tekst który widać po temacie. Powinien rozszerzać temat, nie powtarzać. Nadawca (From Name) — 'Marek z fotz.pl' > 'fotz.pl Newsletter'. Personalne nazwy mają wyższy OR. Czas wysyłki — najlepsze: wt-czw, 10:00-11:00 lub 19:00-20:00. Testuj A/B dla swojej bazy. Segmentacja — emaile do segmentów mają wyższy OR niż do całej bazy. Czyszczenie listy — usuwaj nieaktywnych (90+ dni bez otwarcia). Poprawa dostarczalności = wyższy OR. SPF, DKIM, DMARC — prawidłowa konfiguracja DNS chroni przed filtrem spamu.",
    },
    {
      question: "Jak przestrzegać RODO w email marketingu?",
      answer: "RODO i email marketing — obowiązki: Zgoda (consent) — musisz mieć wyraźną, świadomą zgodę na marketing emailowy. Nie wystarczy: zaznaczony z góry checkbox, zgoda ukryta w regulaminie, zakupiona lista. Wymagane: osobny unchecked checkbox z treścią 'Wyrażam zgodę na otrzymywanie newslettera/komunikacji marketingowej'. Prawo do wycofania zgody — każdy email musi zawierać wyraźny link do wypisania (unsubscribe). Procesowanie w ciągu 10 dni. Rejestr zgód — przechowuj dowód zgody (kiedy, jaki tekst, IP, źródło). Klaviyo, Mailchimp, GetResponse automatycznie logują zgody. Dostęp do danych — na żądanie musisz podać subskrybentowi jego dane i historię emaili. Prawo do zapomnienia — na żądanie usuwasz dane w rozsądnym terminie. Kary RODO: do 20 mln EUR lub 4% globalnego obrotu rocznego za poważne naruszenia.",
    },
    {
      question: "Co to jest automatyzacja email marketingu?",
      answer: "Email marketing automation to wysyłanie emaili automatycznie na podstawie zachowań, czasu lub danych o subskrybentach — bez ręcznej interwencji. Typy automatyzacji: Trigger-based: welcome series (trigger: zapis), abandoned cart (trigger: porzucony koszyk), post-purchase (trigger: zakup), re-engagement (trigger: brak aktywności 90 dni). Time-based: birthday email, rocznica rejestracji, reminder przed końcem trialu. Behavior-based: emaile do osób które odwiedziły konkretną stronę, pobrały konkretny plik, kliknęły konkretny link. Drip campaigns: sekwencje edukacyjne wysyłane co X dni po zapisie do listy. Korzyści automatyzacji: skalowanie bez proporcjonalnego wzrostu pracy, personalizacja w dużej skali, wyższy ROI niż jednorazowe wysyłki, nurturowanie leadów przez lejek. Narzędzia: Klaviyo (e-commerce), ActiveCampaign (B2B), HubSpot (enterprise), MailerLite (małe biznesy).",
    },
  ];

  return (
    <>
      <SEOHead
        title="Email Marketing — co to jest i jak prowadzić skuteczne kampanie? | fotz.pl"
        description="Email marketing co to jest — wyjaśniamy czym jest marketing emailowy, typy emaili, narzędzia, metryki (open rate, CTR), jak budować listę i przestrzegać RODO."
        canonical="https://fotz.pl/blog/email-marketing-co-to"
      />
      <ArticleSchema
        title="Email Marketing — co to jest i jak prowadzić skuteczne kampanie?"
        description="Czym jest email marketing, typy kampanii (newsletter, welcome, abandoned cart), narzędzia, metryki, budowanie listy i automatyzacja email marketingu."
        datePublished="2025-04-11"
        dateModified="2025-04-11"
        url="https://fotz.pl/blog/email-marketing-co-to"
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
                <span className="flex items-center gap-1"><Mail className="w-4 h-4" /> Email Marketing</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Email Marketing — co to jest i jak prowadzić skuteczne kampanie?
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Email marketing ma ROI 36:1 — najwyższy spośród kanałów cyfrowych. Jak budować listę,
                jakich narzędzi używać i jak mierzyć skuteczność?
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-4">Typy emaili marketingowych</h2>
              <div className="space-y-3 mb-6">
                {emailTypes.map((t, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-900 text-sm">{t.type}</span>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-medium">{t.freq}</span>
                    </div>
                    <p className="text-slate-600 text-xs mb-1">{t.desc}</p>
                    <p className="text-green-600 text-xs font-medium">{t.metric}</p>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Kluczowe metryki email marketingu</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="text-left p-3 border border-slate-700 text-xs">Metryka</th>
                      <th className="text-center p-3 border border-slate-700 text-xs">Dobry</th>
                      <th className="text-center p-3 border border-slate-700 text-xs">Średni</th>
                      <th className="text-center p-3 border border-slate-700 text-xs">Zły</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emailMetrics.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="p-3 border border-slate-200 font-semibold text-slate-900 text-xs">{row.metric}</td>
                        <td className="p-3 border border-slate-200 text-center text-green-700 font-medium text-xs">{row.good}</td>
                        <td className="p-3 border border-slate-200 text-center text-yellow-700 text-xs">{row.avg}</td>
                        <td className="p-3 border border-slate-200 text-center text-red-600 text-xs">{row.bad}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Chcesz uruchomić email marketing?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Stratedia e-commerce i marketingu cyfrowego — doradzamy w wyborze narzędzi i strategii emailowej.
                </p>
                <Link to="/uslugi/tworzenie-sklepow-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  E-commerce marketing — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Email Marketing co to jest</h2>
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
          heading="Wdrożymy email marketing dla Twojego sklepu lub biznesu"
          subheading="Automatyzacje, segmentacja i kampanie — email marketing który buduje relacje i generuje sprzedaż."
        />
      </Layout>
    </>
  );
}
