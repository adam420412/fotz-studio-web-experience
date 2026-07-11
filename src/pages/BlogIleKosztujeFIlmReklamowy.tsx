import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile kosztuje film reklamowy dla firmy?",
    answer:
      "Pojedynczy film zaczyna się od 1 900 zł netto. Dzień zdjęciowy z serią 10 gotowych materiałów to 12 000 zł netto, czyli 1 200 zł za film.",
  },
  {
    question: "Czy w cenie są poprawki?",
    answer:
      "Tak. Do każdego materiału wliczone są dwie rundy poprawek, montaż, napisy, grafiki i pliki gotowe do publikacji.",
  },
  {
    question: "Czy budżet reklamowy jest w cenie produkcji?",
    answer:
      "Nie. Koszt emisji w Meta lub Google Ads jest po stronie klienta i liczymy go osobno od produkcji filmu.",
  },
  {
    question: "Co się bardziej opłaca: jeden film czy seria?",
    answer:
      "Przy regularnej obecności w social mediach seria z jednego dnia zdjęciowego ma najniższy koszt jednostkowy i daje zapas treści na kilka tygodni.",
  },
  {
    question: "Jak szybko dostanę gotowe materiały?",
    answer:
      "Po dniu zdjęciowym montujemy i dostarczamy komplet plików gotowych do publikacji. Dokładny termin ustalamy na starcie projektu.",
  },
];

const CANONICAL = "https://fotz.pl/blog/ile-kosztuje-film-reklamowy";

