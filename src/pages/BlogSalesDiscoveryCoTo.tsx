import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Co to jest Sales Discovery?",
    answer: "Sales Discovery (rozmowa odkrywająca) to etap procesu sprzedaży, w którym handlowiec przeprowadza ustrukturyzowaną rozmowę z potencjalnym klientem, aby głęboko zrozumieć jego sytuację biznesową, problemy, cele, kryteria decyzji i strukturę zakupu. Celem Discovery NIE jest prezentacja produktu — to etap zbierania informacji, który umożliwia późniejsze dopasowanie i personalizację oferty. Słabe Discovery = słaba propozycja wartości = niższy win rate.",
  },
  {
    question: "Jak powinna wyglądać struktura rozmowy Discovery?",
    answer: "Idealna rozmowa Discovery (45-60 min): Otwarcie — ustaw agendę i zapewnij dwustronność. Tło firmowe (5 min) — zbierz kontekst o firmie (branża, rozmiar, model biznesowy). Sytuacja obecna (10 min) — jak teraz wygląda proces/obszar, który chcesz adresować. Ból i problemy (15 min) — gdzie jest ból, konsekwencje, pilność. Cele i inicjatywy (10 min) — co chcą osiągnąć, jakie projekty są w toku. Kryteria decyzji (10 min) — co jest ważne przy wyborze, kto decyduje, jaki timeline. Następne kroki — zawsze kończ konkretnym następnym krokiem.",
  },
  {
    question: "Jakie pytania zadawać na Discovery?",
    answer: "Kategorie pytań Discovery: Pytania o sytuację — 'Jak obecnie wygląda ten proces u Was?'; Pytania o ból — 'Gdzie macie największe frustracje?', 'Co nie działa tak jak powinno?'; Pytania o konsekwencje — 'Jaki wpływ ma ten problem na Wasze wyniki?'; Pytania o cel — 'Co chcecie osiągnąć w tym obszarze w perspektywie roku?'; Pytania o decyzję — 'Kto jest zaangażowany w tę decyzję?', 'Jaki jest Wasz typowy proces zakupowy?'; Pytania o budżet — 'Czy macie zarezerwowany budżet na ten projekt?'",
  },
  {
    question: "Jak zakwalifikować prospect podczas Discovery?",
    answer: "Kwalifikacja podczas Discovery przez framework BANT lub MEDDIC: B (Budget) — czy mają budżet lub mogą go uzyskać? A (Authority) — czy rozmawiasz z Decision Makerem lub Championem? N (Need) — czy mają realny, pilny problem, który możesz rozwiązać? T (Timeline) — kiedy chcą wdrożyć rozwiązanie? Dobra kwalifikacja na Discovery oszczędza czas — lepiej dowiedzieć się, że prospect nie jest gotowy po 45 minutach niż po 3 miesiącach procesu.",
  },
  {
    question: "Jakie są najczęstsze błędy w Sales Discovery?",
    answer: "Błędy Discovery: Prezentowanie zamiast słuchania — handlowiec mówi 60% czasu i opowiada o produkcie zamiast słuchać klienta. Brak głębi — pytania powierzchowne, nie dociekają prawdziwego bólu i jego konsekwencji. Pominięcie kwalifikacji — rozmowa bez oceny BANT/MEDDIC. Brak następnego kroku — rozmowa kończy się 'wyślę Ci materiały' bez konkretnego commitmentu. Brak notatek w CRM — informacje z Discovery nie są zapisane, team traci kontekst. Jednorazowe Discovery — dla enterprise konieczne jest wielokrotne Discovery z różnymi stakeholderami.",
  },
];

const discoveryAgenda = [
  {
    etap: "1. Otwarcie i agenda (5 min)",
    opis: "Ustaw ton i strukturę rozmowy",
    działania: [
      "Potwierdź dostępny czas obu stron",
      "Przedstaw plan rozmowy — klient wie, czego się spodziewać",
      "Zaproś do dwustronności: 'Chciałbym też usłyszeć Wasze pytania'",
      "Confirm outcome: co oboje chcemy osiągnąć na tym spotkaniu?",
    ],
  },
  {
    etap: "2. Kontekst biznesowy (10 min)",
    opis: "Zrozum firmę i sytuację przed drążeniem problemów",
    działania: [
      "Główne priorytety biznesowe na najbliższy rok",
      "Struktura organizacyjna w obszarze który omawiasz",
      "Obecne rozwiązanie i jak długo go używają",
      "Co spowodowało, że rozmawiacie z nami teraz (trigger)",
    ],
  },
  {
    etap: "3. Ból i problemy (15 min)",
    opis: "Odkryj i rozwiń prawdziwy ból — to serce Discovery",
    działania: [
      "Gdzie są największe frustracje i nieefektywności?",
      "Konsekwencje bólu dla biznesu (SPIN Implication questions)",
      "Ile kosztuje ich obecny problem (czas, pieniądze, ryzyko)?",
      "Pilność — co się stanie jeśli nic nie zmienią?",
    ],
  },
  {
    etap: "4. Cele i inicjatywy (10 min)",
    opis: "Zrozum co chcą osiągnąć — nie tylko co chcą kupić",
    działania: [
      "Cele biznesowe powiązane z problemem (KPI, OKR)",
      "Inne inicjatywy strategiczne, które to rozwiązanie wspierałoby",
      "Jak wygląda sukces za 6 i 12 miesięcy?",
      "Co ich powstrzymuje przed osiągnięciem tych celów?",
    ],
  },
  {
    etap: "5. Decyzja i proces zakupu (10 min)",
    opis: "Zrozum jak podejmują decyzje i kto jest zaangażowany",
    działania: [
      "Kto jest Economic Buyerem (ostateczna decyzja)?",
      "Kto jeszcze jest zaangażowany w decyzję?",
      "Jakie są kryteria wyboru dostawcy?",
      "Timeline i budżet — kiedy chcą podjąć decyzję?",
    ],
  },
  {
    etap: "6. Następne kroki (5 min)",
    opis: "Zakończ konkretnym commitmentem, nie ogólnikami",
    działania: [
      "Podsumuj to, co usłyszałeś (active listening signal)",
      "Zaproponuj konkretny następny krok (demo, POC, business case)",
      "Uzyskaj agreement na datę i uczestników następnego spotkania",
      "Wyraź co Ty zrobisz przed następnym spotkaniem",
    ],
  },
];

