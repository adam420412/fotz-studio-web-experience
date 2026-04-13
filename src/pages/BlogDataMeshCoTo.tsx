import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Data Mesh?",
    answer: "Data Mesh to zdecentralizowane podejście do architektury danych, gdzie odpowiedzialność za dane jest przenoszona z centralnego zespołu data engineering do domein biznesowych które te dane produkują i najlepiej rozumieją. Stworzone przez Zhamak Dehghani (Thoughtworks, 2019). Problem z centralną architekturą danych: jeden centralny data lake/warehouse → jedno wąskie gardło → data engineers nie rozumieją domeny → dane są złej jakości → business teams czekają tygodniami. Data Mesh odpowiada: Distributed ownership — każda domena (Sales, Marketing, Product) jest właścicielem swoich danych. Data as a Product — dane traktowane jak produkt z właścicielem, SLA, dokumentacją. Self-serve platform — infrastruktura danych jest shared platformą, ale łatwa w użyciu. Federated governance — globalne standardy przy lokalnej autonomii. Data Mesh to filozofia organizacyjna, nie narzędzie techniczne. Wdrożenie wymaga zmian kulturowych i organizacyjnych.",
  },
  {
    question: "Jakie są 4 zasady Data Mesh?",
    answer: "4 zasady Data Mesh według Zhamak Dehghani: 1. Domain Ownership — dane należą do domeny która je produkuje. Zespół Sales jest właścicielem danych o sprzedaży. Decentralizacja odpowiedzialności eliminuje wąskie gardło centralnego data team. 2. Data as a Product — każdy zestaw danych jest produktem z: właścicielem (data product owner), dokumentacją, SLA (freshness, quality), API/interface dla konsumentów, discovery catalog. 3. Self-serve Data Platform — centralna platforma techniczna która umożliwia domenowym teamom samodzielne publikowanie i konsumowanie danych bez potrzeby centralnego wsparcia. Abstrakcje: storage, compute, lineage, catalog. 4. Federated Computational Governance — standardy interoperabilności (formaty, schemy, security) ustalane centralnie, ale implementowane lokalnie przez domeny. Bez governance: mesh staje się chaosem. Wyzwanie: balans między autonomią a standardami.",
  },
  {
    question: "Data Mesh vs. Data Lake vs. Data Warehouse — różnice?",
    answer: "Porównanie: Data Warehouse — scentralizowany, historyczny, strukturyzowany, batch processing. Świetny dla raportowania i BI. Wąskie gardło: centralny ETL team. Data Lake — scentralizowany, surowe dane wszystkich formatów, cheap storage. Często staje się 'data swamp' bez governance. Data Lakehouse — hybryda warehouse i lake: ACID transakcje na raw data (Delta Lake, Apache Iceberg). Wciąż scentralizowany. Data Mesh — zdecentralizowany. Każda domena ma własne data products. Brak centralnego wąskiego gardła. Wymaga dojrzałości organizacyjnej. Kiedy Data Mesh: Duże organizacje (100+ data consumers). Wiele domen biznesowych z unikalnymi potrzebami. Centralny data team jest wąskim gardłem. Problemy z jakością danych — producenci nie czują odpowiedzialności. Kiedy Data Lake/Warehouse: Mała organizacja, jeden centralny team. Proste reporting needs. Mała liczba data sources. Brak dojrzałości inżynieryjnej w domenach.",
  },
  {
    question: "Jak wdrożyć Data Mesh w organizacji?",
    answer: "Wdrożenie Data Mesh: Ocena gotowości — czy organizacja ma wystarczającą dojrzałość techniczną i kulturową? Data Mesh wymaga domain teams które mogą budować data products samodzielnie. Identyfikacja domen — zdefiniuj granice domenowe (Domain-Driven Design pomaga). Każda domena = autonomiczna jednostka z własnymi danymi. Zbudowanie Self-serve Platform — platforma musi być na tyle prosta, że domain engineers (niekoniecznie data specjaliści) mogą z niej korzystać: storage, compute, catalog, monitoring, lineage. Pilotażowa domena — zacznij od jednej dobre dojrzałej domeny. Zbuduj pierwszy data product. Naucz się i iteruj. Federated governance — zdefiniuj standardy: formaty plików (Parquet, Avro), schemat metadata, access control, data quality metrics. Stopniowe skalowanie — kolejne domeny adoptują mesh. Narzędzia wspierające: Data Catalog (Apache Atlas, DataHub, Collibra), Data Platform (Databricks, Snowflake, BigQuery), Orchestration (Airflow, dbt), Observability (Monte Carlo, Great Expectations).",
  },
  {
    question: "Jakie są wyzwania Data Mesh?",
    answer: "Wyzwania wdrożenia Data Mesh: Organizacyjne (najtrudniejsze): Domeny muszą przyjąć odpowiedzialność za dane — zmiana kultury i KPI. Potrzeba data engineers w każdej domenie — duże koszty. Management musi rozumieć i wspierać decentralizację. Techniczne: Interoperabilność — dane z różnych domen muszą być łatwo łączone. Wymaga standaryzacji. Self-serve platform — zbudowanie platformy która jest użyteczna dla non-data-engineers jest trudne. Federated governance — globalnie spójne standardy przy lokalnej autonomii. Duplicate infrastructure — każda domena buduje swoje pipeline'y = redundancja. Discovery — jak znajdować dane w zdecentralizowanym środowisku? (data catalog kluczowy). Kiedy Data Mesh się nie opłaca: Małe organizacje (poniżej 50 osób w data). Brak domain ownership culture. Brak budget na platformę i domain data engineers. Zaczynasz od zera — najpierw zbuduj data warehouse, potem rozważ mesh.",
  },
];

