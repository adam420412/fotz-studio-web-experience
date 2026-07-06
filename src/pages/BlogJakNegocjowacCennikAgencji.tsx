import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy agencje social media negocjują ceny?",
    answer:
      "Tak, ale negocjacja zwykle dotyczy zakresu prac, nie samej stawki za tę samą usługę; dobra agencja dopasuje pakiet do budżetu.",
  },
  {
    question: "Co bardziej wpływa na cenę, liczba postów czy jakość wideo?",
    answer:
      "Oba elementy mają znaczenie, ale produkcja wideo zwykle waży więcej w cenie niż sama liczba postów graficznych.",
  },
  {
    question: "Czy warto wybrać najtańszą ofertę?",
    answer:
      "Nie automatycznie, bo podejrzanie niska cena często oznacza cięcia w jakości; warto porównywać zakres pracy.",
  },
  {
    question: "Jaka jest różnica między abonamentem a projektem jednorazowym?",
    answer:
      "Abonament to stała comiesięczna obsługa i ciągłość publikacji, a projekt jednorazowy to konkretne działanie bez zobowiązania na kolejne miesiące.",
  },
  {
    question: "Ile kosztuje obsługa social media małej firmy w Polsce?",
    answer:
      "W naszym cenniku podstawowa obsługa zaczyna się od 2 500 zł miesięcznie, a pełna obsługa z produkcją wideo i raportowaniem to 8 000 do 9 000 zł miesięcznie.",
  },
];

const CANONICAL = "https://fotz.pl/blog/jak-negocjowac-cennik-agencji";

