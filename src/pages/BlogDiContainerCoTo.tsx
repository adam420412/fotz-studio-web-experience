import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Dependency Injection (DI) i dlaczego poprawia testowalność?",
    answer: "Dependency Injection: wzorzec projektowy gdzie zależności są wstrzykiwane z zewnątrz zamiast tworzone wewnątrz klasy. Problem bez DI: class UserService {private db = new PostgresDB(). private logger = new ConsoleLogger(). constructor() {}}. UserService jest ściśle powiązany z PostgresDB i ConsoleLogger. Nie możesz podmienić DB na czas testów. DI solution: class UserService {constructor(private db: Database, private logger: Logger) {}}. Kto tworzy zależności? DI Container lub ręcznie (Pure DI). Zalety DI: testowalność (mock zależności w testach). Wymienność implementacji. Single Responsibility. Loose coupling. Open/Closed Principle. Rodzaje wstrzykiwania: Constructor injection (polecany): zależności przez konstruktor. Property injection: zależności przez property (mniej eksplicytny). Method injection: zależności przez metodę (rzadko). Interfaces jako kontrakty: interface Database {query(sql: string): Promise. insert(table, data): Promise}. class PostgresDB implements Database {...}. class InMemoryDB implements Database {...}. UserService zależy od interfejsu, nie implementacji. Testy: const mockDb = {query: jest.fn(), insert: jest.fn()}. new UserService(mockDb, mockLogger). Bez DI: UserService impossible to mock bez monkey patching.",
  },
  {
    question: "Inversify — DI container dla TypeScript, jak działa?",
    answer: "InversifyJS: DI container dla TypeScript/JavaScript. Dekoratory (reflect-metadata). Tokens (Symbol lub string). @injectable() dekorator na klasy. @inject(TYPES.Database) w konstruktorze. TYPES: Symbol identyfikatory. const TYPES = {Database: Symbol.for('Database'), Logger: Symbol.for('Logger')}. Binding: const container = new Container(). container.bind(TYPES.Database).to(PostgresDB). container.bind(TYPES.Logger).to(ConsoleLogger). container.bind(TYPES.UserService).to(UserService). Resolve: container.get(TYPES.UserService) — zwraca skonfigurowaną instancję. Scopes: InRequestScope() — per request (HTTP). InSingletonScope() — jedna instancja. InTransientScope() — nowa instancja każdy raz. Middleware: container.applyMiddleware(logger). InversifyExpressUtils: @controller('/users'). @httpGet('/:id'). @httpPost('/') z Express routing. NestJS wbudowany DI: nie potrzebujesz Inversify. @Injectable() — zarejestruj provider. @Inject(TOKEN) — wstrzyknij. Scope: DEFAULT (per module), REQUEST, TRANSIENT. Tsyringe (Microsoft): lekki DI dla TypeScript. container.register(). @injectable(). @inject(). Mniej opinioned niż NestJS. Awilix: functional DI. bez dekoratorów. Rejestracja przez naming convention. Dobre dla projektów bez dekoratorów.",
  },
  {
    question: "SOLID principles w TypeScript — jak stosować w praktyce?",
    answer: "SOLID: pięć zasad dobrego OOP (Robert C. Martin). Single Responsibility Principle (SRP): klasa/moduł ma jeden powód do zmiany. UserService tylko logika użytkownika. UserRepository tylko DB access. EmailService tylko wysyłanie maili. Każda ma jeden job. Open/Closed Principle (OCP): otwarta na rozszerzenie, zamknięta na modyfikację. Zamiast modyfikować PaymentService dla nowego gateway — dodaj nową klasę implementującą IPaymentGateway. StripeGateway, PaypalGateway, P24Gateway. Liskov Substitution Principle (LSP): podtyp może zastąpić typ bazowy bez psucia programu. Jeśli Bird ma fly(), a Penguin extends Bird ale nie lata — LSP violation. Rozwiązanie: FlyingBird vs NonFlyingBird. Interface Segregation Principle (ISP): wiele małych interfejsów lepsze niż jeden duży. Zamiast IWorker {work(), eat(), sleep()}: IWorker {work()} + IEater {eat()}. Klasy implementują tylko to co potrzebują. Dependency Inversion Principle (DIP): zależności od abstrakcji (interfejsów), nie konkretnych klas. High-level UserService nie powinien znać PostgresDB. Tylko interfejs IUserRepository. TypeScript zastosowanie: interface Repository. class PrismaUserRepository implements Repository. class InMemoryUserRepository implements Repository (testy). UserService(private repo: Repository). Testowanie SOLID kodu: łatwiejsze mockowanie. Wyraźne granice modułów. Niezależne testy jednostkowe.",
  },
  {
    question: "Design patterns w TypeScript — GoF patterns dla Node.js?",
    answer: "Creational Patterns: Singleton: jedna instancja globalnie. class Database {private static instance: Database. static getInstance(): Database {if (!Database.instance) Database.instance = new Database(). return Database.instance}}. Używaj z ostrożnością (testowanie trudne). Factory Method: klasa decyduje o tworzeniu obiektów. abstract class PaymentFactory {abstract createGateway(): PaymentGateway. processPayment(amount: number) {const gateway = this.createGateway(). gateway.charge(amount)}}. Builder: krok po kroku buduj złożone obiekty. QueryBuilder — fluent interface. new QueryBuilder().select('*').from('users').where('active = true').build(). Structural Patterns: Adapter: dostosuj interfejs do oczekiwanego. StripeAdapter implements PaymentGateway. Opakowuje zewnętrzny SDK. Decorator: dodaj zachowanie bez modyfikacji. logger.info() -> decorated z timestamp, context. Repository Pattern (już omówiony). Behavioral Patterns: Observer (EventEmitter): subscribe/unsubscribe. EventBus — publish/subscribe. Strategy: interchhangeable algorytmy. SortStrategy — różne algorytmy sortowania. PaymentStrategy — różne metody płatności. Command: enkapsuluj operację jako obiekt. CommandBus. execute(command). Undo/redo możliwe. Chain of Responsibility: middleware chain. Każdy handler decyduje czy obsłużyć lub przekazać. Express middleware = CoR. NestJS w kontekście wzorców: Strategy — Guards, Pipes. Command — CQRS module. Observer — EventEmitter, mikroserwisy. Adapter — HTTP adapters (Express, Fastify).",
  },
  {
    question: "Clean Architecture i Hexagonal Architecture w TypeScript?",
    answer: "Clean Architecture (Robert Martin): koncentryczne kręgi zależności. Wewnętrzne nie wiedzą o zewnętrznych. Entities (core) — Domain objects. Biznesowe reguły. Brak zewnętrznych zależności. Use Cases (application) — logika aplikacji. Orchiestruje Entities. Brak frameworka. Interface Adapters — Controllers, Presenters, Gateways. Konwertują dane między Use Cases a zewnętrznymi. Frameworks & Drivers — Express, NestJS, Prisma, PostgreSQL. Dependency Rule: zależności wskazują do środka (nigdy na zewnątrz). Frameworks mogą zależeć od Use Cases. Use Cases NIE mogą zależeć od Express. Hexagonal Architecture (Ports and Adapters): Ports: interfejsy (wejściowe i wyjściowe). Adapters: implementacje portów. Application core: nie zależy od żadnego adaptera. Primary Adapter: HTTP Controller (incoming). Secondary Adapter: DB Repository (outgoing). Implementacja TypeScript: src/domain/ — entities, value objects. src/application/ — use cases, interfaces. src/infrastructure/ — adapters (Express routes, Prisma repos). src/presentation/ — controllers. Zalety: testowalność (mock adaptery). Framework agnostic core. Wymiana DB bez zmiany Use Cases. Wady: boilerplate. Over-engineering dla małych projektów. Kiedy stosować: duże projekty enterprise. Długie utrzymywanie. Skomplikowana domena. Alternatywa: modular monolith z jasnym podziałem modułów.",
  },
];

