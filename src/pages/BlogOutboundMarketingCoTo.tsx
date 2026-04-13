import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest outbound marketing?",
    answer:
      "Outbound marketing (marketing wychodzący) to tradycyjna forma marketingu, w której firma aktywnie wychodzi do potencjalnych klientów z komunikatem — niezależnie od tego, czy są zainteresowani. Obejmuje: cold calling, cold email, reklamy TV/radio/print, reklamy display, direct mail, telemarketing i outbound sales.",
  },
  {
    question: "Czy outbound marketing nadal działa?",
    answer:
      "Outbound marketing nadal działa, szczególnie w B2B przy targetowaniu decydentów w dużych firmach, gdzie cykl zakupowy jest długi i wymaga wielokrotnego kontaktu. Cold email z mocną personalizacją, LinkedIn outreach i reklamy retargetingowe to skuteczne kanały outbound. Klucz to właściwe targetowanie i personalizacja — nie masowe, ślepe wysyłki.",
  },
  {
    question: "Jaka jest różnica między outbound a inbound marketingiem?",
    answer:
      "Outbound marketing 'przerywa' potencjalnego klienta nieproszonym komunikatem (reklama, cold call). Inbound marketing 'przyciąga' klientów, którzy aktywnie szukają rozwiązań. Outbound daje szybsze efekty, ale jest droższy w skali. Inbound buduje się wolniej, ale generuje trwały, kumulujący się efekt.",
  },
  {
    question: "Ile kosztuje outbound marketing?",
    answer:
      "Koszty outbound są zróżnicowane: cold email — niskie (SDR + narzędzia); LinkedIn outreach — niskie-średnie; reklamy płatne (PPC) — skalowalne od kilkuset do milionów PLN miesięcznie; reklamy TV/radio/outdoor — wysokie (dziesiątki do setek tysięcy PLN). Koszt na lead jest zazwyczaj wyższy niż w inbound.",
  },
  {
    question: "Jakie błędy popełnia się w outbound marketingu?",
    answer:
      "Najczęstsze błędy to: brak personalizacji (masowe szablony), zły timing (kontakt do osoby, która nie jest w fazie zakupowej), nieodpowiednie targetowanie (zła firma lub stanowisko), zbyt agresywna sekwencja follow-up, ignorowanie sygnałów braku zainteresowania oraz brak multi-channel approach.",
  },
];

const outboundChannels = [
  {
    kanał: "Cold Email",
    opis: "Spersonalizowane emaile do osób, które nie wyraziły wcześniej zainteresowania",
    skuteczność: "Średnia",
    koszt: "Niski",
    najlepsze_dla: "B2B, prospecting C-level/mid-management",
    wskazówka: "Personalizacja 1-2 zdania o firmie odbiorcy podnosi open rate o 30–50%",
  },
  {
    kanał: "LinkedIn Outreach",
    opis: "Wiadomości InMail lub Connection Request z wiadomością na LinkedIn",
    skuteczność: "Wysoka (B2B)",
    koszt: "Niski-Średni",
    najlepsze_dla: "B2B Enterprise, rekrutacja",
    wskazówka: "Engagement z postem odbiorcy przed wysłaniem wiadomości podnosi acceptance rate",
  },
  {
    kanał: "Cold Calling",
    opis: "Telefoniczny kontakt z potencjalnym klientem bez wcześniejszego kontaktu",
    skuteczność: "Niska–Średnia",
    koszt: "Średni",
    najlepsze_dla: "SMB B2B, szybkie transakcje",
    wskazówka: "Badanie shows: środa i czwartek 16–17 to najlepszy czas na cold call",
  },
  {
    kanał: "Reklamy Paid Search (PPC)",
    opis: "Płatne reklamy w wyszukiwarkach docierające do osób szukających powiązanych słów kluczowych",
    skuteczność: "Wysoka (demand capture)",
    koszt: "Skalowany",
    najlepsze_dla: "E-commerce, B2C, B2B z wysoką wartością transakcji",
    wskazówka: "RLSA (remarketing lists for search ads) znacznie poprawia ROAS",
  },
  {
    kanał: "Display / Programmatic",
    opis: "Banery i reklamy graficzne na sieci witryn, targetowane demograficznie lub behawioralnie",
    skuteczność: "Niska (awareness) / Wysoka (retargeting)",
    koszt: "Średni",
    najlepsze_dla: "Awareness, retargeting site visitors",
    wskazówka: "Display sprawdza się głównie jako retargeting — nie cold targeting",
  },
  {
    kanał: "Direct Mail",
    opis: "Fizyczne przesyłki pocztowe do potencjalnych klientów",
    skuteczność: "Wysoka (enterprise ABM)",
    koszt: "Wysoki",
    najlepsze_dla: "High-value B2B, luksusowe branże",
    wskazówka: "Fizyczne paczki z personalizowanym giftem mają 80%+ open rate w ABM",
  },
];

