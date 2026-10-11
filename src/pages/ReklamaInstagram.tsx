import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Image, Play, Settings2, Target, Users } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ServiceSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { EnquiryForm } from "@/components/EnquiryForm";
import { enquiryHref } from "@/lib/enquiry.mjs";

const path = "/uslugi/reklama-instagram";
const offerPath = "/performance-marketing/instagram-ads";
const contactHref = enquiryHref("marketing", "instagram_ads");
const breadcrumbs = [
  { label: "Strona główna", href: "/" },
  { label: "Usługi", href: "/uslugi" },
  { label: "Reklama Instagram" },
];
const formats = [
  { icon: Image, title: "Zdjęcia i karuzele w feedzie", text: "Pokazujemy produkt, usługę lub realizację w kilku kadrach. Karuzela pozwala rozłożyć ofertę na kolejne plansze i zakończyć ją wezwaniem do kontaktu." },
  { icon: Play, title: "Reklamy w Reels", text: "Pionowe filmy dopasowane do telefonu. Projektujemy pierwsze sekundy, napisy i zakończenie; przed emisją sprawdzamy podgląd tego umiejscowienia." },
  { icon: Target, title: "Reklamy w Stories", text: "Pełnoekranowy materiał z jednym komunikatem i jednym działaniem. Sprawdza się przy ofertach ograniczonych w czasie i zapytaniach przez formularz." },
  { icon: Users, title: "Odbiorcy i remarketing", text: "Docieramy do osób, które odwiedziły stronę lub profil, oraz do nowych odbiorców podobnych do klientów. Zakres targetowania zależy od konta i zasad Meta." },
  { icon: Settings2, title: "Konfiguracja w Menedżerze reklam", text: "Pracujemy w Menedżerze reklam Meta: cel, budżet, harmonogram, umiejscowienia i miejsce docelowe. Kreacje i warunki testu akceptujesz przed startem." },
  { icon: BarChart3, title: "Pomiar i raport", text: "Uzgadniamy zdarzenia, oznaczenia linków i sposób odbierania zgłoszeń. W raporcie oddzielamy dane platformy od potwierdzonych wyników w firmie." },
];
const steps = [
  { title: "Brief i cel kampanii", text: "Ustalamy ofertę, obszar działania, odbiorców i oczekiwany następny krok: wizytę na stronie, zapytanie lub zakup. Sprawdzamy profil, stronę docelową i dostępne materiały." },
  { title: "Kreacje i akceptacja", text: "Przygotowujemy teksty, grafiki lub filmy w wariantach do porównania. Liczbę wersji, poprawki i ewentualne nagrania zapisujemy w ofercie. Możemy wykorzystać Twoje zdjęcia i rolki po sprawdzeniu jakości i praw do materiałów." },
  { title: "Uruchomienie i kontrola emisji", text: "Konfigurujemy kampanię, testujemy linki i pomiar, sprawdzamy, czy zgłoszenia trafiają do właściwej osoby. Konta reklamowe i profil pozostają własnością firmy; ustalamy tylko potrzebne uprawnienia." },
  { title: "Wnioski i kolejne decyzje", text: "Porównujemy komunikaty, materiały i odbiorców, a po stronie firmy weryfikujemy jakość kontaktów. Zmiany budżetu i kreacji wymagają uzgodnienia; moment przeglądu ustalamy przed startem." },
];
const faqs = [
  { question: "Ile kosztuje reklama na Instagramie?", answer: "Koszt współpracy rozpisujemy na obsługę kampanii, przygotowanie materiałów i budżet reklamowy płacony Meta. Stawki za kliknięcie lub pozyskanie kontaktu zależą od oferty, konkurencji, odbiorców i kreacji, dlatego nie podajemy jednej ceny dla każdej firmy. Prześlij profil, adres strony, opis oferty i planowany budżet — po briefie potwierdzimy zakres i wycenę." },
  { question: "Dla jakich firm reklama na Instagramie ma sens?", answer: "Najłatwiej pracuje się tam, gdzie produkt, usługę lub realizację można pokazać w zdjęciu albo krótkim filmie. Firmy B2B i usługi techniczne również mogą korzystać z Instagrama, ale wymagają innego komunikatu i często innych kanałów. Na konsultacji oceniamy, czy kampania pasuje do celu i materiałów, a nie zakładamy tego z góry." },
  { question: "Czy Instagram Ads to to samo co Facebook Ads?", answer: "Obie platformy obsługuje ten sam Menedżer reklam Meta. Kampanię można emitować tylko na Instagramie, tylko na Facebooku albo w obu miejscach jednocześnie i porównać wyniki według wspólnego celu. Nie zakładamy, że jedna platforma będzie tańsza lub lepsza dla każdej firmy; kreacje dopasowujemy do każdego umiejscowienia." },
  { question: "Jakie formaty reklam wybrać?", answer: "Zdjęcie lub karuzela porządkują ofertę, Stories i Reels dają miejsce na pionowy film. Format dobieramy do komunikatu, odbiorców i dostępnych materiałów, a liczbę wariantów do testu zapisujemy w zakresie produkcji. Nie każdy film z profilu nadaje się od razu do reklamy; sprawdzamy kadrowanie, napisy, dźwięk i prawa do muzyki." },
  { question: "Ile obserwujących potrzebuję, żeby reklama działała?", answer: "Reklamy działają niezależnie od liczby obserwujących. Ważniejsze jest to, co zobaczy osoba, która po kliknięciu sprawdzi profil lub stronę: aktualny opis, kontakt i spójne materiały. Jeśli profil wymaga uporządkowania, możemy połączyć kampanię z obsługą social media w jednym planie." },
  { question: "Jak mierzycie wyniki kampanii?", answer: "Wskaźnik dobieramy do zadania kampanii: zasięg mówi o dotarciu, kliknięcie o reakcji, a odebrany formularz o zgłoszeniu. Jeśli wdrażamy Meta Pixel lub integrację zdarzeń, testujemy ich działanie i ustawienia zgód. Zakres i częstotliwość raportu ustalamy w ofercie; nie deklarujemy terminu ani liczby klientów." },
];

