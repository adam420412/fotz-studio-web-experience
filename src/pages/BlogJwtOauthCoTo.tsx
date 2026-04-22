import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Co to jest JWT (JSON Web Token) i jak działa autentykacja?",
    answer: "JWT (JSON Web Token): otwarty standard (RFC 7519) do przesyłania danych jako JSON object podpisany kryptograficznie. Struktura JWT: Header.Payload.Signature (oddzielone kropkami, base64url encoded). Header: algorytm (HS256, RS256, ES256) i typ (JWT). Payload (Claims): sub (subject/user ID), iss (issuer), aud (audience), exp (expiration), iat (issued at), custom claims. Signature: HMACSHA256(base64UrlEncode(header) + '.' + base64UrlEncode(payload), secret). Jak działa: klient wysyła credentials. Serwer generuje JWT i zwraca. Klient przechowuje JWT (localStorage, cookie, memory). Klient wysyła JWT w każdym requeście: Authorization: Bearer {token}. Serwer weryfikuje podpis (bez bazy danych). Zalety JWT: stateless (brak sesji w DB). Skaluje się poziomo. Działa cross-domain. Samowystarczalny (dane w tokenie). Wady JWT: nie można unieważnić przed exp (bez blacklist). Większy rozmiar niż session ID. Sensitive data w payload (base64 nie jest encrypted!). exp zbyt długi = security risk. Access token (krótki TTL: 15min-1h) + Refresh token (długi TTL: 7-30 dni). Refresh token rotation: nowy refresh token przy każdym użyciu. Przechowywanie: HttpOnly cookie (bezpieczniejszy) vs localStorage (XSS risk).",
  },
  {
    question: "OAuth 2.0 — flows, grant types i kiedy używać?",
    answer: "OAuth 2.0: framework autoryzacji (RFC 6749), nie autentykacji. Deleguje dostęp do zasobów bez udostępniania hasła. Aktorzy: Resource Owner (user), Client (aplikacja), Authorization Server (Google/GitHub), Resource Server (API). Grant Types: Authorization Code (+ PKCE): dla web apps i SPA. Redirect do auth server -> code -> exchange for tokens. Najbezpieczniejszy. Implicit: przestarzały (deprecated). Tylko dla SPA bez backendu. Nie używać. Client Credentials: serwis-do-serwisu (machine-to-machine). Brak user involvement. Device Code: TV, CLI tools bez przeglądarki. Resource Owner Password: przestarzały. Tylko legacy. PKCE (Proof Key for Code Exchange): rozszerzenie Authorization Code dla public clients (SPA, mobile). code_verifier (random string) + code_challenge (SHA256 hash). Zapobiega CSRF i authorization code interception. Scopes: granularne uprawnienia. openid, profile, email (OIDC). read:users, write:posts (custom). Tokens: Access Token (krótkoterminowy, dostęp do API). Refresh Token (długoterminowy, nowy access token). ID Token (OIDC — informacje o userze). OAuth vs autentykacja: OAuth = 'mogę...' (autoryzacja). Nie mówi kto jest user. OIDC = OAuth + autentykacja (who are you). Popularne OAuth providers: Google, GitHub, Microsoft, Facebook, Apple.",
  },
  {
    question: "OpenID Connect (OIDC) — tożsamość ponad OAuth 2.0?",
    answer: "OIDC: protokół autentykacji zbudowany na OAuth 2.0 (2014). OAuth 2.0 + Identity Layer = OIDC. ID Token: JWT z danymi użytkownika. sub, name, email, picture, email_verified. Wydawany przez Authorization Server razem z Access Token. UserInfo Endpoint: GET /userinfo z Access Token. Zwraca profil użytkownika. Bardziej aktualne dane niż ID Token. Discovery: /.well-known/openid-configuration. Automatyczna konfiguracja klienta. Klucze publiczne do weryfikacji podpisów. Flows OIDC: Authorization Code (recommended). Implicit (deprecated). Hybrid. Kluczowe parametry: response_type=code, scope=openid profile email, nonce (anti-replay), state (CSRF protection). Claims: Standard (sub, name, email, phone, address, birthdate). Custom (role, tenant_id, plan). Rozszerzone: address, phone. OIDC vs SAML: OIDC — modern, JSON/JWT, REST, mobile/SPA-friendly. SAML 2.0 — enterprise legacy, XML, SSO dla starszych aplikacji. SAML nadal w enterprise (Okta, Azure AD, ADFS). Implementacje: Keycloak (open source, self-hosted). Auth0, Okta, Azure AD B2C (cloud). Supabase Auth, Clerk (developer-focused). Passport.js, openid-client (Node.js). Session vs JWT: Session — stateful, database lookup, HttpOnly cookie. JWT — stateless, no DB, Bearer token. Hybrydowe: session cookie zawierający JWT.",
  },
  {
    question: "Session-based auth vs JWT — kiedy co wybrać?",
    answer: "Session-based authentication: serwer tworzy session ID po logowaniu. Session ID w cookie (HttpOnly, Secure, SameSite). Przy każdym requeście: sprawdź session w DB/Redis. Stan sesji w DB (session store). Zalety session: natychmiastowe unieważnienie (logout, ban). Mniejszy cookie (tylko ID). Server-side kontrola. Bezpieczniejszy out-of-the-box (HttpOnly cookie). Wady session: stateful — skalowanie wymaga shared session store (Redis). Każdy request = DB lookup. Trudniejsze w multi-domain. JWT authentication: token stateless. Weryfikacja kryptograficzna bez DB. Bearer token lub cookie. Zalety JWT: stateless (brak DB). Skalowanie łatwiejsze. Cross-domain. Microservices friendly. Wady JWT: brak natychmiastowego revocation. Payload widoczny (base64). Większy niż session ID. Implementacja revocation: short-lived access token + refresh token. Token blacklist (Redis) — niweluje zaletę stateless. Rekomendacja 2024: aplikacje web z jedną domeną -> session cookie (HttpOnly). SPA + API osobne domeny -> JWT (krótki TTL) + refresh token. Microservices -> JWT. Enterprise SSO -> OIDC/SAML. CSRF protection: session -> SameSite cookie lub CSRF token. JWT in cookie -> SameSite=Strict. JWT in Authorization header -> naturalnie odporny na CSRF.",
  },
  {
    question: "Bezpieczeństwo autentykacji — CSRF, XSS, token storage i best practices?",
    answer: "XSS (Cross-Site Scripting): złośliwy JS może ukraść localStorage. localStorage — podatny na XSS (window.localStorage dostępny przez JS). Cookie HttpOnly — odporny (JS nie może czytać). Rekomendacja: tokeny w HttpOnly cookies. Jeśli localStorage — Content Security Policy (CSP) header. CSRF (Cross-Site Request Forgery): fałszywy request z innej domeny. Atakuje cookie (automatycznie wysyłane). Ochrona: SameSite=Strict lub Lax cookie. Double Submit Cookie pattern. CSRF token w formularzu. Authorization header (JWT) — odporny. SameSite cookie: Strict — tylko same-site (wyklucza cross-site linki). Lax — same-site + top-level navigation GET. None — wszystkie (wymaga Secure). Token rotation best practices: refresh token rotation (nowy refresh przy każdym użyciu). Wykrywanie reuse (replay attack). Revoke family przy wykryciu reuse. Token storage strategia: access token — memory (React state/closure). refresh token — HttpOnly cookie. PKCE — zawsze dla public clients (SPA, mobile). Rate limiting logowania: limit prób logowania. CAPTCHA po N nieudanych próbach. Account lockout. MFA (Multi-Factor Authentication): TOTP (Google Authenticator, Authy). WebAuthn/Passkeys (klucze sprzętowe, biometria). SMS OTP (mniej bezpieczny). Passkeys: W3C WebAuthn. Klucz kryptograficzny na urządzeniu. Phishing-resistant. Coraz popularniejsze (Apple, Google, Microsoft).",
  },
];

