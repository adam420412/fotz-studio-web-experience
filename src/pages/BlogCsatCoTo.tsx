import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest CSAT?",
    answer:
      "CSAT (Customer Satisfaction Score) to metryka mierząca satysfakcję klientów z konkretnej interakcji, produktu lub usługi. Klienci odpowiadają na pytanie: 'Jak oceniasz swoje doświadczenie z [X]?' w skali 1-5 lub 1-10. CSAT oblicza się jako odsetek zadowolonych odpowiedzi (4-5 w skali 1-5) do wszystkich odpowiedzi: CSAT% = (Liczba odpowiedzi 4-5) / (Wszystkie odpowiedzi) × 100. CSAT jest najczęściej używany po konkretnych interakcjach: rozmowie z supportem, zamknięciu ticketu, onboardingu lub zakupie.",
  },
  {
    question: "Czym różni się CSAT od NPS i CES?",
    answer:
      "CSAT (Customer Satisfaction) mierzy satysfakcję z konkretnej interakcji — transakcyjny, natychmiastowy. NPS (Net Promoter Score) mierzy lojalność i skłonność do polecenia marki — relacyjny, długoterminowy. CES (Customer Effort Score) mierzy wysiłek klienta włożony w interakcję ('Jak łatwo było rozwiązać problem?') — predyktor lojalności. Kiedy używać: CSAT — po każdej interakcji supportu; NPS — kwartalnie lub po onboardingu; CES — po rozwiązaniu ticketu lub zakupie. Najlepsze firmy śledzą wszystkie trzy.",
  },
  {
    question: "Jaki jest dobry wynik CSAT?",
    answer:
      "Benchmarki CSAT różnią się branżowo: E-commerce: 75-85% (ACSI 2023). SaaS/Software: 78-82%. Retail: 76-82%. Fintech/Banking: 72-78%. Healthcare: 75-80%. Ogólna zasada: powyżej 80% = dobry. Powyżej 85% = bardzo dobry. Powyżej 90% = excellent. Poniżej 70% = wymaga natychmiastowych działań. Ważniejszy od wartości bezwzględnej jest trend: czy CSAT rośnie czy spada? Oraz porównanie z własną historią i konkurencją w branży.",
  },
  {
    question: "Jak zwiększyć CSAT w zespole supportu?",
    answer:
      "Kluczowe dźwignie wzrostu CSAT: szybkość odpowiedzi (First Response Time) — klienci oczekują odpowiedzi w ciągu 1h dla chat, 4h dla email; First Contact Resolution (FCR) — rozwiązanie problemu przy pierwszym kontakcie; personalizacja — adresowanie klienta po imieniu, znanie historii; proaktywna komunikacja — informowanie o statusie bez pytania; empathy w komunikacji; wiedza agentów (regularny training). Dla każdego +1 punkt FCR, CSAT rośnie o ~0.5-1 punkt procentowy.",
  },
  {
    question: "Co to jest CES (Customer Effort Score)?",
    answer:
      "CES (Customer Effort Score) mierzy wysiłek klienta: 'Jak łatwo było rozwiązać Wasz problem?' w skali 1-7 (1 = bardzo trudno, 7 = bardzo łatwo). Badania Gartner (oryginalnie HBR 2010) wykazały, że redukcja wysiłku klienta jest silniejszym predyktorem lojalności niż wzrost satysfakcji. CES oblicza się jako % pozytywnych odpowiedzi (5-7) lub jako średnią. CES poniżej 5 = wymaga działania. Najlepsze firmy (Amazon, Apple) mają CES 6-7. CES jest szczególnie ważny w samoobsługowych produktach SaaS.",
  },
];

