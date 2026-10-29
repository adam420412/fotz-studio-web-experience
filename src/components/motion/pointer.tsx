import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;

/**
 * A round "Zobacz projekt" bubble that trails the pointer while it is over an
 * element with `data-cursor-label` inside `scopeRef`. Purely decorative: the
 * cards stay normal links, and touch / reduced-motion visitors never see it.
 */
export function PointerFollower({ scopeRef, children }: { scopeRef: RefObject<HTMLElement>; children: ReactNode }) {
  const bubble = useRef<HTMLDivElement>(null);
  const [label, setLabelState] = useState<string | null>(null);
  const current = useRef<string | null>(null);
  const setLabel = useCallback((next: string | null) => {
    if (current.current === next) return;
    current.current = next;
    setLabelState(next);
  }, []);

  useEffect(() => {
    const scope = scopeRef.current;
    const el = bubble.current;
    if (!scope || !el || !finePointer()) return;
    let x = 0, y = 0, cx = 0, cy = 0, raf = 0, running = false;

    const tick = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      if (Math.abs(x - cx) + Math.abs(y - cy) > 0.3) raf = requestAnimationFrame(tick);
      else running = false;
    };
    const kick = () => { if (!running) { running = true; raf = requestAnimationFrame(tick); } };

    const onMove = (e: PointerEvent) => {
      const target = (e.target as Element).closest<HTMLElement>("[data-cursor-label]");
      if (!target || !scope.contains(target)) { setLabel(null); return; }
      if (!current.current) { cx = e.clientX; cy = e.clientY; } // appear under the pointer, not fly in
      x = e.clientX; y = e.clientY;
      setLabel(target.dataset.cursorLabel ?? null);
      kick();
    };
    const onLeave = () => setLabel(null);
    scope.addEventListener("pointermove", onMove);
    scope.addEventListener("pointerleave", onLeave);
    window.addEventListener("scroll", onLeave, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      scope.removeEventListener("pointermove", onMove);
      scope.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onLeave);
    };
  }, [scopeRef, setLabel]);

  const shown = useRef("");
  if (label) shown.current = label; // keep the text while the bubble fades out

  return (
    <div className={label ? "pointer-scope has-follower" : "pointer-scope"}>
      {children}
      <div ref={bubble} aria-hidden="true" className={label ? "pointer-follower is-on" : "pointer-follower"}>
        <span>{shown.current}</span>
      </div>
    </div>
  );
}

/** Subtle 3D tilt + inner parallax, written straight to CSS variables. */
export function usePointerTilt(ref: RefObject<HTMLElement>, strength = 5) {
  const enabled = useRef<boolean | null>(null);
  const onMove = useCallback((e: React.PointerEvent) => {
    if (enabled.current === null) enabled.current = finePointer();
    const el = ref.current;
    if (!enabled.current || !el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-py * strength).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(px * strength).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${(px * -14).toFixed(1)}px`);
    el.style.setProperty("--my", `${(py * -14).toFixed(1)}px`);
  }, [ref, strength]);
  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    ["--rx", "--ry", "--mx", "--my"].forEach((p) => el.style.removeProperty(p));
  }, [ref]);
  return { onMove, reset };
}
