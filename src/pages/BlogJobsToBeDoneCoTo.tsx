import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest Jobs To Be Done (JTBD)?",
    answer: "Jobs To Be Done (JTBD) to teoria innowacji i rozumienia klienta opracowana przez Claytona Christensena. Kluczowa idea: klienci nie kupują produktów — 'zatrudniają' je do wykonania konkretnego 'zadania' (job) w swoim życiu lub biznesie. Przykład: klient kupujący Slack nie kupuje 'komunikatora' — zatrudnia go do zadania 'skuteczna współpraca z teamem bez chaosu w emailu'. JTBD pomaga zrozumieć prawdziwą motywację zakupową, co prowadzi do lepszego product-market fit, lepszego marketingu i przewagi nad konkurencją, która walczy na features.",
  },
  {
    question: "Jakie są rodzaje Jobs To Be Done?",
    answer: "3 typy JTBD: Functional Jobs — praktyczne zadania, które klient chce wykonać ('wysłać paczkę', 'zarządzać pipeline sprzedaży'). Social Jobs — jak klient chce być postrzegany przez innych w związku z używaniem produktu ('wyglądać profesjonalnie', 'być postrzegany jako innowator'). Emotional Jobs — jak klient chce się czuć ('czuć się bezpiecznie', 'nie martwić się o compliance'). Silne produkty adresują wszystkie trzy typy. Tesla przykład: Functional (samochód elektryczny), Social (wyglądać na osobę dbającą o środowisko i innowacje), Emotional (czuć się na czele technologii).",
  },
  {
    question: "Jak przeprowadzić badanie JTBD?",
    answer: "Badanie JTBD: Wywiady z klientami — szczególnie wywiad 'Switch Interview' o momencie zakupu: kiedy zdecydowali się kupić? Co sprowokowało decyzję? Co rozważali jako alternatywę? Co było barierą? Co 'wyzwoliło' zakup? Kluczowe pytania: 'Opowiedz mi o momencie, gdy zdecydowałeś się kupić X' — szukasz triggera. 'Czego szukałeś przed zakupem?' — rozumiesz journey. 'Co rozważałeś jako alternatywę?' — poznasz rzeczywistą konkurencję. 'Co cię powstrzymywało?' — identyfikujesz bariery. Wywiady JTBD są narracyjne — pytasz o historię, nie opinię.",
  },
  {
    question: "Jak JTBD jest używane w product development?",
    answer: "JTBD w product: Zamiast tworzyć features 'bo klienci o nie proszą', JTBD pyta 'jaki job klient chce wykonać?' i projektuje rozwiązanie wokół jobu. Przykład: klienci proszą o 'szybsze konie' (feature request), JTBD pokazuje, że job to 'dotrzeć szybciej z A do B' — co prowadzi do samochodu. Amazon zawdzięcza Prime jobowi 'chcę kupić bez martwienia się o koszty dostawy', nie feature'owi 'darmowa dostawa'. JTBD pomaga też priorytetyzować roadmapę: features które lepiej wykonują job klientów > features które nie są związane z żadnym jobem.",
  },
  {
    question: "Czym JTBD różni się od user persona?",
    answer: "Personas vs JTBD: Persona definiuje 'kto' jest klientem — demografika, tytuł stanowiska, zachowania, bóle. JTBD definiuje 'dlaczego' klient kupuje — jaki job chce wykonać. Problem z personas: persona 35-letni manager marketingu może chcieć wykonać zupełnie inne joby niż inny 35-letni manager marketingu. Persona nie wyjaśnia dlaczego klient zdecydował się kupić akurat teraz. JTBD jest lepszy do innowacji i zrozumienia motywacji zakupowej. Personas są lepsze do komunikacji marketingowej i UX. Najlepsze organizacje używają obu: persona mówi kto, JTBD mówi dlaczego.",
  },
];

const jtbdExamples = [
  {
    produkt: "Milkshake (słynny przykład Christensena)",
    superficialReason: "Klient chce milkshake'a",
    realJob: "Functional: mieć coś do roboty w nudnej porannej jeździe do pracy; Emotional: nie być głodnym do lunchu; Social: nie wyglądać na osobę jedzącą śmieciowe jedzenie",
    insight: "McDonald's nie rozumiał że rano milkshake konkuruje z bananem i kanapką, a nie z innymi milkshake'ami. Zmieniłoby to całe podejście do produktu i marketingu.",
    kolor: "blue",
  },
  {
    produkt: "Notion",
    superficialReason: "Klient chce narzędzia do notatek",
    realJob: "Functional: mieć jedno miejsce na wszystkie informacje i procesy teamu; Social: wyglądać na zorganizowany, nowoczesny team; Emotional: czuć kontrolę nad chaosem informacyjnym",
    insight: "Notion nie walczy z Wordem czy Excelem — walczy z chaosem informacyjnym. To zmienia całe messaging i roadmapę.",
    kolor: "green",
  },
  {
    produkt: "Salesforce CRM",
    superficialReason: "Klient chce systemu CRM",
    realJob: "Functional: mieć przewidywalny, zarządzalny pipeline sprzedaży; Social: być odpowiedzialnym VP Sales przed zarządem; Emotional: nie bać się board meeting bo masz dane pod kontrolą",
    insight: "Salesforce sprzedaje przewidywalność i kontrolę, nie software. To dlatego kupuje go VP Sales, nie handlowiec.",
    kolor: "purple",
  },
];