export default function BlogIleKosztujeFIlmReklamowy() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje film reklamowy dla firmy"
        description="Ile kosztuje film reklamowy dla firmy w 2026? Pojedynczy film od 1 900 zł, dzień zdjęciowy z serią 10 rolek 12 000 zł. Sprawdź, co wpływa na cenę i jak nie przepłacić."
        canonical={CANONICAL}
        keywords="ile kosztuje film reklamowy, cennik filmu reklamowego, produkcja video cennik, film reklamowy dla firmy, koszt spotu reklamowego"
      />
      <ArticleSchema
        title="Ile kosztuje film reklamowy dla firmy"
        description="Ile kosztuje film reklamowy dla firmy w 2026? Pojedynczy film od 1 900 zł netto, dzień zdjęciowy z serią 10 rolek 12 000 zł netto. Sprawdź, co wpływa na cenę."
        url={CANONICAL}
        datePublished="2026-07-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Ile kosztuje film reklamowy", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Ile kosztuje film reklamowy", url: "/blog/ile-kosztuje-film-reklamowy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Wideo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ile kosztuje film reklamowy dla firmy
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Najkrótsza odpowiedź: pojedynczy film reklamowy zaczyna się u nas od 1 900 zł netto, a pełny dzień zdjęciowy, z którego wychodzi seria 10 gotowych materiałów, to 12 000 zł netto.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Najkrótsza odpowiedź: pojedynczy film reklamowy zaczyna się u nas od <strong>1 900 zł netto</strong>, a pełny dzień zdjęciowy, z którego wychodzi seria 10 gotowych materiałów, to <strong>12 000 zł netto</strong>. Reszta zależy od tego, co dokładnie chcesz pokazać i gdzie ten film ma pracować. Poniżej rozkładamy cenę na czynniki, żebyś wiedział, za co płacisz i kiedy warto dołożyć, a kiedy nie.
          </p>

          <h2>Co wpływa na cenę filmu reklamowego</h2>
          <p>
            Cztery rzeczy robią największą różnicę w wycenie.
          </p>
          <ul>
            <li><strong>Liczba materiałów.</strong> Jeden film to jedna cena. Ale jeśli i tak wchodzisz na plan, taniej wyjdzie nagrać od razu kilkanaście ujęć i zmontować z nich serię niż wracać co miesiąc.</li>
            <li><strong>Dzień zdjęciowy.</strong> Ekipa, sprzęt, światło i dźwięk kosztują tyle samo, czy nagrywasz jeden film, czy dziesięć. Dlatego seria zawsze ma niższy koszt jednostkowy.</li>
            <li><strong>Scenariusz i koncepcja.</strong> Prosty film produktowy jest tańszy niż spot z aktorem, lokalizacją i rozpisanym scenariuszem. W serii warsztat kreatywny, persony, język, filary i koncepty dostajesz gratis.</li>
            <li><strong>Postprodukcja.</strong> Montaż, napisy, grafiki i pliki gotowe do publikacji są już w cenie. Dwie rundy poprawek na materiał też.</li>
          </ul>

          <h2>Cennik produkcji wideo w FOTZ Studio</h2>
          <p>
            Nasze stawki są proste i jawne.
          </p>
          <ul>
            <li><strong>Pojedynczy film lub rolka: od 1 900 zł netto.</strong> Dobre, gdy potrzebujesz jednego mocnego materiału na konkretną kampanię.</li>
            <li><strong>Seria 10 rolek z 1 dnia zdjęciowego: 12 000 zł netto.</strong> To <strong>1 200 zł</strong> za gotowy film, czyli najniższy koszt jednostkowy. W pakiecie: koncepcje, scenariusze, zdjęcia, sprzęt, dźwięk, montaż, napisy, grafiki i pliki do publikacji.</li>
            <li><strong>Abonament PARTNER: 8 000 do 9 000 zł/mc.</strong> Gdy chcesz stały dopływ materiałów: 4 rolki miesięcznie, SEO on going, strategia kwartalna i priorytet w kolejce.</li>
          </ul>
          <p>
            Budżet na promocję filmu w Meta czy Google Ads jest po Twojej stronie i liczymy go osobno od produkcji.
          </p>

          <h2>Jeden film czy seria: co się bardziej opłaca</h2>
          <p>
            Jeśli masz jednorazową potrzebę, na przykład film na targi albo do oferty, weź pojedynczą produkcję. Jeśli planujesz regularną obecność w social mediach, seria z jednego dnia zdjęciowego jest po prostu tańsza w przeliczeniu na materiał i daje Ci zapas treści na kilka tygodni.
          </p>
          <p>
            W praktyce większość firm, z którymi pracujemy, zaczyna od serii, bo dostaje od razu bank materiałów zamiast jednego klipu, który szybko się zużywa.
          </p>

          <h2>Dlaczego my</h2>
          <p>
            Prowadzimy w całości Instagram Enea Stadionu, a nasze materiały robią <strong>ponad 3 mln wyświetleń miesięcznie</strong>. Realizowaliśmy produkcje m.in. dla <strong>Żabki</strong>, <strong>WSB Merito</strong>, <strong>Zakładów Cegielskiego</strong> i <strong>FPS</strong>. Mamy też <strong>ponad 160 opinii Google ze średnią 5.0</strong>.
          </p>
          <p>
            Nie sprzedajemy metryk próżności. Film ma przyciągać uwagę i prowadzić do sprzedaży, a nie tylko ładnie wyglądać.
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
              Darmowa rolka na start
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Nagramy jeden materiał, żebyś zobaczył jakość zanim zdecydujesz o współpracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-semibold hover:bg-white/90 transition-colors"
              >
                Odbierz darmową rolkę
              </Link>
              <Link
                to="/konsultacja"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                Umów konsultację 15 min
              </Link>
            </div>
          </div>

          <div className="not-prose mt-12 rounded-xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Zobacz też:</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog/ile-kosztuje-rolka-dla-firmy" className="text-[#75143F] underline font-medium">
                  Ile kosztuje rolka dla firmy
                </Link>
              </li>
              <li>
                <Link to="/blog/jak-przygotowac-dzien-zdjeciowy" className="text-[#75143F] underline font-medium">
                  Jak przygotować dzień zdjęciowy
                </Link>
              </li>
            </ul>
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}
