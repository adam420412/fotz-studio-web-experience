import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest inbound marketing?",
    answer:
      "Inbound marketing to strategia przyciągania potencjalnych klientów do firmy przez wartościowe treści i doświadczenia, zamiast przerywania ich uwagi płatną reklamą. Termin spopularyzował HubSpot: firma tworzy content (blogi, podcasty, webinary, SEO), który przyciąga użytkowników szukających rozwiązań swoich problemów.",
  },
  {
    question: "Jaka jest różnica między inbound a outbound marketingiem?",
    answer:
      "Outbound marketing 'wychodzi' do klienta — cold calling, cold email, reklamy display, spam. Inbound marketing przyciąga klientów do siebie — SEO, content marketing, media społecznościowe, lead magnety. Inbound generuje bardziej jakościowe leady o niższym koszcie pozyskania, ale wymaga czasu na budowanie zasięgu organicznego.",
  },
  {
    question: "Jak długo trwa zanim inbound marketing przynosi efekty?",
    answer:
      "Inbound marketing wymaga cierpliwości — pierwsze wymierne efekty z SEO i content marketingu zwykle pojawiają się po 6–12 miesiącach. Jednak w przeciwieństwie do outboundu, efekty kumulują się: artykuł napisany dziś może generować leady przez lata. Długoterminowo koszt na lead z inbound jest znacznie niższy.",
  },
  {
    question: "Jakie narzędzia stosuje się w inbound marketingu?",
    answer:
      "Kluczowe narzędzia inbound to: platformy CMS do blogowania (WordPress, HubSpot CMS), narzędzia SEO (Ahrefs, Semrush), marketing automation (HubSpot, Mailchimp, ActiveCampaign), CRM, narzędzia do webinarów i podcastów, systemy landing page z lead formami oraz social media management.",
  },
  {
    question: "Czy inbound marketing działa dla firm B2B?",
    answer:
      "Inbound jest szczególnie skuteczny w B2B, gdzie kupujący intensywnie badają dostawców przed zakupem. Firmy B2B stosujące inbound generują 3x więcej leadów za 62% kosztu outboundu. Content edukacyjny buduje zaufanie do eksperta, co skraca cykl sprzedaży i zwiększa win rate.",
  },
];

const inboundStages = [
  {
    etap: "Przyciągnij (Attract)",
    cel: "Przyciągnij nieznajomych i zmień ich w odwiedzających stronę",
    narzędzia: ["SEO i content marketing", "Blog firmowy", "Social media", "Paid search (wspierający)"],
    metryki: "Ruch organiczny, impressions, CTR",
  },
  {
    etap: "Konwertuj (Convert)",
    cel: "Przekształć odwiedzających w leady (pozyskaj dane kontaktowe)",
    narzędzia: ["Landing pages", "Lead magnety (e-booki, raporty)", "Call-to-action", "Formularze"],
    metryki: "Współczynnik konwersji, koszt leada (CPL)",
  },
  {
    etap: "Zamknij (Close)",
    cel: "Przekształć leady w klientów",
    narzędzia: ["Email nurturing", "Marketing automation", "CRM", "Lead scoring"],
    metryki: "MQL do SQL, SQL do klienta, cykl sprzedaży",
  },
  {
    etap: "Zachwycaj (Delight)",
    cel: "Zamień klientów w promotorów marki",
    narzędzia: ["Onboarding content", "Customer success", "Surveys & NPS", "Exclusive content"],
    metryki: "NPS, retencja, Customer Lifetime Value",
  },
];

