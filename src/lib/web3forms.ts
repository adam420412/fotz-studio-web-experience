/**
 * Wspólna konfiguracja dla formularzy opartych o Web3Forms.
 *
 * Klucz pobieramy w pierwszej kolejności z zmiennej środowiskowej
 * `VITE_WEB3FORMS_KEY` (ustawianej np. w Vercel / .env). Jeżeli zmienna
 * nie jest dostępna w runtime (typowe w przypadku starych deploymentów,
 * w których zmienna nie została dodana), używamy wartości awaryjnej,
 * dzięki czemu formularze wciąż działają.
 *
 * Dzięki temu pojedynczy błąd konfiguracji nie wyłącza całej strony,
 * a wszystkie komponenty korzystają z jednego, centralnego źródła prawdy.
 */

const FALLBACK_WEB3FORMS_KEY = "2c9e6e82-97a0-4fb2-88d9-f6f4b23d5e2c";

export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_KEY: string =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  FALLBACK_WEB3FORMS_KEY;

export interface Web3FormsPayload {
  subject?: string;
  from_name?: string;
  [key: string]: unknown;
}

export interface Web3FormsResponse {
  success: boolean;
  message?: string;
  [key: string]: unknown;
}

/**
 * Wysyła payload do Web3Forms i zwraca sparsowaną odpowiedź.
 * Rzuca błędem, jeżeli odpowiedź nie zawiera `success: true`.
 */
export async function submitWeb3Form(
  payload: Web3FormsPayload
): Promise<Web3FormsResponse> {
  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_key: WEB3FORMS_KEY,
      ...payload,
    }),
  });

  let data: Web3FormsResponse;
  try {
    data = (await response.json()) as Web3FormsResponse;
  } catch {
    const err = new Error(
      `Nieprawidłowa odpowiedź Web3Forms (status ${response.status})`
    );
    console.error("[web3forms] invalid JSON response", {
      status: response.status,
      keyPreview: `${WEB3FORMS_KEY.slice(0, 6)}…${WEB3FORMS_KEY.slice(-4)}`,
    });
    throw err;
  }

  if (!response.ok || !data?.success) {
    console.error("[web3forms] submit failed", {
      status: response.status,
      keyPreview: `${WEB3FORMS_KEY.slice(0, 6)}…${WEB3FORMS_KEY.slice(-4)}`,
      response: data,
    });
    throw new Error(data?.message || "Błąd podczas wysyłania wiadomości");
  }

  return data;
}
