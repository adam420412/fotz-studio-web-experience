import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Domain-Driven Design (DDD) i jakie są jego główne koncepty?",
    answer: "Domain-Driven Design (DDD) to podejście do projektowania oprogramowania które stawia domenę biznesową (problem który rozwiązujemy) w centrum projektu. Wprowadzone przez Erica Evansa w książce z 2003 roku. Fundamentalna idea: kod powinien odzwierciedlać język i koncepty domeny biznesowej — nie odwrotnie. Trzy poziomy DDD: Strategic DDD — jak podzielić duży system na mniejsze, spójne obszary (Bounded Contexts). Tactical DDD — wzorce projektowe wewnątrz każdego obszaru (Entities, Aggregates, Value Objects). Collaborative Modeling — Event Storming, Domain Storytelling — jak odkrywać domenę razem z ekspertami. Kluczowe koncepty: Ubiquitous Language: wspólny, precyzyjny język używany przez developerów i ekspertów domenowych. Ten sam termin znaczy to samo w kodzie i rozmowie. Bounded Context: granica modelu domenowego — w różnych contextach te same słowa mogą znaczyć coś innego ('Customer' w Sales vs. 'Customer' w Support). Domain Expert: osoba która rozumie biznes — developerzy muszą z nimi ściśle współpracować. Core Domain: obszar który daje konkurencyjną przewagę — tu inwestujesz najbardziej. Supporting Domain: wspomaga Core, ważny ale nie kluczowy. Generic Domain: nie daje przewagi — użyj gotowego produktu (auth, billing). Kiedy DDD: złożona domena biznesowa z bogatą logiką. Długoterminowy projekt. Bliski kontakt z ekspertami domenowymi. Nie warto przy prostych CRUD aplikacjach.",
  },
  {
    question: "Bounded Context i Context Map — jak dzielić system na subdomeny?",
    answer: "Bounded Context to centralny pattern w Strategic DDD. Definiuje granicę w której model domenowy jest spójny i ma jedno znaczenie. Przykład e-commerce: Bounded Context 'Sales' — Customer to ktoś kto kupuje, ma historię zamówień. Bounded Context 'Shipping' — Customer to adres dostawy. Bounded Context 'Support' — Customer to przypadek problemu, ticket. Ten sam rzeczywisty customer — trzy różne modele w trzech contextach. Context Map: diagram pokazujący relacje między Bounded Contexts. Wzorce relacji: Shared Kernel: dwa contexty współdzielą część modelu. Zmiana wymaga współpracy obu teamów. Customer-Supplier: upstream context (supplier) dostarcza dane downstream (customer). Upstream ma moc, downstream dostosowuje się. Conformist: downstream podejmuje się dostosować w pełni do upstream bez negocjacji. Anticorruption Layer (ACL): downstream tłumaczy model upstream na własny. Chroni własny model przed wpływem obcych konceptów. Published Language: upstream publikuje stabilny, dobrze zdefiniowany format wymiany danych. Open Host Service: upstream udostępnia API dla wielu klientów. Separate Ways: contexty są niezależne — bez integracji. Strategic DDD i mikroserwisy: idealnym przypadkiem jest jeden mikroserwis = jeden Bounded Context. Ale nie wymuszaj tego przy małych lub niejasnych domenach. Event Storming: technika odkrywania domeny przez mapowanie domain events. Post-it notes dla events (pomarańczowe), commands (niebieskie), actors (żółte), aggregate (żółte).",
  },
  {
    question: "Agregaty, Entities i Value Objects — taktyczny DDD?",
    answer: "Tactical DDD wzorce: Entity: obiekt z unikalną tożsamością (ID). Tożsamość persystuje przez czas — Customer z ID 123 to zawsze ten sam Customer nawet jeśli zmienił adres. Logika biznesowa jako metody. Value Object: obiekt bez tożsamości — definiowany przez wartości. Money (100, 'PLN') jest tym samym co każde inne Money (100, 'PLN'). Niemutowalny. Przykłady: Address, EmailAddress, Money, DateRange. Aggregate: klaster powiązanych Entities i Value Objects traktowany jako jednostka. Aggregate Root — jedyna brama do Aggregate. Wszystkie operacje przez Root. Invariants (niezmienniki) — reguły spójności które muszą być zawsze prawdziwe w granicach Aggregate. Przykład: Order jest Aggregate. OrderItems są w środku. OrderItem nie może istnieć bez Order. Nie odwołuj się bezpośrednio do OrderItem z zewnątrz Order. Domain Event: fakty z przeszłości — 'OrderPlaced', 'PaymentProcessed'. Niemutowalny rekord zdarzenia. Propagowany między Bounded Contexts przez Event Bus. Repository: interfejs do persystencji Aggregate. Tylko przez Repository pobierasz i zapisujesz Aggregate. Domain Service: logika biznesowa która nie pasuje do żadnej Entity. Bezstanowy. Np. MoneyTransferService (przelew między dwoma kontami). Operuje na wielu Aggregatach. Application Service: orkiestruje przypadki użycia. Wywołuje Repository, Domain Services. Nie zawiera logiki domenowej — tylko koordynacja. Factory: tworzenie złożonych Aggregatów.",
  },
  {
    question: "Event Storming — jak modelować domenę z ekspertami?",
    answer: "Event Storming to collaborative technika modelowania domeny przez odkrywanie Domain Events. Stworzona przez Alberto Brandolini. Dlaczego Event Storming: programiści i eksperci domenowi często mówią różnymi językami. ES wymusza wspólną rozmowę. Odkrywa niewiedzę i sprzeczności w rozumieniu domeny. Trzy warianty: Big Picture Event Storming: eksploracja całej organizacji. Kto są aktorzy, co się dzieje, jakie eventy są kluczowe. Process Modeling: konkretny proces end-to-end. Software Design: projektowanie konkretnego kawałka systemu. Materiały: duże płótno (papier na rolce lub duży ekran). Post-it notes różnych kolorów. Domain Events (pomarańczowe): co się wydarzyło — imperatyw w przeszłości ('OrderPlaced', 'PaymentFailed', 'ItemShipped'). Commands (niebieskie): co triggeruje event ('PlaceOrder', 'ProcessPayment'). Actor (żółty): kto wysyła command. Policy (fioletowy): 'Gdy X to Y' — automatyczna reakcja. External System (różowy): zewnętrzne systemy. Aggregate (żółty, duży): co group eventy i commands. Hotspot (czerwony): miejsca niejasności lub kontrowersji — do dalszego zbadania. Proces: zbierz wszystkich w jednym miejscu (wszyscy mają markery i post-its). Napisz eventy bez porządku — chaos phase (20-30 min). Uszereguj eventy chronologicznie. Dodaj commands i aktorów. Odkryj Bounded Contexts przez naturalne grupowanie. Remote Event Storming: Miro, MURAL, FigJam — wirtualne płótno.",
  },
  {
    question: "DDD i mikroserwisy — jak mapować koncepty na architekturę?",
    answer: "DDD dostarcza najlepszego zestawu narzędzi do projektowania mikroserwisów. Bounded Context jako mikroserwis: idealnie każdy BC to osobny serwis z własną bazą danych. Team ownership: jeden team owneruje jeden lub kilka BC/serwisów. Conway's Law: struktura organizacji odzwierciedla się w strukturze systemu. DDD pozwala świadomie projektować oba. Aggregate jako jednostka transakcji: nie ma distributed transactions między Aggregatami. Jeśli dwa Aggregaty muszą być spójne — albo to jeden Aggregate (zbyt duży?) albo eventual consistency przez events. Domain Events jako integracja: BC komunikują się przez Domain Events. Publish Integration Event gdy stan Aggregate się zmieni. Consume Integration Events od innych BC. Anticorruption Layer w każdym BC: tłumacz eventy z innych BC na własny model. Nie używaj bezpośrednio zewnętrznych modeli. CQRS w DDD: Write Model — Aggregaty z domain logic. Read Model — zdenormalizowane projekcje (per query). Osobne Handlers dla Commands i Queries. Narzędzia wspierające DDD: Axon Framework (Java) — Aggregates, Event Store, CQRS, Saga. MediatR (.NET) — Commands, Queries, Handlers. Patterny w kodzie: domain model package (bez framework dependencies). application package (orchestration). infrastructure package (DB, messaging). Hexagonal Architecture / Ports and Adapters: domena w centrum. Infrastructure adaptery na zewnątrz — DB, HTTP, messaging. Możesz zmienić bazę danych bez zmiany domeny.",
  },
];

