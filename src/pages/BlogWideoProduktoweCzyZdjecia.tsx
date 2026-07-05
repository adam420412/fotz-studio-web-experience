import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy nagrywacie poza Poznaniem?",
    answer: "Tak — realizujemy zdjęcia i wideo produktowe w całej Polsce. Dojazd rozliczamy po akceptacji planu i scenariuszy.",
  },
  {
    question: "Czy możemy łączyć zdjęcia i wideo na jednym planie?",
    answer: "Tak. To najbardziej opłacalny wariant — jeden dzień zdjęciowy pokrywa katalog produktowy i serię materiałów video, a klient płaci raz za ekipę, sprzęt i przygotowanie.",
  },
  {
    question: "Ile trwa realizacja?",
    answer: "Standardowo 2–3 tygodnie od briefu do gotowych plików: brief i scenariusze, dzień zdjęciowy, montaż i 2 rundy poprawek.",
  },
  {
    question: "Czy pomagacie ze scenariuszami?",
    answer: "Tak. Scenariusze są w cenie produkcji — dostajesz je minimum 2 tygodnie przed nagraniem do akceptacji.",
  },
];

const CANONICAL = "https://fotz.pl/blog/wideo-produktowe-czy-zdjecia";

export default function BlogWideoProduktoweCzyZdjecia() {
  return (
    <Layout>
      <SEOHead
        title="Wideo produktowe czy zdjęcia? Co naprawdę sprzedaje w B2B"
        description="Porównanie: kiedy wystarczą zdjęcia produktowe, a kiedy wideo produktowe zwraca się wielokrotnie. Z perspektywy handlowców B2B i marketingu producenta."
        canonical={CANONICAL}
        keywords="wideo produktowe, zdjęcia produktowe, produkcja video B2B, video dla producenta, wideo produktowe cennik"
      />
      <ArticleSchema
        title="Wideo produktowe czy zdjęcia produktowe? Co naprawdę sprzedaje w B2B"
        description="Praktyczne porównanie wideo i fotografii produktowej w B2B — koszty, zastosowanie w sprzedaży, targach i social media."
        url={CANONICAL}
        datePublished="2026-07-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Wideo produktowe czy zdjęcia", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Wideo produktowe czy zdjęcia", url: "/blog/wideo-produktowe-czy-zdjecia" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Produkcja video
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Wideo produktowe czy zdjęcia produktowe? Co naprawdę sprzedaje w B2B
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Producenci zwykle mają dobre katalogi i zdjęcia. Problem zaczyna się, gdy handlowiec próbuje na spotkaniu pokazać, jak produkt działa. Statyczne zdjęcie nie pokaże montażu, wytrzymałości ani skali.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Producenci zwykle mają dobre katalogi i zdjęcia. Problem zaczyna się, gdy handlowiec próbuje na spotkaniu pokazać, jak produkt działa. Statyczne zdjęcie nie pokaże montażu, wytrzymałości ani skali. Ten wpis pomaga zdecydować, w co zainwestować najpierw.
          </p>

          <h2>Kiedy zdjęcia produktowe wystarczą</h2>
          <ul>
            <li>katalog i sklep internetowy,</li>
            <li>karty produktów i specyfikacje,</li>
            <li>materiały do przetargów i ofert,</li>
            <li>spójność wizualna oferty i identyfikacji marki.</li>
          </ul>
          <p>
            Dobre zdjęcia to fundament — i najczęściej robimy je razem z wideo na jednym planie, co znacząco obniża koszt całości.
          </p>

          <h2>Kiedy wideo produktowe wygrywa</h2>
          <ul>
            <li>pokaz działania i montażu — <strong>30 sekund zamiast 3 stron PDF</strong>,</li>
            <li>dowód wytrzymałości i jakości wykonania,</li>
            <li>prezentacje handlowe — pokaz na tablecie zamiast katalogu, handlowiec domyka szybciej,</li>
            <li>targi i social media,</li>
            <li>onboarding klienta po zakupie (instrukcje, best practice).</li>
          </ul>

          <h2>Nie każde wideo musi być drogie</h2>
          <ul>
            <li><strong>Rolka produktowa</strong> — od 1 900 zł netto.</li>
            <li><strong>Seria 10 rolek z jednego dnia zdjęciowego</strong> — 12 000 zł netto.</li>
            <li><strong>Film reklamowy</strong> — wyceniany indywidualnie pod projekt.</li>
          </ul>
          <p>
            Nagrywamy w Twoim zakładzie, magazynie lub showroomie, w całej Polsce. Sprzęt i ekipa po naszej stronie.
          </p>

          <h2>Jak wygląda produkcja krok po kroku</h2>
          <ol>
            <li><strong>Brief i scenariusze</strong> — dostarczamy minimum 2 tygodnie przed nagraniem.</li>
            <li><strong>Dzień zdjęciowy u Ciebie</strong> — zwykle ok. 10 materiałów w jeden dzień.</li>
            <li><strong>Montaż</strong> z napisami i grafikami zgodnymi z Twoim brandingiem.</li>
            <li><strong>2 rundy poprawek</strong> w cenie.</li>
            <li><strong>Pliki gotowe</strong> na stronę, do prezentacji handlowych i na social media (formaty poziome i pionowe).</li>
          </ol>

          <h2>Efekt, który można zmierzyć</h2>
          <p>
            Nasze materiały generują <strong>ponad 3 mln wyświetleń miesięcznie</strong>, a wideo produktowe pracuje też poza internetem: w rękach handlowców, na targach i w mailach ofertowych. Realizowaliśmy materiały m.in. dla <strong>Żabki</strong>, <strong>WSB Merito</strong> i <strong>Zakładów Cegielskiego</strong>.
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
              Wyceń wideo dla swojego produktu albo umów 15 minut rozmowy
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zobacz, jak wygląda proces i ile realnie kosztuje seria materiałów video dla Twojej firmy.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-[#0E0E0E] font-semibold hover:bg-white/90 transition-colors"
              >
                Wyceń wideo
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