import test from 'node:test';
import assert from 'node:assert/strict';
import { attributionFrom, buildPayload, submitLead, submissionIdentity } from '../public/kampanie/lead-core.mjs';
const fields = {name:' Test ',company:' Test Company ',email:'test@example.com',phone:'',need:'Nowa strona',timing:'',message:' Test projektu '};
const context = {url:'https://www.fotz-studio.pl/kampanie/strony.html?utm_source=meta&utm_medium=paid_social&utm_campaign=www&fbclid=click&email=private',service:'www',submissionId:'123',consent:false,fbp:'id',fbc:'click',now:'2026-09-28T20:00:00Z'};
test('attribution and service remain distinct from page URL and contact data', () => {
 const p=buildPayload(fields,context);
 assert.equal(p.source_channel,'meta_ads');assert.equal(p.utm_campaign,'www');
 assert.equal(p.page_url,'https://www.fotz-studio.pl/kampanie/strony.html');
 assert.equal(p.crm_name,'Test');assert.equal(p.marketing_opt_in,false);
 assert.equal(p.consent.analytics,false);assert.equal(p.attribution.fbp,undefined);assert.equal(p.attribution.fbc,undefined);
 assert.equal(p.email,'test@example.com');assert.equal(p.service,'www');
});
test('CAPI browser identifiers are attached only after explicit measurement consent',()=>{
 const p=buildPayload(fields,{...context,consent:true,service:'video'});
 assert.equal(p.attribution.fbp,'id');assert.equal(p.consent.analytics,true);assert.equal(p.consent.marketing,false);assert.equal(p.form_name,'campaign_video');
});
test('UTM values are bounded and unknown query fields are excluded',()=>{
 const a=attributionFrom('https://example.com/?utm_campaign='+'x'.repeat(500)+'&email=private');
 assert.equal(a.utm_campaign.length,240);assert.equal(a.email,undefined);
});
test('retry and page reload keep one submission ID; changed inquiry creates a new ID',async()=>{
 const map=new Map(),storage={getItem:k=>map.get(k),setItem:(k,v)=>map.set(k,v)};
 const id=await submissionIdentity(fields,'www',storage);
 assert.equal(await submissionIdentity({...fields},'www',storage),id);
 assert.notEqual(await submissionIdentity({...fields,message:'Other project'},'www',storage),id);
 assert.ok(![...map.values()][0].includes('test@example.com'));
});
test('server receipt is required: HTTP failure, false success and missing ID are rejected',async()=>{
 for(const [status,data] of [[503,{success:false}],[200,{success:false}],[200,{success:true}],[429,{success:false}]]){
  await assert.rejects(submitLead({endpoint:'test',publicKey:'public'}, {},async()=>new Response(JSON.stringify(data),{status})));
 }
});
test('accepted receipt preserves server submission ID for browser/CAPI deduplication',async()=>{
 let sent;
 const r=await submitLead({endpoint:'test',publicKey:'public'},{submission_id:'123'},async(url,init)=>{
  sent=JSON.parse(init.body);return new Response(JSON.stringify({success:true,submission_id:'123',crm_queued:true}));
 });assert.equal(sent.submission_id,r.submission_id);assert.equal(r.success,true);
});
test('network and invalid JSON fail safely without reporting success',async()=>{
 await assert.rejects(submitLead({}, {},async()=>{throw new TypeError('Failed to fetch');}),/Nie udało się połączyć/);
 await assert.rejects(submitLead({}, {},async()=>new Response('<html>gateway</html>')),/potwierdzenia/);
});
