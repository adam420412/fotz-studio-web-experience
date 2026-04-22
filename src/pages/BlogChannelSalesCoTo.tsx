import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Channel Sales?",
    answer: "Channel Sales (sprzedaż przez kanały partnerskie) to model dystrybucji, w którym firma sprzedaje swoje produkty lub usługi przez pośredników — partnerów handlowych, resellerów, integratorów systemów (SI), agentów lub dystrybutorów — zamiast wyłącznie przez własną siłę sprzedaży (direct sales). Channel Sales pozwala skalować zasięg geograficzny i segmentowy bez proporcjonalnego wzrostu kosztów własnego teamu sprzedażowego. Model popularny szczególnie w software, SaaS, hardware i usługach IT. Przykłady: Microsoft Azure sprzedaje przez sieć tysięcy partnerów Cloud Solution Provider (CSP). Salesforce sprzedaje przez partnerów Consulting i ISV.",
  },
  {
    question: "Jakie są rodzaje partnerów Channel?",
    answer: "Typy partnerów channel: Resellers (VAR — Value Added Resellers) — kupują lub sprzedają Twój produkt z własnym marżą i wartością dodaną (wsparcie, konfiguracja). System Integrators (SI) — Accenture, Deloitte, lokalne firmy IT — wdrażają Twój produkt jako część kompleksowego projektu dla klienta. Referral Partners / Agents — polecają Twój produkt i dostają prowizję od zamkniętego dealu, bez przejęcia własności transakcji. ISV (Independent Software Vendors) — firmy które integrują Twój produkt we własny software (tech partnership). OEM (Original Equipment Manufacturer) — Twój produkt jest 'wbudowany' w produkt partnera i sprzedawany pod jego marką. Distributors — hurtownicy którzy sprzedają dalej do sieci mniejszych resellerów.",
  },
  {
    question: "Kiedy warto budować Channel Sales?",
    answer: "Channel Sales jest wartościowy gdy: Masz złożony produkt który wymaga wdrożenia i customizacji — SI dodaje wartość przy wdrożeniu. Chcesz skalować geograficznie bez budowania własnych teamów w każdym kraju. Twoi klienci już kupują przez istniejące kanały (np. przez dużego integratora). Masz produkt komplementarny do produktu popularnego u partnera. Twój direct sales cycle jest za długi lub za drogi dla SMB — channel może obsługiwać mniejszych klientów. Ryzyka channel: utrata kontroli nad doświadczeniem klienta, channel conflict (partner vs. direct), zależność od partnera który może zmienić priorytety, wolniejszy feedback z rynku.",
  },
  {
    question: "Jak zbudować program partnerski?",
    answer: "Budowanie Partner Program: Zdefiniuj ICP partnera — jaki partner ma najlepszy access do Twojego ICP klienta? Stwórz ekonomię partnerską — prowizja (referral fee) lub rabat (reseller margin) — zazwyczaj 10-30% dla referral, 20-40% dla reseller. Stwórz partner portal — materiały sprzedażowe, training, certyfikacje, deal registration. Wyznacz Partner Success Manager — partner bez wsparcia nie sprzedaje. Stwórz tiery — Silver, Gold, Platinum z rosnącymi benefitami i wymaganiami. Zacznij od małej liczby partnerów — lepiej mieć 5 aktywnych niż 50 nieaktywnych. Mierz Partner Influenced Revenue i Partner Sourced Revenue osobno.",
  },
  {
    question: "Jak mierzyć skuteczność Channel Sales?",
    answer: "Metryki Channel Sales: Partner Sourced Revenue — ARR wygenerowany z deali które partner przyniósł bez Twojego direct involvement. Partner Influenced Revenue — ARR z deali gdzie partner był zaangażowany ale nie był jedynym źródłem. Partner Win Rate — % szans zamkniętych z partnerem vs. bez partnera. Partner Pipeline Coverage — wartość pipeline generowanego przez partnerów. Active Partners Rate — % partnerów w programie którzy wygenerowali co najmniej jeden deal w kwartale (benchmark: 20-40%). Partner CAC — koszt pozyskania klienta przez kanał partnerski vs. direct. Revenue per Partner — ile średnio jeden aktywny partner generuje ARR rocznie. Channel Conflict Rate — % deali gdzie partner i direct sales walczyli o tego samego klienta.",
  },
];

