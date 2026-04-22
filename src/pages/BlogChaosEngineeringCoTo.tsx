import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Chaos Engineering i skąd pochodzi?",
    answer: "Chaos Engineering to dyscyplina eksperymentowania na systemie produkcyjnym w celu budowania zaufania do jego zdolności do wytrzymywania turbulentnych, rzeczywistych warunków. Definicja pochodzi od Netflix i Principles of Chaos Engineering (principlesofchaos.org). Historia: Netflix Chaos Monkey (2011) — pierwsze narzędzie chaos engineering, które losowo wyłączało instancje EC2 w celu testowania odporności systemu. Chaos Monkey był częścią większego Simian Army. Dlaczego Netflix: po przejściu do AWS i mikroserwisów, Netflix potrzebował metody testowania odporności rozproszonego systemu. Zamiast odkrywać słabości podczas awarii produkcyjnych, woleli je znajdować proaktywnie. Zasady Chaos Engineering (Principles of Chaos): Buduj hipotezę wokół steady state behavior. Wariuj rzeczywistymi zdarzeniami. Uruchamiaj eksperymenty na produkcji. Automatyzuj eksperymenty ciągle. Minimalizuj promień rażenia (blast radius). Chaos Engineering to NIE: losowe psowanie systemów, sabotaż, testing disaster recovery (to DR/BCP). To ustrukturyzowane eksperymenty z jasno zdefiniowaną hipotezą i oczekiwanym wynikiem.",
  },
  {
    question: "Jak przeprowadzać eksperymenty Chaos Engineering?",
    answer: "Przeprowadzanie eksperymentów Chaos Engineering: Krok 1 — Zdefiniuj Steady State: co to jest normalne działanie systemu? Metryki: latency (p95, p99), error rate, throughput. Steady state = system zachowuje się normalnie według tych metryk. Krok 2 — Sformułuj hipotezę: 'Jeśli wyłączymy jeden node bazy danych, system automatycznie przełączy się na replikę bez zauważalnego wzrostu error rate.' Krok 3 — Zaplanuj eksperyment: wybierz rodzaj chaosu: network failure, latency injection, CPU spike, disk full, process kill, AZ failure. Zacznij MAŁE — staging environment, jeden region, jeden serwis. Krok 4 — Monitorowanie: przygotuj dashboardy przed eksperymentem. Ustal progi zatrzymania eksperymentu (rollback triggers). Krok 5 — Uruchom: zacznij od małego blast radius. Obserwuj metryki w czasie rzeczywistym. Krok 6 — Analiza: czy system zachował się zgodnie z hipotezą? Jeśli nie — znalazłeś słabość. Udokumentuj i napraw. Krok 7 — Automatyzuj: po ręcznym eksperymencie, automatyzuj go w CI/CD pipeline. Gameday: zorganizuj regularne 'gameday' z całym teamem — wspólne symulacje awarii.",
  },
  {
    question: "Jakie są narzędzia Chaos Engineering?",
    answer: "Narzędzia Chaos Engineering: Chaos Monkey (Netflix/OSS): oryginał. Wyłącza losowe EC2 instances. Ograniczony tylko do AWS + Java. Gremlin: komercyjne, enterprise-grade. Attacks: resource (CPU/memory/disk), network (latency/packet loss/DNS), state (process kill, time travel). Scheduling, blast radius controls. Litmus Chaos (CNCF): open-source, Kubernetes-native. ChaosHub z gotowymi eksperymentami. Chaos Experiments as CRDs w Kubernetes. Chaos Mesh (CNCF): open-source, Kubernetes. Workflow-based eksperymenty. Piękny UI dashboard. Wsparcie dla network, pod, stress, IO chaos. AWS Fault Injection Simulator (FIS): managed AWS service. Native integracja z EC2, ECS, EKS, RDS. Brak potrzeby dodatkowego toolingu w AWS. Steadybit: komercyjne, multi-platform. eBPF-based attacks. Policy enforcement — nie pozwól na eksperymenty bez wymaganych SLOs. ChaosBlade (Alibaba): open-source, multi-platform. Bogate w typy ataków (JVM, Docker, K8s, OS-level). Wybór: zacznij od Litmus Chaos lub Chaos Mesh dla K8s. AWS FIS jeśli heavy AWS. Gremlin dla enterprise z budżetem.",
  },
  {
    question: "Chaos Engineering a Game Days i Fire Drills?",
    answer: "Chaos Engineering, Game Days i Fire Drills: Chaos Engineering (ciągłe): automatyczne, regularne eksperymenty w CI/CD lub produkcji. Małe, targetowane. Wyniki idą do dashboardu i alertów. Game Day: zaplanowane ćwiczenie całego zespołu. Większy scope — symulacja poważnej awarii (np. AZ failure, database corruption). Cały team on-call + developers + SREs. Czas: pół dnia do pełnego dnia. Output: blameless post-mortem, lista napraw, runbooks. Fire Drill: test konkretnego procedury recovery. Np. 'czy możemy przywrócić bazę danych z backupu w ciągu 2 godzin?' Bardziej formalny, mierzony test vs. Game Day który jest bardziej 'open-ended'. DiRT (Disaster Recovery Testing) at Google: regularne, planowane testy disaster recovery. Kompleksowe, multi-team. Netflix: przeprowadza regularne Chaos Kong — symulacja całego regionu AWS offline. Jak zacząć: 1. Blameless post-mortems po każdym incydencie — fundamentalne. 2. Pierwsze Game Day na staging. 3. Chaos Monkey na non-critical serwisach. 4. Progresywnie zwiększaj scope gdy zbudujesz zaufanie i narzędzia.",
  },
  {
    question: "Jak zbudować kulturę Chaos Engineering w organizacji?",
    answer: "Budowanie kultury Chaos Engineering: Prerequisity: zanim zaczniesz chaos, musisz mieć: SLOs i SLIs zdefiniowane (wiesz co mierzyć). Observability — distributed tracing, metrics, structured logging. Incident management process — wiesz jak reagować gdy eksperyment pójdzie źle. Blameless culture — ludzie nie boją się błędów i incydentów. Resistance punkty: 'Celowo psujemy system? Jesteśmy szaleni?' Odpowiedź: wolimy znajdować słabości w kontrolowanych warunkach niż podczas prawdziwej awarii. Chaos Engineering zmniejsza, nie zwiększa ryzyko długoterminowo. Buy-in leadership: pokaż ROI — koszt eksperymentu chaos vs. koszt prawdziwej awarii produkcyjnej. Przykład: 1h gameday vs. 4h outage × $X MRR/godzinę. Chaos champions: wyznacz 1-2 osoby jako chaos champions per team. Stopniowe wdrażanie: start with staging → non-critical prod services → critical services. Chaos Engineering Maturity Model (Gremlin): Level 1: ad-hoc, manual. Level 2: structured experiments. Level 3: automated chaos in CI/CD. Level 4: continuous chaos on production. Level 5: org-wide culture. Większość firm powinna dążyć do Level 3-4.",
  },
];