export default function ReklamaInstagram() {
  return (
    <>
      <SEOHead
        title="Reklama na Instagramie dla firm — kampanie Meta Ads | FOTZ"
        description="Reklama na Instagramie dla firm: kreacje, Stories i Reels, konfiguracja kampanii w Meta Ads oraz pomiar zapytań. Ustal zakres i wycenę z FOTZ Studio."
        canonical={`https://www.fotz-studio.pl${path}`}
        keywords="reklama instagram, reklamy na instagramie, instagram ads, kampanie instagram, instagram dla firm"
      />
      <ServiceSchema name="Reklama na Instagramie (Instagram Ads)" description="Przygotowanie kreacji, konfiguracja i prowadzenie kampanii reklamowych na Instagramie w Menedżerze reklam Meta, z pomiarem zapytań w uzgodnionym zakresie." areaServed="Polska" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema items={faqs} />

      <Layout workPlacement="manual">
        <PageBreadcrumbs items={breadcrumbs} />

        <section className="container-wide px-6 md:px-12 pt-6 pb-12 md:py-16">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">
            <div>
              <p className="dv-eyebrow mb-4">Reklama na Instagramie</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading leading-tight mb-6">Reklama Instagram dla firm.<span className="block text-gradient">Od kreacji do zapytania.</span></h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">Przygotowujemy materiały, konfigurujemy kampanię w Menedżerze reklam Meta i sprawdzamy drogę od reklamy do kontaktu. Zakres, budżet i sposób oceny wyników ustalamy przed startem.</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <a href="#formularz" className="dv-btn dv-btn-primary">Zapytaj o kampanię <ArrowRight aria-hidden="true" className="w-4 h-4" /></a>
                <Link to={offerPath} className="dv-btn dv-btn-secondary">Pełna oferta Instagram Ads</Link>
              </div>
            </div>
            <aside className="rounded-3xl border border-border bg-card p-6 md:p-8">
              <p className="text-sm text-primary uppercase tracking-wider mb-6">Co ustalamy na początku</p>
              <ol className="space-y-6">{["Ofertę, odbiorców i następny krok, który ma wykonać klient.", "Osobno: obsługę kampanii, produkcję kreacji i budżet płacony Meta.", "Pomiar oraz sposób odbierania i oceny zapytań po stronie firmy."].map((text, index) => <li key={text} className="flex gap-4"><span aria-hidden="true" className="text-2xl font-heading text-primary tabular-nums shrink-0 whitespace-nowrap">0{index + 1}</span><p className="leading-relaxed">{text}</p></li>)}</ol>
              <p className="text-sm text-muted-foreground border-t border-border pt-5 mt-6">Zakres, koszt i termin potwierdzamy w ofercie przed rozpoczęciem prac.</p>
            </aside>
          </div>
        </section>

        <section id="formaty" className="bg-muted/30 border-y border-border py-12 md:py-16 scroll-mt-28" aria-labelledby="formaty-title">
          <div className="container-wide px-6 md:px-12">
            <p className="dv-eyebrow mb-3">Zakres pracy</p>
            <h2 id="formaty-title" className="text-3xl md:text-4xl font-heading mb-4">Formaty i elementy kampanii na Instagramie</h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mb-8">Każdy format ma inne zadanie. Dobieramy je do komunikatu, odbiorców i materiałów, które firma ma lub które przygotujemy, a nie do listy wszystkich dostępnych umiejscowień.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">{formats.map(item => <article key={item.title} className="rounded-2xl border border-border bg-background p-6"><item.icon aria-hidden="true" className="w-6 h-6 text-primary mb-5" /><h3 className="text-xl font-heading mb-3">{item.title}</h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}</div>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="proces-title">
          <h2 id="proces-title" className="text-3xl md:text-4xl font-heading mb-8">Jak prowadzimy reklamę na Instagramie?</h2>
          {steps.map((item, index) => <article key={item.title} className="grid md:grid-cols-[1fr_1.4fr] gap-5 md:gap-12 py-8 border-t border-border"><div><p aria-hidden="true" className="text-sm text-primary mb-3">0{index + 1}</p><h3 className="text-2xl font-heading">{item.title}</h3></div><p className="text-muted-foreground leading-relaxed">{item.text}</p></article>)}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 mt-6 grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
            <div><h3 className="text-2xl font-heading mb-3">Pełny opis oferty Instagram Ads</h3><p className="text-muted-foreground leading-relaxed">Szczegółowy zakres obsługi kampanii, zasady rozliczania budżetu, sposób pomiaru oraz przykład kampanii dla Dawid EDU opisaliśmy na stronie oferty. Ta podstrona pokazuje skrót dla firm, które szukają reklamy na Instagramie.</p></div>
            <div className="flex flex-col gap-3 md:items-end"><Link to={offerPath} className="dv-btn dv-btn-primary">Zobacz ofertę Instagram Ads <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link><Link to="/realizacje/dawid-edu" className="underline underline-offset-4">Realizacja: kampania Meta Ads dla Dawid EDU</Link></div>
          </div>
        </section>

        <SelectedWork />

        <section className="container-wide px-6 md:px-12 py-12 md:py-16" aria-labelledby="powiazane-title">
          <h2 id="powiazane-title" className="text-2xl md:text-3xl font-heading mb-6">Reklama to część większego planu</h2>
          <ul className="grid md:grid-cols-3 gap-5">{[
            { to: "/uslugi/reklama-facebook", title: "Reklama na Facebooku i Instagramie", text: "Kampanie Meta Ads w obu kanałach, formularze i pomiar zapytań." },
            { to: "/social-media/obsluga", title: "Obsługa social media", text: "Plan publikacji, treści, moderacja i raport dla profili firmowych." },
            { to: "/uslugi/social-media-marketing", title: "Social media marketing", text: "Strategia, własne zdjęcia i filmy oraz kampanie w jednym zakresie." },
          ].map(item => <li key={item.to} className="rounded-2xl border border-border bg-card p-6"><h3 className="text-xl font-heading mb-2"><Link to={item.to} className="underline underline-offset-4">{item.title}</Link></h3><p className="text-muted-foreground leading-relaxed">{item.text}</p></li>)}</ul>
        </section>

        <section className="container-wide max-w-4xl px-6 md:px-12 pb-12 md:pb-16" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-3xl font-heading mb-7">Pytania o reklamę na Instagramie</h2>
          <div className="divide-y divide-border border-y border-border">{faqs.map(item => <details key={item.question} className="group py-5"><summary className="cursor-pointer font-medium text-lg pr-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary">{item.question}</summary><p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p></details>)}</div>
        </section>

        <section className="container-wide px-6 md:px-12 pb-6" aria-labelledby="kontakt-title">
          <div className="rounded-3xl border border-border bg-card p-6 md:p-10 flex flex-wrap items-center justify-between gap-6"><div><h2 id="kontakt-title" className="text-2xl md:text-3xl font-heading mb-3">Zapytaj o reklamę na Instagramie.</h2><p className="text-muted-foreground max-w-xl">Prześlij profil, adres strony i opis oferty. Odpowiemy z propozycją zakresu i pytaniami o budżet oraz materiały.</p></div><Link to={contactHref} className="dv-btn dv-btn-secondary">Przejdź do strony kontaktu <ArrowRight aria-hidden="true" className="w-4 h-4" /></Link></div>
        </section>
        <div className="container-wide max-w-4xl px-6 md:px-12 pb-16"><EnquiryForm defaultService="marketing" defaultVariant="instagram_ads" /></div>
      </Layout>
    </>
  );
}
