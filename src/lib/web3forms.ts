/**
 * Wspólny helper do wysyłki formularzy na stronie.
 * Wszystkie formularze idą przez Supabase Edge Function `send-contact`
 * (Lovable Cloud), która używa Resend. RESEND_API_KEY przechowywany jest
 * jako sekret w Lovable Cloud.
 *
 * Nazwy `submitWeb3Form` / `Web3FormsPayload` zachowane dla wstecznej
 * kompatybilności — pod spodem to wywołanie `supabase.functions.invoke`.
 */
import { supabase } from "@/integrations/supabase/client";

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
  const { data, error } = await supabase.functions.invoke<Web3FormsResponse>(
    "send-contact",
    { body: payload }
  );

  if (error) {
    console.error("[contact] invoke error", error);
    throw new Error(error.message || "Błąd podczas wysyłania wiadomości");
  }
  if (!data?.success) {
    console.error("[contact] submit failed", data);
    throw new Error(data?.message || "Błąd podczas wysyłania wiadomości");
  }
  return data;
}

// Alias z czytelniejszą nazwą — dla nowego kodu preferuj ten export.
export const submitContactForm = submitWeb3Form;
export type ContactFormPayload = Web3FormsPayload;
export type ContactFormResponse = Web3FormsResponse;
