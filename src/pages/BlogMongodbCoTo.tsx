import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest MongoDB?",
    answer:
      "MongoDB to open-source'owa, dokumentowa baza danych NoSQL — przechowuje dane jako elastyczne dokumenty JSON (BSON — Binary JSON) zamiast tabel relacyjnych. Stworzona przez 10gen w 2007 roku (teraz MongoDB Inc.), MongoDB oferuje elastyczne schema (brak sztywnej struktury tabel), poziome skalowanie (sharding), replikację (replica sets) i bogaty język zapytań. Nazwa pochodzi od słowa 'humongous' (gigantyczny). Używana przez eBay, Craigslist, Forbes, Toyota.",
  },
  {
    question: "Czym różni się MongoDB od PostgreSQL?",
    answer:
      "MongoDB (NoSQL) vs PostgreSQL (SQL): Schema — MongoDB jest schema-flexible (każdy dokument może mieć inne pola), PostgreSQL ma sztywną strukturę tabel. Relacje — MongoDB przechowuje powiązane dane zagnieżdżone w jednym dokumencie (embedding) lub przez referencje; PostgreSQL przez JOIN. Skalowanie — MongoDB skaluje horyzontalnie przez sharding, PostgreSQL wertykalnie (choć Citus dodaje sharding). Use case — MongoDB lepszy dla dokumentów, katalogów, CMS; PostgreSQL dla transakcji finansowych, raportowania, złożonych relacji.",
  },
  {
    question: "Co to jest BSON w MongoDB?",
    answer:
      "BSON (Binary JSON) to binarny format serializacji używany przez MongoDB do przechowywania i przesyłania dokumentów. BSON rozszerza JSON o dodatkowe typy danych: Date (zamiast stringa), BinData (dane binarne), ObjectId (unikalne ID), Decimal128 (precyzja finansowa), Int32/Int64 (typy liczb). BSON jest bardziej efektywny od JSON do przechowywania i parsowania. Zewnętrznie MongoDB używa JSON-like składni w zapytaniach i shell — BSON to tylko format wewnętrzny.",
  },
  {
    question: "Jak działa skalowanie w MongoDB?",
    answer:
      "MongoDB skaluje przez Replica Sets i Sharding. Replica Set: 1 Primary (odczyty i zapisy) + N Secondary (replikacja, odczyty). Automatyczny failover gdy Primary pada — jeden z Secondary staje się Primary (wybory). Sharding: poziome skalowanie — dane rozkładane między wiele serwerów (shards) na podstawie shard key. Każdy shard to Replica Set. Mongos (query router) kieruje zapytania do właściwych shardów. MongoDB Atlas (managed cloud) oferuje auto-sharding bez ręcznej konfiguracji.",
  },
  {
    question: "Kiedy używać MongoDB zamiast relacyjnej bazy danych?",
    answer:
      "MongoDB jest lepsze gdy: dane mają hierarchiczną strukturę (dokumenty z zagnieżdżonymi subdokumentami), schema zmienia się często (agile development, prototypowanie), potrzebujesz horyzontalnego skalowania od razu, przechowujesz catalogue produktów z różnymi atrybutami, budujesz CMS lub blog. SQL jest lepszy gdy: dane są wysoce relacyjne (wiele tabel z JOIN), potrzebujesz transakcji ACID, raportujesz dane analityczne, masz strict financial lub compliance requirements.",
  },
];

const mongodbConcepts = [
  { pojęcie: "Database", sql: "Database", opis: "Kontener dla kolekcji. MongoDB może mieć wiele baz danych na jednym serwerze." },
  { pojęcie: "Collection", sql: "Table", opis: "Grupa dokumentów — odpowiednik tabeli SQL. Nie wymaga schema (każdy dokument może mieć różne pola)." },
  { pojęcie: "Document", sql: "Row/Record", opis: "Pojedynczy rekord w formacie BSON/JSON. Może zawierać zagnieżdżone dokumenty i tablice." },
  { pojęcie: "Field", sql: "Column", opis: "Para key-value w dokumencie. Pola mogą być różne w różnych dokumentach tej samej kolekcji." },
  { pojęcie: "Index", sql: "Index", opis: "Struktura danych przyspieszająca zapytania. MongoDB tworzy automatycznie indeks na _id." },
  { pojęcie: "Aggregation", sql: "GROUP BY + JOIN", opis: "Pipeline transformacji dokumentów: $match, $group, $sort, $project, $lookup (join)." },
  { pojęcie: "_id", sql: "Primary Key", opis: "Każdy dokument ma automatycznie generowane _id (ObjectId). Gwarantuje unikalność." },
  { pojęcie: "Replica Set", sql: "Replication", opis: "Grupa serwerów MongoDB z replikowanymi danymi. 1 Primary + N Secondary, automatic failover." },
];