export default function BlogJakNegocjowacCennikAgencji() {
  return (
    <Layout>
      <SEOHead
        title="Jak negocjować cennik z agencją social media"
        description="Jak negocjować cennik z agencją social media bez psucia jakości pracy. Co wpływa na cenę, jakie są modele rozliczeń i na co uważać."
        canonical={CANONICAL}
        keywords="negocjacja cennik agencja social media, cennik agencji social media, jak negocjować z agencją, modele rozliczeń agencja"
      />
      <ArticleSchema
        title="Jak negocjować cennik z agencją social media"
        description="Praktyczny przewodnik, jak negocjować cennik z agencją social media: co wpływa na cenę, modele rozliczeń, konkretne progi cenowe i czerwone flagi."
        url={CANONICAL}
        datePublished="2026-07-06"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Jak negocjować cennik z agencją social media", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Jak negocjować cennik z agencją social media", url: "/blog/jak-negocjowac-cennik-agencji" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jak negocjować cennik z agencją social media
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Negocjacje z agencją social media nie muszą kończyć się na pytaniu o rabat. Dobra rozmowa o cenie to rozmowa o zakresie pracy, nie o obcinaniu marży kosztem jakości. Pokazujemy, jak zrobić to uczciwie, z konkretnymi liczbami na stole.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <h2>Jak rozmawiać o cenie z agencją, żeby wyjść na swoje</h2>
          <p>
            Negocjacja ceny to nie licytacja kto pierwszy się złamie, tylko rozmowa o tym, co dokładnie dostajesz za swoje pieniądze.
          </p>
          <p>
            Jeśli podchodzisz partnersko, agencja chętniej dopasuje ofertę, zamiast bronić sztywnego cennika.
          </p>
          <ul>
            <li>Zacznij od jasnego celu, bo <strong>cena bez celu nie ma punktu odniesienia</strong>.</li>
            <li>Pytaj o zakres, nie tylko o kwotę.</li>
            <li>Bądź konkretny co do budżetu, jaki realnie masz.</li>
            <li>Nie porównuj ofert wyłącznie po cenie końcowej, bo dwie oferty za <strong>2 500 zł</strong> mogą oznaczać zupełnie inny zakres pracy.</li>
          </ul>

          <h2>Co realnie wpływa na cenę usług agencji</h2>
          <p>
            Cena nie bierze się z sufitu, składa się z konkretnych elementów.
          </p>
          <ul>
            <li><strong>Zakres prac</strong> (grafika i copy to inny koszt niż pełna produkcja wideo z montażem).</li>
            <li><strong>Liczba materiałów</strong> miesięcznie.</li>
            <li><strong>Produkcja wideo</strong> kontra grafika.</li>
            <li><strong>Częstotliwość publikacji</strong>.</li>
            <li>Strategia oparta na celach.</li>
            <li>Reporting i analiza wyników.</li>
          </ul>
          <p>
            Im więcej z tych elementów wchodzi w usługę, tym wyższa uzasadniona cena.
          </p>

          <h2>Abonament czy rozliczenie projektowe</h2>
          <p>
            Abonament miesięczny sprawdza się, gdy potrzebujesz ciągłości: regularnych publikacji i długofalowej strategii.
          </p>
          <p>
            Rozliczenie projektowe ma sens przy jednorazowych działaniach: kampania premierowa, jedna sesja, konkretny event. Wybór modelu to nie kwestia ceny, tylko tego, czego potrzebujesz.
          </p>
          <p>
            Więcej o tym, jak dobrać model rozliczenia, piszemy we wpisie o{" "}
            <Link to="/blog/modele-rozliczen-agencja-social-media" className="text-[#75143F] underline">
              modelach rozliczeń z agencją social media
            </Link>
            .
          </p>

          <h2>Konkretne progi cenowe z naszego cennika</h2>
          <ul>
            <li><strong>START 2 500 zł/mc</strong> - podstawowa obecność, mniejszy zakres treści.</li>
            <li><strong>WZROST 5 000 zł/mc</strong> - szerszy zakres, więcej materiałów.</li>
            <li><strong>PARTNER 8 000 do 9 000 zł/mc</strong> - pełna obsługa z produkcją wideo, strategią i raportowaniem.</li>
            <li>Pojedyncza rolka <strong>od 1 900 zł</strong> bez abonamentu.</li>
          </ul>
          <p>
            Prawdziwa negocjacja to dopasowanie zakresu do jednego z tych progów, na przykład przejście z PARTNER na WZROST przy mniejszym budżecie, a nie próba wynegocjowania zakresu PARTNER w cenie STARTu.
          </p>
          <p>
            Pełne zestawienie znajdziesz w naszym{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>{" "}
            oraz w opisie{" "}
            <Link to="/blog/pakiety-uslug-agencji-social-media" className="text-[#75143F] underline">
              pakietów usług agencji social media
            </Link>
            .
          </p>

          <h2>Czerwone flagi przy negocjacji</h2>
          <ul>
            <li><strong>Podejrzanie niska cena</strong>, bo zwykle oznacza mniej czasu na montaż, gorszy sprzęt albo brak researchu.</li>
            <li>Brak pisemnej umowy.</li>
            <li>Brak regularnych raportów z wyników.</li>
          </ul>
          <p>
            Dla porównania mamy <strong>ponad 160 opinii Google ze średnią 5.0</strong>, więc różnicę w podejściu do jakości widać od razu.
          </p>

          <h2>Czy w ogóle warto zatrudniać agencję</h2>
          <p>
            Warto, jeśli potrzebujesz regularności, jakości produkcji i czasu, którego sam nie masz. Rozwijamy ten wątek we wpisie o tym,{" "}
            <Link to="/blog/czy-warto-zatrudnic-agencje-social-media" className="text-[#75143F] underline">
              czy warto zatrudnić agencję social media
            </Link>
            .
          </p>

          <div className="not-prose my-12 rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Chcesz wycenę dopasowaną do Twojego budżetu?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby dobrać zakres pod Twój budżet i cele.
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

          <h2>FAQ</h2>
          <div className="not-prose space-y-4 my-6">
            {faqItems.map((f) => (
              <div key={f.question} className="rounded-xl border border-gray-200 p-5 bg-white">
                <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}