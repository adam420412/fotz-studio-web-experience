import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { industries as allIndustries } from "@/data/industries.mjs";

interface OtherIndustriesProps {
  currentSlug: string;
}

export function OtherIndustries({ currentSlug }: OtherIndustriesProps) {
  const otherIndustries = allIndustries.filter((ind) => ind.slug !== currentSlug);

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Inne <span className="text-gradient-premium">branże</span>
          </h2>
          <p className="text-foreground/70">
            Sprawdź jak pomagamy firmom z innych sektorów
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {otherIndustries.map((industry, index) => (
            <motion.div
              key={industry.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={industry.href}
                className="block p-4 rounded-xl bg-background border border-border/30 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-sm group-hover:text-primary transition-colors">
                    {industry.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
