import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest dystrybucja treści (content distribution)?",
    answer:
      "Content distribution to proces udostępniania i promowania treści przez różne kanały i platformy w celu dotarcia do jak największej liczby docelowych odbiorców. Sam dobry content to za mało — bez dystrybucji nie istnieje. Strategia dystrybucji dzieli się na trzy filary: Owned (własne kanały — blog, email, social media), Earned (organiczne wzmianki, udostępnienia, linki), Paid (płatna promocja — reklamy, sponsored content).",
  },
  {
    question: "Czym jest model Owned, Earned, Paid media?",
    answer:
      "Owned media — kanały pod pełną kontrolą firmy: strona www, blog, lista email, profile social media, podcast, newsletter. Earned media — bezpłatne pokrycie uzyskane przez jakość: press coverage, organiczne udostępnienia, linki przychodzące, recenzje, UGC. Paid media — płatna promocja: Google Ads, reklamy social, sponsored content, influencer marketing, programmatic. Skuteczna strategia łączy wszystkie trzy — każdy pillar wzmacnia pozostałe.",
  },
  {
    question: "Jak często powinienem dystrybuować content?",
    answer:
      "Optymalny rytm dystrybucji zależy od kanału i zasobów: Blog — 1-4 posty tygodniowo (quality over quantity), Email newsletter — 1-2 razy tygodniowo dla B2B, 2-4 dla B2C, LinkedIn — 3-5 postów tygodniowo, Twitter/X — 1-5 dziennie, YouTube — 1-2 filmy tygodniowo, Podcast — 1 epizod tygodniowo. Zasada: lepiej dominować jeden kanał niż być słaby w pięciu.",
  },
  {
    question: "Co to jest content repurposing i jak go stosować?",
    answer:
      "Content repurposing (repurposing treści) to adaptowanie jednej formy contentu do wielu formatów i kanałów. Przykład: 1 długi artykuł blogowy → 10 postów LinkedIn + 5 krótkich filmów TikTok/Reels + infografika + odcinek podcastu + thread na Twitter + newsletter + SlideShare deck. Korzyści: maksymalizacja ROI z jednego contentu, reach na różnych platformach, różne formaty dla różnych grup docelowych.",
  },
  {
    question: "Jakie są najważniejsze metryki dystrybucji treści?",
    answer:
      "Metryki reach: impressions (ile razy content był wyświetlony), reach (ile unikalnych osób go zobaczyło), organic traffic (ruch na stronie z kanałów organicznych). Metryki zaangażowania: CTR (procent klikalności), engagement rate (likes/shares/comments per impression), time on content. Metryki konwersji: leads generated, content conversion rate, pipeline influenced. Metryki SEO: backlinks earned, keyword rankings, domain authority.",
  },
];

const distributionChannels = [
  {
    kategoria: "Owned Media",
    kanały: [
      { kanal: "Blog / Strona WWW", cel: "SEO, edukacja, lead generation", format: "Artykuły, case studies, poradniki, landing pages" },
      { kanal: "Email Newsletter", cel: "Nurturing, retention, direct response", format: "Newsletter, drip campaigns, product updates" },
      { kanal: "LinkedIn (firmowy)", cel: "B2B awareness, thought leadership", format: "Posty tekstowe, artykuły, dokumenty PDF" },
      { kanal: "YouTube (kanał)", cel: "Video SEO, demos, edukacja", format: "Tutoriale, webinary, case studies wideo" },
    ],
    kolor: "bg-blue-50 border-blue-200",
    labelKolor: "bg-blue-100 text-blue-700",
  },
  {
    kategoria: "Earned Media",
    kanały: [
      { kanal: "Media coverage / PR", cel: "Brand credibility, reach nowych odbiorców", format: "Wywiady, wzmianki w artykułach, expert quotes" },
      { kanal: "Backlinks / Guest posts", cel: "SEO authority, referral traffic", format: "Artykuły gościnne, roundups, badania cytowane przez innych" },
      { kanal: "Social shares / UGC", cel: "Viral reach, social proof", format: "Organiczne udostępnienia, reposty, reviews" },
      { kanal: "Podcasty (gościnne)", cel: "Nowe audytoria, thought leadership", format: "Wywiady jako gość w obcych podcastach" },
    ],
    kolor: "bg-green-50 border-green-200",
    labelKolor: "bg-green-100 text-green-700",
  },
  {
    kategoria: "Paid Media",
    kanały: [
      { kanal: "LinkedIn Ads (B2B)", cel: "Precyzyjne targetowanie decydentów", format: "Sponsored content, Lead Gen Forms, Message Ads" },
      { kanal: "Google Display / Search", cel: "Capture intent, remarketing", format: "Display banery, RLSA, Performance Max" },
      { kanal: "Meta / Instagram Ads", cel: "B2C awareness, retargeting", format: "Image/video ads, carousel, stories" },
      { kanal: "Influencer marketing", cel: "Reach nowych segmentów, social proof", format: "Sponsored posts, product reviews, collabs" },
    ],
    kolor: "bg-orange-50 border-orange-200",
    labelKolor: "bg-orange-100 text-orange-700",
  },
];

