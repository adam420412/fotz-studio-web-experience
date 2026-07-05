import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy agencja zastąpi nasz marketing?",
    answer: "Nie. Dobra agencja go wzmacnia — dokłada moc produkcyjną, świeże spojrzenie i tempo, którego brakuje przeciążonemu zespołowi in-house. Strategia i znajomość firmy zostają po Twojej stronie.",
  },
  {
    question: "Czy możemy wziąć tylko produkcję video bez strategii?",
    answer: "Tak — to nasz model partnera produkcyjnego. Wy planujecie komunikację i macie kontekst, my dowozimy sesje, rolki, dron i montaż. Bez opłat za strategię, której nie potrzebujecie.",
  },
  {
    question: "Jak szybko zobaczymy efekty?",
    answer: "Pierwsze materiały produkcyjne oddajemy w 2 tygodnie od startu. Mierzalne trendy zasięgów i zaangażowania widać zwykle w 6–8 tygodni regularnej publikacji.",
  },
];

const CANONICAL = "https://fotz.pl/blog/czy-warto-zatrudnic-agencje-social-media";

export default function BlogCzyWartoZatrudnicAgencjeSocialMedia() {
  return (
    <Layout>
      <SEOHead
        title="Czy warto zatrudnić agencję social media przy marketingu in-house?"
        description="In-house, freelancer czy agencja? Szczere porównanie kosztów i efektów plus trzeci model: partner produkcyjny dla Twojego zespołu marketingu."
        canonical={CANONICAL}
        keywords="agencja social media czy in-house, partner produkcyjny social media, agencja vs freelancer social media, zespół marketingu in-house"
      />
      <ArticleSchema
        title="Czy warto zatrudnić agencję social media, jeśli macie marketing in-house?"
        description="Porównanie modeli obsługi social media (in-house, freelancer, agencja, partner produkcyjny) — koszty, plusy, minusy i checklista wyboru."
        url={CANONICAL}
        datePublished="2026-07-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Czy warto zatrudnić agencję social media", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Agencja social media czy in-house", url: "/blog/czy-warto-zatrudnic-agencje-social-media" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Czy warto zatrudnić agencję social media, jeśli macie marketing in-house?
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Rozmawiamy z dziesiątkami specjalistów marketingu miesięcznie i 60% mówi to samo: <em>„social ogarniamy sami”</em>. I często robią to dobrze. Ten wpis nie przekonuje, że agencja jest lepsza od Ciebie — pokazuje, kiedy jaka opcja ma sens.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Rozmawiamy z dziesiątkami specjalistów marketingu miesięcznie i 60% mówi to samo: <em>„social ogarniamy sami”</em>. I często robią to dobrze. Ten wpis nie przekonuje, że agencja jest lepsza od Ciebie, tylko pokazuje, kiedy jaka opcja ma sens.
          </p>

          <h2>Trzy modele i ich realne koszty</h2>
          <ul>
            <li>
              <strong>In-house specjalista</strong> — 6 000–9 000 zł brutto miesięcznie plus sprzęt i narzędzia. Pełna kontrola i znajomość firmy, ale jedna osoba nie nagra, nie zmontuje i nie ograsuje wszystkich kanałów sama.
            </li>
            <li>
              <strong>Freelancer</strong> — 1 000–2 500 zł/mc. Elastycznie i tanio, ale znika przy urlopie, chorobie i większym projekcie.
            </li>
            <li>
              <strong>Agencja full service</strong> — 2 500–15 000 zł/mc. Zespół, przewidywalność i moc produkcyjna, ale mniejsza znajomość firmy od środka.
            </li>
          </ul>

          <h2>Model czwarty, o którym mało kto mówi: partner produkcyjny</h2>
          <p>
            Twój zespół zna firmę najlepiej i planuje komunikację, a my dokładamy moc produkcyjną: sesje, rolki, dron, montaż. Ty zbierasz punkty u szefa, my dowozimy materiał. Tak pracujemy z działami marketingu w Wielkopolsce i nie tylko.
          </p>

          <h2>Kiedy NIE brać agencji</h2>
          <ul>
            <li>kiedy firma nie ma jeszcze produktu ani poukładanego procesu sprzedaży — najpierw to,</li>
            <li>kiedy szukasz kogoś „od wszystkiego” za 1 000 zł — taki wykonawca nie istnieje,</li>
            <li>kiedy oczekujesz cudów w tydzień.</li>
          </ul>

          <h2>Kiedy agencja lub partner produkcyjny się opłaca</h2>
          <ul>
            <li>potrzebujesz regularnego video, a nie masz własnej ekipy,</li>
            <li>zespół marketingu jest przeciążony i traci na strategii przez operacyjne zadania,</li>
            <li>wchodzisz na TikToka i potrzebujesz tempa publikacji,</li>
            <li>chcesz raportu z liczbami zamiast wrażeń.</li>
          </ul>

          <h2>Jak sprawdzić agencję przed podpisaniem czegokolwiek</h2>
          <ul>
            <li>
              poproś o <strong>konkretne wyniki</strong> — my np. prowadzimy w całości Instagram Enea Stadionu, ponad <strong>3 mln wyświetleń miesięcznie</strong>,
            </li>
            <li>zapytaj, kto fizycznie robi content (agencja, podwykonawca, stażysta?),</li>
            <li>sprawdź, czy raportują wyniki <strong>biznesowe</strong>, a nie tylko lajki,</li>
            <li>przetestuj na małym — u nas pierwsza rolka jest za darmo.</li>
          </ul>

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
              Sprawdź nas bez ryzyka — pierwsza rolka za darmo
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zobacz, jak pracujemy z zespołami marketingu in-house, zanim zdecydujesz o współpracy.
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