import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Customer Health Score?",
    answer: "Customer Health Score (wynik zdrowia klienta) to zagregowana metryka która ocenia kondycję i ryzyko churnu każdego klienta w czasie rzeczywistym — zanim klient zdecyduje się odejść. Health Score jest podstawowym narzędziem Customer Success: zamiast reagować na rezygnację klienta, CSM może interweniować proaktywnie gdy wynik spada. Typowe składowe Health Score: Product Usage — jak aktywnie klient używa produktu (DAU, feature adoption, last login). Support Tickets — liczba i sentyment ticketów wsparcia. NPS/CSAT — wyniki satysfakcji. Engagement — udział w webinarach, odpowiedzi na emaile. Contract — czas do renewalu, wartość kontraktu. Financial — czy płaci na czas? Relationship — częstotliwość kontaktu z CSM, executive engagement. Skala: zazwyczaj 0-100 lub RAG (Red, Amber, Green). Red = ryzyko churnu. Green = gotowy do upsell. Wynik jest wejściem do daily workflow CSM: priorytetyzuj czas na kontach Red i Amber.",
  },
  {
    question: "Jak zbudować model Health Score?",
    answer: "Budowanie Health Score: Krok 1 — Zidentyfikuj predyktory churnu. Przeanalizuj dane historycznych churnów — co łączyło klientów którzy odeszli? Niska aktywność? Brak adoption kluczowych features? Wiele support ticketów? Krok 2 — Wybierz sygnały. Wybierz 5-10 measurable sygnałów które mają najsilniejszą korelację z churnem lub retencją. Krok 3 — Przypisz wagi. Każdy sygnał ma wagę (% wpływu na wynik). Suma wag = 100%. Np.: Product usage 40%, NPS 20%, Support 15%, Engagement 15%, Contract health 10%. Krok 4 — Zdefiniuj scoring. Dla każdego sygnału: co oznacza 100 (idealnie), co oznacza 0 (alarm). Np. usage: login każdego dnia = 100, brak logowania 30+ dni = 0. Krok 5 — Zdefiniuj progi RAG. Red: poniżej 40. Amber: 40-70. Green: powyżej 70. Krok 6 — Kalibracja. Sprawdź czy historyczni churned clients faktycznie mieliby niskie wyniki. Iteruj wagi aż model będzie predyktywny. Krok 7 — Automatyzacja alertów. CSM dostaje alert gdy konto spada z Green na Amber lub z Amber na Red.",
  },
  {
    question: "Jakie sygnały uwzględnić w Health Score?",
    answer: "Kategorie sygnałów Health Score: Product Engagement (najważniejsze): DAU/WAU/MAU aktywność, login frequency (ostatni login: wczoraj = dobry, 30 dni temu = alarm), feature adoption (czy używają kluczowych features czy tylko basic?), breadth of usage (ile userów w firmie klienta korzysta?). Customer Sentiment: NPS score (Promoter/Passive/Detractor), CSAT z support ticketów, executive sponsor sentiment (subiektywna ocena CSM). Support Signals: liczba otwartych ticketów, czas do rozwiązania, eskalacje, bug reports vs. how-to questions (dużo how-to = słabe onboarding). Relationship Signals: ostatni kontakt z CSM, executive sponsorship (czy masz kontakt z C-level?), champions obecność (czy Twój champion wciąż w firmie?). Commercial Signals: % wykorzystania licencji (seat utilization), czas do renewalu, wzrost lub spadek użycia, opóźnienia w płatnościach. Uwaga: różne segmenty klientów mogą mieć różne modele. Enterprise = relationship signals ważniejsze. SMB = product usage dominuje.",
  },
  {
    question: "Jak CSM używa Health Score w codziennej pracy?",
    answer: "Health Score w praktyce CSM: Daily workflow: przejrzyj listę kont posortowanych od najniższego Health Score. Priorytet: Red konta wymagają natychmiastowego działania. Amber = zaplanuj outreach. Green = okazja do upsell. Alerty na drop: automatyczny alert gdy konto spada o X punktów w ciągu Y dni. Trigger dla outreach: 'Widzę że usage spadło o 40% w tym miesiącu — chciałem sprawdzić czy wszystko ok i czy mogę jakoś pomóc.' Playbooks per scenariusz: Low usage playbook — outreach, training offer, new feature intro. High support tickets — eskalacja, apology, dedicated session. NPS Detractor — executive call, formal recovery plan. Pre-churn red flag — executive business review, ROI discussion, competitive displacement check. Escalation trigger: gdy konto osiągnie Red + kontrakt w ciągu 90 dni do renewalu = automatyczna eskalacja do VP CS + Account Manager. QBR agenda: Health Score jako punkt startowy każdego business review. Co zrobiłeś dla klienta vs. co planujesz.",
  },
  {
    question: "Jakie narzędzia wspierają Customer Health Score?",
    answer: "Narzędzia Health Score: CS Platforms (all-in-one): Gainsight — lider rynku, rozbudowane health scoring, playbooks, journey orchestration. Kosztowny, enterprise. ChurnZero — focus na mid-market SaaS, dobre dashboardy, integracje. Totango — modular design, dobre dla różnych customer segments. Planhat — nowoczesny UI, elastyczne scoring. Catalyst — nowy gracz, focus na simplicity. Standalone monitoring: Mixpanel, Amplitude, Segment — product usage data. Zendesk, Intercom — support data. Salesforce — CRM/contract data. Delighted, Typeform — NPS/CSAT. Custom: wiele firm buduje Health Score w dbt + Metabase lub Looker. Dane z multiple sources — warehouse — scoring model — dashboard CSM. Integracja: kluczowe jest zebranie danych z produktu, CRM i support w jednym miejscu. Slack alerting: Gainsight i ChurnZero integrują z Slack — CSM dostaje alert bezpośrednio.",
  },
];

