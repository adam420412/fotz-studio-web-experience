import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle2, Clock, MapPin, Star, Camera, MessageSquare, TrendingUp, AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogGoogleMyBusiness() {
  const breadcrumbs = [
    { label: "Strona główna", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Google Moja Firma - Optymalizacja" },
  ];

  const profileElements = [
    { element: "Nazwa firmy", importance: "Krytyczna", optimization: "Dokładna nazwa jak w reje. + lokalizacja (np. 'Salon fryzjerski Hair&Style Kraków')", time: "2 min" },
    { element: "Kategoria główna", importance: "Krytyczna", optimization: "Jedna kategoria główna (np. 'Salon fryzjerski') + do 9 dodatkowych kategorii", time: "5 min" },
    { element: "Adres i godziny", importance: "Krytyczna", optimization: "Pełny adres, kod pocztowy. Godziny na każdy dzień - Google kadruje niedokładne dane", time: "3 min" },
    { element: "Opis firmy", importance: "Wysoka", optimization: "120-160 znaków, słowa kluczowe, unikalne wartości. Czytaj: 'Co robi, dla kogo, dlaczego lepsze'", time: "10 min" },
    { element: "Zdjęcia", importance: "Wysoka", optimization: "Minimum 10-20 zdjęć: logo, okładka, wnętrze, zewnętrze, produkty, zespół. Rotacja co 2-4 tygodnie", time: "30 min" },
    { element: "Opinie", importance: "Wysoka", optimization: "Zbieraj aktywnie. Odpowiadaj na WSZYSTKIE. 4+ gwiazdek to minimum dla rankingu", time: "Ciągły" },
    { element: "Posty GBP", importance: "Średnia", optimization: "2-4 posty na miesiąc. Linki, oferty, eventy, bieżące info. Posty znikają po 7 dni", time: "15 min/post" },
    { element: "Q&A", importance: "Średnia", optimization: "Sami odpowiadaj zanim klienci pytają. Kontrolujesz narrację i unikasz negatywnych pytań", time: "5 min/dzień" },
    { element: "Produkty/usługi", importance: "Średnia", optimization: "Dodaj katalog produktów/usług z cenami. Pozwala użytkownikom filtrować", time: "20 min" },
  ];

  const photoTips = [
    { type: "Logo", freq: "Jeden raz", desc: "Kwadratowe, wysokiej rozdzielczości, tło przezroczyste" },
    { type: "Zdjęcie okładki", freq: "Jeden raz", desc: "1200x500px, reprezentuje firmę - wnętrze, fasada, produkty" },
    { type: "Wnętrze", freq: "Co 2-4 tyg", desc: "3-5 zdjęć: całe pomieszczenie, detale, pracownicy, atmosfera" },
    { type: "Zewnętrze", freq: "Co 2-4 tyg", desc: "Fasada, wejście, parking - co widać z ulicy" },
    { type: "Produkty/usługi", freq: "Co 2-4 tyg", desc: "Portfolio, przykłady pracy, gotowe rozwiązania dla klientów" },
    { type: "Zespół", freq: "Co 2-4 tyg", desc: "Pracownicy przy pracy, buduje zaufanie i personalizm" },
    { type: "Eventy/promocje", freq: "Okazjonalnie", desc: "Otwarcie, promocja, event - buduje zaangażowanie" },
  ];

  const reviewStrategies = [
    { strategy: "Prośba bezpośrednia", effectiveness: "Najskuteczniejsza", desc: "Poproś zaraz po usłudze. 'Byśmy zobaczył Twoją opinię na Google' - konwersja 30-40%" },
    { strategy: "SMS z linkiem", effectiveness: "Wysoka", desc: "Wyślij SMS z linkiem do opinii (business.google.com > Udostępnij opinie)" },
    { strategy: "Email nurturing", effectiveness: "Wysoka", desc: "Wyślij email 2-3 dni po usłudze z CTA do opinii" },
    { strategy: "QR kod", effectiveness: "Średnia", desc: "QR kod w wizytówce, przy kasie, w salonie - prowadzi do opinii" },
    { strategy: "Stopka emaila", effectiveness: "Średnia", desc: "Link w stopce każdego wysyłanego emaila firmowego" },
    { strategy: "Ulotki/karty", effectiveness: "Średnia", desc: "Wydrukowane karty do teczki produktu lub jako POS material" },
  ];

  const postingStrategy = [
    { content: "Aktualności", frequency: "Raz na 2 tyg", examples: "Nowa usługa, zmiana godzin, wakacje, powrót do pracy" },
    { content: "Oferty/promocje", frequency: "Raz na 3 tyg", examples: "Rabat 20%, voucher, limitowana akcja - generuje kliknięcia" },
    { content: "Eventy", frequency: "Raz na miesiąc", examples: "Otwarcie, warsztaty, szkolenia - pokazuje aktywność" },
    { content: "Tips/edukacja", frequency: "Raz na 2 tyg", examples: "Porady branżowe, jak się przygotować, co wybrać" },
    { content: "Behind-the-scenes", frequency: "Raz na 2 tyg", examples: "Proces pracy, zespół, wartości firmy - buduje zaufanie" },
  ];

  const faqItems = [
    {
      question: "Czym jest Google Moja Firma i jak go założyć?",
      answer: "Google Moja Firma (Google Business Profile) to bezpłatny profil firmy widoczny w Google Search, Google Maps i Przeglądzie. Założenie: 1) Wejdź na business.google.com, 2) Zaloguj się kontem Google firmowym, 3) Kliknij 'Utwórz profil' i wyszukaj czy profil istnieje, 4) Uzupełnij dane (nazwa, kategoria, adres, telefon), 5) Zweryfikuj profil (pocztówka, SMS lub video). Po weryfikacji możesz zarządzać i optymalizować profil.",
    },
    {
      question: "Czy Google Moja Firma wpływa na pozycjonowanie w wyszukiwarce?",
      answer: "Tak, ale nie bezpośrednio. Google Moja Firma wpływa głównie na widoczność w Mapach i Local Pack (3 firmy widoczne w wynikach). Wpływ na pozycjonowanie organiczne (SEO) jest pośredni: opinie, liczba konwersji, aktywność na profilu - to sygnały które Google bierze pod uwagę. Dobrze optymalizowana wizytówka to element lokalnego SEO.",
    },
    {
      question: "Jak zbierać opinie do Google Moja Firma etycznie?",
      answer: "Etyczne metody: 1) Poproś bezpośrednio po usłudze - 'Byśmy zobaczył Twoją opinię na Google', 2) Wyślij SMS z linkiem, 3) Wyślij email z prośbą, 4) Umieść QR kod w wizytówce lub przy kasie, 5) Dodaj link do opinii w stopce emaila. NIGDY nie kupuj fałszywych opinii - ryzykujesz zawieszeniem profilu. Google penalizuje sztuczne opinie i mogą być usunięte.",
    },
    {
      question: "Ile zdjęć powinienem dodać do Google Moja Firma?",
      answer: "Minimum 10-20 zdjęć wysokiej jakości. Im więcej, tym lepiej - nawet 50+ zdjęć będzie zwiększać click-through rate. Ważne: różnorodność (logo, okładka, wnętrze, zewnętrze, produkty, zespół). Rotuj zdjęcia co 2-4 tygodnie - świeżość ma znaczenie. Zabrania się: zdjęcia rozmyte, zbyt małe, z logo konkurrentów, bez ludzi (w usługach).",
    },
    {
      question: "Czy posty w Google Moja Firma wpływają na ranking w Mapach?",
      answer: "Tak. Regularne posty (2-4 na miesiąc) sygnalizują Google że profil jest aktywny i zarządzany. Aktywne profile mają wyższy ranking niż zaniedbane. Jednak posts znikają po 7 dniach, więc nie ma długoterminowego SEO wpływu. Posty to raczej narzędzie do promocji bieżących ofert i pokazania aktywności.",
    },
    {
      question: "Jak radzić sobie z negatywnymi opiniami w Google?",
      answer: "Kroki: 1) Czytaj uważnie - czy narusza regulamin Google (możesz zgłosić), 2) Odpowiedz publicznie - spokojnie, bez emocji, z propozycją rozwiązania, 3) Nigdy nie usuwaj lub nie ignoruj, 4) Zbieraj więcej pozytywnych opinii - 'rozmyją' negatyw, 5) Pamiętaj - jedna negatywna opinia z profesjonalną odpowiedzią buduje więcej zaufania niż doskonała przeszłość.",
    },
    {
      question: "Czy mogę zarządzać Google Moja Firma dla firmy bez posiadanej strony internetowej?",
      answer: "Tak. Google Moja Firma działa niezależnie od strony. Jednak wizytówka bez strony to niewykorzystana szansa - użytkownicy którzy klikną na Twoją firmę w Mapach chcą wiedzieć więcej. Idealne: masz stronę + zoptymalizowana wizytówka. Jeśli nie masz strony, dodaj do wizytówki link do tablicy na Facebooku lub innej strony.",
    },
    {
      question: "Jak długo trwa weryfikacja profilu Google Moja Firma?",
      answer: "Metoda pocztówka: 5-14 dni (najczęsta). SMS lub email: natychmiastowo (opcja dostępna dla wybranych gałęzi). Video verification: kilka godzin. Po kliknięciu w link weryfikacyjny profil jest natychmiast publiczny. Do weryfikacji przez pocztówkę będziesz miał dostęp testowy do profilu - możesz zacząć uzupełnianie danych zanim pocztówka przyjdzie.",
    },
  ];

  return (
    <>
      <SEOHead
        title="Google Moja Firma - jak zoptymalizować wizytówkę Google?…"
        description="Google Moja Firma optymalizacja - poradnik krok po kroku. Jak założyć, zweryfikować i zoptymalizować profil. Zbieranie opinii, zdjęcia, posty. +600 szukających."
        canonical="https://fotz.pl/blog/google-moja-firma-optymalizacja"

        keywords="Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 co to jest, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 jak działa, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 definicja, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 przykłady, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 poradnik, Google Moja Firma - jak zoptymalizować wizytówkę Google? Poradnik 2025 przewodnik"
      />
      <ArticleSchema
        title="Google Moja Firma - kompletny poradnik optymalizacji 2025"
        description="Przewodnik optymalizacji Google Moja Firma. Elementy profilu, zdjęcia, zbieranie opinii, posty, Q&A. Praktyczne porady które działają."
        datePublished="2025-04-12"
        dateModified="2025-04-12"
        url="https://fotz.pl/blog/google-moja-firma-optymalizacja"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        {/* Hero */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 12 min czytania</span>
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> SEO Lokalne</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Google Moja Firma - jak zoptymalizować wizytówkę Google?
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Google Moja Firma to bezpłatne narzędzie dla biznesu. Firmy które mają optymalizowany profil widzą 3-5x więcej ruchu z Mapy Google. Ten poradnik pokaże jak założyć, zweryfikować i zoptymalizować wizytówkę krok po kroku.
            </p>
            <p className="text-gray-400 text-sm">
              Szukane hasła: "Google Moja Firma", "Google Business Profile optymalizacja", "wizytówka Google 2025"
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-16 bg-gray-800 border-t border-yellow-400/20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl font-bold text-white mb-6">Dlaczego Google Moja Firma jest kluczowa dla Twojego biznesu?</h2>

              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Każdy dzień miliony ludzi szukają firm lokalnych w Google. Gdy ktoś wpisuje "fryzjer Kraków" lub "stolarze blisko mnie" - Google pokazuje Local Pack (mapę z 3 firmami na górze). To jest pierwsze co widzą. Jeśli Twoja wizytówka tam się pojawi - masz zdecydowaną przewagę.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  {[
                    { stat: "46%", desc: "zapytań Google ma charakter lokalny" },
                    { stat: "73%", desc: "szuka firmy na smartfonie i odwiedza ją w ciągu 24h" },
                    { stat: "0 zł", desc: "kosztuje optymalizacja Google Moja Firma" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-gray-900 border border-yellow-400/30 p-5 rounded-lg text-center">
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{item.stat}</div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Google Moja Firma to podstawa SEO lokalnego. Bez optymalizowanej wizytówki tracisz potencjalnych klientów którzy szukają właśnie Ciebie - w Twojej okolicy, we właściwym czasie.
                </p>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Elements Table */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl font-bold text-white mb-8">Elementy wizytówki Google - co zoptymalizować?</h2>

              <div className="overflow-x-auto border border-yellow-400/20 rounded-lg">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-800 border-b border-yellow-400/20">
                      <th className="text-left p-4 text-yellow-400 font-bold">Element</th>
                      <th className="text-left p-4 text-yellow-400 font-bold">Ważność</th>
                      <th className="text-left p-4 text-yellow-400 font-bold">Jak zoptymalizować</th>
                      <th className="text-left p-4 text-yellow-400 font-bold">Czas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {profileElements.map((item, idx) => (
                      <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/50 transition">
                        <td className="p-4 text-white font-semibold text-sm">{item.element}</td>
                        <td className="p-4">
                          <span className={`text-xs font-bold px-2 py-1 rounded ${
                            item.importance === "Krytyczna" ? "bg-red-500/20 text-red-300" :
                            item.importance === "Wysoka" ? "bg-yellow-400/20 text-yellow-300" :
                            "bg-blue-500/20 text-blue-300"
                          }`}>
                            {item.importance}
                          </span>
                        </td>
                        <td className="p-4 text-gray-300 text-sm">{item.optimization}</td>
                        <td className="p-4 text-gray-400 text-sm">{item.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Photos Section */}
        <section className="py-12 md:py-16 bg-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="flex items-start gap-4 mb-6">
                <Camera className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Zdjęcia w Google Business Profile - typy i strategia</h2>
                  <p className="text-gray-300 mb-6">
                    Zdjęcia to jeden z najważniejszych elementów. Profil z 10+ zdjęciami dostaje 3x więcej przejść niż profil bez zdjęć. Oto jakie rodzaje zdjęć dodać i jak często rotować:
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {photoTips.map((item, idx) => (
                  <div key={idx} className="bg-gray-900 border border-yellow-400/20 p-5 rounded-lg">
                    <h4 className="font-bold text-yellow-400 mb-2">{item.type}</h4>
                    <p className="text-gray-400 text-sm mb-2">{item.desc}</p>
                    <p className="text-xs text-gray-500">Częstotliwość: {item.freq}</p>
                  </div>
                ))}
              </div>

              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-lg p-5">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-400 mb-2">Pro Tip: Rotacja zdjęć</p>
                    <p className="text-gray-300 text-sm">
                      Zmieniaj zdjęcia co 2-4 tygodnie. Świeżość sygnalizuje Google że profil jest aktywnie zarządzany. To zmniejsza 'zmęczenie' użytkowników tymi samymi zdjęciami i zwiększa click-through rate.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="flex items-start gap-4 mb-6">
                <Star className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Zbieranie opinii - strategie i etyka</h2>
                  <p className="text-gray-300 mb-6">
                    Opinie to najważniejszy ranking factor w Google Mapach. 4+ gwiazdek z dużą liczbą opinii to "zielone światło" dla Google. Oto jak zbierać opinie etycznie i efektywnie:
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {reviewStrategies.map((item, idx) => (
                  <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-5 hover:border-yellow-400/30 transition">
                    <div className="flex items-start justify-between mb-2 gap-4">
                      <h4 className="font-bold text-white">{item.strategy}</h4>
                      <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/10 px-2 py-1 rounded whitespace-nowrap">
                        {item.effectiveness}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-5">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-red-400 mb-2">Nigdy: Kupowanie opinii</p>
                    <p className="text-gray-300 text-sm">
                      Nigdy nie kupuj fałszywych opinii ani nie používaj serwisów które obiecują "gwarantowane opinie". Google zważa opinie i może zawiesić profil. Etyczne zbieranie - choć wolniejsze - buduje długoterminową przewagę konkurencyjną.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* Posts Section */}
        <section className="py-12 md:py-16 bg-gray-800">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="flex items-start gap-4 mb-6">
                <MessageSquare className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">Posty w Google Moja Firma - co i jak często publikować?</h2>
                  <p className="text-gray-300 mb-6">
                    Posty znikają po 7 dniach, ale działają na rzecz rankingu i pokazują aktywność profilu. 2-4 posty na miesiąc to idealna częstotliwość aby nie spamować.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {postingStrategy.map((item, idx) => (
                  <div key={idx} className="bg-gray-900 border border-gray-700 rounded-lg p-5">
                    <h4 className="font-bold text-yellow-400 mb-2">{item.content}</h4>
                    <p className="text-gray-400 text-sm mb-3"><strong>Częstotliwość:</strong> {item.frequency}</p>
                    <p className="text-gray-300 text-sm"><strong>Przykłady:</strong> {item.examples}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-5">
                <div className="flex gap-3">
                  <TrendingUp className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-blue-400 mb-2">Pro Tip: Posty z linkami</p>
                    <p className="text-gray-300 text-sm">
                      Posty z linkami (do oferty, artykułu, rejestracji) generują więcej kliknięć niż posty bez CTA. Zawsze dodawaj link do czegoś - czy to do strony, kampanii, czy artykułu blogowego.
                    </p>
                  </div>
                </div>
              </div>
            </FadeInView>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <h2 className="text-3xl font-bold text-white text-center mb-10">Pytania i odpowiedzi - Google Moja Firma</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-gray-800 rounded-lg border border-gray-700">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-gray-700">
                    <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-700/50 transition [&[data-state=open]]:bg-gray-700/50">
                      <span className="font-semibold text-white text-sm">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 px-6 pb-4 leading-relaxed text-sm">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </FadeInView>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-yellow-400/10 via-gray-800 to-yellow-400/10 border-y border-yellow-400/20">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <FadeInView>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Optymalizacja Google Moja Firma to podstawa SEO lokalnego</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Godzina spędzona na optymalizacji wizytówki może przynieść nawet 50+ dedykowanych klientów rocznie.
                  Jeśli chciałbyś aby nasi specjaliści pomogli Ci w optymalizacji - napisz do nas.
                </p>
                <Link
                  to="/uslugi/pozycjonowanie-lokalne"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition"
                >
                  Poznaj nasze usługi SEO lokalne
                  <CheckCircle2 className="w-5 h-5" />
                </Link>
              </div>
            </FadeInView>
          </div>
        </section>

        <ContactSection
          heading="Potrzebujesz pomocy z Google Moja Firma?"
          subheading="Optymalizujemy wizytówki Google Business Profile dla firm lokalnych. Zdobywaamy opinie, tworzymy strategie content, obsługujemy Q&A."
        />
      </Layout>
    </>
  );
}
