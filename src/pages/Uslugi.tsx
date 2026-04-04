import { Link } from "react-router-dom";
import { Globe, Video, Target, Crown, ArrowRight, CheckCircle, Play, Sparkles, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { VideoLightbox } from "@/components/VideoLightbox";
import { SEOHead } from "@/components/seo/SEOHead";
import { BreadcrumbSchema, ServiceSchema } from "@/components/seo/StructuredData";

// Portfolio images for each service
import eneaStadion from "@/assets/portfolio/enea-stadion.png";
import fabrykaVirali from "@/assets/portfolio/fabryka-virali.png";
import fpsCegielski from "@/assets/portfolio/fps-cegielski.png";
import rppg from "@/assets/portfolio/rppg.png";

const services = [
  {
    icon: Globe,
    title: "Strony internetowe & widoczność",
    description:
      "Projektujemy nowoczesne strony www, które nie tylko wyglądają świetnie, ale przede wszystkim konwertują odwiedzających w klientów. Kompleksowe podejście do SEO i widoczności w sieci.",
    features: [
      "Strony firmowe i landing pages",
      "Sklepy e-commerce",
      "Pozycjonowanie SEO",
      "Audyty techniczne",
      "Optymalizacja konwersji",
      "Analityka i raportowanie",
    ],
    href: "/uslugi/strony-internetowe",
    image: fpsCegielski,
    video: "/videos/fps-poznan.mp4",
    color: "from-orange-500/20 to-amber-500/10",
    accent: "orange",
  },
  {
    icon: Video,
    title: "Social media & video marketing",
    description:
      "Budujemy obecność marki w social mediach. Tworzymy treści wideo, które angażują i budują społeczność wokół Twojej marki. Od strategii po produkcję i publikację.",
    features: [
      "Strategia social media",
      "Content marketing",
      "Produkcja video",
      "Zarządzanie profilami",
      "Influencer marketing",
      "Community management",
    ],
    href: "/social-media/obsluga",
    image: fabrykaVirali,
    video: "/videos/fotz-reel.mp4",
    color: "from-purple-500/20 to-pink-500/10",
    accent: "purple",
  },
  {
    icon: Target,
    title: "Kampanie reklamowe & lead generation",
    description:
      "Projektujemy i zarządzamy kampaniami, które przynoszą mierzalne rezultaty. Google Ads, Meta Ads, LinkedIn Ads i więcej. Skupiamy się na ROI i generowaniu wartościowych leadów.",
    features: [
      "Google Ads & Search",
      "Meta Ads (Facebook & Instagram)",
      "LinkedIn Ads B2B",
      "Remarketing",
      "Automatyzacja marketingu",
      "Lead nurturing",
    ],
    href: "/kampanie-reklamowe",
    image: eneaStadion,
    video: "/videos/enea-stadion-header.mp4",
    color: "from-blue-500/20 to-cyan-500/10",
    accent: "blue",
  },
  {
    icon: Crown,
    title: "Marketing premium & instytucje",
    description:
      "Kompleksowe wsparcie marketingowe dla marek premium, instytucji kultury i organizatorów wydarzeń o wysokich wymaganiach. Strategia, kreacja i realizacja na najwyższym poziomie.",
    features: [
      "Strategia marki",
      "Branding & identyfikacja",
      "Marketing eventowy",
      "PR i komunikacja",
      "Consulting strategiczny",
      "Employer branding",
    ],
    href: "/dla-kogo/marki-premium",
    image: rppg,
    video: "/videos/fun-sport-stylish.mp4",
    color: "from-amber-500/20 to-yellow-500/10",
    accent: "amber",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const isReversed = index % 2 === 1;

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsLightboxOpen(true);
  };

  return (
    <>
      <motion.div
        ref={cardRef}
        style={{ opacity, scale }}
        className="relative"
      >
        {/* Background gradient blob */}
        <motion.div 
          className={cn(
            "absolute -inset-20 rounded-[100px] blur-3xl opacity-30 transition-opacity duration-700",
            `bg-gradient-to-br ${service.color}`,
            isHovered && "opacity-50"
          )}
          style={{ y }}
        />

        <div 
          className={cn(
            "relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
            isReversed && "lg:flex-row-reverse"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Content */}
          <motion.div 
            className={cn(isReversed && "lg:order-2")}
            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Icon with animated background */}
            <motion.div 
              className="relative w-16 h-16 mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <div className={cn(
                "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-20",
                service.color
              )} />
              <div className="absolute inset-0 rounded-2xl bg-primary/10 backdrop-blur-sm border border-primary/20 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <motion.div 
                className="absolute -inset-1 rounded-2xl bg-primary/20 blur-xl"
                animate={{ 
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  opacity: isHovered ? [0.3, 0.6, 0.3] : 0.3 
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Title with gradient on hover */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <span className={cn(
                "transition-all duration-500",
                isHovered && "text-gradient"
              )}>
                {service.title}
              </span>
            </motion.h2>

            <motion.p 
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {service.description}
            </motion.p>

            {/* Features grid with staggered animation */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-3 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05 } }
              }}
            >
              {service.features.map((feature, i) => (
                <motion.div 
                  key={feature} 
                  className="flex items-center gap-3 group/feature"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  <div className="relative">
                    <CheckCircle className="w-5 h-5 text-primary transition-transform group-hover/feature:scale-110" />
                    <motion.div 
                      className="absolute inset-0 bg-primary/30 rounded-full blur-md"
                      initial={{ scale: 0 }}
                      animate={{ scale: isHovered ? 1 : 0 }}
                      transition={{ delay: i * 0.05 }}
                    />
                  </div>
                  <span className="text-sm text-foreground/80 group-hover/feature:text-foreground transition-colors">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Button variant="hero" size="lg" asChild className="group">
                <Link to={service.href}>
                  <span>Dowiedz się więcej</span>
                  <ArrowRight className="w-4 h-4 transition-all group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Video Player */}
          <motion.div
            className={cn(
              "relative aspect-video rounded-3xl overflow-hidden group",
              isReversed && "lg:order-1"
            )}
            initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Decorative frame */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 z-10 pointer-events-none" />
            
            {/* Glowing border on hover */}
            <motion.div 
              className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/50 to-secondary/50 blur-xl z-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.5 : 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Video */}
            <video
              ref={videoRef}
              src={service.video}
              poster={service.image}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Play/Pause overlay - center */}
            <motion.div 
              className={cn(
                "absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-300 pointer-events-none",
                isPlaying ? "opacity-0" : "opacity-100"
              )}
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30 pointer-events-auto cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlay}
              >
                <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
              </motion.div>
            </motion.div>

            {/* Control buttons - bottom bar */}
            <div className={cn(
              "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent z-20 transition-opacity duration-300",
              isHovered || isPlaying ? "opacity-100" : "opacity-0"
            )}>
              <div className="flex items-center justify-between">
                {/* Left controls */}
                <div className="flex items-center gap-2">
                  {/* Play/Pause button */}
                  <motion.button
                    className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isPlaying ? (
                      <div className="flex gap-0.5">
                        <div className="w-1.5 h-4 bg-foreground rounded-sm" />
                        <div className="w-1.5 h-4 bg-foreground rounded-sm" />
                      </div>
                    ) : (
                      <Play className="w-4 h-4 text-foreground ml-0.5" fill="currentColor" />
                    )}
                  </motion.button>

                  {/* Mute/Unmute button */}
                  <motion.button
                    className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-foreground" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-foreground" />
                    )}
                  </motion.button>
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2">
                  {/* Fullscreen button */}
                  <motion.button
                    className="w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm flex items-center justify-center transition-colors"
                    onClick={openLightbox}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Maximize2 className="w-4 h-4 text-foreground" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-4 right-4 z-20 pointer-events-none">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center"
                animate={{ 
                  rotate: isPlaying ? 360 : 0,
                }}
                transition={{ duration: 2, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Video Lightbox */}
      <VideoLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        videoSrc={service.video}
        title={service.title}
      />
    </>
  );
};

