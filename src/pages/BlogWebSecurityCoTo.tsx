import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";

const faqItems = [
  {
    question: "OWASP Top 10 2021 — najważniejsze podatności webowe?",
    answer: "OWASP Top 10 2021: A01 Broken Access Control: brak weryfikacji uprawnień. Mitygacja: autoryzacja per request, deny-by-default, rate limit. A02 Cryptographic Failures: słabe szyfrowanie, HTTP zamiast HTTPS, MD5/SHA1. Mitygacja: TLS 1.2+, bcrypt/Argon2 dla haseł, HSTS. A03 Injection: SQL, NoSQL, LDAP, OS command injection. Mitygacja: parameterized queries, ORMs, input sanitization. A04 Insecure Design: brak threat modeling. A05 Security Misconfiguration: domyślne hasła, verbose errors, otwarte CORS. A06 Vulnerable Components: stare biblioteki z CVE. npm audit, Dependabot. A07 Auth Failures: brute force, weak passwords, session fixation. MFA, rate limiting, secure session. A08 SSRF: Server-Side Request Forgery — serwer wysyła requesty do wewnętrznych zasobów. Walidacja URL, blocklist. A09 Logging Failures: brak logów, brak monitoringu naruszeń. A10 SSRF (nowy 2021). SQL Injection: SELECT * FROM users WHERE id = user_input. Atakujący: 1; DROP TABLE users. Bezpieczne: prepared statements. WHERE id = $1 z parametrem. prisma.user.findUnique({where: {id}}) — automatycznie bezpieczne. XSS (Cross-Site Scripting): stored, reflected, DOM-based. React escapes automatycznie. Unikaj dangerouslySetInnerHTML. DOMPurify dla HTML. CSRF (Cross-Site Request Forgery): malicious site wysyła request w imieniu zalogowanego. SameSite cookies (Lax/Strict). CSRF token. Same-origin check.",
  },
  {
    question: "Content Security Policy (CSP) i inne Security Headers?",
    answer: "Security Headers: warstwa obrony przed common attacks. Content-Security-Policy (CSP): kontroluj skąd ładowane są zasoby. default-src 'self' — tylko z własnej domeny. script-src 'self' 'nonce-{random}' cdn.example.com. style-src 'self' 'unsafe-inline'. img-src 'self' data: https:. connect-src 'self' api.example.com. frame-ancestors 'none' — brak iframe. upgrade-insecure-requests — HTTP -> HTTPS. Nonce-based CSP: generuj random nonce per request. script tag ma nonce={nonce}. CSP sprawdza nonce przed wykonaniem. Bez 'unsafe-inline'. Next.js CSP: middleware.ts ustawia nagłówek. generateNonce() + headers(). Strict-Transport-Security (HSTS): max-age=31536000; includeSubDomains; preload. X-Frame-Options: DENY (zastąpiony przez CSP frame-ancestors). X-Content-Type-Options: nosniff. Referrer-Policy: strict-origin-when-cross-origin. Permissions-Policy: camera=(), microphone=(), geolocation=(). Cross-Origin headers: CORS (Access-Control-Allow-Origin). COEP (Cross-Origin-Embedder-Policy: require-corp). COOP (Cross-Origin-Opener-Policy: same-origin). SharedArrayBuffer wymaga COEP + COOP. Helmet.js (Express/Fastify): app.use(helmet()) — ustawia wszystkie headers naraz. Next.js headers(): w next.config.js headers() callback. securityHeaders array. Rate Limiting: express-rate-limit, @fastify/rate-limit, Cloudflare. upstash/ratelimit dla serverless (Redis-backed). sliding window, token bucket, fixed window.",
  },
  {
    question: "Bezpieczna autentykacja — bcrypt, Argon2, secure sessions i MFA?",
    answer: "Hasła: NIGDY plaintext. NIGDY MD5/SHA1 (rainbow tables). bcrypt: adaptive hash, work factor. bcrypt.hash(password, 12) — 2^12 iteracji. Argon2 (winner Password Hashing Competition): Argon2id — recommended. argon2.hash(password, {memoryCost: 65536, timeCost: 3}). Memory-hard — odporny na GPU attacks. Salt: automatyczny w bcrypt/Argon2 — nie dodawaj ręcznie. Session Security: httpOnly cookie — brak dostępu JS. secure flag — tylko HTTPS. sameSite: 'lax' (lub 'strict'). session ID: cryptographically random (crypto.randomUUID()). Session fixation: regeneruj session ID po logowaniu. Logout: usuń session z bazy. Rotacja refresh token. Brute force protection: rate limit per IP i per email. exponential backoff. Account lockout po N próbach. CAPTCHA po podejrzanej aktywności. Multi-Factor Authentication (MFA): TOTP (Time-based OTP): Google Authenticator, Authy. speakeasy lub @otplib/preset-default. QR code setup: otplib.authenticator.keyuri(). Verify: otplib.authenticator.verify({token, secret}). WebAuthn / Passkeys: FIDO2 standard. Biometrika lub hardware key. SimpleWebAuthn library. Phishing-resistant. Backup codes: generuj jednorazowe kody. Hash i przechowuj. Email security: link do resetu hasła — jednorazowy token, wygaśnięcie (15-60min). bcrypt token lub crypto.randomBytes. Sprawdź timing attack (constantTimeEqual).",
  },
  {
    question: "HTTPS, TLS, certyfikaty i CORS konfiguracja?",
    answer: "TLS/HTTPS: szyfrowanie in-transit. TLS 1.2 minimum (TLS 1.3 zalecane). Let's Encrypt: darmowe certyfikaty. certbot auto-renewal. Cloudflare: SSL bez konfiguracji serwera. Certificate Transparency (CT) logs. Mixed Content: HTTPS strona z HTTP resource = blokada. upgrade-insecure-requests CSP. HSTS preload list. CORS (Cross-Origin Resource Sharing): Same-Origin Policy: przeglądarka blokuje cross-origin requesty. CORS headers zezwalają na wyjątki. Access-Control-Allow-Origin: https://myapp.com (nie '*' dla auth endpoints). Access-Control-Allow-Methods: GET, POST, PUT, DELETE. Access-Control-Allow-Headers: Content-Type, Authorization. Access-Control-Allow-Credentials: true (z konkretnym origin, nie '*'). Preflight: OPTIONS request przed POST/PUT z custom headers. Fastify: @fastify/cors plugin. Next.js: middleware.ts lub route handler headers. Unikaj CORS mistakes: '*' + credentials = błąd przeglądarki. wildcard subdomain: https://*.myapp.com — ryzyko. Lepsza praktyka: whitelist dozwolonych origins. HTTPS na dev: mkcert dla lokalnych certyfikatów. vite: server.https z mkcert-generated cert. Next.js: tylko przez proxy (Nginx) lub Vercel. Subdomain Takeover: nieużywany CNAME -> atakujący przejmuje. Regularny audit DNS. dependency.io, can-i-take-over-xyz. HTTP to HTTPS redirect: 301 permanent redirect. Nginx: return 301 https://$host$request_uri.",
  },
  {
    question: "Supply chain security — npm audit, Dependabot i SBOM?",
    answer: "Supply chain attacks: malicious code w dependencies. SolarWinds, Log4Shell, left-pad. npm audit: skanuje dependencies pod CVE. npm audit --audit-level=high. npm audit fix — automatyczna poprawka. Różnicuj: devDependencies nie idą na produkcję. Dependabot (GitHub): automatyczne PR dla security updates. dependabot.yml konfiguracja. version-updates dla ecosystem: npm. package-lock.json / pnpm-lock.yaml: lockfile zapewnia reproducible builds. Nie commituj node_modules. Renovate Bot: alternatywa dla Dependabot. Więcej konfiguracji, grupowanie updates. npm provenance (2023): package publisher tworzy SLSA provenance. Weryfikuj że kod na npm = kod na GitHub. Snyk: komercyjne narzędzie do CVE scanning. Integruje z IDE, CI/CD. Socket.dev: wykrywa malicious packages przed instalacją. Analiza behavior packages. SBOM (Software Bill of Materials): lista wszystkich dependencies z wersjami. CycloneDX lub SPDX format. npm sbom --sbom-format=cyclonedx. Wymagane w wielu regulacjach (US gov). npm pack analysis: co faktycznie idzie do package. .npmignore lub package.json files field. Secret scanning: nie commituj .env. gitguardian, GitHub secret scanning. pre-commit hooks — detect secrets. dotenv-vault lub Infisical dla secret management. Environment variables: Vercel/Netlify encrypted env storage. Never log secrets. RBAC dla secret access w CI/CD.",
  },
];

