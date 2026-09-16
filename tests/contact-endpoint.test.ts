// @vitest-environment node
import { beforeEach, describe, expect, it, vi } from 'vitest';
const mocks = vi.hoisted(()=>({queue:vi.fn(),meta:vi.fn(),rate:vi.fn(),fetch:vi.fn(),env:new Map<string,string>()}));
vi.mock('../supabase/functions/_shared/fotz-crm.ts',()=>({queueCRMDelivery:mocks.queue}));
vi.mock('../supabase/functions/_shared/meta-capi.ts',()=>({sendMetaConversion:mocks.meta}));
vi.mock('../supabase/functions/_shared/public-intake.ts',()=>({checkPublicRateLimit:mocks.rate,isAllowedOrigin:()=>true,publicCorsHeaders:()=>({})}));
import { handleContactRequest } from '../supabase/functions/send-contact/index';
const req=()=>new Request('https://test.invalid',{method:'POST',body:JSON.stringify({email:'test@example.invalid',name:'Test',submission_id:'fixed-id',consent:{analytics:false}})});
beforeEach(()=>{vi.clearAllMocks();mocks.env.clear();vi.stubGlobal('Deno',{env:{get:(key:string)=>mocks.env.get(key)}});vi.stubGlobal('fetch',mocks.fetch);mocks.queue.mockResolvedValue({accepted:true,queued:true,delivered:false,submissionId:'fixed-id'});mocks.meta.mockResolvedValue({sent:false});mocks.rate.mockResolvedValue({configured:true,allowed:true});});
describe('durable acceptance',()=>{
  it('returns acceptance when notification is not configured',async()=>{const r=await handleContactRequest(req());expect(r.status).toBe(200);expect(await r.json()).toMatchObject({success:true,notification_status:'not_configured'});});
  it('does not reject an accepted lead if the email provider fails',async()=>{mocks.env.set('RESEND_API_KEY','test');mocks.fetch.mockResolvedValue(new Response('failure',{status:503}));const r=await handleContactRequest(req());expect(await r.json()).toMatchObject({success:true,notification_status:'failed'});});
  it('does not reject an accepted lead on notification timeout',async()=>{mocks.env.set('RESEND_API_KEY','test');mocks.fetch.mockRejectedValue(new Error('timeout'));expect((await (await handleContactRequest(req())).json()).success).toBe(true);});
  it('does not fire Meta or notify if durable capture fails',async()=>{mocks.queue.mockResolvedValue({accepted:false,submissionId:'fixed-id'});const r=await handleContactRequest(req());expect(r.status).toBe(503);expect(mocks.meta).not.toHaveBeenCalled();expect(mocks.fetch).not.toHaveBeenCalled();});
  it('reuses the submission id as email idempotency key',async()=>{mocks.env.set('RESEND_API_KEY','test');mocks.fetch.mockResolvedValue(new Response(JSON.stringify({id:'mail-id'})));const r=await handleContactRequest(req());expect(await r.json()).toMatchObject({success:true,notification_status:'sent'});expect(mocks.fetch.mock.calls[0][1].headers['Idempotency-Key']).toBe('contact/fixed-id');});
  it('rejects malformed contact data before persisting',async()=>{const r=await handleContactRequest(new Request('https://test.invalid',{method:'POST',body:'{"email":"bad"}'}));expect(r.status).toBe(400);expect(mocks.queue).not.toHaveBeenCalled();});
});
