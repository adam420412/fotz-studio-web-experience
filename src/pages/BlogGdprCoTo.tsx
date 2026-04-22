import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest GDPR i kogo dotyczy?",
    answer: "GDPR (General Data Protection Regulation — Ogólne Rozporządzenie o Ochronie Danych, po polsku: RODO) to unijne rozporządzenie (2016/679) obowiązujące od 25 maja 2018 roku, które reguluje przetwarzanie danych osobowych. Kogo dotyczy: GDPR stosuje się do każdej organizacji która przetwarza dane osobowe obywateli UE — niezależnie od tego gdzie organizacja ma siedzibę. Nawet firma w USA musi być zgodna z GDPR jeśli przetwarza dane Europejczyków. Dane osobowe to: imię, email, adres, IP, cookie ID, dane biometryczne, dane zdrowotne — wszystko co identyfikuje lub może zidentyfikować osobę fizyczną. Kary za naruszenia: Do 4% globalnego rocznego obrotu lub 20 milionów EUR (wyższa kwota). Najwyższe kary: Meta 1.2 mld EUR (2023), Amazon 746 mln EUR (2021). Organy nadzorcze w Polsce: UODO (Urząd Ochrony Danych Osobowych). GDPR jest najsurowszą regulacją prywatności danych na świecie.",
  },
  {
    question: "Jakie są podstawy prawne przetwarzania danych w GDPR?",
    answer: "GDPR wymaga podstawy prawnej dla każdego przetwarzania danych osobowych. 6 podstaw prawnych: Zgoda (Consent) — użytkownik wyraźnie wyraził zgodę. Musi być dobrowolna, konkretna, świadoma, jednoznaczna. Prawo do wycofania zgody. Wykonanie umowy — przetwarzanie niezbędne do wykonania umowy z osobą (np. wysyłka zamówienia wymaga adresu). Obowiązek prawny — przetwarzanie wymagane prawem (np. przechowywanie faktur przez 5 lat). Żywotny interes — ochrona życia lub zdrowia (rzadko stosowane). Zadanie publiczne — dla organów publicznych realizujących zadania w interesie publicznym. Uzasadniony interes (Legitimate Interest) — przetwarzanie jest konieczne dla uzasadnionych celów administratora, o ile nie narusza praw osób. Najpopularniejsza podstawa dla B2B marketingu, fraud prevention, bezpieczeństwa. Ważne: każdy cel przetwarzania musi mieć osobną podstawę prawną. Nie możesz używać danych zebranych do jednego celu do innego (purpose limitation).",
  },
  {
    question: "Jakie prawa mają osoby w świetle GDPR?",
    answer: "Prawa podmiotów danych wg GDPR: Prawo dostępu (Art. 15) — osoba może zapytać co wiesz o niej. Musisz odpowiedzieć w ciągu 30 dni bezpłatnie. Prawo do sprostowania (Art. 16) — poprawienie błędnych lub nieaktualnych danych. Prawo do usunięcia (Art. 17) — 'prawo do bycia zapomnianym'. Nie jest absolutne — możesz odmówić jeśli masz obowiązek prawny przechowywania. Prawo do ograniczenia przetwarzania (Art. 18) — zablokowanie pewnych operacji na danych na czas weryfikacji. Prawo do przenoszenia danych (Art. 20) — osoba może żądać danych w ustrukturyzowanym, powszechnie używanym formacie (CSV, JSON). Prawo sprzeciwu (Art. 21) — sprzeciw wobec przetwarzania opartego na uzasadnionym interesie lub do celów marketingu bezpośredniego (musi być honorowany). Prawa dotyczące profilowania — prawo do nie podlegania zautomatyzowanym decyzjom (np. odrzucenie kredytu przez algorytm) bez udziału człowieka. Termin odpowiedzi na żądania: 30 dni (możliwe przedłużenie do 3 miesięcy dla kompleksowych przypadków).",
  },
  {
    question: "Jak wdrożyć GDPR w firmie technologicznej?",
    answer: "Wdrożenie GDPR w firmie tech: Krok 1 — Data Mapping (ROPA). Zinwentaryzuj wszystkie dane osobowe: co zbierasz, po co, na jakiej podstawie, jak długo, z kim udostępniasz. Record of Processing Activities (ROPA) to obowiązek prawny. Krok 2 — Privacy by Design. Wbuduj prywatność w produkty od początku. Zbieraj tylko niezbędne dane (data minimization). Używaj pseudonimizacji i szyfrowania. Krok 3 — Cookie Consent. Wdróż transparentny cookie banner. Zbieraj zgodę przed analitycznymi i marketingowymi cookies. Krok 4 — Privacy Policy i Warunki. Zaktualizuj politykę prywatności. Musi być jasna i zrozumiała (nie 30 stron prawniczego żargonu). Krok 5 — Procedury obsługi żądań. Zdefiniuj proces odpowiadania na żądania podmiotów (dostęp, usunięcie) w ciągu 30 dni. Krok 6 — Data Breach Response. Plan reagowania na naruszenia. Masz 72 godziny na zgłoszenie poważnego naruszenia do UODO. Krok 7 — DPO. Sprawdź czy potrzebujesz Data Protection Officer (wymagany dla dużych organizacji lub przetwarzających wrażliwe dane).",
  },
  {
    question: "Co to są DPA, SCCs i Privacy Shield?",
    answer: "Transfery danych poza EOG: GDPR ogranicza transfer danych osobowych poza Europejski Obszar Gospodarczy (EOG) do krajów bez adekwatnego poziomu ochrony. Mechanizmy transferu: Decyzja adekwatności — Komisja Europejska uznała że kraj zapewnia adekwatną ochronę. Lista: UK, Japonia, Kanada, USA (tylko DPF). Standard Contractual Clauses (SCCs) — standardowe klauzule umowne zatwierdzane przez KE. Najpopularniejszy mechanizm transferu do USA i innych krajów. Każda umowa z procesorem danych spoza EOG (np. AWS, Google Cloud, OpenAI) powinna zawierać SCCs. Data Processing Agreement (DPA) — umowa między administratorem a procesorem danych (np. Twój SaaS i Salesforce). Wymagana przez GDPR Art. 28. Procesory muszą działać tylko wg instrukcji administratora. EU-US Data Privacy Framework (DPF) — następca Privacy Shield od 2023. Umożliwia transfer do certyfikowanych firm w USA. Praktycznie: sprawdź czy Twoi dostawcy (AWS, GCP, Azure, Stripe, Mailchimp) mają ważne DPA i SCCs.",
  },
];

