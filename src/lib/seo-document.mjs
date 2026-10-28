// Shared head generation for the reviewed static build and live CMS articles.
const escapeHtml = value => String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
export function injectMeta(html, metadata) {
  const meta = Object.fromEntries(Object.entries(metadata).map(([key, value]) => [key, typeof value === 'string' ? escapeHtml(value) : value]));
  // Step 1: Remove ALL existing tags that will be replaced with page-specific ones.
  // Run replacements TWICE to handle the case where the template itself was
  // already prerendered (e.g. dist/index.html modified by a previous run).
  // This ensures idempotency no matter how many times the script is re-run.
  for (let pass = 0; pass < 2; pass++) {
    html = html.replace(/<title\b[^>]*>[^<]*<\/title>/g, '');
    html = html.replace(/<link\b(?=[^>]*\brel="canonical")[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="description"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="keywords"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="robots"[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bproperty="og:[^>]*\/?>/gi, '');
    html = html.replace(/<meta\b[^>]*\bname="twitter:[^>]*\/?>/gi, '');
    // Also strip the prerendered comment block to avoid accumulation
    html = html.replace(/\s*<!-- Prerendered SEO meta -->\s*/g, '\n    ');
  }

  // Step 2: Build the full set of page-specific meta tags
  // Add data-rh="true" so react-helmet-async replaces these tags instead of duplicating
  const metaTags = [
    `<title data-rh="true">${meta.title}</title>`,
    `<meta data-rh="true" name="description" content="${meta.description}" />`,
    meta.keywords ? `<meta data-rh="true" name="keywords" content="${meta.keywords}" />` : '',
    meta.noIndex ? '' : `<link data-rh="true" rel="canonical" href="${meta.canonical}" />`,
    `<meta data-rh="true" name="robots" content="${meta.noIndex ? 'noindex, nofollow' : 'index, follow'}" />`,
    `<meta data-rh="true" property="og:title" content="${meta.ogTitle || meta.title}" />`,
    `<meta data-rh="true" property="og:description" content="${meta.ogDescription || meta.description}" />`,
    `<meta data-rh="true" property="og:url" content="${meta.canonical}" />`,
    `<meta data-rh="true" property="og:image" content="${meta.ogImage}" />`,
    `<meta data-rh="true" property="og:type" content="${meta.ogType || 'website'}" />`,
    `<meta data-rh="true" property="og:locale" content="pl_PL" />`,
    `<meta data-rh="true" property="og:site_name" content="Fotz Studio" />`,
    `<meta data-rh="true" name="twitter:card" content="summary_large_image" />`,
    `<meta data-rh="true" name="twitter:title" content="${meta.ogTitle || meta.title}" />`,
    `<meta data-rh="true" name="twitter:description" content="${meta.ogDescription || meta.description}" />`,
    `<meta data-rh="true" name="twitter:image" content="${meta.ogImage}" />`,
  ].filter(Boolean).join('\n    ');

  // Step 3: Insert after <meta name="author" ...> line
  html = html.replace(
    '<meta name="author" content="Fotz Studio" />',
    `<meta name="author" content="Fotz Studio" />\n    <!-- Prerendered SEO meta -->\n    ${metaTags}`
  );

  // Show a useful fallback only when JavaScript is disabled; do not add
  // hidden duplicate headings and links to the rendered page.
  html = html.replace(/<section\s+id="seo-prerender"[^>]*>[\s\S]*?<\/section>\s*/g, '');
  html = html.replace(/<noscript id="seo-fallback">[\s\S]*?<\/noscript>\s*/g, '');
  const fallback = `<noscript id="seo-fallback"><main style="max-width:70ch;margin:4rem auto;padding:1.5rem"><h1>${meta.title}</h1><p>${meta.description}</p><p>Pełna witryna wymaga JavaScript. Skontaktuj się z nami: <a href="tel:+48790814814">+48 790 814 814</a> · <a href="mailto:adam@fotz.pl">adam@fotz.pl</a>.</p><nav><a href="/">Strona główna</a> · <a href="/uslugi">Usługi</a> · <a href="/kontakt">Kontakt</a></nav></main></noscript>`;
  html = html.replace('<div id="root">', fallback + '<div id="root">');

  return html;
}
