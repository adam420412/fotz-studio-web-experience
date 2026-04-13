import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest change management?",
    answer:
      "Change management (zarządzanie zmianą) to ustrukturyzowane podejście do przechodzenia jednostek, zespołów i organizacji ze stanu obecnego do pożądanego stanu docelowego. Obejmuje procesy, narzędzia i techniki zarządzania ludzkimi aspektami zmiany — komunikację, szkolenia, zaangażowanie stakeholderów i minimalizację oporu. Badania Prosci pokazują, że projekty z dobrym zarządzaniem zmianą osiągają cele 6x częściej niż te bez niego.",
  },
  {
    question: "Jakie są najpopularniejsze modele change management?",
    answer:
      "Kotter's 8-Step Model (1996) — sekwencyjne 8 kroków od stworzenia pilności do zakotwiczenia zmiany. ADKAR (Prosci) — 5 elementów sukcesu indywidualnej zmiany (Awareness, Desire, Knowledge, Ability, Reinforcement). Lewin's 3-Stage Model — Unfreeze, Change, Refreeze. McKinsey 7-S — 7 współzależnych elementów organizacji. Bridges Transition Model — różnica między zmianą (zewnętrzną) a przejściem (wewnętrznym, psychologicznym). ADKAR jest najpopularniejszy w praktyce biznesowej.",
  },
  {
    question: "Dlaczego większość zmian organizacyjnych kończy się niepowodzeniem?",
    answer:
      "McKinsey raportuje, że 70% transformacji organizacyjnych kończy się porażką. Główne przyczyny: brak wyraźnego sponsoringu ze strony liderów, niewystarczająca komunikacja (co, dlaczego, co dla mnie z tego wynika), ignorowanie oporu (zamiast angażowania sceptycznych osób), za szybkie tempo bez budowania fundamentów, brak mierzenia adopcji i zwycięstw po wdrożeniu. Change management istnieje właśnie po to, by redukować te ryzyka.",
  },
  {
    question: "Czym change management różni się od project management?",
    answer:
      "Project management skupia się na technicznych aspektach zmiany: harmonogramie, budżecie, scope, zasobach i deliverables — odpowiada na 'co' i 'jak'. Change management skupia się na ludzkich aspektach: adopcji, zaangażowaniu, oporze, szkoleniach i kulturze — odpowiada na 'kto' i 'dlaczego'. Skuteczna transformacja wymaga obu. PM bez CM to implementacja technicznie poprawna, ale bojkotowana przez ludzi. CM bez PM to świetna komunikacja bez konkretnych deliverables.",
  },
  {
    question: "Jak mierzyć skuteczność zarządzania zmianą?",
    answer:
      "Metryki skuteczności CM: Adoption Rate (% użytkowników aktywnie używających nowego procesu/narzędzia), Speed of Adoption (czas od wdrożenia do pełnej adopcji), Ultimate Utilization (% max adoption osiągnięty), Business Benefits Realized vs. Planned (% zakładanych korzyści rzeczywiście osiągniętych), Employee Readiness Score (ankiety gotowości przed i po). Prosci Benchmarking Report pozwala porównać wyniki z innymi organizacjami.",
  },
];

const kotterModel = [
  { krok: 1, nazwa: "Stwórz pilność (Create Urgency)", opis: "Zidentyfikuj i zakomunikuj kryzys lub szansę rynkową, która wymaga zmiany teraz — nie za rok", przykłady: "Dane o utracie rynku, benchmark vs. konkurencji, koszt status quo" },
  { krok: 2, nazwa: "Zbuduj koalicję (Build Coalition)", opis: "Zgromadź grupę liderów z realnym autorytetem, wiarygodnością i chęcią napędzania zmiany", przykłady: "Change Sponsors z C-suite, Champions w działach, Key Influencers" },
  { krok: 3, nazwa: "Sformułuj wizję (Form Vision)", opis: "Stwórz jasną, inspirującą wizję przyszłości i strategię jak ją osiągnąć", przykłady: "Vision statement, strategia 3-5 lat, opis co zmieni się dla każdej grupy" },
  { krok: 4, nazwa: "Komunikuj wizję (Communicate Vision)", opis: "Używaj każdego kanału, by konsekwentnie komunikować wizję — liderzy muszą modelować zachowania", przykłady: "Town halls, newsletters, 1:1s, FAQ, plakaty, intranet, cascade przez menedżerów" },
  { krok: 5, nazwa: "Usuń bariery (Remove Obstacles)", opis: "Identyfikuj i eliminuj struktury, procesy i osoby blokujące zmianę", przykłady: "Zmiana KPIs, nowe uprawnienia, eliminacja zbędnych procesów, coaching opornych menedżerów" },
  { krok: 6, nazwa: "Generuj szybkie wygrane (Create Short-Term Wins)", opis: "Planuj i świętuj wczesne, widoczne sukcesy które budują momentum i wiarygodność", przykłady: "Pilot w jednym dziale, metryka osiągnięta w 30 dni, case study sukcesu" },
  { krok: 7, nazwa: "Buduj na zmianach (Sustain Acceleration)", opis: "Nie zwalniaj po pierwszych sukcesach — wzmacniaj kulturę i angażuj kolejne grupy", przykłady: "Kolejne fale wdrożenia, aktualizacja procesów HR, nowe narzędzia i szkolenia" },
  { krok: 8, nazwa: "Zakotwicz zmianę (Anchor Changes)", opis: "Wbuduj nowe zachowania w kulturę, systemy i struktury organizacyjne na stałe", przykłady: "Nowe kryteria rekrutacji, zmienione systemy ocen, onboarding nowych pracowników" },
];

