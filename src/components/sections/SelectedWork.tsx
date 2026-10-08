import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { workCollections, workImages } from "@/data/selected-work.mjs";
import imageVariants from "@/data/selected-work-images.json";
import { getWorkCollection } from "@/lib/selected-work.mjs";

export function SelectedWork() {
  const { pathname } = useLocation();
  const collectionId = getWorkCollection(pathname);
  if (!collectionId) return null;
  const collection = workCollections[collectionId];

  return <section id="kadry-z-realizacji" data-work-collection={collectionId} aria-labelledby="selected-work-heading" className="border-y border-border bg-muted/20 py-14 md:py-20 scroll-mt-24">
    <div className="container-wide px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
        <div className="max-w-2xl">
          <p className="dv-eyebrow mb-4">FOTZ Studio · kadry z realizacji</p>
          <h2 id="selected-work-heading" className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight tracking-tight mb-4">{collection.title}</h2>
          <p className="text-muted-foreground leading-relaxed">{collection.description}</p>
        </div>
        <Link to="/realizacje" className="dv-btn dv-btn-secondary self-start shrink-0">Całe portfolio <ArrowUpRight className="w-4 h-4" aria-hidden="true" /></Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collection.images.map((id: string) => {
          const item = workImages[id];
          const variants = imageVariants[id as keyof typeof imageVariants];
          const fallback = variants[Math.min(1, variants.length - 1)];
          return <Link key={id} to={item.href} className="block min-w-0 group rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                <img src={fallback.src} srcSet={variants.map(image => `${image.src} ${image.width}w`).join(', ')} sizes="(min-width: 1536px) 440px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" width={fallback.width} height={fallback.height} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]" />
              </div>
              <figcaption className="pt-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{item.label}</p>
                <div className="flex items-start justify-between gap-4"><h3 className="text-xl font-heading">{item.title}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-primary mt-0.5" aria-hidden="true" /></div>
              </figcaption>
            </figure>
          </Link>;
        })}
      </div>
    </div>
  </section>;
}
