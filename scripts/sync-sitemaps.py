#!/usr/bin/env python3
"""Reconcile sitemap entries with built canonicals; preserve existing lastmod values."""
from pathlib import Path
from urllib.parse import urlparse, unquote
from html import escape
import json, re
import xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]
report=json.loads((root/'docs/seo/qa-2026-10-01/built-site.json').read_text())
redirects={x['source']:x['destination'] for x in json.loads((root/'vercel.json').read_text())['redirects'] if ':' not in x['source'] and 'has' not in x}
pages={p['path']:p for p in report['pages']}
groups=['main','services','cities','blog','casestudies','industries']
seen=set();maps={g:[] for g in groups}
changes=[]
for group in groups:
 file=root/f'public/sitemap-{group}.xml'
 ET.parse(file)  # Do not preserve malformed source XML.
 for entry in re.findall(r'<url>[\s\S]*?</url>',file.read_text()):
  url=re.search(r'<loc>\s*(.*?)\s*</loc>',entry).group(1);old=url
  page=pages.get(unquote(urlparse(url).path) or '/')
  if page and page['noindex']: changes.append(['remove-noindex',url]);continue
  if page and page['canonical']:url=page['canonical'][0]
  path=unquote(urlparse(url).path) or '/'
  if path in redirects: url='https://fotz.pl'+redirects[path]
  if url in seen:changes.append(['deduplicate',old]);continue
  seen.add(url)
  if url!=old: entry=entry.replace(old,url);changes.append(['canonicalize',old,url])
  maps[group].append(entry)
for path,page in pages.items():
 if page['noindex'] or path in redirects or not page['canonical']:continue
 url=page['canonical'][0]
 if not url.startswith('https://') or url in seen or (unquote(urlparse(url).path) or '/')!=path:continue
 group='blog' if path.startswith('/blog/') else 'casestudies' if path.startswith('/realizacje/') else 'industries' if path.startswith('/dla-kogo/') else 'services'
 maps[group].append('<url><loc>'+escape(url)+'</loc></url>');seen.add(url);changes.append(['add-canonical',url])
for group,entries in maps.items():
 (root/f'public/sitemap-{group}.xml').write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+'\n'.join('  '+entry for entry in entries)+'\n</urlset>\n')
# The index timestamp reflects the sitemap change, not a fabricated content edit.
index=root/'public/sitemap-index.xml';index.write_text(re.sub(r'<lastmod>[^<]+</lastmod>','<lastmod>2026-10-01</lastmod>',index.read_text()))
(root/'docs/seo/qa-2026-10-01/sitemap-changes.json').write_text(json.dumps(changes,ensure_ascii=False,indent=2))
print('Unique URLs:',len(seen),'Changes:',len(changes))
