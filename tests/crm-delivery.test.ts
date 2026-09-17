// @vitest-environment node
import { beforeEach, expect, it, vi } from 'vitest';
vi.mock('npm:@supabase/supabase-js@2',()=>({createClient:vi.fn()}));
import { queueCRMDelivery } from '../supabase/functions/_shared/fotz-crm';
const fetchMock=vi.fn();
beforeEach(()=>{vi.clearAllMocks();vi.stubGlobal('fetch',fetchMock);vi.stubGlobal('Deno',{env:{get:(key:string)=>({FOTZ_CONNECT_HUB_WEBHOOK_URL:'https://hub.example.invalid',FOTZ_CONNECT_HUB_WEBHOOK_SECRET:'test'}[key])}});});
it.each(['<html>Proxy page</html>','null','{}','{"success":true}'])('does not lose a lead on an invalid HTTP 200 receipt: %s',async body=>{
 fetchMock.mockResolvedValue(new Response(body));
 expect(await queueCRMDelivery({submission_id:'retry-1',email:'test@example.invalid'})).toMatchObject({accepted:false,delivered:false});
});
it('accepts a complete confirmed receipt and forwards the same event ID',async()=>{
 fetchMock.mockResolvedValue(new Response('{"success":true,"event_id":"evt-1","lead_id":"lead-1"}'));
 expect(await queueCRMDelivery({submission_id:'retry-1',email:'test@example.invalid'})).toMatchObject({accepted:true,delivered:true,submissionId:'retry-1'});
 expect(fetchMock.mock.calls[0][1].headers['Idempotency-Key']).toBe('retry-1');
});
