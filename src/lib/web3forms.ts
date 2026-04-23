/**
 * Wspólny helper do wysyłki formularzy na stronie.
 *
 * UWAGA: plik historycznie nazywał się "web3forms" — obecnie wszystkie
 * formularze przechodzą przez własny endpoint `/api/send-contact`
 * (Vercel Edge Function) korzystający z Resend. Nazwę pliku i funkcji
 * zostawiamy dla zgodności wstecznej, żeby nie musieć aktualizować
 * każdego miejsca, które ten helper wywołuje.
 *
 * Konfiguracja (Vercel → Project → Settings → Environment Variables):
 *   - RESEND_API_KEY   (wymagane)
 *   - CONTACT_INBOX    (opcjonalne; domyślnie a.mazziarz@gmail.com)
 *   - CONTACT_FROM     (opcjonalne; domyślnie onboarding@resend.dev)
 *
 * Lokalny development (vite):
 *   - użyj `vercel dev` aby endpoint `/api/send-contact` działał
 *     lub ustaw `VITE_CONTACT_ENDPOINT` np. na deploy preview.
 */

/**
 * Domena `fotz.pl` stoi za własnym reverse-proxy (Caddy na Hetznerze),
 * które serwuje SPA z Vercela, ale NIE przekazuje dalej ścieżek `/api/*`
 * do Vercela — dlatego `fotz.pl/api/send-contact` zwraca 404.
 *
 * Rozwiązanie: formularze wysyłamy BEZPOŚREDNIO na domenę Vercel
 * (`fotz-studio-web-experience.vercel.app/api/send-contact`) — CORS w
 * funkcji pozwala na dowolne Origin (`Access-Control-Allow-Origin: *`),
 * więc to działa z każdej strony.
 *
 * Jeżeli w przyszłości Caddy zostanie skonfigurowany do przekazywania
 * `/api/*` do Vercela, wystarczy zmienić domyślną wartość poniżej z
 * absolutnego URL na `/api/send-contact`.
 */
export const CONTACT_ENDPOINT: string =
  (import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined) ||
  "https://fotz-studio-web-experience.vercel.app/api/send-contact";

export interface Web3FormsPayload {
  subject?: string;
  from_name?: string;
  [key: string]: unknown;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  id?: string;
  [key: string]: unknown;
}

/**
 * Wysyła payload do naszego endpointu kontaktowego i zwraca sparsowaną
 * odpowiedź. Rzuca błędem, jeżeli odpowiedź nie zawiera `success: true`.
 *
 * Nazwę `submitWeb3Form` zachowujemy dla zgodności wstecznej — pod spodem
 * uderza do `/api/send-contact` (Resend), nie do Web3Forms.
 */
export async function submitWeb3Form(
  payload: Web3FormsPayload
): Promise<Web3FormsResponse> {
  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: Web3FormsResponse;
  try {
    data = (await response.json()) as Web3FormsResponse;
  } catch {
    console.error("[contact] invalid JSON response", {
      status: response.status,
      endpoint: CONTACT_ENDPOINT,
    });
    throw new Error(
      `Nieprawidłowa odpowiedź serwera (status ${response.status})`
    );
  }

  if (!response.ok || !data?.success) {
    console.error("[contact] submit failed", {
      status: response.status,
      endpoint: CONTACT_ENDPOINT,
      response: data,
    });
    throw new Error(data?.message || "Błąd podczas wysyłania wiadomości");
  }

  return data;
}

// Alias z czytelniejszą nazwą — dla nowego kodu preferuj ten export.
export const submitContactForm = submitWeb3Form;
export type ContactFormPayload = Web3FormsPayload;
export type ContactFormResponse = Web3FormsResponse;