const partnerTypes = [
  {
    typ: "Referral / Agent",
    model: "Prowizja 10-20% od zamkniętego dealu",
    zalety: "Niski koszt uruchomienia, partner nie przejmuję klienta",
    wady: "Brak kontroli nad procesem sprzedaży, partner może być nieaktywny",
    kiedy: "Masz klientów którzy polecają, chcesz prostego modelu bez złożoności",
    kolor: "blue",
  },
  {
    typ: "Reseller / VAR",
    model: "Rabat 20-40% od ceny list, partner sprzedaje dalej z marżą",
    zalety: "Partner ma własne incentive, obsługuje customer relationship",
    wady: "Ryzyko channel conflict, partner może priorytetyzować inny produkt",
    kiedy: "Złożone wdrożenia gdzie partner dodaje wartość techniczną",
    kolor: "green",
  },
  {
    typ: "System Integrator",
    model: "Prowizja lub co-sell + implementacja services dla klienta",
    zalety: "Dostęp do enterprise klientów, credibility przez SI brand",
    wady: "Długi onboarding SI, wymaga certyfikacji i invest w relację",
    kiedy: "Enterprise SaaS z długim wdrożeniem, duże kontrakty",
    kolor: "purple",
  },
  {
    typ: "Technology / ISV Partner",
    model: "Revenue share od joint customers, czasem flat fee",
    zalety: "Integracja produktów tworzy stickiness, mutual customer base",
    wady: "Wymaga tech investment, złożone commercial terms",
    kiedy: "Komplementarny produkt który rozszerza wartość Twojego",
    kolor: "orange",
  },
];

const partnerProgramTiers = [
  { tier: "Registered", arrocznie: "0-100K PLN", benefity: ["Dostęp do partner portalu", "Podstawowe materiały sprzedażowe", "Webinary edukacyjne", "Deal registration"], wymagania: ["Rejestracja w programie", "Zaakceptowanie partner agreement"] },
  { tier: "Silver", arrocznie: "100-500K PLN", benefity: ["20% rabat/prowizja", "Dedykowany partner success email", "NFR licenses do demo", "Co-marketing assets", "Quarterly business review"], wymagania: ["Min. 2 certyfikowane osoby", "100K PLN influenced ARR rocznie"] },
  { tier: "Gold", arrocznie: "500K-2M PLN", benefity: ["25% rabat/prowizja", "Dedykowany Partner Manager", "Priority support dla klientów", "Co-selling support", "Inclusion w marketing materials"], wymagania: ["Min. 4 certyfikowane osoby", "500K PLN sourced ARR rocznie"] },
  { tier: "Platinum", arrocznie: "2M+ PLN", benefity: ["30% rabat/prowizja", "Executive sponsor", "Custom pricing authority", "Joint go-to-market planning", "Influence na product roadmap"], wymagania: ["Min. 8 certyfikowanych", "2M PLN sourced ARR rocznie"] },
];

