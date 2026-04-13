import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest event marketing?",
    answer:
      "Event marketing to strategia marketingowa polegająca na organizowaniu lub sponsorowaniu wydarzeń (konferencji, targów, webinarów, warsztatów, premier produktów) w celu budowania relacji z klientami, generowania leadów i wzmacniania świadomości marki. Eventy tworzą bezpośrednie doświadczenie marki niemożliwe do osiągnięcia przez kanały cyfrowe.",
  },
  {
    question: "Jakie są rodzaje event marketingu?",
    answer:
      "Główne rodzaje to: eventy B2B (konferencje, targi branżowe, szkolenia), eventy B2C (premiery produktów, festiwale, pop-up store'y), eventy wirtualne (webinary, live streamy, wirtualne konferencje), eventy hybrydowe oraz eventy korporacyjne (teambuilding, gale, konferencje pracownicze).",
  },
  {
    question: "Jak mierzyć ROI event marketingu?",
    answer:
      "ROI eventu mierzy się przez: liczbę wygenerowanych leadów i ich wartość, konwersję leadów na klientów, koszty vs. przychód ze sprzedaży na evencie, liczbę mediów i zasięg w social mediach (earned media), NPS uczestników oraz wzrost świadomości marki przed i po evencie.",
  },
  {
    question: "Ile kosztuje zorganizowanie eventu marketingowego?",
    answer:
      "Koszty są bardzo zróżnicowane: od kilku tysięcy złotych za mały webinar po setki tysięcy za dużą konferencję. Główne pozycje kosztowe to: wynajem sali, catering, technologia AV, marketing i promocja, prelegenci i obsługa, materiały brandingowe oraz platforma eventowa.",
  },
  {
    question: "Jakie narzędzia do event marketingu są popularne?",
    answer:
      "Najpopularniejsze narzędzia to platformy do rejestracji i sprzedaży biletów (Eventbrite, TicketTailor), platformy webinarowe (Zoom Webinars, Hopin, Airmeet), systemy CRM do zarządzania leadami, narzędzia do email marketingu (integracja z listą uczestników) oraz platformy do event app.",
  },
];

const eventTypes = [
  {
    typ: "Konferencja / Summit",
    format: "B2B, stacjonarne lub hybrydowe",
    cel: "Budowanie autorytetu, generowanie leadów, networking",
    koszty: "Wysokie (10k–500k PLN)",
    leadQuality: "Bardzo wysoka",
  },
  {
    typ: "Webinar / Warsztaty online",
    format: "B2B i B2C, wirtualne",
    cel: "Edukacja, nurturing leadów, demonstracja produktu",
    koszty: "Niskie (0,5k–10k PLN)",
    leadQuality: "Wysoka",
  },
  {
    typ: "Targi branżowe",
    format: "B2B, stacjonarne",
    cel: "Zasięg w niszy, kwalifikacja leadów, sprzedaż",
    koszty: "Średnie–wysokie (5k–100k PLN)",
    leadQuality: "Wysoka",
  },
  {
    typ: "Premiera produktu (Launch Event)",
    format: "B2C lub B2B, stacjonarne lub live",
    cel: "Buzz, media coverage, sprzedaż premierowa",
    koszty: "Średnie–wysokie",
    leadQuality: "Średnia",
  },
  {
    typ: "Pop-up Store / Doświadczenie marki",
    format: "B2C, stacjonarne",
    cel: "Brand awareness, trial produktu, virality",
    koszty: "Średnie",
    leadQuality: "Niska–średnia",
  },
  {
    typ: "Hackathon / Challenge",
    format: "B2B/Tech, hybrydowe",
    cel: "Rekrutacja talentów, innowacje, community",
    koszty: "Niskie–średnie",
    leadQuality: "Wysoka (niszowa)",
  },
];

const eventMetrics = [
  { metryka: "Liczba uczestników", typ: "Ilościowa", opis: "Całkowita frekwencja vs. cel" },
  { metryka: "Koszt na uczestnika (CPP)", typ: "Efektywność", opis: "Całkowity budżet / liczba uczestników" },
  { metryka: "Liczba wygenerowanych leadów", typ: "Sprzedażowa", opis: "Kontakty kwalifikowane do pipeline" },
  { metryka: "NPS uczestników", typ: "Satysfakcja", opis: "Jak chętnie poleciliby event znajomym" },
  { metryka: "Pipeline wygenerowany", typ: "Sprzedażowa", opis: "Wartość szans sprzedażowych z eventu" },
  { metryka: "Zasięg w social mediach", typ: "PR / Brand", opis: "Hashtag, wzmianki, relacje z eventu" },
  { metryka: "Współczynnik pokazania się (Show-up rate)", typ: "Jakościowa", opis: "Zarejestrowani vs. rzeczywiście obecni" },
  { metryka: "Post-event konwersja", typ: "Sprzedażowa", opis: "Udział leadów z eventu, które konwertowały w 90 dni" },
];

