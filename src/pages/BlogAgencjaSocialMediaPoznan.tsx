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
    answer: "Tak. Ekipa razem ze sprzętem (kamery, oświetlenie, dron) przyjeżdża do Ciebie. W Poznaniu i okolicach zwykle w ciągu 24–72 h.",
  },
  {
    question: "Czy łączycie social media ze stroną www?",
    answer: "Tak — to nasze pakiety WZROST i PARTNER. Prowadzimy stronę, SEO i kanały social spójnie, co daje mierzalny wzrost ruchu i zapytań.",
  },
];

const CANONICAL = "https://fotz.pl/blog/agencja-social-media-poznan";

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
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
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
              W Poznaniu działa kilkadziesiąt agencji marketingowych. Ten poradnik pomoże Ci odsiać te, które robią ładne prezentacje, od tych, które dowożą wyniki.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            W Poznaniu działa kilkadziesiąt agencji marketingowych. Ten poradnik pomoże Ci odsiać te, które robią ładne prezentacje, od tych, które dowożą wyniki. Piszemy go z perspektywy studia, które na co dzień prowadzi social media największych marek w mieście.
          </p>

          <h2>Po czym poznać dobrą agencję social media w Poznaniu</h2>
          <ul>
            <li><strong>Własna produkcja video na miejscu</strong> — bez podwykonawców znika połowa kosztów i czasu realizacji.</li>
            <li><strong>Realne case studies z liczbami</strong>, nie tylko screeny profili.</li>
            <li><strong>Raportowanie wyników biznesowych</strong> co miesiąc — leady, ruch, sprzedaż, nie tylko lajki.</li>
            <li><strong>Zespół fizycznie w Poznaniu</strong>, który może wpaść na nagranie do Twojej firmy w 24 h.</li>
          </ul>

          <h2>Nasz najmocniejszy dowód</h2>
          <p>
            Prowadzimy w całości Instagram <strong>Enea Stadionu</strong> — jednego z najbardziej rozpoznawalnych obiektów w Wielkopolsce. Nasze materiały generują <strong>ponad 3 mln wyświetleń miesięcznie</strong>, a portfolio obejmuje m.in. <strong>Żabkę</strong>, <strong>WSB Merito</strong> i <strong>Zakłady Cegielskiego</strong>. Mamy <strong>160+ opinii Google ze średnią 5.0</strong>.
          </p>

          <h2>Ile kosztuje agencja social media w Poznaniu</h2>
          <p>
            Stawki poznańskich agencji to zwykle <strong>2 500–10 000 zł netto/mc</strong>. U nas:
          </p>
          <ul>
            <li><strong>WZROST — 5 000 zł/mc</strong>: kanał social + kampania Meta + raport wyników.</li>
            <li><strong>PARTNER — 8 000–9 000 zł/mc</strong>: to samo co WZROST + SEO on-going, 4 rolki miesięcznie, strategia kwartalna.</li>
          </ul>
          <p>
            Pełne rozbicie stawek znajdziesz w naszym wpisie o{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>.
          </p>

          <h2>Pytania, które warto zadać przed podpisaniem umowy</h2>
          <ul>
            <li>Kto konkretnie będzie robił mój content — etatowiec, freelancer, stażysta?</li>
            <li>Czy mogę zobaczyć raport przykładowego klienta z ostatnich 3 miesięcy?</li>
            <li>Co się stanie, jeśli zechcę zrezygnować? (u nas: miesięczne wypowiedzenie, zero kar).</li>
            <li>Nagrania robicie sami czy zlecacie na zewnątrz?</li>
          </ul>

          <h2>Zacznij od darmowej rolki zamiast od umowy</h2>
          <p>
            Zanim cokolwiek podpiszesz, sprawdź jak pracujemy. Nagrywamy <strong>pierwszą rolkę dla Twojej firmy za darmo</strong> — w Poznaniu i okolicach często jeszcze w tym samym tygodniu.
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
              Umów 15 minut rozmowy albo zamów darmową rolkę
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
                Darmowa rolka
              </Link>
            </div>
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}