const dddConcepts = [
  { koncept: "Ubiquitous Language", poziom: "Strategic", opis: "Wspólny język developerów i ekspertów domenowych — te same terminy w kodzie i rozmowie", przyklad: "Order, OrderLine, Customer, Fulfillment — nie Record, Row, User" },
  { koncept: "Bounded Context", poziom: "Strategic", opis: "Granica w której model domenowy jest spójny. Te same słowa mogą znaczyć coś innego w różnych contextach.", przyklad: "Customer w Sales vs. Customer w Shipping vs. Customer w Support" },
  { koncept: "Aggregate", poziom: "Tactical", opis: "Klaster Entities z Aggregate Root. Jednostka transakcji i spójności. Dostęp tylko przez Root.", przyklad: "Order (root) + OrderItems. Nie możesz zmienić OrderItem poza Order." },
  { koncept: "Entity", poziom: "Tactical", opis: "Obiekt z unikalną tożsamością. Tożsamość persystuje przez czas niezależnie od atrybutów.", przyklad: "Customer z ID 123 to wciąż ten sam Customer po zmianie adresu" },
  { koncept: "Value Object", poziom: "Tactical", opis: "Niemutowalny obiekt bez tożsamości — definiowany przez wartości. Dwa VO z tymi samymi wartościami są identyczne.", przyklad: "Money(100, PLN), Address, EmailAddress, DateRange" },
  { koncept: "Domain Event", poziom: "Tactical", opis: "Niemutowalny fakt z przeszłości. Propaguje zmiany między Bounded Contexts asynchronicznie.", przyklad: "OrderPlaced, PaymentFailed, ItemShipped, UserRegistered" },
];

