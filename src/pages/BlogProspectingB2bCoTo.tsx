import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest prospecting w sprzedaży B2B?",
    answer: "Prospecting (poszukiwanie klientów) to proces identyfikowania i kwalifikowania potencjalnych klientów (prospects), którzy mogą być zainteresowani Twoim produktem lub usługą. Obejmuje działania takie jak cold email, cold calling, LinkedIn outreach, social selling, networking i referral outreach. Celem prospectingu jest generowanie nowych rozmów sprzedażowych — wypełnienie górnego etapu lejka. Bez systematycznego prospectingu pipeline wysycha, a bez pipeline nie ma sprzedaży.",
  },
  {
    question: "Jakie są najskuteczniejsze kanały prospectingu B2B?",
    answer: "Ranking skuteczności kanałów prospectingu B2B: Referrals i warm introductions (najwyższy conversion rate — 20–50%). LinkedIn outreach + InMail (dobry dla decision makerów, niższe nasycenie niż email). Cold email sequences (skalowalne, niski koszt, akceptowalna konwersja 1–5%). Cold calling (nieżyjący według niektórych, ale wciąż skuteczny w enterprise). Social selling przez content (długoterminowy, inbound leads z LinkedIn). Events i konferencje (wysokiej jakości kontakty, ale drogo). Kanały różnią się zależnie od ICP, branży i ACV.",
  },
  {
    question: "Jak napisać skuteczny cold email?",
    answer: "Elementy skutecznego cold emaila: Temat (Subject Line) — krótki, personalny, intrygujący (nie 'Nasza platforma X' ale 'Widziałem Wasz job posting na RevOps'). Otwarcie — nawiązanie do konkretnego triggera lub badania klienta. Ból i wartość — jedno zdanie o problemie, który rozwiązujesz. Social proof — krótkie potwierdzenie wiarygodności. CTA — jedno konkretne pytanie lub prośba o 15 min rozmowę. Długość: maksimum 5–7 zdań. Personalizacja: minimum linia pierwsza musi być unikalna. Wysyłaj sekwencje (3–5 emaili), nie pojedyncze wiadomości.",
  },
  {
    question: "Co to jest cold calling i czy wciąż działa?",
    answer: "Cold calling to dzwonienie do potencjalnych klientów bez wcześniejszego kontaktu. Wciąż działa — badania RAIN Group wskazują, że 82% buyers akceptuje meeting gdy sprzedawca dzwoni. Kluczowe czynniki sukcesu: dzwoń do właściwych osób (decisionmakers w ICP firmach), miej konkretny opener z value proposition, nie pytaj 'Czy masz chwilę?' (prawie zawsze 'nie'), przygotuj odpowiedzi na typowe obiekcje, aim for 50–100 dials dziennie dla SDR. Warm calling (po wcześniejszym touchpoincie emailowym lub LinkedIn) ma 2–3x wyższy connect rate niż zimny.",
  },
  {
    question: "Jak zbudować pipeline przez LinkedIn?",
    answer: "Prospecting przez LinkedIn: Zoptymalizuj profil pod osobę, do której chcesz dotrzeć (nie CV, ale landing page dla Twojego ICP). Publikuj content relevant dla Twojego ICP — buyer journey, insights branżowe. Angażuj się w posty Twoich prospects przed wysłaniem DM. Wyślij connection request z personalnym notatką nawiązującą do czegoś konkretnego. Po akceptacji — nie sprzedawaj natychmiast. Daj wartość (artykuł, insight, gratulacje) przed pierwszym pitch. LinkedIn Sales Navigator umożliwia zaawansowane filtry i sygnały intencji (job changes, content interactions).",
  },
];