const securityAreas = [
  { obszar: "XSS Prevention", techniki: "React auto-escaping, DOMPurify, CSP nonce", narzedzia: "helmet, next/headers", priorytet: "Krytyczny" },
  { obszar: "SQL Injection", techniki: "Parameterized queries, ORM (Prisma/Drizzle)", narzedzia: "Prisma, pg query params", priorytet: "Krytyczny" },
  { obszar: "Auth Security", techniki: "bcrypt/Argon2, MFA, rate limiting, httpOnly", narzedzia: "bcryptjs, otplib, upstash", priorytet: "Krytyczny" },
  { obszar: "Security Headers", techniki: "CSP, HSTS, CORS, Referrer-Policy", narzedzia: "helmet, next.config.js", priorytet: "Wysoki" },
  { obszar: "Supply Chain", techniki: "npm audit, lockfile, Dependabot, provenance", narzedzia: "Dependabot, Snyk, Socket", priorytet: "Wysoki" },
  { obszar: "CSRF Protection", techniki: "SameSite cookies, CSRF token, double submit", narzedzia: "csrf, csurf (legacy)", priorytet: "Wysoki" },
];

export default function BlogWebSecurityCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Web Security | Fotz Studio"
        description="Bezpieczeństwo webowe: OWASP Top 10, XSS, SQL Injection, CSRF, CSP headers, bcrypt/Argon2, MFA, npm audit, Dependabot, supply chain security w Node.js i…"
        canonicalUrl="https://fotz.pl/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs"

        keywords="Web Security co to jest, Web Security jak działa, Web Security tutorial, Web Security przykład, czym jest Web Security, Web Security dokumentacja, Web Security przewodnik"

        canonical="https://fotz.pl/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs"
      />
      <ArticleSchema
        title="Web Security — XSS, CSRF, CSP, SQL Injection, OWASP Top 10, Node.js?"
        description="6 obszarów bezpieczeństwa web (XSS/SQL Injection/Auth/Headers/Supply Chain/CSRF) — OWASP Top 10, CSP nonce, bcrypt, Argon2, MFA, HTTPS, CORS i npm audit."
        url="https://fotz.pl/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema
        items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Web Security", url: "https://fotz.pl/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Web Security", href: "/blog/web-security-xss-csrf-csp-sql-injection-owasp-nodejs-nextjs" },
            ]}
          />
          <div className="mt-8">
            <span className="inline-block bg-red-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / Node.js
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Security i OWASP Top 10
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              XSS, SQL Injection, CSRF, CSP headers, bcrypt/Argon2, MFA,
              HTTPS/CORS i supply chain security w Node.js i Next.js.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Injection prevention", value: "OWASP A03" },
                { label: "Script protection", value: "CSP" },
                { label: "Password hashing", value: "Argon2" },
                { label: "Supply chain", value: "npm audit" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-red-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obszary */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 kluczowych obszarów bezpieczeństwa web</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              XSS, SQL Injection, Auth, Headers, Supply Chain i CSRF —
              priorytetyzacja i konkretne narzędzia dla Node.js i Next.js.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Obszar</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Techniki</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Narzędzia</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Priorytet</th>
                </tr>
              </thead>
              <tbody>
                {securityAreas.map((a, i) => (
                  <tr key={a.obszar} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.obszar}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.techniki}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{a.narzedzia}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs font-medium">{a.priorytet}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-10">Często zadawane pytania</h2>
          </FadeInView>
          <div className="space-y-6">
            {faqItems.map((item) => (
              <FadeInView key={item.question}>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{item.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </Layout>
  );
}
