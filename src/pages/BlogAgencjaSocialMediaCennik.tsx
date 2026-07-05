import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy jest umowa na rok?",
    answer: "Nie. Współpracujemy na umowach miesięcznych z miesięcznym okresem wypowiedzenia — bez zobowiązań rocznych.",
  },
  {
    question: "Czy cennik zawiera budżet reklamowy?",
    answer: "Nie. Abonament obejmuje pracę zespołu (strategię, produkcję, prowadzenie kampanii). Budżet reklamowy w Meta Ads i Google Ads klient pokrywa osobno, bezpośrednio do platform.",
  },
  {
    question: "Ile trwa start współpracy?",
    answer: "Pierwsze publikacje pojawiają się w 7–14 dni od podpisania umowy. W tym czasie robimy onboarding, ustalamy strategię i produkujemy pierwszą partię materiałów.",
  },
  {
    question: "Czy robicie tylko social media?",
    answer: "Nie. Fotz Studio to pełnoserwisowe studio kreatywne — poza social media zajmujemy się stronami internetowymi, produkcją video, fotografią i performance marketingiem.",
  },
];

const CANONICAL = "https://fotz.pl/blog/agencja-social-media-cennik";

export default function BlogAgencjaSocialMediaCennik() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje agencja social media? Cennik 2026 bez owijania"
        description="Konkretne widełki cen obsługi social media w Polsce w 2026: freelancer, mała i duża agencja. Nasz cennik podajemy wprost. Sprawdź, kiedy to się opłaca."
        canonical={CANONICAL}
        keywords="cennik agencji social media, ile kosztuje agencja social media, ceny social media 2026, obsługa social media cennik"
      />
      <ArticleSchema
        title="Ile kosztuje agencja social media? Cennik 2026 bez owijania"
        description="Realne widełki rynkowe obsługi social media w Polsce w 2026 oraz cennik Fotz Studio podany wprost — pakiety START, WZROST i PARTNER."
        url={CANONICAL}
        datePublished="2026-07-02"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Cennik agencji social media 2026", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Cennik agencji social media 2026", url: "/blog/agencja-social-media-cennik" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ile kosztuje agencja social media? Cennik 2026 bez owijania
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Większość agencji każe dzwonić po wycenę. My uważamy, że cennik to pierwsza rzecz, jaką powinieneś zobaczyć — dlatego w tym wpisie znajdziesz realne widełki rynkowe i nasze stawki podane wprost.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Większość agencji każe dzwonić po wycenę. My uważamy, że cennik to pierwsza rzecz, jaką powinieneś zobaczyć, dlatego w tym wpisie znajdziesz realne widełki rynkowe i nasze stawki podane wprost.
          </p>

          <h2>Ile kosztuje obsługa social media w Polsce</h2>
          <ul>
            <li><strong>Freelancer</strong> — 1 000–2 500 zł/mc (1 kanał, bez produkcji video).</li>
            <li><strong>Mała agencja</strong> — 2 500–6 000 zł/mc (1–2 kanały, podstawowa grafika, raport).</li>
            <li><strong>Duża agencja full service</strong> — 6 000–15 000+ zł/mc (strategia, produkcja, reklamy, dedykowany opiekun).</li>
          </ul>
          <p className="text-sm text-gray-600">Kwoty netto miesięcznie.</p>

          <h2>Co najbardziej wpływa na cenę</h2>
          <ul>
            <li>liczba kanałów, na których marka jest aktywna,</li>
            <li>ilość i jakość produkcji (statyczne grafiki vs profesjonalne rolki),</li>
            <li>budżet i obsługa reklam Meta Ads / Google Ads,</li>
            <li>raportowanie wyników i częstotliwość spotkań strategicznych,</li>
            <li>dojazdy na nagrania i sesje w terenie.</li>
          </ul>
          <p>
            Najwięcej kosztuje video — i jednocześnie to ono najmocniej pracuje na zasięgi. Nasze materiały generują <strong>ponad 3 mln wyświetleń miesięcznie</strong>.
          </p>

          <h2>Nasz cennik wprost</h2>
          <div className="not-prose grid md:grid-cols-3 gap-4 my-8">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="text-sm text-gray-500 mb-1">Pakiet</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">START</div>
              <div className="text-3xl font-bold text-[#75143F] mb-4">2 500 zł/mc</div>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>opieka nad stroną www</li>
                <li>hosting</li>
                <li>drobne zmiany</li>
                <li>podstawowe SEO</li>
                <li>miesięczny raport</li>
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-[#75143F] p-6 bg-white shadow-lg">
              <div className="text-sm text-[#75143F] mb-1 font-semibold">Najczęściej wybierany</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">WZROST</div>
              <div className="text-3xl font-bold text-[#75143F] mb-4">5 000 zł/mc</div>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>wszystko z pakietu START</li>
                <li>1 kanał social media</li>
                <li>prowadzenie kampanii Meta</li>
                <li>raport wyników reklamowych</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <div className="text-sm text-gray-500 mb-1">Pakiet</div>
              <div className="text-2xl font-bold text-gray-900 mb-2">PARTNER</div>
              <div className="text-3xl font-bold text-[#75143F] mb-4">8 000–9 000 zł/mc</div>
              <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                <li>wszystko z pakietu WZROST</li>
                <li>SEO on-going</li>
                <li>4 rolki miesięcznie</li>
                <li>strategia kwartalna</li>
                <li>priorytet realizacji</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Budżet reklamowy zawsze po stronie klienta, poza abonamentem.
          </p>

          <h2>Abonament czy projekt</h2>
          <p>
            Abonament wygrywa przy regularnej komunikacji — algorytmy nagradzają systematyczność. Projekt jednorazowy ma sens przy konkretnej kampanii albo evencie. Zobacz też wpis o <Link to="/kontakt" className="text-[#75143F] underline">darmowej pierwszej rolce</Link>, którą robimy zanim zaczniemy stałą współpracę.
          </p>

          <h2>Kiedy agencja się opłaca</h2>
          <p>
            Etatowy specjalista social media to koszt 6 000–9 000 zł brutto + narzędzia + sprzęt do video. Agencja na pakiecie <strong>WZROST</strong> kosztuje mniej niż połowę etatu i daje Ci cały zespół zamiast jednej osoby.
          </p>
          <p>
            Prawdziwe pytanie brzmi jednak: <strong>ile kosztuje NIEROBIENIE social media</strong>, kiedy konkurencja zbiera klientów z TikToka i Instagrama?
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
              Pierwszą rolkę robimy za darmo
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zobacz, co potrafimy — zanim zapłacisz złotówkę.
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