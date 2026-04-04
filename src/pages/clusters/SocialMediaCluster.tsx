import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, FAQSchema, ServiceSchema } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, Instagram, MessageCircle, Video, TrendingUp, ArrowRight, CheckCircle, Heart, Share2, Sparkles } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const services = [
  {
    icon: Users,
    title: "Obsługa Social Media",
    description: "Kompleksowe zarządzanie profilami na Facebooku, Instagramie, LinkedInie i TikToku. Strategia, tworzenie treści, publikacja i moderacja komentarzy.",
    href: "/social-media/obsluga",
    features: ["Strategia i kalendarz", "Tworzenie treści", "Moderacja community"],
  },
  {
    icon: MessageCircle,
    title: "Social Media Poznań",
    description: "Dedykowane usługi social media dla firm z Poznania. Lokalna ekspertyza, znajomość rynku i sesje foto/video w naszym studiu.",
    href: "/social-media/poznan",
    features: ["Lokalna ekspertyza", "Studio foto/video", "Bezpośredni kontakt"],
  },
  {
    icon: Heart,
    title: "Influencer Marketing",
    description: "Dobieramy influencerów dopasowanych do Twojej marki. Negocjujemy warunki, koordynujemy kampanie i mierzymy wyniki współpracy.",
    href: "/social-media/influencer",
    features: ["Dobór influencerów", "Koordynacja kampanii", "Raportowanie ROI"],
  },
  {
    icon: Video,
    title: "Reels vs TikTok",
    description: "Strategia short-form video dopasowana do Twojej grupy docelowej. Pomagamy wybrać platformę i tworzymy angażujące treści wideo.",
    href: "/social-media/reels-vs-tiktok",
    features: ["Strategia video", "Produkcja Reels/TikTok", "Analiza trendów"],
  },
  {
    icon: Instagram,
    title: "TikTok dla biznesu",
    description: "TikTok to nie tylko taniec – to potężne narzędzie do budowania marki i sprzedaży. Pokazujemy, jak wykorzystać platformę w biznesie.",
    href: "/social-media/tiktok-biznes",
    features: ["Strategia TikTok", "Content creation", "Ads na TikToku"],
  },
];

const stats = [
  { value: "50+", label: "Zarządzanych profili", icon: Users },
  { value: "+280%", label: "Średni wzrost zasięgów", icon: TrendingUp },
  { value: "1M+", label: "Wyświetleń Reels miesięcznie", icon: Share2 },
  { value: "12x", label: "Średni wzrost zaangażowania", icon: Heart },
];

const faqs = [
  {
    question: "Ile kosztuje obsługa social media?",
    answer: "Ceny zaczynają się od 2 500 PLN/mies. za jeden profil. Pełna obsługa wielu platform z produkcją video to 5 000-15 000 PLN/mies. Dokładną wycenę przygotujemy po poznaniu Twoich celów."
  },
  {
    question: "Jak często publikujecie posty?",
    answer: "Zazwyczaj od 3 do 5 postów tygodniowo na platformę + Stories/Reels. Częstotliwość dostosowujemy do branży i celów. Ważniejsza od ilości jest jakość i konsekwencja."
  },
  {
    question: "Czy tworzycie treści video (Reels/TikTok)?",
    answer: "Tak! Posiadamy własne studio w Poznaniu. Tworzymy Reels, TikToki, Stories i dłuższe materiały video. Współpracujemy z klientami przy nagraniach lub tworzymy content samodzielnie."
  },
  {
    question: "Na jakich platformach pracujecie?",
    answer: "Facebook, Instagram, TikTok, LinkedIn, YouTube i Pinterest. Dobieramy platformy do grupy docelowej – nie musisz być wszędzie, musisz być tam, gdzie są Twoi klienci."
  },
  {
    question: "Jak mierzycie efekty?",
    answer: "Comiesięczne raporty z metrykami: zasięg, zaangażowanie, wzrost followersów, kliknięcia i konwersje. Śledzimy też wpływ social media na ruch na stronie i generowanie leadów."
  },
];

export default function SocialMediaCluster() {
  return (
    <Layout>
      <SEOHead
        title="Social Media Marketing | Obsługa SM | Fotz Studio"
        description="Obsługa social media, influencer marketing, Reels i TikTok. Zwiększ zasięg i zaangażowanie. Agencja social media Poznań."
        canonical="https://fotz.pl/social-media"
        keywords="social media marketing, obsługa social media, influencer marketing, TikTok biznes, Reels, Instagram, Facebook, agencja social media Poznań"
      />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Social Media", url: "https://fotz.pl/social-media" },
        ]}
      />
      <ServiceSchema
        name="Social Media Marketing - Fotz Studio"
        description="Kompleksowa obsługa social media: zarządzanie profilami, influencer marketing, produkcja video i content creation"
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-10 -left-20 w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[100px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Buduj społeczność
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Social Media{" "}
              <span className="text-gradient">Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Zwiększ zasięg i zaangażowanie na mediach społecznościowych. Tworzymy treści, które budują markę, angażują odbiorców i generują sprzedaż.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Bezpłatna konsultacja SM
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/social-media/obsluga">Zobacz pełną ofertę</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Jak pomagamy w social media?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Od strategii po codzienne zarządzanie – tworzymy obecność marki, która przyciąga i konwertuje.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={service.href}
                  className="group block h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                    Dowiedz się więcej <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego <span className="text-gradient">Fotz Studio?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Nie jesteśmy agencją, która kopiuje szablony. Każdą strategię social media budujemy od zera, dopasowując ją do marki, branży i grupy docelowej klienta.
              </p>
              <div className="space-y-4">
                {[
                  "Własne studio foto/video w centrum Poznania",
                  "Zespół kreatywny z doświadczeniem w 30+ branżach",
                  "Produkcja Reels i TikToków in-house",
                  "Przejrzyste raporty i comiesięczne spotkania",
                  "Elastyczne pakiety – od 1 do 5 platform",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border/50 p-8"
            >
              <h3 className="font-heading font-bold text-xl mb-6">Nasz proces</h3>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Analiza i strategia", desc: "Poznajemy Twoją markę i grupę docelową" },
                  { step: "02", title: "Kalendarz treści", desc: "Planujemy posty na miesiąc z wyprzedzeniem" },
                  { step: "03", title: "Produkcja contentu", desc: "Grafiki, video, copy – wszystko in-house" },
                  { step: "04", title: "Publikacja i moderacja", desc: "Zarządzamy profilami 7 dni w tygodniu" },
                  { step: "05", title: "Raport i optymalizacja", desc: "Analizujemy wyniki i doskonalimy strategię" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">FAQ – Social Media</h2>
          </motion.div>
          <FAQSchema faqs={faqs} />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-xl border border-border/50 px-6">
                <AccordionTrigger className="text-left font-medium hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              Czas na profesjonalne social media
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Porozmawiajmy o Twojej marce. Przygotujemy strategię social media dopasowaną do Twoich celów i budżetu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/kontakt">
                  Umów bezpłatną konsultację
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+48790814814">Zadzwoń: 790 814 814</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 border-t border-border/50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="font-heading font-bold text-lg mb-6">Powiązane usługi</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Facebook Ads", href: "/performance-marketing/facebook-ads" },
              { label: "Instagram Ads", href: "/performance-marketing/instagram-ads" },
              { label: "TikTok Ads", href: "/performance-marketing/tiktok-ads" },
              { label: "Content Marketing", href: "/content-marketing" },
              { label: "Produkcja video", href: "/uslugi/produkcja-video" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="px-4 py-2 rounded-full bg-card border border-border/50 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
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
