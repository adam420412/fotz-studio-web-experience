import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Users, Target, TrendingUp } from "lucide-react";

export function WhyUs() {
  const { t } = useLanguage();

  const items = [
    {
      icon: Users,
      title: t("Wartościowa współpraca z klientem", "Valuable client collaboration"),
      description: t(
        "Współpraca z agencją marketingową to klucz do efektywnych kampanii reklamowych. Agencja staje się partnerem, który rozumie potrzeby klienta i dostosowuje strategie marketingowe do specyfiki jego biznesu. Indywidualne podejście do klienta to fundament sukcesu, pozwalający na tworzenie kampanii, które realnie wpływają na przychód i konwersję.",
        "Working with a marketing agency is the key to effective advertising campaigns. The agency becomes a partner who understands the client's needs and adapts marketing strategies to the specifics of their business. An individual approach to the client is the foundation of success, allowing the creation of campaigns that really impact revenue and conversion."
      ),
    },
    {
      icon: Target,
      title: t("Nasze podejście do strategii marketingowej", "Our approach to marketing strategy"),
      description: t(
        "Nasze podejście do strategii marketingowej opiera się na głębokiej analityce i zrozumieniu potrzeb klienta. Przeprowadzamy audyt oraz analizę danych z analityki witryny i ruchu na stronie. Wykorzystujemy AI i automatyzację, aby zoptymalizować kampanie Google Ads i Social Media, maksymalizując zwrot z inwestycji.",
        "Our approach to marketing strategy is based on deep analytics and understanding of client needs. We conduct audits and analyze website analytics and traffic data. We use AI and automation to optimize Google Ads and Social Media campaigns, maximizing ROI."
      ),
    },
    {
      icon: TrendingUp,
      title: t("Jak agencja wpływa na przychody biznesowe", "How agency impacts business revenue"),
      description: t(
        "Agencja marketingowa ma bezpośredni wpływ na przychody biznesowe poprzez skuteczne kampanie reklamowe i content marketing. Kreacje copywriterów angażują odbiorców, a pozycjonowanie stron zwiększa widoczność w wyszukiwarce. Optymalizacja UX i contentu sprzyja konwersji, przekształcając ruch na stronie w realnych klientów e-commerce.",
        "A marketing agency has a direct impact on business revenue through effective advertising campaigns and content marketing. Copywriter creations engage audiences, and SEO increases visibility in search engines. UX and content optimization promotes conversion, transforming website traffic into real e-commerce customers."
      ),
    },
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[180px]"
          style={{ background: "hsla(336, 71%, 27%, 0.1)" }}
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
            {t("Dlaczego my", "Why us")}
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            {t("Dlaczego wybór", "Why choosing a")}{" "}
            <span className="text-gradient-premium">
              {t("agencji marketingowej jest kluczowy?", "marketing agency is crucial?")}
            </span>
          </h2>
        </motion.div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-brand">
                <item.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-heading font-bold mb-4">{item.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