const jtbdResearchProcess = [
  { krok: "1. Wybierz segment do badania", opis: "Skoncentruj się na klientach, którzy niedawno kupili (lub switch'owali od konkurencji). Świeże zakupy = świeże wspomnienia motywacji." },
  { krok: "2. Przeprowadź Switch Interview", opis: "45-60 min wywiad o historii zakupu. Zacznij: 'Opowiedz mi o momencie gdy zdecydowałeś się kupić X. Co się działo?' Słuchaj aktywnie." },
  { krok: "3. Zidentyfikuj trigger", opis: "Szukaj momentu, który sprowokował poszukiwanie rozwiązania. 'Co wydarzyło się, że zaczęłeś szukać X?' Trigger to punkt wejścia do jobu." },
  { krok: "4. Mapuj 4 siły zakupu", opis: "Push od obecnej sytuacji (ból), Pull do nowego rozwiązania (magnetyzm), Anxiety (lęk przed zmianą), Inertia (przyzwyczajenie do starego). Decyzja jest wypadkową tych sił." },
  { krok: "5. Zdefiniuj Job Statement", opis: "Format: 'Kiedy [sytuacja], chcę [motywacja], żeby [oczekiwany wynik]'. Przykład: 'Kiedy prowadzę team zdalnie, chcę mieć wspólne miejsce komunikacji, żeby nie tracić wątku przez chaos w emailach.'" },
  { krok: "6. Zastosuj insights", opis: "Przetłumacz JTBD na: positioning, messaging marketingowy, roadmapę produktową, onboarding flow i success metrics." },
];

export default function BlogJobsToBeDoneCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Jobs To Be Done (JTBD) — co to jest i jak stosować? | Fotz.pl"
        description="Jobs To Be Done (JTBD) — teoria innowacji Christensena, typy jobów, Switch Interview i zastosowanie w product development. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/jobs-to-be-done-jtbd-co-to-jest"

        keywords="Jobs To Be Done (JTBD) co to jest, Jobs To Be Done (JTBD) definicja, czym jest Jobs To Be Done (JTBD), Jobs To Be Done (JTBD) przykłady, jak działa Jobs To Be Done (JTBD), Jobs To Be Done (JTBD) znaczenie, Jobs To Be Done (JTBD) przewodnik"

        canonical="https://fotz.pl/blog/jobs-to-be-done-jtbd-co-to-jest"
      />
      <ArticleSchema
        title="Jobs To Be Done (JTBD) — co to jest i jak stosować?"
        description="Kompletny przewodnik po JTBD: typy jobów, Switch Interview, przykłady i zastosowanie w produkcie."
        url="https://fotz.pl/blog/jobs-to-be-done-jtbd-co-to-jest"
        datePublished="2024-02-25"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Jobs To Be Done", url: "https://fotz.pl/blog/jobs-to-be-done-jtbd-co-to-jest" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Jobs To Be Done", href: "/blog/jobs-to-be-done-jtbd-co-to-jest" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Product Strategy
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jobs To Be Done (JTBD)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Klienci nie kupują produktów — zatrudniają je do wykonania konkretnej pracy.
              JTBD zmienia sposób w jaki myślisz o innowacji: od 'co zbudować' do 'jaki job
              rozwiązać lepiej niż ktokolwiek inny'.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Typy jobów", value: "3" },
                { label: "4 siły zakupu", value: "Push/Pull" },
                { label: "Etapów badania", value: "6" },
                { label: "Twórca teorii", value: "Christensen" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-sky-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Przykłady JTBD */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Przykłady JTBD w praktyce</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              JTBD ujawnia prawdziwy job, do którego klient zatrudnia produkt — który często
              jest zupełnie inny niż to, co firma zakłada.
            </p>
          </FadeInView>
          <div className="space-y-6">
            {jtbdExamples.map((e) => (
              <FadeInView key={e.produkt}>
                <div className={`rounded-xl border-2 p-6 ${
                  e.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  e.kolor === "green" ? "border-green-200 bg-green-50" :
                  "border-purple-200 bg-purple-50"
                }`}>
                  <h3 className={`font-bold text-xl mb-3 ${
                    e.kolor === "blue" ? "text-blue-800" :
                    e.kolor === "green" ? "text-green-800" :
                    "text-purple-800"
                  }`}>
                    {e.produkt}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/70 rounded-lg p-3">
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Powód powierzchowny</div>
                      <p className="text-sm text-gray-700">{e.superficialReason}</p>
                    </div>
                    <div className="bg-white/70 rounded-lg p-3">
                      <div className="text-xs font-bold text-gray-500 uppercase mb-1">Prawdziwy Job</div>
                      <p className="text-sm text-gray-700">{e.realJob}</p>
                    </div>
                    <div className={`rounded-lg p-3 ${
                      e.kolor === "blue" ? "bg-blue-100" :
                      e.kolor === "green" ? "bg-green-100" :
                      "bg-purple-100"
                    }`}>
                      <div className={`text-xs font-bold uppercase mb-1 ${
                        e.kolor === "blue" ? "text-blue-700" :
                        e.kolor === "green" ? "text-green-700" :
                        "text-purple-700"
                      }`}>Insight</div>
                      <p className="text-sm text-gray-700">{e.insight}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Proces badania */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Jak przeprowadzić badanie JTBD — 6 kroków</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Switch Interview to sercem badania JTBD — rozmowa o historii decyzji zakupowej,
              która ujawnia prawdziwe motywacje, trigger i bariery.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {jtbdResearchProcess.map((k, i) => (
              <FadeInView key={k.krok}>
                <div className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex gap-4">
                    <div className="bg-sky-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{k.krok}</h3>
                      <p className="text-sm text-gray-700">{k.opis}</p>
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

      <RelatedArticles currentArticleId="jobs-to-be-done-jtbd-co-to-jest" />
      <ContactSection />
    </Layout>
  );
}
