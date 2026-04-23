import { Link } from "react-router-dom";
import { ArrowRight, MapPin, CheckCircle2, Phone, Mail } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";

const cities: { slug: string; name: string }[] = [
  { slug: "poznan", name: "Poznań" },
  { slug: "warszawa", name: "Warszawa" },
  { slug: "krakow", name: "Kraków" },
  { slug: "wroclaw", name: "Wrocław" },
  { slug: "gdansk", name: "Gdańsk" },
  { slug: "lodz", name: "Łódź" },
  { slug: "katowice", name: "Katowice" },
  { slug: "lublin", name: "Lublin" },
  { slug: "bialystok", name: "Białystok" },
  { slug: "szczecin", name: "Szczecin" },
  { slug: "bydgoszcz", name: "Bydgoszcz" },
  { slug: "torun", name: "Toruń" },
  { slug: "rzeszow", name: "Rzeszów" },
  { slug: "kielce", name: "Kielce" },
  { slug: "olsztyn", name: "Olsztyn" },
  { slug: "opole", name: "Opole" },
  { slug: "gdynia", name: "Gdynia" },
  { slug: "sopot", name: "Sopot" },
  { slug: "radom", name: "Radom" },
  { slug: "czestochowa", name: "Częstochowa" },
  { slug: "plock", name: "Płock" },
  { slug: "tarnow", name: "Tarnów" },
  { slug: "gorzow", name: "Gorzów Wielkopolski" },
  { slug: "elblag", name: "Elbląg" },
  { slug: "koszalin", name: "Koszalin" },
  { slug: "zielona-gora", name: "Zielona Góra" },
  { slug: "walbrzych", name: "Wałbrzych" },
  { slug: "kalisz", name: "Kalisz" },
];

const services = [
  "Strategia marketingowa i komunikacja marki",
  "Kampanie Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads",
  "Pozycjonowanie SEO i content marketing",
  "Prowadzenie social media (Instagram, Facebook, TikTok, LinkedIn)",
  "Strony internetowe, landing page i sklepy e-commerce",
  "Branding, identyfikacja wizualna i logo",
  "Produkcja video, spoty reklamowe, fotografia i drony",
  "Analityka, raportowanie i optymalizacja konwersji",
];

export default function AgencjaMarketingowaHub() {
  return (
    <>
      <SEOHead
        title="Agencja marketingowa - FOTZ Studio | Marketing dla firm"
        description="Agencja marketingowa FOTZ Studio - kompleksowy marketing dla Twojej firmy w 28 miastach Polski. Strategia, reklamy, SEO, social media, video, branding."
        canonical="https://fotz.pl/agencja-marketingowa"
        keywords="agencja marketingowa, marketing dla firm, agencja reklamowa, kampanie reklamowe, agencja marketingowa Polska"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja marketingowa", url: "https://fotz.pl/agencja-marketingowa" },
        ]}
      />
      <ServiceSchema
        name="Agencja marketingowa - kompleksowe usługi"
        description="Kompleksowe usługi agencji marketingowej: strategia, kampanie reklamowe, SEO, social media, content, video i branding dla firm w całej Polsce."
        provider="Fotz Studio"
        areaServed="Polska"
      />

      <Layout>
        <section className="container-wide px-6 md:px-12 pt-40 pb-16">
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground">Strona główna</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Agencja marketingowa</span>
          </nav>

          <h1 className="font-geist text-5xl md:text-7xl tracking-tight mb-6">
            Agencja marketingowa
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-10">
            FOTZ Studio to agencja marketingowa, która łączy strategię, kreację i performance.
            Pomagamy firmom w całej Polsce zdobywać klientów i budować marki, które się sprzedają.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/konsultacja">Bezpłatna konsultacja <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+48790814814"><Phone className="w-4 h-4 mr-2" /> +48 790 814 814</a>
            </Button>
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 py-16 border-t border-border">
          <h2 className="font-geist text-3xl md:text-4xl tracking-tight mb-8">
            Co robi dla Ciebie agencja marketingowa FOTZ
          </h2>
          <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-4">
            <p>
              Jako agencja marketingowa działamy na styku strategii, kreacji i danych.
              Nie sprzedajemy pojedynczych usług w oderwaniu od celów biznesowych - zaczynamy
              od zrozumienia Twojej firmy, klientów i konkurencji, a następnie dobieramy taki
              zestaw działań, który realnie przekłada się na sprzedaż i rozpoznawalność marki.
            </p>
            <p>
              Prowadzimy kampanie reklamowe w Google Ads, Meta (Facebook + Instagram), TikTok,
              LinkedIn i YouTube. Zajmujemy się pozycjonowaniem SEO - lokalnym i ogólnopolskim,
              tworzymy treści, prowadzimy social media i produkujemy materiały video oraz
              fotograficzne. Projektujemy strony internetowe i sklepy e-commerce, które konwertują,
              oraz budujemy spójną identyfikację wizualną.
            </p>
            <p>
              W FOTZ Studio łączymy doświadczenie z lokalnymi rynkami z know-how zdobytym przy
              dużych projektach dla marek takich jak Enea, FPS Cegielski czy RPPG. Każdy klient
              otrzymuje dedykowany zespół, transparentne raportowanie i jasno zdefiniowane KPI.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-3 mt-10 max-w-3xl">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm md:text-base">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="container-wide px-6 md:px-12 py-16 border-t border-border">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="font-geist text-3xl md:text-4xl tracking-tight">
              Wybierz swoje miasto
            </h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mb-10">
            Działamy w całej Polsce. Dla każdego z największych miast prowadzimy dedykowaną
            stronę z lokalnym kontekstem, ofertą i przykładami realizacji.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.slug}
                to={`/agencja-marketingowa/${c.slug}`}
                className="group flex items-center justify-between rounded-xl border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all px-4 py-3"
              >
                <span className="font-medium">Agencja marketingowa {c.name}</span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </section>

        <section className="container-wide px-6 md:px-12 py-20 border-t border-border">
          <div className="max-w-3xl">
            <h2 className="font-geist text-3xl md:text-4xl tracking-tight mb-4">
              Porozmawiajmy o Twoim marketingu
            </h2>
            <p className="text-muted-foreground mb-8">
              Bezpłatna konsultacja, podczas której przeanalizujemy Twoją obecną sytuację
              i zaproponujemy konkretne kroki na najbliższe 90 dni.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/konsultacja">Umów konsultację <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="mailto:adam@fotz.pl"><Mail className="w-4 h-4 mr-2" /> adam@fotz.pl</a>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