const gdprPrinciples = [
  { zasada: "Zgodność z prawem, rzetelność i przejrzystość", opis: "Przetwarzaj dane legalnie (6 podstaw prawnych), uczciwie i transparentnie wobec osób.", kolor: "blue" },
  { zasada: "Ograniczenie celu", opis: "Zbieraj dane w konkretnym, wyraźnym, prawnie uzasadnionym celu. Nie przetwarzaj do innych celów.", kolor: "green" },
  { zasada: "Minimalizacja danych", opis: "Zbieraj tylko dane niezbędne do celu. Nie zbieraj 'na wszelki wypadek'.", kolor: "purple" },
  { zasada: "Prawidłowość", opis: "Dane muszą być dokładne i aktualne. Wdrożenie procesów aktualizacji danych.", kolor: "orange" },
  { zasada: "Ograniczenie przechowywania", opis: "Przechowuj dane nie dłużej niż konieczne. Zdefiniuj i egzekwuj retention periods.", kolor: "teal" },
  { zasada: "Integralność i poufność", opis: "Stosuj odpowiednie środki bezpieczeństwa: szyfrowanie, pseudonimizacja, kontrola dostępu.", kolor: "red" },
  { zasada: "Rozliczalność", opis: "Administrator musi być w stanie udowodnić zgodność z GDPR. Dokumentuj decyzje i procesy.", kolor: "indigo" },
];

const gdprChecklist = [
  { item: "Record of Processing Activities (ROPA)", status: "Obowiązek prawny" },
  { item: "Polityka prywatności", status: "Obowiązek prawny" },
  { item: "Cookie consent banner", status: "Obowiązek prawny" },
  { item: "DPA z wszystkimi procesorami", status: "Obowiązek prawny" },
  { item: "Procedura obsługi żądań podmiotów", status: "Obowiązek prawny" },
  { item: "Plan reakcji na naruszenia (72h)", status: "Obowiązek prawny" },
  { item: "Privacy by Design w produktach", status: "Obowiązek prawny" },
  { item: "Data Protection Officer (DPO)", status: "Zależy od skali" },
  { item: "DPIA dla ryzykownych procesów", status: "Zależy od procesu" },
  { item: "Szkolenia GDPR dla pracowników", status: "Best practice" },
];

