import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Ile kosztuje Facebook Ads — jaki jest minimalny budżet?",
    answer: "Facebook Ads nie ma minimalnego budżetu. Możesz zacząć od 100-300 zł dziennie i uzyskać pierwsze wyniki. W praktyce dla małych firm lokalnych budżet 300-1 000 zł miesięcznie na kampanię wystarcza do sensownych wyników. Dla e-commerce lub konkurencyjnych branż (finanse, nieruchomości, usługi premium) potrzeba 2 000-10 000 zł/miesiąc. Facebook Ads jest tańszy niż Google Ads — średnio CPC wynosi 0,20-2 zł w zależności od branży.",
  },
  {
    question: "Ile kosztuje obsługa kampanii Facebook Ads przez agencję?",
    answer: "Obsługa kampanii Facebook Ads przez agencję to zazwyczaj 10-20% budżetu reklamowego lub stała opłata 300-1 500 zł netto/miesiąc. Przy budżecie 1 000 zł/miesiąc możesz oczekiwać opłaty agencyjnej od 200 do 400 zł. Przy budżecie 5 000 zł — od 800 do 1 500 zł. Facebook Ads wymaga mniejszego zaangażowania niż Google Ads, stąd niższe stawki obsługi.",
  },
  {
    question: "Jaka jest różnica między CPC, CPM i CPA w Facebook Ads?",
    answer: "CPC (Cost Per Click) to koszt za każde kliknięcie — płacisz tylko gdy użytkownik kliknie w Twoją reklamę (średnie 0,50-3 zł). CPM (Cost Per Thousand Impressions) to koszt za tysiąc wyświetleń reklamy, niezależnie od kliknięć (średnie 5-30 zł za 1000 wyświetleń). CPA (Cost Per Action) to koszt za konkretne działanie — np. wymaną kontaktu, dodanie do koszyka lub zakup (średnie 10-100 zł w zależności od akcji). CPA jest najbardziej efektywny, ale wymaga dobrego śledzenia konwersji przez piksel Facebooka.",
  },
  {
    question: "Ile wynosi CPC w Facebook Ads w Polsce wg branży?",
    answer: "Facebook Ads jest zwykle 2-5 razy tańszy od Google Ads. Najtańsze branże to: handel (0,20-0,80 zł), moda (0,30-1 zł), edukacja (0,40-1,50 zł). Średnie: usługi (0,80-2 zł), restauracje (1-3 zł), zdrowie (1-2,50 zł), motoryzacja (1,50-3 zł). Drogie: nieruchomości (2-5 zł), finanse (3-8 zł). Facebook Ads zmienia ceny dynamicznie — w sezonie przedświątecznym ceny są wyższe.",
  },
  {
    question: "Czy Facebook Ads opłaca się dla małej firmy lokalnej?",
    answer: "Zdecydowanie tak. Facebook Ads jest idealny dla małych firm lokalnych. Możesz precyzyjnie celować użytkowników w Twojej okolicy, dostosowywać wiek, zainteresowania i zachowania. Salon fryzjerski, gabinet dentystyczny, usługi budowlane czy restauracja mogą osiągnąć ROI 300-500% z budżetem zaledwie 500-1 500 zł/miesiąc. Klucz to prawidłowe targetowanie i jasny call-to-action (rezerwacja, telefon, wiadomość).",
  },
  {
    question: "Jakie są najlepsze formaty reklam na Facebooku?",
    answer: "Najskuteczniejsze formaty to: Carousel Ads (karuzela produktów) — do 40% wyższy CTR, Video Ads (reklamy video) — 10x wyższy engagement, Collection Ads (kolekcja) — idealne dla e-commerce, Leads Form Ads (formularz) — najlepsze dla generowania leadów bez opuszczania Facebooka, Story Ads (reklamy w Stories) — wysoki CTR, szczególnie dla młodszych odbiorców. Testuj formaty i analizuj co działa najlepiej dla Twojej branży.",
  },
  {
    question: "Jak długo trwa zanim zobaczę efekty kampanii Facebook Ads?",
    answer: "Pierwsze efekty (kliknięcia, wyświetlenia) zobaczysz w ciągu godzin. Pierwsze konwersje (leady, sprzedaż) zazwyczaj w ciągu 1-7 dni. Facebook potrzebuje czasu na naukę (learning phase) — minimum 50 konwersji w ciągu 7 dni aby algorytm był w pełni zoptymalizowany. Realnie, kampanię należy dawać minimum 2-4 tygodnie zanim oceni się czy działa. W tym czasie optymalizujesz: audience, copy, creative, bid strategy.",
  },
  {
    question: "Ile kosztuje reklama na Instagramie (w porównaniu do Facebooka)?",
    answer: "Instagram to część tej samej platformy reklamowej Meta — używasz tego samego account manager i budżetu. Jednak Instagram ma wyższe CPM (6-60 zł vs 5-30 zł na Facebooku) i CPC (0,50-4 zł vs 0,20-3 zł), bo jest bardziej prestiżowy i skupia młodszych użytkowników. Najlepsze rezultaty dają kampanie działające na obu platformach jednocześnie (Facebook + Instagram) — zwiększa to reach bez drastycznego wzrostu kosztów. Shopping Ads na Instagramie (dla e-commerce) są szczególnie opłacalne.",
  },
];

