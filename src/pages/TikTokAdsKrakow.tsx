import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

export default function TikTokAdsKrakow() {
  const faqItems = [
    {
      question: "Ile kosztuje TikTok Ads w Krakowie?",
      answer: "Koszt kampanii TikTok Ads w Krakowie jest przystępniejszy niż w Warszawie — minimalny budżet reklamowy to 200 zł/miesiąc, a dla efektywnych kampanii rekomendujemy od 800 zł/miesiąc. CPM w Krakowie wynosi średnio 12-28 zł za 1000 wyświetleń, co jest niższe niż w stolicach dużych miast. Obsługa kampanii w agencji Fotz zaczyna się od 350 zł/miesiąc. TikTok Ads oferuje rozliczenie CPM (za 1000 wyświetleń) lub CPV (za wyświetlenie wideo).",
    },
    {
      question: "Ile TikTok płaci za 1000 wyświetleń?",
      answer: "TikTok Creator Fund płaci twórcom od 0,02 do 0,04 USD za 1000 wyświetleń organicznych. Dla reklam TikTok Ads stawka CPM zależy od konkurencji na rynku lokalnym — w Krakowie wynosi 12-28 zł za 1000 wyświetleń, w zależności od branży, targetowania i grupy docelowej. Niższa konkurencja w Krakowie vs. Warszawa oznacza lepsze ceny dla reklamodawców prowadzących kampanie TikTok Ads.",
    },
    {
      question: "Jaka jest najlepsza agencja TikTok Ads w Krakowie?",
      answer: "Dobra agencja TikTok Ads musi posiadać case studies z kampanii, doświadczenie w tworzeniu wideo na TikToka i znajomość TikTok Ads Manager. Agencja Fotz oferuje kompleksową obsługę kampanii TikTok Ads w Krakowie — od strategii i analiz konkurencji, przez produkcję materiałów wideo, optymalizację targetowania, po raportowanie wyników i optymalizację CPM.",
    },
    {
      question: "Dla jakiej branży sprawdza się reklama na TikToku w Krakowie?",
      answer: "Reklama na TikToku sprawdza się najlepiej w e-commerce, beauty, fashion, fitness, gastronomii, edukacji i rozrywce. W Krakowie szczególnie efektywne kampanie TikTok Ads prowadzą sklepy internetowe, restauracje i kawiarnie, studia kosmetyczne, szkoły języków i firmy usługowe kierujące ofertę do Gen Z i Millenialsów w wieku 18-34 lata. TikTok to platforma mobilna angażująca młodych użytkowników.",
    },
    {
      question: "Jakie formaty reklamowe oferuje TikTok Ads?",
      answer: "TikTok Ads oferuje unikalne formaty niedostępne na Facebooku czy Google Ads: In-Feed Ads (reklamy w feedzie ForYou), TopView Ads (pierwsze wideo po otwarciu), Spark Ads (promowanie organicznych postów), Hashtag Challenge (kampanie angażujące z hashtagiem), Brand Takeover (pełnoekranowa reklama) i Collection Ads. Najczęściej wybieranym formatem są In-Feed Ads — wyglądają jak natywny content i generują wysokie zaangażowanie użytkowników.",
    },
    {
      question: "Jak długo trwa uruchomienie kampanii TikTok Ads?",
      answer: "Kampanię TikTok Ads można uruchomić w ciągu 2-5 dni roboczych — konfiguracja konta TikTok Ads Manager, instalacja piksela, ustawienie targetowania grup docelowej, tworzenie kreacji wideo i weryfikacja przez platformę (24-48h). Pierwsze wyniki widoczne są po 3-7 dniach, pełna optymalizacja kampanii i znalezienie najlepszych grupy docelowej trwa 2-4 tygodnie.",
    },
    {
      question: "Czy TikTok Ads działa dla firm B2B?",
      answer: "TikTok Ads może działać dla B2B, ale wymaga innego podejścia. Platforma jest skuteczna dla B2B w branżach SaaS, edukacji zawodowej, marketingu, rekrutacji i usług — szczególnie gdy targetujemy menadżerów i przedsiębiorców z pokolenia Millenialsów. Dla klasycznego B2B skuteczniejszy bywa LinkedIn Ads. Doradzimy, jaka platforma i format reklamowy będzie najlepsza dla Twojej kampanii.",
    },
    {
      question: "Dlaczego kampania TikTok Ads nie przynosi wyników?",
      answer: "Najczęstsze przyczyny nieefektywnych kampanii to: zbyt mały budżet reklamowy, kreacje wideo zbyt reklamowe (brak TikTok feel), złe targetowanie grupy docelowej, brak piksela TikTok lub błędnie skonfigurowana strona docelowa, niska optymalizacja kampanii. Agencja Fotz przeprowadza bezpłatny audit kampanii, analizuje konkurencję i wskazuje przyczyny słabych wyników TikTok Ads.",
    },
  ];

  const formats = [
    { name: "In-Feed Ads", desc: "Reklamy wideo pojawiające się naturalnie w feedzie ForYou użytkowników TikToka. Najczęściej wybierany format — wygląda jak organiczny content, co angażuje użytkowników, zwiększa CTR i generuje konwersje." },
    { name: "Spark Ads", desc: "Promowanie istniejących organicznych postów z profilu marki lub twórców. Idealne gdy masz content, który organicznie się sprawdza — Spark Ads wzmacnia zasięgi, wyświetlenia i zaangażowanie użytkowników." },
    { name: "TopView Ads", desc: "Pierwsze wideo wyświetlane użytkownikowi po otwarciu aplikacji TikTok. Format gwarantujący maksymalną widoczność, świadomość marki i zasięgi — idealny na duże kampanie wizerunkowe i budowanie rozpoznawalności." },
    { name: "Hashtag Challenge", desc: "Kampania angażująca użytkowników do tworzenia własnych filmów z brandowanym hashtagiem. Generuje ogromne zasięgi organiczne, buduje społeczność wokół marki i zwiększa kreatywne zaangażowanie." },
    { name: "Brand Takeover", desc: "Pełnoekranowa reklama wideo lub graficzna przy uruchomieniu aplikacji. Format ekskluzywny — jeden reklamodawca dziennie na kategorię, wysoka świadomość marki i maksymalny impact." },
    { name: "Collection Ads", desc: "Format łączący wideo z galerią produktów — otwiera mini-sklep w TikToku. Idealny dla e-commerce i sklepów internetowych, skracających ścieżkę zakupową i zwiększających konwersję sprzedaży." },
  ];

  const processSteps = [
    { step: "01", title: "Analiza i strategia kampanii", desc: "Badamy grupę docelową w Krakowie, analizujemy konkurencję lokalną, definiujemy cele kampanii (zasięgi, ruch, konwersja) i budżet. Określamy, które formaty reklamowe i strategie marketingowe będą najskuteczniejsze dla Twojej branży w Krakowie." },
    { step: "02", title: "Konfiguracja TikTok Ads Manager", desc: "Konfigurujemy konto reklamowe, instalujemy piksel TikTok, ustawiamy zdarzenia konwersji i tworzymy precyzyjne grupy odbiorców — targetowanie demograficzne, zainteresienia, remarketing i lookalike na bazie istniejących klientów." },
    { step: "03", title: "Produkcja kreacji wideo", desc: "Tworzymy lub adaptujemy materiały wideo zgodne z formatem TikToka — krótkie, dynamiczne, z trendy muzyką i efektami. Kreacje muszą wyglądać jak natywny content i angażować użytkowników, nie jak tradycyjna reklama czy spot." },
    { step: "04", title: "Uruchomienie kampanii i monitoring", desc: "Uruchamiamy reklamy i śledzimy wyniki w czasie rzeczywistym — CPM, CTR, koszt konwersji, zasięgi i wyświetlenia. Optymalizujemy stawki, grupy docelowe i kreacje wideo na podstawie danych z TikTok Ads Manager dla maksymalnego ROI." },
    { step: "05", title: "Raportowanie wyników", desc: "Co miesiąc dostarczamy przejrzysty raport z wynikami kampanii — zasięgi, wyświetlenia, kliknięcia, konwersje, koszt pozyskania klienta i zwrot z inwestycji. Pełna transparentność rozliczenia to nasz standard pracy z każdym klientem." },
  ];

  return (
    <Layout>
      <SEOHead
        title="TikTok Ads Kraków — agencja kampanii reklamowych TikTok | Fotz.pl"
        description="Reklamy TikTok Ads Kraków — agencja Fotz.pl. Kampanie TikTok dla firm z Krakowa: In-Feed Ads, Spark Ads, kreacje wideo. Targetowanie Gen Z i Millenialsów. Bezpłatna konsultacja!"
        canonical="https://fotz.pl/performance-marketing/tiktok-ads/krakow"
        keywords="tiktok ads krakow, reklamy tiktok krakow, agencja tiktok ads krakow, kampanie tiktok krakow"
      />

      <ServiceSchema
        name="Kampanie TikTok Ads Kraków"
        description="Tworzenie i optymalizacja kampanii reklamowych TikTok Ads dla firm z Krakowa. Agencja Fotz — kreacje wideo, targetowanie, pełna obsługa kampanii reklamowych."
        provider="Fotz Studio"
        areaServed="Krakow"
      />

      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Kampanie reklamowe", url: "https://fotz.pl/performance-marketing" },
          { name: "TikTok Ads", url: "https://fotz.pl/performance-marketing/tiktok-ads" },
          { name: "TikTok Ads Kraków", url: "https://fotz.pl/performance-marketing/tiktok-ads/krakow" },
        ]}
      />

      <FAQSchema items={faqItems} />

      <PageBreadcrumbs
        items={[
          { label: "Strona główna", path: "/" },
          { label: "Kampanie reklamowe", path: "/performance-marketing" },
          { label: "TikTok Ads", path: "/performance-marketing/tiktok-ads" },
          { label: "Kraków", path: "/performance-marketing/tiktok-ads/krakow" },
        ]}
      />

      {/* Hero */}
      <FadeInView>
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Agencja TikTok Ads Kraków
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TikTok Ads Kraków — kampanie reklamowe, które robią zasięgi i sprzedają
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Reklama na TikToku to jeden z najskuteczniejszych kanałów docierania do młodych użytkowników w Krakowie. Agencja Fotz tworzy kampanie TikTok Ads, które angażują, budują świadomość marki i generują realne konwersje — od In-Feed Ads po Spark Ads, Hashtag Challenge i TopView Ads.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/kontakt" className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Bezpłatna konsultacja
              </Link>
              <Link to="/performance-marketing/tiktok-ads" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Poznaj TikTok Ads
              </Link>
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Stats */}
      <FadeInView>
        <section className="bg-gray-900 text-white py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: "1,5 mld", label: "aktywnych użytkowników TikToka miesięcznie" },
              { val: "18-34", label: "dominująca grupa wiekowa użytkowników TikToka" },
              { val: "60%", label: "użytkowników TikToka w Polsce to kobiety" },
              { val: "15-60s", label: "optymalna długość reklamy wideo" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-pink-400 mb-1">{s.val}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Formats */}
      <FadeInView>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Jakie są formaty reklam na TikToku?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              TikTok to platforma wideo oferująca reklamodawcom unikalne formaty reklamowe niedostępne na Facebooku czy Google Ads. Każdy format ma inne zastosowanie, cel kampanii i sposób angażowania użytkowników.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {formats.map((f) => (
                <div key={f.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.name}</h3>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Goals */}
      <FadeInView>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Jakie cele zrealizujesz z kampaniami TikTok Ads w Krakowie?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Kampania reklamowa TikTok Ads nie służy tylko budowaniu zasięgów. Możesz ją dostosować do konkretnego celu marketingowego i biznesowego swojej firmy w Krakowie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Zasięgi i świadomość marki", desc: "Dotrzyj do setek tysięcy użytkowników TikToka w Krakowie i całej Polsce. Kampanie zasięgowe budują rozpoznawalność marki wśród nowych odbiorców, którzy jeszcze Cię nie znają." },
                { title: "Ruch na stronie i w sklepie internetowym", desc: "Kieruj użytkowników TikToka na landing page lub sklep online. Reklamy In-Feed Ads z call-to-action generują efektywny ruch prowadzący do realne konwersje." },
                { title: "Konwersje i sprzedaż e-commerce", desc: "Kampanie z pikselem TikTok śledzą realne konwersje — zakupy, zapisy, kontakty i zamówienia. Optymalizujemy pod konkretny koszt konwersji (CPA) i zwrot z reklamy (ROAS)." },
                { title: "Pozyskiwanie nowych klientów", desc: "Grupy Lookalike na TikToku pozwalają dotrzeć do nowych klientów podobnych do Twoich istniejących. Skuteczny sposób skalowania sprzedaży online i bazy klientów." },
                { title: "Remarketing i odzyskiwanie koszyków", desc: "Docieraj ponownie do użytkowników, którzy odwiedzili stronę lub porzucili koszyk. Kampanie remarketingowe TikTok Ads skutecznie odzyskują porzucone zakupy i angażują." },
                { title: "Zaangażowanie i społeczność", desc: "Spark Ads i Hashtag Challenge angażują użytkowników do interakcji z marką — komentarze, udostępnienia, duety. Buduj lojalną społeczność wokół profilu TikTok w Krakowie." },
              ].map((g) => (
                <div key={g.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{g.title}</h3>
                  <p className="text-gray-600 text-sm">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Process */}
      <FadeInView>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Jak wygląda proces realizacji kampanii TikTok Ads w Krakowie?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Skuteczna kampania reklamowa wymaga przemyślanej strategii, kreatywnych materiałów wideo i ciągłej optymalizacji pod grupy docelowe. Oto jak prowadzimy kampanie TikTok Ads dla firm z Krakowa.
            </p>
            <div className="space-y-6">
              {processSteps.map((p) => (
                <div key={p.step} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Why Fotz */}
      <FadeInView>
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Dlaczego wybrać agencję Fotz do prowadzenia TikTok Ads w Krakowie?
            </h2>
            <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              TikTok to platforma rządząca się własnymi zasadami i algorytmami. Skuteczna reklama wymaga znajomości formatu, trendów wideo i kreatywnego podejścia do social media marketingu.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Kreacje wideo w stylu TikToka", desc: "Tworzymy materiały wideo, które wyglądają jak natywny content — nie jak tradycyjna reklama czy spot komercyjny. To klucz do efektywnych kampanii TikTok Ads z wysokim CTR." },
                { title: "Pełna obsługa TikTok Ads Manager", desc: "Konfiguracja konta, instalacja piksela, grupy odbiorców, uruchomienie kampanii — zajmujemy się całym procesem technicznym i strategicznym od A do Z." },
                { title: "Optymalizacja oparta na danych", desc: "Śledzimy wyniki kampanii na bieżąco i optymalizujemy stawki, targetowanie i kreacje, by maksymalizować zwrot z budżetu reklamowego i osiągać cele biznesowe." },
                { title: "Transparentne raportowanie", desc: "Co miesiąc raport z kampanii — zasięgi, wyświetlenia, kliknięcia, konwersje i koszt pozyskania klienta. Żadnych ukrytych kosztów, pełna przejrzystość rozliczenia." },
                { title: "Doświadczenie w e-commerce", desc: "Prowadzimy efektywne kampanie TikTok Ads dla sklepów internetowych, restauracji, salonów beauty, studiów fitness i firm usługowych z Krakowa i całej Polski." },
                { title: "Kompleksowe doradztwo marketingowe", desc: "Pomagamy wybrać właściwy mix kanałów — TikTok Ads, Meta Ads, Google Ads, Facebook — dopasowany do Twoich celów i budżetu. Oferujemy też SEO i social media marketing." },
              ].map((w) => (
                <div key={w.title} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-base font-semibold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-gray-600 text-sm">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* FAQ */}
      <FadeInView>
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Najczęstsze pytania o TikTok Ads Kraków
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      {/* Internal links */}
      <FadeInView>
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
              TikTok Ads w innych miastach Polski
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { city: "Warszawa", path: "/performance-marketing/tiktok-ads/warszawa" },
                { city: "Wrocław", path: "/performance-marketing/tiktok-ads/wroclaw" },
                { city: "Poznań", path: "/performance-marketing/tiktok-ads/poznan" },
                { city: "Gdańsk", path: "/performance-marketing/tiktok-ads/gdansk" },
                { city: "Łódź", path: "/performance-marketing/tiktok-ads/lodz" },
                { city: "Katowice", path: "/performance-marketing/tiktok-ads/katowice" },
              ].map((c) => (
                <Link
                  key={c.city}
                  to={c.path}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-pink-500 hover:text-pink-600 text-sm transition-colors"
                >
                  TikTok Ads {c.city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </FadeInView>

      <ContactSection />
    </Layout>
  );
}
