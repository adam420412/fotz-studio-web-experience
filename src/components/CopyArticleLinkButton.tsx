import { useState } from "react";
import { Check, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CopyArticleLinkButton() {
  const [status, setStatus] = useState("");
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setStatus("Link skopiowany");
    } catch {
      setStatus("Skopiuj adres artykułu z paska przeglądarki.");
    }
  };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button type="button" variant="outline" size="icon" onClick={copy} aria-label="Skopiuj link do artykułu">
        {status === "Link skopiowany" ? <Check className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
      </Button>
      <span role="status" className="text-sm text-muted-foreground">{status}</span>
    </div>
  );
}