const billingModels = [
  { model: "CPC (Cost Per Click)", opis: "Płacisz za każde kliknięcie w reklamę", sredni: "0,50–3 zł", kiedy: "Lead generation, traffic, zakupy" },
  { model: "CPM (Cost Per Mille)", opis: "Płacisz za 1000 wyświetleń reklamy", sredni: "5–30 zł", kiedy: "Brand awareness, reach, retargeting" },
  { model: "CPA (Cost Per Action)", opis: "Płacisz tylko gdy user dokona akcji (lead, zakup)", sredni: "10–100 zł", kiedy: "E-commerce, lead gen, konwersje" },
];

const cpsByBranch = [
  { branza: "Handel online i e-commerce", cpc: "0,20–0,80 zł", opis: "Produkty, promocje, sezonowe kampanie" },
  { branza: "Usługi (ogólne: konsulting, doradztwo)", cpc: "0,80–2 zł", opis: "Lead generation, rezerwacje" },
  { branza: "Nieruchomości", cpc: "2–5 zł", opis: "Oferty mieszkań, biur, gruntów" },
  { branza: "Finanse i kredyty", cpc: "3–8 zł", opis: "Kredyty, ubezpieczenia, inwestycje" },
  { branza: "Zdrowie i medycyna", cpc: "1–2,50 zł", opis: "Gabinety, zabiegi, produkty health" },
  { branza: "Restauracje i gastronomia", cpc: "1–3 zł", opis: "Rezerwacje, dostawy, menu" },
  { branza: "Edukacja i szkolenia", cpc: "0,40–1,50 zł", opis: "Kursy, szkoły, webinary" },
  { branza: "Motoryzacja (sprzedaż, serwis)", cpc: "1,50–3 zł", opis: "Samochody, części, serwis" },
];

const budgetRecommendations = [
  { cel: "Budowanie zasięgu (brand awareness)", budżet: "300–500 zł/miesiąc", opis: "Reklamy banner, video, carousel — CPM. Dla małych firm, nowości, event awareness.", srodek: "CPC lub CPM" },
  { cel: "Lead generation", budżet: "500–2 000 zł/miesiąc", opis: "Formularze, landing page, katalogi. Idealne dla usług, nieruchomości, edukacji.", srodek: "CPC lub Leads Form Ads" },
  { cel: "Sprzedaż e-commerce", budżet: "2 000–10 000 zł/miesiąc", opis: "Product Ads, Dynamic Ads, Conversion Ads. Retargeting dla porzuconych koszyków.", srodek: "CPA + Catalog Ads" },
  { cel: "Remarketing (retargeting)", budżet: "500–2 000 zł/miesiąc", opis: "Reklamy dla osób które już znają Twoją markę. Najniższe CPM i CPC.", srodek: "CPC lub CPM" },
];

