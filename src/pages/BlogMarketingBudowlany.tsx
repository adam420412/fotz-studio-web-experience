import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Building2, Hammer, TrendingUp, Star, Users, MapPin, FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

export default function BlogMarketingBudowlany() {
  const breadcrumbs = [
    { name: "Strona glowna", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Marketing firma budowlana", url: "/blog/marketing-firma-budowlana" },
  ];

  const faqItems = [
    {
      question: "Jakie sa najwazniejsze kanaly marketingu dla firm budowlanych?",
      answer:
        "Dla firm budowlanych najwazniejsze kanaly to: 1) Google Moja Firma — lokalne SEO, opinie, zdjecia. 2) Google Ads lokalne — reklamy na terenie dzialalnosci. 3) SEO lokalne — ranking dla fraza typu 'remont mieszkania Poznan' czy 'budownictwo pod klucz'. 4) LinkedIn B2B — targetowanie wlascicieli firm, inwestorow, architekow. 5) Facebook/Instagram — portfolio zdjec przed/po, relacje z budowy. 6) Strona internetowa — katalog projektow, formularz oferty, trust signals. 7) Rekomendacje i opinie online — Trustpilot, Google Reviews — to wplyw na decyzje klientow.",
    },
    {
      question: "Jak SEO lokalne dziala dla firm budowlanych?",
      answer:
        "SEO lokalne dla firm budowlanych opiera sie na: 1) Google Moja Firma — zoptymalizowany profil z kategorii 'Budownictwo i generalny wykonawca'. 2) Czesze lokalne w titleach i contentcie — 'remont kuchni Poznan', 'dom z bali dolny slask'. 3) Linki z katalogów firm (Allegro.pl, local directories). 4) Recenzje Google — wiecej gwiazdek = wyzsze rankingi. 5) Umieszczenie siedziby na mapach. 6) Strukturalne dane lokalne (NAP — Name, Address, Phone consistency). Celem jest ranking #1 w Google Maps dla 'remont Twoje_miasto' i takich long-tail fraza.",
    },
    {
      question: "Ile kosztuja reklamy Google Ads dla firmy budowlanej?",
      answer:
        "Koszt Google Ads dla firm budowlanych wynosi zwykle: CPC (cost per click) 0.50-2.00 PLN dla slow kluczowych jak 'remont mieszkania', 'budownictwo' w zaleznosci od konkurencji w miescie. Dla fraza bardzo lokalne (np. 'remont lazienki Wroclaw') 0.20-0.80 PLN. Budzet dobowy 50-200 PLN dzienny (1500-6000 PLN/mies) jest wystarczajacy dla malej firmy. Reklamy warte sie wyplyca jezeli konwersja (lead, telefon) kosztuje ponizej 20-30% ACV projektu.",
    },
    {
      question: "Jak zbudowac portfolio zdjec przed/po dla firmy budowlanej?",
      answer:
        "Portfolio przed/po to najwazniejszy trust signal dla firm budowlanych: 1) Fotografia — zdjecia od zawsze przed i po kazdego projektu. Rozdzielczosc minimum 1200px. 2) Organizacja — pogrupuj po typach (remonty, budynki, wnętrza). 3) Opisy — kazda realizacja powinna miec opis co bylo do zrobienia, jakie materialy, jak dlugo. 4) Galerie na stronie — zoptymalizowane na mobilu (lazy load). 5) Case study — dla duzych projektow napisz 500-800 slow artykulu: problem, rozwiazanie, efekty, cena. 6) Social media — publikuj na Instagram, Facebook weekly. 7) Video — 15-30 sekundowe time-lapse z budowy trafia lepiej niz foto.",
    },
    {
      question: "Czy LinkedIn jest uzyteczny dla marketing firmy budowlanej?",
      answer:
        "LinkedIn jest bardzo uzyteczny dla B2B firm budowlanych — polaczenie z biurami architektonicznych, projektantami, duzymi inwestorami. Strategia: 1) Profil firmy LinkedIn z podsumowaniem uslug, linkami do portfolio. 2) Employee advocacy — pracownicy dzielaja sie artyklami, zdjęciami z budowy (buduje autorytetu). 3) Content marketing — publikuj artykuly o trendach w budownictwie, zmianach przepisow, case studies. 4) LinkedIn Ads — targetowanie po stanowisku (kierownik projektu, inwestor, architekt) i branzy. 5) Direct outreach — wysyłaj spersonalizowane wiadomosci do potencjalnych klientow (inwestycyjnych, developerów). ROI LinkedIn dla firm budowlanych mozna byc 3-5x lepszy niz Facebook dla B2B.",
    },
    {
      question: "Jaka jest rola opinii i reputacji online dla firm budowlanych?",
      answer:
        "Opinie online sa kluczowe dla firm budowlanych — 89% potencjalnych klientow czyta oceny przed wyborem. Impact: 1) Ranking — wiecej gwiazdek w Google = wyzsza pozycja w mapach i wyszukiwarce. 2) Konwersja — strony z >4.5 gwiazdkami maja 2-3x wyzszy conversion rate. 3) Zaufanie — opinie to naturalny dowod jakosci pracy. 4) Reputacja — zla opinia bez odpowiedzi moze kosztowac projekty. Praktyka: zbieraj opinie aktywnie (wzywaj klientow emailem, SMS po projekcie), odpowiadaj na negatywne (zawsze konstruktywnie), pokazuj opinie na stronie i w mediach spolecznych.",
    },
  ];

  const features = [
    { icon: Building2, title: "Strona internetowa", desc: "Katalog projektow, portfolio przed/po, formularz oferty, lokalne SEO." },
    { icon: MapPin, title: "Google Moja Firma", desc: "Profil lokalny, opinie, zdjecia, kierunki i godziny otwarcia." },
    { icon: TrendingUp, title: "Google Ads lokalne", desc: "Reklamy PPC dla slow kluczowych typu 'remont Poznan' czy 'budowa domow'." },
    { icon: FileText, title: "Content marketing", desc: "Blog o budownictwie, remoncie, artykuly o trendach i przepisach." },
    { icon: Star, title: "Opinie i recenzje", desc: "Google Reviews, Trustpilot, portfolio zdjęć przed/po, case studies." },
    { icon: Users, title: "LinkedIn B2B", desc: "Targetowanie architekow, inwestorow, kierownikow projektow." },
  ];

  return (
    <>
      <SEOHead
        title="Marketing dla firmy budowlanej — SEO, Google Ads, LinkedIn | fotz.pl"
        description="Marketing dla firmy budowlanej — jak pozyskiwac klientow przez SEO lokalne, Google Ads, LinkedIn B2B, portfolio i opinie. Strategie dla firm budowlanych."
        canonical="https://fotz.pl/blog/marketing-firma-budowlana"

        keywords="Marketing dla firmy budowlanej, Marketing dla firmy budowlanej poradnik, Marketing dla firmy budowlanej strategia, Marketing dla firmy budowlanej jak zrobić, Marketing dla firmy budowlanej marketing, Marketing dla firmy budowlanej przykłady, Marketing dla firmy budowlanej w Polsce"
      />
      <ArticleSchema
        title="Marketing dla firmy budowlanej — SEO, Google Ads, LinkedIn"
        description="Kompletny poradnik marketingu dla firm budowlanych. SEO lokalne, Google Ads, LinkedIn B2B, portfolio realizacji, opinie i reputacja online."
        datePublished="2025-04-05"
        dateModified="2025-07-30"
        url="https://fotz.pl/blog/marketing-firma-budowlana"
        author="Fotz Studio"
      />
      <BreadcrumbSchema breadcrumbs={breadcrumbs} />

      <Layout>
        <PageBreadcrumbs breadcrumbs={breadcrumbs} />

        <section className="py-12 md:py-16 bg-gradient-to-br from-slate-950 to-slate-900">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <div>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4 flex-wrap">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min czytania</span>
                <span className="flex items-center gap-1"><Building2 className="w-4 h-4" /> Marketing B2B</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Marketing dla firmy budowlanej — SEO, Google Ads, LinkedIn
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Jak pozyskiwac klientow przez internet? Strategie SEO lokalne, Google Ads, portfolio realizacji, opinie i reputacja online dla firm budowlanych.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 md:px-6">

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-4 mb-6">Kanaly marketingu dla firm budowlanych</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((f, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition">
                    <div className="flex items-start gap-3">
                      <f.icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-slate-900 text-sm mb-1">{f.title}</h3>
                        <p className="text-slate-600 text-xs">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. SEO lokalne dla firm budowlanych</h2>
              <p className="text-slate-700 mb-4">
                SEO lokalne jest kluczowe dla firm budowlanych — potencjalny klient szuka rozwiazania w swojej okolicy: "remont mieszkania Poznan", "budownictwo pod klucz dolny slask", "generalny wykonawca Wroclaw". Google Maps i lokalne wyniki sa pierwszymi miejscami gdzie szukaja.
              </p>
              <p className="text-slate-700 mb-4">
                Strategia SEO lokalnego:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>Google Moja Firma</strong> — zoptymalizuj profil: kategorie (Budownictwo, Generalny wykonawca, Remont wnętrz), pelny opis, zdjęcia, video, linki do portfolio.</li>
                <li><strong>Czesci lokalne w tytulach i H1</strong> — zamiast "Remont kuchni" pisz "Remont kuchni w Poznaniu" lub nawet "Remont kuchni Grunwald Poznan".</li>
                <li><strong>Recenzje Google</strong> — zwiekszaj liczbe opinii (wiecej gwiazdek = wyzsza pozycja). Otrzymuj recenzje bezposrednio od satysfakcjonowanych klientow.</li>
                <li><strong>NAP consistency</strong> — upewnij sie ze nazwa, adres i telefon sa identyczne na wszystkich platformach (Google, Facebook, PagesYellow, Allegro).</li>
                <li><strong>Lokalne backlinki</strong> — otrzymuj linki z lokalnych stron (czasopismo lokalne, organizacje biznesowe, katalogi firm w Twojej okolicy).</li>
                <li><strong>Schema.org structured data</strong> — dodaj dane strukturalne dla lokalnej firmy, godzin pracy, adresu, telefonu.</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Google Ads dla firm budowlanych</h2>
              <p className="text-slate-700 mb-4">
                Google Ads (dawniej Adwords) to najszybszy sposob na pozyskanie leadow — reklamy pojawiaja sie na górze wynikow Google bezposrednio gdy klient szuka "remont lazienki" czy "budownictwo pod klucz".
              </p>
              <p className="text-slate-700 mb-4">
                Dla firm budowlanych CPC (koszt za klik) wynosi typowo 0.50-2.00 PLN dla ogolnych slow (brandy). Dla dlugo-tailowych "remont lazienki Poznan" 0.20-0.80 PLN. Budzet 100-200 PLN dziennie to start, pozwala na 50-400 klikov dziennie w zaleznosci od konkurencji.
              </p>
              <p className="text-slate-700 mb-4">
                Jak zbudowac kampanie Google Ads:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>Search campaigns</strong> — reklamy dla slow kluczowych: "remont mieszkania", "budowa domu", "generalny wykonawca".</li>
                <li><strong>Landing page — conversion-focused</strong> — strona powinna miec jasny CTA (Zapytaj o oferte, Zadzwon teraz), formularz kontaktu, zdjęcia pracy.</li>
                <li><strong>Ad extensions</strong> — dodaj telefon, lokalizacje, link do portfolio.</li>
                <li><strong>Geo-targeting</strong> — targetuj tylko miasto/rejon gdzie dziala firma.</li>
                <li><strong>Negative keywords</strong> — wyklucz slowa bez sensu ("darmowy", "praca dla studenta") aby nie zmarnowac budzetu.</li>
                <li><strong>Tracking and optimization</strong> — sledz konwersje (lead, telefon), optymalizuj dla najlepiej konwertujacych slow.</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Portfolio realizacji — przed i po</h2>
              <p className="text-slate-700 mb-4">
                Portfolio zdjęć przed/po to najwazniejszy trust signal dla firm budowlanych. Klientowi trzeba pokazac ze wykonales podobne prace, ze znasz sie na rzeczy.
              </p>
              <p className="text-slate-700 mb-4">
                Jak zbudowac silne portfolio:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>Fotografia professionalna</strong> — zdjęcia wysokiej rozdzielczosci (minimum 1200px szerokosc) przed i po kazdego projektu. Jasne oswietlenie, proste ujęcia.</li>
                <li><strong>Pogrupowanie po kategoriach</strong> — remonty mieszkan, budynki, wnętrza, male remonty (lazienki, kuchnie), fasady.</li>
                <li><strong>Galeria responsywna na stronie</strong> — lagujace sie obrazy (lazy load), lightbox do powiększenia, filtry.</li>
                <li><strong>Case study — artykuly 500-800 slow</strong> — dla wiekszych projektow napisz artykul: jaki byl problem, jakie byly wyzwania, jakie materialy, jak dlug owało, ile kosztowalo, finalne efekty. Link do zdjęć.</li>
                <li><strong>Social media — Instagram, Facebook</strong> — publikuj weekly zdjęcia z projektow, time-lapse z budowy (15-30 sekund), before/after karuzele.</li>
                <li><strong>Video testimoniale</strong> — nagrywaj klientow ktorzy opowiadaja jak przebiegala wspólpraca i efekty. 30-60 sekund, autentyczne.</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Marketing na LinkedIn — B2B dla firm budowlanych</h2>
              <p className="text-slate-700 mb-4">
                LinkedIn jest silnym kanałem dla firm budowlanych bo pozwala na dotarcie do duzo wiekszych klientow: biur architektonicznych, projektantow, duzych inwestorow, deweloperow. To B2B — calem biznes.
              </p>
              <p className="text-slate-700 mb-4">
                Strategia LinkedIn:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>Profil firmy LinkedIn</strong> — pełne imformacje o uslugach, linki do portfolio, 300+ slow w opisie pozycjonujacym Twoj biznes.</li>
                <li><strong>Employee advocacy</strong> — pracownicy dzielaja sie artyklami, zdjęciami z budowy na swoim profilu. Zwiększa reach i buduje autorytetu.</li>
                <li><strong>Content marketing</strong> — publikuj artykuly 500-1000 slow o: trendach w budownictwie, zmianach przepisów, tipach z budowy, case studies wiekszych projektow.</li>
                <li><strong>LinkedIn Ads</strong> — targetuj bezposrednio: pozycje (Projektant, Kierownik projektu, Inwestor), branze (Budowa, Nieruchomosci), wielkosc firmy.</li>
                <li><strong>Direct outreach</strong> — wysyłaj spersonalizowane (!) zaproszenia i wiadomosci do potencjalnych klientow (deweloperow, projektantow, inwestorow).</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Opinie i reputacja online</h2>
              <p className="text-slate-700 mb-4">
                89% potencjalnych klientow czyta opinie przed wyborem uslugodawcy. Dla firm budowlanych opinie sa niemal tak wazne jak portfolio. Zla reputacja moze kosztowac tysiace.
              </p>
              <p className="text-slate-700 mb-4">
                Co robic:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>Zbieraj opinie aktywnie</strong> — po zakonczeniu projektu wyslij klientowi email lub SMS z prośba o opinię na Google i Trustpilot.</li>
                <li><strong>Odpowiadaj na opinie</strong> — pozytywne dziękuj, negatywne odpowiadaj konstruktywnie (bez defensywnosci). To pokazuje ze dbasz o obsługę.</li>
                <li><strong>Wyswietlaj na stronie</strong> — pokazuj średnią ocen, karuzelę opinii na stronie domowej.</li>
                <li><strong>Promocja w social media</strong> — post "Dziekujemy naszym satysfakcjonowanym klientom za 4.8 gwiazdek na Google" z kazdego miesiaca.</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Strona internetowa dla firmy budowlanej</h2>
              <p className="text-slate-700 mb-4">
                Profesjonalna strona to czesc infrastruktury marketingowej. To nie portfolio behawioralne (na Instagramie) — to miejsce gdzie prezentuj sie biznes, gdzie potencjalny klient moze poznac usluge, zobaczy portfolio, wyslac oferte, przeczyta opinie.
              </p>
              <p className="text-slate-700 mb-4">
                Co powinna zawierac:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li>Jasny opis uslug i specjalizacji.</li>
                <li>Galeria projektow (portfolio) z filtrami.</li>
                <li>Case study kilku wiekszych projektow (500-800 slow każde).</li>
                <li>Formularz do zapytania o oferte / kontaktu.</li>
                <li>Opinie i recenzje (widżet Google Reviews, Trustpilot).</li>
                <li>FAQ — czeste pytania o proces, cenę, gwarancje.</li>
                <li>Blog z artyklami o budownictwie (SEO dla slow kluczowych).</li>
                <li>Dane kontaktowe — telefon, email, adres, mapa.</li>
              </ul>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Reklama lokalna — ulotki vs. internet</h2>
              <p className="text-slate-700 mb-4">
                Tradycyjna reklama lokalna (ulotki, ogłoszenia w gazecie) jest stara forma, ale w połaczeniu z digital marketing czasami działa. Jednak ROI jest zazwyczaj nizszy niz digital.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Ulotki</strong> — kosztuja 0.10-0.30 PLN per szt. Rozpowszechnianie (drzwi do drzwi) czasami działa dla lokalnych klientów w małych miastach, ale conversion jest mizerna (0.1-0.5%). Lepiej inwestowac w Google Ads.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Internet</strong> — Google Moja Firma, SEO lokalne, Google Ads, Facebook/Instagram — to gdzie sa klienci. Targeting jest precyzyjny (ludzie szukaja konkretnie "remont poznan"), conversion wyzszy (2-5%), budżet bardziej efektywny.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Best practice</strong> — zapomnij o tradycyjnych ulotках. Skoncentruj sie na: Google Moja Firma + SEO lokalne (darmowo/tanio), Google Ads (platne, szybkie), LinkedIn B2B (dla duzych projektów), portfolio na stronie + Instagram.
              </p>
            </FadeInView>

            <FadeInView>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 mb-6">
                <Building2 className="w-5 h-5 text-blue-600 mb-2" />
                <p className="text-blue-800 font-semibold mb-2">Potrzebujesz strony zoptymalizowanej pod marketing firmy budowlanej?</p>
                <p className="text-blue-700 text-sm mb-3">
                  Tworzymy strony internetowe dla firm budowlanych: portfolio realizacji, formularz oferty, lokalny SEO, pagespeed, responsywnosc, trust signals. Od 2000 PLN.
                </p>
                <Link to="/uslugi/tworzenie-stron-internetowych" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm">
                  Tworzenie stron — oferta <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInView>

            <FadeInView>
              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Podsumowanie — strategia marketingu dla firm budowlanych</h2>
              <p className="text-slate-700 mb-4">
                Efektywny marketing dla firm budowlanych opiera sie na kilku filarach:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6 ml-2">
                <li><strong>SEO lokalne i Google Moja Firma</strong> — darmowe/takie widocznosci dla słów kluczowych "remont [miasto]".</li>
                <li><strong>Google Ads</strong> — szybkie leady dla hotych do decyzji klientów (CPC 0.50-2.00 PLN).</li>
                <li><strong>Portfolio - fotografia i case study</strong> — zaufanie i dowod jakosci.</li>
                <li><strong>Opinie i recenzje</strong> — konwersja 2-3x wyzsza dla firm z 4.5+ gwiazdkami.</li>
                <li><strong>Strona internetowa</strong> — profesjonalna prezentacja biznesu.</li>
                <li><strong>LinkedIn B2B</strong> — dla duzych projektów i targetowania biur projektowych/inwestorow.</li>
              </ol>
              <p className="text-slate-700">
                Budżet na start: 500-1000 PLN/mies (SEO lokalne + Google Ads) powinien generowac 5-15 leadow miesiecznie. W zaleznosci od konwersji (ACV, win rate) to moze oznaczac 2-5 projektów/mies dla malej firmy. Inwestycja zwróci sie szybko.
              </p>
            </FadeInView>
          </div>
        </section>

        <FadeInView>
          <section className="py-12 md:py-16 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 md:px-6">
              <h2 className="text-2xl font-bold text-center mb-8">FAQ — Marketing dla firm budowlanych</h2>
              <FAQSchema items={faqItems} />
              <Accordion type="single" collapsible className="w-full bg-white rounded-lg border border-slate-200">
                {faqItems.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`}>
                    <AccordionTrigger className="text-left px-6">
                      <span className="font-semibold text-slate-900">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-700 px-6 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </FadeInView>

        <ContactSection
          heading="Pomozemy Ci zbudowac marketing online dla firmy budowlanej"
          subheading="SEO, Google Ads, strona internetowa i LinkedIn — pomagamy firmom budowlanych pozyskiwac klientow przez internet."
        />
      </Layout>
    </>
  );
}
