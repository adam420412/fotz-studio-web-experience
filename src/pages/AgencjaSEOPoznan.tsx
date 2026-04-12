import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Search, TrendingUp, BarChart3, Target, CheckCircle2,
  Globe, Settings, FileText, Link2, MapPin, Award, Users, Zap
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema, OrganizationSchema} from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Search,
    title: "Audyt SEO",
    description: "Kompleksowy audyt techniczny i treściowy Twojej strony. Identyfikujemy wszystkie błędy i bariery blokujące widoczność w Google — od szybkości ładowania po strukturę nagłówków i duplikaty treści."
  },
  {
    icon: Settings,
    title: "SEO techniczne",
    description: "Optymalizacja Core Web Vitals, struktury URL, mapy witryny, canonical tags, danych strukturalnych i indeksowania. Dbamy o to, by Googlebot mógł w pełni zrozumieć i zaindeksować Twoją stronę."
  },
  {
    icon: FileText,
    title: "Content marketing SEO",
    description: "Tworzenie zoptymalizowanych treści odpowiadających na zapytania Twoich klientów. Badamy słowa kluczowe, tworzymy klastry tematyczne i budujemy autorytet tematyczny Twojej strony."
  },
  {
    icon: Link2,
    title: "Link building",
    description: "Pozyskiwanie wartościowych linków z polskich portali, katalogów branżowych i mediów. Budujemy naturalny profil linków, który wzmacnia autorytet domeny i poprawia pozycje."
  },
  {
    icon: MapPin,
    title: "Lokalne SEO Poznań",
    description: "Optymalizacja wizytówki Google Business Profile, pozycjonowanie na frazy lokalne i budowanie obecności w mapach Google. Idealne dla firm obsługujących klientów z Poznania i Wielkopolski."
  },
  {
    icon: BarChart3,
    title: "Monitoring i raportowanie",
    description: "Miesięczne raporty z pozycji słów kluczowych, ruchu organicznego i konwersji. Transparentne wyniki i regularne spotkania omówieniowe, żebyś wiedział dokładnie co robimy i jakie to przynosi efekty."
  }
];

const results = [
  { value: "Top 3", label: "pozycji Google dla klientów Fotz w ciągu 6 mies." },
  { value: "+240%", label: "średni wzrost ruchu organicznego" },
  { value: "160+", label: "opinii 5★ w Google" },
  { value: "8+ lat", label: "doświadczenia w SEO" }
];

const faqItems = [
  {
    question: "Ile kosztuje pozycjonowanie stron w Poznaniu?",
    answer: "Koszt SEO zależy od branży, konkurencyjności słów kluczowych i stanu technicznego strony. Nasze pakiety zaczynają się od 1200 zł/mies. dla lokalnych firm. Każdą wycenę poprzedzamy bezpłatnym audytem wstępnym."
  },
  {
    question: "Po jakim czasie widać efekty pozycjonowania SEO?",
    answer: "Pierwsze wzrosty pozycji są widoczne zazwyczaj po 2–4 miesiącach. Stabilne wyniki organiczne budują się przez 6–12 miesięcy. SEO to inwestycja długoterminowa — efekty kumulują się i są trwałe w przeciwieństwie do reklam płatnych."
  },
  {
    question: "Czy agencja SEO w Poznaniu zajmuje się też sklepami internetowymi?",
    answer: "Tak — obsługujemy zarówno strony firmowe, jak i sklepy e-commerce (Shopify, WooCommerce, PrestaShop). SEO dla e-commerce obejmuje optymalizację kart produktowych, kategorii, struktury filtrów i danych strukturalnych produktów."
  },
  {
    question: "Jaką gwarancję daje agencja SEO?",
    answer: "Żadna rzetelna agencja nie gwarantuje konkretnych pozycji — algorytmy Google zmieniają się. Gwarantujemy natomiast terminowe wdrożenie rekomendacji, miesięczne raporty, transparentne działania zgodne z wytycznymi Google (white hat SEO) i mierzalny wzrost ruchu organicznego."
  },
  {
    question: "Czy potrzebuję też SEO jeśli korzystam z Google Ads?",
    answer: "Tak — Google Ads i SEO się uzupełniają. Reklamy dają natychmiastowy ruch, SEO buduje trwałą widoczność organiczną. Firmy łączące obie strategie osiągają lepszy ROAS i niższy koszt pozyskania klienta długoterminowo."
  },
  {
    question: "Jak wygląda raportowanie i komunikacja z agencją SEO?",
    answer: "Każdy miesiąc kończymy raportem z pozycji słów kluczowych, ruchu organicznego, konwersji i wykonanych działań. Oferujemy regularne spotkania (stacjonarnie w Poznaniu lub online) i stały kontakt z dedykowanym specjalistą."
  }
];

