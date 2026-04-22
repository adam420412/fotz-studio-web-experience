import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Jaki Quality Score jest dobry w Google Ads?",
    answer: "Quality Score 8-10 to doskonale wyniki. Oznacza wysoką jakość reklamy, strony docelowej i historii konwersji. Quality Score 6-7 to poziom średni — możesz poprawić. Quality Score poniżej 5 to sygnał, że coś jest nie tak: słaba strona docelowa, niezwiązane słowa kluczowe lub mała liczba konwersji. Wyższy Quality Score bezpośrednio obniża Twój koszt kliknięcia (CPC) nawet o 50%.",
  },
  {
    question: "Jak długo zajmuje optymalizacja kampanii Google Ads?",
    answer: "Pierwsze poprawy widać po 2-3 tygodniach, gdy kampania zbierze wystarczającą ilość danych (co najmniej 50-100 konwersji). Pełna optymalizacja zajmuje 2-3 miesiące. W tym czasie stawiamy hipotezy, testujemy słowa kluczowe, doskonalimy reklamy, optymalizujemy strony docelowe i uczymy się co działa dla Twojej branży.",
  },
  {
    question: "Ile powinien wynosić CTR (Click-Through Rate) w Google Ads?",
    answer: "CTR poniżej 1% to słabe wyniki — ulepszanie nagłówków i opisów reklam. CTR 1-2% to przeciętne wyniki. CTR 2-5% to dobre wyniki. CTR powyżej 5% to świetnie — reklama jest atrakcyjna dla odbiorców. CTR zależy od branży, typu kampanii i pozycji reklamy. Reklamy na pierwszej pozycji mają naturalnie wyższy CTR.",
  },
  {
    question: "Co oznacza ROAS i jaki jest docelowy ROAS?",
    answer: "ROAS (Return on Ad Spend) to stosunek przychodu do wydatków reklamowych. ROAS 2:1 oznacza, że zarabiasz 2 zł na każdym zł wydanym na reklamy. ROAS 3:1 to bardzo dobre wyniki. Docelowy ROAS zależy od branży: dla e-commerce to zwykle 2:1 do 4:1, dla usług B2B to 3:1 do 5:1. Im wyższy ROAS, tym rentowniej pracuje kampania.",
  },
  {
    question: "Jak często powinienem optymalizować kampanię Google Ads?",
    answer: "W pierwszym miesiącu — codziennie sprawdzaj dane i modyfikuj stawki bid. Po miesiącu — kilka razy w tygodniu. Po ustabiizowaniu — raz, dwa razy w tygodniu wystarczy. Nie zmieniaj wszego naraz! Testuj jedną zmianę na raz, żeby wiedzieć co zadziałało. Duże zmiany robić co minimum tydzień, żeby kampania zdążyła zebrać dane.",
  },
  {
    question: "Jakie narzędzia pomagają w optymalizacji Google Ads?",
    answer: "Google Ads Editor — do masowych zmian w kampaniach. Google Analytics — śledzi ruch i konwersje. Google Merchant Center — dla e-commerce. Google Keyword Planner — badanie słów kluczowych. SEMrush, Ahrefs, Sistrix — konkurencja i słowa kluczowe. Hotjar — heatmapy strony docelowej. ConvertKit, Brevo — email nurturing. Tool Fotz.pl — kompleksowe audyty kampanii i optymalizacja strategii.",
  },
  {
    question: "Co to jest CPA (Cost Per Acquisition) i jak go optymalizować?",
    answer: "CPA to koszt pozyskania jednego klienta (konwersji). Jeśli wydasz 1 000 zł na reklamy i uzyskasz 10 konwersji, Twój CPA to 100 zł. Niższy CPA = lepsza rentowność. Aby obniżyć CPA: ulepsz stronę docelową, zwiększyć Quality Score, używaj targeting longtail, testuj różne ogłoszenia, optymalizuj bid strategy np. do Maximize Conversions.",
  },
  {
    question: "Kiedy powinienem zmienić bid strategy w Google Ads?",
    answer: "Jeśli masz mniej niż 50-100 konwersji na miesiąc — używaj Manual CPC (ręczne stawki). 50-300 konwersji — przejdź na Target CPA. Powyżej 300 konwersji — spróbuj Maximize Conversions lub Target ROAS. Nie zmieniaj bid strategy bez powodu! Kiedy zmienisz strategię, system AI potrzebuje 2-3 tygodni na naukę.",
  },
];

