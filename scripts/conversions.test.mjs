import test from 'node:test';
import assert from 'node:assert/strict';
import { readEnquiryContext, enquiryHref, serviceForPath } from '../src/lib/enquiry.mjs';
import { createConversionTracker } from '../src/lib/conversion-events.mjs';
import { cleanAnalyticsUrl, createPageEventSender, createPageReporter, hasAnalyticsConsent } from '../src/lib/analytics.mjs';

test('enquiry keeps a valid selected scope and rejects arbitrary query values', () => {
 assert.equal(enquiryHref('social','materials'), '/kontakt?usluga=social&wariant=materials#formularz');
 assert.deepEqual(readEnquiryContext('?usluga=seo&wariant=audit&email=private@example.com'),{service:'seo',variant:'audit'});
 assert.deepEqual(readEnquiryContext('?usluga=__proto__&wariant=constructor'),{service:'other',variant:''});
 for (const [path,service] of [['/seo/pozycjonowanie','seo'],['/social-media/obsluga','social'],['/uslugi/strony-internetowe','web'],['/uslugi/produkcja-video','video'],['/uslugi/marketing-internetowy','marketing']]) assert.equal(serviceForPath(path),service);
});
test('analytics needs current consent; failures in storage default to off',()=>{
 assert.equal(hasAnalyticsConsent({getItem:k=>k==='cookie-consent'?'accepted':'2'}),true);
 assert.equal(hasAnalyticsConsent({getItem:()=> 'accepted'}),false);
 assert.equal(hasAnalyticsConsent({getItem:()=>{throw Error('blocked');}}),false);
});
test('tracker allowlists event and service, never passes caller fields, honors consent',()=>{
 const events=[];let consent=false;
 const track=createConversionTracker({consent:()=>consent,ahrefs:n=>events.push(n),ga:(n,p)=>events.push([n,p])});
 track('lead_received','seo'); assert.equal(events.length,0);
 consent=true; track('private@example.com','web'); assert.equal(events.length,0);
 track('lead_received','private@example.com',{email:'private@example.com'});
 assert.deepEqual(events,['lead_received_other',['generate_lead',{service:'other'}]]);
});
test('one analytics provider failing does not block another or the form',()=>{
 const events=[];const track=createConversionTracker({consent:()=>true,ahrefs:()=>{throw Error();},ga:(...v)=>events.push(v)});
 assert.doesNotThrow(()=>track('form_start','web'));assert.deepEqual(events,[['form_start',{service:'web'}]]);
});
test('SPA page views wait for consent, deduplicate mounts and strip query/hash from URL and referrer',()=>{
 const events=[];let ready=false;
 const report=createPageReporter({ready:()=>ready,send:(...args)=>events.push(args),referrer:'https://fotz.pl/oferta?email=private#part'});
 report('https://www.fotz-studio.pl/kontakt?email=private#form','Kontakt'); assert.equal(events.length,0);
 ready=true;report('https://www.fotz-studio.pl/kontakt?email=private#form','Kontakt');
 report('https://www.fotz-studio.pl/kontakt?usluga=web','Kontakt');
 report('https://www.fotz-studio.pl/uslugi/strony-internetowe','WWW');
 assert.equal(events.length,2);assert.equal(events[0][1].page_referrer,'https://fotz.pl/oferta');assert.equal(events[1][1].page_referrer,'https://www.fotz-studio.pl/kontakt');
 assert.doesNotMatch(JSON.stringify(events),/private|email=|usluga=|#form/);
 assert.equal(cleanAnalyticsUrl('javascript:alert(1)'), '');
});
test('conversion events carry the latest reported SPA page and referrer explicitly', () => {
 const events=[];
 const send=createPageEventSender({send:(...args)=>events.push(args),initialContext:{page_location:'https://www.fotz-studio.pl/kontakt?email=private',page_referrer:'https://fotz.pl/?private=1',page_title:'Kontakt'}});
 send('form_start',{service:'other'});
 send('page_view',{page_location:'https://www.fotz-studio.pl/uslugi/strony-internetowe#zakres',page_referrer:'https://www.fotz-studio.pl/kontakt?email=private',page_title:'WWW'});
 send('offer_view',{service:'web'});
 send('generate_lead',{service:'web'});
 assert.equal(events[0][1].page_location,'https://www.fotz-studio.pl/kontakt');
 for (const [,params] of events.slice(2)) {
  assert.equal(params.page_location,'https://www.fotz-studio.pl/uslugi/strony-internetowe');
  assert.equal(params.page_referrer,'https://www.fotz-studio.pl/kontakt');
  assert.equal(params.page_title,'WWW'); assert.equal(params.service,'web');
 }
 assert.doesNotMatch(JSON.stringify(events),/private|email=|#zakres/);
});
