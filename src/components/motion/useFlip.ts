import { useEffect, useLayoutEffect, useRef, type RefObject } from "react";

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;
const EASE = "cubic-bezier(.22,.8,.24,1)";

/**
 * FLIP reordering for a grid whose children carry `data-flip-key`.
 * Call `capture()` right before the state change that reorders the grid;
 * cards that stay glide to their new spot, new cards rise in.
 * No-op when the visitor prefers reduced motion or lacks Web Animations.
 */
export function useFlip(container: RefObject<HTMLElement>) {
  const before = useRef<Map<string, DOMRect> | null>(null);

  const capture = () => {
    const el = container.current;
    if (!el || typeof el.animate !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const map = new Map<string, DOMRect>();
    el.querySelectorAll<HTMLElement>("[data-flip-key]").forEach((child) => map.set(child.dataset.flipKey!, child.getBoundingClientRect()));
    before.current = map;
  };

  useIsoLayoutEffect(() => {
    const prev = before.current;
    const el = container.current;
    if (!prev || !el) return;
    before.current = null;
    let fresh = 0;
    el.querySelectorAll<HTMLElement>("[data-flip-key]").forEach((child) => {
      child.classList.add("is-in"); // reordered cards never wait for a scroll reveal
      const last = child.getBoundingClientRect();
      const first = prev.get(child.dataset.flipKey!);
      if (first) {
        const dx = first.left - last.left;
        const dy = first.top - last.top;
        const sx = first.width / last.width;
        const sy = first.height / last.height;
        if (Math.abs(dx) < 1 && Math.abs(dy) < 1 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;
        child.animate(
          [{ transformOrigin: "top left", transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transformOrigin: "top left", transform: "none" }],
          { duration: 620, easing: EASE },
        );
      } else {
        child.animate(
          [{ opacity: 0, transform: "translateY(40px) scale(.97)" }, { opacity: 1, transform: "none" }],
          { duration: 560, delay: 60 + fresh++ * 70, easing: EASE, fill: "backwards" },
        );
      }
    });
  });

  return { capture };
}