const adkarModel = [
  { element: "A — Awareness (Świadomość)", opis: "Osoba rozumie dlaczego zmiana jest konieczna i co się zmieni", taktyki: "Komunikacja top-down, FAQ, jasne 'dlaczego' od lidera, artykuły prasowe" },
  { element: "D — Desire (Chęć)", opis: "Osoba chce uczestniczyć i wspierać zmianę — motywacja jest wewnętrzna", taktyki: "Angażowanie w design zmiany, addressing personal benefits, 1:1 z menedżerem" },
  { element: "K — Knowledge (Wiedza)", opis: "Osoba wie jak zmienić zachowanie — zna nowe procesy, narzędzia, role", taktyki: "Szkolenia, job aids, dokumentacja, warsztaty, mentoring" },
  { element: "A — Ability (Umiejętności)", opis: "Osoba potrafi zastosować wiedzę w praktyce — demonstrowane nowe zachowanie", taktyki: "Praktyka, coaching, feedback loops, safe environment na błędy" },
  { element: "R — Reinforcement (Wzmocnienie)", opis: "Nowe zachowania są utrwalane — nagradzanie i brak powrotu do starych nawyków", taktyki: "Recognition programy, performance reviews, monitoring compliance, celebration" },
];

export default function BlogChangeManagementCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Change Management — co to jest? Zarządzanie zmianą organizacyjną"
        description="Change management — definicja, model Kotter's 8-Step i ADKAR, dlaczego 70% zmian kończy się porażką i jak mierzyć skuteczność. Kompletny przewodnik po…"
        canonicalUrl="https://fotz.pl/blog/change-management-co-to"

        keywords="Change Management co to jest, Change Management definicja, czym jest Change Management, Change Management przykłady, jak działa Change Management, Change Management znaczenie, Change Management przewodnik"

        canonical="https://fotz.pl/blog/change-management-co-to"
      />
      <ArticleSchema
        title="Change Management — co to jest i jak zarządzać zmianą organizacyjną?"
        description="Kompletny przewodnik po change management: model Kotter 8-Step, ADKAR, różnica vs. project management i metryki adopcji."
        url="https://fotz.pl/blog/change-management-co-to"
        datePublished="2024-01-18"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Change Management", url: "https://fotz.pl/blog/change-management-co-to" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs
            items={[
              { name: "Blog", href: "/blog" },
              { name: "Change Management" },
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Change Management — co to jest i jak zarządzać zmianą?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            70% transformacji organizacyjnych kończy się porażką. Change management to ustrukturyzowane
            podejście, które radykalnie zwiększa szanse sukcesu. Poznaj modele Kotter i ADKAR.
          </p>
        </div>
      </section>

      {/* Definicja */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Czym jest change management?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Change management</strong> to ustrukturyzowane podejście do przechodzenia
              organizacji ze stanu obecnego do pożądanego — przy minimalnym oporze i maksymalnej adopcji.
              Koncentruje się na ludzkim wymiarze transformacji: jak pomóc ludziom zrozumieć zmianę,
              zaakceptować ją i skutecznie działać w nowej rzeczywistości.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Badania Prosci potwierdzają: projekty z efektywnym zarządzaniem zmianą osiągają
              zakładane cele 6x częściej, realizują budżet i harmonogram 5x skuteczniej
              i generują wyższy zwrot z inwestycji.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "70%", opis: "transformacji organizacyjnych kończy się porażką (McKinsey)" },
                { stat: "6x", opis: "większa szansa sukcesu przy efektywnym change management (Prosci)" },
                { stat: "3", opis: "kluczowe modele: Kotter 8-Step, ADKAR, Lewin's 3-Stage" },
              ].map((s, i) => (
                <div key={i} className="bg-emerald-50 rounded-xl p-5 text-center">
                  <p className="text-3xl font-bold text-emerald-600 mb-2">{s.stat}</p>
                  <p className="text-slate-600 text-sm">{s.opis}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Kotter 8 kroków */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Kotter's 8-Step Change Model</h2>
            <div className="space-y-3">
              {kotterModel.map((k, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {k.krok}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{k.nazwa}</h3>
                      <p className="text-slate-600 text-sm mb-2">{k.opis}</p>
                      <div className="bg-emerald-50 rounded p-2 text-xs text-emerald-700">
                        <span className="font-semibold">Przykłady: </span>{k.przykłady}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* ADKAR */}
      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Model ADKAR — zmiana na poziomie jednostki</h2>
            <p className="text-slate-600 mb-8">ADKAR (Prosci) skupia się na tym, co musi stać się w głowie i zachowaniu każdej osoby, by zmiana się powiodła.</p>
            <div className="space-y-4">
              {adkarModel.map((a, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h3 className="font-bold text-emerald-700 mb-2">{a.element}</h3>
                  <p className="text-slate-600 text-sm mb-3">{a.opis}</p>
                  <div className="bg-white rounded p-3 text-sm">
                    <p className="text-xs font-semibold text-slate-500 mb-1">Taktyki:</p>
                    <p className="text-slate-700">{a.taktyki}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — change management</h2>
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

      <RelatedArticles currentArticleId="change-management-co-to" />
      <ContactSection />
    </Layout>
  );
}
