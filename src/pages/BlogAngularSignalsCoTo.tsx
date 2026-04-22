import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Angular Signals i dlaczego zmienia reaktywność w Angular?",
    answer: "Angular Signals: nowy system reaktywności w Angular 16+ (stabilny w Angular 17). Inspirowany SolidJS signals. Problem przed Signals: Angular używał Zone.js do wykrywania zmian. Change Detection biegł przez całe drzewo komponentów. Nieefektywne dla dużych aplikacji. Signals: reaktywne wartości z automatycznym dependency tracking. Granularne aktualizacje (tylko co się zmieniło). Brak Zone.js (opcjonalnie, Zoneless w Angular 18+). Podstawowe API: signal(initialValue) — tworzy signal. const count = signal(0). Odczyt: count() — wywołanie jak funkcja. Zapis: count.set(5). count.update(prev => prev + 1). count.mutate() dla obiektów/tablic. computed(): reaktywna wartość pochodna. const double = computed(() => count() * 2). Automatyczne dependency tracking. Lazy (obliczana przy odczycie). effect(): efekt uboczny reagujący na signals. effect(() => console.log('Count:', count())). Template integration: interpolation {count()} lub {double()}. Automatyczne subskrypcje w template. Brak ChangeDetectorRef.markForCheck(). Untracked(): wyłącz tracking. untracked(() => counter()). Signals vs RxJS Observable: Signals — proste, synchroniczne, automatyczny tracking. Observable — asynchroniczne, strumienie, composable. toSignal(observable$) — Observable -> Signal. toObservable(signal) — Signal -> Observable.",
  },
  {
    question: "Angular 17+ — Standalone Components, Defer i nowe API?",
    answer: "Standalone Components (Angular 14+, stable 17+): komponenty bez NgModule. @Component({standalone: true, imports: [CommonModule, RouterModule], ...}). Zalety: mniej boilerplate. Lazy loading prostszy. Treeshaking lepszy. Angular 17 domyślnie standalone. Migracja z NgModule: ng generate @angular/core:standalone. Automatyczna migracja. @defer (Angular 17): lazy loading bloków w template. @defer {HeavyComponent} — ładuje tylko gdy potrzebny. Triggery: @defer (on viewport) — gdy wejdzie w viewport. @defer (on interaction) — gdy user interaguje. @defer (on idle) — idle czas przeglądarki. @defer (when condition) — gdy warunek spełniony. Placeholders i loading: @placeholder {SkeletonComponent}. @loading {Spinner}. @error {ErrorMessage}. Nowe Control Flow (Angular 17): @if (condition) {...} @else {...}. @for (item of items; track item.id) {...}. @switch (value) {@case 'a' {...} @default {...}}. Zastępuje ngIf, ngFor, ngSwitch dyrektyw. Szybszy (nowy compiler). Wymagane track w @for (wydajność). Angular SSR (17+): hydration wbudowany. @angular/ssr (nowy pakiet). Non-destructive hydration. Defer bloki SSR-compatible. Angular 18+: Zoneless change detection (eksperymentalny). provideExperimentalZonelessChangeDetection(). Pełne Signal-based components. Incremental hydration. Material 3 (Angular Material).",
  },
  {
    question: "RxJS — co to jest i jak używać Observable w Angular?",
    answer: "RxJS (Reactive Extensions for JavaScript): biblioteka do reaktywnego programowania z Observable. Angular używa RxJS intensywnie (HttpClient, Forms, Router). Observable: strumień asynchronicznych wartości. Subskrybujesz -> otrzymujesz wartości. Kompletuje (complete) lub błęd (error). Typy Observables: Observable.of(1,2,3) — synchroniczne. interval(1000) — co sekundę. fromEvent(button, 'click') — DOM events. HttpClient.get() — HTTP request. Subject: Subject: multicasted Observable. BehaviorSubject: trzyma ostatnią wartość. ReplaySubject: trzyma N ostatnich. AsyncSubject: emituje ostatnią przy complete. Operators (pipe): map, filter, switchMap, mergeMap, concatMap, exhaustMap. tap (side effects). debounceTime, throttleTime. distinctUntilChanged. combineLatest, forkJoin, merge, zip. takeUntil, take, first. catchError, retry. switchMap: canceluje poprzedni Observable. Idealny dla search (wpisywanie = cancel poprzedniego requestu). mergeMap: równolegle, nie canceluje. concatMap: sequential. exhaustMap: ignoruje nowe gdy trwa poprzedni. Unsubscribe: memory leaks! takeUntilDestroyed() (Angular 16+) — auto-cleanup. async pipe w template — auto-subscribe i unsubscribe. RxJS + Signals: toSignal(obs$) — Observable -> Signal z auto-unsubscribe. httpResource() (Angular 19) — HTTP request jako Signal.",
  },
  {
    question: "Angular Forms — Reactive Forms vs Template-driven Forms?",
    answer: "Reactive Forms: FormGroup, FormControl, FormArray. Definicja w TypeScript. Synchroniczna walidacja + asynchroniczna. Immutable: każda zmiana tworzy nowy obiekt. Testowalny. TypeScript-friendly. Przykład: this.form = this.fb.group({email: ['', [Validators.required, Validators.email]], password: ['', [Validators.required, Validators.minLength(8)]]}). FormBuilder: skrótowy syntax. this.fb.nonNullable.group({...}) — bezpieczniejszy. template: form [formGroup]='form', input formControlName='email'. Walidacja: form.get('email')?.hasError('required'). form.invalid, form.valid, form.touched. Asynchroniczna walidacja: AsyncValidatorFn. return (control) => this.authService.checkEmail(control.value).pipe(map(exists => exists ? {emailTaken: true} : null)). Template-driven Forms: ngModel. Less TypeScript, więcej template. Prostszy setup. Mniej kontroli. Kiedy: proste formularze. Prototypy. Reactive Forms dla: złożone formularze. Dynamiczne pola. Walidacja cross-field. Testowanie. FormArray: dynamiczne listy pól. addControl(), removeAt(). Iteracja w template. Angular 14+ typed forms: strict typing dla FormControl. FormControl value type znany. Signals + Forms: signal-based forms (eksperymentalny). injectValidators(). Angular Material Forms: mat-form-field, mat-input, mat-select, mat-datepicker. Standaryzacja UI.",
  },
  {
    question: "Angular vs React vs Vue — kiedy wybrać Angular dla projektu?",
    answer: "Angular (Google): pełny framework (all-batteries-included). TypeScript mandatory. DI (Dependency Injection) wbudowane. Opinionated (jeden sposób na każdy problem). Duży boilerplate (historycznie, coraz mniej z v17+). Skalowalny dla dużych zespołów. Enterprise choice. Angular kiedy: duże enterprise aplikacje. Duże zespoły (10+ devs). Java/Spring background. DI patterns preferowane. Google Cloud/Firebase ekosystem. Angular Material design system. React kiedy: największy ekosystem. Flex (wiele podejść). Startup i enterprise. Full-stack TS (Next.js). Największa społeczność. Vue kiedy: prostszy syntax. Świetna dokumentacja. Mniejszy projekt. PHP/Laravel ekosystem (częste połączenie). China market (Alibaba używa Vue). Solidny framework niszowy. Solid.js (SolidJS): reactivity without VDOM. 6KB runtime. Signals native (Preact Signals, Angular Signals inspirowane). Qwik: resumability (brak hydration). Tiny initial JS. E-commerce optimized. Htmx: hypermedia-driven (nie SPA). Minimalny JS. Server-rendered HTML + AJAX. Popularne: Django, Rails, Phoenix. 2024 adoption: React — 40%+ (dominant). Vue — 15%. Angular — 10%. Svelte, Solid — niszowe ale rosnące.",
  },
];

