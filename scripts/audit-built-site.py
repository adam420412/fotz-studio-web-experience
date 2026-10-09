#!/usr/bin/env python3
"""Audit every generated page and sitemap; --live adds read-only HTTP checks."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse, urljoin, quote, unquote
from collections import Counter, defaultdict
import json, re, sys, os, urllib.request, concurrent.futures
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(os.environ.get('FOTZ_QA_DIR', ROOT / 'docs/seo/qa-2026-10-01'))
OUT.mkdir(parents=True, exist_ok=True)
SITE_ORIGIN = 'https://www.fotz-studio.pl'
DIST = Path(os.environ.get('FOTZ_BUILD_DIR', ROOT / 'dist'))
CMS_PATHS = {'/blog/'+article['slug'] for article in json.loads((ROOT/'src/data/blog-content.json').read_text())['articles']}
class Head(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True); self.titles=[]; self.current=None; self.meta=defaultdict(list); self.canonical=[]; self.links=[]; self.h1_count=0; self.hydrate_path=None
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='title': self.current=''
        if tag=='meta': self.meta[a.get('name',a.get('property',''))].append(a.get('content',''))
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href',''))
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='h1': self.h1_count+=1
        if tag=='div' and a.get('id')=='root': self.hydrate_path=a.get('data-hydrate-path')
    def handle_data(self,data):
        if self.current is not None: self.current+=data
    def handle_endtag(self,tag):
        if tag=='title' and self.current is not None: self.titles.append(self.current); self.current=None

def inspect(html, check_local_assets=True):
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
    if h.hydrate_path is not None:
        if not h.canonical or h.hydrate_path != (urlparse(h.canonical[0]).path.rstrip('/') or '/'):
            issues.append('hydration path differs from canonical')
        if any(re.search(r'(?:^|;)\s*opacity:\s*0(?:;|$)', style) for style in re.findall(r'style="([^"]*)"', html)):
            issues.append('hydrated document hides static content with inline opacity')
    # The bootstrap contains the raw public CMS snapshot; the shared article
    # renderer normalizes its URLs. Audit the rendered links/schema separately.
    bootstrap_pattern=r'<script id="fotz-blog-data" type="application/json">([\s\S]*?)</script>'
    bootstraps=re.findall(bootstrap_pattern, html)
    if not noindex and h.canonical and urlparse(h.canonical[0]).path in CMS_PATHS and not bootstraps:
        issues.append('missing CMS bootstrap')
    if bootstraps:
        try:
            payload=json.loads(bootstraps[0]); article=payload['article']
            if len(bootstraps)!=1 or payload['version']!=1 or payload['path']!=h.hydrate_path or payload['path']!='/blog/'+article['slug']:
                issues.append('invalid CMS bootstrap route/version')
            if not isinstance(article['title'],str) or not isinstance(article['content_html'],str):
                issues.append('invalid CMS bootstrap article')
        except (ValueError,KeyError,TypeError): issues.append('invalid CMS bootstrap JSON')
    # Website URLs in rendered markup and schema must not use the old domain.
    rendered_html=re.sub(bootstrap_pattern, '', html)
    if re.search(r'https?://(?:www\.)?fotz\.pl(?=[/\s\"\'<>?#]|$)', rendered_html):issues.append('old website URL in generated HTML')
    if not noindex:
        body = re.search(r'<!-- fotz-body:start -->([\s\S]*?)<!-- fotz-body:end -->', html)
        if not body: issues.append('missing prerendered page body')
        elif h.h1_count!=1: issues.append(f'expected one H1, got {h.h1_count}')
    def check_schema(value):
        if isinstance(value, list):
            for item in value: check_schema(item)
        elif isinstance(value, dict):
            if value.get('@type')=='BreadcrumbList':
                items=value.get('itemListElement', [])
                for index, item in enumerate(items):
                    if not item.get('name') or item.get('position')!=index+1: issues.append('invalid breadcrumb name/position')
                    target=item.get('item')
                    if isinstance(target, dict): target=target.get('@id')
                    if target is None and index==len(items)-1: continue
                    if not isinstance(target, str) or urlparse(target).scheme not in ('http','https') or not urlparse(target).netloc:
                        issues.append('breadcrumb item must be an absolute HTTP URL')
            for item in value.values(): check_schema(item)
    for raw in re.findall(r'<script\b[^>]*type="application/ld\+json"[^>]*>([\s\S]*?)</script>', html):
        try: check_schema(json.loads(raw))
        except ValueError: issues.append('invalid JSON-LD')
    if check_local_assets:
        for asset in re.findall(r'<(?:img|script)\b[^>]*\bsrc="(/[^"?#]+)', html):
            if not (DIST / unquote(asset.lstrip('/'))).is_file(): issues.append('missing local asset: '+asset)
    return {'title':h.titles,'description':h.meta['description'],'canonical':h.canonical,'noindex':noindex,'issues':issues,'links':h.links}

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
# Inspect rendered links too: source scanning misses generated city URLs and CMS HTML.
known_paths=set(json.loads((ROOT/'known-routes.json').read_text())['staticRoutes'])
link_issues=[]
checked_links=0
for page in pages:
    if page['path'] in redirects:
        page['issues'].append('hosting redirect also generates an independently served SPA page')
    canonical=page['canonical']
    if canonical and unquote(urlparse(canonical[0]).path).rstrip('/')!=page['path'].rstrip('/'):
        page['issues'].append('page served at a noncanonical path without a redirect')
    for href in set(page.pop('links')):
        url=urlparse(urljoin(SITE_ORIGIN+page['path'],href))
        if url.netloc not in ('www.fotz-studio.pl','fotz-studio.pl'): continue
        target=unquote(url.path).rstrip('/') or '/'
        checked_links+=1
        if target in known_paths or target in redirects or target in static_pages: continue
        if (DIST/target.lstrip('/')).is_file() or (DIST/target.lstrip('/')/'index.html').is_file(): continue
        if target.startswith('/akademia/'): continue
        link_issues.append({'page':page['path'],'href':href,'target':target})
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
report={'pages':pages,'sitemap_issues':sitemap_issues,'link_issues':link_issues,'summary':{'generated_pages':len(pages),'pages_with_head_errors':sum(bool(p['issues']) for p in pages),'sitemap_urls':len(sitemaps),'unique_sitemap_urls':len(counts),'sitemap_issues':len(sitemap_issues),'rendered_internal_links':checked_links,'broken_rendered_links':len(link_issues)}}
if '--live' in sys.argv:
    def check(page):
        u='https://www.fotz-studio.pl'+quote(page['path'], safe='/')
        try:
            with urllib.request.urlopen(urllib.request.Request(u,headers={'User-Agent':'FOTZ-Site-Audit/1.0'}),timeout=20) as r:
                result=inspect(r.read().decode('utf8','replace'),check_local_assets=False)
                result.pop('links')
                if result['canonical']!=page['canonical']: result['issues'].append('live canonical differs from reviewed build')
                if result['noindex']!=page['noindex']: result['issues'].append('live indexing directive differs from reviewed build')
                return {'path':page['path'],'status':r.status,'final_url':r.url,**result}
        except Exception as e:return {'path':page['path'],'error':str(e)}
    with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
        report['live']=list(pool.map(check,pages))
    report['summary']['live_checked']=len(report['live'])
    report['summary']['live_errors']=sum(bool(p.get('error') or p.get('issues')) for p in report['live'])
    target=OUT/'live-site.json'
else:target=OUT/'built-site.json'
target.write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report['summary'],ensure_ascii=False));print('Report:',target)
for row in [p for p in pages if p['issues']][:10]:print(row['path'],row['issues'])
for row in link_issues[:10]: print('Broken rendered link:',row)
if not pages or report['summary']['pages_with_head_errors'] or sitemap_issues or link_issues or report['summary'].get('live_errors'):sys.exit(1)
