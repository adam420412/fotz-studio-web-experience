import React from 'react';
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { Layout } from "@/components/layout/Layout";
import { Image, Play, Target, BarChart3, Zap, Users, CheckCircle2, ArrowRight } from 'lucide-react';

const seoTitle = "Instagram Ads 2026: reklama na Instagramie | FOTZ";
const seoDescription = "Instagram Ads 2026: jak uruchomić reklamę na Instagramie? Formaty, targetowanie, budżet, pomiar i optymalizacja kampanii w Menedżerze reklam Meta.";
const canonicalUrl = "https://www.fotz-studio.pl/blog/reklama-na-instagramie";
const pageTitle = "Instagram Ads 2026: jak działa reklama na Instagramie?";

const articleData = {
  headline: pageTitle,
  description: seoDescription,
  url: canonicalUrl,
  image: "https://www.fotz-studio.pl/og-image.jpg",
  datePublished: "2025-02-20",
  dateModified: "2026-11-09",
  author: "Fotz Studio",
};

const breadcrumbs = [
  { name: "Strona główna", url: "/" },
  { name: "Blog", url: "/blog" },
  { name: "Reklama na Instagramie", url: "/blog/reklama-na-instagramie" },
];

const campaignSteps = [
  {
    title: "Wybierz cel i jedno główne zdarzenie",
    text: "Określ, czy priorytetem jest rozpoznawalność marki, ruch, kontakt z firmą, lead czy sprzedaż. W kampanii konwersyjnej wskaż zdarzenie, które odpowiada rzeczywistemu działaniu użytkownika. Nie wybieraj sprzedaży tylko po to, by zwiększyć ruch na stronie.",
  },
  {
    title: "Ustaw budżet i harmonogram",
    text: "Wybierz budżet dzienny albo całkowity oraz czas emisji. Przyjmij kwotę możliwą do przeznaczenia na test bez naruszania płynności firmy. Budżet reklamowy, koszt przygotowania materiałów i ewentualna obsługa to osobne pozycje.",
  },
  {
    title: "Zdefiniuj grupę odbiorców",
    text: "Uwzględnij lokalizację, język i cechy istotne dla oferty. Zdecyduj, czy testujesz nową grupę, remarketing do osób znających markę, czy oba segmenty w osobnych zestawach reklam. Nie zawężaj grupy bez biznesowego uzasadnienia.",
  },
  {
    title: "Dobierz umiejscowienia",
    text: "Automatyczne umiejscowienia pozwalają systemowi rozdzielać emisję między dostępne powierzchnie. Ręczny wybór przydaje się, gdy materiał lub hipoteza testowa dotyczy wyłącznie Instagrama. Sprawdź podgląd każdej używanej powierzchni.",
  },
  {
    title: "Przygotuj reklamę i stronę docelową",
    text: "Dodaj obraz lub wideo, tekst podstawowy, nagłówek, CTA i adres docelowy. Komunikat reklamy powinien odpowiadać treści strony. Dodaj parametry UTM, aby rozróżnić kampanię, zestaw reklam i wariant kreacji w analityce.",
  },
  {
    title: "Sprawdź pomiar przed publikacją",
    text: "Wykonaj test konwersji i sprawdź, czy zdarzenie dociera z właściwymi parametrami. Zweryfikuj zgodę użytkownika, domenę oraz przypisanie konta reklamowego. Samo kliknięcie „Opublikuj” nie potwierda poprawności pomiaru.",
  },
  {
    title: "Przejrzyj podgląd i uruchom test",
    text: "Sprawdź tekst na telefonie, czytelność bez dźwięku, przyciski i działanie strony. Po akceptacji reklamy obserwuj dostarczanie i zdarzenia techniczne. Nie oceniaj całej hipotezy na podstawie kilku wyświetleń.",
  },
];

const metrics = [
  {
    name: "Zasięg, wyświetlenia i częstotliwość",
    formula: "Częstotliwość = wyświetlenia ÷ zasięg",
    text: "Pokazują skalę dotarcia i to, jak często przeciętna osoba widziała reklamę. Wzrost częstotliwości jest sygnałem do sprawdzenia zmęczenia kreacji, a nie automatycznym powodem wyłączenia kampanii.",
  },
  {
    name: "CTR i kliknięcia w link",
    formula: "CTR = kliknięcia ÷ wyświetlenia × 100%",
    text: "W raporcie rozróżniaj CTR dla wszystkich kliknięć od CTR linku. Porównuj tę samą definicję metryki i sprawdzaj także jakość wejść na stronę, nie sam współczynnik kliknięć.",
  },
  {
    name: "CPC i CPM",
    formula: "CPC = wydatek ÷ kliknięcia; CPM = wydatek ÷ wyświetlenia × 1000",
    text: "CPC opisuje koszt kliknięcia według wybranej definicji, a CPM koszt tysiąca wyświetleń. Oba wskaźniki zależą od aukcji, grupy, okresu i kreacji. Nie mają jednej uniwersalnej dobrej wartości.",
  },
  {
    name: "Konwersje, CPA i współczynnik konwersji",
    formula: "CPA = wydatek ÷ liczba wybranych działań",
    text: "Analizuj konkretne zdarzenie, np. wysłanie formularza lub zakup. Dla leadów sprawdzaj również ich jakość w procesie sprzedaży. Współczynnik konwersji strony pomaga odróżnić problem reklamy od problemu strony docelowej.",
  },
  {
    name: "ROAS i opłacalność",
    formula: "ROAS = przypisany przychód ÷ wydatek reklamowy",
    text: "ROAS dotyczy przychodu, nie zysku. Oceniaj go razem z marżą, kosztami obsługi, zwrotami i atrybucją. Ten sam wynik może mieć różne znaczenie dla dwóch firm.",
  },
];

