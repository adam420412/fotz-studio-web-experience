import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Viral Coefficient?",
    answer: "Viral Coefficient (współczynnik viralności) to metryka mierząca ile nowych użytkowników jeden istniejący użytkownik przyciąga do produktu przez polecenia lub sharing. Formuła: Viral Coefficient (K) = Liczba zaproszeń wysłanych per użytkownik x Conversion Rate zaproszeń. Interpretacja: K powyżej 1.0 = viral growth — każdy użytkownik przyciąga więcej niż jednego nowego. Produkt sam w sobie rośnie. K poniżej 1.0 = wzrost wymaga zewnętrznych kanałów (paid, SEO). K = 0.5 + dobry paid acquisition = solidny wzrost. Czyste viral growth (K powyżej 1) jest niezwykle rzadkie — Slack, Dropbox, WhatsApp to historyczne przykłady.",
  },
  {
    question: "Jak obliczyć Viral Coefficient?",
    answer: "Obliczanie K Factor: K = i x c, gdzie i = średnia liczba zaproszeń na użytkownika, c = conversion rate zaproszenia. Przykład: Użytkownik Dropbox zaprasza średnio 3 osoby (i=3). 25% zaproszonych zakłada konto (c=0.25). K = 3 x 0.25 = 0.75. Nie viral (poniżej 1) ale znaczący efekt. Efekt kumulacyjny: pierwsza fala: 100 użytkowników. Druga fala: 100 x 0.75 = 75. Trzecia fala: 75 x 0.75 = 56. Itd. Nie viral, ale każdy 100 użytkowników generuje dodatkowych 300 użytkowników przez czas. Dla K = 1.1: fala 1: 100, fala 2: 110, fala 3: 121 — krzywa wykładnicza wzrostu.",
  },
  {
    question: "Jakie mechanizmy drive'ują viralność produktu?",
    answer: "Mechanizmy viralności: Inherent Virality — produkt wymaga zaproszenia innych żeby działać (WhatsApp, Slack, Zoom). Viral Loop wbudowany w core value proposition. Incentivized Virality — nagrody za polecenia (Dropbox: dodatkowe miejsce za zaproszenie znajomego, Uber: kod zniżkowy dla polecającego i nowego). Word of Mouth — użytkownicy naturalnie polecają bo produkt jest wyjątkowy (nie mechanizm ale efekt silnego PMF). Social Sharing — użytkownicy share'ują output produktu publicznie (Spotify Wrapped, Canva design, Wordle wyniki). Network Effects — wartość produktu rośnie z liczbą użytkowników co naturalnie napędza polecenia.",
  },
  {
    question: "Czym Viral Coefficient różni się od Net Promoter Score?",
    answer: "Viral Coefficient vs. NPS: NPS (Net Promoter Score) mierzy czy użytkownicy POLECIŁOBY produkt w skali 0-10. To intencja, nie zachowanie. Viral Coefficient mierzy ile użytkowników FAKTYCZNIE przyprowadza nowych użytkowników. To zachowanie, nie intencja. Problem z NPS: korelacja między 'powiedziałbym że polecam' a 'aktywnie poleciłem' jest słaba. Viral Coefficient jest empiryczny — mierzysz realne zaproszenia i konwersje. Możesz mieć wysokie NPS i niski K-Factor (użytkownicy są zadowoleni ale nie polecają aktywnie). Możesz mieć niski NPS ale wysoki K-Factor (użytkownicy polecają bo produkt jest użyteczny dla ich sieci, nie bo go 'kochają').",
  },
  {
    question: "Jak zbudować viral loop w produkcie?",
    answer: "Budowanie Viral Loop: Zidentyfikuj naturalne punkty polecenia — kiedy użytkownicy naturalnie chcą podzielić się produktem? (Notion: share page, Loom: share video, Figma: invite to collab). Zredukuj friction w zapraszaniu — im łatwiej zaprosić, tym więcej zaproszeń. One-click invite, pre-written email, kontakty z Google/LinkedIn. Stwórz mutual value — zarówno polecający jak polecony powinni coś dostać (Dropbox: 500MB dla obu). Optymalizuj conversion rate zaproszenia — landing page dla zaproszonych, personalizacja ('Jan zaprosił Cię do Notion'). Mierz funnel: Invitation Rate (ile userów zaprasza) x Invite Send Rate (ile zaproszeń per user) x Accept Rate (% akceptacji) x Activation Rate (% aktywacji po akceptacji).",
  },
];

const viralMechanisms = [
  {
    mechanizm: "Inherent Virality",
    opis: "Produkt wymaga zaproszenia innych żeby działać — viralność jest wbudowana w core value",
    przykłady: "WhatsApp (musisz zaprosić kontakty), Slack (team musi być na Slacku), Zoom (zapraszasz do rozmowy)",
    siła: "Bardzo silna — K może przekraczać 1.0",
    kolor: "green",
  },
  {
    mechanizm: "Incentivized Virality",
    opis: "Użytkownicy zapraszają za nagrodę — obopólna korzyść dla polecającego i poleconego",
    przykłady: "Dropbox (extra storage), Uber (credit dla obu), Robinhood (darmowa akcja), Tesla (credit)",
    siła: "Średnia-wysoka — silna przy wartościowej nagrodzie, słabsza gdy wartość referral spada",
    kolor: "blue",
  },
  {
    mechanizm: "Social Sharing",
    opis: "Użytkownicy share'ują output produktu publicznie co przyciąga nowych użytkowników",
    przykłady: "Spotify Wrapped, Canva (watermark na designach), Wordle, Instagram posts, GitHub contributions",
    siła: "Zmieniona — zależy od 'shareability' output produktu",
    kolor: "purple",
  },
  {
    mechanizm: "Word of Mouth",
    opis: "Naturalne polecenia bez mechanizmu — wynik silnego PMF i wyjątkowego doświadczenia",
    przykłady: "Notion, Linear, Figma — narzędzia które użytkownicy polecają bo naprawdę ich używają",
    siła: "Trudna do skalowania — wymaga wyjątkowego produktu, nie 'mechanizmu'",
    kolor: "orange",
  },
];