export default function Uslugi() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <Layout>
      <SEOHead
        title="Usługi Marketingowe | Strony, Reklama, Social | Fotz"
        description="Strony internetowe, social media, Google Ads, Facebook Ads, SEO i branding. Kompleksowe usługi marketingowe. Fotz Studio Poznań."
        canonical="https://fotz.pl/uslugi"
        keywords="usługi marketingowe, strony internetowe, social media marketing, kampanie reklamowe, Google Ads, Facebook Ads, SEO, branding, agencja marketingowa"
      />
      <BreadcrumbSchema 
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Usługi", url: "https://fotz.pl/uslugi" }
        ]}
      />
      <ServiceSchema 
        name="Usługi marketingowe Fotz Studio"
        description="Kompleksowe usługi marketingowe: strony internetowe, social media, kampanie reklamowe, SEO i branding"
      />
      {/* Hero with parallax */}
      <section ref={heroRef} className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <motion.div 
            className="absolute top-20 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"
            animate={{ 
              x: [0, 50, 0],
              y: [0, 30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px]"
            animate={{ 
              x: [0, -40, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
                linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div 
          className="container-wide relative z-10"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Nasze usługi</span>
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Kompleksowy marketing{" "}
              <span className="text-gradient relative">
                dla Twojego biznesu
                <motion.span 
                  className="absolute -inset-2 bg-primary/20 rounded-lg blur-2xl -z-10"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Cztery filary naszej działalności, które razem tworzą spójną 
              strategię marketingową dopasowaną do Twoich celów.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {[
                { value: "200+", label: "Projektów" },
                { value: "50+", label: "Klientów" },
                { value: "5", label: "Lat doświadczenia" },
              ].map((stat, i) => (
                <div key={stat.label} className="text-center">
                  <motion.div 
                    className="text-3xl md:text-4xl font-heading font-bold text-primary mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 relative">
        <div className="container-wide space-y-32 md:space-y-48">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container-wide relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-8"
            >
              <Sparkles className="w-10 h-10 text-primary" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Nie wiesz, <span className="text-gradient">od czego zacząć?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację. Przeanalizujemy Twoje potrzeby 
              i zaproponujemy najlepsze rozwiązania.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" asChild className="group">
                <Link to="/kontakt">
                  <span>Bezpłatna konsultacja</span>
                  <ArrowRight className="w-5 h-5 transition-all group-hover:translate-x-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
