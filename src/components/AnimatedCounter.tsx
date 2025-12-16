import { useCountUp } from "@/hooks/useCountUp";
import { motion } from "framer-motion";

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  label: string;
  index: number;
}

export function AnimatedCounter({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
  delay = 0,
  label,
  index,
}: AnimatedCounterProps) {
  const { ref, displayValue } = useCountUp({
    end,
    duration,
    delay,
    prefix,
    suffix,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-heading font-bold text-gradient-premium mb-2">
        {displayValue}
      </div>
      <div className="text-sm text-foreground/60">{label}</div>
    </motion.div>
  );
}
