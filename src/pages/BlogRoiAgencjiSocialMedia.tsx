import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Po jakim czasie widać efekty współpracy z agencją social media?",
    answer:
      "Pierwsze widoczne zmiany, czyli poprawa jakości treści i wzrost zaangażowania, pojawiają się zwykle po 4-6 tygodniach. Konkretne efekty biznesowe, czyli realny wzrost liczby zapytań, warto liczyć w perspektywie 2-3 miesięcy, bo social media buduje zaufanie stopniowo, nie z dnia na dzień.",
  },
  {
    question: "Czy przy małym budżecie marketingowym w ogóle ma to sens?",
    answer:
      "Tak, o ile budżet pozwala na systematyczność. Pakiet START za 2 500 zł miesięcznie to dobry punkt startowy dla mniejszych firm, które chcą uporządkować social media bez zatrudniania własnego specjalisty. Kluczowe jest realistyczne oczekiwanie tempa wyników, nie sama wysokość budżetu.",
  },
  {
    question: "Jak liczyć koszt pozyskania leada z social media?",
    answer:
      "Koszt agencji w danym miesiącu dzielisz przez liczbę zapytań i leadów, które w tym miesiącu przyszły z social media. Jeśli koszt to 5 000 zł, a leadów było 20, koszt jednego leada wynosi 250 zł. Tę liczbę warto śledzić miesiąc do miesiąca, żeby widzieć trend.",
  },
  {
    question: "Czy agencja zastępuje wewnętrzny dział marketingu?",
    answer:
      "Nie. Agencja wspiera i odciąża zespół marketingu, na przykład przejmując produkcję treści i bieżące prowadzenie social media, ale strategię najlepiej ustalać razem ze specjalistą marketingu w firmie, który zna markę od środka. Agencja to partner zespołu, nie jego zamiennik.",
  },
];

const CANONICAL = "https://fotz.pl/blog/roi-agencji-social-media";

