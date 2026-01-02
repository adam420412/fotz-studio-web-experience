interface SmoothScrollProps {
  children: React.ReactNode;
}

// Simplified - removed Lenis for better performance and native scroll behavior
export function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}