const angularFeatures = [
  { funkcja: "Signals", wersja: "Angular 16+ (stable 17+)", opis: "Granularna reaktywność bez Zone.js", zastepuje: "Zone.js Change Detection" },
  { funkcja: "Standalone Components", wersja: "Angular 14+ (default 17+)", opis: "Komponenty bez NgModule", zastepuje: "NgModule declarations" },
  { funkcja: "@defer", wersja: "Angular 17+", opis: "Lazy loading bloków w template z triggers", zastepuje: "Manualne lazy imports" },
  { funkcja: "Control Flow (@if/@for)", wersja: "Angular 17+", opis: "Nowe dyrektywy kontrolne w template", zastepuje: "*ngIf, *ngFor, *ngSwitch" },
  { funkcja: "Zoneless", wersja: "Angular 18+ (experimental)", opis: "Pełna reaktywność bez Zone.js overhead", zastepuje: "Zone.js (async patching)" },
  { funkcja: "Typed Reactive Forms", wersja: "Angular 14+", opis: "Ścisłe typowanie FormControl", zastepuje: "Untyped FormControl" },
];

export default function BlogAngularSignalsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Angular Signals, Standalone Components, Defer | Fotz Studio"
        description="Angular 17+ Signals, Standalone Components, @defer, nowy Control Flow, RxJS Observable, Reactive Forms i Angular vs React vs Vue — kiedy wybrać Angular."
        canonicalUrl="https://fotz.pl/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024"

        keywords="Angular Signals, Standalone Components, Defer co to jest, Angular Signals, Standalone Components, Defer jak działa, Angular Signals, Standalone Components, Defer tutorial, Angular Signals, Standalone Components, Defer przykład, czym jest Angular Signals, Standalone Components, Defer, Angular Signals, Standalone Components, Defer dokumentacja, Angular Signals, Standalone Components, Defer przewodnik"

        canonical="https://fotz.pl/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024"
      />
      <ArticleSchema
        title="Angular Signals, Standalone Components, Defer — Angular 17+ nowości 2024?"
        description="6 nowych funkcji Angular 17+ (Signals/Standalone/Defer/Control Flow/Zoneless/Typed Forms) — RxJS Observable, Angular vs React vs Vue, kiedy Angular wybrać."
        url="https://fotz.pl/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Angular Signals", url: "https://fotz.pl/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-rose-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Angular Signals", url: "/blog/angular-signals-standalone-components-defer-angular-17-nowosci-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Angular / Frontend
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Angular 17+ i Signals
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Signals zamiast Zone.js, Standalone Components bez NgModule, @defer
              dla lazy loading i nowy Control Flow w Angular 17+.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Granularna reaktywność", value: "Signals" },
                { label: "Bez NgModule", value: "Standalone" },
                { label: "Lazy bloki", value: "@defer" },
                { label: "Bez Zone.js", value: "Zoneless" },
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

      {/* Funkcje */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 nowych funkcji Angular 17+</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Signals, Standalone Components, @defer, Control Flow, Zoneless i Typed Forms
              — Angular 17+ to nowoczesny framework z granularną reaktywnością.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-4">
            {angularFeatures.map((f) => (
              <FadeInView key={f.funkcja}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900">{f.funkcja}</h3>
                    <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded">{f.wersja}</span>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">{f.opis}</p>
                  <p className="text-xs text-gray-500">Zastępuje: {f.zastepuje}</p>
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

      <RelatedArticles currentArticleId="angular-signals-standalone-components-defer-angular-17-nowosci-2024" />
      <ContactSection />
    </Layout>
  );
}
