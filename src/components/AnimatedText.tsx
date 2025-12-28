import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Animated paragraph that reveals text as you scroll
interface ScrollRevealTextProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function ScrollRevealText({ 
  text, 
  className = "",
  highlightWords = [],
  highlightClassName = "text-primary"
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"]
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={cn("leading-relaxed", className)}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isHighlight = highlightWords.some(hw => 
          word.toLowerCase().includes(hw.toLowerCase())
        );
        
        return (
          <Word 
            key={i} 
            range={[start, end]} 
            progress={scrollYProgress}
            isHighlight={isHighlight}
            highlightClassName={highlightClassName}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
}

function Word({ 
  children, 
  range, 
  progress,
  isHighlight,
  highlightClassName
}: { 
  children: string; 
  range: [number, number]; 
  progress: any;
  isHighlight: boolean;
  highlightClassName: string;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [8, 0]);
  
  return (
    <motion.span 
      style={{ opacity, y }} 
      className={cn(
        "inline-block mr-[0.25em] transition-colors duration-300",
        isHighlight && highlightClassName
      )}
    >
      {children}
    </motion.span>
  );
}

// Typewriter effect for text
interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export function TypewriterText({ 
  text, 
  className = "",
  delay = 0,
  speed = 0.03
}: TypewriterTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const chars = text.split("");

  return (
    <span ref={ref} className={className}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{
            duration: 0.1,
            delay: delay + i * speed,
            ease: "easeOut",
          }}
        >
          {char}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[2px] h-[1em] bg-primary ml-1"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ display: isInView ? "inline-block" : "none" }}
      />
    </span>
  );
}

// Split and animate each line separately
interface AnimatedLinesProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  staggerDelay?: number;
}

export function AnimatedLines({ 
  lines, 
  className = "",
  lineClassName = "",
  staggerDelay = 0.1
}: AnimatedLinesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: i * staggerDelay,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className={lineClassName}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

// Floating words that animate on scroll
interface FloatingWordsProps {
  words: { text: string; color?: string }[];
  className?: string;
}

export function FloatingWords({ words, className = "" }: FloatingWordsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={cn("flex flex-wrap gap-3 justify-center", className)}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ 
            opacity: 0, 
            y: 40,
            scale: 0.8,
            rotate: Math.random() * 10 - 5
          }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            scale: 1,
            rotate: 0
          } : {}}
          transition={{
            duration: 0.6,
            delay: i * 0.08,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            transition: { duration: 0.2 }
          }}
          className={cn(
            "px-4 py-2 rounded-full bg-card border border-border/50 text-sm font-medium cursor-default",
            word.color || "text-foreground/80"
          )}
        >
          {word.text}
        </motion.span>
      ))}
    </div>
  );
}

// Animated counter with text label
interface AnimatedStatProps {
  value: string;
  label: string;
  delay?: number;
}

export function AnimatedStat({ value, label, delay = 0 }: AnimatedStatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <motion.div 
        className="text-4xl md:text-5xl font-heading font-bold text-gradient-premium mb-2"
        initial={{ scale: 0.5 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.2, type: "spring" }}
      >
        {value}
      </motion.div>
      <div className="text-foreground/60 text-sm">{label}</div>
    </motion.div>
  );
}

// Animated text block with gradient highlight effect
interface GlowingTextBlockProps {
  title: string;
  description: string;
  className?: string;
  glowColor?: string;
}

export function GlowingTextBlock({ 
  title, 
  description, 
  className = "",
  glowColor = "hsl(var(--primary) / 0.3)"
}: GlowingTextBlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className={cn("relative", className)}
    >
      <motion.div
        className="absolute -inset-4 rounded-2xl blur-3xl -z-10"
        style={{ background: glowColor }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { 
          opacity: [0, 0.5, 0.3],
          scale: [0.8, 1.1, 1]
        } : {}}
        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
      />
      <motion.h3
        initial={{ y: 20 }}
        animate={isInView ? { y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl md:text-2xl font-heading font-bold mb-3"
      >
        {title}
      </motion.h3>
      <ScrollRevealText 
        text={description}
        className="text-foreground/70"
      />
    </motion.div>
  );
}

// Marquee/scrolling text effect
interface MarqueeTextProps {
  text: string;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
}

export function MarqueeText({ 
  text, 
  className = "",
  speed = 20,
  direction = "left"
}: MarqueeTextProps) {
  const duplicatedText = `${text} • ${text} • ${text} • ${text} • `;
  
  return (
    <div className={cn("overflow-hidden whitespace-nowrap", className)}>
      <motion.div
        animate={{ 
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{ 
          duration: speed,
          ease: "linear",
          repeat: Infinity
        }}
        className="inline-block"
      >
        <span className="text-4xl md:text-6xl lg:text-8xl font-heading font-bold text-foreground/5">
          {duplicatedText}
        </span>
      </motion.div>
    </div>
  );
}

// Animated bullet points
interface AnimatedBulletListProps {
  items: string[];
  className?: string;
  bulletColor?: string;
}

export function AnimatedBulletList({ 
  items, 
  className = "",
  bulletColor = "bg-primary"
}: AnimatedBulletListProps) {
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <ul ref={ref} className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ 
            duration: 0.5, 
            delay: i * 0.1,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          className="flex items-start gap-3 group"
        >
          <motion.span
            className={cn("w-2 h-2 rounded-full mt-2 flex-shrink-0", bulletColor)}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
          />
          <span className="text-foreground/70 group-hover:text-foreground transition-colors">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

// Spotlight text effect - highlights words as they come into view
interface SpotlightTextProps {
  text: string;
  className?: string;
}

export function SpotlightText({ text, className = "" }: SpotlightTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.3"]
  });

  const sentences = text.split(". ").filter(s => s.trim());

  return (
    <div ref={ref} className={cn("space-y-6", className)}>
      {sentences.map((sentence, i) => {
        const start = i / sentences.length;
        const end = (i + 1) / sentences.length;
        
        return (
          <SentenceSpotlight
            key={i}
            sentence={sentence + (i < sentences.length - 1 ? "." : "")}
            range={[start, end]}
            progress={scrollYProgress}
            index={i}
          />
        );
      })}
    </div>
  );
}

function SentenceSpotlight({ 
  sentence, 
  range, 
  progress,
  index
}: { 
  sentence: string; 
  range: [number, number]; 
  progress: any;
  index: number;
}) {
  const opacity = useTransform(progress, range, [0.3, 1]);
  const scale = useTransform(progress, range, [0.98, 1]);
  const x = useTransform(progress, range, [index % 2 === 0 ? -20 : 20, 0]);

  return (
    <motion.p
      style={{ opacity, scale, x }}
      className="text-lg md:text-xl leading-relaxed"
    >
      {sentence}
    </motion.p>
  );
}
