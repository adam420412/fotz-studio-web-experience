import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Data Governance?",
    answer: "Data Governance (ład danych) to zbiór zasad, procesów, ról i narzędzi które zapewniają że dane w organizacji są dokładne, dostępne, spójne, bezpieczne i zgodne z regulacjami. To odpowiedź na pytanie: kto jest właścicielem danych, kto może je czytać/modyfikować, jak są definiowane i jaka jest ich jakość. Dlaczego Data Governance jest konieczne: Bez governance każdy dział rozumie 'klienta' inaczej. Marketing liczy leady, Sales aktywne okazje, Finance płacących — bez governance nie możesz porównywać danych. Compliance — GDPR, HIPAA, PCI-DSS wymagają documented data governance. Zaufanie do danych — decyzje biznesowe są tak dobre jak dane na których się opierają. Kluczowe elementy: Data Catalog — inwentaryzacja i dokumentacja zasobów danych. Data Lineage — skąd dane pochodzą, jak się transformują. Data Quality — reguły jakości i monitoring. Data Stewardship — role odpowiedzialne za dane w domenach. Access Control — kto może co zrobić z danymi.",
  },
  {
    question: "Jakie są kluczowe role w Data Governance?",
    answer: "Role w Data Governance: Chief Data Officer (CDO) — C-level odpowiedzialny za strategię danych w całej organizacji. Trend: CDO staje się standardem w firmach 500+. Data Governance Council — komitet strategiczny ustalający polityki i standardy. Zazwyczaj: CDO + business owners + IT leadership + compliance. Data Steward — osoba biznesowa odpowiedzialna za jakość i definicję danych w swojej domenie. Np. 'Customer Data Steward' w Sales. Data Owner — executive sponsor z accountability za konkretny domain (np. VP Sales jest data owner dla danych sprzedażowych). Data Custodian — IT/engineering odpowiedzialny za techniczną implementację: storage, security, backup. Data Quality Manager — monitoruje jakość danych, definiuje reguły, raportuje anomalie. Privacy Officer (DPO) — Data Protection Officer, wymagany przez GDPR. Odpowiada za compliance z regulacjami. W małych organizacjach: te role mogą być łączone. Minimum viable governance: jeden Data Steward per domena + Data Owner + CDO lub Head of Data.",
  },
  {
    question: "Co to jest Data Catalog i jak go wdrożyć?",
    answer: "Data Catalog to centralne repozytorium metadanych — inwentarz wszystkich zasobów danych organizacji z opisami, właścicielami, schematami, lineage i regułami jakości. Zawartość katalogu: Datasets i tabele z opisem, kolumnami, typami. Właściciel i steward każdego zasobu. Lineage — skąd dane przyszły, dokąd idą. Business glossary — definicje terminu biznesowego ('aktywny klient' = klient z transakcją w ciągu 90 dni). Data quality scores i SLA. Tags i klasyfikacje (PII, confidential, public). Typy katalogów: Techniczne (automatyczny crawl metadanych): Apache Atlas, OpenMetadata, DataHub. Biznesowe (manual + auto): Collibra, Alation, Atlan. Cloud-native: Google Data Catalog, AWS Glue, Azure Purview. Jak wdrożyć: Zacznij od krytycznych domen (Finance, Customer). Zautomatyzuj crawling metadanych. Dodaj business context (opisy, ownerzy). Wbuduj w data workflow (nie jako osobny projekt). Sukces = aktywne użycie przez analityków i data scientists — nie tylko compliance artifact.",
  },
  {
    question: "Jak zarządzać jakością danych (Data Quality)?",
    answer: "Data Quality Management: Wymiary jakości danych: Completeness — czy wszystkie wymagane pola są wypełnione? Email bez @ = incomplete. Accuracy — czy dane odzwierciedlają rzeczywistość? Adres klienta sprzed 5 lat może być nieaktualny. Consistency — czy dane są spójne między systemami? Customer ID w CRM vs. billing vs. analytics. Timeliness — czy dane są aktualne? Dashboard z danymi sprzed 3 dni = nieużywalny dla operacji. Uniqueness — czy nie ma duplikatów? Jeden klient jako 3 rekordy w bazie. Validity — czy dane są w poprawnym formacie? Data urodzenia: 32.13.2025 = invalid. Implementacja: Profiling — automatyczne skanowanie danych pod kątem anomalii (null rates, value distributions). Rules — zdefiniowane reguły jakości (email musi zawierać @). Monitoring — ciągłe alerty gdy reguła jest naruszona. Remediation — procesy naprawy złych danych. Narzędzia: Great Expectations (open-source, Python), dbt tests, Monte Carlo (SaaS monitoring), Soda, Talend Data Quality.",
  },
  {
    question: "Jaki jest związek Data Governance z GDPR i compliance?",
    answer: "Data Governance a compliance: GDPR (General Data Protection Regulation) wymaga: Dokumentacji jakie dane osobowe są przetwarzane (Record of Processing Activities — ROPA). Podstawy prawnej przetwarzania (consent, legitimate interest, contract). Prawa podmiotów: prawo dostępu, prawo do bycia zapomnianym, prawo do przenoszenia danych. Data Governance dostarcza: Data Catalog — wiesz jakie dane masz i gdzie są. Data Lineage — możesz pokazać jak dane osobowe przepływają przez systemy. Klasyfikacja danych (PII tagging) — wiesz które dane są objęte GDPR. Access Control — tylko uprawnione osoby mają dostęp do danych osobowych. Retention policies — automatyczne usuwanie danych po wygaśnięciu okresu retencji. Inne regulacje obsługiwane przez governance: HIPAA (dane medyczne USA), PCI-DSS (dane kart płatniczych), SOX (dane finansowe). Koszt braku governance: GDPR kary do 4% globalnego obrotu lub 20M EUR. Meta: kara 1.2 mld EUR w 2023.",
  },
];

