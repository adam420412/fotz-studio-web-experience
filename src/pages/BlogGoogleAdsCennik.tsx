import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { Link } from "react-router-dom";

const faqItems = [
  {
    question: "Ile kosztuje Google Ads — jaki jest minimalny budżet?",
    answer: "Google Ads nie ma minimalnego budżetu. Możesz zacząć od 300-500 zł miesięcznie i uzyskać pierwsze wyniki. W praktyce dla małych firm lokalnych budżet 500-2 000 zł/miesiąc na kliknięcia wystarcza do sensownych wyników. Dla e-commerce lub silnie konkurencyjnych branż (ubezpieczenia, prawo, nieruchomości) potrzeba 5 000-20 000 zł/miesiąc. Sam budżet na kliknięcia to jednak nie wszystko — do tego dochodzi koszt obsługi kampanii przez agencję.",
  },
  {
    question: "Ile kosztuje obsługa kampanii Google Ads przez agencję?",
    answer: "Obsługa kampanii Google Ads przez agencję to zazwyczaj 15-25% budżetu reklamowego lub stała opłata miesięczna w przedziale 400-2 500 zł netto/miesiąc. Przy budżecie 2 000 zł/miesiąc możesz oczekiwać opłaty agencyjnej od 400 do 800 zł. Przy budżecie 10 000 zł — od 1 500 do 2 500 zł.",
  },
  {
    question: "Ile wynosi CPC (koszt za kliknięcie) w Google Ads w Polsce?",
    answer: "Koszt za kliknięcie (CPC) w Google Ads w Polsce jest bardzo zróżnicowany. Najtańsze frazy to 0,20-0,80 zł za kliknięcie. Średnie branże (marketing, IT, moda) to 1-4 zł za kliknięcie. Drogie branże (ubezpieczenia, prawo, finanse, nieruchomości) to 8-30 zł za kliknięcie.",
  },
  {
    question: "Jaka jest różnica między Google Ads a pozycjonowaniem SEO?",
    answer: "Google Ads to płatne reklamy w Google — pojawiają się natychmiast po uruchomieniu kampanii, ale znikają gdy kończysz płacić. Koszt: płacisz za każde kliknięcie. Pozycjonowanie SEO to organiczne wyniki wyszukiwania — wymaga czasu (3-12 miesięcy do efektów), ale ruch jest bezpłatny i trwały. Optymalna strategia: Google Ads na start (szybkie leady), SEO długoterminowo (darmowy ruch). Oba razem dają najlepsze wyniki.",
  },
  {
    question: "Ile kosztuje reklama w Google Ads dla małej firmy?",
    answer: "Dla małej firmy lokalnej (np. salon fryzjerski, gabinet dentystyczny, usługi budowlane) realistyczny budżet Google Ads to 800-2 000 zł/miesiąc na kliknięcia + 400-600 zł za obsługę agencji. Łącznie 1 200-2 600 zł/miesiąc. Przy dobrze zoptymalizowanej kampanii dla usług lokalnych możesz oczekiwać 30-100 kliknięć miesięcznie.",
  },
  {
    question: "Co to są kampanie Performance Max w Google Ads?",
    answer: "Performance Max (PMax) to typ kampanii Google Ads oparty na AI, który automatycznie wyświetla reklamy we wszystkich kanałach Google: wyszukiwarka, YouTube, Gmail, Maps, Display. PMax sam optymalizuje stawki, dobiera odbiorców i testuje kreacje. Dla nowych kampanii lub małych budżetów lepiej zacząć od kampanii w sieci wyszukiwania.",
  },
];

