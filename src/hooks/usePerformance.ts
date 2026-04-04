import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
}

/**
 * Hook to monitor Core Web Vitals in development
 * Only runs in development mode
 */
export function useWebVitals() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    if (import.meta.env.MODE !== 'development') return;

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
      setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const firstEntry = entries[0] as PerformanceEventTiming;
      if (firstEntry.processingStart) {
        setMetrics(prev => ({ 
          ...prev, 
          fid: firstEntry.processingStart - firstEntry.startTime 
        }));
      }
    });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as (PerformanceEntry & { hadRecentInput: boolean; value: number })[]) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      }
    });

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(e => e.name === 'first-contentful-paint');
      if (fcpEntry) {
        setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
      }
    });

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      fidObserver.observe({ type: 'first-input', buffered: true });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      fcpObserver.observe({ type: 'paint', buffered: true });
    } catch (e) {
      console.warn('Performance observer not supported:', e);
    }

    // TTFB
    const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navEntry.responseStart - navEntry.requestStart }));
    }

    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  const logMetrics = useCallback(() => {
    if (process.env.NODE_ENV !== 'development') return;
    
    console.group('🚀 Core Web Vitals');
    console.log(`LCP: ${metrics.lcp?.toFixed(0) || 'pending'}ms (good < 2500ms)`);
    console.log(`FID: ${metrics.fid?.toFixed(0) || 'pending'}ms (good < 100ms)`);
    console.log(`CLS: ${metrics.cls?.toFixed(3) || 'pending'} (good < 0.1)`);
    console.log(`TTFB: ${metrics.ttfb?.toFixed(0) || 'pending'}ms (good < 800ms)`);
    console.log(`FCP: ${metrics.fcp?.toFixed(0) || 'pending'}ms (good < 1800ms)`);
    console.groupEnd();
  }, [metrics]);

  return { metrics, logMetrics };
}

/**
 * Preload critical images for better LCP
 */
export function preloadImage(src: string, priority: 'high' | 'low' = 'high') {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = priority;
  document.head.appendChild(link);
}

/**
 * Detect if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Detect connection speed for adaptive loading
 */
export function getConnectionSpeed(): 'slow' | 'medium' | 'fast' {
  const connection = (navigator as Navigator & { connection?: { effectiveType: string } }).connection;
  
  if (!connection) return 'fast';
  
  switch (connection.effectiveType) {
    case 'slow-2g':
    case '2g':
      return 'slow';
    case '3g':
      return 'medium';
    default:
      return 'fast';
  }
}
