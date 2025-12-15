import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Martyna Kasprzak",
    role: "Właścicielka firmy",
    content: "Polecam Fotz Studio i współpracę z Panem Adamem. Strona internetowa zrobiona w takim terminie jak było ustalone, strona wygląda estetycznie i każdy detal jest dopracowany.",
    rating: 5,
  },
  {
    name: "Robert Zyśk",
    role: "Przedsiębiorca",
    content: "Chciałbym polecić FOTZ jako profesjonalnego i rzetelnego partnera w zakresie projektowania stron internetowych. Od samego początku współpraca przebiegała sprawnie.",
    rating: 5,
  },
  {
    name: "Edyta",
    role: "Klientka",
    content: "Polecam Fotz Studio, a szczególnie współpracę z Panem Adamem. Bardzo doceniam świetny kontakt i szybkie działanie - konkretna robota!",
    rating: 5,
  },
  {
    name: "Olivier G",
    role: "Stały klient",
    content: "Polecam z całego serca... współpracowałem z panem Adamem kilkukrotnie i za każdym razem wszystko szło szybko, sprawnie i bardzo dobrze.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[200px]"
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
            Referencje
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Referencje i opinie <span className="text-gradient-premium">zadowolonych klientów</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Zadowolenie naszych klientów jest dla nas priorytetem. Ich referencje i opinie stanowią najlepszy dowód na skuteczność naszych działań.
          </p>
          
          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full bg-card border border-border/50"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-foreground font-semibold">5.0</span>
            <span className="text-foreground/60">• 160+ opinii Google</span>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover-lift"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-10 h-10 text-primary/20" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}