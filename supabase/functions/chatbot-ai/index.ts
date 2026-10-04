// Compatibility endpoint for older clients. Answers use the same curated facts
// as the browser assistant; there is no model call or invented offer data.
import { answerQuestion } from '../../../src/data/business.mjs';
const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type', 'Content-Type': 'application/json' };
Deno.serve(async req => {
 if (req.method === 'OPTIONS') return new Response(null, {headers});
 if (req.method !== 'POST') return new Response(JSON.stringify({error:'Method not allowed'}), {status:405, headers});
 try {
   const {message} = await req.json();
   if (typeof message !== 'string' || !message.trim() || message.length > 500) return new Response(JSON.stringify({error:'Podaj pytanie do 500 znaków.'}),{status:400,headers});
   const {answer,links} = answerQuestion(message);
   return new Response(JSON.stringify({answer,links}),{headers});
 } catch { return new Response(JSON.stringify({error:'Nieprawidłowe dane.'}),{status:400,headers}); }
});