const mongodbQueries = [
  {
    operacja: "Insert",
    opis: "Dodawanie dokumentów",
    przykład: `db.users.insertOne({
  name: "Jan Kowalski",
  email: "jan@example.com",
  age: 30,
  address: {
    city: "Warszawa",
    zip: "00-001"
  },
  tags: ["developer", "nodejs"]
})`,
  },
  {
    operacja: "Find (Query)",
    opis: "Wyszukiwanie dokumentów",
    przykład: `// Proste wyszukiwanie
db.users.find({ age: { $gte: 25 } })

// Z projekcją (tylko wybrane pola)
db.users.find(
  { city: "Warszawa" },
  { name: 1, email: 1, _id: 0 }
)

// Sortowanie i limit
db.users.find().sort({ age: -1 }).limit(10)`,
  },
  {
    operacja: "Update",
    opis: "Aktualizacja dokumentów",
    przykład: `// Aktualizuj jedno pole
db.users.updateOne(
  { email: "jan@example.com" },
  { $set: { age: 31 } }
)

// Dodaj do tablicy
db.users.updateOne(
  { _id: ObjectId("...") },
  { $push: { tags: "typescript" } }
)`,
  },
  {
    operacja: "Aggregation Pipeline",
    opis: "Złożone transformacje danych",
    przykład: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: {
    _id: "$userId",
    totalAmount: { $sum: "$amount" },
    orderCount: { $count: {} }
  }},
  { $sort: { totalAmount: -1 } },
  { $limit: 10 }
])`,
  },
];

const mongodbIndexTypes = [
  { typ: "Single Field Index", przykład: "db.users.createIndex({ email: 1 })", zastosowanie: "Wyszukiwanie po jednym polu. Domyślny dla większości zapytań." },
  { typ: "Compound Index", przykład: "db.users.createIndex({ city: 1, age: -1 })", zastosowanie: "Zapytania filtrujące/sortujące po wielu polach. Kolejność pól ważna." },
  { typ: "Unique Index", przykład: "db.users.createIndex({ email: 1 }, { unique: true })", zastosowanie: "Wymusza unikalność wartości w polu (jak UNIQUE CONSTRAINT w SQL)." },
  { typ: "Text Index", przykład: 'db.articles.createIndex({ content: "text" })', zastosowanie: "Full-text search. Tokenizacja, stemming, stop words." },
  { typ: "TTL Index", przykład: "db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })", zastosowanie: "Automatyczne usuwanie dokumentów po czasie. Idealne dla sesji, cache." },
  { typ: "Geospatial Index", przykład: 'db.places.createIndex({ location: "2dsphere" })', zastosowanie: "Zapytania geograficzne: nearest, within radius, polygon." },
];

export default function BlogMongodbCoTo() {
  return (
    <Layout>
      <SEOHead
        title="MongoDB | Fotz Studio"
        description="MongoDB — definicja, dokumenty vs tabele, BSON, zapytania (find, aggregate), typy indeksów i skalowanie (Replica Set, Sharding). Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/mongodb-co-to-jest"

        keywords="MongoDB co to jest, MongoDB jak działa, MongoDB tutorial, MongoDB przykład, czym jest MongoDB, MongoDB dokumentacja, MongoDB przewodnik"

        canonical="https://fotz.pl/blog/mongodb-co-to-jest"
      />
      <ArticleSchema
        title="MongoDB — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po MongoDB: dokumenty, kolekcje, zapytania, aggregation pipeline i skalowanie."
        url="https://fotz.pl/blog/mongodb-co-to-jest"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "MongoDB", url: "https://fotz.pl/blog/mongodb-co-to-jest" },
        ]}/>

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[
              { name: "Blog", url: "/blog" },
              { name: "MongoDB", url: "https://fotz.pl" },
            ]}/>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            MongoDB — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            MongoDB to dokumentowa baza danych NoSQL przechowująca dane w elastycznych dokumentach JSON.
            Poznaj kolekcje, zapytania, aggregation pipeline, indeksy i skalowanie.
          </p>
        </div>
      </section>

      {/* Pojęcia SQL vs MongoDB */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">MongoDB vs SQL — mapowanie pojęć</h2>
            <p className="text-lg text-slate-700 mb-8">
              Jeśli znasz SQL, łatwo zrozumiesz MongoDB przez analogię do znanych pojęć.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">MongoDB</th>
                    <th className="p-3 text-left">SQL (PostgreSQL/MySQL)</th>
                    <th className="p-3 text-left">Opis</th>
                  </tr>
                </thead>
                <tbody>
                  {mongodbConcepts.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-bold text-green-700 font-mono">{row.pojęcie}</td>
                      <td className="p-3 font-semibold text-blue-700 font-mono">{row.sql}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Zapytania */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Zapytania MongoDB — przykłady</h2>
            <div className="space-y-5">
              {mongodbQueries.map((q, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{q.operacja}</h3>
                  <p className="text-slate-500 text-sm mb-3">{q.opis}</p>
                  <pre className="bg-slate-900 text-green-400 rounded-lg p-4 text-xs font-mono overflow-x-auto">
                    {q.przykład}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Indeksy */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typy indeksów MongoDB</h2>
            <div className="space-y-3">
              {mongodbIndexTypes.map((idx, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{idx.typ}</h3>
                  <pre className="bg-slate-900 text-green-400 rounded p-2 text-xs font-mono mb-2 overflow-x-auto">{idx.przykład}</pre>
                  <p className="text-slate-600 text-sm">{idx.zastosowanie}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — MongoDB</h2>
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

      <RelatedArticles currentArticleId="mongodb-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
