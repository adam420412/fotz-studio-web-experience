import { createClient } from "npm:@supabase/supabase-js@2";
const DEFAULT_INBOX = 'a.mazziarz@gmail.com';
const DEFAULT_FROM = 'Fotz Studio <onboarding@resend.dev>';

const FIELD_LABELS: Record<string, string> = {
  name: 'Imię i nazwisko',
  from_name: 'Od',
  email: 'E-mail',
  phone: 'Telefon',
  company: 'Firma',
  topic: 'Temat',
  subject: 'Temat',
  message: 'Wiadomość',
  source: 'Źródło',
};

const TECHNICAL_FIELDS = new Set([
  'submission_id',
  'event_type',
  'source_channel',
  'source_provider',
  'source_detail',
  'crm_name',
  'form_name',
  'page_url',
  'referrer',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'msclkid',
  'attribution',
  'consent',
  '_notification_requested',
]);

const escapeHtml = (v: unknown) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const labelFor = (k: string) =>
  FIELD_LABELS[k] ?? k.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const formatValue = (v: unknown): string => {
  if (v == null) return '<em style="color:#888">(brak)</em>';
  if (typeof v === 'string') return escapeHtml(v).replace(/\n/g, '<br>');
  if (typeof v === 'number' || typeof v === 'boolean') return escapeHtml(String(v));
  try {
    return `<pre style="background:#f5f5f5;padding:10px;border-radius:4px;font-size:12px;overflow:auto">${escapeHtml(JSON.stringify(v, null, 2))}</pre>`;
  } catch {
    return escapeHtml(String(v));
  }
};

const buildHtml = (payload: Record<string, unknown>) => {
  const priority = ['from_name', 'name', 'email', 'phone', 'company', 'topic', 'subject', 'message'];
  const seen = new Set<string>();
  const rows: string[] = [];
  const push = (k: string) => {
    if (seen.has(k) || !(k in payload) || TECHNICAL_FIELDS.has(k)) return;
    seen.add(k);
    rows.push(
      `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#666;font-weight:500;width:180px;vertical-align:top">${escapeHtml(labelFor(k))}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;color:#111">${formatValue(payload[k])}</td></tr>`
    );
  };
  for (const k of priority) push(k);
  for (const k of Object.keys(payload)) push(k);
  return `<div style="font-family:-apple-system,sans-serif;max-width:640px;margin:0 auto;color:#111"><h2 style="font-weight:600;margin-bottom:4px">Nowe zgłoszenie z FOTZ Studio</h2><p style="color:#888;margin-top:0;font-size:13px">${escapeHtml((payload.subject as string) || 'Formularz kontaktowy')}</p><table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">${rows.join('')}</table><p style="color:#aaa;font-size:11px;margin-top:24px">Wysłane automatycznie przez formularz FOTZ Studio</p></div>`;
};


type Payload = Record<string, unknown>;
type Notice = { status: "sent" | "failed" | "not_configured" | "pending"; id?: string };
const client = () => {
 const url=Deno.env.get("SUPABASE_URL"), key=Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
 return url && key ? createClient(url,key,{auth:{persistSession:false,autoRefreshToken:false}}) : null;
};
const isEmail=(v:unknown):v is string=>typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

async function send(payload: Payload, submissionId: string): Promise<Notice> {
 const apiKey=Deno.env.get("RESEND_API_KEY");
 if(!apiKey) return {status:"not_configured"};
 const subject=String(payload.subject||"Nowe zgłoszenie z FOTZ Studio").replace(/[\r\n]+/g," ").slice(0,180);
 const body: Payload={from:(Deno.env.get("CONTACT_FROM")||DEFAULT_FROM).trim(),to:[(Deno.env.get("CONTACT_INBOX")||DEFAULT_INBOX).trim()],subject,html:buildHtml(payload)};
 if(isEmail(payload.email))body.reply_to=payload.email;
 try {
  const response=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${apiKey}`,"Idempotency-Key":`contact/${submissionId}`},body:JSON.stringify(body),signal:AbortSignal.timeout(6000)});
  if(!response.ok)return {status:"failed"};
  const receipt=await response.json();
  return receipt?.id ? {status:"sent",id:String(receipt.id)} : {status:"failed"};
 } catch {return {status:"failed"};}
}

export async function deliverContactNotification(submissionId: string, fallback?: Payload): Promise<Notice> {
 const db=client();
 if(!db)return fallback ? send(fallback,submissionId) : {status:"failed"};
 const {data:row,error}=await db.from("crm_delivery_outbox").select("id,payload,notification_status,notification_attempts,notification_next_attempt_at,notification_id").eq("submission_id",submissionId).maybeSingle();
 if(error || !row) {
  // Hub may have accepted the lead even when the local outbox was unavailable.
  console.error("[contact-notification] outbox unavailable", {submission_id:submissionId});
  return fallback ? send(fallback,submissionId) : {status:"failed"};
 }
 if(row.notification_status==="sent")return {status:"sent",id:row.notification_id||undefined};
 const now=new Date();
 const {data:claimed,error:claimError}=await db.from("crm_delivery_outbox").update({notification_status:"pending",notification_next_attempt_at:new Date(now.getTime()+120000).toISOString()}).eq("id",row.id).neq("notification_status","sent").lte("notification_next_attempt_at",now.toISOString()).select("id").maybeSingle();
 if(claimError)return {status:"failed"};
 if(!claimed)return {status:"pending"};
 // Always reuse the durable payload so provider idempotency does not see changed email content.
 const result=await send(row.payload,submissionId);
 const {error:updateError}=await db.from("crm_delivery_outbox").update({notification_status:result.status==="sent"?"sent":"failed",notification_attempts:row.notification_attempts+1,notification_id:result.id||null,notification_last_error:result.status==="sent"?null:result.status,notification_next_attempt_at:new Date(Date.now()+300000).toISOString()}).eq("id",row.id);
 if(updateError)console.error("[contact-notification] receipt not persisted",{submission_id:submissionId});
 if(result.status!=="sent")console.error("[contact-notification] queued for retry",{submission_id:submissionId,status:result.status});
 return result;
}

export async function retryContactNotifications(limit=8) {
 const db=client();
 if(!db)return {processed:0,sent:0,error:"OUTBOX_NOT_CONFIGURED"};
 const {data,error}=await db.from("crm_delivery_outbox").select("submission_id").in("notification_status",["pending","failed"]).lte("notification_next_attempt_at",new Date().toISOString()).order("notification_next_attempt_at").limit(Math.min(8,Math.max(1,limit)));
 if(error)return {processed:0,sent:0,error:"NOTICE_QUERY_FAILED"};
 let sent=0;
 for(const row of data||[])if((await deliverContactNotification(row.submission_id)).status==="sent")sent++;
 return {processed:data?.length||0,sent};
}