const authComparison = [
  { metoda: "Session + Cookie", stanowe: "Tak (DB/Redis)", rewokacja: "Natychmiastowa", skalowalnosc: "Wymaga shared store", crossDomain: "Trudne", kiedy: "Tradycyjne web apps, jedna domena" },
  { metoda: "JWT (Bearer)", stanowe: "Nie (stateless)", rewokacja: "Do exp (lub blacklist)", skalowalnosc: "Łatwe", crossDomain: "Łatwe", kiedy: "Microservices, SPA + API, mobile" },
  { metoda: "OAuth 2.0 + PKCE", stanowe: "Authorization Server", rewokacja: "U auth servera", skalowalnosc: "Zewnętrzny provider", crossDomain: "Tak (delegacja)", kiedy: "Third-party login, delegacja dostępu" },
  { metoda: "OIDC", stanowe: "Authorization Server", rewokacja: "U auth servera", skalowalnosc: "Zewnętrzny provider", crossDomain: "Tak (SSO)", kiedy: "Enterprise SSO, Google/GitHub login" },
  { metoda: "SAML 2.0", stanowe: "IdP (XML)", rewokacja: "U IdP", skalowalnosc: "Zewnętrzny IdP", crossDomain: "Tak (enterprise)", kiedy: "Enterprise legacy, ADFS, Okta" },
  { metoda: "Passkeys (WebAuthn)", stanowe: "Device/Platform", rewokacja: "Per device", skalowalnosc: "Dobre", crossDomain: "Tak", kiedy: "Passwordless, MFA, przyszłość" },
];

