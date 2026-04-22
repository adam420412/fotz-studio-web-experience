import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest SLA (Service Level Agreement)?",
    answer:
      "SLA (Service Level Agreement) to umowa między dostawcą usługi a klientem, definiująca minimalne gwarantowane poziomy jakości usługi — dostępność systemu, czas odpowiedzi, czas rozwiązania incydentów. SLA jest dokumentem zewnętrznym (kontrakt z klientem) i zazwyczaj zawiera kary umowne (credits) gdy nie jest spełniony. To formalne zobowiązanie: 'Gwarantujemy 99.9% uptime w miesiącu, a jeśli nie — otrzymasz zwrot proporcjonalny do przestoju.'",
  },
  {
    question: "Czym różni się SLA od SLO i SLI?",
    answer:
      "SLI (Service Level Indicator) to metryka mierząca aktualny poziom usługi — np. % requestów z latency poniżej 200ms, uptime w danym oknie. SLO (Service Level Objective) to wewnętrzny cel tej metryki — 'chcemy utrzymać 99.9% uptime' — ustalany przez team inżynierski i używany do zarządzania niezawodnością. SLA to zewnętrzny kontrakt z klientem — zazwyczaj bardziej liberalny niż SLO, bo naruszenie SLA powoduje kary finansowe. Hierarchy: SLI (miara) → SLO (cel wewnętrzny) → SLA (kontrakt zewnętrzny).",
  },
  {
    question: "Co oznacza 99.9% uptime SLA?",
    answer:
      "99.9% uptime (three nines) to max 8.7 godzin przestoju w roku (lub 43.8 minut miesięcznie). 99.99% (four nines) — max 52 minuty przestoju rocznie (4.38 min/miesiąc). 99.999% (five nines) — max 5.26 minut przestoju rocznie. Im więcej 'dziewiątek', tym wyższy koszt infrastruktury i tym trudniejszy do osiągnięcia. Większość SaaS B2B gwarantuje 99.9% (three nines). Systemy krytyczne (banking, healthcare) wymagają zazwyczaj 99.99%.",
  },
  {
    question: "Co to jest Error Budget?",
    answer:
      "Error Budget to 'budżet błędów' — ilość przestoju lub błędów którą możesz sobie pozwolić w danym oknie czasowym, by nie naruszyć SLO. Jeśli SLO = 99.9% uptime miesięcznie, error budget = 0.1% = 43.8 minut awarii/miesiąc. Koncepcja z Google SRE: jeśli error budget jest 'zielony' — team może szybciej wdrażać zmiany i features. Jeśli error budget jest 'czerwony' — należy zamrozić wdrożenia i skupić się na niezawodności. Error budget definiuje równowagę między szybkością a niezawodnością.",
  },
  {
    question: "Jak mierzyć compliance z SLA?",
    answer:
      "Kluczowe elementy: monitoring 24/7 (Datadog, New Relic, Grafana, PagerDuty), jasna definicja co liczy się jako 'downtime' (planned maintenance exclusions?), rolling window vs. calendar month, process raportowania do klientów, automated alerts gdy zbliżamy się do limitu error budget. Ważne: SLA monitoring powinien być niezależny od systemu który monitoruje — użyj zewnętrznych narzędzi (StatusPage, Pingdom) aby uniknąć konfliktu interesów.",
  },
];

const slaTiers = [
  { poziom: "99% (two nines)", roczny_downtime: "87.6 godzin", miesięczny_downtime: "7.3 godziny", dla: "Niekrytyczne systemy wewnętrzne, early-stage startupy" },
  { poziom: "99.9% (three nines)", roczny_downtime: "8.7 godzin", miesięczny_downtime: "43.8 minut", dla: "Standardowy SaaS B2B, platformy e-commerce" },
  { poziom: "99.95%", roczny_downtime: "4.38 godzin", miesięczny_downtime: "21.9 minut", dla: "Premium SaaS, enterprise tier" },
  { poziom: "99.99% (four nines)", roczny_downtime: "52.6 minut", miesięczny_downtime: "4.38 minut", dla: "Systemy finansowe, healthcare, enterprise krytyczny" },
  { poziom: "99.999% (five nines)", roczny_downtime: "5.26 minut", miesięczny_downtime: "25.9 sekund", dla: "Infrastruktura telekomunikacyjna, systemy krytyczne" },
];

const sloComponents = [
  { komponent: "SLI (Indicator)", opis: "Co mierzymy?", przykład: "% requestów zakończonych sukcesem (HTTP 2xx) w ciągu ostatnich 30 minut", narzędzia: "Prometheus, Datadog, CloudWatch" },
  { komponent: "SLO (Objective)", opis: "Jaki jest nasz cel?", przykład: "99.9% requestów zakończonych sukcesem w 28-dniowym rolling window", narzędzia: "Wewnętrzne dashboardy, Nobl9, SLO24" },
  { komponent: "Error Budget", opis: "Ile możemy sobie pozwolić?", przykład: "0.1% = 40 minut awarii na 28 dni. Gdy zużyte — freeze deployment, focus na reliability", narzędzia: "Error Budget dashboardy, burndown alerts" },
  { komponent: "SLA (Agreement)", opis: "Co gwarantujemy klientom?", przykład: "99.9% uptime miesięcznie lub credit 10% faktury za każdy % poniżej progu", narzędzia: "StatusPage, contract templates, credit system" },
];

