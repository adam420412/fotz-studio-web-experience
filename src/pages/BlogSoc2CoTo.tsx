import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest SOC 2?",
    answer: "SOC 2 (System and Organization Controls 2) to standard audytowy opracowany przez AICPA (American Institute of Certified Public Accountants) oceniający jak organizacja zarządza bezpieczeństwem danych klientów. SOC 2 opiera się na 5 Trust Service Criteria (TSC): Security (wymagane zawsze), Availability, Processing Integrity, Confidentiality, Privacy. Raport SOC 2 wystawiany jest przez niezależnego audytora (CPA). SOC 2 Type I: ocenia kontrole w konkretnym momencie czasu (jak wyglądają procedury). SOC 2 Type II: ocenia czy kontrole działały przez cały okres (zazwyczaj 6-12 miesięcy). Type II jest bardziej wartościowy — pokazuje że bezpieczeństwo to operacja ciągła, nie jednorazowe działanie. Dla firm SaaS sprzedających do enterprise — SOC 2 jest de facto standardem wymaganym przez działy zakupów i bezpieczeństwa klientów.",
  },
  {
    question: "Dlaczego SOC 2 jest ważny dla startupów SaaS?",
    answer: "Dlaczego SOC 2: Enterprise klienci wymagają — security questionnaire każdego nowego vendora zawiera pytanie 'Czy posiadacie SOC 2?'. Brak SOC 2 to często deal-breaker dla Fortune 500. Buduje zaufanie — SOC 2 to zewnętrzna walidacja że poważnie podchodzisz do bezpieczeństwa. Redukuje czas sprzedaży — zamiast wypełniać każdy custom security questionnaire, możesz wysłać raport SOC 2. Wymagany przy przejęciach (M&A) — due diligence przy sprzedaży firmy zawsze uwzględnia security posture. Regulatory compliance — SOC 2 pomaga w spełnieniu wymagań GDPR, HIPAA (jeśli health data), PCI DSS. Kiedy zacząć: przed Series A (jeśli sprzedajesz enterprise) lub gdy pierwsi klienci enterprise proszą o security questionnaire. Typowo 6-12 miesięcy do uzyskania Type II.",
  },
  {
    question: "Jakie są 5 Trust Service Criteria SOC 2?",
    answer: "Trust Service Criteria: Security (CC — Common Criteria) — WYMAGANE zawsze. Ochrona systemu przed nieautoryzowanym dostępem. Obejmuje: access control, encryption, monitoring, incident response, change management, risk assessment. Availability — system dostępny do operacji zgodnie z zobowiązaniami. Mierzalne SLA, monitoring uptime, disaster recovery. Processing Integrity — przetwarzanie jest kompletne, dokładne, aktualne i autoryzowane. Ważne dla systemów finansowych i płatniczych. Confidentiality — informacje oznaczone jako poufne są chronione. NDA, enkrypcja data at rest, data classification. Privacy — dane osobowe zbierane, używane i przechowywane zgodnie z polityką prywatności. Powiązane z GDPR. Większość startupów zaczyna od Security + Confidentiality + Availability (tzw. Security triad).",
  },
  {
    question: "Jak przebiega proces uzyskania SOC 2?",
    answer: "Proces SOC 2: Gap Assessment (1-2 miesiące) — audytor lub internal team ocenia aktualny stan bezpieczeństwa vs. wymagania SOC 2. Identyfikuje gaps które trzeba zamknąć przed audytem. Remediation (3-6 miesięcy) — implementacja brakujących kontroli: MFA, access reviews, logging, vulnerability scanning, incident response plan, security training. Observation Period (6-12 miesięcy) — dla Type II audytor musi obserwować jak kontrole działają przez cały okres. W tym czasie zbierane są evidence (logi, raporty, przeglądy). Audit (1-3 miesiące) — audytor zbiera evidence, przeprowadza wywiady, weryfikuje kontrole. Raport — audytor wystawia raport z opinion (Qualified lub Unqualified). Unqualified = clean report = sukces. Cały proces: 12-18 miesięcy od startu do Type II. Koszt: 30-150K USD zależnie od złożoności organizacji.",
  },
  {
    question: "Jakie narzędzia pomagają w SOC 2?",
    answer: "Narzędzia do SOC 2 compliance: Compliance automation platforms — Vanta, Drata, Secureframe, Tugboat Logic. Automatyzują zbieranie evidence, monitorują kontrole w czasie rzeczywistym, generują raporty dla audytorów. Koszt: 10-30K USD/rok ale oszczędzają setki godzin pracy. Vulnerability scanning — Qualys, Tenable, Snyk (dla kodu). Identity Management — Okta, Azure AD dla SSO, MFA i access management. SIEM (Security Information and Event Management) — Splunk, Sumo Logic, Datadog Security. Penetration testing — HackerOne, Cobalt, Synack. Roczny pentest jest często wymagany przez audytorów. Employee security training — KnowBe4, Proofpoint Security Awareness. Phishing simulations. Policy management — Drata, Vanta lub Notion/Confluence dla dokumentowania polityk security.",
  },
];