const chaosTypes = [
  { typ: "Network Latency", opis: "Dodaj sztuczne opóźnienie do połączeń sieciowych między serwisami.", cel: "Testuj circuit breakers, timeouty, retry logic" },
  { typ: "Packet Loss", opis: "Symuluj utratę pakietów sieciowych lub całkowite odcięcie sieciowe.", cel: "Graceful degradation, fallback mechanisms" },
  { typ: "Process Kill", opis: "Zabij losowy process lub pod w Kubernetes.", cel: "Testuj auto-restart, health checks, zero-downtime" },
  { typ: "CPU / Memory Stress", opis: "Sztucznie obciąż CPU lub pamięć konkretnego serwisu.", cel: "Autoscaling, resource limits, degraded mode" },
  { typ: "Disk Full", opis: "Zapełnij dysk na konkretnym nodzie lub kontenerze.", cel: "Log rotation, graceful error handling dla storage" },
  { typ: "AZ / Region Failure", opis: "Symuluj awarie całej Availability Zone lub regionu chmury.", cel: "Multi-AZ/multi-region resilience, data replication" },
];

const chaosTools = [
  { narzędzie: "Litmus Chaos", typ: "Open-source", platform: "Kubernetes", wyróżnik: "ChaosHub, CNCF Incubating" },
  { narzędzie: "Chaos Mesh", typ: "Open-source", platform: "Kubernetes", wyróżnik: "Workflow UI, CNCF Incubating" },
  { narzędzie: "AWS FIS", typ: "Managed", platform: "AWS", wyróżnik: "Native AWS, bez agenta" },
  { narzędzie: "Gremlin", typ: "Commercial", platform: "Multi-platform", wyróżnik: "Enterprise, policy controls" },
  { narzędzie: "Chaos Monkey", typ: "Open-source", platform: "AWS/Spinnaker", wyróżnik: "Netflix original, instance kills" },
  { narzędzie: "Steadybit", typ: "Commercial", platform: "Multi-platform", wyróżnik: "eBPF-based, SLO enforcement" },
];