const prospectingChannels = [
  {
    kanał: "Cold Email",
    effectivnność: "Średnia–Wysoka",
    skalowalność: "Bardzo wysoka",
    koszt: "Niski",
    najlepszy: "SMB, Mid-Market, developer tools",
    response: "1–5% (przy dobrej personalizacji 5–15%)",
    tools: ["Apollo.io", "Instantly", "Lemlist", "Outreach", "Salesloft"],
    kolor: "blue",
  },
  {
    kanał: "LinkedIn Outreach",
    effectivnność: "Wysoka",
    skalowalność: "Średnia",
    koszt: "Średni (Sales Nav ~500 PLN/mies.)",
    najlepszy: "Enterprise, C-Level, decision makers",
    response: "5–20% (Sales Nav connection requests)",
    tools: ["LinkedIn Sales Navigator", "Dux-Soup", "Expandi", "Lemlist"],
    kolor: "sky",
  },
  {
    kanał: "Cold Calling",
    effectivnność: "Wysoka per kontakt",
    skalowalność: "Niska (czas-intensywne)",
    koszt: "Wysoki (czas SDR)",
    najlepszy: "Enterprise, krótkie cykle, inwestycje finansowe",
    response: "Connect rate 5–15%, meeting rate 1–3%",
    tools: ["Aircall", "JustCall", "Chorus", "Gong", "Dialpad"],
    kolor: "green",
  },
  {
    kanał: "Referrals",
    effectivnność: "Bardzo wysoka",
    skalowalność: "Bardzo niska",
    koszt: "Bardzo niski",
    najlepszy: "Każdy segment — najwyższy win rate",
    response: "20–50% konwersja do dealu",
    tools: ["Referral programs", "CS championing", "LinkedIn mutual connections"],
    kolor: "purple",
  },
];

const prospectingSequence = [
  { dzien: "Dzień 1", kanał: "Email", treść: "Personalny cold email — temat nawiązujący do triggera (job posting, news, mutual connection)" },
  { dzien: "Dzień 3", kanał: "LinkedIn", treść: "Connection request z personalizowaną notką nawiązującą do emaila lub triggera" },
  { dzien: "Dzień 5", kanał: "Email", treść: "Follow-up email — inne podejście, pytanie lub insight zamiast powtórzenia oferty" },
  { dzien: "Dzień 8", kanał: "LinkedIn", treść: "Like lub comment na poście prospecta — zwiększa widoczność bez presji" },
  { dzien: "Dzień 11", kanał: "Email", treść: "Trzeci email — case study lub konkretna liczba/wynik dla podobnej firmy" },
  { dzien: "Dzień 15", kanał: "Cold call", treść: "Telefoniczny follow-up — odwołanie do sekwencji emailowej ('Wysyłałem do Cię emaile...')" },
  { dzien: "Dzień 21", kanał: "Email", treść: "Break-up email — ostatni email, który daje łatwy out i zachowuje relację na przyszłość" },
];