const viralFunnel = [
  { etap: "Invitation Rate", opis: "% użytkowników którzy wysyłają zaproszenie", benchmark: "10-30% dla produktów z silnym viral loop", kolor: "blue" },
  { etap: "Invites per User", opis: "Średnia liczba zaproszeń wysłanych przez zapraszającego", benchmark: "2-5 typowe dla referral programs", kolor: "green" },
  { etap: "Accept Rate", opis: "% zaproszonych którzy otwierają i akceptują zaproszenie", benchmark: "20-40% dla email invite, wyższy dla social", kolor: "purple" },
  { etap: "Activation Rate", opis: "% zaakceptowanych którzy zakładają konto i są aktywni", benchmark: "40-70% — zależy od onboarding friction", kolor: "orange" },
  { etap: "Viral Coefficient (K)", opis: "Wypadkowa powyższych: Invite Rate x Invites x Accept x Activate", benchmark: "K poniżej 1.0 typowe, powyżej 1.0 wyjątkowe", kolor: "red" },
];

export default function BlogViralCoefficientCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Viral Coefficient — co to jest i jak mierzyć viralność? | Fotz.pl"
        description="Viral Coefficient (K-Factor) — formuła, mechanizmy viralności (inherent, incentivized, social), viral loop i jak budować viralność produktu. Kompletny…"
        canonicalUrl="https://fotz.pl/blog/viral-coefficient-wspolczynnik-viralnosci-produktu"

        keywords="Viral Coefficient co to jest, Viral Coefficient definicja, czym jest Viral Coefficient, Viral Coefficient przykłady, jak działa Viral Coefficient, Viral Coefficient znaczenie, Viral Coefficient przewodnik"

        canonical="https://fotz.pl/blog/viral-coefficient-wspolczynnik-viralnosci-produktu"
      />
      <ArticleSchema
        title="Viral Coefficient — co to jest i jak mierzyć viralność?"
        description="Kompletny przewodnik po Viral Coefficient: formuła, mechanizmy viralności, viral funnel i jak budować viral loop."
        url="https://fotz.pl/blog/viral-coefficient-wspolczynnik-viralnosci-produktu"
        datePublished="2024-02-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Viral Coefficient", url: "https://fotz.pl/blog/viral-coefficient-wspolczynnik-viralnosci-produktu" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-pink-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Viral Coefficient", href: "/blog/viral-coefficient-wspolczynnik-viralnosci-produktu" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Growth Metrics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Viral Coefficient
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Viral Coefficient powyżej 1.0 oznacza że każdy użytkownik przyciąga więcej niż
              jednego nowego. Wzrost wykładniczy bez kosztów akwizycji. Rzadki, ale możliwy
              do zbudowania przez właściwy Viral Loop.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Formuła K", value: "i x c" },
                { label: "K powyżej 1.0", value: "Viral growth" },
                { label: "K Dropbox", value: "ok. 0.75" },
                { label: "Mechanizmów", value: "4" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-pink-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mechanizmy */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 mechanizmy viralności</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Nie wszystkie mechanizmy viralności są równie silne. Inherent Virality
              jest najsilniejsza — ale wymaga że Twój produkt jest z natury kolaboracyjny lub sieciowy.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {viralMechanisms.map((m) => (
              <FadeInView key={m.mechanizm}>
                <div className={`rounded-xl border-2 p-6 ${
                  m.kolor === "green" ? "border-green-200 bg-green-50" :
                  m.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  m.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`font-bold text-xl ${
                      m.kolor === "green" ? "text-green-800" :
                      m.kolor === "blue" ? "text-blue-800" :
                      m.kolor === "purple" ? "text-purple-800" :
                      "text-orange-800"
                    }`}>{m.mechanizm}</h3>
                    <span className={`text-xs px-2 py-1 rounded font-medium ${
                      m.kolor === "green" ? "bg-green-200 text-green-800" :
                      m.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                      m.kolor === "purple" ? "bg-purple-200 text-purple-800" :
                      "bg-orange-200 text-orange-800"
                    }`}>{m.siła}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{m.opis}</p>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Przykłady</div>
                    <p className="text-sm text-gray-700">{m.przykłady}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Viral Funnel */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Viral Funnel — jak mierzyć każdy etap</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Viral Coefficient to wypadkowa wielu etapów. Optymalizowanie każdego etapu
              osobno daje większy efekt niż szukanie 'jednej dźwigni viralności'.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {viralFunnel.map((e, i) => (
              <FadeInView key={e.etap}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      e.kolor === "blue" ? "bg-blue-600" :
                      e.kolor === "green" ? "bg-green-600" :
                      e.kolor === "purple" ? "bg-purple-600" :
                      e.kolor === "orange" ? "bg-orange-600" :
                      "bg-red-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{e.etap}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <p className="text-sm text-gray-700">{e.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Benchmark</div>
                          <p className="text-sm font-medium text-gray-800">{e.benchmark}</p>
                        </div>
                      </div>
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

      <RelatedArticles currentArticleId="viral-coefficient-wspolczynnik-viralnosci-produktu" />
      <ContactSection />
    </Layout>
  );
}
