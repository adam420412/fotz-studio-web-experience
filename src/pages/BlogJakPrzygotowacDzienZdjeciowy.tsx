import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile trwa dzień zdjęciowy?",
    answer:
      "Zazwyczaj jeden pełny dzień roboczy, w trakcie którego nagrywamy materiał na całą serię 10 rolek według wcześniej ustalonego harmonogramu ujęć.",
  },
  {
    question: "Czy pracownicy muszą występować przed kamerą?",
    answer:
      "Nie, część rolek można nagrać bez udziału pracowników, na przykład pokazując produkty, procesy albo wnętrze firmy. Jeśli ktoś jednak wystąpi, potrzebna jest jego zgoda na wizerunek.",
  },
  {
    question: "Co jeśli nie mamy pomysłów na treści i scenariusze?",
    answer:
      "To normalna sytuacja. Scenariusze przygotowujemy dla Ciebie minimum 2 tygodnie przed sesją i przechodzą przez Twoją akceptację, zanim ruszy dzień zdjęciowy.",
  },
  {
    question: "Czy dojeżdżacie poza Poznań?",
    answer:
      "Tak, realizujemy sesje w całej Polsce, niezależnie od tego, czy to sklep, zakład produkcyjny czy biuro.",
  },
];

const CANONICAL = "https://fotz.pl/blog/jak-przygotowac-dzien-zdjeciowy";