export default function BlogEventMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Event Marketing — co to jest i jak działa? Kompletny przewodnik"
        description="Event marketing — definicja, rodzaje eventów, jak mierzyć ROI i metryki sukcesu. Kompletny przewodnik po organizowaniu skutecznych wydarzeń marketingowych."
        canonicalUrl="https://fotz.pl/blog/event-marketing-co-to"

        keywords="Event Marketing co to jest, Event Marketing definicja, czym jest Event Marketing, Event Marketing w marketingu, Event Marketing przykłady, jak działa Event Marketing, Event Marketing strategia"

        canonical="https://fotz.pl/blog/event-marketing-co-to"
      />
      <ArticleSchema
        title="Event Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po event marketingu: rodzaje eventów, metryki ROI i jak organizować skuteczne wydarzenia marketingowe."
        url="https://fotz.pl/blog/event-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Event Marketing", url: "https://fotz.pl/blog/event-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Event Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Event Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Kompletny przewodnik po event marketingu. Poznaj rodzaje wydarzeń marketingowych,
            jak mierzyć ROI eventów i które formaty najlepiej sprawdzają się w B2B vs B2C.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest event marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Event marketing</strong> to planowanie, organizowanie i promowanie wydarzeń w celu realizacji
              celów marketingowych — od budowania świadomości marki, przez generowanie leadów,
              po bezpośrednią sprzedaż. Eventy tworzą wyjątkową okazję do budowania relacji w czasie rzeczywistym,
              co jest niemożliwe do odtworzenia przez kanały cyfrowe.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badanie Bizzabo pokazuje, że 95% marketerów uważa eventy na żywo za kluczowy kanał w osiąganiu
              celów biznesowych, a 80% twierdzi, że przyczyniają się one do pozyskiwania nowych klientów.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "95%", opis: "marketerów uważa eventy za kluczowy kanał (Bizzabo)" },
                { stat: "3×", opis: "wyższy engagement vs. inne kanały marketingowe" },
                { stat: "74%", opis: "uczestników twierdzi, że event wzmocnił ich relację z marką" },
              ].map((s, i) => (
                <div key={i} className="bg-purple-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-purple-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Rodzaje eventów */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 głównych typów event marketingu</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Typ eventu</th>
                    <th className="p-3 text-left">Format</th>
                    <th className="p-3 text-left">Cel</th>
                    <th className="p-3 text-left">Koszty</th>
                    <th className="p-3 text-left">Jakość leadów</th>
                  </tr>
                </thead>
                <tbody>
                  {eventTypes.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{row.typ}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.format}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.cel}</td>
                      <td className="p-3 text-slate-600 text-sm">{row.koszty}</td>
                      <td className="p-3">
                        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                          row.leadQuality === "Bardzo wysoka" ? "bg-green-100 text-green-700" :
                          row.leadQuality === "Wysoka" ? "bg-blue-100 text-blue-700" :
                          row.leadQuality.includes("Niska") ? "bg-red-100 text-red-700" :
                          "bg-yellow-100 text-yellow-700"
                        }`}>{row.leadQuality}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Metryki */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">8 kluczowych metryk event marketingu</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {eventMetrics.map((m, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{m.metryka}</p>
                      <p className="text-xs text-purple-600 font-medium mb-1">{m.typ}</p>
                      <p className="text-slate-600 text-sm">{m.opis}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Planowanie eventu */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Jak zaplanować event marketingowy? 5 etapów</h2>
            <div className="space-y-5">
              {[
                { etap: "Strategia i cel", opis: "Zdefiniuj cel (leady, awareness, sprzedaż), grupę docelową, budżet i KPI. Wybierz format — stacjonarny, wirtualny, hybrydowy." },
                { etap: "Planowanie i logistyka", opis: "Wybierz datę, lokalizację lub platformę, zabezpiecz prelegentów, zaplanuj agendę. Przygotuj harmonogram produkcji eventu (run of show)." },
                { etap: "Promocja i rejestracja", opis: "Uruchom kampanię promocyjną: email marketing, social media, paid ads, PR. Skonfiguruj stronę rejestracyjną i system ticketowy." },
                { etap: "Realizacja", opis: "Przeprowadź event zgodnie z planem. Zadbaj o dokumentację (foto, wideo). Na żywo angażuj uczestników przez app eventową, Q&A, networking." },
                { etap: "Follow-up i pomiar", opis: "W ciągu 24h wyślij email follow-up do uczestników z nagraniami i materiałami. Przekaż leady do sprzedaży. Zmierz KPI vs. cele." },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-2">{item.etap}</h3>
                    <p className="text-slate-600">{item.opis}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — event marketing</h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <div key={i} className="border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-3">{item.question}</h3>
                  <p className="text-slate-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <RelatedArticles currentArticleId="event-marketing-co-to" />
      <ContactSection />
    </Layout>
  );
}
