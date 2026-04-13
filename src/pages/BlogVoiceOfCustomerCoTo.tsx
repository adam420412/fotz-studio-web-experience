import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Voice of Customer (VoC)?",
    answer:
      "Voice of Customer (VoC) to metodologia zbierania, analizowania i działania na podstawie opinii, potrzeb, oczekiwań i doświadczeń klientów. VoC odpowiada na pytanie: czego klienci faktycznie chcą — nie czego my myślimy, że chcą. Program VoC przekształca dane z wielu źródeł (ankiety, recenzje, wywiady, support tickety) w actionable insights dla product, marketing i CX team.",
  },
  {
    question: "Jakie metody są stosowane w VoC?",
    answer:
      "Główne metody VoC to: NPS (Net Promoter Score) — czy polecisz nas innym?, CSAT (Customer Satisfaction Score) — jak oceniasz tę interakcję?, CES (Customer Effort Score) — jak łatwe było rozwiązanie Twojego problemu?, wywiady jakościowe, focus groups, analiza ticketów support, analiza recenzji online (G2, Trustpilot, App Store), oraz monitoring social media i VOC z chat transcriptów.",
  },
  {
    question: "Jakie są główne metryki Voice of Customer?",
    answer:
      "Kluczowe metryki VoC: NPS (Net Promoter Score, skala -100 do 100), CSAT (Customer Satisfaction, 1–5 lub 1–10), CES (Customer Effort Score, jak bardzo musiałem się starać), First Contact Resolution (FCR — problem rozwiązany przy pierwszym kontakcie?), Time to Resolution, Sentiment Score z analizy tekstu oraz Theme Frequency (najczęstsze tematy feedbacku).",
  },
  {
    question: "Jak zbudować program VoC?",
    answer:
      "Budowanie programu VoC: zdefiniuj punkty styku (touchpoints) do pomiaru, wybierz metryki i narzędzia, zaprojektuj ankiety (krótkie, 3–5 pytań), zautomatyzuj zbieranie feedbacku po kluczowych interakcjach, zbuduj dashboard do monitorowania trendów, stwórz proces działania na feedbacku (close the loop), oraz regularnie komunikuj wyniki i zmiany do klientów.",
  },
  {
    question: "Czym VoC różni się od badań rynkowych?",
    answer:
      "Badania rynkowe (market research) badają rynek — konkurencję, trendy, segmenty, nowe możliwości. Voice of Customer bada doświadczenia istniejących klientów z Twoim produktem i usługą. VoC jest ciągły i operacyjny (feedback po każdej interakcji), market research jest projektowy i strategiczny (raz na jakiś czas dla decyzji strategicznych). Oba są komplementarne.",
  },
];

const vocMethods = [
  {
    metoda: "NPS (Net Promoter Score)",
    pytanie: "'Jak bardzo prawdopodobne jest, że polecisz nas znajomemu?' (0–10)",
    skala: "Promoters (9–10) minus Detractors (0–6) = NPS (-100 do +100)",
    mocne: "Prosty benchmark branżowy, łatwy do śledzenia w czasie, silny predictor growth",
    słabe: "Nie mówi dlaczego, wymaga follow-up pytania otwartego",
    benchmark: "Dobry: powyżej 50. Znakomity: powyżej 70",
  },
  {
    metoda: "CSAT (Customer Satisfaction Score)",
    pytanie: "'Jak oceniasz swoje doświadczenie z [interakcja]?' (1–5 lub 1–10)",
    skala: "(Liczba odpowiedzi 4–5 / całkowita liczba odpowiedzi) × 100",
    mocne: "Mierzy satysfakcję z konkretnej interakcji, prosty i intuicyjny",
    słabe: "Krótkoterminowy, podatny na context bias, nie przewiduje lojalności",
    benchmark: "Dobry: powyżej 80%. Znakomity: powyżej 90%",
  },
  {
    metoda: "CES (Customer Effort Score)",
    pytanie: "'Na ile łatwe było rozwiązanie Twojego problemu?' (1–7 lub 1–5)",
    skala: "Niższy wynik = mniejszy effort = lepszy CX",
    mocne: "Najlepszy predictor lojalności i churnu wg CEB research",
    słabe: "Nie mierzy ogólnej satysfakcji, tylko łatwość konkretnej interakcji",
    benchmark: "Celem jest minimalizacja wysiłku klienta",
  },
  {
    metoda: "Wywiady Jakościowe",
    pytanie: "Pogłębione rozmowy 30–60 min z klientami o ich doświadczeniach",
    skala: "N/A (dane jakościowe)",
    mocne: "Najgłębsze insighty — 'dlaczego?', odkrywanie nieoczekiwanych potrzeb",
    słabe: "Czasochłonne, n niereprezentacyjne przy małej próbce",
    benchmark: "10–15 wywiadów osiąga saturację tematyczną",
  },
];