const incidentPriorities = [
  { priorytet: "P0 — Critical", opis: "System całkowicie niedostępny, wpływ na wszystkich klientów", czas_odpowiedzi: "15 minut", czas_rozwiązania: "1 godzina", przykład: "Całkowita awaria API, login niemożliwy" },
  { priorytet: "P1 — High", opis: "Poważna degradacja usługi, wpływ na znaczącą część klientów", czas_odpowiedzi: "30 minut", czas_rozwiązania: "4 godziny", przykład: "Payment flow broken, data export nie działa" },
  { priorytet: "P2 — Medium", opis: "Częściowa degradacja, istnieje workaround", czas_odpowiedzi: "2 godziny", czas_rozwiązania: "24 godziny", przykład: "Wolne generowanie raportów, błędy w konkretnym module" },
  { priorytet: "P3 — Low", opis: "Drobny problem, minimalne/brak wpływu na produktywność", czas_odpowiedzi: "8 godzin", czas_rozwiązania: "72 godziny", przykład: "Błąd literówki, niedziałająca animacja, edge case" },
];

export default function BlogSlaCoTo() {
  return (
    <Layout>
      <SEOHead
        title="SLA, SLO, SLI | Fotz Studio"
        description="SLA, SLO, SLI — definicje, różnice, tabela dostępności (99.9% vs 99.99%), Error Budget i priorytety incydentów (P0-P3). Kompletny przewodnik po…"
        canonical="https://fotz.pl/blog/sla-slo-sli-co-to"

        keywords="SLA, SLO, SLI co to jest, SLA, SLO, SLI definicja, czym jest SLA, SLO, SLI, SLA, SLO, SLI przykłady, jak działa SLA, SLO, SLI, SLA, SLO, SLI znaczenie, SLA, SLO, SLI przewodnik"

        canonical="https://fotz.pl/blog/sla-slo-sli-co-to"
      />
      <ArticleSchema
        title="SLA, SLO, SLI — co to jest i jak zarządzać poziomami usług?"
        description="Kompletny przewodnik po SLA, SLO i SLI: definicje, tabela uptime, Error Budget, priorytety incydentów i narzędzia do monitorowania."
        url="https://fotz.pl/blog/sla-slo-sli-co-to"
        datePublished="2024-01-22"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "SLA, SLO, SLI", url: "https://fotz.pl/blog/sla-slo-sli-co-to" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "SLA, SLO, SLI", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            SLA, SLO, SLI — co to jest i jak zarządzać niezawodnością?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            SLA to kontrakt z klientem. SLO to cel wewnętrzny. SLI to metryka. Error Budget to równowaga.
            Poznaj framework zarządzania niezawodnością usług technologicznych.
          </p>
        </div>
      </section>

      {/* Definicje */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">SLI → SLO → Error Budget → SLA</h2>
            <div className="space-y-4">
              {sloComponents.map((c, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-center">
                      <div className="bg-orange-600 text-white text-sm font-bold rounded-lg px-3 py-2 mb-1">{c.komponent.split(" ")[0]}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{c.komponent} — {c.opis}</h3>
                      <p className="text-slate-600 text-sm mb-2 italic">{c.przykład}</p>
                      <div className="bg-orange-50 rounded p-2 text-xs text-orange-700">
                        <span className="font-semibold">Narzędzia: </span>{c.narzędzia}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Tabela uptime */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Tabela dostępności — ile to godzin?</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Poziom SLA</th>
                    <th className="p-3 text-left">Roczny downtime</th>
                    <th className="p-3 text-left">Miesięczny downtime</th>
                    <th className="p-3 text-left">Dla kogo?</th>
                  </tr>
                </thead>
                <tbody>
                  {slaTiers.map((t, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-orange-700">{t.poziom}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.roczny_downtime}</td>
                      <td className="p-3 text-slate-600 text-sm">{t.miesięczny_downtime}</td>
                      <td className="p-3 text-slate-500 text-sm">{t.dla}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Priorytety incydentów */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Priorytety incydentów P0-P3</h2>
            <div className="space-y-3">
              {incidentPriorities.map((p, i) => (
                <div key={i} className={`rounded-xl p-5 border ${i === 0 ? "bg-red-50 border-red-200" : i === 1 ? "bg-orange-50 border-orange-200" : i === 2 ? "bg-yellow-50 border-yellow-200" : "bg-slate-50 border-slate-200"}`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-bold text-slate-900">{p.priorytet}</h3>
                    <div className="flex gap-2 text-xs flex-shrink-0">
                      <span className="bg-white border rounded px-2 py-1">Odpowiedź: {p.czas_odpowiedzi}</span>
                      <span className="bg-white border rounded px-2 py-1">Rozwiązanie: {p.czas_rozwiązania}</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-1">{p.opis}</p>
                  <p className="text-slate-500 text-xs italic">Przykład: {p.przykład}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — SLA, SLO, SLI</h2>
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

      <RelatedArticles currentArticleId="sla-slo-sli-co-to" />
      <ContactSection />
    </Layout>
  );
}
