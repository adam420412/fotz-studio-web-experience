import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "Ile kosztuje reklama wideo na Facebooku i Instagramie?",
    answer:
      "Składa się z dwóch kosztów: produkcji filmu (od 1 900 zł netto, seria 10 rolek 12 000 zł netto) oraz budżetu mediowego Meta, który ustalasz sam i płacisz bezpośrednio platformie.",
  },
  {
    question: "Czy budżet reklamowy jest w cenie obsługi?",
    answer:
      "Nie. Budżet mediowy zawsze jest po stronie klienta i liczymy go osobno od produkcji i zarządzania kampanią.",
  },
  {
    question: "Ile powinienem przeznaczyć na budżet mediowy?",
    answer:
      "Tyle, ile jesteś w stanie testować przez kilka tygodni. Budżet ustalasz sam, zmieniasz z dnia na dzień i skalujesz to, co działa.",
  },
  {
    question: "Czy jeden film wystarczy do kampanii?",
    answer:
      "Może wystarczyć na start, ale kilka wersji kreacji daje algorytmowi Meta z czego wybierać i zwykle obniża koszt dotarcia.",
  },
  {
    question: "Kto zarządza kampanią?",
    answer:
      "W pakiecie WZROST (5 000 zł/mc) lub PARTNER (8 000 do 9 000 zł/mc) prowadzimy kampanię Meta i dostarczamy raport wyników.",
  },
];

const CANONICAL = "https://fotz.pl/blog/ile-kosztuje-reklama-wideo-facebook";

