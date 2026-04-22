import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest closing w sprzedaży?",
    answer: "Closing (zamykanie sprzedaży) to etap procesu sprzedaży, w którym handlowiec dąży do uzyskania formalnej zgody klienta na zakup — podpisania umowy, złożenia zamówienia lub potwierdzenia decyzji. Dobry closing nie jest manipulacją — jest naturalną kulminacją dobrze przeprowadzonego procesu sprzedaży, gdzie wartość została jasno zakomunikowana, obiekcje zaadresowane, a klient widzi ROI. Jeśli musisz używać agresywnych technik closingowych, problem leży we wcześniejszych etapach procesu, nie w zamknięciu.",
  },
  {
    question: "Jakie są najskuteczniejsze techniki closingu?",
    answer: "Efektywne techniki closingu: Assumptive Close — zakładasz, że klient kupuje ('Kiedy chcecie zacząć wdrożenie?'). Summary Close — podsumowujesz ustalone warunki i wartość przed prośbą o podpis. Question Close — zadajesz pytanie, które zakłada pozytywną decyzję ('Co jest potrzebne, żebyśmy mogli zacząć?'). Urgency Close — oparte na realnym deadlinie lub ograniczonej dostępności (nie fałszywej presji). Choice Close — dajesz dwie opcje, obie prowadzące do zakupu ('Preferujecie plan roczny czy dwuletni?'). Soft Close — 'Jeśli podpiszemy do piątku, możemy uruchomić wdrożenie jeszcze w tym kwartale.'",
  },
  {
    question: "Jak poradzić sobie z obiekcjami podczas closingu?",
    answer: "Obiekcje podczas closingu: Najpierw zrozum, czy to prawdziwa obiekcja, czy taktyka negocjacyjna. Potwierdzenie: 'Czy to jest jedyna rzecz, która powstrzymuje Was od decyzji?' Jeśli tak — zaadresuj konkretnie. Technika LAER (Listen, Acknowledge, Explore, Respond): wysłuchaj, potwierdź, drąż, odpowiedz. Popularne obiekcje przy closingu: 'Musimy to omówić wewnętrznie' (brakuje Ci dostępu do decision makera), 'Za drogo' (nie wykazałeś wystarczającego ROI), 'Nie teraz' (brak pilności — wróć do konsekwencji niedziałania). Closing bez rozwiązania obiekcji to presja, nie sprzedaż.",
  },
  {
    question: "Kiedy poproszić o podpisanie umowy?",
    answer: "Właściwy moment na close: Po potwierdzeniu success criteria — klient rozumie co dostanie. Po walidacji z Decision Makerem — nie tylko Championem. Gdy wszystkie obiekcje zostały zaadresowane. Gdy kontrakt jest gotowy i uzgodniony. Sygnały gotowości do closingu: klient pyta o szczegóły wdrożenia, omawia plan onboardingu, pyta o referencje klientów podobnych do siebie, sam inicjuje rozmowy o pricing i warunkach. Pamiętaj: prosić o podpis można (i trzeba) wprost — 'Czy możemy zaplanować podpisanie na przyszły tydzień?'",
  },
  {
    question: "Co zrobić gdy closing się przeciąga?",
    answer: "Gdy deal się przeciąga: Zidentyfikuj prawdziwą przyczynę — czy to brak decyzyjności Championa, procurement delays, konkurencja, budget freeze, czy zmiana priorytetów klienta? Wróć do Economic Buyera — jeśli nie masz bezpośredniego kontaktu, deal jest w ryzyku. Stwórz wspólny plan zamknięcia (mutual close plan) — wspólna roadmapa z datami i odpowiedzialnościami obu stron. Zdefiniuj konsekwencje opóźnienia dla klienta. Rozważ deal compression — czy możesz uprościć kontrakt lub zacząć od mniejszego scope? Break-up technique: 'Czy powinniśmy przełożyć rozmowę na Q2?' — czasem odblokuje deal.",
  },
];

