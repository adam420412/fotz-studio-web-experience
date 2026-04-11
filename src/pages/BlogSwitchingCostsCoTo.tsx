import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to są switching costs?",
    answer:
      "Switching costs (koszty zmiany) to suma kosztów — finansowych, czasowych, emocjonalnych i operacyjnych — które klient ponosi przy przejściu od jednego dostawcy do konkurencji. Wysokie switching costs to jeden z najpotężniejszych moatów biznesowych — klient może być niezadowolony z produktu, ale zmiana jest po prostu zbyt kosztowna lub uciążliwa. Pojęcie kluczowe w strategii biznesowej, szczególnie dla enterprise SaaS, bankowości i telekomunikacji.",
  },
  {
    question: "Jakie są rodzaje switching costs?",
    answer:
      "Główne kategorie: 1) Finansowe — opłaty za rozwiązanie kontraktu, utrata pre-paid usług, koszty nowego zakupu, 2) Proceduralne/Operacyjne — czas na migrację danych, rekonfigurację integracji, naukę nowego systemu, 3) Relacyjne — utrata zbudowanych relacji z account managerem, support teamem, 4) Umowne — kary za wcześniejsze rozwiązanie kontraktu, notice period, 5) Techniczne — lock-in proprietary formatów, API dependencies, 6) Psychologiczne — niepewność nowego dostawcy, strach przed nieudaną migracją.",
  },
  {
    question: "Jak switching costs wpływają na pricing i strategie sprzedaży?",
    answer:
      "Firmy z wysokimi switching costs mogą: 1) Pobierać wyższe ceny — klient zapłaci premię żeby uniknąć kosztów zmiany, 2) Stosować ceny penetracyjne na wejściu — niższe ceny aby wejść na konto, wyższe po uzależnieniu, 3) Polegać na wolniejszym churnie — retencja wyższa bez dodatkowych nakładów, 4) Upsell bez strachu przed odpychaniem — klient nie odejdzie przez jedną odmowę. Ryzyko: nadużywanie switching costs przez słaby produkt prowadzi do resentmentu i odejścia gdy próg bólu zostanie przekroczony.",
  },
  {
    question: "Jak budować switching costs jako firma?",
    answer:
      "Strategie budowania switching costs: 1) Data lock-in — przechowuj kluczowe dane klienta w proprietary formatach lub z utrudnionym eksportem, 2) Deep integrations — integracje z istniejącym stackiem IT klienta (API, webhooks, native apps), 3) Workflow embedding — stań się częścią codziennego workflow (Jira dla developmentu, Salesforce dla sprzedaży), 4) Network effects — im więcej collegów klienta używa Twojego produktu, tym trudniej odejść, 5) Certifications/Expertise — inwestycja w wiedzę o produkcie zwiększa koszt zmiany.",
  },
  {
    question: "Co to jest vendor lock-in i kiedy jest problemem?",
    answer:
      "Vendor lock-in to ekstremalny przypadek switching costs gdy klient jest tak mocno uzależniony od dostawcy, że zmiana jest praktycznie niemożliwa lub niewyobrażalnie kosztowna. Lock-in jest problemem gdy: 1) Jakość/cena produktu znacznie spadła ale klient nie może odejść, 2) Vendor nadużywa pozycji przez agresywne podwyżki lub zmiany warunków, 3) Klient traci negocjacyjną dźwignię. Przykłady lock-in: migracja między cloud providers (AWS→GCP), zmiana ERP (SAP→Oracle), zmiana CRM dla enterprise.",
  },
];

const switchingCostTypes = [
  { typ: "Finansowe", przykłady: "Opłata za wcześniejsze rozwiązanie kontraktu, utrata subskrypcji, koszty nowego wdrożenia", jak_budować: "Długoterminowe kontrakty z early termination fee, pre-paid plany" },
  { typ: "Proceduralne", przykłady: "Migracja danych, konfiguracja integracji, re-trening pracowników, nowy workflow", jak_budować: "Złożone onboardingi, proprietary data formats, deep integrations" },
  { typ: "Relacyjne", przykłady: "Utrata zaufanych account managerów, znajomość historii firmy, wypracowane procesy", jak_budować: "Dedykowany CSM, QBR, osobiste relacje z decision makerami" },
  { typ: "Techniczne", przykłady: "API dependencies, proprietary formaty plików, brak standardów eksportu, custom kod", jak_budować: "Native integrations, SDK, format lock-in (choć ryzyko regulacyjne)" },
  { typ: "Psychologiczne", przykłady: "Strach przed ryzykiem migracji, niepewność nowego dostawcy, status quo bias", jak_budować: "Wzmacnianie perceived risk of change, case studies migracyjne" },
  { typ: "Społeczne", przykłady: "Wszyscy w firmie/branży używają X, networking events, community Slack", jak_budować: "Community building, user conferences, profesjonalne certyfikacje" },
];

