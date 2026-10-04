import test from 'node:test';
import assert from 'node:assert/strict';
import {webcrypto} from 'node:crypto';
import {createContactSubmitter} from '../src/lib/contact-delivery.mjs';
function setup(overrides={}) {
 const saved=new Map(), calls={sent:[],tracked:[],crm:0};
 const options={storage:{getItem:k=>saved.get(k),setItem:(k,v)=>saved.set(k,v)},crypto:webcrypto,context:()=>({path:'/kontakt',url:'https://www.fotz-studio.pl/kontakt',analytics:true,attribution:{utm_source:'google'}}),invoke:async body=>{calls.sent.push(body);return {data:{success:true,submission_id:body.submission_id,crm_queued:true,crm_delivered:false}};},track:(...args)=>calls.tracked.push(args),legacyCRM:async()=>{calls.crm++;return {success:true};},...overrides};
 return {submit:createContactSubmitter(options),options,calls,saved};
}
const payload={name:'Test',email:'test@example.invalid',message:'Test zapytania'};
test('one receipt for concurrent submit, retry and recreated client; no duplicate CRM or PII in storage/events',async()=>{
 const h=setup(); const [a,b]=await Promise.all([h.submit(payload),h.submit(payload)]);
 assert.equal(a.submission_id,b.submission_id);await h.submit(payload);await createContactSubmitter(h.options)(payload);
 assert.equal(h.calls.sent.length,1);assert.equal(h.calls.crm,0);assert.equal(h.calls.tracked.length,1);
 assert.doesNotMatch(JSON.stringify([...h.saved,...h.calls.tracked]),/test@example|Test zapytania/);
});
test('ambiguous transport failure retries the identical submission id and tracks only confirmed acceptance',async()=>{
 const ids=[];let attempts=0;const h=setup({invoke:async body=>{ids.push(body.submission_id);return ++attempts===1?{error:Error('timeout')}:{data:{success:true,submission_id:body.submission_id,crm_queued:true}};}});
 await assert.rejects(h.submit(payload));assert.equal(h.calls.tracked.length,0);await h.submit(payload);assert.equal(ids[0],ids[1]);assert.equal(h.calls.tracked.length,1);
});
test('success without durable receipt, mismatched identity or missing queue acknowledgement is rejected',async()=>{
 for(const data of [{success:true},{success:true,submission_id:'wrong',crm_queued:true}]){
  const h=setup({invoke:async()=>({data})});await assert.rejects(h.submit(payload));assert.equal(h.calls.tracked.length,0);assert.equal(h.calls.crm,0);
 }
 const h=setup({invoke:async body=>({data:{success:true,submission_id:body.submission_id,crm_queued:false}})});await assert.rejects(h.submit(payload));
});
test('legacy mail receipt invokes fallback once and reports its actual CRM outcome',async()=>{
 const h=setup({invoke:async()=>({data:{success:true,id:'mail-receipt'}}),legacyCRM:async()=>{h.calls.crm++;return {success:false};}});
 const receipt=await h.submit(payload);assert.equal(receipt.success,true);assert.equal(receipt.crm_delivered,false);await h.submit(payload);assert.equal(h.calls.crm,1);
});
test('no analytics consent means no tracking and no server-side marketing signal',async()=>{
 const h=setup({context:()=>({path:'/kontakt',url:'https://www.fotz-studio.pl/kontakt',analytics:false})});await h.submit(payload);assert.equal(h.calls.tracked.length,0);assert.deepEqual(h.calls.sent[0].consent,{analytics:false,marketing:false,source:'website:contact-request'});
});

test('analytics failure does not reject an accepted lead or duplicate it on retry',async()=>{
 const h=setup({track:()=>{throw new Error('analytics unavailable');}});
 const first=await h.submit(payload);const retry=await h.submit(payload);
 assert.equal(first.success,true);assert.equal(first.submission_id,retry.submission_id);assert.equal(h.calls.sent.length,1);
});