const metrics = [
  {
    metric: "CTR (Click-Through Rate)",
    opis: "Procent osób które kliknęły na Twoją reklamę",
    benchmark: "1-3% (zależy od branży)",
    jak_poprawic: "Ulepsz nagłówki i opis reklamy, testuj copywriting, zwiększ relevans słów kluczowych"
  },
  {
    metric: "CPC (Cost Per Click)",
    opis: "Średni koszt jednego kliknięcia",
    benchmark: "0,50-5 zł (zależy od branży)",
    jak_poprawic: "Poprawa Quality Score, bid strategy optimization, fokus na high-intent keywords"
  },
  {
    metric: "Quality Score",
    opis: "Ocena Google jakości reklamy i strony docelowej (1-10)",
    benchmark: "6-10",
    jak_poprawic: "Ulepsz stronę docelową, zwiększ relevans słów kluczowych, polucrz CTR ogłoszeń"
  },
  {
    metric: "Conversion Rate",
    opis: "Procent wizytantów którzy dokonali konwersji",
    benchmark: "2-5% (zależy od branży)",
    jak_poprawic: "Optymalizuj stronę docelową, ulepsz CTA, spraw aby strona ładowała się szybko"
  },
  {
    metric: "ROAS (Return on Ad Spend)",
    opis: "Przychód podzielony przez koszt reklamy (np. 3:1)",
    benchmark: "2:1 do 4:1",
    jak_poprawic: "Fokus na wysokomarżowe produkty, target wysokiego Quality Score, optymalizacja funnel"
  },
  {
    metric: "CPA (Cost Per Acquisition)",
    opis: "Średni koszt pozyskania jednego klienta",
    benchmark: "50-500 zł (zależy od branży)",
    jak_poprawic: "Poprawa Conversion Rate, polepszenie CPC, target high-intent audiences"
  },
  {
    metric: "Impression Share",
    opis: "Procent impresji które Twoja reklama otrzymała ze wszystkich dostępnych",
    benchmark: "Minimum 85%",
    jak_poprawic: "Zwiększ budżet, polepszenie Quality Score, rozszerzenie match type słów kluczowych"
  },
  {
    metric: "Cost per Conversion",
    opis: "Całkowity koszt aby uzyskać jedną konwersję",
    benchmark: "20-200 zł",
    jak_poprawic: "Poprawa Conversion Rate, bid strategy optimization, targeting refinement"
  },
];

