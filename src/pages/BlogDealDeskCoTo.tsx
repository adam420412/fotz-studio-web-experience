import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Deal Desk?",
    answer: "Deal Desk to wewnętrzny zespół lub funkcja w firmie SaaS/enterprise odpowiedzialna za zarządzanie złożonymi transakcjami sprzedażowymi. Deal Desk pełni rolę centrum kompetencji dla niestandardowych ofert, zatwierdzania wyjątków cenowych, strukturyzowania kontraktów i zapewnienia że każdy deal spełnia wymogi finansowe, prawne i operacyjne firmy. Deal Desk pojawia się gdy firma osiąga dojrzałość sprzedażową — typowo przy ACV (Average Contract Value) powyżej 50-100K USD lub gdy ilość custom deals rośnie powyżej możliwości indywidualnych AE. Bez Deal Desk AE negocjują ceny i warunki ad hoc, co prowadzi do niespójności, marż poniżej dolnego limitu i problemów operacyjnych przy realizacji.",
  },
  {
    question: "Czym zajmuje się Deal Desk?",
    answer: "Funkcje Deal Desk: Pricing approval — zatwierdzanie niestandardowych cen, rabatów i custom packages gdy AE wychodzą poza standardowy cennik. Qualification — ocena czy deal jest strategicznie i finansowo wartościowy. Odrzucenie złego dealu to też wartość Deal Desk. Contract structuring — tworzenie niestandardowych warunków kontraktowych (multi-year, ramp pricing, custom SLA, enterprise add-ons). CPQ (Configure-Price-Quote) — zarządzanie narzędziami do automatyzacji wycen i ofert. Revenue recognition — zapewnienie że warunki kontraktu są zgodne z zasadami rozpoznawania przychodu (ASC 606). Approval workflows — zarządzanie procesem zatwierdzania wyjątków przez Management, Finance, Legal.",
  },
  {
    question: "Kiedy firma potrzebuje Deal Desk?",
    answer: "Sygnały że potrzebujesz Deal Desk: AE spędzają ponad 30% czasu na ad-hoc negocjacjach i zatwierdzeniach zamiast sprzedawać. Więcej niż 30% dealów wymaga niestandardowych warunków cenowych lub kontraktowych. Marże na enterprise dealach są niespójne — jedne są rentowne, inne nie. Legal i Finance są zasypane requestami z Sales w ostatniej chwili przed zamknięciem kwartału. Onboarding nowych klientów jest trudny bo warunki kontraktu są niejasne lub sprzeczne. Klienci enterprise skarżą się na długi czas odpowiedzi na zapytania ofertowe. Typowo Deal Desk pojawia się gdy firma przekracza 50-100M USD ARR lub zatrudnia ponad 20-30 AE.",
  },
  {
    question: "Jak zorganizować Deal Desk?",
    answer: "Organizacja Deal Desk: Umiejscowienie — Deal Desk raportuje zazwyczaj do VP Revenue Operations lub CFO, nie do VP Sales. To zapewnia niezależność i obiektywizm. Skład — Deal Desk Manager + Revenue Operations Analysts + Sales Operations. Na większą skalę: dedykowany prawnik i analityk finansowy. Narzędzia — CPQ (Salesforce CPQ, DealHub, Conga) do automatyzacji wycen. CRM integration (Salesforce) dla pipeline visibility. Contract management (DocuSign, Ironclad). SLAs — Deal Desk powinien mieć jasne SLA odpowiedzi: standardowe deale 24h, complex 48-72h, emergency same-day. Bez SLA Deal Desk staje się bottleneckiem. Playbook — udokumentowane zasady: jakie rabaty są akceptowalne, co wymaga zatwierdzenia, jak strukturyzować multi-year deals.",
  },
  {
    question: "Jakie metryki mierzy Deal Desk?",
    answer: "Metryki Deal Desk: Deal Velocity — czas od zapytania do zatwierdzonej oferty. Cel: 24-48h dla standardowych, 72h dla complex. Deal Exception Rate — % dealów wymagających niestandardowych warunków. Wysoki rate = problem z cennikiem lub procesem. Win Rate — czy deale zatwierdzane przez Deal Desk mają wyższy czy niższy win rate? (Powinny być wyższe bo są lepiej strukturyzowane). Average Deal Size — Deal Desk powinien pomagać AE strukturyzować większe, bardziej strategiczne deale. Discount Depth — średni rabat udzielany per segment. Musi być monitorowany żeby chronić marżę. Gross Margin per Deal — najbardziej kluczowa metryka: czy firmy Deal Desk jest rentowna po uwzględnieniu COGS.",
  },
];