export default function BlogJwtOauthCoTo() {
  return (
    <Layout>
      <SEOHead
        title="JWT, OAuth 2.0, OIDC | Fotz Studio"
        description="JWT vs session, OAuth 2.0 grant types, PKCE, OpenID Connect, SAML, Passkeys — bezpieczeństwo autentykacji, CSRF, XSS i best practices 2024."
        canonical="https://fotz.pl/blog/jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys"

        keywords="JWT, OAuth 2.0, OIDC co to jest, JWT, OAuth 2.0, OIDC definicja, czym jest JWT, OAuth 2.0, OIDC, JWT, OAuth 2.0, OIDC przykłady, jak działa JWT, OAuth 2.0, OIDC, JWT, OAuth 2.0, OIDC znaczenie, JWT, OAuth 2.0, OIDC przewodnik"
      />
      <ArticleSchema
        title="JWT, OAuth 2.0, OIDC — autentykacja i autoryzacja w aplikacjach web?"
        description="6 metod autentykacji (Session/JWT/OAuth2/OIDC/SAML/Passkeys) — PKCE, token rotation, XSS/CSRF ochrona, HttpOnly cookie i kiedy co wybrać."
        url="https://fotz.pl/blog/jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys"
        datePublished="2024-04-13"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "JWT, OAuth 2.0, OIDC", url: "https://fotz.pl/blog/jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "JWT, OAuth 2.0, OIDC", url: "/blog/jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-indigo-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / Authentication
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              JWT, OAuth 2.0 i OIDC
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              Autentykacja i autoryzacja w aplikacjach web — token-based auth,
              OAuth flows z PKCE, OpenID Connect i bezpieczeństwo tokenów.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Stateless token", value: "JWT" },
                { label: "Delegacja dostępu", value: "OAuth 2.0" },
                { label: "Tożsamość + OAuth", value: "OIDC" },
                { label: "Passwordless", value: "Passkeys" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-indigo-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Porównanie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6 metod autentykacji porównane</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Session, JWT, OAuth 2.0, OIDC, SAML i Passkeys — każda metoda
              reprezentuje inny kompromis między bezpieczeństwem, skalowalnością i DX.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Metoda</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Stanowe</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Rewokacja</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Skalowalność</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Cross-Domain</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Kiedy</th>
                </tr>
              </thead>
              <tbody>
                {authComparison.map((a, i) => (
                  <tr key={a.metoda} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{a.metoda}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.stanowe}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.rewokacja}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.skalowalnosc}</td>
                    <td className="p-3 border border-gray-200 text-gray-700">{a.crossDomain}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{a.kiedy}</td>
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

      <RelatedArticles currentArticleId="jwt-oauth2-oidc-autentykacja-autoryzacja-web-session-passkeys" />
      <ContactSection />
    </Layout>
  );
}
