import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest date-fns i dlaczego wygrała z Moment.js?",
    answer: "date-fns: modularna biblioteka dat JavaScript (2014, Sasha Koss). Tree-shakeable — importuj tylko to co używasz. Immutable — nie mutuje dat. TypeScript natywny. Pure functions — bez side effects. Moment.js (legacy, 2011): pierwsza popularna biblioteka dat. Monolityczna — cały bundle (232KB minified). Mutable — mutuje obiekty Date. deprecated dla nowych projektów (oficjalne zalecenie od 2020). Przykład date-fns: import {format, addDays, differenceInDays, isAfter, parseISO, startOfWeek, endOfMonth} from 'date-fns'. import {pl} from 'date-fns/locale'. format(new Date(), 'dd MMMM yyyy', {locale: pl}) = '13 kwietnia 2024'. addDays(new Date(), 7) — za tydzień. differenceInDays(endDate, startDate) — ilość dni różnicy. isAfter(date1, date2). startOfWeek(new Date(), {weekStartsOn: 1}) — poniedziałek. parseISO('2024-04-13T12:00:00Z') — parse ISO string. Formatowanie: dd.MM.yyyy (PL format). yyyy-MM-dd (ISO format). HH:mm:ss. d MMMM yyyy, HH:mm. Strefy czasowe (date-fns-tz): format(utcDate, 'yyyy-MM-dd HH:mm', {timeZone: 'Europe/Warsaw'}). toZonedTime(), fromZonedTime(). Parsowanie: parse('13/04/2024', 'dd/MM/yyyy', new Date()). isValid(parsedDate). Comparison functions: isBefore, isAfter, isEqual. compareAsc, compareDesc do sortowania. Bundle size: date-fns v3 — 13KB dla podstawowych operacji (tree-shaken). Moment.js — 232KB zawsze.",
  },
  {
    question: "Day.js — ultralekka alternatywa dla Moment.js?",
    answer: "Day.js: Moment.js-compatible API, 2KB gzipped (Ikaros Kun, 2018). Łatwa migracja z Moment.js (zmień import). Plugin system zamiast wszystkiego w bundle. Podstawy: dayjs() — bieżąca data. dayjs('2024-04-13'). dayjs(1712995200000) — ze timestamp. Formatowanie: dayjs().format('DD.MM.YYYY') = '13.04.2024'. dayjs().format('MMMM D, YYYY') = 'April 13, 2024'. Manipulacja: dayjs().add(7, 'day'). dayjs().subtract(1, 'month'). dayjs().startOf('week'). dayjs().endOf('year'). Różnica: dayjs('2024-04-20').diff(dayjs(), 'day') = 7. Porównania: dayjs().isBefore(dayjs('2024-12-31')). dayjs().isAfter(). dayjs().isSame('2024-04-13', 'day'). Pluginy (extend separately): import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'. dayjs.extend(isSameOrBefore). Polskie locale: import 'dayjs/locale/pl'. dayjs.locale('pl'). dayjs().format('MMMM') = 'kwiecień'. Duration plugin: dayjs.duration(2, 'hours').humanize() = 'a few hours'. RelativeTime: dayjs('2024-01-01').fromNow() = '3 months ago'. Calendar: dayjs().calendar(null, {sameDay: '[Dzisiaj] HH:mm', nextDay: '[Jutro]'}). Day.js vs date-fns: Day.js — Moment.js migration, small bundle, mutable (clone przed mutacją). date-fns — pure functions, tree-shaking lepsza, TypeScript. Kiedy Day.js: legacy Moment.js codebase. Małe projekty. Mała nauka krzywej.",
  },
  {
    question: "Temporal API — nowy standard JavaScript dla dat i czasu?",
    answer: "Temporal: nowy proposal TC39 dla JavaScript (Stage 3, 2024). Rozwiązuje wszystkie problemy native Date: mutability, timezone bugs, DST issues. Obiekty: Temporal.PlainDate — data bez czasu (2024-04-13). Temporal.PlainTime — czas bez daty (12:00:00). Temporal.PlainDateTime — data z czasem, bez timezone. Temporal.ZonedDateTime — z timezone. Temporal.Instant — punkt w czasie (Unix timestamp). Temporal.Duration — czas trwania. Temporal.Now: Temporal.Now.plainDateTimeISO() — bieżąca data i czas. Temporal.Now.zonedDateTimeISO('Europe/Warsaw'). Temporal.Now.instant(). Tworzenie: Temporal.PlainDate.from('2024-04-13'). Temporal.PlainDate.from({year: 2024, month: 4, day: 13}). Manipulacja (immutable!): const tomorrow = today.add({days: 1}). const nextMonth = date.add({months: 1}). const earlier = time.subtract({hours: 2}). Porównania: Temporal.PlainDate.compare(date1, date2) = -1|0|1. date1.equals(date2). Timezone-aware: const warsaw = Temporal.ZonedDateTime.from('2024-04-13T12:00:00[Europe/Warsaw]'). warsaw.withTimeZone('America/New_York'). DST handling automatyczny. Duration: const d = Temporal.Duration.from({hours: 2, minutes: 30}). d.add(Temporal.Duration.from({minutes: 15})). Wsparcie przeglądarek 2024: Chrome 121+, Firefox, Safari — za polyfill (@js-temporal/polyfill). Produkcja: używaj polyfill. Kiedy Temporal: nowe projekty TypeScript. Timezone-critical apps. Kompleksowe operacje na datach.",
  },
  {
    question: "Strefy czasowe — problemy UTC, DST i jak je rozwiązać w Node.js?",
    answer: "Problemy z timezone w JavaScript: new Date() — zwraca local system time. JSON.stringify(date) — konwertuje do UTC. Różne wyniki na różnych serwerach (TZ env). DST (Daylight Saving Time) — zegarek przesuwa się o godzinę. Np. 2024-03-31 02:00 -> 03:00 w Europie. Błędy przy dodawaniu 24h zamiast 1 dnia. Najlepsze praktyki: Przechowuj zawsze UTC w bazie danych. Konwertuj na local time przy wyświetlaniu. Używaj timezone-aware bibliotek. PostgreSQL: timestamp with time zone (timestamptz). Przechowuje UTC. Konwertuje przy SET timezone. Prisma: DateTime -> timestamptz. date-fns-tz: toZonedTime(utcDate, 'Europe/Warsaw'). format(zonedDate, 'dd.MM.yyyy HH:mm', {timeZone: 'Europe/Warsaw'}). fromZonedTime(localDate, 'Europe/Warsaw') -> UTC. Luxon: DateTime.fromISO(iso).setZone('Europe/Warsaw'). dt.toISO() -> zawsze UTC. DateTime.now().setZone('Europe/Warsaw'). DST-safe date operations: addDays zamiast addHours(24). Temporal API obsługuje DST automatycznie. Przykład DST bug: addHours(new Date('2024-03-31 01:30'), 2) = '2024-03-31 04:30' (pominięcie 02:00-03:00). addDays(new Date('2024-03-31'), 1) = '2024-04-01' (poprawnie). Node.js TZ env: process.env.TZ = 'UTC'. Wymuszaj UTC na serwerze. Unikaj ambiguity. Intl.DateTimeFormat (native): formatowanie z timezone bez bibliotek. Intl.DateTimeFormat('pl-PL', {timeZone: 'Europe/Warsaw', hour12: false}).format(date).",
  },
  {
    question: "Parsowanie i walidacja dat — ISO 8601, locale formats i edge cases?",
    answer: "ISO 8601: standard daty i czasu. 2024-04-13T12:00:00Z (UTC). 2024-04-13T14:00:00+02:00 (z offset). YYYY-MM-DD (data). HH:mm:ss (czas). Parsowanie native Date: new Date('2024-04-13') — interpretacja jako UTC midnight (problem ze strefami). new Date('2024-04-13T12:00:00Z') — explicit UTC. new Date('April 13, 2024') — locale-dependent (unikaj). Bezpieczne parsowanie z date-fns: parseISO('2024-04-13T12:00:00Z') — zawsze poprawne. parse('13/04/2024', 'dd/MM/yyyy', new Date()) — locale format. isValid(parsedDate) — sprawdź poprawność. Invalid date detection: isNaN(date.getTime()). isValid() z date-fns. Walidacja z Zod: z.string().datetime() — ISO datetime. z.coerce.date() — coerce string/number to Date. z.string().date() — tylko data (YYYY-MM-DD). Zod regex: z.string().regex(/^\d{4}-\d{2}-\d{2}$/). Edge cases: 2024-02-29 (leap year). 2023-02-29 (nieistniejąca). isValid check. December 31, 23:59 -> January 1 midnight rollover. Century boundaries. Locale formats PL: dd.MM.yyyy (13.04.2024). dd/MM/yyyy (13/04/2024). dd MMMM yyyy (13 kwietnia 2024). Relative time: formatDistanceToNow(date, {locale: pl}) = 'ponad rok temu'. formatRelative(date, new Date(), {locale: pl}) = 'ostatni czwartek o 12:00'. Date range utilities: eachDayOfInterval({start, end}). isWithinInterval(date, {start, end}). clamp(date, {start, end}) — clamp do zakresu. Calendar utils: getDay(date) = 0-6 (0=niedziela). getWeek(date, {weekStartsOn: 1}) — numer tygodnia. getDaysInMonth(date) = 28-31.",
  },
];