const dealDeskProcess = [
  {
    krok: "1. Deal Qualification",
    opis: "AE składa request do Deal Desk z podstawowymi informacjami o deal (account, ACV, requirements, timeline).",
    output: "Go/No-go decision. Czy to strategiczny deal warty custom treatment?",
    kolor: "blue",
  },
  {
    krok: "2. Pricing & Structuring",
    opis: "Deal Desk analizuje wymagania i proponuje optymalną strukturę cenową. Custom package, ramp, multi-year discount.",
    output: "Draft pricing proposal z uzasadnieniem business case i wpływem na marżę.",
    kolor: "green",
  },
  {
    krok: "3. Internal Approvals",
    opis: "Routing do odpowiednich approverów zależnie od rozmiaru dealu i rodzaju wyjątków (Manager, VP, CFO, Legal).",
    output: "Approved / rejected / back with modifications. Śledzenie w CRM.",
    kolor: "purple",
  },
  {
    krok: "4. Quote Generation",
    opis: "CPQ generuje formalną ofertę ze wszystkimi warunkami, cenami i załącznikami. Branded, profesjonalne.",
    output: "Oferta PDF / link do e-signature. Gotowa do wysłania do klienta.",
    kolor: "orange",
  },
  {
    krok: "5. Contract Negotiation Support",
    opis: "Deal Desk wspiera AE w negocjacjach kontraktowych — wskazuje co jest akceptowalne a co wymaga re-approval.",
    output: "Finalna wersja kontraktu gotowa do podpisania przez obie strony.",
    kolor: "teal",
  },
];

const dealDeskMetrics = [
  { metryka: "Deal Velocity", cel: "Stan. deals: 24h / Complex: 72h", opis: "Czas od AE request do zatwierdzonej oferty wysłanej do klienta" },
  { metryka: "Exception Rate", cel: "Poniżej 30% dealów", opis: "% dealów wymagających niestandardowych warunków (rabat, contract, terms)" },
  { metryka: "Discount Depth", cel: "Zgodnie z guidance per tier", opis: "Średni % rabatu udzielany w każdym segmencie (SMB, MM, Enterprise)" },
  { metryka: "Win Rate (DD deals)", cel: "Wyższy niż overall", opis: "Deal Desk powinien podnosić win rate przez lepszą strukturyzację ofert" },
  { metryka: "Gross Margin per Deal", cel: "Powyżej target marży", opis: "Rentowność każdego dealu po COGS — Deal Desk chroni marżę" },
];

export default function BlogDealDeskCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Deal Desk — co to jest i jak działa w sprzedaży SaaS? | Fotz.pl"
        description="Deal Desk: funkcje, proces zatwierdzania ofert, kiedy wdrożyć, jak zorganizować i kluczowe metryki. Kompletny przewodnik dla firm SaaS i enterprise."
        canonicalUrl="https://fotz.pl/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise"

        keywords="Deal Desk co to jest, Deal Desk definicja, czym jest Deal Desk, Deal Desk startup, Deal Desk jak liczyć, Deal Desk wzór, Deal Desk przykłady"

        canonical="https://fotz.pl/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise"
      />
      <ArticleSchema
        title="Deal Desk — co to jest i jak działa w sprzedaży SaaS?"
        description="Deal Desk: czym jest, kiedy go potrzebujesz, jak zorganizować, proces zatwierdzania dealów i metryki efektywności w firmach SaaS i enterprise."
        url="https://fotz.pl/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise"
        datePublished="2024-02-19"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Deal Desk", url: "https://fotz.pl/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Deal Desk", href: "/blog/deal-desk-co-to-jest-sprzedaz-saas-enterprise" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Revenue Operations
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Deal Desk
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              AE nie może negocjować każdego dealu od zera. Deal Desk to centrum
              kompetencji dla złożonych transakcji — chroni marżę, przyspiesza
              zamknięcia i zapewnia spójność ofert.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "SLA standardowy", value: "24-48h" },
                { label: "Typowy trigger", value: "50-100M ARR" },
                { label: "Raportuje do", value: "RevOps / CFO" },
                { label: "Kluczowe narzędzie", value: "CPQ" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-xl font-bold text-sky-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5-krokowy proces Deal Desk</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Od złożenia requestu przez AE do podpisania kontraktu — jak przebiega
              obsługa złożonego dealu przez Deal Desk.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {dealDeskProcess.map((k) => (
              <FadeInView key={k.krok}>
                <div className={`rounded-xl border-2 p-5 ${
                  k.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  k.kolor === "green" ? "border-green-200 bg-green-50" :
                  k.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  k.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-teal-200 bg-teal-50"
                }`}>
                  <h3 className={`font-bold text-lg mb-2 ${
                    k.kolor === "blue" ? "text-blue-800" :
                    k.kolor === "green" ? "text-green-800" :
                    k.kolor === "purple" ? "text-purple-800" :
                    k.kolor === "orange" ? "text-orange-800" :
                    "text-teal-800"
                  }`}>{k.krok}</h3>
                  <p className="text-gray-700 text-sm mb-3">{k.opis}</p>
                  <div className="bg-white/60 rounded-lg p-2 text-sm">
                    <span className="font-semibold text-gray-700">Output: </span>
                    <span className="text-gray-600">{k.output}</span>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Metryki */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kluczowe metryki Deal Desk</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Jak mierzyć efektywność Deal Desk i jego wpływ na wyniki sprzedażowe.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {dealDeskMetrics.map((m, i) => (
              <FadeInView key={m.metryka}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-sky-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{m.metryka}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <p className="text-gray-700">{m.opis}</p>
                        <div>
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Cel</div>
                          <p className="text-gray-700 font-medium">{m.cel}</p>
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

      <RelatedArticles currentArticleId="deal-desk-co-to-jest-sprzedaz-saas-enterprise" />
      <ContactSection />
    </Layout>
  );
}
