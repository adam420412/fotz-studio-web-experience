import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest multithreading w sprzedaży B2B?",
    answer: "Multithreading (wielowątkowość) w sprzedaży B2B to strategia budowania relacji z wieloma decydentami i influencerami po stronie klienta jednocześnie, zamiast polegania wyłącznie na jednym kontakcie (single-threaded deal). W enterprise sprzedaży decyzje zakupowe angażują średnio 6-10 osób (Gartner). Deal, który jest single-threaded — oparty wyłącznie na jednej osobie — jest ekstremalnie ryzykowny: jeśli ten kontakt odejdzie, zmieni priorytet lub straci wewnętrzne wsparcie, deal przepada. Multithreading dramatycznie zwiększa win rate i odporność procesu na zmiany personalne.",
  },
  {
    question: "Jakie role należy zaangażować w enterprise dealach?",
    answer: "Buying committee w enterprise: Economic Buyer (EB) — osoba mająca ostateczną decyzję budżetową; często C-Level lub VP. Champion — wewnętrzny adwokat, który chce Twojego rozwiązania i ma dostęp do EB. User Buyer — osoby, które będą używać produktu na co dzień (Team Lead, Manager). Technical Buyer — IT, Security, Architecture — weryfikuje techniczne wymagania. Procurement/Legal — formalizuje umowę. Coach/Informer — osoba, która nie ma decyzyjności, ale dostarcza insider intelligence. Brak dostępu do EB lub championa bez EB access to red flag — deal z wysokim ryzykiem slip lub no-decision.",
  },
  {
    question: "Jak budować multithreaded deal bez naruszania relacji z Championem?",
    answer: "Budowanie multithreadingu z szacunkiem dla Championa: Zawsze poinformuj Championa przed kontaktem z innymi osobami w organizacji. Zaproponuj jako wartość dodaną: 'Chciałem zapewnić Twojemu VP visibility — czy mógłbyś nas połączyć?' Pozwól Championowi być bohaterem — niech to on organizuje spotkanie z EB, a nie Ty obchodząc go. Angażuj kolejne osoby przez Championa, nie bezpośrednio. Jeśli Champion odmawia dostępu do EB przez długi czas — to poważny red flag wskazujący brak wewnętrznego wsparcia lub pozycji.",
  },
  {
    question: "Jak multithreading wpływa na win rate?",
    answer: "Impact multithreadingu na wyniki: Badania Gartner pokazują, że dea le z 4+ kontaktami po stronie klienta mają o 30-40% wyższy win rate niż single-threaded. Powody: większe committee = mniejsze ryzyko blokady przez jedną osobę, większy alignment wewnętrzny = szybsza decyzja, Champion ma wewnętrzne wsparcie od kolegów. Dealowi z dostępem do EB zamykają się średnio o 50% szybciej. Analizy win/loss pokazują, że majority lost-to-no-decision to single-threaded deale, gdzie champion stracił wewnętrzne wsparcie lub odszedł.",
  },
  {
    question: "Jakie są sygnały, że deal jest za bardzo single-threaded?",
    answer: "Red flags single-threaded dealu: Rozmawiasz z tą samą osobą od 3+ miesięcy bez progresji. Champion mówi 'Dam Ci znać po wewnętrznym spotkaniu' — ale nic nie wiesz co tam się dzieje. Nie znasz imienia ani tytułu Economic Buyera. Champion blokuje dostęp do innych stakeholderów ('sam to zaadresuję'). Deal slip o kwartał lub więcej bez jasnego powodu. Brak odpowiedzi od Championa przez 2+ tygodnie. Te sygnały oznaczają, że deal może być dead deal, który Champion nie chce ci powiedzieć wprost.",
  },
];

const buyingCommittee = [
  { rola: "Economic Buyer (EB)", odpowiedzialność: "Ostateczna decyzja budżetowa", pytania: "ROI, strategic fit, risk", dostęp: "Kluczowy — bez EB access deal jest ryzykowny", kolor: "purple" },
  { rola: "Champion", odpowiedzialność: "Wewnętrzny adwokat — chce Twojego rozwiązania", pytania: "Jak wygrać wewnętrznie, co potrzebuję od Ciebie", dostęp: "Zazwyczaj Twój pierwszy kontakt", kolor: "green" },
  { rola: "User Buyer", odpowiedzialność: "Ocena fit do codziennej pracy", pytania: "Adoption, UX, learning curve, support", dostęp: "Krytyczny dla POC i pilota", kolor: "blue" },
  { rola: "Technical Buyer", odpowiedzialność: "IT, Security, Architecture review", pytania: "Bezpieczeństwo, integracje, uptime, compliance", dostęp: "Niezbędny na etapie technical review", kolor: "orange" },
  { rola: "Procurement / Legal", odpowiedzialność: "Formalizacja kontraktu, negocjacje warunków", pytania: "SLA, liability, payment terms, GDPR", dostęp: "Pojawia się przy finalnym kontrakcie", kolor: "gray" },
];

