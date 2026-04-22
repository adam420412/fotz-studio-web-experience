import { SEOHead } from "@/components/seo/SEOHead";
import { Layout } from "@/components/layout/Layout";
import { FAQSchema, ArticleSchema, BreadcrumbSchema } from "@/components/seo/StructuredData";
import { FadeInView } from "@/components/FadeInView";
import { ContactSection } from "@/components/sections/ContactSection";
import { PageBreadcrumbs } from "@/components/PageBreadcrumbs";
import { RelatedArticles } from "@/components/blog/RelatedArticles";

const faqItems = [
  {
    question: "Passkeys — co to jest i jak zastępują hasła?",
    answer: "Passkeys: standard uwierzytelniania bez hasła. FIDO2 / WebAuthn. Apple, Google, Microsoft, 1Password, Bitwarden. Jak działa: zamiast hasła — klucz kryptograficzny. Private key na urządzeniu (secure enclave). Public key na serwerze. Logowanie: biometria (TouchID, FaceID, Windows Hello). Klucz prywatny nigdy nie opuszcza urządzenia. Zalety: brak phishingu (domain-bound). Brak reuse hasła. Brak brute force. Brak data breach passcode. Kryptografia asymetryczna. Synchronizacja: iCloud Keychain (Apple). Google Password Manager. 1Password, Bitwarden (cross-platform). QR code dla innego urządzenia. Wsparcie 2024: Apple — iOS 16+, macOS 13+. Android — Android 9+. Windows — Windows 11 (Hello). Chrome, Safari, Firefox, Edge. Obsługa: navigator.credentials.create() — rejestracja. navigator.credentials.get() — logowanie. Typy: Platform passkey — bound do urządzenia+OS. Roaming passkey — hardware key (YubiKey). Synced passkey — cloud-synced (iCloud, Google). Użytkownicy bez passkeys: fallback do hasła. Stopniowe wdrożenie. Passkeys co login page wyświetla automatycznie. Statystyki: Google: 900M accounts z passkeys (2024). GitHub: passkeys dostępne. Microsoft: passwordless domyślnie. Coraz więcej serwisów.",
  },
  {
    question: "WebAuthn API — implementacja rejestracji i logowania?",
    answer: "WebAuthn: W3C standard. Browser API. Część FIDO2 ekosystemu. Rejestracja — frontend: const credential = await navigator.credentials.create({publicKey: {challenge: Uint8Array.from(serverChallenge), rp: {name: 'Moja Aplikacja', id: 'example.com'}, user: {id: Uint8Array.from(userId), name: 'user@email.com', displayName: 'Jan Kowalski'}, pubKeyCredParams: [{type: 'public-key', alg: -7}, {type: 'public-key', alg: -257}], authenticatorSelection: {authenticatorAttachment: 'platform', residentKey: 'preferred', userVerification: 'preferred'}, timeout: 60000, attestation: 'none'}}). Wyślij do serwera: credential.id, credential.rawId, credential.response. Logowanie — frontend: const assertion = await navigator.credentials.get({publicKey: {challenge: Uint8Array.from(serverChallenge), rpId: 'example.com', allowCredentials: [{type: 'public-key', id: credentialId}], userVerification: 'preferred', timeout: 60000}}). Weryfikacja na serwerze: @simplewebauthn/server — npm. SimpleWebAuthn: najpopularniejsza biblioteka. verifyRegistrationResponse(). verifyAuthenticationResponse(). Challenge: jednorazowy, serwer generuje. Przechowywany tymczasowo (session/redis). Replay attack prevention. Resident keys (discoverable credentials): usernameless login. Browser pokazuje dostępne klucze. autocomplete='webauthn' na input. Mediation: navigator.credentials.get({mediation: 'conditional'}) — inline picker.",
  },
  {
    question: "SimpleWebAuthn — biblioteka passkeys w Next.js?",
    answer: "@simplewebauthn/browser + @simplewebauthn/server: najprostsza implementacja. TypeScript. Full WebAuthn support. Instalacja: npm install @simplewebauthn/browser (frontend). npm install @simplewebauthn/server (backend). Next.js App Router implementacja: Rejestracja Server Action: import {generateRegistrationOptions, verifyRegistrationResponse} from '@simplewebauthn/server'. const options = await generateRegistrationOptions({rpName: 'Moja App', rpID: process.env.NEXT_PUBLIC_RP_ID, userID: isoUint8Array.fromUTF8String(userId), userName: email, attestationType: 'none', excludeCredentials: existingPasskeys, authenticatorSelection: {residentKey: 'preferred', userVerification: 'preferred'}}). Zapisz challenge w session. Zwróć options. Frontend rejestracja: import {startRegistration} from '@simplewebauthn/browser'. const attResp = await startRegistration(options). Wyślij attResp do Server Action. Weryfikacja serwer: const verification = await verifyRegistrationResponse({response: attResp, expectedChallenge, expectedOrigin: 'https://example.com', expectedRPID: 'example.com', requireUserVerification: true}). Zapisz credentialID, publicKey, counter w DB. Logowanie: generateAuthenticationOptions(). startAuthentication(). verifyAuthenticationResponse(). Biblioteki auth z passkeys: Auth.js v5 (next-auth): WebAuthn provider. credentials: [{id, transports}] w user. Lucia auth: manual WebAuthn. Clerk: wbudowane passkeys. better-auth: WebAuthn adapter.",
  },
  {
    question: "Passkeys UX — jak projektować flow rejestracji i logowania?",
    answer: "Conditional UI (autofill): input type='email' autocomplete='username webauthn'. navigator.credentials.get({mediation: 'conditional'}). Przeglądarka automatycznie pokazuje passkeys. Brak dodatkowego button 'zaloguj passkey'. Najlepszy UX. Rejestracja passkey: Po udanym logowaniu hasłem. Wyświetl banner: 'Włącz szybsze logowanie?'. Wyjaśnij co to passkey (prosto). Jeden przycisk 'Włącz'. Nie wymuszaj. Fallback: hasło zawsze dostępne. Zarządzanie passkeys: Strona w ustawieniach konta. Lista urządzeń z passkeys. Usuń urządzenia. Dodaj nowe (np. nowy komputer). Nazwa urządzenia widoczna. Onboarding nowe urządzenie: QR code na innym urządzeniu. Roaming authenticator (YubiKey). Lub nowe hasło + potwierdź email. Błędy: NotAllowedError — użytkownik anulował. SecurityError — niepoprawny origin. Obsługa graceful. Komunikaty przyjazne. InvalidStateError — już zarejestrowany. Passkeys i MFA: Passkey zastępuje hasło I drugi czynnik. FIDO2 inherent user verification. Nie musisz TOTP/SMS po passkey. Ale można dodać TOTP jako opcję. Cross-device flow: na desktop -> kliknij zaloguj passkey. QR code. Zeskanuj telefonem. Uwierzytelnij biometrią na telefonie. Desktop zalogowany. Bluetooth proximity. Design: Klucz ikona (🔑) kojarzy się z hasłem. Używaj fingerprint/face-id ikonę. Google Material Symbols. Wyraźne wskazanie 'szybkie i bezpieczne'.",
  },
  {
    question: "FIDO2, YubiKey i enterprise passkeys — zaawansowane tematy?",
    answer: "FIDO Alliance: organizacja standaryzująca. FIDO2 = WebAuthn + CTAP2. CTAP2: Client to Authenticator Protocol. Komunikacja z hardware key. USB, NFC, Bluetooth. YubiKey: hardware security key. Roaming authenticator. FIDO2 certified. Touch to confirm. PIN protection. YubiKey 5: USB-A i USB-C. NFC. FIDO2, PIV, TOTP, PGP. Yubikey dla enterprise: phishing resistant MFA. SOC2, FedRAMP compliance. PIV dla enterprise (PKI). Bitwarden Hardware Key. Attestation types: none — brak weryfikacji urządzenia. indirect — anonymized. direct — pełny certyfikat. enterprise — dla enterprise devices. Enterprise passkeys: device binding. Conditional access policies. MDM management (Intune, Jamf). Admin dashboard widoczność. Passkeys a GDPR: klucz prywatny na urządzeniu. Serwer przechowuje tylko public key. Brak biometrics na serwerze. Privacy preserving by design. Compliance friendly. Ranh tracking: RP ID binding. Nie można phishować na inną domenę. Cross-origin auth: nie możliwe standardowo. iFrame restrictions. CORS dla WebAuthn. Backup keys: 1Password, Bitwarden jako passkey vault. Sync across devices. Brak single point of failure. Recovery: email verification flow. Admin unlock. Emergency codes (TOTP backup). Account recovery process dokumentować.",
  },
];

