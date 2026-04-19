import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest TypeScript?",
    answer:
      "TypeScript to open-source'owy, statycznie typowany superset JavaScript stworzony przez Microsoft (Anders Hejlsberg) i wydany w 2012 roku. TypeScript kompiluje się do czystego JavaScript — każdy kod JS jest prawidłowym kodem TS. Dodaje optional static typing, interfaces, enums, generics, decorators i inne funkcje. Dzięki typom IDE oferuje zaawansowane autocomplete, refactoring i wykrywanie błędów przed uruchomieniem. TypeScript jest domyślnym językiem w Angular i rekomendowanym w React, Vue, Node.js.",
  },
  {
    question: "Jakie są korzyści z TypeScript?",
    answer:
      "Główne korzyści TypeScript: wykrywanie błędów w czasie kompilacji (nie runtime) — brak 'undefined is not a function' w produkcji; lepsze IDE support (IntelliSense, autocomplete, navigation) przyspiesza development; dokumentacja przez typy — interfejsy opisują kształt danych; bezpieczny refactoring — zmiana nazwy funkcji/pola automatycznie we wszystkich miejscach; łatwiejsza współpraca w zespołach — typy komunikują kontrakty między komponentami; stopniowa adopcja — można zacząć od .ts bez typów i dodawać je stopniowo.",
  },
  {
    question: "Czym różni się interface od type w TypeScript?",
    answer:
      "Interface i type są często wymienne, ale mają różnice: Interface — może być rozszerzany przez inne interfejsy (extends), może być łączony (declaration merging — dwie deklaracje tego samego interfejsu scalają się), najlepszy dla definiowania kształtu obiektów i klas. Type alias — może reprezentować prymitywy, union types (string | number), intersection types (&), tuple, mapped types — bardziej elastyczny. Konwencja: Interface dla API publicznego (klas, Props w React), type dla złożonych type expressions, union i utility types.",
  },
  {
    question: "Co to są Generics w TypeScript?",
    answer:
      "Generics to mechanizm tworzenia wielokrotnego użytku komponentów które działają z różnymi typami. Zamiast pisać funkcję dla string i osobną dla number — piszesz jedną generyczną. Przykład: function identity<T>(arg: T): T { return arg; }. Wywołanie: identity<string>('hello') lub z type inference: identity(42). Generics używane szeroko w: funkcjach, klasach, interfejsach, utility types (Array<T>, Promise<T>, Record<K,V>). Pozwalają uniknąć any bez powielania kodu.",
  },
  {
    question: "Jak skonfigurować TypeScript w projekcie?",
    answer:
      "Konfiguracja TypeScript: npm install -D typescript, npx tsc --init (generuje tsconfig.json). Kluczowe opcje tsconfig: strict: true (włącza wszystkie strict checks — zalecane), target: 'ES2020' (wersja JS na output), module: 'ESNext' lub 'CommonJS', lib: ['DOM', 'ES2020'] (dostępne typy), paths (aliasy importów np. @/). Dla React: npm install -D @types/react @types/react-dom. Dla Node.js: npm install -D @types/node. ts-node do uruchamiania TS bez kompilacji.",
  },
];

const typescriptTypes = [
  {
    kategoria: "Prymitywne",
    kolor: "bg-blue-50 border-blue-200",
    typy: [
      { nazwa: "string", przykład: "const name: string = 'Jan';" },
      { nazwa: "number", przykład: "const age: number = 30;" },
      { nazwa: "boolean", przykład: "const active: boolean = true;" },
      { nazwa: "null / undefined", przykład: "const x: null = null;" },
      { nazwa: "any", przykład: "let val: any = 'anything'; // unikaj!" },
      { nazwa: "unknown", przykład: "let input: unknown; // bezpieczniejsze niż any" },
      { nazwa: "never", przykład: "function fail(): never { throw new Error(); }" },
      { nazwa: "void", przykład: "function log(): void { console.log('hi'); }" },
    ],
  },
  {
    kategoria: "Złożone",
    kolor: "bg-purple-50 border-purple-200",
    typy: [
      { nazwa: "Array", przykład: "const nums: number[] = [1, 2, 3];" },
      { nazwa: "Tuple", przykład: "const pair: [string, number] = ['age', 30];" },
      { nazwa: "Object", przykład: "const user: { name: string; age: number } = {...};" },
      { nazwa: "Union", przykład: "type ID = string | number;" },
      { nazwa: "Intersection", przykład: "type AdminUser = User & Admin;" },
      { nazwa: "Literal", przykład: "type Direction = 'left' | 'right' | 'up' | 'down';" },
      { nazwa: "Enum", przykład: "enum Status { Active, Inactive, Pending }" },
      { nazwa: "Generics", przykład: "function wrap<T>(val: T): T[] { return [val]; }" },
    ],
  },
];

const interfaceVsType = [
  {
    kod: `// Interface — kształt obiektu
interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// Rozszerzanie interface
interface Admin extends User {
  permissions: string[];
}

// Declaration merging (dodaje pola do istniejącego interfejsu)
interface User {
  createdAt: Date; // dołączone do oryginalnego User
}`,
    tytuł: "Interface",
    kolor: "border-blue-300",
  },
  {
    kod: `// Type alias — elastyczniejszy
type UserID = string | number;

// Union type
type Status = 'active' | 'inactive' | 'pending';

// Intersection
type AdminUser = User & {
  permissions: string[];
};

// Mapped type
type Optional<T> = {
  [K in keyof T]?: T[K];
};

// Conditional type
type NonNullable<T> = T extends null | undefined ? never : T;`,
    tytuł: "Type Alias",
    kolor: "border-purple-300",
  },
];