const contentTypes = [
  { typ: "Blog post / artykuł", etap: "Attract", format: "Tekst", cel: "SEO, edukacja, awareness" },
  { typ: "E-book / Whitepaper", etap: "Convert", format: "PDF", cel: "Lead generation, edukacja pogłębiona" },
  { typ: "Webinar", etap: "Convert + Close", format: "Wideo na żywo", cel: "Lead generation, nurturing, demo" },
  { typ: "Case study", etap: "Close", format: "Tekst/PDF", cel: "Dowód społeczny, konwersja" },
  { typ: "Newsletter", etap: "Close + Delight", format: "Email", cel: "Nurturing, retencja, upsell" },
  { typ: "Podcast", etap: "Attract + Delight", format: "Audio", cel: "Budowanie autorytetu, lojalność" },
  { typ: "Kalkulator / Tool", etap: "Attract + Convert", format: "Interaktywny", cel: "Lead magnet, engagement" },
  { typ: "FAQ / Knowledge Base", etap: "Close + Delight", format: "Tekst", cel: "SEO, self-service support" },
];

export default function BlogInboundMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Inbound Marketing — co to jest i jak działa? Kompletny przewodnik"
        description="Inbound marketing — definicja, 4 etapy (Attract, Convert, Close, Delight), narzędzia i typy contentu. Kompletny przewodnik po marketingu przychodzącym."
        canonicalUrl="https://fotz.pl/blog/inbound-marketing-co-to"

        keywords="Inbound Marketing co to jest, Inbound Marketing definicja, czym jest Inbound Marketing, Inbound Marketing w marketingu, Inbound Marketing przykłady, jak działa Inbound Marketing, Inbound Marketing strategia"
      />
      <ArticleSchema
        title="Inbound Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po inbound marketingu: 4 etapy metodologii, typy contentu i narzędzia."
        url="https://fotz.pl/blog/inbound-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Inbound Marketing", url: "https://fotz.pl/blog/inbound-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Inbound Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Inbound Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Inbound marketing przyciąga klientów wartościowymi treściami zamiast przerywać im uwagę.
            Poznaj 4 etapy metodologii, typy contentu i narzędzia skutecznej strategii inbound.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest inbound marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Inbound marketing</strong> to metodologia marketingowa opracowana przez HubSpot,
              która polega na przyciąganiu klientów do firmy poprzez tworzenie wartościowych treści
              i pozytywnych doświadczeń dostosowanych do ich potrzeb.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Inbound marketing opiera się na filozofii, że najlepszą reklamą jest bycie pomocnym.
              Gdy ktoś szuka rozwiązania swojego problemu, Twoja firma powinna być tą, która to rozwiązanie dostarcza —
              i tym samym buduje zaufanie zanim dojdzie do rozmowy sprzedażowej.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "3×", opis: "więcej leadów niż outbound przy 62% niższym koszcie" },
                { stat: "47%", opis: "kupujących B2B przegląda 3–5 treści przed kontaktem ze sprzedawcą" },
                { stat: "14,6%", opis: "średni wskaźnik zamknięcia leadów inbound vs. 1,7% outbound" },
              ].map((s, i) => (
                <div key={i} className="bg-teal-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-teal-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* 4 etapy */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">
              Metodologia inbound: 4 etapy
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {inboundStages.map((stage, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900 text-lg">{stage.etap}</h3>
                  </div>
                  <p className="text-slate-600 text-sm mb-3">{stage.cel}</p>
                  <div className="space-y-1 mb-3">
                    {stage.narzędzia.map((n, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-500 rounded-full flex-shrink-0" />
                        <p className="text-slate-700 text-sm">{n}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-teal-50 rounded-lg p-2">
                    <p className="text-xs font-medium text-teal-700">Metryki: {stage.metryki}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Typy contentu */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Typy contentu w inbound marketingu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ contentu</th>
                    <th className="p-3 text-left">Etap</th>
                    <th className="p-3 text-left">Format</th>
                    <th className="p-3 text-left">Cel</th>
                  </tr>
                </thead>
                <tbody>
                  {contentTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.typ}</td>
                      <td className="p-3 text-teal-700 text-sm font-medium">{row.etap}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.format}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — inbound marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-6">
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