const vocProcess = [
  {
    krok: "Mapuj Touchpoints",
    opis: "Zidentyfikuj wszystkie punkty styku klienta z firmą: pierwsza wizyta, rejestracja, pierwsze użycie, wsparcie techniczne, odnowienie, churning. Każdy touchpoint to okazja do pomiaru.",
  },
  {
    krok: "Zbieraj Feedback",
    opis: "Automatyzuj zbieranie feedbacku: email ankieta 24h po zakupie, pop-up NPS po 30 dniach użytkowania, CSAT po każdej interakcji z supportem. Użyj narzędzi: Delighted, Hotjar, Typeform, Intercom.",
  },
  {
    krok: "Analizuj i Kategoryzuj",
    opis: "Grupuj feedback tematycznie (thematic analysis). Identyfikuj najczęstsze problemy, prośby i pochwały. Narzędzia text analytics: MonkeyLearn, Dovetail, Medallia, ręczna analiza dla małych firm.",
  },
  {
    krok: "Priorytetyzuj Insighty",
    opis: "Nie możesz naprawić wszystkiego naraz. Priorytetyzuj wg: częstotliwości (ile razy pojawia się problem), impaktu (jak bardzo wpływa na NPS/churn/CLV), łatwości naprawy (quick wins vs. duże projekty).",
  },
  {
    krok: "Działaj i Close the Loop",
    opis: "Close the loop: skontaktuj się z klientami, którzy dali negatywny feedback i powiedz co zrobiłeś. To dramatycznie zwiększa lojalność (Detractors stają się Promoters gdy czują, że są słyszani).",
  },
  {
    krok: "Monitoruj i Iteruj",
    opis: "Śledź trendy w czasie, nie tylko snapshot. Czy NPS rośnie po wdrożeniu zmian? Czy ten sam problem wraca? Regularne dashboardy tygodniowe/miesięczne dla teamów product, CX i leadership.",
  },
];

export default function BlogVoiceOfCustomerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Voice of Customer (VoC) — co to jest? NPS, CSAT, CES i feedback klientów"
        description="Voice of Customer — definicja, 4 metody (NPS, CSAT, CES, wywiady), 6-krokowy program VoC i jak close the loop z feedbackiem klientów. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/voice-of-customer-co-to"

        keywords="Voice of Customer (VoC) co to jest, Voice of Customer (VoC) definicja, czym jest Voice of Customer (VoC), Voice of Customer (VoC) przykłady, jak działa Voice of Customer (VoC), Voice of Customer (VoC) znaczenie, Voice of Customer (VoC) przewodnik"
      />
      <ArticleSchema
        title="Voice of Customer (VoC) — co to jest i jak budować program?"
        description="Kompletny przewodnik po Voice of Customer: metody (NPS, CSAT, CES), 6-krokowy program i close the loop."
        url="https://fotz.pl/blog/voice-of-customer-co-to"
        datePublished="2024-01-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Voice of Customer", url: "https://fotz.pl/blog/voice-of-customer-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Voice of Customer" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Voice of Customer (VoC) — co to jest i jak budować program?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Voice of Customer transformuje opinie klientów w decyzje biznesowe.
            Poznaj metody NPS, CSAT, CES, 6-krokowy program VoC i jak close the loop z feedbackiem.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest Voice of Customer?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Voice of Customer (VoC)</strong> to systematyczna metodologia słuchania klientów —
              zbierania, analizowania i działania na podstawie ich opinii, potrzeb i doświadczeń
              w każdym punkcie styku z firmą. To nie jednorazowa ankieta, lecz ciągły program
              przekształcający głos klientów w decyzje produktowe, marketingowe i operacyjne.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy z dojrzałymi programami VoC mają o 55% wyższy wskaźnik retencji klientów
              (Aberdeen Group) i 3× wyższy wzrost przychodów niż te bez VoC.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "55%", opis: "wyższy retention rate firm z dojrzałym programem VoC (Aberdeen Group)" },
                { stat: "3×", opis: "wyższy wzrost przychodów przy aktywnym programie Voice of Customer" },
                { stat: "10×", opis: "tańsze zatrzymanie klienta niż pozyskanie nowego — VoC chroni CLV" },
              ].map((s, i) => (
                <div key={i} className="bg-sky-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-sky-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 metody */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 główne metody pomiaru VoC</h2>
            <div className="space-y-5">
              {vocMethods.map((m, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{m.metoda}</h3>
                  <div className="bg-sky-50 rounded p-3 mb-3">
                    <p className="text-xs font-semibold text-sky-600 mb-1">Pytanie:</p>
                    <p className="text-sky-800 text-sm italic">{m.pytanie}</p>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">Obliczanie: {m.skala}</p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="bg-green-50 rounded p-2">
                      <p className="text-xs font-semibold text-green-600 mb-1">Mocne strony:</p>
                      <p className="text-green-800">{m.mocne}</p>
                    </div>
                    <div className="bg-red-50 rounded p-2">
                      <p className="text-xs font-semibold text-red-600 mb-1">Ograniczenia:</p>
                      <p className="text-red-800">{m.słabe}</p>
                    </div>
                  </div>
                  {m.benchmark && (
                    <p className="text-xs text-slate-500 mt-2 italic">Benchmark: {m.benchmark}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 6 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 kroków programu Voice of Customer</h2>
            <div className="space-y-5">
              {vocProcess.map((item, i) => (
                <div key={i} className="flex gap-5 bg-sky-50 rounded-xl p-6 border border-sky-100">
                  <div className="w-12 h-12 bg-sky-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.krok}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — Voice of Customer</h2>
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