export default function BlogRoiAgencjiSocialMedia() {
  return (
    <Layout>
      <SEOHead
        title="Kiedy agencja social media się opłaca: policzmy ROI"
        description="Zastanawiasz się, czy agencja social media się zwróci? Sprawdź prosty wzór na ROI i policz przykład na pakiecie WZROST."
        canonical={CANONICAL}
        keywords="ROI agencja social media, kiedy agencja social media się opłaca, koszt leada social media, pakiet WZROST, zwrot z inwestycji marketing"
      />
      <ArticleSchema
        title="Kiedy agencja social media się opłaca: policzmy ROI"
        description="Prosty wzór na ROI z agencji social media i przykładowy rachunek na pakiecie WZROST. Kiedy współpraca się opłaca, a kiedy nie."
        url={CANONICAL}
        datePublished="2026-07-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "ROI agencji social media", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "ROI agencji social media", url: "/blog/roi-agencji-social-media" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kiedy agencja social media się opłaca: policzmy ROI
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zastanawiasz się, czy agencja social media się zwróci? Sprawdź prosty wzór na ROI i policz przykład na pakiecie WZROST.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Widzisz fakturę za agencję social media i zadajesz sobie jedno pytanie: czy to się w ogóle zwróci. Dobra wiadomość: to policzalne, nie trzeba wierzyć na słowo w zasięgi i polubienia. W tym wpisie pokazujemy prosty wzór na ROI i liczymy go na konkretnym przykładzie, żebyś mógł zrobić to samo z własnymi liczbami.
          </p>

          <h2>Co naprawdę kupujesz w abonamencie agencji</h2>
          <p>
            Kiedy płacisz agencji miesięczny abonament, nie kupujesz postów. Kupujesz system: kogoś, kto codziennie myśli o Twoim social media, planuje treści, reaguje na trendy, analizuje wyniki i poprawia strategię. Kupujesz też swój własny czas, którego nie musisz poświęcać na naukę Reelsów, walkę z algorytmem czy szukanie freelancera na zdjęcia produktowe.
          </p>
          <p>
            Kupujesz też konsekwencję. Największym zabójcą wyników w social media nie jest zła kreacja, tylko brak systematyczności: dwa tygodnie intensywnej pracy, potem cisza na miesiąc, potem znowu zryw. Agencja eliminuje ten problem, bo to jej codzienna robota, nie zadanie na boku między fakturami a kadrami.
          </p>
          <p>
            W FOTZ Studio prowadzimy w całości Instagram Enea Stadionu i generujemy ponad 3 miliony wyświetleń miesięcznie na kontach, którymi się opiekujemy, więc wiemy, że skala i regularność to nie przypadek, tylko efekt procesu.
          </p>

          <h2>Prosty wzór na ROI, bez tabelek excelowych w głowie</h2>
          <p>
            ROI, czyli zwrot z inwestycji, w social media liczysz tak samo jak w każdym innym kanale marketingowym. Wzór słownie: od przychodu, jaki wygenerowały leady pozyskane dzięki social media, odejmujesz koszt agencji, a wynik dzielisz przez koszt agencji. Zapis: <strong>ROI = (przychód z leadów z social media minus koszt agencji) / koszt agencji</strong>. Wynik pomnożony razy 100 procent mówi Ci, ile złotych zwrotu masz na każdą złotówkę wydaną na agencję.
          </p>
          <p>
            Jeśli ROI wychodzi 0, jesteś na zero: wydajesz tyle, ile zarabiasz z tego kanału. Jeśli wychodzi 1,4, czyli 140 procent, na każdą złotówkę kosztu masz dodatkowo 1,40 zł zwrotu ponad sam koszt. Cały trik polega na tym, żeby uczciwie policzyć przychód z leadów: ile zapytań przyszło z social media, ile z nich zamieniło się w klientów i ile faktycznie na nich zarobiłeś, nie tylko ile sprzedałeś.
          </p>

          <h2>Przykładowy rachunek na pakiecie WZROST</h2>
          <p>
            Weźmy pakiet WZROST za 5 000 zł miesięcznie i policzmy to na liczbach. To tylko przykład, Twoje liczby będą inne, zależą od branży, marży i tego, jak wygląda Twój proces sprzedaży.
          </p>
          <p>
            Załóżmy, że dzięki systematycznemu social media dostajesz dodatkowo 20 zapytań miesięcznie, których wcześniej nie było. Załóżmy konwersję na poziomie 20 procent, czyli 4 nowych klientów miesięcznie. Załóżmy też przykładowo średnią marżę na kliencie na poziomie 3 000 zł, u Ciebie może to być 500 zł albo 15 000 zł, zależnie od tego, co sprzedajesz.
          </p>
          <p>
            Przychód z leadów: 4 klientów razy 3 000 zł, czyli 12 000 zł miesięcznie. Teraz wzór: <strong>ROI = (12 000 zł minus 5 000 zł) / 5 000 zł</strong>, czyli 7 000 zł / 5 000 zł, co daje 1,4, czyli 140 procent. Innymi słowy: na każdą złotówkę wydaną na agencję wraca do Ciebie dodatkowo 1,40 zł zysku ponad sam koszt.
          </p>
          <p>
            Jeśli Twoja konwersja albo marża są niższe, wynik spadnie, jeśli wyższe, wynik urośnie, dlatego warto wstawić własne liczby do tego samego wzoru zamiast wierzyć cudzemu przykładowi. Więcej o tym, ile kosztuje agencja social media i jak wyglądają poszczególne pakiety, przeczytasz w osobnym wpisie:{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              ile kosztuje agencja social media
            </Link>
            .
          </p>

          <h2>Agencja, etat czy samemu: trzy drogi do wyboru</h2>
          <p>
            Masz trzy opcje, żeby ogarnąć social media w firmie, i każda ma inny koszt, nie tylko ten widoczny na fakturze.
          </p>
          <p>
            <strong>Etat specjalisty social media</strong> to koszt pracodawcy rzędu kilku-kilkunastu tysięcy złotych miesięcznie, do tego dochodzi czas i koszt rekrutacji, urlopy, zwolnienia, szkolenia i ryzyko rotacji, bo dobry specjalista jest poszukiwany i prędzej czy później dostanie lepszą ofertę. Do tego jedna osoba rzadko ogarnia całość: strategię, montaż wideo, grafiki, płatne kampanie i analitykę, więc często i tak dokładasz freelancerów.
          </p>
          <p>
            <strong>Agencja</strong>, czyli pakiety typu FOTZ, to stały, przewidywalny koszt miesięczny: 2 500 zł w pakiecie START, 5 000 zł w pakiecie WZROST albo 8 000-9 000 zł w pakiecie PARTNER, za cały zespół: strategię, produkcję, montaż i raportowanie, bez kosztów rekrutacji i bez przestoju, gdy ktoś idzie na urlop.
          </p>
          <p>
            <strong>Trzecia opcja to zrobić to samemu</strong>, po godzinach, jako właściciel. Wygląda na darmowe, ale nie jest. Twój czas ma wartość, a każda godzina spędzona na nagrywaniu rolek to godzina, której nie poświęcasz na sprzedaż, obsługę klienta czy rozwój firmy. Do tego samodzielne social media prowadzone między jednym a drugim zwykle kończy się brakiem systematyczności, czyli dokładnie tym, co najbardziej szkodzi wynikom.
          </p>

          <h2>Kiedy agencja się NIE opłaca, mówimy to wprost</h2>
          <p>
            Uczciwie: agencja social media nie zawsze się opłaca, i lepiej wiedzieć to przed podpisaniem umowy niż po trzech miesiącach rozczarowania.
          </p>
          <p>
            Po pierwsze, jeśli w firmie nie masz mocy przerobowych, żeby obsłużyć napływające zapytania, bo dział sprzedaży jest już przeciążony albo produkcja nie nadąża, to leady z social media po prostu się zmarnują, a Ty zapłacisz za ruch, którego nikt nie odbierze.
          </p>
          <p>
            Po drugie, jeśli Twój produkt albo usługa mają zbyt niską marżę, żeby wchłonąć koszt marketingu, na przykład sprzedajesz coś po bardzo niskiej cenie jednostkowej bez sensownego dosprzedawania, rachunek ROI może nigdy nie wyjść na plus, niezależnie od jakości treści.
          </p>
          <p>
            Po trzecie, jeśli oczekujesz efektów w tydzień, agencja się nie opłaci, bo social media buduje wyniki tygodniami i miesiącami, nie dniami, a niecierpliwość kończy się rezygnacją dokładnie w momencie, w którym proces zaczyna działać.
          </p>
          <p>
            Jeśli rozpoznajesz swoją firmę w którymkolwiek z tych punktów, najpierw popracuj nad tym u siebie, dopiero potem wracaj do rozmowy o agencji.
          </p>

          <h2>Jak mierzyć wyniki co miesiąc, żeby nie zgadywać</h2>
          <p>
            Dobry raport miesięczny od agencji nie kończy się na zasięgach i polubieniach, powinien odpowiadać na pytanie, ile to nam realnie przyniosło. W raporcie powinny znaleźć się: liczba zapytań i leadów pozyskanych z social media, koszt pozyskania jednego leada, konwersja leadów na klientów, a docelowo też szacowany przychód z tych klientów.
          </p>
          <p>
            Koszt leada liczysz prosto: koszt agencji w danym miesiącu dzielisz przez liczbę leadów, które w tym miesiącu przyszły z social media. Jeśli pakiet WZROST kosztuje 5 000 zł, a w danym miesiącu przyszło 20 zapytań, koszt jednego leada to 250 zł, i to jest liczba, którą możesz porównywać miesiąc do miesiąca, żeby widzieć, czy proces się poprawia.
          </p>
          <p>
            Poza liczbami warto patrzeć też na jakość leadów, bo 10 zapytań od realnie zainteresowanych klientów jest więcej warte niż 50 przypadkowych wiadomości, które nigdy się nie zamienią w sprzedaż. Jeśli agencja nie potrafi pokazać Ci tych liczb i tłumaczy wyniki wyłącznie zasięgami, to sygnał, że rozliczacie się z niewłaściwych rzeczy.
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
              Policzmy ROI dla Twojej firmy
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby policzyć potencjalny zwrot z pakietu pod Twoje liczby.
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