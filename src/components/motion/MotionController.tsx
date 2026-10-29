import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./motion.css";

/**
 * Progressive scroll reveals for elements marked with `data-reveal`.
 *
 * The prerendered HTML is always fully visible. Only after hydration, and only
 * when the visitor allows motion, `html.motion-ready` is set and elements below
 * the fold start hidden until they scroll into view. Elements already on screen
 * are marked as revealed first, so nothing flashes and LCP is unaffected.
 */
const SELECTOR = "[data-reveal]";

function inViewport(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight * 0.92 && r.bottom > 0;
}

export function MotionController() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const root = document.documentElement;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-in");
          pending.delete(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const pending = new Set<Element>();
    const register = (scope: ParentNode) => {
      scope.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => {
        if (el.dataset.revealBound) return;
        el.dataset.revealBound = "1";
        if (inViewport(el)) el.classList.add("is-in");
        else { pending.add(el); io.observe(el); }
      });
    };

    register(document);
    // Mark before enabling hidden states, so on-screen content never blinks.
    root.classList.add("motion-ready");

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) m.addedNodes.forEach((n) => n instanceof Element && register(n.parentNode ?? n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Failsafe: never leave content hidden (e.g. print, odd viewports).
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll(`${SELECTOR}:not(.is-in)`).forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-in");
      });
    }, 2500);
    const onPrint = () => document.querySelectorAll(SELECTOR).forEach((el) => el.classList.add("is-in"));
    window.addEventListener("beforeprint", onPrint);

    return () => {
      // Hand still-mounted elements to the next run (it re-registers them in
      // the same tick); with no next run they would simply stay revealed.
      pending.forEach((el) => {
        if (el instanceof HTMLElement && el.isConnected) delete el.dataset.revealBound;
        else el.classList.add("is-in");
      });
      io.disconnect();
      mo.disconnect();
      window.clearTimeout(failsafe);
      window.removeEventListener("beforeprint", onPrint);
    };
  }, [pathname]);

  return null;
}