export default function BlogCennikFacebookAds() {
  return (
    <Layout>
      <SEOHead
        title="Cennik Facebook Ads 2025 — ile kosztuje reklama na Facebooku?"
        description="Cennik Facebook Ads 2025: CPC, CPM, CPA, budżet minimalny, obsługa agencji. Stawki wg branż, modele rozliczania, rekomendacje budżetów dla małych firm."
        canonicalUrl="https://fotz.pl/blog/cennik-facebook-ads"

        keywords="Cennik Facebook Ads 2025, Cennik Facebook Ads 2025 poradnik, Cennik Facebook Ads 2025 strategia, Cennik Facebook Ads 2025 jak zrobić, Cennik Facebook Ads 2025 marketing, Cennik Facebook Ads 2025 przykłady, Cennik Facebook Ads 2025 w Polsce"

        canonical="https://fotz.pl/blog/cennik-facebook-ads"
      />
      <ArticleSchema
        title="Cennik Facebook Ads 2025 — ile kosztuje reklama na Facebooku?"
        description="Kompleksowy przewodnik po kosztach Facebook Ads: CPC, CPM, CPA w poszczególnych branżach, budżety reklamowe, obsługa agencji, porównanie z Google Ads."
        url="https://fotz.pl/blog/cennik-facebook-ads"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cennik Facebook Ads", url: "https://fotz.pl/blog/cennik-facebook-ads" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Cennik Facebook Ads", url: "/blog/cennik-facebook-ads" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Facebook Ads / Social Media / Reklama online
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cennik Facebook Ads 2025 — ile kosztuje reklama na Facebooku?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              CPC, CPM, CPA, budżet minimalny, obsługa agencji. Ile naprawdę kosztuje reklama na Facebooku i Instagramie w Polsce?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Min. budżet", value: "100 zł/dzień" },
                { label: "Średni CPC", value: "0,50–2 zł" },
                { label: "Obsługa agencji", value: "10–20%" },
                { label: "Efekty od", value: "1–24h" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-300">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Facebook Ads vs Google Ads — co jest tańsze?</h2>
            <p className="text-gray-600 mb-4">
              <strong>Facebook Ads jest średnio 2-5 razy tańszy niż Google Ads.</strong> Podczas gdy w Google Ads CPC wynosi 1-30 zł w zależności od branży, na Facebooku i Instagramie CPC to zwykle 0,20-3 zł. Ale czemu? Facebook/Instagram to platformy <strong>push-based</strong> (wypychamy treści ludziom), podczas gdy Google to <strong>pull-based</strong> (ludzie sami szukają). Użytkownicy na Facebooku są mniej zdecydowani do zakupu, ale bardziej otwarte na odkrywanie nowych marek.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Najlepszy wybór?</strong> Połączenie obu. Facebook/Instagram do budowania świadomości i leadów, Google Ads do potencjalnych klientów na etapie decyzji (już wiedzą co szukają, czekają na konwersję).
            </p>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Modele rozliczania w Facebook Ads — CPC, CPM, CPA</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Model</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Średni koszt</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy stosować?</th>
                  </tr>
                </thead>
                <tbody>
                  {billingModels.map((model, i) => (
                    <tr key={model.model} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{model.model}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{model.opis}</td>
                      <td className="p-3 border border-gray-200 text-blue-600 font-semibold">{model.sredni}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{model.kiedy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typowe stawki CPC w Facebook Ads wg branży (Polska 2025)</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Branża</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Średni CPC</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis / Przykłady</th>
                  </tr>
                </thead>
                <tbody>
                  {cpsByBranch.map((row, i) => (
                    <tr key={row.branza} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.branza}</td>
                      <td className="p-3 border border-gray-200 text-blue-600 font-semibold">{row.cpc}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{row.opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rekomendowane budżety wg celów kampanii</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cel kampanii</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Budżet minimalny</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Środek płatności</th>
                  </tr>
                </thead>
                <tbody>
                  {budgetRecommendations.map((row, i) => (
                    <tr key={row.cel} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{row.cel}</td>
                      <td className="p-3 border border-gray-200 text-blue-600 font-semibold text-xs">{row.budżet}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{row.opis}</td>
                      <td className="p-3 border border-gray-200 text-gray-700 text-xs font-medium">{row.srodek}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Agencja vs własne kampanie — ile zaoszczędzisz robiąc to sam?</h2>
            <p className="text-gray-600 mb-4">
              <strong>Własne kampanie (DIY):</strong> Zaoszczędzisz 10-20% budżetu (brak opłaty agencyjnej), ale ryzyko jest duże. Facebook Ads wymaga doświadczenia w: targetowaniu audience (age, interests, behaviors), copywriting (teksty, headlines, CTA), creative (projektowanie banerów, wybór obrazów), analityka (tracking konwersji, optymalizacja ROAS). Załóż że pierwszy miesiąc będzie testów i błędów.
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Agencja:</strong> Zapłacisz 10-20% budżetu, ale profesjonalista: zoptymalizuje targeting, postawi tracking konwersji, będzie testował formaty i audience, będzie monitorować kampanię 24/7, zapewni ROI średnio 200-400% (przy dobrych marżach). Dla większości firm agencja się opłaca — ROI z agencji większy niż koszty obsługi.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>Hybrid:</strong> Zaczynasz sam, gdy nauczysz się basics (2-3 miesiące), przechodzisz na agencję. Albo: agencja prowadzi kampanie, Ty zarządzasz budżetem. Najlepsze z obu światów — szybka nauka + profesjonalne wyniki.
            </p>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ile kosztuje obsługa Facebook Ads przez agencję?</h2>
            <p className="text-gray-600 mb-4">
              Obsługa kampanii Facebook Ads przez agencję to zazwyczaj jedna z dwóch modeli:
            </p>
            <p className="text-gray-600 mb-3">
              <strong>1. Procent od budżetu (10-20%)</strong> — najczęściej. Przy budżecie 1 000 zł/miesiąc opłata to 100-200 zł. Przy budżecie 5 000 zł — 500-1 000 zł. Plusy: elastyczność, skalowanie. Minusy: agencja może chcieć wyższych budżetów.
            </p>
            <p className="text-gray-600 mb-6">
              <strong>2. Stała opłata miesięczna (300-1 500 zł)</strong> — niezależnie od budżetu. Dobra dla startupów (przejrzyste koszty), ale agencja może przeznaczyć mniej czasu na optymalizację. Szukaj agencji z opłatą w przedziale 400-800 zł dla budżetów do 3 000 zł/miesiąc.
            </p>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kluczowe metryki do monitorowania</h2>
            <p className="text-gray-600 mb-4">
              Aby sprawdzić czy Twoje kampanie Facebook Ads działają efektywnie, monitoruj:
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>ROAS (Return on Ad Spend)</strong> — przychód / wydatek na reklamy. Prawidłowy minimum 3:1 (3 zł przychodu na 1 zł wydatku).</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>CTR (Click Through Rate)</strong> — procent osób które kliknęły. Prawidłowy 0,5-2% w zależności od branży.</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>CPC (Cost Per Click)</strong> — średni koszt za kliknięcie. Powinna być coraz niższa wraz z optymalizacją.</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>CPL / CPA (Cost Per Lead / Cost Per Action)</strong> — koszt za lead lub konwersję. Porównaj z wartością klienta.</span></li>
              <li className="flex gap-2"><span className="text-blue-600 font-bold">•</span> <span><strong>Frequency</strong> — ile razy średnia osoba widziała Twoją reklamę. Powinna być 1-3 (powyżej 5 rośnie nuda).</span></li>
            </ul>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania — Cennik Facebook Ads</h2>
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

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chcesz uruchomić kampanię Facebook Ads?</h2>
            <p className="text-gray-600 mb-6">
              Nasza agencja specjalizuje się w kampaniach Facebook i Instagram Ads dla małych i średnich firm. Pomagamy w: przygotowaniu strategii, targetowaniu audience, tworzeniu kreatywnych materiałów, śledzeniu konwersji, optymalizacji ROAS.
            </p>
            <p className="text-gray-600 mb-8">
              <Link to="/kontakt" className="text-blue-600 hover:underline">Skontaktuj się z nami</Link> po bezpłatną analizę Twojej sytuacji i propozycję kampanii dostosowanej do Twoich celów i budżetu.
            </p>
          </FadeInView>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
