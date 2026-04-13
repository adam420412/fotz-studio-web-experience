import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Churn Prediction?",
    answer: "Churn Prediction (przewidywanie churnu) to zastosowanie machine learning i analizy danych do identyfikowania klientów z wysokim ryzykiem rezygnacji — zanim jeszcze zrezygnują. Tradycyjny churn management jest reaktywny: klient rezygnuje, próbujesz go zatrzymać (save). Churn prediction jest proaktywny: model identyfikuje klientów at-risk 30-90 dni przed decyzją, CSM interweniuje wcześniej. Dlaczego to ważne: Zatrzymanie istniejącego klienta kosztuje 5-25x mniej niż pozyskanie nowego. Wczesna interwencja jest skuteczniejsza niż ostatnia chwila. Modele churn prediction umożliwiają priorytetyzację CSM time na konta z najwyższym ryzykiem i wartością. Sygnały churnu: spadek product usage, brak logowania, increase support tickets, NPS Detractor, brak champions, kontrakt zbliżający się do końca, konkurent aktywnie prospektuje klienta. Narzędzia: modele ML (logistic regression, gradient boosting, neural nets), Customer Health Score jako uproszczony proxy, Gainsight, ChurnZero z wbudowanym scoring.",
  },
  {
    question: "Jak zbudować model Churn Prediction?",
    answer: "Budowanie modelu churn prediction: Krok 1 — Definicja churnu. Czy churn = rezygnacja? Czy downgrade też liczy? Kontrakt nieodnowiony? Brak aktywności przez 60 dni? Musi być jedna definicja. Krok 2 — Dane historyczne. Zbierz dane o klientach którzy odeszli vs. pozostali. Minimum 12-24 miesięcy historii, minimum 100-200 zdarzeń churnu dla statystycznej wiarygodności. Krok 3 — Feature engineering. Stwórz predyktory: usage metrics (login frequency, feature adoption), support history, NPS history, contract data, relationship signals. Krok 4 — Model selection. Zacznij od prostych: logistic regression (interpretowalne wyniki). Wypróbuj gradient boosting (XGBoost, LightGBM) dla lepszej accuracy. Krok 5 — Ewaluacja. AUC-ROC — jak dobrze model separuje churnerów od retainowanych. Precision i Recall — zbalansuj false positive (niepotrzebna interwencja) vs. false negative (przegapiony churn). Krok 6 — Wdrożenie. Codzienny scoring klientów, automatyczne alerty do CSM, integracja z CRM i CS platform.",
  },
  {
    question: "Jakie sygnały najlepiej przewidują churn?",
    answer: "Predyktory churnu według siły predykcyjnej: Silne predyktory (wysoka korelacja): Product Usage Drop — spadek aktywności o 50%+ w ciągu 30 dni jest bardzo silnym sygnałem. Zwłaszcza jeśli wcześniej klient był aktywny. Brak logowania 30+ dni. Early churn (first 90 days) — klient który nie osiągnął value w pierwszych 3 miesiącach ma dramatycznie wyższy churn przez cały kontrakt. Champion Loss — odejście osoby która wewnętrznie promowała produkt. Nowy champion = nowe ryzyko. Średnie predyktory: NPS Detractor — scoring 0-6. Wielokrotne support eskalacje. Duży liczba support ticketów. Brak engagement z CSM. Słabsze predyktory (ale warto monitorować): Firma przeszła acquisition lub merger. Branżowy downturn. Rebranding — może sygnalizować zmiany strategii. Brak adopcji nowych features (stagnacja). Negatywna ocena na G2 lub Capterra. Interakcja predyktorów: Single sygnał = alert. Wiele sygnałów naraz = wysokie ryzyko. Np. spadek usage + NPS Detractor + kontrakt za 60 dni = natychmiastowa eskalacja.",
  },
  {
    question: "Jak zorganizować interwencję przy ryzyku churnu?",
    answer: "Playbook interwencji churn risk: Tier 1 — High Value + High Risk: konta powyżej $50K ARR z czerwonym Health Score. Natychmiastowa eskalacja. VP CS lub CEO dzwoni do executive klienta. Formalne Save Plan z ROI discussion. Tier 2 — Medium Value + High Risk: konta $10-50K ARR z ryzykiem. CSM outreach w ciągu 24h. Executive Business Review w ciągu 2 tygodni. Diagnoza problemu i action plan. Tier 3 — Low Value + High Risk: konta poniżej $10K ARR z ryzykiem. Digital-first interwencja (email, in-app). Offer training lub onboarding wsparcie. Low-touch save play. Skrypt rozmowy save call: Nie zaczynaj od 'widzę że myślisz o rezygnacji'. Zamiast: 'Chciałem sprawdzić jak idzie, co osiągnąłeś z produktem.' Odkryj prawdziwe problemy. Zaoferuj konkretne rozwiązania. Eskaluj do product jeśli to feature gap. Metrics: Churn Save Rate — % at-risk klientów które udało się zatrzymać. Target: 20-40% save rate przy wczesnej interwencji (30-90 dni przed). Poniżej 10% = za późna interwencja lub zbyt małe wysiłki.",
  },
  {
    question: "Jak mierzyć skuteczność Churn Prediction?",
    answer: "Metryki skuteczności modelu churn prediction: Model performance: AUC-ROC — Area Under the Curve dla ROC. Im bliżej 1.0 tym lepszy model. Powyżej 0.8 = dobry. Poniżej 0.6 = lepiej użyj prostego scoring rule. Precision — z predicted churnerów: jaki % faktycznie odszedł? Wysokie precision = mało false alarms dla CSM. Recall — z faktycznych churnerów: jaki % model wychwycił? Wysokie recall = mało przegapionych at-risk klientów. Business metrics: Churn Rate Before vs. After interwencji — czy churn spadł po wdrożeniu prediction + intervention program? Revenue Saved — wartość ARR klientów których udało się zatrzymać dzięki early intervention. CSM Efficiency — czy CSM spędza czas na właściwych klientach? (czas per konto vs. wartość konta). NPS Improvement — czy proaktywne interwencje poprawiają NPS? False Positive Cost — koszt niepotrzebnych interwencji (CSM czas). Musi być zbilansowany z value od true positives. Retraining cadence: modele wymagają regularnego retrainingu (kwartalnie lub przy znacznych zmianach produktu/bazy klientów).",
  },
];