const troubleshooting = [
  {
    problem: "Reklama nie wyświetla się lub wydaje bardzo mało",
    action: "Sprawdź status akceptacji, daty emisji, budżet, rozliczenia, rozmiar grupy i konflikt ustawień. Nie duplikuj kampanii, zanim nie zidentyfikujesz przyczyny.",
  },
  {
    problem: "Są wyświetlenia, ale mało kliknięć",
    action: "Porównaj pierwsze sekundy lub główny obraz, nagłówek i dopasowanie komunikatu do grupy. Przetestuj jeden wariant kreacji przy zachowaniu pozostałych warunków.",
  },
  {
    problem: "Jest ruch, ale brak zapytań lub zakupów",
    action: "Zweryfikuj zdarzenia konwersji, działanie formularza i spójność oferty na stronie. Przejdź całą ścieżkę na telefonie i oddziel problem pomiaru od problemu użyteczności.",
  },
  {
    problem: "Leady są niedopasowane do oferty",
    action: "Doprecyzuj komunikat i pytania w formularzu. Oceń jakość kontaktów z zespołem sprzedaży zamiast optymalizować wyłącznie pod najniższy koszt formularza.",
  },
  {
    problem: "Wyniki spadają wraz ze wzrostem częstotliwości",
    action: "Sprawdź podział na umiejscowienia i segmenty, a następnie przygotuj nowy wariant argumentu lub kreacji. Zachowaj punkt odniesienia, aby ocenić zmianę.",
  },
];

const faqItems = [
  {
    id: "uruchomienie",
    question: "Jak włączyć reklamę na Instagramie?",
    answer: "Możesz promować odpowiedni post lub relację z poziomu aplikacji albo utworzyć kampanię w Menedżerze reklam Meta. Druga ścieżka daje większą kontrolę nad celem, zestawami reklam, umiejscowieniami i testami. Przed startem skonfiguruj konto reklamowe, metodę rozliczeń, stronę docelową i pomiar działań.",
  },
  {
    id: "koszt",
    question: "Ile kosztuje reklama posta na Instagramie?",
    answer: "Nie ma jednej stałej ceny reklamy posta. Wydatek zależy m.in. od budżetu, czasu emisji, konkurencji w aukcji, grupy odbiorców i jakości dopasowania reklamy. Ustal maksymalny budżet testu, a po zebraniu danych oceń koszt wybranego działania zamiast polegać na ogólnym cenniku internetowym.",
  },
  {
    id: "wideo",
    question: "Ile kosztuje 30-sekundowa reklama na Instagramie?",
    answer: "Długość wideo nie ma samodzielnego, stałego cennika emisji. Osobno wycenia się przygotowanie materiału, a osobno planuje budżet reklamowy. Koszt wyświetleń i działań powstaje w systemie aukcyjnym, dlatego trzydziestosekundowy film trzeba oceniać przez wyniki konkretnego testu, nie przez sam czas trwania.",
  },
  {
    id: "obserwujacy",
    question: "Czy do Instagram Ads potrzebna jest duża liczba obserwujących?",
    answer: "Nie ma uniwersalnego progu obserwujących wymaganego do uruchomienia płatnej kampanii. Reklama może docierać także do osób, które nie obserwują profilu. Warto jednak zadbać o zrozumiały opis konta i spójne treści, ponieważ odbiorca może sprawdzić profil przed podjęciem kontaktu lub zakupu.",
  },
  {
    id: "konto",
    question: "Czy można reklamować się na Instagramie bez konta firmowego?",
    answer: "Promowanie treści z aplikacji wymaga odpowiedniego konta profesjonalnego. W Menedżerze reklam wymagania zależą od konfiguracji konta i sposobu korzystania z umiejscowień Instagrama. Dla firmy praktycznym punktem wyjścia jest uporządkowany profil profesjonalny, właściwe uprawnienia i zgodność z aktualnymi instrukcjami Meta.",
  },
  {
    id: "promuj-manager",
    question: "Promuj post czy Menedżer reklam — co wybrać?",
    answer: "Promowanie posta jest wygodne przy prostym teście istniejącej treści. Menedżer reklam jest lepszy, gdy potrzebujesz osobnych zestawów reklam, szerszej kontroli pomiaru, wariantów kreacji i uporządkowanych testów. Wybór zależy od celu i złożoności działania, a nie od obietnicy lepszego wyniku jednej opcji.",
  },
  {
    id: "formaty",
    question: "Jakie formaty reklam są dostępne na Instagramie?",
    answer: "Podstawowe kreacje to obraz, wideo, karuzela i — przy odpowiedniej konfiguracji katalogu — formaty kolekcji lub reklamy z tagami produktów. Mogą występować m.in. w Aktualnościach, Stories, Reels i Eksploruj. Format kreacji i umiejscowienie to różne ustawienia; dostępność sprawdź w podglądzie kampanii.",
  },
  {
    id: "facebook",
    question: "Facebook Ads czy Instagram Ads — co wybrać?",
    answer: "Nie trzeba traktować ich jako wyłącznych alternatyw, ponieważ oba kanały obsługuje system reklamowy Meta. Decyduj na podstawie zachowania odbiorców, materiałów i danych z testów. Kampania może obejmować obie platformy, a raporty powinny pokazywać wyniki w podziale na umiejscowienia.",
  },
  {
    id: "pomiar",
    question: "Jak mierzyć skuteczność reklam na Instagramie?",
    answer: "Zacznij od metryki powiązanej z celem: zasięgu dla dotarcia, wejść na stronę dla ruchu albo konkretnej konwersji dla sprzedaży i pozyskiwania leadów. Uzupełnij ją o koszt działania, jakość ruchu i dane sprzedażowe. Porównuj identyczne definicje metryk, okna atrybucji i okresy.",
  },
  {
    id: "problemy",
    question: "Dlaczego Instagram Ads nie działa?",
    answer: "Najpierw sprawdź akceptację reklamy, dostarczanie budżetu, pomiar i stronę docelową, a dopiero potem zmieniaj grupę lub kreację. Niski CTR, brak konwersji i zła jakość leadów mogą mieć różne przyczyny. Wprowadzaj jedną kontrolowaną zmianę i dokumentuj wyniki, zamiast zmieniać wszystkich ustawień jednocześnie.",
  },
];