export default function BlogChaosEngineeringCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Chaos Engineering — co to jest i jak wdrożyć w SaaS? | Fotz.pl"
        description="Chaos Engineering: definicja, zasady, typy eksperymentów, narzędzia (Litmus, Chaos Mesh, Gremlin, AWS FIS), Game Days i jak budować kulturę odpornych systemów."
        canonical="https://fotz.pl/blog/chaos-engineering-co-to-jest-jak-wdrozyz"

        keywords="Chaos Engineering co to jest, Chaos Engineering definicja, czym jest Chaos Engineering, Chaos Engineering startup, Chaos Engineering jak liczyć, Chaos Engineering wzór, Chaos Engineering przykłady"

        canonical="https://fotz.pl/blog/chaos-engineering-co-to-jest-jak-wdrozyz"
      />
      <ArticleSchema
        title="Chaos Engineering — co to jest i jak wdrożyć w SaaS?"
        description="Chaos Engineering: zasady, 6 typów eksperymentów, 6 narzędzi, Game Days vs. Fire Drills, budowanie kultury i Chaos Engineering Maturity Model."
        url="https://fotz.pl/blog/chaos-engineering-co-to-jest-jak-wdrozyz"
        datePublished="2024-03-26"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Chaos Engineering", url: "https://fotz.pl/blog/chaos-engineering-co-to-jest-jak-wdrozyz" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Chaos Engineering", url: "/blog/chaos-engineering-co-to-jest-jak-wdrozyz" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              SRE / Reliability
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Chaos Engineering
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Celowo psujesz system zanim on sam się zepsuje.
              Chaos Engineering to dyscyplina budowania odpornych systemów
              przez proaktywne odkrywanie słabości w kontrolowanych warunkach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Twórca", value: "Netflix (2011)" },
                { label: "Typy ataków", value: "6 kategorii" },
                { label: "CNCF tools", value: "Litmus, Mesh" },
                { label: "Podejście", value: "Hypothesis-driven" },
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

      {/* Typy chaosu */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 typów eksperymentów Chaos Engineering</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ chaosu testuje inny aspekt odporności systemu.
              Zacznij od network latency i process kill — najczęstsze scenariusze.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {chaosTypes.map((t) => (
              <FadeInView key={t.typ}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{t.typ}</h3>
                  <p className="text-gray-700 text-sm mb-2">{t.opis}</p>
                  <p className="text-xs text-red-700 font-medium">{t.cel}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Narzędzia */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Narzędzia Chaos Engineering</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór narzędzia zależy od platformy, dojrzałości procesu
              i budżetu organizacji.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="text-left p-3 font-bold text-gray-900">Narzędzie</th>
                  <th className="text-left p-3 font-bold text-gray-900">Typ</th>
                  <th className="text-left p-3 font-bold text-gray-900">Platforma</th>
                  <th className="text-left p-3 font-bold text-gray-900">Wyróżnik</th>
                </tr>
              </thead>
              <tbody>
                {chaosTools.map((t, i) => (
                  <tr key={t.narzędzie} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 font-bold text-gray-900">{t.narzędzie}</td>
                    <td className="p-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        t.typ === "Open-source" ? "bg-green-100 text-green-700" :
                        t.typ === "Managed" ? "bg-blue-100 text-blue-700" :
                        "bg-purple-100 text-purple-700"
                      }`}>{t.typ}</span>
                    </td>
                    <td className="p-3 text-gray-700">{t.platform}</td>
                    <td className="p-3 text-gray-600">{t.wyróżnik}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      <RelatedArticles currentArticleId="chaos-engineering-co-to-jest-jak-wdrozyz" />
      <ContactSection />
    </Layout>
  );
}
