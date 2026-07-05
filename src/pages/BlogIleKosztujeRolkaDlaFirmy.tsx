import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile kosztuje jedna rolka dla firmy?",
    answer:
      "Od 1 900 zł netto. W cenie: scenariusz, nagranie, montaż, napisy i formaty pod różne platformy (Instagram, TikTok, YouTube).",
  },
  {
    question: "Jak obniżyć koszt pojedynczej rolki?",
    answer:
      "Seria. 10 rolek z jednego dnia zdjęciowego kosztuje 12 000 zł netto, czyli 1 200 zł za rolkę zamiast 1 900 zł.",
  },
  {
    question: "Czy podane ceny zawierają VAT?",
    answer: "Nie, wszystkie ceny są netto. Do faktury doliczamy VAT.",
  },
  {
    question: "Czy mogę sprawdzić jakość przed zamówieniem?",
    answer:
      "Tak. Nagrywamy darmową rolkę próbną, żebyś zobaczył jakość, zanim wydasz złotówkę.",
  },
];

const CANONICAL = "https://fotz.pl/blog/ile-kosztuje-rolka-dla-firmy";

export default function BlogIleKosztujeRolkaDlaFirmy() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje produkcja rolki dla firmy? Cennik video 2026"
        description="Ile kosztuje rolka dla firmy? Pojedyncza od 1 900 zł netto, seria 10 rolek za 12 000 zł netto. Zobacz cennik produkcji video 2026 i co wpływa na cenę."
        canonical={CANONICAL}
        keywords="cennik produkcji video, ile kosztuje rolka, produkcja rolek dla firm, video marketing cennik, rolki na Instagram cena"
      />
      <ArticleSchema
        title="Ile kosztuje produkcja rolki dla firmy? Cennik video 2026"
        description="Konkretne ceny produkcji rolek dla firm w 2026: pojedyncza rolka od 1 900 zł netto, seria 10 rolek 12 000 zł netto. Co wpływa na koszt produkcji video."
        url={CANONICAL}
        datePublished="2026-07-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Ile kosztuje rolka dla firmy", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Ile kosztuje rolka dla firmy", url: "/blog/ile-kosztuje-rolka-dla-firmy" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Produkcja video
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ile kosztuje produkcja rolki dla firmy? Cennik video 2026
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Krótka odpowiedź: pojedyncza rolka kosztuje od 1 900 zł netto, a seria 10 rolek z jednego dnia zdjęciowego 12 000 zł netto. Dłuższa odpowiedź zależy od tego, co kręcimy, gdzie i ile materiałów potrzebujesz.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Krótka odpowiedź: pojedyncza rolka kosztuje od 1 900 zł netto, a seria 10 rolek z jednego dnia zdjęciowego 12 000 zł netto. Dłuższa odpowiedź zależy od tego, co kręcimy, gdzie i ile materiałów potrzebujesz. Poniżej cały cennik, bez gwiazdek i ukrytych kosztów.
          </p>

          <h2>Ile kosztuje rolka w 2026? Konkretne ceny</h2>
          <ul>
            <li><strong>Pojedyncza rolka</strong>: od 1 900 zł netto. W cenie scenariusz, nagranie, montaż, napisy i formaty pod Instagram, TikTok i YouTube.</li>
            <li><strong>Seria 10 rolek z jednego dnia zdjęciowego</strong>: 12 000 zł netto, wychodzi 1 200 zł za rolkę.</li>
            <li><strong>Pakiet Premiery</strong>: 2 900 zł netto, gdy wprowadzasz nowy produkt lub usługę.</li>
            <li><strong>Stała współpraca z prowadzeniem social media</strong>: abonamenty od 2 500 zł netto miesięcznie.</li>
          </ul>
          <p>Wszystkie ceny są netto.</p>

          <h2>Co wpływa na koszt produkcji video</h2>
          <ol>
            <li><strong>Liczba lokalizacji i dni zdjęciowych</strong>: jeden dzień w Twojej firmie to inna skala niż zdjęcia w trzech miastach.</li>
            <li><strong>Scenariusz i przygotowanie</strong>: my piszemy, Ty akceptujesz. Im lepszy brief, tym szybciej.</li>
            <li><strong>Kto występuje</strong>: pracownicy firmy wypadają autentycznie, aktor lub lektor to dodatkowy koszt.</li>
            <li><strong>Liczba wersji i formatów</strong>: ta sama rolka w pionie i poziomie, z napisami PL i EN, to więcej pracy w montażu.</li>
          </ol>

          <h2>Jedna rolka czy seria? Policzmy</h2>
          <p>
            Jedna rolka od 1 900 zł ma sens na test lub konkretną okazję. Jeśli publikujesz regularnie, seria wygrywa: 10 rolek za 12 000 zł to 1 200 zł za sztukę, o 700 zł mniej niż pojedyncza realizacja.
          </p>
          <p>
            Regularność to nie teoria: prowadzimy w całości Instagram Enea Stadionu, a nasze materiały generują <strong>ponad 3 mln wyświetleń miesięcznie</strong>. Ten wynik robi seria publikowana tydzień po tygodniu, nie jeden viral.
          </p>

          <h2>Rolka jednorazowa czy abonament</h2>
          <p>
            Jeśli potrzebujesz contentu co miesiąc, abonament wychodzi taniej i przewidywalnie. Pakiet <strong>START</strong>: 2 500 zł netto/mc. Pakiet <strong>WZROST</strong>: 5 000 zł/mc. Pakiet <strong>PARTNER</strong>: 8 000-9 000 zł/mc. Pełne porównanie pakietów znajdziesz we wpisie o{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>
            .
          </p>

          <h2>Dlaczego firmy wybierają FOTZ Studio</h2>
          <p>
            Pracujemy m.in. dla <strong>Żabki</strong>, <strong>WSB Merito</strong>, <strong>Zakładów Cegielskiego</strong> i <strong>FPS</strong>. Mamy ponad 160 opinii Google ze średnią 5.0. Nie sprzedajemy obietnic, pokazujemy liczby z realnych profili.
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
              Sprawdź nas bez ryzyka: pierwsza rolka za darmo
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