import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { ArrowLeft, Calendar, Clock, User, ChevronRight, Heart, Star, Camera, Users, Sparkles } from "lucide-react";

const faqItems = [
  {
    question: "Jaki jest minimalny budżet na marketing salonu urody w 2025?",
    answer: "Minimum to 300-500 zł/miesiąc. Można zacząć od: Google Moja Firma (bezpłatne), organiczny Instagram/TikTok (0 zł) i Booksy (100-300 zł/mies). Rekomendacja: 1000-2500 zł/mies dla rzeczywistych rezultatów obejmujących reklamy lokalne, email marketing i zarządzanie opiniami."
  },
  {
    question: "Ile czasu zajmuje zobaczenie efektów marketingu dla salonu piękności?",
    answer: "Google Moja Firma: 2-4 tygodnie, Instagram/TikTok (organiczny): 4-12 tygodni, Facebook Ads: 1-2 tygodnie, Opinie i recenzje: 2-4 tygodnie, Email marketing: 2-3 tygodnie na pierwsze konwersje. Kombinacja kanałów daje szybsze efekty - można oczekiwać pierwszych nowych klientów w ciągu 2-3 tygodni."
  },
  {
    question: "Czy before/after zdjęcia na Instagramie naprawdę działają dla salonu?",
    answer: "Tak, zdecydowanie. Before/after w usługach beauty ma najwyższą engagement rate (15-40%). Oto co działa: wysokiej jakości zdjęcia (przy naturalnym świetle), niech zmiany mówią same za siebie, taguj producentów produktów, dodaj tekst edukacyjny o procedurze, publikuj 3-5 razy w tygodniu. Reguła: 1 before/after = minimum 5-10 nowych obserwujących z targetowanymi reklamami."
  },
  {
    question: "Jaka jest różnica między Booksy, Fresha a własnym systemem rezerwacji?",
    answer: "Booksy: 5-15% prowizji, built-in marketing, łatwe dla klientów (nie trzeba rejestrować się). Fresha: podobnie do Booksy, 5-15% prowizji, integracja z Instagramem. Własny system: wyższe koszty na start (300-1000 zł), mniejsza prowizja, mniejszy dostęp do nowych klientów. Rekomendacja: zacznij od Booksy, przejdź na own system jak będzie wystarczająco leadów."
  },
  {
    question: "Czy email marketing dla salonu piękności rzeczywiście działa?",
    answer: "Tak, email jest najrentowniejszym kanałem dla salonów (ROI 4:1). Segmentuj bazę: klientki, które chodzą na zabiegi - wyślij email 2-3 dni przed ich poprzednią wizytą. Klientki, które dawno nie były - wyślij promocję. Nowe klientki - wyślij tutorial pielęgnacji. Praktyka: 10-15% CTR przy dobrze napisanych emailach, 20-30% conversion na ofertę ponownej wizyty."
  },
  {
    question: "Jak zarządzać złymi opiniami dla salonu piękności w Google?",
    answer: "Złe opinie są normalne. Procedura: odpowiedz w ciągu 24h, przeproś, zaproponuj rozwiązanie (darmowe ulepszenie, rabat), przenieś rozmowę do DM czy telefonu. Nie dyskutuj publicznie. Dla profilaktyki: zachęcaj zadowolone klientki do opinii (SMS, QR kod) aby złe opinie były mniej widoczne. 4.5+ gwiazdek to standard dla dobrze działającego salonu."
  },
  {
    question: "Jakie TikToki działają najlepiej dla salonu piękności?",
    answer: "Najbardziej efektywne: quick transformations (15-30 sekund), ASMR zabiegu (drapieżne zabiegi, maski), behind-the-scenes, tipy pielęgnacyjne, trendy z muzyką. Algorytm TikToka lubi: 100% completion rate, shares, comments, saves. Próg: 3-5 videów/tygodniowo, konsystencja ważniejsza niż ilość. TikToki mają potencjał wiralowy - jeden hit to 50-500k views i masa nowych klientek."
  },
  {
    question: "Czy programy lojalnościowe rzeczywiście zwiększają retention w salonie?",
    answer: "Tak, na retention 40-50%. Sprawdzony system: za każde 100 zł -> 1 punkt, 10 punktów = 100 zł rabatu. Albo proste: co 10 wizyta -> darmowa mała usługa. Bonus: dodaj email do programu i wysyłaj przypomnienia. Dane: klientki z programem lojalnościowym wracają 2x częściej i wydają średnio 30% więcej."
  }
];

