import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Star } from "lucide-react";

interface PricingItem {
  title: string;
  desc: string;
  price: string;
  features?: string[];
  popular?: boolean;
}

interface CityPricingCardsProps {
  pricing: PricingItem[];
  title?: string;
  subtitle?: string;
  cityName?: string;
}

export const CityPricingCards = ({ 
  pricing, 
  title = "Cennik usług",
  subtitle,
  cityName = ""
}: CityPricingCardsProps) => {
  // Add default features if not provided
  const pricingWithFeatures = pricing.map((item, index) => ({
    ...item,
    features: item.features || getDefaultFeatures(index),
    popular: item.popular || index === 1
  }));

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Cennik {cityName}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingWithFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`group relative ${item.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular badge */}
              {item.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-to-r from-primary to-primary/80 
                                rounded-full text-primary-foreground text-sm font-medium shadow-lg shadow-primary/30">
                    <Star className="w-4 h-4 fill-current" />
                    Popularne
                  </div>
                </div>
              )}

              <div className={`relative h-full p-8 rounded-3xl border backdrop-blur-sm
                            transition-all duration-500 ease-out overflow-hidden
                            ${item.popular 
                              ? 'bg-gradient-to-b from-card to-card/80 border-primary/50 shadow-xl shadow-primary/10' 
                              : 'bg-card/80 border-border/50 hover:border-primary/30'
                            }
                            hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10`}>
                
                {/* Gradient glow for popular */}
                {item.popular && (
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                )}

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>

                {/* Price */}
                <div className="relative z-10 mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${item.popular ? 'text-gradient' : 'text-primary'}`}>
                      {item.price.replace('od ', '').split(' ')[0]}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {item.price.includes('zł') ? 'zł' : ''} netto
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Wycena indywidualna</p>
                </div>

                {/* Features */}
                <div className="relative z-10 space-y-4 mb-8">
                  {item.features?.map((feature, fIndex) => (
                    <motion.div 
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + fIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                                    ${item.popular ? 'bg-primary text-primary-foreground' : 'bg-primary/20 text-primary'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Button 
                    asChild 
                    className={`w-full group/btn ${item.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground'}`}
                    size="lg"
                  >
                    <Link to="/kontakt">
                      Bezpłatna wycena
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getDefaultFeatures(index: number): string[] {
  const featureSets = [
    [
      "Do 5 podstron",
      "Responsywny design",
      "Podstawowe SEO",
      "Formularz kontaktowy",
      "Certyfikat SSL"
    ],
    [
      "Do 15 podstron",
      "Zaawansowane SEO",
      "Blog firmowy",
      "Integracja z social media",
      "System CMS",
      "Wsparcie techniczne"
    ],
    [
      "Nieograniczona liczba produktów",
      "Panel administracyjny",
      "Integracje płatności",
      "Optymalizacja konwersji",
      "Narzędzia marketingowe",
      "Kompleksowa opieka"
    ]
  ];
  return featureSets[index] || featureSets[0];
}