const mistakes = [
  { title: "Zbyt szerokie słowa kluczowe", desc: "Używanie ogólnych słów bez intent (np. 'rower' zamiast 'rower szosowy czarna rama 28 cali'). Skutek: dużo kliknięć, mało konwersji, wysoki CPC." },
  { title: "Słaba strona docelowa", desc: "Reklama prowadzi na stronę główną zamiast na dedicowaną landing page. Skutek: niska Conversion Rate, wysoki CPA, marnowanie budżetu." },
  { title: "Brak negatywnych słów kluczowych", desc: "Reklama pokazuje się dla słów które nie chcesz. Np. 'rower używany' gdy sprzedajesz nowe rowery. Skutek: niski Quality Score, wysoki CPC." },
  { title: "Ignorowanie Quality Score", desc: "Nie dbasz o Quality Score. Skutek: podwojenie, potrojenie CPC, mniej konwersji z tego samego budżetu." },
  { title: "Brak śledzenia konwersji", desc: "Nie wiesz ile konwersji generuje kampania. Skutek: nie wiesz czy kampania się opłaca, podejmujesz decyzje bez danych." },
  { title: "Statyczne ogłoszenia bez A/B testów", desc: "Puszczasz tę samą reklamę miesiącami. Skutek: spadek CTR (zmęczenie odbiorcy), spadek Conversion Rate." },
  { title: "Zbyt agresywne bid strategy", desc: "Stawiasz bardzo wysokie stawki bez danych. Skutek: szybko spalisz budżet, negatywny ROI." },
  { title: "Ignorowanie mobile users", desc: "Twoja reklama i strona docelowa źle wygląda na mobilnych. Skutek: niski conversion rate z mobile, całkowity ROAS spada." },
  { title: "Wielka różnica między reklamą a landing page", desc: "Obiecujesz w reklamie X, a na stronie jest Y. Skutek: wysoki bounce rate, niska Conversion Rate, niski Quality Score." },
  { title: "Brak retargetingu", desc: "Kogoś zainteresował, ale nie kupił. A Ty go nie obserwujesz z kolejną reklamą. Skutek: traciasz potencjalnych klientów." },
];

const qualityScoreTips = [
  { title: "Relevans reklamy", desc: "Słowa kluczowe muszą być w nagłówku i opisie reklamy. Jeśli kupujesz na 'fotograf ślubny Poznań' — musi być w tekście reklamy." },
  { title: "Landing page experience", desc: "Google sprawdza czy strona ładuje się szybko (PageSpeed), czy jest mobilna, czy ma jasne CTA. Optymalizuj stronę docelową." },
  { title: "Historia konta", desc: "Quality Score zależy też od historii całego konta Google Ads. Im więcej dobrych kampanii, tym wyższy Quality Score dla nowych." },
  { title: "CTR (Click-Through Rate)", desc: "Wyższy CTR = lepszy Quality Score. Jeśli Twój CTR jest poniżej średniej branżowej, ulepsz tekst reklamy." },
  { title: "Czystość słów kluczowych", desc: "Pogrupuj słowa kluczowe w tematyczne grupy adów. Każda grupa powinna mieć 8-15 słów kluczowych z tym samym intent." },
  { title: "Testowanie reklam", desc: "Zawsze testuj minimum 2-3 warianty ogłoszeń jednocześnie. Google uczy się czego preferują użytkownicy." },
];

const structureGuide = [
  { level: "Kampania", opis: "Najwyższy poziom. Zawiera wiele grup ogłoszeń. Każda kampania ma swój budżet, bid strategy, scheduling, targeting." },
  { level: "Grupa ogłoszeń (Ad Group)", opis: "Grupa tematycznie powiązanych słów kluczowych i ogłoszeń. Np. 'Fotograf ślubny Poznań' — słowa kluczowe i reklamy powiązane z fotografią ślubną." },
  { level: "Słowa kluczowe", opis: "Frazy na które chcesz aby pokazywała się Twoja reklama. Mogą być exact match, phrase match, broad match." },
  { level: "Ogłoszenia", desc: "Tekst który jest wyświetlany. Powinno być minimum 3-4 aktywne ogłoszenia na grupę." },
  { level: "Landing page", opis: "Strona docelowa do której użytkownik trafia po kliknięciu. Musi być relevantna do słowa kluczowego i mieć jasne CTA." },
];

