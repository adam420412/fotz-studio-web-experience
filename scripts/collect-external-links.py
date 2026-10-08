#!/usr/bin/env python3
"""Extract public outbound anchors from the built site with source-page evidence."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urldefrag, urlsplit
import json

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
OUT = ROOT / "reports/links"
INTERNAL = {"www.fotz-studio.pl", "fotz-studio.pl"}


class Anchors(HTMLParser):
    def __init__(self):
        super().__init__()
        self.urls = set()

    def handle_starttag(self, tag, attrs):
        href = dict(attrs).get("href", "")
        if tag != "a":
            return
        url = urldefrag(href)[0]
        parsed = urlsplit(url)
        if parsed.scheme in {"http", "https"} and parsed.hostname not in INTERNAL:
            self.urls.add(url)


def main():
    files = sorted(DIST.rglob("*.html"))
    if not files:
        raise SystemExit("No built HTML found. Run npm run build first.")
    sources = {}
    for file in files:
        parser = Anchors()
        parser.feed(file.read_text())
        for url in sorted(parser.urls):
            sources.setdefault(url, []).append(str(file.relative_to(DIST)))
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / "external.txt").write_text("\n".join(sorted(sources)) + "\n")
    (OUT / "sources.json").write_text(json.dumps(sources, ensure_ascii=False, indent=2) + "\n")
    print(json.dumps({"html_pages": len(files), "external_urls": len(sources)}))


if __name__ == "__main__":
    main()