const churnSignals = [
  { sygnał: "Spadek usage o 50%+", siła: "Bardzo silny", kategoria: "Product", timeline: "30-60 dni przed churnem" },
  { sygnał: "Brak logowania 30+ dni", siła: "Bardzo silny", kategoria: "Product", timeline: "30-90 dni przed churnem" },
  { sygnał: "Champion opuścił firmę", siła: "Silny", kategoria: "Relationship", timeline: "0-60 dni po odejściu" },
  { sygnał: "NPS Detractor (0-6)", siła: "Silny", kategoria: "Sentiment", timeline: "60-180 dni przed churnem" },
  { sygnał: "Wielokrotne eskalacje", siła: "Średni", kategoria: "Support", timeline: "30-90 dni przed churnem" },
  { sygnał: "Brak executive engagement", siła: "Średni", kategoria: "Relationship", timeline: "90-180 dni przed churnem" },
  { sygnał: "Kontrakt za 90 dni", siła: "Kontekstowy", kategoria: "Commercial", timeline: "Zawsze priorytet" },
  { sygnał: "Firma przeszła M&A", siła: "Kontekstowy", kategoria: "External", timeline: "0-180 dni po ogłoszeniu" },
];

const interventionTiers = [
  { tier: "Tier 1", warunek: "ARR powyżej $50K + Red Health Score", działanie: "Executive call w 24h, VP CS lub CEO involvement, formalne Save Plan", cel: "Retain at any reasonable cost" },
  { tier: "Tier 2", warunek: "ARR $10-50K + Amber/Red Health Score", działanie: "CSM outreach w 48h, EBR w ciągu 2 tygodni, diagnostyka + action plan", cel: "Proaktywna interwencja z clear value reinforcement" },
  { tier: "Tier 3", warunek: "ARR poniżej $10K + Red Health Score", działanie: "Digital-first (email, in-app), training offer, low-touch save play", cel: "Skalowalna interwencja bez nadmiernego kosztu CSM" },
];