export default function AgencjaSEOPoznan() {
  return (
    <>
      <OrganizationSchema />
      <Layout>
      <SEOHead
        title="Agencja SEO Poznań — Pozycjonowanie Stron Internetowych | Fotz Studio"
        description="Agencja SEO Poznań — pozycjonowanie stron internetowych, audyt SEO, link building i optymalizacja techniczna. Zwiększ widoczność w Google. Fotz Studio."
        canonical="https://fotz.pl/agencja-seo-poznan"
        keywords="agencja SEO Poznań, pozycjonowanie stron Poznań, SEO Poznań, optymalizacja SEO, link building Poznań, audyt SEO Poznań, lokalne SEO Poznań, core web vitals poznań, pozycjonowanie lokalne poznań, agencja pozycjonowania poznań, frazy kluczowe poznań, SEO techniczne poznań"
      />

      <ServiceSchema
        name="Agencja SEO Poznań"
        description="Profesjonalne pozycjonowanie stron internetowych w Poznaniu. Audyt SEO, optymalizacja, link building i lokalne SEO dla firm z Wielkopolski."
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "SEO", url: "https://fotz.pl/seo/pozycjonowanie" },
          { name: "Agencja SEO Poznań", url: "https://fotz.pl/agencja-seo-poznan" }
        ]}
      />
      <FAQSchema items={faqItems.map(i => ({ question: i.question, answer: i.answer }))} />

      {/* Hero */}
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-16 md:pb-24 bg-gradient-to-b from-background to-secondary/20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-[#75143F]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#0F3053]/10 blur-3xl pointer-events-none" />

        <div className="container px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeIn} className="mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-sm text-foreground/80">
                <MapPin className="w-4 h-4" /> Plac Wolności 16, Poznań
              </span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              Agencja SEO{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Poznań
              </span>
              {" "}— Pozycjonowanie z Efektami
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Szukasz agencji SEO w Poznaniu, która realnie poprawia pozycje w Google?{" "}
              <strong className="text-foreground">Fotz Studio</strong> to doświadczona agencja pozycjonowania Poznań —
              oferujemy audyt SEO Poznań, SEO techniczne (Core Web Vitals, dane strukturalne), pozycjonowanie lokalne Poznań
              i strategiczny dobór fraz kluczowych dla firm z Wielkopolski.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Bezpłatny audyt SEO <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/seo/pozycjonowanie">Zobacz usługę SEO</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-[#75143F]/10 via-background to-[#0F3053]/10 border-y border-foreground/10">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center"
          >
            {results.map((r, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-1">
                  {r.value}
                </div>
                <div className="text-sm text-foreground/60">{r.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Usługi agencji SEO{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  w Poznaniu
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Kompleksowe pozycjonowanie stron — od audytu przez optymalizację po link building i monitoring wyników.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-foreground/70 text-sm">{s.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Fotz SEO */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F3053]/10 to-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego Fotz jako agencja SEO{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  w Poznaniu?
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: MapPin,
                  title: "Lokalna agencja, globalny warsztat",
                  desc: "Jesteśmy z Poznania — znamy lokalny rynek, branże i specyfikę wielkopolskich firm. Spotykamy się stacjonarnie, działamy jak wewnętrzny dział SEO Twojej firmy."
                },
                {
                  icon: Award,
                  title: "White hat SEO — bez ryzyka",
                  desc: "Działamy wyłącznie metodami zgodnymi z wytycznymi Google. Żadnych spamowych linków ani kupionych recenzji — budujemy trwały autorytet domeny."
                },
                {
                  icon: Users,
                  title: "Dedykowany specjalista",
                  desc: "Każdy klient ma przydzielonego specjalistę SEO. Nie przerzucamy Cię między różnymi osobami — znamy Twój biznes, historię domeny i cele."
                },
                {
                  icon: Zap,
                  title: "SEO + content + UX w jednym",
                  desc: "Łączymy pozycjonowanie techniczne z content marketingiem i optymalizacją UX. To kompleksowe podejście, które nie tylko przyciąga ruch, ale też konwertuje go w klientów."
                }
              ].map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="flex gap-4 p-6 rounded-2xl bg-background border border-foreground/10"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-6 h-6 text-[#75143F]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-foreground/70 text-sm">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Efekty naszych działań{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">SEO</span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Nasze działania SEO przekładają się na realne wyniki — więcej ruchu organicznego, wyższe pozycje i więcej klientów.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { metric: "+380%", label: "wzrost ruchu organicznego", client: "Klient e-commerce, Poznań" },
                { metric: "Top 1", label: "na główne słowo kluczowe", client: "Firma usługowa, Wielkopolska" },
                { metric: "-62%", label: "niższy CPA dzięki SEO vs Google Ads", client: "Klient B2B, Poznań" }
              ].map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 text-center"
                >
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-2">
                    {r.metric}
                  </div>
                  <div className="font-semibold text-foreground mb-1 text-sm">{r.label}</div>
                  <div className="text-xs text-foreground/50">{r.client}</div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20">
                <Link to="/realizacje">
                  Zobacz wszystkie realizacje <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-[#75143F]/5">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto"
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                FAQ — Agencja SEO Poznań
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeIn}
                  className="p-6 rounded-2xl bg-background border border-foreground/10"
                >
                  <h3 className="font-heading font-semibold text-foreground mb-3 flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#75143F] flex-shrink-0 mt-0.5" />
                    {item.question}
                  </h3>
                  <p className="text-foreground/70 text-sm pl-7">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#75143F] to-[#0F3053]">
        <div className="container px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Zacznij zdobywać klientów z Google już dziś
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Umów bezpłatny audyt SEO — sprawdzimy stan Twojej strony i pokażemy konkretny plan działania.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90 font-semibold">
                <Link to="/kontakt">
                  Bezpłatny audyt SEO <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/seo/pozycjonowanie">Więcej o SEO</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Internal linking — related services */}
      <section className="py-12 border-t border-border/30 bg-card/20">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground mb-6 font-medium uppercase tracking-wider">Powiązane usługi</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa-poznan" },
              { label: "Pozycjonowanie stron WWW", to: "/seo/pozycjonowanie" },
              { label: "Strony internetowe Poznań", to: "/uslugi/strony-internetowe/poznan" },
              { label: "Agencja reklamowa Poznań", to: "/agencja-reklamowa-poznan" },
              { label: "Sklepy internetowe Poznań", to: "/uslugi/sklepy-internetowe/poznan" },
              { label: "SEO — link building", to: "/seo/link-building" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-full border border-border/50 text-sm text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Article Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-heading font-bold mb-6">Agencja SEO Poznań — pozycjonowanie stron internetowych i widoczność w Google</h2>
            <p className="text-muted-foreground mb-4">Agencja SEO Poznań — Fotz Studio to specjaliści od pozycjonowania stron internetowych z wieloletnim doświadczeniem na rynku poznańskim i ogólnopolskim. Pozycjonowanie stron Poznań obejmuje: audyt SEO, optymalizację techniczną, content marketing SEO, link building i monitoring pozycji. Każda strategia SEO jest dopasowana do branży i celów klienta.</p>
            <p className="text-muted-foreground mb-6">Agencja SEO Poznań z podejściem holistycznym — nie skupiamy się tylko na wybranych aspektach SEO, lecz całościowo budujemy widoczność strony. SEO to długoterminowa inwestycja, która przy prawidłowym wdrożeniu przynosi efekty przez lata, generując organiczny ruch bez ciągłego wydawania na reklamy.</p>

            <h2 className="text-3xl font-heading font-bold mb-6">Pozycjonowanie stron Poznań — lokalne i ogólnopolskie SEO dla firm</h2>
            <p className="text-muted-foreground mb-4">Pozycjonowanie stron Poznań obejmuje zarówno lokalne SEO (widoczność w Google Maps i dla fraz z "Poznań"), jak i SEO ogólnopolskie dla firm chcących dotrzeć do klientów z całego kraju. Każda kampania SEO zaczyna się od audytu SEO — analizy obecnego stanu strony, identyfikacji słów kluczowych i analizy konkurencji.</p>
            <p className="text-muted-foreground">Agencja SEO Poznań oferuje transparentne raportowanie — miesięczne raporty z pozycji w Google, ruchu organicznego i wykonanych działań. Pozycjonowanie Google Maps dla firm lokalnych z Poznania i Wielkopolski to oddzielna usługa, uzupełniająca standardowe SEO. Skontaktuj się z naszą agencją SEO w Poznaniu i sprawdź, co możemy zrobić dla Twojej strony.</p>
          
            <div className="mt-8 pt-6 border-t border-border/40 flex flex-wrap gap-x-6 gap-y-2">
              <Link to="/seo/pozycjonowanie" className="text-primary hover:underline font-medium text-sm">→ Pozycjonowanie stron</Link>
              <Link to="/seo/audyt" className="text-primary hover:underline font-medium text-sm">→ Audyt SEO</Link>
              <Link to="/kampanie-reklamowe" className="text-primary hover:underline font-medium text-sm">→ Kampanie reklamowe</Link>
              <Link to="/uslugi/strony-internetowe" className="text-primary hover:underline font-medium text-sm">→ Strony internetowe</Link>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
    </>
  );
}