const healthScoreComponents = [
  { sygnał: "Product Usage", waga: "40%", pozytywne: "Dzienny login, użycie kluczowych features, wielu userów", negatywne: "Brak logowania 14+ dni, drop DAU o 50%+, tylko 1 user", kolor: "blue" },
  { sygnał: "Customer Sentiment (NPS)", waga: "20%", pozytywne: "NPS 9-10 (Promoter), CSAT 5/5, pozytywne feedback", negatywne: "NPS 0-6 (Detractor), eskalacja, complaint od CEO", kolor: "green" },
  { sygnał: "Support Health", waga: "15%", pozytywne: "Zero ticketów, szybka rozwiązalność, how-to pytania", negatywne: "5+ otwartych ticketów, bug eskalacje, SLA breach", kolor: "purple" },
  { sygnał: "Engagement", waga: "15%", pozytywne: "Odpowiedzi na emaile, udział w webinarach, executive contact", negatywne: "Ignorowane emaile, brak executive contact, ghost 30+ dni", kolor: "orange" },
  { sygnał: "Commercial Health", waga: "10%", pozytywne: "Płaci na czas, seat utilization 80%+, ekspansja", negatywne: "Opóźnione płatności, 20% seat utilization, brak wzrostu", kolor: "teal" },
];

const ragDefinitions = [
  { kolor: "Green", zakres: "70-100", opis: "Klient zdrowy. Wysoka adopcja, pozytywny sentiment. Okazja do upsell i advocacy.", działanie: "Scheduled QBR, request for referral, present expansion use case" },
  { kolor: "Amber", zakres: "40-69", opis: "Ryzyko. Niektóre sygnały niepokojące. Wymaga proaktywnego outreach.", działanie: "CSM outreach w ciągu 48h, diagnoza problemu, oferta wsparcia" },
  { kolor: "Red", zakres: "0-39", opis: "Wysokie ryzyko churnu. Wymaga natychmiastowej interwencji CSM i eskalacji.", działanie: "Natychmiastowy call, eskalacja do VP CS, executive recovery plan" },
];

export default function BlogCustomerHealthScoreCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Customer Health Score — co to jest i jak zbudować? | Fotz.pl"
        description="Customer Health Score: jak zbudować model, sygnały (usage, NPS, support, engagement), progi RAG, playbooks CSM i narzędzia (Gainsight, ChurnZero, Planhat)."
        canonicalUrl="https://fotz.pl/blog/customer-health-score-co-to-jest-jak-zbudowac"

        keywords="Customer Health Score co to jest, Customer Health Score definicja, czym jest Customer Health Score, Customer Health Score przykłady, jak działa Customer Health Score, Customer Health Score znaczenie, Customer Health Score przewodnik"

        canonical="https://fotz.pl/blog/customer-health-score-co-to"
      />
      <ArticleSchema
        title="Customer Health Score — co to jest i jak zbudować?"
        description="Customer Health Score: budowanie modelu, sygnały (product usage, NPS, support, engagement, commercial), progi RAG, playbooks CSM i narzędzia Customer Success."
        url="https://fotz.pl/blog/customer-health-score-co-to-jest-jak-zbudowac"
        datePublished="2024-03-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Customer Health Score", url: "https://fotz.pl/blog/customer-health-score-co-to-jest-jak-zbudowac" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Customer Health Score", href: "/blog/customer-health-score-co-to-jest-jak-zbudowac" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Customer Health Score
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Klient rezygnuje zazwyczaj 3-6 miesięcy przed formalną rezygnacją.
              Health Score pozwala wykryć churn zanim do niego dojdzie
              i interweniować w odpowiednim momencie.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Najważniejszy sygnał", value: "Product Usage" },
                { label: "Skala typowa", value: "0-100 lub RAG" },
                { label: "Lider narzędzi", value: "Gainsight" },
                { label: "Trigger interwencji", value: "Red / Amber drop" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Komponenty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 komponentów Customer Health Score</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy komponent ma przypisaną wagę. Suma wag = 100%.
              Wagi powinny odzwierciedlać predyktywną moc każdego sygnału.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {healthScoreComponents.map((c) => (
              <FadeInView key={c.sygnał}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className={`font-bold text-lg ${
                      c.kolor === "blue" ? "text-blue-800" :
                      c.kolor === "green" ? "text-green-800" :
                      c.kolor === "purple" ? "text-purple-800" :
                      c.kolor === "orange" ? "text-orange-800" :
                      "text-teal-800"
                    }`}>{c.sygnał}</h3>
                    <span className="text-2xl font-bold text-gray-400">{c.waga}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase mb-1">Pozytywne sygnały:</div>
                      <p className="text-gray-600">{c.pozytywne}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-red-500 uppercase mb-1">Negatywne sygnały:</div>
                      <p className="text-gray-600">{c.negatywne}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* RAG */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Progi RAG i playbooks CSM</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy próg Health Score uruchamia inny zestaw działań CSM.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {ragDefinitions.map((r) => (
              <FadeInView key={r.kolor}>
                <div className={`rounded-xl border-2 p-5 ${
                  r.kolor === "Green" ? "border-green-300 bg-green-50" :
                  r.kolor === "Amber" ? "border-amber-300 bg-amber-50" :
                  "border-red-300 bg-red-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-bold flex-shrink-0 ${
                      r.kolor === "Green" ? "bg-green-600" :
                      r.kolor === "Amber" ? "bg-amber-500" :
                      "bg-red-600"
                    }`}>{r.kolor} ({r.zakres})</span>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm mb-2">{r.opis}</p>
                      <div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Działanie CSM: </span>
                        <span className="text-sm text-gray-700">{r.działanie}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
