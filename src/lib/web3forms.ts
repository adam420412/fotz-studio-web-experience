/** Contact requests use a single server receipt, retry identity and CRM path. */
import { createContactSubmitter } from "@/lib/contact-delivery.mjs";
import { hasAnalyticsConsent } from "@/lib/analytics.mjs";
import { trackConversion } from "@/lib/conversions";
import { serviceForPath } from "@/lib/enquiry.mjs";
import { getUTMs } from "@/lib/utm";
import { sendLeadToCRM } from "@/hooks/useCRMWebhook";
export interface Web3FormsPayload { subject?: string; from_name?: string; [key:string]:unknown }
export interface Web3FormsResponse { success:boolean; message?:string; id?:string; submission_id?:string; crm_queued?:boolean; crm_delivered?:boolean; [key:string]:unknown }
let submit: ReturnType<typeof createContactSubmitter>;
export async function submitWeb3Form(payload:Web3FormsPayload):Promise<Web3FormsResponse> {
 if (!submit) {
  let storage:Storage|undefined;
  try { storage = window.sessionStorage; } catch { /* in-memory retry identity remains available */ }
  submit = createContactSubmitter({
   storage, crypto:window.crypto,
   context:() => {
    let analytics=false;
    try { analytics=hasAnalyticsConsent(window.localStorage); } catch { /* no consent */ }
    return {path:window.location.pathname,url:window.location.origin+window.location.pathname,analytics,attribution:getUTMs()};
   },
   invoke:async body => {
    const { supabase } = await import("@/integrations/supabase/client");
    return supabase.functions.invoke('send-contact',{body,signal:AbortSignal.timeout(35000)});
   },
   legacyCRM:body => sendLeadToCRM({name:String(body.name || body.from_name || 'Zapytanie ze strony'),email:String(body.email || ''),phone:typeof body.phone==='string'?body.phone:undefined,company:typeof body.company==='string'?body.company:undefined,source:'fotz-studio.pl',notes:[body.subject,body.message].filter(Boolean).join('\n')}),
   track:(_id, _form, path, service) => trackConversion('lead_received', service || serviceForPath(path)),
  });
 }
 const result=await submit(payload);
 try { sessionStorage.setItem('fotz-contact-receipt',JSON.stringify({id:result.submission_id,at:Date.now()})); } catch { /* optional confirmation display */ }
 return result;
}
export const submitContactForm=submitWeb3Form;
export type ContactFormPayload=Web3FormsPayload;
export type ContactFormResponse=Web3FormsResponse;
