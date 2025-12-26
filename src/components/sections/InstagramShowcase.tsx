import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { FadeInView } from "@/components/FadeInView";
import { InstagramEmbed } from "@/components/InstagramEmbed";

const instagramPosts = [
  "https://www.instagram.com/p/DNz4N4fVOJq/",
  "https://www.instagram.com/p/DSn0ptXiHWt/",
  "https://www.instagram.com/p/DSpMWiZjY9s/",
];

export function InstagramShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full blur-[200px]"
          style={{ background: "hsla(336, 71%, 27%, 0.08)" }}
        />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[150px]"
          style={{ background: "hsla(280, 60%, 40%, 0.08)" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 border border-[#E1306C]/30 rounded-full text-[#E1306C] text-xs sm:text-sm font-medium mb-4 sm:mb-6"
            >
              <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              @fotz_studio
            </motion.span>
            
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold mb-4 sm:mb-6 px-2">
              Portfolio <span className="text-gradient">Social Media</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Przykłady naszych realizacji z profilu @fotz_studio
            </p>
          </div>
        </FadeInView>

        {/* Instagram Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {instagramPosts.map((url, index) => (
            <FadeInView key={url} delay={0.1 * (index + 1)}>
              <InstagramEmbed url={url} />
            </FadeInView>
          ))}
        </div>

        {/* Instagram CTA */}
        <FadeInView delay={0.4}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10 sm:mt-12"
          >
            <a 
              href="https://www.instagram.com/fotz_studio/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white rounded-full font-medium transition-opacity group"
            >
              <Instagram className="w-5 h-5" />
              Obserwuj nas na Instagramie
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </FadeInView>
      </div>
    </section>
  );
}