const marketingChannelsData = [
  {
    channel: "Google Moja Firma",
    startupCost: "Bezpłatne",
    localReach: "Bardzo wysokie",
    timeToResults: "2-4 tygodnie"
  },
  {
    channel: "Instagram (organic + Ads)",
    startupCost: "0 - 500 zł/mies (opcjonalne Ads)",
    localReach: "Wysokie",
    timeToResults: "4-12 tygodni (organic), 3-7 dni (Ads)"
  },
  {
    channel: "TikTok",
    startupCost: "0 - 300 zł/mies (opcjonalne Ads)",
    localReach: "Bardzo wysokie (trend potential)",
    timeToResults: "2-8 tygodni"
  },
  {
    channel: "Booksy/Fresha (rezerwacje online)",
    startupCost: "5-15% prowizji",
    localReach: "Średnie-wysokie",
    timeToResults: "1-2 tygodnie"
  },
  {
    channel: "Facebook Ads (geo-targeting)",
    startupCost: "300-1000 zł/mies",
    localReach: "Wysokie",
    timeToResults: "3-7 dni"
  },
  {
    channel: "Email marketing",
    startupCost: "0-100 zł/mies (platform)",
    localReach: "Średnie",
    timeToResults: "2-3 tygodnie"
  },
  {
    channel: "Programy lojalnościowe",
    startupCost: "0-300 zł/mies (system)",
    localReach: "Średnie",
    timeToResults: "1-2 miesiące (effect)"
  },
  {
    channel: "YouTube (Shorts/Clips)",
    startupCost: "0-200 zł/mies",
    localReach: "Średnie-wysokie",
    timeToResults: "4-12 tygodni"
  }
];

const budgetByBeautySalonSizeData = [
  {
    size: "Samozatrudniony/Solo kosmetyczka",
    budget: "300-600 zł/mies (3.6-7.2k/rok)",
    channels: "Google Moja Firma, Instagram organic, TikTok, Booksy"
  },
  {
    size: "Mały salon (2-4 pracowników)",
    budget: "1000-2000 zł/mies (12-24k/rok)",
    channels: "GMF, Instagram + Ads, TikTok, Booksy, email, opinie, Facebook Ads"
  },
  {
    size: "Średni salon (5-10 pracowników)",
    budget: "2500-5000 zł/mies (30-60k/rok)",
    channels: "Multi-channel strategy, YouTube, influencer collaborations, content production, retention"
  },
  {
    size: "Duży salon/chain (10+ pracowników)",
    budget: "5000+ zł/mies (60k+/rok)",
    channels: "Full marketing mix, PR lokalne, sponsorships, branded content, video production"
  }
];

