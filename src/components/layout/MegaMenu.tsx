import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Import portfolio images for preview
import brandingImg from "@/assets/portfolio/klagem.png";
import websiteImg from "@/assets/portfolio/rppg.png";
import videoImg from "@/assets/portfolio/enea-stadion.png";
import marketingImg from "@/assets/portfolio/fabryka-virali.png";
import seoImg from "@/assets/portfolio/celsjusz.png";

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
      { name: "Social Media", href: "/social-media" },
      { name: "Facebook Ads", href: "/facebook-ads" },
      { name: "Google Ads", href: "/google-ads" },
    ],
  },
  {
    title: "Strony & SEO",
    description: "Strony internetowe i pozycjonowanie w wyszukiwarkach",
    image: websiteImg,
    color: "#0F3053",
    items: [
      { name: "Strony Internetowe", href: "/strony-internetowe" },
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
      { name: "Identyfikacja wizualna", href: "/identyfikacja-wizualna", badge: "Nowe" },
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
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 z-50 px-4 md:px-12"
          >
            <div className="container mx-auto">
              <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
                <div className="grid lg:grid-cols-[320px_1fr] min-h-[400px]">
                  {/* Left Preview Panel */}
                  <div className="hidden lg:block relative overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={hoveredCategory}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0"
                      >
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${activeCategory.image})` }}
                        />
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            background: `linear-gradient(135deg, ${activeCategory.color}E6 0%, ${activeCategory.color}99 100%)` 
                          }}
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                          <motion.h3 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-2xl font-bold text-white mb-2"
                          >
                            {activeCategory.title}
                          </motion.h3>
                          <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="text-white/80 text-sm"
                          >
                            {activeCategory.description}
                          </motion.p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
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
                        <div
                          key={category.title}
                          onMouseEnter={() => setHoveredCategory(categoryIndex)}
                          className="space-y-3"
                        >
                          <h4 
                            className={cn(
                              "text-sm font-semibold transition-colors",
                              hoveredCategory === categoryIndex 
                                ? "text-foreground" 
                                : "text-muted-foreground"
                            )}
                            style={{ 
                              color: hoveredCategory === categoryIndex ? category.color : undefined 
                            }}
                          >
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  to={item.href}
                                  onClick={onClose}
                                  className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                                >
                                  {item.name}
                                  {item.badge && (
                                    <span className="text-[10px] font-medium px-1.5 py-0.5 bg-[#75143F]/20 text-[#75143F] rounded">
                                      {item.badge}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-sm text-muted-foreground">
                          Nie wiesz, czego potrzebujesz?
                        </p>
                        <Link
                          to="/kontakt"
                          onClick={onClose}
                          className="text-sm font-medium text-[#75143F] hover:text-[#75143F]/80 transition-colors"
                        >
                          Umów bezpłatną konsultację →
                        </Link>
                      </div>
                    </div>
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
