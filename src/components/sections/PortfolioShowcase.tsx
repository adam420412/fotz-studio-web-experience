import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { portfolioPreviews } from "@/data/portfolio-previews";
import { SplitText } from "@/components/motion/SplitText";
import { useFlip } from "@/components/motion/useFlip";
import { PointerFollower, usePointerTilt } from "@/components/motion/pointer";
import "./showcase.css";

type Tag = "Strony www" | "Kampanie" | "Wideo" | "E-commerce" | "3D";

/** Showcase order, tags and optional hover loops. Copy comes from data/portfolio. */
const SHOWCASE: { id: string; tags: Tag[]; preview?: string; position?: string }[] = [
  { id: "enea-stadion", tags: ["Strony www", "Wideo"], preview: "/videos/previews/enea-stadion.mp4" },
  { id: "wsb-merito", tags: ["Wideo", "Kampanie"], preview: "/videos/previews/wsb-merito.mp4" },
  { id: "klagem", tags: ["Strony www", "3D"] },
  { id: "dawid-edu", tags: ["Strony www", "Kampanie"] },
  { id: "fps-cegielski", tags: ["Strony www"], preview: "/videos/previews/fps-cegielski.mp4" },
  { id: "rppg", tags: ["Strony www", "3D"] },
  { id: "verthe", tags: ["E-commerce"] },
  { id: "gierki", tags: ["Strony www"] },
  { id: "cute-dumpling", tags: ["E-commerce"] },
  { id: "fabryka-virali", tags: ["Strony www"] },
];

const FILTERS: ("Wszystkie" | Tag)[] = ["Wszystkie", "Strony www", "Kampanie", "Wideo", "E-commerce", "3D"];

const items = SHOWCASE.flatMap((entry) => {
  const project = projects.find((p) => p.id === entry.id);
  return project ? [{ ...entry, project }] : [];
});

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

export function PortfolioShowcase() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("Wszystkie");
  const visible = useMemo(() => items.filter((i) => filter === "Wszystkie" || i.tags.includes(filter)), [filter]);
  const gridRef = useRef<HTMLDivElement>(null);
  const flip = useFlip(gridRef);

  // Sliding highlight behind the active filter.
  const tabsRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState<{ x: number; w: number } | null>(null);
  const measure = useCallback(() => {
    const active = tabsRef.current?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (active) setIndicator({ x: active.offsetLeft, w: active.offsetWidth });
  }, []);
  useIsoLayoutEffect(measure, [filter, measure]);
  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const choose = (next: (typeof FILTERS)[number]) => {
    if (next === filter) return;
    flip.capture();
    setFilter(next);
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--dv-ink)" }} aria-labelledby="showcase-heading">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-14 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div data-reveal><span className="dv-eyebrow mb-6 inline-block">Wybrane projekty</span></div>
            <SplitText
              id="showcase-heading"
              className="font-geist"
              style={{ fontSize: "clamp(40px, 5vw, 88px)", letterSpacing: "-0.045em", lineHeight: 0.98, fontWeight: 400 }}
              lines={["Sprawdź nasze", { text: "realizacje", className: "dv-text-grad italic" }]}
            />
          </div>
          <div data-reveal className="self-start md:self-auto">
            <Link to="/realizacje" className="dv-btn dv-btn-secondary group">
              Wszystkie realizacje
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="showcase-tabs-wrap -mx-6 px-6 md:mx-0 md:px-0 mb-8 md:mb-12 overflow-x-auto" data-reveal>
          <div ref={tabsRef} role="group" aria-label="Filtruj realizacje" className={indicator ? "showcase-tabs has-indicator relative inline-flex gap-1 rounded-full p-1" : "showcase-tabs relative inline-flex gap-1 rounded-full p-1"}>
            {indicator && <span aria-hidden="true" className="showcase-tab-indicator" style={{ transform: `translateX(${indicator.x}px)`, width: indicator.w }} />}
            {FILTERS.map((f) => {
              const count = f === "Wszystkie" ? items.length : items.filter((i) => i.tags.includes(f)).length;
              return (
                <button key={f} type="button" aria-pressed={filter === f} aria-controls="showcase-grid" onClick={() => choose(f)} className="showcase-tab">
                  {f}<sup className="ml-1 text-[10px] opacity-70">{count}</sup>
                </button>
              );
            })}
          </div>
        </div>

        <PointerFollower scopeRef={gridRef}>
          <div id="showcase-grid" ref={gridRef} className="showcase-grid">
            {visible.map((item, index) => (
              <ShowcaseCard key={item.id} item={item} index={index} large={index % 4 === 0 || index % 4 === 3} />
            ))}
          </div>
        </PointerFollower>
        <p role="status" className="sr-only">Wyświetlono {visible.length} z {items.length} realizacji</p>
      </div>
    </section>
  );
}

function ShowcaseCard({ item, index, large }: { item: (typeof items)[number]; index: number; large: boolean }) {
  const { project, tags, preview } = item;
  const ref = useRef<HTMLAnchorElement>(null);
  const tilt = usePointerTilt(ref);
  const [hovered, setHovered] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const img = portfolioPreviews[project.image];
  const canPreview = useRef(false);
  useEffect(() => {
    canPreview.current = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
  }, []);

  return (
    <article data-flip-key={item.id} data-reveal="card" className={large ? "showcase-cell showcase-cell--lg" : "showcase-cell"} style={{ "--stagger": index % 2 } as React.CSSProperties}>
      <Link
        ref={ref}
        to={`/realizacje/${project.id}`}
        className="showcase-card group"
        data-cursor-label={preview ? "Zobacz film" : "Zobacz projekt"}
        onPointerEnter={() => canPreview.current && setHovered(true)}
        onPointerLeave={() => { setHovered(false); setVideoReady(false); tilt.reset(); }}
        onPointerMove={tilt.onMove}
      >
        <div className="showcase-media">
          <img
            src={img?.src ?? project.image}
            srcSet={img?.srcSet}
            sizes={large ? "(min-width: 1440px) 780px, (min-width: 768px) 56vw, calc(100vw - 48px)" : "(min-width: 1440px) 560px, (min-width: 768px) 40vw, calc(100vw - 48px)"}
            alt=""
            width="960"
            height="720"
            loading="lazy"
            decoding="async"
            className="showcase-img"
          />
          {preview && hovered && (
            <video
              className={videoReady ? "showcase-video is-ready" : "showcase-video"}
              src={preview}
              muted
              loop
              autoPlay
              playsInline
              preload="auto"
              aria-hidden="true"
              onPlaying={() => setVideoReady(true)}
            />
          )}
          <span aria-hidden="true" className="showcase-shade" />
          <span aria-hidden="true" className="showcase-index dv-mono">{String(index + 1).padStart(2, "0")}</span>
          <ul className="showcase-tags" aria-label="Zakres">
            {tags.map((t, i) => <li key={t} style={{ "--t": i } as React.CSSProperties}>{t}</li>)}
          </ul>
        </div>
        <div className="showcase-caption">
          <div className="min-w-0">
            <h3 className="showcase-title font-geist">{project.title}</h3>
            <p className="showcase-desc">{project.description}</p>
          </div>
          <span aria-hidden="true" className="showcase-arrow"><ArrowUpRight className="w-5 h-5" /></span>
        </div>
      </Link>
    </article>
  );
}