const diPatterns = [
  { wzorzec: "Constructor Injection", opis: "Zależności przez konstruktor", zalety: "Explicit, immutable, easily testable", kiedy: "Standard — używaj domyślnie" },
  { wzorzec: "DI Container (Inversify)", opis: "Automatyczna rozwiązywanie grafów zależności", zalety: "Automatic wiring, scopes, lifecycle", kiedy: "Duże projekty, enterprise, NestJS-like" },
  { wzorzec: "Pure DI (manual)", opis: "Ręczne tworzenie i przekazywanie zależności", zalety: "Zero dependencies, explicit, simple", kiedy: "Małe projekty, frameworki bez DI" },
  { wzorzec: "Service Locator (anti-pattern)", opis: "Globalny rejestr zależności", zalety: "Convenience", kiedy: "Unikaj — ukrywa zależności, trudny do testowania" },
  { wzorzec: "Factory Pattern", opis: "Fabryka tworzy odpowiednie implementacje", zalety: "Decoupling creation from usage", kiedy: "Gdy typ zależy od runtime warunków" },
  { wzorzec: "Repository Pattern", opis: "Abstrakcja nad warstwą danych", zalety: "Zamienne implementacje (DB, in-memory)", kiedy: "Aplikacje z bazą danych, TDD" },
];

