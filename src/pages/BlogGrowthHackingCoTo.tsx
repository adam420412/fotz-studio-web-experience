import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest growth hacking?",
    answer:
      "Growth hacking to podejście do wzrostu firmy oparte na szybkich eksperymentach w całym lejku (nie tylko top-of-funnel), które łączy marketing, product development i dane analityczne. Termin wprowadził Sean Ellis w 2010 roku. Celem growth hackera jest znalezienie skalowalnych, powtarzalnych mechanizmów wzrostu — najczęściej poprzez setki małych eksperymentów, które dają 10× efekty przy ułamku tradycyjnych kosztów marketingowych.",
  },
  {
    question: "Czym różni się growth hacking od marketingu?",
    answer:
      "Tradycyjny marketing skupia się na awareness i generowaniu leadów (top-of-funnel). Growth hacking obejmuje cały AARRR lejek — akwizycję, aktywację, retencję, przychody i polecania — i optymalizuje każdy etap. Growth hackerzy działają bliżej produktu niż tradycyjni marketerzy: testują zmiany w onboardingu, mechanikach viralności, pricing, feature discovery. Growth to funkcja na styku marketing, product i data.",
  },
  {
    question: "Jakie są przykłady growth hacks?",
    answer:
      "Klasyczne przykłady: Dropbox — viral loop poprzez 'poleć znajomego, dostaniesz 500MB' (wzrost 3900% w 15 miesięcy); Hotmail — 'P.S. Zdobądź darmowy email w Hotmail' w stopce każdego emaila (12 mln użytkowników w 18 miesięcy); Airbnb — integracja z Craigslist (crosspost ofert); LinkedIn — import kontaktów email; PayPal — płatność za rejestrację ($10 za nowego użytkownika i $10 za polecenie). Każdy 'hack' to znalezienie niezatłoczonego kanału wzrostu.",
  },
  {
    question: "Co to jest viral coefficient (K-factor)?",
    answer:
      "Viral coefficient (K-factor) to liczba nowych użytkowników których przyciąga każdy istniejący użytkownik. Wzór: K = Liczba wysłanych zaproszeń × Wskaźnik konwersji zaproszenia. Jeśli K jest większy niż 1 — produkt rośnie wykładniczo (każdy użytkownik przyciąga więcej niż 1 nowego). K = 0.5 oznacza, że trzeba pozyskać 2 użytkowników żeby przyciągnęli 1 dodatkowego. Nawet K = 0.3 znacznie redukuje koszt akwizycji.",
  },
  {
    question: "Jak zbudować growth team?",
    answer:
      "Skuteczny growth team łączy: Growth Lead / Head of Growth (strategia, priorytetyzacja eksperymentów), Product Manager z growth focus, Data Analyst lub Data Scientist, Frontend Developer (implementacja eksperymentów), Marketing specialist (content, paid). Kluczowe: cross-functional ownership (nie silo), dedykowany engineering capacity, culture eksperymentowania i psychologiczne bezpieczeństwo porażki.",
  },
];

const aarrr = [
  { etap: "Acquisition (Akwizycja)", cel: "Jak użytkownicy dowiadują się o produkcie?", kanały: "SEO, paid ads, social, PR, partnerships, viral", metryki: "CAC, CPL, channel attribution, conversion rate" },
  { etap: "Activation (Aktywacja)", cel: "Czy nowi użytkownicy mają 'aha moment'?", kanały: "Onboarding flow, in-app messages, email, setup wizard", metryki: "Activation rate, Time to First Value, onboarding completion" },
  { etap: "Retention (Retencja)", cel: "Czy użytkownicy wracają regularnie?", kanały: "Email, push notifications, feature updates, CS outreach", metryki: "Day 1/7/30 retention, churn rate, DAU/MAU" },
  { etap: "Revenue (Przychody)", cel: "Jak monetyzować? Jak zwiększać ARPU?", kanały: "Pricing experiments, upsell, cross-sell, freemium conversion", metryki: "MRR/ARR, ARPU, LTV, conversion free-to-paid" },
  { etap: "Referral (Polecenia)", cel: "Czy użytkownicy polecają produkt?", kanały: "Referral programs, sharing features, NPS follow-up", metryki: "NPS, K-factor, referral rate, viral coefficient" },
];

const growthLoops = [
  {
    typ: "Viral Loop",
    opis: "Użytkownicy automatycznie zapraszają innych przez sam produkt",
    przykład: "Dropbox — poleć znajomego, oboje dostają więcej miejsca",
    warunek: "Produkt musi być lepszy lub bardziej wartościowy z innymi użytkownikami",
  },
  {
    typ: "Content Loop",
    opis: "Użytkownicy tworzą content który przyciąga nowych użytkowników",
    przykład: "Quora — odpowiedzi rankują w Google i przyciągają organic traffic",
    warunek: "User-generated content musi mieć wartość dla zewnętrznych odbiorców",
  },
  {
    typ: "Paid Acquisition Loop",
    opis: "Przychody z klientów finansują akwizycję nowych klientów",
    przykład: "LTV/CAC większy niż 3:1 pozwala skalować paid ads profitably",
    warunek: "LTV powinien być 3–5× wyższy niż CAC",
  },
  {
    typ: "Sales Loop",
    opis: "Klienci generują leady przez referral lub expansion w organizacji",
    przykład: "Slack — jeden team w firmie, viral expansion do innych teamów",
    warunek: "Product-led growth lub strong referral incentives",
  },
];

