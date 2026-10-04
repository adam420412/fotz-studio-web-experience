import { useState } from "react";
import { Play } from "lucide-react";

interface PortfolioVideoProps {
  src: string;
  poster: string;
  title: string;
  category: string;
}

export function PortfolioVideo({ src, poster, title, category }: PortfolioVideoProps) {
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-video bg-black">
        {failed ? (
          <div role="alert" className="flex h-full flex-col items-center justify-center gap-2 p-3 text-center text-sm text-white">
            <p>Nie udało się odtworzyć filmu.</p>
            <button type="button" className="underline underline-offset-4 p-2" onClick={() => { setFailed(false); setPlaying(false); }}>Wróć do okładki</button>
            <a href={src} className="underline underline-offset-4 p-2">Otwórz plik video</a>
          </div>
        ) : playing ? (
          <video className="h-full w-full object-contain" src={src} poster={poster} autoPlay controls playsInline aria-label={title} onError={() => setFailed(true)} />
        ) : (
          <button type="button" className="relative block h-full w-full group focus-visible:outline focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white" aria-label={`Odtwórz film: ${title}`} onClick={() => setPlaying(true)}>
            <img src={poster} alt="" width="960" height="540" loading="lazy" className="h-full w-full object-cover" />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-black/15">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-black/40 text-white motion-safe:transition-colors group-hover:bg-black/65">
                <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="px-5 py-4"><span className="block text-xs text-muted-foreground mb-1">{category}</span><span className="font-medium">{title}</span></figcaption>
    </figure>
  );
}