const adTypes = [
  { typ: "Sieć wyszukiwania (Search)", kiedy: "Gdy klient aktywnie szuka Twojej usługi", cpc: "0,50–15 zł", opis: "Reklamy tekstowe wyświetlane nad wynikami Google na konkretne słowa kluczowe" },
  { typ: "Performance Max (PMax)", kiedy: "Retargeting, e-commerce, zasięg", cpc: "0,30–5 zł", opis: "Automatyczne kampanie we wszystkich kanałach Google (AI-driven)" },
  { typ: "Sieć reklamowa (Display)", kiedy: "Budowanie świadomości marki", cpc: "0,10–1 zł", opis: "Banery graficzne i video na milionach stron partnerskich Google" },
  { typ: "YouTube Video", kiedy: "Content marketing, brand awareness", cpc: "3–15 zł CPM", opis: "Reklamy wideo przed filmami YouTube — płacisz za obejrzenie 30 sek." },
  { typ: "Google Shopping", kiedy: "Sklepy internetowe, produkty fizyczne", cpc: "0,20–3 zł", opis: "Reklamy produktowe z ceną i zdjęciem w wyszukiwarce Google i Maps" },
  { typ: "Kampanie lokalne", kiedy: "Firmy z jedną lokalizacją", cpc: "0,50–5 zł", opis: "Reklamy w Google Maps i wynikach lokalnych — napędzają ruch do fizycznych lokalizacji" },
];