const highSwitchingExamples = [
  { firma: "Salesforce", typ: "CRM", switching_cost: "Miesiące migracji danych, re-trening setek użytkowników, utrata customizacji i integracji. Typowy koszt zmiany: 18-24 miesiące projektu.", wynik: "NRR ponad 100%+ nawet przy cenach premium" },
  { firma: "SAP ERP", typ: "ERP", switching_cost: "Migracja ERP to projekt za dziesiątki milionów PLN, 2-4 lata wdrożenia. Praktycznie niemożliwe bez zewnętrznych konsultantów.", wynik: "Enterprise retention ponad 95% rocznie" },
  { firma: "Adobe Creative Cloud", typ: "Creative Software", switching_cost: "Lata wypracowanych workflows, proprietary pliki (.psd, .ai, .indd), ecosystem pluginów, certifications branżowe.", wynik: "Przejście na subscription model bez masowego odejścia" },
  { firma: "AWS", typ: "Cloud Platform", switching_cost: "Serwisy, konfiguracje, code zależny od AWS SDK, trained engineers, compliance certifications.", wynik: "Średni klient AWS rośnie 30%+ YoY bez intensywnej sprzedaży" },
];

export default function BlogSwitchingCostsCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Switching Costs — co to są koszty zmiany dostawcy? Moat biznesowy"
        description="Switching costs (koszty zmiany) — definicja, 6 rodzajów (finansowe, proceduralne, relacyjne, techniczne), jak budować i vendor lock-in. Kompletny przewodnik po moacie biznesowym."
        canonicalUrl="https://fotz.pl/blog/switching-costs-co-to"
      />
      <ArticleSchema
        title="Switching Costs — co to są koszty zmiany i jak budować moat?"
        description="Kompletny przewodnik po switching costs: 6 rodzajów kosztów, strategie budowania, vendor lock-in i przykłady (Salesforce, SAP, AWS)."
        url="https://fotz.pl/blog/switching-costs-co-to"
        datePublished="2024-02-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Switching Costs", url: "https://fotz.pl/blog/switching-costs-co-to" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <PageBreadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: "Switching Costs" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 mt-4">
            Switching Costs — co to są koszty zmiany i jak budować moat?
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Wysokie koszty zmiany dostawcy to jeden z najpotężniejszych moatów biznesowych.
            Poznaj 6 typów switching costs, jak je budować i unikać vendor lock-in.
          </p>
        </div>
      </section>

      <FadeInView>
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Co to są switching costs?</h2>
            <p className="text-lg text-slate-700 mb-4">
              <strong>Switching costs</strong> to łączny koszt — finansowy, czasowy i emocjonalny —
              jaki klient ponosi przy przejściu od jednego dostawcy do innego.
              Im wyższe switching costs, tym trudniej klientowi odejść — nawet jeśli jest niezadowolony.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              Warren Buffett i Charlie Munger uważają switching costs za jeden z kluczowych czynników
              trwałej przewagi konkurencyjnej — obok efektów sieciowych, kosztowej przewagi i niematerialnych aktywów.
              Firmy z wysokimi switching costs (Salesforce, SAP, Adobe) utrzymują retencję ponad 90%
              nawet przy agresywnym podnoszeniu cen.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { stat: "6 typów", opis: "kosztów zmiany: finansowe, proceduralne, relacyjne, techniczne, psychologiczne, społeczne" },
                { stat: "Vendor lock-in", opis: "ekstremalny switching cost — klient nie może odejść bez katastrofalnych konsekwencji" },
                { stat: "NRR 100%+", opis: "firmy z wysokimi switching costs często rosną z bazy bez dodatkowej sprzedaży" },
              ].map((s, i) => (
                <div key={i} className="bg-slate-100 rounded-xl p-5 text-center">
                  <p className="text-xl font-bold text-slate-700 mb-2">{s.stat}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">6 typów switching costs — jak budować</h2>
            <div className="space-y-4">
              {switchingCostTypes.map((sc, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900 mb-1">{sc.typ}</h3>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-slate-50 rounded p-2">
                          <p className="text-xs font-semibold text-slate-500 mb-1">Przykłady:</p>
                          <p className="text-slate-700">{sc.przykłady}</p>
                        </div>
                        <div className="bg-blue-50 rounded p-2">
                          <p className="text-xs font-semibold text-blue-600 mb-1">Jak budować:</p>
                          <p className="text-blue-800">{sc.jak_budować}</p>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Firmy z wysokimi switching costs</h2>
            <div className="space-y-4">
              {highSwitchingExamples.map((ex, i) => (
                <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <div className="flex items-start gap-4">
                    <div className="text-center w-24 flex-shrink-0">
                      <p className="font-bold text-slate-900">{ex.firma}</p>
                      <p className="text-xs text-slate-500">{ex.typ}</p>
                    </div>
                    <div className="flex-1">
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="bg-orange-50 rounded p-2">
                          <p className="text-xs font-semibold text-orange-600 mb-1">Koszt zmiany:</p>
                          <p className="text-orange-800">{ex.switching_cost}</p>
                        </div>
                        <div className="bg-green-50 rounded p-2">
                          <p className="text-xs font-semibold text-green-600 mb-1">Efekt biznesowy:</p>
                          <p className="text-green-800">{ex.wynik}</p>
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
        <section className="py-16 px-4 bg-slate-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">FAQ — switching costs</h2>
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
