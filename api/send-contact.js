/**
 * Vercel Serverless Function (Node runtime) używany przez wszystkie
 * formularze na stronie (Kontakt, Cennik, Konsultacja, Newsletter,
 * Kalkulator, Generator Briefu, Chatbot, Footer itd.).
 *
 * Wysyła notyfikację przez Resend do Fotz Studio.
 *
 * Konfiguracja (Vercel → Project → Settings → Environment Variables):
 *   - RESEND_API_KEY       (wymagane)
 *   - CONTACT_INBOX        (opcjonalne, domyślnie "a.mazziarz@gmail.com")
 *   - CONTACT_FROM         (opcjonalne, domyślnie "Fotz Studio <onboarding@resend.dev>")
 *
 * Plik celowo w JS (nie TS), żeby Vercel nie musiał kompilować typów
 * i żeby wdrożenie działało bez żadnych dodatkowych zależności.
 */

const DEFAULT_INBOX = "a.mazziarz@gmail.com";
const DEFAULT_FROM = "Fotz Studio <onboarding@resend.dev>";

const FIELD_LABELS = {
  name: "Imię i nazwisko",
  from_name: "Od",
  email: "E-mail",
  phone: "Telefon",
  company: "Firma",
  topic: "Temat",
  subject: "Temat",
  message: "Wiadomość",
  source: "Źródło",
  selected_services: "Wybrane usługi",
  price_estimate: "Szacowana wycena",
  complexity: "Złożoność",
  urgency: "Pilność",
  contract_months: "Długość kontraktu (mies.)",
  estimated_one_time: "Szacunkowy koszt jednorazowy",
  estimated_monthly: "Szacunkowy koszt miesięczny",
  total_contract_value: "Całkowita wartość kontraktu",
  company_name: "Nazwa firmy",
  project_type: "Rodzaj projektu",
  industry: "Branża",
  budget: "Budżet",
  deadline: "Deadline",
  goals: "Cele",
  description: "Opis",
};

function labelFor(key) {
  if (FIELD_LABELS[key]) return FIELD_LABELS[key];
  return key.replace(/[_-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function escapeHtml(value) {
  const str = value == null ? "" : String(value);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatValue(value) {
  if (value == null) return '<em style="color:#888">(brak)</em>';
  if (typeof value === "string") {
    return escapeHtml(value).replace(/\n/g, "<br>");
  }
  if (typeof value === "number" || typeof value === "boolean") {
    return escapeHtml(String(value));
  }
  try {
    return `<pre style="background:#f5f5f5;padding:10px;border-radius:4px;font-size:12px;overflow:auto">${escapeHtml(
      JSON.stringify(value, null, 2)
    )}</pre>`;
  } catch {
    return escapeHtml(String(value));
  }
}

function buildHtml(payload) {
  const priority = [
    "from_name",
    "name",
    "email",
    "phone",
    "company",
    "topic",
    "subject",
    "message",
  ];
  const seen = new Set();
  const rows = [];

  const push = (key) => {
    if (seen.has(key)) return;
    if (!(key in payload)) return;
    const raw = payload[key];
    if (raw === undefined) return;
    seen.add(key);
    rows.push(
      `<tr>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;vertical-align:top;color:#666;font-weight:500;width:180px">${escapeHtml(
          labelFor(key)
        )}</td>
        <td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111">${formatValue(
          raw
        )}</td>
      </tr>`
    );
  };

  for (const k of priority) push(k);
  for (const k of Object.keys(payload)) push(k);

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:640px;margin:0 auto;color:#111">
      <h2 style="font-weight:600;margin-bottom:4px">Nowe zgłoszenie z fotz.pl</h2>
      <p style="color:#888;margin-top:0;font-size:13px">${escapeHtml(
        payload.subject || "Formularz kontaktowy"
      )}</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">
        ${rows.join("")}
      </table>
      <p style="color:#aaa;font-size:11px;margin-top:24px">
        Wysłane automatycznie przez formularz na fotz.pl
      </p>
    </div>
  `;
}

async function sendEmail(apiKey, from, to, subject, html, replyTo) {
  const body = { from, to, subject, html };
  if (replyTo) body.reply_to = replyTo;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  const rawText = await res.text();
  let parsed = null;
  try {
    parsed = rawText ? JSON.parse(rawText) : null;
  } catch {
    /* not JSON */
  }

  if (!res.ok) {
    const msg =
      (parsed && typeof parsed === "object" && parsed && parsed.message
        ? String(parsed.message)
        : rawText) || res.statusText;
    throw new Error(`Resend ${res.status}: ${msg}`);
  }

  return parsed;
}

function isValidEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req, res) {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ success: false, message: "Method not allowed" });
    return;
  }

  const apiKey = (process.env.RESEND_API_KEY || "").trim();
  if (!apiKey) {
    console.error("[send-contact] RESEND_API_KEY is not configured");
    res.status(500).json({
      success: false,
      message:
        "Serwis e-mail nie został skonfigurowany (brak RESEND_API_KEY w Vercel).",
    });
    return;
  }

  // Vercel parsuje body automatycznie jeśli Content-Type === application/json
  let payload = null;
  if (req.body && typeof req.body === "object") {
    payload = req.body;
  } else if (typeof req.body === "string") {
    try {
      payload = JSON.parse(req.body);
    } catch {
      res.status(400).json({ success: false, message: "Nieprawidłowy JSON" });
      return;
    }
  }

  if (!payload || typeof payload !== "object") {
    res.status(400).json({ success: false, message: "Brak danych formularza" });
    return;
  }

  const inbox = (process.env.CONTACT_INBOX || DEFAULT_INBOX).trim();
  const fromAddress = (process.env.CONTACT_FROM || DEFAULT_FROM).trim();

  const subject =
    (typeof payload.subject === "string" && payload.subject.trim()) ||
    (typeof payload.from_name === "string" && `Formularz · ${payload.from_name}`) ||
    "Nowe zgłoszenie z fotz.pl";

  const replyTo = isValidEmail(payload.email) ? payload.email : undefined;
  const html = buildHtml(payload);

  try {
    const result = await sendEmail(
      apiKey,
      fromAddress,
      [inbox],
      subject,
      html,
      replyTo
    );
    res.status(200).json({ success: true, id: result && result.id });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[send-contact] send failed:", msg);
    res.status(502).json({
      success: false,
      message: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    });
  }
}
