// Shared by the edge response and the static /404.html file. A missing URL
// must remain a useful error page without fetching or starting the SPA.
export const notFoundHtml = `<!doctype html>
<html lang="pl"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>404 — Strona nie istnieje | FOTZ Studio</title>
<meta name="description" content="Nie znaleźliśmy tej strony. Sprawdź adres lub przejdź do strony głównej FOTZ Studio.">
<style>
  :root{color-scheme:dark;font-family:system-ui,sans-serif;background:#141414;color:#fafafa}
  body{margin:0;min-height:100svh;display:grid;place-items:center}
  main{box-sizing:border-box;width:min(100%,48rem);padding:clamp(1.5rem,6vw,4rem)}
  .brand{font-weight:700;letter-spacing:.12em;color:#facc15}
  .code{font-size:clamp(4rem,16vw,8rem);font-weight:800;line-height:1;margin:2rem 0 1rem;color:#facc15}
  h1{font-size:clamp(2rem,6vw,3.5rem);line-height:1.12;text-wrap:balance}
  p{line-height:1.7;color:#d4d4d4}
  nav{display:flex;flex-wrap:wrap;gap:1rem;margin-top:2rem}
  a{display:inline-block;color:#facc15;padding:.75rem 1rem;border:1px solid #737373;border-radius:.5rem;text-underline-offset:.2em}
  a:focus-visible{outline:3px solid #facc15;outline-offset:4px}
</style></head><body><main>
<p class="brand">FOTZ STUDIO</p><p class="code" aria-hidden="true">404</p>
<h1>Strona nie istnieje</h1>
<p>Nie znaleźliśmy tej strony. Sprawdź adres lub wróć na stronę główną. Jeśli szukasz pomocy przy projekcie, skontaktuj się z nami.</p>
<nav aria-label="Dalsza nawigacja"><a href="/">Strona główna</a><a href="/kontakt">Kontakt</a></nav>
</main></body></html>`;
