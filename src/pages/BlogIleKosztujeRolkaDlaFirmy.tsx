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
      "To zależy od zakresu: liczby lokalizacji, czasu nagrań, tego, kto występuje, oraz liczby wersji i formatów. Konkretną wycenę podajemy po krótkiej rozmowie o tym, czego potrzebujesz. Zwykle w zakres wchodzi scenariusz, nagranie, montaż, napisy i formaty pod różne platformy (Instagram, TikTok, YouTube).",
  },
  {
    question: "Jak obniżyć koszt pojedynczej rolki?",
    answer:
      "Seria. Gdy z jednego dnia zdjęciowego powstaje kilka lub kilkanaście rolek, koszt dojazdu, sprzętu i przygotowania rozkłada się na więcej materiałów, więc pojedyncza rolka wychodzi taniej niż przy osobnych realizacjach.",
  },
  {
    question: "Czy wycena zawiera VAT?",
    answer: "Wyceny podajemy netto. Do faktury doliczamy VAT.",
  },
  {
    question: "Czy mogę sprawdzić jakość przed zamówieniem?",
    answer:
      "Tak. Nagrywamy darmową rolkę próbną, żebyś zobaczył jakość, zanim wydasz złotówkę.",
  },
];

const CANONICAL = "https://www.fotz-studio.pl/blog/ile-kosztuje-rolka-dla-firmy";

export default function BlogIleKosztujeRolkaDlaFirmy() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje produkcja rolki dla firmy? Cennik video 2026"
        description="Ile kosztuje rolka dla firmy? Sprawdź, co wpływa na cenę produkcji video: dni zdjęciowe, lokalizacje, scenariusz, występujący, liczba wersji. Seria czy pojedyncza rolka?"
        canonical={CANONICAL}
        keywords="cennik produkcji video, ile kosztuje rolka, produkcja rolek dla firm, video marketing cennik, rolki na Instagram cena"
      />
      <ArticleSchema
        title="Ile kosztuje produkcja rolki dla firmy? Cennik video 2026"
        description="Od czego zależy cena produkcji rolek dla firm: dni zdjęciowe, lokalizacje, scenariusz, występujący i liczba formatów. Kiedy opłaca się seria, a kiedy pojedyncza rolka."
        url={CANONICAL}
        datePublished="2026-07-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Blog", url: "https://www.fotz-studio.pl/blog" },
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
              Krótka odpowiedź: to zależy od tego, co kręcimy, gdzie i ile materiałów potrzebujesz. Poniżej rozpisujemy, co realnie wpływa na cenę i kiedy seria wychodzi korzystniej niż pojedyncza rolka.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Nie ma jednej ceny rolki dla każdej firmy. Koszt zależy od tego, co kręcimy, gdzie i ile materiałów potrzebujesz. Poniżej opisujemy czynniki, które składają się na wycenę, żebyś wiedział, o co pytać i jak zaplanować budżet.
          </p>

          <h2>Ile kosztuje rolka w 2026? Od czego zależy wycena</h2>
          <ul>
            <li><strong>Pojedyncza rolka</strong>: zwykle obejmuje scenariusz, nagranie, montaż, napisy i formaty pod Instagram, TikTok i YouTube. Cena zależy od czasu nagrań i stopnia skomplikowania.</li>
            <li><strong>Seria rolek z jednego dnia zdjęciowego</strong>: koszt przygotowania i dojazdu rozkłada się na wiele materiałów, więc jedna rolka wychodzi taniej.</li>
            <li><strong>Materiał na premierę</strong>: gdy wprowadzasz nowy produkt lub usługę, często potrzeba kilku wersji i formatów naraz, co wpływa na zakres montażu.</li>
            <li><strong>Stała współpraca z prowadzeniem social media</strong>: rozliczana miesięcznie, a cena zależy od liczby publikacji i zakresu obsługi.</li>
          </ul>
          <p>Wycenę podajemy po rozmowie o zakresie, w kwotach netto.</p>

          <h2>Co wpływa na koszt produkcji video</h2>
          <ol>
            <li><strong>Liczba lokalizacji i dni zdjęciowych</strong>: jeden dzień w Twojej firmie to inna skala niż zdjęcia w trzech miastach.</li>
            <li><strong>Scenariusz i przygotowanie</strong>: my piszemy, Ty akceptujesz. Im lepszy brief, tym szybciej.</li>
            <li><strong>Kto występuje</strong>: pracownicy firmy wypadają autentycznie, aktor lub lektor to dodatkowy koszt.</li>
            <li><strong>Liczba wersji i formatów</strong>: ta sama rolka w pionie i poziomie, z napisami PL i EN, to więcej pracy w montażu.</li>
          </ol>

          <h2>Jedna rolka czy seria? Policzmy</h2>
          <p>
            Jedna rolka ma sens na test lub konkretną okazję. Jeśli publikujesz regularnie, seria zwykle wygrywa: z jednego dnia zdjęciowego powstaje wiele materiałów, a koszt przygotowania, dojazdu i sprzętu dzieli się na wszystkie, więc cena za sztukę spada.
          </p>
          <p>
            Regularność to nie teoria: przy treściach dla Enea Stadionu widzimy, że efekt robi seria publikowana tydzień po tygodniu, a nie jeden viral.
          </p>

          <h2>Rolka jednorazowa czy abonament</h2>
          <p>
            Jeśli potrzebujesz contentu co miesiąc, abonament zwykle wychodzi korzystniej i daje przewidywalny budżet. Jego cena zależy od liczby rolek i postów w miesiącu, częstotliwości dni zdjęciowych oraz tego, czy w zakresie jest też prowadzenie profili i reklamy. Więcej o tym, jak liczy się koszt obsługi, znajdziesz we wpisie o{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>
            .
          </p>

          <h2>Dlaczego firmy wybierają FOTZ Studio</h2>
          <p>
            Realizowaliśmy materiały m.in. dla <strong>Enea Stadionu</strong>, <strong>FPS Cegielski</strong> i <strong>AutoSpa</strong>, a dla <strong>WSB Merito</strong> nagraliśmy spot. Nie sprzedajemy obietnic: przed startem dostajesz jasny zakres i wycenę.
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