const BlogMarketingDlaSalonuPieknosci = () => {
  return (
    <>
      <SEOHead
        title="Marketing dla salonu piękności 2025 - jak pozyskiwać klientki? Poradnik"
        description="Kompletny przewodnik marketingu dla salonu urody i piękności. Instagram, TikTok, Google Moja Firma, Booksy, email, kampanie Facebook. Strategie na 2025."
        ogType="article"
        canonical="https://fotz.pl/blog/marketing-dla-salonu-pieknosci"
        keywords="marketing dla salonu piękności, reklama salonu urody, marketing salon kosmetyczny, Instagram salon piękności, TikTok salon, Google Moja Firma salon"
        schemaJson={[
          {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Marketing dla salonu piękności 2025 - jak pozyskiwać klientki?",
            "description": "Kompletny przewodnik strategii marketingu dla salonów piękności, kosmetyki i urody",
            "author": {
              "@type": "Organization",
              "name": "Fotz Studio"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Fotz Studio",
              "logo": {
                "@type": "ImageObject",
                "url": "https://fotz.pl/logo-fotz.jpg"
              }
            },
            "datePublished": "2025-03-20",
            "dateModified": "2025-07-25"
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Strona główna", "item": "https://fotz.pl" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://fotz.pl/blog" },
              { "@type": "ListItem", "position": 3, "name": "Marketing dla salonu piękności", "item": "https://fotz.pl/blog/marketing-dla-salonu-pieknosci" }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map(item => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          }
        ]}
      />

      <Layout>
        {/* Breadcrumb */}
        <section className="pt-32 pb-4 bg-gray-900">
          <div className="container mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-yellow-400 transition-colors">Strona główna</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/blog" className="hover:text-yellow-400 transition-colors">Blog</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-white">Marketing dla salonu piękności</span>
            </nav>
          </div>
        </section>

        {/* Article */}
        <article className="pb-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-6">
                  <ArrowLeft className="h-4 w-4" />
                  Wróć do bloga
                </Link>

                <span className="inline-block text-sm font-medium text-yellow-400 uppercase tracking-wider mb-4">
                  Marketing i Reklama
                </span>

                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Marketing dla salonu piękności - jak pozyskiwać nowe klientki w 2025?
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-8">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Fotz Studio
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    20 marca 2025
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    18 min czytania
                  </span>
                </div>

                <div className="aspect-video rounded-2xl overflow-hidden mb-8">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2015"
                    alt="Marketing dla salonu piękności"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-8 text-gray-300">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Marketing dla salonu piękności wymaga innego podejścia niż dla innych branż. Twoje potencjalne klientki szukają wizualnych dowodów jakości (before/after), szukają recenzji, chcą widzieć behind-the-scenes, i coraz bardziej zaufają TikTok i Instagramowi niż tradycyjnym ogłoszeniom. W tym przewodniku przeanalizujemy strategie marketingu dla salonów kosmetycznych, które rzeczywiście działają w 2025 roku. Dowiesz się, jak wykorzystać Instagram i TikTok, jak zarządzać rezerwacjami przez Booksy, jak zbierać opinie, jak uruchamiać kampanie Facebook Ads i wiele więcej.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
                  Marketing dla salonu piękności - co się zmieniło w 2025?
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  Przede wszystkim: TikTok jest teraz głównym kanałem discovery dla salonów piękności, szczególnie dla kobiet 18-35 lat. Instagram Reels zaczyna być mniej efektywny (zmienił algorytm), ale nadal istotny. Google Moja Firma i opinie są bardziej ważne niż kiedykolwiek. Email marketing wrócił (high ROI). Video content dominuje nad zdjęciami statycznymi.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Oto kanały, które działają teraz dla salonów:
                </p>

                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>TikTok (transformacje, ASMR zabiegu, tipy pielęgnacyjne) - najszybsza growth</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Instagram (before/after, Stories, Reels) - audience loyalty i DM konwersje</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Google Moja Firma (opinie, zdjęcia, posty) - visibility w wyszukiwaniu i mapach</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Booksy/Fresha (rezerwacje online, marketing wbudowany) - konwersja</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Facebook Ads (geo-targeting) - traffic z budżetem</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Email marketing (retention, repeat booking) - highest ROI</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-yellow-400 font-bold">•</span>
                    <span>Programy lojalnościowe (retention, lifetime value) - krytyczne</span>
                  </li>
                </ul>

                {/* Table: Marketing Channels */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Kanały marketingu dla salonu piękności - porównanie
                  </h2>

                  <div className="overflow-x-auto rounded-xl border border-gray-700">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-800/50">
                        <tr className="border-b border-gray-700">
                          <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Kanał</th>
                          <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Koszt startu</th>
                          <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Zasięg</th>
                          <th className="px-6 py-4 text-left text-yellow-400 font-semibold">Czas do efektów</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marketingChannelsData.map((row, idx) => (
                          <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800/30 transition">
                            <td className="px-6 py-4 text-white font-medium">{row.channel}</td>
                            <td className="px-6 py-4 text-gray-400">{row.startupCost}</td>
                            <td className="px-6 py-4 text-gray-400">{row.localReach}</td>
                            <td className="px-6 py-4 text-gray-400">{row.timeToResults}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Section: Instagram & TikTok */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Instagram i TikTok dla salonu - before/after, Reels i Shorts
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Instagram i TikTok to numer 1 i numer 2 kanały dla salonów piękności. Twoja strategia powinna być:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Camera className="w-5 h-5 text-yellow-400" />
                        Instagram Strategy
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Before/after zdjęcia (najlepiej w Stories i Feed Posts) - engagement 20-40%</li>
                        <li>• Instagram Reels (15-30 sekund transformacji, tipy, trendy) - 3-5x/tygodniu</li>
                        <li>• Stories (daily updates, behind-the-scenes, Q&A) - story stickers dla interakcji</li>
                        <li>• DM konwersje - odpowiadaj szybko (poniżej 1 godziny) na pytania o usługi</li>
                        <li>• Hashtagi strategiczne (#salonpiękności, #косметолог [lokalne], #beforeafter)</li>
                        <li>• Taguj produkty i partnery w postach - zwiększa discovery</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        TikTok Strategy
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Quick transformations (15-30 sekund) - NAJLEPIEJ działające formaty</li>
                        <li>• ASMR zabiegu (drapieżne maski, głębokie oczyszczanie) - highest watch time</li>
                        <li>• Tipy pielęgnacyjne (routine, produkty, problemy skóry) - educational content</li>
                        <li>• Behind-the-scenes (setup salon, nowe zabiegi, team) - builds trust</li>
                        <li>• Trending sounds + beauty hooks - algorytm premiuje, nawet jeśli nie fits topically</li>
                        <li>• Publikuj 3-5x/tygodniu, consistency ważniejsza niż production quality</li>
                        <li>• Jeden viral TikTok = 50k-500k views i mass nowych followers</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-yellow-400" />
                        Jak poprawić engagement
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Pytaj komentarze (What would you try? Do you like?) - zwiększa retention</li>
                        <li>• Odpowiadaj na komentarze w ciągu 1-2 godzin - algorytm to premiuje</li>
                        <li>• Cross-post: Instagram Reels &rarr; TikTok (save czas, jeden content)</li>
                        <li>• Tag klientek które się zgodziły (user-generated content) - social proof</li>
                        <li>• Offer exclusive content dla followers (discount code, free tip)</li>
                        <li>• Link w bio &rarr; Booksy rezerwacje (clickable, direct to booking)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Google Moja Firma */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Google Moja Firma dla salonu - pojawiaj się w wyszukiwaniu
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Google Moja Firma (dla salonów piękności) pojawia się w wynikach wyszukiwania lokalnego, w Google Maps i w Knowledge Panel. To KRYTYCZNE dla salonu, bo prawie każda klientka szuka Cię najpierw w Google.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Krok 1: Założenie i weryfikacja</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Przejdź na business.google.com i zaloguj się na konto Gmail</li>
                        <li>• Kliknij "Zarządzaj wizytówką" lub "Utwórz wizytówkę"</li>
                        <li>• Uzupełnij: nazwa salonu (bez buzzwords type: beauty salon), kategoria (Beauty Salon, Hair Salon, Nail Salon), adres dokładnie, telefon, godziny otwarcia</li>
                        <li>• Potwierdź biznes poprzez SMS lub mail (Google będzie czekać 4-6 tygodni na weryfikację)</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Krok 2: Optymalizacja informacji</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Dodaj opis salonu (160-250 znaków) z słowami kluczowymi: strzyżenie, paznokcie, pielęgnacja, zabiegi, manicure, etc.</li>
                        <li>• Godziny otwarcia - dodaj na każdy dzień (Google premiuje pełne info)</li>
                        <li>• Kategorie (max 10) - Beauty Salon, Hair Salon, Nail Salon, Spa (bądź konkretny)</li>
                        <li>• Atrybuty - parkingi, wifi, dostępność dla niepełnosprawnych, online booking, karta kredytowa</li>
                        <li>• Link do strony WWW (jeśli masz) lub link do Booksy</li>
                        <li>• Numer telefonu - musi być dostępny, odpowiadaj szybko na pytania przez GMF</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Krok 3: Multimedia i posty</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Dodaj co najmniej 15 wysokiej jakości zdjęć (wnętrze, zabiegi in-process, rezultaty, team)</li>
                        <li>• Publikuj regularne posty (1-2x/tydzień) o nowościach, promocjach, specjalnych ofertach</li>
                        <li>• Dodaj wideo (30-60 sekund) - samouczek zabiegu lub tour salonu</li>
                        <li>• Pytania i odpowiedzi - odpowiadaj na pytania potencjalnych klientek</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Krok 4: Zarządzanie opiniami</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Każda opinia wymaga odpowiedzi w ciągu 24-48 godzin (pokazuje engagement)</li>
                        <li>• Na 5-gwiazdkę: Dziękujemy! Czekamy na następną wizytę!</li>
                        <li>• Na 1-3 gwiazdki: Przepraszamy że nie spełniliśmy oczekiwań. Skontaktuj się z nami aby to naprawić.</li>
                        <li>• Zbieraj opinie aktywnie (SMS z linkiem, QR kod w salonie, email po wizycie)</li>
                        <li>• Target: minimum 4.5 gwiazdek, 20+ opinii w pierwszym roku</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Booksy/Fresha */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Booksy i Fresha - system rezerwacji online dla salonu
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    System rezerwacji online jest KRYTYCZNY. 70% klientek chce rezerwować online, a jeśli nie masz opcji - idzą do konkurencji. Booksy i Fresha to najpopularniejsze platformy dla salonów piękności w Polsce.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-3">Booksy vs Fresha</h3>
                      <div className="space-y-3 text-gray-300">
                        <p><strong>Booksy:</strong> 5-15% prowizji na zabiegi, built-in marketing (Booksy profil pojawia się w Google), integracja z social media, SMS/email prominders, loyalty program wbudowany. Pro: najpopularniejsza, duża baza klientek szukających rezerwacji.</p>
                        <p><strong>Fresha:</strong> Bardzo podobna (5-15% prowizji), integracja z Instagramem bezpośrednia (rezerwuj z Instagrama), video reviews, community features. Pro: integracja z IG, trendy między influencerami.</p>
                        <p><strong>Rekomendacja:</strong> Zacznij z Booksy (większa baza), przejdź na Fresha jeśli ma lepszą integrację z Twoim social media strategy.</p>
                      </div>
                    </div>

                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-yellow-400 mb-3">Strategy: Maksymalizuj konwersje rezerwacji</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Link do Booksy w bio Instagramu (clickable, direct to booking)</li>
                        <li>• Po każdym TikToku/Reelu = dodaj swipe-up lub link do rezerwacji</li>
                        <li>• SMS reminder 24h przed wizytą (zmniejsza no-show)</li>
                        <li>• Promocja w Booksy (10-15% discount na first booking) - acquisition</li>
                        <li>• Follow-up email 3 dni po wizycie - ask for review + offer discount na following service</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Facebook Ads */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Facebook Ads dla salonu piękności - reklama lokalna z budżetem
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Facebook Ads (i Instagram Ads, bo są połączone) są jednym z najszybszych sposobów na pozyskanie nowych klientek. Możesz targeting geo-lokalnie, po zainteresowaniach (beauty, nails, hair, wellness) i po demografii.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Setup kampanii</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Cel: Conversions (send to Booksy link) lub Traffic (send to website)</li>
                        <li>• Audience: Kobieta, 25-55 lat, targeting geo (radius 5-15km od salonu)</li>
                        <li>• Zainteresowania: beauty, skincare, nails, hair, wellness</li>
                        <li>• Budget: start 300-500 zł/mies (minimum 10-15 zł/dzień aby algorytm mógł się nauczyć)</li>
                        <li>• Duration: minimum 4 tygodnie aby zobaczyć rezultaty</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Creative que działa</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Video before/after (15-30 sekund) - najlepszy konwersje (3-8% CTR)</li>
                        <li>• Static image transformacji (high resolution) - CTR 2-5%</li>
                        <li>• Carousel ads (3-5 before/after zdjęć) - user can swipe</li>
                        <li>• Copy: Zachęcająca, pain-point focused (wreszcie paznokcie bez złamań!, nowa ja bez stresu o włosy!)</li>
                        <li>• CTA: Book Now, Schedule Free Consultation (testuj oba, zwycz będzie jeden)</li>
                        <li>• Disclaimer: ograniczona promocja (Extra 15% off first booking!)  - urgency</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-yellow-400 mb-3">Metryki do monitorowania</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Click-through rate (CTR) - powyżej 2% = dobrze, 5%+ = wyśmienite</li>
                        <li>• Cost per click (CPC) - powinno być pod 2-3 zł (zależy od targetu)</li>
                        <li>• Conversion rate - 2-5% to dobry wynik dla beauty (zależy od landing page)</li>
                        <li>• Cost per acquisition (CPA) - ile kosztuje jedna nowa klientka (150-300 zł = target)</li>
                        <li>• Return on ad spend (ROAS) - ile zarabiasz na każdy złoty wydany (3:1 = target)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Email & Loyalty */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Email marketing i programy lojalnościowe dla salonu
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Email jest zapomnianym kanałem dla salonów piękności, ale ma highest ROI (4:1). Jeśli masz listę 500 klientek, to 1 email kampania może przynieść 5-15 nowych rezerwacji za bardzo niski koszt.
                  </p>

                  <div className="space-y-6">
                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Email Strategy</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Zbieraj adresy email (przy rezerwacji w Booksy, SMS opt-in w salonie, pop-up na stronie)</li>
                        <li>• Segmentuj bazę: Kupujące regularnie vs. Zapomniały o nas vs. Nowe klientki</li>
                        <li>• Dla regularnych: Send reminder email 2-3 dni PRZED ich poprzednią wizytą (np. jeśli były 6 tygodni temu, wyślij email w tydzień 5)</li>
                        <li>• Dla zapomniałych: Special offer (15% discount na powrót) - send every 2-3 miesiące</li>
                        <li>• Dla nowych: Welcome series (3 email sequence) - intro do salonu, tips, invitation do loyalty program</li>
                        <li>• Newsletter (1x/miesiąc): new services, tips, seasonal offers</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Programy lojalnościowe</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• System punktów: Za każde 100 zł wydane &rarr; 1 punkt, 10 punktów = 100 zł rabatu</li>
                        <li>• Albo prostsze: Co piąta wizyta = darmowa małą usługę (mascara, lip gloss, nail art)</li>
                        <li>• Booksy ma built-in loyalty program - skonfiguruj tam</li>
                        <li>• Bonus: dodaj email do programu &rarr; regularne informacje o postępach (You are 3 points away from reward!)</li>
                        <li>• Data: klientki z loyalty programem wracają 2-3x częściej i wydają 30% więcej</li>
                      </ul>
                    </div>

                    <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Email copy suggestions</h3>
                      <ul className="space-y-3 text-gray-300">
                        <li>• Subject line (openrate 25-35%): Twoja paznokcie czekają! | Czas na odświeżenie? | Ekskluzywa dla Ciebie -15%</li>
                        <li>• Preview: Zarezerwuj już dzisiaj | Limited time offer | Wróć do nas a darzymy Cię rabatem</li>
                        <li>• CTA: Book Now (link to Booksy) | Claim Offer | Reserve Appointment</li>
                        <li>• Best time to send: Wtorek-piątek, 10 rano lub 6 wieczorem (testy, każdy salon będzie inny)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section: Budget */}
                <div className="mt-12 mb-12">
                  <h2 className="text-3xl font-bold mb-6 text-white">
                    Budżet na marketing dla salonu piękności - realistyczne kwoty
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Ile powinna kosztować strategia marketingu dla salonu? Zależy od wielkości salonu, lokacji i ambicji. Oto rekomendacje:
                  </p>

                  <div className="space-y-4">
                    {budgetByBeautySalonSizeData.map((item, idx) => (
                      <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{item.size}</h3>
                        <p className="text-yellow-400 font-semibold mb-3">{item.budget}</p>
                        <p className="text-gray-300">Kanały: {item.channels}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-6 mt-8">
                    <h3 className="text-lg font-bold text-yellow-400 mb-3">Porady na optymalizacja budżetu:</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Google Moja Firma - bezpłatne, ale wymaga pracy (zdjęcia, opinie). Priorytet #1</li>
                      <li>• Instagram/TikTok - organiczny content jest lepszy niż płatne na starcie. Czas zamiast pieniędzy.</li>
                      <li>• Booksy - prowizja (5-15%) jest warte jeśli przynosi klientki. Nie płacisz jeśli nie ma rezerwacji.</li>
                      <li>• Facebook Ads - zacznij małym budżetem (300 zł/mies), skaluj jeśli masz positive ROAS</li>
                      <li>• Email - niemal darmowy, platformy takie jak Mailchimp maja free tier na 500 kontaktów</li>
                      <li>• Nagrodu: niech klientki zapraszają przyjaciółki (mouth-to-mouth to najlepszy marketing dla beauty)</li>
                    </ul>
                  </div>
                </div>

                {/* FAQ */}
                <h2 className="text-3xl font-bold mt-12 mb-6 text-white">
                  Najczęściej zadawane pytania
                </h2>

                <div className="space-y-4 mb-12">
                  <Accordion type="single" collapsible>
                    {faqItems.map((item, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`} className="border border-gray-700 rounded-lg px-6 data-[state=open]:bg-gray-800/30 transition-colors">
                        <AccordionTrigger className="py-4 hover:no-underline">
                          <span className="text-left font-semibold text-white">{item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="pb-4 text-gray-300">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>

                {/* CTA */}
                <div className="mt-12 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                    Chcesz mieć pełne rezerwacje w salonie?
                  </h2>
                  <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                    Marketing dla salonu piękności to kombinacja kilku kanałów. Nie musisz robić wszystkiego na raz - zacznij od Google Moja Firma i Instagramu, skonfiguruj Booksy, a potem skaluj Facebook Ads i email. Każdy krok zwiększa widoczność.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                      <Link to="/kontakt">Bezpłatna konsultacja</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                      <Link to="/uslugi/marketing-internetowy">Sprawdź nasze usługi</Link>
                    </Button>
                  </div>
                </div>

                {/* Related Links */}
                <div className="mt-8 p-8 bg-gray-800/30 rounded-2xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-4 text-white">Powiązane artykuły i usługi</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <Link to="/blog" className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
                      <h4 className="font-semibold text-white mb-2">Social Media Marketing</h4>
                      <p className="text-sm text-gray-400">Instagram i TikTok strategie</p>
                    </Link>
                    <Link to="/blog/marketing-lokalny-dla-firm" className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
                      <h4 className="font-semibold text-white mb-2">Marketing lokalny</h4>
                      <p className="text-sm text-gray-400">Pozyskanie klientów lokalnych</p>
                    </Link>
                    <Link to="/blog/facebook-ads-poradnik" className="p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
                      <h4 className="font-semibold text-white mb-2">Facebook Ads</h4>
                      <p className="text-sm text-gray-400">Kampanie reklamowe</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Contact Section */}
        <ContactSection />
      </Layout>
    </>
  );
};

export default BlogMarketingDlaSalonuPieknosci;
