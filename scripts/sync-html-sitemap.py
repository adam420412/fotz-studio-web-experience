#!/usr/bin/env python3
"""Build the human-readable sitemap from the validated XML maps and page titles."""
from pathlib import Path
from urllib.parse import urlparse, unquote
from html import escape
import json, re, xml.etree.ElementTree as ET
root=Path(__file__).resolve().parents[1]
report=json.loads((root/'docs/seo/qa-2026-10-01/built-site.json').read_text())
pages={p['path']:p for p in report['pages']}
target=root/'public/mapa-strony-v3.html'
head=target.read_text().split('<body>',1)[0]
head=head.replace('columns:2;column-gap','columns:1;column-gap')
if '@media(min-width:640px)' not in head:
 head=head.replace('@media(min-width:900px)', '@media(min-width:640px){ul{columns:2}}\n    @media(min-width:900px)')
# Avoid stacking the tablet rule on reruns.
head=re.sub(r'(    @media\(min-width:640px\)\{ul\{columns:2\}\}\n){2,}',r'\1',head)
head=head.replace('color:rgba(255,255,255,0.35)','color:rgba(255,255,255,0.65)').replace('li{break-inside:avoid;', 'li{overflow-wrap:anywhere;break-inside:avoid;')
head=head.replace('overflow-wrap:anywhere;overflow-wrap:anywhere;', 'overflow-wrap:anywhere;')
groups=[('main','Strony główne i narzędzia'),('services','Usługi'),('cities','Lokalizacje'),('blog','Artykuły i poradniki'),('casestudies','Realizacje'),('industries','Branże')]
sections=[];seen=set()
for group,label in groups:
 rows=[]
 for loc in ET.parse(root/f'public/sitemap-{group}.xml').iter('{http://www.sitemaps.org/schemas/sitemap/0.9}loc'):
  url=loc.text; route=urlparse(url).path or '/'
  if route in seen:continue
  seen.add(route);page=pages.get(unquote(route));title=page['title'][0] if page else 'Mapa strony'
  title=re.sub(r'\s*(?:\||—|-)\s*(?:Fotz Studio|fotz\.pl)\s*$','',title,flags=re.I)
  if route=='/':title='Strona główna'
  rows.append(f'      <li><a href="{escape(route,quote=True)}">{escape(title)}</a><span class="path">{escape(unquote(route))}</span></li>')
 sections.append(f'  <section id="{group}"><h2>{label} <span class="count">({len(rows)})</span></h2>\n    <ul>\n'+ '\n'.join(rows)+'\n    </ul>\n  </section>')
nav=' · '.join(f'<a href="#{g}">{label}</a>' for g,label in groups)
body=f'''<body>
  <div class="wrap">
    <nav class="breadcrumb" aria-label="Ścieżka nawigacji"><a href="/">Strona główna</a> &rsaquo; Mapa strony</nav>
    <header>
      <h1>Mapa strony Fotz Studio</h1>
      <p class="lead">{len(seen)} adresów kanonicznych: usługi marketingowe, lokalizacje, realizacje, artykuły i narzędzia.</p>
      <nav aria-label="Sekcje mapy strony">{nav}</nav>
    </header>
'''+ '\n'.join(sections)+'''
    <footer><p>&copy; Fotz Studio — agencja marketingowa Poznań. <a href="/">Strona główna</a> · <a href="/kontakt">Kontakt</a></p></footer>
  </div>
</body>
</html>
'''
target.write_text(head+body)
print('HTML sitemap:',len(seen),'canonical links')