export default function BlogOptymalizacjaGoogleAds() {
  return (
    <Layout>
      <SEOHead
        title="Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025"
        description="Optymalizacja Google Ads: 10 błędów przepalających budżet, Quality Score, struktury konta, metryki i benchmarki. Wyniki +40% do 3 miesięcy."
        canonicalUrl="https://fotz.pl/blog/optymalizacja-google-ads"

        keywords="Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 poradnik, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 strategia, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 jak zrobić, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 marketing, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 przykłady, Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025 w Polsce"

        canonical="https://fotz.pl/blog/optymalizacja-google-ads"
      />
      <ArticleSchema
        title="Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025"
        description="Kompletny przewodnik optymalizacji kampanii Google Ads: metryki, Quality Score, błędy, struktura konta. Praktyczne porady które działają."
        url="https://fotz.pl/blog/optymalizacja-google-ads"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Optymalizacja Google Ads", url: "https://fotz.pl/blog/optymalizacja-google-ads" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Optymalizacja Google Ads", url: "/blog/optymalizacja-google-ads" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-yellow-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Google Ads / SEM / Strategia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Optymalizacja Google Ads - jak poprawić wyniki kampanii? 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Quality Score, CTR, CPC, ROAS. Jak z tego samego budżetu wyciągnąć 2-3x więcej konwersji? Praktyczne strategie które działają.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Średnia poprawa", value: "+40%" },
                { label: "Czas do rezultatów", value: "2-3 mies." },
                { label: "Quality Score lift", value: "+2-3 pkt" },
                { label: "ROI boost", value: "2-4x" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-yellow-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kluczowe metryki Google Ads - benchmarki</h2>
            <p className="text-gray-600 mb-8">
              Żeby wiedzieć czy Twoja kampania działa dobrze, musisz znać benchmarki dla Twojej branży. Poniżej najważniejsze metryki, które musisz śledzić codziennie:
            </p>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Metryka</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Benchmark</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Jak poprawić</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row, i) => (
                    <tr key={row.metric} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{row.metric}</td>
                      <td className="p-3 border border-gray-200 text-gray-700 text-xs">{row.opis}</td>
                      <td className="p-3 border border-gray-200 text-yellow-600 font-semibold text-xs">{row.benchmark}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{row.jak_poprawic}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10 błędów które przepalają budżet Google Ads</h2>
            <p className="text-gray-600 mb-8">
              Większość firm popełnia te same błędy. Oto lista najczęstszych błędów które widzimy w kampaniach naszych klientów:
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              {mistakes.map((mistake, i) => (
                <FadeInView key={mistake.title}>
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl font-bold text-red-600 flex-shrink-0">{i + 1}.</div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{mistake.title}</h3>
                        <p className="text-gray-700">{mistake.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Quality Score - jak poprawić ocenę reklamy?</h2>
            <p className="text-gray-600 mb-8">
              Quality Score to jedna z najważniejszych metryk w Google Ads. Wpływa bezpośrednio na Twój CPC i ROAS. Wyższy Quality Score = niższy koszt, więcej konwersji z tego samego budżetu.
            </p>
            <div className="space-y-6">
              {qualityScoreTips.map((tip, i) => (
                <FadeInView key={tip.title}>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold">{i + 1}</span>
                      {tip.title}
                    </h3>
                    <p className="text-gray-700">{tip.desc}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Struktura konta Google Ads - jak organizować kampanię?</h2>
            <p className="text-gray-600 mb-8">
              Prawidłowa struktura konta to fundament dobrej optymalizacji. Konto zorganizowane hierarchicznie pozwala na lepszą kontrolę i szybszą optymalizację.
            </p>
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-300 rounded-lg p-8">
              <div className="space-y-6">
                {structureGuide.map((level, i) => (
                  <div key={level.level}>
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400 text-slate-900 font-bold flex-shrink-0">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">{level.level}</h3>
                        <p className="text-gray-700">{level.opis || level.desc}</p>
                      </div>
                    </div>
                    {i < structureGuide.length - 1 && (
                      <div className="ml-5 mt-4 h-8 border-l-2 border-yellow-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>

          <FadeInView className="mt-12">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-4">Gotowy na transformację swoich wyników?</h2>
              <p className="text-lg mb-6 opacity-95">
                Średnia poprawa wyników u naszych klientów to +40% do +150% ROAS w ciągu 3 miesięcy. To nie magia — to systematyczna optymalizacja opartą na danych.
              </p>
              <Link
                to="/kontakt"
                className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Zarezerwuj bezpłatną analizę kampanii
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania — Optymalizacja Google Ads</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
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
