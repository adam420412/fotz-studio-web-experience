import { Link } from "react-router-dom";
import { ArrowRight, Palette, Video, Megaphone, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Palette,
      title: t("Strategia & Branding", "Strategy & Branding"),
      description: t(
        "Budujemy fundamenty Twojej marki. Strategia, identyfikacja wizualna i komunikacja, która wyróżnia.",
        "We build the foundations of your brand. Strategy, visual identity and communication that stands out."
      ),
      features: [
        t("Strategia marki", "Brand strategy"),
        t("Identyfikacja wizualna", "Visual identity"),
        t("Naming", "Naming"),
        t("Brandbook", "Brandbook"),
      ],
      href: "/uslugi",
    },
    {
      icon: Video,
      title: t("Content & Wideo", "Content & Video"),
      description: t(
        "Tworzymy treści, które angażują i sprzedają. Produkcja wideo, podcasty, social media content.",
        "We create content that engages and sells. Video production, podcasts, social media content."
      ),
      features: [
        t("Produkcja wideo", "Video production"),
        t("Studio podcastowe", "Podcast studio"),
        t("Social media", "Social media"),
        t("Copywriting", "Copywriting"),
      ],
      href: "/uslugi",
    },
    {
      icon: Megaphone,
      title: t("Performance Marketing", "Performance Marketing"),
      description: t(
        "Kampanie reklamowe, które przynoszą mierzalne rezultaty. Meta Ads, Google Ads, LinkedIn.",
        "Advertising campaigns that deliver measurable results. Meta Ads, Google Ads, LinkedIn."
      ),
      features: [
        t("Meta Ads", "Meta Ads"),
        t("Google Ads", "Google Ads"),
        t("LinkedIn Ads", "LinkedIn Ads"),
        t("Analityka", "Analytics"),
      ],
      href: "/uslugi",
    },
    {
      icon: Globe,
      title: t("Strony & E-commerce", "Websites & E-commerce"),
      description: t(
        "Projektujemy i wdrażamy strony internetowe oraz sklepy, które konwertują odwiedzających w klientów.",
        "We design and implement websites and stores that convert visitors into customers."
      ),
      features: [
        t("Strony WWW", "Websites"),
        t("Sklepy online", "Online stores"),
        t("Landing pages", "Landing pages"),
        t("SEO", "SEO"),
      ],
      href: "/uslugi",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[180px] -translate-x-1/2"
          style={{ background: "hsla(336, 71%, 27%, 0.15)" }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] translate-x-1/3"
          style={{ background: "hsla(209, 69%, 19%, 0.15)" }}
        />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4"
          >
            {t("Co robimy", "What we do")}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("4 filary", "4 pillars of")} <span className="text-gradient-premium">{t("Twojego wzrostu", "your growth")}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            {t(
              "Kompleksowe wsparcie marketingowe w jednym miejscu. Strategia, kreacja i performance pod jednym dachem.",
              "Comprehensive marketing support in one place. Strategy, creation and performance under one roof."
            )}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={service.href}
                className="group relative block p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-all duration-500 overflow-hidden h-full hover-lift"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />

                {/* Animated border glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{
                  boxShadow: "inset 0 0 30px hsla(336, 71%, 27%, 0.1)"
                }} />

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 bg-gradient-brand">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-foreground group-hover:text-gradient-premium transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-foreground/60 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground/70"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>{t("Dowiedz się więcej", "Learn more")}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