const dataMeshPrinciples = [
  {
    zasada: "Domain Ownership",
    numer: "1",
    opis: "Domeny biznesowe (Sales, Marketing, Product) są właścicielami i producentami swoich danych. Eliminuje wąskie gardło centralnego data team.",
    implikacja: "Każda domena potrzebuje własnych data engineers i data product owners.",
    kolor: "blue",
  },
  {
    zasada: "Data as a Product",
    numer: "2",
    opis: "Dane traktowane jak produkt: właściciel, SLA (freshness, quality), dokumentacja, API, versioning.",
    implikacja: "Data Product Owner odpowiada za jakość i dostępność danych jak PM za software.",
    kolor: "green",
  },
  {
    zasada: "Self-serve Data Platform",
    numer: "3",
    opis: "Centralna infrastruktura techniczna umożliwiająca domenowym teamom samodzielne publikowanie i konsumowanie danych.",
    implikacja: "Platform team buduje 'data infrastructure as a service'. Domeny nie zarządzają infrastrukturą.",
    kolor: "purple",
  },
  {
    zasada: "Federated Governance",
    numer: "4",
    opis: "Globalne standardy interoperabilności ustalane centralnie, implementowane lokalnie. Autonomia z guardrails.",
    implikacja: "Data governance council ustala standardy. Domeny mają autonomię w implementacji.",
    kolor: "orange",
  },
];

const dataProductAttributes = [
  { atrybut: "Discoverable", opis: "Zarejestrowany w data catalog, łatwy do znalezienia" },
  { atrybut: "Addressable", opis: "Stały adres (URL, endpoint) niezależny od implementacji" },
  { atrybut: "Trustworthy", opis: "SLA na freshness, completeness, accuracy z monitoringiem" },
  { atrybut: "Self-describing", opis: "Dokumentacja, schemat, ownership, lineage dostępne inline" },
  { atrybut: "Interoperable", opis: "Standardowe formaty (Parquet, Avro) i protokoły dostępu" },
  { atrybut: "Secure", opis: "Access control, audit log, compliance z data governance" },
];

export default function BlogDataMeshCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Data Mesh — co to jest i jak wdrożyć zdecentralizowaną architekturę danych? | Fotz.pl"
        description="Data Mesh: 4 zasady (domain ownership, data as a product, self-serve platform, federated governance), porównanie z Data Lake i jak wdrożyć Data Mesh w organizacji."
        canonicalUrl="https://fotz.pl/blog/data-mesh-co-to-jest-jak-wdrozyz-architekture-danych"

        keywords="Data Mesh co to jest, Data Mesh definicja, czym jest Data Mesh, Data Mesh przykłady, jak działa Data Mesh, Data Mesh znaczenie, Data Mesh przewodnik"
      />
      <ArticleSchema
        title="Data Mesh — co to jest i jak wdrożyć zdecentralizowaną architekturę danych?"
        description="Data Mesh: 4 zasady Zhamak Dehghani, domain ownership, data as a product, self-serve platform, federated governance i porównanie z Data Lake/Warehouse."
        url="https://fotz.pl/blog/data-mesh-co-to-jest-jak-wdrozyz-architekture-danych"
        datePublished="2024-03-10"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Data Mesh", url: "https://fotz.pl/blog/data-mesh-co-to-jest-jak-wdrozyz-architekture-danych" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Data Mesh", href: "/blog/data-mesh-co-to-jest-jak-wdrozyz-architekture-danych" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Data Engineering
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Mesh
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Jeden centralny data team jako wąskie gardło — to przeszłość.
              Data Mesh przenosi odpowiedzialność za dane do domen
              które je produkują i rozumieją najlepiej.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kluczowa zasada", value: "Domain Ownership" },
                { label: "Twórca", value: "Z. Dehghani" },
                { label: "Dane jako", value: "Product" },
                { label: "Governance", value: "Federated" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-teal-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4 zasady */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 zasady Data Mesh</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Data Mesh to nie technologia — to filozofia organizacyjna
              oparta na czterech kluczowych zasadach.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {dataMeshPrinciples.map((p) => (
              <FadeInView key={p.zasada}>
                <div className={`rounded-xl border-2 p-5 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-2xl flex-shrink-0 w-8 ${
                      p.kolor === "blue" ? "text-blue-600" :
                      p.kolor === "green" ? "text-green-600" :
                      p.kolor === "purple" ? "text-purple-600" :
                      "text-orange-600"
                    }`}>{p.numer}.</div>
                    <div className="flex-1">
                      <h3 className={`font-bold text-lg mb-2 ${
                        p.kolor === "blue" ? "text-blue-800" :
                        p.kolor === "green" ? "text-green-800" :
                        p.kolor === "purple" ? "text-purple-800" :
                        "text-orange-800"
                      }`}>{p.zasada}</h3>
                      <p className="text-gray-700 text-sm mb-2">{p.opis}</p>
                      <div className="text-xs">
                        <span className="font-semibold text-gray-500 uppercase">Implikacja: </span>
                        <span className="text-gray-600">{p.implikacja}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Data Product attributes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 atrybutów dobrego Data Product</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy Data Product w siatce danych powinien spełniać
              te sześć atrybutów aby być naprawdę użytecznym.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {dataProductAttributes.map((a, i) => (
              <FadeInView key={a.atrybut}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-3">
                    <div className="bg-teal-600 text-white font-bold rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{a.atrybut}</h3>
                      <p className="text-gray-600 text-sm">{a.opis}</p>
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
