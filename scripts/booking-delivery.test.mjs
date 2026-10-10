import test from 'node:test';
import assert from 'node:assert/strict';
import { webcrypto } from 'node:crypto';
import { createBookingSubmitter } from '../src/lib/booking-delivery.mjs';

const payload = {name:'Test',email:'test@example.invalid',phone:'123456789',booking_date:'2026-10-12',booking_time:'09:00'};
const receipt = body => ({data:{success:true,submission_id:body.submission_id,booking_id:'booking-1',crm_queued:true,crm_delivered:false}});
function setup(invoke = async body => receipt(body)) {
  const saved=new Map(), sent=[];
  const options={crypto:webcrypto,storage:{getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)},context:()=>({path:'/konsultacja',url:'https://www.fotz-studio.pl/konsultacja',analytics:false}),invoke:async body=>{sent.push(body);return invoke(body);}};
  return {submit:createBookingSubmitter(options),options,saved,sent};
}
test('double click and reload reuse a booking receipt without storing personal data',async()=>{
  const h=setup();
  const [a,b]=await Promise.all([h.submit(payload),h.submit(payload)]);
  assert.equal(a.submission_id,b.submission_id);
  await createBookingSubmitter(h.options)(payload);
  assert.equal(h.sent.length,1);
  assert.doesNotMatch(JSON.stringify([...h.saved]),/test@example|123456789|2026-10-12/);
  assert.equal(a.crm_delivered,false);
  assert.equal(h.sent[0].consent.analytics,false);
  assert.equal(h.sent[0].source_detail,'website:/konsultacja');
});
test('ambiguous network failure retries the same identity',async()=>{
  let attempts=0;
  const h=setup(async body=>++attempts===1?{error:new Error('timeout')}:receipt(body));
  await assert.rejects(h.submit(payload));
  await h.submit(payload);
  assert.equal(h.sent[0].submission_id,h.sent[1].submission_id);
});
test('rejects a missing booking, mismatched identity or missing CRM queue acknowledgement',async()=>{
  for (const change of [{booking_id:null},{booking_id:{}},{submission_id:'wrong'},{crm_queued:false},{success:false}]) {
    const h=setup(async body=>({data:{...receipt(body).data,...change}}));
    await assert.rejects(h.submit(payload));
  }
});
test('slot conflict is recoverable and choosing another slot gets a new identity',async()=>{
  let attempts=0;
  const h=setup(async body=>++attempts===1?{error:new Error('409'),data:{error:'SLOT_TAKEN'}}:receipt(body));
  await assert.rejects(h.submit(payload),{code:'SLOT_TAKEN'});
  await h.submit({...payload,booking_time:'10:00'});
  assert.notEqual(h.sent[0].submission_id,h.sent[1].submission_id);
});
test('browser storage failure does not prevent submitting or deduplicating',async()=>{
  const h=setup();
  const submit=createBookingSubmitter({...h.options,storage:{getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}}});
  await submit(payload); await submit(payload);
  assert.equal(h.sent.length,1);
});