export default function BlogSztukaPromocjiInstagram() {
  return (
    <Layout>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonicalUrl}
        ogType="article"
      />
      <BreadcrumbSchema items={breadcrumbs} />
      <ArticleSchema data={articleData} />
      <FAQSchema items={faqItems} />

      <article id="article-content" className="min-h-screen bg-white">
        <header className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Image className="w-8 h-8" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wide">Poradnik Meta Ads</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
            <p className="text-lg md:text-xl text-pink-100 max-w-3xl">
              Od przygotowania konta i wyboru celu przez kreacje, budżet i targetowanie aż po pomiar oraz kontrolowaną optymalizację kampanii.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <div>Opublikowano: 20 lutego 2025</div>
              <div aria-hidden="true">|</div>
              <div>Aktualizacja: 9 listopada 2026</div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 py-12">
          <nav aria-label="Spis treści" className="mb-12 rounded-lg border border-pink-100 bg-pink-50 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">W tym poradniku</h2>
            <ol className="grid md:grid-cols-2 gap-3 text-gray-700 list-decimal list-inside">
              <li><a className="hover:text-pink-700 hover:underline" href="#podstawy">Instagram Ads i promowanie postów</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#przygotowanie">Konto, uprawnienia i pomiar</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#formaty">Formaty i umiejscowienia</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#konfiguracja">Kampania krok po kroku</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#targetowanie">Grupy odbiorców</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#budzet">Budżet i koszty</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#kreacje">Kreacje i tekst reklamy</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#pomiar">Metryki i optymalizacja</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#diagnostyka">Rozwiązywanie problemów</a></li>
              <li><a className="hover:text-pink-700 hover:underline" href="#faq">Najczęstsze pytania</a></li>
            </ol>
          </nav>

          <section id="podstawy" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Czym jest Instagram Ads?</h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Instagram Ads to płatny sposób wyświetlania reklam użytkownikom Instagrama. Kampanie należą do systemu reklamowego Meta, dlatego możesz emitować reklamy zarówno na Facebooku, jak i na Instagramie. To jeden z obszarów social media marketingu i digital marketingu: uzupełnia treści organiczne, ale ich nie zastępuje.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Reklamodawca określa cel, budżet, grupę odbiorców i materiał, a system rozstrzyga możliwości emisji w aukcji. Samo uruchomienie kampanii nie gwarantuje zasięgu, leadów ani sprzedaży. Wynik trzeba analizować względem celu, jakości ruchu i ekonomii konkretnej firmy.
            </p>
            <div className="bg-gray-50 border-l-4 border-pink-500 p-6 mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Promuj post czy kampania w Menedżerze reklam?</h3>
              <p className="text-gray-700 mb-3">
                Przycisk „Promuj post” upraszcza start promocji opublikowanej treści. Z poziomu Menedżera reklam zbudujesz pełną strukturę: kampanię, zestawy reklam i pojedyncze reklamy, a także uporządkujesz testy oraz pomiar.
              </p>
              <p className="text-gray-700">
                Jeśli chcesz tworzyć reklamy bez publikowania każdej z nich jako zwykłego posta, porównywać warianty lub precyzyjnie rozdzielać segmenty, wybierz Menedżer reklam. Prosta promocja z aplikacji może natomiast wystarczyć do sprawdzenia jednej treści.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Dla kogo są reklamy Instagram Ads? Dla firm oferujących produkty i usługi, także B2B, które potrafią opisać odbiorcę, przygotować trafny komunikat i zmierzyć działanie po kliknięciu. Jeśli planujesz również organiczną obsługę profilu, zobacz <Link to="/blog/instagram-dla-firmy" className="text-pink-700 font-medium hover:underline">poradnik Instagram dla firmy</Link>.
            </p>
          </section>

          <section id="przygotowanie" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Users className="w-8 h-8 text-indigo-500" aria-hidden="true" />
              Co przygotować przed pierwszą kampanią?
            </h2>
            <ol className="space-y-5 text-gray-700 list-decimal list-inside">
              <li><strong className="text-gray-900">Profil profesjonalny i dostęp do konta.</strong> Sprawdź rolę administratora, nazwę profilu, opis działalności i dane kontaktowe. Ogranicz dostęp do osób, które rzeczywiście go potrzebują.</li>
              <li><strong className="text-gray-900">Portfolio firmowe i konto reklamowe.</strong> Uporządkuj zasoby w Meta Business Suite lub innym dostępnym interfejsie Meta for Business. Połącz wymagane strony i konta zgodnie z instrukcją w panelu.</li>
              <li><strong className="text-gray-900">Cel biznesowy i ścieżka użytkownika.</strong> Zapisz, co ma zrobić odbiorca: obejrzeć ofertę, wysłać formularz, umówić rozmowę czy kupić produkt. Przejdź tę ścieżkę samodzielnie na urządzeniu mobilnym.</li>
              <li><strong className="text-gray-900">Mierzenie zdarzeń.</strong> Dla ruchu na stronę skonfiguruj odpowiedni piksel Meta i dostępne integracje konwersji zgodnie z obowiązującymi zasadami oraz zgodami. Tracking musi obejmować zdarzenie powiązane z celem.</li>
              <li><strong className="text-gray-900">Zasady i materiały.</strong> Sprawdź prawa do zdjęć, nagrań, muzyki i wypowiedzi osób. Aktualne wymagania techniczne oraz zasady reklamowe zweryfikuj w <a href="https://www.facebook.com/business/help/1513393428972189" target="_blank" rel="noreferrer" className="text-pink-700 font-medium hover:underline">Centrum pomocy Meta for Business</a>.</li>
            </ol>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Nazwy ustawień w interfejsie Instagram for Business mogą się zmieniać. Traktuj nazwy w tym poradniku jako mapę procesu, a komunikaty i dokumentację w swoim koncie jako źródło aktualnych wymagań.
            </p>
          </section>

          <section id="formaty" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Play className="w-8 h-8 text-purple-500" aria-hidden="true" />
              Formaty reklam i umiejscowienia na Instagramie
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Format określa konstrukcję kreacji, a umiejscowienie wskazuje powierzchnię, na której może się ona wyświetlać. Nie każdy materiał pasuje do każdego miejsca. Projektuj wariant pod proporcje i sposób korzystania z danej powierzchni zamiast automatycznie przycinać jedną grafikę.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Obraz — Photo Ads</h3>
                <p className="text-gray-700">Jedna czytelna scena, produkt lub komunikat. Dobry punkt wyjścia do testu prostego argumentu. Na grafice ogranicz tekst do informacji potrzebnych do zrozumienia reklamy; nie stosuj przestarzałej reguły procentowej jako samodzielnego kryterium jakości.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Wideo — Video Ads</h3>
                <p className="text-gray-700">Pozwala pokazać użycie produktu, proces lub opinię w sekwencji. Od początku buduj kontekst, dodaj napisy i sprawdź odbiór bez dźwięku. Nie zakładaj, że wideo zawsze będzie lepsze od obrazu — porównaj je w teście.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Karuzela — Carousel Ads</h3>
                <p className="text-gray-700">Kolejne karty mogą przedstawiać produkty, etapy usługi lub części jednej historii. Każda karta powinna mieć zrozumiałą funkcję i spójną kolejność. Nie duplikuj tego samego kadru tylko po to, by zwiększyć liczbę elementów.</p>
              </div>
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Kolekcja i Instagram Shopping</h3>
                <p className="text-gray-700">Przy odpowiedniej konfiguracji katalogu możesz połączyć materiał główny z produktami. Shopping Ads i tagi produktów wymagają sprawdzenia dostępności, zgodności katalogu oraz aktualnych warunków dla konta i rynku. Nie należy utożsamiać ich z automatycznym zakupem bez opuszczenia aplikacji.</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gdzie można umiejscowić reklamy?</h3>
            <ul className="space-y-3 text-gray-700 list-disc list-inside">
              <li><strong>Aktualnościach (Feed):</strong> reklama pojawia się w strumieniu treści; komunikat konkuruje z postami obserwowanych kont.</li>
              <li><strong>Stories:</strong> pionowa powierzchnia wymaga szybkiego kontekstu i czytelnego działania na małym ekranie.</li>
              <li><strong>Reels:</strong> kreacja powinna odpowiadać naturalnemu sposobowi oglądania krótkich nagrań, bez udawania funkcji, których reklama nie ma.</li>
              <li><strong>Eksploruj:</strong> użytkownik przegląda treści dopasowane do zainteresowań, dlatego istotne są temat i pierwszy kadr.</li>
            </ul>
            <p className="text-gray-700 mt-5 leading-relaxed">
              Przed publikacją użyj podglądu dla wybranych umiejscowień i sprawdź aktualne wymiary w dokumentacji Meta. Sztywne limity czasu lub rozdzielczości przepisane ze starego poradnika mogą już nie odpowiadać konfiguracji Twojego konta.
            </p>
          </section>

          <section id="konfiguracja" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Zap className="w-8 h-8 text-orange-500" aria-hidden="true" />
              Jak ustawić kampanię Instagram Ads krok po kroku?
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              W Menedżerze reklam struktura obejmuje kampanię, zestaw reklam i reklamę. Na poziomie kampanii wybierasz nadrzędny cel, w zestawie określasz m.in. odbiorców, budżet i umiejscowienia, a na poziomie reklamy dodajesz kreację, copy, CTA oraz link.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 space-y-6">
              {campaignSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold">{index + 1}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Przy tworzeniu kampanii zapisz hipotezę: dla jakiej grupy, z jakim argumentem i przy jakim zdarzeniu sprawdzasz kampanię. Ułatwi to późniejszą optymalizację i zapobiegnie przypadkowemu zmienianiu wielu ustawień.
            </p>
          </section>

          <section id="targetowanie" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <Target className="w-8 h-8 text-green-500" aria-hidden="true" />
              Targetowanie odbiorców w Meta Ads
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Targeting powinien wynikać z wiedzy o kliencie, a nie z jak najdłuższej listy zainteresowań. Porównuj grupy o podobnej skali i zapisuj założenia. Szczegółowe opcje zależą od aktualnej konfiguracji oraz dostępnych danych.
            </p>
            <div className="space-y-4 mb-6">
              <div className="bg-green-50 border-l-4 border-green-500 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Dane demograficzne, lokalizacja i zainteresowania</h3>
                <p className="text-gray-700">Wybieraj cechy potwierdzone przez rynek i ofertę. Zainteresowania (Interests) to hipoteza o odbiorcy, nie gwarancja jego intencji zakupowej. Unikaj przykładów opartych wyłącznie na stereotypach.</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Custom Audiences i remarketing</h3>
                <p className="text-gray-700">Własne grupy mogą obejmować osoby powiązane z firmą w dozwolonych źródłach, np. odwiedzających stronę lub reagujących na treści. Korzystaj z danych zgodnie z prawem, zgodami i zasadami platformy. Oddziel ten segment od nowych odbiorców w analizie.</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-500 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Lookalike Audiences</h3>
                <p className="text-gray-700">Grupa podobnych odbiorców (Lookalike) wykorzystuje wskazane źródło jako punkt odniesienia. Sprawdź jakość i zgodność źródła oraz porównaj tę opcję z szeroką grupą. Nie zakładaj z góry, że będzie najskuteczniejsza.</p>
              </div>
              <div className="bg-orange-50 border-l-4 border-orange-500 p-5">
                <h3 className="font-bold text-gray-900 mb-2">Szeroka grupa i rozszerzenia systemowe</h3>
                <p className="text-gray-700">Niektóre ustawienia pozwalają systemowi wyjść poza początkowe kryteria. Przed testem sprawdź, jakie rozszerzenia są aktywne i jak zmieni się możliwy zasięg. Oceniaj jakość konwersji, nie tylko ich liczbę.</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              W raporcie termin Audience oznacza grupę odbiorców, a Account wskazuje konto lub poziom jego ustawień. Jeśli testujesz segmenty, zmieniaj jeden element naraz i pilnuj nakładania się grup między zestawami reklam.
            </p>
          </section>

          <section id="budzet" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-blue-500" aria-hidden="true" />
              Ile kosztuje reklama na Instagramie i jak zaplanować budżet?
            </h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Nie ma jednej sztywnej ceny za kliknięcie, wyświetlenie, kontakt ani zakup. System aukcyjny uwzględnia m.in. konkurencję, wybrany cel, grupę, czas i kreację. Dlatego odpowiedzialne planowanie zaczyna się od limitu wydatku oraz progu opłacalności, nie od obietnicy stałego CPC lub CPM.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Budżet dzienny</h3>
                <p className="text-gray-700">Określa orientacyjną kwotę przeznaczaną na emisję w cyklu dziennym zgodnie z zasadami systemu. Wybierz go, gdy kampania ma działać bez ustalonej daty końcowej i chcesz regularnie kontrolować tempo wydatków.</p>
              </div>
              <div className="border border-gray-300 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Budżet całkowity</h3>
                <p className="text-gray-700">Przypisuje limit do zaplanowanego czasu emisji. Jest przydatny przy zamkniętym teście lub kampanii z datą końcową. Przed zatwierdzeniem sprawdź harmonogram i sposób rozliczania w panelu.</p>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Jak wyliczyć budżet testu bez zgadywania ceny?</h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside mb-6">
              <li>Oblicz, jaki koszt pozyskania działania mieści się w ekonomii oferty — uwzględnij marżę i koszty obsługi.</li>
              <li>Oszacuj, ile takich działań potrzebujesz, by porównać hipotezy bez wyciągania wniosków z pojedynczych zdarzeń.</li>
              <li>Pomnóż planowaną liczbę działań przez dopuszczalny koszt i potraktuj wynik jako hipotezę budżetu, nie prognozę wyniku.</li>
              <li>Jeśli kwota przekracza możliwości firmy, zmniejsz liczbę jednoczesnych testów zamiast rozdzielać środki na zbyt wiele wariantów.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed">
              Koszt produkcji materiału należy rozliczać osobno od emisji. Nie ma też uniwersalnego podziału procentowego na testy i skalowanie — zależy on od stabilności wyników, wiedzy o odbiorcach i tolerancji ryzyka.
            </p>
          </section>

          <section id="kreacje" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Kreacje reklamowe: obraz, wideo, copy i CTA</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Dobra kreacja pomaga zrozumieć, co oferujesz, dla kogo jest reklama i jaki jest kolejny krok. Nie musi obiecywać spektakularnego efektu. Powinna być czytelna, zgodna z prawdą i spójna ze stroną docelową.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Obraz i wideo</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Pokaż produkt, proces lub problem w pierwszym istotnym kadrze.</li>
                  <li>Sprawdź proporcje, bezpieczne obszary interfejsu i czytelność na telefonie.</li>
                  <li>Dodaj napisy do dialogów i przekaż kluczową informację także bez dźwięku.</li>
                  <li>Testuj różne ujęcia lub argumenty, a nie tylko kosmetyczne zmiany koloru.</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Tekst i wezwanie do działania</h3>
                <ul className="space-y-3 text-gray-700 list-disc list-inside">
                  <li>Najpierw komunikuj konkretną korzyść lub problem, potem uzupełniaj szczegóły.</li>
                  <li>Dopasuj długość copy do złożoności oferty; nie ma jednej idealnej liczby zdań.</li>
                  <li>CTA powinno opisywać kolejny krok zgodny ze stroną, np. sprawdzenie oferty lub wysłanie zapytania.</li>
                  <li>Unikaj fałszywej pilności, ukrytych warunków i obietnic, których nie możesz udokumentować.</li>
                </ul>
              </div>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mt-6">
              <h3 className="font-bold text-gray-900 mb-3">AI w przygotowaniu wariantów</h3>
              <p className="text-gray-700">Funkcje AI w systemach Meta lub narzędziach zewnętrznych mogą wspierać przygotowanie wariantów, ale dostępność zależy od konta i ustawień. Przed publikacją sprawdź każdy tekst, obraz i kontekst. Odpowiedzialność za prawdziwość przekazu, prawa do materiałów oraz zgodność z polityką pozostaje po stronie reklamodawcy.</p>
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Inspiracje możesz analizować w Bibliotece reklam Meta (Ad Library). Traktuj ją jako źródło komunikatów do własnej analizy, a nie dowód skuteczności cudzych kampanii — sama obecność reklamy nie pokazuje jej wyniku.
            </p>
          </section>

          <section id="pomiar" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Jak mierzyć wyniki i optymalizować kampanię?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Raport performance powinien odpowiadać na pytanie biznesowe, a nie tylko prezentować listę wskaźników. Połącz dane Menedżera reklam z analityką strony i informacją o jakości leadów lub sprzedaży. Sprawdź także okno atrybucji i sposób zliczania konwersji przed porównaniem źródeł.
            </p>
            <div className="space-y-4 mb-8">
              {metrics.map((metric) => (
                <div key={metric.name} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{metric.name}</h3>
                  <p className="text-sm font-mono text-purple-700 mb-3">{metric.formula}</p>
                  <p className="text-gray-700 leading-relaxed">{metric.text}</p>
                </div>
              ))}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kontrolowana optymalizacja i test A/B</h3>
            <ol className="space-y-3 text-gray-700 list-decimal list-inside">
              <li>Zapisz problem i hipotezę, np. czy nowe ujęcie lepiej wyjaśnia zastosowanie produktu.</li>
              <li>Wybierz jedną główną metrykę decyzji oraz metryki ostrzegawcze, takie jak jakość leadów.</li>
              <li>Zmieniaj jeden istotny element i utrzymuj możliwie porównywalne warunki testu.</li>
              <li>Poczekaj na wystarczającą liczbę zdarzeń; nie narzucaj z góry uniwersalnej liczby dni lub konwersji.</li>
              <li>Udokumentuj wynik, ograniczenia atrybucji i kolejny test. Brak poprawy również jest użyteczną informacją.</li>
            </ol>
          </section>

          <section id="diagnostyka" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Dlaczego reklama na Instagramie nie działa?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              „Nie działa” może oznaczać brak emisji, słabe kliknięcia, brak konwersji albo kontakty niedopasowane do oferty. Każdy objaw wymaga innej diagnostyki. Zacznij od najwcześniejszego etapu ścieżki, na którym pojawia się problem.
            </p>
            <div className="space-y-4">
              {troubleshooting.map((item) => (
                <div key={item.problem} className="border-l-4 border-red-400 bg-red-50 p-5">
                  <h3 className="font-bold text-gray-900 mb-2">{item.problem}</h3>
                  <p className="text-gray-700"><strong>Co sprawdzić:</strong> {item.action}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-6 leading-relaxed">
              Unikaj codziennego resetowania ustawień tylko dlatego, że wynik różni się od poprzedniego dnia. Zmiany budżetu, grupy i kreacji jednocześnie uniemożliwiają ustalenie przyczyny. Jeżeli problem dotyczy strony, pomocny będzie <Link to="/blog/jak-stworzyc-landing-page" className="text-pink-700 font-medium hover:underline">poradnik o skutecznym landing page</Link>.
            </p>
          </section>

          <section id="facebook-instagram" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Facebook Ads czy Instagram Ads?</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Facebook i Instagram są częścią platform Meta, więc kampanie mogą korzystać z obu kanałów. Różnią się kontekstem korzystania i sposobem prezentowania materiałów, ale nie ma uniwersalnej odpowiedzi, która platforma jest tańsza albo bardziej opłacalna.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <caption className="text-left text-gray-700 mb-3">Jak podejmować decyzję kanałową bez ogólnych benchmarków?</caption>
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th scope="col" className="text-left p-3 border border-gray-700">Obszar</th>
                    <th scope="col" className="text-left p-3 border border-gray-700">Co sprawdzić</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="p-3 border border-gray-200 font-semibold">Odbiorcy</td><td className="p-3 border border-gray-200">Gdzie docierasz do właściwego segmentu i jak reaguje na temat?</td></tr>
                  <tr className="bg-gray-50"><td className="p-3 border border-gray-200 font-semibold">Kreacje</td><td className="p-3 border border-gray-200">Czy masz warianty dopasowane do konkretnych powierzchni?</td></tr>
                  <tr><td className="p-3 border border-gray-200 font-semibold">Wynik</td><td className="p-3 border border-gray-200">Jaki jest koszt i jakość działania w podziale na umiejscowienia?</td></tr>
                  <tr className="bg-gray-50"><td className="p-3 border border-gray-200 font-semibold">Test</td><td className="p-3 border border-gray-200">Czy wspólna kampania czy osobny test lepiej odpowie na hipotezę?</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Więcej o wspólnej strukturę kampanii przeczytasz w <Link to="/blog/facebook-ads-poradnik" className="text-pink-700 font-medium hover:underline">poradniku Facebook Ads</Link>. Przy planowaniu finansów możesz uzupełnić analizę o <Link to="/blog/cennik-facebook-ads" className="text-pink-700 font-medium hover:underline">omówienie składników kosztów Facebook Ads</Link>, pamiętając o osobnej wycenie emisji, produkcji i obsługi.
            </p>
          </section>

          <section id="scenariusze" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Przykładowe scenariusze testów bez obiecywania wyników</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Poniższe propozycje są redakcyjnymi przykładami planu, a nie opisami realizacji klientów ani gwarantowanymi receptami. Pokazują, jak połączyć hipotezę, kreację i metrykę.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Usługa lokalna</h3>
                <p className="text-gray-700 mb-3"><strong>Hipoteza:</strong> pokazanie etapów usługi ograniczy niejasności przed kontaktem.</p>
                <p className="text-gray-700 mb-3"><strong>Kreacja:</strong> karuzela z procesem i CTA prowadzącym do opisu warunków oraz formularza.</p>
                <p className="text-gray-700"><strong>Ocena:</strong> prawidłowo zarejestrowane zapytania i ich jakość, nie sam koszt kliknięcia.</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Sklep internetowy</h3>
                <p className="text-gray-700 mb-3"><strong>Hipoteza:</strong> demonstracja zastosowania produktu lepiej odpowie na pytania kupującego niż sam packshot.</p>
                <p className="text-gray-700 mb-3"><strong>Kreacja:</strong> dwa warianty wideo lub wideo i obraz porównane przy spójnej ofercie.</p>
                <p className="text-gray-700"><strong>Ocena:</strong> zakupy, marża i jakość atrybucji, a nie tylko przychód przypisany kampanii.</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Oferta B2B</h3>
                <p className="text-gray-700 mb-3"><strong>Hipoteza:</strong> konkretny problem operacyjny będzie trafniejszym tematem niż ogólna prezentacja firmy.</p>
                <p className="text-gray-700 mb-3"><strong>Kreacja:</strong> krótki materiał ekspercki i strona z zakresem rozmowy diagnostycznej.</p>
                <p className="text-gray-700"><strong>Ocena:</strong> zgodność leadów z profilem klienta i dalsze etapy rozmów.</p>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Remarketing</h3>
                <p className="text-gray-700 mb-3"><strong>Hipoteza:</strong> osoby znające ofertę potrzebują odpowiedzi na konkretną wątpliwość, a nie powtórzenia ogólnej reklamy.</p>
                <p className="text-gray-700 mb-3"><strong>Kreacja:</strong> materiał wyjaśniający warunki lub proces, z linkiem do właściwej sekcji.</p>
                <p className="text-gray-700"><strong>Ocena:</strong> działania w tym segmencie oddzielone od wyników nowej grupy.</p>
              </div>
            </div>
          </section>

          <section id="slownik" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Słownik nazw spotykanych w panelu reklamowym</h2>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Interfejs może pokazywać angielskie etykiety. Ten krótki słownik ułatwia czytanie ustawień i raportów, ale nie zastępuje aktualnych opisów funkcji w koncie.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Campaigns / Ad sets / Ads</th><td className="p-3 border border-gray-200">Kampanie / zestawy reklam / reklamy.</td></tr>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Audience / Interests</th><td className="p-3 border border-gray-200">Grupa odbiorców / zainteresowania używane w targetowaniu.</td></tr>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Paid / Leads / Tracking</th><td className="p-3 border border-gray-200">Płatna emisja / potencjalni klienci / konfiguracja pomiaru.</td></tr>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Products / Videos / Copy</th><td className="p-3 border border-gray-200">Produkty w katalogu / materiały wideo / tekst reklamy.</td></tr>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Run ads / Advertisers / Information</th><td className="p-3 border border-gray-200">Emituj reklamy / reklamodawcy / informacje — etykiety zależne od kontekstu ekranu.</td></tr>
                  <tr><th scope="row" className="text-left p-3 border border-gray-200 bg-gray-50">Ads on Instagram / Instagram for Business</th><td className="p-3 border border-gray-200">Nazwy materiałów i zasobów Meta dotyczących reklam oraz firm na Instagramie.</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="checklist" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Checklista przed publikacją kampanii</h2>
            <ul className="space-y-4 text-gray-700">
              {[
                "Cel kampanii odpowiada działaniu, które ma wykonać odbiorca.",
                "Konto, uprawnienia i metoda rozliczeń są poprawnie skonfigurowane.",
                "Strona docelowa działa na telefonie i kontynuuje komunikat reklamy.",
                "Zdarzenia konwersji oraz zgody zostały sprawdzone w praktyce.",
                "Kreacje są czytelne w podglądzie wybranych umiejscowień.",
                "Parametry UTM i nazewnictwo umożliwiają późniejszą analizę.",
                "Budżet testu mieści się w możliwościach i ekonomii firmy.",
                "Wiadomo, która metryka decyduje o kolejnym kroku i kiedy test ocenimy.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" aria-hidden="true" /><span>{item}</span></li>
              ))}
            </ul>
          </section>

          <section id="faq" className="mb-14 scroll-mt-24">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Instagram Ads — najczęściej zadawane pytania</h2>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  id={`instagram-ads-faq-${item.id}`}
                  key={item.id}
                  className="group border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-pink-500 transition"
                >
                  <summary className="flex items-center justify-between gap-4 font-bold text-gray-900 text-lg">
                    {item.question}
                    <span className="transform group-open:rotate-180 transition ml-2" aria-hidden="true">▼</span>
                  </summary>
                  <p className="text-gray-700 mt-4 leading-relaxed">{item.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="podsumowanie" className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Podsumowanie: testuj proces, nie obietnice</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Skuteczna praca z Instagram Ads zaczyna się od właściwego celu, mierzalnej ścieżki i trafnej kreacji. Następnie potrzebujesz kontrolowanego budżetu, czytelnych raportów i pojedynczych zmian, których efekt można ocenić. Nie ma stałej ceny ani formatu gwarantującego wynik.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Wybierz jedną hipotezę z tego poradnika, przygotuj test i zapisz kryterium decyzji przed uruchomieniem emisji. To lepszy punkt wyjścia niż kopiowanie cudzych benchmarków lub przypadkowa zmiana wszystkich ustawień.
            </p>
          </section>

          <section aria-labelledby="powiazane-materialy" className="mb-12">
            <h2 id="powiazane-materialy" className="text-2xl font-bold mb-6 text-gray-900">Powiązane poradniki i usługi</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/performance-marketing/instagram-ads" className="border border-gray-200 rounded-lg p-5 hover:border-pink-500 transition">
                <span className="font-bold text-gray-900 flex items-center gap-2">Usługa Instagram Ads <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                <span className="block text-gray-700 mt-2">Zakres wsparcia przy strategii, kreacjach i prowadzeniu kampanii.</span>
              </Link>
              <Link to="/performance-marketing/meta-ads" className="border border-gray-200 rounded-lg p-5 hover:border-pink-500 transition">
                <span className="font-bold text-gray-900 flex items-center gap-2">Kampanie Meta Ads <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                <span className="block text-gray-700 mt-2">Podejście do reklam na Facebooku i Instagramie w jednym systemie.</span>
              </Link>
              <Link to="/blog/social-media-marketing-poradnik" className="border border-gray-200 rounded-lg p-5 hover:border-pink-500 transition">
                <span className="font-bold text-gray-900 flex items-center gap-2">Social media marketing <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                <span className="block text-gray-700 mt-2">Jak połączyć płatne kampanie z treściami i komunikacją marki.</span>
              </Link>
              <Link to="/blog/paid-social-co-to" className="border border-gray-200 rounded-lg p-5 hover:border-pink-500 transition">
                <span className="font-bold text-gray-900 flex items-center gap-2">Czym jest paid social <ArrowRight className="w-4 h-4" aria-hidden="true" /></span>
                <span className="block text-gray-700 mt-2">Pojęcia i zasady planowania płatnej promocji w mediach społecznościowych.</span>
              </Link>
            </div>
          </section>
        </div>

        <aside className="bg-gray-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Chcesz zweryfikować plan kampanii?</h2>
            <p className="text-gray-300 mb-8 text-lg">Możemy omówić Twoją ścieżkę konwersji, pomiar i zakres testów. Bez gwarancji wyniku i bez sztywnego cennika przed poznaniem potrzeb.</p>
            <Link to="/kontakt" className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg transition">Przejdź do kontaktu</Link>
          </div>
        </aside>
      </article>
    </Layout>
  );
}
