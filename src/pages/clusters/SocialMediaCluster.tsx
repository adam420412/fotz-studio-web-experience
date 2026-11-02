import { ServiceEditorial } from "@/components/ServiceEditorial";
import { SEOHead } from "@/components/seo/SEOHead";

const faqs = [
  { question: "Od czego zacząć marketing w social mediach?", answer: "Od oferty i odbiorcy: co sprzedajesz, komu oraz jakie pytania zadaje klient przed zakupem. Następnie sprawdzamy profile, dostępne materiały i sposób obsługi zapytań. Wybieramy kanały, cel oraz zakres pracy, który firma może utrzymać. Nie trzeba uruchamiać wszystkich platform jednocześnie." },
  { question: "Ile kosztuje stała współpraca z FOTZ?", answer: "Podstawowy zakres stałej obsługi marketingowej kosztuje 3 000 zł netto miesięcznie: plan, 4 materiały z istniejących zasobów na maksymalnie 2 profile, jedna zbiorcza runda poprawek, do godziny aktualizacji strony oraz miesięczne podsumowanie i spotkanie do 30 minut. Produkcja zdjęć i filmów, moderacja, obsługa reklam, budżet emisji i SEO wymagają osobnego zakresu oraz wyceny. Ograniczona opieka za 2 000 zł netto obejmuje do 4 godzin pracy łącznie w miesiącu." },
  { question: "Czy mogę zamówić same materiały do publikacji?", answer: "Tak. Możemy przygotować zdjęcia, filmy, grafiki lub teksty, a publikacja może zostać w Twojej firmie. Przed wyceną ustalamy liczbę materiałów, formaty, miejsce nagrań, poprawki i prawa do wykorzystania. Pokazane realizacje dokumentują naszą produkcję; nie są obietnicą określonego wyniku kampanii." },
  { question: "Jak często powinniśmy publikować?", answer: "Częstotliwość wynika z celu i dostępnych materiałów. W podstawowym zakresie stałej obsługi przygotowujemy 4 materiały miesięcznie na maksymalnie 2 profile, łącznie dla uzgodnionych kanałów. Większą liczbę postów, Stories lub rolek wyceniamy oddzielnie. Najpierw ustalamy plan możliwy do regularnego realizowania." },
  { question: "Czy współpraca wymaga wizyt w biurze?", answer: "Obsługujemy firmy zdalnie. Materiały, akceptacje i wyniki omawiamy online. Jeśli projekt wymaga sesji lub nagrań, uzgadniamy miejsce, termin i koszty produkcji. Nie prowadzimy ogólnodostępnego biura ani sieci oddziałów." },
  { question: "Jak oceniacie efekty działań?", answer: "Oddzielamy zasięg i reakcje od wejść na stronę, zapytań oraz sprzedaży. Ustalamy, które dane są dostępne i jak firma oznacza pozyskane kontakty. W raporcie wskazujemy wykonane prace, wyniki i następne decyzje. Nie obiecujemy określonego wzrostu obserwujących ani przychodu." },
];