export default function BlogJakPrzygotowacDzienZdjeciowy() {
  return (
    <Layout>
      <SEOHead
        title="Jak przygotować firmę do dnia zdjęciowego: checklist"
        description="Sesja u Ciebie w firmie? Sprawdź checklist na dzień zdjęciowy i nagraj 10 rolek w jeden dzień bez chaosu i przestojów w pracy."
        canonical={CANONICAL}
        keywords="dzień zdjęciowy, checklist sesja zdjęciowa, produkcja rolek, sesja video w firmie, przygotowanie do nagrań"
      />
      <ArticleSchema
        title="Jak przygotować firmę do dnia zdjęciowego: checklist"
        description="Checklist przygotowania firmy do dnia zdjęciowego. Jak nagrać serię 10 rolek w jeden dzień bez chaosu i przestojów w pracy."
        url={CANONICAL}
        datePublished="2026-07-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Jak przygotować dzień zdjęciowy", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Jak przygotować dzień zdjęciowy", url: "/blog/jak-przygotowac-dzien-zdjeciowy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Rolki i TikTok
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jak przygotować firmę do dnia zdjęciowego: checklist
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Sesja u Ciebie w firmie? Sprawdź checklist na dzień zdjęciowy i nagraj 10 rolek w jeden dzień bez chaosu i przestojów w pracy.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Sesja zdjęciowa u klienta to nie tylko ustawienie kamery i światła. To dzień, w którym trzeba pogodzić normalną pracę firmy z nagraniami, tak żeby nikt nikomu nie wchodził w drogę. Dobre przygotowanie decyduje o tym, czy w jeden dzień zdjęciowy powstanie komplet 10 gotowych rolek, czy połowa czasu zejdzie na szukanie gniazdka i pytanie kto akurat ma chwilę na kamerę. Ten wpis to checklist, który wysyłamy klientom przed każdą sesją, żeby dzień zdjęciowy przebiegł sprawnie, bez chaosu i bez stresu.
          </p>

          <h2>Co przygotować przed sesją</h2>
          <p>
            Zanim ekipa wejdzie do sklepu, zakładu czy biura, warto ustalić kilka rzeczy na spokojnie, najlepiej tydzień przed. Po pierwsze: scenariusze. Jeśli pracujecie z FOTZ, dostajecie je do akceptacji z wyprzedzeniem, więc w dniu zdjęciowym nikt nie zastanawia się co powiedzieć. Po drugie: lista osób, które wystąpią przed kamerą, razem z ich dostępnością tego dnia. Po trzecie: lista produktów, materiałów albo procesów, które chcecie pokazać. Po czwarte: dostęp do pomieszczeń, w tym tych zwykle zamkniętych dla klientów, jak zaplecze czy hala produkcyjna. Im więcej ustalicie wcześniej, tym mniej improwizacji na miejscu.
          </p>

          <h2>Checklist dnia zdjęciowego krok po kroku</h2>
          <p>
            Oto pełna lista rzeczy do sprawdzenia przed dniem zdjęciowym. Warto przejść przez nią dzień lub dwa przed sesją, nie w ostatniej chwili.
          </p>
          <ul>
            <li><strong>Uprzedź zespół.</strong> Poinformuj wszystkich pracowników, którzy będą na miejscu, że w danym dniu odbywa się sesja. Nikt nie lubi niespodziewanej kamery przy swoim stanowisku pracy.</li>
            <li><strong>Przygotuj miejsce.</strong> Posprzątaj przestrzeń, która pojawi się w kadrze, usuń zbędne kartony, kable i bałagan. W sklepie zadbaj o pełne półki, w zakładzie produkcyjnym o czyste stanowiska, w biurze o uporządkowane biurka.</li>
            <li><strong>Zadbaj o ubiór.</strong> Osoby występujące przed kamerą powinny mieć na sobie firmowe ubrania robocze albo schludny, jednolity strój, bez krzykliwych wzorów, które migają na ekranie.</li>
            <li><strong>Wybierz produkty i rekwizyty.</strong> Przygotuj konkretne produkty, próbki albo narzędzia, które mają się pojawić w kadrze, najlepiej w kilku wariantach na wypadek zmiany planu.</li>
            <li><strong>Zbierz zgody na wizerunek.</strong> Jeśli w kadrze pojawią się pracownicy, potrzebna jest ich pisemna zgoda na wykorzystanie wizerunku w materiałach marketingowych firmy.</li>
            <li><strong>Ustal harmonogram dnia.</strong> Rozpisz orientacyjne godziny: rozładunek sprzętu, pierwsze ujęcia, przerwa, kolejne sceny, pakowanie. Dzięki temu zespół wie, kiedy spodziewać się ekipy przy danym stanowisku.</li>
            <li><strong>Wyznacz osobę kontaktową.</strong> Jedna osoba z Twojej firmy powinna być dostępna cały dzień, żeby otwierać drzwi, odpowiadać na pytania i podejmować drobne decyzje na miejscu.</li>
          </ul>

          <h2>Jak wygląda dzień zdjęciowy z FOTZ</h2>
          <p>
            Cały proces zaczynamy dużo wcześniej niż w dniu nagrania. Scenariusze do wszystkich 10 rolek przygotowujemy minimum 2 tygodnie przed sesją i przechodzą przez akceptację klienta, więc w dniu zdjęciowym pracujemy z gotowym planem, a nie z pustą kartką.
          </p>
          <p>
            Sam dzień zdjęciowy to jedna, skondensowana sesja, w trakcie której nagrywamy materiał na całą serię 10 rolek. Ekipa przyjeżdża na miejsce, do sklepu, zakładu produkcyjnego albo biura, ze sprzętem, oświetleniem i mikrofonami, i pracuje według wcześniej ustalonego harmonogramu ujęć.
          </p>
          <p>
            Po sesji materiał trafia do montażu. Każda rolka wraca z napisami, dopasowanym tempem i formatem pod social media. Do każdego zestawu przewidujemy 2 rundy poprawek, żeby finalne wersje odpowiadały dokładnie temu, co chcieliście pokazać. Cały proces, od scenariusza przez zdjęcia po gotowy montaż, prowadzimy tak, żeby po Twojej stronie było jak najmniej pracy poza samym dniem nagrania.
          </p>

          <h2>Ile kosztuje seria rolek nagrana w jeden dzień</h2>
          <p>
            Cennik jest prosty. Seria 10 rolek nagrana w 1 dzień zdjęciowy kosztuje 12 000 zł netto. Cena obejmuje scenariusze, cały dzień zdjęciowy na miejscu u Ciebie, montaż z napisami i 2 rundy poprawek do każdej rolki. Jeśli potrzebujesz mniejszego zakresu, pojedyncza rolka jest dostępna od 1 900 zł netto.
          </p>
          <p>
            Jeśli zastanawiasz się, co dokładnie wchodzi w tę kwotę i jak wygląda wycena w innych wariantach, sprawdź osobny wpis:{" "}
            <Link to="/blog/ile-kosztuje-rolka-dla-firmy" className="text-[#75143F] underline">
              ile kosztuje rolka dla firmy
            </Link>
            , gdzie rozkładamy cennik na czynniki pierwsze.
          </p>
          <p>
            Dla porównania, prowadzimy w całości Instagram Enea Stadionu, a nasze materiały mają 3 mln plus wyświetleń miesięcznie, więc wiemy, jak zaplanować jeden dzień zdjęciowy tak, żeby dało się z niego wycisnąć komplet treści na cały miesiąc publikacji.
          </p>

          <h2>Dlaczego seria 10 rolek, a nie pojedyncze nagrania</h2>
          <p>
            Pojedyncza rolka zdjęciowa nagrana raz na jakiś czas rzadko buduje realny zasięg. Algorytmy social media premiują regularność, a widzowie zapamiętują markę dopiero po kilku kontaktach z jej treścią. Jeden dzień zdjęciowy, w którym powstaje komplet 10 rolek, daje Ci materiał na 2 do 3 miesięcy publikacji, bez konieczności organizowania kolejnej sesji co tydzień.
          </p>
          <p>
            To też oszczędność czasu po Twojej stronie. Zamiast angażować zespół i zamykać część sklepu czy hali produkcyjnej kilka razy w miesiącu, robicie to raz, porządnie zaplanowane, i macie spokój na dłużej. Dla firmy produkcyjnej czy sklepu stacjonarnego to konkretna różnica organizacyjna, nie tylko kwestia budżetu.
          </p>

          <h2>Najczęstsze błędy firm przed sesją</h2>
          <p>
            Najczęstszy błąd to brak wyznaczonej osoby kontaktowej na dzień zdjęciowy. Bez niej ekipa traci czas na szukanie kogoś, kto podejmie decyzję albo otworzy zamknięte pomieszczenie.
          </p>
          <p>
            Drugi błąd to nieuprzedzeni pracownicy. Zaskoczona kamerą osoba na hali albo w sklepie często blokuje się przed obiektywem, co wydłuża nagrania i pogarsza jakość materiału.
          </p>
          <p>
            Trzeci błąd to brak przygotowanego miejsca. Bałagan w tle, niepełne półki albo kable widoczne w kadrze wymagają dodatkowego czasu na poprawki na miejscu, którego często brakuje w napiętym harmonogramie dnia.
          </p>
          <p>
            Czwarty, dość częsty błąd, to oczekiwanie, że scenariusz powstanie spontanicznie w dniu zdjęciowym. Bez wcześniej przygotowanego planu ujęć sesja rozciąga się w czasie, a efekt bywa przypadkowy zamiast spójny.
          </p>

          <h2>Jakie efekty biznesowe daje jeden dzień zdjęciowy</h2>
          <p>
            Firmy, z którymi pracujemy, w tym Żabka, WSB Merito, Zakłady Cegielskiego czy FPS, traktują rolki jako stały element komunikacji, nie jednorazową akcję. Regularna obecność w social media przekłada się na rozpoznawalność marki wśród klientów i kandydatów do pracy, większy ruch na profilach firmowych i częstsze pytania od potencjalnych klientów, którzy widzieli materiał zanim jeszcze skontaktowali się z firmą.
          </p>
          <p>
            Dla właściciela sklepu czy zakładu produkcyjnego liczy się efekt, nie liczba wyświetleń sama w sobie. Dlatego jeden dobrze zaplanowany dzień zdjęciowy, z gotowymi scenariuszami i przemyślanym montażem, daje więcej niż kilka przypadkowych nagrań telefonem rozłożonych w czasie.
          </p>

          <h2>FAQ</h2>
          <div className="not-prose space-y-4 my-6">
            {faqItems.map((f) => (
              <div key={f.question} className="rounded-xl border border-gray-200 p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>

          <div className="not-prose mt-12 rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Zaplanujmy Twój dzień zdjęciowy
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby policzyć koszt serii pod Twoją firmę.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-semibold hover:bg-white/90 transition-colors"
              >
                Darmowa rolka
              </Link>
              <Link
                to="/konsultacja"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Umów konsultację 15 min
              </Link>
            </div>
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}