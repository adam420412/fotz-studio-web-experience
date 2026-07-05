import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Który pakiet wybrać na start?",
    answer:
      "Jeśli dopiero porządkujesz social media, START (2 500 zł netto/mc). Jeśli celem są zasięgi i zapytania, WZROST (5 000 zł netto/mc). PARTNER (8 000-9 000 zł netto/mc) wybierają firmy, dla których social media to kluczowy kanał.",
  },
  {
    question: "Czy mogę zmienić pakiet w trakcie współpracy?",
    answer:
      "Tak. Pakiet to punkt wyjścia, zakres dopasowujemy do celów i sezonu, np. rozszerzając produkcję video przed premierą produktu.",
  },
  {
    question: "Ile kosztuje sama produkcja rolek, bez pakietu?",
    answer:
      "Pojedyncza rolka od 1 900 zł netto. Seria 10 rolek nagranych w 1 dzień zdjęciowy to 12 000 zł netto, czyli 1 200 zł za rolkę.",
  },
  {
    question: "Skąd mam wiedzieć, że agencja dowozi?",
    answer:
      "Po raportach z konkretnymi liczbami i po referencjach. U nas: 160+ opinii Google 5.0, pełna obsługa Instagrama Enea Stadionu i ponad 3 mln wyświetleń miesięcznie na prowadzonych kontach.",
  },
];

const CANONICAL = "https://fotz.pl/blog/pakiety-uslug-agencji-social-media";

export default function BlogPakietyUslugAgencjiSocialMedia() {
  return (
    <Layout>
      <SEOHead
        title="Pakiety usług agencji social media: co naprawdę jest w środku"
        description="Co naprawdę zawiera pakiet agencji social media? Rozbieramy START, WZROST i PARTNER: ceny netto, zakresy i pytania, które warto zadać przed umową."
        canonical={CANONICAL}
        keywords="pakiety agencji social media, pakiet social media, oferta agencji social media, cennik pakietów social media"
      />
      <ArticleSchema
        title="Pakiety usług agencji social media: co naprawdę jest w środku"
        description="Rozbieramy pakiety agencji social media START, WZROST i PARTNER: co zawierają, ile kosztują i o co pytać przed podpisaniem umowy."
        url={CANONICAL}
        datePublished="2026-07-05"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Pakiety usług agencji social media", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Pakiety usług agencji social media", url: "/blog/pakiety-uslug-agencji-social-media" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Social Media
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pakiety usług agencji social media: co naprawdę jest w środku
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              "Pakiet od X zł" mówi niewiele, dopóki nie wiesz, co jest w środku. Rozbieramy nasze pakiety na części pierwsze, żebyś wiedział, za co płacisz.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-16 prose prose-lg prose-slate max-w-none">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            "Pakiet od X zł" mówi niewiele, dopóki nie wiesz, co jest w środku. Dwie oferty w tej samej cenie potrafią różnić się wszystkim: liczbą materiałów, jakością produkcji i tym, kto faktycznie pracuje przy twojej marce. Rozbieramy nasze pakiety na części pierwsze, żebyś wiedział, za co płacisz. U nas i wszędzie indziej.
          </p>

          <h2>Dlaczego pakiety agencji tak trudno porównać</h2>
          <p>
            Bo "prowadzenie social media" może znaczyć cokolwiek: od 8 grafik z banku zdjęć po pełną produkcję video z dniem zdjęciowym co miesiąc. Na papierze obie oferty to "obsługa Instagrama". Dlatego zamiast porównywać same ceny, porównuj zakresy: ile materiałów, jakiego typu, kto je produkuje, co z moderacją i raportowaniem.
          </p>

          <h2>START, 2 500 zł netto/mc: uporządkowana obecność</h2>
          <p>
            Pakiet dla firm, które potrzebują regularności bez rozbudowanej produkcji. W środku: strategia i plan contentowy, przygotowanie i publikacja materiałów, podstawowa moderacja, miesięczny raport. To opcja "profil żyje i wygląda profesjonalnie", nie machina zasięgowa. Dobry punkt startu dla mniejszych firm i na sprawdzenie, jak nam się pracuje.
          </p>

          <h2>WZROST, 5 000 zł netto/mc: content, który ma robić wynik</h2>
          <p>
            Najczęściej wybierany poziom. Kluczowa różnica względem STARTU to video: regularna produkcja rolek, czyli formatu, który dziś odpowiada za zasięgi. Do tego pełniejsza moderacja i raporty z wnioskami, nie tylko liczbami. Jeśli oczekujesz wzrostu zasięgów i zapytań, a nie samej obecności, patrz na ten poziom.
          </p>

          <h2>PARTNER, 8 000-9 000 zł netto/mc: agencja jako twój dział social media</h2>
          <p>
            Pełne przejęcie kanałów: strategia, produkcja foto i video z dniami zdjęciowymi, moderacja, raportowanie, stały kontakt z zespołem. Tak pracujemy z klientami, u których social media to poważny kanał biznesowy. W tym modelu prowadzimy w całości Instagram Enea Stadionu, a konta, które obsługujemy, generują łącznie <strong>ponad 3 mln wyświetleń miesięcznie</strong>.
          </p>

          <h2>A jeśli nie pakiet? Produkcja na sztuki</h2>
          <p>
            Nie każda firma potrzebuje stałej obsługi. Możesz zamówić samą produkcję: pojedyncza rolka od 1 900 zł, seria 10 rolek nagranych w 1 dzień zdjęciowy za 12 000 zł netto. Taka seria to materiał na 2-3 miesiące samodzielnego publikowania. Pełne zestawienie cen znajdziesz we wpisie o{" "}
            <Link to="/blog/agencja-social-media-cennik" className="text-[#75143F] underline">
              cenniku agencji social media
            </Link>
            .
          </p>

          <h2>5 pytań, które warto zadać przed podpisaniem umowy</h2>
          <ol>
            <li>Ile materiałów miesięcznie i jakiego typu (grafika, foto, video)?</li>
            <li>Kto konkretnie będzie pracował przy mojej marce i z kim się kontaktuję?</li>
            <li>Czy produkcja video jest w cenie, czy płatna osobno?</li>
            <li>Jak wygląda raport i co się dzieje, gdy wyniki spadają?</li>
            <li>Jakie są warunki wypowiedzenia?</li>
          </ol>
          <p>
            Uczciwa agencja odpowie na wszystko bez owijania. Nasze odpowiedzi łatwo zweryfikować: 160+ opinii Google z oceną 5.0 i realizacje dla marek takich jak Żabka, WSB Merito, Zakłady Cegielskiego czy FPS.
          </p>

          <div className="not-prose my-12 rounded-2xl bg-gradient-to-r from-[#75143F] to-[#0F3053] p-8 md:p-10 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Chcesz zobaczyć, jak pracujemy, zanim zdecydujesz?
            </h3>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Zamów darmową rolkę próbną albo umów 15 minut rozmowy, żeby dobrać pakiet pod cele Twojej firmy.
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