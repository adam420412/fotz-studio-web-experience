// @vitest-environment node
import {beforeEach,expect,it,vi} from 'vitest';
const mocks=vi.hoisted(()=>({answers:[] as unknown[],writes:[] as Record<string,unknown>[],fetch:vi.fn(),db:{} as unknown}));
vi.mock('npm:@supabase/supabase-js@2',()=>({createClient:()=>mocks.db}));
import {deliverContactNotification} from '../supabase/functions/_shared/contact-notifications';
const durable={id:'row1',payload:{email:'test@example.invalid',subject:'Durable subject'},notification_status:'pending',notification_attempts:0,notification_id:null};
beforeEach(()=>{
 mocks.answers=[];mocks.writes=[];vi.clearAllMocks();
 vi.stubGlobal('fetch',mocks.fetch);vi.stubGlobal('Deno',{env:{get:(k:string)=>({SUPABASE_URL:'https://test.invalid',SUPABASE_SERVICE_ROLE_KEY:'test',RESEND_API_KEY:'test'}[k])}});
 const chain={select:()=>chain,eq:()=>chain,neq:()=>chain,lte:()=>chain,update:(data:Record<string,unknown>)=>{mocks.writes.push(data);return chain;},maybeSingle:async()=>mocks.answers.shift(),then:(resolve:(data:unknown)=>unknown)=>resolve({error:null})};
 mocks.db={from:()=>chain};
});
it('does not resend a persisted notification receipt',async()=>{
 mocks.answers=[{data:{...durable,notification_status:'sent',notification_id:'mail1'}}];
 expect(await deliverContactNotification('id1')).toEqual({status:'sent',id:'mail1'});expect(mocks.fetch).not.toHaveBeenCalled();
});
it('leases a notification before sending and keeps failed attempts for retry',async()=>{
 mocks.answers=[{data:durable},{data:{id:'row1'}}];mocks.fetch.mockResolvedValue(new Response('down',{status:503}));
 expect((await deliverContactNotification('id1')).status).toBe('failed');
 expect(mocks.writes[0]).toHaveProperty('notification_next_attempt_at');
 expect(mocks.writes[1]).toMatchObject({notification_status:'failed',notification_attempts:1});
});
it('a concurrent request does not send while the lease is held',async()=>{
 mocks.answers=[{data:durable},{data:null}];expect((await deliverContactNotification('id1')).status).toBe('pending');expect(mocks.fetch).not.toHaveBeenCalled();
});
it('sends the persisted payload, not a changed retry body, and saves receipt',async()=>{
 mocks.answers=[{data:durable},{data:{id:'row1'}}];mocks.fetch.mockResolvedValue(new Response('{"id":"mail1"}'));
 expect(await deliverContactNotification('id1',{subject:'Changed'})).toEqual({status:'sent',id:'mail1'});
 expect(JSON.parse(mocks.fetch.mock.calls[0][1].body).subject).toBe('Durable subject');
 expect(mocks.writes[1]).toMatchObject({notification_status:'sent',notification_id:'mail1'});
});