const repurposingMatrix = [
  { źródło: "Długi artykuł blogowy (2000+ słów)", formaty: "Thread Twitter/X, Post LinkedIn, Email newsletter, Infografika, SlideShare deck, Short-form video script, Podcast episode notes" },
  { źródło: "Webinar / Live video (60 min)", formaty: "YouTube recording, Podcast episode, 5-10 krótkich klipów social, Blog post z transkrypcją, Quote cards na social, Email follow-up sequence" },
  { źródło: "Badanie / Raport branżowy", formaty: "Press release, Infografika, Blog post z key findings, LinkedIn article, Email newsletter exclusive, Prezentacja SlideShare, Pitch do mediów" },
  { źródło: "Case study klienta", formaty: "Blog post, Video testimonial, Quote cards, Sales deck slide, LinkedIn post, Email do podobnych prospects" },
];

export default function BlogContentDistributionCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Content Distribution | Fotz Studio"
        description="Content distribution — definicja, model Owned/Earned/Paid media, kanały dystrybucji, content repurposing i metryki zasięgu. Jak dystrybuować content…"
        canonicalUrl="https://fotz.pl/blog/content-distribution-co-to"

        keywords="Content Distribution co to jest, Content Distribution definicja, czym jest Content Distribution, Content Distribution przykłady, jak działa Content Distribution, Content Distribution znaczenie, Content Distribution przewodnik"

        canonical="https://fotz.pl/blog/content-distribution-co-to"
      />
      <ArticleSchema
        title="Content Distribution — co to jest i jak dystrybuować treści?"
        description="Kompletny przewodnik po dystrybucji treści: model Owned/Earned/Paid, kanały dystrybucji, content repurposing i metryki zasięgu."
        url="https://fotz.pl/blog/content-distribution-co-to"
        datePublished="2024-01-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Content Distribution", url: "https://fotz.pl/blog/content-distribution-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Content Distribution" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Content Distribution — co to jest i jak dystrybuować treści?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Dobry content bez dystrybucji nie istnieje. Poznaj model Owned/Earned/Paid,
            kanały dystrybucji, content repurposing i jak mierzyć zasięg treści.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest dystrybucja treści?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Content distribution</strong> to strategiczne udostępnianie treści przez
              wszystkie dostępne kanały w celu maksymalizacji zasięgu i wartości każdego
              stworzonego contentu. Andy Crestodina z Orbit Media ujął to doskonale:
              "Spędź tyle samo czasu dystrybuując content ile poświęciłeś na jego tworzenie."
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Większość firm tworzy zbyt dużo i dystrybuuje zbyt mało.
              Lepszym podejściem jest tworzenie mniej, ale dystrybuowanie każdej treści
              wielokanałowo przez długi czas.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "50%", opis: "czasu powinno iść na dystrybucję treści — nie tylko na jej tworzenie (Crestodina zasada 50/50)" },
                { stat: "10×", opis: "tyle formatów można stworzyć z jednej treści przez systematyczny content repurposing" },
                { stat: "Owned", opis: "media to najważniejszy filar dystrybucji — kontrolujesz je w 100% bez zależności od algorytmów" },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-blue-600 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kanały dystrybucji — Owned, Earned, Paid</h2>
            <div className="space-y-6">
              {distributionChannels.map((cat, i) => (
                <div key={i} className={`rounded-xl p-6 border ${cat.kolor}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${cat.labelKolor}`}>{cat.kategoria}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {cat.kanały.map((k, j) => (
                      <div key={j} className="bg-white rounded-lg p-4 border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm mb-1">{k.kanal}</h4>
                        <p className="text-xs text-slate-500 mb-1">Cel: {k.cel}</p>
                        <p className="text-xs text-slate-600">{k.format}</p>
                      </div>
                    ))}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Content Repurposing — matryca formatów</h2>
            <p className="text-lg text-slate-600 mb-8">Z jednej treści bazowej możesz stworzyć 7-10 formatów. Oto jak repurpose każdy typ contentu:</p>
            <div className="space-y-4">
              {repurposingMatrix.map((r, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-slate-900 mb-2">{r.źródło}</h3>
                  <div className="flex flex-wrap gap-2">
                    {r.formaty.split(", ").map((f, j) => (
                      <span key={j} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">{f}</span>
                    ))}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — content distribution</h2>
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