const csatVsNpsVsCes = [
  { aspekt: "Pytanie bazowe", csat: "'Jak oceniasz doświadczenie z [X]?'", nps: "'Jak prawdopodobne, że polecisz nas znajomym?'", ces: "'Jak łatwo było rozwiązać Twój problem?'" },
  { aspekt: "Skala", csat: "1-5 lub 1-10", nps: "0-10", ces: "1-7 (CES 2.0)" },
  { aspekt: "Typ pomiaru", csat: "Transakcyjny (po interakcji)", nps: "Relacyjny (lojalność ogólna)", ces: "Transakcyjny (wysiłek)" },
  { aspekt: "Częstotliwość", csat: "Po każdej interakcji", nps: "Co kwartał lub co rok", ces: "Po każdej interakcji supportu" },
  { aspekt: "Predykt", csat: "Satysfakcja krótkoterminowa", nps: "Churn, growth, referrals", ces: "Lojalność długoterminowa" },
  { aspekt: "Słabość", csat: "Skala inflacji (wszyscy dają 5)", nps: "Nie mówi CO jest nie tak", ces: "Zależy od definicji 'problemu'" },
  { aspekt: "Kiedy używać", csat: "Support, onboarding, zakup", nps: "Kwartalny review, NPS programy", ces: "Self-service, IVR, chat support" },
];

const csatImprovementDrivers = [
  { driver: "First Contact Resolution (FCR)", wpływ: "Bardzo wysoki", opis: "Rozwiązanie problemu przy pierwszym kontakcie. Klienci którym trzeba oddzwaniać mają 2x niższy CSAT.", jak: "Knowledge base, escalation matrix, agent training, empowerment" },
  { driver: "First Response Time (FRT)", wpływ: "Wysoki", opis: "Czas od zgłoszenia do pierwszej odpowiedzi. Każda godzina opóźnienia obniża CSAT o ~2-5 punktów.", jak: "SLA, auto-response, priority routing, chatbot do pierwszej odpowiedzi" },
  { driver: "Empathy i komunikacja", wpływ: "Wysoki", opis: "Ton, personalizacja, aktywne słuchanie. Klienci piszą o 'byciu wysłuchanym' częściej niż o rozwiązaniu.", jak: "Agent training, tone of voice guidelines, empathy scripts" },
  { driver: "Proaktywna komunikacja", wpływ: "Średni", opis: "Informowanie klienta o statusie zanim zapyta. Eliminuje frustrację z 'czarnej skrzynki'.", jak: "Automatyczne update'y statusu ticketu, slack/email notifications" },
  { driver: "Wiedza produktowa agentów", wpływ: "Średni", opis: "Agenci którzy nie wiedzą odpowiedzi odsyłają — każde przekierowanie obniża CSAT o ~8-12 punktów.", jak: "Internal knowledge base, regular product training, buddy system" },
  { driver: "Opcje samodzielnego rozwiązania", wpływ: "Średni", opis: "Dobra baza wiedzy = mniej ticketów = więcej czasu dla agentów na trudne sprawy.", jak: "FAQ, video tutorials, onboarding documentation, community forum" },
];

const csatSurveyBestPractices = [
  { zasada: "Zbieraj feedback natychmiast", opis: "Wysyłaj CSAT survey do 24h po zamknięciu ticketu. Im szybciej po interakcji, tym wyższy response rate i dokładniejsze odpowiedzi." },
  { zasada: "Jedno pytanie CSAT + otwarte", opis: "Skala satysfakcji + 'Co mogliśmy zrobić lepiej?' = ilość + jakość feedbacku. Długie ankiety = niski response rate." },
  { zasada: "Response rate powyżej 15%", opis: "CSAT poniżej 15% response rate nie jest reprezentatywny. Optymalizuj kanał dostarczenia i moment wysyłki." },
  { zasada: "Segmentuj wyniki", opis: "CSAT per agent, per kanał (email/chat/phone), per typ sprawy, per segment klientów. Agregat ukrywa problemy." },
  { zasada: "Zamknij pętlę (Close the Loop)", opis: "Przy CSAT 1-2 — kontaktuj klienta proaktywnie. 'Widzimy że Twoje doświadczenie nie spełniło oczekiwań. Jak możemy to naprawić?'" },
];

