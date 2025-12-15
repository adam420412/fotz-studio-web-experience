import { Link } from "react-router-dom";
import { Globe, Video, Target, Crown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe & widoczność",
    description:
      "Nowoczesne strony www i sklepy, które konwertują. SEO, które stawia Cię na pierwszej stronie Google.",
    features: ["Strony www", "E-commerce", "SEO", "Analityka"],
    href: "/uslugi/strony-internetowe",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Video,
    title: "Social media & video marketing",
    description:
      "Treści wideo i kampanie social, które budują społeczność i angażują odbiorców.",
    features: ["Content", "Video", "Reels", "TikTok"],
    href: "/uslugi/social-media",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
  {
    icon: Target,
    title: "Kampanie reklamowe & lead generation",
    description:
      "Performance marketing z mierzalnymi rezultatami. Google Ads, Meta Ads i LinkedIn.",
    features: ["Google Ads", "Meta Ads", "LinkedIn", "Remarketing"],
    href: "/uslugi/kampanie-reklamowe",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-400",
  },
  {
    icon: Crown,
    title: "Marketing premium & instytucje",
    description:
      "Kompleksowe strategie dla marek premium, instytucji kultury i organizatorów eventów.",
    features: ["Strategia", "Branding", "Events", "PR"],
    href: "/uslugi/marketing-premium",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Services() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-x-1/2" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Co robimy
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            4 filary <span className="text-gradient">Twojego wzrostu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Kompleksowe wsparcie marketingowe w jednym miejscu.
            Strategia, kreacja i performance pod jednym dachem.
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
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link
                to={service.href}
                className="group relative block p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden h-full"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                    service.gradient
                  )}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110",
                      service.iconBg,
                      service.iconColor
                    )}
                  >
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>Dowiedz się więcej</span>
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
