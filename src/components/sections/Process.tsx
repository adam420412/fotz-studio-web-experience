import { Search, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Strategia i analiza",
    description:
      "Poznajemy Twój biznes, analizujemy rynek i konkurencję. Definiujemy cele i KPI. Tworzymy plan działania.",
    details: ["Audyt obecnej sytuacji", "Badanie konkurencji", "Określenie celów"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Projekt i wdrożenie",
    description:
      "Projektujemy kreacje, budujemy strony, uruchamiamy kampanie. Wszystko zgodnie z planem i harmonogramem.",
    details: ["Kreacja i design", "Development", "Launch kampanii"],
  },
  {
    number: "03",
    icon: Rocket,
    title: "Skalowanie i optymalizacja",
    description:
      "Monitorujemy wyniki, optymalizujemy działania, skalujemy to, co działa. Regularnie raportujemy postępy.",
    details: ["Analityka", "A/B testing", "Raporty i wnioski"],
  },
];

export function Process() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-[200px]"
          style={{ background: "hsla(336, 71%, 27%, 0.08)" }}
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
            Jak pracujemy
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Prosty <span className="text-gradient-premium">proces współpracy</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Trzy proste kroki do skutecznego marketingu. Jasno, konkretnie, bez bełkotu.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden md:block absolute top-32 left-[16%] right-[16%] h-px">
            <div className="w-full h-full bg-gradient-brand opacity-30" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative text-center"
              >
                {/* Number & Icon */}
                <div className="relative inline-flex flex-col items-center mb-8">
                  <span className="text-7xl md:text-8xl font-heading font-bold text-muted/50">
                    {step.number}
                  </span>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute bottom-0 w-16 h-16 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg"
                    style={{ boxShadow: "0 0 30px hsla(336, 71%, 27%, 0.3)" }}
                  >
                    <step.icon className="w-7 h-7 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                  {step.title}
                </h3>
                <p className="text-foreground/60 mb-6">{step.description}</p>

                {/* Details */}
                <div className="flex flex-wrap justify-center gap-2">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-foreground/70"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}