const experimentFramework = [
  { krok: "Ice Score Prioritization", opis: "Oceniaj eksperymenty wg ICE: Impact (1–10), Confidence (1–10), Ease (1–10). Priorytety mają najwyższe ICE scores.", cel: "Fokus na eksperymenty z najwyższym potencjałem" },
  { krok: "Hypothesis Formation", opis: "Zawsze: 'Wierzymy, że [zmiana] spowoduje [wynik] ponieważ [powód]. Mierzymy sukces przez [metryka].'", cel: "Testowanie założeń, nie preferencji" },
  { krok: "Minimum Viable Test", opis: "Jak minimalnym nakładem walidować hipotezę? Unikaj tygodni pracy dla testu który można przeprowadzić w 2 dni.", cel: "Szybka nauka, niskie ryzyko" },
  { krok: "Statistical Validity", opis: "Zbierz wystarczającą próbkę (kalkulator AB test). Poczekaj na istotność statystyczną zanim ogłosisz wynik.", cel: "Wiarygodne dane zamiast złudzeń" },
  { krok: "Document and Share", opis: "Każdy eksperyment dokumentuj: hipoteza, wynik, learning. Buduj institutional knowledge.", cel: "Compound learning — nie powtarzaj tych samych błędów" },
];

export default function BlogGrowthHackingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Growth Hacking — co to jest? Strategie wzrostu i AARRR framework"
        description="Growth hacking — definicja, AARRR lejek, viral coefficient, 4 growth loops i framework eksperymentowania. Przykłady Dropbox, Airbnb, Hotmail. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/growth-hacking-co-to"

        keywords="Growth Hacking co to jest, Growth Hacking definicja, czym jest Growth Hacking, Growth Hacking startup, Growth Hacking jak liczyć, Growth Hacking wzór, Growth Hacking przykłady"
      />
      <ArticleSchema
        title="Growth Hacking — co to jest i jak znaleźć mechanizmy wzrostu?"
        description="Kompletny przewodnik po growth hackingu: AARRR framework, viral coefficient, 4 growth loops i jak budować kulturę eksperymentowania."
        url="https://fotz.pl/blog/growth-hacking-co-to"
        datePublished="2024-01-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Growth Hacking", url: "https://fotz.pl/blog/growth-hacking-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Growth Hacking" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Growth Hacking — co to jest i jak znaleźć mechanizmy wzrostu?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Growth hacking łączy marketing, product i dane w celu szybkiego wzrostu przez eksperymenty.
            Poznaj AARRR lejek, viral coefficient, 4 growth loops i jak budować eksperymenty.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest growth hacking?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Growth hacking</strong> to podejście do wzrostu firmy oparte na szybkich,
              tanich eksperymentach we wszystkich etapach lejka (nie tylko w marketingu),
              które łączy kreatywne myślenie z analizą danych. Termin wprowadził Sean Ellis w 2010 roku,
              opisując rolę która "jedynym celem jest wzrost".
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Firmy jak Dropbox, Airbnb, Slack i Uber zbudowały swój wzrost na growth hackach —
              nie przez masowe wydatki reklamowe, lecz przez znalezienie mechanizmów
              viralności i retencji wbudowanych w produkt.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3900%", opis: "wzrost Dropbox po wprowadzeniu viral referral loop — 100k do 4 mln użytkowników w 15 miesięcy" },
                { stat: "40%", opis: "wyższy wzrost firm stosujących product-led growth vs. sales-led (OpenView)" },
                { stat: "K powyżej 1", opis: "viral coefficient powyżej 1 = eksponencjalny wzrost bez wydatków na akwizycję" },
              ].map((s, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-green-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">AARRR — framework pirata</h2>
            <p className="text-slate-600 mb-8">Framework Dave McClure'a: 5 etapów lejka growth. Zamiast fokusować tylko na akwizycji — optymalizuj każdy etap.</p>
            <div className="space-y-3">
              {aarrr.map((a, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">{a.etap[0]}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{a.etap}</h3>
                      <p className="text-slate-500 text-sm italic mb-2">{a.cel}</p>
                      <div className="grid md:grid-cols-2 gap-2 text-sm">
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs font-semibold text-green-600 mb-1">Kanały:</p>
                          <p className="text-green-800">{a.kanały}</p>
                        </div>
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Metryki:</p>
                          <p className="text-slate-700">{a.metryki}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">4 typy growth loops</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {growthLoops.map((l, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{l.typ}</h3>
                  <p className="text-slate-600 text-sm mb-3">{l.opis}</p>
                  <div className="bg-green-50 rounded p-2 mb-2">
                    <p className="text-xs font-semibold text-green-600 mb-1">Przykład:</p>
                    <p className="text-green-800 text-sm">{l.przykład}</p>
                  </div>
                  <p className="text-xs text-slate-500 italic">Warunek: {l.warunek}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Framework eksperymentowania growth</h2>
            <div className="space-y-4">
              {experimentFramework.map((krok, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{krok.krok}</h3>
                      <p className="text-slate-600 text-sm mb-1">{krok.opis}</p>
                      <p className="text-xs text-green-700 font-semibold">Cel: {krok.cel}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — growth hacking</h2>
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

      <ContactSection />
    </Layout>
  );
}