export default function BlogDiContainerCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Dependency Injection, SOLID, Design Patterns | Fotz Studio"
        description="Dependency Injection w TypeScript, Inversify, SOLID principles, GoF patterns (Singleton, Factory, Strategy, Observer), Clean Architecture i Hexagonal…"
        canonicalUrl="https://fotz.pl/blog/dependency-injection-solid-design-patterns-typescript-nodejs"

        keywords="Dependency Injection, SOLID, Design Patterns co to jest, Dependency Injection, SOLID, Design Patterns jak działa, Dependency Injection, SOLID, Design Patterns tutorial, Dependency Injection, SOLID, Design Patterns przykład, czym jest Dependency Injection, SOLID, Design Patterns, Dependency Injection, SOLID, Design Patterns dokumentacja, Dependency Injection, SOLID, Design Patterns przewodnik"

        canonical="https://fotz.pl/blog/dependency-injection-solid-design-patterns-typescript-nodejs"
      />
      <ArticleSchema
        title="Dependency Injection, SOLID, Design Patterns — TypeScript Node.js?"
        description="6 wzorców DI i architekturalnych (Constructor DI/Inversify/Pure DI/Factory/Repository/Service Locator) — SOLID, GoF patterns, Clean Architecture w TypeScript."
        url="https://fotz.pl/blog/dependency-injection-solid-design-patterns-typescript-nodejs"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Dependency Injection i SOLID", url: "https://fotz.pl/blog/dependency-injection-solid-design-patterns-typescript-nodejs" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Dependency Injection i SOLID", url: "/blog/dependency-injection-solid-design-patterns-typescript-nodejs" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              TypeScript / Architecture
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              DI, SOLID i Design Patterns
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Dependency Injection, zasady SOLID, GoF wzorce projektowe
              i Clean Architecture w TypeScript i Node.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "DI Container", value: "Inversify" },
                { label: "5 zasad OOP", value: "SOLID" },
                { label: "GoF Patterns", value: "Gang of Four" },
                { label: "Architektura", value: "Clean Arch" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Wzorce DI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 wzorców wstrzykiwania zależności</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Constructor Injection, Inversify, Pure DI, Service Locator, Factory i Repository
              — od najprostszych po zaawansowane kontenery DI.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Wzorzec</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Zalety</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {diPatterns.map((p, i) => (
                  <tr key={p.wzorzec} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{p.wzorzec}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{p.opis}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{p.zalety}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{p.kiedy}</td>
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

      <RelatedArticles currentArticleId="dependency-injection-solid-design-patterns-typescript-nodejs" />
      <ContactSection />
    </Layout>
  );
}