const discoveryDontDo = [
  { błąd: "Prezentowanie podczas Discovery", skutek: "Klient nie czuje się wysłuchany, tracisz informacje do personalizacji oferty", zamiast: "Slajdy i demo zostaw na następne spotkanie — Discovery to tylko pytania i słuchanie" },
  { błąd: "Pytania tak/nie bez pogłębiania", skutek: "Powierzchowne informacje — nie rozumiesz prawdziwego bólu", zamiast: "Każdą odpowiedź traktuj jako zaproszenie do 'Powiedz mi więcej...' lub 'Jak to wygląda w praktyce?'" },
  { błąd: "Pominięcie buying committee", skutek: "Strzelasz do osoby bez decyzyjności — tracisz czas", zamiast: "Zawsze pytaj kto jeszcze jest zaangażowany w decyzję i zaproś ich do kolejnych rozmów" },
  { błąd: "Brak notatek i CRM update", skutek: "Team traci kontekst, kolejne rozmowy są bez historii", zamiast: "Update CRM w ciągu 2h po rozmowie — opportunity notes, next steps, key stakeholders" },
];

export default function BlogSalesDiscoveryCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Sales Discovery — co to jest i jak prowadzić? | Fotz.pl"
        description="Sales Discovery — struktura rozmowy odkrywającej, pytania do kwalifikacji, agenda i najczęstsze błędy. Kompletny przewodnik dla handlowców B2B."
        canonicalUrl="https://fotz.pl/blog/sales-discovery-rozmowa-sprzedazowa"

        keywords="Sales Discovery co to jest, Sales Discovery definicja, czym jest Sales Discovery, Sales Discovery w sprzedaży, Sales Discovery strategia, Sales Discovery przykłady, jak używać Sales Discovery"

        canonical="https://fotz.pl/blog/sales-discovery-rozmowa-sprzedazowa"
      />
      <ArticleSchema
        title="Sales Discovery — co to jest i jak prowadzić?"
        description="Kompletny przewodnik po Sales Discovery: struktura, pytania, kwalifikacja i błędy do unikania."
        url="https://fotz.pl/blog/sales-discovery-rozmowa-sprzedazowa"
        datePublished="2024-02-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Sales Discovery", url: "https://fotz.pl/blog/sales-discovery-rozmowa-sprzedazowa" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Sales Discovery", href: "/blog/sales-discovery-rozmowa-sprzedazowa" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-teal-600 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Proces Sprzedaży
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sales Discovery
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Rozmowa odkrywająca, która decyduje o wszystkim co nastąpi potem.
              Słabe Discovery = słaba propozycja = niższy win rate. Dowiedz się, jak prowadzić Discovery,
              które buduje zaufanie i dostarcza informacji potrzebnych do wygrania dealu.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Etapów agendy", value: "6" },
                { label: "Czas Discovery", value: "45–60 min" },
                { label: "Ratio słuchanie", value: "70%" },
                { label: "Kluczowy outcome", value: "Next Step" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Discovery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agenda rozmowy Discovery — 6 etapów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Ustrukturyzowana agenda Discovery zapewnia, że nie pominiesz kluczowych obszarów
              i dotrzesz do informacji potrzebnych do kwalifikacji i personalizacji oferty.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {discoveryAgenda.map((etap, i) => (
              <FadeInView key={etap.etap}>
                <div className="border border-gray-200 rounded-xl p-6">
                  <div className="flex gap-4">
                    <div className="bg-teal-600 text-white font-bold rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-1">{etap.etap}</h3>
                      <p className="text-gray-500 text-sm italic mb-3">{etap.opis}</p>
                      <ul className="space-y-1">
                        {etap.działania.map((d, j) => (
                          <li key={j} className="flex gap-2 text-sm text-gray-700">
                            <span className="text-teal-500 flex-shrink-0">•</span>
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

      {/* Błędy Discovery */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 krytyczne błędy Discovery — i jak ich unikać</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Większość słabych Discovery ma te same błędy. Świadomość ich pozwala systematycznie je eliminować.
            </p>
          </FadeInView>
          <div className="space-y-5">
            {discoveryDontDo.map((item, i) => (
              <FadeInView key={item.błąd}>
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex gap-4">
                    <div className="bg-red-100 text-red-700 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg">
                      ✗
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-red-700 mb-2">{item.błąd}</h3>
                      <div className="grid md:grid-cols-2 gap-3">
                        <div className="bg-red-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-red-700 uppercase mb-1">Skutek</div>
                          <p className="text-sm text-gray-700">{item.skutek}</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3">
                          <div className="text-xs font-bold text-green-700 uppercase mb-1">Zamiast tego</div>
                          <p className="text-sm text-gray-700">{item.zamiast}</p>
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

      <ContactSection />
    </Layout>
  );
}
