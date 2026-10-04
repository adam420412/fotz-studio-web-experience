import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy obsługujecie firmy spoza Poznania?",
    answer: "Tak — na co dzień pracujemy z klientami z całej Wielkopolski, a przy większych projektach video obsługujemy klientów w całej Polsce.",
  },
  {
    question: "Czy przyjeżdżacie na nagrania do firmy?",
    answer: "Możemy zaplanować nagrania w siedzibie firmy. Miejsce, termin, zakres i potrzebny sprzęt ustalamy przed realizacją.",
  },
  {
    question: "Czy łączycie social media ze stroną www?",
    answer: "Tak. Zakres może połączyć komunikację w social media ze stroną docelową, SEO i pomiarem. Poszczególne zadania oraz sposób oceny efektów ustalamy w ofercie.",
  },
];

const CANONICAL = "https://www.fotz-studio.pl/blog/agencja-social-media-poznan";

export default function BlogAgencjaSocialMediaPoznan() {
  return (
    <Layout>
      <SEOHead
        title="Agencja social media Poznań — jak wybrać (poradnik 2026)"
        description="Szukasz agencji social media w Poznaniu? Sprawdź, o co pytać, ile to kosztuje i dlaczego warto wybrać ekipę z własnym studiem produkcji video."
        canonical={CANONICAL}
        keywords="agencja social media Poznań, agencja social media Wielkopolska, prowadzenie social media Poznań, produkcja video Poznań"
      />
      <ArticleSchema
        title="Agencja social media Poznań: jak wybrać i na co uważać (poradnik 2026)"
        description="Praktyczny poradnik wyboru agencji social media w Poznaniu — na co zwracać uwagę, ile to kosztuje i jakie pytania zadać przed podpisaniem umowy."
        url={CANONICAL}
        datePublished="2026-07-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
          { name: "Agencja social media Poznań", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Agencja social media Poznań", url: "/blog/agencja-social-media-poznan" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Agencja social media Poznań: jak wybrać i na co uważać (poradnik 2026)
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Porównaj zakres prac, jakość realizacji i sposób raportowania. Zobacz, jakie pytania pomogą Ci wybrać zespół dopasowany do Twojej firmy.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Wybór agencji zacznij od celu: regularnej komunikacji, produkcji materiałów, zapytań albo sprzedaży.
            Jeśli szukasz wykonawcy, sprawdź <Link to="/agencja-social-media/poznan">zakres prowadzenia social media w Poznaniu</Link>.
            Poniżej znajdziesz kryteria, które pomogą porównać oferty.
          </p>
          <h2>Po czym poznać dobrze przygotowaną ofertę?</h2>
          <ul>
            <li><strong>Konkretny zakres:</strong> kanały, liczba i rodzaje materiałów, moderacja oraz obsługa reklam.</li>
            <li><strong>Realizacje z opisem udziału agencji:</strong> sprawdź, czy zespół odpowiadał za pomysł, produkcję, publikację czy kampanię.</li>
            <li><strong>Proces akceptacji:</strong> kto zatwierdza materiały, ile jest poprawek i jak wygląda harmonogram.</li>
            <li><strong>Pomiar:</strong> co będzie mierzone, skąd pochodzą dane i jak zostaną ocenione zapytania od klientów.</li>
          </ul>
          <h2>Jak sprawdzić portfolio?</h2>
          <p>
            Obejrzyj materiały w formatach, które chcesz zamawiać: rolki, zdjęcia, reklamy lub dłuższe filmy.
            Poproś o wyjaśnienie celu i zakresu projektu. Wynik liczbowy powinien mieć wskazany okres,
            źródło danych i kontekst wydatków. Nasze prace znajdziesz w <Link to="/realizacje">portfolio FOTZ Studio</Link>.
          </p>
          <h2>Co wpływa na koszt social media w Poznaniu?</h2>
          <p>
            Porównuj tę samą liczbę kanałów i materiałów. Na wycenę wpływają także nagrania,
            montaż, teksty, moderacja oraz raportowanie. Budżet płacony platformie reklamowej
            powinien być oddzielony od wynagrodzenia za obsługę.
          </p>
          <p>
            Zobacz <Link to="/agencja-social-media/cennik">jak przygotować brief do wyceny social media</Link>.
            Wpisz w nim cel, linki do profili, dostępne materiały, planowany zakres i ograniczenia budżetowe.
          </p>
          <h2>Pytania przed rozpoczęciem współpracy</h2>
          <ul>
            <li>Kto przygotowuje materiały i kontaktuje się z moją firmą?</li>
            <li>Jak planujemy nagrania w Poznaniu lub dojazd do siedziby firmy?</li>
            <li>Jakie dostępy są potrzebne i kto pozostaje właścicielem kont?</li>
            <li>Co obejmują poprawki i jak wyceniamy dodatkowe prace?</li>
            <li>Jakie są zasady zakończenia współpracy i przekazania materiałów?</li>
          </ul>
          <h2>Przygotuj się do pierwszej rozmowy</h2>
          <p>
            Wybierz przykłady treści, opisz odbiorców i wskaż jeden najważniejszy cel.
            Informacje o projekcie zbierzesz w <Link to="/generator-briefu">generatorze briefu</Link>.
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
              Porozmawiajmy o zakresie współpracy
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Sprawdź, jak pracuje agencja social media z Poznania, zanim zdecydujesz o współpracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/konsultacja"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-semibold hover:bg-white/90 transition-colors"
              >
                Umów konsultację 15 min
              </Link>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Prześlij brief
              </Link>
            </div>
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}