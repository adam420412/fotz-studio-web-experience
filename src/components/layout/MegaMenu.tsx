import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Import portfolio images for preview
import brandingImg from "@/assets/portfolio/klagem.png";
import websiteImg from "@/assets/portfolio/rppg.png";
import videoImg from "@/assets/portfolio/enea-stadion.png";
import marketingImg from "@/assets/portfolio/fabryka-virali.png";
import graphicImg from "@/assets/portfolio/verthe.png";

interface MenuCategory {
  title: string;
  description: string;
  image: string;
  color: string;
  items: { name: string; href: string; badge?: string }[];
}

const menuCategories: MenuCategory[] = [
  {
    title: "Marketing",
    description: "Kompleksowa obsługa marketingowa dla Twojej firmy",
    image: marketingImg,
    color: "#75143F",
    items: [
      { name: "Kompleksowa obsługa", href: "/kompleksowa-obsluga-marketingowa" },
      { name: "Marketing Internetowy", href: "/agencja-marketingu-internetowego", badge: "Nowe" },
      { name: "Social Media", href: "/social-media" },
      { name: "Facebook Ads", href: "/facebook-ads" },
      { name: "Google Ads", href: "/google-ads" },
    ],
  },
  {
    title: "Strony & SEO",
    description: "Strony internetowe, e-commerce i pozycjonowanie w wyszukiwarkach",
    image: websiteImg,
    color: "#0F3053",
    items: [
      { name: "Strony Internetowe", href: "/strony-internetowe" },
      { name: "E-commerce & Sklepy", href: "/ecommerce-tworzenie-sklepu", badge: "Nowe" },
      { name: "Pozycjonowanie SEO", href: "/pozycjonowanie" },
      { name: "Google Maps", href: "/pozycjonowanie-google-maps" },
    ],
  },
  {
    title: "Produkcja",
    description: "Profesjonalna produkcja video i foto",
    image: videoImg,
    color: "#422249",
    items: [
      { name: "Produkcja Filmów", href: "/produkcja-filmow" },
      { name: "Spoty Reklamowe", href: "/spoty-reklamowe" },
      { name: "Wizualizacje 3D", href: "/wizualizacje-3d" },
      { name: "Fotografia", href: "/fotografia" },
    ],
  },
  {
    title: "Branding",
    description: "Identyfikacja wizualna i budowanie marki",
    image: brandingImg,
    color: "#75143F",
    items: [
      { name: "Identyfikacja wizualna", href: "/identyfikacja-wizualna" },
      { name: "Obsługa graficzna", href: "/agencja-graficzna", badge: "Nowe" },
    ],
  },
  {
    title: "Dla kogo",
    description: "Rozwiązania dopasowane do Twojej branży",
    image: graphicImg,
    color: "#2D4A3E",
    items: [
      { name: "Firmy lokalne", href: "/dla-kogo/firmy-lokalne" },
      { name: "E-commerce", href: "/dla-kogo/ecommerce" },
      { name: "Marki premium", href: "/dla-kogo/marki-premium" },
      { name: "Instytucje i eventy", href: "/dla-kogo/instytucje" },
      { name: "Branża medyczna", href: "/dla-kogo/branza-medyczna", badge: "Nowe" },
      { name: "Gastronomia", href: "/dla-kogo/gastronomia", badge: "Nowe" },
      { name: "Beauty & Wellness", href: "/dla-kogo/beauty-wellness", badge: "Nowe" },
      { name: "Nieruchomości", href: "/dla-kogo/nieruchomosci", badge: "Nowe" },
    ],
  },
];

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  const [hoveredCategory, setHoveredCategory] = useState<number>(0);
  const activeCategory = menuCategories[hoveredCategory];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ 
              duration: 0.3, 
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed top-20 left-0 right-0 z-50 px-4 md:px-12"
          >
            <div className="container mx-auto">
              <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-[320px_1fr] min-h-[400px]">
                  {/* Left Preview Panel */}
                  <div className="hidden lg:block relative overflow-hidden">
                    {/* Background layer - always visible for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#75143F] to-[#0F3053]" />
                    
                    <AnimatePresence mode="sync">
                      <motion.div
                        key={hoveredCategory}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ 
                          duration: 0.5, 
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="absolute inset-0"
                      >
                        {/* Image with crossfade */}
                        <motion.div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${activeCategory.image})` }}
                          initial={{ scale: 1.1 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                        
                        {/* Color overlay with smooth transition */}
                        <motion.div 
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          style={{ 
                            background: `linear-gradient(135deg, ${activeCategory.color}E6 0%, ${activeCategory.color}99 100%)` 
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`content-${hoveredCategory}`}
                          initial={{ y: 30, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ 
                            duration: 0.4, 
                            ease: [0.4, 0, 0.2, 1],
                            delay: 0.1
                          }}
                        >
                          <motion.h3 
                            className="text-2xl font-bold text-white mb-2"
                          >
                            {activeCategory.title}
                          </motion.h3>
                          <motion.p
                            className="text-white/80 text-sm"
                          >
                            {activeCategory.description}
                          </motion.p>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                    
                    {/* Animated decorative elements */}
                    <motion.div 
                      className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white/20"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="absolute bottom-20 right-8 w-12 h-12 rounded-full border border-white/10"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.4, 0.2]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    />
                  </div>

                  {/* Right Menu Items */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <Link 
                        to="/uslugi" 
                        onClick={onClose}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Wszystkie usługi →
                      </Link>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {menuCategories.map((category, categoryIndex) => (
                        <motion.div
                          key={category.title}
                          onMouseEnter={() => setHoveredCategory(categoryIndex)}
                          className="space-y-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: categoryIndex * 0.05 + 0.1 }}
                        >
                          <h4 
                            className={cn(
                              "text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                              hoveredCategory === categoryIndex 
                                ? "text-foreground translate-x-1" 
                                : "text-muted-foreground"
                            )}
                            style={{ 
                              color: hoveredCategory === categoryIndex ? category.color : undefined 
                            }}
                          >
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: category.color }}
                              animate={{ 
                                scale: hoveredCategory === categoryIndex ? 1 : 0,
                                opacity: hoveredCategory === categoryIndex ? 1 : 0
                              }}
                              transition={{ duration: 0.2 }}
                            />
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <motion.li 
                                key={item.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: categoryIndex * 0.05 + itemIndex * 0.03 + 0.15 }}
                              >
                                <Link
                                  to={item.href}
                                  onClick={onClose}
                                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-200 flex items-center gap-2 hover:translate-x-1"
                                >
                                  {item.name}
                                  {item.badge && (
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-[#75143F]/20 text-[#75143F] rounded animate-pulse">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <motion.div 
                      className="mt-8 pt-6 border-t border-border"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          Nie wiesz, czego potrzebujesz?
                        </p>
                        <Link
                          to="/kontakt"
                          onClick={onClose}
                          className="text-sm font-medium text-[#75143F] hover:text-[#75143F]/80 transition-colors group flex items-center gap-1"
                        >
                          Umów bezpłatną konsultację 
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </Link>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