const outboundVsInbound = [
  ["Czas do efektów", "Szybki (tygodnie)", "Wolny (6–12 miesięcy)"],
  ["Koszt na lead", "Wyższy", "Niższy (długoterminowo)"],
  ["Skalowalność", "Ograniczona przez zasoby", "Skaluje się organicznie"],
  ["Trwałość efektów", "Zatrzymuje się bez budżetu", "Kumuluje się w czasie"],
  ["Jakość leadów", "Zmienna — zależy od targetowania", "Wyższa — intent-driven"],
  ["Kontrola nad messagingiem", "Pełna kontrola", "Pośrednia (SEO/algorithmy)"],
  ["Najlepsze zastosowanie", "Szybki wzrost, nowe rynki, ABM", "Budowanie autorytetu, SEO, content"],
];

export default function BlogOutboundMarketingCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Outbound Marketing | Fotz Studio"
        description="Outbound marketing — definicja, 6 kanałów (cold email, LinkedIn, PPC, direct mail), porównanie z inbound i jak skutecznie prowadzić kampanie wychodzące."
        canonicalUrl="https://fotz.pl/blog/outbound-marketing-co-to"

        keywords="Outbound Marketing co to jest, Outbound Marketing definicja, czym jest Outbound Marketing, Outbound Marketing w marketingu, Outbound Marketing przykłady, jak działa Outbound Marketing, Outbound Marketing strategia"

        canonical="https://fotz.pl/blog/outbound-marketing-co-to"
      />
      <ArticleSchema
        title="Outbound Marketing — co to jest i jak działa?"
        description="Kompletny przewodnik po outbound marketingu: kanały, strategie i porównanie z inbound marketingiem."
        url="https://fotz.pl/blog/outbound-marketing-co-to"
        datePublished="2024-01-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Outbound Marketing", url: "https://fotz.pl/blog/outbound-marketing-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Outbound Marketing" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Outbound Marketing — co to jest i jak działa?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Outbound marketing to aktywne docieranie do potencjalnych klientów.
            Poznaj 6 kanałów outbound, porównanie z inbound oraz jak prowadzić skuteczne kampanie wychodzące.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest outbound marketing?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Outbound marketing</strong> (marketing wychodzący) to każda forma marketingu,
              w której firma aktywnie inicjuje kontakt z potencjalnymi klientami — wysyłając im komunikat
              bez wcześniejszego wyrażenia przez nich zainteresowania.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              W erze cyfrowej outbound marketing ewoluował od masowych, ślepych kampanii (TV, telemarketing)
              w kierunku precyzyjnie targetowanych działań (cold email z personalizacją, LinkedIn outreach, ABM).
              Kluczem do skutecznego outboundu jest odpowiedni dobór odbiorców i personalizacja przekazu.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
              <p className="font-semibold text-amber-900">Nowy outbound vs. stary outbound</p>
              <p className="text-amber-800 mt-2">
                Stary outbound: masowe cold calle, niespersonalizowane emaile-szablony, reklamy billboard bez targetowania.
                Nowy outbound: precyzyjne targetowanie ICP, personalizacja 1:1, multichannel sequences, intent data.
              </p>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kanały */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 głównych kanałów outbound marketingu</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {outboundChannels.map((c, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{c.kanał}</h3>
                  <p className="text-slate-600 text-sm mb-3">{c.opis}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                    <div className="bg-slate-50 rounded p-2">
                      <p className="font-medium text-slate-500">Skuteczność</p>
                      <p className="text-slate-700">{c.skuteczność}</p>
                    </div>
                    <div className="bg-slate-50 rounded p-2">
                      <p className="font-medium text-slate-500">Koszt</p>
                      <p className="text-slate-700">{c.koszt}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">Najlepsze dla: {c.najlepsze_dla}</p>
                  <div className="bg-amber-50 rounded-lg p-2">
                    <p className="text-xs text-amber-800">Wskazówka: {c.wskazówka}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Outbound vs Inbound */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Outbound vs. Inbound Marketing</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3 text-left">Kryterium</th>
                    <th className="p-3 text-left">Outbound</th>
                    <th className="p-3 text-left">Inbound</th>
                  </tr>
                </thead>
                <tbody>
                  {outboundVsInbound.map(([kryterium, outbound, inbound], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="p-3 font-semibold text-slate-900">{kryterium}</td>
                      <td className="p-3 text-slate-700">{outbound}</td>
                      <td className="p-3 text-slate-600">{inbound}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Najlepsze strategie łączą outbound i inbound — outbound na szybkie wyniki i nowe segmenty,
              inbound na trwały wzrost organiczny.
            </p>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — outbound marketing</h2>
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