const utilityTypes = [
  { typ: "Partial<T>", opis: "Wszystkie pola T opcjonalne", przykład: "Partial<User> — { name?: string; email?: string }" },
  { typ: "Required<T>", opis: "Wszystkie pola T wymagane", przykład: "Required<Config> — usuwa ? ze wszystkich pól" },
  { typ: "Readonly<T>", opis: "Wszystkie pola T readonly", przykład: "const user: Readonly<User> = {...} — niemodyfikowalny" },
  { typ: "Pick<T, K>", opis: "Wybierz podzbiór pól", przykład: "Pick<User, 'id' | 'name'> — tylko id i name" },
  { typ: "Omit<T, K>", opis: "Pomiń wybrane pola", przykład: "Omit<User, 'password'> — User bez hasła" },
  { typ: "Record<K, V>", opis: "Mapa klucz-wartość", przykład: "Record<string, number> — { likes: 5, shares: 3 }" },
  { typ: "Exclude<T, U>", opis: "Wyklucz typy z unii", przykład: "Exclude<string | number | null, null> — string | number" },
  { typ: "ReturnType<F>", opis: "Typ zwracany przez funkcję", przykład: "ReturnType<typeof fetchUser> — Promise<User>" },
];

export default function BlogTypescriptCoTo() {
  return (
    <Layout>
      <SEOHead
        title="TypeScript | Fotz Studio"
        description="TypeScript — definicja, system typów (prymitywne, union, generics), interface vs type, utility types i konfiguracja tsconfig. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/typescript-co-to-jest"

        keywords="TypeScript co to jest, TypeScript jak działa, TypeScript tutorial, TypeScript przykład, czym jest TypeScript, TypeScript dokumentacja, TypeScript przewodnik"

        canonical="https://fotz.pl/blog/typescript-co-to-jest"
      />
      <ArticleSchema
        title="TypeScript — co to jest i jak działa? Kompletny przewodnik"
        description="Kompletny przewodnik po TypeScript: typy, interfejsy, generics, utility types i konfiguracja projektu."
        url="https://fotz.pl/blog/typescript-co-to-jest"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TypeScript", url: "https://fotz.pl/blog/typescript-co-to-jest" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "TypeScript" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            TypeScript — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            TypeScript to statycznie typowany JavaScript od Microsoft.
            Poznaj system typów, interface vs type, generics, utility types i jak skonfigurować projekt.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest TypeScript?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>TypeScript</strong> to superset JavaScript stworzony przez Microsoft — każdy kod JavaScript
              jest prawidłowym kodem TypeScript. TypeScript dodaje opcjonalne statyczne typowanie, które
              pozwala wykrywać błędy podczas pisania kodu (w IDE), nie podczas uruchomienia w produkcji.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              TypeScript kompiluje się do czystego JavaScript (tsc — TypeScript Compiler).
              Wynikowy JS działa w każdej przeglądarce i środowisku Node.js — bez dodatkowych zależności runtime.
              Stopniowa adopcja: możesz zacząć dodawać typy do istniejącego projektu JS.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "2012", opis: "Rok premiery TypeScript 0.8 od Microsoft. TS 1.0 w 2014 r." },
                { stat: "#1 JS Superset", opis: "Najpopularniejszy język do pisania aplikacji JavaScript. Używany w 65%+ projektów JS (wg Stack Overflow 2023)" },
                { stat: "strict mode", opis: "Tryb strict: true w tsconfig aktywuje pełne sprawdzanie typów — zalecane dla nowych projektów" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* System typów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">System typów TypeScript</h2>
            <div className="space-y-6">
              {typescriptTypes.map((cat, i) => (
                <div key={i} className={`rounded-xl p-6 border ${cat.kolor}`}>
                  <h3 className="font-bold text-slate-900 text-xl mb-4">{cat.kategoria}</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {cat.typy.map((t, j) => (
                      <div key={j} className="bg-white rounded-lg p-3">
                        <span className="font-mono text-sm font-bold text-blue-700">{t.nazwa}</span>
                        <p className="font-mono text-xs text-slate-600 mt-1">{t.przykład}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Interface vs Type */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Interface vs Type Alias</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {interfaceVsType.map((item, i) => (
                <div key={i} className={`rounded-xl border-2 ${item.kolor} overflow-hidden`}>
                  <div className="bg-slate-800 px-4 py-2">
                    <p className="text-white font-bold">{item.tytuł}</p>
                  </div>
                  <pre className="bg-slate-900 text-green-400 p-4 text-xs font-mono overflow-x-auto">
                    {item.kod}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Utility Types */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Utility Types TypeScript</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {utilityTypes.map((ut, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-blue-700 font-mono mb-1">{ut.typ}</h3>
                  <p className="text-slate-600 text-sm mb-2">{ut.opis}</p>
                  <p className="font-mono text-xs text-slate-500 bg-slate-50 rounded p-2">{ut.przykład}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — TypeScript</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="typescript-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
