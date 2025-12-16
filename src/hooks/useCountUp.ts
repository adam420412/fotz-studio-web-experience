import { useState, useEffect, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export function useCountUp({
  end,
  duration = 2000,
  delay = 0,
  prefix = "",
  suffix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        return;
      }

      const progress = (now - startTime) / duration;
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(end * easeOutQuart));

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, delay, hasAnimated]);

  // Format large numbers (e.g., 1000000 -> "1mln")
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(0)}mln`;
    }
    return num.toLocaleString("pl-PL");
  };

  const displayValue = `${prefix}${formatNumber(count)}${suffix}`;

  return { ref, displayValue, count };
}
