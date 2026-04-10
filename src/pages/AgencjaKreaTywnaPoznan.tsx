import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Palette, Camera, Video, Globe, Layers, Sparkles,
  MapPin, Award, Zap, Target, CheckCircle2, Users
} from "lucide-react";
import { ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const creativeServices = [
  {
    icon: Palette,
    title: "Identyfikacja wizualna i branding",
    description: "Logo, system identyfikacji wizualnej, brand book i materiały firmowe. Tworzymy spójny wizerunek marki, który wyróżnia się na tle konkurencji i jest zapamiętywany przez klientów.",
    link: "/uslugi/branding"
  },
  {
    icon: Globe,
    title: "Projektowanie stron www (UI/UX)",
    description: "Projekty interfejsów, prototypy i gotowe strony www. Łączymy estetykę z funkcjonalnością — każda strona jest projektem graficznym zoptymalizowanym pod konwersję i user experience.",
    link: "/uslugi/strony-internetowe/poznan"
  },
  {
    icon: Video,
    title: "Produkcja wideo i spoty reklamowe",
    description: "Filmy korporacyjne, spoty reklamowe, materiały na social media i reels. Studio podcastowe i pełen pipeline postprodukcji — od scenariusza po gotowy materiał.",
    link: "/uslugi/produkcja-video"
  },
  {
    icon: Camera,
    title: "Fotografia produktowa i korporacyjna",
    description: "Sesje produktowe, fotografia brandowa i zdjęcia do kampanii. Zdjęcia, które budują profesjonalny wizerunek i wzmacniają przekaz reklamowy Twojej marki.",
    link: "/uslugi/fotografia"
  },
  {
    icon: Layers,
    title: "Grafika reklamowa i kreacje",
    description: "Materiały reklamowe na wszystkich kanałach: bannery, posty social media, reklamy Google Display, key visuale kampanii. Spójna kreatywna identyfikacja w każdym touchpoincie.",
    link: "/agencja-graficzna"
  },
  {
    icon: Sparkles,
    title: "Animacje i motion design",
    description: "Animacje 2D/3D, motion graphics i animowane loga. Od krótkich reelsów po rozbudowane materiały animowane — przyciągamy uwagę i wyjaśniamy skomplikowane idee w angażujący sposób.",
    link: "/wizualizacje-3d"
  }
];

const faqItems = [
  {
    question: "Czym różni się agencja kreatywna od agencji marketingowej?",
    answer: "Agencja kreatywna skupia się na wizualnej i twórczej stronie komunikacji — projektowaniu, video, fotografii, animacjach i identyfikacji wizualnej. Agencja marketingowa zarządza strategią, kampaniami i mediami. Fotz łączy obie kompetencje pod jednym dachem."
  },
  {
    question: "Ile kosztuje stworzenie identyfikacji wizualnej przez agencję kreatywną?",
    answer: "Pakiet basic (logo + kolorystyka + typografia) zaczyna się od 3 500 zł. Kompletny brand book z systemem identyfikacji to od 8 000 zł. Wycena zależy od zakresu projektu i liczby wariantów do opracowania."
  },
  {
    question: "Czy agencja kreatywna zajmuje się też social media?",
    answer: "Tak — tworzymy kreacje graficzne, materiały wideo i szablony do social media. Możemy też prowadzić Twoje konta na Facebooku, Instagramie i TikToku, łącząc tworzenie contentu z jego dystrybucją."
  },
  {
    question: "Jak wygląda proces współpracy z agencją kreatywną?",
    answer: "Zaczynamy od briefu — poznajemy markę, grupę docelową i cele projektu. Następnie przygotowujemy koncepcje (zazwyczaj 2–3 warianty), wprowadzamy uwagi i dostarczamy gotowe pliki produkcyjne we wszystkich potrzebnych formatach."
  },
  {
    question: "Czy agencja kreatywna z Poznania obsługuje klientów z całej Polski?",
    answer: "Tak — obsługujemy klientów z całej Polski. Projekt graficzny, identyfikację wizualną i materiały wideo realizujemy zdalnie. W Poznaniu i okolicach spotykamy się stacjonarnie i możemy prowadzić sesje foto/video na miejscu."
  }
];

export default function AgencjaKreaTywnaPoznan() {
  return (
    <Layout>
      <SEOHead
        title="Agencja Kreatywna Poznań | Branding, Design, Video | Fotz"
        description="Agencja kreatywna Poznań — identyfikacja wizualna, logo, web design, produkcja wideo i fotografia. Kompleksowa obsługa kreatywna dla firm. Fotz Studio."
        canonical="https://fotz.pl/agencja-kreatywna-poznan"
        keywords="agencja kreatywna poznań, studio kreatywne poznań, branding poznań, identyfikacja wizualna poznań, web design poznań, produkcja wideo poznań, grafika reklamowa poznań"
      />

      <ServiceSchema
        name="Agencja Kreatywna Poznań"
        description="Kompleksowe usługi kreatywne: identyfikacja wizualna, web design, produkcja wideo, fotografia i grafika reklamowa dla firm z Poznania."
        provider="Fotz Studio"
        areaServed="Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Agencja Kreatywna Poznań", url: "https://fotz.pl/agencja-kreatywna-poznan" }
        ]}
      />
      <FAQSchema items={faqItems.map(i => ({ question: i.question, answer: i.answer }))} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background z-10" />
          <div className="w-full h-full bg-gradient-to-br from-[#75143F]/20 via-[#422249]/20 to-[#0F3053]/20" />
        </div>
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#75143F]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#0F3053]/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }} />

        <div className="container relative z-20 px-4 pt-32 pb-20 md:pt-40 md:pb-32">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}
            className="max-w-4xl mx-auto text-center">

            <motion.div variants={fadeIn} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#75143F]/20 border border-[#75143F]/30 text-sm text-foreground/80">
                <MapPin className="w-4 h-4" /> Plac Wolności 16, Poznań
              </span>
            </motion.div>

            <motion.h1 variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Agencja Kreatywna{" "}
              <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                Poznań
              </span>
            </motion.h1>

            <motion.p variants={fadeIn}
              className="text-lg md:text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Fotz Studio to agencja kreatywna z Poznania łącząca design, wideo, fotografię i marketing.
              Tworzymy identyfikacje wizualne, strony www i kampanie, które budują rozpoznawalne marki.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-[#75143F] to-[#0F3053] hover:opacity-90 text-white">
                <Link to="/kontakt">
                  Omów projekt <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground/20">
                <Link to="/realizacje">Zobacz portfolio</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gradient-to-r from-[#75143F]/10 via-background to-[#0F3053]/10 border-y border-foreground/10">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: "300+", label: "projektów kreatywnych" },
              { value: "8+ lat", label: "doświadczenia" },
              { value: "160+", label: "opinii 5★ w Google" },
              { value: "20+", label: "branż obsługiwanych" }
            ].map((s, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-3xl md:text-4xl font-heading font-bold bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent mb-1">{s.value}</div>
                <div className="text-sm text-foreground/60">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Services */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="max-w-6xl mx-auto">

            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Usługi agencji kreatywnej{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  Poznań
                </span>
              </h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">
                Od koncepcji po gotowe materiały — obsługujemy wszystkie aspekty kreatywne Twojej marki.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creativeServices.map((s, i) => (
                <motion.div key={i} variants={fadeIn}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F] to-[#0F3053] flex items-center justify-center mb-4">
                    <s.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{s.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4">{s.description}</p>
                  <Link to={s.link}
                    className="inline-flex items-center text-[#75143F] text-sm font-medium hover:text-[#0F3053] transition-colors">
                    Dowiedz się więcej <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Fotz Creative */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#0F3053]/10 to-background">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="max-w-5xl mx-auto">

            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Dlaczego Fotz jako agencja kreatywna{" "}
                <span className="bg-gradient-to-r from-[#75143F] to-[#0F3053] bg-clip-text text-transparent">
                  w Poznaniu?
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Wszystko pod jednym dachem",
                  desc: "Design, wideo, fotografia, web i marketing w jednej agencji. Koniec z koordynowaniem wielu dostawców — wszystko w jednym miejscu, z jednym opiekunem projektu."
                },
                {
                  icon: Award,
                  title: "Design z doświadczeniem",
                  desc: "Ponad 300 projektów kreatywnych dla firm różnych branż. Nasze realizacje zdobywały uznanie klientów z sektorów premium, FMCG, technologii i gastronomii."
                },
                {
                  icon: Target,
                  title: "Kreatywność na usługach biznesu",
                  desc: "Nie robimy grafiki dla sztuki — każda kreacja ma cel biznesowy: buduje rozpoznawalność, przyciąga klientów lub generuje konwersje."
                },
                {
                  icon: Users,
                  title: "Multidyscyplinarny zespół",
                  desc: "Graficy, fotografowie, videografowie, copywriterzy i web developerzy w jednym teamie. Projekty kreowane przez specjalistów z komplementarnymi kompetencjami."
                }
              ].map((p, i) => (
                <motion.div key={i} variants={fadeIn}
                  className="flex gap-4 p-6 rounded-2xl bg-background border border-foreground/10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#75143F]/20 to-[#0F3053]/20 flex items-center justify-center flex-shrink-0">
                    <p.icon className="w-6 h-6 text-[#75143F]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-foreground/70 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="max-w-5xl mx-auto">

            <motion.div variants={fadeIn} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Jak pracuje nasza agencja kreatywna?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { n: "01", title: "Brief", desc: "Poznajemy markę, cele, grupę docelową i budżet projektu kreatywnego." },
                { n: "02", title: "Koncepcja", desc: "Przygotowujemy 2–3 warianty koncepcji kreatywnej z moodboardem." },
                { n: "03", title: "Realizacja", desc: "Wdrażamy wybrany kierunek — projekt, produkcja, postprodukcja." },
                { n: "04", title: "Wdrożenie", desc: "Dostarczamy pliki we wszystkich formatach i wspieramy wdrożenie." }
              ].map((step, i) => (
                <motion.div key={i} variants={fadeIn}
                  className="relative p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10 text-center">
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-5xl font-heading font-bold text-[#75143F]/15">
                    {step.n}
                  </span>
                  <div className="pt-4">
                    <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/70 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected work */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-[#75143F]/5 to-background">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="max-w-5xl mx-auto">

            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Wybrane realizacje
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { title: "Enea Stadion", cat: "Branding + Social Media", link: "/realizacje/enea-stadion" },
                { title: "Fabryka Virali", cat: "Identyfikacja wizualna + Web", link: "/realizacje/fabryka-virali" },
                { title: "Cute Dumpling", cat: "Fotografia + Strona www", link: "/realizacje/cute-dumpling" }
              ].map((cs, i) => (
                <motion.div key={i} variants={fadeIn}>
                  <Link to={cs.link}
                    className="block p-6 rounded-2xl bg-background border border-foreground/10 hover:border-[#75143F]/30 transition-all duration-300">
                    <span className="text-xs text-foreground/50 uppercase tracking-wider">{cs.cat}</span>
                    <h3 className="font-heading font-semibold text-foreground mt-1 mb-2">{cs.title}</h3>
                    <span className="inline-flex items-center text-[#75143F] text-sm font-medium">
                      Zobacz <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeIn} className="text-center">
              <Button asChild variant="outline" size="lg" className="border-foreground/20">
                <Link to="/realizacje">Wszystkie realizacje <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">FAQ — Agencja Kreatywna Poznań</h2>
            </motion.div>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <motion.div key={i} variants={fadeIn}
                  className="p-6 rounded-2xl bg-gradient-to-br from-[#75143F]/5 to-[#0F3053]/5 border border-foreground/10">
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
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={staggerContainer} className="max-w-3xl mx-auto text-center">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Masz projekt kreatywny? Porozmawiajmy.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-white/80 mb-8">
              Umów bezpłatną konsultację — opowiedz nam o projekcie, a my zaproponujemy koncepcję i wycenę.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#75143F] hover:bg-white/90 font-semibold">
                <Link to="/kontakt">Omów projekt <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/agencja-marketingowa-poznan">Sprawdź marketing</Link>
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
              { label: "Agencja reklamowa Poznań", to: "/agencja-reklamowa-poznan" },
              { label: "Agencja marketingowa Poznań", to: "/agencja-marketingowa-poznan" },
              { label: "Identyfikacja wizualna", to: "/uslugi/identyfikacja-wizualna" },
              { label: "Social media Poznań", to: "/uslugi/social-media/poznan" },
              { label: "Produkcja filmów Poznań", to: "/uslugi/produkcja-filmow/poznan" },
              { label: "Strony internetowe Poznań", to: "/uslugi/strony-internetowe/poznan" },
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
    </Layout>
  );
}