export default function BlogGdprCoTo() {
  return (
    <Layout>
      <SEOHead
        title="GDPR (RODO) | Fotz Studio"
        description="GDPR / RODO: podstawy prawne przetwarzania, prawa podmiotów danych, wdrożenie krok po kroku, DPA, SCCs, kary i checklist compliance dla firm SaaS."
        canonical="https://fotz.pl/blog/gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne"

        keywords="GDPR (RODO) co to jest, GDPR (RODO) definicja, czym jest GDPR (RODO), GDPR (RODO) przykłady, jak działa GDPR (RODO), GDPR (RODO) znaczenie, GDPR (RODO) przewodnik"
      />
      <ArticleSchema
        title="GDPR (RODO) — co to jest i jak wdrożyć w firmie technologicznej?"
        description="GDPR: 7 zasad, 6 podstaw prawnych, prawa podmiotów, wdrożenie krok po kroku, Data Processing Agreement, SCCs, kary i compliance checklist dla SaaS i tech firms."
        url="https://fotz.pl/blog/gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne"
        datePublished="2024-03-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "GDPR / RODO", url: "https://fotz.pl/blog/gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-green-950 to-slate-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "GDPR / RODO", url: "/blog/gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-green-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Legal / Compliance
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              GDPR / RODO
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Do 4% globalnego obrotu kary za naruszenia. Każda firma przetwarzająca
              dane Europejczyków musi być zgodna — niezależnie od lokalizacji.
              Praktyczny przewodnik compliance dla firm technologicznych.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Maks. kara", value: "4% obrotu" },
                { label: "Kwota alternatywna", value: "20M EUR" },
                { label: "Termin żądań", value: "30 dni" },
                { label: "Naruszenia zgłos.", value: "72 godziny" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-green-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 zasad */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7 zasad GDPR</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              GDPR opiera się na siedmiu fundamentalnych zasadach
              przetwarzania danych osobowych. Naruszenie każdej z nich
              może skutkować karą.
            </p>
          </FadeInView>
          <div className="space-y-3">
            {gdprPrinciples.map((p, i) => (
              <FadeInView key={p.zasada}>
                <div className={`rounded-xl border-l-4 p-4 bg-gray-50 ${
                  p.kolor === "blue" ? "border-blue-500" :
                  p.kolor === "green" ? "border-green-500" :
                  p.kolor === "purple" ? "border-purple-500" :
                  p.kolor === "orange" ? "border-orange-500" :
                  p.kolor === "teal" ? "border-teal-500" :
                  p.kolor === "red" ? "border-red-500" :
                  "border-indigo-500"
                }`}>
                  <div className="flex gap-3">
                    <span className={`font-bold text-lg w-6 flex-shrink-0 ${
                      p.kolor === "blue" ? "text-blue-600" :
                      p.kolor === "green" ? "text-green-600" :
                      p.kolor === "purple" ? "text-purple-600" :
                      p.kolor === "orange" ? "text-orange-600" :
                      p.kolor === "teal" ? "text-teal-600" :
                      p.kolor === "red" ? "text-red-600" :
                      "text-indigo-600"
                    }`}>{i + 1}.</span>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{p.zasada}</h3>
                      <p className="text-gray-600 text-sm">{p.opis}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GDPR Compliance Checklist</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Minimalny zestaw działań wymaganych dla compliance z GDPR.
            </p>
          </FadeInView>
          <div className="space-y-2">
            {gdprChecklist.map((c) => (
              <FadeInView key={c.item}>
                <div className="bg-white rounded-lg border border-gray-200 p-4 flex justify-between items-center">
                  <div className="flex gap-3 items-center">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-gray-800 text-sm font-medium">{c.item}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    c.status === "Obowiązek prawny" ? "bg-red-100 text-red-700" :
                    c.status === "Zależy od skali" ? "bg-orange-100 text-orange-700" :
                    c.status === "Zależy od procesu" ? "bg-yellow-100 text-yellow-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>{c.status}</span>
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

      <RelatedArticles currentArticleId="gdpr-rodo-co-to-jest-jak-wdrozyz-firmy-technologiczne" />
      <ContactSection />
    </Layout>
  );
}