export default function BlogGoogleAdsCennik() {
  return (
    <Layout>
      <SEOHead
        title="Google Ads cennik 2025 — ile kosztuje reklama w Google? | Fotz.pl"
        description="Google Ads cennik 2025: ile kosztuje reklama w Google? CPC, budżet minimalny, obsługa agencji. Porównanie kampanii Search, PMax, Display i Shopping…"
        canonical="https://fotz.pl/blog/google-ads-cennik"

        keywords="Google Ads cennik 2025, Google Ads cennik 2025 poradnik, Google Ads cennik 2025 strategia, Google Ads cennik 2025 jak zrobić, Google Ads cennik 2025 marketing, Google Ads cennik 2025 przykłady, Google Ads cennik 2025 w Polsce"

        canonical="https://fotz.pl/blog/google-ads-cennik"
      />
      <ArticleSchema
        title="Google Ads cennik 2025 — ile kosztuje reklama w Google?"
        description="Kompleksowy przewodnik po kosztach Google Ads: CPC w poszczególnych branżach, budżety reklamowe, koszt obsługi agencji, porównanie typów kampanii."
        url="https://fotz.pl/blog/google-ads-cennik"
        datePublished="2025-04-12"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Google Ads cennik 2025", url: "https://fotz.pl/blog/google-ads-cennik" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-sky-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Google Ads cennik 2025", url: "/blog/google-ads-cennik" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Google Ads / SEM / Reklama online
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Google Ads cennik 2025 — ile kosztuje reklama w Google?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Budżet reklamowy, koszt obsługi agencji, CPC w branżach. Ile naprawdę kosztuje Google Ads i kiedy się opłaca?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Min. budżet", value: "300 zł" },
                { label: "CPC od", value: "0,20 zł" },
                { label: "Obsługa agencji", value: "15–25%" },
                { label: "Efekty od", value: "24–48h" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-sky-400">{s.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ile kosztuje Google Ads? Struktura kosztów</h2>
            <p className="text-gray-600 mb-4">
              Całkowity koszt kampanii Google Ads składa się z dwóch elementów: <strong>budżetu reklamowego</strong> (pieniądze płacone bezpośrednio Google za kliknięcia lub wyświetlenia) i <strong>kosztu obsługi</strong> (opłata dla agencji lub specjalisty zarządzającego kampanią).
            </p>
            <p className="text-gray-600 mb-6">
              Wiele firm popełnia błąd planując "budżet Google Ads" i rozumiejąc przez to tylko pieniądze idące na reklamy. Tymczasem bez kompetentnej obsługi nawet duży budżet reklamowy może zostać przepalony na nieskutecznych słowach kluczowych i złych stawkach.
            </p>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">CPC (koszt za kliknięcie) w Google Ads — zestawienie branż</h2>
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Branża</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Średni CPC</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Przykładowe frazy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { branza: "Ubezpieczenia", cpc: "8–30 zł", frazy: "ubezpieczenie OC, ubezpieczenie zdrowotne" },
                    { branza: "Prawo i usługi prawne", cpc: "5–25 zł", frazy: "adwokat Warszawa, kancelaria prawna" },
                    { branza: "Nieruchomości", cpc: "4–18 zł", frazy: "mieszkania na sprzedaż, biuro nieruchomości" },
                    { branza: "Finanse i kredyty", cpc: "5–20 zł", frazy: "kredyt hipoteczny, pożyczka online" },
                    { branza: "Marketing i agencje", cpc: "2–8 zł", frazy: "agencja marketingowa, pozycjonowanie" },
                    { branza: "Budownictwo i remonty", cpc: "1–6 zł", frazy: "firma remontowa, malarz Kraków" },
                    { branza: "Medycyna i stomatologia", cpc: "2–10 zł", frazy: "dentysta Poznań, implant zębowy" },
                    { branza: "E-commerce / produkty", cpc: "0,20–3 zł", frazy: "kup buty online, AGD do kuchni" },
                    { branza: "Usługi lokalne", cpc: "0,30–2 zł", frazy: "fryzjer Gdańsk, ślusarz Wrocław" },
                    { branza: "Turystyka i hotele", cpc: "1–5 zł", frazy: "hotel Zakopane, wczasy all inclusive" },
                  ].map((row, i) => (
                    <tr key={row.branza} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900">{row.branza}</td>
                      <td className="p-3 border border-gray-200 text-blue-600 font-semibold">{row.cpc}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{row.frazy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Typy kampanii Google Ads i ich koszty</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Typ kampanii</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy stosować?</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Orientacyjny koszt</th>
                    <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Opis</th>
                  </tr>
                </thead>
                <tbody>
                  {adTypes.map((t, i) => (
                    <tr key={t.typ} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-900 text-xs">{t.typ}</td>
                      <td className="p-3 border border-gray-200 text-gray-700 text-xs">{t.kiedy}</td>
                      <td className="p-3 border border-gray-200 text-blue-600 font-semibold text-xs">{t.cpc}</td>
                      <td className="p-3 border border-gray-200 text-gray-600 text-xs">{t.opis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInView>

          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ile kosztuje obsługa Google Ads przez agencję?</h2>
            <p className="text-gray-600 mb-4">
              Obsługa kampanii Google Ads przez agencję to zazwyczaj jedna z dwóch modeli rozliczeń. <strong>Procent od budżetu</strong> — najczęściej 15-25% miesięcznego wydatku reklamowego. Przy budżecie 2 000 zł to 300-500 zł opłaty agencyjnej. <strong>Stała opłata miesięczna</strong> — zazwyczaj 500-2 500 zł netto, niezależnie od budżetu. Bardziej przewidywalne koszty, dobra opcja przy budżetach powyżej 5 000 zł/miesiąc.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">Google Ads — kiedy się opłaca, a kiedy nie?</h2>
            <p className="text-gray-600 mb-4">
              Google Ads opłaca się gdy: wartość klienta jest wysoka (usługi, B2B, nieruchomości), potrzebujesz szybkich wyników, masz dobrze zoptymalizowaną stronę docelową i śledzisz konwersje.
            </p>
            <p className="text-gray-600 mb-6">
              Google Ads może nie opłacać się gdy: Twój produkt jest bardzo niszowy (brak wyszukiwań), marże są niskie (np. produkty za 20 zł), nie masz strony z wyraźnym CTA lub nie śledzisz co dzieje się po kliknięciu w reklamę.
            </p>
            <p className="text-gray-600 mb-4">
              Szukasz agencji do prowadzenia kampanii Google Ads? <Link to="/kontakt" className="text-blue-600 hover:underline">Skontaktuj się z nami</Link> po bezpłatną analizę Twojej sytuacji i propozycję budżetu.
            </p>
          </FadeInView>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania — Google Ads cennik</h2>
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
