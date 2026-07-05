import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Czy moja firma B2B musi tańczyć na TikToku?",
    answer:
      "Nie. Najlepiej działają konkretne formaty: kulisy pracy, szybkie porady, odpowiedzi na pytania klientów, produkt w akcji. Tańce zostawiamy influencerom.",
  },
  {
    question: "Ile kosztuje prowadzenie TikToka przez agencję?",
    answer:
      "U nas stała obsługa zaczyna się od 2 500 zł netto miesięcznie (pakiet START). Sama produkcja: rolka od 1 900 zł lub seria 10 rolek w 1 dzień zdjęciowy za 12 000 zł netto.",
  },
  {
    question: "Po jakim czasie TikTok zaczyna działać?",
    answer:
      "Pierwsze sygnały, które formaty łapią, widać zwykle po 15-20 publikacjach. Sensowny test to 2-3 miesiące regularnego publikowania, nie 2 tygodnie.",
  },
  {
    question: "Czy TikTok ma sens, jeśli moimi klientami są firmy?",
    answer:
      "Tak, bo decyzje w firmach podejmują ludzie, a ci przewijają TikToka wieczorem jak wszyscy. Dobrze zaadresowany content buduje markę, po którą klient wraca, gdy pojawia się potrzeba.",
  },
];

const CANONICAL = "https://fotz.pl/blog/tiktok-dla-firm-b2b";

