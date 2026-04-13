import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest customer retention?",
    answer:
      "Customer retention (utrzymanie klientów) to zdolność firmy do zatrzymania istniejących klientów i skłonienia ich do ponownych zakupów przez określony czas. Wysoka retencja oznacza, że klienci są zadowoleni, lojalni i powracają — co jest fundamentem rentownego i skalowalnego biznesu.",
  },
  {
    question: "Jak oblicza się wskaźnik retencji klientów?",
    answer:
      "Wskaźnik retencji (Customer Retention Rate, CRR) oblicza się ze wzoru: CRR = ((Klienci na koniec okresu − Nowi klienci w okresie) / Klienci na początku okresu) × 100%. Przykład: 200 klientów na początku, 20 nowych, 210 na końcu → CRR = ((210–20)/200) × 100% = 95%.",
  },
  {
    question: "Dlaczego retencja jest ważniejsza od akwizycji?",
    answer:
      "Pozyskanie nowego klienta kosztuje 5–7× więcej niż utrzymanie obecnego. Wzrost retencji o 5% może zwiększyć zyski o 25–95% (Bain & Company). Istniejący klienci generują wyższy LTV, polecają markę innym i kupują z wyższą konwersją. Leaky bucket business — pozyskiwanie szybciej niż tracisz klientów — jest nieefektywne.",
  },
  {
    question: "Jakie są główne przyczyny odejścia klientów (churn)?",
    answer:
      "Główne przyczyny churnu to: brak odczuwanej wartości z produktu/usługi, słaba obsługa klienta, lepsza oferta konkurencji, zmieniające się potrzeby klienta, problemy z onboardingiem i adopcją, brak komunikacji ze strony firmy oraz cenowe decyzje zakupowe.",
  },
  {
    question: "Jakie strategie retencji klientów są najskuteczniejsze?",
    answer:
      "Najskuteczniejsze strategie to: wyjątkowy onboarding (szybkie osiągnięcie wartości), regularna komunikacja proaktywna, programy lojalnościowe, personalizacja doświadczeń, ciągłe zbieranie feedbacku (NPS, CSAT), szybka i skuteczna obsługa reklamacji oraz success management dla klientów wysokiej wartości.",
  },
];

const retentionMetrics = [
  {
    metryka: "Customer Retention Rate (CRR)",
    opis: "Procent klientów, którzy pozostali w danym okresie",
    wzor: "((Klienci na koniec − Nowi) / Klienci na początku) × 100%",
    benchmark: "Zależy od branży: SaaS: 80–95%; e-commerce: 25–45% rocznie",
  },
  {
    metryka: "Churn Rate",
    opis: "Procent klientów, którzy zrezygnowali w danym okresie",
    wzor: "(Klienci utraceni / Klienci na początku) × 100%",
    benchmark: "SaaS Monthly Churn zdrowy: poniżej 2–3% miesięcznie",
  },
  {
    metryka: "Net Revenue Retention (NRR)",
    opis: "Retencja przychodów z istniejącej bazy — uwzględnia upsell i downsell",
    wzor: "(MRR na końcu / MRR na początku z tej samej grupy klientów) × 100%",
    benchmark: "Powyżej 100% = wzrost bez nowych klientów (Expansion revenue)",
  },
  {
    metryka: "Customer Lifetime Value (CLV/LTV)",
    opis: "Całkowity przychód generowany przez klienta przez cały okres relacji",
    wzor: "Średni zakup × Częstotliwość zakupów × Długość relacji",
    benchmark: "LTV:CAC powinno wynosić co najmniej 3:1",
  },
  {
    metryka: "NPS (Net Promoter Score)",
    opis: "Gotowość klientów do polecenia marki — predyktor retencji i wzrostu",
    wzor: "% Promotorów (9–10) − % Krytyków (0–6)",
    benchmark: "Powyżej 50 = doskonały; powyżej 70 = klasa światowa",
  },
];