export default function BlogProspectingB2bCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Prospecting B2B — co to jest i jak generować leady? | Fotz.pl"
        description="Prospecting B2B — kanały (cold email, LinkedIn, cold calling), jak pisać cold emaile, budować pipeline i sekwencje outreach. Kompletny przewodnik dla Sales."
        canonicalUrl="https://fotz.pl/blog/prospecting-b2b-generowanie-leadow"

        keywords="Prospecting B2B co to jest, Prospecting B2B definicja, czym jest Prospecting B2B, Prospecting B2B w marketingu, Prospecting B2B przykłady, jak działa Prospecting B2B, Prospecting B2B strategia"

        canonical="https://fotz.pl/blog/prospecting-b2b-generowanie-leadow"
      />
      <ArticleSchema
        title="Prospecting B2B — co to jest i jak generować leady?"
        description="Kompletny przewodnik po prospectingu B2B: kanały, cold email, LinkedIn, cold calling i sekwencje outreach."
        url="https://fotz.pl/blog/prospecting-b2b-generowanie-leadow"
        datePublished="2024-02-09"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Prospecting B2B", url: "https://fotz.pl/blog/prospecting-b2b-generowanie-leadow" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Prospecting B2B", href: "/blog/prospecting-b2b-generowanie-leadow" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Generowanie Leadów
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prospecting B2B
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Bez systematycznego prospectingu nie ma pipeline, bez pipeline nie ma sprzedaży.
              Poznaj skuteczne kanały, jak pisać cold emaile, które dostają odpowiedź i jak budować
              wielokanałowe sekwencje outreach.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Kanałów prospectingu", value: "4" },
                { label: "Kroków sekwencji", value: "7" },
                { label: "Referrals conversion", value: "20–50%" },
                { label: "Cold email response", value: "1–15%" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kanały */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 główne kanały prospectingu B2B</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy kanał ma inne zalety, koszty i best-case response rates.
              Najlepsze teamy łączą kilka kanałów w spójne sekwencje multi-touch.
            </p>
          </FadeInView>
          <div className="grid md:grid-cols-2 gap-6">
            {prospectingChannels.map((ch) => (
              <FadeInView key={ch.kanał}>
                <div className={`rounded-xl p-6 border-2 ${
                  ch.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  ch.kolor === "sky" ? "border-sky-200 bg-sky-50" :
                  ch.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    ch.kolor === "blue" ? "text-blue-800" :
                    ch.kolor === "sky" ? "text-sky-800" :
                    ch.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>
                    {ch.kanał}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {[
                      { l: "Skuteczność", v: ch.effectivnność },
                      { l: "Skalowalność", v: ch.skalowalność },
                      { l: "Koszt", v: ch.koszt },
                      { l: "Najlepszy dla", v: ch.najlepszy },
                      { l: "Response rate", v: ch.response },
                    ].map((item) => (
                      <div key={item.l} className="flex gap-2">
                        <span className="text-xs text-gray-500 w-28 flex-shrink-0 font-semibold">{item.l}:</span>
                        <span className="text-sm text-gray-700">{item.v}</span>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-2">Popularne narzędzia</div>
                    <div className="flex flex-wrap gap-1">
                      {ch.tools.map((t) => (
                        <span key={t} className={`text-xs px-2 py-1 rounded ${
                          ch.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                          ch.kolor === "sky" ? "bg-sky-200 text-sky-800" :
                          ch.kolor === "green" ? "bg-green-200 text-green-800" :
                          "bg-purple-200 text-purple-800"
                        }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Sekwencja 7-dniowa */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykładowa sekwencja outreach — 7 touchpointów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Multi-touch sekwencje mają 3–5x wyższy response rate niż pojedynczy email.
              Kluczowe jest miksowanie kanałów i zmiana podejścia przy każdym kolejnym touchpoincie.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {prospectingSequence.map((step, i) => (
              <FadeInView key={step.dzien}>
                <div className="bg-white rounded-xl border border-gray-200 p-5 flex gap-4">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-indigo-600 text-white text-xs px-2 py-1 rounded font-bold text-center">{step.dzien}</div>
                    <div className="mt-1 text-center text-xs text-gray-500 font-medium">{step.kanał}</div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">{step.treść}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-6 bg-yellow-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-yellow-800 mb-2">Break-up email — dlaczego działa?</h3>
              <p className="text-sm text-gray-700">
                Ostatni email sekwencji, który informuje, że to ostatnia wiadomość: "To mój ostatni email — rozumiem,
                że to może nie być odpowiedni moment. Jeśli kiedykolwiek coś się zmieni, chętnie porozmawiam."
                Paradoksalnie, break-up emaile mają jeden z najwyższych response ratów w całej sekwencji (10–20%),
                bo nie wywierają presji i zachowują relację na przyszłość.
              </p>
            </div>
          </FadeInView>
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

      <RelatedArticles currentArticleId="prospecting-b2b-generowanie-leadow" />
      <ContactSection />
    </Layout>
  );
}
