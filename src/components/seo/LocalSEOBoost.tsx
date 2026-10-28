import { MapPin, Building2, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export interface LocalSEOBoostProps {
  /** City name in nominative, e.g. "Lublin" */
  city: string;
  /** City name in locative case ("w Lublinie"). Provide noun form. */
  cityLocative: string;
  /** City name after "z", "spoza" and "do", e.g. "Lublina". */
  cityGenitive: string;
  /** Full phrase with preposition where needed, e.g. "ze Szczecina". */
  cityFrom?: string;
  /** Voivodeship name e.g. "lubelskim" (locative) */
  voivodeshipLocative: string;
  /** Service variant */
  variant: "agency" | "websites" | "ecommerce";
  /** Optional: 3 example local business sectors */
  sectors?: string[];
}

const sectorDefaults: Record<LocalSEOBoostProps["variant"], string[]> = {
  agency: ["handel detaliczny", "usługi B2B", "gastronomia", "produkcja", "edukacja", "medycyna"],
  websites: ["sklepy lokalne", "kancelarie prawne", "salony beauty", "warsztaty samochodowe", "restauracje", "biura nieruchomości"],
  ecommerce: ["odzież", "kosmetyki", "elektronika", "wyposażenie wnętrz", "zdrowa żywność", "akcesoria sportowe"],
};

const variantCopy = {
  agency: {
    h2: (cityFrom: string) => `Marketing dla firm ${cityFrom} — co realnie zyskasz`,
    intro: (cityLoc: string, voi: string, cityFrom: string) =>
      `Prowadzenie biznesu w ${cityLoc} oznacza konkurencję nie tylko lokalną, ale też z markami ogólnopolskimi, które licytują te same frazy w Google. Naszą rolą jako agencji jest sprawić, żeby Twoja firma była widoczna dokładnie tam, gdzie klienci jej szukają — na mapie, w wynikach organicznych i w reklamach Meta Ads kierowanych na obszar w województwie ${voi}.`,
    points: [
      "Optymalizacja wizytówki Google Business Profile pod lokalne zapytania (\"blisko mnie\", \"w mieście\")",
      "Kampanie geograficzne w Google Ads i Meta Ads zawężone do realnego zasięgu Twojej obsługi",
      "Treści SEO uwzględniające lokalne dzielnice, ulice handlowe i sąsiednie miejscowości",
      "Linki z lokalnych portali biznesowych, izb gospodarczych i katalogów branżowych",
      "Raporty miesięczne pokazujące dokładnie skąd przychodzą zapytania — z którego osiedla, w jakich godzinach",
    ],
    faq: (cityGen: string, cityLoc: string, cityFrom: string) => [
      {
        q: `Ile kosztuje agencja marketingowa w ${cityLoc}?`,
        a: `Koszt obsługi marketingowej ustalamy po poznaniu celu, kanałów komunikacji i zakresu materiałów. W ofercie rozpisujemy zadania, harmonogram i sposób raportowania. Budżet emisji reklam rozliczamy oddzielnie od obsługi.`,
      },
      {
        q: `Czy musimy spotykać się stacjonarnie w ${cityLoc}?`,
        a: `Współpracę możemy prowadzić zdalnie. Sposób kontaktu i harmonogram konsultacji ustalamy na początku projektu. Termin oraz miejsce ewentualnego spotkania na miejscu uzgadniamy indywidualnie.`,
      },
      {
        q: `Jak długo trwa, zanim zobaczę pierwsze efekty marketingu w ${cityLoc}?`,
        a: `Płatne kampanie (Google Ads, Meta Ads) zaczynają generować ruch i leady już w pierwszym tygodniu od uruchomienia. SEO to inwestycja długofalowa — pierwsze wzrosty pozycji widać po 2-3 miesiącach, a stabilne efekty biznesowe po 6-9 miesiącach. Social media organic budujemy w cyklu 3-6 miesięcy.`,
      },
      {
        q: `Czy obsługujecie firmy spoza ${cityGen}?`,
        a: `Tak — pracujemy z klientami z całej Polski, a w przypadku ${cityGen} wspieramy też firmy z całego województwa. Wiele kampanii projektujemy jako hybrydę: lokalna obecność (Google Maps, lokalne SEO) + ogólnopolski zasięg (e-commerce, performance).`,
      },
      {
        q: `Co odróżnia FOTZ od innych agencji w ${cityLoc}?`,
        a: `Łączymy performance marketing z produkcją wideo, fotografią i brandingiem. Dzięki temu nasi klienci nie muszą koordynować trzech różnych dostawców, a kreacje reklamowe powstają z pełnym zrozumieniem strategii mediowej.`,
      },
    ],
  },
  websites: {
    h2: (cityFrom: string) => `Strona internetowa dla firm ${cityFrom} — na co zwrócić uwagę`,
    intro: (cityLoc: string, voi: string, cityFrom: string) =>
      `Klienci ${cityFrom} i innych miast w województwie ${voi} szukają usług coraz częściej z telefonu i oczekują, że strona załaduje się w mniej niż 2 sekundy. Tworzymy szybkie strony oparte na nowoczesnym stacku (React, Next.js, headless WordPress), które od dnia uruchomienia są zoptymalizowane pod Core Web Vitals i lokalne SEO.`,
    points: [
      "Hosting i CDN dobrane pod ruch z Polski (najbliższe serwery — minimalne TTFB)",
      "Mapa Google z dokładną lokalizacją oraz kliknięcie-do-nawigacji z urządzeń mobilnych",
      "Schema.org LocalBusiness z godzinami otwarcia, NAP i obszarem obsługi",
      "Wersja AMP/PWA dla branż mobilno-pierwszych (gastronomia, beauty, usługi 24/7)",
      "Integracja z Google Business Profile i mechanizm zbierania opinii po realizacji zlecenia",
    ],
    faq: (cityGen: string, cityLoc: string, cityFrom: string) => [
      {
        q: `Ile kosztuje strona internetowa dla firmy ${cityFrom}?`,
        a: `Landing page wizytówkowy startuje od 2 000 zł netto, klasyczna strona firmowa (5-8 podstron + CMS) to 5 000–12 000 zł, a rozbudowany serwis z konfiguratorem lub portfolio dynamicznym 15 000–35 000 zł. Hosting roczny i opieka techniczna dochodzą jako 200–600 zł netto miesięcznie.`,
      },
      {
        q: `Jak długo trwa wykonanie strony www w ${cityLoc}?`,
        a: `Landing page realizujemy w 2-3 tygodnie, stronę firmową w 4-8 tygodni, a rozbudowany serwis 8-16 tygodni. Tempo zależy głównie od dostępności treści i materiałów graficznych po stronie klienta — pomagamy przyspieszyć ten etap copywritingiem i sesją zdjęciową.`,
      },
      {
        q: `Czy strona będzie pozycjonować się w ${cityLoc}?`,
        a: `Tak — każdą stronę projektujemy z myślą o lokalnym SEO. Implementujemy Schema.org LocalBusiness, optymalizujemy pod frazy zawierające nazwę miasta i dzielnic, integrujemy z Google Business Profile oraz przygotowujemy plan publikacji bloga lokalnego, jeśli klient wybiera pakiet content.`,
      },
      {
        q: `Na jakim CMS pracujecie?`,
        a: `Najczęściej rekomendujemy WordPress (elastyczność, ekosystem wtyczek), Webflow (nowoczesne portfolio, szybkie launche) lub headless Next.js + Sanity/Contentful dla projektów wymagających najwyższej wydajności. Dobór CMS zależy od potrzeb — omawiamy to na pierwszej rozmowie.`,
      },
      {
        q: `Czy możemy sami edytować treści po oddaniu strony?`,
        a: `Tak — każdą stronę przekazujemy z panelem CMS (najczęściej WordPress lub Webflow), w którym samodzielnie edytujesz teksty, zdjęcia, posty bloga i podstrony. Nagrywamy też szkolenie video w języku polskim, które krok po kroku tłumaczy obsługę panelu.`,
      },
    ],
  },
  ecommerce: {
    h2: (cityFrom: string) => `Sklep internetowy dla firm ${cityFrom} — fundamenty dobrego startu`,
    intro: (cityLoc: string, voi: string, cityFrom: string) =>
      `Sprzedaż online ${cityFrom} to dziś standardowy kanał dla większości produktów — od mody po wyposażenie wnętrz. Budujemy sklepy na sprawdzonych platformach (WooCommerce, Shopify, PrestaShop), z pełną integracją polskich systemów płatności (Przelewy24, Tpay, BLIK), kurierów (InPost, DPD, DHL) oraz programów księgowych (wFirma, iFirma, Fakturownia). Klienci w województwie ${voi} otrzymują realistyczne czasy dostawy i lokalne opcje odbioru.`,
    points: [
      "Konfiguracja Przelewy24/Tpay/Stripe + BLIK i Apple Pay/Google Pay dla mobilnych zakupów",
      "Integracje InPost Paczkomaty, DPD, DHL z automatycznym etykietowaniem zamówień",
      "Eksport zamówień do wFirma/iFirma/Fakturownia — bez przepisywania ręcznego",
      "Konfiguracja Google Merchant Center i kampanii Performance Max dla sklepu",
      "Optymalizacja pod Core Web Vitals — kluczowy czynnik konwersji na mobile",
    ],
    faq: (cityGen: string, cityLoc: string, cityFrom: string) => [
      {
        q: `Ile kosztuje sklep internetowy dla firmy ${cityFrom}?`,
        a: `Sklep startowy na WooCommerce (do 100 produktów) to 8 000–15 000 zł netto, średni sklep z integracjami (płatności, kurierzy, księgowość, marketing automation) 18 000–35 000 zł, a duży B2B/B2C z konfiguratorem produktów lub multi-language 40 000–100 000 zł. Doliczyć trzeba hosting (200–800 zł/mc) i opiekę techniczną.`,
      },
      {
        q: `Jaką platformę wybrać — WooCommerce, Shopify czy PrestaShop?`,
        a: `WooCommerce to najlepszy wybór dla polskich sklepów MSP — pełna kontrola, niższe koszty długoterminowe, świetne integracje z Przelewy24 i InPost. Shopify wybieramy dla marek planujących sprzedaż międzynarodową lub szybki MVP. PrestaShop polecamy przy dużych katalogach (5000+ produktów) i sprzedaży B2B z indywidualnymi cennikami.`,
      },
      {
        q: `Jak długo trwa uruchomienie sklepu?`,
        a: `Sklep startowy uruchamiamy w 4-6 tygodni, średni z integracjami w 8-12 tygodni, a rozbudowany B2B w 12-20 tygodni. Kluczowy etap to przygotowanie zdjęć produktowych i opisów — miejsce sesji, w tym możliwość realizacji u klienta w ${cityLoc}, ustalamy indywidualnie.`,
      },
      {
        q: `Czy zajmujecie się też reklamą sklepu po uruchomieniu?`,
        a: `Tak — to nasza naturalna kontynuacja. Konfigurujemy Google Merchant Center, uruchamiamy Performance Max i Shopping Ads, kampanie Meta Advantage+ Shopping, remarketing dynamiczny oraz e-mail marketing (Klaviyo, GetResponse). Pracujemy w modelu prowizyjnym lub abonamentowym.`,
      },
      {
        q: `Czy sklep będzie zoptymalizowany pod SEO?`,
        a: `Tak — od fundamentów. Implementujemy poprawną strukturę URL, Schema.org Product/Offer, optymalizację Core Web Vitals, breadcrumbs, paginację z rel=next/prev, kanoniczne adresy filtrów oraz mapę produktową XML. Dla klientów ${cityFrom} dodajemy też lokalne strony kategorii (np. \"dostawa do ${cityGen} w 24h\").`,
      },
    ],
  },
} as const;

const variantIcons: Record<LocalSEOBoostProps["variant"], typeof Building2> = {
  agency: Building2,
  websites: Users,
  ecommerce: TrendingUp,
};

/**
 * Lokalna sekcja SEO wzbogacająca strony miejskie o ~250-350 słów
 * unikalnego contentu (intro + 5 punktów + 5 FAQ + lokalne sektory).
 * Używana na borderline thin-content miastach.
 */
export default function LocalSEOBoost({
  city,
  cityLocative,
  cityGenitive,
  cityFrom = `z ${cityGenitive}`,
  voivodeshipLocative,
  variant,
  sectors,
}: LocalSEOBoostProps) {
  const copy = variantCopy[variant];
  const Icon = variantIcons[variant];
  const sectorList = sectors ?? sectorDefaults[variant];
  const faqs = copy.faq(cityGenitive, cityLocative, cityFrom);

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Specyfika lokalna — {city}
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
          {copy.h2(cityFrom)}
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {copy.intro(cityLocative, voivodeshipLocative, cityFrom)}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Co konkretnie wdrażamy
              </h3>
            </div>
            <ul className="space-y-3">
              {copy.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">
                Branże, które obsługujemy w {cityLocative}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {sectorList.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 bg-background border border-border rounded-full text-sm text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              Nie ma Twojej branży na liście? To nie znaczy, że nie umiemy z nią
              pracować — kontaktujemy się również z firmami z sektora produkcji,
              logistyki, IT, finansów i sektora publicznego {cityFrom} oraz
              pozostałych miast w województwie {voivodeshipLocative}.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-foreground">
            Najczęstsze pytania od firm {cityFrom}
          </h3>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-background border border-border rounded-lg p-5"
              >
                <summary className="cursor-pointer font-semibold text-foreground list-none flex justify-between items-center">
                  <span>{f.q}</span>
                  <span className="text-primary text-2xl group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
