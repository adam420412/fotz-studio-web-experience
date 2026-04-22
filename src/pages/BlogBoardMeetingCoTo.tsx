import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Board Meeting?",
    answer: "Board Meeting (spotkanie zarządu / posiedzenie rady dyrektorów) to formalne spotkanie gdzie CEO i management team prezentują wyniki, strategię i kluczowe decyzje przed członkami Rady Nadzorczej lub Rady Dyrektorów (Board of Directors). Dla startupów finansowanych przez VC — Board to CEO, founderzy, partnerzy VC i niezależni dyrektorzy. Board Meeting zazwyczaj odbywa się kwartalnie i trwa 3-6 godzin. Skuteczne Board Meeting to nie 'update sesja' — to sesja strategiczna gdzie Board pomaga CEO rozwiązywać najważniejsze wyzwania firmy. Większość founderów boi się Board Meeting — i przygotowuje je źle.",
  },
  {
    question: "Jaka powinna być agenda Board Meeting?",
    answer: "Standardowa agenda Board Meeting (4-5 godzin): Zamknięte sesje (30 min) — Board bez management, potem management bez CEO (jeśli konieczne). CEO Update (15 min) — 3-5 najważniejszych osiągnięć i wyzwań kwartału. Financials (30 min) — P&L, cash, runway, forecast vs. plan. Business Performance (60 min) — KPIs per obszar: sprzedaż, product, operations. Strategic Discussion (60-90 min) — jeden lub dwa kluczowe tematy strategiczne gdzie Board wnosi wartość. Votes i Formal Resolutions (15 min) — jeśli wymagane prawnie lub przez shareholders agreement. Open Q&A (30 min). Kluczowa zasada: mniej update, więcej discussion. Board nie powinien siedzieć jak audytorium przez 4 godziny.",
  },
  {
    question: "Jak przygotować Board Deck?",
    answer: "Board Deck — dobry board package: Wysyłaj minimum 72 godziny przed spotkaniem. Deck nie zastępuje spotkania — to fundament dyskusji. Struktura: Executive Summary (1 strona z najważniejszymi highlights i lowlights), Financials (P&L, cash, key metrics vs. plan), Business Update (per department — brief), Strategic Deck (głębsze materiały na strategic discussions). Zasady: 20-30 slajdów max. Każdy slajd ma 'so what' — wniosek na górze. Nie ukrywaj problemów — Board i tak odkryje lub dowie się. Lowlights z planem naprawy są mocniejsze niż tylko lowlights. Używaj consistent format co kwartał — żeby Board widział trend.",
  },
  {
    question: "Jak CEO powinien prowadzić Board Meeting?",
    answer: "Prowadzenie Board Meeting przez CEO: Przygotuj listę decyzji i wsparcia które potrzebujesz — to jest Twoja agenda, nie Board'u. Nie przeładowuj spotkania update'ami — zakładaj że Board przeczytał package. Otwórz czas na strategiczną dyskusję — zadaj pytanie, nie prezentuj odpowiedź. Zarządzaj czasem aktywnie — zaznacz gdy 15 minut do końca punktu. Bądź radykalnie szczery o problemach — Board'owi można zaufać bardziej niż myślisz, a ukrywanie problemów niszczy relację. Zbieraj feedback od Board przed spotkaniem — co chcą omówić? Poproś o konkretne wsparcie — 'Potrzebuję Twoich introductions do X' nie 'jeśli możesz pomóc'. Follow-up 48h po spotkaniu — decyzje, action items, kto odpowiada.",
  },
  {
    question: "Jakie są najczęstsze błędy w Board Meeting?",
    answer: "Najczęstsze błędy: Deck wysłany za późno — Board nie ma czasu na review. Zbyt dużo update, za mało dyskusji — Board czuje się jak audytorium, nie partner. Ukrywanie złych wiadomości — Board odkryje lub dowie się od kogoś, i straci zaufanie do CEO. Brak konkretnych asks — CEO wychodzi ze spotkania bez zobowiązań od Board. Przekroczenie czasu — Board ma inne spotkania, szanuj czas. Niespójne formaty — trudno śledzić trendy gdy metryki zmieniają definicje. Brak follow-upu — decyzje nie są dokumentowane, action items są tracone. Zaskakiwanie Board złymi wiadomościami na spotkaniu — poważne problemy powinny być komunikowane między spotkaniami, nie na Board Meeting. Dobry CEO ma regularny (miesięczny) kontakt z każdym Board memberem poza formalnymi spotkaniami.",
  },
];

const boardMeetingAgenda = [
  {
    punkt: "Pre-meeting Admin",
    czas: "Przed spotkaniem",
    opis: "Board Package wysłany minimum 72h wcześniej. Agenda ustalona z Chair. Pre-reads i materiały skompletowane.",
    kolor: "gray",
  },
  {
    punkt: "Zamknięta sesja Board",
    czas: "30 min",
    opis: "Board bez managementu — Board może omówić sprawy dotyczące CEO lub management. Potem CEO wchodzi, management wychodzi.",
    kolor: "gray",
  },
  {
    punkt: "CEO Update",
    czas: "15 min",
    opis: "Najważniejsze 3-5 highlights i lowlights kwartału. Ton i nastrój firmy. Co CEO potrzebuje od Board.",
    kolor: "blue",
  },
  {
    punkt: "Financials Review",
    czas: "30 min",
    opis: "P&L, cash flow, runway, metrics vs. plan. CFO prezentuje, CEO komentuje strategicznie. Focus na variances i co za nimi stoi.",
    kolor: "green",
  },
  {
    punkt: "Business Performance",
    czas: "60 min",
    opis: "Sprzedaż (ARR, pipeline, win rate), Produkt (roadmap, launch, metryki adopcji), HR (headcount, key hires, attrition).",
    kolor: "purple",
  },
  {
    punkt: "Strategic Discussion",
    czas: "60-90 min",
    opis: "1-2 tematy strategiczne gdzie Board wnosi wartość — nie update ale dyskusja i decyzja. Przygotuj 2-3 opcje, nie jedną odpowiedź.",
    kolor: "orange",
  },
  {
    punkt: "Votes i Resolutions",
    czas: "15 min",
    opis: "Formalne głosowania wymagane przez Shareholder Agreement lub prawo. Stock options, financing, kluczowe kontrakty.",
    kolor: "red",
  },
  {
    punkt: "Open Q&A i Zamknięcie",
    czas: "30 min",
    opis: "Otwarte pytania. Podsumowanie action items. Data następnego spotkania. CEO follow-up w 48h.",
    kolor: "teal",
  },
];

