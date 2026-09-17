type MetaConversionInput = {
  consentGranted: boolean;
  eventName: "Lead" | "Schedule";
  eventId: string;
  eventSourceUrl?: string | null;
  email?: string | null;
  phone?: string | null;
  name?: string | null;
  fbp?: string | null;
  fbc?: string | null;
  customData?: Record<string, unknown>;
};

export type MetaConversionResult = {
  configured: boolean;
  sent: boolean;
  error?: string;
};

const clean = (value: string | null | undefined, max = 500) => value?.trim().slice(0, max) || null;

const hash = async (value: string) => {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
};

const safeUrl = (value: string | null | undefined) => {
  try {
    const url = new URL(value || "");
    url.search = "";
    url.hash = "";
    return url.protocol === "https:" || url.hostname === "localhost" ? url.toString().slice(0, 1500) : undefined;
  } catch {
    return undefined;
  }
};

export async function sendMetaConversion(
  req: Request,
  input: MetaConversionInput,
): Promise<MetaConversionResult> {
  if (!input.consentGranted) return { configured: true, sent: false, error: "CONSENT_NOT_GRANTED" };

  const datasetId = clean(Deno.env.get("META_DATASET_ID"), 100);
  const accessToken = Deno.env.get("META_CAPI_ACCESS_TOKEN")?.trim();
  const graphVersion = clean(Deno.env.get("META_GRAPH_API_VERSION"), 20);
  if (!datasetId || !accessToken || !graphVersion || !/^v\d+\.\d+$/.test(graphVersion)) {
    return { configured: false, sent: false, error: "META_CAPI_NOT_CONFIGURED" };
  }

  const email = clean(input.email, 320)?.toLowerCase();
  const phone = clean(input.phone, 40)?.replace(/\D/g, "");
  const nameParts = (clean(input.name, 240) || "").toLowerCase().split(/\s+/).filter(Boolean);
  const firstName = nameParts[0];
  const lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : undefined;
  const forwarded = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientIp = req.headers.get("cf-connecting-ip") || forwarded || req.headers.get("x-real-ip");
  const userAgent = clean(req.headers.get("user-agent"), 500);

  const userData: Record<string, unknown> = {};
  if (email) userData.em = [await hash(email)];
  if (phone && phone.length >= 7) userData.ph = [await hash(phone)];
  if (firstName) userData.fn = [await hash(firstName)];
  if (lastName) userData.ln = [await hash(lastName)];
  if (clientIp) userData.client_ip_address = clientIp;
  if (userAgent) userData.client_user_agent = userAgent;
  if (clean(input.fbp, 300)) userData.fbp = clean(input.fbp, 300);
  if (clean(input.fbc, 500)) userData.fbc = clean(input.fbc, 500);

  const body: Record<string, unknown> = {
    data: [{
      event_name: input.eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: input.eventId,
      action_source: "website",
      event_source_url: safeUrl(input.eventSourceUrl),
      user_data: userData,
      custom_data: input.customData || {},
    }],
  };
  const testEventCode = clean(Deno.env.get("META_TEST_EVENT_CODE"), 100);
  if (testEventCode) body.test_event_code = testEventCode;

  try {
    const response = await fetch(
      `https://graph.facebook.com/${graphVersion}/${encodeURIComponent(datasetId)}/events`,
      {
        method: "POST",
        signal: AbortSignal.timeout(6000),
        headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      },
    );
    if (!response.ok) {
      console.error("[meta-capi] request failed", { event_name: input.eventName, status: response.status });
      return { configured: true, sent: false, error: `META_HTTP_${response.status}` };
    }
    const receipt = await response.json();
    if (typeof receipt?.events_received !== "number" || receipt.events_received < 1) {
      console.error("[meta-capi] event not accepted", { event_name: input.eventName, status: response.status });
      return { configured: true, sent: false, error: "META_EVENT_NOT_ACCEPTED" };
    }
    // Record the receipt without credentials or contact/user_data fields.
    console.info("[meta-capi] accepted", {
      event_name: input.eventName,
      event_id: input.eventId,
      dataset_id: datasetId,
      test_mode: Boolean(testEventCode),
      events_received: receipt.events_received,
      trace_id: typeof receipt.fbtrace_id === "string" ? receipt.fbtrace_id : undefined,
    });
    return { configured: true, sent: true };
  } catch (error) {
    console.error("[meta-capi] network failed", {
      event_name: input.eventName,
      error: error instanceof Error ? error.message : "unknown",
    });
    return { configured: true, sent: false, error: "META_NETWORK_ERROR" };
  }
}