const closingTechniques = [
  {
    technika: "Assumptive Close",
    kiedy: "Gdy klient wysyła silne sygnały zakupu i cały proces poszedł dobrze",
    jak: "Zamiast pytać czy kupi, pytasz o szczegóły kolejnego kroku: 'Kiedy chcielibyście zacząć wdrożenie?'",
    ryzyko: "Może być odbierana jako presja jeśli klient nie jest gotowy",
    kolor: "blue",
  },
  {
    technika: "Summary Close",
    kiedy: "Na finalnym etapie, gdy ustalone są warunki i wartość",
    jak: "Podsumuj: 'Ustaliliśmy, że X rozwiązuje Wasz problem Y, termin wdrożenia to Z, cena to... Możemy to potwierdzić?'",
    ryzyko: "Wymaga, że wszystko zostało dobrze ustalone wcześniej",
    kolor: "green",
  },
  {
    technika: "Question Close",
    kiedy: "Gdy klient wacha się, ale nie wyraża konkretnych obiekcji",
    jak: "'Co jest jeszcze potrzebne, żebyśmy mogli ruszyć?' lub 'Czy jest coś, co powstrzymuje Cię od podjęcia decyzji?'",
    ryzyko: "Może odkryć ukrytą obiekcję — co jest właśnie celem",
    kolor: "purple",
  },
  {
    technika: "Urgency / Deadline Close",
    kiedy: "Gdy istnieje realny deadline (koniec kwartału, zmiana cen, dostępność wdrożeniowców)",
    jak: "'Jeśli zdecydujecie się przed [datą], możemy zagwarantować wdrożenie jeszcze w tym kwartale.'",
    ryzyko: "Fałszywa presja niszczy zaufanie — używaj tylko realnych deadline'ów",
    kolor: "orange",
  },
];

const closingSignals = [
  { typ: "Werbalny", sygnał: "Pyta o szczegóły wdrożenia lub timeline", siła: "Mocny" },
  { typ: "Werbalny", sygnał: "Pyta o referencje podobnych klientów", siła: "Mocny" },
  { typ: "Werbalny", sygnał: "Omawia onboarding i który team będzie używał produktu", siła: "Bardzo mocny" },
  { typ: "Behawioralny", sygnał: "Angażuje kolejne osoby do rozmów", siła: "Mocny" },
  { typ: "Behawioralny", sygnał: "Sam inicjuje rozmowę o cenach i warunkach", siła: "Bardzo mocny" },
  { typ: "Behawioralny", sygnał: "Włącza procurement lub legal do rozmowy", siła: "Bardzo mocny" },
  { typ: "Negatywny", sygnał: "Odkłada odpowiedzi, nie odpowiada na email", siła: "Ryzyko — sprawdź bloker" },
];

const mutualClosePlan = [
  { tydzien: "Tydzień 1", akcja: "Finalizacja warunków kontraktu i scope", owner: "AE + Champion" },
  { tydzien: "Tydzień 2", akcja: "Security/legal review (jeśli wymagany)", owner: "IT/Legal klienta + CS" },
  { tydzien: "Tydzień 3", akcja: "Executive sign-off od Economic Buyera", owner: "AE + Economic Buyer" },
  { tydzien: "Tydzień 4", akcja: "Podpisanie kontraktu i kickoff wdrożenia", owner: "Obie strony" },
];