export default function BlogTiktokDlaFirmB2B() {
  return (
    <Layout>
      <SEOHead
        title="TikTok dla firmy B2B: od czego zacząć, żeby nie spalić budżetu"
        description="TikTok dla firmy B2B to nie tańce, tylko system: strategia, serie i dni zdjęciowe. Sprawdź, od czego zacząć i ile to kosztuje, zanim wydasz budżet."
        canonical={CANONICAL}
        keywords="tiktok dla firm b2b, tiktok b2b, tiktok dla firmy, agencja tiktok, produkcja rolek b2b"
      />
      <ArticleSchema
        title="TikTok dla firmy B2B: od czego zacząć, żeby nie spalić budżetu"
        description="Jak sensownie zacząć TikToka w B2B: strategia, serie contentowe, dni zdjęciowe i realne koszty od 1 900 zł netto za rolkę."
        url={CANONICAL}
        datePublished="2026-07-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "TikTok dla firmy B2B", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "TikTok dla firmy B2B", url: "/blog/tiktok-dla-firm-b2b" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Video
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              TikTok dla firmy B2B: od czego zacząć, żeby nie spalić budżetu
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              TikTok wciąż bywa traktowany jak platforma dla nastolatków. W praktyce to dziś jedna z najtańszych dróg do zasięgów organicznych, także w B2B.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-slate max-w-none">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            TikTok wciąż bywa traktowany jak platforma dla nastolatków. W praktyce to dziś jedna z najtańszych dróg do zasięgów organicznych, także w B2B. Problem w tym, że większość firm zaczyna od publikowania przypadkowych filmików i po trzech miesiącach ogłasza, że "TikTok u nas nie działa". Pokazujemy, jak zacząć z głową i czego unikać.
          </p>

          <h2>Czy TikTok w B2B w ogóle działa</h2>
          <p>
            Działa, jeśli dobrze zdefiniujesz, kto ma cię oglądać. Na TikToku nie kupuje "firma", tylko człowiek: właściciel sklepu, kierownik regionu, specjalistka HR, franczyzobiorca. Jeśli twoi klienci mają telefony, są też na TikToku. Algorytm nie pyta o branżę. Pyta o to, czy ktoś zatrzymał się przy twoim materiale.
          </p>
          <p>
            Dobra wiadomość: konkurencja contentowa w B2B jest wciąż mała. Tam, gdzie w B2C o uwagę bije się 50 marek, w niszy B2B często nie ma nikogo. To okno nie będzie otwarte wiecznie.
          </p>

          <h2>Zacznij od strategii, nie od nagrywania</h2>
          <p>Zanim nagrasz pierwszy materiał, odpowiedz na trzy pytania:</p>
          <ol>
            <li>Kogo dokładnie chcesz zatrzymać przy ekranie (stanowisko, problem, motywacja)?</li>
            <li>Co ta osoba ma zrobić po obejrzeniu (obserwować profil, wejść na stronę, napisać)?</li>
            <li>Jakie masz zasoby: kto może występować, gdzie możecie nagrywać, ile czasu miesięcznie realnie macie?</li>
          </ol>
          <p>
            Z odpowiedzi powstaje prosta strategia: 2-3 powtarzalne formaty (serie), lista tematów na 2-3 miesiące i stały rytm publikacji. Bez tego każdy film to osobny eksperyment, a eksperymenty bez systemu palą budżet najszybciej.
          </p>

          <h2>Serie zamiast pojedynczych filmików: przykład z sieci retail</h2>
          <p>
            Pracujemy m.in. z siecią sklepów, której nazwy nie możemy tu podać. Zamiast nagrywać od przypadku do przypadku "coś ciekawego", ustawiliśmy serie contentowe: powtarzalne formaty, które widz rozpoznaje po dwóch sekundach. Materiały nagrywamy seriami podczas dni zdjęciowych w lokalizacjach klienta, w wariancie z aktorem, żeby nie angażować pracowników przy każdym odcinku. Jeden dzień zdjęciowy daje content na kilka tygodni publikacji, a profil zyskuje coś, czego pojedyncze filmiki nie dadzą: rozpoznawalny format, na który widzowie wracają.
          </p>
          <p>
            W ten sam systemowy sposób prowadzimy w całości Instagram Enea Stadionu. Konta, które obsługujemy, generują łącznie <strong>ponad 3 mln wyświetleń miesięcznie</strong>.
          </p>

          <h2>Ile kosztuje start na TikToku</h2>
          <ul>
            <li>Pojedyncza rolka: od <strong>1 900 zł netto</strong>.</li>
            <li>Seria 10 rolek nagranych w 1 dzień zdjęciowy: <strong>12 000 zł netto</strong>, czyli 1 200 zł za rolkę.</li>
            <li>Stała obsługa social media: pakiety od <strong>2 500 zł/mc (START)</strong>, przez <strong>5 000 zł/mc (WZROST)</strong>, do <strong>8 000-9 000 zł/mc (PARTNER)</strong>.</li>
          </ul>
          <p>
            Dla większości firm B2B sensowny start to seria 10 rolek: wystarcza na 5-6 tygodni regularnych publikacji i realny test, czy format łapie. Więcej o kosztach pojedynczych materiałów piszemy we wpisie o tym, ile kosztuje{" "}
            <Link to="/blog/ile-kosztuje-rolka-dla-firmy" className="text-[#75143F] underline">
              rolka dla firmy
            </Link>
            .
          </p>

          <h2>5 błędów, które najszybciej palą budżet</h2>
          <ol>
            <li><strong>Nagrywanie pojedynczych filmów zamiast serii.</strong> Każdy materiał robiony od zera to najdroższy możliwy model.</li>
            <li><strong>Kopiowanie contentu z LinkedIna.</strong> TikTok ma własny język: dynamiczny montaż, hak w pierwszych 2 sekundach, mówienie do jednej osoby.</li>
            <li><strong>Ocena po 2 tygodniach.</strong> Algorytm potrzebuje kilkunastu publikacji, żeby znaleźć twoją widownię.</li>
            <li><strong>Brak wezwania do działania.</strong> Zasięg bez CTA to tylko ładny wykres.</li>
            <li><strong>Oddanie TikToka stażyście, "bo jest młody".</strong> Młodość to nie strategia.</li>
          </ol>

          <div className="not-prose my-12 rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Chcesz sprawdzić, jak TikTok zadziała u ciebie, zanim wydasz budżet?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby ułożyć plan startu na TikToku.
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