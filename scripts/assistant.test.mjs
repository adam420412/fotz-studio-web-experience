import test from 'node:test';
import assert from 'node:assert/strict';
import {answerQuestion,assistantTopics} from '../src/data/business.mjs';
test('common questions resolve to the right topic without misleading substring collisions',()=>{
 for (const [q,path] of [['Gdzie zobaczę realizacje?','/realizacje'],['Strony internetowe w Poznaniu','/uslugi/strony-internetowe'],['Ile kosztują rolki?','/cennik'],['Gdzie znajduje się studio?','/kontakt'],['Chcę pobrać checklistę PDF','/zasoby']]) assert.equal(answerQuestion(q).links[0].href,path,q);
 for(const topic of assistantTopics) assert.equal(answerQuestion(topic.question).answer,topic.answer,topic.question);
 assert.match(answerQuestion('Czy jest parking dla rowerów?').answer,/zespołem/);
});