const governanceComponents = [
  { komponent: "Data Catalog", opis: "Centralne repozytorium metadanych — inwentarz wszystkich zasobów danych", narzędzia: "DataHub, Apache Atlas, Collibra, Alation, Atlan", kolor: "blue" },
  { komponent: "Business Glossary", opis: "Jednolita definicja terminów biznesowych — co znaczy 'aktywny klient'?", narzędzia: "Część data catalog lub standalone (Confluence, Notion z template)", kolor: "green" },
  { komponent: "Data Lineage", opis: "Genealogia danych — skąd przyszły, jakie transformacje przeszły, gdzie idą", narzędzia: "OpenLineage, Marquez, Amundsen, wbudowane w Spark/dbt", kolor: "purple" },
  { komponent: "Data Quality", opis: "Reguły jakości, monitoring i alerty dla anomalii w danych", narzędzia: "Great Expectations, Soda, Monte Carlo, dbt tests", kolor: "orange" },
  { komponent: "Access Control", opis: "Kto może czytać, modyfikować i usuwać które dane", narzędzia: "Apache Ranger, AWS Lake Formation, Immuta, Privacera", kolor: "teal" },
  { komponent: "Data Stewardship", opis: "Procesy i role dla business ownership danych w domenach", narzędzia: "Procesy organizacyjne, RACI matrix, data steward program", kolor: "red" },
];

const maturityLevels = [
  { poziom: "Initial", opis: "Brak formalnego governance. Dane w silosach, różne definicje w każdym dziale. Compliance ryzyko.", kolor: "red" },
  { poziom: "Managed", opis: "Podstawowy data catalog, zdefiniowani data stewards, podstawowe reguły jakości dla krytycznych danych.", kolor: "orange" },
  { poziom: "Defined", opis: "Pełny katalog, business glossary, lineage dla kluczowych pipeline'ów, automatyczny quality monitoring.", kolor: "yellow" },
  { poziom: "Quantitatively Managed", opis: "KPI dla jakości danych, SLA na freshness i accuracy, governance wbudowane w CI/CD pipeline'y danych.", kolor: "green" },
];