const dateLibraries = [
  { biblioteka: "date-fns", rozmiar: "13KB (tree-shaken)", api: "Pure functions (import per function)", ts: "Natywny", timezone: "date-fns-tz plugin", kiedy: "Modern projects, TypeScript, tree-shaking" },
  { biblioteka: "Day.js", rozmiar: "2KB core", api: "Chainable (Moment-like)", ts: "Natywny", timezone: "Timezone plugin", kiedy: "Moment.js migration, małe bundle" },
  { biblioteka: "Luxon", rozmiar: "23KB", api: "Immutable, OOP", ts: "Dobry", timezone: "Wbudowany (Intl API)", kiedy: "Timezone-heavy, Moment successor" },
  { biblioteka: "Moment.js", rozmiar: "232KB", api: "Chainable, mutable", ts: "Zewnętrzny @types", timezone: "moment-timezone (±50KB)", kiedy: "Legacy tylko — nie używaj w nowych" },
  { biblioteka: "Temporal API", rozmiar: "0KB (native)", api: "Immutable, type-safe", ts: "Natywny (spec)", timezone: "ZonedDateTime native", kiedy: "Future standard — polyfill teraz" },
  { biblioteka: "Intl.DateTimeFormat", rozmiar: "0KB (native)", api: "Format only (native)", ts: "Natywny", timezone: "Wbudowany", kiedy: "Formatowanie bez manipulacji" },
];