export default function BlogClosingTechniqueCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Techniki closingu — jak zamykać sprzedaż B2B? | Fotz.pl"
        description="Techniki closingu w sprzedaży B2B — assumptive close, summary close, sygnały zakupu, obiekcje i mutual close plan. Kompletny przewodnik dla handlowców."
        canonical="https://fotz.pl/blog/techniki-closingu-zamykanie-sprzedazy"

        keywords="Techniki closingu co to jest, Techniki closingu definicja, czym jest Techniki closingu, Techniki closingu w sprzedaży, Techniki closingu strategia, Techniki closingu przykłady, jak używać Techniki closingu"

        canonical="https://fotz.pl/blog/techniki-closingu-zamykanie-sprzedazy"
      />
      <ArticleSchema
        title="Techniki closingu — jak zamykać sprzedaż B2B?"
        description="Kompletny przewodnik po closingu w sprzedaży B2B: techniki, sygnały zakupu, obiekcje i mutual close plan."
        url="https://fotz.pl/blog/techniki-closingu-zamykanie-sprzedazy"
        datePublished="2024-02-14"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Techniki closingu", url: "https://fotz.pl/blog/techniki-closingu-zamykanie-sprzedazy" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Techniki closingu", url: "/blog/techniki-closingu-zamykanie-sprzedazy" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-rose-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sprzedaż B2B
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Techniki closingu
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Closing to naturalny wynik dobrego procesu sprzedaży — nie manipulacja.
              Handlowiec, który dobrze kwalifikuje, prowadzi Discovery i buduje wartość,
              nie potrzebuje agresywnych technik. Ale wie kiedy i jak poprosić o decyzję.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Technik closingu", value: "4" },
                { label: "Sygnałów zakupu", value: "7" },
                { label: "Etapów close plan", value: "4" },
                { label: "Kluczowy kontakt", value: "Econ. Buyer" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-rose-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Techniki */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 kluczowe techniki closingu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Wybór techniki zależy od etapu rozmowy, sygnałów klienta i kontekstu dealà.
              Każda technika ma swój optymalny moment i ryzyka.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {closingTechniques.map((t, i) => (
              <FadeInView key={t.technika}>
                <div className={`rounded-xl border-2 p-6 ${
                  t.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  t.kolor === "green" ? "border-green-200 bg-green-50" :
                  t.kolor === "purple" ? "border-purple-200 bg-purple-50" :
                  "border-orange-200 bg-orange-50"
                }`}>
                  <div className="flex gap-4">
                    <div className={`font-bold text-white rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0 ${
                      t.kolor === "blue" ? "bg-blue-600" :
                      t.kolor === "green" ? "bg-green-600" :
                      t.kolor === "purple" ? "bg-purple-600" :
                      "bg-orange-600"
                    }`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{t.technika}</h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Kiedy stosować</div>
                          <p className="text-sm text-gray-700">{t.kiedy}</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-gray-500 uppercase mb-1">Jak to brzmi</div>
                          <p className="text-sm text-gray-700 italic">{t.jak}</p>
                        </div>
                        <div className="bg-white/70 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-600 uppercase mb-1">Ryzyko</div>
                          <p className="text-sm text-gray-700">{t.ryzyko}</p>
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

      {/* Sygnały zakupu */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sygnały gotowości do zakupu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Skuteczny closing zaczyna się od rozpoznania sygnałów, że klient jest gotowy.
              Closing zbyt wcześnie lub zbyt późno ma negatywny wpływ na wynik.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Typ</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Sygnał</th>
                  <th className="text-left p-4 text-sm font-bold text-gray-700">Siła sygnału</th>
                </tr>
              </thead>
              <tbody>
                {closingSignals.map((s, i) => (
                  <tr key={s.sygnał} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-4 text-sm text-gray-600">{s.typ}</td>
                    <td className="p-4 text-sm text-gray-800">{s.sygnał}</td>
                    <td className="p-4">
                      <span className={`text-xs px-2 py-1 rounded font-semibold ${
                        s.siła === "Bardzo mocny" ? "bg-green-100 text-green-800" :
                        s.siła === "Mocny" ? "bg-blue-100 text-blue-800" :
                        "bg-red-100 text-red-800"
                      }`}>
                        {s.siła}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mutual Close Plan */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mutual Close Plan — współdzielona roadmapa do podpisu</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Mutual Close Plan to wspólny dokument uzgodniony z klientem, który definiuje
              wszystkie kroki, daty i odpowiedzialności potrzebne do zamknięcia dealu.
              Eliminuje surprizy i buduje commitment obu stron.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {mutualClosePlan.map((m, i) => (
              <FadeInView key={m.tydzien}>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex gap-4 items-center">
                  <div className="bg-rose-600 text-white text-xs px-3 py-1 rounded font-bold flex-shrink-0">{m.tydzien}</div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800">{m.akcja}</p>
                  </div>
                  <div className="text-xs text-gray-500 flex-shrink-0">{m.owner}</div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <div className="mt-6 bg-rose-50 rounded-xl p-5 border border-rose-200">
              <h3 className="font-bold text-rose-800 mb-2">Dlaczego Mutual Close Plan działa?</h3>
              <p className="text-sm text-gray-700">
                Gdy klient akceptuje wspólny plan z datami, psychologicznie deklaruje się do procesu —
                odmowa dealu po przyjęciu planu wymaga aktywnego wycofania, co jest trudniejsze niż
                pasywne odkładanie. Plan ujawnia też rzeczywiste blokery (legal, security, budget approval)
                zanim ześlizną się na koniec kwartału.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <RelatedArticles currentArticleId="techniki-closingu-zamykanie-sprzedazy" />
      <ContactSection />
    </Layout>
  );
}