export default function BlogChurnPredictionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Churn Prediction | Fotz Studio"
        description="Churn Prediction: budowanie modelu ML, sygnały churnu (usage drop, NPS Detractor, champion loss), playbooks interwencji i metryki skuteczności dla firm SaaS."
        canonicalUrl="https://fotz.pl/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu"

        keywords="Churn Prediction co to jest, Churn Prediction definicja, czym jest Churn Prediction, Churn Prediction startup, Churn Prediction jak liczyć, Churn Prediction wzór, Churn Prediction przykłady"

        canonical="https://fotz.pl/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu"
      />
      <ArticleSchema
        title="Churn Prediction — jak przewidywać i zapobiegać churnu klientów SaaS?"
        description="Churn Prediction: model ML, sygnały churnu, feature engineering, intervention playbooks (3 tiery), metryki (AUC-ROC, Save Rate) i narzędzia dla Customer Success."
        url="https://fotz.pl/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu"
        datePublished="2024-03-20"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Churn Prediction", url: "https://fotz.pl/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Churn Prediction", href: "/blog/churn-prediction-jak-przewidywac-zapobiegac-churnu" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Customer Success / ML
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Churn Prediction
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Klient decyduje się odejść 3-6 miesięcy przed rezygnacją.
              Churn Prediction identyfikuje to ryzyko wcześnie —
              dając CSM czas na skuteczną interwencję.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Koszt vs. nowy klient", value: "5-25x taniej" },
                { label: "Target AUC-ROC", value: "Powyżej 0.8" },
                { label: "Wczesna Save Rate", value: "20-40%" },
                { label: "Okno interwencji", value: "30-90 dni" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sygnały */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe sygnały churnu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy sygnał ma inną siłę predykcyjną i timeline
              przed faktycznym churnem.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Sygnał</th>
                  <th className="p-3 text-left">Siła</th>
                  <th className="p-3 text-left">Kategoria</th>
                  <th className="p-3 text-left rounded-tr-lg">Timeline</th>
                </tr>
              </thead>
              <tbody>
                {churnSignals.map((s, i) => (
                  <tr key={s.sygnał} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 text-gray-800 font-medium">{s.sygnał}</td>
                    <td className="p-3">
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        s.siła === "Bardzo silny" ? "bg-red-100 text-red-700" :
                        s.siła === "Silny" ? "bg-orange-100 text-orange-700" :
                        s.siła === "Średni" ? "bg-yellow-100 text-yellow-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>{s.siła}</span>
                    </td>
                    <td className="p-3 text-gray-600">{s.kategoria}</td>
                    <td className="p-3 text-gray-600">{s.timeline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tiery interwencji */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tiered Intervention Playbooks</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie każdy at-risk klient wymaga takiego samego poziomu uwagi.
              Tiering maksymalizuje ROI z interwencji CSM.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {interventionTiers.map((t) => (
              <FadeInView key={t.tier}>
                <div className={`rounded-xl border-2 p-5 ${
                  t.tier === "Tier 1" ? "border-red-200 bg-red-50" :
                  t.tier === "Tier 2" ? "border-orange-200 bg-orange-50" :
                  "border-yellow-200 bg-yellow-50"
                }`}>
                  <div className="flex gap-4">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-bold flex-shrink-0 h-fit ${
                      t.tier === "Tier 1" ? "bg-red-600" :
                      t.tier === "Tier 2" ? "bg-orange-500" :
                      "bg-yellow-500"
                    }`}>{t.tier}</span>
                    <div className="flex-1">
                      <p className="text-gray-700 text-sm font-semibold mb-2">{t.warunek}</p>
                      <p className="text-gray-700 text-sm mb-2">{t.działanie}</p>
                      <div>
                        <span className="text-xs font-bold text-gray-500 uppercase">Cel: </span>
                        <span className="text-sm text-gray-600">{t.cel}</span>
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

      <RelatedArticles currentArticleId="churn-prediction-jak-przewidywac-zapobiegac-churnu" />
      <ContactSection />
    </Layout>
  );
}