export default function BlogCsatCoTo() {
  return (
    <Layout>
      <SEOHead
        title="CSAT — co to jest? Customer Satisfaction Score i jak go mierzyć"
        description="CSAT — definicja, formuła, porównanie z NPS i CES, benchmarki branżowe, jak poprawić wynik i best practices zbierania feedbacku. Kompletny przewodnik po CSAT."
        canonical="https://fotz.pl/blog/csat-customer-satisfaction-score-co-to"

        keywords="CSAT co to jest, CSAT definicja, czym jest CSAT, CSAT przykłady, jak działa CSAT, CSAT znaczenie, CSAT przewodnik"
      />
      <ArticleSchema
        title="CSAT — co to jest i jak mierzyć satysfakcję klientów?"
        description="Kompletny przewodnik po CSAT: definicja, benchmarki, porównanie z NPS i CES oraz jak poprawiać wynik."
        url="https://fotz.pl/blog/csat-customer-satisfaction-score-co-to"
        datePublished="2024-01-23"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "CSAT", url: "https://fotz.pl/blog/csat-customer-satisfaction-score-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "CSAT", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            CSAT — co to jest i jak mierzyć satysfakcję klientów?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            CSAT (Customer Satisfaction Score) to kluczowa metryka satysfakcji klientów.
            Poznaj formułę, benchmarki branżowe, porównanie z NPS i CES i jak poprawiać wynik.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest CSAT?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>CSAT (Customer Satisfaction Score)</strong> to metryka mierząca satysfakcję klientów
              z konkretnej interakcji. Klienci oceniają doświadczenie na skali 1-5 lub 1-10.
              CSAT% = % odpowiedzi pozytywnych (4-5 w skali 5-punktowej).
            </p>
            <div className="bg-slate-900 rounded-xl p-6 font-mono text-center mb-6">
              <p className="text-slate-400 text-sm mb-2">Formuła CSAT</p>
              <p className="text-green-400 text-xl">CSAT% = (Odpowiedzi 4-5) / (Wszystkie odpowiedzi) × 100</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "80%+", opis: "Dobry wynik CSAT dla SaaS i e-commerce. Powyżej 85% = bardzo dobry." },
                { stat: "15%+", opis: "Minimalny response rate dla reprezentatywnych danych CSAT. Poniżej — ankieta jest stronnicza." },
                { stat: "24h", opis: "Optymalne okno na wysłanie CSAT survey po zamknięciu ticketu supportu" },
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

      {/* CSAT vs NPS vs CES */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">CSAT vs NPS vs CES — porównanie</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Aspekt</th>
                    <th className="p-3 text-left">CSAT</th>
                    <th className="p-3 text-left">NPS</th>
                    <th className="p-3 text-left">CES</th>
                  </tr>
                </thead>
                <tbody>
                  {csatVsNpsVsCes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-700">{row.aspekt}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.csat}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.nps}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.ces}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Dźwignie poprawy */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak poprawić CSAT — kluczowe dźwignie</h2>
            <div className="space-y-4">
              {csatImprovementDrivers.map((d, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-slate-900">{d.driver}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${d.wpływ === "Bardzo wysoki" ? "bg-green-100 text-green-700" : d.wpływ === "Wysoki" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}>{d.wpływ} wpływ</span>
                  </div>
                  <p className="text-slate-600 text-sm mb-2">{d.opis}</p>
                  <p className="text-xs text-slate-400"><strong>Jak:</strong> {d.jak}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Best practices */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Best Practices zbierania CSAT</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {csatSurveyBestPractices.map((bp, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-sky-700 mb-2">{bp.zasada}</h3>
                  <p className="text-slate-600 text-sm">{bp.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — CSAT</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="csat-customer-satisfaction-score-co-to" />
      <ContactSection />
    </Layout>
  );
}