export default function BlogDateLibrariesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="date-fns, Day.js, Luxon, Temporal API | Fotz Studio"
        description="date-fns vs Day.js vs Luxon vs Moment.js vs Temporal API — parsowanie dat, strefy czasowe, DST, ISO 8601, locale PL i walidacja Zod w TypeScript i Next.js."
        canonicalUrl="https://fotz.pl/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024"

        keywords="date-fns, Day.js, Luxon, Temporal API co to jest, date-fns, Day.js, Luxon, Temporal API jak działa, date-fns, Day.js, Luxon, Temporal API tutorial, date-fns, Day.js, Luxon, Temporal API przykład, czym jest date-fns, Day.js, Luxon, Temporal API, date-fns, Day.js, Luxon, Temporal API dokumentacja, date-fns, Day.js, Luxon, Temporal API przewodnik"

        canonical="https://fotz.pl/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024"
      />
      <ArticleSchema
        title="date-fns, Day.js, Luxon, Temporal API — biblioteki dat JavaScript 2024?"
        description="6 bibliotek dat (date-fns/Day.js/Luxon/Moment.js/Temporal/Intl) — formatowanie, parsowanie, strefy czasowe, DST, ISO 8601 i walidacja Zod dla TypeScript."
        url="https://fotz.pl/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Biblioteki Dat JavaScript", url: "https://fotz.pl/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Biblioteki Dat JavaScript", href: "/blog/date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              JavaScript / Dates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Biblioteki Dat w JavaScript
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              date-fns, Day.js, Luxon, Temporal API i Intl — parsowanie, formatowanie,
              strefy czasowe, DST i walidacja w TypeScript i Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Tree-shakeable", value: "date-fns" },
                { label: "2KB bundle", value: "Day.js" },
                { label: "Future standard", value: "Temporal" },
                { label: "Zero deps", value: "Intl API" },
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

      {/* Biblioteki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 bibliotek dat JavaScript — porównanie</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              date-fns, Day.js, Luxon, Moment.js (legacy), Temporal API i Intl —
              rozmiar, API, TypeScript i obsługa stref czasowych.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Biblioteka</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rozmiar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">API</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">TypeScript</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {dateLibraries.map((l, i) => (
                  <tr key={l.biblioteka} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{l.biblioteka}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.rozmiar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.api}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{l.ts}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{l.kiedy}</td>
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

      <RelatedArticles currentArticleId="date-fns-dayjs-luxon-temporal-api-biblioteki-dat-javascript-2024" />
      <ContactSection />
    </Layout>
  );
}
