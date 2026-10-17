import { Link } from "react-router-dom";
import { SEOHead } from "@/components/seo/SEOHead";
import { Scale, ArrowRight, CheckCircle, Shield, Globe, FileText, TrendingUp, Briefcase, Award, Lock, Plus } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { OrganizationSchema, ServiceSchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/StructuredData";
import { OtherIndustries } from "@/components/sections/OtherIndustries";

const services = [
  {
    icon: Globe,
    title: "Strony dla kancelarii",
    description: "Profesjonalne strony WWW dla prawników i doradców finansowych z systemem kontaktu.",
  },
  {
    icon: FileText,
    title: "Content marketing prawny",
    description: "Artykuły eksperckie, analizy prawne i komentarze budujące autorytet specjalisty.",
  },
  {
    icon: Shield,
    title: "Compliance marketing",
    description: "Kampanie zgodne z regulacjami dotyczącymi reklamy usług prawnych i finansowych.",
  },
  {
    icon: TrendingUp,
    title: "LinkedIn marketing",
    description: "Budowanie marki osobistej prawnika i eksperta finansowego na LinkedIn.",
  },
];

const customSolutions = [
  {
    icon: Briefcase,
    title: "System zarządzania sprawami",
    description: "Dedykowany CRM dla kancelarii z zarządzaniem sprawami, terminami i dokumentacją klientów.",
  },
  {
    icon: Award,
    title: "Portal klienta",
    description: "Bezpieczny portal dla klientów z dostępem do dokumentów, statusu spraw i komunikacji.",
  },
  {
    icon: Lock,
    title: "Bezpieczne formularze",
    description: "Szyfrowane formularze kontaktowe i system konsultacji online z zachowaniem poufności.",
  },
];

const benefits = [
  "Budowanie autorytetu eksperta w branży",
  "Komunikacja skierowana do klientów premium i korporacyjnych",
  "Kampanie zgodne z regulacjami samorządów zawodowych",
  "Bezpieczna komunikacja z klientami online",
  "Content marketing budujący zaufanie",
  "Pozycjonowanie na frazy specjalistyczne",
];

const faqItems = [
  {
    question: "Czy prawnik może się reklamować?",
    answer: "Tak, ale z ograniczeniami. Reklama usług prawnych podlega regulacjom samorządów. Nie można obiecywać konkretnych wyników, porównywać się z konkurencją ani używać agresywnych metod pozyskiwania klientów. Kampanie projektujemy z uwzględnieniem tych zasad, a każdą treść przed publikacją akceptuje kancelaria.",
  },
  {
    question: "Jak budować markę osobistą prawnika?",
    answer: "Kluczowe są: profesjonalny profil na LinkedIn, regularne publikowanie artykułów eksperckich, obecność w mediach branżowych, wystąpienia na konferencjach i webinary. Budujemy strategię personal brandingu dla prawników.",
  },
  {
    question: "Ile kosztuje marketing dla kancelarii prawnej?",
    answer: "Wycenę przygotowujemy po rozmowie o zakresie. Zależy ona od tego, czy potrzebna jest nowa strona, jak intensywnie prowadzimy SEO i LinkedIn, ile treści eksperckich powstaje co miesiąc oraz czy w grę wchodzą kampanie płatne. Budżet reklamowy płacony platformom (Google, LinkedIn, Meta) jest zawsze osobno.",
  },
  {
    question: "Czy tworzycie treści prawnicze?",
    answer: "Merytoryczną treść dostarcza lub konsultuje kancelaria albo jej eksperci. My zapewniamy redakcję, optymalizację SEO i dystrybucję. Treści są zawsze weryfikowane przez kancelarię przed publikacją.",
  },
  {
    question: "Jak pozyskiwać klientów korporacyjnych?",
    answer: "Dla klientów B2B kluczowe są: silna obecność na LinkedIn, case studies, publikacje branżowe, networking na wydarzeniach i kampanie Account-Based Marketing targetowane na konkretne firmy.",
  },
];

const relatedServices = [
  { title: "Strony internetowe", href: "/uslugi/strony-internetowe", description: "Strony dla kancelarii" },
  { title: "Identyfikacja wizualna", href: "/uslugi/branding", description: "Branding prawniczy" },
  { title: "Pozycjonowanie SEO", href: "/seo/pozycjonowanie", description: "SEO dla prawników" },
  { title: "Social Media", href: "/social-media/obsluga", description: "LinkedIn marketing" },
];

const MarketingPrawoFinanse = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Layout>
      <SEOHead
        title="Marketing dla Prawników i Finansów | Kancelarie, Doradcy | Fotz Studio"
        description="Marketing dla kancelarii prawnych i firm finansowych - strony WWW, LinkedIn, content marketing. Kampanie zgodne z regulacjami. Buduj autorytet eksperta."
        canonical="https://www.fotz-studio.pl/dla-kogo/prawo-finanse"
        keywords="marketing prawniczy, marketing kancelarii, agencja marketingowa kancelaria, marketing dla prawników, marketing finansowy, seo kancelaria prawna, linkedin dla prawników, content marketing prawo"
      />

      <OrganizationSchema />
      <ServiceSchema 
        name="Marketing dla prawa i finansów"
        description="Kompleksowy marketing dla kancelarii prawnych i firm finansowych"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://www.fotz-studio.pl" },
          { name: "Dla kogo", url: "https://www.fotz-studio.pl/dla-kogo" },
          { name: "Prawo i Finanse", url: "https://www.fotz-studio.pl/dla-kogo/prawo-finanse" },
        ]}
      />
      <FAQSchema items={faqItems} />

      {/* Hero */}
      <section className="pt-40 pb-20 section-padding bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
            style={{ background: "hsla(45, 71%, 27%, 0.1)" }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium">Marketing prawniczy i finansowy</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Marketing dla <span className="text-gradient-premium">prawa i finansów</span>
            </h1>
            
            <p className="text-foreground/70 text-lg md:text-xl mb-8 max-w-3xl">
              Pomagamy kancelariom prawnym i firmom finansowym budować autorytet i pozyskiwać klientów. 
              Kampanie zgodne z etyką zawodową i regulacjami branżowymi.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="group">
                <Link to="/kontakt">
                  Bezpłatna konsultacja
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/realizacje">Zobacz realizacje</Link>
              </Button>
            </div>
          </motion.div>


        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Usługi dla <span className="text-gradient-premium">prawników i finansistów</span>
            </h2>
            <p className="text-foreground/70">
              Kompleksowe rozwiązania marketingowe dla kancelarii i firm doradczych
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 rounded-2xl bg-background border border-border/30 hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-foreground/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Dedykowane <span className="text-gradient-premium">rozwiązania</span>
            </h2>
            <p className="text-foreground/70">
              Systemy i narzędzia stworzone specjalnie dla branży prawnej i finansowej
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/20 overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{solution.title}</h3>
                  <p className="text-foreground/70">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Dlaczego warto <span className="text-gradient-premium">współpracować?</span>
              </h2>
              <p className="text-foreground/70 mb-8">
                Rozumiemy specyfikę branży prawnej i finansowej - regulacje, etykę zawodową 
                i potrzebę budowania zaufania w relacjach z klientami.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <aside className="rounded-3xl border border-border p-8 bg-card">
              <h3 className="font-heading text-2xl mb-4">Zacznijmy od Twojej oferty.</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">Prześlij adres kancelarii lub firmy i opisz odbiorców usług. Ustalimy strukturę strony, materiały oraz sposób przyjmowania zapytań.</p>
              <Link to="/kontakt?usluga=web#formularz" className="dv-btn dv-btn-primary">Omów stronę dla swojej firmy</Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Powiązane <span className="text-gradient-premium">usługi</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={service.href}
                  className="block p-6 rounded-2xl bg-card border border-border/30 hover:border-primary/50 transition-all duration-300 h-full group"
                >
                  <h3 className="font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 text-sm">{service.description}</p>
                  <ArrowRight className="w-4 h-4 text-primary mt-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-card">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Najczęściej zadawane <span className="text-gradient-premium">pytania</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-border/30 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  id={`faq-question-${index}`}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-background hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium pr-4">{item.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  aria-hidden={openFaq !== index}
                  initial={false}
                  animate={{ height: openFaq === index ? "auto" : 0 }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-foreground/70">{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Industries */}
      <OtherIndustries currentSlug="prawo-finanse" />

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary/10 to-background">
        <div className="container-wide text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Gotowy budować <span className="text-gradient-premium">autorytet?</span>
            </h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację i dowiedz się, jak możemy wspomóc rozwój Twojej kancelarii.
            </p>
            <Button asChild size="lg" className="group">
              <Link to="/kontakt">
                Bezpłatna konsultacja
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MarketingPrawoFinanse;