export default function BlogDataGovernanceCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Data Governance — co to jest i jak wdrożyć ład danych? | Fotz.pl"
        description="Data Governance: role (CDO, Data Steward), Data Catalog, Business Glossary, Data Quality, Data Lineage, compliance z GDPR i narzędzia (DataHub, Collibra, Great Expectations)."
        canonicalUrl="https://fotz.pl/blog/data-governance-co-to-jest-jak-wdrozyz-lad-danych"

        keywords="Data Governance co to jest, Data Governance definicja, czym jest Data Governance, Data Governance przykłady, jak działa Data Governance, Data Governance znaczenie, Data Governance przewodnik"
      />
      <ArticleSchema
        title="Data Governance — co to jest i jak wdrożyć ład danych?"
        description="Data Governance: komponenty (Data Catalog, Lineage, Quality, Access Control), role (CDO, Data Steward), poziomy dojrzałości i związek z GDPR compliance."
        url="https://fotz.pl/blog/data-governance-co-to-jest-jak-wdrozyz-lad-danych"
        datePublished="2024-03-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Data Governance", url: "https://fotz.pl/blog/data-governance-co-to-jest-jak-wdrozyz-lad-danych" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Data Governance", href: "/blog/data-governance-co-to-jest-jak-wdrozyz-lad-danych" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Data Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Governance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kto jest właścicielem danych? Co znaczy 'aktywny klient'?
              Skąd pochodzi ta liczba w raporcie?
              Data Governance odpowiada na te pytania zanim staną się problemem.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kluczowa rola", value: "Data Steward" },
                { label: "Inwentarz", value: "Data Catalog" },
                { label: "Regulacja", value: "GDPR / HIPAA" },
                { label: "Narzędzie", value: "DataHub" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-blue-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 komponentów Data Governance</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Kompletny ład danych składa się z sześciu kluczowych elementów
              które razem zapewniają jakość, bezpieczeństwo i compliance.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {governanceComponents.map((c) => (
              <FadeInView key={c.komponent}>
                <div className={`rounded-xl border-2 p-5 ${
                  c.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  c.kolor === "green" ? "border-green-200 bg-green-50" :
                  c.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  c.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  c.kolor === "teal" ? "border-teal-200 bg-teal-50" :
                  "border-red-200 bg-red-50"
                }`}>
                  <h3 className={`font-bold text-base mb-2 ${
                    c.kolor === "blue" ? "text-blue-800" :
                    c.kolor === "green" ? "text-green-800" :
                    c.kolor === "purple" ? "text-purple-800" :
                    c.kolor === "orange" ? "text-orange-800" :
                    c.kolor === "teal" ? "text-teal-800" :
                    "text-red-800"
                  }`}>{c.komponent}</h3>
                  <p className="text-gray-700 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-gray-500"><span className="font-semibold">Narzędzia: </span>{c.narzędzia}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Dojrzałość */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Poziomy dojrzałości Data Governance</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Większość firm startuje na poziomie Initial. Cel to osiągnięcie
              poziomu Defined — gdzie governance realnie wspiera decyzje biznesowe.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {maturityLevels.map((l) => (
              <FadeInView key={l.poziom}>
                <div className={`rounded-xl border-2 p-5 ${
                  l.kolor === "red" ? "border-red-200 bg-red-50" :
                  l.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  l.kolor === "yellow" ? "border-yellow-200 bg-yellow-50" :
                  "border-green-200 bg-green-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-bold flex-shrink-0 ${
                      l.kolor === "red" ? "bg-red-500" :
                      l.kolor === "orange" ? "bg-orange-500" :
                      l.kolor === "yellow" ? "bg-yellow-500" :
                      "bg-green-600"
                    }`}>{l.poziom}</span>
                    <p className="text-gray-700 text-sm">{l.opis}</p>
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