const multithreadingPlaybook = [
  {
    etap: "Etap 1: Mapa interesariuszy",
    działania: [
      "Zidentyfikuj wszystkich potencjalnych stakeholderów przez LinkedIn, stronę firmy i pytania do Championa",
      "Mapuj organizację: kto raportuje do kogo, kto ma wpływ na budżet",
      "Określ których stakeholderów musisz zaangażować i w jakiej kolejności",
    ],
  },
  {
    etap: "Etap 2: Zaangażowanie przez Championa",
    działania: [
      "Zapytaj Championa: 'Kto jeszcze będzie zaangażowany w tę decyzję?'",
      "Zaproponuj Champion-facilitated intro do EB: 'Czy mógłbyś nas połączyć?'",
      "Przygotuj Championa do wewnętrznej sprzedaży — daj narzędzia (ROI, case studies)",
    ],
  },
  {
    etap: "Etap 3: Executive engagement",
    działania: [
      "Executive-to-executive — VP Sales do VP lub C-Level klienta, jeśli to możliwe",
      "Executive briefing — krótka, ROI-focusowana sesja dla EB (20-30 min)",
      "Angażuj executive sponsora po swojej stronie do sponsorowania relacji",
    ],
  },
  {
    etap: "Etap 4: Utrzymanie multithreadu",
    działania: [
      "Regular updates do wszystkich stakeholderów przez Championa lub bezpośrednio",
      "Różnicuj komunikację — EB dostaje wyniki biznesowe, Technical dostaje spec, User dostaje case studies",
      "Używaj spotkań grupowych (steering committee) do wyrównania wszystkich interesariuszy jednocześnie",
    ],
  },
];

export default function BlogMultithreadingSprzedaz() {
  return (
    <Layout>
      <SEOHead
        title="Multithreading w sprzedaży B2B — angażowanie buying committee | Fotz.pl"
        description="Multithreading w sprzedaży B2B — jak angażować buying committee, mapować stakeholderów i budować wielowątkowe deale w enterprise. Kompletny przewodnik."
        canonicalUrl="https://fotz.pl/blog/multithreading-sprzedaz-b2b-buying-committee"

        keywords="Multithreading w sprzedaży B2B, Multithreading w sprzedaży B2B co to jest, Multithreading w sprzedaży B2B jak działa, Multithreading w sprzedaży B2B definicja, Multithreading w sprzedaży B2B przykłady, Multithreading w sprzedaży B2B poradnik, Multithreading w sprzedaży B2B przewodnik"
      />
      <ArticleSchema
        title="Multithreading w sprzedaży B2B — angażowanie buying committee"
        description="Kompletny przewodnik po multithreadingu: buying committee, mapa stakeholderów i playbook zaangażowania."
        url="https://fotz.pl/blog/multithreading-sprzedaz-b2b-buying-committee"
        datePublished="2024-02-16"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Multithreading sprzedaży", url: "https://fotz.pl/blog/multithreading-sprzedaz-b2b-buying-committee" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Multithreading", href: "/blog/multithreading-sprzedaz-b2b-buying-committee" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Sprzedaż Enterprise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Multithreading w sprzedaży B2B
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Single-threaded deal to tykająca bomba — gdy Twój jedyny kontakt odejdzie lub straci
              wpływ, deal przepada. Multithreading to strategia angażowania całego buying committee,
              która podnosi win rate i odporność procesu na niespodzianki.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Ról w buying committee", value: "5" },
                { label: "Etapów playbooku", value: "4" },
                { label: "Wzrost win rate", value: "+30–40%" },
                { label: "Śr. decydentów enterprise", value: "6–10" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-indigo-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buying Committee */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5 ról w buying committee</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Każda rola w komitecie decyzyjnym ma inne priorytety, pytania i kryteria sukcesu.
              Skuteczny multithreading wymaga dostosowania komunikacji do każdej roli osobno.
            </p>
          </FadeInView>
          <div className="space-y-4">
            {buyingCommittee.map((r) => (
              <FadeInView key={r.rola}>
                <div className={`rounded-xl p-5 border-2 ${
                  r.kolor === "purple" ? "border-purple-300 bg-purple-50" :
                  r.kolor === "green" ? "border-green-200 bg-green-50" :
                  r.kolor === "blue" ? "border-blue-200 bg-blue-50" :
                  r.kolor === "orange" ? "border-orange-200 bg-orange-50" :
                  "border-gray-200 bg-gray-50"
                }`}>
                  <div className="flex gap-4">
                    <div className="flex-1 grid md:grid-cols-4 gap-3">
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Rola</div>
                        <p className={`text-sm font-bold ${
                          r.kolor === "purple" ? "text-purple-800" :
                          r.kolor === "green" ? "text-green-800" :
                          r.kolor === "blue" ? "text-blue-800" :
                          r.kolor === "orange" ? "text-orange-800" :
                          "text-gray-800"
                        }`}>{r.rola}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Odpowiedzialność</div>
                        <p className="text-sm text-gray-700">{r.odpowiedzialność}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Pyta o</div>
                        <p className="text-sm text-gray-700">{r.pytania}</p>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">Dostęp</div>
                        <p className="text-sm text-gray-700">{r.dostęp}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Playbook multithreadingu — 4 etapy</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Systematyczne budowanie wielowątkowych relacji wymaga planu. Oto sprawdzony playbook
              od mapowania interesariuszy do utrzymania relacji przez cały cykl sprzedaży.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {multithreadingPlaybook.map((etap, i) => (
              <FadeInView key={etap.etap}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-indigo-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-3">{etap.etap}</h3>
                      <ul className="space-y-2">
                        {etap.działania.map((d, j) => (
                          <li key={j} className="flex gap-2 text-sm text-gray-700">
                            <span className="text-indigo-500 flex-shrink-0">→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
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

      <ContactSection />
    </Layout>
  );
}