export default function BlogIleKosztujeReklamaWideoFacebook() {
  return (
    <Layout>
      <SEOHead
        title="Ile kosztuje reklama wideo na Facebooku i Instagramie"
        description="Ile kosztuje reklama wideo na Facebooku i Instagramie? Rozkładamy dwa koszty: produkcję filmu (od 1 900 zł) i budżet mediowy Meta. Sprawdź, ile realnie potrzebujesz."
        canonical={CANONICAL}
        keywords="reklama wideo facebook, reklama wideo instagram, koszt reklamy wideo, budżet mediowy Meta, produkcja video cennik, kampania Meta koszt"
      />
      <ArticleSchema
        title="Ile kosztuje reklama wideo na Facebooku i Instagramie"
        description="Ile kosztuje reklama wideo na Facebooku i Instagramie? Rozkładamy dwa koszty: produkcję filmu (od 1 900 zł) i budżet mediowy Meta. Sprawdź, ile realnie potrzebujesz."
        url={CANONICAL}
        datePublished="2026-07-11"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Ile kosztuje reklama wideo na Facebooku i Instagramie", url: CANONICAL },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-[#0F3053] to-[#75143F] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Ile kosztuje reklama wideo na Facebooku i Instagramie", url: "/blog/ile-kosztuje-reklama-wideo-facebook" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-[#75143F] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Wideo
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ile kosztuje reklama wideo na Facebooku i Instagramie
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Na pytanie o koszt reklamy wideo na Facebooku i Instagramie trzeba odpowiedzieć uczciwie: składają się na niego dwie osobne rzeczy.
            </p>
          </div>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-16 prose prose-lg">
        <FadeInView>
          <p className="lead text-lg text-gray-700">
            Na pytanie o koszt reklamy wideo na Facebooku i Instagramie trzeba odpowiedzieć uczciwie: składają się na niego dwie osobne rzeczy. Pierwsza to produkcja filmu, druga to budżet mediowy, czyli pieniądze, które płacisz Meta za wyświetlenia. Mylenie tych dwóch kosztów to najczęstszy powód, dla którego firmy przepłacają albo rozczarowują się wynikiem. Rozłóżmy to po kolei.
          </p>

          <h2>Koszt 1: produkcja materiału wideo</h2>
          <p>
            Reklama jest tak dobra, jak film, który puszczasz. U nas produkcja wygląda tak.
          </p>
          <ul>
            <li><strong>Pojedynczy film lub rolka: od 1 900 zł netto.</strong> Jeden materiał pod konkretną kampanię.</li>
            <li><strong>Seria 10 rolek z 1 dnia zdjęciowego: 12 000 zł netto.</strong> Czyli <strong>1 200 zł</strong> za gotowy film i zapas kreacji do testowania. W cenie: scenariusze, zdjęcia, montaż, napisy, grafiki i pliki gotowe do publikacji.</li>
          </ul>
          <p>
            Do reklam na Facebooku i Instagramie warto mieć kilka wersji tego samego przekazu. Algorytm Meta sam wybiera zwycięzcę, więc im więcej dobrych kreacji podasz, tym niższy koszt dotarcia osiągniesz.
          </p>

          <h2>Koszt 2: budżet mediowy Meta</h2>
          <p>
            Budżet mediowy to osobna sprawa i płacisz go bezpośrednio Meta, nie nam. Ustala go aukcja, w której konkurujesz z innymi reklamodawcami o uwagę tych samych odbiorców.
          </p>
          <p>
            Kilka zasad, które warto znać.
          </p>
          <ul>
            <li><strong>Budżet ustalasz sam i możesz go zmieniać z dnia na dzień.</strong> Zaczynasz od kwoty, którą jesteś gotów przetestować, i skalujesz to, co działa.</li>
            <li><strong>Płacisz za wynik, nie za sam fakt emisji.</strong> Koszt zależy od jakości kreacji, trafności grupy odbiorców i konkurencji w Twojej branży.</li>
            <li><strong>Produkcja to koszt jednorazowy, budżet mediowy to koszt bieżący.</strong> Dobry film pracuje przez wiele tygodni, więc jego koszt rozkłada się na całą kampanię.</li>
          </ul>
          <p>
            W FOTZ Studio budżet reklamowy jest zawsze po stronie klienta i liczymy go osobno od obsługi. Dzięki temu wiesz dokładnie, ile idzie na produkcję, ile na zarządzanie, a ile realnie trafia do Meta.
          </p>

          <h2>Jak to spina się w abonamencie</h2>
          <p>
            Jeśli nie chcesz pilnować kampanii samodzielnie, prowadzimy to w pakietach.
          </p>
          <ul>
            <li><strong>WZROST: 5 000 zł/mc.</strong> Opieka nad jednym kanałem social plus zarządzanie kampanią Meta i raport wyników.</li>
            <li><strong>PARTNER: 8 000 do 9 000 zł/mc.</strong> WZROST plus 4 rolki miesięcznie, SEO on going, strategia kwartalna i priorytet.</li>
          </ul>
          <p>
            Do tego dochodzi Twój budżet mediowy, który ustalamy wspólnie na starcie w oparciu o cel kampanii.
          </p>

          <h2>Ile realnie potrzebujesz na start</h2>
          <p>
            Zestaw minimalny, żeby reklama wideo na Facebooku i Instagramie miała sens, to jeden solidny film (od <strong>1 900 zł</strong>) plus budżet mediowy, który jesteś w stanie testować przez kilka tygodni. Realnie lepiej wejść z serią materiałów, bo daje algorytmowi z czego wybierać i szybciej obniża koszt dotarcia.
          </p>
          <p>
            Nie sprzedajemy zasięgów dla samych zasięgów. Reklama ma przynosić leady i sprzedaż, a naszą robotą jest tak dobrać kreację i grupę, żeby każda złotówka budżetu pracowała mocniej.
          </p>

          <h2>Dlaczego my</h2>
          <p>
            Prowadzimy w całości Instagram Enea Stadionu, a nasze materiały robią <strong>ponad 3 mln wyświetleń miesięcznie</strong>. Realizowaliśmy m.in. dla <strong>Żabki</strong>, <strong>WSB Merito</strong>, <strong>Zakładów Cegielskiego</strong> i <strong>FPS</strong>. Mamy <strong>ponad 160 opinii Google ze średnią 5.0</strong>.
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
              Nagramy jeden materiał reklamowy, żebyś zobaczył jakość zanim ruszysz z budżetem.
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
                <Link to="/blog/ile-kosztuje-film-reklamowy" className="text-[#75143F] underline font-medium">
                  Ile kosztuje film reklamowy dla firmy
                </Link>
              </li>
              <li>
                <Link to="/blog/platformy-social-media-2026" className="text-[#75143F] underline font-medium">
                  Platformy social media 2026
                </Link>
              </li>
            </ul>
          </div>
        </FadeInView>
      </article>
    </Layout>
  );
}