const retentionStrategies = [
  {
    strategia: "Doskonały onboarding",
    opis: "Klienci rezygnują najczęściej we wczesnej fazie relacji. Skuteczny onboarding szybko prowadzi do 'aha moment' — momentu gdy klient odczuwa realną wartość.",
    priorytet: "Krytyczny",
  },
  {
    strategia: "Program lojalnościowy",
    opis: "Nagrody za powtarzające się zakupy (punkty, poziomy, ekskluzywne benefity). Programy lojalnościowe zwiększają częstotliwość zakupów i tworzą barierę wyjścia.",
    priorytet: "Wysoki",
  },
  {
    strategia: "Personalizacja komunikacji",
    opis: "Segmentacja bazy i dostosowanie komunikatów do zachowań, historii zakupów i etapu relacji. Email based on behaviour (transactional, lifecycle, triggered) zwiększa retencję.",
    priorytet: "Wysoki",
  },
  {
    strategia: "Proaktywna obsługa klienta",
    opis: "Kontaktuj się z klientami zanim zgłoszą problem. Monitoring usage signals, NPS detractors, brak logowań — interwencja przed utratą klienta.",
    priorytet: "Wysoki",
  },
  {
    strategia: "Customer Success (B2B)",
    opis: "Dedykowany opiekun pomagający klientowi osiągać cele dzięki produktowi. Customer Success Managers proaktywnie zarządzają zdrowiem kont i odnowieniami.",
    priorytet: "Kluczowy (enterprise)",
  },
  {
    strategia: "Win-back kampanie",
    opis: "Reaktywacja nieaktywnych lub utraconych klientów. Email z ofertą powrotu, pytanie o powód odejścia, special offer. Win-back kosztuje mniej niż pozyskanie zupełnie nowego klienta.",
    priorytet: "Średni",
  },
];

export default function BlogCustomerRetentionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Retention — co to jest? Retencja klientów — metryki i strategie"
        description="Customer retention — definicja, jak obliczać CRR, NRR i LTV, 6 strategii utrzymania klientów. Kompletny przewodnik po retencji klientów i redukcji churnu."
        canonicalUrl="https://fotz.pl/blog/customer-retention-co-to"

        keywords="Customer Retention co to jest, Customer Retention definicja, czym jest Customer Retention, Customer Retention przykłady, jak działa Customer Retention, Customer Retention znaczenie, Customer Retention przewodnik"
      />
      <ArticleSchema
        title="Customer Retention — co to jest i jak ją mierzyć?"
        description="Kompletny przewodnik po customer retention: metryki CRR, NRR, LTV oraz 6 strategii utrzymania klientów."
        url="https://fotz.pl/blog/customer-retention-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Retention", url: "https://fotz.pl/blog/customer-retention-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Customer Retention" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Customer Retention — co to jest i jak ją mierzyć?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Retencja klientów to jeden z najważniejszych czynników rentowności biznesu.
            Poznaj kluczowe metryki (CRR, NRR, LTV) i 6 sprawdzonych strategii utrzymania klientów.
          </p>
        </div>
      </section>

      {/* Dlaczego retencja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Dlaczego retencja klientów jest ważniejsza od akwizycji?</h2>
            <p className="text-lg text-slate-700 mb-6">
              Większość firm obsesyjnie skupia się na pozyskiwaniu nowych klientów — ale to utrzymanie
              istniejących napędza rentowność. Istniejący klienci kupują częściej, wydają więcej i polecają markę znajomym.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "5–7×", opis: "droższe pozyskanie nowego klienta vs. utrzymanie obecnego" },
                { stat: "+5% retencji", opis: "może zwiększyć zyski o 25–95% (Bain & Company)" },
                { stat: "67%", opis: "istniejący klienci wydają o tyle więcej niż nowi klienci" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">5 kluczowych metryk retencji klientów</h2>
            <div className="space-y-5">
              {retentionMetrics.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{m.metryka}</h3>
                  <p className="text-slate-600 mb-3">{m.opis}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-slate-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Wzór:</p>
                      <p className="text-slate-700 font-mono">{m.wzor}</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-emerald-600 mb-1">Benchmark:</p>
                      <p className="text-emerald-800">{m.benchmark}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Strategie */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 strategii retencji klientów</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {retentionStrategies.map((s, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900">{s.strategia}</h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      s.priorytet === "Krytyczny" || s.priorytet === "Kluczowy (enterprise)" ? "bg-red-100 text-red-700" :
                      s.priorytet === "Wysoki" ? "bg-blue-100 text-blue-700" :
                      "bg-yellow-100 text-yellow-700"
                    }`}>{s.priorytet}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — customer retention</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