const contextPatterns = [
  { wzorzec: "Anticorruption Layer", opis: "Downstream tłumaczy model upstream na własny. Chroni własną domenę przed obcymi konceptami.", kiedy: "Gdy integracja z legacy lub zewnętrznym systemem" },
  { wzorzec: "Shared Kernel", opis: "Dwa contexty współdzielą część modelu. Wymaga ścisłej koordynacji między teamami.", kiedy: "Blisko powiązane contexty z jednym teamem" },
  { wzorzec: "Customer-Supplier", opis: "Upstream dostarcza dane Downstream. Upstream ma priorytet, downstream negocjuje potrzeby.", kiedy: "Hierarchia serwisów z jasnym upstream" },
  { wzorzec: "Conformist", opis: "Downstream w pełni dostosowuje się do upstream bez negocjacji — brak wpływu.", kiedy: "Zewnętrzny API, legacy system bez możliwości zmiany" },
];

export default function BlogDddCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Domain-Driven Design (DDD) | Fotz Studio"
        description="DDD: Ubiquitous Language, Bounded Context, Aggregate, Value Object, Event Storming, Context Map, DDD + mikroserwisy — strategiczny i taktyczny DDD w praktyce."
        canonical="https://fotz.pl/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming"

        keywords="Domain-Driven Design (DDD) co to jest, Domain-Driven Design (DDD) definicja, czym jest Domain-Driven Design (DDD), Domain-Driven Design (DDD) przykłady, jak działa Domain-Driven Design (DDD), Domain-Driven Design (DDD) znaczenie, Domain-Driven Design (DDD) przewodnik"

        canonical="https://fotz.pl/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming"
      />
      <ArticleSchema
        title="Domain-Driven Design (DDD) — co to jest, Bounded Context, Aggregate, Event Storming?"
        description="DDD: 6 konceptów (Ubiquitous Language/Bounded Context/Aggregate/Entity/VO/Domain Event), 4 wzorce Context Map, Event Storming i DDD + mikroserwisy."
        url="https://fotz.pl/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Domain-Driven Design", url: "https://fotz.pl/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Domain-Driven Design", url: "/blog/domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Architektura / Software Design
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Domain-Driven Design (DDD)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Kod który mówi językiem biznesu. DDD to podejście które stawia
              domenę w centrum — Bounded Contexts, Aggregates i Event Storming
              prowadzą do systemów które eksperci rozumieją.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Język", value: "Ubiquitous Language" },
                { label: "Granica modelu", value: "Bounded Context" },
                { label: "Modelowanie", value: "Event Storming" },
                { label: "Jednostka transakcji", value: "Aggregate" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Koncepty */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych konceptów DDD</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              DDD dzieli się na Strategic (jak podzielić system) i Tactical
              (jak modelować wewnątrz obszaru) — oba poziomy są kluczowe.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {dddConcepts.map((c) => (
              <FadeInView key={c.koncept}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{c.koncept}</h3>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${c.poziom === "Strategic" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"}`}>{c.poziom}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{c.opis}</p>
                  <p className="text-xs text-indigo-700 italic">{c.przyklad}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Context Map Patterns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wzorce Context Map — relacje między Bounded Contexts</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Context Map to diagram relacji między Bounded Contexts —
              każda relacja ma implikacje dla teamów i integracji.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {contextPatterns.map((p) => (
              <FadeInView key={p.wzorzec}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{p.wzorzec}</h3>
                  <p className="text-gray-700 text-sm mb-2">{p.opis}</p>
                  <p className="text-xs text-indigo-700 font-medium">Kiedy: {p.kiedy}</p>
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

      <RelatedArticles currentArticleId="domain-driven-design-ddd-co-to-jest-bounded-context-aggregate-event-storming" />
      <ContactSection />
    </Layout>
  );
}