const boardDeckPrinciples = [
  { zasada: "Executive Summary na starcie", opis: "1 strona z 3-5 highlights, 3-5 lowlights, kluczowe metryki i konkretne asks do Board" },
  { zasada: "Consistent format kwartalnie", opis: "Te same metryki, te same definicje co kwartał — żeby Board widział trend, nie uczył się nowego formatu" },
  { zasada: "So what na każdym slajdzie", opis: "Każdy slajd ma wniosek na górze — nie tylko dane. 'Revenue grew 15% MoM driven by Enterprise segment expansion'" },
  { zasada: "Lowlights z planem", opis: "Każde Lowlight ma 'Co robimy' — to pokazuje świadomość i kontrolę, nie słabość" },
  { zasada: "Max 25-30 slajdów", opis: "Gęsty, długi deck nie jest czytany przed spotkaniem. Pre-reads powinny być krótkie i czytelne" },
  { zasada: "Strategic deck osobno", opis: "Głębsze materiały strategiczne jako osobny appendix — nie mix z operational update" },
];

export default function BlogBoardMeetingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Board Meeting — jak przygotować spotkanie zarządu? | Fotz.pl"
        description="Board Meeting (spotkanie zarządu) — agenda, Board Deck, jak CEO powinien prowadzić spotkanie i najczęstsze błędy. Kompletny przewodnik dla founderów i CEO."
        canonical="https://fotz.pl/blog/board-meeting-spotkanie-zarzadu-jak-przygotowac"

        keywords="Board Meeting co to jest, Board Meeting definicja, czym jest Board Meeting, Board Meeting przykłady, jak działa Board Meeting, Board Meeting znaczenie, Board Meeting przewodnik"
      />
      <ArticleSchema
        title="Board Meeting — jak przygotować spotkanie zarządu?"
        description="Kompletny przewodnik po Board Meeting: agenda, Board Deck, prowadzenie spotkania i błędy do uniknięcia."
        url="https://fotz.pl/blog/board-meeting-spotkanie-zarzadu-jak-przygotowac"
        datePublished="2024-02-15"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Board Meeting", url: "https://fotz.pl/blog/board-meeting-spotkanie-zarzadu-jak-przygotowac" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Board Meeting", url: "/blog/board-meeting-spotkanie-zarzadu-jak-przygotowac" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-slate-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Governance i Leadership
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Board Meeting
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Większość founderów boi się Board Meeting i spędza tygodnie na przygotowaniu update'u.
              Najlepsze Board Meetings to strategiczne dyskusje — nie pokaz slajdów.
              Naucz się jak zmienić Board z audytorium w partnera.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Częstotliwość", value: "Kwartalnie" },
                { label: "Czas trwania", value: "3-6 godzin" },
                { label: "Board Package (przed)", value: "72h wcześniej" },
                { label: "Kluczowa sesja", value: "Strategic Discussion" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-slate-300">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Standardowa agenda Board Meeting</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Dobra agenda rezerwuje przynajmniej 60-90 minut na strategiczną dyskusję.
              Jeśli 90% spotkania to update i slajdy — robisz to źle.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {boardMeetingAgenda.map((p, i) => (
              <FadeInView key={p.punkt}>
                <div className={`rounded-xl border p-5 ${
                  p.kolor === "gray" ? "border-gray-200 bg-gray-50" :
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  p.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  p.kolor === "red" ? "border-red-200 bg-red-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 text-right w-24">
                      <div className={`font-bold text-sm ${
                        p.kolor === "orange" ? "text-orange-700" : "text-gray-500"
                      }`}>{p.czas}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-bold mb-1 ${
                        p.kolor === "gray" ? "text-gray-700" :
                        p.kolor === "blue" ? "text-blue-800" :
                        p.kolor === "green" ? "text-green-800" :
                        p.kolor === "purple" ? "text-purple-800" :
                        p.kolor === "orange" ? "text-orange-800" :
                        p.kolor === "red" ? "text-red-800" :
                        "text-teal-800"
                      }`}>{p.punkt}</h3>
                      <p className="text-sm text-gray-700">{p.opis}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Board Deck Principles */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 zasad skutecznego Board Deck</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Board Deck nie jest raportem rocznym. Jest materialem który ma umożliwić
              strategiczną dyskusję — nie zastąpić ją. Najlepsze decks są krótkie, szczere i zorientowane na decyzję.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {boardDeckPrinciples.map((z, i) => (
              <FadeInView key={z.zasada}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-slate-700 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{z.zasada}</h3>
                      <p className="text-sm text-gray-700">{z.opis}</p>
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

      <RelatedArticles currentArticleId="board-meeting-spotkanie-zarzadu-jak-przygotowac" />
      <ContactSection />
    </Layout>
  );
}