export default function SocialMediaCluster() {
  return <>
    <SEOHead title="Social media dla firm — usługi i materiały | FOTZ Studio" description="Wybierz zakres: prowadzenie profili, treści, zdjęcia i rolki, strategia lub analiza wyników. Własne realizacje FOTZ, jasne koszty i współpraca zdalna." canonical="https://www.fotz-studio.pl/social-media" />
    <ServiceEditorial
      title="Social media dla firm"
      eyebrow="Plan, materiały i publikacja"
      lead="Potrzebujesz regularnego prowadzenia profili, materiałów dla swojego zespołu czy uporządkowania komunikacji? Wybierz zakres odpowiadający Twojej sytuacji. Łączymy marketing ze zdjęciami i filmami, a odpowiedzialność za każde zadanie ustalamy przed startem."
      path="/social-media"
      enquiryVariant="management"
      workAfterScope
      galleryExcludeHero
      priceNote="Stała obsługa marketingowa: 3 000 zł netto / miesiąc w podstawowym zakresie."
      summary={["Wybieramy cel i kanały na podstawie oferty oraz odbiorców.", "Zapisujemy liczbę materiałów, akceptacje i koszty dodatkowe.", "Oceniamy treści, zapytania i dalszy los kontaktów w firmie."]}
      scopeTitle="Wybierz, czego potrzebuje Twój zespół"
      scope={[
        { title: "Regularne prowadzenie profili", text: "Plan, przygotowanie materiałów, akceptacja i publikacja na wybranych kanałach. Sprawdź konkretny zakres, liczbę treści oraz zasady wyceny dodatkowej pracy.", href: "/social-media/obsluga", link: "Zobacz obsługę social media" },
        { title: "Treści do Twoich kanałów", text: "Masz osobę prowadzącą profile, ale brakuje zdjęć, rolek lub grafik? Uzgadniamy produkcję i przekazujemy materiały do wykorzystania w ustalonych formatach.", href: "/social-media/content", link: "Sprawdź tworzenie treści" },
        { title: "Strategia komunikacji", text: "Gdy publikacje są przypadkowe, zaczynamy od odbiorców, tematów i roli każdego kanału. Plan uwzględnia ofertę, zasoby firmy oraz sposób mierzenia efektów.", href: "/social-media/strategia", link: "Zobacz planowanie komunikacji" },
      ]}
      sections={[
        { title: "Facebook, Instagram czy TikTok?", text: "Dobór platformy zależy od tego, gdzie klienci szukają informacji i jakie materiały możesz regularnie dostarczać. Facebook może porządkować ofertę i zbierać pytania, Instagram pokazywać produkty i realizacje. Zanim dodamy kolejny kanał, ustalamy jego rolę i koszt obsługi.", href: "/social-media/tiktok-biznes", link: "Przeczytaj o TikToku dla firm" },
        { title: "Krótkie filmy: najpierw temat, potem format", text: "Rolki mogą pokazać produkt, przebieg usługi, ludzi lub odpowiedzieć na pytanie klienta. Uzgadniamy scenariusz, ujęcia, napisy, formaty i liczbę gotowych filmów. Nagrania oraz montaż nie są automatycznie częścią podstawowego abonamentu.", href: "/social-media/reels-vs-tiktok", link: "Porównaj Reels i TikToka" },
        { title: "Współpraca z twórcą", text: "Jeśli rozważasz influencer marketing, zacznij od zgodności odbiorców twórcy z ofertą firmy. W briefie trzeba określić materiały, terminy, oznaczenie współpracy, prawa do wykorzystania i sposób pomiaru. Wynagrodzenie twórcy oraz dodatkową koordynację ustalamy osobno.", href: "/social-media/influencer", link: "Sprawdź współpracę z influencerami" },
        { title: "Raport, z którego wynika decyzja", text: "Zasięg pomaga ocenić dystrybucję treści, ale sam nie pokazuje sprzedaży. Łączymy dostępne dane o wejściach i zapytaniach z informacjami od firmy. Wnioski służą zmianie tematu, oferty lub ścieżki kontaktu, a nie tylko prezentowaniu wykresów.", href: "/social-media/analityka", link: "Zobacz analitykę social media" },
        { title: "Obsługa zdalna, produkcja w uzgodnionym miejscu", text: "FOTZ obsługuje firmy z Poznania i innych miast. Planowanie, akceptacje i podsumowania prowadzimy zdalnie. Zdjęcia i filmy realizujemy w miejscu dobranym do projektu; termin oraz koszty dojazdu ustalamy przed potwierdzeniem produkcji.", href: "/agencja-social-media/poznan", link: "Zobacz współpracę dla firm z Poznania" },
        { title: "Co obejmuje miesięczny zakres za 3 000 zł?", text: "To stała obsługa marketingowa z określoną ilością pracy. Przy większym zapotrzebowaniu ustalamy dodatkowy zakres, zamiast pozostawiać otwartą listę zadań.", points: ["Plan i 4 materiały miesięcznie z istniejących zasobów, łącznie na maksymalnie 2 profile.", "Jedna zbiorcza runda poprawek oraz publikacja zaakceptowanych treści.", "Aktualizacje strony do 1 godziny, miesięczne podsumowanie i spotkanie do 30 minut.", "Produkcja foto i wideo, moderacja, obsługa reklam, budżet emisji i SEO: osobny zakres i wycena.", "Opieka za 2 000 zł netto: do 4 godzin pracy łącznie w miesiącu, z zadaniami ustalonymi z góry."] },
      ]}
      faqs={faqs}
      contactLabel="Dobierzmy zakres współpracy"
      contactDescription="Podeślij linki do profili. Napisz, co sprzedajesz, jakie materiały już masz i które zadania chcesz przekazać. Na tej podstawie ustalimy zakres i cenę."
    />
  </>;
}
