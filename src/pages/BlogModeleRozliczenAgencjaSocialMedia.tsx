import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile kosztuje abonament agencji social media?",
    answer:
      "W FOTZ Studio od 2 500 zł netto miesięcznie (START), przez 5 000 zł (WZROST), do 8 000-9 000 zł (PARTNER).",
  },
  {
    question: "Czy agencja może rozliczać się tylko za efekty?",
    answer:
      "W czystej formie to rzadkie. Success fee działa w performance marketingu, gdzie wyniki są mierzalne. W organicznym social media uczciwszy jest abonament z raportowaniem.",
  },
  {
    question: "Co wybrać na start: projekt czy abonament?",
    answer:
      "Jeśli chcesz najpierw sprawdzić jakość, zacznij od projektu, np. rolki od 1 900 zł netto, albo od darmowej rolki próbnej. Potem łatwiej zdecydować.",
  },
  {
    question: "Czy podane ceny zawierają VAT?",
    answer: "Nie, wszystkie ceny są netto.",
  },
];

const CANONICAL = "https://fotz.pl/blog/modele-rozliczen-agencja-social-media";

export default function BlogModeleRozliczenAgencjaSocialMedia() {
  return (
    <Layout>
      <SEOHead
        title="Modele rozliczeń z agencją social media: abonament, projekt czy success fee?"
        description="Abonament, projekt czy success fee? Porównujemy modele rozliczeń z agencją social media, z cenami od 2 500 zł netto/mc. Zobacz, co się opłaca."
        canonical={CANONICAL}
        keywords="modele rozliczeń agencja social media, abonament social media, success fee agencja, projekt social media, cennik agencji"
      />
      <ArticleSchema
        title="Modele rozliczeń z agencją social media: abonament, projekt czy success fee?"
        description="Trzy modele rozliczeń z agencją social media: abonament (od 2 500 zł netto/mc), projekt (od 1 900 zł netto) i success fee. Kiedy który się opłaca."
        url={CANONICAL}
        datePublished="2026-07-03"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Modele rozliczeń z agencją social media", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Modele rozliczeń z agencją social media", url: "/blog/modele-rozliczen-agencja-social-media" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Modele rozliczeń z agencją social media: abonament, projekt czy success fee?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Zanim podpiszesz umowę z agencją, ustal jedno: jak będziecie się rozliczać. Model rozliczenia decyduje o tym, za co płacisz, co dostajesz i kto ponosi ryzyko.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-slate max-w-none">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Zanim podpiszesz umowę z agencją, ustal jedno: jak będziecie się rozliczać. Model rozliczenia decyduje o tym, za co płacisz, co dostajesz i kto ponosi ryzyko. Oto trzy najczęstsze modele i nasza szczera opinia o każdym.
          </p>

          <h2>Trzy modele rozliczeń w skrócie</h2>
          <p>
            <strong>Abonament</strong> to stała kwota miesięcznie za ustalony zakres. <strong>Projekt</strong> to jednorazowa wycena za konkretną realizację. <strong>Success fee</strong> to wynagrodzenie zależne od wyników. Każdy ma sens w innej sytuacji, poniżej rozbieramy je na części.
          </p>

          <h2>Abonament: przewidywalny koszt i stała obecność</h2>
          <p>
            Najpopularniejszy model i nie bez powodu. Płacisz stałą kwotę, agencja dowozi ustalony zakres co miesiąc. W FOTZ Studio wygląda to tak:
          </p>
          <ul>
            <li><strong>START</strong>: 2 500 zł netto/mc.</li>
            <li><strong>WZROST</strong>: 5 000 zł netto/mc.</li>
            <li><strong>PARTNER</strong>: 8 000-9 000 zł netto/mc.</li>
          </ul>
          <p>
            Abonament działa, bo social media nagradzają regularność. Prowadzimy w całości Instagram Enea Stadionu i <strong>ponad 3 mln wyświetleń miesięcznie</strong> nie robi jeden viral, tylko systematyczna praca.
          </p>
          <p><strong>Dla kogo</strong>: dla firm, które traktują social media jako stały kanał, nie jednorazową akcję.</p>

          <h2>Projekt: płacisz raz, dostajesz konkret</h2>
          <p>Rozliczenie projektowe ma sens przy jednorazowych potrzebach:</p>
          <ul>
            <li><strong>Pojedyncza rolka</strong>: od 1 900 zł netto.</li>
            <li><strong>Seria 10 rolek z jednego dnia zdjęciowego</strong>: 12 000 zł netto.</li>
            <li><strong>Pakiet Premiery</strong>: 2 900 zł netto, przy wprowadzaniu nowego produktu.</li>
          </ul>
          <p><strong>Dla kogo</strong>: na start współpracy, na kampanie, na test przed abonamentem.</p>

          <h2>Success fee: brzmi świetnie, ma haczyki</h2>
          <p>
            Płacenie za efekt wygląda uczciwie, ale w organicznym social media rzadko działa czysto. Trzy problemy:
          </p>
          <ol>
            <li><strong>Atrybucja</strong>: klient przyszedł z rolki, z polecenia czy z Google? Trudno rozstrzygnąć.</li>
            <li><strong>Definicja sukcesu</strong>: zasięgi łatwo napompować, a lajki nie płacą faktur.</li>
            <li><strong>Ryzyko</strong>: agencja podnosi stawkę za ryzyko albo tnie jakość.</li>
          </ol>
          <p>
            Success fee sprawdza się w performance i lead generation, gdzie liczby są mierzalne. W budowaniu marki uczciwszy jest abonament z jasnym zakresem i raportem wyników.
          </p>

          <h2>Który model wybrać</h2>
          <p>
            Jeśli prowadzisz marketing w firmie i szukasz partnera, nie zamiennika: abonament WZROST lub PARTNER daje stały zespół i przewidywalne tempo. Jeśli jesteś właścicielem MŚP i chcesz najpierw zobaczyć wyniki: zacznij od projektu albo darmowej rolki, potem zdecyduj.
          </p>
          <p>
            Szczegółowe ceny wszystkich pakietów opisaliśmy we wpisie o{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>
            .
          </p>

          <h2>Jak my to robimy</h2>
          <p>
            Rozliczamy się w abonamencie lub projektowo, zawsze z cenami na stole. Pracujemy m.in. dla <strong>Żabki</strong>, <strong>WSB Merito</strong>, <strong>Zakładów Cegielskiego</strong> i <strong>FPS</strong>. Mamy ponad 160 opinii Google ze średnią 5.0, bo klienci wiedzą, za co płacą.
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
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby dobrać model rozliczenia pod Twoją firmę.
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