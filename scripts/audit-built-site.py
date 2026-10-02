#!/usr/bin/env python3
"""Audit every generated page and sitemap; --live adds read-only HTTP checks."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, quote, unquote
from collections import Counter, defaultdict
import json, re, sys, os, urllib.request, concurrent.futures
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'docs/seo/qa-2026-10-01'
OUT.mkdir(parents=True, exist_ok=True)
SITE_ORIGIN = 'https://www.fotz-studio.pl'
DIST = Path(os.environ.get('FOTZ_BUILD_DIR', ROOT / 'dist'))
class Head(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True); self.titles=[]; self.current=None; self.meta=defaultdict(list); self.canonical=[]
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='title': self.current=''
        if tag=='meta': self.meta[a.get('name',a.get('property',''))].append(a.get('content',''))
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href',''))
    def handle_data(self,data):
        if self.current is not None: self.current+=data
    def handle_endtag(self,tag):
        if tag=='title' and self.current is not None: self.titles.append(self.current); self.current=None

def inspect(html):
    h=Head();h.feed(html);issues=[]
    for name,values in [('title',h.titles),('description',h.meta['description']),('og:title',h.meta['og:title']),('og:description',h.meta['og:description']),('robots',h.meta['robots'])]:
        if len(values)!=1 or not values[0].strip():issues.append(f'{name}: expected one nonempty tag, got {len(values)}')
    noindex=any('noindex' in r for r in h.meta['robots'])
    if len(h.canonical)!=(0 if noindex else 1):issues.append('canonical count')
    if h.canonical and not h.canonical[0].startswith('https://'):issues.append('relative canonical')
    for label, urls in [('canonical', h.canonical), ('og:url', h.meta['og:url'])]:
        for url in urls:
            parsed=urlparse(url)
            if f'{parsed.scheme}://{parsed.netloc}' != SITE_ORIGIN:issues.append(f'{label}: wrong production origin')
    if h.canonical and h.meta['og:url'] != h.canonical:issues.append('og:url differs from canonical')
    # Website URLs in schema and image tags must not reintroduce the old domain.
    if re.search(r'https?://(?:www\.)?fotz\.pl(?=[/\s\"\'<>?#]|$)', html):issues.append('old website URL in generated HTML')
    return {'title':h.titles,'description':h.meta['description'],'canonical':h.canonical,'noindex':noindex,'issues':issues}

pages=[]
for file in sorted(DIST.rglob('index.html')):
    relative=file.parent.relative_to(DIST).as_posix(); route='/' if relative=='.' else '/'+relative
    pages.append({'path':route,**inspect(file.read_text())})
sitemaps=[]
for file in sorted((ROOT/'public').glob('sitemap-*.xml')):
    document=ET.parse(file)  # Reject malformed XML before reporting success.
    if file.name=='sitemap-index.xml':continue
    for entry in document.getroot():
        url=entry.findtext('{http://www.sitemaps.org/schemas/sitemap/0.9}loc')
        if not url:raise ValueError(f'{file}: URL entry has no loc')
        sitemaps.append({'file':file.name,'url':url})
counts=Counter(r['url'] for r in sitemaps)
by_path={p['path']:p for p in pages}
config=json.loads((ROOT/'vercel.json').read_text())
redirects={r['source'] for r in config['redirects'] if ':' not in r['source'] and 'has' not in r}
static_pages={'/mapa-strony'}
sitemap_issues=[]
for item in sitemaps:
    u=item['url'];p=by_path.get(unquote(urlparse(u).path) or '/')
    if f'{urlparse(u).scheme}://{urlparse(u).netloc}' != SITE_ORIGIN:sitemap_issues.append({**item,'issue':'wrong production origin'})
    if counts[u]>1:sitemap_issues.append({**item,'issue':'duplicate across sitemaps'})
    route=unquote(urlparse(u).path) or '/'
    if not p and route not in static_pages:sitemap_issues.append({**item,'issue':'no generated page'})
    if route in redirects:sitemap_issues.append({**item,'issue':'redirect in sitemap'})
    if p and (p['noindex'] or p['canonical']!=[u.rstrip('/')]):sitemap_issues.append({**item,'issue':'not canonical/indexable','canonical':p['canonical']})
for file in sorted((ROOT/'public').glob('sitemap*.xml')):
    for loc in ET.parse(file).iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
        url=loc.text or ''
        if f'{urlparse(url).scheme}://{urlparse(url).netloc}' != SITE_ORIGIN:sitemap_issues.append({'file':file.name,'url':url,'issue':'wrong production origin'})
if f'Sitemap: {SITE_ORIGIN}/sitemap-index.xml' not in (ROOT/'public/robots.txt').read_text():sitemap_issues.append({'issue':'robots.txt sitemap origin'})
report={'pages':pages,'sitemap_issues':sitemap_issues,'summary':{'generated_pages':len(pages),'pages_with_head_errors':sum(bool(p['issues']) for p in pages),'sitemap_urls':len(sitemaps),'unique_sitemap_urls':len(counts),'sitemap_issues':len(sitemap_issues)}}
if '--live' in sys.argv:
    def check(page):
        u='https://www.fotz-studio.pl'+quote(page['path'], safe='/')
        try:
            with urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'FOTZ-Site-Audit/1.0'}),timeout=20) as r:
                return {'path':page['path'],'status':r.status,'final_url':r.url,**inspect(r.read().decode('utf8','replace'))}
        except Exception as e:return {'path':page['path'],'error':str(e)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        report['live']=list(pool.map(check,pages))
    target=OUT/'live-before.json'
else:target=OUT/'built-site.json'
target.write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report['summary'],ensure_ascii=False));print('Report:',target)
for row in [p for p in pages if p['issues']][:10]:print(row['path'],row['issues'])
if not pages or report['summary']['pages_with_head_errors'] or sitemap_issues:sys.exit(1)