const passkeysVsPasswords = [
  { aspekt: "Phishing", haslo: "Podatne — można kraść przez fake login", passkey: "Odporne — domain-bound, nie do skradzenia" },
  { aspekt: "Reuse", haslo: "Częste — ten sam na wielu serwisach", passkey: "Niemożliwe — unikalne klucze per serwis" },
  { aspekt: "Brute force", haslo: "Możliwe — słabe hasła", passkey: "Niemożliwe — kryptografia asymetryczna" },
  { aspekt: "Data breach", haslo: "Wycieka hash — crackable", passkey: "Tylko public key — bezużyteczny bez urządzenia" },
  { aspekt: "UX logowania", haslo: "Wpisywanie + zapamiętywanie", passkey: "Biometria — 1-2 sekundy" },
  { aspekt: "Wsparcie 2024", haslo: "Wszędzie", passkey: "iOS 16+, Android 9+, Windows 11, Chrome/Safari" },
];

export default function BlogPasskeysWebAuthnCoTo() {
  return (
    <Layout>
      <SEOHead
        title="Passkeys i WebAuthn | Fotz Studio"
        description="Passkeys i WebAuthn 2024: jak działają (FIDO2, kryptografia), implementacja w Next.js (SimpleWebAuthn, @simplewebauthn/server), conditional UI, YubiKey…"
        canonicalUrl="https://fotz.pl/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024"

        keywords="Passkeys i WebAuthn co to jest, Passkeys i WebAuthn jak działa, Passkeys i WebAuthn tutorial, Passkeys i WebAuthn przykład, czym jest Passkeys i WebAuthn, Passkeys i WebAuthn dokumentacja, Passkeys i WebAuthn przewodnik"

        canonical="https://fotz.pl/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024"
      />
      <ArticleSchema
        title="Passkeys i WebAuthn — implementacja w Next.js, SimpleWebAuthn i UX 2024?"
        description="6 aspektów passkeys vs hasła (phishing/reuse/brute force/data breach/UX/wsparcie) — WebAuthn API, SimpleWebAuthn Next.js, conditional UI, YubiKey enterprise i Auth.js v5."
        url="https://fotz.pl/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024"
        datePublished="2024-11-01"
      />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
          { name: "Strona główna", url: "https://fotz.pl" },
          { name: "Blog", url: "https://fotz.pl/blog" },
          { name: "Passkeys i WebAuthn", url: "https://fotz.pl/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024" },
        ]}/>

      <section className="bg-gradient-to-br from-slate-950 via-emerald-950 to-green-950 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <PageBreadcrumbs items={[
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: "Passkeys i WebAuthn", url: "/blog/passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024" },
            ]}/>
          <div className="mt-8">
            <span className="inline-block bg-emerald-700 text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Security / Passkeys / WebAuthn
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Passkeys i WebAuthn
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl">
              FIDO2, WebAuthn API, SimpleWebAuthn w Next.js,
              conditional UI, YubiKey enterprise i Auth.js v5.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Standard", value: "FIDO2" },
                { label: "API", value: "WebAuthn" },
                { label: "Library", value: "SimpleWebAuthn" },
                { label: "Hardware", value: "YubiKey" },
              ].map((s) => (
                <div key={s.label} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-lg font-bold text-emerald-400">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tabela */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeInView>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Passkeys vs hasła — porównanie 6 aspektów</h2>
            <p className="text-gray-600 mb-10 max-w-3xl">
              Phishing, reuse, brute force, data breach, UX i wsparcie przeglądarek —
              dlaczego passkeys są bezpieczniejsze.
            </p>
          </FadeInView>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Aspekt</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Hasło</th>
                  <th className="text-left p-3 font-semibold text-gray-700 border border-gray-200">Passkey</th>
                </tr>
              </thead>
              <tbody>
                {passkeysVsPasswords.map((r, i) => (
                  <tr key={r.aspekt} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 border border-gray-200 font-medium text-gray-900">{r.aspekt}</td>
                    <td className="p-3 border border-gray-200 text-gray-700 text-xs">{r.haslo}</td>
                    <td className="p-3 border border-gray-200 text-gray-600 text-xs">{r.passkey}</td>
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

      <RelatedArticles currentArticleId="passkeys-webauthn-implementacja-nextjs-simplewebauthn-fido2-2024" />
      <ContactSection />
    </Layout>
  );
}