export default function BlogChannelSalesCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Channel Sales — sprzedaż przez kanały partnerskie | Fotz.pl"
        description="Channel Sales (sprzedaż partnerska) — rodzaje partnerów, kiedy warto budować channel, program partnerski i metryki. Kompletny przewodnik dla VP Sales i…"
        canonicalUrl="https://fotz.pl/blog/channel-sales-sprzedaz-partnerska-co-to-jest"

        keywords="Channel Sales co to jest, Channel Sales definicja, czym jest Channel Sales, Channel Sales w sprzedaży, Channel Sales strategia, Channel Sales przykłady, jak używać Channel Sales"

        canonical="https://fotz.pl/blog/channel-sales-sprzedaz-partnerska-co-to-jest"
      />
      <ArticleSchema
        title="Channel Sales — sprzedaż przez kanały partnerskie"
        description="Kompletny przewodnik po Channel Sales: typy partnerów, budowanie programu, tiery i metryki partner revenue."
        url="https://fotz.pl/blog/channel-sales-sprzedaz-partnerska-co-to-jest"
        datePublished="2024-02-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Channel Sales", url: "https://fotz.pl/blog/channel-sales-sprzedaz-partnerska-co-to-jest" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Channel Sales", url: "/blog/channel-sales-sprzedaz-partnerska-co-to-jest" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sales Strategy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Channel Sales
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Własny team sprzedaży ma ograniczony zasięg. Channel Sales przez sieć partnerów —
              resellerów, integratorów i agentów — pozwala skalować przychód bez proporcjonalnego
              wzrostu kosztów. Ale budowanie channel wymaga czasu i systemu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typów partnerów", value: "4" },
                { label: "Prowizja referral", value: "10-20%" },
                { label: "Rabat reseller", value: "20-40%" },
                { label: "Tier levels typowo", value: "4" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typy partnerów */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 typy partnerów Channel</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każdy typ partnera ma inny model ekonomiczny, poziom zaangażowania i pasuje
              do innych scenariuszy. Wybierz typ pasujący do Twojego produktu i klientów.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {partnerTypes.map((p) => (
              <FadeInView key={p.typ}>
                <div className={`rounded-xl border-2 p-6 ${
                  p.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  p.kolor === "green" ? "border-green-200 bg-green-50" :
                  p.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className={`font-bold text-xl ${
                      p.kolor === "blue" ? "text-blue-800" :
                      p.kolor === "green" ? "text-green-800" :
                      p.kolor === "purple" ? "text-purple-800" :
                      "text-orange-800"
                    }`}>{p.typ}</h3>
                    <span className={`text-sm px-2 py-1 rounded font-medium ${
                      p.kolor === "blue" ? "bg-blue-200 text-blue-800" :
                      p.kolor === "green" ? "bg-green-200 text-green-800" :
                      p.kolor === "purple" ? "bg-purple-200 text-purple-800" :
                      "bg-orange-200 text-orange-800"
                    }`}>{p.model}</span>
                  </div>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div>
                      <div className="text-xs font-bold text-green-600 uppercase mb-1">Zalety</div>
                      <p className="text-sm text-gray-700">{p.zalety}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-red-600 uppercase mb-1">Wady</div>
                      <p className="text-sm text-gray-700">{p.wady}</p>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Kiedy stosować</div>
                      <p className="text-sm text-gray-700">{p.kiedy}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tiers */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Program partnerski — struktura tierów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Tiery motywują partnerów do inwestowania w relację i rosną wraz z nimi.
              Partnerzy z wyższym tierem mają więcej benefitów — i generują więcej revenue.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {partnerProgramTiers.map((t, i) => (
              <FadeInView key={t.tier}>
                <div className={`rounded-xl border-2 p-6 ${
                  i === 0 ? "border-gray-200 bg-gray-50" :
                  i === 1 ? "border-blue-200 bg-blue-50" :
                  i === 2 ? "border-yellow-200 bg-yellow-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className={`font-black text-2xl ${
                        i === 0 ? "text-gray-500" :
                        i === 1 ? "text-blue-600" :
                        i === 2 ? "text-yellow-600" :
                        "text-purple-600"
                      }`}>{t.tier}</div>
                      <div className="text-xs text-gray-500">{t.arrocznie}/rok ARR</div>
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs font-bold text-green-600 uppercase mb-2">Benefity</div>
                        <ul className="space-y-1">
                          {t.benefity.map((b) => (
                            <li key={b} className="flex gap-1 text-xs text-gray-700">
                              <span className="text-green-500">+</span>{b}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-orange-600 uppercase mb-2">Wymagania</div>
                        <ul className="space-y-1">
                          {t.wymagania.map((w) => (
                            <li key={w} className="flex gap-1 text-xs text-gray-700">
                              <span className="text-orange-500">→</span>{w}
                            </li>
                          ))}
                        </ul>
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

      <RelatedArticles currentArticleId="channel-sales-sprzedaz-partnerska-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