const soc2Controls = [
  {
    obszar: "Access Control",
    kontrole: ["MFA wymagane dla wszystkich systemów", "Least-privilege access (minimalny wymagany dostęp)", "Quarterly access reviews", "Offboarding checklist (odbiór dostępów przy odejściu)"],
    kolor: "blue",
  },
  {
    obszar: "Encryption",
    kontrole: ["Data at rest: AES-256 encryption", "Data in transit: TLS 1.2+", "Database encryption", "Key management (AWS KMS, HashiCorp Vault)"],
    kolor: "green",
  },
  {
    obszar: "Monitoring & Alerting",
    kontrole: ["Centralized logging (SIEM)", "Security alerts na anomalie", "Uptime monitoring (SLA tracking)", "Audit logs przechowywane min 1 rok"],
    kolor: "purple",
  },
  {
    obszar: "Change Management",
    kontrole: ["Code review wymagany przed merge", "Staging environment przed production", "Rollback procedures", "Change requests documentowane"],
    kolor: "orange",
  },
  {
    obszar: "Incident Response",
    kontrole: ["Incident Response Plan (IRP) udokumentowany", "Security incidents reportowane w 24-72h", "Postmortem po każdym incydencie", "Annual incident response exercises"],
    kolor: "red",
  },
  {
    obszar: "Vendor Management",
    kontrole: ["Security assessment nowych vendorów", "Umowy z vendorami zawierają security clauses", "Lista approved vendors", "Annual vendor review"],
    kolor: "teal",
  },
];

const soc2Timeline = [
  { faza: "Gap Assessment", czas: "1-2 mies.", opis: "Ocena aktualnego stanu vs. wymagania SOC 2. Identyfikacja gaps do zamknięcia." },
  { faza: "Remediation", czas: "3-6 mies.", opis: "Implementacja brakujących kontroli, pisanie polityk, szkolenie pracowników." },
  { faza: "Type I Audit", czas: "1-2 mies.", opis: "Opcjonalny: audyt punktowy pokazujący że kontrole są wdrożone. Szybszy, tańszy." },
  { faza: "Observation Period", czas: "6-12 mies.", opis: "Kontrole muszą działać przez cały okres. Zbieranie evidence na bieżąco." },
  { faza: "Type II Audit", czas: "1-3 mies.", opis: "Główny audyt: weryfikacja evidence, wywiady, raport z opinią audytora." },
];

export default function BlogSoc2CoTo() {
  return (
    <Layout>
      <SEOHead
        title="SOC 2 — co to jest i jak uzyskać certyfikację? | Fotz.pl"
        description="SOC 2 compliance dla startupów SaaS: Trust Service Criteria, Type I vs Type II, proces certyfikacji, narzędzia (Vanta, Drata) i jak przygotować się do audytu."
        canonicalUrl="https://fotz.pl/blog/soc2-compliance-co-to-jest-jak-uzyskac-startup"

        keywords="SOC 2 co to jest, SOC 2 definicja, czym jest SOC 2, SOC 2 przykłady, jak działa SOC 2, SOC 2 znaczenie, SOC 2 przewodnik"
      />
      <ArticleSchema
        title="SOC 2 — co to jest i jak uzyskać certyfikację?"
        description="SOC 2 compliance: Trust Service Criteria, Type I vs Type II, timeline 12-18 miesięcy, kluczowe kontrole i narzędzia do automatyzacji compliance dla SaaS startupów."
        url="https://fotz.pl/blog/soc2-compliance-co-to-jest-jak-uzyskac-startup"
        datePublished="2024-02-25"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SOC 2 Compliance", url: "https://fotz.pl/blog/soc2-compliance-co-to-jest-jak-uzyskac-startup" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "SOC 2", href: "/blog/soc2-compliance-co-to-jest-jak-uzyskac-startup" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security &amp; Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SOC 2 Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Enterprise klient pyta "Czy macie SOC 2?" — i nie ma dobrej
              odpowiedzi poza "tak, mamy Type II od zewnętrznego audytora".
              Jak uzyskać certyfikację i co to naprawdę oznacza?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Czas do Type II", value: "12-18 mies." },
                { label: "Koszt certyfikacji", value: "30-150K USD" },
                { label: "Trust Criteria", value: "5 (Security obowiązkowe)" },
                { label: "Audytor", value: "CPA / licencjonowany" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-slate-300">{s.value}</div>
                  <div className="text-sm text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Timeline procesu SOC 2</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              SOC 2 Type II to 12-18 miesięcy od decyzji do raportu.
              Planuj z wyprzedzeniem jeśli enterprise klienci zaczynają pytać.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {soc2Timeline.map((t, i) => (
              <FadeInView key={t.faza}>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="bg-slate-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">{i + 1}</div>
                    {i < soc2Timeline.length - 1 && <div className="w-0.5 bg-slate-200 flex-1 mt-2" />}
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex-1 mb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-800">{t.faza}</h3>
                      <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">{t.czas}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{t.opis}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe obszary kontroli SOC 2</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jakie konkretne kontrole muszą istnieć i być udokumentowane
              aby przejść audyt SOC 2 Security criterion.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {soc2Controls.map((c) => (
              <FadeInView key={c.obszar}>
                <div className={`rounded-xl border-2 p-5 h-full ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  c.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-base mb-3 ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "green" ? "text-green-800" :
                    c.kolor === "purple" ? "text-purple-800" :
                    c.kolor === "orange" ? "text-orange-800" :
                    c.kolor === "red" ? "text-red-800" :
                    "text-teal-800"
                  }`}>{c.obszar}</h3>
                  <ul className="space-y-1">
                    {c.kontrole.map((k) => (
                      <li key={k} className="text-sm text-gray-700 flex gap-2">
                        <span className="text-green-500 flex-shrink-0">✓</span>
                        <span>{k}</span>
                      </li>
                    ))}
                  </ul>
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
